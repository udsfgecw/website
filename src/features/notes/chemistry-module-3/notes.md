<!-- page 1 | Spectroscopy, radiation and molecular energy -->

## Spectroscopy, radiation and molecular energy

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

---

### Interaction of radiation with matter

**Spectroscopy**

Spectroscopy is the study of how electromagnetic radiation interacts with atoms, ions, and molecules. Many spectroscopic methods provide rapid quantitative and qualitative analysis using minute sample quantities. Whether the sample can be recovered intact depends on the required sample preparation, incident radiation energy, and specific technique employed.

**Electromagnetic radiation**

Electromagnetic radiation consists of mutually perpendicular oscillating electric and magnetic fields propagating through space, characterised by wavelength ($\lambda$), frequency ($\nu$), or wavenumber ($\bar{\nu} = 1/\lambda$). The energy $E$ of a single photon is directly proportional to frequency and inversely proportional to wavelength:

$$
E = h\nu = \frac{hc}{\lambda} = hc\bar{\nu}
$$

where:

* $h$ is Planck's constant ($6.626 \times 10^{-34}\text{ J s}$)
* $c$ is the speed of light in vacuum ($3.00 \times 10^8\text{ m s}^{-1}$)
* $\nu$ is frequency in hertz ($\text{Hz}$ or $\text{s}^{-1}$)
* $\lambda$ is wavelength (commonly in $\text{m}$ or $\text{nm}$)
* $\bar{\nu}$ is wavenumber (commonly in $\text{cm}^{-1}$)

Across the electromagnetic spectrum—from radio waves through microwaves, infrared (IR), visible light, ultraviolet (UV), X-rays, to gamma rays—wavelength decreases progressively while frequency and photon energy increase. When calculating energies, ensure compatible length units: when using $c$ in $\text{m s}^{-1}$, convert $\lambda$ to metres ($\text{m}$) and $\bar{\nu}$ to $\text{m}^{-1}$ ($1\text{ cm}^{-1} = 100\text{ m}^{-1}$).

#### Fundamental radiation–matter processes

When electromagnetic radiation encounters matter, three primary interactions can occur:

1. **Absorption:** An atom or molecule absorbs a resonant photon and transitions from a lower energy state ($E_1$) to an allowed higher energy state ($E_2$), where $\Delta E = E_2 - E_1 = h\nu$. Typical absorption methods include UV–visible, infrared, microwave, and nuclear magnetic resonance (NMR) spectroscopy.
2. **Emission:** An excited species relaxes from a higher energy state ($E_2$) to a lower energy state ($E_1$) by releasing a photon of matching energy $\Delta E = h\nu$. Key examples include atomic emission and fluorescence spectroscopy.
3. **Scattering:** Incident radiation is redirected into new directions upon colliding with matter without necessarily undergoing direct resonant absorption. In **Raman spectroscopy**, *inelastic light scattering* occurs, causing scattered photons to gain or lose discrete amounts of vibrational or rotational energy.

![Qualitative energy level diagram for absorption showing an upward transition from a lower state to a higher state upon absorbing a photon](/notes/cse/s1/chemistry/module-3/assets/page-002-image-1-structured.svg)

*Figure 1a: Qualitative schematic of photon absorption driving an upward transition from a lower to a higher energy state.*

![Qualitative energy level diagram for emission showing a downward transition from a higher state to a lower state releasing a photon](/notes/cse/s1/chemistry/module-3/assets/page-002-image-2-structured.svg)

*Figure 1b: Qualitative schematic of photon emission during relaxation from a higher to a lower energy state.*

> **Watch out.** Quantum mechanical transitions take place between any permitted *lower* and *higher* energy states that satisfy the specific selection rules—not exclusively between the absolute ground and highest excited levels. Furthermore, Raman spectroscopy is an inelastic scattering process, not an emission technique; and atomic force microscopy (AFM) is a mechanical scanning probe method, not optical spectroscopy.

---

### Molecular energy levels and the Born–Oppenheimer approximation

A molecule distributes its total energy among translational, rotational, vibrational, and electronic degrees of freedom:

**Translational energy**

Translational energy ($E_{\text{trans}}$) arises from the unconstrained displacement of the molecule's centre of mass through three-dimensional space. Because translational quantum states in macroscopic containers are spaced by infinitesimal energy increments, they form an effective continuum and are separated from quantised internal states.

**Born–Oppenheimer approximation**

The Born–Oppenheimer approximation states that because heavy atomic nuclei move much more slowly than light electrons, electronic motion can be treated independently of nuclear motions. Under this approximation, the total internal molecular energy ($E_{\text{int}}$) separates into distinct electronic, vibrational, and rotational contributions:

$$
E_{\text{int}} \approx E_{\text{ele}} + E_{\text{vib}} + E_{\text{rot}}
$$

| Energy Level Type | Physical Origin | Typical Spectral Region | Typical Units Used | Key Requirement |
| :--- | :--- | :--- | :--- | :--- |
| **Electronic ($\Delta E_{\text{ele}}$)** | Promotion of bonding or non-bonding valence electrons between molecular orbitals | Ultraviolet–visible (UV–vis) | Wavelength in $\text{nm}$ ($200\text{--}800\text{ nm}$) | Chromophore / accessible empty orbitals |
| **Vibrational ($\Delta E_{\text{vib}}$)** | Periodic stretching and bending of chemical bonds with fixed centre of mass | Infrared (IR) | Wavenumber in $\text{cm}^{-1}$ ($400\text{--}4000\text{ cm}^{-1}$) | Dynamic change in molecular dipole moment ($\frac{d\mu}{dx} \neq 0$) |
| **Rotational ($\Delta E_{\text{rot}}$)** | End-over-end rotation of the molecule about an axis passing through its centre of mass | Microwave | Frequency ($\text{GHz}$) or wavenumber ($\text{cm}^{-1}$) | Permanent electric dipole moment ($\mu \neq 0$) |

The energy separations between adjacent quantum states follow a strict hierarchical order:

$$
\Delta E_{\text{ele}} > \Delta E_{\text{vib}} > \Delta E_{\text{rot}} \gg \Delta E_{\text{trans}}
$$

![Qualitative diagram of nested electronic, vibrational, and rotational energy levels in a molecule](/notes/cse/s1/chemistry/module-3/assets/page-028-image-1-clean.svg)

*Figure 2: Qualitative diagram of nested molecular energy levels. Each electronic state contains multiple vibrational levels ($v$), and each vibrational level contains closely spaced rotational levels ($J$). Spacing is schematic and not drawn to scale.*

---

### Atomic versus molecular spectra

The presence of chemical bonds fundamentally alters the nature of spectral transitions:

**Atomic spectra**

Atomic spectra arise from isolated gaseous atoms that possess only electronic degrees of freedom and lack chemical bonds, meaning they have no vibrational or rotational sublevels. Electronic transitions between discrete atomic orbitals therefore yield narrow, sharp **line spectra** (subject to Doppler and natural lifetime broadening).

**Molecular spectra**

Molecular spectra arise because molecules possess vibrational and rotational sublevels nested within each electronic state. An electronic transition in a molecule is accompanied by simultaneous vibrational and rotational co-transitions (vibronic and rovibronic coupling). In condensed phases or solution, rapid intermolecular collisions and solvent-solute interactions further broaden these closely packed transitions into broad **band spectra**.

---

### Self-check questions

1. **Question:** Why does a gaseous atom produce sharp spectral lines whereas a molecule in solution produces broad UV–visible absorption bands?  
   **Answer:** Gaseous atoms undergo electronic transitions purely between unperturbed, discrete atomic energy levels, yielding sharp lines. Molecules have vibrational and rotational energy sublevels nested within each electronic state. Simultaneous transitions across these closely spaced sublevels, combined with collisional dephasing and solvent interactions in solution, smear individual transitions into continuous, broad absorption bands.

2. **Question:** Arrange microwave, ultraviolet, and infrared radiation in order of increasing photon energy and state the primary molecular transition promoted by each.  
   **Answer:** In order of increasing energy:
   $$\text{Microwave } (\Delta E_{\text{rot}}) < \text{Infrared } (\Delta E_{\text{vib}}) < \text{Ultraviolet } (\Delta E_{\text{ele}})$$
   * **Microwave:** Promotes rotational transitions.
   * **Infrared:** Promotes vibrational stretching and bending transitions.
   * **Ultraviolet:** Promotes electronic transitions between valence molecular orbitals.

---

---

<!-- page 2 | Transmittance, absorbance and the Beer–Lambert law -->

## Transmittance, absorbance and the Beer–Lambert law

When a beam of electromagnetic radiation passes through a sample solution, molecules absorb photons whose energies match allowed internal transitions. Consequently, the intensity of the emerging beam is lower than that of the entering beam. Quantitative absorption spectroscopy measures this attenuation to determine how much absorbing substance is present.

### Transmittance and Absorbance

Consider a parallel beam of monochromatic radiation with incident intensity $I_0$ passing through a sample cell (cuvette) of path length $l$ containing an absorbing solution of molar concentration $c$. The radiation emerges with transmitted intensity $I$.

![Incident radiation I0 passing through a cuvette of path length x and concentration c, emerging with transmitted intensity I](/notes/cse/s1/chemistry/module-3/assets/page-004-image-3-structured.svg)

*Figure 1: Attenuation of an incident light beam ($I_0$) passing through an absorbing solution of concentration $c$ and path length $x$ (or $l$).*

**Transmittance**

Transmittance ($T$) is the fraction of incident radiation that successfully passes through the sample:

$$
T = \frac{I}{I_0}
$$

Because $T$ is a ratio of two intensities, it is dimensionless and ranges from $0$ (complete absorption) to $1$ (no absorption). Instrument readouts often express this value as percentage transmittance ($\%T$):

$$
\%T = 100 \times T = \frac{I}{I_0} \times 100
$$

Transmittance decreases exponentially as concentration or path length increases.

**Absorbance**

Absorbance ($A$), historically termed optical density, is defined as the base-10 logarithm of the reciprocal of transmittance:

$$
A = \log_{10}\left(\frac{I_0}{I}\right) = -\log_{10} T
$$

To convert directly from percentage transmittance to absorbance, substitute $T = \%T / 100$:

$$
A = -\log_{10}\left(\frac{\%T}{100}\right) = \log_{10}(100) - \log_{10}(\%T) = 2 - \log_{10}(\%T)
$$

Like transmittance, absorbance is a dimensionless quantity.

---

### Beer–Lambert Law and Derivation

**Beer–Lambert Law**

Beer–Lambert law states that when a parallel beam of monochromatic radiation passes through a homogeneous, non-scattering, dilute solution, the rate of decrease in radiation intensity ($-dI$) with respect to an infinitesimal thickness of the medium ($dl$) is directly proportional to both the local intensity $I$ and the molar concentration $c$ of the absorbing species. It unifies Lambert's observation (attenuation scales with path length) with Beer's observation (attenuation scales with concentration).

> **Watch out.** Many introductory notes state that the Beer–Lambert law applies only to "coloured" solutions. In reality, the law applies to any absorbing species—including colourless solutions that absorb strongly in the ultraviolet (UV) or infrared (IR) regions.

#### Derivation Steps

1. **Set up the differential rate equation:** Express the rate of intensity loss across an infinitesimal layer of thickness $dl$:

   $$
   -\frac{dI}{dl} \propto I c \implies -\frac{dI}{dl} = k c I
   $$

where $k$ is a proportionality constant dependent on the wavelength and the absorbing species.

2. **Separate variables:** Rearrange the equation to isolate intensity terms on the left and path length terms on the right:

   $$
   -\frac{dI}{I} = k c \, dl
   $$

3. **Integrate across the cell boundaries:** Integrate from the entrance boundary ($l = 0$, where intensity is $I_0$) to the exit boundary ($l = l$, where intensity is $I$):

   $$
   \int_{I_0}^{I} -\frac{dI}{I} = \int_{0}^{l} k c \, dl
   $$

4. **Evaluate the definite integrals:**

   $$
   -\left[\ln I\right]_{I_0}^{I} = k c [l]_0^l \implies \ln\left(\frac{I_0}{I}\right) = k c l
   $$

5. **Convert to common logarithms:** Convert from natural logarithms ($\ln$) to decadic logarithms ($\log_{10}$) using $\ln(x) = \ln(10) \log_{10}(x) \approx 2.303 \log_{10}(x)$:

   $$
   \log_{10}\left(\frac{I_0}{I}\right) = \left(\frac{k}{\ln 10}\right) c l = \left(\frac{k}{2.303}\right) c l
   $$

6. **Define molar absorptivity:** Define the molar absorption coefficient as $\varepsilon = k / \ln 10$. Substituting $A = \log_{10}(I_0 / I)$ yields the standard integrated law:

   $$
   A = \varepsilon c l
   $$

*(Note: Some texts and diagrams denote the cuvette path length using $x$ rather than $l$, expressing the relationship as $A = \varepsilon c x$.)*

---

### Units of the Molar Absorption Coefficient ($\varepsilon$)

**Molar Absorptivity**

Molar absorption coefficient ($\varepsilon$) (or molar absorptivity) is a fundamental optical property measuring how strongly a chemical species attenuates light at a specified wavelength, solvent, and temperature. Because absorbance $A$ is dimensionless, the dimensions of $\varepsilon$ must cancel those of concentration $c$ and path length $l$ ($\varepsilon = A / (c l)$).

| Convention | Concentration ($c$) | Path Length ($l$ or $x$) | Unit of $\varepsilon$ | Numerical Relationship |
| :--- | :--- | :--- | :--- | :--- |
| **Standard Spectroscopy** | $\text{mol L}^{-1}$ (or $\text{M}$) | $\text{cm}$ | $\text{L mol}^{-1} \text{cm}^{-1}$ | $\varepsilon_{\text{cm}}$ |
| **Decimetre Convention** | $\text{mol dm}^{-3}$ | $\text{dm}$ ($1\text{ dm} = 10\text{ cm}$) | $\text{dm}^2 \text{mol}^{-1}$ | $\varepsilon_{\text{dm}} = 10 \times \varepsilon_{\text{cm}}$ |

> **Watch out.** Because $1\text{ L} = 1\text{ dm}^3$, expressing path length in decimetres ($\text{dm}$) simplifies the dimensional algebra ($\text{dm}^3 \text{mol}^{-1} \text{dm}^{-1} = \text{dm}^2 \text{mol}^{-1}$), which is why exam problems often use it. However, dividing by $0.1\text{ dm}$ instead of $1\text{ cm}$ makes the numerical value of $\varepsilon$ in $\text{dm}^2 \text{mol}^{-1}$ exactly $10$ times larger than the standard value in $\text{L mol}^{-1} \text{cm}^{-1}$. Always state your chosen path-length unit explicitly.

---

### Calibration and Analysis

For a fixed cuvette path length $l$, plotting absorbance $A$ against molar concentration $c$ across a series of known standard solutions yields a linear relationship described by $A = (\varepsilon l)c$.

![Calibration plot of absorbance A against concentration C showing a straight line through the origin with slope epsilon x](/notes/cse/s1/chemistry/module-3/assets/page-006-image-1-structured.svg)

*Figure 2: Ideal Beer–Lambert calibration plot of absorbance ($A$) versus concentration ($C$), with slope equal to $\varepsilon x$ (or $\varepsilon l$).*

Ideally, the calibration line passes through the origin $(0,0)$ with a slope of $\varepsilon l$. Once established, the concentration of an unknown sample can be interpolated directly from the graph or calculated from a reference standard using the proportional ratio:

$$
\frac{A_1}{A_2} = \frac{c_1}{c_2} = \frac{-\log_{10} T_1}{-\log_{10} T_2}
$$

**Spectroscopic Blank**

Spectroscopic blank refers to an identical cuvette filled with pure solvent and all background reagents excluding the analyte. Because cuvette walls and solvent molecules reflect and absorb a small fraction of incident radiation, the spectrophotometer must be zeroed using a blank before sample measurement. This baseline correction minimizes solvent and cell contributions. If minor instrumental drift or reagent background persists, calibration data is fitted to a linear regression with an intercept ($A = \varepsilon l c + b$).

