<!-- page 1 | Basic circuit elements: Resistors, Inductors and Capacitors -->

## Basic circuit elements: Resistors, Inductors and Capacitors

### Syllabus: Elementary Concepts of DC Electric Circuits

- **Basics**: Capacitors & Inductors: V-I relations and Energy stored. Current and Voltage Division Rule - Relative potential
- Ohm's Law and Kirchhoff's laws - numerical problems.
- Star-delta conversion (resistive networks only - derivation not required) - numerical problems.

### Resistors

**Resistor**

A resistor is a passive two-terminal component designed to provide a specified resistance. It limits current, produces a voltage drop, and converts electrical energy into heat. Its circuit symbol is shown below:

![Resistor circuit symbol with terminals A and B and a zigzag element labelled R](/assets/notes/ece/s1/electrical/module-1/resistor-symbol.svg)

**Resistance** is the measure of how strongly a component opposes electric current. For an ohmic resistor at constant physical conditions, resistance is the ratio of the voltage across it to the current through it:

$$
R=\frac{V}{I}, \qquad V=IR, \qquad I=\frac{V}{R}.
$$

The SI unit is the **ohm** ($\Omega$), where $1\,\Omega=1\,\mathrm{V/A}$. For example, a $10\,\Omega$ resistor carrying $0.2\,\mathrm A$ has a voltage drop of $V=IR=2\,\mathrm V$.

For a uniform conductor, resistance also depends on its material and dimensions:

$$
R=\rho\frac{\ell}{A},
$$

where $\rho$ is resistivity ($\Omega\,\mathrm m$), $\ell$ is conductor length, and $A$ is its cross-sectional area. A longer conductor has greater resistance; a larger cross-sectional area gives lower resistance. Temperature can also change resistance.

**Ohm's Law**

Ohm's law states that current is directly proportional to voltage when temperature and other physical conditions remain constant. The proportionality constant is the conductance $G=1/R$, so $I=GV$.

The microscopic picture below compares a pure copper crystal with a copper-zinc alloy. Alloying increases electron scattering and therefore generally increases resistivity; the figure illustrates one material-level cause of resistance.

![Diagram comparing pure copper crystal structure with brass alloy structure containing copper and zinc atoms](/assets/notes/ece/s1/electrical/module-1/copper-brass-atom-arrangement.svg)

### V-I Characteristics of a Resistor

![V-I characteristics graph showing a linear relationship between voltage and current](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/electrical/module-1/assets/page-006-image-1-code.webp)

**Capacitor**

A capacitor consists of two conductors separated by an insulating material (the dielectric).

**Capacitance**

Capacitance is the ability of a circuit element to store electric charge. If $Q$ is the stored charge in coulombs and $V$ is the applied voltage:

$$
Q=CV,\qquad C=\frac{Q}{V}.
$$

The unit of capacitance is the farad (F).

**Energy Stored in a Capacitor**

For a capacitor charged from zero to $V$, the average charging voltage is $V/2$. The stored energy is:

$$
E=\frac{1}{2}QV=\frac{1}{2}CV^2.
$$

### V-I Relation of a Capacitor

For a capacitor with constant capacitance $C$ (passive sign convention), current is the rate of change of charge:

$$i_C(t)=C\frac{dv_C(t)}{dt}, \qquad v_C(t)=v_C(t_0)+\frac{1}{C}\int_{t_0}^{t}i_C(\tau)d\tau.$$

A constant voltage gives zero steady current in an ideal capacitor. Reversing the reference direction reverses the current sign.

```jsxgraph
{"title":"Capacitor voltage and current while charging and discharging","boundingBox":[-0.8,3.8,10.4,-3.6],"axis":true,"polylines":[{"points":[[0.0,0.0],[0.113,0.353],[0.225,0.664],[0.338,0.938],[0.45,1.18],[0.562,1.394],[0.675,1.583],[0.787,1.749],[0.9,1.896],[1.012,2.026],[1.125,2.14],[1.238,2.241],[1.35,2.331],[1.462,2.409],[1.575,2.479],[1.688,2.54],[1.8,2.594],[1.913,2.642],[2.025,2.684],[2.138,2.721],[2.25,2.754],[2.362,2.783],[2.475,2.808],[2.587,2.831],[2.7,2.851],[2.812,2.868],[2.925,2.884],[3.038,2.897],[3.15,2.909],[3.263,2.92],[3.375,2.929],[3.487,2.938],[3.6,2.945],[3.712,2.952],[3.825,2.957],[3.938,2.962],[4.05,2.967],[4.162,2.971],[4.275,2.974],[4.388,2.977],[4.5,2.98]],"stroke":"#2563eb"},{"points":[[0.0,3.0],[0.113,2.647],[0.225,2.336],[0.338,2.062],[0.45,1.82],[0.562,1.606],[0.675,1.417],[0.787,1.251],[0.9,1.104],[1.012,0.974],[1.125,0.86],[1.238,0.759],[1.35,0.669],[1.462,0.591],[1.575,0.521],[1.688,0.46],[1.8,0.406],[1.913,0.358],[2.025,0.316],[2.138,0.279],[2.25,0.246],[2.362,0.217],[2.475,0.192],[2.587,0.169],[2.7,0.149],[2.812,0.132],[2.925,0.116],[3.038,0.103],[3.15,0.091],[3.263,0.08],[3.375,0.071],[3.487,0.062],[3.6,0.055],[3.712,0.048],[3.825,0.043],[3.938,0.038],[4.05,0.033],[4.162,0.029],[4.275,0.026],[4.388,0.023],[4.5,0.02]],"stroke":"#dc2626"},{"points":[[4.5,3.5],[4.5,-3.3]],"stroke":"#64748b","dashed":true},{"points":[[4.5,2.98],[4.633,2.572],[4.765,2.22],[4.897,1.916],[5.03,1.654],[5.162,1.427],[5.295,1.232],[5.428,1.063],[5.56,0.918],[5.692,0.792],[5.825,0.684],[5.958,0.59],[6.09,0.509],[6.223,0.44],[6.355,0.379],[6.488,0.327],[6.62,0.283],[6.753,0.244],[6.885,0.211],[7.018,0.182],[7.15,0.157],[7.283,0.135],[7.415,0.117],[7.548,0.101],[7.68,0.087],[7.813,0.075],[7.945,0.065],[8.078,0.056],[8.21,0.048],[8.343,0.042],[8.475,0.036],[8.607,0.031],[8.74,0.027],[8.873,0.023],[9.005,0.02],[9.138,0.017],[9.27,0.015],[9.402,0.013],[9.535,0.011],[9.668,0.01],[9.8,0.008]],"stroke":"#2563eb"},{"points":[[4.5,-2.98],[4.633,-2.572],[4.765,-2.22],[4.897,-1.916],[5.03,-1.654],[5.162,-1.427],[5.295,-1.232],[5.428,-1.063],[5.56,-0.918],[5.692,-0.792],[5.825,-0.684],[5.958,-0.59],[6.09,-0.509],[6.223,-0.44],[6.355,-0.379],[6.488,-0.327],[6.62,-0.283],[6.753,-0.244],[6.885,-0.211],[7.018,-0.182],[7.15,-0.157],[7.283,-0.135],[7.415,-0.117],[7.548,-0.101],[7.68,-0.087],[7.813,-0.075],[7.945,-0.065],[8.078,-0.056],[8.21,-0.048],[8.343,-0.042],[8.475,-0.036],[8.607,-0.031],[8.74,-0.027],[8.873,-0.023],[9.005,-0.02],[9.138,-0.017],[9.27,-0.015],[9.402,-0.013],[9.535,-0.011],[9.668,-0.01],[9.8,-0.008]],"stroke":"#dc2626"}],"labels":[{"x":1.7,"y":2.7,"text":"v_C"},{"x":1.0,"y":1.0,"text":"i_C"},{"x":6.3,"y":1.7,"text":"v_C"},{"x":6.5,"y":-1.6,"text":"i_C"},{"x":0.5,"y":-0.5,"text":"charging"},{"x":6.4,"y":-2.6,"text":"discharging"},{"x":10.0,"y":0.4,"text":"t"}]}
```
*Capacitor voltage $v_C$ (blue) and current $i_C$ (red): charging on the left, discharging on the right.*

### Inductors


**Inductance**

Inductance is the property of an electrical circuit that resists changes in current. The SI unit of inductance is the henry (H). It stores energy in the form of a magnetic field when current flows through it.

The $v - i$ relationship in an inductance is given by:

$$
v = L \frac{di}{dt}
$$

### V-I Characteristics and Switching Behavior of an Inductor


For an ideal inductor with constant inductance $L$ (passive sign convention),

$$v_L(t)=L\frac{di_L(t)}{dt}, \qquad i_L(t)=i_L(t_0)+\frac{1}{L}\int_{t_0}^{t}v_L(\tau)d\tau.$$

An inductor acts as a short circuit to DC current in steady state.

During switching transitions, the inductor operates as follows:

1. **Switching ON ($t = 0$):**
   - The inductor acts like an open circuit.
   - Voltage ($V$): Maximum, equal to the source voltage.
   - Current ($I$): Exactly zero.

2. **Steady State:**
   - Current ($I$): Reaches its maximum value.
   - Voltage: Across an ideal inductor drops to 0 V.

3. **De-energizing (Load on):**
   - Current ($I$): Gradually reduces to zero.
   - Voltage ($V$): Maximum reversed (negative polarity).

### Energy Stored in an Inductor

**Inductor**

An inductor stores energy in a magnetic field created by current flowing through a coil of wire.

The energy stored in an inductor's magnetic field is given by:

$$
W_L = \frac{1}{2}Li^2
$$

---

<!-- page 2 | Independent and dependent voltage and current sources -->

## Independent voltage and current sources

An **independent voltage source** maintains a specified voltage across its terminals, and an **independent current source** maintains a specified current through its branch. In both cases the value is set without reference to any other circuit variable and may be constant or time-varying. These are the sources used in the voltage and current division rules that follow.

---

<!-- page 3 | Circuit fundamentals: SI units, definitions and Ohm's law -->

