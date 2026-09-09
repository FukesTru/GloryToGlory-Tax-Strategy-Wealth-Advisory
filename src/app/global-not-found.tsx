import type { Metadata } from "next";
import { Fraunces, Manrope, Noto_Sans_TC } from "next/font/google";
import Link from "next/link";
import { SITE, UI } from "@/content/site";
import "./globals.css";

/**
 * Branded 404 for URLs that match no route (unknown paths, unknown locales,
 * unknown service or blog slugs). It renders outside the app's layout, so it
 * owns its <html> element and imports the global stylesheet itself.
 *
 * Because no locale is resolved at this point, both languages are shown.
 */
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", axes: ["opsz"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const notoSansTC = Noto_Sans_TC({ weight: "variable", variable: "--font-noto-sans-tc", display: "swap", preload: false });

export const metadata: Metadata = {
  title: `Page not found | ${SITE.name}`,
  description: "The page you are looking for has moved or never existed.",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  const en = UI.en.notFound;
  const zh = UI["zh-hant"].notFound;

  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${notoSansTC.variable}`}>
      <body className="min-h-screen bg-navy-900 antialiased">
        <main className="relative isolate flex min-h-screen items-center overflow-hidden">
          <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-emerald-700/25 blur-3xl"
          />
          <div className="container-x py-24 text-center text-cream-100">
            <Link href="/" aria-label={SITE.shortName} className="inline-flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
                <rect x="2" y="2" width="36" height="36" rx="9" fill="#0B1E3D" stroke="#C9A253" strokeWidth="1.5" />
                <path d="M11 26 20 12l9 14" fill="none" stroke="#C9A253" strokeWidth="2" strokeLinejoin="round" />
                <path d="M14.5 26h11" stroke="#2F6F5E" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="20" cy="12" r="2" fill="#C9A253" />
              </svg>
              <span className="font-heading text-lg font-semibold text-cream-50">{SITE.shortName}</span>
            </Link>

            <p className="eyebrow mt-12 text-gold-400">404</p>
            <h1 className="gold-underline-center mt-4 text-4xl text-cream-50 sm:text-5xl">{en.title}</h1>
            <p className="mx-auto mt-8 max-w-xl text-lg text-cream-100/75">{en.body}</p>

            <p lang="zh-Hant" className="mx-auto mt-6 max-w-xl text-cream-100/60">
              {zh.title}。{zh.body}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex rounded-full border border-gold-500 px-6 py-3 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-navy-900"
              >
                {en.button}
              </Link>
              <Link
                href="/zh-hant"
                lang="zh-Hant"
                className="inline-flex rounded-full border border-cream-100/25 px-6 py-3 text-sm font-semibold text-cream-100/85 transition-colors hover:border-cream-100/60 hover:text-cream-50"
              >
                {zh.button}
              </Link>
            </div>

            <p className="mt-10 text-sm text-cream-100/55">
              <Link href="/sitemap" className="underline decoration-gold-500 underline-offset-4 hover:text-cream-50">
                Sitemap
              </Link>
              <span aria-hidden="true" className="mx-3">
                ·
              </span>
              <a href={SITE.phoneHref} className="underline decoration-gold-500 underline-offset-4 hover:text-cream-50">
                {SITE.phone}
              </a>
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
