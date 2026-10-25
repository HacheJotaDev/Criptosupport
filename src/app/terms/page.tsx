import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  BookOpenCheck,
  FileWarning,
  Gavel,
  Link2,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern the use of CryptoSupport, including its educational purpose disclaimer: content on this site is not financial advice.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use | CryptoSupport",
    description:
      "Educational purpose disclaimer, warranties, liability and acceptable use of CryptoSupport.",
    url: "/terms",
  },
};

const sections = [
  {
    icon: BookOpenCheck,
    title: "1. Purpose of this website",
    content: (
      <p>
        CryptoSupport is an educational website about cryptocurrencies,
        blockchain technology and digital security. Its only purpose is to
        explain concepts so that visitors can understand this space better. The
        site is offered free of charge, without registration, and its content
        is informational in nature.
      </p>
    ),
  },
  {
    icon: FileWarning,
    title: "2. Not financial advice",
    content: (
      <>
        <p>
          All content published on CryptoSupport — including guides,
          explanations, examples and references to specific projects or
          historical events — is provided for educational and informational
          purposes only. Nothing on this site constitutes financial,
          investment, trading, legal, accounting or tax advice, nor a
          recommendation or solicitation to buy, sell or hold any asset,
          product or service.
        </p>
        <p>
          Crypto assets are volatile and involve substantial risk, including
          the total loss of your capital. Past behavior of any market or asset
          does not guarantee future results. Before making any financial
          decision, you should consult qualified professionals who can consider
          your personal circumstances, and you should never rely solely — or
          even primarily — on educational material such as ours.
        </p>
      </>
    ),
  },
  {
    icon: BadgeCheck,
    title: "3. Accuracy and availability",
    content: (
      <p>
        We work to keep the content accurate, current and understandable, and
        we correct errors as they are reported. Nevertheless, the content is
        provided "as is" and "as available", without warranties of any kind,
        express or implied, including accuracy, completeness, merchantability
        or fitness for a particular purpose. The site may be modified,
        interrupted or discontinued at any time.
      </p>
    ),
  },
  {
    icon: ShieldAlert,
    title: "4. Limitation of liability",
    content: (
      <p>
        To the maximum extent permitted by applicable law, CryptoSupport and
        its maintainers shall not be liable for any direct, indirect,
        incidental, consequential or punitive loss arising from the use of, or
        inability to use, this website or its content — including, without
        limitation, any financial loss related to decisions made after reading
        educational material. You are solely responsible for your own
        decisions.
      </p>
    ),
  },
  {
    icon: Link2,
    title: "5. External links",
    content: (
      <p>
        Where this site links to third-party resources, those links are
        provided for context and further learning only. We do not control and
        are not responsible for the content, security, availability or privacy
        practices of external websites. A link does not imply endorsement.
      </p>
    ),
  },
  {
    icon: Scale,
    title: "6. Acceptable use",
    content: (
      <p>
        You may read, quote and share the content for personal, non-commercial
        educational purposes, provided attribution is given and the educational
        disclaimer is preserved. You may not reuse the content to train
        commercial recommendation systems, present it as your own work, use it
        to promote financial products, or employ the site for unlawful
        activities.
      </p>
    ),
  },
  {
    icon: Gavel,
    title: "7. Changes and contact",
    content: (
      <p>
        These terms may be updated to reflect changes in the site; the date
        below indicates the current version. If you have questions about these
        terms, or wish to report a potential misuse of our content, please
        write to{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-semibold text-blue-700 underline underline-offset-4"
        >
          {site.email}
        </a>{" "}
        or visit the{" "}
        <Link
          href="/contact"
          className="font-semibold text-blue-700 underline underline-offset-4 hover:text-violet-700"
        >
          contact page
        </Link>
        . See also our{" "}
        <Link
          href="/privacy"
          className="font-semibold text-blue-700 underline underline-offset-4 hover:text-violet-700"
        >
          privacy policy
        </Link>
        .
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="The rules of the road for using CryptoSupport — including the disclaimer that matters most: everything here is education, not financial advice."
      >
        <p className="mt-6 text-sm text-slate-500">Last updated: October 25, 2026</p>
      </PageHeader>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 text-sm leading-relaxed text-violet-900">
              <span className="font-bold">The short version:</span> use the
              site to learn, do your own research, and never treat educational
              content as a personal recommendation. Crypto assets can lose all
              of their value, and only you are responsible for your decisions.
            </div>
          </Reveal>

          <div className="mt-12 space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Reveal key={section.title} delay={Math.min(index * 60, 180)}>
                  <section aria-labelledby={`terms-${index}`}>
                    <h2
                      id={`terms-${index}`}
                      className="flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 pl-0 text-base leading-relaxed text-slate-600 sm:pl-13">
                      {section.content}
                    </div>
                  </section>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
