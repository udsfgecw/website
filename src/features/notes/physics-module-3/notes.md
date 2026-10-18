<!-- page 1 | Start here -->

# Module 3 at a glance

Module 1 classified materials by their band gap. This module looks closely at the middle class, the **semiconductors**, and at the device that all of electronics is built from, the **p-n junction**.

The story has two halves.

1. **Counting carriers.** How many free electrons and holes does a semiconductor have at a given temperature? We derive the electron density in the conduction band and the hole density in the valence band, combine them into the intrinsic carrier concentration, and see what doping and temperature do to the Fermi level.
2. **Joining p and n.** Putting a p-type and an n-type region together creates a depletion region and a potential barrier. Biasing changes that barrier, and the result is the diode equation and the diode's V-I characteristic.

> **KTU syllabus.** Intrinsic semiconductor, derivation of density of electrons in conduction band and density of holes in valence band, intrinsic carrier concentration, variation of intrinsic carrier concentration with temperature, extrinsic semiconductor (qualitative). Formation of p-n junction, Fermi level in semiconductors (intrinsic and extrinsic), energy band diagram of p-n junction, qualitative description of charge flow across a p-n junction, forward and reverse biased p-n junctions, diode equation (derivation), I-V characteristics of p-n junction.

## What you will be able to do

- Explain how holes form and why they behave as positive carriers.
- Derive $n=N_c\,e^{-(E_c-E_F)/kT}$ and $p=N_v\,e^{-(E_F-E_v)/kT}$.
- Derive the intrinsic carrier concentration, state the law of mass action, and explain how $n_i$ depends on temperature and band gap.
- Describe n-type and p-type semiconductors with band diagrams.
- Locate the Fermi level in intrinsic, n-type and p-type material, and describe how it moves with temperature.
- Explain the formation of a p-n junction, its band diagram, and what forward and reverse bias do.
- Derive the diode equation $I=I_s\left(e^{eV/kT}-1\right)$ and sketch the V-I characteristic.
- Solve the standard numerical problems on $n_i$, band gap and diode current.

## How to use these notes

- Each topic is a short page: **idea → derivation or explanation → worked example → common mistakes.**
- Green boxes hold key ideas. Amber boxes marked **Watch out** hold mistakes that cost marks. Boxes marked **Note on the source** record where the lecture notes were corrected.
- The derivations on pages 4 to 6 and 11 are long-answer favourites. Learn the **steps**, not just the results.
- The last page has practice questions and a formula sheet.

## Where each topic sits

| Part | Pages |
| --- | --- |
| Intrinsic semiconductors | Holes, effective mass and density of states, electrons in the conduction band, holes in the valence band, intrinsic carrier concentration |
| Doping | Extrinsic semiconductors, Fermi level in semiconductors |
| The p-n junction | Forming a junction, biasing, the diode equation, V-I characteristics |
| Practice | Numerical problems, practice and formula sheet |

> **Prerequisites.** From Module 1: energy bands, the band gap $E_g=E_c-E_v$, and the Fermi-Dirac function $f(E)=\dfrac{1}{1+e^{(E-E_F)/kT}}$. From maths: integration by substitution, and the laws of exponents and logarithms.

---

<!-- page 2 | Intrinsic semiconductors and holes -->

# Intrinsic semiconductors and holes

## The idea

An **intrinsic semiconductor** is a pure semiconductor, with no significant impurities. Silicon (Si) and germanium (Ge) are the standard examples.

At $0\ \text{K}$ every valence electron is held in a covalent bond: the valence band is full, the conduction band is empty, and the crystal is an insulator. As the temperature rises, some electrons absorb enough thermal energy to **break their covalent bond**. They then move almost freely through the crystal as **conduction electrons**. In band language: the electron has jumped from the valence band to the conduction band.

![Germanium lattice at T > 0 K with a broken covalent bond, a free electron and a vacancy, beside the band diagram with E_C, E_F and E_V](/notes/cse/s1/physics/module-3/germanium-lattice-bands.webp)

## Holes

When an electron leaves the valence band it leaves behind an empty state, a **hole**.

- A hole is the **absence** of an electron, so it behaves like a **positive** charge $+e$.
- A neighbouring valence electron can move into the vacancy, which leaves a new vacancy where that electron came from. The hole has effectively moved, in the direction **opposite** to the electron's motion.
- So the valence band conducts too: holes are genuine charge carriers.

> **Key idea.** Breaking one covalent bond creates an **electron-hole pair**. In an intrinsic semiconductor the number of free electrons always equals the number of holes.

## Properties of intrinsic semiconductors

| Property | Description |
| --- | --- |
| Pure form | a single semiconductor material (such as Si or Ge) with no intentional impurities |
| Equal carriers | at thermal equilibrium, the number of free electrons equals the number of holes |
| Conductivity | poor at room temperature |
| Band gap | small: Si $\approx1.12\ \text{eV}$, Ge $\approx0.66\ \text{eV}$ |
| Temperature dependence | heating creates more electron-hole pairs, so the conductivity rises steeply |

## Limitations

- The conductivity at room temperature is low.
- The current depends far more on temperature than on the applied voltage.
- So pure semiconductors are of little use in devices until they are **doped** (page 7).

