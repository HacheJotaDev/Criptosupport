import Link from "next/link";
import { Compass, Home } from "lucide-react";
import { LogoMark } from "@/components/site/logo";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden glow-blue glow-violet">
      <div className="absolute inset-0 bg-grid-faint" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <LogoMark gradientId="cs-grad-404" className="h-16 w-16" />
        <p className="text-gradient mt-8 text-6xl font-bold sm:text-7xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          This page doesn't exist
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
          The link may be outdated or the address may contain a typo. The good
          news: every educational guide is one click away.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link href="/learn" className="btn-secondary">
            <Compass className="h-4 w-4" aria-hidden="true" />
            Explore the guides
          </Link>
        </div>
      </div>
    </div>
  );
}
