import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  /** Optional id for the h2, useful for anchor links. */
  id?: string;
}) {
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow",
            isLight
              ? "border-blue-200 bg-blue-50 text-blue-700"
              : "border-white/10 bg-white/5 text-brand-blue-soft",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl",
          isLight ? "text-slate-900" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            isLight ? "text-slate-600" : "text-slate-400",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
