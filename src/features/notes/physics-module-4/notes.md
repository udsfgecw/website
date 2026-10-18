<!-- page 1 | Notes -->

[Non-content page]

---

<!-- page 2 | 1 Rectifiers -->

Dr. Raghu O | Dept. of Physics | GEC Thrissur

Semiconductor devices

KTU syllabus - Semiconductor devices- Rectifiers- Full wave and Half wave. Zener diode- VI characteristics, Tunnel diode-VI characteristics, Semiconductor Laser (Construction and working), Applications Photonic devices (Qualitative treatment only) - Photo detectors (Junction and PIN photodiodes), Solar cells- IV Characteristics, Efficiency, Stringing of Solar cells to solar panel, Light Emitting Diode, Applications

1 Rectifiers

A rectifier is an electronic circuit that converts an input AC voltage into a DC voltage at the output terminal. A p-n junction diode is a device that allows current to flow when it is forward biased and blocks current when reverse biased. We can make half wave rectifiers and full wave rectifiers using p-n junction diodes

1.1 Half wave rectifier
* The simplest type of rectifier.
* Uses a single diode
* During the +ve half cycle of the input voltage the diode is forward biased and hence conducts current
* During the -ve half cycle of the input voltage the diode is reverse biased and hence blocks current

![Half wave rectifier circuit diagram with a transformer, a crystal diode, and a load resistor](/notes/cse/s1/physics/module-4/half-wave-circuit.webp)

---

<!-- page 3 | 1 Rectifiers (cont.) -->

![Input and output waveforms of a rectifier showing V_in and V_out against time t](/notes/cse/s1/physics/module-4/half-wave-waveforms.webp)

Current flows through the load $R_L$ always in the same direction. Hence, it is direct current(dc). The magnitude of this dc is not constant, but varies with time.(pulsating dc)

Rectifier efficiency
$$
\eta = \frac{\text{DC output power}}{\text{AC input power}}
$$

Let $v = V_m \sin \omega t$ be the alternating voltage applied across the diode at any instant $t$. We assume that $r_f$ is the diode forward resistance and $R_L$ is the load resistance.

$$
\begin{aligned}
\text{Average DC output power}\quad P_{\text{dc}} &= I_{\text{dc}}^2 R_L \\
\text{Average AC input power}\quad P_{\text{ac}} &= I_{\text{rms}}^2 (r_f + R_L)
\end{aligned}
$$

$$
\text{Therefore, } \eta = \frac{I_{\text{dc}}^2 R_L}{I_{\text{rms}}^2 (r_f + R_L)}
$$

**To find average DC current over one cycle $I_{\text{dc}}$**

Let the instantaneous output current of the rectifier be $i = I_m \sin \omega t$ for $t = 0$ to $t = \frac{T}{2}$ and i=0 for $t = \frac{T}{2}$ to $t = T$; where T is the period of input ac. Here, $I_m$ is the maximum value of current.

$$
\begin{aligned}
I_{\text{dc}} &= \frac{\text{Total current over one output cycle}}{\text{Total time of one cycle}} \\
&= \frac{1}{T} \left[ \int_{0}^{\frac{T}{2}} I_m \sin \omega t \, dt + \int_{\frac{T}{2}}^{T} 0 \, dt \right] \\
&= \frac{I_m}{T} \left[ \frac{-\cos \omega t}{\omega} \right]_{0}^{\frac{T}{2}} = \frac{-I_m}{\omega T} [\cos \pi - \cos 0] = \frac{2I_m}{2\pi} = \frac{I_m}{\pi}
\end{aligned}
$$

**To find rms AC current over one cycle $I_{\text{rms}}$**

The instantaneous input current to the rectifier is $i = I_m \sin \omega t$ for $t = 0$ to $t = \frac{T}{2}$ and i=0 for $t = \frac{T}{2}$ to $t = T$; where $T$ is the period of input ac. RMS

---

<!-- page 4 | Efficiency calculation -->

value is the square root of mean of squares of instantaneous values of current.

$$
I_{\text{rms}}^2 = \frac{1}{T} \left[ \int_0^{\frac{T}{2}} i^2 dt + \int_{\frac{T}{2}}^T 0 dt \right]
$$

$$
= \frac{1}{T} \left[ \int_0^{\frac{T}{2}} I_m^2 \sin^2 \omega t dt \right]
$$

$$
= \frac{I_m^2}{T} \int_0^{\frac{T}{2}} \left[ \frac{1 - \cos 2\omega t}{2} \right] dt = \frac{I_m^2}{2T} \left[ \int_0^{\frac{T}{2}} dt - \int_0^{\frac{T}{2}} \cos 2\omega t dt \right] = \frac{I_m^2}{2T} \left[ \frac{T}{2} - 0 \right] = \frac{I_m^2}{4}
$$

