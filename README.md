# GloryToGlory Tax Strategy & Wealth Advisory — website

Bilingual (English / 繁體中文) marketing site for a virtual tax & wealth advisory practice serving tech professionals.
Built with **Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Framer Motion · TypeScript**.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values (see below)
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
npm run lint                 # ESLint
npx tsc --noEmit             # type-check
```

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used for `<link rel=canonical>`, hreflang, Open Graph and `sitemap.xml`. Defaults to `https://glorytoglory.com`. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID. The tag renders in `<head>` on every page; `G-XXXXXXXXXX` is used until this is set. |
| `CONTACT_WEBHOOK_URL` | Where `/api/contact` forwards form submissions (Formspree, Zapier, Make, a Resend/SendGrid function, a CRM…). When empty, submissions are only logged on the server. |
| `NEXT_PUBLIC_GOOGLE_PLACE_ID` | Google Business Profile Place ID for the reviews widget slot on `/testimonials`. |

## How the site is organised

```
src/
  app/
    [locale]/            every page lives here; locale = "en" | "zh-hant"
      layout.tsx         root layout: fonts, <html lang>, nav, footer, GA4, floating CTA
      page.tsx           homepage
      about/  services/  services/[slug]/  services/equity-compensation/[sub]/
      bay-area/  southern-california/  remote-advisory/
      testimonials/  blog/  blog/[slug]/  contact/
      disclaimer/  privacy-policy/  sitemap/  (HTML sitemap)
      not-found.tsx      localized 404 (reached via [...rest] catch-all)
    api/contact/route.ts contact form handler (honeypot + validation + optional webhook)
    sitemap.ts           sitemap.xml — both languages of every URL with hreflang alternates
    robots.ts            robots.txt
    icon.svg, apple-icon.png
  proxy.ts               locale routing (see "Languages & URLs")
  components/            UI building blocks (Hero, Nav, Footer, FaqAccordion, Reveal, …)
  components/pages/      shared page templates (ServicePageView, AreaPageView, LegalPageView)
  content/               ALL copy lives here — no prose inside components
    site.ts              business facts, phone/email/PO box, UI strings (both languages)
    types.ts             content schemas
    services/*.ts        8 service pages (6 parents + 2 equity sub-pages)
    areas/*.ts           3 service-area pages
    blog/*.ts            5 seed articles
    pages/*.ts           home, about, services hub, contact, testimonials, legal, misc meta
  lib/
    i18n.ts              locale helpers (localePath, splitLocale, …)
    seo.ts               buildMetadata(): title, description, canonical, hreflang, OG, Twitter
    schema.ts            schema.org JSON-LD builders
    content.ts           content registry (PARENT_SERVICES, AREAS, POSTS, allPaths, pageName…)
public/
  og-default.png         default Open Graph image (1200×630)
  images/grace-headshot.svg  PLACEHOLDER portrait — replace (see checklist)
```

### Editing copy

Every page's text is a typed object with an `en` and a `"zh-hant"` slot, e.g. `src/content/services/tax-strategy-planning.ts`.
Change the text, keep the shape, and TypeScript will catch anything missing. Inline links inside paragraphs use
markdown syntax: `[anchor text](/services/tax-strategy-planning)` — English paths only; the Chinese prefix is added automatically.

To add a service, area or article: copy an existing file in the same folder, then register it in `src/lib/content.ts`.
Sitemap, HTML sitemap, footer, breadcrumbs and related-link cards update automatically.

## Languages & URLs

| English (default) | 繁體中文 |
|---|---|
| `/services/asset-allocation` | `/zh-hant/services/asset-allocation` |

* `src/proxy.ts` rewrites unprefixed URLs to the internal `/en/...` route (the URL bar stays clean) and 308-redirects any explicit `/en/...` URL to the canonical unprefixed one.
* The **EN / 繁中 toggle** in the nav stores the choice in a `NEXT_LOCALE` cookie (+ localStorage) and performs a client-side navigation to the counterpart page — the copy swaps in place without a full reload. On later visits, an unprefixed URL opened by a visitor who chose 繁體中文 is redirected to the Chinese version. Search-engine crawlers never send the cookie, so they always index the URL they requested.
* Every page emits `<link rel="alternate" hreflang="en|zh-Hant|x-default">`, `og:locale`, `<html lang>` and the matching schema.org `inLanguage`.
* Fonts: Fraunces + Manrope for English; Noto Serif TC + Noto Sans TC take over for CJK glyphs (`html[lang="zh-Hant"]` in `globals.css`).

