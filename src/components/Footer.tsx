import type { Locale } from "@/lib/i18n";
import { BRAND, SITE, UI } from "@/content/site";
import { AREAS, HAS_POSTS, PARENT_SERVICES } from "@/lib/content";
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
          <p className="mt-5 font-heading text-base text-gold-400">{t.footer.brandLine}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-100/70">{t.footer.tagline}</p>
          <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cream-100/50">
            {BRAND.values[locale].map((v) => (
              <span key={v}>{v}</span>
            ))}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-600/50 bg-emerald-700/20 px-3 py-1 text-xs font-medium text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            {t.footer.virtualNote}
          </p>
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
            {(
              [
                ["/", t.nav.home],
                ["/about", t.nav.about],
                ["/services", t.nav.services],
                ["/pricing", t.nav.pricing],
                ...(HAS_POSTS ? [["/blog", t.nav.blog] as const] : []),
                ["/contact", t.nav.contact],
              ] as const
            ).map(([href, label]) => (
              <li key={href}>
                <LLink href={href} className={linkCls}>
                  {label}
                </LLink>
              </li>
            ))}
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