## Circuit fundamentals: SI units, definitions and Ohm's law

### SI units of electrical quantities

| Quantity | Unit | Symbol |
| --- | --- | --- |
| Current | Ampere | A |
| Voltage | Volt | V |
| Power | Watt | W |
| Energy | Joule | J |
| Resistance | Ohm | Ω |

### Series and parallel connections

| Component | Series Connection | Parallel Connection |
| --- | --- | --- |
| Resistors ($R$) | $R_1 + R_2 \text{ ...}$ (Add) | $\frac{1}{R_1} + \frac{1}{R_2} \text{ ...}$ (Reciprocals) |
| Capacitors ($C$) | $\frac{1}{C_1} + \frac{1}{C_2} \text{ ...}$ (Reciprocals) | $C_1 + C_2 \text{ ...}$ (Add) |
| Inductors ($L$) | $L_1 + L_2 \text{ ...}$ (Add) | $\frac{1}{L_1} + \frac{1}{L_2} \text{ ...}$ (Reciprocals) |

**Network**

A network is the interconnection of two or more circuit elements (resistor, inductor, capacitor, voltage source, current source) connected in any manner.

**Electric Circuit**

An electric circuit is a network that contains at least one closed path. Every circuit is a network, but not all networks are circuits.

![Figure 1.2: Basic electric circuit showing a voltage source and load resistor in a closed loop](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-028-image-1-clean.webp)

Figure 1.2: Basic electric circuit

**Ohm's Law**

Ohm's law states that the current flowing through a conductor is directly proportional to the voltage across it and inversely proportional to its resistance, provided the temperature remains constant.

![Ohm's Law Triangle diagram showing the relationship between Voltage V, Current I, and Resistance R](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/electrical/module-1/assets/page-029-image-1-code.webp)

**Georg Simon Ohm**

Georg Simon Ohm (16 March 1789 – 6 July 1854) was a German physicist and mathematician who formulated the relationship between voltage, current, and resistance.


---

<!-- page 4 | Series and parallel resistor combinations -->

## Series and parallel resistor combinations

### Resistances in Series

**Series Circuit**

A series circuit is a circuit in which resistances are connected end to end so that there is only one path for current flow.

In a series circuit:

1. The same current flows through all resistances.
2. There will be a voltage drop across each resistance given by Ohm's law.
3. The sum of the voltage drops is equal to the applied voltage.

![Series resistors R1, R2 and R3 with current I and voltage drops V1, V2 and V3](/assets/notes/ece/s1/electrical/module-1/series-resistors-voltage-drops.svg)

From Figure 1.7, $V_S = V_1 + V_2 + V_3$

$$
\begin{aligned}
&= IR_1 + IR_2 + IR_3 \\
&= I(R_1 + R_2 + R_3) \\
&= IR \quad \text{where } R \text{ is the equivalent resistance.}
\end{aligned}
$$

Then the equivalent resistance, $R = R_1 + R_2 + R_3$

### Resistances in Parallel

**Parallel Circuit**

A parallel circuit is a circuit in which one end of each resistance is joined to a common point and the other end of each resistance is joined to another common point so that there are many paths for current flow (refer to Figure 1.8).

In a parallel circuit:
- The voltage across each resistance of a parallel combination is the same.
- The total current is the sum of individual branch currents.

![Circuit diagram showing three resistors in parallel connected to a voltage source](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-035-image-1-clean.webp)

Figure 1.8: Resistances in parallel

From the figure, $I = I_1 + I_2 + I_3$

$$
= \frac{V_S}{R_1} + \frac{V_S}{R_2} + \frac{V_S}{R_3}
$$

Let $R$ be the equivalent resistance of the circuit. Then $I = \frac{V_S}{R}$

So, $\frac{V_S}{R} = V_S \left(\frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}\right)$

$$
\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}
$$

If resistances $R_1, R_2, \dots R_n$ are connected in parallel, then

$$
\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n}
$$

$$
R = \frac{R_1R_2}{R_1+R_2} \qquad\text{(for two parallel resistors)}
$$

---

<!-- page 5 | Voltage divider and current divider rules -->

## Voltage divider and current divider rules

### Applications of Ohm's Law

1. Voltage divider and current divider rules

If current is not given in a circuit, the voltage division rule can be used. If voltage is not given in a circuit, the current division rule can be used.

**Voltage Divider Rule**

The voltage across resistor $R_k$ is proportional to its share of the total series resistance, provided the output is not loaded enough to change the divider current.

![Voltage divider with series resistors R1 and R2 between Vs and 0 V, current I, and voltages V1 and V2](/assets/notes/ece/s1/electrical/module-1/voltage-divider-rule.svg)


Voltage Division Rule

* $v_1$ = voltage across first resistor
* $V$ = total voltage in the circuit
* $R_1 + R_2$ = total resistance

$$
V_1 = \frac{VR_1}{R_1 + R_2}
$$

$$
V_2 = \frac{VR_2}{R_1 + R_2}
$$

#### General Formula ($N$ Resistors)

For a series connection of $N$ resistors, the voltage across any target resistor $R_x$ is:

$$
V_x = V_{\text{total}} \cdot \left(\frac{R_x}{R_{\text{total}}}\right)
$$

where $R_{\text{total}} = R_1 + R_2 + \dots + R_N$.

#### Derivation of Voltage Divider Rule

According to Ohm's law,

$$
V_1 = IR_1 \text{ and } V_2 = IR_2
$$

Let $R$ is the total resistance of the circuit, and it is given by,

$$
R = R_1 + R_2 \quad \cdots (1)
$$

Also, from the circuit, we have,

$$
V = IR = I(R_1 + R_2) \quad \cdots (2)
$$

But

$$
I = \frac{V_1}{R_1} = \frac{V_2}{R_2} \quad \cdots (3)
$$

Therefore, from equations (2) & (3), we finally get,

$$
V = \frac{V_1}{R_1}(R_1 + R_2) \implies V \cdot R_1 = V_1 \cdot (R_1 + R_2) \implies \frac{V \cdot R_1}{R_1 + R_2} = V_1
$$

$$
\therefore V_1 = \frac{VR_1}{R_1 + R_2} \quad \cdots (4)
$$

Similarly,

$$
V = \frac{V_2}{R_2}(R_1 + R_2)
$$

$$
\therefore V_2 = \frac{VR_2}{R_1 + R_2} \quad \cdots (5)
$$

**Current Divider Rule**

The current in any branch is equal to the ratio of opposite branch resistance to the total resistance of the circuit multiplied by the total current in the circuit.


$$
I_1 = \frac{IR_2}{R_1 + R_2}
$$

$$
I_2 = \frac{IR_1}{R_1 + R_2}
$$

#### Derivation of Current Divider Rule

The current $I$ has been divided into $I_1$ and $I_2$ into two parallel branches:

$$
I_1 = \frac{V}{R_1} \hspace{5cm} I_2 = \frac{V}{R_2}
$$

$$
R_T = \frac{R_1 R_2}{R_1 + R_2}
$$


$$
\text{Parallel equivalent: } R_T = \frac{R_1 R_2}{R_1 + R_2}
$$

$$
I = \frac{V}{R_T}
$$

$$
= \frac{V(R_1 + R_2)}{R_1 R_2}
$$

But $V = I_1 R_1$. Substituting the value of $V$ in the above equation we get:

Current flow through $R_1$:

$$
I = \frac{I_1 R_1 (R_1 + R_2)}{R_1 R_2} = \frac{I_1 (R_1 + R_2)}{R_2}
$$


$$
I_1 = \frac{I R_2}{R_1 + R_2}
$$

Current flow through $R_2$:


$$
I_2 = \frac{I R_1}{R_1 + R_2}
$$

### Important Notes

* If current is not given in a circuit, the voltage division rule can be used.
* If voltage is not given in a circuit, the current division rule can be used.
* If voltage and current are available in a circuit, use Ohm's law.
* When specifically asked in the question, apply the divider rules.

### Worked Examples

**Example 1**

A $6\,\mathrm V$ source feeds two series resistors, $200\,\Omega$ and $100\,\Omega$. Find the voltage drop across each resistor.

![A 6 V source feeding 200 Ω and 100 Ω resistors in series in a single loop](/assets/notes/ece/s1/electrical/module-1/example-1-series-divider.svg)


Applying the voltage division rule, voltage across $200\,\Omega$ resistance we get:

$$
E_1 = \frac{E}{r_1+r_2} r_1
$$

$$
E_1 = \frac{6}{200+100} \times 200 = 4\text{V}
$$

Voltage across $100\,\Omega$ resistance we get:

$$
E_2 = \frac{E}{r_1+r_2} r_2
$$

$$
E_2 = \frac{6}{200+100} \times 100 = 2\text{V}
$$

**Example 2**

A $20\,\mathrm A$ current source supplies two parallel resistors, $20\,\Omega$ and $40\,\Omega$. Find the current in each branch.

![A 20 A current source supplying a 20 Ω resistor and a 40 Ω resistor in parallel](/assets/notes/ece/s1/electrical/module-1/example-2-current-divider.svg)


Applying the current-divider rule, the current through the $20\,\Omega$ resistor is:

$$
I_1 = \frac{I}{r_1+r_2} r_2
$$

$$
I_1 = \frac{20}{20+40} \times 40 = 13.33\text{A}
$$

The current through the $40\,\Omega$ resistor is:

$$
I_2 = \frac{I}{r_1+r_2} r_1
$$

$$
I_2 = \frac{20}{20+40} \times 20 = 6.67\text{A}
$$

**Example 1.11.1**

A $5\;\Omega$ resistor is in series with a parallel pair of $6\;\Omega$ and $3\;\Omega$ resistors across a $35\;\mathrm V$ DC source. Find the supply current.

![A 5 Ω resistor in series with parallel 6 Ω and 3 Ω resistors across a 35 V source](/assets/notes/ece/s1/electrical/module-1/example-1-11-1-series-parallel.svg)

**Solution**

Let $R_P$ be the equivalent resistance of the parallel combination of $3\;\Omega$ and $6\;\Omega$.

Then $\dfrac{1}{R_P} = \dfrac{1}{3} + \dfrac{1}{6} = \dfrac{3}{6}$


