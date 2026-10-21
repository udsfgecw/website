<!-- page 1 | Start here -->

## Engineering Physics (official term: S1/S2): Semiconductor and Photonic Devices

Master the fundamentals, operation, efficiency, and characteristics of semiconductor rectifiers, Zener diodes, tunnel diodes, photodiodes, solar cells, and light-emitting diodes.

**Before you start:** Basic electronics and atomic structure; P-N junction diode forward and reverse biasing; Fundamental electricity and power formulas.

### Your path through this module

1. **Introduction to Rectifiers and Half-Wave Rectifiers**: A single diode can half-wave rectify AC into pulsating DC with a maximum theoretical efficiency of 40.6%.
2. **Full-Wave Rectifiers and Ripple Factor**: Using two or four diodes in bridge configurations doubles the output power efficiency to 81.2% and significantly reduces the ripple factor.
3. **Zener Diode and Breakdown Mechanisms**: Heavy doping creates a thin depletion layer where high electric fields cause Zener breakdown at precise low voltages, enabling constant voltage regulation.
4. **Tunnel Diodes and Negative Resistance**: Extreme doping allows electrons to tunnel through the barrier directly, creating a negative resistance region used in ultra-high speed switching and oscillators.
5. **Photodetectors: Junction and PIN Photodiodes**: Inserting an intrinsic region between heavily doped p and n layers in a PIN photodiode broadens the space charge area, maximizing photon absorption and speed.
6. **Solar Cells and Panel Stringing**: Solar cells convert solar radiation directly into electrical power under zero bias, and cells can be strung in series or parallel to scale total voltage or current.
7. **Light Emitting Diodes (LEDs)**: Forward-biasing a heavily doped p-n junction forces electron-hole recombination that releases energy as photons, where the color is determined by the semiconductor band gap energy.

<!-- page 2 | Introduction to Rectifiers and Half-Wave Rectifiers -->

## Introduction to Rectifiers and Half-Wave Rectifiers

### Introduction and Rectification
Having studied basic p-n junctions, we now explore how they convert alternating current (AC) into direct current (DC). A rectifier is an electronic device that converts an alternating current into a direct current by using one or more P-N junction diodes. The process of converting AC to DC is called rectification.

Rectifiers are generally classified into two basic types:
1. Half-wave rectifier
2. Full-wave rectifier

---

### Half-Wave Rectifier

A half-wave rectifier is a type of rectifier that converts only half of the input AC signal into a pulsating DC output signal, while the remaining half of the signal is blocked or lost. In a half-wave rectifier, a single p-n junction diode is connected in series with a load resistor and an AC supply (typically fed via a step-up or step-down transformer).

```jsxgraph
{"title":"Half-wave rectifier circuit with transformer input","boundingBox":[0,11,20,0],"axis":false,"points":[{"id":"d1","x":10.05,"y":8,"show":false},{"id":"d2","x":10.05,"y":8.65,"show":false},{"id":"d3","x":10.7,"y":8,"show":false},{"id":"dc1","x":11.15,"y":7.55,"show":false},{"id":"dc2","x":11.15,"y":8.45,"show":false},{"id":"ac","x":1.5,"y":5,"show":false}],"circles":[{"center":"ac","radius":0.55}],"polygons":[{"points":["d1","d2","d3"],"fill":"#ffffff"}],"segments":[{"from":"dc1","to":"dc2"}],"polylines":[[[7.5,8],[9.75,8]],[[7.5,8],[7.5,7.35],[7.5776,7.3305],[7.65,7.3109],[7.7121,7.2914],[7.7598,7.2719],[7.7898,7.2523],[7.8,7.2328],[7.7898,7.2133],[7.7598,7.1937],[7.7121,7.1742],[7.65,7.1547],[7.5776,7.1352],[7.5,7.1156],[7.4224,7.0961],[7.35,7.0766],[7.2879,7.057],[7.2402,7.0375],[7.2102,7.018],[7.2,6.9984],[7.2102,6.9789],[7.2402,6.9594],[7.2879,6.9398],[7.35,6.9203],[7.4224,6.9008],[7.5,6.8812],[7.5776,6.8617],[7.65,6.8422],[7.7121,6.8227],[7.7598,6.8031],[7.7898,6.7836],[7.8,6.7641],[7.7898,6.7445],[7.7598,6.725],[7.7121,6.7055],[7.65,6.6859],[7.5776,6.6664],[7.5,6.6469],[7.4224,6.6273],[7.35,6.6078],[7.2879,6.5883],[7.2402,6.5687],[7.2102,6.5492],[7.2,6.5297],[7.2102,6.5102],[7.2402,6.4906],[7.2879,6.4711],[7.35,6.4516],[7.4224,6.432],[7.5,6.4125],[7.5776,6.393],[7.65,6.3734],[7.7121,6.3539],[7.7598,6.3344],[7.7898,6.3148],[7.8,6.2953],[7.7898,6.2758],[7.7598,6.2562],[7.7121,6.2367],[7.65,6.2172],[7.5776,6.1977],[7.5,6.1781],[7.4224,6.1586],[7.35,6.1391],[7.2879,6.1195],[7.2402,6.1],[7.2102,6.0805],[7.2,6.0609],[7.2102,6.0414],[7.2402,6.0219],[7.2879,6.0023],[7.35,5.9828],[7.4224,5.9633],[7.5,5.9437],[7.5776,5.9242],[7.65,5.9047],[7.7121,5.8852],[7.7598,5.8656],[7.7898,5.8461],[7.8,5.8266],[7.7898,5.807],[7.7598,5.7875],[7.7121,5.768],[7.65,5.7484],[7.5776,5.7289],[7.5,5.7094],[7.4224,5.6898],[7.35,5.6703],[7.2879,5.6508],[7.2402,5.6312],[7.2102,5.6117],[7.2,5.5922],[7.2102,5.5727],[7.2402,5.5531],[7.2879,5.5336],[7.35,5.5141],[7.4224,5.4945],[7.5,5.475],[7.5776,5.4555],[7.65,5.4359],[7.7121,5.4164],[7.7598,5.3969],[7.7898,5.3773],[7.8,5.3578],[7.7898,5.3383],[7.7598,5.3187],[7.7121,5.2992],[7.65,5.2797],[7.5776,5.2602],[7.5,5.2406],[7.4224,5.2211],[7.35,5.2016],[7.2879,5.182],[7.2402,5.1625],[7.2102,5.143],[7.2,5.1234],[7.2102,5.1039],[7.2402,5.0844],[7.2879,5.0648],[7.35,5.0453],[7.4224,5.0258],[7.5,5.0062],[7.5776,4.9867],[7.65,4.9672],[7.7121,4.9477],[7.7598,4.9281],[7.7898,4.9086],[7.8,4.8891],[7.7898,4.8695],[7.7598,4.85],[7.7121,4.8305],[7.65,4.8109],[7.5776,4.7914],[7.5,4.7719],[7.4224,4.7523],[7.35,4.7328],[7.2879,4.7133],[7.2402,4.6937],[7.2102,4.6742],[7.2,4.6547],[7.2102,4.6352],[7.2402,4.6156],[7.2879,4.5961],[7.35,4.5766],[7.4224,4.557],[7.5,4.5375],[7.5776,4.518],[7.65,4.4984],[7.7121,4.4789],[7.7598,4.4594],[7.7898,4.4398],[7.8,4.4203],[7.7898,4.4008],[7.7598,4.3812],[7.7121,4.3617],[7.65,4.3422],[7.5776,4.3227],[7.5,4.3031],[7.4224,4.2836],[7.35,4.2641],[7.2879,4.2445],[7.2402,4.225],[7.2102,4.2055],[7.2,4.1859],[7.2102,4.1664],[7.2402,4.1469],[7.2879,4.1273],[7.35,4.1078],[7.4224,4.0883],[7.5,4.0687],[7.5776,4.0492],[7.65,4.0297],[7.7121,4.0102],[7.7598,3.9906],[7.7898,3.9711],[7.8,3.9516],[7.7898,3.932],[7.7598,3.9125],[7.7121,3.893],[7.65,3.8734],[7.5776,3.8539],[7.5,3.8344],[7.4224,3.8148],[7.35,3.7953],[7.2879,3.7758],[7.2402,3.7563],[7.2102,3.7367],[7.2,3.7172],[7.2102,3.6977],[7.2402,3.6781],[7.2879,3.6586],[7.35,3.6391],[7.4224,3.6195],[7.5,3.6],[7.5,2]],[[15,6.3],[14.65,6.0],[15.35,5.7],[14.65,5.4],[15.35,5.1],[14.65,4.8],[15.35,4.5],[15,4.2]],[[15,4.2],[15,2],[7.5,2]],[[1.5,5.55],[1.5,8],[3.2,8],[3.2,7.35],[3.2776,7.3305],[3.35,7.3109],[3.4121,7.2914],[3.4598,7.2719],[3.4898,7.2523],[3.5,7.2328],[3.4898,7.2133],[3.4598,7.1937],[3.4121,7.1742],[3.35,7.1547],[3.2776,7.1352],[3.2,7.1156],[3.1224,7.0961],[3.05,7.0766],[2.9879,7.057],[2.9402,7.0375],[2.9102,7.018],[2.9,6.9984],[2.9102,6.9789],[2.9402,6.9594],[2.9879,6.9398],[3.05,6.9203],[3.1224,6.9008],[3.2,6.8812],[3.2776,6.8617],[3.35,6.8422],[3.4121,6.8227],[3.4598,6.8031],[3.4898,6.7836],[3.5,6.7641],[3.4898,6.7445],[3.4598,6.725],[3.4121,6.7055],[3.35,6.6859],[3.2776,6.6664],[3.2,6.6469],[3.1224,6.6273],[3.05,6.6078],[2.9879,6.5883],[2.9402,6.5687],[2.9102,6.5492],[2.9,6.5297],[2.9102,6.5102],[2.9402,6.4906],[2.9879,6.4711],[3.05,6.4516],[3.1224,6.432],[3.2,6.4125],[3.2776,6.393],[3.35,6.3734],[3.4121,6.3539],[3.4598,6.3344],[3.4898,6.3148],[3.5,6.2953],[3.4898,6.2758],[3.4598,6.2562],[3.4121,6.2367],[3.35,6.2172],[3.2776,6.1977],[3.2,6.1781],[3.1224,6.1586],[3.05,6.1391],[2.9879,6.1195],[2.9402,6.1],[2.9102,6.0805],[2.9,6.0609],[2.9102,6.0414],[2.9402,6.0219],[2.9879,6.0023],[3.05,5.9828],[3.1224,5.9633],[3.2,5.9437],[3.2776,5.9242],[3.35,5.9047],[3.4121,5.8852],[3.4598,5.8656],[3.4898,5.8461],[3.5,5.8266],[3.4898,5.807],[3.4598,5.7875],[3.4121,5.768],[3.35,5.7484],[3.2776,5.7289],[3.2,5.7094],[3.1224,5.6898],[3.05,5.6703],[2.9879,5.6508],[2.9402,5.6312],[2.9102,5.6117],[2.9,5.5922],[2.9102,5.5727],[2.9402,5.5531],[2.9879,5.5336],[3.05,5.5141],[3.1224,5.4945],[3.2,5.475],[3.2776,5.4555],[3.35,5.4359],[3.4121,5.4164],[3.4598,5.3969],[3.4898,5.3773],[3.5,5.3578],[3.4898,5.3383],[3.4598,5.3187],[3.4121,5.2992],[3.35,5.2797],[3.2776,5.2602],[3.2,5.2406],[3.1224,5.2211],[3.05,5.2016],[2.9879,5.182],[2.9402,5.1625],[2.9102,5.143],[2.9,5.1234],[2.9102,5.1039],[2.9402,5.0844],[2.9879,5.0648],[3.05,5.0453],[3.1224,5.0258],[3.2,5.0062],[3.2776,4.9867],[3.35,4.9672],[3.4121,4.9477],[3.4598,4.9281],[3.4898,4.9086],[3.5,4.8891],[3.4898,4.8695],[3.4598,4.85],[3.4121,4.8305],[3.35,4.8109],[3.2776,4.7914],[3.2,4.7719],[3.1224,4.7523],[3.05,4.7328],[2.9879,4.7133],[2.9402,4.6937],[2.9102,4.6742],[2.9,4.6547],[2.9102,4.6352],[2.9402,4.6156],[2.9879,4.5961],[3.05,4.5766],[3.1224,4.557],[3.2,4.5375],[3.2776,4.518],[3.35,4.4984],[3.4121,4.4789],[3.4598,4.4594],[3.4898,4.4398],[3.5,4.4203],[3.4898,4.4008],[3.4598,4.3812],[3.4121,4.3617],[3.35,4.3422],[3.2776,4.3227],[3.2,4.3031],[3.1224,4.2836],[3.05,4.2641],[2.9879,4.2445],[2.9402,4.225],[2.9102,4.2055],[2.9,4.1859],[2.9102,4.1664],[2.9402,4.1469],[2.9879,4.1273],[3.05,4.1078],[3.1224,4.0883],[3.2,4.0687],[3.2776,4.0492],[3.35,4.0297],[3.4121,4.0102],[3.4598,3.9906],[3.4898,3.9711],[3.5,3.9516],[3.4898,3.932],[3.4598,3.9125],[3.4121,3.893],[3.35,3.8734],[3.2776,3.8539],[3.2,3.8344],[3.1224,3.8148],[3.05,3.7953],[2.9879,3.7758],[2.9402,3.7563],[2.9102,3.7367],[2.9,3.7172],[2.9102,3.6977],[2.9402,3.6781],[2.9879,3.6586],[3.05,3.6391],[3.1224,3.6195],[3.2,3.6],[3.2,2],[1.5,2],[1.5,4.45]],[[5.2,3.6],[5.2,7.3]],[[5.45,3.6],[5.45,7.3]],[[7.5,8],[9.75,8]]],"labels":[{"x":10.5,"y":9.3,"text":"D"},{"x":16.2,"y":5.2,"text":"R_L"},{"x":16.2,"y":3.2,"text":"V_out"},{"x":7.5,"y":9.1,"text":"A"},{"x":7.5,"y":1.3,"text":"B"},{"x":1.5,"y":5,"text":"~"},{"x":5.8,"y":10.25,"text":"Transformer"}]}
```

