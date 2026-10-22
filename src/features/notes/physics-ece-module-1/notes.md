<!-- page 1 | Start here -->

## Semiconductor Physics and P-N Junction Devices

Master the fundamentals of intrinsic and extrinsic semiconductors, derive carrier concentrations and Fermi levels, and analyze p-n junction diode characteristics under equilibrium, forward, and reverse bias conditions.

**Before you start:** Basic quantum mechanics and statistical distributions; Solid-state energy bands and thermal physics.

### Your path through this module

1. **Introduction to Energy Bands in Solids**: Electrons in closely packed solid atoms occupy allowed energy bands separated by forbidden energy gaps.
2. **Intrinsic Semiconductors and Electron Concentration**: Integration of the density of states and the Fermi distribution yields the conduction band electron concentration.
3. **Intrinsic Carrier Concentration and Fermi Level**: The intrinsic carrier concentration depends exponentially on the band gap; the intrinsic Fermi level lies near mid-gap, with a small effective-mass correction at nonzero temperature.
4. **Extrinsic Semiconductors and Doping**: Pentavalent and trivalent dopants create donor and acceptor energy levels, shifting the Fermi level and making one carrier type dominant.
5. **P-N Junction Formation and Energy Bands**: Carrier diffusion creates a space-charge depletion region and a built-in barrier potential that balances drift and diffusion currents at equilibrium.
6. **Diode Equation and V-I Characteristics**: The diode current equation models exponential current growth under forward bias and a constant leakage current under reverse bias until breakdown.

<!-- page 2 | Introduction to Energy Bands in Solids -->

# Introduction to Energy Bands in Solids

## Bridge and New Ideas
Having completed basic solid-state concepts, we examine how discrete atomic energy levels broaden into continuous bands. According to the Pauli exclusion principle, when isolated atoms are brought together to form a solid, their discrete orbital energy levels split and merge into continuous energy bands due to interatomic interactions.

## Key Definitions
- **Valence Band:** The highest range of electron energies in which electrons are present at absolute zero ($0\text{ K}$). Electrons in this band are typically bound to specific lattice sites or covalent bonds and do not contribute to electrical conduction.
- **Conduction Band:** The lowest range of vacant electronic energy levels located above the valence band. Electrons residing here are thermally or electrically excited, allowing them to move freely through the crystal lattice and conduct electricity.
- **Forbidden Energy Gap ($E_g$):** An energy range between the valence band and the conduction band where no electron quantum states can exist. Its magnitude determines the electrical conductivity of the material.

## Band Theory of Solids
The relationship between these bands dictates whether a material behaves as a conductor, semiconductor, or insulator. The energy gap is measured in electron-volts ($\text{eV}$), where $1\text{ eV} = 1.602 \times 10^{-19}\text{ J}$.

| Material Type | Forbidden Gap ($E_g$) | Physical Behavior | Examples |
| :--- | :--- | :--- | :--- |
| **Conductor** | $E_g = 0\text{ eV}$ | Valence and conduction bands overlap; free electrons available at all times. | Copper, Aluminum |
| **Semiconductor** | Moderate ($E_g \approx 0.7 - 1.1\text{ eV}$) | Gap is narrow enough for thermal energy to excite electrons into the conduction band at room temperature. | Silicon, Germanium |
| **Insulator** | Large ($E_g > 3\text{ eV}$) | Gap is too large for thermal excitation; requires immense electric fields to conduct. | Diamond, Quartz |

## Worked Example
**Problem:** At room temperature, silicon has a forbidden energy gap $E_g = 1.1\text{ eV}$. Express this energy gap in Joules.

**Solution:**
1. Identify the conversion factor: $1\text{ eV} = 1.602 \times 10^{-19}\text{ Joules}$.
2. Multiply the numerical value in electron-volts by the joules-per-electron-volt conversion factor:
$$
E_g = 1.1\,\mathrm{eV}\times 1.602\times10^{-19}\,\frac{\mathrm{J}}{\mathrm{eV}}
    = 1.7622\times10^{-19}\,\mathrm{J}
    \approx 1.76\times10^{-19}\,\mathrm{J}.
$$

The unit eV cancels, leaving joules. The answer is an energy per electron; it is not the energy of a mole of electrons.

## Remember
- Atomic energy levels broaden into continuous allowed bands in a solid.
- The valence band holds bound electrons, while the conduction band enables electrical transport.
- The forbidden energy gap ($E_g$) separates these two bands and dictates material class (conductor, semiconductor, or insulator).

<!-- page 3 | Intrinsic Semiconductors and Electron Concentration -->

## Intrinsic Semiconductors and Electron Concentration

### Introduction to Semiconductors and Energy Bands
Semiconductors are materials whose electrical conductivity lies between that of insulators and conductors. They are broadly classified into intrinsic (pure) and extrinsic (doped) semiconductors. In a solid, atoms are closely packed, causing the discrete energy levels of electrons to interact and form continuous ranges of energy known as **energy bands**.

* **Valence Band:** The range of energy possessed by valence electrons.
* **Conduction Band:** The range of energy possessed by free electrons responsible for electrical conduction.
* **Forbidden Energy Gap ($E_g$):** The energy separation between the valence band and the conduction band where no allowed electron energy states exist. For insulators $E_g \thicksim 15\text{ eV}$, for conductors the bands overlap ($E_g = 0$), and for semiconductors $E_g \thicksim 1\text{ eV}$.