## SEO checklist (implemented)

* Unique `<title>` in the format `[Keyword] | GloryToGlory Tax Strategy & Wealth Advisory`, unique 150–160-character meta descriptions per language.
* Canonical + hreflang + Open Graph + Twitter cards via `buildMetadata()`.
* One `<h1>` per page, H2/H3 hierarchy, breadcrumbs (visual + `BreadcrumbList`) on all inner pages.
* Structured data: `FinancialService` (home), `Person` (about), `LocalBusiness` (3 area pages), `Service` (service pages), `FAQPage` (every FAQ accordion), `Article` (blog posts), `BreadcrumbList`.
* `sitemap.xml` lists both language versions of all 25 URLs with `xhtml:link` alternates; `robots.txt` at root.
* GA4 tag in `<head>` site-wide; images lazy-loaded with translated alt text; each page links to 2–3 related pages.

## Design system

Tokens live in `src/app/globals.css` under `@theme` (navy `#0B1E3D`, off-white `#FAFAF7`, gold `#C9A253`, emerald `#2F6F5E`).
Adjust them there once the logo exists. The wordmark is `src/components/Logo.tsx` and the favicon is `src/app/icon.svg`.
Scroll-reveal animation is `src/components/Reveal.tsx` (slow fade-up, plays once, honours `prefers-reduced-motion`, and a `<noscript>` rule keeps content visible without JavaScript).

## ⚠️ Pre-launch checklist (client sign-off required)

Everything below is clearly marked in the UI with a dashed gold **PLACEHOLDER** badge or bracketed `[PLACEHOLDER]` text. Search the repo for `PLACEHOLDER` / `TODO(client)`.

1. **Disclaimer page** (`src/content/pages/disclaimer.ts`) — insert real RIA/IAR registration status, Form ADV Part 2 link, CRD number, states of registration and compliance-reviewed disclosures. **Do not publish as-is.**
2. **Credentials** — confirm exact designations (CFP®, EA, CPA…) in `src/content/pages/about.ts` and the homepage trust strip (`src/content/pages/home.ts`). Set `foundingYear` in `src/content/site.ts` if a "years of experience" claim is wanted.
3. **Testimonials** (`src/content/pages/testimonials.ts`) — replace every `[SAMPLE]` quote with a real, permissioned client quote (or remove it) after compliance review of the SEC Marketing Rule requirements; set `placeholder: false`.
4. **Photos** — add Grace's headshot as `public/images/grace-headshot.jpg` (about 600×720) and update `SITE.owner.headshot` in `src/content/site.ts`. Hero backgrounds are abstract by design; add skyline/workspace imagery from the client's Drive folder if desired.
5. **Traditional Chinese copy** — all `"zh-hant"` slots are working drafts. Have a professional translator review them (the structure is identical to the English, field by field).
6. **Privacy policy** — legal review; insert Regulation S-P notice link if applicable.
7. **GA4** — set `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
8. **Contact form** — set `CONTACT_WEBHOOK_URL` (or wire an email provider in `src/app/api/contact/route.ts`).
9. **Google Business Profile** — once created, set `NEXT_PUBLIC_GOOGLE_PLACE_ID` and drop the widget embed into `src/components/GoogleReviewsSlot.tsx`.
10. **Logo** — replace the placeholder mark in `Logo.tsx`, `icon.svg`, `apple-icon.png` and regenerate `public/og-default.png`.
11. **Domain** — point `glorytoglory.com` at the deployment and set `NEXT_PUBLIC_SITE_URL`.

## Deployment

Standard Next.js: deploy to Vercel (zero config) or any Node host with `npm run build && npm start`.
`proxy.ts` and `/api/contact` need a Node/edge runtime, so a fully static export is not used.
