import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/pages/ServicePageView";
import { SUB_SERVICES } from "@/lib/content";
import { LOCALES } from "@/lib/i18n";
import { resolveLocale } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string; sub: string }>;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => SUB_SERVICES.map((s) => ({ locale, sub: s.slug })));
}

export const dynamicParams = false;


function find(sub: string) {
  return SUB_SERVICES.find((s) => s.slug === sub);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { sub } = await params;
  const service = find(sub);
  if (!service) return {};
  const c = service.content[locale];
  return buildMetadata({ locale, path: service.path, title: c.metaTitle, description: c.metaDescription });
}

export default async function EquitySubPage({ params }: { params: Params }) {
  const locale = await resolveLocale(params);
  const { sub } = await params;
  const service = find(sub);
  if (!service) notFound();
  return <ServicePageView service={service} locale={locale} />;
}
