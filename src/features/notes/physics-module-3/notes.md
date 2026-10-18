<!-- page 1 | Start here -->

# Module 3 at a glance

Module 1 classified materials by their band gap: conductors (bands overlap), insulators (large gap) and, in between, **semiconductors**. This module looks closely at that middle class, and at the device that all of modern electronics is built from, the **p-n junction**.

The story has two halves.

1. **Counting carriers.** How many free electrons and holes does a semiconductor have at a given temperature? We derive the electron density in the conduction band and the hole density in the valence band, combine them into the intrinsic carrier concentration, and see what doping and temperature do to the carrier numbers and to the Fermi level.
2. **Joining p and n.** Putting a p-type and an n-type region together creates a depletion region and a potential barrier. Biasing changes that barrier, and the result is the diode equation and the diode's V-I characteristic.

Everything in the second half rests on the first: the diode equation is really a statement about how the number of electrons on each side of a barrier depends on the height of that barrier, and that is exactly what the carrier-density formulas tell us.

> **KTU syllabus.** Intrinsic semiconductor, derivation of density of electrons in conduction band and density of holes in valence band, intrinsic carrier concentration, variation of intrinsic carrier concentration with temperature, extrinsic semiconductor (qualitative). Formation of p-n junction, Fermi level in semiconductors (intrinsic and extrinsic), energy band diagram of p-n junction, qualitative description of charge flow across a p-n junction, forward and reverse biased p-n junctions, diode equation (derivation), I-V characteristics of p-n junction.

## What you will be able to do

- Explain how holes form and why they behave as positive carriers.
- Explain what effective mass and density of states mean, and why both are needed to count carriers.
- Derive $n=N_c\,e^{-(E_c-E_F)/kT}$ and $p=N_v\,e^{-(E_F-E_v)/kT}$, giving the physical reason for each step.
- Derive the intrinsic carrier concentration, state the law of mass action, and explain how $n_i$ depends on temperature and band gap.
- Describe n-type and p-type semiconductors with band diagrams, and describe how their carrier density changes over a wide range of temperature.
- Locate the Fermi level in intrinsic, n-type and p-type material, and explain why it moves with doping and temperature.
- Explain the formation of a p-n junction in terms of diffusion and drift, draw its band diagram, and explain what forward and reverse bias do.
- Derive the diode equation $I=I_s\left(e^{eV/kT}-1\right)$ and sketch and explain the V-I characteristic.
- Solve the standard numerical problems on $n_i$, band gap and diode current, and a few more on doped carrier densities and conductivity.

## How to use these notes

- Each topic is a page: **idea → derivation or explanation → worked example → common mistakes.**
- Green boxes hold key ideas. Amber boxes marked **Watch out** hold mistakes that cost marks. Boxes marked **Note on the source** record where the lecture notes were corrected. Boxes marked **Beyond the syllabus** hold short extensions that make the syllabus topics easier to understand; they are not usually examined on their own.
- The derivations of $n$, $p$, $n_i$, the intrinsic Fermi level and the diode equation are long-answer favourites. Learn the **steps and the reason for each step**, not just the results.
- The last three pages hold the standard numerical problems, extra worked examples, and practice questions with a formula sheet.

## Where each topic sits

| Part | Pages |
| --- | --- |
| Intrinsic semiconductors | Holes, effective mass, density of states, electrons in the conduction band, holes in the valence band, intrinsic carrier concentration |
| Doping | Extrinsic semiconductors, carrier densities in doped material, Fermi level, conductivity |
| The p-n junction | Forming a junction, biasing, the diode equation, V-I characteristics |
| Practice | Numerical problems, more worked examples, practice and formula sheet |

> **Prerequisites.** From Module 1: energy bands, the band gap $E_g=E_c-E_v$, the Fermi-Dirac function $f(E)=\dfrac{1}{1+e^{(E-E_F)/kT}}$, and conductivity $\sigma=ne\mu$. From maths: integration by substitution, and the laws of exponents and logarithms. Keep $kT\approx0.0259\ \text{eV}$ at $300\ \text{K}$ in your head: almost every estimate in this module compares an energy with $kT$.

---

<!-- page 2 | Intrinsic semiconductors and holes -->

# Intrinsic semiconductors and holes

## The idea

An **intrinsic semiconductor** is a pure semiconductor, with no significant impurities. Silicon (Si) and germanium (Ge) are the standard examples. Both belong to group IV of the periodic table: each atom has **four valence electrons**, and in the crystal each atom shares one electron with each of its four nearest neighbours. These shared pairs are **covalent bonds**, and every valence electron is tied up in one of them.

At $0\ \text{K}$ every valence electron is held in its bond: in band language, the **valence band is completely full** and the **conduction band is completely empty**. A full band cannot carry current (for every electron moving one way there is another moving the other way, and there is no empty state for any of them to move into), and an empty band has nothing to carry. So at absolute zero a pure semiconductor is an **insulator**.

As the temperature rises, the lattice vibrates and some electrons absorb enough thermal energy to **break their covalent bond**. The energy needed is the band gap: about $1.1\ \text{eV}$ for silicon and $0.66\ \text{eV}$ for germanium. A freed electron moves almost freely through the spaces between the atoms; it has become a **conduction electron**. In band language: the electron has jumped from the valence band to the conduction band.

![Germanium lattice at T > 0 K with a broken covalent bond, a free electron and a vacancy, beside the band diagram with E_C, E_F and E_V](/notes/cse/s1/physics/module-3/germanium-lattice-bands.webp)

Thermal energy is shared out randomly, so at room temperature ($kT\approx0.026\ \text{eV}$) only a tiny fraction of bonds are broken at any instant. That is why the result depends so strongly on temperature, and why the number of carriers turns out to depend exponentially on $E_g/kT$.

## Holes

When an electron leaves the valence band it leaves behind an empty state in the bond it came from, a **hole**.

- **Why a hole acts as a positive charge.** Before the bond broke, the region around it was electrically neutral: the electrons' negative charge exactly balanced the positive nuclei. Removing one electron leaves a net charge of $+e$ at that place. The hole is therefore a "missing negative charge", which behaves in every electrical respect like a positive charge $+e$.
- **Why a hole can move.** A valence electron in a neighbouring bond needs very little energy to hop into the vacancy, because it moves from one valence-band state to another of almost the same energy. When it does, the vacancy appears where that electron came from. Repeat this and the vacancy drifts through the crystal. In an electric field the valence electrons hop preferentially against the field, so the hole moves **with** the field, opposite to the electrons, exactly as a positive charge would.
- **Why holes count as carriers.** The current produced by all those valence electrons hopping one way is identical to the current produced by a single positive particle moving the other way. It is much simpler to follow the one hole than the many electrons, so we treat holes as genuine charge carriers in the valence band.

A useful picture is a row of cars in a car park with one empty space. As each car moves forward into the space in front, the empty space moves backwards. Watching the space is easier than watching every car.

> **Key idea.** Breaking one covalent bond creates an **electron-hole pair**. In an intrinsic semiconductor the number of free electrons always equals the number of holes, $n=p$.

## Generation, recombination and equilibrium

Two processes go on all the time:

- **Generation:** thermal energy breaks bonds, creating electron-hole pairs.
- **Recombination:** a conduction electron meets a hole and falls back into the bond, and both carriers disappear. The energy is released as heat (in silicon and germanium) or light (in materials such as GaAs, used in LEDs).

At a fixed temperature the two rates become equal and the carrier numbers settle at steady values: this is **thermal equilibrium**. Raising the temperature increases the generation rate, so the equilibrium carrier numbers rise.

## Properties of intrinsic semiconductors

| Property | Description |
| --- | --- |
| Pure form | a single semiconductor material (such as Si or Ge) with no intentional impurities |
| Equal carriers | at thermal equilibrium, the number of free electrons equals the number of holes |
| Conductivity | poor at room temperature, because only a tiny fraction of bonds are broken |
| Band gap | small: Si $\approx1.12\ \text{eV}$, Ge $\approx0.66\ \text{eV}$ |
| Temperature dependence | heating creates more electron-hole pairs, so the conductivity rises steeply (negative temperature coefficient of resistance) |
| Two kinds of carrier | electrons in the conduction band and holes in the valence band both carry current |

## Limitations

- The conductivity at room temperature is low.
- The current depends far more on temperature than on the applied voltage, so the device behaviour drifts as the temperature changes.
- The conductivity cannot be chosen: it is fixed by the material and the temperature.
- So pure semiconductors are of little use in devices until they are **doped** (page 8).

> **Watch out.** A hole is not a particle that "exists" on its own. It is a convenient description of the many valence electrons moving into an empty state. Draw it as an open circle in the valence band, never in the conduction band. And remember the hole moves **opposite** to the electrons that fill it.

---

<!-- page 3 | Effective mass -->

# Effective mass

To count carriers and to describe how they move, we need to know how an electron in a crystal responds to a force. The answer is the **effective mass**.

## Why the ordinary mass is not enough

For a free body, Newton's second law gives the acceleration produced by a force $F$:

$$
a=\frac{F}{m}
$$

This is correct only if $F$ is the **only** force acting. An electron in a crystal is not free. It moves through the periodic potential of the positive ion cores, which pushes and pulls on it differently at every point of the lattice. When we apply an **external** force (for example $F=-eE$ from an electric field), the electron's actual acceleration is the combined result of the external force and all the internal crystal forces.

We have two choices:

1. keep the true mass $m$ and add up all the internal forces (hopelessly complicated), or
2. keep only the external force and **absorb the effect of the crystal into a modified mass**.

The second choice gives

$$
a=\frac{F}{m^*}
$$

where $m^*$ is the **effective mass**. It is the mass the electron *appears* to have when it responds to an external force inside that particular band of that particular crystal.

## What determines the effective mass

The effective mass depends on the **shape of the band** near the energy where the carriers are. Quantum mechanically it is set by how the energy $E$ of a state changes with its wave vector $k$:

$$
\frac1{m^*}=\frac1{\hbar^2}\,\frac{d^2E}{dk^2}
$$

A sharply curved band gives a small effective mass (the carrier is easy to accelerate); a flat band gives a large one. You do not need this formula for the exam, but it explains the next two facts.

- In the **conduction band**, near its bottom $E_c$, the band curves upwards like $E=E_c+\dfrac{\hbar^2k^2}{2m_e^*}$. The curvature is positive, so the electron's effective mass $m_e^*$ is **positive**. Depending on the material it can be smaller or larger than the free-electron mass $m$; for example about $0.26\,m$ in silicon (for conduction) and $0.067\,m$ in gallium arsenide.
- Near the **top of the valence band** the band curves **downwards**. The curvature is negative, so an electron there has a **negative** effective mass: an external force would make it accelerate **opposite** to the force. Physically, the crystal forces win over the applied force for these electrons.

## Why we use holes in the valence band

Negative-mass electrons are awkward to think about. But the valence band near its top is almost full, with only a few empty states. Describing the motion of the few **holes** is equivalent to describing the motion of all the valence electrons, and a hole near the top of the valence band behaves like a particle with

- **positive charge** $+e$, and
- **positive effective mass** $m_h^*$.

Two negatives (negative charge, negative mass) make a positive description that obeys Newton's law in the ordinary way. So we write $m_e^*$ for the effective mass of conduction electrons and $m_h^*$ for the effective mass of holes, and both are positive numbers.

