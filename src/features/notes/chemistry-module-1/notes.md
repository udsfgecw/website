<!-- page 1 | Electrochemical cells and the Daniell cell -->

## Electrochemical cells and the Daniell cell

**Electrochemistry**

Electrochemistry is the branch of chemistry that studies the interconversion of chemical energy and electrical energy. It covers both spontaneous chemical reactions that generate an electric current and non-spontaneous chemical reactions driven by an externally applied electric current.

**Electrochemical device**

An **electrochemical device** (or cell) consists of two electronic conductors (electrodes) immersed in one or more ionic conductors (electrolytes).

In broad scientific usage, electrochemical cells are divided into two categories:

1. **Galvanic (or voltaic) cells**
2. **Electrolytic cells**

(Note: In many engineering syllabi, the term *electrochemical cell* is used specifically as a synonym for a galvanic cell).

### Galvanic cell vs electrolytic cell

| Feature | Galvanic (Electrochemical) Cell | Electrolytic Cell |
| :--- | :--- | :--- |
| **Energy conversion** | Converts chemical energy into electrical energy. | Converts electrical energy into chemical energy. |
| **Reaction spontaneity** | Driven by a spontaneous redox reaction ($\Delta G < 0$). | Drives a non-spontaneous redox reaction ($\Delta G > 0$) using an external DC power source. |
| **Cell EMF ($E_{\text{cell}}$)** | Positive ($E_{\text{cell}} > 0$). | Requires an applied voltage opposing a negative spontaneous cell potential. |
| **Anode (oxidation site)** | **Negative ($-$)** terminal (mnemonic: **LOAN** — Left, Oxidation, Anode, Negative). | **Positive ($+$)** terminal (connected to the positive terminal of the external DC supply). |
| **Cathode (reduction site)** | **Positive ($+$)** terminal. | **Negative ($-$)** terminal (connected to the negative terminal of the external DC supply). |
| **Electrolyte arrangement** | Usually two separate half-cell electrolytes connected by a salt bridge or porous partition. | Usually a single electrolyte container housing both electrodes (though separated compartments are sometimes used). |
| **Examples** | Daniell cell, discharging a lithium-ion battery. | Electroplating, charging a lithium-ion battery, electrolysis of molten $\text{Al}_2\text{O}_3$. |

> **Watch out.** Never define the anode or cathode by its electrical sign ($+$ or $-$). Always define electrodes by the chemical reaction occurring at their surface: **oxidation always occurs at the anode**, and **reduction always occurs at the cathode**, regardless of whether the cell is galvanic or electrolytic. The electrical polarity flips between cell types because the anode is the *source* of electrons in a galvanic cell (making it negative), whereas an external power supply *pulls* electrons away from the anode in an electrolytic cell (making it positive).

### Oxidation, reduction and electrolytes

Before studying electrochemical cells, review three foundational concepts:

**Oxidation**

Oxidation is the loss of electrons by a chemical species (leading to an increase in oxidation state).

**Reduction**

Reduction is the gain of electrons by a chemical species (leading to a decrease in oxidation state).

**Ions and electrolytes**

Ions are electrically charged atoms or groups of atoms (cations are positively charged; anions are negatively charged). Electrolytes are substances that produce mobile ions when dissolved in a polar solvent or melted, enabling ionic conduction.

### Daniell cell construction and operation

The Daniell cell is a classic galvanic cell that converts the chemical energy of the spontaneous zinc–copper redox reaction into electrical energy.

![Daniell cell diagram showing a zinc anode in zinc sulfate solution, a copper cathode in copper sulfate solution, a salt bridge, and an external circuit with a voltmeter](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/page-003-image-1.webp)

#### Construction

1. **Anode half-cell:** A solid zinc rod ($\text{Zn}$) is immersed in an aqueous solution of zinc sulfate ($\text{ZnSO}_4$).
2. **Cathode half-cell:** A solid copper rod ($\text{Cu}$) is immersed in an aqueous solution of copper sulfate ($\text{CuSO}_4$).
3. **Internal connection:** The two electrolyte solutions are connected by an inverted U-tube called a **salt bridge**.
4. **External circuit:** The zinc and copper electrodes are connected externally through metallic wires to a voltmeter or electrical load.

#### Electrode reactions and standard cell potential

In the zinc half-cell, metallic zinc has a stronger tendency to lose electrons than copper. Zinc atoms undergo oxidation at the anode, releasing $\text{Zn}^{2+}$ ions into the solution and leaving electrons behind on the zinc rod (making it the negative terminal):

$$
\text{Anode (oxidation):} \quad \text{Zn(s)} \longrightarrow \text{Zn}^{2+}\text{(aq)} + 2\text{e}^-
$$

The released electrons travel through the external wire to the copper rod. In the copper half-cell, $\text{Cu}^{2+}$ ions from the $\text{CuSO}_4$ solution accept these electrons at the surface of the copper electrode and deposit as metallic copper (making the copper rod the positive cathode):

$$
\text{Cathode (reduction):} \quad \text{Cu}^{2+}\text{(aq)} + 2\text{e}^- \longrightarrow \text{Cu(s)}
$$

Adding the two half-reactions gives the net spontaneous cell reaction:

$$
\text{Zn(s)} + \text{Cu}^{2+}\text{(aq)} \rightleftharpoons \text{Zn}^{2+}\text{(aq)} + \text{Cu(s)}
$$

Under standard conditions (unit ion activities, often approximated as $1\text{ M}$ solutions, at $298\text{ K}$), the standard reduction potentials are $E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.76\text{ V}$ and $E^\circ_{\text{Cu}^{2+}/\text{Cu}} = +0.34\text{ V}$. The standard cell electromotive force (EMF) is:

$$
\begin{aligned} E^\circ_{\text{cell}} &= E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} \\ &= 0.34\text{ V} - (-0.76\text{ V}) = 1.10\text{ V} \end{aligned}
$$

#### Conventional cell notation

By IUPAC convention, a galvanic cell is represented in a single line by placing the anode half-cell on the left and the cathode half-cell on the right. A single vertical line ($\mid$) represents a phase boundary between an electrode and its electrolyte, and a double vertical line ($\parallel$) represents a salt bridge:

$$
\text{Zn(s)} \mid \text{ZnSO}_4\text{(aq)} \parallel \text{CuSO}_4\text{(aq)} \mid \text{Cu(s)}
$$

In ionic shorthand, this is written as:

$$
\text{Zn(s)} \mid \text{Zn}^{2+}\text{(aq)} \parallel \text{Cu}^{2+}\text{(aq)} \mid \text{Cu(s)}
$$

#### Direction of electron flow vs conventional current

* **Electron flow:** Electrons flow through the external metallic wire from the **zinc anode ($-$) to the copper cathode ($+$)**.
* **Conventional electric current:** By definition, conventional current flows in the direction opposite to electron movement—that is, from the **copper cathode ($+$) to the zinc anode ($-$)** in the external circuit.

> **Watch out.** Electrons never swim through the aqueous electrolyte or the salt bridge. Current in the external wire is carried entirely by electrons, whereas current inside the half-cells and salt bridge is carried entirely by the migration of ions.

### Salt bridge composition and functions

A **salt bridge** is an inverted U-shaped glass tube filled with a concentrated solution of an inert electrolyte—such as potassium chloride ($\text{KCl}$), potassium nitrate ($\text{KNO}_3$), or ammonium nitrate ($\text{NH}_4\text{NO}_3$)—gelled with agar-agar or gelatine to prevent mechanical mixing of the liquids.

An electrolyte is chosen such that its cation and anion have nearly **equal ionic mobilities** (for example, $\text{K}^+$ and $\text{Cl}^-$ move at almost the same speed under an electric field) and do not react chemically with any species in the half-cells.

#### How ion migration maintains neutrality

As the Daniell cell operates, $\text{Zn}^{2+}$ ions accumulate in the anode compartment, creating a net positive charge. Simultaneously, $\text{Cu}^{2+}$ ions are consumed in the cathode compartment, leaving behind an excess of negatively charged sulfate ions ($\text{SO}_4^{2-}$). If unchecked, this charge build-up would immediately halt electron flow. To prevent this, anions (such as $\text{Cl}^-$) migrate from the salt bridge into the anode compartment, while cations (such as $\text{K}^+$) migrate into the cathode compartment.

#### Four essential functions of a salt bridge

1. **Completes the electrical circuit:** It provides an internal ionic pathway between the two half-cells so charge can circulate continuously.
2. **Maintains electrical neutrality:** By supplying anions to the anode half-cell and cations to the cathode half-cell, it prevents charge accumulation in either solution.
3. **Prevents mechanical mixing and interfering diffusion:** The gel limits bulk mixing and slows interdiffusion while still allowing ions to move; it is not a perfectly selective membrane.
4. **Minimizes liquid junction potential:** When two different electrolyte solutions come into direct contact, unequal diffusion rates of cations and anions across the boundary create an unwanted potential difference called the *liquid junction potential*. Because the salt bridge ions ($\text{K}^+$ and $\text{Cl}^-$) have nearly identical transport velocities, the junction potential is reduced; in practice it need not be exactly zero.

### Cell reversibility

**Reversible cell**

A reversible cell operates at near-equilibrium conditions and satisfies three strict criteria when connected to an opposing external EMF ($E_{\text{ext}}$):

1. **When $E_{\text{ext}} = E_{\text{cell}}$:** If the opposing external voltage exactly equals the cell EMF, no current flows and the net cell reaction is zero, although microscopic forward and reverse processes can continue.
2. **When $E_{\text{ext}} < E_{\text{cell}}$:** If the opposing voltage is infinitesimally smaller than the cell EMF, an infinitesimal current flows from the cell, driving the spontaneous forward reaction ($\text{Zn} + \text{Cu}^{2+} \rightarrow \text{Zn}^{2+} + \text{Cu}$).
3. **When $E_{\text{ext}} > E_{\text{cell}}$:** If the opposing voltage is infinitesimally greater than the cell EMF, current flows in the opposite direction and the exact reverse chemical reaction occurs ($\text{Zn}^{2+} + \text{Cu} \rightarrow \text{Zn} + \text{Cu}$).

The **Daniell cell** is a standard example of a reversible cell when operated with very small currents.

**Irreversible cell**

An irreversible cell does not satisfy these conditions; applying an external voltage slightly greater than its EMF does not restore the original reactants, often because side reactions (such as gas evolution) occur at the electrodes. A common example is a primary zinc–carbon dry cell (or placing zinc and copper strips in dilute $\text{H}_2\text{SO}_4$, where $\text{H}_2$ gas escapes irreversibly).

### Electrolysis of molten aluminium oxide

To contrast an electrolytic cell with a galvanic cell, consider the electrolysis of molten aluminium oxide ($\text{Al}_2\text{O}_3$). When $\text{Al}_2\text{O}_3$ is melted, it dissociates into mobile aluminium cations ($\text{Al}^{3+}$) and oxide anions ($\text{O}^{2-}$).

![Simplified electrolysis of molten aluminium oxide with inert electrodes, showing DC polarity, ion movement, oxygen at the anode, and aluminium at the cathode](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/aluminium-oxide-electrolysis-clean.webp)

In the simplified textbook model shown above, two **inert electrodes** are dipped into a single bath of molten $\text{Al}_2\text{O}_3$ and connected to a direct-current (DC) power supply:

* **At the negative cathode:** The DC source pumps electrons into the cathode, making it negatively charged. Positively charged $\text{Al}^{3+}$ cations migrate to this negative electrode, gain electrons, and undergo **reduction** to form molten aluminium metal:

$$
\text{Cathode (−, reduction):} \quad \text{Al}^{3+}\text{(l)} + 3\text{e}^- \longrightarrow \text{Al(l)}
$$

* **At the positive anode:** The DC source draws electrons away from the anode, making it positively charged. Negatively charged $\text{O}^{2-}$ anions migrate to this positive electrode, lose electrons, and undergo **oxidation** to evolve oxygen gas:

$$
\text{Anode (+, oxidation):} \quad 2\text{O}^{2-}\text{(l)} \longrightarrow \text{O}_2\text{(g)} + 4\text{e}^-
$$

**Distinction from industrial extraction (Hall–Héroult process)**

The diagram above represents an idealized **inert-electrode model** useful for understanding electrode polarity and ion migration. In actual industrial aluminium smelting, pure $\text{Al}_2\text{O}_3$ (melting point $\approx 2072\ ^\circ\text{C}$) is dissolved in molten cryolite ($\text{Na}_3\text{AlF}_6$) to lower the operating temperature to about $950\ ^\circ\text{C}$, and **consumable carbon (graphite) anodes** are used instead of inert electrodes. At those high temperatures, the oxygen produced at the anode reacts with the carbon anode to form carbon monoxide and carbon dioxide ($\text{C} + \text{O}_2 \rightarrow \text{CO}_2$), requiring periodic replacement of the anode blocks.

### Self-check questions

**1. During the operation of a Daniell cell, which way do $\text{Cl}^-$ ions in a $\text{KCl}$ salt bridge migrate, and why?**
*Answer:* $\text{Cl}^-$ ions migrate into the **anode ($\text{Zn}/\text{ZnSO}_4$) compartment**. As zinc oxidizes to $\text{Zn}^{2+}$ ions, positive charge builds up in the anode solution; negatively charged $\text{Cl}^-$ ions enter from the salt bridge to maintain electrical neutrality.

**2. Why is the anode negative in a Daniell cell but positive during the electrolysis of molten $\text{Al}_2\text{O}_3$?**
*Answer:* In both cells, the anode is the site of oxidation. In the spontaneous Daniell cell, $\text{Zn}$ atoms oxidize and leave electrons behind on the anode, giving it a negative charge. In the non-spontaneous $\text{Al}_2\text{O}_3$ electrolytic cell, the anode is connected to the positive terminal of an external DC power supply, which actively pulls electrons away from the electrode so $\text{O}^{2-}$ ions can be oxidized.

**3. What happens to the reaction in a Daniell cell (standard $E_{\text{cell}} = 1.10\text{ V}$) if an external opposing voltage of $1.15\text{ V}$ is applied across its terminals?**
*Answer:* In the ideal reversible limit, $E_{\text{ext}} > E_{\text{cell}}$, so the cell functions as an electrolytic cell and the net reaction reverses: copper oxidizes at the copper electrode ($\text{Cu} \rightarrow \text{Cu}^{2+} + 2\text{e}^-$) and zinc ions reduce and plate onto the zinc electrode ($\text{Zn}^{2+} + 2\text{e}^- \rightarrow \text{Zn}$). Practical cells also require allowance for resistance, overpotential and competing reactions.

### Module study map

