import type { MetadataRoute } from "next";
import { allPaths, POSTS } from "@/lib/content";
import { LOCALES, LOCALE_TAG, localePath } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";

/**
 * sitemap.xml — lists BOTH language versions of every URL, each with
 * xhtml:link hreflang alternates (Next emits these from `alternates.languages`).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of allPaths()) {
    const post = POSTS.find((p) => `/blog/${p.slug}` === path);
    const lastModified = post ? new Date(`${post.date}T00:00:00Z`) : now;
    const priority = path === "/" ? 1 : path.startsWith("/services") ? 0.9 : path.startsWith("/blog/") ? 0.6 : path === "/sitemap" || path === "/disclaimer" || path === "/privacy-policy" ? 0.3 : 0.8;
    const languages: Record<string, string> = {};
    for (const l of LOCALES) languages[LOCALE_TAG[l]] = absoluteUrl(localePath(l, path));
    languages["x-default"] = absoluteUrl(localePath("en", path));

    for (const locale of LOCALES) {
      entries.push({
        url: absoluteUrl(localePath(locale, path)),
        lastModified,
        changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
        priority,
        alternates: { languages },
      });
    }
  }
  return entries;
}