---

### Assumptions and Deviations from Linearity

The linear relationship $A = \varepsilon c l$ holds strictly only when specific physical, chemical, and instrumental constraints are satisfied:

* **Monochromatic radiation:** The incident radiation must consist of a narrow wavelength band over which $\varepsilon$ is effectively constant. Broad polychromatic light or instrumental **stray light** causes severe negative deviations at high absorbance values.
* **Dilute solutions:** At high solute concentrations, inter-ionic and intermolecular electrostatic interactions perturb the electron charge distributions of the absorbing chromophore, altering $\varepsilon$. High concentrations also alter the solution's refractive index.
* **Homogeneous, non-scattering medium:** The solution must be clear and free from turbidity. Suspended colloidal particles scatter light away from the photodetector, generating artificially elevated apparent absorbance readings.
* **Chemical stability:** The absorbing species must not undergo concentration-dependent chemical equilibria (such as acid–base dissociation, association, tautomerism, or complexation) that alter the relative proportion of absorbing molecules upon dilution.

---

### Self-Check Questions

1. **Question:** A solution transmits $25\%$ of incident monochromatic light at $450\text{ nm}$. What is its absorbance?  
   **Answer:** Using the conversion formula $A = 2 - \log_{10}(\%T)$:
   $$
   A = 2 - \log_{10}(25) = 2 - 1.398 = 0.602
   $$

2. **Question:** Why does a spectrophotometric calibration curve often bend downwards (negative deviation) at high analyte concentrations?  
   **Answer:** At elevated concentrations, solute–solute electrostatic interactions alter the molar absorptivity ($\varepsilon$), chemical equilibria may shift the active chromophore population, and instrumental stray light places an upper ceiling on accurately measurable absorbance.

---

---

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

#### Example 1: Calculating Absorbance and Molar Absorption Coefficient from Percentage Transmittance

**Problem:**  
The percentage transmittance of a $0.01\text{ M}$ dye solution in ethanol is $20\%$ in a $2\text{ cm}$ cell for monochromatic light of wavelength $5000\text{ \AA}$. Calculate the absorbance and the molar absorption coefficient in both $\text{L mol}^{-1}\text{ cm}^{-1}$ and $\text{dm}^2\text{ mol}^{-1}$.

**Solution:**

1. **Identify the given data and convert units:**
   * Concentration: $c = 0.01\text{ M} = 0.01\text{ mol L}^{-1} = 0.01\text{ mol dm}^{-3}$
   * Path length: $x = 2\text{ cm} = 0.2\text{ dm}$
   * Wavelength: $\lambda = 5000\text{ \AA} = 5000 \times 10^{-10}\text{ m} = 500\text{ nm}$ (fixes the value of $\varepsilon$ for this transition, though $\lambda$ does not enter the arithmetic directly)
   * Percentage transmittance: $\%T = 20\%$, so fractional transmittance $T = \frac{20}{100} = 0.20$ (meaning for $I_0 = 100$ arbitrary intensity units, $I = 20$ units pass through)

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

**Answer:**  
The absorbance is $0.699$ (dimensionless), and the molar absorption coefficient is $34.95\text{ L mol}^{-1}\text{ cm}^{-1}$ (or $349.5\text{ dm}^2\text{ mol}^{-1}$).

---



#### Example 2: Finding an Unknown Concentration by Direct Absorbance Ratio

**Problem:**  
A standard dye solution of concentration $0.04\text{ M}$ shows an absorbance of $0.045$ at $530\text{ nm}$, while a test solution of the same dye shows an absorbance of $0.022$ under identical conditions (same cuvette and temperature). Find the concentration of the test solution.

**Solution:**

1. **State the given quantities:**
   * Standard concentration: $c_1 = 0.04\text{ M}$
   * Standard absorbance: $A_1 = 0.045$
   * Test absorbance: $A_2 = 0.022$
   * Measurement wavelength: $\lambda = 530\text{ nm}$

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

**Answer:**  
The concentration of the test dye solution is $0.0196\text{ M}$.

---



#### Example 3: Colorimetric Determination of $\text{Fe}^{3+}$ from Fractional Transmittance

**Problem:**  
A $50\text{ ppm}$ standard solution of $\text{Fe}^{3+}$, after developing a red complex with excess ammonium thiocyanate ($\text{NH}_4\text{SCN}$), shows a fractional transmittance of $0.2$ at $620\text{ nm}$. An unknown $\text{Fe}^{3+}$ solution treated identically shows a fractional transmittance of $0.4$ at the same wavelength in the same cell. Calculate the concentration of the unknown $\text{Fe}^{3+}$ solution. *(Note: One course note transcription states $620\text{ nm}$ while another states $640\text{ nm}$; the arithmetic is independent of the numerical wavelength provided both standard and sample are measured at the exact same chosen wavelength.)*

**Solution:**

1. **Understand the chemical and optical conditions:**  
   A colour-developing reagent ($\text{SCN}^-$) is added in excess under controlled conditions to form strongly absorbing red iron(III)–thiocyanate complexes. Calibration relates their response to the analytical iron concentration. Merely adding the same volume of reagent is not enough by itself; the reagent must be in sufficient excess, with identical matrix conditions and proper blank calibration, so that the complex speciation and effective $\varepsilon$ remain constant across both solutions.

2. **List the given values:**
   * Standard concentration: $c_1 = 50\text{ ppm}$
   * Standard fractional transmittance: $T_1 = 0.2$
   * Unknown fractional transmittance: $T_2 = 0.4$

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

**Answer:**  
The concentration of the unknown $\text{Fe}^{3+}$ solution is $28.47\text{ ppm}$. Mass-concentration ratios are valid here because the standard and unknown use the same concentration basis; calculating a *molar* absorption coefficient requires molar concentration.

---



### Self-Check Questions

1. **Question:** Solution X has $\%T = 10\%$ and Solution Y of the same solute in the same cuvette has $\%T = 50\%$. Which solution is more concentrated, and by what factor?  
   **Answer:** Solution X is more concentrated because it transmits less light ($A_X = \log_{10}(100/10) = 1.000$ vs $A_Y = \log_{10}(100/50) = 0.3010$). It is $\frac{1.000}{0.3010} = 3.32$ times as concentrated as Solution Y.

2. **Question:** Why is the molar absorption coefficient $\varepsilon = 34.95\text{ L mol}^{-1}\text{ cm}^{-1}$ numerically equal to $349.5\text{ dm}^2\text{ mol}^{-1}$?  
   **Answer:** Because $1\text{ L} = 1\text{ dm}^3$ and $1\text{ cm} = 0.1\text{ dm}$, substituting these into the unit expression gives $1\text{ L mol}^{-1}\text{ cm}^{-1} = 1\text{ dm}^3\text{ mol}^{-1} (0.1\text{ dm})^{-1} = 10\text{ dm}^2\text{ mol}^{-1}$.

---

---

<!-- page 4 | UV–visible spectroscopy and electronic transitions -->

## UV–visible spectroscopy and electronic transitions

**UV–visible (UV–vis) spectroscopy**

UV–visible (UV–vis) spectroscopy is an absorption spectroscopy technique that measures how molecules interact with electromagnetic radiation in the ultraviolet ($10\text{–}400\text{ nm}$) and visible ($400\text{–}800\text{ nm}$) regions. Because photons in these spectral bands carry sufficient energy to promote valence electrons from lower-energy ground-state molecular orbitals to higher-energy excited-state molecular orbitals, an absorption spectrum recorded in this region is known as an **electronic spectrum**. It is conventionally represented as a plot of absorbance ($A$) or molar absorptivity ($\varepsilon$) as a function of wavelength ($\lambda$, expressed in $\text{nm}$).

For practical chemical analysis, the ultraviolet–visible range is divided into three distinct operational domains:

* **Far (vacuum) UV region ($< 200\text{ nm}$):** High-energy radiation where atmospheric oxygen and common optical materials absorb strongly. Standard measurements require specialized vacuum chambers, nitrogen purge systems, and high-purity fluoride optics.
* **Near-UV region ($200\text{–}400\text{ nm}$):** Accessible using standard quartz (fused silica) cuvettes and standard benchtop optical paths in ambient air.
* **Visible region ($400\text{–}800\text{ nm}$):** Directly perceived by the human visual system. A substance appears coloured when it selectively absorbs specific visible wavelengths and transmits or reflects the complementary wavelengths.

The standard introductory benchtop working window spans **$200\text{–}800\text{ nm}$**, though modern research spectrophotometers often extend beyond these boundaries.

---

### Molecular orbitals and electronic transitions

When a molecule absorbs an incident photon matching the transition energy $\Delta E$, an electron is promoted from an occupied molecular orbital to an unoccupied antibonding orbital according to the Planck–Einstein relation:

$$
\Delta E = \frac{hc}{\lambda}
$$

where:
* $h$ is Planck's constant ($6.626 \times 10^{-34}\text{ J s}$)
* $c$ is the speed of light in a vacuum ($3.00 \times 10^8\text{ m s}^{-1}$)
* $\lambda$ is the absorbed photon wavelength ($\text{m}$)

Ground-state valence electrons reside in three principal classes of molecular orbitals:

1. **Sigma ($\sigma$) bonding orbitals:** Low-energy, symmetrical orbitals housing strongly localized electrons that constitute single covalent bonds.
2. **Pi ($\pi$) bonding orbitals:** Higher-energy bonding orbitals formed by the lateral overlap of atomic $p$ orbitals, housing mobile electrons in double and triple bonds.
3. **Non-bonding ($n$) orbitals:** Orbitals containing localized, unshared valence lone pairs on heteroatoms such as oxygen ($\text{O}$), nitrogen ($\text{N}$), sulfur ($\text{S}$), and the halogens ($\text{X}$).

The higher-energy unoccupied levels are **antibonding orbitals**, designated as $\pi^*$ (pi-star) and $\sigma^*$ (sigma-star). In simple organic frameworks, orbital energy typically ascends in the order $\sigma < \pi < n < \pi^* < \sigma^*$. This hierarchy establishes four fundamental electronic promotions:

$$
\Delta E(\sigma \to \sigma^*) > \Delta E(n \to \sigma^*) > \Delta E(\pi \to \pi^*) > \Delta E(n \to \pi^*)
$$

*(Note: While this relative ordering provides a reliable heuristic, exact orbital energies depend on atomic electronegativity and molecular geometry.)*

---

### The four principal transition types

* **$\sigma \to \sigma^*$ transitions:** Promotion of an electron from a bonding $\sigma$ orbital into an antibonding $\sigma^*$ orbital. Due to the high thermodynamic stability and bond strength of single covalent bonds, this process requires high energy, producing absorption bands deep in the far-UV region ($\lambda < 150\text{ nm}$). Fully saturated hydrocarbons (such as methane, ethane, and cyclohexane) exhibit exclusively $\sigma \to \sigma^*$ transitions and are completely transparent across the routine $200\text{–}800\text{ nm}$ analytical window.
* **$n \to \sigma^*$ transitions:** Promotion of a non-bonding lone-pair electron ($n$) into an unoccupied $\sigma^*$ orbital. Saturated molecules bearing heteroatoms with lone pairs (e.g., alcohols, ethers, amines, alkyl halides) undergo these transitions. They require less energy than $\sigma \to \sigma^*$ transitions and generally occur between $150\text{ nm}$ and $250\text{ nm}$. Highly electronegative systems (methanol, methylamine) absorb in the far UV below $200\text{ nm}$, whereas heavier, polarizable systems (such as iodoalkanes) extend well into the accessible near-UV region above $200\text{ nm}$.
* **$\pi \to \pi^*$ transitions:** Promotion of an electron from a bonding $\pi$ orbital into an antibonding $\pi^*$ orbital in unsaturated compounds (alkenes, alkynes, aromatics, carbonyls). Isolated carbon–carbon double bonds absorb in the far UV (ethene exhibits $\lambda_{\max} \approx 169\text{ nm}$), whereas conjugated polyene systems shift into the routine $200\text{–}800\text{ nm}$ region. Most $\pi \to \pi^*$ transitions are symmetry- and spin-allowed, generating intense absorption bands ($\varepsilon_{\max} \approx 10^3\text{–}10^5\text{ L mol}^{-1}\text{ cm}^{-1}$). However, symmetry-forbidden $\pi \to \pi^*$ bands also exist, such as the weak benzenoid band centered at $255\text{ nm}$.
* **$n \to \pi^*$ transitions:** Promotion of a heteroatom lone-pair electron into an unoccupied antibonding $\pi^*$ orbital in unsaturated systems containing heteroatoms (aldehydes, ketones, carboxylic acids, esters, nitro groups). In simple carbonyl compounds, the $n$ and $\pi^*$ orbitals are mutually perpendicular, making the electric-dipole transition formally symmetry-forbidden. Molecular vibrations slightly disrupt molecular symmetry (vibronic coupling), permitting weak absorption ($\varepsilon_{\max} \approx 10\text{–}100\text{ L mol}^{-1}\text{ cm}^{-1}$) at longer wavelengths ($200\text{–}400\text{ nm}$) relative to $\pi \to \pi^*$ bands.

| Transition | Structural Requirement | Representative Examples | Typical Spectral Region | Relative Absorption Intensity |
| :--- | :--- | :--- | :--- | :--- |
| $\sigma \to \sigma^*$ | Saturated single covalent bonds ($\sigma$) | $\text{CH}_4$, $\text{C}_2\text{H}_6$, cyclohexane | Far UV ($< 150\text{ nm}$) | Strong (outside routine benchtop window) |
| $n \to \sigma^*$ | Single bonds + heteroatom lone pairs | $\text{CH}_3\text{OH}$, $\text{CH}_3\text{NH}_2$, $\text{CH}_3\text{I}$ | Far UV to near UV ($150\text{–}250\text{ nm}$) | Moderate to weak |
| $\pi \to \pi^*$ | Multiple covalent bonds ($\pi$ systems) | Ethene, 1,3-butadiene, benzene | Far UV (isolated) to $200\text{–}800\text{ nm}$ (conjugated) | Usually strong ($\varepsilon_{\max} \approx 10^3\text{–}10^5$); occasionally weak |
| $n \to \pi^*$ | Multiple bonds with heteroatom lone pairs | Acetone, ethanal, nitromethane | Near UV / visible ($200\text{–}800\text{ nm}$) | Weak ($\varepsilon_{\max} \approx 10\text{–}100$; symmetry-forbidden) |

> **Watch out.** Describing $\sigma \to \sigma^*$ and $n \to \sigma^*$ transitions as "UV–vis inactive" is inaccurate. They do absorb UV radiation; however, their absorption maxima fall below $200\text{ nm}$, placing them outside the detection window of routine benchtop instruments operating in air.

---

### Chromophores, auxochromes, and spectral shifts

**Chromophore**

An isolated functional group or structural unit within a molecule responsible for absorbing electromagnetic radiation in a defined spectral region. Although historically defined as an impartor of visible color, in modern spectroscopy a chromophore refers to any light-absorbing group, even if absorption occurs strictly in the ultraviolet region (e.g., $\text{C=C}$, $\text{C=O}$, $-\text{NO}_2$, $-\text{N=N}-$, benzene rings, and even $\sigma$-bond frameworks in the vacuum UV).

**Auxochrome**

A saturated functional substituent bearing non-bonding electron pairs (such as $-\text{OH}$, $-\text{OR}$, $-\text{NH}_2$, $-\text{NR}_2$, or halogens) that does not absorb significantly above $200\text{ nm}$ on its own, but systematically alters both the wavelength and molar absorptivity when directly attached to a chromophore. Auxochromes delocalize their lone pairs into the adjacent $\pi$ system via resonance ($n\text{–}\pi$ conjugation) or inductive effects, generally shifting absorption toward longer wavelengths and increasing band intensity.

**Wavelength of maximum absorbance ($\lambda_{\max}$)**

The specific wavelength corresponding to the absorption peak of an electronic transition band. It serves as a diagnostic physical parameter governed by molecular conjugation, auxochromic substitution, and solvent interactions.

