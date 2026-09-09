import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { UI } from "@/content/site";
import type { Crumb } from "@/lib/schema";
import { Breadcrumbs } from "./Breadcrumbs";
import { LLink } from "./LLink";

interface Props {
  locale: Locale;
  title: string;
  sub?: string;
  eyebrow?: string;
  /** Inner pages pass breadcrumbs (Home is added automatically). */
  crumbs?: Crumb[];
  /** Override the default primary CTA (Book a Free Consultation → /contact). */
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Optional right-hand visual (e.g. a photo on the About page). */
  aside?: ReactNode;
  /** Larger typography for the homepage. */
  size?: "default" | "large";
  children?: ReactNode;
}

/** Dark navy hero with a thin gold underline beneath the H1 — used on every page. */
export function Hero({ locale, title, sub, eyebrow, crumbs, primary, secondary, aside, size = "default", children }: Props) {
  const t = UI[locale].hero;
  const cta = primary ?? { label: t.bookFree, href: "/contact" };
  const h1Size = size === "large" ? "text-4xl sm:text-5xl lg:text-[3.6rem]" : "text-3xl sm:text-4xl lg:text-[3rem]";

  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pt-[4.5rem] text-cream-100">
      {/* Abstract backdrop — no stock imagery required */}
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-emerald-700/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-gold-500/10 blur-3xl"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 hidden h-64 w-[44rem] text-cream-100/[0.06] lg:block"
        viewBox="0 0 700 256"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M0 220 60 190 110 205 170 150 230 165 290 110 350 130 410 80 470 95 530 40 590 60 650 20 700 30" />
        <path d="M0 240 70 225 130 235 200 200 260 210 330 170 390 180 450 140 510 150 570 100 640 110 700 80" opacity=".6" />
      </svg>

      <div className={`container-x ${size === "large" ? "py-20 sm:py-28 lg:py-32" : "py-14 sm:py-20 lg:py-24"}`}>
        {crumbs && (
          <div className="mb-8">
            <Breadcrumbs locale={locale} crumbs={crumbs} />
          </div>
        )}
        <div className={`grid items-center gap-12 ${aside ? "lg:grid-cols-[1.25fr_1fr]" : ""}`}>
          <div className="max-w-3xl">
            {eyebrow && <p className="eyebrow mb-4 text-gold-400">{eyebrow}</p>}
            <h1 className={`gold-underline ${h1Size} font-medium leading-[1.1] text-cream-50`}>{title}</h1>
            {sub && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-100/80 sm:text-xl">{sub}</p>}
            {children}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <LLink
                href={cta.href}
                className="inline-flex items-center justify-center rounded-full border border-gold-500 px-6 py-3 text-sm font-semibold text-gold-400 transition-colors duration-300 hover:bg-gold-500 hover:text-navy-900"
              >
                {cta.label}
              </LLink>
              {secondary && (
                <LLink
                  href={secondary.href}
                  className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-cream-100/85 transition-colors hover:text-cream-50"
                >
                  {secondary.label}
                  <span aria-hidden="true">→</span>
                </LLink>
              )}
            </div>
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
