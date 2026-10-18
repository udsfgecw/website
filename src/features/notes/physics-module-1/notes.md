<!-- page 1 | Start here -->

# Module 1 at a glance

This module answers two questions about electrons in solids.

1. **Why does a copper wire conduct, glass not, and silicon only a little?** We build the answer in three steps: a classical picture (electrons as a gas), then a quantum correction (electrons obey the Pauli principle and Fermi–Dirac statistics), then band theory (the periodic crystal splits energy levels into bands).
2. **Why do some materials lose all resistance when cooled?** That is **superconductivity**, with its critical temperature, critical field, the Meissner effect, two types of superconductor and the BCS explanation.

> **KTU syllabus.** *Electrical conductivity:* classical free electron theory, electrical conductivity in metals, Fermi–Dirac distribution, variation of the Fermi function with temperature, Fermi energy, energy bands, classification of materials into conductor, semiconductor and insulator. *Superconductivity:* transition temperature, critical field, Meissner effect, Type I and Type II superconductors, BCS theory, applications of superconductors.

## What you will be able to do

- Define and use drift velocity, relaxation time, mean free path, mobility, conductivity and resistivity.
- Derive $\sigma=\dfrac{ne^2\tau}{m}$ from the classical free electron theory, and list its failures.
- State the Fermi–Dirac function, sketch it at different temperatures, and define the Fermi energy.
- Explain how energy bands form and use them to classify conductors, semiconductors and insulators.
- Explain the Meissner effect and why $\chi=-1$ in a superconductor.
- Distinguish Type I from Type II superconductors, and describe how BCS theory explains superconductivity.
- Solve the standard numerical problems on conductivity, the Fermi function and critical fields.

## How to use these notes

- Each topic is a short page: **idea → derivation or explanation → worked example → common mistakes.**
- Green boxes hold key ideas. Amber boxes marked **Watch out** hold mistakes that cost marks. Boxes marked **Note on the source** record where the lecture notes were corrected.
- Try each numerical problem yourself before reading the solution.
- The last page has practice problems with answers and a formula sheet.

## Where each topic sits

| Part | Pages |
| --- | --- |
| Electrical conductivity | Conductivity basics, classical theory, its failures and the quantum theory, Fermi–Dirac distribution |
| Energy bands | Band formation, conductors, semiconductors and insulators, numerical problems |
| Superconductivity | Basic properties, critical field and the Meissner effect, Type I and II, BCS theory, applications |

> **Prerequisites.** Ohm's law, Newton's second law and the equations of motion, magnetic field and flux, and the basic idea of the exponential function. The Fermi–Dirac function uses $e^x$ and $\ln x$.

---

<!-- page 2 | Conductivity basics -->

# Electrical conductivity: the basics

## Ohm's law and resistivity

Electrical conductivity measures how easily current passes through a material. For a conductor carrying current $I$, the voltage drop is given by Ohm's law:

$$
V=IR
$$

For a uniform conductor of length $l$ and cross-section $A$, the resistance is proportional to $l$ and inversely proportional to $A$:

$$
R=\rho\,\frac{l}{A}\qquad\Longrightarrow\qquad \rho=\frac{RA}{l}
$$

![A rectangular conductor of length l and cross-sectional area A](/notes/cse/s1/physics/module-1/conductor-block.webp)

The constant $\rho$ is the **resistivity**, with unit $\Omega\,\text{m}$. Its reciprocal is the **conductivity**:

$$
\sigma=\frac1\rho\qquad\text{unit: siemens per metre (S/m)}
$$

## Point form of Ohm's law

For the uniform conductor above, the current density and electric field are

$$
J=\frac{I}{A}\qquad E=\frac{V}{l}
$$

Combining these with $V=IR$ and $R=\rho l/A$ gives

$$
\boxed{J=\sigma E}
$$

This is the **point form of Ohm's law**. It also holds in non-uniform materials, where $J$, $E$ and $\sigma$ vary from point to point: $\sigma(x)=J(x)/E(x)$.

## Classification by conductivity

| Class | Typical conductivity | Examples |
| --- | --- | --- |
| Conductors | about $10^{8}\ \text{S/m}$ | metals and alloys |
| Semiconductors | $10^{4}$ to $10^{-4}\ \text{S/m}$ | silicon, germanium |
| Insulators | about $10^{-12}\ \text{S/m}$ and below | glass, plastics, metal oxides |

## Terms you must know

| Quantity | Meaning | Unit |
| --- | --- | --- |
| Electric field $E$ | force per unit charge, $E=F/q$ | V/m |
| Current density $J$ | current per unit cross-section area, $J=I/A$ | A/m² |
| Drift velocity $v_d$ | average velocity of electrons due to the field, on top of their random thermal motion | m/s |
| Relaxation time $\tau$ | average time between two successive collisions of an electron | s |
| Mean free path $\lambda$ | average distance an electron travels between collisions, $\lambda\approx v\tau$ | m |
| Mobility $\mu$ | drift velocity per unit field, $\mu=v_d/E$ | m²/(V s) |
| Conductivity $\sigma$ | how easily the material conducts, $\sigma=1/\rho$ | S/m |
| Resistivity $\rho$ | how strongly the material opposes current | $\Omega$ m |

> **Watch out.** Do not mix up **current** $I$ (a total, in amperes) with **current density** $J$ (per unit area). Many derivations in this module start from $J$ because it does not depend on the size of the wire.

---

<!-- page 3 | Classical free electron theory -->

# Classical free electron theory (Drude–Lorentz)

## The idea

Developed by Paul Drude (1900) and refined by Hendrik Lorentz, this theory treats the valence electrons of a metal like the molecules of a **gas** trapped in a box formed by the fixed positive ions. It laid the foundation for understanding conduction, even though quantum mechanics later corrected it.

## Assumptions

