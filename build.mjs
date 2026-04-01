const ALECE_CARGOS = [
  { key: 'administracao', name: 'Analista Legislativo – Administração', aliases: ['administração'] },
  { key: 'arquitetura', name: 'Analista Legislativo – Arquitetura e Urbanismo', aliases: ['arquitetura', 'urbanismo'] },
  { key: 'biblioteconomia', name: 'Analista Legislativo – Biblioteconomia', aliases: ['biblioteconomia'] },
  { key: 'contabeis', name: 'Analista Legislativo – Ciências Contábeis', aliases: ['ciências contábeis', 'ciencias contabeis', 'contábeis', 'contabeis'] },
  { key: 'economicas', name: 'Analista Legislativo – Ciências Econômicas', aliases: ['ciências econômicas', 'ciencias economicas', 'econômicas', 'economicas'] },
  { key: 'consultoria', name: 'Analista Legislativo – Consultoria Técnica Legislativa', aliases: ['consultoria técnica legislativa', 'consultoria tecnica legislativa'] },
  { key: 'controleinterno', name: 'Analista Legislativo – Controle Interno', aliases: ['controle interno'] },
  { key: 'design', name: 'Analista Legislativo – Design Gráfico', aliases: ['design gráfico', 'design grafico'] },
  { key: 'direito', name: 'Analista Legislativo – Direito', aliases: ['direito'] },
  { key: 'engcivil', name: 'Analista Legislativo – Engenharia Civil', aliases: ['engenharia civil'] },
  { key: 'engeletrica', name: 'Analista Legislativo – Engenharia Elétrica', aliases: ['engenharia elétrica', 'engenharia eletrica'] },
  { key: 'informatica', name: 'Analista Legislativo – Informática', aliases: ['informática', 'informatica'] },
  { key: 'jornalismo', name: 'Analista Legislativo – Jornalismo', aliases: ['jornalismo'] },
  { key: 'linguaportuguesa', name: 'Analista Legislativo – Língua Portuguesa', aliases: ['língua portuguesa', 'lingua portuguesa', 'gramática normativa', 'gramatica normativa'] },
  { key: 'psicologia', name: 'Analista Legislativo – Psicologia', aliases: ['psicologia'] },
  { key: 'publicidade', name: 'Analista Legislativo – Publicidade e Propaganda', aliases: ['publicidade e propaganda', 'publicidade'] },
  { key: 'tecnico', name: 'Técnico Legislativo', aliases: ['técnico legislativo', 'tecnico legislativo'] },
];

const ALECE_SUPERIOR_GENERAL = [
  {
    discipline: 'Língua Portuguesa',
    topics: [
      'Compreensão de texto',
      'Gêneros e tipos textuais',
      'Coerência e coesão textuais',
      'Ortografia oficial',
      'Acentuação gráfica',
      'Pontuação',
      'Crase',
      'Classes de palavras',
      'Sintaxe',
      'Discurso direto e indireto',
      'Tempos e modos verbais',
      'Vozes do verbo',
      'Flexão nominal e verbal',
      'Concordância nominal e verbal',
      'Regência nominal e verbal',
      'Correspondência oficial'
    ]
  },
  {
    discipline: 'Noções de Administração Pública',
    topics: [
      'Estado, governo e administração pública',
      'Princípios da administração pública',
      'Organização administrativa',
      'Ato administrativo',
      'Poderes administrativos',
      'Serviços públicos',
      'Agentes públicos',
      'Responsabilidade civil do Estado',
      'Controle da administração pública'
    ]
  },
  {
    discipline: 'Legislação de Interesse Institucional',
    topics: [
      'Constituição do Estado do Ceará',
      'Regimento Interno da ALECE',
      'Estatuto dos Funcionários Públicos Civis do Estado do Ceará',
      'Estrutura Administrativa da ALECE'
    ]
  }
];

