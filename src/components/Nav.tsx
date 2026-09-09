"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, UI } from "@/content/site";
import { splitLocale } from "@/lib/i18n";
import { LLink } from "./LLink";
import { LanguageToggle } from "./LanguageToggle";
import { Logo } from "./Logo";
import { useLocale } from "./LocaleProvider";

/** Sticky nav: transparent over the dark hero, solid navy once you scroll. */
export function Nav() {
  const locale = useLocale();
  const t = UI[locale].nav;
  const pathname = usePathname();
  const { path } = splitLocale(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) document.body.dataset.menuOpen = "true";
    else delete document.body.dataset.menuOpen;
    return () => {
      document.body.style.overflow = "";
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/bay-area"
      ? ["/bay-area", "/southern-california", "/remote-advisory"].includes(path)
      : path === href || path.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open
          ? "bg-navy-900/95 shadow-[0_1px_0_rgba(201,162,83,0.25)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4 lg:gap-6">
        <LLink href="/" aria-label={UI[locale].nav.home} className="shrink-0">
          <Logo tone="light" />
        </LLink>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <LLink
              key={l.key}
              href={l.path}
              aria-current={isActive(l.path) ? "page" : undefined}
              className={`whitespace-nowrap rounded-md px-3 py-2 text-[0.875rem] font-medium transition-colors ${
                isActive(l.path) ? "text-gold-400" : "text-cream-100/85 hover:text-cream-50"
              }`}
            >
              {t[l.key]}
            </LLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle tone="light" />
          <LLink
            href="/contact"
            className="hidden whitespace-nowrap rounded-full border border-gold-500 px-4 py-2 text-[0.85rem] font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-navy-900 md:inline-flex"
          >
            {t.bookCta}
          </LLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.close : t.menu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-cream-50 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-cream-100/10 bg-navy-900 lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x flex flex-col py-4" onClick={() => setOpen(false)}>
          {NAV_LINKS.map((l) => (
            <LLink
              key={l.key}
              href={l.path}
              className={`border-b border-cream-100/10 py-3.5 text-base font-medium ${
                isActive(l.path) ? "text-gold-400" : "text-cream-100"
              }`}
            >
              {t[l.key]}
            </LLink>
          ))}
          <LLink
            href="/contact"
            className="mt-4 inline-flex justify-center rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-900"
          >
            {t.bookCta}
          </LLink>
        </nav>
      </div>
    </header>
  );
}
