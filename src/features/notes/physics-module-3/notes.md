<!-- page 1 | Notes -->

[Non-content page]

---

<!-- page 2 | 1 Intrinsic semiconductors -->

Semiconductor physics

*KTU Syllabus*- Intrinsic semiconductor, Derivation of density of electrons in conduction band and density of holes in valence band, Intrinsic carrier concentration, Variation of Intrinsic carrier concentration with temperature, Extrinsic semiconductor (qualitative)

Formation of p-n junction, Fermi level in semiconductors-intrinsic and extrinsic, Energy band diagram of p-n junction - Qualitative description of charge flow across a p-n junction - Forward and reverse biased p-n junctions, Diode equation (Derivation), I-V Characteristics of p-n junction

## 1 Intrinsic semiconductors

Intrinsic semiconductors are pure semiconductors without any significant impurities. e.g. silicon (Si) and germanium (Ge)

### 1.1 Formation of 'holes' in valence band of a semiconductor

In an intrinsic semiconductor at $0 K$, all electrons in the valence band are bound to atoms. When temperature rises, electrons absorb thermal energy and some electrons gain enough energy to break the covalent bonding. These electrons, then move about, almost freely in the interstitial space of the atoms, and is called a conduction electron. We say that an electron has jumped from the valence band to the conduction band.

![Crystal lattice of Germanium at T > 0 K showing a broken covalent bond, free electron, and vacancy, alongside an energy band diagram with conduction band (E_C), valence band (E_V), and Fermi level (E_F)](/notes/cse/s1/physics/module-3/germanium-lattice-bands.webp)

---

<!-- page 3 | 1.2 Properties of intrinsic semiconductors -->

When an electron leaves the valence band, it leaves behind an empty state called a hole. This hole behaves like a positive charge carrier because it represents a missing negatively charged electron.

Other electrons in the valence band can move to this spot and fill the gap-the absence of an electron. Thus effectively, the hole appears to move through the crystal lattice, opposite to the direction of motion of the electron.

1.2 Properties of intrinsic semiconductors

* **Pure Form:** Made of a single type of semiconductor material (e.g., silicon or germanium) without intentional impurities.
* **Equal Electron-Hole Pairs:** At thermal equilibrium, the number of free electrons is equal to the number of holes.
* **Conductivity:** Poor at room temperature.
* **Band Gap:** Has a small energy gap (e.g., Silicon = $1.12\text{ eV}$, Germanium = $0.66\text{ eV}$) between the valence and conduction bands.
* **Temperature Dependence:** As temperature rises, more electron-hole pairs are generated, increasing conductivity.

2 Some features of the energy bands in semiconductors

2.1 Effective mass of electrons and holes

The acceleration produced by an external force $F$, on a body of mass $m$ is given by, $a = \frac{F}{m}$. If the particle is already under the action of another force, then this equation does not give correct value of acceleration. Then, either we will have to modify the value of force, or we have to assume that the external force is acting on a modified value of mass.

In the case of a semiconductors, the electrons are moving under the action of a potential of positive ions in the lattice which varies periodically with position. Hence, they are under the action of varying forces. To describe the effect of external electric fields on the motion of these electrons, we make use of a modified value of mass called effective mass ($m^*$).

The value of effective mass of electrons in conduction band can be equal to or greater than the free electron mass. In the valence band, effective mass of electrons become negative. A negative value of effective mass means that, the particle accelerates opposite to the direction of the applied external force. To avoid this type of description, we talk in terms of the motion of holes which have positive effective mass in valence band.

---

<!-- page 4 | 3.1 Density of electrons in conduction band -->

2.2 Number of energy states per unit energy range - Density of energy states

According to band theory, the energy levels in a solid are arranged in various bands with energy gaps in between. The number of energy levels in all the bands is not the same. It depends on the energy itself. It can be shown that the number of energy levels or energy states per unit volume in a small energy range $dE$ around an energy $E$, is given by

$$
Z(E)dE = \frac{4\pi}{h^3}(2m^*)^{\frac{3}{2}}E^{\frac{1}{2}}dE \qquad (1)
$$

where $m^*$ is the effective mass of the charge carriers

3 Density of electrons in the conduction band and density of holes in valence band of intrinsic semiconductor

We know that electrons are the current carriers in the conduction band and holes are the current carriers in the valence band. We can calculate the total number of current carriers per unit volume-also known as density of current carriers-in both these bands.

3.1 Density of electrons in conduction band

To calculate to density of electrons in the conduction band, we multiply the number of energy states per unit volume in a small energy range $dE$ around energy $E$, in the conduction band, with the probability of occupation f(E), of that particular energy level. We then integrate this quantity over the entire energy range of the conduction band.

![Energy band diagram showing conduction band, valence band, Fermi level, and electron-hole pairs](/notes/cse/s1/physics/module-3/intrinsic-bands.webp)


Let $dn$ be the number of electrons per unit volume with energy in the range $E$ to $E+dE$ in the conduction band. Then,

$$
dn = Z(E)dE.F(E) \qquad (2)
$$

---

<!-- page 5 | 3.1 Density of electrons in conduction band (cont.) -->

where $Z(E)$ is the energy states per unit volume and $F(E)$ is the Fermi distribution function which gives the probability of occupancy of electrons in the energy level $E$.
From eq.(1),
$$
Z(E)dE = \frac{4\pi}{h^3}(2m_e^*)^{\frac{3}{2}} E^{\frac{1}{2}} dE
$$
where $m_e^*$ is the effective mass of electrons. $E_c$ is the energy of the bottom of the conduction band. Since we are dealing with electrons in the conduction band only, $E_c$ is taken as a reference level. Hence we take, $E = E - E_c$. Therefore
$$
Z(E)dE = \frac{4\pi}{h^3}(2m_e^*)^{\frac{3}{2}}(E - E_c)^{\frac{1}{2}}dE \quad \text{(3)}
$$

Fermi Dirac distribution function
$$
F(E) = \frac{1}{1 + e^{\frac{(E - E_F)}{kT}}}
$$

