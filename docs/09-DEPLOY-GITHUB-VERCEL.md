# 09 · Deploy — GitHub e Vercel

Nenhum repositório foi criado nem qualquer push/deploy foi realizado nesta
sessão — isso depende da conta e autorização do cliente. Abaixo estão os
passos para fazer isso.

## 1. Criar o repositório no GitHub
1. Acesse https://github.com/new.
2. Nome sugerido: `barbearia-freguesia`.
3. Deixe como privado (recomendado) ou público, conforme preferir.
4. Não inicialize com README (o projeto já tem um).

## 2. Inicializar o Git localmente
```bash
cd barbearia-freguesia
git init
git add .
git commit -m "chore: initialize project structure"
```

## 3. Conectar ao repositório remoto
```bash
git remote add origin https://github.com/SEU-USUARIO/barbearia-freguesia.git
git branch -M main
git push -u origin main
```

## 4. Importar na Vercel
1. Acesse https://vercel.com/new.
2. Selecione "Import Git Repository" e escolha o repositório criado.
3. Framework detectado automaticamente: **Next.js**.
4. Diretório raiz: `.` (padrão — não é necessário alterar).
5. Comando de build: padrão (`next build`) — não é necessário alterar.

## 5. Variáveis de ambiente
Nenhuma variável de ambiente é necessária para este projeto no momento
(ver `docs/03-TECHNICAL-ARCHITECTURE.md`).

## 6. Primeiro deploy
Clique em "Deploy". A Vercel builda e publica automaticamente em uma URL
`*.vercel.app`.

## 7. Domínio próprio
1. Compre o domínio desejado (sugestão neste projeto:
   `barbeariafreguesia.com.br` — não comprado, apenas usado como
   placeholder nos metadados).
2. Em Project Settings → Domains na Vercel, adicione o domínio.
3. Configure os registros DNS indicados pela Vercel no provedor do
   domínio.
4. Após a propagação de DNS (pode levar até 48h), o domínio próprio fica
   ativo.

## 8. HTTPS
A Vercel emite certificado SSL automaticamente para qualquer domínio
conectado — nenhuma ação manual é necessária.

## 9. Testar o site publicado
Depois do deploy, verificar manualmente: navegação mobile/desktop, botão
de agendamento (deve abrir `sites.appbarber.com.br`), botão de telefone,
mapa carregando corretamente, e rodar uma auditoria Lighthouse real (ver
`docs/08-TESTING.md`).

## 10. Preview de branches e Pull Requests
Cada branch ou Pull Request enviado ao GitHub gera automaticamente uma URL
de preview na Vercel, permitindo revisar mudanças antes de publicá-las em
produção (branch `main`).

## Após atualizações futuras
Qualquer novo `git push` na branch `main` gera um novo deploy de produção
automaticamente — não é necessário reconfigurar nada na Vercel.