Therefore, $R_P = 2\;\Omega$

Total resistance in the circuit, $R = R_P + 5 = 2 + 5 = 7\;\Omega$

Supply current, $I = \dfrac{V}{R} = \dfrac{35}{7} = 5\;\text{A}$

**Example 1.11.2**

Find the total resistance of the circuit across the terminals X and Y. Also find the power consumed by the circuit if a $12\text{ V}$ battery is connected across XY.

![Circuit diagram with resistors connected between terminals X and Y](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-048-image-1-clean.webp)

Figure 1.13

**Solution**

$$
\begin{aligned}
R_{XZ} &= \frac{2 \times 2}{2 + 2} = 1\text{ }\Omega\\
\frac{1}{R_{ZY}} &= \frac{1}{4} + \frac{1}{4} + \frac{1}{4} + \frac{1}{4} = \frac{4}{4} = 1
\end{aligned}
$$

So, $R_{ZY} = 1\text{ }\Omega$

![Simplified circuit diagram](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-048-image-2-clean.webp)

$$
R_{XZ} + R_{ZY} = 1 + 1 = 2\, \Omega
$$

$$
\frac{1}{R_{XY}} = \frac{1}{4} + \frac{1}{2} + \frac{1}{4} = 1
$$

Therefore, equivalent resistance, $R_{XY} = 1\, \Omega$

Total current in the circuit, $I = \frac{V}{R_{XY}} = \frac{12}{1} = 12\text{ A}$

Power consumed $= VI = 12 \times 12 = 144\text{ W}$

**Example 1.11.3**

Three resistors $10\,\Omega$, $20\,\Omega$ and $30\,\Omega$ are connected in series across a $100\,\mathrm V$ supply. Find the voltage across each resistor.

![Resistors 10 Ω, 20 Ω and 30 Ω in series across a 100 V supply](/assets/notes/ece/s1/electrical/module-1/example-1-11-3-series-supply.svg)

**Solution**


*Figure 1.15: Three series resistors connected across a 100 V source.*

Let $R_S$ be the equivalent series resistance:

$$
R_S = 10 + 20 + 30 = 60\ \Omega
$$

$$
I = \frac{V}{R_S} = \frac{100}{60} = 1.666\text{ A}
$$

Voltage drop across $10\ \Omega$, $V_1 = 1.666 \times 10 = 16.66\text{ V}$

Voltage drop across $20\ \Omega$, $V_2 = 1.666 \times 20 = 33.33\text{ V}$

Voltage drop across $30\ \Omega$, $V_3 = 1.666 \times 30 = 50\text{ V}$

**Example 2.6.2**

Find the voltage drop and current through all the resistances in the circuit shown in Figure 2.20.

![Circuit diagram with a 50V DC source, a 6 ohm series resistor, and two parallel branches with 12 ohm and 6 ohm resistors.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-051-image-1-clean.webp)

Figure 2.20

**Solution**

$$
\text{Equivalent resistance} = 6 + \frac{12 \times 6}{12 + 6} = 10\;\Omega
$$

$$
\text{Source current}, I = \frac{\text{Source voltage}}{\text{Equivalent resistance}} = \frac{50\;\text{V}}{10\;\Omega} = 5\;\text{A}
$$

Voltage drop across $6\;\Omega$ resistor:

$$
= \text{Current through } 6\;\Omega \times \text{Resistance}
$$

$$
= 5 \times 6 = 30\;\text{V}
$$

Using current divider rule, current through $12\ \Omega$ resistor $= I_1$:

$$
\quad = 5 \times \frac{6}{12 + 6} = \frac{5}{3}\text{ A}
$$

By Kirchhoff's current law, $I = I_1 + I_2$

Therefore, $I_2 = I - I_1 = 5 - \frac{5}{3} = \frac{10}{3}\text{ A}$

Voltage drop across $12\ \Omega = I_1 \times 12 = \frac{5}{3} \times 12 = 20\text{ V}$

Voltage drop across $6\ \Omega = I_2 \times 6 = \frac{10}{3} \times 6 = 20\text{ V}$

The voltage across $6\ \Omega$ and $12\ \Omega$ resistors are the same because they are connected in parallel.

---

<!-- page 6 | Source transformation and relative potential -->

## Network topology and relative potential

### Network topology definitions

**Node**

A node is a junction where two or more network elements are connected together.


**Branch**

A branch is an element or number of elements connected between two nodes.

![Branch diagram: a resistor R1 connected between two nodes, enclosed in an ellipse labelled branch](/assets/notes/ece/s1/electrical/module-1/branch-between-two-nodes.svg)

**Junction**

A junction is a point where three or more circuit components meet.

![Junction diagram: a resistor R1 leading from two junction points inside a dashed outline](/assets/notes/ece/s1/electrical/module-1/junction-between-components.svg)

**Electrical Network**

An electrical network is an interconnection of electrical elements.

Key network components include:

- Node
- Junction
- Branch
- Loop
- Mesh
- Electric network

![Circuit diagram illustrating nodes](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-057-image-1-clean.webp)

![Circuit diagram illustrating branch](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-057-image-2-clean.webp)

### Circuit versus network


**Electrical Circuit**

An electrical circuit is an electrical network with at least one closed path. All circuits are networks, but all networks are not circuits.

**Loop**

A loop is any closed part of the circuit.

**Mesh**

A mesh is the most elementary form of a loop and cannot be further divided into other loops. All meshes are loops, but all loops are not meshes.



### Potential and reference levels

**Absolute (Node) Potential ($V_A$)**

Absolute potential is the voltage at Node A measured relative to the reference node (Ground, which is assumed to be $0\text{ V}$).

**Relative Potential ($V_{AB}$)**

Relative potential is the voltage at Node A relative to Node B.

The formula:

$$
V_{AB} = V_A - V_B
$$

For example, if $V_A=8\,\mathrm V$ and $V_B=3\,\mathrm V$ relative to the same reference, then $V_{AB}=5\,\mathrm V$. Reversing the order changes the sign: $V_{BA}=-V_{AB}$.

**Relative Potential**

Relative potential (or potential difference) is the voltage of one point in a circuit measured with respect to another point, rather than to ground.



**Branch**

A branch is a single path containing a circuit component connected between two nodes.


---

<!-- page 7 | Kirchhoff's laws: KVL, KCL and network loops -->

## Kirchhoff's laws: KVL, KCL and network loops

### Finding Loops in a Circuit


**Mesh**

A mesh is a closed loop that does not contain any other loop within it. In other words, any path within a circuit that does not include any other path is considered a mesh.


To count these quantities in any given network, first mark every distinct node, then count the branches between node pairs. A loop is any closed path; a mesh is a loop with no smaller loop inside it.


Robert Kirchhoff (1824–1887) was a German physicist and mathematician who contributed significantly to the fundamental understanding of electrical circuits.


**Kirchhoff's Voltage Law (KVL)**

Kirchhoff's voltage law states that the algebraic sum of all voltages in a closed path in a circuit is always zero at all instants of time. Alternatively, the sum of potential drops is equal to the sum of potential rises.


### Voltage Polarities and Sign Conventions

![Circuit diagram showing a closed loop with a voltage source V and four resistors R1, R2, R3, R4 with indicated polarities and current I](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-068-image-1-clean.webp)

If $V$ denotes the source voltage rise and $V_1$ through $V_4$ are the resistor voltage drops, KVL gives:

$$V - V_1 - V_2 - V_3 - V_4 = 0, \qquad V_k=IR_k.$$

![Single loop electrical circuit with resistors and voltage sources](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-069-image-1-clean.webp)

![Potential rise icon showing transition from minus to plus](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/electrical/module-1/assets/page-069-image-2-code.webp)

Potential rise

![Potential drop icon showing transition from plus to minus](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/electrical/module-1/assets/page-069-image-3-code.webp)

Potential drop

Key conventions for analysis:
* **Shared branch:** With clockwise mesh currents in adjacent loops, the currents oppose one another in their common branch. The reference current is therefore $i_1-i_2$ for loop 1 and $i_2-i_1$ for loop 2. If the chosen reference directions agree in that branch, use a sum instead.
* **Voltage polarity:** Choose a loop-traversal direction, then assign each rise or drop by the polarity encountered. Keep that convention consistent through the whole equation.

**Sign Convention for KVL Equations**

When traversing a loop:
1. If the positive terminal is encountered before the negative terminal, the voltage is interpreted as positive in the KVL equation.
2. If the negative terminal is encountered first, the voltage is interpreted as negative in the KVL equation.

### Formulating KVL Equations


![Polarity convention inset box showing plus to minus gives negative (-ve) and minus to plus gives positive (+ve).](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/electrical/module-1/assets/page-071-image-2-code.webp)

Traversing the loop in the clockwise direction yields:

$$
+V - IR_1 - IR_2 - IR_3 - IR_4 = 0
$$

### Single-Mesh Analysis

**Example 2.6.1** Find the current in the circuit shown in Figure 2.18.

![Circuit diagram with two voltage sources E1 (12 V) and E2 (3 V) and three resistors R1 (2 ohm), R2 (3 ohm), and R3 (4 ohm).](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-073-image-1-clean.webp)

**Figure 2.18**

**Solution**

Let the current $I$ flow in the clockwise direction. Marking the polarities of voltages across resistors according to the sign convention as shown in Figure 2.19:

![Circuit diagram for Example 2.6.1 showing assumed clockwise loop current I and voltage polarities across all components.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-073-image-2-clean.webp)

**Figure 2.19**

Applying KVL, we get:

$$
\begin{aligned}
E_1 - IR_1 - IR_2 - E_2 - IR_3 &= 0 \\
12 - 2 \times I - 3 \times I - 3 - 4 \times I &= 0 \\
9 - 9I &= 0 \\
9I &= 9 \\
I = 1\text{ A}
\end{aligned}
$$

### Two-Mesh Analysis

**Example 2.6.5** Find the current through $4 \; \Omega$ in the circuit shown in Figure 2.23.

![Circuit diagram with two meshes, resistors, voltage sources, and mesh currents I1 and I2](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-074-image-1-clean.webp)

