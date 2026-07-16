import { business } from "@/data/business";
import { IconCalendar, IconPhone } from "@/components/icons";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink-border bg-ink/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-ink/85 md:hidden">
      <a
        href={business.phoneHref}
        aria-label={`Ligar para ${business.phoneDisplay}`}
        className="flex min-h-[48px] w-14 shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream cursor-pointer"
      >
        <IconPhone className="h-5 w-5" />
      </a>
      <a
        href={business.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-gold text-sm font-medium text-ink cursor-pointer"
      >
        <IconCalendar className="h-4 w-4" />
        Agendar on-line
      </a>
    </div>
  );
}
