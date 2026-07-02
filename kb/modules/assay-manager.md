# Aspen Unified Assay Manager Knowledge Base

## Quick Map

| Task | Go to |
|---|---|
| Manage shared assay libraries | [Assay Libraries](#assay-libraries) |
| Add or maintain assays in a workspace | [Workspace Assays](#workspace-assays) |
| Enter experimental assay data | [Assay Input Data](#assay-input-data) |
| Review characterization output | [Characterized Results](#characterized-results) |
| Create blend assays | [Assay Blends](#assay-blends) |
| Update limited whole-crude data | [Flash Assay](#flash-assay) |
| Display assay plots | [Assay Plots](#assay-plots) |

## Coverage Map

| Source Area | KB Coverage |
|---|---|
| Using the Assay Manager System | MiniTOC/navigation page skipped |
| Assay Manager Library Summary | Library creation, editing, permissions, and deletion covered below |
| Library Assay Summary | Library assay actions and workspace import covered below |
| Workspace Assays Table | Statuses, default properties, assay actions, page actions, and properties panel covered below |
| Add Assays Page | Add-from-library workflow covered below |
| Assay Input Data | Input Summary, Pure Component, and Distillation Data tabs covered below |
| Characterized Results | Results tabs, diagnostics, export, plot, and flash actions covered below |
| Create Blend | Blend setup, fraction rules, normalize, and create/update behavior covered below |
| Download Assay | External public assay download workflow covered below |
| Flash Assay | Limited whole-crude update and re-characterization dialog covered below |
| Assay Plots | Plot access and settings covered below |

## Overview

Assay Manager manages crude assay data in Aspen Unified. Users work with assays in two main scopes:

| Scope | Purpose |
|---|---|
| Assay libraries | Shared libraries available to users with the required assay manager permissions. Libraries can hold assays that multiple users can access. |
| Workspace assays | The assays a specific user is working with in a workspace. Workspace assays can be imported from libraries, downloaded from public sources, copied, blended, characterized, exported, or saved back to a library. |

If the assay system is not used in a model, Workspace Assays table content has no effect on the model.

## Assay Libraries

### Library Summary

Access the Assay Manager Library Summary from Aspen Unified Home by selecting Assay Library in the left navigation. The page displays all libraries in the system. Libraries are available to users with the correct roles.

Library actions:

| Action | Behavior and constraints |
|---|---|
| Add a library | Create a custom library with a unique name. Names can be up to 30 characters and cannot contain `\ / : * ? " < > |`. |
| View/edit library assays | Select a library and open its Library Assay Summary. |
| Assign/remove permissions | Assign Creator role to users/groups for a library. Only users with the correct permission can grant Creator access. |
| Delete a library | Deletes the selected library; requires the appropriate assay manager permission/role. |

### Library Assay Summary

The Library Assay Summary displays all assays in a selected library. It can be opened from the Assay Library page by selecting a library and choosing edit, or from the Assay Manager navigation panel through Library Summary.

Available actions depend on permissions:

| Action | Behavior |
|---|---|
| Delete an assay | Removes the selected assay from the system; requires an appropriate assay manager role. |
| Add/import assays to Workspace Assays | Select one or more library assays and add them to the Workspace Assays table. |

## Workspace Assays

The Workspace Assays table displays all assays in the current user's workspace. Assays must be saved from this table to a library before they become available through a shared library.

Important columns and defaults:

| Column / Field | Meaning |
|---|---|
| Model Assay | Assay name; selecting it opens the assay properties panel. |
| Characterization Method | Method used for characterization. |
| Status | Characterization state of the assay. |
| Source | Library name or acquisition source. |
| Density, Sulfur, Viscosity, Watson K | Default crude properties; these cannot be removed. |
| Total Acid Number | Acidity measurement in `mgKOH/g`. |

Assay statuses:

| Status | Meaning |
|---|---|
| Characterized | Characterization is complete. |
| Characterization Error | Characterized with issues; review Messages on the characterization form and correct input data. |
| Characterization Failed | Characterization failed; the assay cannot be used for cutting to PIMS or for creating a blend. |
| Input Only | Assay exists but has not been characterized. |
| Input Changed | Input data changed after characterization; re-characterization is required before use. |

Workspace assay actions:

| Action | Required status | Result |
|---|---|---|
| View input data | Any assay | Opens Assay Input Data. |
| View characterized results | Any assay | Opens Characterized Results. |
| Generate plot | Characterized assays | Opens an Assay Plot using the selected plot type. |
| Save to library | Characterized assays | Saves selected assays to a selected library. |
| Update characterization | Characterized assays | Opens Flash Assay; after changes, re-characterizes the assay. |
| Copy assay | Any assay | Creates a new assay with the same values under a new assay name. |
| Delete assay | Any assay | Removes the selected assay from the model/workspace. |

Page-level actions:

| Action | Workflow |
|---|---|
| Add from Aspen Library | Add from Library, filter/search, select assays, click Add, then associate each added assay with a Crude Oil. |
| Add from Public Library / Download Assay | Requires Internet access; select external assays, acknowledge disclaimers, and download. |
| Import from file | Choose the file data format, browse to the source file, select assays, and import. AspenTech imported files must use the supported Excel assay format. |
| New Assay Blend | Opens Create Blend. Fractions must total 1 before a blend can be created. |
| Export assays | Exports `Model Assays.xlsx` to the Downloads folder. |

### Assay Properties Panel

Selecting an assay opens the properties panel. The top of the panel allows editing:

| Item | Constraint |
|---|---|
| Name | Assay name. |
| Abbreviation | Must be three alphanumeric characters and unique. |

For a regular assay, the panel contains Source information, Sample information, and Characterization information. Only Notes can be edited in Characterization information.

For an assay blend, the panel also shows Blend Information and Characterization Information. Blend Information includes Blend Name, Weight/Volume fraction basis, total fraction, the assays in the blend, each assay fraction, and default property values. Blend fractions must total 1 before the blend can be updated.

## Assay Input Data

Assay Input Data displays the input data for pure components of an assay. It is used to enter experimental assay data, including properties, pure-component composition, and distillation data for product cuts.

Access it from Workspace Assays by selecting an assay and choosing Input Data from the table tray or shortcut menu.

Input Data tabs:

| Tab | Purpose | Key actions and constraints |
|---|---|---|
| Input Summary | Property data for the whole crude and product cuts. | Change values, add/edit/delete properties, add/remove cuts, export `Input Summary.xlsx`. Cut temperature unit follows the model unit set. |
| Pure Component | Composition of pure components/GC components for whole crude or cuts. | Change Basis % by mass/volume/mole, replace components, add/delete components, add/remove cuts, export `Pure Component.xlsx`. Basis and Components are default settings and cannot be deleted. |
| Distillation Data | Distillation data at different percentages. | Curve types include TBP, D86, D1160, and D2887. Basis can be mass or volume. Distillation percentages must increase. Export `Distillation Data.xlsx`. |

Distillation data is considered sufficient when at least three distillation points are provided, the last point is greater than 50%, and the mid-distillation yield temperature is within the cut temperature range. If sufficient whole-crude distillation data is provided, it is used instead of cut-yield data on Input Summary.

The Input Data page can also generate plots and return to Workspace Assays.

## Characterized Results

Characterized Results displays characterized data after characterization has been performed. During characterization, missing assay properties are estimated from the original assay data. If characterization has not been performed, no data appears on this page.

Access paths include Workspace Assays > Characterized Results, the row shortcut menu, or Flash Assay > Re-Characterize.

Results tabs:

| Tab | Purpose | Key actions and constraints |
|---|---|---|
| Results Summary | Output properties for whole crude and product cuts. | Add/edit/remove properties, add/remove cuts, create plots, export `Results Summary.xlsx`. |
| Pure Component | Pure component details for whole crude or cuts. | Change Basis %, replace/add/delete components, add/remove cuts, export `Pure Component.xlsx`. |
| Distillation Data | Output distillation data such as TBP or D86. | Curve type, Basis, and Units are default columns and cannot be removed. Add/delete distillation rows, add/remove cuts, export `Distillation Data.xlsx`. |
| Message | Diagnostic messages from characterization. | Priority can be Error or Warning. If an error occurs, characterization was not successful and the assay cannot be used. |

Actions from Characterized Results include plotting, returning to Workspace Assays, opening Flash Assay to update limited data and re-characterize, or returning to Assay Input Data.

## Assay Blends

Create Blend creates a new assay blend from existing characterized assays. Source assay characterization results are used to calculate blend results. After creation, the blend can be changed by re-blending, and its results update automatically when source assays change.

Blend fields:

| Field | Meaning |
|---|---|
| Blend Name | Name of the assay blend. |
| Fraction basis | Weight or Volume basis. |
| Total fraction | Read-only total of all blend fractions; must equal 1 before Create/Update is available. |
| Workspace Assay / Model Assay | Assays included in the blend. |
| Fraction | Proportion of each assay in the blend. |
| Properties | Property names and defaults; not editable from the blend page. |

Blend actions:

| Action | Behavior |
|---|---|
| Add assays | Opens Select Assays and lists characterized assays. |
| Remove assay | Removes the selected assay from the blend. |
| Normalize | Adjusts entered fractions proportionally so the total equals 1. |
| Create or Update Blend | Available only when fractions total 1; creates/updates the blend and opens Characterized Results. |

## Download Assay

Download Assay lists assays available from preselected external public websites. Internet access is required.

The table includes source, name, description, region, country, latest updated date, and downloaded date. If the source has a newer Last Updated date than the local Download Date, the page indicates that more recent crude data is available.

Download workflow:

1. From Workspace Assays, choose Download Assay.
2. Select one or more external assays.
3. Click **Download Assays**.
4. Acknowledge the external-source disclaimer.
5. Click **Start Download**.
6. Return to Workspace Assays and review the added assays.

## Flash Assay

Flash Assay is used to enter updated but limited whole-crude data and then re-characterize an assay. It can be opened from a characterized assay in Workspace Assays or from Characterized Results.

Dialog content:

| Area | Behavior |
|---|---|
| Whole Crude Properties | Lists whole-crude properties. Standard Liquid Density and Sulfur by weight are default. Old Value shows existing workspace/result values; New Value accepts updated data. |
| Property rows | Add properties or remove selected properties. Blank New Value means no new value is supplied. |
| Curve Type | Select the distillation curve type. |
| Basis | Select mass or volume basis for distillation yield data. |
| Units | Read-only temperature unit inherited from the results form. |
| Distillation Section | Nine distillation percentages appear by default; rows can be added/removed and are sorted low to high. |
| Re-Characterize | Requires at least four new temperatures before activation; opens Characterized Results with updated whole-crude results. |

## Assay Plots

Assay Plot displays characterized assay data. It can be opened from Workspace Assays, Assay Input Data, or Characterized Results after selecting a plot type.

Plot actions:

| Action | Result |
|---|---|
| Reset zoom | Restores the default zoom. |
| Plot Settings | Opens settings for selected assays/order, legend and axis display, grid/scales, plot-specific boundaries/options, and legend position/fonts/colors/labels. |

## Related Modules

- [Getting Started with Aspen Unified](./getting-started.md)
- [Planning / PIMS](./pims.md)
- [Reference](./reference.md)