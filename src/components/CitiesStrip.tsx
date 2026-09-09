import type { Locale } from "@/lib/i18n";
import { AREAS } from "@/lib/content";
import { Icon } from "./Icon";
import { LLink } from "./LLink";
import { Reveal } from "./Reveal";

export function CitiesStrip({ locale, title, sub }: { locale: Locale; title: string; sub: string }) {
  return (
    <div>
      <Reveal className="max-w-2xl">
        <h2 className="gold-underline text-3xl text-navy-900">{title}</h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-700">{sub}</p>
      </Reveal>
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {AREAS.map((a, i) => (
          <Reveal as="li" key={a.path} delay={i * 0.1}>
            <LLink
              href={a.path}
              className="group flex h-full flex-col rounded-2xl border border-cream-300 bg-cream-50 p-6 transition-colors hover:border-gold-500/60"
            >
              <span className="inline-flex items-center gap-2 text-emerald-700">
                <Icon name={a.icon} className="h-5 w-5" />
                <span className="text-lg font-medium text-navy-900">{a.region[locale]}</span>
              </span>
              <span className="mt-3 text-sm leading-relaxed text-ink-700">{a.citiesLocalized[locale].join(" · ")}</span>
            </LLink>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
