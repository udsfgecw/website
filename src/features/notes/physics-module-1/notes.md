<!-- page 1 | Start here -->

# Module 1 at a glance

This module answers two questions about electrons in solids.

1. **Why does a copper wire conduct, glass does not, and silicon conducts only a little?** We build the answer in three steps. First, a classical picture, in which the electrons in a metal behave like a gas. Then, a quantum correction, in which electrons follow the Pauli exclusion principle and Fermi–Dirac statistics. Finally, band theory, in which the regular arrangement of atoms in a crystal splits the electron energy levels into bands, with gaps between the bands.
2. **Why do some materials lose all their resistance when cooled?** This is **superconductivity**. We study its critical temperature, its critical magnetic field, the Meissner effect, the two types of superconductor, the BCS theory that explains it, and its applications.

> **KTU syllabus.** *Electrical conductivity:* classical free electron theory, electrical conductivity in metals, Fermi–Dirac distribution, variation of the Fermi function with temperature, Fermi energy, energy bands, classification of materials into conductor, semiconductor and insulator. *Superconductivity:* superconductivity, transition temperature, critical field, Meissner effect, Type I and Type II superconductors, BCS theory, applications of superconductors.

## What you will be able to do

- Define and use electric field, current density, drift velocity, relaxation time, mean free path, mobility, conductivity and resistivity, with their units.
- Derive $\sigma=\dfrac{ne^2\tau}{m}$ from the classical free electron theory in two ways, and write the factors that affect conductivity.
- Write the assumptions, successes and failures of the classical theory, and explain how the quantum free electron theory improves it.
- Write the Fermi–Dirac function, find its value at $0\ \text{K}$ and at higher temperatures, draw its graph, and define the Fermi energy.
- Explain how energy bands form, and use band diagrams to classify conductors, semiconductors and insulators.
- Describe the properties of superconductors: zero resistance, persistent currents, critical temperature, critical field, flux quantisation and the isotope effect.
- Derive $\chi=-1$ from the Meissner effect, and distinguish Type I from Type II superconductors.
- Explain Cooper pairs and the BCS theory, and list the applications of superconductors.
- Solve the standard numerical problems on conductivity, the Fermi function, the Fermi energy and the critical field.

## How to use these notes

- Each topic is a short page: **idea → explanation or derivation → worked example → common mistakes.**
- Green boxes show key ideas and definitions. Amber boxes marked **Watch out** show mistakes that make you lose marks. Boxes marked **Note on the source** show where the lecture notes were corrected.
- Try each numerical problem yourself before reading the solution. Every answer has been checked again.
- The last page has practice problems with answers, a list of exam-type questions and a formula sheet.

## Where each topic sits

| Part | Pages |
| --- | --- |
| Basic ideas | Key terms, Ohm's law and conductivity |
| Classical theory | Assumptions and electron motion, drift velocity and the conductivity formula, factors affecting conductivity, failures |
| Quantum theory | Quantum free electron theory, Fermi–Dirac statistics, variation with temperature, Fermi energy |
| Band theory | Formation of bands, band diagram, conductors, semiconductors and insulators |
| Numerical problems | Conductivity, Fermi function and Fermi energy |
| Superconductivity | Discovery and transition temperature, properties, review of magnetism, critical field, Meissner effect, Type I and II, BCS theory, applications |

> **Before you start.** You should know Ohm's law, Newton's second law and the equation of motion $v=u+at$, magnetic field and magnetic flux, and the exponential function $e^x$ with its inverse $\ln x$. You should also be comfortable with powers of ten, because almost every number in this module is either very large (electron density near $10^{28}\ \text{m}^{-3}$) or very small (times near $10^{-14}\ \text{s}$).

---

<!-- page 2 | Key terms -->

# Terms you need before you start

Every derivation in this module uses the same small set of quantities. First learn their meanings and units.

## 1. Electric field $E$

The electric field is a vector field that tells the force a charge would feel at each point in space. It is defined as the force per unit charge:

$$
E=\frac{F}{q}
$$

where $F$ is the force experienced by a charge $q$. Its unit is newton per coulomb, which is the same as volt per metre (V/m).

When a conductor is connected to a battery, the electric field pushes the free electrons and makes them flow. This gives an electric current. For a uniform wire of length $l$ with a voltage $V$ across it, the field inside is $E=V/l$.

## 2. Current density $J$

The current density is the electric current flowing per unit area of the cross-section of the conductor:

$$
J=\frac{I}{A}
$$

where $I$ is the current and $A$ is the cross-sectional area. Its unit is ampere per square metre ($\text{A/m}^2$).

Current density is more useful than current in theory, because it does not depend on the size of the wire. A thick wire and a thin wire of the same metal in the same field have the same $J$, even though the thick wire carries more current.

## 3. Drift velocity $v_d$

Even without any applied field, the free electrons in a metal move at high speed in random directions because of their thermal energy. When a field is applied, the electrons get a slow average velocity in the direction opposite to the field, in addition to this random motion. This average velocity is the drift velocity $v_d$.

Drift velocity is proportional to the electric field, and it is what produces the current. It is very small: typically $10^{-4}$ to $10^{-2}\ \text{m/s}$, compared with random speeds of about $10^{6}\ \text{m/s}$.

## 4. Relaxation time $\tau$

The relaxation time $\tau$ is the average time between two successive collisions of an electron in the conductor. After each collision the electron loses the extra velocity it got from the field, and it starts accelerating again from the beginning.

Relaxation time decides how freely the electrons can move. A longer relaxation time means the electrons are accelerated for a longer time between collisions, so they drift faster and the conductivity is higher. Typical values in metals are about $10^{-14}\ \text{s}$.

## 5. Mean free path $\lambda$

The mean free path is the average distance an electron travels between two successive collisions. It is related to the relaxation time through the average speed $v$ of the electrons:

$$
\lambda=v\,\tau
$$

The mean free path tells us how far an electron goes before it is scattered, so it also affects the conductivity of the material.

## 6. Mobility $\mu$

The mobility of a charge carrier tells how easily it responds to an electric field. It is defined as the drift velocity per unit electric field:

$$
\mu=\frac{v_d}{E}
$$

Its unit is $\text{m}^2/(\text{V s})$. In the classical theory (derived on a later page) $\mu=\dfrac{e\tau}{m}$, so mobility depends on the relaxation time. Higher mobility means the electrons move more freely when a field is applied.

## 7. Conductivity $\sigma$

Electrical conductivity $\sigma$ tells how easily a material conducts electric current. It depends on the number of free electrons, their charge and their mobility:

$$
\sigma=ne\mu
$$

The higher the conductivity, the more easily the material allows current to flow. Its unit is siemens per metre (S/m), also written mho/m or $\Omega^{-1}\text{m}^{-1}$.

## 8. Resistivity $\rho$

Resistivity is the reciprocal of conductivity. It tells how strongly a material opposes the flow of current:

$$
\rho=\frac1\sigma
$$

Its unit is ohm metre ($\Omega\,\text{m}$). Resistivity depends on the material and on its temperature. Materials with low resistivity (metals) are good conductors, and materials with high resistivity (insulators) resist the flow of current.

## Summary table

| Quantity | Definition | Unit |
| --- | --- | --- |
| Electric field $E$ | $F/q$ | V/m |
| Current density $J$ | $I/A$ | A/m² |
| Drift velocity $v_d$ | average velocity due to the field | m/s |
| Relaxation time $\tau$ | average time between collisions | s |
| Mean free path $\lambda$ | average distance between collisions, $v\tau$ | m |
| Mobility $\mu$ | $v_d/E$ | m²/(V s) |
| Conductivity $\sigma$ | $ne\mu$ | S/m |
| Resistivity $\rho$ | $1/\sigma$ | $\Omega$ m |

> **Watch out.** Do not mix up **current** $I$ (a total, in amperes) with **current density** $J$ (per unit area, in A/m²). Also, do not confuse resistivity $\rho$ (a property of the material) with resistance $R$ (a property of a particular piece of it, which depends on its length and area).

---

<!-- page 3 | Ohm's law and conductivity -->

# Ohm's law, resistivity and conductivity

## Ohm's law

**Electrical conductivity**

Electrical conductivity is a measure of how easily an electric current can pass through a material.

When a current $I$ flows through a conductor, the voltage drop across it is given by Ohm's law:

$$
V=IR
$$

where:
- $I$ is the current in amperes,
- $R$ is the resistance in ohms, and
- $V$ is the voltage drop in volts.

## Resistance and resistivity

Consider an ideal conductor with uniform cross-section and uniform composition, so that the electric field and current density are constant and parallel everywhere inside it.

![A rectangular conductor of length l and cross-sectional area A](/notes/cse/s1/physics/module-1/conductor-block.webp)

Experiments show that the resistance is directly proportional to the length $l$ and inversely proportional to the area $A$:

$$
R\propto\frac{l}{A}\qquad\Longrightarrow\qquad R=\rho\,\frac{l}{A}\qquad\Longrightarrow\qquad\rho=\frac{RA}{l}
$$

The constant of proportionality $\rho$ is the electrical resistivity of the material, with SI unit $\Omega\,\text{m}$. The conductivity is its reciprocal:

$$
\sigma=\frac1\rho\qquad\text{unit: siemens per metre (S/m)}
$$

## Point form of Ohm's law

If the shape is more complicated, or the resistivity changes from point to point, the current density and the field become functions of position. Then we use a more general, local statement. With $E(x)$ the field at a point $x$ and $J(x)$ the current density there, the conductivity at that point is

$$
\sigma(x)=\frac{J(x)}{E(x)}\qquad\Longrightarrow\qquad\boxed{J=\sigma E}
$$

This is the point form of Ohm's law. It is true at each point of a material, whatever its shape.

## The point form from $V=IR$

For a uniform conductor the point form follows directly from Ohm's law.

Start from:

$$
I=\frac{V}{R}\qquad\text{and}\qquad R=\rho\frac{l}{A}
$$

Put $R$ in the first equation:

$$
I=\frac{VA}{\rho\,l}
$$

The field in a uniform conductor is $E=V/l$, so $V/l$ can be replaced by $E$:

$$
I=\frac{AE}{\rho}
$$

Dividing by $A$ gives the current density:

$$
J=\frac{I}{A}=\frac{E}{\rho}=\sigma E
$$

So for a uniform conductor of area $A$ and length $l$, the general expression $J=\sigma E$ becomes the familiar $R=\rho l/A$, and the two descriptions agree.

## Classification of materials by conductivity

| Class | Typical conductivity | Examples |
| --- | --- | --- |
| Conductors | about $10^{8}\ \text{S/m}$ | metals and alloys |
| Semiconductors | $10^{4}$ to $10^{-4}\ \text{S/m}$ | silicon, germanium |
| Insulators | about $10^{-12}\ \text{S/m}$ and below | metal oxides, glasses, plastics |

The conductivities of real materials differ by more than twenty powers of ten. This is one of the widest ranges of any physical property. The theories on the next pages try to explain why.

## Example

**Example 1.** A copper wire is $2\ \text{m}$ long and has cross-section $1\ \text{mm}^2$. Copper has resistivity $1.7\times10^{-8}\ \Omega\,\text{m}$. Find its resistance, and the field and current density when it carries $2\ \text{A}$.

$$
R=\rho\frac{l}{A}=\frac{1.7\times10^{-8}\times2}{1\times10^{-6}}=\mathbf{0.034\ \Omega}
$$

$$
J=\frac{I}{A}=\frac{2}{1\times10^{-6}}=\mathbf{2\times10^{6}\ \text{A/m}^2}\qquad E=\frac{V}{l}=\frac{IR}{l}=\frac{2\times0.034}{2}=\mathbf{0.034\ \text{V/m}}
$$

