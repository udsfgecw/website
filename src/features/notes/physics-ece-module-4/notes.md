<!-- page 1 | Start here -->

## Module IV: Laser and Fiber Optics

Master the fundamental quantum processes of lasers, examine structural and operational details of Ruby and semiconductor lasers, and analyze the principles, types, and mathematical formulations of optical fiber communication systems.

**Before you start:** Basic electromagnetic wave propagation; Elementary atomic energy levels and Boltzmann distribution; Total internal reflection and basic trigonometry.

### Your path through this module

1. **Fundamentals of Laser and Interaction of Radiation with Matter**: Light amplification occurs when stimulated emission dominates spontaneous emission under population inversion conditions.
2. **Population Inversion, Metastable States, and Pumping**: Metastable states provide longer lifetimes allowing atoms to accumulate for population inversion.
3. **Basic Components of a Laser System**: An optical resonator uses feedback mirrors to multiply photons through resonant paths.
4. **Ruby Laser and Semiconductor Laser**: Semiconductor lasers achieve population inversion through high forward bias current across a p-n junction.
5. **Principles and Structure of Optical Fibers**: Light is guided through an optical fiber via repeated total internal reflections at the core-cladding boundary.
6. **Fiber Optic Communication and Numerical Aperture Derivations**: Numerical aperture quantifies the light gathering capacity of an optical fiber based on core and cladding refractive indices.

<!-- page 2 | Fundamentals of Laser and Interaction of Radiation with Matter -->

## Fundamentals of Laser and Interaction of Radiation with Matter

Bridge: Having completed foundational physics, we now explore the interaction of radiation with matter to understand light amplification.

The new idea: Light amplification occurs when stimulated emission dominates spontaneous emission under population inversion conditions.

Objectives: State the key characteristics of laser radiation: directionality, monochromaticity, coherence, and brightness; Describe absorption, spontaneous emission, and stimulated emission using energy level diagrams; Write expressions for transition rates in terms of Einstein coefficients.

### LASER

LASER stands for **Light Amplification by Stimulated Emission of Radiation**.

#### Characteristics or Properties of Laser

1. **Directionality** - The laser beam is highly directional, traveling long distances with negligible divergence.
2. **Monochromaticity** - A laser beam is highly monochromatic, containing only a single frequency or an extremely narrow frequency range.
3. **Coherence** - The laser beam is coherent to an extraordinary degree, meaning all photons are in phase with one another in space and time.
4. **Brightness** - The laser beam is highly intense and bright as compared to an ordinary source of light because energy is concentrated in a narrow beam and narrow frequency band.

---

### Quantum Processes of Interaction of Radiation with Matter

Consider an atom which has only two energy states $E_1$ and $E_2$. $E_1$ is the ground state while $E_2$ is the excited state. Let $N_1$ and $N_2$ be the number of atoms in $E_1$ and $E_2$ levels respectively. Under normal thermodynamic equilibrium conditions, higher energy implies lesser population; hence, $N_1 > N_2$. On exposing this system to a radiation having a stream of photons of energy $h\nu$, three distinct quantum processes may occur: Absorption, Spontaneous Emission, and Stimulated Emission.

#### 1. Induced Absorption

An atom in the ground level absorbs an incident photon of energy $h\nu$ and transitions to the higher excited level. This process is called induced absorption. The process may be expressed as:

$$A + h\nu = A^*$$

Where $A$ is an atom in the lower state and $A^*$ is an excited atom.

![Absorption process energy level diagram](/assets/notes/ece/s1/physics/module-4/p002-1-clean.webp)

The rate of absorption is directly proportional to the energy density of the incident radiation $U(\nu)$ and the number of atoms in the ground level ($N_1$).

$$\text{Rate of absorption} \propto N_1 U(\nu)$$
$$\text{Rate of absorption} = B_{12} N_1 U(\nu)$$

Where $B_{12}$ is a constant called the Einstein coefficient for absorption, $N_1$ is the number of particles in the ground state, and $U(\nu)$ is the radiation energy density.

#### 2. Spontaneous Emission

The process in which an excited atom emits a photon by itself, without any external stimulus, is called spontaneous emission.

An atom in the excited state can stay in the higher energy level only for a finite, short lifetime. If it is not stimulated by any external agent, the excited atom spontaneously undergoes a transition to the lower energy level. During this transition, it gives up its excess energy in the form of a photon. The process may be expressed as:

$$A^* = A + h\nu$$

![Spontaneous emission energy level transition diagram](/assets/notes/ece/s1/physics/module-4/p003-1-clean.webp)

The rate of spontaneous emission is proportional to the number of atoms per unit volume in the excited level ($N_2$).

$$\text{Rate of spontaneous emission} \propto N_2$$
$$\text{Rate of spontaneous emission} = A_{21} N_2$$

Where $A_{21}$ is called the Einstein coefficient for spontaneous emission, and $N_2$ is the number of particles in the excited state.

#### 3. Stimulated Emission

An atom in the excited state interacts with an external photon of matching energy and makes a transition to the lower level with the emission of a second identical photon. This is called stimulated emission.

The process may be expressed as:

$$A^* + h\nu = A + 2h\nu$$

![Diagram showing stimulated emission before and after](/assets/notes/ece/s1/physics/module-4/p004-1-clean.webp)

The rate of transition to the lower energy level via stimulated emission is directly proportional to the number of atoms per unit volume in the excited level $N_2$ and the energy density of the interacting photon field $U(\nu)$:

$$\text{Rate of stimulated emission} \propto N_2 U(\nu)$$
$$\text{Rate of stimulated emission} = B_{21} N_2 U(\nu)$$

Where $B_{21}$ is called the Einstein coefficient for stimulated emission, $N_2$ is the number of particles in the excited state, and $U(\nu)$ is the energy density of the interacting photon field. In a laser system, optical amplification takes place primarily due to stimulated emissions.

---

### Comparison Between Spontaneous Emission and Stimulated Emission

