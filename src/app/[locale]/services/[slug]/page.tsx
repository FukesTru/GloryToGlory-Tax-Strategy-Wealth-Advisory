import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/pages/ServicePageView";
import { PARENT_SERVICES } from "@/lib/content";
import { LOCALES } from "@/lib/i18n";
import { resolveLocale } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => PARENT_SERVICES.map((s) => ({ locale, slug: s.slug })));
}

export const dynamicParams = false;


function find(slug: string) {
  return PARENT_SERVICES.find((s) => s.slug === slug);
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const service = find(slug);
  if (!service) return {};
  const c = service.content[locale];
  return buildMetadata({ locale, path: service.path, title: c.metaTitle, description: c.metaDescription });
}

export default async function ServicePage({ params }: { params: Params }) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const service = find(slug);
  if (!service) notFound();
  return <ServicePageView service={service} locale={locale} />;
}