```jsxgraph
{"title":"Input AC voltage waveform","boundingBox":[-6.8,1.4,6.8,-1.4],"axis":true,"polylines":[{"points":[[-6.2832,-0.0],[-6.1575,0.1253],[-6.0319,0.2487],[-5.9062,0.3681],[-5.7805,0.4817],[-5.6549,0.5878],[-5.5292,0.6845],[-5.4036,0.7705],[-5.2779,0.8443],[-5.1522,0.9048],[-5.0266,0.9511],[-4.9009,0.9823],[-4.7752,0.998],[-4.6496,0.998],[-4.5239,0.9823],[-4.3982,0.9511],[-4.2726,0.9048],[-4.1469,0.8443],[-4.0212,0.7705],[-3.8956,0.6846],[-3.7699,0.5878],[-3.6443,0.4818],[-3.5186,0.3681],[-3.3929,0.2487],[-3.2673,0.1253],[-3.1416,0.0],[-3.0159,-0.1253],[-2.8903,-0.2487],[-2.7646,-0.3681],[-2.6389,-0.4817],[-2.5133,-0.5878],[-2.3876,-0.6845],[-2.262,-0.7705],[-2.1363,-0.8443],[-2.0106,-0.9048],[-1.885,-0.9511],[-1.7593,-0.9823],[-1.6336,-0.998],[-1.508,-0.998],[-1.3823,-0.9823],[-1.2566,-0.9511],[-1.131,-0.9048],[-1.0053,-0.8443],[-0.8796,-0.7705],[-0.754,-0.6845],[-0.6283,-0.5878],[-0.5027,-0.4818],[-0.377,-0.3681],[-0.2513,-0.2487],[-0.1257,-0.1253],[0.0,0.0],[0.1257,0.1253],[0.2513,0.2487],[0.377,0.3681],[0.5027,0.4818],[0.6283,0.5878],[0.754,0.6845],[0.8796,0.7705],[1.0053,0.8443],[1.131,0.9048],[1.2566,0.9511],[1.3823,0.9823],[1.508,0.998],[1.6336,0.998],[1.7593,0.9823],[1.885,0.9511],[2.0106,0.9048],[2.1363,0.8443],[2.262,0.7705],[2.3876,0.6845],[2.5133,0.5878],[2.6389,0.4817],[2.7646,0.3681],[2.8903,0.2487],[3.0159,0.1253],[3.1416,-0.0],[3.2673,-0.1253],[3.3929,-0.2487],[3.5186,-0.3681],[3.6443,-0.4818],[3.7699,-0.5878],[3.8956,-0.6846],[4.0212,-0.7705],[4.1469,-0.8443],[4.2726,-0.9048],[4.3982,-0.9511],[4.5239,-0.9823],[4.6496,-0.998],[4.7752,-0.998],[4.9009,-0.9823],[5.0266,-0.9511],[5.1522,-0.9048],[5.2779,-0.8443],[5.4036,-0.7705],[5.5292,-0.6845],[5.6549,-0.5878],[5.7805,-0.4817],[5.9062,-0.3681],[6.0319,-0.2487],[6.1575,-0.1253],[6.2832,0.0]],"stroke":"#2563eb"}],"labels":[{"x":4.9,"y":1.05,"text":"v_in"}]}
```

```jsxgraph
{"title":"Half-wave rectified output waveform","boundingBox":[-6.8,1.4,6.8,-0.35],"axis":true,"polylines":[{"points":[[-6.2832,0],[-6.1575,0.1253],[-6.0319,0.2487],[-5.9062,0.3681],[-5.7805,0.4817],[-5.6549,0.5878],[-5.5292,0.6845],[-5.4036,0.7705],[-5.2779,0.8443],[-5.1522,0.9048],[-5.0266,0.9511],[-4.9009,0.9823],[-4.7752,0.998],[-4.6496,0.998],[-4.5239,0.9823],[-4.3982,0.9511],[-4.2726,0.9048],[-4.1469,0.8443],[-4.0212,0.7705],[-3.8956,0.6846],[-3.7699,0.5878],[-3.6443,0.4818],[-3.5186,0.3681],[-3.3929,0.2487],[-3.2673,0.1253],[-3.1416,0.0],[-3.0159,0],[-2.8903,0],[-2.7646,0],[-2.6389,0],[-2.5133,0],[-2.3876,0],[-2.262,0],[-2.1363,0],[-2.0106,0],[-1.885,0],[-1.7593,0],[-1.6336,0],[-1.508,0],[-1.3823,0],[-1.2566,0],[-1.131,0],[-1.0053,0],[-0.8796,0],[-0.754,0],[-0.6283,0],[-0.5027,0],[-0.377,0],[-0.2513,0],[-0.1257,0],[0.0,0],[0.1257,0.1253],[0.2513,0.2487],[0.377,0.3681],[0.5027,0.4818],[0.6283,0.5878],[0.754,0.6845],[0.8796,0.7705],[1.0053,0.8443],[1.131,0.9048],[1.2566,0.9511],[1.3823,0.9823],[1.508,0.998],[1.6336,0.998],[1.7593,0.9823],[1.885,0.9511],[2.0106,0.9048],[2.1363,0.8443],[2.262,0.7705],[2.3876,0.6845],[2.5133,0.5878],[2.6389,0.4817],[2.7646,0.3681],[2.8903,0.2487],[3.0159,0.1253],[3.1416,0],[3.2673,0],[3.3929,0],[3.5186,0],[3.6443,0],[3.7699,0],[3.8956,0],[4.0212,0],[4.1469,0],[4.2726,0],[4.3982,0],[4.5239,0],[4.6496,0],[4.7752,0],[4.9009,0],[5.0266,0],[5.1522,0],[5.2779,0],[5.4036,0],[5.5292,0],[5.6549,0],[5.7805,0],[5.9062,0],[6.0319,0],[6.1575,0],[6.2832,0.0]],"stroke":"#16a34a"}],"labels":[{"x":4.9,"y":1.05,"text":"v_out"}]}
```

