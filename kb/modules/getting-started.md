# Getting Started with Aspen Unified

## Overview

Aspen Unified (AU) is a web-based platform that hosts multiple petroleum engineering applications in a unified environment:

| Product | Purpose |
|---------|---------|
| **AUP** (Aspen Unified Planning) | Refinery linear programming and planning optimization |
| **AUS** (Aspen Unified Scheduling) | Production scheduling |
| **AURA** (Aspen Unified Reconciliation and Accounting) | Yield reconciliation and mass balance accounting |
| **AUM** (Aspen Unified Movements) | Petroleum movement tracking |
| **AU GDOT Builder** | GDOT online model construction and validation |
| **SPSP** (Strategic Planning for Sustainability Pathways) | Strategic planning |
| **Distillation Mode Manager** | Distillation mode model management |

All products share a common Home Page, role-based access control, and model management operations (checkout/checkin, snapshots, branches, archiving).

---

## Home Page

The **Home Page** is the first page when launching Aspen Unified. Access it from within a model by clicking the Unified icon (top-left corner).

### Left Navigation Panel

| Nav Item | Description |
|----------|-------------|
| **Home** | Shows your 12 most recently opened/created models with Model Name, Folder, Last check-in |
| **Planning** | AUP model landing page — Create New, Import Snapshot, Migrate PIMS Model |
| **Scheduling** | AUS model landing page |
| **Movements** | AUM model landing page |
| **Reconciliation and Accounting** | AURA model landing page |
| **GDOT** | AU GDOT Builder landing page |
| **SPSP** | SPSP model landing page |
| **Distillation Modes** | Distillation Mode model landing page |
| **Catalogs** | Catalog Home — manage Site and Price Catalogs |
| **Assay Library** | View/add Custom Assay Libraries (shared across models) |
| **Roles** *(Admin only)* | Manage site-level user roles |
| **Settings** *(Admin only)* | Global settings editor |
| **Folders** | View all models organized by folder; create/rename/delete folders |

> **Note:** The model landing pages displayed depend on which products were installed. Collapse/expand the Navigation panel using the arrow button at the bottom.


### Models Area (Center of Landing Page)

Each model landing page shows a table of models with:

| Column | Description |
|--------|-------------|
| Model Name | Click icon or name to open the model |
| Folder | Folder the model is in (if any) |
| Status | Current model state |
| Last checked in | Date/time of last check-in |

Click **...** at the end of a model row to open **Model Options** (see below).

#### Model Type Icons

| Icon represents | Description |
|----------------|-------------|
| Planning (Regular) | AUP single-site model |
| Planning (Multi-Site) | Multi-Site PIMS global model; click ˅ to expand local models |
| Scheduling | AUS model |
| AURA | Reconciliation and Accounting model |
| AUM | Movements model |
| GDOT | GDOT Builder model |
| SPSP | Strategic Planning model |
| Distillation Mode | Distillation Mode model |

#### Model State Icons

| State | Meaning |
|-------|---------|
| Available for checkout | Latest checked-in version ready for use |
| Available (update needed) | Changes in model require review/merge |
| Checked out | Model locked by a user (hover to see who) |
| Active workspaces | Number of open workspaces (hover to see users) |
| Not synced | Local model has changes not synced to Global model |
| Data Hub available | Pending Data Hub documents/data (number shown in red circle) |

### Model Options (...)

Click **...** at the end of a model row to access:

| Option | Description |
|--------|-------------|
| **Open in a new tab** | Opens model in a new browser tab |
| **View details** | Opens Model Details panel (name, description, version history) |
| **Move to folder** | Move model to a selected folder |
| **Copy model** | Full copy of all model data; copies Latest Checked-in Base Model + cases for AURA; copies Global Model + local references for Multi-Site PIMS |
| **Export model snapshot** | Creates downloadable snapshot file (`.upimz`/`.ausz`/`.augz`/`.aumz`/`.aurz`/`.dmmz`/`.spsz`) of last checked-in version; excludes revision history and results |
| **Create a case-only branch** | AUP/Multi-Site only — branch where cases can change but Base Model is locked |
| **Promote branch** | Promote child branch changes to parent (not available for AURA, AUM, Assay Manager, Distillation Mode) |
| **Create branch model** | Create child branch of selected model |
| **View branch hierarchy** | Graphical view of branch tree |
| **Manage roles** | Assign model-level roles (Owner only) |
| **Delete model** | Removes from UI; actual data deletion requires `PSCAdmin.exe purge "<modelName>"` CLI command |
| **Archive model** | Archives model + all branches to .zip (restore via `PSCAdmin unarchive`) |