> **Watch out.** A hole is not a particle that "exists" on its own. It is a convenient description of the many valence electrons moving into an empty state. Draw it as an open circle in the valence band, never in the conduction band.

---

<!-- page 3 | Effective mass and density of states -->

# Effective mass and density of states

Two ideas are needed before we can count carriers: how electrons respond to a force inside a crystal, and how many energy states are available.

## Effective mass

For a free body, a force $F$ gives an acceleration $a=F/m$. An electron in a crystal is not free: it is already acted on by the periodic potential of the positive ions, which varies from point to point. To describe how it responds to an **external** force, we keep the simple law $a=F/m^*$ but use a modified mass, the **effective mass** $m^*$.

- In the **conduction band** the effective mass of an electron is positive. Depending on the material it can be smaller or larger than the free-electron mass (for example about $0.26\,m$ in silicon and $0.067\,m$ in gallium arsenide).
- Near the top of the **valence band** the effective mass of an electron is **negative**: it would accelerate **opposite** to the applied force. Rather than talk about negative-mass electrons, we describe the valence band in terms of **holes**, which have a **positive** effective mass $m_h^*$.

We write $m_e^*$ for the effective mass of electrons and $m_h^*$ for holes.

> **Note on the source.** The lecture notes said the conduction-band effective mass "can be equal to or greater than" the free electron mass. In fact it is often smaller (as the examples show); what matters is that it is a property of the band, not of the electron itself.

## Density of states

Energy levels in a band are not spread evenly: the number available depends on the energy. The **density of states** counts them.

> **Density of states.** The number of energy states per unit volume with energy between $E$ and $E+dE$ is
>
> $$Z(E)\,dE=\frac{4\pi}{h^3}\,(2m^*)^{3/2}\,E^{1/2}\,dE$$
>
> where $m^*$ is the effective mass of the carriers and $E$ is measured from the edge of the band.

Two features matter for the derivations:

- $Z(E)\propto\sqrt E$: there are no states at the band edge, and more and more as you go into the band.
- In the conduction band, energy is measured **up** from $E_c$, so $E$ is replaced by $E-E_c$. In the valence band, hole energy is measured **down** from $E_v$, so $E$ is replaced by $E_v-E$.

> **Watch out.** The formula uses the **effective** mass: $m_e^*$ in the conduction band, $m_h^*$ in the valence band. Writing the free electron mass $m$ is a common slip.

---

<!-- page 4 | Electrons in the conduction band -->

# Density of electrons in the conduction band

## Plan

The number of electrons per unit volume in a small energy range $dE$ is

$$
\text{(number of states in } dE)\times\text{(probability each is occupied)}
$$

Then add up (integrate) over the whole conduction band, from its bottom $E_c$ to $\infty$.

![Band diagram of an intrinsic semiconductor: conduction band from E_C upwards, valence band below E_V, Fermi level between](/notes/cse/s1/physics/module-3/intrinsic-bands.webp)

## Step 1: the two ingredients

Let $dn$ be the number of electrons per unit volume with energy between $E$ and $E+dE$:

$$
dn=Z(E)\,dE\cdot F(E)
$$

**Number of states.** Measuring energy from the band edge $E_c$:

$$
Z(E)\,dE=\frac{4\pi}{h^3}\,(2m_e^*)^{3/2}\,(E-E_c)^{1/2}\,dE
$$

**Probability of occupation.** The Fermi-Dirac function is

$$
F(E)=\frac{1}{1+e^{(E-E_F)/kT}}
$$

For energies in the conduction band, $E-E_F$ is several times $kT$, so $e^{(E-E_F)/kT}\gg1$ and the $1$ in the denominator can be dropped:

$$
F(E)\approx e^{-(E-E_F)/kT}=e^{(E_F-E)/kT}
$$

> **Note on the source.** The lecture notes said "$(E-E_F)\gg kT$ for all $T$". The approximation is really a condition: it holds when the Fermi level is several $kT$ below the conduction band (a **non-degenerate** semiconductor), which is the normal case. It fails for very heavily doped material.

## Step 2: set up the integral

$$
n=\int_{E_c}^{\infty}\frac{4\pi}{h^3}(2m_e^*)^{3/2}(E-E_c)^{1/2}\,e^{(E_F-E)/kT}\,dE
$$

Take the constants outside:

$$
n=\frac{4\pi}{h^3}(2m_e^*)^{3/2}\,e^{E_F/kT}\int_{E_c}^{\infty}(E-E_c)^{1/2}\,e^{-E/kT}\,dE
$$

## Step 3: substitute

Let $x=E-E_c$, so $E=x+E_c$ and $dE=dx$. The limits $E=E_c$ and $E=\infty$ become $x=0$ and $x=\infty$:

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

## Result

$$
\boxed{n=2\left(\frac{2\pi m_e^*kT}{h^2}\right)^{3/2}e^{-(E_c-E_F)/kT}=N_c\,e^{-(E_c-E_F)/kT}}
$$

