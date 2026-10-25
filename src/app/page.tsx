import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  KeyRound,
  Layers,
  Lightbulb,
  Lock,
  MailCheck,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { ArticleCard } from "@/components/site/article-card";
import { NewsletterForm } from "@/components/site/newsletter-form";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { getFeaturedArticles } from "@/content/articles";
import { site } from "@/content/site";

const beginnerPath = [
  {
    step: "01",
    icon: Lightbulb,
    title: "Understand Bitcoin",
    text: "What it is, where it came from and why its design is different from any payment system you have used.",
    href: "/learn/what-is-bitcoin",
  },
  {
    step: "02",
    icon: Layers,
    title: "See how blockchain works",
    text: "Blocks, hashes and consensus explained without jargon — the engine behind every cryptocurrency.",
    href: "/learn/how-blockchain-works",
  },
  {
    step: "03",
    icon: Wallet,
    title: "Choose a wallet wisely",
    text: "Custodial vs non-custodial: learn who really controls the funds in each model before you pick one.",
    href: "/learn/custodial-vs-non-custodial-wallets",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Learn to stay safe",
    text: "Recognize the scam patterns that cause most losses and protect your keys from day one.",
    href: "/learn/how-to-spot-crypto-scams",
  },
];

const securityPoints = [
  {
    icon: KeyRound,
    title: "Keys are everything",
    text: "Whoever holds the private key controls the funds. Learn to back up your seed phrase before you need to.",
    href: "/learn/how-to-protect-private-keys",
  },
  {
    icon: Lock,
    title: "No undo button",
    text: "Crypto transactions are irreversible. A small test transaction is the cheapest insurance in crypto.",
    href: "/learn/custodial-vs-non-custodial-wallets",
  },
  {
    icon: ShieldCheck,
    title: "Patterns beat luck",
    text: "Almost every scam follows the same script. Learning the patterns once protects you for years.",
    href: "/learn/how-to-spot-crypto-scams",
  },
];

export default function HomePage() {
  const featured = getFeaturedArticles();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden glow-blue glow-violet">
        <div className="absolute inset-0 bg-grid-faint" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow border-white/10 bg-white/5 text-brand-blue-soft">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Free educational platform
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
                Understand Crypto.{" "}
                <span className="text-gradient">Make Informed Decisions.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
                {site.name} explains cryptocurrency, blockchain and digital
                security in clear, plain language — no hype, no jargon and no
                financial advice. Just the knowledge you need to navigate this
                space safely.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/learn" className="btn-primary">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Explore the guides
                </Link>
                <Link href="/learn/what-is-bitcoin" className="btn-secondary">
                  Start with the basics
                  <ArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-brand-blue-soft" aria-hidden="true" />
                  Beginner friendly
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-brand-violet-soft" aria-hidden="true" />
                  Security first
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MailCheck className="h-4 w-4 text-brand-blue-soft" aria-hidden="true" />
                  No sign-up required
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Featured guides (light) ──────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24" aria-labelledby="featured-heading">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              id="featured-heading"
              eyebrow="Featured guides"
              tone="light"
              title="Start with the essentials"
              description="Hand-picked guides that cover what most beginners need first: the core concepts, the technology and the dangers."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((article, index) => (
              <Reveal key={article.slug} delay={index * 120} className="h-full">
                <ArticleCard article={article} tone="light" className="h-full" />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50"
              >
                View all guides
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Beginner path (dark) ─────────────────────────────────────── */}
      <section
        id="beginners"
        className="relative overflow-hidden py-20 sm:py-24"
        aria-labelledby="beginners-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-navy-deep via-brand-navy to-brand-navy-deep"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              id="beginners-heading"
              eyebrow="Learning path"
              tone="dark"
              title="New to crypto? Follow the path"
              description="Four short guides in the right order. Read them in one sitting and you will understand more than most people who have been in the space for months."
            />
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beginnerPath.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal as="li" key={item.step} delay={index * 120} className="h-full">
                  <Link
                    href={item.href}
                    className="card-dark group flex h-full flex-col p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 text-brand-blue-soft transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-2xl font-bold text-white/10 transition-colors group-hover:text-brand-blue/40">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                      {item.text}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-soft opacity-0 transition-all duration-200 group-hover:opacity-100">
                      Read now
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Security block (light) ───────────────────────────────────── */}
      <section
        className="bg-slate-50 py-20 sm:py-24"
        aria-labelledby="security-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                id="security-heading"
                eyebrow="Security first"
                tone="light"
                title="In crypto, security is not optional"
                description="There is no password reset and no chargeback. The technology is safe when used correctly — the users are the attack surface. These three ideas prevent most real-world losses."
              />
              <div className="mt-8 space-y-4">
                {securityPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <Link
                      key={point.title}
                      href={point.href}
                      className="group flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-violet-50 group-hover:text-violet-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-bold text-slate-900">
                          {point.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                          {point.text}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </Reveal>

            {/* Visual card */}
            <Reveal delay={150}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1022] via-[#101a3a] to-[#1b1440] p-8 shadow-2xl shadow-blue-950/30 sm:p-10">
                <div className="absolute inset-0 bg-grid-faint opacity-60" aria-hidden="true" />
                <div
                  className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-violet/25 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-blue/25 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet text-white shadow-lg shadow-blue-500/30">
                    <ShieldCheck className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    The self-custody checklist
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    If you hold your own keys, these habits are non-negotiable.
                  </p>
                  <ul className="mt-7 space-y-4">
                    {[
                      "Seed phrase on paper or metal — never in photos, clouds or chats",
                      "Backups in at least two separate physical locations",
                      "Hardware wallet for any meaningful long-term holding",
                      "Small test transaction before every first transfer",
                      "Zero tolerance: no legitimate service ever asks for your seed",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue-soft">
                          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/learn/how-to-protect-private-keys"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-soft transition-colors hover:text-white"
                  >
                    Read the full security guide
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Newsletter (dark gradient) ───────────────────────────────── */}
      <section
        className="relative overflow-hidden glow-blue glow-violet py-20 sm:py-24"
        aria-labelledby="newsletter-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-navy-deep via-[#0d1430] to-brand-navy-deep"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                id="newsletter-heading"
                eyebrow="Newsletter"
                tone="dark"
                title="The CryptoSupport Briefing"
                description="A periodic selection of educational resources: new guides, security alerts explained in plain language, and concepts worth revisiting — curated, never promotional."
              />
              <ul className="mt-7 space-y-3 text-sm text-slate-400">
                {[
                  "New guides and updates, explained simply",
                  "Security warnings when relevant patterns emerge",
                  "No spam, no hype, unsubscribe concept built in",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <MailCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-soft" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="card-dark p-7 sm:p-8">
                <NewsletterForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