Therefore, $I_{\text{rms}} = \frac{I_m}{2}$

### Efficiency calculation

$$
\eta = \frac{I_{\text{dc}}^2 R_L}{I_{\text{rms}}^2 (r_f + R_L)}
$$

$$
= \frac{(\frac{I_m}{\pi})^2 R_L}{(\frac{I_m}{2})^2 (r_f + R_L)}
$$

$$
= \left(\frac{4}{\pi^2}\right) \frac{R_L}{R_L (1 + \frac{r_f}{R_L})}
$$

Efficiency of the half wave rectifier,

$$
\eta = \frac{0.406}{1 + \frac{r_f}{R_L}}
$$

When $r_f \ll R_L$, $\eta = 40.6\%$-maximum

**Peak inverse voltage (PIV)** - It is the maximum reverse voltage present across the diode during negative half cycle of applied ac voltage is $V_{sm}$ which is maximum secondary voltage across the centre tap and one end.

**Ripple factor** - It is found that the output of a rectifier is pulsating i.e., the output is not pure dc. It contains some ac components also. The ac components present in the output of a rectifier is called ripple. The smaller the ripple, the better is the rectifier.

Ripple factor $\gamma = \sqrt{\frac{I_{\text{rms}}^2}{I_{\text{dc}}^2} - 1}$

Substituting the values for half wave rectifier we get $\gamma = 1.21$

### Advantages and disadvantages of half wave rectifier

#### Advantages

1. Only one diode is required
2. Cost is low

#### Disadvantages

1. Efficiency is low

---

<!-- page 5 | 1.2 Full wave rectifier using centre tapped transformer -->

2. Ripple factor is high
3. Output current is intermittent

1.2 Full wave rectifier using centre tapped transformer

![Circuit diagram of a full wave rectifier using a centre-tapped transformer](/notes/cse/s1/physics/module-4/centre-tap-circuit.webp)


Working

When AC supply is switched ON, the alternating voltage, $V_{\text{in}}$ appears across the terminals AB of the secondary winding of the transformer.

During the positive half cycle of the secondary voltage, end A becomes positive, and end B becomes negative. Then the diode D1 becomes forward biased and diode D2 becomes reverse biased. When the diode D1 is conducting, the current flows through the diode D1 load resistor $R_L$ (from M to L in the fig.) and the upper half of the secondary winding as shown.

During the negative half-cycle, the end B becomes positive, and end A becomes negative. This makes the diode D2 forward biased, and diode D1 reverse biased. Then diode D2 conducts while the diode D1 does not. The current flows through the diode D2, load resistor $R_L$ (from M to L) and the lower half of the secondary winding as shown.

The current flowing through the load resistor $R_L$ is in the same direction during the positive as well as the negative half cycle of the input. Hence, it is DC. The DC output voltage is obtained across the load resistor.

---

<!-- page 6 | 1.2 Full wave rectifier using centre tapped transformer (cont.) -->

Waveforms

![Waveforms of a full wave rectifier showing input voltage, current through RL with diode conduction intervals, and output voltage across RL](/notes/cse/s1/physics/module-4/full-wave-waveforms.webp)


Efficiency of a full wave rectifier

Rectifier efficiency,
$$
\eta = \frac{DC \text{ output power}}{AC \text{ input power}}
$$

Let $v = V_m \sin \omega t$ be the alternating voltage applied across the diode at any instant $t$. We assume that $r_f$ is the diode forward resistance and $R_L$ is the load resistance.

$$
\text{Average DC output power} \quad P_{dc} = I_{dc}^2 R_L
$$
$$
\text{Average AC input power} \quad P_{ac} = I_{rms}^2 (r_f + R_L)
$$
$$
\text{Therefore,} \quad \eta = \frac{I_{dc}^2 R_L}{I_{rms}^2 (r_f + R_L)}
$$

**To find average DC over one cycle $I_{dc}$**

In a full wave rectifier one of the diodes conducts in positive half cycle and remains cut off in the negative half cycle. The second diode conducts in the negative half cycle and remains cut off in the positive half cycle. Both these currents are in the same direction. Hence total current over one cycle, is the sum of both these currents or it is twice the current over one half cycle.

Let the instantaneous output current of the rectifier be $i = I_m \sin \omega t$. Let T be the period of input ac. Here, $I_m$ is the maximum value of current.