| Spontaneous Emission | Stimulated Emission |
|---|---|
| 1. It happens naturally without requiring any external stimulus. | 1. The emission process is triggered or stimulated by an incident photon of matching frequency. |
| 2. Emitted light waves have random phase relationships and lack phase coherence. | 2. Emitted light waves have a definite phase relationship with the stimulating photon and are strictly coherent. |
| 3. Emitted waves propagate in random, omnidirectional patterns. | 3. Emitted light travels in the same direction as the incident photon, ensuring high directionality. |
| 4. Rate of emission is proportional only to the number of atoms in the excited state ($N_2$). | 4. Rate of emission is proportional to both the energy density of incident radiation and $N_2$. |
| 5. Light emitted by spontaneous emission is incoherent. | 5. Light emitted by stimulated emission is highly coherent. |
| 6. Conventional light sources (e.g., incandescent bulbs) emit light via spontaneous emission. | 6. Light from a LASER is the direct result of stimulated emission. |
| 7. Photons of slightly different frequencies are generated, resulting in non-monochromatic light. | 7. The spread of photon frequencies is extremely narrow, making the output nearly monochromatic. |
| 8. Net intensity is given by $I_T = NI$, where $N$ is the number of emitting atoms and $I$ is photon intensity. | 8. As all photons are in phase, they constructively interfere, producing an intensity $I_T = N^2 I$. |
| 9. Planes of polarization are oriented randomly; hence, conventional light is unpolarized. | 9. Planes of polarization are identical for all generated photons, yielding polarized laser light. |

<!-- page 3 | Population Inversion, Metastable States, and Pumping -->

## Population Inversion, Metastable States, and Pumping

Bridge: Knowing the emission processes, we now examine how to alter thermal equilibrium to achieve population inversion.

The new idea: Metastable states provide longer lifetimes allowing atoms to accumulate for population inversion.

### Objectives
- Explain the necessity of population inversion and metastable states.
- Compare different pumping techniques: optical, electrical, chemical, and electron-beam pumping.
- Apply Boltzmann distribution to thermal equilibrium populations.

### Concepts to Teach
- **Boltzmann distribution:** Relates the population of energy levels at thermal equilibrium.
- **Metastable state:** An excited energy state with an unusually long lifetime.
- **Pumping process:** The method of exciting atoms from a lower to a higher energy level.
- **Optical and electrical pumping:** Specific energy transfer mechanisms.

---

### Population Inversion

Under normal thermal equilibrium, the population of atoms in energy levels follows the Boltzmann distribution. Let $N_1$ and $N_2$ be the populations of atoms in the lower energy level $E_1$ and higher energy level $E_2$ respectively. According to Boltzmann's distribution, the ratio is given by:
$$\frac{N_2}{N_1} = e^{-(E_2-E_1)/KT} = e^{-h\nu/KT}$$

Where:
- $T$ = absolute temperature in Kelvin (\text{K})
- $K$ = Boltzmann's constant ($1.38 \times 10^{-23} \text{ J/K}$)
- $h\nu = E_2 - E_1$ = energy difference between the states

Since $E_2 > E_1$ and temperature $T > 0$, the exponential term is less than 1, meaning $N_2 < N_1$. This indicates that the ground state or lower energy level always contains more atoms than the excited state in thermal equilibrium.

However, for light amplification via stimulated emission to dominate, we must achieve **population inversion**, a non-equilibrium state where the population of the higher energy level exceeds that of the lower energy level ($N_2 > N_1$).

### Metastable State

Normally, the lifetime of an ordinary excited state is extremely short (on the order of $10^{-8}$ seconds). Atoms spontaneously decay back to the lower level before a sufficient number can accumulate, making population inversion impossible through a simple two-level system.

To sustain population inversion, an energy level with a significantly longer lifetime (typically $10^{-3}$ to $10^{-2}$ seconds)—known as a **metastable state**—is required. Atoms remain trapped in this excited state long enough to allow a massive accumulation of population inversion when continuously supplied with energy from an external source.

### Pumping Process

The method of transferring atoms from a lower energy level to a higher energy level by supplying external energy is called **pumping**. Various lasers utilize different types of pumping mechanisms depending on their active medium:

1. **Optical Pumping:** Utilizes intense light energy (such as from a flashlamp or another laser) to excite atoms. This is widely used in solid-state lasers like the Ruby laser.
2. **Electrical Pumping:** Uses a high-voltage electric discharge through a gas medium to excite atoms via inelastic electron-atom collisions. This is employed in gas lasers like the He-Ne laser.
3. **Chemical Pumping:** Achieves population inversion directly through the energy released in exothermic chemical reactions.
4. **Electron Beam Pumping:** Involves bombarding a semiconductor chip with a high-energy beam of fast-moving electrons, exciting charge carriers from the valence band to the conduction band. This is used in semiconductor lasers.

<!-- page 4 | Basic Components of a Laser System -->

## Basic Components of a Laser System

Bridge: Having established population inversion requirements, we study how optical cavities sustain stimulated emission.

The new idea: An optical resonator uses feedback mirrors to multiply photons through resonant paths.

### 1. Active Medium and Core Components

The three basic components of a laser system are the active medium, the pumping agent, and the optical resonator.

#### Active Medium
An active medium is a medium which, when excited, reaches the state of population inversion and promotes stimulated emissions leading to light amplification. Active mediums are different in different lasers:
- In a ruby laser, $\text{Cr}^{3+}$ ions (Chromium ions) serve as active centers.
- In a $\text{He-Ne}$ laser, $\text{Ne}$ atoms serve as active centers.

#### Pumping Process
For achieving and maintaining the conditions of population inversion, we must continuously raise atoms from the lower energy level to the upper energy level. The pump is an external source that supplies the energy needed to transfer the laser medium into the state of population inversion.

Different pumping techniques are used for different types of lasers:
1. **Optical Pumping:** The method of achieving population inversion using light energy. This method is used in solid-state lasers like the ruby laser.
2. **Electrical Pumping:** The method of achieving population inversion using a sufficiently intense electric discharge in the medium. This is used in $\text{He-Ne}$ lasers.
3. **Chemical Pumping:** Population inversion is achieved by exothermic chemical reactions.
4. **Electron Beam Pumping:** Used in semiconductor lasers. A beam of fast-moving electrons is made to pass through a semiconductor chip, raising electrons in the valence band to the conduction band to produce population inversion.

