import type { Locale } from "@/lib/i18n";
import { UI } from "@/content/site";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { JsonLd } from "./JsonLd";
import { LLink } from "./LLink";

/**
 * Visual breadcrumbs + BreadcrumbList JSON-LD. `crumbs` excludes Home;
 * the last crumb is the current page.
 */
export function Breadcrumbs({ locale, crumbs, tone = "dark" }: { locale: Locale; crumbs: Crumb[]; tone?: "dark" | "light" }) {
  const all: Crumb[] = [{ name: UI[locale].common.breadcrumbHome, path: "/" }, ...crumbs];
  const text = tone === "dark" ? "text-cream-100/60" : "text-ink-500";
  const link = tone === "dark" ? "hover:text-gold-400" : "hover:text-navy-900";
  const current = tone === "dark" ? "text-cream-100/90" : "text-navy-900";
  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, all)} />
      <nav aria-label="Breadcrumb" className={`text-[0.8rem] ${text}`}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="opacity-60">
                    /
                  </span>
                )}
                {last ? (
                  <span aria-current="page" className={`font-medium ${current}`}>
                    {c.name}
                  </span>
                ) : (
                  <LLink href={c.path} className={`transition-colors ${link}`}>
                    {c.name}
                  </LLink>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