$$
I_{dc} = \frac{\text{Total current over one output cycle}}{\text{Total time of one cycle}}
$$
$$
= \frac{1}{T} \left[ 2 \int_{0}^{\frac{T}{2}} I_m \sin \omega t \, dt \right]
$$
$$
= \frac{2I_m}{T} \left[ \frac{-\cos \omega t}{\omega} \right]_{0}^{\frac{T}{2}} = \frac{-2I_m}{\omega T} [\cos \pi - \cos 0] = \frac{4I_m}{2\pi} = \frac{2I_m}{\pi}
$$

---

<!-- page 7 | 1.2 Full wave rectifier using centre tapped transformer (cont.) -->

To find rms AC current over one cycle $I_{\text{rms}}$

The instantaneous current is $i = I_m \sin \omega t$ for $t = 0$ to $T/2$ (diode D1) and $i = I_m \sin \omega (t - T/2)$ for $t = T/2$ to $T$ (diode D2), so $i^2$ repeats every half cycle. Hence

$$
I_{\text{rms}}^2 = \frac{1}{T}\int_0^T i^2\,dt = \frac{2}{T}\int_0^{T/2} I_m^2 \sin^2 \omega t\,dt = \frac{2 I_m^2}{T}\cdot\frac{T}{4} = \frac{I_m^2}{2}
$$

$$
I_{\text{rms}} = \frac{I_m}{\sqrt{2}}
$$

Efficiency of the centre-tapped full wave rectifier

$$
\eta = \frac{I_{\text{dc}}^2 R_L}{I_{\text{rms}}^2 (r_f + R_L)} = \frac{\left(\frac{2I_m}{\pi}\right)^2 R_L}{\frac{I_m^2}{2}(r_f + R_L)} = \frac{8}{\pi^2}\,\frac{R_L}{r_f + R_L} = \frac{0.812}{1 + \frac{r_f}{R_L}}
$$

When $r_f \ll R_L$, $\eta = 81.2\%$ - maximum.

Peak inverse voltage (PIV) of each diode: $2V_m$, where $V_m$ is the maximum voltage across half of the secondary winding.

Ripple factor

$$
\gamma = \sqrt{\frac{I_{\text{rms}}^2}{I_{\text{dc}}^2} - 1} = \sqrt{\frac{\pi^2}{8} - 1} = 0.48
$$

---

<!-- page 8 | 1.3 Full wave bridge rectifier -->

1.3 Full wave bridge rectifier

![Full wave bridge rectifier circuit diagram](/notes/cse/s1/physics/module-4/bridge-circuit.webp)


### Working

* When an AC supply is switched ON, the alternating voltage $V_{in}$ appears across the terminals AB of the secondary of the transformer. During the positive half cycle of this, end A becomes positive, and end B becomes negative
* Then the diodes D1 and D3 are forward biased and the diodes D2 and D4 are reversed biased. Therefore, diode D1 and D3 conduct, and diode D2 and D4 do not conduct. The current flows through diode D1, load resistor $R_L$ (from M to L), diode D3, and the transformer secondary.
* During the negative half-cycle, end A becomes negative and end B positive. Then the diodes D2 and D4 are in forward bias and the diodes D1 and D3 are reverse bias. Therefore, diode D2 and D4 conduct, while diodes D1 and D3 do not conduct. Thus, current flows through the diode D2, load resistor $R_L$ (from M to L), diode D4, and the transformer secondary.
* The current flows through the load resistor $R_L$ in the same direction (M to L) during both the half cycles. Hence, a DC output voltage is obtained across the load resistor.

### Waveforms

---

<!-- page 9 | 1.3 Full wave bridge rectifier (cont.) -->

![Waveforms for bridge rectifier showing input voltage, current through RL, and output voltage across RL](/notes/cse/s1/physics/module-4/bridge-waveforms.webp)


Efficiency, PIV and ripple factor of bridge rectifier

Efficiency $\eta = \frac{0.812}{1 + \frac{2r_f}{R_L}}$

When $r_f \ll R_L$, $\eta = 81.2\%$-maximum

Peak inverse voltage $= V_m$ the maximum secondary voltage

Ripple factor $\gamma = \sqrt{\frac{I_{\text{rms}}^2}{I_{\text{dc}}^2} - 1} = 0.48$

Advantages and disadvantages of bridge type over centre tapped full wave rectifier

Advantages

1. No centre tap is required on the transformer

2. Much smaller transformers are used

3. It can be used for high voltage applications

4. It has low PIV rating per diode

5. For the same secondary voltage, the output voltage is twice that of the centre tapped full wave rectifier.

Disadvantages

1. Two extra diodes are required

2. Voltage regulation is not satisfactory

Advantages of full wave over half wave rectifier

Advantages

1. Efficiency is high (about 81.2%)

2. Ripple factor is low (0.48)

3. Output current is continuous but pulsating

---

<!-- page 10 | 2 Zener diode -->

