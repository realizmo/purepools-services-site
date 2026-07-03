# PurePools Services — Website

A modern, full-service Long Island pool company site built with **Next.js (App Router) + TypeScript + CSS Modules**. Images use Unsplash placeholders — swap in real brand photography before launch.

> _All trademarks belong to their respective owners._

---

## Tech Stack

- **Next.js 14+** (App Router)
- **React 18**
- **TypeScript**
- **CSS Modules** + CSS custom properties (no Tailwind)
- **next/image** for optimized images
- **next/font** for Montserrat + Open Sans

---

## Folder Structure

```
purepools-services-site/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, TopBar/Navbar/Footer wrappers
│   ├── page.tsx            # Homepage composition
│   ├── globals.css         # Design tokens + base styles
│   ├── contact/page.tsx    # Contact info (no form)
│   └── services/page.tsx
├── components/
│   ├── TopBar.(tsx|module.css)
│   ├── Navbar.(tsx|module.css)
│   ├── Hero.(tsx|module.css)
│   ├── AnnouncementBanner.(tsx|module.css)
│   ├── AboutSnippet.(tsx|module.css)
│   ├── ServicesGrid.(tsx|module.css)
│   ├── CtaBanner.(tsx|module.css)
│   ├── ReviewsCarousel.(tsx|module.css)
│   ├── FreeEstimateForm.(tsx|module.css)
│   └── Footer.(tsx|module.css)
├── lib/
│   └── data.ts             # Static content: nav, services, reviews, contact
├── public/
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

### Production build

```bash
npm run build
npm run start
```

---

## Design System (CSS variables in `app/globals.css`)

| Token | Value |
|---|---|
| `--color-primary` | `#1a9edb` (sky blue) |
| `--color-primary-dark` | `#1480b5` |
| `--color-navy` | `#1a2e44` |
| `--color-bg-light` | `#f5f8fa` |
| `--font-heading` | Montserrat |
| `--font-body` | Open Sans |
| `--container-max` | `1200px` |
| `--radius-sm/md/lg` | `3px / 6px / 12px` |
| `--shadow-card / --shadow-lg` | for elevated surfaces |

Utility classes: `.container`, `.btn`, `.btn--primary`, `.btn--outline`, `.btn--navy`.

---

## Components

| Component | Responsibility |
|---|---|
| `TopBar` | Slim navy utility bar with phone, email, CTA |
| `Navbar` | Primary nav with dropdowns + mobile drawer |
| `Hero` | Auto-rotating image/headline slider with dual CTAs |
| `AnnouncementBanner` | Seasonal callout strip |
| `AboutSnippet` | 2-col text + image |
| `ServicesGrid` | 3-card service grid |
| `CtaBanner` | Full-width blue CTA strip |
| `ReviewsCarousel` | Auto-rotating testimonial slider |
| `FreeEstimateForm` | UI-only contact form with validation |
| `Footer` | 4-col footer + service area + copyright |

---

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`)
- Skip-to-content link
- ARIA labels on icon-only buttons & carousel controls
- Visible focus rings via `:focus-visible`
- Reduced reliance on color alone (icons + text labels)
- Mobile drawer locks body scroll while open

---

## Performance

- `next/image` lazy-loads and serves modern formats
- `next/font` self-hosts Google fonts to avoid extra requests
- CSS Modules scope styles & enable per-route splitting
- No client-side runtime libraries beyond React

---

## Deployment

### Vercel (recommended)

1. Push to GitHub.
2. Import the repo at <https://vercel.com/new>.
3. Accept defaults — Vercel detects Next.js automatically.

### Netlify

1. Create site from Git, build command `next build`, publish dir `.next`.
2. Or install `@netlify/plugin-nextjs` for full feature support.

### Docker

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
```

### Nginx (reverse proxy to `next start`)

```
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

---

## Testing Checklist

- [ ] Hero auto-rotates and pauses on hover
- [ ] Hero arrow keys + dots navigate slides
- [ ] Navbar dropdowns open on hover/focus
- [ ] Mobile hamburger toggles menu & locks scroll
- [ ] All routes render: `/`, `/contact`, `/services`
- [ ] Form shows validation errors and a success message
- [ ] Reviews carousel auto-advances & manual controls work
- [ ] Footer columns collapse to 2 then 1 at small widths
- [ ] Lighthouse: Performance, Accessibility, Best Practices, SEO all > 90

---

## License

MIT for the code in this repo. "PurePools Services" branding belongs to PurePools Services.
