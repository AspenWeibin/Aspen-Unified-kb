// Builds table-of-contents.md from MadCap Flare TOC data.
// Usage: node _build-toc.js

const fs = require('fs');
const path = require('path');

const TOCS_DIR = path.resolve(__dirname, '..', '..', 'Data', 'Tocs');
const OUT_FILE = path.resolve(__dirname, 'table-of-contents.md');
const HELP_ROOT = 'C:/github/help'; // for resolving relative links from kb/

function loadDefine(file) {
  const src = fs.readFileSync(file, 'utf8');
  // The file is: define({...});
  // Use Function to evaluate the object literal.
  const m = src.match(/define\s*\(\s*([\s\S]*)\s*\)\s*;?\s*$/);
  if (!m) throw new Error('Cannot parse ' + file);
  // eslint-disable-next-line no-new-func
  return Function('"use strict"; return (' + m[1] + ');')();
}

const master = loadDefine(path.join(TOCS_DIR, 'Master.js'));
const chunks = [];
for (let i = 0; i < master.numchunks; i++) {
  chunks.push(loadDefine(path.join(TOCS_DIR, `${master.prefix}${i}.js`)));
}

// Build reverse index: tocNodeIndex -> { url, title, bookmark }
const nodeMeta = new Map();
for (const chunk of chunks) {
  for (const [url, meta] of Object.entries(chunk)) {
    const idxs = meta.i || [];
    const titles = meta.t || [];
    const bookmarks = meta.b || [];
    for (let k = 0; k < idxs.length; k++) {
      nodeMeta.set(idxs[k], {
        url,
        title: titles[k] || '(untitled)',
        bookmark: bookmarks[k] || '',
      });
    }
  }
}

// Stats
let totalNodes = 0;
let nodesWithoutMeta = 0;

const lines = [];
lines.push('# Aspen Help — Table of Contents');
lines.push('');
lines.push('> Generated from `Data/Tocs/Master*.js`. Source files: `Content/html/*.htm`.');
lines.push('> Links are relative to repo root.');
lines.push('');

function walk(nodes, depth) {
  if (!nodes) return;
  for (const node of nodes) {
    totalNodes++;
    const meta = nodeMeta.get(node.i);
    const indent = '  '.repeat(depth);
    if (!meta) {
      nodesWithoutMeta++;
      lines.push(`${indent}- *(node ${node.i} — no metadata)*`);
    } else {
      // url begins with '/Content/...'. Make it relative from .github/kb/ -> ../../Content/...
      const bm = meta.bookmark || '';
      const bmPart = bm ? (bm.startsWith('#') ? bm : '#' + bm) : '';
      const relUrl = '../..' + meta.url + bmPart;
      lines.push(`${indent}- [${meta.title}](${relUrl})`);
    }
    if (node.n && node.n.length) walk(node.n, depth + 1);
  }
}

walk(master.tree.n, 0);

fs.writeFileSync(OUT_FILE, lines.join('\n'), 'utf8');

const size = fs.statSync(OUT_FILE).size;
console.log(`Wrote ${OUT_FILE}`);
console.log(`Nodes: ${totalNodes}, without metadata: ${nodesWithoutMeta}`);
console.log(`Size: ${(size / 1024).toFixed(1)} KB, lines: ${lines.length}`);