$(E - E_F) >> kT$ for all T. Therefore, $\frac{(E - E_F)}{kT} >> 1$. Neglecting $1$ in the denominator
$$
F(E) \approx \frac{1}{e^{\frac{(E - E_F)}{kT}}} = \left[e^{\frac{(E - E_F)}{kT}}\right]^{-1} = e^{\frac{(E_F - E)}{kT}} \quad \text{(4)}
$$

Substituting eq.(3) and eq.(4) in eq.(2),
$$
dn = \frac{4\pi}{h^3}(2m_e^*)^{\frac{3}{2}}(E - E_c)^{\frac{1}{2}}dE \cdot e^{\frac{(E_F - E)}{kT}}
$$

Therefore, the total number of electrons in the conduction band per unit volume can be obtained by integrating the above expression between the limits $E = E_c$-the lowest energy of electrons in the conduction band and $E = \infty$-the maximum energy that electrons can take.

$$
n = \int dn = \int_{E_c}^{\infty} \frac{4\pi}{h^3}(2m_e^*)^{\frac{3}{2}}(E - E_c)^{\frac{1}{2}}dE \cdot e^{\frac{(E_F - E)}{kT}}
$$
$$
n = \frac{4\pi}{h^3}(2m_e^*)^{\frac{3}{2}} \int_{E_c}^{\infty} (E - E_c)^{\frac{1}{2}}e^{\frac{(E_F - E)}{kT}} dE
$$
$$
= \frac{4\pi}{h^3}(2m_e^*)^{\frac{3}{2}} e^{\frac{E_F}{kT}} \int_{E_c}^{\infty} (E - E_c)^{\frac{1}{2}} e^{\frac{-E}{kT}} dE
$$

To evaluate the integral we change the variable as follows.
Let $E - E_c = x \Rightarrow E = x + E_c$; then $dE = dx$
When $E = E_c$; $x = 0$. When $E = \infty$; $x = \infty$

Making these changes, the above equation for $n$ becomes
$$
n = \frac{4\pi}{h^3}(2m_e^*)^{\frac{3}{2}} e^{\frac{E_F}{kT}} \int_{0}^{\infty} x^{\frac{1}{2}} e^{\frac{-(x + E_c)}{kT}} dx
$$

---

<!-- page 6 | 3.2 Density of holes in valence band -->

$$
= \frac{4\pi}{h^{3}}(2m_{e}^{*})^{\frac{3}{2}}e^{\frac{E_{F}-E_{c}}{kT}}\int_{0}^{\infty}x^{\frac{1}{2}}e^{-x}dx
$$

We make use of the following standard integral here. 
$$
\int_{0}^{\infty}x^{\frac{1}{2}}e^{-ax}dx = \frac{\sqrt{\pi}}{2a\sqrt{a}}
$$

Then 
$$
n = \frac{4\pi}{h^{3}}(2m_{e}^{*})^{\frac{3}{2}}e^{\frac{E_{F}-E_{c}}{kT}}\frac{kT\sqrt{\pi kT}}{2}
$$
$$
= \frac{4\pi}{h^{3}}(2m_{e}^{*})^{\frac{3}{2}}e^{\frac{E_{F}-E_{c}}{kT}}\frac{(kT)^{\frac{3}{2}}(\pi)^{\frac{1}{2}}}{2}
$$
$$
n = 2\left(\frac{2\pi m_{e}^{*}kT}{h^{2}}\right)^{\frac{3}{2}}e^{\frac{E_{F}-E_{c}}{kT}} \quad \text{(5)}
$$

3.2 Density of holes in valence band 

To calculate to density of holes in the valence band, we multiply the number of energy states per unit volume in a small energy range $dE$ around energy $E$, in the valence band, with the probability of occupation of holes at that particular energy level. We then integrate this quantity over the entire energy range of the valence band. 

Let $dp$ be the number of holes per unit volume with energy in the range $E$ to $E + dE$ in the valence band. Then, 
$$
dp = Z(E)dE \cdot F_{h}(E) \quad \text{(6)}
$$
where $Z(E)$ is the energy states per unit volume and $F_{h}(E)$ is the probability of occupancy of holes in the energy level $E$. 

From the discussion on density of states in a band we have 
$$
Z(E)dE = \frac{4\pi}{h^{3}}(2m_{h}^{*})^{\frac{3}{2}}E^{\frac{1}{2}}dE
$$
where $m_{h}^{*}$ is the effective mass of holes. If $E_{v}$ is the energy corresponding to the top of the valence band, energy of the holes can only be less than or equal to $E_{v}$. Hence $E$ in the above expression can be replaced by $E_{v} - E$. ($E_{v}$ serves as a reference upper limit for valence band just as $E_{c}$ serves as a reference lower limit for conduction band). Then the expression for density of states in the valence band can be rewritten as 
$$
Z(E)dE = \frac{4\pi}{h^{3}}(2m_{h}^{*})^{\frac{3}{2}}(E_{v} - E)^{\frac{1}{2}}dE \quad \text{(7)}
$$

Since *presence of a hole at a particular energy level $E$ represents the absence of an electron* at that level in the valence band, $F_{h}(E)$ is related to the Fermi

---

<!-- page 7 | 3.2 Density of holes in valence band (cont.) -->

Dirac distribution function as follows

$$
F_h(E) = 1 - F(E)
$$

$$
= 1 - \frac{1}{1 + e^{\frac{(E - E_F)}{kT}}} = \frac{1 + e^{\frac{(E - E_F)}{kT}} - 1}{1 + e^{\frac{(E - E_F)}{kT}}} = \frac{e^{\frac{(E - E_F)}{kT}}}{1 + e^{\frac{(E - E_F)}{kT}}}
$$

The energies in the valence band are less than $E_F$. Hence $E - E_F$ is -ve. Thus $e^{\frac{(E - E_F)}{kT}}$ is very small compared to $1$. Therefore

$$
F_h(E) \approx e^{\frac{(E - E_F)}{kT}} \qquad (8)
$$