- A metal consists of fixed **positive ion cores** and **valence electrons** that are free to move through the whole metal. They are not bound to particular atoms.
- The free electrons move randomly, with speeds of order $10^{6}\ \text{m/s}$, like gas molecules, and follow the **Maxwell–Boltzmann** distribution of velocities.
- Electrons obey **Newton's laws** (classical mechanics).
- Electrons collide with the ions (and with each other). Between collisions they travel in straight lines. The average time between collisions is the **relaxation time** $\tau$; the average distance is the **mean free path** $\lambda$.
- These free electrons carry both charge and heat, so they are responsible for electrical and thermal conduction.

## Motion without and with a field

**No field: thermal motion.** Each collision changes the direction of an electron, so it follows a zigzag path. For every electron moving one way there is, on average, another moving the opposite way. The thermal motion therefore gives **no net current**.

**With a field: drift.** Connect the metal to a battery. The electrons feel a force opposite to the field, and a slow net movement, the **drift**, is superimposed on the random motion. The drift is tiny: typically $10^{-4}$ to $10^{-2}\ \text{m/s}$, which is far less than the thermal speed.

## Drift velocity

An electron (charge magnitude $e$, mass $m$) in a field $E$ feels a force of magnitude $eE$, so its acceleration is

$$
a=\frac{eE}{m}
$$

Take an electron to start from rest after each collision. After a time $t$ its velocity is $v=at$. The average time between collisions is $\tau$, so the average (drift) velocity is

$$
v_d=\frac{eE}{m}\,\tau
$$

> **Direction.** Because the electron is negative, the drift is **opposite** to $E$. We write only magnitudes here, so the signs do not clutter the algebra.

## Expression for conductivity

Let $n$ be the number of free electrons per unit volume. In a piece of length $L$ and area $A$ the number of free electrons is $N=nAL$, with total charge $Q=nALe$. All of these cross a section in the time $t=L/v_d$, so the current is

$$
I=\frac{Q}{t}=nAe\,v_d
\qquad\Longrightarrow\qquad
J=\frac{I}{A}=n e\,v_d
$$

Substitute $v_d=\dfrac{eE\tau}{m}$:

$$
J=\frac{ne^2\tau}{m}\,E
$$

Compare with the point form of Ohm's law $J=\sigma E$:

$$
\boxed{\sigma=\frac{ne^2\tau}{m}}
$$

## Mobility

Since $v_d\propto E$ we write $v_d=\mu E$, where the **mobility** is

$$
\mu=\frac{v_d}{E}=\frac{e\tau}{m}\qquad\Longrightarrow\qquad\sigma=ne\mu
$$

## What affects the conductivity

| Factor | Effect |
| --- | --- |
| Number of free electrons $n$ | more free electrons, more conductivity (silver and copper have many) |
| Relaxation time $\tau$ | longer $\tau$ means higher mobility and higher conductivity |
| Temperature | higher $T$ means stronger lattice vibrations (phonons), more scattering, smaller $\tau$ and lower conductivity. Cooling raises conductivity |
| Impurities and defects | foreign atoms and crystal defects scatter electrons and reduce $\tau$ |

> **Watch out.** For metals, resistivity **rises** with temperature (positive temperature coefficient). Do not carry this over to semiconductors: there it is the opposite, as the band theory pages explain.

---

<!-- page 4 | Failures of the classical theory and the quantum theory -->

# Failures of the classical theory, and the quantum free electron theory

## What the classical theory gets right

It gives Ohm's law, the relation $\sigma=ne^2\tau/m$, the idea of drift and mobility, and the correct *form* of the Wiedemann–Franz law $\kappa/\sigma=LT$ (thermal conductivity over electrical conductivity is proportional to temperature).

## Where it fails

1. **Specific heat.** Treating free electrons as a classical gas gives each electron a heat capacity of $\tfrac32k$. The electrons would then add a large amount to the specific heat of the metal. Experimentally the electronic contribution is tiny (about 1 % of the lattice contribution).
2. **Temperature dependence.** Classical theory predicts $\sigma\propto T^{-1/2}$. The observed dependence is $\sigma\propto T^{-1}$ (resistivity rises linearly with $T$).
3. **Mean free path.** It predicts a mean free path of about one atomic spacing. The observed value is much longer, especially at low temperature.
4. **Valency.** Since $\sigma\propto n$, monovalent metals should conduct worse than divalent and trivalent ones. In fact copper, silver and gold (all monovalent) are the best conductors.
5. **Wiedemann–Franz law.** The form is right, but the value of the Lorenz number $L$ is wrong: classical theory gives $L=\tfrac32\left(\tfrac ke\right)^2\approx1.1\times10^{-8}\ \text{W}\,\Omega\,\text{K}^{-2}$, about half of the measured value.
6. **Types of material.** It cannot explain why materials fall into conductors, semiconductors and insulators.
7. **Other effects.** It cannot explain Pauli paramagnetism, diamagnetism and ferromagnetism, the sign of the charge carriers in some materials (positive Hall coefficients), the photoelectric effect or superconductivity.

## The quantum free electron theory (Sommerfeld)

In 1928 Arnold Sommerfeld kept the free electron picture but added quantum mechanics.

- Electrons are **waves** obeying the Schrödinger equation, not Newtonian particles.
- Inside the metal the potential is taken as constant (zero) and infinite at the surface, so the electrons are free particles **in a box**. This gives **discrete energy levels**.
- Electrons obey the **Pauli exclusion principle**: at most two electrons (opposite spins) per energy level.
- The electrons are distributed among the levels according to the **Fermi–Dirac distribution** (next page), not Maxwell–Boltzmann.

**Why conductivity works better.** Almost all levels are already full, so an electron can only gain energy from the field if there is an empty level just above it. Only the electrons **near the Fermi level** can respond. These travel at the high Fermi speed (about $10^{6}\ \text{m/s}$) and have a longer mean free path. This also explains the tiny electronic specific heat: only a thin slice of electrons near $E_F$ can absorb heat. The temperature dependence of conductivity and the Wiedemann–Franz constant then agree far better with experiment.