> **Key idea.** Effective mass is not a change in the electron itself. It is a bookkeeping device that lets us use $a=F/m^*$ for a carrier inside a crystal, with all the crystal forces hidden in $m^*$.

> **Note on the source.** The lecture notes said the conduction-band effective mass "can be equal to or greater than" the free electron mass. In fact it is often smaller (as the examples show); what matters is that it is a property of the band, not of the electron itself.

> **Watch out.** Do not write "the hole has negative mass". It is the **valence-band electron** near the band top that has a negative effective mass. The hole has a **positive** effective mass $m_h^*$.

---

<!-- page 4 | Density of states -->

# Density of states

## The idea

To find how many electrons are in the conduction band, we need two things for every energy $E$:

1. how many **states** (places for an electron) exist at that energy, and
2. the **probability** that each state is occupied.

The second is the Fermi-Dirac function from Module 1. The first is the **density of states**.

In a band, the allowed energy levels are so closely spaced (Module 1: about $10^{-23}\ \text{eV}$ apart) that we treat them as continuous. Instead of counting individual levels, we ask: how many states per unit volume lie in a small energy range $dE$ around $E$? That number is written $Z(E)\,dE$, and $Z(E)$ is the density of states.

> **Density of states.** The number of energy states per unit volume with energy between $E$ and $E+dE$ is
>
> $$Z(E)\,dE=\frac{4\pi}{h^3}\,(2m^*)^{3/2}\,E^{1/2}\,dE$$
>
> where $m^*$ is the effective mass of the carriers, $h$ is Planck's constant, and $E$ is measured from the edge of the band.

## Where the formula comes from (outline)

You are not asked to derive this, but the outline shows why each factor is there.

- A carrier in a crystal of volume $V$ behaves like a particle in a box. Its allowed momenta form a fine grid in "momentum space", with one state for each volume $h^3/V$ of that space.
- States with momentum between $p$ and $p+dp$ fill a thin spherical shell of volume $4\pi p^2\,dp$. Dividing by $h^3/V$ gives the number of states; dividing by $V$ gives the number per unit volume.
- Each state can hold **two** electrons of opposite spin, which gives a factor $2$.
- Finally convert from momentum to energy using $E=\dfrac{p^2}{2m^*}$, so $p=\sqrt{2m^*E}$ and $dp=\dfrac{\sqrt{2m^*}}{2\sqrt E}\,dE$. Putting it together gives the $\dfrac{4\pi}{h^3}(2m^*)^{3/2}E^{1/2}$ above.

## What it tells us

- $Z(E)\propto\sqrt E$: there are **no states exactly at the band edge**, and more and more as you go deeper into the band. The shell in momentum space grows as you move to larger momentum.
- A **larger effective mass** gives **more states** at a given energy (the factor $(m^*)^{3/2}$). Flat bands are "dense" in states.
- In the **conduction band**, energy is measured **up** from $E_c$, so $E$ is replaced by $E-E_c$:

$$
Z(E)\,dE=\frac{4\pi}{h^3}(2m_e^*)^{3/2}(E-E_c)^{1/2}\,dE\qquad(E\ge E_c)
$$

- In the **valence band**, hole energy is measured **down** from $E_v$, so $E$ is replaced by $E_v-E$:

$$
Z(E)\,dE=\frac{4\pi}{h^3}(2m_h^*)^{3/2}(E_v-E)^{1/2}\,dE\qquad(E\le E_v)
$$

Inside the band gap there are no states at all in a pure crystal, so $Z(E)=0$ there.

## How it is used

The number of electrons in a small energy range is

$$
dn=\underbrace{Z(E)\,dE}_{\text{states available}}\times\underbrace{F(E)}_{\text{probability occupied}}
$$

and the total is the integral of this over the band. The next two pages carry out that integral for electrons and for holes.

> **Watch out.** The formula uses the **effective** mass: $m_e^*$ in the conduction band, $m_h^*$ in the valence band. Writing the free electron mass $m$ is a common slip. And $E$ in the formula is the energy **measured from the band edge**, not the absolute energy.

---

<!-- page 5 | Electrons in the conduction band -->

# Density of electrons in the conduction band

## Plan

The number of electrons per unit volume in a small energy range $dE$ is

$$
\text{(number of states in } dE)\times\text{(probability each is occupied)}
$$

Then add up (integrate) over the whole conduction band, from its bottom $E_c$ to $\infty$. The upper limit $\infty$ is not literally the top of the band; it is used because, as we will see, the occupation probability falls off so fast with energy that states more than a few $kT$ above $E_c$ contribute nothing, and extending the integral to infinity makes it easy to evaluate without changing the answer.

![Band diagram of an intrinsic semiconductor: conduction band from E_C upwards, valence band below E_V, Fermi level between](/notes/cse/s1/physics/module-3/intrinsic-bands.webp)

## Step 1: the two ingredients

Let $dn$ be the number of electrons per unit volume with energy between $E$ and $E+dE$:

$$
dn=Z(E)\,dE\cdot F(E)
$$

**Number of states.** Measuring energy from the band edge $E_c$ (the lowest energy a conduction electron can have):

$$
Z(E)\,dE=\frac{4\pi}{h^3}\,(2m_e^*)^{3/2}\,(E-E_c)^{1/2}\,dE
$$

**Probability of occupation.** The Fermi-Dirac function is

$$
F(E)=\frac{1}{1+e^{(E-E_F)/kT}}
$$

**Why we may simplify it.** In a semiconductor the Fermi level lies in the gap, typically several tenths of an eV below $E_c$. For every energy in the conduction band, $E-E_F$ is therefore at least that large, which is many times $kT$ ($0.026\ \text{eV}$ at room temperature). For example, if $E_c-E_F=0.56\ \text{eV}$ (mid-gap silicon) then even at the band edge $\dfrac{E-E_F}{kT}\approx21.7$ and $e^{21.7}\approx2.6\times10^9$. Next to that, the $1$ in the denominator is utterly negligible:

$$
F(E)\approx e^{-(E-E_F)/kT}=e^{(E_F-E)/kT}
$$

This is the **Boltzmann approximation**: the electrons in the conduction band are so few and so sparsely spread over the available states that the Pauli exclusion principle (which the $1$ in the Fermi-Dirac function expresses) hardly matters, and they behave like a classical gas.

> **Note on the source.** The lecture notes said "$(E-E_F)\gg kT$ for all $T$". The approximation is really a condition: it holds when the Fermi level is several $kT$ below the conduction band (a **non-degenerate** semiconductor), which is the normal case. It fails for very heavily doped material, where the Fermi level can reach or enter the band.

## Step 2: set up the integral

Multiply the two ingredients and integrate over the band:

$$
n=\int_{E_c}^{\infty}\frac{4\pi}{h^3}(2m_e^*)^{3/2}(E-E_c)^{1/2}\,e^{(E_F-E)/kT}\,dE
$$

Take the constants outside. Split $e^{(E_F-E)/kT}=e^{E_F/kT}\,e^{-E/kT}$; the first factor does not depend on $E$:

$$
n=\frac{4\pi}{h^3}(2m_e^*)^{3/2}\,e^{E_F/kT}\int_{E_c}^{\infty}(E-E_c)^{1/2}\,e^{-E/kT}\,dE
$$

## Step 3: substitute

The integrand depends on the energy **above the band edge**, so we use that as the new variable. Let $x=E-E_c$, so $E=x+E_c$ and $dE=dx$. The limits $E=E_c$ and $E=\infty$ become $x=0$ and $x=\infty$. Then $e^{-E/kT}=e^{-E_c/kT}e^{-x/kT}$, and the constant factor $e^{-E_c/kT}$ joins $e^{E_F/kT}$ outside:

$$
n=\frac{4\pi}{h^3}(2m_e^*)^{3/2}\,e^{(E_F-E_c)/kT}\int_{0}^{\infty}x^{1/2}\,e^{-x/kT}\,dx
$$

## Step 4: the standard integral

$$
\int_0^\infty x^{1/2}e^{-ax}\,dx=\frac{\sqrt\pi}{2a^{3/2}}
$$

With $a=\dfrac1{kT}$ this gives $\dfrac{\sqrt\pi}{2}(kT)^{3/2}$, so

$$
n=\frac{4\pi}{h^3}(2m_e^*)^{3/2}\,e^{(E_F-E_c)/kT}\cdot\frac{\sqrt\pi}{2}(kT)^{3/2}
=\frac{2\,\pi^{3/2}\,(2m_e^*kT)^{3/2}}{h^3}\,e^{(E_F-E_c)/kT}
$$

Now tidy the constants: $\dfrac{2\pi^{3/2}(2m_e^*kT)^{3/2}}{h^3}=2\left(\dfrac{2\pi m_e^*kT}{h^2}\right)^{3/2}$, since $(\pi)^{3/2}(2m_e^*kT)^{3/2}=(2\pi m_e^*kT)^{3/2}$ and $h^3=(h^2)^{3/2}$.

## Result

$$
\boxed{n=2\left(\frac{2\pi m_e^*kT}{h^2}\right)^{3/2}e^{-(E_c-E_F)/kT}=N_c\,e^{-(E_c-E_F)/kT}}
$$

## Meaning of $N_c$

The constant

$$
N_c=2\left(\frac{2\pi m_e^*kT}{h^2}\right)^{3/2}
$$

is called the **effective density of states in the conduction band**. The result reads as if all the conduction band states were squeezed into a single level at $E_c$ holding $N_c$ states per unit volume, each occupied with the Boltzmann probability $e^{-(E_c-E_F)/kT}$. For silicon at $300\ \text{K}$ it is about $3\times10^{25}\ \text{m}^{-3}$ ($3\times10^{19}\ \text{cm}^{-3}$). Note that $N_c$ itself depends on temperature, as $T^{3/2}$, because at higher temperature the electrons spread over a wider slice of the band.

> **Key idea.** The electron density depends **exponentially** on how far the Fermi level lies below the conduction band. Move $E_F$ up by $kT$ and $n$ grows by a factor $e\approx2.7$; move it up by $0.06\ \text{eV}$ (about $2.3\,kT$) and $n$ grows tenfold.

> **Note on the source.** One place in the lecture notes wrote the standard integral as $\dfrac{\sqrt\pi}{2a}$. The correct form is $\dfrac{\sqrt\pi}{2a^{3/2}}$; the two agree only when $a=1$.

> **Watch out.** Keep track of the sign in the exponent: $E_F<E_c$, so $E_F-E_c$ is **negative** and $n$ is a small fraction of $N_c$. The final factor $2$ and the power $\tfrac32$ both come from the algebra in step 4: show that working in an exam.

---

<!-- page 6 | Holes in the valence band -->

# Density of holes in the valence band

The method mirrors the electron derivation, with two changes: the states are in the valence band, and we need the probability that a state is **empty** (holds a hole) rather than full.

## Step 1: the two ingredients

Let $dp$ be the number of holes per unit volume with energy between $E$ and $E+dE$:

$$
dp=Z(E)\,dE\cdot F_h(E)
$$

**Number of states.** Hole energies lie below the top of the valence band $E_v$, so measure from $E_v$ downwards. $E_v$ plays the same role for holes that $E_c$ plays for electrons: it is the edge of the band where the carriers collect.

$$
Z(E)\,dE=\frac{4\pi}{h^3}\,(2m_h^*)^{3/2}\,(E_v-E)^{1/2}\,dE
$$

**Probability that a state holds a hole.** A hole is the absence of an electron. A state is either occupied (probability $F$) or empty (probability $F_h$), and these must add up to one, so

