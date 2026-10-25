import { Wallet, KeyRound, ShieldAlert } from "lucide-react";
import type { Article } from "./types";

export const securityArticles: Article[] = [
  {
    slug: "custodial-vs-non-custodial-wallets",
    title: "Custodial vs Non-Custodial Wallets: Who Really Holds Your Crypto?",
    description:
      "Wallets don't store coins — they store keys. Learn the real difference between custodial and non-custodial wallets and how to choose according to your needs.",
    category: "Wallets",
    group: "Wallets & Security",
    level: "Beginner",
    readingTime: 7,
    publishedAt: "2026-10-22",
    featured: false,
    icon: Wallet,
    related: [
      "how-to-protect-private-keys",
      "how-to-spot-crypto-scams",
      "what-is-bitcoin",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "One of the most common beginner misconceptions is that a crypto wallet stores coins. It doesn't. Your coins always live on the blockchain; what a wallet actually stores are the cryptographic keys that authorize movements of those coins. Once you understand that, the difference between custodial and non-custodial wallets becomes simple and profound: it is the difference between someone else holding your keys and you holding them yourself.",
      },
      { type: "heading", text: "What a wallet really is" },
      {
        type: "paragraph",
        text: "Every crypto account is built on a key pair. The public key (or address) is like an account number: you share it freely to receive funds. The private key is like the only signature that can authorize spending. Most modern wallets derive all keys from a single recovery phrase — a sequence of 12 or 24 words generated when the wallet is created. That phrase is the master backup of everything: whoever possesses it controls the funds, and there is no reset button if it is lost.",
      },
      { type: "heading", text: "Custodial wallets: convenience with a catch" },
      {
        type: "paragraph",
        text: "A custodial wallet is one where a third party — usually an exchange — holds the private keys on your behalf. When you create an account on a centralized exchange and buy crypto there, you typically see a balance, but the keys live on the company's infrastructure. This model feels familiar because it mirrors online banking: you log in, you have support channels, and password resets exist. If you forget your credentials, the platform can restore access.",
      },
      {
        type: "list",
        items: [
          "Advantages: familiar login experience, customer support, easy fiat on-ramps, integrated trading, and no seed phrase management for beginners.",
          "Trade-offs: you depend on the company's solvency, security practices and honesty; withdrawals can be delayed or restricted; and accounts can be frozen pending reviews.",
          "History matters: failures of large custodial platforms, most famously the 2022 collapse of FTX, showed that 'the exchange has my funds' can mean 'the exchange owes me funds' — a very different thing.",
        ],
      },
      { type: "heading", text: "Non-custodial wallets: control with responsibility" },
      {
        type: "paragraph",
        text: "A non-custodial wallet puts the keys — and only the keys — in your hands. The software can be a mobile app, a browser extension, or a dedicated hardware device that keeps keys offline. Nobody can freeze your wallet, block a transaction, or access your funds, because nobody else has the keys. That independence comes with absolute responsibility: if you lose the device and the recovery phrase, the funds are mathematically unreachable. If someone obtains your recovery phrase, your funds are gone and no support team can reverse it.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Hardware wallets explained",
        text: "A hardware wallet is a small dedicated device that stores keys offline and signs transactions without ever exposing them to your computer or phone. For meaningful long-term holdings, it is the standard security recommendation — combined with a carefully stored recovery phrase.",
      },
      { type: "heading", text: "'Not your keys, not your coins'" },
      {
        type: "paragraph",
        text: "This well-known phrase in the crypto community summarizes the custody question, but it deserves nuance. Holding your own keys eliminates counterparty risk and replaces it with operational risk — the risk that you lose, damage or leak your keys. For many people, that trade is worth it; for others, especially those handling small amounts or trading actively, a reputable custodian may be a reasonable choice. The mature position is not dogma but awareness: know which model you are using, and know what can go wrong in each.",
      },
      { type: "heading", text: "How to choose, by profile" },
      {
        type: "list",
        items: [
          "Learning with small amounts: a custodial account at a regulated platform, or a simple non-custodial app — either is acceptable while you practice.",
          "Growing long-term savings: a non-custodial setup, ideally a hardware wallet with the recovery phrase stored offline in at least two secure physical locations.",
          "Frequent trading: many users keep a small trading balance on an exchange and the bulk of holdings in self-custody.",
          "Every profile: never store large value in accounts you cannot withdraw from, and never share a recovery phrase with anyone — no legitimate service will ever ask for it.",
        ],
      },
      { type: "heading", text: "Key takeaways" },
      {
        type: "paragraph",
        text: "The custody decision is fundamentally about who bears which risk. Custodial wallets outsource key security to a company and inherit its failure modes; non-custodial wallets transfer that burden to you, along with full control. Whichever you choose, the next guide in this series — protecting your private keys — is essential reading before you hold anything of value.",
      },
      {
        type: "callout",
        variant: "disclaimer",
        title: "Educational content",
        text: "CryptoSupport does not recommend specific wallet products or providers. This guide is general information, not financial or security advice for your particular situation.",
      },
    ],
  },
  {
    slug: "how-to-protect-private-keys",
    title: "How to Protect Your Private Keys and Seed Phrase",
    description:
      "A practical guide to backing up seed phrases, avoiding digital theft, surviving physical disasters, and planning for the worst — without paranoia.",
    category: "Security",
    group: "Wallets & Security",
    level: "Beginner",
    readingTime: 7,
    publishedAt: "2026-10-23",
    featured: false,
    icon: KeyRound,
    related: [
      "custodial-vs-non-custodial-wallets",
      "how-to-spot-crypto-scams",
      "crypto-investment-risks",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "In traditional finance, losing your password is an inconvenience: you click 'forgot password' and answer an email. In self-custodied crypto, losing your private key is permanent. There is no reset, no support line and no legal recourse — the keys are the only proof of control. That is why key protection is the single most important operational skill in crypto. This guide covers the main threats and the practices that neutralize them.",
      },
      { type: "heading", text: "Your seed phrase is your master key" },
      {
        type: "paragraph",
        text: "Most wallets generate a recovery phrase of 12 or 24 words drawn from a standardized word list. From those words, all of your private keys are mathematically derived. This has a crucial implication: the phrase is not one backup among many — it is the backup. A photograph of the phrase, a note in a notes app, or a file in cloud storage is enough for a thief to empty every account those keys control, often without leaving a trace you would notice in time.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "The golden rule",
        text: "Your seed phrase should exist only as physical backups, in locations you control, and should never be typed into any website, app form, or message. No legitimate exchange, wallet or support agent will ever ask for it.",
      },
      { type: "heading", text: "Digital threats you should know by name" },
      {
        type: "list",
        items: [
          "Phishing: fake websites and emails that imitate wallets or exchanges to capture your credentials or seed phrase. Check URLs character by character and bookmark the sites you use.",
          "Malware and clipboard hijackers: malicious software that watches your clipboard and swaps wallet addresses when you paste them. Verify the first and last characters of every address after pasting.",
          "Fake wallet apps: look-alike apps published in app stores that steal keys on setup. Download wallet software only from official sources, linked from the project's verified site.",
          "Remote-access scams: someone convincing you to install screen-sharing or support software, then reading your seed phrase over your shoulder. Never install remote tools for strangers, no matter the story.",
          "Cloud leakage: photos, notes sync and automatic backups can quietly upload seed phrases to servers. Keep seeds on paper or metal, never on connected devices.",
        ],
      },
      { type: "heading", text: "Physical threats: fire, water, time" },
      {
        type: "paragraph",
        text: "Paper is a decent seed backup: it is offline and cheap, but it burns, soaks and fades. For larger holdings, many people stamp or engrave seed phrases onto stainless steel plates designed to survive house fires and floods. Wherever you store backups, think about redundancy and geography: two or more separate physical locations protect against a single disaster — a fire, a burglary, a flood — destroying everything at once. At the same time, every additional copy adds a theft surface, so balance the two.",
      },
      { type: "heading", text: "Operational hygiene that prevents most losses" },
      {
        type: "list",
        items: [
          "Send a small test transaction first whenever you use a new address or device for the first time, then confirm receipt before sending the full amount.",
          "Use a hardware wallet for meaningful savings, and keep a separate low-value wallet for everyday transactions and experiments.",
          "Never enter a seed phrase on any device connected to the internet except during initial wallet setup and recovery — and only in genuine, offline-first wallet software.",
          "Treat every unsolicited message about your wallet, account or a 'security problem' as an attack until proven otherwise through official channels you find yourself.",
          "Talk about inheritance: a seed phrase nobody else can find means your holdings are lost to your family forever. A sealed envelope with legal instructions is a modest, practical solution.",
        ],
      },
      { type: "heading", text: "If a key may be compromised" },
      {
        type: "paragraph",
        text: "If you even suspect a seed phrase was exposed — you typed it into a suspicious site, a device with it was infected, or a photo of it existed online — act immediately: create a brand-new wallet on a clean device, move all funds to the new addresses, and retire the old phrase permanently. Speed matters more than elegance; in crypto, transactions can be monitored and swept by attackers within minutes of a key leaking.",
      },
      { type: "heading", text: "Key takeaways" },
      {
        type: "paragraph",
        text: "Key protection is not about paranoia; it is about a handful of habits: physical backups in multiple locations, hardware devices for savings, test transactions, healthy suspicion of anyone asking for credentials, and a rehearsed plan for compromise. Do these once, correctly, and the day-to-day security burden of self-custody becomes remarkably small.",
      },
      {
        type: "callout",
        variant: "disclaimer",
        title: "Educational content",
        text: "This guide describes general security practices, not a personalized security audit. CryptoSupport is an educational resource and does not provide financial or technical consulting for individual cases.",
      },
    ],
  },
  {
    slug: "how-to-spot-crypto-scams",
    title: "How to Spot Crypto Scams Before They Cost You",
    description:
      "Phishing, fake giveaways, romance scams, rug pulls and recovery fraud: learn the patterns scammers reuse and a simple routine to verify anything crypto-related.",
    category: "Security",
    group: "Wallets & Security",
    level: "Beginner",
    readingTime: 8,
    publishedAt: "2026-10-24",
    featured: true,
    icon: ShieldAlert,
    related: [
      "how-to-protect-private-keys",
      "crypto-investment-risks",
      "custodial-vs-non-custodial-wallets",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Crypto scams are not creative anymore — they are industrial. The same handful of scripts are re-skinned weekly with new tokens, new fake celebrities and new urgency hooks. That is actually good news for learners: once you can recognize the patterns, most scams become obvious. This guide catalogs the most common ones and gives you a practical verification routine.",
      },
      { type: "heading", text: "Why crypto attracts scammers" },
      {
        type: "paragraph",
        text: "Three properties make crypto a target-rich environment. Transactions are irreversible — once you sign a transfer or approve a contract, there is no chargeback. Addresses are pseudonymous, which complicates tracing. And the space is young and hyped, so promises of extraordinary returns sound plausible to newcomers. Scammers exploit psychology more than technology: urgency, authority, social proof and greed do most of the work.",
      },
      { type: "heading", text: "The most common patterns" },
      {
        type: "list",
        items: [
          "Phishing sites and emails: near-perfect copies of exchanges or wallets that harvest your credentials or seed phrase. They arrive via ads, fake support replies, or 'security alerts'.",
          "Fake giveaways and impersonation: accounts impersonating celebrities, CEOs or projects promising to 'double any crypto sent'. Real institutions never ask you to send funds to receive more.",
          "Romance and 'pig butchering' scams: a long-con where a friendly or romantic contact builds trust over weeks, then introduces a 'profitable platform' that is entirely fake, draining deposits gradually.",
          "Fake platforms and Ponzi signals: dashboards showing impressive fictional gains, small initial withdrawals allowed to build trust, then blocked 'withdrawals pending taxes or fees'.",
          "Rug pulls: new tokens hyped on social media whose developers hold most of the supply and abandon the project after the price is pumped, leaving buyers with worthless assets.",
          "Airdrop and approval drainers: free token drops that trick you into signing a malicious approval, granting a contract permission to move your funds without further consent.",
          "Support impostors: 'agents' in Discord, Telegram or reply threads offering help with a problem you posted publicly — then requesting your seed phrase 'to fix' your wallet.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Recovery scams: the second wave",
        text: "After being scammed, victims are targeted again by 'recovery agents' who claim they can retrieve lost funds for an upfront fee. Blockchain transactions cannot be undone by anyone; these services are almost always a second scam.",
      },
      { type: "heading", text: "Red flags that fit almost every scam" },
      {
        type: "list",
        items: [
          "Guaranteed returns, fixed daily profits, or 'risk-free' yield — real markets do not offer guarantees.",
          "Urgency: countdown timers, 'last spots', or threats that your account will be closed today.",
          "Unsolicited contact: DMs from strangers, replies from 'support teams' you never contacted, or 'exclusive opportunities' out of nowhere.",
          "Requests for your seed phrase, private keys, or remote access to your device — these are always attacks, without exception.",
          "Pressure to move conversations to private messaging apps quickly, away from public scrutiny.",
          "Withdrawals blocked until you pay an unexpected 'tax', 'fee' or 'deposit' — a classic sign of a fake platform in the extraction phase.",
        ],
      },
      { type: "heading", text: "A simple verification routine" },
      {
        type: "paragraph",
        text: "First, pause: urgency is a weapon, and a legitimate opportunity will still exist in an hour. Second, verify independently — find the official website or support channel yourself, never through links in the message you are evaluating. Third, check small: before committing meaningful funds to any new platform, test a deposit and a complete withdrawal cycle with a minimal amount. Fourth, get a second opinion from someone you trust who is experienced, or from community forums where scams get reported quickly. Most victims later describe the warning signs they ignored under pressure; this routine exists precisely so pressure cannot do that to you.",
      },
      { type: "heading", text: "If you have already been scammed" },
      {
        type: "paragraph",
        text: "Move fast. If a malicious contract approval is involved, revocation tools can sometimes prevent further drains — but only if the funds have not yet been taken. Secure all your accounts: change passwords, enable two-factor authentication, and treat any seed phrase that touched the scammers' hands as burned; create a fresh wallet and migrate everything else immediately. Report the incident to your local police or cybercrime authority and to the platform where contact began, keeping realistic expectations: recovery is uncommon. Finally, be kind to yourself and vigilant about the follow-up scam — if you lost money once, you are now on a target list.",
      },
      { type: "heading", text: "Key takeaways" },
      {
        type: "paragraph",
        text: "Almost every crypto scam runs on the same engine: an unsolicited contact, an emotional hook, an urgency mechanism and a request that should have been obviously inappropriate. Learning the patterns once protects you for years, and pairing that knowledge with good key hygiene closes the remaining doors. The next guide in this series examines the broader risks that exist even when nobody is actively trying to deceive you.",
      },
      {
        type: "callout",
        variant: "disclaimer",
        title: "Educational content",
        text: "CryptoSupport provides educational information about scam patterns. It does not investigate individual cases and cannot assist with recovering funds.",
      },
    ],
  },
];
