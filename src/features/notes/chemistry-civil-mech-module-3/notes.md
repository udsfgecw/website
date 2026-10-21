<!-- page 1 | Start here -->

## Module 3: Molecular Spectroscopy and Analytical Techniques

This module covers foundational concepts and applications of molecular spectroscopy (UV-Visible and IR), thermal analysis techniques (TGA and DTA), gas chromatography, and scanning electron microscopy for characterization and quantitative analysis.

**Before you start:** Basic knowledge of atomic structure and molecular orbitals; Fundamental organic chemistry functional groups; Basic thermodynamics and chemical equilibrium.

### Your path through this module

1. **Introduction to Molecular Spectroscopy and Energy Levels**: Molecules possess quantized electronic, vibrational, and rotational energy levels that absorb or emit specific frequencies of electromagnetic radiation.
2. **UV-Visible Spectroscopy and Electronic Transitions**: Electronic transitions from HOMO to LUMO in conjugated systems shift absorption to higher wavelengths, which can be measured using double-beam spectrometers.
3. **Infrared Spectroscopy and Vibrational Modes**: Vibrational transitions require a change in dipole moment and provide direct identification of functional groups and bond strength.
4. **Thermal Analysis: TGA and DTA**: Continuous monitoring of sample mass and temperature differential against an inert reference reveals decomposition kinetics and phase changes.
5. **Chromatographic Methods: Gas Chromatography**: Components of a vaporized mixture partition between a mobile carrier gas and a stationary phase, separating based on interaction rates.
6. **Scanning Electron Microscopy (SEM)**: Rastering a focused beam of electrons across a vacuum-sealed sample generates secondary signals to construct high-resolution 3D surface images.

<!-- page 2 | Introduction to Molecular Spectroscopy and Energy Levels -->

# Introduction to Molecular Spectroscopy and Energy Levels

Building upon your knowledge of atomic structure and molecular bonding, we now explore how molecules interact with electromagnetic radiation. This interaction allows us to probe molecular structure using spectroscopy.

## Quantized Energy Levels and Molecular Energies

Molecules are not static; their internal energy is quantized, meaning a molecule can only exist in specific discrete energy states. When a molecule interacts with electromagnetic radiation, it can absorb or emit a photon whose energy matches the difference between two allowed energy states. This relationship is governed by the Bohr frequency condition:

$$\Delta E = h \nu = \frac{hc}{\lambda}$$

Here, $\Delta E$ is the energy difference between two states in joules (J), $h$ is Planck's constant ($6.626 \times 10^{-34} \text{ J s}$), $\nu$ is the frequency of the radiation in hertz ($\text{Hz}$ or $\text{s}^{-1}$), $c$ is the speed of light in vacuum ($\text{m s}^{-1}$), and $\lambda$ is the wavelength in meters ($\text{m}$). This equation applies whenever a transition occurs between quantized states via photon absorption or emission.

Total internal molecular energy is the sum of four distinct quantized energy types:

1. **Electronic energy ($E_{\text{elec}}$):** The energy associated with the arrangement and motion of electrons around atomic nuclei. Transitions between electronic levels involve large energy changes and correspond to the ultraviolet-visible (UV-Vis) spectral region.
2. **Vibrational energy ($E_{\text{vib}}$):** The energy associated with the periodic displacement of atoms relative to one another within a molecule (stretching and bending of bonds). Transitions between vibrational levels require moderate energy and correspond to the infrared (IR) spectral region.
3. **Rotational energy ($E_{\text{rot}}$):** The energy associated with the tumbling or rotation of the molecule as a rigid body in space. Transitions between rotational levels involve small energy changes and occur in the microwave and far-infrared regions.
4. **Translational energy ($E_{\text{trans}}$):** The energy associated with the random motion of the entire molecule through space. Because translational energy levels are practically continuous rather than quantized on a macroscopic scale, they do not produce discrete spectral lines.

These energy levels are hierarchically nested. For any given electronic state, there are multiple vibrational states, and for each vibrational state, there are multiple rotational states. Therefore, the total energy change is approximately:

$$E_{\text{total}} = E_{\text{elec}} + E_{\text{vib}} + E_{\text{rot}}$$

## Absorption vs. Emission Spectra

When analyzing molecules using light, we observe two main types of spectra:

- **Absorption spectrum:** A plot of absorbance (or transmittance) versus wavelength (or frequency) that results when a sample is irradiated with polychromatic electromagnetic radiation. The molecule absorbs specific photon frequencies where $h\nu = \Delta E$, promoting the molecule from a lower energy state (typically the ground state) to a higher energy state.
- **Emission spectrum:** A plot of emitted intensity versus wavelength (or frequency) generated when a molecule in an excited state relaxes back to a lower energy state by releasing a photon.

## Diagram: Energy Level Transitions

To visualize these transitions, construct a diagram following these steps:

1. Draw two horizontal parallel lines representing a lower electronic state ($E_1$) and a higher electronic state ($E_2$).
2. Inside the space above each electronic line, draw multiple closely spaced horizontal lines to represent vibrational sublevels ($v=0, 1, 2$).
3. Draw an upward vertical arrow originating from a lower vibrational sublevel to a higher vibrational sublevel, labeling this arrow "Absorption ($\Delta E = h\nu$)".
4. Draw a downward vertical arrow from an excited vibrational sublevel back down, labeling it "Emission".