### 2. Optical Resonator

In a laser system, an optical resonator produces a highly directional and highly intense laser beam. In an optical resonator, the number of photons is multiplied due to stimulated emission.

**Structure of an Optical Resonator:** An optical resonator is a cavity consisting of two reflecting mirrors and an active medium. The active medium is placed between the mirrors. One mirror is fully reflecting and the other one is partially reflecting.

```jsxgraph
{"title":"Laser resonant cavity","boundingBox":[0,9,12,0],"axis":false,"points":[{"id":"l1","x":2,"y":2.7,"show":false},{"id":"l2","x":2,"y":6.3,"show":false},{"id":"r1","x":8,"y":2.7,"show":false},{"id":"r2","x":8,"y":6.3,"show":false},{"id":"ar1","x":3.1,"y":3.6,"show":false},{"id":"ar2","x":7.1,"y":3.6,"show":false},{"id":"ar3","x":3.1,"y":4.5,"show":false},{"id":"ar4","x":7.1,"y":4.5,"show":false},{"id":"ar5","x":3.1,"y":5.4,"show":false},{"id":"ar6","x":7.1,"y":5.4,"show":false},{"id":"out1","x":8,"y":4.5,"show":false},{"id":"out2","x":11,"y":4.5,"show":false}],"polylines":[[[2,2.7],[2,6.3]],[[8,2.7],[8,6.3]],[[3,3.1],[7,3.1],[7,5.9],[3,5.9],[3,3.1]]],"arrows":[{"from":"ar1","to":"ar2"},{"from":"ar3","to":"ar4"},{"from":"ar5","to":"ar6"},{"from":"out1","to":"out2"}],"labels":[{"x":2,"y":7.1,"text":"Fully reflecting mirror"},{"x":5,"y":2.25,"text":"Active medium (gain)"},{"x":8,"y":7.1,"text":"Partially reflecting mirror"},{"x":10,"y":5.1,"text":"Laser output"}]}
```

**Working:** We first activate the active medium so that photons are produced due to stimulated emission. Photons get reflected at the two mirrors and travel several times in between them. Finally, the photons are aligned parallel to the axis of the mirrors. Only those photons which are aligned parallel to the axis can escape through the partially reflecting mirror. Amplification of light takes place in the space between two reflecting surfaces called the resonant cavity.

### 3. Einstein Coefficients and Laser Conditions

Using Einstein coefficients, we can predict the possibility of stimulated emission. The ratio of spontaneous emission to stimulated emission can be calculated using the rate equations:
$$\frac{\text{Rate of spontaneous emission}}{\text{Rate of stimulated emission}} = \frac{A_{21} N_2}{B_{21} u(\nu) N_2}$$

On simplification and rearranging, the ratio of spontaneous emission to stimulated emission becomes:
$$R = e^{h\nu/(kT)} - 1$$

In order to make stimulated emission dominant over spontaneous emission, we need:
1. **Large radiation density $u_\nu$:** To make $u_\nu$ large, feedback is provided by placing mirrors to increase radiation density.
2. **Population inversion ($N_2 > N_1$):** The number of atoms in the upper excited state must exceed the number in the lower state.
3. **Small ratio $\frac{A_{21}}{B_{21}}$:** To realize a small ratio, we choose the excited state to be a metastable state.

The Einstein coefficients play a critical role in calculating quantities like the threshold population required for any laser system.

<!-- page 5 | Ruby Laser and Semiconductor Laser -->

## Ruby Laser and Semiconductor Laser

Bridge: Having learned laser components, we examine practical solid-state and semiconductor laser devices and their diverse applications.

The new idea: Semiconductor lasers achieve population inversion through high forward bias current across a p-n junction.

Objectives: Describe the construction and working of a three-level Ruby laser; Explain the operation of a semiconductor diode laser and its energy band transitions; Calculate threshold currents and emission wavelengths using band gap energy.

Concepts to teach: Ruby rod ($\text{Al}_2\text{O}_3$ doped with $\text{Cr}^{3+}$); Xenon flash tube; Pulsed laser output; Semiconductor laser threshold current $I_{\text{th}}$; Band gap $E_{\text{g}} = h\nu = \frac{ch}{\lambda}$.

### Ruby Laser

Ruby laser is a solid state laser fabricated by T.H. Maiman in 1960. It operates on a three-level energy scheme.

#### Construction
The three basic components of a laser system are the active medium, pumping process, and resonant cavity, which are realized in a ruby laser as follows:

1. **Active Medium:** Ruby is a crystalline solid of aluminum oxide ($\text{Al}_2\text{O}_3$) doped with chromium sesquioxide ($\text{Cr}_2\text{O}_3$). The chromium ions ($\text{Cr}^{3+}$) replace some of the aluminum ions ($\text{Al}^{3+}$). This gives the transparent crystal a pink or red color depending on the $\text{Cr}^{3+}$ ion concentration. The length of the ruby rod varies from $2\text{ cm}$ to $25\text{ cm}$ and its diameter varies from $1\text{ cm}$ to $2\text{ cm}$.
2. **Pumping Process:** Optical pumping is used to excite the chromium ions. The ruby rod is surrounded by a helical quartz tube containing Xenon gas at low pressure. Electrical discharge is maintained inside the tube through a capacitor bank. The flash of the Xenon tube produces optical pumping lasting for several milliseconds. Only a part of this energy is utilized to pump the $\text{Cr}^{3+}$ ions; the remaining energy heats up the apparatus, necessitating an external cooling mechanism.
3. **Resonant Cavity:** The ends of the ruby rod are ground and polished flat, with one end completely silvered (fully reflecting) and the other partially silvered. These parallel ends form an optical resonant cavity.

![Diagram of a Ruby laser setup showing xenon flash tube, ruby rod, fully reflecting and partially reflecting ends, and cooling system.](/assets/notes/ece/s1/physics/module-4/p008-1-clean.webp)