> For AURA, **Archive model** includes all Base Model versions.

### Model Details Panel

Access via **... → View details**. Shows:
- **Model Name** — editable; must be unique across AU
- **Model information** — created/updated dates
- **Details** — description (max 255 chars), Model Type (AUP), Model Basis (weight/volume), database info, associated Site catalog
- **Version History** — each check-in creates a new version

#### Version History Actions

| Action | Required Role | Description |
|--------|--------------|-------------|
| Download revision snapshot | Owner, Author, Viewer | Create snapshot file from selected version |
| Sync workspace to revision | Owner, Author | Discard current workspace; reload from selected DB version |
| Rollback to revision | Owner only | Create new version based on selected old version (does not delete existing versions) |

---

## Checkout / Check-in Model

When you open a model it is **checked out** — locked to your user only. This creates a local workspace. Changes are **not saved to the database until Check-in**.

Another user can open a different workspace of the same model. When both check in, **model reconciliation** is needed to merge changes.

---


## Roles and Security

Aspen Unified uses role-based access at three levels: **Site**, **Model**, and **Catalog/Assay Library**.

> **Key rules:**
> - Higher roles include all permissions of lower levels
> - Role changes (site and user) are **not applied until you exit the model and re-open**
> - In standalone mode, you have full Administrator access

### Site Roles

| Role | Capabilities |
|------|-------------|
| **Administrator** | Add users; assign Administrator/Creator roles; manage all site and model privileges; can view all models and assign roles even without a model role. Must use `PSCAdmin assign-platform-role` CLI to add the first administrator (V14.6+) |
| **Creator** | Create, edit, view, copy models; create/import snapshots; migrate and rollback models. Also needs a Model Role to view specific models |

> Model creators automatically get the **Owner** model role for models they create.

### Model Roles — AUP, Multi-Site PIMS, AUS, SPSP

| Role | Key Permissions |
|------|----------------|
| **Owner** | Full control: create data sources, delete model, change permissions, check-in and overwrite versions, manage case sets and asset groups |
| **Author** | Publish views/layouts; receive Base Model change notifications |
| **Case Only Author** | Work with cases (add/delete/modify), run parametric analysis, create submodel calculations; **cannot** edit Base Model inputs or modify flowsheet layouts. AUP only (not applicable to AUS/SPSP) |
| **Viewer** | View and create snapshots only; cannot edit anything |

### Model Roles — AURA (Reconciliation and Accounting)

| Role | Key Permissions |
|------|----------------|
| **Owner** | Full model control; assign roles to other users |
| **Author** | Change Base Model; create/run/lock cases |
| **Case Only Author** | Import data, perform reconciliation; **cannot** change Base Model, edit objects/templates/materials/properties |
| **Viewer** | View only |

AURA detailed permissions (Owner / Author / Case Only Author / Viewer):
- View Model, reports, create snapshot, copy model: ✓/✓/✓/✓
- Delete Model: Owner only
- Modify Flowsheets, Object Templates, Materials, Properties: Owner + Author only
- Add/Delete/Modify Cases, Run reconciliation: Owner + Author + Case Only Author

### Model Roles — AUM (Movements)

| Role | Key Permissions |
|------|----------------|
| **Owner** | Full control; all inputs enabled |
| **Author** | Change Base Model; create Gantt Views; manage movement templates and settings; manage areas/permissions and alerts |
| **Case Only Author** (Operator) | Create/modify movements and tank data; import/export Excel; cannot modify model settings, check in, or change Base Model |
| **Viewer** | Read-only; can export Excel and edit tank tile templates |

