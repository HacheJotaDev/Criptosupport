import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * CryptoSupport brand mark: a shield (security) framing a stylized "C" coin.
 * Rendered inline so it inherits crispness on every screen density.
 */
export function LogoMark({
  gradientId = "cs-grad",
  className,
}: {
  gradientId?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="4"
          y1="4"
          x2="36"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4C7DFF" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <path
        d="M20 2.6 34.4 8v11.1c0 8.5-5.8 14.4-14.4 18.1C11.4 33.5 5.6 27.6 5.6 19.1V8L20 2.6Z"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24.6 15.4a6 6 0 1 0 0 7.2"
        stroke={`url(#${gradientId})`}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="26.2" cy="19" r="1.4" fill="#8B5CF6" />
    </svg>
  );
}

export function Logo({
  gradientId = "cs-grad",
  className,
  markClassName,
}: {
  gradientId?: string;
  className?: string;
  markClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="CryptoSupport — home"
      className={cn(
        "group inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring rounded-lg",
        className,
      )}
    >
      <LogoMark
        gradientId={gradientId}
        className={cn(
          "transition-transform duration-300 group-hover:scale-105",
          markClassName,
        )}
      />
      <span className="text-lg font-bold tracking-tight text-white">
        Crypto<span className="text-gradient">Support</span>
      </span>
    </Link>
  );
}
