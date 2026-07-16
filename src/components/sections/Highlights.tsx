import { highlights } from "@/data/highlights";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconHeart, IconSparkle, IconStar, IconUsers } from "@/components/icons";

const icons = [IconStar, IconSparkle, IconHeart, IconUsers];

export function Highlights() {
  return (
    <section id="diferenciais" className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Por que escolher a Freguesia"
          title="Um atendimento que vai além do corte"
          description="Mais de 300 avaliações no Google contam a mesma história: cuidado, pontualidade e um ambiente onde todo mundo é bem-vindo."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-cream-border bg-cream-2 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-lg text-[--color-text-on-light]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[--color-text-on-light-muted]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
