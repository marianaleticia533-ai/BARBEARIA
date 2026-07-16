# 07 · SEO e Conteúdo

## Implementado
- Título único e descrição únicos por página (`metadata` em
  `src/app/layout.tsx`, com `template` para páginas futuras).
- `canonical` configurado (`alternates.canonical`).
- Open Graph completo (título, descrição, tipo, locale `pt_BR`, imagem
  gerada dinamicamente em `/opengraph-image`).
- Twitter Card (`summary_large_image`).
- Favicon/ícone gerado dinamicamente em `/icon`.
- `sitemap.xml` (`src/app/sitemap.ts`) e `robots.txt`
  (`src/app/robots.ts`).
- Um único `<h1>` por página (título do Hero).
- Hierarquia de títulos consistente (`h1` → `h2` → `h3`).
- Idioma do HTML definido como `pt-BR`.
- Dados estruturados **JSON-LD** do tipo `HairSalon` (Schema.org), incluindo
  endereço, telefone e `aggregateRating` (nota e número de avaliações) —
  ajuda o Google a exibir rich snippets de negócio local.
- Página 404 personalizada.
- Links internos (âncoras) e externos (Maps, agendamento) funcionam e não
  usam `#` sem destino.

## Conteúdo
- Nenhum texto Lorem Ipsum.
- Depoimentos são reais (extraídos do perfil público do Google Maps,
  fornecidos pelo cliente) — não foram inventados nem alterados em
  conteúdo.
- Onde não havia informação real disponível (preços de serviço, horário
  completo da semana, fotos), o conteúdo foi marcado explicitamente como
  `[CONTEÚDO PENDENTE DE APROVAÇÃO]` em vez de ser inventado — ver lista
  completa em `docs/00-BRIEFING.md` (seção "Suposições registradas").

## Domínio usado nos metadados
`https://barbeariafreguesia.com.br` foi usado como URL-base nos metadados
(Open Graph, canonical, sitemap) como **sugestão/placeholder** — o domínio
real ainda não foi definido/comprado pelo cliente. Ao decidir o domínio
definitivo, atualizar a constante `siteUrl` nos arquivos:
`src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`.

## Não implementado (e por quê)
- **Palavras-chave artificiais / keyword stuffing:** evitado
  deliberadamente — o texto foi escrito para leitura humana, não para
  robôs de busca.
- **Múltiplas páginas indexáveis:** não se aplica a este projeto (página
  única) — ver justificativa em `docs/02-INFORMATION-ARCHITECTURE.md`.
