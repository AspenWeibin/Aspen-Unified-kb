// Renders progress.md from progress.json (the single source of truth).
// Usage: node _build-progress.js

const fs = require('fs');
const path = require('path');

const JSON_FILE = path.resolve(__dirname, 'progress.json');
const OUT_FILE = path.resolve(__dirname, 'progress.md');

const data = JSON.parse(fs.readFileSync(JSON_FILE, 'utf8'));
const entries = data.entries;

const BAR_WIDTH = 20;
function bar(pct) {
  const filled = Math.round((pct / 100) * BAR_WIDTH);
  return '▓'.repeat(filled) + '░'.repeat(BAR_WIDTH - filled);
}
function pctNum(done, total) {
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

// Module display order + display titles
const MODULE_ORDER = [
  ['welcome', 'Welcome / What\'s New'],
  ['getting-started', 'Getting Started with Aspen Unified'],
  ['pims', 'Aspen Unified PIMS / Multi-Site PIMS'],
  ['scheduling', 'Aspen Unified Scheduling'],
  ['gdot', 'Aspen Unified GDOT Builder'],
  ['aura', 'Aspen Unified Reconciliation and Accounting'],
  ['aum', 'Aspen Unified Movements'],
  ['sps', 'AspenTech Strategic Planning for Sustainability Pathways'],
  ['distillation-mode-manager', 'Distillation Mode Manager'],
  ['assay-manager', 'Assay Manager System'],
  ['catalogs', 'Aspen Unified Catalogs'],
  ['model-management', 'Model Management / Common Functions'],
  ['reference', 'Common Equations / Glossary'],
];

// Group entries by module, then by section
const byModule = new Map();
for (const e of entries) {
  if (!byModule.has(e.module)) byModule.set(e.module, new Map());
  const sections = byModule.get(e.module);
  if (!sections.has(e.section)) sections.set(e.section, []);
  sections.get(e.section).push(e);
}

function countByStatus(items) {
  const c = { todo: 0, 'in-progress': 0, done: 0, skip: 0 };
  for (const it of items) c[it.status] = (c[it.status] || 0) + 1;
  // Denominator excludes 'skip' (not counted toward work).
  const total = items.length - c.skip;
  // 'in-progress' counts as half done for percentage purposes.
  const doneWeighted = c.done + c['in-progress'] * 0.5;
  return { ...c, total, pct: pctNum(doneWeighted, total) };
}

const lines = [];
lines.push('# KB Progress');
lines.push('');
lines.push(`_Generated from \`progress.json\` (${entries.length} unique topics). Re-run \`node _build-progress.js\` after edits._`);
lines.push('');

// Overall
const overall = countByStatus(entries);
lines.push('## Overall');
lines.push('');
lines.push(`**${overall.done} done · ${overall['in-progress']} in-progress · ${overall.todo} todo · ${overall.skip} skip · ${overall.pct}%**`);
lines.push('');
lines.push('```');
lines.push(`${bar(overall.pct)}  ${overall.pct}%`);
lines.push('```');
lines.push('');

// Modules summary table
lines.push('## Modules');
lines.push('');
lines.push('| Module | Done | In-progress | Todo | Skip | Total | % | Progress |');
lines.push('|---|---:|---:|---:|---:|---:|---:|---|');
for (const [slug, title] of MODULE_ORDER) {
  const items = entries.filter(e => e.module === slug);
  const s = countByStatus(items);
  lines.push(`| [${title}](#module-${slug}) | ${s.done} | ${s['in-progress']} | ${s.todo} | ${s.skip} | ${s.total} | ${s.pct}% | \`${bar(s.pct)}\` |`);
}
lines.push('');

// Per-module section breakdown
for (const [slug, title] of MODULE_ORDER) {
  const sections = byModule.get(slug);
  if (!sections) continue;

  const moduleItems = entries.filter(e => e.module === slug);
  const ms = countByStatus(moduleItems);

  lines.push(`## Module: ${slug}`);
  lines.push('');
  lines.push(`**${title}**`);
  lines.push('');
  lines.push(`Progress: **${ms.done}/${ms.total} (${ms.pct}%)**  \`${bar(ms.pct)}\``);
  lines.push('');

  // Sections in TOC order (insertion order from _init-progress.js depth-first walk)
  const sectionList = [...sections.entries()];

  lines.push('| Section | Done | In-progress | Todo | Skip | Total | % |');
  lines.push('|---|---:|---:|---:|---:|---:|---:|');
  for (const [sectionTitle, items] of sectionList) {
    const s = countByStatus(items);
    lines.push(`| ${sectionTitle || '_(unsorted)_'} | ${s.done} | ${s['in-progress']} | ${s.todo} | ${s.skip} | ${s.total} | ${s.pct}% |`);
  }
  lines.push('');
}

fs.writeFileSync(OUT_FILE, lines.join('\n'), 'utf8');
const size = fs.statSync(OUT_FILE).size;
console.log(`Wrote ${OUT_FILE}  (${(size / 1024).toFixed(1)} KB, ${lines.length} lines)`);
console.log(`Overall: ${overall.done}/${overall.total} done (${overall.pct}%)`);
