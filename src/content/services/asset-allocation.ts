import type { Service } from "../types";

/**
 * Asset Allocation — concentration, diversification and asset location.
 * EN copy is final-draft quality. ZH copy is a working draft for a
 * professional translator to review (mark nothing as final).
 */
export const assetAllocation: Service = {
  slug: "asset-allocation",
  path: "/services/asset-allocation",
  icon: "pie",
  name: {
    en: "Asset Allocation",
    "zh-hant": "資產配置",
  },
  cardBlurb: {
    en: "A disciplined plan for turning concentrated employer stock into a diversified, tax-aware portfolio you can hold through any market.",
    "zh-hant": "一套有紀律的計畫，把集中的雇主股票轉化為分散且具稅務意識的投資組合，讓您在任何市況下都能安心持有。",
  },
  related: [
    "/services/equity-compensation",
    "/services/retirement-planning",
    "/services/financial-planning",
  ],
  content: {
    en: {
      metaTitle: "Asset Allocation and Concentrated Stock Planning",
      metaDescription:
        "Asset allocation for tech employees: reduce employer stock concentration, tax-aware selling schedules, asset location across accounts, disciplined rebalancing.",
      h1: "Asset Allocation",
      heroSub:
        "Your portfolio probably has one line item that matters more than all the others combined. Let us build the plan for what comes after it.",
      intro: [
        "Ask most tech employees what their asset allocation is and they will describe their 401(k). Ask what their net worth is made of and the honest answer is often one company's stock, accumulated through years of RSU vesting, ESPP purchases and option exercises. That concentration built the wealth. It also means a single earnings call, reorganization or sector rotation can move your family's finances more than every other decision you make in a year.",
        "Asset allocation is how we take that concentration and turn it into a portfolio designed around your goals rather than your employer's share price. We define a target mix across stocks, bonds and cash that fits your real risk tolerance and your capacity to absorb losses, build a tax-aware schedule for reducing employer stock, decide which assets belong in taxable, pre-tax and Roth accounts, and set rebalancing rules you can follow without checking the ticker every morning. The building blocks are usually low-cost, broadly diversified index funds. The discipline is the part that matters.",
      ],
      coversTitle: "What this covers",
      covers: [
        "Concentration risk assessment: how much of your net worth depends on your employer, including unvested grants",
        "Diversification plan with a tax-aware selling schedule, using pre-set rules in the spirit of a 10b5-1 plan",
        "Target allocation across stocks, bonds, international markets and cash, sized to your goals and timeline",
        "Risk tolerance versus risk capacity: what you can stomach and what your plan can actually afford",
        "Asset location: placing tax-inefficient holdings in tax-advantaged accounts and long-term growth where it is treated best",
        "Cash reserves sized for both emergencies and known tax bills from vesting and exercises",
        "Rebalancing rules, tax-loss harvesting and charitable gifts of appreciated shares as tools for trimming positions",
        "Low-cost, index-based building blocks and a review of what you already hold",
      ],
      process: [
        {
          title: "Discovery",
          body: "We gather every account, including vested and unvested equity, ESPP shares and cash, and talk through how you have felt in past downturns and what the money is for.",
        },
        {
          title: "Analysis",
          body: "We measure your true concentration, estimate the embedded tax in each lot, and assess the gap between the risk you are carrying and the risk your goals require.",
        },
        {
          title: "Allocation and transition plan",
          body: "You receive a target allocation, a location map for each account, and a written schedule for reducing employer stock over time, with the tax cost of each step laid out.",
        },
        {
          title: "Implementation and review",
          body: "We help you put the plan into place in your own accounts, then revisit it at each vesting date, after major market moves and at least annually.",
        },
      ],
      whyIndependent:
        "Because we manage no proprietary funds and earn no commissions, we have no reason to favor one product over another or to trade more than your plan requires. We can recommend the low-cost index funds already available in your 401(k) or brokerage account and help you use them well. Our fee is transparent and unrelated to what you buy, so the advice is shaped only by your goals and your tax situation.",
      faqs: [
        {
          q: "How much employer stock is too much?",
          a: "There is no single number, but many planners grow uncomfortable when one stock represents more than a modest share of a family's investable assets, and tech employees routinely hold several times that. The right level for you depends on your goals, your timeline, your unvested grants and how much of your future income also depends on the same company. We help you choose a target you can live with and a path to reach it.",
        },
        {
          q: "Selling my shares would trigger a large capital gains bill. Should I wait?",
          a: "Taxes are a real cost, but so is the risk of holding. We look at each lot separately, distinguish short-term from long-term gains, and build a schedule that spreads sales across tax years, uses lower-income years, offsets gains with harvested losses and considers charitable gifts of appreciated shares. Often the answer is a steady, rules-based plan rather than a single decision to sell or hold.",
        },
        {
          q: "What is a 10b5-1 plan, and do I need one?",
          a: "A 10b5-1 plan is a pre-arranged trading schedule that allows insiders to sell company stock on a fixed rule without being seen as trading on non-public information. Most employees are not formal insiders, but the principle is useful for everyone: decide the rule in advance, then let it run. We help you set that rule and, if you are an insider, coordinate with your company's legal team on the formal version.",
        },
        {
          q: "What does asset location mean, and how is it different from allocation?",
          a: "Allocation is what you own: the mix of stocks, bonds and cash. Location is where you hold each piece. Bonds and other tax-inefficient holdings often belong in a 401(k) or IRA, while long-term stock funds may sit better in a taxable account or Roth. Placing assets thoughtfully across account types can improve after-tax results without changing your overall risk. We map every account together.",
        },
        {
          q: "How is risk tolerance different from risk capacity?",
          a: "Tolerance is emotional: how much of a drop you can watch without abandoning the plan. Capacity is financial: how much loss your goals can absorb given your timeline and income. A young engineer with a stable job may have high capacity but low tolerance, while a family close to retirement may feel the reverse. A good allocation respects both, and we test your answers against past downturns rather than a questionnaire alone.",
        },
        {
          q: "Do you manage the portfolio, or do I?",
          a: "We build the plan and help you implement it in accounts you already own, typically with low-cost index funds available in your 401(k) and brokerage. You keep control of your accounts; we provide the target allocation, the transition schedule and ongoing reviews, and we explain plainly what is and is not included before you commit to anything.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "資產配置與集中持股規劃",
      metaDescription:
        "為科技業專業人士提供資產配置：降低雇主股票集中度、具稅務意識的出售時程、跨帳戶的資產位置安排，以及有紀律的再平衡。雙語顧問。",
      h1: "資產配置",
      heroSub:
        "您的投資組合裡，很可能有一個項目比其他所有項目加起來都重要。讓我們為它之後的路做好規劃。",
      intro: [
        "問多數科技業員工他們的資產配置是什麼，他們會描述自己的 401(k)。但若問淨資產是由什麼組成，誠實的答案往往是同一家公司的股票：多年的 RSU 歸屬、ESPP 購股與選擇權行權累積而來。這份集中度創造了財富，但也意味著一次財報電話會議、一次組織重整或一波產業輪動，對您家庭財務的影響，可能超過您一整年所做的其他所有決定。",
        "資產配置，就是把這樣的集中度，轉化為以您的目標而非雇主股價為核心的投資組合。我們會界定股票、債券與現金的目標比例，貼合您真實的風險承受度與承受損失的能力；建立具稅務意識的雇主股票減持時程；決定哪些資產該放在應稅、稅前與 Roth 帳戶；並訂定不必每天盯盤也能執行的再平衡規則。投資工具通常是低成本、廣泛分散的指數型基金；真正重要的，是紀律。",
      ],
      coversTitle: "服務內容",
      covers: [
        "集中度風險評估：您的淨資產有多少取決於雇主，包括尚未歸屬的授予",
        "分散計畫與具稅務意識的出售時程，採用類似 10b5-1 計畫精神的預設規則",
        "股票、債券、國際市場與現金的目標配置，依您的目標與時程調整",
        "風險承受度與風險承受能力：您心理上能承受的，以及計畫實際負擔得起的",
        "資產位置：把稅務效率較低的資產放在稅務優惠帳戶，長期成長型資產放在最有利的位置",
        "現金預備金的規模，同時涵蓋緊急需求與歸屬、行權帶來的已知稅款",
        "再平衡規則、稅損收割，以及捐贈增值股票作為減持工具",
        "低成本、以指數為基礎的投資工具，並檢視您現有的持股",
      ],
      process: [
        {
          title: "了解現況",
          body: "我們會彙整您所有的帳戶，包括已歸屬與未歸屬的股權、ESPP 股票與現金，並聊聊您在過去市場下跌時的感受，以及這筆錢的用途。",
        },
        {
          title: "深入分析",
          body: "衡量您真實的集中度、估算每一批股票的內含稅負，並評估您目前承擔的風險與目標所需風險之間的落差。",
        },
        {
          title: "配置與過渡計畫",
          body: "您會收到目標配置、每個帳戶的資產位置圖，以及逐步降低雇主股票的書面時程，並清楚列出每一步的稅務成本。",
        },
        {
          title: "執行與檢視",
          body: "我們協助您在自己的帳戶中落實計畫，之後在每個歸屬日、重大市場波動後，以及至少每年一次重新檢視。",
        },
      ],
      whyIndependent:
        "因為我們不管理自家基金、也不賺取佣金，所以沒有理由偏好任何特定產品，或進行超出計畫所需的交易。我們可以直接推薦您的 401(k) 或券商帳戶中已有的低成本指數型基金，並協助您善加運用。我們的費用透明，與您購買什麼無關，因此建議只會依您的目標與稅務狀況而定。",
      faqs: [
        {
          q: "持有多少雇主股票算太多？",
          a: "沒有單一的標準答案，但許多規劃師在單一股票佔家庭可投資資產超過一定比例時就會感到不安，而科技業員工的持股比例往往是那個水準的好幾倍。適合您的水準取決於您的目標、時程、尚未歸屬的授予，以及您未來的收入有多少同樣仰賴這家公司。我們會協助您選定一個能安心接受的目標，以及達成的路徑。",
        },
        {
          q: "出售股票會產生一大筆資本利得稅，我該等等嗎？",
          a: "稅是真實的成本，但繼續持有的風險也是。我們會逐批檢視您的持股、區分短期與長期利得，並建立一套時程：把出售分散到不同稅務年度、善用低收入年份、以收割的虧損抵銷利得，並考慮捐贈增值股票。答案往往是一套穩定、依規則執行的計畫，而不是一次性的「賣或不賣」。",
        },
        {
          q: "什麼是 10b5-1 計畫？我需要嗎？",
          a: "10b5-1 計畫是預先安排的交易時程，讓內部人士能依固定規則出售公司股票，而不被視為利用未公開資訊交易。多數員工並非正式的內部人士，但這個原則對每個人都有用：事先訂好規則，然後讓它自動執行。我們會協助您訂定這個規則；如果您是內部人士，也會與公司法務協調正式的版本。",
        },
        {
          q: "什麼是資產位置？和資產配置有什麼不同？",
          a: "配置是您持有什麼：股票、債券與現金的比例。位置是每一部分放在哪裡。債券與其他稅務效率較低的資產，往往適合放在 401(k) 或 IRA；長期持有的股票型基金，則可能更適合放在應稅帳戶或 Roth。在不同帳戶類型之間審慎安排資產，可以在不改變整體風險的前提下改善稅後結果。我們會把所有帳戶放在一起規劃。",
        },
        {
          q: "風險承受度和風險承受能力有什麼不同？",
          a: "承受度是心理層面的：您能眼睜睜看著多大的跌幅而不放棄計畫。承受能力是財務層面的：以您的時程與收入來看，目標能吸收多少損失。工作穩定的年輕工程師可能承受能力高但承受度低；接近退休的家庭可能正好相反。好的配置兩者都會顧及，我們也會用過去的市場下跌來檢驗您的回答，而不只依賴問卷。",
        },
        {
          q: "投資組合是由你們管理，還是由我自己管理？",
          a: "我們負責建立計畫，並協助您在自己既有的帳戶中執行，通常使用您的 401(k) 與券商帳戶中已有的低成本指數型基金。帳戶的控制權在您手上；我們提供目標配置、過渡時程與持續檢視，並在您做出任何承諾之前，坦白說明哪些包含在服務內、哪些不包含。",
        },
      ],
    },
  },
};
