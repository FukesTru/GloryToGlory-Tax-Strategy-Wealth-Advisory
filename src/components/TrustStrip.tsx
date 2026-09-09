import type { Locale } from "@/lib/i18n";
import { SITE } from "@/content/site";
import { PlaceholderBadge } from "./Placeholder";
import { Reveal } from "./Reveal";

interface Item {
  label: string;
  value: string;
  placeholder?: boolean;
  href?: string;
}

/** Credentials / experience strip under the homepage hero. */
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
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-2 inline-block font-heading text-xl text-navy-900 underline decoration-gold-500 decoration-1 underline-offset-4 hover:text-emerald-700"
                >
                  {item.value}
                </a>
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
