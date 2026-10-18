<!-- page 1 | Start here -->

# Module 4 at a glance

Module 3 explained what happens inside a p-n junction: how it forms, how it behaves in forward and reverse bias, and the diode equation. This module puts junctions to work as **devices**. Almost every electronic gadget you use contains several of them.

1. **Rectifiers** turn the AC from the mains into DC, using ordinary diodes as one-way valves.
2. **Special diodes** use the junction in unusual ways: the **Zener diode** works deliberately in breakdown to hold a voltage steady, and the **tunnel diode** uses quantum tunnelling (Module 2) to give a negative resistance.
3. **Photonic devices** connect electricity and light: the **LED** turns current into light, **photodiodes** and **solar cells** turn light into current, and the **semiconductor laser** produces a coherent beam.

> **KTU syllabus.** Semiconductor devices: rectifiers, full wave and half wave. Zener diode, V-I characteristics. Tunnel diode, V-I characteristics. Semiconductor laser (construction and working), applications. Photonic devices (qualitative treatment only): photodetectors (junction and PIN photodiodes), solar cells (I-V characteristics, efficiency, stringing of solar cells to a solar panel), light emitting diode, applications.

## What you will be able to do

- Explain the working of half-wave, centre-tap full-wave and bridge rectifiers in each half cycle, with circuit diagrams and waveforms.
- Derive $I_{dc}$, $I_{rms}$, $V_{dc}$, efficiency, ripple factor and form factor, and state the peak inverse voltage of each rectifier.
- Compare the three rectifiers and explain why a filter is used.
- Explain avalanche and Zener breakdown physically, and design a simple Zener voltage regulator.
- Explain the tunnel diode with band diagrams at each part of its V-I curve, including the negative resistance region.
- Explain how an LED produces light and how its colour depends on the band gap.
- Explain the p-n and PIN photodiodes and compare them.
- Explain how a solar cell works, read its I-V curve, and calculate efficiency and fill factor; build a module and an array from cells.
- Describe the construction and working of a semiconductor laser, and compare it with an LED.

## How to use these notes

- Each page follows the same shape: **idea → working or derivation → key results → worked example → common mistakes.**
- Green boxes hold key ideas. Amber boxes marked **Watch out** hold mistakes that cost marks. Boxes marked **Note on the source** record where the lecture notes were corrected.
- A few short sections are marked **beyond the syllabus**. They are there because they make the syllabus topics easier to understand; you will not be examined on them directly.
- Numerical problems from the lecture notes are worked in full on their own page; the last page has practice questions with answers and a formula sheet.

## Where each topic sits

| Part | Pages |
| --- | --- |
| Rectifiers | Rectifier basics, half-wave, centre-tap full-wave, bridge, comparison and filters |
| Special diodes | Breakdown, Zener diode and regulator, tunnel diode |
| Photonic devices | LED, photodetectors, solar cells, semiconductor laser |
| Problems | Numerical problems, practice and formula sheet |

> **Prerequisites.** Module 3: the p-n junction, forward and reverse bias, the depletion region, the diode V-I characteristic and energy band diagrams. Module 2: tunnelling. For the rectifier derivations you need $\int\sin\omega t\,dt=-\dfrac{\cos\omega t}{\omega}$, the identity $\sin^2\theta=\tfrac12(1-\cos2\theta)$, and $\omega T=2\pi$.

---

<!-- page 2 | Rectifiers: the basic ideas -->

# Rectifiers: the basic ideas

## Why we need rectifiers

The mains supply is **alternating current** (AC): in India $230\ \text{V}$ rms at $50\ \text{Hz}$. Its voltage reverses direction 100 times every second. Electronic circuits (phones, computers, amplifiers) need **direct current** (DC): a voltage of one fixed polarity, usually only a few volts.

> **Rectifier.** A rectifier is an electronic circuit that converts an AC input voltage into a DC output voltage.

A rectifier works because a p-n junction diode is a **one-way device**: it conducts when forward biased and blocks current when reverse biased. Placed in the path of an alternating current, it lets through only the half cycles in which it is forward biased.

## The DC power supply

A complete DC power supply has four stages:

| Stage | What it does |
| --- | --- |
| **Transformer** | steps the mains voltage down (or up) to the level needed, and isolates the circuit from the mains |
| **Rectifier** | converts the AC into pulsating DC (this page and the next three) |
| **Filter** | smooths out the pulsations (ripple), usually with a capacitor |
| **Regulator** | holds the output voltage constant, for example with a Zener diode |

## Symbols used

| Symbol | Meaning |
| --- | --- |
| $v=V_m\sin\omega t$ | instantaneous voltage applied to the rectifier (the transformer secondary) |
| $V_m$ | peak (maximum) value of that voltage; $V_m=\sqrt2\,V_{rms}$ |
| $r_f$ | forward resistance of a conducting diode |
| $R_L$ | load resistance |
| $I_m$ | peak current, $I_m=\dfrac{V_m}{r_f+R_L}$ |
| $T$ | period of the AC, $T=1/f$; $\omega=2\pi f$, so $\omega T=2\pi$ |

## Quantities that describe a rectifier

**Average (DC) value.** The output is not a steady DC, but it has an average value over one cycle. A DC meter reads this average. For a current,

$$
I_{dc}=\frac{1}{T}\int_0^T i\,dt
$$

**RMS value.** The root mean square value is the square root of the mean of the squares of the instantaneous values. It measures the heating (power) effect of the whole waveform, both its DC and its AC parts:

$$
I_{rms}=\sqrt{\frac1T\int_0^T i^2\,dt}
$$

**Rectifier efficiency.** How much of the AC power fed to the rectifier comes out as useful DC power in the load:

$$
\eta=\frac{\text{DC output power}}{\text{AC input power}}=\frac{P_{dc}}{P_{ac}}=\frac{I_{dc}^2R_L}{I_{rms}^2(r_f+R_L)}
$$

The DC output power is that of the average current in the load, $P_{dc}=I_{dc}^2R_L$. The AC input power is everything delivered to the circuit, $P_{ac}=I_{rms}^2(r_f+R_L)$, including the power lost as heat in the diode.

**Ripple factor.** The rectified output contains the wanted DC plus unwanted AC components, called **ripple**. The ripple factor compares the two:

$$
\gamma=\frac{\text{rms value of the AC components}}{\text{DC value}}=\frac{I_{ac}}{I_{dc}}
$$

Because $I_{rms}^2=I_{dc}^2+I_{ac}^2$ (the DC and AC parts add in power),

$$
I_{ac}=\sqrt{I_{rms}^2-I_{dc}^2}\qquad\Rightarrow\qquad\gamma=\sqrt{\frac{I_{rms}^2}{I_{dc}^2}-1}
$$

The smaller the ripple factor, the closer the output is to pure DC, and the better the rectifier.

**Form factor and peak factor.** Two shape ratios that are often asked:

$$
\text{form factor}=\frac{I_{rms}}{I_{dc}}\qquad\text{peak factor}=\frac{I_m}{I_{rms}}
$$

Notice that $\gamma=\sqrt{(\text{form factor})^2-1}$.

**Peak inverse voltage (PIV).** The maximum reverse voltage that appears across a diode during the half cycle in which it does not conduct. A diode must be chosen with a reverse voltage rating above the PIV, or it will break down.

> **Key idea.** Every rectifier result follows from just two integrals, $I_{dc}$ and $I_{rms}$. Learn to derive those two, and efficiency, ripple factor and form factor follow in one line each.

> **Watch out.** Efficiency uses $(r_f+R_L)$ in the denominator but only $R_L$ in the numerator. The power wasted as heat in the diode is part of the input but not of the useful output.

---

<!-- page 3 | Half-wave rectifier -->

# The half-wave rectifier

## Circuit

The half-wave rectifier is the simplest rectifier: a transformer, **one diode**, and the load resistor $R_L$ in series.

![Half-wave rectifier: transformer secondary AB, a diode from A to M, and load resistor R_L](/notes/cse/s1/physics/module-4/half-wave-circuit.webp)

## Working

When the AC supply is switched on, the alternating voltage $V_{in}$ appears across the terminals A and B of the transformer secondary.

- **Positive half cycle.** End A is positive and end B negative. The diode is **forward biased** and conducts. Current flows from A through the diode, through $R_L$ (from M towards B), and back to B. The voltage across $R_L$ follows the input.
- **Negative half cycle.** End A is negative and end B positive. The diode is **reverse biased** and does not conduct. No current flows, and the output is zero. The whole secondary voltage now appears across the diode in reverse.

The current through $R_L$ always flows in the same direction, so it is DC. But its magnitude is not constant: it is a series of positive half-sine pulses with gaps between them, called **pulsating DC**.

![Input sine wave and the half-wave rectified output: only the positive half cycles](/notes/cse/s1/physics/module-4/half-wave-waveforms.webp)

## Average (DC) current

Let the input be $v=V_m\sin\omega t$. In the positive half cycle the circuit resistance is $r_f+R_L$, so the current is

$$
i=I_m\sin\omega t\quad(0\le t\le T/2),\qquad i=0\quad(T/2\le t\le T),\qquad I_m=\frac{V_m}{r_f+R_L}
$$

Average over one full cycle:

$$
\begin{aligned}
I_{dc}&=\frac1T\left[\int_0^{T/2}I_m\sin\omega t\,dt+\int_{T/2}^{T}0\,dt\right]
=\frac{I_m}{T}\left[\frac{-\cos\omega t}{\omega}\right]_0^{T/2}\\[4pt]
&=\frac{-I_m}{\omega T}\left(\cos\frac{\omega T}{2}-\cos0\right)=\frac{-I_m}{2\pi}\left(\cos\pi-1\right)=\frac{-I_m}{2\pi}(-2)
\end{aligned}
$$

$$
\boxed{I_{dc}=\frac{I_m}{\pi}}\approx0.318\,I_m
$$

The DC output voltage is

$$
V_{dc}=I_{dc}R_L=\frac{I_m R_L}{\pi}=\frac{V_m}{\pi}\cdot\frac{R_L}{r_f+R_L}
$$

