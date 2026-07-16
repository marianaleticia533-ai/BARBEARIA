# 02 · Arquitetura de Informação

## Decisão de estrutura
Site de página única (landing page), navegação por âncoras. Para o porte do
negócio (uma unidade, sem blog, sem catálogo de produtos), múltiplas páginas
adicionariam cliques sem ganho real de conversão — decisão registrada aqui
por ser uma escolha profissional e não uma instrução explícita do cliente.

## Mapa do site
- `/` — página única com todas as seções.
- `/#servicos`, `/#diferenciais`, `/#avaliacoes`, `/#localizacao` — âncoras.
- `/sitemap.xml`, `/robots.txt` — arquivos técnicos.
- `/*` (rota inexistente) → página 404 personalizada.

## Wireframe textual da página inicial
1. Cabeçalho fixo — logo/nome, navegação, telefone, botão "Agendar".
2. Hero — nota 4,9 (317 avaliações), título, subtítulo, CTA duplo
   (Agendar / Ver serviços), endereço resumido e horário de fechamento.
3. Diferenciais — 4 cartões (nota no Google, ambiente acolhedor, empresa
   LGBTQ+ friendly, empreendedoras à frente do negócio).
4. Serviços — grade de categorias de serviço + CTA de agendamento.
5. Avaliações — nota consolidada + 3 depoimentos reais extraídos do Google.
6. Localização — endereço, telefone, horário de funcionamento e mapa
   incorporado do Google Maps.
7. CTA final — chamada de reforço com agendamento e telefone.
8. Rodapé — navegação, contato, endereço, link para o Google Maps.
9. Barra fixa mobile — ligar / agendar (sempre visível em telas pequenas).

## Fluxo de navegação
Entrada (busca no Google / link do Maps) → Hero (confiança imediata pela
nota) → rolagem até Serviços ou Avaliações → decisão → Localização/CTA final
→ Agendar on-line ou ligar.

## Pontos de conversão
1. Botão "Agendar" no cabeçalho (sempre visível ao rolar).
2. CTA duplo no Hero.
3. CTA na seção de Serviços.
4. Botão de agendamento no card de Localização.
5. Banner de CTA final antes do rodapé.
6. Barra fixa no rodapé da tela em mobile.

## Comportamento no mobile
- Menu hambúrguer com painel deslizante abaixo do cabeçalho.
- Barra inferior fixa com "Ligar" e "Agendar on-line", sempre visível,
  exceto quando o menu está aberto.