### Intrinsic Semiconductors
Pure semiconductors without any intentional impurity additions are called intrinsic semiconductors (e.g., Silicon and Germanium). When an electric field is applied, free electrons in the conduction band accelerate toward the positive terminal while holes migrate toward the negative terminal, constituting the semiconductor current.

#### Properties of Intrinsic Semiconductors
1. **Low Conductivity:** Limited intrinsic charge carriers yield relatively low electrical conductivity at room temperature.
2. **Equal Carrier Concentrations:** The number of conduction band electrons equals the valence band hole concentration:
   $$n = p$$
   where $n$ is electron concentration and $p$ is hole concentration.
3. **Temperature Dependence:** Conductivity increases exponentially with temperature due to thermally generated electron-hole pairs.
4. **Crystalline Structure:** Possess a well-defined periodic crystal lattice.
5. **Band Gap Energy:** Characteristic $E_g$ determines optical absorption and emission spectra.
6. **Sensitivity to Impurities:** Electrical properties alter drastically with trace impurity additions.

---

### Derivation of Electron Concentration in the Conduction Band

The total density of electrons in the conduction band ($n$) is determined by integrating the product of the density of available energy states $Z(E)$ and the Fermi-Dirac probability function $F(E)$ over all conduction band energies starting from the bottom of the conduction band ($E_c$).

Let $dn$ be the number of electrons per unit volume in the energy range $E$ and $E+dE$:
$$dn = Z(E)dE \cdot F(E) \quad \text{--- (1)}$$

From quantum statistical mechanics, the density of states in the conduction band is given by:
$$Z(E)dE = \frac{4\pi}{h^3} (2m_e^*)^{3/2} (E - E_c)^{1/2} dE \quad \text{--- (3)}$$
where $m_e^*$ is the effective mass of the electron in the conduction band, $h$ is Planck's constant, and $E_c$ is the bottom edge energy of the conduction band.

The Fermi-Dirac distribution function representing the probability of electron occupancy at energy level $E$ is:
$$F(E) = \frac{1}{1 + e^{(E-E_F)/kT}} \quad \text{--- (4)}$$
where $E_F$ is the Fermi energy level, $k$ is the Boltzmann constant, and $T$ is the absolute temperature.

For energy states in the conduction band, $(E - E_F) \gg kT$ for all practical temperatures $T$. Therefore, $\frac{E - E_F}{kT} \ge 1$, allowing us to neglect $1$ in the denominator of equation (4):
$$F(E) \approx \frac{1}{e^{(E-E_F)/kT}} = e^{-(E-E_F)/kT} = e^{(E_F-E)/kT} \quad \text{--- (5)}$$

Substituting equations (3) and (5) into equation (1):
$$dn = \frac{4\pi}{h^3} (2m_e^*)^{3/2} (E - E_c)^{1/2} dE \cdot e^{(E_F-E)/kT}$$

Integrating from the bottom of the conduction band $E_c$ to the top ($\infty$):
$$n = \int_{E_c}^{\infty} \frac{4\pi}{h^3} (2m_e^*)^{3/2} (E - E_c)^{1/2} e^{(E_F-E)/kT} dE$$
$$n = \frac{4\pi}{h^3} (2m_e^*)^{3/2} e^{E_F/kT} \int_{E_c}^{\infty} (E - E_c)^{1/2} e^{-E/kT} dE$$

Using the substitution $x = E - E_c$, so that $E = x + E_c$, $dE = dx$. When $E = E_c$, $x = 0$; when $E = \infty$, $x = \infty$:
$$n = \frac{4\pi}{h^3} (2m_e^*)^{3/2} e^{E_F/kT} \int_{0}^{\infty} x^{1/2} e^{-(x + E_c)/kT} dx$$
$$n = \frac{4\pi}{h^3} (2m_e^*)^{3/2} e^{(E_F - E_c)/kT} \int_{0}^{\infty} x^{1/2} e^{-x/kT} dx$$

Evaluating the standard definite integral $\int_{0}^{\infty} x^{1/2} e^{-x/kT} dx = \frac{kT\sqrt{\pi kT}}{2} = \frac{(kT)^{3/2}\pi^{1/2}}{2}$:
$$n = \frac{4\pi}{h^3} (2m_e^*)^{3/2} e^{(E_F - E_c)/kT} \cdot \frac{(kT)^{3/2}\pi^{1/2}}{2}$$
$$n = 2\left(\frac{2\pi m_e^* kT}{h^2}\right)^{3/2} e^{(E_F - E_c)/kT} \quad \text{--- (6)}$$

Letting $N_c = 2\left(\frac{2\pi m_e^* kT}{h^2}\right)^{3/2}$ as the effective density of states in the conduction band, the electron concentration simplifies to:
$$n = N_c e^{(E_F - E_c)/kT}$$

Similarly, the expression for the density of holes in the valence band of an intrinsic semiconductor is:
$$p = N_v e^{-(E_F - E_v)/kT}$$
where $N_v$ is the effective density of states in the valence band and $E_v$ is the top edge energy of the valence band.

### Derivation of hole concentration in the valence band

A hole is an unoccupied electron state in the valence band. Its probability of occupation is $1-F(E)$, where $F(E)$ is the Fermi-Dirac probability that the state contains an electron. The valence-band density of states per unit volume is

$$Z_v(E)dE=\frac{4\pi}{h^3}(2m_h^*)^{3/2}(E_v-E)^{1/2}dE, \qquad E\le E_v,$$