*Check with the point form:* $\sigma=1/\rho=5.9\times10^{7}\ \text{S/m}$, and $\sigma E=5.9\times10^{7}\times0.034=2\times10^{6}\ \text{A/m}^2$. $\checkmark$

> **Watch out.** Convert areas to square metres before putting the values: $1\ \text{mm}^2=10^{-6}\ \text{m}^2$, not $10^{-3}$.

---

<!-- page 4 | Classical free electron theory -->

# Classical free electron theory (Drude–Lorentz)

## The idea

The **classical free electron theory** was one of the earliest models to explain the electrical and thermal properties of metals. It was developed by **Paul Drude** in 1900 and later improved by **Hendrik Lorentz**, so it is also called the Drude–Lorentz theory.

Its main idea is that the valence electrons in a metal behave like the molecules of an **ideal gas** trapped in a box. The box is made by the fixed positive ions of the metal. The theory gave the base for understanding conduction in metals, but it also had important limitations that only quantum mechanics could remove.

## Assumptions

1. **A metal is made of fixed ions and free electrons.** The metal has positive ion cores, fixed in a regular lattice, and valence electrons that are free to move through the whole metal. The free electrons are not bound to any particular atom.

2. **Electrons are independent particles, like a gas.** The free electrons are treated as independent particles moving inside the metal, just as gas molecules move inside a container. The positive ions are treated as fixed.

3. **Electrons follow Newtonian mechanics.** Their motion is described by classical ideas: velocity, momentum, force and Newton's laws.

4. **Random thermal motion.** The free electrons move randomly in all directions with speeds of about $10^{6}\ \text{m/s}$, and their speeds follow the **Maxwell–Boltzmann distribution**, as in the kinetic theory of gases.

5. **Collisions.** Electrons collide with the ions (and with each other). Between collisions they travel in straight lines. The average time between collisions is the **relaxation time** $\tau$, and the average distance is the **mean free path** $\lambda$. These collisions give the material its resistance.

6. **Response to a field.** The velocity of an electron is decided by two things: the random thermal motion due to temperature, and the extra velocity due to the applied electric field.

7. **Carriers of charge and heat.** The free electrons carry both charge and heat, so they are responsible for **electrical and thermal conduction** in metals.

## Motion in the absence of a field: thermal motion

Without an applied field, each free electron moves at high speed in a straight line until it collides with an ion. Then it changes direction and moves again. Its path is a random **zigzag**.

Because the directions are random, for every electron moving in a particular direction there is, on average, another electron moving in the opposite direction. So the thermal motion gives **no net flow of charge**, and no current flows through the metal.

## Motion when a field is applied: drift

Now connect the ends of a piece of metal to the terminals of a battery. An electric field is set up inside the metal. Each free electron feels a force in the direction **opposite** to the field (because it is negatively charged).

The electrons still move randomly and still collide, but along with the random motion, a **slow net movement** in one direction starts. This movement of electrons in one direction due to an electric field is called **drift**. The current is carried by the drift.

> **Key idea.** The electrons in a metal move very fast, but in random directions, so on average they do not go anywhere. A field adds a small, steady drift to this random motion. The current comes only from the drift.

## Orders of magnitude

| Quantity | Typical value |
| --- | --- |
| Random (thermal) speed | about $10^{6}\ \text{m/s}$ |
| Drift speed | $10^{-4}$ to $10^{-2}\ \text{m/s}$ |
| Relaxation time | about $10^{-14}\ \text{s}$ |
| Free electron density in a metal | about $10^{28}$ to $10^{29}\ \text{m}^{-3}$ |

> **Watch out.** The drift speed is very small, so electricity does not "arrive" because individual electrons rush along the wire. The electric field is set up along the whole wire almost at once, and every free electron starts drifting at practically the same time.

---

<!-- page 5 | Drift velocity and conductivity -->

# Drift velocity and the expression for conductivity

## Drift velocity

When a field $E$ is applied, each free electron (charge $-e$, mass $m$) feels a force

$$
F=-eE
$$

The minus sign shows that the force on an electron is opposite to the field. By Newton's second law, $F=ma$, so the acceleration is

$$
a=\frac{F}{m}=-\frac{eE}{m}
$$

Electrons do not keep accelerating forever, because they collide frequently. Assume that after each collision an electron starts again from rest on average ($u=0$). By the equation of motion $v=u+at$, its velocity at a time $t$ after the collision is

$$
v=0+at=-\frac{eE}{m}\,t
$$

The average time between collisions is the relaxation time $\tau$. Taking $t=\tau$ gives the average velocity that the electron gets from the field. This is the **drift velocity**:

$$
\boxed{v_d=-\frac{eE\tau}{m}}
$$

In magnitude, $v_d=\dfrac{eE\tau}{m}$. The minus sign only shows that electrons drift **against** the field.

## Current density from the drift (method 1)

Let $n$ be the number of free electrons per unit volume, called the **free electron density** or **electron concentration**. Consider a piece of metal of length $L$ and cross-section $A$.

1. The total number of free electrons in it is $N=nAL$.
2. Their total charge is $Q=Ne=nALe$.
3. These electrons drift through the length $L$ in a time $t=L/v_d$, so the current is

$$
I=\frac{Q}{t}=\frac{nALe}{t}
$$

The term $L/t$ is the drift velocity $v_d$, so

$$
I=neAv_d
$$

and the current density is

$$
J=\frac{I}{A}=nev_d
$$

(With signs: $J=-nev_d$, and since $v_d$ is itself negative, $J$ comes out in the direction of the field, as conventional current should.)

## Expression for conductivity

Put $v_d=\dfrac{eE\tau}{m}$ (in magnitude) in $J=nev_d$:

$$
J=ne\left(\frac{eE\tau}{m}\right)=\frac{ne^2\tau}{m}\,E
$$

Compare this with the point form of Ohm's law $J=\sigma E$. The two are the same if

$$
\boxed{\sigma=\frac{ne^2\tau}{m}}
$$

This is the classical expression for the **electrical conductivity of a metal**. The resistivity is its reciprocal, $\rho=\dfrac{m}{ne^2\tau}$.

## Second derivation via Ohm's law (method 2)

We get the same result from the macroscopic route on the previous page. From $V=IR$, $R=\rho L/A$ and $E=V/L$ we found

$$
J=\frac{E}{\rho}=\sigma E
$$

From the microscopic route we found $J=\dfrac{ne^2\tau}{m}E$. Both describe the same current density in the same field, so the coefficients of $E$ must be equal. This again gives $\sigma=\dfrac{ne^2\tau}{m}$.

## Mobility

The equation $v_d=\dfrac{e\tau}{m}E$ shows that the drift velocity is proportional to the field, $v_d\propto E$. Write it as

$$
v_d=\mu E
$$

where the constant $\mu$ is the **electron mobility**: the drift velocity per unit field,

$$
\mu=\frac{v_d}{E}=\frac{e\tau}{m}
$$

Putting this in the conductivity formula,

$$
\sigma=\frac{ne^2\tau}{m}=ne\left(\frac{e\tau}{m}\right)=ne\mu
$$

> **Note on the source.** One lecture set wrote $\mu=-e\tau/m$, carrying the negative sign of the electron into the mobility. Mobility is normally written as a **positive** quantity, $\mu=e\tau/m$, and the direction of drift is stated separately.

## Example

**Example 1.** A copper wire of cross-section $1\ \text{mm}^2$ carries $2\ \text{A}$. Copper has $n=8.5\times10^{28}\ \text{m}^{-3}$. Find the drift velocity.

$$
v_d=\frac{I}{neA}=\frac{2}{(8.5\times10^{28})(1.6\times10^{-19})(1\times10^{-6})}=\mathbf{1.5\times10^{-4}\ \text{m/s}}
$$

That is about $0.15\ \text{mm/s}$. An electron would take nearly two hours to drift one metre.

> **Watch out.** In $\sigma=ne^2\tau/m$ the charge is **squared**. One factor of $e$ comes from the force $eE$ that causes the drift, and the other comes from the charge $e$ carried by each drifting electron.

---

<!-- page 6 | What affects conductivity -->

# Factors affecting conductivity, and what the classical theory achieved

## Factors affecting electrical conductivity in metals

From $\sigma=\dfrac{ne^2\tau}{m}$, the conductivity depends on the number of free electrons $n$ and on the relaxation time $\tau$ (which is related to the mean free path).

**Number of free electrons $n$**

Metals have a high density of free electrons, and conductivity increases with the number of electrons available to carry current. Silver and copper conduct very well partly because of their high free electron density.

**Mean free path**

The longer an electron travels between collisions, the more it is accelerated and the higher the conductivity. At high temperatures electrons are scattered more often, by collisions with ions, with each other, and with the thermal vibrations of the lattice. So the mean free path becomes shorter and the conductivity falls.

**Relaxation time $\tau$**

The longer the average time between collisions, the greater the mobility and the higher the conductivity.

**Temperature**

- *At low temperatures* the thermal vibrations of the lattice (called **phonons**) are weak, so electrons are scattered less. Conductivity **increases** as temperature decreases.
- *At high temperatures* the lattice vibrates more strongly, electron–phonon scattering becomes more frequent, and conductivity **decreases**.

So in a metal the resistivity increases with temperature. Metals have a **positive temperature coefficient of resistance**.

**Impurities and defects**

Foreign atoms in the lattice and crystal defects (vacancies, dislocations, grain boundaries) scatter the free electrons. This reduces the relaxation time and therefore the conductivity. This is why alloys usually conduct less than the pure metals they are made from.

| Factor | Effect on $\sigma$ |
| --- | --- |
| More free electrons | increases |
| Longer relaxation time or mean free path | increases |
| Higher temperature (metals) | decreases |
| Impurities and defects | decreases |

## Importance of the classical theory

Even with its limitations, the classical free electron theory played an important role in the development of solid-state physics.

- It gave the base for understanding the electrical and thermal properties of metals.
- The model is simple, yet it explains basic phenomena such as electrical conductivity and **Ohm's law**.
- It gives the correct *form* of the **Wiedemann–Franz law**: the ratio of thermal conductivity $\kappa$ to electrical conductivity $\sigma$ is proportional to the temperature, $\kappa/\sigma=LT$, where $L$ is the Lorenz number.
- Its failures showed the need for quantum mechanics to explain the behaviour of electrons in solids. This led to more advanced theories such as the **band theory of solids**.

## Transition to quantum models

The Drude–Lorentz model was a step towards the modern quantum theory of metals. In **1928 Arnold Sommerfeld** improved the classical theory by using quantum statistics. In his **quantum free electron theory**, electrons are treated as fermions that follow the **Pauli exclusion principle** and move according to quantum mechanics. Their distribution over energies is given by the **Fermi–Dirac distribution** instead of the classical Maxwell–Boltzmann distribution.

Before studying that theory, the next page shows exactly where the classical theory goes wrong.

> **Watch out.** Positive temperature coefficient (resistance increasing with temperature) is a property of **metals**. Semiconductors and insulators behave in the opposite way, as the band theory pages explain.

---

<!-- page 7 | Failures of the classical theory -->

# Failures of the classical free electron theory

The classical theory explains Ohm's law, but it fails badly on several other points. Each failure is a clue that electrons do not behave like a classical gas.

## 1. Electronic specific heat

If the free electrons were a classical gas, each would have an average kinetic energy $\tfrac32kT$ and so contribute $\tfrac32k$ to the heat capacity. Then the electrons would add a contribution to the specific heat of a metal comparable to that of the lattice vibrations.

In experiments, the electronic contribution to the specific heat is **much smaller**, only about $1\%$ of the total at room temperature. The classical theory **overestimates** it.