Substituting equations (7) and (8) in equation (6), we get

$$
dp = \frac{4\pi}{h^3}(2m_h^*)^{\frac{3}{2}}(E_v - E)^{\frac{1}{2}} e^{\frac{(E - E_F)}{kT}} dE
$$

Therefore, the total number of holes in the valence band per unit volume can be obtained by integrating the above expression between the limits $E = -\infty$ - the lowest energy of holes in the valence band and $E = E_v$ - the maximum energy that holes can have.

$$
p = \int dp = \int_{-\infty}^{E_v} \frac{4\pi}{h^3}(2m_h^*)^{\frac{3}{2}}(E_v - E)^{\frac{1}{2}} e^{\frac{(E - E_F)}{kT}} dE
$$

$$
= \frac{4\pi}{h^3}(2m_h^*)^{\frac{3}{2}} e^{\frac{-E_F}{kT}} \int_{-\infty}^{E_v} (E_v - E)^{\frac{1}{2}} e^{\frac{E}{kT}} dE
$$

To evaluate the integral we change the variable as follows.

Let $\frac{E_v - E}{kT} = x \Rightarrow \frac{E}{kT} = \frac{E_v}{kT} - x$; then $dE = -kT dx$

When $E = E_v$; $x = 0$. When $E = -\infty$; $x = \infty$

Making these changes, the above equation for p becomes

$$
p = \frac{4\pi}{h^3}(2m_h^*)^{\frac{3}{2}} e^{\frac{-E_F}{kT}} \int_{\infty}^{0} (kT x)^{\frac{1}{2}} e^{(\frac{E_v}{kT} - x)} (-kT dx)
$$

$$
= \frac{4\pi}{h^3}(2m_h^* kT)^{\frac{3}{2}} e^{\frac{E_v - E_F}{kT}} \int_{0}^{\infty} (x)^{\frac{1}{2}} e^{-x} dx
$$

We make use of the following standard integral here.

$$
\int_{0}^{\infty} x^{\frac{1}{2}} e^{-ax} dx = \frac{\sqrt{\pi}}{2a}
$$

Then

$$
p = \frac{4\pi}{h^3}(2m_h^* kT)^{\frac{3}{2}} e^{\frac{E_v - E_F}{kT}} \frac{\sqrt{\pi}}{2}
$$

or

$$
p = 2 \left(\frac{2\pi m_h^* kT}{h^2}\right)^{\frac{3}{2}} e^{\frac{E_v - E_F}{kT}} \qquad (9)
$$

---

<!-- page 8 | 4 Intrinsic carrier concentration -->

4 Intrinsic carrier concentration

A single event of bond breaking in a pure semiconductor leads to generation of an *electron-hole* pair. at any temperature T, the number of electrons generated will be equal to the number of holes generated. As the two charge densities are equal, they are denoted by a common symbol $n_i$ and is called intrinsic carrier density or intrinsic carrier concentration. Thus
$$
n = p = n_i
$$

we can write
$$
n_i^2 = np
$$

Substituting for $n$ and $p$ from previous sections
$$
n_i^2 = 2 \left(\frac{2\pi m_e^* kT}{h^2}\right)^{\frac{3}{2}} e^{\frac{E_F-E_c}{kT}} \times 2 \left(\frac{2\pi m_h^* kT}{h^2}\right)^{\frac{3}{2}} e^{\frac{E_v-E_F}{kT}}
$$

$$
n_i^2 = 4 \left(\frac{2\pi kT}{h^2}\right)^3 (m_e^* m_h^*)^{\frac{3}{2}} e^{\frac{-(E_c - E_v)}{kT}}
$$

Here $E_c - E_v$, is the band gap energy $E_g$. then
$$
n_i^2 = 4 \left(\frac{2\pi kT}{h^2}\right)^3 (m_e^* m_h^*)^{\frac{3}{2}} e^{\frac{-E_g}{kT}} \quad (10)
$$

This equation means that the product of electron and hole densities, is a constant at a given temperature for a given semiconductor. This statement is called **law of mass action**. It is valid for intrinsic as well as extrinsic semiconductors. Intrinsic carrier concentration is given by
$$
n_i = 2 \left(\frac{2\pi kT}{h^2}\right)^{\frac{3}{2}} (m_e^* m_h^*)^{\frac{3}{4}} e^{\frac{-E_g}{2kT}} \quad (11)
$$

4.1 Variation of intrinsic carrier concentration

We have,
$$
n_i = 2 \left(\frac{2\pi kT}{h^2}\right)^{\frac{3}{2}} (m_e^* m_h^*)^{\frac{3}{4}} e^{\frac{-E_g}{2kT}}
$$

* intrinsic carrier concentration $n_i$ is independent of Fermi level
* $n_i$ decreases as band gap $E_g$ increases
* $n_i$ increases with temperature
* The factor 2 in the exponent indicates that two charge carriers are produced for one covalent bond broken.

The value of $n_i$ for silicon at room temperature is $1.5 \times 10^{16}/\text{m}^3$ and in germanium is $2.5 \times 10^{19}/\text{m}^3$

---

<!-- page 9 | 5 Limitations of Intrinsic Semiconductors -->

5 Limitations of Intrinsic Semiconductors

* Low electrical conductivity at room temperature.
* Current is more temperature dependent than voltage dependent
* Not very useful in electronic devices, unless modified.

6 Extrinsic semiconductors

Adding a controlled amount of impurity into an intrinsic semiconductor is known as doping. The impurity which is introduced is known as a dopant. A semiconductor doped with impurity atoms is called an extrinsic semiconductor.

Pentavalent elements from group V or trivalent elements from group III are used as dopants. The atoms belonging to these two groups are nearly of the same size as silicon and germanium atoms and easily substitute themselves in place of some of the host atoms without causing major distortion in the original semiconductor crystal structure. Depending on the two types of doping, two types of extrinsic semiconductors are possible. They are N type and P type.

Conductivity of extrinsic semiconductors is generally higher than that of intrinsic semiconductors. It can be adjusted to the desired value by controlling the doping concentration. Conductivity is less influenced by temperature.

