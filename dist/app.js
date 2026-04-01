const state = {
  rawText: '',
  result: null,
};

const elements = {
  rawText: document.querySelector('#rawText'),
  pdfInput: document.querySelector('#pdfInput'),
  urlInput: document.querySelector('#urlInput'),
  fetchUrl: document.querySelector('#fetchUrl'),
  loadSample: document.querySelector('#loadSample'),
  generateBtn: document.querySelector('#generateBtn'),
  clearBtn: document.querySelector('#clearBtn'),
  printBtn: document.querySelector('#printBtn'),
  status: document.querySelector('#status'),
  resultSection: document.querySelector('#resultSection'),
  overviewCards: document.querySelector('#overviewCards'),
  disciplineCards: document.querySelector('#disciplineCards'),
  outputTable: document.querySelector('#outputTable'),
  jobFilter: document.querySelector('#jobFilter'),
  notes: document.querySelector('#notes'),
  exportCsv: document.querySelector('#exportCsv'),
  exportJson: document.querySelector('#exportJson'),
  exportMd: document.querySelector('#exportMd'),
};

const getMode = () => document.querySelector('input[name="mode"]:checked')?.value || 'simple';

function setStatus(message, type = 'info') {
  elements.status.textContent = message;
  const palette = {
    info: ['rgba(14,165,233,.1)', 'rgba(14,165,233,.25)', '#bfeaff'],
    ok: ['rgba(34,197,94,.1)', 'rgba(34,197,94,.25)', '#bbf7d0'],
    warn: ['rgba(245,158,11,.1)', 'rgba(245,158,11,.25)', '#fde68a'],
    error: ['rgba(239,68,68,.1)', 'rgba(239,68,68,.25)', '#fecaca'],
  };
  const [bg, border, color] = palette[type] || palette.info;
  elements.status.style.background = bg;
  elements.status.style.borderColor = border;
  elements.status.style.color = color;
}

