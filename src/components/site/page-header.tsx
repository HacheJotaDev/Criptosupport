import { cn } from "@/lib/utils";

/**
 * Consistent page header for inner pages: dark navy backdrop with a faint
 * grid and soft blue/violet glows.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden glow-blue glow-violet", className)}>
      <div className="absolute inset-0 bg-grid-faint" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="eyebrow border-white/10 bg-white/5 text-brand-blue-soft">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