which is $V_m/\pi\approx0.318V_m$ when $r_f\ll R_L$.

## RMS current

$$
\begin{aligned}
I_{rms}^2&=\frac1T\left[\int_0^{T/2}I_m^2\sin^2\omega t\,dt+\int_{T/2}^{T}0\,dt\right]
=\frac{I_m^2}{T}\int_0^{T/2}\frac{1-\cos2\omega t}{2}\,dt\\[4pt]
&=\frac{I_m^2}{2T}\left[t-\frac{\sin2\omega t}{2\omega}\right]_0^{T/2}=\frac{I_m^2}{2T}\left[\frac T2-\frac{\sin2\pi}{2\omega}\right]=\frac{I_m^2}{2T}\cdot\frac T2=\frac{I_m^2}{4}
\end{aligned}
$$

$$
\boxed{I_{rms}=\frac{I_m}{2}}
$$

## Efficiency

$$
\eta=\frac{I_{dc}^2R_L}{I_{rms}^2(r_f+R_L)}=\frac{(I_m/\pi)^2R_L}{(I_m/2)^2(r_f+R_L)}=\frac{4}{\pi^2}\cdot\frac{R_L}{r_f+R_L}=\frac{4}{\pi^2}\cdot\frac{1}{1+r_f/R_L}
$$

$$
\boxed{\eta=\frac{0.406}{1+r_f/R_L}}
$$

The efficiency is largest when $r_f\ll R_L$: the **maximum efficiency is 40.6 %**. (Exactly, $4/\pi^2=0.4053$, so 40.5 %; most books quote 40.6 %.) Less than half of the AC input power appears as DC power in the load. The rest is in the ripple, and heat in the diode.

## Ripple factor, form factor and peak factor

$$
\gamma=\sqrt{\frac{I_{rms}^2}{I_{dc}^2}-1}=\sqrt{\frac{(I_m/2)^2}{(I_m/\pi)^2}-1}=\sqrt{\frac{\pi^2}{4}-1}=\mathbf{1.21}
$$

A ripple factor above 1 means the AC part of the output is **larger** than the DC part: a very poor DC.

$$
\text{form factor}=\frac{I_m/2}{I_m/\pi}=\frac{\pi}{2}=1.57\qquad\text{peak factor}=\frac{I_m}{I_m/2}=2
$$

## Peak inverse voltage

> **PIV of a half-wave rectifier.** During the negative half cycle the diode does not conduct, so no current flows in $R_L$ and there is no voltage across it. The whole secondary voltage appears across the diode in reverse. Its maximum is the peak secondary voltage: $\text{PIV}=V_m$.

## Advantages and disadvantages

| Advantages | Disadvantages |
| --- | --- |
| only one diode | low efficiency (at most 40.6 %) |
| simple and cheap | high ripple factor (1.21): needs heavy filtering |
| no centre tap on the transformer | output current is intermittent: nothing flows for half of each cycle |
| | the transformer carries a DC component, which can saturate its core |

## Worked example

**Example.** A half-wave rectifier is fed from the $230\ \text{V}$, $50\ \text{Hz}$ mains through a $10:1$ step-down transformer. The load is $1\ \text{k}\Omega$ and the diode resistance is negligible. Find $V_m$, $I_{dc}$, $I_{rms}$, $V_{dc}$, the rms ripple voltage and the PIV.

The secondary rms voltage is $230/10=23\ \text{V}$, so

$$
V_m=23\sqrt2=32.5\ \text{V}\qquad I_m=\frac{V_m}{R_L}=\frac{32.5}{1000}=32.5\ \text{mA}
$$

$$
I_{dc}=\frac{I_m}{\pi}=10.4\ \text{mA}\qquad I_{rms}=\frac{I_m}{2}=16.3\ \text{mA}\qquad V_{dc}=I_{dc}R_L=10.4\ \text{V}
$$

The rms ripple voltage is $\gamma V_{dc}=1.21\times10.35=12.5\ \text{V}$, larger than the DC itself. The diode must withstand $\text{PIV}=V_m=32.5\ \text{V}$.

> **Note on the source.** The lecture notes described the half-wave PIV as the voltage "across the centre tap and one end", which belongs to the centre-tap full-wave circuit. For a half-wave rectifier the PIV is simply $V_m$, the peak of the whole secondary voltage.

> **Watch out.** $I_{dc}=I_m/\pi$ and $I_{rms}=I_m/2$ for half-wave. Do not mix them up with the full-wave values ($2I_m/\pi$ and $I_m/\sqrt2$) on the next page. And remember to convert rms to peak first: a "23 V transformer" means $V_{rms}=23\ \text{V}$, so $V_m=32.5\ \text{V}$.

---

<!-- page 4 | Full-wave rectifier (centre tap) -->

# The full-wave rectifier with a centre-tapped transformer

## The idea

A half-wave rectifier throws away every negative half cycle. A **full-wave rectifier** uses **both** half cycles: it turns the negative ones round so that they also drive current through the load in the same direction.

The centre-tap version uses a transformer whose secondary has a connection in the middle, the **centre tap** C, and **two diodes**. Each diode is fed by one half of the secondary. The load is connected between the joined cathodes (M) and the centre tap.

![Centre-tap full-wave rectifier: diodes D1 and D2 from ends A and B, load R_L between M and the centre tap](/notes/cse/s1/physics/module-4/centre-tap-circuit.webp)

## Working

When the supply is switched on, the alternating voltage appears across the secondary AB. Relative to the centre tap, ends A and B are always at opposite polarity.

- **Positive half cycle.** End A is positive and end B negative (relative to C). D1 is forward biased and **conducts**; D2 is reverse biased and does not. Current flows from A, through D1, through $R_L$ from M to L, and back to the centre tap through the **upper half** of the secondary.
- **Negative half cycle.** End B is positive and end A negative. D2 is forward biased and **conducts**; D1 does not. Current flows from B, through D2, through $R_L$ **again from M to L**, and back through the **lower half** of the secondary.

The current through $R_L$ has the same direction in both half cycles, so the output is DC with a hump in **every** half cycle, not every other one. The output is still pulsating, but the gaps are gone.

![Input voltage, current through R_L with D1 and D2 conducting in alternate half cycles, and the output voltage](/notes/cse/s1/physics/module-4/full-wave-waveforms.webp)

## Average current

Let the voltage from the centre tap to either end be $V_m\sin\omega t$. Each diode conducts for one half cycle with peak current $I_m=\dfrac{V_m}{r_f+R_L}$, and both pulses go the same way through the load. So the current through $R_L$ is

$$
i=I_m\sin\omega t\quad(0\le t\le T/2,\ \text{through D1}),\qquad i=I_m\left|\sin\omega t\right|\quad(T/2\le t\le T,\ \text{through D2})
$$

The total over one cycle is twice the half-cycle value:

$$
I_{dc}=\frac1T\left[2\int_0^{T/2}I_m\sin\omega t\,dt\right]=\frac{2I_m}{T}\left[\frac{-\cos\omega t}{\omega}\right]_0^{T/2}=\frac{-2I_m}{\omega T}\left(\cos\pi-\cos0\right)=\frac{4I_m}{2\pi}
$$

$$
\boxed{I_{dc}=\frac{2I_m}{\pi}}\approx0.637\,I_m\qquad V_{dc}=I_{dc}R_L=\frac{2V_m}{\pi}\cdot\frac{R_L}{r_f+R_L}
$$

This is twice the half-wave value, as expected: twice as many pulses per cycle.

## RMS current

$i^2$ is the same in both half cycles, so

$$
I_{rms}^2=\frac1T\left[2\int_0^{T/2}I_m^2\sin^2\omega t\,dt\right]=\frac{2I_m^2}{T}\cdot\frac{T}{4}=\frac{I_m^2}{2}
$$

(the integral $\int_0^{T/2}\sin^2\omega t\,dt=T/4$ was worked on the half-wave page).

$$
\boxed{I_{rms}=\frac{I_m}{\sqrt2}}
$$

This is the same as the rms value of a full sine wave, which makes sense: squaring removes the sign, so $i^2$ for a full-wave rectified sine is identical to $i^2$ for the original sine.

## Efficiency

Only one diode conducts at a time, so the resistance in the current path is $r_f+R_L$:

$$
\eta=\frac{I_{dc}^2R_L}{I_{rms}^2(r_f+R_L)}=\frac{(2I_m/\pi)^2R_L}{(I_m^2/2)(r_f+R_L)}=\frac{8}{\pi^2}\cdot\frac{1}{1+r_f/R_L}
$$

$$
\boxed{\eta=\frac{0.812}{1+r_f/R_L}}
$$

When $r_f\ll R_L$, the **maximum efficiency is 81.2 %**, twice the half-wave value. (Exactly, $8/\pi^2=0.8106$, so 81.1 %; most books quote 81.2 %.)

## Ripple factor, form factor and peak factor

$$
\gamma=\sqrt{\frac{I_{rms}^2}{I_{dc}^2}-1}=\sqrt{\frac{I_m^2/2}{4I_m^2/\pi^2}-1}=\sqrt{\frac{\pi^2}{8}-1}=\mathbf{0.48}
$$

$$
\text{form factor}=\frac{I_m/\sqrt2}{2I_m/\pi}=\frac{\pi}{2\sqrt2}=1.11\qquad\text{peak factor}=\frac{I_m}{I_m/\sqrt2}=\sqrt2=1.414
$$

The ripple is still present, but it is less than half of the half-wave value, and its main frequency is $2f$ ($100\ \text{Hz}$ for $50\ \text{Hz}$ mains), which is easier to filter.

## Peak inverse voltage

> **PIV of a centre-tap rectifier.** Take the moment of the positive peak, when D1 conducts. The cathode of D2 is at the output voltage, about $+V_m$ (ignoring the drop in D1), while its anode at end B is at $-V_m$. So D2 has $V_m-(-V_m)=2V_m$ across it in reverse: the **whole** secondary. Hence $\text{PIV}=2V_m$, where $V_m$ is the peak voltage of **each half** of the secondary.

