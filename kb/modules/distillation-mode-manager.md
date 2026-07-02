# Aspen Unified Distillation Mode Manager Knowledge Base

## Quick Map

| Task | Go to |
|---|---|
| Create a DMM model | [New Distillation Mode Manager Model](#new-distillation-mode-manager-model) |
| Configure materials, properties, crudes, and assets | [Model Data Foundations](#model-data-foundations) |
| Build and configure modes | [Distillation Modes and Flowsheet](#distillation-modes-and-flowsheet) |
| Configure tower cuts and swing cuts | [Column Configuration](#column-configuration) |
| Generate assay cutting data | [Mode Workflow](#mode-workflow) |
| Publish DMM data through a Site Catalog | [Site Catalog Integration](#site-catalog-integration) |
| Set units and basis defaults | [Model Settings](#model-settings) |

## Coverage Map

| Source Area | KB Coverage |
|---|---|
| Using Distillation Mode Manager | MiniTOC/navigation page skipped |
| New Distillation Mode Manager Dialog Box | Model creation fields, basis, assay-system option, database, and Site Catalog covered below |
| Model Data | Materials, properties, crude oils, assets, modes, flowsheet, column configuration, control rows, and Site Catalog covered below |
| General Settings | Unit Set, Model Basis, Volume UOM, and Weight UOM covered below |
| Define Custom Formula Dialog Box | Formula, equation, mapping, and save constraints covered below |

## Overview

Distillation Mode Manager (DMM) manages crude distillation mode data in Aspen Unified. It links materials, properties, crude oils, tower assets, distillation modes, and assay cutting data so generated distillation data can support planning workflows.

DMM can operate with the built-in assay management system enabled or disabled:

| Mode | Behavior |
|---|---|
| Built-in assay system enabled | DMM can create modes, configure cut properties, generate and compare assay cutting results, plot cutting results, and apply generated data back to the model. |
| Built-in assay system disabled | Assay cutting data must be imported from PIMS tables such as `ASSAYS`, `CRDDISTL`, `CRDCUTS`, and `ASSAYLIB`; several editing/generation features are unavailable. |

## New Distillation Mode Manager Model

Create a DMM model from the Aspen Unified Home page. After creation, the Materials page opens. The creator automatically receives the model Owner role.

New model fields:

| Field | Type | Purpose / Constraints |
|---|---|---|
| Model name | Required text | Up to 60 characters, must be unique, and cannot contain `/ \ + * % & ? ' : < >`. |
| Description | Text | Optional; up to 255 characters. |
| Model basis | Selection | Volume by default or Weight. The selected basis is used throughout the model and cannot be changed after creation. |
| Enable Assay System | Checkbox | Selected by default. Controls whether built-in assay cutting data generation is available. |
| Input data server | Drop-down | Server where data resides. |
| Input database | Drop-down | Input database. |
| Site Catalog | Drop-down | Site Catalog used for DMM information; once selected, the catalog association cannot be modified. |

## Model Data Foundations

### Materials

The Materials table lists all materials in the DMM model. Because DMM has no streams, materials are referred to as Material Services.

Material types:

| Type | Use |
|---|---|
| Standard | Cuts; only this type appears in Material Service selections for deferred cuts. |
| Crude | Feed into a tower; also appears on the Crude Oils page. |
| Utility | Utilities used in distillation mode workflows. |

Material table columns include Material/Utility, Description, Type, UOM, Last Imported, and Site Catalog status. Site Catalog status is **Linked** when imported and still linked; it becomes **Not-linked** when created locally or when an imported material is modified.

Material actions:

| Action | Behavior |
|---|---|
| Edit/view material | Select a row to open the Material Details panel, or rename directly in the table. |
| Add material | Adds a new row and opens Material Details. |
| Delete material | Delete from row hover action or Table Tray. |
| Import materials | Imports selected materials from the Site Catalog linked during model creation. Duplicate names are imported as `<materialName>n`. |
| Export materials | Exports the Materials table to the browser Downloads folder. |

Material Details includes Name, Description, Abbreviation, Type, and UOM. Material names must be unique. Description and Abbreviation changes on Site Catalog linked materials break the link and change status to Not Linked. UOM is read-only and comes from General Settings.

### Properties

The Properties Summary page lists property definitions in the model. Columns include Property, Description, UOM, Blending Basis, Last Imported, and Site Catalog status.

Property actions:

| Action | Behavior |
|---|---|
| Edit/view property | Opens the Property Details panel. |
| Add property | Adds a property row and opens details. |
| Delete property | Removes the row. |
| Import property | Imports unlinked Site Catalog properties. Duplicate names import as `<propertyName>n`. |
| Export properties | Exports the table to the browser Downloads folder. |

Property Details includes Name, Description, Abbreviation, Type, Blend Basis, and UOM. Abbreviation must be unique to the model. Blend Basis is usually Volumetric except for SUL and BTU but can be changed as needed.

Define Property Type uses Group, Property, Temperature, Component Group, Component Name, Method, and Curve Type fields to map a DMM property to standard property definitions. Indexed properties can require ASTM or ABML method selection. Distillation or physical/transport properties can require temperature details.

### Crude Oils

The Crude Oils table shows materials of Type Crude. Crude Oils are required to configure Crude Slate on the Mode Flowsheet.

| Column | Meaning |
|---|---|
| Crude Oil | Crude name; at least three characters, required, and modified on Materials. |
| Description | Modified on Materials. |
| Active Assay | Visible only when using the built-in assay system; links one assay to the crude. |

Actions include creating a new crude, associating/unlinking an assay, and exporting `Crude Oils.xlsx`. Creating a crude also adds it as a material on the Materials page.

### Assets

Distillation Assets can be Atmospheric towers, Vacuum towers, or Splitters. Assets define default cuts that appear on the Mode Flowsheet when a tower or splitter is added.

Asset table columns include asset name, description, type, last imported, and Site Catalog status. Asset type is set at creation and cannot be changed.

Asset actions:

| Action | Behavior |
|---|---|
| Create asset | Select Atmospheric tower, Distillation/Vacuum tower, or Splitter; then complete the Asset Properties panel. |
| Delete asset | Not allowed if the asset is associated with a distillation mode. |
| Import from Site Catalog | Imports selected assets from the linked catalog; imported information replaces distillation asset information. |
| Export assets | Exports the asset table for review or template-style updates. |

Asset Properties include Name, Description, Abbreviation, Distillation Modes, and Default Cuts. Abbreviations are required. Atmospheric towers use `AT<x>`, vacuum towers use `VT<x>`, and splitters use `S<xyz>`.

Default cut constraints:

| Asset type | Cut rules |
|---|---|
| Atmospheric tower | First cut must be Gas or Atmospheric Cut. Bottom cut can be Atmospheric Cut or Atmospheric Residual. Atmospheric Residual must be the bottom cut when connecting a vacuum tower. |
| Vacuum tower | Streams are Vacuum Cut. |
| Splitter | Uses Defer Cut; deferred cuts can be reordered. |

## Distillation Modes and Flowsheet

### Modes Summary

The Distillation Modes page lists all modes and their associated towers. A mode name must be at least three characters. Abbreviation cannot exceed three characters. Separation Type and Last Updated to Assay Cutting Data are visible only when using the built-in assay system.

Mode actions:

| Action | Behavior |
|---|---|
| Create mode | Available only with built-in assay system enabled. Choose Sharp Separation or Distillation-based. Sharp Separation is default. |
| Delete mode | Select the mode row and delete. |
| Adjust Separation Type | Choose Sharp Separation or Distillation-based. |
| Import third-party distillation data | Available when built-in assay system is disabled; data must be in Aspen PIMS table form. |
| Import from Excel | Available with built-in assay system enabled; imported files replace all crude distillation information. |
| Export modes | Exports `Distillation Modes.xlsx`; export can be used as an import template. |

Separation types:

| Type | Meaning |
|---|---|
| Sharp Separation | Assumes products/cuts have no overlap; cut points and the TBP curve determine product properties. |
| Distillation-based | Represents overlapping crude/vacuum fractions using shortcut distillation and separation indices calibrated from operating data. |

### Mode Flowsheet

The Distillation Mode page defines one mode. A configured mode must contain exactly one Atmospheric Tower. The Slate block is always present and represents the crude slate feeding the atmospheric tower.

Flowsheet rules:

- If built-in Assay Management is not used, columns on the flowsheet cannot be modified.
- Crude Oils must be defined before configuring Crude Slate.
- Only towers with proper cuts defined are available for selection.
- Add an Atmospheric Tower before adding a Vacuum Tower or Splitter.
- A Vacuum Tower can be connected only from the atmospheric tower lowest stream, and that stream must be Atmospheric Residual.
- A single mode can have only one Atmospheric Tower and one Vacuum Tower.
- Splitters can be added only on an Atmospheric Tower; multiple splitters are allowed.
- The same asset can be added to different distillation modes.
- Objects cannot be moved on the flowsheet, but users can zoom and pan.
- Towers connected to another tower cannot be removed until the connected tower is removed.

## Column Configuration

Column Configuration appears when selecting a column, splitter, or stream on the Mode Flowsheet. It configures output materials, cut temperatures, swing cuts, splitters, and separation-index values.

Column configuration actions:

| Action | Behavior / Constraints |
|---|---|
| Add/change materials | Select a Material Service or create a new one. Only unused valid materials appear where appropriate. |
| Add swing cut | Available only on Atmospheric and Vacuum towers. Select the cut above the new swing cut, choose material, enter FVT, and select Cut Type. |
| Delete swing cut | Select the swing cut row and delete. |
| Change FVT | FVT is Final Volume Temperature from the crude distillation curve. Temperatures must be monotonically increasing. FVT is visible only with built-in assay management. |
| Change SI Top / SI Bottom | Visible only for Distillation-based separation. Default is 10. SI values are not required/editable for Vapor Cuts. |
| Add splitter | Splitters can be added to Atmospheric Cut streams on an Atmospheric Tower. The last splitter cut FVT equals the connected AT Tower cut and is not editable. |

Swing cut rules:

- The first non-light-end product cannot be a swing cut.
- Two `Swing Cut` types cannot be continuous.
- Adjacent swing cuts are allowed; `Swing Cut` followed by `Swing Up/Down` is allowed.
- In a vacuum tower, `Swing Up` can be below a Vacuum Cut and `Swing Down` can be above a Vacuum Cut.
- In a vacuum tower, `Swing Cut` or `Swing Down` cannot be below the final Vacuum Cut or used as the final cut.
- In an atmospheric tower, `Swing Down` cuts are not allowed above an Atmospheric Residual cut.
- If there is no Atmospheric Residual, the last Atmospheric cut can be `Swing Cut`, `Swing Up`, or `Swing Down`.

Distillation-based note: yield does not change with SI factor for operational planning because the cut point specifies volume on the overall crude TBP curve. SI factors can still significantly change properties.

## Mode Workflow

The Distillation Mode workflow has four main steps.

| Step | Purpose |
|---|---|
| Complete Configuration | Assign crude oils to the mode. Complete when a properly configured atmospheric tower exists, at least one crude oil is assigned, and any vacuum tower is configured. |
| Provide Cut Properties | Select which properties to calculate for each cut. Not applicable/visible if using imported fixed cutting data without the built-in assay system. |
| Define Utilities & DBals | Define tower utility consumption/production and deferred cut material mappings. |
| Generate Assays | Preview, generate, compare, plot, apply, copy, and export assay cutting data. |

Cut Properties behavior:

- Only cuts with assigned materials are visible.
- Only properties with a UOM can be mapped.
- White cells are unmapped, green cells are mapped, and green/blue cells indicate adjusted formulas.
- Users can copy properties from another mode, choose displayed properties, toggle property calculation per cut, and define custom formulas for adjusted calculations.

Utilities and DBals:

- Utilities table lists utility consumption by towers; utilities are Material Services of Type Utility.
- Each utility can be added twice, once for an AT tower and once for a VT tower.
- Utility consumption values are positive; utility production values are negative.
- DBal Consumption maps materials to deferred cuts, and each material can be used only once.

Generate Assays:

- Shows complete assay data for the mode, including material balance rows, inspection rows, CCAP capacity rows, control rows, process limit rows, and process parameter rows.
- New results must be regenerated when input information changes.
- Generate Assay Cutting Data is enabled only when FVTs are correct, Crude Slate is configured, and cut properties are mapped.
- Apply Changes to Model saves New data and makes it the Old data.
- Export creates `Assay Cutting Data.xlsx`.

### Control Rows

Control rows add user-defined control structure to the LP matrix. Row names must begin with:

| Prefix | Matrix behavior |
|---|---|
| `E` | Equality row with zero right-hand side. |
| `L` | Less-than inequality with zero right-hand side. |
| `G` | Greater-than inequality with zero right-hand side. |

Control rows are often used for property balances or as driver rows for saturated and unsaturated gas plant submodels.

### Custom Formulas

Define Custom Formula creates or edits an adjusted property calculation. Adjusted cells are visually marked in the Cut Properties table.

| Field | Purpose |
|---|---|
| Formula | User-entered equation; users can insert predefined operators, functions, or variables. |
| Equation | Formula after automated syntax correction. |
| Mapping | Maps every formula variable/parameter to a property or calculated parameter value. |
| OK | Enabled only when all variables are mapped. |

## Site Catalog Integration

A Site Catalog stores reusable DMM constructs such as modes, properties, materials, and assets so multiple Aspen Unified models can share them.

Important rules:

- The model must be connected to a Site Catalog.
- Site Catalog information is retained in snapshots; importing a snapshot prompts for the catalog connection.
- Copying a model carries over its Site Catalog link.
- If a new Site Catalog is added, users must reselect items to publish.
- Removing a row from the Site Catalog page unlinks the selection from the catalog; it does not delete the entity from the model.
- Publishing an entity with obsolete dependencies reports Obsolete dependencies.
- Publishing with non-linked dependencies publishes dependencies where possible and reports Incomplete dependencies.

Site Catalog workflow areas:

| Area | Purpose |
|---|---|
| Modes | Add modes to publish. Adding a mode adds related properties, materials, and towers. Status stays incomplete until all dependencies are linked and published. |
| Properties | Map model properties to catalog properties and property types. Incomplete properties need a property type before publishing. |
| Correlations | Publish ABML/UBML and custom correlations. Associated properties must be published before a correlation can be published. |
| Materials and Assets | Publish linked materials and distillation assets needed by modes. |

Property statuses include Ready To Publish, Ready To Link, Incomplete, Linked, and Obsolete Link. Changing a property type in the Site Catalog table does not change the property type in the model.

## Model Settings

General Settings are available from the DMM Navigation Panel settings icon.

| Setting | Default / Meaning |
|---|---|
| Unit Set | SI. |
| Model Basis | Set when the DMM model is created and cannot be changed. |
| Volume UOM | Applies to materials when volume is used; default `m3`. |
| Weight UOM | Applies to materials when weight is used; default `kg`. |

## Related Modules

- [Assay Manager](./assay-manager.md)
- [Planning / PIMS](./pims.md)
- [Catalogs](./catalogs.md)