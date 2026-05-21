# Aspen Unified Reconciliation and Accounting (AURA)

> **Source:** `Content/html/UnifiedAURA/`
> **Version:** Aspen Unified V15.0.5

## Quick Map

Use this section as the local table of contents for fast navigation inside the AURA KB.

- **Getting started:** [Overview](#overview) · [Creating a New AURA Model](#creating-a-new-aura-model) · [Model Management](#model-management)
- **Model setup and structure:** [Work Areas](#work-areas) · [Model Data and Integration](#model-data-and-integration) · [Model Settings](#model-settings) · [Flowsheet](#flowsheet)
- **Operational analysis:** [Overview Dashboard](#overview-dashboard) · [Sankey Diagrams](#sankey-diagrams) · [Cases and Case Calendar](#cases-and-case-calendar) · [Case Analysis and Reconciliation](#case-analysis-and-reconciliation)
- **Operational objects:** [Events](#events) · [Envelopes](#envelopes) · [Data Trends](#data-trends)
- **Imports and external integration:** [Importing Object Data and Events from Excel (Case Context)](#importing-object-data-and-events-from-excel-case-context) · [Importing Events and Tank Data from AUM](#importing-events-and-tank-data-from-aum) · [Data Hub](#data-hub)
- **Reference and advanced topics:** [Version History Details](#version-history-details) · [Reports](#reports) · [Migrating from AORA to AURA](#migrating-from-aora-to-aura)

## Overview

AURA is a plant material tracking and yield accounting system. A model of the processing plant tracks material receipts, shipments, internal movements, and inventories. The model can represent the physical plant closely or more virtually, depending on tracking and reporting requirements. AURA supports plant performance analysis and yield accounting functions.

**Basic model structure:** A network of Objects connected with **streams** (permanent flows) or **events** (temporary flows). Storage objects contain inventories; non-storage objects do not. To enter measured/raw values, set the Measurement attribute to TRUE (representing presence of an instrument).

**Typical model build steps:**
1. Configure Model Data: Properties → Materials → Strapping Tables → Object Templates
2. Build the model: drag-and-drop objects on flowsheet (Units, Tanks, etc.), then connect streams

### AURA Solver

AURA includes a solver that calculates unmeasured flows, identifies and reconciles data discrepancies, and reviews all reconciliation results. It reconciles based on user-selected strategies and error distribution techniques, enabling meaningful reports even with incomplete information.

The solver **balances objects** (tanks, tank groups, pipelines, process units, manifolds, blend headers) by making **minimum adjustments** to flows (streams/events) to resolve gross errors or random errors. Density errors are also resolved when the **simultaneous** option is used.

---

## Creating a New AURA Model

**To create a new AURA model:**
1. From the Home page, click the AURA model icon. The Aspen Unified Reconciliation Accounting Model landing page opens.
2. Click **Create New** in the top right corner. The **New Reconciliation Accounting Model** dialog box appears.
3. Complete the required fields.
4. Click **Create**.

### New Model Dialog Box Fields

| Field | Type | Notes |
|---|---|---|
| **Model name** | Text | Up to 60 chars; must be unique; cannot contain `/ \ + * % & ? ' : < >` |
| **Description** | Text | Up to 255 chars |
| **Engineering Units** | Selection | Metric or English (default). **Cannot be changed after model creation.** |
| **Base temperature** | Selection | English default: 60°F; Metric default: 15°C (also 20°C). If changed after creation, update default Density Air values in stream/event templates manually. |
| **Model Timezone** | Selection | Time zone for the model |
| **Site catalog** | Drop-down | Optional. Links to Aspen Unified Planning Site Catalog. Enables plan vs actual comparison, shared units/materials/properties. |
| **Input data server** | Drop-down | Server where input data resides |
| **Input database** | Drop-down | Database where input data resides |

**Model Analysis Settings** (first analysis method defaults):

| Field | Type | Notes |
|---|---|---|
| **Reconciliation basis** | Selection | Volume or Mass (default). Determines primary UOM during reconciliation. |
| **Case frequency** | Input + Selection | Enter time span (e.g., 1 day). Cannot change after cases are created. Each analysis method can have its own frequency. |
| **Case start time** | Date selector | Cannot change once cases are created. Other analysis methods can have different start times. |


---

## Model Management

AURA allows multiple users to interact with the same model and cases concurrently. Workflows allow users to check out and/or work on the same model simultaneously.

**Permission requirement:** You must have the correct rights to perform updates. Without those rights, update actions/options will not be available.

### Two Kinds of Model Changes

| Change Type | Behavior |
|---|---|
| **Base model changes** | Requires a check-in to be available to other users. Other users must **accept** base model changes before checking in their own model. If the **Check-in Pending Changes on case creation** General Setting is true, the model is checked-in immediately when a new case is created. |
| **Case changes** | Recorded dynamically and **immediately visible** to all users of the same model when the page/panel is reloaded. Case changes are always saved regardless of model check-in state; they **cannot be reverted**. |

### Model Updates

A manual model update is required when another user has modified the model you have checked out (same model, different local workspace).

**Indicators that an update is available:**
- If model is open: a notification toast appears + the model actions icon shows a **red** notification badge
- If model is not open: an update icon appears on the Home page next to the model status

**Update actions:**

| Action | Description |
|---|---|
| **Get latest changes from parent** | Available in a child branch after parent is checked in with changes. Click Accept to acknowledge. |
| **Get latest changes to the model** | Incorporates changes from the latest checked-in model into your current workspace. **Note:** Export your Base Model edits first — there is no model reconciliation; unsaved base model edits will be lost. |
| **Ignore changes Temporarily** | Hides the notification toast. The alert icon remains until changes are reviewed/accepted. |

### Restore Points

Restore points allow you to return to a previous state within a **checked-out model**. Up to **10 restore points** are allowed. All restore points are **removed when the model is checked in**.

| Type | Description |
|---|---|
| **Automatic** | Created automatically based on certain workflow tasks and within 5 minutes of a model change |
| **Manual** | Created manually from Application bar → Manage Files icon → **Create restore point**. Useful before experimental tasks or base model changes. |

To use: Application bar → Manage Files → **View Restore Points** → select a restore point.

### Revert

Reverting returns the model to the last **checked-in** version. All **base model** unchecked-in changes are lost.

> **Note:** Case changes are saved immediately and **cannot be reverted**, even when the model is reverted.

---

## Work Areas

Work areas display results in a graphical format from many sources. They consist of **containers** holding **widgets** that display user-specified data. Users can also modify data and run cases directly from a work area.

**Permission requirements:**
- **Creator / Owner** — can create and modify work areas
- **Viewer** — can view any work area but configuration changes and widget data modifications are not saved

### Work Area Workflow

1. Create a work area
2. Define/configure variables (not needed for Report widgets)
3. Create containers (layout)
4. Add and configure widgets

### Managing Work Areas

| Action | Steps |
|---|---|
| **Create** | Navigation → Work Area icon → **Create** (+ circle). Auto-named "Work Area nnn". Click name field to rename. |
| **Access** | Navigation → Work Area icon → click desired work area |
| **Rename** | Click name field at top of work area. Enter new name (max 72 chars; cannot contain `\ / : * ? ' < > \|`) |
| **Delete** | Right-click work area → **Delete**. All components are also deleted. |
| **Copy/Duplicate** | Right-click → **Duplicate**. Creates full copy including variable set configuration, layout, and widgets. Named "Work Area nnn - Copy". |
| **Import** | Navigation → Work Area icon → **Import**. Select `.dsc` file. Work areas are not model-dependent; mismatched variables are ignored (import continues as long as at least one variable can be mapped). |
| **Export** | Work area command bar → Export icon. Creates `<modelName>_<workAreaName>.dsc` in Downloads folder. Can be used to share layouts across models. No need to assign data variables to export. |

### Work Area Command Bar Icons

| Icon | Function |
|---|---|
| Swap | Swap contents of two selected containers/widgets (Ctrl+click to select both) |
| Export | Export entire work area layout and content |
| Delete | Delete a container or widget |
| Settings | Access work area configuration settings |


### Work Area Layout and Containers

From the right-side Operations panel → **Work Area Styling** tab:
- **Layout:** Divides the work area using nested split containers. Click and drag a split type onto the work area. Resize containers by dragging the splitter (splitter positions are not saved per user).
- Each container holds **one widget**.
- **Widgets:** Grid, Chart+Grid, Report

### Configuring Variables for a Work Area

> Variable configuration is **not needed for Report widgets**.

1. Click the Settings icon from the work area command bar. The **Work Area Configuration** dialog box opens.
2. On the **Add Variables** tab, select a variable type. Three filters appear: Analysis, Attribute, and `<ObjectTypeName>`.
3. Optionally enter a **Label** (used by widgets to reference this variable definition).
4. Select a value for each filter (all filters required).
5. Click **Add**. Configuration appears on **Selected Variables** tab.
6. Repeat for each desired variable.
7. Click **X** to close and save.

From the **Selected Variables** tab, you can edit or delete existing variable definitions.

### Widgets

**General notes for all widgets:**
- Click and drag the reposition icon to rearrange rows and columns in widget configuration
- Widget name up to 20 characters
- Data can be directly modified in a grid/table within a widget (changes apply to AURA data areas and flowsheet Data Panel; re-run cases to get updated solution values)
- Export table data to Excel via right-click → **Export**
- Right-click a value cell → **Chart Ranges** to create additional plots

| Widget Type | Description |
|---|---|
| **Grid** | Displays values for selected variable definition. Standard table controls (filter, sort, hide/show columns, keyboard navigation). Supports Chart Range from selection. |
| **Chart+Grid** | Displays both grid and chart. Select chart type and relative position. Customize axis labels, orientation, colors. Grid filter/hide changes apply to chart too. Charts can be downloaded (picture) or further configured via chart settings icon. Chart settings do not persist when chart type is changed. |
| **Report** | Displays visual details for a selected report. Includes all Chart+Grid features. Configure directly from Data Grid Configuration panel — no variable pre-selection needed. Available report types: Unit Balance, Unit Summary, Tank Inventory, Tank Balance, Material Balance, Production Balance, Receipts & Shipments, Composition Tracking, Emissions. |

**Chart types with special features:**
- **Parallel Chart:** Click and drag to highlight a range on a vertical axis; corresponding grid values are highlighted.
- **Heat Map:** Depicts values for a single variable across two axis variables as a grid of colored squares.

**Data Grid Configuration options:**
- **Select the Variables** — choose variable definition from drop-down
- **Enter Latest** — show the most recent N cases (mutually exclusive with time range)
- **Specify a Time Range** — define Start and End times within the selected Analysis time frame

---

## Model Data and Integration

This section covers the AURA model-data pages that connect the model to shared catalogs, historians, expressions, object mappings, and tank strapping data.

### Catalog

The **Catalog** page links the AURA model to a **Site Catalog** so the model can share and import catalog-level metadata such as materials and properties.

**Access:** Navigation Panel → **Catalog**

**Prerequisite:** a Site Catalog must already exist, typically created by an Aspen Unified administrator.

#### Catalog actions

| Action | Notes |
|---|---|
| **Connect to existing catalog** | Select **Existing catalog** and pick from the drop-down |
| **Create and connect new catalog** | Select **New catalog**, choose server/database, enter unique catalog name and optional description |
| **Disconnect** | Removes all links between the model and the selected Site Catalog |
| **Go to site catalog** | Opens the Site Catalog page in a new tab |

#### Catalog fields

| Field | Notes |
|---|---|
| **Server** | SQL server hosting the Site Catalog database |
| **Database** | Catalog database on the selected server |
| **Name** | Unique, max 20 chars; cannot contain `+ % & * ? / \ < >` |
| **Description** | Optional, max 100 chars |

Once connected, AURA can import materials and properties from the Site Catalog and use those links for downstream object mapping.

### Linking Objects

The **Linking Objects** page links AURA **Objects** or **Envelopes** to assets in the connected Site Catalog.

**Access:** Navigation Panel → **Linking Objects**

There are two tabs:
- **Objects**
- **Envelopes**

Both tabs use the same table layout.

| Column | Notes |
|---|---|
| **Name** | Click to open the object's Details panel (Configuration tab only) |
| **Object Type** | AURA object type |
| **Abbreviation / Description** | Basic object metadata |
| **Site Catalog** | Linking status |
| **Last Imported** | Last import timestamp |
| **Mapped Catalog Asset** | Drop-down of available Site Catalog assets to link |

**Output:** the selected mapping also appears in the object's Details panel under **Mapped Catalog Asset**.

**Export:** downloads `<ModelName>_Linking Objects.xlsx`.

### Data Acquisition

The **Data Acquisition** page defines how AURA retrieves process data from historians such as **IP.21**, **PI**, and **PHD**.

**Access:**
- Navigation Panel → **Data Acquisition**
- Or Application Bar → **Retrieve Process Data**

#### Integration behavior

- Uses **Process Data REST (PDR)**
- Can retrieve historian data for flowrates, tank gauges, temperature, pressure, density, and similar process values
- Retrieved values are mapped to **Tag Alias** names inside AURA
- Those Tag Alias names are then referenced in expressions using `TagData("AliasName")`

> **Note:** when AURA runs PDR queries, A1PE license keys are consumed and released after inactivity.

#### Data Acquisition workflow

1. In **Base Model** context, add a tag row
2. Define **Tag Alias**, **Data Server**, **Tag Name**, and **Retrieval Type**
3. Optionally set **Time Offset**, **Multiplier**, **Bias**, **Minimum**, and **Maximum**
4. Save / check in the Base Model
5. Update the target case to that Base Model version if needed
6. Select an Analysis and Case
7. Click **Retrieve Process Data**
8. Reference the Tag Alias in object/template expressions with `TagData("Alias")`

#### Core fields

| Field | Notes |
|---|---|
| **Tag Alias** | Unique internal AURA name used by expressions; often same as historian tag name |
| **Data Server** | Registered process data server |
| **Data Source** | Source within the server, often `localhost` |
| **Tag Name** | Actual historian tag |
| **Retrieval Type** | Retrieval method used for this alias |
| **Time Offset** | Positive/negative offset from case start/end or retrieval window |
| **Multiplier** | UOM or scaling conversion: `Tag Alias Value = Tag Value * Multiplier + Bias` |
| **Bias** | Constant offset applied after multiplier |
| **Minimum / Maximum** | Used for out-of-range checks |

#### Common retrieval methods

| Method | Typical use |
|---|---|
| **SumIntegral** | Integrated total over the case time range |
| **Average / AverageStepped** | Time-weighted average for flowrate, temperature, etc. |
| **InterpolateStart / InterpolateEnd** | Linear interpolation at case start/end |
| **InterpolateSteppedStart / End** | Take the value at or before case start/end |
| **Maximum / Minimum** | Extremes over the case window |

Typical examples:
- **tank ending gauge / volume** → `InterpolateEnd`
- **lab density** → `InterpolateSteppedEnd`
- **hourly average converted to daily** → use `Multiplier`

#### Data Acquisition summaries

When a case is selected, the page also summarizes:
- connected vs disconnected data sources
- resolved vs unresolved tags
- tag quality counts
- in-range vs out-of-range Tag Alias values

Toast meanings after retrieval:

| Color | Meaning |
|---|---|
| **Red** | All data sources disconnected or all values invalid |
| **Yellow** | Partial success |
| **Green** | Valid values retrieved for all configured tags |

### Data Publish

The **Data Publish** page sends AURA values back to an external system, usually a historian.

**Access:** Navigation Panel → **Data Publish**

Publishing is usually used to write:
- reconciled values
- intermediate calculations
- final case values

#### Publish workflow

Publishing configuration is defined in **Base Model** context; actual publish happens in **Case** context.

1. In Base Model, add a publish row
2. Optionally assign a **Group**
3. Select **Data Server** and **Data Source**
4. Enter target **Tag Name**
5. Choose **Publish Time Basis**
6. Set **Time Offset** if needed
7. Select what to publish:
   - an **Event**
   - or a **Template + Object + Attribute**
8. Check in the Base Model
9. Update the case to the right Base Model version if needed
10. Select Analysis + Case and click **Publish Data**

#### Publish permissions

Only **Owner**, **Author**, or **Case Author** roles can publish.

#### Publish fields

| Field | Notes |
|---|---|
| **Group** | Group rows for joint publishing |
| **Data Server / Data Source** | Destination connection |
| **Tag Name** | Historian tag to write to; historian type must match the AURA attribute type |
| **Publish Time Basis** | Case Start, Case End, Event Start, or Event End |
| **Time Offset** | Fine-tunes the chosen publish time |
| **Template / Object / Attribute** | Identifies the AURA value to publish |
| **Publish Status** | Success / Failed after publish |
| **Value Match** | Whether historian value matches the current AURA value |
| **Historian Value** | Current published value in the historian |

#### Publish toast meanings

| Color | Meaning |
|---|---|
| **Red** | All sources disconnected or all tag values invalid |
| **Yellow** | Partial publish success |
| **Green** | All valid tag values published successfully |

**Export:** downloads `<ModelName>_Data Publish.xlsx`, which can also be used as an import template for publish rows.

### Expression Editor

The **Expression Editor** defines object attribute logic in the **Base Model**. Expressions are inherited by cases and are not edited directly at case level.

**Key rules:**
- expressions are authored on the **Base Model**
- case values can override evaluated results, but not the expression definition itself
- if referenced values change, dependent expressions update automatically

#### Expression syntax basics

Supported core syntax:

| Category | Examples |
|---|---|
| **Numbers** | `1`, `-1`, `1.00321`, `10e3` |
| **Strings** | `"Tank001"` or `'Tank001'` |
| **Arithmetic** | `+ - * /` |
| **Comparison** | `> < >= <= == !=` |
| **Logical** | `&&`, `||`, `!` |
| **Boolean** | `true`, `false` |

#### Conditionals

| Function | Purpose |
|---|---|
| `IF(condition, trueExpr, falseExpr)` | Conditional logic |
| `IFERROR(exprA, exprB)` | Fallback expression if the first one errors |

#### Identifier styles

| Style | Example | Notes |
|---|---|---|
| **Basic identifier** | `MeasuredVolume` | Most common |
| **Explicit identifier** | `[MeasuredVolume]` | Bracketed attribute name |
| **De-referenced identifier** | `@"MeasuredVolume"` | Generated dynamically with an expression |
| **Attribute usage identifier** | `$MeasuredVolume` | Resolves by attribute usage rather than literal name |

This is important because many built-in expressions use `$AttributeUsage` style so template attribute names can still be customized.

#### Referencing objects

Examples:
- `UnitOp("Tank001").Type == ObjectType.Tank`
- `Stream("S-101").Template == "Liquid Stream"`
- `TagData("TagAlias001")`

#### Editor conveniences

- auto-completion for objects and attributes
- Tab to complete the selected suggestion
- syntax coloring for functions, identifiers, numbers, and literals

#### Common function families

The help page highlights a large built-in function set. Common examples include:
- `AVG`
- `COUNT`
- `MAX`
- `MIN`
- `ABS`
- `RMS`

Expression evaluation issues appear later in **Expression Error Log** under Cases & Analysis.

### Strapping Tables

Strapping tables define the **height-to-volume** relationship used for tanks.

#### Strapping Tables Summary

**Access:** Navigation Panel → **Strapping Tables**

Strapping tables are separated from tanks so:
- historical tables can be preserved
- multiple tanks can reuse the same table
- a tank can be re-pointed to a new table when strapping data changes

| Column | Notes |
|---|---|
| **Name** | Unique; cannot contain `: [ ]` |
| **Rows of Data** | Number of defined points |
| **Used in Base Model by** | Tank(s) linked to this table |
| **Created / Modified** | Audit information |

#### Summary page actions

| Action | Notes |
|---|---|
| **Add** | Creates a new table with default name like `StrappingTable nnn` |
| **Export all** | Downloads `<ModelName>_Strapping_Tables.xlsx` |
| **Import** | Replaces existing strapping tables using the spreadsheet format |
| **Delete** | Single or multi-delete from the table or table tray |
| **Download selected** | Exports selected tables individually |

#### Strapping Table Details

The details page defines the points and optional roof displacement logic.

| Field | Notes |
|---|---|
| **Name** | Unique; cannot contain `: [ ]` |
| **Height UOM** | UOM used for gauge/height |
| **Volume UOM** | UOM used for volume |
| **Interpolate between points** | If on, values between points are linearly interpolated |
| **Table adjusted for roof displacement** | Enables roof-displacement options for floating-roof tanks |

#### Roof displacement options

| Option | Notes |
|---|---|
| **Design Gravity** | Design gravity value and UOM |
| **Adjustment for Gravity Deviations** | Volume / gravity adjustment inputs |
| **Use linear adjustment in critical zone** | Applies linear adjustment in the critical zone of a floating-roof tank |

#### Points table actions

| Action | Notes |
|---|---|
| **Add point(s)** | Enter Begin Height / Begin Volume and optionally End Height / End Volume with number of points |
| **Edit point** | Height and Volume cells can be edited directly |
| **Delete point(s)** | Single or multi-delete |

Strapping tables do **not** use equations; they use explicit point pairs. This lets sensitive tank regions be digitized more finely.

---

## Model Settings

Access all settings from the Navigation Panel → **Settings icon**.  
Click **Reset to Defaults** at the top of any settings page to revert to defaults (User Preferences are not reset).

### General Settings

| Section | Setting | Default | Notes |
|---|---|---|---|
| **General** | Engineering units | English | Set at model creation; cannot be changed afterward |
| | Base temperature | 60°F (English) / 15°C (Metric) | Metric allows 15°C or 20°C. If changed post-creation, update Density Air defaults in stream/event templates manually. |
| | Model time zone | Machine local TZ | Used for all import/export time operations |
| **Data Acquisition & Publishing** | Max tags per request | — | Max tags per single historian data retrieval request |
| | Show current tag value | Not selected | Adds Tag Alias Value, Tag Value, Quality Status, Quality Level columns to Data Acquisition Summary |
| **Volume Correction Factors** | Standard (LPG) | 1980 | Options: Legacy, 1980, 2007/Density, 2007Vcf, 2004 |
| | Standard (Non-LPG) | 2004 | Options: Legacy, 1980, 2004, Evp |
| | Decimal places in VCF calc | 5 | Range: 0–15 |
| | Enforce Range | False | |
| | Measure type | Standard | |
| **Standard Conversion Factors** | Weight Reduction Factor (WRF) | 0 | |
| | Density of Constrained Sediment (SG) | 1 | |
| | Density of Air (SG) | 1 | |
| | Density of Contained Water (SG) | 1 | |

### Display Settings

**Application-wide:**

| Setting | Default | Notes |
|---|---|---|
| Date format | MM/DD/YYYY | |
| Time format | HH:mm | |
| Toast times (s) | 5 | Duration for notification toasts |
| Display case name on A-bar | Selected | |
| Check-in pending Base Model changes when creating a new case | Not selected | If enabled, base model is auto checked-in before new case creation |

**Tables:**

| Setting | Default | Notes |
|---|---|---|
| Column drop zone at top of table | Selected | Enables grouping by dragging column headers |
| Object name format | Name only | Options: Name Only, Description Only, Abbreviation Only, Name (Description), Name (Abbreviation), Description (Name), etc. |
| Column header format | Name | Name or Abbreviation |
| Number format | Decimal places | Tables: 4dp, Tooltips: 6dp, Percentage: 3dp |

**Flowsheet:**

| Setting | Default | Notes |
|---|---|---|
| Tooltips | Selected | Up to 5 attributes in Data Inspector tooltip; unlimited in flowsheet tooltips. Configure per-attribute in Object Template. |
| Show Composition in tooltips | Not selected | Requires Tooltips enabled; shows composition in case context |
| Base Model grid | Selected | Grid lines to assist positioning; color (#424242), opacity (10%), spacing (10px) |
| Stream annotation abbreviations | Selected | Shows abbreviations on streams |
| Mouse coordinates | Not selected | Shows x/y on flowsheet |
| Highlight object connections on flowsheet | Selected | |
| Flowsheet zoom step % | 5 | |
| Visibility factor | 0.1 | Controls non-selected object opacity when in Envelope mode (0=hidden, 1=fully visible) |

**Connections:**

| Setting | Default | Notes |
|---|---|---|
| Thickness | 3 | |
| Label size / font | 12 / Roboto | |
| Routing | Orthogonal | Options: AvoidsNodes, Orthogonal, Curve, None |
| Event type link style | — | Separate style for event links |

**Reconciliation Status Colors (Flowsheet):**

| Unit State | Default Color | Flow State | Default Color |
|---|---|---|---|
| Balanced | #4DAF4E (green) | NoAdj | #4DAF4E |
| Within Tolerance | #F8981D (orange) | LowAdj | #F8981D |
| Imbalanced | #EF4438 (red) | HighAdj | #EF4438 |
| Disabled | #9E9E9E (grey) | Disabled | #9E9E9E |
| Dock | #7DC2FD | Calculated | #7DC2FD |
| Member Tank | #0E70C7 | Error | #EF4438 |
| Error | #EF4438 | | |

**User Preferences:** Can be exported as `<modelName>_UserPreferences.json` and imported into other models. Includes table layout, filters, panel width, etc.

### Report Settings

**General tab:**

| Option | Default | Notes |
|---|---|---|
| Report page layout | Grid & chart top/bottom view | Also: Grid & chart side by side |
| Fraction gauge for Tank Inventory | 1/8th | Options: 1/8th, 1/16th, m/cm/mm |

**Report Labels** (all customizable, defaults match standard report names):  
Unit Balance, Unit Summary, Tank Inventory, Tank Balance, Material Balance, Production Balance, Receipts & Shipments, Composition Tracking, Emissions, Envelope Trend, Plan vs Actual

**Custom Labels:** Volume, Mass, Gross Plant Margin, Total Operating Cost, Net Operating Margin

**Downloads tab** — defines groups for bulk report download:
1. Click **+** to add a row; assign a **Group** name (unique)
2. Select **Time Context**:

| Time Context | Scope |
|---|---|
| Current Case | Selected case only |
| Week to Date / Week | Current week cases up to selected case / all |
| Month to Date / Month | Current month cases up to/all |
| Quarter to Date / Quarter | Current quarter (Q1=Jan–Mar, etc.) up to/all |
| Year to Date / Year | Year cases up to/all |
| Custom | User-defined Start/End |

Only Owner or Case Author roles can edit Report Groups. Multiple files are zipped; single file is not zipped.

---

## Flowsheet

The AURA Model Flowsheet is the primary workspace. It displays all model objects (tanks, units, docks, pipelines, blend headers, manifolds) and their connections (streams and events).

**Access:** Navigation Panel → Flowsheet icon

**Object types shown:** Blend Headers · Events · Manifolds · Pipelines · Docks (Receiving, Production, Shipping, Consumption) · Streams · Tanks/Tank Groups · Process Units

> **Note:** Unit name labels are separate draggable objects from the units themselves. It is best practice to create all Units first, then add streams so generated names are meaningful.

### Flowsheet Application Bar

The Application Bar at the top of the flowsheet page shows model/case context controls. In **case context**, additional case-specific actions appear (e.g., Add Event icon, Import from AUM/Excel).

### Flowsheet Toolbar Icons (AURA-specific)

| Icon/Action | Notes |
|---|---|
| **Add Event** | Only available in case context (Analysis + Case selected). Click source object → destination object → fill Create Event dialog. Event name: max 80 chars, unique, cannot start with `*` or `!`, cannot contain `: [ ]` |
| **Add Stream** | Same naming constraints as event. Measured streams show an indicator icon on the flowsheet (configurable per template). |
| **Data Inspector** | Displays attribute/composition values beside objects on the flowsheet. Which attributes appear is configured in each Object Template (Data Inspector column). |
| **Object Status Color** | Colors flowsheet objects by reconciliation status (recommended default in case context). |
| **Object Material Color** | Colors flows and tanks by Material attribute (color defined in Model Data → Materials). |
| **Bookmarks** | Save/recall named flowsheet positions and zoom levels. Name must be unique. |
| **Search** | Filter by template type or stream name. Matching entity is highlighted red and centered. |

### Flowsheet Right-Side Operations Panel

| Icon | Opens |
|---|---|
| Components | Add Flowsheet Components panel — drag-and-drop objects onto the flowsheet |
| Object Details | Details panel for the selected object |
| Envelopes | Envelope list; click to view Details panel |
| Case Validation | Tabs: Data Acquisition summary · Expression Errors · Overrides · Solver Log |
| Trends | Trends Panel (saved trends thumbnails) |

**Case Validation panel best practice:** Pin it to the left side so that clicking Expression Error hyperlinks opens the object Details panel on the right.

### Flowsheet Context Menu (right-click on empty space, Base Model)

| Option | Description |
|---|---|
| Paste | Available if something is copied |
| Create Text Annotation | Free text label, can link to an object |
| Stub All Connections | Show streams as stubs (source+destination connected but not drawn fully) |
| Unstub All Connections | Restore full stream connections |
| Reset Node Labels | Reset all node label sizes |

### Flowsheet Icons Reference

| Icon | Meaning |
|---|---|
| Warning triangle | Configuration incomplete |
| Red exclamation | Config complete but expression error — see Object Details → Case Data tab |
| Info circle | Additional information available |
| Measured indicator | Stream has a measurement instrument attached; no icon = unmeasured |
| Number badge | Count of events between two objects (when >1) |

### Data Panel (Bottom of Flowsheet)

The Data Panel shows tabular case/model data. Left-side navigation selects the data type.

**Object groupings and key columns:**

| Type | Groups | Key Columns |
|---|---|---|
| **Flows** | Receipts, Shipments, Feeds & Products, Utilities, Intermediates, Events, KPI | Name/Abbrev, Description, Template, Stop, Source, Destination, Comment, Disabled, Measurement, Redundancy, Status + template attributes |
| **Storage** | Tanks, Pipelines, Task Groups | Name, Description, Template, Inventory Change Vol/Mass, Total Input/Output Vol/Mass, Expression Error + template attributes |
| **Non-Storage** | Process Units, Blend Headers, Manifolds | Name, Description, Template, Loss/Gain Vol/Mass, Total Input/Output Vol/Mass, Area, Comment + template attributes |
| **Boundary** | Docks | Name, Description, Reconciliation Imbalance V/M, Total Input/Output + template attributes |
| **Trends** | — | Historian tag trend viewer |

**In Case context:** cell values are editable as overrides (highlighted yellow). Tooltip shows Base Model vs override details.  
**In Base Model context:** Default Values (blue font) are editable.

**Data Panel table actions:**

| Action | How |
|---|---|
| Open Details Panel | Select row → click Table Tray icon |
| Locate on Flowsheet | Select row → click Table Tray → object highlighted on flowsheet |
| Find in Data Panel from Flowsheet | Right-click object on flowsheet → **Find in the Data Panel** |
| Delete object(s) | Base Model context: select row(s) → Table Tray → Delete |
| Delete event(s) | Case context: select row(s) → Table Tray → Delete |
| Clear System Adjustments | Case context post-reconciliation: select row(s) → Table Tray → Clear |
| Add Event | Case context: click **+** above Flows table |
| Export table data | Right-click → **Export** (Objects / Events / both) |
| Filter by status | Click filter icon above Data Panel |

### Flowsheet Zoom Controls

| Control | Description |
|---|---|
| Fit to screen | View entire model |
| Slider | Drag to zoom in/out (or Ctrl + scroll wheel) |
| % field | Click to type specific zoom % |
| Area zoom | Click icon, drag rectangle to zoom into a specific area |
| Export SVG | Save flowsheet diagram as SVG file |

---

## Overview Dashboard

The **Overview** page is a case-level health dashboard for yield accountants. It consolidates imported event counts, historian tag quality, solver input readiness, and reconciliation KPIs so users can validate a case without jumping across multiple pages.

**Access:** Navigation Panel -> **Overview** icon  
**Context:** Select the current case in the Application Bar, then choose a comparison mode:
- **Specific Case** -> compare against an earlier case you select
- **Previous Case** -> compare against the immediately prior case

**Header controls:**

| Control | Purpose |
|---|---|
| **Basis** | Switch Overview metrics between **Mass** and **Volume** |
| **Compare to** | Compare current case with **Specific Case** or **Previous Case** |
| **Select case** | Required when Compare to = Specific Case |
| **Arrow indicators** | Up = bad -> good, down = good -> bad, both = mixed changes |

> If no comparison case is available, AURA shows a warning icon next to **Compare to**. Only earlier cases can be selected as the reference.

### Input Data

The **Input Data** area checks whether expected external inputs arrived and whether they remain usable.

| Tile | What it tells you | Drill-down |
|---|---|---|
| **Events** | Number of events in the current case, plus delta vs reference case | Cross-check in Flowsheet Data Panel |
| **Calculation Quality** | Number of expression errors in the current case, plus delta vs reference case | **View Case Validation** opens the **Expression Errors** tab |
| **Tags** | Historian tag health, especially **Good Status** and **In Range** counts | **View Details** opens the **Tag Changes** panel |

**Tag interpretation:**
- **Good Status** tracks tags whose Quality Level is usable
- **In Range** tracks whether tag values remain inside configured min/max limits
- A tag with **Bad** quality is treated as **In Range** until quality becomes **Good** again

**Tag Changes panel** highlights status/range changes and lists:
- changed tag alias
- change type (**Status** or **Range**)
- previous/current value
- referenced objects that use the tag expression

### Solver Inputs

The **Solver Inputs** area checks whether the model is sending stable, valid measurements into reconciliation. It focuses on **Streams** and **Storages** because unstable measurement inputs often explain unexpected solver results.

| Area | Current metrics | Changed metrics |
|---|---|---|
| **Streams** | Active, Measurements, Good Measurements | Changes in **Disabled**, **Measurement**, and measured value validity |
| **Storages** | Active, Measurements, Good Measurements | Changes in **Disabled**, **Measurement**, and ending measurement validity |

**Validity rules:**
- A stream/storage must be **active** (`Disabled = False`) to matter here
- **Good Measurements** means the measured Mass/Volume value is greater than zero, finite, and free of expression errors
- Invalid measured values are solver input problems and should be investigated before trusting reconciliation output

**Solver Input Changes panel** opens from **View Details** and lists changed streams/storages by attribute, with previous vs current values.

### Solver Results

The **Solver Results** area summarizes whether reconciliation succeeded and whether the case behaves consistently versus history.

**Major blocks:**

| Block | Purpose | Notes |
|---|---|---|
| **Gross Errors** | Highlights high-adjustment streams and imbalanced objects | Includes streams plus storage/process/manifold objects |
| **Material Balance Statistics** | Shows **Total Penalty**, **Adjustment%**, **Imbalance%** | KPI source is the Flowsheet KPI Details panel |
| **Material Balance Statistics Chart** | Trends the KPI trio across recent cases | Case count is controlled by **Display Settings -> Cases in Sparklines** |
| **Production Balance Summary** | Summarizes Charge, Yield, Known/Unknown Loss-Gain totals and deltas | Uses the **Production Balance Report** as its source |

**Gross Error drill-down:**
- **Gross Error Changes panel / Streams tab** shows status or redundancy changes for streams
- **Gross Error Changes panel / Objects tab** shows reconciliation status changes for balance objects

**Material Balance Statistics guidance:**
- **Total Penalty** = objective function total
- **Adjustment%** = how much solver adjustment was applied to flows
- **Imbalance%** = residual imbalance after reconciliation; keeping it below about 10% is the target

---

## Sankey Diagrams

AURA provides two Sankey surfaces:
1. **Model Sankey Diagram** for material flow and reconciliation analysis
2. **Emission Sankey** for greenhouse gas emitter hierarchy and totals

### Model Sankey Diagram

The material-flow Sankey visualizes **case results** using the flowsheet topology. It does not create new data; it renders flow between objects using the selected case values.

**Access:** select **Analysis** + **Case** in the Application Bar, then click the **Sankey** icon in the AURA navigation panel.

**What is shown:**
- **Nodes**: process units, manifolds, blend headers, tanks, tank groups, pipelines, receiving/shipping/production/consumption docks
- **Connections**: streams and events
- **Flow thickness**: proportional to the selected flow attribute
- **Node height**: driven by total incoming/outgoing flow thickness

**Typical use cases:**
- review reconciled balances for the current case
- isolate dominant contributors by filtering/coloring
- inspect user/system adjustments and their effect on balancing
- adjust case data, then re-run reconciliation and refresh the view

### Sankey interactions

| Action | How |
|---|---|
| **Search for object** | Use the search box in the top-left corner of the Sankey; only currently visible objects are searchable |
| **Show tooltip** | Hover over a unit or flow; tooltip fields are configurable |
| **Open object details** | Select an object and open the right-side **Object Details** panel |
| **Reuse flowsheet data panel** | Bottom **Data Panel** is the same one used on the Flowsheet |

### Sankey Settings Panel

The right-side **Settings Panel** controls both visibility and interpretation of the diagram.

| Area | Main options |
|---|---|
| **Saved preference** | Save or recall named Sankey display presets |
| **Envelopes** | Filter Sankey display to a selected envelope |
| **Flow Attributes** | Choose the attribute whose value drives line thickness |
| **Range** | Filter results **Within** or **Outside** a min/max range |
| **Measurement** | Show only measured flows, only unmeasured flows, or both |
| **Redundancy** | Filter by `R`, `NR`, `O`, `NO`, `U` |
| **Templates** | Restrict display to selected object templates |
| **Colors / Units** | Color by **Template** or **Status** |
| **Colors / Flows** | Color by **Template**, **Status**, **Redundancy**, **Material**, or **Random** |
| **Show Legends** | Toggle the legend panel |
| **Tooltips** | Configure which attributes appear for flows and units |
| **Direction** | Render flows right, left, up, or down |

**Useful pattern:** save named Sankey presets for common reviews, such as reconciled mass, high system adjustments, or material-colored views.

### Emission Sankey

The **Emission Sankey** is separate from the normal material-flow Sankey. It visualizes greenhouse gas emission rollups using **Emitter** objects.

**Emitter model rules:**
- An **Emitter** is a special object for GHG calculations such as CO2
- Emitters do **not** participate in reconciliation
- Emitters do **not** appear on the normal flowsheet
- Each model includes a default **Total Emissions** emitter that cannot be deleted
- Additional emitters can be arranged in a parent/child hierarchy

**Access:** Navigation Panel -> **Emission Sankey** icon

### Emitter Data Panel and details

The **Emitter Data Panel** sits below the diagram and lists all emitters plus their attribute values. The first row shows total emissions across the model.

| Action | Notes |
|---|---|
| **Edit values** | Blue values are editable; case edits are highlighted as overrides |
| **Add emitter** | Base Model only; specify unique name, template, parent, and linked object |
| **Find emitter on Sankey** | Use row selector + Sankey highlight action |
| **Filter rows** | Filter panel by attribute criteria |

**Emitter naming rules:** max 80 characters, unique, cannot start with `*` or `!`, cannot contain `: [ ]`.

The **Emitter Details** panel includes:
- **Configuration tab** for inherited attributes, default values, UOM, and expression overrides
- **Case Data tab** for case-specific values, sparklines, override review, expression re-evaluation, and revert

### Emission Sankey settings

The Emission Sankey Settings panel is simpler than the material-flow Sankey:

| Area | Main options |
|---|---|
| **Saved preference** | Save or reload emitter-view presets |
| **Attributes + Range** | Filter emitters by attribute value range |
| **Templates** | Limit visible emitters by template |
| **Show Legends** | Toggle legend panel |
| **Tooltips** | Show or hide tooltip content |
| **Direction** | Render hierarchy right, left, up, or down |

## Cases and Case Calendar

### Adding Cases

Cases belong to an **Analysis** and inherit its settings (frequency, start time). Cases cannot have overlapping time spans.

**To add a case from the Flowsheet Application Bar:**
1. Click the Analysis drop-down and select an Analysis — the Case Calendar appears
2. Click **Add Case** (+)
3. Use the calendar display drop-down to switch between Day / Week / Month / Year views
4. Click **+** circle on calendar (Day/Week/Year) or Ctrl+click a date (Month view) to create a new case in the next available slot
5. Enter a unique **Case Name** and confirm the time range
6. Click **Create Case**

**To add a case from the Analysis page:**
- Click **+** above the Case Names list — a new row is added; rename from the Case Property Details panel
- New cases automatically use the default Case Frequency; start time is calculated from the last case's end time

> **Note:** By default, pending Base Model changes are checked in before new case creation. Modify this with the **Check-in pending Base Model changes when creating a new case** Display Setting.

### Case Calendar

The **Case Calendar** is opened from the flowsheet/sankey/Data Acquisition Application Bar by selecting an Analysis, then clicking the calendar icon.

| Calendar Area | Description |
|---|---|
| **1 — Navigation arrows** | `<` / `>` to navigate between cases in the Analysis |
| **2 — Case list** | Lists all cases with name, version, and lock status. Locked cases (🔒) cannot be modified. Click **Go to Case Summary** to open the Case View page. |
| **3 — Add case** | Click (or Ctrl+click in Month view) to open the New Case panel for the next available time slot |
| **4 — Display drop-down** | Change calendar view (Day/Week/Month/Year). Options depend on the Analysis case frequency. |
| **5 — Date ranges** | Solid blue = current case; light blue = other cases; dashed lines = proposed range for new case |
| **6 — Selected case details** | Shows case name and time range |
| **7 — Case options** | Lock/Unlock case; update case Base Model |
| **8 — New Case panel** | Enter case name; confirm time range; click **Create Case** |

---

## Case Analysis and Reconciliation

### Analysis Page

An **Analysis** defines the time model and solver behavior for a family of cases. Cases inherit the Analysis settings when they are created.

**Permissions:** only **Author** and **Owner** roles can add or delete Analyses and cases.

**Access:**
- Navigation Panel → **Cases & Analysis**
- Click **Case Analysis** to create a new Analysis
- Or click an existing Analysis name to open it

**Delete rule:** an Analysis can be deleted only when all of its cases are unlocked. Deleting the Analysis also deletes all associated cases.

### Analysis General Tab

Once cases exist under an Analysis, core timing settings are effectively fixed for that Analysis.

#### Analysis settings

| Setting | Notes |
|---|---|
| **Name** | Unique, up to 80 chars |
| **Description** | Up to 150 chars |
| **Support flexible case frequency** | If off, case duration is fixed by Analysis frequency. If on, cases can use arbitrary start/end times in the calendar. |
| **Case Frequency** | Drives default case duration. Cannot be changed once cases exist. |
| **Case Start Time** | Seeds case generation. Cannot be changed once cases exist. Cases can still be created before this time. |
| **Case Naming Convention** | Default: `[CASESTARTTIME]`. Supports keywords such as `ANALYSISMETHOD`, `CASESTARTTIME`, `CASEENDTIME`, `SEQ`, `SEQUENCE`, `CET`, `CST`. |
| **Reconciliation Basis** | Mass or Volume |
| **Automatically retrieve process data upon case creation** | Pulls historian data immediately after case creation |
| **Use current solver options for all analysis cases** | Uses the latest displayed solver options instead of the case-linked base model options |
| **Always run redundancy after reconciliation** | If Composition Tracking is also enabled, execution order is: Reconciliation → Composition Tracking → Redundancy |

#### Simultaneous Balance (SMV) options

SMV reconciles **mass + volume + density** together instead of treating mass or volume alone as the primary solution space.

| Option | Default | Notes |
|---|---|---|
| **Simultaneous** | Selected | Enables simultaneous mass/volume balancing and density adjustment |
| **Non-linear** | Not selected | Linear is faster; non-linear is more accurate for more complex models |
| **Allow Adjustment to Tank Density** | Not selected | If not selected, tank density system adjustment stays at 0 |
| **Maximum Density (SG)** | 2 | Upper bound for reconciled flow density |
| **Maximum Adjustment/Tolerance Ratio for Density** | User-defined | Max allowed density adjustment relative to tolerance |
| **Reference Density** | User-defined | Keeps mass and volume scales aligned across UOMs |

> **Important:** to use SMV well, provide density values for all flows. Density must be in **Specific Gravity** UOM.

#### Solver options

| Setting | Default | Notes |
|---|---|---|
| **Maximum Flow Mass** | 10000000000 | Upper bound for reconciled flow mass |
| **Maximum Flow Volume** | 10000000000 | Upper bound for reconciled flow volume |
| **Use Unit tolerance as maximum imbalance limit** | Not selected | If selected, each object's tolerance becomes its max imbalance limit |
| **Maximum Imbalance Volume / Mass** | User-defined | Used when Unit tolerance is not enforced as the limit |
| **Maximum Adjustment/Tolerance Ratio** | 0 | 0 means no max |
| **Maximum Adjustment/Measured Ratio** | 0 | 0 means no max |
| **Apply Boundary balance equation** | Not selected | Adds plant-wide boundary term: Model Input − Model Output + Storage Beginning − Storage Ending |
| **Solver base UOMs** | From first stream template | Uses configured Meas_Mass / Meas_Vol / Density labels and UOMs |

#### Advanced solver tuning

**Reconciliation strategy options** include:
- Gross Error Detection — Units & Flows (Linear) **recommended**
- Gross Error Detection — Units & Flows (Non-Linear)
- Gross Error Detection — Units (Non-Linear)
- Random Error Detection

**Scale factors** adjust weighting inside the objective function. Aspen explicitly notes these are **not usually meant to be changed**.

| Factor | Default |
|---|---|
| Global | 1 |
| Flow | 1 |
| Unit | 1 |
| Density | 1 |
| Plant | 10 |
| Unit Tolerance | 0.01 |
| Unmeasured flows | 0.00001 |

**Gross Error Penalty defaults:**

| Target | Default |
|---|---|
| Flow | 5 |
| Storage | 6 |
| Process Unit | 8 |
| Manifold / Blend Header | 10 |
| Flow Density | 5 |
| Tank Density | 5 |

**Gross Error Threshold defaults:**

| Target | Default |
|---|---|
| Flow | 4 |
| Storage | 4 |
| Process Unit | 4 |
| Manifold / Blend Header | 4 |
| Density | 4 |

#### Nonlinear / LP / MIP options

| Setting | Default | Notes |
|---|---|---|
| **Solver Iterations — max major iterations** | 30 | Range 5–60 |
| **Max iterations before MIP invoked** | 5 | Delay MIP evaluation to save solve time |
| **Max MIP iterations after invoked** | 0 | Range 0–5 |
| **Residual convergence tolerance** | 0.00001 | Nonlinear residual stop criterion |
| **Objective convergence tolerance** | 0.001 | Objective improvement stop criterion |
| **Solver Timeout (s)** | 120 | Hard stop |
| **Enable pre-solve** | Selected | Can be disabled if scaling issues create odd results |
| **Enable parallel MIP** | Selected | Enables parallel MIP execution |

### Analysis Composition Tracking Tab

Composition Tracking simulates the composition of tanks, pipelines, streams, and events over time.

| Setting | Default | Notes |
|---|---|---|
| **Composition Simulation Basis** | Mass | Controls the basis used for simulation |
| **Drop less than (%)** | 1 | Components below this % can be dropped during simulation |
| **Always run Composition Tracking after reconciliation** | Disabled | If enabled, simulation runs automatically after reconciliation |
| **Normalize all compositions before calculating ending composition** | Enabled | Normalizes all component fractions back to 100% before ending composition is calculated |

When Composition Tracking runs automatically, it:
1. Uses opening tank/pipeline composition
2. Includes stream and event composition within the case time range
3. Uses measured or reconciled data depending on the workflow
4. Computes ending composition using the configured mixing behavior
5. Computes a **Composite Density** used for mass/volume conversion

---

### Case Summary Page

The **Case Summary** page lists all cases under an Analysis and manages their relationship to the Base Model version used for reconciliation.

**Access:** Navigation Panel → `<AnalysisName>` → **Cases**

### Base Model and case versioning

A case is tightly linked to the **Base Model** version it was reconciled with. That linkage preserves both auditability and rerun consistency.

Supported workflows:
- Reconcile an old case again using the **same** Base Model and same inputs → expect the same result
- Reconcile an old case with **changed inputs** but same Base Model → results can differ
- Update an old case to the **latest Base Model** → same inputs, different model configuration, results can differ
- Load an old case and view the exact model topology, expressions, defaults, and settings associated with that case version

Examples of Base Model changes that affect cases:
- topology changes (objects/streams/tank groups)
- expression changes
- default value changes
- Analysis / solver setting changes
- template, property, material, and UOM changes

### Case table

Only cases inside the selected case range are shown by default.

| Column | Notes |
|---|---|
| **Case Name** | Unique, up to 64 chars |
| **Description** | Up to 255 chars |
| **Start Time / End Time** | Time window of the case |
| **Status** | Incomplete = never reconciled; Complete = reconciled at least once |
| **Reconciliation Basis** | Mass or Volume used during reconciliation |
| **Created / Modified** | Audit trail |
| **Base Model** | Base Model version associated with the case |
| **Locked** | Locked cases cannot be modified; only Owner can unlock |

### Case table actions

| Action | Notes |
|---|---|
| **Add case** | Uses the Analysis naming convention and timing rules |
| **Export Case table** | Downloads `Cases.xls` |
| **Open flowsheet** | Opens the selected case in flowsheet context |
| **Update case(s) to another Base Model** | Optionally refresh attribute defaults from the new Base Model version |
| **Get / Publish Process Data** | Historian integration from the table tray |
| **Import from Excel / AUM** | Available for a single selected case |
| **Reconcile / Calculate Redundancy / Simulate Composition** | Default table tray action is Reconcile |
| **Evaluate all expressions** | Re-evaluates all expressions for the selected case |
| **Export Solver Log / Objects Data / Events** | Case-specific exports |
| **Lock / Unlock case** | Prevents or re-enables edits |
| **Clear User Adjustments** | Removes user adjustments using min/max criteria |
| **Clear System Adjustments** | Removes system adjustments using min/max criteria |
| **Clear System Adjustments Density** | Clears density-specific system adjustments |
| **Delete case** | Deletes selected case(s) |

### Case Property Details Panel

From the Case Summary page, selecting a case opens the right-side details panel.

| Action | Notes |
|---|---|
| **Edit Name / Description** | Name must remain unique and ≤ 64 chars |
| **Lock / Unlock** | Only Owner can unlock a locked case |
| **Import from Excel** | Imports object data and events; not allowed for locked cases |
| **Import from AUM** | Imports AUM events and tank data |
| **Export Solver Logs** | Last reconciliation log |
| **Export Objects Data / Events** | Can be reused as import templates |
| **Retrieve Process Data** | Pulls historian data into the case |

---

### Reconciliation

Reconciliation uses measured plant data plus optional user adjustments to compute **reconciled values** and **system adjustments** that reduce imbalance on objects.

Core concepts:
- **Gross Errors** = persistent or configuration-related errors
- **Random Errors** = smaller instrument noise / uncertainty
- **Reconciled value** = Measured value + User Adjustment + System Adjustment

**Run reconciliation:**
1. Select an Analysis and Case
2. Click **Reconcile** on the Application Bar
3. Wait for the completion toast
4. Review colors, logs, Data Panel filters, Sankey, Work Areas, and reports

### Reconciliation result surfaces

| Surface | What to inspect |
|---|---|
| **Flowsheet colors** | Object / flow status after reconciliation |
| **Object Details panel** | Balance and Case Data tabs |
| **Data Panel** | High adjustments, imbalanced units, status filters |
| **Data Inspector / Tooltips** | Quick per-object diagnostics |
| **Sankey** | System adjustment patterns across the model |
| **Work Areas / Reports** | Single-case and multi-case monitoring |
| **Solver Log** | Errors, warnings, objective values, adjustments |

**Solver log download points:**
- completion toast → **Download Solver log**
- Flowsheet Application Bar → **View Solver Logs**
- Case Summary page → export from table tray or case details panel

### Redundancy

Redundancy is primarily a **model validation** aid. It analyzes whether measured and unmeasured flows are sufficiently determined by balance equations.

**Recommended practice:** run Redundancy before relying on reconciliation results.

**Minimum prerequisites:**
- at least 2 measured flows
- at least 2 unmeasured flows
- at least 2 units
- flows cannot all be measured or all unmeasured

Aspen guidance:
- reconciliation is more meaningful when model redundancy is at least **30%**
- redundancy status itself does **not** change solver math
- non-observable flows should be resolved where possible

**Run redundancy manually:** Application Bar → **Redundancy**  
**Run automatically:** enable **Always run redundancy after reconciliation** on the Analysis page.

### Redundancy states

| State | Flow type | Meaning |
|---|---|---|
| **Redundant (R)** | Measured | Still solvable if this measurement is removed |
| **Non-redundant (NR)** | Measured | Removing it makes the value unsolved |
| **Observable (O)** | Unmeasured | Can be computed from the rest of the model |
| **Non-observable (NO)** | Unmeasured | Cannot be determined uniquely |
| **Undetermined / None (U)** | Disabled / unused | Not participating meaningfully |

### KPI formulas commonly used with reconciliation / redundancy

Available expression patterns include:
- `RedundancyPercent("Mass")`
- `ImbalancePercent("Mass")`
- `AdjustmentPercent("Mass")`
- corresponding `("Volume")` variants

These are intended for KPI objects, dashboards, and trend monitoring.

---

### Case Overrides

The **Overrides** page lists case-level overrides and the corresponding evaluated expression values for attributes that have expressions.

Overrides can be created from:
- Flowsheet Data Panel
- Object Details → Balance / Case Data tabs
- Overrides page itself
- Expression Error Log

**Access:**
- Navigation Panel → Cases & Analysis → expand an Analysis → **Overrides**
- Or Object Details → Case Data → **Go to Overrides**

**Case range selection:** use the Application Bar calendar; Shift can multi-select cases; click **Set Range**.

| Action | Notes |
|---|---|
| **Review override list** | Shows overridden case attributes and expression-evaluated values |
| **Revert override(s)** | Select rows → table tray → revert to original value |
| **Export overrides** | Downloads `<modelName>_<analysisName>_Overrides_<caseName>.xlsx` |

---

### Expression Error Log

The **Expression Error Log** tracks **evaluation** failures in case context. It is about missing/invalid referenced values, not expression syntax authoring mistakes.

**When errors are detected:**
- when a case is created
- when data is updated or acquired through Data Acquisition
- when expressions are evaluated explicitly

**Access:**
- Navigation Panel → Cases & Analysis → expand an Analysis → **Expression Errors**
- Or Flowsheet → Case Validation panel → **Expression Errors**

| Action | Notes |
|---|---|
| **Compare Base Model / Case / Expression / Override values** | Hover over Value field |
| **Revert overwritten values** | Select row → table tray |
| **Edit Value** | Double-click the Value cell; updates the linked Case Data tab and Overrides page |
| **Export log** | Downloads `ExpressionErrors.xlsx` |

Common error categories include:
- circular references
- missing strapping table
- missing material or invalid material property
- null property defaults
- bad tag aliases or missing tag data
- missing referenced unit / stream
- invalid VCF type or out-of-range density / pressure / temperature

---

### Composition Tracking scenarios

Composition Tracking determines stream/event and tank composition based on source points, incoming/outgoing movements, and `Comp_Track_Enabled`.

**Key rule:** for flows from balance points (tank, manifold, process unit, etc.), both the **source balance point** and the **stream/event** must have `Comp_Track_Enabled = True` for the stream/event composition to be simulated.

### Tank ending composition rules

| Scenario | Result used for tank ending composition |
|---|---|
| **Receipt stream → tank** with no manual composition | Uses the incoming stream's Material attribute |
| **Receipt stream → tank** with manual composition | Uses the manually set stream composition |
| **Source balance point=True, stream=True** | Uses the **simulated** stream composition |
| **Source balance point=True, stream=False** | Uses the stream Material attribute |
| **Source balance point=False, stream=True** | Uses the tank beginning composition |
| **Source balance point=False, stream=False** | Uses the tank beginning composition |

### Manual composition behavior

When both source balance point and stream are composition-enabled:
- clicking **Simulate Composition** generates a simulated composition
- that simulated result **overwrites any manually set stream composition**

When the stream is **not** composition-enabled:
- manually entered stream composition can persist
- tank ending composition can use that manual composition if the scenario allows it

### Opposite-UOM calculation

If **Composition Simulation Basis = Mass**, AURA first solves composition mass values and then derives volume composition from **material density** stored in **Model Data → Materials**.

General conversion sequence:
1. solve mass per component
2. compute mass %
3. read material density
4. convert mass → volume using `Volume = Mass / Density`
5. compute volume %
6. compute total density as the volume-weighted average

If the simulation basis is **Mass**, manual edits to **Volume %** are overwritten by calculated values.  
If the basis is **Volume**, manual edits to **Mass %** are overwritten.

---

### Yield accountant operating workflow

The Material Balance Solver guide describes a practical daily workflow for operating AURA after the model is already configured:

1. Create case
2. Retrieve historian data
3. Import object data / events (Excel or AUM) as needed
4. Validate data availability and expected overrides in the Case Validation panel
5. Resolve expression errors or missing inputs
6. Reconcile
7. Review solver warnings, red objects/flows, Sankey adjustments, and Data Panel filters
8. Validate dashboards, reports, and work areas
9. Record case description / notes
10. Lock the case when ready

Typical follow-up focus areas:
- **flow issues**: suspicious meter readings, observability gaps, bad historian values
- **tank issues**: missing ending values, missing events, density/temperature timing effects
- **process unit issues**: imbalance caused by connected unit problems or propagated adjustments

---

## Events

AURA Events are created within a **case context** (not on the Base Model). An event has a defined Start and Stop time within the case time frame, a Source, and a Destination object.

**Required fields:** Name · Start time · Stop time · Source · Destination · Template

**To create an event from the Flowsheet:**
1. Select an Analysis and Case from the Application Bar
2. Click the Add Event icon on the toolbar
3. Click the source object → click the destination object (same as adding a stream)
4. In the **Create an Event** dialog: enter Name, confirm Source/Destination, set Start/Stop time, select Event Template, adjust Attribute values, add Composition materials if needed
5. Click **Create**

> The event name must be unique, max 80 chars, cannot start with `*` or `!`, cannot contain `: [ ]`.

**To create an event from the Data Panel:**  
Data Panel → **Flows** tab → click **+** above the table.

**Importing Events from Excel:**  
Via Application Bar → Data Acquisition icon → **Import Events from Excel** (or from Case Details panel → Import Events).

Excel format rules:
- Worksheets starting with **Events** are processed; others ignored
- Required columns (left of Template): Import (Y/Yes/N/No), Name, Abbreviation, Description, Update Name, Source, Destination, Start Time, Stop Time, **Template**
- Attribute columns appear to the right of Template
- Composition columns: `MaterialName:VolumeComposition`, `MaterialName:MassComposition`
- Tip: Arrange by event type using sheet names like `Events_Receipts`, `Events_Shipment`, `Events_Internal`

---

## Envelopes

Envelopes define a named subset of flowsheet units for sub-model analysis and balance reporting. Defined on the **Base Model**; analyzed in case context.

> **Note:** You cannot add flowsheet objects while in envelope mode.

### Envelope Actions

| Action | Steps |
|---|---|
| **Access/View** | Operations Panel → Envelope icon → click envelope name |
| **Create** | Base Model context → Operations Panel → Envelope icon → click **+** → select initial object → click **Create** → add members |
| **Copy** | Envelope Details panel → copy icon next to the envelope → rename as desired |
| **Create Temporary** | Right-click flowsheet object → **Create an Envelope** (not saved; for quick analysis only) |
| **Delete** | Operations Panel → Envelope list → delete icon → confirm (Base Model context required) |

**Envelope naming rules:** max 80 chars, unique, cannot start with `*` or `!`, cannot contain `: [ ]`; Abbreviation: max 8 chars, must start with a letter.

### Envelope Details Panel

**Configuration tab:**

| Area | Description |
|---|---|
| 1 | Search and add objects to the envelope |
| 2 | Filter Add Members drop-down by object template |
| 3 | Members table (object name + template); hover to remove members. Initial object cannot be removed. |
| 4 | Total member count |

**Balance tab** (select Analysis + Case from Application Bar):

| Section | Shows |
|---|---|
| **Imbalance** | Inventory Change = Ending − Beginning; Tolerance (Mass & Volume); Imbalance Ratio = Imbalance/Tolerance; Imbalance % = Imbalance/Total Input |
| **Input** | Streams feeding objects in the envelope (source information) |
| **Output** | Streams exiting the envelope (destination information) |

Display columns toggle: Volume / Mass / All (default).  
Click to include/exclude individual flows from the Total balance calculation.

---

## Data Trends

Historian tag trends are accessible in AURA for troubleshooting and validating event/tank data against raw process data.

**Trend access locations:**
- **Data Panel** → Trends View tab (at the bottom of Flowsheet/Sankey pages)
- **Data Acquisition page** → Trends view at page bottom

**Prerequisites for Trends Panel:**
1. Tags must be created on the Data Acquisition page
2. At least one attribute per selected object must have a `TagData` expression configured

### Trends Panel

The Trends Panel is accessed from the right-side Operations Panel (Trends icon) on the Flowsheet or Sankey page. It shows **saved trend thumbnails** for the current Base Model.

**To add a trend:**
1. Click the **Choose Objects** search field → select flowsheet objects
2. Click **Save** — a thumbnail appears in Saved Trends, auto-named `Trend<nnn>`
3. Select a Case to see trended data on the thumbnail

**Saved Trends actions:**

| Action | How |
|---|---|
| Display as main trend | Click thumbnail → expands below flowsheet |
| Create new trend from existing | Click thumbnail → modify object selection → click Add → new trend is created |
| Delete saved trend | Hover over thumbnail → click delete icon (or right-click → Delete) |

### Trend Display Areas

**Main Trend (Data Panel):**
- **Enter Trends mode:** Click **Trends** on the Data Panel left navigation
- Click and drag on the flowsheet to select objects → trend appears; click Save to keep it

**Data Object Indicators** appear above the trend (named objects). Click the dropdown next to each to:

| Action | Description |
|---|---|
| Hide/Show trend formatting | Toggle Tags and Tag Names visibility |
| Remove Object from trend | Permanently removes from this trend |
| Change trend line color | Opens Color Picker |

**Trend Settings dialog** (click Settings icon above trend):
- Define min/max Y-axis bounds per tag
- Limit violations are highlighted on the curve
- Settings are tag-specific and persist across all trends referencing that tag

---

## Importing Object Data and Events from Excel (Case Context)

This import updates **attribute or composition data** for existing objects within a case. It does not create new model objects (use the Base Model import for that).

> System-calculated attributes (Redundancy, Status, System_Adj_Density) cannot be imported.

**To import from Excel:**
1. Application Bar → Data Acquisition icon dropdown → **Import from Excel**
2. Browse and select the Excel file
3. Click **Import** — a toast and downloadable log appear; overridden cells are highlighted yellow

**ObjectsData worksheet format:**
- Sheet name must start with **ObjectsData** (e.g., `ObjectsData_Streams`, `ObjectsData_Tanks`)
- Required first columns: **Import** (Y/N), **Name** (object name)
- Optional: **CaseStartTime**, **CaseEndTime** (for multi-case import)
- Attribute columns: `Density`, `Meas_Vol`, `Meas_Mass`, `Material` (streams); `Meas_Vol_Begin/End`, `Meas_Mass_Begin/End` (storage); `Vol_Gain_Factor` (process units)
- Composition columns: `MaterialName:VolumeComposition`, `MaterialName:MassComposition` (streams); `MaterialName:VolumeCompositionBeginning/Ending` (storage)
  - Set `Comp_Track_Enabled` to False to use manually entered ending compositions instead of simulation-calculated values

**Events worksheet format:**
- Sheet name must start with **Events** (e.g., `Events_Receipts`, `Events_Shipment`)
- Required first columns: **Import** (Y/N), **Name**, Abbreviation, Description, Update Name, Source, Destination, Start Time, Stop Time, **Template**
- If an event with the same name exists: data is updated. If locked case: row is skipped and logged.
- Start/Stop Time can span multiple cases — event is created in each applicable case

---

## Importing Events and Tank Data from AUM

Use **Import from AUM** to import AUM Movements as AURA Events and/or import AUM tank data as AURA overrides.

**Access:** Flowsheet Application Bar → select a case → Data Acquisition icon → **Import from AUM**

**Import options:** Events · Tanks · Both Events and Tanks

### How Events are Mapped from AUM

AUM movements may span multiple AURA cases. The system splits them automatically at case boundaries:

- **Event Start Time** = max(Movement Start, Case Start)
- **Event Stop Time** = min(Movement End, Case End)
- **Meas_Vol** = Accrued_Volume (end cutoff − start cutoff)
- **Meas_Mass** = Accrued_Mass (end cutoff − start cutoff)
- **Density, Tol_Percent, Temperature** = end cutoff value
- If a movement name already exists in the case: the existing event is updated
- System-calculated attributes (Redundancy, Status, System_Adj_Density) cannot be imported

**Edge cases:**
- Movement with single cutoff in the time window: no event created (cannot calculate accrued values)
- Movement with no cutoffs in the time window: no event created
- Movement start cutoff at Case End Time (or end cutoff at Case Start Time): not imported

### How Tank Data is Mapped from AUM

- System selects the AUM cutoff whose Event Time is closest to the Case End Time
- Differences between AUM and AURA tank data are highlighted in yellow in the Review dialog
- Tank data is imported as **overrides** — yellow highlighting in AURA; tooltip shows cutoff name used

### Workflow

1. Select desired case on Application Bar
2. Click Data Acquisition icon → **Import from AUM**
3. Select **AUM Model** from drop-down; select **Import** type (Events / Tanks / Both)
4. Optional: select **Review and select which data to import** → click **Submit** to open Review dialog
   - In Review dialog: differences shown in yellow; select which entries to import → click **Submit**
5. If not reviewing: click **Submit** to import all identified data directly
6. Toast message appears; click **View Logs** for details; click **Download Logs** to save

> Imported data appears as overrides (yellow) in the Data Panel. Filter by Template column to identify new/updated entries.

---

## Version History Details

Version History Details provides a summary of differences between two selected base model versions, including pending (not yet checked-in) changes.

**Access:** Left-hand Navigation Panel → Model Data icon → **Version History Details**

Base model changes tracked include: Object updates, Properties, Materials, Data Acquisition, Data Publish, Strapping Tables, Work Areas, Analysis Methods, Solver options, adding/removing flowsheet units, Object Template changes, and more.

### Table Columns

| Column | Description |
|---|---|
| **Checked-in Version** | Version where the change occurred. Pending changes show as `v2.0*(pending)`. |
| **Entity Type** | Category of changed item: Object, Template, Property, Material, Strapping Table, Work Area, Model, etc. |
| **Entity Name** | Specific item affected (tank name, work area name, material name, etc.) |
| **Attribute** | Attribute changed (may be blank, e.g., when adding a tank) |
| **Field Name** | Field involved in the change (may be blank) |
| **Change Type** | Added, Modified, or Deleted |
| **Previous Value** | Prior value for Modified and Deleted changes |
| **Updated Value** | New value for Added or Modified changes |

### Available Actions

| Action | Description |
|---|---|
| **Compare versions** | Click the edit icon → select **From** and **To** versions. Shows all changes between those versions. Use "Browse all" to see per-version summary. |
| **Export** | Exports current grid to `<modelName>_Version_History.xlsx` in Downloads folder. Hidden columns excluded. |
| **Group by column** | If "Column drop zone" is enabled in Display Settings, drag column headers to the drop zone to group data. |
| **Clear filters** | Available when filters are applied. |

---

## Reports

AURA reports are opened from the left-hand **Model Navigation Panel** using the **Reports** icon. Reports run against the currently selected Analysis/case context, and most pages allow either a single case or a selected date range / case range from the Application Bar calendar.

### Shared report behaviors

- Use the report search box to jump directly to a report by name.
- Most reports support **pivot/group by**, column reordering, collapse/expand of grouped sections, charting from table data, and **Clear Filters**.
- Report layout, labels, and some display rules come from **Model Settings → Report Settings**.
- Exports are typically available as **Grid Excel**, **Excel**, and **PDF**.
- Several reports expose a chart at the bottom of the page that reflects the current table filters and grouping.

### Bulk report download dialog

Use the **Download Reports** dialog from the Application Bar to bundle one or more report exports for the current case context.

**Workflow:**
1. Add one or more rows to the downloads table.
2. Choose or create a **Group** name; only **Owner** and **Case Author** can edit report groups.
3. Select **Report** and **Time Context**.
4. For **Custom** time context, enter explicit **Start** and **End** timestamps.
5. Select individual reports or a saved group, enter the output **File Name**, then click **Download**.
6. Click **Save Changes** if you want the current table to become the default download setup in **Report Settings → Downloads**.

| Time Context | Scope |
|---|---|
| **Current Case** | Current selected case only |
| **Week to Date / Month to Date / Quarter to Date / Year to Date** | Period up to the current selected case |
| **Week / Month / Quarter / Year** | Full selected calendar period |
| **Custom** | Cases whose start time falls within a custom start/end range |

**Download naming rules:**
- Single report: `<reportType>_<modelName>.xlsx`
- Multiple reports or a report group: `<fileName>_Report.zip`
- Files inside ZIP: `<reportType>_<modelName>.xlsx`

### Report catalog

| Report | Best for | Main controls / grouping | Notable data surfaces |
|---|---|---|---|
| **Composition Tracking** | Tracking storage and flow composition changes across selected cases | **Storage** vs **Flow** tabs; group by storage/flow | Storage shows first-case beginning and last-case ending composition; Flow shows stream/event composition details with **Source** and **Destination**; includes **CompTrack Enabled** and **Density** |
| **Emissions** | Reviewing emitter totals and hierarchy | **Hierarchy** vs **List** view | Tree map of parent/child emitters; total emissions shown at top; columns are emitter attributes |
| **Envelope Trend** | Daily trend review for one object or envelope | Filter by **Object/Envelope** and **Solution Status** | Per-case rows; measured/reconciled/system/user adjustment sections; optional event-column consolidation by **Source_Destination** |
| **Material Balance** | Material-level inventory, reclassification, and transfer balancing | **Mass** vs **Volume** tabs | Inventory beginning/ending/balanced; reclassification from/to; input and output totals by storage, units, docks, and other |
| **Plan vs Actual** | Comparing AUP planning targets with AURA actuals | **Mass/Volume**, **Material**, **Measure** = Cumulative / Daily Value / Cumulative Average | Planned vs actual trend lines; columns for **Plan**, **Actual**, **Measured**, **Plan Deviation**, **Plan Deviation %**, totals and averages |
| **Production Balance** | Material production accounting over one case or a range | Single-case vs multi-case behavior | Inventory, receipts, produced, shipped, consumed, reclass, production %, price, and cost |
| **Receipts and Shipments** | Material movement audit by receipt/production/shipment/consumption | Rows grouped by movement type | Material, stream/event, source/destination, and measured / user-adjusted / system-adjusted / reconciled mass and volume |
| **Tank Balance** | Tank-level inventory balance by tank or material | Group by **Material** or **Tank**; **Mass** vs **Volume** tabs | Inventory beginning/ending/change/balance plus input/output totals by storage, units, and docks |
| **Tank Inventory** | Tank inventory snapshot and capacity review | Group by **Material** | Net/gross/gauge/fraction gauge/free water/gauge water, mass net/gross/net change, tank properties, and available capacity |
| **Unit Balance** | Balancing a selected process unit, manifold, blend header, or envelope | Filter by **Unit/Envelope** and **Solution Status** | Input/output rows, mass/volume adjustments, reconciled values, and total loss/gain |
| **Unit Summary** | Cross-unit summary for process units, manifolds, and blend headers | Aggregation and pivot-friendly summary layout | Status, template, **Vol_Gain_Factor**, total input/output, reconciled loss/gain, and percentage summaries |

### Key formulas and report-specific caveats

| Report | Important logic |
|---|---|
| **Material Balance** | `Balanced = InventoryEnding - TransfersFromTotal + TransfersToTotal - InventoryBeginning - (ReclassificationFrom - ReclassificationTo)` |
| **Plan vs Actual** | `Actual = Measured + User Adjustment + System Adjustment`; `Plan Deviation = Actual - Plan`; `Plan Deviation % = (Actual - Plan) / Plan * 100%` |
| **Production Balance** | `Production = Inventory Beginning + Receipts + Produced - Inventory Ending - Shipments - Consumed`; `% Production = Production / Sum of Production for Charges * 100` |
| **Unit Balance** | `Total Loss/Gain = Total Output - Total Input`; in case-range mode, **Density / Temperature / Pressure** columns are not shown |
| **Tank Balance** | `Balance = InventoryEnding - TransfersFromTotal + TransfersToTotal - InventoryBeginning` |
| **Envelope Trend** | Event columns can be merged by **Source_Destination** to avoid one-column-per-event-name clutter when names change daily |
| **Plan vs Actual** | Requires valid Site Catalog linking and published AUP planning targets; values marked with `*` remain in AUP units and are excluded from subtotals |

### Report data patterns worth remembering

- **Composition Tracking:** Storage composition is bookended by first-case beginning and last-case ending values; stream flows aggregate across selected cases, but events are shown per selected case rather than fully aggregated.
- **Emissions:** Best used when the emitter hierarchy matters; list view is better for sorting, hierarchy view is better for plant structure.
- **Envelope Trend / Unit Balance:** Both are good troubleshooting reports because they combine table details with charted imbalance / reconciled behavior over time.
- **Plan vs Actual:** Supports **n:1** and **1:n** AURA↔AUP material linking through Site Catalog and AURA material configuration.
- **Tank Inventory:** Fraction gauge display depends on **Report Settings**.
- **Unit Summary:** **Vol_Gain_Factor** behaves differently by object type: process units use attribute values, manifolds / blend headers default to `1`, and envelopes multiply VGF across contained units.

---

## Data Hub

Data Hub imports third-party process data into AURA as external **JSON** documents. It is intended for controlled import of object data and events into existing models and cases.

> **Role requirement:** the model user must have the **Creator** role to use Data Hub.

### What Data Hub accepts

| Document type | Typical payload |
|---|---|
| **AuraObjects** | Existing object name, attribute name/value pairs, composition type/value data |
| **AuraEvents** | Event name, start/stop time, source, destination, attribute name/value pairs, composition type/value data |

Notes:
- Sample JSON documents are provided under `...\Users\Public\Documents\AspenTech\Aspen Unified\ASPEN_UNIFIED_API_EXAMPLES`
- Swagger APIs can be used to format and send data into AURA Data Hub
- Optional document **Comment** text can be stored in the JSON header

### Notifications and entry points

- On the Home page, a model with pending import data shows a **data available** indicator.
- In the left navigation, the **Data Hub** icon shows a **red dot** when there are unapplied documents.
- When external data arrives or changes, AURA raises a **green toast** with a link to open or refresh Data Hub.

### Data Hub summary page

The summary page has a top-right status area plus a table of all posted documents, including already applied ones.

**Status area:**
- **Pending** — documents not yet applied/integrated
- **Applied** — documents already applied at least once

**Table columns:**

| Column | Meaning |
|---|---|
| **Name** | Imported document/file name |
| **Type** | `AuraObjects` or `AuraEvents` |
| **Status** | `Pending` or `Applied` |
| **Date Imported** | When the document was posted |
| **Date Applied** | When the document was last applied |
| **Applied By** | User who applied the document |
| **Comment** | Document header comment |

**Available actions:**

| Action | How it works |
|---|---|
| **Apply Data to Cases** | Select one or more documents, click **Next**, review on the Apply Data page, then apply |
| **Export summary table** | Exports visible rows to `DataHub.xlsx` in Downloads |
| **Delete documents** | Remove selected rows from the tray or use the row delete icon |
| **Download selected data** | Downloads the selected imported documents |

### Apply Data workflow

The Apply Data page is a four-step workflow:

1. **Validate Data** — validate imported data and optionally remove target cases.
2. **Select Create +** — add analysis/case targets for object data; event imports do not require manual case creation because analysis/cases are added automatically.
3. **Review** — inspect imported values by Analysis and Case tabs, moving case by case as needed.
4. **Apply** — review the summary and click **Apply All Data**; success raises a green toast, and warnings appear through the **Warnings** button.

### Apply Data review rules

- Changed values are highlighted **yellow**
- Values shown in **blue** are editable before apply
- Each case gets its own row in the review table
- Hovering editable cells shows both the external file value and current case value

**Event data columns typically include:**
- Analysis and Case
- Template
- Source and Destination
- Start and Stop times
- Attribute name/value pairs
- Ending composition volume % / mass %

**External event timing rules:**
- Start and End must fall within the selected case range
- Missing **End** defaults to case end time
- Missing **Start** with present End defaults to case start time
- Only fields present in the external file appear in the review table

**Object data columns typically include:**
- Analysis and Case
- Optional template
- Attribute name/value pairs

### Warnings and logs

- **Warnings** stays hidden unless validation or apply detects warnings/errors
- Warning/error details can be exported as `Warnings.txt`
- After apply, Data Hub updates the document **Status**, **Date Applied**, and **Applied By**

---

## Migrating from AORA to AURA

The **AORA to AURA Migration Utility** creates a new AURA model by pulling flowsheet, configuration, and daily case data from an AORA database. It automates most structural conversion, but post-migration cleanup is still expected.

### Prerequisites

- Source AORA `.mdb` or `.accdb` model database
- Access to `PSCAdmin.exe` under `<AU install>\Program Files\AspenTech\Aspen Unified\Admin\CLI`
- Permission to write to the SQL data server
- Familiarity with command-line execution
- **64-bit Microsoft Access** support; 32-bit Office/Access blocks migration

### Migration commands

Use an elevated command prompt in the `PSCAdmin.exe` folder.

| Scenario | Command pattern |
|---|---|
| **Base model + cases** | `PSCAdmin migrate-aora-model --databaseServer <server> --databaseName <db> --AORAInputDb "<path>" --importCaseData True --caseStartTime "<YYYY-MM-DD HH:MM:SS>" --caseEndTime "<YYYY-MM-DD HH:MM:SS>" --logDir <path>` |
| **Base model only** | `PSCAdmin migrate-aora-model --databaseServer <server> --databaseName <db> --AORAInputDb "<path>" --baseModelCase "<YYYY-MM-DD HH:MM:SS>" --logDir <path>` |

Run `PSCAdmin migrate-aora-model -- help` to list all parameters.

### Parameter highlights

| Parameter | Use |
|---|---|
| `--databaseServer` | Target SQL server |
| `--databaseName` | Existing AU database that will receive the new model |
| `--AORAInputDb` | Full quoted path to the AORA Access DB |
| `--importCaseData` | `True` to import case data; otherwise base-model-only flow is used |
| `--caseStartTime` / `--caseEndTime` | Required when importing case data |
| `--baseModelCase` | Base-model seed case when case data is not imported |
| `--logDir` | Output folder for migration logs |
| `--doNotPublish` | Test migration without publishing the new Unified model |

### What the migration carries over

- Flowsheet topology and layout
- Object configuration, templates, and attributes
- Case data (daily values)
- UOM types / properties → **Model Data → Properties**
- Products → **Model Data → Materials**
- Strap tables → **Model Data → Strapping Table**
- Reconciliation basis → **Cases & Analysis → Mass Reconciled / Volume Reconciled**
- Engineering unit preferences → **Model Settings → General Settings**

### Automatic conversion behavior

- Objects are migrated from the selected time range, using the latest configuration available in that range
- AORA **instrument** objects do not remain separate objects in AURA; their details are converted into **stream** or **tank** attributes
- For streams, active AORA pipe instruments set **Measurement = True** automatically; unmeasured streams get **Measurement = False** and are expected to be solver-calculated during reconciliation
- AURA does not create attributes for AORA fields that are empty for every object

### Major object mapping patterns

| AORA source | AURA result |
|---|---|
| Receiving / Shipping / Production / Consumption Dock | Same dock template in AURA |
| Column / Reactor | **Process Unit** |
| Manifold | **Manifold** |
| Blend Header | **Blend Header** |
| Subsystem | **Tank Group** |
| Tank (regular / floating roof) | **Tank** |
| Tank gauges / tank lab instruments | Tank attributes |
| Permanent Pipe | **Stream** |
| Pipe / meter / flow lab instruments | Stream attributes |

### Known non-migrated categories

The utility does **not** migrate several AORA-only support definitions such as Components, Quality Codes, Graphic Images, Graphic Strings, Variables, Transaction Types, Accounting Codes / Types, DOE Codes, Department, and mapping definitions.

### Post-migration checks

1. Review the migration log for naming conflicts and conversion errors.
2. Confirm the generated AURA model name did not collide with an existing model in Unified.
3. Validate templates, attributes, and imported cases, then use bulk edit / Excel-based cleanup where the automatic conversion is not sufficient.

