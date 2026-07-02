# Apex Junior Racing

Website for a junior road-cycling race team. Design brief: **futuristic, representative of speed, but classy** — F1 team site meets Apple product page, not Tron.

Single-page, scroll-driven site. **Static, no backend/DB.** Built to deploy to Vercel.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v3 · Framer Motion · `next/font` + `next/image`.

## Preview locally

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

Other commands:

```bash
npm run build   # production build (must compile clean)
npm run start   # serve the production build
npm run lint    # ESLint (flat config)
```

## Swapping the placeholder content

Everything Brian is likely to change lives in **four files** under `src/lib/`. No component edits needed.

| To change… | Edit | Notes |
| --- | --- | --- |
| Team name, tagline, hero copy, contact emails, section labels | `src/lib/site.ts` | Renames the whole site from one file. |
| Riders (names, ages, categories, bios) | `src/lib/roster.ts` | 6–8 riders. Add a real photo by dropping a file in `public/riders/` and setting `photo: "/riders/name.jpg"` — the gradient placeholder is used until then. |
| Race calendar + results | `src/lib/season.ts` | Completed vs. upcoming is derived from the date automatically — just keep dates accurate and add to `results[]`. |
| Sponsors / partners | `src/lib/sponsors.ts` | Add a real logo by dropping an SVG in `public/sponsors/` and setting `logo: "/sponsors/name.svg"`. |

Brand colors and fonts live in `src/lib/design-tokens.ts` (mirrored in `tailwind.config.ts`).

### Hero video

The hero has an empty slot for a looping, muted race clip. Drop a file at `public/hero.mp4` and flip `HAS_HERO_VIDEO` to `true` in `src/components/Hero.tsx`. Until then it renders the cool-undertone gradient.

## Design tokens

- `bg` near-black `#0A0A0F` (cool undertone in gradients) · `fg` near-white `#F2F4F7`
- muted grays `#8A8F98` / `#4B4F58`
- `accent` electric blue `#0057FF` — links, buttons, key stats only (kept restrained)
- Display font: **Space Grotesk** (700/500) · Body font: **Inter** (400/500)

## Deploying to Vercel

Not linked yet (by design). When ready: push to a Git remote, import the repo in Vercel, and deploy with defaults — Next.js is auto-detected, no env vars needed for v1.

## Structure

```
src/
  app/
    layout.tsx        # fonts, metadata, <html> shell
    page.tsx          # assembles the single-page sections
    globals.css       # Tailwind layers + reveal/utility styles
  components/          # Hero, Roster, Season, Sponsors, Contact, etc.
  lib/
    site.ts           # ← team name / tagline / contacts (swap here)
    roster.ts         # ← riders (swap here)
    season.ts         # ← races + results (swap here)
    sponsors.ts       # ← partners (swap here)
    design-tokens.ts  # colors + fonts (single source of truth)
    stats.ts          # derived team stats for the dashboard numbers
```

## Note

All content (riders, races, results, sponsors) is **illustrative placeholder data** and should be replaced with real team information before launch.
