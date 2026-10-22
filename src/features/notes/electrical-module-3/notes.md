<!-- page 1 | Passive and Active Components in Electronics -->

## Passive and Active Components in Electronics

### Syllabus: Electronic Devices (Module 3)

- Passive and active components; PN-junction diode operation and V-I characteristics.
- Zener and avalanche breakdown; Zener regulator; half-wave, full-wave, and bridge rectifiers, ripple factor, and filters.
- BJT construction and characteristics; comparison of CE, CB, and CC configurations; biasing and load line; transistor as a switch and amplifier; RC-coupled amplifier and frequency response.
- FET introduction; construction and working of N-channel and P-channel MOSFETs.

### Classification of Electronic Components

Electronic circuits are built by interconnecting two broad classes of components: **passive components** and **active components**.

**Passive Components**

Passive components are circuit elements that cannot by themselves amplify a signal, generate electrical energy, or control current by means of another electrical signal. They either dissipate electrical energy as heat or store it temporarily in an electric or magnetic field.

1. **Resistor ($R$):** Opposes the flow of electric current and dissipates electrical energy as heat ($P = I^2 R$). Used for current limiting, voltage division, and biasing.
2. **Capacitor ($C$):** Stores electrical energy in an electrostatic field between two conducting plates separated by a dielectric ($E = \frac{1}{2}CV^2$). Blocks steady DC while allowing AC to pass; used in filters, coupling, and timing circuits.
3. **Inductor ($L$):** Stores energy in a magnetic field created by current flowing through a coil ($E = \frac{1}{2}LI^2$). Opposes changes in current; used in chokes, filters, and tuned circuits.
4. **Transformer:** Transfers AC electrical energy from one circuit to another through mutual electromagnetic induction without changing frequency. Used to step up or step down AC voltages and to provide electrical isolation.

**Active Components**

Active components are semiconductor (or vacuum) devices that rely on an external power source to control, switch, or amplify electrical signals. They exhibit non-linear $V\text{–}I$ characteristics and can provide power gain.

1. **PN Junction Diode:** A two-terminal unidirectional semiconductor device that conducts under forward bias and blocks under reverse bias; used for rectification and switching.
2. **Zener Diode:** A heavily doped PN diode designed to operate reliably in the reverse breakdown region; used as a voltage reference and regulator.
3. **Bipolar Junction Transistor (BJT):** A three-terminal current-controlled device (emitter, base, collector) used for amplification and switching.
4. **Field Effect Transistor (FET / MOSFET):** A three-terminal voltage-controlled device (source, gate, drain) featuring very high input impedance.
5. **Operational Amplifier (Op-Amp) and Integrated Circuits (ICs):** Monolithic circuits combining many active and passive elements on a single silicon chip.

### Comparison Between Passive and Active Components

| Feature | Passive Components | Active Components |
| --- | --- | --- |
| **Energy / Power Gain** | Cannot deliver power gain; only absorb, dissipate, or store energy | Can control power from a DC supply to produce signal amplification (power gain $> 1$) |
| **External Bias** | Do not require an external DC supply to operate | Require an external DC biasing source to operate in their active region |
| **Control Action** | Cannot control current by means of another electrical signal | Control current flow using another current (BJT) or voltage (FET) |
| **Linearity** | Mostly linear ($R, L, C$ have linear $V\text{–}I$ or flux/charge relations) | Inherently non-linear devices |
| **Directionality** | Bilateral (current flows equally well in either direction) | Unilateral (conduction depends on polarity of applied voltage) |
| **Examples** | Resistor, Capacitor, Inductor, Transformer | Diode, Zener diode, LED, BJT, JFET, MOSFET, Op-Amp |

### Review of Semiconductors

Semiconductors (such as Silicon, $\text{Si}$, and Germanium, $\text{Ge}$) have electrical conductivity intermediate between conductors and insulators.

- **Intrinsic Semiconductor:** Pure semiconductor crystal with four valence electrons per atom forming covalent bonds. At room temperature, thermal energy generates an equal number of free electrons and holes ($n = p = n_i$).
- **Extrinsic Semiconductor:** Doped with a small, controlled impurity to increase conductivity:
  - **N-type semiconductor:** Doped with pentavalent (donor) impurities such as Phosphorus ($\text{P}$), Arsenic ($\text{As}$), or Antimony ($\text{Sb}$). **Majority carriers** are free electrons; **minority carriers** are holes.
  - **P-type semiconductor:** Doped with trivalent (acceptor) impurities such as Boron ($\text{B}$), Gallium ($\text{Ga}$), or Indium ($\text{In}$). **Majority carriers** are holes; **minority carriers** are free electrons.

### Summary

- **Passive components** ($R, L, C$) store or dissipate energy and cannot amplify signals.
- **Active components** (diodes, transistors, ICs) control electron flow and can rectify, switch, or amplify signals when biased by a DC power source.
- Doping pure silicon with pentavalent or trivalent impurities creates **N-type** and **P-type** semiconductors, which form the building blocks of all solid-state devices.

---

<!-- page 2 | PN Junction Diode: Working and V-I Characteristics -->

## PN Junction Diode: Working and V-I Characteristics

### Formation of a PN Junction (Unbiased)

When a P-type semiconductor and an N-type semiconductor are fabricated on the same continuous crystal wafer, the boundary between them is called a **PN junction**.

```
       P-region                Depletion                N-region
  (Majority: Holes)             Region           (Majority: Electrons)
 +--------------------+------------------------+--------------------+
 |  (+)   (+)   (+)   |   (-)  (-) | (+)  (+)  |   (-)   (-)   (-)  |
 |                    |   (-)  (-) | (+)  (+)  |                    |
 |  (+)   (+)   (+)   |   Immobile | Immobile  |   (-)   (-)   (-)  |
 |                    |  Acceptors |  Donors   |                    |
 +--------------------+------------------------+--------------------+
                                   |<-- W_d -->|
                                   V_0 (Barrier Potential)
```

1. **Diffusion:** Immediately upon formation, holes from the P-side diffuse across the junction into the N-side, and free electrons from the N-side diffuse into the P-side due to the sharp concentration gradient.
2. **Depletion Region (Space-Charge Region):** As electrons and holes recombine near the junction, they leave behind uncovered, immobile negative acceptor ions on the P-side and immobile positive donor ions on the N-side. This region is depleted of mobile charge carriers and is called the **depletion layer**.
3. **Barrier Potential ($V_0$):** The uncovered ions establish a built-in electric field directed from the N-side to the P-side that opposes further diffusion of majority carriers. At room temperature ($300\text{ K}$), the barrier potential is approximately:
   - $V_0 \approx 0.7\text{ V}$ for Silicon ($\text{Si}$)
   - $V_0 \approx 0.3\text{ V}$ for Germanium ($\text{Ge}$)

**Circuit Symbol of a PN Diode**

```
      Anode (A)              Cathode (K)
      (P-side)     |\  |      (N-side)
     o-------------| > |-------------o
                   |/  |
```

### Working of PN Junction Diode Under Bias

#### 1. Forward Bias

A PN junction is **forward biased** when the positive terminal of an external DC source ($V_F$) is connected to the P-region (Anode) and the negative terminal is connected to the N-region (Cathode).

- The applied electric field opposes the built-in barrier field.
- The width of the depletion layer **decreases** and the effective barrier height is reduced to $(V_0 - V_F)$.
- Once $V_F$ exceeds the **cut-in (threshold or knee) voltage** $V_\gamma$ ($0.7\text{ V}$ for $\text{Si}$, $0.3\text{ V}$ for $\text{Ge}$), majority carriers easily cross the junction in large numbers, producing a large **forward current** $I_F$ (in milliamperes, $\text{mA}$) that rises exponentially with voltage.

#### 2. Reverse Bias

A PN junction is **reverse biased** when the negative terminal of the external DC source ($V_R$) is connected to the P-region (Anode) and the positive terminal is connected to the N-region (Cathode).

- Holes in the P-side and electrons in the N-side are pulled away from the junction toward the battery terminals.
- The width of the depletion layer **increases** and the effective barrier potential increases to $(V_0 + V_R)$.
- Majority carrier diffusion drops to zero. However, thermally generated **minority carriers** (electrons in P, holes in N) are swept across the junction by the strong electric field, creating a tiny **reverse saturation current** $I_S$ (or $I_0$).
- $I_S$ is typically in nanoamperes ($\text{nA}$) for Silicon and microamperes ($\mu\text{A}$) for Germanium, and depends mainly on temperature (roughly doubling for every $10^\circ\text{C}$ rise in temperature).

### Shockley's Diode Equation

The mathematical relationship between the diode current $I_D$ and diode voltage $V_D$ in both forward and reverse bias (prior to breakdown) is given by:

$$
I_D = I_S \left( e^{\frac{V_D}{\eta V_T}} - 1 \right)
$$

where:
- $I_D$ = diode current ($\text{A}$)
- $I_S$ = reverse saturation current ($\text{A}$)
- $V_D$ = applied voltage across the diode ($+$ for forward, $-$ for reverse)
- $\eta$ = ideality factor ($1$ for $\text{Ge}$; between $1$ and $2$ for $\text{Si}$)
- $V_T = \frac{kT}{q}$ = thermal voltage ($\approx 26\text{ mV}$ at room temperature $T = 300\text{ K}$)

### V-I Characteristics of a PN Junction Diode

The $V\text{–}I$ characteristic curve plots diode current $I_D$ on the vertical axis against diode voltage $V_D$ on the horizontal axis across three distinct regions:

1. **Forward Bias Region ($V_D > 0$):** For $V_D < V_\gamma$, the forward current is small because of the junction barrier. Beyond the approximate knee voltage $V_\gamma$ ($0.7\text{ V}$ for silicon and $0.3\text{ V}$ for germanium in the usual room-temperature model), current rises steeply and exponentially; the external circuit limits the resulting current.
2. **Reverse Bias Region ($-V_{BR} < V_D < 0$):** Current remains nearly constant and extremely small at $-I_S$ (the reverse saturation current). The diode acts almost like an open switch.
3. **Reverse Breakdown Region ($V_D \le -V_{BR}$):** At the diode's breakdown voltage, reverse current rises sharply. The **peak inverse voltage (PIV)** is the maximum reverse voltage a rectifier diode is specified to withstand; it is a rating, not another name for breakdown voltage. Limit reverse current to keep dissipation within the device rating and avoid thermal damage.

```text
                         I_D
                          ↑              forward conduction
                          │                   /
                          │                 _/
                          │               _/
───────────────┬──────────┼──────────────_/────────→ V_D
         -V_BR │          │           V_γ
   breakdown   │          │  small reverse saturation current (−I_S)
       region  ↓
```

The sketch is qualitative and not to scale: the forward branch rises steeply after the knee, while reverse current stays small until breakdown.

### Worked Example 1: Diode Current and Forward Voltage Drop

**Problem:** A Silicon diode with a constant forward knee voltage drop of $V_D = 0.7\text{ V}$ is connected in series with a load resistor $R = 330\,\Omega$ across a $5\text{ V}$ DC supply (Anode toward positive terminal). Find the forward current $I_D$ and the power dissipated in the diode.

**Solution:**

1. Since the anode is connected to the positive terminal and $5\text{ V} > 0.7\text{ V}$, the diode is forward biased.
2. Apply Kirchhoff's Voltage Law (KVL) around the loop:
   $$
   V_S - V_D - I_D R = 0 \implies I_D = \frac{V_S - V_D}{R}
   $$
3. Substitute $V_S = 5\text{ V}$, $V_D = 0.7\text{ V}$, and $R = 330\,\Omega$:
   $$
   I_D = \frac{5 - 0.7}{330} = \frac{4.3}{330} = 0.01303\text{ A} = 13.03\text{ mA}
   $$
4. Power dissipated in the diode:
   $$
   P_D = V_D \times I_D = 0.7 \times 13.03\text{ mA} = 9.12\text{ mW}
   $$

**Answer:** $I_D = 13.03\text{ mA}$, $P_D = 9.12\text{ mW}$.

### Summary

- An unbiased PN junction develops a depletion region and barrier potential ($0.7\text{ V}$ for $\text{Si}$, $0.3\text{ V}$ for $\text{Ge}$).
- **Forward bias** narrows the depletion region and allows large current flow once $V_F > V_\gamma$.
- **Reverse bias** widens the depletion region and blocks current except for a tiny minority-carrier leakage current $I_S$.

---

<!-- page 3 | Zener Diode, Breakdown Mechanisms and Voltage Regulator -->

## Zener Diode, Breakdown Mechanisms and Voltage Regulator

### Zener Diode

A **Zener diode** is a specially designed, heavily doped silicon PN junction diode optimized to operate continuously and safely in the **reverse breakdown region** without damage, provided the power dissipation stays within its rated value ($P_{Z(\max)}$).

**Circuit Symbol**

```
      Anode (A)              Cathode (K)
                  _|\  |
     o-------------| > |-------------o
                   |/  |_
```

- In **forward bias**, a Zener diode behaves just like an ordinary silicon PN diode with a $0.7\text{ V}$ forward drop.
- In **reverse bias**, when the applied reverse voltage reaches the sharp **Zener breakdown voltage ($V_Z$)**, the reverse current $I_Z$ rises almost vertically while the voltage across the diode remains nearly constant at $V_Z$ over a wide range of currents from $I_{Z(\min)}$ (knee current $I_{ZK}$) to $I_{Z(\max)}$.

### Reverse Breakdown Mechanisms: Zener vs. Avalanche Breakdown

Two distinct physical mechanisms cause reverse breakdown in PN junctions depending on the doping concentration and depletion width:

#### 1. Zener Breakdown (Occurs at $V_Z < 5\text{ V}$)

- Occurs in **heavily doped** PN junctions, which have a very **narrow depletion layer** ($< 10\text{ nm}$).
- Even a small reverse voltage ($2\text{ V}$ to $5\text{ V}$) creates a very intense electric field ($\approx 3 \times 10^7\text{ V/m}$) across the thin junction.
- This strong field directly pulls valence electrons out of their covalent bonds (quantum mechanical tunneling / field ionization), generating a huge number of electron-hole pairs and a sharp increase in reverse current.
- Zener breakdown has a **negative temperature coefficient** ($V_Z$ decreases slightly as temperature rises).

#### 2. Avalanche Breakdown (Occurs at $V_Z > 6\text{ V}$)

- Occurs in **lightly or moderately doped** PN junctions with a **wider depletion layer**.
- As reverse voltage increases, thermally generated minority carriers crossing the depletion region are accelerated to high kinetic energy by the electric field.
- These high-velocity carriers collide with crystal lattice atoms and knock valence electrons out of covalent bonds (**impact ionization**).
- Each new carrier is similarly accelerated and produces further collisions, resulting in a cumulative **carrier multiplication (avalanche)** and a steep rise in reverse current.
- Avalanche breakdown has a **positive temperature coefficient** ($V_Z$ increases as temperature rises).

*(Note: Between $5\text{ V}$ and $6\text{ V}$, both mechanisms occur simultaneously. Commercial voltage-reference diodes of all breakdown voltages are commonly called "Zener diodes".)*

| Parameter | Zener Breakdown | Avalanche Breakdown |
| --- | --- | --- |
| **Doping Level** | Heavily doped P and N regions | Lightly doped P and N regions |
| **Depletion Region** | Very narrow | Comparatively wide |
| **Breakdown Voltage ($V_Z$)** | Low ($< 5\text{ V}$) | High ($> 6\text{ V}$) |
| **Physical Mechanism** | Direct rupture of covalent bonds by intense electric field (tunneling) | Impact ionization and cumulative multiplication by high-energy collisions |
| **Temperature Coefficient** | Negative | Positive |

### Zener Diode as a Shunt Voltage Regulator

A **voltage regulator** is a circuit that maintains a constant DC output voltage across a load despite variations in the input DC voltage (line regulation) or changes in the load current (load regulation).

```
                 I_S        R_S         I_L
        +--------->-------/\/\/\----+---->----+
        |                           |         |
        |                       I_Z |         |
       +|                           v        +|
       V_in                       -----      V_L = V_Z     R_L (Load)
       -|                          / \        |
        |                         /___\      -|
        |                           |         |
        +---------------------------+---------+
```

#### Circuit Operation

A series current-limiting resistor $R_S$ is connected between the unregulated DC input $V_{in}$ and the output node, and the Zener diode is connected in **reverse bias** in parallel (shunt) with the load resistor $R_L$.

So long as $V_{in}$ keeps the Zener diode in its breakdown region ($I_{Z(\min)} \le I_Z \le I_{Z(\max)}$), the load voltage remains locked at:

$$
V_L = V_Z
$$

The fundamental circuit equations are:

$$
I_S = \frac{V_{in} - V_Z}{R_S}, \qquad I_S = I_Z + I_L, \qquad I_L = \frac{V_Z}{R_L}, \qquad P_Z = V_Z I_Z
$$

