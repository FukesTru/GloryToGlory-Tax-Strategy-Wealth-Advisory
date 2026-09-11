"use client";

import { usePathname } from "next/navigation";
import { UI } from "@/content/site";
import { splitLocale } from "@/lib/i18n";
import { LLink } from "./LLink";
import { useLocale } from "./LocaleProvider";

/**
 * Mobile-only floating "Book a Consultation" button (hidden on the contact page itself).
 *
 * pr-24 keeps the bar clear of the LeadConnector chat bubble, which is fixed
 * bottom-right and would otherwise sit on top of it. Move the clearance to the
 * left if that bubble is ever repositioned in LeadConnector.
 */
export function FloatingCta() {
  const locale = useLocale();
  const { path } = splitLocale(usePathname());
  if (path === "/contact") return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center p-4 pr-24 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden [body[data-menu-open]_&]:hidden">
      <LLink
        href="/contact"
        className="pointer-events-auto inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3.5 text-sm font-semibold text-navy-900 shadow-[0_10px_30px_-10px_rgba(11,30,61,0.5)]"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
        {UI[locale].nav.bookCtaShort}
      </LLink>
    </div>
  );
}