## Worked Example

**Problem:** Calculate the energy change (in joules per mole) associated with the absorption of a photon with a wavelength of $500 \text{ nm}$, which is in the visible region of the spectrum.

**Solution:**

1. Identify given values:
   $$\lambda = 500 \text{ nm} = 500 \times 10^{-9} \text{ m}$$
   $$h = 6.626 \times 10^{-34} \text{ J s}$$
   $$c = 3.00 \times 10^8 \text{ m s}^{-1}$$

2. Apply the energy equation for a single photon:
   $$E = \frac{hc}{\lambda} = \frac{(6.626 \times 10^{-34} \text{ J s})(3.00 \times 10^8 \text{ m s}^{-1})}{500 \times 10^{-9} \text{ m}}$$
   $$E = 3.9756 \times 10^{-19} \text{ J/photon}$$

3. Multiply by Avogadro's constant ($N_A = 6.022 \times 10^{23} \text{ mol}^{-1}$) to find the molar energy change:
   $$E_{\text{molar}} = E \times N_A = (3.9756 \times 10^{-19} \text{ J})(6.022 \times 10^{23} \text{ mol}^{-1})$$
   $$E_{\text{molar}} = 2.39 \times 10^5 \text{ J mol}^{-1} = 239 \text{ kJ mol}^{-1}$$

## Remember

- Molecular energy levels are quantized, meaning molecules can only absorb or emit discrete packets of energy corresponding to $\Delta E = h\nu$.
- The four molecular energies are electronic, vibrational, rotational, and translational, with electronic transitions requiring the highest energy and rotational transitions the lowest.
- An absorption spectrum records the frequencies of light taken up by a sample to reach higher energy states, while an emission spectrum records the light released as a sample drops to lower energy states.

<!-- page 3 | UV-Visible Spectroscopy and Electronic Transitions -->

## UV-Visible Spectroscopy and Electronic Transitions

Spectroscopy involves the production, measurement, and interpretation of electromagnetic spectra arising from the emission or absorption of electromagnetic radiation by atoms or molecules. Spectroscopic methods are widely preferred over classical methods because they require less time and smaller sample quantities, leave sample materials unchanged for reuse, and yield highly accurate results.

### Types of Spectra and Molecular Energy Levels

Based on the nature of interaction, spectra are divided into:
1. **Absorption Spectrum:** Occurs when an atom or molecule undergoes a transition from a lower energy level $E_1$ to a higher energy level $E_2$ with the absorption of a photon of energy $\Delta E = E_2 - E_1 = h\nu$. Techniques like UV-Visible, IR, Microwave, and NMR belong to absorption spectra.
2. **Emission Spectrum:** Occurs when an atom or molecule undergoes a transition from a higher energy level to a lower energy level with the emission of a photon. Higher energy states must be more populated than lower energy states for emission to be observed.

Molecules possess four types of energy:
- **Electronic Energy ($E_{el}$):** Associated with electrons occupying bonding or antibonding molecular orbitals. Energy gaps fall in the UV-Visible region.
- **Vibrational Energy ($E_{vib}$):** Associated with vibrational motions of atoms keeping the center of mass constant (e.g., bond stretching in $\text{HCl}$). Energy gaps fall in the Infrared region.
- **Rotational Energy ($E_{rot}$):** Associated with rotational motion of gas or liquid molecules about an axis passing through the center of mass. Energy gaps fall in the microwave region.
- **Translational Energy ($E_{trans}$):** Associated with changes in the position of the center of mass over time. Unquantized unless confined to nano-dimensions.

The total molecular energy is the sum of these contributions:
$$E_{\text{total}} = E_{el} + E_{vib} + E_{rot} + E_{trans}$$

### UV-Visible Spectroscopy Fundamentals

Ultraviolet-Visible spectroscopy covers the UV region ($200-400\text{ nm}$) and the Visible region ($400-800\text{ nm}$). It corresponds to electronic excitation between molecular orbitals. Transitions involving $\pi$ orbitals and non-bonding lone pairs ($n$) are particularly important for identifying conjugated systems.

![Electronic transitions energy level diagram](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p004-1.webp)

> **Figure: Electronic transitions energy level diagram**
>
> Electronic transitions energy level diagram. An energy level diagram showing various electronic energy levels from bottom to top: sigma, pi, n, pi*, and sigma*. Vertical arrows indicate electronic transitions: a long arrow from sigma to sigma* labeled sigma to sigma*, a shorter arrow from pi to pi* labeled pi to pi*, an arrow from n to pi* labeled n to pi*, and an arrow from n to sigma* labeled n to sigma*. A vertical axis on the left has an arrow pointing upwards with the label Energy.

### Classification of Electronic Transitions

When a molecule absorbs UV-Visible radiation, electrons are promoted from a bonding or non-bonding molecular orbital to an antibonding molecular orbital. There are four primary electronic transitions:

1. **$\sigma \to \sigma^*$ Transition:** Saturated hydrocarbons contain only $\text{C-C}$ and $\text{C-H}$ $\sigma$ bonds and are transparent to UV-visible light ($>200\text{ nm}$). This transition occurs at high energy below $150\text{ nm}$ and cannot be detected by standard UV spectrometers.
2. **$\pi \to \pi^*$ Transition:** Found in unsaturated hydrocarbons containing double or triple bonds. For ethylene, absorption occurs at $169\text{ nm}$. In conjugated systems, the transition occurs from the Highest Occupied Molecular Orbital (HOMO) to the Lowest Unoccupied Molecular Orbital (LUMO).
   - **1,3-butadiene:** Contains four $\pi$ molecular orbitals ($\psi_1, \psi_2$ as bonding MOs; $\psi_3^*, \psi_4^*$ as antibonding MOs). The four $\pi$ electrons occupy $\psi_1$ and $\psi_2$ in the ground state. The transition occurs from HOMO ($\psi_2$) to LUMO ($\psi_3^*$) at $217\text{ nm}$.
   - **1,3,5-Hexatriene:** Contains six $\pi$ molecular orbitals ($\psi_1, \psi_2, \psi_3$ bonding; $\psi_4^*, \psi_5^*, \psi_6^*$ antibonding). Transition occurs from HOMO ($\psi_3$) to LUMO ($\psi_4^*$) at $258\text{ nm}$. As conjugation length increases, $\lambda_{\max}$ increases.



![Electron configuration of ground state and excited state](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p005-1.webp)

> **Figure: Electron configuration of ground state and excited state**
>
> Two energy level diagrams illustrating the most stable electron configuration (ground state) on the left and the electron configuration of the excited state on the right. Left diagram shows orbitals psi_1 (with two paired electrons), psi_2 (with two paired electrons), psi_3 (with two paired electrons, labeled HOMO), psi_4* (empty, labeled LUMO), psi_5* (empty), and psi_6* (empty). An arrow points from HOMO to LUMO with the label Delta E = h nu. Right diagram shows orbitals psi_1 (two paired electrons), psi_2 (two paired electrons), psi_3 (one single electron), psi_4* (one single electron), psi_5* (empty), and psi_6* (empty).



![Transition for 1,3,5 hexatriene showing ground to excited state at 258 nm](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p005-2.webp)

> **Figure: Transition for 1,3,5 hexatriene showing ground to excited state at 258 nm**
>
> Transition for 1,3,5 hexatriene showing the ground state on the left and the excited state on the right. Left diagram has energy levels psi_1 (2 electrons), psi_2 (2 electrons), psi_3 (2 electrons, with a red upward arrow to psi_4*), psi_4* (empty), psi_5* (empty), psi_6* (empty). A vertical double-sided arrow on the far left indicates Delta E = 111 kcal/mol between psi_3 and psi_4*. A horizontal arrow labeled 258 nm points from the left ground state to the right excited state diagram. Right diagram shows excited state with psi_1 (2 electrons), psi_2 (2 electrons), psi_3 (1 electron), psi_4* (1 electron), psi_5* (empty), and psi_6* (empty).


   - **Benzene:** Possesses six $\pi$ molecular orbitals where $\psi_1$ is bonding, $\psi_2 \& \psi_3$ are degenerate bonding MOs (HOMO), $\psi_4 \& \psi_5$ are degenerate antibonding MOs (LUMO), and $\psi_6^*$ is antibonding. HOMO to LUMO transition occurs at $255\text{ nm}$.



![Benzene molecular orbital energy levels and structure (b)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p006-1.webp)

> **Figure: Benzene molecular orbital energy levels and structure (b)**
>
> Benzene molecular orbital energy level diagram and chemical structure. The energy diagram shows six molecular orbitals labeled psi_1 at the bottom with two paired electrons, psi_2 and psi_3 at a higher energy level each containing two paired electrons and collectively labeled HOMO, psi_4 and psi_5 at an even higher energy level collectively labeled LUMO, and psi_6 at the top. A vertical upward arrow originates from the HOMO level (psi_3) and points to the LUMO level (psi_5) with the text lambda = 255nm beside it. Next to the energy diagram, a hexagon structure labeled (b) represents benzene with alternating double bonds.

3. **$n \to \pi^*$ Transition:** Observed in compounds with heteroatoms possessing non-bonding electrons and $\pi$ systems, such as aldehydes and ketones containing the $>\text{C}=\text{O}$ group. These are forbidden transitions with lower intensity, appearing around $280\text{ nm}$ for aliphatic ketones.
4. **$n \to \sigma^*$ Transition:** Occurs in saturated compounds containing heteroatoms with lone pairs ($\text{S}, \text{N}, \text{O}$). These transitions occur below $200\text{ nm}$ with low intensity.

### Instrumentation of UV-Visible Spectrophotometers

Modern UV-Vis instruments are typically double-beam spectrometers.
- **Components:** Light source (Tungsten filament lamp, Hydrogen-discharge lamp, or Xenon flash lamp), monochromator (prism or grating), sample and reference cells (cuvettes made of quartz or fused silica), beam splitter, and electronic detectors connected to a recorder.
- **Working Principle:** A light beam is split into two equal paths: one passing through the sample solution ($I$) and the other through a reference pure solvent ($I_0$). Solvents commonly used include water, ethanol, hexane, and cyclohexane.
- **Beer-Lambert Law Application:** The instrument measures the transmittance or absorbance ($A$), defined as:
  $$A = \log\left(\frac{I_0}{I}\right) = \varepsilon c l$$
  where $\varepsilon$ is the molar absorptivity, $c$ is concentration, and $l$ is path length.