| Study block | What you should be able to do |
| --- | --- |
| [Cells, potentials and the Nernst equation](#page-1) · sections 1–3 | Explain electron flow, assign electrode signs, and write the correct reaction quotient. |
| [Worked calculations](#page-4) · section 4 | Solve electrode-potential, cell-EMF and equilibrium problems step by step. |
| [Reference electrodes and pH](#page-5) · sections 5–7 | Connect electrode construction to potential measurement and calibration. |
| [Batteries, fuel cells and conductivity](#page-8) · sections 8–10 | Trace charge and ion movement, and calculate conductivity from measurements. |
| [Corrosion and protection](#page-11) · sections 11–14 | Identify anodic/cathodic reactions and choose a suitable protection method. |
| [Metal coatings](#page-15) · sections 15–16 | Compare copper electroplating with electroless deposition. |
| [Revision and practice](#page-17) · section 17 | Recall key relations, answer theory questions and check your numerical work. |

<!-- page 2 | Electrode potential and the electrochemical series -->

## Electrode potential and the electrochemical series

Every electrochemical cell relies on the charge separation that occurs where an electronic conductor meets an ionic solution. Understanding how a single electrode develops a potential, how that potential is standardized against a reference, and how tabulated values are organized into the electrochemical series allows engineers to predict cell voltages, material compatibility, and redox spontaneity before building a system.

### Origin of single electrode potential and the electrical double layer

When a metal strip $\mathrm{M}$ is immersed in an aqueous solution containing its own ions $\mathrm{M}^{n+}$, two opposing processes compete at the solid–liquid interface:

1. **Oxidation (dissolution tendency):** Metal atoms leave the crystal lattice as hydrated cations, leaving electrons behind on the metal surface:

   $$
   \mathrm{M(s) \longrightarrow M^{n+}(aq) + n\,e^-}
   $$

2. **Reduction (deposition tendency):** Metal cations from the solution collide with the electrode, accept electrons, and deposit as neutral metal atoms:

   $$
   \mathrm{M^{n+}(aq) + n\,e^- \longrightarrow M(s)}
   $$

As charge is transferred, the interfacial electric field changes and opposes further net transfer. In an ideal reversible half-cell at open circuit, oxidation and reduction approach equal rates. A charged metal surface and nearby counter-ions form an electrical double layer. The simplified zinc/copper drawing below illustrates this idea; the actual surface charge depends on the electrode and solution conditions. A positive or negative potential quoted **relative to the SHE** does not, by itself, specify the absolute sign of the metal surface charge.

![Diagram showing single electrode potentials for Zinc and Copper half-cells with Helmholtz electrical double layer](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/page-004-image-1.webp)

*Figure: Charge separation and formation of the Helmholtz electrical double layer at zinc and copper electrode interfaces.*

**Helmholtz electrical double layer**

The Helmholtz electrical double layer is an interfacial structure established by electrostatic attraction and thermal motion, consisting of a plane of charge on the metal surface facing a layer of oppositely charged ions in the solution. The resulting electric field opposes further net charge transfer, and interfacial equilibrium can be established in a reversible half-cell:

$$
\mathrm{M^{n+}(aq) + n\,e^- \rightleftharpoons M(s)}
$$

**Single electrode potential**

Single electrode potential ($E$) is the potential difference established across this equilibrium double layer between the metal and the bulk electrolyte. Its magnitude depends on:

- The chemical nature of the metal and its ions.
- The activity (effective concentration) of the ions in solution.
- The temperature of the system.
- The pressure, if a gaseous species participates in the electrode reaction.

### Standard electrode potential and the IUPAC reduction convention

It is physically impossible to measure the absolute potential of an isolated half-cell because placing a second measuring probe into the electrolyte creates a second metal–solution interface with its own unknown potential. Voltmeters can only measure a potential *difference* between two electrodes. Therefore, every single electrode potential is reported as a relative value measured against a universally agreed reference: the **Standard Hydrogen Electrode (SHE)**, which is assigned a potential of exactly $0.00\text{ V}$ at all temperatures.

**Standard electrode potential**

Standard electrode potential ($E^\circ$) is the potential of a half-cell measured relative to the SHE when all participating species are in their standard states:

- Solute species at unit activity ($a = 1$), which is routinely approximated in introductory calculations as a molar concentration of $1\text{ M}$.
- Gases at a partial pressure of $1\text{ bar}$ ($10^5\text{ Pa}$, very close to $1\text{ atm}$).
- Pure solids and pure liquids in their most stable physical forms.
- A specified temperature, conventionally $298\text{ K}$ ($25\,^\circ\text{C}$) when numerical tables are quoted.

By IUPAC convention, all standard electrode potentials are tabulated as **standard reduction potentials** ($E^\circ_{\text{red}}$). If a half-reaction is reversed to represent oxidation, the magnitude of its potential remains the same, but its algebraic sign is inverted:

$$
E^\circ_{\text{ox}} = -E^\circ_{\text{red}}
$$

When two half-cells are combined into an electrochemical cell, the standard cell electromotive force ($E^\circ_{\text{cell}}$) is calculated directly from the standard reduction potentials of the two electrodes:

$$
E^\circ_{\text{cell}} = E^\circ_{\text{right}} - E^\circ_{\text{left}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}
$$

Here, both $E^\circ_{\text{cathode}}$ and $E^\circ_{\text{anode}}$ must be substituted as **reduction potentials** without flipping their signs beforehand.

> **Watch out.** Electrode potential ($E^\circ$) is an intensive property—it represents energy per unit charge ($1\text{ V} = 1\text{ J C}^{-1}$). Never multiply $E^\circ$ by stoichiometric coefficients when balancing an overall cell reaction. For example, in the reaction $\mathrm{Zn(s) + 2\,Ag^+(aq) \longrightarrow Zn^{2+}(aq) + 2\,Ag(s)}$, the silver half-reaction is doubled to balance electrons, but $E^\circ_{\mathrm{Ag^+/Ag}}$ remains $+0.80\text{ V}$, giving $E^\circ_{\text{cell}} = +0.80 - (-0.76) = +1.56\text{ V}$.

**Electrochemical series**

The electrochemical series is the arrangement of metallic and non-metallic redox couples in increasing order of their standard reduction potentials ($E^\circ$ at $298\text{ K}$).

| Electrode couple | Reduction half-reaction | $E^\circ$ at $298\text{ K}$ ($\text{V}$) | Chemical behaviour |
| :--- | :--- | :---: | :--- |
| $\mathrm{Li^+/Li}$ | $\mathrm{Li^+(aq) + e^- \rightleftharpoons Li(s)}$ | $-3.05$ | Strongest reducing agent (metal) in table |
| $\mathrm{Mg^{2+}/Mg}$ | $\mathrm{Mg^{2+}(aq) + 2\,e^- \rightleftharpoons Mg(s)}$ | $-2.37$ | Very active; readily oxidized |
| $\mathrm{Al^{3+}/Al}$ | $\mathrm{Al^{3+}(aq) + 3\,e^- \rightleftharpoons Al(s)}$ | $-1.66$ | Active metal (often passivated by oxide) |
| $\mathrm{Zn^{2+}/Zn}$ | $\mathrm{Zn^{2+}(aq) + 2\,e^- \rightleftharpoons Zn(s)}$ | $-0.76$ | Displaces $\mathrm{H_2}$ from dilute acids |
| $\mathrm{Fe^{2+}/Fe}$ | $\mathrm{Fe^{2+}(aq) + 2\,e^- \rightleftharpoons Fe(s)}$ | $-0.44$ | Anodic relative to hydrogen and copper |
| $\mathrm{H^+/H_2}$ | $\mathrm{2\,H^+(aq) + 2\,e^- \rightleftharpoons H_2(g)}$ | $0.00$ | Primary reference standard (SHE) |
| $\mathrm{Cu^{2+}/Cu}$ | $\mathrm{Cu^{2+}(aq) + 2\,e^- \rightleftharpoons Cu(s)}$ | $+0.34$ | Does not displace $\mathrm{H_2}$ from dilute acids |
| $\mathrm{Ag^+/Ag}$ | $\mathrm{Ag^+(aq) + e^- \rightleftharpoons Ag(s)}$ | $+0.80$ | $\mathrm{Ag^+}$ is the strongest oxidizing agent in table |

In this arrangement, species with large negative $E^\circ$ values resist reduction; their reduced forms (such as $\mathrm{Li(s)}$ and $\mathrm{Mg(s)}$) lose electrons easily and act as strong **reducing agents**. Conversely, species with large positive $E^\circ$ values have a strong tendency to gain electrons; their oxidized ions (such as $\mathrm{Ag^+(aq)}$ and $\mathrm{Cu^{2+}(aq)}$) act as strong **oxidizing agents**.

### Applications of the electrochemical series

1. **Predicting anode, cathode, and standard cell EMF:** When two half-cells are coupled in a galvanic cell, the couple with the higher (more positive) $E^\circ$ undergoes reduction and acts as the **cathode**, while the couple with the lower (more negative) $E^\circ$ undergoes oxidation and acts as the **anode**. Using $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$ ensures a positive EMF for the spontaneous pairing.
2. **Predicting spontaneity of redox reactions:** A proposed redox reaction is thermodynamically spontaneous under standard conditions if and only if its calculated $E^\circ_{\text{cell}}$ is positive (which corresponds to a negative standard Gibbs free energy change, $\Delta G^\circ = -nFE^\circ_{\text{cell}} < 0$). If $E^\circ_{\text{cell}} < 0$, the forward reaction is non-spontaneous, and the reverse reaction is favoured.
3. **Predicting metal and hydrogen displacement reactions:** A metal with a lower (more negative) $E^\circ$ can thermodynamically favour reduction of ions whose metal couple has a higher $E^\circ$. In aqueous solutions, competing reactions with water and passivation must also be considered. For instance, dipping zinc ($E^\circ = -0.76\text{ V}$) into $\mathrm{CuSO_4}$ ($E^\circ = +0.34\text{ V}$) spontaneously deposits copper:

   $$
   \mathrm{Zn(s) + Cu^{2+}(aq) \longrightarrow Zn^{2+}(aq) + Cu(s)} \qquad (E^\circ_{\text{cell}} = +1.10\text{ V})
   $$

   Similarly, metals with negative standard reduction potentials ($E^\circ < 0.00\text{ V}$, such as $\mathrm{Mg}$, $\mathrm{Zn}$, and $\mathrm{Fe}$) can reduce $\mathrm{H^+}$ ions from dilute non-oxidizing acids (like dilute $\mathrm{HCl}$ or $\mathrm{H_2SO_4}$) to liberate $\mathrm{H_2}$ gas, whereas metals with positive potentials ($E^\circ > 0.00\text{ V}$, such as $\mathrm{Cu}$ and $\mathrm{Ag}$) cannot.
4. **Predicting preferential discharge during electrolysis:** When an aqueous solution containing multiple cations or anions is electrolysed, the species that requires the least electrical work is discharged first (ignoring overpotential effects). At the cathode, the cation with the **highest** (most positive) reduction potential is reduced first. At the anode, the species with the **lowest** reduction potential is oxidized first. For example, in an acidified aqueous mixture of $\mathrm{NaCl}$ and $\mathrm{KI}$:
   - **Competing reductions at the cathode:** $\mathrm{H^+}$ ($0.00\text{ V}$), $\mathrm{Na^+}$ ($-2.71\text{ V}$), and $\mathrm{K^+}$ ($-2.93\text{ V}$). Because $\mathrm{H^+}$ has the highest reduction potential, hydrogen gas is evolved: $\mathrm{2\,H^+(aq) + 2\,e^- \longrightarrow H_2(g)}$.
   - **Competing oxidations at the anode:** $\mathrm{I_2/I^-}$ ($+0.54\text{ V}$) and $\mathrm{Cl_2/Cl^-}$ ($+1.36\text{ V}$). Because iodide has the lower reduction potential, it is oxidized preferentially to iodine: $\mathrm{2\,I^-(aq) \longrightarrow I_2 + 2\,e^-}$.

> **Watch out.** The electrochemical series is strictly a **thermodynamic** tool for standard aqueous conditions ($a=1$). It predicts whether a reaction is energetically feasible, not how fast it occurs (**kinetics**) or whether surface films interfere. For example, aluminium ($E^\circ = -1.66\text{ V}$) is thermodynamically much more reactive than zinc, yet it resists corrosion in air and neutral water because a dense, adherent $\mathrm{Al_2O_3}$ passive film blocks ion transport.

### Self-check questions

1. **Why is it impossible to measure the absolute potential of a single $\mathrm{Cu^{2+}/Cu}$ half-cell with a voltmeter?**
   *Answer:* A voltmeter requires two electrical contacts to complete a circuit. Touching the electrolyte with a second metallic probe introduces a second metal–solution interface with its own interfacial potential, so the instrument always measures the difference between two electrode potentials.
2. **Given $E^\circ_{\mathrm{Fe^{2+}/Fe}} = -0.44\text{ V}$ and $E^\circ_{\mathrm{Cu^{2+}/Cu}} = +0.34\text{ V}$, can you safely store an aqueous $\mathrm{CuSO_4}$ solution in an unprotected iron container?**
   *Answer:* No. Because iron has a lower reduction potential than copper, iron will spontaneously oxidize and dissolve while displacing copper metal: $\mathrm{Fe(s) + Cu^{2+}(aq) \longrightarrow Fe^{2+}(aq) + Cu(s)}$ ($E^\circ_{\text{cell}} = +0.34 - (-0.44) = +0.78\text{ V} > 0$), corroding the container.
3. **What is the standard oxidation potential of the $\mathrm{Mg^{2+}/Mg}$ electrode if its standard reduction potential is $-2.37\text{ V}$?**
   *Answer:* By convention, $E^\circ_{\text{ox}} = -E^\circ_{\text{red}} = -(-2.37\text{ V}) = +2.37\text{ V}$.

<!-- page 3 | The Nernst equation: derivation and applications -->

## The Nernst equation: derivation and applications

Standard electrode potentials ($E^\circ$) are measured under strict reference conditions: unit activity (approximated as $1\text{ mol L}^{-1}$ concentration for solutes and $1\text{ bar}$ standard pressure for gases; older texts sometimes approximate this as $1\text{ atm}$) at $298\text{ K}$ ($25^\circ\text{C}$). Practical electrochemical systems—ranging from discharging batteries to corroding pipelines and biological sensors—rarely operate at unit concentration. Derived by Walther Nernst, the Nernst equation connects chemical thermodynamics to electrochemistry, allowing us to calculate half-cell reduction potentials and full-cell electromotive force (EMF) at any electrolyte concentration, gas pressure, and temperature.

### Thermodynamic foundation and derivation

In a reversible electrochemical cell (such as the Daniell cell, where an opposing voltage equal to the cell EMF makes the net current zero, and an infinitesimal increase reverses the ideal reaction), the maximum electrical work obtainable at constant temperature and pressure equals the decrease in Gibbs free energy. If $n$ moles of electrons are transferred in the balanced reaction against a cell potential $E$ (in volts, $\text{V} = \text{J C}^{-1}$), and $F$ is the Faraday constant (the magnitude of charge per mole of electrons, $F = N_A e \approx 96485\text{ C mol}^{-1}$), the electrical work leads directly to:

$$
\Delta G = -nFE \quad \text{and} \quad \Delta G^\circ = -nFE^\circ
$$

Here, $\Delta G$ and $\Delta G^\circ$ are the reaction Gibbs free energy change and standard Gibbs free energy change (in $\text{J mol}^{-1}$), and $E^\circ$ is the standard potential (in $\text{V}$).

Consider a general reversible electrochemical reaction:

$$
\text{aA} + \text{bB} \rightleftharpoons \text{cC} + \text{dD}
$$

From chemical thermodynamics, the van 't Hoff reaction isotherm relates $\Delta G$ under non-standard conditions to $\Delta G^\circ$:

$$
\Delta G = \Delta G^\circ + RT \ln Q
$$

where $R = 8.314\text{ J mol}^{-1}\text{ K}^{-1}$ is the universal gas constant, $T$ is the absolute temperature in kelvin ($\text{K}$), and $Q$ is the dimensionless thermodynamic reaction quotient defined in terms of activities ($a$):

$$
Q = \frac{a_{\text{C}}^c \, a_{\text{D}}^d}{a_{\text{A}}^a \, a_{\text{B}}^b}
$$

For dilute electrolyte solutions, ionic activities are approximated by molar concentrations ($[\text{X}]$ in $\text{mol L}^{-1}$). For gases, activities are replaced by relative partial pressures ($p / p^\circ$, where $p^\circ$ is standard pressure). Pure solids and pure liquids have unit activity ($a = 1$) and are omitted from $Q$.

> **Watch out.** Never include free electrons ($[\text{e}^-]^n$) inside the reaction quotient $Q$, and do not replace $Q$ with the equilibrium constant $K$ during a general derivation. $Q$ describes the instantaneous composition of the cell at any moment, whereas $K$ applies only when the cell has reached chemical equilibrium.

Substituting $\Delta G = -nFE$ and $\Delta G^\circ = -nFE^\circ$ into the reaction isotherm yields:

$$
-nFE = -nFE^\circ + RT \ln Q
$$

Dividing every term by $-nF$ gives the fundamental Nernst equation:

$$
E = E^\circ - \frac{RT}{nF} \ln Q
$$

To convert from natural logarithms ($\ln$) to base-10 logarithms ($\log_{10}$, written simply as $\log$), we use the relation $\ln Q = 2.3026 \log Q \approx 2.303 \log Q$:

$$
E = E^\circ - \frac{2.303 RT}{nF} \log Q
$$

At the commonly tabulated temperature $T = 298\text{ K}$ ($25^\circ\text{C}$), the constant pre-factor evaluates to:

$$
\frac{2.303 \times 8.314\text{ J mol}^{-1}\text{ K}^{-1} \times 298\text{ K}}{96485\text{ C mol}^{-1}} \approx 0.0591\text{ V}
$$

Substituting this value gives the practical working form of the Nernst equation at $298\text{ K}$:

$$
E = E^\circ - \frac{0.0591}{n} \log Q
$$

### Single-electrode potentials

By convention, all single-electrode potentials are written as reduction potentials.

**Metal/metal-ion half-cell**

For the reduction of a metal cation to the pure solid metal, $\text{M}^{n+}_{(\text{aq})} + n\text{e}^- \rightleftharpoons \text{M}_{(\text{s})}$, the solid metal has unit activity ($a_{\text{M}} = 1$). Therefore, in the dilute-solution approximation, $Q = 1/[\text{M}^{n+}]$. Substituting this into the Nernst equation gives:

$$
\begin{aligned}
E_{\text{M}^{n+}/\text{M}} &= E^\circ_{\text{M}^{n+}/\text{M}} - \frac{RT}{nF} \ln \frac{1}{[\text{M}^{n+}]} \\
&= E^\circ_{\text{M}^{n+}/\text{M}} + \frac{RT}{nF} \ln [\text{M}^{n+}]
\end{aligned}
$$

At $298\text{ K}$, using $\log (1/[\text{M}^{n+}]) = -\log [\text{M}^{n+}]$:

$$
E_{\text{M}^{n+}/\text{M}} = E^\circ_{\text{M}^{n+}/\text{M}} + \frac{0.0591}{n} \log [\text{M}^{n+}]
$$

For example, for a zinc electrode ($\text{Zn}^{2+} + 2\text{e}^- \rightleftharpoons \text{Zn}_{(\text{s})}$, $n=2$) or a copper electrode ($\text{Cu}^{2+} + 2\text{e}^- \rightleftharpoons \text{Cu}_{(\text{s})}$, $n=2$) at $298\text{ K}$:

$$
E_{\text{Zn}^{2+}/\text{Zn}} = E^\circ_{\text{Zn}^{2+}/\text{Zn}} + \frac{0.0591}{2} \log [\text{Zn}^{2+}]
$$

Notice that the reduction potential varies **logarithmically** (not linearly) with the molar concentration of $[\text{M}^{n+}]$. A tenfold increase in $[\text{M}^{n+}]$ shifts $E$ positively by $0.0591/n\text{ V}$. At high concentrations, ion–ion interactions become significant and this dilute-concentration formula hits a physical limit, requiring true activities ($a = \gamma [\text{M}^{n+}]/c^\circ$, with $c^\circ = 1\text{ mol L}^{-1}$) instead of raw molarities.

**Redox half-cell**

When an inert electrode (such as platinum) is immersed in a solution containing two oxidation states of the same ion, both species are aqueous solutes and both appear in $Q$:

* **Iron(III)/iron(II) couple:** $\text{Fe}^{3+}_{(\text{aq})} + \text{e}^- \rightleftharpoons \text{Fe}^{2+}_{(\text{aq})}$ ($n = 1$, $Q = [\text{Fe}^{2+}]/[\text{Fe}^{3+}]$)

$$
E_{\text{Fe}^{3+}/\text{Fe}^{2+}} = E^\circ_{\text{Fe}^{3+}/\text{Fe}^{2+}} - \frac{0.0591}{1} \log \frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]} = E^\circ_{\text{Fe}^{3+}/\text{Fe}^{2+}} + 0.0591 \log \frac{[\text{Fe}^{3+}]}{[\text{Fe}^{2+}]}
$$

* **Tin(IV)/tin(II) couple:** $\text{Sn}^{4+}_{(\text{aq})} + 2\text{e}^- \rightleftharpoons \text{Sn}^{2+}_{(\text{aq})}$ ($n = 2$, $Q = [\text{Sn}^{2+}]/[\text{Sn}^{4+}]$)

$$
E_{\text{Sn}^{4+}/\text{Sn}^{2+}} = E^\circ_{\text{Sn}^{4+}/\text{Sn}^{2+}} + \frac{0.0591}{2} \log \frac{[\text{Sn}^{4+}]}{[\text{Sn}^{2+}]}
$$

### Complete electrochemical cells

For a complete galvanic cell, $E_{\text{cell}} = E_{\text{cathode}} - E_{\text{anode}}$ and $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$. We can write the cell Nernst equation either by subtracting the two half-cell Nernst equations or directly from the balanced overall cell reaction.

1. **Daniell cell:** $\text{Zn}_{(\text{s})} + \text{Cu}^{2+}_{(\text{aq})} \rightleftharpoons \text{Zn}^{2+}_{(\text{aq})} + \text{Cu}_{(\text{s})}$
   Here $n = 2$. Omitting the pure solids $\text{Zn}_{(\text{s})}$ and $\text{Cu}_{(\text{s})}$, the reaction quotient is $Q = [\text{Zn}^{2+}]/[\text{Cu}^{2+}]$. At $298\text{ K}$:

$$
E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0591}{2} \log \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]} = E^\circ_{\text{cell}} + \frac{0.0591}{2} \log \frac{[\text{Cu}^{2+}]}{[\text{Zn}^{2+}]}
$$

2. **Copper–silver cell:**
   * Anode (oxidation): $\text{Cu}_{(\text{s})} \rightarrow \text{Cu}^{2+}_{(\text{aq})} + 2\text{e}^-$
   * Cathode (reduction): $2\text{Ag}^+_{(\text{aq})} + 2\text{e}^- \rightarrow 2\text{Ag}_{(\text{s})}$
   * Overall reaction ($n = 2$): $\text{Cu}_{(\text{s})} + 2\text{Ag}^+_{(\text{aq})} \rightleftharpoons \text{Cu}^{2+}_{(\text{aq})} + 2\text{Ag}_{(\text{s})}$

   Because two moles of $\text{Ag}^+$ participate per two moles of electrons transferred, $[\text{Ag}^+]$ is squared in $Q = [\text{Cu}^{2+}] / [\text{Ag}^+]^2$. At $298\text{ K}$:

$$
E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0591}{2} \log \frac{[\text{Cu}^{2+}]}{[\text{Ag}^+]^2} = E^\circ_{\text{cell}} + \frac{0.0591}{2} \log \frac{[\text{Ag}^+]^2}{[\text{Cu}^{2+}]}
$$

3. **Aluminium–iron(II) cell:**
   * Anode: $2\text{Al}_{(\text{s})} \rightarrow 2\text{Al}^{3+}_{(\text{aq})} + 6\text{e}^-$
   * Cathode: $3\text{Fe}^{2+}_{(\text{aq})} + 6\text{e}^- \rightarrow 3\text{Fe}_{(\text{s})}$
   * Overall reaction ($n = 6$): $2\text{Al}_{(\text{s})} + 3\text{Fe}^{2+}_{(\text{aq})} \rightleftharpoons 2\text{Al}^{3+}_{(\text{aq})} + 3\text{Fe}_{(\text{s})}$

   Here $n = 6$ and $Q = [\text{Al}^{3+}]^2 / [\text{Fe}^{2+}]^3$, giving at $298\text{ K}$:

$$
E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0591}{6} \log \frac{[\text{Al}^{3+}]^2}{[\text{Fe}^{2+}]^3}
$$

### pH dependence of gas electrodes

Electrode reactions that consume or produce $\text{H}^+$ ions exhibit potentials that depend directly on solution $\text{pH}$ ($\text{pH} = -\log a_{\text{H}^+} \approx -\log [\text{H}^+]$).

**Hydrogen electrode**

The reduction half-reaction is $2\text{H}^+_{(\text{aq})} + 2\text{e}^- \rightleftharpoons \text{H}_{2(\text{g})}$ ($n = 2$, $E^\circ_{\text{H}^+/\text{H}_2} = 0.000\text{ V}$). Writing $Q = (p_{\text{H}_2}/p^\circ) / [\text{H}^+]^2$, at standard hydrogen gas pressure ($p_{\text{H}_2} = p^\circ$) and $298\text{ K}$:

$$
\begin{aligned}
E_{\text{H}^+/\text{H}_2} &= 0 - \frac{0.0591}{2} \log \frac{1}{[\text{H}^+]^2} \\
&= 0.0591 \log [\text{H}^+] = -0.0591\,\text{pH}
\end{aligned}
$$

**Oxygen electrode**

In acidic or neutral aqueous media, oxygen reduction proceeds via:

$$
\text{O}_{2(\text{g})} + 4\text{H}^+_{(\text{aq})} + 4\text{e}^- \rightleftharpoons 2\text{H}_2\text{O}_{(\text{l})}
$$

Here $n = 4$ and $E^\circ_{\text{O}_2/\text{H}_2\text{O}} = +1.229\text{ V}$ (often rounded to $1.23\text{ V}$). Since liquid water has unit activity, at standard oxygen pressure ($p_{\text{O}_2} = p^\circ$) the reaction quotient is $Q = 1 / [\text{H}^+]^4$. At $298\text{ K}$:

$$
\begin{aligned}
E_{\text{O}_2/\text{H}_2\text{O}} &= E^\circ_{\text{O}_2/\text{H}_2\text{O}} - \frac{0.0591}{4} \log \frac{1}{[\text{H}^+]^4} \\
&= 1.229 + 0.0591 \log [\text{H}^+] \\
&= 1.229 - 0.0591\,\text{pH}
\end{aligned}
$$

| Solution condition ($298\text{ K}$) | $\text{pH}$ | Hydrogen electrode $E_{\text{H}^+/\text{H}_2}$ ($\text{V}$) | Oxygen electrode $E_{\text{O}_2/\text{H}_2\text{O}}$ ($\text{V}$) |
| :--- | :---: | :---: | :---: |
| Strongly acidic ($1\text{ M } \text{H}^+$) | $0$ | $0.000$ | $+1.229$ |
| Neutral pure water | $7$ | $-0.414$ | $+0.815$ |
| Strongly alkaline ($1\text{ M } \text{OH}^-$) | $14$ | $-0.827$ | $+0.402$ |

### Chemical equilibrium and applications

As a galvanic cell discharges, reactant ions are consumed and product ions accumulate. Consequently, $Q$ increases and the cell voltage $E_{\text{cell}}$ steadily drops. Eventually, the forward and reverse reaction rates become equal and the system reaches chemical equilibrium. At equilibrium, no net current flows ($\Delta G = 0$), so $E_{\text{cell}} = 0$ and the reaction quotient equals the equilibrium constant ($Q = K$).

> **Watch out.** At chemical equilibrium, the instantaneous cell potential is zero ($E_{\text{cell}} = 0$), the standard cell potential **need not be zero**. $E^\circ_{\text{cell}}$ is a fixed thermodynamic constant characteristic of the reaction at unit activity.

Setting $E_{\text{cell}} = 0$ and $Q = K$ in the Nernst equation yields:

$$
0 = E^\circ_{\text{cell}} - \frac{RT}{nF} \ln K \implies \ln K = \frac{nFE^\circ_{\text{cell}}}{RT}
$$

Equivalently, since $\Delta G^\circ = -nFE^\circ_{\text{cell}}$, this reproduces the fundamental thermodynamic relation $\Delta G^\circ = -RT \ln K$. At $298\text{ K}$:

$$
\log K = \frac{n E^\circ_{\text{cell}}}{0.0591}
$$

Beyond calculating equilibrium constants, the Nernst equation is routinely applied to:

1. **Determine non-standard cell EMF:** Calculate reversible potentials at specified activities, temperature and pressure. Actual voltage under load also includes resistance and kinetic losses.
2. **Find unknown ionic concentrations:** Measure $E_{\text{cell}}$ potentiometrically against a reference electrode to quantify trace metal ions (potentiometric titration and ion-selective analysis).
3. **Measure solution $\text{pH}$:** Convert the voltage of a $\text{pH}$-sensitive electrode (such as a hydrogen or glass electrode) directly into $\text{pH}$.
4. **Determine ionic valency ($n$):** Measure the slope of an $E$ versus $\log [\text{M}^{n+}]$ plot ($0.0591/n\text{ V}$ per decade at $298\text{ K}$) to find the number of electrons transferred.

### Self-check questions

1. **Question:** How does the reduction potential of a $\text{Cu}^{2+}/\text{Cu}$ electrode at $298\text{ K}$ change if the $\text{Cu}^{2+}$ concentration is diluted to one-hundredth ($0.01$ times) of its initial value?
   **Answer:** Since $n = 2$ and $E = E^\circ + (0.0591/2) \log [\text{Cu}^{2+}]$, multiplying $[\text{Cu}^{2+}]$ by $10^{-2}$ changes the potential by $(0.0591/2) \log(10^{-2}) = -0.0591\text{ V}$ (it decreases by $59.1\text{ mV}$).

2. **Question:** Write the reaction quotient $Q$ and identify $n$ for the cell reaction $\text{Zn}_{(\text{s})} + 2\text{H}^+_{(\text{aq})} \rightleftharpoons \text{Zn}^{2+}_{(\text{aq})} + \text{H}_{2(\text{g})}$ at $p_{\text{H}_2} = 1\text{ bar}$.
   **Answer:** Two electrons are transferred ($n = 2$). Omitting solid zinc and setting $p_{\text{H}_2}/p^\circ = 1$, the reaction quotient is $Q = [\text{Zn}^{2+}] / [\text{H}^+]^2$.

3. **Question:** Why does $E^\circ_{\text{cell}}$ remain non-zero when an ideal Daniell cell reaches chemical equilibrium ($E_{\text{cell}} = 0$)?
   **Answer:** $E^\circ_{\text{cell}}$ is defined specifically at standard state ($[\text{Zn}^{2+}] = [\text{Cu}^{2+}] = 1\text{ M}$), whereas a cell at chemical equilibrium has a composition where $[\text{Zn}^{2+}]/[\text{Cu}^{2+}] = K$ and $E_{\text{cell}} = 0$.

<!-- page 4 | Worked problems: electrode and cell potentials -->

## Worked problems: electrode and cell potentials

Solving electrochemical numerical problems requires a consistent convention for electrode potentials, reaction stoichiometry, and the reaction quotient. In accordance with IUPAC standards, every half-cell potential in this section is treated as a **reduction potential** ($E$ or $E^\circ$). This section consolidates the core problem types encountered in engineering chemistry—single-electrode potentials at standard and non-standard temperatures, complete cell electromotive force (EMF), unknown ion concentrations, unknown standard potentials, and equilibrium constants—into a systematic worked reference.

### Problem-solving framework and conventions

Before substituting numbers into the Nernst equation, define all physical quantities clearly:

* $E$ and $E^\circ$: Non-standard and standard reduction potentials (in volts, $\text{V}$).
* $E_{\text{cell}}$ and $E^\circ_{\text{cell}}$: Non-standard and standard cell potentials ($\text{V}$), where $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$.
* $R$: Universal gas constant, $8.314\text{ J mol}^{-1}\text{ K}^{-1}$.
* $T$: Absolute temperature in kelvin ($\text{K}$), where $T(\text{K}) = t(^\circ\text{C}) + 273.15$ (often approximated as $+273$ in routine problems).
* $F$: Faraday constant, $96485\text{ C mol}^{-1}$.
* $n$: Number of moles of electrons transferred in the balanced half-reaction or overall cell reaction.
* $Q$: Reaction quotient, constructed with product activities (approximated here by molar concentrations, $[\text{M}^{n+}]$) in the numerator and reactant concentrations in the denominator, each raised to its stoichiometric coefficient. Pure solids and pure liquids have unit activity ($a = 1$) and are omitted from $Q$.

At any temperature $T$, the Nernst equation for a general reduction or cell process is:

$$
E = E^\circ - \frac{2.303RT}{nF} \log_{10} Q
$$

At $T = 298\text{ K}$ ($25\,^\circ\text{C}$), the factor $\frac{2.303RT}{F}$ is approximately $0.0591\text{ V}$. For a single metal/metal-ion reduction $\text{M}^{n+}(aq) + ne^- \rightarrow \text{M}(s)$, $Q = \frac{1}{[\text{M}^{n+}]}$, which gives the convenient working forms:

$$
E_{\text{M}^{n+}/\text{M}} = E^\circ_{\text{M}^{n+}/\text{M}} - \frac{0.0591}{n} \log_{10}\!\left(\frac{1}{[\text{M}^{n+}]}\right) = E^\circ_{\text{M}^{n+}/\text{M}} + \frac{0.0591}{n} \log_{10}[\text{M}^{n+}]
$$

Follow these four steps for every calculation:

1. **Identify given data** and convert Celsius temperatures to kelvin.
2. **Write the balanced reduction half-reaction or overall cell reaction** to determine $n$ unambiguously.
3. **Construct the reaction quotient $Q$** (strictly $\frac{[\text{products}]^{\nu_p}}{[\text{reactants}]^{\nu_r}}$ for the reaction as written).
4. **Substitute values and interpret the physical meaning** of the sign and magnitude.

> **Watch out.** A frequent mistake when using the minus-sign Nernst equation ($E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0591}{n}\log_{10} Q$) is placing reactant (cathode) ions in the numerator of $Q$. If you write $\frac{[\text{cathode ions}]}{[\text{anode ions}]}$, you must use a **plus** sign before the logarithm. To avoid sign reversals, always write $Q = \frac{[\text{products}]}{[\text{reactants}]}$ with a **minus** sign.

---

### Single-electrode potentials

#### Example 1: Concentration dependence of a zinc electrode at $298\text{ K}$
**Problem:** Calculate the single-electrode potential of a $\text{Zn}^{2+}/\text{Zn}$ electrode at $25\,^\circ\text{C}$ ($298\text{ K}$) when dipped in $\text{ZnSO}_4$ solutions of concentration: (a) $0.01\text{ M}$, (b) $0.1\text{ M}$, (c) $1.0\text{ M}$, and (d) $10.0\text{ M}$. Given $E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.760\text{ V}$.

* **Given:** $E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.760\text{ V}$, $T = 298\text{ K}$, $[\text{Zn}^{2+}] = 0.01, 0.1, 1.0, 10.0\text{ M}$.
* **Balanced half-reaction and $n$:**

$$
\text{Zn}^{2+}(aq) + 2e^- \longrightarrow \text{Zn}(s) \quad (n = 2)
$$

* **Reaction quotient and Nernst equation:** $Q = \frac{1}{[\text{Zn}^{2+}]}$. At $298\text{ K}$:

$$
E_{\text{Zn}^{2+}/\text{Zn}} = -0.760 + \frac{0.0591}{2} \log_{10}[\text{Zn}^{2+}] = -0.760 + 0.02955 \log_{10}[\text{Zn}^{2+}]
$$

* **Substitution and results:**

| Case | $[\text{Zn}^{2+}]$ ($\text{M}$) | $\log_{10}[\text{Zn}^{2+}]$ | Shift $+0.02955\log_{10}[\text{Zn}^{2+}]$ ($\text{V}$) | $E_{\text{Zn}^{2+}/\text{Zn}}$ ($\text{V}$) |
| :--- | :--- | :--- | :--- | :--- |
| (a) | $0.01$ ($10^{-2}$) | $-2.000$ | $-0.0591$ | $-0.8191$ |
| (b) | $0.10$ ($10^{-1}$) | $-1.000$ | $-0.0296$ | $-0.7896$ ($\approx -0.790$) |
| (c) | $1.00$ ($10^0$) | $0.000$ | $0.0000$ | $-0.7600$ |
| (d) | $10.0$ ($10^1$) | $+1.000$ | $+0.0296$ | $-0.7305$ ($\approx -0.730$) |

* **Meaning:** Raising the $\text{Zn}^{2+}$ concentration makes the reduction potential less negative (more favourable for reduction). Note that case (d) ($10.0\text{ M}$) is a formal ideal-concentration extrapolation; in a real $10\text{ M}$ electrolyte, strong interionic attractions cause the effective thermodynamic activity to deviate substantially from molarity, and solubility limits also apply.



#### Example 2: Zinc electrode in $2.0\text{ M}$ solution at $300\text{ K}$
**Problem:** The standard reduction potential of $\text{Zn}^{2+}/\text{Zn}$ is $-0.760\text{ V}$. Calculate the electrode potential of a zinc rod immersed in a $2.0\text{ M}$ $\text{Zn}^{2+}$ solution at $300\text{ K}$.

* **Given:** $E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.760\text{ V}$ (note: zinc is an active metal above hydrogen in the electrochemical series, so its standard reduction potential is negative, $-0.760\text{ V}$, never $+0.760\text{ V}$), $[\text{Zn}^{2+}] = 2.0\text{ M}$, $T = 300\text{ K}$, $R = 8.314\text{ J mol}^{-1}\text{ K}^{-1}$, $F = 96485\text{ C mol}^{-1}$.
* **Balanced half-reaction and $n$:** $\text{Zn}^{2+}(aq) + 2e^- \rightarrow \text{Zn}(s)$, so $n = 2$.
* **Substitution:**

$$
\begin{aligned}
E_{\text{Zn}^{2+}/\text{Zn}} &= E^\circ_{\text{Zn}^{2+}/\text{Zn}} + \frac{2.303RT}{nF} \log_{10}[\text{Zn}^{2+}] \\
&= -0.760 + \left(\frac{2.303 \times 8.314 \times 300}{2 \times 96485}\right) \log_{10}(2.0) \\
&= -0.760 + (0.02976 \times 0.3010) \\
&= -0.760 + 0.0090 = -0.751\text{ V}
\end{aligned}
$$

