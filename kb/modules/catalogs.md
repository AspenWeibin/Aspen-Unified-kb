# Catalogs

> Module: `catalogs` | Sources: 6 pages (+ 1 skip: miniTOC stub)

Aspen Unified supports two catalog types managed from the **Catalog Home** page:

| Type | Purpose |
|------|---------|
| **Site Catalog** | Shared repository of distillation modes, materials, properties, assets, correlations, blend specs, capacities, and process limits — shared across AUP, AUS, AURA, and Multi-Site models |
| **Price Catalog** | Reusable pricing models for AUP: define Dimensions → Elements → Formulas → import Datasets |

---

## Catalog Home

Source: `html/Catalog/CatalogHome.htm`

The Catalog Home page is the central hub for managing all Site and Price catalogs.

**Access:** From the Aspen Unified Home page, click the catalog icon on the left-hand navigation panel.

### Key Actions

| Action | Notes |
|--------|-------|
| Create new catalog | Click **Create new** → select **Site catalog** or **Price catalog** |
| Import catalog snapshot | Click **Import snapshot** → browse for `.pcz` (price) or `.scz` (site) file → Import → fill name/description |
| Search catalogs | Type in search field |
| Manage user roles | Administrator clicks the roles icon (top right) to open **Manage Roles** dialog |

### Permissions

- Only **Administrator** or **Creator** site roles can create new catalogs or import snapshots
- After creation, the creator becomes **Owner** of that catalog
- Model owners set catalog-level roles via **... | User Role Settings** on the Catalog Home page

### Left-Hand Navigation

| Item | Purpose |
|------|---------|
| Home | Recent 12 opened/created models; shows Name, Folder, Last check-in |
| Catalogs | Opens Catalog Home (Site + Price catalogs) |
| Assay Library | Custom assay libraries shared across models |
| Roles | Site-level role assignment (Administrator only) |
| Folders | Organize models into folders (Creator/Administrator required to create/delete/rename) |

Folder behaviors: supports nested folders; moving/renaming in folder does not affect models in other folders; deleting a folder moves its items up one level.

---

## Site Catalog

Source: `html/Catalog/site-catalog-view.htm`

A **Site Catalog** stores shared model constructs (distillation modes, properties, materials, assets) so multiple models share common data. Originates from AUP, Distillation Mode Manager, or AUS.

**Key rules:**
- Models must be **connected** to a site catalog to access its data
- Site catalog info is retained in a model **snapshot**; on import you choose which catalog to connect to
- Copying a model carries over its site catalog link
- **Case Only Author** role cannot connect to Site Catalog

**Access:** From Catalog Home, click the site catalog name.

### General Actions

| Action | Details |
|--------|---------|
| Renaming entities | Renamed names appear in associated Catalog fields of linked models; models themselves are not directly affected |
| Deleting entities | Select → Table Tray delete. Removing material/property/asset does not affect apps using it, but it's no longer available via catalog. Cannot delete properties/materials referenced by a mode or blend spec — delete the mode/spec first |
| Deleting correlations | Cannot delete a property used by a correlation; if correlation is deleted, referenced properties remain |

### Site Catalog Panel — Two Sections

#### 1. Operational Data

| Sub-area | Description |
|----------|------------|
| **Planning Targets** | Read-only. Individual target sets published to the catalog. Double-click name to rename; select + Table Tray delete to remove. |
| **Site Capabilities** | Read-only. Shares local model capacities, process limits, inventory, and AUS data with global models. Columns: Name (editable), Case, Start Date, End Date, Status, Last Published By. |

#### 2. Model Data

Eight types of data can be published to a site catalog:

| Type | Key Notes |
|------|-----------|
| **Modes** (Distillation Modes) | Published from AUP. All associated properties, materials, and assets are included. Modes can be deleted. Columns: Distillation Mode Name (editable), Description (editable), Abbreviation (3 chars, editable), Last Published By/Date. |
| **Simulations** | Published from AUP. Columns: Name, Description, Submodels, Last Published By/Date. |
| **Submodels** | Associated with a Simulation. Select to populate Properties/Materials/Assets pages. For combined submodels, internal streams excluded. Columns: Name, Description, Abbreviation, Last Published By/Date. |
| **Properties** | Referenced by distillation modes; also add standalone properties. Cannot delete if referenced by a Correlation, Mode, or Simulation. Supports bulk import via Excel (Name, Description, Abbreviation required). Can bulk import from AUS Properties page via Import From Catalog. Columns: Name, Description, Abbreviation, Type (editable drop-down), Alert (type mismatch indicator). |
| **Materials** | — |
| **Assets** | — |
| **Correlations** | Correlation details for properties defined using correlations. |
| **Blend Specs** | — |

> Note: Capacities and Process Limits are also mentioned in the Site Capabilities area (shared with global models).

---

## Price Catalogs — Overview

Source: `html/UnifiedHome/PriceCatalogModels.htm`

**Price Catalogs** provide reusable pricing models for AUP. Once a Price Catalog is attached to an AUP or Multi-Site model, it supplies pricing formulas for Purchase, Sale, Global Supply, Supply, Demand, and Transport materials.

### Data Hierarchy