where $m_h^*$ is the effective hole mass and $E_v$ is the top of the valence band. Under the non-degenerate (Boltzmann) approximation,

$$1-F(E)\approx e^{(E-E_F)/kT}.$$

Therefore the hole concentration is obtained by integrating unoccupied valence-band states:

$$p=\int_{-\infty}^{E_v} Z_v(E)[1-F(E)]dE.$$

Set $x=E_v-E$, so $x$ runs from $0$ to $\infty$. Substitution gives

$$p=\frac{4\pi}{h^3}(2m_h^*)^{3/2}e^{(E_v-E_F)/kT}\int_0^\infty x^{1/2}e^{-x/kT}dx.$$

Using $\int_0^\infty x^{1/2}e^{-x/kT}dx=\frac{(kT)^{3/2}\sqrt{\pi}}{2}$ and defining $N_v=2(2\pi m_h^*kT/h^2)^{3/2}$, we obtain

$$p=N_v e^{-(E_F-E_v)/kT}.$$

This parallels the conduction-band result $n=N_c e^{-(E_c-E_F)/kT}$; in an intrinsic semiconductor, charge neutrality gives $n=p=n_i$.

<!-- page 4 | Intrinsic Carrier Concentration and Fermi Level -->

## Intrinsic Carrier Concentration and Fermi Level

### Intrinsic Carrier Concentration ($n_i$)

The number of electrons ($n$) in the conduction band, which equals the number of holes ($p$) in the valence band in a perfectly pure semiconductor material at a given temperature, is called the intrinsic carrier concentration ($n_i$).

$$n_i = n = p$$
$$n_i^2 = n p \longrightarrow \textcircled{1}$$

Using the equations for carrier concentrations:
$$n = N_c e^{-(E_c - E_F)/kT}$$
$$p = N_v e^{-(E_F - E_v)/kT}$$

Substituting the values of $n$ and $p$ into equation $\textcircled{1}$:
$$n_i^2 = N_c e^{-(E_c - E_F)/kT} \times N_v e^{-(E_F - E_v)/kT}$$

$$n_i^2 = N_c N_v e^{-[E_c - E_F + E_F - E_v]/kT}$$

$$n_i^2 = N_c N_v e^{-(E_c - E_v)/kT} \longrightarrow (2)$$

Since $E_c - E_v = E_g$ (the energy band gap):
$$n_i^2 = N_c N_v e^{-E_g / kT}$$
$$\therefore n_i = (N_c N_v)^{1/2} e^{-E_g / 2kT}$$

Substituting the explicit expressions for the effective density of states $N_c$ and $N_v$:
$$n_i = 2 \left(\frac{2\pi k T}{h^2}\right)^{3/2} (m_e^* m_h^*)^{3/4} e^{-E_g / 2kT}$$

This is the complete expression for the intrinsic carrier concentration, where $m_e^*$ is the effective mass of electrons, $m_h^*$ is the effective mass of holes, $k$ is Boltzmann's constant, $h$ is Planck's constant, and $T$ is absolute temperature.

### Variation of Intrinsic Carrier Concentration with Temperature

The temperature dependence of $n_i$ highlights key semiconductor behaviors:

* As temperature increases, $n_i$ increases exponentially because more thermal energy breaks covalent bonds, exciting electrons from the valence band to the conduction band.
* At a given temperature, materials with larger band gaps ($E_g$) exhibit lower intrinsic carrier concentrations because a higher energy threshold is required for excitation.
* Increased carrier concentrations at high temperatures cause larger leakage currents in semiconductor devices, which can degrade their thermal performance.

Important properties inferred from the equation include:
1. The intrinsic concentration is independent of the Fermi level location.
2. It has an exponential dependence on the band gap $E_g$.
3. It exhibits a strong dependence on absolute temperature $T$.

### Fermi Level and Fermi Energy

The Fermi level ($E_F$) is defined as the topmost filled energy level in a conductor at $0\text{ K}$. For $T > 0\text{ K}$, the Fermi level represents the energy state at which the probability of occupation by an electron is exactly $0.5$ (or $50\%$).

$$P(E) = P(E_F) = \frac{1}{2}$$

### Fermi Level in an Intrinsic Semiconductor

In an intrinsic semiconductor, electron and hole concentrations are balanced:
$$n = p = n_i$$

Substituting the energy-band concentration formulas:
$$2 \left(\frac{2\pi m_e^* kT}{h^2}\right)^{\frac{3}{2}} e^{\frac{E_F - E_c}{kT}} = 2 \left(\frac{2\pi m_h^* kT}{h^2}\right)^{\frac{3}{2}} e^{\frac{E_v - E_F}{kT}}$$

Simplifying and taking the natural logarithm to solve for $E_F$:
$$\left(\frac{m_e^*}{m_h^*}\right)^{3/2} = e^{\frac{E_v - 2E_F + E_c}{kT}}$$

$$E_F = \frac{E_c+E_v}{2}+\frac{3}{4}kT\ln\left(\frac{m_h^*}{m_e^*}\right)$$

At absolute zero ($T = 0\text{ K}$), the temperature-dependent effective-mass correction vanishes:
$$E_F = \frac{E_v + E_c}{2} = \frac{E_g}{2} + E_v$$

If the valence band edge $E_v$ is taken as the reference zero energy level:
$$E_F = \frac{E_g}{2}$$

