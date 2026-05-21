// Initializes progress.json from the TOC, mapping each unique URL to a module + section.
// Run once. After that, edit progress.json directly (status field) or via _build-progress.js.
// Usage: node _init-progress.js

const fs = require('fs');
const path = require('path');

const TOCS_DIR = path.resolve(__dirname, '..', '..', 'Data', 'Tocs');
const OUT_FILE = path.resolve(__dirname, 'progress.json');

function loadDefine(file) {
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/define\s*\(\s*([\s\S]*)\s*\)\s*;?\s*$/);
  if (!m) throw new Error('Cannot parse ' + file);
  return Function('"use strict"; return (' + m[1] + ');')();
}

const master = loadDefine(path.join(TOCS_DIR, 'Master.js'));
const chunks = [];
for (let i = 0; i < master.numchunks; i++) {
  chunks.push(loadDefine(path.join(TOCS_DIR, `${master.prefix}${i}.js`)));
}

// Reverse index: nodeIndex -> { url, title }
const nodeMeta = new Map();
for (const chunk of chunks) {
  for (const [url, meta] of Object.entries(chunk)) {
    (meta.i || []).forEach((idx, k) => {
      nodeMeta.set(idx, { url, title: (meta.t || [])[k] || '(untitled)' });
    });
  }
}

// Module slug per top-level TOC position (16 top-level nodes -> 13 modules).
const MODULE_BY_TOP_INDEX = [
  'welcome',                      // 0: Welcome
  'welcome',                      // 1: What's New
  'getting-started',              // 2: Getting Started with Aspen Unified
  'pims',                         // 3: Using Aspen Unified PIMS and Aspen Multi-Site PIMS
  'scheduling',                   // 4: Using Aspen Unified Scheduling
  'gdot',                         // 5: Using Aspen Unified GDOT Builder
  'aura',                         // 6: Using Aspen Unified Reconciliation and Accounting
  'aum',                          // 7: Using Aspen Unified Movements
  'sps',                          // 8: Using AspenTech Strategic Planning for Sustainability Pathways
  'distillation-mode-manager',    // 9: Using Distillation Mode Manager
  'assay-manager',                // 10: Using the Assay Manager System
  'catalogs',                     // 11: Using Aspen Unified Catalogs
  'model-management',             // 12: Model Management
  'model-management',             // 13: Common Functions in Unified Applications
  'reference',                    // 14: Common Equations
  'reference',                    // 15: Glossary
];

// Walk TOC. For each unique URL, record the FIRST { module, section, moduleTitle, sectionTitle } seen.
const urlEntries = new Map(); // url -> entry

function walk(nodes, topIdx, level2Title) {
  for (const node of nodes) {
    const meta = nodeMeta.get(node.i);
    if (!meta) continue;

    // At level 0 (children of root), node itself is a top-level module entry.
    // The "section" is the level-2 title (the child's title), so when we recurse into
    // a top-level node, we pass each direct child's title as section context.
    const isTopLevel = topIdx === null;
    const currentTopIdx = isTopLevel ? nodes.indexOf(node) : topIdx;
    const moduleSlug = MODULE_BY_TOP_INDEX[currentTopIdx] || 'unsorted';
    const moduleTitle = isTopLevel ? meta.title : null; // set on first level

    let section = level2Title;
    if (isTopLevel) {
      // The top-level node itself becomes section = its own title (so leaf at module-level shows there)
      section = meta.title;
    } else if (section === null) {
      // We're a direct child of a top-level node -> we are level-2; our title becomes the section
      section = meta.title;
    }

    if (!urlEntries.has(meta.url)) {
      urlEntries.set(meta.url, {
        url: meta.url,
        title: meta.title,
        module: moduleSlug,
        moduleTitle: isTopLevel ? meta.title : nodeMeta.get(master.tree.n[currentTopIdx].i).title,
        section,
        status: 'todo',
        notes: '',
        updated_at: null,
      });
    }

    if (node.n && node.n.length) {
      // For children: keep section as already chosen (i.e., the level-2 title or current level-2 ancestor)
      const nextLevel2 = isTopLevel ? null : section;
      walk(node.n, currentTopIdx, nextLevel2);
    }
  }
}

walk(master.tree.n, null, null);

// Preserve depth-first TOC order from the walk above.
// This keeps section ordering aligned with the original product structure
// instead of re-sorting sections alphabetically inside each module.
const entries = [...urlEntries.values()];

const payload = {
  schema_version: 1,
  generated_at: new Date().toISOString(),
  total_unique_urls: entries.length,
  status_values: ['todo', 'in-progress', 'done', 'skip'],
  entries,
};

if (fs.existsSync(OUT_FILE)) {
  // Preserve existing status/notes/updated_at when re-initializing
  const existing = JSON.parse(fs.readFileSync(OUT_FILE, 'utf8'));
  const byUrl = new Map((existing.entries || []).map(e => [e.url, e]));
  for (const e of payload.entries) {
    const prev = byUrl.get(e.url);
    if (prev) {
      e.status = prev.status || e.status;
      e.notes = prev.notes || e.notes;
      e.updated_at = prev.updated_at || e.updated_at;
    }
  }
  console.log('Merged with existing progress.json (preserved status/notes).');
}

fs.writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2), 'utf8');
console.log(`Wrote ${OUT_FILE}`);
console.log(`Unique URLs: ${entries.length}`);
const byModule = entries.reduce((acc, e) => {
  acc[e.module] = (acc[e.module] || 0) + 1;
  return acc;
}, {});
console.log('Per module:');
for (const [m, n] of Object.entries(byModule).sort()) {
  console.log(`  ${m.padEnd(28)} ${n}`);
}
