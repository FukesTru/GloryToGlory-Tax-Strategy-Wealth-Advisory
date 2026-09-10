import type { Service } from "../types";

/**
 * Estate & Trust Planning — the financial and tax strategy around the
 * documents. Grace is not an attorney: every document is drafted and
 * executed by a licensed estate attorney, and the copy says so repeatedly.
 * EN copy is final-draft quality. ZH copy is a working draft for a
 * professional translator to review (mark nothing as final).
 *
 * Compliance note: no year-indexed figures appear on this page (no estate
 * tax exemption, no annual gift exclusion amounts).
 */
export const estateTrustPlanning: Service = {
  slug: "estate-trust-planning",
  path: "/services/estate-trust-planning",
  icon: "document",
  name: {
    en: "Estate & Trust Planning",
    "zh-hant": "財富傳承與信託規劃",
  },
  cardBlurb: {
    en: "Trust funding, beneficiary designations and the tax thinking around them, working alongside the attorney who drafts your documents.",
    "zh-hant": "信託資產的置入、受益人指定，以及背後的稅務考量；與為您起草文件的律師併肩合作。",
  },
  related: [
    "/services/financial-planning",
    "/services/tax-strategy-planning",
    "/services/cross-border-tax-filings",
  ],
  content: {
    en: {
      metaTitle: "Estate & Trust Planning Strategy for Families",
      metaDescription:
        "Living trusts, beneficiary designations, gifting and heirs abroad, explained in plain language. Your attorney drafts the documents. We plan the strategy.",
      h1: "Estate & Trust Planning",
      heroSub:
        "Your documents are drafted by a licensed estate attorney. The financial and tax strategy that sits around them is our work, and the two are far better built together.",
      intro: [
        "Estate planning has an image problem. It sounds like something for people with a great deal more money, or for a much later stage of life. In practice, the families who most need a plan are often the ones still building. A couple in their thirties with young children and no named guardian. A business owner whose company would have to be sold in a hurry. A household whose largest assets are a house in California and a retirement account with a beneficiary form nobody has opened since a first job.",
        "A plan answers three plain questions. Who decides for you if you cannot decide for yourself, who receives what you leave behind, and how much friction, delay and tax sits between the two. The documents that answer them, a will, a trust, powers of attorney and a health care directive, are drafted and executed by a licensed estate attorney. That part is not our role. Ours is everything around it: how assets are titled and funded, how beneficiary designations line up, what a gift now would mean compared with an inheritance later, and how it all connects to your [financial plan](/services/financial-planning) while you are very much alive.",
      ],
      coversTitle: "What this covers",
      covers: [
        "Why a plan matters long before there is a large estate, starting with guardians for young children",
        "Revocable living trusts and why California families often use one to avoid probate, plus why an unfunded trust is a common gap",
        "Beneficiary designations on retirement accounts and life insurance, which pass outside your will and quietly override it",
        "Step-up in cost basis at death as a planning concept, and how it shapes what to sell, hold or give away",
        "Gifting during your life compared with transferring at death, including support for parents and help with tuition",
        "Heirs who live in Taiwan or elsewhere abroad, and the practical and reporting questions they raise",
        "Charitable giving as part of a legacy, including gifts of appreciated stock and donor-advised funds",
        "Keeping the plan current after a move, a marriage, a birth, a divorce or a liquidity event",
      ],
      process: [
        {
          title: "Take stock",
          body: "We map what you own and how each piece is titled: accounts, property, business interests, insurance, retirement plans and anything held abroad. Then we look at where each asset would go today, which is rarely where you assumed.",
        },
        {
          title: "Decide what you want",
          body: "We talk through the outcomes that matter to you. Guardians for young children, support for parents, whether heirs receive everything at once or over time, and any charitable intent. Spouses and partners are welcome, in English or Mandarin.",
        },
        {
          title: "Work with your attorney",
          body: "We put the strategy in writing and take it to your estate attorney, or introduce you to one. The attorney drafts and executes every document. We stay in the conversation so the thinking behind your choices is not lost.",
        },
        {
          title: "Fund it and keep it current",
          body: "After signing, the plan still has to be implemented: assets retitled or funded into the trust, beneficiary forms updated, records where your family can find them. We revisit it whenever your life changes.",
        },
      ],
      whyIndependent:
        "Estate planning is one of the places commissions do the most damage. Products get sold as legacy solutions when a properly funded trust and updated beneficiary forms would accomplish more for far less. We sell no insurance and earn no commissions, so we have no reason to steer you toward a product. We also do not draft documents. That work belongs to your attorney, and independence lets us sit on your side of the table with them.",
      faqs: [
        {
          q: "Do I need an estate plan if I do not have much yet?",
          a: "Usually yes, and for reasons that have little to do with money. A plan names who would raise your children, who makes medical and financial decisions if you cannot, and who receives what without a court deciding for you. Those questions apply at any level of wealth. The tax side of planning becomes more relevant as assets grow. The human side is relevant now.",
        },
        {
          q: "Do you draft my will or trust?",
          a: "No. We are not attorneys and we do not draft or execute legal documents. Every document in your plan is drafted by a licensed estate attorney. What we bring is the financial and tax strategy around those documents, plus the follow-through that so often gets dropped: titling, funding and beneficiary forms. If you do not have an attorney, we can introduce one and stay in the conversation.",
        },
        {
          q: "Why do so many California families use a living trust?",
          a: "Because assets that pass under a will generally go through probate, a court-supervised process that in California tends to be slower, more public and more expensive than in many other states. A properly funded revocable living trust lets many assets pass outside it. It is not the right answer for everyone, and your attorney makes that call with you, but it is a common starting point for families who own a home here.",
        },
        {
          q: "My will says one thing and my 401(k) beneficiary form says another. Which one wins?",
          a: "Generally the beneficiary form. Retirement accounts and life insurance pass by designation, outside your will, so an outdated form can send a large asset to a former spouse or to an estate you never intended. It is one of the first things we check and one of the easiest to fix. Plans left behind at a first employer are where we find the most surprises.",
        },
        {
          q: "Should I give money to my children now or leave it to them later?",
          a: "It depends on the asset and on the family. Cash given during your life lets you see it used, whether that is a down payment or tuition. Highly appreciated assets are a different calculation, because property held until death may receive a step-up in cost basis, while a lifetime gift generally carries your original basis to the person receiving it. We model both paths alongside your [tax strategy](/services/tax-strategy-planning).",
        },
        {
          q: "Some of my heirs live in Taiwan. Does that change the plan?",
          a: "It adds steps. Distributions to family abroad raise practical questions about identification, banking and currency, and reporting duties can arise on either side of the Pacific. If you also hold accounts or property overseas, your plan and your [cross-border filings](/services/cross-border-tax-filings) need to agree with each other. Your attorney drafts for those circumstances, and we make sure the financial picture behind the documents is consistent.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "財富傳承與信託規劃：生前信託與受益人指定",
      metaDescription:
        "以白話說明生前信託、受益人指定、生前贈與與海外繼承人的財務與稅務策略。文件由您的遺產規劃律師起草，我們負責周邊的規劃與協調。",
      h1: "財富傳承與信託規劃",
      heroSub:
        "法律文件由具執照的遺產規劃律師起草；圍繞在文件周邊的財務與稅務策略，則是我們的工作。兩者一起規劃，效果最好。",
      intro: [
        "「傳承規劃」常被誤解。聽起來像是資產規模大得多的人才需要，或是人生更後段才要處理的事。實際上，最需要一份計畫的，往往是還在打拼的家庭：三十多歲、有年幼孩子卻還沒指定監護人的夫妻；一旦出事、公司可能被迫倉促出售的小企業主；或是最大的資產就是一棟加州房子，加上一個退休帳戶，而受益人表格自從第一份工作以來沒人再打開過。",
        "一份計畫要回答三個很實際的問題：當您無法自己決定時由誰替您決定、您留下的資產由誰承接，以及這兩者之間隔著多少摩擦、拖延與稅負。回答這些問題的法律文件，包括遺囑、信託、授權書與醫療指示，都由具執照的遺產規劃律師起草並執行，那不是我們的工作。我們負責的是文件周邊的部分：資產如何登記與置入信託、受益人指定是否一致、生前贈與與身後繼承有何差別，以及這一切如何與您在世時的[財務規劃](/services/financial-planning)相互連結。",
      ],
      coversTitle: "服務內容",
      covers: [
        "為什麼在資產還不龐大時就該有計畫：從為未成年子女指定監護人開始",
        "可撤銷生前信託（revocable living trust）的一般概念、為何加州家庭常以此避開遺產認證程序（probate），以及為何「簽了卻沒把資產放進去」是常見的缺口",
        "退休帳戶與人壽保險的受益人指定：這些資產不經遺囑移轉，卻會在無形中覆蓋遺囑的安排",
        "身故時成本基礎墊高（step-up in cost basis）的規劃概念，以及它如何影響該賣、該留、該贈與哪些資產",
        "生前贈與與身後移轉的比較：包括奉養父母、協助子女購屋或支付學費",
        "當繼承人住在台灣或其他海外地區時，會出現哪些實務與申報上的問題",
        "把慈善捐贈納入傳承：包括捐贈增值股票與運用捐贈人建議基金（DAF）",
        "在搬遷、結婚、生子、離婚或變現事件之後，讓計畫保持在最新狀態",
      ],
      process: [
        {
          title: "盤點現況",
          body: "我們會盤點您擁有什麼，以及每一項資產登記在誰名下：帳戶、不動產、公司股權、保險、退休計畫與海外資產。接著檢視每項資產今天實際上會流向誰，答案往往與您以為的不同。",
        },
        {
          title: "釐清您的意願",
          body: "我們會一起討論您真正在意的結果：年幼子女的監護人、對父母的照顧、繼承人是一次領取還是分階段領取，以及是否有慈善的心願。歡迎配偶或伴侶一同參與，中英文皆可。",
        },
        {
          title: "與您的律師合作",
          body: "我們會把策略整理成書面，交給您的遺產規劃律師，或為您引介一位。所有文件都由律師起草並完成執行。我們則持續參與討論，讓每個選擇背後的財務與稅務考量不致流失。",
        },
        {
          title: "落實並持續更新",
          body: "文件簽署之後，計畫還需要真正落實：資產重新登記或置入信託、受益人表格更新、文件放在家人找得到的地方。後續由我們協助追蹤，並在您的人生出現變化時重新檢視。",
        },
      ],
      whyIndependent:
        "傳承規劃是佣金最容易造成傷害的領域之一。有些商品被包裝成「傳承方案」銷售，但其實一個確實把資產放進去的信託，加上更新過的受益人表格，往往成本低得多、效果更好。我們不銷售保險、不賺取佣金，沒有理由把您導向任何商品；我們也不起草文件，那屬於您的律師。獨立的身分，讓我們能與律師一起坐在您這一邊。",
      faqs: [
        {
          q: "我的資產還不多，也需要做傳承規劃嗎？",
          a: "通常需要，而且理由多半與金額無關。一份計畫決定了萬一發生事情，由誰撫養您的孩子、由誰替您做醫療與財務決定，以及資產由誰承接，而不必交由法院裁定。這些問題在任何資產規模下都存在。稅務層面會隨著資產累積而愈來愈重要，但「人」的層面，現在就重要。",
        },
        {
          q: "你們會幫我起草遺囑或信託嗎？",
          a: "不會。我們不是律師，也不起草或執行任何法律文件。您計畫中的每一份文件，都由具執照的遺產規劃律師起草。我們提供的是文件周邊的財務與稅務策略，以及最常被忽略的後續工作：資產登記、把資產置入信託，以及受益人表格的更新。如果您還沒有合作的律師，我們可以為您引介，並持續參與討論。",
        },
        {
          q: "為什麼這麼多加州家庭會設立生前信託？",
          a: "因為依遺囑移轉的資產通常必須經過法院監督的遺產認證程序（probate），在加州往往比許多其他州更耗時、更公開、成本也更高。一個確實把資產放進去的可撤銷生前信託，可以讓不少資產免於這道程序。這並非人人適用，最終仍由您的律師與您一起判斷，但對在加州持有房產的家庭來說，這通常是討論的起點。",
        },
        {
          q: "我的遺囑寫的和 401(k) 受益人表格不一樣，哪一個算數？",
          a: "原則上以受益人表格為準。退休帳戶與人壽保險是依指定的受益人移轉，不經遺囑，因此一張過期的表格，可能把一大筆資產送到前配偶手上，或落入您原本不希望的安排。這是我們最先檢查的項目之一，也是最容易修正的一項。留在第一份工作的舊雇主計畫，往往是「意外」最多的地方。",
        },
        {
          q: "我應該現在把錢給孩子，還是留到身後？",
          a: "要看資產性質與家庭狀況。生前贈與現金，您看得到這筆錢如何被使用，例如支付頭期款或學費；增值幅度大的資產則是另一回事，因為持有至身故的財產可能適用成本基礎墊高，生前贈與通常是把您原本的成本基礎一併移轉給受贈人。我們會試算兩條路徑，並與您的[稅務策略](/services/tax-strategy-planning)一併考量。",
        },
        {
          q: "我的部分繼承人住在台灣，這會影響規劃嗎？",
          a: "會多出一些步驟。分配給海外親屬時，身分證明、銀行與換匯都會帶來實務上的問題，太平洋兩岸也都可能產生申報義務。如果您同時在海外持有帳戶或不動產，您的傳承計畫與[跨境稅務與海外資產申報](/services/cross-border-tax-filings)必須彼此一致。文件由您的律師起草，我們則確保背後的財務全貌前後相符。",
        },
      ],
    },
  },
};
