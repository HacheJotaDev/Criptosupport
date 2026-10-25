# CryptoSupport

**Understand Crypto. Make Informed Decisions.**

CryptoSupport is a free educational website about cryptocurrencies, blockchain technology and digital security. It explains the fundamentals — Bitcoin, blockchain, stablecoins, wallets, key protection, scam patterns and investment risks — in clear, plain language, with a strict educational (non-advisory) approach.

Live at [criptosupport.xyz](https://criptosupport.xyz) once deployed.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS 4
- Radix UI primitives (checkbox, label, slot) + lucide-react icons
- No database, no authentication, no backend endpoints — fully static output

## Pages

| Route | Description |
| --- | --- |
| `/` | Home: hero, featured guides, beginner learning path, security section, newsletter (visual demo) |
| `/learn` | All educational guides, grouped by theme |
| `/learn/[slug]` | 7 statically generated guides (Bitcoin, blockchain, stablecoins, wallets, private keys, scams, risks) |
| `/about` | Project mission and editorial principles |
| `/contact` | Contact information |
| `/privacy` | Privacy policy reflecting the site's real (no-collection) practices |
| `/terms` | Terms of use with the educational-purpose / not-financial-advice disclaimer |

## The newsletter form is a visual demo

The "CryptoSupport Briefing" form on the home page is **exclusively a front-end demonstration**. It does not store, send or process any data: no API calls, no endpoints, no localStorage, no cookies, no analytics. On submit it clearly states that subscriptions are not enabled yet — it never fakes a successful subscription.

## Getting started

```bash
# install dependencies (npm, pnpm, bun or yarn all work)
bun install

# run the development server
bun run dev

# lint
bun run lint

# production build
bun run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment (Vercel)

1. Push this repository to GitHub (already done if you are reading this there).
2. In [Vercel](https://vercel.com), import the repository — the framework preset (Next.js) is detected automatically; no environment variables are required.
3. Deploy, then add the custom domain `criptosupport.xyz` in *Project → Settings → Domains* and configure the DNS records at your registrar as instructed by Vercel. HTTPS is provisioned automatically.

## Project structure

```
src/
├── app/                  # App Router pages, sitemap, robots, OG image
│   ├── learn/[slug]/     # Statically generated guides
│   └── ...
├── components/
│   ├── site/             # Navbar, footer, cards, newsletter form, etc.
│   └── ui/               # Minimal UI primitives (button, input, checkbox, label)
├── content/
│   └── articles/         # All guide content as typed structured data
└── lib/                  # Utilities
```

## Editorial policy

All content is original and educational. Nothing on this site constitutes financial, investment, legal or tax advice, and no content should be interpreted as a recommendation to buy or sell any asset. The site does not collect personal data.
