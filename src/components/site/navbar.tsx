"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { mainNav } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes (deferred to the next
  // frame to avoid a synchronous setState inside the effect body).
  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-brand-navy-deep/85 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Logo gradientId="cs-grad-nav" />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/learn" className="btn-primary ml-3 !px-5 !py-2.5">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Explore guides
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/5 bg-brand-navy-deep/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto w-full max-w-6xl space-y-1 px-4 py-4 sm:px-6">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/learn"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
                aria-label="Explore the learning guides"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Explore guides
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