* **Meaning:** Because $[\text{Zn}^{2+}] > 1\text{ M}$, the potential shifts in the positive direction from $-0.760\text{ V}$ to $-0.751\text{ V}$.



#### Example 3: Zinc electrode at elevated temperature ($50\,^\circ\text{C}$)
**Problem:** Calculate the single-electrode potential of a zinc electrode when $[\text{Zn}^{2+}] = 0.10\text{ M}$ at $50\,^\circ\text{C}$ ($323\text{ K}$), taking $E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.760\text{ V}$.

* **Given:** $[\text{Zn}^{2+}] = 0.10\text{ M}$, $T = 50 + 273 = 323\text{ K}$, $E^\circ = -0.760\text{ V}$ (approximated as constant over this small temperature interval).
* **Balanced half-reaction and $n$:** $\text{Zn}^{2+}(aq) + 2e^- \rightarrow \text{Zn}(s)$, $n = 2$, $Q = \frac{1}{0.10} = 10$.
* **Substitution:**

$$
\begin{aligned}
E_{\text{Zn}^{2+}/\text{Zn}} &= -0.760 - \frac{2.303 \times 8.314 \times 323}{2 \times 96485} \log_{10}(10) \\
&= -0.760 - (0.03205 \times 1) = -0.792\text{ V}
\end{aligned}
$$

* **Meaning:** Higher temperature magnifies the logarithmic concentration term (from $0.02955\text{ V}$ at $298\text{ K}$ to $0.03205\text{ V}$ at $323\text{ K}$), making the diluted electrode slightly more negative.



#### Example 4: Aluminium electrode in $2.0\text{ M}$ $\text{Al}^{3+}$ at $298\text{ K}$
**Problem:** Calculate the electrode potential of an aluminium electrode at $25\,^\circ\text{C}$ given $[\text{Al}^{3+}] = 2.0\text{ M}$ and $E^\circ_{\text{Al}^{3+}/\text{Al}} = -1.660\text{ V}$.

* **Given:** $E^\circ_{\text{Al}^{3+}/\text{Al}} = -1.660\text{ V}$, $[\text{Al}^{3+}] = 2.0\text{ M}$, $T = 298\text{ K}$.
* **Balanced half-reaction and $n$:** $\text{Al}^{3+}(aq) + 3e^- \rightarrow \text{Al}(s)$, so $n = 3$.
* **Substitution:**

$$
\begin{aligned}
E_{\text{Al}^{3+}/\text{Al}} &= -1.660 + \frac{0.0591}{3} \log_{10}(2.0) \\
&= -1.660 + (0.0197 \times 0.3010) \\
&= -1.660 + 0.0059 = -1.654\text{ V}
\end{aligned}
$$

* **Meaning:** Because three electrons are transferred per ion, the pre-logarithmic slope is smaller ($0.0197\text{ V}$ per decade), giving a modest $+5.9\text{ mV}$ shift.



#### Example 5: Platinum redox electrode ($\text{Pt} \mid \text{Fe}^{3+}, \text{Fe}^{2+}$)
**Problem:** Calculate the single-electrode potential of the redox half-cell $\text{Pt} \mid \text{Fe}^{3+}(0.10\text{ M}), \text{Fe}^{2+}(0.010\text{ M})$ at $25\,^\circ\text{C}$, given $E^\circ_{\text{Fe}^{3+}/\text{Fe}^{2+}} = +0.770\text{ V}$.

* **Given:** $[\text{Fe}^{3+}] = 0.10\text{ M}$, $[\text{Fe}^{2+}] = 0.010\text{ M}$, $E^\circ = +0.770\text{ V}$, $T = 298\text{ K}$.
* **Balanced half-reaction and $n$:** Both species are aqueous ions:

$$
\text{Fe}^{3+}(aq) + e^- \longrightarrow \text{Fe}^{2+}(aq) \quad (n = 1)
$$

* **Reaction quotient and substitution:** For this reduction, the product is $\text{Fe}^{2+}$ and the reactant is $\text{Fe}^{3+}$, so $Q = \frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]} = \frac{0.010}{0.10} = 0.10$.

$$
\begin{aligned}
E_{\text{Fe}^{3+}/\text{Fe}^{2+}} &= E^\circ_{\text{Fe}^{3+}/\text{Fe}^{2+}} - \frac{0.0591}{1} \log_{10}\!\left(\frac{[\text{Fe}^{2+}]}{[\text{Fe}^{3+}]}\right) \\
&= 0.770 - 0.0591 \log_{10}(0.10) \\
&= 0.770 - 0.0591(-1) = +0.8291\text{ V}
\end{aligned}
$$

* **Meaning:** A tenfold excess of the oxidized form ($\text{Fe}^{3+}$) over the reduced form ($\text{Fe}^{2+}$) raises the reduction potential by $+0.0591\text{ V}$ above the standard value.

---



### Complete cell potentials ($E_{\text{cell}}$)

#### Example 6: Daniell cell ($\text{Zn}$–$\text{Cu}$) across different electrolyte concentrations
**Problem:** For the Daniell cell $\text{Zn}(s) \mid \text{Zn}^{2+}(aq) \parallel \text{Cu}^{2+}(aq) \mid \text{Cu}(s)$ at $25\,^\circ\text{C}$, $E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.760\text{ V}$ and $E^\circ_{\text{Cu}^{2+}/\text{Cu}} = +0.340\text{ V}$. Calculate the standard cell EMF and the non-standard cell EMF for:
(a) $[\text{Zn}^{2+}] = 0.0010\text{ M}$, $[\text{Cu}^{2+}] = 0.10\text{ M}$
(b) $[\text{Zn}^{2+}] = 0.010\text{ M}$, $[\text{Cu}^{2+}] = 0.10\text{ M}$
(c) $[\text{Zn}^{2+}] = 0.50\text{ M}$, $[\text{Cu}^{2+}] = 2.0\text{ M}$

* **Given and standard cell potential:**
  * Anode (oxidation): $\text{Zn}(s) \rightarrow \text{Zn}^{2+}(aq) + 2e^-$
  * Cathode (reduction): $\text{Cu}^{2+}(aq) + 2e^- \rightarrow \text{Cu}(s)$
  * Overall reaction: $\text{Zn}(s) + \text{Cu}^{2+}(aq) \rightarrow \text{Zn}^{2+}(aq) + \text{Cu}(s)$ ($n = 2$)
  * Standard EMF: $E^\circ_{\text{cell}} = E^\circ_{\text{Cu}^{2+}/\text{Cu}} - E^\circ_{\text{Zn}^{2+}/\text{Zn}} = 0.340 - (-0.760) = 1.100\text{ V}$.
* **Reaction quotient and Nernst equation:** Because $\text{Zn}^{2+}$ is the aqueous product and $\text{Cu}^{2+}$ is the aqueous reactant:

$$
Q = \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]}, \qquad E_{\text{cell}} = 1.100 - \frac{0.0591}{2} \log_{10}\!\left(\frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]}\right)
$$

* **Detailed check for Case (a) ($[\text{Zn}^{2+}] = 0.0010\text{ M}, [\text{Cu}^{2+}] = 0.10\text{ M}$):**

$$
\begin{aligned}
Q &= \frac{10^{-3}}{10^{-1}} = 10^{-2} \\
E_{\text{cell}} &= 1.100 - 0.02955 \log_{10}(10^{-2}) \\
&= 1.100 - 0.02955(-2) = 1.100 + 0.0591 = 1.1591\text{ V}
\end{aligned}
$$

* **Comparison of all three concentration sets:**

| Case | $[\text{Zn}^{2+}]$ ($\text{M}$) | $[\text{Cu}^{2+}]$ ($\text{M}$) | $Q = \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]}$ | $\log_{10} Q$ | $E_{\text{cell}}$ ($\text{V}$) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| (a) | $0.0010$ | $0.10$ | $0.010$ | $-2.000$ | $1.1591$ |
| (b) | $0.010$ | $0.10$ | $0.10$ | $-1.000$ | $1.1296$ |
| (c) | $0.50$ | $2.0$ | $0.25$ | $-0.6021$ | $1.1178$ |

* **Meaning:** In all three cases $[\text{Cu}^{2+}] > [\text{Zn}^{2+}]$, so $Q < 1$ and the cell voltage exceeds $E^\circ_{\text{cell}} = 1.100\text{ V}$. Subtracting $0.0591\text{ V}$ in Case (a) to get $1.041\text{ V}$ is incorrect because it inverts $Q$ while keeping the minus sign.



#### Example 7: Lead–cadmium cell ($\text{Cd}$–$\text{Pb}$)
**Problem:** Find the cell potential at $25\,^\circ\text{C}$ for the galvanic cell operating on the reaction $\text{Pb}^{2+}(aq) + \text{Cd}(s) \rightarrow \text{Pb}(s) + \text{Cd}^{2+}(aq)$, given $E^\circ_{\text{Cd}^{2+}/\text{Cd}} = -0.403\text{ V}$, $E^\circ_{\text{Pb}^{2+}/\text{Pb}} = -0.126\text{ V}$, $[\text{Cd}^{2+}] = 0.020\text{ M}$, and $[\text{Pb}^{2+}] = 0.200\text{ M}$.

* **Given:** $E^\circ_{\text{cathode}} = E^\circ_{\text{Pb}^{2+}/\text{Pb}} = -0.126\text{ V}$, $E^\circ_{\text{anode}} = E^\circ_{\text{Cd}^{2+}/\text{Cd}} = -0.403\text{ V}$, $[\text{Cd}^{2+}] = 0.020\text{ M}$, $[\text{Pb}^{2+}] = 0.200\text{ M}$, $T = 298\text{ K}$.
* **Standard cell potential and $n$:**

$$
E^\circ_{\text{cell}} = -0.126 - (-0.403) = +0.277\text{ V}, \qquad n = 2
$$

* **Reaction quotient and substitution:**

$$
Q = \frac{[\text{Cd}^{2+}]}{[\text{Pb}^{2+}]} = \frac{0.020}{0.200} = 0.10
$$

$$
\begin{aligned}
E_{\text{cell}} &= 0.277 - \frac{0.0591}{2} \log_{10}(0.10) \\
&= 0.277 - 0.02955(-1) = 0.3066\text{ V}
\end{aligned}
$$

* **Meaning:** A tenfold higher reactant concentration ($\text{Pb}^{2+}$) over product concentration ($\text{Cd}^{2+}$) increases the cell voltage by $+29.6\text{ mV}$.



#### Example 8: Standard zinc–silver cell ($\text{Zn}$–$\text{Ag}$)
**Problem:** Calculate the standard EMF ($E^\circ_{\text{cell}}$) and write the Nernst equation at $25\,^\circ\text{C}$ for the cell $\text{Zn}(s) \mid \text{Zn}^{2+}(aq) \parallel \text{Ag}^+(aq) \mid \text{Ag}(s)$, given $E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.762\text{ V}$ and $E^\circ_{\text{Ag}^+/\text{Ag}} = +0.800\text{ V}$.

* **Given:** $E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.762\text{ V}$ (anode), $E^\circ_{\text{Ag}^+/\text{Ag}} = +0.800\text{ V}$ (cathode).
* **Balanced cell reaction and $n$:**
  * Anode: $\text{Zn}(s) \rightarrow \text{Zn}^{2+}(aq) + 2e^-$
  * Cathode: $2\text{Ag}^+(aq) + 2e^- \rightarrow 2\text{Ag}(s)$
  * Overall: $\text{Zn}(s) + 2\text{Ag}^+(aq) \rightarrow \text{Zn}^{2+}(aq) + 2\text{Ag}(s)$ ($n = 2$)
* **Standard EMF and Nernst equation:**

$$
E^\circ_{\text{cell}} = 0.800 - (-0.762) = 1.562\text{ V}
$$

$$
E_{\text{cell}} = 1.562 - \frac{0.0591}{2} \log_{10}\!\left(\frac{[\text{Zn}^{2+}]}{[\text{Ag}^+]^2}\right)
$$

* **Meaning:** Because two moles of $\text{Ag}^+$ are reduced per mole of $\text{Zn}$ oxidized, $[\text{Ag}^+]$ must be squared in $Q$.

> **Watch out.** In asymmetric cells such as $\text{Cu} \mid \text{Cu}^{2+} \parallel \text{Ag}^+ \mid \text{Ag}$ or $\text{Fe} \mid \text{Fe}^{2+} \parallel \text{Ag}^+ \mid \text{Ag}$, students frequently forget to square $[\text{Ag}^+]$ in the reaction quotient. When $[\text{Ag}^+] = 0.10\text{ M}$ and $[\text{M}^{2+}] = 0.010\text{ M}$, $\frac{[\text{M}^{2+}]}{[\text{Ag}^+]^2} = \frac{0.010}{(0.10)^2} = 1$, making the logarithmic correction zero.



#### Example 9: Copper–silver cell ($\text{Cu}$–$\text{Ag}$) where $Q = 1$ at non-unit concentrations
**Problem:** Write the cell representation and cell reaction for a $\text{Cu}$–$\text{Ag}$ cell at $25\,^\circ\text{C}$ and calculate its EMF when $[\text{Cu}^{2+}] = 0.010\text{ M}$ and $[\text{Ag}^+] = 0.10\text{ M}$. Given $E^\circ_{\text{Cu}^{2+}/\text{Cu}} = +0.340\text{ V}$ and $E^\circ_{\text{Ag}^+/\text{Ag}} = +0.800\text{ V}$.

* **Cell representation:** $\text{Cu}(s) \mid \text{Cu}^{2+}(0.010\text{ M}) \parallel \text{Ag}^+(0.10\text{ M}) \mid \text{Ag}(s)$
* **Balanced reaction and $n$:** $\text{Cu}(s) + 2\text{Ag}^+(aq) \rightarrow \text{Cu}^{2+}(aq) + 2\text{Ag}(s)$, so $n = 2$.
* **Standard EMF and $Q$:**

$$
E^\circ_{\text{cell}} = 0.800 - 0.340 = 0.460\text{ V}, \qquad Q = \frac{[\text{Cu}^{2+}]}{[\text{Ag}^+]^2} = \frac{0.010}{(0.10)^2} = \frac{0.010}{0.010} = 1.0
$$

* **Substitution:**

$$
E_{\text{cell}} = 0.460 - \frac{0.0591}{2} \log_{10}(1.0) = 0.460 - 0 = 0.460\text{ V}
$$

* **Meaning:** Even though neither ion is at $1\text{ M}$ standard concentration, the ratio $\frac{[\text{Cu}^{2+}]}{[\text{Ag}^+]^2}$ equals unity, so $E_{\text{cell}}$ equals $E^\circ_{\text{cell}}$.



#### Example 10: Iron–silver cell ($\text{Fe}$–$\text{Ag}$) at $298\text{ K}$
**Problem:** Calculate $E_{\text{cell}}$ for $\text{Fe}(s) \mid \text{Fe}^{2+}(0.010\text{ M}) \parallel \text{Ag}^+(0.10\text{ M}) \mid \text{Ag}(s)$ at $298\text{ K}$, given $E^\circ_{\text{Fe}^{2+}/\text{Fe}} = -0.440\text{ V}$ and $E^\circ_{\text{Ag}^+/\text{Ag}} = +0.800\text{ V}$.

* **Given:** $E^\circ_{\text{anode}} = -0.440\text{ V}$, $E^\circ_{\text{cathode}} = +0.800\text{ V}$, $[\text{Fe}^{2+}] = 0.010\text{ M}$, $[\text{Ag}^+] = 0.10\text{ M}$.
* **Balanced reaction and $n$:** $\text{Fe}(s) + 2\text{Ag}^+(aq) \rightarrow \text{Fe}^{2+}(aq) + 2\text{Ag}(s)$ ($n = 2$).
* **Standard EMF and $Q$:**

$$
E^\circ_{\text{cell}} = 0.800 - (-0.440) = 1.240\text{ V}, \qquad Q = \frac{[\text{Fe}^{2+}]}{[\text{Ag}^+]^2} = \frac{0.010}{(0.10)^2} = 1.0
$$

* **Substitution:**

$$
E_{\text{cell}} = 1.240 - \frac{0.0591}{2} \log_{10}(1.0) = 1.240\text{ V}
$$

* **Meaning:** Just as in Example 9, squaring $[\text{Ag}^+] = 0.10\text{ M}$ matches $[\text{Fe}^{2+}] = 0.010\text{ M}$, giving $Q = 1$ and $E_{\text{cell}} = 1.240\text{ V}$.



#### Example 11: Six-electron aluminium–iron cell ($\text{Al}$–$\text{Fe}$)
**Problem:** Calculate the EMF at $25\,^\circ\text{C}$ of the cell $\text{Al}(s) \mid \text{Al}^{3+}(0.10\text{ M}) \parallel \text{Fe}^{2+}(0.20\text{ M}) \mid \text{Fe}(s)$, given $E^\circ_{\text{Al}^{3+}/\text{Al}} = -1.660\text{ V}$ and $E^\circ_{\text{Fe}^{2+}/\text{Fe}} = -0.440\text{ V}$.

* **Given:** $E^\circ_{\text{Al}^{3+}/\text{Al}} = -1.660\text{ V}$ (anode), $E^\circ_{\text{Fe}^{2+}/\text{Fe}} = -0.440\text{ V}$ (cathode), $[\text{Al}^{3+}] = 0.10\text{ M}$, $[\text{Fe}^{2+}] = 0.20\text{ M}$.
* **Balanced cell reaction and $n$:**
  * Anode (oxidation): $2\text{Al}(s) \rightarrow 2\text{Al}^{3+}(aq) + 6e^-$
  * Cathode (reduction): $3\text{Fe}^{2+}(aq) + 6e^- \rightarrow 3\text{Fe}(s)$
  * Overall: $2\text{Al}(s) + 3\text{Fe}^{2+}(aq) \rightarrow 2\text{Al}^{3+}(aq) + 3\text{Fe}(s)$ ($n = 6$)
* **Standard EMF and $Q$:**

$$
E^\circ_{\text{cell}} = -0.440 - (-1.660) = 1.220\text{ V}, \qquad Q = \frac{[\text{Al}^{3+}]^2}{[\text{Fe}^{2+}]^3} = \frac{(0.10)^2}{(0.20)^3} = \frac{0.010}{0.0080} = 1.25
$$

* **Substitution:**

$$
\begin{aligned}
E_{\text{cell}} &= 1.220 - \frac{0.0591}{6} \log_{10}(1.25) \\
&= 1.220 - (0.00985 \times 0.0969) \\
&= 1.220 - 0.00095 = 1.219\text{ V}
\end{aligned}
$$

* **Meaning:** Because $n = 6$ and $Q$ is close to unity ($1.25$), the concentration correction is less than $1\text{ mV}$.



#### Example 12: Aluminium–tin redox cell ($\text{Al}$–$\text{Sn}^{4+}/\text{Sn}^{2+}$) with symbolic cathode potential
**Problem:** Set up the balanced cell reaction, reaction quotient, and EMF expression at $25\,^\circ\text{C}$ for the cell $\text{Al}(s) \mid \text{Al}^{3+}(0.10\text{ M}) \parallel \text{Sn}^{4+}(0.10\text{ M}), \text{Sn}^{2+}(0.010\text{ M}) \mid \text{Pt}$, given $E^\circ_{\text{Al}^{3+}/\text{Al}} = -1.660\text{ V}$ and denoting the unspecified standard reduction potential of the tin redox couple as $E^\circ_{\text{Sn}^{4+}/\text{Sn}^{2+}}$.

* **Balanced cell reaction and $n$:**
  * Anode: $2\text{Al}(s) \rightarrow 2\text{Al}^{3+}(aq) + 6e^-$
  * Cathode: $3\text{Sn}^{4+}(aq) + 6e^- \rightarrow 3\text{Sn}^{2+}(aq)$
  * Overall: $2\text{Al}(s) + 3\text{Sn}^{4+}(aq) \rightarrow 2\text{Al}^{3+}(aq) + 3\text{Sn}^{2+}(aq)$ ($n = 6$)
* **Reaction quotient:** Pure solid $\text{Al}$ has unit activity and is omitted:

$$
Q = \frac{[\text{Al}^{3+}]^2 [\text{Sn}^{2+}]^3}{[\text{Sn}^{4+}]^3} = \frac{(0.10)^2 (0.010)^3}{(0.10)^3} = \frac{10^{-2} \times 10^{-6}}{10^{-3}} = 10^{-5}
$$

* **Substitution into Nernst equation:**

$$
\begin{aligned}
E^\circ_{\text{cell}} &= E^\circ_{\text{Sn}^{4+}/\text{Sn}^{2+}} - (-1.660\text{ V}) = E^\circ_{\text{Sn}^{4+}/\text{Sn}^{2+}} + 1.660\text{ V} \\
E_{\text{cell}} &= \left(E^\circ_{\text{Sn}^{4+}/\text{Sn}^{2+}} + 1.660\right) - \frac{0.0591}{6} \log_{10}(10^{-5}) \\
&= E^\circ_{\text{Sn}^{4+}/\text{Sn}^{2+}} + 1.660 - 0.00985(-5) \\
&= E^\circ_{\text{Sn}^{4+}/\text{Sn}^{2+}} + 1.7093\text{ V}
\end{aligned}
$$

* **Meaning:** Once a specific value of $E^\circ_{\text{Sn}^{4+}/\text{Sn}^{2+}}$ is supplied in an examination problem, it can be added directly to $1.7093\text{ V}$.

---



### Inverse problems and equilibrium constants

#### Example 13: Finding an unknown ion concentration ($\text{Cu}$–$\text{Ag}$ cell)
**Problem:** In a copper–silver cell at $25\,^\circ\text{C}$, $[\text{Cu}^{2+}] = 0.10\text{ M}$ and the measured cell potential is $E_{\text{cell}} = 0.422\text{ V}$. Given $E^\circ_{\text{Ag}^+/\text{Ag}} = +0.800\text{ V}$ and $E^\circ_{\text{Cu}^{2+}/\text{Cu}} = +0.340\text{ V}$, calculate the silver-ion concentration $[\text{Ag}^+]$.

* **Given:** $[\text{Cu}^{2+}] = 0.10\text{ M}$, $E_{\text{cell}} = 0.422\text{ V}$, $E^\circ_{\text{cell}} = 0.800 - 0.340 = 0.460\text{ V}$.
* **Balanced reaction and $n$:** $\text{Cu}(s) + 2\text{Ag}^+(aq) \rightarrow \text{Cu}^{2+}(aq) + 2\text{Ag}(s)$ ($n = 2$).
* **Substitution and algebraic solution:**

$$
\begin{aligned}
0.422 &= 0.460 - \frac{0.0591}{2} \log_{10}\!\left(\frac{0.10}{[\text{Ag}^+]^2}\right) \\
\log_{10}\!\left(\frac{0.10}{[\text{Ag}^+]^2}\right) &= \frac{0.460 - 0.422}{0.02955} = \frac{0.038}{0.02955} = 1.2860 \\
\log_{10}(0.10) - 2\log_{10}[\text{Ag}^+] &= 1.2860 \\
-1.000 - 2\log_{10}[\text{Ag}^+] &= 1.2860 \implies \log_{10}[\text{Ag}^+] = -1.1430 \\
[\text{Ag}^+] &= 10^{-1.1430} = 0.0719\text{ M}
\end{aligned}
$$

(Note: Using the rounded constant $0.0592\text{ V}$ gives $\log_{10}[\text{Ag}^+] = -1.1419$ and $[\text{Ag}^+] = 0.0721\text{ M}$.)
* **Meaning:** Because $E_{\text{cell}} < E^\circ_{\text{cell}}$, the reaction quotient $Q > 1$, requiring $[\text{Ag}^+]$ to be smaller than $\sqrt{0.10}\text{ M}$ ($0.316\text{ M}$).



#### Example 14: Finding an unknown standard electrode potential ($\text{Ni}$–$\text{Cu}$ cell)
**Problem:** The cell potential of $\text{Ni}(s) \mid \text{Ni}^{2+}(0.10\text{ M}) \parallel \text{Cu}^{2+}(0.010\text{ M}) \mid \text{Cu}(s)$ is $0.590\text{ V}$ at $25\,^\circ\text{C}$. Given $E^\circ_{\text{Cu}^{2+}/\text{Cu}} = +0.340\text{ V}$, find the standard reduction potential $E^\circ_{\text{Ni}^{2+}/\text{Ni}}$.

* **Given:** $[\text{Ni}^{2+}] = 0.10\text{ M}$ (anode), $[\text{Cu}^{2+}] = 0.010\text{ M}$ (cathode), $E_{\text{cell}} = 0.590\text{ V}$, $E^\circ_{\text{Cu}^{2+}/\text{Cu}} = +0.340\text{ V}$.
* **Balanced reaction and $n$:** $\text{Ni}(s) + \text{Cu}^{2+}(aq) \rightarrow \text{Ni}^{2+}(aq) + \text{Cu}(s)$ ($n = 2$).
* **Reaction quotient and $E^\circ_{\text{cell}}$:** $Q = \frac{[\text{Ni}^{2+}]}{[\text{Cu}^{2+}]} = \frac{0.10}{0.010} = 10$.

$$
\begin{aligned}
0.590 &= E^\circ_{\text{cell}} - \frac{0.0591}{2} \log_{10}(10) \\
E^\circ_{\text{cell}} &= 0.590 + 0.02955 = 0.6196\text{ V} \\
E^\circ_{\text{Ni}^{2+}/\text{Ni}} &= E^\circ_{\text{Cu}^{2+}/\text{Cu}} - E^\circ_{\text{cell}} = 0.340 - 0.6196 = -0.2796\text{ V} \;(\approx -0.280\text{ V})
\end{aligned}
$$

* **Meaning:** Nickel has a negative standard reduction potential ($-0.280\text{ V}$), confirming its role as the anode relative to copper.



#### Example 15: Equilibrium constants ($K$) for $\text{Fe}$–$\text{Cu}$ and $\text{Zn}$–$\text{Cu}$ cells at $298\text{ K}$
**Problem:** Calculate the equilibrium constant $K$ at $25\,^\circ\text{C}$ for:
(a) $\text{Fe}(s) + \text{Cu}^{2+}(aq) \rightleftharpoons \text{Fe}^{2+}(aq) + \text{Cu}(s)$, given $E^\circ_{\text{Fe}^{2+}/\text{Fe}} = -0.440\text{ V}$ and $E^\circ_{\text{Cu}^{2+}/\text{Cu}} = +0.340\text{ V}$.
(b) The Daniell cell reaction $\text{Zn}(s) + \text{Cu}^{2+}(aq) \rightleftharpoons \text{Zn}^{2+}(aq) + \text{Cu}(s)$, given $E^\circ_{\text{cell}} = 1.100\text{ V}$.