#### Spectral shifts and intensity modifications

Structural substitution or solvent changes produce four distinct spectral modifications:

* **Bathochromic shift (Red shift):** Displacement of an absorption band to a longer wavelength (lower excitation energy, smaller $\Delta E$).
* **Hypsochromic shift (Blue shift):** Displacement of an absorption band to a shorter wavelength (higher excitation energy, larger $\Delta E$).
* **Hyperchromic effect:** An increase in the molar absorptivity ($\varepsilon_{\max}$), reflecting enhanced transition probability.
* **Hypochromic effect:** A decrease in the molar absorptivity ($\varepsilon_{\max}$), reflecting suppressed transition probability.

---

### Self-check questions

1. **Which electronic transitions occur in propanone (acetone, $\text{CH}_3\text{COCH}_3$), and which transition occurs at the longest wavelength?**  
   *Answer:* Propanone contains single $\text{C–H}$ and $\text{C–C}$ $\sigma$ bonds, a $\text{C=O}$ double bond ($\sigma + \pi$), and non-bonding lone pairs ($n$) on the carbonyl oxygen atom. Consequently, it exhibits four possible promotions: $\sigma \to \sigma^*$, $n \to \sigma^*$, $\pi \to \pi^*$, and $n \to \pi^*$. Because the $n \to \pi^*$ transition possesses the smallest energy difference ($\Delta E$), it absorbs photons of the lowest energy and therefore appears at the longest wavelength ($\lambda_{\max} \approx 280\text{ nm}$).

2. **Why is the $n \to \pi^*$ absorption band of an aldehyde significantly weaker than its $\pi \to \pi^*$ absorption band?**  
   *Answer:* The non-bonding orbital ($n$) of the carbonyl oxygen lies in the molecular plane, whereas the $\pi^*$ orbital is oriented perpendicular to the molecular plane. Because spatial orbital overlap between $n$ and $\pi^*$ is nearly zero, the electric-dipole transition integral is formally forbidden by symmetry selection rules. Weak absorption occurs only via vibronic coupling (molecular vibrations temporarily breaking local symmetry), yielding a low transition probability and a correspondingly low molar absorptivity ($\varepsilon_{\max} \approx 10\text{–}100\text{ L mol}^{-1}\text{ cm}^{-1}$), compared to the fully symmetry-allowed $\pi \to \pi^*$ transition ($\varepsilon_{\max} > 10^4\text{ L mol}^{-1}\text{ cm}^{-1}$).

---

---

<!-- page 5 | Conjugation and predicting molecular transitions -->

## Conjugation and predicting molecular transitions

### Effect of conjugation on absorption wavelength

**Conjugation**

Conjugation occurs when two or more multiple bonds alternate with single bonds (such as $-\text{CH}=\text{CH}-\text{CH}=\text{CH}-$), enabling their $\pi$ orbitals to overlap across the intervening single bonds. This delocalization spreads the $\pi$ electrons over an extended molecular framework, generating a manifold of closely spaced $\pi$ bonding and $\pi^*$ antibonding molecular orbitals.

In a comparable series of conjugated polyenes, extended delocalization systematically narrows the separation between the highest occupied molecular orbital (HOMO) and lowest unoccupied molecular orbital (LUMO). As a result, the transition energy $\Delta E$ for the lowest-energy $\pi \rightarrow \pi^*$ excitation decreases. Because photon energy and wavelength are inversely proportional:

$$
\Delta E = \frac{hc}{\lambda}
$$

where $h$ is Planck's constant ($\text{J}\cdot\text{s}$), $c$ is the speed of light ($\text{m}\cdot\text{s}^{-1}$), and $\lambda$ is wavelength in metres, a diminished HOMO–LUMO energy gap shifts the absorption maximum ($\lambda_{\max}$) toward longer wavelengths (a bathochromic or red shift).

Consider the progression across linear conjugated alkenes:

* **Ethene** ($\text{CH}_2=\text{CH}_2$, 1 double bond, 2 $\pi$ molecular orbitals): $\lambda_{\max} \approx 169\text{ nm}$ (vacuum UV region).
* **1,3-Butadiene** ($\text{CH}_2=\text{CH}-\text{CH}=\text{CH}_2$, 2 conjugated double bonds, 4 $\pi$ molecular orbitals): $\lambda_{\max} \approx 217\text{ nm}$ (near-UV region).
* **1,3,5-Hexatriene** ($\text{CH}_2=\text{CH}-\text{CH}=\text{CH}-\text{CH}=\text{CH}_2$, 3 conjugated double bonds, 6 $\pi$ molecular orbitals): $\lambda_{\max} \approx 250\text{ nm}$ (typically $247\text{--}258\text{ nm}$ depending on stereochemistry and solvent).

When conjugation extends over many double bonds, $\Delta E$ decreases into the visible spectrum ($400\text{--}800\text{ nm}$), imparting visible colour to the substance. For instance, **lycopene**—the red carotenoid chromophore in ripe tomatoes—possesses 11 conjugated carbon–carbon double bonds. Its strong visible absorption band ($\lambda_{\max} \approx 470\text{--}505\text{ nm}$) captures blue-green wavelengths, transmitting brilliant red light to the observer.

> **Watch out.** Do not place benzene ($\text{C}_6\text{H}_6$) at the end of the linear polyene sequence simply by citing its $255\text{ nm}$ band. Cyclic aromatic delocalization gives benzene degenerate frontier orbitals and three distinct absorption bands: an intense allowed band at $184\text{ nm}$, a medium band at $204\text{ nm}$, and a weak symmetry-forbidden band near $255\text{ nm}$. Comparing a forbidden aromatic transition directly with the strongly allowed $\pi \rightarrow \pi^*$ band of an open-chain polyene or cyclic diene is misleading.

---

### Predicting electronic transitions from molecular structure

To determine the allowable electronic transitions for a given molecular species, inspect its constituent chemical bonds and non-bonding valence electrons:

1. **Identify $\sigma$ bonds:** All organic molecules possess $\sigma$ frameworks (including the $\sigma$ component of multiple bonds). They possess occupied $\sigma$ and unoccupied $\sigma^*$ orbitals, permitting $\sigma \rightarrow \sigma^*$ transitions that absorb in the high-energy vacuum-UV region ($<150\text{ nm}$), outside conventional UV–Vis spectrophotometer ranges ($200\text{--}800\text{ nm}$).
2. **Identify $\pi$ bonds:** Molecules containing double or triple bonds ($\text{C}=\text{C}$, $\text{C}\equiv\text{C}$, $\text{C}=\text{O}$, or aromatic rings) possess occupied $\pi$ and unoccupied $\pi^*$ orbitals, enabling $\pi \rightarrow \pi^*$ transitions whose spectral intensity depends on symmetry and transition selection rules.
3. **Identify non-bonding ($n$) lone pairs:** Heteroatoms (such as $\text{O}$, $\text{N}$, $\text{S}$, or halogens) contain non-bonding valence lone pairs occupying $n$ orbitals:
   * **Saturated heteroatoms:** When bonded strictly via single bonds (alcohols, ethers, amines), they exhibit $n \rightarrow \sigma^*$ transitions (typically below $200\text{ nm}$) in addition to $\sigma \rightarrow \sigma^*$ transitions.
   * **Unsaturated heteroatoms:** When incorporated into multiple bonds (such as carbonyl groups in aldehydes, ketones, or esters), both $\pi^*$ and $\sigma^*$ acceptor orbitals exist. These compounds exhibit low-energy, symmetry-forbidden (weak) $n \rightarrow \pi^*$ bands alongside intense $\pi \rightarrow \pi^*$, $n \rightarrow \sigma^*$, and $\sigma \rightarrow \sigma^*$ excitations.

> **Watch out.** Distinguish between *all possible* electronic transitions and *symmetry-allowed* transitions, and check chemical names carefully. Handwritten notes often mislabel $\text{CH}_3\text{COCH}_3$ as "propanol"; $\text{CH}_3\text{COCH}_3$ is **propanone (acetone)**, a ketone with $n \rightarrow \pi^*$ and $\pi \rightarrow \pi^*$ transitions, whereas propanol ($\text{CH}_3\text{CH}_2\text{CH}_2\text{OH}$) is a saturated alcohol lacking $\pi^*$ orbitals. Furthermore, in **aniline** ($\text{C}_6\text{H}_5\text{NH}_2$) and **phenol** ($\text{C}_6\text{H}_5\text{OH}$), the heteroatom lone pair is on a substituent attached to the benzene ring and can delocalize into the aromatic $\pi$ system (giving coupled $\pi \rightarrow \pi^*$ bands with partial charge-transfer character) rather than acting as an isolated carbonyl-type $n \rightarrow \pi^*$ chromophore.

---

### Orbitals and transitions in common organic compounds

| Compound | Formula / Structure | Key Functional Group | Occupied Valence Orbitals | Possible Electronic Transitions | Standard UV–Vis ($200\text{--}800\text{ nm}$) Activity |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Ethane** | $\text{CH}_3-\text{CH}_3$ | Alkane ($\text{C}-\text{C}, \text{C}-\text{H}$) | $\sigma$ | $\sigma \rightarrow \sigma^*$ | Inactive (far-UV absorption $<150\text{ nm}$) |
| **Pentane** | $\text{CH}_3(\text{CH}_2)_3\text{CH}_3$ | Alkane ($\text{C}-\text{C}, \text{C}-\text{H}$) | $\sigma$ | $\sigma \rightarrow \sigma^*$ | Inactive (far-UV absorption $<150\text{ nm}$) |
| **Ethene** | $\text{CH}_2=\text{CH}_2$ | Isolated alkene ($\text{C}=\text{C}$) | $\sigma, \pi$ | $\sigma \rightarrow \sigma^*, \pi \rightarrow \pi^*$ | $\lambda_{\max} \approx 169\text{ nm}$ (vacuum UV) |
| **1,3-Butadiene** | $\text{CH}_2=\text{CH}-\text{CH}=\text{CH}_2$ | Conjugated diene | $\sigma, \pi$ | $\sigma \rightarrow \sigma^*, \pi \rightarrow \pi^*$ | Active (intense $\pi \rightarrow \pi^*$ at $\approx 217\text{ nm}$) |
| **1,3,5-Hexatriene** | $\text{CH}_2=\text{CH}-\text{CH}=\text{CH}-\text{CH}=\text{CH}_2$ | Conjugated triene | $\sigma, \pi$ | $\sigma \rightarrow \sigma^*, \pi \rightarrow \pi^*$ | Active (intense $\pi \rightarrow \pi^*$ at $\approx 250\text{ nm}$) |
| **1-Butyne** | $\text{HC}\equiv\text{C}-\text{CH}_2\text{CH}_3$ | Alkyne ($\text{C}\equiv\text{C}$) | $\sigma, \pi$ | $\sigma \rightarrow \sigma^*, \pi \rightarrow \pi^*$ | Mostly $<200\text{ nm}$ (weak tail near $180\text{ nm}$) |
| **Benzene** | $\text{C}_6\text{H}_6$ | Aromatic ring | $\sigma, \pi$ | $\sigma \rightarrow \sigma^*, \pi \rightarrow \pi^*$ | Active ($204\text{ nm}$ allowed and $255\text{ nm}$ forbidden bands) |
| **Ethanol** | $\text{CH}_3\text{CH}_2\text{OH}$ | Alcohol ($-\text{OH}$) | $\sigma, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*$ | Inactive above solvent cutoff ($\approx 210\text{ nm}$) |
| **Methoxymethane** | $\text{CH}_3-\text{O}-\text{CH}_3$ | Ether ($-\text{O}-$) | $\sigma, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*$ | Inactive in routine wavelength range |
| **Propanone (Acetone)** | $\text{CH}_3-\text{CO}-\text{CH}_3$ | Ketone carbonyl ($\text{C}=\text{O}$) | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*, \pi \rightarrow \pi^*, n \rightarrow \pi^*$ | Active (allowed $\pi \rightarrow \pi^*$ at $\approx 190\text{ nm}$; forbidden $n \rightarrow \pi^*$ at $\approx 280\text{ nm}$) |
| **Benzaldehyde** | $\text{C}_6\text{H}_5-\text{CHO}$ | Conjugated aryl aldehyde | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*, \pi \rightarrow \pi^*, n \rightarrow \pi^*$ | Active (strong $\pi \rightarrow \pi^*$ and weak $n \rightarrow \pi^*$) |
| **Benzoic acid** | $\text{C}_6\text{H}_5-\text{COOH}$ | Aryl carboxylic acid | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*, \pi \rightarrow \pi^*, n \rightarrow \pi^*$ | Active (conjugated aromatic/carbonyl bands) |
| **Salicylic acid** | $o\text{-HO}-\text{C}_6\text{H}_4-\text{COOH}$ | Phenolic carboxylic acid | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*, \pi \rightarrow \pi^*, n \rightarrow \pi^*$ | Active (strong UV absorption bands $>200\text{ nm}$) |
| **Aniline** | $\text{C}_6\text{H}_5-\text{NH}_2$ | Aromatic amine | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*$, coupled aryl $\pi \rightarrow \pi^*$ ($n$-delocalized) | Active (amino lone pair conjugates with ring $\pi^*$ system) |
| **Phenol** | $\text{C}_6\text{H}_5-\text{OH}$ | Aromatic alcohol (phenol) | $\sigma, \pi, n$ | $\sigma \rightarrow \sigma^*, n \rightarrow \sigma^*$, coupled aryl $\pi \rightarrow \pi^*$ ($n$-delocalized) | Active (hydroxyl lone pair conjugates with ring $\pi^*$ system) |

---

### Worked concept examples

#### Example 1: Classifying electronic transitions in ethane, ethanol, and propanone

**Problem:** Identify the valence orbitals and the principal electronic-transition assignments for (a) ethane, (b) ethanol, and (c) propanone (acetone), and identify which require relatively high or low photon energy.

**Solution:**
* **(a) Ethane ($\text{CH}_3-\text{CH}_3$):**
  * *Structure analysis:* Saturated hydrocarbon containing only $\text{C}-\text{C}$ and $\text{C}-\text{H}$ single bonds; no $\pi$ bonds and no non-bonding lone pairs.
  * *Transition:* $\sigma \rightarrow \sigma^*$ only (highest energy gap, vacuum UV).
* **(b) Ethanol ($\text{CH}_3\text{CH}_2\text{OH}$):**
  * *Structure analysis:* Contains single bonds ($\sigma, \sigma^*$) and oxygen valence lone pairs ($n$), but lacks $\pi$ or $\pi^*$ orbitals.
  * *Transitions and energy ordering:* $n \rightarrow \sigma^* < \sigma \rightarrow \sigma^*$. Both occur predominantly below $200\text{ nm}$.
* **(c) Propanone ($\text{CH}_3-\text{CO}-\text{CH}_3$):**
  * *Structure analysis:* Contains single bonds ($\sigma, \sigma^*$), an unsaturated carbonyl group ($\pi, \pi^*$), and non-bonding oxygen lone pairs ($n$).
  * *Transitions and energy ordering:* The symmetry-forbidden $n \rightarrow \pi^*$ band occurs at the lowest energy (near $280\text{ nm}$, weak); the symmetry-allowed $\pi \rightarrow \pi^*$ band requires higher energy (near $190\text{ nm}$, strong). Additional high-energy excitations involving $\sigma^*$ orbitals ($n \rightarrow \sigma^*$, $\sigma \rightarrow \sigma^*$) occur in the vacuum-UV region.



#### Example 2: Ordering conjugated polyenes by absorption wavelength

**Problem:** Arrange ethene, 1,3,5-hexatriene, and 1,3-butadiene in order of (a) decreasing excitation energy $\Delta E$ and (b) increasing absorption maximum $\lambda_{\max}$ for their lowest-energy $\pi \rightarrow \pi^*$ transition.