#### Working Principle
- **Positive Half Cycle:** The AC voltage across the secondary winding $AB$ changes polarities. During the positive half-cycle, terminal $A$ becomes positive with respect to terminal $B$. This makes the diode **forward-biased**, allowing it to conduct current through the circuit and the load resistor $R_L$.
- **Negative Half Cycle:** During the negative half-cycle, terminal $A$ is negative with respect to terminal $B$. This makes the diode **reverse-biased**, blocking the flow of current.

Consequently, all negative half-cycles of the AC supply are suppressed, and current flows through the load $R_L$ in only one direction, creating a pulsating DC voltage. This pulsating output can be smoothened out using a filter circuit.

#### Peak Inverse Voltage (PIV)
Peak Inverse Voltage is the maximum voltage that a diode must withstand when it is reverse-biased. For a simple half-wave rectifier without a capacitor-input filter, the reverse-biased diode must withstand the peak of the transformer secondary voltage:
$$\text{PIV} = V_m$$
where $V_m$ is the maximum peak voltage across half of the secondary winding.

#### Disadvantages of Half-Wave Rectifiers
1. The output is very low since power is delivered to the load only during half of the input cycle.
2. Heavy filtering is required to produce a steady DC current due to high ripple content.

---

### Efficiency of a Half-Wave Rectifier

Rectifier efficiency ($\eta$) is defined as the ratio of the DC power output to the applied input AC power:
$$\eta = \frac{\text{DC Output Power } (P_{dc})}{\text{AC Input Power } (P_{ac})}$$

#### Derivation of Efficiency
1. **DC Output Power ($P_{dc}$):**
   $$P_{dc} = I_{dc}^2 R_L$$
   Since the DC load current for a half-wave rectifier is $I_{dc} = \frac{I_m}{\pi}$ (where $I_m$ is the maximum peak value of current):
   $$P_{dc} = \left(\frac{I_m}{\pi}\right)^2 R_L$$

2. **AC Input Power ($P_{ac}$):**
   $$P_{ac} = I_{rms}^2 (r_f + R_L)$$
   Since the RMS current for a half-wave rectifier is $I_{rms} = \frac{I_m}{2}$:
   $$P_{ac} = \left(\frac{I_m}{2}\right)^2 (r_f + R_L)$$

3. **Calculating Efficiency ($\eta$):**
   $$\eta = \frac{\left(\frac{I_m}{\pi}\right)^2 R_L}{\left(\frac{I_m}{2}\right)^2 (r_f + R_L)} = \frac{4}{\pi^2} \left( \frac{R_L}{r_f + R_L} \right)$$

   $$\eta = \frac{0.406}{1 + \frac{r_f}{R_L}}$$
   where:
   - $R_L$ = Load resistance
   - $r_f$ = Forward resistance of the diode

The efficiency of a half-wave rectifier is maximum when the diode forward resistance $r_f$ is negligible compared to the load resistance $R_L$.

$$\text{Maximum Rectifier Efficiency} = \frac{4}{\pi^2} \approx 0.406 \text{ or } 40.6\%$$

---

### Full-Wave Rectifier Preview

![Centre tap full wave rectifier circuit diagram and output waveform](/assets/notes/ece/s1/physics/module-2/p007-1-clean.webp)

In a centre-tap full-wave rectifier, two diodes ($D_1$ and $D_2$) and a centre-tapped transformer are used to achieve rectification during both the positive and negative half-cycles, effectively doubling efficiency and output power.

<!-- page 3 | Full-Wave Rectifiers and Ripple Factor -->

## Full-Wave Rectifiers and Ripple Factor

While a half-wave rectifier uses only one half of the alternating current (AC) input cycle, a full-wave rectifier utilizes both halves to achieve higher efficiency and a smoother output. This section covers the operation of centre-tap and full-wave bridge rectifiers, their mathematical efficiency, and the ripple factor.

### Centre-Tap Full-Wave Rectifier

A centre-tap full-wave rectifier uses a transformer with a tapped secondary winding connected to two diodes ($D_1$ and $D_2$) and a shared load resistor $R_L$.

- **Positive Half Cycle:** End $A$ of the secondary winding becomes positive and end $B$ becomes negative. Diode $D_1$ is forward-biased and conducts, while $D_2$ is reverse-biased and blocks current. Conventional current flows through $D_1$, the load resistor $R_L$, and the upper half of the secondary winding.
- **Negative Half Cycle:** End $A$ becomes negative and end $B$ becomes positive. Diode $D_2$ conducts, while $D_1$ is reverse-biased. Current flows through $D_2$, the load resistance $R_L$, and the lower half of the winding.

Because the current flows through the load resistance $R_L$ in the same direction during both half-cycles, continuous unidirectional pulsating DC is obtained. The peak inverse voltage (PIV) across each diode is:
$$\text{PIV} = 2V_m$$
where $V_m$ is the maximum secondary voltage.

**Disadvantages of Centre-Tap Rectifier:**
1. It is difficult and expensive to locate the exact centre tap on the secondary winding.
2. The diodes used must withstand a high peak inverse voltage ($2V_m$).
3. The DC output voltage is relatively small.

---

### Full-Wave Bridge Rectifier

To overcome the limitations of the centre-tap configuration, the bridge rectifier uses four diodes without requiring a centre-tapped transformer.