#### Working
Chromium atoms in the ruby absorb green and blue light from the Xenon flash tube.

```jsxgraph
{"title":"Energy levels and transitions in a ruby laser","boundingBox":[-2,12,12,0],"axis":false,"points":[{"id":"e2l","x":2,"y":10,"show":false},{"id":"e2r","x":5.2,"y":10,"show":false},{"id":"e1l","x":2,"y":8.1,"show":false},{"id":"e1r","x":5.2,"y":8.1,"show":false},{"id":"ml","x":2,"y":5.4,"show":false},{"id":"mr","x":5.2,"y":5.4,"show":false},{"id":"gl","x":2,"y":2,"show":false},{"id":"gr","x":8.2,"y":2,"show":false},{"id":"pump1b","x":2.8,"y":2.2,"show":false},{"id":"pump1t","x":2.8,"y":8.1,"show":false},{"id":"pump2b","x":4.3,"y":2.2,"show":false},{"id":"pump2t","x":4.3,"y":10,"show":false},{"id":"nr2t","x":5.7,"y":10,"show":false},{"id":"nr2b","x":5.7,"y":5.4,"show":false},{"id":"nr1t","x":6.1,"y":8.1,"show":false},{"id":"nr1b","x":6.1,"y":5.4,"show":false},{"id":"laserTop","x":6.5,"y":5.4,"show":false},{"id":"laserBottom","x":6.5,"y":2.2,"show":false},{"id":"photonEnd","x":9.2,"y":5.4,"show":false}],"polylines":[[[2,10],[5.2,10]],[[2,8.1],[5.2,8.1]],[[2,5.4],[5.2,5.4]],[[2,2],[8.2,2]]],"arrows":[{"from":"pump1b","to":"pump1t"},{"from":"pump2b","to":"pump2t"},{"from":"nr1t","to":"nr1b"},{"from":"laserTop","to":"laserBottom"},{"from":"laserTop","to":"photonEnd"}],"labels":[{"x":3.6,"y":10.5,"text":"E₂ (excited band)"},{"x":3.6,"y":8.6,"text":"E₁ (excited band)"},{"x":3.6,"y":6.35,"text":"M (metastable)"},{"x":1.2,"y":1.5,"text":"G (ground)"},{"x":0.5,"y":4.6,"text":"λ = 4200 Å"},{"x":0.5,"y":3.5,"text":"λ = 5500 Å"},{"x":8.5,"y":9.3,"text":"Non-radiative transition"},{"x":9.6,"y":6.1,"text":"Laser output"},{"x":8.5,"y":4.5,"text":"λ = 6943 Å"}]}
```

- Upon absorbing optical energy, the chromium ions are raised from the ground state $G$ to broad excited energy bands $E_1$ and $E_2$.
- The ions residing in bands $E_1$ and $E_2$ possess a very short lifetime. They undergo fast, non-radiative transitions down to a metastable state $M$, which has a much longer lifetime (approximately $3.5\text{ ms}$). Due to this long lifetime, atoms accumulate in state $M$, establishing a population inversion between the metastable state $M$ and the ground state $G$.
- Once population inversion is achieved, lasing action is triggered by spontaneously emitted photons, causing stimulated emission that brings atoms back to the ground state.
- Pumping is continuously re-established to maintain pulsed laser output. The duration of each optical pulse is about a microsecond, producing a high-intensity, monochromatic beam that emerges through the partially reflecting surface.

---

### Semiconductor Laser

#### Construction

![Construction of a semiconductor laser diode](/assets/notes/ece/s1/physics/module-4/p010-1-clean.webp)

Semiconductor laser diodes are extremely small in size, with side dimensions on the order of $1\text{ mm}$. The p-n junction lies in the horizontal plane through the center. The top and bottom faces are metallized to provide ohmic contacts for passing current through the diode. The front and rear faces are polished parallel to each other and perpendicular to the junction to act as the resonant cavity. The other two opposite faces are roughened to suppress transverse lasing. The active region consists of an ultrathin layer of about $1\text{ }\mu\text{m}$ thickness.

#### Working and Population Inversion

![Energy band diagram of a semiconductor laser under forward bias](/assets/notes/ece/s1/physics/module-4/p010-2-clean.webp)

In a semiconductor laser, population inversion is achieved when more energy states are occupied by carriers in the conduction band than in the valence band. Under high forward bias, electrons are injected from the n-side into the p-side, and holes are injected from the p-side into the n-side.

- **Spontaneous Emission:** At low forward bias currents, injected electrons and holes recombine across the junction, causing spontaneous emission. The device functions primarily as a Light Emitting Diode (LED).
- **Stimulated Emission:** At high forward bias currents, stimulated emission becomes dominant, and the device functions as a laser. The threshold for this transition is characterized by the threshold current density $I_{\text{th}}$, which is approximately $50\text{ kA/cm}^2$ for Gallium Arsenide ($\text{GaAs}$) diodes at room temperature.

#### Mathematical Formulation
The minimum wavelength $\lambda$ of radiation emitted by a semiconductor laser having a band gap energy $E_{\text{g}}$ is given by:

$$E_{\text{g}} = h\nu = \frac{ch}{\lambda}$$

Where:
- $E_{\text{g}}$ is the band gap energy (in Joules or electron-volts)
- $h$ is Planck's constant ($6.626 \times 10^{-34}\text{ J}\cdot\text{s}$)
- $\nu$ is the frequency of emitted radiation (in $\text{Hz}$)
- $c$ is the speed of light in vacuum ($3 \times 10^8\text{ m/s}$)
- $\lambda$ is the emission wavelength (in meters)

### Advantages of Semiconductor Lasers
1. Extremely compact size.
2. Direct electrical pumping via low-power currents (approx. $10\text{ mA}$ at $20\text{ V}$).- High electrical-to-optical conversion efficiency exceeding $50\%$.
3. Direct high-frequency modulation capability in the gigahertz range, making them ideal for optical fiber communication.
4. Easy integration with microwave oscillators, optical components, and integrated circuits.