const ALECE_TECNICO_GENERAL = [
  {
    discipline: 'Língua Portuguesa',
    topics: [
      'Compreensão de texto',
      'Argumentação',
      'Coerência e coesão',
      'Tipos e gêneros textuais',
      'Ortografia',
      'Acentuação',
      'Pontuação',
      'Crase',
      'Classes de palavras',
      'Sintaxe',
      'Coordenação e subordinação',
      'Tempos, modos e vozes verbais',
      'Flexão nominal e verbal',
      'Concordância nominal e verbal',
      'Regência nominal e verbal',
      'Correspondência oficial'
    ]
  },
  {
    discipline: 'Noções de Informática',
    topics: [
      'Internet, intranet e redes de computadores',
      'Ferramentas e aplicativos de informática',
      'Edição de textos, planilhas e apresentações',
      'Windows 7',
      'Navegadores e correio eletrônico',
      'Segurança da informação e malware'
    ]
  },
  {
    discipline: 'Legislação de Interesse Institucional',
    topics: [
      'Constituição do Estado do Ceará',
      'Regimento Interno da ALECE',
      'Estatuto dos Funcionários Públicos Civis do Estado do Ceará',
      'Estrutura Administrativa da ALECE'
    ]
  }
];

const ALECE_DIREITO_SPECIFIC = [
  {
    discipline: 'Direito Constitucional',
    topics: [
      'Teoria da Constituição',
      'Supremacia constitucional',
      'Poder constituinte',
      'Normas constitucionais e controle de constitucionalidade',
      'Princípios fundamentais',
      'Direitos e garantias fundamentais',
      'Direitos sociais',
      'Nacionalidade e direitos políticos',
      'Organização do Estado',
      'Administração pública e servidores públicos',
      'Poder Legislativo, Executivo e Judiciário',
      'Funções essenciais à Justiça',
      'Defesa do Estado e das instituições democráticas',
      'Finanças públicas e ordem social',
      'Constituição do Estado do Ceará'
    ]
  },
  {
    discipline: 'Direito Eleitoral',
    topics: [
      'Código Eleitoral',
      'Lei das Eleições',
      'Lei dos Partidos Políticos',
      'Inelegibilidades',
      'Súmulas do TSE'
    ]
  },
  {
    discipline: 'Direito Financeiro',
    topics: [
      'Finanças públicas na Constituição de 1988',
      'Orçamento público',
      'Receita pública',
      'Despesa pública',
      'Empenho, liquidação e pagamento',
      'Restos a pagar',
      'Lei de Responsabilidade Fiscal',
      'Controle interno e externo',
      'Precatórios'
    ]
  },
  {
    discipline: 'Direito Civil',
    topics: [
      'LINDB e teoria da norma jurídica',
      'Vigência, validade e eficácia das leis',
      'Interpretação das leis',
      'Pessoas naturais e jurídicas',
      'Direitos da personalidade',
      'Bens públicos e privados',
      'Fatos, atos e negócios jurídicos',
      'Nulidade e anulabilidade',
      'Prescrição e decadência',
      'Responsabilidade civil'
    ]
  },
  {
    discipline: 'Processo Civil',
    topics: [
      'Providências preliminares e saneamento',
      'Provas e ônus da prova',
      'Audiências, conciliação e mediação',
      'Sentença',
      'Coisa julgada',
      'Cumprimento de sentença',
      'Remessa necessária',
      'Ação rescisória',
      'Recursos: apelação e agravos'
    ]
  },
  {
    discipline: 'Direito Penal',
    topics: [
      'Aplicação da lei penal',
      'Crime',
      'Imputabilidade penal',
      'Concurso de pessoas'
    ]
  },
  {
    discipline: 'Processo Legislativo e Técnica Legislativa',
    topics: [
      'Órgãos internos das Casas Legislativas',
      'Mesa, Plenário e Comissões',
      'CPI e comissões temporárias',
      'Mandato parlamentar',
      'Iniciativa legislativa',
      'Espécies de proposições legislativas',
      'Fases do processo legislativo',
      'Incidentes do processo legislativo',
      'Sanção, veto, promulgação e publicação',
      'Decreto legislativo',
      'Lei Complementar nº 95/1998'
    ]
  }
];