Disadvantages
1. Requires two or four diodes
2. Cost is comparatively high

2 Zener diode

2.1 Breakdown mechanism in p-n junction diodes

Avalanche breakdown
- This occurs in p-n junctions with lightly or moderately doped semiconductors.
- The width of the depletion region is more for a lightly doped material compared to that of a heavily doped material.
- When a reverse voltage is applied across a p-n junction, the minority carriers are accelerated across the depletion region by the electric field.
- As these minority carriers gain speed, they acquire enough kinetic energy to knock other electrons out of their bonds, creating more electron-hole pairs.
- These newly created electron-hole pairs are also accelerated, leading to further collisions and the generation of more pairs, creating a chain reaction or "avalanche" effect.
- This rapid multiplication of charge carriers results in a sudden and significant increase in reverse current, leading to avalanche breakdown.
- It can damage the diode, if not controlled.
- Higher temperatures can increase the number of charge carriers, potentially lowering the breakdown voltage.
- Used in high-voltage protection circuits

Zener breakdown
- This occurs in p-n junctions with heavily doped semiconductors.
- The depletion region is very thin in heavily doped materials.
- Due to a strong electric field, electrons tunnel through the depletion region, causing a sudden increase in current (quantum tunneling effect).
- Does not get damaged even if it enters the breakdown region.
- Breakdown voltage decreases with temperature - a negative temperature coefficient.
- Used in voltage regulation and reference circuits.

---

<!-- page 11 | 2.2 Zener diode -->

2.2 Zener diode

Zener diode is a heavily doped p-n Junction diode, designed to operate in the reverse breakdown region. The breakdown voltage of a zener diode is set by controlling the doping level during the manufacturing process. The symbol of a standard diode is shown below.

![Zener diode schematic symbol and physical package representation](/notes/cse/s1/physics/module-4/zener-symbol.webp)


2.3 V-I characteristics of a zener diode

![V-I characteristics curve of a Zener diode](/notes/cse/s1/physics/module-4/zener-vi-characteristic.webp)


The forward bias characteristics of zener diode is similar to normal p-n junction diode. When it is reverse biased, a small reverse saturation current flows across the diode.

When the reverse bias is gradually increased, at a certain value of voltage, the reverse current increases sharply. This voltage is called zener breakdown voltage.($V_z$)

Zener diode maintains a constant voltage across its terminals when reverse bias voltage exceeds the breakdown voltage. The maximum zener current ($I_{Z_{max}}$) is the maximum reverse current that can flow in a zener diode without exceeding the power dissipation rating specified by the manufacturer.

2.4 Zener diode as a voltage regulator

In a regulated power supply output voltage is constant, irrespective of the variation of input supply voltage and load resistance.

---

<!-- page 12 | 3 Tunnel diode -->

![Zener diode voltage regulator circuit](/notes/cse/s1/physics/module-4/zener-regulator.webp)


Zener diode can be used as a voltage regulator. The unregulated DC is applied across the diode through a series resistance $R_s$. The zener diode is connected parallel to load $R_L$.

When the zener diode is operated in the breakdown region, the voltage across it remains constant for a large change of current through it. If the input voltage $V_i$ is greater than the Zener voltage $V_z$, the zener diode operates in the breakdown region and maintains constant voltage across the load. The series resistance $R_s$, limits the input current.

### 3 Tunnel diode

Tunnel Diode (also known as Esaki diode) is a heavily doped p-n junction diode.

> **Figure: Tunnel diode circuit symbol**
>
> Circuit symbol of a tunnel diode with p and n terminals, where the cathode bar has bent ends.

It works on the principle of quantum mechanical tunneling. Unlike regular diodes, a tunnel diode has a very narrow depletion region due to heavy doping.

When a small forward voltage is applied, electrons from the conduction band of the n-side tunnel through the depletion region to the valence band of the p-side, instead of overcoming the potential barrier. As the voltage increases, the tunneling effect first increases, leading to a peak current.

With further increase in voltage, tunneling reduces (because available states for electrons to tunnel into, decrease), and the current decreases, creating a negative resistance region. Beyond a certain voltage, normal diode conduction takes over, and the current starts increasing again.

### Energy band diagram of normal diode and tunnel diode

---

<!-- page 13 | 4 Light emitting diode -->

![Energy band diagrams of a PN Junction Diode and a Tunnel Diode](/notes/cse/s1/physics/module-4/tunnel-diode-bands.webp)


V-I characteristics of Tunnel diode

![V-I characteristics curve of a Tunnel diode](/notes/cse/s1/physics/module-4/tunnel-diode-vi.webp)


Applications of Tunnel diode

