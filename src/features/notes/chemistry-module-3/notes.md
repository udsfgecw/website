<!-- page 1 | Spectroscopy, radiation and molecular energy -->

## Spectroscopy, radiation and molecular energy

### Module learning route

This module moves from fundamental light–matter interactions to spectroscopy and instrumental analysis:

1. [Spectroscopy, radiation and molecular energy](#page-1)
2. [Transmittance, absorbance and the Beer–Lambert law](#page-2)
3. [Worked problems on absorbance and concentration](#page-3)
4. [UV–visible spectroscopy and electronic transitions](#page-4)
5. [Conjugation and predicting molecular transitions](#page-5)
6. [UV–visible spectrophotometer: instrument and applications](#page-6)
7. [Infrared absorption and types of vibration](#page-7)
8. [Counting vibrations: carbon dioxide, water and HCN](#page-8)
9. [Bond vibrations and force-constant calculations](#page-9)
10. [Reading IR spectra and studying hydrogen bonding](#page-10)
11. [Dielectric thermal analysis: principle, instrument and uses](#page-11)
12. [Scanning electron microscopy: signals, instrument and uses](#page-12)
13. [Revision sheet and practice problems](#page-13)

### Interaction of radiation with matter

Spectroscopy studies how electromagnetic radiation interacts with atoms, ions, and molecules. Many spectroscopic methods provide rapid analysis with small samples. Whether the sample can be recovered depends on preparation, radiation exposure and the technique.

Electromagnetic radiation consists of oscillating electric and magnetic fields characterised by wavelength ($\lambda$), frequency ($\nu$), or wavenumber ($\bar{\nu} = 1/\lambda$). The energy $E$ of a single photon is directly proportional to frequency and inversely proportional to wavelength:

$$
E = h\nu = \frac{hc}{\lambda} = hc\bar{\nu}
$$

where $h$ is Planck's constant ($6.626 \times 10^{-34}\text{ J s}$), $c$ is the speed of light in vacuum ($3.00 \times 10^8\text{ m s}^{-1}$), $\nu$ is frequency in hertz ($\text{Hz}$ or $\text{s}^{-1}$), $\lambda$ is wavelength (commonly in $\text{m}$ or $\text{nm}$), and $\bar{\nu}$ is wavenumber (commonly in $\text{cm}^{-1}$). Use compatible length units: with $c$ in $\text{m s}^{-1}$, convert wavelength to metres or wavenumber to $\text{m}^{-1}$. Across the electromagnetic spectrum from radio waves through microwaves, infrared (IR), visible, ultraviolet (UV), X-rays, to gamma rays, wavelength decreases while frequency and photon energy increase.

When radiation meets matter, three main processes occur:

* **Absorption:** An atom or molecule transitions from a lower energy state ($E_1$) to a higher energy state ($E_2$) by absorbing a photon whose energy matches the gap, $\Delta E = E_2 - E_1 = h\nu$. Examples include UV–visible, IR, microwave, and nuclear magnetic resonance (NMR) spectroscopy.
* **Emission:** A species transitions from a higher energy state ($E_2$) to a lower energy state ($E_1$) by releasing a photon of energy $\Delta E = h\nu$. Examples include atomic emission and fluorescence spectroscopy.
* **Scattering:** Radiation is redirected by a sample without necessarily undergoing direct resonant absorption. **Raman spectroscopy** is based on *inelastic light scattering*, where scattered photons gain or lose vibrational or rotational energy.

![Qualitative energy level diagram for absorption showing an upward transition from a lower state to a higher state upon absorbing a photon](/notes/cse/s1/chemistry/module-3/assets/page-002-image-1-structured.svg)
*Figure 1a: Qualitative schematic of photon absorption driving an upward transition from a lower to a higher energy state.*

![Qualitative energy level diagram for emission showing a downward transition from a higher state to a lower state releasing a photon](/notes/cse/s1/chemistry/module-3/assets/page-002-image-2-structured.svg)
*Figure 1b: Qualitative schematic of photon emission during relaxation from a higher to a lower energy state.*

> **Watch out.** Transitions occur between any permitted *lower* and *higher* energy states that satisfy selection rules—not exclusively between the absolute lowest and highest levels of a molecule. Furthermore, Raman spectroscopy is an inelastic scattering technique rather than an emission process, and atomic force microscopy (AFM) is a mechanical scanning probe imaging method, not optical emission spectroscopy.

### Molecular energy levels and the Born–Oppenheimer approximation

A molecule stores energy in different degrees of freedom. **Translational energy** ($E_{\text{trans}}$) arises from the movement of the molecule's centre of mass through space. Because translational levels in macroscopic containers are so closely spaced that they form a virtual continuum, we separate external translation from internal quantised states. Under the Born–Oppenheimer approximation, total internal molecular energy ($E_{\text{int}}$) is the sum of electronic, vibrational, and rotational contributions:

$$
E_{\text{int}} \approx E_{\text{ele}} + E_{\text{vib}} + E_{\text{rot}}
$$

Each internal mode corresponds to a specific type of motion and spectral region:

| Energy Level Type | Physical Origin | Typical Spectral Region | Typical Units Used | Key Requirement |
| :--- | :--- | :--- | :--- | :--- |
| **Electronic ($\Delta E_{\text{ele}}$)** | Promotion of bonding or non-bonding electrons between molecular orbitals | Ultraviolet–visible (UV–vis) | Wavelength in $\text{nm}$ ($200\text{–}800\text{ nm}$) | Chromophore / suitable orbitals |
| **Vibrational ($\Delta E_{\text{vib}}$)** | Periodic stretching and bending of bonds with fixed centre of mass | Infrared (IR) | Wavenumber in $\text{cm}^{-1}$ ($400\text{–}4000\text{ cm}^{-1}$) | Change in dipole moment during vibration |
| **Rotational ($\Delta E_{\text{rot}}$)** | Rotation of the molecule about an axis through its centre of mass | Microwave | Wavenumber in $\text{cm}^{-1}$ or frequency in $\text{GHz}$ | Permanent electric dipole moment |

The typical energy spacings between adjacent states follow a clear hierarchy:

$$
\Delta E_{\text{ele}} > \Delta E_{\text{vib}} > \Delta E_{\text{rot}} \gg \Delta E_{\text{trans}}
$$

![Qualitative diagram of nested electronic, vibrational, and rotational energy levels in a molecule](/notes/cse/s1/chemistry/module-3/assets/page-028-image-1-clean.svg)
*Figure 2: Qualitative diagram of nested molecular energy levels. Each electronic state contains multiple vibrational levels ($v$), and each vibrational level contains closely spaced rotational levels ($J$). Spacing is schematic and not drawn to scale.*

### Atomic versus molecular spectra

* **Atomic spectra** arise from electronic transitions between discrete atomic orbitals in isolated atoms. Because isolated atoms lack chemical bonds, they have no vibrational or rotational sublevels, giving **line spectra** in the isolated-atom limit; real lines can broaden.
* **Molecular spectra** in the UV–visible region involve electronic transitions accompanied by simultaneous changes in vibrational and rotational states. In solution, closely spaced sub-transitions merge due to solvent collisions and thermal broadening, producing broad **band spectra**.

### Self-check questions

1. **Question:** Why does a gaseous atom produce sharp spectral lines whereas a molecule in solution produces broad UV–visible absorption bands?
   **Answer:** Atoms undergo only electronic transitions between discrete levels. Molecules have vibrational and rotational sublevels nested within each electronic state; simultaneous transitions across these sublevels, combined with collisional broadening in solution, merge individual lines into broad bands.
2. **Question:** Arrange microwave, ultraviolet, and infrared radiation in order of increasing photon energy and state the molecular transition each promotes.
   **Answer:** Microwave (rotational transitions) $<$ infrared (vibrational transitions) $<$ ultraviolet (electronic transitions).

<!-- page 2 | Transmittance, absorbance and the Beer–Lambert law -->

## Transmittance, absorbance and the Beer–Lambert law

When a beam of electromagnetic radiation passes through a sample solution, molecules absorb photons whose energies match allowed internal transitions. Consequently, the intensity of the emerging beam is lower than that of the entering beam. Quantitative absorption spectroscopy measures this attenuation to determine how much absorbing substance is present.

### Transmittance and Absorbance

Consider a parallel beam of monochromatic radiation with incident intensity $I_0$ passing through a sample cell (cuvette) of path length $l$ containing an absorbing solution of molar concentration $c$. The radiation emerges with transmitted intensity $I$.

![Incident radiation I0 passing through a cuvette of path length x and concentration c, emerging with transmitted intensity I](/notes/cse/s1/chemistry/module-3/assets/page-004-image-3-structured.svg)
*Figure 1: Attenuation of an incident light beam ($I_0$) passing through an absorbing solution of concentration $c$ and path length $x$ (or $l$).*

**Transmittance ($T$)** is the fraction of incident radiation that successfully passes through the sample:

$$
T = \frac{I}{I_0}
$$

Because $T$ is a ratio of two intensities, it is dimensionless and ranges from $0$ (complete absorption) to $1$ (no absorption). Instrument readouts often express this value as **percentage transmittance ($\%T$)**:

$$
\%T = 100 \times T = \frac{I}{I_0} \times 100
$$

Transmittance decreases exponentially as concentration or path length increases. To obtain a parameter that scales linearly with concentration, we define **absorbance ($A$)** (historically called optical density) as the base-10 logarithm of the reciprocal of transmittance:

$$
A = \log_{10}\left(\frac{I_0}{I}\right) = -\log_{10} T
$$

To convert directly from percentage transmittance to absorbance, substitute $T = \%T / 100$:

$$
A = -\log_{10}\left(\frac{\%T}{100}\right) = \log_{10}(100) - \log_{10}(\%T) = 2 - \log_{10}(\%T)
$$

Like transmittance, absorbance is a dimensionless quantity.

### The Beer–Lambert Law and its Derivation

The **Beer–Lambert law** combines Lambert's observation ( attenuation depends on path length) and Beer's observation (attenuation depends on concentration). It states that when a parallel beam of monochromatic radiation passes through a homogeneous, non-scattering, dilute solution, the rate of decrease in radiation intensity ($-dI$) with respect to an infinitesimal thickness of the medium ($dl$) is directly proportional to both the local intensity $I$ and the molar concentration $c$ of the absorbing species.

> **Watch out.** Many introductory notes state that the Beer–Lambert law applies only to "coloured" solutions. In reality, the law applies to any absorbing species—including colourless solutions that absorb strongly in the ultraviolet (UV) or infrared (IR) regions.

We can derive the integrated law through the following steps:

1. Write the differential rate of intensity loss across a thin layer $dl$:
   $$
   -\frac{dI}{dl} \propto I c \implies -\frac{dI}{dl} = k c I
   $$
   where $k$ is a proportionality constant dependent on the wavelength and the nature of the absorbing molecule.

2. Separate the variables so that intensity terms are on the left and path length is on the right:
   $$
   -\frac{dI}{I} = k c \, dl
   $$

3. Integrate both sides across the entire cuvette, from incident intensity $I_0$ at the entrance ($l = 0$) to transmitted intensity $I$ at the exit ($l = l$):
   $$
   \int_{I_0}^{I} -\frac{dI}{I} = \int_{0}^{l} k c \, dl
   $$

4. Evaluate the integrals using natural logarithms:
   $$
   \ln\left(\frac{I_0}{I}\right) = k c l
   $$

5. Convert the natural logarithm to a base-10 logarithm using the relation $\ln(x) = \ln(10) \log_{10}(x) \approx 2.303 \log_{10}(x)$:
   $$
   \log_{10}\left(\frac{I_0}{I}\right) = \left(\frac{k}{\ln 10}\right) c l = \left(\frac{k}{2.303}\right) c l
   $$

6. Define the **molar absorption coefficient** (or molar absorptivity) as $\varepsilon = k / \ln 10$ and substitute $A = \log_{10}(I_0 / I)$:
   $$
   A = \varepsilon c l
   $$

Note that some texts and figures use $x$ instead of $l$ to denote the cuvette path length ($A = \varepsilon c x$).

### Units of the Molar Absorption Coefficient ($\varepsilon$)

The value of $\varepsilon$ depends on the absorbing species, wavelength, solvent and measurement conditions, measuring how strongly it absorbs radiation. Because absorbance $A$ is dimensionless, the units of $\varepsilon$ must cancel the units of concentration $c$ and path length $l$ ($\varepsilon = A / (c l)$). Two conventions appear in coursework:

| Convention | Concentration ($c$) | Path Length ($l$ or $x$) | Unit of $\varepsilon$ | Numerical Relationship |
| :--- | :--- | :--- | :--- | :--- |
| Standard Spectroscopy | $\text{mol L}^{-1}$ (or $\text{M}$) | $\text{cm}$ | $\text{L mol}^{-1} \text{cm}^{-1}$ | $\varepsilon_{\text{cm}}$ |
| Decimetre Convention | $\text{mol dm}^{-3}$ | $\text{dm}$ ($1\text{ dm} = 10\text{ cm}$) | $\text{dm}^2 \text{mol}^{-1}$ | $\varepsilon_{\text{dm}} = 10 \times \varepsilon_{\text{cm}}$ |

> **Watch out.** Because $1\text{ L} = 1\text{ dm}^3$, expressing path length in decimetres ($\text{dm}$) simplifies the dimensional algebra ($\text{dm}^3 \text{mol}^{-1} \text{dm}^{-1} = \text{dm}^2 \text{mol}^{-1}$), which is why exam problems often use it. However, dividing by $0.1\text{ dm}$ instead of $1\text{ cm}$ makes the numerical value of $\varepsilon$ in $\text{dm}^2 \text{mol}^{-1}$ exactly $10$ times larger than the standard value in $\text{L mol}^{-1} \text{cm}^{-1}$. Always state your chosen path-length unit explicitly.

### Calibration Plots, Blanks, and Unknown Concentrations

For a fixed cell thickness $l$, plotting absorbance $A$ on the y-axis against molar concentration $c$ on the x-axis for a series of standard solutions yields a straight line described by $A = (\varepsilon l)c$.

![Calibration plot of absorbance A against concentration C showing a straight line through the origin with slope epsilon x](/notes/cse/s1/chemistry/module-3/assets/page-006-image-1-structured.svg)
*Figure 2: Ideal Beer–Lambert calibration plot of absorbance ($A$) versus concentration ($C$), with slope equal to $\varepsilon x$ (or $\varepsilon l$).*

Ideally, this line passes through the origin $(0,0)$ with a slope equal to $\varepsilon l$. Once the calibration line is established, you can measure the absorbance of an unknown solution under identical conditions and read its concentration directly from the graph, or compare it with a single standard using the ratio:

$$
\frac{A_1}{A_2} = \frac{c_1}{c_2} = \frac{-\log_{10} T_1}{-\log_{10} T_2}
$$

In practice, the solvent itself and the cuvette walls reflect or absorb a small fraction of the incident beam. Before measuring samples, the analyst zeros the spectrophotometer using a **blank**—an identical cuvette filled with pure solvent and any reagents except the analyte. Solvents are not universally transparent at all wavelengths; rather, blanking establishes a baseline correction to reduce solvent, reagent and cell contributions; interfering absorbers may still contribute. If minor baseline drift, cuvette mismatch, or reagent background remains, practical calibration fits follow a linear equation with a small non-zero y-intercept ($A = \varepsilon l c + b$).

### Assumptions and Limitations (Deviations from Linearity)

The linear relationship $A = \varepsilon c l$ holds strictly only when specific physical, instrumental, and chemical conditions are met:

* **Monochromatic radiation:** The incident beam must consist of a sufficiently narrow wavelength band where $\varepsilon$ is constant. Using polychromatic light or experiencing instrumental **stray light** causes negative deviations from linearity at high absorbance.
* **Dilute solutions:** At sufficiently high concentrations, with the threshold depending on the species and medium, solute molecules are close enough that electrostatic interactions alter their charge distributions and change $\varepsilon$. Refractive index changes also occur.
* **Homogeneous, non-scattering medium:** The sample must be clear. Suspended particulates or turbidity scatter light away from the detector, causing artificially high apparent absorbance.
* **Chemical stability:** The absorbing species must not undergo concentration-dependent chemical equilibria—such as acid–base dissociation, association, dimerisation, or complexation—that shift the proportion of absorbing molecules as dilution changes.

### Self-Check Questions

1. **Question:** A solution transmits $25\%$ of incident monochromatic light at $450\text{ nm}$. What is its absorbance?
   **Answer:** Using $A = 2 - \log_{10}(\%T)$, we get $A = 2 - \log_{10}(25) = 2 - 1.398 = 0.602$.

2. **Question:** Why does a calibration curve often bend downwards at high analyte concentrations?
   **Answer:** At high concentrations, solute–solute interactions alter $\varepsilon$, chemical equilibria may shift, and instrumental stray light sets an upper limit on measurable absorbance.

<!-- page 3 | Worked problems on absorbance and concentration -->

## Worked problems on absorbance and concentration

### Strategy for Beer–Lambert Law Calculations

Quantitative spectrophotometry relies on the linear relationship between absorbance ($A$) and molar concentration ($c$) for dilute, homogeneous solutions measured with monochromatic light:

$$
A = \varepsilon c x
$$

Here, $\varepsilon$ is the molar absorption coefficient and $x$ is the optical path length of the sample cell (cuvette). When solving numerical problems, keep three physical principles in mind:

1. **Higher absorbance means higher concentration, but lower transmittance.** A more concentrated solution absorbs more photons, so less transmitted light ($I$) reaches the detector relative to the incident beam ($I_0$). Therefore, as concentration increases, absorbance ($A$) increases while fractional transmittance ($T = I/I_0$) decreases.
2. **Never confuse transmitted intensity with transmittance.** Intensity ($I$) is radiative power per unit area, whereas fractional transmittance ($T = I/I_0$) is a dimensionless ratio between $0$ and $1$, often expressed as percentage transmittance ($\%T = 100 \times T$). Because absorbance is logarithmic:

$$
A = \log_{10}\left(\frac{I_0}{I}\right) = -\log_{10}(T) = \log_{10}\left(\frac{100}{\%T}\right)
$$

3. **Ratio methods eliminate constants under identical conditions.** When a standard solution of known concentration ($c_1$) and an unknown sample ($c_2$) of the same chemical species are measured at the same wavelength, temperature, and solvent environment inside identical cuvettes (same $\varepsilon$ and $x$), the constants cancel out:

$$
\frac{A_1}{A_2} = \frac{c_1}{c_2} = \frac{-\log_{10}(T_1)}{-\log_{10}(T_2)} = \frac{\log_{10}(T_1)}{\log_{10}(T_2)}
$$

| Quantity | Symbol | Common Laboratory Unit | Decimetre-Consistent Unit |
| :--- | :--- | :--- | :--- |
| Absorbance | $A$ | Dimensionless | Dimensionless |
| Fractional transmittance | $T$ | Dimensionless ($0 \le T \le 1$) | Dimensionless ($0 \le T \le 1$) |
| Concentration | $c$ | $\text{mol L}^{-1}$ ($\text{M}$) or $\text{ppm}$ | $\text{mol dm}^{-3}$ |
| Path length | $x$ | $\text{cm}$ | $\text{dm}$ ($1\text{ cm} = 0.1\text{ dm}$) |
| Molar absorption coefficient | $\varepsilon$ | $\text{L mol}^{-1}\text{ cm}^{-1}$ | $\text{dm}^2\text{ mol}^{-1}$ |

> **Watch out.** Do not mix centimetres and decimetres when calculating $\varepsilon$. Because $1\text{ M} = 1\text{ mol L}^{-1} = 1\text{ mol dm}^{-3}$, keeping $x$ in $\text{cm}$ gives $\varepsilon$ in $\text{L mol}^{-1}\text{ cm}^{-1}$. Converting $x$ into $\text{dm}$ ($1\text{ cm} = 0.1\text{ dm}$) changes the numerical value of $\varepsilon$ by a factor of $10$ and gives units of $\text{dm}^2\text{ mol}^{-1}$ (since $\text{dm}^3\text{ mol}^{-1}\text{ dm}^{-1} = \text{dm}^2\text{ mol}^{-1}$, never $\text{dm}^3\text{ mol}^{-1}$).

---

### Step-by-Step Worked Examples

#### Example 1: Calculating absorbance and molar absorption coefficient from percentage transmittance

**Problem:** The percentage transmittance of a $0.01\text{ M}$ dye solution in ethanol is $20\%$ in a $2\text{ cm}$ cell for monochromatic light of wavelength $5000\text{ \AA}$. Calculate the absorbance and the molar absorption coefficient in both $\text{L mol}^{-1}\text{ cm}^{-1}$ and $\text{dm}^2\text{ mol}^{-1}$.

**Solution:**

1. **Identify the given data and convert units:**
   * Concentration, $c = 0.01\text{ M} = 0.01\text{ mol L}^{-1} = 0.01\text{ mol dm}^{-3}$
   * Path length, $x = 2\text{ cm} = 0.2\text{ dm}$
   * Wavelength, $\lambda = 5000\text{ \AA} = 5000 \times 10^{-10}\text{ m} = 500\text{ nm}$ (fixes the value of $\varepsilon$ for this transition, though $\lambda$ does not enter the arithmetic directly)
   * Percentage transmittance, $\%T = 20\%$, so fractional transmittance $T = \frac{20}{100} = 0.20$ (meaning for $I_0 = 100$ arbitrary intensity units, $I = 20$ units pass through)

2. **Calculate the absorbance ($A$):**

$$
A = \log_{10}\left(\frac{I_0}{I}\right) = \log_{10}\left(\frac{100}{20}\right) = \log_{10}(5) = 0.69897
$$

3. **Calculate the molar absorption coefficient ($\varepsilon$) in standard laboratory units ($\text{L mol}^{-1}\text{ cm}^{-1}$):**
   Using $c = 0.01\text{ mol L}^{-1}$ and $x = 2\text{ cm}$:

$$
\varepsilon = \frac{A}{c x} = \frac{0.69897}{0.01\text{ mol L}^{-1} \times 2\text{ cm}} = 34.9485\text{ L mol}^{-1}\text{ cm}^{-1} \approx 34.95\text{ L mol}^{-1}\text{ cm}^{-1}
$$

4. **Express $\varepsilon$ in decimetre-consistent units ($\text{dm}^2\text{ mol}^{-1}$):**
   Using $c = 0.01\text{ mol dm}^{-3}$ and $x = 0.2\text{ dm}$:

$$
\varepsilon = \frac{A}{c x} = \frac{0.69897}{0.01\text{ mol dm}^{-3} \times 0.2\text{ dm}} = 349.485\text{ dm}^2\text{ mol}^{-1} \approx 349.5\text{ dm}^2\text{ mol}^{-1}
$$

**Answer:** The absorbance is $0.699$ (dimensionless), and the molar absorption coefficient is $34.95\text{ L mol}^{-1}\text{ cm}^{-1}$ (or $349.5\text{ dm}^2\text{ mol}^{-1}$).

---

#### Example 2: Finding an unknown concentration by direct absorbance ratio

**Problem:** A standard dye solution of concentration $0.04\text{ M}$ shows an absorbance of $0.045$ at $530\text{ nm}$, while a test solution of the same dye shows an absorbance of $0.022$ under identical conditions (same cuvette and temperature). Find the concentration of the test solution.

**Solution:**

1. **State the given quantities:**
   * Standard concentration, $c_1 = 0.04\text{ M}$
   * Standard absorbance, $A_1 = 0.045$
   * Test absorbance, $A_2 = 0.022$
   * Measurement wavelength, $\lambda = 530\text{ nm}$

2. **Apply the Beer–Lambert law to both solutions:**
   Because the same dye is measured at the same wavelength ($530\text{ nm}$) in the same cuvette, both $\varepsilon$ and $x$ are identical for the two measurements:

$$
\frac{A_1}{A_2} = \frac{\varepsilon c_1 x}{\varepsilon c_2 x} = \frac{c_1}{c_2}
$$

3. **Solve for the unknown concentration ($c_2$):**

$$
c_2 = c_1 \times \frac{A_2}{A_1} = 0.04\text{ M} \times \frac{0.022}{0.045} = 0.019556\text{ M} \approx 0.0196\text{ M}
$$

   Notice that the test solution has a lower absorbance than the standard ($0.022 < 0.045$), confirming physically that it must be more dilute ($0.0196\text{ M} < 0.04\text{ M}$).

**Answer:** The concentration of the test dye solution is $0.0196\text{ M}$.

---

#### Example 3: Colorimetric determination of $\text{Fe}^{3+}$ from fractional transmittance

**Problem:** A $50\text{ ppm}$ standard solution of $\text{Fe}^{3+}$, after developing a red complex with excess ammonium thiocyanate ($\text{NH}_4\text{SCN}$), shows a fractional transmittance of $0.2$ at $620\text{ nm}$. An unknown $\text{Fe}^{3+}$ solution treated identically shows a fractional transmittance of $0.4$ at the same wavelength in the same cell. Calculate the concentration of the unknown $\text{Fe}^{3+}$ solution. *(Note: One course note transcription states $620\text{ nm}$ while another states $640\text{ nm}$; the arithmetic is independent of the numerical wavelength provided both standard and sample are measured at the exact same chosen wavelength.)*

**Solution:**

1. **Understand the chemical and optical conditions:**
   A colour-developing reagent ($\text{SCN}^-$) is added in excess under controlled conditions to form strongly absorbing red iron(III)–thiocyanate complexes. Calibration relates their response to the analytical iron concentration. Merely adding the same volume of reagent is not enough by itself; the reagent must be in sufficient excess, with identical matrix conditions and proper blank calibration, so that the complex speciation and effective $\varepsilon$ remain constant across both solutions.

2. **List the given values:**
   * Standard concentration, $c_1 = 50\text{ ppm}$
   * Standard fractional transmittance, $T_1 = 0.2$
   * Unknown fractional transmittance, $T_2 = 0.4$

3. **Relate concentration to fractional transmittance:**
   Since $A = -\log_{10}(T) = \varepsilon c x$ and $\varepsilon x$ is constant across both measurements:

$$
\frac{c_2}{c_1} = \frac{A_2}{A_1} = \frac{-\log_{10}(T_2)}{-\log_{10}(T_1)} = \frac{\log_{10}(T_2)}{\log_{10}(T_1)}
$$

4. **Substitute the values and compute $c_2$:**

$$
c_2 = 50\text{ ppm} \times \frac{\log_{10}(0.4)}{\log_{10}(0.2)} = 50\text{ ppm} \times \frac{-0.39794}{-0.69897} = 50\text{ ppm} \times 0.56932 = 28.466\text{ ppm} \approx 28.47\text{ ppm}
$$

> **Watch out.** Never take a direct linear ratio of transmittances ($c_2 \neq c_1 \times \frac{T_2}{T_1}$). Concentration is proportional to absorbance ($-\log_{10} T$), not to $T$. Furthermore, because the unknown transmits more light ($T_2 = 0.4 > T_1 = 0.2$), it absorbs less light and must be less concentrated than the $50\text{ ppm}$ standard ($28.47\text{ ppm} < 50\text{ ppm}$).

**Answer:** The concentration of the unknown $\text{Fe}^{3+}$ solution is $28.47\text{ ppm}$. Mass-concentration ratios are valid here because the standard and unknown use the same concentration basis; calculating a *molar* absorption coefficient requires molar concentration.

---

### Self-Check Questions

1. **Question:** Solution X has $\%T = 10\%$ and Solution Y of the same solute in the same cuvette has $\%T = 50\%$. Which solution is more concentrated, and by what factor?
   **Answer:** Solution X is more concentrated because it transmits less light ($A_X = \log_{10}(100/10) = 1.000$ vs $A_Y = \log_{10}(100/50) = 0.3010$). It is $\frac{1.000}{0.3010} = 3.32$ times as concentrated as Solution Y.

2. **Question:** Why is the molar absorption coefficient $\varepsilon = 34.95\text{ L mol}^{-1}\text{ cm}^{-1}$ numerically equal to $349.5\text{ dm}^2\text{ mol}^{-1}$?
   **Answer:** Because $1\text{ L} = 1\text{ dm}^3$ and $1\text{ cm} = 0.1\text{ dm}$, substituting these into the unit expression gives $1\text{ L mol}^{-1}\text{ cm}^{-1} = 1\text{ dm}^3\text{ mol}^{-1} (0.1\text{ dm})^{-1} = 10\text{ dm}^2\text{ mol}^{-1}$.

<!-- page 4 | UV–visible spectroscopy and electronic transitions -->

## UV–visible spectroscopy and electronic transitions

Ultraviolet–visible (UV–vis) spectroscopy is an absorption technique that measures how molecules interact with electromagnetic radiation in the ultraviolet and visible regions. Because photons in these regions carry sufficient energy to promote valence electrons from lower-energy ground-state orbitals to higher-energy excited-state orbitals, a UV–vis absorption spectrum is also called an **electronic spectrum**. It is typically recorded as a plot of absorbance ($A$) or molar absorptivity ($\varepsilon$) against wavelength ($\lambda$, in $\text{nm}$).

For practical laboratory work, the spectral region is divided into three zones:
* **Far (or vacuum) UV region ($< 200\text{ nm}$):** High-energy ultraviolet light. Air absorption and optical-material transmission become limiting at short wavelengths; deeper vacuum-UV work needs suitable vacuum or purge arrangements and compatible optics.
* **Near UV region ($200\text{–}400\text{ nm}$):** Quartz optics and standard laboratory air allow easy operation.
* **Visible region ($400\text{–}800\text{ nm}$):** Perceived by the human eye; a compound appears coloured if it selectively absorbs visible wavelengths, transmitting the complementary colour.

A common introductory UV–visible working window is **$200\text{–}800\text{ nm}$**; actual instrument coverage varies and can extend beyond it.

### Molecular orbitals and electronic transitions

When a molecule absorbs a photon of energy $\Delta E$, an introductory orbital description promotes an electron from an occupied molecular orbital to an unoccupied antibonding orbital:

$$
\Delta E = \frac{hc}{\lambda}
$$

where $h$ is Planck's constant ($6.626 \times 10^{-34}\text{ J s}$), $c$ is the speed of light ($3.00 \times 10^8\text{ m s}^{-1}$), and $\lambda$ is the absorbed wavelength.

Ground-state valence electrons occupy three main types of orbitals:
1. **Sigma ($\sigma$) bonding orbitals:** Strongly held electrons forming single covalent bonds.
2. **Pi ($\pi$) bonding orbitals:** More loosely held electrons in double or triple bonds.
3. **Non-bonding ($n$) orbitals:** Unshared lone-pair electrons on heteroatoms such as oxygen, nitrogen, sulphur, or halogens.

Unoccupied higher-energy orbitals are the **antibonding orbitals**, denoted $\pi^*$ (pi-star) and $\sigma^*$ (sigma-star). In a simplified textbook energy ordering, orbital energies typically increase as $\sigma < \pi < n < \pi^* < \sigma^*$, leading to four principal electronic transitions:

$$
\Delta E(\sigma \to \sigma^*) > \Delta E(n \to \sigma^*) > \Delta E(\pi \to \pi^*) > \Delta E(n \to \pi^*)
$$

This relative energy ranking is a helpful heuristic rather than a universal law; exact orbital energies depend on the specific atoms and bonding geometry.

### The four principal transition types

* **$\sigma \to \sigma^*$ transitions:** An electron in a bonding $\sigma$ orbital is excited to the corresponding $\sigma^*$ orbital. Because $\sigma$ bonds are very strong, this requires high photon energy, with absorption peaks falling deep in the far-UV region (typically below $150\text{ nm}$). Saturated hydrocarbons like methane ($\text{CH}_4$), ethane ($\text{C}_2\text{H}_6$), and cyclohexane exhibit only $\sigma \to \sigma^*$ transitions and are transparent in the routine $200\text{–}800\text{ nm}$ window.
* **$n \to \sigma^*$ transitions:** Saturated compounds containing heteroatoms with lone pairs (such as alcohols, amines, ethers, and alkyl halides) can promote a non-bonding $n$ electron into a $\sigma^*$ orbital. These require less energy than $\sigma \to \sigma^*$ promotions and typically occur between $150\text{ nm}$ and $250\text{ nm}$. Depending on the heteroatom and structure, the absorption peak may lie in the far UV (e.g., methanol or methylamine below $200\text{ nm}$) or extend into the near-UV region above $200\text{ nm}$ (e.g., iodoalkanes).
* **$\pi \to \pi^*$ transitions:** Found in molecules with unsaturated centres (alkenes, alkynes, carbonyls, aromatics). Isolated double bonds absorb in the far UV (ethene absorbs near $169\text{ nm}$), whereas conjugated $\pi$ systems absorb comfortably within the $200\text{–}800\text{ nm}$ routine window. Most $\pi \to \pi^*$ transitions are symmetry-allowed by quantum-mechanical selection rules, yielding intense absorption bands ($\varepsilon_{\max} \approx 10^3\text{–}10^5\text{ L mol}^{-1}\text{ cm}^{-1}$). However, not every $\pi \to \pi^*$ band is strong; for instance, benzene shows a weak symmetry-forbidden $\pi \to \pi^*$ band around $255\text{ nm}$ alongside much stronger bands at shorter wavelengths.
* **$n \to \pi^*$ transitions:** Occur in unsaturated functional groups that also possess heteroatom lone pairs, such as aldehydes, ketones, carboxylic acids, esters, and nitro compounds. In many simple carbonyl molecules, $n \to \pi^*$ transitions have low electric-dipole transition probabilities under the relevant symmetry selection rules. "Forbidden" does not mean impossible; molecular vibrations distort symmetry enough for weak absorption to occur ($\varepsilon_{\max} \approx 10\text{–}100\text{ L mol}^{-1}\text{ cm}^{-1}$), usually at longer wavelengths ($200\text{–}400\text{ nm}$) than the accompanying $\pi \to \pi^*$ band.

| Transition | Required structural feature | Typical examples | Typical spectral region | Relative intensity |
| :--- | :--- | :--- | :--- | :--- |
| $\sigma \to \sigma^*$ | Saturated single bonds ($\sigma$) | $\text{CH}_4$, ethane, cyclohexane | Far UV ($< 150\text{ nm}$) | Strong (outside routine window) |
| $n \to \sigma^*$ | Single bonds + heteroatom lone pairs | $\text{CH}_3\text{OH}$, $\text{CH}_3\text{NH}_2$, ethers | Far UV to near UV ($150\text{–}250\text{ nm}$) | Moderate to weak |
| $\pi \to \pi^*$ | Multiple bonds ($\pi$ system) | Ethene, 1,3-butadiene, benzene | Far UV (isolated) to $200\text{–}800\text{ nm}$ (conjugated) | Usually strong (allowed); occasionally weak |
| $n \to \pi^*$ | Multiple bond + heteroatom lone pair | Acetone, ethanal, carboxylic acids | Near UV / visible ($200\text{–}800\text{ nm}$) | Weak (symmetry-forbidden) |

> **Watch out.** Textbooks often call $\sigma \to \sigma^*$ and $n \to \sigma^*$ transitions "UV–vis inactive" simply because their peaks often fall below $200\text{ nm}$. These transitions still absorb ultraviolet radiation in the far-UV region; they are merely outside the $200\text{–}800\text{ nm}$ operating range of standard benchtop instruments.

### Chromophores, auxochromes and spectral shifts

* **Chromophore:** A structural moiety responsible for absorbing electromagnetic radiation in a given spectral region. While the word historically meant "colour-bearer", in UV–vis spectroscopy a chromophore need not impart visible colour—many absorb solely in the ultraviolet (e.g., $\text{C=C}$, $\text{C=O}$, $-\text{NO}_2$, $-\text{N=N}-$, and benzene rings; even $\sigma$ bonds act as far-UV chromophores).
* **Auxochrome:** A saturated substituent with non-bonding lone pairs (such as $-\text{OH}$, $-\text{OR}$, $-\text{NH}_2$, or $-\text{NR}_2$) that does not produce significant UV–vis absorption above $200\text{ nm}$ on its own, but modifies the absorption wavelength and intensity when attached directly to a chromophore. By extending the $\pi$ system through $n\text{–}\pi$ resonance (conjugation) or inductive effects, an auxochrome usually shifts absorption to longer wavelengths and increases band intensity, though protonation or solvent hydrogen bonding can reverse this effect.

Each distinct absorption band is characterised by its **wavelength of maximum absorbance ($\lambda_{\max}$)**, which is the wavelength at the peak of that specific band and depends on both molecular structure and solvent polarity. Chemical substitution or solvent changes can produce four independent types of shift:

* **Bathochromic shift (red shift):** Shift of $\lambda_{\max}$ to a longer wavelength (lower energy).
* **Hypsochromic shift (blue shift):** Shift of $\lambda_{\max}$ to a shorter wavelength (higher energy).
* **Hyperchromic effect:** An increase in absorption intensity ($\varepsilon_{\max}$).
* **Hypochromic effect:** A decrease in absorption intensity ($\varepsilon_{\max}$).

### Self-check questions

1. **Question:** Which electronic transitions can occur in propanone (acetone, $\text{CH}_3\text{COCH}_3$), and which one occurs at the longest wavelength?
   **Answer:** Propanone contains $\sigma$ bonds, a $\text{C=O}$ $\pi$ bond, and oxygen lone pairs ($n$), so it exhibits $\sigma \to \sigma^*$, $n \to \sigma^*$, $\pi \to \pi^*$, and $n \to \pi^*$ transitions. The $n \to \pi^*$ transition has the smallest energy gap ($\Delta E$) and therefore occurs at the longest wavelength.
2. **Question:** Why is the $n \to \pi^*$ absorption band of an aldehyde much weaker than its $\pi \to \pi^*$ band?
   **Answer:** For a simple carbonyl chromophore, the relevant symmetry selection rules make the $n \to \pi^*$ electric-dipole transition weak; vibronic coupling can give it intensity, resulting in a low transition probability and low molar absorptivity ($\varepsilon_{\max}$).

<!-- page 5 | Conjugation and predicting molecular transitions -->

## Conjugation and predicting molecular transitions

### Effect of conjugation on absorption wavelength

When two or more multiple bonds alternate with single bonds (such as $-\text{CH}=\text{CH}-\text{CH}=\text{CH}-$), their $\pi$ orbitals overlap across the intervening single bonds. This delocalization spreads the $\pi$ electrons over a larger molecular framework and creates a set of closely spaced $\pi$ bonding and $\pi^*$ antibonding molecular orbitals.

In a comparable series of conjugated polyenes, delocalization generally narrows the separation between the highest occupied molecular orbital (HOMO) and lowest unoccupied molecular orbital (LUMO). Consequently, the energy gap $\Delta E$ for the lowest-energy $\pi \rightarrow \pi^*$ transition decreases. Because photon energy and wavelength are inversely related,

$$
\Delta E = \frac{hc}{\lambda}
$$

where $h$ is Planck's constant ($\text{J}\cdot\text{s}$), $c$ is the speed of light ($\text{m}\cdot\text{s}^{-1}$), and $\lambda$ must be in metres when this value of $c$ is used, a smaller energy gap shifts the absorption maximum ($\lambda_{\max}$) to a longer wavelength (a bathochromic or red shift).

Consider the series of linear conjugated alkenes (approximate $\lambda_{\max}$ values depend on solvent and phase):
* **Ethene** ($\text{CH}_2=\text{CH}_2$, 1 double bond, 2 $\pi$ molecular orbitals): $\lambda_{\max} \approx 169\text{ nm}$ (vacuum UV region).
* **1,3-Butadiene** ($\text{CH}_2=\text{CH}-\text{CH}=\text{CH}_2$, 2 conjugated double bonds, 4 $\pi$ molecular orbitals): $\lambda_{\max} \approx 217\text{ nm}$ (near-UV region).
* **1,3,5-Hexatriene** ($\text{CH}_2=\text{CH}-\text{CH}=\text{CH}-\text{CH}=\text{CH}_2$, 3 conjugated double bonds, 6 $\pi$ molecular orbitals): $\lambda_{\max} \approx 250\text{ nm}$ (often cited around $247\text{--}258\text{ nm}$ depending on geometry and medium).

If conjugation extends over many double bonds, $\Delta E$ becomes small enough for the molecule to absorb visible light ($400\text{--}800\text{ nm}$), giving the compound colour. For example, **lycopene**—the red carotenoid pigment in tomatoes—contains 11 conjugated carbon–carbon double bonds. It exhibits multiple strong visible absorption bands (with a solvent-dependent main maximum near $470\text{--}505\text{ nm}$ in the blue-green region), transmitting red light to the eye.

> **Watch out.** Do not place benzene ($\text{C}_6\text{H}_6$) at the end of the linear polyene sequence simply by citing its $255\text{ nm}$ band. Cyclic aromatic delocalization gives benzene degenerate frontier orbitals and three distinct absorption bands: an intense allowed band at $184\text{ nm}$, a medium band at $204\text{ nm}$, and a weak symmetry-forbidden band near $255\text{ nm}$. Comparing a forbidden aromatic transition directly with the strongly allowed $\pi \rightarrow \pi^*$ band of an open-chain polyene or cyclic diene is misleading.

### Predicting electronic transitions from molecular structure

To determine which electronic transitions a molecule can undergo, inspect its chemical bonds and valence lone pairs:

1. **Identify $\sigma$ bonds:** Organic molecules contain $\sigma$ bonds, including the $\sigma$ component of multiple bonds, and therefore have $\sigma$ and $\sigma^*$ orbitals capable of $\sigma \rightarrow \sigma^*$ transitions (requiring high-energy vacuum-UV radiation below $150\text{ nm}$, outside the standard $200\text{--}800\text{ nm}$ UV–visible instrument range).
2. **Identify $\pi$ bonds:** Any molecule with double or triple bonds ($\text{C}=\text{C}$, $\text{C}\equiv\text{C}$, $\text{C}=\text{O}$, or aromatic rings) possesses $\pi$ and $\pi^*$ orbitals, enabling $\pi \rightarrow \pi^*$ transitions; their intensity depends on selection rules and molecular symmetry.
3. **Identify non-bonding ($n$) lone pairs:** Heteroatoms such as oxygen, nitrogen, sulphur, or halogens carry lone-pair electrons in $n$ orbitals:
   * If the heteroatom is bonded only via single bonds (e.g., alcohols, ethers, aliphatic amines), it can undergo $n \rightarrow \sigma^*$ transitions (typically below $200\text{ nm}$) in addition to $\sigma \rightarrow \sigma^*$.
   * If the heteroatom is directly part of a multiple bond, such as the carbonyl oxygen in aldehydes, ketones, or carboxylic acids ($\text{C}=\text{O}$), the molecule has both $\pi^*$ and $\sigma^*$ acceptor orbitals. It can exhibit low-energy, symmetry-forbidden (weak) $n \rightarrow \pi^*$ transitions alongside intense $\pi \rightarrow \pi^*$, $n \rightarrow \sigma^*$, and $\sigma \rightarrow \sigma^*$ transitions.

> **Watch out.** Distinguish between *all possible* electronic transitions and *symmetry-allowed* transitions, and check chemical names carefully. Handwritten notes often mislabel $\text{CH}_3\text{COCH}_3$ as "propanol"; $\text{CH}_3\text{COCH}_3$ is **propanone (acetone)**, a ketone with $n \rightarrow \pi^*$ and $\pi \rightarrow \pi^*$ transitions, whereas propanol ($\text{CH}_3\text{CH}_2\text{CH}_2\text{OH}$) is a saturated alcohol lacking $\pi^*$ orbitals. Furthermore, in **aniline** ($\text{C}_6\text{H}_5\text{NH}_2$) and **phenol** ($\text{C}_6\text{H}_5\text{OH}$), the heteroatom lone pair is on a substituent attached to the benzene ring and can delocalize into the aromatic $\pi$ system (giving coupled $\pi \rightarrow \pi^*$ bands with partial charge-transfer character) rather than acting as an isolated carbonyl-type $n \rightarrow \pi^*$ chromophore.

### Summary of orbitals and transitions in common organic compounds

| Compound | Formula / Structure | Key Functional Group | Occupied Valence Orbitals | Possible Electronic Transitions | Standard UV–Vis ($200\text{--}800\text{ nm}$) Activity |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Ethane** | $\text{CH}_3-\text{CH}_3$ | Alkane ($\text{C}-\text{C}, \text{C}-\text{H}$) | $\sigma$ | $\sigma \rightarrow \sigma^*$ | Main absorption in the far UV, outside the routine range |
| **Pentane** | $\text{CH}_3(\text{CH}_2)_3\text{CH}_3$ | Alkane ($\text{C}-\text{C}, \text{C}-\text{H}$) | $\sigma$ | $\sigma \rightarrow \sigma^*$ | Main absorption in the far UV, outside the routine range |
| **Ethene** | $\text{CH}_2=\text{CH}_2$ | Isolated alkene ($\text{C}=\text{C}$) | $\sigma, \pi$ | $\sigma \rightarrow \sigma^*, \pi \rightarrow \pi^*$ | $\lambda_{\max} \approx 169\text{ nm}$ (vacuum UV) |
| **1,3-Butadiene** | $\text{CH}_2=\text{CH}-\text{CH}=\text{CH}_2$ | Conjugated diene | $\sigma, \pi$ | $\sigma \rightarrow \sigma^*, \pi \rightarrow \pi^*$ | Active (intense $\pi \rightarrow \pi^*$ at $\approx 217\text{ nm}$) |
| **1,3,5-Hexatriene** | $\text{CH}_2=\text{CH}-\text{CH}=\text{CH}-\text{CH}=\text{CH}_2$ | Conjugated triene | $\sigma, \pi$ | $\sigma \rightarrow \sigma^*, \pi \rightarrow \pi^*$ | Active (intense $\pi \rightarrow \pi^*$ at $\approx 250\text{ nm}$) |
| **1-Butyne** | $\text{HC}\equiv\text{C}-\text{CH}_2\text{CH}_3$ | Alkyne ($\text{C}\equiv\text{C}$) | $\sigma, \pi$ | $\sigma \rightarrow \sigma^*, \pi \rightarrow \pi^*$ | Mostly $<200\text{ nm}$ (weak tail near $180\text{ nm}$) |
| **Benzene** | $\text{C}_6\text{H}_6$ | Aromatic ring | $\sigma, \pi$ | $\sigma \rightarrow \sigma^*, \pi \rightarrow \pi^*$ | Active ($204\text{ nm}$ and weak $255\text{ nm}$ bands) |
| **Ethanol** | $\text{CH}_3\text{CH}_2\text{OH}$ | Alcohol ($-\text{OH}$) | $\sigma, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*$ | Little absorption above its solvent cutoff (about $210\text{ nm}$) |
| **Methoxymethane** | $\text{CH}_3-\text{O}-\text{CH}_3$ | Ether ($-\text{O}-$) | $\sigma, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*$ | Main absorption below the routine wavelength range |
| **Propanone (Acetone)** | $\text{CH}_3-\text{CO}-\text{CH}_3$ | Ketone carbonyl ($\text{C}=\text{O}$) | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*, \pi \rightarrow \pi^*, n \rightarrow \pi^*$ | Active (allowed $\pi \rightarrow \pi^*$ near $190\text{ nm}$; forbidden $n \rightarrow \pi^*$ near $280\text{ nm}$) |
| **Benzaldehyde** | $\text{C}_6\text{H}_5-\text{CHO}$ | Conjugated aryl aldehyde | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*, \pi \rightarrow \pi^*, n \rightarrow \pi^*$ | Active (strong $\pi \rightarrow \pi^*$ and weak $n \rightarrow \pi^*$) |
| **Benzoic acid** | $\text{C}_6\text{H}_5-\text{COOH}$ | Aryl carboxylic acid | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*, \pi \rightarrow \pi^*, n \rightarrow \pi^*$ | Active (conjugated aromatic/carbonyl bands) |
| **Salicylic acid** | $o\text{-HO}-\text{C}_6\text{H}_4-\text{COOH}$ | Phenolic carboxylic acid | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*, \pi \rightarrow \pi^*, n \rightarrow \pi^*$ | Active (strong UV bands above $200\text{ nm}$) |
| **Aniline** | $\text{C}_6\text{H}_5-\text{NH}_2$ | Aromatic amine | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*$, coupled aryl $\pi \rightarrow \pi^*$ ($n$-delocalized) | Active (lone pair conjugates with ring $\pi^*$ orbitals) |
| **Phenol** | $\text{C}_6\text{H}_5-\text{OH}$ | Aromatic alcohol (phenol) | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*$, coupled aryl $\pi \rightarrow \pi^*$ ($n$-delocalized) | Active (lone pair conjugates with ring $\pi^*$ orbitals) |

### Worked concept examples

#### Example 1: Classifying electronic transitions in ethane, ethanol, and propanone

**Problem:** Identify the valence orbitals and the principal introductory electronic-transition assignments for (a) ethane, (b) ethanol, and (c) propanone (acetone), and identify which require relatively high or low photon energy.

**Solution:**
* **(a) Ethane ($\text{CH}_3-\text{CH}_3$):**
  * *Structure analysis:* Saturated hydrocarbon with only $\text{C}-\text{C}$ and $\text{C}-\text{H}$ single bonds; no $\pi$ bonds and no lone pairs.
  * *Transition:* $\sigma \rightarrow \sigma^*$ only (highest energy gap).
* **(b) Ethanol ($\text{CH}_3\text{CH}_2\text{OH}$):**
  * *Structure analysis:* Contains single bonds ($\sigma, \sigma^*$) and oxygen lone pairs ($n$), but no $\pi$ or $\pi^*$ orbitals.
  * *Transitions and energy order:* $n \rightarrow \sigma^* < \sigma \rightarrow \sigma^*$.
* **(c) Propanone ($\text{CH}_3-\text{CO}-\text{CH}_3$):**
  * *Structure analysis:* Contains single bonds ($\sigma, \sigma^*$), a carbonyl double bond ($\pi, \pi^*$), and oxygen lone pairs ($n$).
  * *Assignments:* The carbonyl $n \rightarrow \pi^*$ band is relatively low-energy and weak; the $\pi \rightarrow \pi^*$ band is at higher energy and usually much stronger. Higher-energy excitations involving $\sigma^*$ orbitals also occur. Detailed ordering of every excitation is molecule-dependent.

#### Example 2: Ordering conjugated polyenes by absorption wavelength

**Problem:** Arrange ethene, 1,3,5-hexatriene, and 1,3-butadiene in order of (a) decreasing excitation energy $\Delta E$ and (b) increasing absorption maximum $\lambda_{\max}$ for their lowest-energy $\pi \rightarrow \pi^*$ transition.

**Solution:**
1. Count the conjugated double bonds in each linear alkene: ethene has 1, 1,3-butadiene has 2, and 1,3,5-hexatriene has 3.
2. Increasing conjugation delocalizes the $\pi$ electrons and narrows the HOMO–LUMO energy gap $\Delta E$. Therefore, the order of decreasing $\Delta E$ is:
   $$
   \text{ethene} > 1,3\text{-butadiene} > 1,3,5\text{-hexatriene}
   $$
3. Since $\lambda_{\max} = hc / \Delta E$, wavelength increases in the exact opposite order:
   $$
   \text{ethene } (\approx 169\text{ nm}) < 1,3\text{-butadiene } (\approx 217\text{ nm}) < 1,3,5\text{-hexatriene } (\approx 250\text{ nm})
   $$

### Self-check questions

1. **Question:** Why is ethanol suitable as a solvent for measuring the UV spectrum of 1,3-butadiene above $210\text{ nm}$?
   **Answer:** High-purity ethanol absorbs relatively little above its approximate $210\text{ nm}$ UV cutoff. A matched solvent blank is still needed, and the usable wavelength depends on solvent purity and instrument performance.
2. **Question:** Which transitions occur in benzaldehyde ($\text{C}_6\text{H}_5\text{CHO}$) above $200\text{ nm}$, and how do their intensities compare?
   **Answer:** Benzaldehyde shows an intense, symmetry-allowed $\pi \rightarrow \pi^*$ transition and a weak, symmetry-forbidden $n \rightarrow \pi^*$ transition from the conjugated carbonyl group.

<!-- page 6 | UV–visible spectrophotometer: instrument and applications -->

## UV–visible spectrophotometer: instrument and applications

A UV–visible spectrophotometer measures how much ultraviolet and visible light a sample absorbs as a function of wavelength. Double-beam instruments are widely used in analytical laboratories because they continuously compare the sample against a reference blank, compensating for fluctuations in lamp intensity and detector response.

### Optical path and working principle

In a standard double-beam dispersive spectrophotometer, radiation travels from the source to the readout through a sequence of optical and electronic stages:

1. **Radiation generation:** A continuous light source emits polychromatic radiation across the ultraviolet ($200\text{--}400\text{ nm}$) or visible ($400\text{--}800\text{ nm}$) region.
2. **Wavelength selection:** The polychromatic beam enters a monochromator, which disperses the light and isolates a narrow wavelength band ($\lambda$) through an exit slit.
3. **Beam splitting:** A beam splitter or rotating mirror (chopper) divides the monochromatic beam into two paths: a reference beam and a sample beam.
4. **Sample and reference transmission:** One beam passes through the reference cell (containing the blank solvent and reagents), leaving with transmitted intensity $I_0$. The other passes through the sample cell (containing the dissolved analyte), leaving with transmitted intensity $I$.
5. **Detection:** Depending on the instrument design, either a single detector receives both beams alternately via a chopper, or a matched pair of detectors measures the two beams simultaneously, converting optical intensity into electrical current.
6. **Ratio electronics and amplification:** An amplifier and ratio circuit compare $I$ against $I_0$, correcting for any baseline instrument drift or calibrated asymmetry between the two optical paths.
7. **Readout and recording:** The processor computes absorbance and plots it against wavelength to generate the UV–visible spectrum.

$$
A = \log_{10}\left(\frac{I_0}{I}\right)
$$

Here, $A$ is dimensionless absorbance, $I_0$ is the intensity transmitted through the reference cell ($\text{W m}^{-2}$), and $I$ is the intensity transmitted through the sample cell ($\text{W m}^{-2}$).

![Plot of absorbance on the vertical axis versus wavelength on the horizontal axis showing a smooth absorption peak.](/notes/cse/s1/chemistry/module-3/assets/page-013-image-1-clean.svg)
*Figure: A representative UV–visible absorption spectrum plotting absorbance against wavelength, with peak absorption occurring at $\lambda_{\max}$.*

### Instrument components

| Component | Materials / Types | Purpose and Operating Constraints |
| :--- | :--- | :--- |
| **Radiation source** | Deuterium ($\text{D}_2$) or hydrogen ($\text{H}_2$) discharge lamp (UV); Tungsten–halogen filament lamp (visible); Xenon flash lamp (broadband UV–vis) | Provides stable, continuous radiation. Gas discharge lamps use an electrical arc through gas, not a heated filament. |
| **Monochromator** | Entrance slit, dispersing prism or diffraction grating, and exit slit | Spatially separates polychromatic light into constituent wavelengths and selects a narrow spectral bandwidth. |
| **Beam splitter** | Half-silvered mirror or rotating sector mirror | Directs monochromatic light into reference and sample paths. Exact $50:50$ splitting is unnecessary because electronics calibrate the baseline ratio. |
| **Sample and reference cells (cuvettes)** | Fused quartz or silica (UV and visible); Optical glass or suitable plastic (within the specified transmission range) | Holds liquid solutions with a fixed path length (typically $1\text{ cm}$). Cells must be optically matched, clean, and chemically inert. |
| **Detector** | Photomultiplier tube (PMT), silicon photodiode, or photodiode array (PDA) | Converts incident photons into a proportional electrical signal with high sensitivity and fast response. |

> **Watch out.** Check the cuvette’s specified UV transmission range. Ordinary optical glass and many plastics absorb strongly at shorter UV wavelengths. Fused quartz is commonly used; specially rated UV-transparent plastics are also available for suitable wavelength and solvent ranges.

### Role of the reference blank and solvent

A reference blank is not optically empty; the solvent, dissolved reagents, and cuvette walls all reflect, scatter, and absorb small amounts of light. Placing a matched cuvette filled with the pure solvent (and any non-analyte reagents) in the reference beam sets the baseline $I_0$. This reduces background contributions, but other absorbing species in the sample can still interfere. Additionally, every solvent has a characteristic **UV cutoff wavelength** below which it absorbs too strongly to allow accurate measurements, so analysts must choose a solvent that is transparent in the region of interest.

> **Watch out.** Do not assume that UV–visible spectroscopy alone can uniquely identify an unknown compound or reveal all of its functional groups. Because electronic absorption bands are broad, UV–visible spectra mainly indicate conjugated $\pi$ systems and chromophores ($\pi \rightarrow \pi^*$ and $n \rightarrow \pi^*$ transitions) and must be combined with IR or NMR data for full structural determination.

### Applications of UV–visible spectroscopy

- **Quantitative concentration analysis:** By measuring absorbance at $\lambda_{\max}$ and constructing a Beer–Lambert calibration curve from standard solutions, unknown concentrations of absorbing species are accurately determined.
- **Reaction kinetics:** Monitoring the increase in product absorbance or decrease in reactant absorbance over time allows direct calculation of reaction rates and rate constants.
- **Characterisation of dyes and pigments:** Evaluating $\lambda_{\max}$ and molar absorptivity helps characterise synthetic dyes, indicators, and coloured coordination complexes.
- **Purity checking and quality control:** Unexpected absorption bands or deviations from a standard molar absorptivity value reveal UV-absorbing impurities in solvents or pharmaceutical raw materials (for example, detecting benzene traces in ethanol or cyclohexane).
- **Supporting structural analysis:** Observing shifts in $\lambda_{\max}$ helps confirm the presence and extent of conjugated $\pi$-electron systems and carbonyl chromophores.
- **Clinical and biochemical colorimetric assays:** Compounds that lack strong chromophores in the convenient visible range—such as blood glucose or cholesterol—are quantified by reacting them with specific enzymatic or chemical reagents to form a coloured derivative whose absorbance is proportional to concentration.

### Self-check questions

1. **Why are deuterium lamps called discharge lamps rather than filament lamps?**
   *Answer:* Deuterium (and xenon) lamps produce light by passing an electrical arc through a gas under pressure to excite gas molecules, whereas a tungsten lamp heats a solid metal filament to incandescence.
2. **What happens to the measured absorbance at a given wavelength if the analyte does not absorb light there ($I = I_0$)?**
   *Answer:* Since $I = I_0$, the ratio $I_0/I = 1$, and $A = \log_{10}(1) = 0$.

<!-- page 7 | Infrared absorption and types of vibration -->

## Infrared absorption and types of vibration

### Principle of infrared (IR) spectroscopy

Infrared (IR) spectroscopy—also known as vibrational spectroscopy—studies the interaction of infrared radiation with matter. For the ordinary molecular systems studied here, mid-IR absorption mainly probes vibrational energy gaps rather than valence-electron excitation. when a molecule absorbs infrared radiation of a matching resonant frequency, it is promoted from a lower quantized vibrational energy level to a higher vibrational energy level (accompanied by rotational transitions in gases).

Under the harmonic oscillator approximation, fundamental vibrational absorption occurs when the vibrational quantum number changes by one unit:

$$
\Delta v = +1
$$

where $v$ is the vibrational quantum number ($v = 0, 1, 2, \dots$). Real molecules are anharmonic, meaning weak overtone transitions ($\Delta v = +2, +3, \dots$) can also appear at higher wavenumbers.

Although the complete infrared region spans roughly $12\,800\text{ cm}^{-1}$ to $10\text{ cm}^{-1}$ (divided into near-, mid-, and far-IR), standard chemical analysis uses the **mid-infrared region**, which conventionally covers wavenumbers from $4000\text{ cm}^{-1}$ to $400\text{ cm}^{-1}$.

### Selection rule: condition for IR activity

Not every molecular vibration absorbs infrared radiation. For a specific vibrational mode to be **IR active**, the electric dipole moment of the molecule must change during that vibration:

$$
\left(\frac{\partial \mu_d}{\partial Q}\right)_0 \neq 0
$$

where $\mu_d$ is the molecular dipole moment and $Q$ is the normal coordinate of the vibration.

Why is a changing dipole moment required? Infrared radiation consists of an oscillating electric field. A vibration can only couple with and absorb energy from this electromagnetic wave if the atomic motion produces an oscillating electric dipole of the exact same frequency.

* **Homonuclear diatomic molecules** ($\text{H}_2$, $\text{N}_2$, $\text{O}_2$, $\text{Cl}_2$, $\text{F}_2$) have symmetrical electron distributions both at equilibrium and throughout their single stretching vibration. Because their dipole moment remains zero at all bond lengths, they have no electric-dipole-allowed fundamental IR absorption and are **IR inactive**.
* **Heteronuclear diatomic molecules** ($\text{HCl}$, $\text{HBr}$, $\text{HI}$, $\text{CO}$) have unequal charge distribution. As the bond stretches and compresses, the dipole moment changes, making their vibration **IR active**.
* **Polyatomic molecules** ($\text{CO}_2$, $\text{H}_2\text{O}$, $\text{HCN}$, $\text{CH}_4$, $\text{C}_6\text{H}_6$) possess multiple vibrational modes. Activity is evaluated mode by mode.

> **Watch out.** A molecule does **not** need a permanent dipole moment at equilibrium to show an IR spectrum, nor are all vibrations of a polyatomic molecule automatically IR active. For example, linear $\text{CO}_2$ is nonpolar overall ($\mu_d = 0$ at rest), yet its asymmetric stretch and bending modes distort symmetry to create a temporary dipole moment, making them IR active. Conversely, the symmetric stretch of $\text{CO}_2$ preserves symmetry ($\Delta \mu_d = 0$) and is IR inactive.

### Reading the IR spectrum plot

An infrared spectrum is typically plotted with **percentage transmittance ($\%T$)** on the vertical axis against **wavenumber ($\bar{\nu}$, in $\text{cm}^{-1}$)** on the horizontal axis, usually running from high wavenumber ($4000\text{ cm}^{-1}$) on the left to low wavenumber ($400\text{ cm}^{-1}$) on the right.

![Schematic IR spectrum showing percentage transmittance on the vertical axis versus wavenumber on the horizontal axis with downward absorption dips](/notes/cse/s1/chemistry/module-3/assets/page-044-image-1-clean.svg)
*Figure: Schematic representation of an IR spectrum plotting percentage transmittance ($\%T$) against wavenumber ($\text{cm}^{-1}$), where absorption bands appear as downward troughs.*

Where the sample absorbs IR energy at a resonant vibrational frequency, less light passes through to the detector, producing a **downward dip (trough)** in $\%T$. (If plotted using absorbance $A$ on the vertical axis, absorptions appear as upward peaks.)

The mid-IR spectrum is conventionally divided into two approximate diagnostic zones (though some functional-group vibrations overlap across the boundary):

1. **Functional group region ($\approx 4000\text{--}1500\text{ cm}^{-1}$):** Contains characteristic stretching vibrations of specific functional groups (such as $\text{-OH}$, $\text{-NH}_2$, $\text{C=O}$, and $\text{C}\equiv\text{N}$).
2. **Fingerprint region ($\approx 1500\text{--}400\text{ cm}^{-1}$):** Contains complex bending vibrations and single-bond stretches ($\text{C-C}$, $\text{C-O}$, $\text{C-N}$) that form a characteristic pattern useful for comparison with reference spectra.

### Normal modes and types of molecular vibrations

In a polyatomic molecule, vibrations occur as **normal modes**—coordinated motions in which a group of atoms or the entire molecule oscillates at a single characteristic frequency without shifting the centre of mass. While complex molecules experience coupled skeletal motions, many vibrations can be qualitatively described using localized group motions divided into **stretching** and **bending**.

![Flowchart classifying molecular vibrations into symmetric and asymmetric stretching, and in-plane (scissoring, rocking) and out-of-plane (wagging, twisting) bending](/notes/cse/s1/chemistry/module-3/assets/page-045-image-1-clean.svg)
*Figure: Classification of fundamental molecular vibrations into stretching and bending modes using a three-atom group.*

| Category | Subtype | Plane of motion | Description of atomic motion |
| :--- | :--- | :--- | :--- |
| **Stretching** | **Symmetric stretching** | Along bond axes | Two or more bonds connected to a central atom lengthen or shorten simultaneously in phase. |
| **Stretching** | **Asymmetric stretching** | Along bond axes | One bond lengthens while another bond connected to the same central atom shortens. |
| **Bending (Deformation)** | **Scissoring** | In-plane | Two atoms attached to a central atom move toward and away from each other like scissor blades, changing the bond angle. |
| **Bending (Deformation)** | **Rocking** | In-plane | The structural unit swings back and forth as a whole within the molecular plane without changing the internal angle between the two outer bonds. |
| **Bending (Deformation)** | **Wagging** | Out-of-plane | Both outer atoms move simultaneously forward (+ out of plane) and then backward ($-$ behind plane) relative to the central atom. |
| **Bending (Deformation)** | **Twisting** | Out-of-plane | One outer atom moves forward (+ out of plane) while the other moves backward ($-$ behind plane), twisting the group around the central atom. |

For a given chemical group, stretching a covalent bond generally requires more energy than deforming a bond angle, so stretching vibrations usually occur at higher wavenumbers than the corresponding bending vibrations. How to count the exact number of normal modes and predict how many bands appear in the spectrum is covered in the next section.

### Self-check questions

1. **Why is $\text{N}_2$ gas transparent to mid-infrared radiation whereas $\text{HCl}$ gas strongly absorbs it?**
   *Answer:* $\text{N}_2$ is a homonuclear diatomic molecule whose dipole moment remains zero throughout bond stretching ($\Delta \mu_d = 0$), making it IR inactive. $\text{HCl}$ is heteronuclear, and stretching its polar bond changes its dipole moment ($\Delta \mu_d \neq 0$), making it IR active.

2. **What is the difference between wagging and twisting vibrations?**
   *Answer:* Both are out-of-plane bending vibrations, but in wagging both attached atoms move to the same side of the plane together, whereas in twisting one atom moves above the plane while the other moves below it.

<!-- page 8 | Counting vibrations: carbon dioxide, water and HCN -->

## Counting vibrations: carbon dioxide, water and HCN

### Degrees of Freedom and Vibrational Modes

Every atom in a molecule can move along three mutually perpendicular Cartesian axes ($x$, $y$, and $z$). A molecule containing $N$ atoms therefore possesses a total of $3N$ degrees of freedom describing all possible atomic motions in three-dimensional space.

These $3N$ degrees of freedom are partitioned into three types of motion:

1. **Translational motion:** Shifting the entire molecule's centre of mass through space requires $3$ degrees of freedom (along the $x$, $y$, and $z$ axes) for all molecules.
2. **Rotational motion:** Turning the entire molecule around its centre of mass depends on molecular geometry.
   * **Linear molecules** (such as $\text{HCl}$, $\text{CO}_2$, or $\text{HCN}$) lie along a single axis. Rotation about the internuclear axis itself does not displace the atomic nuclei and does not count as a rotational degree of freedom. Only rotations about the two perpendicular axes change atomic positions, giving $2$ rotational degrees of freedom.
   * **Non-linear molecules** (such as $\text{H}_2\text{O}$ or $\text{CH}_4$) are not confined to a single straight line, so rotation about any of the $3$ mutually perpendicular axes displaces the nuclei, giving $3$ rotational degrees of freedom.
3. **Vibrational motion:** The remaining degrees of freedom correspond to internal vibrations (periodic changes in bond lengths and bond angles). Subtracting translation and rotation from $3N$ yields the number of fundamental vibrational modes:

$$
\text{Vibrational modes (linear)} = 3N - 3 - 2 = 3N - 5
$$

$$
\text{Vibrational modes (non-linear)} = 3N - 3 - 3 = 3N - 6
$$

Here $N$ is the total number of atoms in the molecule ($N \ge 2$). These formulas do not apply to single isolated atoms (monatomic species such as $\text{He}$ or $\text{Ar}$, where $N = 1$), because a single atom has only $3$ translational degrees of freedom and cannot rotate or vibrate.

### Vibrational Mode Counts vs Observed IR Bands

Calculating $3N - 5$ or $3N - 6$ gives the theoretical number of normal vibrational coordinates, which does not automatically equal the number of absorption bands seen in an experimental infrared (IR) spectrum:

* **IR-inactive modes:** A vibrational mode absorbs IR radiation only if it causes a periodic change in the molecule's net dipole moment ($\mu$). Symmetrical vibrations that leave $\mu$ unchanged are IR inactive and produce no absorption band.
* **Degenerate modes:** Two or more distinct vibrational coordinates that have the exact same vibrational energy (frequency) are called **degenerate**. Because they absorb at the identical wavenumber, they overlap to produce a single fundamental absorption band.
* **Non-fundamental bands and fine structure:** The $3N - 5$ and $3N - 6$ formulas count independent normal vibrational coordinates, not every possible transition. Real spectra often show additional weak bands from overtones ($v = 0 \to 2, 3$), combination bands, and rotational fine structure in the gas phase.

> **Watch out.** Do not assume that every calculated vibrational mode produces a separate peak in the IR spectrum. Always check each mode for a dipole moment change (IR activity) and check whether any active modes are degenerate (sharing the same wavenumber).

### Worked Examples

#### Example 1: Counting fundamental vibrational modes across linear and non-linear molecules

**Problem:** Determine the molecular geometry, total degrees of freedom ($3N$), and number of fundamental vibrational modes for $\text{HCl}$, $\text{N}_2$, $\text{CO}_2$, $\text{HCN}$, $\text{H}_2\text{O}$, methane ($\text{CH}_4$), benzene ($\text{C}_6\text{H}_6$), and cyclohexane ($\text{C}_6\text{H}_{12}$). State whether each molecule shows an IR spectrum.

**Solution:**

Count the total atoms $N$ in each chemical formula, identify whether the molecular framework is linear ($3N - 5$) or non-linear ($3N - 6$), and check whether at least one vibration changes the dipole moment.

| Molecule | Formula | Total atoms ($N$) | Geometry | Total degrees ($3N$) | Vibrational formula | Fundamental modes | Shows IR spectrum? |
| :--- | :--- | :---: | :--- | :---: | :---: | :---: | :--- |
| Hydrogen chloride | $\text{HCl}$ | $2$ | Linear | $6$ | $3N - 5$ | $1$ | Yes (heteronuclear; $\mu$ changes) |
| Nitrogen | $\text{N}_2$ | $2$ | Linear | $6$ | $3N - 5$ | $1$ | No (homonuclear; $\mu = 0$ always) |
| Carbon dioxide | $\text{CO}_2$ | $3$ | Linear | $9$ | $3N - 5$ | $4$ | Yes ($3$ of $4$ modes active) |
| Hydrogen cyanide | $\text{HCN}$ | $3$ | Linear | $9$ | $3N - 5$ | $4$ | Yes (all $4$ modes active) |
| Water | $\text{H}_2\text{O}$ | $3$ | Non-linear (bent) | $9$ | $3N - 6$ | $3$ | Yes (all $3$ modes active) |
| Methane | $\text{CH}_4$ | $5$ | Non-linear (tetrahedral) | $15$ | $3N - 6$ | $9$ | Yes (has modes that change the dipole moment) |
| Benzene | $\text{C}_6\text{H}_6$ | $12$ | Non-linear (planar ring) | $36$ | $3N - 6$ | $30$ | Yes (has modes that change the dipole moment) |
| Cyclohexane | $\text{C}_6\text{H}_{12}$ | $18$ | Non-linear (puckered ring) | $54$ | $3N - 6$ | $48$ | Yes (has modes that change the dipole moment) |

#### Example 2: Vibrational modes and IR activity of carbon dioxide ($\text{CO}_2$)

**Problem:** Calculate the number of fundamental vibrational modes for $\text{CO}_2$ ($\text{O}=\text{C}=\text{O}$), illustrate all modes, determine their IR activity, and explain how many fundamental absorption bands appear in an ideal harmonic IR spectrum.

**Solution:**

Carbon dioxide is a linear triatomic molecule ($N = 3$) with a centre of inversion (centrosymmetric). In its equilibrium geometry, the two opposing $\text{C}=\text{O}$ bond dipoles cancel exactly, giving a net dipole moment $\mu = 0$.

$$
\text{Fundamental modes} = 3N - 5 = 3(3) - 5 = 4
$$

The four normal vibrational modes are:

1. **Symmetric stretching ($\sim 1333\text{ cm}^{-1}$):** Both oxygen atoms move simultaneously away from and toward the stationary central carbon atom along the molecular axis. Because both $\text{C}=\text{O}$ bonds lengthen and shorten equally at the same instant, the two bond dipoles always cancel out ($\Delta\mu = 0$). Therefore, the symmetric stretch is **IR inactive**.

![Symmetric stretching mode of carbon dioxide showing oxygen atoms moving in opposite directions away from the central carbon](/notes/cse/s1/chemistry/module-3/assets/page-048-image-1-structured.svg)
*Figure 1: Symmetric stretching of $\text{CO}_2$ preserves centrosymmetry ($\Delta\mu = 0$) and is IR inactive.*

2. **Asymmetric stretching ($\sim 2349\text{ cm}^{-1}$):** One $\text{C}=\text{O}$ bond compresses while the other $\text{C}=\text{O}$ bond stretches. This breaks the symmetry of the charge distribution and produces a periodic oscillation in the net dipole moment along the bond axis ($\Delta\mu \ne 0$). Therefore, the asymmetric stretch is **IR active**.

![Asymmetric stretching mode of carbon dioxide showing one C=O bond lengthening while the other shortens](/notes/cse/s1/chemistry/module-3/assets/page-048-image-2-structured.svg)
*Figure 2: Asymmetric stretching of $\text{CO}_2$ creates a net oscillating dipole moment ($\Delta\mu \ne 0$) and is IR active.*

3. **In-plane bending ($\sim 667\text{ cm}^{-1}$):** The two oxygen atoms move upward within the plane of the page while the carbon atom moves downward (and vice versa), deforming the $180^\circ$ bond angle. Because the bond dipoles no longer point in exactly opposite directions, a net dipole moment develops perpendicular to the molecular axis ($\Delta\mu \ne 0$). This mode is **IR active**.

![In-plane bending mode of carbon dioxide showing vertical displacement of atoms within the molecular plane](/notes/cse/s1/chemistry/module-3/assets/page-048-image-3-structured.svg)
*Figure 3: In-plane bending of $\text{CO}_2$ induces a dipole moment perpendicular to the bond axis and is IR active.*

4. **Out-of-plane bending ($\sim 667\text{ cm}^{-1}$):** The atoms bend in a plane perpendicular to the page (toward and away from the viewer). Exactly like the in-plane bend, this motion breaks linearity and creates an oscillating dipole moment ($\Delta\mu \ne 0$), making the mode **IR active**.

![Out-of-plane bending mode of carbon dioxide showing displacement of atoms perpendicular to the viewing plane](/notes/cse/s1/chemistry/module-3/assets/page-049-image-1-structured.svg)
*Figure 4: Out-of-plane bending of $\text{CO}_2$ is also IR active and is degenerate with the in-plane bend.*

> **Watch out.** Do not label the out-of-plane bend of $\text{CO}_2$ as IR inactive. Both the in-plane and out-of-plane bending modes produce a dipole moment change and are IR active; only one bending band appears around $667\text{ cm}^{-1}$ because the two modes are degenerate, not because one is inactive.

**Summary for $\text{CO}_2$:** Out of $4$ vibrational modes, $3$ vibrational coordinates are IR active (asymmetric stretch + two bends). Because the in-plane and out-of-plane bends differ only by a $90^\circ$ rotation around the molecular axis, they are doubly degenerate and absorb at the exact same wavenumber ($\sim 667\text{ cm}^{-1}$). Thus, an ideal isolated harmonic $\text{CO}_2$ molecule shows only **$2$ fundamental absorption bands** ($\sim 2349\text{ cm}^{-1}$ and $\sim 667\text{ cm}^{-1}$).

#### Example 3: Vibrational modes of water ($\text{H}_2\text{O}$) and comparison with $\text{HCN}$

**Problem:** Determine the fundamental vibrational modes and IR activity for bent water ($\text{H}_2\text{O}$) and linear hydrogen cyanide ($\text{H}-\text{C}\equiv\text{N}$), and state the number of fundamental IR bands for each.

**Solution:**

**Part A: Water ($\text{H}_2\text{O}$)**

Water is a non-linear (bent) triatomic molecule ($N = 3$, bond angle $\approx 104.5^\circ$) with a permanent dipole moment.

$$
\text{Fundamental modes} = 3N - 6 = 3(3) - 6 = 3
$$

1. **Symmetric stretching ($\sim 3657\text{ cm}^{-1}$ in isolated gas phase):** Both $\text{O}-\text{H}$ bonds stretch and compress simultaneously in phase. Because the molecule is bent, changing both bond lengths alters the magnitude of the resultant dipole vector ($\Delta\mu \ne 0$). Thus, it is **IR active**.

![Symmetric stretching mode of bent water molecule showing both O-H bonds stretching simultaneously](/notes/cse/s1/chemistry/module-3/assets/page-049-image-2-structured.svg)
*Figure 5: Symmetric stretching of bent $\text{H}_2\text{O}$ changes the magnitude of the net dipole moment and is IR active.*

2. **Asymmetric stretching ($\sim 3756\text{ cm}^{-1}$ in isolated gas phase):** One $\text{O}-\text{H}$ bond lengthens while the other shortens, tilting the direction of the net dipole moment ($\Delta\mu \ne 0$). Thus, it is **IR active**.

![Asymmetric stretching mode of bent water molecule showing one O-H bond lengthening while the other shortens](/notes/cse/s1/chemistry/module-3/assets/page-050-image-1-structured.svg)
*Figure 6: Asymmetric stretching of $\text{H}_2\text{O}$ oscillates the dipole direction and is IR active.*

3. **In-plane bending / scissoring ($\sim 1595\text{ cm}^{-1}$ in isolated gas phase):** The $\text{H}-\text{O}-\text{H}$ bond angle opens and closes within the molecular plane, changing the net dipole magnitude ($\Delta\mu \ne 0$). Thus, it is **IR active**.

![In-plane scissoring bending mode of water molecule showing the H-O-H bond angle changing](/notes/cse/s1/chemistry/module-3/assets/page-050-image-2-structured.svg)
*Figure 7: In-plane bending (scissoring) of $\text{H}_2\text{O}$ alters the bond angle and dipole magnitude, making it IR active.*

All $3$ modes of isolated gaseous $\text{H}_2\text{O}$ are non-degenerate and IR active, giving **$3$ distinct fundamental bands** (note that in liquid water, intermolecular hydrogen bonding broadens and shifts these bands significantly).

**Part B: Contrast with Hydrogen Cyanide ($\text{HCN}$)**

Like $\text{CO}_2$, $\text{H}-\text{C}\equiv\text{N}$ is a linear triatomic molecule ($N = 3$), so it has $3(3) - 5 = 4$ fundamental vibrational modes: two stretching modes (predominantly $\text{C}-\text{H}$ stretch and $\text{C}\equiv\text{N}$ stretch) and two perpendicular bending modes (in-plane and out-of-plane). However, unlike centrosymmetric $\text{O}=\text{C}=\text{O}$, $\text{HCN}$ is **non-centrosymmetric** because hydrogen and nitrogen are different atoms. Consequently, *both* stretching modes change the dipole moment along the bond axis, and *both* bending modes change the dipole moment perpendicular to the axis. Therefore, all **$4$ vibrational coordinates are IR active** in $\text{HCN}$, and because the two perpendicular bends are doubly degenerate, $\text{HCN}$ exhibits **$3$ fundamental absorption frequencies** in its IR spectrum.

### Self-Check Questions

1. **Question:** Acetylene ($\text{H}-\text{C}\equiv\text{C}-\text{H}$) is a linear molecule and ammonia ($\text{NH}_3$) is a pyramidal (non-linear) molecule. How many fundamental vibrational modes does each possess?
   **Answer:** Both contain $N = 4$ atoms. Linear $\text{C}_2\text{H}_2$ has $3(4) - 5 = 7$ fundamental modes. Non-linear $\text{NH}_3$ has $3(4) - 6 = 6$ fundamental modes.
2. **Question:** Why is the symmetric stretching vibration IR inactive in $\text{CO}_2$ but IR active in $\text{H}_2\text{O}$? How do the two stretching modes of $\text{HCN}$ differ?
   **Answer:** $\text{CO}_2$ is linear and centrosymmetric, so equal stretching of both opposing $\text{C}=\text{O}$ bonds cancels the bond dipoles at every point ($\Delta\mu = 0$). $\text{H}_2\text{O}$ is bent (vector sum of bond dipoles changes magnitude during symmetric stretch) and HCN has two coupled stretching modes, often described predominantly as C–H and C≡N stretches; both change its dipole moment. The symmetric/asymmetric labels are most straightforward for molecules with equivalent terminal groups.

<!-- page 9 | Bond vibrations and force-constant calculations -->

## Bond vibrations and force-constant calculations

### The harmonic oscillator model of a covalent bond

To calculate the vibrational frequency of a chemical bond, we model two bonded atoms as two masses ($m_1$ and $m_2$) connected by a weightless mechanical spring. When the bond stretches or compresses by a small displacement from its equilibrium length, Hooke's law states that a restoring force pulls the atoms back toward equilibrium. The stiffness of this molecular spring is measured by the **force constant ($k$)**, which measures the local curvature of the bond potential near equilibrium; it is related to bond stiffness rather than identical to the bond dissociation energy.

In classical and quantum mechanics, a two-body system vibrating along its bond axis can be simplified to a single effective mass called the **reduced mass ($\mu$)**:

$$
\mu = \frac{m_1 m_2}{m_1 + m_2}
$$

Here, $m_1$ and $m_2$ are the masses of the individual atoms in kilograms ($\text{kg}$), giving $\mu$ in $\text{kg}$. Because atomic masses are usually given in atomic mass units ($\text{amu}$ or $\text{u}$), you must convert the reduced mass into SI units using the conversion factor $1\text{ amu} = 1.66 \times 10^{-27}\text{ kg}$.

The natural vibrational frequency ($\nu$, in $\text{s}^{-1}$ or $\text{Hz}$) of this simple harmonic oscillator is:

$$
\nu = \frac{1}{2\pi} \sqrt{\frac{k}{\mu}}
$$

Infrared spectra are almost universally plotted against **wavenumber ($\bar{\nu}$)**, which is the number of waves per unit length ($\bar{\nu} = \nu / c$). Dividing the frequency equation by the speed of light ($c$) gives the fundamental IR wavenumber equation:

$$
\bar{\nu} = \frac{1}{2\pi c} \sqrt{\frac{k}{\mu}}
$$

Squaring both sides and rearranging for $k$ allows us to calculate the bond force constant directly from an observed IR absorption band:

$$
\bar{\nu}^2 = \frac{1}{4\pi^2 c^2} \left(\frac{k}{\mu}\right) \implies k = 4\pi^2 c^2 \mu \bar{\nu}^2
$$

> **Watch out.** Never mix centimetre and metre units in the force-constant formula. If you use the SI speed of light $c = 3.00 \times 10^8\text{ m s}^{-1}$ and reduced mass $\mu$ in $\text{kg}$ to obtain $k$ in $\text{N m}^{-1}$ (equivalent to $\text{kg s}^{-2}$), you **must** convert the wavenumber from $\text{cm}^{-1}$ to $\text{m}^{-1}$ by multiplying by $100$: $\bar{\nu}\text{ (in m}^{-1}\text{)} = \bar{\nu}\text{ (in cm}^{-1}\text{)} \times 100$. Alternatively, you may keep $\bar{\nu}$ in $\text{cm}^{-1}$ only if you express the speed of light as $c = 3.00 \times 10^{10}\text{ cm s}^{-1}$.

### How bond strength and atomic mass control IR wavenumbers

The equation $\bar{\nu} = \frac{1}{2\pi c} \sqrt{k/\mu}$ shows that the position of an infrared absorption band is governed by two physical factors:

1. **Bond strength (force constant, $k$):** Vibrational wavenumber is directly proportional to $\sqrt{k}$. A stronger bond has a stiffer electronic spring (larger $k$) and requires higher-energy radiation to vibrate. Notice that it is the bond strength—not merely the bond length—that directly determines $k$, although shorter bonds between the same pair of elements are often stiffer. For example, in carbon–carbon bonds, the reduced mass $\mu$ is identical because both atoms are carbon-$12$ ($\mu = 6\text{ amu}$). However, as bond order increases from a single bond ($\text{C}-\text{C}$) to a double bond ($\text{C}=\text{C}$) to a triple bond ($\text{C}\equiv\text{C}$), electron density between the nuclei increases. Consequently, the effective local force constant generally increases (there is no universal fixed numerical ratio), shifting the stretching wavenumber to progressively higher values.
2. **Atomic masses (reduced mass, $\mu$):** Vibrational wavenumber is inversely proportional to $\sqrt{\mu}$. Bonds involving lighter atoms (especially hydrogen, where $\mu \approx 1\text{ amu}$) vibrate at high wavenumbers ($2500\text{–}4000\text{ cm}^{-1}$), whereas bonds between heavier atoms vibrate at much lower wavenumbers.

| Bond comparison | Physical parameter that changes | Effect on vibrational wavenumber ($\bar{\nu}$) |
| :--- | :--- | :--- |
| **Bond order:** $\text{C}-\text{C} < \text{C}=\text{C} < \text{C}\equiv\text{C}$ | $\mu$ is constant; force constant $k$ increases with bond order | $\bar{\nu}$ increases ($\bar{\nu}_{\text{C}-\text{C}} < \bar{\nu}_{\text{C}=\text{C}} < \bar{\nu}_{\text{C}\equiv\text{C}}$) |
| **Atom identity:** $\text{C}-\text{H}$ vs $\text{C}-\text{Cl}$ | $k$ differs, and $\mu$ increases sharply from $\text{H}$ to $\text{Cl}$ | $\bar{\nu}$ drops sharply for the heavier $\text{C}-\text{Cl}$ bond |
| **Isotope substitution:** $^{1}\text{H}-\text{Cl}$ vs $^{2}\text{D}-\text{Cl}$ | $k$ is virtually identical (same electronic structure); $\mu$ increases | $\bar{\nu}$ decreases for the heavier isotope ($\bar{\nu}_{\text{DCl}} < \bar{\nu}_{\text{HCl}}$) |

In a **polyatomic molecule** (such as $\text{CH}_3\text{OH}$ or $\text{CH}_2=\text{CH}_2$), vibrations are strictly **normal modes** in which several coupled bonds oscillate simultaneously. However, when a specific two-atom group (like $\text{O}-\text{H}$ or $\text{C}=\text{O}$) has a mass or force constant very different from the rest of the molecular skeleton, its vibration stays mostly localized. In such cases, applying the diatomic reduced-mass formula $\mu = m_1 m_2 / (m_1 + m_2)$ to just the two bonded atoms serves as a reliable practical approximation.

### Worked problems on force-constant calculations

#### Example 1: Force constant of carbon monoxide ($\text{CO}$)

**Problem:** A carbon monoxide ($\text{CO}$) molecule absorbs infrared radiation at a wavenumber of $2140\text{ cm}^{-1}$. Calculate the force constant of the bond, given the atomic masses $\text{C} = 12\text{ amu}$ and $\text{O} = 16\text{ amu}$ ($1\text{ amu} = 1.66 \times 10^{-27}\text{ kg}$).

**Solution:**

1. **Calculate the reduced mass ($\mu$) in kilograms:**
   $$
   \mu = \frac{m_{\text{C}} m_{\text{O}}}{m_{\text{C}} + m_{\text{O}}} = \frac{12 \times 16}{12 + 16}\text{ amu} = \frac{192}{28}\text{ amu} = 6.857\text{ amu}
   $$
   Convert $\text{amu}$ to $\text{kg}$:
   $$
   \mu = 6.857 \times 1.66 \times 10^{-27}\text{ kg} = 1.138 \times 10^{-26}\text{ kg}
   $$

2. **Convert the wavenumber ($\bar{\nu}$) into SI units ($\text{m}^{-1}$):**
   $$
   \bar{\nu} = 2140\text{ cm}^{-1} \times 100\text{ cm m}^{-1} = 2.140 \times 10^5\text{ m}^{-1}
   $$

3. **Substitute the values into the force-constant equation:**
   Using $c = 3.00 \times 10^8\text{ m s}^{-1}$ and $\pi = 3.1416$:
   $$
   k = 4\pi^2 c^2 \mu \bar{\nu}^2
   $$
   $$
   k = 4 \times (3.1416)^2 \times (3.00 \times 10^8\text{ m s}^{-1})^2 \times (1.138 \times 10^{-26}\text{ kg}) \times (2.140 \times 10^5\text{ m}^{-1})^2
   $$
   $$
   k = 39.478 \times (9.00 \times 10^{16}) \times (1.138 \times 10^{-26}) \times (4.5796 \times 10^{10})
   $$
   $$
   k \approx 1852\text{ N m}^{-1}\quad (1.85 \times 10^3\text{ N m}^{-1}\text{ to 3 sig. figs.})
   $$

#### Example 2: Force constant of hydrogen chloride ($\text{HCl}$)

**Problem:** Calculate the force constant of the $\text{H}-\text{Cl}$ bond for an exercise input IR absorption at $\bar{\nu} = 3050\text{ cm}^{-1}$, using the approximate atomic masses $\text{H} = 1\text{ amu}$ and $\text{Cl} = 35\text{ amu}$ ($1\text{ amu} = 1.66 \times 10^{-27}\text{ kg}$).

*The supplied wavenumber is an exercise input, not a reference value for the observed HCl fundamental.*

**Solution:**

1. **Calculate the reduced mass ($\mu$) in kilograms:**
   $$
   \mu = \frac{m_{\text{H}} m_{\text{Cl}}}{m_{\text{H}} + m_{\text{Cl}}} = \frac{1 \times 35}{1 + 35}\text{ amu} = \frac{35}{36}\text{ amu} = 0.9722\text{ amu}
   $$
   Convert $\text{amu}$ to $\text{kg}$:
   $$
   \mu = 0.9722 \times 1.66 \times 10^{-27}\text{ kg} = 1.614 \times 10^{-27}\text{ kg}
   $$

2. **Convert the wavenumber ($\bar{\nu}$) into SI units ($\text{m}^{-1}$):**
   $$
   \bar{\nu} = 3050\text{ cm}^{-1} \times 100\text{ cm m}^{-1} = 3.050 \times 10^5\text{ m}^{-1}
   $$

3. **Substitute the values into the force-constant equation:**
   $$
   k = 4\pi^2 c^2 \mu \bar{\nu}^2
   $$
   $$
   k = 4 \times (3.1416)^2 \times (3.00 \times 10^8\text{ m s}^{-1})^2 \times (1.614 \times 10^{-27}\text{ kg}) \times (3.050 \times 10^5\text{ m}^{-1})^2
   $$
   $$
   k = 39.478 \times (9.00 \times 10^{16}) \times (1.614 \times 10^{-27}) \times (9.3025 \times 10^{10})
   $$
   $$
   k \approx 533\text{ N m}^{-1}
   $$

### Self-check questions

1. **Question:** How can IR spectroscopy distinguish between a $\text{C}-\text{C}$ single bond and a $\text{C}=\text{C}$ double bond when both have the exact same reduced mass $\mu$?
   **Answer:** Even though $\mu$ is identical ($6\text{ amu}$), the $\text{C}=\text{C}$ double bond has four shared electrons instead of two, generally giving it a larger effective force constant ($k$). Because $\bar{\nu} \propto \sqrt{k}$, the $\text{C}=\text{C}$ bond absorbs at a significantly higher wavenumber ($\approx 1650\text{ cm}^{-1}$) than the $\text{C}-\text{C}$ single bond ($\approx 1000\text{–}1200\text{ cm}^{-1}$).

2. **Question (Illustrative isotopic shift):** Assuming that isotopic substitution does not change the bond force constant $k$ and using approximate integer masses $\text{H} = 1\text{ amu}$, $\text{D} = 2\text{ amu}$, and $\text{Cl} = 35\text{ amu}$, estimate the ratio of the vibrational wavenumbers $\bar{\nu}_{\text{DCl}} / \bar{\nu}_{\text{HCl}}$.
   **Answer:** Here $\mu_{\text{HCl}} = (1 \times 35)/36 = 0.972\text{ amu}$ and $\mu_{\text{DCl}} = (2 \times 35)/37 = 1.892\text{ amu}$. Since $k$ is constant, $\bar{\nu}_{\text{DCl}} / \bar{\nu}_{\text{HCl}} = \sqrt{\mu_{\text{HCl}} / \mu_{\text{DCl}}} = \sqrt{0.972 / 1.892} \approx 0.717$. Thus, $\text{DCl}$ absorbs at about $0.72$ times the wavenumber of $\text{HCl}$.

<!-- page 10 | Reading IR spectra and studying hydrogen bonding -->

## Reading IR spectra and studying hydrogen bonding

Infrared spectroscopy is one of the fastest laboratory tools for identifying organic functional groups and probing non-covalent interactions. Local bond models use a reduced mass ($\mu$) and force constant ($k$); although actual polyatomic normal modes can be coupled, different functional groups absorb infrared radiation within predictable wavenumber ($\bar{\nu}$) intervals.

### Functional group and fingerprint regions

An infrared spectrum is typically divided into two diagnostic zones:
1. **Functional group region ($4000\text{--}1500\text{ cm}^{-1}$):** Contains relatively few, well-defined absorption bands arising primarily from stretching vibrations of bonds such as $\text{O-H}$, $\text{N-H}$, $\text{C-H}$, $\text{C}\equiv\text{C}$, $\text{C=O}$, and $\text{C=C}$.
2. **Fingerprint region ($1500\text{--}400\text{ cm}^{-1}$):** Contains a complex pattern of coupled single-bond stretches ($\text{C-C}$, $\text{C-O}$, $\text{C-N}$) and bending vibrations. Because this pattern is highly sensitive to the overall molecular skeleton, matching both the functional group region and the fingerprint region against a reference spectrum measured under identical conditions strongly supports compound identity.

### Characteristic IR stretching frequencies

Hooke's law explains why bond order and atomic mass control peak positions:

$$
\bar{\nu} = \frac{1}{2\pi c}\sqrt{\frac{k}{\mu}}
$$

Here, $\bar{\nu}$ is the wavenumber ($\text{cm}^{-1}$), $c$ is the speed of light ($\text{cm s}^{-1}$), $k$ is the bond force constant ($\text{N m}^{-1}$), and $\mu$ is the reduced mass ($\text{kg}$).

When comparing $\text{C-C}$, $\text{C=C}$, and $\text{C}\equiv\text{C}$ bonds, the two bonded atoms are carbon in every case, so the reduced mass $\mu$ is identical. However, increasing bond order strengthens the bond and increases $k$, shifting the stretching absorption to higher wavenumbers: $\text{C-C}$ ($\approx 1200\text{--}1300\text{ cm}^{-1}$) $< \text{C=C}$ ($\approx 1620\text{--}1680\text{ cm}^{-1}$) $< \text{C}\equiv\text{C}$ ($\approx 2100\text{--}2260\text{ cm}^{-1}$). Conversely, bonds involving light hydrogen atoms have a very small reduced mass $\mu$, placing $\text{O-H}$, $\text{N-H}$, and $\text{C-H}$ stretches near $2850\text{--}3650\text{ cm}^{-1}$.

| Functional group / bond | Approximate wavenumber ($\text{cm}^{-1}$) | Typical band shape and notes |
| :--- | :--- | :--- |
| Free $\text{O-H}$ (alcohol/phenol, dilute) | $3600\text{--}3650$ | Sharp, medium-to-strong |
| Hydrogen-bonded $\text{O-H}$ (alcohol/phenol) | $3200\text{--}3600$ | Broad, strong |
| Carboxylic acid $\text{O-H}$ | $2500\text{--}3300$ | Very broad; overlaps $\text{C-H}$ region |
| Amine / amide $\text{N-H}$ | $3300\text{--}3500$ | Medium; primary amines often show two bands |
| Alkane $sp^3\text{ C-H}$ | $2850\text{--}3000$ | Medium-to-strong, just below $3000\text{ cm}^{-1}$ |
| Alkene / aromatic $sp^2\text{ C-H}$ | $3000\text{--}3100$ | Medium, just above $3000\text{ cm}^{-1}$ |
| Terminal alkyne $sp\text{ C-H}$ | $\approx 3300$ | Sharp, strong |
| Alkyne $\text{C}\equiv\text{C}$ | $2100\text{--}2260$ | Often weak; can be absent when symmetry prevents a dipole change |
| Carbonyl $\text{C=O}$ (general) | $1650\text{--}1800$ | Very strong, sharp; amides near $1650\text{--}1690\text{ cm}^{-1}$, ketones/aldehydes/esters near $1705\text{--}1750\text{ cm}^{-1}$ |
| Alkene $\text{C=C}$ | $1620\text{--}1680$ | Often weak-to-medium; may be absent for a symmetry-forbidden mode |

> **Watch out.** Do not assume every $\text{C=O}$ stretch appears above $1700\text{ cm}^{-1}$ or that an absorption near $1650\text{ cm}^{-1}$ always indicates an alkene. Resonance in amides lowers the $\text{C=O}$ stretch to roughly $1650\text{--}1690\text{ cm}^{-1}$, overlapping the $\text{C=C}$ region. Always check intensity and companion bands (such as $\text{N-H}$ or ester $\text{C-O}$ stretches) before assigning a peak.

### Studying hydrogen bonding by IR spectroscopy

Hydrogen bonding occurs when a hydrogen atom covalently bonded to an electronegative donor ($\text{O}$ or $\text{N}$) interacts electrostatically with a lone pair on an electronegative acceptor ($\text{O}$ or $\text{N}$). This interaction pulls electron density away from the covalent $\text{O-H}$ bond, lengthening and weakening it. Because the covalent bond force constant $k$ decreases, the $\text{O-H}$ stretching absorption shifts to a **lower wavenumber**. Furthermore, because molecules in a liquid or concentrated solution experience a wide distribution of hydrogen-bond distances and angles, the absorption appears as a **broad band** ($3200\text{--}3600\text{ cm}^{-1}$) rather than a sharp peak.

IR dilution experiments in a non-hydrogen-bonding solvent distinguish two modes of hydrogen bonding:

* **Intermolecular hydrogen bonding** occurs between two or more separate molecules. In *p*-nitrophenol ($4\text{-O}_2\text{N-C}_6\text{H}_4\text{-OH}$), the $-\text{OH}$ and $-\text{NO}_2$ groups sit at opposite ends of the rigid benzene ring ($1,4$-positions) and cannot reach each other within the same molecule. Instead, the $-\text{OH}$ group of one molecule forms a hydrogen bond with the $-\text{NO}_2$ oxygen of a neighbouring molecule: $\cdots\text{O}_2\text{N-C}_6\text{H}_4\text{-O-H}\cdots\text{O(O)N-C}_6\text{H}_4\text{-OH}\cdots$. In concentrated solution, *p*-nitrophenol shows a broad band near $3300\text{--}3400\text{ cm}^{-1}$. Upon progressive dilution with a suitable non-hydrogen-bonding solvent, solvent molecules separate the solute molecules, breaking the intermolecular hydrogen bonds. The broad band weakens and a sharp **free $\text{O-H}$** band emerges at a higher wavenumber ($\approx 3600\text{ cm}^{-1}$).
* **Intramolecular hydrogen bonding** occurs between two functional groups within the same molecule when geometry allows a stable five- or six-membered ring. In *o*-nitrophenol ($2\text{-O}_2\text{N-C}_6\text{H}_4\text{-OH}$), the adjacent ($1,2$) $-\text{OH}$ hydrogen and $-\text{NO}_2$ oxygen form an internal six-membered chelate ring. Because this interaction is internal to each individual molecule, separating the molecules by dilution in an inert solvent leaves the intramolecular hydrogen bond intact. The lowered $\text{O-H}$ stretching band ($\approx 3200\text{--}3250\text{ cm}^{-1}$) shows virtually no concentration-dependent shift upon dilution (though extreme changes in temperature or strongly competing polar solvents can still perturb it).

> **Watch out.** Older notes sometimes label catechol (benzene-1,2-diol) as purely intramolecular and hydroquinone (benzene-1,4-diol) as purely intermolecular. While catechol forms an intramolecular hydrogen bond, its second $-\text{OH}$ group can still participate in intermolecular association at high concentrations. Comparing *o*-nitrophenol and *p*-nitrophenol provides a much cleaner textbook contrast.

#### Example 1: Distinguishing isomers using IR dilution

**Problem:** Spectra of two nitrophenol isomers are measured at several concentrations in the same suitable non-hydrogen-bonding solvent and at constant temperature. One sample develops a higher-wavenumber free O–H band on dilution; the other retains a similar hydrogen-bonded O–H position. Explain the likely assignments.

**Solution:**

1. **Separate concentration from association effects:** Compare band positions and shapes rather than raw peak heights alone, because dilution also lowers absorbance through the Beer–Lambert relationship.
2. **Identify the concentration-dependent sample:** The higher-wavenumber free O–H band indicates weakening intermolecular association. This behaviour supports *p*-nitrophenol, whose para groups cannot form the same internal hydrogen bond.
3. **Identify the less concentration-dependent sample:** Retention of a hydrogen-bonded O–H position supports *o*-nitrophenol, whose adjacent groups can form an intramolecular hydrogen bond. Solvent competition, temperature and conformation can still affect the result.
4. **Check the assignment:** Compare the full spectrum with references. A dilution trend supports the interpretation and should not replace all other structural evidence.

### Other analytical applications of IR spectroscopy

* **Checking sample purity:** A pure compound yields a reproducible set of absorption bands. Extra peaks that do not belong to the reference spectrum of the pure substance (for example, a sharp $\text{C=O}$ peak near $1715\text{ cm}^{-1}$ in a sample of a secondary alcohol) reveal the presence of specific functional-group impurities. However, the absence of extra peaks does not exclude impurities whose bands overlap or fall below the detection limit, not that the sample is $100\%$ pure.
* **Monitoring reaction kinetics:** By recording IR spectra at regular time intervals, chemists can follow the rate of a chemical reaction. For instance, during the oxidation of an alcohol to a ketone, the gradual disappearance of the broad $\text{O-H}$ band ($3200\text{--}3600\text{ cm}^{-1}$) and the simultaneous growth of the sharp $\text{C=O}$ band ($\approx 1715\text{ cm}^{-1}$) quantify reaction progress.

### Self-check questions

1. **Question:** Why does hydrogen bonding shift the $\text{O-H}$ stretching vibration to a lower wavenumber rather than a higher one?
   **Answer:** Formation of a hydrogen bond ($\text{O-H}\cdots\text{O}$) weakens and slightly lengthens the covalent $\text{O-H}$ bond, reducing its force constant $k$. Because $\bar{\nu} \propto \sqrt{k}$, a smaller force constant produces a lower stretching wavenumber.
2. **Question:** A student observes a strong, sharp IR peak at $1665\text{ cm}^{-1}$ and two medium peaks near $3350\text{ cm}^{-1}$ and $3180\text{ cm}^{-1}$. Why might assigning the $1665\text{ cm}^{-1}$ band to an alkene $\text{C=C}$ stretch be incorrect?
   **Answer:** Amide $\text{C=O}$ stretches occur near $1650\text{--}1690\text{ cm}^{-1}$ due to resonance weakening of the carbonyl bond, and primary amides also show two $\text{N-H}$ stretching bands near $3180\text{--}3500\text{ cm}^{-1}$. Moreover, amide $\text{C=O}$ bands are characteristically very strong, whereas alkene $\text{C=C}$ stretches are typically weak to medium.

<!-- page 11 | Dielectric thermal analysis: principle, instrument and uses -->

## Dielectric thermal analysis: principle, instrument and uses

### Principle of dielectric thermal analysis

Dielectric thermal analysis (DETA), also called dielectric analysis (DEA), measures how the alternating-current (AC) dielectric response of a material changes with temperature, time, or frequency. It is widely used for polar or semi-polar materials such as polymers, thermosetting resins, adhesives, glasses, and ceramics.

When a sinusoidal AC voltage is applied across a sample placed between two electrodes, the alternating electric field interacts with two distinct microscopic species inside the material:

1. **Permanent molecular dipoles** undergo **dipolar relaxation**, rotating to reorient with the alternating electric field.
2. **Mobile free ions** (often trace impurities or catalyst residues) undergo **ionic migration**, drifting translationally toward the oppositely charged electrode.

![Randomly oriented molecular dipoles between parallel plates without an external electric field](/notes/cse/s1/chemistry/module-3/assets/page-058-image-2-structured.svg)
*Figure 11.1: In the absence of an external electric field, thermal motion keeps molecular dipoles randomly oriented.*

![Molecular dipoles reorienting between charged plates under an applied electric field](/notes/cse/s1/chemistry/module-3/assets/page-058-image-3-structured.svg)
*Figure 11.2: Under an applied electric field, dipoles experience torque and partially align with the field direction.*

> **Watch out.** Do not confuse ions with dipoles. Ions do not "align" in place, and bound dipoles do not migrate across the sample. Instead, dipoles rotate (orientation polarisation) while free ions drift toward opposite electrodes (ionic conduction). Furthermore, although static diagrams show neat alignment at a single instant, an AC field reverses continuously and thermal agitation opposes alignment, so dipoles never remain perfectly aligned.

Dipolar relaxation and ionic conduction give the response both storage and loss components. The analyser measures the current amplitude and its phase relative to the applied voltage to separate these components.

### Dielectric parameters

Using the harmonic time convention $\exp(+i\omega t)$, the dimensionless complex relative permittivity $\varepsilon_r^*$ is written as:

$$
\varepsilon_r^* = \varepsilon' - i\varepsilon''
$$

Here $i = \sqrt{-1}$, $\omega = 2\pi f$ is the angular frequency (in $\text{rad s}^{-1}$), and $f$ is the AC frequency (in $\text{Hz}$). For a parallel-plate cell of plate area $A$ and separation $d$, the measured capacitance is $C = \varepsilon_0 \varepsilon' A / d$ and the AC conductance is $G = \omega \varepsilon_0 \varepsilon'' A / d$, where $\varepsilon_0$ is the vacuum permittivity.

| Parameter | Symbol | Physical meaning |
| :--- | :--- | :--- |
| Relative permittivity (storage permittivity) | $\varepsilon'$ | Dimensionless measure of a material's ability to polarise and store electrical energy reversibly in an electric field. |
| Dielectric loss factor | $\varepsilon''$ | Dimensionless measure proportional to the electrical energy dissipated as heat per cycle due to viscous drag on rotating dipoles and migrating ions (not the energy itself). |
| Loss tangent (dissipation factor) | $\tan \delta$ | Dimensionless ratio of loss factor to storage permittivity, where $\delta$ is the dielectric loss angle by which electric displacement lags the electric field. |

The dissipation factor is defined by:

$$
\tan \delta = \frac{\varepsilon''}{\varepsilon'}
$$

Note that the loss angle $\delta$ is the complement of the current–voltage phase angle $\theta$ for the equivalent parallel capacitor–conductance model ($\delta = 90^\circ - \theta$), rather than the current–voltage phase shift itself.

> **Watch out.** Student notes often state that a low $\tan \delta$ makes a material a good *thermal* insulator. In reality, low $\tan \delta$ is desired for **electrical insulation** and **low-loss capacitors** because it minimises dielectric heating under AC fields. Dielectric loss measurements do not measure thermal conductivity or guarantee thermal insulation.

#### Example 1: Calculating the dissipation factor (illustrative example)

**Problem:** At a fixed frequency and temperature, a polymer film tested in a DETA cell has a relative storage permittivity $\varepsilon' = 4.00$ and a dielectric loss factor $\varepsilon'' = 0.08$. Assuming linear dielectric behaviour, calculate the dissipation factor $\tan \delta$.

**Solution:**

$$
\tan \delta = \frac{\varepsilon''}{\varepsilon'} = \frac{0.08}{4.00} = 0.02
$$

The dissipation factor is $0.02$ (dimensionless).

### Instrumentation and working

![Schematic of a dielectric thermal analysis cell inside a temperature-controlled furnace](/notes/cse/s1/chemistry/module-3/assets/page-058-image-1-clean.svg)
*Figure 11.3: Schematic of a DETA setup showing the sample between electrodes inside a programmable furnace connected to a dielectric analyser.*

A standard DETA instrument consists of the following components:

* **Sample holder and electrodes:** Parallel metal plates or interdigitated comb electrodes that contact the sample (thin film, liquid resin, powder, or pellet).
* **Frequency generator (AC source):** Applies a sinusoidal voltage of known amplitude and selected frequency (either fixed or swept across multiple frequencies).
* **Temperature-programmable furnace and controller:** Heats, cools, or holds the sample isothermally at a controlled rate while preventing overheating.
* **Temperature sensor (thermocouple or RTD):** Placed close to the sample to measure its actual temperature accurately.
* **Environmental control unit:** Purges the furnace chamber with dry air or an inert gas such as nitrogen to prevent oxidative degradation or unwanted moisture uptake.
* **Dielectric analyser and recorder:** Measures the amplitude and phase of the resulting current relative to the applied voltage, computes capacitance, conductance, $\varepsilon'$, $\varepsilon''$, and $\tan \delta$, and plots them against temperature, time, or frequency.

**Experimental procedure:**

1. Mount the sample between the electrodes inside the furnace and establish the required gas atmosphere.
2. Apply a sinusoidal AC voltage at one or more selected frequencies.
3. Ramp or hold the furnace temperature according to a pre-set thermal program while monitoring sample temperature with the thermocouple.
4. Record $\varepsilon'$, $\varepsilon''$, and $\tan \delta$ continuously as functions of temperature or curing time.

### Applications of DETA

* **Glass transition temperature ($T_g$) and relaxation processes:** Segmental mobility changes near the glass transition can produce a dispersion in storage permittivity and loss peaks when the relaxation timescale matches the applied frequency. Other relaxations and conduction may overlap, so the feature requires interpretation. Because relaxation is kinetic, the apparent $T_g$ shifts to higher temperatures as measurement frequency increases.
* **Curing of thermosetting resins and adhesives:** During isothermal curing of epoxies or polyurethanes, crosslinking builds a rigid network that hinders ion drift and dipole rotation. At constant temperature, ionic mobility typically falls and bulk resistivity rises as cure progresses, allowing engineers to track gelation and vitrification (though non-isothermal temperature ramps can temporarily increase ion mobility before crosslinking dominates, and DETA tracks electrical mobility rather than measuring mechanical viscosity directly).
* **Moisture and quality monitoring:** Because water is highly polar ($\varepsilon' \approx 80$ at room temperature) and can promote ionic conduction, DETA sensitively detects trace moisture absorption, plasticiser content, and batch-to-batch variations in polymers.
* **Electrical insulation and capacitor development:** Evaluating $\varepsilon'$ and $\tan \delta$ across operating temperatures helps engineers design low-loss dielectric films for capacitors and high-voltage insulation.

### Self-check questions

1. **Question:** Why does a polymer show a peak in $\tan \delta$ as it is heated through its glass transition temperature $T_g$?
   **Answer:** A segmental relaxation can produce a loss peak when its characteristic timescale approaches the AC period. The peak temperature depends on frequency and need not equal a glass-transition temperature obtained by another method.

2. **Question:** How does increasing the crosslinking density during isothermal epoxy curing affect ionic migration in a DETA experiment?
   **Answer:** Crosslinking increases network tightness and local hindrance, which reduces ionic mobility and increases bulk electrical resistivity.

<!-- page 12 | Scanning electron microscopy: signals, instrument and uses -->

## Scanning electron microscopy: signals, instrument and uses

Scanning electron microscopy (SEM) images solid surfaces by sweeping a focused beam of high-energy electrons across a specimen in a rectangular raster pattern. An optical microscope forms an image with light and optical lenses, while transmission electron microscopy uses electrons passing through a thin specimen. SEM instead maps a detected signal at each beam position to pixel brightness.

### Electron–sample interactions and signals

When primary beam electrons penetrate a solid, they undergo scattering within an interaction volume whose shape and size depend on beam energy and material near the surface, generating several distinct signals.

![Secondary electron generation diagram showing an incoming electron beam ejecting an outer-shell electron from a sample atom.](/notes/cse/s1/chemistry/module-3/assets/page-055-image-1-structured.svg)
*Figure 12.1: Inelastic collision ejecting a low-energy secondary electron.*

- **Secondary electrons (SE):** Primary electrons transfer part of their kinetic energy to sample atoms through **inelastic** collisions, ejecting loosely bound outer-shell electrons. Because secondary electrons have very low kinetic energy (typically below $50\text{ eV}$), only those generated within a few nanometres of the surface can escape. The escape yield depends strongly on surface tilt and edges, making SE imaging the primary mode for high-resolution surface topography (shape, size, and texture).
- **Backscattered electrons (BSE):** These are incident beam electrons deflected backward out of the sample at large angles by **predominantly elastic** interactions with atomic nuclei. They retain a large fraction of the primary beam energy and escape from deeper within the specimen than secondary electrons. Because heavier nuclei (higher atomic number, $Z$) have a stronger positive charge, they deflect more electrons backward. Under identical operating conditions, regions with higher average $Z$ generally appear brighter in a BSE image, providing qualitative compositional ($Z$-contrast) alongside topographic and crystal-orientation effects.
- **Characteristic X-rays:** When an incident electron knocks out an inner-shell electron from a sample atom, a higher-shell electron drops down to fill the vacancy, emitting an X-ray photon whose energy is characteristic of that element. Coupling an SEM with an energy-dispersive X-ray spectroscopy (EDS) detector identifies which elements are present; accurate quantitative composition requires proper standards and calibration. Similarly, crystallographic orientation mapping is not obtained from ordinary SE/BSE images alone, but requires an accessory technique such as electron backscatter diffraction (EBSD).

![Backscattered electron diagram showing an incident primary electron deflected at a large angle by an atomic nucleus.](/notes/cse/s1/chemistry/module-3/assets/page-055-image-2-structured.svg)
*Figure 12.2: Elastic scattering of a primary electron by an atomic nucleus to produce a backscattered electron.*

> **Watch out.** Backscattered electrons are produced by predominantly *elastic* nuclear scattering, not inelastic collisions. Furthermore, all elements scatter electrons to some degree; higher-$Z$ elements simply yield a higher fraction of backscattered electrons rather than being the only elements that generate them.

| Signal | Origin | Escape depth | Primary information provided |
| :--- | :--- | :--- | :--- |
| Secondary electrons (SE) | Inelastic ejection of sample electrons | Very shallow (few $\text{nm}$) | Fine surface topography and morphology |
| Backscattered electrons (BSE) | Predominantly elastic deflection of beam electrons | Deeper than SE | Atomic-number ($Z$) contrast and coarse topography |
| Characteristic X-rays | Inner-shell ionization and relaxation | Often a larger sampling volume; depth depends on material and beam energy | Elemental identification (via EDS) |

### Instrumentation and working

An SEM column operates under high vacuum so that gas molecules do not scatter the electron beam or contaminate the filament.

![Schematic diagram of a Scanning Electron Microscope column showing the electron source, anode, condenser lens, scan coils, objective lens, sample, and secondary electron detector.](/notes/cse/s1/chemistry/module-3/assets/page-056-image-1-structured.svg)
*Figure 12.3: Schematic layout of a scanning electron microscope.*

1. **Electron gun and anode:** A thermionic emitter (such as a heated tungsten filament or $\text{LaB}_6$ crystal) or a field-emission gun (FEG) generates free electrons. A positively charged anode accelerates them down the column (typically at $1\text{--}30\text{ kV}$).
2. **Condenser and objective lenses:** Electromagnetic (and sometimes electrostatic) lenses demagnify and focus the diverging electron stream into a narrow probe spot on the specimen.
3. **Scan coils:** Deflection coils positioned near the objective lens sweep the focused beam horizontally and vertically in a raster grid across a selected area of the sample.
4. **Sample stage and vacuum chamber:** The solid specimen is mounted on a conductive stage inside an evacuated chamber.
5. **Detectors and display electronics:** Dedicated detectors (such as an Everhart–Thornley detector for SE, a solid-state annular detector for BSE, and an EDS sensor for X-rays) count the emitted signals at each coordinate. The amplifier and computer map the detector output to greyscale pixel intensity synchronized with the scan.

> **Watch out.** Because an SEM has a narrow beam divergence angle, it achieves a much greater depth of field than an optical microscope, giving micrographs a striking three-dimensional *appearance*. However, a single greyscale SEM image is a 2D intensity map and does not directly measure true vertical height ($z$-coordinates).

### Sample preparation and operating capabilities

Under high vacuum, electrically insulating samples can accumulate charge under the beam, causing bright streaks, image drift, and distortion. To prevent charging, non-conducting specimens are often coated with an ultrathin conducting film (such as gold, platinum, or carbon) by sputter or evaporative coating. However, heavy-metal coatings can obscure ultra-fine surface features or interfere with X-ray peaks during EDS analysis; in such cases, operating at low accelerating voltage or in a variable-pressure (low-vacuum) SEM allows imaging without a conductive coat. Wet or biological specimens must be dehydrated—or examined in specialized cryo or environmental stages—using established laboratory protocols so they do not outgas in the vacuum.

Depending on the electron source, accelerating voltage, and working distance, modern SEMs achieve nanometre-scale spatial resolution, useful magnifications from roughly $10\times$ to several hundred thousand times, and a large depth of field that keeps rough fracture surfaces in focus simultaneously.

#### Example 1: Selecting SEM signal modes for failure analysis

**Problem:** A metallurgist examines a fractured steel bolt suspected of containing microscopic lead ($Z = 82$) inclusions within the iron ($Z = 26$) matrix, along with fine fatigue striations on the fracture ridges. Which SEM signal should be selected to (a) inspect the fine fracture ridges, (b) locate the heavy inclusions quickly, and (c) confirm the elemental identity of an inclusion?

**Solution:**
1. **Surface ridges (SE mode):** Secondary electrons escape only from the top few nanometres and are highly sensitive to local surface tilt, clearly resolving the fine topographic fatigue striations.
2. **Locating inclusions (BSE mode):** Backscattered electron yield increases with atomic number. Because lead ($Z = 82$) is much heavier than iron ($Z = 26$), lead-rich inclusions generally appear brighter under comparable geometry and detector conditions against a darker iron background in a BSE image.
3. **Elemental confirmation (EDS):** Pointing the stationary electron beam at a bright inclusion and recording the emitted characteristic X-ray spectrum via EDS confirms whether the peak energies match lead.

### Applications

- **Materials and metallurgy:** Characterizing grain microstructures, phase distributions, corrosion pits, and brittle versus ductile fracture surfaces.
- **Nanoscience and electronics:** Measuring particle size and morphology of nanomaterials and inspecting integrated-circuit interconnects for defects.
- **Forensic, medical, and biological sciences:** Analysing trace particulates, gunshot residue, mineral or gem inclusions, and dehydrated cellular or tissue surfaces.

### Self-check questions

1. **Question:** Why do regions containing heavier elements generally appear brighter in a backscattered electron (BSE) image recorded on a flat, polished sample?
   **Answer:** Heavier nuclei have a larger positive charge (higher $Z$), which exerts a stronger Coulomb force on incident electrons and deflects a higher fraction of them backward through elastic scattering.
2. **Question:** Why is a non-conductive ceramic sometimes coated with carbon rather than gold before performing EDS elemental analysis?
   **Answer:** A conductive coating helps control charging. Gold adds strong X-ray lines and can absorb specimen X-rays; carbon often introduces less interference for many heavier-element measurements. Carbon coating adds a carbon signal and is unsuitable when it would compromise the analytes of interest. Coating method and thickness must suit the measurement.

<!-- page 13 | Revision sheet and practice problems -->

## Revision sheet and practice problems

### Core Formulas and Unit Conventions

| Quantity / Law | Equation | Symbol Definitions and Standard Units |
| :--- | :--- | :--- |
| **Photon energy** | $\Delta E = h\nu = \frac{hc}{\lambda} = hc\bar{\nu}$ | $h$: Planck's constant ($\text{J s}$); $c$: speed of light ($\text{m s}^{-1}$); $\lambda$: wavelength ($\text{m}$); $\bar{\nu}$: wavenumber ($\text{m}^{-1}$) |
| **Transmittance** | $T = \frac{I}{I_0}$ | $I_0$: incident light intensity; $I$: transmitted light intensity ($T$ is dimensionless; $\%T = 100T$) |
| **Absorbance** | $A = \log_{10}\left(\frac{I_0}{I}\right) = -\log_{10} T$ | $A$: absorbance (dimensionless) |
| **Beer–Lambert law** | $A = \varepsilon c l$ | $c$: molar concentration ($\text{mol L}^{-1}$ or $\text{M}$); $l$: path length ($\text{cm}$, standard) or $x$ ($\text{dm}$); $\varepsilon$: molar absorptivity ($\text{L mol}^{-1} \text{cm}^{-1}$ when $l$ is in $\text{cm}$, or $\text{dm}^2 \text{mol}^{-1}$ when $x$ is in $\text{dm}$) |
| **Two-point concentration ratio** | $\frac{c_1}{c_2} = \frac{A_1}{A_2} = \frac{\log_{10} T_1}{\log_{10} T_2}$ | Valid for identical species, wavelength, temperature, and cell path length $l$ |
| **Fundamental vibrational modes** | $\text{Linear: } 3N - 5 \quad \text{Non-linear: } 3N - 6$ | $N$: total number of atoms in the molecule |
| **Reduced mass** | $\mu = \frac{m_1 m_2}{m_1 + m_2}$ | $m_1, m_2$: atomic masses. Convert $\text{amu}$ to $\text{kg}$ by multiplying by $1.66 \times 10^{-27}\text{ kg amu}^{-1}$ |
| **Harmonic vibrational wavenumber** | $\bar{\nu} = \frac{1}{2\pi c}\sqrt{\frac{k}{\mu}} \implies k = 4\pi^2 c^2 \mu \bar{\nu}^2$ | $k$: bond force constant ($\text{N m}^{-1}$). In SI units, use $c = 3 \times 10^8\text{ m s}^{-1}$ and convert $\bar{\nu}$ from $\text{cm}^{-1}$ to $\text{m}^{-1}$ ($\bar{\nu}_{\text{SI}} = 100\bar{\nu}_{\text{cm}^{-1}}$); alternatively use $c = 3 \times 10^{10}\text{ cm s}^{-1}$ with $\bar{\nu}$ in $\text{cm}^{-1}$ |
| **Dielectric dissipation factor** | $\tan\delta = \frac{\varepsilon''}{\varepsilon'}$ | $\varepsilon'$: relative permittivity (dielectric storage); $\varepsilon''$: dielectric loss factor ($\tan\delta$ is dimensionless) |

> **Watch out.** Never mix centimetre wavenumbers ($\text{cm}^{-1}$) with the SI speed of light ($3 \times 10^8\text{ m s}^{-1}$) when calculating force constants. Multiply $\bar{\nu}$ in $\text{cm}^{-1}$ by $100$ to obtain $\text{m}^{-1}$ before squaring.

### Comparison of Analytical Techniques

| Technique | Probe / Perturbation | Physical Property Measured | Primary Analytical Information |
| :--- | :--- | :--- | :--- |
| **UV–Visible Spectroscopy** | UV–visible light ($200\text{–}800\text{ nm}$) | Electronic absorption ($A$ vs $\lambda$) | Conjugated $\pi$ systems, chromophores, quantitative concentration ($c$) |
| **Infrared (IR) Spectroscopy** | Infrared radiation | Vibrational absorption ($\%T$ vs $\bar{\nu}$) | Functional groups, bond force constants ($k$), inter- vs intramolecular H-bonding |
| **Dielectric Thermal Analysis (DETA)** | Alternating electric field across a programmed temperature ramp | Permittivity ($\varepsilon'$), dielectric loss ($\varepsilon''$), $\tan\delta$ vs $T$ | Dipolar/ionic mobility, glass transition ($T_g$), polymer curing, electrical insulation quality |
| **Scanning Electron Microscopy (SEM)** | Focused high-energy electron beam ($\text{keV}$) | Secondary electrons (SE), backscattered electrons (BSE), X-rays | Surface topography (SE), atomic-number contrast (BSE), elemental composition when coupled with an X-ray detector such as EDS |

### Rapid-Retrieval Questions and Answers

1. **Why is Raman spectroscopy not an emission spectrum?**
   Raman spectroscopy measures the **inelastic scattering** of incident photons by molecules, whereas emission spectroscopy measures photons released when excited species relax to a lower energy state.
2. **Can a colourless solution obey the Beer–Lambert law?**
   Yes. A solution can appear colourless while absorbing ultraviolet radiation. At a suitable wavelength it can obey the law when the usual optical and chemical assumptions hold.
3. **What is the difference between a theoretically possible electronic transition and a symmetry-allowed transition?**
   Orbital labels identify candidate excitation types. Selection rules determine their electric-dipole transition probability; matching photon energy alone does not guarantee a strong band. Many allowed transitions are strong, while otherwise forbidden bands may gain weak intensity through vibronic coupling. Not every pi-to-pi-star transition is allowed.
4. **Why is the IR activity criterion stated per vibrational mode rather than per molecule?**
   A molecule can possess both IR-inactive and IR-active modes. A specific vibrational mode is IR active only if that motion causes a **change in the net molecular dipole moment** ($\partial\mu/\partial q \neq 0$).
5. **Why does $\text{CO}_2$ have $4$ fundamental vibrational modes, $3$ IR-active modes, but only $2$ fundamental IR absorption bands?**
   Linear $\text{CO}_2$ ($N=3$) has $3(3)-5 = 4$ modes. The symmetric stretch is IR inactive (zero dipole change). The asymmetric stretch ($\approx 2350\text{ cm}^{-1}$) and two orthogonal bending modes ($\approx 667\text{ cm}^{-1}$) are IR active, but the in-plane and out-of-plane bends are **degenerate** (identical energy), merging into a single peak.
6. **What is the role of the reference (blank) cell in a double-beam UV–visible spectrophotometer?**
   Filled with pure solvent and reagents (excluding the analyte), the blank compensates for reflection, scattering, and solvent absorption and establishes a baseline. Other absorbers in the sample can still interfere.
7. **How does dilution in an inert solvent distinguish intermolecular from intramolecular hydrogen bonding in IR spectra?**
   Dilution breaks **intermolecular** hydrogen bonds (e.g., *p*-nitrophenol), shifting the broad $\text{O–H}$ stretch to a sharp band at higher wavenumber ($3600\text{ cm}^{-1}$). **Intramolecular** hydrogen bonding (e.g., in *o*-nitrophenol) is often less concentration-dependent in a suitable solvent; solvent competition, temperature and conformation can still change it.
8. **What does a low dissipation factor ($\tan\delta$) indicate in DETA?**
   A low $\tan\delta$ means minimal electrical energy is dissipated as heat ($\varepsilon'' \ll \varepsilon'$), which is useful for **low-loss electrical insulation** and capacitor dielectrics. Breakdown strength and other properties also matter; thermal conductivity is not established by this measurement.
9. **How do secondary electrons (SE) and backscattered electrons (BSE) differ in their physical origin in SEM?**
   Secondary electrons are low-energy electrons ejected from sample atoms via **inelastic collisions** with the primary beam, providing surface topography. Backscattered electrons are high-energy primary beam electrons deflected backward via **elastic collisions** with sample atomic nuclei, providing atomic-number ($Z$) compositional contrast.
10. **Why can sample charging be a problem in SEM, and how is it managed?**
    Non-conducting surfaces can accumulate beam charge and distort the image. Conductive coating, suitable grounding or variable-pressure/low-vacuum methods can help. Dehydration is relevant to wet samples in conventional vacuum preparation, not a requirement for every non-conducting material; coatings can alter compositional measurements.

### Numerical Practice Problems

1. A solution placed in a spectrophotometer shows a percentage transmittance of $25\%$. Calculate its absorbance.

   Convert percentage transmittance to fractional transmittance $T$:

   $$
   T = \frac{25}{100} = 0.25
   $$

   Apply the logarithmic relation between absorbance and transmittance:

   $$
   A = -\log_{10} T = -\log_{10}(0.25) = \log_{10}(4) = 0.60206
   $$

2. A solution exhibits an absorbance of $0.60$ in a cuvette of path length $2.0\text{ cm}$ at a wavelength where the molar absorptivity is $150\text{ L mol}^{-1}\text{cm}^{-1}$. Calculate the molar concentration of the solution.

   Rearrange the Beer–Lambert law $A = \varepsilon c l$ to solve for concentration $c$:

   $$
   c = \frac{A}{\varepsilon l} = \frac{0.60}{(150\text{ L mol}^{-1}\text{cm}^{-1})(2.0\text{ cm})} = \frac{0.60}{300}\text{ mol L}^{-1} = 0.0020\text{ M}
   $$

3. A standard solution of a coloured complex with concentration $20.0\text{ mg L}^{-1}$ gives an absorbance of $0.40$ at $\lambda_{\max}$. Under identical conditions and in the same cell, an unknown solution of the same complex gives an absorbance of $0.25$. Calculate the concentration of the unknown solution.

   At constant $\varepsilon$ and path length $l$, absorbance is directly proportional to concentration:

   $$
   \frac{c_2}{c_1} = \frac{A_2}{A_1} \implies c_2 = c_1 \left(\frac{A_2}{A_1}\right)
   $$

   Substitute the given values:

   $$
   c_2 = (20.0\text{ mg L}^{-1}) \times \frac{0.25}{0.40} = 12.5\text{ mg L}^{-1}
   $$

4. Calculate the total number of fundamental vibrational modes for (a) linear carbon dioxide ($\text{CO}_2$, $N=3$) and (b) bent water ($\text{H}_2\text{O}$, $N=3$).

   For linear $\text{CO}_2$ ($N = 3$), apply the linear mode formula:

   $$
   \text{Modes (}\text{CO}_2\text{)} = 3N - 5 = 3(3) - 5 = 4
   $$

   For non-linear $\text{H}_2\text{O}$ ($N = 3$), apply the non-linear mode formula:

   $$
   \text{Modes (}\text{H}_2\text{O}\text{)} = 3N - 6 = 3(3) - 6 = 3
   $$

5. During a DETA experiment at a fixed frequency and temperature, a polymer sample exhibits a relative permittivity $\varepsilon' = 5.0$ and a dielectric loss factor $\varepsilon'' = 0.15$. Calculate the dissipation factor ($\tan\delta$).

   Use the ratio of dielectric loss to permittivity:

   $$
   \tan\delta = \frac{\varepsilon''}{\varepsilon'} = \frac{0.15}{5.0} = 0.030
   $$

### Long-Answer Practice Prompts

1. State the differential form of the Beer–Lambert law and integrate it to obtain $A = \varepsilon c l$. Sketch the calibration plot of $A$ versus $c$, identify its slope, and list four experimental conditions required for the law to hold.
2. Explain the four types of electronic transitions ($\sigma \to \sigma^*$, $n \to \sigma^*$, $\pi \to \pi^*$, and $n \to \pi^*$) with an energy-level diagram. Why does extending conjugation in polyenes shift $\lambda_{\max}$ to longer wavelengths?
3. Draw a labelled block diagram of a double-beam UV–visible spectrophotometer. Explain the function of the monochromator, quartz cuvettes, beam splitter, and photomultiplier detector.
4. State the selection rule for infrared absorption. Sketch all fundamental vibrational modes of $\text{CO}_2$ and $\text{H}_2\text{O}$, classify each mode as IR active or inactive, and account for the number of bands observed in each spectrum.
5. Write the Hooke's law equation relating vibrational wavenumber $\bar{\nu}$, bond force constant $k$, and reduced mass $\mu$. Using this relationship, explain why the stretching wavenumber increases along the series $\text{C–C} < \text{C=C} < \text{C}\equiv\text{C}$.
6. How is IR spectroscopy used to distinguish between *ortho*-nitrophenol  and *para*-nitrophenol  upon serial dilution? Support your answer with structural diagrams showing hydrogen bonding.
7. Explain the principle of Dielectric Thermal Analysis (DETA). Define permittivity ($\varepsilon'$), dielectric loss ($\varepsilon''$), and $\tan\delta$, draw the instrumentation block diagram, and list four engineering applications.
8. Describe the working principle and instrumentation of a Scanning Electron Microscope (SEM) with a neat schematic diagram. Compare the origin and analytical utility of secondary electrons, backscattered electrons, and characteristic X-rays.

### Exam-Readiness Checklist

- [ ] I can convert effortlessly between transmittance ($T$ or $\%T$) and absorbance ($A$) and apply consistent units ($\text{cm}$ vs $\text{dm}$) for $\varepsilon$.
- [ ] I can identify chromophores, auxochromes, and all possible electronic transitions directly from a molecular structure.
- [ ] I can calculate $3N-5$ or $3N-6$ vibrational modes and convert $\text{amu}$ to $\text{kg}$ and $\text{cm}^{-1}$ to $\text{m}^{-1}$ in force-constant problems.
- [ ] I can sketch and explain the block diagrams, signal origins, and applications for UV–Vis, IR, DETA, and SEM.
