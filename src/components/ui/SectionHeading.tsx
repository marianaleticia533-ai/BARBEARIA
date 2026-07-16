import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-gold" : "text-gold-deep"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl leading-tight sm:text-4xl",
          tone === "dark" ? "text-cream" : "text-[--color-text-on-light]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-cream/70" : "text-[--color-text-on-light-muted]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