The constant $N_c=2\left(\dfrac{2\pi m_e^*kT}{h^2}\right)^{3/2}$ is called the **effective density of states in the conduction band**. For silicon at $300\ \text{K}$ it is about $3\times10^{25}\ \text{m}^{-3}$ ($3\times10^{19}\ \text{cm}^{-3}$).

> **Key idea.** The electron density depends **exponentially** on how far the Fermi level lies below the conduction band. Move $E_F$ up by $kT$ and $n$ grows by a factor $e\approx2.7$.

> **Note on the source.** One place in the lecture notes wrote the standard integral as $\dfrac{\sqrt\pi}{2a}$. The correct form is $\dfrac{\sqrt\pi}{2a^{3/2}}$; the two agree only when $a=1$.

> **Watch out.** Keep track of the sign in the exponent: $E_F<E_c$, so $E_F-E_c$ is **negative** and $n$ is a small fraction of $N_c$. The final factor $2$ and the power $\tfrac32$ both come from the algebra in step 4: show that working in an exam.

---

<!-- page 5 | Holes in the valence band -->

# Density of holes in the valence band

The method mirrors the electron derivation, with two changes: the states are in the valence band, and we need the probability that a state is **empty**.

## Step 1: the two ingredients

Let $dp$ be the number of holes per unit volume with energy between $E$ and $E+dE$:

$$
dp=Z(E)\,dE\cdot F_h(E)
$$

**Number of states.** Hole energies lie below the top of the valence band $E_v$, so measure from $E_v$ downwards:

$$
Z(E)\,dE=\frac{4\pi}{h^3}\,(2m_h^*)^{3/2}\,(E_v-E)^{1/2}\,dE
$$

**Probability that a state holds a hole.** A hole is the absence of an electron, so

$$
F_h(E)=1-F(E)=1-\frac{1}{1+e^{(E-E_F)/kT}}=\frac{e^{(E-E_F)/kT}}{1+e^{(E-E_F)/kT}}
$$

In the valence band $E<E_F$ by several $kT$, so $e^{(E-E_F)/kT}\ll1$ and

$$
F_h(E)\approx e^{(E-E_F)/kT}
$$

## Step 2: set up the integral

Holes occupy energies from $-\infty$ up to $E_v$:

$$
p=\int_{-\infty}^{E_v}\frac{4\pi}{h^3}(2m_h^*)^{3/2}(E_v-E)^{1/2}\,e^{(E-E_F)/kT}\,dE
=\frac{4\pi}{h^3}(2m_h^*)^{3/2}\,e^{-E_F/kT}\int_{-\infty}^{E_v}(E_v-E)^{1/2}\,e^{E/kT}\,dE
$$

## Step 3: substitute

Let $x=\dfrac{E_v-E}{kT}$, so $\dfrac{E}{kT}=\dfrac{E_v}{kT}-x$ and $dE=-kT\,dx$. The limits $E=-\infty$ and $E=E_v$ become $x=\infty$ and $x=0$:

$$
p=\frac{4\pi}{h^3}(2m_h^*)^{3/2}\,e^{-E_F/kT}\int_{\infty}^{0}(kTx)^{1/2}\,e^{E_v/kT}e^{-x}\,(-kT\,dx)
$$

The minus sign reverses the limits:

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

where $N_v=2\left(\dfrac{2\pi m_h^*kT}{h^2}\right)^{3/2}$ is the **effective density of states in the valence band**.

> **Key idea.** The two results are mirror images. Electrons: exponent $-(E_c-E_F)/kT$, the distance from $E_F$ **up** to the conduction band. Holes: exponent $-(E_F-E_v)/kT$, the distance from $E_F$ **down** to the valence band.

> **Watch out.** Use $F_h=1-F$, not $F$, for holes. And remember the effective mass changes to $m_h^*$.

---

<!-- page 6 | Intrinsic carrier concentration -->

# Intrinsic carrier concentration

## The idea

In a pure semiconductor every broken bond makes one electron and one hole, so

$$
n=p=n_i
$$

where $n_i$ is the **intrinsic carrier concentration** (or intrinsic carrier density).

## Derivation

Since $n=p=n_i$, we can write $n_i^2=np$. Multiply the two results of the last two pages:

$$
n_i^2=2\left(\frac{2\pi m_e^*kT}{h^2}\right)^{3/2}e^{(E_F-E_c)/kT}\times2\left(\frac{2\pi m_h^*kT}{h^2}\right)^{3/2}e^{(E_v-E_F)/kT}
$$

The $E_F$ terms cancel in the exponent, leaving $E_v-E_c=-E_g$:

$$
n_i^2=4\left(\frac{2\pi kT}{h^2}\right)^3(m_e^*m_h^*)^{3/2}\,e^{-E_g/kT}
$$

Taking the square root:

$$
\boxed{n_i=2\left(\frac{2\pi kT}{h^2}\right)^{3/2}(m_e^*m_h^*)^{3/4}\,e^{-E_g/2kT}=\sqrt{N_cN_v}\;e^{-E_g/2kT}}
$$

## Law of mass action

The product $np$ does not depend on $E_F$:

$$
np=n_i^2
$$

