import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconCalendar, IconPhone } from "@/components/icons";

export function CtaBanner() {
  return (
    <section className="bg-cream py-4">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center text-cream sm:px-16 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-[100px]"
          />
          <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Sem fila, sem correria
          </p>
          <h2 className="relative mx-auto mt-4 max-w-xl font-heading text-3xl leading-tight sm:text-4xl">
            Garanta seu horário na Barbearia Freguesia
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-cream/70">
            Agende on-line em poucos segundos ou fale com a gente por
            telefone.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={business.bookingUrl} external icon={<IconCalendar className="h-4 w-4" />}>
              Agendar on-line
            </Button>
            <Button href={business.phoneHref} variant="secondary" icon={<IconPhone className="h-4 w-4" />}>
              {business.phoneDisplay}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
