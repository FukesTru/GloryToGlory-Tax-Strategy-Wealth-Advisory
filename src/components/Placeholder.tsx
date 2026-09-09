import type { Locale } from "@/lib/i18n";
import { UI } from "@/content/site";

/** Visible marker for content the client must confirm before launch. */
export function PlaceholderBadge({ locale, label }: { locale: Locale; label?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-gold-600/60 bg-gold-300/20 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold-700"
      title={UI[locale].common.placeholderNote}
    >
      <span aria-hidden="true">◌</span>
      {label ?? UI[locale].common.placeholder}
    </span>
  );
}

export function PlaceholderNote({ locale, text, tone = "light" }: { locale: Locale; text?: string; tone?: "light" | "dark" }) {
  const cls =
    tone === "dark"
      ? "border-gold-500/40 bg-gold-500/10 text-gold-300"
      : "border-gold-600/40 bg-gold-300/15 text-gold-700";
  return (
    <p className={`rounded-lg border border-dashed px-4 py-3 text-sm ${cls}`}>
      <span className="mr-2 font-semibold uppercase tracking-[0.12em]">{UI[locale].common.placeholder}</span>
      {text ?? UI[locale].common.placeholderNote}
    </p>
  );
}