---

### Comparative Analysis

#### Difference Between Ordinary Light and Laser Light

| Laser Light | Ordinary Light |
| --- | --- |
| 1. Angular spread is extremely small. | 1. Angular spread is large. |
| 2. Highly directional. | 2. Non-directional (divergent). |
| 3. Highly intense. | 3. Less intense. |
| 4. Coherent and in-phase. | 4. Incoherent and out-of-phase. |
| 5. Highly monochromatic. | 5. Polychromatic. |
| 6. Examples: He-Ne laser, Ruby laser. | 6. Examples: Sunlight, Sodium vapor lamp. |

#### Difference Between LED and Laser Diode

| LED | Semiconductor Laser |
| --- | --- |
| 1. Governed by spontaneous emission. | 1. Governed by stimulated emission. |
| 2. Junction facets do not need to be polished. | 2. Facets must be polished parallel to form a resonator. |
| 3. Low optical power output. | 3. High optical power output. |
| 4. Lower luminous intensity. | 4. Very high spatial and temporal intensity. |
| 5. Requires low current density. | 5. Requires high threshold current density ($I_{\text{th}}$). |

---

### Applications of Lasers

#### 1. Applied Science and Engineering
- **Medical Applications:** Utilized as precision surgical knives for bloodless and painless operations, ophthalmological procedures (e.g., treatment of detached retinas, cataracts, and glaucoma using $0.01\text{ s}$ pulses), and physical therapy.
- **Microelectronic Applications:** Used for precise trimming of integrated circuit components and microelectronic fabrication using pulsed Nd:YAG lasers.
- **Industrial Processing:** Applied in high-speed hole drilling (pulse durations $0.1$ to $1\text{ ms}$, power densities $10^4$ to $10^5\text{ W/mm}^2$), precision laser cutting of metals and ceramics, and contactless laser welding in normal atmospheres without chemical contamination or mechanical distortion.
- **Material Heat Treatment:** Surface hardening of automobile engine parts (e.g., cylinder blocks, gears) through localized heating and rapid cooling.

#### 2. Pure Science
- **Physics:** Investigation of non-linear optical phenomena and high-resolution laser spectroscopy.
- **Chemistry:** Selective excitation of specific atoms and molecules using tunable lasers to control chemical reaction pathways and study kinetics.
- **Biology:** Targeted destruction of specific cellular structures and analysis of fast biochemical processes using ultrashort laser pulses.

<!-- page 6 | Principles and Structure of Optical Fibers -->

## Principles and Structure of Optical Fibers

Transitioning from laser light sources, we investigate how light is guided over long distances using optical fibers. Light is guided through an optical fiber via repeated total internal reflections at the core-cladding boundary.

### Principle of Total Internal Reflection (TIR)

The fundamental principle underlying optical fiber communication is **Total Internal Reflection**. If the angle of incidence in the denser medium is greater than the critical angle $\theta_c$, the incident ray is reflected back into the same medium completely.

```jsxgraph
{"title":"Refraction, critical angle, and total internal reflection","boundingBox":[0,11,12,0],"axis":false,"points":[{"id":"A","x":3,"y":7,"show":false},{"id":"B","x":6,"y":7,"show":false},{"id":"C","x":9,"y":7,"show":false},{"id":"nA","x":3,"y":4,"show":false},{"id":"rA","x":5.4,"y":10.3,"show":false},{"id":"iB","x":4,"y":3,"show":false},{"id":"rB","x":9.6,"y":7,"show":false},{"id":"iC","x":6.5,"y":3,"show":false},{"id":"rC","x":11.5,"y":3,"show":false}],"polylines":[[[0.5,7],[11.5,7]],{"points":[[3,2.5],[3,10.5]],"dashed":true},{"points":[[6,2.5],[6,10.5]],"dashed":true},{"points":[[9,2.5],[9,10.5]],"dashed":true}],"arrows":[{"from":"nA","to":"A"},{"from":"A","to":"rA"},{"from":"iB","to":"B"},{"from":"B","to":"rB"},{"from":"iC","to":"C"},{"from":"C","to":"rC"}],"labels":[{"x":2.6,"y":7.6,"text":"A"},{"x":5.6,"y":7.6,"text":"B"},{"x":9.4,"y":7.6,"text":"C"},{"x":10.1,"y":9.8,"text":"n₂ (rarer)"},{"x":10.1,"y":1.5,"text":"n₁ (denser)"},{"x":1.3,"y":5.4,"text":"i < θc"},{"x":7.4,"y":8.0,"text":"i = θc"},{"x":10.8,"y":4.1,"text":"i > θc"}]}
```

The conditions required for total internal reflection are:
1. Light must travel from an optically denser medium (refractive index $n_1$) to a rarer medium (refractive index $n_2$).
2. The angle of incidence in the denser medium must be greater than the critical angle $\theta_c$.

### Structure of an Optical Fiber

An optical fiber is a cylindrical dielectric waveguide consisting of three concentric coaxial regions:

![Diagram showing the structure of an optical fiber consisting of Core, Cladding, and Protective plastic coating.](/assets/notes/ece/s1/physics/module-4/p015-2-clean.webp)

i) **Core**: The innermost cylindrical region of the optical fiber through which light propagates. It is typically made of high-purity glass or plastic with a refractive index of $n_1$.

ii) **Cladding**: The middle coaxial layer surrounding the core, made of glass or plastic with a lower refractive index $n_2$ (where $n_1 > n_2$). Total internal reflection takes place at the core-cladding interface, trapping light inside the core.

iii) **Protective Coating (Buffer Coating)**: The outermost polymer or plastic layer that protects the glass fiber from mechanical stress, moisture, and physical damage.

### Classification and Comparison of Optical Fibers

Optical fibers are broadly classified based on the refractive index profile of the core and the number of optical modes they support:
1. Step-index single-mode fiber
2. Step-index multimode fiber
3. Graded-index multimode fiber

