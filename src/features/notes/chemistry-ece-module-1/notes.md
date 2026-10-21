<!-- page 1 | Start here -->

## Electrochemistry and Corrosion Science

Master fundamental electrochemistry, electrochemical cells, reference electrodes, conductivity, batteries, fuel cells, and corrosion control mechanisms through structured theory and applied numericals.

**Before you start:** Basic thermodynamics and free energy concepts; High school oxidation-reduction reactions; Basic stoichiometry and solution concentration units.

### Your path through this module

1. **Introduction to Electrochemical and Electrolytic Cells**: The separation of redox half-reactions using a salt bridge to establish electrical continuity without direct mixing.
2. **Single Electrode Potential and Electrochemical Series**: Quantifying single-electrode tendencies and ranking metals on the hydrogen scale to predict redox spontaneity.
3. **Nernst Equation and Electrode/Cell Potentials**: Relating free energy changes directly to concentration quotients via the Nernst equation.
4. **Reference Electrodes and pH Determination**: Using a primary or secondary reference standard with fixed potential to isolate and measure half-cell potentials.
5. **Conductivity of Electrolytes**: Characterizing electrolytic solutions by their specific conductance and cell constants.
6. **Batteries and Fuel Cells**: Reversible ion intercalation in lithium batteries and continuous reactant feeding in fuel cells.
7. **Corrosion Science and Electrochemical Mechanisms**: Spontaneous local galvanic cell formation on heterogeneous metal surfaces leading to material degradation.
8. **Corrosion Control, Electroplating, and Electroless Plating**: Forcing protected structures to act as cathodes or utilizing autocatalytic chemical reduction for non-conductive plating.

<!-- page 2 | Introduction to Electrochemical and Electrolytic Cells -->

## Introduction to Electrochemical and Electrolytic Cells

Electrochemistry is a branch of chemistry that deals with the chemical applications of electricity. It mainly focuses on chemical reactions produced by passing an electric current through an electrolyte, or the production of an electric current through chemical reactions.

### Differences Between Electrochemical and Electrolytic Cells

Cells that interconvert chemical and electrical energy are categorized into two primary types:

| Electrochemical Cell | Electrolytic Cell |
| --- | --- |
| Converts chemical energy to electric energy | Converts electric energy to chemical energy |
| Cell EMF is positive ($+ve$) | Cell EMF is negative ($-ve$) |
| Free energy change $\Delta G$ is negative ($-ve$) | Free energy change $\Delta G$ is positive ($+ve$) |
| Anode is negative terminal | Anode is positive terminal |

### Electrochemical Cells or Galvanic Cells

Galvanic cells are electrochemical cells in which electrons transferred due to a spontaneous redox reaction are converted into electrical energy. A classic example is the Daniel Cell.

#### Construction and Working of a Daniel Cell

The Daniel cell consists of a zinc electrode dipped in a $1 \text{ M } \text{ ZnSO}_4$ solution and a copper electrode dipped in a $1 \text{ M } \text{ CuSO}_4$ solution. Each electrode is known as a half-cell. The two solutions are interconnected by a salt bridge, and the two electrodes are connected by an external wire through a voltmeter.