* High-frequency oscillators (GHz range)
* Microwave amplifiers
* High-speed switching circuits
* Radar and communication systems
* Used as logic memory or storage device

4 Light emitting diode

A light emitting diode is a semiconductor diode that gives out light when it is forward biased.

When a p-n junction is forward biased, free electrons cross from the n-region and recombine with the holes in the p-region. Free electrons are in the conduction band of energy levels, while holes are in the valence energy band. Thus, the energy level of the holes is lower than that of the electrons. Hence, when electrons and the holes recombine, energy is released. This energy is emitted in the form of heat and light.

---

<!-- page 14 | 5 Photo-detectors -->

![LED working principle diagram showing p-type and n-type semiconductor junction with electron-hole recombination emitting light and the corresponding energy band diagram](/notes/cse/s1/physics/module-4/led-working.webp)


The electrons dissipate energy in the form of heat for silicon and germanium diodes. In materials like Gallium Arsenide Phosphide (GaAsP), Gallium Phosphide (GaP) etc. the electrons dissipate energy by emitting photons of visible light. If the semiconductor is translucent, the junction becomes the source of light - thus becoming a light-emitting diode.

The wavelength of the light emitted, and thus its colour, depends on the energy gap between the conduction and valance bands of the materials forming the p-n junction.

$$
\lambda = \frac{hc}{E_g} = \frac{1.24}{E_g (\text{in } \text{eV})} \mu\text{m}
$$

where Eg is the band gap energy, h is the Planck's constant and c is the velocity of light.

Gallium Arsenide (GaAs) produces infrared light, Gallium Arsenide Phosphide (GaAsP) produces red light, Gallium Phosphide (GaP) produces green light etc.

[In silicon or germanium diodes, the electrons and holes usually recombine by a non-radiative transition, which produces no optical emission, because these are indirect band gap materials. The materials used for the LED have a direct band gap with energies corresponding to near-infrared, visible, or near ultraviolet light.]

## 5 Photo-detectors

Photo-detectors are devices which convert incident light power into electrical power. They should have the following properties

1. Photo-detector should exhibit wide bandwidth - i.e., they should be able to detect light of a wide range of frequencies.
2. Low response time
3. It should exhibit sharp response to accommodate high bit rate.

---

<!-- page 15 | 5 Photo-detectors (cont.) -->

4. Long operating life.

5. Low cost

6. Small size

7. High degree of temperature tolerance.

8. High sensitivity

5.1 p-n junction photodiode

These are essentially the same as p-n junction diodes. During the fabrication of a p-n diode, a depletion layer forms at the junction region by immobile negatively charged acceptor ions in the p-type material and immobile positively charged donor ions in the n-type material. The electric field due to these ions stops the motion of majority carriers but accelerates minority carriers across the junction.

When a reverse bias is applied across the junction, the depletion region widens. The motion of minority carriers causes a small reverse leakage current. Thus, even when no radiation is present, a small leakage current exists. This leakage current is called dark current.

![Basic Biasing Arrangement and Construction Photodiode with circuit diagram and symbols](/notes/cse/s1/physics/module-4/photodiode-circuit.webp)


When the diode is illuminated by light, photons are absorbed - mainly in the depletion region and also in the neutral region.

When a photon of sufficient energy is incident on the device, an electron from the valence band moves to the conduction band, creating a hole in the valance band. These electron-hole pairs are called photo carriers.

For electron-hole pairs generated within the depletion region, the electric field acting across the region separates the pair and the electron and the hole drift in opposite directions.

Such a transport process induces an electric current in the external circuit in excess of the already existing reverse leakage current (dark current) and is called photo-current.

---

<!-- page 16 | Disadvantages of a p-n photo diode -->

![VI Characteristics of Photodiode](/notes/cse/s1/physics/module-4/photodiode-vi.webp)


**VI Characteristics of Photodiode**

The photo-current created in the external circuit is always in the reverse direction, i.e., from n to the p region. Increasing the level of illumination increases the reverse current. Since the photo-current is proportional to the incident light intensity, the diode can be used as a photo detector with a reverse bias voltage.

### Disadvantages of a p-n photo diode

1. The depletion region is a relatively small portion of the total volume of the diode. Hence only those few photons, which are absorbed in the depletion region, cause current in the circuit whereas many of the photons absorbed in the bulk of the diode do not result in current.
2. To increase the width of the depletion region, the reverse bias applied across the junction has to be increased; which is not possible beyond a certain value.
3. The electrons and holes generated by the photons in the bulk of the diode recombine before they cause current in the circuit.

### 5.2 p-i-n junction diode

The p-i-n diode has a wide intrinsic semiconductor (pure or lightly doped) layer between p and n regions. The intrinsic layer has no free charges. Under sufficiently large reverse bias, the depletion region extends through the entire intrinsic layer. Thus, the area available for capturing light increases.