* **Relation at equilibrium:** At chemical equilibrium, $\Delta G = 0$, $E_{\text{cell}} = 0$, and $Q = K$. At $298\text{ K}$:

$$
\log_{10} K = \frac{n E^\circ_{\text{cell}}}{0.0591}
$$

* **Case (a) ($\text{Fe}$–$\text{Cu}$, $n = 2$):**
  * $E^\circ_{\text{cell}} = 0.340 - (-0.440) = 0.780\text{ V}$
  * $\log_{10} K = \frac{2 \times 0.780}{0.0591} = 26.396$
  * $K = 10^{26.396} = 2.49 \times 10^{26}$
* **Case (b) ($\text{Zn}$–$\text{Cu}$, $n = 2$):**
  * $E^\circ_{\text{cell}} = 1.100\text{ V}$
  * $\log_{10} K = \frac{2 \times 1.100}{0.0591} = 37.225$
  * $K = 10^{37.225} = 1.68 \times 10^{37}$
* **Meaning:** Notice that $K = 10^{\log_{10} K}$ (base-$10$ antilogarithm), never $e^{\log_{10} K}$. Both reactions proceed virtually to completion.



#### Note on incomplete problem statements

Occasionally, a problem sheet may state: *"Calculate $E^\circ_{\text{Cu}^{2+}/\text{Cu}}$ given $0.296\text{ V}$ and $[\text{Cu}^{2+}] = 0.015\text{ M}."* If the prompt both asks for $E^\circ$ and labels $0.296\text{ V}$ as $E^\circ$, or fails to specify temperature and whether $0.296\text{ V}$ is the measured non-standard potential $E$, the problem is underspecified. If $E_{\text{Cu}^{2+}/\text{Cu}} = +0.296\text{ V}$ is the measured potential at $298\text{ K}$ for $[\text{Cu}^{2+}] = 0.015\text{ M}$ ($n = 2$), then $E^\circ = E - \frac{0.0591}{2}\log_{10}(0.015) = 0.296 - 0.02955(-1.8239) = +0.350\text{ V}$; conversely, if $E^\circ = +0.340\text{ V}$ was intended, then $E = 0.340 + 0.02955\log_{10}(0.015) = +0.286\text{ V}$. Always verify which potential ($E$ or $E^\circ$) is given before substituting.

<!-- page 5 | Reference electrodes and the standard hydrogen electrode -->

## Reference electrodes and the standard hydrogen electrode

Because electrical potential is a relative quantity, it is impossible to measure the absolute potential of a single half-cell in isolation. To determine the potential of an unknown electrode, we must pair it with a second half-cell of accurately known potential and measure the total electromotive force (EMF) of the resulting galvanic cell. This section introduces the classification of reference and indicator electrodes and details the construction, thermodynamics, and practical limitations of the fundamental benchmark in electrochemistry: the standard hydrogen electrode.

### Reference vs Indicator Electrodes

Electrochemical potential measurements require two distinct types of half-cells:

**Reference electrode**

A reference electrode is an electrode that maintains a stable, reproducible, and well-known electrode potential regardless of small changes in the test solution. It serves as the fixed baseline against which other potentials are measured.

**Indicator (working) electrode**

An indicator (working) electrode is an electrode whose potential varies systematically with the activity (or concentration) of a specific ion in the test solution, such as a glass electrode responding to $\mathrm{H^+}$ ions.

Reference electrodes are further divided into two categories:

1. **Primary reference electrode:** An electrode whose standard potential is assigned as exactly zero ($E^\circ = 0.00\text{ V}$) by international convention at all temperatures. The **Standard Hydrogen Electrode (SHE)** is the universal primary reference.
2. **Secondary reference electrode:** A convenient, rugged electrode whose constant potential has been accurately determined by calibration against the SHE. Examples include the calomel electrode ($\mathrm{Hg|Hg_2Cl_2|Cl^-}$) and the silver–silver chloride electrode ($\mathrm{Ag|AgCl|Cl^-}$).

> **Watch out.** Do not classify the glass electrode or quinhydrone electrode as secondary reference electrodes. Because their potentials change directly with the $\mathrm{pH}$ of the solution, they are **indicator electrodes**, not reference electrodes.

**Standard Hydrogen Electrode (SHE)**

The Standard Hydrogen Electrode is a redox gas–ion electrode that establishes a reversible equilibrium between gaseous hydrogen ($\mathrm{H_2}$) and aqueous hydrogen ions ($\mathrm{H^+}$).

![Schematic diagram of the Standard Hydrogen Electrode showing a platinized platinum foil immersed in acid solution with hydrogen gas inlet at the top.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/page-011-image-1.webp)

*Figure: Construction of the Standard Hydrogen Electrode (SHE).*

#### Construction

1. **Inert conductor and catalyst:** A small rectangular platinum foil is coated electrochemically with finely divided platinum (**platinum black** or platinized $\mathrm{Pt}$) to provide a large catalytic surface area that adsorbs hydrogen gas and accelerates electron transfer.
2. **Electrical contact:** The foil is welded to a platinum wire sealed inside an inner glass tube.
3. **Gas jacket:** An outer glass jacket surrounds the tube, featuring a side inlet near the top for introducing pure, dry $\mathrm{H_2}$ gas and small perforations at the bottom to allow excess gas to bubble out.
4. **Standard state conditions:** The assembly is immersed in an acid solution (typically $\mathrm{HCl}$) where the hydrogen ion activity is unity ($a_{\mathrm{H^+}} = 1$, approximated in introductory problems as $[\mathrm{H^+}] = 1\text{ M}$). Pure $\mathrm{H_2}$ gas is bubbled continuously at a standard pressure of $1\text{ bar}$ (older textbooks often state $1\text{ atm} = 1.013\text{ bar}$, which yields a negligible potential difference of about $0.17\text{ mV}$), typically at a stated temperature of $298\text{ K}$.

By IUPAC convention, the standard reduction potential of this half-cell is defined as:

$$
E^\circ_{\mathrm{H^+/H_2}} = 0.00\text{ V}
$$

#### Half-Cell Notation and Working

The SHE is a reversible electrode; it can function either as the anode or the cathode depending on the reduction potential of the half-cell connected to it.

- **Acting as Anode (Oxidation):** When coupled with an electrode having a positive standard reduction potential ($E^\circ > 0\text{ V}$, such as $\mathrm{Cu^{2+}/Cu}$), hydrogen gas is oxidized:

$$
\mathrm{H_2(g) \rightleftharpoons 2H^+(aq) + 2e^-}
$$

  *Representation:* $\mathrm{Pt(s) \mid H_2(g, 1\text{ bar}) \mid H^+(aq, } a=1\mathrm{)}$

- **Acting as Cathode (Reduction):** When coupled with an electrode having a negative standard reduction potential ($E^\circ < 0\text{ V}$, such as $\mathrm{Zn^{2+}/Zn}$), aqueous $\mathrm{H^+}$ ions are reduced:

$$
\mathrm{2H^+(aq) + 2e^- \rightleftharpoons H_2(g)}
$$

  *Representation:* $\mathrm{H^+(aq, } a=1\mathrm{) \mid H_2(g, 1\text{ bar}) \mid Pt(s)}$

#### Nernst Equation and pH Dependence

For the reduction of two moles of $\mathrm{H^+}$ ($n = 2$), the general Nernst equation for a hydrogen electrode at temperature $T$ is:

$$
E_{\mathrm{H^+/H_2}} = E^\circ_{\mathrm{H^+/H_2}} - \frac{2.303RT}{2F} \log \left( \frac{P_{\mathrm{H_2}}/P^\circ}{a_{\mathrm{H^+}}^2} \right)
$$

where $R = 8.314\text{ J mol}^{-1}\text{K}^{-1}$, $F = 96485\text{ C mol}^{-1}$, $P_{\mathrm{H_2}}$ is the hydrogen partial pressure, $P^\circ = 1\text{ bar}$, and $a_{\mathrm{H^+}}$ is dimensionless hydrogen-ion activity. In dilute-solution exercises, its numerical value is approximated using concentration in $\text{mol L}^{-1}$. Substituting $E^\circ = 0$, $T = 298\text{ K}$ (so $\frac{2.303RT}{F} = 0.0591\text{ V}$), and $P_{\mathrm{H_2}} = 1\text{ bar}$:

$$
\begin{aligned}
E_{\mathrm{H^+/H_2}} &= 0 - \frac{0.0591}{2} \log \left( \frac{1}{[\mathrm{H^+}]^2} \right) \\
&= 0.0591 \log [\mathrm{H^+}] \\
&= -0.0591\,\mathrm{pH}\text{ V}
\end{aligned}
$$

#### Measuring an Unknown Potential (Zinc vs SHE)

To measure the standard reduction potential of a $\mathrm{Zn^{2+}(1\text{ M})/Zn}$ electrode, it is connected to the SHE via a salt bridge. Because zinc has a higher tendency to oxidize than hydrogen, $\mathrm{Zn}$ acts as the anode and the SHE acts as the cathode:

$$
\mathrm{Zn(s) \mid Zn^{2+}(1\text{ M}) \parallel H^+(1\text{ M}) \mid H_2(1\text{ bar}) \mid Pt(s)}
$$

When a high-impedance digital voltmeter is connected with its positive terminal to the $\mathrm{Pt}$ lead of the SHE and its negative (common) terminal to the $\mathrm{Zn}$ rod, the meter reads $E^\circ_{\mathrm{cell}} = +0.76\text{ V}$ (reversing the voltmeter leads would display $-0.76\text{ V}$). Using the cell EMF relation:

$$
\begin{aligned}
E^\circ_{\mathrm{cell}} &= E^\circ_{\mathrm{cathode}} - E^\circ_{\mathrm{anode}} \\
0.76\text{ V} &= 0.00\text{ V} - E^\circ_{\mathrm{Zn^{2+}/Zn}} \implies E^\circ_{\mathrm{Zn^{2+}/Zn}} = -0.76\text{ V}
\end{aligned}
$$

### Limitations of the SHE

1. **Pressure and activity control:** Maintaining a continuous stream of pure $\mathrm{H_2}$ at exactly $1\text{ bar}$ pressure and keeping the acid activity strictly at unity throughout an experiment is experimentally cumbersome.
2. **Catalyst poisoning:** The platinized platinum surface is easily poisoned by trace impurities such as $\mathrm{H_2S}$, arsenic compounds, and mercury salts, which adsorb onto active sites and destroy electrode reversibility.
3. **Redox interference:** Strong oxidizing or reducing agents in the test solution (such as $\mathrm{Fe^{3+}}$, $\mathrm{MnO_4^-}$, or dissolved $\mathrm{O_2}$) react directly at the platinum surface, altering the mixed potential.
4. **Safety and portability:** The glass apparatus is fragile, and the continuous escape of flammable $\mathrm{H_2}$ gas poses a laboratory fire hazard.

> **Watch out.** Platinum does **not** corrode in $1\text{ M } \mathrm{HCl}$ solution. Platinum is chosen specifically because it is chemically inert in non-oxidizing acids; the limitation of the $\mathrm{Pt}$ electrode is surface poisoning by adsorbed impurities, not corrosion.

### Self-Check Questions

1. **Why is the platinum foil in the SHE coated with platinum black?**
   *Answer:* Platinum black provides a very high surface area and acts as a catalyst to adsorb $\mathrm{H_2}$ gas and rapidly establish the $\mathrm{H^+ / H_2}$ redox equilibrium.
2. **Calculate the reduction potential of a hydrogen electrode operating at $P_{\mathrm{H_2}} = 1\text{ bar}$ in a buffer solution of $\mathrm{pH} = 4.0$ at $298\text{ K}$.**
   *Answer:* $E = -0.0591 \times \mathrm{pH} = -0.0591 \times 4.0 = -0.2364\text{ V}$.
3. **Write the IUPAC half-cell representation of the SHE when it is coupled with a standard silver electrode ($E^\circ_{\mathrm{Ag^+/Ag}} = +0.80\text{ V}$).**
   *Answer:* Since $E^\circ_{\mathrm{Ag^+/Ag}} > 0\text{ V}$, the SHE acts as the anode: $\mathrm{Pt(s) \mid H_2(g, 1\text{ bar}) \mid H^+(aq, } a=1\mathrm{)}$.

<!-- page 6 | The calomel electrode and potential measurement -->

## The calomel electrode and potential measurement

While the standard hydrogen electrode (SHE) defines the zero of the electrochemical scale, maintaining a continuous stream of pure hydrogen gas at the standard pressure of $1\text{ bar}$ over a fragile platinized surface is inconvenient for routine laboratory work. Practical electrochemistry therefore relies on secondary standards:

**Secondary reference electrode**

A secondary reference electrode is a sturdy, self-contained half-cell whose potential has been accurately calibrated against the standard hydrogen electrode (SHE).

**Calomel electrode**

A calomel electrode is a classic metal–insoluble metal salt–common anion reference electrode widely used to measure unknown half-cell potentials.

### Construction and cell notation

The calomel electrode consists of a glass tube containing a pool of pure liquid mercury ($\mathrm{Hg}$) at the bottom, covered by a paste of mercury and solid mercurous chloride ($\mathrm{Hg_2Cl_2}$, traditionally known as *calomel*). The remainder of the tube is filled with an aqueous potassium chloride ($\mathrm{KCl}$) solution of fixed concentration.

![Cross-sectional diagram of a calomel reference electrode showing the mercury pool, mercurous chloride paste, KCl solution, and platinum wire contact](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/page-013-image-1.webp)

*Figure: Internal structure of a calomel reference electrode.*

A platinum wire sealed into an inner glass tube dips directly into the liquid mercury layer to provide external electrical contact; it does not simply hang in the aqueous $\mathrm{KCl}$ solution. A side arm or a porous junction (such as a ceramic frit or glass-wool plug) at the base allows ionic contact with the external test solution or salt bridge while preventing bulk mixing.

Depending on whether the calomel half-cell is placed on the left (oxidation/anode) or right (reduction/cathode) of an electrochemical cell diagram, its phase boundary notation is written as:

* **As anode (left):** $\mathrm{Pt \mid Hg(l) \mid Hg_2Cl_2(s) \mid KCl(aq)}$
* **As cathode (right):** $\mathrm{KCl(aq) \mid Hg_2Cl_2(s) \mid Hg(l) \mid Pt}$

### Reversible electrode reactions and the Nernst equation

Because the calomel electrode is reversible, it can operate as either a cathode or an anode depending on the reduction potential of the half-cell coupled to it:

* **Acting as a cathode** (coupled to a half-cell with a lower reduction potential, such as $\mathrm{Zn^{2+}/Zn}$):

$$
\mathrm{Hg_2Cl_2(s) + 2e^- \rightarrow 2Hg(l) + 2Cl^-(aq)}
$$

* **Acting as an anode** (coupled to a half-cell with a higher reduction potential, such as $\mathrm{Cu^{2+}/Cu}$):

$$
\mathrm{2Hg(l) + 2Cl^-(aq) \rightarrow Hg_2Cl_2(s) + 2e^-}
$$

By convention, the electrode potential $E_{\text{cal}}$ is always expressed as a reduction potential using the cathodic half-reaction. Applying the Nernst equation for $n = 2$ moles of electrons transferred:

$$
E_{\text{cal}} = E^{\circ}_{\mathrm{Hg_2Cl_2/Hg}} - \frac{RT}{2F} \ln \left( \frac{a_{\mathrm{Hg}}^2 \, a_{\mathrm{Cl^-}}^2}{a_{\mathrm{Hg_2Cl_2}}} \right)
$$

Here, $E^{\circ}_{\mathrm{Hg_2Cl_2/Hg}} \approx +0.268\text{ V}$ is the standard reduction potential of the $\mathrm{Hg_2Cl_2/Hg}$ couple at $298\text{ K}$, $R = 8.314\text{ J mol}^{-1}\text{ K}^{-1}$, $T$ is the absolute temperature in kelvin, $F = 96485\text{ C mol}^{-1}$, and $a$ denotes chemical activity. Because pure liquid $\mathrm{Hg}$ and pure solid $\mathrm{Hg_2Cl_2}$ have unit activity ($a_{\mathrm{Hg}} = a_{\mathrm{Hg_2Cl_2}} = 1$), the expression simplifies to:

$$
\begin{aligned}
E_{\text{cal}} &= E^{\circ}_{\mathrm{Hg_2Cl_2/Hg}} - \frac{RT}{F} \ln a_{\mathrm{Cl^-}} \\
&= E^{\circ}_{\mathrm{Hg_2Cl_2/Hg}} - 0.0591 \log [\mathrm{Cl^-}] \quad (\text{at } 298\text{ K, approximating } a_{\mathrm{Cl^-}} \approx [\mathrm{Cl^-}])
\end{aligned}
$$

> **Watch out.** Do not substitute $+0.2422\text{ V}$ for $E^{\circ}_{\mathrm{Hg_2Cl_2/Hg}}$ in the Nernst equation. The value $+0.2422\text{ V}$ is already the resulting potential $E_{\text{SCE}}$ when the solution is saturated with $\mathrm{KCl}$, whereas $E^{\circ}_{\mathrm{Hg_2Cl_2/Hg}} \approx +0.268\text{ V}$ corresponds to unit chloride activity ($a_{\mathrm{Cl^-}} = 1$).

Because $E_{\text{cal}}$ depends only on temperature and chloride ion activity, fixing the chloride activity at a fixed temperature produces a stable reference potential. Saturated KCl is not dilute: use the tabulated SCE potential rather than substituting its molarity into a dilute-solution approximation. Three standard variants are used at $298\text{ K}$ ($25\ ^\circ\text{C}$):

| Electrode type | $\mathrm{KCl}$ concentration | Reduction potential vs. SHE at $298\text{ K}$ |
| :--- | :--- | :--- |
| Decinormal calomel electrode (DNCE) | $0.1\text{ M}$ (or $0.1\text{ N}$) | $\approx +0.3335\text{ V}$ |
| Normal calomel electrode (NCE) | $1.0\text{ M}$ (or $1.0\text{ N}$) | $\approx +0.280\text{ V}$ to $+0.281\text{ V}$ |
| Saturated calomel electrode (SCE) | Saturated ($\approx 4.2\text{ M}$) | $+0.2422\text{ V}$ (literature range: $+0.2415\text{ V}$ to $+0.244\text{ V}$) |

**Saturated calomel electrode (SCE)**

In the saturated calomel electrode (SCE), excess solid $\mathrm{KCl}$ crystals rest at the bottom so the chloride activity remains locked even if minor water evaporation occurs. We adopt $E_{\text{SCE}} = +0.2422\text{ V}$ at $298\text{ K}$ for consistency in numerical problems.

### Measuring unknown electrode potentials with an SCE

To determine the reduction potential of a test half-cell, we pair it with an SCE via a salt bridge and measure the cell EMF ($E_{\text{cell}}$) using a high-impedance digital voltmeter, applying:

$$
E_{\text{cell}} = E_{\text{right}} - E_{\text{left}}
$$

#### Standard zinc electrode potential

A zinc rod dipped in $1\text{ M } \mathrm{ZnSO_4}$ has a lower reduction potential than the SCE, so zinc undergoes oxidation on the left (anode) and the SCE is placed on the right (cathode):

$$
\mathrm{Zn(s) \mid Zn^{2+}(1\text{ M}) \parallel KCl(\text{sat}) \mid Hg_2Cl_2(s) \mid Hg(l) \mid Pt}
$$

* **Anode (left):** $\mathrm{Zn(s) \rightarrow Zn^{2+}(aq) + 2e^-}$
* **Cathode (right):** $\mathrm{Hg_2Cl_2(s) + 2e^- \rightarrow 2Hg(l) + 2Cl^-(aq)}$
* **Overall reaction:** $\mathrm{Zn(s) + Hg_2Cl_2(s) \rightarrow Zn^{2+}(aq) + 2Hg(l) + 2Cl^-(aq)}$

At $298\text{ K}$, the voltmeter reads $E_{\text{cell}} = 1.0022\text{ V}$. Using $E_{\text{cell}} = E_{\text{right}} - E_{\text{left}}$:

$$
\begin{aligned}
1.0022\text{ V} &= E_{\text{SCE}} - E^{\circ}_{\mathrm{Zn^{2+}/Zn}} \\
E^{\circ}_{\mathrm{Zn^{2+}/Zn}} &= 0.2422\text{ V} - 1.0022\text{ V} = -0.760\text{ V}
\end{aligned}
$$

#### Standard copper electrode potential

A copper rod dipped in $1\text{ M } \mathrm{CuSO_4}$ has a higher reduction potential than the SCE, so the SCE acts as the anode (left) and copper acts as the cathode (right):

$$
\mathrm{Pt \mid Hg(l) \mid Hg_2Cl_2(s) \mid KCl(\text{sat}) \parallel Cu^{2+}(1\text{ M}) \mid Cu(s)}
$$

* **Anode (left):** $\mathrm{2Hg(l) + 2Cl^-(aq) \rightarrow Hg_2Cl_2(s) + 2e^-}$
* **Cathode (right):** $\mathrm{Cu^{2+}(aq) + 2e^- \rightarrow Cu(s)}$
* **Overall reaction:** $\mathrm{2Hg(l) + 2Cl^-(aq) + Cu^{2+}(aq) \rightarrow Hg_2Cl_2(s) + Cu(s)}$

At $298\text{ K}$, the voltmeter reads $E_{\text{cell}} = 0.0978\text{ V}$. Applying $E_{\text{cell}} = E_{\text{right}} - E_{\text{left}}$:

$$
\begin{aligned}
0.0978\text{ V} &= E^{\circ}_{\mathrm{Cu^{2+}/Cu}} - E_{\text{SCE}} \\
E^{\circ}_{\mathrm{Cu^{2+}/Cu}} &= 0.0978\text{ V} + 0.2422\text{ V} = +0.340\text{ V}
\end{aligned}
$$

> **Watch out.** Always check which electrode has the higher reduction potential before writing $E_{\text{cell}} = E_{\text{right}} - E_{\text{left}}$. Subtracting in the wrong order flips the sign of your calculated half-cell potential.

### Practical merits and limitations

The SCE is compact, easy to transport, and maintains a stable potential without gas cylinders. However, it has two important limitations:

1. **Thermal limit:** It cannot be used above about $50\ ^\circ\text{C}$ (often misprinted as $500\ ^\circ\text{C}$ in older notes) because mercurous chloride ($\mathrm{Hg_2Cl_2}$) disproportionates into liquid mercury ($\mathrm{Hg}$) and mercuric chloride ($\mathrm{HgCl_2}$), causing unstable readings.
2. **Toxicity and chemical incompatibility:** Mercury and its salts are hazardous environmental toxins, and $\mathrm{Cl^-}$ leakage from the porous plug can contaminate test solutions containing $\mathrm{Ag^+}$, $\mathrm{Pb^{2+}}$, or $\mathrm{Tl^+}$.

### Self-check questions

1. **Why does the potential of a calomel electrode decrease as the $\mathrm{KCl}$ concentration increases from $0.1\text{ M}$ to saturation?**
   *Answer:* From $E_{\text{cal}} = E^{\circ}_{\mathrm{Hg_2Cl_2/Hg}} - 0.0591 \log [\mathrm{Cl^-}]$, a higher chloride concentration makes the logarithmic term larger, subtracting more from $E^{\circ}$ and lowering the reduction potential.
2. **An unknown metal electrode $\mathrm{M^{2+}/M}$ acts as the anode when coupled with an SCE at $298\text{ K}$, giving $E_{\text{cell}} = 0.6822\text{ V}$. Find $E_{\mathrm{M^{2+}/M}}$.**
   *Answer:* Since $\mathrm{M^{2+}/M}$ is the anode (left) and SCE is the cathode (right), $E_{\mathrm{M^{2+}/M}} = E_{\text{SCE}} - E_{\text{cell}} = 0.2422\text{ V} - 0.6822\text{ V} = -0.440\text{ V}$ vs. SHE.

<!-- page 7 | The glass electrode and pH measurement -->

## The glass electrode and pH measurement

**Glass electrode**

The glass electrode is the primary ion-selective indicator electrode used for potentiometric pH measurement in laboratories and industrial processes. While reference electrodes like the saturated calomel electrode (SCE) maintain a fixed potential, the potential of the glass electrode responds selectively to hydrogen ions ($\mathrm{H^+}$).

### Construction of the glass electrode

A glass electrode consists of a long, sturdy glass stem terminating in a thin-walled, pH-sensitive glass bulb at the bottom. A typical pH-sensitive glass formulation (such as Corning 015 glass) consists of approximately $72\%\ \mathrm{SiO_2}$, $22\%\ \mathrm{Na_2O}$, and $6\%\ \mathrm{CaO}$. This specific composition provides a relatively low melting point and permits ion exchange at its hydrated surfaces.

![Glass electrode cross-section showing the Ag/AgCl electrode, internal HCl solution, and complete thin glass bulb](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/glass-electrode-clean.webp)

The bulb contains an internal solution of fixed hydrogen-ion and chloride-ion concentration, typically $0.1\ \mathrm{M\ HCl}$.

**Internal reference electrode**

An internal reference electrode—usually a silver wire coated with silver chloride ($\mathrm{Ag/AgCl}$)—is immersed inside this internal solution to establish a stable electrical contact with the inner solution.

When immersed in an external test solution, the half-cell representation of the glass electrode is:

$$
\mathrm{Ag(s)} \mid \mathrm{AgCl(s)} \mid \mathrm{HCl}\ (0.1\ \mathrm{M}) \mid \text{glass membrane} \mid \text{test solution } (\mathrm{H^+})
$$

### Working principle and membrane potential

Before a glass electrode can function, its thin bulb must be soaked in water to form a microscopic hydrated gel layer on both its inner and outer surfaces. Within these hydrated layers, sodium ions ($\mathrm{Na^+}$) in the silicate glass lattice exchange with hydrogen ions ($\mathrm{H^+}$) in the adjacent solution:

$$
\mathrm{Na^+_{glass} + H^+_{solution} \rightleftharpoons H^+_{glass} + Na^+_{solution}}
$$

Because the internal solution is fixed at $0.1\ \mathrm{M\ HCl}$, the hydrogen-ion activity on the inner surface of the membrane remains constant. When the bulb is dipped into a test solution of unknown $\mathrm{H^+}$ activity, the extent of ion exchange on the outer surface depends on the external $\mathrm{H^+}$ activity. This difference in $\mathrm{H^+}$ activity across the thin hydrated glass membrane creates a boundary potential.

