import Link from "next/link";
import { business } from "@/data/business";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="font-heading text-7xl text-gold-deep">404</p>
      <h1 className="mt-4 font-heading text-2xl text-[--color-text-on-light]">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-sm text-[--color-text-on-light-muted]">
        O endereço acessado não existe ou foi movido. Volte para a página
        inicial da {business.name}.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-ink-2 cursor-pointer"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
