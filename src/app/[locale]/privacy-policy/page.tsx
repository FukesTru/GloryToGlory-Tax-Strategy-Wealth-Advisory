import type { Metadata } from "next";
import { LegalPageView } from "@/components/pages/LegalPageView";
import { privacyPolicyPage } from "@/content/pages/privacy-policy";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const c = privacyPolicyPage[locale];
  return buildMetadata({ locale, path: "/privacy-policy", title: c.metaTitle, description: c.metaDescription });
}

export default async function PrivacyPolicyPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  return <LegalPageView content={privacyPolicyPage[locale]} locale={locale} path="/privacy-policy" />;
}
