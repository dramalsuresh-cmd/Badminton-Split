# Badminton Court Fund

Shared fund tracker for the badminton group. Everyone with the link can **view** (sheet, balances, bank details with copy buttons). Only the **admin** (username + password) can edit.

- `public/index.html` – the whole front end
- `api/state.js` – read (public) / save (admin only)
- `api/login.js`, `api/logout.js` – admin session (HTTP-only cookie, 30 days)
- `lib/` – storage (Upstash Redis REST), auth, starting data

## Deploy on Vercel

1. Put this folder in a GitHub repo (use a **private** repo) and import it at vercel.com → *Add New → Project*. No build settings needed.
2. In the project: **Storage → Create / Connect → Upstash Redis** (free plan is plenty). Connect it to this project – Vercel adds `KV_REST_API_URL` and `KV_REST_API_TOKEN` for you.
3. In **Settings → Environment Variables** add (all environments):
   - `ADMIN_USER` – your username
   - `ADMIN_PASSWORD` – a long password (a few random words is fine)
   - `SESSION_SECRET` – 32+ random characters (e.g. run `openssl rand -hex 32`)
4. **Redeploy** (Deployments → ⋯ → Redeploy) so the variables take effect.
5. Open the site, tap **Admin login** at the bottom, sign in, and enter your bank details on the **Pay** tab.
6. Share the URL in the WhatsApp group.

To change the password later: edit `ADMIN_PASSWORD` in Vercel and redeploy (this also logs out old sessions only if you change `SESSION_SECRET`).

## Notes

- Starting players/sessions come from `lib/seed.js` and are only used until the first save. Use **Admin → Clear all data** to start afresh.
- Anyone with the link can see names, balances and the bank details you enter. Don't share the link outside the group.
- Login is rate-limited (8 wrong tries per 15 minutes per IP). Saves are rejected unless the admin cookie is valid, and a stale save is refused if the data changed in between.

## Local test

`vercel dev` (needs the Vercel CLI) – without Redis it uses in-memory storage.
