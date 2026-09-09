import type { BlogPost } from "../types";

export const avoidSurpriseTaxBillRsu: BlogPost = {
  slug: "avoid-surprise-tax-bill-when-rsus-vest",
  date: "2026-08-11",
  readingMinutes: 3,
  category: {
    en: "Tax Strategy",
    "zh-hant": "稅務策略",
  },
  title: {
    en: "How to Avoid a Surprise Tax Bill When Your RSUs Vest",
    "zh-hant": "RSU 歸屬時，如何避免報稅季的意外補稅",
  },
  excerpt: {
    en: "RSU withholding is set at a flat rate that often falls short of your real bracket, and the gap grows with every vest. Here is where it comes from and four habits that close it.",
    "zh-hant": "RSU 的預扣稅率往往低於您實際的稅率級距，缺口隨每次歸屬累積。本文說明缺口從哪裡來，以及四個補上缺口的習慣。",
  },
  metaDescription: {
    en: "RSU vesting is withheld at a flat rate that often falls short of your bracket. Learn why the gap appears and four habits that keep April from surprising you.",
    "zh-hant": "RSU 歸屬以固定稅率預扣，常低於您實際的邊際稅率。了解補稅缺口的成因，以及四個讓報稅季不再出現意外補稅的規劃習慣，及早補上差距。",
  },
  body: {
    en: [
      {
        type: "p",
        text: "The pattern is familiar. Shares vest in March, your brokerage shows a healthy balance, and the following April your CPA delivers a balance due that wipes out the good feeling. Nothing went wrong with the stock. The withholding simply never matched your real tax rate, and nobody checked the gap until it was too late.",
      },
      { type: "h2", text: "Why the withholding falls short" },
      {
        type: "p",
        text: "RSU vesting is treated as supplemental wages. Most employers withhold federal tax at a flat 22% (37% once supplemental wages pass $1 million in a year), plus a flat state rate, and they usually sell shares to cover it. That flat rate is not an estimate of your bracket; it is a legal default. If your salary already places you in a higher marginal bracket, every vest is under-withheld by the difference, and a large grant can push that difference into five figures. California's flat supplemental rate can also fall short for higher earners, so the gap shows up on both returns.",
      },
      {
        type: "ul",
        items: [
          "Flat 22% federal supplemental withholding vs. your actual marginal rate",
          "Sell-to-cover withholds at the default rate, not at your bracket",
          "Several vests in one year compound the same gap",
        ],
      },
      { type: "h2", text: "Four habits that close the gap" },
      {
        type: "p",
        text: "You do not need to predict the stock price to solve this. You need to know your expected income for the year and adjust before December. That is the core of the [tax strategy planning](/services/tax-strategy-planning) we do with clients: project the year, quantify the gap, and pick the least painful way to fill it.",
      },
      {
        type: "ul",
        items: [
          "Estimate your marginal rate early in the year, including expected vests and bonuses",
          "Ask payroll whether you can elect a higher withholding rate on supplemental wages, or increase withholding on your regular salary",
          "If not, make quarterly estimated payments so an underpayment penalty is not added to the balance",
          "Set aside part of each vest in cash rather than assuming the withholding was enough",
        ],
      },
      { type: "h2", text: "Decide what to do with the shares, separately" },
      {
        type: "p",
        text: "Once tax is handled, the second decision is whether to keep the shares. Because vest-date value is your cost basis, selling right away typically creates little or no additional gain. Holding is a bet on one company that already pays your salary. For many engineers in San Jose or Irvine, employer stock quietly becomes the majority of their net worth. Our [RSU and RSA planning](/services/equity-compensation/rsu-rsa-planning) helps you set a target concentration and a schedule to reach it, without letting tax timing dictate the whole plan.",
      },
      {
        type: "callout",
        text: "Practical takeaway: before each vesting date, know three numbers. The value expected to vest, the rate that will be withheld, and the rate you will actually pay. The distance between the last two is the check you should be planning for now. For the fuller picture on grant types, see our guide to [RSUs, ISOs and NSOs](/blog/rsu-vs-iso-vs-nso).",
      },
    ],
    "zh-hant": [
      {
        type: "p",
        text: "這個劇情您可能不陌生：三月股票歸屬，券商帳戶裡的數字很漂亮；隔年四月，會計師卻告訴您要補一筆稅，把好心情一掃而空。股票本身沒有出問題，只是預扣的稅從來沒有對上您實際的稅率，而且在來不及之前，沒有人檢查過這個缺口。",
      },
      { type: "h2", text: "為什麼預扣不夠" },
      {
        type: "p",
        text: "RSU 歸屬被視為補充性薪資。多數雇主以聯邦 22% 的固定稅率預扣（當年度補充性薪資超過 100 萬美元的部分為 37%），再加上州的固定稅率，並通常以賣股抵稅的方式處理。這個固定稅率不是對您稅率級距的估計，而是法規的預設值。如果您的薪資已經讓您落在更高的邊際稅率，每一次歸屬都會少扣這段差距，大額授予甚至可能讓差距達到五位數。加州的固定補充稅率對高所得者也可能不足，因此聯邦與州的申報都會出現缺口。",
      },
      {
        type: "ul",
        items: [
          "聯邦 22% 固定預扣，對比您實際的邊際稅率",
          "賣股抵稅是依預設稅率預扣，不是依您的級距",
          "一年內多次歸屬，缺口會不斷累積",
        ],
      },
      { type: "h2", text: "四個補上缺口的習慣" },
      {
        type: "p",
        text: "您不需要預測股價來解決這個問題，只需要知道今年的預期收入，並在十二月之前調整。這正是我們與客戶進行[稅務策略規劃](/services/tax-strategy-planning)的核心：預估全年、量化缺口，並選擇最不痛的方式補上。",
      },
      {
        type: "ul",
        items: [
          "年初就估算您的邊際稅率，納入預期的歸屬與獎金",
          "詢問薪資部門能否對補充性薪資選擇較高的預扣率，或提高一般薪資的預扣",
          "若不行，改以季度預繳稅款，避免補稅之外再被加收少繳罰款",
          "每次歸屬都預留一部分現金，不要假設預扣已經足夠",
        ],
      },
      { type: "h2", text: "股票要不要留，另外決定" },
      {
        type: "p",
        text: "稅務處理好之後，第二個決定是股票要不要繼續持有。因為歸屬日市值就是您的成本基礎，立即出售通常只會產生很少或幾乎沒有額外的利得；繼續持有，則是押注在一家已經發您薪水的公司上。對許多聖荷西或爾灣的工程師來說，公司股票不知不覺就成了淨資產的大半。我們的 [RSU 與 RSA 規劃](/services/equity-compensation/rsu-rsa-planning) 協助您設定目標集中度與達成時程，而不讓稅務時點主導整個計畫。",
      },
      {
        type: "callout",
        text: "實用建議：每個歸屬日之前，先掌握三個數字：預計歸屬的市值、將被預扣的稅率，以及您實際要繳的稅率。後兩者之間的距離，就是您現在該開始準備的那筆錢。想更完整了解授予類型，請參考我們的 [RSU、ISO 與 NSO 比較指南](/blog/rsu-vs-iso-vs-nso)。",
      },
    ],
  },
  relatedServices: [
    "/services/tax-strategy-planning",
    "/services/equity-compensation/rsu-rsa-planning",
    "/services/financial-planning",
  ],
};
