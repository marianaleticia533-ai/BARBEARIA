# 05 · Relatório Front-end (UI/UX)

## Escopo executado
- Implementação de todas as seções da página inicial como componentes
  isolados em `src/components/sections`, cada um com responsabilidade
  única (Hero, Highlights, Services, Testimonials, Location, CtaBanner).
- `page.tsx` apenas compõe as seções, sem lógica de UI própria.
- Sistema de tokens de design centralizado em `globals.css` (`@theme`) e
  reutilizado por todos os componentes via classes utilitárias Tailwind
  (`bg-ink`, `text-gold`, `bg-cream`, etc.).
- Componentes de UI reutilizáveis (`Button`, `Container`, `SectionHeading`,
  `StarRating`) evitam duplicação de estilo entre seções.

## Responsividade
Testado nas larguras 320/375/430/768/1024/1280/1440/1920px via revisão
manual do CSS responsivo (grid/flex com breakpoints `sm/md/lg`), sem
dependência de larguras fixas em pixels — containers usam `max-w` +
padding fluido.

## Estados de interação
- Hover e foco visível em todos os botões e links (`focus-visible:ring`).
- Menu mobile com `aria-expanded`, fechamento ao clicar em um item e
  bloqueio de scroll do body enquanto aberto.
- Barra fixa mobile não sobrepõe o rodapé (espaçador reservado no layout).

## Acessibilidade
- HTML semântico (`header`, `main`, `footer`, `nav`, `section`, `figure`).
- Link "Pular para o conteúdo" para navegação por teclado.
- Textos alternativos e `aria-label` em botões somente-ícone (ex.: botão de
  ligar na barra mobile).
- Contraste verificado nos pares de cor principais (ver
  `docs/04-DESIGN-SYSTEM.md`).
- `prefers-reduced-motion` respeitado.

## O que NÃO foi incluído (e por quê)
- **Galeria de fotos reais:** não há fotos fornecidas pelo cliente; o Hero
  contém um espaço reservado claramente identificado como pendente, em vez
  de usar imagens de banco de imagens genéricas (o que pareceria
  "template" e romperia a autenticidade pedida).
- **Lista de preços:** não fornecida; a seção de Serviços lista categorias
  e direciona para o agendamento on-line, onde os valores reais já
  existem — evita a exibição de números incorretos ou inventados.

## Revisão do trabalho de back-end/infraestrutura (front-end → back-end)
- Nenhuma integração de back-end interferiu na experiência: não há estados
  de carregamento de API nem mensagens técnicas expostas ao usuário, pois
  o site é 100% estático.
- SEO técnico (metadados, JSON-LD) não conflita com layout/fontes.