$$
F_h(E)=1-F(E)=1-\frac{1}{1+e^{(E-E_F)/kT}}=\frac{1+e^{(E-E_F)/kT}-1}{1+e^{(E-E_F)/kT}}=\frac{e^{(E-E_F)/kT}}{1+e^{(E-E_F)/kT}}
$$

**Why we may simplify it.** In the valence band $E<E_F$ by several $kT$, so $E-E_F$ is large and **negative**, and $e^{(E-E_F)/kT}\ll1$. The term in the denominator is negligible beside $1$:

$$
F_h(E)\approx e^{(E-E_F)/kT}
$$

This is the same Boltzmann approximation, now for holes: very few valence states are empty, so holes too behave like a dilute classical gas.

## Step 2: set up the integral

Holes occupy energies from deep in the band up to $E_v$. As for electrons, we take the lower limit as $-\infty$, because states more than a few $kT$ below $E_v$ are almost certainly full and contribute no holes:

$$
p=\int_{-\infty}^{E_v}\frac{4\pi}{h^3}(2m_h^*)^{3/2}(E_v-E)^{1/2}\,e^{(E-E_F)/kT}\,dE
=\frac{4\pi}{h^3}(2m_h^*)^{3/2}\,e^{-E_F/kT}\int_{-\infty}^{E_v}(E_v-E)^{1/2}\,e^{E/kT}\,dE
$$

## Step 3: substitute

Let $x=\dfrac{E_v-E}{kT}$, the depth below the band top in units of $kT$. Then $\dfrac{E}{kT}=\dfrac{E_v}{kT}-x$, $E_v-E=kTx$ and $dE=-kT\,dx$. The limits $E=-\infty$ and $E=E_v$ become $x=\infty$ and $x=0$:

$$
p=\frac{4\pi}{h^3}(2m_h^*)^{3/2}\,e^{-E_F/kT}\int_{\infty}^{0}(kTx)^{1/2}\,e^{E_v/kT}e^{-x}\,(-kT\,dx)
$$

The minus sign reverses the limits, and $(kT)^{1/2}\cdot kT=(kT)^{3/2}$ joins the other constants:

$$
p=\frac{4\pi}{h^3}(2m_h^*kT)^{3/2}\,e^{(E_v-E_F)/kT}\int_{0}^{\infty}x^{1/2}e^{-x}\,dx
$$

## Step 4: the standard integral

With $a=1$, $\displaystyle\int_0^\infty x^{1/2}e^{-x}dx=\frac{\sqrt\pi}{2}$, so

$$
p=\frac{4\pi}{h^3}(2m_h^*kT)^{3/2}\cdot\frac{\sqrt\pi}{2}\,e^{(E_v-E_F)/kT}
$$

## Result

$$
\boxed{p=2\left(\frac{2\pi m_h^*kT}{h^2}\right)^{3/2}e^{-(E_F-E_v)/kT}=N_v\,e^{-(E_F-E_v)/kT}}
$$

where

$$
N_v=2\left(\frac{2\pi m_h^*kT}{h^2}\right)^{3/2}
$$

is the **effective density of states in the valence band**. It has the same meaning as $N_c$: the result is as if all the valence band states were concentrated at $E_v$. Because holes usually have a different effective mass from electrons, $N_v$ differs from $N_c$ (for silicon $N_v\approx1.0\times10^{19}\ \text{cm}^{-3}$ against $N_c\approx2.8\times10^{19}\ \text{cm}^{-3}$).

> **Key idea.** The two results are mirror images. Electrons: exponent $-(E_c-E_F)/kT$, the distance from $E_F$ **up** to the conduction band. Holes: exponent $-(E_F-E_v)/kT$, the distance from $E_F$ **down** to the valence band. Moving the Fermi level up raises $n$ and lowers $p$ by the same factor.

> **Watch out.** Use $F_h=1-F$, not $F$, for holes. Remember the effective mass changes to $m_h^*$, the band edge to $E_v$, and the order inside the exponent to $E_F-E_v$.

---

<!-- page 7 | Intrinsic carrier concentration -->

# Intrinsic carrier concentration

## The idea

In a pure semiconductor every broken bond makes one electron and one hole, so

$$
n=p=n_i
$$

where $n_i$ is the **intrinsic carrier concentration** (or intrinsic carrier density). It is the number of electrons (or holes) per unit volume in the pure material at a given temperature.

## Derivation

Since $n=p=n_i$, we can write $n_i^2=np$. Using the product is the trick: it removes the Fermi level, which we do not yet know. Multiply the two results of the last two pages:

$$
n_i^2=2\left(\frac{2\pi m_e^*kT}{h^2}\right)^{3/2}e^{(E_F-E_c)/kT}\times2\left(\frac{2\pi m_h^*kT}{h^2}\right)^{3/2}e^{(E_v-E_F)/kT}
$$

Combine the prefactors: $2\times2=4$, and $\left(\dfrac{2\pi kT}{h^2}\right)^{3/2}\times\left(\dfrac{2\pi kT}{h^2}\right)^{3/2}=\left(\dfrac{2\pi kT}{h^2}\right)^{3}$, leaving $(m_e^*)^{3/2}(m_h^*)^{3/2}=(m_e^*m_h^*)^{3/2}$.

Combine the exponents: $(E_F-E_c)+(E_v-E_F)=E_v-E_c=-E_g$. The $E_F$ terms cancel:

$$
n_i^2=4\left(\frac{2\pi kT}{h^2}\right)^3(m_e^*m_h^*)^{3/2}\,e^{-E_g/kT}
$$

Taking the square root:

$$
\boxed{n_i=2\left(\frac{2\pi kT}{h^2}\right)^{3/2}(m_e^*m_h^*)^{3/4}\,e^{-E_g/2kT}=\sqrt{N_cN_v}\;e^{-E_g/2kT}}
$$

## Why $n_i$ depends only on $E_g$ and $T$

The Fermi level has cancelled out completely. That makes physical sense: in a pure crystal the number of broken bonds is decided by how much energy it costs to break one ($E_g$) and how much thermal energy is available ($kT$), together with the number of states available to receive the carriers ($N_c$ and $N_v$, which depend on the effective masses and on $T$). Nothing else about the crystal enters.

## Law of mass action

The product $np$ does not depend on $E_F$:

$$
np=n_i^2
$$

So at a given temperature, for a given semiconductor, the **product** of electron and hole densities is a constant. This is the **law of mass action**, named by analogy with chemistry, where the product of the concentrations of reacting species is fixed at equilibrium. Here the "reaction" is

$$
\text{bond}\ \rightleftharpoons\ \text{electron}+\text{hole}
$$

Generation runs at a rate set by the temperature, and recombination runs at a rate proportional to $np$ (an electron needs to meet a hole). At equilibrium the two rates are equal, so $np$ is fixed.

The law holds for intrinsic **and** extrinsic semiconductors, because the derivation never assumed $n=p$ until the very end. If doping raises $n$, more electrons are available to recombine with holes, so $p$ must fall until $np$ is back at $n_i^2$. Page 9 uses this to find the minority carrier density in doped material.

## How $n_i$ varies

- $n_i$ is **independent of the Fermi level**.
- $n_i$ **decreases** as the band gap $E_g$ increases, exponentially. A material with a wider gap has far fewer intrinsic carriers.
- $n_i$ **increases** steeply with temperature: $n_i\propto T^{3/2}e^{-E_g/2kT}$. Both factors grow with $T$, but the exponential dominates completely; the $T^{3/2}$ factor changes by only a few per cent over the range where $n_i$ changes by orders of magnitude.
- The factor $2$ in $e^{-E_g/2kT}$ reflects the fact that breaking one bond produces **two** carriers: the energy cost $E_g$ is shared between the electron and the hole.

At room temperature, $n_i\approx1.5\times10^{16}\ \text{m}^{-3}$ for silicon and $2.5\times10^{19}\ \text{m}^{-3}$ for germanium. Germanium's smaller gap gives it over a thousand times more intrinsic carriers. Compare these with the roughly $5\times10^{28}$ atoms per cubic metre in the crystal: in silicon at room temperature, with two bonds per atom, only about one bond in $10^{13}$ is broken.

![Intrinsic carrier concentration of silicon and germanium against temperature on a log scale](/notes/cse/s1/physics/module-3/ni-vs-temperature.webp)

## A straight-line test

Taking logarithms of $n_i\propto T^{3/2}e^{-E_g/2kT}$:

$$
\ln\left(\frac{n_i}{T^{3/2}}\right)=\text{constant}-\frac{E_g}{2k}\cdot\frac1T
$$

So a graph of $\ln(n_i/T^{3/2})$ against $1/T$ is a **straight line** of slope $-E_g/2k$. Measuring the conductivity of a pure sample at several temperatures and plotting it this way is a standard laboratory method for finding the band gap.

> **Watch out.** The exponent in $n_i$ is $-E_g/2kT$, with a **2**. In $n$ or $p$ alone it is the distance to the band edge over $kT$, with no 2. And since the curve rises exponentially, a few degrees of heating changes $n_i$ a lot (see problem 1 on the numerical problems page: a $10\ \text{K}$ rise roughly doubles $n_i$ in silicon).

---

<!-- page 8 | Extrinsic semiconductors -->

# Extrinsic semiconductors

## Doping

Adding a controlled amount of impurity to an intrinsic semiconductor is **doping**; the impurity is the **dopant**; and the result is an **extrinsic semiconductor**.

The dopants come from **group V** (pentavalent, 5 valence electrons) or **group III** (trivalent, 3 valence electrons). Their atoms are about the same size as silicon and germanium atoms, so they take the place of host atoms in the crystal (substitutional impurities) without distorting it much. Very small amounts are enough: a typical doping of $10^{16}$ dopant atoms per $\text{cm}^3$ is only one dopant for every five million silicon atoms, yet it raises the carrier density about a million times above the intrinsic value.

Depending on the dopant, two types of extrinsic semiconductor are possible: **n-type** and **p-type**. Compared with intrinsic material, extrinsic semiconductors

- conduct far better,
- have a conductivity that can be **set** by choosing the doping concentration, and
- have a conductivity that depends much **less on temperature** over the normal working range (see the temperature regimes below).

## n-type semiconductors

**Dopant:** a pentavalent impurity such as phosphorus, arsenic or antimony.

- Four of the five valence electrons form covalent bonds with four neighbouring silicon atoms. The **fifth** has no bond to join. It is held only weakly by the electrostatic attraction of its parent ion, and that attraction is further weakened by the surrounding crystal (its dielectric constant is about 12 in silicon). Its ionisation energy is only about $0.01$ to $0.05\ \text{eV}$, compared with $1.1\ \text{eV}$ to break a bond.
- At ordinary temperatures thermal energy easily frees this electron and it moves into the conduction band. It leaves behind a **fixed positive ion** (for example $\text{P}^+$), bound into the lattice and unable to move. Because the impurity atom donates an electron for conduction, it is called a **donor**.
- The donor atoms are far apart and do not interact, so their electrons occupy a single discrete **donor level** $E_D$, just **below** the conduction band. The small gap $E_c-E_D$ is the ionisation energy.
- Donating an electron does **not** create a hole in the valence band. The positive charge left behind is the fixed ion, not a mobile hole.

How an n-type semiconductor behaves with temperature:

