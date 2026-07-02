# Aspen Unified GDOT Builder Knowledge Base

## Quick Map

| Goal | Go to |
|---|---|
| Understand GDOT coverage in this KB | [Coverage Map](#coverage-map) |
| Create a GDOT Builder model | [Model Creation](#model-creation) |
| Build and navigate the GDOT flowsheet | [Model Builder Flowsheet](#model-builder-flowsheet) |
| Configure units, streams, and palette objects | [Flowsheet Object Properties](#flowsheet-object-properties) |
| Define indexed properties | [Indexed Properties](#indexed-properties) |
| Map measurements to model variables | [Map Measurement Variables](#map-measurement-variables) |
| Prepare and run unit simulations | [Simulation and Dynamics](#simulation-and-dynamics) |
| Review model summary and health | [Model Integrity](#model-integrity) |
| Manage model data foundations | [Model Data Foundations](#model-data-foundations) |
| Analyze gain/scaling/convolution matrices | [Model Analysis](#model-analysis) |
| Configure MV/CV operational variables | [Variable Configuration](#variable-configuration) |
| Configure online runtime and plant-system communication | [Online Configuration](#online-configuration) |
| Define custom calculation scripts, formulas, and user properties | [Calculations](#calculations) |
| Adjust UI preferences and operational workflows | [Model Settings and Working Workflows](#model-settings-and-working-workflows) |
| Review supporting objective-function and prediction references | [Resources](#resources) |

---

## Coverage Map

This module corresponds to the GDOT area tracked in `.github/kb/progress.md`. The source help is organized into operational slices rather than page-for-page transcription.

### GDOT Areas in Scope

| Area from progress | Current KB status |
|---|---|
| Using Aspen Unified GDOT Builder | Navigation mini-TOC skipped |
| New GDOT Model Dialog Box | Covered below |
| AU GDOT Model Builder | Flowsheet, unit, DMC, hybrid, furnace, simulation, and dynamics slices covered below |
| Model Integrity | Summary and Health covered below |
| Model Data | Foundation data pages covered below |
| Model Analysis | Gain Matrix, Convolution, Auto-Scaling, and matrix shortcuts covered below |
| Variable Configuration | MV/CV configuration, Auxiliary Writes, and Unit Status Mapping covered below |
| AU GDOT Online Configuration | Runtime, external status, model update, MVC type, and history query settings covered below |
| Calculations | Custom calculations, scripts, formulas, user properties, reserved names, examples, and built-in functions covered below |
| Model Settings | General UI settings and user preferences covered below |
| Working with AU GDOT | Auto-scaling workflow, export, key variables, merge/version/checkpoint workflows, trending, migration note, and Site Catalog usage covered below |
| Resources | OPT/DR objective-function and prediction reference PDFs summarized below |

### Current Slice Covered

This pass covers the first GDOT Builder foundation slice:

- New GDOT Model Dialog Box
- AU GDOT Model Builder Flowsheet
- AU GDOT Builder Flowsheet Object Property Panel
- AU GDOT Indexed Properties
- AU GDOT Map Measurement Variables Area
- AU GDOT Enhanced Simulation Equations Shortcut Distillation with Heat Balance
- AU GDOT Flowsheet Units Summary
- AU GDOT DMC Model View
- AU GDOT Furnace Unit Workflow Overview
- AU GDOT Furnace Block Configuration
- Furnace Unit Variable Ranges
- AU GDOT Hybrid Model Overview
- AU GDOT Hybrid Model Configuration
- AU GDOT Hybrid FCC Unit Overview
- AU GDOT Hybrid FCC Unit Configuration
- AU GDOT MultiDraw Fractionator Overview
- AU GDOT Multi-Draw Fractionator Configuration
- AU GDOT Connecting DMC MV/CVs to Flowsheet Variables
- AU GDOT Importing DMC Configuration Information
- Import/Export AU GDOT Custom Blocks
- GDOT Builder Equation Editor
- AU GDOT Builder Simulation Summary
- AU GDOT Unit Simulation Configuration
- AU GDOT Dynamics
- AU GDOT Model Integrity Summary
- AU GDOT Model Integrity Health
- AU GDOT Model Parameters
- GDOT Engineering Units
- AU GDOT Energy Services
- AU GDOT Property Summary
- GDOT Components
- AU GDOT Material Services
- AU GDOT Auto-Scaling and Tuning
- AU GDOT Convolution
- AU GDOT Gain Matrix
- AU GDOT Keyboard Shortcuts
- AU GDOT MV Configuration - Optimizer
- AU GDOT MV Configuration - Data Reconciliation
- AU GDOT CV Configuration - Optimizer
- AU GDOT CV Configuration - Data Reconciliation
- AU GDOT Auxiliary Writes
- AU GDOT Unit Status Mapping
- AU GDOT Online Configuration
- AU GDOT Custom Calculations Overview
- AU GDOT Custom Calculation Scripts
- AU GDOT Formulas
- AU GDOT User Properties
- AU GDOT Reserved Property Names
- AU GDOT Custom Calculation Script and Formula Examples
- AU GDOT Built-In Functions
- AU GDOT General Settings
- AU GDOT Auto-Scaling and Tuning Workflow
- Exporting AU GDOT Model Files
- AU GDOT - Key Model Variables and Parameters
- AU GDOT Builder Merge Summary
- AU GDOT - Import Checkpoint Data Dialog Box
- AU GDOT Version History Details
- V12.1 AU GDOT Reflux Flow Movements
- Specify AU GDOT Variables and Constraints to Trend in AUP
- Working with Aspen GDOT Builder and a Site Catalog
- Aspen GDOT OPT/DR ObjFunc Definitions
- Aspen GDOT Predictions

---

## Overview

Aspen Unified GDOT Builder is the Aspen Unified environment for building GDOT models, defining model topology, configuring unit operations, mapping process measurements, and preparing model data for optimization, data reconciliation, simulation, and online execution workflows.

The foundational workflow starts with a model type decision, then continues on the GDOT flowsheet where users add unit-operation blocks, connect streams or variables, configure object properties, map measurements, compile changes, and run or analyze simulations.

## Model Creation

The **New GDOT Model** dialog creates a GDOT Builder model from the Home page. Users click the create GDOT model action, complete required fields, and click **Create**. After the model is created, the GDOT Builder flowsheet opens.

Model creation fields:

| Field | Meaning |
|---|---|
| Model name | Required model name, up to 60 characters. The characters `/ \ + * % & ? ' : < >` are not allowed. |
| Description | Optional description, up to 255 characters. |
| Model type | Select **Component** or **Non-Component**. The selection determines the available unit libraries and automatically added model properties. |
| Model basis | Only available for Component models. Select **Mass** or **Molar**. The basis applies throughout the model and cannot be changed after creation. |
| Input data server/database | Select where model input data resides. |
| Site catalog | Optional for Non-Component models; Component models cannot attach a Site Catalog. When attached, planning submodel units, materials, and properties published from Aspen Unified Planning are available to the GDOT model. |

Model type behavior:

| Model type | Modeling approach | Available block examples |
|---|---|---|
| Component | Streams are modeled using composition vectors; properties are calculated from stream compositions. | Shortcut distillation with/without heat balance, fixed recovery distillation, compressor, mixer/splitter, Hybrid Model for mass basis, custom block, DMC model. |
| Non-Component | Streams are property-based and modeled as sets of properties. | MultiDraw fractionator, hydrotreater, mixer/splitter, Hybrid Model, custom block, DMC model. |

Site Catalog integration applies only to Non-Component models. Site Catalog submodels can be added from the flowsheet **Add Flowsheet Components** panel, and catalog materials/properties can be imported from GDOT Material Services and Property pages.

## Model Builder Flowsheet

The GDOT Builder flowsheet is visible when a new GDOT model opens. It defines model layout, inputs, outputs, unit connectivity, model completeness, and constraint violations. The flowsheet assists validation by showing warnings beside units when configuration or simulation data is missing. Hovering over warning icons shows details.

After flowsheet changes, users should run **Compile** from the application bar. Compilation ensures flowsheet changes are recognized and written to the appropriate files. This matters especially after creating equation-editor variables, adding measurements, configuring unit ports, or changing topology.

Important flowsheet notes:

- Unit names are separate objects from units and can be resized or moved independently.
- Feed and product connections can be moved independently of their unit.
- If a downstream unit has properties that do not exist upstream, variables are created for the downstream block and no connection equations are created; the downstream property is user-specified and has no upstream value in its unit simulation.
- If a DMC unit is deleted after mapped measurements have been compiled, the block is removed but measurements remain available.

Flowsheet access and core panels:

| Area | Purpose |
|---|---|
| Model Flowsheet | Main canvas for GDOT units, streams, connections, model completeness, and warnings. |
| Add Flowsheet Components | Right-side palette for adding units, stream tools, variable connections, and Site Catalog submodels where available. |
| Properties | Opens the selected unit or stream property panel. Double-clicking a flowsheet object also opens its details. |

Unit alert icons:

| Alert type | Meaning |
|---|---|
| Incomplete | Required configuration is missing, such as a feed/product connection, port, or material service. |
| Error | Configuration exists but has an error, such as missing feed/product components, invalid component temperature, or incompatible streams. |
| Information | Additional details are available. |

### Flowsheet Interaction Modes

GDOT flowsheet mode behavior differs from other Aspen Unified applications in a few important ways:

| Mode or tool | Behavior |
|---|---|
| Pointer mode | Standard object selection, movement, grouping, and navigation. |
| Connection mode | Creates stream or variable connections between units. Allowed ports appear around units after selecting a connection type. |
| Energy stream tool | Creates energy stream connections to heat exchangers, energy mixer/splitters, or other units that support energy ports. |
| Inspector mode | Allows right-click **Show Table** on a unit to display optimizer variable results associated with the unit or stream. |
| Hidden objects | Opens a dialog for showing hidden flowsheet objects. |
| Toolbar search | Searches units, streams, or measurement tags. For CV/MV measurement tags, the referencing stream or unit appears in the search result. |
| Filter by stream type | Filters visible Material, Energy, or Variable Connection streams. Individual streams can also be hidden by context menu and later restored. |

Connection rules depend on model type:

| Model type | Stream connection options |
|---|---|
| Component | **Composition** streams connect component-based unit operations. **Variable** connections establish linear relationships from a source unit variable to a destination unit variable. |
| Non-Component | **Bulk Properties** streams connect property-based blocks. **Variable** connections establish linear relationships between unit/custom-model variables. Diesel streams cannot feed blocks with Kero service. |

Dashed lines represent variable connections. Solid lines represent composition or bulk-property connections.

## Flowsheet Object Properties

GDOT uses two property-panel patterns:

| Panel | Purpose |
|---|---|
| Add Flowsheet Components | Adds units, streams, variable connections, and layout information to the flowsheet. |
| Specific object Properties | Configures a selected unit or stream. Access by double-clicking, selecting the object and opening Properties, or right-clicking **Details**. |

The **Add Flowsheet Components** panel can import and export flowsheet layout. Import uses an `.xlsx` file containing unit and stream layout information. Export creates a `FlowsheetLayout.xlsx` file in the browser download folder. Import behavior to preserve:

- Units without a valid location are placed in an unallocated subflowsheet.
- Units without an icon or specified size receive default icon and size.
- If `Parent` is not specified, the unit becomes a child on the main flowsheet.

The Units tab includes stream/variable connection buttons and unit-operation blocks. Site Catalog tab appears only for Non-Component models connected to a Site Catalog and shows published planning submodels not already on the flowsheet.

Common property-panel rules for GDOT blocks:

- All units have name, description, color indicator, and comments. Comments are limited to 255 characters.
- Unit-operation names are limited to 24 characters and cannot contain space, `$`, `*`, `:`, `+`, `-`, or `%`.
- Selecting **Disable** excludes the block and its variables from exported GDOT data; disabled units and connected streams are greyed out.
- Deleting a connected stream from a property panel removes the stream from the flowsheet.
- Most units except DMC and Multi-feed Short Cut Column expose **Simulation Specification**, which opens the unit simulation configuration page. Simulation names follow unit names; changing the unit name changes the simulation name.
- The Simulation Specification button is disabled while a simulation is running.

Common unit availability and connection patterns:

| Unit or block | Model type | Key behavior |
|---|---|---|
| Shortcut distillation with/without heat balance | Component | Requires composition streams for feed, top product, and bottom product; variable ports can support many feeds/products. |
| Fixed recovery distillation | Component | Requires connected feed and product streams before feed/product compositions can be configured. |
| Compressor | Component | Supports one composition feed and product, plus variable connections; default variables include suction pressure and speed. |
| MultiDraw fractionator | Component and Non-Component | Component models auto-create product/feed port relationships; non-component models can use connection streams and multiple product streams. |
| Distillation column | Component | Supports multiple feeds and side draws; users define stages, condenser type, side draws, then connect streams and configure components. |
| Hydrotreater | Non-Component | Supports one feed and one product stream. |
| Mixer Splitter | Component and Non-Component | Combines streams or splits one stream; can use multiple feeds/products. |
| Energy Mixer/Splitter | Non-Component | Mixes/splits energy streams; standard material streams are not allowed. Energy service must be assigned before energy ports appear. |
| Heat Exchanger | Non-Component | Requires energy services before adding energy streams to hot/cold in/out ports. |
| Custom Block | Component and Non-Component | Defines free-form equations or non-specified units; can be standalone, connected by variables, or used as a physical block with feeds/products. |
| DMC Model | Component and Non-Component | Imports controller gain matrices from `.gdm`; DMC blocks connect to flowsheet variables through mapped MVs/CVs rather than direct manual drawing. |
| Hybrid Model | Component mass-based and Non-Component | Creates a nonlinear predictive model from first principles for dynamic optimization. |
| Furnace | Component mass-based | Allows one composition feed/product and variable connections; furnace configuration must be complete before the unit is complete. |
| Subflowsheet | Component and Non-Component | Organizes flowsheet objects; subflowsheets can be nested. |

## Indexed Properties

GDOT indexed properties are properties defined as a function of one or more existing properties. Users define them from **Model Data > Properties** by adding a property, opening Property Details, selecting a blend basis and property type, choosing **Group = Index**, selecting the target property and Assay Manager method, then selecting a GDOT method and entering required variables.

Available GDOT indexed-property methods:

| Method | Formula | Notes |
|---|---|---|
| LOG | `y = a * ln(x + b) + c` | `a` and `c` are arbitrary scaling factors and biases. |
| LOGLOG | `y = a * ln(ln(x + b) + c) + d` | `a` and `d` are arbitrary scaling factors and biases. |
| EXP | `y = a * exp(b + x) + c` | `a` and `c` are arbitrary scaling factors and biases. |
| INVEXP | `y = a * exp(b / (c + x) + d` | `a` and `d` are arbitrary scaling factors and biases. |
| POW | `y = a * x ^ b + c` | `a` and `c` are arbitrary scaling factors and biases. |

In these formulas, `y` is the property being defined and `x` is the source property or properties. If a property is imported from the Site Catalog, its assigned Assay Manager Method cannot be changed.

## Map Measurement Variables

The **Map Measurement Variables** area maps GDOT model variables to measurement variables and OPC tags. It supports different values for different variable usage and synchronizes mappings throughout the model. Mapped variables associated with feeds are visible on the variable connection stream connected to the applicable unit.

Measurement variables created in the Equation Editor may not appear for mapping until the model is compiled.

Actions in the Map Measurement Variables area:

| Action | Behavior |
|---|---|
| Add measurement | Search for and add a measurement variable. Not all units allow new measurements, and not all variables are available for every unit. |
| Import variables | Imports from `.xlsx`. Existing measurement variables are overwritten; model variable names cannot be changed or newly created by import. Invalid or duplicate variable names are ignored. |
| Export table | Exports defined mappings to `Map Measurement Variables.xlsx`. |
| Delete mapping | Removes the mapping capability for a measurement variable; it does not remove the variable from the model. Remove the variable from the associated CV/MV table if it should leave the model. |

The area has three logical sections:

| Section | Meaning |
|---|---|
| Model Variables | Variables in `<unitName>.<variableName>` form. Shows description, UOM, default variables, required variables, added variables, and resolved variables from custom block equations. |
| Measurement Variables | Maps model variables to CV or MV measurement tags. **MV** is used for flow and parameter variables; **CV** is used for port property and bulk property variables. Changing the Type clears the current mapped Name and requires remapping. |
| Conversion Factors | Multiplier and Offset convert between measurement and model values: source measurement value * multiplier + offset = destination model variable value. |

Mappings for bulk property or composition variables are created as CV Configurations; other mapped variables are created as MV Configurations.

## Unit Summary and DMC Models

The **Flowsheet Units Summary** pages list units by type. Users open them from the Model Navigation Panel under the flowsheet node, then select a unit name to open the configuration or definition page for that unit type.

| Unit type | Opens |
|---|---|
| Custom Models | Equation Editor |
| DMC Models | DMC Model View |
| Furnace Models | Furnace Block Configuration |
| Hybrid Models | Hybrid Model Configuration |
| FCC Complete Combustion Regenerator Models | FCC Complete Combustion Regenerator Configuration |

### DMC Model View

The **DMC Model View** displays MV and CV variables imported from a DMC3 `.gdm` file. It can also import DMC controller configuration data from `.ccf` files.

Users can access the DMC3 Matrix View from the DMC unit block property panel with **Go to DMC3 Matrix View**, or from the left navigation under **DMC Models > <DMC model block name>**.

DMC Model View tabs:

| Tab | Purpose |
|---|---|
| Gain Matrix View | Shows gain coefficients, with MVs as rows and CVs as columns by default. Users can transpose the matrix per DMC block. |
| Curves Matrix View | Shows dynamic-model curves calculated from Gain Matrix cell formulas. Selecting a cell shows the formula/properties and an enlarged curve view. |

Gain Matrix behavior:

- Variables are populated when importing a `.gdm` file from Aspen DMC3.
- Clicking an existing coefficient opens its properties panel.
- Clicking a blank matrix cell can create a new MV/CV pair with default values that users can edit.
- Keyboard arrows can navigate the matrix grid.
- The gain multiplier is imported from a DMC3 controller `.ccf` file as `GMULT`; after compile, GDOT calculates the resulting gain by multiplying the gain multiplier by the MV/CV gain value.
- Submodel Type determines how GDOT Online uses the pairing: **Prediction and optimization** or **Prediction Only**.
- Deadtime can be constant or a function of volume; function-of-volume deadtime can use existing flow variables or a user-entered denominator.

MV/CV management:

- Adding a CV creates a column; yellow cells indicate MVs still need to be mapped to the CV. A warning icon indicates that a submodel mapping is still required.
- Adding an MV creates a row; yellow cells indicate CVs still need to be mapped to the MV. A warning icon indicates that a submodel mapping is still required.
- Removing an MV from the Table Tray removes all references and mappings throughout the model.
- Importing a `.gdm` gain matrix brings required MVs/CVs into the model and automatically maps DMC controller MVs to flowsheet MV variables when names match.
- Importing a `.ccf` configuration file brings controller configuration data into the DMC model.
- GDOT automatically draws connection lines between DMC model blocks and flowsheet units or streams for referenced MV variables.

### Enhanced Simulation Equations

Enhanced simulation equations are available for GDOT Builder **Shortcut Distillation columns with Heat Balance** starting in V14 CP2 (V14.0.2). They improve simulation by automatically adding variables used on the Simulation Squaring tab. The default specification should run successfully without additional changes.

To use these shortcut-column improvements, turn **User Intercept** off on the Shortcut Distillation Column property panel.

Default specified variables, where `X` is the shortcut column name:

- Feed compositions except the heaviest component.
- Top composition for the heaviest overlapped component.
- Bottom composition for the lightest overlapped component.
- `X_TOPPRESSURE`
- `X_BOTTOMPRESSURE`
- `X_REFLUXFLOW`
- `X_REFLUXTEMPERATURE`
- `X_FEEDTEMPERATURE`
- Feed flow rate

### DMC Connections and Configuration Imports

DMC MV/CV variables can be connected to flowsheet variables through variable connections. GDOT detects connection direction between DMC model blocks and flowsheet unit blocks, then uses that direction during simulation squaring and simulation of connected blocks.

DMC connection workflow:

1. Configure the flowsheet and import a `.gdm` file to create the DMC3 Matrix view. DMC model blocks have an outlet-side variable connection port only; no direct variable connection can be drawn into the DMC block.
2. Return to the flowsheet and create variable connections to target unit blocks.
3. Use the variable connection property panel to map DMC MV/CV variables to flowsheet simulation variables.

Supported DMC-to-flowsheet mapping patterns:

| Pattern | Configuration approach |
|---|---|
| One DMC MV to one flowsheet simulation variable | Create a variable connection from the DMC model to the flowsheet block and add the corresponding row to **Variable Mappings**. |
| Multiple DMC MVs to one flowsheet simulation variable | Connect DMC to a Custom Block, then Custom Block to the flowsheet unit. Define the relationship as a custom block equation and map variables on the connections. |
| One DMC CV to one flowsheet simulation variable | Create a variable connection from DMC model to flowsheet block and add the corresponding row to **Constraint Mappings**. |
| One DMC CV to multiple flowsheet simulation variables | Use the **CV** checkbox functionality in a Custom Block equation. |

Users can also make an implicit connection by mapping a measurement variable directly on the unit's **Map Measurement** table. If a DMC block contains the mapped MV and no connection already exists, the system draws a variable connection from the DMC block to the flowsheet unit and shows it in the connection's Variable Mappings table.

DMC controller configuration can be imported from `.ccf` files exported by Aspen DMC3 Builder or Aspen DMCplus Builder. The import can bring in engineering units, descriptions, current values, limit values, and I/O configuration for DMC MVs and CVs. The MVs/CVs must already exist in AU GDOT and match names in the `.ccf`; missing variables are warned and are not created by the import.

`.ccf` import options:

| Option | Default | Behavior |
|---|---|---|
| Controller Type | DMC3 | Sets MVC Type based on selected controller type. |
| Engineering Units and Descriptions | Yes | Imports UOM and descriptions into DMC Matrix, MV/CV configurations, gain matrix, and convolution matrices. |
| Simulation Values | Yes | Imports current/high/low DMC MV/CV values into simulation high/low limits; exported to the `.cpt` file. |
| Validity Limits | No | Populates low/high valid limits in MV/CV configuration. |
| CV Equal Concern Errors | No | Enabled only when Tuning Option is **Eng Units**; sets optimizer CV ECE to `1e30` for DMC CV limits with rank `9999`. Does not apply to DR CVs. |
| DMC3 Transformations | Yes for DMC3 | Disabled for DMCPlus. |
| Gain Multiplier | Yes | Imports `GMULT` for MV/CV pairs and shows it on the Gain Matrix property panel. |
| I/O Configuration | No | Imports optimizer MV/CV status, current value, limits, and MVC status. DR import excludes Status, Low Limit, High Limit, and MVC Type. |

I/O import communication types:

- **DMC3 Gateway** populates server and I/O tag information based on standard DMC3 Gateway tag syntax; users select RTE or ACOBase communication.
- **OPC - Default** reads I/O tag information from the `.ccf`. Providing an OPC server name overwrites OPC Node for all DMC MVs/CVs; leaving Node Name blank preserves existing node names.

If a field has an error, a warning appears for that field and import continues for the rest of the MV/CVs. Imported `.ccf` information overwrites existing data for matching DMC MVs/CVs.

## Hybrid Models and MultiDraw Fractionators

### Hybrid Models

GDOT Hybrid Models automate creation of nonlinear predictive submodels or process units without requiring users to manually structure and write nonlinear equations. The feature helps model feed/yield material balances and operating parameters, and supports recalibration as plant behavior changes.

Hybrid Models are not available for component models with molar basis.

Hybrid Model workflow:

1. Add a Hybrid Model unit to the flowsheet, or copy an existing configured unit as a Hybrid Model.
2. Configure the Hybrid Model property panel and connect streams to ports. Component models map components; Non-Component models map properties.
3. Open **Go to Configuration**.
4. Complete the four-step workflow: Feed, Products, Operating Parameters, and Specification.
5. Export the Specification to a `.JSON` file. The file contains feed/product qualities, operating parameters, variable specifications, engineering ranges, engineering units, and measurements.
6. Use Aspen Multi-Case and Aspen AI Model Builder to create and validate the reduced order model (ROM), then export an XLP file.
7. Import the `.zip` containing the XLP and original JSON back into the GDOT Hybrid Model property panel.
8. Verify mapping/configuration and run the model with the updated Hybrid submodel.

Neural Network models are supported starting with V12.1 CP3. Unlike linear-regression approaches that need statistical transformations to represent nonlinearities, neural networks can capture nonlinearities through layers. AI Model Builder controls hyperparameters such as layers, neurons per layer, activation functions, and dropout rate. AI Model Builder can also add domain constraints such as summation and inequality constraints. Avoid imposing component balance on equipment where reactions occur, because components do not balance in such cases.

Hybrid Model configuration requirements:

| Step | Purpose and rules |
|---|---|
| Feed | Maps feeds to stream components for component models or properties for non-component models. At least one feed is required. |
| Products | Maps products to components/properties. At least one product stream is required. |
| Operating Parameters | Adds operating parameters to include in the hybrid model. Parameters can be added, edited, removed, imported from `.xlsx`, or exported to `Operating Parameters.xlsx`. |
| Specification | Lists all variables and defines whether each is dependent or independent. Feed/products must be valid before this step is valid. At least one variable must be independent, and not all flow variables can be user specified. Min/Max are required for user-specified variables; identical Min and Max make a value constant. |

The workflow status shows whether all required structure is complete, incomplete, or potentially mismatched after manual specification changes or configuration changes.

### Hybrid FCC Units

Hybrid FCC units model FCC units using preconfigured full-combustion or partial-combustion regenerator templates. They use selectivity-based AI Model Builder models where AI outputs are component selectivity and conversion. After importing the AI model, GDOT appends equations that calculate product composition.

Hybrid FCC behavior:

- Designed for FCC Combustion Regenerator templates.
- Supports calculation of stream properties from variable component properties.
- Property Mapping is available in both mass-based and molar-based component models.
- Requires a product stream and automatically exposes variable ports when added to the flowsheet.
- For completeness, the product port needs a connected composition stream, and FEED/PRODUCT variable ports need variable connections.
- Importing the template or XLP locks the unit configuration; users must unlock it before editing workflow data.

Example Hybrid FCC inputs include feed flow, feed sulfur/nitrogen/carbon residue/SG/distillation properties, carbon bias, feed preheat temperature, reactor plenum temperature, reactor outlet pressure, flue gas O2 or CO, enriched air O2 composition, equilibrium MAT, kinetic coke activity, ZSM5, and cooler duty per feed flow.

Example outputs include conversion, wet air flow, enrich O2 flow, air/catalyst ratio, catalyst/oil ratio, CO2/feed ratio, coke yield, catalyst cooler duty, cyclone temperature, regenerator dense bed temperature, product flow, micro-cut selectivities, and micro-cut properties.

Hybrid FCC configuration uses five steps:

| Step | Purpose |
|---|---|
| Feed Parameters | Maps properties to bulk feed streams. Default properties are visible and cannot be deleted or unchecked. |
| Products | Maps product streams to components/properties. Reactant selections affect simulation equations and gains. |
| Microcut Properties | Maps product components to properties; default properties include SpecificGravity, Sulfur, octane, ARO, NAP, OLE, VIS, and CLD. Mapping a component/property pair creates an operating parameter. |
| Operating Parameters | Lists operating parameters to include; parameters can be added, edited, removed, imported, or exported. |
| Specification | Sets variable status, values, UOM, Min, and Max. Products must be valid before this step is valid, and at least one variable must be user specified. |

Exporting the FCC specification creates a JSON file for AI Model Builder and Multi-Case. The returned ZIP contains the XLP and original JSON for structure verification before reimport.

### MultiDraw Fractionators

MultiDraw Fractionators for component models improve optimization of distillation columns, especially columns in series such as pre-flash, atmospheric, and vacuum columns. They can explicitly represent shortcut distillation for conversion-unit fractionators as an alternative to Hybrid Models.

MultiDraw workflow:

1. Add the MultiDraw Fractionator from the Add Flowsheet Components panel. One feed and two product ports are created by default.
2. Add streams to the defined ports.
3. Open the property panel, set name/description/comments, and add additional product ports if needed. Feed ports are automatically added based on products.
4. Click **Go to Configuration**.
5. Add components and map feed/product streams to components.
6. Confirm configuration completeness.

The MultiDraw configuration page has a single **Compositions** step. It shows feed/product port and stream definitions, then a Components table where components are ordered by boiling point. Component mapping rules:

- Components are mapped by clicking stream/component cells.
- Product streams should not contain components absent from feed streams, and feed streams should not contain components absent from products.
- All product streams should contain at least two components.
- Warning/info icons indicate missing or invalid configuration.

## Custom Blocks and Equation Editor

Custom Blocks incorporate free-form nonlinear equations into GDOT models. The system solves all equations and generates residuals and gains for every variable in the custom block.

Custom Block usage patterns:

| Pattern | Description |
|---|---|
| Standalone block | Defines custom equations for variables that exist on the flowsheet, with or without variable connections. |
| Physical unit | Defines feed and product ports, connects material streams, and uses equations as a unit-like block. |

Equations are written symbolically so the block can remain reusable within a flowsheet or across models.

Equation creation behavior:

1. Add an equation row. The default name is system generated.
2. Rename the equation with letters, numbers, periods, and underscores only; add an optional description.
3. Enter a valid expression containing equality. The editor supports operations and functions shortcuts.
4. Each symbolic name appears in the Symbols table.
5. Each symbol gets a resolved variable, usually `<block name>.<variable name>`, unless mapped to an existing model variable or stream-port variable.
6. Complete UOM, Min/Max, Initial Value, and Description as needed.

Variable table behavior:

| Column | Meaning |
|---|---|
| Symbols | Local symbolic names shared across all equations in the block; they are not GDOT variables. |
| Variable name | Optional mapping to a custom variable name, an existing GDOT MV, or a material stream variable connected through a custom block port. |
| Resolved Variables | Actual GDOT variables used by the model. |
| UOM / Min / Max / Initial Value / Description | Optional engineering-unit and variable metadata. |

Parameters define numeric constants used only on the Equation Editor screen. Users drag a symbol into the Parameters area and enter a numeric value. Removing a constant is done by dragging it out of the Parameters area.

Selecting **CV** on a custom equation creates a CV without the block prefix. For example, equation `TX_41` in block `Custom` creates CV `TX_41` instead of `Custom.TX_41`.

General equation notes:

- Users can add as many equations as needed.
- Equations can be disabled without deleting their definitions.
- Equations can be removed from the row delete action.

### Import and Export Custom Blocks

Custom Block configuration can be reused in other models. Exported configuration includes equations, ports, user-specified values, variable names, units, max values, initial values, descriptions, and parameter specifications.

Export workflow:

1. Configure the Custom Block feeds/products and ports.
2. Add or edit equations in the Equation Editor.
3. Map measurement variables as needed.
4. Right-click the Custom Block on the flowsheet and choose **Export Configuration**. A `<custom block name> Configuration.txt` file is downloaded.

Import workflow:

1. Add a new Custom Block to the target model flowsheet.
2. Right-click and choose **Import Configuration**.
3. Select the exported custom block configuration file.
4. Import overwrites any existing equations on the current custom block with equations from the imported block.

## Furnace Units

GDOT Furnace units model olefins furnace behavior with SRTO7/SRTO8. The workflow assumes a valid case file generated from SRTO7 or SRTO8. The case file contains furnace geometry and previous SPYRO simulation process conditions that are used as starting points for later SRTO simulation.

Furnace workflow:

1. Add a Furnace unit to the flowsheet from the Flowsheet Components panel.
2. Configure component or bulk feed/product streams on the flowsheet and Furnace property panel.
3. Map furnace measurements; required variables for bulk streams are automatically added by bulk stream type, and optional variables can be added to improve feed-characterization accuracy.
4. Open **Go to Configuration** from the Furnace property panel.
5. Attach case files, configure groups and convergence options, tune parameters, select furnace specifics and output variables.
6. Compile the model and continue with the normal GDOT simulation workflow.

Feed modeling rules:

| Feed type | Behavior |
|---|---|
| Component feed | One composition feed stream can connect directly to the Furnace on the flowsheet. Component Mapping opens the Components table to add, specify, and map stream components. |
| Bulk feed | Added from the Furnace property panel, not visually connected on the flowsheet. Bulk feeds are characterized by ASTM D-86 and PINA information, and multiple bulk streams can be configured. |

Furnace block configuration can be opened from the Furnace property panel, from the Furnace Models Summary page, or from left navigation under **Furnace Models > <furnace name>**.

### Furnace Groups and Case Files

The Furnace configuration page is split into **Groups** and **Furnace specifics**. Groups let a furnace call SRTO7/SRTO8 with an appropriate SPYRO case file for a feed type such as Ethane, LPG, Naphtha, or Gas Oil. Using different case files for each furnace is recommended even when feed type is the same, because operating parameters may differ, especially around decoking and restart.

Group rules:

- Every furnace has a **Default** group that cannot be deleted.
- Additional groups can be added and renamed.
- Default group feeds are a flexible combination of feeds and cannot be changed.
- Available feeds are component or bulk streams defined on the Furnace block.
- A `.SPY7` case file must be attached for feeds to be considered and simulation starting points to be included. Furnace configuration is incomplete until a case file is attached.
- One case file can be attached per group.
- A group cannot have the exact same feed set as another group.

Severity convergence options define which input variable SRTO7/SRTO8 uses to converge furnace yield models:

| Option | Simulation behavior |
|---|---|
| Coil Outlet Temperature | Propylene/Ethylene and Methane/Propylene ratio variables are calculated during simulation. |
| Propylene/Ethylene ratio | Ratio variables are user specified during simulation. |
| Methane/Propylene ratio | Ratio variables are user specified during simulation. |
| Conversion of Key Component | Ratio variables are calculated during simulation. |

If **Conversion of Key Component** is used, users must select a key feed-stream component or compilation fails. This option is unavailable for bulk-stream scenarios. After compilation, GDOT creates a conversion variable for the key component and makes it available for measurement mapping.

Default furnace tuning parameters include Flux Profile, Friction Factor Multiplier, Coking Multiplier, Heat Transfer Coefficient, Fouling Coefficient, Coke Thermal Conductivity Multiplier, and Convergence Tolerance. The numeric ranges come from SPYRO documentation and are not feasibility guarantees; values outside those ranges may be physically impossible even if not blocked by the system.

### Furnace Specifics and Variable Ranges

Furnace specifics include number of coils, number of tubes per coil, and pressure convergence. Pressure convergence options are Coil Inlet Pressure, Coil Outlet Pressure, and Effluent Pressure.

Users can choose which SRTO7/SRTO8 output variables to include in the GDOT model. Leaving optional outputs out can reduce the number of variables in the model and exported workbook. Optional outputs include radiant wall temperature, maximum tube metal temperature per tube, coking rate per tube, pressure drop across coil, venturi coil inlet pressure, effluent temperature, transfer-line pressure drop, coil inlet pressure, and effluent pressure. Coil inlet pressure and effluent pressure are required when selected as pressure convergence variables.

Furnace simulation requires SYPRO Real Time Optimization installed on the Aspen Unified Server.

Common Furnace variable range examples from SRTO documentation:

| Variable pattern | Meaning | Range note |
|---|---|---|
| `<FurnaceName>.COT` | Coil outlet temperature | `>0.0` to `3227.0` |
| `<FurnaceName>.PERATIO` | Propylene/Ethylene product ratio | `>0.0` to `5.0` |
| `<FurnaceName>.MPRATIO` | Methane/Propylene product ratio | `>0.0` to `5.0` |
| `<FurnaceName>.KEYCONV` | Key component conversion | `>0` to `100.0` |
| `<FurnaceName>.CIT` | Coil inlet temperature | `200.0` to `850.0` |
| `<FurnaceName>.DS` | Dilution stream ratio | `>0.0` to `3.0` |
| `<FurnaceName>.CIP` | Coil inlet pressure | `1.0` to `1.0E4` |
| `<FurnaceName>.Trw` | Radiant wall temperature | `800.0` to `1500.0` |
| `<FurnaceName>.<BulkStreamName>.T10/T30/T50/T70/T90` | ASTM D-86 distillation points | `0.0` to `550.0` |
| `<FurnaceName>.<BulkStreamName>.Aromatics/iPara/Naphthenics/nPara` | PINA composition properties | `0.0` to `100.0` |

## Simulation and Dynamics

### Simulation Summary

The **Simulation Summary** page summarizes simulation status for every unit operation on the GDOT flowsheet. Users can select units for **Auto Run simulation**, reorder units to define sequenced simulation order, and open a unit's simulation configuration details.

Sequenced simulation behavior:

- Users can run all or selected unit simulations.
- The selected order controls the solve sequence; units can be reordered by dragging.
- Successful upstream unit solutions populate downstream simulated block variables with upstream values.
- Sequence solving stops when a block is not square or cannot be solved.
- A green toast reports auto-simulation progress as percent complete by number of units simulated.

Users can access the page from the navigation panel under **Simulation** or from the application bar under **Run Simulation > View Simulation Status**. Clicking a simulation unit name opens the unit's Simulation Configuration page.

### Unit Simulation Configuration

Simulation Configuration initializes startup values for a specific unit and identifies structural model problems by attempting to solve the unit's equations from user-defined and system-defined variables. Units should generally be simulated from left to right so downstream units can use upstream results.

Preconditions and persistence rules:

- The unit should already be defined through its flowsheet property panel and connected to applicable units or streams.
- The simulation name matches the unit name and changes when the unit is renamed.
- DMC MVs/CVs do not directly appear on the simulation squaring page; variable connections are used internally to determine variable status during squaring.
- A basic simulation configuration cannot be deleted unless the unit itself is deleted.
- Compile after model changes so variables and values are available.

Simulation controls:

| Control | Behavior |
|---|---|
| Reset Specification | Restores user-specified and calculated variable states to their original state and re-squares the configuration. Imported Site Catalog values return to imported states. |
| Reset with upstream values | Copies current upstream values into the unit's Value column when upstream results have changed. |
| Reinitialize | Restores user-specified variables to values that provide a solved state; useful after edits make the model stop converging. |
| Max Num of Iterations | Default is `50`; increasing it can help when the solution warning says maximum iterations were exceeded. |
| Auto-simulate | Runs simulation when values change; settings changes such as Max Num of Iterations still require manual simulation. |
| Auto-check for singularity | Checks structural singularity after variable/equation status changes, changes calculable variables to calculated, and simulates when degrees of freedom equals zero. Disabling can speed large-model specification. |
| Simulate | Runs manually after user-specified values are changed. Disabled unless the submodel is square. |

Simulation Configuration has **Variables** and **Squaring** tabs.

The Variables tab shows unit variables and their values, status, bounds, current solution, previous solution, and delta. Users enter fixed variable values, provide initial guesses for calculated variables, set optional Min/Max values for analysis/reporting, import/export Excel data, and choose columns for summary display. Min/Max values are not hard solver constraints, but violations are highlighted and they synchronize with associated MV simulation low/high limits after simulation.

The Squaring tab shows variables as columns and equations/constraints as rows. Users include or remove equations, choose user-specified variables, and resolve undetermined variables until the matrix is square. Status colors distinguish user-specified, undetermined, system-calculated, and inactive variables. Simulation results then populate Current Solution, Previous Solution, and Delta on the Variables tab.

For T05/T95 calculation on MultiDraw side-cut products and Mixer/Hydrotreater products, avoid assigning identical values to all EVAP variables for a cut; AU needs meaningful differing distillation values to calculate T05/T95.

### Dynamics

The **Dynamics** page displays accumulated dynamics information from flowsheet blocks. It can import dynamics exported from DMC3 Builder, such as regressed dynamic coefficients represented by lower-order parametric models. MV/CV pair data shown in the Gain Matrix appears in detail on the Dynamics table.

Dynamics rules:

- Users can update dynamic coefficients on this screen but cannot add new rows.
- The system determines what appears in the Manipulated Variables column.
- If imported DMC3 Builder DeadTime is constant, the AU DeadTime value is directly editable.
- If DeadTime is a function of volume, the formula is `Volume / flowrate`, where volume comes from the `Volume` cell and flowrate is the manipulated variable named in the `Flowrate` cell.
- Exported Dynamics tables do not include DeadTime formulas, and formulas cannot be imported.

Export options are **Export Full Table** and **Export Filtered Table**; both create `Dynamics.xlsx` in the browser download folder.

## Model Integrity

### Model Integrity Summary

The **Model Integrity Summary** page gives one compiled view of key GDOT model information for both Component and Non-Component models. Users should compile first to ensure the summary reflects current model data. Opening the summary from the application bar with **Compile > View Summary** compiles the model and then opens the page.

Summary sections:

| Section | Content |
|---|---|
| Variables | Counts total Manipulated Variables, Measurement MVs, Controlled Variables, and Measurement CVs. Measurement variables include DMC and user-defined variables. |
| Templates | Lists submodel types and total submodels on the flowsheet, with associated units. |
| Mapping | Lists all model variables and measurement variables. In Component models, the Unit(s) header appears as Units/Streams. |
| Comments | Stores formatted comments, limited to 150 characters. Users must save edits. |

### Model Integrity Health

The **Model Integrity Health** page displays issues detected after compiling a model, plus errors from Calculation Script and Formula pages. Issues are classified as **Critical Issues** or **Warnings**. A red dot appears on the application bar health icon when critical issues exist.

Users can open the Health page from the navigation panel under **Health** or from the application bar with **View Health Status**. The page shows an issue summary and, where applicable, links each issue to the page where it can be corrected.

Export is still allowed even when Critical Issues or Warnings are present.

## Model Data Foundations

### Model Parameters and Engineering Units

Model Parameters are global model settings. The current Model Parameters page includes the **Engineering Units** tab, where users select the model **Unit Set**. The default unit set is Metric.

GDOT Engineering Units list the exact units required by AU GDOT Builder models and the legacy GDOT Excel templates. Users should configure the application to use those units exactly. Important unit caveats:

- Middle Distillate envelope PTOP pressure is gauge pressure, while H2PP pressure is absolute pressure.
- For component-based models, all pressures are gauge pressure.
- Component model Naphtha envelope includes molar, mass, and volume composition units, flow-rate units, compressor constants, and reboiler duty units.
- Furnace variables use SRTO-oriented units such as coke thickness in `mm`, coking rate in `mm/(30 days)`, temperature in C/F, pressure in kg/cm2/psi, and absorption duty in energy per hour per coil.

### Properties

The **Property Summary** page displays all model properties, including properties linked or imported from a Site Catalog. Some properties are defaults and cannot be changed or deleted.

Component model notes:

- Properties defined on Property Summary can be added to the Components table.
- RVP properties and properties of type **Distillation Vol @ Temp** cannot be added to the Components table.

Non-Component model notes:

- Cutpoint boundary properties are automatically created in `_EVAPn` format with type **Distillation Volume (%) @ Temp - TBP** and cannot be deleted from Property Summary.
- Properties added through Cutpoint Boundaries preserve Belongs To / Includes Material Services relationships.
- Flash, Freeze, and Cloud Point index properties are automatically created for new Non-Component models and added to Kero or Diesel tracked properties as applicable.
- Default properties such as SpecificGravity, Sulfur, T95, and T05 are automatically created and cannot be deleted or modified.
- New models create default material services with tracked properties such as AGO, Naphtha, Diesel, and Kero.

Property Summary fields and behavior:

| Field | Meaning |
|---|---|
| Name | Property name; imported Site Catalog properties may be incomplete if the name is invalid, such as containing blanks. |
| Status | Complete or incomplete definition. Indexed properties can be incomplete when the GDOT method is incomplete. |
| Description | Optional description. |
| Property Type (UOM) | Property type and unit. |
| Blend Basis | Non-Component sulfur/nitrogen properties use Weight and most others use Volumetric. Component system Sulfur uses Weight, ARO/SPG use Volumetric, and RON/MON use Molar. |
| Last Imported | Date when imported from Site Catalog. |

Property operations include add, edit, delete, export to `<modelname>_Property.JSON`, import from `.json`, and for Non-Component models attached to a Site Catalog, import from catalog. Imports skip conflicting names or definitions and report warnings.

T05/T95 calculation requires at least two **Distillation Vol @ Temp** properties mapped to the stream's material service at different temperatures, and at least two calculated product-stream variables with different values.

### Components

The **Components** page is available for component-based models. It manages pure and pseudo chemical components and maps GDOT components to external components.

The page has two tabs:

| Tab | Purpose |
|---|---|
| Model Components | Lists all model components, system property columns, and user-defined tracked properties. Users can add/edit/delete components, add user-defined indexed properties, export `Components.xlsx`, and import component information. |
| Component Mapping | Available only for mass-based models. Maps external components to GDOT components, especially for Furnace units with bulk stream components. |

Model Components default columns include Description, Molecular Weight, VPA, VPB, VPC, Specific Gravity, HVAP at NBP, RON, MON, ARO, and SUL. User-defined properties can be added only after they are defined in Property Summary. RVP and Distillation Vol @ Temp properties cannot be added to the Component table.

Component Mapping rules:

- For a Furnace Unit with bulk stream components, all external components must be mapped to a GDOT component.
- One external component can map to one or more GDOT components.
- An external component cannot map to more than one grouped component.
- **Single** mapping allows one external component per GDOT component.
- **Group** mapping allows multiple external components for one GDOT component; imports list grouped external components comma-separated.

### Material Services

The **Material Services** page is available for Non-Component models. Material services define what properties are carried in streams. Services can be one material or grouped materials, can come from the Site Catalog, and can also be model-local.

New Non-Component models are populated with a default set of material services that cannot be deleted. Flash, Freeze, and Cloud Point index properties are automatically created and added as tracked properties for Kero and Diesel where applicable.

Material service hierarchy supports inheritance. A material service property set is the union of inherited properties and locally specified tracked properties.

Material service status can be incomplete when:

- The material service name contains blanks.
- Any tracked property is incomplete or missing.
- An index property exists but its referenced property is not added as a tracked property.

Material Service Details include name, description, stream color, tracked properties, Belongs To Material Services, and Included Material Services. Adding a property to a service that belongs to another service propagates upward. Deleting a property from a service that includes child services removes it from included services downward.

Material services can be imported from Site Catalog or `.JSON`, exported to `.JSON`, edited in bulk for similar properties, and recompiled to update model and export data.

### Energy Services

The **Energy Services** page is available only for Non-Component models. It displays all energy services in the model. `H2O` is the default service and cannot be removed.

Energy stream rules:

- Energy streams are added from the flowsheet toolbar.
- Energy streams can connect only to energy ports on units.
- Energy service changes require recompilation to update model and export data.
- Energy services cannot be deleted while in use or associated with a unit.

Energy service fields:

| Field | Meaning |
|---|---|
| Name | Energy service name. Names imported from Site Catalog cannot be edited. |
| Status | Complete when energy service details are defined; incomplete when required Type is missing or the name contains blanks. |
| Type | Pure Component or Wide boiling mixture. |
| Color indicator | Controls the color of associated energy streams; default is red. |

Pure Component energy services can define Normal Boiling Point and Heat Vaporization. When the model unit set changes, the displayed UOM changes but values are not converted automatically, so users must enter converted values manually.

Energy services can be imported/exported as `.JSON`. Exported files contain service details and can be edited before reimport.

## Model Analysis

### Gain Matrix

The **Gain Matrix** page displays generated derivative gains or coefficients of the GDOT process model in matrix form. A gain is the derivative of an equation with respect to a variable, shown at the intersection of a CV row and an MV column. Gain matrices are used during Convolution and as an analysis tool.

Preconditions:

- The GDOT flowsheet has the desired operational units.
- The model has been compiled; otherwise new-block gains can remain zero.
- Individual unit blocks have been simulated and squared to initialize variables.

Gain matrix behavior:

| Area | Meaning |
|---|---|
| Matrix rows | CVs/equations in the model. |
| Matrix columns | MVs/variables in the model. |
| Non-zero coefficients | System-calculated gains; not editable. |
| Number of Constraints | Total rows. |
| Number of Variables | Total columns. |

Cell colors indicate Model Type: Prediction and Optimization, Prediction Only, Prediction Only with Dynamics, or Prediction and Optimization with Dynamics. Users can click a nonblank cell to open the MV/CV pair property panel. Internal MV/CV simulation UOMs are not editable.

Matrix actions include switching between Scaled Units and Engineering Units, showing/hiding MVs with no gains, filtering CV names, hiding descriptions or UOMs, exporting `UnifiedGainMatrix.xlsx`, adding comments on non-DMC matrix cells, and importing DMC `.gdm`/`.gda` model data or `.ccf` configuration data for DMC units. DMC model reimport can add/update MV/CVs and gains, preserve existing measurement mappings, remove unused related MV/CVs, and should be followed by compile.

MV/CV pair properties:

| Property | Behavior |
|---|---|
| Gain Multiplier | View-only `GMULT` imported from DMC3 `.ccf`; after compile, resulting gain equals gain multiplier times MV/CV gain. |
| Model Type | Determines whether the value is used for prediction, optimization, or prediction only. |
| Laplace Transfer Function | Supports up to second-order dynamics between MV and CV. |
| Deadtime Type | Constant or Function of Volume. Function of Volume uses a Volume/Flow denominator variable selected from existing flow variables. |
| Dynamics template | Lets users enter dynamics parameters; entering zero resets values to initial zero state. |

### Auto-Scaling and Tuning

Auto-Scaling and Tuning calculates, reviews, and edits MV/CV scaling and tuning parameters for both Optimizer and Data Reconciliation. Scaling factors use the Curtis-Reid scaling algorithm and are included in exported GDOT files, including the `.scaling` file used by GDOT Online. Proper scaling improves convergence and performance, especially during convolution when gains differ by orders of magnitude.

Precondition: compile recently so MVs/CVs exist and have initial Types.

Tuning Option controls whether tuning values are entered in **Scaled Units** or **Engineering Units** for QP Weights, Move Suppression, Low Limit ECE, and High Limit ECE. The generated `.cpt` file always writes QP Weight, Move Suppression, and ECE values in Engineering Units regardless of this selection.

Scaling Factors tab:

| Setting | Behavior |
|---|---|
| Gain CutOff pass 1 / pass 2 | Defaults `1.00E-06` and `1.00E-02`; gains below threshold are excluded from scaling calculation. |
| Regularization pass 1 / pass 2 | Defaults `.5` and `1E-03`; prevents extremely large or small scaling factors. |
| Calculate Scaling Factors | Generates calculated scaling factors for all MV/CVs. |
| Apply Scaling Factor | Copies selected calculated values into Scaling Factor after applying from the Table Tray. |

Scaling factors default to `1`, are editable, and values outside practical bounds such as below `1E-12` or above `1E12` are highlighted. Applying scaling factors updates affected variables and causes those values to be used during convolution.

Optimizer Tuning and Data Reconciliation Tuning tabs mirror many MV/CV configuration fields. System defaults are shown in light italic blue; user-edited values are shown in darker blue. Resetting to default is available from the cell context menu. Data Reconciliation tuning can also expose **Move Suppression Multiplier**, included in the CPT checkpoint file, defaulting to `1` with range `1e-5` to `1e5`.

Key tuning parameters:

| Parameter | Meaning |
|---|---|
| Status | Whether the optimizer or DR considers the variable's constraint/target. |
| LP Cost | Cost factor in the objective function. |
| QP Weight | Weight on deviation from target. |
| Move Suppression | Penalty for MV/CV movement away from current position; `0` means no suppression. |
| Low/High Limit ECE | Equal Concern Error; inverse weighting for CV limit violation. `0` means the limit cannot be violated. |
| Prediction Bias Filter Time | First-order exponential filter time applied to CV prediction bias. |

### Convolution

Convolution creates a smaller matrix from the overall Gain Matrix by eliminating calculated, unmeasured intermediate variables so dynamic models do not need to be specified for them. Users review MV/CV Type and Status, calculate MV types, run diagnostics, and inspect matrix results.

Convolution prerequisites:

- Build and connect the flowsheet.
- Compile recently.
- Simulate unit-operation blocks from left to right to get gain coefficients.
- Review gains and assign dynamics.
- Calculate and apply scaling factors, because convolution is calculated from the scaled matrix.

Convolution rearranges the model into ABCD matrices:

| Matrix | Relationship |
|---|---|
| A | Balance rows vs. intermediate variables. |
| B | Balance rows vs. manipulated variables. |
| C | CV rows vs. intermediate variables. |
| D | CV rows vs. manipulated variables. |

If the A-Matrix has full row rank and column rank, the system creates the convoluted matrix and displays the A-Matrix condition number. Lower condition numbers are better; high condition numbers indicate collinearity and possible numerical instability.

Recommended convolution workflow:

1. Complete compilation, simulation, dynamics, and scaling prerequisites.
2. On the Specifications tab, click **Calculate MV Types**, review warnings, and apply calculated types where appropriate.
3. Run diagnostics.
4. Review A-Matrix 1 and A-Matrix 2 to ensure each A-Matrix is square and full rank.
5. Review Convolution Matrix 2 before deploying online, because it is the matrix used by the optimization engine.

Convolution scenarios:

| Scenario | Meaning |
|---|---|
| A-Matrix 1 / Convolution Matrix 1 | A/C columns contain all IVs, measured and unmeasured; B/D columns contain only MVs. |
| A-Matrix 2 / Convolution Matrix 2 | A/C columns contain only unmeasured IVs; measured IVs are grouped with MVs in B/D. |

Measured IVs in Diagnostics 2 require a valid paired equation. For each Continuous IV changed to Measured IV, users select a Balance Row CV and set it to **Balance Row, Dmatrix**. A square A-Matrix 2 does not guarantee full rank; diagnostics highlights rank deficiency so the user can adjust measured-IV/equation pairs.

After successful convolution diagnostics, Continuous IV variables should not have MV limits defined, because convolution eliminates C-matrix IV gains by substituting zeros. Limits on IVs can introduce inconsistency.

Specification tab types:

| Variable | Types |
|---|---|
| MV | None, MV, Integer MV, Binary MV, Continuous IV, Measured IV. |
| CV | None, CV, Balance Row, Balance Row Dmatrix. |

Status **OFF** removes an MV or CV from diagnostics. Changing Status here updates the corresponding Optimizer MV/CV table status.

Troubleshooting non-square A-Matrix problems usually reduces to checking shared equations and calculated variables between units. The number of shared calculated variables must match the number of shared equations. Over-specification can also occur when both source and destination variables in a CXN/variable connection are calculated, or when custom block CV equations make it ambiguous which model variables should be treated as specified.

### Matrix Keyboard Shortcuts

In Gain Matrix and Convolution matrix tables, `Ctrl` plus an arrow key jumps in the requested direction.

| Shortcut | Behavior |
|---|---|
| `Ctrl+Right` | Move to the next populated cell to the right. |
| `Ctrl+Left` | Move to the next populated cell to the left. |
| `Ctrl+Up` | Move to the next populated cell above. |
| `Ctrl+Down` | Move to the next populated cell below. |

Blank cells are skipped. If only blank cells remain in the direction of travel, the last blank cell in that direction is selected.

## Variable Configuration

### MV and CV Configuration Overview

Variable Configuration pages define the online and optimization/data-reconciliation parameters for manipulated variables and controlled variables. Compile first to ensure all model-defined variables are visible. Custom user MV/CV parameters are defined under **Calculations > User Properties**.

Common table behavior:

- Users can edit cell values directly.
- Column selectors and filters control visible parameters.
- Tags & Values, Tags, and Values filters determine whether tag/value subcolumns are shown.
- Import uses `.xlsx` templates; exporting first provides a suitable import format.
- Reset to Default restores supported system defaults or original values.
- Reordering rows is presentation-only and does not change calculations.

### Manipulated Variables

MV Configuration pages configure manipulated variables for Optimizer and Data Reconciliation. All manipulated variables belonging to unit operations are visible, and operational measurement variables appear when mapped to model variables. MVs can be added through individual unit/stream mapping tables or created by model elements, then further configured on the MV pages.

Common MV fields:

| Field | Meaning |
|---|---|
| Name / Description / UOM / Comments | Identity and engineering-unit metadata. UOM is editable only for DMC MVs; internal MV simulation UOMs are not editable. |
| OPC Server / OPC Node | OPC endpoint information. |
| Status | Whether the optimizer/DR can consider or move the variable. In DR, Unit Status Mapping can populate the Status tag and make it read-only from MV DR. |
| Current Value | Current value, normally read through OPC from MVC, DCS, GDOT_DR, or historian. System value is generated only for internal model MVs, not measurement MVs. |
| Low/High Limit | Optimization bounds; `-1E+30`/`+1E+30` indicate no bound. MV limits cannot be violated. |
| LP Cost / QP Weight / QP Target | Objective-function parameters. |
| Critical | If critical variable becomes OFF, IGNORE, or BAD, GDOT turns itself off. |
| MVC Type / MVC Status / Status Override | Multi-variable controller metadata; MVC types come from Online Configuration or DMC `.ccf` imports. |
| Ignore When Off | Whether MV current values are ignored in CV predictions when the MV is off. |
| Move Suppression / Max Move | Penalty and limit for variable movement. |
| Continue when Bad | Whether a bad OPC value turns the MV off temporarily or allows continued movement based on last good value and assumed MV moves. |
| Low/High Valid Limit / Force BAD | Input validation and forced bad-value behavior. |
| Type | Continuous MV, Integer MV, Binary MV, Continuous IV, or Measured IV. |
| Transformation/Config | None, piecewise linear, GDOT transformations, or DMC3 transformations imported through Excel or `.ccf`. |
| Scaling Factor | Numeric factor used in optimization and convolution; not allowed for Integer MV or Binary MV. |
| Historize Data / Trend Label / Shadow Price | Online history, AUP trend display, and shadow-price visibility settings. |

Optimizer MV includes additional online/optimizer-specific fields such as External Target, downstream-controller windup detection fields, limit offsets, and default current value. DR MV has similar operational fields, but Unit Status Mapping can assign Status tags for DR variables and constraints.

### Controlled Variables

CV Configuration pages configure controlled variables and constraints for Optimizer and Data Reconciliation. CVs include unit-operation controlled variables, custom block equations, variable-connection variables, and DMC CVs. Users cannot directly add or delete CVs from the table; CVs are added by model structure, DMC controller blocks, imports, or checkpoint updates.

Common CV fields:

| Field | Meaning |
|---|---|
| Name / Description / UOM / Comments | Identity and engineering-unit metadata. UOM is editable only for DMC CVs; internal CV simulation UOMs are not editable. |
| OPC Server / OPC Node | OPC endpoint information. |
| Status | Whether the variable's constraint/target is considered. In DR, Unit Status Mapping can populate Status tags. |
| Current Value | Current value, normally read from MVC, DCS, GDOT_DR, or historian. |
| Low/High Limit | Bounds for optimization/DR; normally honored but CV limits may be violated in infeasible optimization. |
| LP Cost / QP Weight / QP Target | Objective-function parameters. |
| Critical | Critical unavailable CV can turn GDOT off. |
| MVC Type / MVC Status / Status Override | Controller metadata. |
| Low/High Limit ECE | Equal Concern Error in scaled and engineering units; `0` means violation is not allowed. |
| Prediction Bias Filter Time / Max # Pred | Prediction bias filtering and maximum consecutive predicted uses when a CV reads Bad. |
| Max Move / Move Suppression | Movement restriction and movement penalty. |
| Min Change | Minimum current-value change needed to trigger prediction bias update, useful for discontinuous analyzers. |
| Low/High Valid Limit / Force BAD | Input validation and forced bad-value behavior. |
| Type | None, CV, Balance Row, or Balance Row Dmatrix. |
| Transformation/Config | None, piecewise linear, GDOT transformations, DMC3 transformations, and for CVs GDOT Differentiator. |
| Scaling Factor | Numeric factor used in optimization and convolution. |
| Historize Data / Trend Label / Shadow Price | Online history, AUP trend display, and shadow-price visibility settings. |

Optimizer CV adds write-failure fields such as **Write Failure Limit (Execs)** and **Max Write Failures (Execs)** for external target write issues. DR CV mirrors most core CV fields and can receive status mappings from Unit Status Mapping.

### Auxiliary Writes

The **Auxiliary Writes** page maps MV variables to specific OPC items. These mappings are exported in GDOT model files, including `.ugdot`, for GDOT Online.

Auxiliary Writes fields:

| Field | Meaning |
|---|---|
| OPC Server | OPC server name. |
| OPC Node | OPC node name. |
| Item | OPC item name. |
| Variable | MV variable associated with the OPC item. |
| Status | Complete/incomplete row state. Incomplete rows are excluded from compiled/exported data. |

Users can add one or more blank rows, choose MV variables from a searchable list, import table data from Excel, export `Auxiliary Writes.xlsx`, delete rows, and compile to write auxiliary data into the exported `.ugdot` file.

### Unit Status Mapping

The **Unit Status Mapping** page automatically generates gRPC connections to switch off DR variables and constraints for units that are not in service. It maps model variable status to OPC tags and exports the relevant configuration to the `_DR.gdc` file.

Purpose and heuristics:

- A unit can be switched off without manually turning off many measurements one by one.
- Built-in heuristics choose initial parameters and measurements after a unit is selected.
- Initial variables must have Status ON.
- For Non-Component models, all MVs/CVs associated with the unit and CXN equations related to product streams are included.
- If measurements are associated with variables that need a tag, the measurement variable receives the Unit Status tag too.
- DMC units are not available on this page.

Table fields:

| Field | Meaning |
|---|---|
| Units | Selected unit; expanding shows assigned variables. |
| OPC Server / OPC Node / OPC Tag | Status tag endpoint. If Server is in `GDOT_<OPT or DR><model name>.<n>` format, the OPC tag is automatically set for associated MV/CV variables. |
| Manipulated Variables | System-suggested and user-managed assigned MVs. |
| Controlled Variables | System-suggested and user-managed assigned CVs. |

Users can assign/unassign variables through the Available/Assigned Variables dialog, remove variables directly, or delete a unit row.

Default assignment behavior:

| Model type | Defaults |
|---|---|
| Mass-based Component | All variables associated with the unit and all product streams are assigned by default; mapped CVs are also assigned. Custom blocks assign all MVs and CVs, but variables referencing other variables in equations are not assigned. |
| Non-Component | Same as Component except all variables associated with the unit and all feed streams are assigned by default. |

For MV DR and CV DR variables, the Status Tag shown on those tables comes from Unit Status Mapping when the value is ON; the tag must be edited from Unit Status Mapping, not directly from MV/CV DR pages. MV OPT and CV OPT status tags are not automatically displayed from this table.

Turning units off in GDOT Online:

- If a plant unit is off, the stream `.ON` variable feeding a mixer should have current value `0` in DR or optimizer, depending on how GDOT is run.
- This can be automated by reading a tag that returns `0` when the unit is off and `1` when on, or in DR by targeting `.ON` with QP target, zero move suppression, and a large QP weight.
- For bulk units, turn off all associated MVs and CVs, including mapped measurements.
- For component-based units, turn off all associated MVs and CVs except product-stream MVs.
- Turn off upstream connection equations ending in `.CXN`; do not turn off downstream connection equations.
- If all feeds to a mixer are off, convolution can fail. Force upstream stream `.ON` variables back to `1`, then if needed force the stream feeding the next downstream mixer to `0` and repeat downstream.

## Online Configuration

Online Configuration controls how GDOT Online interacts with plant control systems such as DCS and APC systems. Optimizer settings are exported to `.gdc`; Data Reconciliation settings are exported to `_DR.gdc`. Checkpoint data from GDOT Online can be imported back into these settings with a `.cpt` file.

### DR/OPT Configuration Settings

DR and OPT have parallel Configuration and External Status tabs. The configuration settings control runtime timing, checkpointing, gain updates, solver skip behavior, write-failure handling, convolution options, scaling, and rank behavior.

Important settings:

| Setting | Default | Meaning |
|---|---:|---|
| Execution Interval (Mins/Exec) | 1 | Time between executions. |
| Execution Offset (Secs) | 30 | Seconds after minute start when execution begins; changes take effect after restart. |
| Gain Update Interval | 1 | Number of executions between gain updates. |
| Checkpoint Interval (Execs) | 60 | Number of executions between checkpoint writes. |
| Max Execs To Skip | 5 | Consecutive skipped executions before optimization turns OFF. |
| Write Failure Limit / Max Write Failures | 0 / 5 | Thresholds for turning off or exiting when external target writes fail. |
| OPC Update Freq | 1 | OPC update frequency in executions. |
| Allow Bad Status and Limits | 0 | Number of executions to use last good status/limits before skipping when status or limits are bad/crossed. |
| Convolution Gain CutOff | `.000001` | Gains below threshold are set to zero in the convoluted matrix. |
| Rank CutOff | `.000001` | Rank cutoff for matrix calculations. |
| Variable Dead Time Deadband (%) | 5 | Deadtime change needed before pipeline model recalculation. |
| Gain Update | Off | Enables or stops model gain-update requests at online execution. |
| Use MV Move Suppression | Yes | Uses movement cost in optimization. |
| Ext Link Trgt track when Off | No | OPT only; when Yes, keeps external target off value aligned with the ON write value. |
| Copy of Checkpoint | No | Saves timestamped `.cpt` copies. |
| Variable Scaling | Yes | Allows scaled variables and exports selected values in related `.cpt` files. |
| Use Ranks | Yes | Treats CV balance variables as CV rank during optimization. |
| Allow Infeasibility Balance Rank | No | Can be Yes only when Use Ranks is Yes. |

### External Status

External Status settings configure OPC communication between GDOT Online and plant systems. These settings do not directly change GDOT Builder calculations, but they define how online status and status requests are exchanged.

External status tables:

| Table | Purpose |
|---|---|
| External On/Off Request Configuration | GDOT Online reads up to 50 OPC tags for status-change requests: `0` no change, `1` request Off, `2` request On, `3` request Advisory. After processing, GDOT writes `0` back. |
| External Status Indicator Configuration | GDOT Online writes current status: `0` Off, `1` On, `2` Advisory. |
| Solution Status Indicator Configuration | Writes solution status externally for KPI calculation. |
| Watchdog Signal Write Configuration | Writes heartbeat values each execution so an external watchdog can detect a hung or terminated GDOT Online process. |
| General Properties | Exposes user-defined general properties from Calculations; incomplete until OPC Server, OPC Node, and OPC Item are defined. |

All external status tables use OPC Server, OPC Node, and OPC Item fields. Required information must be complete or the row is excluded from the exported configuration. Each table supports adding rows, editing fields, and deleting rows.

Watchdog behavior: GDOT Online writes the configured heartbeat value, commonly `1`, each execution. A watchdog application can reset that tag, commonly to `0`, and alert if GDOT Online does not write the heartbeat again within the expected wait period.

### Model Update, MVC Type, and History

Model Update Settings apply to the whole model:

| Setting | Default | Meaning |
|---|---:|---|
| Execution Interval (Mins/Exec) | 2 | Time between model update executions. |
| Execution Offset (Sec) | 5 | Seconds after minute start when model update starts. |
| Application Name | AU model name with invalid characters removed | Used for exported ZIP/files and default OPC server names for MVs/CVs. Cannot contain spaces or special characters and cannot be blank. |
| Application Type | GDOT | GDOT or GDOT_DR. |

MVC Type defines string-based status mappings used by MV/CV MVC Type fields and exported `.gdc` content. The table is pre-populated with GDOT and DMC3 defaults and supports custom MVC types. Multiple values can be separated with semicolons, for example in Dependent On.

History Query Parameters define how often selected MV/CV data is collected and how long history is retained. GDOT Online records limits, current value, optimized value, and display status for variables whose **Historize Data** flag is Yes on MV/CV pages. Default aggregation is Daily and default retention is one day. The resulting variables can be trended with Aspen Unified PIMS planning model variables.

## Calculations

### Custom Calculations Overview

Custom Calculations define scripts, formulas, and user properties for custom input and output processing. Separate scripts can be created for DR and OPT applications. Input calculations run before GDOT algorithms and optimizer calculations; output calculations run after engine optimization and can use optimization results.

Custom calculations are currently performed in transformed space during GDOT Online runs. Scripts, formulas, and properties are exported for GDOT Online in `.ucalc` and `_DR.ucalc` files inside the downloaded model ZIP.

### Calculation Scripts

Calculation Scripts create custom DR and OPT calculations and are written to `.ucalc` during export. The Calculation List shows script execution order, with all items above the **GDOT Engine** separator treated as input calculations and all items below it treated as output calculations.

Calculation management:

| Action | Behavior |
|---|---|
| Choose DR or OPT | Shows calculations for the selected application type. |
| Add calculation | Adds an Input or Output calculation, then users rename it, add description, and set Include. |
| Include/Exclude | Allows the same calculation to be included or excluded for scenarios/applications. |
| Add group | Creates calculation groups and lets users organize calculations inside them. |
| Reorder | Dragging changes execution order and can move calculations between input and output areas. |
| Delete | Removes selected calculations or groups. |
| Status | Complete, incomplete, or syntax error. Details also appear in Model Integrity Health. |

Script editor behavior:

- Syntax errors are highlighted while entering code.
- Code completion appears after keywords.
- Custom formulas and built-in functions can be used.
- An apostrophe (`'`) marks comments or ignored lines.
- Each variable is automatically added to the Map Calculation Variables area.

Parameter mapping:

| Column | Meaning |
|---|---|
| Name | Variable name from the script. |
| Mode | Input, Output, or InputOutput. |
| Binding | No Bound, Entry, or Constant. Entry maps to an existing variable/property; Constant exports a literal value. |
| Entry | Variable/property mapping selected from a searchable hierarchy. |
| Value | Constant value exported with the calculation. |
| Test Input | Offline test value for Input variables; arrays use `[n1, n2, n3]` syntax. |
| Test Output | Read-only offline result. |

**Test with Model Data** runs using selected model data entries and populates test fields. **Evaluate Script** runs offline and updates test output fields. Messages from `Message` calls appear in the Log tab.

### Formulas

Formulas are reusable functions referenced from calculations or other formulas. They are useful when a block of code is repeated and are exported into the applicable `.ucalc` file.

Formula behavior:

- Formula status can be complete, incomplete, or syntax error; status details also appear in Model Integrity Health.
- Renaming a formula used by another formula triggers an error so references can be corrected.
- Parameters are auto-created from variables in the formula.
- `ReturnValue` is automatically added and defaults to `0` unless explicitly set.
- All parameters except `ReturnValue` can appear in the formula signature, but not all parameters are required in a call.

Formula parameters are read-only for Mode and support Test Input/Test Output for offline evaluation. The Log tab shows messages emitted during evaluation.

Calling formulas:

- Positional calls preserve parameter order, such as `Formula1(expr1, expr2, expr3)`.
- Named parameters can omit values, such as `Formula1(a:=expr, b:=expr)` or `Formula1(b:=expr)`.
- Omitted parameters use type defaults: numeric values default to `0`, strings to `""`, and date/time to Unix epoch.

Common script/formula structures include `if ... then ... else`, `elseif`, `select case`, and `for ... next`.

### User Properties and Reserved Names

User Properties define custom properties for manipulated variables, controlled variables, and general application-level usage. MV/CV properties can be bound to calculation variables and appear as Tag and Value property columns on MV/CV configuration tables. General User Properties can be added to Online Settings > General Properties.

User property tables:

| Table | Scope |
|---|---|
| Manipulated Variable User Properties | Custom MV properties for DR/OPT tables and calculations. |
| Controlled Variable User Properties | Custom CV properties for DR/OPT tables and calculations. |
| General User Properties | Application-level properties that can be exposed in Online Configuration. |

Property fields:

| Field | Meaning |
|---|---|
| Name | Property name. Must not match a reserved system property name. |
| Description | Optional description. |
| Data Type | Date Time, Double, Int, OnOff, String, YesNo, or array variants for Int32, Double, String, and Date Time. |
| Size | Array size; visible only for General User Properties. MV/CV array sizes are defined in calculation Test Input or MV/CV page Value fields. |

Reserved property names include system names such as `Status`, `Type`, `CurrentRaw`, `LowLimit`, `HighLimit`, `MoveSuppression`, `GainMatrix`, `ConvolutionGain_CutOff`, `ExecInterval`, `CheckPntInterval`, `UseRanks`, `VariableDeadTime_DeadBand`, `ShadowPrice`, and many other runtime, solver, OPC, checkpoint, transformation, and debug properties. New user properties cannot use reserved names.

### Built-In Functions

Built-in functions can be used in custom calculations and formulas. Required parameters are shown when a function is inserted.

Supported function groups include:

| Group | Examples |
|---|---|
| Math and rounding | `ABS`, `EXP`, `LN`, `LOG`, `LOG10`, `SQRT`, `ROUND`, `ROUNDDOWN`, `ROUNDUP`, `FLOOR`, `CEILING`, `TRUNC`, `MOD`, `SIGN`, `MAX`, `MIN`, `MEDIAN`. |
| Trigonometry | `SIN`, `COS`, `TAN`, `ASIN`, `ACOS`, `ATAN`, hyperbolic variants, `DEGREES`, `RADIANS`, `PI`. |
| Date and time | `NOW`, `UTCNOW`, `DAY`, `MONTH`, `YEAR`, `HOUR`, `MINUTE`, `SECOND`, `WEEKDAY`, `WEEKNUM`, `SCHEDULEDTIME`, `SCHEDULEDTIMEUTC`, `LASTEXECUTEDTIME`, date/time conversion functions. |
| Text | `LEFT`, `RIGHT`, `MID`, `FIND`, `REPLACE`, `SUBSTITUTE`, `TRIM`, `LOWER`, `INITCAP`, `STRLEN`, `VALUE`, `TOSTRING`, `CHAR`, `CODE`, `CLEAN`, `REPT`. |
| Type/utility | `INT`, `FLOAT`, `EVEN`, `ODD`, `FACT`, `DMCPLUSAND`, `DMCPLUSOR`. |

## Model Settings and Working Workflows

### General Settings

General Settings affect GDOT Builder UI behavior rather than solver behavior. Users can reset all options to defaults, import/export user preferences, and tune flowsheet display settings.

UI behavior settings:

| Area | Setting | Default | Meaning |
|---|---|---:|---|
| Flowsheet | Highlight object connections | Selected | Highlights connections between objects. |
| Flowsheet | Flowsheet zoom step % | 5 | Zoom increment for flowsheet view controls. |
| Flowsheet | Visibility factor | 0.1 | Visibility level for non-selected objects; requires connection highlighting. `0` hides objects and `1` keeps them fully visible. |
| Object label visibility | Units, Material Stream, Variable Connection, Energy Stream | 15 | Zoom level threshold for object labels. |
| Connections | Connection thickness | 3 | Display thickness for connection lines. |
| Connections | Label size | 12 | Flow label font size. |
| Connections | Label font | Roboto - Thin | Flow label font. |
| Connections | Routing | Orthogonal | Connection routing, including AvoidsNodes and Orthogonal. |
| Connections | Curve | None | Connection crossing style, including None, JumpGap, and JumpOver. |
| Connections | Highlight color | `#FF00FF` | Highlight color for selected flows. |
| Units | Label size | 22 | Default unit label size. |
| Significant figures | Tables / Tooltips | 4 / 6 | Significant integer digits in table cells and hover tooltips. |

User Preferences can be imported/exported as `<modelName>_UserPreferences.json`. Saved preference content can include grid filters/sorts, property panel and page settings, stream panels, table settings across major GDOT pages, selected tabs, Hybrid model calculation tabs, DR/OPT Calculation radio selections, and expanded/collapsed sections in Online Configuration external status tabs.

### Auto-Scaling and Tuning Workflow

The recommended auto-scaling workflow is:

1. Compile the model to create MVs/CVs and initial variable Types.
2. Open Model Analysis > Auto-Scaling and Tuning.
3. On Scaling Factors, click **Calculate Scaling Factors**.
4. Review Calculated Scaling Factors and apply accepted values.
5. If values are too large or small, review block simulation values and adjust Gain CutOff / Regularization settings, increasing regularization by one order of magnitude at a time when trying to improve the A-Matrix condition number.

After convolution is complete and the A-Matrix is full rank, review the A-Matrix condition number. Then review default Optimizer and Data Reconciliation tuning values.

Important tuning defaults and guidance:

| Area | Guidance |
|---|---|
| Optimizer MV Move Suppression | MV Type default `0.2`; other types shown as very small values. |
| DR MV Move Suppression | MV Type default `0.2`; other types default `1.00E-04`, but guidance recommends changing this default to `0`. |
| DR QP Weight | Measure and bulk property feed parameters default to `1`; other feed parameters can default to `0`. |
| CV Low/High Limit ECE | Constraint and Balance Row often default to `0.001`; custom CVs and DMC imported CVs often default to `1`. |
| Prediction Bias Filter | Default is 10 minutes; optimal filter depends on measurement noise, response time, and dynamic model uncertainty. |

For infeasibility handling, CVs with non-zero ECE can be violated to seek a feasible solution. Normal operation recommends **Use Ranks = Yes** and **Allow Infeasible Balance Rank = No**. If GDOT is skipping, **Allow Infeasible Balance Rank = Yes** can be used for troubleshooting.

### Exporting GDOT Model Files

Exported GDOT Builder files are used by GDOT Online for component and non-component models. Compile before export so the latest model information is available. Only completely configured model blocks are exported; units with missing information or disabled units are excluded.

Export creates `<applicationName/modelName>.zip`, where Application Name comes from Online Configuration > Model Update Settings. Direct editing of generated files is discouraged.

Export contents:

| File | Purpose |
|---|---|
| `.ugdot` | Internal model file used to run the GDOT Builder model in GDOT Online. Includes Auxiliary Writes used to set GDOT model variables as Global QP targets for GDOT DR. Do not modify. |
| `.gdc` | Optimizer configuration, OPC connections, variable types, limits, transformations, tuning parameters, and other online settings. Tag columns from MV/CV tables are exported here. |
| `_DR.gdc` | Data Reconciliation configuration. |
| `.gdm` | GDOT model file containing dynamics and gains for the optimization algorithm. |
| `.cpt` | Optimizer checkpoint values; MV/CV Value columns are exported here. |
| `_DR.cpt` | DR checkpoint values. |
| `.JSON` | Trend configuration for AUP. |
| `.scaling` | Scaling factors for GDOT Online; `VariableScalingEnabled` is ON only if at least one MV/CV has scaling. |
| `.ucalc` / `_DR.ucalc` | User calculation scripts, formulas, and properties. |
| `UnitOpModelFiles` folder | Unit model files for each flowsheet unit; do not edit or move. |

Legacy ECE Tuning in `.gdc` and `_DR.gdc` indicates whether legacy ECE calculations are used versus distinct high/low limit ECE calculations in engineering and scaled units. Models migrated or created with V14.0.2 onward default to `False`.

### Key Model Variables and Parameters

Some variables and parameters are added automatically after compiling specific unit templates.

Non-Component unit variables/parameters:

| Unit | Variable/Parameter | Meaning |
|---|---|---|
| MultiDraw Fractionator | `X.FEED.PAR1` | Slope of T95 versus percent feed evaporated curve; usually 5 for metric and 9 for English models. |
| MultiDraw Fractionator | `X.FEED.PAR2` | Watson K Factor. |
| MultiDraw Fractionator | `X.FEED.PROP.PAR3` / `PAR4` | Slope/intercept of linear model for property versus T95. |
| MultiDraw Fractionator | `X.SCn.FLASHINDEX.PAR4` | Bias on flash index calculation for side cut `n`. |
| MultiDraw Fractionator | `X.SCn.FLASHPOINT.PAR4` | Bias on flash point calculation when no flash index is linked. |
| MultiDraw Fractionator | `X.SCn.VAR1` | Concentration of dibenzothiophene and heavier sulfur compounds; also appears for mixer/splitter and hydrotreater streams. |
| MultiDraw Fractionator | `X.SCn.VAR2` | Percent of side cut evaporated at 332 C, used to calculate `VAR1`. |
| Hydrotreater | `X.PAR5` | Natural log of reaction constant; higher values increase reactor conversion. |

Component unit variables/parameters:

| Unit | Variable/Parameter | Meaning |
|---|---|---|
| Shortcut Distillation | `X.PAR1` | Actual number of theoretical stages. |
| Shortcut Distillation | `X.VAR1` | Minimum theoretical stages at total reflux. |
| Shortcut Distillation | `X.VAR2` | Reflux ratio. With user intercept on, top product plus reflux divided by reflux; with user intercept off, reflux divided by top product. |
| Shortcut Distillation | `X.VAR3` | Minimum reflux ratio, only when user intercept is off. |
| MultiDraw Fractionator | `X.SCTNn.VAR1` | Separation power of section `n`. |
| MultiDraw Fractionator | `X.SCTNn.VAR2` | Effective cut-point of section `n`; should be constrained in DR to typical cut-point ranges. Inconsistent cut-points can cause matrix singularity. |

### Merge, Version, and Checkpoint Workflows

Merge Summary shows changes that will be merged into the current model from a child model or another model on the same branch. Mergeable areas include Flowsheet, Model Data, Variable Configuration, Dynamics, and submodel simulation specifications. Selective merge is not available.

Merge rules:

| Change pattern | Result |
|---|---|
| Changed only in parent/branch | Parent branch version is kept. |
| Changed only in local/child branch | Local or child branch version is kept. |
| Conflict changed in both branches | Parent branch version is taken automatically. |

Closing Merge Summary applies the merge. A restore point is created before opening; users can restore **Auto save before getting latest changes** and then check in if they do not want to accept the merge.

Version History Details compares saved model changes between checked-in versions or between the current unsubmitted model and a checked-in model. Saved comparison areas include stream and unit property panels, custom blocks, model data, dynamics, simulation, auto-scaling, convolution, gain matrix, variable configuration, Online Configuration external status tables, formulas, calculation scripts, and user properties. UI changes are not saved. Some items, such as newly added formulas, require a check-in before detailed data can be compared.

Version History options include selecting two versions, setting a comparison tolerance (default `1e-9`) to suppress smaller simulation differences, clearing filters, and exporting `Version History Details.xlsx`.

Checkpoint import loads GDOT Optimizer or DR `.cpt` values into MV/CV data and Optimizer settings. All columns except Current Values are imported. MV/CV column names must match exactly, and imported Optimizer Configuration setting names must match existing options. QP Weight, Move Suppression, Low Limit ECE, and High Limit ECE values in `.cpt` must be in engineering units; if scaled units are imported, switch Tuning Option to Eng Units and reimport.

### Version and Migration Notes

In GDOT Model Builder V12.1, system-generated INT variables were removed to reduce simulation and optimization calculation time without affecting simulation accuracy or GDOT Online optimization results. Shortcut Distillation reflux flow variables changed units:

| Item | V12 molar basis | V12.1 molar basis | V12.1 mass basis |
|---|---|---|---|
| Reflux flow measurement | `m^3/hr` or `bbl/day` | `m^3/hr` or `bbl/day` | `m^3/hr` or `bbl/day` |
| Reflux flow simulation variable | `m^3/hr` or `bbl/day` | `kmol/hr` or `lbmol/hr` | `tons/hr` or `(short tons)/hr` |

V12 migration is unaffected if reflux flow measurement was specified in the model. If the V12 simulation variable Reflux flow was specified, convert the old volumetric value to molar flow after importing into V12.1 to reproduce V12 results. A practical workaround is to always provide a measurement mapping for reflux flow when using the GDOT Excel model, because the Excel model only has volumetric reflux flow.

### Trending GDOT Variables in AUP

GDOT Builder can select MV/CV variables for AUP trending. The workflow is:

1. On Manipulated Variables, show **Historize Data** and **Trend Label** columns.
2. Set Historize Data to **Yes** for each MV to trend and optionally enter a Trend Label.
3. Repeat for Controlled Variables.
4. On Online Configuration > History Query Parameters, set aggregation frequency: hourly, daily, or weekly, and set history length.
5. Export GDOT files to generate `<modelName>_TrendConfig.json` in the Downloads folder.
6. Register the GDOT file location with `PSCAdmin register-gdot-dmz-folder <folder path>` so AUP can access historized GDOT files.

The trend configuration contains the GDOT model name and UID, data aggregation settings, selected MV/CV variables, textual annotations, and unit/stream context when applicable. Remove a registered location with `PSCAdmin unregister-gdot-dmz-file-share <file share path>`.

### Site Catalog Integration

For non-component GDOT Builder models connected to a Site Catalog during model creation, users can add planning submodels and import published properties/materials.

Site Catalog workflows:

| Workflow | Behavior |
|---|---|
| Add submodels | Drag a Site Catalog submodel from Add Flowsheet Components onto the flowsheet, review the submodel property pane, compile, and simulate. Associated properties and configuration are added automatically. |
| Import properties/materials | From Properties or Material Services, choose Import from Catalog, select catalog items, and import. |

Import matching rules:

- If a GDOT property already has the same Type as a Site Catalog property, Type takes precedence over Name and the existing model property is linked to the catalog property.
- If names match but Types differ, the catalog property is not imported or linked.
- If there is no matching model property, the catalog property is imported as new; invalid GDOT Builder characters are removed and the name is made unique.

## Resources

### Aspen GDOT OPT/DR Objective Function Definitions

The `GDOT_OPT_DR_ObjFn.pdf` resource defines how GDOT_OPT and GDOT_DR objective-function parameters map between GDOT Console names, OPC parameter names, and Aspen Unified GDOT Builder field names.

Key points captured from the resource:

- GDOT_OPT steady-state objective values use MV/CV Current, Optimized or SteadyState values, LP Cost, QP Weight, QP Target, and Move Suppression.
- For OPT, Current can be read via OPC from MVC, DCS, GDOT_DR, or historian; Optimized/SteadyState is calculated by the optimization engine.
- LP Cost, QP Weight, QP Target, and Move Suppression correspond to objective-function coefficients or movement penalties; OPC connections are optional where supported.
- GDOT_DR uses reconciled values: MV Current is the reconciled estimate at the current time, while CV Current is the steady-state value corresponding to current reconciled MV values.
- DR QP Target represents measured values from DCS, APC, or another GDOT application. For CVs, it biases `UnforcedPred_DR`.
- `UnforcedPred_DR` is a biased unforced prediction calculated by the prediction engine and available via OPC.
- DR MV Move Suppression penalizes MV movement; `MoveSuppressionMultiplier` is a global factor for DR MVs that affects convergence speed.

### Aspen GDOT Predictions

The `GDOT_Predictions.pdf` resource describes prediction concepts used by GDOT, including unbiased and unforced predictions, steady-state values, and biasing based on feedback.

Key points captured from the resource:

- GDOT prediction calculations account for system dynamics when MVs change.
- Bias based on feedback is added to improve prediction accuracy.
- In OPT, prediction response is calculated from changes in MV current values.
- In DR, prediction response is calculated from changes in MV QP Target values.
- DR uses unforced predictions to calculate the objective function.
- The CV bias calculation uses current values in OPT and QP target values in DR, along with gain relationships between CVs and MVs and a prediction-bias filter.