```
Price Catalog Model
├── Dimensions          (lookup axes, e.g., crude grades, regions)
│   └── Dimension Values
├── Elements            (symbols referencing specific dimension combinations)
│   └── assigned to one or more Dimensions
├── Formulas            (expressions using Elements as symbols)
│   ├── Type: Purchase | Sale | Global Supply | Supply | Demand | Transport
│   └── Symbols → mapped to Elements → dimension values
└── Datasets            (Excel files providing time-series price data)
    └── per Element × Dimension combination
```

### General Workflow

1. Create a Price Catalog model
2. Define **Dimensions** and their values
3. Define **Elements** and assign them to dimensions
4. Create **Formulas** — assign elements to symbols, optionally fix dimension values
5. **Publish** the pricing model
6. Configure **Default Mappings** (formula → material name)
7. **Attach** catalog to an AUP/Multi-Site model
8. Import **Datasets** (Excel files) with time-series pricing data

---

## Price Catalog — Pricing Model Data

Source: `html/Catalog/Pricing-Model.htm`

The Pricing Model page is where Dimensions, Elements, and Formulas are defined.

**Access:** Catalog Home → click a Price Catalog model (indicated by price catalog icon).

### Left Navigation

| Icon | Access |
|------|--------|
| Settings icon | Pricing Model page + Default Mappings |
| Import icon | Import a Dataset |

### Publishing

Changes to dimensions, elements, or formulas must be **published** to take effect across all attached AUP models.

> Click **Publish Price Model** (bottom of page). Changes become available to all planning models with this catalog attached.

### Dimensions Tab

Dimensions define the lookup axes (e.g., crude grades, regions, date ranges). Values are strings — can match material names in the model.

**To add a dimension:** Click + → enter Name + optional Description → Create. The Dimension Properties panel appears.

- Add values via + button or bulk import via Import button
- Export values to **Dimension Values.xlsx** (Downloads folder) — useful as an import template
- Once assigned to an Element, a Dimension cannot be deleted

### Elements Tab

Elements are symbols that link a formula variable to a specific dimension combination.

**To add an element:** Click + → Name + optional Description → Create → select one or more Dimensions in the Element Properties panel.

- Once used in a Formula, an Element cannot be deleted

### Formulas Tab

Formulas are expressions (constants, symbols, operators, functions, conditionals) typed into the formula details area.

**To create a formula:**
1. Click + → enter Name (≤20 chars) → select **Type** (Purchase / Sale / Global Supply / Supply / Demand / Transport) → Create
2. Click the formula selector → enter formula expression using Operations/Delimiter shortcuts
3. Click outside the formula area to save — symbols from the formula appear in the bottom panel
4. Assign a **Price Element** to each symbol
5. Optionally lock a **Dimension Value** per symbol (if not set here, users can select it in the model)
6. Publish when all formulas show a green ✓ status

> Variables cannot start with a number or blank. Numbers in a formula are treated as constants.

---

## Price Catalog — Default Mappings

Source: `html/Catalog/Default-Mappings.htm`

The Default Mappings page automatically maps Price Catalog formulas to model materials when the catalog is attached to an AUP or Multi-Site model.

**Pre-requisites:** Price Catalog created, Formulas defined, Price Catalog published.

**Access:** Catalog model → Settings icon → Default Mappings.

### Mapping Workflow

1. Click the tab for the material type: **Purchase**, **Sale**, **Global Supply**, **Supply**, **Demand**, or **Transport**
2. Click + → **New Default Mapping** dialog → enter Material Name
3. Material names must be unique within the price catalog
   - `[Any]` is a valid name (matches any material)
   - For Purchases/Sales with same name, an **Alt Tag** is required
   - Names must exactly match material names in the planning model for auto-mapping
4. For **Multi-Site materials**, additional required fields:

   | Tab | Additional Fields |
   |-----|-----------------|
   | Supply | Plant/Depot |
   | Demand | Market |
   | Transport | From, To, Mode ('Any' accepted) |

5. Click **Add** → double-click **Formula** cell → select formula (only formulas matching the tab type are shown)
6. Optionally map a **Dimension Value** (if not set here, users select it in the model)

Once mapped, formulas are available on the AUP Price Catalog page.

---

## Price Catalog — Datasets

Source: `html/Catalog/Price-Data-sets.htm`

After a pricing model is configured, import Excel datasets containing time-series price data.

**Access:** Price Catalog navigation → Import icon → Dataset.

### Import Steps

1. Click + above the table → **Import Dataset** dialog
2. Enter unique **Name** + optional Description
3. Click **Browse** → select Excel file
4. Select worksheets to import
5. Click **Next** — file is validated, values imported

If a dataset with the same name exists, a new **version** is created.

### Excel Dataset Format Rules

| Rule | Detail |
|------|--------|
| `#END` marker | Place in first column after last data row (limits rows); place after last data column (limits columns) |
| Row/column comments | `*` comments out a row; `!` comments out a column. One or more `!` columns must separate element/dimension names from dates. |
| Sheet names | Do not need to match Element names; all elements must be on separate sheets |
| `Element Name` cell | Required on every sheet; must match an existing Element in the Price Catalog Model |
| Dimension names | Cells following `Element Name`; must match Dimensions in the model. At least one required. Dimension values below must match those defined in the catalog. |
| Dates | At least one date column required |
| Invalid values | Ignored; processing continues |

**Additional notes:**
- Missing cell value → inherits previous cell's value (price held constant until a new date updates it)
- Cell values must be within defined constraints, otherwise discarded
- Dimension values must match those in the price catalog exactly