1. **Line Regulation ($V_{in}$ varies, $R_L$ constant):** Since $V_L = V_Z$ and $R_L$ are constant, the load current $I_L = V_Z / R_L$ stays constant. If $V_{in}$ increases, the total series current $I_S$ increases, and the entire excess current flows through the Zener diode ($I_Z$ increases). The extra voltage is dropped across the series resistor $R_S$, keeping $V_L = V_Z$ constant.
2. **Load Regulation ($R_L$ varies, $V_{in}$ constant):** Since $V_{in}$ and $V_Z$ are constant, the total current $I_S = (V_{in} - V_Z)/R_S$ remains constant. If $R_L$ decreases (so load current $I_L$ increases), the Zener current $I_Z$ decreases by the exact same amount so that $I_Z + I_L = I_S$ remains unchanged, keeping $V_L = V_Z$ constant.

### Worked Example 2: Zener Voltage Regulator

**Problem:** A $9\text{ V}$ Zener diode is used in a shunt regulator circuit with a series resistor $R_S = 200\,\Omega$ and an unregulated input voltage $V_{in} = 15\text{ V}$. If a load resistor $R_L = 450\,\Omega$ is connected across the Zener diode, find (a) load voltage $V_L$, (b) series current $I_S$, (c) load current $I_L$, (d) Zener current $I_Z$, and (e) power dissipated in the Zener diode.

**Solution:**

1. Check if the Zener diode is in breakdown by finding the Thevenin open-circuit voltage across the Zener terminals:
   $$
   V_{TH} = V_{in}\frac{R_L}{R_S + R_L} = 15 \times \frac{450}{200 + 450} = 10.38\text{ V}
   $$
   Since $V_{TH} = 10.38\text{ V} > V_Z = 9\text{ V}$, the Zener diode is ON (operating in breakdown).
2. **Load voltage:** $V_L = V_Z = 9\text{ V}$.
3. **Series current:**
   $$
   I_S = \frac{V_{in} - V_Z}{R_S} = \frac{15 - 9}{200} = \frac{6}{200} = 0.03\text{ A} = 30\text{ mA}
   $$
4. **Load current:**
   $$
   I_L = \frac{V_L}{R_L} = \frac{9}{450} = 0.02\text{ A} = 20\text{ mA}
   $$
5. **Zener current:**
   $$
   I_Z = I_S - I_L = 30\text{ mA} - 20\text{ mA} = 10\text{ mA}
   $$
6. **Power dissipated in the Zener diode:**
   $$
   P_Z = V_Z \times I_Z = 9\text{ V} \times 10\text{ mA} = 90\text{ mW}
   $$

**Answer:** $V_L = 9\text{ V}$, $I_S = 30\text{ mA}$, $I_L = 20\text{ mA}$, $I_Z = 10\text{ mA}$, $P_Z = 90\text{ mW}$.

### Summary

- **Zener breakdown** ($<5\text{ V}$) is caused by high-field tunneling in heavily doped junctions; **avalanche breakdown** ($>6\text{ V}$) is caused by impact ionization in lightly doped junctions.
- A reverse-biased Zener diode in parallel with the load acts as a **shunt voltage regulator**, maintaining $V_L = V_Z$ against input voltage and load current variations.

---

<!-- page 4 | DC Power Supply and Rectifiers (Half-Wave, Full-Wave, Bridge) -->

## DC Power Supply and Rectifiers (Half-Wave, Full-Wave, Bridge)

### Block Diagram of a Regulated DC Power Supply

Most electronic circuits require a steady, constant DC voltage to bias their active components, whereas the mains supply is AC ($230\text{ V}, 50\text{ Hz}$). A **regulated DC power supply** converts the AC mains voltage into a constant, ripple-free DC voltage in four stages:

```
  230V, 50Hz   +-------------+   +-----------+   +--------+   +-----------+   Regulated
  AC Mains --->| Transformer |-->| Rectifier |-->| Filter |-->| Regulator |--> DC Output
               +-------------+   +-----------+   +--------+   +-----------+     (Load)
               (Steps down AC)  (AC to Pulsating (Smooths     (Constant DC
                                      DC)         ripples)      voltage)
```

1. **Step-Down Transformer:** Reduces the high-voltage AC mains ($230\text{ V}$ RMS) to the required low AC secondary voltage and provides electrical isolation from the power line.
2. **Rectifier:** Uses one or more PN junction diodes to convert bidirectional AC voltage into unidirectional **pulsating DC** (which contains both a desired DC component and unwanted AC harmonic ripples).
3. **Filter:** A passive circuit (most commonly a shunt capacitor filter) that suppresses the AC ripple component from the rectifier output, producing a relatively smooth DC voltage.
4. **Voltage Regulator:** A Zener regulator or monolithic IC regulator (such as the 78XX series) that maintains a constant DC output voltage despite fluctuations in AC mains voltage or load current.

### 1. Half-Wave Rectifier (HWR)

#### Circuit and Working

A half-wave rectifier consists of a step-down transformer, a **single PN junction diode $D$**, and a load resistor $R_L$ connected in series across the secondary winding. Let the instantaneous secondary voltage be $v_s = V_m \sin\omega t$.

```
      Transformer         D
      Secondary      +---|>|---+
        ) || (       |         |
   v_s  ) || (       |         \  R_L
        ) || (       |         /  (v_L)
        ) || (-------+---------+
```

- **Positive Half-Cycle ($0 < \omega t < \pi$):** The top terminal of the secondary is positive with respect to the bottom. Diode $D$ is **forward biased** and conducts. Current $i_L = \frac{V_m \sin\omega t}{R_f + R_L} = I_m \sin\omega t$ flows through $R_L$, producing a positive half-sine voltage across the load.
- **Negative Half-Cycle ($\pi < \omega t < 2\pi$):** The top terminal is negative. Diode $D$ is **reverse biased** and acts as an open switch. No current flows ($i_L = 0$) and the load voltage is zero ($v_L = 0$).

#### Key Parameters of Half-Wave Rectifier (Ideal Diode, $R_f \ll R_L$)

- **Average (DC) current and voltage:**
  $$
  I_{dc} = \frac{I_m}{\pi}, \qquad V_{dc} = \frac{V_m}{\pi} \approx 0.318\,V_m
  $$
- **RMS current and voltage:**
  $$
  I_{rms} = \frac{I_m}{2}, \qquad V_{rms} = \frac{V_m}{2} = 0.5\,V_m
  $$
- **Rectification Efficiency ($\eta$):** Maximum $\eta = \frac{P_{dc}}{P_{ac}} = \frac{(I_m/\pi)^2 R_L}{(I_m/2)^2 R_L} = \frac{4}{\pi^2} \approx 40.6\%$.
- **Peak Inverse Voltage (PIV):** $\text{PIV} = V_m$.
- **Output ripple frequency:** $f_r = f$ (same as input supply frequency).

### 2. Center-Tapped Full-Wave Rectifier (FWR)

#### Circuit and Working

Uses a **center-tapped step-down transformer** (with the center tap $CT$ taken as ground reference) and **two diodes $D_1$ and $D_2$** whose cathodes are tied together and connected to the load $R_L$ returning to $CT$. Each half of the secondary winding develops $v_s = V_m \sin\omega t$.

```
                      D1
          A +--------|>|--------+
            )                   |
            )              +----+----+
       CT   )              |         \
      ------+--------------+         / R_L (v_L)
            )                        \
            )        D2              |
          B +--------|>|-------------+
```

- **Positive Half-Cycle ($0 < \omega t < \pi$):** Terminal $A$ is positive and terminal $B$ is negative with respect to center tap $CT$. Diode $D_1$ is **forward biased** and conducts through $R_L$ from top to bottom; diode $D_2$ is reverse biased (OFF).
- **Negative Half-Cycle ($\pi < \omega t < 2\pi$):** Terminal $A$ is negative and terminal $B$ is positive with respect to $CT$. Diode $D_1$ is OFF and diode $D_2$ is **forward biased**, conducting through $R_L$ in the **same direction** (top to bottom).
- Thus current flows through the load in the same direction during **both** half-cycles.

### 3. Full-Wave Bridge Rectifier

#### Circuit and Working

Overcomes the need for a heavy, expensive center-tapped transformer by using an ordinary two-terminal secondary winding and **four diodes ($D_1, D_2, D_3, D_4$)** arranged in a bridge configuration.

The bridge has two AC input terminals ($A$ and $B$) and two DC output terminals ($+$ and $-$). Read the four diode branches as these node-to-node connections; connect the load between the two output nodes:

```text
                         (+)
                      ╱       ╲
               D1 ↗  ╱         ╲  ↖ D2
                   ╱             ╲
             A (~) o             o (~) B
                   ╲             ╱
               D4 ↖ ╲           ╱ ↗ D3
                      ╲       ╱
                         (−)

                (+) ── R_L ── (−)
```

| Diode | Anode | Cathode |
| --- | --- | --- |
| $D_1$ | $A$ | $+$ |
| $D_2$ | $B$ | $+$ |
| $D_3$ | $-$ | $B$ |
| $D_4$ | $-$ | $A$ |