const ALECE_SPECIAL_EXCLUSIONS = {
  direito: ['Noções de Administração Pública'],
  linguaportuguesa: ['Língua Portuguesa'],
};

const state = { rawText: '', result: null };

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
  return String(text || '')
    .replace(/\r/g, '\n')
    .replace(/[\u00A0\t]+/g, ' ')
    .replace(/-\s*\n\s*/g, '')
    .replace(/[ ]{2,}/g, ' ')
    .replace(/\n[ ]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function cleanExtractedText(text) {
  return normalizeText(text)
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/Edital Verticalizado Inteligente/gi, ' ')
    .replace(/\b\d+\s*\/\s*\d+\b/g, ' ')
    .replace(/[ ]{2,}/g, ' ')
    .trim();
}

function sentenceCase(text) {
  return text
    .toLowerCase()
    .replace(/(^|[\s\-–—])([a-zà-ÿ])/g, (_, a, b) => `${a}${b.toUpperCase()}`)
    .replace(/Alece/g, 'ALECE')
    .replace(/LinDB/g, 'LINDB')
    .replace(/Tse/g, 'TSE');
}

function isProbablyCorrupted(text) {
  const sample = String(text || '').slice(0, 4000);
  if (!sample) return false;
  const weird = (sample.match(/[\u0000-\u0008\u000B\u000C\u000E-\u001F�]/g) || []).length;
  const symbols = (sample.match(/[^\n\t a-zA-ZÀ-ÿ0-9,:;.!?()\-\/]/g) || []).length;
  const alpha = (sample.match(/[a-zA-ZÀ-ÿ]/g) || []).length;
  return weird > 8 || (symbols > alpha * 0.18);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function detectAlece(text) {
  return /assembleia legislativa do estado do ceará|\balece\b|\balce\b/i.test(text || '');
}

function matchAleceCargo(jobFilter) {
  const q = (jobFilter || '').toLowerCase();
  if (!q) return null;
  return ALECE_CARGOS.find((cargo) => cargo.aliases.some((alias) => q.includes(alias)) || q.includes(cargo.key)) || null;
}

function filterExcludedGeneral(cargoKey, disciplines) {
  const excluded = ALECE_SPECIAL_EXCLUSIONS[cargoKey] || [];
  return disciplines.filter((item) => !excluded.includes(item.discipline));
}

function overviewForAleceCargo(cargo) {
  return {
    title: `${cargo.name} (ALECE)`,
    phases: cargo.key === 'tecnico' ? ['Provas objetivas', 'Prova discursiva'] : ['Provas objetivas', 'Prova discursiva', 'Avaliação de títulos'],
    salaries: cargo.key === 'tecnico' ? ['R$ 2.224,90'] : ['R$ 4.455,29'],
    workload: '30 horas semanais',
    cargoCount: 1,
    selectedCargo: cargo.name,
    parser: 'ALECE por cargo',
  };
}

function dedupeBlocks(blocks) {
  const map = new Map();
  for (const block of blocks) {
    const key = block.discipline;
    if (!map.has(key)) {
      map.set(key, { discipline: block.discipline, topics: [...block.topics] });
      continue;
    }
    const target = map.get(key);
    const seen = new Set(target.topics.map((t) => t.toLowerCase()));
    block.topics.forEach((topic) => {
      const k = topic.toLowerCase();
      if (!seen.has(k)) {
        seen.add(k);
        target.topics.push(topic);
      }
    });
  }
  return [...map.values()];
}

function overviewFromText(text) {
  const titleMatch = text.match(/(EDITAL[^\n]{0,160}|CONCURSO PÚBLICO[^\n]{0,220})/i);
  const salaryMatches = [...text.matchAll(/R\$\s?[\d\.]+,\d{2}/g)].map((m) => m[0]);
  const workloadMatch = text.match(/(\d{2}\s*horas semanais)/i);
  const phases = [];
  if (/provas objetivas/i.test(text)) phases.push('Provas objetivas');
  if (/prova discursiva/i.test(text)) phases.push('Prova discursiva');
  if (/avaliação de títulos|avaliacao de titulos/i.test(text)) phases.push('Avaliação de títulos');
  return {
    title: titleMatch?.[0]?.trim() || 'Edital processado',
    salaries: [...new Set(salaryMatches)].slice(0, 4),
    workload: workloadMatch?.[1] || 'Não identificado',
    phases: phases.length ? phases : ['Não identificadas com segurança'],
    cargoCount: (text.match(/\bCARGO\s+\d+/gi) || []).length,
    selectedCargo: elements.jobFilter.value.trim() || 'Não informado',
    parser: 'Genérico',
  };
}

function sanitizeHeading(text) {
  return text.replace(/\s+/g, ' ').replace(/:+$/, '').trim();
}

function splitTopics(body) {
  const cleaned = body.replace(/\s+/g, ' ').trim();
  const numbered = [...cleaned.matchAll(/(?:^|\s)(\d+(?:\.\d+)*)\s+(.+?)(?=(?:\s\d+(?:\.\d+)*\s+)|$)/g)]
    .map((m) => m[2].trim().replace(/[.;]\s*$/, ''));
  if (numbered.length >= 2) return numbered;

  const semi = cleaned.split(/;\s+/).map((t) => t.trim().replace(/[.;]\s*$/, '')).filter(Boolean);
  if (semi.length >= 2) return semi;

  return cleaned
    .split(/\.\s+/)
    .map((t) => t.trim().replace(/[.;]\s*$/, ''))
    .filter((t) => t.length > 4);
}

function validHeading(heading) {
  if (!heading || heading.length < 4 || heading.length > 90) return false;
  if (/EDITAL|CONCURSO|DISPOSIÇÕES|DISPOSICOES|DOS CARGOS|REQUISITO|DESCRIÇÃO|DESCRICAO|VENCIMENTO|JORNADA|CONHECIMENTOS BÁSICOS|CONHECIMENTOS ESPECÍFICOS|CONHECIMENTOS GERAIS/i.test(heading)) return false;
  return heading.split(/\s+/).length <= 10;
}

function extractDisciplineBlocks(text) {
  const cleaned = cleanExtractedText(text);
  const regex = /(?:^|\n)([A-ZÀ-Ú][A-ZÀ-Ú0-9\s\/\-(),.&]{2,90}):\s*(.*?)(?=(?:\n[A-ZÀ-Ú][A-ZÀ-Ú0-9\s\/\-(),.&]{2,90}:\s)|$)/gs;
  const blocks = [];
  for (const match of cleaned.matchAll(regex)) {
    const heading = sanitizeHeading(match[1]);
    const body = normalizeText(match[2] || '');
    if (!validHeading(heading)) continue;
    const topics = splitTopics(body);
    if (topics.length < 2) continue;
    blocks.push({ discipline: sentenceCase(heading), topics });
  }
  return dedupeBlocks(blocks);
}

function suggestPriority(discipline, topic) {
  if (/constitucional|processo legislativo|legislação de interesse institucional|regimento interno/i.test(`${discipline} ${topic}`)) return 'Alta';
  if (/portuguesa|civil|processo civil|financeiro|administração pública/i.test(discipline)) return 'Média';
  return 'Normal';
}

function composeObservation(jobFilter, notes, idx) {
  const hints = [];
  if (jobFilter) hints.push(`Recorte: ${jobFilter}`);
  if (idx === 0) hints.push('Comece por este tópico no ciclo 1');
  if (notes) hints.push(notes);
  return hints.join(' • ');
}

function buildRows(disciplines, mode, jobFilter, notes) {
  const rows = [];
  disciplines.forEach((discipline) => {
    discipline.topics.forEach((topic, idx) => {
      rows.push({
        disciplina: discipline.discipline,
        topico: topic,
        prioridade: suggestPriority(discipline.discipline, topic),
        status: mode === 'complete' ? 'A estudar' : '—',
        revisao: mode === 'complete' ? '' : undefined,
        observacoes: mode === 'complete' ? composeObservation(jobFilter, notes, idx) : '',
      });
    });
  });
  return rows;
}

function buildAlecePresetResult(cargo, text, mode) {
  const notes = elements.notes.value.trim();
  const general = cargo.key === 'tecnico'
    ? ALECE_TECNICO_GENERAL
    : filterExcludedGeneral(cargo.key, ALECE_SUPERIOR_GENERAL);

  let specific = [];
  let warnings = [];
  let parser = 'ALECE por cargo';

  if (cargo.key === 'direito') {
    specific = ALECE_DIREITO_SPECIFIC;
    parser = 'Preset ALECE/Direito';
    warnings.push(isProbablyCorrupted(text)
      ? 'PDF com texto corrompido. Resultado gerado a partir do preset validado da ALECE para Direito.'
      : 'Resultado gerado a partir do preset validado da ALECE para Direito.');
  } else {
    const extracted = extractAleceSpecificByCargo(text, cargo);
    specific = extracted.blocks;
    warnings = warnings.concat(extracted.warnings);
    if (!specific.length) {
      warnings.push('Os conhecimentos específicos desse cargo não foram extraídos com segurança. Mantive apenas os conhecimentos gerais da ALECE. Cole o trecho específico do cargo para melhorar o resultado.');
    }
  }

  const disciplines = dedupeBlocks([...general, ...specific]);
  const overview = overviewForAleceCargo(cargo);
  overview.parser = parser;
  const rows = buildRows(disciplines, mode, cargo.name, notes);
  return { overview, disciplines, rows, rawText: cleanExtractedText(text), mode, usedPreset: true, warnings };
}

function findAleceGeneralSection(text, cargo) {
  const t = cleanExtractedText(text);
  if (cargo.key === 'tecnico') {
    const start = t.search(/14\.2\.3\s*CONHECIMENTOS GERAIS PARA O CARGO DE TÉCNICO LEGISLATIVO/i);
    if (start >= 0) return t.slice(start, start + 14000);
    return '';
  }
  const start = t.search(/14\.2\.2\s*CONHECIMENTOS GERAIS PARA OS CARGOS DE NÍVEL SUPERIOR/i);
  if (start < 0) return '';
  const end = t.search(/14\.2\.3\s*CONHECIMENTOS GERAIS PARA O CARGO DE TÉCNICO LEGISLATIVO/i);
  return t.slice(start, end > start ? end : start + 20000);
}

function findAleceSpecificWindow(text, cargo) {
  const t = cleanExtractedText(text);
  const cargoPattern = cargo.key === 'tecnico'
    ? /CARGO\s+17:\s*TÉCNICO LEGISLATIVO/i
    : new RegExp(`CARGO\\s+\\d+:\\s+ANALISTA LEGISLATIVO\\s+[–-]\\s+ÁREA:\\s+${escapeRegExp(cargo.aliases[0])}`, 'i');
  const match = cargoPattern.exec(t);
  if (!match) return '';
  const start = match.index;
  const rest = t.slice(start + match[0].length);
  const nextCargo = rest.search(/\nCARGO\s+\d+:/i);
  return t.slice(start, nextCargo >= 0 ? start + match[0].length + nextCargo : start + 16000);
}

function extractAleceSpecificByCargo(text, cargo) {
  const source = findAleceSpecificWindow(text, cargo);
  if (!source) return { blocks: [], warnings: ['Não localizei com segurança o bloco específico do cargo dentro do texto fornecido.'] };
  const blocks = extractDisciplineBlocks(source);
  const filtered = blocks.filter((b) => !/legislação de interesse institucional/i.test(b.discipline));
  return { blocks: filtered, warnings: [] };
}

function buildGenericResult(text, mode) {
  const cleaned = cleanExtractedText(text);
  const overview = overviewFromText(cleaned);
  const disciplines = extractDisciplineBlocks(cleaned);
  const rows = buildRows(disciplines, mode, elements.jobFilter.value.trim(), elements.notes.value.trim());
  return { overview, disciplines, rows, rawText: cleaned, mode, usedPreset: false, warnings: [] };
}

function buildResult(text) {
  const cleaned = cleanExtractedText(text);
  const mode = getMode();
  const cargo = detectAlece(cleaned) ? matchAleceCargo(elements.jobFilter.value.trim()) : null;
  if (cargo) {
    return buildAlecePresetResult(cargo, cleaned, mode);
  }
  const generic = buildGenericResult(cleaned, mode);
  if (isProbablyCorrupted(cleaned) && generic.disciplines.length < 2) {
    generic.warnings = ['Texto do PDF parece corrompido. Cole o trecho do conteúdo programático ou informe o cargo/recorte para a ALECE.'];
  }
  return generic;
}

function render(result) {
  elements.resultSection.classList.remove('hidden');
  renderOverview(result.overview, result.disciplines.length, result.rows.length, result.usedPreset, result.warnings || []);
  renderDisciplines(result.disciplines);
  renderTable(result.rows, result.mode);
}

function renderOverview(overview, disciplineCount, rowCount, usedPreset, warnings) {
  const cards = [
    ['Título', overview.title],
    ['Cargo/recorte', overview.selectedCargo || 'Não informado'],
    ['Fases', overview.phases.join(' • ')],
    ['Remuneração', overview.salaries.join(' • ') || 'Não identificada'],
    ['Jornada', overview.workload],
    ['Parser', usedPreset ? `${overview.parser} (mais confiável)` : overview.parser],
    ['Disciplinas detectadas', String(disciplineCount)],
    ['Linhas geradas', String(rowCount)],
  ];
  if (warnings?.length) cards.push(['Avisos', warnings.join(' | ')]);
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
      <p>${item.topics.length} tópico(s).</p>
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
  const warn = (result.warnings || []).map((w) => `- ${w}`).join('\n');
  return `# ${result.overview.title}\n\n## Visão geral\n\n- Cargo: ${result.overview.selectedCargo}\n- Fases: ${result.overview.phases.join(', ')}\n- Remuneração: ${result.overview.salaries.join(', ') || 'Não identificada'}\n- Jornada: ${result.overview.workload}\n- Parser: ${result.overview.parser}\n${warn ? `\n## Avisos\n\n${warn}\n` : ''}\n## Tabela verticalizada\n\n${header}\n${separator}\n${body}`;
}

function itemX(item) { return Array.isArray(item.transform) ? item.transform[4] : 0; }
function itemY(item) { return Array.isArray(item.transform) ? item.transform[5] : 0; }

async function extractTextFromPdf(fileOrArrayBuffer) {
  const pdfjsLib = await import('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.min.mjs');
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.min.mjs';
  const data = fileOrArrayBuffer instanceof ArrayBuffer ? fileOrArrayBuffer : await fileOrArrayBuffer.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data }).promise;
  const pages = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const items = (content.items || [])
      .filter((item) => item.str && String(item.str).trim())
      .sort((a, b) => {
        const yDiff = itemY(b) - itemY(a);
        if (Math.abs(yDiff) > 3) return yDiff;
        return itemX(a) - itemX(b);
      });

    const lines = [];
    for (const item of items) {
      const y = itemY(item);
      const str = String(item.str).trim();
      let line = lines.find((entry) => Math.abs(entry.y - y) <= 3);
      if (!line) {
        line = { y, parts: [] };
        lines.push(line);
      }
      line.parts.push({ x: itemX(item), str });
    }

    const pageText = lines
      .sort((a, b) => b.y - a.y)
      .map((line) => line.parts.sort((a, b) => a.x - b.x).map((part) => part.str).join(' '))
      .join('\n');

    pages.push(pageText);
  }

  return cleanExtractedText(pages.join('\n\n'));
}