![Daniell cell showing the zinc anode, copper cathode, salt bridge, and ion movement](https://upload.wikimedia.org/wikipedia/commons/3/3a/Daniell_cell_with_non-specific_salt_bridge.png)

> **Figure: Daniel Cell diagram**
>
> Daniell cell schematic showing zinc and copper half-cells, electron flow through the external circuit, and ion migration through a KNO₃ salt bridge. [Source: Wikimedia Commons, CC0](https://commons.wikimedia.org/wiki/File:Daniell_cell_with_non-specific_salt_bridge.png).

#### Reactions Occurring in the Cell

- **At Anode:** Oxidation takes place at the zinc electrode through the liberation of electrons. Hence, this electrode is called the negative electrode or anode:
  $$\text{Zn}_{(s)} \rightarrow \text{Zn}^{2+}_{(aq)} + 2\text{e}^- \quad (\text{Anode})$$

- **At Cathode:** Reduction takes place at the copper electrode via the acceptance of electrons. Hence, this electrode is called the positive electrode or cathode:
  $$\text{Cu}^{2+}_{(aq)} + 2\text{e}^- \rightarrow \text{Cu}_{(s)} \quad (\text{Cathode})$$

- **Net Cell Reaction:** Combining the two half-reactions gives the overall cell process:
  $$\text{Cu}^{2+}_{(aq)} + \text{Zn}_{(s)} \rightarrow \text{Zn}^{2+}_{(aq)} + \text{Cu}_{(s)}$$

Electrons liberated by the oxidation reaction flow through the external wire and are consumed by the copper ions at the cathode.

#### Cell Representation

The Daniel cell is represented in standard notation as:
$$\text{Zn}_{(s)} / \text{Zn}^{2+}_{(aq)} // \text{Cu}^{2+}_{(aq)} / \text{Cu}_{(s)}$$

In this convention, the anode is written on the left, the cathode on the right, and the double slash ($//$) represents the salt bridge separating the ionic species of each half-cell.

### Salt Bridge and its Significance

A salt bridge is typically an inverted U-tube filled with a concentrated solution of an inert electrolyte. An inert electrolyte is one whose constituent ions are neither involved in any electrochemical change nor do they react chemically with the electrolytes in the two half-cells. Generally, salts like $\text{KCl}$, $\text{KNO}_3$, and $\text{NH}_4\text{NO}_3$ are used.

**Preparation:** To prepare a salt bridge, gelatin or agar-agar is dissolved in a hot concentrated aqueous solution of an inert electrolyte, and the resulting solution is poured into the U-tube. Upon cooling, the solution sets into the form of a gel. The ends of the U-tube are plugged with cotton wool to minimize diffusion effects while maintaining ionic contact.

**Significance of Salt Bridge:**
1. It connects the solutions of the two half-cells and completes the electrical cell circuit.
2. It prevents the physical transference or diffusion of bulk electrolyte solutions from one half-cell to the other.
3. It maintains electrical neutrality in the solutions of both half-cells by allowing counter-ions to migrate appropriately.

### Single Electrode Potential

#### Origin of Electrode Potential

When a metal rod is placed in contact with a solution containing its own ions, it may undergo either oxidation ($M \rightarrow M^{n+} + n\text{e}^-$) or reduction ($M^{n+} + n\text{e}^- \rightarrow M$) depending on the inherent nature of the metal.

![Single electrode cell (half-cell)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p003-1.webp)

> **Figure: Single electrode cell (half-cell)**
>
> Diagram of a single electrode cell (half-cell) titled 'Single electrode cell (half-cell)'. It shows a container holding a solution with positive metal ions (M+) and negative ions, and a metal rod labeled 'M' immersed in the solution. At the top, a potential difference is indicated by 'Delta phi'. Electrons (e-) are shown near the metal-solution interface. The bottom of the figure includes the website label www.substech.com.

<!-- page 3 | Single Electrode Potential and Electrochemical Series -->

## Single Electrode Potential and Electrochemical Series

### Origin of Electrode Potential and the Helmholtz Electrical Double Layer

When a metal rod is placed in contact with a solution containing its own metal ions ($\text{M}^{n+}$), two opposing tendencies compete at the metal-solution interface: metal atoms tend to lose electrons and enter the solution as ions (oxidation), while metal ions in the solution tend to accept electrons from the metal and deposit onto the rod (reduction).

If the metal possesses a stronger anodic nature, metal ions ($\text{M}^{n+}$) pass from the metal into the solution, leaving behind excess electrons on the metal rod. Consequently, the metal develops a negative charge. Conversely, if the metal possesses a cathodic nature, metal ions from the solution undergo reduction on the metal surface, causing the rod to develop a positive charge.

![Zn electrode in ZnSO4 solution and Cu electrode in CuSO4 solution](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p005-1.webp)

> **Figure: Zn electrode in ZnSO4 solution and Cu electrode in CuSO4 solution**
>
> Two diagrams showing (a) Zn electrode in ZnSO4 solution and (b) Cu electrode in CuSO4 solution. Diagram (a) shows a Zn electrode immersed in a Zn2+ ion solution with Zn2+ ions leaving the electrode. Diagram (b) shows a Cu electrode immersed in a Cu2+ ion solution with Cu2+ ions moving towards the electrode.

This initial transfer of charge creates an electrostatic attraction: a negatively charged metal rod attracts positive ions from the solution, whereas a positively charged metal rod attracts negative ions. This accumulation forms a tightly bound layer of ions of opposite charge immediately adjacent to the metal surface. This microscopic charge separation is known as the **Helmholtz electrical double layer**.

![Electrochemical Series Table](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p006-1.webp)

> **Figure: Electrochemical Series Table**
>
> Electrochemical Series Table with columns for Redox couple, Half-reaction, and Standard potential (V). Row 1: Mg2+/Mg, Mg2+ + 2e- -> Mg, -2.37. Row 2: Pb2+/Pb, Pb2+ + 2e- -> Pb, -1.12. Row 3: Zn2+/Zn, Zn2+ + 2e- -> Zn, -0.76. Row 4: Fe2+/Fe, Fe2+ + 2e- -> Fe, -0.44. Row 5: Sn2+/Sn, Sn2+ + 2e- -> Sn, -0.136. Row 6: H+/H2, 2H+ + 2e- -> H2, 0.00, Pt-reference. Row 7: Cu2+/Cu, Cu2+ + 2e- -> Cu, +0.34. Row 8: Ag+/Ag, Ag+ + e- -> Ag, +0.80. Row 9: Au+/Au, Au+ + e- -> Au, +1.50. Row 10: 1/2 F2 / F-, 1/2 F2 + e- -> F-, +2.87. An arrow points upwards on the right side above the hydrogen reference labeled with an upward-pointing arrow, and an arrow points downwards below the hydrogen reference labeled 'Cathodic'.

The formation of the Helmholtz electrical double layer sets up a potential difference between the metal and the solution, which halts further net transfer of ions across the interface. Once dynamic equilibrium is attained, this potential difference becomes constant and is defined as the single electrode potential.

The magnitude of an electrode potential depends on:
- Nature of the metal and its ions
- Concentration of metal ions in the solution
- Temperature

### Key Definitions

- **Single electrode potential ($E$):** The measure of the tendency of a metallic electrode to lose or gain electrons when it is in contact with a solution of its own salt.
- **Standard electrode potential ($E^{\bullet}$):** The measure of the tendency of a metallic electrode to lose or gain electrons when it is in contact with a solution of its own salt at 1 molar concentration at $25^\text{o}\text{C}$ ($298\text{ K}$). Units are in Volts ($\text{V}$).
- **Oxidation potential:** The potential acquired by an electrode when oxidation (loss of electrons) occurs at equilibrium.
- **Reduction potential:** The potential acquired by an electrode when reduction (gain of electrons) occurs at equilibrium. By IUPAC convention, standard electrode potentials are expressed as standard reduction potentials.

### Electrochemical Series (EMF Series)

When various metallic and non-metallic electrodes are arranged in the order of their increasing values of standard reduction potential on the hydrogen scale (where standard hydrogen electrode potential is fixed at $0.00\text{ V}$), the resulting listing is called the **electrochemical series** or **EMF series**.

### Applications of the Electrochemical Series

#### 1. Calculation of Standard Cell EMF ($E_{\text{cell}}^{\bullet}$)
The standard electromotive force (emf) of a galvanic cell is calculated from the difference between the standard reduction potentials of the right-hand electrode (cathode) and the left-hand electrode (anode):

$$E_{\text{cell}}^{\bullet} = E_{\text{R.H.E}}^{\bullet} - E_{\text{L.H.E}}^{\bullet}$$

#### 2. Relative Ease of Oxidation and Reduction
- Higher positive values of standard reduction potential indicate a greater tendency to undergo reduction (e.g., Fluorine, $E^{\bullet} = +2.87\text{ V}$). Thus, elements at the bottom of the series act as strong oxidizing agents.
- Higher negative values of standard reduction potential indicate a greater tendency to undergo oxidation (e.g., Lithium, $E^{\bullet} = -3.01\text{ V}$). Thus, elements at the top of the series act as strong reducing agents and are easily ionized.

#### 3. Displacement Reactions

##### (a) Displacement of metals from salt solutions
A metal higher in the electrochemical series (more negative reduction potential) can displace any metal lying below it (more positive reduction potential) from its salt solution. For example, considering copper and zinc:

$$E^{\bullet}_{\text{Cu}^{2+}/\text{Cu}} = +0.34\text{ V} \quad \text{and} \quad E^{\bullet}_{\text{Zn}^{2+}/\text{Zn}} = -0.76\text{ V}$$

Because $\text{Zn}$ has a lower reduction potential than $\text{Cu}$, zinc metal displaces copper from copper sulfate solutions.

##### (b) Hydrogen displacement behavior
- **Metals with negative reduction potentials** (positioned above hydrogen in the series) displace hydrogen gas from dilute acid solutions. For example, zinc reacts with dilute sulfuric acid:

$$\text{Zn} + \text{H}_2\text{SO}_4 \rightarrow \text{ZnSO}_4 + \text{H}_2\uparrow \quad (E^{\bullet}_{\text{Zn}} = -0.76\text{ V})$$

- **Metals with positive reduction potentials** (positioned below hydrogen in the series) do not displace hydrogen from acids:

$$\text{Ag} + \text{H}_2\text{SO}_4 \rightarrow \text{No reaction} \quad (E^{\bullet}_{\text{Ag}} = +0.80\text{ V})$$

##### (c) Non-metal displacement
A non-metal with a higher standard reduction potential can displace a non-metal with a lower reduction potential from its salt solution. For example, passing fluorine gas through a sodium chloride solution displaces chlorine:

$$2\text{NaCl} + \text{F}_2 \rightarrow 2\text{NaF} + \text{Cl}_2$$

$$\text{F}_2 + 2\text{e}^- \rightarrow 2\text{F}^- \quad (E^{\bullet} = +2.87\text{ V})$$

$$\text{Cl}_2 + 2\text{e}^- \rightarrow 2\text{Cl}^- \quad (E^{\bullet} = +1.36\text{ V})$$

#### 4. Predicting Spontaneity of Redox Reactions

The Gibbs free energy change ($\Delta G^{\bullet}$) is related to standard cell emf ($E^{\bullet}$) by the expression:

$$\Delta G^{\bullet} = -n F E^{\bullet}$$

Where $n$ is the number of electrons transferred and $F$ is the Faraday constant ($96,485\text{ C/mol}$).

- If $E^{\bullet}_{\text{cell}}$ is **positive**, $\Delta G^{\bullet}$ is **negative**, indicating that the redox reaction is **spontaneous** (feasible).
- If $E^{\bullet}_{\text{cell}}$ is **negative**, $\Delta G^{\bullet}$ is **positive**, indicating that the redox reaction is **non-spontaneous**.

#### 5. Analysis of Products of Electrolysis
During the electrolysis of aqueous mixtures containing competing ions, the species with the highest standard reduction potential preferentially undergoes reduction at the cathode, while the species with the lowest standard reduction potential (or easiest oxidation tendency) preferentially undergoes oxidation at the anode.

<!-- page 4 | Nernst Equation and Electrode/Cell Potentials -->

## Nernst Equation and Electrode/Cell Potentials

### Van't Hoff Isotherm and Free Energy
Real electrochemical cells frequently operate under non-standard concentrations and temperatures. To relate cell potentials and free energy changes to these varying conditions, we begin with the fundamental thermodynamic relation known as the **Van't Hoff isotherm**:

$$\Delta G = \Delta G^{\circ} + RT \ln Q$$

Where:
- $\Delta G$ = Free energy change under non-standard conditions ($\text{J/mol}$)
- $\Delta G^{\circ}$ = Standard free energy change ($\text{J/mol}$)
- $R$ = Universal gas constant ($8.314 \text{ J}/\text{K}/\text{mol}$)
- $T$ = Absolute temperature ($\text{K}$)
- $Q$ = Reaction quotient, expressed as $\frac{[\text{Product}]}{[\text{Reactant}]}$

The maximum electrical work obtainable from an electrochemical cell is directly related to the decrease in Gibbs free energy ($-\Delta G$):

$$-\Delta G = nEF \quad \text{and} \quad -\Delta G^{\circ} = nE^{\circ}F$$

Where:
- $n$ = Number of electrons transferred in the redox reaction
- $F$ = Faraday constant ($96500 \text{ C/mol}$)
- $E$ = Cell or electrode potential under non-standard conditions ($\text{V}$)
- $E^{\circ}$ = Standard electrode or cell potential ($\text{V}$)

---

### Derivation of the Nernst Equation for Single Electrodes
Consider a general reduction half-reaction:

$$\text{M}^{n+} + n\text{e}^- \rightleftharpoons \text{M}$$

Substituting $-\Delta G = nEF$ and $-\Delta G^{\circ} = nE^{\circ}F$ into the Van't Hoff isotherm gives:

$$-nEF = -nE^{\circ}F + RT \ln \frac{[\text{M}]}{[\text{M}^{n+}]}$$

Dividing the entire equation by $-nF$:

$$E = E^{\circ} - \frac{RT}{nF} \ln \frac{[\text{M}]}{[\text{M}^{n+}]}$$

Since the activity of a pure solid metal $[\text{M}]$ is taken as unity ($1$):

$$E = E^{\circ} - \frac{RT}{nF} \ln \frac{1}{[\text{M}^{n+}]} \quad \implies \quad E = E^{\circ} + \frac{RT}{nF} \ln [\text{M}^{n+}]$$

Converting to base-10 logarithm ($\ln x = 2.303 \log x$):

$$E = E^{\circ} + \frac{2.303RT}{nF} \log [\text{M}^{n+}]$$

Substituting the standard values $R = 8.314 \text{ J/K/mol}$, $F = 96500 \text{ C}$, and $T = 298 \text{ K}$ ($25^{\circ}\text{C}$), the constant term $\frac{2.303RT}{F}$ evaluates to approximately $0.0591$:

For **reduction potential**:
$$E = E_{\text{red}}^{\circ} + \frac{0.0591}{n} \log [\text{M}^{n+}]$$

For **oxidation potential**:
$$E = E_{\text{oxi}}^{\circ} - \frac{0.0591}{n} \log [\text{M}^{n+}]$$

---

### Nernst Equation for Cell Potential
For a complete electrochemical cell reaction represented by:

$$a\text{A} + b\text{B} \xrightarrow{\quad\quad} c\text{C} + d\text{D}$$

The Nernst equation for the cell potential at $25^{\circ}\text{C}$ is:

$$E_{\text{cell}} = E_{\text{cell}}^{\circ} - \frac{0.0591}{n} \log \frac{[\text{C}]^c [\text{D}]^d}{[\text{A}]^a [\text{B}]^b}$$

For example, in a Daniel Cell ($\text{Zn}_{(s)} / \text{Zn}^{2+}_{(aq)} \, (1\text{M}) \, // \, \text{Cu}^{2+}_{(aq)} \, (1\text{M}) / \text{Cu}_{(s)}$), the equation becomes:

$$E_{\text{cell}} = E_{\text{cell}}^{\circ} - \frac{0.0591}{2} \log \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]}$$

---

### Significance and Applications of the Nernst Equation
1. Calculates single electrode potentials and cell EMFs under non-standard concentrations.
2. Studies the influence of electrolyte concentration changes on potential.
3. Enables the determination of solution $\text{pH}$ via potential measurements.
4. Calculates the equilibrium constant ($K$) of redox reactions.
5. Determines the valencies of ions and the number of electrons transferred in reactions.

---

### Solved Numerical Problems

**Problem 1:** What is the potential of a lead electrode that is in contact with a solution of $0.015 \text{ M Pb}^{2+}$ ions? Standard electrode potential ($E^{\circ}$) for $\text{P} \rightarrow \text{Pb}^{2+} + 2\text{e}^-$ is $0.13 \text{ V}$.

- **Given:** Concentration $[\text{Pb}^{2+}] = 0.015 \text{ M}$, $E^{\circ} = +0.13 \text{ V}$ (oxidation potential), $n = 2$.
- **Formula:** $E = E^{\circ} - \frac{0.0591}{n} \log [\text{Pb}^{2+}]$
- **Substitution & Calculation:**
  $$E = 0.13 - \frac{0.0591}{2} \log(0.015)$$
  $$E = 0.13 - 0.02955(-1.824) = 0.13 + 0.0539$$
- **Answer:** Oxidation potential of $\text{Pb} = 0.184 \text{ V}$.

**Problem 2:** Calculate the electrode potential of zinc electrode dipped in $0.1 \text{ M ZnSO}_4$ solution at $25^{\circ}\text{C}$. ($E^{\circ}_{\text{Zn}^{2+}/\text{Zn}} = -0.763 \text{ V}$).

- **Given:** $[\text{Zn}^{2+}] = 0.1 \text{ M}$, $E^{\circ}_{\text{red}} = -0.763 \text{ V}$, $n = 2$.
- **Formula:** $E = E^{\circ}_{\text{red}} + \frac{0.0591}{n} \log [\text{Zn}^{2+}]$
- **Substitution & Calculation:**
  $$E = -0.763 + \frac{0.0591}{2} \log(0.1)$$
  $$E = -0.763 + (0.02955)(-1) = -0.763 - 0.02955$$
- **Answer:** Reduction potential of $\text{Zn} = -0.79255 \text{ V}$.

**Problem 3:** Calculate the single electrode potential of zinc in $0.05 \text{ M ZnSO}_4$ solution at $25^{\circ}\text{C}$. ($E^{\circ}_{\text{Zn}/\text{Zn}^{2+}} = 0.763 \text{ V}$).

- **Given:** $[\text{Zn}^{2+}] = 0.05 \text{ M}$, $E^{\circ}_{\text{oxi}} = 0.763 \text{ V}$, $n = 2$.
- **Formula:** $E = E^{\circ} - \frac{0.0591}{n} \log [\text{Zn}^{2+}]$
- **Substitution & Calculation:**
  $$E = 0.763 - \frac{0.0591}{2} \log(0.05)$$
  $$E = 0.763 - 0.02955(-1.301) = 0.763 + 0.0384$$
- **Answer:** Oxidation potential of $\text{Zn} = 0.8014 \text{ V}$.

**Problem 4:** Calculate the reduction potential of $\text{Cu}^{2+}/\text{Cu}$ where $[\text{Cu}^{2+}] = 0.5 \text{ M}$ at $25^{\circ}\text{C}$. ($E^{\circ}_{\text{Cu}^{2+}/\text{Cu}} = 0.337 \text{ V}$).

- **Given:** $[\text{Cu}^{2+}] = 0.5 \text{ M}$, $E^{\circ} = 0.337 \text{ V}$, $n = 2$.
- **Formula:** $E = E^{\circ} + \frac{0.0591}{n} \log [\text{Cu}^{2+}]$
- **Substitution & Calculation:**
  $$E = 0.337 + \frac{0.0591}{2} \log(0.5)$$
  $$E = 0.337 + 0.02955(-0.3010) = 0.337 - 0.0089$$
- **Answer:** Reduction potential of $\text{Cu} = 0.328 \text{ V}$.

**Problem 5:** Find the oxidation potential of $\text{Zn/Zn}^{2+}$ electrode when $[\text{Zn}^{2+}] = 0.2 \text{ M}$ at $25^{\circ}\text{C}$. Standard oxidation potential of $\text{Zn/Zn}^{2+}$ is $0.763 \text{ V}$.

- **Given:** $[\text{Zn}^{2+}] = 0.2 \text{ M}$, $E^{\circ} = 0.763 \text{ V}$, $n = 2$.
- **Formula:** $E = E^{\circ} - \frac{0.0591}{n} \log [\text{Zn}^{2+}]$
- **Substitution & Calculation:**
  $$E = 0.763 - \frac{0.0591}{2} \log(0.2)$$
  $$E = 0.763 - 0.02955(-0.69897) = 0.763 + 0.02065$$
- **Answer:** Oxidation Potential of $\text{Zn} = 0.78365 \text{ V}$.

**Problem 6:** Calculate the amount of electrical energy available from a dry cell of EMF $1.5 \text{ V}$ which consumes $10 \text{ g Zn}$ (atomic weight of $\text{Zn} = 65.5$).

- **Given:** $E = 1.5 \text{ V}$, mass of $\text{Zn} = 10 \text{ g}$, atomic weight = $65.5 \text{ g/mol}$, $n = 2$.
- **Formula:** $\Delta G = -nFE$
- **Substitution & Calculation:**
  $$\Delta G \text{ per mole of Zn } (65.5 \text{ g}) = 2 \times 96500 \times 1.5 = 289500 \text{ J}$$
  $$\text{Electrical energy for } 10 \text{ g Zn} = \frac{289500 \text{ J}}{65.5 \text{ g}} \times 10 \text{ g}$$
- **Answer:** $44198 \text{ J}$.

**Problem 7:** Calculate the equilibrium constant of the Daniel cell reaction given that $E^{\circ}_{\text{cell}} = 1.1 \text{ V}$.

- **Given:** $E^{\circ}_{\text{cell}} = 1.1 \text{ V}$, $n = 2$, at equilibrium $\Delta G = 0$ and $E_{\text{cell}} = 0$, $Q = K$.
- **Formula:** $0 = E^{\circ}_{\text{cell}} - \frac{0.0591}{n} \log K$
- **Substitution & Calculation:**
  $$0 = 1.1 - \frac{0.0591}{2} \log K$$
  $$\log K = \frac{1.1 \times 2}{0.0591} = 37.22$$
  $$K = 10^{37.22} = 1.67 \times 10^{37}$$
- **Answer:** $K = 1.67 \times 10^{37}$.

<!-- page 5 | Reference Electrodes and pH Determination -->

## Reference Electrodes and pH Determination

Bridge: Because absolute single electrode potentials cannot be measured directly, we learn to use reference electrodes to measure unknown potentials and pH.

The new idea: Using a primary or secondary reference standard with fixed potential to isolate and measure half-cell potentials.

A reference electrode is an electrode whose potential is known and hence can be used to compare the potential of other electrodes. They are divided into two types:

1. Primary reference electrode
2. Secondary reference electrode

Standard Hydrogen Electrode (SHE) is an example of a primary reference electrode, and its potential is taken as zero at all temperatures. Calomel electrode, $\text{Ag-AgCl}$ electrode, glass electrode, quinhydrone electrode, etc., are commonly used secondary reference electrodes. Secondary reference electrodes are those electrodes whose potentials are known and can be combined with other electrodes to determine their unknown potentials.

### Standard Hydrogen Electrode (SHE) (Primary Reference Electrode)

#### Construction

A hydrogen electrode consists of a platinum foil connected to a platinum wire and sealed in a glass tube. Hydrogen gas is passed through the side arm of the glass tube. This electrode, when dipped in $1\text{ N HCl}$ and hydrogen gas at $1\text{ atmospheric pressure}$ is passed, forms a standard hydrogen electrode. The electrode potential of SHE is zero at all temperatures.

![Standard hydrogen electrode diagram](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p012-1.webp)

> **Figure: Standard hydrogen electrode diagram**
>
> A schematic diagram of a Standard Hydrogen Electrode (SHE) showing a central glass tube with an outer glass jacket. A platinum wire runs down the center, connected to a platinum foil at the bottom. A side arm on the upper right admits H2 gas, labelled with an arrow pointing to the interior ('H2 gas'). The lower part of the apparatus is submerged in a beaker containing 'HCl Solution'. A platinum foil is indicated near the bottom inside the solution ('Platinum foil').

It is represented as:
$$\text{Pt, H}_2(1\text{ atm}) / \text{H}^+(1\text{ M}) ; \text{E}^\bullet = 0\text{ V}$$

In a cell, when this electrode acts as an anode, the electrode reaction can be written as:
$$\text{H}_2\text{(g)} \rightarrow 2\text{H}^+ + 2\text{e}^-$$

When this electrode acts as a cathode, the electrode reaction can be written as:
$$2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2\text{(g)}$$

#### Limitations

1. It requires hydrogen gas and is difficult to set up and transport. $\text{H}_2$ gas is inflammable.
2. It requires a considerable volume of test solution.
3. The solution may poison the surface of the platinum electrode.
4. The potential of the electrode is altered by changes in barometric pressure.
5. Maintenance of $1\text{ M}$ concentration is difficult.

#### Advantages

1. It is a fundamental electrode to which all the pH measurements are ultimately referred.
2. It shows no salt error, negligible internal resistance, and negligible electrical leakage error.
3. It can be used over the entire pH range.
4. It is highly accurate.

---

### Saturated Calomel Electrode (Secondary Reference Electrode)

#### Construction

A calomel electrode consists of a glass tube containing mercury at the bottom over which mercurous chloride ($\text{Hg}_2\text{Cl}_2$, calomel) is placed. The remaining portion of the tube is filled with a saturated solution of $\text{KCl}$. The bottom of the tube is sealed with a platinum wire. The side tube is used for making electrical contact with a salt bridge. The electrode potential of the saturated calomel electrode is $+0.2422\text{ V}$.

![Diagram of a Calomel Electrode](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p013-1.webp)

> **Figure: Diagram of a Calomel Electrode**
>
> Diagram of a Calomel Electrode. An outer glass vessel containing a side tube with a porous plug. Inside the central tube, from bottom to top, there is a layer of Hg, then Hg2Cl2 paste, and the remaining portion is filled with KCl Solution. A platinum wire enters from the top, dipping into the mercury pool. Labels point to: Platinum wire, KCl Solution, Hg2Cl2 paste, and Hg.

It is represented as:
$$\text{Hg}, \text{Hg}_2\text{Cl}_{2(s)}, \text{KCl (sat. solution)} ; \text{E}^\bullet = 0.2422\text{ V}$$

If the electrode acts as an anode, the reaction is:
$$\begin{aligned}
2\text{Hg}_{(l)} &\rightarrow \text{Hg}^{2+} + 2\text{e}^-\
\text{Hg}^{2+} + 2\text{Cl}^- &\rightarrow \text{Hg}_2\text{Cl}_{2(s)}\
\\text{hline}\
2\text{Hg}_{(l)} + 2\text{Cl}^- &\rightarrow \text{Hg}_2\text{Cl}_{2(s)} + 2\text{e}^-
\\text{end}\\text{aligned}$$

If the electrode acts as a cathode, the reaction is:
$$\begin{aligned}
\text{Hg}_2\text{Cl}_{2(s)} &\rightarrow \text{Hg}^{2+} + 2\text{Cl}^-\
\text{Hg}^{2+} + 2\text{e}^- &\rightarrow 2\text{Hg}_{(l)}\
\\text{hline}\
\text{Hg}_2\text{Cl}_{2(s)} + 2\text{e}^- &\rightarrow 2\text{Hg}_{(l)} + 2\text{Cl}^-
\\text{end}\\text{aligned}$$

The electrode potential depends on the activity of the chloride ions and it decreases as the activity of the chloride ions increases. The Nernst equation of this electrode at $25^\bullet\text{C}$ is given by:
$$E_{\text{cal}} = E^\bullet_{\text{cal}} - \frac{0.0591}{2} \text{log}(\text{Cl}^-)^2$$
$$E_{\text{cal}} = 0.2810 - 0.0591 \text{log}(\text{Cl}^-)$$

The single electrode potentials of the three calomel electrodes on the hydrogen scale at $298\text{ K}$ are given as:
- $0.1\text{ N KCl} = 0.3338\text{ V}$
- $1.0\text{ N KCl} = 0.2810\text{ V}$
- $\text{Saturated KCl} = 0.2422\text{ V}$

#### Advantages

1. It is simple to construct.
2. Cell potential measurements are reproducible, stable over a large period, and do not vary significantly with temperature.
3. It is calibrated with respect to SHE.
4. It has the least potential gradient with temperature.
5. Potential values are reliable and measurements can be made with great accuracy.

#### Disadvantages

1. It should not be used above $50^\bullet\text{C}$ because the mercurous chloride breaks down, yielding an unstable reading.
2. It may cause toxicity.

---

### Glass Membrane Electrode (Internal Reference Electrode)

#### Construction

A glass membrane electrode is constructed in a similar way to that of a pH electrode. It consists of a thin-walled glass bulb (the glass is a special type having a low melting point and high electrical conductivity) containing a $\text{Pt}$ wire in $0.1\text{ M HCl}$. The glass electrode is represented as:
$$\text{Pt}, 0.1\text{ M HCl} / \text{Glass}$$

The $\text{HCl}$ in the bulb furnishes a constant $\text{H}^+$ ion concentration.

![Glass electrode diagram](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p015-1.webp)

> **Figure: Glass electrode diagram**
>
> Diagram of a glass electrode. A platinum wire connected to a coil spring at the top dips into 0.1 M HCl solution contained inside a cylindrical glass tube. The bottom of the tube terminates in a thin walled glass bulb. Pointer lines indicate 'Platinum wire', '0.1 M HCl', and 'Thin walled glass bulb'.

Glass electrodes are used as internal reference electrodes. The pH of these solutions, especially colored solutions containing oxidizing or reducing agents, can be determined.

#### Principle

When two solutions of different pH values are separated by a thin glass membrane, a difference of potential develops between the two surfaces of the membrane. The potential difference developed is proportional to the difference in pH value. The thin-walled glass bulb, called the glass membrane, functions as an ion-exchange resin, and an equilibrium is set up between the $\text{Na}^+$ ions of the glass and $\text{H}^+$ ions in the solution.

The electrode reaction is:
$$\text{H}^+ + \text{Na}^+_{\text{(glass)}} \rightarrow \text{Na}^+ + \text{H}^+_{\text{(glass)}}$$

And the cell representation is:
$$\text{Ag/AgCl} / 0.1\text{ M }\text{H}^+ / \text{glass} / \text{H}^+_{(c=?)}$$

The potential difference varies with the $\text{H}^+$ ion concentration and is given by the expression:
$$E_G = E^\bullet_G - 0.0592 \text{log} \frac{1}{(\text{H}^+)}$$
$$E_G = E^\bullet_G - 0.0592 \text{ pH}$$

Where $E^\bullet_G$ is a constant for a particular variety of glass ($E^\bullet_G = 0.6\text{ V}$ or $0.5\text{ V}$ depending on the variety of glass).

#### Advantages of Glass Electrode

1. It can be easily constructed and readily used.
2. The results are accurate.
3. It is not easily poisoned.
4. Equilibrium is rapidly achieved.

#### Limitations

1. Since the resistance is quite high, special electronic potentiometers are employed for measurement.
2. The glass electrode can be used in solutions only with a pH range of $0$ to $10$. However, above pH $12$ (high alkalinity), cations of the solution attack the glass and make the electrode useless.

---

### Determination of pH of a Solution Using a Glass Electrode

The glass electrode is placed in the solution under test and is coupled with a saturated calomel electrode, as shown in the figure below.

![Determination of pH using glass electrode setup](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p016-1.webp)

> **Figure: Determination of pH using glass electrode setup**
>
> Apparatus diagram titled 'Determination of pH using glass electrode'. A Voltmeter at the top with a 'V' inside is connected via wires to two electrodes immersed in a beaker containing a 'Solution of unknown pH'. The left electrode is a Calomel Electrode and the right electrode is a Glass Electrode. Arrows point from the labels to the respective electrodes and the solution.

The EMF of the cell is measured. From the EMF, the pH of the solution is calculated as follows:

$$E_{\text{cell}} = E_{\text{right}} - E_{\text{left}}$$
$$E_{\text{cell}} = E^\bullet_{\text{G}} - 0.0592 \text{ pH} - 0.2422$$
$$E_{\text{cell}} = (E^\bullet_{\text{G}} - 0.2422) - 0.0592 \text{ pH} \tag{1}$$n
Rearranging equation (1) for pH yields:
$$\text{pH} = \frac{E^\bullet_{\text{G}} - E_{\text{cell}} - 0.2422}{0.0591}$$

Equation (1) has the form of a straight-line equation, $y = c + mx$, having intercept $c$ and slope $m$ when plotting a graph between EMF ($y$-axis) and pH ($x$-axis). The intercept is $c = E^\bullet_{\text{G}} - 0.2422$ and the slope is $m = -0.0591$ at $25^\bullet\text{C}$.

---

## Conductivity of Electrolytes

**Specific Conductance ($\boldsymbol{\text{\tau}}$):** It is the conductance of $1\text{ cm}^3$ of a material or solution held between two electrodes of $1\text{ cm}^2$ area placed on the opposite pairs of faces of a cube of edge length $1\text{ cm}$.

$$\tau = \text{conductance} \times \frac{l}{a}$$
$$\tau = \frac{1}{R} \times \frac{l}{a} \text{ where } \frac{1}{R} = c$$

<!-- page 6 | Conductivity of Electrolytes -->

## Conductivity of Electrolytes

Bridge: Having established potential measurements, we now explore how ionic solutions conduct electrical current and how to compute specific conductance.

The new idea: Characterizing electrolytic solutions by their specific conductance and cell constants.

Objectives: Define specific conductance and cell constant; Explain the experimental measurement of conductivity using conductivity meters; Solve numerical problems involving specific conductance and resistance.

### Specific Conductance and Cell Constant

Specific conductance (also known as conductivity), denoted by $K$, is the reciprocal of specific resistance ($\rho$). It measures the ability of a given volume of solution to conduct electrical current.

$$\text{Specific Conductance } (K) = \frac{1}{\rho} = \frac{1}{R}\times\frac{l}{a}$$

Units of specific conductance:

$$K = \frac{1}{\text{ohm}\times\text{cm}} = \text{ohm}^{-1}\text{cm}^{-1} \text{ or } \text{mho}\cdot\text{cm}^{-1} \text{ or } \text{S}\cdot\text{cm}^{-1}$$

**Cell constant ($x$):**

It is the ratio of the distance between two electrodes ($l$) and the area of the electrodes ($a$).

$$x = \frac{l}{a}$$

Where:
- $l = \text{length in cm}$
- $a = \text{area in cm}^2$

Unit of cell constant:

$$x = \frac{\text{cm}}{\text{cm}^2} = \text{cm}^{-1}$$

### Conductivity Cell and Measurement Techniques

**Conductivity Cell:**

A conductivity cell consists of two electrode plates coated with finely divided platinum black. These two electrodes are welded with the ends of platinum wires that are sealed through two glass tubes. The tubes are strongly fixed such that the distance between electrodes remains unaltered.

**Determination of Cell Constant:**

Cell constant is measured by filling the conductivity cell with a solution of known conductivity, such as a $0.1\text{ M KCl}$ solution ($K = 0.01288\text{ S}\cdot\text{cm}^{-1}$ at $298\text{ K}$). By measuring the conductance of the $0.1\text{ M KCl}$ solution in the given cell, the cell constant can be determined.

$$\text{Cell constant} = \frac{\text{conductivity of } 0.1\text{ M KCl solution } (K)}{\text{conductance } (C) \text{ of } 0.1\text{ M KCl solution}}$$

**Measurement of Conductivity Using Digital Conductivity Meter:**

The conductivity cell is connected to the digital conductivity meter and the appropriate temperature is selected. The conductivity cell is then fully dipped into the sample solution taken in a beaker. The conductance of the solution is measured by selecting the proper range switch (milli S or micro S). The digital conductivity meter directly reads out the conductance.

$$\text{Conductivity } (K) = \text{conductance} \times \text{cell constant}$$

### Solved Numericals

**Problem 1**

A resistance of a $0.1\text{ N}$ solution of a salt contained in a volume between two electrodes, $4\text{ cm}$ apart and $10.7\text{ cm}^2$ in area was found to be $70\text{ ohms}$. Calculate the specific conductance of the solution.

**Given:**
- Resistance ($R$) $= 70\text{ ohms}$
- Concentration ($C$) $= 0.1\text{ N}$
- Distance between electrodes ($l$) $= 4\text{ cm}$
- Area of electrodes ($a$) $= 10.7\text{ cm}^2$

**Find:**
- Specific conductance ($K$)

**Formula:**

$$K = \frac{1}{R} \times \frac{l}{a}$$

**Substitution & Calculation:**

$$K = \frac{1}{70} \times \frac{4}{10.7}$$

$$K = 0.0053\text{ ohm}^{-1}\text{cm}^{-1}$$

**Final Answer:**

The specific conductance of the solution is $0.0053\text{ ohm}^{-1}\text{cm}^{-1}$.

<!-- page 7 | Batteries and Fuel Cells -->

## Batteries and Fuel Cells

### Cell and Battery

A battery is an arrangement of several electrochemical cells connected in series that can be used as a source of direct electric current.

### Types of Battery

**1. Primary Battery (or) Primary cells (or) Non-reversible Battery**

In these cells, the electrode and the electrode reactions cannot be reversed by passing an external electrical energy. The reactions occur only once and after use they become dead. Therefore, they are not chargeable. Example: Dry cell, Daniel cell

**2. Secondary Battery (or) Secondary cells (or) Reversible Battery**

In these cells, the electrode reactions can be reversed by passing an external electrical energy. Therefore, they can be recharged by passing electric current and used again and again. These are also called Storage cells (or) Accumulators. Example: Lithium ion battery

**3. Flow battery (or) Fuel cells**

In these cells, the reactants, products and electrolytes are continuously passing through the cell. Here chemical energy gets converted into electrical energy. Example: Hydrogen-oxygen fuel cell.

### Lithium-ion Battery

In electrochemical series $\text{Li}$ has the highest potential ($3.05\text{ V}$) even enough to decompose water and hence can be a good anode material for a high-density battery and therefore the electrolyte needs to be some material other than water.

It is a type of rechargeable battery constructed on **the principle of reversible migration of lithium ions between anode and cathode during charging and discharging.**

#### Construction

Lithium ion cells use a lithiated carbon intercalation material, written as $\text{Li}_x\text{C}$ ($\text{Li}$ atoms are inserted between the layers of carbon atoms) for the negative electrode (anode). Carbon materials, like petroleum coke and graphite are the appropriate choices for the anode material. A lithiated transition metal oxide intercalated compound is used for the positive electrode (cathode). Lithium intercalation compounds like $\text{Li}_{1-x}\text{CoO}_2$, $\text{Li}_{1-x}\text{NiO}_2$, $\text{Li}_{1-x}\text{Mn}_2\text{O}_4$ are generally used as cathode. The electrolyte is usually a lithium salt in an organic solvent. Lithium per chlorate ($\text{LiClO}_4$) in a mixture of propylene carbonate and ethylene carbonate is used as electrolyte. A solid electrolyte separator separates the anode and cathode compartments.

The basic cell representation is:
$$\text{Li}_x\text{ C}_6 \text{ | Li } X \text{ in PC-EC | Li}_{1-x}\text{ MO}_2$$

Where $\text{Li } X$ is lithium salt. $\text{PC-EC}$ is a mixed propylene carbonate-ethylene carbonate solvent and $\text{M}$ is transition metal like ($\text{Co}, \text{Ni}, \text{Mn}$ etc.). The emf of the cell varies from about $2.7\text{ V} - 4.23\text{ V}$.

![Diagram of a Lithium-ion battery showing charging and discharging mechanisms](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p019-1.webp)

> **Figure: Diagram of a Lithium-ion battery showing charging and discharging mechanisms**
>
> Diagram of a Lithium-ion battery showing charging and discharging mechanisms. The structure includes an Anode (graphite) on the left in blue, a Separator in the middle, an Electrolyte, and a Cathode (LiCoO2) on the right in brown. Yellow circles representing Li+ ions are shown moving between the electrodes. Two horizontal arrows indicate Charging pointing right in red and Discharging pointing left in green.

#### Discharging (Voltaic cell)

At anode:
$$\text{Li}_x\text{C} \rightarrow x\text{Li}^+ + x\bar{\text{e}} + \text{C}$$

At cathode:
$$\text{Li}_{1-x}\text{MO}_2 + x\text{Li}^+ + x\bar{\text{e}} \rightarrow \text{LiMO}_2$$

**Over all reaction:**
$$\text{Li}_x\text{C} + \text{Li}_{1-x}\text{MO}_2 \rightarrow \text{LiMO}_2 + \text{C}$$

#### Charging (Electrolytic cell)

At anode:
$$\text{LiMO}_2 \rightarrow \text{Li}_{1-x}\text{MO}_2 + x\text{Li}^+ + x\bar{\text{e}}$$

At cathode:
$$x\text{Li}^+ + x\bar{\text{e}} + \text{C} \rightarrow \text{Li}_x\text{C}$$

**Over all reaction:**
$$\text{LiMO}_2 + \text{C} \rightarrow \text{Li}_x\text{C} + \text{Li}_{1-x}\text{MO}_2$$

Here the electrochemical process involves the uptake of Lithium ions at the +ve electrode and their release at -ve electrode during discharge. Thus $\text{Li}^+$ ions move back and forth between the positive and negative electrodes during charging and discharging. Since metallic lithium is not present in the cell, lithium ion cells are less chemically active and hence safer and have a longer cycle life than the cells containing metallic lithium.

When $\text{Li}$ ion cells are allowed to charge completely ($x=1$) anode material becomes $\text{Li}_{1-1}\text{CoO}_2$ or $\text{CoO}_2$ which is an explosive material due to liberation of $\text{O}_2$ gas on decomposition. Therefore for automatic built in circuit breakers are there inside battery which allows charging only up to $90\text{ } (x=0.9)$.

#### Advantages

i. Available in large number of shapes and sizes.

ii. It is much lighter.

iii. It has low self-discharge capacity.

#### Disadvantages

i. Offers high internal resistance.

ii. On overheating, the cell ruptures ignite or explode.

iii. Expensive to manufacture $40\text{ } > \text{Ni-Cd}$.

#### Applications

i. Used for portable devices like notebook computers.

ii. Used in mobile phones and other electronic devices.

iii. Used in small digital music devices like iPods MP3 players etc.

iv. Use in electric vehicles.

### Fuel Cell

Fuel cell is a voltaic cell, which converts the chemical energy of the fuels directly into electricity without combustion. It converts the energy of the fuel directly into electricity. In these cells, the reactants, products and electrolytes pass through the cell.

$$\text{Fuel} + \text{Oxygen} \rightarrow \text{Oxidation products} + \text{Electricity}$$

Example: Hydrogen-oxygen fuel cell.

### Hydrogen-Oxygen Fuel Cell

Hydrogen-oxygen fuel cell is the simplest and most successful fuel cell, in which the fuel-hydrogen and the oxidizer-oxygen and the liquid electrolyte are continuously passed through the cell.

![Hydrogen-Oxygen fuel cell diagram](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p020-1.webp)

> **Figure: Hydrogen-Oxygen fuel cell diagram**
>
> Diagram of a Hydrogen-Oxygen fuel cell showing Anode (-) on the left and Cathode (+) on the right, connected at the top by a circuit with a voltmeter and a water output (H2O). Hydrogen (H2) enters on the left and Oxygen (O2) enters on the right. Inside, porous carbon electrodes enclose an electrolyte containing OH- ions. Electrons (e-) flow from anode to cathode.

#### Description

It consists of two porous electrodes anode and cathode. These porous electrodes are made of compressed carbon containing a small amount of catalyst ($\text{Pt}$, $\text{Pd}$, and $\text{Ag}$). In between the two electrodes an electrolytic solution such as $25\text{ } \text{KOH}$ or $\text{NaOH}$ is filled. The two electrodes are connected through the voltmeter.

#### Working

Hydrogen (the fuel) is bubbled through the anode compartment, where it is oxidized. The oxygen (oxidizer) is bubbled through the cathode compartment, where it is reduced.

#### Various Chemical Reactions

**At Anode:**
Hydrogen gas, passed through the anode, is oxidized with the liberation of electrons which then combine with hydroxide ions to form water.
$$\text{H}_2 \rightarrow 2\text{H}^+ + 2\text{e}^-$$
$$2\text{H}^+ + 2\text{OH}^- \rightarrow 2\text{H}_2\text{O}$$
$$\text{H}_2 + 2\text{OH}^- \rightarrow 2\text{H}_2\text{O} + 2\text{e}^-$$
Multiply by $2$:
$$2\text{H}_2 + 4\text{OH}^- \rightarrow 4\text{H}_2\text{O} + 4\text{e}^-$$

**At Cathode:**
The electrons, produced at the anode, pass through the external wire to the cathode where it is absorbed by oxygen and water to produce hydroxide ions.
$$\text{O}_2 + 4\text{e}^- \rightarrow 2\text{O}^{2-}$$
$$2\text{O}^{2-} + 2\text{H}_2\text{O} \rightarrow 4\text{OH}^-$$
$$\text{O}_2 + 2\text{H}_2\text{O} + 4\text{e}^- \rightarrow 4\text{OH}^-$$

**Overall Cell Reaction:**
$$\begin{aligned}
\text{At anode:} & \text{ } 2\text{H}_2 + 4\text{OH}^- \rightarrow 4\text{H}_2\text{O} + 4\text{e}^- \
\text{At cathode:} & \text{ } \text{O}_2 + 2\text{H}_2\text{O} + 4\text{e}^- \rightarrow 4\text{OH}^- \
\hline
& \text{ } 2\text{H}_2 + \text{O}_2 \rightarrow 2\text{H}_2\text{O}

The emf of the cell = $0.8$ to $1.0\text{ V}$

#### Applications

1. $\text{H}_2\text{-O}_2$ fuel cells are used as auxiliary energy source in space vehicles, submarines or other military vehicles.
2. In case of $\text{H}_2\text{-O}_2$ fuel cells, the product of water is proved to be a valuable source of fresh water by the astronauts.

#### Advantages of Fuel Cells

1. Fuel cells are efficient ($75\text{ }$) and take less time for operation.
2. It is pollution free technique.
3. It produces electric current directly from the reaction of a fuel and an oxidizer.

<!-- page 8 | Corrosion Science and Electrochemical Mechanisms -->

## CORROSION AND ITS CONTROL

Metals are isolated from their ores, generally at high temperature, in a process that involves an increase in free energy. Most metals—except noble metals such as $\text{Au}$, $\text{Ag}$, and $\text{Pt}$—exist in nature in combined forms as oxides, hydroxides, carbonates, chlorides, sulphides, sulphites, silicates, etc. These are known as minerals or ores. During extraction, these metal ores are reduced to their metallic states, requiring a considerable amount of energy. Consequently, isolated pure metals exist in a higher energy (excited) state than their corresponding ores, giving them a natural tendency to revert to a combined, lower energy state. When exposed to the environment (dry gases, moisture, liquids, etc.) during use, the exposed metal surfaces begin to decay. This destruction or deterioration of the metal at the surface is known as **corrosion**.

![Diagram comparing metal extraction and corrosion](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p022-1.webp)

> **Figure: Diagram comparing metal extraction and corrosion**
>
> Block diagram comparing metal extraction and corrosion. A box on the left contains 'Metal' with a label below 'Thermodynamically unstable'. An arrow points to the right labelled 'Corrosion (Oxidation)' to a box on the right containing 'Metallic compound Mineral/ore' and '+ Energy' outside to the right, with a label below 'Thermodynamically stable'. Below this, an arrow points from right to left labelled 'Metal extraction (Reduction)'.

Corrosion is a slow process of deterioration of a metal from its surface due to unwanted chemical or electrochemical interaction with its environment. Thus, corrosion is a process "reverse of extraction of metals." Examples include the rusting of iron and the tarnishing of silver or copper.

### Classification of Corrosion

Corrosion reactions are broadly classified into two types:

1. **Chemical Corrosion (Dry Corrosion):** Caused directly by the chemical action of atmospheric gases on the metal in the absence of moisture through direct combination between the metal and oxidizing atmospheric components.
2. **Electrochemical Corrosion (Wet Corrosion):** Results from setting up local electrochemical cells on the metal surface. This occurs under two conditions:
   - When a single metal is in contact with a wet gas, moisture, or an electrolytic solution (impurities acting as cathodes).
   - When two dissimilar metals or alloys are fully or partially immersed in a conducting solution.

This type of corrosion involves separate anodic and cathodic areas with current flowing through the conducting solution. Oxidation occurs at the anodic area ($M \rightarrow M^{n+} + n\text{e}^-$), while reduction of dissolved constituents occurs at the cathode to form non-metallic ions like $\text{OH}^-$ or $\text{O}^{2-}$.

---

### Mechanism of Wet Corrosion

Electrochemical corrosion involves electron current flowing between anodic and cathodic areas. The anode reaction involves metal dissolution:

$$\text{M} \rightarrow \text{M}^{n+} + n\text{e}^-$$

Depending on the environment, the cathode reaction proceeds via one of two pathways:

#### 1. Electrochemical Corrosion by Evolution of Hydrogen

##### a. Hydrogen Evolution Corrosion in Acid Medium
Occurs in acidic environments (e.g., industrial areas) where a metal like $\text{Fe}$ or $\text{Al}$ is in contact with $\text{HCl}$. For iron, the hydrogen electrode potential in an acid medium ($E^0_{\text{H}^+/\text{H}_2} = 0\text{ V}$) is higher than the electrode potential of iron ($E^0_{\text{Fe}^{2+}/\text{Fe}} = -0.44\text{ V}$).

![Mechanism of hydrogen evolution corrosion in acid medium showing anodic and cathodic areas on iron.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p024-1.webp)

> **Figure: Mechanism of hydrogen evolution corrosion in acid medium showing anodic and cathodic areas on iron.**
>
> Mechanism of hydrogen evolution corrosion in acid medium showing anodic and cathodic areas on iron. Diagram illustrating hydrogen evolution corrosion. It shows an Iron surface with 'Anodic area (large)' on the left and right, and a 'Small cathodic area' in the middle. The bulk solution is labelled 'Acidic solution (electrolyte)'. Labels point to parts of the diagram: 'Diffusion of ferrous ions formed into electrolyte' with an arrow pointing from the iron into the solution, 'H+' ions in solution, '$2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2\text{(g)}$' at the cathodic surface, '$\text{Fe} \rightarrow \text{Fe}^{2+} + 2\text{e}^-$' at the anodic areas, electron flow 'e^-' from anode to cathode, and H2(g) bubbles evolving at the cathode.

$$\begin{aligned}
\text{Anode:} & \quad \text{Fe} \rightarrow \text{Fe}^{2+} + 2\text{e}^- \\
\text{Cathode:} & \quad 2\text{H}^+ + 2\text{e}^- \rightarrow \text{H}_2\text{ (g)} \\
\text{Overall:} & \quad \text{Fe} + 2\text{H}^+ \rightarrow \text{Fe}^{2+} + \text{H}_2\text{ (g)}
\end{aligned}$$

##### b. Hydrogen Evolution Corrosion in Alkaline Medium
Does not occur for $\text{Fe}$ in alkaline media because the hydrogen electrode potential in alkaline media ($E^0_{\text{H}_2/\text{OH}^-} = -0.828\text{ V}$) is lower than $E^0_{\text{Fe}^{2+}/\text{Fe}}$ ($-0.44\text{ V}$). However, metals like $\text{Al}$ ($E^0_{\text{Al}^{3+}/\text{Al}} = -1.66\text{ V}$) undergo hydrogen evolution in alkaline solutions:

$$\begin{aligned}
\text{Anode:} & \quad \text{Al} \rightarrow \text{Al}^{3+} + 3\text{e}^- \quad (E^0 = -1.66\text{ V}) \\
\text{Cathode:} & \quad 2\text{H}_2\text{O} + 2\text{e}^- \rightarrow \text{H}_2 + 2\text{OH}^- \quad (E^0 = -0.828\text{ V}) \\
\text{Cell Potential:} & \quad E^0_{\text{Cell}} = E^0_{\text{cathode}} - E^0_{\text{anode}} = -0.828 - (-1.66) = 0.832\text{ V}
\end{aligned}$$

#### 2. Electrochemical Corrosion by Absorption of Oxygen

##### a. Oxygen Absorption Corrosion in Acid or Neutral Environment
Occurs in neutral aqueous electrolyte solutions (e.g., $\text{NaCl}$) containing dissolved atmospheric oxygen, such as the rusting of iron with a cracked oxide scale.

![Mechanism of oxygen absorption corrosion in neutral/acid medium on iron](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p025-1.webp)

> **Figure: Mechanism of oxygen absorption corrosion in neutral/acid medium on iron**
>
> Mechanism of oxygen absorption corrosion in neutral/acid medium on iron. Diagram showing oxygen absorption corrosion on an iron surface with an oxide film. It shows an aqueous neutral solution of electrolyte on top. Cathode (large) regions are on the sides with reactions: 1/2 O2 + 2e- + H2O -> 2OH- and Rust. In the middle, there is an oxide film with small anodic area caused by cracks in the oxide film where corrosion occurs, showing the reaction Fe -> Fe2+ + 2e-. Electrons (e-) flow from the anodic area to the cathodic areas. Iron is shown at the bottom.

$$\begin{aligned}
\text{Anode:} & \quad \text{Fe} \rightarrow \text{Fe}^{2+} + 2\text{e}^- \quad (E^0 = -0.44\text{ V}) \\
\text{Cathode:} & \quad \text{O}_2 + 4\text{H}^+ + 4\text{e}^- \rightarrow 2\text{H}_2\text{O} \quad (E^0 = +1.23\text{ V})
\end{aligned}$$

The corrosion cell potential in acid medium is $E^0_{\text{Cell}} = 1.23 - (-0.44) = 1.67\text{ V}$. Ferrous ions ($\text{Fe}^{2+}$) can be further oxidized to $\text{Fe}^{3+}$ ($E^0 = +0.77\text{ V}$), forming an insoluble yellow rust precipitate of $\text{Fe}(\text{OH})_3$, or black anhydrous magnetite ($\text{FeO}\cdot\text{Fe}_2\text{O}_3$) if moisture is limited.

##### b. Oxygen Absorption Corrosion in Alkaline Medium
$$\begin{aligned}
\text{Anode:} & \quad \text{Fe} \rightarrow \text{Fe}^{2+} + 2\text{e}^- \quad (E^0 = -0.44\text{ V}) \\
\text{Cathode:} & \quad \frac{1}{2}\text{O}_2 + \text{H}_2\text{O} + 2\text{e}^- \rightarrow 2\text{OH}^- \quad (E^0 = +0.40\text{ V})
\end{aligned}$$

Cell potential: $E^0_{\text{Cell}} = 0.40 - (-0.44) = 0.84\text{ V}$. $\text{Fe}^{2+}$ ions cannot be oxidized further to $\text{Fe}^{3+}$ in alkaline media, meaning no insoluble $\text{Fe}(\text{OH})_3$ precipitate forms, avoiding intense localized corrosion.

---

### Comparison: Chemical vs. Electrochemical Corrosion

| Chemical Corrosion | Electrochemical Corrosion |
| :--- | :--- |
| Occurs in dry conditions. | Occurs in wet conditions (presence of electrolyte/moisture). |
| Involves direct chemical attack by environment. | Involves the setup of local galvanic cells. |
| Explained by absorption mechanisms. | Explained by electrochemical reaction mechanisms. |
| Occurs on both homogeneous and heterogeneous surfaces. | Occurs only on heterogeneous surfaces. |
| Uniform corrosion. | Non-uniform corrosion (especially if anodic area is small). |
| Slow process. | Fast process. |
| Products accumulate where corrosion occurs. | Corrosion occurs at anode, products accumulate near cathode. |

---

### Galvanic Series

The standard Electrochemical Series (ECS) ranks pure metals using 1M solutions without oxide films, but fails to predict behaviors of alloys or metals that form protective oxide films (e.g., $\text{Al}$, $\text{Ti}$). To resolve this, the **Galvanic Series** ranks elements and alloys based on actual corrosion behavior in unpolluted seawater:

| Electrochemical Series | Galvanic Series |
| :--- | :--- |
| Potentials measured on pure metals in 1M solutions without oxide films. | Developed by studying metals and alloys in unpolluted seawater with natural oxide films intact. |
| Position of a given metal is fixed. | Position of a given metal may shift. |
| Gives no information regarding alloys. | Includes alloys to study their relative corrosion behavior. |
| Comprises metals and non-metals. | Comprises metals and alloys. |
| Predicts relative displacement tendencies. | Predicts relative corrosion tendencies. |

---

### Corrosion Control

#### 1. Cathodic Protection
Forcing the metal structure to act as a cathode so corrosion ceases.
- **Sacrificial Anodic Protection:** Connecting the structure to a more active, sacrificial metal ($\text{Mg}, \text{Zn}, \text{Al}$) via a wire. The sacrificial metal corrodes preferentially while protecting the parent cathodic structure. Used for underground pipes, cables, and marine structures.

<!-- page 9 | Corrosion Control, Electroplating, and Electroless Plating -->

## Corrosion Control, Electroplating, and Electroless Plating

Bridge: Understanding the electrochemical nature of corrosion allows us to apply protective strategies such as cathodic protection and surface plating.

The new idea: Forcing protected structures to act as cathodes or utilizing autocatalytic chemical reduction for non-conductive plating.

Objectives: Describe cathodic protection methods including sacrificial anodes and impressed current; Explain the principles and setup of metal electroplating; Discuss autocatalytic electroless plating processes and their applications.

### Impressed Current Cathodic Protection

As a result of corrosion an electronic flow occurs from the anodic part to cathodic part and it is known as corrosion current. In this method an impressed current from a DC source is applied in opposite direction to neutralize corrosion current and convert the corroding metal from anode to cathode. Usually impressed current is derived from a battery with an insoluble anode like Graphite or silica, iron, stainless steel, Pt etc. The anode is to be kept in a region of good conductivity.

![Sacrificial anode method: ship hull and underground water pipeline](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p028-1.webp)

> **Figure: Sacrificial anode method: ship hull and underground water pipeline**
>
> Figure 1: Sacrificial anode method: ship hull and underground water pipeline. The diagram shows two setups. Left setup: a ship hull labelled 'Protected base metal- steel' with attached rectangular blocks labelled 'sacrificial anode-Zn' in water. Right setup: an underground pipeline where a copper wire connects a 'Sacrificial anode' surrounded by 'Electrolyte' in the soil to an 'Iron pipe' buried under 'Soil'.

![Impressed current cathodic protection setup](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p028-2.webp)

> **Figure: Impressed current cathodic protection setup**
>
> Diagram showing impressed current cathodic protection setup. A DC source has a positive terminal (+) connected via wire to an 'Insoluble electrode' immersed in an 'Electrolyte' backfill underground. The negative terminal (-) is connected to a buried 'Iron pipe'. The ground surface is marked 'Ground level' with 'Soil' underneath.

This method is very effective in arresting corrosion for buried structures such as storage tanks, pipelines, ships etc. This method is useful for long term operation for large structures.

**Problems and limitations with cathodic protection**

1. Cathodic protection system which is efficiency protecting a pipeline may increase the corrosion of an adjacent pipeline or an adjacent useful structure because of stray currents. This may lead to unexpected legal and technical problems.
2. Capital investment and maintenance costs.
3. The chemical reactions occurring at the surface of the protected structure may cause problems. If the cathodic reaction produces hydrogen, it may have a deleterious effect (eg. blistering) on the metal itself. If the metal is coated, the coating may get peeled off.
4. Possibility of soil and microbiological corrosion effects should also be considered in case of underground structures.

### Electroplating or Electrodeposition

It is the process by which the coating metal is deposited on the base metal by passing a direct current through an electrolytic solution containing the soluble salt of the coating metal.

The base metal to be plated is usually made as the cathode whereas the anode is either the coating metal itself or an inert material of good electrical conductivity like graphite.

![Electroplating setup diagram showing a battery, anode, cathode, coating layer, electroplating bath, and electrolyte solution.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p029-1.webp)

> **Figure: Electroplating setup diagram showing a battery, anode, cathode, coating layer, electroplating bath, and electrolyte solution.**
>
> Schematic diagram of a general electroplating cell setup. At the top, a battery is connected via wires to two submerged electrodes inside a rectangular container representing the electroplating bath. The left electrode is hatched and labeled 'Anode'. The right electrode has a solid outline with an inner layer labeled 'Coating layer', and is labeled 'Cathode'. The liquid inside the container is pointed to by labels 'electroplating Bath' and 'electrolyte sol'.

Electroplating of metals is done to protect them from corrosion and for decoration purpose. For example, the vessels of iron are electroplated with copper or silver or gold to make it attractive and to protect from rusting.

#### Electroplating of Copper

Copper electroplating is the process of electroplating a layer of copper onto the surface of a metal object. E.g. Electroplating iron object with copper metal.

![Copper electroplating setup showing a DC power source, copper plate anode, iron object cathode, and CuSO4 solution.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/ece/s1/chemistry/module-1/assets/p029-2.webp)

> **Figure: Copper electroplating setup showing a DC power source, copper plate anode, iron object cathode, and CuSO4 solution.**
>
> Experimental setup for copper electroplating. A DC power source with positive (+) and negative (-) terminals is connected via wires to a rectangular 'Copper plate' on the left (connected to the positive terminal) and an 'Iron object' on the right (connected to the negative terminal). Both electrodes are immersed in a glass jar filled with 'CuSO4 solution'. Curved arrows at the bottom indicate the movement of ions between the electrodes.

To deposit a layer of copper metal on an iron object, take a glass jar and fill it with copper sulphate solution ($\text{CuSO}_4$, electrolyte). Connect the plate of copper metal to the positive terminal (anode) of battery and iron object to the negative terminal (cathode) of the battery. Now, dip these two electrodes in the solution of copper sulphate. When an electric current is passed through the $\text{CuSO}_4$ solution, you will find that a thin layer of copper metal is deposited on the cathode (iron object) and an equivalent amount of copper is lost by the anode (copper plate) and is dissolved into the solution.

### Electroless Plating

"Without using electrical energy, the deposition of a noble metal from its salt solution on a catalytically active less noble metal surface by a suitable reducing agent is known as electroless plating." It is also known as auto-catalytic plating. It is a chemical reduction process which once initiated, become autocatalytic hence the name. The process is similar to electroplating except that no outside current is needed.

**Theory of Autocatalytic Plating:**

In Electroless plating, metallic ions are reduced to the metal with the help of reducing agents and deposited on a catalytic surface.

$$\text{Metal ion} + \text{Reducing agent} \xrightarrow[\text{Surface}]{\text{Catalytic Metal}} \text{plated over a catalyst surface} + \text{oxidized product.}$$

**Advantages**

- (a) In electroless plating the use of electrical contacts or electrical power is eliminated.
- (b) Throwing power of electroless bath is better so intricate parts with irregular shapes can be uniformly coated.
- (c) Plastics and other insulators and semiconductors can also be plated by electroless plating.
- (d) Resulting deposits have unique chemical, mechanical and magnetic properties.

**Process of Electroless Plating Steps**

1. Preparation of the surface to be plated (activation)
  - Etching - acid treatment
  - Electroplating - coating of metals
  - Chemical treatment - plastic objects and printed circuit boards are treated with $\text{SnCl}_2$ and $\text{PdCl}_2$
2. Preparation of plating bath; Plating bath is composed of:
  - i. Soluble salt of metal to be plated
  - ii. Reducing agent like formaldehyde, hypophosphite etc.
  - iii. Complexing agent like tartrate, citrate, succinate etc. This improves the quality of the deposit
  - iv. Oxidant like succinate, fluoride, glycinate etc. This enhances the plating rate.
  - v. Stabilizer like thiourea, cations of lead, cadmium etc. is added to prevent the decomposition of the plating bath solution.
  - vi. Buffer like sodium acetate etc. is added to control the $\text{pH}$ of the bath.
3. Procedure: The article to be plated is immersed in plating bath.

#### Electroless Plating of Copper

- To deposit a layer of Copper on a substrate without the use of electrical energy.
- Commonly used for making printed circuit boards.

**Steps:**

- i. Pretreatment and Activation of the surface: By treatment with organic solvents followed by acid treatment, the surface is degreased first.
- ii. Preparation of Plating Bath Solution: A solution of Cupric salt, Formaldehyde as reducing agent, sodium acetate buffer, sodium succinate as complexing agent and an oxidant.
- iii. Procedure: Object is immersed in plating bath.

**Reactions:**

At cathode:
$$\mathrm{Cu}^{2+} + 2\,e^{-} \longrightarrow \mathrm{Cu}$$

At anode:
$$2\mathrm{HCHO} + 4\mathrm{OH}^{-} \longrightarrow 2\mathrm{HCOO}^{-} + 2\mathrm{H}_{2}\mathrm{O} + \mathrm{H}_{2} + 2\,e^{-}$$

Overall reaction:
$$\mathrm{Ni}^{2+} + \mathrm{H}_{2}\mathrm{PO}_{2}^{-} + \mathrm{H}_{2}\mathrm{O} \longrightarrow \mathrm{Ni} + \mathrm{H}_{2}\mathrm{PO}_{3}^{-} + 2\mathrm{H}^{+}$$

$\text{pH}$ of plating bath solution = above 12.

**Uses:**

- i. Used in double or multilayer printed circuit boards.
- ii. Used as a base coating for subsequent electroplating.