Thus, the intrinsic Fermi level is at mid-gap when the electron and hole effective masses are equal. In real materials it is generally close to mid-gap, with its exact position set by the effective-mass ratio and temperature. Do not confuse this intrinsic result with the extrinsic case: donor doping moves the Fermi level toward the conduction band, while acceptor doping moves it toward the valence band.

![Energy band diagram showing Conduction Band, Valence Band, and Fermi Energy Level](/assets/notes/ece/s1/physics/module-1/p028-1-clean.webp)

<!-- page 5 | Extrinsic Semiconductors and Doping -->

## Extrinsic Semiconductors and Doping

With intrinsic properties established, we introduce impurity doping to control carrier density and conductivity. The conductivity of an intrinsic semiconductor can be significantly altered by the addition of impurities. This process is called doping and the impurities added are called dopants. A semiconductor which has undergone doping is called extrinsic semiconductor. They are of two types: n-type and p-type.

### 1) n-type Semiconductor

When an intrinsic semiconductor is doped with pentavalent impurities like phosphorus, arsenic, or antimony, free electrons are generated, thereby making the electrons the majority carriers. Holes become the minority carriers and the Fermi level shifts towards the conduction band.

Examples:
- Silicon doped with Phosphorus
- Germanium doped with Arsenic

![Diagram of n-type semiconductor with charge carriers](/assets/notes/ece/s1/physics/module-1/p016-1-clean.webp)

```jsxgraph
{"title":"Energy bands in an n-type semiconductor","boundingBox":[0,10,10,0],"axis":false,"polylines":[{"points":[[1,7.4],[9,7.4]],"stroke":"#2563eb"},{"points":[[1,6.8],[9,6.8]],"stroke":"#16a34a"},{"points":[[1,5.8],[9,5.8]],"stroke":"#dc2626","dashed":true},{"points":[[1,3.1],[9,3.1]],"stroke":"#2563eb"}],"labels":[{"x":5,"y":8.0,"text":"Conduction band E_C"},{"x":5,"y":6.4,"text":"Donor level E_D"},{"x":5,"y":5.4,"text":"Fermi level E_F"},{"x":5,"y":2.5,"text":"Valence band E_V"},{"x":2.3,"y":7.4,"text":"•  •  •  •"},{"x":5,"y":3.1,"text":"○"}]}
```

### 2) p-type Semiconductor

When an intrinsic semiconductor is doped with trivalent impurities like boron, aluminium, or gallium, holes are generated, thereby making the holes the majority carriers. Electrons become the minority carriers and the Fermi level shifts towards the valence band.

Examples:
- Silicon doped with Boron
- Germanium doped with Aluminium

```jsxgraph
{"title":"P-type semiconductor current conduction under DC bias","boundingBox":[0,10,12,0],"axis":false,"points":[{"id":"a","x":3.2,"y":5,"show":false},{"id":"b","x":8.4,"y":5,"show":false},{"id":"h1","x":4.4,"y":6.7,"show":false},{"id":"h2","x":5.8,"y":6.7,"show":false},{"id":"h3","x":7.2,"y":6.7,"show":false},{"id":"h4","x":4.4,"y":5.5,"show":false},{"id":"h5","x":5.8,"y":5.5,"show":false},{"id":"h6","x":7.2,"y":5.5,"show":false},{"id":"c","x":8.4,"y":8,"show":false},{"id":"d","x":3.2,"y":8,"show":false},{"id":"hw1","x":4.6,"y":4.9,"show":false},{"id":"hw2","x":5.6,"y":4.9,"show":false},{"id":"hw3","x":6.0,"y":4.9,"show":false},{"id":"hw4","x":7.0,"y":4.9,"show":false}],"polygons":[{"points":["a","b","c","d"],"fill":"#f0fdf4","stroke":"#16a34a"}],"circles":[{"center":"h1","radius":0.22},{"center":"h2","radius":0.22},{"center":"h3","radius":0.22},{"center":"h4","radius":0.22},{"center":"h5","radius":0.22},{"center":"h6","radius":0.22}],"polylines":[[[1,6],[3.2,6]],[[8.4,6],[10.5,6]],[[1,3],[4.8,3]],[[5.2,3],[10.5,3]],[[1,3],[1,9],[10.5,9],[10.5,3]],[[4.9,2.65],[4.9,3.35]],[[5.1,2.5],[5.1,3.5]]],"labels":[{"x":5.8,"y":8.45,"text":"p-type semiconductor"},{"x":5.5,"y":1.35,"text":"DC source"},{"x":4.4,"y":6.7,"text":"+"},{"x":5.8,"y":6.7,"text":"+"},{"x":7.2,"y":6.7,"text":"+"},{"x":4.75,"y":2.35,"text":"−"},{"x":5.25,"y":2.35,"text":"+"}],"arrows":[{"from":"hw1","to":"hw2"},{"from":"hw3","to":"hw4"}]}
```

```jsxgraph
{"title":"Energy bands in a p-type semiconductor","boundingBox":[0,10,10,0],"axis":false,"polylines":[{"points":[[1,7.4],[9,7.4]],"stroke":"#2563eb"},{"points":[[1,4.2],[9,4.2]],"stroke":"#16a34a"},{"points":[[1,3.7],[9,3.7]],"stroke":"#dc2626","dashed":true},{"points":[[1,3.1],[9,3.1]],"stroke":"#2563eb"}],"labels":[{"x":5,"y":8.0,"text":"Conduction band E_C"},{"x":5,"y":4.7,"text":"Acceptor level E_A"},{"x":5,"y":3.3,"text":"Fermi level E_F"},{"x":5,"y":2.5,"text":"Valence band E_V"},{"x":5,"y":7.4,"text":"•  •  •"},{"x":5,"y":3.1,"text":"○  ○  ○"}]}
```