> **Watch out.** The glass electrode does *not* operate by oxidizing or reducing hydrogen gas ($\mathrm{H^+ + e^- \rightarrow \frac{1}{2}H_2}$), nor do electrons pass through the glass bulb. The potential arises strictly from ion-exchange equilibrium and $\mathrm{H^+}$ activity differences across the hydrated glass membrane.

At $298\ \mathrm{K}$ ($25\ ^\circ\mathrm{C}$), using the Nernst factor $\frac{2.303RT}{F} \approx 0.0591\ \mathrm{V}$ (where $R = 8.314\ \mathrm{J\ mol^{-1}\ K^{-1}}$, $T = 298\ \mathrm{K}$, and $F = 96485\ \mathrm{C\ mol^{-1}}$), the overall potential of the glass electrode ($E_{\text{glass}}$) varies linearly with $\mathrm{pH} = -\log a_{\mathrm{H^+}} \approx -\log[\mathrm{H^+}]$:

$$
\begin{aligned}
E_{\text{glass}} &= K_{\text{glass}} + 0.0591 \log [\mathrm{H^+}] \\
E_{\text{glass}} &= K_{\text{glass}} - 0.0591\,\mathrm{pH}
\end{aligned}
$$

**Asymmetry potential**

An asymmetry potential is a small potential difference caused by slight manufacturing and strain differences between the inner and outer glass surfaces. Here, $K_{\text{glass}}$ (often written $E^\circ_{\text{glass}}$) is an empirical constant combining the internal $\mathrm{Ag/AgCl}$ reference potential, the constant inner boundary potential, and this asymmetry potential.

### Potentiometric pH measurement

A single electrode potential cannot be measured in isolation. To measure the pH of an unknown solution, the glass electrode must be paired with a separate external reference electrode, such as a saturated calomel electrode (SCE), dipped into the same test solution. Modern combination pH probes house both the glass electrode and the external reference electrode in a single body, but they remain two distinct electrochemical half-cells.

![pH measurement setup with a high-impedance meter, calomel reference electrode, and glass electrode immersed in the unknown solution](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/glass-electrode-ph-clean.webp)

The complete electrochemical cell is represented as:

$$
\mathrm{Hg(l)} \mid \mathrm{Hg_2Cl_2(s)} \mid \mathrm{KCl\ (sat.)} \parallel \text{test solution } (\mathrm{H^+}) \mid \text{glass} \mid \mathrm{HCl}\ (0.1\ \mathrm{M}) \mid \mathrm{AgCl(s)} \mid \mathrm{Ag(s)}
$$

Because the glass membrane has an extremely high electrical resistance (typically $10^7$ to $10^9\ \Omega$), an ordinary voltmeter would draw too much current and distort the potential. Therefore, the cell voltage must be measured using a high-impedance electronic voltmeter (a pH meter).

Taking the measured cell voltage with the glass electrode at the positive meter terminal and the external reference electrode at the negative terminal gives:

$$
\begin{aligned}
E_{\text{measured}} &= E_{\text{glass}} - E_{\text{reference}} \\
E_{\text{measured}} &= (K_{\text{glass}} - 0.0591\,\mathrm{pH}) - E_{\text{reference}} \\
E_{\text{measured}} &= K - 0.0591\,\mathrm{pH}
\end{aligned}
$$

where $K = K_{\text{glass}} - E_{\text{reference}}$ is a combined cell constant at $298\ \mathrm{K}$. If the voltmeter leads are reversed ($E_{\text{measured}} = E_{\text{reference}} - E_{\text{glass}}$), the sign of the slope simply changes from $-0.0591\ \mathrm{V/pH}$ to $+0.0591\ \mathrm{V/pH}$.

### Calibration and measurement procedure

> **Watch out.** Never assume a fixed textbook numerical value (such as $0.5\ \mathrm{V}$ or $0.6\ \mathrm{V}$) for $K_{\text{glass}}$ in real measurements. The asymmetry potential drifts with electrode age, surface condition, and temperature, and the empirical slope $m$ often deviates slightly from the ideal Nernstian value of $-59.1\ \mathrm{mV/pH}$.

In practice, the cell response is treated as a linear calibration equation:

$$
E_{\text{measured}} = c + m\,\mathrm{pH}
$$

where $c$ is the intercept (at $\mathrm{pH} = 0$) and $m$ is the empirical slope. Standard operating procedure uses two-point calibration:

1. **Condition and rinse:** Ensure the glass bulb is properly hydrated. Rinse the electrodes with distilled water and gently blot (never rub) with lint-free tissue to avoid static charge or bulb damage.
2. **First buffer calibration:** Immerse the electrodes in a standard buffer of known $\mathrm{pH}_1$ (for example, $\mathrm{pH} = 4.00$) at constant temperature and record the stable voltage $E_1$.
3. **Second buffer calibration:** Rinse and blot the electrodes, immerse them in a second standard buffer $\mathrm{pH}_2$ (for example, $\mathrm{pH} = 9.20$) that brackets the expected sample pH, and record $E_2$. From $( \mathrm{pH}_1, E_1 )$ and $( \mathrm{pH}_2, E_2 )$, the meter determines $c$ and $m$.
4. **Sample measurement:** Rinse and blot again, immerse the electrodes in the unknown test solution at the same temperature, record $E_{\text{test}}$, and compute the unknown pH.

### Worked example: Two-buffer calibration

**Problem:** A glass–reference electrode assembly gives an EMF of $208\ \mathrm{mV}$ in a $\mathrm{pH}\ 4.0$ buffer and $-32\ \mathrm{mV}$ in a $\mathrm{pH}\ 9.2$ buffer. Calculate the empirical slope, the intercept, and the pH of an unknown test solution that gives an EMF of $78\ \mathrm{mV}$.

**Solution:**
Using the linear calibration equation $E = c + m\,\mathrm{pH}$ (with $E$ in $\mathrm{mV}$):

$$
\begin{aligned}
208 &= c + 4.0\,m \quad &\text{(1)} \\
-32 &= c + 9.2\,m \quad &\text{(2)}
\end{aligned}
$$

Subtracting equation (2) from equation (1) eliminates $c$:

$$
\begin{aligned}
208 - (-32) &= (4.0 - 9.2)\,m \\
240 &= -5.2\,m \\
m &= \frac{240}{-5.2} = -46.1538\ \mathrm{mV/pH}
\end{aligned}
$$

Notice that this real electrode exhibits a sub-Nernstian empirical slope ($-46.15\ \mathrm{mV/pH}$ rather than the ideal $-59.1\ \mathrm{mV/pH}$), demonstrating why two-point calibration is essential. Substituting $m$ into equation (1) yields the intercept $c$:

$$
\begin{aligned}
208 &= c + 4.0(-46.1538) \\
c &= 208 + 184.6154 = 392.6154\ \mathrm{mV}
\end{aligned}
$$

For the unknown test solution with $E = 78\ \mathrm{mV}$:

$$
\begin{aligned}
78 &= 392.6154 - 46.1538\,\mathrm{pH} \\
\mathrm{pH} &= \frac{392.6154 - 78}{46.1538} = 6.8167 \approx 6.82
\end{aligned}
$$



### Advantages and limitations

| Advantages | Limitations |
| :--- | :--- |
| **Wide chemical compatibility:** The glass membrane is less affected by redox-active species than a hydrogen electrode; the reference junction and membrane still require sample compatibility checks. | **Alkaline (sodium) error:** At high pH (typically above $\mathrm{pH}\ 10\text{--}12$ for standard soda-lime glass), $\mathrm{H^+}$ activity is very low and the membrane responds to alkali ions like $\mathrm{Na^+}$, yielding artificially low pH readings unless special lithium-glass formulations are used. |
| **Works in complex media:** Can measure pH in coloured or turbid samples, provided the bulb and reference junction remain clean; deposits can slow or distort the response. | **Acid error:** In extremely acidic solutions (below $\mathrm{pH}\ 0\text{--}1$), decreased water activity in the gel layer causes readings to drift slightly high. |
| **Small sample volumes:** Bulb designs can be miniaturized for biological or micro-scale samples. | **Mechanical fragility and hydration:** The thin bulb breaks easily, and dehydration of the gel layer ruins response until re-soaked. High membrane resistance requires a high-impedance meter. |

### Self-check questions

1. **Why does a pH measurement require both an internal $\mathrm{Ag/AgCl}$ electrode and an external reference electrode?**
   *Answer:* The internal $\mathrm{Ag/AgCl}$ electrode only makes contact with the fixed $0.1\ \mathrm{M\ HCl}$ inside the sealed bulb; the external reference electrode (such as an SCE) provides a stable reference potential in contact with the test solution to complete the two-electrode potentiometric circuit.

2. **What causes the alkaline error in a standard Corning 015 glass electrode?**
   *Answer:* At very low $\mathrm{H^+}$ concentration and high $\mathrm{Na^+}$ concentration (high pH), $\mathrm{Na^+}$ ions compete with $\mathrm{H^+}$ for ion-exchange sites in the hydrated glass layer, making the measured pH lower than the true pH.

3. **Why can we not measure the EMF of a glass–calomel cell using a standard moving-coil voltmeter?**
   *Answer:* The glass bulb has a resistance of $10^7\text{--}10^9\ \Omega$; a low-impedance voltmeter draws current, causing a large $IR$ voltage drop across the glass membrane and yielding an erroneous reading.

<!-- page 8 | Batteries and lithium-ion cells -->

## Batteries and lithium-ion cells

**Cell**

A cell is an individual electrochemical unit that generates electricity from spontaneous chemical reactions.

**Battery**

A battery packages one or more electrochemical cells connected together to provide a usable electrical supply.

Commercial electrochemical cells are broadly divided into three categories based on whether their electrode reactions can be reversed and how reactants are supplied:

1. **Primary cells**
2. **Secondary cells (storage or accumulator cells)**
3. **Fuel cells**

**Primary cell**

A primary cell is a non-rechargeable cell in which the electrode reactions cannot be practically reversed by applying an external electrical current. Once the active reactants sealed inside the cell are consumed, the cell is exhausted and must be discarded. Common examples include the zinc–carbon dry cell (Leclanché cell) and alkaline batteries. (Note: While a laboratory Daniell cell is electrochemically reversible when an opposing external potential exceeds its electromotive force, practical commercial primary cells are constructed for single-discharge use only.)

**Secondary cell (storage or accumulator cell)**

A secondary cell is a rechargeable cell in which the cell reactions can be reversed repeatedly by passing an external direct current in the opposite direction. During discharge, a secondary cell operates as a galvanic (voltaic) cell, converting chemical energy into electrical energy. During charging, it operates as an electrolytic cell, converting electrical energy back into stored chemical energy. Examples include the lithium-ion cell, lead–acid storage battery, and nickel–cadmium ($\text{Ni–Cd}$) battery.

**Fuel cell**

A fuel cell is a galvanic device that converts the chemical energy of a continuously supplied fuel and oxidant directly into electrical energy. Unlike primary or secondary batteries, a fuel cell does not store its reactants internally; it generates power indefinitely as long as the external supply of fuel (such as hydrogen) and oxidant (such as oxygen) is maintained.

**Lithium-ion cell**

A lithium-ion ($\text{Li}$-ion) cell is a rechargeable battery technology in which lithium ions shuttle between two host interstitial electrodes. Lithium possesses the lowest atomic mass ($6.94\text{ g mol}^{-1}$) of any metal and a highly negative standard reduction potential ($E^\circ_{\text{Li}^+/\text{Li}} = -3.04\text{ V}$), which together enable high energy density. A typical graphite/cobalt-oxide cell provides a nominal voltage near $3.6\text{–}3.7\text{ V}$, depending on the electrode chemistry and state of charge.

Unlike older lithium-metal batteries, a lithium-ion cell contains no bulk metallic lithium. Instead, lithium ions ($\text{Li}^+$) shuttle back and forth between two host electrodes whose crystal structures have layered spaces that reversibly insert and release ions.

**Intercalation and de-intercalation**

Intercalation is the reversible insertion of guest species into the layered lattice of a host material without significantly disrupting the host crystal structure. De-intercalation is the reverse extraction of guest ions from the host lattice.

### Construction of a lithium-ion cell

The graphite/lithium-cobalt-oxide cell consists of the following components:

* **Negative electrode:** Graphitic carbon ($\text{C}_6$) coated onto a thin copper ($\text{Cu}$) foil current collector. When charged, lithium ions are intercalated between the hexagonal carbon layers to form lithiated graphite ($\text{Li}_x\text{C}_6$, where $x$ denotes the amount of lithium per $\text{C}_6$ formula unit, up to about $1$).
* **Positive electrode:** A layered lithium cobalt oxide ($\text{LiCoO}_2$) host, coated onto an aluminium ($\text{Al}$) foil current collector.
* **Electrolyte:** A non-aqueous solution of a lithium salt—such as lithium hexafluorophosphate ($\text{LiPF}_6$), lithium tetrafluoroborate ($\text{LiBF}_4$), or lithium perchlorate ($\text{LiClO}_4$)—dissolved in an anhydrous organic carbonate solvent mixture (e.g., ethylene carbonate and dimethyl carbonate). Aqueous electrolytes cannot be used because water reacts vigorously with lithiated graphite at the operating voltages of the cell.
* **Separator:** A microporous polymer membrane (typically polyethylene or polypropylene) placed between the positive and negative electrodes. The separator is electronically insulating to prevent internal short circuits, while its pores are filled with liquid electrolyte to allow free migration of $\text{Li}^+$ ions.

> **Watch out.** Do not confuse the physical **polymer separator** with the **solid electrolyte interphase (SEI)**. The separator is a manufactured plastic membrane placed between the two electrodes. The SEI is a microscopic passivating film that forms chemically on the graphite surface during the initial charge cycles; it conducts $\text{Li}^+$ ions while preventing continuous decomposition of the organic electrolyte.

### Working and electrode reactions

In rechargeable battery engineering, the graphite electrode serves as the **negative electrode** (lower potential) and the metal oxide electrode serves as the **positive electrode** (higher potential). However, the terms **anode** (site of oxidation) and **cathode** (site of reduction) swap depending on whether the cell is discharging or charging.

![Lithium-ion cell during charging and discharging, showing electrode polarity and lithium-ion flow in each mode](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/lithium-ion-charge-discharge-clean.webp)

#### Discharging mode (galvanic cell operation)

When the cell powers an external load, spontaneous redox reactions occur:

1. **At the anode (negative electrode, lithiated graphite):** Lithium atoms intercalated within the graphite layers undergo oxidation, releasing electrons to the external circuit and $\text{Li}^+$ ions into the electrolyte:

$$
\mathrm{Li}_x\mathrm{C}_6 \longrightarrow \mathrm{C}_6 + x\mathrm{Li}^+ + x\mathrm{e}^-
$$

2. **At the cathode (positive electrode, partially delithiated cobalt oxide):** Electrons arrive from the external circuit while $\text{Li}^+$ ions migrate through the electrolyte and separator to intercalate into the $\text{Li}_{1-x}\text{CoO}_2$ lattice, reducing $\text{Co}^{4+}$ centres back to $\text{Co}^{3+}$:

$$
\mathrm{Li}_{1-x}\mathrm{CoO}_2 + x\mathrm{Li}^+ + x\mathrm{e}^- \longrightarrow \mathrm{LiCoO}_2
$$

**Overall discharge reaction:**

$$
\mathrm{Li}_x\mathrm{C}_6 + \mathrm{Li}_{1-x}\mathrm{CoO}_2 \longrightarrow \mathrm{C}_6 + \mathrm{LiCoO}_2
$$

#### Charging mode (electrolytic cell operation)

When an external DC power supply applies a voltage higher than the cell emf, electrons are forced in the reverse direction:

1. **At the anode (positive electrode, $\text{LiCoO}_2$):** Oxidation occurs as $\text{Co}^{3+}$ is oxidized to $\text{Co}^{4+}$, releasing $\text{Li}^+$ ions into the electrolyte and electrons to the external charger:

$$
\mathrm{LiCoO}_2 \longrightarrow \mathrm{Li}_{1-x}\mathrm{CoO}_2 + x\mathrm{Li}^+ + x\mathrm{e}^-
$$

2. **At the cathode (negative electrode, graphite):** Lithium ions travel from the positive electrode through the separator to the negative electrode, where they combine with incoming electrons and intercalate between the graphite layers:

$$
\mathrm{C}_6 + x\mathrm{Li}^+ + x\mathrm{e}^- \longrightarrow \mathrm{Li}_x\mathrm{C}_6
$$

**Overall charging reaction:**

$$
\mathrm{LiCoO}_2 + \mathrm{C}_6 \longrightarrow \mathrm{Li}_{1-x}\mathrm{CoO}_2 + \mathrm{Li}_x\mathrm{C}_6
$$

### Discharging mode vs charging mode

| Feature | Discharging Mode | Charging Mode |
| :--- | :--- | :--- |
| **Cell type** | Galvanic (electrochemical) cell | Electrolytic cell |
| **Energy conversion** | Chemical to electrical | Electrical to chemical |
| **Anode (oxidation)** | Negative electrode ($\text{Li}_x\text{C}_6$) | Positive electrode ($\text{LiCoO}_2$) |
| **Cathode (reduction)** | Positive electrode ($\text{Li}_{1-x}\text{CoO}_2$) | Negative electrode ($\text{C}_6$) |
| **Direction of $\text{Li}^+$ ions (internal)** | Negative ($-$) $\rightarrow$ Positive ($+$) | Positive ($+$) $\rightarrow$ Negative ($-$) |
| **Direction of electrons (external)** | Negative ($-$) $\rightarrow$ Positive ($+$) | Positive ($+$) $\rightarrow$ Negative ($-$) |

> **Watch out.** Never say that "lithium metal" moves between the electrodes. Only solvated/desolvated **lithium ions ($\text{Li}^+$)** travel through the internal electrolyte and separator, while **electrons ($\text{e}^-$)** travel through the external circuit.

### Overcharging protection and thermal stability

A manufacturer-rated **100% state of charge** stays within the cell’s designed voltage and composition limits; it does not mean every lithium ion has been removed from the positive electrode. Forcing a cell beyond its upper charge limit can destabilize the oxide and electrolyte, leading to heat generation and thermal runaway. Excessive discharge can also damage the electrodes and current collectors. Battery-management and protection circuits therefore keep charging, discharging, and temperature within the specified operating limits.

### Advantages, limitations, and applications

* **Advantages:** High gravimetric and volumetric energy density; light weight; low self-discharge rate compared to $\text{Ni–Cd}$ cells; no memory effect (cells do not need to be fully discharged before recharging); long cycle life (hundreds to thousands of charge–discharge cycles); absence of lead, mercury, and cadmium in the typical chemistry (other constituents still require responsible recycling); and adaptable form factors (cylindrical, prismatic, or flat pouch cells).
* **Limitations:** Higher manufacturing cost; gradual capacity fade over time due to SEI growth and active material degradation (accelerated by elevated temperatures); sensitivity to overcharging and deep discharging (requiring integrated protection circuitry); and flammability of the organic solvent electrolyte if mechanically punctured or overheated.
* **Applications:** Smartphones, laptop computers, tablets, digital cameras, wearable electronics, medical implants, electric vehicles (EVs), aerospace and military communication gear, and grid-scale renewable energy storage.

### Self-check questions

1. **Why does the graphite electrode act as the anode during discharging but as the cathode during charging?**
   *Answer:* By definition, the anode is the electrode where oxidation occurs and the cathode is where reduction occurs. During discharge, $\text{Li}_x\text{C}_6$ is oxidized at the graphite electrode (making it the anode). During charging, an external current forces $\text{Li}^+$ ions to be reduced and intercalated into $\text{C}_6$ at the graphite electrode (making it the cathode), even though graphite remains the negative terminal in both modes.
2. **Why can water not be used as the electrolyte solvent in a conventional lithium-ion cell?**
   *Answer:* A lithium-ion cell operates at around $3.6\text{–}4.2\text{ V}$, far above the thermodynamic decomposition voltage of water ($1.23\text{ V}$), and lithiated graphite is a strong reducing agent that reacts violently with water to evolve hydrogen gas.
3. **What is the role of the separator in a lithium-ion battery?**
   *Answer:* The microporous polymer separator physically isolates the positive and negative electrodes to prevent electronic short circuits while allowing $\text{Li}^+$ ions to pass freely through the liquid electrolyte held in its pores.

<!-- page 9 | Hydrogen–oxygen fuel cells with acid electrolyte -->

## Hydrogen–oxygen fuel cells with acid electrolyte

**Fuel cell**

A fuel cell is an open galvanic system that converts the chemical energy of a continuously supplied fuel and oxidant directly into electrical energy, unlike conventional batteries that store a fixed quantity of active chemicals inside a sealed casing. A general fuel cell is represented as:

$$
\text{Fuel} \mid \text{Anode } (-) \mid \text{Electrolyte} \mid \text{Cathode } (+) \mid \text{Oxidant}
$$

As long as the external reactants are fed to the electrodes and reaction products are removed, a fuel cell delivers continuous direct current without requiring electrical recharging.

### Comparison with lithium-ion batteries

| Feature | Lithium-Ion Battery | $\mathrm{H_2}$–$\mathrm{O_2}$ Fuel Cell |
| :--- | :--- | :--- |
| **System type** | Closed energy storage device | Open energy conversion device |
| **Reactant supply** | Fixed internal active mass | Continuous external flow of $\mathrm{H_2}$ and $\mathrm{O_2}$ |
| **When depleted** | Must be recharged electrically | Operates continuously while fuel is supplied |

### Acid $\mathrm{H_2}$–$\mathrm{O_2}$ fuel cell construction

The phosphoric acid hydrogen–oxygen fuel cell uses pure hydrogen gas ($\mathrm{H_2}$) as the fuel and oxygen gas ($\mathrm{O_2}$) as the oxidant.

![Acid hydrogen-oxygen fuel cell showing gas inlets, electron and proton flow, water outlet, and electrode reactions](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/hydrogen-oxygen-fuel-cell-clean.webp)

*Figure: Schematic of an acid-electrolyte hydrogen–oxygen fuel cell showing reactant flow, proton migration, and external electron current.*

1. **Electrodes:** The anode (negative electrode) and cathode (positive electrode) are made of porous graphite impregnated with finely divided platinum ($\mathrm{Pt}$) or a platinum-alloy electrocatalyst. The porous structure allows gases, liquid electrolyte, and solid catalyst to meet efficiently.
2. **Electrolyte:** Concentrated phosphoric acid ($\mathrm{H_3PO_4}$) held between the electrodes serves as the proton-conducting medium.
3. **Operating conditions:** Pressurized $\mathrm{H_2}$ and $\mathrm{O_2}$ gases are fed continuously into the anodic and cathodic compartments. The cell operates at $150\text{–}200\ ^\circ\mathrm{C}$ because concentrated phosphoric acid has poor ionic conductivity at room temperature. Cooling plates remove excess reaction heat to maintain steady operating temperatures.

### Working mechanism and reactions

1. **Anode oxidation:** Pressurized hydrogen gas diffuses through the porous graphite anode and is catalytically oxidized on the platinum surface to form protons ($\mathrm{H^+}$) and electrons:

$$
2\mathrm{H_2(g)} \longrightarrow 4\mathrm{H^+(aq)} + 4\mathrm{e^-}
$$

2. **Charge transport:** The liberated electrons travel from the anode ($-$) to the cathode ($+$) through the external circuit, performing useful electrical work. Simultaneously, the $\mathrm{H^+}$ ions migrate internally through the phosphoric acid electrolyte from the anode toward the cathode.
3. **Cathode reduction:** Oxygen gas diffuses through the porous cathode and combines with the arriving protons and electrons to form water:

$$
\mathrm{O_2(g)} + 4\mathrm{H^+(aq)} + 4\mathrm{e^-} \longrightarrow 2\mathrm{H_2O(l)}
$$

4. **Overall cell reaction:** Combining the half-reactions gives:

$$
2\mathrm{H_2(g)} + \mathrm{O_2(g)} \longrightarrow 2\mathrm{H_2O}
$$

Water is removed from the cell to control electrolyte concentration and gas transport. The liquid-water half-reaction is the standard-state convention used for the $298\text{ K}$ potential; water may leave a hot operating cell as vapour.

> **Watch out.** A common error when writing the working mechanism is stating that electrons flow from the anode back to the anode. Electrons always flow from the anode ($-$) to the cathode ($+$) through the external load, while $\mathrm{H^+}$ ions carry positive charge internally through the electrolyte in the same direction.

### Cell potential

Under standard thermodynamic conditions ($298\text{ K}$, $1\text{ bar}$, unit activities), the standard reduction potentials are $E^\circ_{\mathrm{H^+/H_2}} = 0.00\text{ V}$ and $E^\circ_{\mathrm{O_2/H_2O}} = +1.23\text{ V}$, giving a theoretical reversible cell potential of:

$$
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = 1.23\text{ V} - 0.00\text{ V} = 1.23\text{ V}
$$

In a practical phosphoric acid fuel cell operating at $150\text{–}200\ ^\circ\mathrm{C}$ under load, the actual terminal voltage per cell is noticeably lower (typically $0.6\text{–}0.8\text{ V}$) because of non-standard operating conditions, electrode activation barriers, and internal ohmic resistance.

### Advantages, limitations, and applications

**Advantages**

* **High conversion efficiency:** Because chemical energy is converted directly into electricity without combustion, fuel cells can achieve good electrical efficiency; the actual value depends on the design, load, and operating conditions.
* **Clean point-of-use operation:** The only chemical exhaust at the cell is pure water, with minimal noise or mechanical vibration.
* **Continuous power and stable electrolyte:** Electricity is generated continuously while gases are fed, and the $\mathrm{H_3PO_4}$ electrolyte is not consumed by the net reaction.

> **Watch out.** Do not claim that fuel cells generate "no heat" or are unconditionally emission-free. The overall reaction is exothermic and requires cooling plates, and total environmental impact depends on whether the hydrogen fuel was produced using renewable energy or fossil fuels.

**Limitations**

* **High cost:** Platinum catalysts and specialized cell components are expensive.
* **Catalyst degradation and fuel purity:** Reactant gases must be highly pure because impurities such as carbon monoxide ($\mathrm{CO}$) poison the platinum catalyst.
* **Hydrogen storage and corrosive electrolyte:** Storing pressurized or cryogenic $\mathrm{H_2}$ safely is difficult, and hot concentrated $\mathrm{H_3PO_4}$ is highly corrosive.

**Applications**

Phosphoric-acid systems are mainly associated with stationary power and combined heat and power. Hydrogen–oxygen fuel cells more broadly also serve spacecraft, transport, and specialist power systems; these may use different electrolyte technologies.

