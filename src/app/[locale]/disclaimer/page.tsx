import type { Metadata } from "next";
import { LegalPageView } from "@/components/pages/LegalPageView";
import { disclaimerPage } from "@/content/pages/disclaimer";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const c = disclaimerPage[locale];
  return buildMetadata({ locale, path: "/disclaimer", title: c.metaTitle, description: c.metaDescription });
}

export default async function DisclaimerPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  return <LegalPageView content={disclaimerPage[locale]} locale={locale} path="/disclaimer" />;
}