## 2. Temperature dependence of conductivity

The theory correctly predicts that conductivity falls as temperature rises, because collisions become more frequent. But the predicted dependence is wrong in value. Classical theory gives

$$
\sigma\propto\frac{1}{\sqrt T}
$$

whereas experiment shows $\sigma\propto\dfrac1T$ (the resistivity of a pure metal rises roughly linearly with temperature).

## 3. Mean free path

To match the measured conductivities, the classical theory needs a mean free path of only about one interatomic spacing. In experiments the mean free path is **much longer**, often hundreds of atomic spacings, especially at low temperatures.

## 4. Dependence on valency

Since $\sigma\propto n$, metals with more free electrons per atom should conduct better. Then monovalent metals such as copper, silver and gold should conduct **worse** than divalent (zinc) and trivalent (aluminium) metals. In fact, the monovalent metals copper, silver and gold are among the **best** conductors.

## 5. Wiedemann–Franz law

The classical theory gets the *form* $\kappa/\sigma=LT$ right, but the *value* of the Lorenz number wrong. It predicts

$$
L=\frac32\left(\frac ke\right)^2\approx1.1\times10^{-8}\ \text{W}\,\Omega\,\text{K}^{-2}
$$

while the measured value for most metals is about $2.4\times10^{-8}\ \text{W}\,\Omega\,\text{K}^{-2}$. The quantum theory gives $L=\dfrac{\pi^2}{3}\left(\dfrac ke\right)^2=2.44\times10^{-8}\ \text{W}\,\Omega\,\text{K}^{-2}$, which agrees with experiment.

## 6. Classification of materials

The theory cannot explain why some materials are conductors, some are semiconductors and some are insulators. If we treat every material as a box of free electrons, there is no reason for the huge range of conductivities.

## 7. Magnetic properties

It cannot explain magnetic properties such as diamagnetism and ferromagnetism, and it predicts wrong values for the magnetic susceptibility of metals. In particular, it cannot explain **Pauli paramagnetism**, the weak response of free electrons to a magnetic field.

## 8. Sign of the charge carriers

It cannot correctly predict the sign of the charge carriers in some materials. Some metals (zinc and cadmium, for example) have a **positive Hall coefficient**, as if the current is carried by positive charges. A free-electron gas cannot explain this.

## 9. Quantum phenomena

It cannot explain effects that are quantum in nature: quantised energy levels in solids, the existence of energy bands, the photoelectric effect and superconductivity.

## Summary

| Prediction of classical theory | What is observed |
| --- | --- |
| Large electronic specific heat | about $1\%$ of the total |
| $\sigma\propto T^{-1/2}$ | $\sigma\propto T^{-1}$ |
| Mean free path about one atomic spacing | much longer |
| Higher valency gives higher $\sigma$ | Cu, Ag, Au (monovalent) conduct best |
| Lorenz number $\approx1.1\times10^{-8}$ | $\approx2.4\times10^{-8}\ \text{W}\,\Omega\,\text{K}^{-2}$ |
| No reason for conductors, semiconductors and insulators | huge range of conductivity |

> **Note on the source.** One lecture set said that classical theory predicts conductivity "decreasing linearly with temperature". The other set said the agreement with experiment is only qualitative. The standard statement is the one above: classical theory gives $\sigma\propto T^{-1/2}$, while experiment gives $\sigma\propto T^{-1}$.

---

<!-- page 8 | Quantum free electron theory -->

# Quantum free electron theory (Sommerfeld)

## The idea

Sommerfeld kept the simple picture of free electrons moving inside a metal, but replaced Newtonian mechanics and classical statistics with **quantum mechanics** and **Fermi–Dirac statistics**. This one change fixes most of the failures on the previous page.

## Basic assumptions

1. **Electrons are waves.** The classical model treats electrons as particles that follow Newton's laws. The quantum theory treats them as waves that follow the **Schrödinger equation**.
2. **Constant potential inside, infinite at the surface.** The potential energy of an electron is taken as constant (zero) everywhere inside the metal and infinite at the boundaries. So the electrons are **free particles in a box**. This deliberately ignores the detailed interaction between the electrons and the ion lattice.
3. **Discrete energy levels.** Because the electrons are confined in a box, their energies are quantised. Only certain discrete energy levels are allowed.
4. **Pauli exclusion principle.** Each energy level can hold at most **two electrons, with opposite spins**.
5. **Fermi–Dirac distribution.** The very large number of electrons in the metal are distributed over the energy levels according to the **Fermi–Dirac distribution function** (next page).

## How it explains electrical conductivity

At ordinary temperatures, all the energy levels up to a certain energy, the **Fermi level**, are almost completely full, with two electrons in each. An electron can gain energy from an applied field only if it can move into an **empty** level just above its own.

- Electrons deep below the Fermi level cannot do this, because every level just above them is already occupied.
- Only the electrons with energies **close to the Fermi level** can gain energy from the field and move into the empty levels just above.

So fewer electrons take part in conduction than the classical theory assumes. Those that do take part move at the high **Fermi speed** (about $10^{6}\ \text{m/s}$), with a relaxation time and mean free path different from the classical values. With these quantum values, the theory gives much better values of electrical conductivity.

## Other successes

- **Temperature dependence.** The predicted change of conductivity with temperature is much closer to the observed change.
- **Specific heat.** Only electrons within about $kT$ of the Fermi level can absorb thermal energy, because only they have empty levels nearby. This is a very small fraction of all the electrons, roughly $kT/E_F\approx0.004$ for copper at room temperature, so the electronic specific heat is very small, in agreement with experiment.
- **Mean free path.** It predicts a long mean free path, as observed.
- **Wiedemann–Franz law.** It gives the correct Lorenz number, $L=\dfrac{\pi^2}{3}\left(\dfrac ke\right)^2$.
- **Paramagnetism.** It explains the weak Pauli paramagnetism of free electrons.

## Drawbacks

- It **fails for semiconductors and insulators**. Like the classical model, it cannot explain why materials fall into three classes.
- It cannot explain **positive charge carriers** (positive Hall coefficients) in some materials.
- It **ignores the periodic potential** of the positive ions in the lattice.

The last drawback is the most important one. When we put back the periodic potential, we get the **band theory of solids**, covered after the Fermi–Dirac pages.

> **Watch out.** "Free electron" in both theories means not bound to a particular atom. It does not mean free of the metal. In the quantum theory the electrons are free inside the box but cannot leave it.

---

<!-- page 9 | Fermi–Dirac distribution -->

# Fermi–Dirac statistics

## Statistical methods

A solid contains an enormous number of electrons, about $10^{28}$ to $10^{29}$ per cubic metre in a metal. We cannot follow them one by one.

**Statistical methods**

Statistical methods describe how a large number of particles are distributed among the available energy states. There are three main kinds:

| Statistics | Applies to | Examples |
| --- | --- | --- |
| **Maxwell–Boltzmann** | classical, **distinguishable** particles | molecules of air |
| **Fermi–Dirac** | **fermions**: indistinguishable particles with **half-integer spin** | electrons, protons, neutrons |
| **Bose–Einstein** | **bosons**: indistinguishable particles with **integer spin** | photons |

Particles can be divided as follows:

- **Distinguishable** (classical) particles follow Maxwell–Boltzmann statistics.
- **Indistinguishable** (quantum) particles are either **fermions**, which follow the Pauli exclusion principle and Fermi–Dirac statistics, or **bosons**, which do not follow it and follow Bose–Einstein statistics.

> **Note on the source.** One lecture set divided indistinguishable particles into "fermions" and "mesons". The correct division is **fermions** and **bosons** (mesons are just one family of bosons).

In solid-state physics, electrons are what matter, and electrons are fermions. So we use the **Fermi–Dirac distribution**.

## The Fermi–Dirac distribution function

The probability $f(E)$ that a quantum state of energy $E$ is occupied by an electron, at thermal equilibrium at temperature $T$, is

$$
\boxed{f(E)=\frac{1}{1+e^{\,(E-E_F)/kT}}}
$$

where:

- $f(E)$ is the probability that the energy state $E$ is occupied;
- $E$ is the energy of the state we are considering;
- $E_F$ is a constant called the **Fermi energy** or **Fermi level**;
- $k$ is Boltzmann's constant, $1.38\times10^{-23}\ \text{J/K}=8.617\times10^{-5}\ \text{eV/K}$;
- $T$ is the absolute temperature in kelvin.

$E_F$ may or may not coincide with an actual energy level, but it gives a reference with which other energies can be compared.

## Reading the formula

Everything depends on the exponent $\dfrac{E-E_F}{kT}$, which compares how far a state is from the Fermi level with the thermal energy $kT$.

- If $E$ is **much below** $E_F$, the exponent is large and negative, $e^{(\cdot)}\approx0$, and $f\approx1$. The state is almost certainly occupied.
- If $E$ is **much above** $E_F$, the exponent is large and positive, $e^{(\cdot)}$ is very large, and $f\approx0$. The state is almost certainly empty.
- At $E=E_F$ the exponent is $0$ and $f=\tfrac12$ (for $T>0$).

A probability always lies between $0$ (certainly empty) and $1$ (certainly occupied), and $f(E)$ does too.

## A useful symmetry

For energies at equal distance above and below $E_F$, the occupation probabilities add up to one:

$$
f(E_F+\Delta E)+f(E_F-\Delta E)=1
$$

So the probability that a state $\Delta E$ **above** $E_F$ is **occupied** is equal to the probability that a state $\Delta E$ **below** $E_F$ is **empty**.

**Example 1**

At room temperature ($kT=0.0259\ \text{eV}$), find $f(E)$ for a state $kT$ above and a state $kT$ below the Fermi level.

$$
f(E_F+kT)=\frac{1}{1+e^{1}}=\frac{1}{3.718}=\mathbf{0.269}\qquad f(E_F-kT)=\frac{1}{1+e^{-1}}=\frac{1}{1.368}=\mathbf{0.731}
$$

They add up to $1$, as the symmetry says. $\checkmark$

> **Watch out.** Write the exponent as $(E-E_F)/kT$, with $E$ first. If you change it to $(E_F-E)$, occupied states become empty ones.

---

<!-- page 10 | Fermi function and temperature -->

# Variation of the Fermi function with temperature

The Fermi function changes with temperature. We study three cases: absolute zero, a moderate temperature, and a high temperature.

## Case 1: at $T=0\ \text{K}$

There are three possibilities: the energy $E$ is below, above or equal to the Fermi energy.

**(a) $E<E_F$.** Then $E-E_F$ is negative, and dividing by $kT=k\times0$ makes the exponent $-\infty$:

$$
\frac{E-E_F}{kT}=\frac{\text{negative}}{0}=-\infty\qquad\Longrightarrow\qquad f(E)=\frac{1}{1+e^{-\infty}}=\frac{1}{1+0}=1
$$

$f(E)=1$ means every energy level below $E_F$ is **occupied**.

**(b) $E>E_F$.** Then $E-E_F$ is positive and the exponent is $+\infty$:

$$
\frac{E-E_F}{kT}=\frac{\text{positive}}{0}=+\infty\qquad\Longrightarrow\qquad f(E)=\frac{1}{1+e^{\infty}}=\frac{1}{\infty}=0
$$

$f(E)=0$ means every energy level above $E_F$ is **vacant** at $0\ \text{K}$.

**(c) $E=E_F$.** Then $E-E_F=0$ and the exponent is $\dfrac00$, which is **indeterminate** at exactly $0\ \text{K}$. The occupancy of the Fermi level itself is not fixed at absolute zero. It can be anywhere from $0$ to $1$. (For any temperature above zero, however small, it is exactly $\tfrac12$, as Case 2 shows.)