## Drawbacks of the quantum free electron theory

- It fails for semiconductors and insulators.
- It cannot explain positive charge carriers (positive Hall coefficient) in some materials.
- It ignores the **periodic potential** of the ion lattice. Including this leads to the **band theory** on the next pages.

---

<!-- page 5 | Fermi–Dirac distribution and Fermi energy -->

# Fermi–Dirac distribution and the Fermi energy

## Three kinds of statistics

Statistical methods describe how many particles occupy each energy state.

| Statistics | Applies to | Examples |
| --- | --- | --- |
| Maxwell–Boltzmann | classical, distinguishable particles | gas molecules |
| **Fermi–Dirac** | **fermions**: indistinguishable particles with half-integer spin | electrons, protons, neutrons |
| Bose–Einstein | **bosons**: indistinguishable particles with integer spin | photons |

We study electrons, which are fermions, so we use the Fermi–Dirac distribution.

## The Fermi–Dirac function

The probability that an energy state $E$ is occupied by an electron at temperature $T$ is

$$
\boxed{f(E)=\frac{1}{1+e^{\,(E-E_F)/kT}}}
$$

where $k$ is Boltzmann's constant ($1.38\times10^{-23}\ \text{J/K}=8.617\times10^{-5}\ \text{eV/K}$), $T$ is the absolute temperature, and $E_F$ is a constant called the **Fermi energy** or **Fermi level**.

## Case 1: at $T=0\ \text{K}$

| Energy | Exponent $\frac{E-E_F}{kT}$ | $f(E)$ | Meaning |
| --- | --- | --- | --- |
| $E<E_F$ | $-\infty$ | $\dfrac{1}{1+0}=1$ | every state below $E_F$ is **filled** |
| $E>E_F$ | $+\infty$ | $\dfrac{1}{1+\infty}=0$ | every state above $E_F$ is **empty** |

So at absolute zero the electrons fill the levels from the bottom up, two per level, as far as $E_F$, and nothing above it.

![At T = 0 K the levels up to the Fermi energy are occupied (two electrons each) and all levels above are empty](/notes/cse/s1/physics/module-1/fermi-occupancy-0k.webp)

> **Fermi energy.** The Fermi energy is the **highest filled energy level at $0\ \text{K}$**.

## Case 2: at $T>0\ \text{K}$

Heating excites some electrons from just below $E_F$ to just above it. In a metal $E_F$ is several eV, while $kT\approx0.026\ \text{eV}$ at room temperature. So $E_F\gg kT$: only electrons within about $kT$ of the Fermi level are excited, while those deep in the sea cannot find empty states.

At $E=E_F$ the exponent is $0$, so

$$
f(E_F)=\frac{1}{1+e^{0}}=\frac12
$$

> **Key idea.** At any temperature above $0\ \text{K}$ the probability of occupancy of the Fermi level is **50 %**. So the Fermi level can also be defined as the energy level at which the occupation probability is $\tfrac12$.

For $E\gg E_F$, $f(E)\approx0$ (rarely occupied). For $E\ll E_F$, $f(E)\approx1$ (almost always occupied).

## Case 3: high temperature

As $T$ rises the step between $1$ and $0$ becomes more gradual and more electrons occupy states above $E_F$. For $E-E_F\gg kT$ the $1$ in the denominator can be ignored,

$$
f(E)\approx e^{-(E-E_F)/kT}
$$

which is the classical **Maxwell–Boltzmann** form. The Fermi–Dirac function therefore approaches the classical result at high energies or high temperatures.

![Fermi function f(E) against E minus E_F at T = 0 K, 300 K and 2500 K](/notes/cse/s1/physics/module-1/fermi-function-temperature.webp)

All the curves cross at $f=0.5$ at $E=E_F$.

## Value of the Fermi energy

For free electrons in three dimensions with electron density $n$,

$$
E_F=\frac{\hbar^{2}}{2m}\left(3\pi^{2}n\right)^{2/3}
$$

where $\hbar=h/2\pi$ is the reduced Planck constant and $m$ is the electron mass. For copper, $n=8.5\times10^{28}\ \text{m}^{-3}$ gives $E_F\approx7.05\ \text{eV}$ (worked on the numerical problems page).

> **Watch out.** "Fermi energy" is strictly the highest filled level at $0\ \text{K}$, and "Fermi level" is the more general term: the level with $f=\tfrac12$ at any temperature. Many books use them interchangeably, but state the definition you use. And the occupancy $f(E)$ is a **probability**, so it is always between $0$ and $1$.

---

<!-- page 6 | Energy bands -->

# Energy bands in solids

## The idea

Free electron theories ignore the ion lattice. Band theory keeps the quantum picture but includes the **periodic potential** of the crystal. The potential energy of an electron is lowest at the positive ion sites and highest between ions, and this pattern repeats with the periodicity of the crystal.

## How bands form

An isolated atom has discrete electron energy levels (1s, 2s, 2p, 3s, …). When a large number $N$ of atoms are brought together to make a crystal, the electron wave functions of neighbouring atoms **overlap**. By the Pauli principle the levels cannot stay the same, so each atomic level **splits into $N$ closely spaced levels**. These make up a continuous **energy band**.

![Energy levels of an isolated atom (1s, 2s, 2p, 3s, 3p) and the corresponding bands in a lattice](/notes/cse/s1/physics/module-1/band-formation.webp)

- The outer (valence) electrons overlap most, so their levels split most: they form **wide** bands.
- The inner electrons are screened by the outer ones and split less: they form **narrow** bands.
- A band is typically a few eV wide. With $N\sim10^{23}$ levels in it, the spacing between neighbouring levels is of order $10^{-23}\ \text{eV}$, which is utterly tiny compared with $kT\approx0.026\ \text{eV}$ at room temperature. So within an allowed band an electron can move to a higher vacant level with only a thermal nudge or a small applied field.

