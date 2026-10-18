<!-- page 1 | Start here -->

# Module 4 at a glance

Module 3 explained what happens inside a p-n junction. This module puts junctions to work as **devices**:

1. **Rectifiers** turn AC into DC using ordinary diodes.
2. **Special diodes** use the junction in unusual ways: the **Zener diode** works in breakdown, the **tunnel diode** uses quantum tunnelling.
3. **Photonic devices** connect electricity and light: the **LED** turns current into light, **photodiodes** and **solar cells** turn light into current, and the **semiconductor laser** produces coherent light.

> **KTU syllabus.** Semiconductor devices: rectifiers, full wave and half wave. Zener diode, V-I characteristics. Tunnel diode, V-I characteristics. Semiconductor laser (construction and working), applications. Photonic devices (qualitative treatment only): photodetectors (junction and PIN photodiodes), solar cells (I-V characteristics, efficiency, stringing of solar cells to a solar panel), light emitting diode, applications.

## What you will be able to do

- Explain the working of half-wave, centre-tap full-wave and bridge rectifiers, with waveforms.
- Derive $I_{dc}$, $I_{rms}$, efficiency and ripple factor, and state the peak inverse voltage of each rectifier.
- Distinguish avalanche and Zener breakdown, and explain the Zener diode as a voltage regulator.
- Explain the tunnel diode and its negative resistance region.
- Explain how an LED, a photodiode, a PIN diode, a solar cell and a semiconductor laser work.
- Calculate the efficiency and fill factor of a solar cell, and the band gap from an LED's colour.

## How to use these notes

- Each page follows the same shape: **idea → working or derivation → key results → common mistakes.**
- Green boxes hold key ideas. Amber boxes marked **Watch out** hold mistakes that cost marks. Boxes marked **Note on the source** record where the lecture notes were corrected.
- Numerical problems are worked in full on their own page; the last page has practice questions and a formula sheet.

## Where each topic sits

| Part | Pages |
| --- | --- |
| Rectifiers | Half-wave, centre-tap full-wave, bridge and comparison |
| Special diodes | Breakdown and the Zener diode, tunnel diode |
| Photonic devices | LED, photodetectors, solar cells, semiconductor laser |
| Problems | Numerical problems, practice and formula sheet |

> **Prerequisites.** Module 3: the p-n junction, forward and reverse bias, the diode V-I characteristic and band diagrams. For the rectifier derivations you need $\int\sin\omega t\,dt$ and $\sin^2\theta=\tfrac12(1-\cos2\theta)$.

---

<!-- page 2 | Half-wave rectifier -->

# The half-wave rectifier

## The idea

A **rectifier** is a circuit that converts an AC input voltage into a DC output voltage. It relies on the diode being one-way: a p-n junction conducts when forward biased and blocks current when reverse biased.

The half-wave rectifier is the simplest: **one diode** in series with the load.

![Half-wave rectifier: transformer secondary AB, a diode from A to M, and load resistor R_L](/notes/cse/s1/physics/module-4/half-wave-circuit.webp)

## Working

- During the **positive half cycle** of the secondary voltage, end A is positive, the diode is forward biased and **conducts**. Current flows through $R_L$.
- During the **negative half cycle**, the diode is reverse biased and **blocks** current. The output is zero.

So the current through $R_L$ always flows the same way: it is DC, but it is **pulsating DC**, not steady.

![Input sine wave and the half-wave rectified output: only the positive half cycles](/notes/cse/s1/physics/module-4/half-wave-waveforms.webp)

## Average (DC) current

Let the input be $v=V_m\sin\omega t$, with diode forward resistance $r_f$ and load $R_L$. The current is $i=I_m\sin\omega t$ for $0\le t\le T/2$ and $i=0$ for $T/2\le t\le T$, where $I_m=\dfrac{V_m}{r_f+R_L}$.

$$
\begin{aligned}
I_{dc}&=\frac1T\int_0^{T/2}I_m\sin\omega t\,dt=\frac{I_m}{T}\left[\frac{-\cos\omega t}{\omega}\right]_0^{T/2}\\
&=\frac{-I_m}{\omega T}\left(\cos\pi-\cos0\right)=\frac{2I_m}{2\pi}=\frac{I_m}{\pi}
\end{aligned}
$$

(using $\omega T=2\pi$).

## RMS current

The rms value is the square root of the mean of the squares of the instantaneous current:

$$
\begin{aligned}
I_{rms}^2&=\frac1T\int_0^{T/2}I_m^2\sin^2\omega t\,dt=\frac{I_m^2}{T}\int_0^{T/2}\frac{1-\cos2\omega t}{2}\,dt\\
&=\frac{I_m^2}{2T}\cdot\frac T2=\frac{I_m^2}{4}
\end{aligned}
$$

$$
I_{rms}=\frac{I_m}{2}
$$

## Efficiency

