# Edital Verticalizado Inteligente

Aplicação estática pronta para GitHub Pages que transforma um edital em um **edital verticalizado** ou **edital esquematizado**.

## O que faz

- aceita **PDF enviado pelo usuário**;
- aceita **texto colado**;
- tenta ler **URL pública** do edital (quando o servidor permitir CORS);
- organiza o conteúdo em:
  - visão geral do concurso;
  - quadro por disciplinas;
  - tabela verticalizada de tópicos e subtópicos;
  - checklist de estudo, revisão e observações;
- exporta em **CSV**, **JSON** e **Markdown**;
- permite **impressão em PDF** pelo navegador.

## Stack

- HTML + CSS + JavaScript puro
- pdf.js via CDN para leitura de PDF no navegador
- GitHub Pages para hospedagem pública
- GitHub Actions para deploy automático

## Estrutura

```text
.
├── .github/workflows/deploy-pages.yml
├── examples/
│   └── alece-sample.txt
├── public/
│   ├── app.js
│   ├── index.html
│   ├── styles.css
│   └── assets/
│       └── hero.svg
├── scripts/
│   └── build.mjs
└── package.json
```

## Rodando localmente

```bash
npm install
npm run build
npm run preview
```

Para desenvolvimento simples:

```bash
npm run dev
```

## Como publicar no GitHub

1. Crie um repositório público.
2. Suba o conteúdo deste projeto para a branch `main`.
3. No GitHub, vá em **Settings > Pages**.
4. Em **Build and deployment**, escolha **Source = GitHub Actions**.
5. Faça um push na branch `main`.
6. Aguarde o workflow `Deploy GitHub Pages` concluir.

## Fluxo sugerido para o usuário final

1. Entra no site.
2. Escolhe entre **Upload PDF**, **Colar texto** ou **URL**.
3. Define o modo:
   - **Simples**: só verticaliza.
   - **Completo**: adiciona colunas de estudo e revisão.
4. Clica em **Gerar edital verticalizado**.
5. Exporta ou imprime.

## Observações importantes

- URLs de PDF podem falhar por bloqueio de CORS do site de origem.
- Em repositórios públicos, o GitHub Pages com Actions é suficiente para este MVP.
- A extração é heurística: alguns editais exigirão ajustes finos nas regras de parsing.

## Próximas evoluções

- OCR para PDFs escaneados;
- perfis por banca (Cebraspe, FCC, FGV, Cesgranrio etc.);
- modo IA para resumir tópicos e sugerir ciclos de revisão;
- login e histórico do usuário;
- ranking de incidência por assunto com base em provas anteriores.