AUM Movement State Transitions (all require Owner, Author, or Case Only Author unless noted):
- Scheduled → Approved → Active → Completed → Validated
- Validated → Completed: **Owner, Author only**
- Any active state → Rejected/Canceled

### Model Roles — Distillation Mode

| Role | Permissions |
|------|-------------|
| **Owner** | Assign roles, open for editing, delete model |
| **Author** | Open for editing; cannot delete |
| **Viewer** | View only |

### Assigning Roles

**Site roles** — From Home Page left nav, click **Roles** (Admin only):
1. Click **Create New** → Manage Roles dialog
2. Search for user/group (Windows AD: `\<domain>\<name>`; Azure AD: Azure account)
3. Select user row → choose role (Creator or Administrator) → Submit

**Model roles** — From model landing page:
- Administrators: click gear icon (top-right) → Manage Roles dialog
- Model owners: click **... → Manage roles** on the model row

**Catalog roles** — From Catalog Home page: click **... → User Role Settings**

---


## Creating New Models

To create a new model, you need the **Creator** or **Administrator** site role. The creator automatically becomes the **Owner** of the new model.

**General workflow:**
1. From the Home Page left nav, click the desired model type landing page
2. Click **Create New** (top-right corner) — the New Model dialog box appears
3. Complete required fields (model name, database server, input/results databases, description)
4. Click **Create** / **OK**

### Model Types and Snapshot Extensions

| Product | Nav icon | Snapshot format |
|---------|----------|-----------------|
| AUP (Planning) | Planning | `.upimz` |
| Multi-Site PIMS | Planning | `.upimz` |
| AUS (Scheduling) | Scheduling | `.ausz` |
| AUM (Movements) | Movements | `.aumz` |
| AURA (Reconciliation) | Reconciliation and Accounting | `.aurz` |
| AU GDOT Builder | GDOT | `.augz` |
| SPSP | SPSP | `.spsz` |
| Distillation Mode | Distillation Modes | `.dmmz` |

### GDOT Model Types

GDOT Builder supports two model types:
- **Non-component based** — streams modeled as bulk properties; used in middle distillate refinery (multi-draw fractionators, hydrotreaters, mixers/splitters)
- **Component based** — streams use component fractions

GDOT models are built on a flowsheet environment, then validated with diagnostic tools, and exported for deployment to GDOT Online.

---

## Model Snapshots

A snapshot is an external file containing the model's **latest checked-in input data** (no results, no revision history).

**Export snapshot:** From model landing page → **... → Export model snapshot** (or select a specific version from Version History to download that version)

**Import snapshot:** From model landing page → **Import Snapshot** → Browse for snapshot file → Import → complete Create Model fields

Snapshot file name restrictions: cannot contain `\ / : * ? " < > | '`

> For Multi-Site PIMS exports, you can choose whether to include local models in the snapshot.

For AUS, you can import a snapshot directly into Version History to add it as a new model version.

---

## Migrating Existing PIMS Models

Aspen Unified supports migration of Standard and Periodic PIMS models **version 7.0 or greater** (Standard PIMS, XPIMS, MPIMS). The original model must have run successfully in Aspen PIMS AO.

**Prerequisites:**
- `.zip` file containing a single `.pimx` PIMS file
- SQL input data server name and input database name
- SQL results data server name and results database name
- Administrator or Creator site role

**Steps:**
1. From Home Page → Planning landing page
2. Click **Migrate PIMS Model** → "Migrate an Existing PIMS Model" dialog
3. Select the `.zip` archive
4. Configure pre-migration options (especially tag handling)
5. Complete database fields and create the model

### Short vs. Long Tag Handling

| Original format | Desired AU format | Supported |
|----------------|-------------------|-----------|
| Short tag | Short tag (preserve) | ✓ |
| Short tag | Long tag (convert) | ✓ |
| Long tag | Short tag | ✗ Not supported |
| Long tag | Long tag | ✓ |

**Preserve PIMS short tags** — adds colons in a special format to maintain short tag names in AU (which is inherently a long-tag system).

**Convert to long tags** — existing PIMS description becomes the AU Name (max 20 chars excluding prefix); old tags become Abbreviations. External data files (assay, prices) must also be updated to match new names.

