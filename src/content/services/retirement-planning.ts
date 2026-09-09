import type { Service } from "../types";

/**
 * Retirement Planning.
 * EN copy is final-draft quality. ZH copy is a working draft for a
 * professional translator to review (mark nothing as final).
 */
export const retirementPlanning: Service = {
  slug: "retirement-planning",
  path: "/services/retirement-planning",
  icon: "sunrise",
  name: {
    en: "Retirement Planning",
    "zh-hant": "退休規劃",
  },
  cardBlurb: {
    en: "From 401(k) and Roth decisions to early-retirement math and cross-border questions, a plan for the life after the vesting schedule ends.",
    "zh-hant": "從 401(k) 與 Roth 的選擇，到提早退休的試算與跨境考量，為歸屬時程結束後的人生做好準備。",
  },
  related: [
    "/services/financial-planning",
    "/services/asset-allocation",
    "/services/tax-strategy-planning",
  ],
  content: {
    en: {
      metaTitle: "Retirement Planning for Tech Professionals",
      metaDescription:
        "Retirement planning for tech employees: 401(k), backdoor and mega-backdoor Roth, employer stock, early retirement and cross-border questions. Bilingual advisor.",
      h1: "Retirement Planning",
      heroSub:
        "Tech careers are front-loaded. The income arrives early and unevenly, and retirement may come sooner than you expect, or in a different country. Plan for that version of the future.",
      intro: [
        "Retirement planning in tech looks different from the textbook version. Your income is high but concentrated in a few years, a large share of your net worth may sit in one employer's stock, and the question is often not whether you can retire at 65 but whether you could step back at 45, take a sabbatical, or move home to Taiwan for a season. The accounts are familiar: 401(k), Roth IRA, HSA, brokerage. The strategy for filling and later draining them is not.",
        "We help you decide, in order, what to fund each year, how backdoor and mega-backdoor Roth contributions fit alongside your vesting income, and when it makes sense to diversify away from employer stock inside your retirement goals. Then we model the other side: how much your plan needs, how withdrawals would be sequenced across taxable, pre-tax and Roth accounts, what Social Security and Medicare are likely to provide, and what changes if your future includes years outside the US. The output is a plan you can actually run, not a single number.",
      ],
      coversTitle: "What this covers",
      covers: [
        "401(k) contribution strategy: traditional versus Roth, employer match and true-up provisions",
        "Backdoor Roth and mega-backdoor Roth mechanics, including the pro-rata rule and after-tax 401(k) conversions",
        "HSA as a long-term investment account, not just a spending account",
        "Employer stock inside retirement goals: concentration, net unrealized appreciation and diversification timing",
        "Early retirement and financial independence modeling, including the gap years before penalty-free access",
        "Social Security and Medicare basics, timing of benefits and how they interact with other income",
        "Tax-aware withdrawal sequencing and Roth conversion windows in low-income years",
        "Cross-border scenarios: what changes if you may return to Taiwan or spend years abroad",
      ],
      process: [
        {
          title: "Discovery",
          body: "We inventory your retirement accounts, employer plan documents, grant schedules and current savings rate, and talk honestly about what retirement means to you: an age, a lifestyle, a place, or the freedom to choose.",
        },
        {
          title: "Modeling",
          body: "We project your accounts forward under realistic assumptions, test early-retirement and cross-border scenarios, and show where the plan is robust and where it depends on things you cannot control.",
        },
        {
          title: "Contribution and diversification plan",
          body: "You receive a written order of operations for each year: which accounts to fund, how much, how to handle after-tax and Roth conversions, and a schedule for reducing employer stock concentration.",
        },
        {
          title: "Annual review",
          body: "Each year we revisit the plan against new grants, promotions, family changes and tax law, and update the withdrawal strategy as retirement gets closer.",
        },
      ],
      whyIndependent:
        "Retirement planning is where product sales pressure is strongest, from annuities to proprietary funds to rollovers that benefit the firm more than the client. We are paid only by you, we earn no commissions, and we have no incentive to move your 401(k) anywhere. That lets us recommend low-cost building blocks, keep a good employer plan where it is, and focus on the decisions that actually move your outcome.",
      faqs: [
        {
          q: "Should I contribute to a traditional or Roth 401(k)?",
          a: "It depends on your current bracket, where you expect to be later, and whether you might retire early or outside the US. High earners in California often lean traditional during peak years and use Roth conversions in lower-income years later. But a long career ahead, or a plan to leave a high-tax state, can shift the answer. We model both paths with your actual numbers rather than relying on a rule of thumb.",
        },
        {
          q: "What is a mega-backdoor Roth, and does my company offer it?",
          a: "Some 401(k) plans allow after-tax contributions beyond the regular employee limit, which can then be converted to Roth inside the plan or rolled to a Roth IRA. Many large tech employers offer this. We read your plan document to confirm the feature, check how the pro-rata rule applies to your IRAs, and set up the contribution and conversion cadence so it runs smoothly.",
        },
        {
          q: "Most of my net worth is in my employer's stock. How does that affect retirement?",
          a: "It makes your retirement date depend heavily on one company's share price. That can work out well, but it also means one bad year could push retirement back by several. We help you decide how much concentration you can carry, build a tax-aware schedule for diversifying, and coordinate with your equity compensation and asset allocation plans so the pieces move together.",
        },
        {
          q: "I want to retire, or at least step back, well before 60. Is that realistic?",
          a: "For many tech professionals, some version of it is. The math involves your spending, your savings rate, how you bridge the years before penalty-free access to retirement accounts, health insurance before Medicare, and how flexible you are willing to be. We model several scenarios so you can see what a target date actually requires and adjust with eyes open.",
        },
        {
          q: "What if I might move back to Taiwan or leave the US permanently?",
          a: "Retirement accounts do not disappear when you leave, but the tax treatment of withdrawals, the reporting obligations and the usefulness of Roth accounts can change. We plan for the path you consider most likely while keeping the accounts flexible, and we coordinate with your CPA on cross-border tax questions. This is general planning, not tax or legal advice on either country's rules.",
        },
        {
          q: "How do Social Security and Medicare fit in for someone who came to the US mid-career?",
          a: "Both depend on your work history in the US. Social Security benefits require enough years of covered earnings, and the timing of when you claim affects the monthly amount. Medicare eligibility also depends on work history and age. We estimate what you are likely to qualify for, explain the trade-offs of claiming earlier or later, and show how these benefits fit alongside your own savings.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "科技業專業人士退休規劃",
      metaDescription:
        "為科技業員工提供退休規劃：401(k)、backdoor 與 mega backdoor Roth、雇主股票、提早退休與跨境考量。雙語顧問，服務全美。",
      h1: "退休規劃",
      heroSub:
        "科技業的職涯是前重後輕的：收入來得早、來得不均勻，退休也可能比您預期的更早到來，甚至在另一個國家。為那個版本的未來做規劃。",
      intro: [
        "科技業的退休規劃，與教科書上的版本並不相同。您的收入很高，卻集中在少數幾年；淨資產有很大一部分可能放在同一家雇主的股票上；而問題往往不是 65 歲能不能退休，而是 45 歲能不能退居二線、休息一年，或回台灣住上一段時間。帳戶都很熟悉：401(k)、Roth IRA、HSA、券商帳戶。但該如何依序填滿、又如何在日後有序提領，卻沒那麼直觀。",
        "我們會協助您決定每年該依序投入哪些帳戶、backdoor 與 mega backdoor Roth 如何搭配您的歸屬收入，以及在退休目標之下，何時該逐步分散雇主股票。接著我們模擬另一端：您的計畫需要多少資產、提領如何在應稅、稅前與 Roth 帳戶之間排序、Social Security 與 Medicare 大致能提供什麼，以及若未來有幾年在美國之外生活，會有哪些改變。最終成果是一份真正能執行的計畫，而不只是一個數字。",
      ],
      coversTitle: "服務內容",
      covers: [
        "401(k) 提撥策略：傳統型與 Roth 型的取捨、雇主相對提撥與補足（true-up）條款",
        "Backdoor Roth 與 mega backdoor Roth 的運作機制，包括按比例規則（pro-rata rule）與稅後 401(k) 轉換",
        "把 HSA 當作長期投資帳戶，而不只是醫療支出帳戶",
        "退休目標中的雇主股票：集中度、未實現淨增值（NUA）與分散時機",
        "提早退休與財務自主的模擬，包括可免罰金提領前的過渡年份",
        "Social Security 與 Medicare 基礎知識、請領時點，以及與其他收入的互動",
        "具稅務意識的提領順序，以及低收入年份的 Roth 轉換窗口",
        "跨境情境：如果您可能回台灣或在海外生活多年，會有哪些改變",
      ],
      process: [
        {
          title: "了解現況",
          body: "我們會盤點您的退休帳戶、雇主計畫文件、授予時程與目前的儲蓄率，並誠實地聊聊退休對您的意義：一個年齡、一種生活方式、一個地方，或是選擇的自由。",
        },
        {
          title: "情境模擬",
          body: "在合理的假設下推估您的帳戶未來走勢，測試提早退休與跨境情境，並指出計畫在哪些地方穩健、在哪些地方仰賴您無法控制的因素。",
        },
        {
          title: "提撥與分散計畫",
          body: "您會收到每年的書面執行順序：該投入哪些帳戶、金額多少、稅後提撥與 Roth 轉換怎麼處理，以及降低雇主股票集中度的時間表。",
        },
        {
          title: "年度檢視",
          body: "每年依據新的授予、升遷、家庭變化與稅法調整重新檢視計畫，並隨著退休日期接近更新提領策略。",
        },
      ],
      whyIndependent:
        "退休規劃是產品銷售壓力最大的領域，從年金、自家基金到對公司比對客戶更有利的帳戶轉移都是。我們只向您收費、不賺取佣金，也沒有任何誘因要把您的 401(k) 轉到別處。這讓我們能推薦低成本的投資工具、把好的雇主計畫留在原地，並專注在真正影響結果的決定上。",
      faqs: [
        {
          q: "我該選傳統型還是 Roth 型 401(k)？",
          a: "這取決於您目前的稅率級距、未來預期的級距，以及是否可能提早退休或在美國以外退休。加州的高收入者在收入高峰期往往偏向傳統型，日後在低收入年份再做 Roth 轉換。但若您職涯還很長，或計畫搬離高稅州，答案可能改變。我們會用您實際的數字模擬兩條路徑，而不是套用經驗法則。",
        },
        {
          q: "什麼是 mega backdoor Roth？我的公司有提供嗎？",
          a: "部分 401(k) 計畫允許在一般員工提撥上限之外再進行稅後提撥，之後可在計畫內轉為 Roth，或轉入 Roth IRA。許多大型科技公司都提供這項功能。我們會查閱您的計畫文件確認、檢查按比例規則對您的 IRA 有何影響，並安排提撥與轉換的節奏，讓流程順暢執行。",
        },
        {
          q: "我的淨資產大多是雇主的股票，這對退休有什麼影響？",
          a: "這表示您的退休日期高度取決於一家公司的股價。結果可能很好，但也意味著一個不好的年份就可能讓退休往後推遲數年。我們會協助您決定可以承受多少集中度、建立具稅務意識的分散時程，並與您的股權獎酬與資產配置計畫協調，讓各個環節同步推進。",
        },
        {
          q: "我想在 60 歲之前退休，或至少退居二線，這實際嗎？",
          a: "對許多科技業專業人士來說，某種形式的提早退休是可行的。關鍵在於您的支出、儲蓄率、如何銜接退休帳戶可免罰金提領前的年份、Medicare 之前的醫療保險，以及您願意保有多少彈性。我們會模擬多種情境，讓您清楚看見目標日期實際需要什麼，並在充分了解的情況下調整。",
        },
        {
          q: "如果我可能回台灣或永久離開美國呢？",
          a: "離開美國後退休帳戶不會消失，但提領的課稅方式、申報義務以及 Roth 帳戶的實用性可能改變。我們會依您認為最可能的路徑規劃，同時保持帳戶的彈性，並就跨境稅務問題與您的會計師協調。這屬於一般性規劃，並非針對任一國家法規的稅務或法律建議。",
        },
        {
          q: "對於職涯中段才來美國的人，Social Security 與 Medicare 該怎麼納入計畫？",
          a: "兩者都取決於您在美國的工作紀錄。Social Security 需要累積足夠年數的納保收入，而請領時點會影響每月金額；Medicare 的資格同樣與工作紀錄及年齡有關。我們會估算您可能符合的資格、說明提早或延後請領的取捨，並呈現這些福利如何與您自己的儲蓄搭配。",
        },
      ],
    },
  },
};
