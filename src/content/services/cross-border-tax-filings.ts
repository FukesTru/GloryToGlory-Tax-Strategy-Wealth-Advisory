import type { Service } from "../types";

/**
 * Cross-Border Tax & Filings — FBAR, FATCA and foreign asset reporting.
 * EN copy is final-draft quality. ZH copy is a working draft for a
 * professional translator to review (mark nothing as final).
 *
 * Compliance note: no dollar thresholds, no penalty amounts and no dated
 * deadlines appear on this page. Thresholds and due dates change, and this
 * firm does not prepare or file returns.
 */
export const crossBorderTaxFilings: Service = {
  slug: "cross-border-tax-filings",
  path: "/services/cross-border-tax-filings",
  icon: "globe",
  name: {
    en: "Cross-Border Tax & Filings",
    "zh-hant": "跨境稅務與海外資產申報",
  },
  cardBlurb: {
    en: "FBAR, FATCA and foreign asset reporting for families who still hold an account, a policy or a property back in Taiwan.",
    "zh-hant": "FBAR、FATCA 與海外資產申報：為在台灣仍留有帳戶、保單或房產的家庭而設。",
  },
  related: [
    "/services/tax-strategy-planning",
    "/services/financial-planning",
    "/services/estate-trust-planning",
  ],
  content: {
    en: {
      metaTitle: "Cross-Border Tax & Filings: FBAR and FATCA",
      metaDescription:
        "Bilingual guidance on FBAR, FATCA and foreign asset reporting for families with accounts in Taiwan and abroad. We plan the strategy and your CPA files it.",
      h1: "Cross-Border Tax & Filings",
      heroSub:
        "If you hold accounts or property in Taiwan or anywhere else abroad, US reporting rules may apply to you even in years when no extra tax is due.",
      intro: [
        "Many families we work with keep one foot in two financial systems. A savings account left open in Taipei. A policy with cash value a parent bought decades ago. A brokerage account from before the move. An apartment inherited from grandparents. None of it feels like a US tax matter, and much produces little or no US tax. Reporting is a separate question. US persons, including citizens, green card holders and many visa holders who meet the substantial presence test, may have to report foreign financial accounts and certain foreign assets each year, even when the accounts earn nothing.",
        "This service is the planning and coordination layer around those filings. We inventory what you hold on both sides of the Pacific, explain which reporting duties may apply, flag the accounts and products that tend to create complications, and work alongside a cross-border CPA who prepares and files. We do not prepare or file returns ourselves. Our job is to make sure nothing is missed, that the strategy behind the filings fits the rest of your [financial plan](/services/financial-planning), and that you can explain your situation clearly. This page is general education, not advice about your particular situation.",
      ],
      coversTitle: "What this covers",
      covers: [
        "An inventory of foreign accounts and assets: bank and brokerage accounts, cash value policies, pensions, inherited property",
        "How FBAR and FATCA reporting differ, and why both can apply to the same account in the same year",
        "Signature authority over a parent's or an employer's account, which can create a duty without ownership",
        "Gifts and inheritances from family abroad, often reportable even when they are not taxable to you",
        "PFIC exposure from foreign mutual funds and some insurance products, explained before you decide what to keep",
        "Foreign tax credits and treaty questions when the same income is taxed in two countries",
        "Catching up on unfiled years through the established IRS compliance procedures, with realistic expectations",
        "Coordination with a cross-border CPA who files, and with an attorney when the history calls for one",
      ],
      process: [
        {
          title: "Inventory",
          body: "We list every account, policy and property you hold outside the US, who owns it, who can direct it, and when it was opened or inherited. Much of this stage is simply establishing what exists, including the accounts nobody has thought about in years.",
        },
        {
          title: "Reporting review",
          body: "We map each item to the reporting duties that may apply and note where rules and thresholds shift year to year. Anything needing specialist attention, such as a foreign fund or a family trust, is flagged early.",
        },
        {
          title: "Plan and coordinate",
          body: "You receive a written summary of your cross-border picture and a list of what goes to your CPA. If you do not have one, we can introduce a cross-border CPA. Where past years are missing, we talk through the options before anything is filed.",
        },
        {
          title: "Keep it current",
          body: "Accounts get closed, parents make gifts, property is sold. We revisit the inventory each year so the reporting stays accurate and your broader [tax strategy](/services/tax-strategy-planning) reflects both sides of the Pacific.",
        },
      ],
      whyIndependent:
        "We earn no commissions and sell no insurance or investment products, which matters here more than almost anywhere. Foreign policies and pooled funds are often sold to families precisely because nobody explains the US reporting and tax consequences that follow. Being independent means we can tell you plainly when something you already own has become a problem, and coordinate with your CPA and your attorney rather than compete with them.",
      faqs: [
        {
          q: "Who actually has to file these reports?",
          a: "In general terms, US persons with foreign financial accounts or certain foreign assets. That includes citizens and green card holders, and often people on work visas who meet the substantial presence test. Ownership is not the only trigger, since signature authority over someone else's account can also create a duty. Reporting thresholds exist and they change, so the current rules are worth confirming each year with your CPA.",
        },
        {
          q: "What is the difference between FBAR and FATCA?",
          a: "They are two separate duties, and both can apply in the same year to the same account. The FBAR is a report of foreign financial accounts filed with FinCEN rather than attached to your tax return. FATCA reporting, usually on Form 8938, covers a broader set of foreign financial assets and is filed with your return. Different definitions, different thresholds, different forms.",
        },
        {
          q: "My parents in Taiwan sent me money. Is it taxable?",
          a: "A gift or an inheritance from a person abroad is generally not taxable income to you, which is usually a pleasant surprise. Larger ones can still be reportable on an information return, and that duty is separate from whether any tax is owed. The practical risk is the missed form rather than the tax. If you expect to inherit property abroad, it is worth reviewing your own [estate and trust planning](/services/estate-trust-planning) at the same time.",
        },
        {
          q: "I hold mutual funds and an insurance policy in Taiwan. Is that a problem?",
          a: "It can be. Foreign mutual funds, pooled investment products and some insurance policies with an investment component may be treated as PFICs under US rules, which brings unfavorable tax treatment and reporting of its own. Not every product qualifies and the analysis depends on the specific holding. We look at what you own, explain the exposure in plain language, and help you decide whether keeping it still makes sense.",
        },
        {
          q: "I already pay tax in Taiwan. Am I taxed twice?",
          a: "Often not twice in full. US persons are generally taxed on worldwide income, but foreign tax credits and, in some situations, treaty provisions are designed to relieve double taxation. Which relief applies depends on the type of income and where it arises, and the mechanics matter more than most people expect. We identify the questions and work them through with your CPA rather than guessing at the answer.",
        },
        {
          q: "I have not filed these reports for years. What are my options?",
          a: "You are not the first, and it is fixable more often than people fear. The IRS maintains established procedures for coming into compliance, including options aimed at taxpayers whose failure to file was not willful. Eligibility depends on your facts and nobody can promise an outcome. To be clear about our role, we do not prepare or file returns. We plan the strategy, then coordinate with a cross-border CPA who files and, where the history is complicated, an attorney.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "跨境稅務與海外資產申報：FBAR 與 FATCA",
      metaDescription:
        "說明在美華人家庭常見的 FBAR、FATCA 與海外資產申報義務，協助盤點台灣的帳戶、保單與不動產，並與跨境會計師合作完成申報。",
      h1: "跨境稅務與海外資產申報",
      heroSub:
        "只要您在台灣或其他海外仍持有帳戶或財產，即使當年不需要多繳一毛稅，美國的申報規定仍可能適用於您。",
      intro: [
        "我們服務的許多家庭，其實橫跨兩個金融體系：留在台北沒有結清的存款帳戶、父母多年前買下的儲蓄型保單、移民之前開立的證券帳戶，或從祖父母那裡繼承的一戶房子。這些資產感覺上與美國稅務無關，實際上也往往不會產生多少美國稅。但「申報」是另一回事：美國稅務居民（US person），包括公民、綠卡持有人與許多符合實質居留測試的簽證持有人，可能每年都必須申報海外金融帳戶與特定海外資產，即使帳戶沒有任何收益。",
        "這項服務提供的，是圍繞在這些申報周邊的規劃與協調。我們協助您盤點太平洋兩岸的資產、說明哪些申報義務可能適用、指出容易出狀況的帳戶與商品，並與熟悉跨境稅務的會計師（CPA）合作，由會計師負責準備與申報。我們本身不代客報稅；我們做的是確保沒有遺漏，讓申報背後的策略與您整體的[財務規劃](/services/financial-planning)相互契合。本頁為一般性教育內容，實際適用的規定仍取決於您的個別情況。",
      ],
      coversTitle: "服務內容",
      covers: [
        "盤點海外帳戶與資產：銀行與證券帳戶、具現金價值的保單、退休性質帳戶與繼承而來的不動產",
        "FBAR 與 FATCA 兩項申報有何不同，以及為何同一個帳戶可能同時適用兩者",
        "對父母或雇主帳戶擁有簽署權：即使不是所有權人，也可能產生申報義務",
        "來自海外親人的贈與與繼承：即使對您不課稅，仍經常需要申報",
        "外國共同基金與部分保單可能涉及的 PFIC 問題，在您決定是否續抱之前先說清楚",
        "同一筆所得在兩地被課稅時的國外稅額扣抵（foreign tax credit）與租稅協定問題",
        "補申報過去未申報的年度：說明 IRS 既有的合規補救程序，並抱持務實的預期",
        "與負責申報的跨境會計師（CPA）協調，必要時也與律師合作",
      ],
      process: [
        {
          title: "全面盤點",
          body: "我們會列出您在美國境外的每一個帳戶、保單與不動產，包括登記在誰名下、誰有權指示，以及開立或繼承的時間。這個階段多半只是把「到底有哪些東西」弄清楚，包括那些多年沒人想起的帳戶。",
        },
        {
          title: "申報義務檢視",
          body: "我們會把每一項資產對應到可能適用的申報義務，並標示哪些規定與門檻會逐年變動。需要特別處理的部分，例如海外基金或家族信託，會提早提出，而不是等到報稅季才發現。",
        },
        {
          title: "規劃與協調",
          body: "您會收到一份書面的跨境資產總覽，以及要交給會計師的資料清單。如果您還沒有熟悉跨境稅務的會計師，我們可以引介一位。若有年度未申報，我們會在提交任何文件前先討論可行的途徑。",
        },
        {
          title: "年年維持正確",
          body: "帳戶會結清、長輩會贈與、房子會出售。我們每年重新檢視這份盤點，讓申報維持準確，也讓您整體的[稅務策略](/services/tax-strategy-planning)同時涵蓋太平洋兩岸。",
        },
      ],
      whyIndependent:
        "我們不賺取佣金，也不銷售保險或投資商品，這一點在跨境議題上格外重要。海外保單與集合投資商品之所以賣得出去，往往正是因為沒有人說明後續在美國的申報與稅務後果。獨立的身分讓我們能坦白告訴您，手上已經持有的東西何時成了麻煩，也讓我們與您的會計師、律師合作，而不是競爭。",
      faqs: [
        {
          q: "到底哪些人需要做這些申報？",
          a: "概括地說，是持有海外金融帳戶或特定海外資產的美國稅務居民（US person），包括公民、綠卡持有人，以及許多符合實質居留測試的工作簽證持有人。持有並不是唯一的觸發條件，對他人帳戶擁有簽署權同樣可能產生義務。申報門檻確實存在，而且會變動，建議每年與您的會計師確認當年度的規定。",
        },
        {
          q: "FBAR 和 FATCA 有什麼不同？",
          a: "這是兩項各自獨立的義務，同一個帳戶在同一年可能兩者都適用。FBAR 是向 FinCEN 申報海外金融帳戶，並不隨報稅表一起提交；FATCA 的申報通常使用 Form 8938，涵蓋的海外金融資產範圍更廣，並隨報稅表一起申報。兩者的定義不同、門檻不同、表格也不同。",
        },
        {
          q: "台灣的父母匯錢給我，需要課稅嗎？",
          a: "來自海外個人的贈與或繼承，通常不算是您的應稅所得，多數人聽到都會鬆一口氣。但金額較大時仍可能需要提交資訊申報表，這項義務與是否課稅是兩回事；實務上的風險通常在於漏報表格，而不是稅金。如果您預期將繼承海外資產，建議同時檢視自己的[財富傳承與信託規劃](/services/estate-trust-planning)。",
        },
        {
          q: "我在台灣有共同基金和保單，這會有問題嗎？",
          a: "有可能。外國共同基金、集合投資商品，以及部分具投資性質的保單，在美國稅法下可能被視為 PFIC，適用相對不利的課稅方式，並有各自的申報要求。並非每項商品都會被認定，判斷也要看個別標的。我們會檢視您實際持有的內容，用白話說明可能的影響，並協助您判斷是否值得繼續持有。",
        },
        {
          q: "我在台灣已經繳過稅了，還會被課兩次嗎？",
          a: "通常不會被完整課兩次。美國稅務居民原則上就全球所得課稅，但國外稅額扣抵（foreign tax credit），以及某些情況下的租稅協定，正是為了減輕重複課稅而設計。能適用哪一種，取決於所得類型與來源地，計算細節往往比想像中關鍵。我們會把問題整理出來，與您的會計師一起釐清，而不是憑感覺猜測。",
        },
        {
          q: "我已經好幾年沒有申報，該怎麼辦？",
          a: "您不是第一位，而且這通常比想像中容易補救。IRS 設有既定的合規補救程序，其中包括針對非故意未申報者的選項；是否符合資格取決於您的具體情況，任何人都無法保證結果。也請容我們把角色說清楚：我們不代客準備或提交報稅表，而是負責規劃策略，並與負責申報的跨境會計師（CPA）協調，必要時與律師合作。",
        },
      ],
    },
  },
};