- At $0\ \text{K}$ the donors are not ionised. Their electrons sit in $E_D$, the conduction band is empty and the valence band is full: the material is an **insulator**.
- As the temperature rises, the donors ionise and their electrons enter the conduction band. Because $E_c-E_D$ is so small, by about $100\ \text{K}$ essentially all donors are ionised. Further heating cannot produce any more donor electrons.
- At high enough temperatures, intrinsic behaviour takes over: many electrons are excited from the valence band across the full gap, creating electron-hole pairs, and they eventually outnumber the donor electrons.

Electrons far outnumber holes, so **electrons are the majority carriers** and **holes are the minority carriers** (the few holes come from thermal generation). Hence the name **n-type** (negative carriers).

![n-type semiconductor: donor energy level just below the conduction band, donor electrons excited into the conduction band](/notes/cse/s1/physics/module-3/n-type-bands.webp)

## p-type semiconductors

**Dopant:** a trivalent impurity such as boron, gallium or indium.

- With only three valence electrons, the impurity is one short of completing four covalent bonds with its neighbours. One bond is left incomplete.
- An electron from a neighbouring bond can jump into this vacancy with only a little energy (about $0.01$ to $0.05\ \text{eV}$), completing the fourth bond. That leaves a **hole** in the valence band where the electron came from. The impurity atom, now carrying an extra electron, becomes a **fixed negative ion** (for example $\text{B}^-$). Because it accepts an electron from the valence band, it is called an **acceptor**.
- The acceptor atoms do not interact, so their states form a discrete **acceptor level** $E_A$, just **above** the valence band.
- Accepting an electron creates a hole **without** creating a conduction electron. The hole can move freely through the valence band, but the negative ion is fixed in place by its bonds.

How a p-type semiconductor behaves with temperature:

- At $0\ \text{K}$ the acceptor levels are empty and the valence band is full; the conduction band is also empty. The material is an **insulator**.
- With a little heating (energy of order $0.01\ \text{eV}$), valence electrons jump into the acceptor levels, leaving holes in the valence band. At normal temperatures the acceptor levels are **saturated** (all filled), and a few electrons are also excited into the conduction band.
- At high temperatures, thermally generated electron-hole pairs dominate and far outnumber the holes produced by the acceptors.

Holes far outnumber electrons, so **holes are the majority carriers** and **electrons are the minority carriers**. Hence **p-type** (positive carriers).

![p-type semiconductor: acceptor level just above the valence band, holes in the valence band](/notes/cse/s1/physics/module-3/p-type-bands.webp)

## Three temperature regimes

The temperature behaviour described above has three clear stages, shown here for n-type silicon with $10^{15}$ donors per $\text{cm}^3$.

![Electron density in n-type silicon against temperature: freeze-out below about 100 K, extrinsic plateau where n equals N_D, and the intrinsic region above about 600 K where n follows n_i](/notes/cse/s1/physics/module-3/extrinsic-temperature-regimes.webp)

1. **Freeze-out (low temperature).** There is too little thermal energy even to ionise the donors. Most donor electrons are "frozen" in $E_D$, and $n$ rises rapidly as the temperature increases.
2. **Extrinsic or saturation region (roughly $100$ to $500\ \text{K}$ for this doping).** All donors are ionised, so $n\approx N_D$, and $n_i$ is still far below $N_D$. The carrier density is **constant**, independent of temperature. This plateau is where devices are designed to work, and it is why doping gives stable conductivity.
3. **Intrinsic region (high temperature).** $n_i$ has grown until it is comparable with and then greater than $N_D$. Electron-hole pairs across the gap now dominate, and the material behaves as intrinsic: $n\approx p\approx n_i$, rising steeply with temperature. Doped devices stop working properly here, which is why silicon devices have a maximum operating temperature.

Heavier doping or a wider band gap pushes the intrinsic region to higher temperature. This is one reason silicon (gap $1.1\ \text{eV}$) replaced germanium (gap $0.66\ \text{eV}$) in most electronics: germanium becomes intrinsic at a much lower temperature.

## Summary

| | n-type | p-type |
| --- | --- | --- |
| Dopant | pentavalent (P, As, Sb) | trivalent (B, Ga, In) |
| Impurity called | donor | acceptor |
| Impurity level | $E_D$, just below $E_c$ | $E_A$, just above $E_v$ |
| Fixed ion left behind | positive | negative |
| Majority carriers | electrons | holes |
| Minority carriers | holes | electrons |
| Carrier density in the working range | $n\approx N_D$ | $p\approx N_A$ |

> **Watch out.** An n-type semiconductor is **not negatively charged**, and a p-type is not positive. Each extra electron is balanced by a positive donor ion, and each hole by a negative acceptor ion: the crystal as a whole is neutral. "n" and "p" describe the sign of the **majority mobile carriers**, not the net charge.

---

<!-- page 9 | Carrier densities in doped semiconductors -->

# Carrier densities in doped semiconductors

> **Beyond the syllabus.** The syllabus treats extrinsic semiconductors qualitatively. This page shows, with two simple equations you already have, how many majority and minority carriers a doped sample contains. It makes the law of mass action, the Fermi level and the p-n junction much easier to understand.

## Two equations

Take an n-type sample with $N_D$ donors per unit volume, all ionised (the extrinsic region of the previous page).

**1. Charge neutrality.** The sample as a whole is neutral. The positive charges are the holes and the donor ions; the negative charges are the electrons:

$$
n=N_D+p
$$

**2. Law of mass action.** At any temperature,

$$
np=n_i^2
$$

## Majority and minority carriers

In the normal case $N_D\gg n_i$. Then $p$ is tiny, the $p$ in the neutrality equation is negligible, and

$$
\boxed{n\approx N_D\qquad p\approx\frac{n_i^2}{N_D}}
$$

For a p-type sample with $N_A$ acceptors per unit volume, in the same way,

$$
\boxed{p\approx N_A\qquad n\approx\frac{n_i^2}{N_A}}
$$

- The **majority** carrier density is set by the **doping** and hardly depends on temperature.
- The **minority** carrier density is set by $n_i^2$ and so rises steeply with temperature. This is why the reverse current of a diode, which is carried by minority carriers, is so sensitive to temperature (page 15).
- Doping **raises** the majority carriers and **lowers** the minority carriers below the intrinsic value. Adding donors does not just add electrons; it also removes holes, because the extra electrons recombine with them.

**Example.** Silicon with $n_i=1.5\times10^{10}\ \text{cm}^{-3}$ is doped with $N_D=10^{16}\ \text{cm}^{-3}$ donors. Then

$$
n\approx10^{16}\ \text{cm}^{-3}\qquad p=\frac{(1.5\times10^{10})^2}{10^{16}}=\mathbf{2.25\times10^{4}\ \text{cm}^{-3}}
$$

The electrons outnumber the holes by a factor of about $4\times10^{11}$.

## Where the Fermi level sits

Combining $n=N_D$ with $n=N_c\,e^{-(E_c-E_F)/kT}$ gives the position of the Fermi level directly:

$$
E_c-E_F=kT\ln\left(\frac{N_c}{N_D}\right)\qquad\text{(n-type)}
$$

and similarly $E_F-E_v=kT\ln\left(\dfrac{N_v}{N_A}\right)$ for p-type.

**Example.** For the silicon above at $300\ \text{K}$ with $N_c=2.8\times10^{19}\ \text{cm}^{-3}$:

$$
E_c-E_F=0.02585\times\ln\left(\frac{2.8\times10^{19}}{10^{16}}\right)=0.02585\times7.94=\mathbf{0.205\ \text{eV}}
$$

The Fermi level is $0.205\ \text{eV}$ below the conduction band, well above mid-gap (which is about $0.56\ \text{eV}$ below $E_c$). Each tenfold increase in $N_D$ moves it up by $kT\ln10\approx0.06\ \text{eV}$.

> **Key idea.** Doping does not change $n_i$ (a property of the pure material); it changes how the fixed product $n_i^2$ is shared between electrons and holes, and the Fermi level moves to whatever position gives that sharing.

> **Watch out.** $p=n_i^2/N_D$ uses $n_i$ **squared**. Forgetting the square gives an answer that is wrong by a factor of $10^{10}$.

---

<!-- page 10 | Fermi level in semiconductors -->

# Fermi level in semiconductors

The Fermi level is the energy at which the occupation probability is $\tfrac12$. In a semiconductor no states exist there (it lies in the gap), but its **position** still matters enormously: by the results of pages 5 and 6, $n$ depends on how far $E_F$ is below $E_c$, and $p$ on how far it is above $E_v$. So we can read the carrier balance off the Fermi level.

## Intrinsic semiconductor

In an intrinsic semiconductor $n=p$. Substitute the two results:

$$
2\left(\frac{2\pi m_e^*kT}{h^2}\right)^{3/2}e^{(E_F-E_c)/kT}=2\left(\frac{2\pi m_h^*kT}{h^2}\right)^{3/2}e^{(E_v-E_F)/kT}
$$

Cancel the common factors $2$ and $\left(\dfrac{2\pi kT}{h^2}\right)^{3/2}$:

$$
(m_e^*)^{3/2}\,e^{(E_F-E_c)/kT}=(m_h^*)^{3/2}\,e^{(E_v-E_F)/kT}
$$

Collect the exponentials on one side. Dividing both sides by $(m_e^*)^{3/2}e^{(E_v-E_F)/kT}$ and adding the exponents, $(E_F-E_c)-(E_v-E_F)=2E_F-E_c-E_v$:

$$
e^{(2E_F-E_c-E_v)/kT}=\left(\frac{m_h^*}{m_e^*}\right)^{3/2}
$$

Take natural logarithms:

$$
\frac{2E_F-E_c-E_v}{kT}=\frac32\ln\left(\frac{m_h^*}{m_e^*}\right)
$$

Solve for $E_F$:

$$
\boxed{E_F=\frac{E_c+E_v}{2}+\frac{3kT}{4}\ln\left(\frac{m_h^*}{m_e^*}\right)}
$$

- At $T=0\ \text{K}$ the second term vanishes: $E_F=\dfrac{E_c+E_v}{2}$. The Fermi level is **exactly in the middle** of the band gap.
- At higher temperatures it shifts slightly: up if $m_h^*>m_e^*$, down if $m_h^*<m_e^*$. The physical reason: the band with the larger effective mass has more states (larger $N_c$ or $N_v$), so to keep $n=p$ the Fermi level must move a little **away** from that band.
- The shift is tiny. For silicon, with density-of-states masses $m_e^*\approx1.08\,m$ and $m_h^*\approx0.81\,m$, at $300\ \text{K}$ it is $\tfrac34\times0.02585\times\ln(0.81/1.08)\approx-0.006\ \text{eV}$, against a gap of $1.12\ \text{eV}$. So the Fermi level of an intrinsic semiconductor is usually taken to be at the **middle of the gap**.

## n-type semiconductor

The donor level $E_D$ lies just below the conduction band edge $E_c$.

- At $T=0\ \text{K}$ the donor level is full and the conduction band empty, so the Fermi level (the boundary between filled and empty states) lies **midway between $E_D$ and $E_c$**:

$$
E_{Fn}=\frac{E_c+E_D}{2}
$$