When all mesh currents are drawn clockwise by default, shared branches always carry opposing currents.

![Electrical circuit diagram with two meshes](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-075-image-1-clean.webp)

**Solution**

From loop 1: $15 - 10I_1 - 5(I_1 - I_2) = 0$

$$
15I_1 - 5I_2 = 15
$$

$$
3I_1 - I_2 = 3 \quad (2.4)
$$

From loop 2: $-5(I_2 - I_1) - 4I_2 - 9 = 0$

$$
9I_2 - 5I_1 = -9 \quad (2.5)
$$

From expressions 2.4 and 2.5, we get: $I_1 = 0.82 \text{ A}$

$$
I_2 = -0.54 \text{ A}
$$

Note: The current flowing through the $4\,\Omega$ resistor is the mesh current $I_2$:

$$
I_{4\Omega} = I_2 = - \frac{6}{11} \text{ A} \approx -0.545 \text{ A}
$$

#### Solving the System of Simultaneous Equations

From **Equation 1**, express $I_2$ in terms of $I_1$:

$$
I_2 = 3I_1 - 3
$$

Substitute $I_2$ into **Equation 2**:

$$
\begin{aligned}
5I_1 - 9(3I_1 - 3) &= 9 \\
5I_1 - 27I_1 + 27 &= 9 \\
-22I_1 &= 9 - 27 \\
-22I_1 &= -18 \\
I_1 = \frac{-18}{-22} &= \frac{9}{11}\text{ A} \approx 0.818\text{ A}
\end{aligned}
$$

Now, calculate $I_2$:

$$
\begin{aligned}
I_2 &= 3\left(\frac{9}{11}\right) - 3 \\
I_2 &= \frac{27}{11} - \frac{33}{11} = -\frac{6}{11}\text{ A} \approx -0.545\text{ A}
\end{aligned}
$$

### Three-Mesh Analysis

**Example 2.6.3** Find the loop currents in the electric circuit shown in Figure 2.21.

![Circuit diagram with three loops and multiple resistors and voltage sources.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-078-image-1-clean.webp)

**Solution**

From loop 1: $5 - 5I_1 - 1(I_1 - I_2) = 0$

$$
6I_1 - I_2 = 5 \tag{2.1}
$$

From loop 2: $-2I_2 - 2(I_2 - I_3) - 1(I_2 - I_1) = 0$

$$
5I_2 - I_1 - 2I_3 = 0 \tag{2.2}
$$

From loop 3: $-2(I_3 - I_2) - 3I_3 + 10 = 0$

$$
5I_3 - 2I_2 = 10 \tag{2.3}
$$

From Equation (2.1), $I_2 = 6I_1 - 5$. From Equation (2.3), $5I_3 = 10 + 2I_2$, so $I_3=2.4I_1$.

Substitute these into Equation (2.2), $5I_2-I_1-2I_3=0$:

$$
\begin{aligned}
5(6I_1-5)-I_1-2(2.4I_1)&=0 \\
30I_1-25-I_1-4.8I_1&=0 \\
24.2I_1&=25
\end{aligned}
$$

$$
I_1 = \frac{25}{24.2} = \frac{125}{121} \approx 1.033\text{ A}
$$

Now calculate the other mesh currents:

$$
I_2=6\left(\frac{125}{121}\right)-5=\frac{145}{121}\approx1.198\text{ A},
\qquad
I_3=2.4\left(\frac{125}{121}\right)=\frac{300}{121}\approx2.479\text{ A}.
$$

---

<!-- page 9 | Mesh current method with matrix representation -->

## Mesh current method with matrix representation

### Matrix Method of Analysis

An $n$-mesh network can be represented by $n$ simultaneous equations. Refer to the three-mesh network shown in Figure 2.25.

![Three-mesh electrical network with resistors R1, R2, R3, R4, R5, voltage sources V1, V2, and mesh currents I1, I2, I3](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-092-image-1-clean.webp)

Figure 2.25

![Circuit diagram with three loops containing resistors and voltage sources](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-093-image-1-clean.webp)

The matrix equation for the network is

$R_{11} = 1^{\text{st}} \text{ loop total resistance}$

$R_{12} = \text{common resistance in between}$
$\text{loop } 1 \text{ and } 2$

$R_{12} = R_{21}$
$R_{23} = R_{32}$
$R_{13} = R_{31}$

$V_1 \text{ is } - \text{ to } + \text{ then } v_1$
$V_2 \text{ is } + \text{ to } - \text{ then } -v_2$

$$
\begin{bmatrix} R_{11} & -R_{12} & -R_{13} \\ -R_{21} & R_{22} & -R_{23} \\ -R_{31} & -R_{32} & R_{33} \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \\ I_3 \end{bmatrix} = \begin{bmatrix} V_1 \\ V_2 \\ V_3 \end{bmatrix}
$$

### Matrix Formulation Rules

* **Diagonal Elements ($R_{11}, R_{22}, R_{33}$):** Always positive ($+$). Represents the sum of all resistances in that specific loop.
* **Off-Diagonal Elements ($R_{12}, R_{23}, R_{31}$, etc.):** Usually negative ($-$). Represents the sum of resistances shared between two loops.
  * *Sign Rule:* If both loop currents pass through the shared resistor in opposite directions, the entry is negative ($-$). If they flow in the same direction, the entry is positive ($+$). When all mesh currents are chosen clockwise by convention, currents in shared branches oppose each other, resulting in negative off-diagonal terms.

**Voltage Source Summation**

If two voltage sources lie in the same loop, sources aiding one another are added, whereas sources opposing one another are subtracted.

**Voltage Matrix Polarity**

For entries in the voltage matrix, polarity depends on the assumed mesh current direction.

Applying KVL to each mesh yields the following equations:

![Circuit diagram with three meshes and mesh currents I1, I2, I3](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-095-image-1-clean.webp)

$$
\begin{bmatrix} R_{11} & R_{12} & R_{13} \\ R_{21} & R_{22} & R_{23} \\ R_{31} & R_{32} & R_{33} \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \\ I_3 \end{bmatrix} = \begin{bmatrix} V_1 \\ V_2 \\ V_3 \end{bmatrix}
$$

Rearranging the equations gives:

$$
\begin{aligned}
(R_1 + R_2)I_1 &- R_2 I_2 & &= V_1 \\
-R_2 I_1 &+ (R_2 + R_3 + R_4)I_2 &- R_4 I_3 &= 0 \\
&-R_4 I_2 &+ (R_4 + R_5)I_3 &= -V_2
\end{aligned}
$$

These equations are expressed in matrix form as:

$$
\begin{bmatrix}
(R_1 + R_2) & -R_2 & 0 \\
-R_2 & R_2 + R_3 + R_4 & -R_4 \\
0 & -R_4 & R_4 + R_5
\end{bmatrix}
\begin{bmatrix}
I_1 \\
I_2 \\
I_3
\end{bmatrix}
=
\begin{bmatrix}
V_1 \\
0 \\
-V_2
\end{bmatrix}
$$

**Example 2.6.8**

Determine the mesh currents in the network shown in Figure 2.26.

![Circuit diagram with three meshes and mesh currents I1, I2, I3](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-097-image-1-clean.webp)

Figure 2.26

**Solution**

In Figure 2.26, the reference directions for $I_2$ and $I_3$ are opposite across their shared $2\,\Omega$ resistor. Their mutual resistance terms are therefore $+2$; mesh-current matrix off-diagonal signs depend on the chosen reference directions.

The matrix equation for the network is:

$$
\begin{bmatrix}8&-3&0\\-3&9&2\\0&2&10\end{bmatrix}\begin{bmatrix}I_1\\I_2\\I_3\end{bmatrix}=\begin{bmatrix}5\\10\\35\end{bmatrix}\tag{2.19}
$$

$$
\Delta_R = \begin{vmatrix} 8 & -3 & 0 \\ -3 & 9 & 2 \\ 0 & 2 & 10 \end{vmatrix} = 8(90 - 4) - 3(+30) = 598
$$

$$
\Delta_1 = \begin{vmatrix} 5 & -3 & 0 \\ 10 & 9 & 2 \\ 35 & 2 & 10 \end{vmatrix} = 5(90 - 4) + 3(100 - 70) = 520
$$

$$
\Delta_2 = \begin{vmatrix} 8 & 5 & 0 \\ -3 & 10 & 2 \\ 0 & 35 & 10 \end{vmatrix} = 8(100 - 70) - 5(-30) = 390
$$

$$
\Delta_3 = \begin{vmatrix} 8 & -3 & 5 \\ -3 & 9 & 10 \\ 0 & 2 & 35 \end{vmatrix} = 8(315 - 20) + 3(-105) + 5(-6) = 2015
$$

$$
\therefore I_1 = \frac{\Delta_1}{\Delta_R} = \frac{520}{598} = 0.87\text{ A}
$$

$$
I_2 = \frac{\Delta_2}{\Delta_R} = \frac{390}{598} = 0.65\text{ A}
$$

$$
I_3 = \frac{\Delta_3}{\Delta_R} = \frac{2015}{598} = 3.37\text{ A}
$$

**Example 2.6.9**

Write the resistance matrix of the network shown in Figure 2.27 and determine the current drawn from the voltage source.

![Electrical network diagram with three mesh currents I1, I2, and I3, resistors of 3 ohm, 4 ohm, 2 ohm, 3 ohm, 2 ohm, and 4 ohm, and a 10 V DC voltage source.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-099-image-1-clean.webp)

Figure 2.27

**Solution**

The matrix equation for the network is:

$$
\begin{bmatrix} R_{11} & R_{12} & R_{13} \\ R_{21} & R_{22} & R_{23} \\ R_{31} & R_{32} & R_{33} \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \\ I_3 \end{bmatrix} = \begin{bmatrix} V_1 \\ V_2 \\ V_3 \end{bmatrix}
$$

$$
\begin{bmatrix} 10 & -4 & -3 \\ -4 & 8 & -2 \\ -3 & -2 & 9 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \\ I_3 \end{bmatrix} = \begin{bmatrix} 10 \\ 0 \\ 0 \end{bmatrix} \tag{2.20}
$$