> **Rectifier efficiency.** $\eta=\dfrac{\text{DC output power}}{\text{AC input power}}=\dfrac{I_{dc}^2R_L}{I_{rms}^2(r_f+R_L)}$

$$
\eta=\frac{(I_m/\pi)^2R_L}{(I_m/2)^2(r_f+R_L)}=\frac{4}{\pi^2}\cdot\frac{1}{1+r_f/R_L}=\frac{0.406}{1+r_f/R_L}
$$

When $r_f\ll R_L$ the maximum efficiency is **40.6 %**. (Exactly, $4/\pi^2=0.4053$, so 40.5 %; most books quote 40.6 %.)

## Ripple factor

The output is not pure DC: it contains AC components called **ripple**. The smaller the ripple, the better the rectifier.

$$
\gamma=\sqrt{\frac{I_{rms}^2}{I_{dc}^2}-1}=\sqrt{\frac{\pi^2}{4}-1}=\mathbf{1.21}
$$

## Peak inverse voltage

> **Peak inverse voltage (PIV).** The maximum reverse voltage across the diode while it is not conducting. For the half-wave rectifier, $\text{PIV}=V_m$, the peak secondary voltage.

## Advantages and disadvantages

| Advantages | Disadvantages |
| --- | --- |
| only one diode | low efficiency (40.6 %) |
| low cost | high ripple factor (1.21) |
| | output current is intermittent: nothing flows for half of each cycle |

> **Note on the source.** The lecture notes described the half-wave PIV as the voltage "across the centre tap and one end", which belongs to the centre-tap full-wave circuit. For a half-wave rectifier the PIV is simply $V_m$.

> **Watch out.** $I_{dc}=I_m/\pi$ and $I_{rms}=I_m/2$ for half-wave. Do not mix them up with the full-wave values ($2I_m/\pi$ and $I_m/\sqrt2$) on the next page.

---

<!-- page 3 | Full-wave rectifier (centre tap) -->

# The full-wave rectifier with a centre-tapped transformer

## The idea

A full-wave rectifier uses **both** half cycles of the input. The centre-tap version uses a transformer whose secondary has a centre tap C, and **two diodes**, each fed by one half of the secondary.

![Centre-tap full-wave rectifier: diodes D1 and D2 from ends A and B, load R_L between M and the centre tap](/notes/cse/s1/physics/module-4/centre-tap-circuit.webp)

## Working

- **Positive half cycle:** A is positive, B negative. D1 is forward biased and conducts; D2 is reverse biased. Current flows through D1, through $R_L$ from M to L, and back through the upper half of the secondary.
- **Negative half cycle:** B is positive, A negative. D2 conducts and D1 does not. Current flows through D2, through $R_L$ **again from M to L**, and back through the lower half.

The current through $R_L$ has the same direction in both half cycles, so the output is DC, with a hump in **every** half cycle.

![Input voltage, current through R_L with D1 and D2 conducting in alternate half cycles, and the output voltage](/notes/cse/s1/physics/module-4/full-wave-waveforms.webp)

## Average current

Each diode gives one half-sine pulse per cycle, both in the same direction, so the total over one cycle is twice the half-wave value:

$$
I_{dc}=\frac1T\left[2\int_0^{T/2}I_m\sin\omega t\,dt\right]=\frac{2I_m}{\omega T}\left(1-\cos\pi\right)=\frac{2I_m}{\pi}
$$

## RMS current

The current is $i=I_m\sin\omega t$ for $0$ to $T/2$ (through D1) and $i=I_m\sin\omega(t-T/2)$ for $T/2$ to $T$ (through D2), so $i^2$ repeats every half cycle:

$$
I_{rms}^2=\frac{2}{T}\int_0^{T/2}I_m^2\sin^2\omega t\,dt=\frac{2I_m^2}{T}\cdot\frac T4=\frac{I_m^2}{2}
\qquad\Rightarrow\qquad I_{rms}=\frac{I_m}{\sqrt2}
$$

## Efficiency

With forward resistance $r_f$ for the conducting diode:

$$
\eta=\frac{I_{dc}^2R_L}{I_{rms}^2(r_f+R_L)}=\frac{(2I_m/\pi)^2R_L}{(I_m^2/2)(r_f+R_L)}=\frac{8}{\pi^2}\cdot\frac{1}{1+r_f/R_L}=\frac{0.812}{1+r_f/R_L}
$$

When $r_f\ll R_L$, $\eta=$ **81.2 %**, twice the half-wave value. (Exactly, $8/\pi^2=0.8106$, so 81.1 %; most books quote 81.2 %.)

## Ripple factor and PIV

$$
\gamma=\sqrt{\frac{I_{rms}^2}{I_{dc}^2}-1}=\sqrt{\frac{\pi^2}{8}-1}=\mathbf{0.48}
$$

> **PIV.** When D1 conducts, the non-conducting D2 has the **whole** secondary across it: $\text{PIV}=2V_m$, where $V_m$ is the peak voltage of **each half** of the secondary.

