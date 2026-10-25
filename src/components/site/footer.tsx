import Link from "next/link";
import { Mail, Scale } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { footerNav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-brand-navy-deep">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo gradientId="cs-grad-footer" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {site.description}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-brand-blue-soft" aria-hidden="true" />
              {site.email}
            </a>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-7">
            {footerNav.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {column.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
            <Scale className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>
              All content on CryptoSupport is provided for educational purposes
              only and does not constitute financial, investment, legal or tax
              advice. Crypto assets are volatile and involve risk, including the
              total loss of capital. Always do your own research.
            </span>
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} {site.name}. Educational project.
            </p>
            <p className="text-sm text-slate-500">
              <Link href="/privacy" className="transition-colors hover:text-slate-300">
                Privacy
              </Link>
              <span className="mx-2 text-slate-700">·</span>
              <Link href="/terms" className="transition-colors hover:text-slate-300">
                Terms
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
