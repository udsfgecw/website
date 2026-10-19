# GAPHT121 · Physics for Information Science

KTU 2024 Scheme · CSE · Semester 1. Questions are grouped by module, year and question number. Worked answers follow each question; consult the originals for figures.

**Original papers:** [December 2024 PDF](/notes/cse/s1/question-papers/assets/GAPHT121_2024.pdf) · [May 2025 PDF](/notes/cse/s1/question-papers/assets/GAPHT121_2025.pdf) · [KTU Notes archive](https://ktunotes.in/ktu-physics-for-information-science-gapht121-question-papers-2024-scheme/)

<!-- page 1 | Module 1 -->

## Module 1 · Free-electron theory and superconductivity

### 2024 · Q1

**Question.** State three postulates of the classical free-electron theory.

**Solution.** A metal contains mobile conduction electrons and fixed positive ion cores; electrons move freely between collisions with ions, defects or boundaries; collisions randomize their velocities, while an applied electric field produces a small average drift. In the Drude model, the mean free time between collisions is represented by relaxation time $\tau$.

### 2024 · Q2

**Question.** Define critical field and describe its temperature dependence.

**Solution.** The critical field $H_c(T)$ is the largest applied magnetic field for which a material remains superconducting. For a type-I superconductor, $H_c(T)=H_c(0)[1-(T/T_c)^2]$ approximately; it falls to zero at the critical temperature $T_c$.

### 2024 · Q9(a)

**Question.** Derive current density and conductivity in terms of free-electron concentration.

**Solution.** If electron concentration is $n$ and drift-velocity magnitude is $v_d$, then $J=ne v_d$. In a field $E$, the Drude drift magnitude is $v_d=eE\tau/m$. Therefore $J=(ne^2\tau/m)E$ and $\sigma=ne^2\tau/m$ (vector electron drift is opposite to $E$; conventional current is along $E$).

### 2024 · Q9(b)

**Question.** Find the Fermi–Dirac occupation probability for a level $0.01$ eV above $E_F$ at 300 K.

**Solution.** $f(E)=1/[1+\exp((E-E_F)/(k_BT))]$. Here $k_BT=(1.38\times10^{-23})(300)=4.14\times10^{-21}$ J and $0.01$ eV $=1.602\times10^{-21}$ J. Thus the exponent is $0.387$ and $f\approx1/(1+1.472)=0.404$ (about 40%).

### 2024 · Q10(a)

**Question.** Compare type-I and type-II superconductors and give two examples of each.

**Solution.** Type I has one critical field and a near-complete Meissner state below it; above the field superconductivity is lost. Examples: Hg, Pb. Type II has lower and upper critical fields $H_{c1},H_{c2}$; between them magnetic flux enters as vortices while superconductivity persists. Examples: NbTi, Nb$_3$Sn. A sketch should show one transition for type I and the Meissner, mixed and normal regions for type II.

### 2024 · Q10(b)

**Question.** List six applications of superconductors.

**Solution.** MRI/NMR magnets; particle accelerators; magnetic confinement fusion; SQUID magnetometers; superconducting power cables or fault-current limiters; and low-loss/high-field research magnets. High-temperature superconductors are also used in some demonstrations of magnetic levitation.

### 2025 · Q1

**Question.** Sketch energy bands for conductors, semiconductors and insulators.

**Solution.** Conductor: a partially filled band or overlapping valence and conduction bands. Semiconductor: a filled valence band and empty conduction band separated by a small forbidden gap. Insulator: the same arrangement but with a substantially larger gap. Label $E_V$, $E_C$ and the gap $E_g$; the sketch is schematic, not to scale.

### 2025 · Q2

**Question.** Explain critical temperature and critical field and their relation.

**Solution.** $T_c$ is the transition temperature below which the material can superconduct; $H_c(T)$ is the maximum field that preserves that state at temperature $T$. The approximate relation is $H_c(T)=H_c(0)[1-(T/T_c)^2]$; either raising temperature toward $T_c$ or field toward $H_c$ destroys superconductivity.

### 2025 · Q9(a)

**Question.** State the Drude assumptions and derive drift velocity and conductivity.

**Solution.** Treat conduction electrons as a classical gas of independent particles; neglect electron–electron interaction; model scattering by fixed ions/defects as random collisions with mean relaxation time $\tau$. The field exerts force $-eE$, so the average electron drift is $\mathbf v_d=-e\tau\mathbf E/m$. Conventional current density is $\mathbf J=ne^2\tau\mathbf E/m$, giving $\sigma=ne^2\tau/m$.

### 2025 · Q9(b)

**Question.** Find copper’s electron mobility for $n=9\times10^{28}\,\mathrm{m^{-3}}$ and $\sigma=6\times10^7\,\mathrm{S/m}$.

**Solution.** $\mu=\sigma/(ne)=6\times10^7/[(9\times10^{28})(1.6\times10^{-19})]=4.17\times10^{-3}\,\mathrm{m^2/(V\,s)}$.

### 2025 · Q10(a)

**Question.** Summarize BCS theory and list four applications.

**Solution.** Below $T_c$, electron–lattice interactions can bind electrons near the Fermi surface into Cooper pairs with opposite momenta and spin. The paired condensate is separated from excitations by an energy gap and carries current without ordinary resistive scattering. Applications include MRI/NMR, accelerator magnets, SQUIDs, and superconducting power devices or fusion magnets.

### 2025 · Q10(b)

**Question.** Pb has $T_c=7.26$ K and $H_c(0)=8\times10^5$ A/m. Find the maximum operating temperature in field $H=4\times10^4$ A/m.

**Solution.** Set $H/H_c(0)=1-(T/T_c)^2=0.05$. Thus $T=7.26\sqrt{0.95}=7.08$ K (approximately); to remain superconducting, operate below this limit.

<!-- page 2 | Module 2 -->

## Module 2 · Quantum mechanics

### 2024 · Q3

**Question.** Explain natural spectral-line broadening using the uncertainty principle.

**Solution.** An excited state with finite lifetime $\Delta t$ has an energy uncertainty $\Delta E\,\Delta t\gtrsim\hbar/2$. Since photon frequency is $E/h$, this spread gives a nonzero line width even without collisions or instrumental effects. A shorter lifetime produces a broader natural line.

### 2024 · Q4

**Question.** Explain quantum-mechanical tunnelling.

**Solution.** A particle is represented by a wavefunction. In a classically forbidden finite barrier, the wavefunction decays rather than becoming identically zero; if the barrier is sufficiently thin/low, a nonzero probability flux emerges on the far side. Examples include alpha decay, tunnel diodes and scanning tunnelling microscopy.

### 2024 · Q11(a)

**Question.** Define a wavefunction and state its important characteristics.

**Solution.** $\psi(\mathbf r,t)$ is a probability amplitude; $|\psi|^2$ is the probability density. A physical wavefunction must be single-valued, finite, continuous, square-integrable/normalizable, and have a continuous first derivative where the potential is finite. Its total probability is normalized to one.

### 2024 · Q11(b)

**Question.** Derive the time-dependent Schrödinger equation from a plane wave.

**Solution.** For $\psi=Ae^{i(\mathbf k\cdot\mathbf r-\omega t)}$, derivatives give $\hat{\mathbf p}=-i\hbar\nabla$ and $\hat E=i\hbar\partial_t$. Substituting the classical energy $E=p^2/(2m)+V$ yields

$$i\hbar\frac{\partial\psi}{\partial t}=\left[-\frac{\hbar^2}{2m}\nabla^2+V(\mathbf r,t)\right]\psi.$$

### 2024 · Q12(a)

**Question.** Derive the eigenfunctions for a one-dimensional infinite square well.

**Solution.** For a well $0<x<L$, $V=0$ inside and infinity outside. The inside equation is $\psi''+k^2\psi=0$, with boundary conditions $\psi(0)=\psi(L)=0$. They require $k_n=n\pi/L$, so

$$\psi_n(x)=\sqrt{2/L}\sin(n\pi x/L),\quad E_n=\frac{n^2\pi^2\hbar^2}{2mL^2}=\frac{n^2h^2}{8mL^2},\quad n=1,2,\dots$$

### 2024 · Q12(b)

**Question.** Find the two lowest energy levels for an electron in a $3$ Å box.

**Solution.** $E_1=h^2/(8mL^2)=4.18$ eV for $L=3\times10^{-10}$ m. Since $E_n=n^2E_1$, $E_2=16.7$ eV. (If “two lowest” means the first two levels, these are $E_1,E_2$.)

### 2025 · Q3

**Question.** Give a numerical example showing why matter waves are not apparent for large objects.

**Solution.** For a $0.1$ kg ball moving at $10$ m/s, $\lambda=h/(mv)=6.63\times10^{-34}/1=6.63\times10^{-34}$ m, immeasurably small compared with the object. For an electron at the same speed, the wavelength is about $7.27\times10^{-4}$ m, so wave effects can be observable in suitable experiments.

### 2025 · Q4

**Question.** Explain barrier tunnelling and give examples.

**Solution.** A finite potential barrier has an evanescent wavefunction inside it; matching the wavefunction at both boundaries leaves a finite transmission probability. Transmission decreases rapidly as the barrier becomes wider or higher. Examples are alpha decay, tunnel diodes and STM.

### 2025 · Q11(a)

**Question.** State the uncertainty principle and use it to explain why electrons cannot be confined inside a nucleus.

**Solution.** $\Delta x\,\Delta p\ge\hbar/2$. Confining an electron to $\Delta x\sim10^{-15}$ m requires $\Delta p\gtrsim5.3\times10^{-20}$ kg m/s, or momentum energy $pc\sim16$ MeV. This is far too large for a stable, low-energy electron bound inside a nucleus; electrons observed in beta decay are produced in the decay rather than pre-existing there.

### 2025 · Q11(b)

**Question.** Find the energy to excite a particle in a $0.1$ nm box from ground state to the second excited state.

**Solution.** The second excited state is $n=3$. $\Delta E=(9-1)h^2/(8mL^2)=8E_1$. For an electron and $L=10^{-10}$ m, $E_1\approx37.6$ eV, so $\Delta E\approx301$ eV.

### 2025 · Q12(a)

**Question.** Obtain the time-independent Schrödinger equation.

**Solution.** For a time-independent potential, separate $\psi(\mathbf r,t)=\phi(\mathbf r)T(t)$. The time-dependent equation separates into $T=e^{-iEt/\hbar}$ and

$$-\frac{\hbar^2}{2m}\nabla^2\phi+V\phi=E\phi.$$

### 2025 · Q12(b)

**Question.** Find the minimum velocity uncertainty for an electron confined to $10$ nm.

**Solution.** With $\Delta x=10^{-8}$ m, $\Delta v\ge\hbar/(2m\Delta x)=1.055\times10^{-34}/[2(9.1\times10^{-31})(10^{-8})] \approx5.8\times10^3$ m/s.

<!-- page 3 | Module 3 -->

## Module 3 · Semiconductor physics

### 2024 · Q5

**Question.** What are extrinsic semiconductors and how are they formed?

**Solution.** They are semiconductors whose carrier concentration is deliberately changed by doping. Pentavalent donors provide extra electrons and make n-type material; trivalent acceptors create holes and make p-type material.

### 2024 · Q6

**Question.** Define diode biasing and explain forward bias.

**Solution.** Biasing applies an external voltage to set a diode’s operating condition. Forward bias connects p-side to positive and n-side to negative; the applied field reduces the depletion barrier and width, allowing majority carriers to cross and producing substantial current once the turn-on region is reached.

### 2024 · Q13(a)

**Question.** Derive the conduction-band electron density for an intrinsic semiconductor.

**Solution.** For a nondegenerate semiconductor, $n=N_C\exp[-(E_C-E_F)/(k_BT)]$, where $N_C=2(2\pi m_n^*k_BT/h^2)^{3/2}$. In an intrinsic material, $n=p=n_i$ and $E_F=E_i$, giving $n_i=N_C\exp[-(E_C-E_i)/(k_BT)]$. Combining with the valence-band expression gives $n_i=\sqrt{N_CN_V}\exp[-E_g/(2k_BT)]$.

### 2024 · Q13(b)

**Question.** State where the intrinsic Fermi level lies at 0 K.

**Solution.** In the ideal intrinsic, symmetric-band approximation, it lies at midgap: $E_i\approx(E_C+E_V)/2$. More precisely, density-of-states effective masses can shift it slightly from exact midgap; at exactly 0 K the carrier populations vanish.

### 2024 · Q14(a)

**Question.** Describe p–n junction formation and its equilibrium band diagram.

**Solution.** Electrons diffuse from n to p and holes from p to n, recombine near the interface, and leave fixed ionized donors/acceptors. The resulting depletion field points from n-side positive donors toward p-side negative acceptors; drift of carriers opposes diffusion. At equilibrium, the Fermi level is flat across the junction and a built-in potential bends the bands. Draw the p and n regions, depletion zone, flat $E_F$, and opposing diffusion/drift arrows.

### 2024 · Q14(b)

**Question.** Find the forward current of a silicon diode at 25°C for $V=0.5$ V, $I_S=0.1\,\mu$A, $\eta=2$.

**Solution.** Use $I=I_S[\exp(V/(\eta V_T))-1]$, with $V_T\approx kT/q=25.85$ mV. Then $V/(\eta V_T)=9.67$, so $I\approx10^{-7}(e^{9.67}-1)\approx1.6$ mA.

### 2025 · Q5

**Question.** Sketch and explain the p–n diode V–I characteristic.

**Solution.** In forward bias, current rises steeply after the knee (about 0.7 V for silicon, about 0.3 V for germanium). In reverse bias, a small nearly constant saturation current flows until breakdown at $-V_{BR}$, where current increases sharply. Include both axes, forward knee and reverse breakdown.

### 2025 · Q6

**Question.** Explain p-type semiconductor formation.

**Solution.** Add a small concentration of trivalent acceptor atoms (such as B in Si). Each creates an unfilled covalent bond; accepting a valence electron leaves a mobile hole. Holes are majority carriers and electrons are minority carriers; the acceptor level lies near the valence band.

### 2025 · Q13(a)

**Question.** Derive the hole density in the valence band.

**Solution.** Integrating the valence-band density of states times the probability of an empty state gives, in the nondegenerate approximation, $p=N_V\exp[-(E_F-E_V)/(k_BT)]$, where $N_V=2(2\pi m_p^*k_BT/h^2)^{3/2}$. For an intrinsic semiconductor, set $p=n=n_i$.

### 2025 · Q13(b)

**Question.** A Ge diode has $I=2$ mA at $V=0.3$ V, with $kT=0.026$ eV. Find ideal $I_S$.

**Solution.** $I_S=I/[e^{V/(kT)}-1]$. The exponent is $11.54$, giving $I_S\approx0.002/(1.02\times10^5)\approx1.96\times10^{-8}$ A, or $19.6$ nA.

### 2025 · Q14(a)

**Question.** Explain intrinsic/extrinsic Fermi levels and their temperature variation.

**Solution.** Intrinsic $E_F$ lies near midgap. In n-type material, $E_F$ lies nearer $E_C$; in p-type, nearer $E_V$. At low temperature the dopants dominate and the level lies near the relevant dopant band; as temperature rises, intrinsic carriers dominate and $E_F$ moves toward the intrinsic level near midgap.

### 2025 · Q14(b)

**Question.** Find ideal forward current for a silicon diode with $I_S=10$ nA, $V=0.4$ V, $kT=0.026$ eV.

**Solution.** $I=I_S(e^{V/(kT)}-1)=10^{-8}(e^{15.385}-1)\approx4.8\times10^{-2}$ A, about $48$ mA.

<!-- page 4 | Module 4 -->

## Module 4 · Diodes, optoelectronics and rectifiers

### 2024 · Q7

**Question.** Explain Zener breakdown.

**Solution.** A heavily doped junction has a thin depletion region. A strong reverse field enables band-to-band tunnelling, causing a sharp rise in reverse current at an approximately fixed breakdown voltage. A series resistor must limit current to protect the diode.

### 2024 · Q8

**Question.** Explain LED emission and state two advantages.

**Solution.** Under forward bias, injected electrons and holes recombine radiatively in the active region; photon energy is approximately the semiconductor band gap. LEDs offer high efficiency and long operating life; they also switch rapidly and are compact.

### 2024 · Q15

**Question.** Explain centre-tap and bridge full-wave rectifiers; derive efficiency and ripple factor.

**Solution.** A centre-tap circuit uses two diodes and alternate half-secondary windings; a bridge uses four diodes, two conducting per half-cycle, and needs no centre tap. Both produce $i_L=I_m|\sin\omega t|$. For an ideal resistive load, $I_{dc}=2I_m/\pi$, $I_{rms}=I_m/\sqrt2$. Thus $\eta=P_{dc}/P_{ac}=8/\pi^2=0.812$ (81.2%). Ripple factor $r=\sqrt{(I_{rms}/I_{dc})^2-1}=0.482$. A sketch should mark the two conducting paths in each half-cycle.

### 2024 · Q16(a)

**Question.** Describe a PIN photodiode’s construction and working.

**Solution.** A PIN photodiode has p and n regions separated by a wide, lightly doped or intrinsic layer. Under reverse bias, the depletion region spans the i-layer. Absorbed photons generate electron–hole pairs there; the electric field rapidly sweeps carriers to opposite contacts, producing photocurrent approximately proportional to incident optical power.

### 2024 · Q16(b)

**Question.** Give four photodiode applications.

**Solution.** Fiber-optic receivers, light meters, smoke detectors, and optical encoders/remote-control receivers.

### 2025 · Q7

**Question.** Explain a tunnel diode.

**Solution.** Very heavy p- and n-doping makes the depletion layer extremely thin, so carriers tunnel through the junction. As forward voltage rises, current reaches a peak, falls through a negative-resistance region to a valley, then rises by ordinary conduction. This supports high-frequency oscillators and fast switching.

### 2025 · Q8

**Question.** Explain LED operation.

**Solution.** Forward bias injects electrons and holes into a direct-bandgap active region. Their radiative recombination emits photons with energy close to $E_g$; material composition sets the colour. The device is efficient, small and fast-switching.

### 2025 · Q15(a)

**Question.** Explain a solar cell and define efficiency and fill factor.

**Solution.** A solar cell is a large-area illuminated p–n junction. Photons create electron–hole pairs; the junction field separates them, producing photocurrent and a voltage at the terminals. Draw the illuminated I–V curve with $I_{SC}$, $V_{OC}$ and maximum-power point. $\eta=P_{max}/P_{in}=V_{mp}I_{mp}/P_{in}$ and $FF=V_{mp}I_{mp}/(V_{OC}I_{SC})$.

### 2025 · Q15(b)

**Question.** A half-wave rectifier has $r_d=30\,\Omega$, $R_L=500\,\Omega$, and $v_i=6\sin\omega t$ V. Find DC output, AC input power and efficiency.

**Solution.** $I_m=6/(530)=0.01132$ A. $I_{dc}=I_m/\pi=3.60$ mA, so $V_{dc}=I_{dc}R_L=1.80$ V. $I_{rms}=I_m/2=5.66$ mA; input power in $r_d+R_L$ is $I_{rms}^2(530)=17.0$ mW. DC load power is $I_{dc}^2R_L=6.48$ mW, hence $\eta=38.1$%.

### 2025 · Q16(a)

**Question.** Explain half-wave rectification and derive efficiency.

**Solution.** One diode conducts on the positive half-cycle and blocks the negative half-cycle, giving a half-sine load current. For ideal diode/load, $I_{dc}=I_m/\pi$ and $I_{rms}=I_m/2$. Therefore $\eta=I_{dc}^2R_L/(I_{rms}^2R_L)=4/\pi^2=40.6$% maximum.

### 2025 · Q16(b)

**Question.** Centre-tap full-wave rectifier: each half-secondary is 300 V rms, $r_d=20\,\Omega$, $R_L=980\,\Omega$. Find mean and rms load currents and DC output power.

**Solution.** $V_m=300\sqrt2=424.3$ V and $I_m=V_m/(R_L+r_d)=0.4243$ A. Thus $I_{dc}=2I_m/\pi=0.270$ A, $I_{rms}=I_m/\sqrt2=0.300$ A, and $P_{dc}=I_{dc}^2R_L\approx71.6$ W.

> **Answer note:** Rectifier numerical answers assume the stated internal resistance is in series with the load and use ideal sinusoidal secondary voltage. Small rounding differences are expected.
