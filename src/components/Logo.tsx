import { SITE } from "@/content/site";

/**
 * Placeholder wordmark. Swap the <svg> mark for the real logo once designed;
 * keep the text fallback for accessibility.
 */
export function Logo({ tone = "light", compact = false }: { tone?: "light" | "dark"; compact?: boolean }) {
  const text = tone === "light" ? "text-cream-50" : "text-navy-900";
  const sub = tone === "light" ? "text-cream-100/70" : "text-ink-500";
  return (
    <span className="inline-flex items-center gap-3">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#0B1E3D" stroke="#C9A253" strokeWidth="1.5" />
        <path d="M11 26 20 12l9 14" fill="none" stroke="#C9A253" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14.5 26h11" stroke="#2F6F5E" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="20" cy="12" r="2" fill="#C9A253" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-[1.05rem] font-semibold tracking-tight ${text}`}>
          {SITE.shortName}
        </span>
        {!compact && (
          <span className={`mt-1 hidden text-[0.6rem] font-medium uppercase tracking-[0.18em] sm:block ${sub}`}>
            Tax Strategy &amp; Wealth Advisory
          </span>
        )}
      </span>
    </span>
  );
}
