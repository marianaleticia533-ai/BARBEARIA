# Barbearia Freguesia — Site institucional

Site institucional (página única) da Barbearia Freguesia, em Nova Angra,
Angra dos Reis - RJ. Nota 4,9 com 317 avaliações no Google.

## Tecnologias
- [Next.js 16](https://nextjs.org) (App Router)
- React 19 + TypeScript (modo estrito)
- Tailwind CSS v4
- ESLint

## Pré-requisitos
- Node.js 20 ou superior
- npm

## Instalação
```bash
npm install
```

## Desenvolvimento
```bash
npm run dev
```
Acesse http://localhost:3000

## Build de produção
```bash
npm run build
npm start
```

## Testes e validação
```bash
npx tsc --noEmit   # verificação de tipos
npx eslint .       # lint
npm run build      # build de produção
```

## Variáveis de ambiente
Nenhuma é obrigatória hoje. Ver `.env.example` para referência futura.

## Estrutura resumida
```
src/app/            rotas (página, layout, sitemap, robots, ícones)
src/components/     seções, layout e UI reutilizável
src/data/           conteúdo estático tipado (edite aqui para trocar textos)
docs/               documentação completa do projeto
```

## Deploy
Pronto para deploy na Vercel sem configuração adicional. Passo a passo
completo em `docs/09-DEPLOY-GITHUB-VERCEL.md`.

## Documentação completa
| Documento | Conteúdo |
|---|---|
| `docs/00-BRIEFING.md` | Briefing e suposições registradas |
| `docs/01-RESEARCH-AND-REFERENCES.md` | Pesquisa de referências |
| `docs/02-INFORMATION-ARCHITECTURE.md` | Mapa do site e wireframes |
| `docs/03-TECHNICAL-ARCHITECTURE.md` | Arquitetura técnica |
| `docs/04-DESIGN-SYSTEM.md` | Cores, tipografia, componentes |
| `docs/05-FRONTEND.md` | Relatório de front-end |
| `docs/06-BACKEND-AND-INFRASTRUCTURE.md` | Relatório de back-end/infra |
| `docs/07-SEO-AND-CONTENT.md` | SEO técnico e conteúdo |
| `docs/08-TESTING.md` | Testes executados e limitações |
| `docs/09-DEPLOY-GITHUB-VERCEL.md` | Passo a passo de deploy |
| `docs/10-FINAL-REVIEW.md` | Auditoria final |
| `docs/11-HANDOFF.md` | Guia de manutenção para o cliente |
| `docs/PROJECT_STATUS.md` | Status por etapa |
