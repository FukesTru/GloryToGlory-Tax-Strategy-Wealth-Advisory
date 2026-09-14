import type { Locale } from "@/lib/i18n";
import { UI } from "@/content/site";

/**
 * Visible marker for content the client must confirm before launch.
 *
 * Only the About page's missing-headshot fallback still uses this — every
 * placeholder section it used to mark has been removed.
 */
export function PlaceholderBadge({ locale, label }: { locale: Locale; label?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-gold-600/60 bg-gold-300/20 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold-700"
    >
      <span aria-hidden="true">◌</span>
      {label ?? UI[locale].common.placeholder}
    </span>
  );
}

