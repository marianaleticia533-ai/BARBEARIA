import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { IconCalendar, IconMapPin, IconPhone } from "@/components/icons";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-heading text-xl">{business.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
            {business.tagline}. Atendimento em Nova Angra, Angra dos Reis — RJ.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-soft cursor-pointer"
            >
              <IconCalendar className="h-4 w-4" />
              Agendar on-line
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
            Navegação
          </p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
            Contato
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={business.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {business.address.full}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IconPhone className="h-4 w-4 shrink-0 text-gold" />
              <a href={business.phoneHref} className="hover:text-gold">
                {business.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-ink-border">
        <Container className="flex flex-col gap-2 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. Todos os direitos reservados.
          </p>
          <a href={business.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            Ver no Google Maps
          </a>
        </Container>
      </div>
    </footer>
  );
}