6.1 n-type semiconductor

An n-type semiconductor is produced, when a pure semiconductor is doped with a pentavalent impurity such as phosphorous, arsenic or antimony. A pentavalent atom has 5 valence electrons. Out of these, four participate in bonding with four silicon atoms, while the fifth electron remains loosely bound. The ionization energy of the fifth electron is very small of the order of $0.01\text{ eV}$. As temperature increases, thermal energy can easily liberate this electron from the attraction of the nucleus. At normal temperatures, the fifth electron becomes free to move about in the crystal and act as a charge carrier - the electron moves into the conduction band. It leaves behind a positive pentavalent ion (like phosphorous) in the crystal lattice. As the pentavalent impurity atom is donating an electron for electrical conduction it is called **donor atom**.

The donor atoms cannot interact with each other and their energy levels are discrete (represented by $E_D$). This level is just below the conduction band. At $0\text{ K}$, the donor atoms are not ionized. Conduction band is empty, while valence band is full. The material behaves as an insulator.

At slightly high temperatures, the donor atoms are ionized and the donor electrons go into the conduction band. In this process holes are not produced in the valence band. At about $100\text{ K}$, all donor atoms are ionized. Further increase

---

<!-- page 10 | 5 Limitations of Intrinsic Semiconductors (cont.) -->

in temperature does not produce electrons. At high enough temperatures, the intrinsic behaviour takes over, large number of electrons from the valence band get thermally excited to conduction band producing holes in valence band. Their number far exceeds the number of donor electrons.

Since electrons in conduction band out number the holes in valence band, electrons are the majority carriers and holes are the minority carriers. Hence, the material is called n-type semiconductor.

![Energy band diagram for an n-type semiconductor showing conduction band (C.B.), valence band (V.B.), donor energy level, and electrons and holes](/notes/cse/s1/physics/module-3/n-type-bands.webp)


6.2 p-type semiconductor

An p-type semiconductor is produced when **a pure semiconductor is doped with a trivalent impurity** such as boron, galium or indium. A trivalent atom has 3 valence electrons. Therefore, it falls short of one electron for completing 4 covalent bonds with its neighbours. When an electron from a neighbouring atom acquires energy and jumps into the vacancy to form the 4th bond, it leaves behind a hole. The trivalent atom having acquired an additional electron becomes a negative ion. The hole can move freely in the valence band whereas the impurity ion is fixed in position by the covalent bonds. As the trivalent atom accepted an electron from the valence band, it is called an **acceptor atom**. These acceptor impurity atoms produce holes, without the simultaneous generation of electrons in the conduction band.

The acceptor atoms cannot interact with each other and their energy levels are discrete (represented by $E_A$). They are located just above the top of the valence band.

At 0K, acceptor levels are vacant and the valence band is full. The conduction band is also empty. The material behaves as an insulator. At slightly high temperatures, a small amount of thermal energy of the order of $0.01\text{eV}$ can make an electron in the valance band jump to the acceptor level and form a covalent bond. This produces a hole in the valence band without the simultaneous generation of electrons in the conduction band. At normal temperatures, the

---

<!-- page 11 | 7 Fermi level in semiconductors -->

acceptor levels are saturated and a few electrons are excited to the conduction band also. At high enough temperatures, a large number of electron-hole pairs are generated and the number of holes generated thermally far exceeds the number of holes due to acceptor impurity.

Since holes in valence band out number the electrons in conduction band, holes are the majority carriers and electrons are the minority carriers. Hence, the material is called p-type semiconductor.

![Energy band diagram of a p-type semiconductor showing acceptor energy level](/notes/cse/s1/physics/module-3/p-type-bands.webp)


## 7 Fermi level in semiconductors

### 7.1 Intrinsic semiconductors

In an intrinsic semiconductor, at a particular temperature, the number of electrons in the conduction band equals the number of holes in the valence band. i.e.; $n = p$

Substituting for $n$ and $p$

$$
2 \left(\frac{2\pi m_e^* k T}{h^2}\right)^{\frac{3}{2}} e^{\frac{E_F - E_C}{kT}} = 2 \left(\frac{2\pi m_h^* k T}{h^2}\right)^{\frac{3}{2}} e^{\frac{E_v - E_F}{kT}}
$$

$$
\Rightarrow \left(\frac{m_e^*}{m_h^*}\right)^{\frac{3}{2}} = e^{\frac{E_v - E_F}{kT}} \times e^{\frac{-E_F + E_C}{kT}} = e^{\frac{E_v + E_C}{kT}} \times e^{\frac{-2E_F}{kT}}
$$

$$
\Rightarrow e^{\frac{2E_F}{kT}} = \left(\frac{m_h^*}{m_e^*}\right)^{\frac{3}{2}} e^{\frac{E_v + E_C}{kT}}
$$

Taking $\log$ on both sides to solve for $E_F$

$$
\frac{2E_F}{kT} = \frac{3}{2} \log \left(\frac{m_h^*}{m_e^*}\right) + \frac{E_v + E_C}{kT}
$$

10

---

<!-- page 12 | 7 Fermi level in semiconductors (cont.) -->

$$
E_F = \frac{3kT}{4} \log \left(\frac{m_h^*}{m_e^*}\right) + \frac{E_v + E_C}{2}
$$

This is the equation of Fermi level in an intrinsic semiconductor.

At $T = 0K$,

$$
E_F = \frac{E_v + E_C}{2}
$$

i.e., at $0K$, Fermi level in intrinsic semiconductor is midway between bottom of conduction band and top of valence band or it is at the centre of the band gap ($\frac{E_g}{2}$)

7.2 n-type semiconductor

In an n type semiconductor, the pentavalent impurity atoms donate electrons to the semiconductor atoms. These electrons are situated in an energy level called donor energy level ($E_D$). This level will be just below the bottom of the conduction band ($E_c$).

At $T = 0K$, Fermi level is at the middle of ($E_c$) and ($E_D$). i.e.,