The cathodes of $D_1$ and $D_2$ join at the positive output; the anodes of $D_3$ and $D_4$ join at the negative output. This connection table fixes the bridge topology and diode polarity unambiguously. During each half-cycle, one diode from each output junction conducts, keeping load current from $+$ to $-$.

- **Positive Half-Cycle:** Terminal $A$ is positive and $B$ is negative. Diodes **$D_1$ and $D_3$ are forward biased** (ON), while $D_2$ and $D_4$ are reverse biased (OFF). Current flows from $A \to D_1 \to R_L \to D_3 \to B$.
- **Negative Half-Cycle:** Terminal $B$ is positive and $A$ is negative. Diodes **$D_2$ and $D_4$ are forward biased** (ON), while $D_1$ and $D_3$ are reverse biased (OFF). Current flows from $B \to D_2 \to R_L \to D_4 \to A$, passing through $R_L$ in the **same direction**.

#### Key Parameters of Full-Wave Rectifiers (Center-Tapped and Bridge)

- **Average (DC) current and voltage:**
  $$
  I_{dc} = \frac{2I_m}{\pi}, \qquad V_{dc} = \frac{2V_m}{\pi} \approx 0.636\,V_m
  $$
- **RMS current and voltage:**
  $$
  I_{rms} = \frac{I_m}{\sqrt{2}}, \qquad V_{rms} = \frac{V_m}{\sqrt{2}} \approx 0.707\,V_m
  $$
- **Maximum Rectification Efficiency:** $\eta_{\max} = \frac{8}{\pi^2} \approx 81.2\%$.
- **Peak Inverse Voltage (PIV):** $2V_m$ for center-tapped FWR; $V_m$ for bridge rectifier.
- **Output ripple frequency:** $f_r = 2f$ (twice the input supply frequency).

### Summary

- A regulated DC power supply consists of a **transformer, rectifier, filter, and voltage regulator**.
- A **half-wave rectifier** conducts during only one half-cycle ($V_{dc} = V_m/\pi$, $\eta_{\max} = 40.6\%$).
- **Full-wave rectifiers** (center-tapped with 2 diodes, or bridge with 4 diodes) conduct during both half-cycles ($V_{dc} = 2V_m/\pi$, $\eta_{\max} = 81.2\%$).

---

<!-- page 5 | Ripple Factor and Capacitor Filter Rectifiers -->

## Ripple Factor and Capacitor Filter Rectifiers

### Ripple Factor ($\gamma$)

The pulsating DC output of any rectifier contains a steady DC component ($V_{dc}, I_{dc}$) along with an unwanted alternating component called **ripple** ($V_{r(\text{rms})}, I_{r(\text{rms})}$).

**Definition**

The **ripple factor ($\gamma$)** is defined as the ratio of the RMS value of the AC component (ripple) in the output waveform to the average (DC) value of the output waveform. A smaller ripple factor indicates a smoother, higher-quality DC output.

$$
\gamma = \frac{\text{RMS value of AC component}}{\text{DC (average) value}} = \frac{I_{r(\text{rms})}}{I_{dc}} = \frac{V_{r(\text{rms})}}{V_{dc}}
$$

Since the total RMS current is related to the DC and AC components by $I_{rms}^2 = I_{dc}^2 + I_{r(\text{rms})}^2$, we obtain the general expression:

$$
\gamma = \sqrt{\left(\frac{I_{rms}}{I_{dc}}\right)^2 - 1} = \sqrt{\left(\frac{V_{rms}}{V_{dc}}\right)^2 - 1}
$$

#### 1. Ripple Factor Without Filter: Half-Wave Rectifier

For an unfiltered half-wave rectifier, $I_{rms} = \frac{I_m}{2}$ and $I_{dc} = \frac{I_m}{\pi}$:

$$
\gamma_{\text{HWR}} = \sqrt{\left(\frac{I_m / 2}{I_m / \pi}\right)^2 - 1} = \sqrt{\left(\frac{\pi}{2}\right)^2 - 1} = \sqrt{2.467 - 1} = \mathbf{1.21} \quad (121\%)
$$

Because the AC ripple exceeds the DC output ($\gamma = 1.21$), an unfiltered half-wave rectifier alone is a poor DC source.

#### 2. Ripple Factor Without Filter: Full-Wave Rectifier

For an unfiltered center-tapped or bridge full-wave rectifier, $I_{rms} = \frac{I_m}{\sqrt{2}}$ and $I_{dc} = \frac{2I_m}{\pi}$:

$$
\gamma_{\text{FWR}} = \sqrt{\left(\frac{I_m / \sqrt{2}}{2I_m / \pi}\right)^2 - 1} = \sqrt{\frac{\pi^2}{8} - 1} = \sqrt{1.2337 - 1} = \mathbf{0.482} \quad (48.2\%)
$$

### Shunt Capacitor Filter: Working and Ripple Factor

To reduce the ripple factor significantly, a large **shunt capacitor $C$** is connected directly in parallel with the load resistor $R_L$ at the rectifier output. It works on the principle that a capacitor offers a low capacitive reactance $X_C = \frac{1}{2\pi f_r C}$ to AC ripples while acting as an open circuit to steady DC ($f = 0$).

```
       From Rectifier  ----+-------+-------+
                           |       |       |
                           |      --- C    \
                           |      ---      / R_L    v_L(t)
                           |       |       \
       Common Return   ----+-------+-------+
```

#### Working of Capacitor Filter

1. **Charging Interval (Diode ON):** During the rising portion of the input cycle, when the instantaneous rectifier output voltage exceeds the capacitor voltage $v_C$, the diode becomes forward biased. The capacitor rapidly charges up to the peak voltage $V_m$ (since the charging time constant $R_f C$ is very small).
2. **Discharging Interval (Diode OFF):** Just past the positive peak, the input AC voltage begins to fall below $V_m$. The capacitor voltage $v_C$ now exceeds the anode voltage, **reverse-biasing the diode** and turning it OFF.
3. During this non-conducting period, the charged capacitor acts as a temporary source and **slowly discharges** through the load resistor $R_L$ with a large time constant $\tau = R_L C \gg T$, supplying nearly constant current to the load until the next input voltage peak recharges it back to $V_m$.
4. As a result, the output voltage fluctuates only slightly between $V_m$ and $V_m - V_{r(p\text{-}p)}$, producing a nearly triangular ripple wave of small peak-to-peak amplitude $V_{r(p\text{-}p)}$.

#### Ripple Factor With Shunt Capacitor Filter

Assuming a small triangular ripple approximation ($R_L C \gg T$), the peak-to-peak ripple voltage is $V_{r(p\text{-}p)} \approx \frac{I_{dc}}{f_r C}$, the RMS ripple of a triangular wave is $V_{r(\text{rms})} = \frac{V_{r(p\text{-}p)}}{2\sqrt{3}}$, and $I_{dc} = \frac{V_{dc}}{R_L}$:

1. **Half-Wave Rectifier with Capacitor Filter** (ripple frequency $f_r = f$):
   $$
   \gamma_{\text{HWR (filter)}} = \frac{1}{2\sqrt{3}\, f C R_L} \approx \frac{0.2887}{f C R_L}
   $$
2. **Full-Wave / Bridge Rectifier with Capacitor Filter** (ripple frequency $f_r = 2f$):
   $$
   \gamma_{\text{FWR (filter)}} = \frac{1}{4\sqrt{3}\, f C R_L} \approx \frac{0.1443}{f C R_L}
   $$

Thus, increasing either the filter capacitance $C$ or the load resistance $R_L$ lowers the ripple factor.

### Comparison of Rectifier Circuits

| Parameter | Half-Wave Rectifier | Center-Tapped Full-Wave | Full-Wave Bridge Rectifier |
| --- | --- | --- | --- |
| **Number of Diodes** | $1$ | $2$ | $4$ |
| **Transformer Center Tap** | Not required | Required | Not required |
| **Peak Load Current ($I_m$)** | $\frac{V_m}{R_f + R_L}$ | $\frac{V_m}{R_f + R_L}$ | $\frac{V_m}{2R_f + R_L}$ |
| **DC Load Voltage ($V_{dc}$)** | $\frac{V_m}{\pi} = 0.318\,V_m$ | $\frac{2V_m}{\pi} = 0.636\,V_m$ | $\frac{2V_m}{\pi} = 0.636\,V_m$ |
| **RMS Load Voltage ($V_{rms}$)** | $\frac{V_m}{2} = 0.5\,V_m$ | $\frac{V_m}{\sqrt{2}} = 0.707\,V_m$ | $\frac{V_m}{\sqrt{2}} = 0.707\,V_m$ |
| **Peak Inverse Voltage (PIV)** | $V_m$ | $2V_m$ | $V_m$ |
| **Max Efficiency ($\eta_{\max}$)** | $40.6\%$ | $81.2\%$ | $81.2\%$ |
| **Output Ripple Frequency** | $f$ | $2f$ | $2f$ |
| **Ripple Factor (No Filter)** | $1.21$ | $0.482$ | $0.482$ |
| **Ripple Factor (With $C$ Filter)** | $\frac{1}{2\sqrt{3}\,f C R_L}$ | $\frac{1}{4\sqrt{3}\,f C R_L}$ | $\frac{1}{4\sqrt{3}\,f C R_L}$ |

