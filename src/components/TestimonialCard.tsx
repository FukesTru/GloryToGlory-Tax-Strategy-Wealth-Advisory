import type { Locale } from "@/lib/i18n";
import type { Testimonial } from "@/content/types";
import { pageName } from "@/lib/content";
import { PlaceholderBadge } from "./Placeholder";
import { Reveal } from "./Reveal";

export function TestimonialCard({ t, locale, index = 0 }: { t: Testimonial; locale: Locale; index?: number }) {
  return (
    <Reveal as="li" delay={Math.min(index * 0.08, 0.4)} className="h-full">
      <figure className="flex h-full flex-col rounded-2xl border border-cream-300 bg-cream-50 p-7 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between gap-3">
          <svg viewBox="0 0 32 32" className="h-7 w-7 text-gold-500" fill="currentColor" aria-hidden="true">
            <path d="M12 10H7.5C6.1 10 5 11.1 5 12.5V17c0 1.4 1.1 2.5 2.5 2.5H10v1c0 1.7-1.3 3-3 3v2.5c3.1 0 5.5-2.4 5.5-5.5V10zm14 0h-4.5c-1.4 0-2.5 1.1-2.5 2.5V17c0 1.4 1.1 2.5 2.5 2.5H24v1c0 1.7-1.3 3-3 3v2.5c3.1 0 5.5-2.4 5.5-5.5V10z" />
          </svg>
          {t.placeholder && <PlaceholderBadge locale={locale} />}
        </div>
        <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-ink-700">
          <p>{t.quote[locale]}</p>
        </blockquote>
        <figcaption className="mt-6 border-t border-cream-300 pt-4">
          <p className="font-semibold text-navy-900">{t.name[locale]}</p>
          <p className="text-sm text-ink-500">{t.role[locale]}</p>
          {t.service && (
            <p className="mt-2 inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
              {pageName(t.service, locale)}
            </p>
          )}
        </figcaption>
      </figure>
    </Reveal>
  );
}
