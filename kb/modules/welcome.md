# Welcome / What's New

> **Source:** `Content/html/Welcome.htm`, `What_s_New.htm`, `copyright.htm`
> **Version:** Aspen Unified V15.0.5 (June 2026)
> **Status:** Summary only — "Using Help", "AspenTech Websites", and "Copyright" pages skipped (no product knowledge)

---

## Product Suite Overview

**Aspen Unified** is AspenTech's integrated supply chain planning and optimization platform.  
It brings together multiple products under a single unified web interface:

| Product | Short Name | Description |
|---|---|---|
| Aspen Unified PIMS | AUP | Refinery planning and optimization (linear programming) |
| Aspen Unified Multi-Site PIMS | MS-PIMS | Multi-refinery coordinated planning |
| Aspen Unified Scheduling | AUS | Detailed operations scheduling (blending, movements, tanks) |
| Aspen Unified GDOT Builder | AU GDOT | Rigorous nonlinear optimization with process models |
| Aspen Unified Reconciliation and Accounting | AURA | Material balance reconciliation and production accounting |
| Aspen Unified Movements | AUM | Physical material movement tracking |
| AspenTech Strategic Planning for Sustainability Pathways | SPSP | Sustainability and decarbonization planning |
| Aspen Unified Distillation Mode Manager | DMM | Crude/distillation mode configuration |
| Aspen Unified Assay Manager | — | Crude assay data management |
| Aspen Unified Catalogs | — | Shared material catalogs (Price, Site, Assay) |

---

## What's New — V15.0.5 (June 2026)

### Aspen Unified Scheduling (AUS)

> **Licensing note:** AUS Crude Schedule Optimizer (CSO), Multi-blend Optimizer (MBO), and GraphQL APIs require additional licensing.

**Blend Event enhancements**
- **MIP quantity constraints** can now be defined and enforced at blend event level — supports operationally feasible, higher-quality blend schedules reflecting real plant constraints. Also applies to Receipt and Shipment events.
- Blend events can inherit **Recipe Thresholds** and min/max defaults from a **Specification Set** (defined on Material Service Details), enabling run tailoring without redefining a full recipe.
- **Additives** support added: new Additive tab in Blend Event dialog box for viewing/modifying additive settings, optimization and penalty impacts.

**Inventory and optimization**
- **Inventory Increment/Decrement Prices** added to Tank Properties panel (new "Blend Optimization Data" section) — allows the planning objective function to account for inventory changes between horizon start and end.
- **Custom inventory grid metrics** can now be defined using JavaScript (including GraphQL APIs); calculated and displayed directly on the inventory grid at row/column/tank level.
- **Daily Withdrawals** and **Daily Deliveries** columns added to Inventory Work Area Details table (read-only).
- **Planning** and **Operational** objective formulation options added to the Run Optimization dialog box.
- **Day boundary hour** option added (General Settings → Applications → General). Specify a 0–23 hour offset from midnight to let continuous operations cross midnight naturally without artificial splits.

**Data and display**
- **Simulated data** can now be displayed in a configured display time zone different from the model day time zone.
- Blending Component Property Balances support added to Tank Property Panel.
- **AUS Planning Target** Excel Add-in template: structure/formatting preserved on pull/commit; rows are now copied and inserted in place rather than deleting/rewriting the entire table.

**GraphQL enhancements**
- `getMovement` query now returns the full list of movements for a transfer event (single source/destination withdrawals and deliveries included).

---

### Aspen Unified PIMS (AUP)

**Plan vs Actual Report enhancements** (joint with AURA)
- Now supports **n:1 and 1:n material relationships** between AURA and AUP (previously only 1:1). Aggregated materials appear as a single row with the catalog material name.
- Gas materials using gas-volume UOM are kept in AUP units with an asterisk (*); asterisked values are excluded from sub-total calculations.
- **Plan Deviation (%)** = `(Actual − Plan) / Plan × 100`.

**Balance tab changes (UnitOps and Flows)**
- Per-UnitOp and per-Flow balance views updated (see AURA section for details on renamed fields).

---

### Aspen Unified Reconciliation and Accounting (AURA)

**Plan vs Actual Report enhancements** (joint with AUP — same features as above)

**Balance tab — UnitOps**
- "Imbalance Ratio" renamed to **Solver Penalty**: shows Gross Error Penalty when imbalance exceeds the Gross Error Threshold; otherwise shows the Imbalance Ratio value.
- "Imbalance %" renamed to **Loss/Gain %**.

---

### Aspen Unified Movements (AUM)

- New **Material drop-down** on the Movement Details Panel: selecting a material filters the Source drop-down to only show Tanks, Tank Groups, and Pipelines that contain that material. The Type drop-down also filters accordingly (T/G/L). After creation, material changes must be made directly on the movement record.

---

### Aspen Unified GDOT Builder

- **Stream Property Mapping** visibility logic refined: mapping section may not be visible when based on parent stream and source unit type (hybrid FCC, hydrocracker, mixer, custom block, hybrid model, continuous catalytic reformer, multi-draw fractionator with >1 feed, or no source unit). This enables automatic property propagation to downstream units without explicit variable connections.

---

## Version History

| Version | Release Date | Key Products Updated |
|---|---|---|
| **V15.0.5** | June 2026 | AUS, AUP, AURA, AUM, GDOT |
| **V15.0.4** | — | AUP, MS-PIMS, AUS, AURA |
| **V15.0.3** | — | AUP, MS-PIMS, AUS, Site Catalog, GDOT, AUM, AURA, SPSP |
| **V15** | — | GDOT, AUP, Supply Chain, AUS, AUM, AURA, SPSP, Price Catalog |
| **V14.6** | — | AUM (new), GDOT, AUP, MS-PIMS, AURA, AUS, SPSP |
| **V14.3** | — | GDOT, AUP, MS-PIMS, AUS, AURA, Site Catalog, SPSP |
| **V14 CP2** | — | SPSP (new), GDOT, AUS, AUP, MS-PIMS, AURA, Price Catalog |
| **V14 CP1** | — | Global improvements, Price Catalog, Site Catalog, AUP, AUS, GDOT, AURA |
| **V14** | — | AURA, Assay Manager (new), Config Manager (new), DMM (new), Site Catalog (new), AUP, MS-PIMS, AUS, GDOT |
| **V12.1 CP1–CP3** | — | Price Catalog, AUP, MS-PIMS, AUS, GDOT |
| **V12** | — | AUP, AUS, Home Page |
| **V11** | — | (see source) |
| **V10.1 / V10** | — | (see source) |

> For full feature details of each version, see [`What_s_New.htm`](../../Content/html/What_s_New.htm).

---

## Key Support Links

| Resource | URL |
|---|---|
| AspenTech Home | https://www.aspentech.com/ |
| Online Support (eSupport) | https://esupport.aspentech.com/ |
| Training Portal | https://esupport.aspentech.com/t_homepage |
| User Registration | https://esupport.aspentech.com/S_UserRegistration |
| Contact / Licensing | https://esupport.aspentech.com/apex/contact_phone |
