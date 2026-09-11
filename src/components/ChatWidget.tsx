import Script from "next/script";

/**
 * LeadConnector chat widget, rendered on every page of the localized app.
 *
 * Configure the widget itself (greeting, routing, hours, bubble position) in
 * LeadConnector — nothing about its appearance is controlled from here.
 *
 * lazyOnload keeps it out of the critical path: a chat bubble is worth less
 * than a fast first paint on a site built to rank, so it loads once the page
 * is otherwise idle.
 *
 * Note: FloatingCta reserves room on the right at mobile widths so the bubble
 * does not land on top of the "Book a Consultation" bar. If the bubble is ever
 * moved to the bottom-left in LeadConnector, move that clearance to match.
 */
export function ChatWidget() {
  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a9d31697e179c4b663c113c"
      strategy="lazyOnload"
    />
  );
}