* **Spacecraft:** Hydrogen–oxygen fuel cells of suitable designs provide electrical power and usable product water; this is not a claim that spacecraft use the phosphoric-acid design described here.
* **Stationary power generation:** Backup and distributed combined-heat-and-power systems.
* **Military and transport:** Quiet power units for submarines, buses, and specialized vehicles.

### Self-Check Questions

1. **Why is a phosphoric acid fuel cell operated at $150\text{–}200\ ^\circ\mathrm{C}$ rather than room temperature?**
   *Answer:* Concentrated phosphoric acid has very low ionic conductivity at room temperature; heating it to $150\text{–}200\ ^\circ\mathrm{C}$ increases proton mobility.
2. **How is the $\mathrm{H^+}$ concentration in the electrolyte kept constant during operation?**
   *Answer:* Every $4\mathrm{H^+}$ consumed by oxygen reduction at the cathode is exactly replenished by $4\mathrm{H^+}$ generated from hydrogen oxidation at the anode.
3. **Why must the hydrogen gas fed to a Pt-catalysed fuel cell be highly pure?**
   *Answer:* Impurities (such as $\mathrm{CO}$ or sulfur compounds) adsorb strongly onto the platinum surface, poisoning the catalyst and halting the electrode reactions.

<!-- page 10 | Conductivity and the digital conductivity meter -->

## Conductivity and the digital conductivity meter

Understanding how aqueous solutions conduct electric current is essential for water quality monitoring, chemical process control, and battery electrolyte design. While metallic wires transport charge through mobile electrons, electrolyte solutions rely on the physical migration of dissolved ions. Because the geometry of a measurement probe affects raw electrical readings, chemists relate measured conductance to an intrinsic material property called conductivity using a calibrated conductivity cell and a digital conductivity meter.

### Electronic versus electrolytic conduction

Materials that permit the passage of electric current are called conductors, whereas materials that block current flow are insulators (non-conductors). Conductors are classified into two categories according to their charge carriers:

1. **Electronic (metallic) conductors** carry electric current through the movement of delocalized electrons without any net transport of matter or chemical change. Examples include metals (such as copper, silver, and aluminium), graphite, and semiconductors. Their conductivity decreases as temperature rises because thermal vibrations scatter moving electrons.
2. **Electrolytic (ionic) conductors** carry electric current through the physical movement of mobile cations and anions toward oppositely charged electrodes. Examples include aqueous solutions of acids, bases, and salts, as well as molten salts. Unlike metals, electrolytic conductors show higher conductivity as temperature rises because solution viscosity falls and ionic mobility increases.

### Fundamental electrical quantities and the cell constant

To avoid confusion with molar concentration ($c$ or $C$) or capacitance, IUPAC recommends the symbol $G$ for electrical conductance and the Greek letter $\kappa$ (kappa) for conductivity.

**Resistance**

The electrical resistance $R$ (in ohms, $\Omega$) of a uniform conductor is directly proportional to the distance $l$ between the electrodes and inversely proportional to the cross-sectional area $A$ of the conducting path:

$$
R = \rho \frac{l}{A}
$$

**Resistivity**

Resistivity $\rho$ (rho, or specific resistance) is defined as the resistance of a conductor of unit length and unit cross-sectional area.

**Conductance**

Conductance ($G$) measures how easily current flows through a sample and is the reciprocal of resistance:

$$
G = \frac{1}{R}
$$

Its SI unit is the siemens ($\mathrm{S}$), which is identical to $\Omega^{-1}$ (historically called the mho).

**Conductivity**

Conductivity ($\kappa$, also called specific conductance) is the reciprocal of resistivity ($\kappa = 1/\rho$). Physically, it represents the conductance of $1\text{ cm}^3$ of electrolyte solution held between two parallel electrodes placed $1\text{ cm}$ apart with an effective area of $1\text{ cm}^2$. Substituting $R = 1/G$ into the resistivity relationship gives:

$$
\kappa = \frac{1}{\rho} = \frac{1}{R} \cdot \frac{l}{A} = G \cdot \frac{l}{A}
$$

**Cell constant**

For a rigid probe, the fixed geometric ratio $l/A$ is the cell constant ($K_{\text{cell}}$):

$$
K_{\text{cell}} = \frac{l}{A}
$$

Thus, conductivity is related to measured conductance and resistance by:

$$
\kappa = G \cdot K_{\text{cell}} = \frac{K_{\text{cell}}}{R}
$$

| Quantity | Symbol | Defining Equation | Common Lab Unit | Coherent SI Unit |
| :--- | :---: | :---: | :---: | :---: |
| Resistance | $R$ | $R = V/I = \rho(l/A)$ | $\Omega$ | $\Omega$ |
| Conductance | $G$ | $G = 1/R$ | $\mathrm{S}$ ($\Omega^{-1}$), $\mathrm{mS}$, $\mu\mathrm{S}$ | $\mathrm{S}$ |
| Resistivity (specific resistance) | $\rho$ | $\rho = R(A/l)$ | $\Omega\text{ cm}$ | $\Omega\text{ m}$ |
| Conductivity (specific conductance) | $\kappa$ | $\kappa = 1/\rho = G(l/A)$ | $\mathrm{S\text{ }cm^{-1}}$, $\mathrm{mS\text{ }cm^{-1}}$, $\mu\mathrm{S\text{ }cm^{-1}}$ | $\mathrm{S\text{ }m^{-1}}$ ($1\text{ S m}^{-1} = 10^{-2}\text{ S cm}^{-1}$) |
| Cell constant | $K_{\text{cell}}$ | $K_{\text{cell}} = l/A = \kappa/G = \kappa R$ | $\mathrm{cm^{-1}}$ | $\mathrm{m^{-1}}$ ($1\text{ cm}^{-1} = 100\text{ m}^{-1}$) |

> **Watch out.** Do not use the symbol $C$ for both molar concentration and electrical conductance in the same calculation, and never equate conductance ($G$, in $\mathrm{S}$) with conductivity ($\kappa$, in $\mathrm{S\text{ }cm^{-1}}$) unless the cell constant happens to equal exactly $1\text{ cm}^{-1}$.

### Factors affecting electrolytic conductivity

The conductivity of an electrolyte solution increases with the concentration of free ions, because more charge carriers are available per unit volume. However, conductivity also depends on the charge and **ionic mobility** of those ions (governed by ion size, degree of hydration, and solvent viscosity) and on **temperature**. Because ion mobility increases significantly with temperature, conductivity measurements must always be reported at a specified reference temperature, typically $298\text{ K}$ ($25\text{ }^\circ\text{C}$).

### Construction and calibration of the conductivity cell

![Diagram of a conductivity cell showing a glass tube with two platinum electrode plates connected to platinum wires](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/page-022-image-1.webp)

*Figure: A laboratory conductivity cell containing two parallel platinum plates coated with platinum black and fixed at a constant separation inside a glass body.*

A laboratory conductivity cell consists of two parallel platinum plates welded to platinum wires that are sealed through rigid glass tubes. The glass housing holds the plates at a fixed separation so that the cell constant $l/A$ remains unchanged during handling.

Two practical design features prevent measurement errors:

- **Platinum black coating:** The platinum plates are electrochemically coated with finely divided platinum (platinum black). This porous layer greatly increases the effective surface area and catalyses rapid charge transfer, minimizing polarization effects.
- **Alternating current (AC) source:** If direct current (DC) were passed through the solution, electrolysis would occur at the electrodes, changing the local ion concentration and creating a back-EMF (concentration polarization). Digital conductivity meters apply a high-frequency AC voltage (typically $1\text{ kHz}$) so that net electrolysis is prevented.

Although $l$ and $A$ appear simple, measuring the true effective electric field area between small coated plates is imprecise. Instead, $K_{\text{cell}}$ is determined experimentally by calibrating the cell with a standard potassium chloride ($\mathrm{KCl}$) solution of accurately known conductivity at a controlled temperature. For example, at $298\text{ K}$, $0.1\text{ M KCl}$ has a standard conductivity of $\kappa = 0.01288\text{ S cm}^{-1}$ ($12.88\text{ mS cm}^{-1}$). As temperature increases from $27\text{ }^\circ\text{C}$ to $31\text{ }^\circ\text{C}$, the conductivity of $0.1\text{ M KCl}$ rises steadily from $13.35\text{ mS cm}^{-1}$ to $14.34\text{ mS cm}^{-1}$. By measuring the conductance $G_{\text{KCl}}$ of the standard solution in the cell, we find:

$$
K_{\text{cell}} = \frac{\kappa_{\text{KCl}}}{G_{\text{KCl}}} = \kappa_{\text{KCl}} \cdot R_{\text{KCl}}
$$

### Measurement procedure using a digital conductivity meter

1. **Calibration and temperature setting:** Connect the conductivity cell to the digital conductivity meter, set the temperature compensation control to match the solution temperature (such as $298\text{ K}$), and calibrate the cell constant using standard $0.1\text{ M KCl}$ solution.
2. **Rinsing and immersion:** Rinse the cell thoroughly with conductivity water (deionized water) and then with a small portion of the sample solution. Immerse the cell into the sample solution in a beaker so that the platinum plates and vent holes are completely submerged, ensuring no air bubbles are trapped between the plates.
3. **Reading and calculation:** Select the appropriate measurement range. Basic digital meters display the raw conductance $G$ (in $\mathrm{mS}$ or $\mu\mathrm{S}$), from which conductivity is computed via $\kappa = G \cdot K_{\text{cell}}$. Modern microprocessor-based meters store the calibrated cell constant and display the conductivity $\kappa$ (in $\mathrm{S\text{ }cm^{-1}}$, $\mathrm{mS\text{ }cm^{-1}}$, or $\mu\mathrm{S\text{ }cm^{-1}}$) directly.

> **Watch out.** Always convert millisiemens ($1\text{ mS} = 10^{-3}\text{ S}$) and microsiemens ($1\text{ }\mu\text{S} = 10^{-6}\text{ S}$) to siemens before combining conductance with a cell constant in $\mathrm{cm^{-1}}$ to obtain conductivity in $\mathrm{S\text{ }cm^{-1}}$.

### Worked examples

#### Example 1: Calibration with KCl and conductivity of a water sample
**Problem:** Calculate the conductivity of a water sample at $298\text{ K}$ that gives a conductance of $560\text{ }\mu\text{S}$ in a conductivity cell. A standard solution of $0.1\text{ M KCl}$ shows a conductance of $12.34\text{ mS}$ in the same cell at $298\text{ K}$. The conductivity of $0.1\text{ M KCl}$ at $298\text{ K}$ is $0.01288\text{ S cm}^{-1}$.

**Solution:**
First, convert the measured conductances to siemens:

$$
G_{\text{KCl}} = 12.34\text{ mS} = 12.34 \times 10^{-3}\text{ S}, \qquad G_{\text{water}} = 560\text{ }\mu\text{S} = 560 \times 10^{-6}\text{ S}
$$

Calculate the cell constant using the $0.1\text{ M KCl}$ calibration data:

$$
K_{\text{cell}} = \frac{\kappa_{\text{KCl}}}{G_{\text{KCl}}} = \frac{0.01288\text{ S cm}^{-1}}{12.34 \times 10^{-3}\text{ S}} = 1.04376\text{ cm}^{-1}
$$

Now calculate the conductivity of the water sample:

$$
\begin{aligned}
\kappa_{\text{water}} &= G_{\text{water}} \times K_{\text{cell}} \\
&= (560 \times 10^{-6}\text{ S}) \times 1.04376\text{ cm}^{-1} \\
&= 5.845 \times 10^{-4}\text{ S cm}^{-1} \; (584.5\text{ }\mu\text{S cm}^{-1})
\end{aligned}
$$



#### Example 2: Cell constant from resistance and conductivity
**Problem:** The conductivity of a $0.3\text{ N KCl}$ solution at $27\text{ }^\circ\text{C}$ is $0.028\text{ S cm}^{-1}$. The resistance of the conductivity cell containing this solution is $300\text{ }\Omega$. Determine the cell constant.

**Solution:**
Given $\kappa = 0.028\text{ S cm}^{-1}$ and $R = 300\text{ }\Omega$, use the relation $\kappa = K_{\text{cell}} / R$:

$$
K_{\text{cell}} = \kappa \times R = 0.028\text{ S cm}^{-1} \times 300\text{ }\Omega = 8.4\text{ cm}^{-1}
$$



#### Example 3: Cell constant and conductivity from electrode geometry
**Problem:** A conductivity cell has two parallel plates, each of area $1.5\text{ cm}^2$, kept $9.8\text{ cm}$ apart. When filled with an electrolyte solution, it exhibits a resistance of $1500\text{ }\Omega$. Find the cell constant and the conductivity of the solution.

**Solution:**
Given $l = 9.8\text{ cm}$, $A = 1.5\text{ cm}^2$, and $R = 1500\text{ }\Omega$:

$$
K_{\text{cell}} = \frac{l}{A} = \frac{9.8\text{ cm}}{1.5\text{ cm}^2} = 6.533\text{ cm}^{-1}
$$

$$
\kappa = \frac{K_{\text{cell}}}{R} = \frac{6.533\text{ cm}^{-1}}{1500\text{ }\Omega} = 4.356 \times 10^{-3}\text{ S cm}^{-1}
$$



### Self-check questions

1. **Why is an alternating current (AC) source used instead of direct current (DC) when measuring the conductance of an electrolyte solution?**
   *Answer:* DC causes electrolysis and changes the ion concentration near the electrode surfaces (polarization), altering the measured resistance. High-frequency AC prevents net electrolysis and polarization.
2. **Why is the cell constant determined using a standard $\mathrm{KCl}$ solution rather than measured with a ruler?**
   *Answer:* The effective electrical area $A$ of porous platinum-black electrodes and fringe electric fields cannot be measured accurately from external dimensions, whereas calibrating with a $\mathrm{KCl}$ solution of known conductivity yields the exact effective ratio $l/A$.
3. **How does increasing the temperature affect the conductivity of (a) a copper wire and (b) an aqueous $\mathrm{KCl}$ solution?**
   *Answer:* (a) The conductivity of copper decreases because lattice vibrations scatter electrons. (b) The conductivity of aqueous $\mathrm{KCl}$ increases because lower water viscosity increases ionic mobility.

<!-- page 11 | Corrosion: fundamentals and hydrogen evolution -->

## Corrosion: fundamentals and hydrogen evolution

**Corrosion**

Corrosion is the gradual deterioration or destruction of a metal through chemical or electrochemical reactions with its surrounding environment. In nature, most metals occur as thermodynamically stable mineral compounds—such as oxides, sulfides, carbonates, and sulfates. Refining ores into pure engineering metals requires significant energy input, leaving the extracted metal in a higher-energy, metastable state. Consequently, refined metals spontaneously tend to revert to their stable combined states when exposed to air, moisture, or electrolytes. Common examples include the rusting of iron, the tarnishing of silver in sulfide-containing air, and the green patina formed on copper and bronze.

### Dry corrosion vs wet corrosion

Depending on the surrounding environment, corrosion processes are classified into two broad categories:

| Feature | Dry (Chemical) Corrosion | Wet (Electrochemical) Corrosion |
| :--- | :--- | :--- |
| **Environment** | Anhydrous gases or non-electrolytic liquids | Aqueous solutions, moisture films, or electrolytes |
| **Mechanism** | Direct chemical attack on the metal surface | Separate anodic and cathodic half-cell reactions |
| **Charge transport** | Direct electron transfer at the gas–metal interface | Electrons flow through metal; ions migrate through electrolyte |
| **Typical attacking agents** | $\mathrm{O_2}$, halogens, $\mathrm{H_2S}$, $\mathrm{SO_2}$, or liquid metals (e.g., $\mathrm{Hg}$ on $\mathrm{Au}$) | Acids, alkalis, brines, and oxygenated water |

### Electrochemical theory of wet corrosion

Wet corrosion is far more common in engineering service and can occur when a metal contacts a conducting liquid (electrolyte), or when two dissimilar metals are partially or fully immersed in an electrolyte. Local variations in composition, impurities, or mechanical strains (such as dents and scratches) create microscopic or macroscopic galvanic cells across the metal surface:

1. **Anodic oxidation:** At the anodic areas, the metal undergoes oxidation, releasing metal cations into the solution and leaving electrons behind in the metal lattice:

$$
\mathrm{M(s) \longrightarrow M^{n+}(aq) + n\,e^-}
$$

Because metal atoms are converted into soluble ions or solid products here, **electrochemical metal dissolution occurs at the anode**.

2. **Internal electronic path:** The released electrons travel internally through the metallic structure itself from the anodic region to the cathodic region.

3. **Cathodic reduction:** At the cathodic areas, electrons are consumed by reducible species present in the adjacent environment (such as $\mathrm{H^+}$, $\mathrm{H_2O}$, or dissolved $\mathrm{O_2}$). The cathode metal itself does not dissolve.

4. **External ionic path and product precipitation:** Metal cations ($\mathrm{M^{n+}}$) diffuse away from the anode while non-metallic anions (such as $\mathrm{OH^-}$) migrate through the electrolyte from the cathode. They meet and precipitate corrosion products between the anodic and cathodic sites.

> **Watch out.** Do not confuse the electronic path with the ionic path. Free electrons travel *only* through the solid metal from anode to cathode; current through the liquid electrolyte is carried entirely by migrating ions.

### Hydrogen evolution corrosion in acidic media

Hydrogen evolution corrosion typically occurs when an active metal is exposed to a deaerated (oxygen-deficient) acidic solution, such as industrial pickling baths or acid rain runoff.

Consider metallic iron immersed in dilute hydrochloric acid ($\mathrm{HCl}$) under standard conditions ($a_{\mathrm{H^+}} = 1$, $\mathrm{pH} = 0$, $P_{\mathrm{H_2}} = 1\text{ bar}$ at $298\text{ K}$). Here $E^\circ$ denotes the standard reduction potential, $R = 8.314\text{ J mol}^{-1}\text{ K}^{-1}$, and $F = 96485\text{ C mol}^{-1}$.

- **Anode (oxidation):**

$$
\mathrm{Fe(s) \longrightarrow Fe^{2+}(aq) + 2\,e^-} \quad (E^\circ_{\mathrm{Fe^{2+}/Fe}} = -0.44\text{ V})
$$

- **Cathode (reduction):**

$$
\mathrm{2\,H^+(aq) + 2\,e^- \longrightarrow H_2(g)} \quad (E^\circ_{\mathrm{H^+/H_2}} = 0.00\text{ V})
$$

- **Overall ionic reaction:**

$$
\mathrm{Fe(s) + 2\,H^+(aq) \longrightarrow Fe^{2+}(aq) + H_2(g)}
$$

In dilute $\mathrm{HCl}$, this molecularly corresponds to:

$$
\mathrm{Fe(s) + 2\,HCl(aq) \longrightarrow FeCl_2(aq) + H_2(g)}
$$

The standard cell potential driving this corrosion is:

$$
E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = 0.00 - (-0.44) = +0.44\text{ V}
$$

> **Watch out.** Always write solid $\mathrm{Fe}$ as the reactant in the overall acid corrosion equation, never $\mathrm{Fe^{2+}}$. Furthermore, distinguish the two iron couples carefully: $E^\circ_{\mathrm{Fe^{2+}/Fe}} = -0.44\text{ V}$, whereas $E^\circ_{\mathrm{Fe^{3+}/Fe}} = -0.04\text{ V}$. Do not select the corrosion product just by comparing these two EMFs: the two reactions transfer different numbers of electrons. In dilute, deaerated, non-oxidizing acid, iron normally dissolves as $\mathrm{Fe^{2+}}$. Any $\mathrm{Fe^{3+}}$ contacting excess iron is reduced by $\mathrm{Fe}$ to $\mathrm{Fe^{2+}}$; oxidizing agents such as dissolved oxygen can alter the product chemistry.

In general, metals with negative standard reduction potentials—such as $\mathrm{Mg}$ ($-2.36\text{ V}$), $\mathrm{Al}$ ($-1.66\text{ V}$), $\mathrm{Zn}$ ($-0.76\text{ V}$), and $\mathrm{Fe}$ ($-0.44\text{ V}$)—can displace $\mathrm{H^+}$ from acidic solutions, whereas noble metals with positive reduction potentials like $\mathrm{Cu}$ ($+0.34\text{ V}$) and $\mathrm{Ag}$ ($+0.80\text{ V}$) cannot corrode via hydrogen evolution in non-oxidizing acids.

### Hydrogen evolution corrosion in deaerated alkaline media

In neutral or alkaline environments, the concentration of $\mathrm{H^+}$ is extremely low, so water molecules directly undergo reduction at the cathode:

$$
\mathrm{2\,H_2O(l) + 2\,e^- \longrightarrow H_2(g) + 2\,OH^-(aq)}
$$

Using the Nernst equation at $298\text{ K}$ with $P_{\mathrm{H_2}} = 1\text{ bar}$, the conditional reduction potential of the hydrogen electrode depends on $\mathrm{pH}$:

$$
E_{\mathrm{H^+/H_2}} = E^\circ_{\mathrm{H^+/H_2}} - 0.0591\,\mathrm{pH} = -0.0591\,\mathrm{pH}\text{ V}
$$

At $\mathrm{pH} = 14$ ($a_{\mathrm{OH^-}} = 1$), this potential shifts to:

$$
E_{\mathrm{H_2O/H_2,\,OH^-}} = -0.0591 \times 14 = -0.8274\text{ V} \approx -0.828\text{ V}
$$

In standard textbook thermodynamic estimates, we compare this $\mathrm{pH}\,14$ hydrogen potential ($-0.828\text{ V}$) against the standard reduction potentials ($E^\circ$) of the metals:

- **Iron ($E^\circ_{\mathrm{Fe^{2+}/Fe}} = -0.44\text{ V}$):** Because $-0.44\text{ V}$ is more positive than $-0.828\text{ V}$, the calculated cell potential is negative ($E_{\text{cell}} = -0.828 - (-0.44) = -0.388\text{ V} < 0$). Therefore, iron is **not thermodynamically favoured** to corrode by hydrogen evolution in deaerated alkaline media. Moreover, in alkaline environments such as uncontaminated concrete, steel forms a protective passive oxide film. However, iron can still corrode if dissolved oxygen is present (oxygen absorption corrosion) or if chloride contamination breaks down passivity.
- **Aluminium ($E^\circ_{\mathrm{Al^{3+}/Al}} = -1.66\text{ V}$):** Because $-1.66\text{ V} < -0.828\text{ V}$, the cell potential is positive ($E_{\text{cell}} = -0.828 - (-1.66) = +0.832\text{ V}$). The standard $\mathrm{Al^{3+}/Al}$ comparison is only illustrative in strong alkali, where dissolved aluminium is present as aluminate rather than free $\mathrm{Al^{3+}}$. While aluminium forms a protective amphoteric oxide film ($\mathrm{Al_2O_3}$) in near-neutral water, strong alkalis dissolve this film as soluble aluminate ions, allowing rapid hydrogen evolution:
  - **Anode in strong alkali:** $\mathrm{Al(s) + 4OH^-(aq) \longrightarrow [Al(OH)_4]^-(aq) + 3e^-}$
  - **Cathode:** $\mathrm{2\,H_2O(l) + 2\,e^- \longrightarrow H_2(g) + 2\,OH^-(aq)}$
- **Magnesium ($E^\circ_{\mathrm{Mg^{2+}/Mg}} = -2.36\text{ V}$):** Because $-2.36\text{ V}$ is much more negative than the hydrogen potential at both $\mathrm{pH}\,0$ ($0.00\text{ V}$) and $\mathrm{pH}\,14$ ($-0.828\text{ V}$), magnesium is thermodynamically capable of hydrogen evolution in both acidic and alkaline media (though in strong alkali, surface $\mathrm{Mg(OH)_2}$ films can kinetically slow the attack).

Note that comparing $E^\circ_{\text{metal}}$ ($1\text{ M}$ metal ions) with a $\mathrm{pH}$-dependent hydrogen potential is a simplified baseline estimate; actual corrosion rates also depend on metal ion activities, precipitation of hydroxides, surface passivation, and reaction kinetics (overpotential).

### Self-Check Questions

1. **Why does iron form $\mathrm{FeCl_2}$ rather than $\mathrm{FeCl_3}$ when dipped in deaerated dilute $\mathrm{HCl}$?**
   *Answer:* Iron normally forms $\mathrm{Fe^{2+}}$ in deaerated, non-oxidizing dilute acid. Ferric ions contacting excess iron are reduced by the metal: $\mathrm{Fe+2Fe^{3+} \rightarrow 3Fe^{2+}}$. Comparing the EMFs of routes with different electron counts alone does not establish the preferred product.

2. **Calculate the reduction potential of the hydrogen electrode at $\mathrm{pH} = 10$ and $298\text{ K}$ ($P_{\mathrm{H_2}} = 1\text{ bar}$).**
   *Answer:* $E = -0.0591 \times \mathrm{pH} = -0.0591 \times 10 = -0.591\text{ V}$.

3. **Why do steel reinforcing rods embedded in uncontaminated concrete resist corrosion?**
   *Answer:* Cement pore water is highly alkaline, where hydrogen evolution on iron is thermodynamically unfavoured and a thin, adherent passive oxide layer protects the steel surface.

<!-- page 12 | Oxygen absorption, rusting and localized corrosion -->

## Oxygen absorption, rusting and localized corrosion

**Oxygen absorption corrosion**

Oxygen absorption corrosion is the primary electrochemical mechanism responsible for the atmospheric rusting of iron and steel, as well as severe localized failures such as pitting, occurring when metals are exposed to aerated aqueous solutions where dissolved oxygen acts as a powerful electron acceptor.

### Electrode reactions in oxygen absorption corrosion

In electrochemical corrosion, the metal oxidizes at the anodic region while dissolved oxygen is reduced at the cathodic region. Let $E^\circ$ denote the standard reduction potential at $298\text{ K}$ and $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$ denote the standard cell potential driving the reaction.

At the anode, iron undergoes oxidation:

$$
2\mathrm{Fe(s) \rightarrow 2Fe^{2+}(aq) + 4e^-} \quad (E^\circ_{\mathrm{Fe^{2+}/Fe}} = -0.44\text{ V})
$$

The cathodic reduction of dissolved oxygen depends on the pH of the electrolyte:

1. **In acidic medium:**

$$
\mathrm{O_2(g) + 4H^+(aq) + 4e^- \rightarrow 2H_2O(l)} \quad (E^\circ = +1.23\text{ V})
$$

This gives a large driving potential of $E^\circ_{\text{cell}} = 1.23 - (-0.44) = +1.67\text{ V}$.