## Valence band, conduction band and band gap

The top two bands decide the electrical behaviour.

- **Valence band:** the energy values of valence electrons engaged in bonding in the crystal. Its top edge is $E_v$.
- **Conduction band:** the energy values of electrons that have broken free of their bonds and can move through the crystal. Its bottom edge is $E_c$. Only electrons here (and holes in the valence band) carry current.
- **Forbidden band (band gap):** the range of energies between them where no electron states exist.

$$
E_g=E_c-E_v
$$

![Energy band diagram: inner bands, valence band, forbidden energy gap and conduction band](/notes/cse/s1/physics/module-1/energy-band-diagram.webp)

> **Watch out.** $E_c$ is the **bottom** of the conduction band and $E_v$ is the **top** of the valence band. The gap $E_g$ is measured between exactly those two edges.

---

<!-- page 7 | Conductors, semiconductors and insulators -->

# Conductors, semiconductors and insulators

The position of the bands, and how full they are, decides everything.

![Band structure of a metal (overlapping bands), a semiconductor (small gap) and an insulator (large gap), with the Fermi level](/notes/cse/s1/physics/module-1/band-gap-comparison.webp)

## Conductors

- The conduction and valence bands **overlap** (or the gap is negligible).
- A large number of free electrons are available at all temperatures, with no energy barrier to excite them. Excellent conductivity.
- The Fermi level lies **inside the band** (in the region of overlap).
- Examples: copper, silver, gold, aluminium, iron.

![Overlapping conduction and valence bands in a conductor](/notes/cse/s1/physics/module-1/conductor-bands.webp)

## Semiconductors

- A moderate band gap, roughly $1\ \text{eV}$: silicon $1.1\ \text{eV}$, germanium $0.66\ \text{eV}$, gallium arsenide $1.43\ \text{eV}$.
- At $0\ \text{K}$ the valence band is **full** and the conduction band is **empty**, so a semiconductor behaves as an insulator.
- At room temperature some electrons gain enough thermal energy to cross the gap. Each leaves a **hole** in the valence band. Both electrons and holes carry current.
- Conductivity **increases** with temperature (negative temperature coefficient of resistance).
- **Doping** (adding small amounts of impurity) can increase the conductivity enormously.
- The Fermi level lies **in the gap**: near the middle for pure (intrinsic) material, nearer the conduction band for n-type, nearer the valence band for p-type.

![Conduction and valence band separated by a forbidden gap of about 1 eV](/notes/cse/s1/physics/module-1/semiconductor-bands.webp)

## Insulators

- A **large band gap**, roughly 4 eV or more (diamond $\approx5.5\ \text{eV}$).
- Electrons in the valence band cannot gain enough energy at normal temperatures to cross the gap. There are essentially no free carriers, so conductivity is extremely poor.
- At very high temperatures a few electrons cross the gap, so the resistivity falls (negative temperature coefficient).
- The Fermi level lies in the gap, far from both bands.
- Examples: diamond, glass, rubber, wood, plastic.

![Insulator: a wide forbidden gap between the valence and conduction bands](/notes/cse/s1/physics/module-1/insulator-bands.webp)

## Summary

| | Conductor | Semiconductor | Insulator |
| --- | --- | --- | --- |
| Band gap | overlap, or less than about $0.1\ \text{eV}$ | about $1\ \text{eV}$ | about 4 eV or more |
| At $0\ \text{K}$ | partly filled band | valence full, conduction empty | valence full, conduction empty |
| Effect of heating | resistance **rises** | conductivity **rises** | conductivity rises only at very high $T$ |
| Fermi level | inside a band | in the gap | in the gap, far from both bands |
| Examples | Cu, Ag, Au, Al | Si, Ge, GaAs | diamond, glass, rubber |

> **Note on the source.** One lecture set said the gap in a semiconductor is "1 to 2 eV" and in an insulator "greater than 5 eV". These are rules of thumb, not sharp limits: the dividing line between semiconductor and insulator is a matter of convention (around 3 to 4 eV), and wide-gap semiconductors such as silicon carbide exist. The values above are the usual textbook figures.

---

<!-- page 8 | Numerical problems: conductivity and the Fermi function -->

# Numerical problems: conductivity and the Fermi function

Constants used: $e=1.6\times10^{-19}\ \text{C}$, $m=9.11\times10^{-31}\ \text{kg}$, $N_A=6.022\times10^{23}\ \text{mol}^{-1}$, $k=8.617\times10^{-5}\ \text{eV/K}$.

**Problem 1.** A material has conductivity $1.2\times10^{5}\ \text{S/m}$, carrier concentration $2\times10^{24}\ \text{m}^{-3}$ and carrier effective mass $0.2\times9.11\times10^{-31}\ \text{kg}$. Find the relaxation time.

Rearrange $\sigma=\dfrac{ne^2\tau}{m}$ to $\tau=\dfrac{\sigma m}{ne^2}$:

$$
\tau=\frac{(1.2\times10^{5})(1.822\times10^{-31})}{(2\times10^{24})(1.6\times10^{-19})^2}=\frac{2.186\times10^{-26}}{5.12\times10^{-14}}\approx\mathbf{4.3\times10^{-13}\ \text{s}}
$$

**Problem 2.** A metal has $n=8.5\times10^{28}\ \text{m}^{-3}$ and relaxation time $\tau=2.5\times10^{-14}\ \text{s}$. Find its conductivity.

$$
\sigma=\frac{ne^2\tau}{m}=\frac{(8.5\times10^{28})(2.56\times10^{-38})(2.5\times10^{-14})}{9.11\times10^{-31}}=\frac{5.44\times10^{-23}}{9.11\times10^{-31}}\approx\mathbf{5.97\times10^{7}\ \text{S/m}}
$$

**Problem 3.** Find the drift velocity of the free electrons in a copper wire of cross-section $10\ \text{mm}^2$ carrying $100\ \text{A}$. Copper has density $8969\ \text{kg/m}^3$, atomic weight $63.54$, and one free electron per atom.

