# Chemistry Module 1 refinement

The source contained 100 imported scan pages from three overlapping versions of the material. This rewrite consolidates them into topic sections aligned with the GXCYT122 Module 1 syllabus.

Requested model: `gemini-4-argon`. The Google Vertex AI responses report that same model version. `gemini-4-pro` was tested first and returned model-not-found/access-unavailable; it was replaced only after the user supplied the exact `gemini-4-argon` ID.

The local CLI bridge reuses notebook-agent’s installed `@google/genai` SDK and existing environment configuration. Credentials stay outside this repository. It starts no HTTP server and applies no changes to notebook-agent’s application or model defaults.

Local working files and resumable model responses: `/home/adhil/projects/notebook-agent/work/chemistry-module-1-refinement/`. Source before the rewrite remains in Git and in `source-notes.md` in that working directory. Each section has its own request, JSON response, coverage checklist and correction list.

## Section plan and source coverage

| New section | Topic | Original imported pages used |
| --- | --- | --- |
| 1 | Electrochemical cells and the Daniell cell | 1–3, 32–33, 72–74 |
| 2 | Electrode potential and the electrochemical series | 2–3, 7–9, 34–38, 74–75 |
| 3 | The Nernst equation: derivation and applications | 3–5, 38–40, 42, 44–45, 76–78 |
| 4 | Worked problems: electrode and cell potentials | 5–7, 30–31, 41–48, 78–81 |
| 5 | Reference electrodes and the standard hydrogen electrode | 9–10, 49–50, 81–82 |
| 6 | The calomel electrode and potential measurement | 10–12, 50, 82–86 |
| 7 | The glass electrode and pH measurement | 12–15, 51–53, 86–88 |
| 8 | Batteries and lithium-ion cells | 15–17, 54–57, 88–89 |
| 9 | Hydrogen–oxygen fuel cells with acid electrolyte | 17–18, 58, 90–91 |
| 10 | Conductivity and the digital conductivity meter | 19–21, 59–61, 91–93 |
| 11 | Corrosion: fundamentals and hydrogen evolution | 21–23, 31, 62, 64–67, 94–95 |
| 12 | Oxygen absorption, rusting and localized corrosion | 23–24, 62, 66–67, 94–95 |
| 13 | The galvanic series and corrosion prediction | 24–25, 63–64, 96 |
| 14 | Cathodic protection | 25–26, 67–69, 97 |
| 15 | Copper electroplating | 26–28, 70–71, 97–98 |
| 16 | Electroless copper plating | 28–30, 69–70, 99–100 |
| 17 | Revision sheet and exam practice | 30–31, 37–38, 100 |

## Editorial checks

- Consolidate repeated theory and diagrams; retain distinct methods, derivations and usable exercises.
- Independently recalculate numerical answers and check balanced reactions, electrode polarity, reaction quotients and units. Do not invent missing exercise data.
- Distinguish standard activities from concentration approximations, equilibrium potentials from loaded voltages, and chemical feasibility from corrosion rate/passivation.
- Keep the separator distinct from a lithium-ion cell’s SEI; use explicit charging/discharging roles.
- Use one stated voltage convention for glass-electrode calibration.
- Parse every formula with KaTeX, verify figure files, then build and check the rendered reader.

Reference checks for Nernst/free-energy relations: [OpenStax Chemistry 2e, §17.4](https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium). Corrosion and protection: [OpenStax Chemistry 2e, §17.6](https://openstax.org/books/chemistry-2e/pages/17-6-corrosion). The provided study pack is the principal source, and rewritten explanations are original.

## Reading locations

The logical page records now represent topic sections rather than imported scan boundaries. Existing `#page-N` anchors identify the new section numbers. Module 1 uses a new reading-place storage version so old scan-page offsets are not restored into unrelated sections. Other modules retain their page navigation. CSE, ECE and EEE share this Module 1 content.

## Verification results

- 17 topic sections generated with the requested `gemini-4-argon` model and reviewed against the syllabus.
- 19 worked examples (15 electrochemical, one pH calibration and three conductivity examples) and five numerical practice problems display as individually outlined cards, with solution equations inside the same card.
- 13 unique educational diagrams retained; all referenced files exist.
- 1,661 math nodes parsed successfully by KaTeX after LaTeX and JSON escape repairs.
- Card checks cover example boundaries, theory outside cards and complete practice solutions.
- Isolated production build passed and prerendered 62 routes. CSE, ECE and EEE Module 1 output each contains 19 worked cards and five practice cards, with no rendered KaTeX errors.
- Visual preview verified at a 754-pixel viewport. Wide formulae and tables retain horizontal scrolling within the cards.

An isolated copy was used while separate molecular-viewer work was in progress. After that work resolved its type/import errors, the final full shared-workspace `npm run build` also passed and prerendered 62 routes. Main local preview: `http://localhost:5173/notes/cse/s1/chemistry/module-1#page-4`.

Topic spacing: a horizontal divider and additional vertical space separate consecutive topic sections. Subtopics have a larger heading gap; worked-problem cards keep their internal layout.