2. **In neutral or alkaline medium:**

$$
\mathrm{O_2(g) + 2H_2O(l) + 4e^- \rightarrow 4OH^-(aq)} \quad (E^\circ = +0.40\text{ V}\text{ at pH } 14)
$$

Because the oxygen reduction potential varies with pH as $E = 1.23 - 0.0591\,\text{pH}$ at $298\text{ K}$ (for $P_{\mathrm{O_2}} = 1\text{ bar}$), at $\text{pH } 14$ the cathodic potential is $+0.40\text{ V}$, yielding $E_{\text{cell}} = 0.40 - (-0.44) = +0.84\text{ V}$.

> **Watch out.** Make sure the cathodic reaction in neutral or alkaline media is balanced with four electrons ($\mathrm{O_2 + 2H_2O + 4e^- \rightarrow 4OH^-}$), not two. Every mole of $\mathrm{O_2}$ reduced requires four moles of electrons.

### Mechanism of rusting of iron

Once $\mathrm{Fe^{2+}}$ ions form at the anode and $\mathrm{OH^-}$ ions form at the cathode (or are present in neutral/alkaline moisture), they diffuse toward each other and precipitate first as iron(II) hydroxide:

$$
\mathrm{Fe^{2+}(aq) + 2OH^-(aq) \rightarrow Fe(OH)_2(s)}
$$

In the presence of sufficient dissolved oxygen and moisture, $\mathrm{Fe(OH)_2}$ is rapidly oxidized to iron(III) hydroxide:

$$
\mathrm{4Fe(OH)_2(s) + O_2(g) + 2H_2O(l) \rightarrow 4Fe(OH)_3(s)}
$$

**Rust**

Rust is a yellow-brown or reddish-brown mixture of hydrated iron oxides and oxyhydroxides, often represented approximately as $\mathrm{Fe_2O_3 \cdot xH_2O}$, produced by the further oxidation and dehydration of iron hydroxides. If the supply of oxygen is severely restricted, partial oxidation yields black anhydrous magnetite ($\mathrm{Fe_3O_4}$).

Crucially, because $\mathrm{Fe^{2+}}$ and $\mathrm{OH^-}$ ions diffuse away from the metal surface before precipitating, rust forms as a porous, non-adherent deposit. It does not seal the underlying iron from electrolytes or oxygen, so corrosion continues unabated.

### Differential aeration and pitting corrosion

**Uniform corrosion**

Uniform corrosion is the general degradation of an entire exposed metal surface at a roughly equal rate across its whole area.

**Pitting corrosion**

Pitting corrosion is a highly localized form of attack that creates deep cavities or holes while leaving the bulk surface largely intact.

**Differential aeration**

Differential aeration (oxygen concentration cell corrosion) is an electrochemical corrosion process driven by unequal access of oxygen to different regions of a metal surface, illustrated by a water drop resting on an iron surface.

![Diagram of differential aeration and pitting corrosion under a water drop on an iron surface](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/page-024-image-1-source.webp)

*Figure: Differential aeration under a water drop on iron. The oxygen-depleted center acts as a small anode where pit growth occurs, while the oxygen-rich outer rim acts as a large cathode.*

1. **Oxygen gradient:** Oxygen from the air diffuses easily through the thin outer rim of the water drop, making the periphery oxygen-rich. The center of the drop, covered by a thicker layer of liquid and accumulated rust, becomes oxygen-poor.
2. **Anode and cathode separation:** Because oxygen reduction requires $\mathrm{O_2}$, the oxygen-rich outer rim becomes the **cathode** ($\mathrm{O_2 + 2H_2O + 4e^- \rightarrow 4OH^-}$). The oxygen-deprived center becomes the **anode** ($\mathrm{Fe \rightarrow Fe^{2+} + 2e^-}$).
3. **Autocatalytic pit growth:** As iron dissolves at the small central anode, a pit begins to form. A ring of rust ($\mathrm{Fe_2O_3 \cdot xH_2O}$) precipitates around the pit where outward-diffusing $\mathrm{Fe^{2+}}$ meets inward-diffusing $\mathrm{OH^-}$. This rust crust further blocks oxygen from reaching the bottom of the cavity, intensifying the differential aeration cell and accelerating deep pit penetration.

| Feature | Uniform corrosion | Pitting corrosion |
| :--- | :--- | :--- |
| **Surface pattern** | Even metal loss across the whole surface | Deep, localized cavities on an otherwise intact surface |
| **Anode/cathode sites** | Microscopic, constantly shifting | Fixed: small recessed anode, large surrounding cathode |
| **Engineering risk** | Predictable thinning; easy to inspect | Sudden perforation and structural failure with little total mass loss |

### Factors influencing oxygen corrosion and passivity

- **Humidity and dissolved salts:** Above a critical relative humidity, a thin moisture film condenses on metal surfaces. Dissolved salts (such as marine $\mathrm{NaCl}$) increase the electrical conductivity of the water film and destabilize surface oxide films, sharply accelerating corrosion.
- **Cathode-to-anode area ratio:** A large cathodic area coupled to a tiny anodic area concentrates the entire corrosion current onto a small spot, causing rapid localized penetration.
- **Alkalinity and passivity in concrete:** Uncontaminated concrete provides a highly alkaline pore solution ($\text{pH } 12.5\text{--}13.5$). Under these conditions, steel reinforcement forms a thin, dense, tightly adherent **passive film** of iron oxides/hydroxides that reduces the corrosion rate to negligible levels.

> **Watch out.** Do not assume that iron can *never* corrode in alkaline environments or that $\mathrm{Fe^{3+}}$ species cannot form at high pH. In real reinforced concrete, if chloride ions ($\mathrm{Cl^-}$ from de-icing salts or seawater) penetrate to the steel, or if atmospheric $\mathrm{CO_2}$ neutralizes the concrete (carbonation), the passive film breaks down locally and severe pitting and rusting occur.

### Cause-and-effect quick recall

- **Uneven oxygen access under dirt, scale, or water drops** $\rightarrow$ Oxygen-starved zone becomes anodic $\rightarrow$ Localized pitting under the deposit.
- **Porous, non-adherent $\mathrm{Fe_2O_3 \cdot xH_2O}$ rust layer** $\rightarrow$ Electrolyte and $\mathrm{O_2}$ continue reaching the metal $\rightarrow$ Continuous corrosion without self-protection.
- **Chloride ingress or carbonation in concrete** $\rightarrow$ Breakdown of alkaline passive film on steel rebar $\rightarrow$ Expansive rusting and concrete cracking.

### Self-check questions

1. **Why is the center under a water drop on iron anodic while the outer edge is cathodic?**
   *Answer:* Oxygen diffuses rapidly to the thin outer edge (supporting cathodic $\mathrm{O_2}$ reduction), whereas the deeper center has restricted oxygen access and becomes the anode where $\mathrm{Fe}$ oxidizes.

2. **Why does rust not protect iron from further corrosion?**
   *Answer:* Hydrated iron(III) oxide ($\mathrm{Fe_2O_3 \cdot xH_2O}$) precipitates away from the dissolving metal surface as a flaky, porous solid that cannot block water and oxygen transport.

3. **Why does steel reinforcement remain protected in fresh concrete, and what causes this protection to fail?**
   *Answer:* The high alkalinity of fresh concrete forms a stable, protective passive oxide film on the steel; this film fails if chlorides penetrate the concrete or if carbonation lowers the pH.

<!-- page 13 | The galvanic series and corrosion prediction -->

## The galvanic series and corrosion prediction

While the standard electrochemical series ranks redox couples under defined standard-state conditions, it often fails to predict how real engineering materials—especially commercial alloys—behave in natural environments.

**Galvanic series**

The galvanic series is an experimental ranking of metals and alloys based on their actual corrosion potentials in a specific, practical electrolyte.

### Construction and the role of passivity

The galvanic series is constructed by immersing commercial metals and alloys in a chosen service environment—most commonly unpolluted seawater—and measuring their steady-state corrosion potentials ($E_{\text{corr}}$) against a practical reference electrode such as the saturated calomel electrode (SCE). Materials are arranged from the most active (anodic, having more negative potentials and high corrosion tendency) to the most noble (cathodic, having more positive potentials and high corrosion resistance).

The following groups illustrate the broad trend in many seawater charts; they are **not an exact universal ranking**. For a design decision, use a measured series for the specified alloy, surface state and service environment.

| Relative position | Illustrative materials |
| --- | --- |
| More active / anodic | Magnesium alloys, zinc, activated aluminium alloys |
| Intermediate | Carbon steel, cast iron, lead and tin alloys |
| More noble / cathodic | Copper alloys, nickel alloys and passive stainless steels; passive titanium and noble metals often lie toward this end |

Unlike the electrochemical series, the order in a galvanic series is not universal; it changes if the environment (such as temperature, aeration, or chloride concentration) changes.

**Passivity**

Passivity is the loss of chemical reactivity exhibited by certain metals and alloys under specific environmental conditions, dramatically shifting their effective potential.

In the standard electrochemical series, aluminium ($E^\circ = -1.66\text{ V}$) is more active than zinc ($E^\circ = -0.76\text{ V}$), while some metals that oxidize readily in principle can develop highly protective passive films. However, in natural seawater, aluminium and titanium rapidly form dense, adherent, self-healing protective oxide films ($\mathrm{Al_2O_3}$ and $\mathrm{TiO_2}$). This surface passivation shifts their effective potentials to much more positive (noble) values, so their measured behaviour can differ greatly from a ranking based on standard aqueous reduction potentials. Similarly, stainless steel exhibits two distinct positions: a noble position when its chromium oxide passive film is intact, and a much more active position (closer to mild steel) if that film breaks down in stagnant or oxygen-starved crevices.

> **Watch out.** Do not confuse the standard electrode potential ($E^\circ$) with the corrosion potential measured in a galvanic series. The electrochemical series measures reversible equilibrium potentials of redox couples at unit activity (often approximated with $1\text{ M}$ solutions) against the standard hydrogen electrode (SHE), whereas the galvanic series measures non-equilibrium corrosion potentials of real metals and alloys in a shared environment like seawater against a reference electrode such as the SCE.

### Comparison of electrochemical and galvanic series

| Feature | Electrochemical series | Galvanic series |
| :--- | :--- | :--- |
| **Materials included** | Defined redox couples, including metal/ion, gas/ion and ion/ion couples | Pure metals and commercial alloys (e.g., brass, stainless steel) |
| **Electrolyte condition** | Unit activities, standard gas pressure where applicable, and a stated temperature (commonly $298\text{ K}$) | A specific real-world environment (commonly unpolluted seawater) |
| **Reference electrode** | Standard Hydrogen Electrode (SHE) | Saturated Calomel Electrode (SCE) or $\mathrm{Ag/AgCl}$ |
| **Position of metals** | Fixed at standard state ($E^\circ$) | Variable; shifts with environment and surface passivation |
| **Primary application** | Predicts thermodynamic displacement reactions and standard cell EMF | Predicts practical bimetallic corrosion tendencies in service |

### Predicting galvanic corrosion and design applications

**Galvanic couple**

A galvanic couple forms when two dissimilar metals are placed in electrical contact and bridged by an electrolyte. The metal higher in the galvanic series (more active) acts as the anode and undergoes accelerated oxidation, while the metal lower in the series (more noble) acts as the cathode and is protected.

> **Watch out.** Students sometimes mistakenly write that low reduction potential metals undergo reduction faster. A more negative potential indicates a stronger thermodynamic tendency to act anodically in the specified comparison. It does **not** by itself determine the corrosion rate: kinetics, area ratio and surface films also matter.

The severity of galvanic corrosion depends on two main factors: the potential difference between the coupled metals in that environment, and the **cathode-to-anode area ratio**. A small anode coupled to a large cathode (such as steel rivets fastening copper sheets) is extremely dangerous because the large cathodic current demand is concentrated onto a tiny anodic area, causing rapid penetration and failure.

Engineers apply the galvanic series in four primary ways:

1. **Material selection:** Choosing metals that are close together in the galvanic series (e.g., brass fittings on copper piping) minimizes the driving voltage for galvanic attack.
2. **Galvanic isolation:** Inserting non-conducting insulating washers, sleeves, or gaskets (such as nylon or PTFE) between dissimilar metals breaks the electrical circuit and stops galvanic corrosion.
3. **Protective coatings:** Understanding how coatings behave when scratched. In **zinc-coated iron (galvanized steel)**, zinc is more active than iron; if the coating is scratched, zinc acts as the anode and sacrificially protects the exposed steel cathode. Conversely, if a noble copper or tin coating on iron is scratched, the exposed iron forms a small anode against a large noble cathode, causing rapid localized pitting of the steel.
4. **Sacrificial anode selection:** Selecting highly active metals from the top of the series (such as $\mathrm{Mg}$, $\mathrm{Zn}$, or $\mathrm{Al}$ alloys) to intentionally corrode and protect critical structures like steel ship hulls and buried pipelines.

### Self-check questions

1. **Question:** Why is titanium located near the noble end of the seawater galvanic series despite having a strongly negative standard reduction potential?
   **Answer:** Titanium rapidly forms a stable, tenacious, non-porous $\mathrm{TiO_2}$ passive oxide film in aerated seawater, which shifts its effective corrosion potential to a highly positive (noble) value.

2. **Question:** If a copper pipe is connected directly to a mild steel pipe carrying seawater, which pipe corrodes faster and why?
   **Answer:** The mild steel pipe corrodes faster because mild steel is higher (more active/anodic) than copper in the galvanic series, so it undergoes accelerated oxidation while the copper acts as the cathode.

3. **Question:** Which design is safer in a marine environment: copper plates fastened with steel bolts, or steel plates fastened with copper bolts?
   **Answer:** Steel plates fastened with copper bolts is safer. It provides a large anode (steel) and a small cathode (copper), spreading the anodic dissolution thinly over a large area rather than concentrating intense corrosion on small steel bolts.

<!-- page 14 | Cathodic protection -->

## Cathodic protection

Electrochemical dissolution of a buried or immersed metal structure occurs at its anodic regions, where metal atoms oxidize and dissolve as ions. Cathodic protection prevents this degradation by forcing the entire surface of the metal structure to act as a cathode. By supplying excess electrons to the metal from an external source, anodic dissolution ($\text{M} \rightarrow \text{M}^{n+} + ne^-$) is suppressed and cathodic reduction is promoted on the protected surface. Practical protection requires sufficient current distribution and potential control.

![Comparison of sacrificial magnesium anode protection and impressed current protection with a DC source and graphite anode](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/cathodic-protection-clean.webp)

*Comparison of sacrificial anode cathodic protection using a magnesium block and impressed current cathodic protection using an external DC power source.*

There are two primary methods for supplying the electrons required for cathodic protection:

1. **Sacrificial anode protection**
2. **Impressed current cathodic protection (ICCP)**

### Sacrificial anode protection

In sacrificial anode (or galvanic) protection, the metallic structure to be protected (such as an iron pipeline) is electrically connected by an insulated wire to a block of a more active metal positioned higher in the galvanic series. Both the structure and the active metal are buried in the same moist soil or immersed in the same aqueous electrolyte to complete the electrochemical circuit.

Metals commonly used as sacrificial anodes include magnesium ($\text{Mg}$), zinc ($\text{Zn}$), aluminium ($\text{Al}$), and their alloys. Because these metals have much more negative reduction potentials than iron or steel, they act as the anode in the resulting galvanic cell.

The galvanic protection process follows three stages:

1. **Anodic reaction (at the sacrificial block):** The active metal oxidizes and dissolves into the surrounding soil or water. For a magnesium anode:

$$
\mathrm{Mg(s) \rightarrow Mg^{2+}(aq) + 2e^-}
$$

2. **Electron flow:** The released electrons travel through the connecting wire to the iron structure.
3. **Cathodic protection (at the iron structure):** The incoming electrons shift the iron surface potential in the negative direction, suppressing iron oxidation ($\text{Fe} \rightarrow \text{Fe}^{2+} + 2e^-$). Instead, dissolved oxygen or hydrogen ions from the surrounding moisture are reduced at the iron surface.

**Sacrificial anode**

A sacrificial anode is an active metal block that corrodes intentionally to protect the primary structure. Once consumed, the sacrificial blocks must be replaced periodically.

* **Advantages:** Requires no external electric power source; simple and inexpensive to install; minimal ongoing supervision beyond scheduled anode replacement.
* **Limitations:** Provides a limited driving voltage, making it less effective in high-resistivity environments (such as dry or sandy soils); anodes gradually dissolve and require periodic replacement.
* **Applications:** Buried steel pipelines, underground cables, ship hulls, marine structures, offshore platforms, and domestic water heaters.

### Impressed current cathodic protection (ICCP)

In impressed current cathodic protection, electrons are supplied to the protected structure by an external direct current (DC) power source, such as a rectifier or battery, rather than by galvanic coupling to a more active metal.

The negative terminal of the DC source is connected to the metallic structure to be protected, and the positive terminal is connected to a low-consumption auxiliary anode buried in the same soil or immersed in the same water. Common auxiliary anode materials include graphite, high-silicon cast iron, platinum, or platinized titanium, often surrounded by conductive backfill in soil installations.

The impressed current mechanism operates as follows:

1. **Electron supply:** The DC power source pumps electrons into the protected metal structure, forcing it to become the cathode and shifting its potential to suppress anodic metal dissolution.
2. **Auxiliary anode reaction:** The circuit is completed through ionic conduction in the shared electrolyte (soil moisture or water). At the inert auxiliary anode, oxidation of species from the surrounding environment occurs—for example, oxidation of water to oxygen gas:

$$
\mathrm{2H_2O(l) \rightarrow O_2(g) + 4H^+(aq) + 4e^-}
$$

(In chloride-rich waters, chloride oxidation may also occur depending on local conditions.)

> **Watch out.** Never reverse the DC connections in an impressed current system. The **negative terminal** must be connected to the pipeline or structure being protected so that it receives electrons and acts as the cathode. Connecting the positive terminal to the pipeline forces it to act as an anode, causing rapid, catastrophic corrosion.

* **Advantages:** Can supply high currents and adjustable voltages to protect very large structures, even in high-resistivity environments like fresh water or sandy soils; suitable low-consumption anodes can provide long service, although their life depends on material, current and environment.
* **Limitations:** Requires a continuous external power supply, higher initial installation cost, and regular monitoring of current output to prevent under-protection or over-protection (which can cause hydrogen embrittlement or coating disbondment).
* **Applications:** Long-distance transmission pipelines, large storage tanks, docked ships, harbours, jetties, water coolers, and reinforced concrete bridges.

> **Watch out.** Do not confuse cathodic protection with electroplating or electroless plating. Cathodic protection alters the electrochemical potential of an existing structure using a shared environment (soil or water) without depositing a metallic coating onto it.

### Comparison of cathodic protection methods

| Feature | Sacrificial Anode Protection | Impressed Current Protection (ICCP) |
| :--- | :--- | :--- |
| **External power source** | Not required | DC power source required |
| **Anode material** | Active metals ($\text{Mg}$, $\text{Zn}$, $\text{Al}$ alloys) | Inert materials (graphite, Pt, high-Si iron) |
| **Anode consumption** | Rapidly consumed; needs periodic replacement | Long service life; insoluble or very low consumption |
| **Electrolyte resistivity** | Best for low-resistivity media (e.g., seawater) | Effective even in high-resistivity soils and fresh water |
| **Target structures** | Small to medium structures, short pipes, hulls | Large, long-distance, or complex infrastructures |

### Self-check questions

1. **Question:** Why is magnesium suitable as a sacrificial anode for protecting an underground iron pipe, whereas copper is not?
   **Answer:** Magnesium lies above iron in the galvanic series (more negative reduction potential), so it oxidizes preferentially and supplies electrons to the iron. Copper lies below iron (more positive potential) and would act as the cathode, accelerating the corrosion of the iron pipe.

2. **Question:** Why do iron rods embedded inside uncontaminated concrete generally resist corrosion without cathodic protection?
   **Answer:** Uncontaminated cement creates a highly alkaline environment around the steel rods, which promotes the formation of a stable, protective passive oxide film on the iron surface.

3. **Question:** Which terminal of the DC source is connected to the graphite electrode in an impressed current system, and why?
   **Answer:** The positive terminal is connected to the graphite electrode to make it the anode (where environmental oxidation occurs), while the negative terminal feeds electrons to the structure being protected to make it the cathode.

<!-- page 15 | Copper electroplating -->

## Copper electroplating

**Electroplating**

Electroplating is an electrolytic surface-finishing process in which a thin, coherent layer of a coating metal is deposited onto a conductive workpiece (base metal) by passing a direct current (DC) through an aqueous solution containing a soluble salt of the coating metal.

In engineering practice, electroplating serves several key purposes:

* Improving corrosion resistance
* Increasing wear and chemical resistance
* Building up undersized dimensions
* Enhancing electrical conductivity
* Improving aesthetic appearance

### Surface pretreatment

A durable, adherent copper deposit cannot form on a contaminated surface. Before the workpiece is placed in the plating bath, it must undergo a strict cleaning sequence:

1. **Degreasing (solvent or alkaline cleaning):** The article is treated with organic solvents or hot alkaline cleaners to remove oils, grease, and organic shop dirt that would otherwise repel the aqueous electrolyte.
2. **Pickling (acid treatment):** The degreased object is immersed in dilute acid (such as dilute $\mathrm{HCl}$ or $\mathrm{H_2SO_4}$) to dissolve surface metal oxides, rust, and heat scales.
3. **Rinsing:** The workpiece is thoroughly washed with deionised or distilled water between and after chemical steps to prevent carry-over contamination into the electroplating tank.

### Cell construction and setup

Unlike a galvanic cell, which generates electrical energy spontaneously, an electroplating cell is an electrolytic cell driven by an external DC power supply.

* **Cathode (negative terminal):** The pre-cleaned workpiece or article to be plated is connected to the negative terminal of the DC power source.
* **Anode (positive terminal):** A rod or plate of high-purity copper metal is connected to the positive terminal (a soluble active anode). Alternatively, an inert conductive material such as graphite may be used.
* **Electrolyte (plating bath):** Both electrodes are immersed in an aqueous solution of copper(II) sulfate ($\mathrm{CuSO_4}$), typically acidified with a small amount of dilute sulfuric acid ($\mathrm{H_2SO_4}$) to increase ionic conductivity and prevent the precipitation of basic copper salts.

![Electrolytic cell setup for copper electroplating showing a pure copper anode, the object to be plated as the cathode, a DC power source, and an aqueous copper sulfate electrolyte](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/chemistry/module-1/assets/imagen-electroplating-copper.webp)

### Working principle and electrode reactions

In the aqueous bath, copper(II) sulfate dissociates into solvated ions:

$$
\mathrm{CuSO_4(aq)} \longrightarrow \mathrm{Cu^{2+}(aq)} + \mathrm{SO_4^{2-}(aq)}
$$

When the external DC supply is switched on, it forces electrons into the cathode and withdraws electrons from the anode. Positively charged $\mathrm{Cu^{2+}}$ ions migrate through the solution toward the negatively charged cathode (the workpiece), where they gain electrons from the external circuit and are reduced to metallic copper on the object's surface.

* **Cathode reaction (reduction at the workpiece):**

$$
\mathrm{Cu^{2+}(aq)} + 2\mathrm{e^-} \longrightarrow \mathrm{Cu(s)}
$$

* **Anode reaction (with a soluble copper anode):**

$$
\mathrm{Cu(s)} \longrightarrow \mathrm{Cu^{2+}(aq)} + 2\mathrm{e^-}
$$

For every mole of $\mathrm{Cu}$ deposited on the cathode, one mole of $\mathrm{Cu}$ dissolves from the pure copper anode into the bath as $\mathrm{Cu^{2+}}$. Consequently, the net effect is the transfer of pure copper from the anode to the workpiece, while the concentration of $\mathrm{Cu^{2+}}$ in the electrolyte remains virtually constant.

> **Watch out.** Do not confuse the polarity of an electrolytic plating cell with that of a galvanic cell. In electroplating, the external DC power supply forces the cathode to be **negative** (connected to the negative terminal) and the anode to be **positive**. Furthermore, the power supply withdraws electrons from the copper anode and supplies electrons to the workpiece cathode through separate external leads; $\mathrm{Cu^{2+}}$ ions migrate through the liquid electrolyte, never through the wire.

### Soluble copper anode vs inert anode

If an inert electrode such as graphite is used as the anode instead of copper, the anode does not replenish copper ions. In the ideal inert-anode model, water can be oxidised at the anode surface:

$$
\mathrm{H_2O(l)} \longrightarrow 2\mathrm{H^+(aq)} + \frac{1}{2}\mathrm{O_2(g)} + 2\mathrm{e^-}
$$

| Feature | Soluble anode (pure $\mathrm{Cu}$) | Inert anode (e.g., graphite) |
| :--- | :--- | :--- |
| **Anodic reaction** | $\mathrm{Cu(s)} \longrightarrow \mathrm{Cu^{2+}(aq)} + 2\mathrm{e^-}$ | $\mathrm{H_2O(l)} \longrightarrow 2\mathrm{H^+(aq)} + \frac{1}{2}\mathrm{O_2(g)} + 2\mathrm{e^-}$ |
| **Bath $\mathrm{Cu^{2+}}$ concentration** | Self-replenishing; remains nearly constant | Depletes over time as $\mathrm{Cu}$ plates out |
| **Maintenance requirement** | Anode gradually dissolves and must be replaced periodically | No copper is supplied by the anode; replenish bath copper as required (real anodes may degrade) |

To obtain a smooth, bright, and strongly adherent deposit rather than a powdery or spongy layer, operating parameters—specifically bath temperature, medium current density, pH, and metal-ion concentration—must be carefully controlled.

> **Watch out.** Students often write that the coating metal is deposited "on the surface of the solution." Reduction occurs strictly at the solid–liquid interface of the negatively charged cathode workpiece.

### Applications, advantages, and limitations

**Applications**

* **Undercoat for multi-layer corrosion protection:** Steel components in the automotive and hardware industries are commonly given successive coatings of copper, nickel, and chromium ($\mathrm{Cu}$–$\mathrm{Ni}$–$\mathrm{Cr}$). Copper provides a smooth, adherent, levelling base layer that improves the adhesion of subsequent nickel and chromium layers.
* **Electronics and printed circuit boards (PCBs):** Because copper has high electrical and thermal conductivity, electroplated copper is used to build up conductive tracks and through-hole interconnections on PCBs (after an initial conductive seed layer is applied).
* **Decorative and household items:** Copper plating imparts a warm metallic lustre to jewellery, kitchenware, and architectural fittings.

**Advantages and limitations**