First the electron density (atoms per unit volume):

$$
n=\frac{\rho N_A}{M}=\frac{8969\times6.022\times10^{23}}{63.54\times10^{-3}}=8.5\times10^{28}\ \text{m}^{-3}
$$

Then from $I=nAev_d$:

$$
v_d=\frac{I}{nAe}=\frac{100}{(8.5\times10^{28})(10\times10^{-6})(1.6\times10^{-19})}\approx\mathbf{7.4\times10^{-4}\ \text{m/s}}
$$

That is less than a millimetre per second, even at $100\ \text{A}$.

**Problem 4.** Find the mobility of electrons in copper if there are $9\times10^{28}$ valence electrons per $\text{m}^3$ and the conductivity is $6\times10^{7}\ \text{S/m}$.

$$
\mu=\frac{\sigma}{ne}=\frac{6\times10^{7}}{(9\times10^{28})(1.6\times10^{-19})}=\mathbf{4.2\times10^{-3}\ \text{m}^2/\text{V s}}
$$

**Problem 5.** Find the relaxation time of conduction electrons in a metal of resistivity $1.54\times10^{-8}\ \Omega\,\text{m}$ with $5.8\times10^{28}$ conduction electrons per $\text{m}^3$.

$$
\tau=\frac{m}{ne^2\rho}=\frac{9.11\times10^{-31}}{(5.8\times10^{28})(2.56\times10^{-38})(1.54\times10^{-8})}\approx\mathbf{4.0\times10^{-14}\ \text{s}}
$$

> **Note on the source.** The problem sheet printed the resistivity as $1.54\times10^{-3}\ \Omega\,\text{m}$, which would give $4\times10^{-19}\ \text{s}$. The quoted answer ($\approx4\times10^{-14}\ \text{s}$) needs $1.54\times10^{-8}\ \Omega\,\text{m}$, a typical metal value, so that is used here.

**Problem 6.** Silver has density $10.5\times10^{3}\ \text{kg/m}^3$ and atomic weight $107.9$, with one conduction electron per atom. Find (a) the electron density and (b) the mobility, given $\sigma=6.8\times10^{7}\ \text{S/m}$.

(a) $n=\dfrac{10.5\times10^{3}\times6.022\times10^{23}}{107.9\times10^{-3}}=\mathbf{5.86\times10^{28}\ \text{m}^{-3}}$

(b) $\mu=\dfrac{\sigma}{ne}=\dfrac{6.8\times10^{7}}{(5.86\times10^{28})(1.6\times10^{-19})}=\mathbf{7.25\times10^{-3}\ \text{m}^2/\text{V s}}$

**Problem 7.** Find the Fermi energy of copper, $n=8.5\times10^{28}\ \text{m}^{-3}$.

$$
E_F=\frac{\hbar^2}{2m}(3\pi^2n)^{2/3}=\frac{(1.0546\times10^{-34})^2}{2(9.11\times10^{-31})}\left(3\pi^2\times8.5\times10^{28}\right)^{2/3}
$$

$$
=(6.10\times10^{-39})(1.85\times10^{20})\ \text{J}=1.13\times10^{-18}\ \text{J}=\mathbf{7.05\ \text{eV}}
$$

This is far larger than $kT=0.026\ \text{eV}$ at room temperature, as the theory assumes.

**Problem 8.** Find the probability that an electron occupies a state $0.2\ \text{eV}$ above the Fermi level at $300\ \text{K}$.

$kT=8.617\times10^{-5}\times300=0.02585\ \text{eV}$, so $\dfrac{E-E_F}{kT}=\dfrac{0.2}{0.02585}=7.74$:

$$
f(E)=\frac{1}{e^{7.74}+1}=\frac{1}{2291}\approx\mathbf{4.4\times10^{-4}}
$$

**Problem 9.** At what temperature is the probability of occupying a state $0.1\ \text{eV}$ above the Fermi level equal to $0.1$?

From $0.1=\dfrac{1}{e^{x}+1}$: $e^{x}=\dfrac{1-0.1}{0.1}=9$, so $x=\ln9=2.197$ with $x=\dfrac{0.1}{kT}$:

$$
T=\frac{0.1}{2.197\times8.617\times10^{-5}}\approx\mathbf{528\ \text{K}}
$$

> **Watch out.** Use $k$ in **eV/K** when energies are in eV, and in J/K when they are in joules. Mixing them is the commonest error. And remember $n$ for a metal comes from $\rho N_A/M$ with the molar mass in **kg** (so $63.54\ \text{g/mol}=63.54\times10^{-3}\ \text{kg/mol}$).

---

<!-- page 9 | Superconductivity: the basics -->

# Superconductivity: the basics

## What it is

Some materials, when cooled below a certain temperature, suddenly lose **all electrical resistance** and also **expel magnetic fields**. This is **superconductivity**.

- It was discovered in **1911** by the Dutch physicist Heike Kamerlingh Onnes, studying the resistance of **mercury** at very low temperatures. At about **4.2 K** the resistance dropped abruptly to zero.
- A superconductor carries current with **no energy loss**, which is utterly different from an ordinary conductor.

![Resistance against temperature for an ordinary metal and a superconductor, which drops to zero at the critical temperature](/notes/cse/s1/physics/module-1/resistance-vs-temperature.webp)

## Transition (critical) temperature $T_c$

The **transition temperature** or **critical temperature** $T_c$ is the temperature below which a material becomes superconducting.

- **Above $T_c$:** an ordinary conductor with finite resistance.
- **Below $T_c$:** zero resistance and the Meissner effect (next page).
- The change is **reversible**: warm the material above $T_c$ and the resistance returns and the magnetic field re-enters.
- Each material has its own $T_c$, from close to $0\ \text{K}$ to over $100\ \text{K}$ for the ceramic **high-temperature superconductors**. Above $77\ \text{K}$ they can be cooled with liquid **nitrogen**, which is much cheaper and easier than the liquid helium needed for low-$T_c$ metals.

