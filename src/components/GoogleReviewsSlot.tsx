import type { Locale } from "@/lib/i18n";

/**
 * Reserved slot for a Google Business Profile reviews widget.
 * Once the profile exists: set NEXT_PUBLIC_GOOGLE_PLACE_ID and paste the
 * widget embed (Elfsight, EmbedSocial, or a custom Places API fetch) here.
 */
export function GoogleReviewsSlot({ locale }: { locale: Locale }) {
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const copy =
    locale === "en"
      ? {
          title: "Google reviews",
          body: "Google Business Profile is not set up yet. This slot is reserved for the reviews widget once the profile is live.",
          hint: "Developer note: set NEXT_PUBLIC_GOOGLE_PLACE_ID and replace this component's body with the widget embed.",
        }
      : {
          title: "Google 評論",
          body: "Google 商家檔案尚未建立。此區塊預留給商家檔案上線後的評論小工具。",
          hint: "開發者備註：設定 NEXT_PUBLIC_GOOGLE_PLACE_ID，並以評論小工具的嵌入程式碼取代此元件內容。",
        };

  return (
    <div
      id="google-reviews"
      data-place-id={placeId ?? ""}
      className="rounded-2xl border-2 border-dashed border-gold-600/40 bg-cream-50 p-8 text-center"
    >
      <p className="eyebrow text-gold-700">{copy.title}</p>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-700">{copy.body}</p>
      <p className="mx-auto mt-2 max-w-xl text-xs text-ink-500">{copy.hint}</p>
    </div>
  );
}
