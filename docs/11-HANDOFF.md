# 11 · Handoff

## O que foi desenvolvido
Site institucional (página única) para a Barbearia Freguesia, com seções de
Início, Diferenciais, Serviços, Avaliações, Localização e CTA final,
totalmente responsivo, com SEO técnico completo e pronto para deploy na
Vercel. Ver detalhes completos em `docs/00-BRIEFING.md` até
`docs/10-FINAL-REVIEW.md`.

## Como instalar
```bash
npm install
```

## Como executar em desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:3000`.

## Como gerar o build de produção
```bash
npm run build
npm start
```

## Como alterar textos
Quase todo o conteúdo de texto fica em `src/data/`:
- `business.ts` — nome, telefone, endereço, horários, atributos.
- `services.ts` — lista de serviços e nota sobre preços.
- `testimonials.ts` — depoimentos exibidos.
- `highlights.ts` — cartões de diferenciais.

Basta editar os valores nesses arquivos — os componentes se atualizam
automaticamente.

## Como trocar imagens
Ainda não há imagens reais no projeto (ver `docs/00-BRIEFING.md`, seção de
suposições). Para adicionar a foto real do salão:
1. Coloque o arquivo de imagem em `public/` (ex.: `public/fachada.jpg`).
2. Em `src/components/sections/Hero.tsx`, troque o bloco do placeholder
   pelo componente `next/image` apontando para `/fachada.jpg`.

## Como alterar cores
Edite as variáveis no topo de `src/app/globals.css` (`--color-ink`,
`--color-gold`, `--color-cream`, etc.) — todo o site usa esses tokens, uma
alteração ali reflete em todo o site automaticamente.

## Como modificar seções da página
Cada seção é um componente independente em `src/components/sections/`. A
ordem das seções na página é definida em `src/app/page.tsx`.

## Como configurar o agendamento/telefone
Ambos ficam centralizados em `src/data/business.ts`
(`bookingUrl` e `phoneHref`/`phoneDisplay`).

## Como configurar variáveis de ambiente
Não há variáveis obrigatórias hoje. Se uma integração futura precisar de
chaves, adicione-as em `.env.local` (nunca commitado) seguindo o modelo em
`.env.example`.

## Como publicar no GitHub
Ver passo a passo completo em `docs/09-DEPLOY-GITHUB-VERCEL.md`.

## Como conectar à Vercel
Ver passo a passo completo em `docs/09-DEPLOY-GITHUB-VERCEL.md`.

## Como atualizar o site depois de publicado
Edite os arquivos localmente, confirme com `npm run build` que não há
erros, depois:
```bash
git add .
git commit -m "descrição da alteração"
git push
```
A Vercel publica automaticamente a cada push na branch `main`.

## Limitações conhecidas
- Sem fotos reais do salão (placeholder textual no Hero).
- Preços de serviço não exibidos (apenas categorias) — direciona ao
  agendamento on-line para valores atualizados.
- Horário completo da semana não confirmado (apenas o fechamento às 20h é
  público) — marcado no site como pendente.
- Domínio usado nos metadados é um placeholder
  (`barbeariafreguesia.com.br`).
- Sem formulário de contato próprio (uso do agendamento on-line existente
  e telefone).

## Pendências que dependem do cliente
1. Enviar fotos reais (fachada, ambiente, equipe, cortes) em boa
   resolução.
2. Confirmar lista de serviços com preços e durações.
3. Confirmar horário de funcionamento completo da semana.
4. Decidir e comprar o domínio definitivo.
5. Autorizar a criação do repositório GitHub e o primeiro deploy na
   Vercel (contas próprias do cliente ou de quem for administrar o site).
