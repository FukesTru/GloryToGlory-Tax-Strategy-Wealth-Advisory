import type { Service } from "../types";

/**
 * EXEMPLAR — every service file follows this exact shape.
 * EN copy is final-draft quality. ZH copy is a working draft for a
 * professional translator to review (mark nothing as final).
 */
export const taxStrategyPlanning: Service = {
  slug: "tax-strategy-planning",
  path: "/services/tax-strategy-planning",
  icon: "shield",
  name: {
    en: "Tax Strategy Planning",
    "zh-hant": "稅務策略規劃",
  },
  cardBlurb: {
    en: "Proactive, year-round tax planning so vesting, exercises and bonuses never surprise you in April.",
    "zh-hant": "全年主動式稅務規劃，讓股票歸屬、行權與獎金不再在報稅季帶來意外。",
  },
  related: [
    "/services/equity-compensation",
    "/services/financial-planning",
    "/services/retirement-planning",
  ],
  content: {
    en: {
      metaTitle: "Tax Strategy Planning for Tech Employees",
      metaDescription:
        "Year-round tax strategy planning for tech professionals with RSUs, stock options and high W-2 income. Bilingual advisor serving the Bay Area, LA and nationwide.",
      h1: "Tax Strategy Planning",
      heroSub:
        "Most tech employees do not have a tax problem in April. They have a planning problem in the eleven months before it. We fix the planning problem.",
      intro: [
        "If a meaningful share of your income arrives as RSUs, bonuses or option exercises, your tax situation is not the same as your neighbor's — and a once-a-year tax return was never designed to manage it. Supplemental wages are withheld at a flat rate that often falls far short of your real bracket. Vesting dates land in the middle of the year. A single ISO exercise can quietly trigger the Alternative Minimum Tax. By the time a CPA sees the numbers, the decisions that mattered have already been made.",
        "Tax strategy planning is the ongoing work of making those decisions on purpose. We map your expected income for the year, model the tax impact of each vest, exercise or sale before it happens, and coordinate with your CPA so the return simply confirms what we already planned. The goal is not to avoid taxes you legitimately owe. It is to stop paying taxes you never needed to, and to never again be surprised by a five-figure balance due.",
      ],
      coversTitle: "What this covers",
      covers: [
        "Multi-year income and bracket projections, including expected vesting and bonus dates",
        "Withholding gap analysis for supplemental wages and quarterly estimated-payment schedules",
        "Alternative Minimum Tax (AMT) modeling for ISO exercises and the AMT credit recovery",
        "Timing of exercises, sales and charitable gifts across tax years",
        "Deduction strategy: bunching, donor-advised funds and appreciated-stock gifts",
        "Coordination of retirement contributions, backdoor and mega-backdoor Roth, HSA and 529 for tax efficiency",
        "Multi-state and relocation questions (moving between California, Texas and Washington, for example)",
        "Year-end review and hand-off to your CPA with a clear planning memo",
      ],
      process: [
        {
          title: "Discovery",
          body: "We gather your recent returns, pay stubs, grant agreements and vesting schedules, and talk through what is coming this year — a new grant, a promotion, a move, a liquidity event.",
        },
        {
          title: "Projection",
          body: "We build a forward-looking projection of your federal and state taxes, showing the withholding gap and the specific events that create it.",
        },
        {
          title: "Strategy",
          body: "You receive a written plan with prioritized actions and deadlines: how much to set aside, whether to adjust withholding, when to exercise, what to give, where to contribute.",
        },
        {
          title: "Ongoing check-ins",
          body: "We revisit the plan at each vesting date and before year-end, then package everything for your CPA so filing season is boring — in the best way.",
        },
      ],
      whyIndependent:
        "We are not paid by a fund company, a brokerage or an insurance carrier, and we do not earn commissions on anything we recommend. That means the only reason to suggest a strategy is that it works for you. Independence also lets us coordinate freely with your existing CPA and attorney instead of competing with them.",
      faqs: [
        {
          q: "Is tax strategy planning the same as tax preparation?",
          a: "No. Tax preparation looks backward and reports what already happened. Tax strategy planning looks forward and shapes what will happen. We work alongside your CPA (or can refer you to one) so the two pieces fit together.",
        },
        {
          q: "Why do I owe money every April even though taxes are withheld from my RSUs?",
          a: "Supplemental wages such as RSU vesting and bonuses are usually withheld at a flat 22% federal rate (37% above $1 million), plus a flat state rate. If your actual marginal bracket is higher, every vest creates a gap. We quantify that gap early and set up estimated payments or adjusted withholding so the balance due disappears.",
        },
        {
          q: "Can you help me with the AMT from exercising ISOs?",
          a: "Yes. AMT exposure from ISO exercises is one of the most common issues we see. We model how many shares you can exercise before crossing into AMT, weigh early exercise against holding, and track the AMT credit so you recover it in later years.",
        },
        {
          q: "I'm moving from California to Texas or Washington. Does timing matter?",
          a: "It matters a great deal. California taxes equity compensation based on where you worked during the vesting period, not simply where you live when it vests or sells. We help you understand the allocation rules and plan the move, exercises and sales in the right order.",
        },
        {
          q: "How do you work with my existing CPA?",
          a: "Happily. We provide a written year-end planning memo, projections and a summary of each equity event so your CPA can file accurately and efficiently. If you do not have a CPA who understands equity compensation, we can introduce one.",
        },
        {
          q: "When is the best time to start?",
          a: "The earlier in the tax year, the more options you have. That said, even a review in November can still reduce a surprise balance due. If a large vest or exercise is coming up, reach out before it happens.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "科技業員工稅務策略規劃",
      metaDescription:
        "為持有 RSU、股票選擇權與高薪資收入的科技業專業人士提供全年稅務策略規劃。雙語顧問，服務灣區、洛杉磯與全美各地。",
      h1: "稅務策略規劃",
      heroSub:
        "多數科技業員工的問題不在四月的報稅季，而在前面十一個月缺乏規劃。我們解決的正是規劃的問題。",
      intro: [
        "如果您有相當比例的收入來自 RSU、獎金或選擇權行權，您的稅務狀況與一般上班族並不相同，而一年一度的報稅流程從來就不是為此設計的。補充性薪資（supplemental wages）採固定稅率預扣，往往遠低於您實際的邊際稅率；股票歸屬日落在年中；一次 ISO 行權就可能悄悄觸發替代性最低稅（AMT）。等到會計師看到數字時，真正重要的決定早已做完。",
        "稅務策略規劃，就是持續且有意識地做這些決定。我們會先盤點您今年的預期收入，在每一次歸屬、行權或出售發生之前先模擬稅務影響，並與您的會計師協調，讓報稅只是確認我們早已規劃好的結果。目標不是逃避應繳的稅，而是不再多繳本來不必繳的稅，也不再被五位數的補稅金額嚇一跳。",
      ],
      coversTitle: "服務內容",
      covers: [
        "多年度收入與稅率級距預測，納入預期的歸屬日與獎金發放時間",
        "補充性薪資預扣缺口分析與季度預繳稅款安排",
        "ISO 行權的替代性最低稅（AMT）試算與 AMT 抵減額回收",
        "跨稅務年度安排行權、出售與慈善捐贈的時點",
        "扣除額策略：集中扣除、捐贈人建議基金（DAF）與增值股票捐贈",
        "退休帳戶提撥、Backdoor 與 Mega Backdoor Roth、HSA 與 529 計畫的稅務協調",
        "跨州與搬遷問題（例如在加州、德州與華盛頓州之間遷移）",
        "年終檢視，並以清楚的規劃備忘錄交接給您的會計師",
      ],
      process: [
        {
          title: "了解現況",
          body: "我們會收集您近年的報稅資料、薪資單、股票授予協議與歸屬時程，並討論今年即將發生的事：新的授予、升遷、搬家或變現事件。",
        },
        {
          title: "稅務預測",
          body: "建立前瞻性的聯邦與州稅預測，清楚呈現預扣缺口以及造成缺口的具體事件。",
        },
        {
          title: "擬定策略",
          body: "您會收到一份書面計畫，列出優先行動與截止日：該預留多少稅款、是否調整預扣、何時行權、如何捐贈、往哪些帳戶提撥。",
        },
        {
          title: "定期追蹤",
          body: "在每個歸屬日與年底前重新檢視計畫，並把所有資料整理好交給您的會計師，讓報稅季變得平淡無奇——這正是最好的結果。",
        },
      ],
      whyIndependent:
        "我們不受基金公司、券商或保險公司支付酬勞，也不從任何推薦的產品賺取佣金。因此，建議某個策略的唯一理由，就是它對您有效。獨立的身分也讓我們能自由地與您現有的會計師和律師合作，而不是與他們競爭。",
      faqs: [
        {
          q: "稅務策略規劃和報稅服務一樣嗎？",
          a: "不一樣。報稅是回顧過去、申報已經發生的事；稅務策略規劃是往前看、主動塑造將要發生的事。我們會與您的會計師並肩合作（也可以為您推薦），讓兩者緊密銜接。",
        },
        {
          q: "我的 RSU 明明有預扣稅，為什麼每年四月還是要補稅？",
          a: "RSU 歸屬與獎金等補充性薪資，通常以聯邦 22% 的固定稅率預扣（超過一百萬美元的部分為 37%），再加上州的固定稅率。如果您實際的邊際稅率更高，每一次歸屬都會產生缺口。我們會及早量化這個缺口，安排預繳稅款或調整預扣，讓補稅金額消失。",
        },
        {
          q: "你們能協助處理 ISO 行權產生的 AMT 嗎？",
          a: "可以。ISO 行權造成的 AMT 是我們最常見的案例之一。我們會試算您在觸發 AMT 前可以行權多少股、比較提早行權與繼續持有的利弊，並追蹤 AMT 抵減額，讓您在往後年度回收。",
        },
        {
          q: "我要從加州搬到德州或華盛頓州，時間點重要嗎？",
          a: "非常重要。加州對股權獎酬的課稅，是依據歸屬期間內您在哪裡工作，而不只是歸屬或出售時您住在哪裡。我們會協助您理解分配規則，並以正確的順序安排搬遷、行權與出售。",
        },
        {
          q: "你們如何與我現有的會計師合作？",
          a: "我們非常樂意合作。我們會提供年終規劃備忘錄、稅務預測以及每一筆股權事件的摘要，讓您的會計師能準確且有效率地申報。如果您還沒有熟悉股權獎酬的會計師，我們也可以為您引介。",
        },
        {
          q: "什麼時候開始最好？",
          a: "越早開始，選擇越多。不過即使在十一月才檢視，仍然可能減少意外的補稅金額。如果近期有大筆歸屬或行權，請在事件發生之前就與我們聯繫。",
        },
      ],
    },
  },
};
