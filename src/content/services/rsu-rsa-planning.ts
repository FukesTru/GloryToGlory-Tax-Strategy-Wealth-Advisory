import type { Service } from "../types";

/**
 * RSU & RSA sub-page under the Equity Compensation hub.
 * EN copy is final-draft quality. ZH copy is a working draft for a
 * professional translator to review (mark nothing as final).
 */
export const rsuRsaPlanning: Service = {
  slug: "rsu-rsa-planning",
  path: "/services/equity-compensation/rsu-rsa-planning",
  parent: "/services/equity-compensation",
  icon: "chart",
  name: {
    en: "RSU & RSA Planning",
    "zh-hant": "RSU 與 RSA 規劃",
  },
  cardBlurb: {
    en: "Vesting calendars, withholding gaps, sell-or-hold decisions and 83(b) elections, planned before each vest lands in your account.",
    "zh-hant": "歸屬時程、預扣缺口、賣或留的抉擇與 83(b) 選擇，在每次股票入帳之前就先規劃好。",
  },
  related: [
    "/services/equity-compensation",
    "/services/equity-compensation/stock-options-iso-nso",
    "/services/tax-strategy-planning",
  ],
  content: {
    en: {
      metaTitle: "RSU & RSA Tax Planning for Tech Employees",
      metaDescription:
        "RSU and RSA tax planning for tech employees: vesting, withholding gaps, sell-to-cover, cost basis, 83(b) elections and double-trigger RSUs. Bilingual advisor.",
      h1: "RSU & RSA Tax Planning",
      heroSub:
        "RSUs are the simplest form of equity to receive and one of the easiest to get wrong at tax time. We make the vesting calendar work for you.",
      intro: [
        "Restricted stock units are the most common form of equity at public tech companies, and restricted stock awards are common at early-stage startups. Both deliver actual shares rather than the right to buy them, which makes them feel straightforward. The tax treatment is where the complexity hides. RSUs are taxed as ordinary income on the day they vest, at the share price that day, whether or not you sell. Your employer withholds at a flat supplemental rate that is often well below your real bracket, so each vest can quietly build a balance due for April. Then the shares you keep begin a second life as an investment, with their own cost basis, holding period and concentration risk.",
        "RSAs add an early decision. Because the shares are issued at grant, an 83(b) election lets you pay tax on their value now, while it may be small, rather than at each vesting date when the company may be worth far more. The election must be filed within thirty days of the grant, and it cannot be undone. We help you understand both instruments, plan around your specific vesting schedule, and decide at each date whether to sell, hold or diversify, with taxes modeled before the shares ever land in your account.",
      ],
      coversTitle: "What we handle",
      covers: [
        "Vesting schedules and cliff dates, mapped against your expected income for the year",
        "Tax withholding gaps on supplemental wages, and estimated payments or adjusted withholding to close them",
        "Sell-to-cover versus hold decisions at each vest, including the case for selling everything on day one",
        "Cost basis tracking, and the common error of reporting RSU income twice because the broker's 1099-B shows a zero basis",
        "RSA 83(b) elections at early-stage companies: whether to file, the thirty-day deadline and the risk if shares are later forfeited",
        "Double-trigger RSUs at private companies and planning for the IPO lockup period",
        "Concentration in employer stock, and a diversification cadence that fits trading windows and your tax bracket",
        "Planning for a job change with unvested shares, including negotiating a new grant to replace what you leave behind",
      ],
      process: [
        {
          title: "Inventory",
          body: "We collect your grant agreements, vesting schedules, recent pay stubs and brokerage statements, and build a single calendar of what vests when and what it is likely to be worth.",
        },
        {
          title: "Modeling",
          body: "We project the tax on each vest at the federal and state level, quantify the withholding gap, and compare sell-to-cover, sell-all and hold scenarios so you can see the trade-offs in dollars.",
        },
        {
          title: "Plan and follow-through",
          body: "You receive a written vesting plan with a default action for each date and a diversification target. We check in at each vest and hand your CPA a clean summary with the correct cost basis at year-end.",
        },
      ],
      whyIndependent:
        "We do not earn anything when you sell, hold, trade or move your shares to a particular platform. That matters most with RSUs, where the question is often whether to sell today, and a brokerage or advisor paid on assets has an incentive to keep you invested. Our recommendation is shaped only by your tax picture, your concentration and your goals, and we coordinate with your CPA rather than replacing them.",
      faqs: [
        {
          q: "How are RSUs taxed?",
          a: "RSUs are taxed as ordinary income when they vest, based on the fair market value of the shares that day. The amount is added to your W-2 wages and subject to federal, state, Social Security and Medicare taxes. When you later sell, any change in price since the vesting date is a capital gain or loss, with the vesting-date value as your cost basis. Nothing is owed at grant, and there is no way to defer the vest-date income.",
        },
        {
          q: "Why is there still a tax bill in April if my company already withheld shares?",
          a: "Employers typically withhold federal tax on RSU income at a flat 22% supplemental rate (37% on amounts above $1 million), plus a flat state rate. If your marginal bracket is higher, and for many tech employees receiving meaningful RSUs it is, each vest leaves a gap. We calculate the gap ahead of time and set up estimated payments or extra withholding so the balance due does not surprise you.",
        },
        {
          q: "Should I sell my RSUs as soon as they vest?",
          a: "For many people, selling at vest is a reasonable default. Because the shares are already taxed as income, selling immediately creates little or no additional gain, and it converts a concentrated position into cash you can redirect. Holding is a decision to buy your employer's stock at today's price with after-tax money. That can be a fine choice, but it should be made on purpose, with your total exposure to the company in view.",
        },
        {
          q: "What is the cost basis error on RSUs, and how do I avoid it?",
          a: "Brokers often report RSU sales on Form 1099-B with a cost basis of zero, or of the amount you paid, which is nothing. If the return uses that figure, the full sale price is reported as a capital gain even though the vest-date value was already taxed on your W-2. The result is paying tax twice on the same shares. We track the correct basis for every lot and provide it to your CPA so the adjustment is made properly.",
        },
        {
          q: "What is an 83(b) election, and should I file one for my RSAs?",
          a: "An 83(b) election tells the IRS you want to be taxed on restricted stock at grant rather than as it vests. At an early-stage company where the shares are worth very little today, this can mean paying a small amount of tax now and starting the capital gains holding period immediately. The trade-offs are that the deadline is thirty days from grant, the tax paid is not refundable if you leave before vesting, and it does not apply to standard RSUs. We walk through the numbers with you before the deadline.",
        },
        {
          q: "My company is private and my RSUs are double-trigger. What should I plan for?",
          a: "Double-trigger RSUs typically vest for tax purposes only when both a time condition and a liquidity event such as an IPO are met. That means grants from several years can become taxable at once, often while a lockup prevents you from selling to pay the tax. We model the expected income, estimate the withholding shortfall, and build a plan for the lockup period and the sales that follow it. See our [equity compensation hub](/services/equity-compensation) for how this fits with your options and other holdings.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "科技業員工 RSU 與 RSA 稅務規劃",
      metaDescription:
        "為科技業員工提供 RSU 與 RSA 稅務規劃：歸屬時程、預扣缺口、賣股抵稅決策、成本基礎、83(b) 選擇與 IPO 時的雙重觸發 RSU。雙語顧問。",
      h1: "RSU 與 RSA 稅務規劃",
      heroSub:
        "RSU 是最容易拿到、也最容易在報稅時出錯的股權形式。我們讓歸屬時程為您所用。",
      intro: [
        "限制型股票單位（RSU）是上市科技公司最常見的股權形式，限制型股票獎勵（RSA）則常見於早期新創。兩者都是直接給您股票，而不是購買股票的權利，因此感覺上相當單純。複雜之處藏在稅務處理裡。RSU 在歸屬當天以當日股價計算，全額視為一般所得課稅，不論您是否出售。雇主以固定的補充性薪資稅率預扣，往往遠低於您實際的邊際稅率，所以每一次歸屬都可能悄悄累積四月的補稅金額。而您留下來的股票，則開始了第二段人生：成為一項投資，有自己的成本基礎、持有期間與集中風險。",
        "RSA 則多了一個必須提早做的決定。由於股票在授予時就已發行，83(b) 選擇讓您可以在現在、價值可能還很低的時候就先繳稅，而不是等到每個歸屬日、公司可能已值錢許多時才課稅。這項選擇必須在授予後三十天內提交，而且無法撤銷。我們協助您理解這兩種工具，依您的歸屬時程規劃，並在每個歸屬日決定該賣、該留或該分散，而且在股票入帳之前就先把稅算清楚。",
      ],
      coversTitle: "我們處理的事項",
      covers: [
        "歸屬時程與 cliff 日期，對照您全年的預期收入",
        "補充性薪資的預扣缺口，以及用預繳稅款或調整預扣來補足",
        "每次歸屬時賣股抵稅或持有的決策，包括第一天就全部出售的考量",
        "成本基礎追蹤，以及因券商 1099-B 顯示成本為零而把 RSU 所得重複申報的常見錯誤",
        "早期新創的 RSA 83(b) 選擇：是否提交、三十天期限，以及日後股票作廢的風險",
        "私人公司的雙重觸發 RSU 與 IPO 閉鎖期的規劃",
        "公司股票的持股集中問題，以及配合交易窗口與稅率級距的分散節奏",
        "帶著未歸屬股票換工作的規劃，包括談判新的授予以彌補放棄的部分",
      ],
      process: [
        {
          title: "盤點",
          body: "我們會收集您的授予協議、歸屬時程、近期薪資單與券商對帳單，建立單一行事曆，清楚呈現何時歸屬、預估價值多少。",
        },
        {
          title: "試算",
          body: "預測每次歸屬的聯邦與州稅，量化預扣缺口，並比較賣股抵稅、全部出售與持有三種情境，讓您用實際金額看清取捨。",
        },
        {
          title: "計畫與執行",
          body: "您會收到一份書面歸屬計畫，為每個日期設定預設行動與分散目標。我們會在每次歸屬時追蹤，並在年底把含正確成本基礎的摘要交給您的會計師。",
        },
      ],
      whyIndependent:
        "無論您出售、持有、交易，或把股票轉到特定平台，我們都不會因此獲利。這在 RSU 上尤其重要，因為問題常常是「今天該不該賣」，而以資產規模收費的券商或顧問，有動機讓您繼續持有。我們的建議只取決於您的稅務狀況、持股集中度與目標，而且我們與您的會計師合作，而不是取代他們。",
      faqs: [
        {
          q: "RSU 如何課稅？",
          a: "RSU 在歸屬時依當日股票的公平市價，視為一般所得課稅。這筆金額會加進您 W-2 的薪資，需繳納聯邦稅、州稅、社會安全稅與 Medicare 稅。日後出售時，自歸屬日以來的價格變動屬於資本利得或損失，成本基礎即為歸屬日的價值。授予時不需繳稅，歸屬日的所得也無法遞延。",
        },
        {
          q: "公司已經扣掉部分股票繳稅了，為什麼四月還是要補稅？",
          a: "雇主通常以聯邦 22% 的固定補充性薪資稅率預扣 RSU 所得的稅款（超過一百萬美元的部分為 37%），再加上州的固定稅率。如果您的邊際稅率更高（對許多領取可觀 RSU 的科技業員工而言確實如此），每次歸屬都會留下缺口。我們會事先計算缺口，安排預繳稅款或額外預扣，讓補稅金額不再是意外。",
        },
        {
          q: "RSU 一歸屬就該馬上賣掉嗎？",
          a: "對許多人來說，歸屬時出售是合理的預設做法。因為股票已經被當作所得課稅，立即出售幾乎不會產生額外利得，還能把集中的部位變成可以重新配置的現金。選擇持有，其實等於用稅後的錢以今天的價格買進公司股票。這可以是很好的選擇，但應該是有意識的決定，並把您對這家公司的整體曝險一併納入考量。",
        },
        {
          q: "RSU 的成本基礎錯誤是什麼？該如何避免？",
          a: "券商在 1099-B 表格上申報 RSU 出售時，成本基礎常顯示為零，或是您實際支付的金額（也就是零）。如果報稅時直接採用這個數字，整筆出售價款都會被申報為資本利得，即使歸屬日的價值早已在 W-2 上課過稅。結果就是同一批股票被課了兩次稅。我們會追蹤每一批股票的正確成本基礎，並提供給您的會計師，確保調整正確。",
        },
        {
          q: "什麼是 83(b) 選擇？我的 RSA 應該提交嗎？",
          a: "83(b) 選擇是告知 IRS 您希望限制型股票在授予時課稅，而不是在歸屬時課稅。在股票目前價值很低的早期公司，這可能表示現在只需繳少量的稅，而且資本利得的持有期間立即起算。代價是：期限為授予後三十天；如果您在歸屬前離職，已繳的稅不會退還；而且這項選擇不適用於一般的 RSU。我們會在期限之前陪您把數字算清楚。",
        },
        {
          q: "我的公司是私人公司，RSU 是雙重觸發，我該規劃什麼？",
          a: "雙重觸發 RSU 通常要同時滿足時間條件與變現事件（例如 IPO）才會在稅務上歸屬。這表示好幾年的授予可能同時變成應稅所得，而且閉鎖期往往讓您無法出售股票來繳稅。我們會試算預期所得、估算預扣不足的金額，並為閉鎖期以及之後的出售建立計畫。這與您的選擇權和其他持股如何整合，請參考[股權獎酬總覽](/services/equity-compensation)。",
        },
      ],
    },
  },
};