```jsxgraph
{"title":"Step-index fiber refractive-index profile (normalized)","boundingBox":[-2.6,1.2,2.6,-0.2],"axis":true,"polylines":[[[-2.5,0.5],[-1,0.5],[-1,1],[1,1],[1,0.5],[2.5,0.5]]]}
```

Core has $n_1=1.470$ and radius $a=25\,\mu m$; cladding has $n_2=1.455$. Horizontal coordinate is $r/a$; vertical coordinate is normalized between cladding and core indices.

```jsxgraph
{"title":"Step-index fiber ray paths in the core","boundingBox":[-2.6,1.2,2.6,-1.2],"axis":false,"polylines":[[[-2.4,-0.7],[-1.6,0.7],[-0.8,-0.7],[0,0.7],[0.8,-0.7],[1.6,0.7],[2.4,-0.7]],[[-2.4,0.7],[-1.6,-0.7],[-0.8,0.7],[0,-0.7],[0.8,0.7],[1.6,-0.7],[2.4,0.7]]]}
```

The core boundaries are at $y=\pm1$; the zigzag paths illustrate total internal reflection.
```jsxgraph
{"title":"Graded-index fiber refractive-index profile (normalized)","boundingBox":[-2.6,1.2,2.6,-0.2],"axis":true,"polylines":[[[-2.5,0.5],[-2,0.5],[-1.5,0.5],[-1.2,0.5],[-1,0.5],[-0.8,0.68],[-0.6,0.82],[-0.4,0.92],[-0.2,0.98],[0,1.0],[0.2,0.98],[0.4,0.92],[0.6,0.82],[0.8,0.68],[1,0.5],[1.2,0.5],[1.5,0.5],[2,0.5],[2.5,0.5]]]}
```

Core has $n_1=1.470$ at the axis, decreasing approximately parabolically to $n_2=1.455$ at radius $a=25\,\mu m$; the cladding index is constant.

```jsxgraph
{"title":"Graded-index fiber ray paths in the core","boundingBox":[-2.6,1.2,2.6,-1.2],"axis":false,"polylines":[[[-2.5,0.0],[-2.4167,0.1913],[-2.3333,0.3742],[-2.25,0.5408],[-2.1667,0.6837],[-2.0833,0.7967],[-2.0,0.875],[-1.9167,0.915],[-1.8333,0.915],[-1.75,0.875],[-1.6667,0.7967],[-1.5833,0.6837],[-1.5,0.5408],[-1.4167,0.3742],[-1.3333,0.1913],[-1.25,-0.0],[-1.1667,-0.1913],[-1.0833,-0.3742],[-1.0,-0.5408],[-0.9167,-0.6837],[-0.8333,-0.7967],[-0.75,-0.875],[-0.6667,-0.915],[-0.5833,-0.915],[-0.5,-0.875],[-0.4167,-0.7967],[-0.3333,-0.6837],[-0.25,-0.5408],[-0.1667,-0.3742],[-0.0833,-0.1913],[0.0,0.0],[0.0833,0.1913],[0.1667,0.3742],[0.25,0.5408],[0.3333,0.6837],[0.4167,0.7967],[0.5,0.875],[0.5833,0.915],[0.6667,0.915],[0.75,0.875],[0.8333,0.7967],[0.9167,0.6837],[1.0,0.5408],[1.0833,0.3742],[1.1667,0.1913],[1.25,0.0],[1.3333,-0.1913],[1.4167,-0.3742],[1.5,-0.5408],[1.5833,-0.6837],[1.6667,-0.7967],[1.75,-0.875],[1.8333,-0.915],[1.9167,-0.915],[2.0,-0.875],[2.0833,-0.7967],[2.1667,-0.6837],[2.25,-0.5408],[2.3333,-0.3742],[2.4167,-0.1913],[2.5,-0.0]],[[-2.5,0.6193],[-2.4167,0.6162],[-2.3333,0.5976],[-2.25,0.564],[-2.1667,0.5162],[-2.0833,0.4554],[-2.0,0.3833],[-1.9167,0.3014],[-1.8333,0.2121],[-1.75,0.1173],[-1.6667,0.0197],[-1.5833,-0.0785],[-1.5,-0.1747],[-1.4167,-0.2665],[-1.3333,-0.3516],[-1.25,-0.4278],[-1.1667,-0.4934],[-1.0833,-0.5465],[-1.0,-0.5859],[-0.9167,-0.6106],[-0.8333,-0.6199],[-0.75,-0.6137],[-0.6667,-0.592],[-0.5833,-0.5555],[-0.5,-0.505],[-0.4167,-0.4419],[-0.3333,-0.3676],[-0.25,-0.2841],[-0.1667,-0.1935],[-0.0833,-0.098],[0.0,0.0],[0.0833,0.098],[0.1667,0.1935],[0.25,0.2841],[0.3333,0.3676],[0.4167,0.4419],[0.5,0.505],[0.5833,0.5555],[0.6667,0.592],[0.75,0.6137],[0.8333,0.6199],[0.9167,0.6106],[1.0,0.5859],[1.0833,0.5465],[1.1667,0.4934],[1.25,0.4278],[1.3333,0.3516],[1.4167,0.2665],[1.5,0.1747],[1.5833,0.0785],[1.6667,-0.0197],[1.75,-0.1173],[1.8333,-0.2121],[1.9167,-0.3014],[2.0,-0.3833],[2.0833,-0.4554],[2.1667,-0.5162],[2.25,-0.564],[2.3333,-0.5976],[2.4167,-0.6162],[2.5,-0.6193]]]}
```

