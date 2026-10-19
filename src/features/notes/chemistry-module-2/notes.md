<!-- page 1 | Nanomaterials: scale, classification and size effects -->

## Nanomaterials: scale, classification and size effects

### Module learning route
1. [Nanomaterials: scale, classification and size effects](#page-1)
2. [Nanoparticle synthesis: reduction, hydrolysis and sol–gel](#page-2)
3. [Graphene: structure, preparation, properties and uses](#page-3)
4. [Fullerenes and the structure of C₆₀](#page-4)
5. [Carbon nanotubes: structure, chirality and applications](#page-5)
6. [Carbon quantum dots and applications of nanomaterials](#page-6)
7. [Polymer fundamentals and flame retardancy](#page-7)
8. [Conducting polymers: conjugation, doping and composites](#page-8)
9. [Polyaniline and polypyrrole: preparation, states and uses](#page-9)
10. [OLEDs: layers, charge injection and light emission](#page-10)
11. [Dye-sensitized solar cells: components and charge cycle](#page-11)
12. [Supercapacitors: interfaces, construction and energy storage](#page-12)
13. [Materials for quantum computing](#page-13)
14. [Spintronics and magnetoresistive devices](#page-14)
15. [Revision sheet and practice problems](#page-15)

### The nanoscale and foundational fields
Nanomaterials are materials with at least one external dimension or internal structural feature in the nanometric range, conventionally defined as approximately $1\text{ nm}$ to $100\text{ nm}$, where $1\text{ nm} = 10^{-9}\text{ m}$. While some structures such as monolayer graphene have a thickness below $1\text{ nm}$ ($\approx 0.34\text{ nm}$), they are still studied as nano-objects because their thickness is at the atomic limit. Nanomaterials can occur naturally (volcanic ash, forest fire soot), form as incidental combustion by-products (diesel exhaust, welding fumes), or be engineered for specific electronic, optical, or catalytic functions.

**Nanoscience** investigates the fundamental physical, chemical, and biological phenomena of matter at the atomic and molecular scale. **Nanochemistry** focuses on synthesizing, functionalizing, and controlling chemical reactions of nanoscale building blocks with molecular precision. **Nanotechnology** applies these scientific and chemical principles across engineering, physics, and materials science to fabricate functional devices.

### Classification by dimensionality
In nanomaterial classification, dimensionality ($0\text{D}$, $1\text{D}$, $2\text{D}$, $3\text{D}$) counts the number of **unconfined (extended) spatial axes** that lie outside the nanometric range ($> 100\text{ nm}$), rather than the number of nanoscale axes.

| Class | Confined axes ($\le 100\text{ nm}$) | Unconfined axes ($> 100\text{ nm}$) | Typical morphology and examples |
| :--- | :---: | :---: | :--- |
| **0D** | 3 | 0 | All three dimensions are confined at the nanoscale: spherical nanoparticles, semiconductor quantum dots, nanoclusters, and fullerenes ($\text{C}_{60}$). |
| **1D** | 2 | 1 | Elongated along one axis with nanoscale cross-sections: nanorods, nanowires, nanofibres, and carbon nanotubes (CNTs). |
| **2D** | 1 | 2 | Extended sheets or films with nanoscale (or sub-nanometre) thickness: graphene, nanofilms, nanocoatings, and layered nanoplates. |
| **3D** | 0 (external) | 3 | Bulk-scale external dimensions composed of nanoscale internal building blocks, grains, pores, or interfaces: nanocrystalline polycrystals, nanoparticle dispersions, and bundled nanowire arrays. |

> **Watch out.** Do not assume any macroscopic solid with all three external dimensions above $100\text{ nm}$ is a $3\text{D}$ nanomaterial. Ordinary bulk materials (such as coarse-grained graphite) are not $3\text{D}$ nanomaterials unless they possess a nanostructured internal architecture, such as nanometre-scale crystal grains, pores, or bundled nano-building blocks.

### Classification by material composition
Grouping nanomaterials by chemical composition is a material-type classification rather than a commercial grading, and several categories overlap in practice (for example, a polymer nanocomposite contains both polymer and inorganic phases).

| Material category | Core composition and structural features | Representative examples |
| :--- | :--- | :--- |
| **Carbon-based** | Predominantly $sp^2$ or $sp^3$ bonded carbon nanostructures. | Fullerenes, carbon nanotubes (CNTs), graphene, carbon quantum dots. |
| **Inorganic: metals, oxides and semiconductors** | Metallic nanoparticles, metal-oxide nanopowders, or compound semiconductor nanocrystals. | $\text{Au}$, $\text{Ag}$, and $\text{Mo}$ nanoparticles; oxides such as $\text{TiO}_2$, $\text{SiO}_2$, $\text{Al}_2\text{O}_3$, $\text{Fe}_3\text{O}_4$, $\text{Fe}_2\text{O}_3$; quantum dots such as $\text{CdSe}$ and $\text{GaAs}$. |
| **Dendrimers (branched nanopolymers)** | Radially branched, tree-like macromolecular architectures containing internal cavities and numerous functionalizable chain ends for targeted drug delivery. | Poly(amidoamine) (PAMAM) dendrimers. |
| **Biological nanomaterials** | Nanostructures derived from or assembled using biomolecules for bionanotechnology and targeted delivery. | DNA nanostructures/nanowires, nanostructured peptides. |
| **Nanocomposites** | Multiphase materials combining nanoscale fillers ($0\text{D}$, $1\text{D}$, or $2\text{D}$) within a bulk metal, ceramic, or polymer matrix to enhance mechanical, thermal, or barrier properties. | Polyethylene–nano-$\text{SiO}_2$ composites, polymer–nanoclay systems. |

> **Watch out.** Not all nanopolymers are dendrimers—dendrimers are a specific hyperbranched class with tree-like symmetry, whereas polymeric nanoparticles can also be formed from linear chains. Furthermore, "biological" origin does not automatically guarantee biocompatibility or non-toxicity; every nanomaterial requires specific toxicological assessment.

### Size effects: why properties change at the nanoscale
Entering the $1\text{–}100\text{ nm}$ range does not automatically improve every property, nor does a single universal percentage of surface atoms apply to all materials at a given diameter (surface atom fraction depends on crystal lattice parameters and particle shape). However, two fundamental physical mechanisms govern why nanomaterials differ from bulk solids:

1. **Surface-area-to-volume ratio ($A/V$):** For a sphere of diameter $d$, surface area is $A = \pi d^2$ and volume is $V = \frac{\pi}{6}d^3$. For a cube of side length $a$, $A = 6a^2$ and $V = a^3$. Their surface-to-volume ratios are:
$$
\left(\frac{A}{V}\right)_{\text{sphere}} = \frac{6}{d}, \qquad \left(\frac{A}{V}\right)_{\text{cube}} = \frac{6}{a}
$$
where $d$ and $a$ are characteristic lengths ($\text{m}$ or $\text{nm}$). Because $A/V$ scales inversely with size ($1/d$), subdividing a fixed total mass of material into smaller, non-agglomerated particles of identical geometry and density increases the total exposed surface area proportionally to $1/d$. A much higher fraction of atoms sits at under-coordinated surface sites, which can change reactivity, catalytic activity, adsorption and melting behaviour. The result depends on material chemistry, surface state and environment.
2. **Electronic and optical confinement:** When particle dimensions approach the de Broglie wavelength of charge carriers or the exciton Bohr radius, **quantum confinement** restricts electron motion. This occurs most prominently in **semiconductor quantum dots** (such as $\text{CdSe}$), where shrinking the crystal discretizes energy levels and widens the band gap, shifting optical absorption and fluorescence toward shorter (bluer) wavelengths. By contrast, in **metallic nanoparticles** (such as $\text{Au}$ and $\text{Ag}$), optical changes across the $10\text{–}100\text{ nm}$ range are typically dominated by **localized surface plasmon resonance (LSPR)**—the collective oscillation of conduction electrons driven by light—rather than semiconductor-type band-gap opening, unless metallic clusters shrink to sub-$2\text{ nm}$ molecular scales.

#### Example 1: Illustrative calculation of surface scaling on subdividing spheres
**Problem:** Consider an idealized, non-agglomerated sample of spherical nanoparticles of uniform density. If a single spherical particle of diameter $d_1 = 100\text{ nm}$ is subdivided into smaller spherical particles of diameter $d_2 = 10\text{ nm}$ while conserving total material volume, determine: (a) how the surface-to-volume ratio changes, (b) how the surface area of a *single* particle changes, (c) how many $10\text{ nm}$ particles are formed, and (d) how the *total* surface area of the fixed volume changes.

**Solution:**
- **Assumptions:** All particles are perfect rigid spheres of constant density with no clustering or pore overlap.
- **(a) Surface-to-volume ratio ($A/V$):** Using $A/V = 6/d$:
$$
\frac{(A/V)_2}{(A/V)_1} = \frac{6/d_2}{6/d_1} = \frac{d_1}{d_2} = \frac{100\text{ nm}}{10\text{ nm}} = 10
$$
The surface-to-volume ratio increases by a factor of $10$.
- **(b) Surface area of one particle:** Since $A = \pi d^2$, reducing diameter by $10$ reduces the area of an individual sphere by a factor of $10^2 = 100$ ($A_2 = 0.01 A_1$), rather than increasing it.
- **(c) Number of particles ($N$) at constant total volume:** Since $V = \frac{\pi}{6}d^3$:
$$
N = \frac{V_1}{V_2} = \left(\frac{d_1}{d_2}\right)^3 = \left(\frac{100\text{ nm}}{10\text{ nm}}\right)^3 = 1000\text{ particles}
$$
- **(d) Total surface area ($A_{\text{total}}$) at constant volume:**
$$
A_{\text{total},2} = N \times A_2 = 1000 \times (0.01 A_1) = 10 A_1
$$
Subdividing the same volume of material from $100\text{ nm}$ to $10\text{ nm}$ spheres increases the total exposed surface area $10$-fold.

### Self-check questions
1. **Question:** A carbon nanotube has a diameter of $2\text{ nm}$ and a length of $5\text{ }\mu\text{m}$. How is it classified by dimensionality, and why?
   **Answer:** It is a $1\text{D}$ nanomaterial because two of its dimensions (the cross-sectional axes, $2\text{ nm}$) are confined within the nanometric range, leaving exactly one unconfined dimension ($5\text{ }\mu\text{m} = 5000\text{ nm}$) extended outside the nanoscale.
2. **Question:** Why does a $3\text{ nm}$ $\text{CdSe}$ nanocrystal emit a different colour of light than a $7\text{ nm}$ $\text{CdSe}$ nanocrystal of the exact same chemical formula?
   **Answer:** Due to quantum confinement, restricting excitons within the smaller $3\text{ nm}$ semiconductor crystal widens the electronic band gap compared to the $7\text{ nm}$ crystal, causing it to emit higher-energy (shorter-wavelength) photons upon electron–hole recombination.

<!-- page 2 | Nanoparticle synthesis: reduction, hydrolysis and sol–gel -->

## Nanoparticle synthesis: reduction, hydrolysis and sol–gel

Nanomaterials are synthesized through two fundamentally opposite engineering strategies: breaking down macroscopic solids or assembling nanoscale structures from atomic and molecular precursors.

### Top-down vs bottom-up synthesis

In a **top-down approach**, a macroscopic bulk material is mechanically or chemically eroded into nanoscale fragments. Common techniques include high-energy ball milling (which fractures coarse powders into nanoparticles through repeated impact) and photolithography or electron-beam lithography (which etches circuit patterns onto semiconductor wafers). While top-down methods scale well for wafer patterning, mechanical attrition often introduces crystal defects, broad particle size distributions, and surface contamination.

In a **bottom-up approach**, individual atoms, ions, or molecules self-assemble into clusters that nucleate and grow into nanoparticles. Wet-chemical routes such as chemical reduction, hydrolysis, and sol–gel processing, along with gas-phase methods like chemical vapour deposition (CVD), belong to this category. Bottom-up routes can offer control over composition and size when nucleation and growth are well managed, but narrow size distributions and high crystallinity are not automatic.

| Feature | Top-down approach | Bottom-up approach |
| :--- | :--- | :--- |
| **Starting material** | Bulk solid | Atoms, ions, or molecular precursors |
| **Primary mechanism** | Fracture, attrition, or selective etching | Nucleation, condensation, and controlled growth |
| **Representative methods** | Ball milling, lithography | Chemical reduction, alkoxide hydrolysis, sol–gel, CVD |
| **Particle characteristics** | Broader size distribution; higher surface defects | Potentially controlled size and structure; depends on synthesis conditions |

### Chemical reduction method

Chemical reduction is a bottom-up wet-chemical route widely used to prepare zero-valent metallic nanoparticles such as silver ($\text{Ag}$), gold ($\text{Au}$), chromium ($\text{Cr}$), and molybdenum ($\text{Mo}$). Dissolved metal cations ($\text{M}^{n+}$) gain electrons from a chemical reducing agent to form neutral metal atoms ($\text{M}^0$). Once the concentration of neutral atoms exceeds supersaturation, they aggregate into stable nuclei that grow into colloidal nanoparticles.

#### Colloidal noble metal synthesis

Silver nanoparticles are commonly synthesized in aqueous solution by reducing silver nitrate ($\text{AgNO}_3$) with trisodium citrate ($\text{Na}_3\text{C}_6\text{H}_5\text{O}_7$) under gentle heating and stirring:

$$
\text{Ag}^+\text{(aq)} + e^- \longrightarrow \text{Ag}^0\text{(s)}
$$

Here, the citrate ion serves a dual role: it acts as the reducing agent that donates electrons to $\text{Ag}^+$ and as an electrostatic **capping (stabilizing) agent**. Adsorbed citrate anions coat the growing silver nanocrystals, imparting a negative surface charge that can reduce aggregation under suitable solution conditions. A gradual colour change to yellow-gold indicates the formation of dispersed silver nanoparticles exhibiting surface plasmon resonance. Water can subsequently be removed by freeze-drying to recover the solid nanopowder.

#### Other metal-reduction routes

More reactive metal precursors may require stronger reducing agents and controlled non-aqueous conditions. The source notes mention molybdenum chloride as an example. The essential electron-transfer bookkeeping is:

$$
\text{Mo}^{3+} + 3e^- \longrightarrow \text{Mo}^0
$$

This is a formal reduction half-reaction, not a complete synthesis equation or a prediction of particle size. The actual precursor, reductant, solvent and stabilisation determine the product.

### Hydrolysis and the sol–gel process

Commercially important metal oxide nanoparticles—including silica ($\text{SiO}_2$), titania ($\text{TiO}_2$), and alumina ($\text{Al}_2\text{O}_3$)—are synthesized via controlled hydrolysis of metal alkoxides ($\text{M(OR)}_n$, where $\text{R}$ is an alkyl group such as ethyl or isopropyl) inside a **sol–gel process**.

* **Sol:** A stable colloidal suspension of solid nanoparticles ($1\text{--}100\text{ nm}$) dispersed throughout a continuous liquid medium.
* **Gel:** A continuous, three-dimensional, interconnected solid network that spans the volume of the container and immobilizes (traps) the liquid phase within its pores.

> **Watch out.** A gel is not merely liquid droplets floating in a solid, nor is gelation performed simply to filter out impurities. In this oxide sol–gel example, condensation helps form a spanning network of $\text{M–O–M}$ linkages. Gelation alone does not guarantee a particular porosity, purity or final particle size.

#### Chemical stages of sol–gel synthesis

![Sol-Gel Synthesis of Silica showing hydrolysis, condensation, and polycondensation](/notes/cse/s1/chemistry/module-2/assets/sol-gel-silica.svg)

1. **Hydrolysis:** Water attacks the metal or metalloid alkoxide precursor, replacing alkoxide groups ($\text{-OR}$) with hydroxyl groups ($\text{-OH}$) and liberating alcohol ($\text{ROH}$). For silicon tetraalkoxide:

$$
\text{Si(OR)}_4 + 4\text{H}_2\text{O} \longrightarrow \text{Si(OH)}_4 + 4\text{ROH}
$$

2. **Condensation and polycondensation:** Hydrolysed species link together to form bridging oxygen bonds ($\text{Si–O–Si}$ siloxane linkages), releasing either water (water condensation) or alcohol (alcohol condensation):

$$
\equiv\text{Si–OH} + \text{HO–Si}\equiv \longrightarrow \equiv\text{Si–O–Si}\equiv + \text{H}_2\text{O}
$$

$$
\equiv\text{Si–OR} + \text{HO–Si}\equiv \longrightarrow \equiv\text{Si–O–Si}\equiv + \text{ROH}
$$

   Continued three-dimensional polycondensation links oligomers into colloidal sol particles, which eventually interconnect across the vessel to form a rigid wet gel. Combining complete hydrolysis and condensation yields the overall stoichiometric summary for silica:

$$
\text{Si(OR)}_4 + 2\text{H}_2\text{O} \longrightarrow \text{SiO}_2 + 4\text{ROH}
$$

   Similarly, titanium tetraisopropoxide ($\text{Ti(OC}_3\text{H}_7)_4$) undergoes hydrolysis to $\text{Ti(OH)}_4$ followed by polycondensation, summarized overall as:

$$
\text{Ti(OR)}_4 + 2\text{H}_2\text{O} \longrightarrow \text{TiO}_2 + 4\text{ROH}
$$

   For alumina, aluminium alkoxide hydrolyses to aluminium hydroxide, which is subsequently dehydrated during thermal treatment:

$$
\text{Al(OR)}_3 + 3\text{H}_2\text{O} \longrightarrow \text{Al(OH)}_3 + 3\text{ROH}
$$

$$
2\text{Al(OH)}_3 \xrightarrow{\Delta} \text{Al}_2\text{O}_3 + 3\text{H}_2\text{O}
$$

3. **Ageing and washing:** The wet gel is kept in its pore liquid so unreacted $\text{-OH}$ groups continue condensing, strengthening the skeletal necking. Washing with fresh solvent removes soluble salt impurities and residual alcohol.

4. **Drying:** The method used to remove pore liquid dictates the final nanostructure:
   * **Evaporative drying $\rightarrow$ Xerogel:** Conventional thermal evaporation creates strong liquid–vapour capillary forces across tiny pores, causing the gel network to shrink and partially collapse into a dense **xerogel**.
   * **Supercritical drying $\rightarrow$ Aerogel:** Removing the pore fluid above its critical temperature and pressure inside an autoclave eliminates the liquid–vapour meniscus and capillary stress. This preserves the intact, highly porous solid skeleton as an ultra-low-density **aerogel** (for example, ethanol-exchanged silica gels are supercritically dried near the critical point of ethanol, around $241\,^\circ\text{C}$ and $78\text{ bar}$, though exact parameters depend on the pore solvent used).

5. **Calcination:** Thermal treatment selected for the material can remove residual organic groups, promote dehydration, and, where required, crystallize an amorphous precursor (such as converting amorphous $\text{TiO}_2$ gel into crystalline anatase/rutile nano-$\text{TiO}_2$).

### Controlling particle size and preventing agglomeration

Across all bottom-up wet-chemical syntheses, final nanoparticle dimensions depend on the competition between **nucleation** (birth of new seeds) and **growth** (addition of material to existing seeds). Separating nucleation from growth can help narrow the size distribution, though the result depends on growth kinetics, ripening and aggregation.

Reaction temperature, precursor concentration, and solution $\text{pH}$ govern these rates; for instance, acid-catalysed silica sol–gel favours weakly branched linear chains, whereas base catalysis produces compact spherical colloids. Because nanoparticles possess immense surface energy, bare particles spontaneously clump together (**agglomeration**) to minimize surface area. Steric polymers or electrostatic capping agents (like citrate) can be used during synthesis to create repulsive barriers that keep nanoparticles individually dispersed.

#### Example 1: Classifying nanoparticle synthesis routes

**Problem:** Classify each of the following processes as top-down or bottom-up, identify the primary chemical or physical mechanism, and state the chemical family of the final nanomaterial: (a) Planetary ball milling of graphite powder; (b) Heating aqueous $\text{AgNO}_3$ with trisodium citrate; (c) Reacting $\text{Ti(OC}_3\text{H}_7)_4$ with water followed by gelation and calcination at $500\,^\circ\text{C}$.

**Solution:**

1. **(a) Planetary ball milling of graphite:**
   * **Approach:** Top-down.
   * **Mechanism:** Mechanical attrition and shear fracture of bulk layered crystals into nanoscale platelets.
   * **Product family:** Carbon nanomaterial.

2. **(b) Reaction of $\text{AgNO}_3$ with trisodium citrate:**
   * **Approach:** Bottom-up.
   * **Mechanism:** Chemical reduction ($\text{Ag}^+ + e^- \rightarrow \text{Ag}^0$) accompanied by citrate electrostatic capping.
   * **Product family:** Zero-valent metallic nanoparticles (nano-$\text{Ag}$).

3. **(c) Reaction of $\text{Ti(OC}_3\text{H}_7)_4$ with water and calcination:**
   * **Approach:** Bottom-up.
   * **Mechanism:** Sol–gel synthesis involving alkoxide hydrolysis, polycondensation ($\text{Ti–O–Ti}$ network formation), drying, and thermal crystallization.
   * **Product family:** Metal oxide nanoparticles (crystalline nano-$\text{TiO}_2$).

### Self-check questions

1. **Question:** Why does supercritical drying of a wet silica gel yield an aerogel with much higher porosity than conventional evaporative drying?
   **Answer:** Supercritical drying removes the pore fluid above its critical temperature and pressure, avoiding a liquid–vapour interface. This eliminates capillary surface-tension forces that otherwise pull pore walls together during conventional evaporation (which forms a shrunken xerogel).

2. **Question:** What two roles does trisodium citrate play during the synthesis of silver nanoparticles from silver nitrate?
   **Answer:** It acts as a chemical reducing agent (reducing $\text{Ag}^+$ ions to neutral $\text{Ag}^0$ atoms) and as an electrostatic capping agent (adsorbing onto nanoparticle surfaces to prevent agglomeration).

<!-- page 3 | Graphene: structure, preparation, properties and uses -->

## Graphene: structure, preparation, properties and uses

### Structure and Bonding
Graphene is a two-dimensional crystalline allotrope of carbon consisting of a single layer of carbon atoms arranged in a planar hexagonal honeycomb lattice. It serves as the structural building block for other graphitic nanomaterials, including fullerenes, carbon nanotubes, and bulk three-dimensional graphite.

![Planar hexagonal honeycomb lattice of graphene showing carbon atoms connected by covalent bonds](/notes/cse/s1/chemistry/module-2/assets/page-054-image-1-code.svg)
*Figure 1: Two-dimensional hexagonal honeycomb lattice of monolayer graphene.*

Every carbon atom in the graphene lattice is $sp^2$ hybridized. Each atom forms three strong in-plane covalent $\sigma$ bonds with its three nearest neighbours at bond angles of $120^\circ$ and a carbon–carbon bond length of $0.142\text{ nm}$. This rigid $\sigma$-bond framework gives the sheet exceptional mechanical stability.

The remaining fourth valence electron occupies an unhybridized $2p_z$ orbital oriented perpendicular to the planar sheet. Lateral overlap of these out-of-plane $p_z$ orbitals across the lattice creates a delocalized $\pi$ electronic system consisting of a bonding valence band ($\pi$) and an antibonding conduction band ($\pi^*$). In ideal, neutral monolayer graphene at $0\text{ K}$, the $\pi$ valence band is completely filled and the $\pi^*$ conduction band is completely empty. These two bands touch at six discrete points at the corners of the Brillouin zone, known as Dirac points. Because there is no energy gap between the valence and conduction bands at the Dirac points, graphene is classified as a zero-bandgap semiconductor or a semimetal. Charge transport can occur via either electrons or holes, with the dominant carrier type controlled by chemical doping or electrostatic gating.

> **Watch out.** Student notes often state that the $\pi$ and $\pi^*$ orbitals form "two half-filled bands." Actually, the two-band system is half occupied overall, rather than both bands individually being half-filled; in neutral undoped graphene at absolute zero, the lower $\pi$ valence band is fully occupied and the upper $\pi^*$ conduction band is completely empty.

### Preparation Methods
Different synthesis routes yield graphene with varying flake sizes, defect densities, and scalability:

1. **Mechanical exfoliation (Scotch-tape method):** Repeatedly peeling bulk graphite using adhesive tape overcomes the weak van der Waals forces between stacked layers, leaving behind isolated single-layer graphene flakes. This yields pristine, low-defect crystals ideal for fundamental research, though the original adhesive-tape method has low throughput.
2. **Chemical vapour deposition (CVD):** A carbon-containing precursor gas such as methane ($\text{CH}_4$) is decomposed at high temperature over a catalytic transition-metal substrate (commonly copper or nickel). Carbon atoms dissolve into or adsorb onto the metal surface and reorganize into a continuous graphene film, which can then be transferred to insulating substrates.
3. **Thermal decomposition of silicon carbide ($\text{SiC}$):** Heating a single-crystal $\text{SiC}$ wafer to high temperatures under suitable vacuum or controlled-atmosphere conditions causes silicon atoms to sublime (evaporate) from the surface faster than carbon. The remaining surface carbon atoms rearrange into an epitaxial graphene layer directly on the wafer.
4. **Reduction of graphene oxide (GO):** Graphite is chemically oxidized and exfoliated into water-dispersible graphene oxide sheets, which are then treated with chemical reducing agents or thermal annealing. This produces reduced graphene oxide (rGO), a scalable bulk material that retains structural defects and residual oxygen functional groups rather than yielding pristine graphene.

| Synthesis Method | Principle | Product Quality & Scalability |
| :--- | :--- | :--- |
| **Mechanical exfoliation** | Peeling graphite layers with adhesive tape | Highest crystal quality; very low yield |
| **Chemical vapour deposition (CVD)** | Pyrolysis of hydrocarbon gas on $\text{Cu}$ or $\text{Ni}$ | Large-area continuous films; moderate cost |
| **Thermal decomposition of $\text{SiC}$** | Sublimation of $\text{Si}$ leaves surface $\text{C}$ to graphitize | Wafer-scale epitaxial films; high substrate cost |
| **Graphene oxide reduction** | Chemical or thermal reduction of exfoliated GO | High bulk scalability; defective rGO sheets |

### Key Properties
The properties of graphene depend strongly on sample purity, layer count, defect density, and substrate interactions:

- **Mechanical strength:** The short, rigid $0.142\text{ nm}$ in-plane $sp^2$ $\sigma$ bonds give defect-free monolayer graphene an extraordinarily high intrinsic tensile strength and Young's modulus, while allowing the sheet to flex out of plane without breaking.
- **Electrical and thermal transport:** Delocalized $\pi$ electrons and low-mass charge carriers near the Dirac points provide remarkably high room-temperature carrier mobility and electrical conductivity. Strong covalent bonding also enables efficient phonon transport, resulting in high in-plane thermal conductivity.
- **Optical transparency:** Despite its dense atomic packing, a single monolayer of graphene absorbs only about $2.3\%$ of incident visible light, making it highly transparent.
- **Specific surface area:** Because graphene is a single atom thick, every carbon atom lies on the surface and is exposed on both sides of the sheet, resulting in a very high theoretical specific surface area ($\approx 2630\text{ m}^2\text{ g}^{-1}$).

### Applications
- **Electronics and optoelectronics:** High optical transparency and low sheet resistance make graphene films attractive as flexible transparent conductive electrodes for touchscreens, liquid-crystal displays, and organic solar cells. While high carrier mobility enables ultra-high-frequency analog and radio-frequency transistors, the absence of an energy bandgap prevents pristine graphene transistors from switching off completely, limiting its direct use in standard digital logic gates.
- **Energy storage:** Graphene and rGO are widely incorporated into electrodes for supercapacitors, lithium-ion batteries, and fuel cells. The high accessible surface area supports rapid ion adsorption in supercapacitors, while the conductive carbon network lowers internal resistance and improves charge/discharge rates in composite battery electrodes.

> **Watch out.** Adding graphene to a battery electrode does not automatically increase its reversible storage capacity. Graphene primarily acts as a conductive, mechanically stable scaffold that accelerates electron transport and buffers volume changes during cycling.

- **Composites and coatings:** Well-dispersed graphene or rGO in suitable polymers, metals or coatings can improve mechanical stiffness, electrical conductivity, and barrier resistance against corrosive gases and moisture for aerospace and sporting goods.
- **Environmental membranes and filtration:** An ideal defect-free graphene sheet strongly blocks ordinary molecular permeation; defects and functionalization change this behaviour. However, engineering nanopores of controlled size into graphene sheets or stacking graphene oxide layers with defined interlayer channels produces selective membranes for water desalination, pollutant filtration, and gas separation.
- **Biomedical research:** Functionalized graphene derivatives are actively investigated for electrochemical biosensors and targeted drug-delivery carriers, where high surface area allows loading of aromatic chemotherapy molecules; clinical deployment requires careful control of flake size, surface chemistry, and long-term biocompatibility.

### Self-Check Questions
1. **Why is pristine monolayer graphene unsuited for conventional digital logic switches despite its high carrier mobility?**
   *Answer:* Pristine graphene is a zero-bandgap semimetal where the $\pi$ valence and $\pi^*$ conduction bands touch at the Dirac points. Without an energy bandgap, a graphene field-effect transistor cannot be completely switched "off," leading to high leakage currents.
2. **What happens during the thermal decomposition of $\text{SiC}$ to form graphene?**
   *Answer:* When $\text{SiC}$ is heated under ultra-high vacuum, silicon atoms sublime from the surface, and the remaining carbon atoms reorganize into a hexagonal graphene lattice.

<!-- page 4 | Fullerenes and the structure of C₆₀ -->

## Fullerenes and the structure of C₆₀

Fullerenes are discrete, zero-dimensional ($0\text{D}$) hollow closed-cage molecules composed entirely of carbon atoms. Unlike diamond or graphite, which form extended three-dimensional or layered networks, fullerenes exist as individual molecular cages ($\text{C}_{20}$, $\text{C}_{60}$, $\text{C}_{70}$, and higher homologues). The most abundant and thoroughly studied member of this family is buckminsterfullerene ($\text{C}_{60}$), often called a "buckyball" because its polyhedral cage resembles a standard soccer ball.

### Geometric Structure and Bonding in $\text{C}_{60}$

The $\text{C}_{60}$ molecule adopts the geometry of a **truncated icosahedron** (not a regular icosahedron, which has only 12 vertices and 20 triangular faces). A truncated icosahedron has $60$ equivalent vertices, $90$ edges, and $32$ faces consisting of $12$ regular pentagons and $20$ hexagons. A carbon atom occupies each of the $60$ vertices.

Every carbon atom in $\text{C}_{60}$ is three-coordinate, bonded to three neighboring carbon atoms at the junction of one pentagon and two hexagons. In a flat graphene sheet, three-coordinate carbon is purely $sp^2$ hybridized with $120^\circ$ bond angles. In a closed spherical cage, however, the pentagonal rings introduce curvature ($108^\circ$ interior angles in a regular pentagon). This forces the carbon network to bend out of plane—a geometric distortion known as **pyramidalization**. Consequently, every carbon atom in $\text{C}_{60}$ exhibits a curved, $sp^2$-like hybridization with a slight $sp^3$ character due to curvature, rather than the molecule containing a mixture of separate $sp^2$ and $sp^3$ carbon atoms.

Because of this cage topology, $\text{C}_{60}$ has two distinct types of covalent carbon–carbon bonds:
* **$[6,6]$ bonds:** Located at the fusion of two hexagonal rings ($30$ such edges in $\text{C}_{60}$). These bonds are shorter (approx. $1.39\text{ \AA}$) and possess significant double-bond character.
* **$[5,6]$ bonds:** Located at the fusion of a pentagonal ring and a hexagonal ring ($60$ such edges in $\text{C}_{60}$). These bonds are longer (approx. $1.45\text{ \AA}$) and possess mostly single-bond character.

The two edge environments produce different bond orders and lengths within the cage’s electronic structure. Therefore, $\text{C}_{60}$ does not have equal bond lengths throughout and is not uniformly delocalized like benzene.

![Buckminsterfullerene C60 truncated icosahedron structure with pentagons and hexagons](/notes/cse/s1/chemistry/module-2/assets/fullerene-c60.svg)
*Figure: Truncated icosahedral structure of buckminsterfullerene ($\text{C}_{60}$) showing 12 pentagonal rings, 20 hexagonal rings, short $[6,6]$ double bonds, and long $[5,6]$ single bonds.*

> **Watch out.** Not all fullerenes contain 20 hexagons. By Euler's polyhedron theorem, any closed trivalent carbon cage built exclusively from pentagons and hexagons must contain **exactly 12 pentagons**, while the number of hexagons varies with molecular size (for example, $\text{C}_{70}$ has 12 pentagons and 25 hexagons, whereas $\text{C}_{20}$ has 12 pentagons and zero hexagons).

#### Example 1: Topological verification of the $\text{C}_{60}$ cage (Illustrative learning example)

**Problem:** Assuming $\text{C}_{60}$ is a closed convex polyhedron where every carbon vertex ($V = 60$) is shared by exactly three edges and all faces are either pentagons ($p$) or hexagons ($h$), calculate the total number of edges ($E$), total faces ($F$), pentagonal faces ($p$), and hexagonal faces ($h$).

**Solution:**
1. Since each of the $60$ vertices connects to $3$ edges, and each edge connects $2$ vertices:
   $$
   E = \frac{3V}{2} = \frac{3 \times 60}{2} = 90\text{ edges}
   $$
2. Apply Euler's theorem for a closed convex polyhedron ($V - E + F = 2$):
   $$
   60 - 90 + F = 2 \implies F = 32\text{ total faces}
   $$
3. Express total faces and edges in terms of $p$ pentagons and $h$ hexagons (each shared edge belongs to $2$ faces):
   $$
   p + h = 32
   $$
   $$
   5p + 6h = 2E = 180
   $$
4. Substitute $h = 32 - p$ into the edge equation:
   $$
   5p + 6(32 - p) = 180 \implies 192 - p = 180 \implies p = 12\text{ pentagons}
   $$
5. Solve for $h$:
   $$
   h = 32 - 12 = 20\text{ hexagons}
   $$

### Preparation of $\text{C}_{60}$

Fullerenes are synthesized by high-temperature vaporization of graphite in an inert atmosphere:
1. **Vaporization:** An electric arc is struck between high-purity graphite electrodes inside a chamber filled with low-pressure inert helium ($\text{He}$) gas.
2. **Condensation:** The intense heat vaporizes carbon into reactive clusters that cool and condense in the helium buffer gas to form fullerene-rich soot (containing mostly $\text{C}_{60}$, smaller amounts of $\text{C}_{70}$, and higher fullerenes).
3. **Extraction:** Fullerenes are separated from insoluble graphitic soot by solvent extraction using an organic solvent such as toluene or benzene.
4. **Purification:** Pure $\text{C}_{60}$ is isolated from the extracted fullerene mixture by column chromatography on alumina or silica stationary phases.

### Properties of $\text{C}_{60}$

| Property Category | Key Characteristics |
| :--- | :--- |
| **Physical state & Solubility** | Dark crystalline powder at room temperature; sparingly soluble in aromatic solvents, forming a characteristic magenta/violet solution in benzene or toluene. |
| **Mechanical behavior** | Individual $\text{C}_{60}$ cages are resilient to compression, but bulk solid $\text{C}_{60}$ (fullerite) is a soft molecular solid held together by weak van der Waals forces. |
| **Optical absorption** | Absorbs strongly in the ultraviolet (UV) region and moderately across the visible spectrum due to electronic $\pi \rightarrow \pi^*$ transitions. |
| **Electrical & Redox behavior** | Pristine solid $\text{C}_{60}$ is a poor electrical conductor (wide-gap semiconductor/insulator). However, the cage is a strong electron acceptor (accepting up to 6 electrons). Intercalating alkali metals into the lattice yields alkali-doped fullerides ($\text{A}_3\text{C}_{60}$, such as $\text{K}_3\text{C}_{60}$), some of which become metallic and exhibit superconductivity at cryogenic temperatures. |

> **Watch out.** Standard solid $\text{C}_{60}$ is **not** harder than diamond or steel. While an individual $\text{C}_{60}$ cage resists deformation, the bulk solid consists of discrete molecules bound by weak intermolecular forces and is easily sheared.

### Applications

* **Organic photovoltaics and electronics:** Functionalized fullerene derivatives (such as PCBM) are widely used as electron-accepting materials in bulk-heterojunction organic solar cells and organic photodetectors.
* **Lubricants and protective coatings:** Because spherical $\text{C}_{60}$ molecules interact weakly with one another, they can act like molecular ball bearings in solid lubricant additives and wear-resistant surface coatings.
* **Catalysis and chemical sensors:** Fullerenes serve as electron-transfer mediators in heterogeneous catalysis and as active sensing layers for detecting volatile organic compounds or environmental pollutants.
* **Biomedical research:** Pristine $\text{C}_{60}$ is hydrophobic and poorly water-soluble. Chemically modified forms are a research topic: water-soluble fullerene derivatives and endohedral metallofullerenes (such as gadolinium-encapsulated cages, $\text{Gd@C}_{82}$) are investigated in research settings as radical-scavenging antioxidants, photosensitizers for photodynamic therapy, targeted drug-delivery carriers, and magnetic resonance imaging (MRI) contrast agents.

### Self-Check Questions

1. **Why does $\text{C}_{60}$ exhibit two different carbon–carbon bond lengths instead of a single uniform bond length like benzene?**
   *Answer:* In $\text{C}_{60}$, bonds sit in two geometrically distinct environments: $[6,6]$ junctions between two hexagons and $[5,6]$ junctions between a pentagon and a hexagon. The $[6,6]$ edges have greater double-bond character and are shorter, while the $[5,6]$ edges are longer. This does not imply that all cage bonds have equal aromatic bond order.
2. **How does doping with potassium change the electrical behavior of solid $\text{C}_{60}$?**
   *Answer:* Pristine solid $\text{C}_{60}$ is an electrical insulator/semiconductor with localized molecular orbitals, but potassium atoms transfer valence electrons into the $\text{C}_{60}$ conduction band to form the ionic fulleride salt $\text{K}_3\text{C}_{60}$, which conducts electricity and becomes superconducting at low temperatures.

<!-- page 5 | Carbon nanotubes: structure, chirality and applications -->

## Carbon nanotubes: structure, chirality and applications

Carbon nanotubes (CNTs) are one-dimensional cylindrical allotropes of $sp^2$-hybridized carbon. While their outer diameters lie in the nanoscale ($1\text{ nm}$ to $50\text{ nm}$), their lengths can reach several micrometres or millimetres, creating exceptionally high aspect ratios. Structurally, a carbon nanotube is conceptualized as a single-atom-thick graphene sheet rolled into a seamless hollow cylinder. This rolling is strictly a geometric model used to describe bond orientation; in practice, CNTs are not manufactured by mechanically rolling flat graphene sheets.

### Structural Classification: SWCNTs and MWCNTs

Carbon nanotubes are categorized by the number of concentric graphitic walls present in the cylinder.

* **Single-Walled Carbon Nanotubes (SWCNTs):** Consist of a single seamless graphene cylinder with typical diameters of $0.8\text{ nm}$ to $2\text{ nm}$.
* **Multi-Walled Carbon Nanotubes (MWCNTs):** Consist of multiple nested graphene cylinders with outer diameters ranging from $2\text{ nm}$ to $50\text{ nm}$ and an interlayer spacing of approximately $0.34\text{ nm}$ (close to that of graphite).

In structural descriptions, standard MWCNTs follow the **Russian Doll model**, where discrete concentric cylinders of increasing diameter are nested inside one another. Introductory texts often mention a **Parchment (or scroll) model**, in which a single graphene sheet is spirally wound around itself like a rolled scroll of paper, and a **Mixed model** combining both features. Strictly speaking, a spirally wound sheet is a distinct nanostructure called a *carbon nanoscroll* (which has open edges rather than closed seamless walls), though it is informally grouped with MWCNTs in basic classifications.

![Structural classification of carbon nanotubes into SWCNTs and MWCNTs](/notes/cse/s1/chemistry/module-2/assets/cnt-classification.svg)
*Figure: Classification tree of single-walled carbon nanotubes (SWCNTs: armchair, zigzag, chiral) and multi-walled carbon nanotubes (MWCNTs: Russian doll, parchment, mixed).*

### Chirality and Electronic Behaviour

The electronic properties of an SWCNT depend on the direction in which the conceptual graphene sheet is rolled, defined by the **chiral vector** ($\mathbf{C}_h$):

$$
\mathbf{C}_h = n\mathbf{a}_1 + m\mathbf{a}_2
$$

Here, $\mathbf{a}_1$ and $\mathbf{a}_2$ are the unit vectors of the hexagonal graphene lattice, and $(n, m)$ are non-negative integers ($0 \le m \le n$, with $n>0$) called chiral indices. The magnitude of $\mathbf{C}_h$ sets the circumference of the nanotube.

| Geometry | Chiral Indices $(n, m)$ | Chiral Angle ($\theta$) | Cross-Sectional Edge Pattern | Electronic Character (Zone-Folding Rule) | Concrete Example |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Armchair** | $n = m$ | $30^\circ$ | Symmetrical armchair | Truly metallic (zero band gap) | $(5, 5)$ — Metallic |
| **Zigzag** | $m = 0$ | $0^\circ$ | Symmetrical zigzag | Metallic if $n$ is a multiple of $3$; otherwise semiconducting | $(10, 0)$ — Semiconducting; $(9, 0)$ — Quasi-metallic |
| **Chiral** | $n \neq m,\, m \neq 0$ | $0^\circ < \theta < 30^\circ$ | Helical twist | Metallic if $(n - m)$ is a multiple of $3$; otherwise semiconducting | $(7, 4)$ — Quasi-metallic; $(8, 3)$ — Semiconducting |

Confining electrons around the narrow circumference quantizes their allowed wavevectors. In the simple zone-folding approximation, an SWCNT is metallic whenever:

$$
(n - m) = 3k \quad (k \in \mathbb{Z})
$$

> **Watch out.** Do not assume that all chiral $(n \neq m)$ nanotubes are semiconductors, or that every tube satisfying $(n-m)=3k$ is an ideal metal. Only **armchair** $(n=m)$ nanotubes are metallic in the ideal unperturbed model because their symmetry prevents the usual curvature-induced gap. In non-armchair tubes where $(n-m)=3k$, the mechanical curvature of small-diameter walls slightly misaligns the $\pi$-orbitals, opening a tiny secondary band gap and making them *quasi-metallic* (narrow-gap semiconductors).

#### Example 1: Classifying SWCNTs by Chiral Indices

Determine the geometric class and electronic character of $(6,6)$, $(8,0)$, and $(9,0)$ single-walled carbon nanotubes.

**Solution:**

1. **For $(6,6)$:** Since $n = m = 6$, this is an **armchair** nanotube. Applying the rule gives $n - m = 6 - 6 = 0$, which is divisible by $3$. Because armchair symmetry prevents curvature-induced band gaps, the $(6,6)$ tube is **truly metallic**.
2. **For $(8,0)$:** Since $m = 0$, this is a **zigzag** nanotube. Here, $n - m = 8 - 0 = 8$, which is not divisible by $3$. The $(8,0)$ tube is **semiconducting**.
3. **For $(9,0)$:** Since $m = 0$, this is a **zigzag** nanotube. Here, $n - m = 9 - 0 = 9$, which is a multiple of $3$. It is **nominally metallic** by zone folding, though tube curvature opens a very small band gap (quasi-metallic).

### Synthesis, Properties and Applications

CNTs are synthesized using three primary routes:

1. **Chemical Vapour Deposition (CVD):** Catalytic decomposition of a hydrocarbon gas (such as methane, ethylene, or acetylene) over transition-metal catalyst nanoparticles ($\text{Fe}$, $\text{Co}$, or $\text{Ni}$) at $600\text{--}1000\text{ }^\circ\text{C}$. CVD is the standard commercial method because it allows scalable growth and control over alignment.
2. **Arc Discharge:** Vaporizing graphite electrodes via a high-current electric arc in an inert helium atmosphere.
3. **Laser Ablation:** Vaporizing a metal-doped graphite target inside a high-temperature furnace using pulsed laser irradiation.

#### Anisotropic Properties

Because strong covalent $sp^2$ $\text{C–C}$ bonds run along the tube axis while only weak van der Waals forces act between adjacent tubes, CNT properties are highly **anisotropic** (direction-dependent).

* **Mechanical:** Individual defect-free CNTs exhibit high axial Young's modulus ($\sim 1\text{ TPa}$) and tensile strength ($10\text{--}60\text{ GPa}$) at low mass density ($\sim 1.3\text{--}1.4\text{ g cm}^{-3}$, roughly one-sixth to one-fourth that of steel). Bulk CNT fibres are weaker than ideal individual tubes because tubes slide past one another.
* **Electrical and Thermal:** Metallic SWCNTs support nearly ballistic axial electron transport and high axial thermal conductivity, whereas transport perpendicular to the tube axis is poor. Real device conductivity depends strongly on tube diameter, chirality, lattice defects, and metal contact resistance.

> **Watch out.** Avoid unconditional claims that CNTs are "100 times stronger than steel" or "better conductors than all metals" in bulk form. Such comparisons depend on the specimen, reference material and measurement; bulk bundles and composites are limited by defects and tube-to-tube contact resistance.

#### Practical Applications

* **Structural Composites:** Dispersed in polymers for lightweight aerospace, automotive, and sporting components, as well as antistatic and electromagnetic-shielding coatings.
* **Energy and Electronics:** Conductive additives in lithium-ion battery electrodes and supercapacitors, transparent conductive films, and field-effect transistor (FET) channels.
* **Sensing and Microscopy:** High-aspect-ratio cantilevers and probe tips in **Atomic Force Microscopy (AFM)** for high-resolution imaging of biomolecules such as DNA and proteins, as well as electrochemical gas and biosensors.
* **Emerging Research:** Investigated as high-surface-area adsorbents for gas/hydrogen storage, water purification membranes, and functionalised carriers for targeted drug delivery (requiring surface modification to control toxicity and biodistribution).

### Self-Check Questions

1. **Why can ideal $(7,7)$ and $(9,0)$ nanotubes have different band-gap behaviour even though $(n-m)$ is divisible by $3$ for both?**
   *Answer:* The $(7,7)$ tube has armchair symmetry ($n=m$), which preserves a zero band gap in the ideal unperturbed model. The $(9,0)$ zigzag tube suffers from curvature-induced $\pi$-orbital misalignment, which opens a small band gap.
2. **Why are the mechanical strength and electrical conductivity of carbon nanotubes much higher along the tube axis than perpendicular to it?**
   *Answer:* Along the tube axis, atoms are linked by strong covalent $sp^2$ bonds and continuous delocalized $\pi$-electron networks, whereas adjacent tubes interact only through weak van der Waals forces.

<!-- page 6 | Carbon quantum dots and applications of nanomaterials -->

## Carbon quantum dots and applications of nanomaterials

### Carbon quantum dots (CQDs): structure and emission

Carbon quantum dots (CQDs) are zero-dimensional, quasi-spherical carbon nanoparticles that are typically smaller than $10\text{ nm}$. Within the broader family of carbon dots, true CQDs usually possess a crystalline graphitic ($sp^2$) core, whereas related carbon nanodots may have an amorphous or mixed $sp^2/sp^3$ carbon core. Surfaces often carry oxygen- or nitrogen-containing functional groups (such as $-\text{OH}$, $-\text{COOH}$, and $-\text{NH}_2$), which impart water dispersibility and provide sites for chemical passivation.

Unlike conventional inorganic semiconductor quantum dots, not all carbon dots share a single light-emission mechanism. Depending on the synthesis route and surface passivation, emission can arise from quantum confinement in conjugated $\pi$-domains, surface-defect trap states, or embedded molecular fluorophores.

CQDs absorb strongly in the ultraviolet (UV) region due to $\pi \rightarrow \pi^*$ and $n \rightarrow \pi^*$ electronic transitions, and emit tunable visible light. When excited by external light, they exhibit **photoluminescence** (including fluorescence). Under specific chemical redox reactions, certain functionalized CQDs can also participate in **chemiluminescence**, where the energy for light emission comes from a chemical reaction rather than absorbed photons.

> **Watch out.** Do not assume that all carbon quantum dots emit purely by size-dependent quantum confinement or that they automatically glow without an excitation source. Photoluminescence requires light absorption, chemiluminescence requires a specific chemical reaction, and surface functional groups often dominate the emission wavelength.

### Synthesis of CQDs

CQDs are prepared by two general strategies:

1. **Top-down methods** cleave larger carbon structures (such as graphite, carbon nanotubes, or activated carbon) into nanoscale fragments using electrochemical oxidation, laser ablation, or arc discharge.
2. **Bottom-up methods** assemble CQDs from small organic precursors (such as citric acid, glucose, or urea) via hydrothermal treatment, microwave-assisted pyrolysis, or thermal carbonization.

Although CQDs avoid toxic heavy metals and often show good biocompatibility, they cannot be declared universally safe; toxicity and environmental impact must still be assessed for each specific surface chemistry and dosage.

### Comparing nanoscale optical materials

Reducing particle size into the $1\text{–}100\text{ nm}$ regime alters optical behavior, but the underlying physics depends on the material class.

| Material class | Typical example | Primary optical mechanism | Key chemical consideration |
| :--- | :--- | :--- | :--- |
| Semiconductor quantum dots | $\text{CdSe}$, $\text{CdTe}$ | Size-dependent quantum confinement across a bandgap | High luminescence efficiency, but $\text{Cd}^{2+}$ ions pose severe toxicity risks |
| Metal nanoparticles | Colloidal $\text{Au}$, $\text{Ag}$ | Localized surface plasmon resonance (collective electron oscillation) | Size and shape tune absorption color (e.g., ruby-red gold glass) |
| Carbon quantum dots | Surface-passivated CQDs | Combined core confinement, surface states, and molecular states | Heavy-metal-free and tunable, though quantum yield varies with passivation |

> **Watch out.** Source notes often group gold ($\text{Au}$) and cadmium selenide ($\text{CdSe}$) nanoparticles together as colorants. Gold nanoparticles color glass via **surface plasmon resonance**, whereas $\text{CdSe}$ and $\text{CdTe}$ nanocrystals show size-tunable emission via **quantum confinement** and contain cadmium, requiring careful assessment of exposure and disposal.

### Applications of nanomaterials

When bulk materials are reduced to the nanoscale, the fraction of atoms residing at the surface increases sharply. This high surface-to-volume ratio, combined with tunable electronic and mechanical traits, drives applications across several engineering sectors:

- **Catalysis:** Selected metal, metal-oxide or supported nanocatalysts provide accessible active sites. Their chemistry can lower the activation barrier for particular industrial or environmental reactions; high surface area alone does not make every nanoparticle a catalyst.
- **Gas sensors:** Nano-sized metal oxides provide large reactive surface areas where adsorbed gas molecules transfer charge, producing rapid, measurable changes in electrical resistance.
- **Electronics and optoelectronics:** Carbon nanotubes, fullerenes, and quantum dots enable component miniaturization, flexible circuits, high-resolution displays, light-emitting diodes (LEDs), paper batteries, and window or photoactive layers in solar cells.
- **Coatings and structural reinforcement:** Dispersing carbon nanomaterials (such as carbon black or nanotubes) into elastomers improves mechanical strength, wear resistance, and thermal conductivity in synthetic tyres.
- **Environmental remediation:** Suitable membranes and adsorbents separate or capture contaminants, while selected nanocatalysts can degrade some organic pollutants. Adsorption and degradation are different processes.
- **Biomedicine:** Functionalized nanoparticles and fluorescent dots are investigated for bioimaging, sensing and delivery. Suitability depends on the formulation and biological evidence; it cannot be assumed from nanoscale size alone.

In every application, performance depends on maintaining uniform nanoparticle dispersion; agglomeration reduces active surface area and degrades optical or mechanical properties.

### Self-check questions

1. **Why do gold nanoparticles and $\text{CdSe}$ quantum dots produce size-dependent colors through different physical mechanisms?**
   *Answer:* Gold nanoparticles are metallic and absorb specific wavelengths via localized surface plasmon resonance, whereas $\text{CdSe}$ is a semiconductor whose bandgap energy shifts with crystal size due to quantum confinement.
2. **How does a high surface-to-volume ratio improve both heterogeneous catalysis and gas sensing?**
   *Answer:* It exposes a much larger fraction of reactive surface atoms per unit mass, providing more active sites for catalytic bond breaking and more adsorption sites for gas molecules to alter electrical conductivity.

<!-- page 7 | Polymer fundamentals and flame retardancy -->

## Polymer fundamentals and flame retardancy

Polymers are macromolecules of high molecular mass built by covalently linking numerous small reactive molecules called **monomers**. The structural unit enclosed in brackets that repeats along the chain is the **repeat unit**, and the number of repeat units $n$ is the degree of polymerization. Depending on monomer identity and polymerization mechanism, polymers are classified into distinct structural and kinetic groups.

| Classification Basis | Category | Definition | Common Examples |
| :--- | :--- | :--- | :--- |
| **Monomer Identity** | **Homopolymer** | Derived from a single monomer species with one repeating unit. | Polyethylene (PE, $-[\text{CH}_2-\text{CH}_2]_n-$), Polyvinyl chloride (PVC, $-[\text{CH}_2-\text{CHCl}]_n-$) |
| **Monomer Identity** | **Copolymer** | Synthesized from two or more distinct monomers linked in the same chain. | Styrene–butadiene rubber (SBR), Acrylonitrile–butadiene–styrene (ABS) |
| **Growth Mechanism** | **Addition (Chain-Growth)** | Monomers add sequentially to an active site without losing atoms; repeat mass equals monomer mass. | Polyethylene, PVC, Polystyrene ($-[\text{CH}_2-\text{CH}(\text{C}_6\text{H}_5)]_n-$) |
| **Growth Mechanism** | **Condensation (Step-Growth)** | Multifunctional monomers react stepwise, typically eliminating a small molecule like $\text{H}_2\text{O}$ or $\text{HCl}$. | Nylon 6,6, Bakelite (note: some step-growth polymers like polyurethanes form without eliminating a small molecule) |

### Flame-Retardant Polymer Systems

Most commodity hydrocarbon polymers—such as polyethylene, polypropylene ($-[\text{CH}_2-\text{CH}(\text{CH}_3)]_n-$), and polystyrene—pyrolyze easily into volatile fuels and burn rapidly. **Flame-retardant polymer systems** are engineered to resist ignition, slow flame spread, and reduce heat release rates in electronics, aerospace, and construction. No organic polymer is completely "fireproof" under extreme heat, and flame resistance does not automatically guarantee low or non-toxic smoke.

> **Watch out.** Do not confuse inherently flame-retardant polymers with flame-retardant additives. Inherently resistant polymers have thermally stable backbones or covalently bound halogens, whereas additives are separate inorganic fillers or small organic molecules blended into flammable host resins.

### Physical and Condensed-Phase Retardancy Mechanisms

Flame retardants interrupt the combustion cycle in the condensed (solid) phase or gas phase through three primary physical and chemical pathways:

1. **Protective Char and Mass/Heat Barrier:** Aromatic and heterocyclic polymers crosslink during pyrolysis to form a rigid carbonaceous char layer. This insulating barrier blocks oxygen diffusion to the underlying fuel and slows the escape of flammable pyrolysis gases.
2. **Endothermic Cooling and Dilution:** Inorganic hydroxide fillers, most notably **aluminium hydroxide** (alumina trihydrate, ATH), decompose endothermically when heated:

$$
2\text{Al(OH)}_3(\text{s}) \xrightarrow{\Delta} \text{Al}_2\text{O}_3(\text{s}) + 3\text{H}_2\text{O}(\text{g})
$$

   Here $\Delta$ denotes thermal energy absorbed from the polymer matrix. This endothermic reaction absorbs heat and can delay further heating and pyrolysis, leaves a protective $\text{Al}_2\text{O}_3$ ceramic ash, and releases water vapour that dilutes combustible gases and oxygen in the flame zone.
3. **Intumescence:** Phosphorus–nitrogen additives (such as ammonium polyphosphate combined with nitrogen-rich char formers) decompose to generate phosphoric acid derivatives that catalyse charring while releasing non-flammable gases ($\text{NH}_3$, $\text{H}_2\text{O}$). The softening char swells into a thick, multicellular **intumescent foam** that insulates the underlying polymer.

### Non-Halogenated Flame-Retardant Polymers

Non-halogenated systems rely on high bond dissociation energies, rigid aromatic rings, or inorganic backbones rather than halogen radical chemistry. While individual formulations must still pass specific fire certifications, several polymer classes exhibit strong intrinsic thermal resistance:

* **Phenolic Resins (Novolac and Bakelite):** Acid-catalysed condensation of phenol with formaldehyde yields **novolac**, a linear thermoplastic prepolymer. Heating novolac with a crosslinking agent (such as hexamethylenetetramine) cures it into **Bakelite**, an infusible, three-dimensional thermoset network whose dense aromatic structure yields high char upon heating.
* **Aromatic Heterocyclic Polymers:** **Polyimides** and **polybenzoxazoles (PBO)** possess rigid, resonance-stabilized ring systems along their main chains. They resist thermal cleavage up to very high temperatures and can form protective carbonaceous char under suitable decomposition conditions.
* **Silicones (Polysiloxanes):** Built on an inorganic $-[\text{Si(R)}_2-\text{O}]_n-$ backbone, silicones oxidize in a fire to form a non-combustible, thermally insulating **silica ($\text{SiO}_2$) ash** layer on the surface.

![Representative structures of non-halogenated thermally resistant polymers](/notes/cse/s1/chemistry/module-2/assets/fire-retardant-polymers.svg)
*Figure 1: Idealized schematic repeat units and structural motifs of representative non-halogenated polymers (curing networks and copolymer ratios are simplified).*

### Halogenated Polymers and Gas-Phase Radical Scavenging

Halogenated systems incorporate chlorine or bromine either covalently along the polymer backbone—as in **polyvinyl chloride (PVC)**, **neoprene** (polychloroprene), and **poly(bromostyrene)**—or as blended small-molecule additives such as **polybrominated diphenyl ethers (PBDEs)** and **polychlorinated diphenyl ethers (PCDEs)**. Note that **brominated butyl rubber** contains only a small mole fraction of bromine introduced primarily to promote vulcanization (curing) rather than to make the bulk elastomer inherently self-extinguishing.

![Representative chemical structures of halogenated polymers and additives](/notes/cse/s1/chemistry/module-2/assets/halogenated-polymers.svg)
*Figure 2: Representative halogenated polymers (PVC, Neoprene, Polybromostyrene, BIIR) and flame-retardant ether additives (PBDE, PCDE).*

```chem
pvc
```

```chem
neoprene
```

> **Watch out.** Hydrocarbon flames propagate via high-energy chain-branching radicals ($\text{H}^\bullet$ and $\text{OH}^\bullet$). Halogenated polymers do not simply recombine $\text{Cl}^\bullet$ or $\text{Br}^\bullet$ with $\text{OH}^\bullet$ to form stable $\text{HOCl}$ or $\text{HOBr}$; instead, they release hydrogen halides ($\text{HX}$, where $\text{X} = \text{Cl}$ or $\text{Br}$) that catalyse radical scavenging in the gas phase.

During combustion, thermal decomposition and dehydrohalogenation can release hydrogen halides ($\text{HX}$) into the flame zone:

1. **Radical Scavenging:** Hydrogen halide reacts with the highly reactive chain-propagating radicals $\text{H}^\bullet$ and $\text{OH}^\bullet$, replacing them with much less reactive halogen radicals $\text{X}^\bullet$ (with bromine being markedly more effective than chlorine due to weaker $\text{C}-\text{Br}$ and $\text{H}-\text{Br}$ bonds):

$$
\text{H}^\bullet + \text{HBr} \rightarrow \text{H}_2 + \text{Br}^\bullet
$$

$$
\text{OH}^\bullet + \text{HBr} \rightarrow \text{H}_2\text{O} + \text{Br}^\bullet
$$

2. **Halogen Halide Regeneration:** The low-energy $\text{Br}^\bullet$ radical abstracts a hydrogen atom from a gaseous fuel molecule ($\text{RH}$), regenerating $\text{HBr}$ to continue the inhibition cycle:

$$
\text{Br}^\bullet + \text{RH} \rightarrow \text{HBr} + \text{R}^\bullet
$$

Although elementary radical recombination steps (not shown) are required to achieve net radical termination, replacing energetic $\text{H}^\bullet$ and $\text{OH}^\bullet$ carriers with sluggish $\text{Br}^\bullet$ radicals sharply reduces the rate of exothermic chain branching and quenches the flame. However, incomplete combustion and $\text{HX}$ evolution often increase dark smoke and produce corrosive, toxic acidic fumes ($\text{HCl}$, $\text{HBr}$), creating an engineering trade-off between ignition resistance and smoke hazard.

#### Example 1: Classifying Flame-Retardant Mechanisms in Electronic Enclosures

**Problem:** An electronics manufacturer evaluates three materials for circuit-board housings: (a) cured phenolic resin (Bakelite), (b) polypropylene filled with $\text{Al(OH)}_3$, and (c) poly(bromostyrene). Identify the primary phase of action (condensed vs gas phase) and the dominant flame-retardant mechanism for each.

**Solution:**
1. **Cured phenolic resin (Bakelite):** Acts in the **condensed phase**. Its dense aromatic network crosslinks upon heating to form an insulating carbonaceous **char barrier** that blocks oxygen ingress and heat transfer.
2. **Polypropylene with $\text{Al(OH)}_3$ (ATH):** Acts in both the **condensed and gas phases**. ATH decomposes endothermically ($2\text{Al(OH)}_3 \rightarrow \text{Al}_2\text{O}_3 + 3\text{H}_2\text{O}$), **cooling** the solid polymer, forming a ceramic $\text{Al}_2\text{O}_3$ barrier, and releasing water vapour to **dilute** flame gases.
3. **Poly(bromostyrene):** Acts primarily in the **gas phase**. Pyrolysis releases $\text{HBr}$, which scavenges high-energy $\text{H}^\bullet$ and $\text{OH}^\bullet$ flame radicals and replaces them with less reactive $\text{Br}^\bullet$ radicals.

### Self-Check Questions

1. **Question:** Why does neat polyethylene being non-halogenated not make it inherently flame retardant?
   **Answer:** Polyethylene ($-[\text{CH}_2-\text{CH}_2]_n-$) lacks halogen atoms, but its aliphatic $\text{C}-\text{C}$ and $\text{C}-\text{H}$ bonds cleave readily upon heating into volatile, flammable hydrocarbon fragments without forming protective char.
2. **Question:** How does novolac differ structurally from Bakelite, and why is curing required for high-temperature electronic applications?
   **Answer:** Novolac is a linear, fusible thermoplastic prepolymer that softens when heated, whereas curing crosslinks novolac chains into Bakelite—a rigid, infusible 3D thermoset network that retains structural integrity and chars rather than melting in a fire.

<!-- page 8 | Conducting polymers: conjugation, doping and composites -->

## Conducting polymers: conjugation, doping and composites

### Conjugated Backbones and Electronic Structure
Conventional organic polymers such as polyethylene contain only saturated $\sigma$ bonds with tightly localized electrons, making them electrical insulators. In contrast, **intrinsically conducting polymers** (such as polyacetylene, polypyrrole, and polyaniline) possess an extended conjugated backbone of alternating single and double bonds, such as $(-\text{CH}=\text{CH}-)_n$ in polyacetylene.

Each $sp^2$-hybridized carbon atom along this backbone contributes an unhybridized $p_z$ orbital perpendicular to the chain axis. Continuous lateral overlap of these $p_z$ orbitals delocalizes $\pi$ electrons along the polymer segment, creating a filled **valence band** ($\pi$-bonding orbitals) and an empty **conduction band** ($\pi^*$-antibonding orbitals).

```chem
polyacetylene
```

> **Watch out.** The **band gap** ($E_g$) separating the valence and conduction bands is an *energy difference* measured in electron-volts ($\text{eV}$), not a physical spatial distance. Furthermore, conjugation alone does not make a polymer metallic: because of bond-length alternation (Peierls distortion), undoped conjugated polymers typically have significant band gaps ($1.5\text{--}3.0\text{ eV}$) and behave as low-conductivity semiconductors or insulators at room temperature.

### Doping and Charge Transport
To achieve high electrical conductivity, a conjugated polymer must undergo **doping**—the introduction of mobile charge carriers along the backbone, balanced by counter-ions to maintain overall electrical neutrality. Unlike conventional substitutional doping of inorganic semiconductors, polymer doping often involves a **redox process** or an **acid–base protonation**.

1. **p-type (oxidative) doping:** An oxidizing agent removes $\pi$ electrons from the polymer valence band, generating positively charged carriers on the chain ($\text{P}^{n+}$) balanced by dopant counter-anions ($\text{A}^-$):

$$
\text{P} \longrightarrow \text{P}^{n+} + n e^-
$$

   Common oxidative dopants include iodine ($\text{I}_2$) and iron(III) chloride ($\text{FeCl}_3$). Although $\text{FeCl}_3$ and $\text{AlCl}_3$ are Lewis acids, p-doping fundamentally requires electron *oxidation*; not every Lewis acid can oxidize a polymer backbone unless a suitable oxidizing pathway is present.
2. **n-type (reductive) doping:** A strong reducing agent (electron donor) such as sodium naphthalenide ($\text{Na}^+[\text{C}_{10}\text{H}_8]^{\bullet -}$) injects electrons into the conduction band, creating negatively charged chains ($\text{P}^{n-}$) balanced by counter-cations ($\text{M}^+$):

$$
\text{P} + n\text{M}^+ + n\text{e}^- \longrightarrow (\text{M}^+)_n\text{P}^{n-}
$$

   Describing sodium naphthalenide merely as a Lewis base is imprecise; it functions here as a one-electron reducing agent.
3. **Acid–base (protonic) doping:** In heteroaromatic polymers with basic nitrogen sites, such as polyaniline (PANI), treating the half-oxidized emeraldine base with a protic acid (e.g., $\text{HCl}$) protonates the imine nitrogens. This increases conductivity by orders of magnitude *without* changing the average oxidation state of the polymer chain.

![Mechanism of p-type and n-type doping of polyacetylene](/notes/cse/s1/chemistry/module-2/assets/polyacetylene-doping.svg)
*Figure: Simplified schematic of p-type oxidative doping and n-type reductive doping on a polyacetylene segment. Note that required counter-anions (for p-doping) and counter-cations (for n-doping) are omitted from this backbone view.*

When a charge is added to or removed from a polymer chain, the surrounding bond lengths locally relax around the charge. Depending on backbone symmetry, these charge-coupled lattice deformations form quasi-particles such as **polarons** (radical ions, carrying spin $\frac{1}{2}$ and charge $\pm e$), **bipolarons** (spinless dications or dianions of charge $\pm 2e$), or, in degenerate ground-state polymers like *trans*-polyacetylene, **solitons** (neutral radicals or spinless charged domain walls).

Macroscopic current requires two transport steps:
* **Intrachain transport:** Rapid movement of polarons, bipolarons, or solitons along an individual conjugated chain via $\pi$-bond rearrangement.
* **Interchain hopping:** Slower thermally activated hopping or tunneling of carriers between adjacent chains. Because interchain hopping usually limits overall conductivity, chain alignment, crystallinity, and film morphology strongly govern bulk performance.

### Classification: Intrinsic vs Extrinsic Systems
Conducting polymer materials are grouped by whether the polymer chain itself carries the current or hosts an external conductor.

| Category | Subtype | Conduction Mechanism | Key Characteristics & Trade-offs |
| :--- | :--- | :--- | :--- |
| **Intrinsically Conducting Polymers (ICPs)** | Undoped conjugated polymers | Thermal or photo-excitation across $E_g$ | Low dark conductivity ($10^{-10}$ to $10^{-5}\text{ S cm}^{-1}$); useful as semiconducting layers in OLEDs and solar cells. |
| **Intrinsically Conducting Polymers (ICPs)** | Doped conjugated polymers (p-type, n-type, or protonated) | Intrachain delocalization + interchain hopping of polarons/bipolarons/solitons | High electronic conductivity ($1$ to $>10^3\text{ S cm}^{-1}$); often stiffer and harder to melt-process than commodity plastics. |
| **Extrinsically Conducting Polymers** | Conductive-element-filled composites | **Percolation** across a touching network of carbon black, metal fibers, or silver powder inside an insulating binder (e.g., PVC) | Low cost, moldable, and mechanically tough, but conductivity drops sharply below the percolation threshold filler loading. |
| **Extrinsically Conducting Polymers** | Blended conducting polymers | Conducting domains of an ICP (e.g., polypyrrole) dispersed within a conventional matrix polymer (e.g., PVC or polystyrene) | Combines electrical conductivity with the host polymer's processability; phase separation and mechanical trade-offs must be carefully tuned. |

### Applications
* **Antistatic coatings and EMI shielding:** Doped ICP blends and carbon- or metal-filled composites dissipate static charge and attenuate electromagnetic interference (EMI) in electronic housings.
* **Electrochromic devices and OLEDs:** Voltage-driven doping/dedoping switches the optical absorption of conducting polymers for smart windows, while undoped or doped layers serve as charge-transport or emissive layers in organic light-emitting diodes.
* **Chemical and biosensors:** Reversible conductivity or color changes upon exposure to gases ($\text{NH}_3$, $\text{NO}_2$), $\text{pH}$ shifts, or enzyme redox reactions (e.g., glucose oxidase) enable selective analytical sensors.
* **Energy storage electrodes:** Redox-active polymers such as polyaniline and polypyrrole act as pseudocapacitive or cathode-active materials in supercapacitors and rechargeable batteries.

> **Watch out.** Do not confuse **electronically conducting polymers** (which transport electrons/holes along conjugated chains and serve as *electrodes*) with **solid polymer electrolytes** (such as $\text{Li}^+$-salt-doped poly(ethylene oxide), which transport *ions* and must be electronically insulating to prevent short-circuiting a battery).

#### Example 1: Identifying Dopant Roles and Polymer Charge States
*Additional illustrative example.* Suppose a neutral polypyrrole film ($\text{PPy}$) is oxidatively doped using iron(III) chloride ($\text{FeCl}_3$) such that on average one electron is removed per four pyrrole monomer units, with $\text{FeCl}_4^-$ incorporated as the counter-ion. Write the balanced oxidation half-reaction for a four-ring segment $(\text{C}_4\text{H}_3\text{N})_4$ and identify the carrier type and counter-ion.

**Solution:**
1. **Oxidation of the polymer segment:** Removing one electron from a four-unit segment creates a radical cation (positive polaron) on the backbone:

$$
(\text{C}_4\text{H}_3\text{N})_4 \longrightarrow [(\text{C}_4\text{H}_3\text{N})_4]^{\bullet +} + \text{e}^-
$$

2. **Counter-ion balance:** In $\text{FeCl}_3$ doping, $2\text{FeCl}_3 + \text{e}^- \rightarrow \text{FeCl}_2 + \text{FeCl}_4^-$. The resulting doped polymer formula per four-ring segment is $[(\text{C}_4\text{H}_3\text{N})_4]^{\bullet +}(\text{FeCl}_4^-)$.
3. **Classification:** Because electrons are removed from the $\pi$ system, this is **p-type doping**; the polymer backbone carries a **positive** charge, balanced by the **negative** $\text{FeCl}_4^-$ counter-anion.

### Self-Check Questions
1. **Question:** Why does blending an intrinsically conducting polymer like polypyrrole with a conventional plastic like PVC not automatically guarantee superior mechanical and electrical properties at all ratios?
   **Answer:** Electrical conduction requires a continuous, percolating pathway of the conducting phase, whereas mechanical toughness relies on the host matrix and interfacial adhesion; poor phase compatibility or low conducting-polymer fraction can disrupt conduction or embrittle the blend.
2. **Question:** How does acid doping of emeraldine-base polyaniline with $\text{HCl}$ differ chemically from $\text{FeCl}_3$ doping of polyacetylene?
   **Answer:** $\text{FeCl}_3$ oxidizes polyacetylene by removing $\pi$ electrons (changing the backbone oxidation state), whereas $\text{HCl}$ protonates the imine nitrogen sites of polyaniline without changing the mean oxidation state of the chain.

<!-- page 9 | Polyaniline and polypyrrole: preparation, states and uses -->

## Polyaniline and polypyrrole: preparation, states and uses

Polyaniline (PANI) and polypyrrole (PPy) are two of the most widely studied intrinsically conducting polymers because their monomers are inexpensive, polymerization proceeds under mild aqueous or organic conditions, and their oxidized forms show good environmental stability. Unlike simple polyenes such as polyacetylene, both PANI and PPy contain heteroatoms ($\text{N}$) in or along the conjugated backbone, allowing electronic properties to be tuned through oxidation state and counterion incorporation.

### Polyaniline (PANI): preparation and oxidation states

Polyaniline is synthesized by the oxidative polymerization of aniline ($\text{C}_6\text{H}_5\text{NH}_2$) in an acidic medium, where aniline exists largely as the anilinium cation ($\text{C}_6\text{H}_5\text{NH}_3^+$).

$$
\text{Aniline (in aqueous acid, e.g., HCl)} \xrightarrow[\text{Monomer oxidation, para-coupling, deprotonation}]{\text{Oxidant, e.g., } (\text{NH}_4)_2\text{S}_2\text{O}_8,\; 0\text{--}5\,^\circ\text{C}} \text{Polyaniline (emeraldine salt, } \text{Cl}^- \text{ counterions retained)}
$$

![Oxidative polymerization of aniline to polyaniline](/notes/cse/s1/chemistry/module-2/assets/polyaniline-prep.svg)
*Figure: Preparation of polyaniline via oxidative polymerization of aniline monomers and conversion between emeraldine salt and base.*

```chem
aniline
```

```chem
polyaniline
```

#### 1. Chemical oxidative polymerization
1. Dissolve aniline monomer in an aqueous acid such as dilute $\text{HCl}$ ($\approx 1\text{ M}$) and cool the solution in an ice bath ($0\text{--}5\,^\circ\text{C}$).
2. Slowly add an aqueous solution of an oxidizing agent, typically ammonium persulfate ($(\text{NH}_4)_2\text{S}_2\text{O}_8$, APS), with continuous stirring. Low temperature is maintained because the oxidation is exothermic; cooling slows side reactions, limits chain branching or degradation, and yields a more regular head-to-tail (*para*-coupled) polymer.
3. Under suitable reaction conditions, a dark green precipitate of protonated polyaniline (emeraldine salt) forms. It is collected by filtration and washed. Washing with dilute acid preserves the conductive salt, whereas washing with aqueous ammonium hydroxide ($\text{NH}_4\text{OH}$) deprotonates the product to the blue emeraldine base.

#### 2. Electrochemical polymerization
1. Immerse an inert working electrode (such as platinum foil or conductive glass) and a counter electrode into an acidified aqueous solution of aniline.
2. Apply a suitable anodic potential (specified relative to a named reference electrode and selected for the electrolyte and film-growth conditions) to oxidize the monomer at the anode surface.
3. Radical cations couple directly on the positive electrode, depositing a uniform, adherent thin film of conducting polyaniline.

> **Watch out.** Do not write a simplified polymerization equation releasing $n\text{H}_2\text{O}$ or $\frac{n}{2}\text{H}_2\text{O}$ unless the specific oxidant is balanced, because oxygen does not come from aniline. Also, never write "$0.7\text{ V}$ current"; voltage ($\text{V}$) is electric potential, whereas current is measured in amperes ($\text{A}$), and the exact onset potential depends on the reference electrode and electrolyte.

#### Oxidation and protonation states of PANI
Polyaniline has a general repeat unit consisting of reduced benzenoid diamine units and oxidized quinonoid diimine units. Depending on the ratio of these units, PANI exists in three distinct oxidation states:

| Form of Polyaniline | Oxidation / Protonation State | Backbone Structure | Typical Colour | Electrical Behavior |
| :--- | :--- | :--- | :--- | :--- |
| **Leucoemeraldine** | Fully reduced | All benzenoid amine ($-\text{NH}-$) units | Pale yellow / colourless | Insulator |
| **Emeraldine base (EB)** | Half-oxidized, unprotonated | $1:1$ benzenoid amine and quinonoid imine ($=\text{N}-$) | Blue | Poor conductor / semiconductor |
| **Emeraldine salt (ES)** | Half-oxidized, acid-protonated | Radical-cation (polaron) lattice with counterions ($\text{A}^-$) | Dark green | Highly conducting |
| **Pernigraniline** | Fully oxidized | Fully oxidized limiting form in the conventional PANI redox series, rich in quinonoid imine structure | Blue-violet | Insulator |

Crucially, the half-oxidized emeraldine form is **not** automatically conductive. Emeraldine base (EB) is an insulator or poor semiconductor until treated with a protonic acid (such as $\text{HCl}$), which protonates the imine nitrogens ($=\text{N}-$) without changing the number of electrons on the chain. This acid–base doping converts EB into the green **emeraldine salt (ES)**, delocalizing polarons along the backbone and increasing conductivity by many orders of magnitude.

### Polypyrrole (PPy): preparation and properties

Polypyrrole is formed by the oxidative polymerization of pyrrole ($\text{C}_4\text{H}_4\text{NH}$), a five-membered heteroaromatic ring containing an $-\text{NH}-$ group. Monomer oxidation generates radical cations that couple predominantly at the $\alpha$-positions (carbon positions $2$ and $5$ adjacent to nitrogen), followed by deprotonation.

$$
\text{Pyrrole (C}_4\text{H}_4\text{NH)} \xrightarrow[\text{Monomer oxidation, } \alpha\text{-}(2,5)\text{-coupling, deprotonation}]{\text{Oxidant (FeCl}_3 \text{ or APS) or Anodic Oxidation}} \text{Doped Polypyrrole (backbone}^+ + \text{counterions } \text{A}^-\text{)}
$$

![Oxidative polymerization of pyrrole to polypyrrole](/notes/cse/s1/chemistry/module-2/assets/polypyrrole-prep.svg)
*Figure: Oxidative polymerization of pyrrole to polypyrrole through 2,5-radical cation coupling.*

```chem
pyrrole
```

```chem
polypyrrole
```

Because the polymer has a lower oxidation potential than the monomer, the growing PPy chain is simultaneously oxidized ($p$-doped) during synthesis, incorporating anions from the solution to maintain charge neutrality.

* **Chemical method:** Mixing an aqueous solution of pyrrole (e.g., $0.1\text{ M}$) with an oxidant such as ferric chloride ($\text{FeCl}_3$) or ammonium persulfate ($(\text{NH}_4)_2\text{S}_2\text{O}_8$) at room temperature or under cooling yields a black precipitate of oxidized, doped polypyrrole over several hours, which is filtered, washed, and dried.
* **Electrochemical method:** Electrolysis of pyrrole (e.g., $0.06\text{ M}$) in an aqueous or organic solvent such as acetonitrile containing a supporting electrolyte—for example, tetraethylammonium tetrafluoroborate ($\text{Et}_4\text{NBF}_4$, $0.01\text{ M}$)—using platinum electrodes deposits a blue-black doped PPy film directly on the anode.

### Properties and practical limitations

* **Electrical transport:** Doped PANI (emeraldine salt) and doped PPy achieve high semiconductor-to-metallic conductivities ($10^0\text{--}10^2\,\text{S cm}^{-1}$), though they remain less conductive than bulk metals such as copper ($\approx 6\times 10^5\,\text{S cm}^{-1}$). In many semiconducting regimes, their electrical resistance decreases as temperature increases because charge transport occurs via thermally activated hopping between chains.
* **Electrochromism:** Both polymers change colour reversibly upon redox switching. Neutral (undoped) PPy thin films are yellowish-green, whereas oxidized (doped) PPy is blue-black; PANI switches between yellow, green, and blue/violet.
* **Processability and stability:** Both polymers have rigid conjugated backbones with strong interchain interactions, making them infusible and poorly soluble in common solvents (doped PPy is often brittle and intractable). While air-stable in their conducting states, exposing PPy or PANI to excessive anodic potentials causes irreversible overoxidation and loss of conductivity.

### Applications of PANI and PPy

* **Energy storage:** Active electrode materials and conductive binders in rechargeable batteries and supercapacitors.
* **Sensors and biosensors:** Chemiresistive gas sensors ($\text{NH}_3$, $\text{NO}_2$, pH) and enzyme-immobilized biosensors (such as glucose oxidase on PPy or PANI films).
* **Antistatic and EMI shielding:** Coatings and polymer blends to dissipate static charge and shield electronic circuits from electromagnetic interference (EMI).
* **Optoelectronics and coatings:** Hole-injection/transport layers in OLEDs, counter electrodes in dye-sensitized solar cells, electrochromic smart windows, and corrosion-inhibiting coatings on metals.

#### Example 1: Classifying redox versus acid–base steps in PANI synthesis

**Problem:** During the synthesis and processing of polyaniline, three chemical steps are performed: (a) converting aniline monomer into an emeraldine salt precipitate using $(\text{NH}_4)_2\text{S}_2\text{O}_8$ in $\text{HCl}$, (b) washing that green precipitate with aqueous $\text{NH}_4\text{OH}$ to obtain blue emeraldine base, and (c) treating the emeraldine base with aqueous $\text{HCl}$ to restore conductivity. Classify each step as a redox reaction or a non-redox acid–base reaction, and state which product is electrically conducting.

**Solution:**
1. **Step (a) is a redox reaction:** Ammonium persulfate oxidizes aniline monomers (removing electrons and protons) to build the half-oxidized polyaniline backbone, while $\text{HCl}$ keeps it protonated as the conducting emeraldine salt.
2. **Step (b) is a non-redox acid–base deprotonation:** $\text{NH}_4\text{OH}$ deprotonates nitrogen sites and releases associated chloride counterions without changing the oxidation state of the polymer, yielding insulating emeraldine base.
3. **Step (c) is a non-redox acid–base protonation (protonic acid doping):** $\text{HCl}$ protonates the imine nitrogens of emeraldine base without electron transfer, regenerating the **emeraldine salt**, which is the electrically conducting form.

### Self-check questions

1. **Why is chemical polymerization of aniline carried out at $0\text{--}5\,^\circ\text{C}$ rather than at boiling temperature?**
   *Answer:* Monomer oxidation is exothermic; keeping the reaction at $0\text{--}5\,^\circ\text{C}$ controls the reaction rate, suppresses unwanted side reactions and overoxidation, and promotes regular *para*-coupled chains with higher conductivity.
2. **Does polypyrrole synthesized by oxidative polymerization with $\text{FeCl}_3$ require a separate post-synthesis doping step to become conductive?**
   *Answer:* No. The growing polypyrrole chain has a lower oxidation potential than pyrrole monomer, so it is oxidized ($p$-doped) in situ during polymerization and incorporates counter-anions from the reaction medium; their identity depends on the electrolyte and synthesis conditions.

<!-- page 10 | OLEDs: layers, charge injection and light emission -->

## OLEDs: layers, charge injection and light emission

An **Organic Light-Emitting Diode (OLED)** is a solid-state optoelectronic device in which thin films of organic semiconductors emit light when an electric current passes through them. This process is known as **electroluminescence**. OLEDs are divided into two main families based on their active materials: **small-molecule OLEDs** and **polymer LEDs (PLEDs)** that use conjugated polymers. They do not require a separate light source or added mobile ions to operate.

### Device Construction and Layer Stack

An OLED consists of ultra-thin organic layers sandwiched between two electrodes on a supporting base. At least one electrode must be transparent so generated photons can escape.

![Diagram of a simplified two-layer OLED structure showing cathode, emissive layer, conductive hole-transport layer, and transparent anode connected to a DC voltage source](/notes/cse/s1/chemistry/module-2/assets/oled-structure.svg)
*Figure: Simplified OLED architecture showing charge injection from electrodes and radiative recombination at the organic interface.*

| Component | Typical Material | Primary Function |
| :--- | :--- | :--- |
| **Substrate** | Glass or flexible plastic foil | Provides mechanical support and optical transparency. |
| **Anode** | Indium tin oxide ($\text{ITO}$) | Transparent electrode that injects positive holes when forward biased. |
| **Hole Transport Layer (HTL)** | Polyaniline ($\text{PANI}$) or $\text{PEDOT:PSS}$ | Facilitates hole injection from the anode and transports holes toward the emitter. |
| **Emissive Layer (EML)** | Poly(*p*-phenylene vinylene) ($\text{PPV}$) or polyfluorene | Hosts electron–hole capture and radiative decay; simplified two-layer diagrams often combine the EML and **Electron Transport Layer (ETL)**. |
| **Cathode** | Low-work-function metals/alloys ($\text{Al}$, $\text{Ca}$, $\text{Mg/Ag}$) | Injects electrons into the adjacent organic layer and often acts as a reflective mirror. |
| **Encapsulation** | Glass lid or barrier film | Seals the stack against atmospheric oxygen and moisture. |

> **Watch out.** Do not equate a physical device layer with a single molecular orbital (such as calling the EML the "LUMO layer" or the HTL the "HOMO layer"). Every organic molecule possesses both a **Highest Occupied Molecular Orbital (HOMO)** and a **Lowest Unoccupied Molecular Orbital (LUMO)**. Electrons travel by hopping between LUMO states, whereas holes travel by hopping between HOMO states.

### Charge Injection, Transport, and Light Emission

Light generation in an OLED occurs through a four-step microscopic sequence:

1. **Forward Bias and Charge Injection:** A direct-current (DC) voltage is applied with the $\text{ITO}$ anode positive and the metallic cathode negative. The cathode injects electrons into the LUMO levels of the electron-transporting/emissive layer, while the anode removes electrons from the HOMO levels of the HTL, creating positive **holes**.
2. **Charge Migration:** Under the applied electric field, electrons hop from molecule to molecule toward the anode, and holes hop in the opposite direction toward the cathode. Although holes have higher mobility than electrons in many common organic semiconductors, relative carrier speeds depend on the specific materials chosen; balanced transport is engineered so carriers meet inside the emissive zone.
3. **Exciton Formation:** When an electron and a hole encounter each other on an emissive molecule, mutual Coulombic attraction binds them into a neutral, energetic electron–hole pair called an **exciton**.
4. **Radiative Recombination:** The excited electron relaxes from the LUMO back down to the HOMO, annihilating the hole. If this transition is radiative, the released energy is emitted as a discrete photon of light. Non-radiative decay pathways (vibrational heat loss) compete with photon emission and reduce device efficiency.

$$
\text{e}^- (\text{LUMO}) + \text{h}^+ (\text{HOMO}) \longrightarrow \text{Exciton}^* \longrightarrow \text{Ground State} + h\nu
$$

> **Watch out.** Moving an electron from the HOMO to the LUMO is **excitation** (energy absorption). Light **emission** occurs during the reverse transition, when an electron drops from the LUMO back to the HOMO. Furthermore, each recombination event releases a tiny quantum of energy ($\approx 2\text{--}3\text{ eV}$), not an "enormous" burst; continuous brightness comes from billions of recombinations occurring every second.

The emitted photon energy $E$ (in $\text{J}$) and wavelength $\lambda$ (in $\text{m}$) are governed by the energy of the relaxing exciton:

$$
E = h\nu = \frac{hc}{\lambda}
$$

Here $h$ is Planck's constant, $\nu$ is frequency, and $c$ is the speed of light; use wavelength in metres with $c$ in metres per second. Exciton binding, molecular relaxation and the solid-state environment affect the emitted energy, so it cannot be inferred exactly from a bare HOMO–LUMO gap. Synthetic chemists tune display colours—such as green from $\text{PPV}$ or blue from polyfluorene—by modifying polymer conjugation length and side groups to adjust this gap.

#### Example 1: Photon Energy of a Green Polymer OLED (Illustrative)

Calculate the energy in joules and electron-volts of a single photon emitted by a poly(*p*-phenylene vinylene) ($\text{PPV}$) OLED operating at a peak wavelength of $\lambda = 520\text{ nm}$.
*Assumptions:* Assume a single photon is emitted radiatively at the peak wavelength; this calculation determines individual photon energy and makes no claim about overall device quantum efficiency.
*Constants:* $h = 6.626 \times 10^{-34}\text{ J}\cdot\text{s}$, $c = 3.00 \times 10^8\text{ m}\cdot\text{s}^{-1}$, $1\text{ eV} = 1.602 \times 10^{-19}\text{ J}$.

**Solution:**
Convert the emission wavelength to metres:

$$
\lambda = 520\text{ nm} = 520 \times 10^{-9}\text{ m} = 5.20 \times 10^{-7}\text{ m}
$$

Calculate the photon energy in joules:

$$
E = \frac{hc}{\lambda} = \frac{(6.626 \times 10^{-34}\text{ J}\cdot\text{s})(3.00 \times 10^8\text{ m}\cdot\text{s}^{-1})}{5.20 \times 10^{-7}\text{ m}} = 3.823 \times 10^{-19}\text{ J}
$$

Convert the photon energy to electron-volts:

$$
E = \frac{3.82269 \times 10^{-19}\text{ J}}{1.602 \times 10^{-19}\text{ J}\cdot\text{eV}^{-1}} = 2.39\text{ eV}
$$

Each emitted green photon carries $3.82 \times 10^{-19}\text{ J}$ ($2.39\text{ eV}$) of energy.

### Display Characteristics, Limitations, and Applications

Because every OLED pixel is **self-emissive**, no backlight or liquid-crystal shutter is needed. Turning a pixel's current off produces a true black state, yielding very high contrast ratios in dark environments, wide viewing angles (approaching $90^\circ$ off-axis), and microsecond response times. Depositing the thin stack onto plastic films rather than rigid glass enables lightweight, bendable, or foldable displays. Power consumption depends on image content: OLEDs use less power than backlit LCDs when showing dark interfaces, but can draw more power when displaying full-screen bright white content.

However, conjugated organic molecules are chemically vulnerable. Water vapour and oxygen rapidly oxidize the low-work-function cathode and degrade conjugated backbones, causing non-emissive "dark spots". Furthermore, blue emitters require a wide energy gap ($\approx 2.7\text{--}3.0\text{ eV}$), and these high-energy excitons accelerate bond cleavage, giving blue sub-pixels a shorter operational lifetime than red or green ones. Rigorous thin-film or glass **encapsulation** is therefore mandatory for commercial televisions, smartphone screens, smartwatches, and automotive displays.

### Self-Check Questions

1. **Question:** Why must at least one electrode in an OLED be made of a material like $\text{ITO}$, and which terminal of the DC source connects to it?
   **Answer:** $\text{ITO}$ (indium tin oxide) is both electrically conductive and optically transparent, allowing photons generated inside the organic stack to escape the device. It acts as the anode and connects to the positive terminal.
2. **Question:** During OLED light emission, does an electron transition from HOMO to LUMO or from LUMO to HOMO?
   **Answer:** From LUMO to HOMO. The electron injected into the higher-energy LUMO relaxes into an empty hole in the lower-energy HOMO, releasing the energy difference as a photon.

<!-- page 11 | Dye-sensitized solar cells: components and charge cycle -->

## Dye-sensitized solar cells: components and charge cycle

A **dye-sensitized solar cell (DSSC)** is a photoelectrochemical solar cell that converts visible light into electrical energy. Unlike conventional crystalline silicon photovoltaics—where the silicon semiconductor performs both light absorption and charge separation—a DSSC separates these two functions. An adsorbed molecular dye harvests visible photons, while a wide-band-gap semiconductor network transports the resulting electrons.

### Device architecture and components

A DSSC is assembled as a sandwich structure containing six functional components:

| Component | Typical Materials | Primary Function |
| :--- | :--- | :--- |
| **Substrate** | Soda-lime glass or flexible transparent polymer (e.g., PET, PEN) | Provides mechanical support and optical transparency for light entry. |
| **Transparent Conductive Oxide (TCO)** | Fluorine-doped tin oxide ($\text{FTO}$, $\text{F:SnO}_2$) or indium tin oxide ($\text{ITO}$) | Collects electrons from the semiconductor film and routes them to the external circuit while transmitting incident light. |
| **Mesoporous Semiconductor Oxide** | Nanoporous titanium dioxide ($\text{TiO}_2$), zinc oxide ($\text{ZnO}$), or tin(IV) oxide ($\text{SnO}_2$) | Provides a huge internal surface area to anchor a monolayer of dye and conducts injected electrons through its conduction band. |
| **Photosensitizer (Dye)** | Ruthenium polypyridyl complexes, synthetic metal-free organic dyes, or natural plant pigments (e.g., anthocyanins) | Absorbs visible light and injects photoexcited electrons into the oxide conduction band. |
| **Electrolyte** | Liquid or gel solvent containing an iodide/triiodide ($\text{I}^-/\text{I}_3^-$) redox couple | Regenerates oxidized dye molecules and closes the internal circuit through transport and reactions of the redox mediator. |
| **Counter Electrode (Cathode)** | TCO substrate coated with a catalytic layer of platinum ($\text{Pt}$) or carbon/graphite | Catalyzes the reduction of the oxidized redox mediator using electrons returning from the external load. |

![Diagram of Dye-sensitized solar cell (DSSC) structure](/notes/cse/s1/chemistry/module-2/assets/dssc-structure.svg)
*Figure: Cross-sectional schematic of a dye-sensitized solar cell showing the photoanode, dye-coated nanoporous semiconductor, redox electrolyte, and catalytic counter electrode.*

Together, the transparent substrate, TCO collector, nanoporous $\text{TiO}_2$ film, and adsorbed dye monolayer form the **photoanode** (negative terminal during illumination).

> **Watch out.** Do not confuse the chemical composition of transparent conductive oxides or the optical role of $\text{TiO}_2$. **FTO** is fluorine-doped *tin* oxide ($\text{SnO}_2:\text{F}$), not fluorine-doped indium tin oxide. Furthermore, $\text{TiO}_2$ has a wide band gap ($\approx 3.2\text{ eV}$, absorbing only ultraviolet light); it does **not** harvest visible sunlight on its own. Visible light is absorbed by the sensitizer dye, while nanoporous $\text{TiO}_2$ acts as a high-surface-area scaffold and electron transport medium. Also avoid listing $\text{ZrO}_2$ as an electron-transport semiconductor: because its conduction band edge lies too high for electron injection from standard dyes, wide-band-gap $\text{ZrO}_2$ may serve as an insulating reference, scaffold in a different architecture or a thin barrier, rather than an interchangeable TiO2 electron-transport layer.

### Photoelectrochemical charge cycle

Because a DSSC operates as a galvanic cell under illumination, oxidation occurs at the photoanode and reduction occurs at the counter electrode (cathode). Electrical neutrality is maintained through a continuous four-step cycle:

1. **Photoexcitation of the dye:** Incident photons pass through the transparent substrate and TCO layer and are absorbed by ground-state dye molecules ($\text{D}$) anchored to the $\text{TiO}_2$ surface. This promotes an electron from the highest occupied molecular orbital (HOMO) to the lowest unoccupied molecular orbital (LUMO), generating an excited state ($\text{D}^*$):

$$
\text{D} + h\nu \longrightarrow \text{D}^*
$$

2. **Electron injection and transport:** Because the LUMO of the excited dye lies slightly higher in energy than the conduction band edge of $\text{TiO}_2$, the excited electron is rapidly injected into the $\text{TiO}_2$ conduction band, leaving behind an oxidized dye cation ($\text{D}^+$):

$$
\text{D}^* \longrightarrow \text{D}^+ + \text{e}^-(\text{TiO}_2)
$$

   The injected electrons diffuse through the interconnected $\text{TiO}_2$ nanoparticle network to the TCO collector, flow through the external circuit to perform electrical work, and arrive at the counter electrode.

3. **Dye regeneration by the redox mediator:** Before the injected electron can recombine with $\text{D}^+$, iodide ions ($\text{I}^-$) in the electrolyte donate electrons to reduce $\text{D}^+$ back to its neutral ground state ($\text{D}$), while iodide is oxidized to triiodide ($\text{I}_3^-$):

$$
2\text{D}^+ + 3\text{I}^- \longrightarrow 2\text{D} + \text{I}_3^-
$$

   Rapid regeneration prevents positive charge accumulation on the surface and resets the dye for repeated photon absorption.

4. **Electrolyte reduction at the counter electrode:** Triiodide ions ($\text{I}_3^-$) diffuse across the electrolyte to the catalytic platinum or carbon counter electrode, where they pick up electrons returning from the external circuit to reform iodide ions:

$$
\text{I}_3^- + 2\text{e}^-(\text{cathode}) \longrightarrow 3\text{I}^-
$$

where $\text{D}$, $\text{D}^*$, and $\text{D}^+$ denote the neutral ground-state, photoexcited, and oxidized sensitizer dye molecule, respectively, and $h\nu$ represents an incident photon.

> **Watch out.** The external wire carries electronic current. In the usual liquid electrolyte, charge transport involves mobile ions and redox-mediator transport and reactions, rather than a metallic stream of free electrons through the separator. Cell efficiency is governed by kinetic competition: electron injection and dye regeneration must occur much faster than parasitic *recombination* (where conduction-band electrons in $\text{TiO}_2$ fall back into $\text{D}^+$ or react directly with $\text{I}_3^-$ in the electrolyte).

#### Example 1: Tracing electron and ion stoichiometry in the iodide/triiodide cycle

**Problem:** During steady-state operation of a DSSC, two photons are absorbed by two adjacent sensitizer molecules on a $\text{TiO}_2$ nanoparticle. Write the balanced half-reactions and net chemical change to show how many electrons pass through the external load and how the $\text{I}^-/\text{I}_3^-$ electrolyte closes the circuit without net chemical consumption.

**Solution:**

1. **Photoexcitation and injection (idealized two-photon cycle):**
   Assume both absorbed photons produce successful excitation and electron injection, with no recombination losses:

   $$
   2\text{D} + 2h\nu \longrightarrow 2\text{D}^* \longrightarrow 2\text{D}^+ + 2\text{e}^-(\text{TiO}_2)
   $$

   Thus, $2\text{e}^-$ enter the TCO photoanode and travel through the external load to the counter electrode.

2. **Regeneration at the dye–electrolyte interface:**
   Three iodide ions reduce the two oxidized dye cations back to neutral ground-state molecules:

   $$
   2\text{D}^+ + 3\text{I}^- \longrightarrow 2\text{D} + \text{I}_3^-
   $$

3. **Reduction at the counter electrode:**
   The single $\text{I}_3^-$ ion diffuses to the Pt cathode and accepts the $2\text{e}^-$ arriving from the external circuit:

   $$
   \text{I}_3^- + 2\text{e}^-(\text{cathode}) \longrightarrow 3\text{I}^-
   $$

4. **Net cycle:**
   Summing all steps cancels $2\text{D}^+$, $3\text{I}^-$, and $\text{I}_3^-$ on both sides. Two electrons are driven from the photoanode through the external load to the cathode per two absorbed photons, while both the dye and electrolyte are completely regenerated.

### Advantages, limitations, and applications

**Advantages:**
* **Diffuse and low-light operation:** Selected DSSCs perform well under diffuse or indoor light when the dye and cell design suit the source spectrum; comparison with silicon depends on the test conditions.
* **Low-energy fabrication and architectural versatility:** Roll-to-roll printing on polymer substrates enables lightweight, mechanically flexible cells, while glass-based cells can be made semi-transparent in varied colours.

**Limitations and engineering trade-offs:**
* **Electrolyte sealing and thermal stability:** Liquid organic electrolytes can volatilize at elevated outdoor temperatures or leak if perimeter seals degrade, motivating research into solid-state hole conductors and polymer gels.
* **Dye cost, toxicity, and photostability:** High-efficiency ruthenium complexes are expensive and rely on a scarce heavy metal, whereas natural plant pigments—whose toxicity, cost and stability depend on composition—suffer from rapid photodegradation and lower conversion efficiencies.

**Applications:**
* Building-integrated photovoltaics (BIPV), such as semi-transparent power-generating windows, skylights, and architectural facades.
* Portable solar chargers integrated into outdoor fabrics, backpacks, and low-power indoor electronic sensors or illuminated signage.

### Self-check questions

1. **Why must the semiconductor oxide layer in a DSSC be nanoporous rather than a flat, dense film?**
   *Answer:* Only dye molecules in direct contact with the $\text{TiO}_2$ surface can inject electrons into its conduction band, and a single flat monolayer absorbs very little incident sunlight. A mesoporous nanoparticle network can greatly increase the internal surface area, allowing enough dye to be anchored as a monolayer to harvest most incoming visible light.

2. **What happens to cell output if the iodide/triiodide electrolyte dries out or freezes?**
   *Answer:* Sustained photocurrent can fall sharply or cease when mediator transport is blocked. Without mobile $\text{I}^-$ ions to reduce $\text{D}^+$, oxidized dye molecules cannot be regenerated and injected electrons rapidly recombine with $\text{D}^+$ instead of sustaining a continuous current through the external circuit.

<!-- page 12 | Supercapacitors: interfaces, construction and energy storage -->

## Supercapacitors: interfaces, construction and energy storage

### Fundamentals and classification

A **supercapacitor** (or **ultracapacitor**) is an electrochemical energy storage device that bridges the gap between conventional electrostatic capacitors and rechargeable batteries. It provides much higher capacitance than solid-state dielectric capacitors while charging and discharging far faster than batteries.

**Supercapacitor** is an umbrella term covering three device families, not a strict synonym for a double-layer capacitor:
- **Electrical double-layer capacitors (EDLCs):** Store charge electrostatically at the interface between a porous carbon electrode and an electrolyte without the charge-storage Faradaic reactions characteristic of pseudocapacitance.
- **Pseudocapacitors:** Store charge through fast, reversible Faradaic (redox) reactions at the surface of materials such as transition-metal oxides or conducting polymers.
- **Hybrid supercapacitors:** Combine an electrostatic EDLC electrode with a Faradaic or battery-type electrode.

### Double-layer interfaces and charge storage

In an EDLC, energy is stored by separating charge across two solid–liquid interfaces. When a voltage is applied:
1. The external circuit drives electrons from the positive electrode to the negative electrode.
2. At the **positive electrode**, the excess positive electronic charge attracts solvated **anions** from the electrolyte.
3. At the **negative electrode**, the excess negative electronic charge attracts solvated **cations** from the electrolyte.
4. At each porous carbon surface, electronic charge in the solid faces an equal and opposite ionic counter-charge in the liquid, forming an **electrical double layer** only nanometres thick.

Because purely electrostatic EDLC storage requires no bulk phase change or electron transfer across the electrode–electrolyte interface, charging and discharging are rapid and highly reversible over hundreds of thousands of cycles.

![Schematic of an electrical double-layer supercapacitor showing current collectors, porous electrodes, cations, anions, electrolyte and porous separator membrane](/notes/cse/s1/chemistry/module-2/assets/supercapacitor.svg)
*Figure 12.1: Structure of an electrical double-layer capacitor (EDLC) showing ion migration toward oppositely charged porous electrodes across an ion-permeable separator.*

### Device construction and materials

A practical supercapacitor cell consists of two porous electrodes, an electrolyte, a porous separator, current collectors, and polymer binders.

#### Electrodes
High-surface-area carbon nanomaterials—such as activated carbon, carbon nanotubes (CNTs), and graphene—form the backbone of EDLC electrodes, while metal-oxide nanoparticles or nanowires are added for pseudocapacitance. However, total geometric surface area alone does not determine capacitance: only **ion-accessible pores** that are properly wetted by the electrolyte and able to accommodate the electrolyte ions, sometimes with partial desolvation in narrow pores contribute to charge storage.

#### Electrolyte
The electrolyte supplies the mobile ions and sets the maximum operating voltage of the cell. Key electrolyte properties are high **ionic conductivity**, a wide **electrochemical voltage window**, and good **pore wetting**.
- **Aqueous electrolytes** (e.g., $\text{H}_2\text{SO}_4$ or $\text{KOH}$ solutions) offer high ionic conductivity and low cost, but water electrolysis limits their operating voltage to about $1\text{ V}$.
- **Organic liquid electrolytes**—typically conductive salts such as tetraalkylammonium or lithium salts dissolved in organic solvents like acetonitrile or propylene carbonate—allow higher cell voltages ($2.5\text{--}2.7\text{ V}$).
- **Gel polymer electrolytes** immobilize a liquid electrolyte in a polymer network. **Solid electrolytes** conduct ions through a solid phase; some are solvent-free polymer–salt systems. These formulations differ in conductivity and leakage behaviour.

> **Watch out.** Do not confuse a salt dissolved in an organic solvent with a "solid electrolyte." A solvent mixed with tetraalkylammonium or lithium salts is a **liquid organic electrolyte**; true solid or gel electrolytes require a solid ceramic or polymer matrix. Furthermore, supercapacitor capacitance is governed primarily by accessible electrode surface area, ion size, and double-layer thickness—not simply the bulk dielectric constant of the electrolyte.

#### Separator
The separator (often a porous polymer or paper/cellulose membrane) sits between the two electrodes. It must be **electrically insulating** to prevent internal short circuits while remaining **ion-permeable** so cations and anions can migrate freely during charge and discharge. No electrons travel through the separator.

#### Current collectors and binders
Metallic foils or grids (such as $\text{Al}$, $\text{Cu}$, $\text{Pt}$, or carbon fibre) collect electrons from the electrodes and connect to the external terminals. Collector choice must match the electrolyte to avoid corrosion (for instance, aluminium is stable in organic electrolytes, whereas acidic aqueous solutions require corrosion-resistant carbon or noble metals). Polymer **binders** such as polyvinylidene fluoride (PVDF) or polyacrylonitrile (PAN) act as adhesives holding the active electrode particles together and onto the collector.

### Capacitance, energy and power equations

The capacitance $C$ (in farads, $\text{F}$) relates stored charge $Q$ (in coulombs, $\text{C}$) to the cell voltage $V$ (in volts, $\text{V}$):

$$
C = \frac{Q}{V}
$$

Because a cell contains two electrode–electrolyte interfaces connected in series through the electrolyte, the total cell capacitance $C_{\text{cell}}$ is related to the individual electrode capacitances $C_1$ and $C_2$ by:

$$
\frac{1}{C_{\text{cell}}} = \frac{1}{C_1} + \frac{1}{C_2}
$$

For a symmetric cell where $C_1 = C_2 = C_e$, the cell capacitance is half that of a single electrode ($C_{\text{cell}} = C_e / 2$). Assuming constant capacitance, the total energy $E$ (in joules, $\text{J}$) stored at maximum voltage $V_{\text{max}}$ is:

$$
E = \frac{1}{2} C_{\text{cell}} V_{\text{max}}^2
$$

Unlike a battery, which maintains a nearly flat voltage plateau during discharge, a supercapacitor's voltage drops linearly as charge is removed. The load and converter determine the minimum usable voltage $V_{\text{min}}$, so the usable energy between $V_{\text{max}}$ and $V_{\text{min}}$ is:

$$
E_{\text{usable}} = \frac{1}{2} C_{\text{cell}} \left(V_{\text{max}}^2 - V_{\text{min}}^2\right)
$$

Internal resistance—called **equivalent series resistance (ESR)**—arises from contact resistance, electrode resistance, and ion transport through pores. High ESR dissipates stored energy as heat ($I^2 R_{\text{ESR}}$) and limits peak power output.

| Feature | Supercapacitor (EDLC) | Rechargeable Battery |
| :--- | :--- | :--- |
| **Charge storage mechanism** | Electrostatic double layer (the EDLC case) | Bulk Faradaic (chemical redox) reactions |
| **Specific power & charge rate** | Very high (seconds) | Moderate to low (minutes to hours) |
| **Specific energy** | Lower | Higher |
| **Cycle life** | Very long ($>10^5$ cycles) | Limited by phase/volume changes |
| **Discharge voltage profile** | Sloping linearly with state of charge | Relatively flat voltage plateau |
| **Self-discharge rate** | Higher | Lower |

#### Example 1: Stored and usable energy in an organic-electrolyte cell

*Additional illustrative example (not in source notes).* Assume an ideal symmetric supercapacitor cell has a constant cell capacitance $C_{\text{cell}} = 100\text{ F}$ and a rated maximum voltage $V_{\text{max}} = 2.7\text{ V}$. Calculate (a) the total stored energy in joules and watt-hours, and (b) the usable energy and percentage of total energy recovered if the cell is discharged to $V_{\text{min}} = 1.35\text{ V}$.

1. **Total stored energy at $2.7\text{ V}$:**

   $$
   E = \frac{1}{2} C_{\text{cell}} V_{\text{max}}^2 = 0.5 \times 100\text{ F} \times (2.7\text{ V})^2 = 364.5\text{ J}
   $$

   Convert joules to watt-hours ($1\text{ Wh} = 3600\text{ J}$):

   $$
   E = \frac{364.5\text{ J}}{3600\text{ J Wh}^{-1}} = 0.10125\text{ Wh}
   $$

2. **Usable energy down to $1.35\text{ V}$:**

   $$
   \begin{aligned}
   E_{\text{usable}} &= \frac{1}{2} (100\text{ F})\left[(2.7\text{ V})^2-(1.35\text{ V})^2\right] \\
   &=50(7.29-1.8225)\text{ J} \\
   &=273.375\text{ J}
   \end{aligned}
   $$

3. **Percentage of total energy delivered:**

   $$
   \text{Fraction recovered} = \frac{273.375\text{ J}}{364.5\text{ J}} \times 100\% = 75\%
   $$

   Because energy scales with $V^2$, discharging to half the maximum voltage leaves $(0.5)^2 = 25\%$ of the initial energy remaining below the chosen operating cutoff.

### Self-check questions

1. **Question:** Why does a symmetric supercapacitor whose single electrodes each have a capacitance of $80\text{ F}$ exhibit an overall cell capacitance of only $40\text{ F}$?
   **Answer:** The two electrode–electrolyte double layers are connected in series through the electrolyte, so $\frac{1}{C_{\text{cell}}} = \frac{1}{80} + \frac{1}{80}$, giving $C_{\text{cell}} = 40\text{ F}$.

2. **Question:** What two electrical/transport properties must a supercapacitor separator simultaneously possess?
   **Answer:** It must be an electronic insulator (to prevent a short circuit between electrodes) and an ionic conductor/permeable membrane (to allow electrolyte ions to pass through).

<!-- page 13 | Materials for quantum computing -->

## Materials for quantum computing

### Classical bits versus qubits
Classical digital processors store and manipulate information as binary bits, where each transistor switch occupies a definite voltage state corresponding to either $0$ or $1$. Quantum computing encodes information in two-level quantum systems called quantum bits, or qubits. While a classical bit is strictly in state $0$ or $1$ at any instant, a single pure qubit can exist in a coherent linear superposition of two orthogonal computational basis states, written in Dirac notation as $|0\rangle$ and $|1\rangle$:

$$
|\psi\rangle = \alpha|0\rangle + \beta|1\rangle
$$

Here, $\alpha$ and $\beta$ are complex probability amplitudes (dimensionless) that carry both magnitude and phase. Physical measurement forces the qubit to project onto a single basis state: it yields outcome $0$ with probability $|\alpha|^2$ and outcome $1$ with probability $|\beta|^2$, subject to the normalization condition:

$$
|\alpha|^2 + |\beta|^2 = 1
$$

A register of $n$ qubits spans a composite state space (Hilbert space) described by $2^n$ complex probability amplitudes simultaneously.

> **Watch out.** Superposition does not mean that a single qubit holds all numbers from $0$ to $255$, nor does it allow a quantum computer to read out all possible answers at once. Representing $256$ basis states requires an $8$-qubit register ($2^8 = 256$), and a single measurement of that register collapses the state to yield only one $8$-bit binary string. Quantum computers are not universally faster for every task; useful speedups depend on specialized algorithms that manipulate amplitudes before measurement.

### Core quantum phenomena in computation
Quantum algorithms process information by combining three fundamental physical properties:

1. **Superposition:** A quantum system evolves as a coherent linear combination of basis states with well-defined relative phases; measurement produces an outcome, while coupling to the environment can destroy observable coherence.
2. **Entanglement:** Two or more qubits can enter a non-separable joint quantum state whose total state vector cannot be factored into individual single-qubit states. Measuring one entangled qubit establishes strong non-classical correlations with the measurement outcomes of its partner qubits, though it cannot transmit information faster than light.
3. **Quantum interference:** Because $\alpha$ and $\beta$ are complex numbers with relative phases, quantum logic gates can steer probability amplitudes so that paths leading to wrong answers interfere destructively (cancel out) while paths leading to target answers interfere constructively (reinforce the measurement probability).

To execute these operations reliably, qubits must maintain phase relationships over a characteristic **coherence time**. Unwanted thermal, electromagnetic, or spin interactions with the surrounding lattice cause **decoherence**, which destroys superposition and introduces computational errors that require quantum error correction.

#### Example 1: State space and measurement of an 8-qubit register (illustrative conceptual example)
**Problem:** An engineering student reads that a quantum processor with $n = 8$ qubits can evaluate $256$ numbers in parallel. Assuming an ideal $8$-qubit register prepared in an equal superposition of all computational basis states, determine (a) how many basis states span the register, (b) the probability of obtaining any specific $8$-bit outcome in a single measurement, and (c) how the full probability distribution is obtained experimentally.

**Solution:**
1. **Basis states:** For $n = 8$ qubits, the dimension of the state space is:
   $$
   N = 2^n = 2^8 = 256
   $$
   These correspond to binary strings from $|00000000\rangle$ (decimal $0$) to $|11111111\rangle$ (decimal $255$).
2. **Single-measurement outcome:** In an equal superposition, every basis state has magnitude $|\alpha_i| = 1/\sqrt{256}$. A single measurement collapses the register to just **one** $8$-bit string with probability:
   $$
   P_i = |\alpha_i|^2 = \frac{1}{256} \approx 0.00391
   $$
3. **Experimental readout:** Because one measurement returns only one binary number, the circuit must be re-initialized, run, and measured repeatedly over many shots to build a statistical histogram of output probabilities.

### Physical platforms and material requirements
Qubits are not limited to electron spins; different hardware architectures encode $|0\rangle$ and $|1\rangle$ in superconducting circuits, semiconductor spins, crystal defects, or photons. In every platform, materials chemistry governs coherence because interface oxides, lattice vacancies, and nuclear-spin impurities create charge and magnetic noise that dephase the qubit.

| Qubit platform | Representative materials | Physical role and material engineering requirements |
| :--- | :--- | :--- |
| Superconducting circuits | Aluminium ($\text{Al}$), niobium ($\text{Nb}$), titanium nitride ($\text{TiN}$) on high-resistivity silicon or sapphire | Form zero-resistance microwave resonators and Josephson junctions ($\text{Al/AlO}_x\text{/Al}$) operating at millikelvin temperatures; clean metal–substrate interfaces minimize dielectric two-level-system losses. |
| Semiconductor spin qubits | Isotopically purified silicon ($^{28}\text{Si}$), $\text{Si/SiGe}$, germanium ($\text{Ge}$), or $\text{III–V}$ heterostructures | Confine single electron, hole, or nuclear spins in gate-defined quantum dots; isotopic enrichment of $^{28}\text{Si}$ removes $^{29}\text{Si}$ nuclear spins that otherwise cause magnetic decoherence. |
| Solid-state colour centres | Diamond (nitrogen-vacancy, $\text{NV}$ centres) and silicon carbide ($\text{SiC}$) | Point defects trap localized electronic spins that can be initialized and read out optically at or near room temperature. |
| Photonic quantum systems | $\text{InAs/GaAs}$ quantum dots; silicon nitride ($\text{Si}_3\text{N}_4$) and lithium niobate ($\text{LiNbO}_3$) waveguides | Self-assembled $\text{InAs/GaAs}$ dots act as on-demand single-photon emitters, while ultra-low-loss dielectric waveguides route photons for quantum communication and linear optical computing. |

### Self-check questions
1. **Question:** A qubit is prepared in the state $|\psi\rangle = \frac{\sqrt{3}}{2}|0\rangle - \frac{i}{2}|1\rangle$. Verify whether the state is normalized and find the probability of measuring $|1\rangle$.
   **Answer:** The probabilities are $|\alpha|^2 = |\sqrt{3}/2|^2 = 3/4$ and $|\beta|^2 = |-i/2|^2 = 1/4$. Since $3/4 + 1/4 = 1$, the state is normalized, and the probability of measuring $|1\rangle$ is $1/4$ ($0.25$).
2. **Question:** Why is isotopically enriched $^{28}\text{Si}$ preferred over natural silicon for semiconductor spin qubits?
   **Answer:** Natural silicon contains $^{29}\text{Si}$ isotopes with non-zero nuclear spin, creating fluctuating local magnetic fields that rapidly decohere the electron spin qubit; $^{28}\text{Si}$ has zero nuclear spin, providing a magnetically quiet lattice.

<!-- page 14 | Spintronics and magnetoresistive devices -->

## Spintronics and magnetoresistive devices

### Principles of spintronics
Conventional electronics relies exclusively on the electrical charge of electrons to process and store data. **Spintronics** (spin-based electronics) exploits both the charge of an electron and its intrinsic **spin**—a quantum mechanical angular momentum that gives each electron a tiny magnetic moment. Spin is an intrinsic quantum property rather than a literal physical rotation of a sphere.

In an external magnetic field or inside a ferromagnetic material, electron spins align predominantly in one of two states, referred to as "spin-up" and "spin-down". When an unequal number of spin-up and spin-down electrons carry current, the current is **spin-polarized**. Controlling spin polarization allows solid-state devices to store data in magnetic orientations. Because ferromagnetic magnetization remains stable without continuous electrical power, magnetic spin states enable **non-volatile** data storage. While an individual electron's spin polarization in a conduction channel actually relaxes quickly, collective magnetization in a ferromagnet can retain data without continuous power, subject to thermal stability, retention time and device design.

### Giant and tunnel magnetoresistance
Spintronic sensors and memories read magnetic states by converting relative magnetization alignments into electrical resistance changes.

**Giant magnetoresistance (GMR)** occurs in thin-film heterostructures composed of alternating ferromagnetic conducting layers separated by a nanometer-thin **non-magnetic metallic spacer** (such as Cu). Resistance changes because of **spin-dependent scattering** at the interfaces and within the layers:
1. **Parallel alignment ($R_{\text{P}}$):** When the magnetizations of both ferromagnetic layers are parallel, electrons with spin aligned to the magnetization pass through both layers with minimal scattering, resulting in **low electrical resistance**.
2. **Antiparallel alignment ($R_{\text{AP}}$):** When the magnetizations are antiparallel, both spin-up and spin-down electrons undergo strong scattering in at least one of the ferromagnetic layers, resulting in **high electrical resistance**.

Practical devices use a **spin valve** architecture: one ferromagnetic layer has its magnetization fixed (**pinned** layer) by an adjacent antiferromagnetic layer, while the other ferromagnetic layer (**free** layer) rotates freely in response to a small external magnetic field.

**Tunnel magnetoresistance (TMR)** occurs in a **magnetic tunnel junction (MTJ)**, where two ferromagnetic electrodes are separated by an ultrathin **insulating tunnel barrier** (typically $\text{MgO}$ or $\text{Al}_2\text{O}_3$, only $1\text{--}2\text{ nm}$ thick) rather than a conductive metal. Electrons cross the barrier by quantum mechanical tunneling. Because tunneling probability depends strongly on the matching of spin-polarized density of states between the two electrodes, well-designed MTJs can provide large resistance changes, with the result depending on the materials and operating conditions.

| Feature | Giant Magnetoresistance (GMR) | Tunnel Magnetoresistance (TMR) |
| :--- | :--- | :--- |
| **Device structure** | Ferromagnet / non-magnetic metal / ferromagnet | Ferromagnet / thin insulator / ferromagnet (MTJ) |
| **Typical spacer / barrier** | Conductive metal ($\text{Cu}$, $\text{Ag}$) | Insulating oxide ($\text{MgO}$, $\text{Al}_2\text{O}_3$) |
| **Conduction mechanism** | Ohmic transport with spin-dependent scattering | Spin-polarized quantum tunneling |
| **Typical applications** | Early high-density HDD read heads, magnetic field sensors | Modern HDD read heads, MRAM cells |

> **Watch out.** Do not classify $\text{MgO}$ and $\text{Al}_2\text{O}_3$ as metallic spintronic materials, and do not group metallic $\text{Co–Fe–B}$ alloys as semiconductors. $\text{MgO}$ and $\text{Al}_2\text{O}_3$ are electrical insulators used as tunnel barriers in MTJs, whereas $\text{Co}$, $\text{Fe}$, and $\text{CoFeB}$ are metallic ferromagnets.

#### Example 1: Illustrative calculation of magnetoresistance ratio
*Additional illustrative example.* Suppose a spin-valve sensor has a resistance of $R_{\text{P}} = 100\text{ }\Omega$ when its ferromagnetic layers are aligned parallel, and $R_{\text{AP}} = 120\text{ }\Omega$ when they are aligned antiparallel. Calculate the magnetoresistance (MR) ratio using the standard optimistic convention.

**Solution:**
Using the parallel resistance $R_{\text{P}}$ as the reference denominator:
$$
\text{MR (\%)} = \frac{R_{\text{AP}} - R_{\text{P}}}{R_{\text{P}}} \times 100
$$
Substitute $R_{\text{P}} = 100\text{ }\Omega$ and $R_{\text{AP}} = 120\text{ }\Omega$:
$$
\text{MR (\%)} = \frac{120\text{ }\Omega - 100\text{ }\Omega}{100\text{ }\Omega} \times 100 = 20\%
$$
The resistance increases by $20\%$ when switching from the parallel to the antiparallel state.

### Material classes in spintronics
* **Metallic ferromagnets and insulators (metal/insulator stacks):** Ferromagnetic transition metals and alloys such as $\text{Co}$, $\text{Fe}$, $\text{NiFe}$, and amorphous $\text{CoFeB}$ provide high spin polarization at room temperature. They are paired with non-magnetic metals ($\text{Cu}$) in GMR devices or crystalline oxide insulators ($\text{MgO}$, $\text{Al}_2\text{O}_3$) in TMR devices.
* **Semiconductor-based materials:** Conventional semiconductors ($\text{Si}$, $\text{GaAs}$, $\text{InAs}$) allow spin transport and manipulation via electric fields. **Diluted magnetic semiconductors (DMS)**, such as $\text{GaAs}$ or $\text{InAs}$ doped with manganese ($\text{(Ga,Mn)As}$, $\text{(In,Mn)As}$), combine semiconducting tunability with ferromagnetism, though most DMS materials only exhibit ferromagnetism well below room temperature.
* **Graphene-based materials:** Graphene serves as an exceptional non-magnetic spin-transport channel in part because carbon has low atomic number and intrinsic spin–orbit coupling is weak. This allows spin-polarized currents to travel micrometre-scale distances with minimal spin scattering.

### Applications
* **Hard disk drive (HDD) read heads:** GMR spin-valve sensors revolutionized magnetic recording in the late 1990s by detecting tiny magnetic bits on spinning platters; modern high-density HDDs use higher-sensitivity TMR read heads.
* **Magnetoresistive random-access memory (MRAM):** Stores binary bits ($0$ and $1$) as parallel or antiparallel magnetization states in arrays of MTJs (using TMR). MRAM is non-volatile, fast, and can reduce the energy required to retain the stored bits; peripheral circuitry still consumes power.
* **Magnetic field sensors:** Used in automotive anti-lock braking rotors, industrial position encoders, and biosensors.

### Self-check questions
1. **Why does an antiparallel alignment of ferromagnetic layers in a GMR spin valve produce higher resistance than a parallel alignment?**
   *Answer:* In the parallel state, one spin channel matches the magnetization of both layers and passes through with weak scattering (forming a low-resistance path). In the antiparallel state, both spin-up and spin-down electrons encounter an oppositely magnetized layer and experience strong scattering.
2. **What is the structural difference between a GMR stack and a TMR magnetic tunnel junction?**
   *Answer:* A GMR stack separates its two ferromagnetic layers with a thin conductive non-magnetic metal (like $\text{Cu}$), whereas a TMR junction separates them with an ultrathin insulating barrier (like $\text{MgO}$ or $\text{Al}_2\text{O}_3$) through which electrons must tunnel.

<!-- page 15 | Revision sheet and practice problems -->

## Revision sheet and practice problems

### Core Definitions and Formulas

| Concept | Definition / Key Relationship | Governing Equation / Metric |
| :--- | :--- | :--- |
| **Nanomaterial classification** | Materials with nanoscale external dimensions or internal features, typically around $1\text{--}100\text{ nm}$. | **0D:** all 3 dims $<100\text{ nm}$ (fullerenes, CQDs); **1D:** 2 dims $<100\text{ nm}$ (CNTs, nanowires); **2D:** 1 dim $<100\text{ nm}$ (graphene, nanofilms); **3D:** 0 external dims $<100\text{ nm}$, nano-structured bulk |
| **Surface-to-volume ratio** | Ratio of surface area ($A$) to volume ($V$) for a sphere of diameter $d$; drives high surface reactivity as $d$ decreases. | $\frac{A}{V} = \frac{\pi d^2}{\frac{1}{6}\pi d^3} = \frac{6}{d}$ |
| **Euler's polyhedron formula** | Relates vertices ($V$), edges ($E$), and faces ($F$) in closed convex cage molecules such as fullerenes. | $V - E + F = 2$ |
| **OLED photon emission** | Energy of light emitted when an electron drops from the LUMO to a hole in the HOMO. | $E = h\nu = \frac{hc}{\lambda}$; ($h$: Planck's constant, $c$: speed of light, $\lambda$: wavelength) |
| **Supercapacitor energy** | Electrostatic energy ($E$) stored in a cell of capacitance $C$ at voltage $V$; converted from joules to watt-hours. | $E = \frac{1}{2}CV^2 \quad (\text{in J})$; $E_{\text{Wh}} = \frac{E}{3600} \quad (\text{in Wh})$ |
| **Qubit state space** | An $n$-qubit register exists in a linear superposition of $2^n$ computational basis states prior to measurement. | Basis states $= 2^n$; Each single measurement collapses the state to **1** classical bit-string outcome. |
| **Magnetoresistance (MR)** | Relative electrical resistance change between antiparallel ($R_{\text{AP}}$) and parallel ($R_{\text{P}}$) ferromagnetic alignments. | $\text{MR} = \frac{R_{\text{AP}} - R_{\text{P}}}{R_{\text{P}}} \times 100\%$ |

> **Watch out.** Do not confuse excitation with emission in organic electronics, or superposition with classical parallel output. In an OLED, radiative recombination is a **LUMO $\rightarrow$ HOMO** decay (not HOMO $\rightarrow$ LUMO). In quantum computing, an $n$-qubit superposition holds $2^n$ amplitudes simultaneously, but measuring the register yields only **one** bit-string per run.

### Rapid-Fire Retrieval Q&A

1. **Is molecular fullerene ($\text{C}_{60}$) harder than diamond?**
   No. Individual $\text{C}_{60}$ cages have strong covalent bonds, but solid fullerite crystals are held together by weak van der Waals forces, making ordinary bulk $\text{C}_{60}$ a comparatively soft molecular solid.
2. **What is the exact geometry of $\text{C}_{60}$?**
   It is a **truncated icosahedron** ($32$ faces: $12$ isolated pentagons and $20$ hexagons, with $60$ $sp^2$-hybridized carbon vertices and two distinct C–C bond lengths), not a regular $20$-faced icosahedron.
3. **Are all carbon nanotubes metallic conductors?**
   No. Electronic behavior depends on the chiral vector $(n,m)$: armchair CNTs ($n=m$) are metallic, whereas zigzag ($m=0$) and chiral ($n \neq m$) CNTs are nominally metallic in the zone-folding model if $(n-m)$ is a multiple of $3$, and semiconducting otherwise. Curvature can open a small gap in non-armchair tubes.
4. **How does doping polyaniline (PANI) differ from doping polyacetylene?**
   Polyacetylene is doped via redox reactions ($\text{FeCl}_3$ oxidation or sodium naphthalide reduction), whereas emeraldine base PANI is converted to the conducting emeraldine salt via **acid protonation** ($\text{HCl}$) without changing the average oxidation state of the backbone.
5. **Do flame-retardant polymers make materials completely fireproof?**
   No. They are **flame-retardant**, meaning they slow ignition, reduce heat release, and quench gas-phase free radicals ($\text{H}^\bullet$, $\text{OH}^\bullet$) or form protective char to provide escape time, but they can still degrade under sustained heat.
6. **Which orbital transition produces light in an OLED?**
   Electroluminescence occurs via radiative **LUMO $\rightarrow$ HOMO** relaxation (exciton recombination) in the emissive layer after electrons are injected from the cathode and holes from the anode.
7. **In a DSSC, which component absorbs sunlight and which transports electrons?**
   The **photosensitizer dye** absorbs visible light and injects photoexcited electrons into the conduction band of the wide-band-gap **$\text{TiO}_2$ semiconductor**, while the **counter electrode** (Pt/graphite) reduces $\text{I}_3^-$ back to $\text{I}^-$ in the electrolyte.
8. **What is the role of the separator in an electrical double-layer capacitor (EDLC)?**
   It physically prevents electrical contact and electron flow between the electrodes while remaining porous to allow **electrolyte ions** to migrate freely during charging and discharging.
9. **Does an $8$-qubit quantum register output $256$ numbers at once when read?**
   No. An $8$-qubit system spans $2^8 = 256$ basis states in superposition, interference changes their probabilities during gate operations, but a single readout collapses the register to **one** $8$-bit value.
10. **How do GMR and TMR spin valves differ in construction?**
    **Giant Magnetoresistance (GMR)** uses a thin non-magnetic **metal** spacer (such as $\text{Cu}$) between ferromagnetic layers, whereas **Tunnel Magnetoresistance (TMR)** uses an ultrathin **insulating oxide** barrier (such as $\text{MgO}$ or $\text{Al}_2\text{O}_3$) through which spin-polarized electrons quantum-mechanically tunnel.

### Numerical Practice Problems

1. *(Additional illustrative example)* Assume a bulk sample of spherical nanoparticles of diameter $d_1 = 50\text{ nm}$ is dispersed into smaller spherical nanoparticles of diameter $d_2 = 10\text{ nm}$ while conserving total material volume. Calculate the factor by which (a) the surface-to-volume ratio increases and (b) the total number of particles increases.

   **Solution:**
   For a sphere of diameter $d$, the surface-to-volume ratio is $A/V = 6/d$.
   $$
   \frac{(A/V)_2}{(A/V)_1} = \frac{6/d_2}{6/d_1} = \frac{d_1}{d_2} = \frac{50\text{ nm}}{10\text{ nm}} = 5
   $$
   Since total volume $V_{\text{total}} = N \left(\frac{1}{6}\pi d^3\right)$ is constant, the particle count $N$ scales inversely with $d^3$:
   $$
   \frac{N_2}{N_1} = \left(\frac{d_1}{d_2}\right)^3 = \left(\frac{50\text{ nm}}{10\text{ nm}}\right)^3 = 5^3 = 125
   $$
   The surface-to-volume ratio increases by a factor of **$5$**, and the particle count increases by a factor of **$125$**.

2. *(Additional illustrative example)* A $\text{C}_{60}$ fullerene cage has $V = 60$ carbon vertices, each forming $3$ covalent bonds along the polyhedral edges. Calculate the total number of edges $E$ and use Euler's polyhedron formula to find the total number of ring faces $F$.

   **Solution:**
   Each edge connects $2$ vertices, so $3$ bonds per vertex yields:
   $$
   E = \frac{3V}{2} = \frac{3 \times 60}{2} = 90\text{ edges}
   $$
   Applying Euler's formula ($V - E + F = 2$):
   $$
   60 - 90 + F = 2 \implies F = 32\text{ faces}
   $$
   The $\text{C}_{60}$ cage has **$90$ edges** and **$32$ faces** ($12$ pentagons and $20$ hexagons).

3. *(Additional illustrative example)* An electrical double-layer supercapacitor cell has a capacitance of $C = 50\text{ F}$ and is charged to a cell voltage of $V = 2.0\text{ V}$. Calculate the stored energy in joules ($\text{J}$) and in watt-hours ($\text{Wh}$).

   **Solution:**
   Using the electrostatic energy equation:
   $$
   E = \frac{1}{2}CV^2 = 0.5 \times 50\text{ F} \times (2.0\text{ V})^2 = 100\text{ J}
   $$
   Converting joules to watt-hours ($1\text{ Wh} = 3600\text{ J}$):
   $$
   E_{\text{Wh}} = \frac{100\text{ J}}{3600\text{ J Wh}^{-1}} = 0.0278\text{ Wh}
   $$
   The supercapacitor stores **$100\text{ J}$** (or **$0.0278\text{ Wh}$**).

4. *(Additional illustrative example)* A quantum processor register contains $n = 5$ entangled qubits. Determine the number of computational basis states in its superposition space and state how many classical bit strings are obtained from a single projective measurement.

   **Solution:**
   The dimension of the basis state space for $n$ qubits is $2^n$:
   $$
   \text{Number of basis states} = 2^5 = 32
   $$
   Upon measurement, wavefunction collapse projects the superposition onto a single eigenstate. Thus, **$32$ basis states** can be represented in superposition, and **one** $5$-bit classical string is returned per measurement.

5. *(Additional illustrative example)* A spintronic read-head sensor exhibits a resistance of $R_{\text{P}} = 80\text{ }\Omega$ when its ferromagnetic layers are aligned parallel and $R_{\text{AP}} = 100\text{ }\Omega$ when aligned antiparallel. Calculate the magnetoresistance ratio ($\text{MR}$) as a percentage.

   **Solution:**
   Using the optimistic magnetoresistance definition:
   $$
   \text{MR} = \frac{R_{\text{AP}} - R_{\text{P}}}{R_{\text{P}}} \times 100\% = \frac{100\text{ }\Omega - 80\text{ }\Omega}{80\text{ }\Omega} \times 100\% = 25\%
   $$
   The magnetoresistance of the sensor is **$25\%$**.

### Long-Answer Review Prompts and Learning Checklist

Use these structured prompts to verify mastery across all Module 2 topics:

1. **Nanomaterials and Synthesis:** Classify nanomaterials by dimension ($0\text{D}\text{--}3\text{D}$) and composition (carbon, metal/oxide, nanocomposites, dendrimers, biological), and write balanced chemical equations for preparing nano-$\text{TiO}_2$ via alkoxide sol–gel hydrolysis/polycondensation and metallic nanoparticles via chemical reduction, distinguishing a reduction half-reaction from a complete synthesis equation.
2. **Graphene and Carbon Quantum Dots (CQDs):** Explain how $sp^2$ hybridization and delocalized $p_z$ ($\pi$) orbitals govern the electrical, thermal, and mechanical properties of graphene; compare top-down and bottom-up routes for synthesizing graphene and fluorescent CQDs ($<10\text{ nm}$).
3. **Fullerenes and Carbon Nanotubes (CNTs):** Compare the cage structure of $\text{C}_{60}$ with single-walled (armchair, zigzag, chiral) and multi-walled (Russian doll, parchment) CNTs, relating their synthesis (arc discharge, laser ablation, CVD) and geometry to electronic and energy-storage applications.
4. **Polymer Classification and Flame Retardancy:** Distinguish addition vs. condensation polymers and homopolymers vs. copolymers; explain how halogenated polymers (PVC, polybromostyrene) quench gas-phase combustion radicals ($\text{H}^\bullet, \text{OH}^\bullet$) and how non-halogenated char-forming polymers (novolac, bakelite, polyimide, polybenzoxazole) slow flame spread.
5. **Conducting Polymers, PANI, and PPy:** Contrast intrinsically conducting polymers (conjugated $\pi$-backbones, $p$-doping with $\text{FeCl}_3$, $n$-doping with sodium naphthalide) with extrinsically conducting polymers (filled and blended); outline the chemical and electrochemical oxidative polymerization of polyaniline (PANI) and polypyrrole (PPy) and identify emeraldine salt as the conducting form of PANI.
6. **Organic Light-Emitting Diodes (OLEDs):** Sketch the multilayer OLED architecture (substrate, ITO anode, a suitable hole-injection/transport layer, polyfluorene/PPV emissive layer, metallic cathode) and explain charge injection, hole/electron migration, and radiative exciton recombination.
7. **Dye-Sensitized Solar Cells (DSSCs):** Diagram a DSSC and trace the complete closed-loop charge cycle: dye photoexcitation, electron injection into mesoporous nano-$\text{TiO}_2$, external circuit work, dye regeneration by $\text{I}^-$, and $\text{I}_3^-$ reduction at the counter electrode.
8. **Supercapacitors, Quantum Computing, and Spintronics:** Compare electrostatic double-layer charge storage in porous carbon supercapacitors with battery storage; summarize how superposition, entanglement, and interference operate in superconducting (Al, Nb, TiN), spin (Si), and photonic (InAs, GaAs) qubits; and explain how spin polarization and magnetoresistance (GMR/TMR) enable non-volatile magnetic memory and sensors.

### Learning checklist

- Explain a material’s structure before listing its properties and applications.
- Distinguish ideal models from real samples, formulations and devices.
- Trace electrons, holes and ions separately in each device.
- State units, assumptions and the reference denominator in every calculation.