$$
\Delta_R = \begin{vmatrix} 10 & -4 & -3 \\ -4 & 8 & -2 \\ -3 & -2 & 9 \end{vmatrix} = 10(72 - 4) + 4(-36 - 6) - 3(8 + 24) = 416
$$

$$
\Delta_1 = \begin{vmatrix} 10 & -4 & -3 \\ 0 & 8 & -2 \\ 0 & -2 & 9 \end{vmatrix} = 10(72 - 4) + 4(0 - 0) - 3(0 - 0) = 680
$$

$$
\Delta_2 = \begin{vmatrix} 10 & 10 & -3 \\ -4 & 0 & -2 \\ -3 & 0 & 9 \end{vmatrix} = 10(0 - 0) - 10(-36 - 6) - 3(0 - 0) = 420
$$

$$
\Delta_3 = \begin{vmatrix} 10 & -4 & 10 \\ -4 & 8 & 0 \\ -3 & -2 & 0 \end{vmatrix} = 10(0 - 0) + 4(0 - 0) + 10(8 + 24) = 320
$$

$$
\therefore I_1 = \frac{\Delta_1}{\Delta_R} = \frac{680}{416} = 1.635\text{ A}
$$

$$
I_2 = \frac{\Delta_2}{\Delta_R} = \frac{420}{416} = 1.01\text{ A}
$$

$$
I_3 = \frac{\Delta_3}{\Delta_R} = \frac{320}{416} = 0.77\text{ A}
$$

![Circuit diagram with mesh currents I1, I2, and I3](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-100-image-1-clean.webp)

Figure 2.27

---

<!-- page 10 | Node voltage method and numerical problems -->

## Node voltage method and numerical problems

### Kirchhoff's Current Law (KCL)

**Kirchhoff's Current Law**

Kirchhoff's current law states that any current flowing into a node must simultaneously equal the current flowing out of it at any given moment.

* If entering currents are assigned a positive sign, leaving currents are given a negative sign.

