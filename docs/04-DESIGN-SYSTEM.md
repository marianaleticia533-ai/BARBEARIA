# 04 · Design System

Gerado com apoio da ferramenta de design intelligence `ui-ux-pro-max`
(consulta: "barbershop barbearia masculine grooming premium local
service"), refinado manualmente para uma identidade "clássica de barbearia"
com tom premium.

## Cores

| Papel | Token | Hex | Uso |
|---|---|---|---|
| Fundo escuro | `--color-ink` | `#14110F` | Hero, Serviços, Localização, rodapé |
| Superfície escura | `--color-ink-2` | `#1E1A17` | Cards sobre fundo escuro |
| Fundo claro | `--color-cream` | `#F7F3EC` | Diferenciais, Avaliações |
| Superfície clara | `--color-cream-2` | `#FFFFFF` | Cards sobre fundo claro |
| Destaque (dourado, sobre escuro) | `--color-gold` | `#C89B3C` | Botões primários, ícones, detalhes |
| Destaque (dourado, sobre claro) | `--color-gold-deep` | `#8A6A2F` | Texto/ícone dourado com contraste AA em fundo claro |
| Texto sobre escuro | `--color-text-on-dark` | `#F5EFE6` | — |
| Texto sobre claro | `--color-text-on-light` | `#211C17` | — |

Contraste de texto verificado para atingir no mínimo 4.5:1 nos pares
principais (texto sobre `ink` e texto sobre `cream`).

## Tipografia
- **Títulos:** Playfair Display (serifada, elegante, remete a barbearia
  clássica).
- **Corpo:** Inter (sans-serif neutra, alta legibilidade).
- Carregamento via `<link>` do Google Fonts no `<head>` (ver nota técnica
  abaixo), com pilha de fallback de sistema caso a fonte não carregue.

> **Nota técnica:** as fontes foram implementadas via tag `<link>` do
> Google Fonts em vez de `next/font/google` porque o ambiente de build
> utilizado nesta sessão não tinha acesso à rede para
> `fonts.googleapis.com` no momento da compilação. Funcionalmente é
> equivalente para o usuário final; se desejar o carregamento otimizado do
> `next/font` (self-hosting automático), isso pode ser reativado depois,
> assim que o build rodar em um ambiente com acesso à internet — ver
> `docs/08-TESTING.md`.

## Espaçamento e grid
- Container principal: `max-w-6xl`, padding lateral `20px`/`32px`.
- Escala de espaçamento padrão do Tailwind (4px base).
- Grid responsivo: 1 coluna (mobile) → 2 colunas (tablet) → 3–4 colunas
  (desktop) nas seções de cartões.

## Componentes de UI
- **Botões:** `primary` (dourado sólido), `secondary` (contorno sobre
  fundo escuro), `ghost`. Altura mínima de 44px (toque acessível).
- **Cards:** cantos arredondados (`rounded-2xl`), borda sutil, elevação em
  hover (`-translate-y-1` + sombra).
- **Ícones:** SVGs desenhados à mão (sem emoji, sem biblioteca externa),
  herdam `currentColor`.

## Efeitos e animação
- Transições de 150–250ms em hover/foco.
- Uma única animação de entrada (`fade-up`) usada no Hero.
- `prefers-reduced-motion` respeitado globalmente (desativa animações e
  rolagem suave).

## Breakpoints testados
375px, 768px, 1024px, 1440px (ver `docs/08-TESTING.md`).

## Checklist de pré-entrega (aplicado)
- [x] Nenhum emoji usado como ícone.
- [x] `cursor-pointer` em todos os elementos clicáveis.
- [x] Estados de hover com transição suave.
- [x] Contraste de texto ≥ 4.5:1 nos pares principais.
- [x] Foco visível em navegação por teclado (`focus-visible:ring`).
- [x] `prefers-reduced-motion` respeitado.
- [x] Responsivo nas larguras-alvo.