![p-i-n junction diode structure](/notes/cse/s1/physics/module-4/pin-structure.webp)
![P-I-N diode under forward and reverse bias. The carrier arrows and depletion widths are qualitative and not to scale.](/notes/cse/s1/physics/module-4/pin-bias.webp)

When a photon with energy greater than or equal to the band gap energy of the semiconductor material comes to the depletion region, the photon can give up its energy and excite an electron from the valence band to the conduction band.

---

<!-- page 17 | 6 Solar cell -->

Thus, free electron-hole pairs are produced. The high electric field present in the depletion region causes the carriers to separate. This produces a current in the external circuit. As the intrinsic layer is wide, most of the photons are absorbed and larger photo current is produced.

Therefore p-i-n photo diode is more sensitive than p-n photo diode.

Advantages of P-I-N photodiode

1. The depletion region is wide and extends throughout the intrinsic region and hence the reverse bias need not be varied to widen the depletion region.

2. The reverse bias required is small, of the order of $5\text{V}$.

3. As the depletion area is wider, most of the incident photons are absorbed in this region and hence the efficiency of this device is high.

4. The dark current in this device is small.

6 Solar cell

These are semiconductor junction devices used for converting radiation energy into electrical energy. These cells generate a voltage proportional to radiation intensity and are called photo voltaic cells. Si, Se, GaAs, InAs, CdS are used as materials for solar cells.

Solar cell working

> **Figure: Solar cell structure and working diagram**
>
> Diagram of a solar cell showing incident Light Energy arrows entering a layered structure: Nickel Plating on top, Anti-reflecting Coating, N-type Silicon layer, Depletion region with immobile charges, and P-type Silicon layer at the bottom. A load resistor labeled Load with a circle and number 3 is connected externally between the top and bottom metallic contacts. A legend below shows red circles with plus signs as Holes and black circles with minus signs as Electrons.

It consists of a p-type chip on which a thin layer of n-type material is grown.

When the solar radiation is incident on the cell, electron-hole pairs are generated in the n and p regions. Majority of them cannot recombine in the region. They reach the depletion region at the junction. The electric field due to the immobile ions separates the electron hole pairs.

Electrons in the p region are drawn into the n region and holes in the n region are drawn into the p region. It results in the accumulation of charges on the two sides of the junction and produces a potential difference. It is called photo emf. If a load is connected across the cell a current flow through it. The power generated depends on the nature of the material and the load resistance.

---

<!-- page 18 | Fill factor -->

Solar cell characteristics

![Photovoltaic Array Voltage / Current Characteristic curve showing current (I) in Amps versus PV Volts, highlighting Short Circuit Current, Maximum Power Point (MPP) with ImaxP and VmaxP, and Open Circuit Voltage](/notes/cse/s1/physics/module-4/solar-iv-curve.webp)


Efficiency

The current voltage characteristic of a solar cell is shown in figure. $V_{OC}$ is the voltage across the illuminated cell at zero current (open circuit voltage). $I_{SC}$ is the current through the illuminated cell when the voltage across the cell is zero (short circuit current). The power produced by the cell equals the product of the voltage and current across the device. In the open circuit and short circuit conditions the power is zero.

Conversion efficiency ($\eta$) is the ratio of maximum output electrical power to the input optical power.

$$
\eta = \frac{\text{maximum output electrical power}}{\text{input optical power}}
$$

$$
= \frac{V_m I_m}{\text{Light intensity x Area of the solar cell}}
$$

$V_m$ and $I_m$ are the voltage and current that produce maximum power.

### Fill factor

$$
f = \frac{\text{maximum output power}}{V_{OC} \times I_{SC}} = \frac{V_m I_m}{V_{OC} I_{SC}}
$$

It gives what fraction the maximum power is of the product of open circuit voltage and short circuit current. Its value lies in the range $0.65$ to $0.8$. The higher the fill factor the maximum is the output power.

## Advantages and disadvantages of solar cell

### Advantages

1. Does not use any fuels. So they are not dangerous.
2. Can be used for years without any expenditure on maintenance.
3. Does not produce atmospheric or noise pollution.

---

<!-- page 19 | Fill factor (cont.) -->

Disadvantages

1. Very delicate, brittle and may be broken into small pieces
2. Slow response compared to photodiodes, hence not used as photodetectors
3. Large space consumption
4. Should be cleaned from time to time for maximum results.

Applications of solar cells

1. They are used in satellites and rockets as sources of power
2. used in telecommunication fields at remote and difficult to access areas
3. used in defence equipment, remote instrumentation,remote radars etc.
4. used for rural electrification, water pumping, solar fencing, health care, ocean navigation aids etc.
5. used in pocket calculators, watches,street lights, traffic signals etc.

