import crypto from "node:crypto";

const COOKIE = "bf_session";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

const sha = (s) => crypto.createHash("sha256").update(String(s)).digest();
export const safeEqual = (a, b) => crypto.timingSafeEqual(sha(a), sha(b));

export function envOk() {
  return Boolean(process.env.ADMIN_USER && process.env.ADMIN_PASSWORD && process.env.SESSION_SECRET);
}

const mac = (b) => crypto.createHmac("sha256", process.env.SESSION_SECRET).update(b).digest("base64url");

export function makeToken() {
  const b = Buffer.from(JSON.stringify({ u: process.env.ADMIN_USER, exp: Date.now() + MAX_AGE * 1000 })).toString("base64url");
  return `${b}.${mac(b)}`;
}

function readToken(tok) {
  if (!tok || !process.env.SESSION_SECRET) return null;
  const [b, m] = String(tok).split(".");
  if (!b || !m) return null;
  try {
    if (!safeEqual(m, mac(b))) return null;
    const p = JSON.parse(Buffer.from(b, "base64url").toString());
    if (!p.exp || p.exp < Date.now() || p.u !== process.env.ADMIN_USER) return null;
    return p;
  } catch { return null; }
}

function parseCookies(h = "") {
  const out = {};
  h.split(";").forEach((p) => { const i = p.indexOf("="); if (i > 0) out[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim()); });
  return out;
}

export const isAdmin = (req) => Boolean(readToken(parseCookies(req.headers.cookie).bf_session));

export const sessionCookie = (token) =>
  `${COOKIE}=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${MAX_AGE}`;
export const clearCookie = () => `${COOKIE}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`;

// Block cross-site POSTs: must be JSON and (if an Origin is sent) same-origin.
export function sameOriginJson(req) {
  const ct = String(req.headers["content-type"] || "");
  if (!ct.includes("application/json")) return false;
  const origin = req.headers.origin;
  if (!origin) return true;
  try { return new URL(origin).host === req.headers.host; } catch { return false; }
}

export const clientIp = (req) =>
  String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown").split(",")[0].trim();