## Advantages over half-wave

- Higher efficiency (81.2 %).
- Lower ripple factor (0.48).
- Output current flows in both half cycles: continuous but pulsating.

Disadvantages: it needs two diodes and a centre-tapped transformer, so it costs more, and each diode must withstand $2V_m$.

> **Watch out.** In the centre-tap circuit $V_m$ is measured from the **centre tap to one end**, and each diode sees $2V_m$ in reverse. Quoting PIV $=V_m$ here is a common mistake.

---

<!-- page 4 | Bridge rectifier and comparison -->

# The bridge rectifier

## The idea

The bridge rectifier gives full-wave output **without a centre tap**, using four diodes arranged in a bridge.

![Bridge rectifier: diodes D1 to D4 in a bridge across the secondary AB, load R_L between M and L](/notes/cse/s1/physics/module-4/bridge-circuit.webp)

## Working

- **Positive half cycle:** A is positive, B negative. D1 and D3 are forward biased and conduct; D2 and D4 are reverse biased. Current flows through D1, through $R_L$ from M to L, through D3 and back to the secondary.
- **Negative half cycle:** B is positive. D2 and D4 conduct; D1 and D3 do not. Current flows through D2, through $R_L$ **again from M to L**, through D4.

The load current has the same direction in both half cycles, so the output is full-wave DC.

![Bridge rectifier waveforms: input, current through R_L from D1, D3 and D2, D4 in turn, and the output voltage](/notes/cse/s1/physics/module-4/bridge-waveforms.webp)

## Results

$I_{dc}$, $I_{rms}$ and ripple factor are the same as for any full-wave rectifier. Two diodes are in series with the load at any moment, so the efficiency is

$$
\eta=\frac{0.812}{1+2r_f/R_L}\qquad(81.2\%\ \text{when } r_f\ll R_L)
$$

$$
\gamma=0.48\qquad\text{PIV}=V_m
$$

## Bridge versus centre tap

**Advantages of the bridge**

1. No centre tap is needed on the transformer.
2. A smaller transformer can be used.
3. Each diode has a lower PIV rating ($V_m$ instead of $2V_m$), so it suits high-voltage applications.
4. For the same secondary voltage, the output voltage is twice that of the centre-tap circuit (the centre tap uses only half of the secondary at a time).

**Disadvantages**

1. Two extra diodes are needed.
2. Two diodes conduct in series, so there are two diode voltage drops, and the voltage regulation is poorer.

## Comparison of the three rectifiers

| | Half-wave | Centre-tap full-wave | Bridge |
| --- | --- | --- | --- |
| Diodes | 1 | 2 | 4 |
| $I_{dc}$ | $I_m/\pi$ | $2I_m/\pi$ | $2I_m/\pi$ |
| $I_{rms}$ | $I_m/2$ | $I_m/\sqrt2$ | $I_m/\sqrt2$ |
| Maximum efficiency | 40.6 % | 81.2 % | 81.2 % |
| Ripple factor | 1.21 | 0.48 | 0.48 |
| PIV per diode | $V_m$ | $2V_m$ | $V_m$ |
| Centre tap needed | no | yes | no |

> **Watch out.** In the bridge efficiency the diode resistance appears as $2r_f$, because two diodes conduct in series in each half cycle.

---

<!-- page 5 | Breakdown and the Zener diode -->

# Breakdown and the Zener diode

## Two breakdown mechanisms

If the reverse voltage on a p-n junction is increased far enough, the reverse current rises suddenly. This is **breakdown**, and it happens in two different ways.

| | Avalanche breakdown | Zener breakdown |
| --- | --- | --- |
| Doping | light or moderate | heavy |
| Depletion region | wide | very thin |
| Mechanism | minority carriers accelerated by the field knock electrons out of bonds; the new carriers do the same, a chain reaction ("avalanche") | the very strong field lets electrons **tunnel** directly through the thin depletion region |
| Damage | can destroy the diode if not controlled | the diode is not damaged by operating in breakdown |
| Effect of temperature | breakdown voltage rises with temperature (positive coefficient) | breakdown voltage falls with temperature (negative coefficient) |
| Use | high-voltage protection circuits | voltage regulation and reference circuits |

> **Note on the source.** The lecture notes said higher temperature can *lower* the avalanche breakdown voltage. The usual behaviour is the opposite: stronger lattice vibrations shorten the distance carriers travel between collisions, so a **higher** voltage is needed, giving avalanche a positive temperature coefficient. Zener breakdown has a negative one.

## The Zener diode

A **Zener diode** is a heavily doped p-n junction diode designed to work in the **reverse breakdown region**. Its breakdown voltage $V_Z$ is fixed during manufacture by controlling the doping level.

![Zener diode symbol, anode (+) to cathode (−), and its physical package with a cathode band](/notes/cse/s1/physics/module-4/zener-symbol.webp)