## Advantages and disadvantages

**Advantages over the half-wave rectifier**

1. Higher efficiency: up to 81.2 %.
2. Lower ripple factor: 0.48 instead of 1.21.
3. Output current flows in both half cycles: continuous, though pulsating.
4. The ripple frequency is $2f$, so a smaller filter does the job.
5. The DC currents in the two halves of the secondary flow in opposite directions, so the transformer core is not magnetised by DC.

**Disadvantages**

1. Two diodes are needed, and a transformer with a centre tap, which is harder to make.
2. Each diode must withstand a PIV of $2V_m$.
3. Each half of the secondary is used only half the time, so for a given output voltage the transformer must be larger.

## Worked example

**Example.** A centre-tap full-wave rectifier uses a $12-0-12\ \text{V}$ (rms) transformer, diodes with $r_f=10\ \Omega$, and a load of $500\ \Omega$. Find $I_{dc}$, $I_{rms}$, $V_{dc}$, the DC output power, the efficiency and the PIV.

$$
V_m=12\sqrt2=16.97\ \text{V}\qquad I_m=\frac{16.97}{10+500}=33.3\ \text{mA}
$$

$$
I_{dc}=\frac{2I_m}{\pi}=21.2\ \text{mA}\qquad I_{rms}=\frac{I_m}{\sqrt2}=23.5\ \text{mA}\qquad V_{dc}=I_{dc}R_L=10.6\ \text{V}
$$

$$
P_{dc}=I_{dc}^2R_L=0.224\ \text{W}\qquad P_{ac}=I_{rms}^2(r_f+R_L)=0.282\ \text{W}\qquad\eta=\frac{0.224}{0.282}=79.5\ \%
$$

Check with the formula: $\dfrac{0.8106}{1+10/500}=0.795$. $\checkmark$ The PIV is $2V_m=33.9\ \text{V}$.

> **Watch out.** In the centre-tap circuit $V_m$ is measured from the **centre tap to one end**, and each diode sees $2V_m$ in reverse. Quoting PIV $=V_m$ here is a common mistake. Also, a "12-0-12 V" transformer gives $12\ \text{V}$ rms on each half, so $V_m=12\sqrt2$, not $24\sqrt2$.

---

<!-- page 5 | Bridge rectifier -->

# The bridge rectifier

## The idea

The bridge rectifier gives full-wave output **without a centre tap**, using four diodes arranged in a bridge (a diamond). The whole secondary winding is used in both half cycles.

![Bridge rectifier: diodes D1 to D4 in a bridge across the secondary AB, load R_L between M and L](/notes/cse/s1/physics/module-4/bridge-circuit.webp)

The AC input is applied across one diagonal of the bridge (A and B); the load is connected across the other diagonal (M and L).

## Working

- **Positive half cycle.** End A is positive and end B negative. Diodes **D1 and D3** are forward biased and conduct; D2 and D4 are reverse biased and do not. Current flows from A through D1, through $R_L$ from M to L, through D3 and back to B.
- **Negative half cycle.** End A is negative and end B positive. Diodes **D2 and D4** are forward biased and conduct; D1 and D3 do not. Current flows from B through D2, through $R_L$ **again from M to L**, through D4 and back to A.

The load current has the same direction (M to L) in both half cycles, so a full-wave DC output is obtained across the load.

![Bridge rectifier waveforms: input, current through R_L from D1, D3 and D2, D4 in turn, and the output voltage](/notes/cse/s1/physics/module-4/bridge-waveforms.webp)

## Results

The output waveform is exactly that of a full-wave rectifier, so $I_{dc}$, $I_{rms}$, ripple factor and form factor are the same as on the previous page. The one difference is that **two diodes conduct in series** with the load at any moment, so the resistance in the current path is $2r_f+R_L$:

$$
I_m=\frac{V_m}{2r_f+R_L}\qquad I_{dc}=\frac{2I_m}{\pi}\qquad I_{rms}=\frac{I_m}{\sqrt2}
$$

$$
\eta=\frac{I_{dc}^2R_L}{I_{rms}^2(2r_f+R_L)}=\frac{8}{\pi^2}\cdot\frac{1}{1+2r_f/R_L}=\frac{0.812}{1+2r_f/R_L}\qquad(81.2\ \%\ \text{when } r_f\ll R_L)
$$

$$
\gamma=0.48
$$

## Peak inverse voltage

> **PIV of a bridge rectifier.** At the positive peak, D1 and D3 conduct and act almost as closed switches. Each of the non-conducting diodes D2 and D4 is then connected directly across the secondary, so it sees the peak secondary voltage in reverse: $\text{PIV}=V_m$. This is half the PIV of the centre-tap circuit for the same output.

## Bridge versus centre tap

**Advantages of the bridge rectifier**

1. No centre tap is needed on the transformer.
2. The whole secondary is used in both half cycles, so a much smaller transformer can be used for the same output.
3. Each diode has a lower PIV rating ($V_m$ instead of $2V_m$), so the bridge suits high-voltage applications.
4. For the same secondary voltage, the output voltage is twice that of the centre-tap circuit, because the centre tap uses only half of the secondary at a time.
5. Bridge rectifiers are sold as a single sealed package of four diodes, which makes them convenient.

**Disadvantages**

1. Two extra diodes are needed.
2. Two diodes conduct in series, so there are two diode voltage drops (about $1.4\ \text{V}$ for silicon). This matters for low output voltages, and the voltage regulation is poorer.

## Worked example

**Example.** A bridge rectifier uses diodes of forward resistance $10\ \Omega$ with a load of $1\ \text{k}\Omega$. The secondary voltage is $20\ \text{V}$ rms. Find $I_{dc}$, $I_{rms}$ and the efficiency.

$$
V_m=20\sqrt2=28.28\ \text{V}\qquad I_m=\frac{V_m}{2r_f+R_L}=\frac{28.28}{20+1000}=27.7\ \text{mA}
$$

$$
I_{dc}=\frac{2I_m}{\pi}=17.7\ \text{mA}\qquad I_{rms}=\frac{I_m}{\sqrt2}=19.6\ \text{mA}\qquad\eta=\frac{0.8106}{1+20/1000}=79.5\ \%
$$

> **Watch out.** In the bridge, the diode resistance appears as $2r_f$ (both in $I_m$ and in the efficiency), because two diodes conduct in series in each half cycle. In the centre-tap circuit only one diode conducts at a time, so it is $r_f$.

---

<!-- page 6 | Comparison and filters -->

# Comparing rectifiers, and smoothing the output

## Comparison of the three rectifiers

| | Half-wave | Centre-tap full-wave | Bridge |
| --- | --- | --- | --- |
| Number of diodes | 1 | 2 | 4 |
| Diodes conducting at a time | 1 | 1 | 2 |
| $I_m$ | $\dfrac{V_m}{r_f+R_L}$ | $\dfrac{V_m}{r_f+R_L}$ | $\dfrac{V_m}{2r_f+R_L}$ |
| $I_{dc}$ | $I_m/\pi$ | $2I_m/\pi$ | $2I_m/\pi$ |
| $I_{rms}$ | $I_m/2$ | $I_m/\sqrt2$ | $I_m/\sqrt2$ |
| $V_{dc}$ (no load, ideal diode) | $V_m/\pi=0.318V_m$ | $2V_m/\pi=0.637V_m$ | $2V_m/\pi=0.637V_m$ |
| Maximum efficiency | 40.6 % | 81.2 % | 81.2 % |
| Ripple factor | 1.21 | 0.48 | 0.48 |
| Form factor | 1.57 | 1.11 | 1.11 |
| Peak factor | 2 | 1.414 | 1.414 |
| Ripple frequency | $f$ | $2f$ | $2f$ |
| PIV per diode | $V_m$ | $2V_m$ | $V_m$ |
| Centre tap needed | no | yes | no |

> **Key idea.** Full-wave rectification doubles the DC output and the efficiency and cuts the ripple factor from 1.21 to 0.48. The bridge gives the same output as the centre tap without a centre tap and with half the PIV, at the cost of two more diodes.

## Advantages of full-wave over half-wave

1. Efficiency is high (about 81.2 % against 40.6 %).
2. Ripple factor is low (0.48 against 1.21).
3. Output current is continuous but pulsating, instead of flowing only in alternate half cycles.

**Disadvantages:** full-wave rectifiers need two or four diodes, so the cost is comparatively high.

## Why ripple matters

Even the best rectifier output (ripple factor 0.48) is far from steady DC. If such a supply powered an audio amplifier you would hear a loud hum at $100\ \text{Hz}$; a digital circuit would reset whenever the voltage dipped. So a rectifier is almost always followed by a **filter**.

## The capacitor filter (beyond the syllabus)

The simplest filter is a large capacitor $C$ connected directly across the load.

- As the rectified voltage rises towards its peak, the diode conducts and **charges** the capacitor to nearly $V_m$.
- After the peak the input falls faster than the capacitor can discharge, so the diode switches off. The capacitor now supplies the load, **discharging slowly** through $R_L$.
- At the next pulse the input rises above the capacitor voltage again, and the diode tops it up.

The output becomes a nearly steady DC close to $V_m$, with only a small sawtooth ripple.

![Full-wave rectified output without a filter, and the much smoother output with a capacitor across the load](/notes/cse/s1/physics/module-4/capacitor-filter.webp)

The larger $C$ and $R_L$ (a long discharge time $CR_L$), the smaller the ripple. For a full-wave rectifier with a capacitor filter the ripple factor is approximately

$$
\gamma\approx\frac{1}{4\sqrt3\,fCR_L}
$$

For example, with $f=50\ \text{Hz}$, $C=1000\ \mu\text{F}$ and $R_L=1\ \text{k}\Omega$, $\gamma\approx\dfrac{1}{4\sqrt3\times50\times10^{-3}\times10^{3}}=0.0029$: about $0.3\ \%$, compared with $48\ \%$ without the filter. (For half-wave the factor 4 becomes 2, so the ripple is twice as large.)

