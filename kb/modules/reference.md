# Reference

> Module: `reference` | Sources: 2 pages (1 content, 1 glossary)

---

## Common Petroleum Equations

Source: `html/WhatWasThatEquation_.htm`

A quick-reference compilation of petroleum engineering formulas used in Aspen Unified Planning (AUP) and related products. All temperatures in °F unless noted.

### Density / Gravity

```
SPGR = 141.5 / (API + 131.5)
API  = 141.5 / SPGR - 131.5

Density lb/gal = SPGR * 8.337
Density lb/bbl = SPGR * 350.5
```

### Temperature Conversions

```
°C = (°F - 32) / 1.8
°F = °C * 1.8 + 32
°K = °C + 273.16
°R = °F + 459.67
```

### Viscosity Blending Index (VBI)

Blending is linear on VBI:

```
VBI = EXP(EXP(LN(LN(VIS + 0.7)) + 0.8 * LN(T2/T1) * LN(LN(0.7)/(LN(VIS + 0.7)))))
```

### Pour Point Blending Value (PPBV)

```
PPBV = exp(PP + 460)          (PP in °F)
```

Blend by volume fraction; reverse: `PP = LN(PPBV) - 460`

### Aromaticity Factor (AFC)

From VABP, Specific Gravity (SPG), Sulfur (SUL wt%), Aniline Point (ANI °F):

```
AFC = (.2514 + .00065*VABP + .0086*SUL - .00605*ANI + .00257*ANI/SPG) * 100
```

### Volumetric Average Boiling Point (VABP)

```
VABP °F = (T10 + 2*T50 + T90) / 4
```

### Smoke Point / Luminometer

```
SP  = -98.9611 + 148.25592/SPG - .54941906*AROM + 1.7614*SULF - 66.6687*SPG
LUM = -12.03 + 3.009*SP - 0.0104*SP^2
SP  = 4.16 + 0.331*LUM + 0.000648*LUM^2
```

### Flash Point (blending)

```
FSH = LOG(1 / (FR_A/10^(FSH_A/100) + FR_B/10^(FSH_B/100))) * 100
```

### Blending Indices from Temperature Properties

```
Flash Point Index (FLI):   FLI = 10^(4345.2/(FLP+383) - 6.1188)
Freeze Point Index (FPI):  FPI = exp(ln(FP+460)*12.8852 - 73.0883)
Cloud Point Index  (CPI):  CPI = exp(CP*0.035)
```

### Air Density (from wet/dry bulb temperatures)

```
Pw  = vapor pressure of water at Tw (in Hg)
Pv  = Pw - 0.01108*(Td - Tw)
w   = 0.622 * Pv / (29.92 - Pv)        [lb water/lb dry air]
DA  = (29.92 - Pv) / (0.7541*(Td+460)) [lb/ft³ dry air]
Dm  = DA * (1 + w)                       [lb/ft³ mixture]
Hm  = 0.24*Td + w*(1062 + 0.44*Td)     [BTU/lb air]
```

Example at Tw=Td=60°F: DA=0.0749234, Dm=0.0757802, Hm=26.846 BTU/lb air

### Viscosity Unit Conversions

```
Stokes  = Poise / (SPGR@T°C * 0.999024)
VIS [lb·s/in²] = 2.32328e-7 * Stokes * LB/FT³
```

### Thermal Properties

```
BTU/lb = 1.798796 * Cal/Gm  (@ 25°C = 77°F)
Cp liq [BTU/lb·°F] = 0.388 + 0.00045*°F      (32–750°F, SPGR 0.75–0.96)
Cp gas [BTU/lb·°F] = (4.0 - SPGR)*(°F+670)/6450
LHV    [BTU/lb]    = (110.9 - 0.09*T) / SPGR
SH     [BTU/lb·°F] = (0.388 + 0.00045*T) / SPGR^0.5
```

### Pressure Base Correction

```
K = (P1/P2) * (459.67 + T2) / (459.67 + T1)
```

### Vapor Pressure (from Boiling Point)

```
E  = (1862 + BP + Group*96) * 0.002325581
VP = 10^(2.8808 - E*(BP - T°C)/(273.16 + BP - 0.15*(BP - T°C)))
```

Group = 1 (hydrocarbons), 0 (methane/LPG), 6 (alcohols)

### Volume Calculations

```
VOL sphere      = 4/3 * π * RADIUS³
VOL spherical vector = 2/3 * π * RADIUS² * Height
```

### Mole Weight Conversions (Gas)

```
SPGA  = MoleWt / 28.964           [density rel. to air]
M#/FT³ = (MoleWt * 1000) / 379.49
```

### Cetane Number / Index