**Solution:**
1. **Count conjugated units:** Ethene possesses 1 isolated double bond; 1,3-butadiene contains 2 conjugated double bonds; 1,3,5-hexatriene possesses 3 conjugated double bonds.
2. **Evaluate HOMO–LUMO gap:** Progressive $\pi$-electron delocalization over more carbon centers destabilizes the HOMO and stabilizes the LUMO, narrowing the $\Delta E$ gap. Decreasing excitation energy follows:
   $$
   \Delta E(\text{ethene}) > \Delta E(1,3\text{-butadiene}) > \Delta E(1,3,5\text{-hexatriene})
   $$
3. **Determine wavelength order:** Because $\lambda_{\max} = \frac{hc}{\Delta E}$, absorption wavelength scales inversely with energy gap. Increasing absorption maximum follows:
   $$
   \text{ethene } (\approx 169\text{ nm}) < 1,3\text{-butadiene } (\approx 217\text{ nm}) < 1,3,5\text{-hexatriene } (\approx 250\text{ nm})
   $$

---



### Self-check questions

1. **Question:** Why is ethanol suitable as a spectroscopic solvent for recording the UV spectrum of 1,3-butadiene above $210\text{ nm}$?  
   **Answer:** High-purity ethanol contains only $\sigma$ single bonds and non-bonding lone pairs on oxygen, producing transitions ($n \rightarrow \sigma^*$ and $\sigma \rightarrow \sigma^*$) that absorb below its standard solvent cut-off wavelength ($\approx 205\text{--}210\text{ nm}$). Because it remains transparent across the near-UV and visible regions, it does not obscure the primary $\pi \rightarrow \pi^*$ absorption band of 1,3-butadiene ($\lambda_{\max} \approx 217\text{ nm}$).

2. **Question:** Which transitions occur in benzaldehyde ($\text{C}_6\text{H}_5\text{CHO}$) above $200\text{ nm}$, and how do their intensities compare?  
   **Answer:** Benzaldehyde displays both an intense, symmetry-allowed $\pi \rightarrow \pi^*$ band (due to conjugated aryl–carbonyl $\pi$ delocalization, molar absorptivity $\varepsilon > 10^4\text{ L}\cdot\text{mol}^{-1}\cdot\text{cm}^{-1}$) and a weak, symmetry-forbidden $n \rightarrow \pi^*$ band (arising from oxygen lone-pair excitation into the $\pi^*$ orbital, $\varepsilon \approx 10\text{--}100\text{ L}\cdot\text{mol}^{-1}\cdot\text{cm}^{-1}$) shifted toward longer wavelengths in the near-UV region.

---

---

<!-- page 6 | UV–visible spectrophotometer: instrument and applications -->

## UV–visible spectrophotometer: instrument and applications

**UV–visible spectrophotometer**

A UV–visible spectrophotometer is an analytical instrument designed to measure the attenuation of ultraviolet and visible radiation as it passes through a chemical sample. Modern analytical laboratories predominantly utilize double-beam spectrophotometers, which split incident radiation into two separate paths to continuously compare the sample against a reference blank. This configuration automatically compensates for source intensity fluctuations, solvent absorbance, and detector drift.

### Optical path and working principle

In a standard double-beam dispersive spectrophotometer, light propagates through a coordinated sequence of optical and electronic stages:

1. **Radiation generation:** A continuous dual-lamp source emits polychromatic radiation spanning the ultraviolet ($200\text{--}400\text{ nm}$) and visible ($400\text{--}800\text{ nm}$) spectra.
2. **Wavelength selection:** The polychromatic beam enters a monochromator, where dispersing elements isolate an exceptionally narrow band of wavelengths ($\lambda$) transmitted via an exit slit.
3. **Beam splitting:** A beam splitter or rotating mirrored sector (chopper) divides the monochromatic beam alternately or simultaneously into two optical paths: a reference beam and a sample beam.
4. **Sample and reference transmission:**
   - The reference beam traverses a reference cell containing pure solvent and reagents, yielding an emergent intensity $I_0$.
   - The sample beam traverses the sample cuvette containing the dissolved analyte, yielding an emergent intensity $I$.
5. **Detection:** The emergent beams strike a photosensitive detector (either alternately using a single detector or simultaneously using matched paired detectors), converting radiant optical energy into a proportional electric current.
6. **Ratio electronics and amplification:** An amplifier and ratio circuit compute the ratio between $I$ and $I_0$, correcting for optical baseline drift and system asymmetries.
7. **Readout and recording:** The microprocessor evaluates the absorbance value and displays the resulting spectrum as an absorbance versus wavelength plot:

$$
A = \log_{10}\left(\frac{I_0}{I}\right)
$$

Where:
- $A$ is the dimensionless absorbance (optical density).
- $I_0$ is the radiant intensity transmitted through the reference blank ($\text{W m}^{-2}$).
- $I$ is the radiant intensity transmitted through the absorbing sample ($\text{W m}^{-2}$).

![Plot of absorbance on the vertical axis versus wavelength on the horizontal axis showing a smooth absorption peak.](/notes/cse/s1/chemistry/module-3/assets/page-013-image-1-clean.svg)

*Figure: A representative UV–visible absorption spectrum plotting absorbance against wavelength, with peak absorption occurring at $\lambda_{\max}$.*

### Instrument components

| Component | Materials & Types | Function & Operational Constraints |
| :--- | :--- | :--- |
| **Radiation source** | Deuterium ($\text{D}_2$) or Hydrogen ($\text{H}_2$) discharge lamps (UV: $200\text{--}400\text{ nm}$); Tungsten–halogen filament lamp (Visible: $350\text{--}800\text{ nm}$); Xenon flash lamp (UV–vis continuum) | Delivers stable, continuous radiation across the target spectral range. Gas discharge lamps generate light via an electric arc through gas rather than thermal incandescence. |
| **Monochromator** | Entrance slit; Collimating mirrors; Reflection diffraction grating or quartz prism; Exit slit | Spatially disperses polychromatic light into constituent wavelengths and isolates a narrow spectral bandwidth. |
| **Beam splitter** | Half-silvered beam splitting mirror; Rotating mirrored chopper disc | Directs monochromatic light alternately or concurrently through the reference and sample paths. Strict $50:50$ splitting is electronically calibrated against the baseline. |
| **Sample & reference cells (cuvettes)** | Fused quartz or synthetic silica ($200\text{--}1000\text{ nm}$); Optical glass ($350\text{--}1000\text{ nm}$); Disposable optical plastic (visible range only) | Holds solutions in a precision optical path (standard path length $b = 1.0\text{ cm}$). Cuvette optical faces must remain pristine, parallel, and chemically inert. |
| **Detector** | Photomultiplier tube (PMT); Silicon photodiode; Photodiode array (PDA) | Translates transmitted photons into an amplified electrical signal with high quantum efficiency, linear response, and rapid response times. |

> **Watch out.** Always verify the cuvette material's operational wavelength cutoff. Standard optical glass and common plastics absorb strongly throughout the ultraviolet region ($<350\text{ nm}$). Fused silica/quartz cuvettes are mandatory for UV measurements, although specialized UV-transparent disposable polymers can be used within strictly qualified solvent limits.

### Reference blank and solvent selection

**Reference blank**

A reference blank is a matched reference cell filled with pure solvent and any background reagents (excluding the analyte) placed in the reference path to set the baseline intensity $I_0$. Because cuvette windows reflect light and solvents scatter or slightly absorb radiation, the reference blank optically cancels these background contributions:

- Refractive index mismatches and reflection losses at cell interfaces are equalized.
- Non-analyte reagent and solvent absorbances are automatically subtracted.

**UV cutoff wavelength**

The UV cutoff wavelength is the specific wavelength threshold below which a pure solvent itself begins absorbing strongly ($A > 1.0$). To prevent total radiation attenuation and distorted readings, analysts must choose a solvent transparent across the analyte’s absorption bands:

- **Water:** Cutoff $\approx 190\text{ nm}$ (ideal for aqueous analysis)
- **Acetonitrile:** Cutoff $\approx 190\text{ nm}$
- **Cyclohexane / Hexane:** Cutoff $\approx 200\text{ nm}$
- **Methanol / Ethanol:** Cutoff $\approx 205\text{--}210\text{ nm}$
- **Chloroform:** Cutoff $\approx 245\text{ nm}$

> **Watch out.** UV–visible spectroscopy alone cannot provide definitive structural identification of an unknown compound. Because electronic transition bands are broad, UV–vis spectra primarily identify conjugated $\pi$-electron systems and chromophores ($\pi \rightarrow \pi^*$ and $n \rightarrow \pi^*$). Complementary methods like FTIR, NMR, and Mass Spectrometry are indispensable for full structural elucidation.

### Applications of UV–visible spectroscopy

- **Quantitative concentration analysis:** Unknown concentrations of active ingredients, metal chelates, and biochemical analytes are quantified at $\lambda_{\max}$ using standard calibration curves governed by the Beer–Lambert law.
- **Reaction kinetics:** Progress of chemical and biochemical reactions is tracked in real-time by monitoring changes in absorbance over time ($\Delta A / \Delta t$) as reactants deplete or products evolve.
- **Characterisation of dyes and pigments:** Measurement of spectral absorption profiles and molar absorptivity ($\varepsilon$) characterizes industrial dyes, organic indicators, and transition metal coordination complexes.
- **Purity checking and quality control:** Detection of trace UV-absorbing impurities in bulk solvents or pharmaceuticals (e.g., verifying the absence of toxic benzene impurities in absolute ethanol or cyclohexane).
- **Conjugation and structural probes:** Evaluation of bathochromic (red) and hypsochromic (blue) shifts reveals the degree of $\pi$-conjugation, steric hindrance, and solvent polarity effects.
- **Colorimetric clinical assays:** Analytes lacking native UV–vis absorption (such as glucose, urea, or cholesterol) are coupled with specific enzymatic or chromogenic reagents to generate intensely colored chromophores suitable for photometric quantification.

### Self-check questions

1. **Why are deuterium lamps called discharge lamps rather than filament lamps?**  
   *Answer:* Deuterium lamps generate radiation by striking a low-voltage electrical arc through pressurized deuterium gas, electronically exciting the gas molecules into a dissociated continuum state. In contrast, filament lamps pass current through a solid metal wire (such as tungsten) to generate light via thermal incandescence.

2. **What happens to the measured absorbance at a given wavelength if the analyte does not absorb light there ($I = I_0$)?**  
   *Answer:* When no radiation is absorbed by the analyte, the transmitted sample intensity equals the reference intensity ($I = I_0$). Substituting this into the absorbance equation gives:
   $$
   A = \log_{10}\left(\frac{I_0}{I}\right) = \log_{10}(1) = 0
   $$
   The measured absorbance is zero, corresponding to $100\%$ transmittance ($T = 1.0$).

---

---

<!-- page 7 | Infrared absorption and types of vibration -->

## Infrared absorption and types of vibration

### Working principle

**Infrared spectroscopy**

Infrared (IR) spectroscopy, also known as vibrational spectroscopy, studies the interaction of infrared radiation with matter. For ordinary molecular systems, mid-IR absorption probes quantized vibrational energy gaps rather than valence-electron excitations. When a molecule absorbs infrared radiation matching a resonant vibrational frequency, it transitions from a lower quantized vibrational level to a higher one (accompanied by rotational transitions in the gas phase).

Under the harmonic oscillator approximation, fundamental vibrational transitions obey the selection rule:

$$
\Delta v = +1
$$

where $v$ is the vibrational quantum number ($v = 0, 1, 2, \dots$). Real molecular bonds exhibit anharmonicity, allowing weak overtone transitions ($\Delta v = +2, +3, \dots$) to appear at higher wavenumbers.

Although the broad infrared spectrum spans roughly $12\,800\text{ cm}^{-1}$ to $10\text{ cm}^{-1}$ (classified into near-, mid-, and far-IR), standard chemical analysis utilizes the **mid-infrared region**, spanning $4000\text{ cm}^{-1}$ to $400\text{ cm}^{-1}$.

### Condition for IR activity

**Infrared activity**

Infrared activity requires that the electric dipole moment of the molecule changes periodically during the vibration for an absorption band to appear:

$$
\left(\frac{\partial \mu_d}{\partial Q}\right)_0 \neq 0
$$

where $\mu_d$ is the molecular dipole moment and $Q$ is the normal coordinate of vibration.

Infrared radiation is an oscillating electromagnetic wave with an oscillating electric field. Energy transfer occurs only when the molecular motion produces an oscillating dipole of matching frequency to couple with the electric field of the radiation.

* **Homonuclear diatomic molecules** ($\text{H}_2$, $\text{N}_2$, $\text{O}_2$, $\text{Cl}_2$, $\text{F}_2$) maintain symmetrical electron distributions throughout their single stretching vibration. Because their dipole moment remains strictly zero at all internuclear distances ($\Delta \mu_d = 0$), they have no dipole-allowed fundamental absorption and are **IR inactive**.
* **Heteronuclear diatomic molecules** ($\text{HCl}$, $\text{HBr}$, $\text{HI}$, $\text{CO}$) feature an asymmetric charge distribution. As the bond stretches and contracts, the dipole moment oscillates ($\Delta \mu_d \neq 0$), rendering the vibration **IR active**.
* **Polyatomic molecules** ($\text{CO}_2$, $\text{H}_2\text{O}$, $\text{HCN}$, $\text{CH}_4$, $\text{C}_6\text{H}_6$) possess multiple normal modes. IR activity is determined independently for each individual vibration.

> **Watch out.** A molecule does **not** require a permanent dipole moment at equilibrium to show an IR spectrum, nor are all vibrational modes in a polyatomic molecule automatically active. For example, linear $\text{CO}_2$ is nonpolar at equilibrium ($\mu_d = 0$), but its asymmetric stretching and bending modes induce a temporary oscillating dipole, making them IR active. Conversely, its symmetric stretch preserves centrosymmetry ($\Delta \mu_d = 0$) and remains IR inactive.

### IR spectrum structure

An infrared spectrum is conventionally plotted with **percentage transmittance ($\%T$)** on the vertical axis against **wavenumber ($\bar{\nu}$, in $\text{cm}^{-1}$)** on the horizontal axis, running from high wavenumber ($4000\text{ cm}^{-1}$) on the left to low wavenumber ($400\text{ cm}^{-1}$) on the right.

![Schematic IR spectrum showing percentage transmittance on the vertical axis versus wavenumber on the horizontal axis with downward absorption dips](/notes/cse/s1/chemistry/module-3/assets/page-044-image-1-clean.svg)

*Figure: Schematic representation of an IR spectrum plotting percentage transmittance ($\%T$) against wavenumber ($\text{cm}^{-1}$), where absorption bands appear as downward troughs.*

At resonant frequencies where the molecule absorbs infrared radiation, less radiation reaches the detector, producing a **downward trough** in $\%T$. (When plotted as absorbance $A$, absorptions appear as upward peaks.)

The mid-IR spectrum is divided into two primary analytical zones:

1. **Functional group region ($\approx 4000\text{--}1500\text{ cm}^{-1}$):** Contains characteristic stretching absorptions of specific functional groups (such as $\text{-OH}$, $\text{-NH}_2$, $\text{C=O}$, and $\text{C}\equiv\text{N}$), which appear at relatively consistent positions regardless of the rest of the molecule.
2. **Fingerprint region ($\approx 1500\text{--}400\text{ cm}^{-1}$):** Dominated by complex bending motions and single-bond skeleton stretches ($\text{C-C}$, $\text{C-O}$, $\text{C-N}$). This zone produces an intricate, unique pattern diagnostic of the specific molecule.

### Types of molecular vibrations

**Normal modes**

In a polyatomic molecule, vibrations manifest as normal modes—coordinated atomic displacements oscillating at a characteristic frequency where all atoms pass through equilibrium simultaneously without translating or rotating the molecule as a whole. Complex modes can be categorized into stretching and bending motions.

![Flowchart classifying molecular vibrations into symmetric and asymmetric stretching, and in-plane (scissoring, rocking) and out-of-plane (wagging, twisting) bending](/notes/cse/s1/chemistry/module-3/assets/page-045-image-1-clean.svg)

*Figure: Classification of fundamental molecular vibrations into stretching and bending modes using a three-atom group.*