- **Low temperatures.** As the temperature rises, donor electrons move into the conduction band and the donor level begins to empty. The Fermi level **moves down** towards $E_D$. When the donors are fully ionised (around the **depletion temperature** $T_d$, so called because the donor level has been depleted of its electrons) it has fallen to about the donor level, $E_{Fn}\approx E_D$.
- **Extrinsic region.** Now $n\approx N_D$ is fixed, but $N_c$ grows as $T^{3/2}$ and $kT$ grows, so by $E_c-E_F=kT\ln(N_c/N_D)$ the Fermi level keeps **falling**, roughly linearly with $T$.
- **High temperatures.** Once intrinsic carriers dominate, the material behaves as intrinsic. Above the **intrinsic temperature** $T_i$ the Fermi level reaches the middle of the gap: $E_{Fn}=E_{Fi}$.

## p-type semiconductor

The acceptor level $E_A$ lies just above the valence band edge $E_v$.

- At $T=0\ \text{K}$ the acceptor level is empty and the valence band full, so the Fermi level lies **midway between $E_v$ and $E_A$**:

$$
E_{Fp}=\frac{E_v+E_A}{2}
$$

- **Low temperatures.** Holes in the valence band come only from the acceptors. As valence electrons fill the acceptor levels, the Fermi level **moves up** towards $E_A$. When the acceptors are saturated (around the **saturation temperature** $T_s$) it reaches about the acceptor level, $E_{Fp}\approx E_A$.
- **Extrinsic region.** With $p\approx N_A$ fixed, $E_F-E_v=kT\ln(N_v/N_A)$ grows with $T$, so the Fermi level keeps **rising**, roughly linearly.
- **High temperatures.** Above $T_i$ the material is intrinsic and $E_{Fp}=E_{Fi}$, at mid-gap.

![Fermi level against temperature: falling from near E_C towards mid-gap in n-type, rising from near E_V in p-type](/notes/cse/s1/physics/module-3/fermi-level-vs-temperature.webp)

## Effect of doping level

At a fixed temperature in the extrinsic region:

- more donors push the Fermi level **closer to the conduction band** ($E_c-E_F=kT\ln(N_c/N_D)$ gets smaller);
- more acceptors push it **closer to the valence band**.

If the doping is so heavy that the Fermi level reaches the band edge or enters the band, the semiconductor is called **degenerate** and the Boltzmann approximation (and so all the formulas above) breaks down. Tunnel diodes (Module 4) use such degenerate doping.

> **Key idea.** Doping pushes the Fermi level **towards the band with the majority carriers**: up for n-type, down for p-type. Heating always pulls it back **towards the middle of the gap**, because at high temperature every semiconductor becomes intrinsic.

> **Watch out.** In the intrinsic derivation the masses appear as $\ln(m_h^*/m_e^*)$, holes on top. Getting the ratio upside down flips the direction of the shift. And remember $T_d$ belongs to n-type (donors depleted) and $T_s$ to p-type (acceptors saturated).

---

<!-- page 11 | Conductivity of semiconductors -->

# Conductivity of semiconductors

> **Beyond the syllabus.** Module 1 gave $\sigma=ne\mu$ for a metal. In a semiconductor both electrons and holes carry current, and this short page shows how to combine them. It explains in numbers why doping matters so much.

## Two kinds of carrier

In an electric field $E$, electrons drift against the field and holes drift with it. Because their charges are opposite, **both** produce current in the **same** direction, so the two contributions add:

$$
J=J_e+J_h=n e\mu_e E+p e\mu_h E
$$

where $\mu_e$ and $\mu_h$ are the electron and hole mobilities. Comparing with $J=\sigma E$:

$$
\boxed{\sigma=e\left(n\mu_e+p\mu_h\right)}
$$

- **Intrinsic:** $n=p=n_i$, so $\sigma_i=n_ie(\mu_e+\mu_h)$.
- **n-type:** $n\approx N_D\gg p$, so $\sigma\approx N_De\mu_e$.
- **p-type:** $p\approx N_A\gg n$, so $\sigma\approx N_Ae\mu_h$.

Electrons usually have a higher mobility than holes (in silicon $\mu_e\approx0.135$ and $\mu_h\approx0.048\ \text{m}^2/\text{V s}$), because their effective mass for conduction is smaller.

## Worked examples

**Intrinsic silicon** at room temperature, $n_i=1.5\times10^{16}\ \text{m}^{-3}$:

$$
\sigma_i=1.5\times10^{16}\times1.6\times10^{-19}\times(0.135+0.048)=\mathbf{4.4\times10^{-4}\ \text{S/m}}
$$

**Intrinsic germanium**, $n_i=2.5\times10^{19}\ \text{m}^{-3}$, $\mu_e=0.39$, $\mu_h=0.19\ \text{m}^2/\text{V s}$:

$$
\sigma_i=2.5\times10^{19}\times1.6\times10^{-19}\times(0.39+0.19)=\mathbf{2.3\ \text{S/m}}
$$

about five thousand times better than silicon, because of its smaller gap.

**Doped silicon** with $N_D=10^{22}\ \text{m}^{-3}$ ($10^{16}\ \text{cm}^{-3}$):

$$
\sigma\approx N_De\mu_e=10^{22}\times1.6\times10^{-19}\times0.135=\mathbf{216\ \text{S/m}}
$$

That is about **half a million times** the intrinsic value, from one dopant atom per five million silicon atoms. Its resistivity is $1/216\approx4.6\times10^{-3}\ \Omega\,\text{m}$.

## Temperature dependence

- **Intrinsic:** $\sigma_i$ follows $n_i$, so it rises steeply (exponentially) with temperature. The mobilities fall slowly as lattice vibrations increase, but that is swamped by the rise in $n_i$. Hence the **negative temperature coefficient of resistance** of semiconductors.
- **Extrinsic region:** $n\approx N_D$ is constant, so $\sigma$ changes only through the mobility, which **falls** slightly with temperature. Over this range a doped semiconductor behaves rather like a metal, with a small positive temperature coefficient.

> **Watch out.** In $\sigma=e(n\mu_e+p\mu_h)$ the two terms **add**, even though electrons and holes move in opposite directions. Opposite charge and opposite velocity give current in the same direction.

---

<!-- page 12 | Forming a p-n junction -->

# Forming a p-n junction

## Why junctions matter

On its own, a p-type or n-type crystal just conducts like a poor conductor, with the same resistance whichever way the current flows. There is no significant use for it as such. Nearly all semiconductor devices instead combine the two types. The simplest is a single **p-n junction**, or **p-n junction diode**: one crystal that is p-type on one side and n-type on the other, made by special manufacturing processes (diffusing or growing dopants into a single crystal; simply pressing two pieces together does not work, because the surfaces would not make a perfect crystal contact).

## Diffusion and the depletion region

The p-side has many holes and few electrons; the n-side has many electrons and few holes. At the moment the junction is formed:

1. **Diffusion.** Any particles that are more concentrated in one place than another spread out, just as ink spreads through water. So **electrons diffuse from n to p** and **holes diffuse from p to n**. This movement driven by a concentration difference is called **diffusion**, and the current it carries is the **diffusion current**.
2. **Recombination.** Near the junction the diffusing electrons and holes meet and **recombine**: conduction electrons drop into holes and become bound valence electrons. Both carriers disappear.
3. **A region without mobile carriers.** A thin region on both sides of the junction is left **without mobile carriers**. This is the **depletion region** (depleted of carriers). It is about $1\ \mu\text{m}$ wide, narrower for heavier doping, and because it has no free carriers it behaves like an **insulator**.
4. **Uncovered ions.** What is left in the depletion region are the **fixed ions**. On the p-side, each acceptor that has lost its hole is now an uncovered **negative** ion; on the n-side, each donor that has lost its electron is an uncovered **positive** ion. These ions cannot move, so the depletion region carries a net charge on each side and is also called the **space charge region**. The total charge on the two sides is equal and opposite.

![p-n junction: negative acceptor ions and holes on the p-side, positive donor ions and free electrons on the n-side, the depletion layer, and the barrier potential](/notes/cse/s1/physics/module-3/pn-junction-depletion.webp)

## Barrier potential

The double layer of ions (positive on the n-side, negative on the p-side) produces an **electric field** inside the depletion region, pointing from the positive donor ions (n-side) to the negative acceptor ions (p-side).

This field acts on any carrier that wanders into the region:

- it pushes **electrons** back towards the n-side, and
- it pushes **holes** back towards the p-side.

So it **opposes further diffusion** of the majority carriers. As more carriers diffuse and recombine, the ion layers grow, the field strengthens, and diffusion is resisted more and more. The process is self-limiting.

The potential difference across the depletion region is the **barrier potential** (junction potential or built-in potential) $V_0$: about $0.7\ \text{V}$ for silicon and $0.3\ \text{V}$ for germanium. A majority electron on the n-side needs an energy $eV_0$ to climb over this barrier.

> **Beyond the syllabus.** Combining the results of pages 5, 6 and 9 gives the built-in potential as $V_0=\dfrac{kT}{e}\ln\left(\dfrac{N_AN_D}{n_i^2}\right)$. For silicon with $N_A=N_D=10^{16}\ \text{cm}^{-3}$ and $n_i=1.5\times10^{10}\ \text{cm}^{-3}$ at $300\ \text{K}$ this is $0.02585\times\ln(4.4\times10^{11})\approx0.69\ \text{V}$, in line with the $0.7\ \text{V}$ quoted for silicon.

## Drift of minority carriers

There are also a few **minority carriers** on each side: holes in the n-region and electrons in the p-region, created by thermal generation. If one of them reaches the edge of the depletion region, the junction field does not stop it; it **sweeps it across**. A hole from the n-side is pushed to the p-side; an electron from the p-side is pushed to the n-side.

Movement driven by an electric field is called **drift**, and this flow is the **drift current**. It is small, because minority carriers are few, and it does not depend on the height of the barrier: every minority carrier that arrives at the edge is swept across, however strong the field. So it reaches a **saturation value** set by the rate at which minority carriers are generated, which depends on temperature.

> **Key idea.** At equilibrium the **diffusion current** of majority carriers is exactly balanced by the **drift current** of minority carriers, in the opposite direction, so the net current is zero. Both currents still flow; they cancel.

## Band diagram of the junction

Before contact, the n-side bands sit **lower** in energy than the p-side bands, because the Fermi level of n-type is near its conduction band and that of p-type is near its valence band. As high-energy electrons cross from n to p, the n-side loses negative charge and becomes positive, which lowers the electron energy there: the n-side bands move **down** relative to the p-side. Equilibrium is reached when the **Fermi levels on the two sides are equal**.

![Energy band diagram of a p-n junction at equilibrium: bands bend down from the p region to the n region across the depletion region](/notes/cse/s1/physics/module-3/pn-junction-bands.webp)

- The bands now **bend** across the depletion region. An electron in the n-side conduction band has to climb an **energy hill** of height $eV_0$ to reach the p-side. A hole on the p-side faces the same hill, upside down, to reach the n-side (for holes, energy increases **downwards** on the diagram).
- Both the conduction band and the valence band shift by the same amount, so the **band gap is unchanged** on each side: it still takes the same energy for a valence electron to become a free electron.

## Why the Fermi levels must line up

Before contact, the Fermi level of the n-type material is near its conduction band and that of the p-type is near its valence band. The Fermi level behaves like a "level" of electron energy, in the same way that water finds a common level in connected tanks or heat flows until temperatures are equal: in a system in **thermal equilibrium** it must be the **same everywhere**. If it were higher on one side, electrons there would have more states occupied at a given energy than on the other side and would flow across until the difference vanished. So electrons flow from the side with the higher Fermi level (n) to the side with the lower one (p) until the two match, and the band edges in the two regions shift to make that alignment possible.

