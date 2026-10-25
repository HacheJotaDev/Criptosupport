import type { Metadata } from "next";
import Link from "next/link";
import { Compass, GraduationCap, HeartHandshake, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "CryptoSupport is an independent educational project about cryptocurrency, blockchain technology and digital security — free, plain-language and free of financial advice.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About CryptoSupport",
    description:
      "An independent educational project about cryptocurrency, blockchain technology and digital security.",
    url: "/about",
  },
};

const principles = [
  {
    icon: GraduationCap,
    title: "Education first",
    text: "Every guide is written to genuinely teach, not to sell. We explain concepts from zero, define the jargon and show both the benefits and the failure modes of the technology.",
  },
  {
    icon: ShieldCheck,
    title: "Security awareness",
    text: "The most expensive mistakes in crypto are preventable. We give security topics the same depth as market topics, because understanding risk is part of understanding crypto.",
  },
  {
    icon: Compass,
    title: "Independence",
    text: "We do not sell courses, tokens or signals, and we do not accept paid promotions of platforms or assets. Our only interest is that readers understand what they are dealing with.",
  },
  {
    icon: HeartHandshake,
    title: "Honest limits",
    text: "We do not predict prices, we do not promise returns and we clearly separate what is known from what is speculation. When something is a risk, we say so plainly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the project"
        title="A digital education project about crypto and security"
        description={`${site.name} exists to close the knowledge gap between the people building blockchain technology and the millions of people who interact with it — or are thinking about it — without anyone having explained the basics to them.`}
      />

      {/* Mission */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="mission-heading">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2
              id="mission-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Why CryptoSupport exists
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                Cryptocurrencies and blockchain technology reached mainstream
                attention long before quality education about them did. As a
                result, millions of people form opinions — and sometimes make
                financial decisions — based on social media hype, marketing
                material or outright scams, rather than on an honest
                understanding of how these systems work and where they fail.
              </p>
              <p>
                {site.name} is our answer to that gap: a free, independent
                library of guides written in plain language, covering the
                fundamentals of Bitcoin and blockchain, the mechanics of
                stablecoins, the practical realities of wallets and key
                management, the patterns behind the most common scams, and an
                honest map of the risks involved with crypto assets.
              </p>
              <p>
                The project is deliberately small and focused. There are no
                accounts, no paywalls and no data collection: everything on the
                site is open, and the few interactive elements — like the
                newsletter form on the home page — are transparent
                demonstrations rather than data collection tools.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="principles-heading">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2
              id="principles-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              How we approach every guide
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Four principles shape the content, the tone and the limits of
              this project.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal key={principle.title} delay={index * 100} className="h-full">
                  <div className="card-light h-full p-6 sm:p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 text-blue-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {principle.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we are not */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="limits-heading">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2
              id="limits-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              What this project is not
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-6 space-y-4">
              {[
                "It is not a source of financial advice. Nothing on the site recommends buying, selling or holding any asset, and no content should be read as a prediction.",
                "It is not affiliated with any exchange, wallet provider or project. Where we mention platforms or historical events, it is purely to illustrate concepts and risks.",
                "It is not a trading course, a signal group or an investment community, and it will not become one.",
                "It is not finished. New guides are added over time, and existing ones are revised as the technology and the regulatory landscape evolve.",
              ].map((item) => (
                <li key={item} className="flex gap-3.5">
                  <span
                    className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-violet-500"
                    aria-hidden="true"
                  />
                  <p className="leading-relaxed text-slate-600">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <p className="leading-relaxed text-blue-900">
                Want to suggest a topic, report an error or share feedback?{" "}
                <Link
                  href="/contact"
                  className="font-semibold underline underline-offset-4 hover:text-blue-700"
                >
                  Get in touch
                </Link>{" "}
                — real corrections and suggestions are welcome and are what
                keeps the library improving.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