## V-I characteristic

- **Forward bias:** like an ordinary diode, conducting above about 0.3 to 0.7 V.
- **Reverse bias below $V_Z$:** only a tiny reverse saturation current.
- **At $V_Z$:** the reverse current rises sharply while the voltage stays almost constant at $V_Z$.
- The current must stay between $I_{Z\min}$ (the knee, below which regulation is lost) and $I_{Z\max}$ (the maximum the diode can carry without exceeding its power rating).

![V-I characteristic of a Zener diode: forward region, and a sharp breakdown at −V_Z between I_Zmin and I_Zmax](/notes/cse/s1/physics/module-4/zener-vi-characteristic.webp)

> **Key idea.** In breakdown the Zener voltage stays almost constant over a wide range of current. That is exactly what a voltage regulator needs.

## Zener diode as a voltage regulator

A **regulated** supply keeps its output voltage constant even when the input voltage or the load changes.

![Zener regulator: unregulated DC input, series resistor R_s, and the Zener diode in parallel with the load R_L](/notes/cse/s1/physics/module-4/zener-regulator.webp)

- The unregulated DC $V_i$ is applied through a series resistor $R_s$. The Zener diode is reverse biased and in **parallel with the load** $R_L$.
- If $V_i>V_Z$ the diode operates in breakdown, so the voltage across it, and so across the load, stays at $V_Z$.
- If $V_i$ rises, the extra current flows through the Zener and the extra voltage drops across $R_s$. If the load draws more current, the Zener current falls by the same amount. Either way the output stays at $V_Z$.
- $R_s$ limits the current so that the Zener current never exceeds $I_{Z\max}$.

> **Watch out.** The Zener diode is connected in **reverse bias** in the regulator, with its cathode to the positive side. In forward bias it would just be an ordinary diode with a 0.7 V drop.

---

<!-- page 6 | Tunnel diode -->

# The tunnel diode

## The idea

The **tunnel diode** (also called the **Esaki diode**) is a very heavily doped p-n junction diode. The heavy doping makes the depletion region extremely narrow, so electrons can cross it by **quantum mechanical tunnelling** (Module 2) instead of climbing over the potential barrier.

![Tunnel diode circuit symbol](/notes/cse/s1/physics/module-4/tunnel-diode-symbol.webp)

## Band diagram

In an ordinary diode the Fermi level lies in the gap on both sides. In a tunnel diode the doping is so heavy (degenerate) that the Fermi level lies **inside the conduction band** on the n side and **inside the valence band** on the p side. Filled states on one side then face empty states at the same energy on the other side, across a very thin barrier.

![Band diagrams of an ordinary p-n junction diode and a tunnel diode, where electrons tunnel through the thin barrier](/notes/cse/s1/physics/module-4/tunnel-diode-bands.webp)

## Working and V-I characteristic

1. **Small forward bias:** electrons in the n-side conduction band face empty states in the p-side valence band at the same energy, and tunnel across. The current rises quickly to the **peak point** A ($V_p$, $I_p$).
2. **Increasing bias:** the bands move out of alignment, there are fewer empty states opposite the filled ones, and tunnelling falls. The current **decreases** as the voltage increases: this is the **negative resistance region**.
3. **Valley point** B ($V_v$, $I_v$): tunnelling has almost stopped.
4. **Beyond the valley:** ordinary diode conduction (diffusion over the barrier) takes over and the current rises again.

![V-I characteristic of a tunnel diode: peak point A, negative resistance region, valley point B, then normal diode current](/notes/cse/s1/physics/module-4/tunnel-diode-vi.webp)

## Applications

- High-frequency oscillators (GHz range), using the negative resistance.
- Microwave amplifiers.
- High-speed switching circuits.
- Radar and communication systems.
- Logic memory (storage) devices.

> **Watch out.** "Negative resistance" means the current **falls** as the voltage **rises** between the peak and valley points. It does not mean the diode produces energy.

---

<!-- page 7 | Light-emitting diode -->

# The light-emitting diode (LED)

## The idea

An **LED** is a semiconductor diode that gives out light when it is **forward biased**.

## Working

- Under forward bias, free electrons cross from the n region and **recombine** with holes in the p region.
- Free electrons are in the conduction band and holes in the valence band, which is lower in energy. So each recombination **releases energy**, roughly equal to the band gap $E_g$.
- In silicon and germanium this energy is released mostly as **heat**. These are **indirect band gap** materials, in which recombination is usually non-radiative.
- In **direct band gap** materials such as gallium arsenide (GaAs), gallium arsenide phosphide (GaAsP) and gallium phosphide (GaP), the energy is released as a **photon of light**. If the semiconductor is translucent, the junction becomes a light source.

![LED: forward-biased p-n junction, with electrons and holes recombining at the junction and emitting light across the band gap](/notes/cse/s1/physics/module-4/led-working.webp)

