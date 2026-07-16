"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconCalendar, IconClose, IconMenu, IconPhone } from "@/components/icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled || open
          ? "bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80 border-b border-ink-border"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Link
          href="#inicio"
          className="font-heading text-lg tracking-wide text-cream sm:text-xl"
          onClick={() => setOpen(false)}
        >
          {business.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={business.phoneHref}
            className="flex min-h-[44px] items-center gap-2 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
          >
            <IconPhone className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <Button href={business.bookingUrl} external icon={<IconCalendar className="h-4 w-4" />}>
            Agendar
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-cream transition-colors hover:bg-cream/10 md:hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink-border bg-ink px-5 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="min-h-[44px] rounded-lg px-3 py-3 text-base font-medium text-cream/90 transition-colors hover:bg-cream/5 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={business.phoneHref}
              className="flex min-h-[44px] items-center gap-2 rounded-lg px-3 text-base font-medium text-cream/90"
            >
              <IconPhone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <Button
              href={business.bookingUrl}
              external
              icon={<IconCalendar className="h-4 w-4" />}
              className="w-full"
            >
              Agendar on-line
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
