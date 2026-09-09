import type { Locale } from "@/lib/i18n";
import { SITE, UI } from "@/content/site";
import { AREAS, PARENT_SERVICES } from "@/lib/content";
import { LLink } from "./LLink";
import { Logo } from "./Logo";

export function Footer({ locale }: { locale: Locale }) {
  const t = UI[locale];
  const year = new Date().getFullYear();
  const linkCls = "text-sm text-cream-100/70 transition-colors hover:text-gold-400";
  const headCls = "eyebrow mb-4 text-gold-400";

  return (
    <footer className="bg-navy-950 pb-24 pt-16 text-cream-100 md:pb-16">
      <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <LLink href="/" aria-label={t.nav.home}>
            <Logo tone="light" />
          </LLink>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/70">{t.footer.tagline}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-600/50 bg-emerald-700/20 px-3 py-1 text-xs font-medium text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            {t.footer.virtualNote}
          </p>
          <a
            href={SITE.owner.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-cream-100/80 transition-colors hover:text-gold-400"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <div>
          <p className={headCls}>{t.footer.services}</p>
          <ul className="space-y-2.5">
            {PARENT_SERVICES.map((s) => (
              <li key={s.path}>
                <LLink href={s.path} className={linkCls}>
                  {s.name[locale]}
                </LLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={headCls}>{t.footer.quickLinks}</p>
          <ul className="space-y-2.5">
            <li>
              <LLink href="/about" className={linkCls}>
                {t.nav.about}
              </LLink>
            </li>
            <li>
              <LLink href="/blog" className={linkCls}>
                {t.nav.blog}
              </LLink>
            </li>
            <li>
              <LLink href="/contact" className={linkCls}>
                {t.nav.contact}
              </LLink>
            </li>
          </ul>
          <p className={`${headCls} mt-8`}>{t.footer.areas}</p>
          <ul className="space-y-2.5">
            {AREAS.map((a) => (
              <li key={a.path}>
                <LLink href={a.path} className={linkCls}>
                  {a.region[locale]}
                </LLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={headCls}>{t.footer.contact}</p>
          <address className="space-y-2.5 text-sm not-italic text-cream-100/80">
            <p className="font-medium text-cream-50">{SITE.owner.displayName}</p>
            <p>
              <a href={SITE.phoneHref} className="transition-colors hover:text-gold-400">
                {SITE.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${SITE.email}`} className="break-all transition-colors hover:text-gold-400">
                {SITE.email}
              </a>
            </p>
            <p className="pt-2 text-xs text-cream-100/55">
              <span className="block font-semibold uppercase tracking-[0.12em] text-cream-100/60">{t.footer.mailingLabel}</span>
              {SITE.mailing.poBox}, {SITE.mailing.city}, {SITE.mailing.region} {SITE.mailing.postalCode}
              <span className="mt-1 block">{t.footer.mailingNote}</span>
            </p>
          </address>
        </div>
      </div>

      <div className="container-x mt-14 border-t border-cream-100/10 pt-8">
        <p className="max-w-4xl text-xs leading-relaxed text-cream-100/50">{t.footer.disclosureShort}</p>
        <div className="mt-6 flex flex-col gap-4 text-xs text-cream-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. {t.footer.rights}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <LLink href="/disclaimer" className="hover:text-gold-400">
                {t.footer.disclaimer}
              </LLink>
            </li>
            <li>
              <LLink href="/privacy-policy" className="hover:text-gold-400">
                {t.footer.privacy}
              </LLink>
            </li>
            <li>
              <LLink href="/sitemap" className="hover:text-gold-400">
                {t.footer.sitemap}
              </LLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