Difference between photodiode and solar cell

| Parameters | Photo diode | Solar cell |
| --- | --- | --- |
| Junction area | Smaller | Larger, as solar radiation is required to fall on a large area for conversion to electricity. |
| Biasing | Reverse bias voltage is applied to the photodiode externally. | No voltage is applied directly to the solar cell |
| Size | Small | Large |
| Load capacity | Smaller | Greater |
| Application | Used as light sensors to detect the presence of light | Used as transducers to convert light energy into electric energy |

Interconnecting Solar cells

A typical module has 36 cells connected in series

> **Figure: Diagram showing 36 solar cells connected in series in a module, with output terminals labeled + and -**
>
> A rectangular solar module containing 36 individual rectangular solar cells arranged in a 4 by 9 grid. Each cell is blue with vertical grid lines. The cells are interconnected in a serpentine series circuit using metallic busbars and wires. On the right side, two output connection wires extend out, with the top terminal as '-' and the bottom terminal as '+'. The entire module is enclosed within a grey border.

---

<!-- page 20 | 7 Semiconductor Laser -->

> **Figure: Diagram showing the hierarchy of a solar photovoltaic system from Cell to Module, Panel, and Array.**
>
> Hierarchy chart showing four components linked by red arrows. Top left shows a single 'Cell' connected to a 'Module' consisting of multiple cells. The module is connected to a 'Panel' containing multiple modules. Finally, multiple panels are arranged into an 'Array'.

## 7 Semiconductor Laser

Semiconductor diode laser is a specifically made P-N junction diode that emits coherent light under forward bias. The first semiconductor Laser was made in 1962 by N Hall and his coworkers.

Materials like Silicon and Germanium which are used to make ordinary semiconductor P-N junction diodes are indirect band gap materials which produce only heat radiations during electron hole recombination. To produce light during electron hole recombination we must make use of direct bandgap materials like GaAs. Hence such materials are used to make semiconductor diode lasers.

A simple diode laser which makes use of the same semiconductor material on both sides of the junction is known as homojunction diode laser.eg., GaAs laser. A diode laser which makes use of different semiconductor materials on the two sides of the junction is known as a heterojunction diode laser. Eg., A junction laser having GaAs on one side and GaAlAs on the other side. We will discuss only about homojunction laser diodes.

![Laser principle showing absorption, spontaneous emission, stimulated emission, coherent output photons, and population inversion.](/notes/cse/s1/physics/module-4/laser-principle.webp)

### Construction

> **Figure: Construction of a semiconductor homojunction diode laser showing active region, electrodes, mirrors, and current input.**
>
> 3D schematic diagram of a semiconductor laser diode. At the top, a vertical arrow indicates 'Current' entering an 'Electrode'. The main body is a rectangular block with layers labeled from top to bottom: p+ region containing GaAs of length L, a thin central active region, and an n+ region containing GaAs, ending at a bottom 'Electrode' with a ground symbol. The sides feature 'Cleaved surface mirror's. Wavy arrows pointing outwards horizontally represent laser light emission from the sides. The active region is labeled at the bottom right as 'Active region (stimulated emission region)'.

---

<!-- page 21 | 7 Semiconductor Laser (cont.) -->

The schematic diagram of a homojunction laser diode is as shown.

It has a heavily doped N type GaAs material on top of which a P region is formed by diffusing Zinc atoms into it. The dimensions of the diode are very small, typically $500 \mu\text{m} \times 100 \mu\text{m} \times 100 \mu\text{m}$ in size.

The top and bottom faces are metalized and metal contacts are provided to pass current through the diode. The front and rear end faces are polished (One partially and the other fully) parallel to each other and perpendicular to the plane of the junction. This is to form the optical resonator. The two remaining sides of the diode are roughened to eliminate lasing action in that direction.

The entire structure is packaged in a small case.

Working

- Due to the heavy doping there are large number of electrons in the conduction band in the N region and a large number of holes in the valence band in the P region.

- The depletion region acts as the active region for laser action.

- When the junction is forward biased, electrons and holes are injected into the junction region in high concentration. This forms the pumping. Pumping is achieved by DC voltage source by direct energy transfer.

- As a result, there will be a large population of of electrons in the conduction band and a large population of holes in the valence band.

- Since a hole represents absence of an electron, we can say that there is population inversion of electrons between the high energy conduction band and low energy valance band.

- The narrow region in which population inversion occurs is called an inversion region or active region.

- Chance recombination of electrons and holes will cause spontaneous emission of photons.

