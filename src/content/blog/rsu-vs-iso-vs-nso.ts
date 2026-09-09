import type { BlogPost } from "../types";

export const rsuVsIsoVsNso: BlogPost = {
  slug: "rsu-vs-iso-vs-nso",
  date: "2026-08-25",
  readingMinutes: 3,
  category: {
    en: "Equity Compensation",
    "zh-hant": "股權獎酬",
  },
  title: {
    en: "RSU vs. ISO vs. NSO: What Tech Employees Need to Know",
    "zh-hant": "RSU、ISO 與 NSO 有什麼不同？科技業員工必懂的股權獎酬基礎",
  },
  excerpt: {
    en: "The three most common forms of equity look alike in a grant portal and behave very differently on a tax return. Here is the plain-English version of when each is taxed and what to plan for.",
    "zh-hant": "三種最常見的股權獎酬，在授予平台上看起來相似，在報稅時卻天差地遠。本文用白話說明各自的課稅時點與規劃重點。",
  },
  metaDescription: {
    en: "Compare RSUs, ISOs and NSOs in plain English: when each is taxed, how withholding and AMT work, and what to know before shares vest or options are exercised.",
    "zh-hant": "用白話比較 RSU、ISO 與 NSO：各自何時課稅、預扣與 AMT 如何運作，以及科技業員工在股票歸屬或行權前該知道的事。",
  },
  body: {
    en: [
      {
        type: "p",
        text: "Your offer letter says 'equity', but the letters after it decide when you owe tax, how much, and what choices you actually have. RSUs, ISOs and NSOs look alike in a grant portal and behave very differently on a tax return. Here is the plain-English version.",
      },
      { type: "h2", text: "RSUs: simple, but taxed like salary" },
      {
        type: "p",
        text: "A restricted stock unit is a promise of shares once you meet a vesting schedule. There is nothing to buy and nothing to decide at grant. When shares vest, their full market value is taxed as ordinary income, exactly like a bonus, and your employer typically withholds at the flat federal supplemental rate, which may be lower than your real bracket. Whatever the price does after vest is a capital gain or loss, measured from the vest-date value as your cost basis. Our [RSU and RSA planning](/services/equity-compensation/rsu-rsa-planning) often starts with one question: would you buy this much of your employer's stock with cash today?",
      },
      {
        type: "ul",
        items: [
          "Taxed at vest, not at grant or sale",
          "Withholding is often lower than your actual marginal rate",
          "Holding after vest is an investment decision, not a tax one",
        ],
      },
      { type: "h2", text: "ISOs: the most tax-favored, and the most complex" },
      {
        type: "p",
        text: "An incentive stock option gives you the right to buy shares at a fixed strike price. Exercising an ISO does not create regular taxable income, but the spread between strike and market value, called the bargain element, is added back for the Alternative Minimum Tax. Hold the shares at least two years from grant and one year from exercise and the entire gain at sale may qualify as long-term capital gain. Sell earlier and part of the gain reverts to ordinary income. ISOs can only be granted to employees and are most common at private and early-stage companies.",
      },
      {
        type: "ul",
        items: [
          "No regular tax at exercise, but AMT exposure on the bargain element",
          "Qualifying disposition: 2 years from grant and 1 year from exercise",
          "Leaving the company usually starts a short exercise window",
        ],
      },
      { type: "h2", text: "NSOs: straightforward, but ordinary income at exercise" },
      {
        type: "p",
        text: "A non-qualified stock option works like an ISO at grant but not at exercise. The spread is taxed as ordinary income the day you exercise, with withholding, and becomes your new cost basis. Later growth is capital gain. NSOs can go to contractors and advisors, not only employees, and there is no AMT twist. The planning question is timing: exercise early while the spread is small, or wait for liquidity and accept a larger ordinary-income hit. Our [ISO and NSO planning](/services/equity-compensation/stock-options-iso-nso) models both paths side by side.",
      },
      {
        type: "ul",
        items: [
          "Spread taxed as ordinary income at exercise",
          "No special holding-period rules, just normal capital gains treatment after exercise",
          "Available to non-employees",
        ],
      },
      {
        type: "callout",
        text: "Practical takeaway: check the grant type on every award before you decide anything. The same 1,000 shares can mean three different tax bills, and a [tax strategy plan](/services/tax-strategy-planning) built around your actual grant types avoids the most common surprises.",
      },
    ],
    "zh-hant": [
      {
        type: "p",
        text: "您的錄取通知上寫著「股權」，但後面那幾個英文字母，決定了您何時要繳稅、繳多少，以及您真正擁有哪些選擇。RSU、ISO 與 NSO 在授予平台上看起來大同小異，在報稅表上的表現卻截然不同。以下是白話版的說明。",
      },
      { type: "h2", text: "RSU：簡單，但視同薪資課稅" },
      {
        type: "p",
        text: "限制型股票單位（RSU）是公司承諾在您達成歸屬條件後交付股票。授予時不需付錢，也不需做任何決定。股票歸屬時，其全部市值會以一般所得課稅，和獎金完全相同；雇主通常按聯邦補充性薪資的固定稅率預扣，而這個稅率可能低於您實際的邊際稅率。歸屬之後的價格變動則屬於資本利得或損失，以歸屬日市值作為您的成本基礎。我們的 [RSU 與 RSA 規劃](/services/equity-compensation/rsu-rsa-planning) 往往從一個簡單的問題開始：如果今天要用現金買，您會買這麼多公司的股票嗎？",
      },
      {
        type: "ul",
        items: [
          "在歸屬時課稅，而非授予或出售時",
          "預扣稅率往往低於您實際的邊際稅率",
          "歸屬後是否繼續持有，是投資決定，不是稅務決定",
        ],
      },
      { type: "h2", text: "ISO：稅務最優惠，也最複雜" },
      {
        type: "p",
        text: "激勵型股票選擇權（ISO）賦予您以固定履約價買進股票的權利。行權 ISO 不會產生一般所得，但履約價與市值之間的價差（bargain element）會被計入替代性最低稅（AMT）。如果您從授予日起持有至少 2 年、從行權日起至少 1 年，出售時的全部獲利可能適用長期資本利得稅率；提前出售，部分獲利就會回到一般所得。ISO 只能授予員工，最常見於私人公司與早期新創。",
      },
      {
        type: "ul",
        items: [
          "行權時不課一般所得稅，但價差會納入 AMT 計算",
          "合格處分：自授予日起 2 年、自行權日起 1 年",
          "離職後通常只有一段很短的行權期限",
        ],
      },
      { type: "h2", text: "NSO：直接明瞭，但行權時就是一般所得" },
      {
        type: "p",
        text: "非法定股票選擇權（NSO）在授予時與 ISO 相似，在行權時卻不同。行權當天的價差會以一般所得課稅並預扣，並成為您新的成本基礎；之後的增值屬於資本利得。NSO 可以授予承包商與顧問，不限於員工，也沒有 AMT 的問題。規劃的重點在時機：趁價差還小時提早行權，或是等到有流動性再行權、接受較大的一般所得。我們的 [ISO 與 NSO 規劃](/services/equity-compensation/stock-options-iso-nso) 會把兩條路並排試算。",
      },
      {
        type: "ul",
        items: [
          "價差在行權時以一般所得課稅",
          "沒有特殊的持有期規定，行權後適用一般的資本利得規則",
          "非員工也可以獲得授予",
        ],
      },
      {
        type: "callout",
        text: "實用建議：做任何決定之前，先確認每一筆授予的類型。同樣 1,000 股，可能代表三種完全不同的稅單；依據您實際的授予類型量身打造的 [稅務策略規劃](/services/tax-strategy-planning)，能避開最常見的意外。",
      },
    ],
  },
  relatedServices: [
    "/services/equity-compensation",
    "/services/equity-compensation/rsu-rsa-planning",
    "/services/equity-compensation/stock-options-iso-nso",
  ],
};
