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
npm run artwork              # redraw every illustration in public/images/
npm run images:photos        # pull the photos listed in scripts/unsplash.json
npm run images:status        # report which slots are photos vs artwork
```

`npm run build` tries the photo fetch first and falls back to the generated
artwork if Unsplash is unreachable, so builds always work offline.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used for `<link rel=canonical>`, hreflang, Open Graph and `sitemap.xml`. Defaults to `https://glorytoglory.com`. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID. The tag renders in `<head>` on every page; `G-XXXXXXXXXX` is used until this is set. |
| `CONTACT_WEBHOOK_URL` | Where `/api/contact` forwards form submissions (Formspree, Zapier, Make, a Resend/SendGrid function, a CRM…). When empty, submissions are only logged on the server. |
| `NEXT_PUBLIC_GOOGLE_PLACE_ID` | Google Business Profile Place ID for the reviews widget slot on `/testimonials`. |
| `UNSPLASH_ACCESS_KEY` | Optional. Makes the build-time photo fetch use the official Unsplash API, which resolves photographer names for the credits file and satisfies the API's download-tracking requirement. |

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
    image-manifest.json  generated: dimensions + blur placeholders for every image
    images.ts            image registry with translated alt text
scripts/
  generate-artwork.mjs   draws every illustration into public/images/
  fetch-unsplash.mjs     swaps in Unsplash photography by photo id
  lib/                   drawing helpers (palette, skylines, abstract motifs)
public/
  og-default.png         default Open Graph image (1200×630)
  images/                27 generated illustrations (see "Imagery")
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

## Imagery

Images come from two sources. **Photographs** from Unsplash fill the twelve
slots listed in `scripts/unsplash.json` (article cards, region cards and heroes,
the home hero) once fetched — see below, this needs one command or one
environment variable. Everything else is **generated artwork**, drawn from code in the
brand palette by `scripts/generate-artwork.mjs` — deterministic, licence-free,
about 1.7 MB for 27 images, and always matching the design tokens. Redraw it at
any time:

```bash
npm run artwork
```

Two families:

- **Skylines** (`area-*.jpg`, `card-*.jpg`, `hero-home.jpg`) — layered night
  skylines with depth haze, window lights and landmark silhouettes. Each region
  is distinguishable: a pyramid tower and bay reflection for the Bay Area, palms
  and a warm dusk for Southern California, an observation tower for the remote
  page.
- **Abstract motifs** (`hero-*.jpg`, `service-*.jpg`, `post-*.jpg`) — editorial
  compositions that each carry an idea: diverging paths for grant types, a
  highlighted column for a withholding gap, a stacked area for compounding
  contributions, a timeline that forks at a decision.

Page heroes render the artwork behind a navy scrim, so the headline always wins
on contrast. Article and region cards use the image at full strength.

### Alt text

Alt text for every image lives in `src/content/images.ts`, in both languages.
Page-hero images are decorative (the H1 carries the meaning) so they render
`alt=""`, which is what screen readers should skip. Content images — article
headers, region cards, the services feature image — use their translated
description. Everything except the hero of the current page is lazy-loaded; the
hero is marked `priority` because it is the largest contentful paint.

### Photography from Unsplash

`scripts/unsplash.json` maps twelve image slots to specific Unsplash photos: the
five article images, the three region images (used on both the area page hero
and the home cities strip) and the home hero. Check what is actually in place at
any time:

```bash
npm run images:status
```

**Getting the photos in.** Unsplash serves photos to ordinary connections
freely, but refuses anonymous requests from datacenter IP ranges, which is where
build servers live. So there are two ways to get the photos, and the first is
the one to use:

1. **Run it once locally and commit the result.** On any normal internet
   connection:

   ```bash
   npm run images:photos
   git add public/images src/content/image-alt-overrides.json && git commit -m "Add Unsplash photography"
   ```

   The photos are then in the repository. Every later build, anywhere, uses them
   with no network access at all. This is the sturdier arrangement and needs no
   signup.