![UV-VIS spectrophotometer setup diagram](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p007-1.webp)

> **Figure: UV-VIS spectrophotometer setup diagram**
>
> Schematic diagram of a UV-VIS spectrophotometer. It shows UV-VIS sources, a monochromator, beam splitter optics splitting the light into two paths with intensities I_0, passing through a vertical sample cuvette and a vertical reference cuvette respectively, then emerging with intensity I, passing through a detector, and connected to a computer display showing a graph of log(I_0/I) = A versus wavelength in nm, showing a curve with several peaks starting around 200 nm.

### Analytical Applications

1. **Identification of Functional Groups:** Detection of aromatic rings, conjugated dienes, and carbonyl compounds.
2. **Characterization of Dyes and Colorants:** Assessing extended $\text{}\pi$-system absorptions.
3. **Impurity Detection:** Identifying trace impurities, such as benzene in cyclohexane, via specific absorption bands (e.g., $255\text{ nm}$). ihrer
4. **Quantitative Estimation:** Determining unknown concentrations by comparing absorbance values against standard calibration curves.
5. **Reaction Kinetics:** Monitoring changes in absorption intensity over time to calculate reaction rates.
6. **Clinical Diagnostics:** Quantitative estimation of biological molecules like blood sugar and cholesterol through colorimetric assays.

<!-- page 4 | Infrared Spectroscopy and Vibrational Modes -->

## Infrared Spectroscopy and Vibrational Modes

Bridge: Having studied electronic transitions in UV-Vis, students now step down in energy to molecular vibrations studied via Infrared spectroscopy.

The new idea: Vibrational transitions require a change in dipole moment and provide direct identification of functional groups and bond strength.

### Fundamentals of IR Activity

When molecules absorb infrared radiation, they undergo transitions between quantized vibrational energy levels. For a molecular vibration to be IR active, there must be a net change in the dipole moment of the molecule during the vibration.

- **Heteronuclear Diatomic Molecules:** Molecules like $\text{HCl}$ undergo stretching vibrations where the internuclear distance changes, resulting in a fluctuating dipole moment. Hence, they are IR active.
- **Homonuclear Diatomic Molecules:** Molecules like $\text{H}_2, \text{O}_2,$ and $\text{N}_2$ possess no permanent dipole moment and exhibit no change in dipole moment during stretching. Therefore, they are vibrationally inactive.

![Symmetric Stretching of CO2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p008-1.webp)

![Asymmetric Stretching of CO2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p008-2.webp)

> **Figure: Symmetric Stretching of CO2**
>
> Diagram showing symmetric stretching of CO2. The molecule O=C=O has horizontal arrows pointing outwards from the outer oxygen atoms. Labels below read: Symmetric Stretching, No Change in dipole moment, IR inactive.

> **Figure: Asymmetric Stretching of CO2**
>
> Diagram showing asymmetric stretching of CO2. The molecule O=C=O has two parallel horizontal arrows pointing to the right. Labels below read: Asymetric Stretching, Change in dipole moment, IR active.

![Bending inplane of CO2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p008-3.webp)

> **Figure: Bending inplane of CO2**
>
> Diagram showing bending inplane of CO2. The molecule O=C=O has a vertical arrow pointing upwards from the central carbon atom and curved arrows at the ends. Labels below read: Bending inplane, Change in dipole moment, IR active.

![Bending out plane of CO2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p008-4.webp)

> **Figure: Bending out plane of CO2**
>
> Diagram showing bending out plane of CO2. The molecule O=C=O with diagonal arrows pointing outwards and upwards/downwards at the oxygen atoms. Labels below read: Bending out plane, Change in dipole moment, IR active.

### Vibrational Degrees of Freedom

For a nonlinear molecule containing $n$ atoms, the total degrees of freedom are $3n$. Accounting for translational and rotational motions, the number of fundamental vibrational modes is given by:
- **Linear Molecules:** $3n - 5$ degrees of freedom
- **Non-Linear Molecules:** $3n - 6$ degrees of freedom

#### Examples:
1. **Diatomic Linear Molecule ($\text{HCl}$):**
$$\text{Vibrational modes} = 3(2) - 5 = 1$$
This single mode is a stretching vibration.

2. **Triatomic Linear Molecule ($\text{CO}_2$):**
$$\text{Vibrational modes} = 3(3) - 5 = 4$$
These four modes consist of:
- Symmetric stretching (IR inactive, no dipole moment change)
- Asymmetric stretching (IR active, $2349\text{ cm}^{-1}$)
- Two degenerate bending modes in mutually perpendicular planes (IR active, $667\text{ cm}^{-1}$)

3. **Non-Linear Molecule ($\text{H}_2\text{O}$):**
$$\text{Vibrational modes} = 3(3) - 6 = 3$$
These three modes are symmetric stretching, asymmetric stretching, and a single bending vibration. During stretching vibrations, bond lengths change while bond angles remain constant; conversely, during bending vibrations, bond angles change while bond lengths remain constant.

![Vibrational modes of water molecule](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p009-1.webp)

