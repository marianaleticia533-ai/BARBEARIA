import { testimonials } from "@/data/testimonials";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { IconQuote } from "@/components/icons";

export function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Avaliações"
            title="O que dizem os clientes"
          />
          <div className="flex items-center gap-3 rounded-2xl border border-cream-border bg-cream-2 px-5 py-4">
            <span className="font-heading text-3xl text-[--color-text-on-light]">
              {business.rating}
            </span>
            <div>
              <StarRating rating={business.rating} />
              <p className="mt-1 text-xs text-[--color-text-on-light-muted]">
                {business.reviewCount} avaliações no Google
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col rounded-2xl border border-cream-border bg-cream-2 p-7"
            >
              <IconQuote className="h-7 w-7 text-gold-deep/60" />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-[--color-text-on-light]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-cream-border pt-4">
                <p className="text-sm font-semibold text-[--color-text-on-light]">
                  {t.author}
                </p>
                <p className="text-xs text-[--color-text-on-light-muted]">
                  {t.meta} · {t.timeAgo}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