The core boundaries are at $y=\pm1$; curved paths illustrate refraction through the graded index.
| Step Index Fiber | Graded Index Fiber |
| --- | --- |
| 1. The refractive index changes abruptly at core to cladding boundary. | 1. The refractive index decreases radially outwards from core to cladding. |
| 2. The diameter of the core is about $50\mu\text{m}$ and cladding is $125\ \mu\text{m}$ for multimode; core is about $10\mu\text{m}$ and cladding is $125\ \mu\text{m}$ for single-mode. | 2. The diameter of the core is about $50\mu\text{m}$ and that of cladding is $125\ \mu\text{m}$ for multimode graded index. |
| 3. Attenuation is more for multimode step index, but very low for single-mode step index. | 3. Attenuation is low. |
| 4. Numerical aperture is higher for multimode step index and very low for single-mode step index. | 4. Numerical aperture is lower compared to step index fibers. |
| 5. Refractive index profile is step-like. | 5. Refractive index profile is parabolic. |
| 6. Bandwidth-distance product is less than $200\text{ MHz}\cdot\text{km}$ for multimode step index. | 6. Bandwidth-distance product is very large, between $200\text{ MHz}\cdot\text{km}$ and $3\text{ GHz}\cdot\text{km}$. |
| 7. Single-mode step index fibers are widely used for long-distance terrestrial transmissions. | 7. Widely used for telephone loop distribution systems. |
| 8. Coupling of single-mode fiber is difficult; multi-mode step index is easier to couple. | 8. Coupling fiber to light sources is more difficult. |

<!-- page 7 | Fiber Optic Communication and Numerical Aperture Derivations -->

## Fiber Optic Communication and Numerical Aperture Derivations

Bridge: Having examined fiber structures, we now analyze their light-gathering mathematical limits and system communication blocks.

The new idea: Numerical aperture quantifies the light gathering capacity of an optical fiber based on core and cladding refractive indices.

### Single Mode vs. Multimode Fiber Comparison

| Single Mode Fiber | Multimode Fiber |
| :--- | :--- |
| 1.) Only one mode of light signal can propagate through the fiber. | 1.) Multimode fiber allows a large number of modes for the light rays travelling through it. |
| 2.) Smaller core diameter. | 2.) It has a larger core diameter. |
| 3.) The difference of refractive indices of core and cladding is very small. | 3.) The difference in refractive indices is larger than the single mode fiber. |
| 4.) No multimodal dispersion. | 4.) There is a multimodal dispersion. |

### Fiber Optic Communication System Block Diagram

Communication systems that carry information through a guided optical fibre cable are called fibre optic communication systems. The information carrying capacity of a communication system is directly proportional to its bandwidth. The major components of an optical communication system are an **Optical Transmitter**, **Optical Fibre transmission line**, and **Optical Receiver**.

![Block diagram of an optical communication system](/assets/notes/ece/s1/physics/module-4/p017-1-clean.webp)

- **Unit 1:** Subscriber's telephone where sound wave is converted into corresponding electrical signal.
- **Unit 2:** Encoder, which converts continuous electric signal into coded digital pulse by means of an analogue-to-digital converter.
- **Unit 3:** Optical transmitter, which usually consists of a semiconductor laser or LED. The diode turns ON and OFF according to the bit stream to be sent, and thus the light source is modulated.
- **Unit 4:** Optical fibre transmission link.
- **Unit 5:** Semiconductor photo detector at the receiving end which converts the optical signal back into electrical pulses.
- **Unit 6:** Decoder, which converts digital pulses into analogue signal with the help of a digital-to-analogue converter.
- **Unit 7:** Subscriber's telephone where sound is reproduced.

### Numerical Aperture and Acceptance Angle

The **Numerical Aperture (NA)** of a fiber is the measure of the light gathering capacity of the fiber. Quantitatively, NA is the measure of the angle over which light is accepted in the fibre and is proportional to the sine of the fiber acceptance angle.

$$\text{NA} = \sqrt{n_1^2 - n_2^2} \quad \text{or} \quad \text{NA} = \sin \alpha_m$$

Where $n_1$ is the refractive index of the core, $n_2$ is the refractive index of the cladding, and $\alpha_m$ represents the acceptance angle.

**Acceptance Angle:** The minimum angle of incidence at the end face of a fibre for which light ray can propagate through it is called the acceptance angle for the fibre.

$$\alpha_m = \sin^{-1}(\text{NA})$$

### Derivation of Numerical Aperture and Acceptance Angle

```jsxgraph
{"title":"Ray propagation in a step-index optical fiber","boundingBox":[0,12,14,0],"axis":false,"points":[{"id":"f1","x":2,"y":4.5,"show":false},{"id":"f2","x":12,"y":4.5,"show":false},{"id":"f3","x":12,"y":7.5,"show":false},{"id":"f4","x":2,"y":7.5,"show":false},{"id":"c1","x":2,"y":7.5,"show":false},{"id":"c2","x":12,"y":7.5,"show":false},{"id":"c3","x":12,"y":8.3,"show":false},{"id":"c4","x":2,"y":8.3,"show":false},{"id":"b1","x":2,"y":3.7,"show":false},{"id":"b2","x":12,"y":3.7,"show":false},{"id":"b3","x":12,"y":4.5,"show":false},{"id":"b4","x":2,"y":4.5,"show":false},{"id":"in","x":0.3,"y":2,"show":false},{"id":"entry","x":2,"y":5.5,"show":false},{"id":"r1","x":5.1,"y":7.4,"show":false},{"id":"r2","x":8.1,"y":4.6,"show":false},{"id":"r3","x":11.1,"y":7.4,"show":false},{"id":"out","x":13.5,"y":5.1,"show":false},{"id":"axis1","x":0.4,"y":5.5,"show":false},{"id":"axis2","x":2,"y":5.5,"show":false}],"polygons":[{"points":["f1","f2","f3","f4"],"fill":"#f0fdf4","stroke":"#16a34a"},{"points":["c1","c2","c3","c4"],"fill":"#dbeafe","stroke":"#2563eb"},{"points":["b1","b2","b3","b4"],"fill":"#dbeafe","stroke":"#2563eb"}],"polylines":[{"points":[[0.4,5.5],[2,5.5]],"dashed":true}],"arrows":[{"from":"in","to":"entry"},{"from":"entry","to":"r1"},{"from":"r1","to":"r2"},{"from":"r2","to":"r3"},{"from":"r3","to":"out"}],"labels":[{"x":7,"y":6,"text":"Core (n\u2081)"},{"x":7,"y":7.9,"text":"Cladding (n\u2082)"},{"x":7,"y":3.3,"text":"Cladding (n\u2082)"},{"x":0.8,"y":1.3,"text":"n\u2080 (air)"},{"x":1.0,"y":6.1,"text":"\u03b1"},{"x":3.2,"y":6.0,"text":"\u03b8"},{"x":5.5,"y":8.8,"text":"\u03c6"}]}
```

