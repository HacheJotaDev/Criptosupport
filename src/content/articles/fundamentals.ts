import { Bitcoin, Blocks, Coins } from "lucide-react";
import type { Article } from "./types";

export const fundamentalsArticles: Article[] = [
  {
    slug: "what-is-bitcoin",
    title: "What Is Bitcoin? A Beginner's Guide to Digital Scarcity",
    description:
      "Learn what Bitcoin is, where it came from, why it has value, and which misconceptions beginners should leave behind — explained in plain language.",
    category: "Basics",
    group: "Fundamentals",
    level: "Beginner",
    readingTime: 6,
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-24",
    featured: true,
    icon: Bitcoin,
    related: [
      "how-blockchain-works",
      "custodial-vs-non-custodial-wallets",
      "crypto-investment-risks",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Bitcoin is a digital currency that runs on a decentralized network of computers instead of relying on a central bank or a payment company. It was introduced in 2008 through a short technical document known as the Bitcoin white paper, published under the pseudonym Satoshi Nakamoto, and the network went live in January 2009. Since then, it has become the most widely recognized cryptocurrency and, for many people, the first point of contact with the broader world of digital assets.",
      },
      {
        type: "paragraph",
        text: "What makes Bitcoin different from the money in a banking app is not that it is digital — most national currencies are digital already — but the way it records ownership. Instead of a private ledger controlled by one institution, Bitcoin maintains a public ledger, called the blockchain, that anyone can download and verify. Every transaction ever made is written into that shared record, and thousands of independent computers keep matching copies of it.",
      },
      { type: "heading", text: "A currency built on a public ledger" },
      {
        type: "paragraph",
        text: "When someone sends bitcoin to another person, the transaction is broadcast to the network and grouped with others into a block. Special participants called miners compete to add that block to the chain by expending computing power, a process known as proof of work. Once the block is accepted, the transaction becomes part of the permanent history of the network. This design replaces the role of a traditional intermediary: the ledger itself, and the rules that govern it, are enforced by the collective network rather than by a single company.",
      },
      {
        type: "paragraph",
        text: "Ownership in Bitcoin is expressed through cryptographic key pairs. A public key, or address, works like an account number that you can share to receive funds. A private key works like the only signature that can authorize spending from that address. If you lose your private key, your coins become unreachable; if someone else obtains it, they can spend your balance. This is why wallet security is one of the most important topics in crypto education.",
      },
      { type: "heading", text: "Why bitcoin has value" },
      {
        type: "paragraph",
        text: "Like any asset, bitcoin's price comes from supply and demand. On the supply side, the protocol caps the total number of bitcoins at 21 million, and new coins enter circulation at a decreasing rate through mining rewards that are cut roughly in half every four years in an event called the halving. On the demand side, people acquire bitcoin for different reasons: some see it as a long-term store of value, some use it for international transfers, and some simply want exposure to a new technology.",
      },
      {
        type: "paragraph",
        text: "It is important to be honest about what this means in practice. Bitcoin's market price has historically moved in large cycles of sharp rises and deep drawdowns, and nothing about its supply schedule guarantees that demand will continue. Understanding scarcity is useful context, but it is not a prediction, and it is certainly not a promise of profit.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Volatility is real",
        text: "Bitcoin has experienced multiple declines of 70% or more from previous peaks during its history. Anyone learning about it should understand this characteristic before considering any financial decision.",
      },
      { type: "heading", text: "Mining, in simple terms" },
      {
        type: "paragraph",
        text: "Mining serves two purposes: it processes transactions and it secures the network. Miners gather pending transactions into blocks and race to solve a computational puzzle. The winner appends the block and receives newly issued bitcoin plus transaction fees. Because altering past records would require redoing an enormous amount of work faster than the rest of the network, the ledger becomes progressively harder to tamper with as the network grows. The same mechanism is also energy intensive, which remains one of the most discussed criticisms of proof-of-work systems.",
      },
      { type: "heading", text: "Common misconceptions worth correcting" },
      {
        type: "list",
        items: [
          "Bitcoin is not fully anonymous. It is pseudonymous: addresses have no names attached, but every movement is public and can be linked through blockchain analysis.",
          "A bitcoin is divisible. You do not need to buy a whole coin; the smallest unit, a satoshi, is one hundred millionth of a bitcoin.",
          "Transactions are irreversible. A mistake in the address means the funds are usually gone, because there is no customer support that can reverse a confirmed transfer.",
          "Bitcoin is not a company. There is no headquarters, no CEO and no product roadmap backed by a corporation; changes to the protocol require broad community consensus.",
        ],
      },
      { type: "heading", text: "Key takeaways" },
      {
        type: "paragraph",
        text: "Bitcoin introduced a way to transfer value over the internet without asking permission from a central intermediary, backed by a transparent and auditable ledger. It carries real risks — volatility, irreversibility and the responsibility of self-custody, among others — and it should be understood before it is used or bought. From here, a natural next step is to learn how the blockchain that powers it actually works, and how wallets control access to your funds.",
      },
      {
        type: "callout",
        variant: "disclaimer",
        title: "Educational content",
        text: "CryptoSupport provides general information for learning purposes only. Nothing in this guide constitutes financial, legal or tax advice, and no content on this site should be interpreted as a recommendation to buy or sell any asset.",
      },
    ],
  },
  {
    slug: "how-blockchain-works",
    title: "How Blockchain Works, Explained in Plain Language",
    description:
      "Blocks, hashes, nodes and consensus explained without jargon. Understand the technology that makes cryptocurrencies possible in about six minutes.",
    category: "Blockchain",
    group: "Fundamentals",
    level: "Beginner",
    readingTime: 7,
    publishedAt: "2026-10-21",
    featured: true,
    icon: Blocks,
    related: [
      "what-is-bitcoin",
      "what-are-stablecoins",
      "crypto-investment-risks",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "A blockchain is a shared database that is maintained by many computers at once and designed so that its history is extremely difficult to rewrite. That combination — distributed maintenance plus tamper resistance — is what makes it possible for a network of strangers who do not trust each other to agree on who owns what, without a central referee. This guide walks through the core ideas step by step.",
      },
      { type: "heading", text: "The problem blockchains try to solve" },
      {
        type: "paragraph",
        text: "Digital files are easy to copy. If you email someone a photo, you both have it. Money cannot work that way: if digital coins could be duplicated as easily as photos, anyone could spend the same coins many times. Traditional systems solve this by keeping one authoritative ledger — your bank knows your balance and decrements it when you pay. Blockchains solve it differently: they replicate the ledger across thousands of computers and use cryptography and consensus rules so that only valid transactions are ever appended to it.",
      },
      { type: "heading", text: "Blocks, transactions and hashes" },
      {
        type: "paragraph",
        text: "Transactions are broadcast to the network, validated by participating nodes, and then grouped into blocks. Each block contains a batch of transactions, a timestamp, and two special references: the cryptographic hash of the previous block, and the hash of its own contents. A hash is the output of a one-way mathematical function — feed it any data and it produces a fixed-length fingerprint that changes completely if even one character of the input changes.",
      },
      {
        type: "paragraph",
        text: "Because every block carries the fingerprint of the block before it, the blocks form a chain in which each link depends on all previous links. Editing an old transaction would change that block's hash, which would break the reference in the next block, which would cascade through the entire chain. Recomputing all of that faster than the honest network continues to extend the chain is, in practice, prohibitively expensive on large networks.",
      },
      { type: "heading", text: "Consensus: agreeing without a boss" },
      {
        type: "paragraph",
        text: "A shared ledger is only useful if everyone agrees on its current state. Blockchains reach that agreement through consensus mechanisms. Bitcoin uses proof of work, where miners expend computing power to earn the right to add blocks, making history costly to rewrite. Many newer networks use proof of stake, where participants lock up tokens as collateral and are selected to validate blocks, losing part of their stake if they cheat. The details differ, but the goal is the same: make honest behavior the most profitable strategy for the majority of participants.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Nodes keep the receipts",
        text: "Anybody can run a node — a program that stores the full blockchain and checks every transaction and block against the network's rules. Thousands of independent nodes are what turn a white paper into a resilient system.",
      },
      { type: "heading", text: "What immutability means (and what it doesn't)" },
      {
        type: "paragraph",
        text: "When people say a blockchain is immutable, they mean that confirmed history is practically impossible to alter without detection, not that it is theoretically unchangeable forever. Immutability also cuts both ways: a transaction sent to the wrong address cannot be recalled, because there is no administrator with an undo button. Immutability is a feature for censorship resistance and auditing, and a cost when mistakes happen.",
      },
      { type: "heading", text: "Public chains, private chains and limitations" },
      {
        type: "paragraph",
        text: "Public blockchains like Bitcoin and Ethereum are permissionless: anyone can read the ledger, submit transactions and help verify the network. Private or permissioned blockchains restrict participation to known entities, trading openness for control and throughput. Public chains face real engineering constraints: limited transactions per second, fees that rise under congestion, and user experiences that remain less forgiving than traditional banking. These limitations are actively researched, but they have not disappeared.",
      },
      { type: "heading", text: "Key takeaways" },
      {
        type: "list",
        items: [
          "A blockchain is a distributed ledger replicated across many independent computers.",
          "Hashes link blocks together, making historical edits detectable and impractical.",
          "Consensus mechanisms — proof of work, proof of stake and others — let a network agree on one shared truth without a central authority.",
          "The same properties that make blockchains resistant to tampering make user mistakes permanent.",
          "The technology has real limitations in speed, cost and usability that every learner should understand.",
        ],
      },
      {
        type: "callout",
        variant: "disclaimer",
        title: "Educational content",
        text: "This guide explains technology, not investment opportunities. CryptoSupport does not provide financial advice, and understanding how a system works is not a signal to put money into it.",
      },
    ],
  },
  {
    slug: "what-are-stablecoins",
    title: "What Are Stablecoins and How Do They Stay Stable?",
    description:
      "Discover how stablecoins peg their value to assets like the US dollar, the three main designs behind them, and the risks that come with each approach.",
    category: "Stablecoins",
    group: "Fundamentals",
    level: "Beginner",
    readingTime: 6,
    publishedAt: "2026-10-22",
    featured: false,
    icon: Coins,
    related: [
      "crypto-investment-risks",
      "how-blockchain-works",
      "how-to-spot-crypto-scams",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "A stablecoin is a cryptocurrency designed to keep a stable value by tracking the price of a reference asset, most commonly the US dollar. The idea is to combine the fast, borderless transferability of blockchain transactions with the predictable purchasing power of traditional money. In practice, stablecoins are the plumbing of much of the crypto economy: traders move between volatile assets and stable ones, and people in countries with unstable local currencies use dollar-pegged tokens for savings and payments.",
      },
      { type: "heading", text: "Fiat-backed stablecoins" },
      {
        type: "paragraph",
        text: "The most common design is the simplest to describe: a company issues tokens and holds equivalent reserves — cash and short-term government securities — in traditional accounts. One token is supposed to represent one dollar sitting in a reserve. Users can typically redeem tokens for the underlying currency, and that redemption promise is what anchors the market price. The critical questions with this model are transparency and trust: how good are the reserves, who audits them, and how quickly can redemptions be honored under stress? Large issuers publish regular attestations, but an attestation is a snapshot review, not a full audit, so understanding the difference matters.",
      },
      { type: "heading", text: "Crypto-collateralized stablecoins" },
      {
        type: "paragraph",
        text: "A second design backs stablecoins with other cryptocurrencies rather than with bank money. Because crypto assets are volatile, these systems require overcollateralization: to mint 100 dollars' worth of stablecoin, users may need to lock up 150 or 200 dollars' worth of collateral in smart contracts. If the collateral's price falls too far, the system automatically sells part of it to maintain the peg. This model removes reliance on traditional banks and makes reserves visible on-chain, but it introduces its own complexity: rapid market crashes can stress liquidation mechanisms, and the code itself becomes a point of failure.",
      },
      { type: "heading", text: "Algorithmic stablecoins" },
      {
        type: "paragraph",
        text: "The third family tried to maintain the peg through incentives and market arbitrage alone, expanding or contracting token supply without full reserve backing. History has been unkind to this approach. The collapse of TerraUSD (UST) in May 2022 is the canonical example: within days, a design that had grown to tens of billions of dollars in circulation lost its peg entirely and entered a death spiral, wiping out enormous value and triggering a broader market downturn. The lesson is not that every algorithmic design will fail, but that a peg without credible, verifiable backing depends entirely on confidence — and confidence can evaporate faster than any mechanism can react.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Depeg is the key risk word",
        text: "Depegging means a stablecoin trades away from its reference value — for example, one dollar-token buying 97 cents. Small, temporary deviations are normal in markets; large or persistent ones signal stress in reserves, redemption ability or confidence.",
      },
      { type: "heading", text: "What people actually use them for" },
      {
        type: "list",
        items: [
          "Moving value across borders in minutes instead of days, often at lower cost than legacy remittance rails.",
          "Holding dollar-equivalent balances where access to USD bank accounts is difficult or expensive.",
          "Bridging between volatile crypto assets without leaving the blockchain ecosystem.",
          "Settling transactions in on-chain applications where a predictable unit of account is needed.",
        ],
      },
      { type: "heading", text: "Risks to understand before relying on any of them" },
      {
        type: "paragraph",
        text: "Stablecoins reduce exposure to crypto price swings, but they are not risk-free. Counterparty risk means the issuer or the custodian of reserves could fail or mismanage assets. Regulatory risk is significant: stablecoins sit at the intersection of banking and crypto, and rules differ by jurisdiction and are still evolving. Technical risk applies to the smart contracts that manage collateral. And transparency risk — not knowing exactly what backs a token — has historically been where the worst outcomes originate. Reading an issuer's reserve reports and redemption policies is part of basic due diligence.",
      },
      { type: "heading", text: "Key takeaways" },
      {
        type: "paragraph",
        text: "Stablecoins are tools, not magic. Their stability comes from a mechanism — reserves, collateral or incentives — and every mechanism has failure modes. Fiat-backed designs dominate because their promise is easiest to verify; crypto-collateralized designs trade bank reliance for code reliance; and history shows what happens when a peg leans mostly on confidence. Treat any stablecoin as a claim on someone else's arrangements, and evaluate the arrangements before trusting the claim.",
      },
      {
        type: "callout",
        variant: "disclaimer",
        title: "Educational content",
        text: "CryptoSupport provides general information for learning purposes only. This guide does not evaluate any specific product for purchase and does not constitute financial advice.",
      },
    ],
  },
];
