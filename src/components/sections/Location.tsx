import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconClock, IconMapPin, IconPhone } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Location() {
  return (
    <section id="localizacao" className="bg-ink py-20 text-cream sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Localização"
          title="Venha nos visitar em Nova Angra"
          tone="dark"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:order-2">
            <div className="rounded-2xl border border-cream/10 bg-ink-2 p-7">
              <div className="flex items-start gap-3">
                <IconMapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-medium text-cream">Endereço</p>
                  <p className="mt-1 text-sm text-cream/70">{business.address.full}</p>
                  <a
                    href={business.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-gold hover:underline"
                  >
                    Traçar rota →
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 border-t border-cream/10 pt-6">
                <IconPhone className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-medium text-cream">Telefone</p>
                  <a href={business.phoneHref} className="mt-1 inline-block text-sm text-cream/70 hover:text-gold">
                    {business.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="mt-6 border-t border-cream/10 pt-6">
                <div className="flex items-center gap-3">
                  <IconClock className="h-5 w-5 shrink-0 text-gold" />
                  <p className="font-medium text-cream">Horário de funcionamento</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-cream/70">
                      <span>{h.day}</span>
                      <span className={cn(h.pending && "italic text-cream/45")}>
                        {h.value}
                        {h.pending && "*"}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-cream/40">
                  * [CONTEÚDO PENDENTE DE APROVAÇÃO] horário a confirmar com o
                  cliente — apenas o fechamento às 20h foi informado.
                </p>
              </div>

              <Button
                href={business.bookingUrl}
                external
                className="mt-6 w-full"
              >
                Agendar horário
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-cream/10 lg:col-span-3 lg:order-1">
            <iframe
              title={`Mapa - ${business.name}`}
              src={business.address.mapsEmbedUrl}
              className="h-[380px] w-full grayscale-[20%] lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
