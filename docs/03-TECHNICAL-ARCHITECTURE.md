# 03 · Arquitetura Técnica

## Stack
- **Framework:** Next.js 16 (App Router), React 19.
- **Linguagem:** TypeScript em modo estrito.
- **Estilo:** Tailwind CSS v4 (configuração via `@theme` em
  `src/app/globals.css`, sem `tailwind.config.js` — padrão do Tailwind v4).
- **Lint/format:** ESLint (`eslint-config-next`).
- **Hospedagem alvo:** Vercel.

## Por que sem banco de dados
O site não tem conteúdo dinâmico gerado por usuários nem cadastro próprio —
agendamento é feito no sistema já existente do cliente
(`sites.appbarber.com.br`). Todo o conteúdo (serviços, depoimentos,
diferenciais, dados de contato) é estático, tipado em `src/data/*.ts`.

## Organização de pastas
```
src/
  app/            rotas do App Router (page, layout, sitemap, robots, ícones)
  components/
    layout/       Header, Footer, StickyMobileCta
    sections/     Hero, Highlights, Services, Testimonials, Location, CtaBanner
    ui/           Button, Container, SectionHeading, StarRating
    icons/        ícones SVG inline (sem emoji, sem icon-font)
  data/           conteúdo estático tipado (business, services, testimonials, highlights)
  lib/            utilitários (cn — helper de classes)
docs/             documentação do projeto (este diretório)
public/           (vazio — não há assets estáticos necessários no momento)
```

## Rotas
| Rota | Tipo | Descrição |
|---|---|---|
| `/` | estática | página única com todas as seções |
| `/icon` | estática | favicon gerado via `next/og` |
| `/opengraph-image` | dinâmica (edge) | imagem de compartilhamento gerada via `next/og` |
| `/sitemap.xml` | estática | gerado por `src/app/sitemap.ts` |
| `/robots.txt` | estática | gerado por `src/app/robots.ts` |
| `/*` | estática | página 404 personalizada (`not-found.tsx`) |

## Integrações
- **Agendamento:** link externo para `https://sites.appbarber.com.br`
  (sistema já utilizado pela barbearia — nenhuma integração de API foi
  construída, pois não há acesso a essa plataforma).
- **Mapa:** `iframe` do Google Maps com o endereço da barbearia (sem
  necessidade de chave de API, usando a URL pública de embed).
- **Telefone:** link `tel:` direto.

Não há formulários de contato próprios nesta primeira versão — a decisão
foi direcionar todo contato para o agendamento on-line já existente e para
o telefone, evitando construir um back-end (rota de API + e-mail/SMTP) sem
necessidade real. Se o cliente quiser um formulário próprio no futuro, será
necessário decidir um provedor (ex.: Resend, Formspree) e registrar a
escolha aqui.

## Variáveis de ambiente
Nenhuma variável de ambiente é necessária na versão atual (sem chaves de
API, sem serviços pagos). `.env.example` foi mantido no projeto apenas como
referência para uma eventual integração futura.

## Bibliotecas de terceiros
Nenhuma dependência de UI de terceiros foi adicionada além do necessário
(Next.js, React, Tailwind). Ícones são SVGs próprios (sem pacote de ícones)
para manter o bundle enxuto.