```jsxgraph
{"title":"Full-wave bridge rectifier with transformer, P–Q AC input and A–B DC output","boundingBox":[0,11,21,0],"axis":false,"points":[{"id":"T","x":13,"y":9,"show":false},{"id":"A","x":10,"y":6,"show":false},{"id":"Q","x":13,"y":3,"show":false},{"id":"B","x":16,"y":6,"show":false},{"id":"src","x":1.8,"y":6,"show":false},{"id":"loadTop","x":18.2,"y":5.5,"show":false},{"id":"loadBot","x":18.2,"y":4.5,"show":false},{"id":"s","x":18.2,"y":5.5,"show":false},{"id":"e","x":18.2,"y":4.5,"show":false},{"id":"D1back","x":11.8394,"y":7.8394,"show":false},{"id":"D1bl","x":11.5283,"y":7.9243,"show":false},{"id":"D1br","x":11.9243,"y":7.5283,"show":false},{"id":"D1tip","x":11.3727,"y":7.3727,"show":false},{"id":"D1bar1","x":11.0333,"y":7.5141,"show":false},{"id":"D1bar2","x":11.5141,"y":7.0333,"show":false},{"id":"D1barMid","x":11.2737,"y":7.2737,"show":false},{"id":"D2back","x":11.8394,"y":4.1606,"show":false},{"id":"D2bl","x":11.9243,"y":4.4717,"show":false},{"id":"D2br","x":11.5283,"y":4.0757,"show":false},{"id":"D2tip","x":11.3727,"y":4.6273,"show":false},{"id":"D2bar1","x":11.5141,"y":4.9667,"show":false},{"id":"D2bar2","x":11.0333,"y":4.4859,"show":false},{"id":"D2barMid","x":11.2737,"y":4.7263,"show":false},{"id":"D3back","x":14.8394,"y":4.8394,"show":false},{"id":"D3bl","x":14.5283,"y":4.9243,"show":false},{"id":"D3br","x":14.9243,"y":4.5283,"show":false},{"id":"D3tip","x":14.3727,"y":4.3727,"show":false},{"id":"D3bar1","x":14.0333,"y":4.5141,"show":false},{"id":"D3bar2","x":14.5141,"y":4.0333,"show":false},{"id":"D3barMid","x":14.2737,"y":4.2737,"show":false},{"id":"D4back","x":14.8394,"y":7.1606,"show":false},{"id":"D4bl","x":14.9243,"y":7.4717,"show":false},{"id":"D4br","x":14.5283,"y":7.0757,"show":false},{"id":"D4tip","x":14.3727,"y":7.6273,"show":false},{"id":"D4bar1","x":14.5141,"y":7.9667,"show":false},{"id":"D4bar2","x":14.0333,"y":7.4859,"show":false},{"id":"D4barMid","x":14.2737,"y":7.7263,"show":false}],"circles":[{"center":"src","radius":0.48}],"polylines":[[[1.8,6.48],[1.8,9],[3.4,9],[3.4,8.65],[3.4725,8.625],[3.54,8.6],[3.598,8.575],[3.6425,8.55],[3.6705,8.525],[3.68,8.5],[3.6705,8.475],[3.6425,8.45],[3.598,8.425],[3.54,8.4],[3.4725,8.375],[3.4,8.35],[3.3275,8.325],[3.26,8.3],[3.202,8.275],[3.1575,8.25],[3.1295,8.225],[3.12,8.2],[3.1295,8.175],[3.1575,8.15],[3.202,8.125],[3.26,8.1],[3.3275,8.075],[3.4,8.05],[3.4725,8.025],[3.54,8.0],[3.598,7.975],[3.6425,7.95],[3.6705,7.925],[3.68,7.9],[3.6705,7.875],[3.6425,7.85],[3.598,7.825],[3.54,7.8],[3.4725,7.775],[3.4,7.75],[3.3275,7.725],[3.26,7.7],[3.202,7.675],[3.1575,7.65],[3.1295,7.625],[3.12,7.6],[3.1295,7.575],[3.1575,7.55],[3.202,7.525],[3.26,7.5],[3.3275,7.475],[3.4,7.45],[3.4725,7.425],[3.54,7.4],[3.598,7.375],[3.6425,7.35],[3.6705,7.325],[3.68,7.3],[3.6705,7.275],[3.6425,7.25],[3.598,7.225],[3.54,7.2],[3.4725,7.175],[3.4,7.15],[3.3275,7.125],[3.26,7.1],[3.202,7.075],[3.1575,7.05],[3.1295,7.025],[3.12,7.0],[3.1295,6.975],[3.1575,6.95],[3.202,6.925],[3.26,6.9],[3.3275,6.875],[3.4,6.85],[3.4725,6.825],[3.54,6.8],[3.598,6.775],[3.6425,6.75],[3.6705,6.725],[3.68,6.7],[3.6705,6.675],[3.6425,6.65],[3.598,6.625],[3.54,6.6],[3.4725,6.575],[3.4,6.55],[3.3275,6.525],[3.26,6.5],[3.202,6.475],[3.1575,6.45],[3.1295,6.425],[3.12,6.4],[3.1295,6.375],[3.1575,6.35],[3.202,6.325],[3.26,6.3],[3.3275,6.275],[3.4,6.25],[3.4725,6.225],[3.54,6.2],[3.598,6.175],[3.6425,6.15],[3.6705,6.125],[3.68,6.1],[3.6705,6.075],[3.6425,6.05],[3.598,6.025],[3.54,6.0],[3.4725,5.975],[3.4,5.95],[3.3275,5.925],[3.26,5.9],[3.202,5.875],[3.1575,5.85],[3.1295,5.825],[3.12,5.8],[3.1295,5.775],[3.1575,5.75],[3.202,5.725],[3.26,5.7],[3.3275,5.675],[3.4,5.65],[3.4725,5.625],[3.54,5.6],[3.598,5.575],[3.6425,5.55],[3.6705,5.525],[3.68,5.5],[3.6705,5.475],[3.6425,5.45],[3.598,5.425],[3.54,5.4],[3.4725,5.375],[3.4,5.35],[3.3275,5.325],[3.26,5.3],[3.202,5.275],[3.1575,5.25],[3.1295,5.225],[3.12,5.2],[3.1295,5.175],[3.1575,5.15],[3.202,5.125],[3.26,5.1],[3.3275,5.075],[3.4,5.05],[3.4725,5.025],[3.54,5.0],[3.598,4.975],[3.6425,4.95],[3.6705,4.925],[3.68,4.9],[3.6705,4.875],[3.6425,4.85],[3.598,4.825],[3.54,4.8],[3.4725,4.775],[3.4,4.75],[3.3275,4.725],[3.26,4.7],[3.202,4.675],[3.1575,4.65],[3.1295,4.625],[3.12,4.6],[3.1295,4.575],[3.1575,4.55],[3.202,4.525],[3.26,4.5],[3.3275,4.475],[3.4,4.45],[3.4725,4.425],[3.54,4.4],[3.598,4.375],[3.6425,4.35],[3.6705,4.325],[3.68,4.3],[3.6705,4.275],[3.6425,4.25],[3.598,4.225],[3.54,4.2],[3.4725,4.175],[3.4,4.15],[3.3275,4.125],[3.26,4.1],[3.202,4.075],[3.1575,4.05],[3.1295,4.025],[3.12,4.0],[3.1295,3.975],[3.1575,3.95],[3.202,3.925],[3.26,3.9],[3.3275,3.875],[3.4,3.85],[3.4,3],[1.8,3],[1.8,5.52]],[[5.2,9],[5.2,8.65],[5.2725,8.625],[5.34,8.6],[5.398,8.575],[5.4425,8.55],[5.4705,8.525],[5.48,8.5],[5.4705,8.475],[5.4425,8.45],[5.398,8.425],[5.34,8.4],[5.2725,8.375],[5.2,8.35],[5.1275,8.325],[5.06,8.3],[5.002,8.275],[4.9575,8.25],[4.9295,8.225],[4.92,8.2],[4.9295,8.175],[4.9575,8.15],[5.002,8.125],[5.06,8.1],[5.1275,8.075],[5.2,8.05],[5.2725,8.025],[5.34,8.0],[5.398,7.975],[5.4425,7.95],[5.4705,7.925],[5.48,7.9],[5.4705,7.875],[5.4425,7.85],[5.398,7.825],[5.34,7.8],[5.2725,7.775],[5.2,7.75],[5.1275,7.725],[5.06,7.7],[5.002,7.675],[4.9575,7.65],[4.9295,7.625],[4.92,7.6],[4.9295,7.575],[4.9575,7.55],[5.002,7.525],[5.06,7.5],[5.1275,7.475],[5.2,7.45],[5.2725,7.425],[5.34,7.4],[5.398,7.375],[5.4425,7.35],[5.4705,7.325],[5.48,7.3],[5.4705,7.275],[5.4425,7.25],[5.398,7.225],[5.34,7.2],[5.2725,7.175],[5.2,7.15],[5.1275,7.125],[5.06,7.1],[5.002,7.075],[4.9575,7.05],[4.9295,7.025],[4.92,7.0],[4.9295,6.975],[4.9575,6.95],[5.002,6.925],[5.06,6.9],[5.1275,6.875],[5.2,6.85],[5.2725,6.825],[5.34,6.8],[5.398,6.775],[5.4425,6.75],[5.4705,6.725],[5.48,6.7],[5.4705,6.675],[5.4425,6.65],[5.398,6.625],[5.34,6.6],[5.2725,6.575],[5.2,6.55],[5.1275,6.525],[5.06,6.5],[5.002,6.475],[4.9575,6.45],[4.9295,6.425],[4.92,6.4],[4.9295,6.375],[4.9575,6.35],[5.002,6.325],[5.06,6.3],[5.1275,6.275],[5.2,6.25],[5.2725,6.225],[5.34,6.2],[5.398,6.175],[5.4425,6.15],[5.4705,6.125],[5.48,6.1],[5.4705,6.075],[5.4425,6.05],[5.398,6.025],[5.34,6.0],[5.2725,5.975],[5.2,5.95],[5.1275,5.925],[5.06,5.9],[5.002,5.875],[4.9575,5.85],[4.9295,5.825],[4.92,5.8],[4.9295,5.775],[4.9575,5.75],[5.002,5.725],[5.06,5.7],[5.1275,5.675],[5.2,5.65],[5.2725,5.625],[5.34,5.6],[5.398,5.575],[5.4425,5.55],[5.4705,5.525],[5.48,5.5],[5.4705,5.475],[5.4425,5.45],[5.398,5.425],[5.34,5.4],[5.2725,5.375],[5.2,5.35],[5.1275,5.325],[5.06,5.3],[5.002,5.275],[4.9575,5.25],[4.9295,5.225],[4.92,5.2],[4.9295,5.175],[4.9575,5.15],[5.002,5.125],[5.06,5.1],[5.1275,5.075],[5.2,5.05],[5.2725,5.025],[5.34,5.0],[5.398,4.975],[5.4425,4.95],[5.4705,4.925],[5.48,4.9],[5.4705,4.875],[5.4425,4.85],[5.398,4.825],[5.34,4.8],[5.2725,4.775],[5.2,4.75],[5.1275,4.725],[5.06,4.7],[5.002,4.675],[4.9575,4.65],[4.9295,4.625],[4.92,4.6],[4.9295,4.575],[4.9575,4.55],[5.002,4.525],[5.06,4.5],[5.1275,4.475],[5.2,4.45],[5.2725,4.425],[5.34,4.4],[5.398,4.375],[5.4425,4.35],[5.4705,4.325],[5.48,4.3],[5.4705,4.275],[5.4425,4.25],[5.398,4.225],[5.34,4.2],[5.2725,4.175],[5.2,4.15],[5.1275,4.125],[5.06,4.1],[5.002,4.075],[4.9575,4.05],[4.9295,4.025],[4.92,4.0],[4.9295,3.975],[4.9575,3.95],[5.002,3.925],[5.06,3.9],[5.1275,3.875],[5.2,3.85],[5.2,3]],[[5.2,9],[13,9]],[[5.2,3],[13,3]],[[10,6],[8.8,6],[8.8,4.8]],[[16,6],[18.2,6],[18.2,5.5]],[[18.2,4.5],[18.2,3.5]],[[8.3,4.8],[9.3,4.8]],[[8.45,4.55],[9.15,4.55]],[[8.6,4.3],[9,4.3]],[[17.7,3.5],[18.7,3.5]],[[17.85,3.25],[18.55,3.25]],[[18,3],[18.4,3]],[[18.2,5.5],[18.2,5.3],[17.9,5.1],[18.5,4.9],[17.9,4.7],[18.5,4.5],[18.2,4.5]],[[13,9],[11.8394,7.8394]],[[11.2737,7.2737],[10,6]],[[13,3],[11.8394,4.1606]],[[11.2737,4.7263],[10,6]],[[16,6],[14.8394,4.8394]],[[14.2737,4.2737],[13,3]],[[16,6],[14.8394,7.1606]],[[14.2737,7.7263],[13,9]]],"segments":[{"from":"D1bar1","to":"D1bar2"},{"from":"D2bar1","to":"D2bar2"},{"from":"D3bar1","to":"D3bar2"},{"from":"D4bar1","to":"D4bar2"}],"polygons":[{"points":["D1bl","D1br","D1tip"],"fill":"#ffffff"},{"points":["D2bl","D2br","D2tip"],"fill":"#ffffff"},{"points":["D3bl","D3br","D3tip"],"fill":"#ffffff"},{"points":["D4bl","D4br","D4tip"],"fill":"#ffffff"}],"labels":[{"x":5.9,"y":10.15,"text":"Transformer"},{"x":13,"y":10.2,"text":"P (AC)"},{"x":13,"y":1.85,"text":"Q (AC)"},{"x":9.2,"y":6.5,"text":"A (+)"},{"x":16.8,"y":6.5,"text":"B (−)"},{"x":19.1,"y":5.0,"text":"R_L"},{"x":1.8,"y":6,"text":"~"},{"x":11.2,"y":8.0,"text":"D1"},{"x":11.2,"y":4.0,"text":"D2"},{"x":15.2,"y":4.0,"text":"D3"},{"x":15.2,"y":8.2,"text":"D4"}]}
```


