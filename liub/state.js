// Starting data, used only until the first save is made from the admin account.
// (Bank details are intentionally blank: enter them in the app after you log in.)
export default {
  players: [
    { id: "jj2qrbu", name: "Amal" },
    { id: "4pldsk9", name: "Aby" },
    { id: "t378n51", name: "Mukil" },
    { id: "7w1a7th", name: "Justin" },
    { id: "jt8c0c8", name: "Pince" },
    { id: "4kfp64p", name: "Akhil Sebastian" },
    { id: "1zm754p", name: "Akhil" },
    { id: "s3fcmke", name: "Manu" },
    { id: "v4zbl7h", name: "Prashanth" },
    { id: "3gvdc07", name: "Sajesh" },
    { id: "dm3teq9", name: "Deepak" },
    { id: "x6al9r4", name: "Suvi" },
  ],
  sessions: [
    { id: "8blwz7x", date: "2026-11-17", venue: "Blackburn Leisure Centre", rate: 12, hours: 1, courts: 1,
      att: ["4pldsk9", "4kfp64p", "jj2qrbu", "t378n51"] },
    { id: "383zwkd", date: "2026-11-18", venue: "Blackburn Leisure Centre", rate: 12, hours: 1, courts: 1,
      att: ["4pldsk9", "1zm754p", "4kfp64p", "jj2qrbu", "dm3teq9", "7w1a7th", "s3fcmke"] },
  ],
  topups: [],
  settings: {
    venues: [
      { name: "Blackburn Leisure Centre", rate: 12 },
      { name: "Audley Sports", rate: 10 },
    ],
    advance: 10,
    low: 5,
    holder: "Amal",
    bank: { bankName: "", accNo: "", sort: "", benef: "", ref: "Badminton" },
  },
};

// Storage: Upstash Redis over its REST API (no npm packages needed).
// On Vercel, add "Upstash Redis" from the Marketplace/Storage tab and it sets these env vars for you.
// Locally (no VERCEL env var) it falls back to memory so you can test.
import seed from "./seed.js";

const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const mem = new Map();
const KEY = "badminton:state";

export const configured = () => Boolean(URL_ && TOKEN);

async function cmd(...args) {
  if (!configured()) {
    if (process.env.VERCEL) throw new Error("Storage not configured (add Upstash Redis to the project)");
    return memCmd(args);
  }
  const r = await fetch(URL_, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(args),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.error) throw new Error(j.error || `Storage error ${r.status}`);
  return j.result;
}

function memCmd([c, k, v, ...rest]) {
  switch (c) {
    case "GET": return mem.get(k) ?? null;
    case "SET": mem.set(k, v); return "OK";
    case "INCR": { const n = (Number(mem.get(k)) || 0) + 1; mem.set(k, String(n)); return n; }
    case "EXPIRE": return 1;
    case "DEL": mem.delete(k); return 1;
    default: return null;
  }
}

export async function getState() {
  const raw = await cmd("GET", KEY);
  if (!raw) return { rev: 0, data: structuredClone(seed) };
  return typeof raw === "string" ? JSON.parse(raw) : raw;
}

export async function setState(obj) {
  await cmd("SET", KEY, JSON.stringify(obj));
}

// Fixed-window counter used to slow down password guessing.
export async function hit(key, windowSec) {
  const n = await cmd("INCR", key);
  if (n === 1) await cmd("EXPIRE", key, windowSec);
  return n;
}
export const clear = (key) => cmd("DEL", key);

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