| Mode | Subtype | Motion Plane | Atomic Displacement |
| :--- | :--- | :--- | :--- |
| **Stretching** | **Symmetric** | Along bond axis | Two or more bonds lengthen and contract simultaneously in phase. |
| **Stretching** | **Asymmetric** | Along bond axis | One bond lengthens while adjacent bonds simultaneously shorten. |
| **Bending** | **Scissoring** | In-plane | Two outer atoms move toward and away from each other, altering the bond angle. |
| **Bending** | **Rocking** | In-plane | The structural unit swings collectively back and forth within the molecular plane without changing the internal bond angle. |
| **Bending** | **Wagging** | Out-of-plane | Both outer atoms swing in unison to one side of the plane (+), then to the opposite side ($-$). |
| **Bending** | **Twisting** | Out-of-plane | One outer atom swings above the plane (+) while the other swings below ($-$), twisting around the central atom. |

Because stretching a chemical bond along its axis requires more energy than bending or deforming a bond angle, stretching vibrations consistently appear at higher wavenumbers than corresponding bending modes.

### Self-check questions

1. **Why is $\text{N}_2$ gas transparent to mid-infrared radiation whereas $\text{HCl}$ gas strongly absorbs it?**
   *Answer:* $\text{N}_2$ is a homonuclear diatomic molecule whose dipole moment remains zero throughout bond stretching ($\Delta \mu_d = 0$), making it IR inactive. $\text{HCl}$ is heteronuclear, and stretching its polar bond changes its dipole moment ($\Delta \mu_d \neq 0$), making it IR active.

2. **What is the difference between wagging and twisting vibrations?**
   *Answer:* Both are out-of-plane bending vibrations, but in wagging both attached atoms move to the same side of the plane together, whereas in twisting one atom moves above the plane while the other moves below it.

---

---

<!-- page 8 | Counting vibrations: carbon dioxide, water and HCN -->

## Counting vibrations: carbon dioxide, water and HCN

### Degrees of Freedom and Molecular Motion

**Degrees of freedom**

Degrees of freedom represent the number of independent coordinates required to specify the complete physical position and motion of every atom in a molecule. Every atom in a molecule can move along three mutually perpendicular Cartesian axes ($x$, $y$, and $z$). A molecule containing $N$ atoms therefore possesses a total of $3N$ degrees of freedom describing all possible atomic motions in three-dimensional space.

These $3N$ degrees of freedom partition into three distinct classes of motion:

1. **Translational motion:** Shifting the entire molecule's centre of mass through three-dimensional space requires $3$ degrees of freedom (along the $x$, $y$, and $z$ axes) for all molecules.
2. **Rotational motion:** Turning the entire molecule around its centre of mass depends strictly on molecular geometry:
   * **Linear molecules** (such as $\text{HCl}$, $\text{CO}_2$, or $\text{HCN}$) lie along a single axis. Rotation about the internuclear axis itself does not displace atomic nuclei and cannot be observed quantum mechanically, meaning it does not count as a degree of freedom. Only rotations about the two mutually perpendicular transverse axes displace atomic positions, giving $2$ rotational degrees of freedom.
   * **Non-linear molecules** (such as $\text{H}_2\text{O}$ or $\text{CH}_4$) are not confined to a single straight line; rotation about any of the $3$ mutually perpendicular axes displaces the nuclei, yielding $3$ rotational degrees of freedom.
3. **Vibrational motion:** The remaining degrees of freedom correspond to internal vibrations—periodic changes in bond lengths and bond angles. Subtracting translational and rotational motions from the total $3N$ degrees yields the number of fundamental normal vibrational modes:

$$
\text{Vibrational modes (linear)} = 3N - 3 - 2 = 3N - 5
$$

$$
\text{Vibrational modes (non-linear)} = 3N - 3 - 3 = 3N - 6
$$

Here $N$ is the total number of atoms in the molecule ($N \ge 2$). Monatomic species (such as $\text{He}$ or $\text{Ar}$, where $N = 1$) possess only $3$ translational degrees of freedom and cannot undergo rotation or vibration.

---

### Mode Counts and Observed IR Bands

Calculating $3N - 5$ or $3N - 6$ yields the number of independent normal vibrational coordinates, which does not necessarily equal the number of absorption peaks observed in an experimental infrared (IR) spectrum.

**Infrared-inactive modes**

Infrared-inactive modes are vibrational motions that produce no net change in dipole moment ($\Delta\mu \ne 0$). A vibrational mode absorbs an infrared photon only if the motion produces a periodic change in the molecule's net dipole moment. Highly symmetrical vibrations that leave the net dipole moment unchanged ($\Delta\mu = 0$) are IR inactive and produce no absorption band.

**Degenerate modes**

Degenerate modes are two or more structurally distinct vibrational coordinates that possess the exact same vibrational frequency and energy. Because they absorb radiation at the exact same wavenumber, their absorption peaks coincide into a single observed fundamental band.

**Non-fundamental transitions**

Non-fundamental transitions are secondary vibrational absorptions arising from real anharmonic effects. Experimental spectra may feature additional weak absorption bands resulting from overtones ($v = 0 \to 2, 3$), combination bands ($v_1 + v_2$), difference bands, and rotational fine structure in gas-phase measurements.

> **Watch out.** Do not assume that every calculated vibrational mode produces a separate peak in the IR spectrum. Always check each mode for a dipole moment change (IR activity) and check whether any active modes are degenerate (sharing the same wavenumber).

---

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

---



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

---



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

Like $\text{CO}_2$, $\text{H}-\text{C}\equiv\text{N}$ is a linear triatomic molecule ($N = 3$), so it has $3(3) - 5 = 4$ fundamental vibrational modes: two stretching modes (predominantly $\text{C}-\text{H}$ stretch and $\text{C}\equiv\text{N}$ stretch) and two perpendicular bending modes (in-plane and out-of-plane). 

However, unlike centrosymmetric $\text{O}=\text{C}=\text{O}$, $\text{HCN}$ is **non-centrosymmetric** because hydrogen and nitrogen are different atoms. Consequently:
* *Both* stretching modes change the dipole moment along the bond axis ($\Delta\mu \ne 0$).
* *Both* bending modes change the dipole moment perpendicular to the axis ($\Delta\mu \ne 0$).

Therefore, all **$4$ vibrational coordinates are IR active** in $\text{HCN}$. Because the two perpendicular bends are doubly degenerate, $\text{HCN}$ exhibits **$3$ fundamental absorption frequencies** in its IR spectrum.

---



### Self-Check Questions

1. **Question:** Acetylene ($\text{H}-\text{C}\equiv\text{C}-\text{H}$) is a linear molecule and ammonia ($\text{NH}_3$) is a pyramidal (non-linear) molecule. How many fundamental vibrational modes does each possess?  
   **Answer:** Both contain $N = 4$ atoms. Linear $\text{C}_2\text{H}_2$ has $3(4) - 5 = 7$ fundamental modes. Non-linear $\text{NH}_3$ has $3(4) - 6 = 6$ fundamental modes.

2. **Question:** Why is the symmetric stretching vibration IR inactive in $\text{CO}_2$ but IR active in $\text{H}_2\text{O}$? How do the two stretching modes of $\text{HCN}$ differ?  
   **Answer:** $\text{CO}_2$ is linear and centrosymmetric, so equal stretching of both opposing $\text{C}=\text{O}$ bonds cancels the bond dipoles at every point ($\Delta\mu = 0$). $\text{H}_2\text{O}$ is bent (the vector sum of bond dipoles changes magnitude during symmetric stretch), making it active. $\text{HCN}$ has two coupled stretching modes (predominantly $\text{C}-\text{H}$ and $\text{C}\equiv\text{N}$ stretches); because it lacks a centre of symmetry, both stretching modes alter its dipole moment and are IR active. Symmetric and asymmetric descriptions are primarily applicable when terminal groups are identical.

---

---

<!-- page 9 | Bond vibrations and force-constant calculations -->

## Bond vibrations and force-constant calculations

### Harmonic oscillator model

To determine the vibrational frequency of a chemical bond, two bonded atoms are modeled as masses ($m_1$ and $m_2$) connected by a weightless spring. When displaced from their equilibrium distance, Hooke's law governs the restoring force pulling the atoms back toward equilibrium.

**Force constant ($k$)**

Force constant is a measure of the stiffness of the chemical bond, representing the curvature of the potential energy curve near its equilibrium position. A larger force constant indicates a stiffer, more rigid bond.

**Reduced mass ($\mu$)**

Reduced mass represents the effective inertial mass of a two-particle oscillating system vibrating along its internuclear axis, calculated as:

$$
\mu = \frac{m_1 m_2}{m_1 + m_2}
$$

where $m_1$ and $m_2$ are the individual atomic masses in kilograms ($\text{kg}$). Because atomic weights are typically given in atomic mass units ($\text{amu}$), values must be converted to SI units using $1\text{ amu} = 1.66 \times 10^{-27}\text{ kg}$.

The classical vibrational frequency ($\nu$, in $\text{Hz}$ or $\text{s}^{-1}$) of this simple harmonic oscillator is:

$$
\nu = \frac{1}{2\pi} \sqrt{\frac{k}{\mu}}
$$

**Wavenumber ($\bar{\nu}$)**

Wavenumber is the number of waves per unit length, defined as $\bar{\nu} = \nu / c$. Dividing the frequency expression by the speed of light ($c$) yields the fundamental infrared wavenumber equation:

$$
\bar{\nu} = \frac{1}{2\pi c} \sqrt{\frac{k}{\mu}}
$$

Rearranging for the force constant ($k$) gives:

$$
\bar{\nu}^2 = \frac{1}{4\pi^2 c^2} \left(\frac{k}{\mu}\right) \implies k = 4\pi^2 c^2 \mu \bar{\nu}^2
$$

> **Watch out.** Never mix centimetre and metre units in the force-constant formula. If you use the SI speed of light $c = 3.00 \times 10^8\text{ m s}^{-1}$ and reduced mass $\mu$ in $\text{kg}$ to obtain $k$ in $\text{N m}^{-1}$ (equivalent to $\text{kg s}^{-2}$), you **must** convert the wavenumber from $\text{cm}^{-1}$ to $\text{m}^{-1}$ by multiplying by $100$: $\bar{\nu}\text{ (in m}^{-1}\text{)} = \bar{\nu}\text{ (in cm}^{-1}\text{)} \times 100$. Alternatively, you may keep $\bar{\nu}$ in $\text{cm}^{-1}$ only if you express the speed of light as $c = 3.00 \times 10^{10}\text{ cm s}^{-1}$.

---

### Factors governing vibrational wavenumbers

The relationship $\bar{\nu} = \frac{1}{2\pi c} \sqrt{\frac{k}{\mu}}$ demonstrates that the position of an infrared absorption band depends on two key physical variables:

1. **Bond strength (force constant, $k$):** The vibrational wavenumber is directly proportional to $\sqrt{k}$. Stronger bonds possess greater stiffness (larger $k$) and require higher-energy photons to excite vibrations. For instance, across carbon–carbon bonds, the reduced mass remains identical ($\mu = 6\text{ amu}$ for $^{12}\text{C}$), but as bond order increases from single ($\text{C}-\text{C}$) to double ($\text{C}=\text{C}$) to triple ($\text{C}\equiv\text{C}$), the force constant increases, shifting the stretching absorption progressively higher.
2. **Atomic masses (reduced mass, $\mu$):** The vibrational wavenumber is inversely proportional to $\sqrt{\mu}$. Bonds involving light atoms (such as hydrogen, where $\mu \approx 1\text{ amu}$) absorb at high wavenumbers ($2500\text{–}4000\text{ cm}^{-1}$), whereas bonds between heavy atoms absorb in the far lower wavenumber region.

| Bond comparison | Physical parameter altered | Effect on vibrational wavenumber ($\bar{\nu}$) |
| :--- | :--- | :--- |
| **Bond order:** $\text{C}-\text{C} < \text{C}=\text{C} < \text{C}\equiv\text{C}$ | $\mu$ is constant; force constant $k$ increases with bond order | $\bar{\nu}$ increases ($\bar{\nu}_{\text{C}-\text{C}} < \bar{\nu}_{\text{C}=\text{C}} < \bar{\nu}_{\text{C}\equiv\text{C}}$) |
| **Atom identity:** $\text{C}-\text{H}$ vs $\text{C}-\text{Cl}$ | $k$ differs; $\mu$ increases sharply from $\text{H}$ to $\text{Cl}$ | $\bar{\nu}$ drops markedly for the heavier $\text{C}-\text{Cl}$ bond |
| **Isotopic substitution:** $^{1}\text{H}-\text{Cl}$ vs $^{2}\text{D}-\text{Cl}$ | $k$ is unchanged (same electronic structure); $\mu$ increases | $\bar{\nu}$ decreases for the heavier isotope ($\bar{\nu}_{\text{DCl}} < \bar{\nu}_{\text{HCl}}$) |

**Localized group frequencies**

In a polyatomic molecule (e.g., $\text{CH}_3\text{OH}$ or $\text{CH}_2=\text{CH}_2$), vibrations are strictly coupled normal modes. However, when a functional group (such as $\text{O}-\text{H}$ or $\text{C}=\text{O}$) possesses a force constant or atomic mass substantially different from the rest of the molecular framework, the vibration remains largely localized. In these cases, the diatomic reduced-mass approximation provides reliable quantitative estimates.

---

### Worked examples

#### Example 1: Force constant of carbon monoxide ($\text{CO}$)

**Problem:** A carbon monoxide ($\text{CO}$) molecule absorbs infrared radiation at a wavenumber of $2140\text{ cm}^{-1}$. Calculate the force constant of the bond, given atomic masses $\text{C} = 12\text{ amu}$ and $\text{O} = 16\text{ amu}$ ($1\text{ amu} = 1.66 \times 10^{-27}\text{ kg}$).

**Solution:**

1. **Calculate the reduced mass ($\mu$) in kilograms:**
   $$
   \mu = \frac{m_{\text{C}} m_{\text{O}}}{m_{\text{C}} + m_{\text{O}}} = \frac{12 \times 16}{12 + 16}\text{ amu} = \frac{192}{28}\text{ amu} = 6.857\text{ amu}
   $$
   Converting to SI units:
   $$
   \mu = 6.857 \times 1.66 \times 10^{-27}\text{ kg} = 1.138 \times 10^{-26}\text{ kg}
   $$

2. **Convert the wavenumber ($\bar{\nu}$) to $\text{m}^{-1}$:**
   $$
   \bar{\nu} = 2140\text{ cm}^{-1} \times 100\text{ cm m}^{-1} = 2.140 \times 10^5\text{ m}^{-1}
   $$

3. **Compute the force constant ($k$):**
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
   k \approx 1852\text{ N m}^{-1} \quad (1.85 \times 10^3\text{ N m}^{-1}\text{ to 3 sig. figs.})
   $$

---



#### Example 2: Force constant of hydrogen chloride ($\text{HCl}$)

**Problem:** Calculate the force constant of the $\text{H}-\text{Cl}$ bond given an experimental IR absorption input of $\bar{\nu} = 3050\text{ cm}^{-1}$, using approximate atomic masses $\text{H} = 1\text{ amu}$ and $\text{Cl} = 35\text{ amu}$ ($1\text{ amu} = 1.66 \times 10^{-27}\text{ kg}$).

*Note: The supplied wavenumber is an exercise input, not a reference value for the observed HCl fundamental.*

**Solution:**

1. **Calculate the reduced mass ($\mu$) in kilograms:**
   $$
   \mu = \frac{m_{\text{H}} m_{\text{Cl}}}{m_{\text{H}} + m_{\text{Cl}}} = \frac{1 \times 35}{1 + 35}\text{ amu} = \frac{35}{36}\text{ amu} = 0.9722\text{ amu}
   $$
   Converting to SI units:
   $$
   \mu = 0.9722 \times 1.66 \times 10^{-27}\text{ kg} = 1.614 \times 10^{-27}\text{ kg}
   $$

2. **Convert the wavenumber ($\bar{\nu}$) to $\text{m}^{-1}$:**
   $$
   \bar{\nu} = 3050\text{ cm}^{-1} \times 100\text{ cm m}^{-1} = 3.050 \times 10^5\text{ m}^{-1}
   $$

