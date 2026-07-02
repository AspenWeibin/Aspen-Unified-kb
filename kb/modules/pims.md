# Aspen Unified PIMS / Multi-Site PIMS Knowledge Base

## Quick Map

| Goal | Go to |
|---|---|
| Understand PIMS coverage in this KB | [Coverage Map](#coverage-map) |
| Understand the single-site flowsheet workspace | [Single Site Model](#single-site-model) |
| Understand input data structure | [Data Management and Primary Input Data](#data-management-and-primary-input-data) |
| Configure purchases, sales, and inventory policy | [Purchases, Sales, and Inventories](#purchases-sales-and-inventories) |
| Configure capacities, bounds, blend controls, and pools | [Capacities, Bounds, Blend Limits, and Pools](#capacities-bounds-blend-limits-and-pools) |
| Configure submodels and run submodel simulations | [Submodel Configuration and Simulation](#submodel-configuration-and-simulation) |
| Configure crude towers and distillation modes | [Distillation Modes and Tower Configuration](#distillation-modes-and-tower-configuration) |
| Configure materials, utilities, groups, and properties | [Materials, Utilities, Groups, and Properties](#materials-utilities-groups-and-properties) |
| Manage assay libraries, model assays, and crude assay data | [Assay Library, Model Assays, and Crude Assay Data](#assay-library-model-assays-and-crude-assay-data) |
| Configure product blends and ABML correlations | [Product Blends and ABML Correlations](#product-blends-and-abml-correlations) |
| Configure flowsheet objects and streams | [Flowsheet Property Panels](#flowsheet-property-panels) |
| Use pooling on the flowsheet | [UPool Unit](#upool-unit) |
| Group topology into subflowsheets | [Subflowsheets](#subflowsheets) |
| Read results for an individual submodel | [Submodel Summary Page](#submodel-summary-page) |

---

## Coverage Map

This module corresponds to the PIMS area tracked in `.github/kb/progress.md`. The source help is broad, so the KB groups related help topics into coherent operational sections rather than transcribing pages one by one.

### PIMS Areas in Scope

| Area from progress | Current KB status |
|---|---|
| Single Site Model | Complete: model creation, migration, flowsheet, master data, assays, blending, cases, reports, settings, dialogs, Data Hub, and workflows covered below |
| Multi-Site PIMS Model | Complete: global/local model, map, network tables, catalog/site capabilities, Planner integration, and ExPO workflow covered below |
| Unified Planning Concepts/References | Complete: shared workflows, diagnostics, Excel add-in, case format, matrix names, reports, reconciliation, streams, and group/material operations covered below |
| AUP Troubleshooting | Common convergence, report, permission, assay, and privilege issues covered below |

### Current Slice Covered

The completed PIMS KB covers these **Single Site Model** foundations:

- Flowsheets
- Planning Flowsheet Object Property Panel
- UPool Unit
- Working with a Subflowsheet
- AUP Submodel Summary Page

It also covers the single-site input-data slice:

- Data Management
- Primary Input Data
- Overview - Purchases and Sales
- Purchase/Sales Tables
- Inventory Table
- Inventories Dialog Box
- Group Summary Screen

The constraints and blend-control slice covers:

- AUP Capacity, Limits & Bounds Summary Page
- Capacities and Process Limits
- Bounds
- Blend Limits
- Blend Component Pumping Limits
- Blenders Summary
- Blender Configuration
- Blend Specification
- Pool Summary
- Pool Configuration

This pass also covers submodel configuration and simulation views:

- AU Submodel Overview
- AU Submodel Configuration
- AUP Fixed Recovery Tower Configuration
- AUP Hybrid Model Overview
- AUP Hybrid Model Configuration
- AUP Non-linear Submodel Overview
- AUP Non-linear Submodel Configuration
- AUP Submodel Configuration
- AUP Simulation Summary
- AUP Simulation Configuration
- Aspen Unified Simulation Status Codes

This pass also covers crude tower and distillation mode configuration:

- Distillation Modes Summary
- AUP Distillation Mode Flowsheet
- Distillation Towers Summary Screen
- Tower Configuration
- Creating Crude Towers
- Defining Crude Distillation Modes
- Column Configuration
- Configure Crude Slates
- Configure Cut Properties
- Assay Cutting Data
- Utility Consumption

This pass also covers material, utility, group, and property master-data configuration:

- Material & Properties Summary
- Materials Table
- Material Details
- AUP Material Services
- AUP - Utility Summary
- AUP - Groups Summary
- Group Configuration
- Properties Summary
- Property Configuration
- Property Library

This pass also covers model assays and crude assay data:

- Assay Library - Overview
- Model Assay Table
- Add Assays Screen
- Download Assay
- Excel Import File Format
- Assay Details
- Assay - Create Blend
- Assay Input
- Characterized Results
- Flash Assay Dialog Box
- Assay Plot
- Plot Types
- Crude Summary

This pass also covers product blend and ABML correlation configuration:

- Overview - Blends
- Blend Summary
- Blend Details
- ABML Correlation Summary
- ABML Correlation Configuration
- Add ABML Correlation Dialog Box
- ABML Overview
- Introduction to ABML
- ABML Correlations
- Second Order Correlations
- Component Base Correlations
- Working with ABML
- Modifying the Model to Accommodate ABML Correlations
- Using the Output of One ABML Correlation as the Input for Another
- CARB
- Phase 2 Gasoline Emissions (CARB)
- Phase 3 Gasoline Emissions (CARB3)
- Blend Stock for Oxygenate Blending (CARBOB)
- Working with CARBOB
- Setting up CARBOB
- Selecting which Correlation to Include in Table ABML for CARBOB
- Blend Stock for Oxygenate Blending (CARBOB2)
- Cetane Improver
- ASTMD976 Cetane Index
- ASTMD4737 Cetane Index 4
- ASTMD4737-96a Cetane Index
- Cold Filter Plug Point - CFPP w improver
- Road Octane
- Driveability Index
- Driveability Index with Ethanol
- Percent Off at 200 and 300
- EPA Gasoline Emissions
- Volume Percent Off
- User-Defined Property
- Blend Stock for Oxygenate Blending (RBOB)
- Motor Gasoline D86 T20
- ASTMD4814 TV/L Linear
- ASTMD4814 TV/L Non-Linear
- Vapor Lock Index
- Cloud Point
- D86 Percent Off
- Available ASTM to TBP Conversion Methods
- APIDataBook3A1 (THREEA11)
- APIDataBook6th (SIXORDER)
- HCProcessing (HC94)
- None
- D86 Index 2
- Flash Point
- User-Defined Blend Value
- User-Defined Index
- Mobil Transformation
- D86 Percent Off (ND86)
- Pour Point
- Reid Vapor Pressure
- D86 Blend Value 1
- Viscosity
- D86 Percent Off for CARBOB
- D86 Index 2 for CARBOB
- Reid Vapor Pressure Index for CARBOB
- D86 Linear T50 for CARBOB
- D86 Linear T90 for CARBOB
- UBML Overview
- PUBML.dll
- Constructing the PUBML.dll
- Adding PUBML.dll Correlations to AUP
- UBML Functions
- UBML General Functions
- ubml_InitializeAllocate
- ubml_Free
- ubml_ErrorHandler
- UBML Correlation Functions
- Correlation General Functions
- ubml_GetCorrelationCount
- ubml_GetCorrelationId
- ubml_GetCorrelationType
- ubml_GetIndexPair
- Correlation Calculation Functions
- ubml_CalcPimsPropValue
- Correlation Coefficient Functions
- ubml_InitializeCoefs
- ubml_GetCoefCount
- ubml_GetCoef
- ubml_SetCoefValue
- Correlation Input/Output Property Functions
- ubml_GetCorrelationInpPropCount
- ubml_GetCorrelationInpPropId
- ubml_GetCorrelationOutPropCount
- ubml_GetCorrelationOutPropId
- Periodic Models
- Period Screen
- New Period Dialog Box
- Advanced Modeling Summary

This pass also covers the first Multi-Site PIMS model slice:

- Multi-Site PIMS Model Overview
- Multi-Site PIMS Model Map
- Map Properties Panel
- Add Plant to Multi-Site PIMS Map
- New Material Demand Dialog Box
- New Material Supply Dialog Box
- New Transport Dialog Box
- Demand
- Multi-Site PIMS Supply Table
- Multi-Site PIMS Transport Table
- Depot Inventory
- Multi-Site Network Configuration
- Planner Network Results Screen
- Global Group Summary
- Transport Solution Charts on a Multi-Site PIMS Map
- Supply Chain Catalog
- Multi-Site PIMS Site Capabilities
- Multi-Site PIMS Apply Site Capabilities
- Creating a New Multi-Site PIMS Model
- Creating a Global Multi-Site PIMS Model from a Local Model
- Editing Plant Specific Case Data
- ExPO for Petroleum Supply Chain Planner and Aspen Unified Planning
- Migrate an Existing PIMS Model Dialog Box - for XPIMS/PPIMS models

This pass also covers shared Unified Planning concepts and references:

- Apply Price Data Set in Planning Models
- AUP AspenTech Virtual Advisor (AVA)
- Creating or Adding a New Material
- Displaying Case Changed Values
- PIMS CASE Table Format
- Deploying the Aspen Unified Excel Add-in
- Working with the Excel Add-in
- Infeasibility Analysis
- LOS Streams
- Working with Groups
- Adding to an Existing Material Group from Summary Tables
- Matrix Column Names
- Matrix Row Names
- Multi-Start Progress Charts
- Planning Targets from Aspen Unified PIMS
- Purchasing Crudes
- Reconciling Updates
- Report Sections
- Reserved Tag Names and Other Rules
- Working Cells Associated with Cases
- AUP - Working with Flowsheet Streams
- AUP Troubleshooting
- Rows Table
- Ratios
- Virtual Pool Summary
- Virtual Pool Details
- MIP Overview
- MIP Table
- Creating and Configuring Gas Plants
- Gas Plant Summary
- Gas Plant Configuration
- Additives Table
- Additive Detail Screen
- Additive Dialog Box
- Additive - New Response Point Dialog Box
- Economic Summary
- Catalog Page - AUP/Multi-Site PIMS
- Site Catalog
- AUP - Planning Target Details/Envelopes
- Price Catalog Page
- Aspen Unified PIMS Work Areas
- AUP - Configuring a Work Area and Widgets
- AUP - Work Area Configuration Dialog Box
- Job Status
- AUP Matrix Comparison
- AUP Output Diagnostics
- Case Summary
- Case Details
- Run Cases Dialog Box
- Case Sets
- Case Set Details
- Input Solutions
- Parametric Analysis Overview
- Parametric Case Studies Screen
- Case Study Configuration
- Case Comparison Report
- Reports Downloads
- Report Map Solution Reports
- Working With Reports
- Report Settings
- Across the Page Report
- Data Validation Report
- AUP Submodels Summary Table
- Submodel Calculator
- Working with Submodels
- Nonlinear Curve Summary Table
- Nonlinear Curve Details Screen
- New Nonlinear Curve Dialog Box
- Nonlinear Equations
- Importing Nonlinear Equations
- Publish Submodels and Simulation Configurations to a Site Catalog
- Nonlinear Recursion
- Recursion
- Site Catalog Capabilities

---

## Overview

Aspen Unified PIMS is the planning model environment in Aspen Unified. In the current source set, the core authoring experience starts from the **flowsheet**, where users define topology, connect units and streams, group content into subflowsheets, and inspect configuration or results through property and summary panels.

For the topics covered in this slice, a recurring rule is that **structural model edits require the active case to be the Base Model/Base Case**.

---

## Single Site Model

The single-site modeling workflow in this slice centers on these objects and views:

| Workspace | Purpose |
|---|---|
| Flowsheet | Main topology canvas for units, subflowsheets, materials, streams, and model issues |
| Add Flowsheet Components panel | Add units, streams, stockpiled entities, and catalog assets |
| Object Properties panel | Configure a selected stream or unit |
| Subflowsheet | Group units into a navigable submodel boundary |
| Submodel Summary page | Review feeds, yields, utilities, limits, and materials after a run |

### Planning Model Creation

The **New Planning Model** dialog creates a new AUP planning model or imports an AUP snapshot. Creating a model requires at least the Creator role. When importing a snapshot, the same dialog appears as **Import a Planning Model Snapshot**.

Model creation fields:

| Field | Meaning |
|---|---|
| Model name | Required unique name in Unified, up to 60 characters; `/ \ + * % & ? ' : < >` are not allowed. |
| Description | Optional description, up to 255 characters. |
| Model type | Standard by default, or Period; once defined, model type cannot be changed. |
| Model basis | Volume by default, or Weight; the selected basis is used throughout the model and cannot be overwritten. |
| Assay data source | Built-in Assay System enables assay cutting workflows; Import of PIMS Table ASSAYS requires imported `ASSAYS`, `CRDDISTL`, `CRDCUTS`, and `ASSAYLIB` tables and disables several built-in assay workflows. |
| Input / Results server and database | Select where model input and result data reside. |

Common AUP workflow entry points:

| Area | Typical workflows |
|---|---|
| Models | Assign roles, compare planning models, create a new planning model, copy an existing model, manage snapshots, or migrate PIMS models. |
| Cases | Run cases, add cases, import PIMS CASE tables, review message/error logs, and view constraints after a run. |
| Data | Import planning data, update pricing data, and create material groups from summary screens. |
| Distillation Modes | Work with distillation modes and configure crude towers. |
| Flowsheet | Add text annotations and access unit properties. |

Copying an existing model creates a new model using a prior model as the starting point, commonly for a new planning month. From Home, use the source model's options menu, select **Copy Model**, provide a new model name and description, select server/database targets, and copy. The new model appears on the Home page.

### Migration and PIMS Translation Notes

AUP supports migration of standard and periodic Aspen PIMS models version 7.0 or greater. Before migration, the PIMS model should run successfully using PIMS AO, and the AO model setting must be enabled.

Migration and translation rules:

- Migration warnings and errors from the first migration step identify model content that was not migrated.
- Alternate tags are supported in Purchases and Sales; they are not supported in other model structures such as PCALC and submodels. Starting with V12.1 migrations, alternate tags for materials in groups are automatically included and **Enable Alt Tags in material groups** is selected.
- If a model has an undisposed deferred cut, AUP cannot use the built-in assay system. The model can still migrate, the deferred cut is added as a material with properties, and it appears in distillation mode and Assay Cutting Data views but not on the flowsheet.
- PIMS `P Rows` correspond to AUP parameters, and P-PIMS corresponds to Period models.
- `GALS` maps to the General Settings TEL conversion factor.
- `PGUESS` values are edited as material/property estimated values, including default and period-specific values for periodic models.
- PIMS `GASES` membership maps to the material **Use Gas UOM** option.
- `VPRICE` on weight-basis migrated models maps to **Volume-based Pricing** on the material Definition tab.

Unsupported PIMS areas during migration include selected blending, distillation, supply/demand, miscellaneous, and periodic tables such as `PROPRNG`, `NLPROP`, `SWING`, `CRDPCALC`, `CRDQUAL`, `CRDALLOC`, `CRDTANKS`, `RECEIVE`, `SHIP`, `CRDMIX`, `DISPLAY`, `EXPERT`, `GOBOUNDS`, `PARAOBJ`, `PRNTABS`, `PERCASE`, `ACCUQUAL`, `PDIST`, `PSPAN`, `PBLNMIX`, `PBLNSPEC`, and `PBLNPER`. Multi-Site migrations also add unsupported global-period tables such as `GBLNPER`.

PIMS CASE keyword handling:

| Keyword | AUP handling |
|---|---|
| `CASE` | Cases are created through the case hierarchy or list. |
| `EMPTY` | Clear the value manually in the table. |
| `LOADSOL` | Use case-specific input solution on Case Details. |
| `SAVESOL` | Use case-specific output solution on Case Details. |
| `MODEL` | Supported when importing cases; also supported when migrating global-model cases except when a case is promoted to the base case. |
| `MODIFIES` | Implied by the case hierarchy position. |
| `REPLACE` / `REPLACEALL` | Supported for limited tables and configured on the Case Details Advanced tab. |
| `TABLE` | Changes are made directly to the referenced table. |
| `EXPERT`, `FBR`, `GENERATE`, `PERIOD`, `SAVEXLP` | Not supported. |

RFG migration is modeled through ABML correlations and property definitions. When `TYPE` values exist in `BLNSPEC`, migration adds EPA, CARB, CARB3, or CARB3M correlations as needed and maps RFG row names, scale values, CARB options, index flags, and output tags into ABML structures.

### Periodic Models and Period Management

Periodic models extend a standard Aspen Unified planning model with period-specific data so complex multi-period problems can be solved. They allow operating variables, purchases, sales, process submodel operations, product blending, and inventories to vary by period; they also support inventory carryover, inventory min/target/max policies, present-value objective factors, and multi-period blending recipe control.

Model-type rules:

- A model is periodic when **General Settings > Application > General > Model Type** is **Periodic**.
- Once a model is set to **Periodic**, it cannot be switched back to a standard model.
- Period-specific data is identified by appending the period tag to the existing field name, such as `Min1` for period `JAN (1)`.
- The application toolbar shows enabled periods in the Period Selector. Disabled periods are omitted from the selector.
- Data throughout the application follows the selected period or periods. Arrow navigation is available only when one period is selected.

Period-specific data can appear in purchases/sales for materials, utilities, and groups; inventories; capacities; blender capacities; process limits; blending specifications; blend component pumping limits; blend component MIP thresholds and limits; material property specifications; rows; bounds; and ratios.

The **Periods** table is available only for periodic models and must contain at least one period. It can also be imported through the Excel Add-in for Base Model and local/global model case changes.

Period table columns and controls:

| Area | Meaning |
|---|---|
| Period | Displays `Name (Abbreviation)` from the Period dialog. |
| Description | Case-variant description; changed values can inherit and are highlighted when different from Base Model. |
| Duration | Period length in the model time UOM; valid range is `0` to `999`; fractional lengths such as `1.5` days are allowed; blank duration assumes `1`. |
| PVF | Present value factor applied to revenue and cost items so the LP objective becomes net present value; blank assumes `1.00`; annual discount can also be applied from General Settings. |
| MIP | Case-variant flag controlling whether mixed-integer processing is applied for the period; if disabled, only the continuous solution is solved. |
| Disabled | Excludes the period from active-case execution. Base Model disabled state is inherited by child cases unless overridden. Disabling a middle period shows a warning. |
| Period start date | Optional default start date for Run Cases and Apply Site Capabilities; it does not affect model settings or the model itself and can differ by case. |

Period table operations:

- Add a new period from the add button, or insert a period after a selected row from the Table Tray.
- Export in grid format or PIMS format; PIMS-format export includes changed information for the selected case and does not export disabled rows.
- Import periods into the currently selected case. The case name referenced in the file is ignored; the Application Bar case controls the import target.
- Delete, edit, copy, enable/disable, enable/disable MIP, and reorder periods from the table and Table Tray.
- Reordering period rows changes display/execution order in the table workflow but does not affect case execution results.

The **Period** dialog adds, copies, and edits periods. A model supports up to 36 defined periods, counting both enabled and disabled periods. The add button is shown only while the model has fewer than 35 periods.

Period dialog fields:

| Field | Rules |
|---|---|
| Name | Required, unique, max 20 characters. |
| Description | Optional, max 80 characters. |
| Abbreviation | Optional one-character unique alphanumeric period identifier. It appears in parentheses after the period name and is appended to period-specific field names. It cannot be edited after creation; delete and recreate the period to change it. Avoid special characters. |

### What the Flowsheet Shows

The planning model flowsheet is the first page shown when a model is opened. It is used to build and review model topology and to visualize:

- Units, subflowsheets, and process limits
- Crude distillation mode configurations
- Model limits such as capacities and process limits
- Materials
- Ports and streams

It also exposes model completeness and constraint violations, so it is not just a drawing canvas; it is also a structural and diagnostic view.

### Access

- Use the Navigation panel and click the Flowsheet icon.

### Key Flowsheet Behaviors

| Capability | Details |
|---|---|
| Automatic connections | Builds connections between feed and product ports that share the same material service |
| Stream creation | Streams can be added from the toolbar or from the flowsheet components panel |
| Constraints and penalties overlay | Shows violations on the flowsheet and filters related detail in the side panel |
| Data Inspector | Hover tooltips show stream properties, unit solution status, contribution, and shadow pricing context |
| Search | Search by entity name, description, or abbreviation and center/highlight the matching unit or stream |
| Bookmarks | Save and reuse flowsheet zoom/position states |

### Operations Panel on the Flowsheet

The right-side operations area provides quick access to:

| Panel | Use |
|---|---|
| Add Flowsheet Components | Add units, streams, stockpile objects, and catalog items |
| Property Details | Open details for the selected unit or stream |
| Constraints and Penalties | Review violations and stream tracing related to the current flowsheet |

Text annotations can be added as free-floating notes on the planning flowsheet or attached to a specific unit. Users can create an annotation from the flowsheet shortcut menu or drag the annotation icon from Add Flowsheet Components. The editor supports up to 150 characters and formatting controls. Attached annotations move with the unit; detaching can be done from the link icon or by cut/paste. Annotations can be edited, deleted, cut, copied, and pasted from the shortcut menu; for security, paste should use Ctrl+V instead of the disabled paste icon.

After running cases, constraints can be inspected from the Flowsheet. Open the Flowsheet, use the Constraints tab in the Flowsheet Sidebar, and enable **Show Constraints**. Units with constraints are highlighted in red with a count indicator; opening the unit details and selecting **Capacities and Limits** shows the related limits and constraints.

---

## Flowsheet Property Panels

PIMS uses two related property-panel concepts.

### 1. Add Flowsheet Components Panel

This panel is the general modeling palette for adding structure to the flowsheet.

Key behaviors:

- It is only meaningful for structure edits when the active case is **Base Model**.
- Units can be dragged onto the canvas.
- Streams can be searched and added.
- Stockpile shows defined entities that are part of the model but not yet placed on the flowsheet.
- Catalog shows site catalog assets not yet added to the flowsheet.

#### Flowsheet Layout Import/Export

| Action | Behavior |
|---|---|
| Import | Reads an Excel layout file containing unit and stream layout information |
| Export | Writes the current layout to FlowsheetLayout.xlsx in the browser download folder |

Important import rules:

- Units without a valid location go to an unallocated subflowsheet.
- Missing icon or size values fall back to defaults.
- If Parent is blank, the unit becomes a child of the main flowsheet.
- Blank cells on update keep the existing value.

### 2. Properties Panel for a Selected Object

This panel configures a specific stream or unit.

Common rules across many entities:

- An incomplete icon indicates required configuration is missing.
- Structural edits require the active case to be **Base Model**.
- Standard fields commonly include **Name**, **Description**, **Abbreviation**, and **Color**.
- Name length for common unit fields is limited; abbreviations must be unique where required.
- Assigning material services is optional, but it enables automatic connection behavior when feed and product ports share the same service.
- Balance and Limits tabs populate only after cases are run.
- In periodic models, Balance and Limits are also period-sensitive.

### Stream Properties

Streams expose at least two result-oriented areas:

| Tab/Area | Purpose |
|---|---|
| Configuration | Maintain Properties and Derived Properties |
| Balance | Show stream-specific results after execution |

Useful stream functions:

- **Validate Properties** checks missing required properties across submodels.
- Properties can be added singly or in bulk.
- Derived properties can be created from property, material, multiplier, and bias inputs.
- Properties can be deleted row-by-row.

### Utility Streams

Utility streams are handled differently:

- They do not expose the same configuration model as non-utility streams.
- Their Balance tab shows consumers, producers, and utility balance summary.
- Consumer/Producer links can navigate back to the related submodel summary.

---

## UPool Unit

UPool is a special flowsheet unit used for pooling similar materials.

### Core Behavior

- A UPool can consume **any number of feeds**.
- It produces **exactly one product**.
- Any non-utility stream can be connected to its feed ports.
- It can be used as the basis for automatic connections and simple validation by assigning a material service.

### Add a UPool

1. Set the active case to Base Case.
2. Open the flowsheet.
3. Open Add Flowsheet Components.
4. Drag the Pooling icon onto the flowsheet.

### UPool Properties

| Field/Tab | Meaning |
|---|---|
| UPool name | Default is system-generated UPool nnn; max 20 characters |
| Color | Visual styling for the unit |
| Description | Optional description |
| Material service | Shared service used for pooling logic and auto-connection support |
| Configuration > Feeds | Select existing feed streams |
| Configuration > Product | Select the product material |
| Configuration > Product Properties | Add existing properties used in configuration |
| Balance | Shows case/period-specific material balance results after execution |

On the Balance tab, stream links navigate to stream details and the table shows the applicable UOM and solved activity per day/time unit.

---

## Subflowsheets

Subflowsheets provide a way to group part of a flowsheet into a manageable boundary.

### What a Subflowsheet Is For

- Organize a subset of the model under one node
- Configure the included entities from one location
- Navigate between parent and child flowsheets
- Aggregate balances, utilities, and limits across internal units

In AUP, creating, configuring, or deleting a submodel flowsheet requires the active case to be the **Base Model**.

### Add and Manage a Subflowsheet

| Action | Summary |
|---|---|
| Add | Drag the subflowsheet icon onto the flowsheet, then open properties and complete configuration |
| Delete | Delete key or context-menu Delete; deleting the subflowsheet also deletes attached units |
| Convert selected entities | Select multiple units and use Create Subflowsheet from the context menu |
| Add units later | Drag new or existing units into the subflowsheet |

### Connections Across the Boundary

Subflowsheets do not own separate model structure, but they can represent connections between inside and outside entities.

Important behaviors:

- External-to-internal or internal-to-external streams are added using the normal linking tool or stream palette.
- Removing an **outside** connection removes the exterior link, but internal unit connections remain and the stream is not deleted.
- Removing an **internal** connection updates the exterior node, but the stream itself is still not deleted.

### Navigation

| Navigation task | Supported methods |
|---|---|
| Enter a subflowsheet | Double-click, press Enter, or use context-menu View |
| Return to parent | Browser back, context-menu Go to parent flowsheet, or Ctrl+Backspace |
| Move between levels | Use breadcrumbs |

### Subflowsheet Properties

| Area | Meaning |
|---|---|
| Name | Max 20 characters; must be unique |
| Abbreviation | Required; three alphanumeric characters; missing value causes execution errors |
| Color | Subflowsheet icon color |
| Description | Optional text |
| Configuration | List of included units |
| Balance | Aggregated feeds and yields, case/period dependent |
| Utilities | Aggregated utility view |
| Limits | Aggregated limits view |

The Balance tab can show a single stream property for solution review. By default, zero-flow streams are hidden.

---

## Submodel Summary Page

The Submodel Summary page is the result-oriented detail page for a specific submodel or unit.

### Access

- From the flowsheet, right-click the unit and choose Details.
- Or navigate through Flowsheet breadcrumbs and click the desired submodel name.

### Availability Rules

- The main tabs display useful data after the model is run.
- Hybrid models add a separate **Hybrid Model Variables** tab.

### Feeds and Yields

This tab has separate feed and yield tables.

Key columns:

| Column | Meaning |
|---|---|
| Process Feeds / Process Yields | Material name; links to material details |
| UOM | Measurement basis determined by material purchase/sell basis and UI settings |
| UOM/time | Flow amount per time unit |
| Vol% of Feed / Wt% of Feed | Contribution of the stream to total feed |
| Alternate weight/volume rate | Cross-basis quantity shown using configured WGT/VOL UOM |
| Shadow Price | Shadow price for the feed |
| Shadow Price UOM | Unit of measure for shadow price |
| Quality columns | Driven by reporting configuration and only shown when applicable |

### Utilities

The Utilities tab shows what the submodel uses or generates:

- Utility name
- Units per time
- Cost per time
- Weight per time

### Capacities and Limits

This tab summarizes configured and solved constraints:

| Column | Meaning |
|---|---|
| Limit | Where the limit is imposed |
| Type | Capacity or Limit |
| Min / Max | Allowed operating range |
| Solution | Solved value |
| Max % | Solution divided by Max |
| Marginal | Marginal value at solution |
| Solution Penalty | Total penalty at the solution |
| Penalty | Cost used as an infeasibility breaker when violated |
| Used By | Submodel where the limit applies |

### Materials

The Materials tab lists all consumed and produced materials and lets users inspect:

- Source of the selected material
- Material links to detailed material pages
- Destination of the selected material

Feeds appear above a bold separator and products appear below it.

### Hybrid Model Variables

For hybrid submodels, the Hybrid Model Variables tab lists variables returned by AI Model Builder and exposes editable values such as submodel min/max where applicable.

---

## Economic Summary

The **Economic Summary** page displays solution data for the active case. It requires the active case to have a solution; if no solution exists, execution information is not available.

Access paths:

- Navigation Panel: **Model Data > Economic Summary**.
- Job Status page: select a case with an optimal solution, then use the Economic Summary Table Tray action.
- Flowsheet Operations panel: open Economic Data and select the **Economic Summary** tab to see only the table.

For periodic models, the application bar **Period Options** drop-down controls which periods and default values appear as columns. The **Show** filter is also available for periodic models and lets users view **Rate** versus **Total**.

Header fields:

| Field | Meaning |
|---|---|
| Case | Active case name. |
| Solution Time | Date and time when the solution was generated. |
| Show | Periodic-model filter for Rate versus Total. |

Economic Summary rows:

| Row | Meaning |
|---|---|
| Product Sales | Total revenue from product rows in the Sales table; links to Sales. |
| Feedstock Purchases | Cost of feedstock rows in the Purchases table; links to Purchases. |
| Gross Margin | Product Sales minus Feedstock Purchases, calculated outside the LP objective. For periodic models, inventory drawdown for period `j` is added. |
| Utility Sales | Total revenue from utility sales; links to Utility Sales. |
| Utility Purchases | Total cost of utility purchases; links to Utility Purchases. |
| Inventory Holding Costs | Periodic-only holding cost charged for inventory in period `j`; calculated outside the LP objective using solved-matrix columns. |
| Target Inventory Holding Costs | Periodic-only value calculated from Inventory Holding Cost and Target entries. It is not included in the objective because target-level holding cost is constant; only deviations from target enter the objective. |
| Penalty Cost | Cost charged for not meeting target levels. It is calculated outside the LP objective using solved-matrix columns and appears when infeasible-solution penalties are enabled for the job or globally. |
| Objective Function | Objective function value for the active case. |

---

## Data Management and Primary Input Data

PIMS separates model information into three broad classes:

| Data type | What it represents | Typical location |
|---|---|---|
| Input Data | Scenario-specific operating and commercial inputs used for case analysis | Primary Input Data area |
| Structural Data | Model structure and master data such as materials, components, and flowsheet configuration | Flowsheet, model-data pages, model management |
| Output Data | Results from execution, including limits, constraints, marginals, and report values | Flowsheet overlays, reports, summary pages |

### Primary Input Data Summary

The **Primary Input Data** page is the main entry point for single-site case-oriented commercial and operating inputs. It links to purchases, sales, capacities, limits, bounds, and related import status.

Key behaviors:

- Imported input data is applied to the **active case** shown in Case Context.
- Import is the standard way to load purchases, sales, capacities, limits, and bounds while preserving the correct model associations.
- The page also shows audit-style import metadata for each input area.

### Primary Input Data Summary Columns

| Column | Meaning |
|---|---|
| Primary Input Data Area | Input area and related subareas |
| Modified in Case | Whether the active case changed that area |
| Last Imported | Time of last import |
| By User | User who last imported the data |

### Common Actions from the Summary Page

| Action | Notes |
|---|---|
| Import Data | Uses correctly formatted PIMS Excel sheets; imported data lands in the active case |
| Open a data area | Navigate by clicking the linked area name |
| Download Imported Files | Downloads all imported source sheets for the model, typically one worksheet per populated input area |

### Import Workflow Notes

- Exporting a specific data area in **PIMS format** is the normal way to get a valid import template.
- Re-importing repeated exports with the same logical file content updates existing imported data instead of blindly creating duplicates.
- This area is the operational bridge between spreadsheet-style PIMS input tables and Aspen Unified case data.
- A restore point is created before import so users can return to the prior state.
- Supported planning imports include purchases, sales, capacities, process limits, blender and blend-component limits, bounds, Multi-Site supply/transport/demand/inventory data, assay cutting data, materials and blends, periods, fixed and estimated properties, cases, submodel matrices, third-party assay tables, `ROWS`, `MIP`, and virtual pools.
- Entity names in the workbook must match the current model; exporting first is the safest way to create a valid edit template.
- `.xlsb` and `.xlsm` files are not supported; use Flexcell-supported Excel files.
- Short-tag models can import short or long tag workbooks; long-tag models cannot import short-tag workbooks.
- If **Data sheets use PIMS short tag format** is selected, imported values maintain three-character tags; otherwise the system treats values as long tags or converts tags to long format.
- The original Excel file is not modified by tag conversion.

Import Wizard flow:

1. Start import from the target page.
2. Select PIMS-supported Excel table/spreadsheet files.
3. Map worksheets to PIMS tables; automap can map obvious sheets without overriding manual mappings.
4. Choose Update, Replace, or Replace only imported rows for each table or row.
5. Choose tag handling if applicable.
6. Review import results and warnings, then close.

Import actions:

| Action | Meaning |
|---|---|
| Update | Adds new valid rows and replaces cells that exist in both the worksheet and current table; blank worksheet cells leave current values unchanged. In case context, existing modified data is not deleted. |
| Replace | Removes existing table data and replaces it with worksheet data. In case context, imported data becomes modified case data; existing uninherited data for that case is removed and replaced by the import. |
| Replace only imported rows | Base Model only; deletes and replaces only rows defined in the worksheet. |

Updating pricing data is a focused import workflow for purchase costs and sales prices. Prices and costs are stored in PIMS-formatted Excel spreadsheets and can also be edited directly on Purchases and Sales tables. To update prices, keep Base Model selected, import from Primary Input Data or directly from Purchases/Sales, map spreadsheet tabs to Purchases and Sales, then choose **Update** to replace only spreadsheet-provided values or **Replace** to replace AUP values with the spreadsheet values.

---

## Purchases, Sales, and Inventories

This slice covers the main single-site commercial input surfaces used to define what enters or leaves the system and how inventory is carried across periods.

### Purchases and Sales Overview

Purchases are the mechanism for bringing materials into the model; sales are the mechanism for taking materials out.

Objects that can be bought or sold include:

- Materials
- Utilities
- Groups of materials or utilities

Groups are important because they let planners apply minimum or maximum buy/sell quantities to a set of materials rather than only to individual rows.

### Standard Input Method

- **SELL**-formatted spreadsheets are the typical way to load product demands, quantities, and prices.
- **BUY**-formatted spreadsheets are the typical way to load feedstock availability and purchase prices.

Typical planning interpretation from the source guidance:

| Input style | Typical meaning |
|---|---|
| `MIN = MAX` | Committed quantity |
| `MIN = 0`, `MAX > 0` | Swing or optional quantity |
| Fixed at zero | Candidate feed/product being evaluated but not currently enabled |

### Purchase/Sales Tables

The Purchase and Sales tables are the Aspen Unified equivalents of the PIMS **BUY** and **SELL** tables. They share almost the same column model, so the page is documented as one combined surface.

#### Access and scope

- Navigate through **Primary Input Data | Purchases** or **Primary Input Data | Sales**.
- If the model is periodic, values are period-sensitive and may show **Default** and **Total** rows through Period Options.
- New rows can only be structurally added in the **Base Model**.

#### Periodic-model behavior

| Special row | Meaning |
|---|---|
| Default | Fallback value applied to periods without an explicit period value |
| Total | Cross-period Min/Max constraint row |

#### Material Purchases/Sales fields

| Field | Meaning |
|---|---|
| Min / Max | Required or allowed buy/sell quantity |
| Solution | Solved quantity in the active case |
| Marginal | Value of one additional unit |
| Cost / Price | Unit buy cost or unit sale price |
| Money/time and weight/time outputs | Financial and cross-basis result views |
| Disabled | Excludes the row from execution for the active case |
| Priority | Ordering rule used when alternate tags are defined |
| Distress Price / Cost | Infeasibility-breaker value used to allow economically bad but feasible fallback behavior |
| Solution Penalty | Penalty activity at the solution |

Important rules:

- Material basis can be volume or weight and is defined on the material.
- The disabled indicator is case-specific and is highlighted when modified away from default in non-Base contexts.
- Distress values act like controlled infeasibility breakers for min purchase/sales commitments.

New Material Sale/Purchase dialog:

- Purchase and Sales dialogs share the same structure; one creates purchase transactions and the other creates sales transactions.
- New purchase/sale rows can be added only to the Base Model.
- A material can be selected from existing system materials, or a new material can be created from the dialog.
- Multiple purchases or sales can use the same material when an alternate tag and description distinguish the transaction.
- New material abbreviations must be exactly three ASCII characters, case-sensitive, unique, cannot begin with `!` or `*`, and cannot use reserved tags such as `SPG`, `API`, or `SPv`.

Purchase/Sale dialog fields:

| Field | Meaning |
|---|---|
| Purchase/Sale Material | Required material selection or entry point to create a new material. |
| Type | Read-only material type, determined by the selected or imported material. |
| Min / Default Min | Minimum required purchase or sale quantity; blank means `0`; default value applies in periodic models. |
| Max / Default Max | Maximum allowed purchase or sale quantity; blank means unlimited optimal purchase/sale; default value applies in periodic models. |
| Subtotal Group | Report grouping for purchase rows. |
| Cost / Price | Required unit cost for purchases or unit price for sales, defaulted to model-basis units. |
| Distress Price / Cost | Optional infeasibility fallback value in the same units as the purchase or sale. |
| Alt. Tag / Alt. Description | Available when the same material is already purchased or sold and alternate identifiers exist. |
| Priority | Optional positive integer that orders purchase or sale priority. |
| Sell Basis / Price Basis | Sales basis fields; Price Basis is enabled only for weight-basis models when Sell Basis is weight. |

#### Utility and Group tabs

The same commercial logic extends to:

- **Utilities**: separate buy/sell rows for utilities or additives
- **Groups**: aggregated buy/sell constraints across grouped materials or utilities

For groups:

- The group row shows the aggregated commercial constraint.
- Expanding a group shows member rows that are actually present as individual purchase/sale entries.
- Group configuration is maintained on the Group Configuration page, not directly in this table.

### Inventories

The **Inventories** table is only available for **periodic models**. It defines inventory carryover policy for materials or material groups from one period to the next and corresponds to the PIMS **PINV** table.

Important model rule:

- If a material or group is not present in the Inventories table, Aspen Unified assumes its inventory properties do not change between periods.

#### Inventory views

| View | Purpose |
|---|---|
| Inventories by Materials | Define period-by-period inventory policy for individual materials |
| Inventories by Groups | Apply inventory min/max style logic to grouped materials |

#### Core inventory fields

| Field | Meaning |
|---|---|
| Open | Opening inventory for the first period |
| Min | Hard minimum closing inventory |
| Target | Soft target closing inventory |
| Close | Solved closing inventory |
| Max | Maximum closing inventory |
| Change | Close minus Open |
| Penalty Cost | Penalty for falling below target |
| Holding Cost | Carrying cost of inventory over time |
| Opening Cost | Cost of drawing inventory down over the horizon |
| Closing Price | Value of building inventory up over the horizon |

Interpretation notes:

- Values are stored in thousands of the specified UOM.
- Target is a soft planning objective; Min is the hard floor.
- Holding Cost and Penalty Cost shape the inventory policy that the LP will prefer.
- Group penalty cost is additive on top of member-level penalty cost when group constraints are defined.

#### Inventory import/export behavior

| Action | Behavior |
|---|---|
| Import | Uses PIMS **PINV**-format Excel; supports full replace or update of changed values |
| Export in grid format | Human-readable table export; not intended for re-import |
| Export in PIMS format | Produces a re-importable workbook |

### Inventories Dialog Box

The **Inventories Dialog Box** is the row-creation and row-edit surface for inventory materials in periodic models.

It is used to choose a material and set default period policy values such as:

- Open
- Opening Cost
- Default Min
- Closing Price
- Default Max
- Default Holding Cost
- Default Target
- Default Penalty Cost

This dialog is where planners define the default inventory policy that later appears and can vary by period in the Inventories table.

### Group Summary Screen

The **Group Summary Screen** is a result-oriented page for all entities associated with a flowsheet group. It becomes meaningful after the model is run.

It provides four main result tabs:

| Tab | Purpose |
|---|---|
| Feeds & Yields | Aggregate inbound and outbound streams for the group |
| Utilities | Aggregate utility consumption and generation |
| Capacities & Limits | Group-level view of process capacities and limits |
| Materials | Group-level material visibility and navigation |

Important detail:

- Intermediary streams between submodels inside the group are not shown in group feed/yield totals.
- In volume-based models, the group page can optionally include the **LOS** stream in balance calculations.
- Group names appear on the Navigation Panel as labels without abbreviations.

---

## Capacities, Bounds, Blend Limits, and Pools

This slice covers the primary input surfaces used to constrain model feasibility, bound LP variables, and control blending/pooling behavior.

### Capacity, Limits, and Bounds Summary

The **Capacity, Limits & Bounds Summary** page links to capacities, process limits, blend limits, and bounds. Like other Primary Input Data pages, it shows whether each area has been modified in the active case and when it was last imported.

Important behavior:

- Imported data is applied to the **active case**.
- Import is the standard way to load capacities, limits, and bounds from PIMS-formatted tables while preserving model associations.
- The summary page is mainly an entry point and audit surface; the substantive configuration happens in the linked detail tables.

### Capacities and Process Limits

Capacities and process limits both restrict the valid range of model activity, but they differ in how they map into the LP matrix.

| Type | Meaning | PIMS table |
|---|---|---|
| Capacity | Limit on a directly modeled variable or weighted sum of variables, often material flow rate | CAPS |
| Process Limit | Limit on a calculated or indirect model quantity, such as a value derived from delta vectors | PROCLIM |

Common fields:

| Field | Meaning |
|---|---|
| Min / Max | Acceptable operating range; blank or zero means no corresponding limitation |
| Solution | Value after a case is run |
| Marginal | Marginal value after solve |
| Penalty Cost | Infeasibility-breaker cost imposed when the constraint is violated |
| Solution Penalty | Penalty activity at solution |
| Used by | Submodel where the capacity or limit is used |
| Report | Whether the row appears in reports |

Case behavior:

- Values are specific to the selected case in Case Context.
- Non-Base values changed from Base Model are highlighted.
- Entering the same value as the original still counts as a case change.
- New capacities/process limits and reporting rows are created from the Base Model context.

Periodic-model behavior:

- **Default** rows provide fallback period values.
- **Total** rows can define cross-period total Min/Max limits.

### Bounds

The **Bounds** table imposes lower and upper bounds on LP variables and can override generated variable bounds. It combines the PIMS **BOUNDS** and **XBOUNDS** table concepts.

Key fields:

| Field | Meaning |
|---|---|
| LP Column | Variable name; must be unique |
| Min / Max | Lower and upper bounds |
| Solution | LP value at solution |
| Marginal | Marginal value at solution |
| Free | Allows the variable to take negative or positive values by relaxing non-negativity |
| Include/Exclude | Optional TRUST-region solver control when advanced solver configuration is enabled |

Important rules:

- Bounds are case-specific.
- Periodic column names cannot include a `:<period Identifier>` suffix; that suffix is removed automatically.
- Row and column filters help narrow very large bounds tables.
- Variable names can be remapped through the Map Variable dialog when bounds were migrated or imported.

### Blend Limits

The **Blend Limits** page is an entry point with two tabs:

| Tab | Purpose |
|---|---|
| Blend Component Pumping Limits | Constrain total usage of a component across all blends |
| Blenders | Manage physical blender capacities and costs |

For single-site models it is under **Primary Input Data | Capacities, Limits and Bounds | Blend Limits**. Multi-site local models access it under the plant flowsheet in the map.

### Blend Component Pumping Limits

Blend Component Pumping Limits define total material usage across blends and correspond to the PIMS **BLNCAP** table.

| Field | Meaning |
|---|---|
| Blend Component | Material used as a blend component |
| Min / Max | Minimum or maximum allowed total usage |
| Solution | Total component use by all blends in the solution |
| Marginal | Marginal value at solution |
| Disabled | Excludes the component from calculations |

Common operations:

- Add a component from the Base Model using the Add Sources search field.
- Double-click the component name to open material details.
- Import/export BLNCAP-style data for base model or cases.

### Blenders

Physical blenders are plant equipment used to make blends. Aspen recommends creating physical blenders before assigning blends to them.

Key concepts:

- Blenders can exist as individual flowsheet equipment or as part of flowsheet groups.
- Product blenders are often grouped together, while blenders that produce feed streams are often grouped with their associated process units.
- Only a small set of planning/scheduling fields is required: name is fundamental; Min Capacity, Max Capacity, and Blending Cost are optional.

The Blenders Summary table supports:

| Action/Field | Meaning |
|---|---|
| Min / Max | Blender capacity range |
| Cost | Blending cost per model UOM |
| Add / Edit / Delete | Manage blender rows and open detailed configuration |
| Import/export | Exchange blender capacity information in grid or PIMS format |

### Blender Configuration

The **Blender Configuration** page provides details for one physical blender.

| Section | Purpose |
|---|---|
| Name, Description, Abbreviation | Blender identity and tag information |
| Set as default blender | Default blender selection when multiple blenders exist |
| Blends Made in Blender | Links to blends assigned to this blender |
| Blender Capacity | Min/Max capacity values |
| Blender Cost | Cost used for blender operation |

Blends are assigned to a blender from the Blend Details page.

### Blend Specification

The **Blend Specification** table lists property specifications for specification blends and blend groups. It corresponds to the PIMS **BLNSPEC** table.

| Field | Meaning |
|---|---|
| Property | Blend property being constrained |
| UOM | Property unit |
| Min / Max | Specification range, optionally period-sensitive |
| Specification blend identifier | Blend spec or blend group column |

Important rules:

- Adding or removing properties requires the **Base Model**.
- Standard planning, global multi-site, and local multi-site models use similar table structure, but access paths differ.
- Imports can update existing table data or replace the whole table, using BLNSPEC format.

Modeling notes:

- Blend groups require group membership plus a specification for each member.
- If a blend is used to create a pool feeding other blends or submodels, required qualities must be recursed and represented in Blend Specification.
- EPA/CARB-related specifications may require calculated properties and additional blend-table configuration.

### Pools

A Pool is a simplified submodel for combining one or more materials into a single blended product stream. Pool data corresponds to the PIMS **UPOOLS** table.

How Pools differ from Blends:

| Pool | Blend |
|---|---|
| Simpler linear volumetric or gravimetric blending | Often uses specifications, formulas, RFG logic, or ABML correlations |
| Commonly used for process feed preparation | Commonly used for product blending |
| Can be extended with submodel capabilities when needed | Usually carries richer blending logic by design |

Pool Summary provides post-run tabs:

| Tab | Purpose |
|---|---|
| Feeds & Yields | Shows pool feed streams and product stream results |
| Materials | Shows source, pooled materials, and resulting destination stream |

Pool Configuration defines:

- Name and tag, created when the pool is added and not changed later
- Product material produced by the pool
- Pool feed materials
- Product properties for the resulting stream

---

## Submodel Configuration and Simulation

Submodel configuration turns flowsheet units into executable LP or simulation structures. The pages in this slice cover generated submodel matrices, guided submodel workflows, external/hybrid model integration, and submodel simulation troubleshooting.

### Submodel Types

| Submodel type | Purpose | Main modeling pattern |
|---|---|---|
| AU Submodel | Builds a base-delta process unit from feed/product/constraint definitions and simulator data | Download Excel template, fill process data, import template, generate matrix |
| Fixed Recovery Tower | Models stream de-pooling or splitting with fixed product recoveries | Configure feed components, product recovery percentages, capacities, and matrix coefficients |
| Hybrid Model | Builds a reduced order model workflow around Aspen Multi-Case and Aspen AI Model Builder | Export JSON specification, build ROM externally, import ZIP containing XLP and original JSON |
| Non-linear Submodel | Imports an external reduced-order model into AUP | Import XLP or ATMLZ, map external variables/parameters to Unified variables, build matrix |

Common modeling coverage:

- Feed and yield material balances
- Property balances and recursed product properties
- Capacities and process limits
- Matrix generation and later matrix inspection or adjustment

### Submodel Summary and Reporting

The Submodels Summary table lists submodels, submodel groups, and distillation modes in the model. It serves the same purpose as PIMS `SUBMODS`. Submodels can only be added or removed from the Flowsheet, but the summary table provides navigation, reporting setup, disabled status, import details, and case-specific result review.

Access paths include **Model Data > Submodel Configurations**, the Case Details Modified Data tab, or the Flowsheet Operations panel **Unit Margin** tab. For multi-period models, only one active period can be shown; if more than one period is active, no data is displayed.

Reporting tab highlights:

| Field / action | Meaning |
|---|---|
| Submodels | Links to submodel configuration or distillation mode configuration. |
| Description | Editable from the flowsheet property panel; non-base delta submodels can also be changed through export/import. |
| Report | Base Model-only switch to include or omit the submodel from the solution report; maps to `REPORT` in `SUBMODS`. |
| Reporting Group | Base Model-only grouping for report output; maps to `COMBINE` in `SUBMODS`; group names can be up to 32 alphanumeric characters. |
| PI Value | Base Model-only option to include shadow price in the submodel report. |
| Disabled | Case-specific enabled/disabled state; inherited state can be restored from the Table Tray. |
| File Details / Last Imported / By User | Import provenance for Excel, distillation mode, and global-model imports. |

Results tab highlights:

- Results require the active case to be run.
- Balance thresholds can highlight weight or volume yields outside the specified tolerance.
- The LOS stream option includes or ignores volume/weight loss rows in balance calculations; LOS corresponds to `VBALLOS` or `WBALLOS` rows in PIMS `Sxxx` and `ROWS` tables.
- Submodel/group rows show weight in/out, volume in/out, yield percentages, case modification status, and objective contribution.
- Objective contribution is calculated from product flow and shadow price minus feed flow and shadow price, with utility product/feed terms included.
- Total rows show total purchases, total sales, and total recovery by weight and volume.

### Working with Custom Submodels

Custom submodel configuration assumes the model and target submodel already exist. Users open the submodel configuration from the navigation panel or the Submodel Configurations summary, import Excel files in the correct PIMS submodel structure, map spreadsheets to models, and finish the import. Imported data can target any submodel, not just the currently open one.

### AU Submodel Workflow

An AU Submodel starts from a base condition and models how feedstock properties, feed rates, and operating parameters shift product yields. It can use multiple base vectors to approximate nonlinear behavior; when multiple base conditions are used, MIP/SOS structure can restrict the solution to one active base vector or two adjacent active base vectors.

Typical setup:

1. Add a Unified Submodel unit to the Base Model flowsheet, or copy an existing unit as a Unified Submodel.
2. Define the unit name, description, and three-character abbreviation.
3. Use **Go to Configuration** to open the five-step workflow.
4. Configure feeds, products, constraints, simulation data, and matrix generation.
5. Download the Excel template, fill simulator-derived process data, import it, and build the submodel matrix.
6. Run the model and recalibrate later by importing updated template data.

Workflow steps:

| Step | Key behavior |
|---|---|
| Feed | Select primary feed, map feed properties as driver variables, review utilities, and optionally enable multiple base conditions |
| Products | Select product streams and optimized properties; each optimized product property creates an R property row |
| Constraints | Add process limits and capacities; process limits can be drivers unless multiple base conditions hide that option |
| Simulation Data | Manage yield/property data from the uploaded template; shaded cells indicate missing required data |
| Matrix | Generate, import, export, or inspect the matrix; changes after generation create a warning that configuration and matrix may no longer match |

Important constraints:

- Template modification is only allowed in the Base Model case.
- Feed and products must be complete before the template can be generated.
- Simulation data is not case-variant.
- Capacity constraints must use a basis consistent with the linked stream flow; otherwise capacity calculations may be wrong.
- Rebuilding the matrix can overwrite custom imported matrix values.

### Fixed Recovery Tower

A Fixed Recovery Tower models downstream splitting or de-pooling where product properties are fixed rather than recursively calculated. It is best suited for columns such as debutanizers or deethanizers where product component recoveries are specified directly.

Workflow steps:

| Step | Key behavior |
|---|---|
| Feeds | Select feed component properties; selected components become columns in the Products step |
| Products | Enter recovery percentages for each selected component and product stream |
| Constraints | Add optional capacities; each capacity creates a CCAP row linked to stream VBAL behavior |
| Matrix | Override coefficient values for the selected case and navigate to tower solution summary |

Rules to preserve:

- At least two product streams are required.
- Component recovery values for each component column must add to 100%.
- If there are `n` product streams, values can be entered in only `n - 1` columns; the remaining recovery is implied.
- Capacity Min/Max edits also update the model capacity/process-limit tables for the active case.

### Hybrid Models

Hybrid Models support nonlinear planning models by exporting a specification for external reduced-order-model creation and importing the validated model back into AUP.

External workflow:

1. Add a Hybrid Model unit to the Base Model flowsheet.
2. Add at least one feed port, one product port, and connected streams.
3. Complete the five-step Hybrid Model workflow.
4. Export a JSON specification for Aspen Multi-Case or Aspen AI Model Builder.
5. Build and validate the ROM externally.
6. Import the ZIP file containing the generated XLP and original JSON.
7. Verify mappings and run the AUP model.

Hybrid Model workflow steps:

| Step | Key behavior |
|---|---|
| Feed | Configure feed streams, utilities, and feed stream properties |
| Products | Configure product streams and product stream properties |
| Capacities | Optionally create capacities and apply them to feed/product streams with multipliers |
| Process Limits | Add process limits; values are case-variant and sync with the Process Limits table |
| Specification | Set variable status, export JSON, import ROM ZIP/XLP, and decide what appears on summaries |

Specification rules:

- Feed and products must be configured before the Specification step is valid.
- Flow variables cannot all be user specified.
- At least one variable must be user specified.
- Min and Max are required for user-specified variables.
- Importing ROM data can mark the workflow with a warning if the configuration no longer matches the imported model.

### Non-linear Submodels

Non-linear Submodels import external reduced-order models into AUP. Supported sources include XLP files from Aspen Olefins Regression Calculator or Aspen AI Model Builder, and ATMLZ files from Aspen Custom Model Builder. Non-linear submodels cannot be published to the Site Catalog.

Typical setup:

1. Add a Non-Linear Submodel unit to the Base Model flowsheet.
2. Define name, description, and three-character abbreviation.
3. Add feed and product streams.
4. Import the XLP or ATMLZ model file from the unit property panel.
5. Open configuration, complete the workflow, review matrix data, and build the matrix if modifications were made.

Workflow steps:

| Step | Key behavior |
|---|---|
| Feeds | Review feed streams, utilities, and stream properties; selected properties are optimized/recursed |
| Products | Require at least one product stream and map optimized product properties |
| Constraints | Add optional capacities and process limits; capacity rows create CCAP rows |
| Specification | Map external variables/parameters to Unified variables/properties |
| Matrix | Review generated information and rebuild if configuration changes require it |

Specification tabs:

| Tab | Purpose |
|---|---|
| Unified Variables | Map Unified variables to external variables visible during AUP case execution |
| External Variables | Review and override external variable values, Min/Max, multiplier, offset, and calculated values |
| External Parameters | Map external model parameters such as string, double, or string-list settings |

External Data Mapping dialog:

- Opens from the Specification step when editing the Unified Variable Name column.
- Maps non-linear model variables to AUP variables.
- Users select a non-linear variable, choose a Unified Variable Type such as stream or property, apply type-specific filters, and save the mapping.
- If the variable does not exist in the submodel but must still be mapped, choose **LP Column** to create an arbitrary matrix variable at case execution.
- Arbitrary LP Column mappings require the user to supply a meaningful variable value or reference, such as `<submodelName>.<streamReference>`.
- Saved mappings appear on the External Variables tab in the Aspen Unified Name column.

Notes:

- External calculated variables may initialize as `1` until solved.
- **Solve** updates calculated external values from feed properties.
- **Copy to Initial** can copy calculated external values back to Unified variable initial values.
- Bulk import can load variable/parameter mappings for multiple non-linear models.

### Submodel Matrix Configuration

The generic **Submodel Configuration** page displays the active-case matrix for a selected submodel. If no data appears, no matrix has been defined; the matrix must be imported through the appropriate submodel tables or generated from the guided workflows.

Matrix table concepts:

| Concept | Meaning |
|---|---|
| Rows | Submodel rows such as balance, recursion, capacity, process-limit, or property rows |
| Columns | Matrix references for streams, properties, materials, and other variables |
| R rows | Recursion structure |
| Pool Collector column | Contains `999` at the intersection with a recursed row and the pool collector column |
| VBALLOS / WBALLOS | Loss-stream material-balance rows; LOS can optionally participate in balance calculations |

Available operations:

- Filter by row naming patterns or column/port selections.
- Remap variables that came from migration or PIMS-format imports.
- Edit cell values; non-Base case overrides are highlighted and can be reset to inherited values.
- Download previously imported submodel files.
- Import/export Excel matrix data.
- Run a simulation from the Base Model case.
- Open Submodel Calculator for APS.
- Navigate to solution summary.

Import details:

- Import replaces all cells that have values in the imported matrix.
- Imported changes are highlighted.
- Import fails if the file tries to introduce cells that do not exist in the Base model.
- Repeated exported/imported file names such as `filename(x).xlsx` are normalized internally so AUP can detect whether the data updates an existing source file instead of creating duplicate records.

### Submodel Simulations

The **Simulation Summary** table lists defined or published simulations and lets users create, copy, rename, delete, or open simulations. When a simulation is created, AUP inspects the submodel matrix to identify required inputs. Simulations cannot be created for external or hybrid models.

Simulation Summary fields:

| Field | Meaning |
|---|---|
| Simulation | Simulation name |
| Submodels | One or more associated submodels |
| Last Modified | Last simulation update timestamp, not last run time |

Creation options:

- Create an **AUP Submodel Simulation** from one or more eligible submodels.
- Create a **Submodel Calculator for APS** entry from selected submodels.
- Use **Create & Configure** to open Simulation Configuration immediately.

### Submodel Calculator for APS / SMC

The Submodel Calculator evaluates how process submodel operating-parameter changes affect the model without executing the full model. It is initially populated from the Base Model submodel data model. Unknown recursed qualities can appear as `-999.0`; users fill unknown qualities, specify activities, calculate unknown activities and qualities, and view or report the result.

Important constraints:

- Crude units, external models, and hybrid models are not supported by the Submodel Calculator.
- Grid information is not persisted when users leave the page or close the application.
- Users can generate an `Sxxx.smc` file, where `xxx` is the submodel tag, and later re-import it.
- Imported solution values for fixed properties (`BLNPROP`) and derived properties (`PCALC`) are automatically added.

Calculator table behavior:

| Area | Behavior |
|---|---|
| Rows and columns | Each submodel equation is a row; each unknown vector is a column. |
| Editable cells | Empty cells and blue values can be edited by double-clicking. |
| Undetermined / calculated | Undetermined values are highlighted blue; calculated values are highlighted green. |
| Used selector | Chooses rows for matrix inversion; RBAL and E rows are system-set except ESGP, EUGP, or `Exxx` gas-plant rows; P, G, L, and Z rows are excluded. |
| Balance | Sum product of row entries and vector activities. |
| Additional columns | Named `SXXXYYY`, where `SXXX` is based on the submodel title and `YYY` on the unknown vector. |

Calculator actions:

- **Reset** restores original values and `-999` placeholders.
- **Calculate** is enabled only when the matrix is square: used rows equal unknown-vector columns and the `-999` count is zero.
- **Generate SMC File** exports a reusable SMC file for external analysis or later re-import.
- **Import Solution** pulls solution data from a selected case/period and selected submodel columns.
- **Import SMC File** validates row/column matches, missing data, status, and initial values before import.
- **Export** writes the current table to `submodel calculator.xlsx`.

### Simulation Configuration

Simulation Configuration has two main tabs: **Variables** and **Submodel Squaring**. The goal is to create a square specification: the selected user-specified variables and system-calculated variables must give the solver zero degrees of freedom.

Core controls:

| Control | Meaning |
|---|---|
| Reset | Restores variable status and values to the pre-simulation state |
| Ready to Simulate | Green only when the specification is square |
| Auto-simulate | Re-runs simulation whenever values change |
| Auto-check for singularity | Attempts to resolve structural singularity automatically after status/equation changes |
| Simulate | Runs only when the specification is square |

Variables tab:

- Displays variables as rows, including feed variables, product variables, utilities, capacities, process variables, and column variables.
- `Min` and `Max` are for analysis and reporting; they are not hard solver constraints.
- `Status` can be User specified, Calculated, Undetermined, or Inactive.
- Current Solution, Previous Solution, and Delta support comparison after each run.
- Starting values can be imported from a solved case; the case does not otherwise affect the simulation.

Submodel Squaring tab:

- Shows variables as columns and matrix rows/equations as rows.
- Row checkboxes include or remove equations from the simulation.
- Column checkboxes choose variables to fix as user-specified values or leave for system calculation.
- Q rows can include derived-property `PCALC` variables; deselected Q rows are omitted from simulations and exports.

Status colors:

| Status | Meaning |
|---|---|
| User specified | User provides the value on the Variables tab |
| Undetermined | Simulation cannot run until the variable is resolved |
| System calculated | Solver calculates the value |
| Inactive | Variable is tied to a disabled equation and is disabled on Variables tab |

After a successful run:

- Current Solution is updated.
- Previous Solution retains the prior result.
- Delta shows the change.
- Values violating analysis Min/Max are highlighted.
- Simulation status and log details appear in the right pane.

### Publishing Submodel Simulations to a Site Catalog

AUP can publish submodel simulations to a connected Site Catalog so they can be consumed by AUS. Publishing assumes the AUP submodel simulation has already been created and configured.

Before publishing:

- A Site Catalog connection must be configured from model general settings.
- The simulation configuration must exist in AUP.
- Referenced property definitions, material definitions, and submodel assets must be linked to the Site Catalog first.
- The Site Catalog page remains empty until the model is connected to a Site Catalog.

Publishing workflow:

1. Open **Model Data > Site Catalog**.
2. Select the **Simulation** step.
3. Use **Add simulations** to pick the target simulation configuration.
4. Review the populated Submodel, Properties, Materials, and Assets steps.
5. Visit each Site Catalog step and publish the selected linked data.
6. Return to **Simulation** and confirm the status is **Ready To Publish**.
7. Publish the simulation; successful publish changes the status to **Linked**.

Published simulation configuration records include the submodel, matrix structure, related materials and properties, publisher, source location, and publish timestamp. After publication, AUS can show the published submodel in **Add Flowsheet Components > Site Catalog**; adding it to the AUS flowsheet lets users choose the submodel simulation and inspect its dependencies.

### Site Catalog Capabilities

Site Catalog capabilities let local model targets be shared with an associated global or multi-site model. Time information is stored in the Site Catalog so different target sets can be generated and shared across scenarios, including standard and periodic multi-site models.

Capability prerequisites and areas:

- Capacities and process limits must be published to the Site Catalog before they can be added as site capabilities.
- The Site Capabilities page exposes Capacity, Process Limits, and Inventory tables.
- Capacity targets include Min/Max, solution values, and Start/End dates for periodic multi-site usage.
- Process Limit targets include Min/Max values.
- Inventory targets include opening inventory, closing inventory, target values, and Min/Max values.
- Capacity, Process Limit, and Inventory tables can export their data to Excel files from the browser download flow.

### Catalog Connections and Site Catalog Workflow

The **Catalog** page displays the Site Catalog and Price Catalog connections available to the current AUP or Multi-Site PIMS model. It is the model-level connection surface, while the Site Catalog page is the workflow for publishing or linking model objects.

Catalog prerequisites and connection rules:

- Site and price catalogs use a separate SQL catalog database created through Aspen Unified Configuration Manager.
- More than one site or price catalog can exist in a database, and multiple catalog databases can be connected to the system.
- A model must connect to a catalog before the Site Catalog page can display useful information.
- For a Multi-Site PIMS model, a local model can have its own catalog connection.
- Disconnecting a catalog removes the links between the model and the selected catalog; reconnect before publishing more information.

Catalog page actions:

| Area / action | Meaning |
|---|---|
| Existing Site Catalog | Connect to an existing catalog; visible after at least one site catalog exists. |
| New Site Catalog | Create/connect a new catalog by selecting server, database, name, and optional description. |
| Price Catalog | Connect a price catalog so its formulas can be mapped to current model materials. |
| Connect | Connects the selected catalog and shows a success toast when complete. |
| Go to Site Catalog | Opens the Site Catalog workflow for the selected catalog. |
| Go to Supply Chain Catalog | Multi-Site-only entry for grouping databases that support multi-site models. |
| Go to Price Catalog | Opens formula-to-material mapping for purchases and sales. |

The **Site Catalog** page stores and publishes shared model constructs used by AUS, AURA, other planning models, and Multi-Site PIMS. Users link model resources and publish them to the selected catalog. Catalog linkage is retained in model snapshots, and copied models carry over their catalog link.

General Site Catalog rules:

- Run target cases before publishing data that depends on solved values.
- Add all related dependencies before publishing; otherwise status may show **Incomplete dependencies** or **Obsolete dependencies**.
- Publishing changed resources again is required after model resources change.
- Deleting a selection from a Site Catalog table unlinks it from the catalog selection but does not delete the underlying model entity.
- The Case Only Author role can publish Planning Targets and Capabilities only.

Site Catalog workflow areas:

| Workflow area | Purpose / dependencies |
|---|---|
| Planning Targets | Select solved-case target sets and publish target envelopes for scheduling or multi-site use. |
| Site Capabilities | Publish capacity, process-limit, and inventory capability targets based on solved cases. |
| Modes | Publish distillation modes; related properties, materials, and assets must be linked and published. |
| Simulations | Publish AUP submodel simulations after submodel, assets, materials, and properties dependencies are ready. |
| Submodels | Publish/link submodels associated with simulations. |
| Properties | Link model properties to catalog properties and property types; property type mismatches can be shown as alert columns. |
| Correlations | Publish ABML/UBML/custom correlations; required properties must be present and published first. |
| Materials | Link model materials to catalog materials; blend materials trigger component/property/spec dependency handling. |
| Assets | Link tower assets required by distillation modes. |
| Capacities | Publish capacities; associated assets must be published first. |
| Process Limits | Publish process limits; material-property limits require material and property publication first. |
| Blend Spec | Publish blend specification sets for AUS use; related materials and properties must be published first. |

Common status meanings across Site Catalog tables:

| Status | Meaning |
|---|---|
| Incomplete | Required mapping or dependency is missing. |
| Ready To Publish | No catalog match exists and the object can be created in the catalog. |
| Ready To Link | A possible catalog match exists and the object can be linked. |
| Linked | The object was published or linked successfully. |
| Published | The object was published successfully for workflows that use published rather than linked status. |
| Obsolete Link | The linked catalog object no longer exists. |
| Incomplete Dependencies | Required related objects are not yet published or linked. |

### Planning Target Details and Envelopes

Planning Target Details define the envelopes that make up a planning target set. The page must be completed before a planning target can be published.

Planning target envelope rules:

- A planning target can contain multiple envelopes.
- For multi-period models, period tabs display period-specific target details.
- The page header shows planning target name, start/end time, last published information, and a Publish action.
- Publishing can update existing envelopes when **Update existing envelopes** is selected; otherwise existing envelope entities are not updated.
- Zero-valued added materials are not published.

Envelope table fields:

| Column | Meaning |
|---|---|
| Envelope Name | Name defined at creation; opens the Envelope Details panel. |
| Envelope Type | Distillation Mode, Materials, or Submodels. |
| Period | Period name for periodic models. |
| Start Time / End Time | Envelope time range. |
| Throughput | Total from associated case solution crude feed targets. |
| Throughput/Day | Throughput divided by days between start and end. |
| UOM | Unit from model General Settings. |

Envelope types:

| Type | Rules |
|---|---|
| Distillation Mode | Only one distillation mode envelope can be added to a target set; the mode list contains published modes. |
| Materials | Creates purchase, sales-shipment, or production envelopes from published materials; production can include storage tanks and periodic inventory change. |
| Submodels | Multiple submodel envelopes can be associated with the planning target; the list contains published submodels but not towers. |

Envelope Details panel:

| Tab | Applies to | Purpose |
|---|---|---|
| Feeds | Distillation, Purchases, Submodels | Feed targets, feed properties, UOM switching, and feed material/property edits. |
| Products | Distillation, Sales, Production, Submodels | Product targets, product properties, and production material/property edits. |
| Operating Parameters | Distillation, Submodels | Swing cut temperatures or operating values used during the campaign. |

### Price Catalog Mapping

The **Price Catalog** page maps formulas from a connected price catalog to purchase and sales materials in the current model. After formulas are mapped, the price data set must be applied to AUP from the Apply Price Dataset page.

Preconditions:

- A price catalog is connected to the model.
- Formula defaults are defined in the price catalog.

Price Catalog fields:

| Column | Meaning |
|---|---|
| Material Name | Current model material, separated into Purchases and Sales tabs. |
| Alt-Tag | Alternate material name when duplicate material names exist. |
| Status | Incomplete means no formula is attached or dimensions are missing; green check means formula and required dimensions are selected. |
| Formula | Formula selected from the connected pricing model. |
| Dimensions | Formula dimensions shown as columns; users select dimension values where required. |

Price Catalog operations:

- Link formulas manually by selecting a material, editing the Formula column, and selecting required dimension values.
- Use **Apply Defaults** to match Material Name against default names defined in the price catalog.
- Override an automatically mapped formula; the override is retained even if defaults are applied again.
- Export Purchases or Sales mapping workbooks and re-import completed mapping files.
- Clear selected formulas from the Formula column shortcut menu.
- Apply the mapped data set to the model from **Apply Price Dataset**.

### Data Hub

The **AUP Data Hub** imports third-party planning data into the model as external `.JSON` documents. Users can review the imported documents, share them with other models, and apply selected data to cases only after comparing incoming values with existing model values.

Data Hub prerequisites and inputs:

- The user must have the Creator role for the model.
- Example JSON documents are installed under `Users\Public\Public Documents\AspenTech\Aspen Unified\Aspen Unified API Examples`.
- Supported imported data includes Purchases, Sales, Capacity, Limits, and Inventory for periodic models.
- A Data Hub indicator appears on the Home page and left navigation when pending documents are available.
- External-data notifications can also appear as green toast messages; clicking the notification opens or refreshes the Data Hub.

Data Hub Summary page:

| Area / action | Meaning |
|---|---|
| Status area | Shows pending and accepted document counts and the last Data Hub update time. |
| Data Hub table | Lists external documents, comments from the document, application details, and status. |
| Apply Data to Cases | Moves selected compatible data to the Apply Data page; rows with conflicting data types cannot be applied together. |
| Export | Exports the visible Data Hub table to `DataHub.xlsx`. |
| Share | Shares selected data documents with other models; recipient models show pending Data Hub documents and receive immediate notification. |
| Delete | Removes selected data documents from the Data Hub. |
| Download | Downloads selected source data documents. |

Apply Data page:

- Lets users assign selected external data to cases and review import errors or warnings.
- The currently selected case is the default target; if a selected case has child cases, changes applied to the parent also apply to children.
- Case Only models can apply Data Hub data only to the Base Model.
- At least one case and one data area must be selected.
- If warnings or errors exist, users can open them from **Warnings** and download `Warnings.txt`.
- Data tabs match the selected data areas and show imported content against existing model content.
- Inventory data separates inventory limits and inventory properties into top and bottom tables.

Apply Data review behavior:

| Control / field | Meaning |
|---|---|
| Existing / New / Delta | Shows existing model values, incoming imported values, and differences before applying. |
| Editable New values | Users can modify imported values before applying; changed cells are highlighted. |
| Delta coloring | Green indicates modified delta text; red indicates a limit violation; Base Case data already modified in the model is highlighted consistently with case-data changes. |
| Absolute Delta % | Filters rows by absolute percentage difference. |
| Apply | Applies data from the current tab only. |
| Apply All | Applies all selected data tabs. |
| Download | Downloads selected data-area JSON content, zipped when multiple data sets are selected. |

### Work Areas and Execution Diagnostics

Work Areas are reusable visual workspaces for AUP and Multi-Site PIMS models. They display selected model data in containers and widgets, support quick editing from grids, and can run cases directly from a work area.

Work Area rules and workflow:

- Creator or Owner permission is required to create or modify work areas; Viewers can view work areas but their configuration/data changes are not saved.
- A work area contains layout containers, and each container can contain a widget.
- Work areas can be created, renamed, duplicated, deleted, exported, and imported.
- Export creates a `.dsc` layout/content file named with model and work area information.
- Imported work areas are not model dependent; unmatched structures or variables are ignored, and periodic models receive an assigned first period when importing a non-periodic work area.
- Multi-Site global models have their own work areas; local model work areas are not published into the global model.

Work Area command and navigation features:

| Feature | Meaning |
|---|---|
| Show Delta | Switch grids between absolute and delta analysis for selected cases; the reference case defaults to the first selected case. |
| Hide/Show 0 Solution Values | Hides rows where all solution values are zero, using the model report setting tolerance. |
| Swap | Swaps selected containers or widgets. |
| Export | Downloads the complete work area layout/content. |
| Delete | Deletes a selected container or widget; deleting a container also removes its widget. |
| Settings | Opens Work Area Configuration. |
| Styling / Layout | Adds nested split containers and resizable splitters. |
| Widget Configuration | Shows settings for the selected widget. |

Work Area Configuration defines variable definitions that widgets can reuse. The **Add Variables** tab selects variable types and required filters, and the **Selected Variables** tab edits or deletes configured definitions. Labels identify the variable definition for later widget configuration. Case sets can be used as the case dimension so new cases are included automatically after they join the case set.

Widget types and behavior:

| Widget | Key behavior |
|---|---|
| Grid | Displays selected variable data with standard table controls, export, filtering, sorting, and chart range shortcuts. |
| Chart+Grid | Displays synchronized grid and chart; grid filtering/hiding affects the chart. Supports chart type, position, axis, color, and formatting settings. |
| GDOT Trend | Trends planning variables with GDOT process, low limit, high limit, and target values from GDOT DMZ data. |
| GDOT Constraint Trend | Trends active GDOT and planning constraints over time as Off, Inside, or Active statuses. |

The **Job Status** page monitors case execution jobs. Jobs are batches of matrix generation, solver interaction, and results publication tasks that can run in the background.

Job Status access paths include the navigation bar, the Run Cases dialog after Generate, the application toolbar **View Job Status** action, and completion toasts.

Job Status table highlights:

| Area | Meaning / actions |
|---|---|
| Job Status | Lists submitted jobs, status, type, case count, execution time, submitted time, submitter, and concurrency level. |
| Job Details | Lists case-level solution status, objective function, solve time, execution log, imbalances, warnings/errors, iterations, and infeasible variables. |
| Reports | Opens Full Solution, Summary Solution, LP Primal Dual, Message/Error Log, Xpress, XSLP_Control.log, and Multi-Start Excel outputs. |
| Analysis Pack | Downloads selected execution artifacts in a zip or individual file, depending on selection. |
| Diagnostics | Opens input/solution matrix analyzers, advanced diagnostics, or matrix comparison. |
| Re-run | Creates a new Run Cases dialog prefilled from a selected job or case. |

Solution status cues:

- During execution, progress is 50% after matrix generation, 75% after solver completion, and 100% after report generation.
- Solved statuses include Optimal, Optimal (Stale), Infeasible, and Infeasible (Stale).
- Error links open error/warning reports and can include MaxPassExceeded, MaxlPassExceeded, Unbounded, NonRecursedModel, UserExit, SystemError, or MatrixGenerationError.
- Active Penalties means infeasibility penalties were automatically applied; penalty results can be inspected from reports or the Flowsheet Penalties tab.
- Running execution logs can be opened repeatedly and refreshed; dynamic logs are unavailable after execution completes.

The **Message/Error Log** is an HTML execution report for a single case. It includes messages and errors from matrix generation, solution status, and other execution stages, and is available as a browser report and downloadable file after execution. It can be opened from Job Details by selecting a case and choosing **Message/Error Log** from report actions; for non-optimal solutions, the Solution Status link can also open the associated error log.

Analysis Pack contents can include matrix generation logs and matrices, solve logs and solution matrices, Transcol XLPTC, SQL logs, workflow execution logs, and multi-start initial/final solutions and objective functions. When using XLR viewer files or `.atmlz` external models, unzip the pack before opening `.xlp` files and keep the generated folder structure intact because external references can depend on it.

Matrix Comparison compares two AUP XLP matrices from current jobs or uploaded `.xlp` / Analysis Pack `.zip` files. It can compare input or solution data, including multi-start runs.

Matrix Comparison workflow:

1. Select the first matrix from a job or uploaded file, choose case/run, and choose input or solution data.
2. Select the second matrix in the same way.
3. Set XLP trace level and comparison tolerance, then compare.

Trace levels:

| Level | Comparison scope |
|---|---|
| Low | Object existence, variable/equation types, RHS, non-zeros, scales, residual/infeasible values, coefficients, nonlinearities, and named variable collections. |
| Medium | Low-level checks plus variable bounds and nonlinearities associated with variables. |
| High | Medium-level checks plus matrix variable values such as value, base value, and persistent value. |

Matrix Comparison output categories include XLP Object Comparison, Compare Variables, Compare Equations, Compare Linear Matrix Elements, Compare Nonlinear Matrix Elements, Compare Special Ordered Sets, and Compare Named Variable Collections.

The **Output Diagnostics** page examines variables and equations for a selected case execution. It opens as input matrix analysis, solution matrix analysis, or advanced XLR diagnosis.

Matrix Analyzer mode:

- Requires a run job and a selected case from Job Status.
- Can show input or solution data depending on the selected diagnostic action.
- Supports search by material, property, or text string.
- Lets users switch left-side display between Equations and Variables; the right-side panel shows the intersecting variables/equations.
- Can generate an XLR text report as `<modelName>.log`.
- Supports short/long tag switching through Show Full Name and algebraic display of selected intersections.

Advanced Diagnosis / XLR Analysis:

- Requires **Create XLR file** under Report Settings - Outputs before execution.
- Displays execution result variables, equations, diagnostics, infeasibilities, iteration trends, and option values from the generated XLR file.
- Common table interactions include sorting, filtering, column selection/reordering, and export.

Advanced Diagnosis display options:

| Display | Purpose |
|---|---|
| Iterations | Major iteration summary, convergence functions, objective value, nonlinearity ratio, worst infeasible equation, and total infeasibility. |
| Options | LP or XSLP matrix generator settings and values; informational only. |
| Equations | Filter equations by material balances, utility balances, capacity constraints, equality/control rows, recursion balances, specifications, largest residuals, feasibility slacks, shadow prices, or infeasibilities. |
| Variables | Filter variables by purchases, sales, capacities, process limits, qualities, active bounds, largest changes, or infeasibilities. |

Diagnostic details:

- Equation views show residual, shadow price/Pi value, infeasibility slack, scale, and linear/nonlinear form.
- Variable views show lower bound, value, upper bound, marginal value, step bound, status, and type.
- Solution Path Trend plots residuals for selected equations and value/bounds for selected variables across iterations.

### Cases, Case Sets, and Parametric Analysis

Cases are the main execution and scenario-management objects in AUP. The Base Model is the starting point for all cases, and child cases inherit from their parent unless modified or explicitly blocked.

Case Summary views:

| View | Purpose |
|---|---|
| Cases by Hierarchy | Shows parent/child inheritance relationships; highest-level cases use Base Model as parent. |
| Cases by List | Shows all cases without hierarchy. |

Common Case Summary fields include case name, permanent case number, child-case count, solution status, solution time, objective function, last modified time, and primary case set. Solution Status links open the selected HTML solution report for executed cases.

Case Summary actions:

- Open or edit Case Details.
- Open Primary Input Data with the selected case as active case.
- Export selected cases to a PIMS CASE-table workbook, or export all cases to `All Cases Data.xlsx`.
- View executed-case reports such as Full Solution, Summary Solution, and LP Primal/Dual.
- Run selected cases through the Run Cases dialog.
- Change parent case, copy cases, reposition cases in hierarchy view, apply a price dataset, delete cases or solutions, and promote a child case to its parent.
- Create a new case set or add selected cases to an existing case set.
- Import PIMS CASE-table workbooks through the Import Cases wizard; selected imported cases overwrite existing matching case data.

Create New Cases dialog:

| Option | Meaning |
|---|---|
| Number of cases | Required for AUP cases; creates one name field for each new case. |
| Parent case | Required parent used as the basis for each new case; defaults to Base Model. |
| Case n name | Required name for each case being created. |
| Case type | Read-only for AUP cases; currently only Standard is available. |

Adding a case creates a child from Base Model or from another selected parent case. New cases can be created from Case Summary or the Application Toolbar. After entering the case name and parent case, **Create and Configure** opens Case Details, where Modified Data links to case-specific edits and the Advanced tab can block inheritance for selected model areas.

PIMS CASE-table import:

- Imports one or more cases from `.xlsx` files in standard Aspen PIMS CASE table format.
- Imported case numbers become permanent case numbers; AUP supports up to six digits.
- Matching case numbers replace existing case changes/configuration. If the replaced case is a child case, its existing parent remains unless the import specifies a different parent.
- Child cases with permanent case numbers require the parent case to have a permanent case number.
- The `MODIFIES` keyword can define parent cases and preserve imported hierarchy.
- Starting with V15.0.4, users can import all cases or select specific cases; unselected cases are ignored.
- Bounds and Rows additions using PIMS `BOUNDS`, `XBOUNDS`, and `ROWS` formatting are supported through case import.
- Crude blend ratios can be imported into Base Model, but import changes only ratios of existing crude blends and cannot change crude blend definitions.

Unsupported imported CASE worksheet tables include `ADDITIVE`, `ALTTAGS`, `ASSAYLIB`, `CRDCUTS`, `CRDDISTL`, `CURVE`, `DEPOTS`, `GASES`, `GBLNMIX`, `INDEX`, `INTERACT`, `MARKETS`, `MARKTGRP`, `MODELS`, `MODES`, `NEWCUT`, `PLANTGRP`, `PLANTS`, `RATIO`, and `SCALE`.

The **Case Details** page is the per-case editor. Base Model only shows the Definition tab; regular cases can also expose Modified Data, Advanced, and Model Settings tabs.

Case Details tabs:

| Tab | Purpose |
|---|---|
| Definition | Name, description, parent, created/modified time, solution metadata, permanent case number, input/output solution selection, reports, and case sets of the case. |
| Modified Data | Shows which model areas differ from the parent case and links to those model areas with the case active. Also supports promoting changes to the parent. |
| Advanced | Blocks inheritance by model area; not available for Multi-Site models. |
| Model Settings | Overrides selected General, Report, or Solver settings for the current case. |

Solution-related Case Details rules:

- **Use case-specific input solution** uses a previous solution as the starting point for a run; this corresponds to the PIMS `LOADSOL` case keyword.
- **Use case-specific output solution** writes the case solution to a named output file and overwrites it on the next run; this corresponds to `SAVESOL`.
- **Use Solution** can save an executed case solution as a new initial solution or initialize Base Model material-property estimated values (`PGUESS`).
- Exported case details use PIMS CASE-table format and can include the current case only or the case plus children.

Inheritance controls:

| Option | PIMS relationship | Meaning |
|---|---|---|
| Block inheritance from Base Model and parent cases | `REPLACEALL` in CASE | Ignore Base Model and all parent-case values for the selected model area. |
| Block inheritance from Base Model only | `REPLACE` in CASE | Ignore Base Model values for the selected model area. |
| Period - Block Inheritance | Periodic behavior | Automatically selected for a periodic case with a disabled period; can be changed. |

The **Parent Case Data** dialog shows inheritance for a specific case-data cell. It opens from **View parent case data** on a case-value cell, displays parent cell values, highlights values that differ from the parent in yellow, and allows values to be changed by double-clicking a cell.

The **Run Cases** dialog creates a job that generates the solution matrix from flowsheet connectivity, executes solver work, and publishes results to Job Status.

Run Cases General tab:

| Field | Meaning |
|---|---|
| Job name | Required job name; defaults to `Job<n>`, does not need to be unique, and is limited to 80 characters. |
| Default Input solution | Initial solution used for all job cases unless a case-specific input solution is set. |
| Concurrency | Default up to 8 concurrent tasks or HPC up to 256; changes apply after leaving and re-entering the model. |
| Add cases to run | Select cases or case sets; case number can be shown and searched. |
| Input Solution | Case-specific input solution; takes precedence over the default input solution. |
| Output Solution | Case-specific output solution; can overwrite an existing solution or create a new named solution up to 72 characters. |
| Filter cases by number | Sorts/searches selectable cases by case number instead of case name. |

Run Cases Settings and execution options:

- Multi-start can be enabled to seed the problem from multiple starting points and choose the best solution; related charts appear on Job Status.
- Periodic models can set Start Time, defaulting from the Periods table.
- Infeasibility diagnostics can automatically add penalties, rerun infeasible cases, apply marginal-value penalties, apply penalties to case changes only, or apply them to the whole model.
- Penalty categories include Limits, Purchases, Sales, and Blending Specification; existing model penalty entries override generated penalties for the same target.
- AVA optimization analysis can include purchases/sales, purchases/sales/limits, or all variables when AVA is enabled.
- Bottom toggles expose Multi-start, Infeasibility solution penalties, AVA for optimization analysis, and Go to Job Status page before Submit.

**Case Sets** organize cases for running, comparison, and work-area reuse. The Case Sets table shows each set, number of cases, aggregate solution status, and average objective function. Mixed status means the cases in the set do not share the same solution status.

Case Set operations:

| Page | Operations |
|---|---|
| Case Sets | Edit, open Primary Input Data with the set as active case set, run the set, generate a case comparison report, copy, create, or delete a set. |
| Case Set Details | Rename/describe the set, add cases, open case details, remove cases from the set without deleting them from the model, run the current set, or open Case Comparison. |

**Input Solutions** manage initial solution files available to Run Cases and Case Details. Solutions can be created from executed cases through **Use Solution > New Initial Solution**, created as output solutions from Run Cases, imported from one `.dat` file at a time, exported as table data, downloaded as `.dat` files, zipped as `SolutionFiles.zip` when multiple are selected, or renamed.

Parametric Analysis evaluates how model behavior changes when objective-function-related LP variable attributes are varied over defined ranges. It is useful for price, raw material, product, and other LP variable sensitivity studies.

Parametric Analysis concepts:

- A parametric set includes varied variables, delta absolute or percentage ranges, step size, grouping or cross-product pairing, display variables, and reference cases.
- Available variable attributes are Min, Max, Fix, and Cost relative to the reference case.
- Material groups can apply the same delta range to costs/prices across the group.
- After execution, scatter charts, parallel-axis plots, and Excel exports preserve result analysis with the case.
- In Multi-Site models, parametric analysis does not work when the selling price basis differs from the model basis (`VPRICE`).

Parametric workflow:

1. Create a case study from **Cases & Analysis > Parametric Case Studies**.
2. Select a name and reference case.
3. Open Case Study Configuration with **Create & Configure**.
4. Add parametric variables, validate range type, start/end/increment/steps, and let the system fill or highlight calculated values.
5. Add display variables; objective function appears by default after a study is run.
6. Run the study and analyze generated plots or exported data.

Parametric Case Studies page:

| Field / action | Meaning |
|---|---|
| Case Study | Opens the associated configuration page. |
| Status | Complete means the study is ready; Incomplete means required configuration is missing. |
| Case | Reference case for the study. |
| Last Run | Last execution time for the study. |
| Copy | Copies configuration such as variables, display values, and reference cases, but not results. |
| Delete | Removes one or more case studies. |

Parametric Case Study Configuration details:

| Workflow area | Meaning |
|---|---|
| Case Study Name | Editable case study name. |
| Status | Ready to Run when all required steps are complete; Incomplete links to missing workflow sections. |
| Reference case | Case used as the basis for relative values; it must have a solution to be valid. |
| Workflow Steps | Links to Parametric Table, Display Variables, and Results sections. |

Parametric Table rules:

- Variables can be enabled or disabled; disabled variables are excluded from parametric runs, case sets, and exported case files.
- A study cannot be run or exported if all variables are disabled.
- Supported variable types include material purchase, material sale, specification blend property, capacity, and utility.
- Range types are **Absolute value**, **Delta percent**, and **Delta value**.
- Min and Max attributes support Absolute value only; Cost, Fix, and variable groups support all range types.
- Start, End, Increment, and Steps require three values; **Validate** calculates and highlights the missing or changed value.
- All parameters in the same run group must have the same number of steps.
- Cross-product groups are available when exactly two run groups are specified and run every combination from both groups.

Add Parametric Variables dialog:

- Opens from the Parametric Table add button and can add variables, variable groups, and group members to the current study.
- Supply Chain models can select Global or Local models from the Model drop-down.
- Variable Type lists materials, material groups, limits, utilities, price catalog elements when applicable, and Supply Chain global/local variants.
- Variable Filters change by variable type and can include attributes, periods for periodic models, spec blend versus spec blend group choices, and selected members.
- Attribute filters include Fix, Min, Max, Cost, and Price where supported by the selected variable type.
- Users must click **Add** before changing variable type; otherwise the prior selection is ignored.
- **Group variables** creates a named group so range values can be configured for the group; grouped variables cannot be configured or deleted individually, and group names must be unique.

Add Display Variables dialog:

- Opens from the Display Variables table and selects variables shown in parametric result charts.
- Supply Chain models can select Global or Local models from the Model drop-down.
- Variable Type can include materials, material groups, limits, utilities, LP columns, and other model-type-specific result variables.
- Attribute filters focus on Solution and Marginal values where available; Inventory Material and Material Property use Solution only.
- Period, spec blend, and selected-variable filters work like the parametric-variable dialog.
- Previously selected display variables are not filtered out; duplicates are ignored when added.
- **Group variables** requires unique group names.

Parametric outputs and plotting:

- **Download Cases File** exports enabled parametric iterations to `Cases.xlsx`; cases with warnings can be excluded before proceeding.
- **Create Case Set** creates cases named with the pattern `<parametricCaseName>[caseNumber]<variableName>=<value>` and places them in a new case set.
- Display Variables include Objective Function by default; users can import LP variables from Excel, add system variables, or add recommended variables.
- Recommended variables add Group, Solution, and Marginal display variables for each independent variable in the Parametric Table.
- Results are unavailable until execution completes; a default 2x2 scatter analysis page is created after a parametric case set is executed.
- Analysis pages can be scatter plots or parallel-axis plots, can be copied, and can be customized through Parameters, Display, and Values legend tabs.
- Scatter plots use parameter variables on the x-axis and display variables on y1/y2 axes; parallel-axis plots can combine parametric and display variables as axes.
- Users can show data markers, inspect marker values, edit plot min/max ranges, define display-variable colors, rearrange parallel axes, and export results for analysis.

Model comparison:

- Compares two AUP models of the same type, including single-site and Multi-Site models; periodic models must be compared with periodic models.
- Requires at least Viewer role on both models.
- Can compare the current model to another open model or to the checked-in version during check-in preview.
- Compares Base Model data and case data across primary model data, distillation modes, materials and properties, advanced modeling, configurations, settings, and nonlinear equations.
- Areas omitted from the report are identical in both models.
- If Base Model data changes in a table referenced by a case, that case appears modified in the comparison report.

Model comparison report behavior:

| Area | Meaning |
|---|---|
| Model Case Summary | First page summarizing Base Model differences and case differences. |
| Difference links | Navigate directly to model areas with detected differences. |
| Missing row highlighting | Indicates data missing from the other model. |
| Data-area panel | Lists only categories with differences; blue counts show number of differences. |
| Content Variation | Different values in comparable tables; highlighted in the comparison panes. |
| Missing Tables / Rows / Columns | Missing data categories; missing columns can include columns with no values. |
| Case selector | Shows cases with differences; highlighted case names indicate a case missing from one model. |

### Case Comparison and Reports

Case Comparison and reporting workflows turn solved-case results into comparison workbooks, solution reports, report maps, and diagnostic output files.

Case Comparison Report:

- Can be opened from **Cases & Analysis > Case Comparison Report** or from Job Status after selecting cases.
- Can compare cases from a case set or individually selected cases.
- Only cases with solutions appear in the selection drop-down.
- Periodic models can report by Rates or Periods.
- Users select report name, case/case-set source, included cases, and comparison sections.
- Generated output is an `.xls` file.
- Cases can be reordered or removed before generation.

Report Downloads page:

| Area | Purpose |
|---|---|
| Filter by case set | Filters selectable cases by a chosen case set. |
| Filter by cases | Selects specific cases to include. |
| Case Grid | Shows selected case details and links to Case Details. |
| Report Grid | Lists report types and available formats for each report. |
| Download | Packages selected reports in a single `.zip` file in the browser download folder. |

Working with Reports:

- Solution reports are generated from execution results.
- Previously generated reports persist on the server as space allows, but are deleted when a new solution is generated.
- Reports can be selected from Report Downloads, from Case Details after a case is run, or from Job Status Table Tray report actions.
- HTML reports can be saved externally by opening the report and using browser **Save as**.
- Case comparison reports are not case-specific, so previously generated comparison reports may remain from earlier solutions.

Report formats:

| Format | Extension / output | Available report types |
|---|---|---|
| HTML | `.html` / `.htm` | Full Solution, Summary Solution, LP Primal/Dual, Data Validation, Down the Page, Across the Page. |
| TXT | `.txt` | Full Solution, Summary Solution, LP Primal/Dual, Data Validation, Down the Page, Across the Page. |
| XLS | Spreadsheet | Summary Solution, LP Primal/Dual, report maps such as BLMAP, PRMAP, PROWS, UTMAP, and FLOWMAP. |
| XLR | `.xlr` | Execution results for XLR Viewer / Advanced Diagnostics. |
| Native | Native solver/report output | Trancol. |

Report Map reports are Excel spreadsheets available from Report Downloads, mainly for periodic models:

| Report map | Contents |
|---|---|
| Product Blending Map (`BLMAP`) | Specification blend and blend-group recipes, qualities, and specification values. |
| Stream Flow Report (`FLOWMAP`) | Flow map information for all streams. |
| Stream Property Report (`PRMAP`) | Properties for all streams; recursed pools that are not actual streams do not have a report. |
| Submodel Parameter Rows (`PROWS`) | P-ROWS information from submodels. |
| Utility Disposition Map (`UTMAP`) | Full utility disposition map with solution quantities. |

Across the Page report:

- Applies to multi-period models.
- Shows periods side-by-side, with each period as a column.
- Multiplies parameters by the number of days in the period.
- Includes a Total column that sums periods.
- Includes Target Inventory Costs in the Economic Summary Analysis section, allowing comparison of objective function and reported net variable margin.
- Can be generated as `Across.txt`, `Across.htm`, or `Across_menu.htm` when using an HTML table-of-contents frame.

Down the Page report:

- Applies to multi-period models and is similar to the Full Solution report layout.
- Shows periods down the report rather than across columns.
- Multiplies parameters by the number of days in each period.
- Includes a Total column and the Target Inventory Costs section in Economic Summary Analysis.
- Can be generated as `Across.txt`, `Across.htm`, or `Across_menu.htm` from the report download flow.

Solution and economic reports:

| Report | Purpose / key content | Important behavior |
|---|---|---|
| Full Solution | Detailed model solution data, including blend targets, capacity utilization, bounded variables, economic summary analysis, formula/specification blends, purchases/sales, utilities, process capacity, process submodels, recursion log, stream disposition, stream properties, and penalties. | Not available for periodic models; HTML reports may require browser pop-ups to be allowed. |
| Summary Solution | Economic summary of the LP solution, including capacity utilization, bounded variables, control rows, economic summary, purchases/sales, utilities, stream disposition, process capacity, and penalty details. | Not every section appears in every report type; output can be TXT, HTML, framed HTML, or spreadsheet. |
| LP Primal/Dual | Economic-summary data tied to the LP solution, split into row and column sections. | Row sections expose equation activity, slack, bounds, and PI value; column sections expose LP variable activity, objective coefficient, bounds, and marginal value. |
| TRANCOL | Substitution/sensitivity report showing how limiting non-basis variables affect non-limiting basis variables and objective value. | Contents are controlled by Table REPORT Trancol/AVA analysis masks; row masks use `TRMASK1`-`TRMASK9`, column masks use `TCMASK1`-`TCMASK9`. |

TRANCOL details:

- Also known as the substitution report.
- Can be generated from Report Downloads in text, HTML, framed HTML, case-stacked text/HTML, or spreadsheet forms.
- `Create XLPTC File` lets users obtain the report file without writing report output to the database, reducing database storage use.
- Typical row masks are `PURC***` and `SELL***`; typical column masks include `PURC***`, `SELL***`, `VBAL***`, and `CCAP***`.
- The report uses the LP basis at solution: variables at constraints are fixed/non-basic and unconstrained variables are free/basic.
- Partial derivatives are used to calculate sensitivity unless the sensitivity matrix is numerically or structurally singular.

Data Validation report:

- Generated from **Run Validation on Active Case**.
- Shows model statistics and input table data as read by the system.
- Requires browser pop-ups to be allowed for the report to appear.
- Helps verify that spreadsheet input data was translated correctly.

Key Data Validation sections include error summary, setup report, PERIODS, PINV, recursion and recursed property range reports, purchase/sales and utility reports, stream/utility disposition maps, blend component inspection, BLNSPEC, PBONUS, INTERACT, product blend options/specifications, formula blends, CAPS, submodel tables, PRNTABS miscellaneous tables, and error-summary continuation.

Report Settings define default report generation, output files, formatting, diagnostics, warning suppression, and Table REPORT behavior.

Report Settings General tab:

| Section | Key behavior |
|---|---|
| Trace level | Controls XSLP log detail and files; Medium/High add large diagnostic content and should be avoided for production models unless needed. |
| Reports to generate | Defines available default HTML, TXT, and Excel reports; Multi-Site models can configure local-plant and global reports separately. |
| Outputs | Controls MPS, XLR, map/fil cleanup, and Trancol XLPTC output. `Create XLR file` is required for Advanced Diagnosis. |
| Miscellaneous | Controls report UOM, small-value filters, zero purchase/sale suppression, marginal sign convention, WBAL marginal conversion, limit-flag alignment, economic summary objective in title, and PRMAP sorting. |
| HTML Reports | Lines per page, font size scale, additional header, alphabetical stream sorting, and optional navigation frame. |
| TXT Reports | Text report lines per page. |
| Matrix Generation Log | Maximum warning occurrences sent to the execution log before additional warnings go to `WARN.LST`. |
| Model Scaling and Oscillation | Writes scaling and oscillation diagnostics to `XSLP_Control.log` when trace level is Medium or High. |

Trace-level guidance:

| Level | Typical files / content |
|---|---|
| None | `XSLP_CONTROL.LOG` with default settings and objective-function list. |
| Low | Control/history/report logs with objective functions, infeasibilities, settings, convergence, and largest scaled residuals. |
| Medium | Adds algebraic nonlinear model, variable summaries, all column activities, residuals, and feasibility breaker details. |
| High | Adds matrix variables/equations, nonlinear model by row, nonlinearity pool, component and row contributions, and variable shadow prices. |

Report Settings tabs linked to PIMS tables:

| Tab | PIMS relationship | Purpose |
|---|---|---|
| Table MSGSUP | PIMS `MSGSUP` | Suppresses warning codes from execution log, `WARN.lst`, and `ERRMsg.xls`; codes can be added manually or imported from recent case runs. |
| Table REPORT - Errors and Warning messages | PIMS `REPORT` | Marks messages as Warning, Error, Suppress, or Delete; Suppress hides them from execution log and UI messages, Delete also excludes them from `WARN.lst` and `ERRMSG.xls`. |
| Table REPORT - Fixed Cost | PIMS `REPORT` | Adds fixed-cost rows to Economic Summary Analysis; fixed costs are displayed but not included in the objective function. |
| Table REPORT - Trancol/AVA analysis | PIMS `REPORT` | Adds Trancol report row/column masks and AVA analysis rows/columns using `TCMASK` and `TRMASK`. |

Report Settings import/export notes:

- Table REPORT content can be imported from correctly formatted Excel files.
- **Export in grid format** is for viewing and is not re-importable.
- **Export in PIMS format** creates a re-importable workbook such as `DataExport.xlsx`.
- Trancol masks use seven-character criteria with text and wildcards; multiple criteria can be separated by spaces.

### Model Settings and Solver Settings

General Settings configure model-wide behavior for AUP and Multi-Site PIMS. They are accessed from **Settings > General Settings** and are split into Application, UI Behavior, and Aspen Virtual Advisor tabs.

General Settings - Application tab:

| Section | Key behavior |
|---|---|
| Scope | Multi-Site-only context selector for global settings or a specific plant. |
| General | Model basis, model type, built-in assay system, and Custom DLL folder. Model basis is fixed after model creation; model type changes should be checked in immediately. |
| Penalties | Period-spanning blend recipe penalty and virtual pooling penalty. |
| Factors | TEL/GALS, volume-to-weight, and gas volume-to-weight conversion factors. |
| Notes | Report notes, limited to 20 lines with each line truncated to 24 characters. |
| Model Constraints | MINOBJ, case-stacking bound update behavior, FIXBAL material-balance equality behavior, and property scaling for N/X submodel rows. |
| Nonlinear initialization | Default initial value, estimated-value confidence, hybrid quality initialization, nonlinear presolve, periodic recursed-pool inventory handling, and missing estimated-value handling. |
| Advanced Application Settings | Expert-only time limits, coefficient/assay tolerances, Multi-Site options, and miscellaneous matrix/model behavior. |

Selected General Settings caveats:

- **Enable Assay System** enables the built-in assay system only when the model has no undisposed deferred crude cuts; otherwise AUP blocks enabling it.
- **Custom DLL Folder** points to a server-side folder under `ProgramData\AspenTech\AspenUnified\CustomDLLx64` containing `PUBML.dll`, custom DLLs, and model configuration files.
- **FIXBAL** makes material-balance rows equality rows. It can reduce local-optimum susceptibility but may expose structural problems or cause non-convergence.
- Hybrid quality initialization replaces poor bound-pinned property values from an input solution with material estimated values; it is recommended only when estimated values are reliable.
- Advanced settings can materially affect convergence, feasibility, and model size; they should be changed only with expert understanding.

General Settings - UI Behavior and AVA:

| Area | Key behavior |
|---|---|
| Format | Controls name/abbreviation/description display on tables and period columns. |
| Significant Figures | Controls displayed precision for tables and tooltips only; calculations are unaffected. |
| Case Context Selectors | Controls recent-case count and whether case groups appear in the application bar selector. |
| Periodic Column Order Conversion | Periodic-model-only controls for default-period columns and collating period columns by variable or by period. |
| Stream Style | Flowsheet stream line weight, color, highlight color, label font, and label size. |
| Units of Measure | Model UOM text and defaults for liquid volume, gas volume, weight, time, and crude-pool characters. |
| Currency | Currency symbol, monetary scale factor/text, and annual discount rate used with period present-value factors. |
| Solution | Optional solution coloring bar for Data Panel solution-result columns. |
| Aspen Virtual Advisor | AUP-only tab; enabling AVA turns on the Run Cases AVA optimization-analysis option and requests a restore point. |

Solver Settings are accessed from **Settings > Solver Settings** and are grouped into General, LP, and MIP areas. They map to Aspen PIMS XSLP/XNLP and LP/MIP setting groups.

Solver Settings - General area:

| Section | Key behavior |
|---|---|
| Solver Interactions | Maximum nonlinear iterations, delay before MIP invocation, and maximum MIP iterations after MIP is invoked. |
| Nonlinear Solver Tolerances | Residual and objective convergence tolerances. |
| Multi-Start Options | Max NLP solver calls, reporting threshold, variable type to randomize, solution saving, and plotting. Defaults are strongly recommended. |
| Resolve | Optional verification by resolving from the final solution, with pass count and relative tolerance. |
| Solver Options | Automatic variable/objective scaling, improve-local-solution behavior, epsilon handling, and infeasibility breakers. |
| Advanced Non-Linear Solver Options | Trust region, basis start, property-bound relaxation, independent-variable step bounding, zero-flow pool property handling, and presolve algorithm. |
| External Models | AOS solver selection and Input/Output Mapping for external models. |
| Advanced Multi-Start Options | Trial count, time/call limits, random sampling, distance filters, merit filters, and basin controls. |

Solver Settings - LP and MIP areas:

| Area | Key behavior |
|---|---|
| LP Options | Optimization algorithm, crash procedure, pricing method, presolve, infeasibility tracing, intermediate solution writes, basis timing, LP iteration limit, and LP scaling limit. |
| LP Tolerances | Optimality, pivot, feasibility, invert-pilot, and ETA zero tolerances; defaults are recommended. |
| MIP Options | Node selection, cut strategy, diagnostics print frequency, LBD integer pricing, parallel MIP, and MIP warm start. |
| MIP Limits | Relative/absolute objective gap tolerance, integer feasibility tolerance, branch-and-bound node limit, and maximum integer-solution count. |

Solver notes:

- If MIP variables do not optimize as expected because the model converges before MIP is invoked, reduce **Max number of iterations before MIP invoked** to `1`.
- Automatic objective-function scaling turns off automatically when the initial LP is infeasible; negative or near-zero initial objectives may need manual scaling.
- Improve Local Solution introduces temporary nonzero bounds for pool-collector columns; setting the smallest initial pool collector activity to `0` disables it.
- Infeasibility breakers can be automatic, always on, dynamically added/removed, R-row-only, or R-row-excluded.
- Input/Output Mapping for external models reduces the returned residual/partial-derivative equation set but does not change whether external nonlinear equations are evaluated during XSLP iterations.

Non-Default Settings:

- Shows only settings whose current values differ from defaults.
- Columns identify Page, Tab, Section Heading, Field Label, Value, Default, and Multi-Site Scope.
- Users can select rows and reset individual settings from the Table Tray.
- From any settings page, **Reset to Defaults** resets all values on that settings page.

### Simulation Status Codes

Aspen Unified submodel simulation uses an SQP-style solver for square systems. The status codes help diagnose convergence and specification issues.

| Status | Meaning / likely action |
|---|---|
| Solved | Simulation converged successfully |
| Bad input | Input specification is invalid |
| Maximum number of iterations exceeded | Solver hit the internal 50-iteration maximum |
| Quadratic programming failure | QP subproblem failed; check specification and solver logs under `...\ProgramData\AspenTech\AspenUnified\Logs` |
| Singular | Equations are not well-defined, redundant, or overspecified; check variable specifications and dropped equations |
| Optimization converged but residual still too large | Solver converged numerically but residuals remain too large |

Troubleshooting cues:

- QP failures can indicate near-singular behavior or zero inlet flow rates.
- Very large shadow prices can point to material-balance problems; importing a converged case solution can help recover starting values.
- Singularities can result from fixing all variables in an equation, unrelated specifications, very small or zero flows, or large changes in feed properties/operating conditions.
- For large models, turning off auto singularity checks can speed specification work, but it does not guarantee that all structural singularities are avoided.

---

## Distillation Modes and Tower Configuration

Distillation mode configuration models crude tower operation in terms of physical towers, mode-specific tower combinations, crude slates, cut points, assay cutting data, and utility/DBAL consumption. It is centered on crude distillation modes, not generic submodel simulation.

### Core Concepts

| Concept | Meaning |
|---|---|
| Crude Tower | Physical crude-processing unit. Aspen Unified supports Atmospheric Distillation Towers, Vacuum Distillation Towers, and Splitters |
| Crude Distillation Mode | Mode that combines one or more physical towers to separate crude oil into fractions |
| Slate block | Always present on a mode flowsheet and represents the crude slate feeding the atmospheric tower |
| Sharp Separation | Uses specified cut points with the TBP curve and assumes products do not overlap |
| Distillation-based | Uses shortcut distillation with separation indices to represent overlap between fractions |

Mode composition rules:

- A configured mode must include exactly one atmospheric tower.
- A mode can include up to one vacuum tower.
- A mode can include any number of splitter towers.
- A physical tower can participate in multiple modes; those modes may differ by crude slate, cut points, tower connections, and products.
- When the built-in assay management system is not enabled, users can import existing distillation-mode data but cannot create a new mode inside AUP.

Tower abbreviation conventions:

| Tower type | Abbreviation pattern | Notes |
|---|---|---|
| Atmospheric tower | `AT<x>` | At least one is required |
| Vacuum tower | `VT<x>` | Zero or one is allowed |
| Splitter | `S<xyz>` | Any number is allowed |

### Creating and Configuring Physical Towers

Physical towers are created from the Model Flowsheet. Tower configuration is performed in the Base Model and must be completed before the tower is used by a distillation mode.

Typical flow:

1. Add a tower from **Add Flowsheet Components**.
2. Enter name, description, and abbreviation.
3. Configure tower details from the property panel or a tower detail page.
4. Optionally define nominal capacity.
5. Define the default product set and cut type for each product.
6. Add the configured tower to one or more crude distillation modes.

Important restrictions:

- Once a tower is used in a distillation mode, streams cannot be added or removed until the tower is removed from all modes.
- Product materials are added after the tower is created, and the number of products cannot be changed after the tower is included in a mode.
- Changing a cut type for a material affects all instances of that cut material.
- Although crude towers are intended to include physical products, legacy PIMS models may represent light-end components as crude tower products; AUP allows that modeling pattern.

Tower product rules:

| Tower | Product/cut rule |
|---|---|
| Atmospheric tower | First cut must be Gas or Atmospheric Cut |
| Atmospheric tower | Bottom cut can be Atmospheric Cut or Atmospheric Resid |
| Atmospheric tower | Last cut must be Atmospheric Residual if a vacuum tower is connected |
| Vacuum tower | Streams are Vacuum Cut |
| Splitter | No special cut-type restrictions |

### Distillation Modes Summary

The **Distillation Modes Summary** page lists all modes and their associated towers.

| Column | Meaning |
|---|---|
| Distillation Mode | Mode name with description/abbreviation; not editable from this table |
| Towers | Towers associated with the mode |
| Separation Type | Visible only with built-in assay management; Sharp Separation or Distillation-based |
| Last Updated | Timestamp when cutting results were last updated |

Operations:

- Create a new mode when built-in assay management is enabled.
- Change the separation type.
- Import/export distillation mode information through Excel.
- Open enabled configuration links.
- Open tower data from the Towers column.
- Recalculate assay formulas when imported or formula-driven data changes.

Import behavior:

- Imported distillation mode files replace all crude distillation information.
- Repeated file names such as `filename(x).xlsx` are normalized internally so AUP can update existing imported source data rather than creating unnecessary duplicate records.
- Export creates `Distillation Mode Management.xlsx`, which can be used as an import template.

### Distillation Mode Flowsheet

The **Mode Flowsheet** defines the towers and streams for one distillation mode. A configured mode shows its columns, inputs, and flows.

From this page users can:

- Open the Slate block to configure crude slate membership.
- Add or remove columns from Atmospheric, Vacuum, or Splitter stockpile tabs.
- Change separation type when built-in assay management is enabled.
- Open Cut Properties.
- Open Assay Cutting Data.
- Open Utilities & DBAL Consumptions.
- Configure tower products by double-clicking a column block.

### Creating Crude Distillation Modes

The mode creation workflow assumes physical crude towers have already been created and configured.

Typical workflow:

1. Create a new mode from Distillation Modes Summary.
2. Enter unique name, description, and abbreviation.
3. Select Sharp or Distillation-based separation type.
4. Add at least one atmospheric tower, optionally one vacuum tower, and optionally splitters.
5. Connect the vacuum tower to the atmospheric tower when used.
6. Configure tower cuts and swing cuts.
7. Enter FVT values for tower and swing cuts.
8. Select crude slate membership.
9. Select cut properties for calculation.
10. Generate and preview assay cutting data.
11. Apply changes to the model.
12. Configure utility consumption and DBAL mappings.

Splitter note:

- Basic splitter towers can be configured as part of the mode.
- Custom submodel splitters are defined by their submodel configuration; their feeds/products and connectivity are fixed and cannot be modified directly from crude tower configuration.

### Mode Column Configuration

Mode Column Configuration shows the products for one tower within a mode. Default product streams come from the physical tower configuration, but mode-specific materials and swing cuts can be adjusted.

Key actions:

| Action | Meaning |
|---|---|
| View another column | Switch to another tower; `*` indicates incomplete configuration |
| Add/change products | Change material for a product stream, without changing the number of tower streams |
| Add swing cut | Insert a swing cut between atmospheric or vacuum tower cuts |
| Change FVT | Set final volume temperature; values must be monotonically increasing |
| Change SI Top / SI Bottom | Distillation-based only; controls imperfect fractionation slope |
| Return to Mode | Go back to the mode flowsheet |
| Tower Configuration | Open physical tower configuration, read-only while mode-associated |
| Submodel Configuration | For splitters, open splitter submodel configuration |

Swing cut rules:

- Swing stream tags must be three characters.
- The first two characters can be any characters.
- The third character must be `0-9` or a lowercase letter.
- No two swing streams in the same mode can share the first two characters.
- No swing streams in any mode can share the same three-character tag.
- The first non-light-end product cannot be a swing cut.
- Two `Swing Cut` rows cannot be continuous.
- Adjacent swing cuts are allowed when a `Swing Cut` is followed by `Swing Up/Down`.

Tower-specific swing rules:

| Tower | Rule |
|---|---|
| Vacuum | `Swing Up` can be below a `Vacuum Cut` |
| Vacuum | `Swing Down` can be above a `Vacuum Cut` |
| Vacuum | `Swing Cut` or `Swing Down` cannot be below the final `Vacuum Cut` or be the final cut |
| Atmospheric | `Swing Down` is not allowed above an `Atmospheric Resid` cut |
| Atmospheric | If there is no `Atmospheric Resid`, the last atmospheric cut can be Swing Cut, Swing Up, or Swing Down |

Distillation-based note:

- SI factors can affect properties but do not change yields for operational planning, because the specified cut point is treated as a volume read from the crude TBP curve.

### Crude Slate Summary

The **Crude Slate Summary** page controls which crudes are candidates for each distillation mode.

Actions:

- Include or exclude a crude from a mode.
- Open crude details.
- Copy, merge, or replace crude slate membership from another mode.

### Cut Properties

Cut Properties determine which properties are calculated for each cut in a mode. This page is visible only when the built-in assay management system is used. Without built-in assays, cut properties come from imported distillation data and are fixed.

Actions:

- Copy all properties from another distillation mode.
- Select the cut/property combinations to calculate.
- Define custom formulas to adjust property calculations.
- Open Assay Cutting Data and generate cutting results.

### Assay Cutting Data

Assay Cutting Data previews and updates the cut data generated for a mode. If built-in assay management is not used, the page displays imported cut data and does not allow editing.

Data represented for a distillation mode can include:

- Material balance rows such as `WBAL` and `VBAL`
- Inspection rows for property/cut combinations
- `CCAP` capacity rows
- Control rows: equality (`E`), less-than (`L`), and greater-than (`G`)
- `ZLIM` process limit rows
- Process parameter (`P`) rows

Tabs:

| Tab | Purpose |
|---|---|
| All | Shows selected crudes, assay values, calculated flags, and old/new/diff data when available |
| Calculated | Shows formulas and variable/property mappings for calculated cut properties |

Important behavior:

- If mode information changes, users must regenerate cutting results when entering this page.
- **Generate Assay Cutting Data** previews updated data for selected crudes.
- **Apply Changes to Model** saves new data and makes it the old baseline.
- Importing assay cutting data removes all current table data and replaces it with the Excel data.
- Export creates `Assay Cutting Data.xlsx`.

Define Custom Formula dialog:

- Defines or edits Assay property custom calculations used by Assay Manager recutting.
- Formula calculations run after assay import, after editing a calculation, and when **Recalculate Assay Formulas** is used from Assay Cutting or Distillation Modes Summary.
- Formula calculations do not run during case execution or when uploading/importing blend properties.
- If mapped parameter values change through import or value edits, users should rerun **Recalculate Assay Formulas**.
- Access points include the edit action on the Assay Cutting Data Calculated tab and green mapped-property cells on the Cut Properties page.

Custom formula fields:

| Field / option | Meaning |
|---|---|
| Formula | User-defined equation; add predefined operators, functions, or variables from the add control. |
| Equation | Formula after automated syntax correction. |
| Mapping | Maps each formula variable or parameter to an existing property or value; available choices depend on property type. |
| Periodic value mapping | For periodic values from Blend - Fixed Properties, only Default Value can be selected. |
| OK | Enabled only when every variable is mapped; saves changes, runs the calculation, and closes the dialog. |

### Utility and DBAL Consumption

Utility Consumption defines utilities consumed or generated by towers in a distillation mode and maps deferred/delayed balance cuts.

Utilities table:

| Field | Meaning |
|---|---|
| Utility | Utility associated with the mode |
| Tower | Atmospheric or vacuum tower associated with the utility |
| Value | Unit-per-column activity amount |

Rules:

- Utility consumptions are positive.
- Utility productions are negative.
- Utilities can be added from model utilities, replaced, associated to a different tower, or removed.

DBAL Consumption maps a material stream to each DBAL deferred/delayed cut present in assay data.

| Field | Meaning |
|---|---|
| Local Tag | Assigned DBAL/deferred cut tag |
| Material | Material mapped to the deferred/delayed cut |
| Material Description | Description for the mapped material |

### Distillation Tower Results

The **Distillation Towers Summary** page displays result-oriented detail for a physical tower after a case run. Starting with V12, migrated Aspen PIMS `NEWCUT` data is included.

Result tabs:

| Tab | Purpose |
|---|---|
| Feeds & Yields | Shows consumed and produced materials, total rows, volume/weight percentages, and optional property columns |
| Utilities | Shows utilities used or generated by the tower |
| Capacities & Limits | Shows capacity and process-limit Min/Solution/Max/Marginal/Penalty data |
| Materials | Shows source/material/destination relationships for tower feeds and products |

Important result behavior:

- The **Include LOS stream** option appears only in volume-based models.
- If selected, the volume loss `LOS` stream participates in balance calculations.
- If not selected, the LOS stream is ignored in balance calculations.
- Property columns come from the reporting configuration on Submodel Summary and only applicable properties appear.

---

## Materials, Utilities, Groups, and Properties

This area defines the material and property master data that other PIMS surfaces consume: purchases, sales, inventories, blends, submodels, flowsheet streams, reports, and assay/ABML-related calculations.

### Materials and Properties Entry Point

The **Material & Properties Summary** page is a navigation and count summary for the current model. In a standard AUP model it links to local materials, assays, crude oils, blends, groups, properties, ABML correlations, and utilities. In a Multi-Site PIMS model, the global material summary exposes only global material references.

### Materials and Utilities Summary

The **Materials** table lists all model materials; in Multi-Site PIMS it lists global materials. Row order defines the model order used in navigation, reports, and charts. The **Utilities** table follows the same summary pattern, with utility name/tag and UOM.

Material and utility types include:

| Type | Meaning |
|---|---|
| Standard | Normal material used in model balances and flows |
| Crude | Crude material tied to assay/cutting or crude-blend data |
| Blend | Specification or formula blend material |
| Utility | Utility/additive-like item with utility UOM behavior |

Important rules and behaviors:

- If the active case is not the Base Model, most values are read-only except enabling or disabling a material for execution.
- The **Disabled** state is case-dependent and excludes the material or utility from execution for that case and child cases.
- Enabling/disabling materials is reflected on purchase and sales tables.
- Virtual pool materials are tied to their virtual pools: renaming the material renames the pool, and deleting the material deletes the pool.

Result-oriented material columns appear after execution or where applicable:

| Column / area | Meaning |
|---|---|
| Purchases / Sales | Indicates whether the material is present in purchase or sales data; after a run, shows bought or sold amount |
| Submodels | Indicates use in submodels and, after a run, summarizes production/consumption |
| Blending | Indicates use in blending and, after a run, shows blending consumption/production |
| Balance | Total production minus total consumption; visible after execution |
| Incremental Value | Objective-function change for one additional unit of material |
| Inventory Change | Periodic-model inventory movement for materials included in inventory |
| Producer / Consumer area | Lists sources and destinations for the selected material; after execution also shows percentages, totals, and balance |

For Multi-Site PIMS models, additional summary columns identify supply, demand, and per-model disabled state. Local plant materials are accessed from the plant's **Materials & Properties** area, while global materials are accessed under the global **Materials** area.

### Material and Utility Details

The **Material/Utility Details** page controls the definition of one material, utility, or stream-like material. UOM and basis values can only be set from the Base Model.

Key definition fields:

| Field | Purpose / PIMS relationship |
|---|---|
| Name / Description / Abbreviation | Master identity; abbreviation must be unique |
| Material Service | Assigns a service used for automatic flowsheet connections and site-catalog publishing |
| Type | Standard, crude, blend, or utility; determined at creation |
| Crude data source | Points to Assay Cutting or Crude Blend data; `None` indicates incomplete crude setup |
| Use Gas UOM | For utilities, switches between gas-volume and liquid-volume display basis |
| UOM | Material balance unit; custom strings can represent PIMS `UNITS` behavior |
| Buy Basis / Sell Basis | Equivalent to `WGT` or `VOL` in PIMS `BUY` and `SELL` tables |
| Alternate Material Identifiers | Equivalent to PIMS ALT tags; allow different price or purchase/sale terms for the same material |
| Volume-based pricing | For weight-based models, corresponds to `VPRICE` in the PIMS SALES table |
| Blending target up/down penalty | Default blend target penalty for standard materials; overridden by explicit blend-component penalties |

Material properties can be maintained directly on the material detail page:

| Property area | Meaning / PIMS relationship |
|---|---|
| Fixed Value | Fixed material property value; reflected in the Properties summary Fixed tab; equivalent to `BLNPROP` |
| Estimated Value | Initial guess and recursion flag for material/property recursion; equivalent to `PGUESS` |
| Derived Properties | Defines `Y = M * X + B` relationships against a reference material; equivalent to `PCALC` and `PCALCB` |
| Property Results | Displays solved material property values for the active case after execution |

Estimated-property behavior is important: if no estimated value exists, the system does not recurse that property for the material. A value such as `999` can be used as a placeholder to indicate that recursion should occur but the initial value is resolved elsewhere, commonly from assays.

### Material Services

Material services group one or more materials for planning/scheduling integration, automatic flowsheet connection, reporting, and publishing. They may come from a connected Site Catalog or be local to the model.

Material services support inheritance: one service can belong to or include other services, and its property set is the union of inherited and local tracked properties.

Key behaviors:

- A material is assigned to a service from the material's Definition tab.
- Services help automatic port/material assignment on the flowsheet.
- Published status indicates whether a service has been published to the connected Site Catalog.
- Services can be imported from the Site Catalog or exported to `Material Services.xlsx`.
- A material service cannot be deleted if it is used elsewhere in the model.

Tracked properties on a material service are reportable and are the properties included in related calculations. The details pane also controls service hierarchy through **Belongs to Material Services** and **Included Material Services**.

### Material and Utility Groups

Groups let users apply model behavior to collections of materials or utilities. The Groups Summary page has separate **Materials** and **Utilities** tabs; the utility tab is not available for Multi-Site PIMS local models.

Groups are used by:

- Purchases
- Sales
- Blend Specs
- Inventories in periodic models

Important group rules:

- New groups can only be added when the active case is the Base Model.
- Group disabled state excludes the group from execution for the active case and child cases.
- A highlighted disabled cell indicates a value changed away from its inherited state; it can be reset to inherited.
- Removing a group from a specific purchase, sale, or blend-spec table must be done from that table, not only from the group summary.
- Group import/export supports grid and PIMS formats; PIMS-format import maps to the `Groups` table.
- New material groups can be created from Materials Summary, Purchases/Sales, Blends, or Crude tables by selecting one or more items, choosing **Create New Group** from the Table Tray, entering a 20-character ASCII name, description, and unique three-character ASCII abbreviation, then opening Group Configuration with **Create & Configure**.

Group Configuration maintains name, description, abbreviation, group number, usage flags, disabled indicator, and members. Group numbers are editable only in the Base Model and must be positive integers below 1000. Alternate material tags can be added as group members only when the model setting **Enable Alt Tags in material groups** is enabled.

### Properties Summary

The Properties Summary page lists all property definitions in model order. It also centralizes property values that are stored on material details pages.

Main tabs:

| Tab | Purpose / PIMS relationship |
|---|---|
| All | Lists properties, UOM, blending basis, type, min/max recursion limits, and flowsheet reporting flag |
| Fixed | Summary of fixed material properties; equivalent to `BLNPROP` |
| Estimated | Summary of initial recursion guesses; equivalent to `PGUESS` |
| Derived Multiplier | `M` in `Y = M * X + B`; equivalent to `PCALC` |
| Derived Bias | `B` in `Y = M * X + B`; equivalent to `PCALCB` |
| Bonuses | Centralized blend bonus values, corresponding to `PBonus` |

Property deletion is allowed only when the property is no longer referenced by the matrix row, any blend specification, or any ABML correlation.

Import/export notes:

- Fixed properties import maps to PIMS table `BLNPROP`.
- Estimated properties import maps to `PGUESS`; migrated Aspen PIMS `PGUESS!xxx` solver files can be reviewed and imported to update estimates.
- Derived multiplier and bias imports map to the derived-property equivalents of `PCALC` and `PCALCB`.
- Exporting in PIMS format is the recommended way to obtain a valid bulk-edit/import template.

New Property dialog:

- Adds a property as a user-defined property or, when a property library is available, from existing property definitions.
- Property types include physical properties, physical property instances, composition properties, and distillation properties.
- Property name and tag cannot be changed after creation; renaming requires deleting and recreating the property.
- **Create & Configure** opens Property Configuration immediately; **Create** adds the property and leaves configuration for later.

New Property fields:

| Field | Meaning |
|---|---|
| Name | Required unique property name up to 20 characters; cannot start with `*` or `!`; not editable after creation. |
| Description | Optional description up to 80 characters; display depends on the UI Behavior Format setting. |
| Abbreviation | Required unique three-character case-sensitive alphanumeric tag shown in parentheses on tables and reports. |
| Blending basis | Volumetric by default; Gravimetric can require a conversion factor to convert specification basis to volume-basis equivalent. |
| Group / Property | Maps the property to the reference template shared by AUP and Assay Management, including UOM choices. |
| Additional definition fields | Temperature, Component Group, Component Name, Method, or Curve Type appear only when required by the selected property type. |

### Property Configuration and Property Library

Property Configuration defines one property in detail and connects it to blending, assay, ABML, interaction, and index behavior.

Definition fields and rules:

| Field / area | Meaning |
|---|---|
| Name | Max 20 characters |
| Description | Max 80 characters |
| Abbreviation | Three-character unique, case-sensitive abbreviation |
| Type and UOM | Defined through the Define Property Type dialog |
| Blending basis | Volumetric by default except common gravimetric cases such as SUL and BTU; can use a conversion factor |
| Blend specification penalty | Infeasibility/penalty cost for violating specification constraints; corresponds to `SCALE.PENALTY` |
| Default minimum / maximum | Recursion range; corresponds to `SCALE` behavior |
| Property calculation formulas | Indexed property formulas comparable to the Aspen PIMS Property Calculator |

The Define Property Type dialog maps a property to a reference template shared by AUP and Assay Management. Depending on the selected group/property, it can require UOM, temperature, component group/name, method, or curve type. Index properties can use ASTM or ABML methods.

Property Configuration tabs:

| Tab | Purpose / PIMS relationship |
|---|---|
| ABML Crossreference | Shows ABML correlations where the property is an input or output |
| Interaction | Defines nonlinear interaction blending coefficients; same purpose as PIMS `INTERACT` |
| Assay Manager | Supplies formulas for user-defined properties missing reference-property definitions |
| ABML Mapping | Defines blend property aliases; same purpose as `ABMLMAP` |
| Index | Defines smooth index/property curves for reporting and assay/property usage |

Property Library adds concept-level rules:

- Interaction blending calculates blend properties from component fractions, pure component values, and interaction coefficients. It is recursive and requires estimated values for the material property.
- ABML mapping is used when different correlations output different property tags that must feed a downstream correlation under one expected tag.
- Index properties can add property rows to Assays and Material Details, calculate report-only properties, or define derived multi-property report relationships.

### Advanced Modeling Summary, Rows, and Ratios

The **Advanced Modeling Summary** page is the navigation hub for advanced model-structure features. It shows each feature with a count of associated items and links to the detailed summary or table for that area.

Advanced Modeling links include:

| Link | Purpose |
|---|---|
| Rows | Review or import PIMS `ROWS` data used to extend or override matrix rows and columns. |
| Ratios | Define equality relationships between two or more matrix column variables. |
| Nonlinear Curves | Define generalized nonlinear recursion curves. |
| Virtual Pools | Manage virtual pool definitions. |
| MIP | Manage mixed-integer processing definitions. |
| Gas Plant Drivers | Navigate to gas-plant driver/MIP-related setup. |
| Additives | Configure additive behavior and response points. |
| Nonlinear Equations | Define explicit nonlinear equation rows. |

The **Rows** table contains the same information as the PIMS `ROWS` table. It is not directly editable except for variable mapping; row data is added by importing a correctly formatted Excel workbook.

Rows are used to:

- Add new linear-equation structure to the model matrix through externally defined rows and columns.
- Augment or modify existing model structure.
- Update estimates of generalized nonlinear recursed coefficients.
- Change variable mappings for migrated or imported matrix variables.

Important row behavior:

- Entries in Rows can overwrite entries from submodel tables when the same constructs exist in both places.
- Some model constructs intentionally cannot be modified through `ROWS`; attempts may produce no application warning, and the matrix reader may fail later.
- Row and column filters help narrow the visible data. Row filters use row naming formats; column filters use port names.

Rows table fields:

| Column | Meaning |
|---|---|
| Row Variable | Required row name to modify or augment. Clicking it opens variable mapping. |
| Text | Optional description, max 20 characters. |
| FIX | Non-blank value declares the row as equality and overrides MIN/MAX. |
| FREE | Non-blank value declares the row free/unconstrained. |
| MIN | Non-blank value declares the row as greater-than-or-equal; commonly used to fix selected material-balance rows. |
| MAX | Non-blank value declares the row as less-than-or-equal. |
| USER | Global-model structure flag. For single-period, single-plant models, enter `0`; for multi-site/global ROWS usage, behavior depends on model type. |
| SLACK | Adds a matrix column with the same name as a blended-product specification row and changes that specification row to equality. |
| RHS | Right-hand-side value in the generated matrix. |
| Column Names | Generated purchase/sale/blending/unit-operation column names or new columns to add directly to the matrix; clicking a column name opens variable mapping. |

Rows operations:

- Import PIMS `ROWS`-format Excel data; import can update existing data or replace the entire table.
- Export in grid format to `Rows.xlsx` for review only.
- Export in PIMS format to `DataExport.xlsx` as a re-importable template.
- Download imported files; the latest import of a file replaces older versions of the same file.

The **Ratios** table defines relationships between matrix column variables. For each pair of variables with a defined ratio, Aspen Unified creates an equality control row.

Ratio summary fields:

| Column | Meaning |
|---|---|
| Ratio | Ratio name with tag. The name cannot be changed after creation; clicking it opens variable mapping. |
| Description | User-defined ratio description; editable in the table. |
| Abbreviation | Three-character abbreviation. |

Ratio data rules:

- Each ratio should contain at least two matrix columns.
- The Matrix Column field is an up-to-seven-character variable tag.
- If Matrix Column is blank when the page is exited, the row is removed.
- The ratio-tag column stores the ratio amount between variables and is editable in the table.
- Row and column filters are available here as well; they show totals and applied filter counts.

### Virtual Pools

Virtual Pools are not physical pools. They are mathematical structures used to enforce restrictions on the model by treating a group of real feed streams as a compositional pool that must travel together to common destinations.

Unlike a real pool or user pool, the product of a virtual pool is not a real material and blending does not happen in a single physical unit. The model calculates an optimal ratio of all virtual-pool feed materials. Once optimized, that fixed mix must be used wherever any of those feed materials feed a process or blend. The feed materials cannot be used individually outside the virtual pool unless exemptions are defined.

PIMS relationship and lifecycle rules:

- The Virtual Pool summary contains the same information as PIMS table `VPOOLS`.
- Adding a virtual pool automatically adds a material with the same name to the Materials table.
- Renaming a virtual pool also renames the associated material.
- Deleting a virtual pool automatically deletes the virtual-pool material.
- Virtual pools are commonly used when a feed mix, such as a crude slate, feeds more than one process and must remain compositionally consistent.

Virtual Pool summary fields:

| Column | Meaning |
|---|---|
| Virtual Pool | Pool name. |
| Description | Pool description. |
| Materials | Number of materials or streams in the virtual pool. |
| Exemptions | Number of matrix-row entries ignored when the virtual-pool structure is generated. |
| Disabled | Case-variant flag that makes the solver ignore the pool; non-Base changes are highlighted and can be compared or reset through inherited-case options. |

Summary operations:

- Add a virtual pool only from **Base Model**. The new pool also creates a material with the same name.
- Import PIMS `VPOOLS`-format Excel data; import can update existing data or replace the table.
- Export in grid format to `Virtual Pools.xlsx` for review only.
- Export in PIMS format to `DataExport.xlsx` as a re-importable template.
- Enable or disable pools per case through the Table Tray.

Virtual Pool Details contains Base Model structural data plus case-sensitive member guesses.

| Area | Rules |
|---|---|
| Name | Unique pool name; editable only in Base Model; must also be unique against materials because the associated material shares the name. |
| Abbreviation | Pool tag; editable only in Base Model. |
| Description | Optional description; editable only in Base Model. |
| Virtual Pool Members | Add members from Base Model using the search field; remove members through row delete or Table Tray; export to `VPool Members.xlsx`. |
| Compositional Guess | Initial ratio guess for material participation in the pool; can vary by case and shows inherited-value highlighting. |
| Virtual Pool Exceptions | Matrix-row entries to ignore when virtual-pool structure is generated; configured in Base Model and exportable to `Virtual Exceptions.xlsx`. |

Exception types can reference blend products, submodels, and sales. They are used when selected processes, blends, or sales should be exempt from the fixed-ratio virtual-pool requirement.

### Mixed Integer Programming (MIP)

MIP, or Mixed Integer Programming, lets planners add mixed-integer structure to a planning model. It is used for activities that require integer values and for logic such as mutually exclusive processes, threshold purchases, throughput decisions, and limited alternatives.

Common MIP usage:

- Restrict selected variables to bounded integer values.
- Define binary variables that can only take values `0` or `1`.
- Model either/or decisions and other logical choices.
- Use SOS sets to restrict which variables in a group can be active.

Modeling caution: MIP should be used carefully. Adding integer requirements indiscriminately can dramatically increase solve time, so integer variables should be selected conservatively and bounds should be as tight as practical.

The **MIP** table contains the same information as PIMS table `MIP`. It can be edited directly, and additional rows can be loaded by importing a correctly formatted PIMS `MIP` workbook.

Semi-continuous and threshold behavior:

- `LBD` and `UBD` define a variable that must be either `0` or between its lower and upper bound.
- For each such variable `Xj`, the system generates a binary variable `Dj`.
- The generated structure enforces `Xj <= UBD * Dj` and `Xj >= LBD * Dj`.
- If `Dj = 0`, the variable is forced to `0`; if `Dj = 1`, the variable lies between `LBD` and `UBD`.
- If only `UBD` is supplied, `LBD` defaults to `0.0`; if only `LBD` is supplied, `UBD` defaults to `10000`.

MIP table fields:

| Column | Meaning |
|---|---|
| MIP Variable | Required LP column name whose integer requirement is being specified. Clicking it opens variable mapping. |
| Text | Optional description, max 20 characters. |
| LBD | Lower threshold bound; for multi-period models, a period identifier may be added, such as `LBDn`. |
| UBD | Upper threshold bound; for multi-period models, a period identifier may be added, such as `UBDn`. |
| LI | Lower integer requirement; missing integer bounds default to `0` and `10000`. |
| UI | Upper integer requirement; cannot be combined with continuous `LO`, `UP`, or `FX` bounds from Bounds, Purchases, or Sales. |
| BV | Binary requirement flag; numeric entries imply bounds of `0` and `1` and cannot be combined with continuous bounds. |
| SOSSET | Unique SOS group number. |
| SOSTYPE | SOS type: type 1 permits one active variable; type 2 permits one or two active variables, and two active variables must be adjacent. |

SOS behavior:

| Type | Rule |
|---|---|
| Type 1 | One and only one variable in the group can have activity. |
| Type 2 | One or two variables in the group can have activity; if two are active, they must be adjacent. |

MIP operations:

- Filter by row naming conventions or column/port names.
- Remap migrated or imported variables from the MIP Variable link.
- Download imported files; the latest import replaces older versions of the same file.
- Import PIMS `MIP`-format Excel data, either updating existing data or replacing the table.
- Export in grid format to `MIP.xlsx` for review only.
- Export in PIMS format to `DataExport.xlsx` as a re-importable template.

### Gas Plant Drivers

In Aspen PIMS, gas plants are defined through regular submodels, and the PIMS `GASPLANT` table specifies automatic construction of gas-plant driver rows in process submodels. In Aspen Unified, **Gas Plant Connectivity** provides a shortcut for defining which material streams from which process units go to which gas plant.

Key model rules:

- Gas Plant Connectivity does not create materials, process units, or gas plants.
- All materials and all process units used as gas plants must already exist in the model.
- There is no special process classification for a gas plant; a process becomes a logical gas plant only when it is selected as the destination in Gas Plant Connectivity.
- The Gas Plant Driver table serves the same purpose as PIMS table `GASPLANT`.

Basic configuration workflow:

1. Confirm that the required materials and the process unit/submodel that will act as the gas plant already exist.
2. Open **Advanced Modeling > Gas Plant Drivers**.
3. Add a new driver and select the destination submodel; this selected submodel is the gas plant.
4. Use **Create & Configure** to open Gas Plant Configuration.
5. Add source process units that supply materials to the gas plant.
6. Add the material columns associated with the gas plant.
7. Mark the source/material intersections that send a material from a process unit to the gas plant.

Gas Plant Driver table:

| Column | Meaning |
|---|---|
| Gas Plant Driver | Read-only submodel name designated as a gas plant unit; clicking the name opens the associated Submodel Configuration page. |

Driver table operations:

- Add an existing submodel as a gas plant driver from the New Gas Plant Driver dialog.
- Use **Create & Configure** to continue directly to the configuration page.
- Double-click a driver name to return to its configuration page.
- Delete a selected driver from the Table Tray.

Gas Plant Configuration defines the connectivity matrix for one gas plant driver.

| Column / area | Meaning |
|---|---|
| Sources | Process units or submodels that send material to the gas plant. |
| Description | Description of the gas plant/source context. |
| Material Names | Material columns that can be associated with source units. |
| Source/material cell | A marked cell indicates that the material flows from that source process unit to the current gas plant. |

Configuration operations:

- Add one or more existing source submodels from the Add Sources search box.
- Add material columns from the Gas Plant Materials dialog.
- Remove material columns from the same dialog before saving.
- Click a source/material intersection to associate the material with that source unit.
- Use **To Gas Plant Drivers** to return to the summary page.

### Additives

Additives are fixed-percentage materials such as dyes or detergents. If the additive behavior is variable rather than fixed-percentage, model it as a component instead. Additives can be used in Utility Purchases, Utility Sales, Single Blend Specifications, and Blend Specifications tables.

The **Additives** summary table displays all additives defined in the model and links each additive to its detail page.

Additives summary fields:

| Column | Meaning |
|---|---|
| Additive | Additive identifier from the Additive dialog. Display format follows the model Format setting. Opening the additive leads to detail configuration. |
| Description | Additive description. |
| Susceptible Properties | Properties affected by the additive. Each listed property links to Property Configuration. |

Summary actions:

- Add an additive from **Advanced Modeling > Additives** using the add button.
- Delete an additive by hovering over the row and using the delete icon.
- Open details by double-clicking an additive or selecting the row and using the Table Tray edit action.

The **Additive** dialog is the first step in creating an additive.

| Field | Rules |
|---|---|
| Name | Required, unique, max 20 characters. |
| Description | Optional description. |
| Abbreviation | Required unique three-character alphanumeric identifier; case-sensitive; avoid special characters. It appears in parentheses after the additive name and on reports. |
| Create & Configure | Opens Additive Details to define volume conversion, response points, and susceptible properties. |

Important modeling rule: multiple additives can exist in a blend, but there can be only one additive effect per quality. A second additive in the same blend must affect a different quality from the first additive.

The **Additive Details** page is used to define volume conversion, response points, susceptible properties, and susceptibility values.

Detail fields and tables:

| Area | Meaning |
|---|---|
| Name | Read-only additive name. |
| Tag | Read-only additive tag. |
| Volume conv. factor | Optional factor used to convert the additive dimension into the blend volume dimension. If blank, the model `GALS` factor from General Settings is used. |
| Susceptible Property Responses | Matrix of additive amount rows and susceptible-property columns. Blank cells mean no response to the additive. |

Susceptible property response rules:

- The first column contains additive amounts.
- `0.0` represents clear values.
- `1.1` typically represents fully added.
- Response points are kept in ascending order.
- One column exists for each susceptible property.
- Susceptibility values are normalized between `0` and `1.0`.
- The additive response must be convex: the curve slope must decrease as additive level increases. The system warns when the curve is not convex.
- Values are usually sourced from crude assay and blend inspection tables.

Response point workflow:

1. From Additive Details, use the add menu and select **Response Point**.
2. Enter the additive amount in the Response Point dialog.
3. Confirm the value; it is inserted into the susceptible-property response table in ascending order.

Susceptible properties can be added or removed from Additive Details. Removing a property is done through the Susceptible Properties dialog and updates the response table columns.

Susceptible Properties dialog:

| Field / action | Meaning |
|---|---|
| Property | Read-only list of susceptible properties associated with the current additive; users select properties from the drop-down/search field. |
| UOM | Read-only unit of measure for the selected property. |
| Add property | Use the add drop-down from Additive Details, select **Susceptible Property**, then choose or search for a property name. |
| Remove property | Select the property row and use the delete action. |

### Nonlinear Curves and Equations (NLE)

Nonlinear curves and nonlinear equations live under **Model Data > Advanced Modeling**. They cover two related but distinct NLE mechanisms: curve-based nonlinear recursion and explicit nonlinear equation rows.

Recursion is the process of repeatedly solving a model, calculating physical-property data from the optimum solution through an external program, updating the model with the recalculated data, and solving again until the data changes are within specified tolerances. It compensates for estimated model data such as blend-component qualities, crude slate effects, cut points, unit severity, and feed ratios.

Aspen Unified uses five recursion mechanisms for model nonlinearities:

| Recursion type | Controlling table / area | Purpose |
|---|---|---|
| Distributive Property Recursion for Pools and Blends | `PDIST`, `PGUESS` | Implements PIMS distributive property recursion. |
| Distributive Octane Susceptibility Recursion | Additives | Implements octane-susceptibility recursion through additive response definitions for qualities. |
| Interaction Blending | `INTERACT` | Implements interaction blending. |
| Generalized Nonlinear Recursion | Nonlinear curves | Implements PIMS generalized nonlinear recursion. |
| Reformulated Gasoline Blending | `RFG` with Blend Specification entries | Triggers gasoline blending according to EPA and/or California Air Resources regulations. |

Nonlinear curves:

- The Nonlinear Curve Summary table defines all nonlinear curves in the model. It combines Aspen PIMS `CURVE` and `NONLIN` table behavior.
- A nonlinear curve can be used by multiple independent/dependent variable pairs. The variable pairs identify matrix coefficients used for generalized nonlinear recursion.
- PIMS uses an SLP, or Successive Linear Programming, technique for the nonlinear equations defined through nonlinear curve details.
- Summary columns are read-only: curve name, independent variable description, and dependent variable description. Descriptions are edited from the detail page.
- New nonlinear curves are added from **Advanced Modeling > Nonlinear Curves** and are inserted at the top of the summary table.

New curve and detail-page rules:

| Area | Key fields / rules |
|---|---|
| New Nonlinear Curve dialog | `Name`, independent variable description, dependent variable description, number of points; `Name` is required, max 20 characters, cannot contain spaces, and cannot be changed after creation. |
| Curve Details | `Name` is read-only; independent and dependent descriptions are required and max 20 characters. |
| Variable Pairs | Each row defines one curve pairing. `Independent` identifies a matrix column; `Dependent` identifies a matrix row. Each identifier is required, unique, and max 7 characters. |
| Points | Each point has independent and dependent numeric values. Empty point rows are removed automatically. |

Curve modeling cautions:

- Point values must fit a convex curve and must be ordered in increasing value.
- Recursion interpolates linearly between points, and can determine enough points along the curve to smooth the interpolation.
- The dependent coefficient value is treated as a function of the independent activity value.

Nonlinear Equations page:

- The page lists all nonlinear equations and equation groups in the model.
- Users can import/export equations through Excel, create equations, group/ungroup them, move equations between groups, disable/delete equations, and edit equation details.
- When importing, the nonlinear-equation worksheet must be the first workbook sheet.
- Suppressed nonlinear equations from Aspen PIMS are not imported and are not migrated.

Equation detail rules:

| Field | Behavior |
|---|---|
| Equation Name | Cannot contain underscores or spaces. Existing names modify existing equations; new names add matrix rows. |
| New Equation | If selected, creates a new equation; otherwise the expression is added to the existing equation structure. |
| Periodic | Only available for periodic models. |
| Equation | Represents the left-hand side of the equation. |
| Type | `EQ`, `LE`, `GE`, or `FREE`; `FREE` disables `RHS` because no RHS exists. |
| RHS | Numeric right-hand-side value only; variables must be on the LHS. |
| New Variable | Adds a new matrix column and enables variable description, min/max, objective coefficient, initial value, variable type, and status fields. |
| Variable Type | Blank for continuous, `BV` for binary, `INT` for integer, `LBD` for threshold variables. |

Excel import/export format uses rows with `Data` values such as Equation Group, Equation, and Variable. Required import columns include equation/variable `Name`, equation text for Equation rows, and the selected fields for group/variable metadata. Defaults include `EQ` type and RHS `0` for equations, and min `0` / max `1.00E+30` for variables.

---

## Assay Library, Model Assays, and Crude Assay Data

Assay Management provides the crude assay data used by model assays, active crude assignments, distillation modes, assay cutting data, and crude blend definitions. Aspen Unified supports two assay-management modes:

| Mode | Meaning | Major consequence |
|---|---|---|
| Built-in Assay System | Uses Aspen Assay Library and custom assay libraries | Model Assays, active assay assignment, distillation mode creation, separation type, cut properties, and cutting-result generation are available |
| External assay system | Imports existing Aspen PIMS assay/cutting tables | Model Assays are hidden and several built-in assay/distillation authoring features are unavailable |

External assay usage imports assay cutting data through PIMS tables such as `ASSAYS`, `CRDDISTL`, `CRDCUTS`, and `ASSAYLIB`. When this mode is selected, users cannot use the built-in Model Assays navigation, active assay assignment from Crude Oils, creation of distillation modes, cut-property authoring, cutting-result charting, or built-in cutting-result generation.

### Assay Libraries

The built-in **Aspen Assay Library** contains characterized assays delivered with Aspen Unified. Users can also create custom assay libraries from the Home page.

Important library behavior:

- Built-in library assay data cannot be edited in place.
- A built-in assay can be brought into Model Assays, updated, re-characterized, and saved to a custom assay library.
- Re-characterizing built-in assays is allowed but not recommended because results can differ from original library characterization.
- Custom libraries can be local or network-hosted; the creator has read/write access by default, while other accessible users typically have read-only access.

### Model Assays Table

The **Model Assays** table lists assays in the model and is only available when the built-in assay system is selected in General Settings.

Core columns:

| Column | Meaning |
|---|---|
| Model Assay | Assay name |
| Associated Crude Oil | Crude linked to the assay; after initial assignment, changes are made from Crude Oils Summary |
| Active | Indicates the assay is used |
| Status | Characterization state |
| Source | Assay library or assay table name |
| Default properties | Density, Sulfur, Viscosity, and Watson K; these cannot be removed |

Characterization statuses:

| Status | Meaning |
|---|---|
| Characterized | Assay is characterized and available for use |
| Characterization Error | Characterized with issues; review messages and re-characterize if needed |
| Characterization Failed | Not usable for cutting or assay blend creation |
| Input Only | Added but not characterized |
| Input Changed | Input data changed after characterization; re-characterization is required |

Table actions include:

- Add assays from a library using property search criteria such as density, sulfur, viscosity, TAN, and pour point.
- Download assays from preselected external public websites when Internet access is available.
- Import assays from supported files; AspenTech imported files must follow the documented Excel assay format.
- Create a new assay blend from existing characterized assays.
- Export model assays to `Model Assays.xlsx`.
- Rename, copy, delete, save to a custom library, flash/re-characterize, open input data, open characterized results, or plot selected assays.

### Assay Import File Format

Aspen Unified assay Excel imports use one worksheet per crude assay. The file can include assay description, cut properties, GC data, and distillation curve data.

Required and useful fields:

| Area | Key rules |
|---|---|
| Assay Description | `Assay Name` is required; `PIMSTag` is a three-character unique PIMS crude code; country and region can improve characterization when data is missing |
| Assay Data | Starts with property name, property unit, parameter value/unit when applicable, then cut-name columns |
| Cut ranges | Initial Boiling Point and Final Boiling Point define cut boiling ranges |
| GC Data | Pure-component composition for whole crude or light-end/naphtha cuts; cut names should match the Assay Data section |
| Distillation Curve Data | Requires curve type such as TBP/D86/D2887, mass or volume basis, temperature units, and distillation-percent/temperature pairs |

At least four distillation curve points must be provided for useful characterization from the import file.

### Assay Details and Assay Blends

The Assay Details page shows source, sample, and characterization information for a selected assay. Assay name and abbreviation are not directly edited there, but source and sample information can be changed.

Assay blends are separate from product blends. They create a new assay from existing characterized assays.

Assay blend rules:

- Fractions can be weight-based or volume-based.
- Component assay fractions must total 1 before a blend can be created or updated.
- Normalize adjusts entered fractions proportionally so the total becomes 1.
- Blend characterization results are calculated from source assays.
- If source assays change, the blend assay results update accordingly.
- After creating a blend assay, return to Model Assays or Crude Oils Summary to associate it with a crude when needed.

### Assay Input Data

The Assay Input Data page stores available experimental data for the assay. It has three tabs:

| Tab | Purpose | Notes |
|---|---|---|
| Input Summary | Whole-crude and product-cut property data | Users can add/edit properties and cuts, then export `Input Summary.xlsx` |
| Pure Component | GC component composition for whole crude or cuts | Basis can be mass, volume, or mole; component predictions can use PONA, distillation, and gravity data when GC data is incomplete |
| Distillation Data | Distillation percentages and temperatures | Supports TBP, D86, D1160, and D2887; basis is mass or volume; temperature UOM follows model unit settings |

Distillation-data sufficiency rules for whole-crude cut yield:

- Distillation percentages must be increasing.
- At least three distillation points are required for the page-level sufficiency rule.
- The last distillation point must be greater than 50%.
- The mid-distillation yield temperature must be inside the cut temperature range.

### Characterized Results and Flash Assay

Characterized Results display data calculated from assay characterization. Data appears only after characterization has been performed. The same main result structures are available as input data, plus a **Message** tab.

Message severity:

| Priority | Meaning |
|---|---|
| Warning | Characterization completed but diagnostics should be reviewed |
| Error | Characterization failed and the assay cannot be used |

Flash Assay is used to enter limited updated data for the whole crude and re-characterize the assay. Standard Liquid Density and sulfur by weight appear by default. Users can add/remove whole-crude properties and distillation points. At least four new distillation points must be entered for flash re-characterization.

### Assay Plots

Assay plots can be opened from Model Assays, Assay Input Data, or Characterized Results. Plot settings control displayed assays, ordering, axes, grid/scale options, plot content, and legend display.

Supported plot types include:

| Plot | Use |
|---|---|
| Cut Yields | Compare product yields of assays or arbitrary cuts |
| Distillation | Show cumulative yield versus average boiling point; can show characterized data and experimental symbols |
| Properties | Compare old and new cut properties as a function of cut temperatures |
| Viscosities | Show dynamic or kinematic viscosity versus average boiling point |
| Cut Viscosities | Show product-cut viscosity versus temperature |
| PNA Curves | Show paraffin, naphthene, and aromatic content versus boiling range |
| Cut Properties | Compare a selected property across assays or cuts |

### Crude Oils and Crude Blends

The **Crude Oils Summary** table shows where crude oils are active and, when built-in assay management is used, the active model assay for each crude.

Key columns:

| Column | Meaning |
|---|---|
| Crude Oil | Crude name |
| Active Assay | Built-in assay assignment; unassigned assays are marked with `*` |
| In Purchase | Crude appears in Purchases |
| In Distillation | Crude is included in a distillation-mode crude slate |
| Disabled | Case-specific execution exclusion state |

Crudes can be added only in the Base Model. The active assay can be assigned at creation or later from Crude Oils Summary.

The **Crude Blends** table models crude materials that are blends of multiple crudes. It corresponds to imported PIMS `CRDBLEND` data.

Crude blend rules:

- Only crudes with assay cutting data can be crude blend components.
- All components should have assay cutting data for the same distillation mode.
- A crude can be used as a crude blend unless it is already used as a component in another blend.
- New crude blends and component definitions can only be added in the Base Model.
- Case-specific blend ratios can differ from Base Model values and are highlighted.
- In non-Base cases, empty ratios are not allowed; use `0` to keep the component defined but unused in that case.
- If crude blend ratios do not sum to 100, AUP warns that ratios will be normalized at run time.
- Export in PIMS format produces a re-importable `DataExport.xlsx`; grid-format `Crude Blends.xlsx` is not re-importable.

---

## Product Blends and ABML Correlations

Product blends are the richer product-blending structures in PIMS. They are separate from crude assay blends and from simpler UPool pools. A product blend can be assigned to one or more physical blenders, linked to Sales, constrained by blend specifications, and calculated with standard property logic or ABML correlations.

### Product Blend Types

The Blend Summary and Blend Details pages organize four related blend concepts:

| Blend concept | Meaning | Typical use |
|---|---|---|
| Pool | Simple blend product produced by pool-style blending | Process feed or intermediate pooling where UPool-style behavior is enough |
| Formula Blend | Fixed-ratio recipe made from specified materials | Product or component recipe with no property restrictions |
| Specification Blend | Blend with components, calculable properties, and min/max specifications | Product blending where optimization must satisfy blend quality constraints |
| Blend Specification Group | Group of blend products with group-level property constraints | Shared property limits across multiple specification blends |

Blend Summary has two main tabs:

| Tab | Purpose | PIMS relationship |
|---|---|---|
| Blends | Lists blend name, description, type, blender assignments, Sales membership, and disabled state | Blend master data and case-specific disable behavior |
| Components | Maintains blend-component mappings and formula values | `BLNMIX` |

Important behavior:

- The Disabled flag is case-dependent and can be reset to inherited values.
- Component values can differ by case and can be inherited, copied, imported, exported, mapped, unmapped, and normalized.
- Formula percentages/fractions must sum to 100 or 1, depending on whether the formula is specified as percentage or fraction.

### Specification Blends

A Specification Blend has Definition, Component, Specs, Bonuses, and MIP tabs.

| Tab | Main purpose | PIMS relationship / rule |
|---|---|---|
| Definition | Blend identity, blender assignments, Sales state, and EPA/RFG-related fields where applicable | Blends must be assigned to at least one blender |
| Component | Blend components and target ranges | `BLNMIX`; Up/Down penalties map to `BLNTARG` UALL/DALL |
| Specs | Property min/max constraints, solution values, marginals, and penalty information | Blend targets are always volume-based |
| Bonuses | Positive or negative component impacts on blend properties | `PBonus` |
| MIP | Limits component count and prevents teaspoon blending | `BLNMIP` |

MIP modeling should be used conservatively. It adds mixed-integer structure and can make the model difficult to solve if many binary variables are created. The estimated blend volume upper bound should be as tight as reasonably possible; if no value is provided, AUP assumes 100. Threshold values are always volume percentages.

### Formula Blends and Blend Groups

Formula Blends define fixed component ratios. The formula basis is weight only when the model basis is weight and the blend is sold on a weight basis; otherwise it is volume-based. Components can be added from existing materials or created as new materials, and Normalize recalculates entered ratios to sum to the required total.

Blend Groups group specification blends for reporting and group-level property limits. Their Members tab lists specification blends, blender assignments, group Sales participation, and Sales membership. Their Specs tab applies min/max property limits across the group and reports solution, marginal, and penalty values.

All blend detail pages support export, navigation back to Blend Summary, and navigation/addition to the Sales table.

### ABML Scope and Limitations

ABML, the Aspen Blend Model Library, provides linear and nonlinear blending prediction methods and correlations. In Aspen Unified and Aspen PIMS, only correlations that do not recurse on composition are exposed. RFG, CARB, and interactive correlations are not exposed through ABML in this UI because Aspen Unified and Aspen PIMS already provide those capabilities directly; the underlying RFG and CARB code is identical where it overlaps.

ABML can be used in standard and periodic Aspen Unified models for specification blends. Submodels cannot invoke ABML; for example, a pooling submodel cannot use ABML to calculate qualities for the blended pool.

Available correlation families:

| Family | Meaning |
|---|---|
| Second Order | Takes properties of a blend and calculates other properties of the same blend |
| Component Base - Forward Transform | Takes a property and calculates an index |
| Component Base - Reverse Transform | Converts an index back to a property |

The Second Order and Component Base summary pages list the available functions and link to detailed formula topics. The detailed component-base formulas below capture the first group of those pages.

### Component-Base Cloud Point and D86 Percent-Off Correlations

Component-base correlations commonly work as paired transforms: a forward function converts component properties into an index that blends linearly, and a reverse function converts the blended index back into a property.

| Correlation | Forward ABML function | Reverse ABML function | Purpose | Key inputs / outputs |
|---|---|---|---|---|
| Cloud Point | `CLOUDPOINTINDEX1`, `CLOUDPOINTINDEX3` | `CLOUDPOINT1`, `CLOUDPOINT3` | Predict distillate cloud point through a cloud point index | Forward: `CORF`, `CLDPNT` -> `CPNTNDX`; reverse: `CORF`, `CPNTNDX` -> `CLDPNT` |
| D86 Percent Off | `D86TOPERCENTOFF` | `D86FROMPERCENTOFF` | Convert a component D86 seven-point curve to TBP percent-off points, blend those points linearly, then convert back to D86 | Forward: `CORF`, `TYPCOR`, `P1`-`P10`, `IBP`, `T10`, `T30`, `T50`, `T70`, `T90`, `FBP` -> `POFF1`-`POFF10`; reverse returns `IBP`, `T10`, `T30`, `T50`, `T70`, `T90`, `FBP` |

Cloud point notes:

- `CORF` selects temperature units, `C` or `F`; default is `F`.
- The coefficients are proprietary and not shown in the help page.
- The page states no explicit limitations.

D86 Percent Off notes:

- The method first converts the component D86 curve to TBP using the selected ASTM-to-TBP conversion method, then produces a 10-point TBP percent-off curve for linear blending.
- After blending, the percent-off curve is converted back to TBP and then back to D86.
- `TYPCOR` selects the conversion method. Available values are `HC94`, `THREEA11`, `SIXORDER`, and `NONE`; the default is `HC94`.
- `P1`-`P10` are TBP points at which percent off is calculated. Defaults are 30, 70, 100, 140, 180, 250, 330, 360, 390, and 450 degrees F.
- Initial boiling point and final boiling point are not reliable outputs from this method. For blended IBP/FBP constraints, prefer modeling minimum amounts of suitable low- or high-boiling components rather than relying on the calculated endpoints.

Available ASTM-to-TBP conversion options:

| `TYPCOR` value | Source page | Application | Notes |
|---|---|---|---|
| `HC94` | HCProcessing (HC94) | MoGas and middle distillate D86 `IBP`, `T10`, `T30`, `T50`, `T70`, `T90`, and `FBP` | Default method. Uses proprietary coefficients; limitations are in the reference literature. |
| `THREEA11` | APIDataBook3A1 | MoGas and middle distillate D86 `IBP`, `T10`, `T30`, `T50`, `T70`, `T90`, and `T95` | Uses proprietary coefficients; limitations are in the reference literature. |
| `SIXORDER` | APIDataBook6th | MoGas and middle distillate D86 `IBP`, `T10`, `T30`, `T50`, `T70`, `T90`, and `FBP` | Uses proprietary coefficients; limitations are in the reference literature. |
| `NONE` | None | MoGas and middle distillate D86 `IBP`, `T10`, `T30`, `T50`, `T70`, `T90`, and `T95` | No D86-to-TBP conversion. Percent off is blended at D86 temperatures rather than TBP; use only when linear D86-temperature percent-off blending is accurate enough. |

Reference anchors for the conversion options are Daubert's 1994 Hydrocarbon Processing distillation interconversion article for `HC94`, Riazi's *Technical Data Book, Petroleum Refining* for `THREEA11`, and Daubert/Danner's *Technical Data Book, Petroleum Refining* for `SIXORDER`.

### Component-Base D86 Index, Flash Point, and User-Defined Correlations

| Correlation | ABML function(s) | Application | Key inputs / outputs | Notes |
|---|---|---|---|---|
| D86 Index 2 | `D86ONE10INDEX`, `D86ONE90INDEX`, `D86ONE10BLEND`, `D86ONE90BLEND` | MoGas D86 `T10` and `T90`; `T50` blends linearly by volume | Forward: `CORF`, `T10` -> `T10NDX`; `CORF`, `T90` -> `T90NDX`. Reverse: `CORF`, `T10NDX` -> `T10`; `CORF`, `T90NDX` -> `T90` | Proprietary coefficients. Motor gasoline D86 only; narrow-boiling components and non-hydrocarbon materials do not work well. |
| Flash Point | `FLASHPOINTINDEX1`, `FLASHPOINT1` | Distillate and fuel oil flash point | Forward: `CORF`, `FLSHPNT` -> `FPNTNDX`; reverse: `CORF`, `FPNTNDX` -> `FLSHPNT` | Proprietary coefficients; no explicit limitations listed. |
| User-Defined Blend Value | `GBLNVAL` | User-defined blend value correlation | Outputs are blend values defined in Property Calculator; maximum 20 | ABML input section is not needed because input tags come from Property Calculator. Use for blend value correlations only; use `GNDXR` for component-based correlations and `GPRPCALC` for second-order correlations. |
| User-Defined Index | `GNDXR` | User-defined component-based property/index correlations used as input to other ABML correlations | Outputs are properties defined in `INDEX` or Property Calculator; maximum 20 | Do not use this merely to apply specifications to the blended property; continue to apply specs on the index. Property Calculator definitions take precedence over `INDEX` definitions. |

Shared user-defined correlation cautions:

- For complex correlations, consider UBML rather than forcing the logic into ABML.
- `GBLNVAL` permits at most 20 calculated blend values and at most 100 total required inputs across that list.
- `GNDXR` requires a one-to-one property/index relationship when defined through Property Calculator and cannot daisy-chain the properties defined in this correlation among themselves.
- For Property Calculator-driven `GBLNVAL`, the `Property` tag should appear in the ABML Correlation Output section; for `GNDXR`, the `Formula` tag should appear in the ABML Correlation Output section.
- Keep formulas well behaved across input ranges; log of zero, negative values raised to fractional powers, inadequate ranges, or non-convex formulas can create solver problems or local optima.
- No `TEXT` entry is required for the output tag in ABML for `GBLNVAL`.

### Component-Base Mobil, ND86, Pour Point, and RVP Correlations

| Correlation | ABML function(s) | Application | Key inputs / outputs | Notes |
|---|---|---|---|---|
| Mobil Transformation | `MTMF`, `MTMR` | MoGas research and motor octane numbers | Forward `MTMF`: `RON`, `MON`, `OLE`, `ARO` -> `TRON`, `TMON`; reverse `MTMR`: `TRON`, `TMON`, `OLE`, `ARO` -> `RON`, `MON` | Based on measured octane, olefins, aromatics, and paraffins. |
| D86 Percent Off (ND86) | `ND86TOPERCENTOFF`, `ND86FROMPERCENTOFF` | Products with significantly different D86 curves, such as models mixing gasoline with diesel or fuel oil | Forward: optional `CORF`, `TYPCOR`, `P1`-`P25`, `T1`-`T13`, plus D86 temperature inputs -> `P1`-`P25` percent-off outputs; reverse: `P1`-`P25` -> `T1`-`T13` | Variable-point version of D86 percent-off blending. |
| Pour Point | `POURPOINTINDEX1`, `POURPOINT1` | Distillate and fuel oil pour point | Forward: `CORF`, `POURPNT` -> `PRPNTNDX`; reverse: `CORF`, `PRPNTNDX` -> `POURPNT` | Proprietary coefficients; no explicit limitations listed. |
| Reid Vapor Pressure | `RVPINDEX`, `RVP` | MoGas RVP | Forward: `RVP` -> `RVPNDX`; reverse: optional `P1`, `RVPNDX` -> `RVP` | RVP values are expected in PSI. If `P1` is set in the `RVP` correlation, both `RVPINDEX` and `RVP` use that coefficient. |

Mobil Transformation limits:

- Non-hydrocarbon components were not included in the data set used to generate transform coefficients.
- Lead corrections are not implemented in ABML.
- The source data cover component octane from 75 to 105, aromatics below 90, and olefins below 50; avoid extrapolating far beyond those ranges.

`ND86TOPERCENTOFF` and `ND86FROMPERCENTOFF` extend the fixed 10-point D86 percent-off method:

- Up to 25 percent-off temperature points `P1`-`P25` can be defined. If none are provided, PIMS assumes the standard 10 points: 30, 70, 100, 140, 180, 250, 330, 360, 390, and 450 degrees F.
- Up to 13 D86 temperature points `T1`-`T13` can be defined. If none are provided, PIMS assumes the standard seven percent-off points: 0, 10, 30, 50, 70, 90, and 100.
- If custom `P` or `T` points are supplied, the full consecutive set must be defined; for example, use `P1` through `P15` and do not skip to `P16`.
- The `P` temperatures and `T` percent-off values must each be monotonically increasing.
- For D86 points 8-13, only `TYPCOR = NONE` can be used because `HC94`, `THREEA11`, and `SIXORDER` support only the standard seven D86 points.
- As with the earlier D86 percent-off method, blended initial and final boiling points are not reliable; use component minimums for endpoint specifications when needed.

RVP uses the power-index relationship:

```text
RVP index = RVP ^ P1
```

### Component-Base D86 Blend Value, Viscosity, and CARBOB Utilities

| Correlation | ABML function(s) | Application | Key inputs / outputs | Notes |
|---|---|---|---|---|
| D86 Blend Value 1 | `T10INDEX`, `T50INDEX`, `T90INDEX` | MoGas D86 `T10`, `T50`, and `T90` blend values | Each function uses `CORF`, `T10`, `T50`, `T90`; outputs are `T10BV`, `T50BV`, or `T90BV` | Proprietary coefficients. MoGas D86 only; narrow-boiling components and non-hydrocarbon materials do not work well. |
| Viscosity | `VISCOSITYINDEX1`, `VISCOSITYINDEX2`, `VISCOSITYINDEX3`, `VISCOSITY1`, `VISCOSITY2`, `VISCOSITY3` | Distillate and fuel oil viscosity | Forward: `VISC` -> `VISCNDX`; reverse: `VISCNDX` -> `VISC` | Viscosity values are expected in CST. Proprietary coefficients; reference points to Appendix. |
| D86 Percent Off for CARBOB | `CD86FROMPERCENTOFF` | Removes ethanol D86 temperature contribution from an oxygenated blend for CARBOB | `POFF1`-`POFF10` -> `OBSIBP`, `OBST10`, `OBST30`, `OBST50`, `OBST70`, `OBST90`, `OBSFBP` | PIMS extension to ABML; PIMS automatically obtains ethanol properties. |
| D86 Index 2 for CARBOB | `CD86ONE90BLEND` | Removes ethanol T90 contribution for CARBOB when using D86 Index 2 | `T90NDX` -> `OBST90` | Intended for use with D86 Index 2 and CARBOB. |
| Reid Vapor Pressure Index for CARBOB | `CRVP` | Removes ethanol RVP contribution for CARBOB | `RVPNDX` -> `OBSRVP` | RVP values are expected in PSI. |
| D86 Linear T50 for CARBOB | `CT50BLEND` | Removes ethanol T50 contribution for CARBOB when T50 blends linearly | `T50` -> `OBST50` | Suitable with D86 Index 2 or blend value method; T50 is assumed in degrees F. |
| D86 Linear T90 for CARBOB | `CT90BLEND` | Removes ethanol T90 contribution for CARBOB when T90 blends linearly | `T90` -> `OBST90` | Suitable when using the blend value method; T90 is assumed in degrees F. |

Viscosity forward transform uses the index form:

```text
Viscosity Index = log(log(viscosity + A))
```

where `A` is a curve-fitted coefficient.

CARBOB component-base utilities are ethanol-removal helpers used before the CARBOB second-order correlation. They are PIMS extensions to ABML, and PIMS obtains ethanol properties automatically. The T50/T90 utility equations use the same structure:

```text
Txx = (Txx_blend - Txx_ethanol * volume%_ethanol) / (1.0 - volume%_ethanol)
```

`CRVP` applies the same removal concept to RVP index:

```text
RVPNDX = RVP ^ P1
RVPNDX = (RVPNDX_blend - RVPNDX_ethanol * volume%_ethanol) / (1.0 - volume%_ethanol)
```

### UBML and PUBML.dll Workflow

UBML, the User Blend Model Library, lets users add custom blending correlations when the built-in ABML set or the ABML user-defined correlations `GNDXR`, `GBLNVAL`, and `GPRPCALC` are not expressive enough. UBML supplements ABML rather than replacing it.

Core UBML workflow:

1. Build `PUBML.dll`, which contains the custom correlations available to the model.
2. Ensure `PUBML.dll` and all dependent files are 64-bit.
3. Place the custom DLLs under `<InstallDirectory>\ProgramData\AspenTech\AspenUnified\CustomDLLx64\<folderName>`.
4. Point AUP to that folder through General Settings > Custom DLL Folder, or select the folder during model migration.
5. Configure the exposed UBML correlations through the ABML correlation screens.

For snapshot migration, UBML setup must be completed before importing the snapshot.

`PUBML.dll` implementation notes:

| Area | Required behavior |
|---|---|
| Build model | `PUBML.dll` is a regular DLL, not a COM DLL. The help recommends Microsoft Visual Studio and currently supports C++ only. |
| Initialization | Implement `ubml_initializeAllocation` for startup logic such as memory allocation, opening files, or loading additional DLLs. |
| Correlation list | Define a `CORRINDEX` enum and use `ubml_GetCorrelationId` to map each enum to the text name used in ABML. |
| Correlation type | Use `ubml_GetCorrelationType` to classify each correlation as `CORRTYPE_INDEXFORWARD`, `CORRTYPE_INDEXREVERSE`, `CORRTYPE_BV`, or `CORRTYPE2NDORDER`. |
| Index pairing | Use `ubml_GetIndexPair` to connect each forward transform with its reverse transform. |
| Coefficients | Use `ubml_InitializeCoefs`, `ubml_GetCoef`, and `ubml_SetCoef` for model-specific coefficients and defaults. |
| Input/output properties | Declare counts and text IDs for correlation inputs and outputs so ABML can map them to model properties. |
| Calculations | Implement each correlation, calculate properties and derivatives, and dispatch from `ubml_CalcPimsPropValue` using `nCorr`. |

UBML function categories:

| Category | Purpose |
|---|---|
| General Functions | Initialize UBML, free UBML memory, and handle errors. |
| Correlation Functions | Define correlation counts, specific correlation properties, and coefficient properties. |

UBML general lifecycle functions:

| Function | Syntax / arguments | Purpose and rules |
|---|---|---|
| `ubml_InitializeAllocate` | `int ubml_InitializeAllocate()` | Called first by PIMS. Use for startup work such as allocating memory, opening log files, or loading additional DLLs. Returns `0` on success or an integer error code. If this allocates resources, release them through `ubml_Free`. |
| `ubml_Free` | `int ubml_Free()` | Called when `PUBML.dll` is closed. Frees resources, closes files, and prevents resource leaks. Returns `0` on success or an integer error code. |
| `ubml_ErrorHandler` | `int ubml_ErrorHandler(int nCorr, int nErrCode, int nInput, double* dPropIn)` | Custom error hook called when `ubml_CalcPimsPropValue` returns a nonzero code. `nCorr` identifies the correlation, `nErrCode` identifies the error, `nInput` is the input count, and `dPropIn` contains input values. Return `-999` to terminate the run. |

UBML correlation functions expose the correlation catalog to AUP/PIMS. They provide the number of correlations, metadata for a selected correlation, coefficient metadata, and input/output property definitions.

Correlation general functions:

| Function | Syntax / arguments | Purpose and rules |
|---|---|---|
| `ubml_GetCorrelationCount` | `int ubml_GetCorrelationCount(int& nCorrCount)` | Returns the number of correlations defined in `PUBML.dll`, commonly from `CORRINDEX_COUNT`. The help warns not to modify this function pattern. |
| `ubml_GetCorrelationId` | `int ubml_GetCorrelationId(int nCorr, char* pcCorrId)` | Returns the case-sensitive correlation ID for correlation index `nCorr`. `pcCorrId` is a null-terminated string, max 24 characters including null. The function normally fails if `nCorr` is out of range. |
| `ubml_GetCorrelationType` | `int ubml_GetCorrelationType(int nCorr, CORRTYPE& enCorrType)` | Returns the `CORRTYPE` enum value defined in `UBML.h` for the selected correlation. Invalid correlation indexes should return an error and set an error type. |
| `ubml_GetIndexPair` | `int ubml_GetIndexPair(int nIndex, int& nIndexPair)` | For index correlations, maps a forward transform to its matching reverse transform. Return nonzero when the requested correlation is not a forward transform. |

Correlation calculation functions:

| Function | Syntax / arguments | Purpose and rules |
|---|---|---|
| `ubml_CalcPimsPropValue` | `int ubml_CalcPimsPropValue(int nCorr, double* dInpArray, double* dOutArray, int DoDerivative, double* dDerivative)` | Dispatches to the selected correlation implementation, calculates output properties, and optionally calculates derivatives. `dInpArray` is dimensioned by input count, with PIMS maximum 100. `dOutArray` is dimensioned by output count, with PIMS maximum 20. `DoDerivative` is `0` to skip derivatives and `1` to calculate them. `dDerivative` is dimensioned by inputs times outputs, PIMS maximum 100, and may be `NULL` if derivatives are not requested. Derivative order is grouped by input: all output derivatives for input 1, then all output derivatives for input 2, and so on. |

Correlation coefficient functions:

| Function | Syntax / arguments | Purpose and rules |
|---|---|---|
| `ubml_InitializeCoefs` | `int ubml_InitializeCoefs()` | Initializes or reinitializes UBML coefficient values. Values set here are used as defaults. |
| `ubml_GetCoefCount` | `int ubml_GetCoefCount(int nCorr, int& nCoefCount)` | Returns the number of coefficients for a correlation. `nCorr` identifies the correlation; `nCoefCount` returns the count. |
| `ubml_GetCoef` | `int ubml_GetCoef(int nCorr, int nCoef, char* pcCoefName, double& value)` | Returns a coefficient name and value. `pcCoefName` is a null-terminated coefficient name up to 8 characters including null. The function normally fails when `nCorr` or `nCoef` is out of range. |
| `ubml_SetCoefValue` | `int ubml_SetCoefValue(int nCorr, int nCoef, double value)` | Sets a coefficient value used by later calculations. The function normally fails when `nCorr` or `nCoef` is out of range. |

Correlation input/output property functions:

| Function | Syntax / arguments | Purpose and rules |
|---|---|---|
| `ubml_GetCorrelationInpPropCount` | `int ubml_GetCorrelationInpPropCount(int nCorr, int& nInpPropCount)` | Returns the number of input properties for a correlation. Failures normally indicate an index-specification error. |
| `ubml_GetCorrelationInpPropId` | `int ubml_GetCorrelationInpPropId(int nCorr, int nCorrProp, char* pcInpPropId)` | Returns an input property ID. `pcInpPropId` is a null-terminated property ID up to 24 characters including null. For additive correlations, the first input property is considered the dopant quality. |
| `ubml_GetCorrelationOutPropCount` | `int ubml_GetCorrelationOutPropCount(int nCorr, int& nOutPropCount)` | Returns the number of output properties for a correlation. |
| `ubml_GetCorrelationOutPropId` | `int ubml_GetCorrelationOutPropId(int nCorr, char* pcOutPropId, int nCorrProp)` | Returns an output property ID. `pcOutPropId` is a null-terminated property ID up to 20 characters including null. `nCorrProp` is used when a correlation has more than one output property. Failures normally indicate an index-specification error. |

Modeling cautions for UBML:

- Avoid discontinuities because they make derivatives ill behaved or undefined.
- Handle exceptional cases such as division by zero.
- Visual Basic cannot be used for `PUBML.dll` because it generates COM DLLs.
- Custom DLL folders can contain multiple folders under `CustomDLLx64`, but the selected folder must be referenced by AUP or selected during migration.

### CARB and CARBOB Correlations

CARB and CARBOB are second-order ABML correlations used around California reformulated gasoline and ethanol blending. The workflow is usually chained: calculate blend properties needed for emissions, optionally adjust them for ethanol blending, then feed those values into CARB pollutant calculations.

| Correlation | ABML function | Purpose | Key outputs |
|---|---|---|---|
| Phase 2 Gasoline Emissions | `CARB` | Predicts CARB phase 2 gasoline emissions; normally AUP/PIMS builds it into `ABML` automatically when needed | `CNX`, `THC`, `POT` |
| Phase 3 Gasoline Emissions | `CARB3` | Predicts CARB phase 3 gasoline emissions; normally PIMS builds it into `ABML` automatically when needed | `CNX`, `THC`, `POT` |
| Blend Stock for Oxygenate Blending | `CARBOB` | Models ethanol effect on finished gasoline properties for CARB emissions | `RVP`, `T50`, `T90` |
| Blend Stock for Oxygenate Blending 2 | `CARBOB2` | Used when refiners formulate the non-oxygenated blend stock and ethanol volume is constant | `ARO`, `BNZ`, `EHO`, `OLF`, `OXY`, `RVP`, `SUL`, `T50`, `T90` |

CARB and CARB3 generally do not need to be invoked manually. They are only called out as manual ABML functions for XNLP cases or when CARBOB and non-CARBOB gasoline grades of the same CARB phase are modeled at the same time.

Input qualities for CARB/CARB3:

| Function | Inputs | Difference |
|---|---|---|
| `CARB` | `RVP`, `T50`, `T90`, `ARO`, `OLF`, `OXY`, `SUL`, `BNZ` | Phase 2 input set |
| `CARB3` | `RVP`, `T50`, `T90`, `ARO`, `OLF`, `OXY`, `EHO`, `SUL`, `BNZ` | Adds ethanol oxygen input `EHO` |

CARBOB setup is a two-step property chain:

1. Calculate `RVP`, `T50`, and `T90` for the blend without ethanol.
2. Use those values to calculate final ethanol-blend `RVP`, `T50`, and `T90`, which can then feed pollutant calculations.

CARBOB setup tasks:

- Add the appropriate CARBOB correlation on the ABML Summary table.
- Add the ethanol stream to the CARBOB stream.
- Enter property ranges and the appropriate specification type.
- Add the ethanol stream to Purchases.
- Provide initial guesses for blend properties in Materials > Estimated Value.

CARBOB correlation-selection rules:

| Property | Correlation chain |
|---|---|
| `RVP` | Use `RVPINDEX` as input for both `RVP` and `CRVP`; the `CRVP` output feeds CARBOB |
| `T50` linear case | Use `CT50BLEND` only |
| `T50` indexed case | Use `T50INDEX`; feed the calculated blend value into `CT50BLEND`; feed `CT50BLEND` output into CARBOB |
| `T90` indexed case | Use `T90INDEX`; feed the calculated blend value into `CT90BLEND`; feed `CT90BLEND` output into CARBOB |
| `T90` D86-one90 case | Use `D86one90Index` as input for `D86one90Blend` and `CD86one90Blend` |

CARBOB and CARBOB2 both apply to gasoline blends with 4% to 10% ethanol by volume. Use PSI for `RVP` and Fahrenheit for `T50` and `T90`. For CARBOB, the PIMS quality abbreviation associated with `VOLETOH` is treated as the ethanol stream tag.

CARBOB2-specific modeling notes:

- Ethanol volume is constant rather than a decision variable.
- Recurse on `ARO`, `BNZ`, `EHO`, `OLF`, `OXY`, and `SUL`; if `RVP`, `T50`, and `T90` are not supplied from other ABML correlations, recurse on those as well.
- The system assumes the non-oxygenated blend stock specific gravity value is fixed.
- Rounding options can help match CARB spreadsheet outputs but can introduce discontinuities, convergence problems, or local optima.

CARBOB2 options include:

| Option | Meaning |
|---|---|
| `O2OPT` | Handles oxygen discontinuity; default on |
| `RNDO2` | Rounds oxygen to one decimal place; default off |
| `RNDRST` | Rounds oxygen, benzene, and sulfur; default off |
| `EOHARO`, `EOHBNZ`, `EOHEHO`, `EOHOLF`, `EOHSUL`, `EOHSPG` | Ethanol-property defaults |
| `GASSPG` | Gasoline specific gravity default |
| `EOHVOL` | Ethanol volume percent in final blend; must be 4.0 to 10.0 |

### Distillate Cetane and Cold-Flow Correlations

This ABML slice covers distillate-fuel quality correlations for cetane index, cetane improver response, and cold-filter-plug-point improver response.

| Correlation | ABML function | Application | Inputs | Output |
|---|---|---|---|---|
| Cetane Improver | `CETANEIMPROVER` | Distillate fuel | `CORF`, optional `P1` through `P7`, `SPG`, `T50`, `IMPVOL` | `CETIMP` |
| ASTM D976 Cetane Index | `CETANEINDEX2` | Distillate fuel | `SPGR`, `T50D` | `CETN` |
| ASTM D4737 Cetane Index 4 | `CETANEINDEX4` | Distillate fuel | `T10D`, `T50D`, `T90D`, `DENS` | `CETN` |
| ASTM D4737-96a Cetane Index | `CETANEINDEX5` | Low-sulfur fuel | `CORF`, `SPG`, `T10`, `T50`, `T90` | `CETANE` |
| Cold Filter Plug Point with Improver | `CFPPIMPROVER` | Distillate fuel | `CORF`, optional `P1` through `P3`, `CLDPNT`, `IMPDRATE` | `CFPPIMP` |

Modeling notes:

- `CETANEIMPROVER` predicts cetane-index improvement from a cetane additive; the additive is entered as volume percent, and the method must be validated for the additive behavior being modeled.
- `CETANEINDEX2` follows ASTM D976 and uses specific gravity at 15 degrees Celsius plus D86 `T50`; the equation uses API gravity derived from specific gravity and `T50D` in Fahrenheit.
- `CETANEINDEX4` and `CETANEINDEX5` follow ASTM D4737-style cetane-index calculations using density or specific gravity plus D86 `T10`, `T50`, and `T90` blended values.
- `CETANEINDEX5` expects `T10`/`T50`/`T90` in Fahrenheit by default and specific gravity at 15 degrees Celsius.
- `CFPPIMPROVER` is empirical: manufacturer-provided improver data determines the coefficients, and both improver effect and CFPP/cloud-point offset are empirical.

For `CFPPIMPROVER`, the documented equation is:

```text
CFPPIMP = P1 * CLDPNT + IMPDRATE * P2 + P3
```

### Gasoline Road Octane and Driveability Correlations

This ABML slice covers motor-gasoline road octane and driveability-index calculations.

| Correlation | ABML function / ID | Application | Inputs / options | Output |
|---|---|---|---|---|
| Road Octane | `DON` | Motor gasoline road octane number | `RON`, `MON` | `DON` |
| Driveability Index | `ABML_DRIVEABILITY` | Motor gasoline DI | `T10D`, `T50D`, `T90D` | `DRIV` |
| Driveability Index with Ethanol | `DRIVEABILITYINDEXE` | Motor gasoline DI with ethanol | Option `EOHVOL`; inputs `CORF`, `T10`, `T50`, `T90` | `DriveNdx` / `DRIVENDX` |

Road Octane is the simple average of research and motor octane:

```text
DON = 0.5 * (RON + MON)
```

Driveability Index follows ASTM D4814 guidance and uses D86 distillation temperatures. The ethanol variant adds `EOHVOL` as an option, allows `CORF` to specify Celsius or Fahrenheit temperature units, and maps `T10`, `T50`, and `T90` inputs to the `DRIVENDX` output property. When `CORF` is `C`, ethanol volume is adjusted as documented by the source page; when `CORF` is `F`, temperatures are Fahrenheit.

### Gasoline Emissions and Evaporation Correlations

This ABML slice covers supporting motor-gasoline calculations for EPA emissions and D86 evaporation behavior.

| Correlation | ABML function | Application | Inputs / options | Output |
|---|---|---|---|---|
| Percent Off at 200 and 300 | `E200E300EPA` | Motor gasoline E200/E300 values | Options `P1`-`P4`; inputs `CORF`, `T50`, `T90` | `E200`, `E300` |
| EPA Gasoline Emissions | `EPA` | EPA conventional and RFG gasoline emissions | Oxygen-source, sulfur, RVP, E200/E300, aromatics, olefins, benzene inputs | `VOC`, `TOX`, `NOX`, `EXB`, `EXT` |
| Volume Percent Off | `EVAPORATIVE` | Motor gasoline D86 curve interpolation | Optional targets `P00`-`P11`; D86 curve inputs `IBP`, `T10`, `T30`, `T50`, `T70`, `T90`, `FBP` | `EVP0`-`EVP11` |

`E200E300EPA` predicts percent evaporated at 200 and 300 degrees Fahrenheit from D86 `T50` and `T90`. Default coefficients can be adjusted for specific blends through ABML correlation data.

```text
E200 = P1 - P2 * T50
E300 = P3 - P4 * T90
```

The `EPA` emissions correlation is usually built into `ABML` automatically when needed. Manual invocation is called out mainly for XNLP or when RBOB and non-RBOB/conventional gasoline are modeled together. For RFG complex cases, outputs can be percent reduction; otherwise the emissions outputs are in mg/mi.

EPA input groups:

| Group | Inputs |
|---|---|
| Oxygen-source properties | `MTO`, `ETO`, `EHO`, `TMO` |
| Fuel properties | `SUL`, `RVP`, `E20`, `E30`, `ARO`, `OLE`, `BEN` |

`EVAPORATIVE` linearly interpolates the blended D86 curve. The optional section must contain at least one and at most twelve target D86 temperatures. Output tags are positional: `EVP0` corresponds to the first optional target, and `EVP11` corresponds to the twelfth. Temperature units for the optional target values are assumed to match the D86 curve units from the input section.

### User-Defined, RBOB, T20, TV/L, and Vapor Lock Correlations

This ABML slice covers the remaining second-order gasoline property formulas before the component-base correlation details begin.

| Correlation | ABML function | Application | Inputs / options | Output |
|---|---|---|---|---|
| User-Defined Property | `GPRPCALC` | User-defined second-order correlations from the PIMS Property Calculator | Inputs defined by the user-created property calculator formulas | Up to 20 calculated properties |
| Blend Stock for Oxygenate Blending | `RBOB` | EPA RFG gasoline blends with ethanol | Ethanol defaults, `EOHVOL`, coefficients `P1`-`P6`; inputs `ARO`, `BNZ`, `OLF`, `RVP`, `SUL`, `T50`, `T90` | Ethanol-adjusted aromatics, benzene, oxygen, olefins, RVP, sulfur, `E200`, `E300`, `T50`, `T90` |
| Motor Gasoline D86 T20 | `T20GAUSS` | Motor gasoline D86 `T20`; commonly feeds TV/L calculations | `T10`, `T30` | `T20` |
| ASTM D4814 TV/L Linear | `ABML_TVL` | Motor gasoline TV/L@20 | `RVPP`, `T10D`, `T50D` | `TVLD` |
| ASTM D4814 TV/L Non-Linear | `TVL2` | Motor gasoline TV/L@20, nonlinear version | `CORF`, `RVP`, `T10`, `T20`, `T50` | `TVL` |
| Vapor Lock Index | `VAPORLOCKINDEX` | Motor gasoline vapor lock estimate | `RVP` in kPa, `E70` volume percent off at 70 degrees C | `VLI` |

`GPRPCALC` is only for second-order user-defined correlations. The page explicitly points component-based user-defined index behavior to `GNDXR` instead. Constraints to preserve:

- A maximum of 20 calculated output properties is allowed.
- The total number of required inputs across those properties must not exceed 100.
- Formulas should be well behaved across the input ranges; log of zero, negative values raised to fractional powers, or non-convex behavior can create solver problems or local optima.
- No entry is required in the `TEXT` column for the correlation output tag in `ABML`.

`RBOB` is analogous to `CARBOB2` but for EPA RFG. Unlike CARB, EPA does not require CARBOB to predict finished gasoline properties. RBOB assumes ethanol volume is constant and not manipulated by the optimizer; ethanol must be 4% to 10% by volume and be the only oxygen source. Tuning rules:

- `P1`-`P4` tune `E200` and `E300`, using the same coefficient concept as `E200E300EPA`.
- `P5` and `P6` tune RVP with `RVPtuned = P5 + P6 * RVP`.
- Output property tags cannot be the same as input property tags.
- Recurse on `ARO`, `BNZ`, `EHO`, `OLF`, `OXY`, and `SUL`; if `RVP`, `T50`, and `T90` are not supplied by other ABML correlations, recurse on those too.

`T20GAUSS` estimates D86 `T20` from `T10` and `T30`, assuming the D86 curve is normally distributed:

```text
T20 = 0.581033772 * (T30 - T10) + T10
```

TV/L correlations predict the temperature at vapor/liquid ratio 20:1. `ABML_TVL` is the linear ASTM D4814 method using RVP in PSI plus D86 `T10` and `T50`; `TVL2` is the more complex nonlinear method and also uses `T20`, often supplied by `T20GAUSS`.

`VAPORLOCKINDEX` estimates vapor lock index directly from vapor pressure and evaporated volume at 70 degrees C:

```text
VLI = 10 * RVP + 7 * E70
```

### ABML Correlation Summary and Configuration

The ABML Correlation Summary lists ABML and UBML correlations and corresponds to PIMS `ABML` and `ABMLSUBF` data. It has two major views:

| View | Purpose |
|---|---|
| Correlations | Lists correlation ID, type, and description |
| Submodel Properties | Supports property recursion and finds submodels with matching recursion rows |

ABML recursion takes priority over fixed or derived property values. New correlations are added from the Add New ABML Correlation dialog by selecting an available ABML or UBML correlation; configuration is then completed from the summary/configuration pages.

The ABML Correlation Configuration page has four tabs:

| Tab | Purpose |
|---|---|
| General | Maps inputs, outputs, and options for the selected correlation |
| Option Overrides | Overrides option values for specific blend materials |
| Input Overrides | Overrides input scale/offset values by material |
| Output Overrides | Overrides output gain/bias values by material |

General tab fields to preserve:

| Area | Key fields |
|---|---|
| Input table | Input ID, Property, Scale, Offset, Is Index |
| Output table | Output ID, Property, Gain, Bias |
| Options table | Option, Value |

`Scale` and `Offset` convert model properties before passing values into the correlation. `Gain` and `Bias` adjust returned property values. `Is Index` appears only when applicable and indicates that the mapped property is an RFG index; it also affects export behavior for RFG-associated properties with property calculator or INDEX definitions.

Override tabs retain only active overrides. If an option, attribute, or material has no override when the user leaves the page, AUP may remove it from the override table the next time the page is opened.

### Working with ABML

Setting up ABML requires more than adding the correlation row:

1. For component-base correlations, enter initial guesses for blend properties in the **Estimated Value** cell on Materials.
2. For second-order correlations, enter initial guesses for the input properties used by the correlation.
3. For periodic models, enter opening inventory qualities where needed.
4. On Property Configuration, enter applicable ABML Mapping and ABML Cross Reference values.
5. Run model validation and review recursion ranges; generated ranges can be too wide and may need scaling adjustments in solver settings.

ABML correlations can be daisy-chained: the output of one correlation can become the input of another. When a chain is used, only the estimates for the first set of inputs are required; AUP propagates guesses down the chain. A typical pattern is calculating D86 values first, then using those outputs for Driveability, RFG, or CARB-related calculations.

## Unified Planning Concepts and Workflows

This section collects shared AUP and Multi-Site PIMS behavior that cuts across multiple model areas rather than belonging to one table or screen.

### Applying Price Data Sets

The **Apply Price Data Set** page applies prices from a connected Price Catalog Model to one or more cases. It is available for Aspen Unified PIMS and Multi-Site PIMS models when the model is attached to a Price Catalog Model, formula links have been configured if needed, and formula mapping is complete.

Workflow:

| Step | Purpose |
|---|---|
| Select cases | Choose the current case and any additional cases that should receive the dataset prices. |
| Aggregate & View | Select a dataset and revision, define the date range, choose an aggregation basis such as Average, and calculate New Cost values. For periodic models, explicit date-range selection is not required because the range is calculated from periods. |
| Apply dataset | Compare Existing Cost to New Cost, optionally edit New Cost, and apply the dataset to the selected cases. If New Cost is blank, Existing Cost is used. |

The page can be opened from the price-catalog icon on the application bar or from Case Summary table-tray actions.

### AspenTech Virtual Advisor (AVA)

AVA is an on-demand post-optimization analysis feature for diagnosing results and answering questions about why variables cannot increase, cannot decrease, or how marginal values are composed. AVA is available for Purchases, Sales, and Limits. In V15 behavior it can also help analyze how to achieve a defined target for selected variables.

Important AVA terms:

| Term | Meaning |
|---|---|
| Limiting variable | A variable whose solution reaches its upper or lower bound. |
| Non-limiting variable | A variable whose solution has not reached its upper or lower bound. |
| Sensitivity value | Relationship between a limiting and non-limiting variable; increasing one unit of the non-limiting variable changes the limiting variable by the sensitivity value. |

To enable AVA, turn on **General Settings > Aspen Virtual Advisor > Enable Aspen Virtual Advisor**, then select **AVA for Optimization Analysis** in the Run Cases dialog. After a case has run, open AVA from the Flowsheet or Map data panel by selecting a Purchases, Sales, or Limits row and clicking **AVA**.

The AVA Detail panel can show:

- Cost or price, solution position between Min and Max, marginal value when applicable, and target-value controls for non-limiting variables.
- Related Variables tabs for **All**, **Limiting Increase**, and **Limiting Decrease**. These tables show limiting variables, sensitivity, Min, Solution, Max, Marginal, and Cost.
- Marginal Economics, which decomposes marginal value into sensitivity and cost contributions. For Multi-Site models, global marginal values may aggregate basis-variable contributions across multiple nodes.
- Target Workflow, which creates a temporary `~AVA|...` case to test relaxed limits and target values, then lets users run, save, delete, or navigate to that case. Only one temporary AVA workflow case exists for the model at a time.

### Materials and Groups

New materials can be created from Materials Summary, Purchases/Sales, Blends, Crude Oils, Tower Configuration, Mode Tower Configuration, or by importing on the Materials page.

Material creation patterns:

| Source | Material behavior |
|---|---|
| Materials Summary | Create a Crude, Standard, or Blend material; Blend can be Specification or Formula. Buy/Sell basis is selected during creation. |
| Purchases or Sales | Open the New Material Purchase/Sales dialog, create the material, then complete purchase or sale specifics before adding it. |
| Blend Components | Creates a Standard material as a new blend component. |
| Crude Oils | Creates a Crude material; only Name is required. |
| Tower Configuration / Mode Tower Configuration | Creates a Standard material from an output drop-down. |

Groups are used to group purchase/sales materials and set total Min/Max constraints, or to group materials for reporting. A typical workflow is: create a group, add members, then add the group to Purchases, Sales, or Blend Specification tables. Group creation requires the Active Case to be the Base Model; abbreviations must be unique three-character ASCII identifiers with no blanks. Existing materials can be added to material groups from Materials Summary, Purchases/Sales, Blends, Crude, or Utility summary tables through the Table Tray **Add to Existing Group** action.

### Case Display and PIMS CASE Format

The **Case only changes** option on the application bar filters applicable tables to rows changed in the selected case. It is saved as a user preference, highlights changed values, and does not show Total rows when the filter is active.

Basic PIMS `CASE` table rules:

- Put the case identifier in column A and number cases sequentially beginning with `CASE 1`.
- Put the case description in column B; descriptions must not exceed 72 characters.
- Put the appropriate stacking keyword, such as `MODIFIES`, in the row below the case identifier.
- Empty cases are allowed by placing one case identifier after another with no intervening tables.
- Comment rows beginning with `*` can be interspersed freely.

For Multi-Site case data, plant-specific case information can include an additional `MODEL` row that identifies the plant model by model name. For capacity, process limits, and local blend specs, specific tag references can also encode the model reference. Global Multi-Site case changes use the same general CASE table structure as standard cases and reference global tables such as `DEMAND`.

### Excel Add-in

The Aspen Unified Excel Add-in lets users send PIMS-format Excel data directly to AUP or AUS without repeatedly downloading and uploading separate files. It requires Excel Office 365; earlier Excel versions are not supported. AUP data worksheets upload to the Base Model unless the workbook uses Case worksheets to modify case data. The add-in can connect the same workbook to multiple AUP or Supply Chain models, map worksheets to data types, audit data, upload Case data, compare/modify model data, choose import actions, run cases, and auto-map sheets.

Deployment options:

| Option | Use when | Key requirements |
|---|---|---|
| Office 365 tenancy | Users need the web version of Excel or centralized deployment | HTTPS must be configured for Aspen Unified, an Office 365 administrator uploads the generated manifest, and access is assigned in the admin portal. |
| Local trusted shared folder | Central Office 365 deployment is not practical | Generate `AddinManifest.xml`, place it in a shared folder, register that network path in Excel Trusted Add-in Catalogs, enable Show in Menu, and restart Excel. |

The manifest is generated from an Aspen Unified URL such as `https://<fullyQualifiedDomainName>/unified/UnifiedPIMS/excelAddin/AddinManifest.xml`; use the fully qualified computer name, not `localhost`, because the name is embedded in the manifest. The `AspenUnifiedOptions.json` file under the Unified `ProgramData\AspenTech\AspenUnified` location must be accessible, including full control for local Users when required by the manifest-generation step.

Ribbon functions:

| Function | Purpose |
|---|---|
| Connect Model | Opens the model list and connects the workbook to one selected model at a time. |
| Map Sheets | Maps Excel worksheets to Unified data types and assets, optionally using PIMS short tag format and auto-map. |
| Audit Data | Opens the related AUP page for the selected sheet; global models and distillation data have restrictions. |
| Upload | Uploads mapped worksheets. For Multi-Site models, local model names appear above the table and uploads may need to be repeated for each plant. |
| Run Cases | Opens the AUP Run Cases dialog from Excel. |

The add-in supports importing base-model data and case table data for local and global models. Starting with V14.5 behavior it also supports importing periods to the Base Model and period case modifications to local and global models. Crude cuts, crude distillation, assay, and assay-library data can only be modified on the Base Model.

### Infeasibility Analysis and LOS Streams

Automatic infeasibility analysis helps diagnose cases that are infeasible, unbounded, or exceed maximum passes. It can automatically apply penalties to purchases, sales, limits, capacities, or blend specification properties, then rerun all cases or only infeasible cases. Automatic penalties are assigned only to variables changed in the cases for that job; if a penalty already exists, AUP uses the existing penalty rather than a calculated scale-factor penalty.

Recommended flow:

1. Enable `FIXBAL` in General Settings so material-balance rows are forced equal and insufficient disposition becomes infeasible instead of a material imbalance.
2. Configure automatic penalty scale factors under General Settings application infeasibility penalty options.
3. Select infeasibility settings in Run Cases.
4. Run cases and inspect penalties from the Flowsheet Penalties tab, Full Solution report, or relevant Purchases, Sales, Limits, Capacity, Process Limits, or Blend Specification pages.

Loss (`LOS`) streams represent shrinkage. Weight loss is calculated from total material weight in minus total material weight out, typically through rows such as `WBALLOS`; volume loss is calculated from total volume feed minus total volume yield, typically through rows such as `VBALLOS`. Enabling **Include LOS stream** includes these loss rows in material balance calculations for submodels, distillation towers, and flowsheet groups.

### Matrix Row and Column Names

AUP matrix row and column names appear on Bounds, MIP, ROWS, Submodel Configuration, and Output Diagnostics pages. Variable portions such as `xxx`, `yyy`, `p`, `m`, and `y` can be up to 20 characters and may include digits or special characters. A tag reference can display an entity description or abbreviation depending on the **General Settings > Format** option.

Common naming patterns:

| Pattern family | Examples | Meaning |
|---|---|---|
| Purchase/sale variables | `PURC:xxx`, `SELL:xxx`, `SEL:xxx:m:p:y`, `ABUY:xxx`, `ASEL:xxx` | Material or utility purchase/sale, optionally by group, market, period, and plant |
| Supply/global supply | `ASUP:xxx`, `ASUP:xxx:y:p` | Global or local purchase by group from Multi-Site supply tables |
| Transport | `T:xxx:y:z:m:p`, `et:xxx:y:z:m:p` | Material transfer from source to destination by mode and period |
| Inventory | `IDEF:xxx:p`, `IEXC:xxx:p`, `EINV:ggg`, `NINV:xxx:p`, `XINV:xxx:p` | Inventory target, excess, group, minimum, and maximum rows/columns |
| Blend/specification | `BVBL:xxx`, `BWBL:xxx`, `FBLN:xxx`, `N:xxx:yyy`, `X:xxx:yyy`, `U:xxx:yyy`, `D:xxx:yyy` | Blend balances, formula blends, min/max specification constraints, and target blend penalties |
| Recursion/pooling | `RBAL:xxx`, `RVBL:xxx`, `RWBL:xxx`, `qVBL:xxx`, `qWBL:xxx`, `XVBL:xxx` | Recursion balances and pool collector rows/columns |
| Process limits and penalties | `E:LIM:xxx`, `Z:LIM:xxx`, `u:LIM:xxx`, `d:LIM:xxx`, `uCAP:xxx`, `dCAP:xxx` | Driver rows, operating condition specifications, and up/down infeasibility breakers |
| Objective/MIP/special rows | `OBJFN`, `OBJFN00:x`, `MINOBJ`, `M:ccc:bbb`, `L:MIP:bbb`, `XPENALTY`, `Epencol`, `Epenrow` | Objective function, period objective, MIP blend control, PSPAN penalties, and penalty collectors |

Reserved tag names must not be reused outside their defined meaning. Reserved examples include `FBR`, `SPG`, `SUL`, `API`, `BTU`, and `LOS`; blanks should never be used in tag names. `LOS` is always a process-unit yield and never a feed. It can also account for actual volume expansion or contraction, but total weight percentages may then be inaccurate.

### Multi-Start, Planning Targets, and Reports

Multi-start progress charts appear on Job Status when multi-start is enabled from Run Cases. Multi-start addresses local optima by seeding the problem with multiple starting points and selecting the best solution. Charts show objective function values by pass, support hover tooltips with objective function and pass number, can be sorted by objective function, exported to Excel, printed, or expanded full-screen.

Planning Targets publish AUP targets for use by Aspen Unified Scheduling. Target sets can contain crude-operation campaigns, also called envelopes, that define start/end time, distillation mode, operating parameters, target crude amounts, and target product cuts. Preconditions include a single-site planning model, executed cases, a linked Site Catalog, and published dependencies such as modes/assets/materials/properties for distillation envelopes, submodels for submodel envelopes, or materials for material envelopes. Target dates should fall within the AUS model range that consumes them.

Large execution reports can be controlled with an external `PimsReports.xml` file. The file is generated for a specific model type, so Supply Chain and periodic models include different sections than standard models. To customize, copy the generated file from the most recent `C:\ProgramData\AspenTech\AspenUnified` output folder, wrap it with a `ReportSettings` root, add the model attribute to the `AllPlants` element, set each section's `ReportSectionOn` value to `1` or `0`, optionally reorder sections, place the file under `C:\ProgramData\AspenTech\AspenUnified`, and rerun cases.

### Crudes, Cases, Streams, and Model Reconciliation

Crude purchases require more setup than normal purchases: add a crude assay library to the model, associate the crude with a crude assay, add the crude to model inventory, then add it to the Purchases table.

Case-modifiable cells support right-click actions: copy, clear, reset to parent value when the value differs from the parent, and view parent case data. The parent case data dialog shows the inheritance path from Base Model to the current cell, including case name, value, and UOM. Highlighted values indicate changes from original values. Disabled cells can show inherited disabled state, but the disabled state cannot be changed from that dialog.

Flowsheet stream editing requires the Base Model as the active case. Streams can be added from the flowsheet stream panel or the flowsheet connection tool. Feed ports must connect to product ports, ports that already have streams cannot start new connections, and a stream must have at least one endpoint connected to a port. Streams can terminate as stubs on white space. Existing stream endpoints can be reconnected with the connection tool, and stream tracing can highlight flowsheet paths by selected units or streams.

Model reconciliation resolves differences between parent and child branches or between workspaces. A model needs reconciliation when a parent branch changes, a child branch promotes changes, or another workspace modifies the same branch. Users can get latest changes from parent, get latest changes to the model, promote changes to parent, ignore notifications temporarily, preview changes through Model Comparison where available, or resolve conflicts from merge details.

Reconciliation behavior to preserve:

- Parent changes notify child branches; child branches can merge parent changes and resolve conflicts by taking parent or child values.
- Child promotion notifies the parent; parent users can get latest promoted changes, revert changes, or do nothing, but may be unable to check in until resolved.
- Naming conflicts created by merge are automatically resolved in favor of latest branch names and recorded in the structural change log.
- Category 1 AUP/Multi-Site data such as submodels, distillation modes, blends, purchases, sales, capacities, limits, and bounds can have resolvable conflicts.
- Assay model data can support conflict resolution, while assay file data is accepted by default.
- Structural changes such as flowsheet, settings, advanced modeling data, periods, inventories, and naming changes are merged by rule rather than selective row choice.

## AUP Troubleshooting

Common AUP troubleshooting checks:

| Symptom | Check or likely resolution |
|---|---|
| Model will not converge or is infeasible instead of showing material imbalance | Review **FIXBAL**. It can help minimize local optima but may cause convergence issues; try clearing it and rerun. Also review execution-log warnings for structural model issues. |
| Model converges too quickly using MIP | If the starting solution is already close to convergence, set **Max number of iterations before MIP invoked** to `1` so MIP variables are optimized properly. |
| Reports do not appear | Allow browser pop-ups. |
| Cannot add user permissions or migrate/create models | Verify AUP site role assignments from Home > Roles. The installing user is assigned Administrator automatically; other users may need Administrator access for full site operations. |
| Assay Management is not working | AUP V10+ is incompatible with Aspen PIMS versions before V8.8 for Assay Management when installed on the same machine. Characterization and assay-management operations may fail in that setup. |
| HPC concurrency level or privilege change is not applied | Exit the model and return; application and command-line privilege changes are applied only after reopening the model. |

## Multi-Site PIMS Model

Multi-Site PIMS extends Aspen Unified Planning from an individual refinery or plant model to a supply-chain model. It links local plant models with a global network of depots, markets, material supply, material demand, transportation, and inventory. The workflow is similar to historical M-PIMS and X-PIMS usage, but the main working surface is the network map plus the global primary-input tables.

### Global and Local Model Responsibilities

Multi-Site models separate local processing from global supply-chain decisions:

| Area | Local plant model | Global multi-site model |
|---|---|---|
| Processing | Local units, flowsheet, capacities, process limits, utilities, and plant inventory behavior | Coordinates the network and reads local model capabilities |
| Purchases and sales | Local material purchases and sales are ignored in the global run | Global supply and demand define purchases and sales |
| Depots and markets | Not defined in local plant models | Defined globally as storage/transfer and demand nodes |
| Transportation | Local models do not own global arcs | Global model owns plant/depot/market connections, modes, costs, limits, and allocations |
| Periods | Local periods can be maintained independently starting with V14 behavior | Global periods control global network rows; periodic source plant periods must be compatible when attached |

Global cases can contain local model data, but local models inside the global case file cannot be modified directly. When a local model changes or is checked in, the global model can notify users that plant data or site capabilities need updating.

### Multi-Site Map

The **Map** is the primary interface for adding, viewing, and editing network objects. Users can work with plants, depots, markets, external Planner/ExPO nodes, AUPD nodes, and transport arcs. The tables below the map mirror the same primary-input data available from the navigation panel: Supply, Demand, Transport, Transport Solutions, Inventory, and their group variants.

Map actions to preserve:

- Add and configure nodes from the palette; plant nodes are added in the **Base Model** by dragging the Plant icon onto the map and linking the node to a model from the model library.
- Delete a node only from the Base Model; removing a node from the map can be different from deleting the model entity.
- Enable or disable nodes in case context. All cases in a multi-case run must use the same set of enabled and disabled nodes.
- Open a plant flowsheet, view transport details from a selected node, and review update indicators for plant-model or Site Capability changes.
- Search, filter, and synchronize map display with the Transport Solutions table.

Transport solution charts can be displayed after the model has been run. Selecting **Solution** on the map syncs displayed arcs with the Transport Solutions table; hovering over an arc shows solution or marginal charts by material, transportation mode, or both. Percent measures display as donut charts, quantity measures display as bar charts, and charts do not appear when there are no solution values.

### Palette, Properties, and Network Objects

The right-side map panel has two roles:

| Panel | Purpose |
|---|---|
| Palette | Adds Plant, Depot, Market, Supply Chain Network, migrated nodes, and bulk-import/export nodes through `MultiSiteNodes.xlsx` |
| Properties | Configures the selected node or arc; the panel can be resized and pinned |

Common node fields include Name, Abbreviation, Description, and Color. Names have a 20-character limit, descriptions have an 80-character limit, and markets/depots require three-character abbreviations. Node information is editable only in the Base Model.

Object-specific behavior:

| Object | Key behavior |
|---|---|
| Plant | Configured from the model library; source model type must match and periodic plants must have periods. Plant properties include Open Flowsheet, Model Connection actions such as Unlink, Replace, Update Model, and Create Snapshot, plus Site Capability, Supply, Transport, Configuration, Balance, and Limits areas. |
| Depot | Represents purchases, sales, transfers, and inventories. Properties are organized under General, Balance, and Limits, including Supply, Transport, and Inventory subtabs. |
| Market | Holds market demand limits and related Demand and Transport subtabs. |
| Transport arc | Defines material, direction, mode, cost, UOM, and transfer limits. Plant-to-plant, plant-to-depot, and depot-to-depot movement requires a transportation mode. |
| Planner/ExPO or AUPD node | Imports external XLP, JSON, CSV, or MPS packages and maps external materials, periods, and variables into Unified Planning variables. |

### Supply, Demand, Transport, and Inventory Tables

Multi-Site global primary-input pages are also exposed as map quick-view tables and node property-panel sections.

| Page | Purpose | Main tabs or rows |
|---|---|---|
| Supply | Lists materials migrated from M-PIMS/X-PIMS and defines global or plant-specific purchase constraints and costs | Global Material, Global Group, Supply, Supply Group |
| Demand | Defines market-specific sales constraints for materials and material groups | Demand, Demand Group |
| Transport | Combines PIMS `TRANSFER` and `DEMALLOC`; manages material movement among plants/depots and demand allocation to markets | Transport, Transport Solutions, Transport Group, Transport Modes |
| Depot Inventory | Combines `DINV` and `GROUPS`; periodic-only depot inventory constraints | Inventory, Inventory Group |

Periodic models can display **Default** rows. Default rows provide values used when a specific period/material row is blank; deleting a period-specific value reverts to the default. Min/Max defaults represent totals across periods, and invalid total relationships such as Min greater than Max are highlighted.

Common table behavior:

- Use **Active Case** to choose the case context; adding materials, groups, transports, modes, and network objects is generally limited to the Base Model.
- Editable cells are shown in blue and can be changed by double-clicking.
- Import uses correctly formatted PIMS global-table Excel data; **Export in PIMS format** produces a re-importable template such as `DataExport.xlsx`.
- Regular grid export saves browser-download files that are not necessarily re-importable.
- Deleting a material row usually removes the ability to set values for that context; it does not delete the material from the model. For periodic rows, deleting the Default row removes the item for all periods.
- Table Tray actions support disable/enable, create group, add to existing group, and delete where available.

Key table fields:

| Table | Important fields |
|---|---|
| Supply / Global Material | Material, Plant when local, Period, Min, Solution, Max, Marginal, Cost, money/time, quantity/time, Distress Sales or Distress Purchase, Distress Price/Cost, Solution Penalty, Price UOM, Disabled, UOM, Type, Basis |
| Demand | Material, Market, Period, Min, Solution, Max, Marginal, Price, money/time, quantity/time, Distress Purchase, Distress Cost, Solution Penalty, Price UOM, Disabled, UOM, Type, Basis |
| Transport | Material including `Any`, From, To, Mode, Period, Min, Max, Cost |
| Transport Solutions | Material, From, Period, Mode, Solution, Marginal value, UOM; new transfers are added from Transport, not from Transport Solutions |
| Transport Modes | Name up to 20 characters, Description up to 80 characters, one-character Abbreviation |
| Depot Inventory | Material, Depot, Period, Open, Min, Target, Close, Max, Change, Penalty Cost, Holding Cost, Opening Cost, Closing Price, UOM |

Depot inventory applies only to periodic models and only to depots. Transport and depot inventories for global materials must use a consistent basis, such as weight or volume. Inventory groups can only group materials from the same depot.

### New Demand, Supply, and Transport Dialogs

These dialogs add rows to the global network input tables:

| Dialog | Opened from | Required context and fields |
|---|---|---|
| New Material Demand | Market property panel, Map Demand table, or Demand page | Adds sales constraints to a Depot or Market. Material and Market are required; Type, Sell Basis, Min, Max, Price, and Distress Cost define the demand row. Users can choose **From Plant** or create a new material. |
| New Material Supply | Plant/Depot property panel or Map Supply table | Adds purchase constraints to a Plant or Depot. Material and Plant are required; Type, Buy Basis, Min, Max, Price, and Distress Price define the supply row. Users can choose **From Plant** or create a new material. |
| New Transport | Map Transport table or Transport page | Adds a connection among plant, depot, and market nodes. Material may be a specific material or `Any`; From, To, Mode, Min, Max, Cost, and Transfer Basis define the connection. Mode is required for plant-to-plant, plant-to-depot, and depot-to-depot transfers. |

### Global Groups

The **Global Group Summary** page defines material group details used by Demand, Supply, Transport, and Inventory. Groups can only be added when the Active Case is the Base Model, and group properties can be opened from the row selector or right navigation property-panel icon.

Group types:

| Group type | Used for |
|---|---|
| Material | Global material groups referenced by Supply and Inventory; can be associated with depot or plant nodes |
| Plant | Local and global sales constraints and demand allocation; members combine plants and materials |
| Market | Demand groups for specific markets; members combine market and material |
| Blend | Plant-specific blend specification groups |

Group property panels share Group Name, Abbreviation, Description, and Group Members. Members can be added or removed from the property panel when the Base Model is active.

### Planner Network Configuration and Results

External Planner/ExPO network nodes support optimization of products generated from an external Planner model's raw materials. The **Network Configuration** page maps external materials, periods, and variables to Multi-Site global variables, and execution results are reviewed on the **Planner Network Results** page.

Configuration areas:

| Tab | Purpose |
|---|---|
| Materials | Maps external model materials to Unified global materials and a **Transfer From** plant/depot. Changing the mapping adds, removes, or updates related Transport rows; Demand rows are autogenerated for mapped material/period combinations. |
| Periods | Maps external model periods to Unified periods and start dates; all periods must be mapped for full configuration. |
| Variables | Maps external variables to Unified values, UOMs, Min/Max, Offset, and Multiplier. Rows update when Materials or Periods mappings change. |

The related-content panel shows Transport, Transport Solutions, and Demand data for the Planner node. Users can edit blue cells, disable or re-enable materials, and export related data. After execution, Planner Network Results has **Mapped Variables** and **ExPO Variables** tabs; values are read-only and include AU and ExPO solution data.

### Supply Chain Catalog and Site Capabilities

The **Supply Chain Catalog** page is visible only for Multi-Site PIMS models. It links site catalogs to the global model so local model data and published Site Capabilities can be reused when configuring or updating plant nodes. If local models are connected to a site catalog, the supply-chain catalog automatically reflects those local model connections in the **Connected Plant Models** column.

Supply Chain Catalog fields:

| Column | Meaning |
|---|---|
| Name | Site Catalog name |
| Server | SQL Server hosting the catalog |
| Database | SQL database storing catalog information |
| Connected Plant Models | Local plant models connected or used in the Multi-Site model; plant links open Site Capabilities |
| Description | Catalog description |

Users add a site catalog from **Catalog > Supply Chain Catalog** by selecting an existing catalog in the Add site catalog dialog. Once added, the catalog link remains available and does not need to be reconnected for the same plant model. Members can be removed from the row delete action.

The **Site Capabilities** page lists published capability sets for connected plants. It can be opened from the Supply Chain Catalog, from the plant link in **Connected Plant Models**, or from a plant property panel under **Model Connection > Site Capabilities**. Each row records capability name, start/end dates, last update, and publisher. Selecting two or more capabilities enables the **Next** action to apply them to a global case.

The **Apply Site Capabilities** page applies local capability data to the global model. The left panel selects the target case, capabilities, and calculation method. The preview and comparison tables show existing global values, new values, deltas, and violation coloring before the user applies data.

Calculation and application rules:

- Capacity and Process Limits support methods such as Fix Min, Fix Max, Fix Solution, Min & Max, Min Only, Max Only, Solution Max, and Solution Min.
- Inventory, visible only for periodic models, supports Open, Target, Min, and Max values.
- Site capability dates must align with global period/case dates; otherwise New values may be blank.
- Users can filter by absolute delta percentage, edit New values, apply the current tab to a case, or apply all Capacity and Process Limit values to cases.
- Modified New values are highlighted, delta text turns green for modified values, and limit violations are shown in red.

### Creating and Migrating Multi-Site Models

Multi-Site models can be created directly in AU, created by attaching existing local AUP models, imported from a model library or site catalog, or migrated from existing X-PIMS/P-PIMS models. The user must have the required role assignment for model-creation workflows.

Direct creation workflow:

1. From the Aspen Unified Planning home page, choose **Create New > Multi-site Model**.
2. Complete the **New Supply Chain Model** dialog.
3. Open the new model and define the distribution network on the map.
4. Use the palette to add plants, depots, and markets.
5. Select each object and complete its property-panel details.

Creating a global model from an existing local AUP model is done from the Multi-Site map. Drag a Plant onto the map, open the Plant Properties panel, choose **Add from model library**, select the local AUP model, and add it. AUP creates global tables such as Global Material, Global Supply, Demand, Demand Group, Transport, related groups, and a local market for the plant.

Migrating an existing X-PIMS or P-PIMS model creates individual site models and a connected global model. Both local and global site models appear on the AU Home page. Market and Depot abbreviations are converted from one-character identifiers to three-character tags.

Migration dialog tabs:

| Tab | Key fields and rules |
|---|---|
| Models | Global model name is required, unique, up to 60 characters, and cannot contain `/`, `\\`, `+`, `*`, `%`, `&`, `?`, `'`, `:`, `<`, or `>`. Local model name is required, unique, and up to 255 characters. Descriptions are optional. |
| Settings | Model type is Standard or Period and cannot be changed after definition. Model basis is Volume or Weight and cannot be overwritten. Large market/depot support can be enabled. |
| Database | Select input data server/database and results data server/database. |

After migration, clean up the model and ensure local model changes in the case file are applied to the local base model. AU does not allow local models to be modified inside the Global Case file.

### Plant-Specific Case Data

In addition to global case data, Multi-Site models can modify and review plant-specific case determinate data. A plant must exist on the map and a case must already exist.

Workflow:

1. Select the desired case from **Active Case**.
2. Navigate to **Map > <plant name>**.
3. Expand the plant link and edit the relevant plant-specific areas.
4. To review modifications, open Case Details, use the **Modified Data** tab, and select the plant from the **Scope** drop-down.

### ExPO / PSCP Synergy Workflow

The ExPO workflow integrates Petroleum Supply Chain Planner or Supply Chain Planner models with AUP/AUPD so the combined PSCP MILP and AUP MINLP problem can be solved in AUP and results can be returned to the planner model.

| Step | Where | Output or effect |
|---|---|---|
| Generate package | PSCP or Supply Chain Planner | ZIP file containing model data for the AUPD node |
| Configure and run | AUP Multi-Site PIMS | Import package, map materials/periods/variables, and execute the combined model |
| Export results | AUP Multi-Site PIMS | CSV file with solution values generated from the AUPD node |
| Solve final planner model | PSCP or Supply Chain Planner | Planner model uses the returned CSV and updates final results |

Important ExPO details:

- Import the package from the AUPD node property panel while Base Model is active.
- In Material mapping, **Transfer From** identifies the plant sending material to PSCP and creates the refinery-to-distribution transport variable.
- In Period mapping, map PSCP periods to Unified periods; Unified must have the same number of periods or fewer for the combined optimization problem to remain meaningful.
- Variable mapping includes variables from the JSON file in the package and supports unit conversion with `Unified value = multiplier * source value + offset`.
- After running, review results from the Planner Network Results page, then right-click the AUPD node on the map and generate the CSV file for PSCP.

## Next PIMS Slices

The next logical PIMS slices, based on [ .github/kb/progress.md ], are:

- Detailed non-CARB ABML correlation formulas
- Remaining multi-site model creation, catalog, site capability, and migration content
- Planning concepts/reference topics
- Troubleshooting