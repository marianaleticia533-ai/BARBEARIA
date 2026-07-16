import { services, servicesNote } from "@/data/services";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconCalendar, IconRazor, IconScissors, IconSparkle } from "@/components/icons";

const icons = [IconScissors, IconRazor, IconScissors, IconSparkle, IconScissors, IconSparkle];

export function Services() {
  return (
    <section id="servicos" className="bg-ink py-20 text-cream sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Serviços"
            title="Cuidado completo para cabelo e barba"
            description="Confira as categorias de atendimento. Valores, duração e disponibilidade ficam sempre atualizados no agendamento on-line."
            tone="dark"
          />
          <Button
            href={business.bookingUrl}
            external
            icon={<IconCalendar className="h-4 w-4" />}
            className="hidden sm:inline-flex"
          >
            Agendar agora
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={service.name}
                className="rounded-2xl border border-cream/10 bg-ink-2 p-6 transition-colors duration-200 hover:border-gold/40"
              >
                <Icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-heading text-xl">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-cream/45">
          {servicesNote}
        </p>

        <Button
          href={business.bookingUrl}
          external
          icon={<IconCalendar className="h-4 w-4" />}
          className="mt-6 w-full sm:hidden"
        >
          Agendar agora
        </Button>
      </Container>
    </section>
  );
}
