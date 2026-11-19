import { isAdmin, sameOriginJson } from "../lib/auth.js";
import { getState, setState } from "../lib/store.js";

const str = (v, max = 120) => typeof v === "string" && v.length <= max;
const num = (v) => typeof v === "number" && Number.isFinite(v);
const date = (v) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);

// Reject anything that isn't the exact shape the app writes.
function validate(d) {
  if (!d || typeof d !== "object") return "Invalid data";
  const { players, sessions, topups, settings } = d;
  if (![players, sessions, topups].every(Array.isArray) || !settings || typeof settings !== "object") return "Invalid data";
  if (players.length > 200 || sessions.length > 3000 || topups.length > 5000) return "Too much data";
  if (!players.every((p) => p && str(p.id, 20) && str(p.name, 60))) return "Bad player";
  if (!sessions.every((s) => s && str(s.id, 20) && date(s.date) && str(s.venue) && num(s.rate) && num(s.hours) && num(s.courts) && Array.isArray(s.att) && s.att.length <= 200 && s.att.every((a) => str(a, 20)))) return "Bad session";
  if (!topups.every((t) => t && str(t.id, 20) && str(t.pid, 20) && date(t.date) && num(t.amt) && (t.note == null || str(t.note, 200)) && (t.to == null || str(t.to, 60)))) return "Bad payment";
  const st = settings;
  if (!Array.isArray(st.venues) || !st.venues.every((v) => v && str(v.name) && num(v.rate)) || !num(st.advance) || !num(st.low)) return "Bad settings";
  if (st.holder != null && !str(st.holder, 60)) return "Bad settings";
  if (st.bank != null) {
    if (typeof st.bank !== "object") return "Bad settings";
    for (const k of ["bankName", "accNo", "sort", "benef", "ref"]) if (st.bank[k] != null && !str(st.bank[k], 80)) return "Bad bank details";
  }
  return null;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  try {
    if (req.method === "GET") {
      const cur = await getState();
      return res.status(200).json({ rev: cur.rev, data: cur.data, admin: isAdmin(req) });
    }
    if (req.method === "POST") {
      if (!sameOriginJson(req)) return res.status(400).json({ error: "Bad request" });
      if (!isAdmin(req)) return res.status(401).json({ error: "Please log in again." });
      const { rev, data } = req.body || {};
      const bad = validate(data);
      if (bad) return res.status(400).json({ error: bad });
      const cur = await getState();
      if (rev !== cur.rev) return res.status(409).json({ error: "Changed elsewhere", rev: cur.rev, data: cur.data });
      const next = { rev: cur.rev + 1, data };
      await setState(next);
      return res.status(200).json({ ok: true, rev: next.rev });
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