$$
E_{Fn} = \frac{E_c + E_D}{2}
$$

At low temperatures, the electrons in the conduction band are from the donor level. Hence the Fermi level comes down towards the donor level. At a particular temperature called the depletion temperature($T_d$), the donor level becomes empty because all the electrons in the donor level would have moved to the conduction band. Then the Fermi level coincides with the donor level.

At $T = T_d$, $E_{Fn} = E_D$

If the temperature is increased further, the Fermi level will shift downwards in a linear manner and will coincide with the Fermi level of the intrinsic semiconductor $E_{Fi}$. The temperature at which this happens is called intrinsic temperature $T_i$.

At $T \geq T_i$, $E_{Fn} = E_{Fi}$

7.3 p-type semiconductor

In p-type semiconductor, the trivalent impurity atoms accept electrons from the valence band of the semiconductor, creating holes there. The electronic energy levels of these impurity atoms is just above the top of the valence band. It is called the acceptor energy level $E_A$.

At $T = 0K$, Fermi level is at the middle of ($E_v$) and ($E_A$). i.e.,

$$
E_{Fp} = \frac{E_v + E_A}{2}
$$

---

<!-- page 13 | 8 p-n junction or p-n junction diode -->

At low temperatures, the holes in the valence band are only due to the acceptor atoms. Hence, the Fermi level shifts upwards towards the acceptor level. At a particular temperature called the saturation temperature($T_s$), the acceptor level becomes full because all the holes in that level are filled with electrons. Then the Fermi level coincides with the acceptor level.

At $T = T_s, E_{Fp} = E_A$

If the temperature is increased further, the Fermi level will shift further upwards in a linear manner and will coincide with the Fermi level of the intrinsic semiconductor $E_{Fi}$. The temperature at which this happens is called intrinsic temperature $T_i$.

At $T \geq T_i, E_{Fp} = E_{Fi}$

![Fermi level variation with temperature in n-type and p-type semiconductors](/notes/cse/s1/physics/module-3/fermi-level-vs-temperature.webp)


## 8 p-n junction or p-n junction diode

A p-type or n-type crystal when used separately conducts current just like any poor conductor. There is no significant use for them as such. Most of the semiconductor devices in use today are combinations of the two types of extrinsic semiconductors. The simplest semiconductor device is a combination of one p-type and one n-type crystal called the p-n junction or p-n junction diode. Special manufacturing techniques are employed to produce such junctions.

### 8.1 Formation of p-n junction

In a p-type semiconductor, there are large number of holes compared to conduction electrons whereas in n-type semiconductor, there are large number of conduction electrons compared to holes. When the two types of materials are fused together, electrons diffuse from n-region to p-region and holes diffuse from p-region to n-region, because of concentration gradient. During this cross over conduction electrons recombine with holes and become valence electrons which are bound to the atoms. Thus, recombination leads to the disappearance of mobile charge carriers. Therefore, near the p-n junction, a small region devoid of moving charge carriers is formed. This region is known as **depletion region**. The width of this region is about $1\mu\text{m}$. Its width depends on doping concentration. Thus the depletion region acts as an insulator.

---

<!-- page 14 | 8.2 Drift of minority carriers -->

When holes move to the n-region, the acceptor atoms in the p-region become -vely charged acceptor ions and remain in the p-region. Similarly, when electrons move to the p-region, the donor atoms in the n-region become +vely charged donor ions and remain in the n-region. These ions are in the depletion region and hence depletion region is also called **space charge region**.

The double layer of charges in the depletion region produces an electric field which is directed from the donor ions on the n-side to the acceptor ions on the p-side. This electric field is in a direction that opposes the diffusion of majority carriers into opposite sides. The potential difference across the depletion region due to this electric field is called **barrier potential** or junction potential. The barrier potential for silicon is 0.7V and for germanium is 0.3V.

![Diagram of a p-n junction showing negative acceptor ions, positive donor ions, depletion layer, free electrons, holes, and a barrier potential graph](/notes/cse/s1/physics/module-3/pn-junction-depletion.webp)


## 8.2 Drift of minority carriers

In addition to the majority carriers (electrons in n-region and holes in p-region), there are a few number of minority carriers also (holes in n-region and electrons in p-region). The electric field formed in the depletion region, in fact, helps these minority carriers to cross over the junction. The **current due to these minority carriers is known as drift current**. As the number of minority carriers is small, the current due to minority carriers is small. It reaches a saturation value if the barrier potential is large. At equilibrium, the diffusion current of majority carriers and drift current of minority carriers become equal.

## 8.3 Modification of energy band structure on junction formation

Before a p-n junction is formed, the valence and conduction bands in the n-region have lower energy than those in the p-region, even though there is some overlapping. Due to the passage of high energy electrons from n to p region, the energy of the n-region conduction band decreases. The crossing of electrons continues until top of the conduction band of n-region aligns with the bottom

13

---

<!-- page 15 | 8.4 Fermi level and junction formation -->

of the conduction band of p-region. At this point the formation of the depletion region is complete and p-n junction is at equilibrium.

![Energy band diagram of a p-n junction at equilibrium](/notes/cse/s1/physics/module-3/pn-junction-bands.webp)


There is an energy gradient across the depletion region which acts as an "energy hill" that an n-region electron must climb to get to the p region. It is equal to $eV_0$ where $V_0$ is the barrier potential and $e$ is the electronic charge. As the energy level of the n-region conduction band has shifted downward, the energy level of the valence band has also shifted downward. It still takes the same amount of energy for a valence electron to become a free electron. In other words, the energy gap between the valence band and the conduction band remains the same.

8.4 Fermi level and junction formation

Before the formation of p-n junction, Fermi level of n-region is just below the bottom of the conduction band and that of the p-region is just above the top of the valence band. Fermi level is something like a potential so that it must be the same in a system in thermal equilibrium. Electrons will flow from the material with a higher Fermi level to one with a lower Fermi level until they attain a common Fermi level. (Just like water flow or heat flow). The band edges in the two samples will shift themselves to make this alignment possible.