So at a given temperature, for a given semiconductor, the **product** of electron and hole densities is a constant. This is the **law of mass action**. It holds for intrinsic **and** extrinsic semiconductors: if doping raises $n$, then $p$ must fall so that $np$ stays at $n_i^2$.

## How $n_i$ varies

- $n_i$ is **independent of the Fermi level**.
- $n_i$ **decreases** as the band gap $E_g$ increases (exponentially).
- $n_i$ **increases** steeply with temperature: $n_i\propto T^{3/2}e^{-E_g/2kT}$, and the exponential term dominates.
- The factor $2$ in $e^{-E_g/2kT}$ reflects the fact that breaking one bond produces **two** carriers.

At room temperature, $n_i\approx1.5\times10^{16}\ \text{m}^{-3}$ for silicon and $2.5\times10^{19}\ \text{m}^{-3}$ for germanium. Germanium's smaller gap gives it over a thousand times more intrinsic carriers.

![Intrinsic carrier concentration of silicon and germanium against temperature on a log scale](/notes/cse/s1/physics/module-3/ni-vs-temperature.webp)

> **Watch out.** The exponent in $n_i$ is $-E_g/2kT$, with a **2**. In $n$ or $p$ alone it is the distance to the band edge over $kT$, with no 2. And since the curve rises exponentially, a few degrees of heating changes $n_i$ a lot (see problem 1 on the numerical problems page: a $10\ \text{K}$ rise roughly doubles $n_i$ in silicon).

---

<!-- page 7 | Extrinsic semiconductors -->

# Extrinsic semiconductors

## Doping

Adding a controlled amount of impurity to an intrinsic semiconductor is **doping**; the impurity is the **dopant**; and the result is an **extrinsic semiconductor**.

The dopants come from **group V** (pentavalent, 5 valence electrons) or **group III** (trivalent, 3 valence electrons). Their atoms are about the same size as silicon and germanium atoms, so they take the place of host atoms in the crystal without distorting it much.

Extrinsic semiconductors conduct far better than intrinsic ones, their conductivity can be set by choosing the doping concentration, and it depends less on temperature.

## n-type semiconductors

**Dopant:** a pentavalent impurity such as phosphorus, arsenic or antimony.

- Four of the five valence electrons form bonds with four neighbouring silicon atoms. The **fifth** is only loosely bound, with an ionisation energy of only about $0.01\ \text{eV}$.
- At ordinary temperatures this electron is freed and moves into the conduction band. It leaves behind a fixed **positive ion**. Because the impurity atom donates an electron, it is a **donor**.
- The donor electrons occupy a discrete **donor level** $E_D$ just **below** the conduction band.
- Donating an electron does **not** create a hole.

How it behaves with temperature:

- At $0\ \text{K}$ the donors are not ionised: the conduction band is empty and the material is an insulator.
- As the temperature rises, the donors ionise and their electrons enter the conduction band. By about $100\ \text{K}$ all donors are ionised.
- At high enough temperatures intrinsic behaviour takes over: many electron-hole pairs are created across the gap, and they eventually outnumber the donor electrons.

Electrons far outnumber holes, so **electrons are the majority carriers** and **holes are the minority carriers**.

![n-type semiconductor: donor energy level just below the conduction band, donor electrons excited into the conduction band](/notes/cse/s1/physics/module-3/n-type-bands.webp)

## p-type semiconductors

**Dopant:** a trivalent impurity such as boron, gallium or indium.

- With only three valence electrons, the impurity is one short of completing four bonds.
- An electron from a neighbouring bond can jump into this vacancy (needing only about $0.01\ \text{eV}$), leaving a **hole** behind in the valence band. The impurity atom, now with an extra electron, becomes a fixed **negative ion**. Because it accepts an electron, it is an **acceptor**.
- The acceptor states form a discrete **acceptor level** $E_A$ just **above** the valence band.
- Accepting an electron creates a hole **without** creating a conduction electron.

How it behaves with temperature:

- At $0\ \text{K}$ the acceptor levels are empty and the valence band is full: an insulator.
- With a little heating, valence electrons fill the acceptor levels, leaving holes in the valence band. At normal temperatures the acceptor levels are saturated.
- At high temperatures thermally generated electron-hole pairs dominate.

Holes far outnumber electrons, so **holes are the majority carriers** and **electrons are the minority carriers**.

![p-type semiconductor: acceptor level just above the valence band, holes in the valence band](/notes/cse/s1/physics/module-3/p-type-bands.webp)

## Summary

| | n-type | p-type |
| --- | --- | --- |
| Dopant | pentavalent (P, As, Sb) | trivalent (B, Ga, In) |
| Impurity called | donor | acceptor |
| Impurity level | $E_D$, just below $E_c$ | $E_A$, just above $E_v$ |
| Fixed ion left behind | positive | negative |
| Majority carriers | electrons | holes |
| Minority carriers | holes | electrons |

> **Watch out.** An n-type semiconductor is **not negatively charged**, and a p-type is not positive. Each extra electron is balanced by a positive donor ion, and each hole by a negative acceptor ion: the crystal as a whole is neutral.

---

<!-- page 8 | Fermi level in semiconductors -->

# Fermi level in semiconductors

## Intrinsic semiconductor