| Material | $T_c$ |
| --- | --- |
| Tin (Sn) | $3.7\ \text{K}$ |
| Mercury (Hg) | $4.2\ \text{K}$ |
| Lead (Pb) | $7.2\ \text{K}$ |
| Niobium (Nb) | $9.2\ \text{K}$ |
| Magnesium diboride | $39\ \text{K}$ |
| Yttrium barium copper oxide (YBCO) | $92\ \text{K}$ |

![Highest known transition temperature against year of discovery, 1911 to 1993](/notes/cse/s1/physics/module-1/transition-temperature-history.webp)

## Some facts

- Besides elements, many **compounds and alloys** are superconductors, and compounds generally have higher $T_c$.
- Good ordinary conductors such as **Cu, Ag and Au are not superconductors**.
- Some elements become superconducting only under high pressure, or only as thin films.
- A binary compound can be superconducting even if neither of its elements is.

## Properties of superconductors

**1. Zero resistance and persistent current.** Once a current is set up in a closed superconducting loop it flows **without decay** and needs no power supply, because there are no $I^2R$ losses. It persists as long as the loop stays below $T_c$.

![A superconducting ring carrying a persistent current I with magnetic flux through it](/notes/cse/s1/physics/module-1/persistent-current-loop.webp)

**2. Flux quantisation.** The magnetic flux enclosed by a superconducting ring is not arbitrary. Even though $B=0$ inside the superconducting material itself, the flux through the **hole** of the ring can only take values that are whole multiples of a basic unit, the **flux quantum**:

$$
\Phi=n\Phi_0,\quad n=1,2,3,\dots\qquad\Phi_0=\frac{h}{2e}=2.07\times10^{-15}\ \text{Wb}
$$

The $2e$ in the denominator is the charge of a **Cooper pair** (see BCS theory).

![Magnetic flux through a superconducting ring, Φ = nΦ0, and the current I around the ring](/notes/cse/s1/physics/module-1/flux-quantisation.webp)

**3. The Meissner effect and critical field** are the subject of the next page. **4. The isotope effect** is described with BCS theory.

> **Watch out.** "Zero resistance" is not the same as "perfect conductor". A superconductor also **expels** magnetic fields, and that is the property that makes it a genuinely new state of matter (next page).

---

<!-- page 10 | Critical field and the Meissner effect -->

# Critical field and the Meissner effect

## Review of magnetism

| Quantity | Meaning | Unit |
| --- | --- | --- |
| Magnetic induction $B$ | magnetic flux density: flux per unit area | tesla (T) |
| Magnetising field $H$ | the field due to external currents | A/m |
| Magnetisation $M$ | magnetic moment per unit volume of the material | A/m |
| Permeability $\mu=B/H$ | ability of a material to support a magnetic field inside it. For free space $\mu_0=4\pi\times10^{-7}\ \text{H/m}$ | H/m |
| Susceptibility $\chi=M/H$ | how strongly a material is magnetised. Negative for diamagnets, positive for paramagnets | no unit |

The three are connected by

$$
B=\mu_0\,(H+M)
$$

## Critical field

> **Critical field $H_c$.** The maximum magnetic field a superconductor can tolerate while staying superconducting. If the applied field exceeds $H_c$ the superconductivity is destroyed and the material returns to the normal state.

$H_c$ depends on temperature. It is largest at $0\ \text{K}$ and falls to zero at $T_c$:

$$
H_c(T)=H_c(0)\left[1-\left(\frac{T}{T_c}\right)^2\right]
$$

![Critical field against temperature: the superconducting state lies below the curve, the normal state above](/notes/cse/s1/physics/module-1/critical-field-temperature.webp)

The curve is the boundary between the two states. A high critical field matters in practice: superconducting magnets for MRI machines and particle accelerators need materials with large $H_c$.

## The Meissner effect

> **Meissner effect.** When a material is cooled below $T_c$ in a magnetic field, it **expels all magnetic flux** from its interior, so that $B=0$ inside.

This is a **defining property** of a superconductor, and it distinguishes it from a mere "perfect conductor". A perfect conductor with $R=0$ would only *freeze in* whatever field was already inside. A superconductor actively pushes the field out, whatever the order in which the field and the cooling were applied.

![Meissner effect: field lines pass through a sphere above Tc but are expelled below Tc; a magnet over a superconductor](/notes/cse/s1/physics/module-1/meissner-effect.webp)

## Why a superconductor is a perfect diamagnet

Inside the superconductor $B=0$. Using $B=\mu_0(H+M)$:

$$
0=\mu_0(H+M)\ \Longrightarrow\ M=-H
$$

The magnetic susceptibility is therefore

$$
\chi=\frac{M}{H}=-1
$$

This is the value for **perfect diamagnetism**. A superconductor is a perfect diamagnet, a property not shared by any ordinary material.

> **Watch out.** The Meissner effect means $B=0$ **inside the material**, not that the applied field $H$ vanishes. And $\chi=-1$ holds only below the critical field and only for the complete Meissner state (Type I below $H_c$, or Type II below $H_{c1}$).

---

<!-- page 11 | Type I and Type II superconductors -->

# Type I and Type II superconductors

Superconductors fall into two classes according to how they respond to an increasing magnetic field.

## Type I (soft) superconductors

- Show the **complete Meissner effect** below a single critical field $H_c$: perfect diamagnetism with $M=-H$.
- At $H_c$ the superconductivity is destroyed **abruptly**: the magnetisation drops to zero and the field penetrates all at once. There is **no mixed state**.
- $H_c$ is usually low, so a modest magnetic field destroys the superconductivity. They are called **soft** superconductors and are limited to low-field uses.
- Mostly pure elements. Examples: lead ($T_c\approx7.2\ \text{K}$), mercury ($4.2\ \text{K}$), tin ($3.7\ \text{K}$).