### Worked Example 3: Full-Wave Bridge Rectifier Without and With Filter

**Problem:** A full-wave bridge rectifier is fed from a $50\text{ Hz}$ transformer whose secondary RMS voltage is $12\text{ V}$ across a load resistor $R_L = 1\text{ k}\Omega$ (assume ideal diodes). Calculate:
(a) Peak voltage $V_m$, DC output voltage $V_{dc}$, and ripple factor without a filter.
(b) The new ripple factor if a $100\,\mu\text{F}$ shunt capacitor filter is connected across $R_L$.

**Solution:**

1. **Peak secondary voltage:**
   $$
   V_m = \sqrt{2} \times V_{rms(\text{sec})} = \sqrt{2} \times 12 = 16.97\text{ V}
   $$
2. **Without filter:**
   $$
   V_{dc} = \frac{2V_m}{\pi} = \frac{2 \times 16.97}{\pi} = 10.80\text{ V}, \qquad \gamma_{\text{unfiltered}} = 0.482
   $$
3. **With capacitor filter ($C = 100\,\mu\text{F} = 10^{-4}\text{ F}$, $R_L = 1000\,\Omega$, $f = 50\text{ Hz}$):**
   $$
   \gamma_{\text{filtered}} = \frac{1}{4\sqrt{3}\, f C R_L} = \frac{1}{4\sqrt{3} \times 50 \times 10^{-4} \times 1000} = \frac{1}{34.64} = 0.0289 \quad (2.89\%)
   $$

**Answer:** (a) $V_m = 16.97\text{ V}$, $V_{dc} = 10.80\text{ V}$, $\gamma = 0.482$; (b) With $100\,\mu\text{F}$ filter, $\gamma = 0.0289$.

### Summary

- **Ripple factor** measures the AC content in a rectifier output: $\gamma = 1.21$ for an unfiltered HWR and $\gamma = 0.482$ for an unfiltered FWR.
- A **shunt capacitor filter** charges to $V_m$ when diodes conduct and discharges slowly through $R_L$ when diodes are OFF, reducing the ripple factor to $\frac{1}{2\sqrt{3}fCR_L}$ (HWR) and $\frac{1}{4\sqrt{3}fCR_L}$ (FWR).

---

<!-- page 6 | Bipolar Junction Transistor (BJT): Construction and Working -->

## Bipolar Junction Transistor (BJT): Construction and Working

### Construction of a BJT

A **Bipolar Junction Transistor (BJT)** is a three-terminal, three-layer, two-junction semiconductor device in which conduction takes place due to **both** majority and minority charge carriers (electrons and holes)—hence the name *bipolar*.

There are two types of BJTs depending on layer arrangement:
1. **NPN Transistor:** A thin P-type layer sandwiched between two N-type layers.
2. **PNP Transistor:** A thin N-type layer sandwiched between two P-type layers.

```
         NPN Transistor                            PNP Transistor
    +-------+-----+-------+                   +-------+-----+-------+
    |       |     |       |                   |       |     |       |
  E |   N   |  P  |   N   | C               E |   P   |  N  |   P   | C
    |       |     |       |                   |       |     |       |
    +-------+--+--+-------+                   +-------+--+--+-------+
               |                                         |
               B                                         B
   (Arrow on Emitter points OUT:             (Arrow on Emitter points IN:
        "Not Pointing iN")                        "Pointing iN Proudly")
```

*(In the circuit symbol of a BJT, the arrow is always placed on the **Emitter** terminal and indicates the direction of conventional current flow when the emitter-base junction is forward biased.)*

#### Three Regions and Their Doping / Physical Width

1. **Emitter ($E$):** **Heavily doped** and of **moderate width**. Its function is to inject (emit) a large number of majority carriers into the base.
2. **Base ($B$):** The central region; made **extremely thin** and **very lightly doped** so that almost all ($>95\%$ to $99\%$) of the carriers injected from the emitter pass right through to the collector without recombining in the base.
3. **Collector ($C$):** **Moderately doped** and has the **largest physical area** of the three regions because it collects the carriers coming from the base and must dissipate the greatest amount of heat (since the collector-base junction operates under reverse bias).

#### Two Junctions and Three Operating Regions

A BJT has two PN junctions: the **Emitter-Base Junction ($J_{EB}$)** and the **Collector-Base Junction ($J_{CB}$)**. Depending on how these two junctions are biased, the transistor operates in one of three modes:

| Operating Region | Emitter-Base Junction ($J_{EB}$) | Collector-Base Junction ($J_{CB}$) | Primary Application |
| --- | --- | --- | --- |
| **Active Region** | Forward Biased | Reverse Biased | Linear Amplifier |
| **Saturation Region** | Forward Biased | Forward Biased | Closed Switch (ON state) |
| **Cut-off Region** | Reverse Biased | Reverse Biased | Open Switch (OFF state) |

### Working of an NPN Transistor in the Active Region

To operate an NPN transistor as an amplifier (active region), $J_{EB}$ is **forward biased** by a small DC supply $V_{EE}$ and $J_{CB}$ is **reverse biased** by a larger DC supply $V_{CC}$.

1. **Injection from Emitter:** Because the emitter-base junction $J_{EB}$ is forward biased, the barrier potential is reduced and a large number of free electrons (majority carriers in the heavily doped N-emitter) cross the junction into the P-base, constituting the **emitter current $I_E$**.
2. **Passage Through Base:** The P-type base is very thin and lightly doped, so very few holes are available for recombination. Typically only $1\%$ to $5\%$ of the injected electrons recombine with holes in the base, producing a very small **base current $I_B$** (in $\mu\text{A}$).
3. **Collection at Collector:** The remaining $95\%$ to $99\%$ of the injected electrons diffuse to the collector-base depletion layer, where the strong electric field of the reverse-biased junction $J_{CB}$ sweeps them across into the collector region, forming the major portion ($\alpha I_E$) of the **collector current $I_C$** (in $\text{mA}$).
4. **Reverse Leakage Current ($I_{CBO}$):** In addition, a tiny reverse saturation current $I_{CBO}$ due to thermally generated minority carriers flows across the reverse-biased collector-base junction.

By Kirchhoff's Current Law applied to the entire transistor as a single node:

$$
I_E = I_B + I_C
$$

Since $I_B \ll I_C$, the collector current is very nearly equal to the emitter current ($I_C \approx I_E$).

### Transistor Configurations and Current Gains ($\alpha$, $\beta$)

Because a BJT has only three terminals whereas a two-port circuit requires four terminals (two input, two output), one terminal is made common to both input and output:
1. **Common Base (CB):** Base is common; input between $E$ and $B$, output between $C$ and $B$.
2. **Common Emitter (CE):** Emitter is common; input between $B$ and $E$, output between $C$ and $E$.
3. **Common Collector (CC):** Collector is common; input between $B$ and $C$, output between $E$ and $C$.

#### Current Amplification Factors

- **DC Alpha ($\alpha$)** (Common-Base current gain): Ratio of collector current to emitter current:
  $$
  \alpha = \frac{I_C}{I_E} \qquad (\text{typically } 0.95 \text{ to } 0.995, \text{ always } < 1)
  $$
- **DC Beta ($\beta$)** (Common-Emitter current gain): Ratio of collector current to base current:
  $$
  \beta = \frac{I_C}{I_B} \qquad (\text{typically } 50 \text{ to } 400)
  $$
- **Relationship between $\alpha$ and $\beta$:** Dividing $I_E = I_B + I_C$ by $I_C$ gives $\frac{1}{\alpha} = \frac{1}{\beta} + 1$, hence:
  $$
  \beta = \frac{\alpha}{1 - \alpha}, \qquad \alpha = \frac{\beta}{\beta + 1}
  $$
- Including leakage current: $I_C = \alpha I_E + I_{CBO} = \beta I_B + (\beta + 1)I_{CBO} = \beta I_B + I_{CEO}$, where $I_{CEO} = (\beta + 1)I_{CBO}$.