![Circuit diagram illustrating Kirchhoff's Current Law with a voltage source connected in parallel to three resistor branches, showing a node A with currents I_T entering and I_1, I_2, I_3 leaving.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-002-image-1-clean.webp)

$$
I_T = I_1 + I_2 + I_3
$$

**Alternative Formulation**

The algebraic sum of all currents meeting at a node is equal to zero.

**Node**

A node is a junction where two or more network elements are connected together.

Algebraic sum: $\sum I = 0$

![Current meeting at a node: currents I1 and I5 entering a node and I2, I3 and I4 leaving it](/assets/notes/ece/s1/electrical/module-1/current-meeting-at-node.svg)

$$
I_1 + I_5 - I_2 - I_3 - I_4 = 0
$$

$$
I_1 + I_5 = I_2 + I_3 + I_4
$$

### Node Voltage Method

**Node Voltage Analysis**

In this method, one of the independent nodes is chosen as the reference node ($0\text{v}$) and the voltages of the remaining independent nodes are defined with respect to it.

![Circuit diagram with a voltmeter and nodes A, B, and C](/assets/notes/ece/s1/electrical/module-1/node-voltage-reference-voltmeter.svg)

Consider the circuit above containing 3 independent nodes: A, B, and C.

* Let C be the reference node (ground).
* Let $V_A$ and $V_B$ be the potentials of nodes A and B with respect to the reference node.
* In node voltage analysis, at any identified node point, currents must enter and leave.

![Circuit diagram with nodes A, B, C, resistors R1 to R5, and voltage sources V1 and V2](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-005-image-1-clean.webp)

#### Procedural Steps

Find the node voltages first; branch currents flowing through circuits and components can then be calculated.

![Circuit diagram for node voltage method analysis showing two voltage sources and five resistors.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-006-image-1-clean.webp)

The network has two independent nodes (A and B), one relative potential, and two absolute potential differences.

![Circuit diagram with two voltage sources V1 and V2, five resistors R1 through R5, two nodes A and B, a ground node C, and labeled currents corresponding to each branch.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-007-image-1-clean.webp)

Three branches connect to node A. Assuming all currents leave node A, the current expression is $I_1+I_2+I_3=0$:

* **Left Branch (towards $V_1$):** Current flows from potential $V_A$ to potential $V_1$ across resistor $R_1$.

$$
I_{\text{left}} = \frac{V_A - V_1}{R_1}
$$

* **Middle-Down Branch (towards Node C):** Current flows from $V_A$ to ground ($0\text{ V}$) through $R_2$.

$$
I_{\text{down}} = \frac{V_A - 0}{R_2} = \frac{V_A}{R_2}
$$

* **Right Branch (towards Node B):** Current flows from $V_A$ to $V_B$ across $R_3$.

$$
I_{\text{right}} = \frac{V_A - V_B}{R_3}
$$

![Circuit diagram with two nodes A and B, resistors R1 to R5, voltage sources V1 and V2, and a ground reference C.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-009-image-1-clean.webp)

Applying KCL at node A ($\rightarrow I_1 + I_2 + I_3 = 0 \rightarrow I = V/R$):

$$
\frac{V_A - V_1}{R_1} + \frac{V_A}{R_2} + \frac{V_A - V_B}{R_3} = 0
$$

Applying KCL at node B:

$$
\frac{V_B - V_2}{R_5} + \frac{V_B}{R_4} + \frac{V_B - V_A}{R_3} = 0
$$

Solving the two simultaneous equations yields the node voltages $V_A$ and $V_B$.

### Numerical Examples

#### Example 1

Using nodal analysis, find the current through the $2\Omega$ resistance.

![Circuit diagram with nodes A, B, and C, resistors of 6 ohms, 1 ohm, 2 ohms, 3 ohms, and 10 ohms, and DC voltage sources of 10V and 20V.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-010-image-1-clean.webp)

First determine the node voltages to calculate the branch current.

Applying KCL at node A:

$$
\frac{V_A - 10}{6} + \frac{V_A}{1} + \frac{V_A - V_B}{2} = 0
$$

$$
V_A \left( \frac{1}{6} + 1 + \frac{1}{2} \right) - \frac{V_B}{2} = \frac{10}{6}
$$

$$
1.667 V_A - 0.5 V_B = 1.667 \quad ---\text{(1)}
$$

Applying KCL at node B:

$$
\frac{V_B - 20}{10} + \frac{V_B}{3} + \frac{V_B - V_A}{2} = 0
$$

$$
-\frac{V_A}{2} + V_B \left( \frac{1}{10} + \frac{1}{3} + \frac{1}{2} \right) = \frac{20}{10}
$$

$$
-0.5 V_A + 0.933 V_B = 2 \quad ---\text{(2)}
$$

Solving the equations:

$$
V_A = 1.957\text{V}, \quad V_B = 3.192\text{V}
$$

$$
I = \frac{V_A - V_B}{2} = \frac{1.957 - 3.192}{2} = -0.617\text{A}
$$

#### Example 2.7.1

Find the current through resistor $20\ \text{ }\ \Omega$ in the circuit shown in Figure 2.32 using nodal analysis.

![Circuit diagram with resistors and voltage sources](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-011-image-1-clean.webp)

Figure 2.32: Circuit for Example 2.7.1

Determine the node voltages to find the required current.

At node $V_1$:

$$
\frac{V_1 - 8}{10} + \frac{V_1}{20} + \frac{V_1 - 2}{30} = 0
$$

![Electrical circuit diagram showing an 8V source, 10 ohm resistor, 20 ohm resistor, 30 ohm resistor, and a 2V source connected in a loop with a central node labeled node V1.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-012-image-1-clean.webp)

**Step 2: Solve for Node Voltage $V_1$**

Multiply the entire equation by the common denominator $60$ to clear fractions:

$$
6(V_1 - 8) + 3V_1 + 2(V_1 - 2) = 0
$$

$$
6V_1 - 48 + 3V_1 + 2V_1 - 4 = 0
$$

$$
11V_1 - 52 = 0
$$

$$
11V_1 = 52
$$

**Step 3: Calculate Current through the $20\ \text{}\Omega$ Resistor**

The current flowing downward through the $20\ \text{}\Omega$ resistor is:

$$
I_{20\ \text{}\Omega} = \frac{V_1}{20} = \frac{4.727}{20} \approx 0.236\ \text{A} \quad \left(\text{or}\ \frac{13}{55}\ \text{A}\right)
$$

The current through the $20\ \text{}\Omega$ resistor is $0.236\ \text{A}$ (flowing downwards).

**Solution Verification**

The circuit is redrawn with node voltages labelled, resistors designated, and reference node assigned as shown in Figure 2.33.

![Electrical circuit diagram with a node voltage V_b and reference node V_d = 0](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-013-image-1-clean.webp)

$$
\frac{V_b - 8}{10} + \frac{V_b - 0}{20} + \frac{V_b - 2}{30} = 0
$$

$$
V_b \left(\frac{1}{10} + \frac{1}{20} + \frac{1}{30}\right) - \left(\frac{8}{10} + \frac{2}{30}\right) = 0
$$

$$
\therefore V_b = 4.7\text{ V}
$$

$$
\text{Current through } 20\,\Omega,\ i_2 = \frac{V_b}{20} = \frac{4.727}{20} \approx 0.236\text{ A}
$$

#### Example 2.7.2

Find the current through the resistor $R_1$ for the network shown in Figure 2.34.

![Circuit diagram with a voltage source, a current source, and two resistors](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-014-image-1-clean.webp)

Figure 2.34: Circuit for Example 2.7.2

First find the node voltages, then calculate the branch current.

![Circuit diagram with a voltage source, two resistors, and a current source](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-015-image-1-clean.webp)

$$
\frac{V_a - 10}{10} + \frac{V_a}{5} - 1 = 0
$$

Expand and collect the voltage terms:

$$
\frac{V_a}{10} - 1 + \frac{V_a}{5} - 1 = 0
\implies V_a\left(\frac{1}{10} + \frac{1}{5}\right) = 2.
$$

Solving gives $V_a = 6.67\text{ V}$.

Current through resistor $R_1$, $i_1 = \frac{10 - V_a}{R_1}\text{ A}$:

$$
= \frac{10 - 6.67}{10} = 0.333\text{ A}
$$

#### Example 2.7.4

Determine the node voltages for the network shown in Figure 2.38.

![Circuit diagram with resistors R1=10 ohms, R2=20 ohms, R3=30 ohms, R4=40 ohms, R5=50 ohms, and a DC voltage source Vs=100V.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-016-image-1-clean.webp)

Figure 2.38: Circuit for Example 2.7.4

First find the node voltages to calculate branch currents.

Figure 2.39 displays the chosen reference node and current directions.

From figure, $V_b = V_s = 100$

![Circuit diagram with nodes labeled V_a, V_b, V_c, V_d=0, resistors R1 through R5, and a voltage source V_s of 100 V.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-017-image-1-clean.webp)

From figure, $V_b = 100$

$$
V_a \left(\frac{1}{10} + \frac{1}{20} + \frac{1}{30}\right) - V_c \left(\frac{1}{30}\right) = \frac{100}{20}
$$

$$
0.183V_a - 0.033V_c = 5
$$

$$
\frac{V_a - V_d}{R_1} + \frac{V_a - V_b}{R_2} + \frac{V_a - V_c}{R_3} = 0
$$

$$
\frac{V_a}{R_1} + \frac{V_a - 100}{R_2} + \frac{V_a - V_c}{R_3} = 0
$$

KCL at Node $V_c$:

$\frac{V_c - V_a}{R_3} + \frac{V_c - V_b}{R_4} + \frac{V_c - V_d}{R_5} = 0$

Substituting $V_d = 0\text{ V}$ and $V_b = 100\text{ V}$ gives:

$$
\frac{V_c - V_a}{R_3} + \frac{V_c - 100}{R_4} + \frac{V_c}{R_5} = 0
$$

$$
V_a \left(\frac{1}{30}\right) - V_c \left(\frac{1}{30} + \frac{1}{40} + \frac{1}{50}\right) = - \frac{100}{40}
$$

$$
0.033V_a - 0.078V_c = -2.5
$$

Solving for $V_a$ and $V_c$, we get $V_a = 35.84\text{ V}$ and $V_c = 47.21\text{ V}$.

An ideal voltage source cannot be expressed using Ohm's Law directly because an ideal voltage source has zero internal resistance.

#### Equivalent calculation with node labels $V_1$ and $V_2$

This is the same circuit as the preceding solution, written with the labels $V_1=V_a$ and $V_2=V_c$. It provides a matrix-form check of the node-voltage results.

**KCL at Node 1 ($V_1$):**

The sum of currents leaving Node 1 equals zero:

$$
\frac{V_1 - 0}{10} + \frac{V_1 - 100}{20} + \frac{V_1 - V_2}{30} = 0
$$

Multiply the entire equation by $60$ to clear denominators:

$$
6V_1 + 3(V_1 - 100) + 2(V_1 - V_2) = 0
$$

$$
6V_1 + 3V_1 - 300 + 2V_1 - 2V_2 = 0
$$

$$
11V_1 - 2V_2 = 300 \quad - (\text{Equation } 1)
$$

**KCL at Node 2 ($V_2$):**

The sum of currents leaving Node 2 equals zero:

$$
\frac{V_2 - 0}{50} + \frac{V_2 - 100}{40} + \frac{V_2 - V_1}{30} = 0
$$

Multiply the entire equation by $600$ to clear denominators:

$$
12V_2 + 15(V_2 - 100) + 20(V_2 - V_1) = 0
$$

$$
12V_2 + 15V_2 - 1500 + 20V_2 - 20V_1 = 0
$$

$$
-20V_1 + 47V_2 = 1500 \quad - (\text{Equation } 2)
$$

![Circuit diagram with resistors and a DC voltage source](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-018-image-1-clean.webp)

**Step 3: Solve the System of Equations**

From Equation 1, express $V_2$ in terms of $V_1$:

$$
2V_2 = 11V_1 - 300 \implies V_2 = 5.5V_1 - 150
$$

Substitute $V_2$ into Equation 2:

$$
-20V_1 + 47(5.5V_1 - 150) = 1500
$$

$$
-20V_1 + 258.5V_1 - 7050 = 1500
$$

$$
238.5V_1 = 8550
$$

$$
V_1 = \frac{8550}{238.5} \approx 35.85 \text{ V}
$$

Substitute $V_1$ back to find $V_2$:

$$
V_2 = 5.5(35.85) - 150 \approx 47.17 \text{ V}
$$

---

<!-- page 11 | Node voltage method with matrix representation -->

## Node voltage method with matrix representation

### Nodal Voltage Matrix Formulation

For a linear resistive network, nodal analysis produces a system of equations. In matrix form, $\mathbf G\mathbf V=\mathbf I_s$, where $\mathbf G$ is the nodal conductance matrix, $\mathbf V$ contains the non-reference node voltages, and $\mathbf I_s$ contains the net currents injected into those nodes.

where

$$
G = \begin{bmatrix}
G_{11} & -G_{12} & \dots & -G_{1n} \\
-G_{21} & G_{22} & \dots & -G_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
-G_{n1} & -G_{n2} & \dots & G_{nn}
\end{bmatrix}
$$

Matrix $G$ is called the conductance matrix.

**Conductance**

Conductance, $G = \frac{1}{R}$, is defined as the reciprocal of resistance:

$$
V = \begin{bmatrix} V_1 \\ V_2 \\ \dots \\ V_n \end{bmatrix}
$$

$$
I_S = \begin{bmatrix} I_{S1} \\ I_{S2} \\ \dots \\ I_{Sn} \end{bmatrix}
$$

### Comparison of Mesh Current and Node Voltage Matrix Methods

| Feature | Mesh Current Matrix Method $[R][I] = [V]$ | Node Voltage Matrix Method $[G][V] = [I]$ |
| --- | --- | --- |
| Governing Law | Kirchhoff's Voltage Law (KVL) around loops | Kirchhoff's Current Law (KCL) at nodes |
| Unknown Vector $(X)$ | Mesh currents $[I_1, I_2, \dots, I_m]^T$ | Non-reference node voltages $[V_1, V_2, \dots, V_n]^T$ |
| Coefficient Matrix $(A)$ | Resistance Matrix $[R]$ (Units: Ohms, $\Omega$) | Conductance Matrix $[G]$ (Units: Siemens, $S$) |
| Diagonal Elements $(A_{ii})$ | Sum of resistances in Mesh $i$ (Always positive) | Sum of conductances connected to Node $i$ (Always positive) |
| Off-Diagonal Elements ($A_{ij}$) | Negative sum of resistances shared between Mesh $i$ and Mesh $j$ | Negative sum of conductances connected directly between Node $i$ and Node $j$ |
| Source Vector $(B)$ | Net driving voltage in each mesh $[V]$ | Net injected current into each node $[I]$ |

#### Matrix Formats

1. Mesh Current Matrix Equation

$$
\begin{bmatrix}
R_{11} & R_{12} & \dots & R_{1m} \\
R_{21} & R_{22} & \dots & R_{2m} \\ \vdots & \vdots & \ddots & \vdots \\
R_{m1} & R_{m2} & \dots & R_{mm}
\end{bmatrix} \begin{bmatrix}
I_1 \\
I_2 \\
\vdots \\
I_m
\end{bmatrix} = \begin{bmatrix}
V_{s1} \\
V_{s2} \\
\vdots \\
V_{sm}
\end{bmatrix}
$$

* $R_{ii}$: Sum of all branch resistances bounding mesh $i$.
* $R_{ij}$ ($i \neq j$): $-(\text{resistance shared by mesh } i \text{ and mesh } j)$ when both mesh currents are defined clockwise.
* $V_{si}$: Sum of independent voltage source rises in the direction of mesh current $i$.

2. Node Voltage Matrix Equation

$$
\begin{bmatrix}
G_{11} & G_{12} & \dots & G_{1n} \\
G_{21} & G_{22} & \dots & G_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
G_{n1} & G_{n2} & \dots & G_{nn}
\end{bmatrix} \begin{bmatrix}
V_1 \\
V_2 \\
\vdots \\
V_n
\end{bmatrix} = \begin{bmatrix}
I_{s1} \\
I_{s2} \\
\vdots \\
I_{sn}
\end{bmatrix}
$$

* $G_{ii}$: Sum of conductances ($1/R$) connected to node $i$.
* $G_{ij}$ ($i \neq j$): $-(\text{conductance connected directly between node } i \text{ and node } j)$.
* $I_{si}$: Net sum of independent source currents entering node $i$.

### Side-by-Side Network Comparison

#### Mesh Analysis

![Mesh analysis circuit diagram showing two loops with currents i1 and i2, resistors R1, R2, R3, and a voltage source E1](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-022-image-1-clean.webp)

$$
\text{KVL: } R_1 i_1 + R_2(i_1 - i_2) = E_1
$$

$$
R_3 i_2 + R_2(i_2 - i_1) = 0
$$

#### Nodal Analysis

![Nodal analysis circuit diagram showing node voltage V, reference ground at 0V, resistors R1, R2, R3, voltage source E1, and branch current direction arrows](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-022-image-2-clean.webp)

$$
\text{KCL: } \frac{V - E_1}{R_1} + \frac{V}{R_2} + \frac{V}{R_3} = 0
$$

### Example 2.7.5

Consider the electric network shown in Figure 2.41. Using the conductance matrix method, solve for node voltages $V_1$ and $V_2$.

![Circuit diagram for Example 2.7.5 showing a network with two current sources, three resistors, and labeled node voltages V1, V2, and V3=0.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-023-image-1-clean.webp)

Figure 2.41: Circuit for Example 2.7.5

Node Voltage Matrix Equation:

$$
\begin{bmatrix} G_{11} & G_{12} & \dots & G_{1n} \\ G_{21} & G_{22} & \dots & G_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ G_{n1} & G_{n2} & \dots & G_{nn} \end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \\ \vdots \\ V_n \end{bmatrix} = \begin{bmatrix} I_{s1} \\ I_{s2} \\ \vdots \\ I_{sn} \end{bmatrix}
$$

**Solution**

In this network, the number of nodes is $3$.

Therefore, the order of the conductance matrix is $n = 3 - 1 = 2$.

Therefore, we can write the conductance matrix as described above:

$$
G = \begin{bmatrix} G_{11} & -G_{12} \\ -G_{21} & G_{22} \end{bmatrix}
$$

* $G_{11}$ is the sum of conductance connected to node 1, i.e., $G_{11} = \left(\frac{1}{R_1} + \frac{1}{R_2}\right) = \left(1 + \frac{1}{4}\right) = \frac{5}{4}$.
* $G_{12}$ and $G_{21}$ represent the conductance connected to node 1 and node 2, i.e., $G_{12} = G_{21} = \frac{1}{R_2} = \frac{1}{4}$.
* $G_{22}$ is the sum of conductance connected to node 2, i.e., $G_{22} = \left(\frac{1}{R_2} + \frac{1}{R_3}\right) = \left(\frac{1}{4} + \frac{1}{6}\right) = \frac{10}{24} = \frac{5}{12}$.

Therefore, the conductance matrix is:


$$
G = \begin{bmatrix} G_{11} & -G_{12} \\ -G_{21} & G_{22} \end{bmatrix} = \begin{bmatrix} \frac{5}{4} & -\frac{1}{4} \\ -\frac{1}{4} & \frac{5}{12} \end{bmatrix}
$$

We can write node voltage equations in matrix form as:

$$
G.V = I_s
$$

Where

$$
G = \begin{bmatrix} \frac{5}{4} & -\frac{1}{4} \\ -\frac{1}{4} & \frac{5}{12} \end{bmatrix}, \quad V = \begin{bmatrix} V_1 \\ V_2 \end{bmatrix}, \quad \text{and } I_s = \begin{bmatrix} I_{S1} \\ I_{S2} \end{bmatrix} = \begin{bmatrix} 3 \\ 2 \end{bmatrix}
$$

Therefore,

$$
\begin{bmatrix} \frac{5}{4} & -\frac{1}{4} \\ -\frac{1}{4} & \frac{5}{12} \end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} 3 \\ 2 \end{bmatrix}
$$

