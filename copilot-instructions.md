# Project Guidelines

## Workspace Purpose

This workspace contains MadCap Flare WebHelp output for Aspen Unified and a derived Markdown knowledge base under `.github/kb/`.

## KB Workflow

- For KB maintenance tasks, use the `aspen-kb` skill in `.github/skills/aspen-kb/`.
- Treat `.github/kb/progress.json` as the source of truth for KB status.
- Rebuild `.github/kb/progress.md` with `node _build-progress.js` after updating progress.
- Write product summaries into `.github/kb/modules/*.md`.
- Skip help-system navigation, legal boilerplate, and empty stub pages unless the user explicitly asks for them.

## Build and Refresh

Run from `.github/kb`:

```powershell
node _build-toc.js
node _build-progress.js
```

## Conventions

- This workspace is not a git repository.
- Prefer concise Markdown summaries over page-by-page transcription.
- Preserve product behavior, workflows, field meanings, and constraints.

# Copilot Skill Registration

- skill: skills/aspen-kb/SKILL.md
	description: "Aspen Unified KB 构建与维护工作流，详见 SKILL.md"
	applyTo: "*"
	model: "GPT-4.5.high"
	contextLimit: 400
