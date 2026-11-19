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
