# Aspen Unified Scheduling (AUS) Knowledge Base

## Quick Map

| Goal | Go to |
|---|---|
| Understand what AUS is | [Overview](#overview) |
| Set up the model topology | [Flowsheet](#flowsheet) |
| Schedule and visualize events | [Work Areas](#work-areas) |
| Understand event types and fields | [Events](#events) |
| Run simulation / check results | [Simulation](#simulation) |
| Optimize blending or crude schedule | [Optimization](#optimization) |
| Reconcile actuals vs scheduled | [Reconciliation and Roll Forward](#reconciliation-and-roll-forward) |
| Work with scenario cases | [Cases](#cases) |
| Configure properties, materials | [Model Data](#model-data) |
| Configure model-level settings | [Model Settings](#model-settings) |

---

## Overview

**Aspen Unified Scheduling (AUS)** is a short-term scheduling product for refineries. It manages crude receipts, tank transfers, feed unit operations, and blending over a planning horizon of up to 30 days.

### Role in the Aspen Unified Platform

| Product | Role |
|---|---|
| **AUP (PIMS)** | Long-range planning; exports planning targets and Site Catalog |
| **AUS** | Short-term scheduling (days–30 days); imports planning targets |
| **AURA** | Reconciliation and performance monitoring of actual operations |

AUS sits between planning (AUP) and reconciliation (AURA) in the operational workflow.

### Key Capabilities

- **Gantt-based event scheduling** across tanks, units, pipelines, and blenders
- **Live simulation** — results update automatically as events are changed
- **Optimization** — SBO (Single Blend), MBO (Multi-Blend), CSO (Crude Schedule Optimizer)
- **Reconciliation** — compare actual vs scheduled; roll forward to next horizon
- **Case management** — test scenarios in isolation from the Base Model
- **Publishing** — export simulation results to downstream systems
- **Excel Add-in** — two-way data exchange via Excel

---

## Flowsheet

The AUS flowsheet is the **first screen visible** when a scheduling model is opened. It defines the model's physical topology — which units exist and how they connect.

### Purpose

- Set up model layout (inputs, outputs, unit connections)
- Show model completeness and constraint violations
- Used for **topology-aware validation** when creating events
- Supports **automatic crude schedule creation** (CSO)
- Enables **submodel simulation** for distillation towers

### Flowsheet Units

| Unit Type | Notes |
|---|---|
| **Tank / Tank Group** | Individual storage or logical groups; tanks in a group are connected |
| **Process Unit** (Crude/Vacuum) | Distillation towers (CDU, VDU) with mode-based yield profiles |
| **Feed Unit** | Unit that accepts feeds from tanks; configurable with delay transfers |
| **Blender** | Used for blending operations; requires Blend material with components configured |
| **Mixer / Splitter** | Routes materials to/from multiple sources or destinations |
| **Pipeline** | Models transport modes; supports time delay for transfers |
| **Parameter Group** | Groups parameters for scheduling by exception |

> **Note:** Unit names are separate objects from the units themselves; they can be resized and repositioned independently.

### Key Rules

- Recycle to a tank or tank group is supported; recycle to direct unit feed is **not supported** (must have a tank in place)
- To use an atmospheric tower distillation mode, **all towers for that mode** must be on the flowsheet
- If the Site Catalog changes and the flowsheet becomes inconsistent, errors are shown and the flowsheet must be reconciled

### Accessing the Flowsheet

- Left-hand Navigation Panel → Flowsheet icon (📐)

### Flowsheet Unit Properties Panel

The **Properties panel** (double-click any flowsheet unit) configures unit-specific settings:

| Unit Type | Key Configurable Fields |
|---|---|
| **Tank / Tank Group** | Name, Description, Location, Min/Max inventory, Working Min/Max, Material Service, Event Attribute Group |
| **Atmospheric Tower** | Operating Modes list; Import button for distillation mode data |
| **Submodel** | Simulation Specification button, port configuration, Excel/Catalog import |
| **Any unit** | Name, Description, Location (enables timezone-aware scheduling in multi-site operations) |

### Bulk Tank Import

Import multiple tanks at once via **Add Flowsheet Components → Add Tanks → Bulk Import**.

Excel template columns: `Tank Name` (required), Description, Min/Max Values, Working Min/Max, Material Source.

Workflow:
1. Export template from the Bulk Import dialog
2. Fill tank information (name required; duplicate names update existing values)
3. Re-import via Import button
4. Click **Add & Close** → tanks appear in the Stockpile tab
5. Drag tanks from Stockpile to the Flowsheet canvas

> **Note:** Tanks are NOT automatically placed on the flowsheet — they must be dragged from Stockpile. The active Case must be the Base Model.

### Parameter Groups

**Parameter Groups** aggregate operating parameters from multiple units (AT towers, Submodels, Mixers, Custom Units) into a single schedulable unit on the Gantt.

Key behaviors:
- Each operating parameter belongs to exactly one group
- Parameters assigned to a group are disabled on their parent unit's event dialog
- Default scheduling: by exception (auto-generated Default events)
- Groups can be added as Gantt resources → creates a Unit Operation Event covering all group parameters
- Deleting a group auto-removes it from any Gantt resource lists

Creation workflow:
1. **Add Flowsheet Components → Parameter Groups → Add new group**
2. In the group editor, use **Unit Search** to select a unit
3. Use **Parameter Search** to select parameters → Click **Add** (preview mode)
4. Click **Add to Group** to finalize
5. Set a color for Gantt visibility

### Distillation Mode Setup

Import distillation modes into AUS from Site Catalog (originally published from AUP):

**Pre-requisites:** Model must be linked to a Site Catalog. Atmospheric tower and mode must already exist in AUP and be published.

Setup steps:
1. Place **Atmospheric Tower** on flowsheet (Add Flowsheet Components → Site Catalog Units)
2. Add other towers referenced by the mode (e.g., Vacuum Tower)
3. Click the Atmospheric Tower → Properties panel → **Operating Modes → Import**
4. Select desired mode from Site Catalog; confirm import (imports materials and properties)
5. Set default mode if multiple modes available
6. Connect all inputs/outputs for all towers in the mode

> **Rule:** All towers for a given mode must be present on the flowsheet before the mode can be used.

### Site Catalog Integration

- Distillation mode units and simulation configurations can be imported from the **Site Catalog**
- The **Catalog Simulations panel** (right-side operations panel) alerts when new catalog simulations are detected

---

## Work Areas

Work Areas are the main scheduling and analysis workspace. Each model can have multiple Work Areas of two types:

| Type | Icon | Best for |
|---|---|---|
| **Gantt Work Area** | 📊 (Gantt icon) | Event scheduling on a time-axis across resources |
| **Inventory Grid Work Area** | 🗃️ (Tank icon) | Tank balance analysis by day, table format |

Access: Left-hand Navigation Panel → **Work Area** list.

### Gantt Work Area

The Gantt is used to:
- Add and edit events on a timeline
- Visualize simulation results (colored bars = events, length = duration)
- Run reconciliation
- Launch optimization

#### Gantt Resources

Resources appear on the **left side** of the Gantt. Each resource row holds its associated events. Resources must be added before events can be placed.

Resources include: Tanks, Process Units, Mixer/Splitters, Feed Units, Pipelines, Blenders, Parameter Groups, Modes of Transportation.

Clicking a resource highlights it in **blue** and shows all associated events in a shaded band.

#### Gantt Right-Side Operations Panel

| Icon | Function |
|---|---|
| Trends | Show/add trend thumbnails; detailed view below Gantt |
| Alerts | Display all notifications |
| Planning Targets | Access Imported Planning Targets panel |
| Property Panel | Event details for selected trend or event |

#### Work Area Time Zone

Each work area can have its own **Time Zone** setting (overrides model time zone for display). Set in **Model Settings → General → Work Areas tab**.

### Inventory Grid Work Area

A table-based view for monitoring a collection of tanks. Each tab represents a custom grid configuration.

- Create new tabs with **Create Custom Grid**
- Duplicate or delete tabs via right-click
- Supports tank-related events only (not unit operations, blending, etc.)
- Tab color reflects **Primary Metric** status (blue = simulation running, green = complete, red = failed)

---

## Events

Events represent scheduling activities placed on Gantt chart resource rows or Inventory Grid day rows.

### Event Types

| Event Type | Placed on | Purpose |
|---|---|---|
| **Blend** | Blender row | Blending operation with recipe and component sources |
| **Feed Unit** | Feed Unit row | Feed to a processing unit |
| **Mixer / Splitter** | Mixer/Splitter row | System-managed balancing/routing between sources and destinations |
| **Property Change** | Tank row | Change a tank's material property at a point in time |
| **Receipt** | Transport, tank, or pipeline row | Incoming crude or material from external source |
| **Shipment** | Transport, tank, or pipeline row | Outgoing material to external destination |
| **Transfer** | Tank row | Movement between tanks within the model |
| **Unit Operations** | Unit operation, parameter group, or custom unit row | Distillation/unit run event driven by operating parameters |
| **Schedule Bias** | Tower, submodel, or custom unit row | Case-specific bias adjustments to targets/derived values |

> **Resource constraint:** The system uses logic to enforce allowable event types based on resource type.

### Adding Events

**On a Gantt:**
1. Click **+** (Add) → select event type
2. Click-drag on the target resource row to set time span
3. Reposition as needed

-or- Import from Excel using the import button.

**On an Inventory Grid:**
1. Click **Add** dropdown above the master table → select event type
2. Complete the Create Event dialog → click **Create**
3. Event Details panel opens for configuration

### Common Event Fields (Movement Specification Area)

| Field | Notes |
|---|---|
| **Event Name** | Optional label |
| **Event Type** | Type with color picker (RGB or predefined) |
| **Time Zone** | Only visible if "Display dates in local unit time" is enabled |
| **Locked** | Read-only when locked; cannot change timing or delete |
| **Start / End Time** | Can be constrained by timing links (read-only if linked) |
| **Rate / Quantity** | System calculates one of: Start, End, Rate, Quantity once three are set |
| **Event Time Delay** | Receipt/Transfer only; auto-calculates from transport volume and flowrate |
| **Flexible Start/Stop** | Receipt events only |

> **Calculate rule:** For a **new event**, Rate and Quantity are NOT auto-calculated from each other. Both must be entered or event is marked **Incomplete** (⚠️ icon on Gantt).

> **Incomplete events** can still be included in optimization runs.

### Locking Events

A **locked event** is read-only. Timing and deletion are blocked.

Exceptions — the following can still modify locked events:
- DataHub and GraphQL imports (can also change Lock flag)
- Excel imports (can change Lock flag based on current/updated state combination)

### Event Details access

The **Event Details** experience is the common entry point for all event-specific dialog pages.

- **Gantt:** right-click event -> **Edit Details**, or select the event and open **Details** from the Operations panel
- **Inventory Grid:** right-click event row -> **Edit Details**, or select the row and open **Details**
- **Import path:** events can also be created through Excel/Data Hub imports, then reviewed in Event Details

### Event dialog patterns

| Event type | Main tabs/areas | Distinct behavior |
|---|---|---|
| **Blend** | General, Blend, Sources, Properties, Specifications, Objectives, Calculator | Supports **Optimize**, recipe normalization, Min/Max range, and calculator-driven promotion back to event details |
| **Receipt / Shipment** | General, Composition, Source/Destination | Use **delivery strategies**, support delayed/instant/scheduled delivery timing, time zone entry, and **Max Volume** |
| **Transfer** | General, Composition, Source, Destination | Tank-to-tank movement; similar to receipt/shipment but without source pinning workflow |
| **Feed Unit** | General, Inflow, Outflow | Creates/maintains related sub-events; upstream and downstream routing is constrained by the feed unit configuration |
| **Unit Operations** | General, Operating Parameters, custom attributes | Driven by operating parameters instead of direct Quantity/Rate; optimizer can create supporting mixer behavior automatically |
| **Mixer / Splitter** | Mostly system-managed | Used to maintain material balance; defaults and optimizer updates are more important than manual quantity entry |
| **Property Change** | General, Property/Composition | Zero-duration timestamp event; can switch material service or create inventory step changes; does **not** support timing links |
| **Schedule Bias** | Flows, Properties | Case-specific biasing event where **Target = Source x Multiplier + Offset**; can be imported from Data Hub |

### Delivery strategies

Receipt, shipment, and some transfer/feed workflows support a richer delivery model than a simple fixed rate.

| Strategy | Behavior | Best for | Notes |
|---|---|---|---|
| **Series** | Fill/empty targets one by one in listed order | Ordered routing | Individual tank quantities can be pinned |
| **Parallel** | Deliver to all targets at the same time | Shared distribution | Can be based on qty, percent, or rate |
| **Sequence Rotation** | Repeats series order in cycles | Repeating dispatch | Useful when one pass through the target list is not enough |
| **Ullage Rotation** | Chooses the target with the most available space | Dynamic receiving | Good for fill strategies |
| **Reverse Ullage Rotation** | Chooses the target with the least remaining space | Fast emptying/completion | Good for clearing source inventory |

Related controls:

- **Pinning** keeps a target tank quantity fixed during normalization
- **Max Volume** estimates the largest feasible event quantity without violating tank/spec constraints
- **Material Service filters** narrow valid routing options for rotational strategies

### Overlapping Events

AUS raises **Overlapping Event Alerts** when events on the same resource overlap in time. Alerts are visible in the Alerts panel.


---

## Simulation

AUS runs **live simulation** — results update as events are modified.

### Simulation Types

| Type | Trigger | Description |
|---|---|---|
| **Full Simulation** | On demand or auto | Calculates all event movements + submodel simulations + refreshes trend data |
| **Movement Only** | Manual | Quicker; only calculates volumetric/weight movements without submodel simulation |

### Auto-Triggered Full Simulations

Full simulation runs automatically when:
- Model is first opened
- A Work Area is first opened (if results are not current)
- Input data to a submodel changes beyond the **threshold % set in Settings**
- **Publishing** is initiated
- **Reconciliation** page is opened
- **Rundown Biasing** is run
- **Rolling Forward** is performed

> **Note:** Automated full simulations **cannot be stopped** once started. Manual simulations can be stopped.

### Simulation Status Indicator

The **Time Period bar** above the Gantt shows simulation status:

| Color | Meaning |
|---|---|
| 🔵 Blue | Simulation in progress |
| 🟢 Green | Simulation complete (disappears after a moment) |
| 🔴 Red | Simulation failed |

### Saved Simulation States

AUS supports **Saved Event Simulation States** — snapshots of simulation results that can be named and recalled. Useful for comparing what-if scenarios without creating full cases.

Key behaviors:

- AUS automatically creates saved states after simulation runs
- Rolling the schedule forward can create a new saved state from the current results
- If an earlier event is changed, later saved states can become **Invalid**
- Automatic cleanup/expiration can be configured from **General Settings**

| Status | Meaning |
|---|---|
| **Valid** | Reflects the latest known simulation state and is safe to reuse |
| **Invalid** | Created from results that are no longer current because earlier events changed |

### Simulation Horizon

- Set via the **Change Simulation Horizon** dialog box
- Initial state configured with **Initial Simulation State** dialog

When the requested simulation start falls outside the currently usable saved-state range, AUS can prompt for one of these actions:

1. Extend the current horizon and generate a new saved state
2. Switch to an existing saved state near the requested start
3. Continue without a saved state

Without a saved state, AUS starts from empty/default initial conditions.

---

## Optimization

AUS provides three optimization modes:

### Single Blend Optimization (SBO)

Optimizes the recipe for an **individual blend event**. Runs per blend; faster than MBO.

Setup: **Model Settings -> SBO Settings**

#### SBO prerequisites

- A **Blender** exists on the flowsheet and is used in the Work Area
- The target blend event has access to at least two valid sources/components
- Blend materials, property specifications, and source availability are configured

#### SBO workflow

1. Review **SBO Settings**
2. Open the **Blend Event** dialog
3. Click **Optimize**
4. Review the **Calculator** tab results
5. Use **Promote** or **Promote and Apply** to write the optimized recipe back to the event

#### SBO objective functions

| Objective | Intent | Typical inputs |
|---|---|---|
| **Component Cost** | Maximize blend margin against source cost | Blend price, source cost, event quantity |
| **Target Blending** | Stay close to a target recipe | Target component fractions, deviation penalties |
| **Property Giveaway** | Reduce excess quality giveaway | Property penalties, min/max spec limits |

SBO considers source availability, tank capacity, recipe bounds, and blend property specifications.

#### Calculator tab

The **Calculator** tab is the working surface for reviewing and adjusting SBO output.

- Rows represent sources; recipe values can be edited directly
- Columns show recipe, used/available quantities, properties, and violations
- **Normalize Recipe** recalculates using current edits
- **Reset Properties** restores property values but keeps recipe edits
- **Reset All** returns to the state before Calculator changes
- **Promote** updates the Event Details dialog without saving
- **Promote and Apply** writes the changes immediately

Color cues:

- **Red** = out-of-range value
- **Yellow** = changed from original
- Warning icons indicate availability or constraint violations

#### SBO settings highlights

| Setting area | Purpose |
|---|---|
| **Penalty factors** | Tune blend/spec/inventory infeasibility penalties |
| **Hard vs soft constraints** | Decide whether recipe/property specs may relax during optimization |
| **Period stability** | Stabilizes solutions at the cost of longer solve time |
| **Advanced bounds** | Controls default flow ranges, incentives, and transition penalties |

### Multi-Blend Optimization (MBO)

Optimizes recipes **across multiple blends** over the entire scheduling horizon. Used for:
- Optimizing recipes of multiple blends simultaneously
- Future feasibility analysis
- Cost comparisons

**Setup workflow:**
1. Specify final blend materials eligible for optimization (global list)
2. Assign final blend materials to each **blend envelope**
3. Set **% min / % max** for each material per envelope (0–100, total ≤ 100%)
4. Run optimizer

**After optimization:**
- Review "Final Blends" section in the report
- A **child case** can be auto-created during MBO if "Apply results automatically" is unchecked

> **Infeasibility:** If constraints make a final blend infeasible, the optimizer reports an infeasible solution state.

### Crude Schedule Optimizer (CSO)

Advanced capability that **auto-generates an optimal crude movement and processing schedule**.

| Feature | Detail |
|---|---|
| **Horizon** | Up to 30 days |
| **Optimizes** | Crude receipts, tank transfers, feed unit operations |
| **Economic basis** | Uses price information from planning targets (from AUP/PIMS) |
| **Constraints** | Tank limits, transfer capacities, flow rates, quality targets, settling time |
| **Key benefit** | Minimizes gap from planning solution; maximizes gross refining margin |

**Transfer event optimization** also includes an option to minimize the number of transfer events to keep the schedule operationally simple.

**Planning Targets integration:**
- Exported from AUP → imported into AUS via **Excel Add-in** or Site Catalog
- Bulk crude/product pricing can be imported directly (bypassing Site Catalog)

### Run Optimizer dialog

The **Run Optimizer** dialog is the main execution surface for MBO/CSO-style runs.

#### General options

| Field | Purpose |
|---|---|
| **Job Name** | Run identifier shown in history and Job Status |
| **Schedule Envelope** | Selects the crude / non-crude / blend optimization scope |
| **Planning Targets** | Used for non-crude optimization alignment to planning data |
| **Fixed Window (days)** | Locks near-term binary decisions to the current schedule |
| **Short-term Window (days)** | Defines the additional near-term period where constraints are handled more strictly |
| **Apply results automatically** | If not selected, AUS creates a child case for review before applying |
| **Go to Job Status Page** | Opens run monitoring immediately after launch |

#### Penalty and model options

| Setting | Purpose |
|---|---|
| **Model infeasibility factor** | Penalty for infeasible model states |
| **Inventory limit violation penalty** | Penalty for tank inventory limit violations |
| **Property spec violation penalty** | Penalty for property-spec violations |
| **Model incentive factor** | Incentive weighting used by the optimizer |
| **Ullage penalty** | Penalizes undesirable ullage/rotation behavior |
| **Transition penalty** | Penalizes switching/transition complexity |
| **Event start penalty** | Helps reduce unnecessary transfer/event proliferation |

### Job Status and Diagnostics

The **Job Status** page is the monitoring center for optimization runs.

| Column | Meaning |
|---|---|
| **Job Name** | Run identifier |
| **Status** | Progress/result state |
| **Obj. Function** | Feasibility / optimization objective indicator |
| **Execution Time** | Runtime for completed or active jobs |
| **Submitted Time** | Submission timestamp |
| **Submitter** | User who launched the run |

Common actions from Job Status:

- Open **Optimizer Details**
- Apply results through **Case Comparison**
- Download optimizer reports
- Download a deeper analysis package
- Open **Diagnostics**
- Stop/delete a running job

The **Diagnostics** page is used for root-cause analysis of poor or infeasible runs. It includes:

- **Objective Function** breakdowns (economic terms and penalty terms)
- **Variables / Equations by Iterations** views for solver investigation
- Table export/filter/sort capabilities for deeper troubleshooting

---

## Reconciliation and Roll Forward

### Overview

**Reconciliation** is the process of comparing what happened in the field against what was scheduled. It is the **first step in the Roll Forward process**.

Goal: Use historical data and accurate simulation results to determine baseline data for the **next day** (where no plant data is available yet).

### Accessing Reconciliation

From a Gantt Work Area, click the **Reconciliation icon** (🔄) in the Application bar.  
A **Full Simulation** is automatically triggered when the Reconciliation page opens.

### Reconciliation Workflow

1. Open Reconciliation from a Work Area
2. Compare **actual plant data** vs **predicted baseline** in the reconciliation grid
3. Update completed and unscheduled events:
   - Select **all plant values**, or
   - Select **all simulated values**, or
   - Select specific plant or simulated values per event
4. Mark events as **Reconciled** (via Table Tray button)
5. Run simulation to get updated predictive results

### Rolling Forward

After reconciliation, **Rolling Forward** advances the schedule horizon:
- Moves the scheduling start to the current time
- Carries forward completed events and updated baselines
- Old events before the roll-forward point are archived

#### Detailed Roll Forward Workflow

Rolling forward is the daily process of establishing accurate baseline data by reconciling completed/unscheduled events and splitting midnight-crossing events.

**Phase 1 — Event Reconciliation**

Open Reconciliation from the Gantt Work Area. A Full Simulation runs automatically. In the Reconciliation grid:
- Compare actual plant data vs predicted baseline
- Update completed and unscheduled events
- Mark events as **Reconciled** via Table Tray button

**Phase 2 — Baseline Data Setup (three strategies)**

##### Strategy 1: Import from Excel
1. Click download icon above Reconciliation table → download Excel template
2. Fill actual plant data in the template
3. Click **Import → Import from Excel** → select workbook → Next
4. Select sheets to import → Next
5. Review import status (errors halt processing); click Close
6. Imported values appear in **Plant Value** column

##### Strategy 2: Manual Entry
1. Edit **Baseline** values directly in the Reconciliation grid
2. Modified values are highlighted in yellow
3. For composition rows: select modified rows and click **Normalize**, or right-click → **Accept Value**

##### Strategy 3: Import from Historian
*(Historian must be configured in Data Acquisition first)*

1. Click **Import → Import plant values from data historian at the baseline time**
2. Select import date in the **Import Plant Values** dialog
3. Click **Set Date and Time** → connects to Historian and pulls plant data
4. Plant Value column is populated; Baseline value and timestamp are updated

**Phase 3 — Accept and Roll Forward**
1. Click **Accept All Values** to confirm reconciled values as the simulation starting point
2. Use the model horizon icon in the application toolbar to select the new time
3. System generates initial schedule values based on simulation values at the new horizon

---

## Cases

### Overview

Cases allow schedulers to test **alternative scenarios** without affecting the Base Model.

- **Base Model** is the top-level (no parent)
- Cases are organized in a **hierarchical structure** — child cases inherit from parent cases
- Cases with children show **>** before the case name in the Case Summary table

### Case Summary Page

Access: Navigation Panel → **Cases** icon → **Case Summary**

| Column | Description |
|---|---|
| Case Name | Hierarchical case name |
| Created | Creation timestamp |
| Created By | Author of the case |
| Last Modified | Last change date |

### Key Case Actions

- **Create case** — from Case Summary or Base Model row
- **Duplicate case** — copy a case with all its events
- **Export case data** — export events/results to Excel
- **Set as active** — select which case context the Work Area uses
- **Run optimizer** — from a case context (CSO, MBO, SBO)
- **Compare cases** — Case Comparison Work Area mode shows two cases side by side

### Auto-Created Cases (MBO)

During Multi-Blend Optimization, a **child case** is automatically created if "Apply results automatically" is unchecked. This allows reviewing the optimized scenario before committing changes to the parent.

### Case Comparison mode

**Case Comparison** overlays the current case with a second case on the same Work Area.

| Visual / action | Meaning |
|---|---|
| **Solid event** | Current case |
| **Dashed event** | Compare case |
| **+** | Event exists only in compare case |
| **-** | Event exists only in current case |
| Change marker | Timing/value difference between the two cases |
| **Promote** | Copy selected compare-case changes into the current case |
| **Reset** | Revert current-case changes back to the compare case state |

This mode is also used after successful Data Hub imports, where imported data is first reviewed in a temporary child case before being promoted.

---

## Model Data

### Properties

The **Property Summary** page lists all properties associated with the model.

- Includes properties imported from Site Catalog and PIMS planning model
- Locally created properties can be added
- Supports **ABML/UBML** correlation and **custom (User Defined)** calculation methods

| Column | Description |
|---|---|
| Property | Name; click to see details |
| Property Type (UOM) | Unit of measure |
| Site Catalog | Whether linked to catalog (UOM locked after link) |
| Last Imported | Last sync from catalog |
| Blend basis | Measurement basis for this property |

**Specific Gravity** is visible by default. Additional properties become available when distillation modes are imported.

### Materials

The **Material Summary** page manages material services (single materials or grouped materials):

| Material Type | Description |
|---|---|
| **Standard** | Non-crude or crude group; can be parent/child of Standard only |
| **Crude** | Used in distillation mode assay data; specifies crude composition of tanks/receipts |
| **Crude Group** | Collects Crude or Crude Group services; used for grouping in receipts |
| **Utility** | Utility calculations from AUP submodels (e.g., CO2 emissions tracking); no tracked properties |
| **Blend** | Supports blending scheduling; can exist in Site Catalog; requires Components, Blend Type, Property Spec set |

The **"All Crudes"** default service is always available and cannot be deleted.

> **Tip for missing crudes in events:** Check if the material has the **"Use in Events"** option enabled in the Materials table.

### Envelopes

**Envelopes** are logical groupings of flowsheet units for balanced scheduling and constraint customization.

| Envelope Type | Creation | Contains | Notes |
|---|---|---|---|
| **Crude** | System-generated at model creation | All Feed Units + their connected tanks | Feed units auto-added when placed on flowsheet |
| **Process/Standard** | User-created | Tanks, tank groups, Mixers/Splitters | Mixers/Splitters must be assigned manually |
| **Blend** | User-created | Blender + rundown blend units | Considers ABML correlations and economic functions |

Key behaviors:
- The same unit can belong to multiple envelopes
- Deleting from the flowsheet properties panel does not delete the envelope from the model
- Optimizer can be run per envelope to determine feasible parameter values
- Envelopes enable customized constraints: same-service-only transfers, parameter penalties, rotation minimums, pipeline transfers

### Distillation Modes

- Imported from the **Site Catalog** (originally published from AUP)
- Define yield profiles for CDU/VDU operating modes
- Multiple modes can be configured per atmospheric tower
- **Mode Details page** (Model Data → Distillation Mode Details) shows:
  - Assay Cutting Data (WBAL/VBAL, inspection rows, CCAP, control, process limit, process parameter rows)
  - Utilities & DBal Consumptions (utility names, values, DBAL consumption table)
- Read-only; data updates only via AUP re-publish and re-import

### Locations

AUS **Locations** define geographic or logical locations for scheduling entities. Used for organizing receipt/shipment points.

### Data Acquisition

**Data Acquisition** connects AUS to historian or process data sources for real-time/near-real-time event actuals. Used as input to reconciliation baselines.

#### Mapping Tab

| Column | Description |
|---|---|
| **Element** | AUS entity name |
| **Attribute** | AUS property/attribute being mapped |
| **Use for Reconciliation** | Boolean; marks this tag for reconciliation baseline use |
| **Data Source** | Historian data source name (dropdown) |
| **Tag Source** | Historian tag source (editable; highlighted if non-existent) |
| **Tag Name** | Historian tag name (red background if invalid) |
| **UOM** | Unit of measure |
| **Multiplier / Offset** | Applied before correlation: `Import Value = Multiplier × Tag Value + Offset` |
| **Import Value** | Calculated value shown after retrieval |
| **Import Time** | Timestamp of last retrieval |

**Multi-Tag Aggregation** (V15.0.4+): Multiple tank tags or stream flows can map to a single AUS measure. Values are aggregated on retrieval — enables Material Service Inventory trending vs plant actuals.

Actions:
- **Add Variable** — select entities via Property Type filter
- **Export Variables** — exports tag template to `VariableTemplate.xls` for bulk mapping
- **Test Mapping** — set date/time, click **Retrieve Data** to preview matched values

#### Data Sources Tab

| Column | Description |
|---|---|
| **Trend Interval** | Global refresh frequency (minutes) for all data sources |
| **Data Source** | Name of historian/data server |
| **Status** | Most recent acquisition status |

### Submodel Simulations

AUS supports **submodel simulations** using process simulation configurations (from Site Catalog or Excel).

#### Squaring Concept

Simulations require equal variables and equations for a deterministic solution. AUS auto-assigns "fixed" status to input flows/properties/parameters, leaving product flows/properties for calculation. Users can override via checkboxes in the **Submodel Squaring** grid.

#### Simulation Summary Table

| Column | Description |
|---|---|
| **Simulation** | Simulation name (links to Configuration page) |
| **Submodel** | Associated submodel name and tag |
| **Last Modified** | When simulation was last updated |
| **Linearize Solve** | Enables linear approximation; may improve performance |

#### Simulation Configuration Page

Two tabs:
- **Variables Tab** — display/edit user-specified variables and view system-calculated variables; shows current Status
- **Squaring Tab** — constraint/variable matrix; checkboxes for user vs system classification

Key buttons: **Reset** (reverts variables to original state), **Simulation Log** panel (shows squaring hints).

#### Simulation Creation Workflow

1. Add Excel Submodel or Site Catalog Simulation to flowsheet
2. From Properties panel → click **Import** dropdown → select source (Excel or Site Catalog)
3. Select import file → import (defines ports and variables)
4. Click **Simulation Specification** button to create initial simulation
5. Verify **Simulation Options** in **General Settings → Simulations tab**

### ABML Correlations

**ABML (Aspen Blending Model Library)** and **UBML (User-Blending Model Library)** correlations define how blend properties are calculated.

| Column | Description |
|---|---|
| **ID** | Correlation identifier from blend library |
| **Type** | ABML (Aspen-defined) or UBML (user-defined) |
| **Status** | ✓ Complete (all input terms mapped) or ⚠ Incomplete |

Add methods:
- **Manual Add**: Click add → select from available ABML correlations
- **Import from Catalog**: Select correlations from Site Catalog; optionally include properties

**Correlation Details Panel** (three tables):

*Input Table:* Map AUS properties to correlation inputs; set Scale and Offset applied **before** calculation.

*Output Table:* Map AUS properties to correlation outputs; set Gain and Bias applied **after** calculation.

*Parameters Table:* Define static parameter values specific to the correlation.

### Custom Correlations (Equation Editor)

The **Equation Editor** allows freeform custom property blend calculations beyond the standard ABML library.

**Property types supported:**
- **Standard** — single correlation output
- **Emissions ABML** — supports multiple emission correlations per property
- **Complex ABML** — blender context; depends on component properties, not product stream properties

**Equation format:** `<calculatedSymbol> = <expression>` (terms cannot start with numbers)

**Workflow:**
1. Click add → rename the correlation
2. Enter equation (e.g., `DON = (RON + MON) / 2`)
3. Symbols auto-appear in the Variables table
4. Map each symbol to an AUS property
5. Optionally drag a symbol to Parameters and assign a constant value

> Circular dependency detection prevents incomplete status for mutually dependent correlations.

### Event Attribute Groups

**Event Attribute Groups** organize custom attributes assignable to event types per flowsheet unit.

Workflow:
1. Create group on **Model Data → Event Attribute Groups**
2. Assign custom attributes to event types within the group via **General Settings → Events → Event Attributes → Groups**
3. Assign group to a flowsheet unit via the unit's Event Attribute Group dropdown
4. When the unit is added as a Gantt resource, all its events have the custom attributes available

### Planning Targets

Planning targets import PIMS production targets into AUS for use in optimization.

| Page | Purpose |
|---|---|
| **Planning Targets (Model Data) → Importing** | Import targets from Site Catalog |
| **Planning Targets (Model Data) → Mapping** | Map imported targets to AUS assets |
| **Planning Targets (Work Area panel)** | View imported targets in context of current Work Area |

#### Importing Planning Targets

**Pre-conditions:**
- Model attached to Site Catalog
- Planning targets published in catalog
- Campaign time range within scheduling horizon
- All referenced units exist on the AUS flowsheet (Schedule by Exception enabled, tanks added, operating modes matching)

**Importing table columns:** Name, Start/End Date, Last Published, Published By, Comments.

> **Yellow highlight** on Last Published cell = catalog target was re-published (update recommended).

Actions: **Import** → select targets → click Import; **Update** if Last Published is yellow; **Delete** via trash icon.

#### Mapping Planning Targets

**Workflow:**
1. Import targets (Importing page)
2. On **Mapping** page, click a planning target row → open **Envelope Details panel**
3. Map feeds, products, parameters, and properties to AUS elements via **Add Scheduling Elements** dialog

**Envelope Details panel tabs:**

| Tab | Description |
|---|---|
| **Feeds** | Map planning feed tags to AUS scheduling elements; set Multiplier for unit conversion |
| **Products** | Map planning product tags to AUS elements |
| **Properties** | Map planning property tags to AUS stream/property combos; set Multiplier |
| **Operating Parameters** | (Not shown for sales/purchases envelopes) |

> A planning tag can be mapped to **multiple** AUS elements/properties. ⚠ status = not all targets mapped.

### Catalogs

| Catalog | Purpose |
|---|---|
| **AUS Catalog** | Model-local library of units, streams, simulation configs |
| **Site Catalog** | Organization-wide shared library; source for distillation modes and simulation configurations |

#### AUS Catalog

Central library for model-local constructs. Linked to a SQL database (created via Aspen Unified Configuration Manager).

**Connection workflow:** Model → Catalog → Connect Existing or New Catalog → Enter name/description → Connect.

> Disconnecting removes all model-catalog links; reconnect requires re-publish.

#### Site Catalog

Central publishing/linking interface for sharing model constructs across scheduling models and AU products (AUP, AUS, AURA, AUM).

**Publishable data types:** Planning Targets, Materials, Properties, Correlations, Assets.

**General workflow:**
1. **Link** — reference existing catalog resources in current model
2. **Publish** — add model resources to catalog (all related entities must be in model first)
3. After publish, new properties/materials/assets appear in Site Catalog tables

> ⚠ in Catalog column = item name conflict (rename required) or linked catalog item changed incompatibly.

---

## Model Settings

### General Settings

Access: Navigation Panel → **Settings (⚙️) → General**

Four tabs: Application, Simulation, Work Areas, Events.

#### Application Tab — Key Settings

| Setting | Default | Notes |
|---|---|---|
| **Inventory basis** | Volume | First model decision: Volume or Weight. Affects all calculations |
| **Volume UOM** | Mbbl | |
| **Weight UOM** | MMlb | |
| **Rate UOM** | Mbbl/Day | Derived from Inventory basis UOM + time unit |
| **Temperature UOM** | F | Locked for entities imported from Site Catalog |
| **Flowsheet basis** | Model Inventory basis | Basis shown in Inspector Mode and Flowsheet Trends |
| **Time Zone** | (required) | Model-level timezone; ensures consistent day boundary calculations across users in different zones |
| **Day Boundary Hour** | 0 | Offset (0–23 hrs) for simulation period grid start. Useful to avoid midnight splits for long-running events |
| **Reference Density** | 0.35 | In Weight UOM / Volume UOM |
| **Default SPG** | 0.87 | Default specific gravity for the model |
| **Custom DLL Folder** | (optional) | Folder under `ProgramData\AspenTech\AspenUnified\CustomDLLx64` containing custom .DLLs |

> **Day Boundary Hour impact:** A non-zero value offsets how simulation periods are constructed. Grey bands appear on Gantt at start/end to indicate the offset region.

#### Simulation Tab

- **Simulation accuracy threshold** — % change in submodel inputs that triggers auto full simulation

#### Work Areas Tab

- Per-Work-Area **Time Zone** override
- Per-Work-Area settings for display preferences

### Solver Settings

Controls solver behavior for optimization runs (MBO, CSO, SBO).

#### General solver controls

| Setting | Typical meaning |
|---|---|
| **Max iterations** | Maximum nonlinear master iterations |
| **Max iterations before MIP invoked** | How long AUS waits before switching into MIP analysis |
| **Max MIP iterations after invoked** | How many MIP-focused passes are allowed after activation |
| **Residual convergence tolerance** | Error tolerance for nonlinear equation convergence |
| **Objective convergence tolerance** | Relative tolerance for objective improvement |

#### LP / MIP options

| Area | Setting | Purpose |
|---|---|---|
| **LP Options** | **Enable pre-solve** | Removes redundant matrix structure to improve solve speed |
| **LP Options** | **Turn off pre-solve after passes** | Caps recursive pre-solve passes |
| **MIP Options** | **Enable parallel MIP** | Allows parallel processing for mixed-integer solving |
| **MIP Options** | **Relative OBJFN gap tolerance** | Acceptable optimality gap for integer search |
| **MIP Options** | **Integer feasibility tolerance** | Tolerance for integer-variable feasibility |

### Report Settings

Configure which data appears in exported reports and published result sets.

Access: **Settings → Report Settings**

#### Settings tab

| Area | Purpose |
|---|---|
| **Report Time Span** | Defines the start offset and duration used by exported reports |
| **Reports to Generate** | Enables sections such as Events, Receipts, Transfers, Blends, Infeasibilities, Active Constraints, Submodels, Mass Balance, and Tank Balance |
| **Report DB** | Selects the results database target and batch publish size |

#### Publish Sets tab

Publish Sets are reusable subsets of tanks, streams, and properties for controlled publishing/export.

- Useful when not all model data should be published
- Can be configured to publish **day boundaries only**
- Selected later from the Publish Results dialog

### Generating Reports

Reports for submodel simulation results can be generated from **Settings → Generating Reports for AUS**.

For detailed submodel reports:

1. Add/configure submodel units
2. Run simulation
3. Set report time span
4. Enable **Submodels** and **Mass Balance**
5. Download the Excel report workbook

The **Scheduling Reports** page is mainly the execution/download surface for the report content configured in **Report Settings**.

---

## Additional Workflows

### Blending Setup

1. Add a **Blender** unit to the Flowsheet
2. Open Blender Property Panel (double-click or right-click → Details)
3. Name the unit; configure Event color
4. Set **Default Rate**
5. In **Blends** area: search and select valid Blend material(s); set Default
6. Define **Recipe** defaults:
   - Select Blend → component sources appear
   - Assign a **Source** for each component

Blending prerequisites:
- Blend material must exist with **Components**, **Blend Type**, and **Property Specifications set** defined
- Source tanks must be added to the Flowsheet (connection not required)

### Trends

**AUS Trends** are available from both Work Areas and the Flowsheet for visual analysis of inventory, properties, compositions, and operating parameters.

Key behaviors:

- Trend thumbnails can be added from the right-side Operations panel
- Selecting a thumbnail opens a more detailed trend view
- Event changes automatically refresh the related trend values
- Limit handling can show min/max or working min/max style thresholds
- If **Day Boundary Hour** is offset, grey boundary bands appear in time-based views
- Trend synchronization across windows can be enabled from UI behavior settings

Trend/limit configuration supports:

| Dialog | Purpose |
|---|---|
| **Trend Settings** | Controls label, y-axis range, factor scaling, cumulative display, colors, and shared-axis behavior |
| **Limit Settings** | Defines Min / Working Min / Working Max / Max ranges and whether a limit is ignored, soft, or hard |

Limit handling modes:

- **Ignore** — use dialog-defined limits without optimization enforcement semantics
- **Soft constraint** — optimizer may violate with penalty
- **Hard constraint** — optimizer tries to strictly satisfy the limit where possible

### Bulk Editing Events

The **Bulk Event Editor panel** allows editing multiple events simultaneously. Select multiple events on the Gantt, then open the Bulk Edit panel to change common fields across all selections.

Key rules:

- Only **common editable fields** are shown
- If dependent fields differ across selected events, AUS clears the selection and expects one shared replacement
- Mixer/Splitter selections have tighter restrictions on changing source-related fields
- If compositions differ, the same composition field can still be applied to all selected events
- Incomplete events are ignored by the bulk editor
- Timing links may be affected if a bulk edit changes linked fields

### Recurring Events

The **Create Recurring Events dialog** (Application bar or event context menu) creates events that repeat on a defined schedule across the horizon.

Key fields:

| Field | Purpose |
|---|---|
| **Number of duplicate events** | How many copies to create |
| **Back to back with _ days** | Gap between the prior event end and the next event start |
| **Start time each event _ from previous** | Gap between successive start times |
| **Delete other recurring events** | Clears previous recurring definitions before recreating |

### Pipeline Batch Movements

**Visualize Pipeline Batch Movements** shows how pipeline batches progress through a pipeline segment over time.

Prerequisites:

- The Work Area includes **pipeline resources**
- Relevant receipt/batch events exist on those resources

Main controls:

- Add pipelines to the visualization set
- Start/pause the animation
- Set the timestamp used as the starting point
- Hover batches to inspect rate, volume, composition, and destination context

### Delivery Strategies

**Event Delivery Strategies** define how AUS routes event volumes to targets. See **Events -> Delivery strategies** for the detailed strategy matrix and routing behavior.

### Publishing Results

After a simulation, results can be **Published** to downstream systems or shared workspaces.

- A Full Simulation is automatically run before publishing
- Access: Application bar → Publish (📤)
- Configure: **Settings → Report Settings**

Publishing supports:

| Mode | Meaning |
|---|---|
| **Publish Results** | Full time-period result publication |
| **Publish Daily Results** | Day-aggregated result publication |

Common fields in the Publish dialog:

- **Start / End dates**
- **Description**
- **Publish Set**
- Publishing history/log table

Status indication on the publish control:

- **White** — idle
- **Orange** — publishing in progress
- **Green** — publish completed
- **Red** — publish failed

If the client disconnects, publishing can continue server-side for a limited time and resume when the model is reopened.

### Job Metrics

The **Metrics** feature allows custom KPI-like tiles or values to be calculated with code.

Typical workflow:

1. Open **Metrics**
2. Create a metric
3. Define the logic in the code editor
4. Test against a work area/tab
5. Optionally enable **Auto-evaluate on Simulation Complete**

Common scripting helpers include:

- `log.info(...)`
- `log.error(...)`
- `api.context`
- `api.graphQL(query)`

Metrics can drive values, labels, and colors shown in grid-style UI surfaces.

### Data Hub Import

**Importing AUS Data via Data Hub** allows bulk import of scheduling data from an external data platform using a JSON-based event payload.

Supported concepts:

- **External ID** matching for update vs insert behavior
- **DeleteAllEvents** for full replacement
- **EventsToDelete** for targeted deletion before insert
- Event metadata such as start/end/rate/fixed/reconciled/color, plus strategy and tank allocation details

Typical workflow:

1. Choose the target Work Area and case
2. Open **Import events from Data Hub**
3. Optionally filter by search range
4. Import the selected payload
5. Review the imported result in **Case Comparison**
6. **Promote** accepted changes into the Base Model or parent case

Notes:

- A restore point is created before import
- Reconciliation imports update plant values rather than creating full scheduling events
- Creator-level permissions are required

### Excel Event Import

The Excel event import workflow is aimed primarily at **crude receipt** style event loading.

Key behaviors:

- Download a template, populate rows, then import from the Gantt toolbar
- **Application ID + Movement ID** form the unique event identity for update matching
- If three of **Start / End / Rate / Quantity** are provided, AUS calculates the fourth
- Tank columns define destination allocation in worksheet order for default series behavior
- Re-importing the same IDs updates the existing event rather than creating a duplicate

### Planning Targets panel

The **Imported Planning Targets** panel shows imported planning targets in Work Area context.

Tabs include:

- **Feeds**
- **Products**
- **Parameters**
- **Properties**

Common usage:

- Compare **Plan** vs **Schedule**
- Review deviation percentages
- Inspect price and incremental values from planning data
- Check campaign timing and overlap handling

### Excel Add-in

The **AUS Excel Add-in** provides two-way event data management between AUS and Excel.

**Capabilities:**
- Create templates for each event type (easy import/modify)
- Create a new case or apply events to an existing Base case
- Change Start time and horizon dates for any case
- Delete/remove existing events

#### Connect Model Panel

Click **Connect Model** (Configuration section of ribbon):
1. Model list shows only models where the user has Write permissions
2. Use Search field to locate a model; use slider to select; click **Connect**
3. Only one model connectable at a time

#### Create Worksheet Panel

Click **Create** (Case Setup section of ribbon):
1. Check desired event type(s) → click **Create** → worksheet(s) generated

**Worksheet row structure:**
- **Row 1**: General event worksheet description (editable)
- **Row 3 (default)**: `#Header` row with event-type-specific column names
- **Last row**: `#END` — anything below is ignored
- **Above `#Header`**: Optional `#FilterHeader` / `#FilterEnd` sections for filtering on Pull

**Common columns:**

| Column | Description |
|---|---|
| **Action** | `<empty>` = update existing; `SKIP` = omit; `DELETE` = remove event with ID |
| **&lt;Event&gt; ID** | Empty = create new; populated = modify existing |
| **Calculated** | Which field drives the timing calculation |
| **Color** | Excel Fill color → event color in AUS |
| **Locked?** | Lock event from further edits |
| **Enable Optimization?** | True = allow optimization |

**Filter Header:** Between `#FilterHeader` / `#FilterEnd` — enter resource names (tanks, blenders, etc.) to restrict Pull to those resources only.

> **Important:** Header labels/columns can be renamed or shifted, but **data must remain aligned with original content**. Range names must not be changed.

#### Global Settings Dialog

Click **Settings** (Configuration section). Settings persist with the workbook.

**Settings Tab:**

| Setting | Description |
|---|---|
| **Pull Data From Case** | Case to pull event data from |
| **Push Data To Case** | Case to push data to |
| **Push To A New Case** | If checked, creates a new case on Commit |
| **Simulation Horizon** | Toggle on = use model horizon; off = enter custom Start/Duration |

**Mapping Tab:** Maps each Excel worksheet to an AUS event type; toggle **Active** to include/exclude sheet in Commit/Pull All.

#### Ribbon Actions

| Action | Purpose |
|---|---|
| **Pull / Pull All** | Download event data from AUS to active worksheet / all worksheets |
| **Validate / Validate All** | Check for errors before committing (Skip rows omitted from validation) |
| **Commit / Commit All** | Write worksheet changes to AUS model |

> Commit runs pre-validation. Warnings allow continuation; errors halt processing. If **Push To A New Case** is enabled, you are prompted for a new case name.

> Multiple worksheets of the same event type may receive duplicate data during Pull All unless `#FilterHeader` filtering is applied.

### Schedule By Exception

**Schedule By Exception** automatically generates non-editable Default events using flowsheet default parameter values — schedulers only need to manage deviations from the defaults.

- Applicable to: **Submodels, Feed Units, Custom Units**
- **Mixer/Splitters** are always scheduled by exception (not configurable)
- **Parameter Group** events default to this mode
- Requires all parameters have default values defined on the flowsheet unit property panel
- Auto-generated events appear on the Gantt as read-only; event property panels are read-only

> If any required default value is missing, the simulator still attempts assignment but results may be suboptimal.

### Creating a New Scheduling Model

The **New Schedule Model** dialog defines the core model shell:

| Field | Purpose |
|---|---|
| **Model Name** | Unique AUS model identifier |
| **Description** | Optional model description |
| **Input Data Server / Database** | Source data location |
| **Results Data Server / Database** | Result storage target |
| **Site Catalog** | Optional catalog connection used during setup/import |

### GraphQL APIs

AUS supports **GraphQL APIs** for programmatic access to model data, events, and simulation results.

**Connection URL:**
```
https://<fully_qualified_machine_name>/scheduling/api/v1/model/<modelName>/public/graphql
```
Replace spaces in `<modelName>` with `%20`. Use a GraphQL client (e.g., Altair).

#### Query Fields (fetch data)

`Case`, `materials`, `properties`, `propertyGroups`, `streams`, `units`, `eventAttributes`, `versionControl`, `locations`, `flowsheetUnitAttributes`, `commitmentAttributes`, `commitmentStrategyAttributes`, `publishSets`, `planningTargetSets`, `planningTargetEnvelopes`, `planningTargetCampaign`

#### Mutation Fields (modify data)

`case`, `eventAttributes`, `versionControl` (checkinChanges, discardChanges, createRestorePoint), `flowsheetUnitAttributes`, `units`, `publishedResults`, `locations`, `streams`, `materials`, `commitmentAttributes`, `commitmentStrategyAttributes`, `publishSets`, `planningTargets`

> Use the **Docs** panel in the GraphQL client to browse API arguments, types, and fields per endpoint.

---

### Blend Details Page

The **Blend Details** page creates custom blend reports showing material composition and properties per case.

**Report structure (per tab):**
- **Components** — blend component names and recipe percentages
- **Sources** — tank names and quantities
- **Properties** — all related material properties (color-coded if at bounds)

Actions:
- **Add**: Click +, enter unique name + optional description, search/select blend materials, click Create
- **Edit**: Click Edit to update name, description, or included blends
- **Delete**: Click X on report tab (at least one report always required)
- **Export**: Click export icon → `Blend Details.xlsx` in browser Downloads

---

### Advanced Optimization: Tower Yields

Starting with V12.1, AUS extends optimization to atmospheric and vacuum tower yields via **Property Specs** on the unit's flowsheet property panel.

- Define default product yield specifications (flowrates or % of total crude feed) — treated as **soft constraints**
- When swing cuts are configured as operating parameters, the optimizer modifies them within configured ranges to meet specs
- Swing cuts can be fixed by setting Min = Max
- Defaults can be overridden from Work Area → Unit Event Details (Feed Specs tab) or Limit Setting dialog

---

### Inclusive Property Mixing

When streams mix (via a Mixer) or rundown streams flow into a tank, the resulting mixture contains the **union** of all input stream properties — no properties are dropped.

Verification workflow:
1. Select the output stream or tank on the flowsheet
2. Open the property panel
3. Property list shows the union of input stream/tank properties

---

### Importing Submodel Configurations from Site Catalog

Submodel and simulation configuration published from AUP to Site Catalog can be imported into AUS.

**Pre-conditions:** AUP has published to Site Catalog; AUS model references the same Site Catalog (check via General Settings → Site Catalog Connections).

**Workflow:**
1. Flowsheet → Operations panel → **Add Flowsheet Components → Site Catalog**
2. Drag submodel to flowsheet
3. Double-click unit → **Submodel Simulation → Import**
4. Select simulation unit in **Import Modes** dialog
5. Optionally select correlations to include (appear on Custom Correlations page)

Imported modes include all properties; properties classified as **independent** (not calculated) or **dependent** (calculated from index property).

---

### Crude Unit Delayed Transfer (Feed Unit)

AUS simulates feed unit delayed transfer events using **Transportation Mode** delay mechanics.

**Pre-configuration:**
1. Add **Transportation Mode** to flowsheet; define its **Volume** (used in delay calculation)
2. Add **Feed Unit** to flowsheet; connect a destination unit

**Delay calculation:** `Delay = Transportation Mode Volume ÷ Event Flowrate`

> If event Basis is Mass, specific gravity of the first feed tank is used in the delay calculation.

**Workflow:**
1. Add Work Area resources (feed unit, transport mode, tanks)
2. Create a **Feed Unit event** (Start Time, Rate, Quantity)
3. On the event &lt;Feed Unit&gt; tab, select **Receive via** → choose a configured transport with volume defined
4. Add tanks to the Source area
5. AUS automatically creates two time-delayed transfer events:
   - One removes material from the Transport resource
   - One withdraws remaining volume from source tank(s) (back-dated by delay)

---

### Code Editor JavaScript Functions

The **Code Editor** (Flowsheet Data panel) allows JavaScript scripting for custom units. Four API classes are provided:

#### Simulator Class

| Function | Description |
|---|---|
| `Simulator.getData(variables)` | Retrieve data for specified variable paths (array of strings) |
| `Simulator.setData(data)` | Write data to simulator variables (key-value object) |
| `Simulator.getTimeWindowStart/End()` | Get simulation horizon start/end as Date objects |
| `Simulator.getPeriodStart/End/Length()` | Get current period start, end, or length in days |
| `Simulator.getAllTanksNames()` | Array of all tank names |
| `Simulator.getTanksInServices(services)` | Tanks in specified material services |
| `Simulator.getAllProcessUnitNames()` | Array of all process unit names |
| `Simulator.getAllFeedUnitNames()` | Array of all feed unit names |
| `Simulator.getAllMixerNames()` | Array of all mixer names |

#### UnitCache / GlobalCache Classes

| Function | Description |
|---|---|
| `UnitCache.getOrSet(key, create)` | Get from per-unit cache or create if missing |
| `GlobalCache.getOrSet(key, create)` | Get from shared cross-unit cache or create if missing |
| `.get(key)` / `.set(key, value)` | Standard cache get/set |

**UnitCache** is private per unit; **GlobalCache** is shared across all custom units.

#### Log Class

| Function | Description |
|---|---|
| `Log.error(message)` | Log an error |
| `Log.warning(message)` | Log a warning |
| `Log.info(message)` | Log info (debug); only added if "Log Data" is enabled |

#### DataRequest Class

Efficient multi-period data querying:
```js
const req = new DataRequest(key, () => variablePathArray);
const result = req.Execute(); // returns key-value object
```

> Model object properties and parameters can be dragged into Code Editor as arguments from the Model Data area.