### Properties of Extrinsic Semiconductors

- **Conductivity:** The conductivity is high compared to intrinsic semiconductors due to an increased number of charge carriers.
- **Charge Carriers:** Depending on the type of dopants, the majority charge carriers may be electrons or holes.
- **Position of the Fermi Level:** For n-type semiconductors, the Fermi level shifts towards the conduction band, and for p-type semiconductors, it shifts towards the valence band.


### Difference between N-type and P-type Semiconductors

| N-type | P-type |
| --- | --- |
| 1) When a pentavalent impurity is doped to an intrinsic semiconductor, an n-type semiconductor is formed. | When a trivalent impurity is doped to an intrinsic semiconductor, a p-type semiconductor is formed. |
| 2) The impurity is called donor impurity. | The impurity is called acceptor impurity since it accepts electrons. |
| 3) Electrons are the majority carriers. | Holes are the majority carriers. |
| 4) Holes are the minority carriers. | Electrons are the minority carriers. |
| 5) The Fermi level lies closer to the conduction band. | The Fermi level lies closer to the valence band. |
| 6) The electron concentration exceeds the hole concentration. | The hole concentration exceeds the electron concentration. |
| 7) Common dopants include phosphorus, arsenic, and antimony. | Common dopants include boron, gallium, and indium. |

### Difference between Intrinsic and Extrinsic Semiconductors

| Intrinsic Semiconductor | Extrinsic Semiconductor |
| --- | --- |
| 1) Semiconductor without doping. | Semiconductor with doping. |
| 2) Conductivity is low. | Conductivity is high. |
| 3) Number of free electrons is equal to the number of holes. ($n = p$) | Number of free electrons and number of holes are unequal. |
| 4) Conductivity depends only on temperature. | Conductivity depends both on temperature and the impurity added. |
| 5) Conductivity due to electrons and holes is nearly equal. | Conductivity is mainly due to majority charge carriers. |
| 6) At $0\text{ K}$, the idealized semiconductor has no thermally excited free carriers; dopant freeze-out also prevents ordinary conduction. | At room temperature, dopants supply majority carriers; at $0\text{ K}$, dopant freeze-out prevents ordinary conduction. |
| 7) Fermi level lies in between valence and conduction bands. | Fermi level lies near the valence band in p-type and near the conduction band in n-type. |
| 8) Ratio of majority and minority carriers is unity. | Ratio of majority and minority carriers is not unity. |
| 9) e.g., Silicon, Germanium. | e.g., Silicon doped with phosphorus, Silicon doped with boron. |

<!-- page 6 | P-N Junction Formation and Energy Bands -->

## P-N Junction Formation and Energy Bands

Bridge: Having studied separate semiconductor types, we investigate what happens when p-type and n-type materials are joined together.

The new idea: Carrier diffusion creates a space-charge depletion region and a built-in barrier potential that balances drift and diffusion currents at equilibrium.

### Objectives
- Explain the formation of a p-n junction and depletion region.
- Analyze energy band diagrams under equilibrium, forward bias, and reverse bias.

### Concepts and Definitions
- **P-N Junction**: The metallurgical interface formed by joining p-type and n-type semiconductor materials.
- **Diffusion Current**: Current caused by the concentration gradient of charge carriers, moving from high to low concentration regions.
- **Drift Current**: Current caused by the electric field in the depletion region sweeping minority carriers across the junction.
- **Depletion Region (Space Charge Region)**: A zone near the junction nearly devoid of mobile charge carriers, leaving behind uncompensated immobile donor and acceptor ions.
- **Built-in Potential ($V_0$) / Barrier Potential**: The potential difference across the depletion region created by the unbalanced immobile ions.
- **Forward Bias**: An external voltage applied across the p-n junction that opposes the built-in potential, narrowing the depletion region and allowing large current flow.
- **Reverse Bias**: An external voltage applied in the same direction as the built-in potential, widening the depletion region and blocking majority carrier flow.

### Formation of a P-N Junction

A p-n junction is formed by suitably joining a p-type semiconductor (majority holes) and an n-type semiconductor (majority electrons). Due to the large concentration gradient across the boundary, electrons from the n-side diffuse into the p-side, and holes from the p-side diffuse into the n-side. Near the interface, electrons and holes recombine, neutralizing each other.

This recombination leaves behind uncompensated immobile positive donor ions ($N_D^+$) on the n-side and negative acceptor ions ($N_A^-$) on the p-side. This uncharged region of fixed ions is called the **depletion region**. The accumulation of these charges sets up an internal electric field and a potential difference known as the **built-in potential** ($V_0$).

For a simple silicon junction, the built-in barrier is often approximated as about $0.7\text{ V}$; for germanium, about $0.3\text{ V}$. These are typical values, not universal constants: the actual built-in potential depends on the material, doping concentrations, and temperature.

![PN junction diode formation and carrier diffusion](/assets/notes/ece/s1/physics/module-1/p024-1-clean.webp)


The electric field creates a **drift current** of minority carriers that opposes the initial **diffusion current**. Equilibrium is reached when the diffusion current equals the drift current, resulting in a net current of zero.