> **Watch out.** The ripple factor 0.48 and the efficiency 81.2 % are for a rectifier with a **resistive load and no filter**. Do not quote them for a filtered supply.

---

<!-- page 7 | Breakdown in p-n junctions -->

# Breakdown in a p-n junction

## The idea

In reverse bias only a tiny reverse saturation current flows, carried by minority carriers. If the reverse voltage is increased far enough, the reverse current suddenly **rises steeply** while the voltage hardly changes. This is **breakdown**, and the voltage at which it happens is the **breakdown voltage**. It happens in two physically different ways.

## Avalanche breakdown

- It occurs in p-n junctions with **lightly or moderately doped** semiconductors.
- The depletion region of a lightly doped junction is **wide**. The breakdown voltage is relatively high (typically more than about 6 V).
- In reverse bias the electric field accelerates the few **minority carriers** across the depletion region.
- As these carriers gain speed, they acquire enough kinetic energy, between collisions, to **knock electrons out of covalent bonds**. Each such collision creates a new electron-hole pair. This is called **impact ionisation**.
- The newly created carriers are also accelerated and in turn create more pairs, producing a **chain reaction**, exactly like a snow avalanche.
- This rapid multiplication of carriers causes a sudden and large increase in reverse current: **avalanche breakdown**.
- The large current produces heat, which can damage the diode permanently if the current is not limited by the external circuit.
- **Temperature:** as temperature rises, the lattice vibrates more strongly, the carriers collide more often and travel shorter distances between collisions, so they gain less energy between collisions. A **higher** voltage is needed to reach breakdown. Avalanche breakdown therefore has a **positive temperature coefficient**.
- Use: high-voltage protection circuits (avalanche diodes).

## Zener breakdown

- It occurs in p-n junctions with **heavily doped** semiconductors.
- The depletion region of a heavily doped junction is **very thin** (a few nanometres), so even a few volts of reverse bias produce an extremely strong electric field across it, of the order of $10^{8}\ \text{V/m}$.
- This field is strong enough to pull electrons directly out of their covalent bonds. In band language, the valence band on the p side lines up with the empty conduction band on the n side across a very thin barrier, and electrons **tunnel** straight through it (quantum tunnelling, Module 2). This is also called **field emission**.
- The current rises sharply at a low and well-defined breakdown voltage (typically below about 6 V).
- The diode is **not damaged** by operating in breakdown, provided the current is kept within its power rating.
- **Temperature:** a higher temperature gives the valence electrons more energy, so they tunnel more easily, and the breakdown voltage **falls**: a **negative temperature coefficient**.
- Use: voltage regulation and reference circuits.

## Comparison

| | Avalanche breakdown | Zener breakdown |
| --- | --- | --- |
| Doping | light or moderate | heavy |
| Depletion region | wide | very thin |
| Breakdown voltage | high (above about 6 V) | low (below about 6 V) |
| Mechanism | carriers accelerated by the field knock electrons out of bonds; the new carriers do the same: a chain reaction (impact ionisation) | the very strong field pulls electrons out of bonds; they **tunnel** through the thin depletion region |
| Damage | can destroy the diode if the current is not controlled | the diode is not damaged in breakdown (within its power rating) |
| Effect of temperature | breakdown voltage rises (positive coefficient) | breakdown voltage falls (negative coefficient) |
| Shape of the curve | breakdown less sharp | very sharp knee |
| Use | high-voltage protection | voltage regulation and reference |

Commercial "Zener diodes" with breakdown voltages above about 6 V in fact break down mainly by avalanche; near 5 to 6 V both mechanisms act and their temperature effects nearly cancel, which is why 5.6 V reference diodes are very stable.

> **Note on the source.** The lecture notes said higher temperature can *lower* the avalanche breakdown voltage. The usual behaviour is the opposite: stronger lattice vibrations shorten the distance carriers travel between collisions, so a **higher** voltage is needed, giving avalanche a positive temperature coefficient. Zener breakdown has a negative one.

> **Watch out.** "Breakdown" does not mean the diode is broken. It is a reversible process; the diode is destroyed only if the current, and so the power $V\times I$, is allowed to get too large.

---

<!-- page 8 | Zener diode and voltage regulator -->

# The Zener diode and the voltage regulator

## The Zener diode

A **Zener diode** is a heavily doped p-n junction diode **designed to operate in the reverse breakdown region**. Its breakdown voltage $V_Z$ is set during manufacture by controlling the doping level: heavier doping gives a thinner depletion region and a lower $V_Z$. Zener diodes are available with $V_Z$ from about 2 V to a few hundred volts.

![Zener diode symbol, anode (+) to cathode (−), and its physical package with a cathode band](/notes/cse/s1/physics/module-4/zener-symbol.webp)

The symbol is a diode with a bent bar (like a "Z") at the cathode. On the component, the band marks the cathode.

## V-I characteristic

![V-I characteristic of a Zener diode: forward region, and a sharp breakdown at −V_Z between I_Zmin and I_Zmax](/notes/cse/s1/physics/module-4/zener-vi-characteristic.webp)

- **Forward bias:** the characteristic is like that of a normal p-n junction diode, conducting above about 0.3 to 0.7 V.
- **Reverse bias below $V_Z$:** only a very small reverse saturation current flows.
- **At $V_Z$:** as the reverse bias is increased to the Zener breakdown voltage, the reverse current increases **sharply**, while the voltage across the diode stays almost constant at $V_Z$. The curve is nearly vertical.
- **$I_{Z\min}$ (knee current):** the smallest current at which the diode is properly in breakdown. Below it the voltage is no longer held at $V_Z$.
- **$I_{Z\max}$:** the maximum reverse current the diode can carry without exceeding the power dissipation rating $P_{Z\max}$ specified by the manufacturer: $I_{Z\max}=P_{Z\max}/V_Z$.

> **Key idea.** Between $I_{Z\min}$ and $I_{Z\max}$ the Zener voltage stays almost constant whatever the current. A device that holds its voltage while the current changes is exactly what a voltage regulator needs.

## Zener diode as a voltage regulator

A **regulated** power supply keeps its output voltage constant, irrespective of changes in the input supply voltage or in the load resistance.

![Zener regulator: unregulated DC input, series resistor R_s, and the Zener diode in parallel with the load R_L](/notes/cse/s1/physics/module-4/zener-regulator.webp)

**Circuit.** The unregulated DC input $V_i$ is applied through a **series resistor** $R_s$. The Zener diode is connected in **reverse bias**, in **parallel with the load** $R_L$, so the load voltage is the Zener voltage.

**Currents.** The current through $R_s$ divides between the Zener and the load:

$$
I_s=\frac{V_i-V_Z}{R_s}\qquad I_L=\frac{V_Z}{R_L}\qquad I_Z=I_s-I_L
$$

**How it regulates.**

- **If the input voltage rises:** $I_s$ increases. The load voltage cannot rise, because the Zener holds it at $V_Z$; the **extra current goes through the Zener** and the extra voltage is dropped across $R_s$. If the input falls, the Zener current falls instead.
- **If the load draws more current** ($R_L$ falls): $I_s$ stays the same (since $V_i$ and $V_Z$ have not changed), so the Zener current **falls by the same amount** and the load voltage is unchanged.

In both cases the output stays at $V_Z$, as long as the Zener current stays between $I_{Z\min}$ and $I_{Z\max}$.

**Role of $R_s$.** It limits the current, so that the Zener current never exceeds $I_{Z\max}$, and it drops the difference between $V_i$ and $V_Z$. Without it the Zener would be connected straight across the supply and would burn out.

## Worked examples

**Example 1.** A Zener regulator has $V_i=15\ \text{V}$, $V_Z=6\ \text{V}$, $R_s=300\ \Omega$ and $R_L=1\ \text{k}\Omega$. Find the currents and the power dissipated in the Zener. What happens if $V_i$ rises to $18\ \text{V}$?

$$
I_s=\frac{15-6}{300}=30\ \text{mA}\qquad I_L=\frac{6}{1000}=6\ \text{mA}\qquad I_Z=30-6=24\ \text{mA}
$$

$$
P_Z=V_ZI_Z=6\times0.024=0.144\ \text{W}
$$

At $V_i=18\ \text{V}$: $I_s=\dfrac{12}{300}=40\ \text{mA}$, $I_L$ is still $6\ \text{mA}$, so $I_Z=34\ \text{mA}$. The extra $10\ \text{mA}$ flows through the Zener and the output stays at $6\ \text{V}$.

**Example 2 (design).** Design a regulator to give $6\ \text{V}$ from an input that varies between $12\ \text{V}$ and $18\ \text{V}$, for a load current between $0$ and $20\ \text{mA}$. The Zener has $P_{Z\max}=0.5\ \text{W}$ and needs $I_{Z\min}=5\ \text{mA}$.

$R_s$ must be **small enough** that in the worst case (lowest input, largest load) the Zener still gets $I_{Z\min}$:

$$
R_s\le\frac{V_{i\min}-V_Z}{I_{L\max}+I_{Z\min}}=\frac{12-6}{20+5\ \text{mA}}=240\ \Omega
$$

$R_s$ must be **large enough** that in the other worst case (highest input, no load) the Zener current stays below $I_{Z\max}=0.5/6=83.3\ \text{mA}$:

$$
R_s\ge\frac{V_{i\max}-V_Z}{I_{Z\max}}=\frac{18-6}{83.3\ \text{mA}}=144\ \Omega
$$

Choose a standard value between them, $R_s=220\ \Omega$. Check: at $18\ \text{V}$ with no load, $I_Z=12/220=54.5\ \text{mA}$ and $P_Z=0.33\ \text{W}<0.5\ \text{W}$; at $12\ \text{V}$ with $20\ \text{mA}$ load, $I_Z=27.3-20=7.3\ \text{mA}>5\ \text{mA}$. $\checkmark$

> **Watch out.** The Zener diode is connected in **reverse bias** in the regulator, with its cathode to the positive side. In forward bias it would just be an ordinary diode with a 0.7 V drop. And the load is in **parallel** with the Zener, not in series.

---