3. **Compute the force constant ($k$):**
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

---



### Self-check questions

1. **Question:** How does infrared spectroscopy distinguish between a $\text{C}-\text{C}$ single bond and a $\text{C}=\text{C}$ double bond when both systems have the same reduced mass ($\mu$)?  
   **Answer:** While $\mu$ is identical ($6\text{ amu}$), the $\text{C}=\text{C}$ double bond contains four shared electrons compared to two in the single bond, yielding a substantially larger force constant ($k$). Because $\bar{\nu} \propto \sqrt{k}$, the $\text{C}=\text{C}$ bond absorbs at a noticeably higher wavenumber ($\approx 1650\text{ cm}^{-1}$) than the $\text{C}-\text{C}$ single bond ($\approx 1000\text{–}1200\text{ cm}^{-1}$).

2. **Question (Illustrative isotopic shift):** Assuming isotopic substitution leaves the electronic bond force constant $k$ unaffected, estimate the frequency ratio $\bar{\nu}_{\text{DCl}} / \bar{\nu}_{\text{HCl}}$ using integer masses $\text{H} = 1\text{ amu}$, $\text{D} = 2\text{ amu}$, and $\text{Cl} = 35\text{ amu}$.  
   **Answer:**  
   - $\mu_{\text{HCl}} = \frac{1 \times 35}{1 + 35} = \frac{35}{36} \approx 0.972\text{ amu}$  
   - $\mu_{\text{DCl}} = \frac{2 \times 35}{2 + 35} = \frac{70}{37} \approx 1.892\text{ amu}$  
   
   Because $k$ is constant:
   $$
   \frac{\bar{\nu}_{\text{DCl}}}{\bar{\nu}_{\text{HCl}}} = \sqrt{\frac{\mu_{\text{HCl}}}{\mu_{\text{DCl}}}} = \sqrt{\frac{0.972}{1.892}} \approx 0.717
   $$
   Thus, deuterated hydrogen chloride absorbs at approximately $0.72$ times the wavenumber of standard $\text{HCl}$.

---

---

<!-- page 10 | Reading IR spectra and studying hydrogen bonding -->

## Reading IR spectra and studying hydrogen bonding

**Infrared spectroscopy**

Infrared (IR) spectroscopy is one of the fastest laboratory techniques for identifying organic functional groups and probing non-covalent interactions. While local diatomic approximations treat bonds via their reduced mass ($\mu$) and force constant ($k$), coupled polyatomic normal modes also give rise to characteristic absorption bands within predictable wavenumber ($\bar{\nu}$) ranges.

---

### Functional group and fingerprint regions

An infrared spectrum is traditionally divided into two diagnostic zones:

1. **Functional group region ($4000\text{--}1500\text{ cm}^{-1}$):** Contains relatively few, well-defined absorption bands arising primarily from stretching vibrations of key functional bonds, such as $\text{O-H}$, $\text{N-H}$, $\text{C-H}$, $\text{C}\equiv\text{C}$, $\text{C=O}$, and $\text{C=C}$.
2. **Fingerprint region ($1500\text{--}400\text{ cm}^{-1}$):** Contains a complex pattern of coupled single-bond stretches ($\text{C-C}$, $\text{C-O}$, $\text{C-N}$) and bending vibrations. Because this dense vibrational pattern is unique to the overall molecular skeleton, matching both the functional group region and the fingerprint region against an authentic reference standard recorded under identical conditions provides conclusive proof of identity.

---

### Characteristic IR stretching frequencies

Under the harmonic oscillator model governed by Hooke's law, atomic masses and bond strengths directly dictate vibrational frequency:

$$
\bar{\nu} = \frac{1}{2\pi c}\sqrt{\frac{k}{\mu}}
$$

where:

* $\bar{\nu}$ is the wavenumber ($\text{cm}^{-1}$)
* $c$ is the speed of light ($\text{cm s}^{-1}$)
* $k$ is the bond force constant ($\text{N m}^{-1}$)
* $\mu$ is the reduced mass ($\text{kg}$)

When comparing carbon–carbon bonds of increasing order ($\text{C-C}$, $\text{C=C}$, and $\text{C}\equiv\text{C}$), the reduced mass $\mu$ remains identical, but the force constant $k$ increases substantially. Consequently, stretching absorption shifts progressively toward higher wavenumbers:

$$\text{C-C}\ (\approx 1200\text{--}1300\text{ cm}^{-1}) < \text{C=C}\ (\approx 1620\text{--}1680\text{ cm}^{-1}) < \text{C}\equiv\text{C}\ (\approx 2100\text{--}2260\text{ cm}^{-1})$$

Conversely, bonds involving light hydrogen atoms possess an exceptionally small reduced mass $\mu$, shifting $\text{O-H}$, $\text{N-H}$, and $\text{C-H}$ fundamental stretches to high wavenumbers ($2850\text{--}3650\text{ cm}^{-1}$).

| Functional group / bond | Approximate wavenumber ($\text{cm}^{-1}$) | Typical band shape and notes |
| :--- | :--- | :--- |
| **Free $\text{O-H}$** (alcohol/phenol, dilute) | $3600\text{--}3650$ | Sharp, medium-to-strong intensity |
| **Hydrogen-bonded $\text{O-H}$** (alcohol/phenol) | $3200\text{--}3600$ | Broad, strong intensity |
| **Carboxylic acid $\text{O-H}$** | $2500\text{--}3300$ | Very broad, diagnostic envelope overlapping the $\text{C-H}$ region |
| **Amine / amide $\text{N-H}$** | $3300\text{--}3500$ | Medium intensity; primary amines typically display two distinct peaks |
| **Alkane $sp^3\text{ C-H}$** | $2850\text{--}3000$ | Medium-to-strong, located just below $3000\text{ cm}^{-1}$ |
| **Alkene / aromatic $sp^2\text{ C-H}$** | $3000\text{--}3100$ | Medium intensity, located just above $3000\text{ cm}^{-1}$ |
| **Terminal alkyne $sp\text{ C-H}$** | $\approx 3300$ | Sharp, strong intensity |
| **Alkyne $\text{C}\equiv\text{C}$** | $2100\text{--}2260$ | Typically weak; absent if centrosymmetric symmetry prevents dipole change |
| **Carbonyl $\text{C=O}$** (general) | $1650\text{--}1800$ | Very strong and sharp; amides near $1650\text{--}1690\text{ cm}^{-1}$, ketones/aldehydes/esters near $1705\text{--}1750\text{ cm}^{-1}$ |
| **Alkene $\text{C=C}$** | $1620\text{--}1680$ | Weak-to-medium; absent if symmetric geometry forbids dipole alteration |

> **Watch out.** Do not assume every $\text{C=O}$ stretch appears above $1700\text{ cm}^{-1}$ or that an absorption near $1650\text{ cm}^{-1}$ always indicates an alkene. Resonance delocalisation in amides lowers the carbonyl bond order, shifting the $\text{C=O}$ stretch down to roughly $1650\text{--}1690\text{ cm}^{-1}$, directly overlapping the $\text{C=C}$ region. Always evaluate peak intensity (carbonyls are intensely polar and absorb strongly) and companion bands (such as $\text{N-H}$ or ester $\text{C-O}$ stretches) before finalizing assignments.

---

### Studying hydrogen bonding by IR spectroscopy

**Hydrogen bonding**

Hydrogen bonding occurs when a hydrogen atom covalently bonded to an electronegative donor ($\text{O}$ or $\text{N}$) interacts electrostatically with an unshared lone pair on an electronegative acceptor ($\text{O}$ or $\text{N}$). This non-covalent interaction withdraws electron density from the covalent donor $\text{O-H}$ bond, lengthening and weakening it.

Because the covalent bond force constant $k$ decreases, the $\text{O-H}$ stretching absorption shifts to a **lower wavenumber**. Furthermore, because condensed phases exhibit a statistical distribution of hydrogen-bond distances and orientations, the resulting peak broadens significantly into a wide band ($3200\text{--}3600\text{ cm}^{-1}$).

IR dilution experiments conducted in a non-polar, non-hydrogen-bonding solvent (such as $\text{CCl}_4$) distinguish between two primary modes:

* **Intermolecular hydrogen bonding:** Occurs between separate, independent molecules. In *p*-nitrophenol ($4\text{-O}_2\text{N-C}_6\text{H}_4\text{-OH}$), the $-\text{OH}$ and $-\text{NO}_2$ groups occupy opposite ends of the rigid aromatic ring ($1,4$-positions) and cannot interact internally. Instead, intermolecular networks assemble:
  $$\cdots\text{O}_2\text{N-C}_6\text{H}_4\text{-O-H}\cdots\text{O(O)N-C}_6\text{H}_4\text{-OH}\cdots$$
  In concentrated solutions, *p*-nitrophenol displays a broad absorption band near $3300\text{--}3400\text{ cm}^{-1}$. Upon progressive dilution with an inert solvent, the solvent isolates individual solute molecules, disrupting intermolecular hydrogen bonds. Consequently, the broad associate band weakens and a sharp **free $\text{O-H}$** band emerges at a higher wavenumber ($\approx 3600\text{ cm}^{-1}$).

* **Intramolecular hydrogen bonding:** Occurs between proximate functional groups within the same molecule when stereochemistry permits a stable five- or six-membered chelate ring. In *o*-nitrophenol ($2\text{-O}_2\text{N-C}_6\text{H}_4\text{-OH}$), the adjacent ($1,2$) $-\text{OH}$ hydrogen and $-\text{NO}_2$ oxygen form an internal six-membered ring. Because this interaction is an internal molecular feature, diluting the sample in an inert solvent does not disrupt the chelate ring. The shifted $\text{O-H}$ stretching band ($\approx 3200\text{--}3250\text{ cm}^{-1}$) remains essentially invariant with respect to concentration (though strong temperature shifts or coordinating polar solvents can disrupt it).

> **Watch out.** Avoid using catechol (benzene-1,2-diol) and hydroquinone (benzene-1,4-diol) as ideal contrasts for dilution experiments. While catechol establishes an intramolecular hydrogen bond via one hydroxyl group, its second $-\text{OH}$ group remains free to form intermolecular associates at elevated concentrations. Comparing *o*-nitrophenol with *p*-nitrophenol provides an unambiguous, textbook contrast.

#### Example 1: Distinguishing isomers using IR dilution

**Problem:** Spectra of two nitrophenol isomers are measured across a concentration gradient in an identical non-hydrogen-bonding solvent at constant temperature. One sample exhibits an emerging, high-wavenumber free $\text{O-H}$ band upon progressive dilution, whereas the other sample retains its hydrogen-bonded $\text{O-H}$ band position without concentration-dependent shifting. Explain the assignments.

**Solution:**

1. **Differentiate concentration from association effects:** Evaluate band shapes and peak positions rather than raw absorbance values alone, since dilution universally reduces total absorbance per the Beer–Lambert law.
2. **Assign the concentration-dependent sample:** The progressive emergence of a sharp, high-wavenumber free $\text{O-H}$ band reveals the dissociation of intermolecular hydrogen bonds as intermolecular spacing increases. This behavior confirms the sample is ***p*-nitrophenol**, which cannot form an internal chelate ring.
3. **Assign the concentration-independent sample:** Invariance of the hydrogen-bonded $\text{O-H}$ absorption frequency upon dilution demonstrates an internal structural interaction unaffected by intermolecular distance. This confirms the sample is ***o*-nitrophenol**, which forms a stable six-membered intramolecular chelate ring.
4. **Cross-validate structural identity:** Check the full fingerprint and functional group spectra against authentic reference libraries to verify overall consistency alongside the dilution response.

---



### Other analytical applications of IR spectroscopy

* **Checking sample purity:** Pure compounds yield clean, reproducible absorption spectra with characteristic peak shapes. Extraneous bands that do not belong to the authentic reference spectrum (such as an unexpected sharp $\text{C=O}$ peak near $1715\text{ cm}^{-1}$ in a purified secondary alcohol) clearly expose functional-group impurities. However, the absence of extraneous peaks indicates optical purity within detection thresholds, not absolute chemical purity.
* **Monitoring reaction kinetics:** Recording IR spectra at fixed time intervals enables quantitative tracking of reaction progress. For example, during the oxidation of a secondary alcohol to a ketone, the gradual decrease in absorbance of the broad $\text{O-H}$ band ($3200\text{--}3600\text{ cm}^{-1}$) accompanied by the simultaneous growth of the sharp carbonyl $\text{C=O}$ band ($\approx 1715\text{ cm}^{-1}$) directly tracks conversion kinetics.

---

### Self-check questions

1. **Question:** Why does hydrogen bonding shift the covalent $\text{O-H}$ stretching absorption to a lower wavenumber rather than a higher one?  
   **Answer:** Formation of a hydrogen bond ($\text{O-H}\cdots\text{O}$) draws electron density toward the acceptor, lengthening and weakening the covalent $\text{O-H}$ bond. This decreases the effective force constant $k$. Because vibrational wavenumber is directly proportional to the square root of the force constant ($\bar{\nu} \propto \sqrt{k}$), a smaller force constant lowers the stretching frequency.

2. **Question:** A sample displays a strong, sharp IR peak at $1665\text{ cm}^{-1}$ alongside two medium-intensity bands at $3350\text{ cm}^{-1}$ and $3180\text{ cm}^{-1}$. Why is assigning the $1665\text{ cm}^{-1}$ band to an alkene $\text{C=C}$ stretch likely incorrect?  
   **Answer:** Amide carbonyl ($\text{C=O}$) stretching frequencies are shifted down to $1650\text{--}1690\text{ cm}^{-1}$ due to resonance delocalisation from the adjacent nitrogen lone pair, and primary amides characteristically display two $\text{N-H}$ stretching bands in the $3180\text{--}3500\text{ cm}^{-1}$ region. Furthermore, carbonyl stretches possess high dipole moments and yield very strong absorption bands, whereas alkene $\text{C=C}$ stretches are characteristically weak to medium in intensity.

---

---

<!-- page 11 | Dielectric thermal analysis: principle, instrument and uses -->

## Dielectric thermal analysis: principle, instrument and uses

### Operating principle

**Dielectric thermal analysis (DETA)**

Dielectric thermal analysis (DETA), also designated as dielectric analysis (DEA), measures how the alternating-current (AC) dielectric response of a material changes with temperature, time, or frequency. It is widely used for polar and semi-polar materials such as polymers, thermosetting resins, adhesives, glasses, and ceramics.

When a sinusoidal AC voltage is applied across a sample placed between two electrodes, the alternating electric field interacts with two distinct microscopic species inside the material:

1. **Permanent molecular dipoles** undergo **dipolar relaxation**, rotating to reorient with the alternating electric field.
2. **Mobile free ions** (often trace impurities or catalyst residues) undergo **ionic migration**, drifting translationally toward the oppositely charged electrode.

![Randomly oriented molecular dipoles between parallel plates without an external electric field](/notes/cse/s1/chemistry/module-3/assets/page-058-image-2-structured.svg)

*Figure 11.1: In the absence of an external electric field, thermal motion keeps molecular dipoles randomly oriented.*

![Molecular dipoles reorienting between charged plates under an applied electric field](/notes/cse/s1/chemistry/module-3/assets/page-058-image-3-structured.svg)

*Figure 11.2: Under an applied electric field, dipoles experience torque and partially align with the field direction.*

> **Watch out.** Do not confuse ions with dipoles. Ions do not "align" in place, and bound dipoles do not migrate across the sample. Instead, dipoles rotate (orientation polarisation) while free ions drift toward opposite electrodes (ionic conduction). Furthermore, although static diagrams show neat alignment at a single instant, an AC field reverses continuously and thermal agitation opposes alignment, so dipoles never remain perfectly aligned.

Dipolar relaxation and ionic conduction impart both storage and loss components to the dielectric response. The analyser measures the current amplitude and its phase relative to the applied voltage to separate these components.

---

### Dielectric parameters