### Energy Band Diagrams: Equilibrium, Forward Bias, and Reverse Bias

The energy-band edges bend across the p–n junction depletion region. The sketches are qualitative and not to scale.

#### i) Equilibrium Condition
At equilibrium, the Fermi level $E_F$ is flat. The conduction-band edge $E_C$ and valence-band edge $E_V$ bend from the p-side to the n-side, creating the built-in barrier $qV_0$ across depletion width $W_0$.

```jsxgraph
{"title":"Equilibrium p\u2013n junction energy bands","boundingBox":[-5.5,3.5,5.5,-2.5],"axis":true,"polylines":[{"points":[[-5,3],[-4,3],[-3,3],[-2,2.85],[-1,2.35],[0,1.5],[1,0.65],[2,0.5],[3,0.5],[4,0.5],[5,0.5]],"stroke":"#16788a"},{"points":[[-5,1],[-4,1],[-3,1],[-2,0.8500000000000001],[-1,0.3500000000000001],[0,-0.5],[1,-1.35],[2,-1.5],[3,-1.5],[4,-1.5],[5,-1.5]],"stroke":"#d97706"},{"points":[[-5,1],[-4,1],[-3,1],[-2,1],[-1,1],[0,1],[1,1],[2,1],[3,1],[4,1],[5,1]],"stroke":"#475569","dashed":true}],"labels":[{"x":3.3,"y":0.65,"text":"Ec"},{"x":3.3,"y":-1.65,"text":"Ev"},{"x":3.3,"y":1.14,"text":"EF"},{"x":0,"y":-2.15,"text":"qV\u2080 \u2022 width W\u2080"}]}
```

#### ii) Forward Bias Condition
Forward bias opposes the built-in potential, reducing the barrier to $q(V_0-V)$ and narrowing the depletion region. Under bias, the electron and hole quasi-Fermi levels ($E_{Fn}$ and $E_{Fp}$) are shown separately.

```jsxgraph
{"title":"p\u2013n junction energy bands under forward bias","boundingBox":[-5.5,3.5,5.5,-2.5],"axis":true,"polylines":[{"points":[[-5,3],[-4,3],[-3,3],[-2,2.95],[-1,2.8],[0,2.55],[1,2.3],[2,2.2],[3,2.2],[4,2.2],[5,2.2]],"stroke":"#16788a"},{"points":[[-5,1],[-4,1],[-3,1],[-2,0.9500000000000002],[-1,0.7999999999999998],[0,0.5499999999999998],[1,0.2999999999999998],[2,0.20000000000000018],[3,0.20000000000000018],[4,0.20000000000000018],[5,0.20000000000000018]],"stroke":"#d97706"},{"points":[[-5,1.2],[-4,1.2],[-3,1.2],[-2,1.2],[-1,1.2],[0,1.2],[1,1.2],[2,1.2],[3,1.2],[4,1.2],[5,1.2]],"stroke":"#475569","dashed":true},{"points":[[-5,1.8],[-4,1.8],[-3,1.8],[-2,1.8],[-1,1.8],[0,1.8],[1,1.8],[2,1.8],[3,1.8],[4,1.8],[5,1.8]],"stroke":"#64748b","dashed":true}],"labels":[{"x":3.2,"y":2.35,"text":"Ec"},{"x":3.2,"y":0.15,"text":"Ev"},{"x":-3.7,"y":1.37,"text":"EFp"},{"x":3.5,"y":1.97,"text":"EFn"},{"x":0,"y":-2.15,"text":"q(V\u2080\u2212V) \u2022 narrower W"}]}
```

#### iii) Reverse Bias Condition
Reverse bias adds to the built-in potential, increasing the barrier to $q(V_0+V_R)$ and widening the depletion region. The quasi-Fermi levels separate under bias.

```jsxgraph
{"title":"p\u2013n junction energy bands under reverse bias","boundingBox":[-5.5,3.5,5.5,-2.5],"axis":true,"polylines":[{"points":[[-5,3.8],[-4,3.8],[-3,3.8],[-2,3.6],[-1,2.9],[0,1.8],[1,0.7],[2,0.4],[3,0.4],[4,0.4],[5,0.4]],"stroke":"#16788a"},{"points":[[-5,1.7999999999999998],[-4,1.7999999999999998],[-3,1.7999999999999998],[-2,1.6],[-1,0.8999999999999999],[0,-0.19999999999999996],[1,-1.3],[2,-1.6],[3,-1.6],[4,-1.6],[5,-1.6]],"stroke":"#d97706"},{"points":[[-5,1.2],[-4,1.2],[-3,1.2],[-2,1.2],[-1,1.2],[0,1.2],[1,1.2],[2,1.2],[3,1.2],[4,1.2],[5,1.2]],"stroke":"#475569","dashed":true},{"points":[[-5,0.4],[-4,0.4],[-3,0.4],[-2,0.4],[-1,0.4],[0,0.4],[1,0.4],[2,0.4],[3,0.4],[4,0.4],[5,0.4]],"stroke":"#64748b","dashed":true}],"labels":[{"x":3.2,"y":0.55,"text":"Ec"},{"x":3.2,"y":-1.65,"text":"Ev"},{"x":-3.8,"y":1.36,"text":"EFp"},{"x":3.5,"y":0.56,"text":"EFn"},{"x":0,"y":-2.15,"text":"q(V\u2080+V\u1d63) \u2022 wider W"}]}
```

