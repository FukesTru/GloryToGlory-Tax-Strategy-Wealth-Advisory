import { SITE } from "@/content/site";

/**
 * GA4 placeholder. Rendered into <head> on every page.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID to replace "G-XXXXXXXXXX".
 */
export function Analytics() {
  const id = SITE.gaMeasurementId;
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`,
        }}
      />
    </>
  );
}
