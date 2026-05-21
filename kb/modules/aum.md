# Aspen Unified Movements (AUM)

> **Source:** `Content/html/UnifiedAUM/`
> **Version:** Aspen Unified V15.0.5

## Quick Map

Use this section as the local table of contents for fast navigation inside the AUM KB.

- **Getting started:** [Overview](#overview) · [Navigation Model](#navigation-model) · [Core Operating Workflows](#core-operating-workflows)
- **Core operations:** [Tanks](#tanks) · [Movements](#movements) · [Gantt](#gantt) · [Orders](#orders)
- **Rules and settings:** [Roles and Permissions](#roles-and-permissions) · [Model Settings](#model-settings) · [Reports and Cutoffs](#reports-and-cutoffs)
- **Admin and configuration:** [Model Data](#model-data) · [Model Management](#model-management)
- **Integration and technical reference:** [Exporting Movements to AURA](#exporting-movements-to-aura) · [Technical Reference](#technical-reference)

## Overview

Aspen Unified Movements (**AUM**) is the operations-facing layer for tracking tank inventories and managing material movements across their lifecycle. It sits between planning/scheduling and AURA reconciliation:

- Operators monitor **tanks**, **movements**, and **movement timing**
- AUM calculates real-time tank and movement attributes during monitoring cycles
- Multi-day movement data is prorated into daily **Events** and sent to **AURA**
- AURA then performs daily material balance reconciliation

### What AUM is used for

| Area | Purpose |
|---|---|
| **Tanks** | Monitor inventory, level, status, and related tank attributes |
| **Movements** | Create, schedule, activate, monitor, duplicate, and close movements |
| **Gantt** | View movement timing visually by source/destination resource |
| **Reports and cutoffs** | Review movement and inventory snapshots from cutoff data |
| **Settings** | Control display, report, and general application defaults |

### Key integration points

| Integration | How AUM uses it |
|---|---|
| **AURA model** | AUM tanks originate from the linked AURA model and reuse AURA storage attributes and expressions |
| **AURA events import** | Movement data can be exported/imported into AURA as daily Events |
| **Scheduling context** | AUM executes and monitors real operational movements that sit between planning and reconciliation |

## Navigation Model

AUM uses the standard Aspen Unified shell with three main UI regions:

| Region | Purpose |
|---|---|
| **Application bar** | Global actions and model-level commands |
| **Left navigation panel** | Entry points into Tanks, Movements, Gantt, Orders, Reports, and settings-related pages |
| **Right operations/details panel** | Page-specific actions and detail panels such as Tank Details, Movement Details, Bulk Edit, Validation, and Alerts |

### Entry points worth remembering

| Entry point | What it opens |
|---|---|
| **Tanks** | Tank tiles/list plus related trends and movement context |
| **Movements** | Movement table and toolbar actions |
| **Gantt** | Saved Gantt Views and timeline-based movement monitoring |
| **Orders** | Grouped movement view for related movements |

## Core Operating Workflows

The product documentation frames AUM around four recurring operator workflows.

### Schedule, approve, and activate movements

1. Identify source and destination objects involved in the transfer.
2. Choose the right measurement basis (**Source**, **Destination**, or **Meter**) for accrued quantity tracking.
3. Create the movement, typically from a **Movement Template**, so defaults such as state and measurement type are prefilled.
4. When execution starts, enter **Actual Start Time** to move the movement into **Active** state.

**Important modeling rule:** when multiple flows affect the same destination, it is safer to measure transfer using a source that is not itself affected by multiple concurrent movements.

### Monitor tank levels

1. Use the **Tank Calculator** to estimate how a movement will change inventory or level.
2. Use **Time to Level** to estimate when a tank will hit a target level.
3. Monitor tank status and level-related attributes from the Tanks page or Tank Details Panel.

### Monitor, update, and close movements

1. Filter active movements on the **Movements** page or review them in **Gantt View**.
2. Compare **Accrued** quantities against scheduled quantities.
3. Review movements nearing completion by end time.
4. Enter **Actual End Time** to complete the movement when transfer is done.

### Use reports from cutoff snapshots

1. Select a report time range.
2. AUM uses the cutoff nearest the start time and the cutoff nearest the end time.
3. Review **Movement Report** or **Tank Inventory Report** based on those snapshots.

### Workflow constraints

- Movement state changes must follow the configured **movement lifecycle**
- Role permissions still govern who can create, edit, approve, activate, or delete records
- Monitoring calculations for tanks and movements are performed by the backend **Monitoring Agent**

## Tanks

### Relationship to AURA

AUM tanks are loaded from the linked **AURA** model. AUM reuses the AURA tank object template and its configured attributes/expressions.

> **Important:** AUM loads both AURA **Tanks** and **Pipelines** (storages), but simplifies the UI by showing both under the term **Tanks**.

### Main views

| View | Best for | Notes |
|---|---|---|
| **Tank Tiles View** | Operational monitoring | Visual tank cards with status, material, and selected attributes |
| **Tank List View** | Table analysis and export | Full list with attribute columns, filters, and export support |

### Tank Tiles View

Default tile attributes include:

- `Meas_Vol_End`
- `Density`
- `Temperature`
- `Gauge`

Key actions:

| Action | Notes |
|---|---|
| **Edit Tank Tiles** | Configure up to 6 displayed attributes per tile |
| **Filter Tanks** | Filter by keyword, tank status, material, and area |
| **Open Tank Details Panel** | Double-click a tile or use the operations panel |
| **View Data Trends** | Available when historian-tag-based expressions are configured |
| **View associated Movements** | Shows movements where the tank is a source or destination |

### Tank List View

The list view supports saved preferences, whole-table filter clearing, and grid export.

General column families include:

| Column family | Examples |
|---|---|
| **General** | Tank, Alert, Status |
| **Property attributes** | `Comp_Track_Enabled`, `Comp_Track_Density`, `Density`, `Density_Begin` |
| **Operational values** | Gauge-, volume-, and other tank-related attributes from the linked AURA model |

### Tank Details Panel

The **Tank Details Panel** is the main inspection and edit surface for a single tank. It can be opened from:

1. **Tank Tiles View**
2. **Tank List View**
3. **Tanks Data Panel**
4. **Movements** page / **Movements Data Panel** by clicking a tank in **Source** or **Destination**

Key behaviors:

- The panel can be resized and pinned
- Tank identity comes from the linked **AURA Base Model**, so the tank name itself is not edited in AUM
- Attribute values shown here are near-real-time values refreshed by the **Monitoring Agent**

#### Tank status model

| Status | Meaning |
|---|---|
| **Up** | Tank level is increasing; positive flow rate |
| **Down** | Tank level is decreasing; negative flow rate |
| **Static** | Tank level is not changing |
| **Error** | Calculation or expression problem prevents a valid status/result |
| **Disabled** | Tank is out of service |

Status colors come from **Display Settings** and the threshold logic comes from **General Settings**.

#### Attributes tab

| Capability | Notes |
|---|---|
| **View AURA-derived attributes** | Tank attributes and expressions come from the linked AURA tank template |
| **Edit blue values** | Overridden values are highlighted in yellow after Apply |
| **Override with comments** | Comment limit is 120 chars |
| **Recalculate on next monitoring cycle** | Overrides affect dependent values in the next monitoring cycle |
| **Correct expression errors** | Red-dot indicators highlight attribute expression errors |
| **View override history / clear overrides** | Available from cell context menu or row-end action |

#### Cutoffs tab

Tank cutoffs expose snapshot data by date range.

| Column | Meaning |
|---|---|
| **Cutoff Name** | Snapshot identifier |
| **Event Time** | Cutoff timestamp |
| **Cutoff Type** | `Ad hoc`, `Scheduled`, or `Movement` |
| **View** | Opens detailed cutoff data for edit/recalculation |

Cutoff behavior mirrors movement cutoffs:

- **Apply Changes** recalculates dependent values immediately
- Overrides apply only to that cutoff snapshot
- If an override is entered at the cutoff event time, AUM clears it immediately afterward

### Tank Calculator

The **Tank Volume Calculator** is a what-if utility launched from the **Application Bar**.

#### Inputs

| Input | Notes |
|---|---|
| **Tank** | Loads default tank values from the linked AURA base model |
| **Material** | Uses linked AURA material properties such as density |
| **Ambient Temp** | Only affects calculation when the tank is configured as shell-corrected |
| **Contained Sediment / Free Water Level / Gauge / Pressure / Density / Temperature** | Editable calculation inputs |

Important behavior:

- Calculator defaults inherit current tank attribute values, including overrides
- **Calculation** computes results
- **Reset** restores the starting values

#### Result concepts

| Result | Meaning |
|---|---|
| **GOV** | Gross Observed Volume |
| **FRA** | Floating Roof Adjustment |
| **VCF** | Volume Correction Factor |
| **NSV** | Net Standard Volume |
| **CTSH** | Shell temperature correction factor |

This makes the calculator useful both for operational validation and for explaining why displayed inventory values changed.

### Data Historian Trends

**Data Trends** lets operators inspect historian-backed tag data behind tank and movement attributes such as density and temperature.

Prerequisites:

- Tags must exist in AURA **Data Acquisition**
- The linked AURA model must define **TagData** expressions on the relevant attributes

Access patterns:

1. Select one or more tanks from the **Tanks** page and open the **Trends** data-panel tab
2. Or select one or more movements and open the **Trends** tab from the **Movements** page

Important constraints and behaviors:

- AUM can display up to **25** tank/object trends at once
- Multiple objects can be trended together
- Users can hide/show tag series per object
- Trend settings are **tag-specific** and affect all trends that reference that tag

#### Trend controls

| Control | Purpose |
|---|---|
| **Show/hide tags** | Toggle series visibility |
| **Color picker** | Change line and axis color |
| **Trend Settings** | Configure label, min/max Y, pattern, stroke, color, right-side axis |
| **Use single y-axis scale** | Force comparable series onto one shared scale |
| **Delta/Detail view** | Zoom into a selected region for detailed inspection |

### Movements Data Panel

The **Movements Data Panel** is the tank-centric inverse of the Tanks Data Panel: select tanks first, then review their associated movements.

#### Access pattern

1. Open **Tanks**
2. Select one or more tanks
3. Open the **Movements** tab in the bottom **Data Panel**

Displayed content is filtered by the configured **Movement History** in **General Settings**.

#### Default movement information shown

| Column family | Examples |
|---|---|
| **Core identity** | Name, State, Type |
| **Routing** | Source, Destination |
| **Timing** | Scheduled Start/End, Actual Start/End |
| **Configuration** | Template, Event Template, Description |
| **Monitoring / execution** | Alerts, Scheduled Flow Rate, Average Flow Rate, Scheduled Target Volume |

#### Panel actions

| Action | Notes |
|---|---|
| **Open Movement Details Panel** | Click a movement name or use the details button |
| **Open Bulk Editing Movements** | Multi-select movements and use the details button |
| **Duplicate movement(s)** | Copies all information except actual start/end; new state becomes `Scheduled` |
| **Delete movement(s)** | Same state restrictions as the main Movements page |
| **View active movement alerts** | Click the alert count |
| **Export grid / export all** | Same export behavior as the main Movements page |
| **Modify values / overrides / column selection** | Same interaction model as the main Movements page |

### Alerts Panel

The **Alerts Panel** is a shared operational surface for tanks and movements.

#### Tabs

| Tab | Purpose |
|---|---|
| **Active** | Real-time list of alerts whose conditions are currently true |
| **History** | Past alerts with end times and date-range filtering |

#### Alert data model

| Column | Meaning |
|---|---|
| **Alert Name** | Alert identifier |
| **Object** | Associated tank or movement |
| **Severity** | `Critical`, `Warning`, or `Information` |
| **Start Time** | When the condition first became true |
| **End Time** | When the condition cleared (History tab) |

Useful operational behaviors:

- Alerts can be opened from **Tanks**, **Movements**, **Gantt View**, or toast messages
- Clicking the object name drills into the relevant details panel
- Many alerts are cleared indirectly by fixing data/expressions and rerunning the **Monitoring Agent**

### Override History

**Override History** is the audit trail for both tank and movement attribute overrides.

It can be opened from:

- tank attribute values
- movement attribute values
- row-end action menus in the details panels
- validation views

#### What it tracks

| Field | Meaning |
|---|---|
| **Object / Attribute** | Which tank or movement attribute was overridden |
| **Date Range** | Time window, defaulting to **Last 24 hours** |
| **Modified / Modified By** | When and by whom the override or clear action occurred |
| **Event Time** | When the override became active |
| **Value** | Override value, or `Cleared` when an override was removed |
| **Comment** | Operator-entered explanation |

For movement overrides, the visible history is still constrained by the **Movement History** setting.

### Validation Panel

The **Validation Panel** is the troubleshooting console for active overrides and expression errors.

It has two scopes:

| Scope | Tabs |
|---|---|
| **Tanks Validation** | Overrides, Expression Errors |
| **Movements Validation** | Overrides, Expression Errors |

#### Overrides views

The override tabs show:

- object name
- attribute
- current override value
- comment
- modified time
- modified by

Common actions:

- edit an override value
- clear one or many overrides
- view override history
- export the override grid
- inspect tooltip-level override details

One important exception:

- In **Movements Validation**, **Movement State** override cannot be cleared through **Clear Override**

#### Expression Errors views

These tabs are designed for troubleshooting bad expressions or missing source values.

| Column | Meaning |
|---|---|
| **Object** | Tank or movement with the error |
| **Template** | Underlying template context |
| **Attribute** | Attribute whose expression failed |
| **Error** | Specific expression/runtime error message |

Best-practice workflow:

1. Pin the **Validation Panel**
2. Click the object hyperlink to open the relevant details panel
3. Fix values or model expressions
4. Run the **Monitoring Agent** again

If the error is only temporary, operators can override the value until the root cause is corrected.

## Movements

The **Movements** page is the main execution table for movement lifecycle management. The page content is driven by the **Movement History** setting from **General Settings**.

### Page-level behaviors

- Can show related **data trends** and **related tanks**
- Uses **Object name format** and **Column header format** from **Display Settings**
- Supports saved table preferences

### Top-of-page actions

| Action | Notes |
|---|---|
| **Add** | Create new movements |
| **Filter Movements** | Filter by keyword, state, material, and area |
| **Clear Filters** | Clears all active table filters |
| **Import Movements** | Import from Excel |
| **Export in grid format** | Export visible grid content, excluding hidden columns |
| **Export to Excel** | Export full movement data |
| **Duplicate Movement(s)** | Copies selected movements; new records default to `Scheduled` and omit actual start/end times |
| **Delete Movement(s)** | Not allowed for `Active`, `Completed`, or `Accepted` movements |

### Movement table usage

The movement table is used to:

- open the **Movement Details Panel**
- review state and timing
- compare scheduled vs accrued quantities
- locate movements that are close to completion

### Creating movements

AUM supports three practical creation paths:

1. Create directly from the **Movements** page with **Add**
2. Duplicate an existing movement
3. Import movements from Excel

For manual creation, the workflow is:

1. Click **Add** on the Movements page to open the **Movement Details Panel**
2. Enter the required movement information
3. Click **Apply**

The newly created movement starts in **Scheduled** state.

> **Required rule:** a movement must have a valid **Source** and **Destination** before it can be created.

### Core movement information

The Movement Details Panel combines identity, template, routing, and timing fields.

| Field | Notes |
|---|---|
| **Name** | Required, unique, defaulted from the movement template naming convention, max 40 chars |
| **Abbreviation** | Unique, max 8 chars, cannot start with a number |
| **Description** | Free-text description, max 255 chars |
| **Template** | Drives default movement attribute values |
| **Event Template** | Determines how the AUM movement is created as an AURA Event during AURA import |
| **Type** | Filters valid source/destination combinations |
| **Source / Destination** | Source is required; both endpoints constrain valid movement type choices |
| **Scheduled Start / End** | Default to current time and end of current day |
| **Actual Start / End** | Driven by lifecycle state transitions; become editable only in the relevant states |

### Movement states

| State | Meaning |
|---|---|
| **Scheduled** | Planned but not yet approved or started |
| **Approved** | Approved, but not yet active |
| **Active** | Started; has **Actual Start Time**, but no **Actual End Time** |
| **Completed** | Finished; has both **Actual Start Time** and **Actual End Time** |
| **Validated** | Locked-down completed movement; only **Owner** or **Author** can revert it back to Completed |
| **Cancelled** | Stopped after becoming Active or Completed; not editable |
| **Rejected** | Discarded from Scheduled/Approved; cannot later be activated |

### Lifecycle transitions

| From | Allowed next states |
|---|---|
| **Scheduled** | Approved, Active, Rejected |
| **Approved** | Scheduled, Active, Rejected |
| **Active** | Completed, Cancelled |
| **Completed** | Validated, Cancelled |
| **Validated** | Completed |

Important timing behavior:

- **Scheduled** and **Approved** movements have blank, non-editable actual start/end times
- Switching to **Active** defaults **Actual Start Time** to the current time
- Switching to **Completed** defaults **Actual End Time** to the current time
- **Validated**, **Cancelled**, and **Rejected** movements lock actual times from further editing

### Movement Details Panel

The panel can be opened from the **Movements** page, **Movements Data Panel**, or **Gantt View**. It can also be resized and pinned for persistent editing.

#### General tab

- Edit source, destination, and scheduled/actual timing values
- Editable timing depends on the current movement state
- State changes can be driven either by changing the state directly or by entering the matching timing information

#### Attributes tab

| Capability | Notes |
|---|---|
| **Edit attribute values** | Template defaults appear here; modified values are highlighted in yellow after Apply |
| **Override values with comments** | Yellow overridden cells can store comments up to 120 chars |
| **Recalculate dependent values** | Dependent calculations refresh in the next monitoring cycle |
| **Correct expression errors** | Errors show on the tab and in red at the expression level; meter-type movements require valid tag aliases such as `MeterVolTagAlias` |
| **View override history** | Available from the cell context menu |
| **Clear attribute overrides** | Reverts to calculated/default values; recalculation happens in the next monitoring cycle |

#### Cutoffs tab

The Cutoffs tab exposes movement cutoff snapshots over a selected date range.

| Column | Meaning |
|---|---|
| **Cutoff Name** | Snapshot name |
| **Event Time** | When the cutoff was generated or manually entered |
| **Cutoff Type** | `Ad hoc`, `Scheduled`, or `Movement` |
| **View** | Opens detailed cutoff data for inspection and editing |

Cutoff editing behavior:

- **Apply Changes** recalculates dependent values immediately
- Cutoff overrides apply only to that specific cutoff snapshot
- If an override is entered exactly at the cutoff event time, the system clears it immediately afterward

### Bulk editing movements

AUM supports multi-record editing from three places:

1. **Movements** table
2. **Movements Data Panel**
3. **Gantt Chart** (multi-select with `Ctrl`)

The **Bulk Editing Movements** panel lets users update the same fields across multiple selected movements.

| Bulk-editable field | Notes |
|---|---|
| **Description** | Shared text update across selected rows |
| **State** | Must still obey the lifecycle rules |
| **Source / Destination** | Can be reassigned in bulk |
| **Scheduled Start / End** | Batch update planned timing |
| **Actual Start / End** | Batch update actual timing when allowed by state |

Important constraints:

- **Cancelled** and **Validated** movements do **not** support bulk editing
- Available fields depend on the current states of the selected movements
- Changes are saved when the user closes the bulk edit panel

### Importing and exporting movements with Excel

Excel is the high-throughput path for creating or updating many movements at once.

#### Import behavior

1. Open **Import Movements** from the Movements page
2. Select an Excel file
3. Run **Import**
4. Review the import log for warnings and errors before retrying

> Imported visibility still depends on the configured **Movement History** in **General Settings**.

#### Export behavior

| Export option | Output |
|---|---|
| **Export in grid format** | Exports only the current visible grid; hidden columns are excluded |
| **Export to Excel** | Exports all movement data from the grid |

The full **Export to Excel** file can be reused as an import template.

#### Excel file rules

| Rule | Meaning |
|---|---|
| Sheet name | Only sheets whose names begin with **Movements** are imported |
| Header row | Column names must not be changed |
| Rows above header | Treated as comments and ignored |
| Headers starting with `!` | Entire column is treated as comment content and ignored |

#### Key import columns

| Column | Notes |
|---|---|
| **Import** | Required flag: `Y/Yes` or `N/No` |
| **Name** | Required unique identifier; reused to update an existing movement |
| **Update Name** | Renames an existing movement |
| **Template** | Required movement template |
| **Material / Source / Destination** | Required and must reference valid AUM objects/data |
| **Actual Start / End Time** | If required by lifecycle but omitted, AUM falls back to Scheduled Start / End Time |

### Movement calculations

Movement calculations are primarily executed by the backend **Monitoring Agent**.

#### General calculation model

- Different movement attributes capture values from different calculation methods
- Built-in system expressions are visible but not editable
- Custom expressions for non-system attributes can be maintained in **Movement Template Definitions**
- Expressions continue to evaluate while movement end time is later than monitoring time, even for completed/cancelled movements

#### Accrued quantity logic

The effective accrued values depend on **Measurement Type**:

| Measurement Type | Effective accrued source |
|---|---|
| **Source (0)** | `AccruedVolumeSource` / `AccruedMassSource` |
| **Destination (1)** | `AccruedVolumeDestination` / `AccruedMassDestination` |
| **Meter (2)** | `AccruedVolumeMeter` / `AccruedMassMeter` |

Core rule:

- **Active** movements accrue from actual start time to current monitoring time
- **Completed/Cancelled** movements accrue from actual start time to actual end time

#### Source / destination calculation model

- **Source-based accrued volume** uses the absolute change in source tank measured volume
- **Destination-based accrued volume** uses the absolute change in destination tank measured volume
- The same pattern applies for source/destination accrued mass

#### Meter-based calculation model

If `MeterVolTagAlias` is populated, AUM treats it as a historian/data-acquisition tag alias from AURA.

| Condition | Behavior |
|---|---|
| Alias blank | Meter calculations are skipped and meter-related attributes remain `0` |
| Alias invalid | Returns `0` and raises an error |
| Retrieval type is interpolated/stepped totalizer style | Uses **Totalizer** calculation |
| Other retrieval types | Uses **Flow Volume** calculation |

Additional details:

- Meter-based accrued mass converts from volume using movement density first, then tank density if needed
- `Temperature` is normally taken from the source tank expression unless manually overridden
- Manual attribute overrides take effect in the next monitoring cycle

### Tanks Data Panel

The **Tanks Data Panel** is a movement-context view that shows tanks associated with the selected movements whenever the source or destination is a tank.

#### Access pattern

1. Open **Movements**
2. Select one or more movements
3. Open the **Tanks** tab in the bottom **Data Panel**

#### What it shows

| Section | Content |
|---|---|
| **General Tank Information** | Tank, Alert, Status |
| **Tank Attributes** | Columns derived from the linked AURA tank object template |
| **Footer summary** | Total tank row count and tank status context for the selected movements |

#### Panel actions

| Action | Notes |
|---|---|
| **Save preferences** | Save/reuse panel layout preferences |
| **Clear filters** | Clears all active table filters |
| **Export in grid format** | Exports visible tank rows only; hidden columns excluded |
| **Group by columns** | Available when column drop zone is enabled in Display Settings |
| **Open tank alerts** | Click alert counts to open alert details |
| **Modify values / view override history / clear overrides** | Behave the same as on the main Tanks page |
| **Open Tank Details Panel** | Click a tank name |
| **Hide/show columns** | Use the column selector |

**Deletion rule worth remembering:** rejected and cancelled movements can be deleted only by **Owner** and **Author**.

## Roles and Permissions

AUM enforces two complementary access control layers: **Model Roles** (project-wide) and **Area-Based Permissions** (tank/movement-scoped).

### Model Roles

Four model roles are defined at the AUM project level. Assigned in the system by an Administrator.

| Model Role | Description |
|---|---|
| **Owner** | Full control over all data, settings, areas, permissions, and movements |
| **Author** | Full control over the model and area-permission administration |
| **Case Only Author** | Restricted by area permissions; cannot manage Areas/Permissions pages |
| **Viewer** | Read-only; restricted by area permissions; can only be assigned Viewer-level area access |

> Only **Owner** and **Author** model role users can access the **Areas and Permissions** settings pages.

### Area-Based Permissions

Areas group a set of tanks (and their related movements). Area permissions restrict which tanks and movements a user can see or modify, layered on top of Model Roles.

**Permission levels within an area:**

| Area Permission | Meaning |
|---|---|
| **Owner** | Full control (auto-assigned to model-role Owner users) |
| **Editor** | Write access — create, edit, delete within the area |
| **Viewer** | Read-only access within the area |

**Default assignments:**
- Model-role **Owner** → Area permission **Owner** (cannot be edited)
- Model-role **Author** → Area permission **Editor** (cannot be edited)
- **Case Only Author** → Owner/Author can assign either **Editor** or **Viewer** per area
- **Viewer** → Always area permission **Viewer**; cannot be elevated

### Permission Matrix — Tanks, Movements, Tank Calculator

| Model Role (Area Permission) | Tanks | Movements | Tank Calculator |
|---|---|---|---|
| Owner / Author (Editor) | Full control | Full control | Full control |
| Case Only Author **(Editor)** | View + edit tanks in authorized area | Full CRUD on movements with non-tank source/dest; Full CRUD on movements with ≥1 authorized tank | Full use within authorized area |
| Case Only Author **(Viewer)** | View tanks in authorized area | Full CRUD on non-tank movements; **View only** for movements with ≥1 authorized tank | Full use within authorized area |
| Case Only Author **(No area permission)** | No tanks visible | View/edit/delete non-tank movements only; cannot access movements with authorized tanks | Can open calculator, cannot select any tanks |
| Viewer **(Viewer)** | View tanks in authorized area | View all movements, except when **both** source and destination are unauthorized tanks | Full use within authorized area |

### Multi-Area Conflict Resolution

A tank can belong to multiple areas simultaneously. If a user has both **Editor** and **Viewer** permissions for the same tank across different areas, the **Editor permission supersedes Viewer**.

### Special Movement Deletion Rules

- **Rejected** and **Cancelled** movements can only be deleted by **Owner** and **Author**
- Movements in **Active**, **Completed**, or **Accepted** state cannot be deleted by any role

### Orders Permissions (In Progress)

Orders is a new feature (V15.0.3+). The permission design for Orders CRUD operations and import/export is under active development and not yet finalized in the help documentation.

**Known current behavior:**
- Movement cutoff data can be created for active movements
- Orders visibility and edit access are expected to follow the same Area-based model as Movements
- Specific permission matrix for Orders actions (create, edit, delete, import) is pending documentation

> ⚠️ This section will need updating once Orders permissions are finalized and published.

## Gantt

### Gantt Page

The **Gantt** page is the container for saved **Gantt Views**. A Gantt View defines the resource set and the time window used to visualize movement duration.

| Task | Notes |
|---|---|
| **Open an existing Gantt View** | Select it from the Gantt navigation panel |
| **Search a Gantt View** | Search by Gantt View name from the left navigation |
| **Open in new tab** | Available from the navigation panel |
| **Create a Gantt View** | Owner/Author only; requires a unique name and optional folder/group |

### Gantt View

The **Gantt View** is used to schedule and monitor movements visually.

| Element | Purpose |
|---|---|
| **Resources** | Source and destination objects shown on the left side |
| **Movement bars** | Colored bars whose length reflects movement duration |
| **Time ruler** | Shows the time horizon and movement timing relationships |
| **Time Window** | Controls the displayed horizon; default includes 7 days starting from current day |

### Common Gantt actions

| Action | Notes |
|---|---|
| **Add Resource(s)** | Required before a new Gantt View can display movements |
| **Delete Resource(s)** | Remove one or more selected resources from the view |
| **Zoom to area / fit / vertical** | Navigate dense schedules more easily |
| **Search for movements** | Search across all templates or within a specific movement template; matches are highlighted |

### Visual interpretation

- Resources are grouped by object type
- Movement color reflects movement state
- The bar length shows scheduled duration
- The time ruler helps compare scheduled start/end relationships across simultaneous movements

## Model Settings

The **Model Settings** area controls cross-cutting defaults for how AUM displays data, runs monitoring, links to AURA, and formats reports.

> Most changes in **General Settings** require **check-in** before they take effect. Two notable exceptions are **Movement History** and **Default trend period**.

### Display Settings

Display Settings governs how names, columns, numbers, and state colors appear across the application.

#### Application-wide formatting

| Setting | Default | Notes |
|---|---|---|
| **Date format** | `MM/DD/YYYY` | Controls displayed date rendering |
| **Time format** | `HH:mm` | Controls displayed time rendering |
| **Toast times** | `5s` | Duration for transient notification toasts |
| **Object name format** | `Name only` | Can switch among name / description / abbreviation combinations |
| **Column header format** | `Name` | Can show attribute names or abbreviations |

#### Table formatting

| Setting | Default | Notes |
|---|---|---|
| **Column drop zone at top of table** | Enabled | Allows drag-and-drop grouping above supported tables |
| **Number format** | Decimal places | Alternative is significant figures |
| **Tables precision** | `4` | Allowed range `0-10` |
| **Tooltips precision** | `6` | Allowed range `0-20` |
| **Percentage precision** | `3` | Allowed range `0-20` |

#### Default state colors

| Area | Defaults |
|---|---|
| **Movements / Orders** | Scheduled `#88F4F4`, Approved `#569CDC`, Active `#FFDA59`, Completed `#D0EB38`, Validated `#35D075`, Rejected `#9E9E9E`, Cancelled `#F47980` |
| **Tanks** | Error `#F47980`, Static `#569CDC`, Up `#35D075`, Down `#FFDA59`, Disabled `#9E9E9E` |

These colors directly affect how operators visually scan status in Tanks, Movements, Orders, and Gantt-style views.

### General Settings

General Settings defines the linked AURA model context, historical visibility, monitoring behavior, trend defaults, and scheduled cutoffs.

#### Core model defaults

| Setting | Meaning |
|---|---|
| **AURA Model** | Which AURA model AUM is linked to |
| **AURA Base Model Version** | Which AURA base version is used for tanks, attributes, and expressions |
| **AURA Model Time Zone** | Governs movement start/end times and cutoff timestamps |
| **Movement History** | Controls how far back completed/cancelled/validated/rejected movements remain visible |

Important behavior:

- **Scheduled**, **Approved**, and **Active** movements are always shown
- Switching AURA base model version can leave existing AUM movements pointing at tanks that no longer exist in the selected version, which can cause monitoring/calculation issues

#### Monitoring configuration

| Setting | Meaning |
|---|---|
| **Monitoring** | Enable automatic monitoring runs, or disable and run manually |
| **Monitoring User** | Service-style account used by the monitoring agent |
| **Frequency** | Automatic monitoring cadence (`Day.Hours:Minutes:Seconds`) |
| **Tank Status Threshold** | Threshold that decides whether a tank is classified as Up, Down, or Static |

Operational notes:

- The monitoring user should be a dedicated account, not an active human operator account
- The monitoring user must effectively satisfy both site-role and model-role requirements for monitoring to work correctly
- If monitoring is disabled, operators can still manually run the monitoring agent from the Application Bar

#### Trend defaults

| Setting | Meaning |
|---|---|
| **Default trend period** | Default time window shown in historian/data trends |

#### Scheduled cutoffs

Scheduled cutoffs persist snapshots of:

- tank attribute values at configured intervals and at movement start/end boundaries
- movement attribute values at configured intervals and when movements become Active, Completed, or Cancelled

| Setting / Rule | Meaning |
|---|---|
| **Add Cutoff** | Define a cutoff frequency and start time |
| **Max configurations** | Up to **6** cutoff definitions |
| **Recommended practice** | Configure only **one** scheduled cutoff for reliable automatic generation |
| **Monitoring dependency** | Monitoring should be enabled for reliable scheduled cutoff generation |

Default cutoff behavior depends on the linked AURA **Case and Analysis** configuration; if no AURA analysis exists, AUM falls back to a midnight-start / 24-hour default.

#### Reset behavior

- **Reset to Defaults** restores General Settings defaults
- It does **not** reset **AURA Base Model Version**

### Report Settings

Report Settings controls the default presentation and labels for report-oriented pages and downloads.

#### General report presentation

| Setting | Default | Notes |
|---|---|---|
| **Report page layout** | Grid & chart top/bottom | Alternative is side-by-side grid & chart |

#### Fraction gauge settings

These affect both the **Tank Inventory Report** and the **Tanks** page.

| Option | Meaning |
|---|---|
| **Use 1/8th for fraction gauge** | Default fractional display style |
| **Use 1/16th for fraction gauge** | Finer fractional display |
| **Use m, cm, mm for fraction gauge** | Metric-style gauge display |

#### Report labels

| Label group | Defaults |
|---|---|
| **Report names** | Tank Inventory, Movement, Cutoffs |
| **Measure labels** | Volume, Mass |

This means Report Settings is not just cosmetic: it standardizes the naming and layout conventions seen by operators whenever report pages or downloads are opened.

#### Reset behavior

- **Reset to Defaults** restores report settings to their default layout and labels

## Reports and Cutoffs

The **Reports** area turns monitored operational data into time-windowed views, while **Cutoffs** provide the snapshot baseline those reports depend on.

### Report and cutoff model

| Area | Time filter / data basis |
|---|---|
| **Movement Report** | Uses the selected **Start Time** / **End Time** window; most values come from the cutoff closest to **End Time**, while accrued values use `End cutoff - Start cutoff` |
| **Tank Inventory Report** | Uses the selected **Start Time** / **End Time** window; most values come from the cutoff closest to **End Time**, with delta-style fields comparing end vs. start cutoffs |
| **Cutoffs Report** | Lists cutoff rows whose **Event Time** falls within the selected time range |
| **Overrides Report** | Lists overrides whose **Modified On** timestamp falls within the selected time range |

Common behavior across report pages:

- Reports can be opened from the left navigation and often in a **new tab**
- **Breadcrumbs** can be used to switch between report pages
- Tables support column reordering, grouping/pivot-style analysis, filtering, and charting
- Excel export uses the current table view and report label settings

### Ad hoc Cutoffs

A cutoff is a snapshot of tank and movement attribute data at a specific event time.

| Cutoff type | How it is created |
|---|---|
| **Scheduled** | Generated from the cutoff frequency configured in **Model Settings > General Settings** |
| **Movement** | Generated when a movement becomes **Active**, **Completed**, or **Cancelled** |
| **Ad hoc** | Created manually from the **Application Bar** on the **Tanks**, **Movements**, or **Gantt View** pages |

#### Creating an ad hoc cutoff

Manual cutoffs create snapshot data for **all tanks** and **active movements**.

| Field / rule | Notes |
|---|---|
| **Cutoff Name** | Required; cannot contain `\ / : * ? ' < > |` |
| **Event Time** | Snapshot timestamp to capture |
| **Comments** | Optional operator note stored with the cutoff |
| **Future times** | Not allowed |

### Cutoffs Report and Cutoff Details

The **Cutoffs Report** is the index of available snapshot rows for the selected time window.

| Capability | Notes |
|---|---|
| **Open details** | Click **Event Time** to open **Cutoff Details** |
| **Event Time basis** | Displayed using the **AURA Model Time Zone** from General Settings |
| **Cutoff types** | **Ad hoc**, **Scheduled**, and **Movement** |
| **Export** | Exports the current cutoff table to Excel |
| **Delete** | Only **Owner** and **Author** can delete cutoffs; **Movement** cutoffs cannot be deleted |

The **Cutoff Details** page lets operators inspect one snapshot in two tabs:

| Tab | What it shows |
|---|---|
| **Tanks** | Tank cutoff data for the selected event time |
| **Movements** | Movement cutoff data for the selected event time |

### Movement Report

The **Movement Report** shows movements that were active during the selected window, plus movements completed during that same range.

| Behavior | Notes |
|---|---|
| **Primary snapshot basis** | Most values come from the cutoff closest to **End Time** |
| **Accrued values** | Calculated as `cutoff at End Time - cutoff at Start Time` |
| **Grouping** | Can group by **Material**, **State**, and/or **Template** |
| **Chart** | Highlights **Scheduled Volume**, **Scheduled Target Volume**, and **Average Flow Rate** |
| **Export** | Exports the current grid to Excel using the current report label |

### Tank Inventory Report

The **Tank Inventory Report** shows all tanks for the selected time range and uses cutoff snapshots closest to the start/end boundaries to calculate inventory-style measures.

#### Key calculation rules

| Measure | Calculation basis |
|---|---|
| **Net** | `End cutoff - Start cutoff` for measured volume or mass |
| **Gauge** | `Gauge at End cutoff - Gauge at Start cutoff` |
| **Gauge Water** | `Gauge Water at End cutoff - Gauge Water at Start cutoff` |
| **Net Change** | `Measured End - Measured Begin`, both from the cutoff closest to **End Time** |
| **Gross** | Gross observed value from the cutoff closest to **End Time** |

Other important behavior:

- Report rows can be grouped by **Material**
- The default chart shows **Net Mass** and **Net Volume**
- Fraction gauge rendering follows **Model Settings > Report Settings**
- Both **Tanks** and **Pipelines (Storages)** are shown under the unified **Tanks** label

### Overrides Report

The **Overrides Report** shows all tank and movement overrides, including cutoff overrides, whose **Modified On** timestamp falls inside the selected time range.

| Column / concept | Meaning |
|---|---|
| **Tank/Movement** | Which tank or movement the override belongs to |
| **Attribute** | The overridden tank or movement attribute |
| **Comment** | User comment or system-generated reason (for example cutoff override context) |
| **Event Time** | Usually the same as **Modified On**, except for cutoff-related overrides |
| **Modified By / Modified On** | Who changed the value and when |
| **Override Value** | The entered override or a cleared-override marker |

The report also supports grouping, charting, filter clearing, and Excel export like the other report pages.

## Model Data

The **Model Data** area is where AUM administrators define reusable templates and alert logic that the operations-facing pages depend on.

### Alerts

The **Alerts** page defines condition-driven notifications evaluated by the **Monitoring Agent**.

| Area | Notes |
|---|---|
| **Who manages alerts** | **Owner** and **Author** model roles |
| **What alerts do** | Detect deviations from expected or safe operating conditions for tanks and movements |
| **Execution model** | Alerts are evaluated when monitoring runs |
| **Notification surface** | Toast notification summarizes detected / existing / cleared alerts and links to **View All** in the Alerts Panel |

#### Alert behavior

- For **manual monitoring**, pending alert changes apply immediately in the local workspace and do **not** require check-in
- For **scheduled monitoring**, alert changes only take effect after the model is **checked in**
- Alert conditions use AURA-style expression syntax inside `Alert(...)`
- The object scope is usually constrained with predicates such as `ObjectType()=="Storage"` or `Template()=="Movement"`

#### Alert table and actions

| Item | Meaning |
|---|---|
| **Enable / disable slider** | Turns an alert on or off; the header slider can toggle all alerts |
| **Name / Description** | Basic alert identity and operator-facing explanation |
| **Last Modified / Last Modified By** | Audit trail for recent edits |

| Action | Notes |
|---|---|
| **Add alert** | Define name, description, severity, enabled state, and condition |
| **Edit alert** | Open the row in the Alert Details Panel |
| **Delete alert** | Available from the row action menu |
| **Open from Operations panel** | Alerts can also be opened from the right-side panel |

#### Default alert patterns

AUM ships with default alert patterns for common conditions such as:

- movement about to start / end
- tank above max or below min volume
- static tank with active connected movements
- tank rising without active inputs or falling without active outputs
- movement source lacking sufficient volume
- movement destination lacking sufficient ullage

### Movement Templates

Movement templates define the default fields and calculations used when new movements are created.

| Concept | Notes |
|---|---|
| **Purpose** | Standardize default attributes, naming, and calculation-related metadata |
| **Default template** | A built-in default template is provided and appears at the top of the list |
| **Usage count** | The table shows how many movements use each template |
| **Why it matters** | Attribute usages on the template tell AUM which fields drive built-in movement calculations |

#### Common actions

| Action | Notes |
|---|---|
| **Open template definition** | Click a template row |
| **Add template** | Creates a new template starting from the default template model |
| **Import templates** | Import Excel updates for existing templates and attributes |
| **Export all templates** | Produces a workbook with one worksheet per template |
| **Delete template** | Blocked if any existing movements already use the template |

### Movement Template Definitions

The **Movement Template Definitions** page controls the template-level defaults and the full attribute list for one movement template.

#### Template-level settings

| Field | Notes |
|---|---|
| **Name** | Unique; cannot contain `: [ ]`; limit 80 chars |
| **Modified by / modified on** | Audit information shown under breadcrumbs |
| **Event Template (AURA)** | Determines which AURA Event Template is used when AUM movement data is imported into AURA |
| **Default Color** | Present but documented as not currently in use |
| **Naming Convention** | Default format for newly created movements from this template |

#### Naming convention rules

- Keywords must be wrapped in brackets, for example `[TEMPLATE]`
- `[SEQ]` or `[SEQUENCE]` is required
- Free-text strings are allowed, but cannot contain spaces
- Displayed naming conventions are truncated to 40 characters in the UI

Supported keyword families include:

- **Template**: `TEMPLATE`, `TEM`
- **Sequence**: `SEQUENCE`, `SEQ`
- **Source**: `SOURCE`, `SRC`
- **Destination**: `DESTINATION`, `DST`
- **Dates**: `MASD`, `MAED`, `MSSD`, `MSED`

#### Attribute table

| Column | Notes |
|---|---|
| **Attribute** | Unique name; opens the Attribute Details Panel |
| **Abbreviation** | Unique short name; limit 8 chars |
| **Description** | Optional description; limit 255 chars |
| **Tooltip** | Controls whether the attribute appears in Gantt tooltips |
| **Attribute Type** | May map to an AURA property; determines valid default values and UOM |
| **Attribute Usage** | Critical semantic mapping used by calculations and AURA event mapping; avoid changing casually |
| **Default Value** | Applied to new movements until overridden |
| **UOM** | Read-only display UOM |
| **Expressions** | System expressions are read-only; Owner/Author can add or edit non-system expressions and must check in for them to take effect |

Important template rules:

- For the **State** attribute, the default value can only be **Scheduled** or **Approved**
- Adding or deleting attributes affects **new** movements only; existing movements keep the earlier template version they were created with

#### Attribute management

| Action | Notes |
|---|---|
| **Add attribute** | Define name, type, usage, and optional group |
| **Edit attribute name / abbreviation** | Inline or from the details panel |
| **Delete attributes** | Single-row delete or multi-select delete |
| **Export current template** | Exports one template to `<modelName>_Template_<MovementTemplateName>.xlsx` |
| **Open Attribute Details Panel** | Click the attribute name |

#### Attribute groups

Attribute groups are a visual organization layer inside a template.

| Action | Notes |
|---|---|
| **Add attribute to existing group** | Select the group when creating the attribute |
| **Create new group from selected attributes** | Multi-select attributes and use the group action |
| **Rename group** | Inline rename; group names must be unique |
| **Delete group** | Ungroups attributes but does not delete the attributes themselves |

### Managing movement attributes with Excel

Excel import/export is the bulk-maintenance path for movement template attributes.

#### Typical workflow

1. Export **all** movement templates from **Model Data > Movement Templates**, or export a **single** template from its definition page.
2. Update existing attribute rows or add new rows in Excel.
3. Import the workbook back from **Movement Templates**.
4. Review the import log for warnings and errors before re-importing.

#### Workbook rules

| Rule | Notes |
|---|---|
| **Worksheet name** | Must exactly match the movement template name being updated |
| **First required column** | `Import` |
| **Comment columns** | Any column beginning with `!` is ignored |
| **Header row** | Must keep the expected column names |
| **File name** | No restriction on workbook file name |

#### Important Excel columns

| Column | Notes |
|---|---|
| **Import** | Required; `Y/Yes` to import, `N/No` to ignore |
| **Attribute Name** | Required; used to update existing rows or create new attributes |
| **Update Name** | Renames an existing attribute |
| **Abbreviation** | Must remain unique; duplicate abbreviations generate warnings |
| **Group** | Assigns the attribute to a group |
| **Attribute Usage** | Preserves the semantic meaning AUM uses for calculations |
| **Attribute Type / UOM / Default Value** | Define the attribute structure and default values for new movements |
| **Enable Tooltip** | `True` or `False` |
| **Delete** | `Yes` deletes the attribute; `No` keeps it |

### Order Templates

Order templates are the reusable model-data objects used to create orders that group multiple related movements.

| Concept | Notes |
|---|---|
| **Purpose** | Standardize order attributes, naming conventions, and default calculation context |
| **Default template** | A built-in default order template is provided and appears at the top of the list |
| **Usage count** | The table shows how many orders currently use each template |
| **Why it matters** | Orders inherit their initial structure and editable defaults from the selected order template |

#### Common actions

| Action | Notes |
|---|---|
| **Open template definition** | Click a template row |
| **Add template** | Creates a new order template starting from the default template model |
| **Copy template** | Creates `<OrderTemplateName>_Copyn` |
| **Delete template** | Blocked if existing orders already use the template |
| **Table analysis** | Supports standard sort, filter, column hide/show, and count summary behavior |

### Order Template Definitions

The **Order Template Definitions** page controls the template-level defaults and attribute list for one order template.

#### Template-level settings

| Field | Notes |
|---|---|
| **Template Name** | Unique; cannot contain `: [ ]`; limit 80 chars |
| **Modified by / modified on** | Audit information shown under breadcrumbs |
| **Default Color** | Present but documented as not currently in use |
| **Naming Convention** | Default format for newly created orders from this template |

#### Naming convention rules

- Keywords must be wrapped in brackets
- `[SEQ]` or `[SEQUENCE]` is required
- Free-text strings are allowed, but cannot contain spaces
- Displayed naming conventions are truncated to 40 characters in the UI

Supported keyword families explicitly documented here:

- **Template**: `TEMPLATE`, `TEM`
- **Sequence**: `SEQUENCE`, `SEQ`

#### Attribute table

| Column | Notes |
|---|---|
| **Attribute** | Unique name; opens the Attribute Details Panel |
| **Abbreviation** | Unique short name; limit 8 chars |
| **Description** | Optional description; limit 255 chars |
| **Tooltip** | Additional attribute help text |
| **Attribute Type** | Determines valid default values and UOM |
| **Attribute Usage** | Semantic mapping used by AUM calculations; avoid changing casually |
| **Default Value** | Applied to new orders until overridden |
| **UOM** | Read-only display UOM |

Important template rules:

- For the **State** attribute, the default value can only be **Scheduled** or **Approved**
- Adding or deleting attributes affects **new** orders only; existing orders keep the template version they were created with

#### Attribute management

| Action | Notes |
|---|---|
| **Add attribute** | Define name, type, usage, and optional group |
| **Edit attribute name / abbreviation** | Inline or from the details panel |
| **Delete attributes** | Single-row delete or multi-select delete |
| **Group attributes** | Group, rename, and ungroup order attributes for display organization |
| **Open Attribute Details Panel** | Click the attribute name |

## Orders

Orders are the AUM object used to group related movements under one operational container and expose aggregated order-level data.

> **Current documentation state:** the source help for Orders still contains draft placeholders in some permission and import/export descriptions. The KB below captures the stable behavior that is documented consistently.

### Orders Page

The **Orders** page is the table view for creating, browsing, and managing grouped orders.

| Concept | Notes |
|---|---|
| **Purpose** | Show orders plus their related movements in one expandable table |
| **Data refresh** | Aggregated order values are updated during monitoring cycles |
| **Display formatting** | Object names and column headers follow **Display Settings** |
| **Open path** | Left navigation **Orders** entry |

#### Common data shown

| Category | Examples |
|---|---|
| **Basic order identity** | Name, State, Template, Number of Movements |
| **Order timing** | Scheduled Start/End, Actual Start/End |
| **Audit fields** | Last Modified, Last Modified By |
| **Aggregated measures** | Scheduled / accrued volume, mass, and flow-rate style values |

#### Stable actions from the page

| Action | Notes |
|---|---|
| **Create order** | Uses an order template and its default fields |
| **Save view preferences** | Save table preferences for reuse |
| **Clear filters** | Removes active table filters |
| **Open order details** | Click the order name or use the Operations panel |
| **Open movement details** | Click a linked movement row or use the Operations panel |
| **Expand / collapse linked movements** | Toggle the arrow next to the order row |
| **Edit supported values** | Editable cells can be changed and applied; dependent values recalculate on the next monitoring cycle |
| **Delete order** | Can optionally delete linked movements at the same time |
| **Unlink or delete linked movement** | Available from expanded movement rows |
| **Duplicate order** | Creates a new order from an existing one with a generated name and optional copied associations |

Stable delete-related rules documented here:

- **Rejected** and **Cancelled** movements can only be deleted by **Owner** and **Author**
- Movements in **Active**, **Completed**, or **Accepted** state cannot be deleted
- Order deletion depends on linked-movement access and relationship state, so treat detailed permission behavior as provisional until the Orders permission model is finalized

### Order Details Panel

The **Order Details Panel** is the main drill-down surface for one order.

#### General tab

| Field | Notes |
|---|---|
| **Name / Abbreviation / Description** | Editable basic order information |
| **Template** | Read-only after order creation |

#### Attributes tab

| Item | Notes |
|---|---|
| **Calculated order attributes** | Aggregated from associated movements and refreshed during monitoring cycles |
| **Blue values** | Editable values |
| **Yellow values** | Indicate changed / overridden values |
| **Comment limit** | Override comments are limited to 120 characters |
| **Read-only calculated fields** | State, order timing, and similar calculated values update automatically |

Override behavior:

1. Double-click an editable **Value** cell.
2. Enter the new value and optional comment.
3. Click **Apply**.
4. Dependent values are recalculated during the next monitoring cycle.

#### Movements tab

| Capability | Notes |
|---|---|
| **Review linked movements** | Shows movement name, state, and scheduled times |
| **Link movements** | Can add movements that are not currently linked to another order |
| **Advanced search** | Filter candidate movements by Material, Source, and Destination before linking |
| **Unlink movement** | Remove from the order but keep it in the model |
| **Delete movement from model** | Remove both the association and the movement itself |

Movement-tab rules:

- Unlinking or deleting a linked movement changes order calculations on the next monitoring cycle
- Movement state deletion restrictions follow the same rules surfaced on the Orders page

## Model Management

### Creating an AUM Model

AUM is a separate model on Unified with its own SQL database tables.

1. On **Unified Home**, create a new **AUM model**
2. Enter a **Model Name**
3. Select the linked **AURA Model** and **AURA Base Model Version** (latest version is selected by default)
4. Select the **Server & SQL Database** (defaults are pre-filled)

> AUM always works in sync with an AURA model. Tank objects, attributes, and expressions are loaded from the linked AURA Base Model.  
> Multiple AUM models can link to the same AURA model, but this is not the anticipated use case.

### Workspace Types

AUM maintains three distinct workspaces to separate admin model editing from normal operations:

| Workspace | Who uses it | Purpose |
|---|---|---|
| **User Workspace** | All operators | Single shared workspace loaded for all users; supports normal tank and movement operations |
| **Agent Workspace** | Monitoring Agent | Loaded by the agent exclusively for calculation execution; independent from user changes |
| **Admin Workspace** | Owner / Author only | Temporary workspace for AUM model changes; accessed via **Switch to Base Model** from the Application Bar |

**Admin Workspace behavior:**

- Even Admins open AUM in **User Workspace** by default; write access to model configuration is disabled there
- Admin clicks **Switch to Base Model** and receives a prompt: "Do you want to create your own workspace to make changes?"
- Admin can perform: Movement Template changes, Model Settings updates, Gantt configuration
- All Admin changes must be **checked in** to take effect
- During check-in, AUM validates changes against the linked AURA Base Model and reports incompatibilities; critical failures block check-in
- After check-in, User and Agent workspaces are reloaded — either automatically (Auto option) or on-demand (**Update Operator Session** button, Manual option) — with a brief loading notice shown to operators
- **No changes reach User or Agent workspaces until check-in is complete**

> Multi-Admin note: it is not recommended for multiple Admins to load Admin Workspace simultaneously to make model changes.

**Updating the AURA Base Model link without model changes:**
Admins can update the AURA Base Model version link from **Model Settings → General Settings** and check in that update alone, without modifying any AUM model objects.

### Snapshot

When a **Snapshot** is created, the user defines a **Start Time** and **End Time**.

**Included in a Snapshot:**

| Object | Inclusion rule |
|---|---|
| Base Model | Always included |
| Model Settings | Always included |
| Movement Templates | Always included |
| Gantts | Always included |
| User preferences, Filters, Views | Always included |
| **Scheduled / Approved movements** | All included |
| **Active movements** | Included if `Actual Start Time >= Snapshot Start Time` |
| **Completed / Validated movements** | Included if `Actual Start Time >= Snapshot Start Time` OR `Actual End Time <= Snapshot End Time` |

**Excluded from a Snapshot:**

- **Rejected** movements
- **Cancelled** movements

> Snapshots capture only operationally meaningful movement records. Rejected and Cancelled movements are excluded regardless of their timing.

## Exporting Movements to AURA

AUM movements are used as **Events** in AURA for daily material balance reconciliation. Data flows from AUM to AURA when the Yield Accountant sets up a case.

### Workflow

1. Open **AURA** in **Flowsheet Case** mode
2. Click **Import Events from AUM** (an Analysis Setting controls whether the AUM model is prompted each time or uses a stored default)
3. AURA uses the case **Start Time** and **End Time** to window matching movements
4. AUM returns **Active** and **Completed** movements plus their cutoff values that overlap the case window
5. User reviews the generated Event list (read-only preview) and clicks **Apply** to create or update AURA Events

### Movement-to-Event Attribute Mapping

Each **Movement Template** must have an **Event Template (AURA)** configured. Mapping rules:

| Mapping rule | Details |
|---|---|
| **Name, Source, Destination** | Transferred directly |
| **Start Time / End Time** | Same as movement, or cutoff-based depending on configuration |
| **Volume / Mass (Accrued)** | Transferred as **prorated by time** — diff of cutoff values for the case window |
| **Density / Temperature / Pressure** | Transferred **as-is** (not prorated) |
| **Attributes with matching names** | Automatically mapped if the attribute names are identical; attributes already mapped via Attribute Usage are excluded from name-based mapping |

**Why volume is prorated:** AUM stores cumulative accrued cutoff values (from Actual Start Time). When a movement spans multiple AURA cases, the cutoff diff for each case time window gives the prorated quantity for that case only.

**Note:** Source/Destination must be translated from Member Tank to Tank Group level during the import when required by the AURA event model.

### Duplicate Event Handling

If an AURA event with the same name already exists:

| Condition | Behavior |
|---|---|
| Same event template | Update the existing event in place |
| Different event template | Create a new event with a numeric sequence suffix |

A toast message summarizes: `X Events created, Y Events updated, Z Events errors`.

### Error Handling During Import

| Missing entity | Behavior |
|---|---|
| **Material** | Use `DefaultMaterial`; log warning |
| **Strapping Table** | Use blank; log warning |
| **Source or Destination (one missing)** | Use blank; log warning |
| **Both Source and Destination missing** | Do not create Event; log error |
| **Event Template not found** | Do not create Event; log error |
| **UOM / Property mismatch** | Transfer data as-is without UOM conversion; log warning |

### Cancelled Movements Are Not Transferred

**Cancelled movements are excluded from AURA import.** A cancelled movement is interpreted as having been activated by mistake and carries no operational meaning. Even if a final cutoff was generated before cancellation, cancelled movements are not sent to AURA.

## Technical Reference

### Monitoring Agent Architecture

The **Monitoring Agent** is the backend engine that executes all AUM calculations.

| Characteristic | Details |
|---|---|
| **Type** | Not a Windows service; Unified initiates the agent at the configured frequency |
| **Scope** | One agent per AUM model; that single agent handles both Tank and Movement calculations |
| **Multi-model** | Multiple AUM models per Unified installation are each served by their own agent |
| **Manual execution** | The **Manual Execution** button is only enabled when **Monitoring is disabled**; if multiple users trigger manually at the same time, the system ensures only one request runs at a time |
| **First run behavior** | On the very first run there is no prior cycle value; AUM retrieves tag values from **5 minutes ago** to bootstrap accrued calculations and fill-rate calculations |

### Cutoff Data Storage Model

Cutoffs store **cumulative accrued values from Actual Start Time** up to each cutoff timestamp. This is a key design difference from per-segment storage.

**Example: Movement starts 10:30 PM, cutoff frequency = 2 hours**

| Cutoff Timestamp | Stored Value | What it represents |
|---|---|---|
| 10:30 PM | 0 | Actual Start — baseline |
| 12:00 AM | 10.5 | Total accrued 10:30 PM → midnight |
| 2:00 AM | 26 | Total accrued 10:30 PM → 2 AM |
| 4:00 AM | 39 | Total accrued 10:30 PM → 4 AM |

**To get the quantity for a specific window** (e.g., midnight → 2 AM): subtract the earlier cutoff from the later: `26 − 10.5 = 15.5`.

This is why AURA case import uses cutoff diffs: the AURA case window usually does not align with the movement's actual start/end.

### Cutoff Override Cascade Rules

When a user overrides an attribute value at a cutoff timestamp:

1. The override is stored as an **override record** in the override history
2. All calculations at that cutoff timestamp are recalculated using the override value
3. If there are **no later overrides**, the override value propagates forward and is used for all subsequent calculations
4. If a **later override** exists for the same attribute, the later override takes precedence from its timestamp forward
5. When an override is **cleared**, AUM writes a clear record; the override value is no longer used in subsequent cycles

> A single density override at midnight can retroactively affect all movement quantity calculations from midnight onward.

### Totalizer vs Flow Volume Meter Calculation

When `MeterVolTagAlias` is populated, AUM determines the meter method based on the tag's AURA retrieval type:

| Condition | Method | How MeterVolumeEnd is determined |
|---|---|---|
| Retrieval type = `InterpolateStart`, `InterpolateEnd`, `InterpolateSteppedStart`, or `InterpolateSteppedEnd` | **Totalizer** | Tag value at Actual End Time (or current time for Active movements) |
| Other retrieval types | **Flow Volume** | Cumulative sum of `(TagValue × Multiplier + Bias)` over each monitoring interval, assuming rate is **PerDay** |

In both cases: `AccruedVolumeMeter = MeterVolumeEnd − MeterVolumeBegin`

> VCF (volume correction factor) is **not** applied to meter volumes — this is a future item.

### Tank Fill Rate and Stop Gauge Attributes (v14.6+)

These attributes are automatically calculated by the Monitoring Agent in v14.6 and later:

| Attribute | Calculation logic |
|---|---|
| **Volume_Fill_Rate** | `Meas_Vol_End (current cycle) − Meas_Vol_End (previous cycle)` |
| **Mass_Fill_Rate** | `Meas_Mass_End (current cycle) − Meas_Mass_End (previous cycle)` |
| **Gross_Pumpable_Vol** | Gross volume above the minimum operational level |
| **Net_Pumpable_Vol** | Net volume above the minimum operational level |
| **Gross_Ullage** | Available gross volume before maximum capacity |
| **Net_Ullage** | Available net volume before maximum capacity |
| **Stop_Gauge** | Optional user-specified target level (not calculated; entered manually) |
| **Time_To_Level** | Estimated time to reach Stop_Gauge based on current Volume_Fill_Rate |

> These attributes need to be added to the AURA model before they appear in AUM; from v14.6 onward, AURA models are automatically updated with these defaults.

### Licensing

| License item | Details |
|---|---|
| **AUM Base Model tokens** | 30 tokens per site (`RN_UNIF_MS_BASE_`); not checked out per session — applied at site level, same structure as AURA |
| **AUM User tokens** | 6 tokens per user per model (`RN_UNIF_MS_USER`); checked out each time a user opens a model |
| **Monitoring Agent** | Does not check out AURA or AUM user tokens |
| **Process Data REST (PDR)** | Monitoring Agent sends a service account ID to PDR; live Trend views send the individual user's ID (same pattern as AURA) |

> AUM does not consume AURA license keys. The two product licenses are independent.