![Magnetisation (−M) against applied field H for a Type I superconductor: rises linearly to H_c then drops to zero](/notes/cse/s1/physics/module-1/magnetisation-type-1.webp)

## Type II (hard) superconductors

- Have **two** critical fields, a lower $H_{c1}$ and an upper $H_{c2}$.
- Below $H_{c1}$: complete Meissner effect, with the flux totally expelled ($M=-H$).
- Between $H_{c1}$ and $H_{c2}$: the **mixed (vortex) state**. Magnetic flux penetrates in thin filaments (vortices) while the rest of the material stays superconducting. The material is still diamagnetic but **not perfectly** ($M\ne-H$): the Meissner effect is partial. Electrically it is still a superconductor.
- Above $H_{c2}$: the magnetisation is zero, the flux fully penetrates and the material is a **normal** conductor.
- The magnetisation falls off **gradually**, not abruptly.
- Because $H_{c2}$ is very large, a very strong field is needed to destroy the superconductivity. They are called **hard** superconductors, and they are the useful ones for powerful magnets and quantum computing.
- Alloys and compounds as well as some pure elements. Examples: niobium ($T_c\approx9.2\ \text{K}$), magnesium diboride ($39\ \text{K}$), YBCO ($92\ \text{K}$).

![Magnetisation against H for a Type II superconductor, with lower critical field H_c1, vortex region and upper critical field H_c2](/notes/cse/s1/physics/module-1/magnetisation-type-2.webp)

## Comparison

| | Type I | Type II |
| --- | --- | --- |
| Critical fields | one, $H_c$ | two, $H_{c1}$ and $H_{c2}$ |
| Meissner effect | complete below $H_c$ | complete below $H_{c1}$, partial between $H_{c1}$ and $H_{c2}$ |
| Mixed (vortex) state | none | between $H_{c1}$ and $H_{c2}$ |
| Loss of magnetisation | abrupt, at $H_c$ | gradual, up to $H_{c2}$ |
| Critical field | low ("soft") | high ("hard") |
| Typical $T_c$ | low | generally higher |
| Examples | Pb, Hg, Sn | Nb, MgB₂, YBCO, alloys |

> **Watch out.** In the Type II graph the magnetisation does not drop to zero at $H_{c1}$. It starts to fall there, and reaches zero only at $H_{c2}$. Between the two fields the material conducts without resistance but is not a perfect diamagnet.

---

<!-- page 12 | BCS theory -->

# BCS theory of superconductivity

## The idea

The first microscopic explanation of superconductivity was given in **1957** by John Bardeen, Leon Cooper and Robert Schrieffer, who received the **1972 Nobel Prize in Physics** for it. It is based on quantum mechanics.

In a normal metal an electron is repelled by other electrons and attracted by positive ion cores, in random directions. These forces scatter the electron, and that scattering is the source of resistance. BCS theory shows that below $T_c$ the conduction electrons form **pairs** that avoid this scattering.

## Cooper pairs

Suppose two electrons 1 and 2 move through the lattice.

1. Electron 1 attracts the nearby **positive ions** towards it, slightly distorting the lattice. This distortion is a lattice vibration, a **phonon**.
2. The extra positive charge gathered around electron 1 **screens** its negative charge, so that electron 2 is attracted towards that region.
3. The net effect is an **attraction** between the two electrons, transmitted through the lattice: electron 1 emits a phonon, electron 2 absorbs it. Phonons act like the "glue".
4. The bound pair is called a **Cooper pair**. The attraction is greatest when the two electrons have **equal and opposite spins and opposite momenta**.

## Why Cooper pairs carry current without resistance

- Pairing opens an **energy gap** in the spectrum: a minimum energy is needed to break a pair.
- Below $T_c$ the thermal vibrations of the lattice are too weak to break the pairs.
- All the pairs are in the **same quantum state** and move together coherently. They are **not scattered** by the lattice, so no energy is transferred from the electrons to the lattice.
- An applied field accelerates the pairs but they do not slow down. The result is **zero resistance**.

## Isotope effect

The critical temperature depends on the mass of the ions of the lattice: heavier isotopes of the same element have lower $T_c$,

$$
T_c\propto\frac{1}{\sqrt{M}}\qquad\text{that is}\qquad T_c\sqrt{M}=\text{constant}
$$

This is direct evidence that the lattice vibrations (phonons) are involved in superconductivity, as BCS theory says.

## Limits of the theory

BCS theory explains **conventional superconductors**, the low-temperature metals and alloys, in which phonons provide the pairing. It does not account for the high-temperature ceramic superconductors.

> **Note on the source.** One lecture set said BCS "explains only Type I superconductivity". The more accurate statement is that BCS describes conventional (phonon-mediated, low-$T_c$) superconductors, whether Type I or II, but not the high-$T_c$ ceramics.

> **Watch out.** Cooper pairs are bound by an attraction **mediated by the lattice**, not by any direct attraction between the electrons (which repel each other). And the charge of a pair is $2e$, which is why the flux quantum is $h/2e$.

---

<!-- page 13 | Applications of superconductors -->

# Applications of superconductors

Zero resistance and the expulsion of magnetic fields give superconductors a range of uses.

