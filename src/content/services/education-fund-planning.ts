import type { Service } from "../types";

/**
 * College Education Fund Planning.
 * EN copy is final-draft quality. ZH copy is a working draft for a
 * professional translator to review (mark nothing as final).
 */
export const educationFundPlanning: Service = {
  slug: "education-fund-planning",
  path: "/services/education-fund-planning",
  icon: "graduation",
  name: {
    en: "College Education Fund Planning",
    "zh-hant": "大學教育基金規劃",
  },
  cardBlurb: {
    en: "529 plans, RSU-funded savings and honest conversations about private school, public school and study abroad, without shortchanging retirement.",
    "zh-hant": "529 教育儲蓄計畫、以 RSU 挹注的儲蓄，以及關於私校、公校與海外求學的坦誠討論，同時不犧牲退休準備。",
  },
  related: [
    "/services/financial-planning",
    "/services/tax-strategy-planning",
    "/services/asset-allocation",
  ],
  content: {
    en: {
      metaTitle: "College Education Fund Planning and 529 Plans",
      metaDescription:
        "College education fund planning for tech families: 529 plans, funding with vested RSUs, grandparent accounts, FAFSA and balancing college with retirement goals.",
      h1: "College Education Fund Planning",
      heroSub:
        "Education is the investment most Taiwanese-American families make without hesitation. The plan is about making it without regret: funded early, taxed lightly, and balanced against everything else.",
      intro: [
        "For many families we work with, the question is not whether to save for college but how to do it without letting it crowd out everything else. A 529 plan grows tax-free when used for qualified education expenses, which makes it a powerful tool, but the details matter: California offers no state deduction for contributions while some other states do, account ownership affects financial aid, and money set aside for a child who later earns a scholarship or studies abroad needs a fallback.",
        "We help you decide how much to save, in which accounts, and on what schedule, often by directing a portion of vested RSUs into education savings on a rhythm that matches your grant schedule. We also have the harder conversation: how a private school preference, a plan to send a child to Taiwan or the UK for university, or a grandparent's generous offer fits with your own retirement. You can borrow for college. You cannot borrow for retirement. A good education plan respects both.",
      ],
      coversTitle: "What this covers",
      covers: [
        "529 plan selection and setup, including why California residents often look beyond the in-state plan",
        "Contribution strategy: monthly automation, lump sums from vested RSUs and the superfunding option that uses several years of gift exclusion at once",
        "Grandparent-owned 529 accounts, gifts from family in Taiwan and how each is treated for financial aid",
        "FAFSA basics and the timing of withdrawals from different account owners",
        "Plans for unused funds: changing beneficiaries, K-12 and graduate use, and the Roth IRA rollover option within its limits",
        "Private school versus public school expectations and the true cost over a full K-12 path",
        "International study options, including universities in Taiwan, the UK, Canada and Europe",
        "Balancing education savings against retirement, home purchase and other family goals",
      ],
      process: [
        {
          title: "Discovery",
          body: "We talk about your children's ages, your hopes for their education, what family may contribute and what you have already saved. No judgment about the ambition; that is what planning is for.",
        },
        {
          title: "Cost and gap analysis",
          body: "We estimate the range of costs for the paths you are considering, public or private, in-state, out-of-state or abroad, and show how much of the gap your current savings would cover.",
        },
        {
          title: "Funding plan",
          body: "You receive a written plan: which accounts to use, who should own them, how much to contribute and when, and how vesting events feed the schedule.",
        },
        {
          title: "Check-ins as they grow",
          body: "We revisit the plan at major transitions, such as a new school, a change in family plans or the approach of the financial aid years, and adjust contributions and investments accordingly.",
        },
      ],
      whyIndependent:
        "Education savings products are sold aggressively, and many carry commissions, high fees or restrictive rules. We do not sell 529 plans, insurance-based college products or prepaid tuition contracts, and we earn nothing from any account you open. Our advice is paid for by you alone, so we can recommend a direct-sold, low-cost plan in whatever state fits best, and tell you plainly when a simpler option is the better one.",
      faqs: [
        {
          q: "Does California give a tax deduction for 529 contributions?",
          a: "No. California does not offer a state income tax deduction or credit for 529 contributions, although the federal tax-free growth and withdrawals for qualified expenses still apply. Because there is no in-state incentive, California residents are free to choose any state's plan based on investment options and fees. Residents of other states may have an in-state deduction worth considering, and we factor that in.",
        },
        {
          q: "What is superfunding a 529?",
          a: "Federal gift tax rules allow you to elect to treat a single large 529 contribution as if it were spread evenly over five years of annual gift exclusions. This lets a family, or a grandparent, front-load an account so more of the growth is tax-free. It requires a gift tax filing to make the election, and further gifts to that child during the period need care. We coordinate with your CPA on the mechanics.",
        },
        {
          q: "Should the 529 be in my name or the grandparents' name?",
          a: "Both can work. Under current FAFSA rules, a grandparent-owned 529 is generally not reported as a parent asset, and distributions from it are no longer counted as student income the way they once were, which has made grandparent ownership more attractive. Parent-owned accounts are reported at a modest assessment rate. Schools that use their own aid forms may treat things differently, so we look at the whole picture.",
        },
        {
          q: "What happens to the money if my child gets a scholarship, studies abroad or does not go to college?",
          a: "You have several options. You can change the beneficiary to another family member, use funds for graduate school, an eligible foreign university or certain K-12 and apprenticeship costs, or withdraw scholarship-equivalent amounts without the usual penalty (earnings remain taxable). In some cases, unused funds may be rolled into a Roth IRA for the beneficiary, subject to account age and lifetime limits. We plan for these fallbacks from the start.",
        },
        {
          q: "Can I use vested RSUs to fund a 529?",
          a: "Yes, and it is one of the most natural ways for tech families to save. Because RSUs are taxed as ordinary income at vest, selling shares right after vesting and moving the proceeds into a 529 typically creates little additional tax, while also reducing your concentration in employer stock. We help set a rule, for example a fixed percentage of each vest, so it happens automatically rather than by willpower.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "大學教育基金規劃與 529 計畫",
      metaDescription:
        "為科技業家庭提供大學教育基金規劃：529 教育儲蓄計畫、以已歸屬的 RSU 挹注、祖父母帳戶、FAFSA，以及在大學與退休目標之間取得平衡。",
      h1: "大學教育基金規劃",
      heroSub:
        "教育，是台裔美國家庭最不猶豫的投資。規劃的目的，是讓這筆投資不留遺憾：及早準備、稅負輕盈，並與其他目標取得平衡。",
      intro: [
        "對許多與我們合作的家庭來說，問題不在於要不要為大學儲蓄，而在於如何儲蓄，才不會排擠掉其他所有目標。529 教育儲蓄計畫用於合格教育支出時，成長免稅，是相當有力的工具，但細節很重要：加州對提撥不提供州稅扣除，其他某些州則有；帳戶的所有權會影響學費補助；而如果孩子日後拿到獎學金或出國求學，先前存下的錢需要有備案。",
        "我們會協助您決定要存多少、放在哪些帳戶、以什麼節奏進行，常見的做法是配合授予時程，把一部分已歸屬的 RSU 導入教育儲蓄。我們也會陪您面對較難的對話：偏好私校、打算送孩子到台灣或英國讀大學，或祖父母慷慨的資助，該如何與您自己的退休準備取得平衡。大學可以貸款，退休不能。好的教育計畫，兩者都會兼顧。",
      ],
      coversTitle: "服務內容",
      covers: [
        "529 計畫的挑選與開戶，包括加州居民為何常考慮州外的計畫",
        "提撥策略：每月自動扣款、以已歸屬的 RSU 一次投入，以及一次使用多年贈與免稅額的「超額預繳」（superfunding）選項",
        "祖父母持有的 529 帳戶、來自台灣家人的贈與，以及各自在學費補助中的認定方式",
        "FAFSA 基礎知識，以及不同帳戶持有人提領的時點安排",
        "未使用資金的安排：更換受益人、K-12 與研究所用途，以及在限額內轉入 Roth IRA 的選項",
        "私校與公校的期待，以及完整 K-12 路徑的真實成本",
        "海外求學選項，包括台灣、英國、加拿大與歐洲的大學",
        "在教育儲蓄、退休、購屋與其他家庭目標之間取得平衡",
      ],
      process: [
        {
          title: "了解現況",
          body: "我們會聊聊孩子的年齡、您對他們教育的期待、家人可能的資助，以及目前已經存下的金額。對於這份企圖心我們不做評斷，規劃正是為此而存在。",
        },
        {
          title: "成本與缺口分析",
          body: "估算您考慮中各條路徑的費用區間：公立或私立、州內、州外或海外，並呈現目前的儲蓄能填補多少缺口。",
        },
        {
          title: "資金計畫",
          body: "您會收到一份書面計畫：使用哪些帳戶、由誰持有、提撥多少與何時提撥，以及歸屬事件如何銜接這個時程。",
        },
        {
          title: "隨著孩子成長持續檢視",
          body: "在重要的轉折點重新檢視計畫，例如換學校、家庭計畫改變或接近申請學費補助的年份，並據此調整提撥與投資。",
        },
      ],
      whyIndependent:
        "教育儲蓄產品的推銷往往相當積極，其中許多附帶佣金、高費用或嚴格的限制條款。我們不銷售 529 計畫、以保險為基礎的大學儲蓄產品或預付學費合約，您開設的任何帳戶我們都不從中獲利。我們的建議只由您付費，因此能為您推薦最合適州別的直售低成本計畫，並在較簡單的選項其實更好時，坦白告訴您。",
      faqs: [
        {
          q: "加州對 529 提撥有稅務扣除嗎？",
          a: "沒有。加州不提供 529 提撥的州所得稅扣除或抵免，但聯邦層級用於合格支出的免稅成長與提領仍然適用。由於沒有州內誘因，加州居民可以依投資選項與費用自由選擇任何一州的計畫。其他州的居民可能享有值得考慮的州內扣除，我們會一併納入評估。",
        },
        {
          q: "什麼是 529 的「超額預繳」（superfunding）？",
          a: "聯邦贈與稅規則允許您選擇將一筆大額的 529 提撥視為平均分攤在五年的年度贈與免稅額中。這讓家庭或祖父母可以提前把帳戶充實起來，讓更多的成長享有免稅待遇。做此選擇需要申報贈與稅表，且在這段期間對同一位孩子的其他贈與需要留意。我們會就實際操作與您的會計師協調。",
        },
        {
          q: "529 該登記在我的名下，還是祖父母的名下？",
          a: "兩種都可行。依現行 FAFSA 規則，祖父母持有的 529 一般不列為父母資產，其提領也不再像過去那樣被計為學生收入，這讓祖父母持有變得更有吸引力。父母持有的帳戶則以較低的比例計入。使用自訂補助表格的學校可能有不同的認定方式，因此我們會綜合整體情況來看。",
        },
        {
          q: "如果孩子拿到獎學金、出國讀書或不上大學，這筆錢怎麼辦？",
          a: "您有多種選擇：可以把受益人改為其他家庭成員、把資金用於研究所、符合資格的海外大學，或特定的 K-12 與學徒制費用，也可以在不受一般罰金的情況下提領相當於獎學金金額的款項（收益部分仍需課稅）。在某些情況下，未使用的資金可在帳戶年限與終身限額的規範下，轉入受益人的 Roth IRA。這些備案我們從一開始就會納入規劃。",
        },
        {
          q: "我可以用已歸屬的 RSU 來投入 529 嗎？",
          a: "可以，這也是科技業家庭最自然的儲蓄方式之一。由於 RSU 在歸屬時已按一般所得課稅，歸屬後立即出售並把所得投入 529，通常不會產生太多額外稅負，同時也能降低您在雇主股票上的集中度。我們會協助您訂一個規則，例如每次歸屬的固定比例，讓這件事自動發生，而不是靠意志力。",
        },
      ],
    },
  },
};
