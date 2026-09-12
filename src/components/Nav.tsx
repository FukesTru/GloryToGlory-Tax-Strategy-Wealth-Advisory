"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, UI } from "@/content/site";
import { splitLocale } from "@/lib/i18n";
import { LLink } from "./LLink";
import { LanguageToggle } from "./LanguageToggle";
import { Logo } from "./Logo";
import { useLocale } from "./LocaleProvider";

export interface NavMenuItem {
  path: string;
  label: string;
}

/**
 * Dropdown contents, built in the layout from the content registry and passed
 * down as plain data. Importing @/lib/content here instead would pull every
 * service, area and blog post into the client bundle.
 */
export interface NavMenus {
  services: NavMenuItem[];
  areas: NavMenuItem[];
}

function Caret({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/**
 * Desktop dropdown. A disclosure, not a `role="menu"` — the contents are plain
 * links, so Tab moves through them the way people expect from a nav. Opens on
 * hover for mice, on click for touch and keyboard, and closes on Escape,
 * outside click or navigation.
 */
function Dropdown({
  label,
  active,
  items,
  hub,
  wide,
}: {
  label: string;
  active: boolean;
  items: NavMenuItem[];
  hub?: { path: string; label: string };
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrap}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-2 text-[0.875rem] font-medium transition-colors ${
          active ? "text-gold-400" : "text-cream-100/85 hover:text-cream-50"
        }`}
      >
        {label}
        <Caret open={open} />
      </button>

      {/* pt-2 is the hover bridge between trigger and panel. */}
      <div id={panelId} hidden={!open} className="absolute left-0 top-full z-50 pt-2">
        <div
          onClick={() => setOpen(false)}
          className={`rounded-xl border border-cream-100/15 bg-navy-900 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] ${
            wide ? "w-[34rem]" : "w-64"
          }`}
        >
          {hub && (
            <LLink
              href={hub.path}
              className="mb-1 flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[0.875rem] font-semibold text-gold-400 transition-colors hover:bg-cream-100/5"
            >
              {hub.label}
              <span aria-hidden="true">→</span>
            </LLink>
          )}
          <ul className={wide ? "grid grid-cols-2 gap-0.5" : "space-y-0.5"}>
            {items.map((it) => (
              <li key={it.path}>
                <LLink
                  href={it.path}
                  className="block rounded-lg px-3 py-2.5 text-[0.875rem] leading-snug text-cream-100/85 transition-colors hover:bg-cream-100/5 hover:text-cream-50"
                >
                  {it.label}
                </LLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Mobile accordion section for a nav item that has children. */
function MobileSection({
  label,
  active,
  items,
  hub,
  onNavigate,
}: {
  label: string;
  active: boolean;
  items: NavMenuItem[];
  hub?: { path: string; label: string };
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-cream-100/10">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between gap-3 py-3.5 text-left text-base font-medium ${
          active ? "text-gold-400" : "text-cream-100"
        }`}
      >
        {label}
        <Caret open={open} />
      </button>
      <ul id={panelId} hidden={!open} className="pb-3">
        {hub && (
          <li>
            <LLink
              href={hub.path}
              onClick={onNavigate}
              className="block py-2.5 pl-4 text-[0.95rem] font-semibold text-gold-400"
            >
              {hub.label}
            </LLink>
          </li>
        )}
        {items.map((it) => (
          <li key={it.path}>
            <LLink
              href={it.path}
              onClick={onNavigate}
              className="block py-2.5 pl-4 text-[0.95rem] text-cream-100/80"
            >
              {it.label}
            </LLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Sticky nav: transparent over the dark hero, solid navy once you scroll. */
export function Nav({ menus }: { menus: NavMenus }) {
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

  const isActive = (l: (typeof NAV_LINKS)[number]) =>
    l.match ? l.match.includes(path) : path === l.path || path.startsWith(`${l.path}/`);

  const hubFor = (menu: "services" | "areas") =>
    menu === "services" ? { path: "/services", label: UI[locale].common.allServices } : undefined;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open
          ? "bg-navy-900/95 shadow-[0_1px_0_rgba(201,162,83,0.25)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-3 lg:gap-4">
        <LLink href="/" aria-label={t.home} className="shrink-0">
          <Logo tone="light" priority />
        </LLink>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((l) =>
            l.menu ? (
              <Dropdown
                key={l.key}
                label={t[l.key]}
                active={isActive(l)}
                items={menus[l.menu]}
                hub={hubFor(l.menu)}
                wide={l.menu === "services"}
              />
            ) : (
              <LLink
                key={l.key}
                href={l.path}
                aria-current={isActive(l) ? "page" : undefined}
                className={`whitespace-nowrap rounded-md px-2.5 py-2 text-[0.875rem] font-medium transition-colors ${
                  isActive(l) ? "text-gold-400" : "text-cream-100/85 hover:text-cream-50"
                }`}
              >
                {t[l.key]}
              </LLink>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle tone="light" />
          <LLink
            href="/contact"
            className="hidden whitespace-nowrap rounded-full border border-gold-500 px-4 py-2 text-[0.85rem] font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-navy-900 md:inline-flex lg:hidden xl:inline-flex"
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
      <div id="mobile-nav" hidden={!open} className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-cream-100/10 bg-navy-900 lg:hidden">
        <nav aria-label="Mobile" className="container-x flex flex-col py-4">
          {NAV_LINKS.map((l) =>
            l.menu ? (
              <MobileSection
                key={l.key}
                label={t[l.key]}
                active={isActive(l)}
                items={menus[l.menu]}
                hub={hubFor(l.menu)}
                onNavigate={() => setOpen(false)}
              />
            ) : (
              <LLink
                key={l.key}
                href={l.path}
                onClick={() => setOpen(false)}
                className={`border-b border-cream-100/10 py-3.5 text-base font-medium ${
                  isActive(l) ? "text-gold-400" : "text-cream-100"
                }`}
              >
                {t[l.key]}
              </LLink>
            ),
          )}
          <LLink
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-900"
          >
            {t.bookCta}
          </LLink>
        </nav>
      </div>
    </header>
  );
}