**In short, at $0\ \text{K}$:**

| Energy | $f(E)$ | Meaning |
| --- | --- | --- |
| $E<E_F$ | $1$ | completely full (probability 100 %) |
| $E>E_F$ | $0$ | completely empty (probability 0 %) |

The electrons fill the levels from the bottom upwards, two in each level, up to $E_F$, and nothing is above it.

![At T = 0 K the levels up to the Fermi energy are filled with electrons and the levels above are vacant](/notes/cse/s1/physics/module-1/filled-vacant-levels.webp)

![At T = 0 K the occupied levels each hold two electrons of opposite spin, up to the Fermi level, and the levels above are empty](/notes/cse/s1/physics/module-1/fermi-occupancy-0k.webp)

> **Fermi energy.** The Fermi energy is the **highest filled energy level at $0\ \text{K}$**.

## Case 2: at a finite temperature $T>0\ \text{K}$

When the solid is heated, some electrons are excited to higher levels. In a metal, $E_F$ is several electronvolts, while at room temperature $kT\approx0.026\ \text{eV}$. So $E_F\gg kT$.

- Electrons deep below $E_F$ cannot be excited, because the thermal energy $kT$ is far too small to lift them to an empty level.
- Only electrons in a narrow band of width about $kT$ just below $E_F$ can jump to levels just above $E_F$.

As a result, the probability of finding electrons just below $E_F$ **decreases** below $1$, and the probability of finding electrons just above $E_F$ **increases** above $0$. The states above $E_F$ are partly occupied and the states just below are partly empty.

![At T > 0 K a few electrons from just below the Fermi level have been excited into levels just above it](/notes/cse/s1/physics/module-1/thermal-excitation-levels.webp)

For an electron exactly at the Fermi level, $E=E_F$, so the exponent is $0$:

$$
f(E_F)=\frac{1}{1+e^{0}}=\frac{1}{1+1}=\frac12
$$

> **Key idea.** At any temperature above $0\ \text{K}$, the probability of occupation of the Fermi level is **$\tfrac12$, or 50 %**. So the Fermi level can also be defined as the energy at which the occupation probability is one half.

Far from the Fermi level, not much changes:

- For $E\gg E_F$, $f(E)\approx0$: high levels are still almost always empty.
- For $E\ll E_F$, $f(E)\approx1$: low levels are still almost always full.

## Case 3: at high temperature

As the temperature rises further:

- the electrons have more thermal energy and spread over a wider range of levels;
- the change from $f=1$ to $f=0$ becomes more and more gradual;
- a larger fraction of electrons occupies states above $E_F$, and the probability of finding electrons just below $E_F$ falls further.

Far above the Fermi level, where $E-E_F\gg kT$, the $1$ in the denominator can be neglected:

$$
f(E)\approx e^{-(E-E_F)/kT}
$$

This is the classical **Maxwell–Boltzmann** form. So at very high temperatures (or high energies), the Fermi–Dirac distribution starts to look like the classical one.

## Graphical representation

![Fermi function f(E) at T = 0 K (a step) and at two higher temperatures T2 > T1 crossing at f = 0.5 at E_F](/notes/cse/s1/physics/module-1/fermi-function-0k-and-t.webp)

- **At $T=0\ \text{K}$:** a step. $f=1$ up to $E_F$, and then a sudden drop to $0$.
- **At $T>0\ \text{K}$:** the step becomes a smooth curve that falls from $1$ to $0$ over a width of a few $kT$ around $E_F$.
- **At higher temperatures:** the curve spreads out more and its tail looks like an exponential decay.

Every curve passes through $f=0.5$ at $E=E_F$.

![Fermi function f(E) against E minus E_F at T = 0 K, 300 K and 2500 K](/notes/cse/s1/physics/module-1/fermi-function-temperature.webp)

> **Watch out.** At exactly $0\ \text{K}$, $f(E_F)$ is indeterminate. Only for $T>0$ is $f(E_F)=\tfrac12$. Examiners like this difference.

---

<!-- page 11 | Fermi energy -->

# The Fermi energy and Fermi level

## Two definitions

1. **Fermi energy** $E_F$: the energy of the **highest occupied level at $0\ \text{K}$**.
2. **Fermi level**: the more general term used at any temperature. It is the energy level whose **probability of occupation is $\tfrac12$** (50 %).

At absolute zero the two are the same. Many books use the two names in the same meaning.

## Value of the Fermi energy

For a three-dimensional gas of free electrons, such as the conduction electrons of a metal, the Fermi energy is

$$
E_F=\frac{\hbar^{2}}{2m}\left(3\pi^{2}n\right)^{2/3}
$$

where $\hbar=h/2\pi$ is the reduced Planck constant, $m$ is the electron mass and $n$ is the free electron density. It depends only on $n$: the more electrons are packed in, the higher the levels they must fill.

From the Fermi energy we can also define the **Fermi speed**, the speed of an electron at the Fermi level:

$$
\frac12mv_F^2=E_F\qquad\Longrightarrow\qquad v_F=\sqrt{\frac{2E_F}{m}}
$$

**Example 1**

Copper has $n=8.5\times10^{28}\ \text{m}^{-3}$. Find its Fermi energy and Fermi speed.

$$
E_F=\frac{(1.0546\times10^{-34})^2}{2\times9.11\times10^{-31}}\left(3\pi^2\times8.5\times10^{28}\right)^{2/3}=1.13\times10^{-18}\ \text{J}=\mathbf{7.05\ \text{eV}}
$$

$$
v_F=\sqrt{\frac{2\times1.13\times10^{-18}}{9.11\times10^{-31}}}=\mathbf{1.57\times10^{6}\ \text{m/s}}
$$

With a relaxation time of $2.5\times10^{-14}\ \text{s}$, the mean free path at the Fermi speed is $\lambda=v_F\tau=3.9\times10^{-8}\ \text{m}$, about $40\ \text{nm}$ or more than 100 atomic spacings. This long mean free path is exactly what the classical theory could not explain.

## Position of the Fermi level in different materials

**Conductors (metals)**

The Fermi level lies **inside the conduction band**, or in the region where the conduction and valence bands overlap. Even at absolute zero there are free electrons in the conduction band, so metals conduct easily.

**Semiconductors**

The Fermi level lies **within the band gap**, between the valence and conduction bands. Its exact position depends on the type:

- in an **intrinsic** (pure) semiconductor it is near the **middle** of the gap;
- in an **n-type** semiconductor (doped with extra electrons) it moves **closer to the conduction band**;
- in a **p-type** semiconductor (doped with holes, or electron acceptors) it moves **closer to the valence band**.

**Insulators**

The Fermi level is also in the band gap, but the gap is much wider, so the Fermi level is far from both bands. It is extremely difficult for electrons to cross to the conduction band, so insulators have very few free electrons and do not conduct.

> **Watch out.** "Fermi energy" strictly means the highest filled level at $0\ \text{K}$. "Fermi level" is the $f=\tfrac12$ level at any temperature. Write which definition you are using. Also, $E_F\gg kT$ in metals. Because of this, only a thin slice of electrons near $E_F$ takes part in conduction and heat capacity.

---

<!-- page 12 | Band theory and formation of bands -->

# Band theory: how energy bands form

## Why a new theory

The free electron theories ignore the ion lattice.

**Band theory**

Band theory keeps the quantum picture but includes the effect of the crystal.

## Basic assumptions

1. Electrons have a **wave nature**, and the laws of **quantum mechanics** apply to them.
2. The potential energy of an electron inside the crystal is **not constant**. It is **lowest at the positive ion sites** and **highest midway between two ions**, and this pattern **repeats** with the periodicity of the crystal.

## Formation of energy bands

In a single, isolated atom, electrons occupy **discrete** energy levels, such as 1s, 2s, 2p, 3s, 3p.

When a very large number $N$ of atoms come close together to form a solid, the electron wave functions of neighbouring atoms **overlap**. Because of this interaction, and because the Pauli principle does not allow two electrons in a system to share the same state, each discrete atomic level **splits into $N$ closely spaced levels**. Together, these closely spaced levels form a continuous **energy band**.

![Energy levels of an isolated atom (1s, 2s, 2p, 3s, 3p) and the corresponding bands in a lattice](/notes/cse/s1/physics/module-1/band-formation.webp)

## Narrow and wide bands

- The electrons in the **outer shells** screen the inner (core) electrons from the neighbouring atoms. So the inner levels split only slightly and form **narrow bands**.
- The **valence electrons** in the outermost shell interact most strongly, so their levels split the most and form **wider bands**.

## How close are the levels inside a band?

The width of an energy band is typically a **few electronvolts**. A crystal has an enormous number of atoms ($N\sim10^{23}$ in a small piece), so the band has an enormous number of levels. So the energy gap $\Delta E$ between neighbouring levels is extremely small, of the order of

$$
\Delta E\sim\frac{\text{a few eV}}{10^{23}}\sim10^{-23}\ \text{eV}
$$

At room temperature, the thermal energy of an electron is about $kT\approx0.026\ \text{eV}$, which is much larger than this spacing. So inside an allowed band, an electron can easily move to a higher vacant level, either by thermal energy or under a small applied field. In effect, the levels in a band form a **continuum**.

> **Note on the source.** The lecture notes gave the level spacing as about $10^{-27}\ \text{eV}$. If we divide a band of a few eV among about $10^{23}$ levels, we get about $10^{-23}\ \text{eV}$. In both cases the conclusion is the same: the spacing is negligible compared with $kT$.

## Allowed and forbidden energies

Between the allowed bands there are ranges of energy in which **no electron states exist**. These are the **forbidden bands** or **band gaps**. An electron in a crystal can have an energy inside an allowed band, but never inside a gap. The next page looks at the two bands that decide the electrical behaviour.

> **Watch out.** A band is made of **levels**, not of electrons. A band can be full, partly full or empty, depending on how many electrons are there to fill it.

---

<!-- page 13 | The energy band diagram -->

# Valence band, conduction band and band gap

## The energy band diagram

An **energy band diagram** shows the energy levels of the top energy band and the next lower band in a solid, with the gap between them. The vertical axis is electron energy. Bands are drawn as horizontal strips, with the inner bands at the bottom.

![Energy band diagram: inner bands, valence band, forbidden energy gap and conduction band](/notes/cse/s1/physics/module-1/energy-band-diagram.webp)

## The two important bands

**Valence band**

The valence band is the range of energies of the **valence electrons that take part in bonding** in the crystal. These electrons are bound to their atoms and are not free to move. The valence band is usually full or nearly full, so it cannot conduct well. Its top edge is $E_v$, the **highest energy an electron can have while still bound**.

**Conduction band**

The conduction band is the range of higher energies of electrons that have **broken free from their bonds** and can move through the whole solid. Only free electrons take part in conduction, hence the name. Its bottom edge is $E_c$, the **smallest energy an electron must have to become free**. An electron that reaches $E_c$ is no longer bound to an atom and can move under the effect of an electric field.

**Forbidden band (band gap)**

The forbidden band is a range of energies where no states exist, separating the valence and conduction bands. Its width is the **band gap**:

$$
E_g=E_c-E_v
$$

For an electron to take part in conduction, it must gain at least the energy $E_g$ to jump from $E_v$, the top of the valence band, to $E_c$, the bottom of the conduction band.

## The band gap decides the behaviour

- If the bands **overlap** (no gap), electrons move freely between them. The material **conducts** easily.
- If the gap is **moderate**, electrons can be lifted across it by heat or light. This is a **semiconductor**.
- If the gap is **large**, electrons cannot cross it under normal conditions. This is an **insulator**.

![Band structure of a metal (overlapping bands), a semiconductor (small gap) and an insulator (large gap), with the Fermi level](/notes/cse/s1/physics/module-1/band-gap-comparison.webp)