![Fermi level alignment and band shifts in a p-n junction](/notes/cse/s1/physics/module-3/pn-junction-currents.webp)

---

<!-- page 16 | 8.5 Application of voltage across a p-n junction- biasing -->

8.5 Application of voltage across a p-n junction- biasing

Forward bias

![Forward biased p-n junction diagrams and circuit symbols](/notes/cse/s1/physics/module-3/forward-bias.webp)


The p-n junction is forward-biased when the p-type is connected to the positive terminal of the battery and the n-type is connected to the negative terminal. In this condition, the applied electric field and the built-in electric field at the p-n junction are in opposing directions.

Adding both the electric fields gives a resultant electric field, which is smaller than the built-in electric field. As a result, the depletion area becomes thinner and less resistant. Height of the potential barrier decreases. At about $0.3\text{V}$ for Ge and $0.7\text{V}$ for Si, the resistance of the depletion zone becomes absolutely insignificant and the majority carriers get enough energy to overcome the reduced potential barrier. Whenever a free electron crosses the junction and combines with a hole it becomes a valence electron.

To compensate this loss of free electron, another electron is injected into the n-region from the -ve terminal of the cell. At the same time, a bond is broken in the p-region by the attraction of the +ve terminal of the cell. The electron enters the external circuit while the hole remains in p-region.

### Reverse bias

![Reverse biased p-n junction diagrams and circuit symbols](/notes/cse/s1/physics/module-3/reverse-bias.webp)


The p-n junction is reverse biased, when the p-type is connected to the negative terminal of the battery and the n-type is connected to the positive side. In this condition, the applied electric field and the built-in electric field are both in the same direction. The resultant electric field and the built-in electric field are also in the same direction, resulting in a more resistive, thicker depletion area.

---

<!-- page 17 | 9 Diode equation -->

Height of the potential barrier increases. The flow of majority carriers across the junction becomes more difficult.

Due to flow of minority carriers, a small reverse current exists, which becomes saturated as voltage increases. Large increase in reverse voltage causes breakdown of the junction.

## 9 Diode equation

The relation between, the current flowing across a p-n junction diode and the external voltage applied across it, is called diode equation. We know that total current in a diode is the sum of electron current $I_e$ and hole current $I_h$.

$$
I = I_e + I_h
$$

When p-n junction is being formed, electrons from the n-region (majority carriers) diffuse to the p-region. But the barrier potential attracts the electrons from the p-side (minority carriers) and they drift towards the n-side. At equilibrium, the currents due to diffusion and drift of electrons are equal. Same is the case of hole current.

We know that when the p-n junction is formed, in the equilibrium state, the energy gap between bottom of the conduction band in the n-region and top of the valence band in the n-region is $E_g$. Taking the energy of the top of the valence band of n-region as a reference ($E_v = 0$), the electron density in the n-region is

$$
n_n = N_c e^{\frac{E_F - E_g}{kT}}
$$

where $N_c = 2\left(\frac{2\pi m_e^* kT}{h^2}\right)^{\frac{3}{2}}$

The bottom of the conduction band on the p-side will have an energy of $E_g + eV_0$, taking the top of the valence band on the n-side as reference. Here $V_0$ is the barrier potential and $e$ is the electronic charge. (Band gap on the p-side is the $E_g$, the additional term $eV_0$ is due to junction formation). Hence electron density on the p-side is

$$
n_p = N_c e^{\frac{E_F - (E_g + eV_0)}{kT}}
$$

Therefore

$$
\frac{n_p}{n_n} = e^{-\frac{eV_0}{kT}}
$$

or

$$
n_p = n_n e^{-\frac{eV_0}{kT}} \qquad (12)
$$

This equation shows how density of electrons in the conduction band on the p-side of the junction is connected to density of conduction electrons on the n-side, barrier potential and temperature. When no external voltage is applied across the p-n junction, and when the system is in thermal equilibrium, the diffusion

---

<!-- page 18 | 9 Diode equation (cont.) -->

and drift currents equal. Hence this density of electrons in the p-region remains the same.

When a forward bias is applied across the junction, the diffusion current increases, but drift current becomes saturated at a maximum value. Diffusion current of electrons is proportional to, increase in charge density of electrons on the p-side due to the forward voltage.

When an external forward bias voltage $V$ is applied, the voltage across the junction reduces to $V_0 - V$. (Height of the potential barrier decreases). It increases diffusion of electrons, but drift of electrons remains almost the same. Let $n_p^*$ be the new electron density on the p-side due to diffusion. Then

$$
n_p^* = n_n e^{-\frac{e(V_0 - V)}{kT}} = n_n e^{-\frac{eV_0}{kT}} e^{\frac{eV}{kT}}
$$

or

$$
n_p^* = n_p e^{\frac{eV}{kT}} \qquad (13)
$$

Since there is no significant change in drift of electrons due to external voltage, the increase in electron density in the p-region due to applied voltage is

$$
\Delta n_p = n_p^* - n_p = n_p \left(e^{\frac{eV}{kT}} - 1\right)
$$

Current due to electrons $I_e$, is proportional to this value. i.e.,

$$
I_e \propto n_p \left(e^{\frac{eV}{kT}} - 1\right)
$$

or

$$
I_e = I_{es} \left(e^{\frac{eV}{kT}} - 1\right)
$$

where $I_{es}$ is a constant. Similarly, we can show that current due to holes $I_h$, is given by

$$
I_h = I_{hs} \left(e^{\frac{eV}{kT}} - 1\right)
$$

where $I_{hs}$ is a constant. Hence, total current through the p-n junction diode will be

$$
\begin{aligned}
I &= I_e + I_h \\
&= I_{es} \left(e^{\frac{eV}{kT}} - 1\right) + I_{hs} \left(e^{\frac{eV}{kT}} - 1\right) \\
&= (I_{es} + I_{hs}) \left(e^{\frac{eV}{kT}} - 1\right)
\end{aligned}
$$

or

$$
I = I_s \left(e^{\frac{eV}{kT}} - 1\right) \qquad (14)
$$

