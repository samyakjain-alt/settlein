# SettleIn

Step-by-step checklists and community-tested tips for your first 30 days in a new city.
Launch city: **Gurgaon**. Next: **Bangalore**.

## Problem
People moving to a new Indian metro for work have to figure out dozens of setup tasks
(flat, gas, Wi-Fi, house help, paperwork) on their own, without local friends to ask.
The info is scattered across Reddit, WhatsApp groups and brokers.

## Goal (v1)
A newcomer gets a clear, phased checklist (before the move → first week → first month),
with upvoted tips on each step, within 5 minutes of landing on the site.

## Run it locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Where things live
- `src/data/cities.ts` — all checklist content (phases → steps → tips). Edit this to add steps.
- `src/components/Checklist.tsx` — the checklist UI, progress bar and upvotes.
- `src/app/[city]/page.tsx` — one page per city.

## v0 limits (next steps)
- Progress and upvotes are saved in your browser only. Next: a real database so upvotes are shared.
- No "add a tip" form yet.
- Seed tips need fact-checking before launch.

## Deploy
Import this repo on vercel.com → New Project. No settings needed.
