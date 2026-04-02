# Edital Verticalizado Inteligente

Aplicação estática pronta para GitHub Pages que transforma um edital em um **edital verticalizado** ou **edital esquematizado**.

## O que faz

- aceita **PDF enviado pelo usuário**;
- aceita **texto colado**;
- tenta ler **URL pública** do edital, quando o servidor permitir CORS;
- organiza o conteúdo em:
  - visão geral do concurso;
  - quadro por disciplinas;
  - tabela verticalizada de tópicos e subtópicos;
  - checklist de estudo, revisão e observações;
- exporta em **CSV**, **JSON** e **Markdown**;
- permite **impressão em PDF** pelo navegador;
- possui **recorte por cargo da ALECE**, com preset validado para **Analista Legislativo – Direito**.

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
├── package.json
└── package-lock.json
```

## Revisão aplicada nesta versão

- workflow simplificado para GitHub Pages, sem etapa desnecessária de instalação de dependências;
- validação de sintaxe antes do build com `npm run validate`;
- geração automática de `.nojekyll` no `dist/`;
- manutenção de caminhos relativos para funcionar em repositório do tipo `username.github.io/repositorio`;
- parser com foco em ALECE por cargo;
- aviso quando o PDF parece corrompido;
- preset mais confiável para **Analista Legislativo – Direito**.

## Rodando localmente

```bash
npm run validate
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
4. Preenche o **cargo/recorte desejado** quando o edital for da ALECE.
5. Clica em **Gerar edital verticalizado**.
6. Exporta ou imprime.

## Observações importantes

- URLs de PDF podem falhar por bloqueio de CORS do site de origem.
- PDFs escaneados ou com texto mal codificado podem exigir OCR em uma evolução futura.
- A extração ainda é heurística: alguns editais exigirão ajustes finos nas regras de parsing.

## Próximas evoluções

- OCR para PDFs escaneados;
- presets detalhados para mais cargos da ALECE;
- perfis por banca, como Cebraspe, FCC, FGV e Cesgranrio;
- modo IA para resumir tópicos e sugerir ciclos de revisão;
- ranking de incidência por assunto com base em provas anteriores.
