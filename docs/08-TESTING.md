# 08 · Testes

## Testes técnicos executados (reais, rodados neste ambiente)

| Teste | Comando | Resultado |
|---|---|---|
| Instalação de dependências | `npm install` | ✅ Concluída (ver nota abaixo) |
| Verificação de tipos | `npx tsc --noEmit` | ✅ Sem erros |
| Lint | `npx eslint .` | ✅ Sem erros/avisos |
| Build de produção | `npm run build` | ✅ Concluído com sucesso (Turbopack) |

Saída resumida do build:
```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /icon
├ ƒ /opengraph-image
├ ○ /robots.txt
└ ○ /sitemap.xml
```

### Nota sobre a instalação
Durante a instalação de dependências neste ambiente de sandbox, três
binários nativos grandes (`@next/swc-linux-x64-gnu`, `lightningcss` e
`@tailwindcss/oxide`) foram baixados de forma incompleta pelo `npm`
(problema de rede/cache do ambiente, não do projeto) e precisaram ser
baixados novamente e substituídos manualmente para o build funcionar. Isso
é específico deste ambiente de desenvolvimento — ao rodar `npm install` em
uma máquina normal ou na Vercel, esse problema não deve ocorrer.

## O que NÃO foi possível testar neste ambiente (limitação registrada)
- **Auditoria Lighthouse (Performance/Acessibilidade/Boas práticas/SEO):**
  não há navegador gráfico disponível neste ambiente de sandbox para rodar
  o Chrome/Lighthouse. Não declaramos notas de Lighthouse porque elas não
  foram de fato medidas.
- **Captura de tela em diferentes larguras (320–1920px):** não realizada
  visualmente por falta de navegador neste ambiente. Em vez disso, foi
  feita revisão manual do código responsivo (classes `sm:`/`md:`/`lg:` do
  Tailwind, ausência de larguras fixas em pixel, uso de `max-w` fluido),
  cobrindo as larguras-alvo 320/375/430/768/1024/1280/1440/1920px por
  inspeção estrutural.
- **Teste de navegação por teclado e leitor de tela ao vivo:** não
  executado com ferramenta assistiva real; a implementação segue as
  práticas documentadas em `docs/05-FRONTEND.md` (foco visível, ordem
  lógica do DOM, `aria-label`, HTML semântico), mas recomenda-se validação
  manual pelo cliente ou por um teste real antes do lançamento.

## Revisão manual de interface (checklist)
- [x] Menu desktop e mobile funcionam e fecham corretamente.
- [x] Todos os links/botões têm destino real (nenhum `#` vazio).
- [x] Formulários: não aplicável (não há formulários nesta versão).
- [x] Página 404 configurada e com CTA de retorno.
- [x] `prefers-reduced-motion` implementado via CSS.
- [x] Nenhuma imagem quebrada (não há `<img>` externas nesta versão — o
      espaço de foto do Hero é um placeholder textual identificado como
      pendente, não uma imagem quebrada).

## Recomendação antes do lançamento
Depois do deploy na Vercel (ver `docs/09-DEPLOY-GITHUB-VERCEL.md`), rodar
uma auditoria Lighthouse real na URL publicada e registrar as notas
obtidas, substituindo esta seção por resultados reais.
