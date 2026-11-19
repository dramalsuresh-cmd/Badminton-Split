import { clearCookie, sameOriginJson } from "../lib/auth.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!sameOriginJson(req)) return res.status(400).json({ error: "Bad request" });
  res.setHeader("Set-Cookie", clearCookie());
  return res.status(200).json({ ok: true });
}
