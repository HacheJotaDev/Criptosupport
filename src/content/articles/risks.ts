import { Scale } from "lucide-react";
import type { Article } from "./types";

export const riskArticles: Article[] = [
  {
    slug: "crypto-investment-risks",
    title: "The Real Risks of Investing in Crypto Assets",
    description:
      "Volatility, liquidity, custody, regulation and psychology: an honest map of the risks behind crypto investing and the principles that help manage them.",
    category: "Risks",
    group: "Risk & Responsibility",
    level: "Intermediate",
    readingTime: 7,
    publishedAt: "2026-10-25",
    featured: false,
    icon: Scale,
    related: [
      "how-to-spot-crypto-scams",
      "what-are-stablecoins",
      "what-is-bitcoin",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Most educational content about crypto focuses on how things work; far less focuses honestly on how they fail. This guide is a map of the risks that exist even when you do everything right — no scams, no mistakes, just reality. Understanding them is not pessimism; it is the difference between participating with a plan and participating with hope.",
      },
      { type: "heading", text: "Market risk: volatility is the default" },
      {
        type: "paragraph",
        text: "Crypto markets are young, globally traded around the clock, and driven heavily by sentiment and liquidity cycles. The historical pattern includes dramatic bull markets followed by drawdowns of 70% to 90% for major assets, and far worse for smaller ones. Volatility alone is not a flaw — it is a structural characteristic — but it dictates everything about position sizing. An allocation you cannot watch drop 80% without panic-selling is, for you, too large, regardless of how promising the technology is.",
      },
      { type: "heading", text: "Liquidity risk: not everything can be sold" },
      {
        type: "paragraph",
        text: "Large assets trade deep enough that you can usually exit a position near the market price. Thousands of small tokens do not enjoy that luxury. Thin order books mean that selling a meaningful amount pushes the price against you — slippage — and in stressed markets, buyers can disappear entirely. Liquidity risk hides during calm markets and reveals itself exactly when you most want out. A rule of thumb: the smaller and newer the asset, the more conservative your position should be, precisely because exit doors may be narrow.",
      },
      { type: "heading", text: "Custody and operational risk" },
      {
        type: "paragraph",
        text: "Holding crypto means choosing between failure modes. With custodians, you carry counterparty risk — the platform can be hacked, mismanaged or insolvent, and history includes spectacular examples at every scale. With self-custody, you carry operational risk: lost keys, destroyed backups, user error. Neither option is free; both demand preparation. This is the practical reason our guides on wallets and key protection sit at the center of this site's curriculum.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Diversification applies to platforms too",
        text: "Spreading holdings across a self-custody setup and, if needed, different reputable custodians reduces single-point-of-failure exposure. Diversifying assets while keeping everything in one fragile place diversifies almost nothing.",
      },
      { type: "heading", text: "Regulatory and tax risk" },
      {
        type: "paragraph",
        text: "The rules governing crypto differ sharply by country and continue to evolve: which platforms can operate, what taxes apply to trading and spending, which tokens are treated as securities, and how reporting obligations work. Regulatory changes can affect liquidity, access and value quickly. Two practical consequences: keep records of your transactions from day one, because reconstructing years of trades later is painful; and learn your local tax treatment before transacting, not after. CryptoSupport cannot provide legal or tax advice — this is a topic for qualified local professionals.",
      },
      { type: "heading", text: "Technical and fraud risk" },
      {
        type: "paragraph",
        text: "Beyond market movements, crypto assets carry engineering risk: smart contracts can contain bugs, bridges between blockchains have been exploited for historic sums, and even audited systems fail occasionally. Layered on top is fraud risk — the scams covered in our dedicated guide — which remains one of the largest sources of losses for newcomers. A useful mental model: technical risk hits at the protocol level, fraud risk hits at the human level, and you need basic defenses against both.",
      },
      { type: "heading", text: "Behavioral risk: the risk you bring yourself" },
      {
        type: "paragraph",
        text: "The most preventable losses usually come from psychology. FOMO buying after prices have already surged, panic selling after crashes, overexposure of savings that should never have been risked, and leverage — borrowing to amplify positions — which converts volatility into liquidation. Behavioral risk compounds every other risk on this list. The antidotes are boring and effective: predefined position sizes, a written plan for what you would do at certain price levels, and honest limits on money you can afford to lose entirely.",
      },
      { type: "heading", text: "Principles that manage these risks" },
      {
        type: "list",
        items: [
          "Only allocate money whose total loss would not change your life — never emergency funds, borrowed money or essentials.",
          "Size positions so that your worst realistic outcome is emotionally survivable; if you would check prices hourly, the position is too big for you.",
          "Avoid leverage as a beginner; it converts volatile markets into a liquidation machine.",
          "Favor boring security — hardware wallets, tested backups, small test transactions — over clever strategies.",
          "Do your own research and treat every claim of guaranteed profit as evidence of bad faith.",
          "Write down your reasons and horizon before acquiring any asset; revisit the plan when emotions run high, not the portfolio.",
        ],
      },
      { type: "heading", text: "Final thoughts" },
      {
        type: "paragraph",
        text: "Crypto assets combine the volatility of an emerging asset class, the operational fragility of early technology and the fraud exposure of unregulated markets — wrapped in a system whose core innovations are genuinely interesting. None of this means participation is irrational; it means participation without understanding risk is. Learn the mechanics, respect the failure modes, and let education — not hype or fear — drive your decisions.",
      },
      {
        type: "callout",
        variant: "disclaimer",
        title: "Not financial advice",
        text: "This guide is educational and general in nature. It does not constitute financial, investment, legal or tax advice, and it does not recommend any specific asset, platform or strategy. Markets involve risk, including the total loss of capital.",
      },
    ],
  },
];