where $I_s = I_{es} + I_{hs}$. This is called the diode equation.

---

<!-- page 19 | 10 V-I characteristics of a p-n junction -->

Special cases

1. When reverse bias $-V_R$ is applied across the junction $V = -V_R$, Then
$$
I = I_s (e^{\frac{-eV_R}{kT}} - 1)
$$
For larger values of $V_R$, $e^{\frac{-eV_R}{kT}} \approx 0$. Then $I = -I_s$. This is the maximum value of current in a reverse biased junction at a particular temperature. Hence $I_s$ is called **reverse saturation current**.

2. When forward bias voltage is large, $\frac{eV}{kT} >> 1$. Then $I \approx I_s e^{\frac{eV}{kT}}$

3. When $V = 0$; $I = 0$. There is no current when external voltage is 0.

4. The diode equation derived above is for ideal diodes. For practical diodes, the current values deviate slightly from this equation. To account for this, the diode equation is modified for practical diodes as follows.
$$
I = I_s (e^{\frac{eV}{\eta k T}} - 1) \qquad (15)
$$
where $\eta$ is called ideality factor. $\eta = 1$ for Ge and $\eta = 2$ for Si. Hence $\eta$ is also called material constant.

5. The quantity $\frac{kT}{e}$ is sometimes called thermal voltage represented by $V_T$. Then the diode equation can be written as
$$
I = I_s (e^{\frac{V}{n V_T}} - 1) \qquad (16)
$$

10 V-I characteristics of a p-n junction

![V-I characteristics of a p-n junction diode graph](/notes/cse/s1/physics/module-3/diode-vi-characteristic.webp)


A graph that shows variation of current in a device with variation of voltage across the device is called volt-ampere (V-I) characteristic of that device. Figure shows the V-I characteristic of a p-n junction diode. It has the following regions.

---

<!-- page 20 | 11 Numerical problems -->

1. Forward bias region

For small values of forward bias voltage, the current through the junction is negligibly small as long as the forward bias voltage $V$ is less than barrier potential $V_0$. When $V$ becomes equal to $V_0$, current begins to rise sharply. This voltage is known as **knee voltage**. As $V$ increases beyond $V_0$, the barrier disappears and an exponential increase in forward current occurs.

2. Reverse bias region

When reverse biased, practically no current flows across the junction. But due to the presence of minority carriers, a small current flows in the reverse direction across the junction. This current is so small compared to forward current - therefore different scale is used for plotting the reverse bias characteristics. As the number of minority carriers at a given temperature is constant and does not change with bias voltage, the reverse current reaches a saturation value (**reverse saturation current**, $I_s$) and remains constant thereafter with increase in the reverse bias.

3. Breakdown region

When the reverse bias voltage is increased steadily, the kinetic energy of the minority carrier electrons increases and they will knock out electrons from the semiconductor atoms. Consequently, there will be an abrupt rise in the reverse current and fall of the junction resistance. This effect is irreversible and the p-n junction may be permanently damaged due to this. The critical value of reverse voltage at which this occurs is called the **breakdown voltage**. p-n junction diode is never operated in this region.

## 11 Numerical problems

1. The forbidden gap in pure silicon is $1.1 \text{ eV}$. Compare the number of conduction electrons at temperatures $37^0\text{C}$ and $27^0\text{C}$

Sol.

$$
n_i = 2 \left(\frac{2\pi kT}{h^2}\right)^{\frac{3}{2}} (m_e^* m_h^*)^{\frac{3}{4}} e^{\frac{-E_g}{2kT}}
$$

$$
\Rightarrow n_i \propto T^{\frac{3}{2}} e^{\frac{-E_g}{2kT}}
$$

Therefore, $\frac{n_i(310\text{K})}{n_i(300\text{K})} = \left(\frac{310}{300}\right)^{\frac{3}{2}} e^{\frac{E_g}{2k} \left[\frac{1}{300} - \frac{1}{310}\right]}$

Given $E_g = 1.1 \text{ eV}$. Assume $k = 8.617 \times 10^{-5} \text{ eV/K}$.

$$
\frac{n_i(310\text{K})}{n_i(300\text{K})} = 1.0504 \times e^{\frac{1.1 \times 0.000108}{2 \times 8.617 \times 10^{-5}}} = 2.087
$$

2. The energy gap $E_g$ of an intrinsic semiconductor is $1.1 \text{ eV}$, and its effective density of states in the conduction band, $N_c$ is $2.8 \times 10^{19}/\text{cm}^3$.. Calculate

---

<!-- page 21 | 11 Numerical problems (cont.) -->

the electron density in the conduction band at a temperature of $300\text{ K}$. Assume the Boltzmann constant $k = 8.617 \times 10^{-5} \text{eV/K}$.

Sol. We use the formula: $n_i = N_c e^{-\frac{E_g}{2kT}}$

Given data: $E_g = 1.1\text{ eV}$ $N_c = 2.8 \times 10^{19}\text{ cm}^{-3}$ $T = 300\text{ K}$ $k = 8.617 \times 10^{-5}\text{eV/K}$

$$
n_i = 2.8 \times 10^{19} \exp \left(-\frac{1.1}{2 \times 8.617 \times 10^{-5} \times 300}\right)
$$

First, calculate the denominator in the exponent

$2 \times k \times T = 2 \times 8.617 \times 10^{-5} \times 300 = 0.0517$

Now calculate

$\frac{E_g}{2kT} = \frac{1.1}{0.0517} \approx 21.3$

Finally, calculate $e^{-21.3} \approx 5.617 \times 10^{-10}$

$n_i \approx 2.8 \times 10^{19} \times e^{-21.3} \approx 1.57 \times 10^{10}\text{ cm}^{-3}$

3. For a silicon intrinsic semiconductor, the effective density of states in the conduction band $N_c$ is $3 \times 10^{19}\text{ cm}^{-3}$ at a temperature of $300\text{ K}$. The intrinsic carrier concentration $n_i$ is $1.5 \times 10^{10}\text{ cm}^{-3}$. Calculate the energy gap $E_g$ of silicon.