### Summary of Key Relations
- Built-in Potential Barrier: $qV_0$
- Forward Bias Barrier Height: $q(V_0 - V)$
- Reverse Bias Barrier Height: $q(V_0 + V_R)$

<!-- page 7 | Diode Equation and V-I Characteristics -->

## Diode Equation and V-I Characteristics

### Diode Current Equation Derivation

The diode current equation mathematically relates the net current flowing through a p-n junction diode to the external applied voltage. The total diode current $I$ is composed of the sum of the hole current $I_p$ and the electron current $I_n$ crossing the depletion region:

$$I = I_p + I_n$$

The hole current is proportional to the excess change in minority hole density in the n-region ($\triangle p_n$), and the electron current is proportional to the excess change in minority electron density in the p-region ($\triangle n_p$).

According to the Boltzmann relation, the equilibrium hole density in the p-region is given by:

$$p_p = p_n e^{\frac{V_B}{V_T}} \quad \text{--- (1)}$$

where $V_B$ is the barrier potential across the depletion layer, and $V_T$ is the voltage equivalent of temperature defined as:

$$V_T = \frac{kT}{e} = \frac{T}{11600}$$

At room temperature ($T = 27^{\circ}\text{C} = 300\text{ K}$), the thermal voltage evaluates to:

$$V_T \approx 26\text{ mV}$$

Under unbiased conditions, the barrier potential equals the built-in potential ($V_B = V_0$). Equation (1) becomes:

$$p_p = p_n e^{\frac{V_0}{V_T}} \quad \text{--- (2)}$$

When a forward bias voltage $V$ is applied, the effective barrier potential decreases to $(V_0 - V)$. The injected minority hole density in the n-region increases from $p_n$ to $(p_n + \triangle p_n)$. Rewriting the Boltzmann relation for the forward-biased condition:

$$p_p = (p_n + \triangle p_n) e^{\frac{V_0 - V}{V_T}}$$

$$p_p = (p_n + \triangle p_n) e^{\frac{V_0}{V_T}} e^{\frac{-V}{V_T}} \quad \text{--- (3)}$$

Equating the expressions for $p_p$ from Equations (2) and (3):

$$p_n e^{\frac{V_0}{V_T}} = (p_n + \triangle p_n) e^{\frac{V_0}{V_T}} e^{\frac{-V}{V_T}}$$

$$p_n = (p_n + \triangle p_n) e^{\frac{-V}{V_T}}$$

$$p_n e^{\frac{V}{V_T}} = p_n + \triangle p_n$$

Solving for the excess minority carrier concentration $\triangle p_n$:

$$\triangle p_n = p_n \left(e^{\frac{V}{V_T}} - 1\right) \quad \text{--- (4)}$$

Using Equation (2), we substitute $n$-side equilibrium density as $p_n = p_p e^{-\frac{V_0}{V_T}}$ into Equation (4):

$$\triangle p_n = p_p e^{-\frac{V_0}{V_T}} \left(e^{\frac{V}{V_T}} - 1\right) \quad \text{--- (5)}$$

Since hole current $I_p \propto \triangle p_n$:

$$I_p = I_{sp} \left(e^{\frac{V}{V_T}} - 1\right)$$

where $I_{sp}$ is a proportionality constant. Similarly, the electron current is:

$$I_n = I_{sn} \left(e^{\frac{V}{V_T}} - 1\right)$$

Combining both components yields the total diode current:

$$I = I_p + I_n = (I_{sp} + I_{sn}) \left(e^{\frac{V}{V_T}} - 1\right)$$

$$I = I_0 \left(e^{\frac{V}{V_T}} - 1\right)$$

where $I_0 = (I_{sp} + I_{sn})$ is the reverse saturation current, which is heavily temperature-dependent. Accounting for material imperfections and recombination effects, the practical diode current equation includes the material constant $\eta$:

$$I = I_0 \left(e^{\frac{V}{\eta V_T}} - 1\right)$$

where $\eta$ is the ideality factor (commonly between 1 and 2; its value depends on the junction and dominant transport mechanism, rather than being fixed solely by whether the diode is silicon or germanium).

### V-I Characteristics of a P-N Junction

The V-I characteristics graphically display the current response of a p-n junction diode under varying external terminal voltages. The voltage $V$ is plotted along the abscissa (x-axis) and the current $I$ along the ordinate (y-axis).

