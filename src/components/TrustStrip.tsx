import type { Locale } from "@/lib/i18n";
import { SITE } from "@/content/site";
import { LLink } from "./LLink";
import { PlaceholderBadge } from "./Placeholder";
import { Reveal } from "./Reveal";

interface Item {
  label: string;
  value: string;
  placeholder?: boolean;
  /** External URL, opened in a new tab. */
  href?: string;
  /** Internal path; the locale prefix is added automatically. */
  path?: string;
}

const linkClass =
  "mt-2 inline-block font-heading text-xl text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-4 hover:text-emerald-700";

/** Short strip of facts under the homepage hero. */
export function TrustStrip({ locale, items }: { locale: Locale; items: Item[] }) {
  return (
    <div className="border-y border-cream-300 bg-cream-50">
      <div className="container-x">
        <ul className="grid divide-y divide-cream-300 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 0.06} className="px-2 py-6 sm:px-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                {item.label}
                {item.placeholder && <PlaceholderBadge locale={locale} />}
              </p>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {item.value}
                </a>
              ) : item.path ? (
                <LLink href={item.path} className={linkClass}>
                  {item.value}
                </LLink>
              ) : (
                <p className="mt-2 font-heading text-xl text-navy-900">{item.value}</p>
              )}
            </Reveal>
          ))}
        </ul>
        <span className="sr-only">{SITE.name}</span>
      </div>
    </div>
  );
}
