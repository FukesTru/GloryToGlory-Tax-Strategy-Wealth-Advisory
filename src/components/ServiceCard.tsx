import type { Locale } from "@/lib/i18n";
import type { Service } from "@/content/types";
import { UI } from "@/content/site";
import { Icon } from "./Icon";
import { LLink } from "./LLink";
import { Reveal } from "./Reveal";

export function ServiceCard({ service, locale, index = 0, tone = "light" }: { service: Service; locale: Locale; index?: number; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Reveal as="li" delay={Math.min(index * 0.08, 0.4)} className="h-full">
      <LLink
        href={service.path}
        className={`group flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 ${
          dark
            ? "border-cream-100/10 bg-navy-800/60 hover:border-gold-500/50 hover:bg-navy-800"
            : "border-cream-300 bg-cream-50 shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:border-gold-500/60"
        }`}
      >
        <span
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
            dark ? "bg-emerald-700/30 text-emerald-100" : "bg-emerald-50 text-emerald-700"
          }`}
        >
          <Icon name={service.icon} className="h-5.5 w-5.5" />
        </span>
        <h3 className={`mt-5 text-xl ${dark ? "text-cream-50" : "text-navy-900"}`}>{service.name[locale]}</h3>
        <p className={`mt-3 flex-1 text-[0.95rem] leading-relaxed ${dark ? "text-cream-100/70" : "text-ink-700"}`}>
          {service.cardBlurb[locale]}
        </p>
        <span
          className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
            dark ? "text-gold-400" : "text-emerald-700 group-hover:text-navy-900"
          }`}
        >
          {UI[locale].common.learnMore}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </LLink>
    </Reveal>
  );
}

export function ServicesGrid({ services, locale, tone = "light" }: { services: Service[]; locale: Locale; tone?: "light" | "dark" }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <ServiceCard key={s.path} service={s} locale={locale} index={i} tone={tone} />
      ))}
    </ul>
  );
}
