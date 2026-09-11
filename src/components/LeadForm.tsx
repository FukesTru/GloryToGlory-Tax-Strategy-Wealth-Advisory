import Script from "next/script";

/**
 * LeadConnector (GoHighLevel) embedded enquiry form.
 *
 * Submissions land in Grace's LeadConnector account, not in this codebase —
 * there is no server route behind this and nothing to configure at deploy
 * time. Change the form itself in LeadConnector; only swap FORM_ID here if
 * she builds a different form.
 *
 * form_embed.js listens for a postMessage from the iframe and sets its
 * height to fit the content. FORM_HEIGHT is LeadConnector's own starting
 * height, reserved up front so the page does not jump when that lands, and
 * so the form still works at a usable size if the script is blocked.
 */
const FORM_ID = "aKoOs6n8qg8N3nGNV7yJ";
const FORM_NAME = "Website Form (GloryToGlory Tax Strategy & Wealth Advisory)";
const FORM_HEIGHT = 542;

export function LeadForm() {
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        id={`inline-${FORM_ID}`}
        title={FORM_NAME}
        style={{ width: "100%", height: `${FORM_HEIGHT}px`, border: "none", borderRadius: "10px" }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={FORM_NAME}
        data-height={FORM_HEIGHT}
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
