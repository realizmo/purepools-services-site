# PurePools Services — PROJECT.md

> **Authoritative project memory.** Read this file at the start of every task.
> Update it at the end of every task before marking work complete.

---

## Project Overview

**PurePools Services** is a marketing and lead-generation website for a Long Island, NY pool company.
It presents services, pricing, reviews, and contact info, and collects free-estimate inquiries.

**Live site target:** Netlify (see `netlify.toml`)
**Repository:** `purepools-services-site`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.9 — App Router |
| UI | React 19.2.4 |
| Language | TypeScript (strict) |
| Styling | CSS Modules + CSS custom properties (no Tailwind, no CSS-in-JS) |
| Fonts | `next/font/google` — Montserrat (headings), Open Sans (body) |
| Images | `next/image` — remote patterns: `images.unsplash.com` |
| Deployment | Netlify |

---

## Folder Structure

```
purepools-services-site/
├── app/
│   ├── layout.tsx           # Root layout: fonts, metadata, TopBar/Navbar/Footer
│   ├── page.tsx             # Homepage composition
│   ├── globals.css          # Design tokens + base styles
│   ├── contact/page.tsx     # Contact info page
│   ├── services/page.tsx    # Services detail page
│   └── api/reviews/route.ts # Google Places reviews proxy (revalidates hourly)
├── components/              # All presentational components (see Component Catalogue)
├── lib/
│   └── data.ts              # Static content: nav, services, reviews, contact, slides
├── docs/                    # Project documentation (authoritative memory)
│   ├── PROJECT.md           # ← you are here
│   └── ARCHITECTURE.md      # Architecture decisions and patterns
├── public/                  # hero-1.png, hero-2.png, hero-3.png (brand photos)
├── next.config.ts
├── tsconfig.json
├── netlify.toml
└── package.json
```

---

## Component Catalogue

| Component | Responsibility |
|---|---|
| `TopBar` | Slim navy utility bar — phone, email, CTA |
| `Navbar` | Primary nav, dropdowns, mobile drawer |
| `Hero` | Auto-rotating image/headline slider, dual CTAs |
| `AnnouncementBanner` | Seasonal callout strip |
| `AboutSnippet` | 2-col text + image |
| `ServicesGrid` | 3-card service grid |
| `CtaBanner` | Full-width blue CTA strip |
| `ReviewsCarousel` | Auto-rotating testimonial slider |
| `FreeEstimateForm` | UI-only contact form with client validation |
| `Footer` | 4-col footer + service area + copyright |
| `Poster` | Standalone promotional poster section |

---

## Design System (CSS variables in `app/globals.css`)

| Token | Value |
|---|---|
| `--color-primary` | `#1a9edb` (sky blue) |
| `--color-primary-dark` | `#1480b5` |
| `--color-primary-light` | `#4fb8e6` |
| `--color-navy` | `#1a2e44` |
| `--color-bg-light` | `#f5f8fa` |
| `--color-bg-dark` | `#0e1a2b` |
| `--font-heading` | Montserrat |
| `--font-body` | Open Sans |
| `--container-max` | `1200px` |
| `--radius-sm/md/lg` | `3px / 6px / 12px` |
| `--shadow-card / --shadow-lg` | elevated surfaces |

**Utility classes:** `.container`, `.btn`, `.btn--primary`, `.btn--outline`, `.btn--navy`

---

## Static Data (`lib/data.ts`)

All site copy lives here. Edit here first — components consume these exports:

- `PRIMARY_NAV` — nav links
- `SERVICES` — 4 services with pricing, bullets, descriptions
- `REVIEWS` — 3 seed testimonials (fallback when Google Places API unavailable)
- `CONTACT` — phone, email, address, map link
- `HERO_SLIDES` — 3 hero slides
- `SERVICE_AREA` — Long Island town list
- `SUMMER_HOURS` — operating hours

---

## API Routes

### `GET /api/reviews`
Proxies Google Places Details API.
- Env var required: `GOOGLE_PLACES_API_KEY`
- Place ID: `ChIJG1880ddlwokRD9BS52wUR2g`
- Revalidates every 3600 seconds (ISR)
- Returns: `{ reviews, rating, total }`
- Falls back gracefully when API key absent (500) or upstream fails (502)

---

## Business Details

| Field | Value |
|---|---|
| Company | PurePools Services |
| Service area | Nassau & Suffolk counties, Long Island, NY |
| Phone (EN) | +1 (516) 201-7929 |
| Phone (ES) | +1 (516) 201-7929 |
| Email | pure.pool.servicess@gmail.com |
| Address | 94 North Industry Ct., Deer Park, NY 11729 |

### Services & Pricing
| Service | Price |
|---|---|
| Pool Opening | $240.00 |
| Power Vac | $125/hr |
| Weekly Service | $95.00 |
| Pool Closing | $260.00 |

---

## Engineering Protocol

### Start of Every Task
1. Read `docs/PROJECT.md` and all `.md` files in `docs/`.
2. Summarize current project state.
3. Identify affected files and existing patterns.
4. Search the codebase before introducing new abstractions or libraries.
5. Reuse existing components and utilities whenever possible.
6. Present analysis, affected files, implementation plan, and assumptions.
7. **Wait for approval before major architectural decisions.**

### Code Standards
- TypeScript strict mode — no `any`, no implicit types.
- CSS Modules only — no inline styles, no Tailwind, no CSS-in-JS.
- Keep files under 300 lines when practical; split if larger.
- Reuse components before creating new ones.
- Robust error handling and validation on all API routes and forms.
- Semantic HTML, ARIA labels, `:focus-visible` rings — accessibility required.
- `next/image` for all images; `next/link` for all internal links.

### After Every Task
1. Run `npm run build` — fix all errors before completing.
2. Run `npm run lint` if ESLint is configured.
3. Run `npm test` if tests exist.
4. Update `docs/PROJECT.md` — task status, next steps.
5. Update `docs/ARCHITECTURE.md` for any architectural decisions.
6. Write a concise engineering handoff at the bottom of this file.

---

## Current Status

**Phase:** Initial setup / active development
**Build status:** Unknown — run `npm run build` to verify
**Tests:** Not yet configured (see Next Steps)
**Lint:** Not yet configured (see Next Steps)

---

## Next Steps

- [ ] Verify `npm run build` passes cleanly
- [ ] Add ESLint config (`eslint-config-next`)
- [ ] Add Jest + React Testing Library for business logic tests
- [ ] Swap Unsplash placeholder images for real brand photography
- [ ] Configure `GOOGLE_PLACES_API_KEY` in Netlify environment variables
- [ ] Lighthouse audit — target > 90 on all categories
- [ ] Add `sitemap.xml` and `robots.txt` for SEO

---

## Engineering Handoff Log

### 2026-07-03 — Initial Documentation Bootstrap
- Created `docs/PROJECT.md` (this file) as authoritative project memory.
- Created `docs/ARCHITECTURE.md` with patterns, decisions, and conventions.
- No code changes — documentation only.
- **Next engineer:** Read this file, then check `docs/ARCHITECTURE.md` before touching any component.