In an intrinsic semiconductor $n=p$. Substitute the two results:

$$
2\left(\frac{2\pi m_e^*kT}{h^2}\right)^{3/2}e^{(E_F-E_c)/kT}=2\left(\frac{2\pi m_h^*kT}{h^2}\right)^{3/2}e^{(E_v-E_F)/kT}
$$

Cancel the common factors $2$ and $\left(\dfrac{2\pi kT}{h^2}\right)^{3/2}$:

$$
(m_e^*)^{3/2}\,e^{(E_F-E_c)/kT}=(m_h^*)^{3/2}\,e^{(E_v-E_F)/kT}
$$

Collect the exponentials on one side:

$$
e^{(2E_F-E_c-E_v)/kT}=\left(\frac{m_h^*}{m_e^*}\right)^{3/2}
$$

Take natural logarithms:

$$
\frac{2E_F-E_c-E_v}{kT}=\frac32\ln\left(\frac{m_h^*}{m_e^*}\right)
$$

So

$$
\boxed{E_F=\frac{E_c+E_v}{2}+\frac{3kT}{4}\ln\left(\frac{m_h^*}{m_e^*}\right)}
$$

- At $T=0\ \text{K}$ the second term vanishes: $E_F=\dfrac{E_c+E_v}{2}$. The Fermi level is **exactly in the middle** of the band gap.
- At higher temperatures it shifts slightly: up if $m_h^*>m_e^*$, down if $m_h^*<m_e^*$. Because $kT$ is small compared with $E_g$, the shift is small, and the Fermi level of an intrinsic semiconductor is usually taken to be at the **middle of the gap**.

## n-type semiconductor

The donor level $E_D$ lies just below the conduction band edge $E_c$.

- At $T=0\ \text{K}$ the Fermi level lies **midway between $E_D$ and $E_c$**:

$$
E_{Fn}=\frac{E_c+E_D}{2}
$$

- As the temperature rises, the donor electrons move into the conduction band and the Fermi level **moves down**. When the donors are fully ionised (around the **depletion temperature** $T_d$) it has fallen to about the donor level, $E_{Fn}\approx E_D$.
- On further heating it keeps falling towards the middle of the gap. Above the **intrinsic temperature** $T_i$ the material behaves as intrinsic and $E_{Fn}=E_{Fi}$.

## p-type semiconductor

The acceptor level $E_A$ lies just above the valence band edge $E_v$.

- At $T=0\ \text{K}$ the Fermi level lies **midway between $E_v$ and $E_A$**:

$$
E_{Fp}=\frac{E_v+E_A}{2}
$$

- As the temperature rises, electrons fill the acceptor levels and the Fermi level **moves up**. When the acceptors are saturated (around the **saturation temperature** $T_s$) it reaches about the acceptor level, $E_{Fp}\approx E_A$.
- On further heating it keeps rising towards the middle of the gap, and above $T_i$, $E_{Fp}=E_{Fi}$.

![Fermi level against temperature: falling from near E_C towards mid-gap in n-type, rising from near E_V in p-type](/notes/cse/s1/physics/module-3/fermi-level-vs-temperature.webp)

> **Key idea.** Doping pushes the Fermi level **towards the band with the majority carriers**: up for n-type, down for p-type. Heating always pulls it back **towards the middle of the gap**, because at high temperature every semiconductor becomes intrinsic.

> **Watch out.** In the intrinsic derivation the masses appear as $\ln(m_h^*/m_e^*)$, holes on top. Getting the ratio upside down flips the direction of the shift.

---

<!-- page 9 | Forming a p-n junction -->

# Forming a p-n junction

## Why junctions matter

On its own, a p-type or n-type crystal just conducts like a poor conductor. Nearly all semiconductor devices instead combine the two. The simplest is a single **p-n junction**, or **p-n junction diode**, made by special manufacturing processes so that one crystal is p-type on one side and n-type on the other.

## Diffusion and the depletion region

The p-side has many holes and few electrons; the n-side has many electrons and few holes. When the two are joined:

1. Because of the concentration difference, **electrons diffuse from n to p** and **holes diffuse from p to n**.
2. Near the junction the electrons and holes meet and **recombine**: the conduction electrons drop into the holes and become bound valence electrons. The mobile carriers disappear.
3. A thin region on both sides of the junction is left **without mobile carriers**. This is the **depletion region**. It is about $1\ \mu\text{m}$ wide (narrower for heavier doping) and behaves like an insulator.
4. What is left there are the **fixed ions**: negative acceptor ions on the p-side, positive donor ions on the n-side. So the depletion region is also called the **space charge region**.

![p-n junction: negative acceptor ions and holes on the p-side, positive donor ions and free electrons on the n-side, the depletion layer, and the barrier potential](/notes/cse/s1/physics/module-3/pn-junction-depletion.webp)

## Barrier potential

The double layer of ions produces an **electric field** pointing from the positive donor ions (n-side) to the negative acceptor ions (p-side). This field **opposes further diffusion** of the majority carriers.

The potential difference across the depletion region is the **barrier potential** (junction potential) $V_0$: about $0.7\ \text{V}$ for silicon and $0.3\ \text{V}$ for germanium.