Using the harmonic time convention $\exp(+i\omega t)$, the dimensionless complex relative permittivity $\varepsilon_r^*$ is expressed as:

$$
\varepsilon_r^* = \varepsilon' - i\varepsilon''
$$

Where:

* $i = \sqrt{-1}$
* $\omega = 2\pi f$ is the angular frequency (in $\text{rad s}^{-1}$)
* $f$ is the AC frequency (in $\text{Hz}$)

For a parallel-plate cell of plate area $A$ and electrode separation $d$, the measured capacitance is $C = \varepsilon_0 \varepsilon' A / d$ and the AC conductance is $G = \omega \varepsilon_0 \varepsilon'' A / d$, where $\varepsilon_0$ is the vacuum permittivity.

| Parameter | Symbol | Physical Meaning |
| :--- | :---: | :--- |
| **Relative permittivity (storage permittivity)** | $\varepsilon'$ | Dimensionless measure of a material's ability to polarise and store electrical energy reversibly in an electric field. |
| **Dielectric loss factor** | $\varepsilon''$ | Dimensionless measure proportional to the electrical energy dissipated as heat per cycle due to viscous drag on rotating dipoles and migrating ions (not the energy itself). |
| **Loss tangent (dissipation factor)** | $\tan \delta$ | Dimensionless ratio of loss factor to storage permittivity, where $\delta$ is the dielectric loss angle by which electric displacement lags the electric field. |

The dissipation factor is defined by:

$$
\tan \delta = \frac{\varepsilon''}{\varepsilon'}
$$

Note that the loss angle $\delta$ is the complement of the current–voltage phase angle $\theta$ for the equivalent parallel capacitor–conductance model ($\delta = 90^\circ - \theta$), rather than the current–voltage phase shift itself.

> **Watch out.** Student notes often state that a low $\tan \delta$ makes a material a good *thermal* insulator. In reality, low $\tan \delta$ is desired for **electrical insulation** and **low-loss capacitors** because it minimises dielectric heating under AC fields. Dielectric loss measurements do not measure thermal conductivity or guarantee thermal insulation.

#### Example 1: Calculating the dissipation factor (illustrative example)

**Problem:**  
At a fixed frequency and temperature, a polymer film tested in a DETA cell has a relative storage permittivity $\varepsilon' = 4.00$ and a dielectric loss factor $\varepsilon'' = 0.08$. Assuming linear dielectric behaviour, calculate the dissipation factor $\tan \delta$.

**Solution:**

$$
\tan \delta = \frac{\varepsilon''}{\varepsilon'} = \frac{0.08}{4.00} = 0.02
$$

The dissipation factor is $0.02$ (dimensionless).

---



### Instrumentation and working

![Schematic of a dielectric thermal analysis cell inside a temperature-controlled furnace](/notes/cse/s1/chemistry/module-3/assets/page-058-image-1-clean.svg)

*Figure 11.3: Schematic of a DETA setup showing the sample between electrodes inside a programmable furnace connected to a dielectric analyser.*

A standard DETA instrument comprises the following primary components:

* **Sample holder and electrodes:** Parallel metal plates or interdigitated comb electrodes that directly contact the sample (thin film, liquid resin, powder, or pellet).
* **Frequency generator (AC source):** Delivers a sinusoidal voltage of known amplitude and selectable frequency (fixed or swept across multiple frequencies).
* **Temperature-programmable furnace and controller:** Heats, cools, or holds the sample isothermally at a controlled rate while preventing thermal overshoot.
* **Temperature sensor (thermocouple or RTD):** Positioned in close proximity to the sample to monitor its actual temperature accurately.
* **Environmental control unit:** Purges the furnace chamber with dry air or an inert gas such as nitrogen to prevent oxidative degradation or moisture absorption.
* **Dielectric analyser and recorder:** Measures the amplitude and phase of the resulting current relative to the applied voltage, calculates capacitance, conductance, $\varepsilon'$, $\varepsilon''$, and $\tan \delta$, and plots them as functions of temperature, time, or frequency.

#### Experimental procedure

1. Mount the sample between the electrodes inside the furnace chamber and establish the required purge gas atmosphere.
2. Apply a sinusoidal AC excitation voltage at one or more selected frequencies.
3. Ramp or hold the furnace temperature according to a predetermined thermal program while continuously tracking sample temperature.
4. Record $\varepsilon'$, $\varepsilon''$, and $\tan \delta$ continuously as functions of temperature or curing time.

---

### Applications of DETA

* **Glass transition temperature ($T_g$) and relaxation processes:** Segmental mobility changes near the glass transition produce a dispersion in storage permittivity ($\varepsilon'$) and pronounced peaks in the loss factor ($\varepsilon''$) when the molecular relaxation timescale matches the AC excitation frequency. Because dipole relaxation is a kinetic process, the apparent $T_g$ shifts to higher temperatures as measurement frequency increases.
* **Curing of thermosetting resins and adhesives:** During isothermal curing of epoxies or polyurethanes, crosslinking builds a rigid 3D polymer network that restricts ion drift and dipole reorientation. At constant temperature, ionic mobility drops and bulk resistivity rises significantly as curing progresses, allowing precise real-time tracking of gelation and vitrification.
* **Moisture and quality monitoring:** Because water has a very high dielectric constant ($\varepsilon' \approx 80$ at room temperature) and promotes ionic conduction, DETA sensitively detects trace moisture absorption, plasticiser loss, and batch-to-batch variations in polymers.
* **Electrical insulation and capacitor development:** Evaluating $\varepsilon'$ and $\tan \delta$ over wide operational temperature and frequency ranges enables engineers to design low-loss dielectric films for capacitors and high-voltage electrical insulation.

---

### Self-check questions

1. **Question:** Why does a polymer show a peak in $\tan \delta$ as it is heated through its glass transition temperature $T_g$?  
   **Answer:** A segmental relaxation produces a loss peak when its characteristic relaxation timescale matches the period of the applied AC field. The peak temperature depends on the test frequency and does not necessarily equal the glass transition temperature determined by other thermal methods (e.g., DSC).

2. **Question:** How does increasing the crosslinking density during isothermal epoxy curing affect ionic migration in a DETA experiment?  
   **Answer:** Crosslinking increases network tightness and local steric hindrance, which significantly reduces ionic mobility and causes the bulk electrical resistivity to rise.

---

---

<!-- page 12 | Scanning electron microscopy: signals, instrument and uses -->

## Scanning electron microscopy: signals, instrument and uses

**Scanning electron microscopy**

Scanning electron microscopy (SEM) is a high-resolution imaging technique that visualizes solid specimen surfaces by sweeping a focused beam of high-energy electrons across a sample in a rectangular raster pattern. Unlike an optical microscope that focuses light using glass lenses, or a transmission electron microscope (TEM) that relies on electrons transmitted through an ultra-thin sample, an SEM detects signals emitted from the sample surface and maps their intensity coordinate-by-coordinate to display pixel brightness.

---

### Electron–sample interactions and signals

When primary beam electrons penetrate a solid target, they undergo multiple elastic and inelastic scattering events within a pear-shaped interaction volume. The depth and geometry of this interaction volume depend on the incident beam energy and the average atomic number of the material, generating several distinct, detectable signals.

![Secondary electron generation diagram showing an incoming electron beam ejecting an outer-shell electron from a sample atom.](/notes/cse/s1/chemistry/module-3/assets/page-055-image-1-structured.svg)

*Figure 12.1: Inelastic collision ejecting a low-energy secondary electron.*

**Secondary electrons**

Secondary electrons (SE) are ejected when primary beam electrons transfer a portion of their kinetic energy to atomic electrons via inelastic collisions, freeing loosely bound outer-shell electrons. Because secondary electrons have very low kinetic energies (typically below $50\text{ eV}$), only those generated within a few nanometres of the surface can escape into the vacuum. The escape yield is strongly governed by local surface tilt, curvature, and edges, making secondary electron imaging the primary operational mode for revealing high-resolution surface topography, morphology, and texture.

**Backscattered electrons**

Backscattered electrons (BSE) are incident primary electrons deflected backward out of the specimen at large angles through predominantly elastic collisions with atomic nuclei. They retain a significant fraction of their initial primary beam energy and escape from deeper within the interaction volume than secondary electrons. Because heavier atomic nuclei (higher atomic number, $Z$) possess a greater positive nuclear charge, they deflect electrons backward much more effectively. Regions of higher average $Z$ yield more backscattered electrons and appear brighter under identical detector conditions, providing compositional ($Z$-contrast) alongside macro-topography.

**Characteristic X-rays**

Characteristic X-rays are emitted when an energetic beam electron ejects an inner-shell electron, and an electron from a higher orbital drops into the vacancy, releasing an X-ray photon with an energy precisely equal to the quantum difference between the two shells. Because these energy levels are unique to each element, coupling an SEM with an Energy-Dispersive X-ray Spectroscopy (EDS) detector enables elemental identification and chemical mapping. Supplementary techniques, such as Electron Backscatter Diffraction (EBSD), can be paired with SEM to resolve crystallographic phase and orientation.

![Backscattered electron diagram showing an incident primary electron deflected at a large angle by an atomic nucleus.](/notes/cse/s1/chemistry/module-3/assets/page-055-image-2-structured.svg)

*Figure 12.2: Elastic scattering of a primary electron by an atomic nucleus to produce a backscattered electron.*

> **Watch out.** Backscattered electrons originate predominantly from *elastic* nuclear scattering, not inelastic collisions. Furthermore, all elements backscatter electrons to some degree; higher-$Z$ elements simply produce a higher backscatter yield rather than being the exclusive source of BSEs.

### Comparison of emitted signals

| Signal | Origin / Mechanism | Escape Depth | Primary Information Provided |
| :--- | :--- | :--- | :--- |
| **Secondary electrons (SE)** | Inelastic ejection of outer-shell valence electrons | Very shallow (top few $\text{nm}$) | Fine surface topography, morphology, and edge definition |
| **Backscattered electrons (BSE)** | Elastic nuclear deflection of incident beam electrons | Moderate (deeper sub-surface regions) | Compositional atomic-number ($Z$) contrast and macro-topography |
| **Characteristic X-rays** | Inner-shell electron ionization followed by electronic relaxation | Deep interaction volume (micrometre scale) | Elemental identification and semi-quantitative chemical analysis (via EDS) |

---

### Instrumentation and working

An SEM column operates under high vacuum ($10^{-4}\text{ to }10^{-7}\text{ Pa}$) to prevent ambient gas molecules from scattering the electron beam, attenuating emitted signals, or degrading the electron gun filament.

![Schematic diagram of a Scanning Electron Microscope column showing the electron source, anode, condenser lens, scan coils, objective lens, sample, and secondary electron detector.](/notes/cse/s1/chemistry/module-3/assets/page-056-image-1-structured.svg)

*Figure 12.3: Schematic layout of a scanning electron microscope.*

The primary components and operating sequence of an SEM include:

1. **Electron gun and anode:** An electron source—such as a thermionic emitter (heated tungsten filament or $\text{LaB}_6$ crystal) or a field-emission gun (FEG)—generates free electrons. A high-voltage anode accelerates them down the column under an accelerating potential typically ranging from $1\text{ to }30\text{ kV}$.
2. **Condenser lenses:** One or more electromagnetic condenser lenses converge and demagnify the diverging electron stream, controlling the overall probe current reaching the specimen.
3. **Objective lens and aperture:** The final electromagnetic lens focuses the demagnified electron beam into an extremely fine, nanometre-scale probe spot on the specimen surface.
4. **Scan coils:** Deflection coils located within or above the objective lens sweep the focused electron beam synchronously across the sample surface in an $(x, y)$ raster pattern.
5. **Specimen stage and vacuum chamber:** The specimen is mounted securely on a motorized, conductive stage inside an evacuated chamber, allowing precise multi-axis positioning ($x, y, z$, tilt, and rotation).
6. **Detectors and signal processing:** Specialized detectors—such as an Everhart–Thornley scintillator-photomultiplier detector for SEs, a solid-state annular diode for BSEs, and a silicon drift detector for EDS—collect emitted signals at each raster coordinate. The output current is amplified, digitized, and mapped as a corresponding greyscale pixel intensity on a display monitor.

> **Watch out.** Due to the very narrow beam convergence angle, an SEM has a depth of field hundreds of times greater than that of an optical microscope, giving micrographs a pronounced three-dimensional appearance. However, standard SEM micrographs remain 2D intensity projections and do not provide direct mathematical 3D height ($z$-coordinate) profiles without specialized stereoscopic or profilometric reconstruction.

---

### Sample preparation and capabilities

**Conductive coating**

Under high vacuum, electrically insulating specimens accumulate negative surface charges from the incident beam, inducing bright glare streaks, beam deflection, and image distortion. Non-conducting samples are typically coated with an ultra-thin ($2\text{--}10\text{ nm}$) conductive film of gold, platinum, or carbon via sputter deposition or thermal evaporation.

**Environmental SEM**

Environmental SEM (ESEM) and variable-pressure modes introduce a low-pressure gas environment into the chamber to naturally dissipate surface charge. This permits examination of uncoated or hydrated specimens when heavy-metal coatings could obscure fine nanoscale features or produce overlapping X-ray emission peaks during EDS analysis.

**Specimen dehydration**

Specimen dehydration is required under conventional high-vacuum SEM for biological and wet specimens. These samples undergo chemical fixation, critical-point drying, or cryo-fixation to prevent rapid outgassing, structural collapse, and chamber contamination.

Modern field-emission SEMs achieve sub-nanometre spatial resolution, continuously variable magnifications from $10\times$ up to over $500{,}000\times$, and an exceptional depth of focus that keeps rough, non-planar surfaces in sharp focus across wide fields of view.

---

#### Example 1: Selecting SEM signal modes for failure analysis

**Problem:** A failure analysis engineer investigates a fractured steel fastener suspected of harbouring microscopic lead ($Z = 82$) inclusions distributed within a bulk iron ($Z = 26$) matrix, alongside sub-micrometre fatigue striations across the fracture surface. Which SEM operating mode should be selected to:
1. Resolve the fine fatigue striations on the fracture ridges?
2. Rapidly locate the dispersed heavy-metal inclusions?
3. Confirm the elemental identity of the suspected inclusions?

**Solution:**
1. **Fatigue striation imaging (Secondary Electron mode):** Secondary electrons escape only from the top few nanometres of the specimen surface and are exceptionally sensitive to micro-topographic variations and local tilt, providing sharp visual clarity of the fine fatigue striations.
2. **Inclusion screening (Backscattered Electron mode):** The backscattered electron coefficient increases monotonically with atomic number ($Z$). Lead ($Z = 82$) scatters incident electrons far more effectively than iron ($Z = 26$). Under BSE imaging, lead inclusions appear as bright, high-contrast features against a darker iron background.
3. **Elemental identification (Energy-Dispersive X-ray Spectroscopy):** Positioning the focused electron probe directly over a bright inclusion and recording the emitted characteristic X-ray spectrum via EDS identifies the characteristic emission peaks ($L$- and $M$-series lines) of elemental lead.

---



### Applications

- **Materials science and metallurgy:** Inspecting crystal grains, secondary precipitate phases, grain boundary segregation, corrosion pits, and differentiating between ductile dimple fracture and brittle cleavage surfaces.
- **Microelectronics and nanotechnology:** Measuring particle dimensions, agglomeration states, and aspect ratios of synthesized nanoparticles, as well as inspecting semiconductor wafers and interconnect lines for lithographic defects.
- **Forensic and geological investigations:** Characterizing microscopic gunshot residue (GSR) particles, identifying asbestos fibres, and analysing phase distributions in mineralogical thin sections.
- **Biological and biomedical sciences:** Examining surface structures of cells, bacteria, insect cuticles, biomaterial scaffolds, and dental implants.

---

### Self-check questions

1. **Question:** Why do regions containing heavier elements appear noticeably brighter in a backscattered electron (BSE) image of a mechanically polished, flat cross-section?
   **Answer:** Heavier atomic nuclei have a higher positive nuclear charge (higher $Z$), which exerts a much stronger Coulomb attractive force on passing beam electrons. This leads to a significantly higher probability of wide-angle elastic deflections, yielding a higher fraction of backscattered electrons collected by the detector.

2. **Question:** Why is an insulating ceramic specimen often coated with carbon instead of gold prior to qualitative and quantitative EDS analysis?
   **Answer:** Although both carbon and gold mitigate surface charging, gold produces strong characteristic $M$- and $L$-shell X-ray peaks that can overlap and mask characteristic peaks of common transition metals and light elements. Gold also exhibits higher X-ray absorption. Carbon introduces a single low-energy $K\alpha$ line ($0.277\text{ keV}$), leaving the rest of the analytical spectrum free from interference for heavier analytes.

---

---

<!-- page 13 | Revision sheet and practice problems -->

## Revision sheet and practice problems

### Core Formulas and Unit Conventions

| Quantity / Law | Equation | Symbol Definitions and Standard Units |
| :--- | :--- | :--- |
| **Photon energy** | $\Delta E = h\nu = \dfrac{hc}{\lambda} = hc\bar{\nu}$ | $h$: Planck's constant ($\text{J s}$); $c$: speed of light ($\text{m s}^{-1}$); $\lambda$: wavelength ($\text{m}$); $\bar{\nu}$: wavenumber ($\text{m}^{-1}$) |
| **Transmittance** | $T = \dfrac{I}{I_0}$ | $I_0$: incident light intensity; $I$: transmitted light intensity ($T$ is dimensionless; $\%T = 100T$) |
| **Absorbance** | $A = \log_{10}\left(\dfrac{I_0}{I}\right) = -\log_{10} T$ | $A$: absorbance (dimensionless) |
| **Beer–Lambert law** | $A = \varepsilon c l$ | $c$: molar concentration ($\text{mol L}^{-1}$ or $\text{M}$); $l$: path length ($\text{cm}$); $\varepsilon$: molar absorptivity ($\text{L mol}^{-1}\text{cm}^{-1}$) |
| **Two-point concentration ratio** | $\dfrac{c_1}{c_2} = \dfrac{A_1}{A_2} = \dfrac{\log_{10} T_1}{\log_{10} T_2}$ | Valid for identical chemical species, wavelength, solvent, temperature, and cell path length $l$ |
| **Fundamental vibrational modes** | $\text{Linear: } 3N - 5$<br>$\text{Non-linear: } 3N - 6$ | $N$: total number of atoms in the molecule |
| **Reduced mass** | $\mu = \dfrac{m_1 m_2}{m_1 + m_2}$ | $m_1, m_2$: atomic masses. Convert $\text{amu}$ to $\text{kg}$ via multiplication by $1.66 \times 10^{-27}\text{ kg amu}^{-1}$ |
| **Harmonic vibrational wavenumber** | $\bar{\nu} = \dfrac{1}{2\pi c}\sqrt{\dfrac{k}{\mu}} \implies k = 4\pi^2 c^2 \mu \bar{\nu}^2$ | $k$: bond force constant ($\text{N m}^{-1}$). For SI units: $c = 3 \times 10^8\text{ m s}^{-1}$ and $\bar{\nu}_{\text{SI}} = 100\bar{\nu}_{\text{cm}^{-1}}$ |
| **Dielectric dissipation factor** | $\tan\delta = \dfrac{\varepsilon''}{\varepsilon'}$ | $\varepsilon'$: relative permittivity (dielectric storage); $\varepsilon''$: dielectric loss factor ($\tan\delta$ is dimensionless) |

> **Watch out.** Never mix centimetre wavenumbers ($\text{cm}^{-1}$) with the SI speed of light ($3 \times 10^8\text{ m s}^{-1}$) when calculating force constants. Multiply $\bar{\nu}$ in $\text{cm}^{-1}$ by $100$ to obtain $\text{m}^{-1}$ before squaring.

---

### Analytical Techniques Overview

| Technique | Probe / Perturbation | Physical Property Measured | Primary Analytical Information |
| :--- | :--- | :--- | :--- |
| **UV–Visible Spectroscopy** | UV–visible photons ($200\text{–}800\text{ nm}$) | Electronic excitation absorbance ($A$ vs $\lambda$) | Conjugated $\pi$-electron systems, chromophores, quantitative trace concentration ($c$) |
| **Infrared (IR) Spectroscopy** | Infrared radiation ($4000\text{–}400\text{ cm}^{-1}$) | Vibrational resonant absorption ($\%T$ vs $\bar{\nu}$) | Characteristic functional groups, bond force constants ($k$), intra- vs intermolecular H-bonding |
| **Dielectric Thermal Analysis (DETA)** | Alternating electric field across programmed temperature ramp | Complex permittivity ($\varepsilon'$), dielectric loss factor ($\varepsilon''$), $\tan\delta$ vs $T$ | Dipolar and ionic relaxation dynamics, glass transition temperature ($T_g$), polymer curing kinetics |
| **Scanning Electron Microscopy (SEM)** | Focused high-energy primary electron beam ($0.5\text{–}30\text{ keV}$) | Secondary electrons (SE), backscattered electrons (BSE), characteristic X-rays | High-resolution surface topography (SE), compositional atomic-number contrast (BSE), elemental analysis (EDS) |

---

### Rapid-Retrieval Questions

1. **Why is Raman spectroscopy not an emission spectrum?**  
   Raman spectroscopy measures the **inelastic scattering** of incident photons following an induced molecular polarization change, whereas emission spectroscopy measures radiation emitted when an electronically or vibrationally excited state spontaneously relaxes to a lower energy state.

2. **Can a colourless solution obey the Beer–Lambert law?**  
   Yes. A solution appears colourless if it does not absorb in the visible spectrum ($400\text{–}800\text{ nm}$), but it may exhibit intense absorption in the ultraviolet region ($200\text{–}400\text{ nm}$). At an appropriate UV analytical wavelength ($\lambda_{\max}$), it fully obeys the Beer–Lambert law under dilute conditions.

3. **What is the difference between a theoretically possible electronic transition and a symmetry-allowed transition?**  
   Energy matching between molecular orbitals merely establishes that an excitation is energetically plausible. Quantum mechanical selection rules dictate whether the electric dipole transition moment integral is non-zero. Only symmetry-allowed transitions exhibit large molar absorptivities ($\varepsilon > 10^3\text{ L mol}^{-1}\text{cm}^{-1}$); forbidden transitions appear extremely weak via vibronic coupling.

4. **Why is the IR activity criterion stated per vibrational mode rather than per molecule?**  
   Molecules possess multiple degrees of vibrational freedom. A vibrational mode is IR active **if and only if** that specific coordinate displacement causes a net change in the molecular dipole moment ($\partial\mu/\partial q \neq 0$). Symmetrical molecules like $\text{CO}_2$ possess both IR-active and IR-inactive modes simultaneously.

5. **Why does $\text{CO}_2$ have $4$ fundamental vibrational modes, $3$ IR-active modes, but only $2$ fundamental IR absorption bands?**  
   Linear $\text{CO}_2$ ($N=3$) possesses $3(3)-5 = 4$ fundamental modes:
   * **Symmetric stretch:** Non-polar; IR inactive ($\partial\mu/\partial q = 0$).
   * **Asymmetric stretch:** Polar; IR active, giving an intense band at $\approx 2350\text{ cm}^{-1}$.
   * **Bending modes (2 orthogonal coordinates):** Polar and IR active, but structurally and energetically degenerate, collapsing into a single absorption band at $\approx 667\text{ cm}^{-1}$.

6. **What is the role of the reference (blank) cell in a double-beam UV–visible spectrophotometer?**  
   The reference cell contains pure solvent and all background reagents except the absorbing analyte. It automatically cancels out reflection losses, light scattering, and optical absorption from the solvent and cuvette walls across the wavelength scan.

7. **How does dilution in an inert solvent distinguish intermolecular from intramolecular hydrogen bonding in IR spectra?**  
   Dilution in a non-polar solvent increases intermolecular separation, disrupting **intermolecular** hydrogen bonds and shifting broad associated $\text{O–H}$ bands ($\approx 3300\text{ cm}^{-1}$) toward sharp, unassociated free $\text{O–H}$ stretching bands ($\approx 3600\text{ cm}^{-1}$). In contrast, **intramolecular** hydrogen-bonded chelates remain intact upon dilution, showing no spectral position shift.

8. **What does a low dissipation factor ($\tan\delta$) indicate in DETA?**  
   A low dissipation factor indicates that dielectric energy loss is minimal relative to stored capacitive energy ($\varepsilon'' \ll \varepsilon'$), demonstrating high electrical insulation efficiency, minimal dielectric heating, and low dielectric relaxation in the evaluated frequency and temperature domain.

9. **How do secondary electrons (SE) and backscattered electrons (BSE) differ in their physical origin in SEM?**  
   * **Secondary electrons (SE):** Ejected from sample atoms following inelastic collisions with primary beam electrons; possess low kinetic energy ($< 50\text{ eV}$) and originate within top surface layers ($< 10\text{ nm}$), yielding fine topographical contrast.
   * **Backscattered electrons (BSE):** High-energy beam electrons deflected at large angles via elastic collisions with atomic nuclei; intensity scales with atomic number ($Z^2$), yielding compositional contrast.

10. **Why can sample charging be a problem in SEM, and how is it managed?**  
    Electrically insulating samples accumulate negative charges from the incident beam, deflecting subsequent electrons and producing severe image distortion, brightness artifacts, and astigmatism. It is managed by sputter-coating the specimen with an ultra-thin conductive metal layer (gold or platinum), grounding the sample stage, or operating in low-vacuum/environmental SEM mode.

---

### Numerical Practice Problems

#### Problem 1: Absorbance from Percent Transmittance

A solution placed in a spectrophotometer shows a percentage transmittance of $25\%$. Calculate its absorbance.

1. Convert percentage transmittance to fractional transmittance $T$:
   $$T = \frac{\%T}{100} = \frac{25}{100} = 0.25$$

2. Apply the logarithmic relation between absorbance and transmittance:
   $$A = -\log_{10} T = -\log_{10}(0.25) = \log_{10}(4) \approx 0.6021$$

#### Problem 2: Concentration Determination via Beer–Lambert Law

A solution exhibits an absorbance of $0.60$ in a cuvette of path length $2.0\text{ cm}$ at a wavelength where the molar absorptivity is $150\text{ L mol}^{-1}\text{cm}^{-1}$. Calculate the molar concentration of the solution.

1. Isolate concentration $c$ from the Beer–Lambert law ($A = \varepsilon c l$):
   $$c = \frac{A}{\varepsilon l}$$

2. Substitute the given parameter values:
   $$c = \frac{0.60}{(150\text{ L mol}^{-1}\text{cm}^{-1})(2.0\text{ cm})} = \frac{0.60}{300}\text{ mol L}^{-1} = 2.0 \times 10^{-3}\text{ M}$$

#### Problem 3: Two-Point Standard Ratio Analysis

A standard solution of a coloured complex with concentration $20.0\text{ mg L}^{-1}$ gives an absorbance of $0.40$ at $\lambda_{\max}$. Under identical experimental conditions and path length, an unknown solution of the same complex gives an absorbance of $0.25$. Calculate the concentration of the unknown solution.

1. Establish proportionality between absorbance and concentration under identical cell parameters:
   $$\frac{c_2}{c_1} = \frac{A_2}{A_1} \implies c_2 = c_1 \left(\frac{A_2}{A_1}\right)$$

2. Calculate the unknown concentration $c_2$:
   $$c_2 = 20.0\text{ mg L}^{-1} \times \left(\frac{0.25}{0.40}\right) = 12.5\text{ mg L}^{-1}$$

#### Problem 4: Vibrational Degrees of Freedom

Calculate the total number of fundamental vibrational modes for:
1. Linear carbon dioxide ($\text{CO}_2$, $N=3$)
2. Bent water ($\text{H}_2\text{O}$, $N=3$)

* **Linear $\text{CO}_2$ ($N=3$):**
  $$\text{Modes} = 3N - 5 = 3(3) - 5 = 4\text{ modes}$$

* **Non-linear $\text{H}_2\text{O}$ ($N=3$):**
  $$\text{Modes} = 3N - 6 = 3(3) - 6 = 3\text{ modes}$$

#### Problem 5: Dielectric Dissipation Factor

During a DETA experiment at a fixed frequency and temperature, a polymer sample exhibits a relative permittivity $\varepsilon' = 5.0$ and a dielectric loss factor $\varepsilon'' = 0.15$. Calculate the dissipation factor ($\tan\delta$).

1. Apply the dissipation factor relation:
   $$\tan\delta = \frac{\varepsilon''}{\varepsilon'}$$

2. Substitute the measured dielectric parameters:
   $$\tan\delta = \frac{0.15}{5.0} = 0.030$$

---

### Long-Answer Practice Prompts

1. **Beer–Lambert Law Derivation & Validation:**  
   State the differential form of the Beer–Lambert law and integrate it to obtain $A = \varepsilon c l$. Sketch the standard calibration plot of $A$ versus $c$, identify the physical meaning of its slope, and list four experimental prerequisites required for strict linear adherence.

2. **Electronic Excitations & Chromophore Conjugation:**  
   Illustrate the four primary electronic transitions ($\sigma \to \sigma^*$, $n \to \sigma^*$, $\pi \to \pi^*$, and $n \to \pi^*$) on a molecular orbital energy-level diagram. Detail why extended conjugation in conjugated polyenes causes a bathochromic shift in $\lambda_{\max}$.

3. **Double-Beam UV–Vis Spectrophotometry:**  
   Draw a complete block diagram of a double-beam UV–visible spectrophotometer. State the specific function of the radiation sources, monochromator diffraction grating, quartz optical cells, rotating sector chopper, and photomultiplier tube detector.

4. **Infrared Selection Rules & Molecular Vibrations:**  
   State the dipole-moment selection rule for fundamental infrared absorption. Illustrate the vibrational modes of $\text{CO}_2$ and $\text{H}_2\text{O}$, classify each mode as IR active or inactive, and explain the exact number of observable fundamental IR absorption bands for both molecules.

5. **Hooke's Law & Bond Force Constants:**  
   Express Hooke's law for diatomic harmonic vibrations relating $\bar{\nu}$, $k$, and $\mu$. Using this equation, explain the observed stretching frequency hierarchy across carbon–carbon bonds:
   $$\bar{\nu}(\text{C–C}) < \bar{\nu}(\text{C=C}) < \bar{\nu}(\text{C}\equiv\text{C})$$

6. **Hydrogen Bonding Discrimination via IR Dilution:**  
   Explain how infrared dilution analysis in an inert non-polar solvent distinguishes *ortho*-nitrophenol from *para*-nitrophenol. Provide supporting chemical structures detailing intramolecular chelation versus intermolecular polymeric associate formation.

7. **Dielectric Thermal Analysis Principles:**  
   Describe the working principles of Dielectric Thermal Analysis (DETA). Define dielectric storage permittivity ($\varepsilon'$), loss factor ($\varepsilon''$), and dissipation factor ($\tan\delta$). Provide an instrumentation schematic and discuss four engineering applications in polymer processing.

8. **Scanning Electron Microscopy Instrumentation & Contrast:**  
   Describe the beam-generation and optical focusing mechanism of a Scanning Electron Microscope (SEM) with a schematic diagram. Contrast secondary electrons (SE), backscattered electrons (BSE), and characteristic X-rays with respect to emission depth, energy, and analytical utility.

---

### Exam-Readiness Checklist

- [ ] I can convert effortlessly between transmittance ($T$ or $\%T$) and absorbance ($A$) and apply consistent units ($\text{cm}$ vs $\text{dm}$) for $\varepsilon$.
- [ ] I can identify chromophores, auxochromes, and all possible electronic transitions directly from a molecular structure.
- [ ] I can calculate $3N-5$ or $3N-6$ vibrational modes and convert $\text{amu}$ to $\text{kg}$ and $\text{cm}^{-1}$ to $\text{m}^{-1}$ in force-constant problems.
- [ ] I can sketch and explain the block diagrams, signal origins, and applications for UV–Vis, IR, DETA, and SEM.
