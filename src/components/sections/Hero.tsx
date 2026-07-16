import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { IconArrowRight, IconCalendar, IconClock, IconMapPin } from "@/components/icons";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink text-cream">
      {/* Decorative background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-cream) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-gold/20 blur-[120px]"
      />

      <Container className="relative flex flex-col gap-12 py-20 sm:py-28 lg:flex-row lg:items-center lg:py-32">
        <div className="max-w-xl animate-fade-up">
          <div className="mb-6 flex items-center gap-3">
            <StarRating rating={business.rating} tone="dark" />
            <span className="text-sm text-cream/70">
              {business.rating} · {business.reviewCount} avaliações no Google
            </span>
          </div>

          <h1 className="font-heading text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Tradição de barbearia,
            <span className="text-gold"> cuidado de verdade.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-cream/75">
            A {business.name} atende Nova Angra com corte, barba e acolhimento
            — em um ambiente pensado para você relaxar com um cafezinho
            enquanto é bem cuidado.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              href={business.bookingUrl}
              external
              icon={<IconCalendar className="h-4 w-4" />}
            >
              Agendar horário
            </Button>
            <Button href="#servicos" variant="secondary" icon={<IconArrowRight className="h-4 w-4" />}>
              Ver serviços
            </Button>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-cream/10 pt-6 text-sm text-cream/70 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2">
              <IconMapPin className="h-4 w-4 text-gold" />
              {business.address.neighborhood}, {business.address.city} - {business.address.state}
            </div>
            <div className="flex items-center gap-2">
              <IconClock className="h-4 w-4 text-gold" />
              Fecha às 20:00 hoje
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-md lg:ml-auto">
          <div className="aspect-[4/5] w-full rounded-3xl border border-cream/10 bg-gradient-to-br from-ink-2 to-ink shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
                  <circle cx="6" cy="6" r="2.5" />
                  <circle cx="6" cy="18" r="2.5" />
                  <path d="M8.5 7.5 20 18M20 6 8.5 16.5" />
                </svg>
              </div>
              <p className="font-heading text-2xl text-cream">Foto da barbearia</p>
              <p className="text-sm text-cream/60">
                [CONTEÚDO PENDENTE DE APROVAÇÃO] — espaço reservado para foto
                real do salão, equipe e ambiente, a ser enviada pelo cliente.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
