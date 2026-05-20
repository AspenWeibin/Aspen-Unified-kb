# Aspen Unified Help — Knowledge Base

This knowledge base is derived from the MadCap Flare WebHelp output located at the repository root (`Default.htm` + `Content/` + `Data/`). It re-organizes the product documentation into Markdown for easier reading, searching, and AI assistance.

## Source

- **Product**: Aspen Unified (and family: PIMS, Multi-Site PIMS, Scheduling, GDOT Builder, AURA, AUM, SPS, Distillation Mode Manager, Assay Manager, Catalogs)
- **Help build**: 20.1.9037.40627 (built 2026-05-18)
- **Source HTML**: `Content/html/*.htm` (697 files, ~18 MB)
- **TOC data**: `Data/Tocs/Master*.js`

## Layout

```
.github/kb/
├── README.md                ← you are here
├── table-of-contents.md     ← full 1209-node outline, links to source HTML
├── _build-toc.js            ← regenerator for table-of-contents.md
└── modules/                 ← per-module deep-dive notes (to be added)
```

## Quick Navigation

Full outline: **[table-of-contents.md](./table-of-contents.md)**

### Modules (planned)

The product help has 16 top-level sections, which we group into the following module files:

| Module | Source top-level section(s) | Status |
|---|---|---|
| `modules/welcome.md` | Welcome · What's New | _planned_ |
| `modules/getting-started.md` | Getting Started with Aspen Unified | _planned_ |
| `modules/pims.md` | Using Aspen Unified PIMS and Aspen Multi-Site PIMS | _planned_ |
| `modules/scheduling.md` | Using Aspen Unified Scheduling | _planned_ |
| `modules/gdot.md` | Using Aspen Unified GDOT Builder | _planned_ |
| `modules/aura.md` | Using Aspen Unified Reconciliation and Accounting | _planned_ |
| `modules/aum.md` | Using Aspen Unified Movements | _planned_ |
| `modules/sps.md` | Using AspenTech Strategic Planning for Sustainability Pathways | _planned_ |
| `modules/distillation-mode-manager.md` | Using Distillation Mode Manager | _planned_ |
| `modules/assay-manager.md` | Using the Assay Manager System | _planned_ |
| `modules/catalogs.md` | Using Aspen Unified Catalogs | _planned_ |
| `modules/model-management.md` | Model Management · Common Functions in Unified Applications | _planned_ |
| `modules/reference.md` | Common Equations · Glossary | _planned_ |

## How to Read

- **Browse**: open [`table-of-contents.md`](./table-of-contents.md) — every entry links back to the original HTML topic under `Content/html/`.
- **Search**: use repo-wide text search; both this KB and the source HTML are plain text.
- **Original UI**: open `Default.htm` at the repo root in a browser for the full MadCap WebHelp experience (left-side TOC, search, index, glossary).

## How to Regenerate

The TOC outline is regenerated from the source data:

```powershell
cd .github/kb
node _build-toc.js
```

Re-run after the help output is rebuilt (i.e., whenever `Data/Tocs/Master*.js` changes).

## Conventions

- Links use repo-root-relative paths (`../../Content/html/...`) so they resolve when viewed from `.github/kb/`.
- Module files (when added) will follow this template:
  - `## Overview` — what this module does, key concepts
  - `## Topics` — curated subset of pages with one-line summaries
  - `## Workflows` — common task-oriented sequences
  - `## Reference` — dialog boxes, screens, API surfaces
  - Each item links back to the original `Content/html/*.htm`.
