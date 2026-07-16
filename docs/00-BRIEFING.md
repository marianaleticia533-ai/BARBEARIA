# 00 · Briefing do Projeto

## Resumo executivo
Site institucional de uma página (landing page completa) para a Barbearia
Freguesia, barbearia em Nova Angra, Angra dos Reis (RJ), com nota 4,9 e 317
avaliações no Google. O objetivo é converter visitantes em agendamentos
on-line, comunicando os diferenciais reais do negócio (atendimento, ambiente
acolhedor, inclusão) com uma identidade visual premium.

## Objetivo principal
Levar o visitante a agendar um horário pelo sistema já usado pela barbearia
(`sites.appbarber.com.br`) ou a ligar diretamente.

## Público-alvo
Homens (e clientes em geral) de Nova Angra e região de Angra dos Reis - RJ,
buscando corte de cabelo, barba e cuidado pessoal, incluindo público LGBTQ+
que valoriza espaços acolhedores.

## Problema que o site resolve
A empresa tinha presença apenas no Google Maps/perfil de agendamento, sem uma
página própria que reforce marca, credibilidade e facilite a decisão de
agendar.

## Proposta de valor
Tradição de barbearia com atendimento atencioso, ambiente confortável
(cafezinho incluso) e avaliação consolidada de 4,9/5 entre 317 clientes.

## Ação principal esperada
Clique em "Agendar on-line" → redireciona para `sites.appbarber.com.br`.

## Ação secundária
Ligar para (24) 3377-3515 ou traçar rota até o endereço no Google Maps.

## Páginas e funcionalidades
- Página única (`/`) com seções: Início, Diferenciais, Serviços, Avaliações,
  Localização, CTA final.
- Página 404 personalizada.
- `sitemap.xml`, `robots.txt`, imagem Open Graph gerada dinamicamente,
  ícone/favicon gerado dinamicamente.
- Dados estruturados (JSON-LD `HairSalon`) para SEO local.

## Requisitos técnicos
Next.js (App Router) + TypeScript estrito + Tailwind CSS v4. Sem banco de
dados, sem autenticação, sem back-end além de rotas nativas do Next
(sitemap/robots/OG image). Hospedagem alvo: Vercel.

## Requisitos visuais
Identidade "premium/clássica de barbearia": base escura (ink) + creme, com
dourado como cor de destaque, tipografia serifada (Playfair Display) para
títulos e Inter para corpo de texto. Detalhes em `docs/04-DESIGN-SYSTEM.md`.

## Restrições
- Ambiente de desenvolvimento sem acesso a um repositório Git do cliente e
  sem credenciais de deploy — o projeto foi preparado para GitHub/Vercel mas
  o push/deploy reais dependem do cliente.
- Sem acesso a fotos reais da barbearia, logo ou lista de preços.

## Suposições registradas (a confirmar com o cliente)
1. Domínio sugerido: `barbeariafreguesia.com.br` (placeholder até compra
   real do domínio).
2. Horário de funcionamento: apenas o fechamento às 20h foi informado
   publicamente; os demais dias/horários foram estimados com base no padrão
   do segmento e estão marcados como pendentes no site.
3. Lista de serviços: categorias genéricas de barbearia (corte, barba,
   combo, sobrancelha, infantil, hidratação), sem preços — o site direciona
   para o agendamento on-line, onde os valores reais já existem.
4. Fotos reais do salão/equipe: não fornecidas — há um espaço reservado
   marcado como "conteúdo pendente de aprovação" no Hero, pronto para
   receber a imagem real.
5. Depoimentos usados são reais, extraídos do perfil público da empresa no
   Google Maps (fornecidos pelo cliente nesta conversa), não foram
   inventados.

## Critérios de aprovação
- Build de produção sem erros (`npm run build`).
- Typecheck e lint sem erros.
- Responsivo de 320px a 1920px, sem rolagem horizontal.
- CTAs de agendamento e telefone funcionando em todas as seções.
- Nenhum texto Lorem Ipsum; conteúdo pendente sinalizado explicitamente.
