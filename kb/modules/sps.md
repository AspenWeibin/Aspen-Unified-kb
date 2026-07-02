# AspenTech Strategic Planning for Sustainability Pathways Knowledge Base

## Quick Map

| Need | Go to |
|---|---|
| Build and edit the pathway network | [Superstructure](#superstructure) |
| Configure optimizer runs | [Optimizer and Cases](#optimizer-and-cases) |
| Maintain compound, utility, reaction, raw-material, and economic data | [Model Data](#model-data) |
| Review optimization output | [Reports](#reports) |
| Build a net-zero plan | [Net-Zero Planning](#net-zero-planning) |
| Configure display and departmental permissions | [Model Settings](#model-settings) |

## Coverage Map

| Source area | KB coverage |
|---|---|
| SPS overview/navigation | MiniTOC skipped as navigation-only |
| Superstructure | Model-building canvas, component panels, enable/disable behavior, AI Assistant, Sankey |
| Model Data | Basic item specifications, reaction/raw material, techno-economic parameters |
| Cases & Analysis | Optimizer Configuration, Job Status, Case Summary |
| Reports | Evaluation summary plus feedstock, product, raw material, waste, utility, cost, CO2 emission, pathway ranking |
| Net-zero Planning | Historical inputs, assumptions, abatement initiatives, net-zero plan outputs |
| Model Settings | Display settings and Net-zero Permission Settings |

## Overview

Strategic Planning for Sustainability Pathways (SPSP) models possible pathways for converting feeds into products while evaluating profitability and CO2 reduction. The product centers on a superstructure: a network of feedstocks, CO2 capture steps, process intervals, products, and the connections between them.

The optimizer can search for pathway choices that maximize Net Present Value (NPV), maximize CO2 reduction, or apply constraints that combine profitability and emissions goals. Model data, case inputs, superstructure connectivity, and selected system-boundary parameters determine optimization results.

## Superstructure

### Superstructure Work Area

The Superstructure tab is the primary model-building and result-review area. It displays the network topology and model completeness, and it is the first work area visible when a model is opened for the first time.

Core superstructure components:

| Component | Purpose |
|---|---|
| Feeds / CO2 sources | Available feedstocks or sources. Details can include flowrate, composition, economic cost, and carbon footprint. |
| CO2 capture steps | Capture process options that can be part of a pathway. |
| Process intervals | Conversion or processing steps in the pathway. |
| Products | Output products, demands, composition, and associated economics. |
| Connections | Streams/events connecting nodes; flow thickness in result views can reflect selected quantities. |

Details panels for components can include component type, raw materials, flow limits, composition, economic costs, carbon footprint, utility consumption, waste management, product demand, and feed availability.

### Component Panels

The right-side Operations area contains the Add Superstructure Components panel and View Details panel. Both panels can be resized and pinned.

The Add Superstructure Components panel is available from the right-side palette icon. Components are not selectable unless the active case is **Base Model**, because structural components are added only to the base model.

| Panel tab | Behavior |
|---|---|
| Model Builder | Quickly builds a superstructure by selecting at least one feedstock, CO2 capture step, and process or product. Available only while the superstructure is empty. It is disabled after units are placed and can be re-enabled by clearing all components. |
| Templates | Adds objects by drag/drop. Templates include Feedstock, CO2 Capture Step, Process, Product, Custom, text annotations, and stream connections. |

Model Builder selections can include min/max feed flowrates in kg/hr and product demand limits in ton/yr. **Build Model** creates the superstructure; users may need to zoom or pan to see the generated units.

Open a View Details panel by double-clicking a component, selecting it and clicking the details icon, or right-clicking and choosing **Details**. Property changes are applied immediately. The panel supports unit color selection and unit icon changes. An incomplete-status indicator appears on the panel and object when required configuration is missing; hovering over it describes what is missing.

### Enable and Disable Components

Users can enable or disable units in the superstructure to include or exclude specific pathways, units, or process intervals from optimization.

Workflow:

1. Right-click a unit on the Superstructure page.
2. Choose **Enable** or **Disable**.
3. Disabled units turn gray, and connected streams/intervals also appear gray.
4. The Details Panel State field changes between Enabled and Disabled.

Disabled units and associated pathways are not included in optimizer solutions. A unit must be enabled before it can participate in optimization.

### AI Assistant

The SPSP AI Assistant uses general chemistry and industrial-process knowledge to help draft an initial process pathway. Users provide available feed, desired product, and number of pathways to model. The assistant can break down complex steps into simpler ones or group detailed sequences into a single step.

When the generated outline is accepted, the model becomes available on the Superstructure page where users can manipulate generated items and complete component details.

Important caveat: AI Assistant suggestions may be incomplete, outdated, or inaccurate. They should be independently verified with engineering expertise before being used for specific advice or model decisions. The AI Assistant is enabled by default; removing access requires AspenTech support. The FAQ covers hosting, data usage, use cases, LLM decision making, metrics, and controls.

### Sankey Diagram

The Sankey diagram visualizes case results. Nodes represent CO2 sources, process intervals, products, and utilities; connections represent streams or events. Connection thickness is proportional to the selected quantity, and node height depends on total inflow/outflow thickness.

Use the Sankey view to:

- Review optimized processes for the current model case.
- Identify dominant material, utility, or emissions contributors in larger models.
- See the relationship between user/system adjustments and balancing impact.
- Make changes and rerun the optimizer for additional analysis.

The Sankey diagram is generated from superstructure topology and case data. It does not generate new data; it visualizes existing optimization/case results.

## Model Data

### Basic Item Specification

The Basic Item Specification page provides default databases for common items used in the superstructure framework.

| Tab / item | Fields and behavior |
|---|---|
| Compound | Name, formula, molecular weight (kg/kmol), emitted Global Warming Potential (kgCO2e/kg), low heating value (MJ/kg). |
| Utility | Name, cost ($/MJ), carbon footprint for production (kgCO2e/MJ), carbon footprint for consumption, and lower/upper limits (MJ/yr). Positive utility limits indicate consumption; negative limits indicate production. |

Utility production and consumption can coexist across processes. Limits are used to ensure the combined model treats shared utility behavior consistently.

### Reaction and Raw Material

The Reaction and Raw Material page contains default data for reactions and associated raw materials.

| Tab | Key fields |
|---|---|
| Reaction | Name, key reactant, stoichiometric coefficient. Negative coefficients represent reactants; positive coefficients represent products. |
| Raw Material | Name, cost ($/kg), carbon footprint for production (kgCO2e/kg), and mass fraction of compound in additional raw material. |

Only the **Value** field is customizable in these database tables. Changes are automatically saved. Right-click **Reset to Inherited Value** to revert customized values where inheritance applies.

### Techno-Economic Parameters

Techno-economic analysis combines capital costs, operating costs, waste management, utility consumption, and financial/environmental inputs to produce interpretable results.

The Techno-economic Parameters page includes:

| Table | Purpose |
|---|---|
| Carbon tax and credits | Defines carbon tax/credit values that can be included in results or optimization. |
| Economic/environmental parameters | Holds global parameters used in economic and environmental calculations. |

Only the **Value** field is customizable. Child cases inherit parent-case data; customized inherited values can be reset to inherited values.

## Optimizer and Cases

### Optimizer Configuration

Open the Optimizer Configuration dialog from the SPSP application bar. The dialog initiates optimizer runs, chooses the objective, selects cases, and defines system-boundary parameters.

General options:

| Option | Meaning |
|---|---|
| Maximize NPV | Chooses pathways that maximize Net Present Value. NPV evaluates profitability by discounting future cash inflows/outflows to present value. |
| Maximize CO2 Reduction | Chooses pathways that maximize CO2 reduction. |
| Minimum CO2 Reduction | When maximizing NPV, requires at least the entered CO2 reduction percentage. |
| Positive Profit | When maximizing CO2 reduction, requires optimal pathways to yield positive NPV. |
| Add Cases to Run | Selects one or more cases to include in the optimizer run. |
| Number of Pathways to Calculate | Controls how many pathways the optimizer should generate. |
| Go to Job Status Page | Navigates directly to Job Status during optimization; otherwise the run continues in the background and a toast appears on completion. |

System-boundary parameters determine what is included in CO2 lifecycle emission/reduction calculations:

- Raw material production
- Utility consumption
- Transportation
- Utility production
- Waste management
- Product consumption
- Unused feed counted as direct emissions

Techno-economic analysis can include Carbon Credit or Carbon Tax in the result summary. Carbon Tax is tax price multiplied by net emissions. Carbon Credit is credit price multiplied by emissions reduction compared with business as usual. If carbon tax/credit is included in the optimization model, those terms affect the objective function and can change pathway selection.

When an optimization run completes successfully, a restore point is automatically created. If the user is not on Job Status, a toast notification reports run status. A status indicator displays warnings when events are incomplete.

### Job Status

Job Status lists running, queued, and completed case execution jobs. Jobs are batches of executions and can run in the background while users continue viewing/analyzing data or making changes.

The Job Status table lists jobs in submission order, with the newest job at the top. Key columns include:

| Column | Purpose |
|---|---|
| Optimization Jobs and Cases | Job and case names. Selecting a job/case can expose the Download Server Logs icon. |
| Status | Execution progress or final run outcome. |
| Objective Function Value | Helps compare optimality between cases. |

Cases always display their latest solution regardless of which job is selected. If **Go to Job Status Page** was selected in Optimizer Configuration, the user is taken directly there during execution; otherwise a completion toast can navigate to Job Status if clicked before it disappears.

### Case Summary

Case Summary lists all defined cases and the Base Model. Cases let users test different variations of superstructure pathways and components and compare their effect on optimization results.

Cases are hierarchical. Child cases inherit data from parent cases; top-level cases use Base Model as parent. Rows can show case name, creation metadata, last modified date, and modified-by user.

Common case actions include:

| Action | Behavior |
|---|---|
| Run optimizer | Opens the optimizer dialog from the application bar and runs selected case(s). |
| Duplicate cases | Copies selected cases; child cases must be selected individually if they should be copied. |
| Edit inherited data | Child cases can override inherited values where editable fields support inheritance. |

## Reports

Reports are selected by case and pathway ranking from the SPSP application bar. Most report tables are filtered to show only selected feeds, processes, products, or pathways, not every available option. Data panels provide graphical views of the table content; hovering over plotted points displays details.

### Evaluation Result Summary

The Evaluation Result Summary shows key Techno-economic Analysis and CO2 Lifecycle Assessment metrics for optimizer-selected pathways.

| Area | Contents |
|---|---|
| Techno-economic Key Metrics | High-level pathway economics and operating-cost distribution. |
| Techno-economic Details | Capital cost, gross revenue, operating cost, profit, and net present value. Read-only. |
| CO2 Lifecycle and Reduction Key Metrics | High-level emissions and reduction metrics. |

### Report Types

| Report | What it shows |
|---|---|
| Feedstock | Simulated feedstock consumption rate by specification, UOM, selected feedstock sources/compositions, and total feedstock from CO2 sources. |
| Product | Product production rate by specification, UOM, selected products/compositions, and total product by pathway. |
| Raw Material | Raw material consumption by raw material, UOM, selected process interval, per-process total, and row total. |
| Waste | Waste disposal rate by waste specification, UOM, selected process interval, and totals. |
| Utility | Utility consumption/production by utility, UOM, process interval, and totals. |
| Cost | Operating and capital cost results by objective/expense type, UOM, process interval, and total cost. Shows selected process intervals even when costs are zero. |
| CO2 Emission | CO2 Lifecycle Assessment results by emission objective, UOM, process interval, and total category emission. |
| Pathway Ranking | Compares all generated cases/pathway rankings using a data table and parallel-axis chart. |

Pathway Ranking metrics include case/pathway, net profit, total capital investment, rate of net profit, revenue, cost of goods, costs and expenses, gross margin, pay-back period, net CO2 emission rate, CO2 reduction rate, CO2 reduction percentage, CO2 avoidance cost, and carbon-emission-credit benefit.

Pathway Ranking chart behavior:

- Use Columns to filter the table and chart together.
- Removing an item from the chart also removes it from the data table.
- Reordering chart items changes chart order only; it does not change the table column order.

## Net-Zero Planning

The Net-zero Planning workflow builds from historical inputs through assumptions and abatement initiatives into plan outputs.

### Historical Inputs

Historical inputs are the first step in the net-zero planning workflow. They provide past facility and operations data used to track performance over time, analyze trends, make predictions, identify improvement areas, and inform decisions.

Historical input types:

| Type | Purpose |
|---|---|
| Facility units | Facility units that affect scope emissions. |
| Scope emissions | Annual emissions and operational availability for each facility unit. |

Tables support adding rows, deleting rows, copying data with or without headers/group headers, importing data, and exporting using common table actions.

### Assumptions

Assumptions are the second workflow step. They define future-facing initiatives and scenarios used to forecast future years and estimate how effective reduction efforts may be.

Assumption areas:

| Area | Purpose |
|---|---|
| Initiatives data | Organizational efforts to reduce net emissions to zero. |
| Production scenarios | Potential production schedules/approaches for efficiency comparisons. |
| Carbon intensity scenarios | Emissions per unit activity for different power-generation technologies. |
| Drivers | Key factors behind organizational emissions, such as energy use, processes, transportation, and logistics. |
| Baseline Emission Chart | Visualizes emissions for specific facilities, scenarios, and reference years. |

### Abatement Initiatives

CO2 abatement initiatives reduce or remove carbon dioxide emissions. Supported abatement levers include:

- Energy Efficiency
- Carbon Capture & Storage
- Flaring
- Low Carbon Heat
- Offsetting

Common initiative methods include improving efficiency, transitioning to renewable energy, carbon capture and storage, and behavior/operational changes that reduce carbon footprint.

The Add Abatement Initiative dialog requires an abatement lever, initiative name, and scenario year. Initiative values feed downstream net-zero plan outputs such as MACC, emissions reduction charts, and summary tables.

### Net-Zero Plan

The Net-zero Plan section summarizes the plan produced from historical inputs, assumptions, and abatement initiatives.

| Plan area | Meaning |
|---|---|
| Marginal Abatement Cost Curve (MACC) | Table and chart comparing emissions reduced by each abatement option against cost to implement. MACC fields are auto-populated from Abatement Initiatives. |
| Overall Emissions | Tables and summaries for emissions reduction efforts. |
| Emissions Summary | Copy of the Baseline Emissions chart from Assumptions. |
| Final Outputs | Emissions summary in key years. |
| Normalized Emissions | Scope 1, Scope 2, and offsite emissions from Carbon Intensity Scenarios. |
| Abatement Initiatives | Calculated yearly impact for each initiative, sourced from Excel template calculations. |
| Emission Reduction Chart | Plots showing impact of abatement initiatives, grouped by abatement lever or emissions category. |
| Summary | High-level projection of emissions and abatement-technology impact over the prediction period. |

MACC key columns include rank, abatement lever, initiative name, abatement potential (ktCO2e/y), abatement cost ($/tonCO2e), and total capex (MM$). MACC chart/table data should be changed by editing the source Abatement Initiatives, not directly in the output table.

Viewer role behavior in Net-zero Planning:

- Viewers can open and view a model but cannot edit it.
- Superstructure layouts are locked and viewers cannot move units.
- Viewers cannot create text annotations.
- In Net-zero Planning, only the Summary page remains active; other sections are disabled, though drop-down menus still work.

## Model Settings

### Display Settings

Display Settings define application defaults for how SPSP pages, tables, and the superstructure are displayed.

Application-wide defaults:

| Setting | Default | Meaning |
|---|---|---|
| Date format | `MM/DD/YYY h:mm AM` | Date display format. |
| Time format | `HH:mm (08:27)` | Time display format. |
| Object name format | Name only | Controls Name/Abbreviation display in Data Panel and related tables. Options include Name, Description, Abbreviation, and combinations. |
| Column header format | Name | Default column-header display; Name or Abbreviation. |
| Toast time (s) | 5 | Notification display duration. |

Table settings:

| Setting | Default | Meaning |
|---|---|---|
| Column drop zone at top of table | Not selected | Adds a grouping area above applicable tables for drag/drop column grouping. |
| Number format | Significant figures | Controls whether table/tooltips use decimal places or significant figures. |
| Tables | 4 | Allowable range 0-10. |
| Tooltips | 6 | Allowable range 0-20. |
| Percentage (%) | 3 | Allowable range 0-20. |

Flowsheet/superstructure settings include tooltip visibility, Base Model grid visibility, and grid-line color (default `#424242`). Tooltips can show attributes enabled as Tooltip options on object templates.

### Net-Zero Permission Settings

Net-zero Permission Settings assign departments to users/groups so users only access data for their assigned departments.

Rules:

- Only model owners can assign departments.
- Model authors and viewers cannot change their own department or others' departments.
- Users can belong to multiple departments.
- Authors and viewers must be assigned to at least one department to see data; without a department, no data is displayed.

Assignment workflow:

1. From the Aspen Unified homepage, assign users the appropriate model role, such as Author or Viewer.
2. Open **Settings > Net-zero Permission Settings** in SPSP.
3. Search for the user/group and select the matching row.
4. Click **Add** to place the user/group in the permission table.
5. Use the Department column drop-down to select one or more departments.
6. Click outside the field to save assignments automatically.