### Worked Example 4: BJT Currents and Gain Relations

**Problem:** A transistor has a common-base DC current gain of $\alpha = 0.98$ and a base current of $I_B = 30\,\mu\text{A}$ (neglecting leakage current). Calculate (a) $\beta$, (b) collector current $I_C$, and (c) emitter current $I_E$.

**Solution:**

1. **Current gain $\beta$:**
   $$
   \beta = \frac{\alpha}{1 - \alpha} = \frac{0.98}{1 - 0.98} = \frac{0.98}{0.02} = 49
   $$
2. **Collector current $I_C$:**
   $$
   I_C = \beta I_B = 49 \times 30\,\mu\text{A} = 1470\,\mu\text{A} = 1.47\text{ mA}
   $$
3. **Emitter current $I_E$:**
   $$
   I_E = I_B + I_C = 0.03\text{ mA} + 1.47\text{ mA} = 1.50\text{ mA}
   $$

**Answer:** $\beta = 49$, $I_C = 1.47\text{ mA}$, $I_E = 1.50\text{ mA}$.

### Summary

- A **BJT** (NPN or PNP) has an emitter (heavily doped), base (very thin and lightly doped), and collector (largest area, moderately doped).
- For amplification (**active region**), the emitter-base junction is **forward biased** and the collector-base junction is **reverse biased**.
- Fundamental BJT equations: $I_E = I_B + I_C$, $\alpha = I_C / I_E$, $\beta = I_C / I_B$, and $\beta = \frac{\alpha}{1-\alpha}$.

---

<!-- page 7 | CE Configuration Characteristics and Concept of Amplification -->

## CE Configuration Characteristics and Concept of Amplification

### Common Emitter (CE) Configuration

The **Common Emitter (CE) configuration** is the most widely used transistor arrangement because it is the only configuration that provides **both high current gain ($\beta \gg 1$) and high voltage gain ($A_v \gg 1$)**, resulting in the highest **power gain** of all three configurations. It also provides moderate input and output impedances suitable for cascading stages.

```
                        I_C
                         +-----[ mA ]-----+
                         |                |
        I_B              |/ C             |
   +---[ uA ]----+-------|      NPN       |
   |             |       |\ E             |
  +|            +|         |              +|
  V_BB          V_BE       |             V_CE     V_CC
  -|            -|         |              -|
   |             |         |              |
   +-------------+---------+--------------+
                 (Common Emitter)
```

In this circuit:
- **Input quantities:** Base current $I_B$ ($\mu\text{A}$) and Base-Emitter voltage $V_{BE}$ ($\text{V}$).
- **Output quantities:** Collector current $I_C$ ($\text{mA}$) and Collector-Emitter voltage $V_{CE}$ ($\text{V}$).

### 1. Input Characteristics of CE Configuration

**Definition:** The curve plotted between the input current $I_B$ (on the Y-axis) and the input voltage $V_{BE}$ (on the X-axis), keeping the output voltage $V_{CE}$ constant as a parameter.

- Since the base-emitter junction is forward biased, the input characteristic resembles the **forward $V\text{–}I$ characteristic of a PN junction diode**.
- Below the cut-in voltage ($V_{BE} \approx 0.7\text{ V}$ for $\text{Si}$), $I_B$ is negligible; above $0.7\text{ V}$, $I_B$ rises rapidly.
- **Effect of increasing $V_{CE}$ (Early Effect / Base-Width Modulation):** When $V_{CE}$ is increased, the reverse bias across the collector-base junction increases. This widens the collector-base depletion region into the base, reducing the effective width of the base. Fewer carriers recombine in the narrower base, so $I_B$ decreases slightly for a given $V_{BE}$ (the curve shifts slightly to the right for higher $V_{CE}$).
- **Dynamic Input Resistance ($r_i$):**
  $$
  r_i = \left.\frac{\Delta V_{BE}}{\Delta I_B}\right|_{V_{CE} = \text{constant}} \qquad (\text{typically } 500\,\Omega \text{ to } 2\text{ k}\Omega)
  $$

### 2. Output Characteristics of CE Configuration

**Definition:** The family of curves plotted between the output current $I_C$ (on the Y-axis, in $\text{mA}$) and the output voltage $V_{CE}$ (on the X-axis, in $\text{V}$) for several fixed values of base current $I_B$ ($\mu\text{A}$).

```
   I_C (mA)
    ^     Saturation
    |     |        Active Region (I_C = beta * I_B)
    |     |  /---------------------------------------  I_B = 40 uA
    |     | /----------------------------------------  I_B = 30 uA
    |     |/-----------------------------------------  I_B = 20 uA
    |    /|------------------------------------------  I_B = 10 uA
    |   / |------------------------------------------  I_B = 0 (Cut-off)
    +--+--+------------------------------------------> V_CE (V)
       0  V_CE(sat) (~0.2V)
```

The output characteristic family is divided into three distinct operating regions:

1. **Active Region:** The nearly horizontal portion of the curves where $V_{CE} > V_{CE(\text{sat})}$. Here $J_{EB}$ is forward biased and $J_{CB}$ is reverse biased. The collector current $I_C \approx \beta I_B$ is controlled almost entirely by the base current $I_B$ and increases only slightly with $V_{CE}$ (due to the Early effect). **A transistor must be biased in the center of the active region to work as an undistorted linear amplifier.**
2. **Saturation Region:** The steep region near the vertical axis where $V_{CE}$ is very small ($V_{CE(\text{sat})} \approx 0.2\text{ V}$ for $\text{Si}$). Both $J_{EB}$ and $J_{CB}$ are forward biased. Collector current no longer obeys $I_C = \beta I_B$ and is limited by the external collector circuit ($I_{C(\text{sat})} \approx V_{CC}/R_C$). Used as a **closed (ON) switch**.
3. **Cut-off Region:** The region below the $I_B = 0$ curve. Both junctions are reverse biased, and only a negligible leakage current $I_{CEO}$ flows ($I_C \approx 0$, $V_{CE} = V_{CC}$). Used as an **open (OFF) switch**.

- **Dynamic Output Resistance ($r_o$):**
  $$
  r_o = \left.\frac{\Delta V_{CE}}{\Delta I_C}\right|_{I_B = \text{constant}} \qquad (\text{typically } 20\text{ k}\Omega \text{ to } 50\text{ k}\Omega)
  $$

### BJT as a low-side electronic switch

```text
             VCC
              │
            Load
              │
              C
Control ─RB─ B   NPN
              E
              │
            ground
```

A logic-high control signal supplies base current through $R_B$, driving the transistor into saturation; the small collector-emitter voltage turns the load on. With the control low, the transistor is in cut-off and the load is off. Choose $R_B$ to limit base current while supplying enough drive for the required load current.

### Concept of Amplification (Single-Stage CE Amplifier)

**Amplification** is the process of increasing the amplitude (voltage, current, or power) of a weak time-varying signal without altering its waveform shape or frequency, by using the weak input signal to control energy drawn from a DC power supply ($V_{CC}$).

#### How a CE Amplifier Works

```text
                         VCC
                          │
                         RC
                          │──────── Cout ── Vout → load
                          C
Vin ── Cin ── B       Q1 (NPN)
            │             E
      bias network        │
                       RE ∥ CE
                          │
                        ground
```

The coupling capacitors pass the AC signal while isolating DC bias. The collector resistor converts changes in collector current into changes in output voltage; the emitter network stabilizes the operating point and can provide AC bypassing.

In a basic Common-Emitter amplifier, a load resistor $R_C$ is connected in series with the collector and the DC supply $V_{CC}$, so that by KVL on the output loop:

$$
V_{CE} = V_{CC} - I_C R_C
$$

1. **DC Biasing (Quiescent Point / Q-Point):** Before applying any AC signal, DC bias resistors set a steady base current $I_{BQ}$, collector current $I_{CQ}$, and collector-emitter voltage $V_{CEQ}$ in the middle of the active region (on the **DC load line**) so that neither positive nor negative signal peaks are clipped.
2. **Positive Half-Cycle of AC Input ($v_{in}$):** When a small positive-going AC input signal $v_{in}$ is superimposed on the base, the total base-emitter voltage $v_{BE}$ increases. This produces a small increase $\Delta i_B$ in base current, which causes a **$\beta$-times larger increase** $\Delta i_C = \beta\,\Delta i_B$ in collector current. Consequently, the voltage drop $i_C R_C$ across $R_C$ increases significantly, and $v_{CE} = V_{CC} - i_C R_C$ **decreases** (goes through a large negative half-cycle).
3. **Negative Half-Cycle of AC Input ($v_{in}$):** When $v_{in}$ goes negative, $i_B$ decreases, $i_C$ decreases by $\beta\,\Delta i_B$, the drop $i_C R_C$ decreases, and $v_{CE}$ **increases** (goes through a large positive half-cycle).
4. **180° Phase Reversal:** Thus, a CE amplifier produces an amplified output voltage $v_{out}$ across the collector that is **$180^\circ$ out of phase** with the input voltage $v_{in}$, with voltage gain magnitude $|A_v| \approx \beta \frac{R_C}{r_i}$.