## Colour and band gap

The photon energy is about $E_g$, so the wavelength is

$$
\lambda=\frac{hc}{E_g}=\frac{1.24}{E_g\ (\text{in eV})}\ \mu\text{m}
$$

| Material | Light |
| --- | --- |
| GaAs | infrared |
| GaAsP | red |
| GaP | green |

A larger band gap gives shorter-wavelength (bluer) light.

## Applications

Indicator lamps and displays, lighting, remote controls (infrared), optical fibre communication sources, and backlights for screens.

> **Watch out.** In $\lambda=1.24/E_g$, $E_g$ must be in **electron volts** and the answer comes out in **micrometres**. For example $E_g=1.42\ \text{eV}$ gives $\lambda=0.87\ \mu\text{m}=870\ \text{nm}$.

---

<!-- page 8 | Photodetectors -->

# Photodetectors: p-n and PIN photodiodes

## The idea

**Photodetectors** convert incident light into an electrical signal. A good photodetector should have:

1. wide bandwidth (respond to a wide range of frequencies),
2. short response time,
3. sharp response, to handle high bit rates,
4. long operating life,
5. low cost,
6. small size,
7. good temperature tolerance,
8. high sensitivity.

## The p-n junction photodiode

A photodiode is essentially a p-n junction diode operated in **reverse bias**.

- The depletion region contains immobile ions whose field stops the majority carriers but sweeps minority carriers across. In reverse bias the depletion region widens.
- Even in the dark, minority carriers give a small reverse leakage current, the **dark current**.
- When light falls on the junction, a photon of enough energy lifts an electron from the valence band to the conduction band, creating an electron-hole pair (**photocarriers**).
- Pairs created in the depletion region are separated by its field: electrons and holes drift in opposite directions. This adds a **photocurrent** to the dark current.

![Photodiode biasing: light falls on the depletion region of a reverse-biased p-n junction, with ammeter measuring the reverse current I_s; photodiode symbols](/notes/cse/s1/physics/module-4/photodiode-circuit.webp)

## V-I characteristic

The photocurrent flows in the reverse direction (n to p). It is proportional to the light intensity, so brighter light gives a larger reverse current, while the reverse voltage hardly matters. That is why the photodiode works as a light sensor.

![Photodiode characteristic: reverse current against reverse voltage for darkness and for 10,000 to 25,000 lux](/notes/cse/s1/physics/module-4/photodiode-vi.webp)

## Drawbacks of the p-n photodiode

1. The depletion region is a small part of the diode's volume, so only the few photons absorbed there give current. Photons absorbed elsewhere are wasted.
2. The depletion region can be widened by increasing the reverse bias, but only up to a limit.
3. Electron-hole pairs created outside the depletion region mostly recombine before they reach the circuit.

## The PIN photodiode

A **PIN diode** has a wide **intrinsic** (pure or lightly doped) layer between the p and n regions. The intrinsic layer has few free carriers, so under a modest reverse bias the depletion region spreads across the **whole intrinsic layer**. The region that collects light is therefore much larger.

![PIN photodiode structure: p region of width W_p, intrinsic region of width w and n region of width W_n, in a reverse-bias circuit](/notes/cse/s1/physics/module-4/pin-structure.webp)

![PIN diode under forward bias (narrow depletion region) and reverse bias (depletion region filling the intrinsic layer)](/notes/cse/s1/physics/module-4/pin-bias.webp)

Photons with energy at least $E_g$ create electron-hole pairs in the wide depletion region, the strong field separates them, and a larger photocurrent flows.

**Advantages of the PIN photodiode**

1. The depletion region is wide and fills the intrinsic layer, so the bias need not be raised to widen it.
2. Only a small reverse bias is needed, of the order of 5 V.
3. Most incident photons are absorbed in the depletion region, so the efficiency and sensitivity are high.
4. The dark current is small.

> **Watch out.** Photodiodes are operated in **reverse bias**. Solar cells (next page) are not biased at all: they generate their own voltage.

---

<!-- page 9 | Solar cells -->

# Solar cells

## The idea

A **solar cell** (photovoltaic cell) is a p-n junction that converts light energy directly into electrical energy. It generates a voltage that depends on the light intensity. Materials used include Si, Se, GaAs, InAs and CdS.

## Construction and working

A solar cell consists of a **p-type** chip on which a **thin n-type layer** is grown, so that light reaches the junction. The top has a thin metal grid contact (and an anti-reflection coating); the bottom has a full metal contact.

1. Light falling on the cell creates electron-hole pairs in the n and p regions.
2. Many of them reach the **depletion region** before recombining.
3. The field of the immobile ions separates each pair: electrons are pushed into the n region and holes into the p region.
4. Charge builds up on the two sides of the junction, producing a potential difference, the **photo-emf**.
5. If a load is connected, a current flows through it. The power depends on the material, the light intensity and the load resistance.