2. **Give the build server a key.** Create a free app at
   <https://unsplash.com/developers> and set `UNSPLASH_ACCESS_KEY` in your host's
   environment variables (in Vercel: Settings → Environment Variables). The
   build then fetches the photos through the official API on every deploy.

Without either, the build still succeeds: each slot keeps its generated artwork
and the build log prints a boxed warning naming the slots that fell back. The
site never breaks over an image.

**Changing a photo.** Edit its `id` in `scripts/unsplash.json` — a bare id or any
`unsplash.com/photos/...` URL works — then re-run `npm run images:photos`. To
cover a slot that is still artwork, add an entry using any key from
`image-manifest.json`. To use your own photograph instead, drop a JPEG with the
slot's filename into `public/images/` and run `npm run artwork -- --keep-existing`.

**What a fetch writes.** Each photo is cropped to the exact size the layout
expects, written over the matching file, and recorded in three places:

| File | Purpose |
|---|---|
| `public/images/.unsplash-lock.json` | Which photo each file came from. A slot already holding the right photo is skipped, so committed photos never re-download. |
| `public/images/CREDITS.md` | Photographer credits. The Unsplash Licence allows commercial use without attribution, but crediting is expected practice. |
| `src/content/image-alt-overrides.json` | The photo's description in both languages, from `unsplash.json`. `images.ts` prefers it over the artwork alt text, so alt text always matches what is on screen. |

### Slots still using generated artwork

Page heroes other than the home page, the eight service heroes and the services
feature image are still illustrations. They sit behind a heavy navy scrim where
the artwork reads as texture. Swap any of them the same way by adding an entry
to `scripts/unsplash.json`. Suggested searches:

| Image slot | Suggested search |
|---|---|
| `hero-services.jpg` | abstract architecture minimal |
| `hero-about.jpg` | calm desk workspace morning |
| `hero-contact.jpg` | video call desk setup |
| `hero-blog.jpg` | notebook laptop minimal desk |
| `hero-testimonials.jpg` | warm modern interior |
| `hero-legal.jpg` | minimal architecture lines |
| `service-*.jpg` | charts data abstract, planning desk |
| `feature-one-plan.jpg` | financial planning desk documents |

## Design system

Tokens live in `src/app/globals.css` under `@theme` (navy `#0B1E3D`, off-white `#FAFAF7`, gold `#C9A253`, emerald `#2F6F5E`).
Adjust them there once the logo exists. The wordmark is `src/components/Logo.tsx` and the favicon is `src/app/icon.svg`.
Scroll-reveal animation is `src/components/Reveal.tsx` (slow fade-up, plays once, honours `prefers-reduced-motion`, and a `<noscript>` rule keeps content visible without JavaScript).

## ⚠️ Pre-launch checklist (client sign-off required)

Everything below is clearly marked in the UI with a dashed gold **PLACEHOLDER** badge or bracketed `[PLACEHOLDER]` text. Search the repo for `PLACEHOLDER` / `TODO(client)`.

1. **Disclaimer page** (`src/content/pages/disclaimer.ts`) — insert real RIA/IAR registration status, Form ADV Part 2 link, CRD number, states of registration and compliance-reviewed disclosures. **Do not publish as-is.**
2. **Credentials** — confirm exact designations (CFP®, EA, CPA…) in `src/content/pages/about.ts` and the homepage trust strip (`src/content/pages/home.ts`). Set `foundingYear` in `src/content/site.ts` if a "years of experience" claim is wanted.
3. **Testimonials** (`src/content/pages/testimonials.ts`) — replace every `[SAMPLE]` quote with a real, permissioned client quote (or remove it) after compliance review of the SEC Marketing Rule requirements; set `placeholder: false`.
4. **Photos** — add Grace's headshot as `public/images/grace-headshot.jpg` (about 600×720) and update `SITE.owner.headshot` in `src/content/site.ts`. Review the Unsplash photos on the article and region cards after the first deploy and swap any you dislike by editing one id in `scripts/unsplash.json` (see **Imagery** above).
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
