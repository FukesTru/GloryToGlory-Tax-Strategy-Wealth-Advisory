import type { Service } from "../types";

/**
 * Equity Compensation hub page. Parent of the RSU/RSA and ISO/NSO sub-pages.
 * EN copy is final-draft quality. ZH copy is a working draft for a
 * professional translator to review (mark nothing as final).
 */
export const equityCompensation: Service = {
  slug: "equity-compensation",
  path: "/services/equity-compensation",
  icon: "layers",
  name: {
    en: "Equity Compensation Strategies",
    "zh-hant": "股權獎酬策略",
  },
  cardBlurb: {
    en: "One coordinated plan for your RSUs, RSAs, ISOs and NSOs, so every vest, exercise and sale is a decision rather than a surprise.",
    "zh-hant": "整合 RSU、RSA、ISO 與 NSO 的完整規劃，讓每一次歸屬、行權與出售都是有意識的決定，而不是意外。",
  },
  related: [
    "/services/equity-compensation/rsu-rsa-planning",
    "/services/equity-compensation/stock-options-iso-nso",
    "/services/tax-strategy-planning",
  ],
  content: {
    en: {
      metaTitle: "Equity Compensation Planning: RSU, RSA, ISO & NSO",
      metaDescription:
        "Equity compensation planning for RSUs, RSAs, ISOs and NSOs: vesting, 83(b) elections, AMT, sell-to-cover and concentration. Bilingual advisor, Bay Area and LA.",
      h1: "Equity Compensation Strategies",
      heroSub:
        "Four grant types, one paycheck, and a tax bill that depends on decisions you make months before it arrives. We help you make them on purpose.",
      intro: [
        "Equity is often the largest and least understood part of a tech professional's compensation. Restricted stock units (RSUs) vest on a schedule and are taxed as ordinary income the day they do. Restricted stock awards (RSAs) at early-stage companies raise an 83(b) decision with a thirty-day clock. Incentive stock options (ISOs) can qualify for long-term capital gains treatment, but exercising them can trigger the Alternative Minimum Tax. Non-qualified stock options (NSOs) are simpler, yet the spread at exercise is taxed as wages. Each type follows its own rules, and most people hold more than one.",
        "A coordinated plan looks at all of them together: when shares vest, how much tax is actually withheld, whether to hold or sell, how concentrated you have become in a single employer, and what happens at an IPO, tender offer, acquisition or job change. This page explains how we approach the whole picture. For grant-specific detail, see our pages on [RSU & RSA planning](/services/equity-compensation/rsu-rsa-planning) and [ISO & NSO planning](/services/equity-compensation/stock-options-iso-nso), or start with a conversation about what you hold today.",
      ],
      coversTitle: "What this covers",
      covers: [
        "Vesting schedules and cliff dates across RSU, RSA, ISO and NSO grants, mapped to a single calendar",
        "83(b) elections for restricted stock and early-exercised options, including the thirty-day deadline",
        "Alternative Minimum Tax (AMT) modeling for ISO exercises and recovery of the AMT credit",
        "Sell-to-cover versus hold decisions at each vest, and the withholding gap that flat supplemental rates leave behind",
        "Concentration risk in a single employer's stock, and a diversification cadence you can actually follow",
        "Liquidity events: IPO lockups, tender offers, secondary sales and acquisitions, including cash and stock deals",
        "Double-trigger RSUs at private companies and the tax cliff they can create at IPO",
        "Leaving a company: unvested shares, post-termination exercise windows and the cash needed to exercise",
      ],
      process: [
        {
          title: "Inventory",
          body: "We gather every grant agreement, vesting schedule, exercise history and brokerage statement, then build one picture of what you hold, what is coming and what it is worth today.",
        },
        {
          title: "Tax modeling",
          body: "We project the federal and state tax impact of each vest, exercise and sale before it happens, including AMT exposure, withholding gaps and the effect of a move between states.",
        },
        {
          title: "Strategy",
          body: "You receive a written plan: which shares to sell and when, whether to exercise, whether an 83(b) election makes sense, how much cash to set aside for tax, and a target for reducing concentration.",
        },
        {
          title: "Events and check-ins",
          body: "We revisit the plan at each vest, before year-end and ahead of any liquidity event or job change, then hand a clear summary to your CPA so filing simply confirms the plan.",
        },
      ],
      whyIndependent:
        "Equity decisions are among the largest financial choices most tech employees will ever make, and they are surrounded by people with something to sell: brokerages that profit when you trade, lenders that profit when you borrow to exercise, platforms that profit when you hold. We earn no commissions and take no referral fees, so our only interest is whether a decision is right for you. That independence also lets us work openly with your CPA, your employer's equity platform and your attorney, rather than around them.",
      faqs: [
        {
          q: "Which grant types do you work with?",
          a: "All four common types: RSUs, RSAs, ISOs and NSOs, plus the employee stock purchase plans (ESPPs) that often sit alongside them. Many clients hold several at once, sometimes from more than one employer, and the plan needs to account for all of them together. For grant-specific detail, see our pages on [RSU & RSA planning](/services/equity-compensation/rsu-rsa-planning) and [ISO & NSO planning](/services/equity-compensation/stock-options-iso-nso).",
        },
        {
          q: "My company is still private. Is there anything to plan before an IPO?",
          a: "Often the most important decisions happen before the IPO. Double-trigger RSUs at private companies typically do not become taxable until a liquidity event, which means several years of grants can vest at once and land in a single tax year. Options may be cheaper to exercise early, and an 83(b) election has a strict thirty-day deadline. We help you decide what to do now so the IPO itself is a good day rather than a tax surprise.",
        },
        {
          q: "How much of my net worth should be in my employer's stock?",
          a: "There is no single right number. The answer depends on your other assets, your goals and how much of your future income already depends on the same company. What we can say is that most people hold far more than they realize once unvested grants are counted. We help you set a target, then build a sell schedule that respects taxes, trading windows and your own view of the company.",
        },
        {
          q: "I am leaving my company. What happens to my equity?",
          a: "Unvested RSUs and RSAs are usually forfeited at departure, while vested options typically must be exercised within a post-termination window that is often ninety days but varies by plan. ISOs that are not exercised within three months of leaving lose their ISO status even if the plan allows longer. Exercising can require significant cash for both the strike price and the tax. If a move is on the horizon, talk to us before you resign.",
        },
        {
          q: "Do you help with the tax return itself?",
          a: "We do not prepare returns, but we work closely with your CPA. Equity compensation is one of the most common places returns go wrong: RSU income that already appears on the W-2 is reported again as a gain because the broker's cost basis was blank, or an ISO exercise is left off the AMT form. We provide a written summary of each event and the correct basis so your CPA can file confidently. See our [tax strategy planning](/services/tax-strategy-planning) page for how the two fit together.",
        },
        {
          q: "Do you work with clients outside California?",
          a: "Yes. We meet by video and serve clients nationwide, with most in the Bay Area, Los Angeles, Irvine and San Diego, plus Austin and Seattle. State tax rules for equity vary widely, and a move between states during a vesting period raises allocation questions we plan for routinely. Meetings are available in English or Mandarin.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "股權獎酬規劃：RSU、RSA、ISO 與 NSO",
      metaDescription:
        "整合規劃 RSU、RSA、ISO 與 NSO：歸屬時程、83(b) 選擇、AMT、賣股抵稅與持股集中風險。雙語顧問，服務灣區、洛杉磯與全美各地。",
      h1: "股權獎酬策略",
      heroSub:
        "四種授予類型、一份薪資，以及一張取決於您幾個月前決定的稅單。我們協助您有意識地做這些決定。",
      intro: [
        "對科技業專業人士而言，股權往往是薪酬中金額最大、卻最不被理解的部分。限制型股票單位（RSU）依時程歸屬，歸屬當天即以一般所得課稅。早期新創公司的限制型股票獎勵（RSA）會帶來 83(b) 選擇的問題，而且只有三十天的期限。激勵型股票選擇權（ISO）有機會適用長期資本利得的稅率，但行權可能觸發替代性最低稅（AMT）。非法定股票選擇權（NSO）規則較單純，但行權時的價差會視為薪資課稅。每一種類型都有自己的規則，而多數人手上不只持有一種。",
        "完整的規劃會把它們放在一起看：股票何時歸屬、實際預扣了多少稅、該持有還是出售、您在單一公司的持股集中到什麼程度，以及 IPO、要約收購、被併購或換工作時會發生什麼事。這個頁面說明我們如何看待整體局面。想了解個別授予類型的細節，請參考 [RSU 與 RSA 規劃](/services/equity-compensation/rsu-rsa-planning) 與 [ISO 與 NSO 規劃](/services/equity-compensation/stock-options-iso-nso)，或直接與我們聊聊您目前持有的內容。",
      ],
      coversTitle: "服務內容",
      covers: [
        "整合 RSU、RSA、ISO 與 NSO 的歸屬時程與 cliff 日期，建立單一行事曆",
        "限制型股票與提早行權選擇權的 83(b) 選擇，包括三十天期限",
        "ISO 行權的替代性最低稅（AMT）試算與 AMT 抵減額回收",
        "每次歸屬時賣股抵稅或持有的決策，以及補充性薪資固定預扣率留下的缺口",
        "單一公司持股的集中風險，以及一套您真正做得到的分散節奏",
        "變現事件：IPO 閉鎖期、要約收購、次級市場出售與併購（含現金與換股交易）",
        "私人公司的雙重觸發（double-trigger）RSU，以及 IPO 時可能出現的稅務懸崖",
        "離職規劃：未歸屬股票、離職後行權期限，以及行權所需的現金",
      ],
      process: [
        {
          title: "盤點",
          body: "我們會收集每一份授予協議、歸屬時程、行權紀錄與券商對帳單，整理出您目前持有什麼、接下來會發生什麼，以及現在值多少。",
        },
        {
          title: "稅務試算",
          body: "在每一次歸屬、行權與出售發生之前，先預測聯邦與州稅的影響，包括 AMT 曝險、預扣缺口，以及跨州搬遷的效果。",
        },
        {
          title: "擬定策略",
          body: "您會收到一份書面計畫：哪些股票該賣、何時賣、是否行權、83(b) 選擇是否合適、該預留多少現金繳稅，以及降低持股集中度的目標。",
        },
        {
          title: "事件與定期追蹤",
          body: "在每次歸屬、年底前，以及任何變現事件或換工作之前重新檢視計畫，並把清楚的摘要交給您的會計師，讓報稅只是確認計畫的結果。",
        },
      ],
      whyIndependent:
        "股權決策是多數科技業員工一生中金額最大的財務選擇之一，而周圍總有想賣東西給您的人：靠您交易獲利的券商、靠您借錢行權獲利的貸款機構、靠您持有獲利的產品平台。我們不收佣金，也不收轉介費，唯一在乎的是這個決定對您是否正確。獨立的身分也讓我們能與您的會計師、公司的股權平台和律師公開合作，而不是繞過他們。",
      faqs: [
        {
          q: "你們處理哪些類型的股權授予？",
          a: "四種常見類型都處理：RSU、RSA、ISO 與 NSO，以及經常一併出現的員工股票購買計畫（ESPP）。許多客戶同時持有好幾種，有時來自不只一家公司，計畫必須把它們一起納入考量。想了解個別類型的細節，請參考 [RSU 與 RSA 規劃](/services/equity-compensation/rsu-rsa-planning) 與 [ISO 與 NSO 規劃](/services/equity-compensation/stock-options-iso-nso)。",
        },
        {
          q: "我的公司還沒上市，IPO 之前有什麼需要規劃的嗎？",
          a: "最重要的決定往往發生在 IPO 之前。私人公司的雙重觸發 RSU 通常要等到變現事件才會課稅，這表示好幾年的授予可能同時歸屬，全部落在同一個稅務年度。選擇權在早期行權的成本可能較低，而 83(b) 選擇有嚴格的三十天期限。我們協助您決定現在該做什麼，讓 IPO 當天是值得慶祝的日子，而不是稅務上的意外。",
        },
        {
          q: "我的淨資產中，應該有多少放在公司股票？",
          a: "沒有單一的正確數字。答案取決於您的其他資產、目標，以及您未來的收入有多少已經仰賴同一家公司。可以確定的是，一旦把未歸屬的授予算進去，多數人持有的比例遠比自己以為的高。我們協助您設定目標，再建立一套兼顧稅務、交易窗口與您對公司看法的出售時程。",
        },
        {
          q: "我準備離職，我的股權會怎麼樣？",
          a: "未歸屬的 RSU 與 RSA 通常在離職時作廢；已歸屬的選擇權則必須在離職後的行權期限內行權，常見為九十天，但依計畫而異。ISO 若未在離職後三個月內行權，即使計畫允許更長時間，也會失去 ISO 資格。行權可能需要大筆現金，同時支付行權價與稅款。如果您正考慮換工作，請在遞出辭呈前先與我們談談。",
        },
        {
          q: "你們協助處理報稅本身嗎？",
          a: "我們不代客報稅，但會與您的會計師密切合作。股權獎酬是報稅最容易出錯的地方之一：已列入 W-2 的 RSU 所得，因為券商的成本基礎空白而被再次申報為資本利得；或是 ISO 行權漏填在 AMT 表格上。我們會提供每一筆事件的書面摘要與正確的成本基礎，讓您的會計師能放心申報。兩者如何銜接，請參考[稅務策略規劃](/services/tax-strategy-planning)頁面。",
        },
        {
          q: "你們服務加州以外的客戶嗎？",
          a: "是的。我們透過視訊服務全美客戶，大多數客戶位於灣區、洛杉磯、爾灣與聖地牙哥，也有來自奧斯汀與西雅圖的客戶。各州對股權的課稅規則差異很大，歸屬期間內跨州搬遷所產生的分配問題，是我們日常規劃的一部分。會議可用中文或英文進行。",
        },
      ],
    },
  },
};
