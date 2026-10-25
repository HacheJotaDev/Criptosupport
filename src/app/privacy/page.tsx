import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, Database, Mail, Server, ShieldCheck, UserX } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CryptoSupport handles information: no accounts, no tracking cookies, no analytics and no data collection from the newsletter demo form.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | CryptoSupport",
    description:
      "No accounts, no tracking cookies, no analytics and no data collection from the newsletter demo form.",
    url: "/privacy",
  },
};

const sections = [
  {
    icon: Database,
    title: "Information we do not collect",
    content: (
      <>
        <p>
          CryptoSupport is a static educational website. We do not require
          accounts, we do not ask for personal information to read the content,
          and we do not build profiles of our visitors. The site does not embed
          advertising networks, social media tracking pixels or behavioral
          analytics services.
        </p>
      </>
    ),
  },
  {
    icon: Cookie,
    title: "Cookies and local storage",
    content: (
      <p>
        CryptoSupport does not set advertising, analytics or tracking cookies,
        and it does not use browser localStorage or sessionStorage to store
        information about you. Any interaction you perform on the site — for
        example, opening the mobile menu — happens in your browser's memory
        only and disappears when you leave the page.
      </p>
    ),
  },
  {
    icon: Mail,
    title: "The newsletter form",
    content: (
      <>
        <p>
          The newsletter section on the home page, titled "The CryptoSupport
          Briefing", is a front-end demonstration only. It does not store,
          transmit or process the email addresses or consent selections entered
          into it: no API request is made, no database exists and no third
          party receives that information.
        </p>
        <p>
          Because of this, the form cannot be used to subscribe to real
          communications, and any text entered into it is permanently discarded
          when you navigate away. When a real newsletter is launched in the
          future, this policy will be updated before any data processing
          begins, and the form will clearly explain what is collected and why.
        </p>
      </>
    ),
  },
  {
    icon: Server,
    title: "Technical processing by our hosting provider",
    content: (
      <p>
        Like virtually every website, CryptoSupport is served through a hosting
        provider (Vercel Inc.). When you request a page, the provider's
        infrastructure processes standard technical data — such as your IP
        address, the requested URL, the browser type and the date and time —
        for security, integrity and delivery purposes, in line with its own
        privacy policy. This data is processed by the hosting provider, not by
        CryptoSupport, and we do not use it to identify visitors.
      </p>
    ),
  },
  {
    icon: UserX,
    title: "Children's privacy",
    content: (
      <p>
        The content is written for a general audience and the site is not
        directed at children under 13. Since we do not collect personal
        information, we do not knowingly process children's data. If you
        believe otherwise, contact us and we will investigate.
      </p>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Contact and changes",
    content: (
      <>
        <p>
          If you contact us by email at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-blue-700 underline underline-offset-4"
          >
            {site.email}
          </a>
          , we will use your address and message exclusively to respond to your
          inquiry. We do not add contacts to mailing lists and we do not share
          correspondence with third parties.
        </p>
        <p>
          This policy may be updated to reflect changes in the site. The date
          below indicates the last revision. Continued use of the site after a
          change constitutes acceptance of the updated policy.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="The honest summary: CryptoSupport is a static educational website that does not collect, store or process your personal data. This page explains exactly what that means."
      >
        <p className="mt-6 text-sm text-slate-500">
          Last updated: October 25, 2026
        </p>
      </PageHeader>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-sm leading-relaxed text-blue-900">
              <span className="font-bold">In one sentence:</span> reading
              CryptoSupport leaves no trace with us. We do not know who you
              are, we do not want to know, and the site is designed so that it
              could not know even if it wanted to.
            </div>
          </Reveal>

          <div className="mt-12 space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Reveal key={section.title} delay={Math.min(index * 60, 180)}>
                  <section aria-labelledby={`privacy-${index}`}>
                    <h2
                      id={`privacy-${index}`}
                      className="flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
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

          <Reveal>
            <p className="mt-14 text-base leading-relaxed text-slate-600">
              Questions about this policy? Visit the{" "}
              <Link
                href="/contact"
                className="font-semibold text-blue-700 underline underline-offset-4 hover:text-violet-700"
              >
                contact page
              </Link>{" "}
              and write to us. See also our{" "}
              <Link
                href="/terms"
                className="font-semibold text-blue-700 underline underline-offset-4 hover:text-violet-700"
              >
                terms of use
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