## Drift of minority carriers

There are also a few **minority carriers** on each side (holes in the n-region, electrons in the p-region). The junction field **helps** these across. Their flow is the **drift current**. It is small, because minority carriers are few, and it saturates once the field is strong enough.

> **Key idea.** At equilibrium the **diffusion current** of majority carriers is exactly balanced by the **drift current** of minority carriers, so the net current is zero.

## Band diagram of the junction

Before contact the n-side bands sit lower in energy than the p-side bands. As electrons cross from n to p, the n-side bands move **down** relative to the p-side. Equilibrium is reached when the **Fermi levels on the two sides are equal**.

![Energy band diagram of a p-n junction at equilibrium: bands bend down from the p region to the n region across the depletion region](/notes/cse/s1/physics/module-3/pn-junction-bands.webp)

- The bands now bend across the depletion region. An electron in the n-side conduction band has to climb an **energy hill** of height $eV_0$ to reach the p-side.
- Both the conduction band and the valence band shift by the same amount, so the **band gap is unchanged** on each side.

## Why the Fermi levels must line up

Before contact, the Fermi level of the n-type material is near its conduction band and that of the p-type is near its valence band. Like water levels or temperatures, Fermi levels must be **equal** in a system in thermal equilibrium. Electrons flow from the side with the higher Fermi level (n) to the side with the lower one (p) until the two match, and the bands shift to make that possible.

![Common Fermi level across a p-n junction, with electron and hole diffusion and drift currents in the depletion region](/notes/cse/s1/physics/module-3/pn-junction-currents.webp)

> **Note on the source.** The lecture notes described the electron flow as continuing "until the top of the conduction band of the n-region aligns with the bottom of the conduction band of the p-region". The correct condition is that the **Fermi levels** align; the conduction band edges then differ by $eV_0$, as the band diagram shows.

> **Watch out.** The junction field points from **n to p**, because the n-side is left with positive ions. It pushes electrons back towards n and holes back towards p, which is what stops the diffusion.

---

<!-- page 10 | Biasing a p-n junction -->

# Biasing a p-n junction

Applying an external voltage across the junction is called **biasing**. Which way round the battery is connected decides almost everything.

## Forward bias

> **Forward bias.** The **p-side** is connected to the **positive** terminal and the **n-side** to the **negative** terminal.

![Forward-biased p-n junction with a thin depletion layer, and the equivalent circuit of a conducting diode](/notes/cse/s1/physics/module-3/forward-bias.webp)

- The applied field is **opposite** to the built-in junction field, so the net field is smaller.
- The **depletion region narrows** and the **barrier height falls** from $eV_0$ to $e(V_0-V)$.
- At about $0.3\ \text{V}$ for germanium and $0.7\ \text{V}$ for silicon the barrier is effectively removed. Majority carriers then cross easily and the current rises steeply.
- In the circuit: an electron crossing the junction recombines with a hole in the p-region. To replace it, the negative terminal injects another electron into the n-region, while the positive terminal pulls an electron out of a bond in the p-region, creating a new hole. A steady current flows.

## Reverse bias

> **Reverse bias.** The **p-side** is connected to the **negative** terminal and the **n-side** to the **positive** terminal.

![Reverse-biased p-n junction with a wide depletion layer, and the equivalent circuit of a blocking diode](/notes/cse/s1/physics/module-3/reverse-bias.webp)

- The applied field is in the **same** direction as the built-in field, so the net field is larger.
- The **depletion region widens** and the **barrier height rises**. Majority carriers can hardly cross.
- Minority carriers are still swept across, giving a **small reverse current** that **saturates** at a constant value as the voltage increases.
- A very large reverse voltage causes **breakdown** of the junction (page 12).

## Comparison

| | Forward bias | Reverse bias |
| --- | --- | --- |
| Connection | p to $+$, n to $-$ | p to $-$, n to $+$ |
| Depletion region | narrower | wider |
| Barrier height | lowered, to $e(V_0-V)$ | raised |
| Current | large, carried by majority carriers | tiny, carried by minority carriers, saturates |
| Diode acts as | a closed switch (low resistance) | an open switch (high resistance) |

> **Watch out.** "Forward" means **p to positive**. A common slip is to remember it the other way round: think "**p**ositive to **p**".

---

<!-- page 11 | The diode equation -->

# The diode equation

## The idea

The **diode equation** gives the current $I$ through a p-n junction as a function of the applied voltage $V$. The total current is the sum of an electron current and a hole current:

$$
I=I_e+I_h
$$

We derive $I_e$; $I_h$ follows the same way.

## Step 1: electron density on each side at equilibrium

Take the top of the n-side valence band as the zero of energy. Then the bottom of the n-side conduction band is at $E_g$, and from the electron-density result

$$
n_n=N_c\,e^{(E_F-E_g)/kT}\qquad\text{where }N_c=2\left(\frac{2\pi m_e^*kT}{h^2}\right)^{3/2}
$$

On the p-side the conduction band is raised by the barrier, so its bottom is at $E_g+eV_0$:

$$
n_p=N_c\,e^{(E_F-E_g-eV_0)/kT}
$$

Dividing,