- When the diode current reaches a threshold value, the spontaneous photons propagating in the junction plane stimulate the conduction electrons to fill the holes of the valance band.

- This stimulated electron-hole recombination produces coherent radiation.

Salient features

1. High efficiency

2. Simple, compact and small in size

3. Low input power

---

<!-- page 22 | 8 Numerical problems -->

4. Output power can be controlled by controlling junction current.
5. Continuous wave laser

## 8 Numerical problems

1. A half wave rectifier is used to supply $50\text{ V d.c.}$ to a resistive load of $800\,\Omega$.
The diode has a forward resistance of $25\,\Omega$. calculate the peak input a.c. voltage required.

Sol. $V_{dc} = 50\text{ V}$, $R_L = 800\,\Omega$, $r_f = 25\,\Omega$, $V_m = ?$

$$
\begin{aligned}
V_{dc} = I_{dc}R_L &= \frac{I_m}{\pi} R_L = \frac{V_m}{(r_f + R_L)\pi} R_L \\
\Rightarrow V_m &= \frac{V_{dc}(r_f + R_L)\pi}{R_L} \\
&= \frac{50 \times (25 + 800) \times 3.14}{800} = 161.9\text{V}
\end{aligned}
$$

2. A half wave rectifier is connected to a step down transformer whose output is $22\text{V}(rms)$, $50\text{ Hz}$ a.c. If the load resistance is $900\,\Omega$ and diode resistance is $100\,\Omega$, calculate 1) average load current 2) rms value of load current 3) dc output voltage

Sol. $V_{rms} = 22\text{ V}, R_L = 900\,\Omega, r_f = 100\,\Omega$
$I_{dc} = ?, I_{rms} = ?, V_{dc} = ?$

$$
\begin{aligned}
V_m &= V_{rms} \sqrt{2} = 22\sqrt{2} = 31.11\text{V} \\
I_m &= \frac{V_m}{r_f + R_L} = 31.11\text{mA} \\
I_{dc} &= \frac{I_m}{\pi} = 9.908\text{mA} \\
I_{rms} &= \frac{I_m}{2} = 15.56\text{mA} \\
V_{dc} &= I_{dc}R_L = 8.917\text{V}
\end{aligned}
$$

3. In a full wave single phase rectifier, the internal resistance of each diode is $5\,\Omega$, the transformer secondary voltage from the centre tap to each anode has rms value $30\text{V}$ and the load resistance is $1995\,\Omega$. Evaluate the mean load current, rms load current and dc output power.

Sol. $V_{rms} = 30\text{V}, R_L = 1995\,\Omega, r_f = 5\,\Omega$

---

<!-- page 23 | 8 Numerical problems (cont.) -->

$I_{dc} = ?, I_{rms} = ?, V_{dc} = ?$

$$
\begin{aligned}
V_m &= V_{rms}\sqrt{2} = 30\sqrt{2} = 42.42\text{V} \\
I_m &= \frac{V_m}{r_f + R_L} = 21.21\text{mA} \\
I_{dc} &= \frac{2I_m}{\pi} = 13.5\text{mA} \\
I_{rms} &= \frac{I_m}{\sqrt{2}} = 15\text{mA} \\
V_{dc} &= I_{dc} R_L = 29.93\text{V}
\end{aligned}
$$

4. A half wave rectifier circuit has $V_i = 50\sin\omega t$ volts. If $R_L = 90\Omega$ and $r_f = 10\Omega$. Find 1) Average load current 2) DC output voltage 3) PIV

(Sol. Take $V_m = 50\text{V}$ and proceed as in problem 1 then $I_{dc} = 0.1592\text{A}$, $V_{dc} = 14.33\text{V}$, $\text{PIV} = 50\text{V}$)

5. The forward resistance of each diode in a centre tap *full-wave rectifier* is $16\Omega$. The transformer secondary voltage from the centre tap to each end of the secondary is $40\text{V}$ (rms) and the load resistance is $900\Omega$. Find (1) the average load current (2) rms value of the load current (3) efficiency of rectifier

(Ans. $I_{dc} = 39.33\text{mA}$, $I_{rms} = 43.67\text{mA}$, $\eta = \frac{I_{dc}^2 R_L}{I_{rms}^2 (r_f + R_L)} = 0.797 = 79.7%$)

6. A light emitting diode emits wavelength of $410\text{nm}$ when forward biased. What is the band gap of the material of the diode?

Sol. Wavelength emitted, $\lambda = \frac{hc}{E_g} = \frac{1.24}{E_g (\text{in eV})}\mu\text{m}$

$E_g (\text{in eV}) = \frac{1.24 \times 10^{-6}}{410 \times 10^{-9}} = 3.024\text{eV}$