function normalizeText(text) {
  return text
    .replace(/\r/g, '\n')
    .replace(/[\u00A0\t]+/g, ' ')
    .replace(/[ ]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function sentenceCase(text) {
  return text
    .toLowerCase()
    .replace(/(^|[\s\-–—])([a-zà-ÿ])/g, (_, a, b) => `${a}${b.toUpperCase()}`);
}

function sanitizeHeading(text) {
  return text.replace(/\s+/g, ' ').replace(/:+$/, '').trim();
}

function extractOverview(text) {
  const titleMatch = text.match(/(EDITAL[^\n]{0,160}|CONCURSO PÚBLICO[^\n]{0,200})/i);
  const salaryMatches = [...text.matchAll(/R\$\s?[\d\.]+,\d{2}/g)].map((m) => m[0]);
  const workloadMatch = text.match(/(\d{2}\s*horas semanais)/i);
  const phaseMatches = [];
  if (/provas objetivas/i.test(text)) phaseMatches.push('Provas objetivas');
  if (/prova discursiva/i.test(text)) phaseMatches.push('Prova discursiva');
  if (/avaliação de títulos|avaliacao de titulos/i.test(text)) phaseMatches.push('Avaliação de títulos');
  if (/teste de aptidão física|teste de aptidao fisica/i.test(text)) phaseMatches.push('TAF');
  if (/curso de formação|curso de formacao/i.test(text)) phaseMatches.push('Curso de formação');
  const cargoCount = (text.match(/\bCARGO\s+\d+/gi) || []).length;
  return {
    title: titleMatch?.[0]?.trim() || 'Edital processado',
    salaries: [...new Set(salaryMatches)].slice(0, 4),
    workload: workloadMatch?.[1] || 'Não identificado',
    phases: phaseMatches.length ? phaseMatches : ['Não identificadas com segurança'],
    cargoCount,
  };
}

function extractDisciplineBlocks(text) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const blocks = [];
  const headingRegex = /^([A-ZÀ-Ú0-9][A-ZÀ-Ú0-9\s\/\-(),]{2,}):\s*(.*)$/;

  for (const line of lines) {
    const match = line.match(headingRegex);
    if (match) {
      const heading = sanitizeHeading(match[1]);
      if (heading.length <= 2) continue;
      blocks.push({ heading, body: match[2] || '' });
      continue;
    }
    if (blocks.length) {
      blocks[blocks.length - 1].body += ` ${line}`;
    }
  }

  const filtered = blocks.filter((block) => {
    if (/EDITAL|CONCURSO|DISPOSIÇÕES|DISPOSICOES|DOS CARGOS|REQUISITO|DESCRIÇÃO|DESCRICAO|VENCIMENTO|JORNADA/.test(block.heading)) {
      return false;
    }
    return true;
  });

  return filtered.map((block) => ({
    discipline: sentenceCase(block.heading),
    topics: splitTopics(block.body),
  })).filter((block) => block.topics.length > 0);
}

function splitTopics(body) {
  const cleaned = body
    .replace(/\s+/g, ' ')
    .replace(/([a-zà-ÿ])([A-ZÀ-Ú])/g, '$1 $2')
    .trim();

  const numbered = [...cleaned.matchAll(/(?:^|\s)(\d+(?:\.\d+)*)\s+([^]+?)(?=(?:\s\d+(?:\.\d+)*\s+)|$)/g)]
    .map((m) => m[2].trim().replace(/[.;]\s*$/, ''));
  if (numbered.length >= 2) return numbered;

  const semi = cleaned.split(/;\s+/).map((t) => t.trim().replace(/[.;]\s*$/, '')).filter(Boolean);
  if (semi.length >= 2) return semi;

  return cleaned
    .split(/\.\s+/)
    .map((t) => t.trim().replace(/[.;]\s*$/, ''))
    .filter((t) => t.length > 3);
}

function explodeSubtopics(topic) {
  const parts = topic.split(/;\s+/).map((item) => item.trim()).filter(Boolean);
  if (parts.length > 1) return parts;
  return [topic];
}

function buildRows(disciplines, mode, jobFilter, notes) {
  const rows = [];
  disciplines.forEach((discipline) => {
    discipline.topics.forEach((topic, idx) => {
      const subtopics = explodeSubtopics(topic);
      subtopics.forEach((sub, subIdx) => {
        rows.push({
          disciplina: discipline.discipline,
          topico: sub,
          prioridade: suggestPriority(sub),
          status: mode === 'complete' ? 'A estudar' : '—',
          revisao: mode === 'complete' ? '' : undefined,
          observacoes: mode === 'complete' ? composeObservation(jobFilter, notes, idx, subIdx) : '',
        });
      });
    });
  });
  return rows;
}

function suggestPriority(topic) {
  const hot = /(constitui|administra|interpreta|lógica|logica|informática|informatica|direitos|garantias|licita|contrato|ortografia|crase|pontua)/i;
  if (hot.test(topic)) return 'Alta';
  return topic.length > 90 ? 'Média' : 'Normal';
}

function composeObservation(jobFilter, notes, idx, subIdx) {
  const hints = [];
  if (jobFilter) hints.push(`Recorte: ${jobFilter}`);
  if (idx === 0 && subIdx === 0) hints.push('Bom candidato para revisão inicial');
  if (notes) hints.push(notes);
  return hints.join(' • ');
}

function buildResult(text) {
  const overview = extractOverview(text);
  const disciplines = extractDisciplineBlocks(text);
  const mode = getMode();
  const rows = buildRows(disciplines, mode, elements.jobFilter.value.trim(), elements.notes.value.trim());
  return { overview, disciplines, rows, rawText: text, mode };
}

function render(result) {
  elements.resultSection.classList.remove('hidden');
  renderOverview(result.overview, result.disciplines.length, result.rows.length);
  renderDisciplines(result.disciplines);
  renderTable(result.rows, result.mode);
}

function renderOverview(overview, disciplineCount, rowCount) {
  const cards = [
    ['Título', overview.title],
    ['Fases', overview.phases.join(' • ')],
    ['Remuneração', overview.salaries.join(' • ') || 'Não identificada'],
    ['Jornada', overview.workload],
    ['Cargos encontrados', String(overview.cargoCount || 0)],
    ['Disciplinas detectadas', String(disciplineCount)],
    ['Linhas geradas', String(rowCount)],
    ['Saída', getMode() === 'complete' ? 'Completa' : 'Simples'],
  ];
  elements.overviewCards.innerHTML = cards.map(([title, body]) => `
    <article class="card">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(body)}</p>
    </article>
  `).join('');
}

function renderDisciplines(disciplines) {
  elements.disciplineCards.innerHTML = disciplines.map((item) => `
    <article class="card">
      <h3>${escapeHtml(item.discipline)}</h3>
      <p>${item.topics.length} tópico(s) detectado(s).</p>
      <div class="stack-md" style="margin-top: 12px;">
        ${item.topics.slice(0, 4).map((topic) => `<span class="badge">${escapeHtml(topic.slice(0, 88))}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function renderTable(rows, mode) {
  const columns = mode === 'complete'
    ? ['Disciplina', 'Tópico/Subtópico', 'Prioridade', 'Status', 'Revisão', 'Observações']
    : ['Disciplina', 'Tópico/Subtópico', 'Prioridade'];

  const thead = elements.outputTable.querySelector('thead');
  const tbody = elements.outputTable.querySelector('tbody');

  thead.innerHTML = `<tr>${columns.map((c) => `<th>${escapeHtml(c)}</th>`).join('')}</tr>`;
  tbody.innerHTML = rows.map((row) => {
    const cells = mode === 'complete'
      ? [row.disciplina, row.topico, row.prioridade, row.status, row.revisao, row.observacoes]
      : [row.disciplina, row.topico, row.prioridade];
    return `<tr>${cells.map((cell) => `<td>${escapeHtml(cell || '')}</td>`).join('')}</tr>`;
  }).join('');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function downloadText(filename, text, type = 'text/plain;charset=utf-8') {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function toCsv(rows, mode) {
  const headers = mode === 'complete'
    ? ['disciplina', 'topico', 'prioridade', 'status', 'revisao', 'observacoes']
    : ['disciplina', 'topico', 'prioridade'];
  const lines = [headers.join(',')];
  rows.forEach((row) => {
    const values = headers.map((key) => JSON.stringify(row[key] ?? ''));
    lines.push(values.join(','));
  });
  return lines.join('\n');
}

function toMarkdown(result) {
  const columns = result.mode === 'complete'
    ? ['Disciplina', 'Tópico/Subtópico', 'Prioridade', 'Status', 'Revisão', 'Observações']
    : ['Disciplina', 'Tópico/Subtópico', 'Prioridade'];
  const header = `| ${columns.join(' | ')} |`;
  const separator = `| ${columns.map(() => '---').join(' | ')} |`;
  const body = result.rows.map((row) => {
    const cells = result.mode === 'complete'
      ? [row.disciplina, row.topico, row.prioridade, row.status, row.revisao, row.observacoes]
      : [row.disciplina, row.topico, row.prioridade];
    return `| ${cells.map((c) => String(c || '').replaceAll('|', '/')).join(' | ')} |`;
  }).join('\n');
  return `# ${result.overview.title}\n\n## Visão geral\n\n- Fases: ${result.overview.phases.join(', ')}\n- Remuneração: ${result.overview.salaries.join(', ') || 'Não identificada'}\n- Jornada: ${result.overview.workload}\n\n## Tabela verticalizada\n\n${header}\n${separator}\n${body}`;
}

async function extractTextFromPdf(fileOrArrayBuffer) {
  const pdfjsLib = await import('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.min.mjs');
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs';
  const data = fileOrArrayBuffer instanceof ArrayBuffer ? fileOrArrayBuffer : await fileOrArrayBuffer.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data }).promise;
  let fullText = '';
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str).join(' ');
    fullText += `\n${pageText}`;
  }
  return normalizeText(fullText);
}

async function loadSample() {
  const response = await fetch('./examples/alece-sample.txt');
  const text = await response.text();
  elements.rawText.value = text;
  state.rawText = text;
  setStatus('Exemplo ALECE carregado.', 'ok');
}

async function fetchFromUrl() {
  const url = elements.urlInput.value.trim();
  if (!url) {
    setStatus('Informe uma URL pública.', 'warn');
    return;
  }
  setStatus('Buscando conteúdo da URL...', 'info');
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Falha HTTP ${response.status}`);
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('pdf') || url.toLowerCase().endsWith('.pdf')) {
      const buffer = await response.arrayBuffer();
      state.rawText = await extractTextFromPdf(buffer);
      elements.rawText.value = state.rawText;
      setStatus('PDF remoto lido com sucesso.', 'ok');
      return;
    }
    const text = await response.text();
    state.rawText = normalizeText(text);
    elements.rawText.value = state.rawText;
    setStatus('Conteúdo textual carregado com sucesso.', 'ok');
  } catch (error) {
    console.error(error);
    setStatus('Não foi possível ler essa URL. O site pode bloquear CORS. Nesse caso, baixe o PDF e use o upload.', 'error');
  }
}

async function handlePdfInput(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  setStatus('Lendo PDF...', 'info');
  try {
    state.rawText = await extractTextFromPdf(file);
    elements.rawText.value = state.rawText;
    setStatus('PDF processado com sucesso.', 'ok');
  } catch (error) {
    console.error(error);
    setStatus('Falha ao ler o PDF. Verifique se é um PDF digital e não apenas imagem escaneada.', 'error');
  }
}

function generate() {
  const text = normalizeText(elements.rawText.value || state.rawText || '');
  if (!text) {
    setStatus('Adicione um PDF, uma URL ou cole o texto do edital antes de gerar.', 'warn');
    return;
  }
  const result = buildResult(text);
  state.rawText = text;
  state.result = result;
  render(result);
  setStatus(`Edital processado: ${result.disciplines.length} disciplina(s) e ${result.rows.length} linha(s) geradas.`, 'ok');
}

function clearAll() {
  state.rawText = '';
  state.result = null;
  elements.rawText.value = '';
  elements.urlInput.value = '';
  elements.pdfInput.value = '';
  elements.jobFilter.value = '';
  elements.notes.value = '';
  elements.resultSection.classList.add('hidden');
  elements.overviewCards.innerHTML = '';
  elements.disciplineCards.innerHTML = '';
  elements.outputTable.querySelector('thead').innerHTML = '';
  elements.outputTable.querySelector('tbody').innerHTML = '';
  setStatus('Campos limpos.', 'info');
}

function exportCsv() {
  if (!state.result) return;
  downloadText('edital-verticalizado.csv', toCsv(state.result.rows, state.result.mode), 'text/csv;charset=utf-8');
}

function exportJson() {
  if (!state.result) return;
  downloadText('edital-verticalizado.json', JSON.stringify(state.result, null, 2), 'application/json;charset=utf-8');
}

function exportMd() {
  if (!state.result) return;
  downloadText('edital-verticalizado.md', toMarkdown(state.result), 'text/markdown;charset=utf-8');
}

elements.pdfInput.addEventListener('change', handlePdfInput);
elements.fetchUrl.addEventListener('click', fetchFromUrl);
elements.generateBtn.addEventListener('click', generate);
elements.clearBtn.addEventListener('click', clearAll);
elements.printBtn.addEventListener('click', () => window.print());
elements.loadSample.addEventListener('click', loadSample);
elements.exportCsv.addEventListener('click', exportCsv);
elements.exportJson.addEventListener('click', exportJson);
elements.exportMd.addEventListener('click', exportMd);

elements.rawText.addEventListener('input', () => {
  state.rawText = elements.rawText.value;
});

setStatus('Projeto carregado. Você já pode usar PDF, URL ou texto.', 'info');