## Holes

When an electron leaves the valence band, it leaves behind an empty state, called a **hole**. A hole behaves like a positive charge carrier. Electrons in the valence band can move into the hole, so the hole effectively moves in the opposite direction. In a semiconductor, both the electrons in the conduction band and the holes in the valence band carry current.

> **Watch out.** $E_c$ is the **bottom** of the conduction band and $E_v$ is the **top** of the valence band. The gap is measured between exactly these edges, not between the middles of the bands.

---

<!-- page 14 | Conductors, semiconductors and insulators -->

# Conductors, semiconductors and insulators

## Conductors

Conductors are materials that allow current to flow easily.

- The valence and conduction bands **overlap**, or the gap is negligible (less than about $0.1\ \text{eV}$).
- There is no significant energy barrier to stop electrons from entering the conduction band. Many electrons are already in it, and they move freely under an applied field.
- Even at room temperature there are plenty of free electrons, so metals are excellent conductors, and no extra energy is needed to excite electrons.
- The Fermi level lies inside the band.
- Examples: copper, silver, gold, aluminium, iron.

![Overlapping conduction and valence bands in a conductor](/notes/cse/s1/physics/module-1/conductor-bands.webp)

## Semiconductors

Semiconductors have a **small but important** band gap, roughly $1\ \text{eV}$.

- At **absolute zero** the conduction band is **empty** and the valence band is **full**, with all electrons bound. So a semiconductor behaves as an **insulator** at $0\ \text{K}$.
- At room temperature, or when exposed to heat or light, some electrons get enough energy to cross the gap into the conduction band. Each one leaves a **hole** in the valence band.
- Both the free electrons and the holes carry current. Conduction is weaker than in a conductor because far fewer electrons are in the conduction band.
- Conductivity **increases** with temperature, so semiconductors have a **negative temperature coefficient of resistance**.
- **Doping**, which means adding small controlled amounts of impurity, can increase the conductivity enormously. Doping can increase the number of free electrons (**n-type**) or the number of holes (**p-type**). Because we can control this, semiconductors are very useful in electronic devices.
- Examples: silicon ($E_g\approx1.1\ \text{eV}$), germanium ($E_g\approx0.66\ \text{eV}$), gallium arsenide ($E_g\approx1.43\ \text{eV}$).

![Conduction and valence band separated by a forbidden gap of about 1 eV](/notes/cse/s1/physics/module-1/semiconductor-bands.webp)

## Insulators

Insulators have a **large band gap**, roughly $4\ \text{eV}$ or more.

- Electrons in the valence band cannot get enough energy under normal conditions to jump across the gap, so there are very few or no electrons in the conduction band.
- Even an applied field cannot give enough energy to lift electrons across the gap. Conductivity is extremely poor because there are no free carriers.
- Only at very high temperatures do a few valence electrons reach the conduction band. Then the resistivity falls, so insulators also have a **negative temperature coefficient of resistance**.
- Because they have no free carriers, they are ideal for stopping the flow of current, for example to cover and enclose electrical wiring.
- Examples: diamond ($E_g\approx5.5\ \text{eV}$), glass, rubber, wood, plastic.

![Insulator: a wide forbidden gap between the valence and conduction bands](/notes/cse/s1/physics/module-1/insulator-bands.webp)

## Summary

| Property | Conductor | Semiconductor | Insulator |
| --- | --- | --- | --- |
| Band gap | overlap, or less than about $0.1\ \text{eV}$ | about $1\ \text{eV}$ | about $4\ \text{eV}$ or more |
| At $0\ \text{K}$ | partly filled band, conducts | valence full, conduction empty: insulator | valence full, conduction empty |
| Effect of heating | resistance **rises** | conductivity **rises** sharply | conductivity rises only at very high $T$ |
| Temperature coefficient of resistance | positive | negative | negative |
| Fermi level | inside a band | in the gap | in the gap, far from both bands |
| Examples | Cu, Ag, Au, Al, Fe | Si, Ge, GaAs | diamond, glass, rubber |

> **Note on the source.** The two lecture sets gave slightly different gap ranges: "1 to 2 eV" or "about 1 eV" for semiconductors, and "greater than 5 eV" for insulators. These are rough values, not sharp limits. The dividing line between a wide-gap semiconductor and an insulator is a matter of convention (around 3 to 4 eV). The values above are the usual textbook figures.

---

<!-- page 15 | Numerical problems: conductivity -->

# Numerical problems: conductivity

Constants: $e=1.6\times10^{-19}\ \text{C}$, $m=9.11\times10^{-31}\ \text{kg}$, $N_A=6.022\times10^{23}\ \text{mol}^{-1}$.

**Problem 1.** A material has conductivity $1.2\times10^{5}\ \text{S/m}$, carrier concentration $2\times10^{24}\ \text{m}^{-3}$ and carrier effective mass $0.2\times9.11\times10^{-31}\ \text{kg}$. Find the relaxation time.

*Step 1: effective mass.* $m=0.2\times9.11\times10^{-31}=1.822\times10^{-31}\ \text{kg}$.

*Step 2: rearrange* $\sigma=\dfrac{ne^2\tau}{m}$ to get $\tau=\dfrac{\sigma m}{ne^2}$.

*Step 3: put the values.* $e^2=(1.6\times10^{-19})^2=2.56\times10^{-38}\ \text{C}^2$, so the denominator is $ne^2=(2\times10^{24})(2.56\times10^{-38})=5.12\times10^{-14}$, and the numerator is $\sigma m=(1.2\times10^{5})(1.822\times10^{-31})=2.186\times10^{-26}$.

$$
\tau=\frac{2.186\times10^{-26}}{5.12\times10^{-14}}\approx\mathbf{4.3\times10^{-13}\ \text{s}}
$$

**Problem 2.** A metal has electron concentration $8.5\times10^{28}\ \text{m}^{-3}$ and relaxation time $2.5\times10^{-14}\ \text{s}$. Find its conductivity.

*Numerator:* $ne^2\tau=(8.5\times10^{28})(2.56\times10^{-38})(2.5\times10^{-14})$. Multiply the numbers, $8.5\times2.56\times2.5=54.4$, and add the powers of ten, $28-38-14=-24$, to get $54.4\times10^{-24}$.

$$
\sigma=\frac{54.4\times10^{-24}}{9.11\times10^{-31}}=5.97\times10^{7}\ \text{S/m}
$$

so $\sigma\approx\mathbf{5.97\times10^{7}\ \text{S/m}}$, close to the measured value for copper.

**Problem 3.** Find the drift velocity of the free electrons in a copper wire of cross-section $10\ \text{mm}^2$ carrying $100\ \text{A}$. Copper has density $8969\ \text{kg/m}^3$ and atomic weight $63.54$, and each atom gives one free electron.