```jsxgraph
{"title":"Transformer secondary voltage (normalized)","boundingBox":[-6.5,1.2,6.5,-1.2],"axis":true,"polylines":[[[-6.2832,0.0],[-6.1261,0.1564],[-5.969,0.309],[-5.8119,0.454],[-5.6549,0.5878],[-5.4978,0.7071],[-5.3407,0.809],[-5.1836,0.891],[-5.0265,0.9511],[-4.8695,0.9877],[-4.7124,1.0],[-4.5553,0.9877],[-4.3982,0.9511],[-4.2412,0.891],[-4.0841,0.809],[-3.927,0.7071],[-3.7699,0.5878],[-3.6128,0.454],[-3.4558,0.309],[-3.2987,0.1564],[-3.1416,-0.0],[-2.9845,-0.1564],[-2.8274,-0.309],[-2.6704,-0.454],[-2.5133,-0.5878],[-2.3562,-0.7071],[-2.1991,-0.809],[-2.042,-0.891],[-1.885,-0.9511],[-1.7279,-0.9877],[-1.5708,-1.0],[-1.4137,-0.9877],[-1.2566,-0.9511],[-1.0996,-0.891],[-0.9425,-0.809],[-0.7854,-0.7071],[-0.6283,-0.5878],[-0.4712,-0.454],[-0.3142,-0.309],[-0.1571,-0.1564],[0.0,0.0],[0.1571,0.1564],[0.3142,0.309],[0.4712,0.454],[0.6283,0.5878],[0.7854,0.7071],[0.9425,0.809],[1.0996,0.891],[1.2566,0.9511],[1.4137,0.9877],[1.5708,1.0],[1.7279,0.9877],[1.885,0.9511],[2.042,0.891],[2.1991,0.809],[2.3562,0.7071],[2.5133,0.5878],[2.6704,0.454],[2.8274,0.309],[2.9845,0.1564],[3.1416,0.0],[3.2987,-0.1564],[3.4558,-0.309],[3.6128,-0.454],[3.7699,-0.5878],[3.927,-0.7071],[4.0841,-0.809],[4.2412,-0.891],[4.3982,-0.9511],[4.5553,-0.9877],[4.7124,-1.0],[4.8695,-0.9877],[5.0265,-0.9511],[5.1836,-0.891],[5.3407,-0.809],[5.4978,-0.7071],[5.6549,-0.5878],[5.8119,-0.454],[5.969,-0.309],[6.1261,-0.1564],[6.2832,-0.0]]]}
```
*Figure 2: Secondary voltage waveform*

```jsxgraph
{"title":"Full-wave bridge output voltage (normalized)","boundingBox":[-6.5,1.2,6.5,-0.2],"axis":true,"polylines":[[[-6.2832,0.0],[-6.1261,0.1564],[-5.969,0.309],[-5.8119,0.454],[-5.6549,0.5878],[-5.4978,0.7071],[-5.3407,0.809],[-5.1836,0.891],[-5.0265,0.9511],[-4.8695,0.9877],[-4.7124,1.0],[-4.5553,0.9877],[-4.3982,0.9511],[-4.2412,0.891],[-4.0841,0.809],[-3.927,0.7071],[-3.7699,0.5878],[-3.6128,0.454],[-3.4558,0.309],[-3.2987,0.1564],[-3.1416,0.0],[-2.9845,0.1564],[-2.8274,0.309],[-2.6704,0.454],[-2.5133,0.5878],[-2.3562,0.7071],[-2.1991,0.809],[-2.042,0.891],[-1.885,0.9511],[-1.7279,0.9877],[-1.5708,1.0],[-1.4137,0.9877],[-1.2566,0.9511],[-1.0996,0.891],[-0.9425,0.809],[-0.7854,0.7071],[-0.6283,0.5878],[-0.4712,0.454],[-0.3142,0.309],[-0.1571,0.1564],[0.0,0.0],[0.1571,0.1564],[0.3142,0.309],[0.4712,0.454],[0.6283,0.5878],[0.7854,0.7071],[0.9425,0.809],[1.0996,0.891],[1.2566,0.9511],[1.4137,0.9877],[1.5708,1.0],[1.7279,0.9877],[1.885,0.9511],[2.042,0.891],[2.1991,0.809],[2.3562,0.7071],[2.5133,0.5878],[2.6704,0.454],[2.8274,0.309],[2.9845,0.1564],[3.1416,0.0],[3.2987,0.1564],[3.4558,0.309],[3.6128,0.454],[3.7699,0.5878],[3.927,0.7071],[4.0841,0.809],[4.2412,0.891],[4.3982,0.9511],[4.5553,0.9877],[4.7124,1.0],[4.8695,0.9877],[5.0265,0.9511],[5.1836,0.891],[5.3407,0.809],[5.4978,0.7071],[5.6549,0.5878],[5.8119,0.454],[5.969,0.309],[6.1261,0.1564],[6.2832,0.0]]]}
```
*Figure 3: Output voltage waveform Vout*

#### Working Principle
In a full-wave bridge rectifier, four diodes ($D_1, D_2, D_3,$ and $D_4$) are arranged in a bridge network. The AC supply is applied to diagonally opposite ends via a transformer, and the load resistance $R_L$ is connected across the remaining two terminals.

- **Positive Half Cycle:** End $P$ of the secondary winding is positive and end $Q$ is negative. Diodes $D_1$ and $D_3$ become forward-biased and conduct in series through the load $R_L$, while $D_2$ and $D_4$ are reverse-biased. Current flows from terminal $A$ to $B$ through $R_L$.
- **Negative Half Cycle:** End $P$ becomes negative and end $Q$ becomes positive. Diodes $D_2$ and $D_4$ become forward-biased and conduct through the load resistance $R_L$, while $D_1$ and $D_3$ are reverse-biased. Current flows through $R_L$ in the exact same direction ($A$ to $B$) as during the positive half cycle.

#### Advantages and Disadvantages
**Advantages:**
1. No centre-tapped transformer is required.
2. The peak inverse voltage (PIV) is halved to $V_m$, compared to $2V_m$ in the centre-tap circuit.
3. The DC output is twice that of the single-diode half-wave configuration.

**Disadvantages:**
1. It requires four diodes instead of two.
2. The internal voltage drop is twice that of the centre-tap circuit because two diodes conduct in series during each half cycle.

---

### Efficiency of a Full-Wave Rectifier

Rectifier efficiency ($\eta$) is defined as the ratio of the DC power output to the applied AC power input:
$$\eta = \frac{P_{\text{dc}}}{P_{\text{ac}}}$$

The DC power delivered to the load resistor $R_L$ is:
$$P_{\text{dc}} = I_{\text{dc}}^2 R_L = \left(\frac{2I_m}{\pi}\right)^2 R_L = \frac{4}{\pi^2} I_m^2 R_L$$
where $I_{\text{dc}} = \frac{2I_m}{\pi}$ is the average DC load current and $I_m$ is the peak load current.

The total AC input power consumed by the circuit is:
$$P_{\text{ac}} = I_{\text{rms}}^2 (r_f + R_L)$$
where the RMS load current for a full-wave rectifier is $I_{\text{rms}} = \frac{I_m}{\sqrt{2}}$, and $r_f$ is the forward resistance of the diodes. Substituting $I_{\text{rms}}$:
$$P_{\text{ac}} = \left(\frac{I_m}{\sqrt{2}}\right)^2 (r_f + R_L) = \frac{I_m^2}{2} (r_f + R_L)$$

Dividing $P_{\text{dc}}$ by $P_{\text{ac}}$ gives the efficiency equation:
$$\eta = \frac{\frac{4}{\pi^2} I_m^2 R_L}{\frac{I_m^2}{2} (r_f + R_L)} = \frac{8}{\pi^2} \frac{R_L}{r_f + R_L} = \frac{0.812}{1 + \frac{r_f}{R_L}}$$

Assuming the diode forward resistance $r_f$ is negligible compared to the load resistance $R_L$ ($r_f \ll R_L$):
$$\eta_{\max} = \frac{8}{\pi^2} \approx 0.812 \text{ or } 81.2\%$$

---

### Ripple Factor

The ripple factor ($\gamma$) measures the effectiveness of a rectifier and is defined as the ratio of the root-mean-square (rms) value of the AC component of the output to the DC component:
$$\text{Ripple Factor} = \frac{I_{\text{ac}}}{I_{\text{dc}}} = \sqrt{\left(\frac{I_{\text{rms}}}{I_{\text{dc}}}\right)^2 - 1}$$

A smaller ripple factor indicates a weaker effective AC component (less pulsating noise) and a smoother DC output.

- **Ripple Factor for Half-Wave Rectifier:** $1.21$
- **Ripple Factor for Full-Wave Rectifier:** $0.48$

### Preview: Zener Diode and Breakdown Mechanisms
A Zener diode is a heavily doped $pn$ junction diode engineered to operate safely in the reverse breakdown region. Its precise breakdown voltage is established by regulating doping concentrations during manufacturing.

<!-- page 4 | Zener Diode and Breakdown Mechanisms -->

## Zener Diode and Breakdown Mechanisms

### Introduction and Construction
While standard p-n junction diodes are designed to block reverse current, heavily doped silicon p-n junction diodes called **Zener diodes** are specifically engineered to operate stably in the reverse breakdown region without getting damaged. Due to heavy doping concentration, the depletion region of a Zener diode is extremely thin. Consequently, a high electric field is established across the junction even at relatively low reverse voltages.

```jsxgraph
{"title":"Zener diode symbol","boundingBox":[-4,2,4,-2],"axis":false,"points":[{"id":"a","x":-1,"y":0,"show":false},{"id":"t","x":1,"y":0,"show":false},{"id":"u","x":-1,"y":0.9,"show":false},{"id":"d","x":-1,"y":-0.9,"show":false},{"id":"l","x":-3.2,"y":0,"show":false},{"id":"r","x":3.2,"y":0,"show":false},{"id":"c1","x":1,"y":-0.9,"show":false},{"id":"c2","x":1,"y":0.9,"show":false},{"id":"c3","x":1.5,"y":1.2,"show":false},{"id":"c4","x":0.5,"y":-1.2,"show":false}],"polygons":[{"points":["u","t","d"],"fill":"#1f2937","stroke":"#1f2937"}],"segments":[{"from":"l","to":"a"},{"from":"t","to":"r"},{"from":"c1","to":"c4"},{"from":"c2","to":"c3"},{"from":"c1","to":"c2"}]}
```