We can solve for node voltages $V_1$ and $V_2$ using Cramer's rule as discussed in section 2.6.1.

We get, $V_1 = 3.82\text{ V}$ and $V_2 = 7.09\text{ V}$.

#### Branch-current verification for Example 2.7.5

Use the same circuit and nodal conductance matrix as the preceding Example 2.7.5. The following branch-current calculation checks the two node voltages.

![Electrical circuit diagram with current sources, resistors, and node voltages](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-025-image-1-clean.webp)

1. Conductance Terms ($G_{ij}$):

* $G_{11} = \text{Sum of conductances connected to Node } 1 = \frac{1}{R_1} + \frac{1}{R_2} = \frac{1}{1} + \frac{1}{4} = 1.25\text{ S}$
* $G_{22} = \text{Sum of conductances connected to Node } 2 = \frac{1}{R_2} + \frac{1}{R_3} = \frac{1}{4} + \frac{1}{6} = \frac{5}{12}\text{ S} \approx 0.4167\text{ S}$
* $G_{12} = G_{21} = -\text{Conductance between Node } 1 \text{ and Node } 2 = -\frac{1}{R_2} = -\frac{1}{4} = -0.25\text{ S}$

2. Source Currents ($I_{si}$):

* $I_{s1} = \text{Net current entering Node } 1 = 3\text{ A } (\text{from } I_{S1})$
* $I_{s2} = \text{Net current entering Node } 2 = +2\text{ A } (\text{the source arrow points into Node } 2)$

The two ideal current sources both point upward, so they inject $3\,\mathrm A$ into node 1 and $2\,\mathrm A$ into node 2. The nodal equations are:

$$
\begin{bmatrix} 1.25 & -0.25 \\ -0.25 & 5/12 \end{bmatrix}
\begin{bmatrix}V_1\\V_2\end{bmatrix}=
\begin{bmatrix}3\\2\end{bmatrix}.
$$

Equivalently,

$$
\frac54V_1-\frac14V_2=3,\qquad -\frac14V_1+\frac5{12}V_2=2.
$$

The determinant is $\Delta=(5/4)(5/12)-(1/4)^2=11/24$. Cramer's rule gives

$$
V_1=\frac{7/4}{11/24}=\frac{42}{11}\,\mathrm V\approx3.818\,\mathrm V,
\qquad
V_2=\frac{13/4}{11/24}=\frac{78}{11}\,\mathrm V\approx7.091\,\mathrm V.
$$

#### Branch-current check

Using the arrows shown in the circuit ($i_1$ downward, $i_2$ left-to-right, and $i_3$ downward):

$$
i_1=\frac{V_1}{1\,\Omega}=\frac{42}{11}\,\mathrm A\approx3.818\,\mathrm A,
\quad
i_2=\frac{V_1-V_2}{4\,\Omega}=-\frac9{11}\,\mathrm A\approx-0.818\,\mathrm A,
\quad
i_3=\frac{V_2}{6\,\Omega}=\frac{13}{11}\,\mathrm A\approx1.182\,\mathrm A.
$$

The negative sign means the actual current through $R_2$ flows right-to-left. KCL checks: $i_1+i_2=3\,\mathrm A$ at node 1, and $-i_2+i_3=2\,\mathrm A$ at node 2.

---

<!-- page 13 | Star-delta transformation and bridge circuits -->

## Star-delta transformation and bridge circuits

**Star and Delta Configurations**

Star (Wye, Y) and Delta ($\Delta$) are the two standard arrangements of three resistors joining three terminals of a resistive network. Replacing one arrangement with the other creates series and parallel combinations that can then be reduced with the usual rules.

![T-network circuit diagram](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-039-image-1-clean.webp)

![Y-network (Star) circuit diagram](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-039-image-2-clean.webp)

![T-network circuit diagram with resistors R_AB, R_AC, R_BC and terminals A, B, C](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-040-image-1-clean.webp)

![Delta network circuit diagram with resistors R_AC, R_BC, R_AB and terminals A, B, C forming a triangle](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-040-image-2-clean.webp)

![Y-Shaped to Delta-Shaped resistor conversion diagram](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-041-image-1-clean.webp)

In complex bridge circuits, it is often difficult to identify the total equivalent resistance directly using series and parallel reduction rules alone.

![Electric circuit diagram showing delta-wye or triangle configuration with nodes A, B, C and resistors RA, RB, RC, RAB, RBC, RCA.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-042-image-1-clean.webp)

![Delta network circuit diagram](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-043-image-1-clean.webp)

(a) Delta network

![Star network circuit diagram](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-043-image-2-clean.webp)

(b) Star network

### Star-to-Delta and Delta-to-Star Transformations

![Star and Delta resistive network transformation diagram and formulas](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-044-image-1-clean.webp)

#### Delta-to-Star Transformation

$$
R_A = \frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}
$$

$$
R_B = \frac{R_{BC} R_{AB}}{R_{AB} + R_{BC} + R_{CA}}
$$

$$
R_C = \frac{R_{CA} R_{BC}}{R_{AB} + R_{BC} + R_{CA}}
$$

#### Star-to-Delta Transformation

$$
R_{AB} = \frac{R_A R_B + R_B R_C + R_C R_A}{R_C}
$$

$$
R_{BC} = \frac{R_A R_B + R_B R_C + R_C R_A}{R_A}
$$

$$
R_{CA} = \frac{R_A R_B + R_B R_C + R_C R_A}{R_B}
$$

![Star and Delta network interconnected with nodes A, B, C and resistors R_A, R_B, R_C, R_AB, R_BC, R_CA](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-045-image-1-clean.webp)

### Transformation Summary

| DELTA to STAR TRANSFORMATION | STAR to DELTA TRANSFORMATION |
| :--- | :--- |
| $R_A = \frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$<br><br>$R_B = \frac{R_{BC} R_{AB}}{R_{AB} + R_{BC} + R_{CA}}$<br><br>$R_C = \frac{R_{CA} R_{BC}}{R_{AB} + R_{BC} + R_{CA}}$ | $R_{AB} = \frac{R_A R_B + R_B R_C + R_C R_A}{R_C}$<br><br>$R_{BC} = \frac{R_A R_B + R_B R_C + R_C R_A}{R_A}$<br><br>$R_{CA} = \frac{R_A R_B + R_B R_C + R_C R_A}{R_B}$ |

### Worked Examples

**Example 1**

Use star-delta transformation to find the equivalent resistance between C and D. Also, find the current from the source.

![Bridge circuit with resistors and a 50V voltage source](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-046-image-1-clean.webp)

![Electrical circuit diagram with a bridge configuration connected to a 50V voltage source](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-047-image-1-clean.webp)

$$
R_A = \frac{R_{AB}R_{CA}}{R_{AB} + R_{BC} + R_{CA}} = \frac{5 \times 3}{5 + 3 + 2} = 1.5\,\Omega
$$

$$
R_B = \frac{R_{BC}R_{AB}}{R_{AB} + R_{BC} + R_{CA}} = \frac{3 \times 2}{5 + 3 + 2} = 0.6\,\Omega
$$

$$
R_C = \frac{R_{CA}R_{BC}}{R_{AB} + R_{BC} + R_{CA}} = \frac{5 \times 2}{5 + 3 + 2} = 1\,\Omega
$$

![Electrical bridge circuit diagram with resistors and a DC voltage source](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-049-image-1-clean.webp)

![Circuit diagram with a 1 ohm resistor in series with a parallel combination of 6.5 ohm and 8.6 ohm resistors, connected to a 50V DC source.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-050-image-1-clean.webp)

$R_{eq} = 1 + \frac{6.5 \times 8.6}{6.5 + 8.6} = 4.7\Omega$

$$
\text{Current drawn from the supply } I = \frac{50}{4.7} = 10.64\text{ A}
$$

**Example 2**

For the network shown in figure, determine the equivalent delta network using delta-star and star-delta transformations and hence find currents $I_1$, $I_2$ and $I_3$.