> **Figure: Vibrational modes of water molecule**
>
> Vibrational modes of water molecule. Three chemical structure diagrams showing a central oxygen (O) atom bonded to two hydrogen (H) atoms in a bent geometry. The first diagram is labeled 'Symmetric stretching' with arrows pointing outwards along both O-H bonds away from the O atom. The second diagram is labeled 'Asymmetric stretching' with arrows pointing in asymmetric directions relative to the bonds. The third diagram is labeled 'Bending in plane' with curved double-headed arrows indicating in-plane bending motion of the two H atoms toward and away from each other.

### Force Constant and Diatom Vibrations

The fundamental frequency of vibration or wavenumber ($\bar{\nu}$) is directly proportional to the square root of the force constant $k$ (representing bond strength) and inversely proportional to the square root of the reduced mass $\mu$ of the vibrating atoms.

![Formulas for frequency, wave number, and force constant](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p009-2.webp)

> **Figure: Formulas for frequency, wave number, and force constant**
>
> Formulas displayed inside an image box for a diatomic molecule: Frequency, nu_0 = (1 / (2 * pi)) * sqrt(k / mu); Wave number, nu_bar = (1 / (2 * pi * c)) * sqrt(k / mu); Force constant, k = 4 * pi^2 * nu_0^2 * mu = 4 * pi^2 * c^2 * nu_bar^2 * mu. Below the formulas, text states: Where c is the velocity of light in vacuum (3 * 10^8 m/s) and mu is the reduced mass of atoms of masses m_1 and m_2 connected by a bond, mu = (m_1 * m_2) / (m_1 + m_2).

$$\nu_0 = \frac{1}{2\pi} \sqrt{\frac{k}{\mu}}$$

$$\bar{\nu} = \frac{1}{2\pi c} \sqrt{\frac{k}{\mu}}$$

$$\text{Force Constant } k = 4 \pi^2 \nu_0^2 \mu = 4 \pi^2 c^2 \bar{\nu}^2 \mu$$

Where:
- $c$ is the velocity of light in vacuum ($3 \times 10^8\text{ m/s}$)
- $\mu = \frac{m_1 m_2}{m_1 + m_2}$ is the reduced mass of atoms with masses $m_1$ and $m_2$

### Applications of IR Spectroscopy

1. **Identification of functional groups:** Characteristic absorption ranges allow easy detection of specific bonds, such as $˃\text{C}=\text{O}$ in saturated ketones ($1700-1725\text{ cm}^{-1}$) and $-\text{OH}$ in alcohols ($3300-3500\text{ cm}^{-1}$).

2. **Identification of unknown compounds:** By comparing the IR spectrum of an unknown substance with a reference compound, especially within the fingerprint region ($700-1500\text{ cm}^{-1}$) which houses complex skeletal bending and fluxional modes.

3. **Determination of purity:** Purity can be verified by cross-examining sample spectra against authentic reference profiles.

4. **Distinguishing Hydrogen Bonding:**
- **Intermolecular Hydrogen Bonding:** Found in molecules like $p$-hydroxy phenol, where association between distinct molecules weakens upon dilution, causing a measurable shift in absorption frequency.
- **Intramolecular Hydrogen Bonding:** Found in molecules like $o$-hydroxy phenol, where chelation occurs internally within the same molecule and remains unaffected by dilution.

![Intermolecular and intramolecular H-bonding](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p010-1.webp)

> **Figure: Intermolecular and intramolecular H-bonding**
>
> Figure 3.17 illustrating intermolecular and intramolecular hydrogen bonding. On the left and middle, two p-hydroxy phenol molecules are shown with intermolecular hydrogen bonding represented by dashed lines between the hydrogen of one molecule and oxygen of another. On the right, a single o-hydroxy phenol molecule is shown with intramolecular hydrogen bonding represented by a dashed line forming a closed loop structure between the adjacent OH groups.

<!-- page 5 | Thermal Analysis: TGA and DTA -->

## Thermal Analysis: TGA and DTA

Moving from spectroscopic radiation interactions, we now explore thermal methods that measure mass and heat changes as functions of temperature. Continuous monitoring of sample mass and temperature differential against an inert reference reveals decomposition kinetics and phase changes.

### Thermogravimetric Analysis (TGA)

Thermogravimetric analysis (TGA) is a technique in which the mass of a substance is monitored as a function of temperature, as the sample is heated from room temperature to a temperature as high as $1200\text{ }^\circ\text{C}$ in a controlled atmosphere. As the temperature increases, the sample may undergo physical or chemical changes accompanied by a mass loss.

![Block diagram of TGA apparatus](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p012-1.webp)

> **Figure: Block diagram of TGA apparatus**
>
> Figure 3.2: Block diagram of TGA apparatus showing a Temperature sensor connected to an Amplifier which is connected to a Computer. A dashed box encloses the Thermo balance, Thermal insulation, Temp. Programmable Furnace, and Sample Holder with inert atmosphere facility.

#### Instrumentation of TGA
The main components of a TGA apparatus are:
- Sample holder
- Furnace with temperature programming facility
- Thermobalance
- Temperature sensor
- Environment control equipment
- Detector and recorder

The sample to be analyzed (typically about $3\text{ mg}$) is placed in the sample holder, which is surrounded by a furnace with a programmable heating rate. Environment control equipment provides a suitable purge gas such as air, nitrogen, or helium. The sample holder is attached to a highly temperature-sensitive thermobalance, and a temperature sensor records the sample temperature. The signals are amplified and recorded as a thermogram (a plot of mass versus temperature).

#### Thermogram of Calcium Oxalate Monohydrate