![Common Fermi level across a p-n junction, with electron and hole diffusion and drift currents in the depletion region](/notes/cse/s1/physics/module-3/pn-junction-currents.webp)

> **Note on the source.** The lecture notes described the electron flow as continuing "until the top of the conduction band of the n-region aligns with the bottom of the conduction band of the p-region". The correct condition is that the **Fermi levels** align; the conduction band edges then differ by $eV_0$, as the band diagram shows.

> **Watch out.** The junction field points from **n to p**, because the n-side is left with positive ions. It pushes electrons back towards n and holes back towards p, which is what stops the diffusion. Do not draw the depletion region as charged on one side only: both sides carry equal and opposite charge.

---

<!-- page 13 | Biasing a p-n junction -->

# Biasing a p-n junction

Applying an external voltage across the junction is called **biasing**. The external battery adds its own electric field to the built-in field of the junction. Which way round the battery is connected decides whether the two fields add or oppose, and that decides almost everything.

## Forward bias

> **Forward bias.** The **p-side** is connected to the **positive** terminal and the **n-side** to the **negative** terminal.

![Forward-biased p-n junction with a thin depletion layer, and the equivalent circuit of a conducting diode](/notes/cse/s1/physics/module-3/forward-bias.webp)

What happens, step by step:

- The applied field points from p to n through the junction, **opposite** to the built-in field (which points from n to p). The net field across the junction is therefore **smaller** than the built-in field.
- The positive terminal pushes holes in the p-region towards the junction, and the negative terminal pushes electrons in the n-region towards it. They neutralise some of the fixed ions at the edges of the depletion region, so the **depletion region narrows** and becomes less resistive.
- The **barrier height falls** from $eV_0$ to $e(V_0-V)$. Because the number of majority carriers able to climb a barrier depends **exponentially** on its height, even a small reduction lets far more of them over: the diffusion current rises enormously.
- At about $0.3\ \text{V}$ for germanium and $0.7\ \text{V}$ for silicon the barrier is effectively removed and the depletion region offers negligible resistance. Majority carriers then cross easily and the current rises steeply.
- The drift current of minority carriers is unchanged (it never depended on the barrier height), so it is now swamped by the much larger diffusion current.

What happens in the external circuit:

- A free electron that crosses from n to p recombines with a hole in the p-region and becomes a valence electron. It continues through the p-region by hopping from hole to hole (as valence-band current) to the positive terminal.
- To replace it, the **negative terminal** injects another electron into the n-region.
- At the same time, the **positive terminal** pulls an electron out of a covalent bond in the p-region, creating a new hole there. The electron enters the external circuit; the hole stays in the p-region and moves towards the junction.
- The result is a large, steady current: through the diode carried by majority carriers, and in the wires carried by electrons.

## Reverse bias

> **Reverse bias.** The **p-side** is connected to the **negative** terminal and the **n-side** to the **positive** terminal.

![Reverse-biased p-n junction with a wide depletion layer, and the equivalent circuit of a blocking diode](/notes/cse/s1/physics/module-3/reverse-bias.webp)

What happens:

- The applied field is in the **same** direction as the built-in field, so the net field across the junction is **larger**.
- The negative terminal pulls holes away from the junction on the p-side, and the positive terminal pulls electrons away on the n-side. More fixed ions are uncovered, so the **depletion region widens** and becomes more resistive.
- The **barrier height rises** to $e(V_0+V_R)$. Hardly any majority carriers can climb it, so the diffusion current falls practically to zero.
- Minority carriers are still swept across by the (now stronger) field, giving a **small reverse current**. Their number is fixed by temperature, not by voltage, so once the reverse voltage is more than a few tenths of a volt the reverse current **saturates** at a constant value, the reverse saturation current $I_s$.
- A very large reverse voltage causes **breakdown** of the junction (page 15).

## Comparison

| | Forward bias | Reverse bias |
| --- | --- | --- |
| Connection | p to $+$, n to $-$ | p to $-$, n to $+$ |
| Applied field vs built-in field | opposite | same direction |
| Depletion region | narrower | wider |
| Barrier height | lowered, to $e(V_0-V)$ | raised, to $e(V_0+V_R)$ |
| Main current | diffusion of majority carriers | drift of minority carriers |
| Size of current | large (mA to A), rises exponentially | tiny ($\mu\text{A}$ or nA), saturates |
| Diode acts as | a closed switch (low resistance) | an open switch (high resistance) |

This one-way behaviour, conducting in one direction and blocking in the other, is what makes the diode useful: it is the basis of the rectifiers in Module 4.

> **Watch out.** "Forward" means **p to positive**. A common slip is to remember it the other way round: think "**p**ositive to **p**". And in reverse bias the depletion region gets **wider**, not narrower.

---

<!-- page 14 | The diode equation -->

# The diode equation

## The idea

The **diode equation** gives the current $I$ through a p-n junction as a function of the applied voltage $V$. It turns the qualitative picture of the last page into a formula. The total current is the sum of an electron current and a hole current:

$$
I=I_e+I_h
$$

We derive $I_e$ in detail; $I_h$ follows in exactly the same way.

At equilibrium (no bias), electrons diffuse from n to p (majority carriers) and electrons drift from p to n (minority carriers pulled by the barrier field), and the two currents are equal. The same is true for holes. The key question is: how does the applied voltage upset this balance?

## Step 1: electron density on each side at equilibrium

We use the result of page 5, $n=N_c\,e^{-(E_c-E_F)/kT}$, on each side of the junction. The Fermi level $E_F$ is the **same** on both sides (page 12), which is what lets us compare them.

Take the top of the n-side valence band as the zero of energy. Then the bottom of the n-side conduction band is at $E_g$, and

$$
n_n=N_c\,e^{(E_F-E_g)/kT}\qquad\text{where }N_c=2\left(\frac{2\pi m_e^*kT}{h^2}\right)^{3/2}
$$

On the p-side the bands are raised by the barrier energy $eV_0$, so the bottom of its conduction band is at $E_g+eV_0$. (The gap on the p-side is still $E_g$; the extra $eV_0$ is the band bending due to junction formation.) Its electron density is

$$
n_p=N_c\,e^{(E_F-E_g-eV_0)/kT}
$$

Dividing, $N_c$, $E_F$ and $E_g$ all cancel:

$$
\frac{n_p}{n_n}=e^{-eV_0/kT}\qquad\Longrightarrow\qquad n_p=n_n\,e^{-eV_0/kT}
$$

**Meaning.** The minority electron density on the p-side equals the majority density on the n-side reduced by the Boltzmann factor for climbing the barrier. Only those n-side electrons with enough energy to climb $eV_0$ are found on the p-side. For silicon, with $V_0=0.7\ \text{V}$ at $300\ \text{K}$, the factor $e^{-eV_0/kT}$ is about $2\times10^{-12}$.

At equilibrium, diffusion and drift balance and this density stays fixed.

## Step 2: apply a forward voltage $V$

The barrier falls from $V_0$ to $V_0-V$. Two things happen:

- **Diffusion increases.** More n-side electrons now have enough energy to climb the lower barrier, so more of them reach the p-side.
- **Drift stays almost the same.** The drift current is set by how many minority electrons are generated on the p-side, which depends on temperature, not on the barrier.

The new electron density on the p-side, just at the edge of the junction, is given by the same Boltzmann relation with the lower barrier:

$$
n_p^*=n_n\,e^{-e(V_0-V)/kT}=n_n\,e^{-eV_0/kT}\,e^{eV/kT}=n_p\,e^{eV/kT}
$$

So the applied voltage multiplies the electron density on the p-side by $e^{eV/kT}$. This exponential factor is the heart of the diode equation.

## Step 3: the extra electrons give the current

The increase in the electron density on the p-side is

$$
\Delta n_p=n_p^*-n_p=n_p\left(e^{eV/kT}-1\right)
$$

These extra (injected) electrons diffuse into the p-region and recombine there, and as they do so new electrons must keep crossing the junction to replace them. The resulting electron current is proportional to this excess:

$$
I_e\propto n_p\left(e^{eV/kT}-1\right)\qquad\Longrightarrow\qquad I_e=I_{es}\left(e^{eV/kT}-1\right)
$$

where $I_{es}$ is a constant (it contains $n_p$ and the factors describing diffusion). The $-1$ is the drift current, which still flows the other way and is subtracted.

In exactly the same way, holes injected from the p-side into the n-side give a hole current

$$
I_h=I_{hs}\left(e^{eV/kT}-1\right)
$$

## Step 4: add

$$
I=I_e+I_h=(I_{es}+I_{hs})\left(e^{eV/kT}-1\right)
$$

$$
\boxed{I=I_s\left(e^{eV/kT}-1\right)}\qquad I_s=I_{es}+I_{hs}
$$

This is the **diode equation**.

## Special cases

1. **Reverse bias**, $V=-V_R$:

$$
I=I_s\left(e^{-eV_R/kT}-1\right)
$$

For a reverse voltage of more than a few tenths of a volt, $e^{-eV_R/kT}\approx0$ and $I=-I_s$. The minus sign means the current flows the other way, from n to p. This is the largest reverse current at that temperature (before breakdown), so $I_s$ is called the **reverse saturation current**. Physically it is just the drift current of minority carriers, with no diffusion to cancel it.

2. **Large forward bias**, $eV\gg kT$: the $-1$ is negligible and

$$
I\approx I_s\,e^{eV/kT}
$$

The current grows tenfold for every increase in $V$ of $\dfrac{kT}{e}\ln10\approx60\ \text{mV}$ at room temperature.

3. **No bias**, $V=0$: $I=I_s(1-1)=0$. No current flows without an applied voltage: diffusion and drift balance exactly.

4. **Practical diodes** deviate a little from the ideal equation (for example because some carriers recombine inside the depletion region). This is allowed for with an **ideality factor** $\eta$:

$$
I=I_s\left(e^{eV/\eta kT}-1\right)
$$

$\eta$ is taken as about $1$ for germanium and $2$ for silicon, so it is also called the material constant.

5. **Thermal voltage.** The combination $V_T=\dfrac{kT}{e}$ (about $25.9\ \text{mV}$ at $300\ \text{K}$) is the **thermal voltage**, and the equation is often written

$$
I=I_s\left(e^{V/\eta V_T}-1\right)
$$

![Ideal diode equation: exponential forward current, and reverse current saturating at minus I_s](/notes/cse/s1/physics/module-3/ideal-diode-curve.webp)

## Temperature and the saturation current

$I_s$ is carried by minority carriers, whose density is $n_i^2/N_A$ or $n_i^2/N_D$ (page 9). So $I_s\propto n_i^2$, which rises extremely fast with temperature. In practice the reverse saturation current of a silicon diode roughly **doubles for every $10\ ^\circ\text{C}$ rise**. This is why diode circuits are temperature sensitive.

> **Watch out.** In $e^{eV/kT}$ use consistent units: either $e$ in coulombs with $k$ in J/K, or (simpler) write $\dfrac{eV}{kT}=\dfrac{V}{kT/e}$ with $kT$ in **eV**, so that $kT/e$ is just $8.617\times10^{-5}\,T$ volts. And keep the $-1$: it is what makes the current zero at $V=0$ and equal to $-I_s$ in reverse bias.

---

<!-- page 15 | V-I characteristics -->

# V-I characteristics of a p-n junction

A **V-I characteristic** (volt-ampere characteristic) is a graph of the current through a device against the voltage across it. For a p-n junction diode it has three regions.