**ASTM D976-80 prediction:**
```
CEI = -420.34 + 0.016*API² + 0.192*API*LOG(T50) + 65.01*LOG(T50)² - 0.0001809*T50²
```

**From Aniline Point (approximation):**
```
CTN = -0.611 + 45.5 * EXP(0.0015*(ANI°C - 60))
```

**From SPG + D86 distillation (°C):**
```
CTN = 45.2 + 0.0892*(T10-215)
    + (0.131 + 0.901*EXP(-3.5*(SPG-0.850)) * (T50-260)
    + (0.0523 - 0.420*EXP(-3.5*(SPG-0.850)) * (T90-310)
    + 4.90E-4 * ((T10-215)² - (T90-310)²)
    + 107*EXP(-3.5*(SPG-0.850)) + 60*(EXP(-3.5*(SPG-0.85)))²
```

**ASTM 976-66 Cetane Index (CEI):**
```
X   = 97.833*(LOG(MBP°F))² + 2.2088*API*LOG(MBP°F) + 0.01247*API²
    - 423.51*LOG(MBP°F) - 4.7808*API + 419.59
CEI = 0.49083 + 1.06577*X - 0.0010552*X²
```

**Cetane Blending Index (CBI):**
```
CBI = 16.7 + 0.0571*CEI + 0.01076*CEI²
```

### Reid Vapor Pressure Index (RVI)

```
RVI = RVP^1.25     (common; regression suggests exponent 1.05–1.12)
RVP = RVI^0.8
```

### Distillation Blending Value (DBV)

Polynomial in D = (T - VABP)/100:

```
DBV = a + b*D + c*D² + d*D³ + e*D⁴ + f*D⁵ + g*D⁶
```

Coefficients (Decker, Jackman & Schneider):

| Coeff | Full Range | Narrow Range |
|-------|-----------|--------------|
| a     | 53.54     | 51.04        |
| b     | 44.09     | 111.10       |
| c     | -7.08     | -14.13       |
| d     | -5.54     | -51.59       |

VABP = (T10 + 2*T50 + T90) / 4. All narrow-boiling components show an S-shaped distillation curve.

---

## Glossary

Source: `html/glossary.htm`

Key terms used across Aspen Unified products.

| Term | Definition |
|------|-----------|
| Active | A worksheet set to Active on the Global Settings dialog box Active tab. |
| Active case | The case selected in the Case Context area; all screen data is relative to this case. |
| Blend | A combination of materials to create a new material for sale, transfer, or use as feed/component in another blend — typically to meet compositional or property specs. |
| Blender | Equipment where components are combined to produce specific blends. |
| Block | On a flowsheet, a visual representation of one of seven entity types (single entity or grouped subsections). |
| Breadcrumbs | Navigation trail at the top of a page below the application bar. |
| Capacity constraint | A limit on a specific variable or sum of variables directly defined in the model (e.g., total feed rate to a process). |
| CDM | Crude Distillation Mode |
| Characterize assay | Using limited input assay data with estimation methods and math techniques to generate a complete property set covering the entire boiling range. |
| Component | One material used to make up a blend. |
| Constraints | Limits of operation — material balances, blend specs, ratios, unit capacities, utility balances, stream property balances, distributive recursion rows, process unit limits. |
| Control Row | User-defined controls for additional model structure; controls solution accuracy to reflect actual process unit operation. |
| Crude Library | All crudes in the assay library (System Library + Custom Libraries). |
| Crude Tower | Physical distillation unit in crude processing — Atmospheric, Vacuum, or Splitter. |
| Custom Libraries | User-created assay libraries with managed ownership and read-access control. |
| CV | GDOT — Controlled variables or constraints. |
| Demand | Market-specific sales constraints and prices. |
| Diagram | Visual representation of nodes and connections in a model. |
| Distillation-based separation | Realistic crude/vacuum column representation with overlap in fractions; uses short-cut distillation algorithm with separation indices (SIs) from calibration of column operating data. |
| Distillation Flowsheet | Flowsheet representing the current distillation mode. |
| Distress Cost/Price | Price at which you sell at a loss (or must buy above sell price) when a purchased material cannot be profitably used. |
| DR | GDOT data reconciliation. |
| ECE | Equal Concern Error |
| Equipment | A node with a configuration or submodel associated with it. |
| Flowsheet | Contains a diagram and palette/stockpile for adding nodes. Two types: Overview and Distillation. |
| Group | A node on the flowsheet that contains other nodes. |
| HPC | High Performance Computing — features allowing faster computation via concurrent task execution. |
| Indexed Properties | Properties with an attached equation; these indices blend linearly. |
| IV | GDOT — Intermediate Variable; calculated from specified Manipulated Variables (MV). |
| Link | A material connection between nodes. |
| Long tag | Tags joined with colon (:); each tag ≤ 20 characters. |
