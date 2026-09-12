import type { Service } from "../types";

/**
 * ISO & NSO stock option sub-page under the Equity Compensation hub.
 * EN copy is final-draft quality. ZH copy is a working draft for a
 * professional translator to review (mark nothing as final).
 */
export const stockOptionsIsoNso: Service = {
  slug: "stock-options-iso-nso",
  path: "/services/equity-compensation/stock-options-iso-nso",
  parent: "/services/equity-compensation",
  icon: "options",
  name: {
    en: "Stock Options (ISO & NSO)",
    "zh-hant": "股票選擇權（ISO 與 NSO）",
  },
  cardBlurb: {
    en: "AMT modeling, holding periods, early exercise, funding and post-termination windows, so every exercise is timed on purpose.",
    "zh-hant": "AMT 試算、持有期間、提早行權、資金安排與離職後行權期限，讓每一次行權都選在對的時間。",
  },
  related: [
    "/services/equity-compensation",
    "/services/equity-compensation/rsu-rsa-planning",
    "/services/tax-strategy-planning",
  ],
  content: {
    en: {
      metaTitle: "ISO & NSO Stock Option Tax Planning",
      metaDescription:
        "ISO and NSO stock option planning: AMT modeling, holding periods, early exercise and 83(b), exercise funding and post-termination windows. Bilingual advisor.",
      h1: "ISO & NSO Stock Option Planning",
      heroSub:
        "Options give you a choice about when to create taxable income. That choice is where most of the value, and most of the mistakes, live.",
      intro: [
        "Stock options give you the right to buy shares at a fixed strike price, and the tax outcome depends almost entirely on when and how you exercise. Incentive stock options (ISOs) are the more favorable form on paper: no regular income tax at exercise, and long-term capital gains treatment on the full gain if you hold the shares at least two years from grant and one year from exercise. The catch is that the spread at exercise, the difference between the share price and your strike, counts as income for the Alternative Minimum Tax, which can produce a large bill on shares you have not sold. Non-qualified stock options (NSOs) are simpler. The spread at exercise is taxed as ordinary wages, withheld like a bonus, and future growth is a capital gain.",
        "The decisions stack up quickly. Exercise early or wait. Exercise and hold, exercise and sell, or use a cashless exercise. File an 83(b) election on early-exercised shares. Fund the exercise with savings, a loan or a tender offer. Manage a post-termination window when you change jobs. We model each path against your tax picture and your cash, at private and public companies alike, so the option to choose actually works in your favor.",
      ],
      coversTitle: "What we handle",
      covers: [
        "ISO versus NSO tax treatment, and what each means for your regular tax, AMT and payroll withholding",
        "AMT modeling before each ISO exercise, including how many shares you can exercise before crossing into AMT and how to recover the AMT credit in later years",
        "Qualifying versus disqualifying dispositions, and the two-years-from-grant and one-year-from-exercise holding periods that separate them",
        "Early exercise and 83(b) elections at early-stage companies, when the spread is small or zero",
        "Exercise-and-hold versus exercise-and-sell versus cashless exercise, compared in after-tax dollars",
        "The $100,000 ISO limit: how much can first become exercisable as ISO in a calendar year, and the NSO treatment of the excess",
        "Post-termination exercise windows, including the three-month rule that governs ISO status after you leave",
        "Exercise financing and liquidity risk at private companies, plus tender offers and secondary sales as ways to realize value",
      ],
      process: [
        {
          title: "Inventory",
          body: "We gather your option grants, strike prices, vesting schedules, exercise history and any 409A valuations, then lay out what is vested, what it would cost to exercise and what the spread is today.",
        },
        {
          title: "Modeling",
          body: "We project regular tax and AMT under several exercise scenarios across this year and next, including the effect on your cash, your holding periods and your exposure to a single company.",
        },
        {
          title: "Plan and follow-through",
          body: "You receive a written exercise plan with amounts, timing and a funding approach. We revisit it before each exercise, at year-end and ahead of any tender offer, job change or IPO, and hand your CPA the details needed for AMT and basis reporting.",
        },
      ],
      whyIndependent:
        "Option decisions attract advice from people who benefit when you act: lenders that finance exercises, brokers that execute cashless sales and platforms that hold your shares. We do not earn commissions, referral fees or financing spreads on any of it. Our only stake is whether the exercise is right for your taxes, your cash and your goals, and we are free to say that waiting is the best move. We also coordinate directly with your CPA on AMT and basis reporting rather than leaving you to translate.",
      faqs: [
        {
          q: "What is the difference between ISOs and NSOs for tax purposes?",
          a: "With NSOs, the spread at exercise is ordinary income reported on your W-2, with tax withheld, and later growth is a capital gain. With ISOs, there is no regular income tax at exercise, but the spread is included in income for the Alternative Minimum Tax. If you hold ISO shares at least two years from grant and one year from exercise, the entire gain from strike to sale price is a long-term capital gain. Sell earlier and the spread becomes ordinary income instead, in what is called a disqualifying disposition.",
        },
        {
          q: "How does the AMT work when I exercise ISOs?",
          a: "The AMT is a parallel tax calculation. Exercising ISOs adds the spread to your AMT income even though you have not sold anything. If the AMT calculation produces a higher tax than the regular calculation, you pay the difference, in a year when you may have received no cash from the shares. Part of that extra tax becomes a credit you can recover in future years when your regular tax exceeds AMT. We model how many shares you can exercise before the AMT kicks in and track the credit so it is not lost.",
        },
        {
          q: "Should I exercise early, before my options vest?",
          a: "Some companies allow early exercise of unvested options. Combined with an 83(b) election filed within thirty days, this can mean paying little or no tax at exercise when the spread is small and starting the capital gains holding period right away. The risks are real: you pay the strike price in cash for shares you may forfeit if you leave, and the company may never become liquid. Early exercise tends to make the most sense when the strike is low and your conviction is high.",
        },
        {
          q: "What is the best way to exercise: hold, sell immediately or cashless?",
          a: "It depends on your tax bracket, your cash and how much of your net worth is already tied to the company. Exercise-and-hold preserves the chance of long-term capital gains but requires cash and carries AMT and price risk. Exercise-and-sell locks in the value and pays tax as ordinary income. A cashless exercise sells just enough shares to cover the strike and tax. We compare these in after-tax dollars for your situation rather than following a rule of thumb.",
        },
        {
          q: "I am leaving my company. How long do I have to exercise?",
          a: "Check your plan document. Many plans give you ninety days after departure, though some offer far longer. For ISOs, the tax code is stricter: options exercised more than three months after leaving lose ISO treatment and become NSOs even if the plan allows it. Exercising at departure often requires cash for both the strike price and the tax, so we plan the funding and timing before you give notice whenever possible.",
        },
        {
          q: "My company is private. How can I turn options into money?",
          a: "At a private company, the typical routes are a company-sponsored tender offer, a secondary sale to an approved buyer, or waiting for an IPO or acquisition. Each has tax consequences. A tender offer priced above the current 409A valuation, for example, may cause part of the proceeds to be treated as compensation rather than capital gain. Exercising with borrowed money adds risk if the liquidity event never comes. We help you weigh these paths alongside your [RSU and RSA planning](/services/equity-compensation/rsu-rsa-planning) and your overall [equity compensation](/services/equity-compensation) plan.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "科技業員工 ISO 與 NSO 股票選擇權稅務規劃",
      metaDescription:
        "ISO 與 NSO 股票選擇權規劃：AMT 試算、合格處分、提早行權與 83(b) 選擇、行權資金、離職後行權期限與要約收購。雙語顧問，服務灣區與洛杉磯。",
      h1: "ISO 與 NSO 股票選擇權規劃",
      heroSub:
        "選擇權讓您可以決定何時產生應稅所得。這個選擇，正是大部分價值與大部分錯誤所在。",
      intro: [
        "股票選擇權賦予您以固定行權價買進股票的權利，而稅務結果幾乎完全取決於您何時、如何行權。激勵型股票選擇權（ISO）表面上較為優惠：行權時不課一般所得稅，若自授予日起持有至少兩年、自行權日起持有至少一年，全部利得可適用長期資本利得稅率。但陷阱在於，行權時的價差（股價與行權價的差額）會計入替代性最低稅（AMT）的所得，可能在您尚未出售股票時就產生一筆可觀的稅款。非法定股票選擇權（NSO）則較單純：行權時的價差視為一般薪資課稅，像獎金一樣預扣，之後的增值才是資本利得。",
        "要做的決定很快就會堆積起來：提早行權還是等待；行權後持有、行權後出售，還是無現金行權；提早行權的股票是否提交 83(b) 選擇；用存款、貸款還是要約收購來籌措行權資金；換工作時如何處理離職後的行權期限。無論是私人公司或上市公司，我們都會依您的稅務狀況與現金流，逐一模擬每條路徑，讓「選擇」的權利真正為您所用。",
      ],
      coversTitle: "我們處理的事項",
      covers: [
        "ISO 與 NSO 的稅務處理差異，以及各自對一般所得稅、AMT 與薪資預扣的影響",
        "每次 ISO 行權前的 AMT 試算，包括在觸發 AMT 之前可以行權多少股，以及日後如何回收 AMT 抵減額",
        "合格處分與不合格處分，以及區分兩者的持有期間：自授予日起兩年、自行權日起一年",
        "早期新創的提早行權與 83(b) 選擇，在價差很小或為零的時候",
        "行權後持有、行權後出售與無現金行權的比較，以稅後金額呈現",
        "ISO 的 $100,000 上限：每個曆年首次可行權的 ISO 額度，以及超出部分視為 NSO 的處理",
        "離職後行權期限，包括決定 ISO 資格的離職後三個月規則",
        "私人公司的行權資金與流動性風險，以及透過要約收購與次級市場出售實現價值",
      ],
      process: [
        {
          title: "盤點",
          body: "我們會收集您的選擇權授予、行權價、歸屬時程、行權紀錄與 409A 估值，整理出已歸屬的部分、行權所需成本，以及目前的價差。",
        },
        {
          title: "試算",
          body: "針對今年與明年的多種行權情境，預測一般所得稅與 AMT，包括對現金流、持有期間，以及單一公司曝險的影響。",
        },
        {
          title: "計畫與執行",
          body: "您會收到一份書面行權計畫，載明數量、時點與資金安排。我們會在每次行權前、年底前，以及任何要約收購、換工作或 IPO 之前重新檢視，並把 AMT 與成本基礎申報所需的細節交給您的會計師。",
        },
      ],
      whyIndependent:
        "選擇權的決策總會引來從中獲利者的建議：提供行權融資的貸款機構、執行無現金出售的券商、保管您股票的平台。我們不從中賺取任何佣金、轉介費或融資利差。我們唯一在乎的，是這次行權對您的稅務、現金與目標是否正確，而且我們可以坦白告訴您「先等等」才是最好的選擇。我們也會就 AMT 與成本基礎申報直接與您的會計師協調，而不是讓您自己在中間傳話。",
      faqs: [
        {
          q: "ISO 與 NSO 在稅務上有什麼不同？",
          a: "NSO 行權時的價差屬於一般所得，列在 W-2 上並預扣稅款，之後的增值為資本利得。ISO 行權時不課一般所得稅，但價差會計入替代性最低稅（AMT）的所得。若 ISO 股票自授予日起持有至少兩年、自行權日起至少一年，從行權價到出售價的全部利得都屬於長期資本利得。若提早出售，價差就會改以一般所得課稅，這稱為不合格處分。",
        },
        {
          q: "行權 ISO 時，AMT 是怎麼運作的？",
          a: "AMT 是一套平行的稅額計算。行權 ISO 會把價差加進您的 AMT 所得，即使您什麼都還沒賣。如果 AMT 算出來的稅額高於一般計算，您就要補繳差額，而那一年您可能根本沒從股票拿到任何現金。這筆額外的稅有一部分會成為抵減額，可在往後一般稅額高於 AMT 的年度回收。我們會試算在觸發 AMT 之前可以行權多少股，並追蹤抵減額，確保不會遺失。",
        },
        {
          q: "我應該在選擇權歸屬之前就提早行權嗎？",
          a: "有些公司允許提早行權尚未歸屬的選擇權。若搭配在三十天內提交的 83(b) 選擇，在價差很小的時候行權可能只需繳極少或零稅款，而且資本利得的持有期間立即起算。風險是真實的：您要用現金支付行權價，而這些股票在您離職時可能作廢，公司也可能永遠沒有變現的一天。提早行權通常在行權價很低、而您對公司信心很高時最合理。",
        },
        {
          q: "行權後持有、立即出售，還是無現金行權，哪種最好？",
          a: "這取決於您的稅率級距、現金狀況，以及淨資產中已有多少與這家公司綁在一起。行權後持有保留了長期資本利得的機會，但需要現金，並承擔 AMT 與股價風險。行權後出售可鎖定價值，但以一般所得課稅。無現金行權則只賣出足以支付行權價與稅款的股數。我們會依您的情況以稅後金額比較這些做法，而不是套用經驗法則。",
        },
        {
          q: "我準備離職，還有多久可以行權？",
          a: "請先查閱您的計畫文件。許多計畫給您離職後九十天，有些則提供長得多的期限。ISO 在稅法上更嚴格：離職超過三個月後才行權的選擇權會失去 ISO 資格、變成 NSO，即使計畫允許也一樣。離職時行權往往需要同時準備行權價與稅款的現金，所以只要可能，我們會在您提出辭呈之前就先規劃資金與時點。",
        },
        {
          q: "我的公司還沒上市，選擇權要怎麼變現？",
          a: "在私人公司，常見的途徑是公司主辦的要約收購、賣給經核准買方的次級市場交易，或等待 IPO 或被併購。每一種都有稅務後果。舉例來說，要約收購的價格若高於當時的 409A 估值，部分價款可能被視為薪酬而非資本利得。借錢行權則會在變現事件遲遲不來時增加風險。我們協助您評估這些路徑，並與您的 [RSU 與 RSA 規劃](/services/equity-compensation/rsu-rsa-planning) 以及整體的[股權獎酬](/services/equity-compensation)計畫一併考量。",
        },
      ],
    },
  },
};