![V-I characteristic of a p-n junction diode, with forward current in mA, reverse current in microamperes, the barrier voltage and the breakdown voltage](/notes/cse/s1/physics/module-3/diode-vi-characteristic.webp)

## How the graph is measured

The diode is connected in series with a resistor (to limit the current) and a variable supply, with a voltmeter across the diode and a milliammeter (forward) or microammeter (reverse) in series. The supply is increased in small steps and the current recorded at each voltage, first in forward bias and then, with the supply reversed, in reverse bias.

## 1. Forward bias region

- While the forward voltage $V$ is less than the barrier potential $V_0$, the barrier still blocks most majority carriers and the current is **negligibly small** (region OA in the figure).
- When $V$ reaches about $V_0$, the current begins to rise sharply. This voltage is the **knee voltage** (cut-in voltage or threshold voltage): about $0.3\ \text{V}$ for germanium and $0.7\ \text{V}$ for silicon. It is where the curve "bends like a knee".
- Beyond it the barrier has effectively gone and the forward current rises **exponentially**, as the diode equation predicts (region AB). In a real diode the rise eventually becomes more nearly straight, because the resistance of the bulk p and n regions starts to limit the current.
- The knee is not a sharp physical threshold: the current is exponential everywhere. It only looks like a knee because on a linear milliampere scale the current is invisible until it reaches a noticeable size.

## 2. Reverse bias region

- Practically no current flows. Only the **minority carriers** cross, giving a tiny reverse current, carried by drift.
- The number of minority carriers is fixed by the temperature, not by the voltage, so the reverse current quickly reaches a constant value, the **reverse saturation current** $I_s$, and stays there as the reverse voltage increases.
- The reverse current is so much smaller than the forward current (microamperes or nanoamperes against milliamperes) that it is plotted on a **different scale**.
- Because $I_s\propto n_i^2$, the reverse current rises steeply with temperature.

## 3. Breakdown region

- When the reverse voltage is increased far enough, the field in the depletion region becomes very strong. The minority carriers crossing it gain so much kinetic energy that they knock electrons out of covalent bonds in the semiconductor atoms (**ionisation by collision**). Each freed electron is accelerated in turn and frees more, a chain reaction called an **avalanche**.
- The reverse current rises abruptly and the junction resistance falls. The reverse voltage at which this happens is the **breakdown voltage**.
- In an ordinary diode the large current and power at breakdown heat the junction and can **permanently damage** it, so an ordinary diode is never operated in this region.
- In very heavily doped junctions breakdown happens instead by **Zener breakdown**, in which the strong field pulls electrons directly out of their bonds (by tunnelling). Zener diodes, in Module 4, are designed to work safely in breakdown.

## Static and dynamic resistance

Two useful ways of describing the curve:

- **Static (DC) resistance** at a point: $R=\dfrac{V}{I}$.
- **Dynamic (AC) resistance**: the reciprocal of the slope, $r=\dfrac{\Delta V}{\Delta I}$. From the diode equation, for forward bias $r\approx\dfrac{\eta V_T}{I}$: at $1\ \text{mA}$ and room temperature with $\eta=1$, $r\approx26\ \Omega$. It is small in forward bias and very large in reverse bias.

> **Watch out.** The two halves of the graph use **different current scales**: milliamperes forward, microamperes reverse. Label both axes when you draw it, and mark the knee voltage and the breakdown voltage.

---

<!-- page 16 | Numerical problems -->

# Numerical problems

Constants used: $k=8.617\times10^{-5}\ \text{eV/K}$. In the diode problems $\dfrac{eV}{kT}$ is evaluated as $\dfrac{V\ (\text{volt})}{kT\ (\text{eV})}$.

## Intrinsic carriers and band gap

**Problem 1.** The forbidden gap of pure silicon is $1.1\ \text{eV}$. Compare the number of conduction electrons at $37\ ^\circ\text{C}$ and $27\ ^\circ\text{C}$.

From $n_i\propto T^{3/2}e^{-E_g/2kT}$, with $T_1=300\ \text{K}$ and $T_2=310\ \text{K}$:

$$
\frac{n_i(310)}{n_i(300)}=\left(\frac{310}{300}\right)^{3/2}\exp\left[\frac{E_g}{2k}\left(\frac1{300}-\frac1{310}\right)\right]
$$

$$
=1.0504\times\exp\left[\frac{1.1\times1.075\times10^{-4}}{2\times8.617\times10^{-5}}\right]=1.0504\times e^{0.686}=\mathbf{2.09}
$$

A $10\ \text{K}$ rise roughly **doubles** the number of conduction electrons. Notice that almost all of this comes from the exponential; the $T^{3/2}$ factor contributes only 5 %.

**Problem 2.** An intrinsic semiconductor has $E_g=1.1\ \text{eV}$ and effective density of states $N_c=2.8\times10^{19}\ \text{cm}^{-3}$. Find the electron density at $300\ \text{K}$, using $n_i=N_c\,e^{-E_g/2kT}$.

$$
2kT=2\times8.617\times10^{-5}\times300=0.0517\ \text{eV}\qquad\frac{E_g}{2kT}=\frac{1.1}{0.0517}=21.28
$$

$$
n_i=2.8\times10^{19}\times e^{-21.28}=2.8\times10^{19}\times5.76\times10^{-10}\approx\mathbf{1.6\times10^{10}\ \text{cm}^{-3}}
$$

> **Note on the source.** The lecture notes rounded the exponent to $21.3$ and got $1.57\times10^{10}\ \text{cm}^{-3}$. Keeping more digits gives $1.61\times10^{10}\ \text{cm}^{-3}$. Exponentials are sensitive: round only at the end.

> **About the formula.** $n_i=N_c\,e^{-E_g/2kT}$ is the exact result $n_i=\sqrt{N_cN_v}\,e^{-E_g/2kT}$ with the assumption $N_v\approx N_c$. The next two problems use the same assumption.

**Problem 3.** For silicon at $300\ \text{K}$, $N_c=3\times10^{19}\ \text{cm}^{-3}$ and $n_i=1.5\times10^{10}\ \text{cm}^{-3}$. Find the band gap.

Rearranging $n_i=N_c\,e^{-E_g/2kT}$: divide by $N_c$, take logarithms and multiply by $-2kT$, giving $E_g=2kT\ln\left(\dfrac{N_c}{n_i}\right)$:

$$
E_g=2\times8.617\times10^{-5}\times300\times\ln\left(\frac{3\times10^{19}}{1.5\times10^{10}}\right)=0.0517\times21.42=\mathbf{1.107\ \text{eV}}
$$

**Problem 4.** At $400\ \text{K}$ an intrinsic semiconductor has $N_c=2.5\times10^{19}\ \text{cm}^{-3}$ and electron density $1\times10^{14}\ \text{cm}^{-3}$. Find its band gap.

$$
E_g=2kT\ln\left(\frac{N_c}{n}\right)=2\times8.617\times10^{-5}\times400\times\ln\left(2.5\times10^{5}\right)=0.0689\times12.43=\mathbf{0.857\ \text{eV}}
$$

## Diode current

In problems 5 to 10 take $\eta=1$ unless stated.

**Problem 5.** A p-n junction carries $0.2\ \mu\text{A}$ at room temperature ($298\ \text{K}$) under a large reverse bias. Find the current for a forward bias of $0.1\ \text{V}$.

The current under large reverse bias **is** the saturation current, $I_s=0.2\ \mu\text{A}$. With $kT=8.617\times10^{-5}\times298=0.02568\ \text{eV}$:

$$
I=0.2\times10^{-6}\left(e^{0.1/0.02568}-1\right)=0.2\times10^{-6}\,(49.1-1)=\mathbf{9.62\ \mu\text{A}}
$$

**Problem 6.** A silicon diode at $298\ \text{K}$ has reverse saturation current $10\ \text{nA}$. Find the current for a forward bias of $0.5\ \text{V}$.

$$
I=10\times10^{-9}\left(e^{0.5/0.02568}-1\right)=10^{-8}\times2.86\times10^{8}\approx\mathbf{2.86\ \text{A}}
$$

**Problem 7.** In a rectifier circuit at $27\ ^\circ\text{C}$ the forward current is $6.63\ \text{mA}$ at $0.22\ \text{V}$. Find the reverse saturation current.

With $kT=0.02585\ \text{eV}$, $\dfrac{0.22}{0.02585}=8.51$:

$$
I_s=\frac{I}{e^{eV/kT}-1}=\frac{6.63\times10^{-3}}{e^{8.51}-1}=\frac{6.63\times10^{-3}}{4966}=\mathbf{1.34\ \mu\text{A}}
$$

**Problem 8.** A diode has $I_s=10^{-13}\ \text{A}$. Find the forward voltage for $1\ \text{mA}$, using $V_T=25\ \text{mV}$.

Rearranging $I=I_s\left(e^{V/V_T}-1\right)$: $e^{V/V_T}=\dfrac{I}{I_s}+1$, so

$$
V=\eta V_T\ln\left(\frac{I}{I_s}+1\right)=25\times10^{-3}\times\ln\left(10^{10}+1\right)=25\times10^{-3}\times23.03=\mathbf{0.576\ \text{V}}
$$

**Problem 9.** A silicon diode has $I_s=2\times10^{-12}\ \text{A}$ and $V_T=25\ \text{mV}$. Find the current at $0.7\ \text{V}$.

$$
I=2\times10^{-12}\left(e^{0.7/0.025}-1\right)=2\times10^{-12}\times e^{28}=2\times10^{-12}\times1.45\times10^{12}\approx\mathbf{2.89\ \text{A}}
$$

**Problem 10.** A diode has $I_s=1\times10^{-12}\ \text{A}$, $V_T=26\ \text{mV}$ and ideality factor $\eta=1.2$. Find the current at $0.65\ \text{V}$.

$$
I=10^{-12}\left(e^{0.65/(1.2\times0.026)}-1\right)=10^{-12}\,e^{20.83}=10^{-12}\times1.12\times10^{9}=\mathbf{1.12\ \text{mA}}
$$

> **About problems 6 and 9.** Answers of a few **amperes** come straight from the ideal diode equation. A real small diode would never pass that much at $0.5$ or $0.7\ \text{V}$: its series resistance and the external circuit limit the current. Treat these as exercises in using the formula, not as realistic currents.

> **Watch out.** Check what the question gives you: "room temperature" means take $T\approx298$ or $300\ \text{K}$ (say which); a current under "large reverse bias" **is** $I_s$; and $V_T$ given in millivolts must be converted to volts before dividing.

---

<!-- page 17 | More worked examples -->

# More worked examples

These go a little beyond the standard problems, to practise the ideas on pages 3 to 15. Constants: $h=6.626\times10^{-34}\ \text{J s}$, $m=9.11\times10^{-31}\ \text{kg}$, $k=1.38\times10^{-23}\ \text{J/K}=8.617\times10^{-5}\ \text{eV/K}$, $e=1.6\times10^{-19}\ \text{C}$.

**Example 1. Size of $N_c$.** Find the effective density of states in the conduction band at $300\ \text{K}$ for an electron effective mass equal to the free-electron mass.

$$
N_c=2\left(\frac{2\pi m kT}{h^2}\right)^{3/2}=2\left(\frac{2\pi\times9.11\times10^{-31}\times1.38\times10^{-23}\times300}{(6.626\times10^{-34})^2}\right)^{3/2}
$$

