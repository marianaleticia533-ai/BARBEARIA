# 06 · Relatório Back-end, Arquitetura e Infraestrutura

## Escopo
Mesmo sem banco de dados, esta frente cobriu arquitetura do projeto,
configuração do Next.js/TypeScript, SEO técnico, segurança e preparação
para deploy.

## Arquitetura
Ver diagrama textual completo em `docs/03-TECHNICAL-ARCHITECTURE.md`. Em
resumo: site estático (SSG) com duas rotas dinâmicas de imagem geradas sob
demanda (`/icon`, `/opengraph-image`), sem chamadas a serviços externos em
tempo de requisição do usuário além do `iframe` público do Google Maps.

## Segurança
- Nenhuma chave, token ou segredo é usado ou necessário nesta versão —
  `.env.example` está vazio de valores reais e documentado.
- Nenhum HTML não sanitizado é renderizado a partir de entrada de usuário
  (não há formulários nem conteúdo gerado por usuário).
- O único `dangerouslySetInnerHTML` do projeto injeta o JSON-LD de dados
  estruturados, cujo conteúdo vem exclusivamente de `src/data/business.ts`
  (dados estáticos do próprio projeto, não de entrada externa) — uso
  considerado seguro.
- Links externos (`Google Maps`, agendamento) usam
  `rel="noopener noreferrer"`.
- Nenhuma dependência de terceiros além do ecossistema Next.js/Tailwind
  oficial.

## SEO técnico
Detalhado em `docs/07-SEO-AND-CONTENT.md`.

## Formulários e integrações
Não há formulários próprios nesta versão (ver justificativa em
`docs/03-TECHNICAL-ARCHITECTURE.md`). Caso o cliente quera um formulário de
contato futuramente, recomenda-se:
1. Escolher um provedor sem necessidade de servidor próprio (ex.: Resend
   com uma rota de API do Next, ou um serviço como Formspree).
2. Adicionar validação client-side e server-side.
3. Nunca expor chaves no client — usar variável de ambiente apenas no
   servidor (rota de API do Next).

## GitHub
O projeto está pronto para ser versionado: `.gitignore` cobre
`node_modules`, `.next`, `.env*` e arquivos de build. Nenhum commit ou push
foi realizado — isso depende de autorização e credenciais do cliente (ver
`docs/09-DEPLOY-GITHUB-VERCEL.md`).

## Vercel
O build de produção (`npm run build`) foi validado com sucesso neste
ambiente (ver `docs/08-TESTING.md`). O projeto não requer nenhuma
configuração além da padrão da Vercel (sem `vercel.json` customizado, sem
variáveis de ambiente obrigatórias).