*Step 1: electron density.* The number of atoms per unit volume is (density × Avogadro's number) / molar mass, with the molar mass in kg/mol:

$$
n=\frac{\rho N_A}{M}=\frac{8969\times6.022\times10^{23}}{63.54\times10^{-3}}=8.5\times10^{28}\ \text{m}^{-3}
$$

*Step 2: drift velocity* from $I=nAev_d$:

$$
v_d=\frac{I}{nAe}=\frac{100}{(8.5\times10^{28})(10\times10^{-6})(1.6\times10^{-19})}\approx\mathbf{7.4\times10^{-4}\ \text{m/s}}
$$

Even at $100\ \text{A}$ the electrons drift less than a millimetre per second.

**Problem 4.** Find the mobility of electrons in copper, with $9\times10^{28}$ valence electrons per $\text{m}^3$ and conductivity $6\times10^{7}\ \text{S/m}$.

$$
\mu=\frac{\sigma}{ne}=\frac{6\times10^{7}}{(9\times10^{28})(1.6\times10^{-19})}=\mathbf{4.2\times10^{-3}\ \text{m}^2/\text{V s}}
$$

**Problem 5.** Find the relaxation time of conduction electrons in a metal of resistivity $1.54\times10^{-8}\ \Omega\,\text{m}$ with $5.8\times10^{28}$ conduction electrons per $\text{m}^3$.

From $\rho=\dfrac{m}{ne^2\tau}$:

$$
\tau=\frac{m}{ne^2\rho}=\frac{9.11\times10^{-31}}{(5.8\times10^{28})(2.56\times10^{-38})(1.54\times10^{-8})}\approx\mathbf{4.0\times10^{-14}\ \text{s}}
$$

> **Note on the source.** The problem sheet printed the resistivity as $1.54\times10^{-3}\ \Omega\,\text{m}$, which would give $4\times10^{-19}\ \text{s}$. The answer given ($\approx4\times10^{-14}\ \text{s}$) needs $1.54\times10^{-8}\ \Omega\,\text{m}$, which is a typical value for a metal, so we have used that.

**Problem 6.** Silver has density $10.5\times10^{3}\ \text{kg/m}^3$ and atomic weight $107.9$, with one conduction electron per atom. Its conductivity at $20^\circ\text{C}$ is $6.8\times10^{7}\ \text{S/m}$. Find (a) the density of free electrons and (b) the electron mobility.

(a) $\ n=\dfrac{10.5\times10^{3}\times6.022\times10^{23}}{107.9\times10^{-3}}=\mathbf{5.86\times10^{28}\ \text{m}^{-3}}$

(b) $\ \mu=\dfrac{\sigma}{ne}=\dfrac{6.8\times10^{7}}{(5.86\times10^{28})(1.6\times10^{-19})}=\mathbf{7.25\times10^{-3}\ \text{m}^2/\text{V s}}$

**Problem 7.** For the metal of Problem 2 carrying a current density of $2\times10^{6}\ \text{A/m}^2$, find the field inside it and the drift velocity.

$$
E=\frac{J}{\sigma}=\frac{2\times10^{6}}{5.97\times10^{7}}=\mathbf{0.034\ \text{V/m}}
$$

$$
v_d=\frac{J}{ne}=\frac{2\times10^{6}}{(8.5\times10^{28})(1.6\times10^{-19})}=\mathbf{1.5\times10^{-4}\ \text{m/s}}
$$

> **Watch out.** Molar masses must be in **kg/mol** ($63.54\ \text{g/mol}=63.54\times10^{-3}\ \text{kg/mol}$), and areas in m². Most wrong answers on this page come from these two conversions.

---

<!-- page 16 | Numerical problems: Fermi function -->

# Numerical problems: the Fermi function and Fermi energy

Use $k=8.617\times10^{-5}\ \text{eV/K}$ when energies are in eV.

**Problem 1.** Find the probability that an electron occupies a state $0.2\ \text{eV}$ above the Fermi level at $300\ \text{K}$.

*Step 1.* $kT=8.617\times10^{-5}\times300=0.02585\ \text{eV}$.

*Step 2.* $\dfrac{E-E_F}{kT}=\dfrac{0.2}{0.02585}\approx7.74$.

*Step 3.*

$$
f(E)=\frac{1}{e^{7.74}+1}=\frac{1}{2291}\approx\mathbf{4.4\times10^{-4}}
$$

A state just $0.2\ \text{eV}$ above $E_F$ is almost empty at room temperature.

**Problem 2.** At what temperature is the probability of occupying a state $0.1\ \text{eV}$ above the Fermi level equal to $0.1$?

*Step 1: rearrange.* With $x=\dfrac{E-E_F}{kT}=\dfrac{0.1}{kT}$,

$$
0.1=\frac{1}{e^{x}+1}\ \Longrightarrow\ e^{x}=\frac{1-0.1}{0.1}=9
$$

*Step 2: take logs.* $x=\ln9=2.197$.

*Step 3: solve for $T$.*

$$
kT=\frac{0.1}{2.197}\ \Longrightarrow\ T=\frac{0.1}{2.197\times8.617\times10^{-5}}\approx\mathbf{528\ \text{K}}
$$

**Problem 3.** At $300\ \text{K}$, find the probability that a state $0.1\ \text{eV}$ **below** the Fermi level is occupied, and that one $0.1\ \text{eV}$ **above** it is occupied.

$\dfrac{0.1}{kT}=\dfrac{0.1}{0.02585}=3.87$.

$$
f(E_F-0.1)=\frac{1}{1+e^{-3.87}}=\mathbf{0.980}\qquad f(E_F+0.1)=\frac{1}{1+e^{3.87}}=\mathbf{0.020}
$$

They add up to $1$. The chance of finding a hole $0.1\ \text{eV}$ below $E_F$ is equal to the chance of finding an electron $0.1\ \text{eV}$ above it.

**Problem 4.** Find the Fermi energy and Fermi speed of copper, $n=8.5\times10^{28}\ \text{m}^{-3}$.

$$
E_F=\frac{\hbar^2}{2m}(3\pi^2n)^{2/3}=(6.10\times10^{-39})(1.85\times10^{20})\ \text{J}=1.13\times10^{-18}\ \text{J}=\mathbf{7.05\ \text{eV}}
$$

$$
v_F=\sqrt{\frac{2E_F}{m}}=\mathbf{1.57\times10^{6}\ \text{m/s}}
$$

$E_F$ is about 270 times $kT$ at room temperature, which justifies treating only electrons near $E_F$ as active.

**Problem 5.** At what energy above $E_F$ is the occupation probability $0.01$ at $300\ \text{K}$?

$$
0.01=\frac{1}{1+e^{x}}\ \Longrightarrow\ e^{x}=99\ \Longrightarrow\ x=\ln99=4.60
$$

$$
E-E_F=4.60\,kT=4.60\times0.02585=\mathbf{0.119\ \text{eV}}
$$

So the Fermi function falls from $0.5$ to $0.01$ within about $0.12\ \text{eV}$ of $E_F$ at room temperature. The "rounded step" is only a few $kT$ wide.

> **Watch out.** Use $k$ in **eV/K** when energies are in eV, and in J/K when they are in joules. Also remember that $f(E)$ is a **probability**. Any answer above $1$ or below $0$ is wrong.

---

<!-- page 17 | Superconductivity: discovery -->

# Superconductivity: discovery and transition temperature

## What superconductivity is

**Superconductivity**

Superconductivity is a phenomenon in which some materials, when cooled below a certain temperature, show two special properties:

- **Zero electrical resistance**
- **Expulsion of magnetic fields** from their inside

The temperature below which this happens is called the **critical temperature** or **transition temperature**, $T_c$.

## Discovery

- Superconductivity was discovered in **1911** by the Dutch physicist **Heike Kamerlingh Onnes**, who was studying the electrical resistance of **mercury** at very low temperatures.
- He found that at about **4.2 K** the resistance of mercury suddenly dropped to **zero**. This was the start of superconductivity.
- A superconducting material conducts electric current **without any loss of energy**, which is very different from any ordinary conductor.

![Resistance against temperature for an ordinary metal and a superconductor, which drops to zero at the critical temperature](/notes/cse/s1/physics/module-1/resistance-vs-temperature.webp)

In an ordinary metal the resistance falls as it is cooled but becomes steady at a small finite value (because of impurities and defects). In a superconductor it falls suddenly to exactly zero at $T_c$.

## The transition (critical) temperature

> **Transition temperature $T_c$.** The temperature below which a material changes from the normal conducting state to the superconducting state.

- **Above $T_c$:** the material behaves as a normal conductor, with finite resistance and no expulsion of the magnetic field.
- **Below $T_c$:** the material is superconducting, with zero resistance and the Meissner effect.
- Each superconductor has its own $T_c$, from near $0\ \text{K}$ to above $100\ \text{K}$ for the high-temperature superconductors.
- **High-temperature superconductors**, such as some ceramic materials, have $T_c$ above $77\ \text{K}$. They are easier to use in practice because they can be cooled with **liquid nitrogen** (which boils at $77\ \text{K}$) instead of expensive **liquid helium** (which boils at $4.2\ \text{K}$).
- The transition is **reversible**. If the material is warmed above $T_c$, it goes back to the normal state, its finite resistance comes back, and any magnetic field that was pushed out enters it again.

## Critical temperatures of some superconductors

| Material | $T_c$ | Type |
| --- | --- | --- |
| Tin (Sn) | $3.7\ \text{K}$ | I |
| Mercury (Hg) | $4.2\ \text{K}$ | I |
| Lead (Pb) | $7.2\ \text{K}$ | I |
| Niobium (Nb) | $9.2\ \text{K}$ | II |
| Magnesium diboride (MgB₂) | $39\ \text{K}$ | II |
| Yttrium barium copper oxide (YBCO) | $92\ \text{K}$ | II |

## History of the transition temperature

![Highest known transition temperature against year of discovery, 1911 to 1993](/notes/cse/s1/physics/module-1/transition-temperature-history.webp)

For 75 years after the discovery, the highest known $T_c$ increased slowly through niobium compounds to about $23\ \text{K}$. In 1986 the copper-oxide (cuprate) ceramics were discovered, and within a few years $T_c$ went above the boiling point of liquid nitrogen: about $92\ \text{K}$ for yttrium compounds, over $100\ \text{K}$ for bismuth and thallium compounds, and about $135\ \text{K}$ for mercury compounds.

> **Watch out.** Above $T_c$ a superconductor is just an ordinary conductor, often not a very good one. Lead, mercury and tin conduct worse than copper at room temperature.

---

<!-- page 18 | Properties of superconductors -->

# Properties of superconductors

## Some facts about superconducting materials

- Apart from pure elements, many **compounds and alloys** are superconductors.
- Good conductors of current such as **copper, silver and gold are not superconductors**.
- Some elements become superconducting only under **high pressure**, and others only in special forms such as **thin films**.
- **Compounds** generally have higher transition temperatures than elements.
- A superconducting binary compound may be made from two superconducting elements, from one superconducting and one non-superconducting element, or even from two elements **neither** of which is a superconductor.

## 1. Zero resistance

Below $T_c$ the electrical resistance is exactly zero, so there are no $I^2R$ losses. Most applications are based on this property.

## 2. Persistent currents

A persistent current is a steady current that flows without diminishing in strength.

- Once such a current is set up in a closed superconducting loop, no external power supply is needed to keep it going, because there are no $I^2R$ losses.
- As long as the loop is kept below $T_c$, the current keeps flowing without decay. Persistent currents have been seen to flow for years with no measurable decrease.

![A superconducting ring carrying a persistent current I with magnetic flux through it](/notes/cse/s1/physics/module-1/persistent-current-loop.webp)

## 3. Flux quantisation

Consider a current flowing round a superconducting ring.

- The magnetic flux density inside the superconducting material itself is zero, but magnetic flux can exist in the **hole** in the middle of the ring.
- This flux cannot take any value. It can only be a whole-number multiple of a basic unit, the **flux quantum** or **fluxon**:

$$
\Phi=n\Phi_0,\qquad n=1,2,3,\dots\qquad\Phi_0=\frac{h}{2e}
$$

- Numerically,

$$
\Phi_0=\frac{6.626\times10^{-34}}{2\times1.602\times10^{-19}}=2.07\times10^{-15}\ \text{Wb}
$$

This is **flux quantisation**. The charge $2e$ in the denominator is the charge of a **Cooper pair** of electrons (see BCS theory), so flux quantisation is direct evidence that the current in a superconductor is carried by pairs.

![Magnetic flux through a superconducting ring, Φ = nΦ0, and the current I around the ring](/notes/cse/s1/physics/module-1/flux-quantisation.webp)

**Example 1.** A superconducting ring of area $1\ \text{cm}^2$ has a field of $10^{-4}\ \text{T}$ through it. How many flux quanta does it hold?

$$
\Phi=BA=10^{-4}\times10^{-4}=10^{-8}\ \text{Wb}\qquad n=\frac{\Phi}{\Phi_0}=\frac{10^{-8}}{2.07\times10^{-15}}\approx\mathbf{4.8\times10^{6}}
$$

## 4. Isotope effect

The transition temperature depends on the mass of the ions. Heavier isotopes of the same element have a lower $T_c$,

$$
T_c\propto\frac{1}{\sqrt{M}}\qquad\Longleftrightarrow\qquad T_c\sqrt{M}=\text{constant}
$$

This shows that the vibrations of the lattice take part in superconductivity, which is a key idea of BCS theory.

**Example 2.** Two isotopes of mercury have masses $198$ and $202\ \text{amu}$. Find the ratio of their critical temperatures.

$$
\frac{T_c(202)}{T_c(198)}=\sqrt{\frac{198}{202}}=\mathbf{0.990}
$$

The heavier isotope has a $T_c$ about $1\%$ lower.

## 5. Effect of magnetic field and the Meissner effect

A strong enough magnetic field destroys superconductivity (the **critical field**), and a superconductor **expels** magnetic flux (the **Meissner effect**). These two properties are covered on the next pages, after a short review of magnetism.

| Property | Summary |
| --- | --- |
| Zero resistance | $R=0$ below $T_c$ |
| Persistent current | flows without decay in a closed loop |
| Flux quantisation | $\Phi=n\,h/2e$ through a ring |
| Isotope effect | $T_c\propto M^{-1/2}$ |
| Critical field | strong field destroys superconductivity |
| Meissner effect | $B=0$ inside, $\chi=-1$ |

> **Watch out.** "Zero resistance" alone would describe a perfect conductor. What makes a superconductor a really new state is that it also **expels** magnetic fields.

---

<!-- page 19 | Review of magnetism -->

# Review of magnetism

The Meissner effect and the critical field use a few magnetic quantities. Here they are in one place.

**Magnetic field**

The region of space around a magnet, a current-carrying conductor or a moving charge, in which a magnetic effect can be felt, is called a **magnetic field**.

**Magnetic induction $B$**

If a field is strong, its field lines are closer together. The **magnetic induction** or **magnetic flux density** at a point is the flux (number of field lines) passing through unit area around that point. Its unit is the **tesla (T)**.

**Magnetising field $H$**

The field due to currents in external circuits (for example a solenoid) is called the **magnetising field** $H$. Its SI unit is **ampere per metre (A/m)**.

**Magnetisation $M$**

When a material is placed in a magnetic field, it becomes magnetised. The **magnetic moment per unit volume** of the material is its **intensity of magnetisation** $M$. It tells how much the specimen is magnetised. Its unit is also **A/m**.

**Permeability $\mu$**

The magnetic permeability of a material is the ratio of the resultant field $B$ inside the material to the magnetising field $H$:

$$
\mu=\frac{B}{H}
$$

Its unit is henry per metre (H/m). The permeability of free space is a constant, $\mu_0=4\pi\times10^{-7}\ \text{H/m}$.

**Susceptibility $\chi$**

The ratio of magnetisation to magnetising field is the **magnetic susceptibility**:

$$
\chi=\frac{M}{H}
$$

It has **no unit**.

**Permeability versus susceptibility**

Permeability tells how well a material supports the formation of a magnetic field inside itself. Susceptibility tells whether the material is **attracted to** a magnetic field or **repelled from** it.

**Sign of $\chi$**

$\chi$ is **negative for diamagnetic** substances (weakly repelled) and **positive for paramagnetic** substances (weakly attracted).

**The connecting relation**

Magnetisation $M$, magnetising field $H$ and magnetic induction $B$ are related by

$$
B=\mu_0\,(H+M)
$$

## Summary

| Quantity | Meaning | Unit |
| --- | --- | --- |
| $B$ | magnetic flux density | T |
| $H$ | magnetising field | A/m |
| $M$ | magnetic moment per unit volume | A/m |
| $\mu=B/H$ | permeability | H/m |
| $\chi=M/H$ | susceptibility | none |

> **Watch out.** $M$ and $H$ have the same unit (A/m), so $\chi=M/H$ has no dimension. Do not write a unit for $\chi$ in an exam answer.

---

<!-- page 20 | Critical field -->

# Critical field

## The idea

A superconductor stays superconducting only if the magnetic field applied to it is not too strong.

> **Critical field $H_c$.** The maximum magnetic field strength that a superconductor can bear while remaining in the superconducting state. If the applied field is more than $H_c$, superconductivity is destroyed and the material goes back to the normal state with finite resistance.

## Variation with temperature

The critical field depends on temperature. It is **largest at $0\ \text{K}$** and **decreases** as the temperature comes close to $T_c$, where it becomes **zero**.

The variation is well described by

$$
H_c(T)=H_c(0)\left[1-\left(\frac{T}{T_c}\right)^2\right]
$$

where $H_c(0)$ is the critical field at $0\ \text{K}$.

![Critical field against temperature: the superconducting state lies below the curve, the normal state above](/notes/cse/s1/physics/module-1/critical-field-temperature.webp)

The curve divides the $H$–$T$ plane into two regions. Any combination of field and temperature **below** the curve is superconducting. Any combination **above** it is normal. To destroy superconductivity you can raise the temperature above $T_c$, or raise the field above $H_c(T)$, or do a bit of both.

## Why it matters

The critical field is an important parameter for applications. Superconducting magnets in MRI machines and particle accelerators must stay superconducting while producing very strong fields, so they need materials with **high critical fields**. Superconductors with higher critical fields can work in stronger magnetic fields without losing their superconducting properties.

## Examples

**Example 1.** Lead has $T_c=7.2\ \text{K}$ and $H_c(0)=6.4\times10^{4}\ \text{A/m}$. Find its critical field at $4\ \text{K}$.

$$
H_c(4)=6.4\times10^{4}\left[1-\left(\frac{4}{7.2}\right)^2\right]=6.4\times10^{4}\times0.691=\mathbf{4.4\times10^{4}\ \text{A/m}}
$$

**Example 2.** At what fraction of $T_c$ is the critical field half its value at $0\ \text{K}$?

$$
\frac12=1-\left(\frac{T}{T_c}\right)^2\ \Longrightarrow\ \frac{T}{T_c}=\frac{1}{\sqrt2}=\mathbf{0.71}
$$

More examples are on the practice page.

> **Watch out.** The temperature ratio is **squared** in the formula. Also, $H_c$ is zero at $T_c$, not at $0\ \text{K}$. The field a superconductor can bear is greatest when it is coldest.

---

<!-- page 21 | The Meissner effect -->

# The Meissner effect

## The idea

> **Meissner effect.** When a superconducting material is cooled below its critical temperature in a magnetic field, it **expels all the magnetic field lines** from its inside. The magnetic flux density inside becomes zero, $B=0$.

The Meissner effect is one of the defining characteristics of superconductivity. It was discovered by Walther Meissner and Robert Ochsenfeld in 1933.

![Meissner effect: field lines pass through a sphere above Tc but are expelled below Tc; a magnet with an ordinary conductor and a superconductor](/notes/cse/s1/physics/module-1/meissner-effect.webp)

- **Above $T_c$:** the field lines pass straight through the material.
- **Below $T_c$:** the field lines bend around the material and none enter it.
- An **ordinary conductor** near a magnet lets the field pass through it. A **superconductor** pushes the field out completely.

## Superconductor versus perfect conductor

A hypothetical "perfect conductor" with zero resistance would simply **freeze in** whatever field was inside it when it lost its resistance: if it was cooled in a field, the field would stay trapped inside.

A superconductor behaves differently. It **actively expels** the field, whether the field was applied before or after cooling. This is why superconductivity is a genuinely new state of matter, not just very good conduction.

## Proof that a superconductor is a perfect diamagnet

For any material, the magnetic induction is related to the magnetising field and magnetisation by

$$
B=\mu_0\,(H+M)
$$

In a superconductor, by the Meissner effect, the total field inside is zero:

$$
B=0
$$

Put this in:

$$
0=\mu_0\,(H+M)
$$

Since $\mu_0\neq0$,

$$
H+M=0\qquad\Longrightarrow\qquad M=-H
$$

So the magnetic susceptibility is

$$
\chi=\frac{M}{H}=\frac{-H}{H}=-1
$$

> **Key idea.** $\chi=-1$ is the condition for **perfect diamagnetism**. The Meissner effect makes a superconductor a perfect diamagnet. No ordinary material has this property. Ordinary diamagnets have $\chi$ of only about $-10^{-5}$.

## Consequences

- A small magnet placed above a superconductor is repelled and can **levitate**, floating above the surface. This is the basis of magnetic levitation.
- Because the material repels the field, there is a sharp change in the magnetic behaviour at $T_c$, which can be used to detect the transition.

> **Watch out.** The Meissner effect means $B=0$ **inside the material**. The applied field $H$ is not zero. It is cancelled by the magnetisation $M=-H$. Also, $\chi=-1$ is true only for the complete Meissner state: Type I below $H_c$, or Type II below $H_{c1}$.

---

<!-- page 22 | Type I and Type II superconductors -->

# Type I and Type II superconductors

Superconductors are divided into two types according to how they respond to an increasing applied magnetic field.

## Type I superconductors

- Type I superconductors show superconductivity and **completely expel** magnetic fields below a critical temperature $T_c$ and a critical field $H_c$.
- They show the **complete Meissner effect**. Below $H_c$ they are perfectly diamagnetic and the flux is totally expelled ($M=-H$).
- They are usually **pure elements**.
- They have only **one critical field**, $H_c$.
- At $H_c$ the transition to the normal state happens **sharply**. The magnetisation drops **suddenly** to zero and the magnetic lines of force suddenly enter the material.
- There is **no mixed state**.
- Their critical field is usually **low**, so only a small field is needed to destroy superconductivity. So they are called **soft superconductors**, and they are limited to low-field applications.
- Examples: lead ($T_c\approx7.2\ \text{K}$), mercury ($T_c\approx4.2\ \text{K}$), tin ($T_c\approx3.7\ \text{K}$).

![Magnetisation (−M) against applied field H for a Type I superconductor: rises linearly to H_c then drops to zero](/notes/cse/s1/physics/module-1/magnetisation-type-1.webp)

The magnetisation graph rises linearly (perfect diamagnetism, $-M=H$) up to $H_c$ and then drops vertically to zero. The resistance shows the same sudden change: it is zero up to $H_c$, and then jumps to its normal value.

## Type II superconductors

- Type II superconductors allow magnetic fields to **partly enter** while staying superconducting.
- They show a **partial Meissner effect**.
- They include **pure elements as well as alloys and compounds**.
- They have **two critical fields**, a lower critical field $H_{c1}$ and an upper critical field $H_{c2}$.
- **Below $H_{c1}$:** the material is perfectly diamagnetic, with the flux totally expelled ($M=-H$), as in the complete Meissner effect.
- **At $H_{c1}$:** magnetic field lines start to enter the material in small amounts.
- **Between $H_{c1}$ and $H_{c2}$:** the material is still diamagnetic, but not perfectly ($M\neq-H$), so the Meissner effect is incomplete. Magnetic flux enters as thin filaments called **vortices**, while the rest of the material stays superconducting. This is the **mixed state** or **vortex state**. Electrically the material is still a superconductor, but magnetically it is in a mixed state.
- **At $H_{c2}$:** the magnetisation becomes zero, the flux enters completely, and the material becomes a **normal conductor**. Above $H_{c2}$ superconductivity is completely destroyed.
- The magnetisation is lost **gradually**, not suddenly.
- They usually have **higher critical temperatures and much higher critical fields** than Type I. Since a very large field is needed to destroy their superconductivity, they are called **hard superconductors**.
- This makes them useful for applications such as superconducting magnets and quantum computing.
- Examples: niobium ($T_c\approx9.2\ \text{K}$), yttrium barium copper oxide ($T_c\approx92\ \text{K}$), magnesium diboride ($T_c\approx39\ \text{K}$).

![Magnetisation against H for a Type II superconductor, with lower critical field H_c1, vortex region and upper critical field H_c2](/notes/cse/s1/physics/module-1/magnetisation-type-2.webp)

## Comparison

| | Type I (soft) | Type II (hard) |
| --- | --- | --- |
| Critical fields | one, $H_c$ | two, $H_{c1}$ and $H_{c2}$ |
| Meissner effect | complete below $H_c$ | complete below $H_{c1}$, partial between $H_{c1}$ and $H_{c2}$ |
| Mixed (vortex) state | absent | present between $H_{c1}$ and $H_{c2}$ |
| Loss of magnetisation | abrupt, at $H_c$ | gradual, from $H_{c1}$ to $H_{c2}$ |
| Size of critical field | low | high |
| Typical materials | pure elements | alloys, compounds, some elements |
| Uses | limited (low fields) | high-field magnets, MRI, accelerators |
| Examples | Pb, Hg, Sn | Nb, MgB₂, YBCO |

> **Watch out.** In the Type II graph the magnetisation does not drop to zero at $H_{c1}$. It **starts to fall** there and reaches zero only at $H_{c2}$. Between the two fields the material still conducts without resistance.

---

<!-- page 23 | BCS theory -->

# BCS theory of superconductivity

## Background

**BCS theory**

BCS theory is the microscopic theory of superconductivity, developed in 1957 by John Bardeen, Leon Cooper, and Robert Schrieffer (hence BCS). It is based on quantum mechanics, and it won the three scientists the 1972 Nobel Prize in Physics "for their jointly developed theory of superconductivity". It explains how superconductivity arises at low temperatures and gives a framework for understanding superconductors.

## The problem it solves

In the normal state, a conduction electron is repelled by other electrons and attracted by the positive ion cores. These forces act in random directions, and they scatter the electron as it moves through the material. This scattering is the cause of resistance.

According to BCS theory, below the critical temperature the conduction electrons form pairs that attract each other, and these pairs move without scattering. The pairing is due to an electron–lattice–electron interaction.

## Formation of Cooper pairs

Normally two electrons, both being negatively charged, repel each other. At low temperatures they can attract each other through the lattice:

1. Suppose two electrons, 1 and 2, pass each other in the crystal lattice.
2. The negative charge of electron 1 attracts the positive ions of the lattice towards it, and slightly distorts the lattice.
3. The extra positive charge collected around electron 1 screens its negative charge.
4. Because of this screening, electron 2 is attracted towards the region around electron 1. The two electrons form a bound state.
5. In terms of lattice vibrations: electron 1's interaction with the lattice emits a phonon (a quantum of lattice vibration), and electron 2 absorbs that phonon. The exchange of the phonon produces an attractive force between the two electrons.

**Cooper pair**

A Cooper pair is a pair of electrons attracting each other through lattice interaction. Phonons act like the "glue" that holds the electrons together.

> **Key idea.** The attraction is strongest when the two electrons have **equal and opposite spins and opposite momenta**. So a Cooper pair has zero total spin and, when no current flows, zero total momentum.

## Why a Cooper pair has no resistance

- **Energy gap.** When electrons form Cooper pairs, an energy gap opens in the energy spectrum of the material. A certain minimum energy is needed to break a pair.
- **Only below $T_c$.** Pairs form only below the critical temperature, because only then are the thermal vibrations of the lattice too weak to break them. Below $T_c$ the thermal energy is not enough to cross the energy gap.
- **Coherent motion.** All the Cooper pairs in a superconductor are in the same quantum state. They show phase coherence and move together as a single entity.
- **No scattering.** Cooper pairs are not scattered by the lattice points. Any disturbance would have to give at least the gap energy to break a pair, and below $T_c$ that energy is not available. So no energy is transferred from the electron pairs to the lattice.
- **Zero resistance.** If a field is applied, the pairs gain extra kinetic energy and give rise to a current, but they do not pass this energy to the lattice, so they are not slowed down. As a result, the material has no electrical resistance.

## Evidence for the theory

- **Isotope effect.** The isotope effect ($T_c\propto M^{-1/2}$) shows that lattice vibrations, and hence phonons, are involved.
- **Flux quantisation.** Flux quantisation in units of $h/2e$ shows that the charge carriers have charge $2e$. So they are pairs.
- **Energy gap.** The energy gap predicted by the theory is seen in experiments.

## Limits of the theory

BCS theory explains conventional superconductors, the low-temperature metals and alloys in which phonons provide the pairing. It does not explain the high-temperature ceramic (cuprate) superconductors, whose mechanism is still being researched.

> **Note on the source.** One lecture set said that BCS "explains only Type I superconductivity". The more correct statement is that BCS describes conventional (phonon-mediated, low-$T_c$) superconductors, whether Type I or Type II, but not the high-$T_c$ ceramics.

> **Watch out.** Electrons repel each other directly. The attraction in a Cooper pair is **indirect**, and it comes through the lattice. Do not write that "electrons attract each other at low temperature" without explaining that the lattice is the go-between.

---

<!-- page 24 | Applications of superconductors -->

# Applications of superconductors

Zero resistance, persistent currents, high critical fields and the expulsion of magnetic fields give superconductors many uses.

1. **Magnetic Resonance Imaging (MRI).** Superconducting magnets produce the strong, stable magnetic fields needed in MRI machines. The high field strength gives better image resolution and clarity.
2. **Maglev trains.** Magnetic levitation trains use superconducting magnets. The coaches do not slide on steel rails but float on a cushion of air (about 10 cm) above the track. This removes friction and the loss of energy as heat, so the trains can reach speeds of about $500\ \text{km/h}$, and travel faster, more smoothly and more efficiently.
3. **Particle accelerators.** Superconducting magnets steer and focus particle beams at high energies, for example in the Large Hadron Collider (LHC).
4. **Quantum computing.** Superconducting qubits are used in quantum computers. Their superconducting circuits can exist in superpositions of states, which allows new kinds of computation.
5. **Power transmission.** Superconducting cables carry electricity without resistive losses. If a grid were made of superconducting wire, there would be no need to step up the voltage for transmission and step it down again, and the efficiency and reliability of the grid would improve greatly.
6. **Electrical machines.** Motors, generators and transformers can be made smaller, lighter and much more efficient, with no eddy-current loss, hysteresis loss or resistive loss in the windings.
7. **SQUIDs.** A **Superconducting QUantum Interference Device** is an extremely sensitive magnetometer. It can measure magnetic fields as weak as about $10^{-13}\ \text{T}$. SQUIDs are used:
   - by geologists, to measure rock magnetism and continental drift;
   - in medicine, to measure muscular and neural activity (for example, the magnetic fields of the heart and brain);
   - in non-destructive testing, for example to detect corrosion in aluminium sheets riveted together in aircraft.
8. **Energy storage (SMES).** Superconducting Magnetic Energy Storage systems store energy in the magnetic field of a current circulating in a superconducting coil. They respond very fast and are highly efficient, so they are used to stabilise electrical grids and provide backup power.
9. **Electronic switches.** Switching a superconductor between its normal and superconducting states (for example with a magnetic field) gives a fast switch, the **cryotron**.
10. **Telecommunications.** Superconducting components reduce noise and improve signal quality in communication systems, especially in radio-frequency and high-frequency circuits.

| Property used | Applications |
| --- | --- |
| Zero resistance | power cables, motors and generators, energy storage |
| Strong, stable field (high $H_c$) | MRI, particle accelerators, maglev |
| Meissner effect (levitation) | maglev trains |
| Flux quantisation and quantum coherence | SQUIDs, qubits |
| Switching between states | cryotron switches |

> **Watch out.** All these applications need cooling below $T_c$, which is their main practical cost. That is why high-temperature superconductors, which can be cooled with cheap liquid nitrogen, are so attractive.

---

<!-- page 25 | Practice and formula sheet -->

# Practice questions and formula sheet

## Superconductivity numerical problems

**1.** The transition temperature of lead is $7.2\ \text{K}$. At $5\ \text{K}$ it loses its superconductivity in a field of $3.3\times10^{4}\ \text{A/m}$. Find the maximum field at which lead stays superconducting at $0\ \text{K}$.

$$
H_c(0)=\frac{H_c(T)}{1-(T/T_c)^2}=\frac{3.3\times10^{4}}{1-(5/7.2)^2}=\frac{3.3\times10^{4}}{0.5177}=\mathbf{6.37\times10^{4}\ \text{A/m}}
$$

**2.** The critical field of niobium is $1\times10^{5}\ \text{A/m}$ at $8\ \text{K}$ and $2\times10^{5}\ \text{A/m}$ at $0\ \text{K}$. Find its transition temperature.

$$
1\times10^{5}=2\times10^{5}\left[1-\frac{64}{T_c^2}\right]\ \Longrightarrow\ \frac{64}{T_c^{2}}=\frac12\ \Longrightarrow\ T_c=8\sqrt2=\mathbf{11.3\ \text{K}}
$$

**3.** The transition temperature of lead is $7.26\ \text{K}$ and its maximum critical field is $8\times10^{5}\ \text{A/m}$. It is to be used in a field of $4\times10^{4}\ \text{A/m}$. What precaution is needed?

$$
4\times10^{4}=8\times10^{5}\left[1-\frac{T^2}{7.26^2}\right]\ \Longrightarrow\ \frac{T^2}{7.26^2}=0.95\ \Longrightarrow\ T=7.26\sqrt{0.95}=7.08\ \text{K}
$$

The lead must be kept **below $7.08\ \text{K}$**. Above that, the field of $4\times10^{4}\ \text{A/m}$ destroys its superconductivity.

**4.** For a superconducting isotope of mass $199.5\ \text{amu}$ the critical temperature is $5\ \text{K}$. Find the isotopic mass for which it is $5.1\ \text{K}$.

$$
M_2=M_1\left(\frac{T_{c1}}{T_{c2}}\right)^2=199.5\times\left(\frac{5}{5.1}\right)^2=\mathbf{191.7\ \text{amu}}
$$

> **Note on the source.** The lecture sheet gave $191.68\ \text{amu}$. When the ratio is calculated exactly, we get $191.75\ \text{amu}$. The difference is due to rounding in the source.

## Quick practice (answers at the end)

5. A metal has $n=6\times10^{28}\ \text{m}^{-3}$ and $\tau=3\times10^{-14}\ \text{s}$. Find $\sigma$ and $\mu$.
6. Find $f(E)$ for a state $0.05\ \text{eV}$ above $E_F$ at $300\ \text{K}$.
7. Find the critical field of mercury ($T_c=4.2\ \text{K}$, $H_c(0)=3.3\times10^{4}\ \text{A/m}$) at $2\ \text{K}$.
8. What is the magnetic susceptibility of a superconductor in the Meissner state, and what is $B$ inside it?

*Answers.* (5) $\sigma=\dfrac{ne^2\tau}{m}=5.06\times10^{7}\ \text{S/m}$, $\ \mu=\dfrac{e\tau}{m}=5.27\times10^{-3}\ \text{m}^2/\text{V s}$. (6) $\dfrac{0.05}{0.02585}=1.93$, so $f=\dfrac{1}{1+e^{1.93}}=0.126$. (7) $H_c=3.3\times10^{4}\left[1-(2/4.2)^2\right]=2.55\times10^{4}\ \text{A/m}$. (8) $\chi=-1$ and $B=0$.

## Exam-style questions to revise

1. Define drift velocity, relaxation time, mean free path and mobility. Give their units.
2. List the assumptions of the classical free electron theory.
3. Derive an expression for the electrical conductivity of a metal on the basis of the classical free electron theory. Define mobility and relate it to conductivity.
4. What are the factors affecting the conductivity of metals?
5. Give the drawbacks of the classical free electron theory. How does the quantum free electron theory overcome them?
6. State the Fermi–Dirac distribution function. Discuss its variation with temperature, with graphs.
7. Define Fermi energy. Show that the probability of occupancy of the Fermi level is $\tfrac12$ at any temperature above $0\ \text{K}$.
8. Explain the formation of energy bands in solids. Classify materials into conductors, semiconductors and insulators on the basis of band theory.
9. What is superconductivity? Define transition temperature and critical field. How does the critical field vary with temperature?
10. Explain the Meissner effect and show that a superconductor is a perfect diamagnet.
11. Distinguish between Type I and Type II superconductors, with magnetisation curves.
12. Explain the BCS theory of superconductivity. What is a Cooper pair?
13. What are persistent currents and flux quantisation?
14. Describe the applications of superconductors.

---

## Formula sheet

### Conductivity

| | |
| --- | --- |
| Resistivity | $R=\rho\dfrac lA$, $\ \sigma=\dfrac1\rho$ |
| Point form of Ohm's law | $J=\sigma E$ |
| Drift velocity | $v_d=\dfrac{eE\tau}{m}$ (in magnitude) |
| Current density | $J=nev_d$, $\ I=neAv_d$ |
| Conductivity | $\sigma=\dfrac{ne^2\tau}{m}=ne\mu$ |
| Mobility | $\mu=\dfrac{v_d}{E}=\dfrac{e\tau}{m}$ |
| Mean free path | $\lambda=v\tau$ |
| Electron density | $n=\dfrac{\rho N_A}{M}$ (one free electron per atom) |
| Wiedemann–Franz | $\dfrac{\kappa}{\sigma}=LT$, $\ L=\dfrac{\pi^2}{3}\left(\dfrac ke\right)^2=2.44\times10^{-8}\ \text{W}\,\Omega\,\text{K}^{-2}$ |

### Fermi–Dirac and bands

| | |
| --- | --- |
| Distribution | $f(E)=\dfrac{1}{1+e^{(E-E_F)/kT}}$ |
| At $0\ \text{K}$ | $f=1$ for $E<E_F$, $\ f=0$ for $E>E_F$ |
| At $T>0$ | $f(E_F)=\tfrac12$ |
| Symmetry | $f(E_F+\Delta E)+f(E_F-\Delta E)=1$ |
| High energy limit | $f\approx e^{-(E-E_F)/kT}$ |
| Fermi energy | $E_F=\dfrac{\hbar^2}{2m}(3\pi^2n)^{2/3}$ |
| Fermi speed | $v_F=\sqrt{2E_F/m}$ |
| Band gap | $E_g=E_c-E_v$ |
| Constants | $k=1.38\times10^{-23}\ \text{J/K}=8.617\times10^{-5}\ \text{eV/K}$ |

### Superconductivity

| | |
| --- | --- |
| Critical field | $H_c(T)=H_c(0)\left[1-(T/T_c)^2\right]$ |
| Field relation | $B=\mu_0(H+M)$, $\ \chi=M/H$, $\ \mu=B/H$ |
| Meissner state | $B=0\Rightarrow M=-H\Rightarrow\chi=-1$ |
| Flux quantum | $\Phi_0=\dfrac{h}{2e}=2.07\times10^{-15}\ \text{Wb}$, $\ \Phi=n\Phi_0$ |
| Isotope effect | $T_c\propto M^{-1/2}$ |