> **Note:** If migrating a Multi-Site PIMS (XPIMS/MPIMS), follow standard steps through step 6, then proceed to the multi-site specific dialog for additional configuration.

An **archived AUP model** (`.zip`) can also be migrated using this utility.

---

## Archiving and Restoring Models

**Archive** (from UI): Model landing page → **... → Archive model** → enter archive file name → downloads to your browser's Downloads folder as `.zip`

For AURA, the archive includes all Base Model versions.

**Restore (PSCAdmin CLI):**
```
PSCAdmin unarchive --workspace "<archiveName>"
```

**Delete model** (from UI): **... → Delete model** — removes from interface only. Actual data purge requires:
```
PSCAdmin.exe purge "<nameOfModel>"
```
Omit model name to purge all purgeable data (all deleted models).

**Restore a deleted model** (before purge):
```
PSCAdmin.exe undelete --workspace "<workspace/deleted model name>"
```

CLI utility location: `..\Program Files\AspenTech\Aspen Unified\Admin\CLI`

---

## Settings Management

### JSON Settings Editor

Access: Admin menu → Settings (within a model workspace)

The **Settings Editor** provides a JSON-based interface to edit model-level settings. Settings are organized in a hierarchical tree. Local server settings may override what's displayed — consult IT if you see discrepancies.

### Global Settings Editor (Admin Only)

Access: Home Page → Admin → Settings

The **Global Settings Page** (V14.0+) provides a guided editor for server-wide settings. Features:
- Tree-structured settings hierarchy with categories/keywords
- Search functionality to find settings by keyword
- Validation and error highlighting
- Only accessible to users with Administrator privileges

Key configuration areas (examples):
- `DataBaseCleanupSettings | SchedulingServices | PurgeForDeletedModels` — control whether AUS published DB data is deleted when a model is deleted (V15.0.4+)
- `globalSettingsEditor` supports JSON editing with full schema awareness

### Edit Settings Dialog

Access: Settings page → **Edit**

The **Edit Settings** dialog edits global settings as JSON keyword/value pairs. Keywords that are not listed use their default values. The editor provides keyword suggestions, sample values, validation, and hover descriptions, but users are expected to understand basic JSON syntax.

Editing workflow:

1. Type a product keyword, such as `s` for Scheduling, or press Space to list available keywords.
2. Select a keyword; the editor inserts the matching JSON structure.
3. Place the cursor inside `{ }` and press Space again to see available options.
4. Select options and enter values until the desired setting is defined.
5. Right-click and choose **Format Document** to apply JSON indentation.
6. Resolve validation issues until **Submit** becomes active.
7. Click **Submit** to write the visible JSON changes back to the Settings page; edited keywords apply immediately.

Editing notes:

| Hint | Detail |
|---|---|
| Restore a default | Enter a blank value for a keyword, for example `"ReportsFolder": " "`. |
| Format Document | Applies JSON indentation only; it does not fix syntax errors. |
| Error indicators | The editor marks possible problems on the right side in red. |
| `Alt+F8` | Opens errors and possible fixes; use arrows to move through errors, then rerun after correction. |
| Hover help | Shows keyword descriptions and acceptable value hints. |
| Submit | Disabled while JSON syntax errors remain. |

JSON basics used by the editor:

- Settings are key/value pairs separated by `:`.
- Keys are strings enclosed in double quotes.
- Values can be strings, numbers, booleans, arrays, objects, or `null`; string values require double quotes.
- Commas separate pairs or array items, except after the final item.
- Objects use `{ }`; arrays use `[ ]`.
- JSON comments are not supported.

---

## Folders

Folders organize models within model landing pages.

- Requires **Creator or Administrator** site role to create, delete, or rename folders
- Folder names must be unique within parent folder; max 60 characters; description max 255 characters
- Folders support nesting (folders within folders)
- Deleting a folder moves its contents up one level (contents not deleted)

**Create folder:** Folders page → **Create New** → New Folder dialog

**Model folder options** (... on model row): Move to folder, Remove from folder, Open in new tab

---

*Related modules: [Catalogs](./catalogs.md) | [Reference](./reference.md)*
