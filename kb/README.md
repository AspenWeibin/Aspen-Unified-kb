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
├── progress.md              ← progress dashboard (generated)
├── progress.json            ← 648 unique topics, status truth source
├── _build-toc.js            ← regenerator for table-of-contents.md
├── _build-progress.js       ← regenerator for progress.md
├── _init-progress.js        ← initializes/merges progress.json from TOC
└── modules/                 ← per-module KB files
    ├── welcome.md           ✅ done
    └── (12 more planned)
```

## Quick Navigation

Full outline: **[table-of-contents.md](./table-of-contents.md)**

### Modules (planned)

The product help has 16 top-level sections, which we group into the following module files:

| Module | Source top-level section(s) | Status |
|---|---|---|
| `modules/welcome.md` | Welcome · What's New | ✅ done |
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

## Continuing KB Work in a New Session

The full workflow is documented in the project skill file:

```
.github/skills/aspen-kb/SKILL.md
```

When starting a new Copilot session, you can invoke the skill directly by saying:

> "/aspen-kb 继续整理 Aspen Unified KB，当前进度在 `.github/kb/progress.json`。"

Or, if you prefer natural language:

> "继续整理 Aspen Unified KB。请使用 `aspen-kb` skill，当前进度在 `.github/kb/progress.json`。"

The skill covers:
- How to find the next `todo` module
- Which pages to include vs. skip
- How to write a module markdown file
- How to update `progress.json` and rebuild `progress.md`

---

## How to Regenerate

The TOC outline is regenerated from the source data:

```powershell
cd .github/kb
node _build-toc.js
```

Re-run after the help output is rebuilt (i.e., whenever `Data/Tocs/Master*.js` changes).

## Conventions

- Links use repo-root-relative paths (`../../Content/html/...`) so they resolve when viewed from `.github/kb/`.
- Module files use **flexible sectioning** — group content by what makes sense for that module, not a fixed template. Common sections include: product overview, key concepts, configuration, workflows, field/parameter reference. See `modules/welcome.md` as a style reference.
- Each section should link back to the relevant `Content/html/*.htm` source pages.
- Pages with no product knowledge value (navigation, legal, help-system how-to) are marked `skip` in `progress.json` and omitted from module files.