### Summary

- The **CE input characteristic** ($I_B$ vs. $V_{BE}$) resembles a forward-biased diode; the **CE output characteristic** ($I_C$ vs. $V_{CE}$) shows **active, saturation, and cut-off** regions.
- In a **CE amplifier**, a small AC variation in base current ($\Delta i_B$) controls a large collector current ($\Delta i_C = \beta\,\Delta i_B$) through load resistor $R_C$, yielding large voltage and power gain with a **$180^\circ$ phase shift**.

---

### Comparison of CB, CE, and CC configurations

| Feature | Common base (CB) | Common emitter (CE) | Common collector (CC) |
|---|---|---|---|
| Common terminal | Base | Emitter | Collector |
| Input / output | Emitter / collector | Base / collector | Base / emitter |
| Current gain | Less than one ($\alpha$) | High ($\beta$) | High (approximately $\beta+1$) |
| Voltage gain | Can be high | High | Approximately one |
| Input impedance | Low | Medium | High |
| Output impedance | High | Medium to high | Low |
| Phase relation | No reversal | Output is inverted (180°) | No reversal |
| Typical use | High-frequency stages and low-input-impedance matching | General voltage and power amplification | Buffering and impedance matching |

These are qualitative comparisons for the usual small-signal configurations. Actual input/output impedances depend on the transistor, bias network, load, and frequency.

### DC load line, bias, and the Q-point

For a CE output circuit with supply $V_{CC}$ and collector resistor $R_C$, Kirchhoff's voltage law gives

$$V_{CE}=V_{CC}-I_C R_C.$$

The endpoints of the straight-line relationship on the $I_C$–$V_{CE}$ graph are **cut-off** ($I_C=0$, $V_{CE}=V_{CC}$) and the idealized **saturation** endpoint ($V_{CE}\approx0$, $I_C\approx V_{CC}/R_C$). Joining these points gives the **DC load line**. The bias network sets the no-signal operating point, or **Q-point**. For undistorted amplification, choose a Q-point in the active region with enough room for the expected signal swing; a switch instead uses cut-off and saturation as its OFF and ON states.

### RC-coupled amplifier and frequency response

An RC-coupled amplifier uses a CE transistor stage. The input coupling capacitor $C_{in}$ passes the AC signal while blocking the source's DC; the output capacitor $C_{out}$ passes the amplified AC signal to the load while keeping the collector's DC bias out of the load. The emitter resistor $R_E$ stabilizes bias, and the bypass capacitor $C_E$ provides a low-impedance AC path around $R_E$ in the mid-band.

```text
VCC ── RC ──┬── C (Q1, NPN)
            └── Cout ── RL ── GND

Vin ── Cin ──┬── B (Q1)
VCC ── R1 ────┤
GND ── R2 ────┘

E (Q1) ──┬── RE ── GND
         └── CE ── GND
```

In this sketch, $R_1$ and $R_2$ form the base voltage-divider bias network: $R_1$ connects from $V_{CC}$ to the base node and $R_2$ connects from the base node to ground. $R_E$ and $C_E$ are in parallel between the emitter and ground. The collector resistor $R_C$ connects the collector to $V_{CC}$; $C_{out}$ couples the collector's AC signal to the load.

The output is amplified and approximately 180° out of phase with the input. Its frequency-response curve has three regions:

- **Low frequencies:** coupling and bypass capacitors have larger reactance, so gain falls.
- **Mid-band:** capacitors act approximately as AC shorts and gain is comparatively flat.
- **High frequencies:** transistor junction and stray capacitances reduce gain.

The lower and upper cut-off frequencies $f_L$ and $f_H$ are conventionally taken at the points where voltage gain falls to $1/\sqrt{2}$ of its mid-band value. The bandwidth is $BW=f_H-f_L$.

| Region | Gain behavior | What sets it |
|---|---|---|
| Below $f_L$ | Gain rises as frequency increases toward the pass band | Input/output coupling capacitors and emitter-bypass capacitor |
| At $f_L$ and $f_H$ | Gain is $0.707A_{v,mid}$, or 3 dB below the mid-band gain | The two cut-off points define the useful band |
| Between $f_L$ and $f_H$ | Gain is approximately flat at $A_{v,mid}$ | Mid-band amplifier behavior |
| Above $f_H$ | Gain falls as frequency increases | Transistor junction and stray capacitances |

On a sketch of gain against logarithmic frequency, draw a low-frequency rise, a nearly flat mid-band, and a high-frequency roll-off. Mark $f_L$ and $f_H$ where the curve crosses $0.707A_{v,mid}$; do not treat them as frequencies at which gain becomes zero.

```text
Gain (dB)
  ↑                    ┌───────────────┐  mid-band
  │                  /                   \
  │                /                       \
  │______________/                           \
  │            f_L                           f_H
  └────────────────────────────────────────────→ log frequency
               −3 dB                     −3 dB
```

This curve is qualitative: the exact slope and cut-off frequencies depend on the transistor, bias components, coupling capacitors, bypass capacitor, and load.

<!-- page 8 | Basics of FET and MOSFET -->

## Basics of FET and MOSFET

### Introduction to Field Effect Transistors (FET)

A **Field Effect Transistor (FET)** is a three-terminal **unipolar, voltage-controlled** semiconductor device in which current conduction through a conducting channel is controlled by an **electric field** produced by the voltage applied to a control terminal called the **Gate**.

- **Unipolar device:** Current conduction is carried out by **only one type** of majority carrier—either electrons (in an N-channel FET) or holes (in a P-channel FET).
- **Three terminals of any FET:**
  1. **Source ($S$):** The terminal through which majority carriers enter the conducting channel.
  2. **Drain ($D$):** The terminal through which majority carriers leave the channel.
  3. **Gate ($G$):** The control terminal whose applied voltage ($V_{GS}$) modulates the conductivity of the channel between Source and Drain.

#### Classification of FETs

1. **Junction Field Effect Transistor (JFET):** N-channel JFET and P-channel JFET.
2. **Metal-Oxide-Semiconductor Field Effect Transistor (MOSFET / IGFET):**
   - **Depletion-type MOSFET (D-MOSFET):** N-channel and P-channel.
   - **Enhancement-type MOSFET (E-MOSFET):** N-channel and P-channel.

### 1. Junction Field Effect Transistor (JFET)

#### Construction of N-Channel JFET

An N-channel JFET consists of an N-type silicon bar with ohmic contacts at the two ends forming the **Drain ($D$)** and **Source ($S$)**. Two heavily doped P-type regions are diffused on opposite sides of the bar and internally connected together to form the **Gate ($G$)**. The region of the N-bar between the two P-gate regions is the **N-channel**.

```
                   Drain (D)
                      |
               +-------------+
               |      N      |
               | +---+ +---+ |
      Gate (G) --| P | | P |-- (Internally connected to Gate)
               | +---+ +---+ |
               |  Channel(N) |
               +-------------+
                      |
                  Source (S)
```

#### Working Principle of N-Channel JFET

In normal operation, the Drain is made positive with respect to the Source ($V_{DS} > 0$) and the Gate-Source PN junction is always **reverse biased** ($V_{GS} \le 0$).

1. **When $V_{GS} = 0\text{ V}$ and $V_{DS}$ is increased:** Electrons flow from Source to Drain through the N-channel, producing drain current $I_D$ (conventional current from $D$ to $S$). As $V_{DS}$ increases, the reverse bias across the gate-channel junction is greater near the drain end than near the source end, so the depletion layers widen into the channel in a wedge shape until they nearly meet at the **pinch-off voltage ($V_P$)**, after which $I_D$ saturates at its maximum value **$I_{DSS}$** (Drain-to-Source current with gate shorted).
2. **When negative gate voltage $V_{GS} < 0$ is applied:** The reverse bias across the Gate-Source junction increases, causing the depletion regions to penetrate deeper into the N-channel. This **narrows the conducting channel**, increases its resistance, and reduces the drain current $I_D$.
3. **Cut-off / Pinch-off ($V_{GS} = V_{GS(\text{off})} = -V_P$):** When $V_{GS}$ is made sufficiently negative, the two depletion regions completely close off the channel and drain current drops to zero ($I_D = 0$). In the saturation region, drain current follows **Shockley's equation**:
   $$
   I_D = I_{DSS}\left(1 - \frac{V_{GS}}{V_P}\right)^2
   $$

