import { envOk, safeEqual, makeToken, sessionCookie, sameOriginJson, clientIp } from "../lib/auth.js";
import { hit, clear } from "../lib/store.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!sameOriginJson(req)) return res.status(400).json({ error: "Bad request" });
  if (!envOk()) return res.status(500).json({ error: "Admin login isn't set up yet (missing environment variables)." });

  const rlKey = `badminton:rl:${clientIp(req)}`;
  try {
    const n = await hit(rlKey, 15 * 60);
    if (n > 8) return res.status(429).json({ error: "Too many attempts. Try again in 15 minutes." });
  } catch { /* if storage is down, still allow a (single-user) login attempt */ }

  const { username = "", password = "" } = req.body || {};
  // Evaluate both so timing doesn't reveal which one was wrong.
  const okU = safeEqual(String(username).trim().toLowerCase(), process.env.ADMIN_USER.trim().toLowerCase());
  const okP = safeEqual(String(password), process.env.ADMIN_PASSWORD);
  if (!(okU && okP)) {
    await new Promise((r) => setTimeout(r, 700));
    return res.status(401).json({ error: "Wrong username or password." });
  }
  try { await clear(rlKey); } catch {}
  res.setHeader("Set-Cookie", sessionCookie(makeToken()));
  return res.status(200).json({ ok: true });
}