## I-V characteristic

![Solar cell I-V curve with short-circuit current, open-circuit voltage and the maximum power point; the dashed curve is the power](/notes/cse/s1/physics/module-4/solar-iv-curve.webp)

- **Open-circuit voltage $V_{\text{OC}}$:** the voltage across the illuminated cell when no current is drawn.
- **Short-circuit current $I_{\text{SC}}$:** the current when the terminals are shorted (voltage zero).
- At both of these points the power $P=VI$ is zero. In between there is a **maximum power point** with voltage $V_m$ and current $I_m$.

## Efficiency and fill factor

$$
\eta=\frac{\text{maximum electrical output power}}{\text{input optical power}}=\frac{V_mI_m}{\text{light intensity}\times\text{area of the cell}}
$$

$$
\text{FF}=\frac{V_mI_m}{V_{\text{OC}}\,I_{\text{SC}}}
$$

The **fill factor** says how close the maximum power comes to the ideal product $V_{\text{OC}}I_{\text{SC}}$: on the graph, how much of the dotted rectangle the shaded one fills. Typical values are 0.65 to 0.8; the higher it is, the better the cell.

## From cells to arrays

One cell gives only about half a volt, so cells are connected together:

- **Module:** cells connected in series, typically **36 cells**, to give a useful voltage.
- **Panel:** several modules mounted together.
- **Array:** many panels connected in series (for more voltage) and parallel (for more current).

## Advantages, disadvantages and applications

| Advantages | Disadvantages |
| --- | --- |
| no fuel, safe | brittle and easily broken |
| almost no maintenance for years | slow response, so not used as photodetectors |
| no air or noise pollution | needs a large area |
| | must be cleaned regularly for best output |

**Applications:** power for satellites and spacecraft; telecommunications in remote areas; defence equipment, remote instruments and radars; rural electrification, water pumping, solar fencing, health care, navigation aids; calculators, watches, street lights and traffic signals.

## Photodiode versus solar cell

| | Photodiode | Solar cell |
| --- | --- | --- |
| Junction area | small | large, to collect sunlight over a big area |
| Biasing | reverse bias applied externally | no external voltage |
| Size | small | large |
| Load capacity | small | large |
| Use | light sensor, detecting light | transducer, converting light energy to electrical energy |

> **Watch out.** Efficiency compares output power with the **light power falling on the cell** (intensity × area), not with $V_{\text{OC}}I_{\text{SC}}$. The fill factor is the ratio with $V_{\text{OC}}I_{\text{SC}}$.

---

<!-- page 10 | Semiconductor laser -->

# The semiconductor laser

## The idea

A **semiconductor diode laser** is a specially made p-n junction diode that emits **coherent** light when forward biased. The first was made in 1962 by R. N. Hall and co-workers.

Silicon and germanium are **indirect** band gap materials and give off heat when electrons and holes recombine. A laser needs light, so it uses a **direct** band gap material such as GaAs.

- A **homojunction** laser uses the same material on both sides of the junction (for example a GaAs laser). We study this one.
- A **heterojunction** laser uses different materials on the two sides (for example GaAs on one side and GaAlAs on the other).

![Laser principle: absorption, spontaneous emission and stimulated emission, and population inversion N2 > N1](/notes/cse/s1/physics/module-4/laser-principle.webp)

## Construction (GaAs homojunction laser)

- A heavily doped **n-type GaAs** crystal, with a **p region** formed on top by diffusing zinc atoms into it.
- Tiny: typically $500\ \mu\text{m}\times100\ \mu\text{m}\times100\ \mu\text{m}$.
- The top and bottom faces are metallised, with contacts to pass current through the junction.
- The front and rear faces are polished **parallel** to each other and perpendicular to the junction plane, one fully and one partly reflecting. They form the **optical resonator**.
- The other two sides are roughened so that lasing cannot happen in those directions.
- The narrow junction region is the **active region**, where the light is produced.

## Working

1. Because of the heavy doping, the n region has many electrons in the conduction band and the p region many holes in the valence band.
2. Under **forward bias**, electrons and holes are injected into the junction region in high concentration. This is the **pumping**, done directly by the DC supply.
3. There are now many electrons in the conduction band and many holes (empty states) in the valence band of the same region: a **population inversion** between the conduction band and the valence band. This narrow region is the **active region**.
4. Random recombination produces **spontaneous** photons.
5. When the current exceeds a **threshold** value, photons travelling in the junction plane **stimulate** further electrons to recombine with holes. Each stimulated photon has the same frequency, phase and direction as the one that triggered it.
6. The photons bounce between the end mirrors, building up the stimulated emission, and **coherent light** emerges through the partly reflecting face.

## Salient features

1. High efficiency.
2. Simple, compact and small.
3. Low input power.
4. Output power controlled simply by the junction current.
5. Continuous-wave output.

## Applications

