# CLAUDE.md

## Project Overview

Miel Wedding is a bilingual (English/Russian) wedding services website for organizing weddings and ceremonies in Georgia. Built with Next.js App Router, it serves as a marketing site with service listings, portfolio, blog, location guides, reviews, FAQ, and a contact form.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5.9 (strict mode)
- **Styling:** Tailwind CSS 4 (utility-first, no CSS modules)
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Font:** Montserrat (Google Fonts, Latin + Cyrillic subsets)
- **Form Backend:** Formspree
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (font loading, global styles)
│   ├── globals.css         # Tailwind imports, CSS variables, global classes
│   ├── (en)/               # English routes (default locale)
│   │   ├── layout.tsx      # EN layout with Header/Footer
│   │   ├── page.tsx        # Home page
│   │   ├── about-us/
│   │   ├── services-and-prices/
│   │   ├── uslugi/[slug]/  # Service detail pages
│   │   ├── locations/
│   │   ├── our-portfolio/
│   │   ├── blog/
│   │   ├── reviews/
│   │   ├── frequently-asked-questions/
│   │   └── contacts/
│   └── (ru)/               # Russian routes (under /ru prefix)
│       ├── layout.tsx      # RU layout with Header/Footer
│       ├── page.tsx
│       ├── o-nas/
│       ├── uslugi-i-czeny/
│       ├── uslugi/[slug]/
│       ├── lokaczii/
│       ├── portfolio/
│       ├── blog/
│       ├── otzyvy/
│       ├── faq/
│       └── kontakty/
├── components/
│   ├── Header.tsx          # Sticky nav with locale switching, mobile menu
│   ├── Footer.tsx          # Multi-language footer
│   └── ContactForm.tsx     # Formspree-backed contact form
├── data/                   # Static content (bilingual)
│   ├── services.ts / services-en.ts
│   ├── locations.ts / locations-en.ts
│   ├── portfolio.ts / portfolio-en.ts
│   ├── blog-posts.ts / blog-en.ts
│   └── faq.ts / faq-en.ts
├── lib/
│   └── i18n.ts             # Locale types, route mappings, path helpers
└── public/images/          # Static assets organized by feature
    ├── hero/
    ├── blog/
    ├── portfolio/
    ├── services/
    └── locations/
```

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint (next lint)
```

There is no test framework configured. No `test` script exists.

## Architecture & Conventions

### Internationalization (i18n)

The site uses a manual route-based i18n approach (no i18n library):

- **English** is the default locale, routes live under `src/app/(en)/`
- **Russian** routes live under `src/app/(ru)/` and are prefixed with `/ru` in URLs
- Route slugs differ by language (e.g., `/about-us` vs `/ru/o-nas`)
- Route mappings are defined in `src/lib/i18n.ts`
- `Locale` type is `'en' | 'ru'`
- Components receive a `locale` prop and select content accordingly

### Data Pattern

All content entities use bilingual interfaces with `{ en: string; ru: string }` fields:

```typescript
interface Service {
  id: string
  slugs: { en: string; ru: string }
  title: { en: string; ru: string }
  description: { en: string; ru: string }
  features: { en: string[]; ru: string[] }
  price: string
  image: string
}
```

Data files in `src/data/` export typed arrays. Some entities have separate `-en.ts` files for English-only expanded content.

### Component Conventions

- Client components use `'use client'` directive (Header, ContactForm)
- Page components are server components by default
- Props use `locale?: 'ru' | 'en'` pattern, defaulting to `'ru'`
- Import alias `@/*` maps to `./src/*`
- Next.js `Image` component used throughout with `fill` or explicit dimensions
- Next.js `Link` component for all internal navigation
- Dynamic routes use `generateStaticParams()` for static generation

### Styling

- **Tailwind utility classes** are the primary styling method
- **Custom theme colors** defined in both `tailwind.config.ts` and `globals.css`:
  - `cream` (#E8DDD4), `cream-light` (#F5F0EB)
  - `dark` (#2D2D2D), `dark-light` (#4A4A4A)
  - `gold` (#C9A962) - accent/CTA color
- **Global CSS classes** for reusable patterns: `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.section-title`, `.section-subtitle`
- Mobile-first responsive approach with `sm:`, `md:`, `lg:` breakpoints
- Desktop nav shows at `lg:` breakpoint; mobile hamburger menu below

### SEO

- Next.js Metadata API used in layouts and dynamic pages
- Dynamic metadata generated from data content (blog titles, descriptions)
- Locale-specific metadata per layout group

### External Services

- **Formspree** (`https://formspree.io/f/xwpkgqvp`) for contact form submissions
- **Unsplash** (`images.unsplash.com`) allowed in `next.config.js` for external images

## Key Files to Know

| File | Purpose |
|---|---|
| `src/lib/i18n.ts` | Locale types, route mappings, path helpers |
| `src/app/globals.css` | Theme colors, global button/section styles |
| `tailwind.config.ts` | Custom colors, font family |
| `next.config.js` | Image domains |
| `src/data/services.ts` | Service definitions (canonical bilingual data) |
| `src/components/Header.tsx` | Navigation structure, locale switching |

## Adding Content

- **New blog post:** Add entry to `src/data/blog-posts.ts` (RU) and `src/data/blog-en.ts` (EN)
- **New service:** Add entry to `src/data/services.ts` (shared bilingual) or `src/data/services-en.ts` (EN-only)
- **New location:** Add to `src/data/locations.ts` and `src/data/locations-en.ts`
- **New portfolio item:** Add to `src/data/portfolio.ts` and `src/data/portfolio-en.ts`
- **New page:** Create directories in both `src/app/(en)/` and `src/app/(ru)/`, add route mapping to `src/lib/i18n.ts`

## Things to Watch Out For

- No automated tests exist; manually verify changes via `npm run build` and `npm run lint`
- Russian route slugs use transliteration (e.g., `uslugi-i-czeny`, `lokaczii`) - maintain this convention
- The `locale` prop defaults to `'ru'` in components - always pass it explicitly from page components
- Images in `public/images/` are organized by feature area - follow existing structure
- Contact form always redirects to thank-you page even on submission failure (intentional graceful fallback)