```jsxgraph
{"title":"P\u2013N diode V\u2013I measurement circuit","boundingBox":[0,11,14,0],"axis":false,"points":[{"id":"M","x":10.25,"y":8,"show":false},{"id":"c1","x":11.45,"y":6.5,"show":false},{"id":"c2","x":12.55,"y":6.5,"show":false},{"id":"c3","x":12.55,"y":4.5,"show":false},{"id":"c4","x":11.45,"y":4.5,"show":false},{"id":"V","x":13.5,"y":5.5,"show":false}],"polygons":[{"points":["c1","c2","c3","c4"],"fill":"#ffffff"}],"circles":[{"center":"V","radius":0.46},{"center":"M","radius":0.46}],"polylines":[[[1,8],[2.35,8]],[[2.35,8],[3.1,8]],[[2.35,8],[2.95,8.55]],[[3.1,8],[4,8]],[[1,8],[1,7.1]],[[0.55,6.9],[1.45,6.9]],[[0.7,6.55],[1.3,6.55]],[[0.55,5.9],[1.45,5.9]],[[0.7,5.55],[1.3,5.55]],[[1,5.35],[1,2]],[[1,2],[4,2]],[[4,2],[12,2]],[[4,8],[4,7.15],[3.65,6.85],[4.35,6.55],[3.65,6.25],[4.35,5.95],[3.65,5.65],[4.35,5.35],[4,5.05],[4,2]],[[4,5.85],[5.45,7.35],[5.45,8]],[[5.45,8],[5.85,8],[6.1,8.3],[6.4,7.7],[6.7,8.3],[7,7.7],[7.3,8.3],[7.6,7.7],[7.9,8],[8.54,8]],[[8.54,8],[8.78,8]],[[9.22,8],[9.79,8]],[[10.71,8],[12,8]],[[12,8],[12,6.5]],[[12,6.5],[12,4.5]],[[12,4.5],[12,2]],[[11.45,5.5],[12.55,5.5]],[[12,6.5],[13.5,6.5],[13.5,5.96]],[[13.5,5.04],[13.5,4.5],[12,4.5]]],"labels":[{"x":2.65,"y":9,"text":"K"},{"x":6.8,"y":8.65,"text":"R"},{"x":10.25,"y":8,"text":"mA"},{"x":13.5,"y":5.5,"text":"V"},{"x":12,"y":6,"text":"p"},{"x":12,"y":5,"text":"n"}]}
```

Circuit diagram for studying the V-I characteristics of a p-n junction diode in forward bias. A DC battery source is connected in series with an open key labeled 'K'. A potential divider potentiometer circuit supplies a variable forward bias voltage across the diode.

The operation divides into three distinct regions:

1. **Zero Bias (No Bias) Region**: When the external voltage is zero (key $K$ open), the internal barrier potential prevents net carrier flow. The net circuit current is zero, corresponding to the origin in the characteristic curves.

2. **Forward Bias Region**: The p-n junction is connected with positive terminal to the p-type and negative to the n-type. The external field opposes and reduces the internal barrier potential. Initially, current grows very slowly (region OA) as voltage is consumed overcoming the potential barrier. Once the applied voltage exceeds the knee voltage, current increases exponentially and rapidly (region AB), and the diode operates as a normal low-resistance conductor. This region is utilized for rectification and signal amplification.

3. **Reverse Bias Region**: The p-n junction is connected with negative terminal to the p-type and positive to the n-type. The barrier potential and depletion width increase. Only a minuscule reverse saturation current ($I_0$) flows due to thermally generated minority carriers (region OC). If the reverse voltage is raised excessively, high-energy minority carriers induce impact ionization, causing an avalanche breakdown where current surges and resistance drops abruptly.

```jsxgraph
{"title":"Schematic p\u2013n diode I\u2013V characteristic (not to scale)","boundingBox":[-15,5,1.5,-4],"axis":true,"polylines":[[[-15,-4],[-14.8,-1.5],[-14,-0.25],[-10,-0.15],[-5,-0.12],[-2,-0.1],[0,0],[0.45,0.04],[0.65,0.1],[0.78,0.35],[0.9,1.0],[1.05,2.5],[1.2,5]]],"points":[{"id":"knee","x":0.65,"y":0.1,"label":"A"},{"id":"forward","x":1.05,"y":2.5,"label":"B"},{"id":"breakdown","x":-15,"y":-4,"label":"C"}]}
```
Reverse bias V-I characteristic graph showing knee voltage, point A, B, and breakdown voltage at point C.

### Important Diode Terminology

- **Thermal Voltage ($V_T$)**: The voltage equivalent of temperature, equal to $kT/e$ (approx. $26\text{ mV}$ at $300\text{ K}$). It scales the exponential voltage dependence of current.
- **Reverse Saturation Current ($I_0$)**: A tiny leakage current flowing under reverse bias caused by minority carrier drift across the depletion region. It is independent of applied reverse voltage but highly sensitive to temperature.
- **Knee Voltage**: A practical approximation for the forward voltage at which current becomes appreciable. A silicon diode is often approximated as having a $0.7\text{ V}$ drop and a germanium diode about $0.3\text{ V}$, but the actual current varies continuously and exponentially with voltage; there is no perfectly sharp threshold.
- **Peak Inverse Voltage (PIV)**: The largest reverse voltage a diode is designed to withstand in a specified circuit. It is given by the circuit configuration and the individual diode's rating, not by a universal value for silicon or germanium. Exceeding the rated reverse voltage can cause breakdown and damage unless the diode is specifically designed for controlled breakdown.

### Worked Example: Forward Current of a Silicon Diode

Estimate the current for a diode with reverse saturation current $I_s=1.0\times10^{-12}\,\mathrm{A}$, ideality factor $n=1$, forward voltage $V_D=0.60\,\mathrm{V}$, and room-temperature thermal voltage $V_T=kT/q\approx0.0259\,\mathrm{V}$.

$$
I=I_s\left(e^{V_D/(nV_T)}-1\right)
  =10^{-12}\left(e^{0.60/0.0259}-1\right)\,\mathrm{A}
  \approx 1.2\times10^{-2}\,\mathrm{A}=12\,\mathrm{mA}.
$$

The exponent is dimensionless because both $V_D$ and $V_T$ are voltages. Since $V_D\gg V_T$, the minus-one term is negligible here. This idealized estimate ignores series resistance and self-heating, which limit current in a practical circuit.
