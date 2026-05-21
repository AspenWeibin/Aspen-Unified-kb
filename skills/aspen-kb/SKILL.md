---
name: aspen-kb
description: 'Continue building the Aspen Unified Markdown knowledge base from MadCap help output. Use when the user says continue Aspen KB, 整理 Aspen Unified KB, update progress.json or progress.md, summarize help pages into .github/kb/modules/*.md, or resume KB work across sessions.'
user-invocable: true
---

# Aspen Unified KB

Continue building the product knowledge base under `.github/kb/` from the MadCap Flare help output in this workspace.

## When to Use

- Continue KB work in a new session
- Summarize `Content/html/*.htm` pages into Markdown
- Update `.github/kb/modules/*.md`
- Mark entries in `.github/kb/progress.json`
- Rebuild `.github/kb/progress.md`

## Workspace Context

- **Repo root:** `C:\github\help`
- **Entry page:** `Default.htm`
- **Help source:** `Content/html/*.htm`
- **TOC source:** `Data/Tocs/Master*.js`
- **KB root:** `.github/kb/`
- **Status source of truth:** `.github/kb/progress.json`
- **Dashboard generator:** `.github/kb/_build-progress.js`
- **Note:** this workspace is **not** a git repository

## Procedure

### 1. Check current progress

Read:
- `.github/kb/progress.json`
- `.github/kb/progress.md`
- the target module file under `.github/kb/modules/`

Treat `progress.json` as the source of truth.

### 2. Pick the next KB slice

Prefer a small, coherent chunk:
- one module subsection
- one product area
- one cluster of related HTML topics

Do not spread a single pass across too many unrelated pages.

### 3. Read the source HTML

Read the relevant `Content/html/*.htm` pages.

For large files:
- use ranged reads
- extract the meaningful sections only

MadCap notes:
- `MCDropDownHead` = collapsible section title
- `MCDropDownBody` = collapsible content
- `mc-variable` spans are product/version text
- keyword anchors such as `kanchor###` can be ignored

### 4. Write or extend the module Markdown

Target file:
- `.github/kb/modules/<module>.md`

Preferred output shape:
- `##` major product topic
- `###` subtopics
- tables for fields/columns/options
- numbered lists for workflows
- short notes for constraints and caveats

Group related HTML pages into one KB section rather than creating one heading per source file.

### 5. Decide what to skip

Mark as `skip` when the page has little KB value, such as:
- help-system usage pages
- legal/copyright pages
- pure navigation or stub pages
- empty mini-TOC wrappers
- external-link collections

Rule of thumb: if it does not help someone understand or operate the product, skip it.

### 6. Update progress

After writing KB content:
- set covered pages to `done`
- optionally use `in-progress` for partially processed areas
- add short notes
- set `updated_at`

Valid statuses:
- `todo`
- `in-progress`
- `done`
- `skip`

### 7. Rebuild the dashboard

From `.github/kb` run:

```powershell
node _build-progress.js
```

This regenerates `.github/kb/progress.md`.

## Important Conventions

- Keep KB content in Markdown under `.github/kb/modules/`
- Do not edit `.github/kb/progress.md` by hand
- Update `progress.json` before rebuilding the dashboard
- Preserve useful product detail; omit help-system noise
- If resuming work, use the latest `progress.json` state instead of stale narrative notes

## Module Mapping

| Module | File |
|---|---|
| `welcome` | `.github/kb/modules/welcome.md` |
| `getting-started` | `.github/kb/modules/getting-started.md` |
| `pims` | `.github/kb/modules/pims.md` |
| `scheduling` | `.github/kb/modules/scheduling.md` |
| `gdot` | `.github/kb/modules/gdot.md` |
| `aura` | `.github/kb/modules/aura.md` |
| `aum` | `.github/kb/modules/aum.md` |
| `sps` | `.github/kb/modules/sps.md` |
| `distillation-mode-manager` | `.github/kb/modules/distillation-mode-manager.md` |
| `assay-manager` | `.github/kb/modules/assay-manager.md` |
| `catalogs` | `.github/kb/modules/catalogs.md` |
| `model-management` | `.github/kb/modules/model-management.md` |
| `reference` | `.github/kb/modules/reference.md` |
