# Chemistry Module 4 refinement

The three overlapping imported note sets (80 source pages) have been consolidated into 15 teaching sections shared by the CSE, ECE and EEE readers. The original source was archived before editing. The reader uses section labels, topic dividers and outlined problems, matching Module 1.

## Generation and review

Each section was drafted through the local notebook-agent Vertex bridge using the user-selected model `gemini-4-argon`. Every response reported that exact model version. The model reviewed the water-treatment and environmental sections in two additional audit requests. Manual editorial review corrected additional scientific overstatements and reconciled the revision sheet with the main text; model audit results were not treated as proof of correctness.

Local reproducibility archive: `/home/adhil/projects/notebook-agent/work/chemistry-module-4-refinement/`. It contains the source archive, section plan, bridge, requests, raw responses, editorial scripts, independent calculations, audit results and review log. Credentials are loaded from notebook-agent's existing environment and are not included in the website.

Source SHA-256: `f56527b7db12decd838b5250150f45b11fef58f28d7aab004cf9610badd7a5df`

## Source coverage

Source pages refer to the archived imported document, before consolidation.

| Section | Topic | Source pages |
| --- | --- | --- |
| 1 | Water quality and hardness | 1–3, 27–28, 51–52 |
| 2 | Expressing hardness as calcium carbonate | 3, 9–10, 28–29, 32–33, 53–55 |
| 3 | Worked problems on water hardness | 4–10, 29–33, 54–59 |
| 4 | Ion-exchange softening and demineralization | 10–13, 33–35, 59–64 |
| 5 | Reverse osmosis and desalination | 13–15, 35–36, 64–65 |
| 6 | Water purification, chlorination and breakpoint | 15–19, 36–38, 66–67, 69–70 |
| 7 | Ozone and ultraviolet disinfection | 19–20, 38–39, 67–68 |
| 8 | Water pollution, dissolved oxygen, BOD and COD | 20–23, 39–40, 70–72 |
| 9 | Sewage treatment: stages and activated sludge | 23–26, 40–43, 73–75 |
| 10 | Trickling filters and the UASB process | 24–26, 41–43, 74–75 |
| 11 | E-waste and resource recovery | 44–46, 76 |
| 12 | Greenhouse gases and climate change | 47, 77–79 |
| 13 | Stratospheric ozone and ozone depletion | 47–48, 79–80 |
| 14 | Sustainable development and the 17 SDGs | 48–50, 75–76 |
| 15 | Revision sheet and practice problems | 1–3, 53–59, 70–80 |

## Material corrections

- Calcium and magnesium determine routine natural-water hardness. Sodium chloride adds neither hardness nor alkalinity; sodium bicarbonate adds alkalinity and can change the carbonate/non-carbonate classification without raising total hardness.
- Carbonate hardness is `min(total hardness, total alkalinity)` on a common calcium-carbonate basis. Permanent hardness cannot be negative. Incomplete ion analyses are identified rather than presented as fully charge-balanced compositions.
- Recomputed all hardness mixtures using the stated rounded atomic masses. Removed contradictory “exact” values from the drafting brief. Aluminium sulphate is retained only as a clearly marked formal charge-equivalence exercise, not routine Ca/Mg hardness.
- Distinguished sodium-cycle softening from H/OH demineralization and potable-water disinfection. Corrected resin notation, equations and regeneration, with practical limitations.
- Explained RO using transmembrane and osmotic pressure differences. Removed universal rejection, cost and energy claims.
- Replaced nascent-oxygen-only disinfection explanations with HOCl/OCl chemistry and ozone/radical mechanisms. Breakpoint does not mean all organic material has been destroyed.
- Defined BOD5 as a five-day empirical test, explained possible nitrification, and distinguished COD from complete oxidation or a universal BOD conversion. Additional BOD examples state dilution and seed assumptions.
- Separated preliminary screening from primary settling and biological treatment; corrected UASB to Upflow Anaerobic Sludge Blanket and explained methanogenic archaea, biomass retention and post-treatment.
- Corrected e-waste component terminology and device-dependent hazards, greenhouse infrared mechanisms, Chapman ozone chemistry, and the distinction between ozone depletion and warming.
- Added the 17 SDGs, retrieval questions, longer review prompts and a learning checklist. Existing legible figures are retained with descriptive alt text; duplicate and unreadable figures are excluded.

## Verification references

- [USGS: Water hardness and water quality](https://water.usgs.gov/nwc/NWC/water_quality/tables/quality.abs.html)
- [USGS: Groundwater quality](https://pubs.usgs.gov/gip/gw/quality.html)
- [EPA: Secondary treatment standards](https://www.epa.gov/npdes/secondary-treatment-standards)
- [WHO: Electronic waste](https://www.who.int/news-room/fact-sheets/detail/electronic-waste-%28e-waste%29)
- [NASA: Causes of climate change](https://science.nasa.gov/climate-change/causes/)
- [NASA/WMO: Twenty questions and answers about the ozone layer](https://science.nasa.gov/wp-content/uploads/2024/09/final-20qs-2022-full-document-26april2023-digital-version.pdf)
- [United Nations: Sustainable Development Goals](https://www.un.org/sustainabledevelopment/development-goals/)

## Validation

- 15 sections, 8 unique local figures with verified paths, and 1,176 math nodes parsed and rendered through KaTeX with errors enabled.
- AST checks: 12 complete worked-example cards and 5 practice cards, including 7 display equations inside the practice cards. Card boundaries do not absorb subsequent theory headings.
- Independent arithmetic: single-salt, mixed-salt, ion-analysis, normality/molarity and BOD examples recalculated outside Gemini.
- No unresolved OCR placeholders, code fences or control-character corruption.
- Production build passed (62 prerendered routes). CSE, ECE and EEE output each has 15 sections, 12 worked cards, 5 practice cards and no KaTeX errors.