Copper electroplating produces high-purity, conductive coatings at relatively low cost with controllable thickness. However, the process requires an external DC power source, can only be applied directly to electrically conductive substrates (non-conductors require prior surface activation, such as electroless plating), and suffers from non-uniform current distribution on complex shapes with deep recesses.

### Self-check questions

1. **Why is the workpiece connected to the negative terminal of the DC source during copper electroplating?**
   *Answer:* Connecting the workpiece to the negative terminal supplies it with excess electrons, making it the cathode so that positively charged $\mathrm{Cu^{2+}}$ ions from the bath are attracted to its surface and reduced to metallic $\mathrm{Cu}$.

2. **What happens to the $\mathrm{Cu^{2+}}$ concentration in the bath if a pure copper anode is replaced by a graphite anode?**
   *Answer:* The $\mathrm{Cu^{2+}}$ concentration steadily decreases because $\mathrm{Cu^{2+}}$ ions are consumed at the cathode without being replenished by anodic dissolution of copper; $\mathrm{CuSO_4}$ must therefore be added continuously.

3. **Why is acid pickling performed after degreasing and before immersing the object in the plating bath?**
   *Answer:* Degreasing removes oils so the aqueous acid can wet the surface; pickling then dissolves surface oxides and scales that would prevent the deposited copper from bonding directly to the base metal.

<!-- page 16 | Electroless copper plating -->

## Electroless copper plating

Conventional electroplating relies on an external direct current (DC) power supply to drive metal ions onto a conductive cathode. However, many modern engineering components—such as polymer-based printed circuit boards (PCBs) and intricately shaped parts—cannot be wired into an electrical circuit or suffer from uneven current distribution.

**Electroless plating**

Electroless plating is a deposition technique that overcomes these limitations by depositing a uniform metallic coating through a controlled, autocatalytic chemical reduction of metal ions in an aqueous bath without using any external electric current.

### Principle of autocatalytic deposition

In electroless plating, the electrons required to reduce metal ions ($\text{M}^{n+}$) to the metallic state ($\text{M}$) are supplied locally by a chemical reducing agent dissolved in the plating solution rather than by an external power source. Because the bath contains both the metal ions and the reducing agent together, spontaneous reduction throughout the bulk liquid must be prevented; otherwise, the metal would simply precipitate as a useless powder at the bottom of the tank.

To restrict metal deposition strictly to the object's surface, the process is designed to be autocatalytic. The substrate surface is first made catalytically active, allowing the oxidation of the reducing agent and the simultaneous reduction of metal ions to begin only at that interface. Once the first atomic layer of copper is deposited, the freshly formed copper surface itself acts as a catalyst for further reduction. Deposition therefore continues steadily layer by layer:

$$
\text{Metal ions (complexed)} + \text{Reducing agent} \xrightarrow{\text{Catalytic surface}} \text{Metal deposit} + \text{Oxidised products}
$$

> **Watch out.** Do not picture an electroless plating bath as having separate wired anode and cathode plates. Although textbooks often label the oxidation and reduction half-reactions as "anodic" and "cathodic" to show electron transfer, both half-reactions occur simultaneously at microscopic sites on the *same* catalytic substrate surface without any external wires or DC power supply.

### Bath composition

An educational formulation for an electroless copper bath consists of several functional chemical components working together at elevated pH (typically alkaline, around $\text{pH } 11\text{--}13$) and controlled temperature:

| Bath component | Representative chemicals | Primary role in the bath |
| :--- | :--- | :--- |
| **Soluble metal salt** | Copper(II) sulfate ($\text{CuSO}_4$) or copper(II) chloride ($\text{CuCl}_2$) | Supplies the $\text{Cu}^{2+}$ ions to be reduced into metallic copper. |
| **Complexing agent** | EDTA, Rochelle salt (potassium sodium tartrate), or citrate | Forms stable chelates with $\text{Cu}^{2+}$ to prevent bulk precipitation of $\text{Cu(OH)}_2$ in strong alkali and moderates the free $\text{Cu}^{2+}$ concentration. |
| **Reducing agent** | Formaldehyde ($\text{HCHO}$) | Supplies electrons at the catalytic surface to reduce $\text{Cu}^{2+}$ to $\text{Cu}$; exhibits strong reducing power only in alkaline media. |
| **Alkalinity / pH control** | Sodium hydroxide ($\text{NaOH}$) | Maintains the alkaline conditions needed for formaldehyde oxidation and replaces hydroxide consumed by the overall reaction. |
| **Bath stabilisation** | Carefully controlled, formulation-specific trace additives | Suppress unwanted bulk decomposition while allowing deposition at the activated surface; excessive stabilisation can stop plating. |

> **Watch out.** Sodium thiosulfate is sometimes listed erroneously in student notes as a reducing agent for electroless baths, and Rochelle salt is primarily a tartrate complexing agent rather than a standalone pH buffer. For standard electroless copper plating, **formaldehyde** ($\text{HCHO}$) in strongly alkaline $\text{NaOH}$ medium with **EDTA** or **tartrate** as complexing agent is the benchmark system.

### Step-by-step plating procedure

1. **Surface cleaning and conditioning (degreasing and etching)**  
   Metallic substrates are first degreased using organic solvents or alkaline cleaners to remove oils, followed by mild acid etching to remove surface oxides and create microscopic roughness for mechanical adhesion.

2. **Activation of non-conductors (sensitisation and seeding)**  
   Insulating substrates such as plastics, ceramics, and epoxy-glass PCB laminates are not naturally catalytic and must be seeded before immersion in the copper bath:
   - **Sensitisation:** The cleaned non-conductor is dipped in an acidic stannous chloride ($\text{SnCl}_2$) solution so that $\text{Sn}^{2+}$ ions adsorb onto the surface.
   - **Activation:** After rinsing, the part is immersed in an acidic palladium chloride ($\text{PdCl}_2$) solution. The adsorbed $\text{Sn}^{2+}$ reduces $\text{Pd}^{2+}$ to form microscopic catalytic seeds of metallic palladium ($\text{Pd}^0$) anchored across the surface:

$$
\text{Sn}^{2+} + \text{Pd}^{2+} \rightarrow \text{Sn}^{4+} + \text{Pd}\text{(s)}
$$

3. **Rinsing and immersion deposition**  
   The thoroughly rinsed, catalytically active article is immersed in the heated alkaline electroless copper bath. Copper nucleates initially on the palladium seeds (or cleaned metal surface) and then continues to grow autocatalytically on the newly deposited copper.

4. **Post-treatment**  
   Once the required film thickness is reached, the plated component is removed, washed thoroughly with deionised water to remove residual alkali and salts, and dried.

### Chemical reactions

In a strongly alkaline bath containing $\text{NaOH}$, formaldehyde is oxidised at the catalytic surface (the anodic half-reaction), releasing electrons:

$$
2\text{HCHO} + 4\text{OH}^- \rightarrow 2\text{HCOO}^- + 2\text{H}_2\text{O} + \text{H}_2\uparrow + 2\text{e}^-
$$

Here $\text{HCOO}^-$ represents the formate ion. Simultaneously, complexed copper(II) ions accept these electrons at the same surface (the cathodic half-reaction) and deposit as metallic copper:

$$
\text{Cu}^{2+} + 2\text{e}^- \rightarrow \text{Cu}\text{(s)}
$$

Combining the two balanced half-reactions yields the net autocatalytic cell reaction:

$$
\text{Cu}^{2+} + 2\text{HCHO} + 4\text{OH}^- \rightarrow \text{Cu}\text{(s)} + 2\text{HCOO}^- + 2\text{H}_2\text{O} + \text{H}_2\uparrow
$$

Notice that four hydroxide ions ($\text{OH}^-$) are consumed for every copper atom deposited, which is why continuous $\text{NaOH}$ replenishment and pH buffering are vital during operation, and why small bubbles of hydrogen gas ($\text{H}_2$) are visibly evolved from the part during active plating.

### Conventional electroplating vs electroless copper plating

| Feature | Copper electroplating | Electroless copper plating |
| :--- | :--- | :--- |
| **Driving force** | External DC power source | Chemical reducing agent (e.g., $\text{HCHO}$) in the bath |
| **Anode and cathode** | Separate copper or inert anode and wired object as cathode | No separate electrodes; redox reactions occur on the catalytic workpiece surface |
| **Substrate compatibility** | Conductive metals only (unless pre-coated) | Both metals and activated non-conductors (plastics, ceramics, PCBs) |
| **Coating uniformity** | Uneven on complex shapes due to electric field crowding at edges | Highly uniform inside deep recesses, blind holes, and complex geometries |

### Applications and limitations

#### Applications

- **Printed circuit boards (PCBs):** Essential for **plated through-holes (PTH)** in double-sided and multilayer PCBs, where drilled epoxy-fibreglass holes must be made electrically conductive from one board layer to another.
- **Base coat on non-conductors:** Provides an initial thin conductive metallic layer on plastics, automotive trims, and decorative consumer goods prior to thicker conventional electroplating.
- **Corrosion- and wear-resistant films:** Produces dense, low-porosity coatings on complex mechanical components.

#### Limitations

- **Chemical cost and bath control:** Electroless chemicals are more expensive than simple electroplating salts, and the bath requires strict monitoring of temperature, $\text{pH}$, and stabiliser levels to avoid sudden runaway decomposition.
- **Health and waste hazards:** Formaldehyde is volatile, irritating, and classified as a human health hazard, requiring fume extraction; furthermore, strong chelators like EDTA bind heavy metals tightly, making wastewater treatment more difficult.

### Self-check questions

1. **Why is EDTA added to an alkaline electroless copper plating bath?**
   *Answer:* Because the bath operates at high $\text{pH}$ ($\text{NaOH}$), uncomplexed $\text{Cu}^{2+}$ ions would immediately precipitate as insoluble $\text{Cu(OH)}_2$. EDTA chelates $\text{Cu}^{2+}$ to keep it in solution and controls the rate of deposition.

2. **How is a non-conductive plastic or PCB hole made catalytic before electroless copper deposition?**
   *Answer:* By sequential sensitisation in $\text{SnCl}_2$ solution followed by activation in $\text{PdCl}_2$ solution, which deposits microscopic catalytic palladium ($\text{Pd}^0$) seeds on the insulating surface.

3. **What visible byproduct is evolved during formaldehyde-based electroless copper plating, and why does the bath pH drop if unbuffered?**
   *Answer:* Hydrogen gas ($\text{H}_2$) is evolved, and the $\text{pH}$ drops because four $\text{OH}^-$ ions are consumed per $\text{Cu}^{2+}$ ion reduced into metallic copper.

<!-- page 17 | Revision sheet and exam practice -->

## Revision sheet and exam practice

This section consolidates the core equations, physical definitions, common analytical pitfalls, and practice problems across Module 1. Use the reference table and worked numerical exercises to verify both conceptual recall and quantitative accuracy.

### Master Formula Reference

All thermodynamic potential expressions below assume $T = 298\text{ K}$, universal gas constant $R = 8.314\text{ J mol}^{-1}\text{ K}^{-1}$, and Faraday constant $F = 96485\text{ C mol}^{-1}$, yielding the thermal voltage factor $\frac{2.303RT}{F} \approx 0.0591\text{ V}$. All electrode potentials ($E$ and $E^\circ$) represent reduction potentials.

| Quantity / Relationship | Equation at $298\text{ K}$ | Symbol Definitions & Standard Units |
| :--- | :--- | :--- |
| **Standard Cell Potential** | $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$ | $E^\circ$: standard reduction potential ($\text{V}$) |
| **Nernst Equation (Single Metal)** | $E_{\mathrm{M}^{n+}/\mathrm{M}} = E^\circ_{\mathrm{M}^{n+}/\mathrm{M}} + \frac{0.0591}{n}\log[\mathrm{M}^{n+}]$ | $n$: moles of electrons transferred (dimensionless); $[\mathrm{M}^{n+}]$: molarity ($\text{mol L}^{-1}$) |
| **Nernst Equation (General Cell)** | $E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{0.0591}{n}\log Q$ | $Q$: reaction quotient of the balanced overall redox equation |
| **Gibbs Free Energy Change** | $\Delta G = -nFE_{\text{cell}}$ and $\Delta G^\circ = -nFE^\circ_{\text{cell}}$ | $\Delta G, \Delta G^\circ$: free energy change ($\text{J mol}^{-1}$) |
| **Equilibrium Constant** | $\log K = \frac{nE^\circ_{\text{cell}}}{0.0591}$ | $K$: thermodynamic equilibrium constant |
| **Glass Electrode Potential** | $E_{\text{G}} = K_{\text{G}} - 0.0591\,\text{pH}$ | $K_{\text{G}}$: glass electrode constant ($\text{V}$) |
| **pH Meter Calibration** | $\text{pH} = \frac{K_{\text{G}} - E_{\text{ref}} - E_{\text{measured}}}{0.0591}$ | $E_{\text{measured}} = E_{\text{G}}-E_{\text{ref}}$; $K_{\text{G}}$: glass-electrode constant; all potentials in volts. In practice use the calibrated slope and intercept. |
| **Conductance & Conductivity** | $G = \frac{1}{R}$ and $\kappa = G \cdot K_{\text{cell}}$ | $G$: conductance ($\text{S}$ or $\Omega^{-1}$); $R$: resistance ($\Omega$); $K_{\text{cell}} = \frac{\ell}{A}$: cell constant ($\text{cm}^{-1}$); $\kappa$: specific conductivity ($\text{S cm}^{-1}$) |

### Rapid Retrieval Questions

1. **What is the origin of single electrode potential?**
   The charge separation across the Helmholtz electrical double layer formed by reversible ion transfer between a metal and its electrolyte.

2. **Why is a salt bridge used in a Daniell cell?**
   To maintain electrical neutrality in both half-cells by ion migration and to minimize liquid junction potential without mixing electrolytes.

3. **What is the potential of the Standard Hydrogen Electrode (SHE) at all temperatures?**
   Exactly $0.00\text{ V}$ by international convention at $a_{\mathrm{H}^+} = 1$ and $P_{\mathrm{H}_2} = 1\text{ bar}$.

4. **Why is a calomel electrode preferred over SHE in routine laboratory work?**
   SHE requires continuous, hazardous hydrogen gas bubbling and a readily poisoned platinized platinum surface, whereas the calomel electrode is self-contained and stable.

5. **How does the potential of a calomel electrode vary with $\mathrm{KCl}$ concentration?**
   It decreases as $[\mathrm{KCl}]$ increases: $0.3335\text{ V}$ ($0.1\text{ M}$), $0.2810\text{ V}$ ($1.0\text{ M}$), and $0.2422\text{ V}$ (saturated $\mathrm{KCl}$ at $298\text{ K}$).

6. **Which species carries charge across the hydrated glass bulb membrane?**
   Monovalent cations ($\mathrm{H}^+$ and $\mathrm{Na}^+$) via ion-exchange equilibrium and lattice migration; the glass does not conduct electrons.

7. **What serves as the anode and cathode in a commercial lithium-ion cell?**
   Lithiated graphite ($\mathrm{Li}_x\mathrm{C}_6$) is the negative electrode (anode during discharge), and a lithiated transition-metal oxide ($\mathrm{LiCoO}_2$) is the positive electrode (cathode during discharge).

8. **What is the overall product of an acidic $\mathrm{H}_2\text{--}\mathrm{O}_2$ fuel cell?**
   Pure liquid water ($\mathrm{H}_2 + \frac{1}{2}\mathrm{O}_2 \rightarrow \mathrm{H}_2\mathrm{O}$) along with direct electrical energy and heat.

9. **Why is alternating current (AC) used in conductivity measurements?**
   To prevent electrolysis and electrode polarization at the platinum plates.

10. **Under what condition does wet corrosion occur by hydrogen evolution?**
    Commonly in acidic, oxygen-deficient environments where $\mathrm{H}^+$ reduction ($2\mathrm{H}^+ + 2\mathrm{e}^- \rightarrow \mathrm{H}_2$) serves as the cathodic reaction. Active metals can also reduce water to hydrogen in oxygen-free alkaline media, subject to thermodynamics and passivation.

11. **In waterline corrosion, which region of the metal becomes the anode?**
    The poorly oxygenated region just below the waterline acts as the anode and corrodes; the well-aerated meniscus zone above acts as the cathode.

12. **How does the galvanic series differ from the electrochemical series?**
    The electrochemical series tabulates redox couples under standard-state conditions; the galvanic series measures real engineering alloys in a practical corrosive medium such as seawater.

13. **Why is zinc used to galvanize steel rather than tin for outdoor structural applications?**
    Zinc is anodic to iron and provides sacrificial protection even if the coating is scratched; tin is cathodic to iron and accelerates pinhole corrosion at defects.

14. **What is the role of formaldehyde ($\mathrm{HCHO}$) and $\mathrm{NaOH}$ in electroless copper plating?**
    Formaldehyde acts as the chemical reducing agent, and $\mathrm{NaOH}$ maintains $\text{pH} \approx 11\text{--}12$, where formaldehyde has sufficient reducing power.

> **Watch out.** Frequent conceptual and calculation pitfalls:
>
> * **Anode vs. Cathode:** Oxidation *always* occurs at the anode and reduction *always* occurs at the cathode, in both galvanic (discharging) and electrolytic (charging/plating) cells. Only the electrical polarity sign ($+$ or $-$) reverses.
> * **Stoichiometric Powers in $Q$ and $n$:** For $\mathrm{Zn}(s) + 2\mathrm{Ag}^+(aq) \rightarrow \mathrm{Zn}^{2+}(aq) + 2\mathrm{Ag}(s)$, the electron count is $n = 2$ and $Q = \frac{[\mathrm{Zn}^{2+}]}{[\mathrm{Ag}^+]^2}$. Never omit the exponent $2$ on $[\mathrm{Ag}^+]$, and never substitute $E^\circ$ inside the logarithm.
> * **Units in $\Delta G^\circ$:** The product $-nFE^\circ_{\text{cell}}$ gives Joules ($\text{J mol}^{-1}$), not kilojoules. Divide by $1000$ to report $\text{kJ mol}^{-1}$.
> * **Electroplating vs. Electroless Plating:** Electroplating uses an external DC power source and a soluble copper anode; electroless plating uses an autocatalytic chemical reducing agent ($\mathrm{HCHO}$) in solution with no external power source, enabling uniform coating inside PCB through-holes.

### Numerical Practice Problems

1. **Single-Electrode Potential:** Calculate the reduction potential of a copper electrode dipped in $0.015\text{ M } \mathrm{CuSO}_4$ solution at $298\text{ K}$, given $E^\circ_{\mathrm{Cu}^{2+}/\mathrm{Cu}} = +0.340\text{ V}$.
   *Solution:* For $\mathrm{Cu}^{2+} + 2\mathrm{e}^- \rightarrow \mathrm{Cu}$, $n = 2$.
   $$
   E = 0.340 + \frac{0.0591}{2}\log(0.015) = 0.340 + 0.02955(-1.8239) = +0.286\text{ V}
   $$

2. **Asymmetric Stoichiometry Cell EMF:** Calculate $E^\circ_{\text{cell}}$ and $E_{\text{cell}}$ at $298\text{ K}$ for $\mathrm{Zn}(s) \mid \mathrm{Zn}^{2+}(0.10\text{ M}) \parallel \mathrm{Ag}^+(0.010\text{ M}) \mid \mathrm{Ag}(s)$, given $E^\circ_{\mathrm{Zn}^{2+}/\mathrm{Zn}} = -0.762\text{ V}$ and $E^\circ_{\mathrm{Ag}^+/\mathrm{Ag}} = +0.800\text{ V}$.
   *Solution:* Balanced reaction: $\mathrm{Zn}(s) + 2\mathrm{Ag}^+(aq) \rightarrow \mathrm{Zn}^{2+}(aq) + 2\mathrm{Ag}(s)$, so $n = 2$.
   $$
   E^\circ_{\text{cell}} = 0.800 - (-0.762) = 1.562\text{ V}
   $$
   $$
   E_{\text{cell}} = 1.562 - \frac{0.0591}{2}\log\left(\frac{[\mathrm{Zn}^{2+}]}{[\mathrm{Ag}^+]^2}\right) = 1.562 - 0.02955\log\left(\frac{0.10}{(0.010)^2}\right) = 1.562 - 0.02955(3) = 1.473\text{ V}
   $$

3. **Equilibrium Constant and Free Energy:** Calculate $\Delta G^\circ$ and $K$ at $298\text{ K}$ for $\mathrm{Fe}(s) + \mathrm{Cu}^{2+}(aq) \rightleftharpoons \mathrm{Fe}^{2+}(aq) + \mathrm{Cu}(s)$, given $E^\circ_{\mathrm{Fe}^{2+}/\mathrm{Fe}} = -0.440\text{ V}$ and $E^\circ_{\mathrm{Cu}^{2+}/\mathrm{Cu}} = +0.340\text{ V}$.
   *Solution:* Here $n = 2$ and $E^\circ_{\text{cell}} = 0.340 - (-0.440) = 0.780\text{ V}$.
   $$
   \Delta G^\circ = -2 \times 96485\text{ C mol}^{-1} \times 0.780\text{ V} = -150517\text{ J mol}^{-1} \approx -150.5\text{ kJ mol}^{-1}
   $$
   $$
   \log K = \frac{2 \times 0.780}{0.0591} = 26.396 \implies K = 10^{26.396} \approx 2.49 \times 10^{26}
   $$

4. **Corrosion Product Prediction:** An iron nail is immersed in deaerated $1\text{ M } \mathrm{HCl}$ ($E^\circ_{\mathrm{H}^+/\mathrm{H}_2} = 0.000\text{ V}$). Given $E^\circ_{\mathrm{Fe}^{2+}/\mathrm{Fe}} = -0.440\text{ V}$ and $E^\circ_{\mathrm{Fe}^{3+}/\mathrm{Fe}} = -0.040\text{ V}$, determine which iron ion forms predominantly.
   *Solution:* For formation of $\mathrm{Fe}^{2+}$, $E^\circ_{\text{cell}} = 0.000-(-0.440)=+0.440\text{ V}$. The $\mathrm{Fe}^{3+}/\mathrm{Fe}$ comparison transfers three electrons, so its EMF must not be compared directly with this two-electron route to select the product. In deaerated, non-oxidizing acid, $\mathrm{Fe}^{2+}$ predominates: any ferric ions contacting excess iron can be reduced by $\mathrm{Fe}$ to ferrous ions. The net acid reaction is $\mathrm{Fe(s)+2HCl(aq) \rightarrow FeCl_2(aq)+H_2(g)}$.

5. **Effect of pH on Deaerated Corrosion:** Explain quantitatively why $\mathrm{Mg}$ ($E^\circ_{\mathrm{Mg}^{2+}/\mathrm{Mg}} = -2.360\text{ V}$) corrodes in both acidic ($\text{pH} = 0$) and strongly alkaline ($\text{pH} = 14$) oxygen-free water, whereas the same standard-metal-potential estimate does not favour hydrogen evolution on $\mathrm{Fe}$ at $\text{pH}=14$. Treat the comparison as an ideal estimate: real corrosion also depends on ion activities, oxide films and kinetics.
   *Solution:* The hydrogen evolution cathode potential is $E_{\mathrm{H}^+/\mathrm{H}_2} = -0.0591\,\text{pH}$. At $\text{pH} = 0$, $E_{\mathrm{H}^+/\mathrm{H}_2} = 0.000\text{ V}$; at $\text{pH} = 14$, $E_{\mathrm{H}^+/\mathrm{H}_2} = -0.0591 \times 14 = -0.827\text{ V}$. Magnesium's potential ($-2.360\text{ V}$) is more negative than $E_{\mathrm{H}^+/\mathrm{H}_2}$ at both $\text{pH} = 0$ and $\text{pH} = 14$, so $E_{\text{cell}} > 0$ in both media. For iron at $\text{pH} = 14$, $E^\circ_{\mathrm{Fe}^{2+}/\mathrm{Fe}} (-0.440\text{ V}) > E_{\mathrm{H}^+/\mathrm{H}_2} (-0.827\text{ V})$, giving a negative $E_{\text{cell}} (-0.387\text{ V})$, so this ideal comparison does not favour hydrogen-evolution corrosion. It does not establish a universal absence of iron corrosion in alkali.

### Long-Answer Practice Prompts

1. **Daniell Cell & Nernst Equation:** Sketch a Daniell cell, write its half-cell and net reactions, and derive the Nernst equation for its cell EMF from thermodynamic free energy principles.
2. **Reference Electrodes (SHE & SCE):** Describe the construction, cell notation, and electrode reactions of the saturated calomel electrode acting as (a) cathode and (b) anode, and explain how it is used to measure the unknown potential of a $\mathrm{Zn}^{2+}/\mathrm{Zn}$ half-cell.
3. **Glass Electrode & pH Measurement:** Explain the construction, ion-exchange mechanism, and mathematical working of a glass electrode coupled with an SCE for digital pH determination.
4. **Lithium-Ion Battery:** Describe the anode, cathode, electrolyte, and separator of a lithium-ion cell, and write the intercalation/de-intercalation reactions during charging and discharging.
5. **Acidic $\mathrm{H}_2\text{--}\mathrm{O}_2$ Fuel Cell:** Explain the construction, proton-exchange working mechanism, and electrode reactions of an acidic hydrogen–oxygen fuel cell, noting its engineering advantages.
6. **Conductivity Measurement:** Define specific conductivity and cell constant, and outline the experimental procedure for calibrating a digital conductivity meter with standard $\mathrm{KCl}$ to test a water sample.
7. **Electrochemical Corrosion Mechanisms:** Contrast the anodic and cathodic mechanisms of wet iron corrosion in (a) acidic deaerated media and (b) neutral aerated media, and explain differential aeration in pitting and crevice corrosion.
8. **Corrosion Control & Copper Plating:** Compare sacrificial anode and impressed-current cathodic protection, and contrast the bath composition, working principles, and PCB applications of copper electroplating versus electroless copper plating.

### Module Learning Checklist

- [ ] I can write IUPAC cell notations, half-reactions, and balanced redox equations for galvanic and electrolytic cells.
- [ ] I can apply the Nernst equation to calculate single-electrode potentials, non-standard cell EMFs, $\Delta G^\circ$, and equilibrium constants $K$.
- [ ] I can explain the construction and potential equations of SHE, calomel, and glass electrodes.
- [ ] I can distinguish the charge and discharge reactions of lithium-ion batteries and the continuous operation of acidic $\mathrm{H}_2\text{--}\mathrm{O}_2$ fuel cells.
- [ ] I can calculate cell constants and specific conductivities from resistance measurements.
- [ ] I can predict corrosion spontaneity using electrode potentials and the galvanic series, and select appropriate cathodic protection or copper plating methods.