Optical fibre communication, CD/DVD and Blu-ray players, laser printers, barcode scanners, laser pointers and medical instruments.

> **Watch out.** An LED and a laser diode both emit light from recombination at a forward-biased junction. The difference is that the laser has **population inversion**, an **optical resonator** and works above a **threshold current**, so its light is stimulated and coherent; an LED's light is spontaneous and incoherent.

---

<!-- page 11 | Numerical problems -->

# Numerical problems

**Problem 1.** A half-wave rectifier supplies $50\ \text{V}$ DC to a resistive load of $800\ \Omega$. The diode forward resistance is $25\ \Omega$. Find the peak AC input voltage.

$$
V_{dc}=I_{dc}R_L=\frac{I_m}{\pi}R_L=\frac{V_m}{\pi(r_f+R_L)}R_L
$$

$$
V_m=\frac{\pi V_{dc}(r_f+R_L)}{R_L}=\frac{\pi\times50\times825}{800}=\mathbf{162\ \text{V}}
$$

**Problem 2.** A half-wave rectifier is fed by a transformer giving $22\ \text{V}$ (rms), $50\ \text{Hz}$. The load is $900\ \Omega$ and the diode resistance $100\ \Omega$. Find (1) the average load current, (2) the rms load current, (3) the DC output voltage.

$$
V_m=22\sqrt2=31.11\ \text{V}\qquad I_m=\frac{V_m}{r_f+R_L}=\frac{31.11}{1000}=31.11\ \text{mA}
$$

1. $I_{dc}=\dfrac{I_m}{\pi}=\mathbf{9.90\ \text{mA}}$
2. $I_{rms}=\dfrac{I_m}{2}=\mathbf{15.56\ \text{mA}}$
3. $V_{dc}=I_{dc}R_L=9.90\times10^{-3}\times900=\mathbf{8.91\ \text{V}}$

**Problem 3.** In a centre-tap full-wave rectifier, each diode has resistance $5\ \Omega$, the secondary voltage from the centre tap to each end is $30\ \text{V}$ rms, and the load is $1995\ \Omega$. Find the mean load current, the rms load current and the DC output power.

$$
V_m=30\sqrt2=42.43\ \text{V}\qquad I_m=\frac{42.43}{5+1995}=21.21\ \text{mA}
$$

- $I_{dc}=\dfrac{2I_m}{\pi}=\mathbf{13.5\ \text{mA}}$
- $I_{rms}=\dfrac{I_m}{\sqrt2}=\mathbf{15.0\ \text{mA}}$
- $V_{dc}=I_{dc}R_L=13.5\times10^{-3}\times1995=\mathbf{26.9\ \text{V}}$
- $P_{dc}=I_{dc}^2R_L=(13.5\times10^{-3})^2\times1995=\mathbf{0.364\ \text{W}}$

> **Note on the source.** The lecture notes gave $V_{dc}=29.93\ \text{V}$; $13.5\ \text{mA}\times1995\ \Omega$ is $26.9\ \text{V}$. They also did not compute the DC output power, which the question asks for.

**Problem 4.** A half-wave rectifier has $V_i=50\sin\omega t$ volts, $R_L=90\ \Omega$ and $r_f=10\ \Omega$. Find (1) the average load current, (2) the DC output voltage, (3) the PIV.

$$
I_m=\frac{50}{10+90}=0.5\ \text{A}
$$

1. $I_{dc}=\dfrac{I_m}{\pi}=\mathbf{0.159\ \text{A}}$
2. $V_{dc}=I_{dc}R_L=0.159\times90=\mathbf{14.3\ \text{V}}$
3. $\text{PIV}=V_m=\mathbf{50\ \text{V}}$

**Problem 5.** In a centre-tap full-wave rectifier each diode has forward resistance $16\ \Omega$, the secondary voltage from the centre tap to each end is $40\ \text{V}$ rms, and the load is $900\ \Omega$. Find (1) the average load current, (2) the rms load current, (3) the efficiency.

$$
V_m=40\sqrt2=56.57\ \text{V}\qquad I_m=\frac{56.57}{916}=61.76\ \text{mA}
$$

1. $I_{dc}=\dfrac{2I_m}{\pi}=\mathbf{39.3\ \text{mA}}$
2. $I_{rms}=\dfrac{I_m}{\sqrt2}=\mathbf{43.7\ \text{mA}}$
3. $\eta=\dfrac{I_{dc}^2R_L}{I_{rms}^2(r_f+R_L)}=\dfrac{(39.3)^2\times900}{(43.7)^2\times916}=\mathbf{0.796=79.6\ \%}$

Check: $\dfrac{0.811}{1+16/900}=0.796$. $\checkmark$

**Problem 6.** An LED emits light of wavelength $410\ \text{nm}$ when forward biased. Find the band gap of its material.

$$
E_g=\frac{1.24}{\lambda\ (\mu\text{m})}=\frac{1.24}{0.410}=\mathbf{3.02\ \text{eV}}
$$