![Thermogram of calcium oxalate](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p012-2.webp)

![Derivative thermogram of calcium oxalate monohydrate](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p013-2.webp)

> **Figure: Thermogram of calcium oxalate**
>
> Thermogram of calcium oxalate. A thermogravimetric analysis (TGA) graph of Weight (mg) versus Temperature (C) for CaC2O4.H2O. The curve shows steps corresponding to weight loss: starting with CaC2O4.H2O, passing 100 C, dropping to CaC2O4 + H2O, passing 226 C and 346 C, dropping to CaCO3 at 420 C, passing 660 C and 840 C, and finally reaching CaO at 980 C.

Thermogravimetric analysis can be used for the identification of inorganic compounds and polymers. For example, the thermogram of calcium oxalate monohydrate ($\text{CaC}_2\text{O}_4 \cdot \text{H}_2\text{O}$) exhibits distinct decomposition steps:
1. The substance is stable up to $100\text{ }^\circ\text{C}$.
2. The removal of water of hydration starts at $100\text{ }^\circ\text{C}$ and is completed at $226\text{ }^\circ\text{C}$.
3. The horizontal portion ranging from $226\text{ }^\circ\text{C}$ to $346\text{ }^\circ\text{C}$ shows the thermal stability of anhydrous calcium oxalate ($\text{CaC}_2\text{O}_4$).
4. Above $346\text{ }^\circ\text{C}$, anhydrous calcium oxalate decomposes to yield calcium carbonate ($\text{CaCO}_3$) and carbon monoxide ($\text{CO}$), completing around $420\text{ }^\circ\text{C}$.
5. The formed calcium carbonate is stable up to $660\text{ }^\circ\text{C}$. Above this temperature, it decomposes to yield calcium monoxide ($\text{CaO}$) and carbon dioxide ($\text{CO}_2$), with decomposition completing around $840\text{ }^\circ\text{C}$ to $980\text{ }^\circ\text{C}$.

#### TGA of Polymers

![TGA curves for various polymers](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p013-1.webp)

> **Figure: TGA curves for various polymers**
>
> A thermogravimetric analysis (TGA) graph showing Mass in mg on the y-axis ranging from 0 to 10 versus Temperature in degree Celsius on the x-axis ranging from 0 to 800. Curves for various polymers are labeled: PVC, PMMA, LDPE, PTFE, and PI. Experimental conditions noted on the plot: 10 mg, 5 degree C per minute, in N2.

Comparison of polymer TGA curves indicates varying thermal stabilities. For example, Poly(vinyl chloride) ($\text{PVC}$) starts decomposing at a lower temperature compared to Low-Density Polyethylene ($\text{LDPE}$) due to the elimination of $\text{HCl}$. Conversely, Poly(tetrafluoroethylene) ($\text{PTFE}$) displays high thermal stability owing to strong $\text{C-F}$ bonds relative to $\text{C-H}$ bonds.

#### Applications of TGA
- Provides both qualitative and quantitative information about decomposition reactions.
- Allows analysis of reactions with air, oxygen, or other reactive gases.
- Used to measure evaporation rates of liquid mixtures.

### Derivative Thermogravimetry (DTG)

Derivative thermogravimetry (DTG) represents the rate of change of mass with respect to temperature ($\frac{\Delta m}{\Delta T}$) plotted against temperature ($T$).

> **Figure: Derivative thermogram of calcium oxalate monohydrate**
>
> Figure 3.22: Derivative thermogram of calcium oxalate monohydrate. A graph with Sample temperature in degree Celsius on the x-axis from 0 to 1100. The left y-axis shows Sample weight in weight percentage from 30 to 110 (represented by a descending dashed step curve with plateaus and formulas: Ca(COO)2.H2O, Ca(COO)2, CaCO3, and CaO). The right y-axis shows Weight change (delta m / delta T) from -5 to 1 (represented by a solid curve featuring three distinct downward peaks corresponding to the decomposition stages).

Each downward peak on a DTG curve signifies the temperature at which the maximum rate of decomposition takes place, helping to resolve overlapping weight-loss steps.

---

### Differential Thermal Analysis (DTA)

#### Principle
In Differential Thermal Analysis (DTA), the material under study and an inert reference material (usually alumina, silicon carbide, or glass beads) are heated under identical conditions at a constant rate. The temperature difference ($\Delta T$) between the sample and the reference is plotted against the sample temperature ($T_s$).
- Endothermic processes (such as fusion, transition, and sublimation) are represented by downward peaks.
- Exothermic processes (such as crystallization or certain decompositions) are represented by upward peaks.

![DTA curve of calcium oxalate monohydrate](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p014-1.webp)

> **Figure: DTA curve of calcium oxalate monohydrate**
>
> Figure 3.23: DTA of calcium oxalate monohydrate (CaC2O4.H2O) in a current of air. A graph showing Differential temperature on the y-axis (Exothermic at the top, Endothermic at the bottom, zero in the middle) versus Sample temperature in °C on the x-axis (ranging from 0 to 900 with major marks at 100, 200, 300, 400, 500, 600, 700, 800, 900). The curve displays an endothermic downward peak around 200-300 °C labeled 'CaC2O4.H2O -> CaC2O4 + H2O', an exothermic sharp upward peak around 450-500 °C labeled '2CaC2O4 + O2 -> 2CaCO3 + 2CO2', and an endothermic downward valley around 700-800 °C labeled 'CaCO3 -> CaO + CO2'.

