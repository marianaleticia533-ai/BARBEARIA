import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  icon?: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-medium tracking-wide transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px]";

const variants = {
  primary:
    "bg-gold text-ink hover:bg-gold-soft focus-visible:ring-gold focus-visible:ring-offset-ink shadow-[0_8px_24px_-8px_rgba(200,155,60,0.6)]",
  secondary:
    "bg-transparent border border-cream/40 text-cream hover:bg-cream/10 focus-visible:ring-cream focus-visible:ring-offset-ink",
  ghost:
    "bg-ink text-cream hover:bg-ink-2 focus-visible:ring-gold-deep focus-visible:ring-offset-cream",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  icon,
}: ButtonProps) {
  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
