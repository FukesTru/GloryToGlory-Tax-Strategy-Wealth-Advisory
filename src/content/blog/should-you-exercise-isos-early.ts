import type { BlogPost } from "../types";

export const exerciseIsosEarly: BlogPost = {
  slug: "should-you-exercise-isos-early",
  date: "2026-06-30",
  readingMinutes: 4,
  category: {
    en: "Stock Options",
    "zh-hant": "股票選擇權",
  },
  title: {
    en: "Should You Exercise Your ISOs Early?",
    "zh-hant": "ISO 該提早行權嗎？",
  },
  excerpt: {
    en: "'Exercise early' is advice every startup employee hears. It is sometimes right, and sometimes the fastest way to owe real tax on shares you cannot sell. Here is how the spread, AMT, the 83(b) election and liquidity shape the decision.",
    "zh-hant": "「早點行權」是每個新創員工都聽過的建議，有時是對的，但也可能讓您為賣不掉的股票先繳一筆真實的稅。本文說明價差、AMT、83(b) 選擇與流動性風險如何影響這個決定。",
  },
  metaDescription: {
    en: "Early ISO exercise can start the capital-gains clock or trigger AMT on shares you cannot sell. How the bargain element, 83(b) and liquidity shape the decision.",
    "zh-hant": "提早行權 ISO 可能啟動資本利得的持有期，也可能為賣不掉的股票觸發 AMT。了解價差、83(b) 選擇與流動性風險如何影響這個決定。",
  },
  body: {
    en: [
      {
        type: "p",
        text: "'Exercise early' is the advice every startup employee hears from a colleague who did well. It is sometimes right, and sometimes the fastest way to turn paper wealth into a real tax bill on shares you cannot sell. The answer depends on the spread, the AMT, liquidity and your own balance sheet.",
      },
      { type: "h2", text: "What happens when you exercise an ISO" },
      {
        type: "p",
        text: "Exercising an ISO means paying the strike price to buy shares. For regular tax, nothing is owed that day. For the Alternative Minimum Tax, the bargain element, the gap between fair market value and your strike, is added to your income. Exercise many shares while the spread is wide and you may owe AMT in April on gains you have not realized, and possibly cannot realize at a private company. The upside: hold the shares at least two years from grant and one year from exercise and the sale is a qualifying disposition, with the full gain potentially taxed as long-term capital gain.",
      },
      {
        type: "ul",
        items: [
          "Bargain element: fair market value at exercise minus strike price",
          "Not regular income at exercise, but included for AMT",
          "Qualifying disposition: hold 2 years from grant and 1 year from exercise",
        ],
      },
      { type: "h2", text: "Early exercise and the 83(b) election" },
      {
        type: "p",
        text: "Some companies let you exercise options before they vest. If you do, and file an 83(b) election with the IRS within 30 days, the bargain element is measured on the exercise date rather than as each block vests. When the strike price roughly equals fair market value, the spread is near zero, AMT exposure is minimal and the holding-period clock starts right away. Miss the window and the election is gone. Early exercise also means paying cash for unvested shares; leave before they vest and the company typically buys them back at your original price.",
      },
      {
        type: "ul",
        items: [
          "83(b) must be filed within 30 days of exercise, with no extension",
          "Works best when the spread is near zero",
          "You put real cash at risk in an illiquid company",
        ],
      },
      { type: "h2", text: "When it might make sense, and when it usually does not" },
      {
        type: "p",
        text: "Early exercise is often worth modeling when the spread is small, the cash is money you can afford to lose, and you believe in the company enough to hold for years. It usually does not make sense when the spread is already wide enough to create real AMT, when the cash would come from an emergency fund or a down payment, or when you may not stay long enough to vest. Private-company shares can stay illiquid far longer than anyone expects; secondary sales and tender offers are never guaranteed. Our [ISO and NSO planning](/services/equity-compensation/stock-options-iso-nso) models partial exercises across tax years and how the AMT credit comes back later, while [tax strategy planning](/services/tax-strategy-planning) keeps your whole tax picture in view.",
      },
      {
        type: "callout",
        text: "Practical takeaway: exercise ISOs in an amount you can afford to lose, on a schedule you have modeled for AMT, not because a colleague did. Still sorting out grant types? Start with our guide to [RSUs, ISOs and NSOs](/blog/rsu-vs-iso-vs-nso).",
      },
    ],
    "zh-hant": [
      {
        type: "p",
        text: "「早點行權」是每一位新創員工都會從某位賺到錢的同事口中聽到的建議。它有時是對的，但也是我們所知道最快把帳面財富變成真實稅單的方式，而且是為了您還賣不掉的股票。是否適合您，取決於四件事：價差、AMT、流動性，以及您自己的資產負債表。",
      },
      { type: "h2", text: "行權 ISO 時實際發生的事" },
      {
        type: "p",
        text: "行權激勵型股票選擇權（ISO），就是支付履約價買進股票。就一般所得稅而言，當天不需繳稅；但就替代性最低稅（AMT）而言，公平市價與履約價之間的價差（bargain element）會被計入您的所得。如果在價差很大的時候一次行權大量股份，隔年四月您可能要為尚未實現、甚至在公司未上市時無法實現的獲利繳 AMT。好處是：如果之後您從授予日起持有至少 2 年、從行權日起至少 1 年，最終的出售就屬於合格處分，全部獲利可能適用長期資本利得稅率，而非一般所得稅率。",
      },
      {
        type: "ul",
        items: [
          "價差：行權時的公平市價減去履約價",
          "行權時不屬於一般所得，但會計入 AMT",
          "合格處分：自授予日起持有 2 年、自行權日起持有 1 年",
        ],
      },
      { type: "h2", text: "提早行權與 83(b) 選擇" },
      {
        type: "p",
        text: "有些公司允許您在股票歸屬之前就行權。如果您這麼做，並在 30 天內向 IRS 提交 83(b) 選擇，就等於選擇以行權當日的價差來計算，而不是在每批股票歸屬時分別計算。當履約價大致等於公平市價時，價差接近零，AMT 風險極小，而且持有期的時鐘立即開始計算。錯過期限，這項選擇就不復存在。提早行權也代表您為尚未歸屬的股票支付現金；若您在歸屬前離職，公司通常會以您原本的價格買回，而不是以當時的市值。",
      },
      {
        type: "ul",
        items: [
          "83(b) 選擇必須在行權後 30 天內提交，沒有展延",
          "價差越小越適合，最好接近零",
          "您的真金白銀將投入一家沒有流動性的公司",
        ],
      },
      { type: "h2", text: "什麼時候可能合理，什麼時候通常不合理" },
      {
        type: "p",
        text: "當價差很小、這筆現金是您完全賠得起的錢，而且您對公司有足夠信心願意持有多年時，提早行權往往值得試算。反之，當價差已經大到會產生實質的 AMT、行權成本得從緊急預備金或購屋頭期款挪用，或您不確定會待到歸屬時，通常就不合理。私人公司的股票可能比任何人預期的都更久無法變現，次級市場交易或公司收購要約也從來沒有保證。我們的 [ISO 與 NSO 規劃](/services/equity-compensation/stock-options-iso-nso) 會試算分批行權、跨稅務年度分散，以及 AMT 抵減額日後如何回收；[稅務策略規劃](/services/tax-strategy-planning)則確保您整體的稅務全貌都在視線之內。",
      },
      {
        type: "callout",
        text: "實用建議：以您賠得起的金額、依照已針對 AMT 試算過的時程來行權 ISO，而不是因為某位同事這麼做。如果您還在釐清各種授予類型的差異，可以先閱讀我們的 [RSU、ISO 與 NSO 比較指南](/blog/rsu-vs-iso-vs-nso)。",
      },
    ],
  },
  relatedServices: [
    "/services/equity-compensation/stock-options-iso-nso",
    "/services/tax-strategy-planning",
    "/services/equity-compensation",
  ],
};