> **Watch out.** Always convert rms to peak first ($V_m=\sqrt2\,V_{rms}$), and include the diode resistance in $I_m=V_m/(r_f+R_L)$. Using the rms voltage directly is the most common error in these problems.

---

<!-- page 12 | Practice and formula sheet -->

# Practice questions and formula sheet

## Practice questions

1. A bridge rectifier uses diodes of forward resistance $10\ \Omega$ with a load of $1\ \text{k}\Omega$. The secondary voltage is $20\ \text{V}$ rms. Find $I_{dc}$, $I_{rms}$ and the efficiency.
2. A full-wave rectifier gives $I_{dc}=20\ \text{mA}$. What is $I_m$, and what is $I_{rms}$?
3. Find the wavelength emitted by a GaAs LED with $E_g=1.43\ \text{eV}$. In which part of the spectrum is it?
4. A solar cell of area $4\ \text{cm}^2$ receives light of intensity $1000\ \text{W/m}^2$. At its maximum power point $V_m=0.45\ \text{V}$ and $I_m=100\ \text{mA}$; also $V_{\text{OC}}=0.6\ \text{V}$ and $I_{\text{SC}}=110\ \text{mA}$. Find the efficiency and the fill factor.

## Answers

1. $V_m=20\sqrt2=28.28\ \text{V}$. Two diodes conduct, so $I_m=\dfrac{28.28}{2(10)+1000}=27.7\ \text{mA}$. $I_{dc}=2I_m/\pi=17.7\ \text{mA}$, $I_{rms}=I_m/\sqrt2=19.6\ \text{mA}$, $\eta=\dfrac{0.811}{1+20/1000}=79.5\ \%$.
2. $I_m=\dfrac{\pi I_{dc}}{2}=31.4\ \text{mA}$, and $I_{rms}=\dfrac{I_m}{\sqrt2}=22.2\ \text{mA}$.
3. $\lambda=\dfrac{1.24}{1.43}=0.867\ \mu\text{m}=867\ \text{nm}$: **infrared**.
4. Input power $=1000\times4\times10^{-4}=0.4\ \text{W}$. Output $=0.45\times0.1=0.045\ \text{W}$, so $\eta=11.3\ \%$. $\text{FF}=\dfrac{0.045}{0.6\times0.11}=0.68$.

## Short questions to revise

1. Explain the working of a half-wave rectifier and derive its efficiency.
2. Draw the centre-tap full-wave rectifier and explain its working. Why is its PIV $2V_m$?
3. Compare the bridge and centre-tap rectifiers.
4. Distinguish avalanche and Zener breakdown.
5. Explain how a Zener diode regulates voltage.
6. Explain the V-I characteristic of a tunnel diode. What is negative resistance?
7. Why do silicon diodes not emit light, while GaAs diodes do?
8. Compare p-n and PIN photodiodes.
9. Define fill factor and efficiency of a solar cell.
10. Describe the construction and working of a semiconductor laser.

---

## Formula sheet

### Rectifiers

| | Half-wave | Full-wave (centre tap) | Bridge |
| --- | --- | --- | --- |
| $I_m$ | $\dfrac{V_m}{r_f+R_L}$ | $\dfrac{V_m}{r_f+R_L}$ | $\dfrac{V_m}{2r_f+R_L}$ |
| $I_{dc}$ | $\dfrac{I_m}{\pi}$ | $\dfrac{2I_m}{\pi}$ | $\dfrac{2I_m}{\pi}$ |
| $I_{rms}$ | $\dfrac{I_m}{2}$ | $\dfrac{I_m}{\sqrt2}$ | $\dfrac{I_m}{\sqrt2}$ |
| Efficiency | $\dfrac{0.406}{1+r_f/R_L}$ | $\dfrac{0.812}{1+r_f/R_L}$ | $\dfrac{0.812}{1+2r_f/R_L}$ |
| Ripple factor | 1.21 | 0.48 | 0.48 |
| PIV | $V_m$ | $2V_m$ | $V_m$ |

| | |
| --- | --- |
| Efficiency | $\eta=\dfrac{I_{dc}^2R_L}{I_{rms}^2(r_f+R_L)}$ |
| Ripple factor | $\gamma=\sqrt{\dfrac{I_{rms}^2}{I_{dc}^2}-1}$ |
| Peak from rms | $V_m=\sqrt2\,V_{rms}$ |

### Photonic devices

| | |
| --- | --- |
| LED wavelength | $\lambda=\dfrac{hc}{E_g}=\dfrac{1.24}{E_g\ (\text{eV})}\ \mu\text{m}$ |
| Solar cell efficiency | $\eta=\dfrac{V_mI_m}{\text{intensity}\times\text{area}}$ |
| Fill factor | $\text{FF}=\dfrac{V_mI_m}{V_{\text{OC}}I_{\text{SC}}}$ |
