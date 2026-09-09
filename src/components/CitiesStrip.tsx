import type { Locale } from "@/lib/i18n";
import { AREAS } from "@/lib/content";
import { areaCardImage } from "@/content/images";
import { Icon } from "./Icon";
import { LLink } from "./LLink";
import { Picture } from "./Picture";
import { Reveal } from "./Reveal";

export function CitiesStrip({ locale, title, sub }: { locale: Locale; title: string; sub: string }) {
  return (
    <div>
      <Reveal className="max-w-2xl">
        <h2 className="gold-underline text-3xl text-navy-900">{title}</h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-700">{sub}</p>
      </Reveal>
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {AREAS.map((a, i) => {
          const image = areaCardImage(a.slug);
          return (
            <Reveal as="li" key={a.path} delay={i * 0.1}>
              <LLink
                href={a.path}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-300 bg-cream-50 transition-colors hover:border-gold-500/60"
              >
                {image && (
                  <span className="relative block aspect-[16/9] overflow-hidden bg-navy-900">
                    <Picture
                      image={image}
                      locale={locale}
                      sizes="(min-width: 768px) 33vw, 92vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </span>
                )}
                <span className="flex flex-1 flex-col p-6">
                  <span className="inline-flex items-center gap-2 text-emerald-700">
                    <Icon name={a.icon} className="h-5 w-5" />
                    <span className="text-lg font-medium text-navy-900">{a.region[locale]}</span>
                  </span>
                  <span className="mt-3 text-sm leading-relaxed text-ink-700">{a.citiesLocalized[locale].join(" · ")}</span>
                </span>
              </LLink>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