Symbol of zener diode

The standard circuit symbol of a Zener diode is similar to that of a normal p-n junction diode, but with distinctive bent tips (resembling the letter 'Z') at the ends of the cathode bar.

### Working Principle of Zener Diode
1. **Forward-Biased Condition:** When the Zener diode is forward-biased, it behaves exactly like an ordinary p-n junction diode, allowing current to flow freely once the cut-in voltage (approx. $0.7\text{ V}$ for silicon) is exceeded.
2. **Reverse-Biased Condition:** When reverse-biased, a very small leakage current (reverse saturation current) flows due to thermally generated minority carriers. As the reverse voltage is increased and reaches a critical value known as the **Zener breakdown voltage** ($V_z$), the diode begins to conduct heavily. The reverse current increases sharply, but the voltage across the Zener terminals remains remarkably constant.

```jsxgraph
{"title":"Reverse-biased P\u2013N junction and depletion region","boundingBox":[0,10,10,0],"axis":false,"points":[{"id":"p1","x":1,"y":7,"show":false},{"id":"p2","x":4.8,"y":7,"show":false},{"id":"p3","x":4.8,"y":3,"show":false},{"id":"p4","x":1,"y":3,"show":false},{"id":"d1","x":4.8,"y":7,"show":false},{"id":"d2","x":5.2,"y":7,"show":false},{"id":"d3","x":5.2,"y":3,"show":false},{"id":"d4","x":4.8,"y":3,"show":false},{"id":"n1","x":5.2,"y":7,"show":false},{"id":"n2","x":9,"y":7,"show":false},{"id":"n3","x":9,"y":3,"show":false},{"id":"n4","x":5.2,"y":3,"show":false},{"id":"h1","x":2,"y":5.8},{"id":"h2","x":3.1,"y":4.3},{"id":"h3","x":2,"y":4.2},{"id":"e1","x":7,"y":5.8},{"id":"e2","x":8.1,"y":4.3},{"id":"e3","x":7,"y":4.2},{"id":"b1","x":4.55,"y":5.8},{"id":"b2","x":4.55,"y":4.2},{"id":"b3","x":5.45,"y":5.8},{"id":"b4","x":5.45,"y":4.2},{"id":"H1","x":2,"y":5.8,"show":false},{"id":"H2","x":3.1,"y":4.3,"show":false},{"id":"H3","x":2,"y":4.2,"show":false},{"id":"holeNear","x":4.2,"y":5,"show":false},{"id":"holeAway","x":2.8,"y":5,"show":false},{"id":"electronNear","x":5.8,"y":5,"show":false},{"id":"electronAway","x":7.2,"y":5,"show":false}],"polygons":[{"points":["p1","p2","p3","p4"],"fill":"#eff6ff","stroke":"#2563eb"},{"points":["d1","d2","d3","d4"],"fill":"#fef3c7","stroke":"#d97706"},{"points":["n1","n2","n3","n4"],"fill":"#f0fdf4","stroke":"#16a34a"}],"circles":[{"center":"H1","radius":0.23},{"center":"H2","radius":0.23},{"center":"H3","radius":0.23}],"polylines":[[[1,5],[1,1],[4.45,1]],[[4.45,0.65],[4.45,1.35]],[[4.85,0.45],[4.85,1.55]],[[4.85,1],[9,1],[9,5],[9,5]],[[9,1],[9,5]]],"arrows":[{"from":"holeNear","to":"holeAway"},{"from":"electronNear","to":"electronAway"}],"labels":[{"x":2.9,"y":8,"text":"P-type (anode)"},{"x":7.1,"y":8,"text":"N-type (cathode)"},{"x":5,"y":8.8,"text":"Wide depletion region"},{"x":2,"y":5.8,"text":"+"},{"x":3.1,"y":4.3,"text":"+"},{"x":2,"y":4.2,"text":"+"},{"x":7.1,"y":6.2,"text":"e\u207b"},{"x":8.1,"y":4.3,"text":"e\u207b"},{"x":7.1,"y":4.2,"text":"e\u207b"},{"x":4.55,"y":5.8,"text":"\u2212"},{"x":4.55,"y":4.2,"text":"\u2212"},{"x":5.45,"y":5.8,"text":"+"},{"x":5.45,"y":4.2,"text":"+"},{"x":4.4,"y":2.15,"text":"\u2212"},{"x":4.9,"y":2.15,"text":"+"},{"x":6.8,"y":1.5,"text":"Reverse-bias battery"},{"x":2.4,"y":3.3,"text":"Holes (+)"},{"x":7.7,"y":3.3,"text":"Electrons (\u2212)"}]}
```

Reverse Biasing

As the reverse voltage exceeds $V_z$, the strong electric field across the narrow depletion region exerts a force sufficient to break covalent bonds, liberating electrons. These free electrons move from the valence band of the p-type semiconductor to the conduction band of the n-type semiconductor, enabling substantial current flow under reverse bias.

### Key Characteristics of Zener Diodes
- A Zener diode is a properly doped p-n junction diode characterized by a sharp breakdown voltage.
- It is permanently operated in the reverse-biased condition for voltage regulation tasks.
- The sharp breakdown voltage is denoted as $V_z$.
- It is not immediately destroyed upon entering the breakdown region, provided the power dissipation remains within safe manufacturer limits.

### I-V Characteristics of a Zener Diode

```jsxgraph
{"title":"Qualitative Zener-diode I\u2013V characteristic (not to scale)","boundingBox":[-6,5,1.2,-4],"axis":true,"polylines":[[[-6,-3.8],[-5.6,-3.2],[-5.2,-1.8],[-5,-0.25],[-4,-0.16],[-2,-0.12],[0,0]],[[0,0],[0.35,0.04],[0.55,0.12],[0.68,0.45],[0.78,1.2],[0.88,3.2],[1,4.8]]],"points":[{"id":"vz","x":-5.2,"y":-1.8,"label":"\u2212Vz"},{"id":"vf","x":0.68,"y":0.45,"label":"Vf"}]}
```
I-V characteristics of a Zener diode

The current-voltage ($I$-$V$) characteristics curve is plotted with voltage along the horizontal axis and current along the vertical axis.
- In the **first quadrant (forward bias)**, the curve closely mimics a regular diode where current rises exponentially after the knee voltage.
- In the **third quadrant (reverse bias)**, only a negligible reverse saturation current flows until the magnitude of the reverse voltage reaches $V_z$. At this point, the curve drops vertically downward, showing a massive increase in reverse current for virtually no change in reverse voltage. This constant-voltage region is exploited for voltage regulation and wave-shaping applications.

**Applications of Zener Diode:**
1. Used as a voltage regulator to maintain a steady DC output voltage despite input supply fluctuations.
2. Used for over-voltage protection of sensitive electronic circuits.
3. Used in clipping and clamping circuits to shape waveforms.

---

### Comparison: p-n Junction Diode vs. Zener Diode

| Zener Diode | p-n Junction Diode |
| --- | --- |
| 1. Current can flow in both forward and reverse-biased conditions (during breakdown). | 1. Current is permitted to pass only in the forward-biased condition. |
| 2. Fabricated with heavy doping. | 2. Fabricated with low or moderate doping. |
| 3. Operating in reverse breakdown does not harm the diode. | 3. High reverse current can permanently damage or destroy the junction. |
| 4. Breakdown occurs at a lower, precisely controlled voltage. | 5. Breakdown occurs at a significantly higher, uncontrolled voltage. |
| 5. Does not follow Ohm's law in the breakdown region. | 5. Follows Ohm's law in its linear operating regions. |

---

### Comparison: Zener Breakdown vs. Avalanche Breakdown

| Property | Zener Breakdown | Avalanche Breakdown |
| :--- | :--- | :--- |
| **1. Breakdown Voltage ($V_z$)** | Observed in diodes with low breakdown voltages ($V_z < 5\text{ V}$). | Observed in diodes with higher breakdown voltages ($V_z > 8\text{ V}$). |
| **2. Physical Mechanism** | Valence electrons are pulled directly into the conduction band by the intense electric field. | Valence electrons are knocked into the conduction band by collision impact with thermally accelerated free carriers. |
| **3. Temperature Coefficient** | The breakdown voltage *decreases* as temperature increases. | The breakdown voltage *increases* as temperature increases. |
| **4. Sharpness of Curve** | The $I$-$V$ characteristic curve exhibits an extremely sharp knee. | The $I$-$V$ characteristic curve is less sharp and more rounded. |
| **5. Depletion Region** | Extremely thin depletion region ($\sim 10^{-6}\text{ cm}$). | Relatively thick depletion region. |
| **6. Doping Concentration** | Doping concentration is very high. | Doping concentration is low or moderate. |
| **7. Primary Cause** | High electric field across the junction. | Carrier collision and impact ionization. |
| **8. Carrier Generation** | Direct field-emission of electrons. | Generation of cumulative electron-hole pairs via impact. |

<!-- page 5 | Tunnel Diodes and Negative Resistance -->

## Tunnel Diodes and Negative Resistance

Building upon the heavy doping concepts explored in Zener diodes, extreme doping leads to quantum mechanical tunneling at very low forward voltages. This section covers the principles, VI characteristics, and applications of tunnel diodes.

### Introduction to Tunnel Diode

A tunnel diode is a heavily doped p-n junction diode that exhibits a negative resistance region in its forward-biased condition. Due to heavy doping, the depletion region becomes extremely thin (in the order of $10^{-8}\text{ m}$). This allows charge carriers to penetrate the potential barrier rather than surmount it, a quantum mechanical phenomenon known as tunneling.

