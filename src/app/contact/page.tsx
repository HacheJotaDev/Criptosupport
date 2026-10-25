import type { Metadata } from "next";
import Link from "next/link";
import { Clock, FilePen, Handshake, Lightbulb, Mail } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the CryptoSupport team by email for feedback, corrections, topic suggestions or general questions about the educational project.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact CryptoSupport",
    description:
      "Get in touch with the CryptoSupport team by email for feedback, corrections or suggestions.",
    url: "/contact",
  },
};

const contactReasons = [
  {
    icon: FilePen,
    title: "Corrections",
    text: "Found a technical error or an unclear explanation? Pointing it out helps every future reader. Include the guide and the section if you can.",
  },
  {
    icon: Lightbulb,
    title: "Topic suggestions",
    text: "Is there a concept, tool or risk you wish someone had explained to you before? Suggest it — reader requests steer the content roadmap.",
  },
  {
    icon: Handshake,
    title: "Feedback",
    text: "Tell us what is useful, what is missing and what could be simpler. Honest feedback is treated as a gift, not a complaint.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="The best way to reach CryptoSupport is by email. Whether you spotted an error, want to suggest a topic or simply have a question about the project, every message is read."
      />

      <section className="bg-white py-16 sm:py-20" aria-labelledby="email-heading">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Email card */}
            <Reveal>
              <h2
                id="email-heading"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              >
                Email
              </h2>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-7">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Contact address
                </p>
                <a
                  href={`mailto:${site.email}?subject=CryptoSupport%20—%20website%20contact`}
                  className="mt-3 block text-xl font-bold text-blue-700 underline-offset-4 transition-colors hover:text-violet-700 hover:underline sm:text-2xl"
                >
                  {site.email}
                </a>
                <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                  <span>
                    Email is reviewed on a best-effort basis. Please avoid
                    sending sensitive information such as seed phrases,
                    passwords or wallet addresses — no legitimate educational
                    project will ever ask for them.
                  </span>
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
                <span className="font-bold">Important:</span> we cannot provide
                financial, legal or tax advice, review investment
                opportunities, or help recover funds from transactions or
                scams. Messages asking for those will not receive a technical
                response — see our guides on{" "}
                <Link
                  href="/learn/how-to-spot-crypto-scams"
                  className="font-semibold underline underline-offset-4"
                >
                  spotting scams
                </Link>{" "}
                and{" "}
                <Link
                  href="/learn/crypto-investment-risks"
                  className="font-semibold underline underline-offset-4"
                >
                  investment risks
                </Link>{" "}
                instead.
              </div>
            </Reveal>

            {/* Reasons */}
            <Reveal delay={120}>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                What to write about
              </h2>
              <div className="mt-6 space-y-4">
                {contactReasons.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={reason.title}
                      className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-900">{reason.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {reason.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-500">
                If your question is about privacy or how this website handles
                (or rather, does not handle) data, the{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-blue-700 underline-offset-4 hover:underline"
                >
                  privacy policy
                </Link>{" "}
                describes the site's actual practices in detail.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
