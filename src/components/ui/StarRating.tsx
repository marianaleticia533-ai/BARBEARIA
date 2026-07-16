import { IconStar } from "@/components/icons";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  className,
  starClassName,
  tone = "light",
}: {
  rating: number;
  className?: string;
  starClassName?: string;
  tone?: "light" | "dark";
}) {
  const stars = [0, 1, 2, 3, 4];
  const baseColor = tone === "dark" ? "text-cream/20" : "text-black/10";
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="img"
      aria-label={`Avaliação ${rating} de 5 estrelas`}
    >
      {stars.map((i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <span key={i} className="relative inline-block">
            <IconStar className={cn("h-4 w-4", baseColor, starClassName)} />
            <span
              className="absolute inset-0 top-0 left-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <IconStar className={cn("h-4 w-4 text-gold", starClassName)} />
            </span>
          </span>
        );
      })}
    </div>
  );
}