| Application | How superconductors are used |
| --- | --- |
| **MRI** | superconducting magnets give the strong, stable field that gives high image resolution |
| **Maglev trains** | superconducting magnets make the train float on a cushion of air a few centimetres above the track, with no friction, so it can reach very high speeds (about $500\ \text{km/h}$) with little energy loss |
| **Particle accelerators** | superconducting magnets steer and focus the beams, for example in the Large Hadron Collider |
| **Quantum computing** | superconducting qubits exist in superpositions of states |
| **Power transmission** | cables carry current with no resistive loss, so grids would not need to step the voltage up and down to save energy |
| **Electrical machines** | motors and generators can be smaller, lighter and more efficient, with no eddy-current, hysteresis or copper losses |
| **SQUIDs** | Superconducting QUantum Interference Devices measure extremely weak magnetic fields (of order $10^{-13}\ \text{T}$). Used by geologists for rock magnetism and continental drift, in medicine for muscle and nerve activity, and for non-destructive testing, for example of corrosion in aircraft sheets |
| **Energy storage (SMES)** | current circulating in a superconducting coil stores energy in its magnetic field, with rapid response for stabilising the grid and backup power |
| **Electronic switches** | switching between the normal and superconducting states (cryotron switches) |
| **Telecommunications** | lower noise and better signal quality in radio-frequency and high-frequency circuits |

> **Watch out.** All these uses need cooling below $T_c$, which is the main practical cost. High-$T_c$ materials (cooled with liquid nitrogen) are attractive because they reduce that cost.

---

<!-- page 14 | Practice and formula sheet -->

# Practice questions and formula sheet

## Superconductivity numerical problems

**1.** The transition temperature of lead is $7.2\ \text{K}$. At $5\ \text{K}$ it loses its superconductivity in a field of $3.3\times10^{4}\ \text{A/m}$. Find the maximum field $H$ at which lead stays superconducting at $0\ \text{K}$.

At $5\ \text{K}$, $H_c(5)=3.3\times10^{4}$. From $H_c(T)=H_c(0)\left[1-(T/T_c)^2\right]$:

$$
H_c(0)=\frac{3.3\times10^{4}}{1-(5/7.2)^2}=\frac{3.3\times10^{4}}{0.5177}=\mathbf{6.37\times10^{4}\ \text{A/m}}
$$

**2.** The critical field of niobium is $1\times10^{5}\ \text{A/m}$ at $8\ \text{K}$ and $2\times10^{5}\ \text{A/m}$ at $0\ \text{K}$. Find its transition temperature.

$$
1\times10^{5}=2\times10^{5}\left[1-\frac{64}{T_c^2}\right]\ \Rightarrow\ \frac{64}{T_c^{2}}=\frac12\ \Rightarrow\ T_c=8\sqrt2=\mathbf{11.3\ \text{K}}
$$

**3.** The transition temperature of lead is $7.26\ \text{K}$ and its maximum critical field is $8\times10^{5}\ \text{A/m}$. It is to be used in a field of $4\times10^{4}\ \text{A/m}$. What precaution is needed?

Find the temperature at which $H_c(T)$ equals $4\times10^{4}$:

$$
4\times10^{4}=8\times10^{5}\left[1-\frac{T^2}{7.26^2}\right]\ \Rightarrow\ \frac{T^2}{7.26^2}=0.95\ \Rightarrow\ T=7.26\sqrt{0.95}=7.08\ \text{K}
$$

The lead must be kept **below $7.08\ \text{K}$**, otherwise the field destroys the superconductivity.

**4.** For a superconducting isotope of mass $199.5\ \text{amu}$ the critical temperature is $5\ \text{K}$. Find the isotopic mass for which it is $5.1\ \text{K}$.

From the isotope effect $T_c\sqrt M=$ constant:

$$
M_2=M_1\left(\frac{T_{c1}}{T_{c2}}\right)^2=199.5\times\left(\frac{5}{5.1}\right)^2=\mathbf{191.7\ \text{amu}}
$$

> **Note on the source.** The lecture sheet quoted $191.68\ \text{amu}$. Evaluating the ratio exactly gives $191.75\ \text{amu}$; the difference is rounding in the source.

## Short questions to revise

1. List the assumptions of the classical free electron theory, and give four of its failures.
2. Derive $\sigma=ne^2\tau/m$. What is the mobility?
3. Define the Fermi energy. What is $f(E_F)$ at $T>0$?
4. Sketch the Fermi function at $0\ \text{K}$ and at two higher temperatures.
5. Explain, with band diagrams, the difference between a conductor, a semiconductor and an insulator.
6. What is the Meissner effect? Show that a superconductor has $\chi=-1$.
7. Distinguish between Type I and Type II superconductors.
8. Explain the formation of Cooper pairs. How does BCS theory explain zero resistance?
9. List five applications of superconductors.

---

## Formula sheet

### Conductivity

| | |
| --- | --- |
| Resistivity | $R=\rho\dfrac lA$, $\ \sigma=\dfrac1\rho$ |
| Point form of Ohm's law | $J=\sigma E$ |
| Drift velocity | $v_d=\dfrac{eE\tau}{m}$ |
| Current density | $J=nev_d$ |
| Conductivity | $\sigma=\dfrac{ne^2\tau}{m}=ne\mu$ |
| Mobility | $\mu=\dfrac{v_d}{E}=\dfrac{e\tau}{m}$ |
| Electron density from density | $n=\dfrac{\rho N_A}{M}$ (one free electron per atom) |

### Fermi–Dirac

| | |
| --- | --- |
| Distribution | $f(E)=\dfrac{1}{1+e^{(E-E_F)/kT}}$ |
| At $0\ \text{K}$ | $f=1$ for $E<E_F$, $f=0$ for $E>E_F$ |
| At $T>0$ | $f(E_F)=\tfrac12$ |
| Fermi energy (free electrons) | $E_F=\dfrac{\hbar^2}{2m}(3\pi^2n)^{2/3}$ |
| Band gap | $E_g=E_c-E_v$ |

### Superconductivity

| | |
| --- | --- |
| Critical field | $H_c(T)=H_c(0)\left[1-(T/T_c)^2\right]$ |
| Field relation | $B=\mu_0(H+M)$, $\ \chi=M/H$ |
| Meissner state | $B=0\Rightarrow M=-H\Rightarrow\chi=-1$ |
| Flux quantum | $\Phi_0=\dfrac{h}{2e}=2.07\times10^{-15}\ \text{Wb}$ |
| Isotope effect | $T_c\propto M^{-1/2}$ |