![Optical fiber acceptance angle illustration](/assets/notes/ece/s1/physics/module-4/p020-1-clean.webp)

Consider a step index fibre made of a core of refractive index $n_1$ and cladding of refractive index $n_2$ ($n_1 > n_2$). The end faces of the fibre are cut at right angles to the axis of the fibre. A ray of light enters through one end from air into the core at an acceptance angle $\alpha$. After refraction, the ray is incident at the core-cladding interface at an angle $\theta$, which is greater than the critical angle $\varnothing_c$. Hence, it undergoes total internal reflection.

**Theory:**
Refractive index of core with respect to air ($^0n_1$):

$$^0n_1 = \frac{n_1}{n_0} = \frac{\sin \alpha}{\sin \theta}$$

$$n_0 \sin \alpha = n_1 \sin \theta \quad \text{--- (1)}$$

From the geometry of the figure, $\theta = 90^{\circ} - \varnothing$. Substituting $\theta$ into equation (1):

$$n_0 \sin \alpha = n_1 \sin(90^{\circ} - \varnothing) = n_1 \cos \varnothing$$

For critical rays, $\alpha = \alpha_m$, $\varnothing = \varnothing_c$ (critical angle):

$$n_0 \sin \alpha_m = n_1 \cos \varnothing_c \quad \text{--- (2)}$$

The refractive index of core with respect to cladding is:

$$\sin \varnothing_c = \frac{n_2}{n_1}$$

Using the trigonometric identity $\cos \varnothing_c = \sqrt{1 - \sin^2 \varnothing_c}$:

$$\cos \varnothing_c = \frac{\sqrt{n_1^2 - n_2^2}}{n_1} \quad \text{--- (4)}$$

Substituting equation (4) and $n_0 = 1$ (refractive index of air) into equation (2):

$$\sin \alpha_m = n_1 \left( \frac{\sqrt{n_1^2 - n_2^2}}{n_1} \right)$$

$$\text{NA} = \sin \alpha_m = \sqrt{n_1^2 - n_2^2}$$

### Advantages of Optical Fibers Over Ordinary Cables

1. Light weight, small size, and flexibility allow easy handling.
2. No hazards of short circuit compared to copper cables.
3. Very low attenuation at optimum wavelengths.
4. Immune to cross-talk between cables caused by magnetic induction.
5. Safer and easier to install and maintain.
6. Very high bandwidth and immense information carrying capacity.

### Applications of Optical Fibers

- **General:** Defence communication systems (controlling ships, aircraft, missiles), space communication, smoke/pollution detectors, non-destructive testing, security alarms, cable TV, LAN, WAN, and internet infrastructure.
- **Medical:** Endoscopy for internal visualization, detecting tissue abnormalities, ophthalmological retinal reattachment, laser vaporization of arterial plaque, and biosensing (temperature, blood pressure, oxygen saturation).

---

### Solved Numerical Problems

#### Problem 1
**Calculate the numerical aperture (NA), fiber acceptance angle, critical angle, and angle of refraction of an optical fiber having core index $1.470$ and cladding index $1.455$ respectively.**

* **Given:** Core index $n_1 = 1.470$, Cladding index $n_2 = 1.455$
* **Find:** $\text{NA}$, $\alpha_m$, $\theta_c$, $\alpha'$
* **Formula & Substitution:**
  1. $\text{NA} = \sqrt{n_1^2 - n_2^2} = \sqrt{1.470^2 - 1.455^2}$
  2. $\alpha_m = \sin^{-1}(\text{NA})$
  3. $\theta_c = \sin^{-1}\left(\frac{n_2}{n_1}\right)$
  4. $\alpha' = 90^{\circ} - \theta_c$
* **Calculations & Answers:**
  1. $\text{NA} = 0.209$
  2. $\alpha_m = \sin^{-1}(0.209) = 12.1^{\circ}$
  3. $\theta_c = \sin^{-1}\left(\frac{1.455}{1.470}\right) = 81.8^{\circ}$
  4. $\alpha' = 90^{\circ} - 81.8^{\circ} = 8.2^{\circ}$

#### Problem 2
**A fiber cable has an acceptance angle of $30^{\circ}$ and a core refractive index of $1.4$. Calculate the refractive index of the cladding.**

* **Given:** $\alpha_m = 30^{\circ}$, $n_1 = 1.4$
* **Find:** $n_2$
* **Formula & Substitution:**
  $$\sin \alpha_m = \sqrt{n_1^2 - n_2^2} \implies n_2^2 = n_1^2 - \sin^2 \alpha_m$$
  $$n_2^2 = 1.4^2 - \sin^2(30^{\circ})$$
* **Final Answer:** $n_2 = 1.308$

#### Problem 3
**Calculate the numerical aperture (NA), fiber acceptance angle, critical angle, and angle of refraction of optical fiber having core index $1.68$ and cladding index $1.44$ respectively.**

* **Given:** $n_1 = 1.68$, $n_2 = 1.44$
* **Find:** $\text{NA}$, $\alpha_m$, $\theta_c$, $\alpha'$
* **Formula & Substitution:**
  1. $\text{NA} = \sqrt{1.68^2 - 1.44^2}$
  2. $\alpha_m = \sin^{-1}(\text{NA})$
  3. $\theta_c = \sin^{-1}\left(\frac{1.44}{1.68}\right)$
  4. $\alpha' = 90^{\circ} - \theta_c$
* **Calculations & Answers:**
  1. $\text{NA} = 0.865$
  2. $\alpha_m = \sin^{-1}(0.865) = 60^{\circ}$
  3. $\theta_c = \sin^{-1}\left(\frac{1.44}{1.68}\right) = 59^{\circ}$
  4. $\alpha' = 90^{\circ} - 59^{\circ} = 31^{\circ}$