<!-- page 9 | Tunnel diode -->

# The tunnel diode

## The idea

The **tunnel diode** (also called the **Esaki diode**, after Leo Esaki, who invented it in 1957 and later shared the Nobel Prize) is a p-n junction diode with **very heavy doping** on both sides, about a thousand times heavier than an ordinary diode.

The heavy doping has two consequences:

1. The depletion region is **extremely narrow**, about $10\ \text{nm}$ or less.
2. The material is **degenerate**: the Fermi level lies **inside the conduction band** on the n side and **inside the valence band** on the p side.

Electrons can then cross the junction by **quantum mechanical tunnelling** (Module 2) straight through the thin barrier, instead of climbing over it. Tunnelling happens only from a **filled** state on one side into an **empty** state at the **same energy** on the other side.

![Tunnel diode circuit symbol](/notes/cse/s1/physics/module-4/tunnel-diode-symbol.webp)

![Band diagrams of an ordinary p-n junction diode and a tunnel diode, where electrons tunnel through the thin barrier](/notes/cse/s1/physics/module-4/tunnel-diode-bands.webp)

## Working, point by point on the V-I curve

![V-I characteristic of a tunnel diode: peak point A, negative resistance region, valley point B, then normal diode current](/notes/cse/s1/physics/module-4/tunnel-diode-vi.webp)

**1. Zero bias.** The Fermi levels on the two sides are aligned. Filled states in the n-side conduction band face filled states in the p-side valence band. Tunnelling occurs equally in both directions, so the net current is zero.

**2. Small forward bias.** The n side is raised relative to the p side. Filled states in the n-side **conduction band** now face **empty** states (holes) in the p-side **valence band** at the same energy. Electrons tunnel from n to p and the current rises rapidly with voltage, far faster than in an ordinary diode.

**3. Peak point A ($V_p$, $I_p$).** The overlap between filled conduction-band states on the n side and empty valence-band states on the p side is **largest**. The tunnelling current is maximum: the **peak current** $I_p$ at the **peak voltage** $V_p$ (typically about $0.05$ to $0.1\ \text{V}$).

**4. Negative resistance region (A to B).** As the forward bias increases further, the bands are pushed out of alignment. Fewer filled states on the n side face empty states on the p side, so **tunnelling decreases** and the current **falls** while the voltage **rises**. The slope $dI/dV$ is negative: this is the **negative resistance region**.

**5. Valley point B ($V_v$, $I_v$).** The bottom of the n-side conduction band has risen above the top of the p-side valence band. There are no empty states opposite the filled ones, so tunnelling stops. The current is at its minimum, the **valley current** $I_v$, at the **valley voltage** $V_v$ (typically a few tenths of a volt).

**6. Beyond the valley.** The forward bias is now large enough for carriers to cross the reduced barrier by the ordinary diffusion mechanism. Normal diode conduction takes over and the current rises again exponentially.

**7. Reverse bias.** Filled states in the p-side valence band face empty states in the n-side conduction band, so electrons tunnel from p to n. The reverse current rises rapidly even for a tiny reverse voltage: a tunnel diode conducts well in reverse and is not used as a rectifier.

> **Key idea.** The negative resistance region is what makes the tunnel diode useful: a device whose current falls as the voltage rises can **supply** AC power to a resonant circuit (taking it from the DC bias), so it can sustain oscillations and amplify.

**Example.** A tunnel diode has $I_p=10\ \text{mA}$ at $V_p=0.1\ \text{V}$ and $I_v=1\ \text{mA}$ at $V_v=0.4\ \text{V}$. Estimate its average negative resistance.

$$
r_n=\frac{\Delta V}{\Delta I}=\frac{0.4-0.1}{1-10\ \text{mA}}=\frac{0.3}{-0.009}\approx-33\ \Omega
$$

## Advantages and applications

**Advantages:** very fast (tunnelling is almost instantaneous, so it works at very high frequencies), low noise, low power consumption, simple and cheap, and relatively insensitive to temperature and radiation.

**Applications**

- High-frequency oscillators (in the GHz range), using the negative resistance.
- Microwave amplifiers.
- High-speed switching circuits.
- Radar and communication systems.
- Logic memory (storage) devices, using its two stable states.

> **Watch out.** "Negative resistance" means the current **falls** as the voltage **rises** between the peak and valley points. It does not mean the diode produces energy: the power comes from the DC bias supply.

---

<!-- page 10 | Light-emitting diode -->

# The light-emitting diode (LED)

## The idea

A **light-emitting diode** (LED) is a semiconductor p-n junction diode that gives out light when it is **forward biased**. It converts electrical energy directly into light, a process called **electroluminescence**.

## Working

- Under forward bias the barrier is lowered. Free electrons cross from the n region into the p region, and holes cross the other way.
- Near the junction these **minority carriers recombine** with the majority carriers: electrons drop into holes.
- Free electrons are in the conduction band; holes are in the valence band, which is lower in energy. So each recombination **releases energy**, roughly equal to the band gap $E_g$.
- This energy is released either as **heat** (lattice vibrations) or as **light** (a photon of energy $h\nu\approx E_g$).
- If the semiconductor is translucent, the light escapes and the junction becomes a light source.

![LED: forward-biased p-n junction, with electrons and holes recombining at the junction and emitting light across the band gap](/notes/cse/s1/physics/module-4/led-working.webp)

## Direct and indirect band gaps

Why do some diodes give light while silicon diodes only get warm?

- In a **direct band gap** material (GaAs, GaAsP, GaP with nitrogen, GaN, InGaN), the lowest point of the conduction band and the highest point of the valence band occur at the **same electron momentum**. An electron can drop straight down into a hole and emit a photon, which carries away the energy. This is **radiative recombination**, and it is fast and likely.
- In an **indirect band gap** material (**silicon** and **germanium**), they occur at **different momenta**. A photon carries almost no momentum, so the electron cannot drop by emitting a photon alone; a lattice vibration (phonon) must also take part. This is much less likely, so recombination usually happens **non-radiatively**, and the energy is released as **heat**.

That is why LEDs and laser diodes are made from compound semiconductors, not from silicon.

## Colour and band gap

The photon energy is about $E_g$, so the wavelength emitted is

$$
\lambda=\frac{hc}{E_g}
$$

With $hc=1.24\ \text{eV}\,\mu\text{m}$ this becomes the handy formula

$$
\boxed{\lambda=\frac{1.24}{E_g\ (\text{in eV})}\ \mu\text{m}}
$$

A **larger band gap gives a shorter wavelength** (towards blue); a smaller gap gives a longer wavelength (towards red and infrared). Different colours are obtained by choosing the material, and by adjusting the composition of alloys such as GaAsP.

| Material | Approximate $E_g$ | Approximate $\lambda$ | Light |
| --- | --- | --- | --- |
| GaAs | 1.43 eV | 870 nm | infrared (remote controls) |
| GaAsP | about 1.9 eV | about 650 nm | red |
| AlGaInP | about 2.1 eV | about 590 nm | yellow and amber |
| GaP | 2.26 eV | about 550 nm | green |
| InGaN | about 2.75 eV | about 450 nm | blue |
| GaN | 3.4 eV | about 365 nm | ultraviolet |

White LEDs use a blue InGaN chip coated with a phosphor that converts part of the blue light to yellow; blue plus yellow looks white.

## Advantages and applications

**Advantages:** low operating voltage (about 1.5 to 3.5 V) and current; long life (tens of thousands of hours); high efficiency compared with filament lamps; very fast switching (nanoseconds); small, rugged and available in many colours.

**Disadvantages:** output falls with rising temperature; needs a current-limiting resistor; can be damaged by reverse voltage or excess current.

**Applications:** indicator lamps and seven-segment displays; general lighting and torches; remote controls (infrared LEDs); optical fibre communication over short distances; traffic signals and vehicle lights; backlights for LCD screens; optocouplers.

## Worked examples

**Example 1.** Find the photon energy of red light of wavelength $650\ \text{nm}$.

$$
E=\frac{1.24}{0.650}=1.91\ \text{eV}
$$

**Example 2.** A red LED needs $2\ \text{V}$ at $20\ \text{mA}$. Find the series resistor to run it from a $5\ \text{V}$ supply.

$$
R=\frac{5-2}{0.020}=150\ \Omega
$$

> **Watch out.** In $\lambda=1.24/E_g$, $E_g$ must be in **electron volts** and the answer comes out in **micrometres**. For example $E_g=1.42\ \text{eV}$ gives $\lambda=0.87\ \mu\text{m}=870\ \text{nm}$.

---

<!-- page 11 | Photodetectors -->

# Photodetectors: p-n and PIN photodiodes

## The idea

**Photodetectors** are devices that convert incident light power into an electrical signal (current). They are the receivers in optical fibre links, the sensors in cameras and light meters, and the "eyes" of automatic doors and smoke detectors.

## What a good photodetector needs

1. **Wide bandwidth:** it should detect light over a wide range of frequencies (wavelengths).
2. **Low response time:** it should respond quickly to changes in the light.
3. **Sharp response:** to handle high bit rates in communication.
4. **Long operating life.**
5. **Low cost.**
6. **Small size.**
7. **High degree of temperature tolerance.**
8. **High sensitivity:** a large output for a small light input.

## The p-n junction photodiode

**Structure.** A photodiode is essentially a p-n junction diode, built so that light can reach the junction (through a window or a lens) and operated in **reverse bias**.

**Without light.** During fabrication a depletion layer forms at the junction, made of immobile negative acceptor ions on the p side and positive donor ions on the n side. The field of these ions stops the majority carriers but **accelerates minority carriers** across the junction. A reverse bias widens the depletion region. The motion of the thermally generated minority carriers gives a small reverse leakage current even in complete darkness. This is the **dark current**.

**With light.**

1. Light falls on the diode and photons are absorbed, mainly in the depletion region but also in the neutral regions.
2. A photon of energy $h\nu\ge E_g$ lifts an electron from the valence band to the conduction band, leaving a hole. These electron-hole pairs are called **photocarriers**.
3. A pair created **in the depletion region** is separated at once by the field there: the electron drifts to the n side and the hole to the p side.
4. This transport produces a current in the external circuit in excess of the dark current, called the **photocurrent**.
5. Pairs created in the neutral regions diffuse slowly; many recombine before reaching the depletion region and contribute nothing.