```jsxgraph
{"title":"Tunnel diode symbol","boundingBox":[-4,2,4,-2],"axis":false,"points":[{"id":"a","x":-1,"y":0,"show":false},{"id":"t","x":1,"y":0,"show":false},{"id":"u","x":-1,"y":0.9,"show":false},{"id":"d","x":-1,"y":-0.9,"show":false},{"id":"l","x":-3.2,"y":0,"show":false},{"id":"r","x":3.2,"y":0,"show":false},{"id":"c1","x":1,"y":-0.9,"show":false},{"id":"c2","x":1,"y":0.9,"show":false},{"id":"c3","x":1.5,"y":1.2,"show":false},{"id":"c4","x":0.5,"y":-1.2,"show":false},{"id":"c5","x":1.4,"y":-0.9,"show":false},{"id":"c6","x":1.4,"y":0.9,"show":false}],"polygons":[{"points":["u","t","d"],"fill":"#1f2937","stroke":"#1f2937"}],"segments":[{"from":"l","to":"a"},{"from":"t","to":"r"},{"from":"c1","to":"c4"},{"from":"c2","to":"c3"},{"from":"c5","to":"c4"},{"from":"c6","to":"c3"},{"from":"c1","to":"c2"},{"from":"c5","to":"c6"}]}
```

Tunnel diode symbol. Circuit symbol for a tunnel diode, showing a standard diode symbol with a horizontal bar across the top of the cathode bar, and a vertical line through the center representing the leads, with the label "Tunnel diode Symbol" beside it.

### Working Principle and Tunnelling Effect

In a heavily doped p-n junction:
- There is a large concentration of majority carriers in both the p and n regions.
- The large number of carriers creates high drift activity, raising the energy levels of many valence electrons closer to the conduction band.
- Only a very small forward bias voltage is required to initiate conduction.
- The movement of valence electrons directly from the valence band to the conduction band with minimal forward bias is called **tunneling**.

### VI Characteristics of a Tunnel Diode

The current-voltage (VI) characteristics of a tunnel diode display distinct operational regions as the forward voltage is increased:

```jsxgraph
{"title":"Qualitative tunnel-diode I\u2013V characteristic (not to scale)","boundingBox":[0,1.05,1.15,0],"axis":true,"polylines":[[[0,0],[0.08,0.28],[0.16,0.56],[0.24,0.76],[0.3,0.82],[0.36,0.75],[0.44,0.58],[0.52,0.4],[0.6,0.34],[0.68,0.38],[0.78,0.52],[0.9,0.7],[1,0.86],[1.1,0.96]]],"points":[{"id":"peak","x":0.3,"y":0.82,"label":"Ip"},{"id":"valley","x":0.6,"y":0.34,"label":"Iv"}]}
```
VI characteristics graph of a tunnel diode. The vertical axis is labeled $I$ (current) and the horizontal axis is labeled $V$ (volts). The origin is labeled $O$. The curve starts at the origin, rises to a peak point $P$ with peak current $I_p$ and peak voltage $V_p$ on the x-axis. From point $P$, the curve decreases in a region labeled "Negative Resistance region" to a valley point.

1. **Forward Tunneling Region (Up to Peak Point $P$):** Initially, as the forward bias voltage increases, electrons from the n-region tunnel through the ultra-thin potential barrier to the p-region. The diode current increases rapidly until it reaches the **peak point $P$**, characterized by peak voltage $V_p$ and peak current $I_p$.

2. **Negative Resistance Region (Between Peak Point $P$ and Valley Point $V$):** When the voltage is increased beyond $V_p$, the quantum mechanical tunneling action abruptly decreases. Consequently, the diode current decreases as the forward voltage increases, defining the **negative resistance region** ($dV/dI < 0$). This continues until the **valley point**, characterized by valley voltage $V_v$ and valley current $I_v$.

3. **Normal Diode Region (Beyond Valley Point):** When the forward voltage is increased beyond the valley point voltage, the tunnel diode behaves like a standard p-n junction diode. The conventional diffusion current dominates, and current increases with increasing forward voltage, exhibiting positive resistance once again.

### Applications of Tunnel Diodes

1. **Ultra-High-Speed Switches:** Due to the near-instantaneous nature of quantum mechanical tunneling, tunnel diodes operate at extreme speeds.
2. **Oscillators:** The negative resistance region allows the device to compensate for circuit losses, making it ideal for high-frequency relaxation oscillators.
3. **Logic Memory Storage Devices:** Utilized in fast digital switching and storage applications.
4. **Satellite Communication:** Employed in high-frequency microwave amplifiers and communication circuits.

<!-- page 6 | Photodetectors: Junction and PIN Photodiodes -->

## Photodetectors: Junction and PIN Photodiodes

Transitioning from internal diode voltage manipulation, we now examine devices that interact with external optical light signals. Photodetectors are essential components at the receiving end of optical communication links, designed to convert incoming light signals into readable electrical voltages or currents.

### 1. Fundamentals of Photonics and Photodetectors

**Photonics** is the branch of science and technology that deals with the generation, control, and detection of photons, combining optics, electromagnetism, and quantum mechanics.

A **photodetector** requires the following key operational characteristics:
- High sensitivity to optical inputs
- High reliability and stability
- Short response time (high switching speed)
- Low bias voltage operation
- High electrical response

Common examples include photodiodes and phototransistors. The standard circuit symbol for a photodiode features a conventional diode symbol enclosed in a circle with two arrows pointing *towards* the device, indicating incident light.

```jsxgraph
{"title":"Photodiode symbol","boundingBox":[-4,2,4,-2],"axis":false,"points":[{"id":"a","x":-1,"y":0,"show":false},{"id":"t","x":1,"y":0,"show":false},{"id":"u","x":-1,"y":0.9,"show":false},{"id":"d","x":-1,"y":-0.9,"show":false},{"id":"l","x":-3.2,"y":0,"show":false},{"id":"r","x":3.2,"y":0,"show":false},{"id":"c1","x":1,"y":-0.9,"show":false},{"id":"c2","x":1,"y":0.9,"show":false},{"id":"c3","x":1.5,"y":1.2,"show":false},{"id":"c4","x":0.5,"y":-1.2,"show":false},{"id":"la","x":2,"y":1.6,"show":false},{"id":"lb","x":0.7,"y":0.6,"show":false},{"id":"ra","x":2,"y":1.1,"show":false},{"id":"rb","x":0.7,"y":0.1,"show":false}],"polygons":[{"points":["u","t","d"],"fill":"#1f2937","stroke":"#1f2937"}],"segments":[{"from":"l","to":"a"},{"from":"t","to":"r"},{"from":"c1","to":"c2"}],"arrows":[{"from":"la","to":"lb"},{"from":"ra","to":"rb"}]}
```

### 2. Junction Photodiode

A junction photodiode is a reverse-biased p-n junction embedded in a clear plastic medium where the current varies linearly with incident light flux.

#### Construction and Working Principle

![Construction diagram of a junction photodiode](/assets/notes/ece/s1/physics/module-2/p028-1-clean.webp)

The junction photodiode is formed by diffusing a lightly doped p-region into a heavily doped n-region. The front surface contains an active area coated with an anti-reflection coating to maximize light entry, while the remaining non-active area is coated with a thick layer of silicon dioxide ($\text{SiO}_2$). Adjusting the non-active thickness helps tailor the spectral response and speed.

When connected in a **reverse-biased** configuration with a low reverse voltage, a small constant current flows through the device even in complete darkness. This is the **dark current** (or leakage current), caused by thermally generated minority carriers (electrons in the p-type, holes in the n-type) swept across the depletion region by the electric field:

$$I_{\text{dark}} = I_s$$

Where:
- $I_{\text{dark}}$ = Dark current (A)
- $I_s$ = Reverse saturation current (A)

When photons of sufficient energy ($h\nu \ge E_g$) are absorbed by the semiconductor materials, valence band electrons are excited into the conduction band, generating electron-hole pairs called **photocarriers**. Under the reverse bias field, these sweep across the junction to create a **photocurrent** ($I_{\text{photo}}$) that adds directly to the dark current in the external circuit:

$$I_{\text{total}} = I_{\text{dark}} + I_{\text{photo}}$$

To maximize sensitivity, the dark current must be minimized, and the depletion region width optimized to absorb maximum optical power.

### 3. PIN Photodiode

To overcome the speed and absorption limitations of standard p-n junction photodiodes, the **PIN photodiode** inserts a wide, lightly-doped intrinsic (I) region between heavily doped p-type and n-type semiconductor layers.

![Structure of a PIN Diode](/assets/notes/ece/s1/physics/module-2/p033-1-clean.webp)

#### Construction and Performance Advantage

- **p-region and n-region**: Heavily doped layers to provide ohmic contacts.
- **Intrinsic (I) region**: A thick, undoped semiconductor layer sandwiched between p and n regions.

When a reverse bias voltage is applied, the depletion region expands completely across the entire intrinsic region. Because the intrinsic layer is much wider than a normal depletion width, it absorbs a significantly larger fraction of incoming photons deep within the space charge region.

$$\text{Total Photon Absorption Efficiency } (\eta) \propto \text{Width of Intrinsic Layer } (W_i)$$

This broad space charge region results in:
1. **Higher Quantum Efficiency**: More electron-hole pairs generated per incident photon.
2. **Faster Response Time**: High electric field across the intrinsic region sweeps carriers out rapidly, reducing transit time.
3. **Lower Junction Capacitance**: Wide separation between p and n plates ($C = \frac{\varepsilon A}{W}$) cuts capacitance, enabling high-frequency microwave and gigabit optical fiber communications.

### Applications of junction and PIN photodiodes

- **Optical communication receivers:** convert modulated light from an optical fiber into current for a receiver circuit; PIN photodiodes are useful when fast response is needed.
- **Light meters and camera exposure control:** measure incident illumination.
- **Smoke detectors:** detect light scattered by smoke particles in an optical chamber.
- **Barcode scanners and optical encoders:** sense reflected or interrupted light to recover patterns or position.
- **Medical and industrial instruments:** detect light in optical measurement systems, including pulse-oximetry sensors and non-contact counters.

The detector, optical geometry, amplifier, and signal-processing circuit are chosen together for the wavelength, light level, speed, and noise requirements.

<!-- page 7 | Solar Cells and Panel Stringing -->

## Solar Cells and Panel Stringing