The bracket is $5.40\times10^{16}\ \text{m}^{-2}$, so $N_c=2\times(5.40\times10^{16})^{3/2}=\mathbf{2.5\times10^{25}\ \text{m}^{-3}}=2.5\times10^{19}\ \text{cm}^{-3}$. For a different effective mass, multiply by $(m^*/m)^{3/2}$: with $m^*=1.08\,m$ (silicon) this gives $2.8\times10^{19}\ \text{cm}^{-3}$, the value used in the problems.

**Example 2. Is the Boltzmann approximation good?** In intrinsic silicon the Fermi level is about $0.56\ \text{eV}$ below $E_c$. Compare the exact Fermi-Dirac occupation at the band edge with the Boltzmann value at $300\ \text{K}$.

$\dfrac{E_c-E_F}{kT}=\dfrac{0.56}{0.02585}=21.66$.

$$
F_{\text{exact}}=\frac{1}{1+e^{21.66}}=3.909\times10^{-10}\qquad F_{\text{Boltzmann}}=e^{-21.66}=3.909\times10^{-10}
$$

They agree to better than one part in a billion. The approximation is essentially exact here.

**Example 3. Heating silicon by $50\ \text{K}$.** By what factor does $n_i$ of silicon ($E_g=1.12\ \text{eV}$) increase from $300\ \text{K}$ to $350\ \text{K}$?

$$
\frac{n_i(350)}{n_i(300)}=\left(\frac{350}{300}\right)^{3/2}\exp\left[\frac{1.12}{2\times8.617\times10^{-5}}\left(\frac1{300}-\frac1{350}\right)\right]=1.26\times e^{3.095}=\mathbf{27.8}
$$

A modest rise in temperature multiplies the intrinsic carriers almost thirty times.

**Example 4. Germanium against silicon.** Assuming equal $N_c$ and $N_v$, estimate how many times more intrinsic carriers germanium ($E_g=0.66\ \text{eV}$) has than silicon ($E_g=1.12\ \text{eV}$) at $300\ \text{K}$.

$$
\frac{n_i(\text{Ge})}{n_i(\text{Si})}=\exp\left(\frac{1.12-0.66}{2\times0.02585}\right)=e^{8.90}\approx\mathbf{7\times10^{3}}
$$

The quoted values ($2.5\times10^{19}$ and $1.5\times10^{16}\ \text{m}^{-3}$) give a ratio of about $1.7\times10^3$; the difference comes from the different $N_c$, $N_v$ of the two materials. Either way the gap difference is decisive.

**Example 5. Minority carriers in p-type silicon.** Silicon at $300\ \text{K}$ ($n_i=1.5\times10^{10}\ \text{cm}^{-3}$, $N_v=1.04\times10^{19}\ \text{cm}^{-3}$) is doped with $N_A=10^{17}\ \text{cm}^{-3}$ acceptors. Find $p$, $n$ and the position of the Fermi level.

$$
p\approx N_A=10^{17}\ \text{cm}^{-3}\qquad n=\frac{n_i^2}{N_A}=\frac{2.25\times10^{20}}{10^{17}}=\mathbf{2.25\times10^{3}\ \text{cm}^{-3}}
$$

$$
E_F-E_v=kT\ln\left(\frac{N_v}{N_A}\right)=0.02585\times\ln(104)=\mathbf{0.120\ \text{eV}}
$$

The Fermi level is only $0.12\ \text{eV}$ above the valence band, far below mid-gap.

**Example 6. Effect of doping on conductivity.** By what factor does doping silicon with $N_D=10^{22}\ \text{m}^{-3}$ raise its conductivity? Take $n_i=1.5\times10^{16}\ \text{m}^{-3}$, $\mu_e=0.135$, $\mu_h=0.048\ \text{m}^2/\text{V s}$.

$$
\frac{\sigma}{\sigma_i}=\frac{N_D\mu_e}{n_i(\mu_e+\mu_h)}=\frac{10^{22}\times0.135}{1.5\times10^{16}\times0.183}\approx\mathbf{4.9\times10^{5}}
$$

**Example 7. Barrier and minority electrons.** In a silicon junction with $V_0=0.7\ \text{V}$ at $300\ \text{K}$, what fraction of the n-side electron density is found on the p-side at equilibrium?

$$
\frac{n_p}{n_n}=e^{-eV_0/kT}=e^{-0.7/0.02585}=e^{-27.1}=\mathbf{1.7\times10^{-12}}
$$

**Example 8. Voltage for a tenfold current.** For an ideal diode ($\eta=1$) at $300\ \text{K}$ in forward bias, how much must the voltage rise to increase the current ten times?

With $I\approx I_se^{V/V_T}$, a tenfold increase needs $e^{\Delta V/V_T}=10$, so

$$
\Delta V=V_T\ln10=0.02585\times2.303=\mathbf{59.5\ \text{mV}}
$$

This "60 mV per decade" rule is why the forward voltage of a silicon diode stays close to $0.6$ to $0.7\ \text{V}$ over a huge range of currents.

**Example 9. Forward against reverse.** For a diode at $300\ \text{K}$, how many times larger is the forward current at $+0.1\ \text{V}$ than the magnitude of the reverse current?

$$
\frac{I(+0.1)}{I_s}=e^{0.1/0.02585}-1=47.9-1=\mathbf{46.9}
$$

Even at a tenth of a volt the diode already conducts nearly fifty times better forwards than backwards; at $0.5\ \text{V}$ the ratio is about $2.5\times10^8$.

---

<!-- page 18 | Practice and formula sheet -->

# Practice questions and formula sheet

## Short questions to revise

1. What is a hole? Why does it behave like a positive charge, and why does it move opposite to the electrons?
2. What is effective mass? Why is the effective mass of a valence-band electron near the band top negative, and why do we use holes instead?
3. Write the density of states formula and explain each symbol. Why is there a factor $2$?
4. Derive the expression for the density of electrons in the conduction band of an intrinsic semiconductor. Justify the Boltzmann approximation.
5. Derive the expression for the density of holes in the valence band.
6. Derive the intrinsic carrier concentration. State and explain the law of mass action.
7. How does $n_i$ vary with temperature and with band gap? Why does $n_i$ not depend on the Fermi level?
8. Distinguish between n-type and p-type semiconductors, with band diagrams.
9. Describe the freeze-out, extrinsic and intrinsic regions of a doped semiconductor.
10. Show that the Fermi level of an intrinsic semiconductor lies at the middle of the gap at $0\ \text{K}$.
11. How does the Fermi level of an n-type semiconductor change with temperature? Of a p-type?
12. Explain the formation of a p-n junction and the depletion region in terms of diffusion and drift. Draw its energy band diagram.
13. Why must the Fermi levels on the two sides of a junction be equal at equilibrium?
14. What happens to the depletion region, the barrier and the currents under forward and reverse bias?
15. Derive the diode equation. What is the reverse saturation current, and why does it saturate?
16. Draw and explain the V-I characteristic of a p-n junction diode. What is the knee voltage? What causes breakdown?

## Quick numerical practice

1. The band gap of germanium is $0.66\ \text{eV}$. By what factor does $n_i$ change between $300\ \text{K}$ and $310\ \text{K}$? *(Answer: about $1.59$, from $1.0504\times e^{0.412}$.)*
2. A diode has $I_s=1\ \text{nA}$ at $300\ \text{K}$. Find the current for a forward bias of $0.3\ \text{V}$ ($\eta=1$). *(Answer: $10^{-9}\left(e^{0.3/0.02585}-1\right)\approx0.11\ \text{mA}$.)*
3. Silicon ($n_i=1.5\times10^{10}\ \text{cm}^{-3}$) is doped with $N_D=10^{15}\ \text{cm}^{-3}$. Find the hole density. *(Answer: $2.25\times10^{5}\ \text{cm}^{-3}$.)*
4. Find the dynamic resistance of an ideal diode carrying $2\ \text{mA}$ at $300\ \text{K}$. *(Answer: $V_T/I=0.02585/0.002\approx13\ \Omega$.)*

---

## Formula sheet

### Carrier densities

| | |
| --- | --- |
| Density of states | $Z(E)\,dE=\dfrac{4\pi}{h^3}(2m^*)^{3/2}E^{1/2}\,dE$ |
| Standard integral | $\displaystyle\int_0^\infty x^{1/2}e^{-ax}\,dx=\frac{\sqrt\pi}{2a^{3/2}}$ |
| Boltzmann approximation | $F(E)\approx e^{-(E-E_F)/kT}$ (electrons), $\ F_h(E)\approx e^{-(E_F-E)/kT}$ (holes) |
| Electrons | $n=N_c\,e^{-(E_c-E_F)/kT}$, $\ N_c=2\left(\dfrac{2\pi m_e^*kT}{h^2}\right)^{3/2}$ |
| Holes | $p=N_v\,e^{-(E_F-E_v)/kT}$, $\ N_v=2\left(\dfrac{2\pi m_h^*kT}{h^2}\right)^{3/2}$ |
| Intrinsic concentration | $n_i=2\left(\dfrac{2\pi kT}{h^2}\right)^{3/2}(m_e^*m_h^*)^{3/4}e^{-E_g/2kT}=\sqrt{N_cN_v}\,e^{-E_g/2kT}$ |
| Law of mass action | $np=n_i^2$ |
| Temperature dependence | $n_i\propto T^{3/2}e^{-E_g/2kT}$ |
| Doped (beyond syllabus) | n-type: $n\approx N_D$, $p\approx n_i^2/N_D$; p-type: $p\approx N_A$, $n\approx n_i^2/N_A$ |
| Conductivity (beyond syllabus) | $\sigma=e(n\mu_e+p\mu_h)$ |

### Fermi level

| | |
| --- | --- |
| Intrinsic | $E_F=\dfrac{E_c+E_v}{2}+\dfrac{3kT}{4}\ln\left(\dfrac{m_h^*}{m_e^*}\right)$, mid-gap at $0\ \text{K}$ |
| n-type at $0\ \text{K}$ | $E_{Fn}=\dfrac{E_c+E_D}{2}$, moves down towards mid-gap as $T$ rises |
| p-type at $0\ \text{K}$ | $E_{Fp}=\dfrac{E_v+E_A}{2}$, moves up towards mid-gap as $T$ rises |
| Doped, extrinsic region (beyond syllabus) | $E_c-E_F=kT\ln(N_c/N_D)$, $\ E_F-E_v=kT\ln(N_v/N_A)$ |

### The p-n junction

| | |
| --- | --- |
| Barrier potential | about $0.7\ \text{V}$ (Si), $0.3\ \text{V}$ (Ge); $V_0=\dfrac{kT}{e}\ln\dfrac{N_AN_D}{n_i^2}$ (beyond syllabus) |
| Electron densities | $n_p=n_n\,e^{-eV_0/kT}$ |
| Diode equation | $I=I_s\left(e^{eV/\eta kT}-1\right)=I_s\left(e^{V/\eta V_T}-1\right)$ |
| Thermal voltage | $V_T=\dfrac{kT}{e}\approx25.9\ \text{mV}$ at $300\ \text{K}$ |
| Reverse bias | $I\to-I_s$ |
| Large forward bias | $I\approx I_s\,e^{eV/\eta kT}$; about 60 mV per tenfold current at $300\ \text{K}$ ($\eta=1$) |
| Dynamic resistance | $r\approx\eta V_T/I$ |
| Ideality factor | $\eta\approx1$ (Ge), $\eta\approx2$ (Si) |