### 2. MOSFET (Metal-Oxide-Semiconductor FET)

In a **MOSFET** (also called an **Insulated-Gate FET, IGFET**), the metal (or polysilicon) Gate electrode is electrically **insulated** from the semiconductor channel by a very thin dielectric layer of **silicon dioxide ($\text{SiO}_2$)**. Because of this insulating $\text{SiO}_2$ layer, the gate current is virtually zero ($I_G \approx 0$) for both positive and negative gate voltages, giving a MOSFET an **extremely high input impedance** ($10^{10}\,\Omega$ to $10^{15}\,\Omega$).

#### (a) Depletion-Type MOSFET (D-MOSFET)

- **Construction (N-channel):** A lightly doped P-type substrate has two heavily doped $N^+$ wells for Source and Drain connected by a **physically diffused N-channel** directly underneath the $\text{SiO}_2$ gate insulator.
- **Working:** Because a physical channel already exists at $V_{GS} = 0$, a substantial drain current $I_{DSS}$ flows when $V_{DS}$ is applied.
  - **Depletion mode ($V_{GS} < 0$):** A negative gate voltage repels free electrons from the N-channel, depleting it of carriers and decreasing $I_D$ below $I_{DSS}$.
  - **Enhancement mode ($V_{GS} > 0$):** A positive gate voltage attracts additional free electrons from the P-substrate into the N-channel, increasing $I_D$ above $I_{DSS}$.

#### (b) Enhancement-Type MOSFET (E-MOSFET)

- **Construction (N-channel):** Two heavily doped $N^+$ regions (Source and Drain) are diffused into a P-type substrate, separated by the substrate itself—**no physical channel exists** between Source and Drain during manufacturing.

```
            Source (S)      Gate (G)       Drain (D)
                |         +---------+          |
             +-----+   +---------------+    +-----+
             +--+--+---|  SiO2 Layer   |----+--+--+
             |  N+  |  +---------------+    |  N+  |
             +------+  (Induced N-channel)  +------+
             |                                     |
             |            P-Substrate              |
             +------------------+------------------+
                                | Substrate (SS)
```

- **Working:**
  - **When $V_{GS} = 0$:** Two back-to-back PN junctions exist between Drain and Source; no channel is present and **$I_D = 0$** (the E-MOSFET is a **normally-OFF** device).
  - **When $V_{GS} > 0$ exceeds Threshold Voltage ($V_T$ or $V_{GS(th)}$):** The positive gate voltage repels holes in the P-substrate away from the $\text{SiO}_2$ interface and attracts minority free electrons toward the surface, creating a thin **inversion layer (induced N-channel)** connecting Source and Drain. Once $V_{GS} > V_T$, drain current increases rapidly according to:
    $$
    I_D = k\,(V_{GS} - V_T)^2
    $$
  - Because E-MOSFETs are normally OFF, consume tiny power, and occupy very small silicon area, they are the primary building blocks of modern digital CMOS integrated circuits and microprocessors.

### P-channel MOSFETs

A P-channel MOSFET uses a P-type channel or substrate and holes as the majority carriers. Its source, drain, gate, and body structure parallels the N-channel device, but the operating-voltage polarities are reversed. In the usual source-referenced convention, a P-channel device conducts when the gate is sufficiently negative relative to its source; conventional drain current flows in the opposite device-terminal direction to the comparable N-channel case.

For a P-channel enhancement MOSFET, the P$^+$ source and drain are formed in an N-type body. With the gate near the source potential, no channel connects them. Making the gate sufficiently negative relative to the source attracts holes to the oxide interface and induces a P-type channel:

```
             Source (S)       Gate (G)       Drain (D)
                 |          +---------+          |
              +------+    +---------------+   +------+
              | P+   |    |   Gate metal  |   | P+   |
              +------+    +---------------+   +------+
                           |    SiO2     |
              ··········· induced P-channel ·········
              |                                     |
              |              N-body                |
              +------------------+------------------+
                                 | Body (B)
```

The diagram is a cross-section, not a circuit symbol. For this P-channel enhancement device, the channel is induced when $V_{GS}<V_{TP}$ (equivalently, when $V_{SG}>|V_{TP}|$); the source is normally at the higher potential. These polarities are the reverse of the N-channel enhancement case.

- **P-channel depletion MOSFET (D-MOSFET):** a P-type channel exists at $V_{GS}=0$. A positive gate voltage repels holes and depletes the channel; a negative gate voltage attracts holes and enhances conduction. It can operate in depletion and enhancement modes.
- **P-channel enhancement MOSFET (E-MOSFET):** no conducting channel exists at $V_{GS}=0$. Making the gate sufficiently negative relative to the source attracts holes and forms a P-channel; the device is normally OFF.

Always identify the device type and the source-referenced voltage polarities before drawing a circuit or predicting current direction. Complementary P- and N-channel devices are paired in CMOS logic.

### Comparison Between BJT and FET

| Parameter | Bipolar Junction Transistor (BJT) | Field Effect Transistor (FET / MOSFET) |
| --- | --- | --- |
| **Control Type** | Current-controlled device ($I_C$ controlled by $I_B$) | Voltage-controlled device ($I_D$ controlled by $V_{GS}$) |
| **Carrier Polarity** | Bipolar (both electrons and holes participate) | Unipolar (only majority carriers—electrons or holes) |
| **Input Impedance** | Low to moderate ($1\text{ k}\Omega$ to $2\text{ k}\Omega$ in CE) | Very high ($10^8\,\Omega$ for JFET; $10^{12}\text{–}10^{15}\,\Omega$ for MOSFET) |
| **Thermal Stability** | Poorer; prone to thermal runaway | Better thermal stability; negative temperature coefficient at high current |
| **Noise Level** | Higher (due to carrier recombination across junctions) | Very low noise (no minority-carrier junction noise) |
| **Packing Density / Size** | Larger area on IC chip | Very compact; ideal for VLSI/CMOS digital ICs |

### Summary

- A **FET** is a unipolar, voltage-controlled device with **Source, Drain, and Gate** terminals and very high input impedance.
- In a **JFET**, reverse-biasing the gate-source junction widens the depletion layer and narrows the conducting channel.
- A **MOSFET** has an insulated $\text{SiO}_2$ gate layer: **D-MOSFETs** have a pre-existing channel and work in both depletion and enhancement modes, while **E-MOSFETs** have no initial channel and conduct only when $V_{GS} > V_T$.

---

<!-- page 9 | Suggested reading -->

## Suggested reading

### Textbooks

1. **Chinmoy Saha, Arindam Halder and Debarati Ganguly**, *Basic Electronics: Principles and Applications*, Cambridge University Press, 1st ed., 2018.
2. **D. P. Kothari and I. J. Nagrath**, *Basic Electrical and Electronics Engineering*, McGraw Hill, 2nd ed., 2020.
3. **N. N. Bhargava, D. C. Kulshreshtha and S. C. Gupta**, *Basic Electronics and Linear Circuits*, McGraw Hill, 2nd ed., 2017.
4. **George Kennedy and Bernard Davis**, *Electronic Communication Systems*, McGraw Hill, 6th ed., 2017.
5. **Michael Miller**, *The Internet of Things: How Smart TVs, Smart Cars, Smart Homes, and Smart Cities Are Changing the World*, QUE, 1st ed., 2015.
6. **D. P. Kothari and I. J. Nagrath**, *Basic Electrical Engineering*, Tata McGraw Hill, 4th ed., 2019.
7. **J. J. Cathey and Syed A. Nasar**, *Schaum's Outline of Basic Electrical Engineering*, Tata McGraw Hill, 3rd ed., 2010.

### Reference Books

1. **Robert L. Boylestad and Louis Nashelsky**, *Electronic Devices and Circuit Theory*, Pearson, 11th ed., 2015.
2. **Neil Storey**, *Electronics: A Systems Approach*, Pearson, 6th ed., 2017.
3. **Louis E. Frenzel**, *Principles of Electronic Communication Systems*, McGraw Hill, 4th ed., 2016.
4. **Dennis Roddy and John Coolen**, *Electronic Communication*, Pearson, 4th ed., 2008.
5. **Raj Kamal**, *Internet of Things: Architecture and Design Principles*, McGraw Hill, 1st ed., 2017.
6. **D. C. Kulshreshtha**, *Basic Electrical Engineering*, Tata McGraw Hill, 2nd ed., 2019.
7. **V. Del Toro**, *Electrical Engineering Fundamentals*, Pearson Education, 2nd ed., 2019.
8. **T. K. Nagsarkar and M. S. Sukhija**, *Basic Electrical Engineering*, Oxford Higher Education, 3rd ed., 2017.