![Electrical circuit diagram with three voltage sources, three series resistors, and a star-connected load network.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-052-image-1-clean.webp)

![An electrical circuit diagram with two 100V DC sources, three line resistors of 2 Ω each, current indicators I1, I2, I3, and a delta-connected load of three 24 Ω resistors between nodes A, B, and C.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-053-image-1-clean.webp)

Using delta to star transformation:

![Circuit diagram showing three-wire supply with 100V sources, 2 ohm resistors in each line, and load resistors of 8 ohms arranged in a bridge network.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-054-image-1-clean.webp)

![Transformed circuit diagram showing a star-connected load with 30 ohm resistors and corresponding equations for currents I1, I2, and I3.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-054-image-2-clean.webp)

$$
\begin{aligned}
I_1 &= \frac{10}{3} + \frac{20}{3} = 10\text{ A} \\
I_2 &= \frac{10}{3} - \frac{10}{3} = 0 \\
I_3 &= -\frac{10}{3} - \frac{20}{3} = -10\text{ A}
\end{aligned}
$$

**Example 3**

Using delta-star transformation, find the voltage $V_{BD}$.

![Circuit diagram containing a bridge network and a DC voltage source](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-055-image-1-clean.webp)

$$
R_A = \frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}} = \frac{1 \times 2}{1 + 2 + 5} = 0.25\Omega
$$

$$
R_B = \frac{R_{BC} R_{AB}}{R_{AB} + R_{BC} + R_{CA}} = \frac{1 \times 5}{1 + 2 + 5} = 0.625\Omega
$$

$$
R_C = \frac{R_{CA} R_{BC}}{R_{AB} + R_{BC} + R_{CA}} = \frac{5 \times 2}{1 + 2 + 5} = 1.25\Omega
$$

![Electrical circuit diagram with a 4V DC source and multiple resistors](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-056-image-1-clean.webp)

Current drawn from source, $I = \dfrac{4}{3 + 0.25 + \dfrac{4.625 \times 7.25}{4.625 + 7.25}} = 0.6586\text{ A}$

Current through $4\,\Omega$ resistance, $I_{4\,\Omega} = \dfrac{7.25}{4.625 + 7.25} \times 0.6586 = 0.402\text{ A}$

$V_{BD} = 4 \times I_{4\,\Omega} = 4 \times 0.402 = 1.608\text{ V}$

**Example 2.8.1**

Find the total resistance of the circuit between the points A and B of Figure 2.43.

![Circuit diagram with resistors connected in series and parallel between points A and B](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-058-image-1-clean.webp)

Figure 2.43

*Solution:*

The delta CDE of Figure 2.43 is converted into equivalent star as shown in Figure 2.44(a).

$$
R_{CS} = \frac{8 \times 4}{18} = \frac{16}{9} \ \Omega
$$

$$
R_{ES} = \frac{8 \times 6}{18} = \frac{24}{9} \ \Omega
$$

$$
R_{DS} = \frac{6 \times 4}{18} = \frac{12}{9} \ \Omega
$$

![Figure 2.44 showing delta to star conversion steps (a) and (b)](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-059-image-1-clean.webp)

Figure 2.44

![Figure 2.43 original bridge circuit](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-059-image-2-clean.webp)

Figure 2.43


Two parallel resistances between S and B can be simplified to a single resistance of $\frac{35}{9} \ \Omega$ as:

$$
R_{SB} = \left(\frac{12}{9} + 8\right) \parallel \left(\frac{24}{9} + 4\right) = \frac{35}{9} \ \Omega
$$

$$
\therefore \text{Total resistance, } R_{AB} = 4 + \frac{16}{9} + \frac{35}{9} = \frac{87}{9} \ \Omega
$$

**Example 2.8.2**

Find the resistance between the points A and B in the network shown in Figure 2.45.

![Resistor network diagram (Figure 2.45)](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-060-image-1-clean.webp)

Figure 2.45

![Circuit diagram of a bridge network with outer delta ABC and inner delta DEF](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-061-image-1-clean.webp)

![Circuit diagram for Figure 2.47](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-061-image-2-clean.webp)

*Solution:*

The inner delta $DEF$ is first transformed to its equivalent star network as given below:

$$
R_D = \frac{3 \times 1}{1 + 1 + 3} = 0.6\;\Omega
$$

$$
R_E = \frac{1 \times 1}{1 + 1 + 3} = 0.2\;\Omega
$$

$$
R_F = \frac{3 \times 1}{1 + 1 + 3} = 0.6\;\Omega
$$

![Delta network converted to star, Figure 2.46, with branches A-B, B-C, C-A and star arms D, E and F](/assets/notes/ece/s1/electrical/module-1/star-delta-figure-2-46.svg)


$$
R_{FE} = 1.6 + 2.2 + \frac{1.6 \times 2.2}{1.6} = 6\;\Omega
$$

$$
R_{DE} = 1.6 + 2.2 + \frac{1.6 \times 2.2}{1.6} = 6\;\Omega
$$

$$
R_{FD} = 1.6 + 1.6 + \frac{1.6 \times 1.6}{2.2} \approx 4.36\;\Omega
$$

Resistances $R_{AB}$, $R_{BC}$ and $R_{AC}$ are given by:

$$
R_{AB} = \frac{6 \times 1}{6 + 1} = 0.86\;\Omega
$$

$$
R_{BC} = \frac{6 \times 2}{6 + 2} = 1.5\;\Omega
$$

$$
R_{AC} = \frac{3 \times 4.36}{3 + 4.36} = 1.78\;\Omega
$$

$$
\therefore \text{ Resistance across } AB = (R_{AC} + R_{BC}) \parallel R_{AB}
$$

$$
= \frac{(1.78+1.5)\times0.86}{(1.78+1.5)+0.86}\approx0.68\;\Omega.
$$

**Example 2.8.3**

Determine the equivalent resistance of the network shown in Figure 2.48.

![Circuit diagram for Example 2.8.3 with resistors and terminals A and B](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-062-image-1-clean.webp)

Figure 2.48

*Solution:*

The star network CBE is transformed to its equivalent delta network as shown in Figure 2.49.

![Circuit diagram Figure 2.49 showing a bridge network with resistors](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-063-image-1-clean.webp)

Figure 2.49

$$
\begin{aligned}
R_{CE} &= 2 + 3 + \frac{2 \times 3}{4} = 6.5 \; \Omega \\
R_{EB} &= 3 + 4 + \frac{4 \times 3}{2} = 13 \; \Omega \\
R_{BC} &= 2 + 4 + \frac{2 \times 4}{3} = 8.66 \; \Omega
\end{aligned}
$$

The delta network ACE is transformed to its equivalent star network as shown in Figure 2.50.

![Circuit diagram Figure 2.50 showing star-delta transformation](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-063-image-2-clean.webp)

Figure 2.50

$$
\begin{aligned}
R_1 &= \frac{4 \times 4}{4 + 2 + 6.5} = 0.64 \; \Omega \\
R_2 &= \frac{6.5 \times 2}{4 + 2 + 6.5} = 1.04 \; \Omega \\
R_3 &= \frac{4 \times 6.5}{4 + 2 + 6.5} = 2.08 \; \Omega
\end{aligned}
$$

Two pairs of parallel branches $3 \; \Omega \parallel 8.66 \; \Omega$ and $13 \; \Omega \parallel 1 \; \Omega$ are simplified as shown in Figure 2.51:

$$
3 \; \Omega \parallel 8.66 \; \Omega = \frac{3 \times 8.66}{3 + 8.66} = 2.23 \; \Omega
$$

and $13 \; \Omega \parallel 1 \; \Omega = \frac{13 \times 1}{13 + 1} = 0.93 \; \Omega$

![Circuit diagram Figure 2.51 showing simplified equivalent circuit](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-063-image-3-clean.webp)

Figure 2.51

Equivalent resistance between the terminals A and B is:

$$
0.64 + (2.23 + 2.08) \parallel (1.04 + 0.93) = 0.64 + \frac{4.31 \times 1.97}{4.31 + 1.97} = 1.99 \; \Omega
$$

**Example 2.8.4**

Find the equivalent resistance across the battery terminals of the bridge network shown below.

![Bridge network with resistors connected in a diamond shape and a DC voltage source at the bottom.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-065-image-1-clean.webp)

**Figure 2.52.** Bridge network used in Example 2.8.4.

*Solution:*

The delta network DAC has been transformed to its equivalent star as shown in Figure 2.53:

$$
R_1 = \frac{2 \times 1}{2 + 1 + 1} = 0.5\ \Omega
$$

$$
R_2 = \frac{1 \times 1}{2 + 1 + 1} = 0.25\ \Omega
$$

$$
R_3 = \frac{2 \times 1}{2 + 1 + 1} = 0.5\ \Omega
$$

![Equivalent circuit diagram after delta-to-star transformation.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-065-image-2-clean.webp)

Figure 2.53

Now the total resistance across the points D and B is:

$$
0.5 + (0.25 + 1) \parallel (0.5 + 1) = 0.5 + \frac{1.25 \times 1.5}{1.25 + 1.5} = \frac{13}{11}\ \Omega
$$

**Example 2.8.5**

Obtain a simplified delta network from the network shown in Figure 2.54.

![Circuit diagram of a bridged delta-star network with nodes A, B, C, and D, and resistors of various values.](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-066-image-1-clean.webp)

Figure 2.54

*Solution:*

The star in the Figure 2.54 is converted to delta and combined with the existing delta as shown in Figure 2.55(a).

![Circuit conversion from star-delta to combined delta and simplified delta network](https://pub-bb6bc322a59c4c0787d9a4ccd091dced.r2.dev/notes/cse/s1/electrical/module-1/assets/page-067-image-1-clean.webp)

$$
\begin{aligned}
R_{AB} &= 6 + 4 + \frac{6 \times 4}{3} = 18\text{ }\Omega\\
R_{AC} &= 6 + 3 + \frac{6 \times 3}{4} = 13.5\text{ }\Omega\\
R_{BC} &= 4 + 3 + \frac{4 \times 3}{6} = 9\text{ }\Omega
\end{aligned}
$$

The simplified delta network is shown in figure 2.55(b).

---