Sol. We use the formula: $n_i = N_c e^{-\frac{E_g}{2kT}}$

Rearranging, $E_g = 2kT \log \left(\frac{N_c}{n_i}\right)$

Given $T=300\text{K}$, $N_c = 3 \times 10^{19}\text{cm}^{-3}$, $n_i = 1.5 \times 10^{10}\text{cm}^{-3}$. Assume $k = 8.617 \times 10^{-5}\text{eV/K}$

Then $E_g = 2 \times 8.617 \times 10^{-5} \times 300 \log_e \left(\frac{3 \times 10^{19}}{1.5 \times 10^{10}}\right) = 1.107\text{ eV}$

4. At $400\text{ K}$, the effective density of states in the conduction band, ($N_c$) of an intrinsic semiconductor is $2.5 \times 10^{19}\text{cm}^{-3}$. Given the electron density $n$ in the conduction band is $1 \times 10^{14}\text{cm}^{-3}$, find the energy gap $E_g$ of the semiconductor. (Ans. $0.857\text{ eV}$)

5. Current flowing in a p-n junction is $0.2\mu\text{A}$ at room temperature when a large reverse bias voltage is applied. Calculate the current when a forward bias of $0.1\text{V}$ is applied.

Sol.

$$
I = I_s \left(e^{\frac{eV}{\eta kT}} - 1\right)
$$

Given data $V = 0.1\text{V}$, $T = 298\text{K}$ (room temperature), $I_s = 0.2\mu\text{A}$. Assume $\eta = 1$ and $k = 8.617 \times 10^{-5}\text{eV/K}$. $I =$?

$$
I = 0.2 \times 10^{-6} \left(e^{\frac{0.1\text{eV}}{8.617 \times 10^{-5} \times 298}} - 1\right) = 9.62\mu\text{A}
$$

20

---

<!-- page 22 | 11 Numerical problems (cont.) -->

6. A silicon diode is forward biased with a voltage of $0.5\text{V}$ at $298\text{K}$. The reverse saturation current is found to be $10\text{nA}$. Find the diode current.

Sol.
$$
I = I_s (e^{\frac{eV}{\eta kT}} - 1)
$$
Given data $V = 0.5\text{V}$, $T = 298\text{K}$, $I_S = 10\text{nA}$. Assume $\eta = 1$ and $k = 8.617 \times 10^{-5}\text{eV/K}$. $I =$?
$$
I = 10 \times 10^{-9} \left(e^{\frac{0.5\text{V}}{8.617 \times 10^{-5} \times 298}} - 1\right) = 2.86\text{A}
$$

7. A rectifier circuit operating at $27^{\circ}\text{C}$, the forward current is $6.63\text{mA}$ for a forward voltage of $0.22\text{V}$. Calculate the reverse saturation current.

Sol.
$$
I = I_s \left(e^{\frac{eV}{\eta kT}} - 1\right)
$$
Given data $I = 6.63\text{mA}$, $V = 0.22\text{V}$, $T = 27^{\circ}\text{C} = 300\text{K}$, Assume $\eta = 1$ and $k = 8.617 \times 10^{-5}\text{eV/K}$, $I_S =$?
$$
I_S = \frac{I}{\left(e^{\frac{eV}{\eta kT}} - 1\right)} = \frac{6.63 \times 10^{-3}}{\left(e^{\frac{0.22\text{V}}{8.617 \times 10^{-5} \times 300\text{eV}^{-1}}} - 1\right)} = 1.335\mu\text{A}
$$

8. Given a diode with $I_S = 10^{-13}\text{A}$, determine the forward voltage $V_D$ required to produce a diode current of $I = 1\text{mA}$. Use $V_T = 25\text{mV}$ and $n = 1$.

Sol. $I_S = 10^{-13}\text{A}$, $I = 1\text{mA}$, $V_T = \frac{kT}{e} = 25\text{mV}$, $n = \eta = 1$, $V_D = V =$?
$$
I = I_s \left(e^{\frac{eV}{\eta kT}} - 1\right) = I_s \left(e^{\frac{V}{V_T}} - 1\right)
$$
Rearranging the equation, we get
$$
V = \eta V_T \ln \left(\frac{I}{I_S} + 1\right) = 1 \times 25 \times 10^{-3} \ln \left(\frac{1 \times 10^{-3}}{10^{-13}} + 1\right) = 0.5756\text{V}
$$

9. A silicon diode has $I_S = 2 \times 10^{-12}\text{A}$, $V_T = 25\text{mV}$ and $n = 1$. Calculate the current through the diode when the forward voltage is $V_D = 0.7\text{V}$.

Sol. $I_S = 2 \times 10^{-12}\text{A}$, $V_T = \frac{kT}{e} = 25\text{mV}$, $n = \eta = 1$, $V_D = V = 0.7\text{V}$, $I =$?
$$
I = I_s \left(e^{\frac{eV}{\eta kT}} - 1\right) = I_s \left(e^{\frac{V}{V_T}} - 1\right)
$$
$$
I = 2 \times 10^{-12} \left[e^{\frac{0.7}{1 \times 25 \times 10^{-3}}} - 1\right] \approx 2.89\text{A}
$$

10. For a diode with $I_S = 1 \times 10^{-12}\text{A}$, $V_T = 26\text{mV}$ and ideality factor $\eta = 1.2$, find the current at $V_D = 0.65\text{V}$.

Sol. $I_S = 1 \times 10^{-12}\text{A}$, $V_T = \frac{kT}{e} = 26\text{mV}$, $\eta = 1.2$, $V_D = V = 0.65\text{V}$, $I =$?
$$
I = I_s \left(e^{\frac{eV}{\eta kT}} - 1\right) = I_s \left(e^{\frac{V}{\eta V_T}} - 1\right)
$$
$$
I = 1 \times 10^{-12} \left[e^{\frac{0.65}{1.2 \times 26 \times 10^{-3}}} - 1\right] \approx 1.12\text{mA}
$$

21