async function loadSample() {
  const response = await fetch('./examples/alece-sample.txt');
  const text = await response.text();
  elements.rawText.value = text;
  elements.jobFilter.value = 'Analista Legislativo – Direito';
  state.rawText = text;
  setStatus('Exemplo ALECE carregado. Agora a versão v4 reconhece melhor os cargos da ALECE pelo campo de recorte.', 'ok');
}

async function fetchFromUrl() {
  const url = elements.urlInput.value.trim();
  if (!url) {
    setStatus('Informe uma URL pública.', 'warn');
    return;
  }
  try {
    setStatus('Buscando URL pública...', 'info');
    const response = await fetch(url);
    const contentType = response.headers.get('content-type') || '';
    if (!response.ok) throw new Error(`Falha ao buscar: ${response.status}`);
    if (contentType.includes('pdf') || url.toLowerCase().endsWith('.pdf')) {
      const buffer = await response.arrayBuffer();
      const text = await extractTextFromPdf(buffer);
      elements.rawText.value = text;
      state.rawText = text;
      setStatus('PDF remoto carregado.', 'ok');
      return;
    }
    const text = await response.text();
    elements.rawText.value = cleanExtractedText(text);
    state.rawText = elements.rawText.value;
    setStatus('Texto remoto carregado.', 'ok');
  } catch (error) {
    console.error(error);
    setStatus('Não foi possível buscar a URL. Em GitHub Pages, algumas URLs bloqueiam CORS. Cole o texto ou suba o PDF.', 'error');
  }
}