![Photodiode biasing: light falls on the depletion region of a reverse-biased p-n junction, with ammeter measuring the reverse current I_s; photodiode symbols](/notes/cse/s1/physics/module-4/photodiode-circuit.webp)

**Cut-off wavelength.** Only photons with $h\nu\ge E_g$ can create pairs, so there is a longest wavelength the diode can detect:

$$
\lambda_c=\frac{1.24}{E_g\ (\text{eV})}\ \mu\text{m}
$$

For silicon ($E_g=1.1\ \text{eV}$), $\lambda_c\approx1.13\ \mu\text{m}$; for germanium ($0.66\ \text{eV}$), about $1.88\ \mu\text{m}$.

## V-I characteristic

![Photodiode characteristic: reverse current against reverse voltage for darkness and for 10,000 to 25,000 lux](/notes/cse/s1/physics/module-4/photodiode-vi.webp)

- The photocurrent always flows in the **reverse direction**, from n to p.
- With no light only the small dark current flows.
- Increasing the illumination increases the reverse current, in proportion to the light intensity.
- Once the reverse bias is more than a fraction of a volt, the current hardly depends on the voltage: each curve is almost flat.

Because the photocurrent is proportional to the incident light intensity, the reverse-biased diode can be used as a **photodetector**.

## Drawbacks of the p-n photodiode

1. The depletion region is only a small part of the diode's volume. Only photons absorbed there produce current; photons absorbed in the bulk of the diode are largely wasted.
2. The depletion region can be widened by increasing the reverse bias, but only up to a limit set by breakdown.
3. Electron-hole pairs generated in the bulk recombine before they can contribute to the current, and the slow diffusion of those that survive makes the response slow.

## The PIN photodiode

**Structure.** A **p-i-n** diode has a wide layer of **intrinsic** (pure or very lightly doped) semiconductor between the p and n regions. The intrinsic layer has very few free carriers, so under a modest reverse bias the depletion region spreads through the **whole intrinsic layer**. The region that collects light is therefore much wider.

![PIN photodiode structure: p region of width W_p, intrinsic region of width w and n region of width W_n, in a reverse-bias circuit](/notes/cse/s1/physics/module-4/pin-structure.webp)

![PIN diode under forward bias (narrow depletion region) and reverse bias (depletion region filling the intrinsic layer)](/notes/cse/s1/physics/module-4/pin-bias.webp)

**Working.** A photon with energy at least $E_g$ that reaches the wide depletion region excites an electron from the valence band to the conduction band, creating a free electron-hole pair. The high electric field across the intrinsic layer separates the carriers quickly and they drift to the contacts, producing a current in the external circuit. Because the intrinsic layer is wide, most photons are absorbed there and a much larger photocurrent is produced. A PIN photodiode is therefore **more sensitive** than a p-n photodiode.

**Advantages of the PIN photodiode**

1. The depletion region is wide and extends throughout the intrinsic region, so the reverse bias need not be increased to widen it.
2. The reverse bias required is small, of the order of $5\ \text{V}$.
3. As the depletion region is wide, most incident photons are absorbed in it, so the efficiency is high.
4. The dark current is small.
5. Carriers are collected by fast drift rather than slow diffusion, so the response is fast.

## p-n versus PIN photodiode

| | p-n photodiode | PIN photodiode |
| --- | --- | --- |
| Structure | p and n regions only | wide intrinsic layer between p and n |
| Depletion region | narrow | wide: fills the intrinsic layer |
| Photons collected | only those absorbed in the narrow depletion region | most incident photons |
| Sensitivity and efficiency | lower | higher |
| Response speed | slower (much diffusion) | faster (mostly drift) |
| Reverse bias needed to widen depletion region | large | small (about 5 V) |
| Dark current | larger | smaller |

## Two measures of performance (beyond the syllabus)

The **responsivity** $R=\dfrac{I_p}{P_{in}}$ (amperes of photocurrent per watt of light) and the **quantum efficiency** (electrons collected per incident photon), related by $\eta_q=R\times\dfrac{1.24}{\lambda(\mu\text{m})}$.

**Example.** A photodiode gives $5\ \mu\text{A}$ for $10\ \mu\text{W}$ of light at $850\ \text{nm}$. Then $R=0.5\ \text{A/W}$ and $\eta_q=0.5\times1.24/0.85=0.73$: 73 % of the photons produce an electron.

> **Watch out.** Photodiodes are operated in **reverse bias**, and the photocurrent is a **reverse** current. Solar cells (next page) are not biased at all: they generate their own voltage.

---

<!-- page 12 | Solar cells -->

# Solar cells

## The idea

A **solar cell** (photovoltaic cell) is a semiconductor p-n junction device that converts the energy of light, usually sunlight, directly into electrical energy. Unlike a photodiode it needs no external bias: it generates its own voltage, which depends on the intensity of the incident light. Materials used include silicon (by far the most common), selenium, GaAs, InAs and CdS.

## Construction

![Structure of a solar cell: metal grid on top, anti-reflection coating, thin n layer, depletion region, thick p-type base and bottom contact](/notes/cse/s1/physics/module-4/solar-cell-structure.webp)

- A **p-type** silicon chip forms the thick base.
- A **thin n-type layer** is grown or diffused on top, so that light can reach the junction just below the surface.
- The top surface has an **anti-reflection coating** (so that less light is reflected away) and a fine **metal grid** contact (a grid rather than a full sheet, so that light gets through).
- The bottom surface has a full **metal contact**.
- A load is connected between the top and bottom contacts.

## Working, step by step

1. **Absorption.** Photons with energy greater than $E_g$ are absorbed in the n and p regions and near the junction, creating **electron-hole pairs**.
2. **Diffusion to the junction.** Pairs created within about one diffusion length of the junction reach the **depletion region** before recombining.
3. **Separation.** The built-in electric field of the immobile ions in the depletion region separates each pair: **electrons are pushed into the n region and holes into the p region**. (Minority electrons in the p region are drawn into the n region, and minority holes in the n region into the p region.)
4. **Photo-emf.** Electrons accumulate on the n side and holes on the p side, so the n side becomes negative and the p side positive. This produces a potential difference across the cell, the **photo-voltage** or **photo-emf**.
5. **Current.** If a load is connected, the accumulated charges flow round the external circuit and deliver power. The power depends on the material, the light intensity and the load resistance.

## I-V characteristic

![Solar cell I-V curve with short-circuit current, open-circuit voltage and the maximum power point; the dashed curve is the power](/notes/cse/s1/physics/module-4/solar-iv-curve.webp)

- **Short-circuit current $I_{\text{SC}}$:** the current when the terminals are shorted (voltage zero). It is proportional to the light intensity.
- **Open-circuit voltage $V_{\text{OC}}$:** the voltage across the illuminated cell when no current is drawn (open circuit). For a silicon cell it is about $0.5$ to $0.6\ \text{V}$, and it increases only slowly (logarithmically) with intensity.
- Between them, the current stays nearly constant at about $I_{\text{SC}}$ until the voltage approaches $V_{\text{OC}}$, then drops steeply.
- The power delivered is $P=VI$. At both ends of the curve, open circuit and short circuit, the power is **zero**. In between it rises to a maximum at the **maximum power point**, with voltage $V_m$ and current $I_m$, at the "knee" of the curve. The load should be chosen so that the cell works at this point.

## Efficiency

> **Conversion efficiency.** The ratio of the maximum electrical output power to the light power falling on the cell:
>
> $$
> \eta=\frac{\text{maximum output electrical power}}{\text{input optical power}}=\frac{V_mI_m}{\text{light intensity}\times\text{area of the cell}}
> $$

Commercial silicon cells reach about 15 to 22 %. Losses come from photons with too little energy to create a pair, the excess energy of energetic photons lost as heat, reflection, recombination and resistance.

## Fill factor

$$
\text{FF}=\frac{\text{maximum output power}}{V_{\text{OC}}\times I_{\text{SC}}}=\frac{V_mI_m}{V_{\text{OC}}\,I_{\text{SC}}}
$$

The fill factor says what fraction the maximum power is of the product of open-circuit voltage and short-circuit current. On the graph it is how much of the dotted rectangle ($V_{\text{OC}}\times I_{\text{SC}}$) the shaded maximum-power rectangle ($V_m\times I_m$) fills. A squarer I-V curve gives a higher fill factor. Its value usually lies between **0.65 and 0.8**; the higher the fill factor, the greater the output power for the same $V_{\text{OC}}$ and $I_{\text{SC}}$.

**Example.** A silicon cell of area $100\ \text{cm}^2$ in sunlight of $1000\ \text{W/m}^2$ has $V_{\text{OC}}=0.6\ \text{V}$, $I_{\text{SC}}=3.0\ \text{A}$, and its maximum power point at $V_m=0.5\ \text{V}$, $I_m=2.8\ \text{A}$. Find the fill factor and the efficiency.

$$
\text{FF}=\frac{0.5\times2.8}{0.6\times3.0}=\frac{1.4}{1.8}=0.78
$$

$$
P_{in}=1000\times100\times10^{-4}=10\ \text{W}\qquad\eta=\frac{1.4}{10}=14\ \%
$$

## Stringing cells into modules, panels and arrays

One silicon cell gives only about $0.5\ \text{V}$ and a few amperes, so cells are connected together:

- Connecting cells in **series** adds their **voltages** (the current is the same through all).
- Connecting cells (or strings) in **parallel** adds their **currents** (the voltage is the same).

![From a single cell to a module (36 cells in series), a panel of modules, and an array of panels](/notes/cse/s1/physics/module-4/cells-to-array.webp)