Solar cells are solid-state semiconductor devices that directly convert solar radiation into electrical energy through the photovoltaic effect. Unlike conventional photodiodes that operate under a reverse bias voltage to detect light signals, solar cells operate under zero external bias as large-area junctions designed for power generation.

### Construction and Photovoltaic Principle

A solar cell consists of a heavily doped p-n junction with a large surface area to maximize light absorption. The top n-type layer is made extremely thin so that incident photons can easily penetrate the depletion region. An antireflection coating is applied on the topmost surface to minimize optical reflection losses, accompanied by metallic grid contacts to collect the generated charge carriers without blocking incoming sunlight. The bottom contact covers the p-type layer.

![Solar cell diagram](/assets/notes/ece/s1/physics/module-2/p035-1-clean.webp)

When sunlight strikes the semiconductor wafer, photons with energy greater than or equal to the band gap energy ($h\nu \ge E_g$) excite valence band electrons into the conduction band, creating electron-hole pairs. The built-in electric field of the p-n junction sweeps the photogenerated electrons toward the n-type region and holes toward the p-type region. When an external load is connected, these charge carriers flow through the circuit, generating a usable electric current.

![Circuit diagram of a solar cell with voltmeter, ammeter, and load resistance](/assets/notes/ece/s1/physics/module-2/p036-1-clean.webp)

### I-V Characteristics and Power Output
The electrical performance of a solar cell is evaluated using its current-voltage ($I$-$V$) characteristics curve.

```jsxgraph
{"title":"Normalized solar-cell current versus voltage","boundingBox":[-0.05,1.1,1.08,-0.08],"axis":true,"polylines":[[[0,1],[0.15,0.995],[0.3,0.98],[0.45,0.94],[0.6,0.83],[0.72,0.58],[0.82,0.28],[0.9,0.08],[1,0]]],"points":[{"id":"isc","x":0,"y":1,"label":"Isc"},{"id":"voc","x":1,"y":0,"label":"Voc"},{"id":"mpp","x":0.6,"y":0.83,"label":"Im"}]}
```

```jsxgraph
{"title":"Normalized solar-cell power versus voltage","boundingBox":[-0.05,0.58,1.08,-0.05],"axis":true,"polylines":[[[0,0],[0.15,0.149],[0.3,0.294],[0.45,0.423],[0.6,0.498],[0.72,0.418],[0.82,0.23],[0.9,0.072],[1,0]]],"points":[{"id":"pmax","x":0.6,"y":0.498,"label":"Pmax"}]}
```

Horizontal axes are voltage normalized by Voc; vertical axes are current normalized by Isc and power normalized by Pmax, respectively. Curves are schematic.
Key parameters derived from the $I$-$V$ curve include:
1. **Short-Circuit Current ($I_{sc}$):** The maximum current produced by the solar cell when the output terminals are shorted ($V = 0$).
2. **Open-Circuit Voltage ($V_{oc}$):** The maximum voltage available from the solar cell when the terminals are open ($I = 0$). A typical single silicon solar cell produces an open-circuit voltage of approximately $0.6\text{ V}$.
3. **Maximum Power Point ($P_{\text{max}}$):** The operating point on the $I$-$V$ curve where the product of voltage and current reaches its maximum value ($P_{\text{max}} = V_{\text{max}} \times I_{\text{max}}$). The load resistance must be chosen precisely to match this operating condition.

### Efficiency and Fill Factor
The conversion efficiency ($\eta$) of a solar cell is defined as the ratio of maximum electric power output to the total incident optical power from the sun:
$$\eta = \frac{P_{\text{max}}}{\text{light intensity} \times \text{area of the solar cell}}$$

The **Fill Factor ($f$)** measures the squareness of the $I$-$V$ curve and represents the fraction of the theoretical maximum power ($V_{oc} \times I_{sc}$) actually delivered at the maximum power point:
$$f = \frac{P_{\text{max}}}{V_{oc} \times I_{sc}} = \frac{V_{\text{max}} \times I_{\text{max}}}{V_{oc} \times I_{sc}}$$
Typical high-performance solar cells possess a fill factor ranging between $0.65$ and $0.80$.

### Series and Parallel Solar Panel Stringing
To scale up the voltage or current to practical levels, multiple solar cells are interconnected to form solar panels.

#### Series Stringing
Connecting the positive terminal of one solar cell to the negative terminal of the next increases the total output voltage while keeping the current constant. For $N$ identical cells connected in series, the total open-circuit voltage is multiplied by $N$:
$$V_{oc(\text{total})} = N \times V_{oc}$$
$$I_{sc(\text{total})} = I_{sc}$$

| Four identical cells in series | Total open-circuit voltage | Short-circuit current |
| --- | --- | --- |
| Each cell: $V_{oc}=0.6\,\mathrm{V}$ | $4V_{oc}=2.4\,\mathrm{V}$ | $I_{sc}$ |
#### Parallel Stringing
Connecting all positive terminals together and all negative terminals together maintains a constant voltage output while scaling up the total current linearly with the number of cells:
$$V_{oc(\text{total})} = V_{oc}$$
$$I_{sc(\text{total})} = N \times I_{sc}$$

| Four identical cells in parallel | Total open-circuit voltage | Short-circuit current |
| --- | --- | --- |
| Each cell: $V_{oc}=0.6\,\mathrm{V}$ | $V_{oc}=0.6\,\mathrm{V}$ | $4I_{sc}$ |
```jsxgraph
{"title":"Four-cell series string: current versus voltage","boundingBox":[-0.08,3.5,2.55,-0.2],"axis":true,"polylines":[[[0,3],[0.6,3],[1.2,3],[1.8,2.95],[2.1,2.7],[2.3,1.9],[2.4,0]]],"points":[{"id":"isc","x":0,"y":3,"label":"Isc"},{"id":"voc","x":2.4,"y":0,"label":"4Voc"}]}
```

```jsxgraph
{"title":"Four-cell parallel array: current versus voltage","boundingBox":[-0.04,13,0.7,-0.5],"axis":true,"polylines":[[[0,12],[0.15,12],[0.3,11.9],[0.42,11.6],[0.5,10],[0.55,7.2],[0.6,0]]],"points":[{"id":"isc","x":0,"y":12,"label":"4Isc"},{"id":"voc","x":0.6,"y":0,"label":"Voc"}]}
```

Curves are schematic. For four identical cells, series connection multiplies voltage by four; parallel connection multiplies current by four.
<!-- page 8 | Light Emitting Diodes (LEDs) -->

## Light Emitting Diodes (LEDs)

### Introduction and Working Principle

A Light Emitting Diode (LED) is a heavily doped p-n junction diode that emits spontaneous radiation when it is forward-biased. While conventional diodes convert electrical energy into heat and standard reverse-biased photodiodes convert light into electrical energy, an LED performs the direct reverse of a photodiode: it converts electrical energy directly into optical radiation through a process called **electroluminescence**.

When the p-n junction is forward-biased by an external DC voltage source, the potential barrier at the junction is significantly reduced. This allows electrons from the n-region to cross over into the p-region, and holes from the p-region to cross over into the n-region. As these minority carriers drift across the junction, they recombine with majority carriers. During this electron-hole recombination event, the relaxing electrons fall from the conduction band to the valence band, releasing their excess energy. In direct band gap semiconductors, this energy is released primarily in the form of photons (light quanta) rather than heat.

![LED structure and circuit symbol](/assets/notes/ece/s1/physics/module-2/p045-1-clean.webp)


### Band Gap Energy and Emitted Wavelength

The energy of the emitted photon is determined directly by the forbidden band gap energy ($E_g$) of the semiconductor material used to fabricate the junction. The relationship governing the wavelength of the emitted light is given by:

$$\lambda = \frac{hc}{E_g}$$

Where:
- $\lambda$ = Wavelength of the emitted light (m)
- $h$ = Planck's constant $\approx 6.626 \times 10^{-34}\text{ J}\cdot\text{s}$
- $c$ = Velocity of light in free space $\approx 3\times 10^8\text{ m/s}$
- $E_g$ = Semiconductor band gap energy (J or eV)

By varying the chemical composition and doping ratios of ternary or quaternary semiconductor alloys, manufacturers can precisely engineer the band gap $E_g$, thereby controlling the exact colour of the emitted radiation:
1. **Gallium Arsenide (GaAs)** with $E_g \approx 1.45\text{ eV}$ emits invisible infrared radiation.
2. **Gallium Arsenide Phosphide (GaAsP)** with $E_g \approx 3\text{ eV}$ emits yellow-red visible radiation.
3. **Gallium Phosphide (GaP)** with $E_g \approx 2.25\text{ eV}$ emits green radiation.

### Important Features and Characteristics
- **Point Source:** LEDs act effectively as point sources of light, making them easy to focus and align.
- **Current Dependency:** The light output intensity is a direct function of the forward current flowing through the device. Intensity increases with current until it reaches an optimal maximum before thermal roll-off occurs.
- **Switching Speed:** Extremely fast response times, typically around $10\text{ ns}$.
- **Modifiability:** The emission wavelength can be tailored by adjusting component percentages during crystal growth.

### Applications
- Light sources in high-speed optical fiber communication systems.
- General illumination bulbs for domestic and industrial spaces.
- Status and message displays in mobile phones and digital consumer electronics.
- Outdoor traffic light signaling systems.
- Automotive lighting inside and outside motorcycles and cars.

### Advantages
- Significant energy savings and high electrical-to-optical conversion efficiency.
- Low capital and operational costs.
- Low operating voltage and current requirements.
- Low total power output, generally under $150\text{ mW}$.
- Very rapid response time ($\sim 10\text{ ns}$) with zero warm-up time or heating delay.
- Miniature physical size, highly compact and lightweight.
- Exceptionally long operating lifespan exceeding 10 years.
- Mechanically rugged construction capable of withstanding severe physical shock and mechanical vibrations.

### Disadvantages
- Highly sensitive to electrical overstress; even a slight unintended excess in forward voltage or driving current can permanently destroy the device.
- Optical conversion efficiency decreases as the operating forward current increases due to internal heating effects.