#### Instrumentation and Working

![Instrumentation block diagram for DTA](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p014-2.webp)

> **Figure: Instrumentation block diagram for DTA**
>
> Instrumentation block diagram for DTA showing a furnace containing a 'Reference' and a 'Sample'. Thermocouple 1 is connected to the reference/sample and leads to an 'Amplifier', which connects to a 'Computer'. Thermocouple 2 is connected to another 'Amplifier' and also to the 'Computer'. The 'Furnace' is connected to a 'Source of power' at the bottom, and an 'Environment control equipment' block is connected to the system.

Two thermocouples ($T_1$ and $T_2$) record the temperatures of the sample and the reference respectively. The differential signal is amplified and processed.

#### Applications of DTA
- Distinguishes between endothermic and exothermic processes.
- Studies the decomposition temperatures of inorganic solids.
- Estimates enthalpy changes of processes by measuring peak areas.

---

## Chromatographic Methods

Chromatography is an analytical technique used for separation based on distribution between two phases:
- **Stationary phase:** A fixed phase (e.g., column of adsorbent, paper, or thin film of liquid supported on an inert solid).
- **Mobile phase:** A moving liquid or gas that carries the analytes through the stationary phase.

### Classification of Chromatography
- **Adsorption Chromatography:** The stationary phase is a solid and the mobile phase is a liquid or gas. Separation occurs due to differences in adsorption coefficients.
- **Partition Chromatography:** The stationary phase is a liquid supported on an inert solid. The mobile phase is a liquid or gas. Separation is caused by partitioning of components between the phases.

<!-- page 6 | Chromatographic Methods: Gas Chromatography -->

## Chromatographic Methods: Gas Chromatography

### Bridge and Objectives
Having analyzed bulk thermal properties, students now transition to separation science for complex mixtures using chromatography. Components of a vaporized mixture partition between a mobile carrier gas and a stationary phase, separating based on interaction rates. The primary objectives of this section are to:
- Distinguish between stationary and mobile phases in adsorption and partition chromatography.
- Describe the instrumentation and working of Gas Chromatography (GC).
- Calculate and utilize retention time for component identification and purity testing.

### Principle of Gas Chromatography
Gas chromatography (GC) is a powerful analytical separation technique used to analyze volatile and semi-volatile substances in the gas phase. The fundamental principle relies on the distribution of sample components between two phases: a stationary phase (solid or liquid coated on a solid support) and a mobile phase (an inert carrier gas).

The separation of components depends upon the extent of adsorption or partition of the analytes with the stationary phase and the different rates at which the components are swept through the system by the mobile phase. Analytes with stronger interactions with the stationary phase are retained longer, whereas those with weaker interactions elute faster.

### Instrumentation

![Gas Chromatography schematic diagram](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p017-1.webp)

> **Figure: Gas Chromatography schematic diagram**
>
> Schematic diagram of a Gas Chromatography system showing a Carrier gas cylinder connected to a gas flow regulator, leading into a system with an injector port where a Sample is introduced via a syringe. The stream goes into a Column shaped as a coil inside an Oven. The output goes to a Detector, then to Waste, and is connected to a Computer/Data analysis unit displaying a chromatogram with peaks. Labels include Carrier gas, Gas flow regulator, Sample, Injector port, Column, Oven, Detector, Waste, and Computer/Data analysis.

Gas chromatography instrumentation comprises several core components designed to vaporize, transport, separate, and detect sample constituents:

1. **Carrier Gas:** The carrier gas flows continuously through the system, transporting the vaporized sample through the column. The gas must be completely inert, dry, and free of oxygen to prevent sample degradation and detector baseline instability. Commonly used carrier gases include Helium ($\text{He}$), Nitrogen ($\text{N}_2$), Argon ($\text{Ar}$), and Hydrogen ($\text{H}_2$), chosen based on the desired chromatographic performance and the type of detector employed.

2. **Sample Injection Port:** The carrier gas feeds from a pressurized gas cylinder through a flow regulator into the sample injection port. Because GC requires analytes to be in the gas phase, the injection port is maintained at an elevated temperature to ensure instantaneous vaporization. Liquid samples dissolved in a suitable volatile solvent are introduced via a micro-syringe through a septum. The vaporized sample mixes with the carrier gas stream and is swept directly onto the column.

3. **Chromatographic Columns:** The column is housed inside a temperature-controlled oven where component separation occurs via differential interactions with the stationary phase. Columns are broadly classified into two types:
   - *Capillary Columns:* Fabricated from long, narrow capillary tubing where the inner walls are coated with an extremely thin film of a liquid stationary phase (e.g., Carbowax 20M, a high-molecular-weight polyethylene glycol).
   - *Packed Columns:* Packed densely with either a solid porous powder substrate or an inert solid support (such as silica or alumina) coated uniformly with a liquid stationary phase.