$$
\frac{n_p}{n_n}=e^{-eV_0/kT}\qquad\Longrightarrow\qquad n_p=n_n\,e^{-eV_0/kT}
$$

This links the electron density on the p-side to that on the n-side, the barrier potential and the temperature. At equilibrium, diffusion and drift balance and this density stays fixed.

## Step 2: apply a forward voltage $V$

The barrier falls from $V_0$ to $V_0-V$. Diffusion of electrons increases, while the drift (set by the few minority carriers) stays almost the same. The new electron density on the p-side is

$$
n_p^*=n_n\,e^{-e(V_0-V)/kT}=n_n\,e^{-eV_0/kT}\,e^{eV/kT}=n_p\,e^{eV/kT}
$$

## Step 3: the extra electrons give the current

The increase in the electron density on the p-side is

$$
\Delta n_p=n_p^*-n_p=n_p\left(e^{eV/kT}-1\right)
$$

The electron current is proportional to this increase:

$$
I_e=I_{es}\left(e^{eV/kT}-1\right)
$$

where $I_{es}$ is a constant. In exactly the same way, the hole current is

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

For a reverse voltage of more than a few tenths of a volt, $e^{-eV_R/kT}\approx0$ and $I=-I_s$. This is the largest reverse current at that temperature, so $I_s$ is called the **reverse saturation current**.

2. **Large forward bias**, $eV\gg kT$: the $-1$ is negligible and

$$
I\approx I_s\,e^{eV/kT}
$$

3. **No bias**, $V=0$: $I=I_s(1-1)=0$. No current flows without an applied voltage.

4. **Practical diodes** deviate a little from the ideal equation. This is allowed for with an **ideality factor** $\eta$:

$$
I=I_s\left(e^{eV/\eta kT}-1\right)
$$

$\eta$ is taken as about $1$ for germanium and $2$ for silicon, so it is also called the material constant.

5. **Thermal voltage.** The combination $V_T=\dfrac{kT}{e}$ (about $25.9\ \text{mV}$ at $300\ \text{K}$) is the **thermal voltage**, and the equation is often written

$$
I=I_s\left(e^{V/\eta V_T}-1\right)
$$

![Ideal diode equation: exponential forward current, and reverse current saturating at minus I_s](/notes/cse/s1/physics/module-3/ideal-diode-curve.webp)

> **Watch out.** In $e^{eV/kT}$ use consistent units: either $e$ in coulombs with $k$ in J/K, or (simpler) write $\dfrac{eV}{kT}=\dfrac{V}{kT/e}$ with $kT$ in **eV**, so that $kT/e$ is just $8.617\times10^{-5}\,T$ volts.

---

<!-- page 12 | V-I characteristics -->

# V-I characteristics of a p-n junction

A **V-I characteristic** is a graph of the current through a device against the voltage across it. For a p-n junction diode it has three regions.

![V-I characteristic of a p-n junction diode, with forward current in mA, reverse current in microamperes, the barrier voltage and the breakdown voltage](/notes/cse/s1/physics/module-3/diode-vi-characteristic.webp)

## 1. Forward bias region

- While the forward voltage $V$ is less than the barrier potential $V_0$, the current is negligibly small.
- When $V$ reaches about $V_0$, the current begins to rise sharply. This voltage is the **knee voltage** (cut-in voltage): about $0.3\ \text{V}$ for germanium and $0.7\ \text{V}$ for silicon.
- Beyond it the barrier has effectively gone and the forward current rises exponentially, as the diode equation predicts.

## 2. Reverse bias region

- Practically no current flows. Only the **minority carriers** cross, giving a tiny reverse current.
- The number of minority carriers is fixed by the temperature, not by the voltage, so the reverse current quickly reaches a constant value, the **reverse saturation current** $I_s$.
- The reverse current is so much smaller than the forward current (microamperes against milliamperes) that it is plotted on a **different scale**.

## 3. Breakdown region

- When the reverse voltage is increased far enough, the minority carriers gain so much kinetic energy that they knock electrons out of the semiconductor atoms, which in turn knock out more.
- The reverse current rises abruptly and the junction resistance falls. The voltage at which this happens is the **breakdown voltage**.
- In an ordinary diode this can **permanently damage** the junction, so it is never operated in this region. (Zener diodes, in Module 4, are designed to work there.)

> **Watch out.** The two halves of the graph use **different current scales**: milliamperes forward, microamperes reverse. Label both axes when you draw it, and mark the knee voltage and the breakdown voltage.

---

<!-- page 13 | Numerical problems -->

# Numerical problems

Constants used: $k=8.617\times10^{-5}\ \text{eV/K}$. In the diode problems $\dfrac{eV}{kT}$ is evaluated as $\dfrac{V\ (\text{volt})}{kT\ (\text{eV})}$.

## Intrinsic carriers and band gap

**Problem 1.** The forbidden gap of pure silicon is $1.1\ \text{eV}$. Compare the number of conduction electrons at $37\ ^\circ\text{C}$ and $27\ ^\circ\text{C}$.

From $n_i\propto T^{3/2}e^{-E_g/2kT}$:

$$
\frac{n_i(310)}{n_i(300)}=\left(\frac{310}{300}\right)^{3/2}\exp\left[\frac{E_g}{2k}\left(\frac1{300}-\frac1{310}\right)\right]
$$

$$
=1.0504\times\exp\left[\frac{1.1\times1.075\times10^{-4}}{2\times8.617\times10^{-5}}\right]=1.0504\times e^{0.686}=\mathbf{2.09}
$$

A $10\ \text{K}$ rise roughly **doubles** the number of conduction electrons.

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

Rearranging $n_i=N_c\,e^{-E_g/2kT}$ gives $E_g=2kT\ln\left(\dfrac{N_c}{n_i}\right)$:

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

The large-reverse-bias current is $I_s=0.2\ \mu\text{A}$. With $kT=8.617\times10^{-5}\times298=0.02568\ \text{eV}$:

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

Rearranging $I=I_s\left(e^{V/V_T}-1\right)$:

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

<!-- page 14 | Practice and formula sheet -->

# Practice questions and formula sheet

## Short questions to revise

1. What is a hole? Why does it behave like a positive charge?
2. What is effective mass? Why do we use holes instead of negative-mass electrons in the valence band?
3. Write the density of states formula and explain each symbol.
4. Derive the expression for the density of electrons in the conduction band of an intrinsic semiconductor.
5. Derive the expression for the density of holes in the valence band.
6. Derive the intrinsic carrier concentration. State the law of mass action.
7. How does $n_i$ vary with temperature and with band gap?
8. Distinguish between n-type and p-type semiconductors, with band diagrams.
9. Show that the Fermi level of an intrinsic semiconductor lies at the middle of the gap at $0\ \text{K}$.
10. How does the Fermi level of an n-type semiconductor change with temperature?
11. Explain the formation of a p-n junction and the depletion region. Draw its energy band diagram.
12. What happens to the depletion region and the barrier under forward and reverse bias?
13. Derive the diode equation. What is the reverse saturation current?
14. Draw and explain the V-I characteristic of a p-n junction diode.

## Quick numerical practice

1. The band gap of germanium is $0.66\ \text{eV}$. By what factor does $n_i$ change between $300\ \text{K}$ and $310\ \text{K}$? *(Answer: about $1.59$, from $1.0504\times e^{0.412}$.)*
2. A diode has $I_s=1\ \text{nA}$ at $300\ \text{K}$. Find the current for a forward bias of $0.3\ \text{V}$ ($\eta=1$). *(Answer: $10^{-9}\left(e^{0.3/0.02585}-1\right)\approx0.11\ \text{mA}$.)*

---

## Formula sheet

### Carrier densities

| | |
| --- | --- |
| Density of states | $Z(E)\,dE=\dfrac{4\pi}{h^3}(2m^*)^{3/2}E^{1/2}\,dE$ |
| Standard integral | $\displaystyle\int_0^\infty x^{1/2}e^{-ax}\,dx=\frac{\sqrt\pi}{2a^{3/2}}$ |
| Electrons | $n=N_c\,e^{-(E_c-E_F)/kT}$, $\ N_c=2\left(\dfrac{2\pi m_e^*kT}{h^2}\right)^{3/2}$ |
| Holes | $p=N_v\,e^{-(E_F-E_v)/kT}$, $\ N_v=2\left(\dfrac{2\pi m_h^*kT}{h^2}\right)^{3/2}$ |
| Intrinsic concentration | $n_i=2\left(\dfrac{2\pi kT}{h^2}\right)^{3/2}(m_e^*m_h^*)^{3/4}e^{-E_g/2kT}=\sqrt{N_cN_v}\,e^{-E_g/2kT}$ |
| Law of mass action | $np=n_i^2$ |
| Temperature dependence | $n_i\propto T^{3/2}e^{-E_g/2kT}$ |

### Fermi level

| | |
| --- | --- |
| Intrinsic | $E_F=\dfrac{E_c+E_v}{2}+\dfrac{3kT}{4}\ln\left(\dfrac{m_h^*}{m_e^*}\right)$, mid-gap at $0\ \text{K}$ |
| n-type at $0\ \text{K}$ | $E_{Fn}=\dfrac{E_c+E_D}{2}$, moves down towards mid-gap as $T$ rises |
| p-type at $0\ \text{K}$ | $E_{Fp}=\dfrac{E_v+E_A}{2}$, moves up towards mid-gap as $T$ rises |

### The p-n junction

| | |
| --- | --- |
| Barrier potential | about $0.7\ \text{V}$ (Si), $0.3\ \text{V}$ (Ge) |
| Electron densities | $n_p=n_n\,e^{-eV_0/kT}$ |
| Diode equation | $I=I_s\left(e^{eV/\eta kT}-1\right)=I_s\left(e^{V/\eta V_T}-1\right)$ |
| Thermal voltage | $V_T=\dfrac{kT}{e}\approx25.9\ \text{mV}$ at $300\ \text{K}$ |
| Reverse bias | $I\to-I_s$ |
| Large forward bias | $I\approx I_s\,e^{eV/\eta kT}$ |
| Ideality factor | $\eta\approx1$ (Ge), $\eta\approx2$ (Si) |