async function handlePdfUpload() {
  const file = elements.pdfInput.files?.[0];
  if (!file) return;
  try {
    setStatus('Lendo PDF...', 'info');
    const text = await extractTextFromPdf(file);
    elements.rawText.value = text;
    state.rawText = text;
    if (isProbablyCorrupted(text)) {
      setStatus('PDF lido, mas o texto parece corrompido. Para ALECE, informe o cargo/recorte ou cole o trecho do conteúdo programático.', 'warn');
    } else {
      setStatus('PDF processado com sucesso.', 'ok');
    }
  } catch (error) {
    console.error(error);
    setStatus('Falha ao processar o PDF.', 'error');
  }
}

function handleGenerate() {
  const text = elements.rawText.value.trim();
  if (!text) {
    setStatus('Cole o texto do edital, informe uma URL pública ou envie um PDF.', 'warn');
    return;
  }
  const result = buildResult(text);
  state.result = result;
  render(result);
  const warningCount = result.warnings?.length || 0;
  setStatus(`Edital processado: ${result.disciplines.length} disciplina(s) e ${result.rows.length} linha(s) geradas.${warningCount ? ' Há aviso(s) para conferir.' : ''}`, warningCount ? 'warn' : 'ok');
}

function handleClear() {
  elements.rawText.value = '';
  elements.pdfInput.value = '';
  elements.urlInput.value = '';
  elements.notes.value = '';
  elements.jobFilter.value = '';
  state.result = null;
  elements.resultSection.classList.add('hidden');
  setStatus('Campos limpos.', 'info');
}

