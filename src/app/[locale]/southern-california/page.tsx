import type { Metadata } from "next";
import { AreaPageView } from "@/components/pages/AreaPageView";
import { AREAS, getArea } from "@/lib/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

const SLUG = "southern-california";
const area = getArea(SLUG)!;

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const c = area.content[locale];
  return buildMetadata({ locale, path: area.path, title: c.metaTitle, description: c.metaDescription });
}

export default async function SouthernCaliforniaPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  return <AreaPageView area={area} locale={locale} otherAreas={AREAS.filter((a) => a.slug !== SLUG)} />;
}
