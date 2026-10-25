export const site = {
  name: "CryptoSupport",
  tagline: "Understand Crypto. Make Informed Decisions.",
  description:
    "CryptoSupport is a free educational resource that explains cryptocurrency, blockchain technology and digital security in clear, plain language — without hype and without financial advice.",
  url: "https://criptosupport.xyz",
  email: "hachejota28@gmail.com",
  language: "en",
} as const;

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  {
    heading: "Learn",
    links: [
      { href: "/learn", label: "All guides" },
      { href: "/learn/what-is-bitcoin", label: "What is Bitcoin" },
      { href: "/learn/how-blockchain-works", label: "How blockchain works" },
      { href: "/learn/what-are-stablecoins", label: "What are stablecoins" },
    ],
  },
  {
    heading: "Security",
    links: [
      {
        href: "/learn/custodial-vs-non-custodial-wallets",
        label: "Custodial vs non-custodial wallets",
      },
      {
        href: "/learn/how-to-protect-private-keys",
        label: "Protect your private keys",
      },
      { href: "/learn/how-to-spot-crypto-scams", label: "Spot crypto scams" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
] as const;