function handleExportJson() {
  if (!state.result) return setStatus('Gere um edital primeiro.', 'warn');
  downloadText('edital-verticalizado.json', JSON.stringify(state.result, null, 2), 'application/json;charset=utf-8');
}

function handleExportCsv() {
  if (!state.result) return setStatus('Gere um edital primeiro.', 'warn');
  downloadText('edital-verticalizado.csv', toCsv(state.result.rows, state.result.mode), 'text/csv;charset=utf-8');
}

function handleExportMd() {
  if (!state.result) return setStatus('Gere um edital primeiro.', 'warn');
  downloadText('edital-verticalizado.md', toMarkdown(state.result), 'text/markdown;charset=utf-8');
}

elements.pdfInput.addEventListener('change', handlePdfUpload);
elements.fetchUrl.addEventListener('click', fetchFromUrl);
elements.loadSample.addEventListener('click', loadSample);
elements.generateBtn.addEventListener('click', handleGenerate);
elements.clearBtn.addEventListener('click', handleClear);
elements.printBtn.addEventListener('click', () => window.print());
elements.exportJson.addEventListener('click', handleExportJson);
elements.exportCsv.addEventListener('click', handleExportCsv);
elements.exportMd.addEventListener('click', handleExportMd);

setStatus('Aguardando entrada. Para a ALECE, preencha também o cargo/recorte desejado.', 'info');