| Level | What it is |
| --- | --- |
| **Cell** | a single p-n junction, about $0.5\ \text{V}$ |
| **Module** | cells connected in series and sealed in one frame; a typical module has **36 cells** in series, giving about $18\ \text{V}$ at the maximum power point (enough to charge a 12 V battery) |
| **Panel** | several modules mounted and wired together as one unit |
| **Array** | many panels connected in series (for a higher voltage) and in parallel (for a higher current) to give the power required |

**Example.** Each cell of a module has $V_m=0.5\ \text{V}$ and $I_m=3\ \text{A}$. (a) Find the output of a module of 36 cells in series. (b) How many such modules are needed for a $72\ \text{V}$, $2.16\ \text{kW}$ array, and how are they connected?

(a) Series cells add voltage: $36\times0.5=18\ \text{V}$ at $3\ \text{A}$, so the module gives $18\times3=54\ \text{W}$.

(b) For $72\ \text{V}$, put $72/18=4$ modules in series in each string; one string gives $4\times54=216\ \text{W}$. For $2160\ \text{W}$ we need $2160/216=10$ strings in parallel: **40 modules** in all, giving $72\ \text{V}$ at $30\ \text{A}$.

In practice a shaded cell in a series string limits the current of the whole string, so modules include **bypass diodes** that let current go round shaded cells.

## Advantages, disadvantages and applications

| Advantages | Disadvantages |
| --- | --- |
| does not use any fuel, so not dangerous | very delicate and brittle; can break into pieces |
| can be used for years with almost no maintenance cost | slow response compared with photodiodes, so not used as photodetectors |
| produces no atmospheric or noise pollution | needs a large area for useful power |
| | must be cleaned from time to time for maximum output |
| | output only while the light falls; storage is needed at night |

**Applications**

1. Power for satellites and rockets.
2. Telecommunications in remote and inaccessible areas.
3. Defence equipment, remote instrumentation and remote radars.
4. Rural electrification, water pumping, solar fencing, health care and ocean navigation aids.
5. Pocket calculators, watches, street lights and traffic signals.

## Photodiode versus solar cell

| Parameter | Photodiode | Solar cell |
| --- | --- | --- |
| Junction area | smaller | larger, as solar radiation must fall on a large area to give useful power |
| Biasing | a reverse bias voltage is applied externally | no voltage is applied: it generates its own |
| Size | small | large |
| Load capacity | smaller | greater |
| Application | used as a light sensor, to detect the presence of light | used as a transducer, to convert light energy into electrical energy |

> **Watch out.** Efficiency compares output power with the **light power falling on the cell** (intensity × area), not with $V_{\text{OC}}I_{\text{SC}}$. The fill factor is the ratio with $V_{\text{OC}}I_{\text{SC}}$. And remember to convert the area to square metres when the intensity is in $\text{W/m}^2$.

---

<!-- page 13 | Semiconductor laser -->

# The semiconductor laser

## What a laser needs

**LASER** stands for **L**ight **A**mplification by **S**timulated **E**mission of **R**adiation. Light can interact with matter in three ways:

![Laser principle: absorption, spontaneous emission and stimulated emission, and population inversion N2 > N1](/notes/cse/s1/physics/module-4/laser-principle.webp)

1. **Absorption.** An atom (or electron) in a lower level absorbs a photon and jumps to a higher level.
2. **Spontaneous emission.** An excited electron falls back on its own, at a random moment, emitting a photon in a random direction and with random phase. Light from lamps and LEDs is of this kind: incoherent.
3. **Stimulated emission.** A photon of the right energy passing an excited electron **triggers** it to fall, emitting a second photon **identical** to the first: same frequency, same phase, same direction and polarisation. One photon becomes two, two become four: the light is **amplified** and **coherent**.

Normally there are more electrons in the lower level than the upper one, so absorption beats stimulated emission. A laser needs three things:

| Requirement | Meaning | How a diode laser achieves it |
| --- | --- | --- |
| **Population inversion** | more electrons in the upper level than in the lower ($N_2>N_1$), so stimulated emission wins | heavy doping and a large forward current |
| **Pumping** | a source of energy that keeps the inversion going | the forward current itself: direct injection of carriers from a DC supply |
| **Optical feedback (resonator)** | mirrors that send the light back and forth through the active region, building up stimulated emission | the polished end faces of the crystal |

## The diode laser

A **semiconductor diode laser** is a specially made p-n junction diode that emits **coherent** light when forward biased. The first semiconductor laser was made in **1962** by R. N. Hall and his co-workers.

Silicon and germanium, used for ordinary diodes, are **indirect** band gap materials and produce only heat when electrons and holes recombine. A laser needs light, so it is made from a **direct** band gap material such as **GaAs**.

- A **homojunction** laser uses the same semiconductor on both sides of the junction, for example a GaAs laser. We study this one.
- A **heterojunction** laser uses different semiconductors on the two sides, for example GaAs on one side and GaAlAs on the other. The different materials confine the carriers and the light to a thin active layer, which lowers the threshold current enormously; nearly all practical diode lasers today are heterojunction lasers.

## Construction (GaAs homojunction laser)

![Construction of a GaAs homojunction laser: n+ GaAs, Zn-diffused p+ region, the thin active region at the junction, metal contacts, and laser output from a polished end face](/notes/cse/s1/physics/module-4/laser-construction.webp)

- A **heavily doped n-type GaAs** crystal, on top of which a **heavily doped p region** is formed by diffusing **zinc** atoms into it. The junction between them is the active region.
- The diode is tiny: typically $500\ \mu\text{m}\times100\ \mu\text{m}\times100\ \mu\text{m}$.
- The **top and bottom faces are metallised**, with metal contacts to pass current through the junction.
- The **front and rear end faces** are cleaved and polished **parallel to each other** and **perpendicular to the plane of the junction**, one fully reflecting and the other partially reflecting. Together they form the **optical resonator** (a Fabry-Perot cavity). Even an uncoated GaAs face reflects about 32 % of the light, because GaAs has a high refractive index (about 3.6).
- The two remaining **side faces are roughened**, so that light is not reflected back along those directions and lasing cannot occur sideways.
- The whole structure is packaged in a small case, usually with a heat sink.

## Working

1. **Heavy doping.** Because of the heavy doping, the n region has a very large number of electrons in its conduction band and the p region a very large number of holes in its valence band.
2. **Pumping by forward bias.** When the junction is forward biased, electrons from the n side and holes from the p side are **injected** into the narrow junction region in very high concentration. This is the pumping; it is done directly by the DC voltage source, by direct transfer of electrical energy.
3. **Population inversion.** The junction region now contains a large population of electrons in the conduction band and, at the same place, a large population of holes, which are empty states, in the valence band. Since a hole is the absence of an electron, there are more electrons in the high-energy conduction band than in the corresponding states of the low-energy valence band: a **population inversion**. The narrow region where this happens is the **inversion region** or **active region**.
4. **Spontaneous emission.** Chance recombination of electrons and holes produces **spontaneous** photons with energy $h\nu\approx E_g$, travelling in all directions. Below threshold, the diode simply behaves as an LED.
5. **Threshold and stimulated emission.** When the diode current reaches a **threshold value**, the gain from stimulated emission exceeds the losses. Spontaneous photons travelling **in the plane of the junction** stimulate conduction electrons to fall into the holes of the valence band, each emitting a photon identical to the stimulating one.
6. **Amplification in the resonator.** These photons are reflected back and forth between the polished end faces, passing through the active region again and again and stimulating more emission each time. Photons travelling in other directions leave the active region and are lost.
7. **Output.** A strong, coherent, monochromatic beam emerges through the partially reflecting face. For GaAs, $\lambda\approx\dfrac{1.24}{1.43}\ \mu\text{m}\approx0.87\ \mu\text{m}$ (near infrared).

Above threshold the light output rises steeply and linearly with current.

## Salient features

1. High efficiency: a large fraction of the electrical input becomes light.
2. Simple, compact and small in size.
3. Low input power and low operating voltage.
4. Output power can be controlled simply by controlling the junction current, so the light can be modulated at very high speed (useful for communication).
5. Can operate as a continuous-wave laser (heterojunction devices do so at room temperature).

Compared with gas and solid-state lasers, the beam is more divergent and the spectrum somewhat wider.

## Applications

- Optical fibre communication (the main light source).
- CD, DVD and Blu-ray players and recorders.
- Laser printers and barcode scanners.
- Laser pointers and range finders.
- Medical instruments and laser surgery.
- Pumping other lasers.

**Example.** A diode laser emits $5\ \text{mW}$ at $850\ \text{nm}$. How many photons does it emit per second?

$$
E_{photon}=\frac{hc}{\lambda}=\frac{6.626\times10^{-34}\times3\times10^{8}}{850\times10^{-9}}=2.34\times10^{-19}\ \text{J}\qquad N=\frac{5\times10^{-3}}{2.34\times10^{-19}}=2.1\times10^{16}\ \text{per second}
$$

## LED versus laser diode

| | LED | Laser diode |
| --- | --- | --- |
| Emission | spontaneous | stimulated (above threshold) |
| Light | incoherent | coherent |
| Spectrum | broad (tens of nm) | very narrow |
| Beam | spreads widely | narrow, directional |
| Population inversion | not needed | essential |
| Optical resonator | none | polished end faces |
| Threshold current | none: light at any forward current | light output rises sharply above threshold |
| Uses | displays, lighting, short-distance links | long-distance fibre links, optical discs, printers |

> **Watch out.** An LED and a laser diode both emit light from recombination at a forward-biased junction. The difference is that the laser has **population inversion**, an **optical resonator** and works above a **threshold current**, so its light is stimulated and coherent; an LED's light is spontaneous and incoherent.

---

<!-- page 14 | Numerical problems -->

# Numerical problems

These are the problems from the lecture notes, worked in full and re-checked.

**Problem 1.** A half-wave rectifier is used to supply $50\ \text{V}$ DC to a resistive load of $800\ \Omega$. The diode has a forward resistance of $25\ \Omega$. Find the peak AC input voltage required.

Given $V_{dc}=50\ \text{V}$, $R_L=800\ \Omega$, $r_f=25\ \Omega$. Since $V_{dc}=I_{dc}R_L$ with $I_{dc}=I_m/\pi$ and $I_m=V_m/(r_f+R_L)$:

$$
V_{dc}=\frac{I_m}{\pi}R_L=\frac{V_m}{\pi(r_f+R_L)}R_L
\qquad\Rightarrow\qquad
V_m=\frac{\pi V_{dc}(r_f+R_L)}{R_L}=\frac{\pi\times50\times825}{800}=\mathbf{162\ \text{V}}
$$

**Problem 2.** A half-wave rectifier is connected to a step-down transformer whose output is $22\ \text{V}$ (rms), $50\ \text{Hz}$. The load resistance is $900\ \Omega$ and the diode resistance $100\ \Omega$. Find (1) the average load current, (2) the rms load current, (3) the DC output voltage.

$$
V_m=22\sqrt2=31.11\ \text{V}\qquad I_m=\frac{V_m}{r_f+R_L}=\frac{31.11}{1000}=31.11\ \text{mA}
$$

1. $I_{dc}=\dfrac{I_m}{\pi}=\mathbf{9.90\ \text{mA}}$
2. $I_{rms}=\dfrac{I_m}{2}=\mathbf{15.56\ \text{mA}}$
3. $V_{dc}=I_{dc}R_L=9.90\times10^{-3}\times900=\mathbf{8.91\ \text{V}}$

**Problem 3.** In a full-wave single-phase (centre-tap) rectifier, the internal resistance of each diode is $5\ \Omega$, the transformer secondary voltage from the centre tap to each anode is $30\ \text{V}$ rms, and the load resistance is $1995\ \Omega$. Find the mean load current, the rms load current and the DC output power.

$$
V_m=30\sqrt2=42.43\ \text{V}\qquad I_m=\frac{V_m}{r_f+R_L}=\frac{42.43}{5+1995}=21.21\ \text{mA}
$$

- Mean load current: $I_{dc}=\dfrac{2I_m}{\pi}=\mathbf{13.5\ \text{mA}}$
- RMS load current: $I_{rms}=\dfrac{I_m}{\sqrt2}=\mathbf{15.0\ \text{mA}}$
- DC output voltage: $V_{dc}=I_{dc}R_L=13.5\times10^{-3}\times1995=\mathbf{26.9\ \text{V}}$
- DC output power: $P_{dc}=I_{dc}^2R_L=(13.5\times10^{-3})^2\times1995=\mathbf{0.364\ \text{W}}$

> **Note on the source.** The lecture notes gave $V_{dc}=29.93\ \text{V}$; $13.5\ \text{mA}\times1995\ \Omega$ is $26.9\ \text{V}$. They also did not compute the DC output power, which the question asks for.

**Problem 4.** A half-wave rectifier has $V_i=50\sin\omega t$ volts, $R_L=90\ \Omega$ and $r_f=10\ \Omega$. Find (1) the average load current, (2) the DC output voltage, (3) the PIV.

$$
V_m=50\ \text{V}\qquad I_m=\frac{50}{10+90}=0.5\ \text{A}
$$

1. $I_{dc}=\dfrac{I_m}{\pi}=\mathbf{0.159\ \text{A}}$
2. $V_{dc}=I_{dc}R_L=0.159\times90=\mathbf{14.3\ \text{V}}$
3. $\text{PIV}=V_m=\mathbf{50\ \text{V}}$

**Problem 5.** The forward resistance of each diode in a centre-tap full-wave rectifier is $16\ \Omega$. The transformer secondary voltage from the centre tap to each end is $40\ \text{V}$ rms and the load resistance is $900\ \Omega$. Find (1) the average load current, (2) the rms load current, (3) the efficiency.

$$
V_m=40\sqrt2=56.57\ \text{V}\qquad I_m=\frac{56.57}{16+900}=61.76\ \text{mA}
$$

1. $I_{dc}=\dfrac{2I_m}{\pi}=\mathbf{39.3\ \text{mA}}$
2. $I_{rms}=\dfrac{I_m}{\sqrt2}=\mathbf{43.7\ \text{mA}}$
3. $\eta=\dfrac{I_{dc}^2R_L}{I_{rms}^2(r_f+R_L)}=\dfrac{(39.3)^2\times900}{(43.7)^2\times916}=\mathbf{0.796=79.6\ \%}$

Check with the formula: $\dfrac{0.8106}{1+16/900}=0.796$. $\checkmark$

**Problem 6.** A light-emitting diode emits light of wavelength $410\ \text{nm}$ when forward biased. What is the band gap of the material of the diode?

$$
E_g=\frac{1.24}{\lambda\ (\mu\text{m})}=\frac{1.24}{0.410}=\mathbf{3.02\ \text{eV}}
$$

(violet light, from a wide band gap material such as InGaN).

> **Watch out.** Always convert rms to peak first ($V_m=\sqrt2\,V_{rms}$), and include the diode resistance in $I_m=V_m/(r_f+R_L)$ ($2r_f$ for a bridge). Using the rms voltage directly is the most common error in these problems.

---

<!-- page 15 | Practice and formula sheet -->

# Practice questions and formula sheet

## Practice questions

1. A full-wave rectifier gives $I_{dc}=20\ \text{mA}$. What is $I_m$, and what is $I_{rms}$?
2. Find the wavelength emitted by a GaAs LED with $E_g=1.43\ \text{eV}$. In which part of the spectrum is it?
3. A solar cell of area $4\ \text{cm}^2$ receives light of intensity $1000\ \text{W/m}^2$. At its maximum power point $V_m=0.45\ \text{V}$ and $I_m=100\ \text{mA}$; also $V_{\text{OC}}=0.6\ \text{V}$ and $I_{\text{SC}}=110\ \text{mA}$. Find the efficiency and the fill factor.
4. Find the ripple factor of a half-wave rectifier from its form factor.
5. A Zener regulator has $V_i=15\ \text{V}$, $V_Z=6\ \text{V}$, $R_s=300\ \Omega$. Find the Zener current with no load, and the power it dissipates.
6. What is the longest wavelength a silicon photodiode ($E_g=1.1\ \text{eV}$) can detect?

## Answers

1. $I_m=\dfrac{\pi I_{dc}}{2}=31.4\ \text{mA}$, and $I_{rms}=\dfrac{I_m}{\sqrt2}=22.2\ \text{mA}$.
2. $\lambda=\dfrac{1.24}{1.43}=0.867\ \mu\text{m}=867\ \text{nm}$: **infrared**.
3. Input power $=1000\times4\times10^{-4}=0.4\ \text{W}$. Output $=0.45\times0.1=0.045\ \text{W}$, so $\eta=11.3\ \%$. $\text{FF}=\dfrac{0.045}{0.6\times0.11}=0.68$.
4. Form factor $=\pi/2=1.571$, so $\gamma=\sqrt{1.571^2-1}=1.21$.
5. With no load all of $I_s$ goes through the Zener: $I_Z=\dfrac{15-6}{300}=30\ \text{mA}$, $P_Z=6\times0.03=0.18\ \text{W}$.
6. $\lambda_c=\dfrac{1.24}{1.1}=1.13\ \mu\text{m}$.

## Short questions to revise

1. Explain the working of a half-wave rectifier and derive its efficiency and ripple factor.
2. Draw the centre-tap full-wave rectifier and explain its working with waveforms. Why is its PIV $2V_m$?
3. Explain the working of a bridge rectifier. Compare it with the centre-tap rectifier.
4. Define ripple factor, form factor and rectifier efficiency.
5. Distinguish between avalanche and Zener breakdown.
6. Draw the V-I characteristic of a Zener diode and explain how it regulates voltage.
7. Explain the V-I characteristic of a tunnel diode using band diagrams. What is negative resistance?
8. Why do silicon diodes not emit light, while GaAs diodes do?
9. Compare p-n and PIN photodiodes.
10. Explain the working of a solar cell. Define fill factor and efficiency, and explain how cells are connected to form a panel.
11. Describe the construction and working of a semiconductor laser. How does it differ from an LED?

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
| Form factor | 1.57 | 1.11 | 1.11 |
| PIV | $V_m$ | $2V_m$ | $V_m$ |

| | |
| --- | --- |
| Efficiency | $\eta=\dfrac{I_{dc}^2R_L}{I_{rms}^2(r_f+R_L)}$ |
| Ripple factor | $\gamma=\sqrt{\dfrac{I_{rms}^2}{I_{dc}^2}-1}=\sqrt{(\text{form factor})^2-1}$ |
| DC output voltage | $V_{dc}=I_{dc}R_L$ |
| Peak from rms | $V_m=\sqrt2\,V_{rms}$ |
| Capacitor filter (full-wave) | $\gamma\approx\dfrac{1}{4\sqrt3\,fCR_L}$ |

### Zener regulator

| | |
| --- | --- |
| Series current | $I_s=\dfrac{V_i-V_Z}{R_s}$ |
| Load and Zener currents | $I_L=\dfrac{V_Z}{R_L}$, $\ I_Z=I_s-I_L$ |
| Maximum Zener current | $I_{Z\max}=\dfrac{P_{Z\max}}{V_Z}$ |
| Limits on $R_s$ | $\dfrac{V_{i\max}-V_Z}{I_{Z\max}}\le R_s\le\dfrac{V_{i\min}-V_Z}{I_{L\max}+I_{Z\min}}$ |

### Photonic devices

| | |
| --- | --- |
| LED wavelength | $\lambda=\dfrac{hc}{E_g}=\dfrac{1.24}{E_g\ (\text{eV})}\ \mu\text{m}$ |
| Photodiode cut-off | $\lambda_c=\dfrac{1.24}{E_g\ (\text{eV})}\ \mu\text{m}$ |
| Solar cell efficiency | $\eta=\dfrac{V_mI_m}{\text{intensity}\times\text{area}}$ |
| Fill factor | $\text{FF}=\dfrac{V_mI_m}{V_{\text{OC}}I_{\text{SC}}}$ |
| Cells in series / parallel | voltages add / currents add |
| Photons per second | $N=\dfrac{P}{hc/\lambda}$ |
