# Aspen Unified Model Management Knowledge Base

## Quick Map

| Need | Go to |
|---|---|
| Resolve merge conflicts after getting latest changes | [Model Reconciliation](#model-reconciliation) |
| Find the right PIMS or Scheduling merge area | [Content-Specific Merge Areas](#content-specific-merge-areas) |
| Use common Aspen Unified navigation, tables, and flowsheets | [Common UI Operations](#common-ui-operations) |
| Understand naming restrictions | [Naming Guidelines](#naming-guidelines) |
| Configure external data/API access | [Administration and APIs](#administration-and-apis) |

## Coverage Map

| Source area | KB coverage |
|---|---|
| Model Management > reconciliation | Merge workflow, conflict resolution, cancel options, restore point behavior |
| Model Management > content-specific merge areas | PIMS and Scheduling merge-entry map |
| Common Functions in Unified Applications | Navigation, flowsheet interactions, context menu, tables/grids, naming, visual preferences |
| Administration/API topics | Process data server registration, PSCAdmin access, Swagger/Data Hub API examples |

## Model Reconciliation

Model reconciliation is used when a model has local changes and newer changes exist in another model version or parent branch. It is not available for GDOT or AURA models.

After selecting a content area from the Merge Status panel, the merge page shows the differences for that area. The legend identifies user/time information and colors for the current branch versus the latest checked-in branch. If changes exist at the case level, select the relevant case from the application bar case selector before reviewing details.

### Conflict Resolution Flow

1. Open a specific merge area from the Merge Status panel.
2. Review the merge table and select which version to accept: current model or other model.
3. If one side changed and the other did not, the system automatically selects the non-conflicting option. Disabled Accept choices usually mean there is no real conflict for that row.
4. Use **Keep all in current model** or **Replace all with other model** when available to apply the same response across a tab or area.
5. Continue until **Unresolved Conflicts Remaining** is zero.
6. Click **Accept Merge** to commit the selected reconciliation choices and remain in Reconciliation.

Unresolved conflicts affect downstream model actions. If getting latest changes to the current model, all conflicts must be resolved before check-in. If getting latest changes from a parent branch, check-in may be allowed, but promotion is blocked until conflicts are resolved. The Home page can show an update indicator when a checked-in model still has unresolved changes.

### Cancel Reconciliation Options

When closing Model Reconciliation without applying changes, choose one of these options:

| Option | Behavior |
|---|---|
| Commit reconciled conflicts | Saves reconciled changes and exits Reconciliation. Equivalent to **Accept Merge**. Not available if there were no pending conflicts to resolve. |
| Close without committing changes | Exits Reconciliation without saving reconciliation choices. |
| Revert reconciliation - Do not save changes | Reverts all reconciliation changes and restores the model to the restore point. |

Restore points are created before getting latest changes from a model, after a prior **Accept Merge**, and after committing reconciled conflicts from the cancel dialog. To abandon a merge fully, open **View Restore Points**, restore **Auto save before getting latest changes**, then check in the restored model.

## Content-Specific Merge Areas

Most content-specific merge pages share the same behavior: they compare the current model against the checked-in or parent model, display the data-area-specific changes, and send the user back to the common reconciliation process for choosing accepted values.

### PIMS and Multi-Site PIMS Merge Areas

| Merge area | Access path / scope |
|---|---|
| Supply | **Primary Input Data > Supply**. In global models, tabs can include Global Material, Global Group, Supply, and Supply Group. |
| Demand | **Primary Input Data > Demand**. Tabs include Demand and Demand Groups. |
| Transport | **Primary Input Data > Transport**. Tabs include Transport and Transport Group. |
| Inventory / Global Inventory | **Primary Input Data > Inventory**. Tabs can include Inventory, Inventory Group, Material, or Groups depending on model type. |
| Distillation Modes | **Distillation Modes** on the Merge Status panel. Shows differences between distillation modes. |
| Purchases / Sales | **Primary Input Data > Purchases** or **Sales**. Tabs can include Materials, Utilities, and Groups. |
| Capacities, Limits & Bounds | **Capacities, Limits & Bounds > specific area**. Used for capacity, process limit, blend limit, and bound changes. |
| Blends | **Materials & Properties > Blends**. Shows changes in blend data. |
| Specification Blend details | **Materials & Properties > Blends > spec blend name**. Differences can be on Definition or Formula tabs. |
| Formula Blend details | **Materials & Properties > Blends > formula blend name**. Differences can be on Definition or Formula tabs. |
| Group Blends | Purchase/sales merge details for group blend changes. |

### Scheduling Merge Areas

| Merge area | Behavior |
|---|---|
| Merge Event Summary | Appears when using **Get latest changes to the model** or **Get latest changes from parent**. Summarizes events and structural changes in the local and master/parent model. |
| Merge Events | Shows events and resources modified in current and other branches. If both branches changed a record, select which record resolves the conflict. |

If the Scheduling model owner has a model that is not up to date with the latest version, they may have the option to check in and overwrite the model. That bypasses reconciliation of latest changes from other models.

## Common UI Operations

### Aspen Unified Navigation

Aspen Unified applications share several navigation conventions across PIMS, Scheduling, GDOT Builder, AUM, and AURA.

| Navigation feature | Behavior |
|---|---|
| Left navigation panel | Primary model navigation. The active node is highlighted. The panel can be resized and hidden. |
| Right-side panels | Context panels appear where needed, such as flowsheet properties. Panels can be pinned or unpinned. |
| Model order | The display order used in navigation, reports, and charts. It is defined by associated summary screens, not by table filtering or sorting. |
| Search | Available in each navigation section; supports partial or full string search. |
| Open in another browser instance | The plus/new-window icon or context menu opens the selected area in a new browser instance for side-by-side comparison. |
| Copy link URL | Copies a direct URL to the current page. Recipients still require site/model permissions. |
| Case context selectors | The active case controls case-specific table values and constraints. Structural changes often require **Base Model**. |
| Period selector | In multi-period models, controls displayed periods plus Default and Total rows. |
| Solution status | The application bar shows solution state, stale/running indicators, active penalties, and objective status after execution. |

### Tables and Grids

Tables/grids display and edit structured data. By default, rows display in entry order with the latest item at the bottom.

Common table behavior:

| Capability | Notes |
|---|---|
| Reposition rows | Some tables allow drag/drop row repositioning or table-tray arrow movement. |
| Hide/show columns | Use the column selector on the far right of a table. |
| Rearrange columns | Drag column headers, or drag from the column selector. |
| Filter/sort | Column menu and filter tab support filtering, sorting, pinning, autosizing, reset-to-default, and grouped row collapse/expand when supported. Filtering/sorting does not change model order. |
| Edit cells | Editable data is blue; editable empty cells show a blue dash. Non-editable empty cells are blank. |
| Modified case data | AUP/AUS case data modified from inherited values is highlighted yellow. |
| Multi-cell copy/paste | Select ranges by dragging, then copy/paste without entering individual cell edit mode first. |
| Periodic inherited values | In AUP periodic models, dimmed editable values can indicate values inherited from default data. |
| Chart Range | Select table values, right-click **Chart Range**, then configure chart type, data categories/series, formatting, and download as `.png`. |
| Export | Right-click selected data or a table cell and choose CSV or Excel export. General exports are table-display exports and may not match re-import formats. |

Table toolbar options are context dependent. Common actions include New, Copy, Import, Export, delete/remove, and page-specific commands.

### Flowsheet Interactions

All Aspen Unified applications use flowsheets and flowsheet toolbars, but available actions vary by product.

Common flowsheet capabilities:

| Capability | Notes |
|---|---|
| Toolbar reposition/collapse | Drag the reposition icon to move the toolbar; use collapse controls to reduce it. |
| Pointer mode | Standard selection/edit mode for moving, selecting, and interacting with objects. |
| Pan and zoom | Use pan mode or lower-right view controls. Drag zoom can focus a region; zoom-to-fit returns to full view. |
| Alignment | Align or distribute selected objects. Distribution requires at least three objects. |
| Bookmarks | Save the current flowsheet position/scale and remove bookmarks when no longer needed. |
| Search | Search units, streams, flowsheet objects, and for GDOT measurement names. Matching objects are highlighted. |
| Download diagram | Downloads the current flowsheet layout as `Diagram.svg`. |
| Breadcrumbs | Navigate into and out of subflowsheets from the breadcrumb bar. |
| Connection tools | Product-specific stream, utility, variable, event, or logic connection modes change the cursor and create links between objects. |

Changing a unit icon is visual only. Double-click a unit to open its Details/Properties panel, use the icon drop-down beside the unit name, and choose a replacement. The unit type and properties do not change, and streams/ports keep their relative positions around the new icon.

### Context Menu and Keyboard Shortcuts

Right-clicking on a flowsheet or object opens context-sensitive options. Some structural actions are disabled unless the active case is **Base Model**.

| Option | Scope | Shortcut / note |
|---|---|---|
| Paste | All flowsheets | `Ctrl+V`; available after copy/cut. |
| Stub / Unstub all connections | AUS and AURA flowsheets | Declutters or restores visible stream connections. |
| Create Text Annotation | All flowsheets | Opens the text annotation editor. |
| Details / Summary | Units/streams depending on product | `Ctrl+I`; opens properties/details or AUP unit summary. |
| Cut / Copy / Paste | Units and annotations | `Ctrl+X`, `Ctrl+C`, `Ctrl+V`. |
| Delete | Units, streams, annotations | `Delete`. |
| Disable / Enable | Units and streams | `Ctrl+D` / `Ctrl+E`; disabled entities are excluded from calculations. GDOT disabled units are excluded from exported worksheets. |
| Hide | GDOT units/streams | Hides selected objects; toolbar hidden-object command can restore them. |
| Create Subflowsheet | AUP/AUS units | Requires Base Model; deleting the subflowsheet object does not delete included units. |
| Align | Streams or units | `Ctrl+Arrow`, `Ctrl+Shift+H`, `Ctrl+Shift+V`. |
| Create Tank Group | Tanks | `Ctrl+G`. |
| Stub Connection | Streams | `Ctrl+.`; selection must contain whole connections. |

Press `Esc` to exit an active flowsheet action.

### Visual Preferences

Aspen Unified supports Light and Dark background modes across Unified applications. Light is the default. Open the user-info menu from the application bar and select Light or Dark from the mode selector. Online Help background color is not affected.

## Naming Guidelines

Invalid entity names produce warning/error messages. Naming rules apply across data areas and namespaces.

| Field | Limit / rule |
|---|---|
| Name | Up to 20 characters; at least one character; unique within its data area/namespace. Cannot contain `:`, `[`, or `]`; cannot start with `*` or `!`. |
| Description | Up to 80 characters, though only 20 characters appear on reports. Model descriptions can be 100 characters. |
| Abbreviation | Up to 3 characters; formerly called Tag before V11. Optional, but when specified must be unique within the data area. Cannot contain spaces, `:`, `[`, or `]`; cannot start with `*` or `!`. |

Additional abbreviation notes:

- Global model plant/market/depot and period abbreviations can be one character.
- Atmospheric tower abbreviations must use the `AT` prefix; vacuum tower abbreviations must use the `VT` prefix.
- Tower identifier is one character appended to the tower prefix.

Namespaces requiring uniqueness include local/global materials, material groups, utilities, utility groups, blender names, buy/sell alternate tags, submodels, distillation modes, user pools, virtual pools, properties, plants, markets, transport modes, periods, and equation names.

## Administration and APIs

### Process Data Server Access

Register a process data server when using AURA Data Historian features or AUS Data Acquisition. Registration is performed in Aspen Configuration Manager, can be done at any time, and only needs to be done once per server.

Important constraints:

- Registered process data servers allow Aspen Unified to retrieve external server data for Unified models.
- Data server registration should not be performed while an AU model is open; close all models first.
- For AUM Data Trends, tags must be configured in Data Acquisition and Expression fields of the linked AURA Base Model.

### PSCAdmin

`PSCAdmin.exe` is a command-line utility for Aspen Unified server operations. Prefer graphical tools such as Aspen Configuration Manager when available.

Access flow:

1. Open a command prompt on the AU Server machine.
2. Change to the PSCAdmin folder:

```powershell
cd C:\Program Files\AspenTech\Aspen Unified\Admin\CLI
```

3. View command syntax and parameters:

```powershell
PSCAdmin --help
```

### Swagger and Data Hub API Examples

Aspen Unified provides API examples for creating Business Process Documents (BPDs), which are JSON files containing external data for Unified models. Samples are installed under:

```text
...\Users\Public\Documents\AspenTech\Aspen Unified\Aspen Unified API Examples
```

Use product-specific Swagger pages to view API samples, schemas, and supported calls. Starting with V15.0.3, BPD Hub access is product specific, while the original route remains supported for backward compatibility.

| Product | BPD Hub route |
|---|---|
| Backward-compatible route | `https://<FQDN>/unified/api/v1/BpdHub/{modelId}` |
| AUP | `https://<FQDN>/unified/UnifiedPIMS/api/v1/BpdHub/{modelId}` |
| AUS | `https://<FQDN>/unified/UnifiedScheduling/api/v1/BpdHub/{modelId}` |
| AURA | `https://<FQDN>/unified/UnifiedAura/api/v1/BpdHub/{modelId}` |

Swagger sections include:

| Section | Purpose |
|---|---|
| BpdHubApi | POST, GET, or DELETE BPD data for Aspen Unified models. **Try it out** sends data to the listed server. |
| Config | Configuration APIs for Aspen Unified applications. |
| EntraManifest | Microsoft Entra configuration information. |
| ExcelAddIn | Excel Add-in setup and configuration APIs. |
| Schemas | Additional APIs, syntax, and example structures. |

After a correctly formatted JSON BPD is posted, a notification appears on the Unified Home page next to the applicable model. Users can then enter Data Hub, acquire/configure the external data, and apply it in the relevant Unified application.