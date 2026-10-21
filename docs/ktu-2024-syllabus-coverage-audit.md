# KTU 2024 first-year S1 syllabus and notes audit

Generated: 2026-10-21T22:20+05:30
Gemini model: `gemini-4-argon` via Google ADK and Vertex AI.
Course audits complete: 27/27 group/course entries.

## Department and S1 subject verification

The official first-year syllabi group departments as A (CSE), B (ECE/EEE), and C (Civil/Mechanical). Subject codes are preserved as printed. Courses labeled S1/S2 in the source remain ambiguous until the college timetable confirms their local term.

### Computer Science and Engineering (`cse`, Group A)

- Official syllabus entries: `GAMAT101`, `GAPHT121`, `GXCYT122`, `GMEST103`, `GXEST104`, `UCEST105`, `GXESL106`, `UCPWT127`, `UCHUT128`.
- Currently listed S1 notes: `GAMAT101`, `GXCYT122`, `GMEST103`, `GXEST104`, `UCEST105`, `GAPHT121`.
- Official entries not listed in the notes catalogue: `GXESL106`, `UCPWT127`, `UCHUT128`.
- S1/S2 schedule clarification needed: yes.

### Electronics and Communication Engineering (`ece`, Group B)

- Official syllabus entries: `GYMAT101`, `GBPHT121`, `GXCYT122`, `GMEST103`, `GXEST104`, `UCEST105`, `GXESL106`, `UCHWT127`, `UCHUT128`.
- Currently listed S1 notes: `GYMAT101`, `GXCYT122`, `GMEST103`, `GXEST104`, `GBPHT121`, `UCEST105`.
- Official entries not listed in the notes catalogue: `GXESL106`, `UCHWT127`, `UCHUT128`.
- S1/S2 schedule clarification needed: yes.

### Electrical and Electronics Engineering (`eee`, Group B)

- Official syllabus entries: `GYMAT101`, `GBPHT121`, `GXCYT122`, `GMEST103`, `GXEST104`, `UCEST105`, `GXESL106`, `UCHWT127`, `UCHUT128`.
- Currently listed S1 notes: `GYMAT101`, `GXCYT122`, `GMEST103`, `GXEST104`, `GBPHT121`, `UCEST105`.
- Official entries not listed in the notes catalogue: `GXESL106`, `UCHWT127`, `UCHUT128`.
- S1/S2 schedule clarification needed: yes.

### Civil Engineering (`civil`, Group C)

- Official syllabus entries: `GYMAT101`, `GZPHT121`, `GCCYT122`, `GCEST103`, `GCEST104`, `UCEST105`, `GCESL106`, `UCHWT127`, `UCHUT128`.
- Currently listed S1 notes: `GCCYT122`, `UCEST105`.
- Official entries not listed in the notes catalogue: `GYMAT101`, `GZPHT121`, `GCEST103`, `GCEST104`, `GCESL106`, `UCHWT127`, `UCHUT128`.
- S1/S2 schedule clarification needed: yes.

### Mechanical Engineering (`me`, Group C)

- Official syllabus entries: `GYMAT101`, `GZPHT121`, `GCCYT122`, `GCEST103`, `GCEST104`, `UCEST105`, `GCESL106`, `UCHWT127`, `UCHUT128`.
- Currently listed S1 notes: `GCCYT122`, `UCEST105`.
- Official entries not listed in the notes catalogue: `GYMAT101`, `GZPHT121`, `GCEST103`, `GCEST104`, `GCESL106`, `UCHWT127`, `UCHUT128`.
- S1/S2 schedule clarification needed: yes.

The Civil/Mechanical Mathematics catalogue decision is intentionally deferred, as requested. `GYMAT101` remains in the official Group C S1 syllabus and is currently absent from those two notes catalogues.

## Image input snapshot

The corpus includes 817 unique image references: 0 downloaded, 0 copied from local public files, 438 already present from an earlier snapshot pass, and 379 links returning 404. The 404 references are recorded in `data/syllabus/processing/input/image-manifest.json` and were not passed off as available evidence.

This is the Gemini baseline snapshot captured before the targeted refinements below were applied. The coverage findings describe what the agent saw in the original notes; the remediation summary records the changes made afterward.

## Targeted refinements applied after the baseline audit

- **GBPHT121 (ECE/EEE), Module 3:** added superconductivity, transition temperature, temperature-dependent critical field, Meissner effect, Type I/II comparison, and applications. Added the missing four-module syllabus reader and its catalogue link.
- **GMEST103 Graphics:** added CAD introduction, design role, advantages, and a dimensioned 2D drawing workflow for internal evaluation. Removed the excluded reverse-section problem page and corrected the exam reader to state eight 15-mark questions, two per module, with one answered from each module (60 marks total; no Part A/Part B split).
- **UCEST105 Python:** moved selection, iteration, and collection topics in the syllabus reader from Module 2 to Module 3. Removed Python programming and collection pages from the Module 2 notes, added missing syllabus-aligned pseudocode exercises, and added a full Module 3 recursion section with call-stack tracing and the listed sample problems. Registered the shared question-paper page across the common Python branches.
- **GXEST104 Electrical and Electronics (CSE/ECE/EEE):** created a separate Module 4 note set and catalogue links; moved communication and instrumentation out of Module 3. Added fiber-optic and GSM block diagrams, AM/FM and wired/wireless concepts, a mobile-generation comparison, DMM/function-generator/CRO notes, and IoT case studies. Expanded Module 3 with CB/CE/CC comparison, load-line biasing, RC-coupled amplifier response, and P-channel MOSFET operation.
- **Deferred:** the Civil/Mechanical GYMAT101 catalogue decision remains for the final review, as requested. The raw audit below preserves the official Group C syllabus entry and baseline absence.

## Module-by-module coverage (baseline)

Coverage status totals: covered 616, misfiled 17, missing 59, no_notes 308, partial 63.

### Group A · MATHEMATICS FOR INFORMATION SCIENCE – 1 (`GAMAT101`) — cse

- Official term label: SEMESTER S1.
- Notes available: yes.
- Notes sources: `src/features/notes/electrical-maths-module-1/notes.md`, `src/features/notes/electrical-maths-module-2/notes.md`, `src/features/notes/electrical-maths-module-3/notes.md`, `src/features/notes/electrical-maths-module-4/notes.md`, `src/features/notes/maths-module-1/notes.md`, `src/features/notes/maths-module-2/notes.md`, `src/features/notes/maths-module-3/notes.md`, `src/features/notes/maths-module-4/notes.md`.
- Confidence: high.

#### Official Module 1

- Limits of Function Values
- Continuity at a point
- Continuous Functions
- Rates of Change: Derivative at a Point
- Derivative as a Function
- Second- and Higher-Order Derivatives
- Instantaneous Rates of Change
- Chain Rule
- Implicit Differentiation
- Tangents and Normal Lines
- Linearization
- Concavity: The Second Derivative Test for Concavity

Coverage findings:

- **covered** — Limits of Function Values. Found in: maths-module-1. Evidence: # Limits of function values (pages 2–7)
- **covered** — Continuity at a point. Found in: maths-module-1. Evidence: ## Definition: f is continuous at x=a if all three hold... (pages 8–9)
- **covered** — Continuous Functions. Found in: maths-module-1. Evidence: ## A continuous function: A function is continuous... if it is continuous at every point of its domain (page 8)
- **covered** — Rates of Change: Derivative at a Point. Found in: maths-module-1. Evidence: # The derivative: f'(a) = \lim_{h\to 0} \frac{f(a+h)-f(a)}{h} (page 10)
- **partial** — Derivative as a Function. Found in: maths-module-1. Evidence: # Rules of differentiation (page 11); # Higher-order derivatives: The derivative of a function is also a function (page 12) Action: Add explicit definition of the derivative as a function f'(x) via the limit definition with variable x and discuss domain/differentiability (Thomas' Calculus Section 3.2).
- **covered** — Second- and Higher-Order Derivatives. Found in: maths-module-1. Evidence: # Higher-order derivatives (page 12)
- **covered** — Instantaneous Rates of Change. Found in: maths-module-1. Evidence: # Instantaneous rate of change (page 13)
- **covered** — Chain Rule. Found in: maths-module-1. Evidence: # The chain rule (page 14)
- **covered** — Implicit Differentiation. Found in: maths-module-1. Evidence: # Implicit differentiation (page 15)
- **covered** — Tangents and Normal Lines. Found in: maths-module-1. Evidence: # Tangent and normal lines (page 16)
- **covered** — Linearization. Found in: maths-module-1. Evidence: # Linearization: L(x)=f(a)+f'(a)(x-a) (page 17)
- **covered** — Concavity: The Second Derivative Test for Concavity. Found in: maths-module-1. Evidence: # Concavity: ## The second derivative test for concavity (page 18)

#### Official Module 2

- Functions of Several Variables: Domains and Ranges
- Level curves of two variables
- Limits for functions of two variables
- Continuity for functions of two variables
- Partial derivatives of a functions of more than two variables
- Partial derivatives and continuity
- Second-Order partial derivatives
- The mixed derivative theorem
- The Chain Rule: Functions of two variables

Coverage findings:

- **covered** — Functions of Several Variables: Domains and Ranges. Found in: maths-module-2. Evidence: # Functions of two variables: ## Domain and range (page 2)
- **covered** — Level curves of two variables. Found in: maths-module-2. Evidence: # Level curves (page 12)
- **covered** — Limits for functions of two variables. Found in: maths-module-2. Evidence: # Limits of functions of two variables (page 3)
- **covered** — Continuity for functions of two variables. Found in: maths-module-2. Evidence: # Continuity (page 4)
- **covered** — Partial derivatives of a functions of more than two variables. Found in: maths-module-2. Evidence: # Partial derivatives (pages 5–6); ## Three or more variables (page 5); Example 4 & 5 (page 7)
- **missing** — Partial derivatives and continuity. Action: Add a section in maths-module-2 explaining the relationship between partial derivatives, differentiability, and continuity (e.g., that existence of partial derivatives does not imply continuity, and when differentiability implies continuity, per Thomas' Calculus Section 14.3).
- **covered** — Second-Order partial derivatives. Found in: maths-module-2. Evidence: # Second-order partial derivatives (page 7)
- **covered** — The mixed derivative theorem. Found in: maths-module-2. Evidence: Mixed partials are equal. If f_{xy} and f_{yx} are continuous, then f_{xy}=f_{yx} (page 7)
- **covered** — The Chain Rule: Functions of two variables. Found in: maths-module-2. Evidence: # Chain rule, part 1: one parameter (page 8); # Chain rule, part 2: two parameters (page 9)

#### Official Module 3

- The Chain Rule: Functions of three Variables
- Directional Derivatives in the Plane
- Interpretation of the Directional Derivative
- Gradient
- Properties of the Directional Derivative
- Local Extreme Values for Functions of Two Variables: Relative extrema
- First derivative theorem for local extreme values
- Critical point
- saddle point
- Second Derivative Test for Local Extreme Values
- Absolute Maxima and Minima on Closed Bounded Regions

Coverage findings:

- **covered** — The Chain Rule: Functions of three Variables. Found in: maths-module-3. Evidence: # The chain rule for three variables (page 2); # The chain rule with several parameters (page 3)
- **covered** — Directional Derivatives in the Plane. Found in: maths-module-3. Evidence: # Directional derivatives: D_{\hat u}f = \nabla f \cdot \hat u (page 12)
- **covered** — Interpretation of the Directional Derivative. Found in: maths-module-3. Evidence: # Directional derivatives: ## The idea; Example 5. A hill (page 12)
- **covered** — Gradient. Found in: maths-module-3. Evidence: # The gradient (page 11)
- **covered** — Properties of the Directional Derivative. Found in: maths-module-3. Evidence: # Steepest ascent and descent: Properties of the gradient (page 13)
- **covered** — Local Extreme Values for Functions of Two Variables: Relative extrema. Found in: maths-module-3. Evidence: # Local maxima and minima (pages 5–8)
- **partial** — First derivative theorem for local extreme values. Found in: maths-module-3. Evidence: At the top of a smooth hill the ground is flat in every direction... Every local extremum is at a critical point (page 5) Action: State the First Derivative Theorem for Local Extreme Values explicitly by name and include the case where a partial derivative fails to exist at an interior extremum.
- **partial** — Critical point. Found in: maths-module-3. Evidence: Critical point. A point (a,b) is a critical point of f(x,y) when f_x(a,b)=0 and f_y(a,b)=0 (page 5) Action: Update the critical point definition to also include interior points where f_x or f_y does not exist (Thomas' Calculus Section 14.7).
- **covered** — saddle point. Found in: maths-module-3. Evidence: Saddle point: A saddle point is a critical point that is a maximum in one direction and a minimum in another... D < 0 (page 5)
- **covered** — Second Derivative Test for Local Extreme Values. Found in: maths-module-3. Evidence: ## The second-derivative test: D=f_{xx}f_{yy}-(f_{xy})^2 (page 5)
- **covered** — Absolute Maxima and Minima on Closed Bounded Regions. Found in: maths-module-3. Evidence: # Absolute maxima and minima (pages 9–10)

#### Official Module 4

- Constrained Maxima and Minima
- The Method of Lagrange Multipliers with one constraint
- The Method of Lagrange Multipliers with two constraints
- Method of Steepest Descent (only two variables)
- LPP-Formation
- Solution of LPP using graphic method

Coverage findings:

- **covered** — Constrained Maxima and Minima. Found in: maths-module-4. Evidence: # Lagrange multipliers (pages 2–4)
- **covered** — The Method of Lagrange Multipliers with one constraint. Found in: maths-module-4. Evidence: # Lagrange multipliers: L(x,y,\lambda)=f(x,y)+\lambda g(x,y) (pages 2–4)
- **covered** — The Method of Lagrange Multipliers with two constraints. Found in: maths-module-4. Evidence: # Lagrange multipliers with two constraints (page 5)
- **covered** — Method of Steepest Descent (only two variables). Found in: maths-module-4. Evidence: # Gradient descent (method of steepest descent) (pages 12–13)
- **covered** — LPP-Formation. Found in: maths-module-4. Evidence: # Linear programming: the terms (page 6); # Formulating an LPP from a word problem (page 7)
- **covered** — Solution of LPP using graphic method. Found in: maths-module-4. Evidence: # The graphical method (pages 8–11)

Module boundary and misplaced-topic findings:

- The Chain Rule: Functions of three Variables: official Module 3, found in Module maths-module-2. Also covered in maths-module-3 (pages 2-3); maths-module-2 (pages 8-9) previews the 3-variable chain rule alongside the 2-variable chain rule.

Syllabus reader findings:

- Four unrelated modules (electrical-maths-module-1 to electrical-maths-module-4 covering Linear Algebra, ODEs, Laplace Transforms, and Fourier Series for Group B/Electrical) are bundled in the supplied notes alongside the Group A calculus notes (maths-module-1 to maths-module-4).
- Editorial 'Note on the source' callouts appear in maths-module-1 (page 6), maths-module-2 (pages 10, 11), maths-module-3 (pages 3, 7, 9, 10, 12), and maths-module-4 (pages 2, 3, 4, 5, 7, 9, 10, 11, 12, 13) referencing errors in the original handwritten student notes.
- In maths-module-4 (pages 12-13), the Method of Steepest Descent is presented using a fixed learning rate alpha rather than Kreyszig's Section 22.1 optimal step size t that minimizes g(t) = f(x - t grad f(x)) along the gradient direction.

Uncertainties:

- Visual contents of external WebP images in maths-module-1 (pages 2, 18) and maths-module-4 (pages 6, 8) are not directly verifiable from text alone, though surrounding text substantively explains the concepts.
- In maths-module-4, Steepest Descent uses fixed learning rates (0.1, 0.01) instead of Kreyszig's Cauchy line-search parameter t; it is uncertain whether KTU exams require the line-search formulation from Text 2 Section 22.1 or accept fixed-step gradient descent.

### Group A · PHYSICS FOR INFORMATION SCIENCE (`GAPHT121`) — cse

- Official term label: SEMESTER 1 / 2.
- Notes available: yes.
- Notes sources: `src/features/notes/physics-module-1/notes.md`, `src/features/notes/physics-module-2/notes.md`, `src/features/notes/physics-module-3/notes.md`, `src/features/notes/physics-module-4/notes.md`.
- Confidence: high.

#### Official Module 1

- Electrical conductivity
- Classical free electron theory
- Electrical conductivity in metals
- Fermi Dirac distribution
- Variation of Fermi function with temperature
- Fermi Energy
- Energy bands
- Classification of materials into conductor, semiconductor and insulator
- Superconductivity
- Transition temperature
- Critical field
- Meissner effect
- Type I and Type II Super conductors
- BCS Theory
- Applications of superconductors

Coverage findings:

- **covered** — Electrical conductivity. Found in: physics-module-1. Evidence: # Ohm's law, resistivity and conductivity ... \sigma=\frac1\rho
- **covered** — Classical free electron theory. Found in: physics-module-1. Evidence: # Classical free electron theory (Drude–Lorentz)
- **covered** — Electrical conductivity in metals. Found in: physics-module-1. Evidence: # Drift velocity and the expression for conductivity ... \sigma=\frac{ne^2\tau}{m}
- **covered** — Fermi Dirac distribution. Found in: physics-module-1. Evidence: # Fermi–Dirac statistics ... f(E)=\frac{1}{1+e^{\,(E-E_F)/kT}}
- **covered** — Variation of Fermi function with temperature. Found in: physics-module-1. Evidence: # Variation of the Fermi function with temperature
- **covered** — Fermi Energy. Found in: physics-module-1. Evidence: # The Fermi energy and Fermi level
- **covered** — Energy bands. Found in: physics-module-1. Evidence: # Band theory: how energy bands form
- **covered** — Classification of materials into conductor, semiconductor and insulator. Found in: physics-module-1. Evidence: # Conductors, semiconductors and insulators
- **covered** — Superconductivity. Found in: physics-module-1. Evidence: # Superconductivity: discovery and transition temperature
- **covered** — Transition temperature. Found in: physics-module-1. Evidence: ## The transition (critical) temperature
- **covered** — Critical field. Found in: physics-module-1. Evidence: # Critical field ... H_c(T)=H_c(0)\left[1-\left(\frac{T}{T_c}\right)^2\right]
- **covered** — Meissner effect. Found in: physics-module-1. Evidence: # The Meissner effect ... \chi=-1
- **covered** — Type I and Type II Super conductors. Found in: physics-module-1. Evidence: # Type I and Type II superconductors
- **covered** — BCS Theory. Found in: physics-module-1. Evidence: # BCS theory of superconductivity
- **covered** — Applications of superconductors. Found in: physics-module-1. Evidence: # Applications of superconductors

#### Official Module 2

- Quantum Mechanics - Introduction
- Concept of uncertainty and conjugate observables (qualitative)
- Uncertainty principle (statement only)
- Application of uncertainty principle - Absence of electron inside nucleus
- Application of uncertainty principle - Natural line broadening
- Wave function - properties
- Wave function - physical interpretation
- Formulation of time dependent Schrodinger equation
- Formulation of time independent Schrodinger equation
- Particle in a one-dimensional box - Derivation of energy eigen values
- Particle in a one-dimensional box - Derivation of normalized wave function
- Quantum Mechanical Tunnelling (Qualitative)

Coverage findings:

- **covered** — Quantum Mechanics - Introduction. Found in: physics-module-2. Evidence: # Module 2 at a glance ... # Matter waves
- **covered** — Concept of uncertainty and conjugate observables (qualitative). Found in: physics-module-2. Evidence: ## From wave packets to uncertainty ... ## Other conjugate pairs
- **covered** — Uncertainty principle (statement only). Found in: physics-module-2. Evidence: # Heisenberg's uncertainty principle ... \Delta x\,\Delta p\ \ge\ \frac{\hbar}{2}
- **covered** — Application of uncertainty principle - Absence of electron inside nucleus. Found in: physics-module-2. Evidence: ## 1. Electrons cannot exist inside the nucleus
- **covered** — Application of uncertainty principle - Natural line broadening. Found in: physics-module-2. Evidence: ## 2. Natural width of spectral lines (natural line broadening)
- **covered** — Wave function - properties. Found in: physics-module-2. Evidence: # Normalisation and well-behaved wave functions ... ## Conditions for a well-behaved wave function
- **covered** — Wave function - physical interpretation. Found in: physics-module-2. Evidence: # The wave function and probability ... ## Physical significance (Born's interpretation)
- **covered** — Formulation of time dependent Schrodinger equation. Found in: physics-module-2. Evidence: # The time-dependent Schrödinger equation
- **covered** — Formulation of time independent Schrodinger equation. Found in: physics-module-2. Evidence: # The time-independent Schrödinger equation
- **covered** — Particle in a one-dimensional box - Derivation of energy eigen values. Found in: physics-module-2. Evidence: # Particle in a box: energy levels and wave functions ... E_n=\frac{n^2h^2}{8mL^2}
- **covered** — Particle in a one-dimensional box - Derivation of normalized wave function. Found in: physics-module-2. Evidence: ## Normalised wave functions ... \psi_n=\sqrt{\frac2L}\,\sin\frac{n\pi x}{L}
- **covered** — Quantum Mechanical Tunnelling (Qualitative). Found in: physics-module-2. Evidence: # Quantum mechanical tunnelling

#### Official Module 3

- Intrinsic semiconductor
- Derivation of density of electrons in conduction band
- Derivation of density of holes in valence band
- Intrinsic carrier concentration
- Variation of Intrinsic carrier concentration with temperature
- Extrinsic semiconductor (qualitative)
- Formation of p-n junction
- Fermi level in semiconductors - intrinsic and extrinsic
- Energy band diagram of p-n junction
- Qualitative description of charge flow across a p-n junction
- Forward and reverse biased p-n junctions
- Diode equation (Derivation)
- I-V Characteristics of p-n junction

Coverage findings:

- **covered** — Intrinsic semiconductor. Found in: physics-module-3. Evidence: # Intrinsic semiconductors and holes
- **covered** — Derivation of density of electrons in conduction band. Found in: physics-module-3. Evidence: # Density of electrons in the conduction band
- **covered** — Derivation of density of holes in valence band. Found in: physics-module-3. Evidence: # Density of holes in the valence band
- **covered** — Intrinsic carrier concentration. Found in: physics-module-3. Evidence: # Intrinsic carrier concentration ... n_i=\sqrt{N_cN_v}\;e^{-E_g/2kT}
- **covered** — Variation of Intrinsic carrier concentration with temperature. Found in: physics-module-3. Evidence: ## How $n_i$ varies ... $n_i\propto T^{3/2}e^{-E_g/2kT}$
- **covered** — Extrinsic semiconductor (qualitative). Found in: physics-module-3. Evidence: # Extrinsic semiconductors
- **covered** — Formation of p-n junction. Found in: physics-module-3. Evidence: # Forming a p-n junction
- **covered** — Fermi level in semiconductors - intrinsic and extrinsic. Found in: physics-module-3. Evidence: # Fermi level in semiconductors
- **covered** — Energy band diagram of p-n junction. Found in: physics-module-3. Evidence: ## Band diagram of the junction
- **covered** — Qualitative description of charge flow across a p-n junction. Found in: physics-module-3. Evidence: ## Diffusion and the depletion region ... ## Drift of minority carriers
- **covered** — Forward and reverse biased p-n junctions. Found in: physics-module-3. Evidence: # Biasing a p-n junction ... ## Forward bias ... ## Reverse bias
- **covered** — Diode equation (Derivation). Found in: physics-module-3. Evidence: # The diode equation ... I=I_s\left(e^{eV/kT}-1\right)
- **covered** — I-V Characteristics of p-n junction. Found in: physics-module-3. Evidence: # V-I characteristics of a p-n junction

#### Official Module 4

- Semiconductor devices - Rectifiers - Half wave
- Semiconductor devices - Rectifiers - Full wave
- Zener diode - VI characteristics
- Tunnel diode - VI characteristics
- Semiconductor Laser (Construction and working)
- Semiconductor Laser - Applications
- Photonic devices (Qualitative treatment only) - Photo detectors (Junction photodiode)
- Photonic devices (Qualitative treatment only) - Photo detectors (PIN photodiode)
- Solar cells - IV Characteristics
- Solar cells - Efficiency
- Stringing of Solar cells to solar panel
- Light Emitting Diode
- Light Emitting Diode - Applications

Coverage findings:

- **covered** — Semiconductor devices - Rectifiers - Half wave. Found in: physics-module-4. Evidence: # The half-wave rectifier
- **covered** — Semiconductor devices - Rectifiers - Full wave. Found in: physics-module-4. Evidence: # The full-wave rectifier with a centre-tapped transformer ... # The bridge rectifier
- **covered** — Zener diode - VI characteristics. Found in: physics-module-4. Evidence: # The Zener diode and the voltage regulator ... ## V-I characteristic
- **covered** — Tunnel diode - VI characteristics. Found in: physics-module-4. Evidence: # The tunnel diode ... ## Working, point by point on the V-I curve
- **covered** — Semiconductor Laser (Construction and working). Found in: physics-module-4. Evidence: # The semiconductor laser ... ## Construction (GaAs homojunction laser) ... ## Working
- **covered** — Semiconductor Laser - Applications. Found in: physics-module-4. Evidence: # The semiconductor laser ... ## Applications
- **covered** — Photonic devices (Qualitative treatment only) - Photo detectors (Junction photodiode). Found in: physics-module-4. Evidence: # Photodetectors: p-n and PIN photodiodes ... ## The p-n junction photodiode
- **covered** — Photonic devices (Qualitative treatment only) - Photo detectors (PIN photodiode). Found in: physics-module-4. Evidence: # Photodetectors: p-n and PIN photodiodes ... ## The PIN photodiode
- **covered** — Solar cells - IV Characteristics. Found in: physics-module-4. Evidence: # Solar cells ... ## I-V characteristic
- **covered** — Solar cells - Efficiency. Found in: physics-module-4. Evidence: # Solar cells ... ## Efficiency ... ## Fill factor
- **covered** — Stringing of Solar cells to solar panel. Found in: physics-module-4. Evidence: ## Stringing cells into modules, panels and arrays
- **covered** — Light Emitting Diode. Found in: physics-module-4. Evidence: # The light-emitting diode (LED)
- **covered** — Light Emitting Diode - Applications. Found in: physics-module-4. Evidence: # The light-emitting diode (LED) ... ## Advantages and applications

Syllabus reader findings:

- Several editorial callout boxes labeled 'Note on the source' appear throughout all four modules (e.g., Module 1 pages 5, 7, 9, 12, 14, 15, 23, 25; Module 2 pages 3, 8, 9, 12, 15; Module 3 pages 3, 5, 12, 16; Module 4 pages 3, 7, 14) referencing errors in underlying lecture sets or problem sheets that are not visible to the student reader.
- External image URLs point to a path containing '/notes/cse/s1/physics/...' although the official syllabus labels the course as SEMESTER 1 / 2.

Uncertainties:

- Visual contents of external .webp diagram URLs cannot be directly inspected; however, every topic accompanied by an image is also substantively explained in the surrounding Markdown text.

### Group A · ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING (`GMEST103`) — cse

- Official term label: SEMESTER S1.
- Notes available: yes.
- Notes sources: `src/features/notes/graphics-m1/notes.md`, `src/features/notes/graphics-m2/notes.md`, `src/features/notes/graphics-m3/notes.md`, `src/features/notes/graphics-m4/notes.md`.
- Confidence: high.

#### Official Module Module 1

- Introduction: Relevance of technical drawing in engineering field
- Types of lines
- Dimensioning
- BIS code of practice for technical drawing
- Projection of points in different quadrants
- Projection of straight lines inclined to one plane and inclined to both planes
- Trace of a line
- Inclination of lines with reference planes
- True length and true inclinations of line inclined to both the reference planes

Coverage findings:

- **partial** — Introduction: Relevance of technical drawing in engineering field. Found in: graphics-m1. Evidence: Page 1 briefly states: 'Engineering drawing is how engineers describe a solid object on flat paper.' Action: Expand slightly on the relevance of technical drawing in the engineering field for internal/foundational completeness.
- **covered** — Types of lines. Found in: graphics-m1. Evidence: Page 2 ('Drawing basics: lines and dimensions') covers continuous thick, continuous thin, dashed, and chain thin lines and their uses.
- **covered** — Dimensioning. Found in: graphics-m1. Evidence: Page 2 explains dimension lines, extension lines, placement of numbers, and unit conventions.
- **partial** — BIS code of practice for technical drawing. Found in: graphics-m1. Evidence: Page 2 mentions 'The BIS code of practice for technical drawing is not asked in the end-semester examination' and summarizes basic line/dimension conventions, without detailing specific BIS standards/codes. Action: Add explicit BIS standard references (e.g., SP 46) and conventions if needed for internal evaluation.
- **covered** — Projection of points in different quadrants. Found in: graphics-m1. Evidence: Page 3 ('Planes, quadrants and points') explains HP, VP, the four quadrants, and works an example projecting four points in Quadrants I, II, III, and IV.
- **covered** — Projection of straight lines inclined to one plane and inclined to both planes. Found in: graphics-m1. Evidence: Page 4 table covers positions of a line (parallel, perpendicular, inclined to one plane, inclined to both planes); Pages 7-13 provide extensive theory and worked problems for lines inclined to both planes across quadrants.
- **covered** — Trace of a line. Found in: graphics-m1. Evidence: Page 5 ('Traces of a line') defines HT and VT and how to find them; Pages 7-9 and 11-12 solve numerous trace problems.
- **covered** — Inclination of lines with reference planes. Found in: graphics-m1. Evidence: Page 4 defines true angles (theta, phi) and apparent angles (alpha, beta) with reference planes, reinforced across Pages 7-13.
- **covered** — True length and true inclinations of line inclined to both the reference planes. Found in: graphics-m1. Evidence: Pages 4, 7, 8, 9, 10, 11, 12, and 13 thoroughly explain and solve for true length and true inclinations using line rotation, plane rotation (trapezoidal), and profile plane methods.

#### Official Module Module 2

- Projection of Simple solids such as Triangular, Rectangle, Square, Pentagonal and Hexagonal Prisms, Pyramids, Cone and Cylinder only
- Projection of solids in simple position including profile view
- Projection of solids with axis inclined to one of the reference planes
- Projection of solids with axis inclined to both reference planes

Coverage findings:

- **partial** — Projection of Simple solids such as Triangular, Rectangle, Square, Pentagonal and Hexagonal Prisms, Pyramids, Cone and Cylinder only. Found in: graphics-m2. Evidence: Pages 2, 7, 8, 9, 10, 11, and 12 cover triangular, square, pentagonal, and hexagonal prisms and pyramids, cones, cylinders, and cubes. However, no explicit problems or examples for rectangular prisms or rectangular pyramids are included. Action: Add examples/problems for rectangular prism and/or rectangular pyramid.
- **partial** — Projection of solids in simple position including profile view. Found in: graphics-m2. Evidence: Page 2 explains setting up solids in simple position (Stage 1 of all problems). Pages 5, 8 (Problem 73), and 10 (Problems 57, 84) cover solids whose axes/edges lie in a Profile Plane, but constructing a separate third/profile view (side view on an X1Y1 line) of a solid in simple position is not explicitly demonstrated in Module 2 (it appears only in Module 3 page 9 for sections). Action: Add explicit explanation and example of drawing the profile view (side view) of a solid in simple position in Module 2.
- **covered** — Projection of solids with axis inclined to one of the reference planes. Found in: graphics-m2. Evidence: Pages 3, 4, and 6 explain and work examples of two-stage projections where the solid is tilted to one reference plane (HP or VP), and Stage 2 of all multi-stage problems on Pages 7-12 covers this.
- **covered** — Projection of solids with axis inclined to both reference planes. Found in: graphics-m2. Evidence: Pages 3, 5, and 7-12 thoroughly cover three-stage projections of solids inclined to both HP and VP using both direct rotation and the locus (apparent angle) method.

#### Official Module Module 3

- Sections of Solids: Sections of Prisms, Pyramids, Cone and Cylinder only, with axis in vertical position and cut by different section planes
- True shape of the sections (Exclude true shape given problems)
- Development of Surfaces: Development of surfaces of the solids and solids cut by different section planes (Exclude problems with through holes)

Coverage findings:

- **covered** — Sections of Solids: Sections of Prisms, Pyramids, Cone and Cylinder only, with axis in vertical position and cut by different section planes. Found in: graphics-m3. Evidence: Pages 2-4 and 7-9 cover sections of vertical prisms, pyramids, cylinders, and cones cut by horizontal, auxiliary inclined (AIP), auxiliary vertical (AVP), and profile planes.
- **covered** — True shape of the sections (Exclude true shape given problems). Found in: graphics-m3. Evidence: Page 3 explains projecting true shapes onto an auxiliary reference line x1y1, and Pages 7-9 work numerous examples for prisms, pyramids, cylinders, and cones. (Note: Page 4 and Page 10 also include reverse 'true shape given' problems, which the syllabus explicitly excludes). Action: Remove or clearly mark Page 10 ('Reverse Section Problems: Finding the Cutting Plane from a Given True Shape') and the reverse sectioning portion of Page 4 as out-of-syllabus per 'Exclude true shape given problems'.
- **covered** — Development of Surfaces: Development of surfaces of the solids and solids cut by different section planes (Exclude problems with through holes). Found in: graphics-m3. Evidence: Pages 5, 6, 11, and 12 cover parallel-line and radial-line development of intact and truncated prisms, cylinders, pyramids, and cones.

#### Official Module Module 4

- Isometric Projection: Isometric scale
- Isometric View and Projections of Prisms, Pyramids, Cone, Cylinder, Sphere, Hemisphere and their combinations
- Computer Aided Drawing (CAD): Introduction, Role of CAD in design and development of new products, Advantages of CAD
- Creating two-dimensional drawing with dimensions using suitable software

Coverage findings:

- **covered** — Isometric Projection: Isometric scale. Found in: graphics-m4. Evidence: Page 2 ('Isometric Axes, Planes, and the Isometric Scale') explains foreshortening (0.8165), the difference between isometric view and isometric projection, and step-by-step construction of an isometric scale.
- **covered** — Isometric View and Projections of Prisms, Pyramids, Cone, Cylinder, Sphere, Hemisphere and their combinations. Found in: graphics-m4. Evidence: Pages 3-9 cover the box method, four-center ellipse method, sphere rule, and worked problems for prisms, pyramids, frustums, cylinders, cones, spheres, hemispheres, and their coaxial combinations.
- **missing** — Computer Aided Drawing (CAD): Introduction, Role of CAD in design and development of new products, Advantages of CAD. Evidence: Not present in graphics-m4 or any other module. Action: Add notes covering Introduction to CAD, Role of CAD in design and development of new products, and Advantages of CAD (noting it is for internal evaluation).
- **missing** — Creating two-dimensional drawing with dimensions using suitable software. Evidence: Not present in graphics-m4 or any other module. Action: Add a guide/notes on creating 2D drawings with dimensions using CAD software for internal evaluation.

Syllabus reader findings:

- In graphics-m1 (Page 13, Problems Q43, 49, Q202, Q41, Q42), LaTeX commands in the markdown have corrupted control characters (missing backslashes before \theta, \phi, \text, \times, resulting in strings like 'heta', 'ext{o}', 'ext{phi}', 'imes').
- In graphics-m1 (Page 7, Problem 2; Page 12, Problem 38), the notes explicitly point out that printed values on the source figures disagree with the mathematical coordinates/givens.
- In graphics-m2 (Page 8, Problem 69 & Problem 219; Page 9, Problem 62; Page 10, Problem 84), the notes flag discrepancies between the stated problem text/angles and the worked solution drawings (e.g., rotating by 45 degrees instead of 90 degrees in Problem 84.4/84.5).
- In graphics-m2 (Page 11), the Greek letter phi is corrupted as 'Ά' in 'inclination to VP (Ά)'.
- In graphics-m3 (Page 4 and Page 10), an entire lesson and problem set on 'Reverse Section Problems: Finding the Cutting Plane from a Given True Shape' (plus tetrahedron sections in Problems 110 and 111) is included, despite the official syllabus stating 'Sections of Prisms, Pyramids, Cone and Cylinder only... (Exclude true shape given problems)'.
- In graphics-m3 (Page 7, Problems 86 & 91; Page 10, Problems 109 & 123; Page 11, Problems 133 & 134), the notes warn that the worked drawings use different dimensions or angles than stated in the problem text (e.g., Problem 123 has a geometrically impossible 57 mm / 60 mm height for a cone of 50 mm base and 50 mm generator).
- In graphics-m4 (Page 7, Problem 160), a hexagonal prism with a cylindrical through-hole is included, and on Page 8 (Problem 171, step 3) there is a self-correcting typo in the text: 'equals R_{1,iso} + 2R_{1,iso}... or step up from O_1 by R_{1,iso} + R_{2,iso}'.
- In graphics-m4 (Page 9, Problems 165 & 199), the notes flag mismatches between problem text dimensions and drawing dimensions, and several image alt-texts misidentify a hexagonal pyramid frustum as a 'hexagonal prism' (Problems 167, 199).

### Group A · CHEMISTRY FOR INFORMATION SCIENCE AND ELECTRICAL SCIENCE (`GXCYT122`) — cse

- Official term label: SEMESTER S1/S2.
- Notes available: yes.
- Notes sources: `src/features/notes/chemistry-ece-module-1/notes.md`, `src/features/notes/chemistry-ece-module-2/notes.md`, `src/features/notes/chemistry-ece-module-3/notes.md`, `src/features/notes/chemistry-ece-module-4/notes.md`, `src/features/notes/chemistry-module-1/notes.md`, `src/features/notes/chemistry-module-2/notes.md`, `src/features/notes/chemistry-module-3/notes.md`, `src/features/notes/chemistry-module-4/notes.md`.
- Confidence: high.

#### Official Module Module 1: Electrochemistry and Corrosion Science (9 Hours)

- Electrochemical Cell
- Electrode potential
- Nernst equation for single electrode and cell (Numerical problems)
- Reference electrodes - SHE & Calomel electrode - Construction and Working
- Electrochemical series - Applications
- Glass Electrode & pH Measurement
- Conductivity - Measurement using Digital conductivity meter
- Li-ion battery construction and working
- H2-O2 fuel cell (acid electrolyte only) construction and working
- Corrosion - Electrochemical corrosion mechanism (acidic & alkaline medium)
- Galvanic series
- Corrosion control methods - Cathodic Protection - Sacrificial anodic protection and impressed current cathodic protection
- Electroplating of copper
- Electroless plating of copper

Coverage findings:

- **covered** — Electrochemical Cell. Found in: chemistry-module-1 (page 1) and chemistry-ece-module-1 (page 2). Evidence: Explains galvanic vs electrolytic cells, Daniell cell construction, half-reactions, cell notation, and salt bridge functions.
- **covered** — Electrode potential. Found in: chemistry-module-1 (page 2) and chemistry-ece-module-1 (pages 2-3). Evidence: Covers origin of single electrode potential, Helmholtz electrical double layer, standard electrode potential, and IUPAC reduction convention.
- **covered** — Nernst equation for single electrode and cell (Numerical problems). Found in: chemistry-module-1 (pages 3-4) and chemistry-ece-module-1 (page 4). Evidence: Derives Nernst equation from van 't Hoff isotherm for single electrodes and complete cells; chemistry-module-1 provides 15 worked numerical problems and chemistry-ece-module-1 provides 7. Action: In chemistry-ece-module-1 (page 4), add complete cell EMF numerical problems with non-unit ion concentrations (currently only single-electrode, ΔG, and K problems are solved there, though chemistry-module-1 covers all types).
- **covered** — Reference electrodes - SHE & Calomel electrode - Construction and Working. Found in: chemistry-module-1 (pages 5-6) and chemistry-ece-module-1 (page 5). Evidence: Details primary (SHE) and secondary (Calomel/SCE) reference electrodes, including construction, cell representations, anode/cathode half-reactions, Nernst equations, and limitations.
- **covered** — Electrochemical series - Applications. Found in: chemistry-module-1 (page 2) and chemistry-ece-module-1 (page 3). Evidence: Defines the electrochemical series and explains applications: standard cell EMF calculation, relative ease of oxidation/reduction, metal and hydrogen displacement, redox spontaneity, and electrolysis product prediction.
- **covered** — Glass Electrode & pH Measurement. Found in: chemistry-module-1 (page 7) and chemistry-ece-module-1 (page 5). Evidence: Explains glass bulb composition, internal reference, ion-exchange membrane potential, coupling with SCE for potentiometric pH measurement, calibration, advantages, and limitations.
- **covered** — Conductivity - Measurement using Digital conductivity meter. Found in: chemistry-module-1 (page 10) and chemistry-ece-module-1 (pages 5-6). Evidence: Defines conductance, specific conductivity, cell constant, calibration with 0.1 M KCl, measurement procedure with a digital conductivity meter, and worked numericals.
- **covered** — Li-ion battery construction and working. Found in: chemistry-module-1 (page 8) and chemistry-ece-module-1 (page 7). Evidence: Covers lithiated graphite anode, LiCoO2 cathode, organic carbonate electrolyte, separator, and intercalation/de-intercalation reactions during charging and discharging.
- **covered** — H2-O2 fuel cell (acid electrolyte only) construction and working. Found in: chemistry-module-1 (page 9); alkaline variant in chemistry-ece-module-1 (page 7). Evidence: chemistry-module-1 (page 9) covers the phosphoric acid (H3PO4) H2-O2 fuel cell with proton-transfer reactions. However, chemistry-ece-module-1 (page 7) only describes the alkaline (25% KOH/NaOH) H2-O2 fuel cell. Action: Replace the alkaline (KOH/NaOH) H2-O2 fuel cell in chemistry-ece-module-1 (page 7) with the acid-electrolyte H2-O2 fuel cell required by the syllabus (as already present in chemistry-module-1 page 9).
- **covered** — Corrosion - Electrochemical corrosion mechanism (acidic & alkaline medium). Found in: chemistry-module-1 (pages 11-12) and chemistry-ece-module-1 (page 8). Evidence: Explains dry vs wet corrosion, hydrogen evolution mechanism in acidic and alkaline media, oxygen absorption mechanism in acidic and neutral/alkaline media, rusting of iron, and differential aeration.
- **covered** — Galvanic series. Found in: chemistry-module-1 (page 13) and chemistry-ece-module-1 (page 8). Evidence: Defines the galvanic series in seawater, role of passivity, comparison table against the electrochemical series, and galvanic corrosion prediction.
- **covered** — Corrosion control methods - Cathodic Protection - Sacrificial anodic protection and impressed current cathodic protection. Found in: chemistry-module-1 (page 14) and chemistry-ece-module-1 (pages 8-9). Evidence: Details sacrificial anode protection (Mg, Zn, Al) and impressed current cathodic protection (ICCP) with DC source and insoluble anode, including mechanisms, pros/cons, and applications.
- **covered** — Electroplating of copper. Found in: chemistry-module-1 (page 15) and chemistry-ece-module-1 (page 9). Evidence: Covers surface pretreatment, CuSO4 bath setup, cathode/anode reactions, soluble vs inert anodes, and applications.
- **covered** — Electroless plating of copper. Found in: chemistry-module-1 (page 16) and chemistry-ece-module-1 (page 9). Evidence: Covers autocatalytic deposition principle, SnCl2/PdCl2 activation, alkaline CuSO4-HCHO-EDTA bath composition, half-reactions, overall reaction, and PCB through-hole applications. Action: Fix the typo in chemistry-ece-module-1 (page 9) where the 'Overall reaction' under Electroless Plating of Copper is erroneously written for Nickel hypophosphite (Ni2+ + H2PO2- + H2O -> Ni + H2PO3- + 2H+) instead of Copper formaldehyde.

#### Official Module Module 2: Materials for Electronic Applications (9 Hrs)

- Nanomaterials - Classification based on Dimension & Materials
- Nanomaterials - Synthesis - Sol gel & Chemical Reduction
- Applications of nanomaterials
- Carbon Nanotubes - structure, properties & application
- Fullerenes - structure, properties & application
- Graphene - structure, properties & application
- Carbon Quantum Dots - structure, properties & application
- Polymers - Fire Retardant Polymers - Halogenated & Non-halogenated polymers (Examples only)
- Conducting Polymers - Classification
- Polyaniline & Polypyrrole - synthesis, properties and applications
- Organic electronic materials and devices - construction, working and applications of Organic Light Emitting Diode (OLED)
- Organic electronic materials and devices - construction, working and applications of Dye-Sensitized Solar Cells (DSSC)
- Materials used in Quantum computing Technology
- Super capacitors
- Spintronics

Coverage findings:

- **covered** — Nanomaterials - Classification based on Dimension & Materials. Found in: chemistry-module-2 (page 1) and chemistry-ece-module-2 (page 2). Evidence: Classifies nanomaterials into 0D, 1D, 2D, and 3D and by material composition (carbon-based, metal/oxide/semiconductor, nanocomposites, dendrimers, biological).
- **covered** — Nanomaterials - Synthesis - Sol gel & Chemical Reduction. Found in: chemistry-module-2 (page 2) and chemistry-ece-module-2 (page 2). Evidence: Explains top-down vs bottom-up approaches, chemical reduction (AgNO3 with trisodium citrate, MoCl2 reduction), and alkoxide hydrolysis/sol-gel synthesis (SiO2, TiO2, Al2O3, xerogel vs aerogel).
- **covered** — Applications of nanomaterials. Found in: chemistry-module-2 (page 6) and chemistry-ece-module-2 (page 2). Evidence: chemistry-module-2 (page 6) substantively covers applications in catalysis, gas sensors, electronics/optoelectronics, coatings/tyres, environmental remediation, and biomedicine; chemistry-ece-module-2 (page 2) gives a brief summary.
- **covered** — Carbon Nanotubes - structure, properties & application. Found in: chemistry-module-2 (page 5) and chemistry-ece-module-2 (page 3). Evidence: Covers SWCNT (armchair, zigzag, chiral) and MWCNT (Russian doll, parchment, mixed) structures, chirality rules, electrical/thermal/mechanical properties, and applications.
- **covered** — Fullerenes - structure, properties & application. Found in: chemistry-module-2 (page 4) and chemistry-ece-module-2 (pages 3-4). Evidence: Covers truncated icosahedral C60 cage structure (12 pentagons, 20 hexagons, [6,6] and [5,6] bonds), synthesis, physical/chemical/electrical properties, and applications.
- **covered** — Graphene - structure, properties & application. Found in: chemistry-module-2 (page 3) and chemistry-ece-module-2 (page 4). Evidence: Covers 2D sp2 honeycomb lattice, Dirac points, synthesis routes, mechanical/electrical/thermal/optical properties, and applications.
- **covered** — Carbon Quantum Dots - structure, properties & application. Found in: chemistry-module-2 (page 6) and chemistry-ece-module-2 (page 4). Evidence: Explains <10 nm quasi-spherical carbon structure, surface functional groups, top-down/bottom-up synthesis, optical/luminescence and biocompatibility properties, and applications. Action: In chemistry-ece-module-2 (page 4), expand the Applications of CQDs beyond the single biomedical bullet to match the broader applications in sensing, catalysis, and optoelectronics.
- **covered** — Polymers - Fire Retardant Polymers - Halogenated & Non-halogenated polymers (Examples only). Found in: chemistry-module-2 (page 7) and chemistry-ece-module-2 (page 5). Evidence: Covers polymer basics, non-halogenated fire-retardant polymers (novolac, bakelite, polyimides, polybenzoxazoles, silicones), and halogenated examples (PVC, neoprene, polybromostyrene, brominated butyl rubber, PBDE/PCDE) with radical-quenching mechanisms.
- **covered** — Conducting Polymers - Classification. Found in: chemistry-module-2 (page 8) and chemistry-ece-module-2 (page 5). Evidence: Classifies conducting polymers into Intrinsically Conducting Polymers (conjugated pi-backbone and p-/n-/protonic-doped) and Extrinsically Conducting Polymers (conductive-element-filled and blended).
- **covered** — Polyaniline & Polypyrrole - synthesis, properties and applications. Found in: chemistry-module-2 (page 9) and chemistry-ece-module-2 (page 6). Evidence: Covers chemical and electrochemical oxidative polymerization, oxidation/protonation states (emeraldine salt/base), properties, and applications for both Polyaniline and Polypyrrole.
- **covered** — Organic electronic materials and devices - construction, working and applications of Organic Light Emitting Diode (OLED). Found in: chemistry-module-2 (page 10) and chemistry-ece-module-2 (page 6). Evidence: Details the multilayer OLED stack (substrate, ITO anode, HTL, EML/ETL, metal cathode), charge injection, exciton formation, LUMO-to-HOMO radiative recombination, pros/cons, and display applications.
- **covered** — Organic electronic materials and devices - construction, working and applications of Dye-Sensitized Solar Cells (DSSC). Found in: chemistry-module-2 (page 11) and chemistry-ece-module-2 (pages 6-7). Evidence: Details DSSC components (TCO substrate, mesoporous TiO2, ruthenium/organic dye photosensitizer, I-/I3- electrolyte, Pt/graphite counter electrode), four-step photoelectrochemical charge cycle, advantages, and applications.
- **covered** — Materials used in Quantum computing Technology. Found in: chemistry-module-2 (page 13) and chemistry-ece-module-2 (page 7). Evidence: Explains qubits, superposition, entanglement, interference, decoherence, and qubit materials including superconducting metals (Al, Nb, TiN), h-BN, diamond NV centers, isotopically purified 28Si, nanowires, and InAs/GaAs quantum dots.
- **covered** — Super capacitors. Found in: chemistry-module-2 (page 12) and chemistry-ece-module-2 (page 7). Evidence: Explains EDLC/pseudocapacitor mechanisms, components (porous carbon/nanomaterial electrodes, electrolytes, separator, current collectors, PVDF/PAN binders), energy equations, battery vs capacitor comparison, pros/cons, and applications.
- **covered** — Spintronics. Found in: chemistry-module-2 (page 14) and chemistry-ece-module-2 (page 7). Evidence: Explains electron spin polarization, Giant Magnetoresistance (GMR), Tunnel Magnetoresistance (TMR), metal/insulator stacks (CoFeB, MgO, Al2O3), diluted magnetic semiconductors (InAs/GaAs with Mn), graphene spin channels, and MRAM/HDD applications.

#### Official Module Module 3: Molecular Spectroscopy and Analytical Techniques (9 Hours)

- Spectroscopy - Types of spectra
- Molecular energy levels
- Beer Lambert's law - Numerical problems
- Electronic Spectroscopy - Principle, Types of electronic transitions
- Role of conjugation in absorption maxima
- Electronic Spectroscopy - Instrumentation and Applications
- Vibrational spectroscopy - Principle
- Number of vibrational modes - Vibrational modes of CO2 and H2O
- Vibrational spectroscopy - Applications
- Thermal Analysis: Dielectric Thermal Analysis (DETA) of Polymers - Working and Application
- Electron Microscopic Techniques: SEM - Principle, instrumentation and Applications

Coverage findings:

- **covered** — Spectroscopy - Types of spectra. Found in: chemistry-module-3 (page 1) and chemistry-ece-module-3 (page 2). Evidence: Covers electromagnetic radiation, absorption vs emission vs scattering processes, and atomic (line) vs molecular (band) spectra.
- **covered** — Molecular energy levels. Found in: chemistry-module-3 (page 1) and chemistry-ece-module-3 (page 2). Evidence: Explains electronic, vibrational, rotational, and translational energy levels, the Born-Oppenheimer approximation, and the hierarchy ΔE_ele > ΔE_vib > ΔE_rot >> ΔE_trans.
- **covered** — Beer Lambert's law - Numerical problems. Found in: chemistry-module-3 (pages 2-3, 13) and chemistry-ece-module-3 (pages 2-3). Evidence: Derives A = εcl from differential attenuation, discusses transmittance, absorbance, units of ε, deviations, and provides multiple solved numerical problems in both note sets.
- **covered** — Electronic Spectroscopy - Principle, Types of electronic transitions. Found in: chemistry-module-3 (page 4) and chemistry-ece-module-3 (pages 3-4). Evidence: Explains UV-Vis absorption principle, σ→σ*, n→σ*, π→π*, and n→π* transitions, relative energy ordering, chromophores, auxochromes, and spectral shifts.
- **covered** — Role of conjugation in absorption maxima. Found in: chemistry-module-3 (page 5) and chemistry-ece-module-3 (page 4). Evidence: Explains how extended π-conjugation narrows the HOMO-LUMO gap and causes bathochromic shifts in λ_max across ethene (169 nm), 1,3-butadiene (217 nm), 1,3,5-hexatriene (247-250 nm), and lycopene (505 nm).
- **covered** — Electronic Spectroscopy - Instrumentation and Applications. Found in: chemistry-module-3 (page 6) and chemistry-ece-module-3 (page 4). Evidence: Details double-beam UV-Vis spectrophotometer components (radiation sources, monochromator, beam splitter, quartz cuvettes, detectors), optical path, reference blank, and analytical applications.
- **covered** — Vibrational spectroscopy - Principle. Found in: chemistry-module-3 (pages 7, 9) and chemistry-ece-module-3 (pages 4-5). Evidence: Explains quantized vibrational transitions, dipole-moment change selection rule (∂μ/∂Q ≠ 0), stretching (symmetric, asymmetric) and bending (scissoring, rocking, wagging, twisting) vibrations, and Hooke's law / harmonic oscillator force constant calculations.
- **covered** — Number of vibrational modes - Vibrational modes of CO2 and H2O. Found in: chemistry-module-3 (page 8) and chemistry-ece-module-3 (page 5). Evidence: Derives 3N-5 (linear) and 3N-6 (non-linear) mode formulas, and analyzes the 4 modes of CO2 (symmetric stretch inactive, asymmetric stretch active, 2 degenerate bends active) and 3 active modes of bent H2O.
- **covered** — Vibrational spectroscopy - Applications. Found in: chemistry-module-3 (pages 9-10) and chemistry-ece-module-3 (page 5). Evidence: Covers functional group and fingerprint region identification, force constant determination, purity testing, reaction kinetics, and distinguishing intra- vs intermolecular hydrogen bonding.
- **covered** — Thermal Analysis: Dielectric Thermal Analysis (DETA) of Polymers - Working and Application. Found in: chemistry-module-3 (page 11) and chemistry-ece-module-3 (page 7). Evidence: Covers dipolar relaxation and ionic migration under an AC field, storage permittivity (ε'), dielectric loss (ε''), loss tangent (tan δ), DETA furnace/electrode instrumentation, working, and applications in polymer Tg and curing.
- **covered** — Electron Microscopic Techniques: SEM - Principle, instrumentation and Applications. Found in: chemistry-module-3 (page 12) and chemistry-ece-module-3 (pages 5-6). Evidence: Explains electron-sample interactions (SE, BSE, characteristic X-rays), SEM column components (electron gun, anode, condenser/objective lenses, scan coils, vacuum chamber, detectors), working, conductive sample coating, and applications.

#### Official Module Module 4: Environmental Chemistry (9Hrs)

- Water characteristics - Hardness - Types of hardness - Temporary and Permanent
- Disadvantages of hard water
- Degree of hardness (Numericals)
- Water softening methods - Ion exchange process - Principle, procedure and advantages
- Reverse osmosis - principle, process and advantages
- Water disinfection methods - chlorination - Break point chlorination, ozone and UV irradiation
- Dissolved oxygen (DO), BOD and COD - Definition & Significance
- Waste Management: Sewage water treatment - Primary, Secondary and Tertiary - Flow diagram
- Trickling filter and UASB process
- E Waste, Methods of disposal - recycle, recovery and reuse
- Chemistry of climate change - Greenhouse Gases
- Ozone Depletion
- Sustainable Development - an introduction to Sustainable Development Goals

Coverage findings:

- **covered** — Water characteristics - Hardness - Types of hardness - Temporary and Permanent. Found in: chemistry-module-4 (page 1) and chemistry-ece-module-4 (page 2). Evidence: Defines hard and soft water, soap scum precipitation reactions with sodium stearate, temporary (carbonate/bicarbonate) hardness and its thermal removal, and permanent (non-carbonate) hardness.
- **covered** — Disadvantages of hard water. Found in: chemistry-module-4 (page 1) and chemistry-ece-module-4 (page 2). Evidence: Explains domestic soap wastage and industrial disadvantages including boiler scale and sludge formation, priming and foaming, boiler corrosion (MgCl2 hydrolysis), and dyeing/sugar processing issues.
- **covered** — Degree of hardness (Numericals). Found in: chemistry-module-4 (pages 2-3) and chemistry-ece-module-4 (page 3). Evidence: Explains CaCO3 equivalence, equivalent masses, hardness units (mg/L, ppm, meq/L, °Fr, °Cl), alkalinity vs hardness partitioning, and provides 11 worked numerical examples in chemistry-module-4 and 4 in chemistry-ece-module-4.
- **covered** — Water softening methods - Ion exchange process - Principle, procedure and advantages. Found in: chemistry-module-4 (page 4) and chemistry-ece-module-4 (pages 3-4). Evidence: Covers cation (RH) and anion (R'OH) exchange resins, two-column demineralization reactions, column sequencing rationale, acid/alkali regeneration equations, advantages, and limitations.
- **covered** — Reverse osmosis - principle, process and advantages. Found in: chemistry-module-4 (page 5) and chemistry-ece-module-4 (page 4). Evidence: Explains natural osmosis vs reverse osmosis (ΔP > Δπ), semipermeable membranes (cellulose acetate, aromatic polyamide), desalination process steps, advantages, and comparison with ion exchange.
- **covered** — Water disinfection methods - chlorination - Break point chlorination, ozone and UV irradiation. Found in: chemistry-module-4 (pages 6-7) and chemistry-ece-module-4 (pages 4-5). Evidence: Details chlorination (Cl2, chloramine, bleaching powder/hypochlorites, HOCl/OCl- pH dependence), the four stages of the breakpoint chlorination curve, dechlorination, ozonation, and UV-C irradiation.
- **covered** — Dissolved oxygen (DO), BOD and COD - Definition & Significance. Found in: chemistry-module-4 (page 8) and chemistry-ece-module-4 (page 6). Evidence: Defines DO, BOD5 (5 days at 20 °C in dark, with worked dilution example in chemistry-module-4), and COD (acidified K2Cr2O7 reflux), along with factors affecting DO and environmental significance.
- **covered** — Waste Management: Sewage water treatment - Primary, Secondary and Tertiary - Flow diagram. Found in: chemistry-module-4 (page 9) and chemistry-ece-module-4 (page 7). Evidence: Provides process flow diagrams and explains preliminary/primary (screening, grit removal, sedimentation), secondary biological (activated sludge, trickling filter, UASB), and tertiary (phosphate precipitation with lime, nitrogen stripping/denitrification, chlorination) stages.
- **covered** — Trickling filter and UASB process. Found in: chemistry-module-4 (page 10) and chemistry-ece-module-4 (page 7). Evidence: Details aerobic attached-growth trickling filter construction/working and anaerobic Upflow Anaerobic Sludge Blanket (UASB) reactor construction/working, biogas collection, and comparison.
- **covered** — E Waste, Methods of disposal - recycle, recovery and reuse. Found in: chemistry-module-4 (page 11); absent in chemistry-ece-module-4. Evidence: chemistry-module-4 (page 11) thoroughly covers e-waste composition, toxic hazards (Pb, Cd, Hg, Be), and the 4R hierarchy (Reduce, Reuse, Recycle, Recover). However, this topic is completely missing from chemistry-ece-module-4. Action: Add E-waste and methods of disposal (recycle, recovery, and reuse) to chemistry-ece-module-4 (or unify notes onto chemistry-module-4).
- **covered** — Chemistry of climate change - Greenhouse Gases. Found in: chemistry-module-4 (page 12); absent in chemistry-ece-module-4. Evidence: chemistry-module-4 (page 12) covers the greenhouse effect mechanism, IR-active vibrational modes of GHGs (CO2, H2O, CH4, N2O, CFCs), natural vs enhanced greenhouse effect, anthropogenic sources, and mitigation/adaptation. Missing from chemistry-ece-module-4. Action: Add Chemistry of climate change and Greenhouse Gases to chemistry-ece-module-4 (or unify notes onto chemistry-module-4).
- **covered** — Ozone Depletion. Found in: chemistry-module-4 (page 13); absent in chemistry-ece-module-4. Evidence: chemistry-module-4 (page 13) covers stratospheric ozone, the Chapman cycle, catalytic free-radical ozone destruction by CFCs (Cl•) and NOx, biological impacts, and the Montreal Protocol. Missing from chemistry-ece-module-4. Action: Add Ozone Depletion to chemistry-ece-module-4 (or unify notes onto chemistry-module-4).
- **covered** — Sustainable Development - an introduction to Sustainable Development Goals. Found in: chemistry-module-4 (page 14); absent in chemistry-ece-module-4. Evidence: chemistry-module-4 (page 14) covers the Brundtland definition, the three pillars of sustainability (environmental, social, economic), all 17 UN SDGs, alignment with environmental chemistry, and engineering trade-offs. Missing from chemistry-ece-module-4. Action: Add Sustainable Development and the 17 SDGs to chemistry-ece-module-4 (or unify notes onto chemistry-module-4).

Syllabus reader findings:

- Duplicate module sets exist in the repository: 'chemistry-ece-module-1..4' and 'chemistry-module-1..4'. 'chemistry-module-1..4' is complete, rigorous, and fully aligned with GXCYT122, whereas 'chemistry-ece-module-1..4' has several gaps and errors.
- In chemistry-ece-module-1 (page 7), the H2-O2 fuel cell is taught using an alkaline electrolyte (25% KOH or NaOH), violating the official syllabus specification 'H2-O2 fuel cell (acid electrolyte only)'. (chemistry-module-1 page 9 correctly teaches the acidic H3PO4 fuel cell).
- In chemistry-ece-module-1 (page 9), under 'Electroless Plating of Copper', the 'Overall reaction' is erroneously given for nickel plating with hypophosphite (Ni2+ + H2PO2- + H2O -> Ni + H2PO3- + 2H+) instead of copper plating with formaldehyde.
- In chemistry-ece-module-1 (page 4), the Nernst equation section lacks solved numerical problems for complete electrochemical cells at non-standard concentrations (only single-electrode potentials, ΔG, and equilibrium constant K are solved there).
- In chemistry-ece-module-1 (page 7) and chemistry-ece-module-2 (page 5), percent signs are dropped in several places (e.g., 'up to 90 (x=0.9)', '40 > Ni-Cd', '25 KOH', 'efficient (75 )').
- In chemistry-ece-module-3 (page 7), there is a LaTeX typo in dielectric loss: (\'\varepsilon\'\').
- In chemistry-ece-module-4, the final four syllabus topics of Module 4 (E-Waste disposal/recycle/recovery/reuse, Chemistry of climate change & Greenhouse Gases, Ozone Depletion, and Sustainable Development & SDGs) are completely omitted, although they are thoroughly covered in chemistry-module-4 (pages 11-14).

### Group A · GXESL106 (`GXESL106`) — cse

- Official term label: SEMESTER S1/S2.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Uncertainties:

- Official course section retained verbatim because no current note module file maps to this subject.

### Group A · INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING (`GXEST104`) — cse

- Official term label: SEMESTER S1 (B. Tech 2024 –S1/S2).
- Notes available: yes.
- Notes sources: `src/features/notes/electrical-module-1/notes.md`, `src/features/notes/electrical-module-2/notes.md`, `src/features/notes/electrical-module-3/notes.md`.
- Confidence: high.

#### Official Module Module 1

- Elementary concepts of DC electric circuits: Current and Voltage Division Rule
- Relative potential
- Capacitors & Inductors: V-I relations and Energy stored
- Ohm's Law and Kirchhoff's laws - numerical problems
- Star-delta conversion (resistive networks only - derivation not required) - numerical problems
- Analysis of DC Electric circuits: Mesh current method - matrix representation - Solution of network equations
- Node voltage methods - matrix representation - solution of network equations by matrix methods - numerical problems
- Elementary Concepts of Magnetic circuits: Basic Terminology: MMF, field strength, flux density, reluctance
- Comparison between electric and magnetic circuits
- Series and parallel magnetic circuits with composite materials (numerical problems not needed)

Coverage findings:

- **covered** — Elementary concepts of DC electric circuits: Current and Voltage Division Rule. Found in: electrical-module-1. Evidence: Page 5 covers definitions, formulas, derivations, and worked examples for Voltage Divider Rule and Current Divider Rule.
- **covered** — Relative potential. Found in: electrical-module-1. Evidence: Page 6 defines Absolute (Node) Potential and Relative Potential (V_AB = V_A - V_B) with diagrams.
- **partial** — Capacitors & Inductors: V-I relations and Energy stored. Found in: electrical-module-1. Evidence: Page 1 gives capacitor charge Q=CV and stored energy E=(1/2)CV^2, and inductor V-I relation v=L(di/dt) and stored energy W_L=(1/2)Li^2. However, the capacitor V-I relation (i=C dv/dt) is only referenced via an image ('V-I relation of capacitor during charging and discharging') without text/formula explanation. Action: Add explicit text and mathematical formula for the V-I relation of a capacitor (i = C dv/dt and v = (1/C) integral i dt).
- **covered** — Ohm's Law and Kirchhoff's laws - numerical problems. Found in: electrical-module-1. Evidence: Pages 1, 3, 4, 5, 7, and 10 explain Ohm's law, KVL, and KCL with multiple worked numerical problems.
- **covered** — Star-delta conversion (resistive networks only - derivation not required) - numerical problems. Found in: electrical-module-1. Evidence: Page 13 covers Delta-to-Star and Star-to-Delta transformation formulas and 8 worked numerical examples.
- **covered** — Analysis of DC Electric circuits: Mesh current method - matrix representation - Solution of network equations. Found in: electrical-module-1. Evidence: Pages 7, 8, and 9 cover single, two, and three-mesh analysis, supermesh analysis, and matrix representation [R][I]=[V] solved via Cramer's rule.
- **covered** — Node voltage methods - matrix representation - solution of network equations by matrix methods - numerical problems. Found in: electrical-module-1. Evidence: Pages 10, 11, and 12 cover Node voltage analysis, Conductance matrix formulation [G][V]=[I], Cramer's rule solutions, supernode analysis, and numerical examples.
- **covered** — Elementary Concepts of Magnetic circuits: Basic Terminology: MMF, field strength, flux density, reluctance. Found in: electrical-module-1. Evidence: Page 14 defines magnetic flux, magnetic flux density (B), MMF (F=NI), magnetic field intensity/strength (H), permeability, relative permeability, and reluctance (S).
- **covered** — Comparison between electric and magnetic circuits. Found in: electrical-module-1. Evidence: Page 14 provides tables comparing similarities and differences between electric and magnetic circuits.
- **covered** — Series and parallel magnetic circuits with composite materials (numerical problems not needed). Found in: electrical-module-1. Evidence: Page 15 explains series composite magnetic circuits with air gaps and series-parallel magnetic circuits with electrical equivalent diagrams.

#### Official Module Module 2

- Electromagnetic Induction: Faraday's laws, Lenz's law
- Statically induced and dynamically induced emf
- Self-inductance and mutual inductance, coefficient of coupling (numerical problems not needed)
- Alternating Current fundamentals: Generation of alternating voltages
- Representation of sinusoidal waveforms: frequency, period, average value, RMS value and form factor - numerical problems
- AC Circuits: Phasor representation of sinusoidal quantities, Trigonometric, Rectangular, Polar and complex forms
- Analysis of simple AC circuits: Purely resistive, inductive & capacitive circuits
- Inductive and capacitive reactance, concept of impedance - numerical problems
- RL, RC and RLC series circuits - power factor, active, reactive and apparent power. Simple numerical problems
- Three phase AC systems: Generation of three phase voltages, advantages of three phase systems
- Star and delta connections (balanced only), relation between line and phase voltages, line and phase currents - numerical problems

Coverage findings:

- **covered** — Electromagnetic Induction: Faraday's laws, Lenz's law. Found in: electrical-module-2. Evidence: Page 1 explains electromagnetic induction, Faraday's first and second laws, and Lenz's law with conservation of energy.
- **covered** — Statically induced and dynamically induced emf. Found in: electrical-module-2. Evidence: Page 1 explains dynamically induced emf (e=Blv sin theta, Fleming's Right-Hand Rule) and statically induced emf, including a comparison table.
- **covered** — Self-inductance and mutual inductance, coefficient of coupling (numerical problems not needed). Found in: electrical-module-2. Evidence: Page 2 covers self-inductance (L), mutual inductance (M), and derivation of coefficient of coupling k = M / sqrt(L1 L2).
- **covered** — Alternating Current fundamentals: Generation of alternating voltages. Found in: electrical-module-2. Evidence: Page 3 explains AC generation and derives the sinusoidal EMF equation e(t) = E_m sin(omega t).
- **covered** — Representation of sinusoidal waveforms: frequency, period, average value, RMS value and form factor - numerical problems. Found in: electrical-module-2. Evidence: Pages 3 and 4 cover waveform parameters, derivations of average value, RMS value, form factor, peak factor, and worked numerical problems.
- **covered** — AC Circuits: Phasor representation of sinusoidal quantities, Trigonometric, Rectangular, Polar and complex forms. Found in: electrical-module-2. Evidence: Page 5 covers phasors, phase difference, Polar, Exponential (complex), Trigonometric, and Rectangular forms, conversions, j-operator arithmetic, and worked examples.
- **covered** — Analysis of simple AC circuits: Purely resistive, inductive & capacitive circuits. Found in: electrical-module-2. Evidence: Page 6 analyzes pure R, pure L, and pure C circuits including current equations, phase relationships, complex impedance, and instantaneous/average power.
- **covered** — Inductive and capacitive reactance, concept of impedance - numerical problems. Found in: electrical-module-2. Evidence: Page 6 defines X_L, X_C, complex impedance Z, and provides worked numerical examples.
- **covered** — RL, RC and RLC series circuits - power factor, active, reactive and apparent power. Simple numerical problems. Found in: electrical-module-2. Evidence: Pages 7 and 8 cover series RL, RC, and RLC circuits, voltage/impedance/power triangles, active/reactive/apparent power, power factor, and worked numerical problems.
- **covered** — Three phase AC systems: Generation of three phase voltages, advantages of three phase systems. Found in: electrical-module-2. Evidence: Page 9 covers three-phase voltage generation, equations, phase sequence, and 5 advantages over single-phase systems.
- **covered** — Star and delta connections (balanced only), relation between line and phase voltages, line and phase currents - numerical problems. Found in: electrical-module-2. Evidence: Pages 9 and 10 derive line-to-phase voltage and current relationships for balanced Star and Delta connections, three-phase power formulas, and 3 worked numerical problems.

#### Official Module Module 3

- Introduction to Electronic devices: Passive and active components in electronics
- Working of PN junction diode, V-I characteristics of PN Junction diode
- Zener diode and avalanche breakdown. Basics of Zener voltage regulator
- Block diagram of DC power supply, circuit and working of half wave, full wave and bridge rectifiers
- Ripple factor (with and without capacitor filters)
- Construction, working and V-I Characteristics of BJT
- Input output characteristics of CE configuration
- Comparison of CE, CB and CC configurations
- Concept of biasing and load line
- Transistor as a switch
- Transistor as an amplifier (Circuit Diagram and working)
- RC coupled amplifier - Circuit diagram and frequency response
- Introduction to FET
- Construction and working of N-channel and P-Channel MOSFETs

Coverage findings:

- **covered** — Introduction to Electronic devices: Passive and active components in electronics. Found in: electrical-module-3. Evidence: Page 1 classifies and compares passive and active components and reviews intrinsic/extrinsic semiconductors.
- **covered** — Working of PN junction diode, V-I characteristics of PN Junction diode. Found in: electrical-module-3. Evidence: Page 2 explains unbiased PN junction, forward and reverse bias operation, Shockley's equation, and V-I characteristics.
- **covered** — Zener diode and avalanche breakdown. Basics of Zener voltage regulator. Found in: electrical-module-3. Evidence: Page 3 explains Zener diode, Zener vs. Avalanche breakdown mechanisms, shunt voltage regulator operation (line and load regulation), and a worked example.
- **covered** — Block diagram of DC power supply, circuit and working of half wave, full wave and bridge rectifiers. Found in: electrical-module-3. Evidence: Page 4 covers the block diagram of a regulated DC power supply and the circuits, working, and parameters of HWR, center-tapped FWR, and bridge rectifiers.
- **covered** — Ripple factor (with and without capacitor filters). Found in: electrical-module-3. Evidence: Page 5 defines and derives ripple factor for HWR and FWR without filter and with shunt capacitor filter, with a comparison table and worked example.
- **covered** — Construction, working and V-I Characteristics of BJT. Found in: electrical-module-3. Evidence: Pages 6 and 7 cover NPN/PNP construction, doping/width of E, B, C, working in active region, current gains alpha and beta, and V-I characteristics.
- **covered** — Input output characteristics of CE configuration. Found in: electrical-module-3. Evidence: Page 7 explains the CE circuit, input characteristics (IB vs VBE), and output characteristics (IC vs VCE) with active, saturation, and cut-off regions.
- **partial** — Comparison of CE, CB and CC configurations. Found in: electrical-module-3. Evidence: Page 6 briefly defines CB, CE, and CC configurations and alpha/beta gains, and Page 7 mentions why CE is widely used, but there is no systematic comparison of CE, CB, and CC configurations (input/output impedance, voltage/current/power gain, phase shift, applications). Action: Add a detailed comparison table and explanation comparing CB, CE, and CC configurations in Module 3.
- **partial** — Concept of biasing and load line. Found in: electrical-module-3. Evidence: Page 7 mentions the output loop equation V_CE = V_CC - I_C R_C and has a single bullet point on DC Biasing (Quiescent Point / Q-Point) and DC load line, but does not explain the need for biasing, how to plot the DC load line (saturation and cut-off endpoints), or selection of the Q-point. Action: Expand the explanation of the concept of transistor biasing, plotting the DC load line on output characteristics, and Q-point selection in Module 3.
- **partial** — Transistor as a switch. Found in: electrical-module-3. Evidence: Pages 6 and 7 mention in tables/bullets that Saturation Region is used as a Closed Switch (ON state) and Cut-off Region is used as an Open Switch (OFF state), but no circuit diagram or detailed working of a BJT as a switch is provided. Action: Add a dedicated section with circuit diagram and working of a Transistor as a Switch (cut-off and saturation operation) in Module 3.
- **partial** — Transistor as an amplifier (Circuit Diagram and working). Found in: electrical-module-3. Evidence: Page 7 explains the working of a single-stage CE amplifier (DC biasing, positive/negative half-cycles, 180-degree phase reversal), but lacks the circuit diagram of a CE amplifier stage (only the V-I characteristic test circuit is drawn). Action: Add a proper circuit diagram for the Transistor as an Amplifier in Module 3.
- **missing** — RC coupled amplifier - Circuit diagram and frequency response. Evidence: Not present anywhere in the notes (appears to have been omitted because electrical-module-3 page 1 uses a truncated syllabus header). Action: Add a complete section covering the circuit diagram, role of components, working, and frequency response curve (low, mid, high frequency regions and bandwidth) of an RC coupled amplifier in Module 3.
- **covered** — Introduction to FET. Found in: electrical-module-3. Evidence: Page 8 introduces FETs, their classification, N-channel JFET construction and working, and a BJT vs FET comparison table.
- **partial** — Construction and working of N-channel and P-Channel MOSFETs. Found in: electrical-module-3. Evidence: Page 8 covers the construction and working of N-channel Depletion-type and N-channel Enhancement-type MOSFETs, but P-channel MOSFET construction and working are only listed under classification without explanation or diagrams. Action: Add the construction, working, and circuit symbols of P-channel MOSFETs (both Depletion and Enhancement types) in Module 3.

#### Official Module Module 4

- Modern Electronics and its applications: General block diagram of a Communication system
- Block diagram of Fiber optic Communication system
- Concept of AM and FM (No derivation required)
- Block diagram of AM and FM super-heterodyne receiver
- Basic concepts of Wired and Wireless communication
- Block diagram of GSM
- Comparison of 3G, 4G, 5G and 6G communication technologies
- Block diagrams of Electronic instrumentation system
- Block diagram of Digital Multimeter
- Block diagram of Function generator
- Introduction to CRO and Lissajous patterns
- Applications of modern electronics – IoT based smart homes, healthcare and agriculture (Case study only)

Coverage findings:

- **misfiled** — Modern Electronics and its applications: General block diagram of a Communication system. Found in: electrical-module-3. Evidence: Found on page 9 of electrical-module-3 ('Modern Electronics: Principles of Communication Systems'), which covers the general block diagram of a basic electronic communication system and its blocks. Action: Create electrical-module-4 and move 'General block diagram of a Communication system' from electrical-module-3 page 9 to electrical-module-4.
- **missing** — Block diagram of Fiber optic Communication system. Evidence: Optical fiber cable is only mentioned in passing in electrical-module-3 page 9 as an example of a guided channel; no block diagram or explanation of a fiber optic communication system is present. Action: Add the block diagram and explanation of a Fiber Optic Communication System in Module 4.
- **misfiled** — Concept of AM and FM (No derivation required). Found in: electrical-module-3. Evidence: Found on page 9 of electrical-module-3, which explains the need for modulation and summarizes AM, FM, and PM in a table. However, it lacks waveforms, modulation index concepts, and bandwidth comparisons for AM and FM. Action: Move modulation content from electrical-module-3 page 9 to electrical-module-4 and expand the explanation of AM and FM concepts (waveforms, modulation index, frequency spectrum/bandwidth).
- **missing** — Block diagram of AM and FM super-heterodyne receiver. Evidence: Not present anywhere in the supplied notes. Action: Add block diagrams and working principles of both AM and FM super-heterodyne receivers in Module 4.
- **misfiled** — Basic concepts of Wired and Wireless communication. Found in: electrical-module-3. Evidence: Briefly mentioned on page 9 of electrical-module-3 under 'Communication Channel' as Guided (Wired) Channels and Unguided (Wireless) Channels (one bullet point each). Action: Move to electrical-module-4 and expand into a full section explaining basic concepts, media types, advantages, and comparisons of wired and wireless communication.
- **missing** — Block diagram of GSM. Evidence: Not present anywhere in the supplied notes. Action: Add the architecture/block diagram and explanation of the GSM system (MS, BSS, NSS, OSS) in Module 4.
- **missing** — Comparison of 3G, 4G, 5G and 6G communication technologies. Evidence: Not present anywhere in the supplied notes. Action: Add a detailed comparison of 3G, 4G, 5G, and 6G mobile communication technologies in Module 4.
- **misfiled** — Block diagrams of Electronic instrumentation system. Found in: electrical-module-3. Evidence: Found on page 10 of electrical-module-3 ('Electronic Instrumentation System'), which covers the block diagram and explanation of sensor/transducer, signal conditioner, ADC, and display. Action: Move the Electronic Instrumentation System section from electrical-module-3 page 10 to electrical-module-4.
- **missing** — Block diagram of Digital Multimeter. Evidence: DMM is only mentioned as a readout example on page 10 of electrical-module-3; no block diagram or working of a Digital Multimeter is provided. Action: Add the block diagram and working of a Digital Multimeter (DMM) in Module 4.
- **missing** — Block diagram of Function generator. Evidence: Not present anywhere in the supplied notes. Action: Add the block diagram and working of a Function Generator in Module 4.
- **missing** — Introduction to CRO and Lissajous patterns. Evidence: Not present anywhere in the supplied notes. Action: Add a section covering Introduction to Cathode Ray Oscilloscope (CRO) and Lissajous patterns (for frequency and phase measurement) in Module 4.
- **misfiled** — Applications of modern electronics – IoT based smart homes, healthcare and agriculture (Case study only). Found in: electrical-module-3. Evidence: Found on page 10 of electrical-module-3 ('Introduction to the Internet of Things (IoT)' and 'Applications of Modern Electronics and IoT'), covering smart homes, smart healthcare, and smart agriculture. Action: Move the IoT applications content from electrical-module-3 page 10 to electrical-module-4 and structure smart homes, healthcare, and agriculture as case studies as specified in the syllabus.

Module boundary and misplaced-topic findings:

- Modern Electronics and its applications: General block diagram of a Communication system: official Module Module 4, found in Module electrical-module-3. Create electrical-module-4 and move communication systems content from electrical-module-3 (page 9) into electrical-module-4.
- Concept of AM and FM (No derivation required): official Module Module 4, found in Module electrical-module-3. Move AM/FM modulation content from electrical-module-3 (page 9) into electrical-module-4 and expand it.
- Basic concepts of Wired and Wireless communication: official Module Module 4, found in Module electrical-module-3. Move wired and wireless channel content from electrical-module-3 (page 9) into electrical-module-4 and expand it.
- Block diagrams of Electronic instrumentation system: official Module Module 4, found in Module electrical-module-3. Move Electronic Instrumentation System from electrical-module-3 (page 10) into electrical-module-4.
- Applications of modern electronics – IoT based smart homes, healthcare and agriculture (Case study only): official Module Module 4, found in Module electrical-module-3. Move IoT architecture and applications from electrical-module-3 (page 10) into electrical-module-4.

Syllabus reader findings:

- Module 4 notes file (electrical-module-4) is completely absent; instead, a few Module 4 topics were appended as pages 9 and 10 of electrical-module-3 under 'Modern Electronics (Module 3 Continuation)', while the remaining Module 4 topics are missing.
- In electrical-module-3 page 1, the printed syllabus block at the top does not match the official KTU 2024 GXEST104 Module 3 syllabus—it omits Comparison of CE/CB/CC, biasing & load line, transistor as a switch, RC coupled amplifier, and P-channel MOSFETs.
- In electrical-module-1 page 4, the parallel resistance formula is written without parentheses in the denominator: 'R = R_1R_2/R_1+R_2'.
- In electrical-module-1 page 7, Example 2.6.1 and Example 2.6.1 (Variant) write the exact same KVL equation '12 - 2*I - 3*I - 3 - 4*I = 0', but the second one simplifies '12 - 3' to '15' (treating E2 as aiding without changing the sign in the KVL equation), which is mathematically inconsistent.
- In electrical-module-1 page 7, under 'Solving the System of Simultaneous Equations', the line 'From Equation 1, express I_2 in terms of I_1: I_2 = 3I_1 - 3' is duplicated.
- In electrical-module-1 page 10, under Example 2.7.4 'Step 3: Solve the System of Equations', the line '-20V_1 + 258.5V_1 - 7050 = 1500' is duplicated.
- In electrical-module-1 page 11, the general conductance matrix G has a typo in the second row last column ('-G_nn' instead of '-G_2n') and in the last row first column ('G_n1' instead of '-G_n1').
- In electrical-module-1 page 11, under 'Matrix Formats', single backslashes '\' are used instead of double backslashes '\\' for line breaks in the LaTeX bmatrix environments.
- In electrical-module-1 page 11, under 'Example: Matrix Node Analysis with Branch Currents', G_11 is written as '1/4 + 1/4 = 1.25 S' (typo for 1/1 + 1/4 = 1.25 S).
- In electrical-module-1 page 12, Example 1 has conflicting KCL equations ('3 = V_1/2 + V_2/1 + 2' vs '-3 = V_1/2 + V_2/1 + 2'), and Step 4 ('Branch Currents') ends abruptly after the bullet '* I_1 (through 2 Ohm resistor):' with no calculation.
- In electrical-module-1 page 13, image alt text on page-053-image-1-source.webp uses 'Γ' instead of 'Ω' ('2Γ each', '24Γ resistors').
- In electrical-module-1 page 15, permeability of iron unit is written as 'Henry/m^2' instead of 'Henry/m'.

Uncertainties:

- In electrical-module-1 page 1, the V-I relation of a capacitor is only represented by an external image (page-008-image-1-source.webp with alt text 'V-I relation of capacitor during charging and discharging'); its exact mathematical content in the graphic cannot be verified from text alone.
- In electrical-module-1 page 2, the page title mentions 'Independent and dependent voltage and current sources', but the text only discusses ideal and practical constant (independent) sources; dependent sources are not explained in text.

### Group A · ALGORITHMIC THINKING WITH PYTHON (`UCEST105`) — cse

- Official term label: SEMESTER S1.
- Notes available: yes.
- Notes sources: `src/features/notes/python-module-1/notes.md`, `src/features/notes/python-module-2/notes.md`, `src/features/notes/python-module-3/notes.md`, `src/features/notes/python-module-4/notes.md`.
- Confidence: high.

#### Official Module Module 1

- Problem-solving strategies defined
- Importance of understanding multiple problem-solving strategies
- Trial and Error
- Heuristics
- Means-Ends Analysis
- Backtracking (Working backward)
- Computer as a model of computation
- Understanding the problem
- Formulating a model
- Developing an algorithm
- Writing the program
- Testing the program
- Evaluating the solution
- Creating and using variables in Python
- Numeric and String data types in Python
- Using the math module
- Using the Python Standard Library for handling basic I/O - print, input
- Python operators and their precedence

Coverage findings:

- **covered** — Problem-solving strategies defined. Found in: python-module-1. Evidence: Page 1 defines problem-solving strategy, well-defined vs ill-defined problems, and Polya's four phases.
- **covered** — Importance of understanding multiple problem-solving strategies. Found in: python-module-1. Evidence: Pages 1 and 2 explain the importance of strategy selection and key benefits (adaptability, efficiency, improved outcomes, skill development).
- **covered** — Trial and Error. Found in: python-module-1. Evidence: Pages 1, 2, and 13 define trial and error, list operational steps, and provide troubleshooting, password recovery, and jigsaw puzzle examples.
- **covered** — Heuristics. Found in: python-module-1. Evidence: Pages 2 and 13 define heuristics, list five conditions for use, and explain sub-tasks, guess and check, working backwards, and restaurant selection.
- **covered** — Means-Ends Analysis. Found in: python-module-1. Evidence: Pages 2 and 13 define MEA and illustrate it with Tower of Hanoi, Trivandrum to Kashmir road trip, and software development.
- **covered** — Backtracking (Working backward). Found in: python-module-1. Evidence: Pages 2 and 13 cover working backwards as a heuristic and backtracking with state-space search tree and Sudoku examples.
- **covered** — Computer as a model of computation. Found in: python-module-1. Evidence: Pages 2 and 3 detail the Von Neumann architecture, instruction execution cycle (fetch-decode-execute), I/O devices, CPU (ALU, CU, Registers), and memory hierarchy.
- **covered** — Understanding the problem. Found in: python-module-1. Evidence: Pages 3 and 4 explain input requirements, output requirements, and processing considerations with worked examples.
- **covered** — Formulating a model. Found in: python-module-1. Evidence: Page 4 demonstrates formulating mathematical models for sum of two numbers, class average, and quadratic discriminant.
- **covered** — Developing an algorithm. Found in: python-module-1. Evidence: Page 4 explains developing algorithms using pseudocode and flowcharts across three examples.
- **covered** — Writing the program. Found in: python-module-1. Evidence: Page 4 covers coding in Python, compiling, and debugging.
- **covered** — Testing the program. Found in: python-module-1. Evidence: Page 4 explains testing programs with test suites and defines bugs.
- **covered** — Evaluating the solution. Found in: python-module-1. Evidence: Page 4 outlines the steps for evaluating program output against original problem specifications.
- **covered** — Creating and using variables in Python. Found in: python-module-1. Evidence: Pages 6, 7, and 8 cover tokens, keywords, identifier rules, variable declaration, dynamic typing, multiple assignment, and type conversion.
- **covered** — Numeric and String data types in Python. Found in: python-module-1. Evidence: Pages 7, 8, and 13 cover int, float, complex, string creation with single/double/triple quotes, and escape sequences.
- **covered** — Using the math module. Found in: python-module-1. Evidence: Pages 8 and 9 demonstrate import math and functions sqrt, ceil, floor, fabs, pi, factorial, gcd, exp, pow, log, sin, cos, tan.
- **covered** — Using the Python Standard Library for handling basic I/O - print, input. Found in: python-module-1. Evidence: Page 9 covers input() with prompts, type casting, split(), and print() with sep and end parameters.
- **covered** — Python operators and their precedence. Found in: python-module-1. Evidence: Pages 9, 10, 11, and 12 cover arithmetic, comparison, assignment, bitwise, logical, membership, and identity operators, plus precedence tables and evaluation trees.

#### Official Module Module 2

- Meaning and Definition of Pseudocode
- Reasons for using pseudocode
- The main constructs of pseudocode - Sequencing
- The main constructs of pseudocode - selection (if-else structure, case structure)
- The main constructs of pseudocode - repetition (for, while, repeat-until loops)
- Symbols used in creating a Flowchart - start and end, arithmetic calculations, input/output operation, decision (selection), module name (call), for loop (Hexagon), flow-lines, on-page connector, off-page connector
- Sample problem: Evaluate an expression, d=a+b*c
- Sample problem: find simple interest
- Sample problem: determine the larger of two numbers
- Sample problem: determine the smallest of three numbers
- Sample problem: determine the grade earned by a student based on KTU grade scale (using if-else and case structures)
- Sample problem: print the numbers from 1 to 50 in descending order
- Sample problem: find the sum of n numbers input by the user (using all the three loop variants)
- Sample problem: factorial of a number
- Sample problem: largest of n numbers
- Flowcharts for visualizing the control flow of Algorithms (RAPTOR and sample problems)

Coverage findings:

- **covered** — Meaning and Definition of Pseudocode. Found in: python-module-2. Evidence: Pages 1, 18, and 19 define pseudocode and list rules for writing pseudocode.
- **covered** — Reasons for using pseudocode. Found in: python-module-2. Evidence: Page 18 lists the benefits and reasons for using pseudocode.
- **covered** — The main constructs of pseudocode - Sequencing. Found in: python-module-2. Evidence: Pages 16, 17, and 21 explain sequence construct with square area/perimeter and swap examples.
- **covered** — The main constructs of pseudocode - selection (if-else structure, case structure). Found in: python-module-2. Evidence: Pages 10, 21, 22, 23, and 24 cover IF, IF/ELSE, ELSE IF, nested IF, and CASE/END CASE structures.
- **covered** — The main constructs of pseudocode - repetition (for, while, repeat-until loops). Found in: python-module-2. Evidence: Pages 21, 36, 37, 41, 42, and 43 explain and compare FOR, WHILE, and REPEAT-UNTIL loops.
- **covered** — Symbols used in creating a Flowchart - start and end, arithmetic calculations, input/output operation, decision (selection), module name (call), for loop (Hexagon), flow-lines, on-page connector, off-page connector. Found in: python-module-2. Evidence: Pages 2, 3, 4, 5, 20, and 38 explain all nine required flowchart symbols with visual examples.
- **missing** — Sample problem: Evaluate an expression, d=a+b*c. Evidence: Not present in python-module-2 (discriminant d = b^2 - 4ac is in Module 1, but d = a + b * c pseudocode/flowchart is absent). Action: Add pseudocode and flowchart for evaluating the expression d = a + b * c in Module 2.
- **covered** — Sample problem: find simple interest. Found in: python-module-2. Evidence: Page 6 provides pseudocode and flowchart for simple interest.
- **covered** — Sample problem: determine the larger of two numbers. Found in: python-module-2. Evidence: Page 7 provides pseudocode and flowchart for finding the larger of two numbers.
- **covered** — Sample problem: determine the smallest of three numbers. Found in: python-module-2. Evidence: Page 8 provides pseudocode and flowchart for finding the smallest of three numbers.
- **partial** — Sample problem: determine the grade earned by a student based on KTU grade scale (using if-else and case structures). Found in: python-module-2. Evidence: Page 23 shows a brief ELSE IF grade message snippet and page 46 shows a Python if/elif grade script (A-F), while python-module-3 page 3 shows S-F in Python; however, pseudocode and flowchart for the KTU grade scale using both if-else and case structures are missing in Module 2. Action: Add pseudocode and flowchart for determining student grade based on the KTU grade scale using both if-else and case structures in Module 2.
- **partial** — Sample problem: print the numbers from 1 to 50 in descending order. Found in: python-module-2. Evidence: Page 42 shows pseudocode for printing 10 down to 1 (`FOR i = 10 TO 1 STEP -1`), but printing 50 down to 1 with pseudocode and flowchart is not explicitly worked out. Action: Add explicit sample problem (pseudocode and flowchart) for printing numbers from 1 to 50 in descending order.
- **partial** — Sample problem: find the sum of n numbers input by the user (using all the three loop variants). Found in: python-module-2. Evidence: Page 39 sums the first n natural numbers (1 to n) using a WHILE loop, and page 40 sums n user-input ages using a REPEAT-UNTIL loop, but finding the sum of n user-input numbers demonstrated across all three loop variants (FOR, WHILE, REPEAT-UNTIL) with flowcharts is incomplete. Action: Add pseudocode and flowcharts for finding the sum of n numbers input by the user using all three loop variants (for, while, repeat-until).
- **covered** — Sample problem: factorial of a number. Found in: python-module-2. Evidence: Pages 11, 12, and 25 cover factorial pseudocode, trace, and flowcharts (both ascending and descending counters).
- **missing** — Sample problem: largest of n numbers. Evidence: Pages 16 and 19 find the greatest of three numbers, but finding the largest of n numbers is not covered in Module 2. Action: Add pseudocode and flowchart for finding the largest of n numbers in Module 2.
- **partial** — Flowcharts for visualizing the control flow of Algorithms (RAPTOR and sample problems). Found in: python-module-2. Evidence: Flowcharts are provided for several sample problems (simple interest, larger of two, smallest of three, factorial, odd/even, ticket pricing, commission), but flowcharts for several syllabus-listed sample problems (d=a+b*c, KTU grade scale, 50 to 1 descending, sum of n user inputs, largest of n numbers) and mention of RAPTOR are absent. Action: Add flowcharts for the remaining syllabus sample problems and briefly note RAPTOR for visualizing control flow.

#### Official Module Module 3

- Selection and iteration using Python - if-else, elif
- Selection and iteration using Python - for loop, range, while loop
- Sequence data types in Python - list
- Sequence data types in Python - tuple
- Sequence data types in Python - set
- Sequence data types in Python - strings
- Sequence data types in Python - dictionary
- Creating and using Arrays in Python (using Numpy library)
- Problem decomposition as a strategy for solving complex problems (demonstrated using Merge sort and returning top three integers from a list of n>=3 integers)
- Modularization and Motivation for modularization
- Defining and using functions in Python
- Functions with multiple return values
- Recursion Defined
- Reasons for using Recursion
- The Call Stack and Recursion and the Stack
- Avoiding Circularity in Recursion
- Recursion sample problem: Finding the nth Fibonacci number
- Recursion sample problem: greatest common divisor of two positive integers
- Recursion sample problem: the factorial of a positive integer
- Recursion sample problem: adding two positive integers
- Recursion sample problem: the sum of digits of a positive number

Coverage findings:

- **covered** — Selection and iteration using Python - if-else, elif. Found in: python-module-3. Evidence: Pages 2, 3, and 6 cover one-way if, if/else, if/elif/else chains, and short-circuit evaluation in Python (also duplicated in python-module-2 pages 46-47).
- **covered** — Selection and iteration using Python - for loop, range, while loop. Found in: python-module-3. Evidence: Pages 4 and 5 cover Python for loops, range(), while loops, nested loops, break, continue, and pass (also duplicated in python-module-2 pages 44-45).
- **covered** — Sequence data types in Python - list. Found in: python-module-3. Evidence: Pages 15-20 thoroughly cover list creation, indexing, traversal, comprehensions, slicing, mutation, shallow/deep copying, deletion, and list methods.
- **covered** — Sequence data types in Python - tuple. Found in: python-module-3. Evidence: Page 21 covers tuples, immutability, single-element tuple syntax, unpacking, and hashability.
- **covered** — Sequence data types in Python - set. Found in: python-module-3. Evidence: Pages 25-27 cover set creation, traversal, modification, subset/superset comparisons, removal methods, and set algebra.
- **covered** — Sequence data types in Python - strings. Found in: python-module-3. Evidence: Pages 10-14 and 20 cover Unicode strings, indexing, traversal, immutability, slicing, comparison, string methods, string module constants, split(), and join().
- **covered** — Sequence data types in Python - dictionary. Found in: python-module-3. Evidence: Pages 28 and 29 cover dictionary creation, key/value rules, insertion order, traversal, deletion, and dictionary methods/views.
- **covered** — Creating and using Arrays in Python (using Numpy library). Found in: python-module-3. Evidence: Pages 22-24 cover NumPy ndarray creation, ndim, shape, size, dtype, indexing, slicing views vs copies, reshape(), and matrix operations.
- **partial** — Problem decomposition as a strategy for solving complex problems (demonstrated using Merge sort and returning top three integers from a list of n>=3 integers). Found in: python-module-3. Evidence: Page 7 defines decomposition briefly and page 20 shows a `top_three(values)` function, but problem decomposition is not demonstrated in depth as a strategy in Module 3, and Merge Sort is only in Module 4 page 4 without being used to introduce decomposition in Module 3. Action: Expand problem decomposition in Module 3 and explicitly demonstrate it using both Merge Sort and returning the top three integers from a list of n>=3 integers.
- **covered** — Modularization and Motivation for modularization. Found in: python-module-3. Evidence: Page 7 defines modular design and explains its motivation (reducing duplicated logic, hiding implementation detail, reuse, debugging, and testing).
- **covered** — Defining and using functions in Python. Found in: python-module-3. Evidence: Pages 7, 8, and 9 explain `def`, parameters, arguments, return values, local scope, and function calls with worked examples.
- **missing** — Functions with multiple return values. Evidence: Page 7 mentions a function may have multiple `return` statements along different branches, and page 20 returns a list slice, but returning multiple values from a Python function (e.g., `return a, b` as a tuple and unpacking) is not explained or demonstrated. Action: Add explanation and code examples of functions returning multiple values (tuple packing/unpacking) in Module 3.
- **misfiled** — Recursion Defined. Found in: python-module-4. Evidence: Absent from python-module-3; briefly defined in python-module-4 page 4 under Divide and Conquer ('A recursive function calls itself on a smaller input... stops at a base case'). Action: Add a dedicated section on Recursion in Module 3 defining recursion and base/recursive cases.
- **missing** — Reasons for using Recursion. Evidence: Not covered in python-module-3 or other modules. Action: Add reasons and motivations for using recursion in Module 3.
- **missing** — The Call Stack and Recursion and the Stack. Evidence: Not covered in python-module-3 or other modules. Action: Add explanation and diagrams of the call stack and how recursive calls use stack frames in Module 3.
- **missing** — Avoiding Circularity in Recursion. Evidence: Not covered in python-module-3. Action: Add explanation of circularity/infinite recursion and how base cases and progress toward base cases avoid it in Module 3.
- **misfiled** — Recursion sample problem: Finding the nth Fibonacci number. Found in: python-module-4. Evidence: Absent from python-module-3; Fibonacci recurrence and memoized recursion appear in python-module-4 page 5. Action: Add the standard recursive Python function and trace for finding the nth Fibonacci number in Module 3.
- **missing** — Recursion sample problem: greatest common divisor of two positive integers. Evidence: Not covered in python-module-3 (Module 1 only shows `math.gcd()`). Action: Add recursive GCD (Euclidean algorithm) implementation and explanation in Module 3.
- **missing** — Recursion sample problem: the factorial of a positive integer. Evidence: Not covered in python-module-3 (Module 2 only covers iterative factorial). Action: Add recursive factorial implementation and stack trace in Module 3.
- **missing** — Recursion sample problem: adding two positive integers. Evidence: Not covered in python-module-3. Action: Add recursive addition of two positive integers in Module 3.
- **missing** — Recursion sample problem: the sum of digits of a positive number. Evidence: Not covered in python-module-3. Action: Add recursive sum of digits of a positive number in Module 3.

#### Official Module Module 4

- Brute-force Approach (Example: Padlock, Password guessing)
- Divide-and-conquer Approach (Example: The Merge Sort Algorithm)
- Advantages of Divide and Conquer Approach
- Disadvantages of Divide and Conquer Approach
- Dynamic Programming Approach (Example: Fibonacci series)
- Recursion vs Dynamic Programming
- Greedy Algorithm Approach - Example: maximum number of tasks completed in limited time given array of completion times
- Motivations for the Greedy Approach
- Characteristics of the Greedy Algorithm
- Greedy Algorithms vs Dynamic Programming
- Randomized Approach - Example 1: Coupon collector (free jeans)
- Randomized Approach - Example 2: Hat-check problem
- Motivations for the Randomized Approach

Coverage findings:

- **covered** — Brute-force Approach (Example: Padlock, Password guessing). Found in: python-module-4. Evidence: Page 3 explains the brute-force approach with a 4-digit padlock/secret code guessing example and Python code (password guessing is also in Module 1 page 2).
- **covered** — Divide-and-conquer Approach (Example: The Merge Sort Algorithm). Found in: python-module-4. Evidence: Page 4 covers divide, conquer, combine steps and demonstrates Merge Sort with diagram and Python code.
- **covered** — Advantages of Divide and Conquer Approach. Found in: python-module-4. Evidence: Page 4 lists five advantages of divide and conquer.
- **covered** — Disadvantages of Divide and Conquer Approach. Found in: python-module-4. Evidence: Page 4 lists three disadvantages of divide and conquer.
- **covered** — Dynamic Programming Approach (Example: Fibonacci series). Found in: python-module-4. Evidence: Page 5 explains overlapping sub-problems, memoization, bottom-up tabulation, and the Fibonacci series example.
- **covered** — Recursion vs Dynamic Programming. Found in: python-module-4. Evidence: Page 5 compares plain recursion/divide-and-conquer with dynamic programming.
- **partial** — Greedy Algorithm Approach - Example: maximum number of tasks completed in limited time given array of completion times. Found in: python-module-4. Evidence: Page 6 explains the greedy approach and shows interval activity selection with `(start, finish)` pairs, plus a coin change counterexample, but omits the exact syllabus example: finding the maximum number of tasks completed within a limited total time given an array of positive task completion times. Action: Add the specific syllabus example: given an array of positive integers indicating task completion times and a limited total time, find the maximum number of tasks that can be completed.
- **covered** — Motivations for the Greedy Approach. Found in: python-module-4. Evidence: Page 6 ('Why use greedy?') explains motivations for the greedy approach.
- **covered** — Characteristics of the Greedy Algorithm. Found in: python-module-4. Evidence: Page 6 ('Characteristics') lists the characteristics of greedy algorithms.
- **covered** — Greedy Algorithms vs Dynamic Programming. Found in: python-module-4. Evidence: Page 6 provides a comparison table between Greedy and Dynamic Programming.
- **covered** — Randomized Approach - Example 1: Coupon collector (free jeans). Found in: python-module-4. Evidence: Page 7 explains and simulates the coupon collector (free jeans) problem.
- **covered** — Randomized Approach - Example 2: Hat-check problem. Found in: python-module-4. Evidence: Page 7 explains and simulates the hat-check problem.
- **covered** — Motivations for the Randomized Approach. Found in: python-module-4. Evidence: Page 7 lists five motivations and applications for the randomized approach.

Module boundary and misplaced-topic findings:

- Sequence data types (list, tuple, set, dictionary): official Module Module 3, found in Module python-module-1 (page 8) and python-module-2 (pages 48-50). Module 1 only requires Numeric and String data types; keep list, tuple, set, and dictionary in Module 3 and remove redundant list slicing/sorting practice from the end of Module 2.
- Problem-solving examples: Jigsaw puzzle (Trial and Error) and Restaurant selection (Heuristics): official Module Module 1, found in Module python-module-2 (pages 26-27). Remove or relocate pages 26 and 27 from Module 2, as Trial and Error and Heuristics belong to Module 1 (and are already covered in Module 1 page 13).
- Python selection, iteration, range(), and NumPy array basics: official Module Module 3, found in Module python-module-2 (pages 44-50). Module 2 is strictly for Algorithm, Pseudocode, and Flowcharts. Move or remove Python `range()`, `for`, `if/elif`, list indexing/sorting, and NumPy array pages (pages 44-50) from Module 2 since they belong to Module 3.
- Recursion and Merge Sort for Problem Decomposition: official Module Module 3, found in Module python-module-4 (pages 4-5). Module 3 requires full coverage of Recursion (definition, reasons, call stack, avoiding circularity, and five sample recursive problems) and introducing Problem Decomposition via Merge Sort; currently recursion and Merge Sort only appear in Module 4.

Syllabus reader findings:

- In python-module-1 (pages 1 through 12), almost every page contains two concatenated versions of the same content (a primary section followed by a duplicate 'Review' or 'Reference' section repeating the exact same definitions, code, and outputs).
- In python-module-1 page 4, the duplicate 'Class Average Case Study Review' contains a corrupted formula: `Average (in percentage) = (Average_2 / 13)` instead of `(Average_2 / 12) * 100`.
- In python-module-1 page 4, the duplicate 'Language Architecture and Type Checking' section has misaligned LaTeX underbraces in the binary machine code example (`1010` is outside the underbrace and `add` is placed under `0011`).
- In python-module-1 page 7, comments in the Explicit Type Conversion code block are detached and placed at the bottom of the snippet with an incorrect comment `# Output: 10.0` for `float(15)`.
- In python-module-1 page 10, the Assignment Operators output is mathematically wrong: starting with `a = 10`, `a += 5` is printed as `105` instead of `15` (and subsequent lines follow from 105).
- In python-module-1 page 11, the Bitwise Left Shift output label is misprinted as `a >> 2 : 240` instead of `a << 2 : 240`.
- In python-module-1 page 12, the Python expression evaluation table uses C-style logical operators (`C&&D` and `||`) instead of Python's `and` and `or`.
- In python-module-1 page 13, Expression 2 explanation contains a typo: `so not False evaluates to (False)` instead of `True`.
- In python-module-2, the page ordering is scrambled: Flowchart symbols and flowchart examples appear on pages 2-13, References appear on page 14, and then the introductory Algorithm and Pseudocode sections appear on pages 15-25.

### Group A · UCHUT128 (`UCHUT128`) — cse

- Official term label: SEMESTER 2.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Uncertainties:

- Official course section retained verbatim because no current note module file maps to this subject.

### Group A · HEALTH AND WELLNESS (`UCPWT127`) — cse

- Official term label: SEMESTER S1/S2.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

#### Official Module Module 1

- Human Body Systems related to Physical activity and its functions: Respiratory System
- Human Body Systems related to Physical activity and its functions: Cardiovascular System
- Musculoskeletal System and the Major Muscle groups of the Human Body
- Quantifying Physical Activity Energy Expenditure and Metabolic equivalent of task (MET)
- Exercise Continuum: Light-intensity physical activity
- Exercise Continuum: Moderate-intensity physical activity
- Exercise Continuum: Vigorous-intensity physical activity
- Defining Physical Activity
- Aerobic Physical Activity
- Anaerobic Physical Activity
- Exercise and Health-Related Physical Fitness
- FITT principle to design an Exercise programme
- Components of Health related Physical Fitness: Cardiorespiratory Fitness
- Components of Health related Physical Fitness: Muscular strength
- Components of Health related Physical Fitness: Muscular endurance
- Components of Health related Physical Fitness: Flexibility
- Components of Health related Physical Fitness: Body composition

Coverage findings:

- **no_notes** — Human Body Systems related to Physical activity and its functions: Respiratory System. Action: Create Module 1 notes covering the Respiratory System and its functions related to physical activity.
- **no_notes** — Human Body Systems related to Physical activity and its functions: Cardiovascular System. Action: Create Module 1 notes covering the Cardiovascular System and its functions related to physical activity.
- **no_notes** — Musculoskeletal System and the Major Muscle groups of the Human Body. Action: Create Module 1 notes covering the Musculoskeletal System and major muscle groups.
- **no_notes** — Quantifying Physical Activity Energy Expenditure and Metabolic equivalent of task (MET). Action: Create Module 1 notes covering physical activity energy expenditure quantification and MET.
- **no_notes** — Exercise Continuum: Light-intensity physical activity. Action: Create Module 1 notes covering the Exercise Continuum, specifically light-intensity physical activity.
- **no_notes** — Exercise Continuum: Moderate-intensity physical activity. Action: Create Module 1 notes covering moderate-intensity physical activity.
- **no_notes** — Exercise Continuum: Vigorous-intensity physical activity. Action: Create Module 1 notes covering vigorous-intensity physical activity.
- **no_notes** — Defining Physical Activity. Action: Create Module 1 notes defining physical activity.
- **no_notes** — Aerobic Physical Activity. Action: Create Module 1 notes covering aerobic physical activity.
- **no_notes** — Anaerobic Physical Activity. Action: Create Module 1 notes covering anaerobic physical activity.
- **no_notes** — Exercise and Health-Related Physical Fitness. Action: Create Module 1 notes defining exercise and health-related physical fitness.
- **no_notes** — FITT principle to design an Exercise programme. Action: Create Module 1 notes explaining the FITT principle for exercise programme design.
- **no_notes** — Components of Health related Physical Fitness: Cardiorespiratory Fitness. Action: Create Module 1 notes covering cardiorespiratory fitness.
- **no_notes** — Components of Health related Physical Fitness: Muscular strength. Action: Create Module 1 notes covering muscular strength.
- **no_notes** — Components of Health related Physical Fitness: Muscular endurance. Action: Create Module 1 notes covering muscular endurance.
- **no_notes** — Components of Health related Physical Fitness: Flexibility. Action: Create Module 1 notes covering flexibility.
- **no_notes** — Components of Health related Physical Fitness: Body composition. Action: Create Module 1 notes covering body composition.

#### Official Module Module 2

- Concept of Health and Wellness: Health and wellness differentiation
- Factors affecting health and wellness
- Mental health and Factors affecting mental health
- Sports and Socialization: Sports and character building
- Leadership through Physical Activity and Sports
- Diet and nutrition: Exploring Micro and Macronutrients
- Concept of Balanced diet
- Carbohydrate & the Glycemic Index
- Animal & Plant-based Proteins and their Effects on Human Health
- Dietary Fats & their Effects on Human Health
- Essential Vitamins and Minerals

Coverage findings:

- **no_notes** — Concept of Health and Wellness: Health and wellness differentiation. Action: Create Module 2 notes differentiating health and wellness.
- **no_notes** — Factors affecting health and wellness. Action: Create Module 2 notes covering factors affecting health and wellness.
- **no_notes** — Mental health and Factors affecting mental health. Action: Create Module 2 notes covering mental health and its affecting factors.
- **no_notes** — Sports and Socialization: Sports and character building. Action: Create Module 2 notes on sports, socialization, and character building.
- **no_notes** — Leadership through Physical Activity and Sports. Action: Create Module 2 notes on leadership through physical activity and sports.
- **no_notes** — Diet and nutrition: Exploring Micro and Macronutrients. Action: Create Module 2 notes exploring micronutrients and macronutrients.
- **no_notes** — Concept of Balanced diet. Action: Create Module 2 notes explaining the concept of a balanced diet.
- **no_notes** — Carbohydrate & the Glycemic Index. Action: Create Module 2 notes covering carbohydrates and the glycemic index.
- **no_notes** — Animal & Plant-based Proteins and their Effects on Human Health. Action: Create Module 2 notes on animal and plant-based proteins and their health effects.
- **no_notes** — Dietary Fats & their Effects on Human Health. Action: Create Module 2 notes on dietary fats and their health effects.
- **no_notes** — Essential Vitamins and Minerals. Action: Create Module 2 notes covering essential vitamins and minerals.

#### Official Module Module 3

- Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Obesity
- Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Cardiovascular diseases (e.g., coronary artery disease, hypertension)
- Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Diabetes
- Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Osteoporosis
- Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Musculoskeletal disorders (e.g., osteoarthritis, Low back pain, Kyphosis, lordosis, flat foot, Knock knee)
- Meaning, Aims and objectives of yoga
- Classification and importance of Yogic Asanas (Sitting, Standing, lying)
- Pranayama and Its Types
- Active Lifestyle and Stress Management Through Yoga
- Understanding on substance abuse and addiction
- Psychoactive substances & its ill effects: Alcohol
- Psychoactive substances & its ill effects: Opioids
- Psychoactive substances & its ill effects: Cannabis
- Psychoactive substances & its ill effects: Sedative
- Psychoactive substances & its ill effects: Cocaine
- Psychoactive substances & its ill effects: Other stimulants, including caffeine
- Psychoactive substances & its ill effects: Hallucinogens
- Psychoactive substances & its ill effects: Tobacco
- Psychoactive substances & its ill effects: Volatile solvents

Coverage findings:

- **no_notes** — Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Obesity. Action: Create Module 3 notes on lifestyle management strategies for obesity.
- **no_notes** — Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Cardiovascular diseases (e.g., coronary artery disease, hypertension). Action: Create Module 3 notes on lifestyle management strategies for cardiovascular diseases including coronary artery disease and hypertension.
- **no_notes** — Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Diabetes. Action: Create Module 3 notes on lifestyle management strategies for diabetes.
- **no_notes** — Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Osteoporosis. Action: Create Module 3 notes on lifestyle management strategies for osteoporosis.
- **no_notes** — Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Musculoskeletal disorders (e.g., osteoarthritis, Low back pain, Kyphosis, lordosis, flat foot, Knock knee). Action: Create Module 3 notes on lifestyle management strategies for musculoskeletal disorders including osteoarthritis, low back pain, kyphosis, lordosis, flat foot, and knock knee.
- **no_notes** — Meaning, Aims and objectives of yoga. Action: Create Module 3 notes covering the meaning, aims, and objectives of yoga.
- **no_notes** — Classification and importance of Yogic Asanas (Sitting, Standing, lying). Action: Create Module 3 notes on the classification and importance of sitting, standing, and lying yogic asanas.
- **no_notes** — Pranayama and Its Types. Action: Create Module 3 notes covering Pranayama and its types.
- **no_notes** — Active Lifestyle and Stress Management Through Yoga. Action: Create Module 3 notes on active lifestyle and stress management through yoga.
- **no_notes** — Understanding on substance abuse and addiction. Action: Create Module 3 notes on substance abuse and addiction.
- **no_notes** — Psychoactive substances & its ill effects: Alcohol. Action: Create Module 3 notes on alcohol and its ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Opioids. Action: Create Module 3 notes on opioids and their ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Cannabis. Action: Create Module 3 notes on cannabis and its ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Sedative. Action: Create Module 3 notes on sedatives and their ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Cocaine. Action: Create Module 3 notes on cocaine and its ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Other stimulants, including caffeine. Action: Create Module 3 notes on other stimulants (including caffeine) and their ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Hallucinogens. Action: Create Module 3 notes on hallucinogens and their ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Tobacco. Action: Create Module 3 notes on tobacco and its ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Volatile solvents. Action: Create Module 3 notes on volatile solvents and their ill effects.

#### Official Module Module 4

- First aid and principles of First Aid
- Primary survey: ABC (Airway, Breathing, Circulation)
- Qualities of a Good First Aider
- First aid measures for: Cuts and scrapes
- First aid measures for: Bruises
- First aid measures for: Sprains
- First aid measures for: Strains
- First aid measures for: Fractures
- First aid measures for: Burns
- First aid measures for: Nosebleeds
- First Aid Procedures: Cardiopulmonary Resuscitation (CPR)
- First Aid Procedures: Heimlich Maneuver
- First Aid Procedures: Applying a sling
- Sports injuries: Classification (Soft Tissue Injuries - Abrasion, Contusion, Laceration, Incision, Sprain & Strain)

Coverage findings:

- **no_notes** — First aid and principles of First Aid. Action: Create Module 4 notes on first aid and its principles.
- **no_notes** — Primary survey: ABC (Airway, Breathing, Circulation). Action: Create Module 4 notes on the ABC primary survey.
- **no_notes** — Qualities of a Good First Aider. Action: Create Module 4 notes on the qualities of a good first aider.
- **no_notes** — First aid measures for: Cuts and scrapes. Action: Create Module 4 notes on first aid measures for cuts and scrapes.
- **no_notes** — First aid measures for: Bruises. Action: Create Module 4 notes on first aid measures for bruises.
- **no_notes** — First aid measures for: Sprains. Action: Create Module 4 notes on first aid measures for sprains.
- **no_notes** — First aid measures for: Strains. Action: Create Module 4 notes on first aid measures for strains.
- **no_notes** — First aid measures for: Fractures. Action: Create Module 4 notes on first aid measures for fractures.
- **no_notes** — First aid measures for: Burns. Action: Create Module 4 notes on first aid measures for burns.
- **no_notes** — First aid measures for: Nosebleeds. Action: Create Module 4 notes on first aid measures for nosebleeds.
- **no_notes** — First Aid Procedures: Cardiopulmonary Resuscitation (CPR). Action: Create Module 4 notes on Cardiopulmonary Resuscitation (CPR) procedures.
- **no_notes** — First Aid Procedures: Heimlich Maneuver. Action: Create Module 4 notes on the Heimlich Maneuver procedure.
- **no_notes** — First Aid Procedures: Applying a sling. Action: Create Module 4 notes on applying a sling.
- **no_notes** — Sports injuries: Classification (Soft Tissue Injuries - Abrasion, Contusion, Laceration, Incision, Sprain & Strain). Action: Create Module 4 notes on the classification of sports injuries (abrasion, contusion, laceration, incision, sprain, and strain).

#### Official Module Additional Topics

- Need and Importance of Physical Education and its relevance in interdisciplinary context
- Understanding of the Endocrine System
- Developing a fitness profile
- Healthy foods habits for prevention and progression of Lifestyle Diseases
- Processed foods and unhealthy eating habits
- Depression - Anxiety - Stress
- Different ways of carrying an injured person
- Usage of Automated external defibrillator

Coverage findings:

- **no_notes** — Need and Importance of Physical Education and its relevance in interdisciplinary context. Action: Create notes covering the need, importance, and interdisciplinary relevance of Physical Education.
- **no_notes** — Understanding of the Endocrine System. Action: Create notes covering the Endocrine System.
- **no_notes** — Developing a fitness profile. Action: Create notes on developing a fitness profile.
- **no_notes** — Healthy foods habits for prevention and progression of Lifestyle Diseases. Action: Create notes on healthy food habits for preventing and managing lifestyle diseases.
- **no_notes** — Processed foods and unhealthy eating habits. Action: Create notes on processed foods and unhealthy eating habits.
- **no_notes** — Depression - Anxiety - Stress. Action: Create notes covering depression, anxiety, and stress.
- **no_notes** — Different ways of carrying an injured person. Action: Create notes on different ways of carrying an injured person.
- **no_notes** — Usage of Automated external defibrillator. Action: Create notes on the usage of an Automated External Defibrillator (AED).

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Syllabus reader findings:

- No note files are mapped or available for course UCPWT127 (Health and Wellness).

### Group B · PHYSICS FOR ELECTRICAL SCIENCE (`GBPHT121`) — ece, eee

- Official term label: SEMESTER S1/S2.
- Notes available: yes.
- Notes sources: `src/features/notes/physics-ece-module-1/notes.md`, `src/features/notes/physics-ece-module-2/notes.md`, `src/features/notes/physics-ece-module-3/notes.md`, `src/features/notes/physics-ece-module-4/notes.md`.
- Confidence: high.

#### Official Module Module 1

- Intrinsic semiconductor
- Derivation of density of electrons in conduction band and density of holes in valence band
- Intrinsic carrier concentration
- Variation of Intrinsic carrier concentration with temperature
- Extrinsic semiconductor (qualitative)
- Formation of p-n junction
- Fermi level in semiconductors-intrinsic and extrinsic
- Energy band diagram of p-n junction
- Qualitative description of charge flow across a p-n junction
- Forward and reverse biased p-n junctions
- Diode equation (Derivation)
- V-I Characteristics of p-n junction

Coverage findings:

- **covered** — Intrinsic semiconductor. Found in: physics-ece-module-1. Evidence: Page 2 and Page 3 explain energy bands in solids, pure (intrinsic) semiconductors, and list 6 key properties of intrinsic semiconductors.
- **partial** — Derivation of density of electrons in conduction band and density of holes in valence band. Found in: physics-ece-module-1. Evidence: Page 3 gives the full step-by-step derivation of electron concentration in the conduction band (n = N_c e^{(E_F - E_c)/kT}), but for holes in the valence band it only states 'Similarly, the expression for the density of holes in the valence band... is p = N_v e^{-(E_F - E_v)/kT}' without deriving it. Action: Add the step-by-step derivation for the density of holes in the valence band (using 1 - F(E) and valence band density of states).
- **covered** — Intrinsic carrier concentration. Found in: physics-ece-module-1. Evidence: Page 4 derives the complete expression for intrinsic carrier concentration n_i from n_i^2 = n p.
- **covered** — Variation of Intrinsic carrier concentration with temperature. Found in: physics-ece-module-1. Evidence: Page 4 has a dedicated section 'Variation of Intrinsic Carrier Concentration with Temperature' discussing exponential dependence on T and band gap E_g.
- **covered** — Extrinsic semiconductor (qualitative). Found in: physics-ece-module-1. Evidence: Page 5 covers doping, n-type and p-type semiconductors, energy band diagrams with donor/acceptor levels, and comparison tables.
- **covered** — Formation of p-n junction. Found in: physics-ece-module-1. Evidence: Page 6 explains the metallurgical interface, carrier diffusion, recombination, space-charge depletion region, and built-in potential V_0.
- **covered** — Fermi level in semiconductors-intrinsic and extrinsic. Found in: physics-ece-module-1. Evidence: Page 4 defines Fermi level and derives E_F = E_g/2 for intrinsic semiconductors; Page 5 explains and illustrates the qualitative shift of E_F toward E_c in n-type and toward E_v in p-type extrinsic semiconductors.
- **covered** — Energy band diagram of p-n junction. Found in: physics-ece-module-1. Evidence: Page 6 provides explanations and JSXGraph energy band diagrams for equilibrium, forward bias, and reverse bias conditions.
- **covered** — Qualitative description of charge flow across a p-n junction. Found in: physics-ece-module-1. Evidence: Page 6 describes diffusion current of majority carriers, drift current of minority carriers, and their balance at equilibrium as well as behavior under bias.
- **covered** — Forward and reverse biased p-n junctions. Found in: physics-ece-module-1. Evidence: Pages 6 and 7 explain barrier height changes, depletion width changes, and current flow under forward and reverse bias.
- **covered** — Diode equation (Derivation). Found in: physics-ece-module-1. Evidence: Page 7 derives I = I_0(e^{V/V_T} - 1) using Boltzmann relations for carrier densities across the junction.
- **covered** — V-I Characteristics of p-n junction. Found in: physics-ece-module-1. Evidence: Page 7 includes the V-I measurement circuit, V-I characteristic graph, and explanation of zero, forward, and reverse bias regions along with key terminology.

#### Official Module Module 2

- Semiconductor devices - Rectifiers- Full wave and Half wave
- Zener diode - V-I characteristics
- Zener breakdown and Avalanche breakdown
- Tunnel diode - V-I characteristics
- Applications of Zener and Tunnel diodes
- Photonic devices (qualitative) - Photo detectors (Junction and PIN photodiodes)
- Applications (of Photo detectors)
- Solar cells- V-I Characteristics
- Efficiency (of Solar cells)
- Stringing of Solar cells to solar panel
- Light Emitting Diode
- Applications of LED

Coverage findings:

- **covered** — Semiconductor devices - Rectifiers- Full wave and Half wave. Found in: physics-ece-module-2. Evidence: Pages 2 and 3 cover half-wave rectifier, centre-tap full-wave rectifier, and bridge full-wave rectifier, including circuits, waveforms, working principles, efficiency derivations, and ripple factor.
- **covered** — Zener diode - V-I characteristics. Found in: physics-ece-module-2. Evidence: Page 4 covers Zener diode construction, symbol, working principle under forward and reverse bias, and I-V characteristic curve.
- **covered** — Zener breakdown and Avalanche breakdown. Found in: physics-ece-module-2. Evidence: Page 4 explains Zener breakdown and provides an 8-point comparison table between Zener breakdown and Avalanche breakdown.
- **covered** — Tunnel diode - V-I characteristics. Found in: physics-ece-module-2. Evidence: Page 5 explains quantum tunneling, heavy doping, symbol, and the V-I characteristic curve showing peak point, negative resistance region, valley point, and normal diffusion region.
- **covered** — Applications of Zener and Tunnel diodes. Found in: physics-ece-module-2. Evidence: Page 4 lists applications of Zener diodes (voltage regulator, over-voltage protection, clipping/clamping); Page 5 lists applications of Tunnel diodes (ultra-high-speed switches, oscillators, logic memory, satellite communication).
- **covered** — Photonic devices (qualitative) - Photo detectors (Junction and PIN photodiodes). Found in: physics-ece-module-2. Evidence: Page 6 defines photonics and photodetectors, and explains construction, dark current, photocurrent, and performance of Junction and PIN photodiodes.
- **partial** — Applications (of Photo detectors). Found in: physics-ece-module-2. Evidence: Page 6 briefly mentions that photodetectors are used at the receiving end of optical communication links and in high-frequency microwave/gigabit optical fiber communications, but lacks a dedicated section listing general applications of photodetectors. Action: Add a dedicated 'Applications of Photodiodes / Photodetectors' list in Module 2 Page 6.
- **covered** — Solar cells- V-I Characteristics. Found in: physics-ece-module-2. Evidence: Page 7 explains solar cell construction, photovoltaic principle, I-V and P-V curves, I_sc, V_oc, and P_max.
- **covered** — Efficiency (of Solar cells). Found in: physics-ece-module-2. Evidence: Page 7 defines conversion efficiency (eta) and Fill Factor (f) with formulas.
- **covered** — Stringing of Solar cells to solar panel. Found in: physics-ece-module-2. Evidence: Page 7 explains series and parallel solar panel stringing with equations, tables, and JSXGraph I-V curves for 4-cell strings.
- **covered** — Light Emitting Diode. Found in: physics-ece-module-2. Evidence: Page 8 explains LED electroluminescence, working principle, band gap vs wavelength formula, materials, features, advantages, and disadvantages.
- **covered** — Applications of LED. Found in: physics-ece-module-2. Evidence: Page 8 has a dedicated 'Applications' section for LEDs.

#### Official Module Module 3

- Super conductivity
- Transition temperature
- Critical field
- Meissner effect
- Type I and Type II Super conductors
- Applications of superconductors
- Dielectric constant
- Polarization
- Permittivity- relative permittivity
- Relation between polarization and dielectric constant
- Types of Polarization
- Internal fields in liquids and solids
- Clausius Mossotti Relation
- Dielectric loss(qualitative)
- Dielectric breakdown (qualitative)

Coverage findings:

- **missing** — Super conductivity. Evidence: Module 3 notes ('Dielectrics - Module 3') only cover dielectrics. Superconductivity is completely absent. Action: Add comprehensive notes on Superconductivity to Module 3.
- **missing** — Transition temperature. Evidence: Absent from Module 3 notes. Action: Add explanation of superconducting transition (critical) temperature T_c to Module 3.
- **missing** — Critical field. Evidence: Absent from Module 3 notes. Action: Add explanation and temperature-dependence formula of critical magnetic field H_c to Module 3.
- **missing** — Meissner effect. Evidence: Absent from Module 3 notes. Action: Add explanation and diagrams of the Meissner effect (perfect diamagnetism) to Module 3.
- **missing** — Type I and Type II Super conductors. Evidence: Absent from Module 3 notes. Action: Add explanations, magnetization curves, and comparison table for Type I and Type II superconductors in Module 3.
- **missing** — Applications of superconductors. Evidence: Absent from Module 3 notes. Action: Add applications of superconductors (e.g., SQUIDs, Maglev, MRI, lossless power transmission) to Module 3.
- **covered** — Dielectric constant. Found in: physics-ece-module-3. Evidence: Page 2 defines dielectric materials and dielectric constant (relative permittivity epsilon_r = epsilon / epsilon_0).
- **covered** — Polarization. Found in: physics-ece-module-3. Evidence: Page 3 defines polarization P, polarizability alpha, susceptibility chi, and relates P = N alpha E.
- **covered** — Permittivity- relative permittivity. Found in: physics-ece-module-3. Evidence: Page 2 defines permittivity of medium, permittivity of free space, and relative permittivity along with physical properties.
- **covered** — Relation between polarization and dielectric constant. Found in: physics-ece-module-3. Evidence: Pages 3 and 4 derive D = epsilon_0 E + P and P = E epsilon_0 (epsilon_r - 1) using Gauss's law.
- **covered** — Types of Polarization. Found in: physics-ece-module-3. Evidence: Page 5 explains Electronic, Ionic, Orientation, and Space Charge polarization with formulas and characteristics.
- **covered** — Internal fields in liquids and solids. Found in: physics-ece-module-3. Evidence: Page 6 defines internal (Lorentz) field and derives E_m = E + P/(3 epsilon_0) using a spherical cavity model.
- **covered** — Clausius Mossotti Relation. Found in: physics-ece-module-3. Evidence: Page 7 derives the Clausius-Mossotti equation (epsilon_r - 1)/(epsilon_r + 2) = N alpha / (3 epsilon_0).
- **covered** — Dielectric loss(qualitative). Found in: physics-ece-module-3. Evidence: Page 8 explains dielectric loss in alternating fields and gives the power loss formula P = V^2 omega C tan(phi).
- **covered** — Dielectric breakdown (qualitative). Found in: physics-ece-module-3. Evidence: Pages 7 and 8 define dielectric breakdown and explain intrinsic, thermal, electrochemical, discharge, and defect breakdown mechanisms.

#### Official Module Module 4

- Optical processes - Absorption, Spontaneous emission and stimulated emission
- Properties of laser
- Principle of laser - conditions for sustained lasing
- Population inversion
- Pumping
- Metastable states
- Basic components of laser - Active medium- Optical resonant cavity
- Construction and working of Ruby laser
- Semiconductor Laser (Qualitative)
- Applications of laser
- Optical fiber-Principle of propagation of light
- Types of fibers-Step index and Graded index fibers
- Numerical aperture –Derivation
- Applications of optical fibers
- Fiber optic communication system (block diagram)

Coverage findings:

- **covered** — Optical processes - Absorption, Spontaneous emission and stimulated emission. Found in: physics-ece-module-4. Evidence: Page 2 explains induced absorption, spontaneous emission, and stimulated emission with rate equations, Einstein coefficients, and a 9-point comparison table.
- **covered** — Properties of laser. Found in: physics-ece-module-4. Evidence: Page 2 explains directionality, monochromaticity, coherence, and brightness; Page 5 compares laser light with ordinary light.
- **covered** — Principle of laser - conditions for sustained lasing. Found in: physics-ece-module-4. Evidence: Pages 2, 3, and 4 explain how stimulated emission dominates spontaneous emission and list the conditions for sustained lasing (large radiation density via optical feedback, population inversion, metastable state).
- **covered** — Population inversion. Found in: physics-ece-module-4. Evidence: Page 3 explains Boltzmann distribution in thermal equilibrium and the non-equilibrium condition N_2 > N_1 required for lasing.
- **covered** — Pumping. Found in: physics-ece-module-4. Evidence: Pages 3 and 4 describe optical, electrical, chemical, and electron-beam pumping mechanisms.
- **covered** — Metastable states. Found in: physics-ece-module-4. Evidence: Page 3 explains the long lifetime (10^-3 to 10^-2 s) of metastable states and why two-level systems cannot sustain population inversion.
- **covered** — Basic components of laser - Active medium- Optical resonant cavity. Found in: physics-ece-module-4. Evidence: Page 4 covers the three basic components: active medium, pumping agent, and optical resonator (with JSXGraph diagram and working).
- **covered** — Construction and working of Ruby laser. Found in: physics-ece-module-4. Evidence: Page 5 details the active medium (Al_2O_3:Cr^3+), xenon flash tube pumping, resonant cavity, construction diagram, and three-level energy transition diagram of a Ruby laser.
- **covered** — Semiconductor Laser (Qualitative). Found in: physics-ece-module-4. Evidence: Page 5 covers construction, working, population inversion under high forward bias, wavelength relation, advantages, and comparison with LED.
- **covered** — Applications of laser. Found in: physics-ece-module-4. Evidence: Page 5 has a detailed 'Applications of Lasers' section covering medical, microelectronic, industrial processing, heat treatment, and pure science applications.
- **covered** — Optical fiber-Principle of propagation of light. Found in: physics-ece-module-4. Evidence: Page 6 explains Total Internal Reflection (TIR), critical angle conditions, and the coaxial structure of an optical fiber (core, cladding, buffer coating).
- **covered** — Types of fibers-Step index and Graded index fibers. Found in: physics-ece-module-4. Evidence: Pages 6 and 7 cover step-index and graded-index fibers (single-mode and multimode), refractive index profiles, ray paths, and comparison tables.
- **covered** — Numerical aperture –Derivation. Found in: physics-ece-module-4. Evidence: Page 7 defines Numerical Aperture and Acceptance Angle, derives NA = sqrt(n_1^2 - n_2^2), and provides 3 solved numerical problems.
- **covered** — Applications of optical fibers. Found in: physics-ece-module-4. Evidence: Page 7 lists advantages and general/medical applications of optical fibers.
- **covered** — Fiber optic communication system (block diagram). Found in: physics-ece-module-4. Evidence: Page 7 provides the block diagram of an optical communication system and explains Units 1 through 7 (telephone, encoder, optical transmitter, fiber link, photodetector, decoder, receiver telephone).

Syllabus reader findings:

- Module 1, Page 4: An image of PN junction diode formation (![PN junction diode formation and carrier diffusion](/assets/notes/ece/s1/physics/module-1/p024-1-clean.webp)) and an out-of-place sentence ('The built-in barrier potential for silicon (Si) is 0.7 V and for germanium (Ge) is 0.3 V at equilibrium.') are inserted in the middle of the 'Intrinsic Carrier Concentration and Fermi Level' section.
- Module 1, Page 5: In the 'Difference between N-type and P-type Semiconductors' table, rows 3 and 4 are duplicated at the bottom of the table after row 7.
- Module 1, Page 5: In the 'Difference between Intrinsic and Extrinsic Semiconductors' table, item 6 incorrectly claims that an extrinsic semiconductor 'conducts at zero Kelvin' (at 0 K, carriers in non-degenerate extrinsic semiconductors are frozen out).
- Module 2, Page 2: The Peak Inverse Voltage (PIV) for a half-wave rectifier is stated as 'PIV = 2V_m', which is factually incorrect for a standard half-wave rectifier (it should be V_m).
- Module 2, Page 4: In the 'Comparison: p-n Junction Diode vs. Zener Diode' table, the 4th row of the right column is misnumbered as '5.' instead of '4.'.
- Module 3, Page 3: Malformed LaTeX in the bullet for Polarizability: '(\boldsymbol{\rho} or \boldsymbol{\frac{}{}\text{or }\text{\textbf{\textit{$\boldsymbol{\text{\textalpha}}$}}}})' and Susceptibility: '(\boldsymbol{\text{\textbf{\textit{$\boldsymbol{\text{\textchi}}$}}}})'.
- Module 3, Page 3: Typo in the electric displacement formula: 'D = \varepsilon \varepsilon_0 E = \varepsilon_r \varepsilon_0 E' (should be D = \varepsilon E = \varepsilon_r \varepsilon_0 E).
- Module 3, Page 5: Formula error in Electronic Polarization: after substituting \alpha_e = 4\pi\varepsilon_0 R^3 into P_e = N \alpha_e E, the notes write '\therefore P_e = 4\pi\varepsilon_0 N \alpha_e E R^3', which retains \alpha_e redundantly (should be P_e = 4\pi\varepsilon_0 N R^3 E).
- Module 4, Page 4: Formula error in Einstein Coefficients section: the ratio of spontaneous to stimulated emission is written as 'R = \frac{h\nu}{e^{kT} - 1}', which is dimensionally and mathematically incorrect (should be R = e^{h\nu/(kT)} - 1).
- Module 4, Page 5: Under 'Electron Beam Pumping' (Pages 3 & 4), it states electron beam pumping is used in semiconductor lasers, whereas Page 5 states semiconductor lasers use direct electrical pumping via forward bias current across a p-n junction.
- Module 4, Page 6: Typo in the numbered list under 'Structure of an Optical Fiber': item 2 is labeled 'im) Cladding' instead of 'ii) Cladding'.

Uncertainties:

- Visual contents of external WebP image files (e.g., /assets/notes/ece/s1/physics/module-*/p*.webp) cannot be directly inspected, though surrounding text and JSXGraph blocks substantively confirm the covered topics.

### Group B · ENGINEERING GRAPHICS AND COMPUTER AIDED DRAWING (`GMEST103`) — ece, eee

- Official term label: SEMESTER S1 (B.Tech 2024 –S1/S2).
- Notes available: yes.
- Notes sources: `src/features/notes/graphics-m1/notes.md`, `src/features/notes/graphics-m2/notes.md`, `src/features/notes/graphics-m3/notes.md`, `src/features/notes/graphics-m4/notes.md`.
- Confidence: high.

#### Official Module Module 1

- Introduction: Relevance of technical drawing in engineering field (No questions for the end semester examination)
- Types of lines (No questions for the end semester examination)
- Dimensioning (No questions for the end semester examination)
- BIS code of practice for technical drawing (No questions for the end semester examination)
- Projection of points in different quadrants
- Projection of straight lines inclined to one plane
- Projection of straight lines inclined to both planes
- Trace of a line
- Inclination of lines with reference planes
- True length and true inclinations of line inclined to both the reference planes

Coverage findings:

- **partial** — Introduction: Relevance of technical drawing in engineering field (No questions for the end semester examination). Found in: graphics-m1. Evidence: Page 1 briefly states 'Engineering drawing is how engineers describe a solid object on flat paper', but does not substantively elaborate on its broader relevance in the engineering field. Action: Optional (non-ESE topic): Add a brief paragraph explaining the role and importance of technical drawings in engineering communication and manufacturing.
- **covered** — Types of lines (No questions for the end semester examination). Found in: graphics-m1. Evidence: Page 2 ('Drawing basics: lines and dimensions') includes a table of line types (continuous thick, continuous thin, dashed, chain thin) and their uses.
- **covered** — Dimensioning (No questions for the end semester examination). Found in: graphics-m1. Evidence: Page 2 explains dimension lines, extension lines, placement of numbers, and millimetre conventions.
- **partial** — BIS code of practice for technical drawing (No questions for the end semester examination). Found in: graphics-m1. Evidence: Page 2 mentions 'The BIS code of practice for technical drawing is not asked in the end-semester examination' and gives basic line/dimension rules, without citing specific BIS standards (e.g., SP 46) or sheet/lettering conventions. Action: Optional (non-ESE topic): Mention BIS SP 46 conventions briefly if desired for internal/lab reference.
- **covered** — Projection of points in different quadrants. Found in: graphics-m1. Evidence: Page 3 ('Planes, quadrants and points') explains HP, VP, the four quadrants, first-angle projection, and provides a worked example projecting points A, B, C, and D in all four quadrants.
- **partial** — Projection of straight lines inclined to one plane. Found in: graphics-m1. Evidence: Page 4 ('Positions of a line') summarizes lines parallel to both planes, perpendicular to one plane, and parallel to one plane/inclined to the other in a table, but all worked examples on Pages 7–13 focus on lines inclined to both planes. Action: Add 1–2 simple worked examples specifically showing the projection of a straight line inclined to one plane and parallel to the other.
- **covered** — Projection of straight lines inclined to both planes. Found in: graphics-m1. Evidence: Extensively covered across Pages 4 and 6–13 with line rotation, reverse rotation, plane rotation (trapezoidal), midpoint, profile plane, trace-based, and application problems.
- **covered** — Trace of a line. Found in: graphics-m1. Evidence: Page 5 ('Traces of a line') defines HT and VT and how to locate them; Pages 7, 9, 11, and 12 work numerous problems finding traces and building projections from given traces.
- **covered** — Inclination of lines with reference planes. Found in: graphics-m1. Evidence: Page 4 defines true angles (theta, phi) and apparent angles (alpha, beta) with reference planes HP and VP, with worked problems throughout Pages 7–13.
- **covered** — True length and true inclinations of line inclined to both the reference planes. Found in: graphics-m1. Evidence: Pages 4, 7, 8, 9, and 10 explain and demonstrate finding true length and true inclinations (theta, phi) via both the Line Rotation Method and the Plane Rotation (Trapezoidal) Method.

#### Official Module Module 2

- Projection of Simple solids (Triangular, Rectangle, Square, Pentagonal and Hexagonal Prisms, Pyramids, Cone and Cylinder only)
- Projection of solids in simple position including profile view
- Projection of solids with axis inclined to one of the reference planes
- Projection of solids with axis inclined to both reference planes

Coverage findings:

- **partial** — Projection of Simple solids (Triangular, Rectangle, Square, Pentagonal and Hexagonal Prisms, Pyramids, Cone and Cylinder only). Found in: graphics-m2. Evidence: Pages 2–12 cover Triangular, Square, Pentagonal, and Hexagonal Prisms and Pyramids, Cones, Cylinders, and Cubes. However, Rectangular Prisms/Pyramids are not explicitly worked in Module 2. Action: Add at least one example or note covering a rectangular prism or rectangular pyramid in Module 2.
- **partial** — Projection of solids in simple position including profile view. Found in: graphics-m2. Evidence: Page 2 explains setting up solids in simple position (Stage 1 of all problems). Pages 5, 8 (Problem 73), and 10 (Problems 57, 84) cover solids with axes/edges lying on a Profile Plane, but constructing a separate third projection (side/profile view across an X1Y1 line) for a solid in simple position is not explicitly demonstrated in Module 2 (it only appears in Module 3, Page 9 for sections). Action: Add a dedicated explanation and worked example in Module 2 showing the construction of a profile view (side view) alongside the front and top views of a simple solid in simple position.
- **covered** — Projection of solids with axis inclined to one of the reference planes. Found in: graphics-m2. Evidence: Pages 3, 4, and 6 explain tilting a solid to HP or VP (Stage 2 of the change-of-position method), and Page 4 & Page 6 include standalone two-stage worked examples (cone resting on a generator on HP with axis parallel to VP; freely suspended square pyramid with axis parallel to VP), in addition to Stage 2 of all multi-stage problems.
- **covered** — Projection of solids with axis inclined to both reference planes. Found in: graphics-m2. Evidence: Thoroughly covered across Pages 3–12 with both direct rotation (apparent angle/edge given) and locus method (true angles given) for solids resting on HP or VP, as well as freely suspended pyramids.

#### Official Module Module 3

- Sections of Solids: Sections of Prisms, Pyramids, Cone and Cylinder only, with axis in vertical position and cut by different section planes
- True shape of the sections (Exclude true shape given problems)
- Development of Surfaces: Development of surfaces of the solids
- Development of surfaces of solids cut by different section planes (Exclude problems with through holes)

Coverage findings:

- **covered** — Sections of Solids: Sections of Prisms, Pyramids, Cone and Cylinder only, with axis in vertical position and cut by different section planes. Found in: graphics-m3. Evidence: Pages 2–3 and 7–9 cover sections of vertical prisms, pyramids, cylinders, and cones cut by horizontal planes, AIP, AVP, and profile cutting planes.
- **covered** — True shape of the sections (Exclude true shape given problems). Found in: graphics-m3. Evidence: Pages 3 and 7–9 thoroughly explain and demonstrate finding the true shape of sections using auxiliary reference lines (x1y1) and side views. Note: Pages 4 and 10 also include 'reverse sectioning problems' (finding the cutting plane from a given true shape), which the syllabus explicitly excludes. Action: Mark or remove Page 10 (and the reverse sectioning portion of Page 4) as excluded by the KTU 2024 syllabus ('Exclude true shape given problems').
- **covered** — Development of Surfaces: Development of surfaces of the solids. Found in: graphics-m3. Evidence: Pages 5, 6, 11, and 12 explain and demonstrate full lateral surface developments of intact prisms, cylinders, pyramids, and cones using parallel-line and radial-line methods (including shortest-path problems).
- **covered** — Development of surfaces of solids cut by different section planes (Exclude problems with through holes). Found in: graphics-m3. Evidence: Pages 5, 6, 11, and 12 provide numerous worked examples of developing truncated prisms, cylinders (including compound/mitre cuts), pyramids, frustums, and cones cut by inclined and horizontal planes, appropriately excluding through-hole development problems.

#### Official Module Module 4

- Isometric Projection: Isometric scale
- Isometric View and Projections of Prisms, Pyramids, Cone, Cylinder, Sphere, Hemisphere
- Isometric View and Projections of combinations of solids
- Computer Aided Drawing (CAD): Introduction, Role of CAD in design and development of new products, Advantages of CAD (CAD, only internal evaluation)
- Creating two-dimensional drawing with dimensions using suitable software (CAD, only internal evaluation)

Coverage findings:

- **covered** — Isometric Projection: Isometric scale. Found in: graphics-m4. Evidence: Page 2 ('Isometric Axes, Planes, and the Isometric Scale') explains the foreshortening ratio (cos 30° / cos 45° ≈ 0.8165), the distinction between Isometric Projection and Isometric View, and step-by-step construction of a graphical isometric scale.
- **covered** — Isometric View and Projections of Prisms, Pyramids, Cone, Cylinder, Sphere, Hemisphere. Found in: graphics-m4. Evidence: Pages 2–6 explain and demonstrate isometric views and projections of cubes, hexagonal and pentagonal prisms, pyramids, cylinders, cones, frustums, hemispheres, and spheres using the box method, four-center ellipse method, and sphere true-radius rule.
- **covered** — Isometric View and Projections of combinations of solids. Found in: graphics-m4. Evidence: Pages 5–9 extensively cover coaxial combinations of polyhedra, cylinders, cones, frustums, hemispheres, and spheres.
- **missing** — Computer Aided Drawing (CAD): Introduction, Role of CAD in design and development of new products, Advantages of CAD (CAD, only internal evaluation). Evidence: No mention of Computer Aided Drawing (CAD), its role in product design/development, or its advantages appears anywhere in graphics-m4. Action: Add a section in Module 4 covering CAD introduction, role in design and development of new products, and advantages of CAD (noting it is for internal evaluation only).
- **missing** — Creating two-dimensional drawing with dimensions using suitable software (CAD, only internal evaluation). Evidence: No content on creating 2D drawings with dimensions in CAD software appears in graphics-m4. Action: Add a guide/notes section in Module 4 on creating 2D drawings with dimensions using CAD software (for internal/lab evaluation).

Syllabus reader findings:

- graphics-m1, Page 7, Problem 2: The printed values on the figure (a'b' = 47 mm, ab = 60 mm, theta = 23°, phi = 44°) do not match the given coordinates (which mathematically yield a'b' = 60 mm, ab = 70.7 mm, theta = 19.5°, phi = 36.9°).
- graphics-m1, Page 12, Problem 38 (Q209): The summary box on the source image prints 'FV - 40 mm', which is a typo for the 60 mm front view stated in the problem text.
- graphics-m1, Page 13, Problems Q43 and 49: LaTeX rendering corruption in text ('	heta = 22.6^	ext{o}', '	ext{phi} = 30.8^	ext{o}') where backslashes were stripped into control characters ('	heta' -> 'heta', '	imes' -> 'imes').
- graphics-m2, Page 8, Problem 69: The problem text states the axis is inclined at 40° to HP and the apex is away from VP, whereas the worked drawing inclines generator 5'o' at 40° to XY and places the apex closer to XY (towards VP).
- graphics-m2, Page 8, Problem 219: The summary banner on the problem image prints 'TOP VIEW 30° TO XY', whereas the problem text and solution use 35°.
- graphics-m2, Page 9, Problem 62: The problem statement says 'triangular face containing that edge perpendicular to VP', which is geometrically imprecise for a single diagonal slant edge.
- graphics-m2, Page 10, Problem 84: Although the locus construction and label state beta = 90° (since 45° + 45° = 90°), the Stage 3 drawing rotates the top view at 45° to xy instead of 90°.
- graphics-m2, Page 11, 'The idea': Typo in Greek letter symbol ('($Ά$)' instead of '($\phi$)').
- graphics-m3, Pages 4 and 10: Includes 'Reverse Sectioning Problems' (True shape given problems) and sections of a Tetrahedron (Problems 110, 111), both of which are outside the KTU 2024 ESE scope ('Prisms, Pyramids, Cone and Cylinder only' and 'Exclude true shape given problems').
- graphics-m3, Page 7, Problem 86 (87): The 30 mm bisecting height is measured along the right slant edge o'c' in the drawing rather than along the vertical axis.
- graphics-m3, Page 7, Problem 91 (88): The problem text states the plane meets the axis 25 mm from the vertex, but the construction places it 25 mm above the base at the right slant edge.
- graphics-m3, Page 10, Problem 109: The figure labels angle theta = 55° against a vertical line instead of the horizontal xy line.
- graphics-m3, Page 10, Problem 123: Inconsistent height values between the data box (H = 60 mm), the elevation dimension (57 mm), and true geometry (43.3 mm).
- graphics-m3, Page 11, Problem 133: The problem text specifies a 45° cutting plane, but the worked drawing uses a 30° cutting plane.
- graphics-m3, Page 11, Problem 134: The summary banner on the figure states 30°, whereas the problem text and drawing use 45°.
- graphics-m4, Page 9, Problem 165: The specification table lists the hemisphere diameter as 40 mm, while the front orthographic view labels it as Ø50 mm.
- graphics-m4, Page 9, Problem 199: The problem text states a bottom base side of 50 mm, while the specification banner and drawings use 30 mm.

Uncertainties:

- Visual contents of external WebP figures are verified only through the accompanying step-by-step markdown text, alt text, and explicit 'Watch out' callouts in the notes.

### Group B · CHEMISTRY FOR INFORMATION SCIENCE & ELECTRICAL SCIENCE (GROUPS A & B) (`GXCYT122`) — ece, eee

- Official term label: SEMESTER S1/S2.
- Notes available: yes.
- Notes sources: `src/features/notes/chemistry-ece-module-1/notes.md`, `src/features/notes/chemistry-ece-module-2/notes.md`, `src/features/notes/chemistry-ece-module-3/notes.md`, `src/features/notes/chemistry-ece-module-4/notes.md`, `src/features/notes/chemistry-module-1/notes.md`, `src/features/notes/chemistry-module-2/notes.md`, `src/features/notes/chemistry-module-3/notes.md`, `src/features/notes/chemistry-module-4/notes.md`.
- Confidence: high.

#### Official Module Module 1

- Electrochemical Cell
- Electrode potential
- Nernst equation for single electrode and cell (Numerical problems)
- Reference electrodes – SHE & Calomel electrode – Construction and Working
- Electrochemical series - Applications
- Glass Electrode & pH Measurement
- Conductivity - Measurement using Digital conductivity meter
- Li-ion battery construction and working
- H2-O2 fuel cell (acid electrolyte only) construction and working
- Corrosion – Electrochemical corrosion mechanism (acidic & alkaline medium)
- Galvanic series
- Corrosion control methods - Cathodic Protection - Sacrificial anodic protection and impressed current cathodic protection
- Electroplating of copper
- Electroless plating of copper

Coverage findings:

- **covered** — Electrochemical Cell. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered in detail in chemistry-module-1 (page 1: Galvanic vs Electrolytic cells, Daniell cell, salt bridge) and chemistry-ece-module-1 (page 2).
- **covered** — Electrode potential. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered in chemistry-module-1 (page 2: origin of single electrode potential, Helmholtz electrical double layer, standard electrode potential) and chemistry-ece-module-1 (pages 2-3).
- **partial** — Nernst equation for single electrode and cell (Numerical problems). Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: chemistry-module-1 (pages 3-4) covers derivation and both single-electrode and full-cell numericals thoroughly. However, chemistry-ece-module-1 (page 4) only solves single-electrode, free energy, and equilibrium constant numericals without a non-standard full-cell EMF numerical problem. Action: In chemistry-ece-module-1 (page 4), add solved numerical problems for non-standard cell potential (E_cell) using the Nernst equation, or consolidate onto chemistry-module-1.
- **covered** — Reference electrodes – SHE & Calomel electrode – Construction and Working. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered in chemistry-module-1 (pages 5-6) and chemistry-ece-module-1 (page 5), detailing construction, half-cell notation, reactions, and potential measurement.
- **covered** — Electrochemical series - Applications. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered in chemistry-module-1 (page 2) and chemistry-ece-module-1 (page 3), including EMF calculation, relative ease of oxidation/reduction, displacement, and spontaneity.
- **covered** — Glass Electrode & pH Measurement. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered in chemistry-module-1 (page 7) and chemistry-ece-module-1 (page 5), explaining construction, ion-exchange principle, Nernstian pH relation, and potentiometric setup with SCE. Action: Fix the misclassification in chemistry-ece-module-1 (page 5) where glass electrode is called a secondary/internal reference electrode instead of an ion-selective indicator electrode.
- **covered** — Conductivity - Measurement using Digital conductivity meter. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered in chemistry-module-1 (page 10) and chemistry-ece-module-1 (pages 5-6), defining specific conductance, cell constant, calibration with 0.1 M KCl, measurement procedure, and solved numericals.
- **covered** — Li-ion battery construction and working. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered in chemistry-module-1 (page 8) and chemistry-ece-module-1 (page 7), explaining anode, cathode, organic electrolyte, separator, and charge/discharge intercalation reactions.
- **partial** — H2-O2 fuel cell (acid electrolyte only) construction and working. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Syllabus explicitly specifies '(acid electrolyte only)'. chemistry-module-1 (page 9) properly covers the acid electrolyte (H3PO4) H2-O2 fuel cell. However, chemistry-ece-module-1 (page 7) only covers the alkaline electrolyte (25% KOH/NaOH) H2-O2 fuel cell with OH- reactions. Action: Replace the alkaline H2-O2 fuel cell in chemistry-ece-module-1 (page 7) with the acid electrolyte H2-O2 fuel cell as strictly mandated by the syllabus.
- **covered** — Corrosion – Electrochemical corrosion mechanism (acidic & alkaline medium). Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered in chemistry-module-1 (pages 11-12) and chemistry-ece-module-1 (page 8), detailing hydrogen evolution and oxygen absorption mechanisms in both acidic and alkaline media.
- **covered** — Galvanic series. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered in chemistry-module-1 (page 13) and chemistry-ece-module-1 (page 8), including comparison with the electrochemical series.
- **covered** — Corrosion control methods - Cathodic Protection - Sacrificial anodic protection and impressed current cathodic protection. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered in chemistry-module-1 (page 14) and chemistry-ece-module-1 (pages 8-9).
- **covered** — Electroplating of copper. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered in chemistry-module-1 (page 15) and chemistry-ece-module-1 (page 9).
- **partial** — Electroless plating of copper. Found in: chemistry-module-1, chemistry-ece-module-1. Evidence: Covered accurately in chemistry-module-1 (page 16). However, in chemistry-ece-module-1 (page 9), the overall reaction under 'Electroless Plating of Copper' is erroneously given for Nickel (Ni2+ + H2PO2- + H2O -> Ni + H2PO3- + 2H+) instead of Copper. Action: Correct the overall chemical equation for electroless copper plating in chemistry-ece-module-1 (page 9) to Cu2+ + 2HCHO + 4OH- -> Cu + 2HCOO- + 2H2O + H2.

#### Official Module Module 2

- Nanomaterials - Classification based on Dimension & Materials
- Synthesis – Sol gel & Chemical Reduction
- Applications of nanomaterials
- Carbon Nanotubes – structure, properties & application
- Fullerenes – structure, properties & application
- Graphene – structure, properties & application
- Carbon Quantum Dots – structure, properties & application
- Polymers - Fire Retardant Polymers - Halogenated & Non-halogenated polymers (Examples only)
- Conducting Polymers - Classification
- Polyaniline - synthesis, properties and applications
- Polypyrrole - synthesis, properties and applications
- Organic electronic materials and devices - construction, working and applications of Organic Light Emitting Diode (OLED)
- Organic electronic materials and devices - construction, working and applications of Dye-Sensitized Solar Cells (DSSC)
- Materials used in Quantum computing Technology
- Super capacitors
- Spintronics

Coverage findings:

- **covered** — Nanomaterials - Classification based on Dimension & Materials. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 1) and chemistry-ece-module-2 (page 2), detailing 0D, 1D, 2D, 3D and carbon, metal, nanocomposite, dendrimer, and biological nanomaterials.
- **covered** — Synthesis – Sol gel & Chemical Reduction. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 2) and chemistry-ece-module-2 (page 2).
- **covered** — Applications of nanomaterials. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 6) and chemistry-ece-module-2 (page 2).
- **covered** — Carbon Nanotubes – structure, properties & application. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 5) and chemistry-ece-module-2 (page 3), including SWCNT (armchair, zigzag, chiral) and MWCNT structures, properties, and applications.
- **covered** — Fullerenes – structure, properties & application. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 4) and chemistry-ece-module-2 (pages 3-4).
- **covered** — Graphene – structure, properties & application. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 3) and chemistry-ece-module-2 (page 4).
- **covered** — Carbon Quantum Dots – structure, properties & application. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 6) and chemistry-ece-module-2 (page 4).
- **covered** — Polymers - Fire Retardant Polymers - Halogenated & Non-halogenated polymers (Examples only). Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 7) and chemistry-ece-module-2 (page 5) with examples and structures of both halogenated (PVC, neoprene, polybromostyrene) and non-halogenated (novolac, bakelite, polyimides) polymers.
- **covered** — Conducting Polymers - Classification. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 8) and chemistry-ece-module-2 (page 5), detailing intrinsically (conjugated, doped: p-doping, n-doping) and extrinsically (filled, blended) conducting polymers.
- **covered** — Polyaniline - synthesis, properties and applications. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 9) and chemistry-ece-module-2 (page 6).
- **covered** — Polypyrrole - synthesis, properties and applications. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 9) and chemistry-ece-module-2 (page 6).
- **partial** — Organic electronic materials and devices - construction, working and applications of Organic Light Emitting Diode (OLED). Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 10: construction, working, and applications in televisions, smartphones, smartwatches, and automotive displays). In chemistry-ece-module-2 (page 6), structure, working, advantages, and disadvantages are covered, but explicit applications are omitted. Action: Add explicit applications of OLEDs to chemistry-ece-module-2 (page 6).
- **covered** — Organic electronic materials and devices - construction, working and applications of Dye-Sensitized Solar Cells (DSSC). Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 11) and chemistry-ece-module-2 (pages 6-7), detailing components, charge cycle, and applications.
- **covered** — Materials used in Quantum computing Technology. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 13) and chemistry-ece-module-2 (page 7).
- **covered** — Super capacitors. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 12) and chemistry-ece-module-2 (page 7).
- **covered** — Spintronics. Found in: chemistry-module-2, chemistry-ece-module-2. Evidence: Covered in chemistry-module-2 (page 14) and chemistry-ece-module-2 (page 7).

#### Official Module Module 3

- Spectroscopy - Types of spectra
- Molecular energy levels
- Beer Lambert’s law – Numerical problems
- Electronic Spectroscopy – Principle
- Types of electronic transitions
- Role of conjugation in absorption maxima
- Electronic Spectroscopy – Instrumentation
- Electronic Spectroscopy – Applications
- Vibrational spectroscopy – Principle
- Number of vibrational modes
- Vibrational modes of CO2 and H2O
- Vibrational spectroscopy – Applications
- Thermal Analysis: Dielectric Thermal Analysis (DETA) of Polymers - Working and Application
- Electron Microscopic Techniques: SEM - Principle, instrumentation and Applications

Coverage findings:

- **covered** — Spectroscopy - Types of spectra. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 1) and chemistry-ece-module-3 (page 2), explaining absorption, emission, atomic, and molecular spectra.
- **covered** — Molecular energy levels. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 1) and chemistry-ece-module-3 (page 2), covering electronic, vibrational, rotational, and translational energy levels.
- **covered** — Beer Lambert’s law – Numerical problems. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (pages 2-3) and chemistry-ece-module-3 (pages 2-3), with derivation and multiple solved numerical problems.
- **covered** — Electronic Spectroscopy – Principle. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 4) and chemistry-ece-module-3 (page 3).
- **covered** — Types of electronic transitions. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 4) and chemistry-ece-module-3 (pages 3-4), detailing sigma->sigma*, n->sigma*, pi->pi*, and n->pi* transitions.
- **covered** — Role of conjugation in absorption maxima. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 5) and chemistry-ece-module-3 (page 4), illustrating HOMO-LUMO gap reduction and bathochromic shift from ethylene, 1,3-butadiene, 1,3,5-hexatriene, to lycopene.
- **covered** — Electronic Spectroscopy – Instrumentation. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 6) and chemistry-ece-module-3 (page 4).
- **covered** — Electronic Spectroscopy – Applications. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 6) and chemistry-ece-module-3 (page 4).
- **covered** — Vibrational spectroscopy – Principle. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 7) and chemistry-ece-module-3 (pages 4-5), explaining dipole moment change criteria and stretching/bending vibrations.
- **covered** — Number of vibrational modes. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 8) and chemistry-ece-module-3 (page 5), detailing 3N-5 for linear and 3N-6 for non-linear molecules.
- **covered** — Vibrational modes of CO2 and H2O. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 8) and chemistry-ece-module-3 (page 5), analyzing symmetric stretch, asymmetric stretch, and bending modes and their IR activity for both H2O and CO2.
- **covered** — Vibrational spectroscopy – Applications. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (pages 9-10) and chemistry-ece-module-3 (page 5), including force constant calculation, functional group detection, purity testing, and hydrogen bonding studies.
- **covered** — Thermal Analysis: Dielectric Thermal Analysis (DETA) of Polymers - Working and Application. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 11) and chemistry-ece-module-3 (page 7).
- **covered** — Electron Microscopic Techniques: SEM - Principle, instrumentation and Applications. Found in: chemistry-module-3, chemistry-ece-module-3. Evidence: Covered in chemistry-module-3 (page 12) and chemistry-ece-module-3 (pages 5-6).

#### Official Module Module 4

- Water characteristics - Hardness - Types of hardness - Temporary and Permanent
- Disadvantages of hard water
- Degree of hardness (Numericals)
- Water softening methods - Ion exchange process - Principle, procedure and advantages
- Reverse osmosis – principle, process and advantages
- Water disinfection methods – chlorination - Break point chlorination
- Water disinfection methods – ozone and UV irradiation
- Dissolved oxygen (DO), BOD and COD - Definition & Significance
- Waste Management: Sewage water treatment - Primary, Secondary and Tertiary - Flow diagram
- Trickling filter and UASB process
- E Waste, Methods of disposal – recycle, recovery and reuse
- Chemistry of climate change - Greenhouse Gases
- Ozone Depletion
- Sustainable Development - an introduction to Sustainable Development Goals

Coverage findings:

- **covered** — Water characteristics - Hardness - Types of hardness - Temporary and Permanent. Found in: chemistry-module-4, chemistry-ece-module-4. Evidence: Covered in chemistry-module-4 (page 1) and chemistry-ece-module-4 (page 2).
- **covered** — Disadvantages of hard water. Found in: chemistry-module-4, chemistry-ece-module-4. Evidence: Covered in chemistry-module-4 (page 1) and chemistry-ece-module-4 (pages 2-3).
- **covered** — Degree of hardness (Numericals). Found in: chemistry-module-4, chemistry-ece-module-4. Evidence: Covered in chemistry-module-4 (pages 2-3) and chemistry-ece-module-4 (page 3), explaining CaCO3 equivalents and worked numerical problems. Action: Fix the error in chemistry-ece-module-4 (page 3) where the molecular/equivalent weight of HCO3- is listed as 122 instead of 61.
- **covered** — Water softening methods - Ion exchange process - Principle, procedure and advantages. Found in: chemistry-module-4, chemistry-ece-module-4. Evidence: Covered in chemistry-module-4 (page 4) and chemistry-ece-module-4 (pages 3-4).
- **covered** — Reverse osmosis – principle, process and advantages. Found in: chemistry-module-4, chemistry-ece-module-4. Evidence: Covered in chemistry-module-4 (page 5) and chemistry-ece-module-4 (page 4).
- **covered** — Water disinfection methods – chlorination - Break point chlorination. Found in: chemistry-module-4, chemistry-ece-module-4. Evidence: Covered in chemistry-module-4 (page 6) and chemistry-ece-module-4 (page 5).
- **covered** — Water disinfection methods – ozone and UV irradiation. Found in: chemistry-module-4, chemistry-ece-module-4. Evidence: Covered in chemistry-module-4 (page 7) and chemistry-ece-module-4 (pages 4-5).
- **covered** — Dissolved oxygen (DO), BOD and COD - Definition & Significance. Found in: chemistry-module-4, chemistry-ece-module-4. Evidence: Covered in chemistry-module-4 (page 8) and chemistry-ece-module-4 (page 6).
- **covered** — Waste Management: Sewage water treatment - Primary, Secondary and Tertiary - Flow diagram. Found in: chemistry-module-4, chemistry-ece-module-4. Evidence: Covered in chemistry-module-4 (page 9) and chemistry-ece-module-4 (page 7), including flow diagrams.
- **covered** — Trickling filter and UASB process. Found in: chemistry-module-4, chemistry-ece-module-4. Evidence: Covered in chemistry-module-4 (page 10) and chemistry-ece-module-4 (page 7).
- **partial** — E Waste, Methods of disposal – recycle, recovery and reuse. Found in: chemistry-module-4. Evidence: Substantively covered in chemistry-module-4 (page 11: E-waste and resource recovery, 4R hierarchy). Completely missing from chemistry-ece-module-4. Action: Add E-waste and methods of disposal (recycle, recovery, and reuse) to chemistry-ece-module-4, or unify Group B notes with chemistry-module-4.
- **partial** — Chemistry of climate change - Greenhouse Gases. Found in: chemistry-module-4. Evidence: Substantively covered in chemistry-module-4 (page 12: Greenhouse gases and climate change). Completely missing from chemistry-ece-module-4. Action: Add Chemistry of climate change and Greenhouse Gases to chemistry-ece-module-4, or unify Group B notes with chemistry-module-4.
- **partial** — Ozone Depletion. Found in: chemistry-module-4. Evidence: Substantively covered in chemistry-module-4 (page 13: Stratospheric ozone and ozone depletion). Completely missing from chemistry-ece-module-4. Action: Add Ozone Depletion to chemistry-ece-module-4, or unify Group B notes with chemistry-module-4.
- **partial** — Sustainable Development - an introduction to Sustainable Development Goals. Found in: chemistry-module-4. Evidence: Substantively covered in chemistry-module-4 (page 14: Sustainable development and the 17 SDGs). Completely missing from chemistry-ece-module-4. Action: Add Sustainable Development and the 17 SDGs to chemistry-ece-module-4, or unify Group B notes with chemistry-module-4.

Syllabus reader findings:

- Two parallel sets of notes are supplied (`chemistry-module-1..4` and `chemistry-ece-module-1..4`). While `chemistry-module-1..4` is complete, rigorous, and 100% aligned with the GXCYT122 syllabus, `chemistry-ece-module-1..4` contains severe gaps and scientific/typographical errors.
- In `chemistry-ece-module-4`, the entire final portion of Module 4 (`E Waste, Methods of disposal – recycle, recovery and reuse`, `Chemistry of climate change - Greenhouse Gases`, `Ozone Depletion`, and `Sustainable Development - an introduction to Sustainable Development Goals`) is completely missing.
- In `chemistry-ece-module-1` (page 7), the H2-O2 fuel cell is taught using an alkaline electrolyte (25% KOH/NaOH), directly violating the official syllabus specification `H2-O2 fuel cell (acid electrolyte only)`.
- In `chemistry-ece-module-1` (page 9), under `Electroless Plating of Copper`, the overall chemical equation is mistakenly written for Nickel plating (`Ni2+ + H2PO2- + H2O -> Ni + H2PO3- + 2H+`).
- In `chemistry-ece-module-1` (pages 3 and 5), standard electrode potentials and Celsius temperatures use a bullet symbol (`E^\bullet`, `25^\bullet C`) instead of the degree/standard circle symbol (`E^\circ`, `25^\circ C`), and missing percentage signs occur on page 7 (`charging only up to 90 (x=0.9)`, `40 > Ni-Cd`, `25 KOH`, `efficient (75 )`).
- In `chemistry-ece-module-1` (page 5), the glass electrode is misclassified as a secondary/internal reference electrode rather than an ion-selective indicator electrode.
- In `chemistry-ece-module-2` (page 7), `Al2O3`, `MgO`, and `SrTiO3` are misclassified as metal-based spintronic materials instead of insulating oxide barriers, and `(Co, Fe, B)` is misclassified as a semiconductor-based spintronic material.
- In `chemistry-ece-module-3` (page 7), a stray apostrophe in LaTeX `\(\prime\varepsilon''\)` causes a rendering artifact.
- In `chemistry-ece-module-4` (page 5), an unescaped LaTeX command `(\text{HOCl})` appears outside math delimiters.
- In `chemistry-ece-module-4` (page 3), the molecular/equivalent weight of `HCO3-` is erroneously tabulated and used as `122` instead of `61`.

Uncertainties:

- Both `chemistry-module-1..4` (assets under `notes/cse/s1/chemistry/...`) and `chemistry-ece-module-1..4` (assets under `notes/ece/s1/chemistry/...`) are supplied for Group B course GXCYT122 (shared between Groups A & B). If Group B students are served `chemistry-ece-module-1..4`, they are missing four major Module 4 topics and face multiple syllabus/chemical errors.

### Group B · GXESL106 (`GXESL106`) — ece, eee

- Official term label: SEMESTER S1/S2.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Uncertainties:

- Official course section retained verbatim because no current note module file maps to this subject.

### Group B · INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING (`GXEST104`) — ece, eee

- Official term label: SEMESTER S1 / B.Tech 2024 –S1/S2.
- Notes available: yes.
- Notes sources: `src/features/notes/electrical-module-1/notes.md`, `src/features/notes/electrical-module-2/notes.md`, `src/features/notes/electrical-module-3/notes.md`.
- Confidence: high.

#### Official Module Module 1

- Current and Voltage Division Rule
- Relative potential
- Capacitors & Inductors: V-I relations and Energy stored
- Ohms Law and Kirchhoff's laws - numerical problems
- Star-delta conversion (resistive networks only - derivation not required) - numerical problems
- Mesh current method – matrix representation - Solution of network equations
- Node voltage methods-matrix representation-solution of network equations by matrix methods - numerical problems
- Magnetic Circuits: Basic Terminology: MMF, field strength, flux density, reluctance
- Comparison between electric and magnetic circuits
- Series and parallel magnetic circuits with composite materials (numerical problems not needed)

Coverage findings:

- **covered** — Current and Voltage Division Rule. Found in: electrical-module-1. Evidence: Page 5 covers voltage divider rule, current divider rule, derivations, and worked examples.
- **covered** — Relative potential. Found in: electrical-module-1. Evidence: Page 6 defines absolute (node) potential and relative potential V_AB = V_A - V_B.
- **partial** — Capacitors & Inductors: V-I relations and Energy stored. Found in: electrical-module-1. Evidence: Page 1 covers Q=CV, E=1/2 CV^2 for capacitor, and v = L di/dt, W_L = 1/2 Li^2 for inductor. However, the differential V-I relation for a capacitor (i = C dv/dt) is not in the text of Module 1 (only an unverified image 'V-I relation of capacitor during charging and discharging'). Action: Add explicit text and formula for the V-I relation of a capacitor (i = C dv/dt and v = 1/C integral i dt) in electrical-module-1.
- **covered** — Ohms Law and Kirchhoff's laws - numerical problems. Found in: electrical-module-1. Evidence: Pages 1, 3, 5, 7, 8, and 10 explain Ohm's Law, KVL, and KCL with multiple worked numerical problems.
- **covered** — Star-delta conversion (resistive networks only - derivation not required) - numerical problems. Found in: electrical-module-1. Evidence: Page 13 gives Star-to-Delta and Delta-to-Star conversion formulas and 8 worked numerical examples.
- **covered** — Mesh current method – matrix representation - Solution of network equations. Found in: electrical-module-1. Evidence: Pages 7–9 cover mesh current analysis, supermesh, matrix representation [R][I]=[V], and solution by Cramer's rule.
- **covered** — Node voltage methods-matrix representation-solution of network equations by matrix methods - numerical problems. Found in: electrical-module-1. Evidence: Pages 10–12 cover node voltage analysis, conductance matrix [G][V]=[I], Cramer's rule solutions, and supernode numerical problems.
- **covered** — Magnetic Circuits: Basic Terminology: MMF, field strength, flux density, reluctance. Found in: electrical-module-1. Evidence: Page 14 defines magnetic flux, flux density (B), MMF (F=NI), magnetic field intensity/strength (H), permeability, and reluctance (S).
- **covered** — Comparison between electric and magnetic circuits. Found in: electrical-module-1. Evidence: Page 14 includes structured tables comparing analogies and differences between electric and magnetic circuits.
- **covered** — Series and parallel magnetic circuits with composite materials (numerical problems not needed). Found in: electrical-module-1. Evidence: Page 15 explains series composite magnetic circuits with air gaps and series-parallel magnetic circuits with electrical equivalents.

#### Official Module Module 2

- Faraday's laws, Lenz's law
- Statically induced and dynamically induced emf
- Self-inductance and mutual inductance, coefficient of coupling (numerical problems not needed)
- Generation of alternating voltages
- Representation of sinusoidal waveforms: frequency, period, average value, RMS value and form factor - numerical problems
- AC Circuits: Phasor representation of sinusoidal quantities, Trigonometric, Rectangular, Polar and complex forms
- Analysis of simple AC circuits: Purely resistive, inductive & capacitive circuits
- Inductive and capacitive reactance, concept of impedance - numerical problems
- RL, RC and RLC series circuits- power factor, active, reactive and apparent power. Simple numerical problems
- Three phase AC systems: Generation of three phase voltages, advantages of three phase systems
- Star and delta connections (balanced only), relation between line and phase voltages, line and phase currents- numerical problems

Coverage findings:

- **covered** — Faraday's laws, Lenz's law. Found in: electrical-module-2. Evidence: Page 1 covers Faraday's First and Second Laws, Lenz's Law, and conservation of energy.
- **covered** — Statically induced and dynamically induced emf. Found in: electrical-module-2. Evidence: Page 1 explains dynamically induced emf (e = Blv sin theta), Fleming's right-hand rule, statically induced emf, and a comparison table.
- **covered** — Self-inductance and mutual inductance, coefficient of coupling (numerical problems not needed). Found in: electrical-module-2. Evidence: Page 2 covers self-inductance (L), mutual inductance (M), and derives coefficient of coupling M = k sqrt(L1 L2).
- **covered** — Generation of alternating voltages. Found in: electrical-module-2. Evidence: Page 3 explains generation of alternating voltage and derives e(t) = E_m sin(omega t).
- **covered** — Representation of sinusoidal waveforms: frequency, period, average value, RMS value and form factor - numerical problems. Found in: electrical-module-2. Evidence: Pages 3 and 4 define and derive frequency, period, average value, RMS value, form factor, peak factor, and include worked numerical problems.
- **covered** — AC Circuits: Phasor representation of sinusoidal quantities, Trigonometric, Rectangular, Polar and complex forms. Found in: electrical-module-2. Evidence: Page 5 explains phasors, phase difference, Polar, Exponential (complex), Trigonometric, and Rectangular forms with worked examples.
- **covered** — Analysis of simple AC circuits: Purely resistive, inductive & capacitive circuits. Found in: electrical-module-2. Evidence: Page 6 analyzes pure R, pure L, and pure C circuits with phase relations and power equations.
- **covered** — Inductive and capacitive reactance, concept of impedance - numerical problems. Found in: electrical-module-2. Evidence: Page 6 defines X_L, X_C, complex impedance Z, and provides worked numerical examples.
- **covered** — RL, RC and RLC series circuits- power factor, active, reactive and apparent power. Simple numerical problems. Found in: electrical-module-2. Evidence: Pages 7 and 8 cover series RL, RC, and RLC circuits, power triangle, active/reactive/apparent power, power factor, and worked problems.
- **covered** — Three phase AC systems: Generation of three phase voltages, advantages of three phase systems. Found in: electrical-module-2. Evidence: Page 9 covers three-phase voltage generation, equations, phase sequence, and 5 advantages over single-phase systems.
- **covered** — Star and delta connections (balanced only), relation between line and phase voltages, line and phase currents- numerical problems. Found in: electrical-module-2. Evidence: Pages 9 and 10 derive line/phase relations for balanced Star and Delta connections, three-phase power formulas, and 3 worked numerical examples.

#### Official Module Module 3

- Passive and active components in electronics
- Working of PN junction diode, V-I characteristics of PN Junction diode
- Zener diode and avalanche breakdown
- Basics of Zener voltage regulator
- Block diagram of DC power supply
- Circuit and working of half wave, full wave and bridge rectifiers
- Ripple factor (with and without capacitor filters)
- Construction, working and V-I Characteristics of BJT
- Input output characteristics of CE configuration
- Comparison of CE, CB and CC configurations
- Concept of biasing and load line
- Transistor as a switch
- Transistor as an amplifier (Circuit Diagram and working)
- RC coupled amplifier - Circuit diagram and frequency response
- Introduction to FET
- Construction and working of N-channel and P-Channel MOSFETs

Coverage findings:

- **covered** — Passive and active components in electronics. Found in: electrical-module-3. Evidence: Page 1 defines and compares passive (R, L, C, transformer) and active (diodes, BJT, FET, ICs) components.
- **covered** — Working of PN junction diode, V-I characteristics of PN Junction diode. Found in: electrical-module-3. Evidence: Page 2 explains unbiased PN junction, forward/reverse bias working, Shockley's equation, and V-I characteristics.
- **covered** — Zener diode and avalanche breakdown. Found in: electrical-module-3. Evidence: Page 3 explains Zener diode operation and compares Zener vs. Avalanche breakdown mechanisms.
- **covered** — Basics of Zener voltage regulator. Found in: electrical-module-3. Evidence: Page 3 covers Zener shunt voltage regulator circuit, line/load regulation, and a worked numerical example.
- **covered** — Block diagram of DC power supply. Found in: electrical-module-3. Evidence: Page 4 shows the block diagram of a regulated DC power supply (Transformer -> Rectifier -> Filter -> Regulator) and explains each block.
- **covered** — Circuit and working of half wave, full wave and bridge rectifiers. Found in: electrical-module-3. Evidence: Page 4 presents circuit diagrams, working, and key parameters of HWR, center-tapped FWR, and bridge rectifier.
- **covered** — Ripple factor (with and without capacitor filters). Found in: electrical-module-3. Evidence: Page 5 defines ripple factor, derives unfiltered values (1.21 and 0.482), explains shunt capacitor filter operation, and gives filtered ripple factor formulas and a worked example.
- **covered** — Construction, working and V-I Characteristics of BJT. Found in: electrical-module-3. Evidence: Pages 6 and 7 cover NPN/PNP construction, doping/width of E-B-C regions, active-region working, current gain relations, and V-I characteristics.
- **covered** — Input output characteristics of CE configuration. Found in: electrical-module-3. Evidence: Page 7 explains CE configuration circuit, input characteristics (Early effect, r_i), and output characteristics (active, saturation, cut-off regions, r_o).
- **partial** — Comparison of CE, CB and CC configurations. Found in: electrical-module-3. Evidence: Pages 6 and 7 define CB, CE, CC terminals, alpha/beta gains, and state CE has the highest power gain, but lack a systematic comparison of CB, CE, and CC configurations (input/output impedance, voltage/current/power gain, phase shift, applications). Action: Add a dedicated comparison table and explanation of CB, CE, and CC configurations in electrical-module-3.
- **partial** — Concept of biasing and load line. Found in: electrical-module-3. Evidence: Page 7 briefly mentions DC biasing, Q-point, and DC load line equation V_CE = V_CC - I_C R_C in a single bullet under CE amplification, without explaining need for biasing, types of biasing, or how to plot the DC load line and locate the Q-point. Action: Expand coverage of transistor biasing concepts, DC load line construction (cut-off and saturation endpoints), and Q-point selection in electrical-module-3.
- **partial** — Transistor as a switch. Found in: electrical-module-3. Evidence: Pages 6 and 7 mention in tables/bullets that saturation acts as a closed (ON) switch and cut-off acts as an open (OFF) switch, but no circuit diagram or dedicated working explanation of transistor as a switch is provided. Action: Add a circuit diagram and step-by-step working of a BJT operating as an electronic switch (cut-off vs. saturation) in electrical-module-3.
- **partial** — Transistor as an amplifier (Circuit Diagram and working). Found in: electrical-module-3. Evidence: Page 7 explains the working of a single-stage CE amplifier during positive and negative half-cycles and 180-degree phase reversal, but lacks a circuit diagram of the CE amplifier (only the CE V-I characteristic test circuit is drawn). Action: Add a complete circuit diagram of a transistor CE amplifier showing biasing, coupling capacitors, and load resistor R_C in electrical-module-3.
- **missing** — RC coupled amplifier - Circuit diagram and frequency response. Evidence: Not present anywhere in electrical-module-3 (likely omitted because electrical-module-3 followed an older/abbreviated syllabus header). Action: Add a section covering the circuit diagram, working, component roles, and frequency response curve (low, mid, high frequency regions and bandwidth) of an RC coupled amplifier in electrical-module-3.
- **covered** — Introduction to FET. Found in: electrical-module-3. Evidence: Page 8 introduces FETs, JFET construction and working, and compares BJT vs. FET.
- **partial** — Construction and working of N-channel and P-Channel MOSFETs. Found in: electrical-module-3. Evidence: Page 8 explains the construction and working of N-channel Depletion and Enhancement MOSFETs, but P-channel MOSFET construction and working are only named in classification without explanation or diagrams. Action: Add the construction, working, bias polarities, and symbols of P-channel MOSFETs (D-MOSFET and E-MOSFET) in electrical-module-3.

#### Official Module Module 4

- General block diagram of a Communication system
- Block diagram of Fiber optic Communication system
- Concept of AM and FM (No derivation required)
- Block diagram of AM and FM super-heterodyne receiver
- Basic concepts of Wired and Wireless communication
- Block diagram of GSM
- Comparison of 3G, 4G, 5G and 6G communication technologies
- Block diagrams of Electronic instrumentation system
- Block diagram of Digital Multimeter
- Block diagram of Function generator
- Introduction to CRO and Lissajous patterns
- Applications of modern electronics – IoT based smart homes, healthcare and agriculture (Case study only)

Coverage findings:

- **misfiled** — General block diagram of a Communication system. Found in: electrical-module-3. Evidence: Found in electrical-module-3, Page 9 ('Block Diagram of a Basic Electronic Communication System'). No separate electrical-module-4 file exists. Action: Move from electrical-module-3 Page 9 into a dedicated Module 4 notes file (electrical-module-4).
- **missing** — Block diagram of Fiber optic Communication system. Evidence: Optical fiber cable is only mentioned in passing as an example of a guided channel on Page 9 of electrical-module-3; no block diagram or explanation of a fiber optic communication system is present. Action: Add the block diagram and working of a Fiber Optic Communication system in Module 4.
- **misfiled** — Concept of AM and FM (No derivation required). Found in: electrical-module-3. Evidence: Found in electrical-module-3, Page 9 ('Need for Modulation and Basic Modulation Types'), which briefly defines AM, FM, and PM in a table. However, waveform illustrations, modulation index, and bandwidth concepts of AM and FM are not explained. Action: Move to Module 4 and expand with waveforms and basic concepts of AM and FM.
- **missing** — Block diagram of AM and FM super-heterodyne receiver. Evidence: Not present anywhere in the supplied notes. Action: Add block diagrams and block-by-block explanations of AM and FM super-heterodyne receivers in Module 4.
- **misfiled** — Basic concepts of Wired and Wireless communication. Found in: electrical-module-3. Evidence: Briefly mentioned under 'Communication Channel (Guided/Wired vs. Unguided/Wireless Channels)' on Page 9 of electrical-module-3, but lacks detailed coverage of wired media (twisted pair, coax, fiber) and wireless propagation/spectrum concepts. Action: Move to Module 4 and expand the basic concepts and comparison of wired and wireless communication.
- **missing** — Block diagram of GSM. Evidence: Not present anywhere in the supplied notes. Action: Add the architecture/block diagram of GSM (MS, BSS, NSS, OSS) and explanation in Module 4.
- **missing** — Comparison of 3G, 4G, 5G and 6G communication technologies. Evidence: Not present anywhere in the supplied notes. Action: Add a detailed comparison of 3G, 4G, 5G, and 6G cellular technologies in Module 4.
- **misfiled** — Block diagrams of Electronic instrumentation system. Found in: electrical-module-3. Evidence: Covered in electrical-module-3, Page 10 ('Electronic Instrumentation System' with block diagram and description of sensor/transducer, signal conditioner, ADC, and display). Action: Move from electrical-module-3 Page 10 into Module 4.
- **missing** — Block diagram of Digital Multimeter. Evidence: Not present in the notes (DMM is only mentioned as a readout example on Page 10 of electrical-module-3). Action: Add the block diagram and working principle of a Digital Multimeter (DMM) in Module 4.
- **missing** — Block diagram of Function generator. Evidence: Not present anywhere in the supplied notes. Action: Add the block diagram and working principle of a Function Generator in Module 4.
- **missing** — Introduction to CRO and Lissajous patterns. Evidence: Not present anywhere in the supplied notes. Action: Add an introduction to Cathode Ray Oscilloscope (CRO), its block diagram/working, and Lissajous patterns for frequency and phase measurement in Module 4.
- **misfiled** — Applications of modern electronics – IoT based smart homes, healthcare and agriculture (Case study only). Found in: electrical-module-3. Evidence: Found in electrical-module-3, Page 10 ('Introduction to the Internet of Things (IoT)' and 'Applications of Modern Electronics and IoT' covering smart homes, smart healthcare, and smart agriculture). Action: Move from electrical-module-3 Page 10 into Module 4 and structure smart homes, healthcare, and agriculture as explicit case studies.

Module boundary and misplaced-topic findings:

- General block diagram of a Communication system: official Module Module 4, found in Module electrical-module-3. Move from electrical-module-3 (Page 9) to a new electrical-module-4 notes module.
- Concept of AM and FM (No derivation required): official Module Module 4, found in Module electrical-module-3. Move modulation concepts from electrical-module-3 (Page 9) to electrical-module-4 and expand AM/FM concepts.
- Basic concepts of Wired and Wireless communication: official Module Module 4, found in Module electrical-module-3. Move wired/wireless channel concepts from electrical-module-3 (Page 9) to electrical-module-4 and expand.
- Block diagrams of Electronic instrumentation system: official Module Module 4, found in Module electrical-module-3. Move from electrical-module-3 (Page 10) to electrical-module-4.
- Applications of modern electronics – IoT based smart homes, healthcare and agriculture (Case study only): official Module Module 4, found in Module electrical-module-3. Move IoT architecture and applications from electrical-module-3 (Page 10) to electrical-module-4.

Syllabus reader findings:

- Module 4 (electrical-module-4) is missing as a standalone module; a few of its topics are appended to the end of electrical-module-3 (Pages 9 and 10) as 'Modern Electronics (Module 3 Continuation)', while the majority of Module 4 topics are completely missing.
- electrical-module-3 Page 1 displays an outdated or truncated syllabus header ('...construction and working of BJT, characteristics of CE configuration, concept of amplification, basics of FET, MOSFET') that omits several official KTU 2024 Module 3 topics (Comparison of CE/CB/CC, biasing & load line, transistor as a switch, RC coupled amplifier, P-channel MOSFET).
- In electrical-module-1 Page 1, the V-I relation of a capacitor is shown only as an image ('V-I relation of capacitor during charging and discharging') without the mathematical equation i = C(dv/dt) in the text.
- In electrical-module-1 Page 7, Example 2.6.1 and Example 2.6.1 (Variant) write the exact same KVL equation '12 - 2I - 3I - 3 - 4I = 0', but the first simplifies '12 - 3' to 9 (giving I = 1 A) while the variant simplifies '12 - 3' to 15 (giving I = 15/9 = 1.67 A), indicating a sign/arithmetic inconsistency between the diagram and equation.
- In electrical-module-1 Page 10, Example 2.7.4 writes '1/10 - 1/20 + 1/30 = 0.183' (a minus sign typo instead of a plus sign, since 0.1 + 0.05 + 0.033 = 0.183), and duplicates the line '-20V_1 + 258.5V_1 - 7050 = 1500'.
- In electrical-module-1 Page 11, the Example on Page 25 writes 'G_11 = 1/R_1 + 1/R_2 = 1/4 + 1/4 = 1.25 S' (typo: 1/1 + 1/4 = 1.25 S).
- In electrical-module-1 Page 12, Example 1 Step 4 ('Branch Currents') ends abruptly after the bullet '* I_1 (through 2 ohm resistor):' with no calculation.
- In electrical-module-1 Page 13, Example 2 image alt-text/OCR uses '2Γ' and '24Γ' instead of '2Ω' and '24Ω', and Example 2.8.2 uses 0.8 instead of 0.86 in the final parallel calculation.
- In electrical-module-1 Page 15, the derivation of total MMF and flux for a composite series magnetic circuit with an air gap is embedded only inside an image ('Derivation steps for the total mmf and flux in a magnetic circuit with an air gap') rather than rendered in Markdown math.

Uncertainties:

- In electrical-module-1 Page 1, the image 'page-008-image-1-source.webp' (alt: 'V-I relation of capacitor during charging and discharging') cannot be visually inspected from text alone to confirm whether it contains the formula i = C dv/dt.
- In electrical-module-1 Page 15, the image 'page-080-image-2-source.webp' (alt: 'Derivation steps for the total mmf and flux in a magnetic circuit with an air gap') contains derivation steps not transcribed into the Markdown text.

### Group B · MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 1 (`GYMAT101`) — ece, eee

- Official term label: SEMESTER S1.
- Notes available: yes.
- Notes sources: `src/features/notes/electrical-maths-module-1/notes.md`, `src/features/notes/electrical-maths-module-2/notes.md`, `src/features/notes/electrical-maths-module-3/notes.md`, `src/features/notes/electrical-maths-module-4/notes.md`.
- Confidence: high.

#### Official Module Module 1

- Linear systems of equations: Gauss elimination
- Row echelon form
- Linear Independence: rank of a matrix
- Solutions of linear systems: Existence, Uniqueness (without proof)
- The matrix Eigen Value Problem
- Determining Eigen values and Eigen vector
- Diagonalization of matrices

Coverage findings:

- **covered** — Linear systems of equations: Gauss elimination. Found in: electrical-maths-module-1. Evidence: Pages 2, 3, 7, and 8 explain matrix representations Ax=b, augmented matrices, elementary row operations, Gaussian elimination to upper triangular form, back substitution, and worked examples.
- **covered** — Row echelon form. Found in: electrical-maths-module-1. Evidence: Pages 4 and 9 define row echelon form, pivots/leading entries, and demonstrate row reduction to echelon form across multiple examples.
- **covered** — Linear Independence: rank of a matrix. Found in: electrical-maths-module-1. Evidence: Pages 4 and 9 define linear combinations, linear independence/dependence of vectors, matrix rank as pivot/non-zero row count in row echelon form, and include worked problems.
- **covered** — Solutions of linear systems: Existence, Uniqueness (without proof). Found in: electrical-maths-module-1. Evidence: Pages 4, 7, 8, and 9 state the Fundamental Theorem for Linear Systems comparing rank(A) and rank([A|b]) for consistency (existence) and comparing rank r with number of variables n for uniqueness vs. infinite solutions with n-r free parameters.
- **covered** — The matrix Eigen Value Problem. Found in: electrical-maths-module-1. Evidence: Pages 5 and 10 formulate Ax = lambda x, (A - lambda I)x = 0, characteristic equation det(A - lambda I) = 0, spectrum, and spectral radius.
- **covered** — Determining Eigen values and Eigen vector. Found in: electrical-maths-module-1. Evidence: Pages 5, 10, and 11 demonstrate finding eigenvalues via trace/minors/determinant and synthetic division, and finding eigenvectors by row-reducing (A - lambda I)x = 0 for 2x2 and 3x3 matrices (including distinct, repeated, and complex roots).
- **covered** — Diagonalization of matrices. Found in: electrical-maths-module-1. Evidence: Pages 6 and 12 cover eigenspaces, algebraic and geometric multiplicity, defect, modal matrix X, similarity transformation D = X^(-1)AX, matrix powers, and worked 2x2 and 3x3 diagonalization examples.

#### Official Module Module 2

- Homogeneous linear ODEs of second order
- Superposition principle
- General solution (homogeneous second-order linear ODE)
- Homogeneous linear ODEs of second order with constant coefficients (Method to find general solution, solution of linear Initial Value Problem)
- Non homogenous ODEs (with constant coefficients) - General solution
- Particular solution by the method of undetermined coefficients (Particular solutions for the functions k e^(gamma x), k x^n, k cos(omega x), k sin(omega x), k e^(alpha x) cos(omega x), k e^(alpha x) sin(omega x))
- Initial value Problem for Non-Homogeneous Second order linear ODE (with constant coefficients)
- Solution by variation of parameters (Second Order)

Coverage findings:

- **covered** — Homogeneous linear ODEs of second order. Found in: electrical-maths-module-2. Evidence: Pages 2 and 6 introduce standard form y'' + p(x)y' + q(x)y = 0, solution verification, and reduction of order.
- **covered** — Superposition principle. Found in: electrical-maths-module-2. Evidence: Page 2 explicitly explains the superposition principle for homogeneous linear equations: if y1 and y2 are solutions, any linear combination c1*y1 + c2*y2 is also a solution.
- **covered** — General solution (homogeneous second-order linear ODE). Found in: electrical-maths-module-2. Evidence: Pages 2 and 6 define linear independence of solutions, the Wronskian, basis/fundamental system, and the general solution y = c1*y1 + c2*y2.
- **covered** — Homogeneous linear ODEs of second order with constant coefficients (Method to find general solution, solution of linear Initial Value Problem). Found in: electrical-maths-module-2. Evidence: Pages 3 and 7 derive the characteristic equation lambda^2 + a*lambda + b = 0, cover all three root cases (distinct real, repeated real, complex conjugate), and solve multiple IVPs.
- **covered** — Non homogenous ODEs (with constant coefficients) - General solution. Found in: electrical-maths-module-2. Evidence: Pages 4, 8, and 9 explain the general solution structure y(x) = y_h(x) + y_p(x) for nonhomogeneous constant-coefficient ODEs.
- **covered** — Particular solution by the method of undetermined coefficients (Particular solutions for the functions k e^(gamma x), k x^n, k cos(omega x), k sin(omega x), k e^(alpha x) cos(omega x), k e^(alpha x) sin(omega x)). Found in: electrical-maths-module-2. Evidence: Pages 4, 8, and 9 state the basic, modification (resonance), and sum rules, provide the trial form table for all six listed function families, and work through examples of each.
- **covered** — Initial value Problem for Non-Homogeneous Second order linear ODE (with constant coefficients). Found in: electrical-maths-module-2. Evidence: Page 8 explains applying initial conditions to the complete solution y = y_h + y_p and solves three complete nonhomogeneous IVPs.
- **covered** — Solution by variation of parameters (Second Order). Found in: electrical-maths-module-2. Evidence: Pages 5 and 10 derive and apply the Wronskian-based variation of parameters formula for second-order ODEs across five worked examples.

#### Official Module Module 3

- Laplace Transform
- Inverse Laplace Transform
- Linearity property
- First shifting theorem
- Transform of derivatives
- Solution of Initial value problems by Laplace transform (Second order linear ODE with constant coefficients with initial conditions at t=0 only)
- Unit step function
- Second shifting theorem
- Dirac delta function and its transform (Initial value problems involving unit step function and Dirac delta function are excluded)
- Convolution theorem (without proof) and its application to finding inverse Laplace transform of products of functions

Coverage findings:

- **covered** — Laplace Transform. Found in: electrical-maths-module-3. Evidence: Pages 2 and 7 define the unilateral Laplace transform integral, provide the catalog of elementary transforms, and work through forward transform problems.
- **covered** — Inverse Laplace Transform. Found in: electrical-maths-module-3. Evidence: Pages 3, 8, and 9 explain the inverse Laplace transform and demonstrate inversion via standard forms, completing the square, and partial fractions.
- **covered** — Linearity property. Found in: electrical-maths-module-3. Evidence: Pages 2, 3, 7, and 8 state and apply the linearity property for both forward and inverse Laplace transforms.
- **covered** — First shifting theorem. Found in: electrical-maths-module-3. Evidence: Pages 3, 7, and 8 cover the first shifting theorem L{e^(at)f(t)} = F(s-a) and its inverse application via completing the square.
- **covered** — Transform of derivatives. Found in: electrical-maths-module-3. Evidence: Pages 4 and 10 present the formulas for L{y'(t)} and L{y''(t)} incorporating initial conditions y(0) and y'(0).
- **covered** — Solution of Initial value problems by Laplace transform (Second order linear ODE with constant coefficients with initial conditions at t=0 only). Found in: electrical-maths-module-3. Evidence: Page 10 solves four second-order constant-coefficient linear ODE initial value problems with initial conditions at t=0 using Laplace transforms.
- **covered** — Unit step function. Found in: electrical-maths-module-3. Evidence: Pages 6 and 12 define the Heaviside unit step function u(t-a) and derive its Laplace transform e^(-as)/s.
- **covered** — Second shifting theorem. Found in: electrical-maths-module-3. Evidence: Pages 6 and 12 state the second shifting theorem L{f(t-a)u(t-a)} = e^(-as)F(s) and demonstrate algebraic shifting on delayed functions; however, inverse transforms using the second shifting theorem could be added for completeness. Action: Consider adding worked examples of finding inverse Laplace transforms of e^(-as)F(s) using the second shifting theorem.
- **covered** — Dirac delta function and its transform (Initial value problems involving unit step function and Dirac delta function are excluded). Found in: electrical-maths-module-3. Evidence: Pages 6 and 12 define the Dirac delta impulse function delta(t-a), state its sifting property and Laplace transform e^(-as), and work through multiple examples (correctly excluding IVPs with step/delta functions).
- **covered** — Convolution theorem (without proof) and its application to finding inverse Laplace transform of products of functions. Found in: electrical-maths-module-3. Evidence: Pages 5 and 11 state the convolution integral and Convolution Theorem and apply it to six worked inverse transform problems involving products of functions.

#### Official Module Module 4

- Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)
- Maclaurin series representation
- Fourier series
- Euler formulas
- Convergence of Fourier series (Dirichlet’s conditions)
- Fourier series of 2pi periodic functions
- Fourier series of 2l periodic functions
- Half range sine series expansion
- Half range cosine series expansion

Coverage findings:

- **covered** — Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains). Found in: electrical-maths-module-4. Evidence: Pages 2 and 6 state the Taylor series formula centered at x_0, discuss regions/intervals of convergence, and work through examples centered at x_0 = 1.
- **covered** — Maclaurin series representation. Found in: electrical-maths-module-4. Evidence: Pages 2 and 6 state the Maclaurin series formula (x_0 = 0), list standard expansions (e^x, sin x, cos x, 1/(1-x)), and solve multiple derivative-based and substitution-based problems.
- **covered** — Fourier series. Found in: electrical-maths-module-4. Evidence: Pages 3, 7, and 8 define periodic functions, fundamental period 2L, and the trigonometric Fourier series expansion.
- **covered** — Euler formulas. Found in: electrical-maths-module-4. Evidence: Pages 3, 7, and 8 state and apply Euler's formulas for Fourier coefficients a_0, a_n, and b_n.
- **covered** — Convergence of Fourier series (Dirichlet’s conditions). Found in: electrical-maths-module-4. Evidence: Pages 3 and 4 explain Dirichlet's conditions (piecewise continuity, finite maxima/minima/jumps) and Dirichlet's convergence theorem S(x_0) = (f(x_0^-) + f(x_0^+))/2, applying it across pages 4, 7, 8, 9, and 10.
- **covered** — Fourier series of 2pi periodic functions. Found in: electrical-maths-module-4. Evidence: Pages 4 and 7 work through seven complete Fourier series expansions on [-pi, pi] and [0, 2pi].
- **covered** — Fourier series of 2l periodic functions. Found in: electrical-maths-module-4. Evidence: Pages 3 and 8 formulate and solve six full Fourier series problems on intervals of length 2L ([-L, L] and [0, 2L]).
- **covered** — Half range sine series expansion. Found in: electrical-maths-module-4. Evidence: Pages 5 and 10 explain odd periodic extensions and solve five half-range sine series problems on [0, L].
- **covered** — Half range cosine series expansion. Found in: electrical-maths-module-4. Evidence: Pages 5 and 9 explain even periodic extensions and solve five half-range cosine series problems on [0, L].

Syllabus reader findings:

- In Module 4, the constant term of a Fourier series is defined inconsistently across pages: pages 3 and 5 use S(x) = a_0/2 + ... with a_0 = (1/L) integral f(x) dx, whereas pages 7, 8, and 9 switch to S(x) = a_0 + ... with a_0 = (1/2L) integral f(x) dx (or (1/L) integral_0^L f(x) dx for half-range cosine). While each convention is internally valid if used consistently, switching between them mid-module without warning can confuse students.
- Several worked problems preserve arithmetic/transcription errors from the underlying handwritten source in the main 'Answer:' line while only flagging them in a 'Watch out' callout (e.g., Module 1 page 8 Problem 3, Module 1 page 11 Problem Q and Problem 1, Module 2 page 7 Problem 1.1 and 4.3, Module 2 page 9 Problem 8 and Problem 4, Module 3 page 7 Problem 11, 10, and 16, Module 3 page 8 Problem 8, Module 3 page 10 Problem 2 and 4, Module 3 page 11 Problem 4 and 5, Module 4 page 8 Problem 4.2.12 and 4.2.8). Displaying incorrect mathematical expressions in bold 'Answer:' lines risks misleading students.
- Module 1 and Module 4 reference external SVG assets (/assets/notes/ece/s1/maths/...) whose visual contents cannot be audited from markdown text alone.

Uncertainties:

- Visual contents of linked SVG figures in Module 1 (page 7, page 9) and Module 4 (pages 7, 8, 9, 10) cannot be verified directly from the markdown text, though surrounding text and alt text substantively explain all underlying mathematical concepts.

### Group B · ALGORITHMIC THINKING WITH PYTHON (`UCEST105`) — ece, eee

- Official term label: SEMESTER S1.
- Notes available: yes.
- Notes sources: `src/features/notes/python-module-1/notes.md`, `src/features/notes/python-module-2/notes.md`, `src/features/notes/python-module-3/notes.md`, `src/features/notes/python-module-4/notes.md`.
- Confidence: high.

#### Official Module Module 1

- Problem-solving strategies defined
- Importance of understanding multiple problem-solving strategies
- Trial and Error
- Heuristics
- Means-Ends Analysis
- Backtracking (Working backward)
- Computer as a model of computation
- Understanding the problem
- Formulating a model
- Developing an algorithm
- Writing the program
- Testing the program
- Evaluating the solution
- Creating and using variables in Python
- Numeric and String data types in Python
- Using the math module
- Using the Python Standard Library for handling basic I/O - print, input
- Python operators and their precedence

Coverage findings:

- **covered** — Problem-solving strategies defined. Found in: python-module-1. Evidence: Page 1 defines problem-solving strategy as a planned approach for finding a solution.
- **covered** — Importance of understanding multiple problem-solving strategies. Found in: python-module-1. Evidence: Pages 1 and 2 explain the importance of strategy selection and benefits like adaptability, efficiency, improved outcomes, and skill development.
- **covered** — Trial and Error. Found in: python-module-1. Evidence: Pages 1, 2, and 13 explain Trial and Error with operational steps and examples (printer troubleshooting, password recovery, jigsaw puzzle).
- **covered** — Heuristics. Found in: python-module-1. Evidence: Pages 2 and 13 define heuristics, conditions for use, common heuristic strategies, and restaurant selection example.
- **covered** — Means-Ends Analysis. Found in: python-module-1. Evidence: Pages 2 and 13 define Means-Ends Analysis with Tower of Hanoi, Trivandrum to Kashmir road trip, and software development examples.
- **covered** — Backtracking (Working backward). Found in: python-module-1. Evidence: Page 2 explains Working Backwards and Backtracking with state-space search tree; Page 13 shows Sudoku backtracking.
- **covered** — Computer as a model of computation. Found in: python-module-1. Evidence: Pages 2 and 3 cover Basic Model of a Computer, Von Neumann architecture, instruction execution cycle, CPU, I/O, and memory hierarchy.
- **covered** — Understanding the problem. Found in: python-module-1. Evidence: Pages 3 and 4 explain input requirements, output requirements, and processing considerations with worked examples.
- **covered** — Formulating a model. Found in: python-module-1. Evidence: Page 4 demonstrates formulating mathematical models for sum of two numbers, class average, and quadratic discriminant.
- **covered** — Developing an algorithm. Found in: python-module-1. Evidence: Page 4 defines algorithm development using pseudocode and flowcharts across three worked examples.
- **covered** — Writing the program. Found in: python-module-1. Evidence: Page 4 explains coding/implementing an algorithm in Python along with debugging and compiling.
- **covered** — Testing the program. Found in: python-module-1. Evidence: Page 4 explains testing programs with test suites and defines bugs.
- **covered** — Evaluating the solution. Found in: python-module-1. Evidence: Page 4 explains evaluating the output against original problem requirements.
- **covered** — Creating and using variables in Python. Found in: python-module-1. Evidence: Pages 6, 7, and 8 cover identifier rules, variable declaration, dynamic typing, and multiple assignment.
- **covered** — Numeric and String data types in Python. Found in: python-module-1. Evidence: Pages 7, 8, and 13 cover int, float, complex, type conversion, strings, quotes, and escape sequences.
- **covered** — Using the math module. Found in: python-module-1. Evidence: Pages 8 and 9 cover import math, sqrt, ceil, floor, fabs, pi, factorial, gcd, exp, pow, log, sin, cos, and tan.
- **covered** — Using the Python Standard Library for handling basic I/O - print, input. Found in: python-module-1. Evidence: Page 9 covers input(), type casting input, split(), and print() with sep and end parameters.
- **covered** — Python operators and their precedence. Found in: python-module-1. Evidence: Pages 9, 10, 11, and 12 cover arithmetic, comparison, assignment, bitwise, logical, membership, identity operators, precedence table, and evaluation trees.

#### Official Module Module 2

- Meaning and Definition of Pseudocode
- Reasons for using pseudocode
- The main constructs of pseudocode - Sequencing
- The main constructs of pseudocode - selection (if-else structure, case structure)
- The main constructs of pseudocode - repetition (for, while, repeat-until loops)
- Sample problem: Evaluate an expression, d=a+b*c
- Sample problem: find simple interest
- Sample problem: determine the larger of two numbers
- Sample problem: determine the smallest of three numbers
- Sample problem: determine the grade earned by a student based on KTU grade scale (using if-else and case structures)
- Sample problem: print the numbers from 1 to 50 in descending order
- Sample problem: find the sum of n numbers input by the user (using all the three loop variants)
- Sample problem: factorial of a number
- Sample problem: largest of n numbers
- Flowchart symbols: start and end
- Flowchart symbols: arithmetic calculations
- Flowchart symbols: input/output operation
- Flowchart symbols: decision (selection)
- Flowchart symbols: module name (call)
- Flowchart symbols: for loop (Hexagon)
- Flowchart symbols: flow-lines
- Flowchart symbols: on-page connector
- Flowchart symbols: off-page connector

Coverage findings:

- **covered** — Meaning and Definition of Pseudocode. Found in: python-module-2. Evidence: Pages 18 and 19 define pseudocode and list rules for writing pseudocode.
- **covered** — Reasons for using pseudocode. Found in: python-module-2. Evidence: Page 18 lists the benefits and reasons for using pseudocode.
- **covered** — The main constructs of pseudocode - Sequencing. Found in: python-module-2. Evidence: Page 21 explains sequence as instructions running in order from top to bottom.
- **covered** — The main constructs of pseudocode - selection (if-else structure, case structure). Found in: python-module-2. Evidence: Pages 10, 21, 22, 23, and 24 cover IF, IF/ELSE, ELSE IF, nested IF, and CASE/END CASE structures.
- **covered** — The main constructs of pseudocode - repetition (for, while, repeat-until loops). Found in: python-module-2. Evidence: Pages 21, 36, 37, 41, 42, and 43 cover FOR, WHILE, and REPEAT/UNTIL loops.
- **missing** — Sample problem: Evaluate an expression, d=a+b*c. Evidence: No pseudocode or flowchart for evaluating d=a+b*c is present in Module 2 notes. Action: Add pseudocode and flowchart for evaluating the expression d = a + b * c in Module 2.
- **covered** — Sample problem: find simple interest. Found in: python-module-2. Evidence: Page 6 provides pseudocode and flowchart for calculating simple interest.
- **covered** — Sample problem: determine the larger of two numbers. Found in: python-module-2. Evidence: Page 7 provides pseudocode and flowchart to find the larger of two numbers.
- **covered** — Sample problem: determine the smallest of three numbers. Found in: python-module-2. Evidence: Page 8 provides pseudocode and flowchart to find the smallest of three numbers.
- **partial** — Sample problem: determine the grade earned by a student based on KTU grade scale (using if-else and case structures). Found in: python-module-2. Evidence: Page 46 shows a Python if/elif grade example (A-F) and Module 3 Page 3 shows a Python function with S-F grades, but Module 2 lacks the pseudocode and flowchart for the KTU grade scale using both if-else and case structures. Action: Add pseudocode and flowcharts in Module 2 for determining student grade based on the KTU grade scale using both if-else and case structures.
- **partial** — Sample problem: print the numbers from 1 to 50 in descending order. Found in: python-module-2. Evidence: Page 42 shows a 3-line snippet for printing 10 down to 1 (FOR i = 10 TO 1 STEP -1), but the specific sample problem of printing 1 to 50 in descending order with complete pseudocode and flowchart is not worked out. Action: Add complete pseudocode and flowchart for printing numbers from 1 to 50 in descending order.
- **partial** — Sample problem: find the sum of n numbers input by the user (using all the three loop variants). Found in: python-module-2. Evidence: Page 39 sums the first n natural numbers (1 to n) using a WHILE loop, and Page 40 sums n user-input ages using REPEAT-UNTIL to find an average, but finding the sum of n numbers input by the user is not demonstrated across all three loop variants (for, while, repeat-until). Action: Add pseudocode and flowcharts for finding the sum of n numbers input by the user explicitly using all three loop variants (for, while, repeat-until).
- **covered** — Sample problem: factorial of a number. Found in: python-module-2. Evidence: Pages 11, 12, and 25 provide pseudocode, flowcharts, and loop traces for calculating the factorial of a number.
- **missing** — Sample problem: largest of n numbers. Evidence: Pages 16 and 19 find the greatest of three numbers, but finding the largest of n numbers is not covered in Module 2. Action: Add pseudocode and flowchart for finding the largest of n numbers in Module 2.
- **covered** — Flowchart symbols: start and end. Found in: python-module-2. Evidence: Page 2 explains and illustrates the Terminator (START/STOP) symbol.
- **covered** — Flowchart symbols: arithmetic calculations. Found in: python-module-2. Evidence: Page 3 explains and illustrates the Process rectangle for calculations and assignments.
- **covered** — Flowchart symbols: input/output operation. Found in: python-module-2. Evidence: Page 3 explains and illustrates the Input/output parallelogram.
- **covered** — Flowchart symbols: decision (selection). Found in: python-module-2. Evidence: Page 4 explains and illustrates the Decision diamond.
- **covered** — Flowchart symbols: module name (call). Found in: python-module-2. Evidence: Pages 5 and 38 explain and illustrate the Predefined process symbol (rectangle with double vertical edges) for calling a module.
- **covered** — Flowchart symbols: for loop (Hexagon). Found in: python-module-2. Evidence: Pages 5 and 38 explain and illustrate the Hexagon symbol for counter-loop notation.
- **covered** — Flowchart symbols: flow-lines. Found in: python-module-2. Evidence: Page 2 explains and illustrates Flow lines.
- **covered** — Flowchart symbols: on-page connector. Found in: python-module-2. Evidence: Page 4 explains and illustrates the On-page connector (labelled circle).
- **covered** — Flowchart symbols: off-page connector. Found in: python-module-2. Evidence: Page 4 explains and illustrates the Off-page connector (pentagon).

#### Official Module Module 3

- Selection and iteration using Python: if-else
- Selection and iteration using Python: elif
- Selection and iteration using Python: for loop
- Selection and iteration using Python: range
- Selection and iteration using Python: while loop
- Sequence data types in Python - list
- Sequence data types in Python - tuple
- Sequence data types in Python - set
- Sequence data types in Python - strings
- Sequence data types in Python - dictionary
- Creating and using Arrays in Python (using Numpy library)
- Problem decomposition as a strategy for solving complex problems
- Modularisation
- Motivation for modularisation
- Defining and using functions in Python
- Functions with multiple return values
- Decomposition and Modularisation example: Merge sort
- Decomposition and Modularisation example: returning the top three integers from a list of n>=3 integers
- Recursion Defined
- Reasons for using Recursion
- The Call Stack
- Recursion and the Stack
- Avoiding Circularity in Recursion
- Recursion sample problem: Finding the nth Fibonacci number
- Recursion sample problem: greatest common divisor of two positive integers
- Recursion sample problem: the factorial of a positive integer
- Recursion sample problem: adding two positive integers
- Recursion sample problem: the sum of digits of a positive number

Coverage findings:

- **covered** — Selection and iteration using Python: if-else. Found in: python-module-3. Evidence: Pages 2 and 3 cover one-way if and two-way if/else in Python.
- **covered** — Selection and iteration using Python: elif. Found in: python-module-3. Evidence: Page 3 covers multi-way selection using if/elif/else.
- **covered** — Selection and iteration using Python: for loop. Found in: python-module-3. Evidence: Pages 4 and 5 cover for loops, nested loops, break, continue, and pass.
- **covered** — Selection and iteration using Python: range. Found in: python-module-3. Evidence: Page 4 covers range(stop), range(start, stop), and range(start, stop, step).
- **covered** — Selection and iteration using Python: while loop. Found in: python-module-3. Evidence: Page 4 covers while loops and termination progress.
- **covered** — Sequence data types in Python - list. Found in: python-module-3. Evidence: Pages 15-20 cover list creation, indexing, traversal, comprehensions, slicing, mutation, copying, methods, and split/join.
- **covered** — Sequence data types in Python - tuple. Found in: python-module-3. Evidence: Page 21 covers tuples, immutability, single-element syntax, and tuple unpacking.
- **covered** — Sequence data types in Python - set. Found in: python-module-3. Evidence: Pages 25-27 cover sets, adding/removing elements, subset/superset comparisons, and set algebra operations.
- **covered** — Sequence data types in Python - strings. Found in: python-module-3. Evidence: Pages 10-14 cover Unicode strings, indexing, traversal, immutability, slicing, comparison, string methods, and string constants.
- **covered** — Sequence data types in Python - dictionary. Found in: python-module-3. Evidence: Pages 28 and 29 cover dictionaries, key-value pairs, insertion order, traversal, and dictionary methods.
- **covered** — Creating and using Arrays in Python (using Numpy library). Found in: python-module-3. Evidence: Pages 22-24 cover NumPy ndarray creation, ndim, shape, size, dtype, indexing, slicing views vs copies, reshaping, and matrix operations.
- **partial** — Problem decomposition as a strategy for solving complex problems. Found in: python-module-3. Evidence: Page 7 defines decomposition in one sentence ('Decomposition breaks a larger problem into smaller tasks'), and Module 4 Page 2 briefly mentions it, but it lacks a substantive explanation and walkthrough of problem decomposition as a strategy. Action: Expand the explanation of problem decomposition as a strategy for solving complex problems in Module 3, demonstrating it with the syllabus-prescribed examples.
- **partial** — Modularisation. Found in: python-module-3. Evidence: Page 7 defines modular design and Python modules briefly, focusing mostly on syntax of def. Action: Provide a more detailed explanation of modularisation and how complex problems are structured into modules/sub-tasks.
- **partial** — Motivation for modularisation. Found in: python-module-3. Evidence: Page 7 states in one sentence: 'Functions reduce duplicated logic, hide implementation detail, and make individual tasks easier to reuse, debug, and test.' Action: Elaborate on the motivations for modularisation as a dedicated subsection in Module 3.
- **covered** — Defining and using functions in Python. Found in: python-module-3. Evidence: Pages 7, 8, and 9 explain def, parameters, arguments, return values, local scope, and function calls with examples.
- **missing** — Functions with multiple return values. Evidence: Page 20 shows returning a list of three items, and Page 7 mentions multiple return statements, but returning multiple values from a function (e.g., comma-separated return / tuple unpacking of return values) is not explained or demonstrated. Action: Add an explanation and code examples of functions with multiple return values in Module 3.
- **misfiled** — Decomposition and Modularisation example: Merge sort. Found in: python-module-4. Evidence: Merge sort is absent from Module 3 notes, where the syllabus footnote (*) requires introducing and demonstrating Decomposition and Modularisation using Merge sort. It appears only in Module 4 Page 4 under Divide and Conquer. Action: Introduce and demonstrate problem decomposition and modularisation using Merge sort in Module 3.
- **partial** — Decomposition and Modularisation example: returning the top three integers from a list of n>=3 integers. Found in: python-module-3. Evidence: Page 20 shows a two-line function `top_three(values)` using `sorted(values, reverse=True)[:3]` under 'Lists with functions', without framing or demonstrating it as an example of Decomposition and Modularisation. Action: Frame and explain the problem of returning the top three integers from a list of n>=3 integers specifically to demonstrate Decomposition and Modularisation in Module 3.
- **misfiled** — Recursion Defined. Found in: python-module-4. Evidence: Recursion is completely absent from Module 3 notes. Module 4 Page 4 briefly defines a recursive function and base case under Divide and Conquer. Action: Add a dedicated section defining Recursion in Module 3.
- **missing** — Reasons for using Recursion. Evidence: Not covered in Module 3 or any other module. Action: Add 'Reasons for using Recursion' to Module 3.
- **missing** — The Call Stack. Evidence: Not covered in Module 3 or any other module. Action: Add an explanation of 'The Call Stack' to Module 3.
- **missing** — Recursion and the Stack. Evidence: Not covered in Module 3 or any other module. Action: Add an explanation of 'Recursion and the Stack' to Module 3.
- **missing** — Avoiding Circularity in Recursion. Evidence: Not covered in Module 3 or any other module. Action: Add 'Avoiding Circularity in Recursion' (base cases and progress toward base cases) to Module 3.
- **misfiled** — Recursion sample problem: Finding the nth Fibonacci number. Found in: python-module-4. Evidence: Absent from Module 3. Module 4 Page 5 discusses Fibonacci recurrence and memoized recursion. Action: Add recursive implementation and trace for finding the nth Fibonacci number in Module 3.
- **missing** — Recursion sample problem: greatest common divisor of two positive integers. Evidence: Not covered in Module 3 or any other module (Module 1 only shows `math.gcd`). Action: Add recursive GCD of two positive integers in Module 3.
- **missing** — Recursion sample problem: the factorial of a positive integer. Evidence: Not covered in Module 3 or any other module (Module 2 only covers iterative factorial). Action: Add recursive factorial of a positive integer in Module 3.
- **missing** — Recursion sample problem: adding two positive integers. Evidence: Not covered in Module 3 or any other module. Action: Add recursive addition of two positive integers in Module 3.
- **missing** — Recursion sample problem: the sum of digits of a positive number. Evidence: Not covered in Module 3 or any other module. Action: Add recursive sum of digits of a positive number in Module 3.

#### Official Module Module 4

- Brute-force Approach
- Brute-force Example: Padlock, Password guessing
- Divide-and-conquer Approach
- Divide-and-conquer Example: The Merge Sort Algorithm
- Advantages of Divide and Conquer Approach
- Disadvantages of Divide and Conquer Approach
- Dynamic Programming Approach
- Dynamic Programming Example: Fibonacci series
- Recursion vs Dynamic Programming
- Greedy Algorithm Approach
- Greedy Example: Given an array of positive integers each indicating the completion time for a task, find the maximum number of tasks that can be completed in the limited amount of time that you have
- Motivations for the Greedy Approach
- Characteristics of the Greedy Algorithm
- Greedy Algorithms vs Dynamic Programming
- Randomized Approach
- Randomized Example 1: Coupon collector (free jeans with n coupons)
- Randomized Example 2: Hat-check problem (expected number of people getting back their hats)
- Motivations for the Randomized Approach

Coverage findings:

- **covered** — Brute-force Approach. Found in: python-module-4. Evidence: Page 3 explains the brute-force (exhaustive search) approach and its characteristics.
- **partial** — Brute-force Example: Padlock, Password guessing. Found in: python-module-4. Evidence: Module 4 Page 3 covers the 4-digit Padlock combination example in detail, but does not explicitly cover the Password guessing example (Password recovery is only briefly mentioned under Trial and Error in Module 1 Page 2). Action: Add the Password guessing brute-force example to Module 4 Page 3.
- **covered** — Divide-and-conquer Approach. Found in: python-module-4. Evidence: Page 4 explains the three steps of Divide and Conquer (Divide, Conquer, Combine).
- **covered** — Divide-and-conquer Example: The Merge Sort Algorithm. Found in: python-module-4. Evidence: Page 4 explains Merge Sort with a tree diagram and Python implementation.
- **covered** — Advantages of Divide and Conquer Approach. Found in: python-module-4. Evidence: Page 4 lists five advantages of the Divide and Conquer approach.
- **covered** — Disadvantages of Divide and Conquer Approach. Found in: python-module-4. Evidence: Page 4 lists three disadvantages of the Divide and Conquer approach.
- **covered** — Dynamic Programming Approach. Found in: python-module-4. Evidence: Page 5 explains Dynamic Programming, overlapping sub-problems, optimal substructure, and memoization vs tabulation.
- **covered** — Dynamic Programming Example: Fibonacci series. Found in: python-module-4. Evidence: Page 5 covers Fibonacci series using both bottom-up table and top-down memoization.
- **covered** — Recursion vs Dynamic Programming. Found in: python-module-4. Evidence: Page 5 compares plain recursion/divide-and-conquer with Dynamic Programming.
- **covered** — Greedy Algorithm Approach. Found in: python-module-4. Evidence: Page 6 defines and explains the Greedy approach and shows when greedy fails.
- **partial** — Greedy Example: Given an array of positive integers each indicating the completion time for a task, find the maximum number of tasks that can be completed in the limited amount of time that you have. Found in: python-module-4. Evidence: Page 6 provides the interval scheduling / activity selection problem with `(start, finish)` tuples instead of the exact syllabus problem (given an array of positive integers indicating completion times/durations and a limited total time budget, maximize the number of tasks completed by picking shortest tasks first). Action: Add the specific syllabus greedy example: given an array of task completion times and a total time limit, sort by completion time to find the maximum number of tasks that can be completed.
- **covered** — Motivations for the Greedy Approach. Found in: python-module-4. Evidence: Page 6 ('Why use greedy?') explains the motivations for using the greedy approach.
- **covered** — Characteristics of the Greedy Algorithm. Found in: python-module-4. Evidence: Page 6 ('Characteristics') lists the key characteristics of greedy algorithms.
- **covered** — Greedy Algorithms vs Dynamic Programming. Found in: python-module-4. Evidence: Page 6 provides a comparison table of Greedy versus Dynamic Programming.
- **covered** — Randomized Approach. Found in: python-module-4. Evidence: Page 7 defines randomized algorithms, their properties, limitations, and applications.
- **covered** — Randomized Example 1: Coupon collector (free jeans with n coupons). Found in: python-module-4. Evidence: Page 7 explains and simulates the jeans coupon collector problem and states the expected value formula.
- **covered** — Randomized Example 2: Hat-check problem (expected number of people getting back their hats). Found in: python-module-4. Evidence: Page 7 explains and simulates the hat-check problem, showing the expected value is 1.
- **covered** — Motivations for the Randomized Approach. Found in: python-module-4. Evidence: Page 7 ('Motivation') covers simplicity, large problem spaces, fairness, robustness, and mathematical guarantees.

Module boundary and misplaced-topic findings:

- Sequence data types in Python - list, tuple, set, dictionary: official Module Module 3, found in Module python-module-1. Module 1 Page 8 introduces list, tuple, dictionary, and set, whereas the Module 1 syllabus only specifies Numeric and String data types (list, tuple, set, and dictionary belong to Module 3).
- Problem-solving strategies: Jigsaw puzzle (Trial and error) and Restaurant selection (Heuristics): official Module Module 1, found in Module python-module-2. Module 2 Pages 26-27 contain Module 1 problem-solving strategy examples (Jigsaw puzzle and Restaurant heuristics).
- Selection and iteration using Python (range, for, if/elif) and Sequence data types (list indexing/slicing/sorting, NumPy arrays): official Module Module 3, found in Module python-module-2. Module 2 Pages 44-50 contain Python implementation topics (Python range(), for loops, if/elif, list slicing/sorting, and NumPy arrays) that belong to Module 3.
- Decomposition and Modularisation example: Merge sort: official Module Module 3, found in Module python-module-4. Merge sort is covered in Module 4 (as required for Divide and Conquer) but is missing from Module 3 where the syllabus footnote also requires it to introduce Decomposition and Modularisation.
- Recursion Defined and Finding the nth Fibonacci number: official Module Module 3, found in Module python-module-4. Basic recursion definition and Fibonacci recurrence appear only in Module 4; the entire Recursion unit and its five sample problems must be added to Module 3.

Syllabus reader findings:

- In python-module-1 (Pages 1-12), almost every page contains duplicated content where the second half of the page repeats the first half verbatim or near-verbatim.
- In python-module-1 Page 4, the percentage conversion formula for Average 2 is written as `(Average_2 / 13)` in the review section instead of `(Average_2 / 12) * 100`.
- In python-module-1 Page 7, the code comments in the Explicit Type Conversion block are misaligned with the code and state `# Output: 15` for `print(y + 5)` (which outputs 20) and `# Output: 10.0` for `float(15)` (which outputs 15.0).
- In python-module-1 Page 10, the output of the Assignment Operators code block shows `a += 5 : 105` when `a` was initialized to `10` (should be `15`, cascading errors to all subsequent lines).
- In python-module-1 Page 11, the Bitwise Operators output prints `a >> 2 : 240` instead of `a << 2 : 240`, and contains a stray word `College` at the end of the first section.
- In python-module-1 Page 12, C-style logical operators (`&&` and `||`) are used in the expression evaluation table instead of Python's `and` and `or`.
- In python-module-2, the page ordering is scrambled: source pages 6-18 appear on notes pages 2-14 before source pages 2-5 (which appear on notes pages 15-18).

### Group B · UCHUT128 (`UCHUT128`) — ece, eee

- Official term label: SEMESTER 2.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Uncertainties:

- Official course section retained verbatim because no current note module file maps to this subject.

### Group B · HEALTH AND WELLNESS (`UCHWT127`) — ece, eee

- Official term label: SEMESTER S1/S2.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

#### Official Module Module 1

- Human Body Systems related to Physical activity and its functions: Respiratory System
- Human Body Systems related to Physical activity and its functions: Cardiovascular System
- Musculoskeletal System and the Major Muscle groups of the Human Body
- Quantifying Physical Activity Energy Expenditure and Metabolic equivalent of task (MET)
- Exercise Continuum: Light-intensity physical activity, Moderate-intensity physical activity, Vigorous-intensity physical activity
- Defining Physical Activity, Aerobic Physical Activity, Anaerobic Physical Activity, Exercise and Health-Related Physical Fitness
- FITT principle to design an Exercise programme
- Components of Health related Physical Fitness: Cardiorespiratory Fitness
- Components of Health related Physical Fitness: Muscular strength
- Components of Health related Physical Fitness: Muscular endurance
- Components of Health related Physical Fitness: Flexibility
- Components of Health related Physical Fitness: Body composition

Coverage findings:

- **no_notes** — Human Body Systems related to Physical activity and its functions: Respiratory System. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering the Respiratory System and its functions related to physical activity.
- **no_notes** — Human Body Systems related to Physical activity and its functions: Cardiovascular System. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering the Cardiovascular System and its functions related to physical activity.
- **no_notes** — Musculoskeletal System and the Major Muscle groups of the Human Body. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering the Musculoskeletal System and major muscle groups.
- **no_notes** — Quantifying Physical Activity Energy Expenditure and Metabolic equivalent of task (MET). Evidence: No notes module files mapped to this course. Action: Create Module 1 notes explaining physical activity energy expenditure quantification and MET.
- **no_notes** — Exercise Continuum: Light-intensity physical activity, Moderate-intensity physical activity, Vigorous-intensity physical activity. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering the Exercise Continuum (light, moderate, and vigorous intensity).
- **no_notes** — Defining Physical Activity, Aerobic Physical Activity, Anaerobic Physical Activity, Exercise and Health-Related Physical Fitness. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes defining physical activity, aerobic/anaerobic activity, exercise, and health-related physical fitness.
- **no_notes** — FITT principle to design an Exercise programme. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes explaining the FITT principle for exercise programme design.
- **no_notes** — Components of Health related Physical Fitness: Cardiorespiratory Fitness. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering Cardiorespiratory Fitness.
- **no_notes** — Components of Health related Physical Fitness: Muscular strength. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering Muscular strength.
- **no_notes** — Components of Health related Physical Fitness: Muscular endurance. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering Muscular endurance.
- **no_notes** — Components of Health related Physical Fitness: Flexibility. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering Flexibility.
- **no_notes** — Components of Health related Physical Fitness: Body composition. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering Body composition.

#### Official Module Module 2

- Concept of Health and Wellness: Health and wellness differentiation
- Factors affecting health and wellness
- Mental health and Factors affecting mental health
- Sports and Socialization: Sports and character building
- Leadership through Physical Activity and Sports
- Diet and nutrition: Exploring Micro and Macronutrients
- Concept of Balanced diet
- Carbohydrate & the Glycemic Index
- Animal & Plant-based Proteins and their Effects on Human Health
- Dietary Fats & their Effects on Human Health
- Essential Vitamins and Minerals

Coverage findings:

- **no_notes** — Concept of Health and Wellness: Health and wellness differentiation. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering the concept and differentiation of health and wellness.
- **no_notes** — Factors affecting health and wellness. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering factors affecting health and wellness.
- **no_notes** — Mental health and Factors affecting mental health. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering mental health and affecting factors.
- **no_notes** — Sports and Socialization: Sports and character building. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering sports, socialization, and character building.
- **no_notes** — Leadership through Physical Activity and Sports. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering leadership through physical activity and sports.
- **no_notes** — Diet and nutrition: Exploring Micro and Macronutrients. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering diet, nutrition, and micro/macronutrients.
- **no_notes** — Concept of Balanced diet. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering the concept of a balanced diet.
- **no_notes** — Carbohydrate & the Glycemic Index. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering carbohydrates and the Glycemic Index.
- **no_notes** — Animal & Plant-based Proteins and their Effects on Human Health. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering animal and plant-based proteins and their health effects.
- **no_notes** — Dietary Fats & their Effects on Human Health. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering dietary fats and their effects on human health.
- **no_notes** — Essential Vitamins and Minerals. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering essential vitamins and minerals.

#### Official Module Module 3

- Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Obesity
- Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: cardiovascular diseases (e.g., coronary artery disease, hypertension)
- Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Diabetes
- Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Osteoporosis
- Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Musculoskeletal disorders (e.g., osteoarthritis, Low back pain, Kyphosis, lordosis, flat foot, Knock knee)
- Meaning, Aims and objectives of yoga
- Classification and importance of Yogic Asanas (Sitting, Standing, lying)
- Pranayama and Its Types
- Active Lifestyle and Stress Management Through Yoga
- Understanding on substance abuse and addiction
- Psychoactive substances & its ill effects: Alcohol
- Psychoactive substances & its ill effects: Opioids
- Psychoactive substances & its ill effects: Cannabis
- Psychoactive substances & its ill effects: Sedative
- Psychoactive substances & its ill effects: Cocaine
- Psychoactive substances & its ill effects: Other stimulants, including caffeine
- Psychoactive substances & its ill effects: Hallucinogens
- Psychoactive substances & its ill effects: Tobacco
- Psychoactive substances & its ill effects: Volatile solvents

Coverage findings:

- **no_notes** — Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Obesity. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering lifestyle management strategies for Obesity.
- **no_notes** — Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: cardiovascular diseases (e.g., coronary artery disease, hypertension). Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering lifestyle management strategies for cardiovascular diseases (coronary artery disease, hypertension).
- **no_notes** — Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Diabetes. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering lifestyle management strategies for Diabetes.
- **no_notes** — Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Osteoporosis. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering lifestyle management strategies for Osteoporosis.
- **no_notes** — Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders: Musculoskeletal disorders (e.g., osteoarthritis, Low back pain, Kyphosis, lordosis, flat foot, Knock knee). Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering lifestyle management strategies for musculoskeletal disorders (osteoarthritis, low back pain, kyphosis, lordosis, flat foot, knock knee).
- **no_notes** — Meaning, Aims and objectives of yoga. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering the meaning, aims, and objectives of yoga.
- **no_notes** — Classification and importance of Yogic Asanas (Sitting, Standing, lying). Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering the classification and importance of Yogic Asanas (sitting, standing, lying).
- **no_notes** — Pranayama and Its Types. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering Pranayama and its types.
- **no_notes** — Active Lifestyle and Stress Management Through Yoga. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering active lifestyle and stress management through yoga.
- **no_notes** — Understanding on substance abuse and addiction. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering substance abuse and addiction.
- **no_notes** — Psychoactive substances & its ill effects: Alcohol. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering Alcohol and its ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Opioids. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering Opioids and their ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Cannabis. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering Cannabis and its ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Sedative. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering Sedatives and their ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Cocaine. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering Cocaine and its ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Other stimulants, including caffeine. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering other stimulants (including caffeine) and their ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Hallucinogens. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering Hallucinogens and their ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Tobacco. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering Tobacco and its ill effects.
- **no_notes** — Psychoactive substances & its ill effects: Volatile solvents. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering Volatile solvents and their ill effects.

#### Official Module Module 4

- First aid and principles of First Aid
- Primary survey: ABC (Airway, Breathing, Circulation)
- Qualities of a Good First Aider
- First aid measures for: Cuts and scrapes
- First aid measures for: Bruises
- First aid measures for: Sprains
- First aid measures for: Strains
- First aid measures for: Fractures
- First aid measures for: Burns
- First aid measures for: Nosebleeds
- First Aid Procedures: Cardiopulmonary Resuscitation (CPR)
- First Aid Procedures: Heimlich Maneuver
- First Aid Procedures: Applying a sling
- Sports injuries: Classification (Soft Tissue Injuries - Abrasion, Contusion, Laceration, Incision, Sprain & Strain)

Coverage findings:

- **no_notes** — First aid and principles of First Aid. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering first aid and its principles.
- **no_notes** — Primary survey: ABC (Airway, Breathing, Circulation). Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering the primary survey: ABC (Airway, Breathing, Circulation).
- **no_notes** — Qualities of a Good First Aider. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering the qualities of a good first aider.
- **no_notes** — First aid measures for: Cuts and scrapes. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering first aid measures for cuts and scrapes.
- **no_notes** — First aid measures for: Bruises. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering first aid measures for bruises.
- **no_notes** — First aid measures for: Sprains. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering first aid measures for sprains.
- **no_notes** — First aid measures for: Strains. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering first aid measures for strains.
- **no_notes** — First aid measures for: Fractures. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering first aid measures for fractures.
- **no_notes** — First aid measures for: Burns. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering first aid measures for burns.
- **no_notes** — First aid measures for: Nosebleeds. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering first aid measures for nosebleeds.
- **no_notes** — First Aid Procedures: Cardiopulmonary Resuscitation (CPR). Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering Cardiopulmonary Resuscitation (CPR) procedures.
- **no_notes** — First Aid Procedures: Heimlich Maneuver. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering the Heimlich Maneuver procedure.
- **no_notes** — First Aid Procedures: Applying a sling. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering the procedure for applying a sling.
- **no_notes** — Sports injuries: Classification (Soft Tissue Injuries - Abrasion, Contusion, Laceration, Incision, Sprain & Strain). Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering classification of sports injuries (soft tissue injuries: abrasion, contusion, laceration, incision, sprain, and strain).

#### Official Module Additional Topics

- Need and Importance of Physical Education and its relevance in interdisciplinary context
- Understanding of the Endocrine System
- Developing a fitness profile
- Healthy foods habits for prevention and progression of Lifestyle Diseases
- Processed foods and unhealthy eating habits
- Depression - Anxiety - Stress
- Different ways of carrying an injured person
- Usage of Automated external defibrillator

Coverage findings:

- **no_notes** — Need and Importance of Physical Education and its relevance in interdisciplinary context. Evidence: No notes module files mapped to this course. Action: Create notes covering the need and importance of Physical Education and its interdisciplinary relevance.
- **no_notes** — Understanding of the Endocrine System. Evidence: No notes module files mapped to this course. Action: Create notes covering the Endocrine System.
- **no_notes** — Developing a fitness profile. Evidence: No notes module files mapped to this course. Action: Create notes covering how to develop a fitness profile.
- **no_notes** — Healthy foods habits for prevention and progression of Lifestyle Diseases. Evidence: No notes module files mapped to this course. Action: Create notes covering healthy food habits for prevention and progression of lifestyle diseases.
- **no_notes** — Processed foods and unhealthy eating habits. Evidence: No notes module files mapped to this course. Action: Create notes covering processed foods and unhealthy eating habits.
- **no_notes** — Depression - Anxiety - Stress. Evidence: No notes module files mapped to this course. Action: Create notes covering depression, anxiety, and stress.
- **no_notes** — Different ways of carrying an injured person. Evidence: No notes module files mapped to this course. Action: Create notes covering different ways of carrying an injured person.
- **no_notes** — Usage of Automated external defibrillator. Evidence: No notes module files mapped to this course. Action: Create notes covering the usage of an Automated External Defibrillator (AED).

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Syllabus reader findings:

- No course notes are available for UCHWT127 (Health and Wellness).

### Group C · CHEMISTRY FOR PHYSICAL SCIENCE (`GCCYT122`) — civil, me

- Official term label: SEMESTER S1/S2.
- Notes available: yes.
- Notes sources: `src/features/notes/chemistry-civil-mech-module-1/notes.md`, `src/features/notes/chemistry-civil-mech-module-2/notes.md`, `src/features/notes/chemistry-civil-mech-module-3/notes.md`, `src/features/notes/chemistry-civil-mech-module-4/notes.md`.
- Confidence: high.

#### Official Module Module 1: Engineering Materials

- Fuels: Calorific value – HCV and LCV
- Experimental determination of calorific value of solid fuels
- Analysis of coal – Proximate analysis
- Octane & Cetane Number
- Biofuels- Biodiesel
- Green Hydrogen
- Lubricants: Classification - Solid, Semisolid and Liquid lubricants
- Properties of lubricants - Viscosity Index, Flash point, Fire point, Cloud Point, Pour Point & Aniline Point
- Cement: Manufacture of Portland cement
- Theory of setting and hardening of cement
- Nanomaterials: Classification based on Dimension & Materials
- Synthesis – Sol gel & Chemical Reduction
- Applications of nanomaterials
- Supercapacitor Materials
- Carbon Nanotubes, Fullerenes & Graphene – structure, properties & application
- Polymers: ABS & Kevlar - Synthesis, properties and applications
- Conducting Polymers- Classification – Application

Coverage findings:

- **covered** — Fuels: Calorific value – HCV and LCV. Found in: chemistry-civil-mech-module-1. Evidence: Page 2 and Page 3 define Calorific Value, HCV, LCV, and their mathematical relationship, plus Dulong's formula.
- **covered** — Experimental determination of calorific value of solid fuels. Found in: chemistry-civil-mech-module-1. Evidence: Page 2 and Page 3 cover Bomb Calorimeter construction, working, calculations, and experimental corrections (fuse wire, acid, cooling).
- **covered** — Analysis of coal – Proximate analysis. Found in: chemistry-civil-mech-module-1. Evidence: Page 4 covers classification of coal ranks and Proximate Analysis (moisture, volatile matter, ash, fixed carbon) with procedures, formulas, and significance.
- **covered** — Octane & Cetane Number. Found in: chemistry-civil-mech-module-1. Evidence: Page 4 and Page 5 cover knocking, Cetane number (n-hexadecane and 1-methylnaphthalene), and Octane number (iso-octane and n-heptane).
- **covered** — Biofuels- Biodiesel. Found in: chemistry-civil-mech-module-1. Evidence: Page 5 and Page 6 cover biofuels, biodiesel definition, production via transesterification of rapeseed oil, and advantages.
- **covered** — Green Hydrogen. Found in: chemistry-civil-mech-module-1. Evidence: Page 6 covers hydrogen classification (Blue, Grey, Brown, Pink, Green), electrolytic water splitting, electrolyzers (AWE, PEMWE, SOWE), and applications of green hydrogen.
- **partial** — Lubricants: Classification - Solid, Semisolid and Liquid lubricants. Found in: chemistry-civil-mech-module-1. Evidence: Page 7 covers Semisolid lubricants (Greases: calcium, lithium, sodium, aluminum, axle) and Liquid lubricants (vegetable/animal, mineral, synthetic). Solid lubricants (e.g., graphite, MoS2) are missing from the classification section. Action: Add a section explaining Solid Lubricants (such as graphite and molybdenum disulfide, their structure, properties, and applications) under Classification of Lubricants on Page 7.
- **covered** — Properties of lubricants - Viscosity Index, Flash point, Fire point, Cloud Point, Pour Point & Aniline Point. Found in: chemistry-civil-mech-module-1. Evidence: Page 7 covers Viscosity and Viscosity Index (with formula), Flash and Fire Point, Cloud and Pour Point, and Aniline Point.
- **covered** — Cement: Manufacture of Portland cement. Found in: chemistry-civil-mech-module-1. Evidence: Page 8 covers classification of cement, raw materials, dry and wet mixing processes, rotary kiln zones, clinker formation, and mixing with gypsum.
- **partial** — Theory of setting and hardening of cement. Found in: chemistry-civil-mech-module-1. Evidence: Page 8 briefly defines stiffening, setting, and hardening as physical stages and mentions microstructural formation, but omits the specific chemical hydration reactions of C3A, C4AF, C3S, and C2S with water and gypsum. Action: Add detailed chemical equations and explanations for the hydration, setting, and hardening reactions of individual clinker compounds (C3A, C3S, C2S, C4AF).
- **covered** — Nanomaterials: Classification based on Dimension & Materials. Found in: chemistry-civil-mech-module-1. Evidence: Page 11 covers Dimensional Classification (0-D, 1-D, 2-D, 3-D) and Classification Based on Materials (carbon-based, metal-based, nanocomposites, dendrimers, biological).
- **covered** — Synthesis – Sol gel & Chemical Reduction. Found in: chemistry-civil-mech-module-1. Evidence: Page 11 covers Sol-Gel Method (with Al(OR)3 hydrolysis equation) and Chemical and Electrochemical Reduction (AgNO3 reduction with trisodium citrate and Cu electro-reduction).
- **covered** — Applications of nanomaterials. Found in: chemistry-civil-mech-module-1. Evidence: Page 11 lists general applications of nanomaterials in solar cells, dense parts/coatings, transistors, paper batteries, and supercapacitors.
- **partial** — Supercapacitor Materials. Found in: chemistry-civil-mech-module-1. Evidence: Pages 11 and 12 briefly mention in bullet points that carbon-based nanoparticles, graphene, and CNTs are used in supercapacitors/ultra-capacitors, but there is no dedicated explanation of supercapacitor materials, principles, or classification. Action: Add a dedicated subsection on Supercapacitor Materials explaining what supercapacitors are and the types of nanomaterials used as electrodes (e.g., carbon nanomaterials, metal oxides, conducting polymers).
- **covered** — Carbon Nanotubes, Fullerenes & Graphene – structure, properties & application. Found in: chemistry-civil-mech-module-1. Evidence: Pages 11 and 12 detail the structure, properties, and applications of Graphene, Carbon Nanotubes (SWNTs, MWNTs), and Fullerenes (C60).
- **covered** — Polymers: ABS & Kevlar - Synthesis, properties and applications. Found in: chemistry-civil-mech-module-1. Evidence: Pages 8 and 9 detail the synthesis reactions, bonding, properties, and uses of ABS and Kevlar.
- **partial** — Conducting Polymers- Classification – Application. Found in: chemistry-civil-mech-module-1. Evidence: Pages 9 and 10 cover the classification (intrinsically conducting, p-doping, n-doping, extrinsically conducting) and conduction mechanisms thoroughly, but applications of conducting polymers are missing. Action: Add a section listing the engineering applications of conducting polymers (e.g., OLEDs, sensors, rechargeable batteries, antistatic coatings, smart windows).

#### Official Module Module 2: Electrochemistry and Corrosion Science

- Electrochemical Cell
- Electrode potential
- Nernst equation for single electrode and cell (Numerical problems)
- Reference electrodes – SHE & Calomel electrode – Construction and Working
- Electrochemical series - Applications
- Glass Electrode & pH Measurement
- Conductivity- Measurement using Digital conductivity meter
- Li-ion battery & H2-O2 fuel cell (acid electrolyte only) construction and working
- Corrosion – Electrochemical corrosion mechanism (acidic & alkaline medium)
- Galvanic series
- Corrosion control methods - Cathodic Protection - Sacrificial anodic protection and impressed current cathodic protection
- Electroplating of copper
- Electroless plating of Copper

Coverage findings:

- **covered** — Electrochemical Cell. Found in: chemistry-civil-mech-module-2. Evidence: Page 2 covers Electrolytic vs. Galvanic cells, Daniell cell reactions, IUPAC cell representation, and salt bridge functions.
- **partial** — Electrode potential. Found in: chemistry-civil-mech-module-2. Evidence: Pages 2, 3, and 4 discuss types of electrodes, measurement of electrode potential using SCE, and standard reduction/oxidation potentials in the electrochemical series, but lack a formal definition and explanation of the origin of single electrode potential (Helmholtz electrical double layer) and standard electrode potential. Action: Add explicit definitions and theoretical explanation for the origin of electrode potential and standard electrode potential on Page 2.
- **partial** — Nernst equation for single electrode and cell (Numerical problems). Found in: chemistry-civil-mech-module-2. Evidence: Nernst equation is only briefly mentioned in specific contexts: for Glass electrode on Page 3 (Eg = Eg0 - 0.0591 pH) and equilibrium constant on Page 4 (E = E0 - (0.0591/n) log K). The general Nernst equation derivation/formulation for a single electrode and complete cell, as well as worked numerical problems, are missing. Action: Add the derivation and general expressions of the Nernst equation for single electrodes and complete electrochemical cells, along with solved numerical problems.
- **covered** — Reference electrodes – SHE & Calomel electrode – Construction and Working. Found in: chemistry-civil-mech-module-2. Evidence: Pages 3 and 4 cover SHE (construction, characteristics, reactions, drawbacks) and Saturated Calomel Electrode (construction, electrode reaction, working for potential measurement, advantages).
- **covered** — Electrochemical series - Applications. Found in: chemistry-civil-mech-module-2. Evidence: Page 4 defines the electrochemical series and explains its applications (relative ease of oxidation/reduction, acid reaction to give H2, standard EMF calculation, displacement reactions, equilibrium constant, feasibility of redox reactions).
- **covered** — Glass Electrode & pH Measurement. Found in: chemistry-civil-mech-module-2. Evidence: Page 3 covers glass electrode construction, ion exchange mechanism, Nernst equation for glass electrode, and determination of unknown pH by coupling with SCE.
- **covered** — Conductivity- Measurement using Digital conductivity meter. Found in: chemistry-civil-mech-module-2. Evidence: Page 5 covers Ohm's law, resistance, conductance, resistivity, specific conductance (conductivity), cell constant determination with 0.1 M KCl, and conductivity measurement using a digital conductivity meter.
- **covered** — Li-ion battery & H2-O2 fuel cell (acid electrolyte only) construction and working. Found in: chemistry-civil-mech-module-2. Evidence: Pages 5 and 6 cover Lithium-ion cell (anode, cathode, electrolyte, charging/discharging intercalation reactions, applications) and H2-O2 fuel cell with phosphoric acid electrolyte (construction, operating conditions, half-cell reactions, applications).
- **covered** — Corrosion – Electrochemical corrosion mechanism (acidic & alkaline medium). Found in: chemistry-civil-mech-module-2. Evidence: Page 7 covers wet (electrochemical) corrosion mechanisms: Hydrogen evolution corrosion in acid and alkaline media, and Oxygen absorption corrosion in acid and alkaline media, including half-cell reactions and rust formation.
- **covered** — Galvanic series. Found in: chemistry-civil-mech-module-2. Evidence: Page 7 explains the galvanic series, lists 27 metals/alloys from active to noble, and compares the electrochemical series with the galvanic series.
- **covered** — Corrosion control methods - Cathodic Protection - Sacrificial anodic protection and impressed current cathodic protection. Found in: chemistry-civil-mech-module-2. Evidence: Page 8 covers cathodic protection via sacrificial anodic protection and impressed current cathodic protection with diagrams and explanations.
- **covered** — Electroplating of copper. Found in: chemistry-civil-mech-module-2. Evidence: Page 8 covers theory of electroplating, objectives, pretreatment, cathode/anode/electrolyte setup for copper electroplating (both active Cu anode and inert anode), and applications.
- **covered** — Electroless plating of Copper. Found in: chemistry-civil-mech-module-2. Evidence: Page 8 covers electroless plating principles, bath composition for copper, oxidation/reduction/net reactions, applications, advantages, and disadvantages.

#### Official Module Module 3: Instrumental Methods of Analysis

- Molecular Spectroscopy: Types of spectra
- Molecular energy levels
- Beer Lambert’s law – Numerical problems
- Electronic Spectroscopy – Principle, Types of electronic transitions
- Role of Conjugation in absorption maxima
- Electronic Spectroscopy – Instrumentation
- Electronic Spectroscopy – Applications
- Vibrational spectroscopy – Principle
- Number of vibrational modes - Vibrational modes of CO2 and H2O
- Vibrational spectroscopy – Applications
- Thermal analysis: TGA- Principle, instrumentation (block diagram) and applications
- TGA of CaC2O4.H2O and polymers
- DTA- Principle, instrumentation (block diagram) and applications
- DTA of CaC2O4.H2O
- Chromatography- Gas Chromatography- Principle, Instrumentation, Application
- Analysis of chemical composition of exhaust gases
- Electron Microscopic Techniques: SEM - Principle, instrumentation and Applications

Coverage findings:

- **covered** — Molecular Spectroscopy: Types of spectra. Found in: chemistry-civil-mech-module-3. Evidence: Pages 2 and 3 explain absorption and emission spectra.
- **covered** — Molecular energy levels. Found in: chemistry-civil-mech-module-3. Evidence: Pages 2 and 3 cover quantized molecular energy levels: electronic, vibrational, rotational, and translational energies.
- **partial** — Beer Lambert’s law – Numerical problems. Found in: chemistry-civil-mech-module-3. Evidence: Page 3 states the Beer-Lambert Law equation A = log(I0/I) = epsilon * c * l, but lacks full derivation/statement and has no numerical problems on Beer-Lambert's law (Page 2 only has a photon energy E = hc/lambda numerical example). Action: Add a thorough explanation/derivation of Beer-Lambert's law, its limitations, and solved numerical problems calculating absorbance, transmittance, molar absorptivity, concentration, or path length.
- **covered** — Electronic Spectroscopy – Principle, Types of electronic transitions. Found in: chemistry-civil-mech-module-3. Evidence: Page 3 covers UV-Vis spectroscopy principle and the four types of electronic transitions (sigma to sigma*, pi to pi*, n to pi*, n to sigma*).
- **covered** — Role of Conjugation in absorption maxima. Found in: chemistry-civil-mech-module-3. Evidence: Page 3 explains HOMO-LUMO transitions in ethylene (169 nm), 1,3-butadiene (217 nm), 1,3,5-hexatriene (258 nm), and benzene (255 nm), showing how increased conjugation increases lambda_max.
- **covered** — Electronic Spectroscopy – Instrumentation. Found in: chemistry-civil-mech-module-3. Evidence: Page 3 covers UV-Vis double-beam spectrophotometer components, working principle, and schematic diagram.
- **covered** — Electronic Spectroscopy – Applications. Found in: chemistry-civil-mech-module-3. Evidence: Page 3 lists six analytical applications of UV-Vis spectroscopy.
- **covered** — Vibrational spectroscopy – Principle. Found in: chemistry-civil-mech-module-3. Evidence: Page 4 covers the principle of IR spectroscopy, dipole moment change requirement for IR activity, and force constant/frequency equations.
- **covered** — Number of vibrational modes - Vibrational modes of CO2 and H2O. Found in: chemistry-civil-mech-module-3. Evidence: Page 4 covers vibrational degrees of freedom formulas (3n-5 and 3n-6) and details the vibrational modes of HCl, CO2 (4 modes), and H2O (3 modes) with diagrams.
- **covered** — Vibrational spectroscopy – Applications. Found in: chemistry-civil-mech-module-3. Evidence: Page 4 covers applications of IR spectroscopy: functional group identification, unknown compound identification (fingerprint region), purity determination, and distinguishing intermolecular vs. intramolecular hydrogen bonding.
- **covered** — Thermal analysis: TGA- Principle, instrumentation (block diagram) and applications. Found in: chemistry-civil-mech-module-3. Evidence: Page 5 covers TGA principle, instrumentation with block diagram, and applications.
- **covered** — TGA of CaC2O4.H2O and polymers. Found in: chemistry-civil-mech-module-3. Evidence: Page 5 details the multistep decomposition thermogram of calcium oxalate monohydrate (CaC2O4.H2O) and TGA curves of polymers (PVC, PMMA, LDPE, PTFE, PI).
- **covered** — DTA- Principle, instrumentation (block diagram) and applications. Found in: chemistry-civil-mech-module-3. Evidence: Page 5 covers DTA principle, instrumentation block diagram, and applications.
- **covered** — DTA of CaC2O4.H2O. Found in: chemistry-civil-mech-module-3. Evidence: Page 5 includes the DTA curve of CaC2O4.H2O showing endothermic and exothermic peaks with corresponding chemical equations.
- **covered** — Chromatography- Gas Chromatography- Principle, Instrumentation, Application. Found in: chemistry-civil-mech-module-3. Evidence: Pages 5 and 6 cover chromatography basics, GC principle, instrumentation (carrier gas, injection port, capillary/packed columns, TCD and FID detectors), experimental procedure, retention time, and general applications.
- **missing** — Analysis of chemical composition of exhaust gases. Evidence: Page 6 lists purity testing, blood alcohol concentration, and toxicological screening under GC applications, but does not mention or explain the analysis of the chemical composition of exhaust gases. Action: Add a subsection under Gas Chromatography Applications on Page 6 explaining how GC is used for the analysis of the chemical composition of exhaust gases.
- **covered** — Electron Microscopic Techniques: SEM - Principle, instrumentation and Applications. Found in: chemistry-civil-mech-module-3. Evidence: Page 7 covers SEM principle of operation, instrumentation components and diagram, applications, and disadvantages.

#### Official Module Module 4: Environmental Chemistry

- Water characteristics - Hardness - Types of hardness- Temporary and Permanent
- Disadvantages of hard water
- Degree of hardness (Numericals)
- Water softening methods- Ion exchange process- Principle, procedure and advantages
- Reverse osmosis – principle, process and advantages
- Water disinfection methods – chlorination- Break point chlorination, ozone and UV irradiation
- Dissolved oxygen (DO), BOD and COD- Definition & Significance
- Waste Management: Air Pollution- Sources & Effects
- Greenhouse Gases
- Ozone depletion
- Air Pollution - Control methods
- Sewage water treatment- Primary, Secondary and Tertiary - Flow diagram
- Trickling filter and UASB process
- Solid waste-disposal methods- Composting, Landfill & Incineration

Coverage findings:

- **covered** — Water characteristics - Hardness - Types of hardness- Temporary and Permanent. Found in: chemistry-civil-mech-module-4. Evidence: Page 2 explains hard water and compares temporary hardness (bicarbonates of Ca and Mg) and permanent hardness (chlorides and sulfates of Ca and Mg).
- **covered** — Disadvantages of hard water. Found in: chemistry-civil-mech-module-4. Evidence: Page 2 lists disadvantages of hard water in domestic use, boilers, fuel wastage, food/beverage preparation, and paper industry.
- **partial** — Degree of hardness (Numericals). Found in: chemistry-civil-mech-module-4. Evidence: Page 2 explains units of hardness (ppm, mg/L, Clarke's degree, French degree, meq/L), unit conversions, and why CaCO3 equivalent is used as the standard, but lacks any worked numerical problems calculating temporary, permanent, and total hardness. Action: Add the multiplication factor formula for converting salt concentrations to CaCO3 equivalents and include solved numerical problems on degree of hardness.
- **covered** — Water softening methods- Ion exchange process- Principle, procedure and advantages. Found in: chemistry-civil-mech-module-4. Evidence: Page 3 covers cation and anion exchange resins, exchange reactions, regeneration reactions, advantages, and disadvantages.
- **covered** — Reverse osmosis – principle, process and advantages. Found in: chemistry-civil-mech-module-4. Evidence: Page 3 covers osmosis vs. reverse osmosis, process parameters, membrane materials, diagram, advantages, and disadvantages.
- **covered** — Water disinfection methods – chlorination- Break point chlorination, ozone and UV irradiation. Found in: chemistry-civil-mech-module-4. Evidence: Pages 3 and 4 cover chlorination, HOCl formation, break-point chlorination curve and advantages, chloramine, ozone disinfection, bleaching powder, and UV light disinfection.
- **covered** — Dissolved oxygen (DO), BOD and COD- Definition & Significance. Found in: chemistry-civil-mech-module-4. Evidence: Page 5 defines DO (and factors affecting it), BOD, and COD, explains their significance in assessing water pollution, and compares BOD and COD.
- **covered** — Waste Management: Air Pollution- Sources & Effects. Found in: chemistry-civil-mech-module-4. Evidence: Page 7 covers gaseous pollutants (SO2, SO3, H2S, NOx, CO2, CO, O3, VOCs) and particulate pollutants (dust, smoke, smog, asbestos, lead, mercury) with their sources and effects.
- **covered** — Greenhouse Gases. Found in: chemistry-civil-mech-module-4. Evidence: Page 7 lists major greenhouse gases (CO2, CH4, N2O, O3, H2O, CFCs) and explains the greenhouse effect and climate change.
- **covered** — Ozone depletion. Found in: chemistry-civil-mech-module-4. Evidence: Page 7 explains stratospheric ozone cycle and catalytic destruction of ozone by CFCs (free-radical chain reactions) and nitric oxide.
- **covered** — Air Pollution - Control methods. Found in: chemistry-civil-mech-module-4. Evidence: Page 7 lists control methods including catalytic converters, tall chimneys, Cottrell electrostatic precipitators, and afforestation.
- **covered** — Sewage water treatment- Primary, Secondary and Tertiary - Flow diagram. Found in: chemistry-civil-mech-module-4. Evidence: Page 6 provides a complete flow diagram of sewage treatment and explains Primary (screening, sedimentation), Secondary (biological), and Tertiary (precipitation, nitrogen stripping, chlorination) treatment stages.
- **covered** — Trickling filter and UASB process. Found in: chemistry-civil-mech-module-4. Evidence: Page 6 explains the Trickling filter process and Upflow Anaerobic Sludge Blanket (UASB) process with diagrams.
- **covered** — Solid waste-disposal methods- Composting, Landfill & Incineration. Found in: chemistry-civil-mech-module-4. Evidence: Page 8 covers aerobic composting, vermicomposting, traditional and sanitary landfills (with leachate and methane management), and incineration.

Syllabus reader findings:

- Module 1, Page 8: In the Clinkering Zone equations, Tricalcium silicate (C3S) and Tricalcium aluminate (C3A) are omitted, and 'Di-calcium aluminate (C2A): 2CaO + 2Al2O3 -> 2CaO.Al2O3' is unbalanced and non-standard.
- Module 1, Page 10: 'polaron' and 'bipolaron' are misspelled as 'poloron' and 'bipoloron' in several figure captions and descriptions.
- Module 1, Page 10: The figure caption 'Propagation of bipoloron through conjugated polymer chain' shows a '-1e-' reaction arrow instead of '+1e-' for the reduction step.
- Module 2, Page 3: At the very end of the page, there is a stray JSON artifact: '2. It can be used to find the pH of oxidising, reducing and even coloured solutions."
}'.
- Module 2, Page 3: Under 'Numerical Example: Determine the electrode potential of calomel using Copper electrode', only a hint and anode reaction are given; the actual numerical problem and calculation are missing.
- Module 2, Page 4: Under 'Applications of Electrochemical Series', items 4 ('Displacement reactions'), 4 ('Calculation of Equilibrium Constant'), and 4 ('Feasibility of a Redox Reaction') all share the number 4.
- Module 2, Page 4: The Calomel Electrode Reference System is repeated at the bottom of Page 4 after already being covered on Page 3.
- Module 3, Pages 2 and 3: 'Types of Spectra and Molecular Energy Levels' is covered on Page 2 and then repeated again at the top of Page 3.
- Module 3, Page 3: Under Analytical Applications item 3, there is a stray German word/typo 'ihrer' at the end of the sentence.
- Module 3, Page 7: The figure description for the SEM diagram notes 'Four empty rectangular boxes are present adjacent to the condenser lens, scan coils, and anode', indicating missing labels in the diagram asset.
- Module 4, Page 3: In the Ion Exchange Process section, the anion exchange reaction for sulfate is chemically incorrect: '2R+OH- + SO4^2- -> 2RCl + 2OH-' (produces 2RCl instead of R2SO4), and two editorial notes '[Note: The equation text above appears as printed on the page]' are left visible to the reader.
- Module 4, Page 6: 'UASB' is repeatedly misspelled as 'USAB' in the section heading, figure caption, and diagram labels.

### Group C · GCESL106 (`GCESL106`) — civil, me

- Official term label: SEMESTER S1.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Uncertainties:

- Official course section retained verbatim because no current note module file maps to this subject.

### Group C · ENGINEERING MECHANICS (`GCEST103`) — civil, me

- Official term label: SEMESTER S1.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

#### Official Module Module 1

- Introduction to statics: introduction to branches of mechanics
- concept of rigid body
- scalars and vectors
- vector operations
- forces in space
- Support reactions of beams (point load and UDL only)
- Force systems: rectangular components in 2D and 3D
- moment and couple
- resultants
- Equilibrium: system isolation and the free-body diagram
- equilibrium conditions 2D and 3D

Coverage findings:

- **no_notes** — Introduction to statics: introduction to branches of mechanics. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering introduction to statics and branches of mechanics.
- **no_notes** — concept of rigid body. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering the concept of rigid body.
- **no_notes** — scalars and vectors. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering scalars and vectors.
- **no_notes** — vector operations. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering vector operations.
- **no_notes** — forces in space. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering forces in space.
- **no_notes** — Support reactions of beams (point load and UDL only). Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering support reactions of beams under point load and UDL.
- **no_notes** — Force systems: rectangular components in 2D and 3D. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering rectangular components of force systems in 2D and 3D.
- **no_notes** — moment and couple. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering moment and couple.
- **no_notes** — resultants. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering resultants of force systems.
- **no_notes** — Equilibrium: system isolation and the free-body diagram. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering system isolation and free-body diagrams.
- **no_notes** — equilibrium conditions 2D and 3D. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering equilibrium conditions in 2D and 3D.

#### Official Module Module 2

- Friction: laws of friction
- analysis of blocks and ladder
- Centroid of composite areas
- moment of inertia
- parallel axis and perpendicular axis theorems
- Polar moment of inertia
- radius of gyration
- mass moment of inertia-ring and disc

Coverage findings:

- **no_notes** — Friction: laws of friction. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering friction and laws of friction.
- **no_notes** — analysis of blocks and ladder. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering friction analysis of blocks and ladders.
- **no_notes** — Centroid of composite areas. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering centroid of composite areas.
- **no_notes** — moment of inertia. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering moment of inertia.
- **no_notes** — parallel axis and perpendicular axis theorems. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering parallel axis and perpendicular axis theorems.
- **no_notes** — Polar moment of inertia. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering polar moment of inertia.
- **no_notes** — radius of gyration. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering radius of gyration.
- **no_notes** — mass moment of inertia-ring and disc. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering mass moment of inertia of ring and disc.

#### Official Module Module 3

- Dynamics: rectilinear translation
- equations of motion in kinematics and kinetics
- D'Alembert's principle
- motion on horizontal and inclined surfaces
- motion of connected bodies

Coverage findings:

- **no_notes** — Dynamics: rectilinear translation. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering dynamics of rectilinear translation.
- **no_notes** — equations of motion in kinematics and kinetics. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering equations of motion in kinematics and kinetics.
- **no_notes** — D'Alembert's principle. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering D'Alembert's principle.
- **no_notes** — motion on horizontal and inclined surfaces. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering motion on horizontal and inclined surfaces.
- **no_notes** — motion of connected bodies. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering motion of connected bodies.

#### Official Module Module 4

- Curvilinear translation: equations of kinematics
- projectile motion (solution starting from differential equations)
- Rotation: kinematics of rotation
- equation of motion for a rigid body rotating about a fixed axis
- rotation under a constant moment

Coverage findings:

- **no_notes** — Curvilinear translation: equations of kinematics. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering curvilinear translation and its kinematic equations.
- **no_notes** — projectile motion (solution starting from differential equations). Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering projectile motion starting from differential equations.
- **no_notes** — Rotation: kinematics of rotation. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering kinematics of rotation.
- **no_notes** — equation of motion for a rigid body rotating about a fixed axis. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering the equation of motion for a rigid body rotating about a fixed axis.
- **no_notes** — rotation under a constant moment. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering rotation under a constant moment.

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Syllabus reader findings:

- No notes modules are mapped or available for GCEST103 (Engineering Mechanics).

### Group C · INTRODUCTION TO MECHANICAL ENGINEERING & CIVIL ENGINEERING (`GCEST104`) — civil, me

- Official term label: SEMESTER S1.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

#### Official Module Module 1

- General introduction to Mechanical Engineering
- Thermodynamic cycles - Carnot Cycle - Derivation of efficiency (problems on efficiency)
- Otto, Diesel cycles (no derivation of efficiency and problems)
- IC Engines: CI & SI Engines
- Working of 2-Stroke & 4-Stroke engines
- Listing the parts of IC Engines
- Concept of CRDI, MPFI and hybrid engines
- Refrigeration: Unit of refrigeration
- Reversed Carnot cycle, COP
- Vapour compression cycle (only description and no problems)
- Definitions of dry, wet & dew point temperatures, specific humidity and relative humidity
- Psychrometric chart
- Cooling and dehumidification
- Layout of central air conditioning systems

Coverage findings:

- **no_notes** — General introduction to Mechanical Engineering. Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes covering general introduction to Mechanical Engineering.
- **no_notes** — Thermodynamic cycles - Carnot Cycle - Derivation of efficiency (problems on efficiency). Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes covering Carnot cycle, efficiency derivation, and solved problems.
- **no_notes** — Otto, Diesel cycles (no derivation of efficiency and problems). Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes explaining Otto and Diesel cycles without derivations or problems.
- **no_notes** — IC Engines: CI & SI Engines. Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes covering CI and SI engines.
- **no_notes** — Working of 2-Stroke & 4-Stroke engines. Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes explaining the working of 2-stroke and 4-stroke engines.
- **no_notes** — Listing the parts of IC Engines. Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes listing the parts of IC engines.
- **no_notes** — Concept of CRDI, MPFI and hybrid engines. Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes explaining the concepts of CRDI, MPFI, and hybrid engines.
- **no_notes** — Refrigeration: Unit of refrigeration. Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes defining refrigeration and unit of refrigeration.
- **no_notes** — Reversed Carnot cycle, COP. Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes covering reversed Carnot cycle and COP.
- **no_notes** — Vapour compression cycle (only description and no problems). Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes describing the vapour compression cycle.
- **no_notes** — Definitions of dry, wet & dew point temperatures, specific humidity and relative humidity. Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes defining dry, wet, and dew point temperatures, specific humidity, and relative humidity.
- **no_notes** — Psychrometric chart. Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes explaining the psychrometric chart.
- **no_notes** — Cooling and dehumidification. Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes covering cooling and dehumidification.
- **no_notes** — Layout of central air conditioning systems. Evidence: No note files supplied for GCEST104. Action: Create Module 1 notes illustrating and explaining the layout of central air conditioning systems.

#### Official Module Module 2

- Classification of pumps
- Description about working with sketches of: Reciprocating pump, Centrifugal pump
- Classification of Hydraulic Turbines
- Different type of gears and its applications (spur, helical, bevel, worm and worm wheel)
- List types of clutches and their use
- Bearings and their classification (Journal bearing and ball bearing)
- Manufacturing Process: Sand Casting, Forging, Rolling, Extrusion
- Metal Joining Processes: List types of welding
- Description with sketches of Arc Welding, SMAW, Soldering and Brazing and their applications
- Machining processes: Description and operations performed on Lathe, Drilling machine, Milling machine
- CNC machine
- 3D printing

Coverage findings:

- **no_notes** — Classification of pumps. Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes covering classification of pumps.
- **no_notes** — Description about working with sketches of: Reciprocating pump, Centrifugal pump. Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes describing the working and sketches of reciprocating and centrifugal pumps.
- **no_notes** — Classification of Hydraulic Turbines. Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes covering classification of hydraulic turbines.
- **no_notes** — Different type of gears and its applications (spur, helical, bevel, worm and worm wheel). Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes covering spur, helical, bevel, and worm and worm wheel gears and their applications.
- **no_notes** — List types of clutches and their use. Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes listing types of clutches and their uses.
- **no_notes** — Bearings and their classification (Journal bearing and ball bearing). Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes covering bearings and their classification including journal and ball bearings.
- **no_notes** — Manufacturing Process: Sand Casting, Forging, Rolling, Extrusion. Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes covering sand casting, forging, rolling, and extrusion.
- **no_notes** — Metal Joining Processes: List types of welding. Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes listing types of welding.
- **no_notes** — Description with sketches of Arc Welding, SMAW, Soldering and Brazing and their applications. Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes describing Arc Welding, SMAW, Soldering, and Brazing with sketches and applications.
- **no_notes** — Machining processes: Description and operations performed on Lathe, Drilling machine, Milling machine. Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes describing Lathe, Drilling machine, and Milling machine and their operations.
- **no_notes** — CNC machine. Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes covering description and operations of CNC machines.
- **no_notes** — 3D printing. Evidence: No note files supplied for GCEST104. Action: Create Module 2 notes covering 3D printing.

#### Official Module Module 3

- General Introduction to Civil Engineering: Relevance of Civil Engineering in the overall infrastructural development of the country
- Brief introduction to major disciplines of Civil Engineering like Structural Engineering, Geo-technical Engineering, Transportation Engineering, Water Resources Engineering and Environmental Engineering
- Introduction to buildings: Types of buildings according to character of occupancy as per NBC
- Load bearing and non-load bearing building structures
- Components of a residential building and their functions (concept only)
- Selection of site for a residential building
- Building Area Definitions: Built up area, Plinth area, Floor area, Carpet area and Floor area ratio of a building as per KBR
- Building rules and regulations: Relevance of NBC, KBR & CRZ norms (brief discussion of relevance only)

Coverage findings:

- **no_notes** — General Introduction to Civil Engineering: Relevance of Civil Engineering in the overall infrastructural development of the country. Evidence: No note files supplied for GCEST104. Action: Create Module 3 notes covering the relevance of Civil Engineering in national infrastructural development.
- **no_notes** — Brief introduction to major disciplines of Civil Engineering like Structural Engineering, Geo-technical Engineering, Transportation Engineering, Water Resources Engineering and Environmental Engineering. Evidence: No note files supplied for GCEST104. Action: Create Module 3 notes introducing Structural, Geo-technical, Transportation, Water Resources, and Environmental Engineering.
- **no_notes** — Introduction to buildings: Types of buildings according to character of occupancy as per NBC. Evidence: No note files supplied for GCEST104. Action: Create Module 3 notes covering types of buildings according to character of occupancy as per NBC.
- **no_notes** — Load bearing and non-load bearing building structures. Evidence: No note files supplied for GCEST104. Action: Create Module 3 notes explaining load bearing and non-load bearing building structures.
- **no_notes** — Components of a residential building and their functions (concept only). Evidence: No note files supplied for GCEST104. Action: Create Module 3 notes covering components of a residential building and their functions.
- **no_notes** — Selection of site for a residential building. Evidence: No note files supplied for GCEST104. Action: Create Module 3 notes covering site selection criteria for a residential building.
- **no_notes** — Building Area Definitions: Built up area, Plinth area, Floor area, Carpet area and Floor area ratio of a building as per KBR. Evidence: No note files supplied for GCEST104. Action: Create Module 3 notes defining built up area, plinth area, floor area, carpet area, and FAR as per KBR.
- **no_notes** — Building rules and regulations: Relevance of NBC, KBR & CRZ norms (brief discussion of relevance only). Evidence: No note files supplied for GCEST104. Action: Create Module 3 notes briefly discussing the relevance of NBC, KBR, and CRZ norms.

#### Official Module Module 4

- Conventional construction materials: Brick, stone, sand, cement and timber - Classifications, Qualities, Tests and Uses of construction materials
- Cement concrete: Constituent materials, properties and types
- Tests on fresh and hardened concrete - slump test, cube compressive strength as per IS Codes
- Steel: Structural steel sections and steel reinforcements – types and uses
- Soil - Origin of soil - weathering of rocks, types of weathering

Coverage findings:

- **no_notes** — Conventional construction materials: Brick, stone, sand, cement and timber - Classifications, Qualities, Tests and Uses of construction materials. Evidence: No note files supplied for GCEST104. Action: Create Module 4 notes covering classifications, qualities, tests, and uses of brick, stone, sand, cement, and timber.
- **no_notes** — Cement concrete: Constituent materials, properties and types. Evidence: No note files supplied for GCEST104. Action: Create Module 4 notes covering constituent materials, properties, and types of cement concrete.
- **no_notes** — Tests on fresh and hardened concrete - slump test, cube compressive strength as per IS Codes. Evidence: No note files supplied for GCEST104. Action: Create Module 4 notes covering slump test and cube compressive strength test as per IS Codes.
- **no_notes** — Steel: Structural steel sections and steel reinforcements – types and uses. Evidence: No note files supplied for GCEST104. Action: Create Module 4 notes covering types and uses of structural steel sections and steel reinforcements.
- **no_notes** — Soil - Origin of soil - weathering of rocks, types of weathering. Evidence: No note files supplied for GCEST104. Action: Create Module 4 notes covering origin of soil, weathering of rocks, and types of weathering.

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Syllabus reader findings:

- No note files are currently mapped to course GCEST104.

### Group C · MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL SCIENCE - 1 (`GYMAT101`) — civil, me

- Official term label: SEMESTER S1.
- Notes available: yes.
- Notes sources: `src/features/notes/electrical-maths-module-1/notes.md`, `src/features/notes/electrical-maths-module-2/notes.md`, `src/features/notes/electrical-maths-module-3/notes.md`, `src/features/notes/electrical-maths-module-4/notes.md`.
- Confidence: high.

#### Official Module Module 1

- Linear systems of equations: Gauss elimination
- Row echelon form
- Linear Independence: rank of a matrix
- Solutions of linear systems: Existence, Uniqueness (without proof)
- The matrix Eigen Value Problem
- Determining Eigen values and Eigen vector
- Diagonalization of matrices

Coverage findings:

- **covered** — Linear systems of equations: Gauss elimination. Found in: electrical-maths-module-1. Evidence: Pages 2, 3, 7, and 8 explain matrix representations Ax = b, augmented matrices, elementary row operations, Gaussian elimination to upper triangular form, and back substitution with multiple worked examples.
- **covered** — Row echelon form. Found in: electrical-maths-module-1. Evidence: Pages 4 and 9 define row echelon form (pivots stepping strictly to the right, zero rows at the bottom) and apply echelon reduction to multiple matrices.
- **covered** — Linear Independence: rank of a matrix. Found in: electrical-maths-module-1. Evidence: Pages 4 and 9 define linear combinations, linear independence/dependence of vectors, and matrix rank as the number of pivots in row echelon form (with rank(A) = rank(A^T)), alongside worked problems for 3x3, 3x4, and 4x4 matrices.
- **covered** — Solutions of linear systems: Existence, Uniqueness (without proof). Found in: electrical-maths-module-1. Evidence: Pages 4, 8, and 9 state and apply the Fundamental Theorem for Linear Systems: consistency iff rank(A) = rank([A|b]), unique solution when r = n, and infinitely many solutions with n - r free variables when r < n.
- **covered** — The matrix Eigen Value Problem. Found in: electrical-maths-module-1. Evidence: Pages 5 and 10 formulate Ax = \lambda x, (A - \lambda I)x = 0, the characteristic equation det(A - \lambda I) = 0, spectrum, spectral radius, and trace/minor invariant formulas.
- **covered** — Determining Eigen values and Eigen vector. Found in: electrical-maths-module-1. Evidence: Pages 5, 10, and 11 provide detailed worked examples computing eigenvalues and eigenvectors for 2x2 and 3x3 matrices, including distinct, repeated, defective, and complex conjugate eigenvalues.
- **covered** — Diagonalization of matrices. Found in: electrical-maths-module-1. Evidence: Pages 6 and 12 explain eigenspaces, algebraic and geometric multiplicity, modal matrix X, similarity transformation D = X^(-1)AX, matrix powers, and worked 2x2 and 3x3 diagonalization examples.

#### Official Module Module 2

- Homogeneous linear ODEs of second order
- Superposition principle
- General solution (homogeneous second-order linear ODE)
- Homogeneous linear ODEs of second order with constant coefficients (Method to find general solution, solution of linear Initial Value Problem)
- Non homogenous ODEs (with constant coefficients) - General solution
- Particular solution by the method of undetermined coefficients (Particular solutions for the functions ke^(\gamma x), kx^n, k\cos(\omega x), k\sin(\omega x), ke^(\alpha x)\cos(\omega x), ke^(\alpha x)\sin(\omega x))
- Initial value Problem for Non-Homogeneous Second order linear ODE (with constant coefficients)
- Solution by variation of parameters (Second Order)

Coverage findings:

- **covered** — Homogeneous linear ODEs of second order. Found in: electrical-maths-module-2. Evidence: Pages 2 and 6 introduce standard form y'' + p(x)y' + q(x)y = 0, solution verification, linear independence, Wronskian, and reduction of order.
- **covered** — Superposition principle. Found in: electrical-maths-module-2. Evidence: Page 2 explicitly explains the superposition principle for homogeneous linear equations: any linear combination y = c_1 y_1 + c_2 y_2 of solutions is also a solution.
- **covered** — General solution (homogeneous second-order linear ODE). Found in: electrical-maths-module-2. Evidence: Pages 2 and 6 define a basis (fundamental system) of two linearly independent solutions and form the general solution y = c_1 y_1 + c_2 y_2.
- **covered** — Homogeneous linear ODEs of second order with constant coefficients (Method to find general solution, solution of linear Initial Value Problem). Found in: electrical-maths-module-2. Evidence: Pages 3 and 7 derive the characteristic equation \lambda^2 + a\lambda + b = 0, cover all three root cases (distinct real, repeated real, complex conjugate), and solve multiple IVPs.
- **covered** — Non homogenous ODEs (with constant coefficients) - General solution. Found in: electrical-maths-module-2. Evidence: Pages 4 and 8 explain the structure of the general solution y(x) = y_h(x) + y_p(x) for driven constant-coefficient ODEs.
- **covered** — Particular solution by the method of undetermined coefficients (Particular solutions for the functions ke^(\gamma x), kx^n, k\cos(\omega x), k\sin(\omega x), ke^(\alpha x)\cos(\omega x), ke^(\alpha x)\sin(\omega x)). Found in: electrical-maths-module-2. Evidence: Pages 4, 8, and 9 state the basic, modification (resonance), and sum rules, present the complete trial-form table for all six listed function families, and work through examples for each.
- **covered** — Initial value Problem for Non-Homogeneous Second order linear ODE (with constant coefficients). Found in: electrical-maths-module-2. Evidence: Page 8 works three full non-homogeneous IVPs, emphasizing that initial conditions must be applied to the complete solution y = y_h + y_p.
- **covered** — Solution by variation of parameters (Second Order). Found in: electrical-maths-module-2. Evidence: Pages 5 and 10 derive and apply the Wronskian-based variation of parameters formula across five worked problems.

#### Official Module Module 3

- Laplace Transform
- Inverse Laplace Transform
- Linearity property
- First shifting theorem
- Transform of derivatives
- Solution of Initial value problems by Laplace transform (Second order linear ODE with constant coefficients with initial conditions at t=0 only)
- Unit step function
- Second shifting theorem
- Dirac delta function and its transform (Initial value problems involving unit step function and Dirac delta function are excluded)
- Convolution theorem (without proof) and its application to finding inverse Laplace transform of products of functions

Coverage findings:

- **covered** — Laplace Transform. Found in: electrical-maths-module-3. Evidence: Pages 2 and 7 define the unilateral Laplace transform integral and derive/apply transforms for standard elementary and trigonometric functions.
- **covered** — Inverse Laplace Transform. Found in: electrical-maths-module-3. Evidence: Pages 3, 8, and 9 cover inverse Laplace transforms via table lookup, completing the square, and partial fraction decomposition.
- **covered** — Linearity property. Found in: electrical-maths-module-3. Evidence: Pages 2, 3, 7, and 8 state and apply the linearity property for both forward and inverse Laplace transforms.
- **covered** — First shifting theorem. Found in: electrical-maths-module-3. Evidence: Pages 3, 7, and 8 explain and apply L{e^(at)f(t)} = F(s - a) in both forward and inverse directions.
- **covered** — Transform of derivatives. Found in: electrical-maths-module-3. Evidence: Pages 4 and 10 state and explain the Laplace transform formulas for first and second derivatives: L{y'} = sY(s) - y(0) and L{y''} = s^2Y(s) - sy(0) - y'(0).
- **covered** — Solution of Initial value problems by Laplace transform (Second order linear ODE with constant coefficients with initial conditions at t=0 only). Found in: electrical-maths-module-3. Evidence: Pages 4 and 10 demonstrate the full pipeline for solving second-order constant-coefficient IVPs with initial conditions at t = 0.
- **covered** — Unit step function. Found in: electrical-maths-module-3. Evidence: Pages 6 and 12 define the Heaviside unit step function u(t - a) and its Laplace transform e^(-as)/s.
- **covered** — Second shifting theorem. Found in: electrical-maths-module-3. Evidence: Pages 6 and 12 state L{f(t - a)u(t - a)} = e^(-as)F(s) and demonstrate algebraic time-shifting in worked examples.
- **covered** — Dirac delta function and its transform (Initial value problems involving unit step function and Dirac delta function are excluded). Found in: electrical-maths-module-3. Evidence: Pages 6 and 12 define the Dirac delta impulse \delta(t - a), its sifting property, and its transform L{f(t)\delta(t - a)} = f(a)e^(-as) and L{\delta(t - a)} = e^(-as), while appropriately excluding IVPs with step/delta inputs.
- **covered** — Convolution theorem (without proof) and its application to finding inverse Laplace transform of products of functions. Found in: electrical-maths-module-3. Evidence: Pages 5 and 11 define the convolution integral (f * g)(t), state the Convolution Theorem, and work through six inverse transform problems of products F(s)G(s).

#### Official Module Module 4

- Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains)
- Maclaurin series representation
- Fourier series
- Euler formulas
- Convergence of Fourier series (Dirichlet's conditions)
- Fourier series of 2\pi periodic functions
- Fourier series of 2l periodic functions
- Half range sine series expansion
- Half range cosine series expansion

Coverage findings:

- **covered** — Taylor series representation (without proof, assuming the possibility of power series expansion in appropriate domains). Found in: electrical-maths-module-4. Evidence: Pages 2 and 6 state the Taylor series formula centered at x_0 and work multiple examples (ln x, 1/x, 1/(1+x) at x_0 = 1) along with regions of convergence.
- **covered** — Maclaurin series representation. Found in: electrical-maths-module-4. Evidence: Pages 2 and 6 state the Maclaurin formula (x_0 = 0), provide standard expansions for e^x, sin x, cos x, and 1/(1-x), and derive several series via derivatives and algebraic substitution.
- **covered** — Fourier series. Found in: electrical-maths-module-4. Evidence: Pages 3, 7, and 8 define periodic functions, fundamental period 2L, and the trigonometric Fourier series representation.
- **covered** — Euler formulas. Found in: electrical-maths-module-4. Evidence: Pages 3, 7, and 8 state and apply Euler's integral formulas for Fourier coefficients a_0, a_n, and b_n.
- **covered** — Convergence of Fourier series (Dirichlet's conditions). Found in: electrical-maths-module-4. Evidence: Pages 3 and 4 state Dirichlet's conditions and Dirichlet's convergence theorem (converging to f(x_0) at continuity points and [f(x_0^-) + f(x_0^+)]/2 at jump discontinuities), applying it throughout pages 4, 7, 8, 9, and 10.
- **covered** — Fourier series of 2\pi periodic functions. Found in: electrical-maths-module-4. Evidence: Pages 4 and 7 work through seven full Fourier series problems on (-\pi, \pi) and [0, 2\pi].
- **covered** — Fourier series of 2l periodic functions. Found in: electrical-maths-module-4. Evidence: Pages 3 and 8 formulate and solve six Fourier series problems on arbitrary intervals [-L, L] and [0, 2L].
- **covered** — Half range sine series expansion. Found in: electrical-maths-module-4. Evidence: Pages 5 and 10 explain odd periodic extensions on [0, L] and work five half-range sine series problems.
- **covered** — Half range cosine series expansion. Found in: electrical-maths-module-4. Evidence: Pages 5 and 9 explain even periodic extensions on [0, L] and work five half-range cosine series problems.

Syllabus reader findings:

- Inconsistent notation for the Fourier constant term in Module 4: Page 3 and Page 5 use a_0/2 with a_0 = (1/L)\int f(x)dx (and 2/L for half-range), whereas Pages 7, 8, and 9 write the series with bare a_0 and define a_0 = (1/2L)\int f(x)dx (and 1/L for half-range) without alerting the reader to the convention switch.
- Several worked problems preserve transcription/source errors in their final Answer lines (even when a 'Watch out' box notes the error): e.g., Module 1 Page 11 Problem Q (matrix entries switched in solution); Module 2 Page 7 Problem 4.3 (extra '3 +' in final answer), Page 9 Problem 8 (wrong root e^(-3x) and sign +1/4 in answer), Page 9 Problem 4 (wrong root e^(-2x) in answer); Module 3 Page 7 Problems 10, 11, 16 (typos in final answers), Page 8 Problem 8 (unshifted numerator and wrong exponent in answer), Page 10 Problem 2 (dropped 's' in numerator) and Problem 4 (t^3 instead of t^2 in answer), Page 11 Problems 4 and 5 (typos in final answers); Module 4 Page 8 Problem 4.2.12 (upper limit evaluated at 1 instead of 2) and Problem 4.2.8 (typos in final series).
- Image references in Module 1 (page 7, 9) and Module 4 (pages 7, 8, 9, 10) point to '/assets/notes/ece/s1/maths/...' SVGs whose visual rendering cannot be verified from markdown text alone, though surrounding equations substantively cover the concepts.

Uncertainties:

- Visual contents of referenced SVG diagrams (/assets/notes/ece/s1/maths/module-1/*.svg and module-4/*.svg) cannot be directly inspected from the text, though all syllabus topics are fully explained in the prose and equations.

### Group C · PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE (Groups C & D) (`GZPHT121`) — civil, me

- Official term label: SEMESTER S1/S2.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

#### Official Module Module 1: Laser & Fibre Optics

- Optical processes - Absorption
- Optical processes - Spontaneous emission
- Optical processes - Stimulated emission
- Principle of laser
- Conditions for sustained lasing - Population inversion
- Conditions for sustained lasing - Pumping
- Conditions for sustained lasing - Metastable states
- Basic components of laser - Active medium
- Basic components of laser - Optical resonant cavity
- Construction and working of Ruby laser
- Construction and working of CO2 laser
- Construction and working of Semiconductor laser (qualitative)
- Properties of laser
- Applications of laser
- Optic fibre - Principle of propagation of light
- Types of fibres - Step index and Graded index fibres
- Types of fibres - Multimode and single mode fibers
- Acceptance angle
- Numerical aperture - Derivation
- Applications of optical fibres
- Fibre optic communication system (block diagram)

Coverage findings:

- **no_notes** — Optical processes - Absorption. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering absorption.
- **no_notes** — Optical processes - Spontaneous emission. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering spontaneous emission.
- **no_notes** — Optical processes - Stimulated emission. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering stimulated emission.
- **no_notes** — Principle of laser. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering the principle of laser.
- **no_notes** — Conditions for sustained lasing - Population inversion. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering population inversion.
- **no_notes** — Conditions for sustained lasing - Pumping. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering pumping.
- **no_notes** — Conditions for sustained lasing - Metastable states. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering metastable states.
- **no_notes** — Basic components of laser - Active medium. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering the active medium.
- **no_notes** — Basic components of laser - Optical resonant cavity. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering the optical resonant cavity.
- **no_notes** — Construction and working of Ruby laser. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering the construction and working of Ruby laser.
- **no_notes** — Construction and working of CO2 laser. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering the construction and working of CO2 laser.
- **no_notes** — Construction and working of Semiconductor laser (qualitative). Evidence: No note files supplied for this course. Action: Create Module 1 notes covering the qualitative construction and working of a semiconductor laser.
- **no_notes** — Properties of laser. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering properties of laser.
- **no_notes** — Applications of laser. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering applications of laser.
- **no_notes** — Optic fibre - Principle of propagation of light. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering principle of propagation of light in optical fibres.
- **no_notes** — Types of fibres - Step index and Graded index fibres. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering step index and graded index fibres.
- **no_notes** — Types of fibres - Multimode and single mode fibers. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering multimode and single mode fibres.
- **no_notes** — Acceptance angle. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering acceptance angle.
- **no_notes** — Numerical aperture - Derivation. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering the derivation of numerical aperture.
- **no_notes** — Applications of optical fibres. Evidence: No note files supplied for this course. Action: Create Module 1 notes covering applications of optical fibres.
- **no_notes** — Fibre optic communication system (block diagram). Evidence: No note files supplied for this course. Action: Create Module 1 notes covering the block diagram and explanation of a fibre optic communication system.

#### Official Module Module 2: Interference and Diffraction

- Interference - Introduction
- Principle of superposition
- Constructive and destructive interference
- Optical path
- Phase difference and path difference
- Cosine law - reflected system
- Condition for constructive and destructive interference (reflected system)
- Colours in thin films
- Newton's Rings - Determination of refractive index of transparent liquids
- Newton's Rings - Determination of wavelength
- Air wedge - Measurement of thickness of thin sheets
- Diffraction - Types of diffraction
- Diffraction due to a single slit
- Diffraction grating - Construction
- Diffraction grating - Grating equation
- Dispersive Power (qualitative)
- Resolving Power (qualitative)

Coverage findings:

- **no_notes** — Interference - Introduction. Evidence: No note files supplied for this course. Action: Create Module 2 notes introducing interference.
- **no_notes** — Principle of superposition. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering the principle of superposition.
- **no_notes** — Constructive and destructive interference. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering constructive and destructive interference.
- **no_notes** — Optical path. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering optical path.
- **no_notes** — Phase difference and path difference. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering phase difference and path difference.
- **no_notes** — Cosine law - reflected system. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering Cosine law for a reflected system.
- **no_notes** — Condition for constructive and destructive interference (reflected system). Evidence: No note files supplied for this course. Action: Create Module 2 notes covering conditions for constructive and destructive interference in a reflected system.
- **no_notes** — Colours in thin films. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering colours in thin films.
- **no_notes** — Newton's Rings - Determination of refractive index of transparent liquids. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering determination of refractive index of transparent liquids using Newton's Rings.
- **no_notes** — Newton's Rings - Determination of wavelength. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering determination of wavelength using Newton's Rings.
- **no_notes** — Air wedge - Measurement of thickness of thin sheets. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering measurement of thickness of thin sheets using an air wedge.
- **no_notes** — Diffraction - Types of diffraction. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering diffraction and types of diffraction.
- **no_notes** — Diffraction due to a single slit. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering diffraction due to a single slit.
- **no_notes** — Diffraction grating - Construction. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering diffraction grating construction.
- **no_notes** — Diffraction grating - Grating equation. Evidence: No note files supplied for this course. Action: Create Module 2 notes covering the grating equation.
- **no_notes** — Dispersive Power (qualitative). Evidence: No note files supplied for this course. Action: Create Module 2 notes covering dispersive power qualitatively.
- **no_notes** — Resolving Power (qualitative). Evidence: No note files supplied for this course. Action: Create Module 2 notes covering resolving power qualitatively.

#### Official Module Module 3: Quantum Mechanics

- Quantum Mechanics - Introduction
- Concept of uncertainty and conjugate observables (qualitative)
- Uncertainty principle (statement only)
- Application of uncertainty principle - Absence of electron inside nucleus
- Application of uncertainty principle - Natural line broadening
- Wave function - Properties
- Wave function - Physical interpretation
- Formulation of time dependent Schrodinger equation
- Formulation of time independent Schrodinger equation
- Particle in a one-dimensional box - Derivation of energy eigen values
- Particle in a one-dimensional box - Normalized wave function
- Quantum Mechanical Tunnelling (qualitative)

Coverage findings:

- **no_notes** — Quantum Mechanics - Introduction. Evidence: No note files supplied for this course. Action: Create Module 3 notes introducing quantum mechanics.
- **no_notes** — Concept of uncertainty and conjugate observables (qualitative). Evidence: No note files supplied for this course. Action: Create Module 3 notes covering the qualitative concept of uncertainty and conjugate observables.
- **no_notes** — Uncertainty principle (statement only). Evidence: No note files supplied for this course. Action: Create Module 3 notes stating the uncertainty principle.
- **no_notes** — Application of uncertainty principle - Absence of electron inside nucleus. Evidence: No note files supplied for this course. Action: Create Module 3 notes covering absence of electron inside the nucleus using the uncertainty principle.
- **no_notes** — Application of uncertainty principle - Natural line broadening. Evidence: No note files supplied for this course. Action: Create Module 3 notes covering natural line broadening using the uncertainty principle.
- **no_notes** — Wave function - Properties. Evidence: No note files supplied for this course. Action: Create Module 3 notes covering properties of the wave function.
- **no_notes** — Wave function - Physical interpretation. Evidence: No note files supplied for this course. Action: Create Module 3 notes covering physical interpretation of the wave function.
- **no_notes** — Formulation of time dependent Schrodinger equation. Evidence: No note files supplied for this course. Action: Create Module 3 notes covering the formulation of the time dependent Schrodinger equation.
- **no_notes** — Formulation of time independent Schrodinger equation. Evidence: No note files supplied for this course. Action: Create Module 3 notes covering the formulation of the time independent Schrodinger equation.
- **no_notes** — Particle in a one-dimensional box - Derivation of energy eigen values. Evidence: No note files supplied for this course. Action: Create Module 3 notes covering the derivation of energy eigenvalues for a particle in a 1D box.
- **no_notes** — Particle in a one-dimensional box - Normalized wave function. Evidence: No note files supplied for this course. Action: Create Module 3 notes covering the normalized wave function for a particle in a 1D box.
- **no_notes** — Quantum Mechanical Tunnelling (qualitative). Evidence: No note files supplied for this course. Action: Create Module 3 notes covering quantum mechanical tunnelling qualitatively.

#### Official Module Module 4: Waves & Acoustics

- Waves - Transverse and longitudinal waves
- Concept of frequency, wavelength and time period (no derivation)
- Transverse vibrations in a stretched string - Derivation of velocity and frequency
- Laws of transverse vibration
- Acoustics - Reverberation and echo
- Reverberation time and its significance
- Sabine's Formula
- Factors affecting acoustics of a building
- Ultrasonics - Piezoelectric oscillator
- Ultrasonic diffractometer
- SONAR
- NDT - Pulse echo method
- Medical application - Ultrasound scanning (qualitative)

Coverage findings:

- **no_notes** — Waves - Transverse and longitudinal waves. Evidence: No note files supplied for this course. Action: Create Module 4 notes covering transverse and longitudinal waves.
- **no_notes** — Concept of frequency, wavelength and time period (no derivation). Evidence: No note files supplied for this course. Action: Create Module 4 notes covering the concepts of frequency, wavelength, and time period.
- **no_notes** — Transverse vibrations in a stretched string - Derivation of velocity and frequency. Evidence: No note files supplied for this course. Action: Create Module 4 notes covering the derivation of velocity and frequency of transverse vibrations in a stretched string.
- **no_notes** — Laws of transverse vibration. Evidence: No note files supplied for this course. Action: Create Module 4 notes covering the laws of transverse vibration.
- **no_notes** — Acoustics - Reverberation and echo. Evidence: No note files supplied for this course. Action: Create Module 4 notes covering reverberation and echo.
- **no_notes** — Reverberation time and its significance. Evidence: No note files supplied for this course. Action: Create Module 4 notes covering reverberation time and its significance.
- **no_notes** — Sabine's Formula. Evidence: No note files supplied for this course. Action: Create Module 4 notes covering Sabine's Formula.
- **no_notes** — Factors affecting acoustics of a building. Evidence: No note files supplied for this course. Action: Create Module 4 notes covering factors affecting acoustics of a building.
- **no_notes** — Ultrasonics - Piezoelectric oscillator. Evidence: No note files supplied for this course. Action: Create Module 4 notes covering ultrasonics and the piezoelectric oscillator.
- **no_notes** — Ultrasonic diffractometer. Evidence: No note files supplied for this course. Action: Create Module 4 notes covering the ultrasonic diffractometer.
- **no_notes** — SONAR. Evidence: No note files supplied for this course. Action: Create Module 4 notes covering SONAR.
- **no_notes** — NDT - Pulse echo method. Evidence: No note files supplied for this course. Action: Create Module 4 notes covering NDT pulse echo method.
- **no_notes** — Medical application - Ultrasound scanning (qualitative). Evidence: No note files supplied for this course. Action: Create Module 4 notes covering ultrasound scanning qualitatively.

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Syllabus reader findings:

- No notes module files are mapped or available for GZPHT121.

### Group C · ALGORITHMIC THINKING WITH PYTHON (`UCEST105`) — civil, me

- Official term label: SEMESTER S1 / B.Tech 2024 –S1/S2.
- Notes available: yes.
- Notes sources: `src/features/notes/python-module-1/notes.md`, `src/features/notes/python-module-2/notes.md`, `src/features/notes/python-module-3/notes.md`, `src/features/notes/python-module-4/notes.md`.
- Confidence: high.

#### Official Module Module 1

- Problem-solving strategies defined
- Importance of understanding multiple problem-solving strategies
- Trial and Error
- Heuristics
- Means-Ends Analysis
- Backtracking (Working backward)
- Computer as a model of computation
- Understanding the problem
- Formulating a model
- Developing an algorithm
- Writing the program
- Testing the program
- Evaluating the solution
- Creating and using variables in Python
- Numeric and String data types in Python
- Using the math module
- Using the Python Standard Library for handling basic I/O - print, input
- Python operators and their precedence

Coverage findings:

- **covered** — Problem-solving strategies defined. Found in: python-module-1. Evidence: Page 1 defines problem-solving strategy and problem classification (well-defined vs ill-defined).
- **covered** — Importance of understanding multiple problem-solving strategies. Found in: python-module-1. Evidence: Pages 1 and 2 explain the importance and benefits of strategy selection (Adaptability, Efficiency, Improved outcomes, Skill development).
- **covered** — Trial and Error. Found in: python-module-1. Evidence: Pages 1, 2, and 13 explain Trial and Error with operational steps and examples (printer troubleshooting, password recovery, jigsaw puzzle).
- **covered** — Heuristics. Found in: python-module-1. Evidence: Pages 2 and 13 define heuristics, conditions for use, common heuristic strategies (breaking into sub-tasks, guess and check, working backwards), and restaurant selection.
- **covered** — Means-Ends Analysis. Found in: python-module-1. Evidence: Pages 2 and 13 cover Means-Ends Analysis with Tower of Hanoi, Trivandrum to Kashmir road trip, and software development examples.
- **covered** — Backtracking (Working backward). Found in: python-module-1. Evidence: Pages 2 and 13 cover Working Backwards and Backtracking with state-space search tree and Sudoku examples.
- **covered** — Computer as a model of computation. Found in: python-module-1. Evidence: Pages 2 and 3 explain Von Neumann architecture, instruction execution cycle (Fetch-Decode-Execute), CPU, ALU, CU, registers, I/O devices, and memory hierarchy.
- **covered** — Understanding the problem. Found in: python-module-1. Evidence: Pages 3 and 4 explain input requirements, output requirements, and processing considerations with worked examples.
- **covered** — Formulating a model. Found in: python-module-1. Evidence: Page 4 covers formulating mathematical/computational models for sum, class average, and quadratic discriminant.
- **covered** — Developing an algorithm. Found in: python-module-1. Evidence: Page 4 covers developing algorithms, pseudocode, and flowcharts for the worked examples.
- **covered** — Writing the program. Found in: python-module-1. Evidence: Page 4 explains coding/implementing algorithms in Python, compiling, and debugging.
- **covered** — Testing the program. Found in: python-module-1. Evidence: Page 4 explains testing programs with test suites and identifying bugs.
- **covered** — Evaluating the solution. Found in: python-module-1. Evidence: Page 4 explains evaluating program output against original requirements.
- **covered** — Creating and using variables in Python. Found in: python-module-1. Evidence: Pages 6, 7, and 8 cover identifiers, naming rules, dynamic typing, variable assignment, and multiple assignment.
- **covered** — Numeric and String data types in Python. Found in: python-module-1. Evidence: Pages 7, 8, and 13 cover int, float, complex, string literals, escape sequences, and type casting.
- **covered** — Using the math module. Found in: python-module-1. Evidence: Pages 8 and 9 cover import math, sqrt, ceil, floor, fabs, pi, factorial, gcd, exp, pow, log, sin, cos, tan.
- **covered** — Using the Python Standard Library for handling basic I/O - print, input. Found in: python-module-1. Evidence: Page 9 covers input() with prompt, type conversion, split(), and print() with sep and end parameters.
- **covered** — Python operators and their precedence. Found in: python-module-1. Evidence: Pages 9, 10, 11, and 12 cover arithmetic, comparison, assignment, bitwise, logical, membership, and identity operators, plus precedence tables and evaluation trees.

#### Official Module Module 2

- Meaning and Definition of Pseudocode
- Reasons for using pseudocode
- The main constructs of pseudocode - Sequencing
- The main constructs of pseudocode - selection (if-else structure, case structure)
- The main constructs of pseudocode - repetition (for, while, repeat-until loops)
- Sample problem: Evaluate an expression, d=a+b*c
- Sample problem: find simple interest
- Sample problem: determine the larger of two numbers
- Sample problem: determine the smallest of three numbers
- Sample problem: determine the grade earned by a student based on KTU grade scale (using if-else and case structures)
- Sample problem: print the numbers from 1 to 50 in descending order
- Sample problem: find the sum of n numbers input by the user (using all the three loop variants)
- Sample problem: factorial of a number
- Sample problem: largest of n numbers
- Flowchart symbols - start and end
- Flowchart symbols - arithmetic calculations
- Flowchart symbols - input/output operation
- Flowchart symbols - decision (selection)
- Flowchart symbols - module name (call)
- Flowchart symbols - for loop (Hexagon)
- Flowchart symbols - flow-lines
- Flowchart symbols - on-page connector
- Flowchart symbols - off-page connector

Coverage findings:

- **covered** — Meaning and Definition of Pseudocode. Found in: python-module-2. Evidence: Pages 1, 18, and 19 define pseudocode and rules for writing it.
- **covered** — Reasons for using pseudocode. Found in: python-module-2. Evidence: Page 18 lists the benefits and reasons for using pseudocode.
- **covered** — The main constructs of pseudocode - Sequencing. Found in: python-module-2. Evidence: Page 21 defines sequence and pages 6, 16, 17 give sequential pseudocode examples.
- **covered** — The main constructs of pseudocode - selection (if-else structure, case structure). Found in: python-module-2. Evidence: Pages 10, 21, 22, 23, and 24 cover IF, IF/ELSE, ELSE IF, nested IF, and CASE/END CASE structures.
- **covered** — The main constructs of pseudocode - repetition (for, while, repeat-until loops). Found in: python-module-2. Evidence: Pages 21, 36, 37, 41, and 42 cover FOR, WHILE, and REPEAT/UNTIL loops.
- **missing** — Sample problem: Evaluate an expression, d=a+b*c. Evidence: No pseudocode or flowchart for evaluating d=a+b*c appears in python-module-2. Action: Add pseudocode and flowchart for evaluating the expression d = a + b * c in Module 2.
- **covered** — Sample problem: find simple interest. Found in: python-module-2. Evidence: Page 6 provides pseudocode and flowchart for calculating simple interest.
- **covered** — Sample problem: determine the larger of two numbers. Found in: python-module-2. Evidence: Page 7 provides pseudocode and flowchart for finding the larger of two numbers.
- **covered** — Sample problem: determine the smallest of three numbers. Found in: python-module-2. Evidence: Page 8 provides pseudocode and flowchart for finding the smallest of three numbers.
- **partial** — Sample problem: determine the grade earned by a student based on KTU grade scale (using if-else and case structures). Found in: python-module-2, python-module-3. Evidence: python-module-2 page 23 shows a brief IF/ELSE IF snippet for grades A/B/C and page 46 shows Python if/elif code for A-F; python-module-3 page 3 shows a Python function returning S/A/B/C/D/E/F. However, Module 2 lacks pseudocode and flowcharts for the KTU grade scale using both if-else and case structures. Action: Add pseudocode and flowcharts in Module 2 for determining student grade on the KTU grade scale using both if-else and case structures.
- **partial** — Sample problem: print the numbers from 1 to 50 in descending order. Found in: python-module-2. Evidence: Page 42 shows pseudocode for printing 10 down to 1 (`FOR i = 10 TO 1 STEP -1`), but the specific sample problem of printing 1 to 50 in descending order (with pseudocode and flowchart) is not explicitly worked out. Action: Add explicit pseudocode and flowchart for printing numbers from 50 down to 1 in Module 2.
- **partial** — Sample problem: find the sum of n numbers input by the user (using all the three loop variants). Found in: python-module-2. Evidence: Page 39 sums the first n natural numbers (1 to n) using a WHILE loop, and Page 40 sums n user-input student ages using a REPEAT-UNTIL loop, but summing n numbers input by the user across all three loop variants (FOR, WHILE, REPEAT-UNTIL) with flowcharts is not fully shown. Action: Add pseudocode and flowcharts for finding the sum of n numbers input by the user demonstrated across all three loop variants (for, while, repeat-until) in Module 2.
- **covered** — Sample problem: factorial of a number. Found in: python-module-2. Evidence: Pages 11, 12, and 25 provide pseudocode, trace, and flowcharts (ascending and descending counters) for factorial of a number.
- **missing** — Sample problem: largest of n numbers. Evidence: Module 2 covers larger of two numbers (page 7) and greatest of three numbers (pages 16, 19), but does not cover finding the largest of n numbers. Action: Add pseudocode and flowchart for finding the largest of n numbers in Module 2.
- **covered** — Flowchart symbols - start and end. Found in: python-module-2. Evidence: Page 2 explains the Terminator (oval/rounded rectangle) for START and STOP.
- **covered** — Flowchart symbols - arithmetic calculations. Found in: python-module-2. Evidence: Page 3 explains the Process rectangle for calculations and assignments.
- **covered** — Flowchart symbols - input/output operation. Found in: python-module-2. Evidence: Page 3 explains the Input/output parallelogram for reading and displaying data.
- **covered** — Flowchart symbols - decision (selection). Found in: python-module-2. Evidence: Page 4 explains the Decision diamond with Yes/No or True/False branches.
- **covered** — Flowchart symbols - module name (call). Found in: python-module-2. Evidence: Pages 5 and 38 explain the Predefined process rectangle with double vertical edges for calling a module/function.
- **covered** — Flowchart symbols - for loop (Hexagon). Found in: python-module-2. Evidence: Pages 5 and 38 explain the Hexagon symbol used for counter-loop (for loop) notation.
- **covered** — Flowchart symbols - flow-lines. Found in: python-module-2. Evidence: Page 2 explains Flow lines with arrowheads.
- **covered** — Flowchart symbols - on-page connector. Found in: python-module-2. Evidence: Page 4 explains the labelled circle for on-page connectors.
- **covered** — Flowchart symbols - off-page connector. Found in: python-module-2. Evidence: Page 4 explains the downward-pointing pentagon for off-page connectors.

#### Official Module Module 3

- Selection and Iteration using Python - if-else, elif
- Selection and Iteration using Python - for loop, range
- Selection and Iteration using Python - while loop
- Sequence data types in Python - list
- Sequence data types in Python - tuple
- Sequence data types in Python - set
- Sequence data types in Python - strings
- Sequence data types in Python - dictionary
- Creating and using Arrays in Python (using Numpy library)
- Problem decomposition as a strategy for solving complex problems (Merge sort and returning top three integers from a list of n>=3 integers examples)
- Modularization and Motivation for modularization
- Defining and using functions in Python
- Functions with multiple return values
- Recursion Defined
- Reasons for using Recursion
- The Call Stack and Recursion and the Stack
- Avoiding Circularity in Recursion
- Recursion sample problem - Finding the nth Fibonacci number
- Recursion sample problem - greatest common divisor of two positive integers
- Recursion sample problem - the factorial of a positive integer
- Recursion sample problem - adding two positive integers
- Recursion sample problem - the sum of digits of a positive number

Coverage findings:

- **covered** — Selection and Iteration using Python - if-else, elif. Found in: python-module-3. Evidence: Pages 2 and 3 cover one-way if, two-way if/else, and multi-way if/elif/else chains.
- **covered** — Selection and Iteration using Python - for loop, range. Found in: python-module-3. Evidence: Pages 4 and 5 cover for loops, range(stop), range(start, stop), range(start, stop, step), nested loops, and break/continue/pass.
- **covered** — Selection and Iteration using Python - while loop. Found in: python-module-3. Evidence: Pages 4 and 5 cover while loops and loop-control statements.
- **covered** — Sequence data types in Python - list. Found in: python-module-3. Evidence: Pages 15–20 cover list creation, indexing, traversal, comprehensions, slicing, shallow/deep copying, item insertion/deletion, and list methods.
- **covered** — Sequence data types in Python - tuple. Found in: python-module-3. Evidence: Page 21 covers tuple creation, single-item tuples, unpacking, immutability, and hashability.
- **covered** — Sequence data types in Python - set. Found in: python-module-3. Evidence: Pages 25–27 cover set creation, traversal, modification, subset/superset comparisons, and set algebra operations.
- **covered** — Sequence data types in Python - strings. Found in: python-module-3. Evidence: Pages 10–14 and 20 cover Unicode strings, indexing, immutability, slicing, comparison, string methods, string constants, and split/join.
- **covered** — Sequence data types in Python - dictionary. Found in: python-module-3. Evidence: Pages 28–29 cover dictionary creation, key/value rules, insertion order, lookup, deletion, and dictionary methods/views.
- **covered** — Creating and using Arrays in Python (using Numpy library). Found in: python-module-3. Evidence: Pages 22–24 cover NumPy ndarray creation, ndim, shape, size, dtype, indexing, slicing views vs copies, reshape, and matrix operations.
- **partial** — Problem decomposition as a strategy for solving complex problems (Merge sort and returning top three integers from a list of n>=3 integers examples). Found in: python-module-3, python-module-4. Evidence: python-module-3 page 7 defines decomposition briefly and page 20 shows `top_three(values)` returning the top three integers from a list. Merge sort is explained in python-module-4 page 4 under Divide and Conquer, not in Module 3 as a demonstration of problem decomposition and modularization. Action: Expand problem decomposition in Module 3 and explicitly demonstrate it using both Merge sort and returning the top three integers from a list of n>=3 integers.
- **covered** — Modularization and Motivation for modularization. Found in: python-module-3. Evidence: Page 7 explains modular design and the motivation for using functions (reducing duplicated logic, hiding implementation detail, reuse, debugging, and testing).
- **covered** — Defining and using functions in Python. Found in: python-module-3. Evidence: Pages 7–9 cover def, parameters, arguments, return values, local scope, and function calls.
- **missing** — Functions with multiple return values. Evidence: python-module-3 page 7 notes that a function may contain multiple return statements, and page 20 returns a list of 3 items, but returning multiple values from a function (e.g., tuple return and unpacking `return a, b`) is not explained or demonstrated. Action: Add explanation and examples of functions returning multiple values (and unpacking them) in Module 3.
- **misfiled** — Recursion Defined. Found in: python-module-4. Evidence: Absent from python-module-3. Briefly introduced in python-module-4 page 4 under 'Recursion in divide and conquer'. Action: Add a dedicated section defining Recursion in Module 3.
- **missing** — Reasons for using Recursion. Evidence: Not covered in python-module-3. Action: Add explanation of reasons for using recursion in Module 3.
- **missing** — The Call Stack and Recursion and the Stack. Evidence: Not covered in python-module-3 or any other module. Action: Add explanation and diagrams of the Call Stack and how recursion uses the stack in Module 3.
- **missing** — Avoiding Circularity in Recursion. Evidence: Not covered in python-module-3 (only a brief mention of base case in python-module-4 page 4). Action: Add explanation of base cases, progress toward base cases, and avoiding circularity/infinite recursion in Module 3.
- **misfiled** — Recursion sample problem - Finding the nth Fibonacci number. Found in: python-module-4. Evidence: Absent from python-module-3. Discussed in python-module-4 page 5 under Dynamic Programming. Action: Add the standard recursive function and trace for finding the nth Fibonacci number in Module 3.
- **missing** — Recursion sample problem - greatest common divisor of two positive integers. Evidence: Not covered recursively in python-module-3 (only `math.gcd` is shown in python-module-1 page 9). Action: Add recursive GCD algorithm and Python implementation in Module 3.
- **missing** — Recursion sample problem - the factorial of a positive integer. Evidence: Not covered recursively in python-module-3 (only iterative factorial in Module 2 and `math.factorial` in Module 1). Action: Add recursive factorial explanation and Python implementation in Module 3.
- **missing** — Recursion sample problem - adding two positive integers. Evidence: Not covered in python-module-3 or any other module. Action: Add recursive addition of two positive integers in Module 3.
- **missing** — Recursion sample problem - the sum of digits of a positive number. Evidence: Not covered in python-module-3 or any other module. Action: Add recursive sum of digits of a positive number in Module 3.

#### Official Module Module 4

- Brute-force Approach (Example: Padlock, Password guessing)
- Divide-and-conquer Approach - Example: The Merge Sort Algorithm
- Advantages of Divide and Conquer Approach
- Disadvantages of Divide and Conquer Approach
- Dynamic Programming Approach - Example: Fibonacci series
- Recursion vs Dynamic Programming
- Greedy Algorithm Approach - Example: maximum number of tasks completed in limited time given completion times array
- Motivations for the Greedy Approach
- Characteristics of the Greedy Algorithm
- Greedy Algorithms vs Dynamic Programming
- Randomized Approach - Example 1: Jeans coupon collector problem
- Randomized Approach - Example 2: Hat-check problem
- Motivations for the Randomized Approach

Coverage findings:

- **partial** — Brute-force Approach (Example: Padlock, Password guessing). Found in: python-module-4, python-module-1. Evidence: python-module-4 page 3 covers the Brute-force approach and the 4-digit padlock combination example. Password guessing is not in Module 4 (a password recovery example appears in python-module-1 page 2 under Trial and Error). Action: Explicitly include the password guessing example alongside the padlock example under Brute-force Approach in Module 4.
- **covered** — Divide-and-conquer Approach - Example: The Merge Sort Algorithm. Found in: python-module-4. Evidence: Page 4 covers Divide, Conquer, Combine steps and the Merge Sort algorithm with diagram and Python code.
- **covered** — Advantages of Divide and Conquer Approach. Found in: python-module-4. Evidence: Page 4 lists 5 advantages of the Divide and Conquer approach.
- **covered** — Disadvantages of Divide and Conquer Approach. Found in: python-module-4. Evidence: Page 4 lists 3 disadvantages of the Divide and Conquer approach.
- **covered** — Dynamic Programming Approach - Example: Fibonacci series. Found in: python-module-4. Evidence: Page 5 explains Dynamic Programming, overlapping sub-problems, memoization/tabulation, and the Fibonacci series example.
- **covered** — Recursion vs Dynamic Programming. Found in: python-module-4. Evidence: Page 5 compares plain recursion (and independent divide-and-conquer recursion) with dynamic programming.
- **partial** — Greedy Algorithm Approach - Example: maximum number of tasks completed in limited time given completion times array. Found in: python-module-4. Evidence: Page 6 explains the Greedy approach and mentions activity durations in hours under Characteristics, but the worked code example is interval Activity Selection `(start, finish)` rather than finding the maximum number of tasks completed within a limited total time budget from an array of task completion durations. Action: Add the exact syllabus example: given an array of positive integers indicating task completion times and a limited time budget, greedily sort durations ascending to maximize the number of completed tasks.
- **covered** — Motivations for the Greedy Approach. Found in: python-module-4. Evidence: Page 6 ('Why use greedy?') explains motivations for the greedy approach.
- **covered** — Characteristics of the Greedy Algorithm. Found in: python-module-4. Evidence: Page 6 ('Characteristics') lists the characteristics of greedy algorithms.
- **covered** — Greedy Algorithms vs Dynamic Programming. Found in: python-module-4. Evidence: Page 6 provides a comparison table between Greedy and Dynamic Programming.
- **covered** — Randomized Approach - Example 1: Jeans coupon collector problem. Found in: python-module-4. Evidence: Page 7 explains and simulates the jeans coupon collector problem and gives the expected value formula.
- **covered** — Randomized Approach - Example 2: Hat-check problem. Found in: python-module-4. Evidence: Page 7 explains and simulates the hat-check problem and states the expected value of 1.
- **covered** — Motivations for the Randomized Approach. Found in: python-module-4. Evidence: Page 7 ('Motivation') covers simplicity, large problem spaces, fairness, robustness, and mathematical guarantees.

Module boundary and misplaced-topic findings:

- Problem-solving examples: Jigsaw puzzle (Trial and error) and choosing a restaurant (Heuristics): official Module Module 1, found in Module python-module-2. Pages 26 and 27 of python-module-2 contain Module 1 problem-solving strategy examples (jigsaw puzzle and restaurant heuristic) that are already covered in Module 1; remove or relocate them from Module 2.
- Selection, Iteration, Lists, and NumPy Arrays in Python (if/elif, range, for loop, list indexing/slicing/sorting, NumPy arrays): official Module Module 3, found in Module python-module-2. Pages 44–50 of python-module-2 contain Python control flow (`range`, `for`, `if/elif`) and sequence/array topics (list slicing, sorting, NumPy arrays) which belong to Module 3.
- Sequence, mapping, and set data types (List, Tuple, Set, Dictionary): official Module Module 3, found in Module python-module-1. Page 8 of python-module-1 introduces List, Tuple, Dictionary, and Set, whereas Module 1 syllabus only specifies Numeric and String data types and Module 3 covers List, Tuple, Set, Strings, and Dictionary.
- Recursion and Finding the nth Fibonacci number: official Module Module 3, found in Module python-module-4. The entire Recursion unit of Module 3 is missing from python-module-3; basic recursion and Fibonacci recursion appear only briefly inside python-module-4 (pages 4–5). Add the complete Recursion section to Module 3.
- Merge sort as an example of Problem Decomposition: official Module Module 3, found in Module python-module-4. The syllabus footnote in Module 3 requires introducing Decomposition and Modularization using Merge sort and top-three integers. Merge sort is only in Module 4; reference or demonstrate Merge sort decomposition in Module 3.

Syllabus reader findings:

- Extensive duplicate content in python-module-1: pages 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, and 12 each repeat their own sections almost verbatim on the same page (likely from merging two OCR/slide extractions).
- Incorrect formula in python-module-1 page 4 under 'Class Average Case Study Review': `Average (in percentage) = (Average_2 / 13)` (earlier on the same page it was `/ 12 * 100`).
- Code/output mismatch in python-module-1 page 7 ('Explicit Type Conversion'): `x = '15'`, `y = int(x)`, `print(y + 5)` has comment `# Output: 15`, and `z = float(y)` has comment `# Output: 10.0`.
- Code/output mismatch in python-module-1 page 10 ('Assignment Operators Execution'): `a = 10` followed by `a += 5` prints `a += 5 : 105` instead of `15` (and subsequent outputs propagate `105`).
- Typo in output label in python-module-1 page 11 ('Bitwise Operations Example'): `a << 2` is printed as `a >> 2 : 240`.
- C-style operators `&&` and `||` are used in the Python operator precedence evaluation table in python-module-1 page 12 (`C&&D`, `A+3 < B*1 || C&&D`) instead of Python's `and` and `or`.
- Garbled math/text formatting in python-module-1 page 13 ('Expression 2'): `not False evaluates to (False) ->` instead of `True`.
- Page ordering in python-module-2 is scrambled: pages 2–13 jump straight into flowchart symbols and worked flowcharts, page 14 has 'References and further reading', and then pages 15–24 introduce 'What makes a good algorithm?' and 'Why use pseudocode?'.

### Group C · UCHUT128 (`UCHUT128`) — civil, me

- Official term label: SEMESTER 2.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Uncertainties:

- Official course section retained verbatim because no current note module file maps to this subject.

### Group C · HEALTH AND WELLNESS (`UCHWT127`) — civil, me

- Official term label: SEMESTER S1/S2.
- Notes available: no.
- Notes sources: none.
- Confidence: high.

#### Official Module Module 1

- Human Body Systems related to Physical activity and its functions: Respiratory System
- Cardiovascular System
- Musculoskeletal System and the Major Muscle groups of the Human Body
- Quantifying Physical Activity Energy Expenditure and Metabolic equivalent of task (MET)
- Exercise Continuum: Light-intensity physical activity, Moderate -intensity physical activity, Vigorous -intensity physical activity
- Defining Physical Activity, Aerobic Physical Activity, Anaerobic Physical Activity, Exercise and Health-Related Physical Fitness
- FITT principle to design an Exercise programme
- Components of Health-related Physical Fitness: Cardiorespiratory Fitness, Muscular strength, Muscular endurance, Flexibility, Body composition

Coverage findings:

- **no_notes** — Human Body Systems related to Physical activity and its functions: Respiratory System. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering the Respiratory System and its functions related to physical activity.
- **no_notes** — Cardiovascular System. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering the Cardiovascular System and its functions related to physical activity.
- **no_notes** — Musculoskeletal System and the Major Muscle groups of the Human Body. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering the Musculoskeletal System and major muscle groups of the human body.
- **no_notes** — Quantifying Physical Activity Energy Expenditure and Metabolic equivalent of task (MET). Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering quantifying physical activity energy expenditure and MET.
- **no_notes** — Exercise Continuum: Light-intensity physical activity, Moderate -intensity physical activity, Vigorous -intensity physical activity. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering the Exercise Continuum (light, moderate, and vigorous intensity physical activity).
- **no_notes** — Defining Physical Activity, Aerobic Physical Activity, Anaerobic Physical Activity, Exercise and Health-Related Physical Fitness. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes defining physical activity, aerobic and anaerobic physical activity, exercise, and health-related physical fitness.
- **no_notes** — FITT principle to design an Exercise programme. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes explaining the FITT principle for designing an exercise programme.
- **no_notes** — Components of Health-related Physical Fitness: Cardiorespiratory Fitness, Muscular strength, Muscular endurance, Flexibility, Body composition. Evidence: No notes module files mapped to this course. Action: Create Module 1 notes covering all five components of health-related physical fitness.

#### Official Module Module 2

- Concept of Health and Wellness: Health and wellness differentiation, Factors affecting health and wellness
- Mental health and Factors affecting mental health
- Sports and Socialization: Sports and character building
- Leadership through Physical Activity and Sports
- Diet and nutrition: Exploring Micro and Macronutrients: Concept of Balanced diet
- Carbohydrate & the Glycemic Index
- Animal & Plant - based Proteins and their Effects on Human Health
- Dietary Fats & their Effects on Human Health
- Essential Vitamins and Minerals

Coverage findings:

- **no_notes** — Concept of Health and Wellness: Health and wellness differentiation, Factors affecting health and wellness. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering the concept of health and wellness, their differentiation, and affecting factors.
- **no_notes** — Mental health and Factors affecting mental health. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering mental health and the factors affecting it.
- **no_notes** — Sports and Socialization: Sports and character building. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes on sports, socialization, and character building.
- **no_notes** — Leadership through Physical Activity and Sports. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering leadership through physical activity and sports.
- **no_notes** — Diet and nutrition: Exploring Micro and Macronutrients: Concept of Balanced diet. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes introducing diet and nutrition, micro and macronutrients, and the concept of a balanced diet.
- **no_notes** — Carbohydrate & the Glycemic Index. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering carbohydrates and the glycemic index.
- **no_notes** — Animal & Plant - based Proteins and their Effects on Human Health. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering animal and plant-based proteins and their health effects.
- **no_notes** — Dietary Fats & their Effects on Human Health. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering dietary fats and their effects on human health.
- **no_notes** — Essential Vitamins and Minerals. Evidence: No notes module files mapped to this course. Action: Create Module 2 notes covering essential vitamins and minerals.

#### Official Module Module 3

- Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders
- Obesity
- Cardiovascular diseases (e.g., coronary artery disease, hypertension)
- Diabetes
- Osteoporosis
- Musculoskeletal disorders (e.g., osteoarthritis, Low back pain, Kyphosis, lordosis , flat foot, Knock knee )
- Meaning, Aims and objectives of yoga
- Classification and importance of Yogic Asanas (Sitting, Standing, lying)
- Pranayama and Its Types
- Active Lifestyle and Stress Management Through Yoga
- Understanding on substance abuse and addiction
- Psychoactive substances & its ill effects: Alcohol, Opioids, Cannabis, Sedative, Cocaine, Other stimulants (including caffeine), Hallucinogens, Tobacco, Volatile solvents

Coverage findings:

- **no_notes** — Lifestyle management strategies to prevent / manage common hypokinetic diseases and disorders. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering lifestyle management strategies for hypokinetic diseases and disorders.
- **no_notes** — Obesity. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering prevention and management of obesity.
- **no_notes** — Cardiovascular diseases (e.g., coronary artery disease, hypertension). Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering cardiovascular diseases such as coronary artery disease and hypertension.
- **no_notes** — Diabetes. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering prevention and lifestyle management of diabetes.
- **no_notes** — Osteoporosis. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering prevention and lifestyle management of osteoporosis.
- **no_notes** — Musculoskeletal disorders (e.g., osteoarthritis, Low back pain, Kyphosis, lordosis , flat foot, Knock knee ). Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering musculoskeletal disorders including osteoarthritis, low back pain, kyphosis, lordosis, flat foot, and knock knee.
- **no_notes** — Meaning, Aims and objectives of yoga. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering the meaning, aims, and objectives of yoga.
- **no_notes** — Classification and importance of Yogic Asanas (Sitting, Standing, lying). Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering classification and importance of sitting, standing, and lying yogic asanas.
- **no_notes** — Pranayama and Its Types. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering Pranayama and its types.
- **no_notes** — Active Lifestyle and Stress Management Through Yoga. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes covering active lifestyle and stress management through yoga.
- **no_notes** — Understanding on substance abuse and addiction. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes explaining substance abuse and addiction.
- **no_notes** — Psychoactive substances & its ill effects: Alcohol, Opioids, Cannabis, Sedative, Cocaine, Other stimulants (including caffeine), Hallucinogens, Tobacco, Volatile solvents. Evidence: No notes module files mapped to this course. Action: Create Module 3 notes detailing psychoactive substances and their ill effects (alcohol, opioids, cannabis, sedatives, cocaine, stimulants/caffeine, hallucinogens, tobacco, volatile solvents).

#### Official Module Module 4

- First aid and principles of First Aid: Primary survey: ABC (Airway, Breathing, Circulation)
- Qualities of a Good First Aider
- First aid measures for: Cuts and scrapes, Bruises, Sprains, Strains, Fractures, Burns, Nosebleeds
- First Aid Procedures: Cardiopulmonary Resuscitation (CPR)
- Heimlich Maneuver
- Applying a sling
- Sports injuries: Classification (Soft Tissue Injuries - Abrasion, Contusion, Laceration, Incision, Sprain & Strain)

Coverage findings:

- **no_notes** — First aid and principles of First Aid: Primary survey: ABC (Airway, Breathing, Circulation). Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering first aid principles and the ABC primary survey.
- **no_notes** — Qualities of a Good First Aider. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering the qualities of a good first aider.
- **no_notes** — First aid measures for: Cuts and scrapes, Bruises, Sprains, Strains, Fractures, Burns, Nosebleeds. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering first aid measures for cuts/scrapes, bruises, sprains, strains, fractures, burns, and nosebleeds.
- **no_notes** — First Aid Procedures: Cardiopulmonary Resuscitation (CPR). Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering the procedure for Cardiopulmonary Resuscitation (CPR).
- **no_notes** — Heimlich Maneuver. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering the Heimlich Maneuver procedure.
- **no_notes** — Applying a sling. Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering the procedure for applying a sling.
- **no_notes** — Sports injuries: Classification (Soft Tissue Injuries - Abrasion, Contusion, Laceration, Incision, Sprain & Strain). Evidence: No notes module files mapped to this course. Action: Create Module 4 notes covering the classification of soft tissue sports injuries (abrasion, contusion, laceration, incision, sprain, and strain).

#### Official Module Additional Topics

- Need and Importance of Physical Education and its relevance in interdisciplinary context
- Understanding of the Endocrine System
- Developing a fitness profile
- Healthy foods habits for prevention and progression of Lifestyle Diseases
- Processed foods and unhealthy eating habits
- Depression - Anxiety - Stress
- Different ways of carrying an injured person
- Usage of Automated external defibrillator

Coverage findings:

- **no_notes** — Need and Importance of Physical Education and its relevance in interdisciplinary context. Evidence: No notes module files mapped to this course. Action: Create notes for Additional Topics covering the need, importance, and interdisciplinary relevance of Physical Education.
- **no_notes** — Understanding of the Endocrine System. Evidence: No notes module files mapped to this course. Action: Create notes for Additional Topics covering the Endocrine System.
- **no_notes** — Developing a fitness profile. Evidence: No notes module files mapped to this course. Action: Create notes for Additional Topics covering how to develop a fitness profile.
- **no_notes** — Healthy foods habits for prevention and progression of Lifestyle Diseases. Evidence: No notes module files mapped to this course. Action: Create notes for Additional Topics covering healthy food habits for preventing lifestyle diseases.
- **no_notes** — Processed foods and unhealthy eating habits. Evidence: No notes module files mapped to this course. Action: Create notes for Additional Topics covering processed foods and unhealthy eating habits.
- **no_notes** — Depression - Anxiety - Stress. Evidence: No notes module files mapped to this course. Action: Create notes for Additional Topics covering depression, anxiety, and stress.
- **no_notes** — Different ways of carrying an injured person. Evidence: No notes module files mapped to this course. Action: Create notes for Additional Topics covering different ways of carrying an injured person.
- **no_notes** — Usage of Automated external defibrillator. Evidence: No notes module files mapped to this course. Action: Create notes for Additional Topics covering the usage of an Automated External Defibrillator (AED).

No matching note modules were found for this course. The complete source excerpt is retained in `data/syllabus/processing/topic-report.json`.

Syllabus reader findings:

- No notes modules exist for UCHWT127 (Health and Wellness); the entire course lacks study material.

## Source files

- `data/syllabus/ktu-btech-2024-first-year-group-a.pdf` (Group A, CSE)
- `data/syllabus/ktu-btech-2024-first-year-group-b.pdf` (Group B, ECE/EEE)
- `data/syllabus/ktu-btech-2024-first-year-s1-s2.pdf` (Group C, Civil/Mechanical)
- `data/syllabus/ktu-btech-curriculum-2024.pdf` (2024 curriculum)
- `data/syllabus/processing/s1-subject-verification.json` (script-generated department map)
- `data/syllabus/processing/topic-report.json` (raw per-course Gemini audit output)