4. **Detectors:** Positioned at the exit of the column, the detector measures the concentration of eluted components as they emerge mixed with the carrier gas. The electrical response is recorded as a function of time, generating a chromatogram. The two most common detectors are:
   - **Thermal Conductivity Detectors (TCD):** One of the earliest detectors, the TCD operates by continuously monitoring changes in the thermal conductivity of the gas stream. It utilizes two cells: a reference cell through which pure carrier gas flows, and a sample cell through which the column effluent passes. When a sample component elutes along with the carrier gas, the thermal conductivity changes relative to the pure reference gas, generating an electrical imbalance signal.
   - **Flame Ionization Detectors (FID):** The most widely used and generally applicable detector for organic compounds. The column effluent is mixed with hydrogen and air and directed into a burner, producing an air-hydrogen flame. At high flame temperatures, organic sample molecules undergo pyrolysis (thermal decomposition), releasing ions and electrons that conduct a measurable electrical current across a polarizing voltage bias. An electrometer measures this current to quantify the eluting sample.

### Experimental Procedure
1. A liquid or gaseous sample mixture is introduced into the heated injection port using a microsyringe.
2. The sample vaporizes rapidly and is swept into the chromatographic column by the continuous flow of the inert carrier gas.
3. As the mixture travels through the column, individual components partition or adsorb differentially between the mobile carrier gas and the stationary phase.
4. Due to varying interaction rates, components travel at different linear velocities and emerge from the column at characteristic, distinct times.
5. The detector records the elution of each component as an electrical signal, generating peaks on a chromatogram.

### Retention Time ($t_R$)

Retention time ($t_R$) is defined as the total time elapsed from the moment of sample injection to the time the solute peak reaches the detector.

$$\text{Retention Time} = t_R$$

Each specific compound possesses a characteristic retention time under constant operational conditions (carrier gas flow rate, column temperature, and stationary phase composition). Identification of an unknown component is achieved by comparing its measured GC retention time against the retention times of known reference standards run under identical conditions.

### Applications of Gas Chromatography
- **Purity Testing:** Used extensively in chemical synthesis to verify the purity of volatile organic compounds and detect trace impurities.
- **Clinical and Forensic Analysis:** Used to quantitatively determine blood alcohol concentration (BAC) in biological fluids.
- **Toxicological Screening:** Employed to detect banned performance-enhancing drugs and stimulants in athlete blood or urine samples.

<!-- page 7 | Scanning Electron Microscopy (SEM) -->

## Scanning Electron Microscopy (SEM)

Scanning Electron Microscopy (SEM) is an advanced surface characterization technique widely used in materials science and nanotechnology. Unlike optical microscopes that use visible light, an SEM produces high-resolution, three-dimensional images of a sample by rastering a focused beam of electrons across its surface.

### Principle of Operation

The fundamental principle of SEM involves directing a high-energy beam of electrons downward through a column under high vacuum, focusing it using electromagnetic lenses, and scanning it systematically across the sample surface.

$$\text{Electron Beam} + \text{Sample Surface} \rightarrow \text{Secondary Electrons (SE)} + \text{Backscattered Electrons (BSE)} + \text{X-rays}$$

When the incident electrons strike the sample, they undergo elastic and inelastic scattering events within the interaction volume. These interactions generate various signals, including secondary electrons (used primarily for surface topography), backscattered electrons (used for compositional contrast), and characteristic X-rays (used for elemental analysis). Detectors capture these signals and convert them into electrical impulses, which are mapped pixel by pixel on a display monitor to form a grayscale 3D image.

### Instrumentation

An SEM system consists of several critical components housed within a rigid framework:

* **Electron Gun (Source):** Generates the primary beam of electrons. A common source is a heated tungsten hairpin filament, though higher-end units use Field Emission Guns (FEG) for superior brightness and resolution.
* **Electromagnetic Lenses:** Comprises condenser lenses that shape and compress the electron beam into a tight, narrow stream, and objective lenses that finely focus the beam onto the sample.
* **Scan Coils:** Deflect the electron beam horizontally and vertically so it rasters across a rectangular area of the sample.
* **Sample Chamber & Vacuum System:** Maintains a high to ultra-high vacuum environment to ensure that electrons do not collide with gas molecules in the air, which would scatter the beam and distort the image.
* **Detectors:** Specialized sensors (such as Everhart-Thornley detectors for secondary electrons) that collect the emitted signals and amplify them for digital image processing.

![Diagram of a Scanning Electron Microscope (SEM)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/civil-mech/s1/chemistry/module-3/assets/p019-1.webp)

> **Figure: Diagram of a Scanning Electron Microscope (SEM)**
>
> Diagram of a Scanning Electron Microscope (SEM) showing components from top to bottom: Electron source, Anode, Condenser lens, Scan coils, Objective lens, and Sample. A secondary electron detector is shown on the left with dashed lines pointing to the point of impact on the sample. Four empty rectangular boxes are present adjacent to the condenser lens, scan coils, and anode.

### Applications and Limitations

**Applications:**
* **Topographical and Morphological Analysis:** Detailed examination of surface roughness, texture, particle shape, and size distributions.
* **Forensic Investigations:** Analysis of gunshot residues, fiber integrity, and fracture surfaces.
* **Biological Sciences:** Imaging fixed samples of bacteria, viruses, and cellular structures.
* **Microchip Design and Production:** Quality control and defect analysis in semiconductor fabrication.

**Disadvantages:**
* **Cost:** SEM instruments are extremely expensive to purchase, operate, and maintain.
* **Radiation Hazard:** Generates low levels of X-ray radiation during operation, requiring proper safety interlocks.
