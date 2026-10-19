<!-- page 1 | Electromagnetic induction: Faraday's laws and Lenz's law -->

## Electromagnetic induction: Faraday's laws and Lenz's law

### Syllabus: Electromagnetic Induction

- Faraday's laws, Lenz's law
- Statically induced and dynamically induced emf
- Self-inductance and mutual inductance, coefficient of coupling *(numerical problems not needed)*

### Concept of Electromagnetic Induction

**Electromagnetic Induction**

Electromagnetic induction is the phenomenon in which an electromotive force (emf) is induced in a conductor or a coil whenever the magnetic flux linking with it changes. This phenomenon was discovered by Michael Faraday in 1831 and forms the operating principle of generators, transformers, and induction motors.

**Magnetic Flux Linkage ($\psi$)**

If a coil has $N$ turns and a magnetic flux $\phi$ (in webers, Wb) passes through each turn, the total **flux linkage** $\psi$ is the product of the number of turns and the flux linking each turn:

$$
\psi = N\phi \quad \text{(in weber-turns, Wb-turns)}
$$

### Faraday's Laws of Electromagnetic Induction

Faraday summarized the principles of electromagnetic induction into two fundamental laws:

**Faraday's First Law**

Whenever the magnetic flux linking a closed circuit or conductor changes, an electromotive force (emf) is induced in the conductor. If the conductor forms part of a closed circuit, an induced current flows through it for as long as the change in flux continues.

**Faraday's Second Law**

The magnitude of the induced emf in a coil is directly proportional to the rate of change of magnetic flux linkages with the coil.

If a coil has $N$ turns and the magnetic flux linking it changes from $\phi_1$ to $\phi_2$ in a small time interval $dt$, the magnitude of the induced emf $e$ in volts is given in differential form by:

$$
|e| = \frac{d\psi}{dt} = N \frac{d\phi}{dt} \quad \text{(volts)}
$$

If the flux changes uniformly from $\phi_1$ to $\phi_2$ in time $t$ seconds:

$$
|e| = N \frac{\phi_2 - \phi_1}{t} \quad \text{(volts)}
$$

### Lenz's Law

**Lenz's Law**

Proposed by Heinrich Lenz in 1834, Lenz's law states that the direction of an electromagnetically induced emf (and hence the induced current in a closed circuit) is always such that it opposes the very cause that produces it—namely, the change in magnetic flux.

Incorporating Lenz's law into Faraday's second law gives the complete mathematical expression for induced emf:

$$
e = -N \frac{d\phi}{dt} \quad \text{(volts)}
$$

Here, the **negative sign** indicates that the induced emf sets up a current whose magnetic field opposes the change in the original magnetic flux $\phi$.

**Lenz's Law and Conservation of Energy**

Lenz's law is a direct consequence of the **law of conservation of energy**:

1. Suppose the North pole of a permanent magnet is moved toward a closed coil. The magnetic flux linking the coil increases.
2. By Lenz's law, the induced current in the coil flows in a direction (counter-clockwise when viewed from the magnet side) that makes the near face of the coil behave like a **North pole**.
3. The two North poles repel each other. Therefore, external mechanical work must be done against this force of repulsion to push the magnet toward the coil.
4. This mechanical work done by the external agent is converted directly into electrical energy (and eventually dissipated as heat $I^2Rt$ in the coil). If the induced current aided the motion instead of opposing it, the magnet would accelerate on its own without any energy input, violating conservation of energy.

### Types of Induced EMF

An emf can be induced in a conductor by changing the flux linkage in two fundamental ways:

```
                   Induced EMF
                        |
        +---------------+---------------+
        |                               |
Dynamically Induced EMF        Statically Induced EMF
(Conductor moves OR            (Both conductor and magnet
 field moves physically)        are stationary; flux magnitude
                                varies with time)
                                        |
                        +---------------+---------------+
                        |                               |
               Self-Induced EMF               Mutually Induced EMF
               (In the same coil)             (In a neighboring coil)
```

### Dynamically Induced EMF

**Dynamically Induced EMF**

When the magnetic field is stationary (constant in time) and the conductor moves across the magnetic flux lines—or when the conductor is stationary and the magnetic field system moves physically past it—the emf induced in the conductor is called **dynamically induced emf** (or motional emf). Examples include DC generators and AC synchronous generators (alternators).

**Expression for Dynamically Induced EMF:**

1. Consider a straight conductor of active length $l$ meters moving with a uniform velocity $v$ m/s in a uniform magnetic field of flux density $B$ tesla ($\text{Wb/m}^2$).
2. Let the conductor move in a direction making an angle $\theta$ with the direction of the magnetic field lines.
3. In a small time interval $dt$, the conductor moves a distance $dx = v \, dt$. The component of displacement perpendicular to the magnetic field is $dx_{\perp} = v \, dt \sin\theta$.
4. The area swept by the conductor perpendicular to the flux lines in time $dt$ is:
   $$dA = l \cdot v \sin\theta \, dt$$
5. Therefore, the magnetic flux cut by the conductor in time $dt$ is:
   $$d\phi = B \cdot dA = B l v \sin\theta \, dt$$
6. By Faraday's law, the magnitude of the induced emf in the single conductor is:
   $$e = \frac{d\phi}{dt} = B l v \sin\theta \quad \text{(volts)}$$

- **Case 1 (Conductor moves parallel to the field, $\theta = 0^\circ$):** $\sin 0^\circ = 0 \implies e = 0\text{ V}$. No flux lines are cut.
- **Case 2 (Conductor moves perpendicular to the field, $\theta = 90^\circ$):** $\sin 90^\circ = 1 \implies e = Blv\text{ V}$ (maximum induced emf).

**Fleming's Right-Hand Rule**

The direction of dynamically induced emf is found using **Fleming's Right-Hand Rule**: Hold the thumb, forefinger, and middle finger of the right hand mutually perpendicular to one another. If the **Forefinger** points in the direction of the magnetic **Field** (North to South), and the **Thumb** points in the direction of **Motion** of the conductor (relative to the field), then the **Middle finger** points in the direction of the **Induced EMF (or current)**.

### Statically Induced EMF

**Statically Induced EMF**

When both the conductor (coil) and the magnetic field system are completely stationary, and the magnetic flux linking the coil is changed purely by varying the magnitude of the electric current producing the flux, the induced emf is called **statically induced emf** (or transformer emf). An example is the electrical transformer.

Statically induced emf is further classified into two types:
1. **Self-induced emf:** Induced in a coil due to the change of flux produced by its own current.
2. **Mutually induced emf:** Induced in a coil due to the change of flux produced by a current flowing in a neighboring magnetically coupled coil.

### Comparison: Dynamically vs. Statically Induced EMF

| Feature | Dynamically Induced EMF | Statically Induced EMF |
| --- | --- | --- |
| **Physical movement** | Relative physical motion exists between conductor and magnetic field | Both conductor and magnetic field system remain stationary |
| **Cause of flux change** | Conductor physically cuts across magnetic flux lines | Magnitude of current producing the flux varies with time |
| **Formula** | $e = Blv\sin\theta$ | $e = -N \frac{d\phi}{dt}$ |
| **Rule for direction** | Fleming's Right-Hand Rule | Lenz's Law |
| **Practical example** | DC generator, AC alternator | Transformer |

### Summary

- **Faraday's First Law:** A changing magnetic flux linking a conductor induces an emf in it.
- **Faraday's Second Law & Lenz's Law:** $e = -N \frac{d\phi}{dt}$, where the negative sign shows opposition to the change in flux.
- **Dynamically induced emf:** $e = Blv\sin\theta$, produced by relative motion between conductor and field.
- **Statically induced emf:** Produced by time-varying current in a stationary coil system.

---

<!-- page 2 | Self-inductance, mutual inductance and coefficient of coupling -->

## Self-inductance, mutual inductance and coefficient of coupling

### Self-Inductance ($L$)

**Self-Induced EMF**

When a time-varying current $i$ flows through a coil of $N$ turns, it sets up a time-varying magnetic flux $\phi$ through the coil itself. By Faraday's law, this changing flux induces an emf in the very same coil that opposes the change in current. This emf is called **self-induced emf**.

**Self-Inductance (Coefficient of Self-Induction)**

**Self-inductance** ($L$) is the property of a coil by virtue of which it opposes any change in the magnitude or direction of electric current flowing through it by inducing an emf in itself. The SI unit of inductance is the **henry (H)**.

### Expressions for Self-Inductance

Assuming the magnetic core has constant permeability (no magnetic saturation), the flux $\phi$ is directly proportional to the current $i$:

1. **In terms of flux linkage per unit current:**
   $$\psi = N\phi \propto i \implies N\phi = L i$$
   $$L = \frac{N\phi}{i} \quad \text{(henrys, H)}$$
   *Definition:* A coil has a self-inductance of 1 henry if a current of 1 ampere flowing through it produces a flux linkage of 1 weber-turn.

2. **In terms of self-induced emf:**
   By Faraday's law, the magnitude of self-induced emf is:
   $$e_L = N \frac{d\phi}{dt} = \frac{d}{dt}(N\phi) = \frac{d}{dt}(Li)$$
   Since $L$ is constant for an air core or unsaturated magnetic core:
   $$e_L = L \frac{di}{dt} \quad \text{(volts)}$$
   *(Taking opposition into account, $e_L = -L \frac{di}{dt}$.)*
   *Definition:* A coil has a self-inductance of 1 henry if a current changing at the rate of 1 ampere per second induces an emf of 1 volt in the coil.

3. **In terms of physical dimensions and magnetic reluctance:**
   From magnetic circuit theory, flux $\phi = \frac{\text{MMF}}{\text{Reluctance}} = \frac{Ni}{\mathcal{S}}$, where reluctance $\mathcal{S} = \frac{l}{\mu_0 \mu_r A}$.
   Substituting $\phi$ into $L = \frac{N\phi}{i}$:
   $$L = \frac{N}{i} \left(\frac{Ni}{\mathcal{S}}\right) = \frac{N^2}{\mathcal{S}}$$
   $$L = \frac{\mu_0 \mu_r A N^2}{l} \quad \text{(henrys, H)}$$
   where $N$ is the number of turns, $A$ is the cross-sectional area of the core ($\text{m}^2$), $l$ is the mean length of the magnetic path ($\text{m}$), $\mu_0 = 4\pi \times 10^{-7}\text{ H/m}$, and $\mu_r$ is the relative permeability of the core.

### Mutual Inductance ($M$)

**Mutually Induced EMF**

Consider two coils, Coil 1 (having $N_1$ turns) and Coil 2 (having $N_2$ turns), placed close to each other so that a portion of the magnetic flux produced by one coil links with the other:

```
   i1 -->  +--------+           +--------+
           | Coil 1 |  Phi_12   | Coil 2 |  --> Induced emf e_M2
           | (N1)   | ========> | (N2)   |
           +--------+           +--------+
```

When a time-varying current $i_1$ flows in Coil 1, it produces a total flux $\phi_1$. A part of this flux, denoted $\phi_{12}$, links with Coil 2. As $i_1$ changes, $\phi_{12}$ changes, inducing an emf $e_{M2}$ in Coil 2. This is called **mutually induced emf**.

**Mutual Inductance (Coefficient of Mutual Induction)**

**Mutual inductance** ($M$) between two coils is defined as the property by which a change of current in one coil induces an emf in the neighboring coil. Its SI unit is also the **henry (H)**.

### Expressions for Mutual Inductance

1. **In terms of mutual flux linkage per unit current:**
   The flux linkage in Coil 2 due to current $i_1$ in Coil 1 is $N_2 \phi_{12}$, which is proportional to $i_1$:
   $$N_2 \phi_{12} = M i_1 \implies M = \frac{N_2 \phi_{12}}{i_1} \quad \text{(H)}$$
   Similarly, if current $i_2$ flows in Coil 2 and produces flux $\phi_{21}$ linking Coil 1:
   $$M = \frac{N_1 \phi_{21}}{i_2} \quad \text{(H)}$$
   For a linear (unsaturated) magnetic medium, $M_{12} = M_{21} = M$.

2. **In terms of mutually induced emf:**
   By Faraday's second law, the magnitude of mutually induced emf in Coil 2 when current $i_1$ changes in Coil 1 is:
   $$e_{M2} = N_2 \frac{d\phi_{12}}{dt} = \frac{d}{dt}(N_2 \phi_{12}) = \frac{d}{dt}(M i_1)$$
   $$e_{M2} = M \frac{di_1}{dt} \quad \text{(volts)}$$
   *Definition:* Two coils have a mutual inductance of 1 henry if a current changing at the rate of 1 ampere per second in one coil induces an emf of 1 volt in the other coil.

3. **In terms of magnetic circuit parameters:**
   If both coils are wound on the same core of reluctance $\mathcal{S} = \frac{l}{\mu_0 \mu_r A}$ and all the flux of Coil 1 links Coil 2 ($\phi_{12} = \phi_1 = \frac{N_1 i_1}{\mathcal{S}}$):
   $$M = \frac{N_2}{i_1}\left(\frac{N_1 i_1}{\mathcal{S}}\right) = \frac{N_1 N_2}{\mathcal{S}} = \frac{\mu_0 \mu_r A N_1 N_2}{l} \quad \text{(H)}$$

### Coefficient of Coupling ($k$)

**Coefficient of Coupling**

The **coefficient of coupling** ($k$) between two magnetically coupled coils is defined as the fraction of the total magnetic flux produced by one coil that actually links with the second coil. It is a dimensionless number between $0$ and $1$ ($0 \le k \le 1$).

**Derivation of $M = k\sqrt{L_1 L_2}$:**

1. Let current $i_1$ in Coil 1 ($N_1$ turns) produce total flux $\phi_1$. The self-inductance of Coil 1 is:
   $$L_1 = \frac{N_1 \phi_1}{i_1} \quad \text{--- (Equation 1)}$$
2. If $k$ is the coefficient of coupling, the flux linking Coil 2 is $\phi_{12} = k \phi_1$. Therefore, the mutual inductance is:
   $$M = \frac{N_2 \phi_{12}}{i_1} = \frac{N_2 (k \phi_1)}{i_1} \quad \text{--- (Equation 2)}$$
3. Similarly, let current $i_2$ in Coil 2 ($N_2$ turns) produce total flux $\phi_2$. The self-inductance of Coil 2 is:
   $$L_2 = \frac{N_2 \phi_2}{i_2} \quad \text{--- (Equation 3)}$$
4. A fraction $k$ of $\phi_2$ links with Coil 1, so $\phi_{21} = k \phi_2$. Expressing $M$ from Coil 2 to Coil 1:
   $$M = \frac{N_1 \phi_{21}}{i_2} = \frac{N_1 (k \phi_2)}{i_2} \quad \text{--- (Equation 4)}$$
5. Multiplying Equation 2 and Equation 4 together:
   $$M \times M = \left(\frac{k N_2 \phi_1}{i_1}\right) \left(\frac{k N_1 \phi_2}{i_2}\right) = k^2 \left(\frac{N_1 \phi_1}{i_1}\right) \left(\frac{N_2 \phi_2}{i_2}\right)$$
6. Substituting $L_1$ and $L_2$ from Equations 1 and 3:
   $$M^2 = k^2 L_1 L_2$$
   $$M = k \sqrt{L_1 L_2} \quad \Longleftrightarrow \quad k = \frac{M}{\sqrt{L_1 L_2}}$$

**Special Cases of Coupling:**
- **Tightly coupled coils ($k \approx 1$):** Nearly 100% of the flux of one coil links the other (e.g., transformer windings wound on a common iron core, where $k \approx 0.98\text{ to }0.99$). For ideal coupling ($k = 1$), $M_{\max} = \sqrt{L_1 L_2}$.
- **Loosely coupled coils ($k < 0.5$):** Only a small fraction of flux links the second coil (e.g., air-core radio-frequency coils separated in space).
- **Magnetically isolated coils ($k = 0$):** Coils are placed far apart or perpendicular to each other so that $\phi_{12} = 0$ and $M = 0$.

### Comparison: Self-Inductance vs. Mutual Inductance

| Parameter | Self-Inductance ($L$) | Mutual Inductance ($M$) |
| --- | --- | --- |
| **Number of coils** | Associated with a single coil | Associated with a pair of magnetically coupled coils |
| **Flux linkage formula** | $L = \frac{N\phi}{i}$ | $M = \frac{N_2 \phi_{12}}{i_1} = \frac{N_1 \phi_{21}}{i_2}$ |
| **Induced EMF formula** | $e_L = L \frac{di}{dt}$ | $e_{M2} = M \frac{di_1}{dt}$ |
| **Physical formula** | $L = \frac{N^2}{\mathcal{S}} = \frac{\mu_0 \mu_r A N^2}{l}$ | $M = \frac{k N_1 N_2}{\mathcal{S}} = k\sqrt{L_1 L_2}$ |

### Summary

- **Self-inductance:** $L = \frac{N\phi}{i} = \frac{N^2}{\mathcal{S}}$, and self-induced emf $e_L = L\frac{di}{dt}$.
- **Mutual inductance:** $M = \frac{N_2 \phi_{12}}{i_1}$, and mutually induced emf $e_{M2} = M\frac{di_1}{dt}$.
- **Coefficient of coupling:** $k = \frac{\phi_{12}}{\phi_1} = \frac{M}{\sqrt{L_1 L_2}}$, with $0 \le k \le 1$.

---

<!-- page 3 | Alternating current fundamentals: Generation and waveform representation -->

## Alternating current fundamentals: Generation and waveform representation

### Syllabus: Alternating Current Fundamentals

- Generation of alternating voltages
- Representation of sinusoidal waveforms: frequency, period, average value, RMS value and form factor - numerical problems

### Alternating Quantity vs. Direct Quantity

- **Direct Current (DC):** An electric current or voltage whose magnitude and direction (polarity) remain constant with time (e.g., output of a storage battery).
- **Alternating Current (AC):** An electric current or voltage whose magnitude changes continuously with time and whose direction reverses periodically at regular intervals. The most standard and widely used alternating waveform is the **sinusoidal waveform** (sine wave).

### Generation of Alternating Voltage

An alternating voltage is generated based on **Faraday's law of electromagnetic induction** either by rotating a rectangular coil with constant angular velocity inside a uniform stationary magnetic field, or by rotating a magnetic field inside a stationary set of coils (as in large commercial alternators).

```
      N-Pole                     S-Pole
     +------+       (b)         +------+
     |      |        o          |      |
     |      |       /           |      |
     |  B   |  --->  O  omega   |  B   |
     |      |       /           |      |
     |      |      o            |      |
     +------+      (a)          +------+
            Axis of coil rotation
```

**Derivation of the Sinusoidal EMF Equation:**

1. Consider a rectangular coil of $N$ turns and cross-sectional area $A\text{ m}^2$ placed in a uniform magnetic field of flux density $B$ tesla ($\text{Wb/m}^2$).
2. Let the coil rotate counter-clockwise at a uniform angular velocity of $\omega$ radians per second ($\text{rad/s}$).
3. At time $t = 0$, assume the plane of the coil is perpendicular to the magnetic field lines (i.e., the normal to the coil plane is parallel to $\vec{B}$, so angle $\theta = 0$). At this instant, the magnetic flux passing through the coil is maximum:
   $$\Phi_m = B \cdot A \quad \text{(webers)}$$
4. After time $t$ seconds, the coil has rotated through an angle $\theta = \omega t$ radians. The component of magnetic flux perpendicular to the plane of the coil at instant $t$ is:
   $$\phi(t) = B A \cos\theta = \Phi_m \cos(\omega t)$$
5. By Faraday's law of electromagnetic induction, the instantaneous emf $e$ induced in the coil of $N$ turns is:
   $$e = -N \frac{d\phi}{dt} = -N \frac{d}{dt} \left(\Phi_m \cos\omega t\right)$$
   $$e = -N \Phi_m (-\omega \sin\omega t) = \omega N \Phi_m \sin(\omega t)$$
6. The induced emf reaches its maximum (peak) value $E_m$ when $\sin(\omega t) = 1$, i.e., when $\theta = \omega t = 90^\circ$ (at this position, the plane of the coil is parallel to the magnetic field lines and the coil sides cut the flux lines at maximum rate):
   $$E_m = \omega N \Phi_m = 2\pi f N B A \quad \text{(volts)}$$
7. Substituting $E_m$ gives the standard equation for instantaneous alternating emf:
   $$e(t) = E_m \sin(\omega t) = E_m \sin\theta \quad \text{(volts)}$$

### Key Terminology of Sinusoidal Waveforms

A general sinusoidal voltage or current is written as:

$$
v(t) = V_m \sin(\omega t + \phi) \quad \text{or} \quad i(t) = I_m \sin(\omega t + \phi)
$$

1. **Instantaneous Value ($v$ or $i$):** The value of an alternating quantity at any particular instant of time $t$. It is denoted by lowercase letters ($e, v, i$).
2. **Maximum Value / Peak Value / Amplitude ($V_m$ or $I_m$):** The highest positive or negative value attained by an alternating quantity during one half-cycle. The **peak-to-peak value** is $V_{p-p} = 2V_m$.
3. **Cycle:** One complete set of positive and negative values of an alternating quantity before it repeats itself. One complete cycle corresponds to $360^\circ$ or $2\pi$ electrical radians.
4. **Time Period ($T$):** The time taken in seconds by an alternating quantity to complete one full cycle.
5. **Frequency ($f$):** The number of cycles completed per second. Its SI unit is **hertz (Hz)** (or cycles/second).
   $$f = \frac{1}{T} \quad \text{and} \quad T = \frac{1}{f}$$
   *(In India, the standard AC power supply frequency is $f = 50\text{ Hz}$, giving $T = \frac{1}{50} = 0.02\text{ s} = 20\text{ ms}$.)*
6. **Angular Frequency ($\omega$):** The rate of change of angle in radians per second. Since one cycle equals $2\pi$ radians in time $T$:
   $$\omega = \frac{2\pi}{T} = 2\pi f \quad \text{(rad/s)}$$
7. **Electrical Angle vs. Mechanical Angle:** In an AC machine having $P$ magnetic poles, one complete mechanical revolution ($360^\circ$ mechanical) produces $P/2$ complete electrical cycles. Therefore:
   $$\theta_{\text{electrical}} = \frac{P}{2} \theta_{\text{mechanical}} \quad \text{and} \quad f = \frac{PN}{120}$$
   where $N$ is the rotational speed in revolutions per minute (rpm).

### Worked Example 1

**Problem:** A rectangular coil of $200$ turns having dimensions $30\text{ cm} \times 20\text{ cm}$ is rotated at a constant speed of $1500\text{ rpm}$ in a uniform magnetic field of flux density $0.1\text{ T}$. Calculate:
(a) Frequency and time period of the generated voltage,
(b) Maximum value of induced emf,
(c) Equation of the instantaneous emf, and
(d) Instantaneous emf at $t = 2\text{ ms}$ from the start of the cycle.

**Solution:**

1. **Identify given data:**
   - Number of turns, $N = 200$
   - Area of coil, $A = 0.30\text{ m} \times 0.20\text{ m} = 0.06\text{ m}^2$
   - Speed, $n = 1500\text{ rpm}$ (for a basic 2-pole field, $1\text{ rev} = 1\text{ cycle}$)
   - Flux density, $B = 0.1\text{ T}$

2. **Calculate frequency ($f$) and time period ($T$):**
   $$f = \frac{n}{60} = \frac{1500}{60} = 25\text{ Hz}$$
   $$T = \frac{1}{f} = \frac{1}{25} = 0.04\text{ s} = 40\text{ ms}$$
   Angular frequency:
   $$\omega = 2\pi f = 2\pi \times 25 = 50\pi \approx 157.08\text{ rad/s}$$

3. **Calculate maximum induced emf ($E_m$):**
   $$E_m = \omega N B A = 157.08 \times 200 \times 0.1 \times 0.06 = 188.5\text{ V}$$

4. **Write the equation of instantaneous emf:**
   $$e(t) = E_m \sin(\omega t) = 188.5 \sin(157.08 t)\text{ V}$$

5. **Calculate instantaneous emf at $t = 2\text{ ms} = 0.002\text{ s}$:**
   $$\omega t = 157.08 \times 0.002 = 0.31416\text{ rad} = 18^\circ$$
   $$e(0.002) = 188.5 \sin(18^\circ) = 188.5 \times 0.3090 = 58.25\text{ V}$$

**Answer:** (a) $f = 25\text{ Hz}, T = 0.04\text{ s}$; (b) $E_m = 188.5\text{ V}$; (c) $e(t) = 188.5\sin(157.08t)\text{ V}$; (d) $e = 58.25\text{ V}$.

### Summary

- Instantaneous sinusoidal emf: $e(t) = E_m \sin(\omega t)$, where $E_m = 2\pi f N B A$.
- Frequency $f = 1/T$ and angular frequency $\omega = 2\pi f\text{ rad/s}$.
- For a $P$-pole machine rotating at $N\text{ rpm}$, $f = \frac{PN}{120}\text{ Hz}$.

---

<!-- page 4 | Average value, RMS value, form factor and peak factor -->

## Average value, RMS value, form factor and peak factor

### Average Value ($I_{\text{avg}}$ or $V_{\text{avg}}$)

**Definition of Average Value**

The **average value** of an alternating current is defined as that steady (DC) current which transfers across any circuit the same amount of electric charge in a given time interval as is transferred by the alternating current in the same time interval.

For a symmetrical alternating waveform (like a pure sine wave), the positive half-cycle is identical in area to the negative half-cycle. Hence, the average value over one **complete cycle** is always **zero**. Therefore, for symmetrical waveforms, the average value is always defined over a **half-cycle** (from $\theta = 0$ to $\theta = \pi$).

In general, for a waveform $i(\theta)$ over an interval of base length $B$:

$$
I_{\text{avg}} = \frac{\text{Area under the curve over the interval}}{\text{Base length of the interval}} = \frac{1}{B} \int_{0}^{B} i(\theta) \, d\theta
$$

**Derivation of Average Value for a Sinusoidal Waveform:**

1. Consider a sinusoidal current $i = I_m \sin\theta$.
2. Integrating over one positive half-cycle ($\theta = 0$ to $\theta = \pi$, so base $B = \pi$):
   $$I_{\text{avg}} = \frac{1}{\pi} \int_{0}^{\pi} I_m \sin\theta \, d\theta = \frac{I_m}{\pi} \Big[ -\cos\theta \Big]_{0}^{\pi}$$
3. Substituting the limits ($\cos\pi = -1$ and $\cos 0 = 1$):
   $$I_{\text{avg}} = \frac{I_m}{\pi} \left[ -(-1) - (-1) \right] = \frac{2 I_m}{\pi} \approx 0.637 I_m$$
Similarly, for a sinusoidal voltage:

$$
V_{\text{avg}} = \frac{2 V_m}{\pi} \approx 0.637 V_m
$$

### Root Mean Square (RMS) or Effective Value ($I_{\text{rms}}$ or $V_{\text{rms}}$)

**Definition of RMS (Effective) Value**

The **RMS (Root Mean Square)** or **effective value** of an alternating current is defined as that steady (DC) current which, when flowing through a given resistance for a given time, produces the exact same amount of heat energy as is produced by the alternating current when flowing through the same resistance for the same time.

*(Note: All standard AC voltmeters and ammeters are calibrated to read RMS values, and domestic supply ratings like "$230\text{ V}$ AC" always specify the RMS value unless stated otherwise.)*

Mathematically, for a periodic waveform $i(\theta)$ of period $T$ (or $2\pi$ radians):

$$
I_{\text{rms}} = \sqrt{\frac{1}{T} \int_{0}^{T} [i(t)]^2 \, dt} = \sqrt{\frac{1}{2\pi} \int_{0}^{2\pi} [i(\theta)]^2 \, d\theta}
$$

**Derivation of RMS Value for a Sinusoidal Waveform:**

1. Consider a sinusoidal current $i = I_m \sin\theta$. Because $[i(\theta)]^2 = I_m^2 \sin^2\theta$ is identical over both positive and negative half-cycles, the mean of the square over a half-cycle ($0$ to $\pi$) is the same as over a full cycle ($0$ to $2\pi$).
2. Taking the integral over $0$ to $\pi$:
   $$I_{\text{rms}}^2 = \frac{1}{\pi} \int_{0}^{\pi} I_m^2 \sin^2\theta \, d\theta$$
3. Using the trigonometric identity $\sin^2\theta = \frac{1 - \cos 2\theta}{2}$:
   $$I_{\text{rms}}^2 = \frac{I_m^2}{2\pi} \int_{0}^{\pi} (1 - \cos 2\theta) \, d\theta = \frac{I_m^2}{2\pi} \left[ \theta - \frac{\sin 2\theta}{2} \right]_{0}^{\pi}$$
4. Since $\sin(2\pi) = 0$ and $\sin(0) = 0$:
   $$I_{\text{rms}}^2 = \frac{I_m^2}{2\pi} (\pi - 0) = \frac{I_m^2}{2}$$
5. Taking the square root on both sides:
   $$I_{\text{rms}} = \frac{I_m}{\sqrt{2}} \approx 0.707 I_m$$
Similarly, for a sinusoidal voltage:

$$
V_{\text{rms}} = \frac{V_m}{\sqrt{2}} \approx 0.707 V_m
$$

### Form Factor ($K_f$) and Peak (Crest) Factor ($K_p$)

**Form Factor ($K_f$)**

The **form factor** of an alternating waveform is defined as the ratio of its RMS value to its average value:

$$
\text{Form Factor } (K_f) = \frac{\text{RMS Value}}{\text{Average Value}} = \frac{I_{\text{rms}}}{I_{\text{avg}}}
$$

For a pure sinusoidal waveform:

$$
K_f = \frac{I_m / \sqrt{2}}{2 I_m / \pi} = \frac{\pi}{2\sqrt{2}} \approx 1.11
$$

**Peak Factor / Crest Factor / Amplitude Factor ($K_p$)**

The **peak factor** (or crest factor) of an alternating waveform is defined as the ratio of its maximum (peak) value to its RMS value:

$$
\text{Peak Factor } (K_p) = \frac{\text{Maximum (Peak) Value}}{\text{RMS Value}} = \frac{I_m}{I_{\text{rms}}}
$$

For a pure sinusoidal waveform:

$$
K_p = \frac{I_m}{I_m / \sqrt{2}} = \sqrt{2} \approx 1.414
$$

### Summary Table for Standard Waveforms

| Waveform Type | Average Value | RMS Value | Form Factor ($K_f$) | Peak Factor ($K_p$) |
| --- | --- | --- | --- | --- |
| **Pure Sine Wave** (or full-wave rectified sine) | $\frac{2 V_m}{\pi} = 0.637 V_m$ | $\frac{V_m}{\sqrt{2}} = 0.707 V_m$ | $1.11$ | $\sqrt{2} = 1.414$ |
| **Half-Wave Rectified Sine Wave** | $\frac{V_m}{\pi} = 0.318 V_m$ | $\frac{V_m}{2} = 0.5 V_m$ | $\frac{\pi}{2} = 1.57$ | $2.0$ |
| **Symmetrical Square Wave** (peak $\pm V_m$) | $V_m$ | $V_m$ | $1.0$ | $1.0$ |
| **Triangular / Sawtooth Wave** (peak $V_m$) | $\frac{V_m}{2} = 0.5 V_m$ | $\frac{V_m}{\sqrt{3}} = 0.577 V_m$ | $\frac{2}{\sqrt{3}} = 1.155$ | $\sqrt{3} = 1.732$ |

### Worked Example 1

**Problem:** An alternating voltage is given by $v(t) = 325.27 \sin(314 t)\text{ V}$. Find:
(a) Maximum voltage, (b) RMS voltage, (c) Average voltage, (d) Frequency, (e) Time period, and (f) Form factor.

**Solution:**

1. Compare $v(t) = 325.27 \sin(314 t)$ with $v(t) = V_m \sin(\omega t)$:
   - (a) Maximum voltage: $V_m = 325.27\text{ V}$
   - Angular frequency: $\omega = 314\text{ rad/s}$
2. (b) RMS voltage:
   $$V_{\text{rms}} = \frac{V_m}{\sqrt{2}} = \frac{325.27}{1.4142} = 230\text{ V}$$
3. (c) Average voltage over a half-cycle:
   $$V_{\text{avg}} = \frac{2 V_m}{\pi} = 0.637 \times 325.27 = 207.2\text{ V}$$
4. (d) Frequency:
   $$f = \frac{\omega}{2\pi} = \frac{314}{2 \times 3.1416} = 50\text{ Hz}$$
5. (e) Time period:
   $$T = \frac{1}{f} = \frac{1}{50} = 0.02\text{ s} = 20\text{ ms}$$
6. (f) Form factor:
   $$K_f = \frac{V_{\text{rms}}}{V_{\text{avg}}} = \frac{230}{207.2} = 1.11$$

**Answer:** $V_m = 325.27\text{ V}$, $V_{\text{rms}} = 230\text{ V}$, $V_{\text{avg}} = 207.2\text{ V}$, $f = 50\text{ Hz}$, $T = 0.02\text{ s}$, $K_f = 1.11$.

### Worked Example 2

**Problem:** Find the average value, RMS value, and form factor of a periodic voltage waveform that increases linearly from $0\text{ V}$ to $100\text{ V}$ in $0.01\text{ s}$ and then drops instantly to $0\text{ V}$, repeating with a time period $T = 0.01\text{ s}$ (a sawtooth waveform).

**Solution:**

1. **Write the equation of the waveform for one period ($0 \le t \le T$):**
   With $V_m = 100\text{ V}$ and $T = 0.01\text{ s}$, the straight line through the origin is:
   $$v(t) = \frac{V_m}{T} t$$
2. **Calculate the average value ($V_{\text{avg}}$):**
   $$V_{\text{avg}} = \frac{1}{T} \int_{0}^{T} \left(\frac{V_m}{T} t\right) dt = \frac{V_m}{T^2} \left[\frac{t^2}{2}\right]_{0}^{T} = \frac{V_m}{2} = \frac{100}{2} = 50\text{ V}$$
3. **Calculate the RMS value ($V_{\text{rms}}$):**
   $$V_{\text{rms}} = \sqrt{\frac{1}{T} \int_{0}^{T} \left(\frac{V_m}{T} t\right)^2 dt} = \sqrt{\frac{V_m^2}{T^3} \left[\frac{t^3}{3}\right]_{0}^{T}} = \frac{V_m}{\sqrt{3}} = \frac{100}{1.732} = 57.74\text{ V}$$
4. **Calculate the form factor ($K_f$):**
   $$K_f = \frac{V_{\text{rms}}}{V_{\text{avg}}} = \frac{57.74}{50} = 1.155$$

**Answer:** $V_{\text{avg}} = 50\text{ V}$, $V_{\text{rms}} = 57.74\text{ V}$, $K_f = 1.155$.

### Summary

- For a sine wave: $I_{\text{avg}} = \frac{2I_m}{\pi} = 0.637 I_m$ and $I_{\text{rms}} = \frac{I_m}{\sqrt{2}} = 0.707 I_m$.
- Form factor $K_f = \frac{\text{RMS}}{\text{Average}} = 1.11$ (for sine wave).
- Peak factor $K_p = \frac{\text{Peak}}{\text{RMS}} = 1.414$ (for sine wave).

---

<!-- page 5 | Phasor representation of sinusoidal quantities -->

## Phasor representation of sinusoidal quantities

### Syllabus: AC Circuits – Phasor Representation

- Phasor representation of sinusoidal quantities
- Trigonometric, Rectangular, Polar and complex forms

### Concept of a Phasor

**Phasor**

A **phasor** is a directed line segment (rotating vector) rotating counter-clockwise in the complex plane with a constant angular velocity $\omega$ equal to the angular frequency of the sinusoidal quantity it represents.

- The **length** of the phasor represents either the maximum value ($V_m$) or, by standard engineering convention, the **RMS value** ($V = V_m/\sqrt{2}$) of the sinusoid.
- The **angle** ($\phi$) that the phasor makes with the positive real (reference) axis at $t = 0$ represents the **phase angle** of the sinusoid.
- The projection of a rotating phasor of length $V_m$ on the vertical (imaginary) axis at any instant $t$ gives the instantaneous value $v(t) = V_m \sin(\omega t + \phi)$.

### Phase and Phase Difference

**Phase**

The **phase** of an alternating quantity at any instant is the fraction of a time period (or the angle in radians/degrees) that has elapsed since the quantity last passed through its zero reference position in the positive direction. In $v(t) = V_m \sin(\omega t + \phi_1)$, the argument $(\omega t + \phi_1)$ is the phase at time $t$, and $\phi_1$ is the initial phase angle at $t = 0$.

**Phase Difference**

When two alternating quantities of the **same frequency** $\omega$ are given by:

$$
v(t) = V_m \sin(\omega t + \phi_1) \quad \text{and} \quad i(t) = I_m \sin(\omega t + \phi_2)
$$

the difference between their phase angles, $\phi = \phi_1 - \phi_2$, is called the **phase difference**, which remains constant with time:

1. **In Phase ($\phi_1 - \phi_2 = 0^\circ$):** Both quantities pass through their zero and peak values of the same polarity at the exact same instant. Their phasors are collinear and point in the same direction.
2. **Leading ($\phi_1 > \phi_2$):** Voltage $v(t)$ reaches its positive zero and positive peak earlier in time by angle $\phi = \phi_1 - \phi_2$ than current $i(t)$. We say **$v$ leads $i$ by angle $\phi$**. In a phasor diagram (where rotation is counter-clockwise), the phasor $\mathbf{V}$ lies ahead of $\mathbf{I}$ in the counter-clockwise direction by angle $\phi$.
3. **Lagging ($\phi_1 < \phi_2$):** Current $i(t)$ reaches its peak behind voltage $v(t)$ by angle $\phi$. We say **$i$ lags behind $v$ by angle $\phi$** (located clockwise relative to $\mathbf{V}$).

```
      Imaginary (+j)
          ^
          |      / V (Leads I by phi)
          |     /
          |    /  phi1
          |   /    \  phi2
   -------+--o----------------> Real (Reference Axis)
          |   \
          |    \ I (Lags V)
```

### Mathematical Forms of a Phasor

Using the RMS value $V = V_m/\sqrt{2}$ and phase angle $\phi$, a sinusoidal quantity $v(t) = \sqrt{2} V \sin(\omega t + \phi)$ is represented as a complex phasor $\mathbf{V}$ in four equivalent mathematical forms:

1. **Polar Form:**
   Specifies the RMS magnitude $V$ and the phase angle $\phi$ (usually in degrees):
   $$\mathbf{V} = V \angle \phi$$

2. **Exponential (Complex) Form:**
   Based on Euler's identity $e^{j\phi} = \cos\phi + j\sin\phi$, where $j = \sqrt{-1}$ is the imaginary operator in electrical engineering (used instead of $i$ to avoid confusion with current):
   $$\mathbf{V} = V e^{j\phi}$$

3. **Trigonometric Form:**
   Expanding the exponential form using Euler's identity:
   $$\mathbf{V} = V (\cos\phi + j\sin\phi)$$

4. **Rectangular (Cartesian) Form:**
   Expresses the phasor in terms of its real (in-phase) component $a$ and imaginary (quadrature) component $b$ in the complex plane:
   $$\mathbf{V} = a + jb$$
   where:
   $$a = V \cos\phi \quad \text{and} \quad b = V \sin\phi$$

### Conversions Between Rectangular and Polar Forms

- **Polar to Rectangular ($V \angle \phi \longrightarrow a + jb$):**
  $$a = V \cos\phi, \qquad b = V \sin\phi$$

- **Rectangular to Polar ($a + jb \longrightarrow V \angle \phi$):**
  $$V = \sqrt{a^2 + b^2}, \qquad \phi = \tan^{-1}\left(\frac{b}{a}\right)$$
  *(Care must be taken with the signs of $a$ and $b$ to place $\phi$ in the correct quadrant: if $a < 0$ and $b > 0$, $\phi = 180^\circ - \tan^{-1}|b/a|$; if $a < 0$ and $b < 0$, $\phi = -180^\circ + \tan^{-1}|b/a|$.)*

### Properties of the $j$-Operator and Phasor Arithmetic

- **Properties of $j$:**
  - $j = \sqrt{-1} = 1\angle 90^\circ$ (multiplying a phasor by $j$ rotates it counter-clockwise by $90^\circ$).
  - $j^2 = -1 = 1\angle 180^\circ$
  - $j^3 = -j = 1\angle 270^\circ = 1\angle -90^\circ$
  - $j^4 = +1 = 1\angle 0^\circ$
  - $\frac{1}{j} = -j = 1\angle -90^\circ$ (dividing by $j$ or multiplying by $-j$ rotates a phasor clockwise by $90^\circ$).

- **Addition and Subtraction (best done in Rectangular Form):**
  If $\mathbf{V}_1 = a_1 + jb_1$ and $\mathbf{V}_2 = a_2 + jb_2$:
  $$\mathbf{V}_1 \pm \mathbf{V}_2 = (a_1 \pm a_2) + j(b_1 \pm b_2)$$

- **Multiplication and Division (best done in Polar Form):**
  If $\mathbf{V}_1 = V_1 \angle \phi_1$ and $\mathbf{V}_2 = V_2 \angle \phi_2$:
  $$\mathbf{V}_1 \cdot \mathbf{V}_2 = (V_1 V_2) \angle (\phi_1 + \phi_2)$$
  $$\frac{\mathbf{V}_1}{\mathbf{V}_2} = \left(\frac{V_1}{V_2}\right) \angle (\phi_1 - \phi_2)$$

### Worked Example 1

**Problem:** Express the sinusoidal voltage $v(t) = 141.42 \sin(314t - 30^\circ)\text{ V}$ as an RMS phasor in Polar, Exponential, Trigonometric, and Rectangular forms.

**Solution:**

1. **Find the RMS magnitude and phase angle:**
   - Peak voltage $V_m = 141.42\text{ V}$
   - RMS voltage $V = \frac{141.42}{\sqrt{2}} = 100\text{ V}$
   - Phase angle $\phi = -30^\circ = -\frac{\pi}{6}\text{ rad}$
2. **Write the four forms:**
   - **Polar form:** $\mathbf{V} = 100 \angle -30^\circ\text{ V}$
   - **Exponential form:** $\mathbf{V} = 100 e^{-j30^\circ}\text{ V} = 100 e^{-j\pi/6}\text{ V}$
   - **Trigonometric form:** $\mathbf{V} = 100 \left[\cos(-30^\circ) + j\sin(-30^\circ)\right] = 100 (\cos 30^\circ - j\sin 30^\circ)\text{ V}$
   - **Rectangular form:**
     $$a = 100 \cos(-30^\circ) = 100 \times 0.866 = 86.6\text{ V}$$
     $$b = 100 \sin(-30^\circ) = 100 \times (-0.5) = -50\text{ V}$$
     $$\mathbf{V} = (86.6 - j50)\text{ V}$$

**Answer:** Polar: $100\angle -30^\circ\text{ V}$; Exponential: $100e^{-j30^\circ}\text{ V}$; Trigonometric: $100(\cos 30^\circ - j\sin 30^\circ)\text{ V}$; Rectangular: $(86.6 - j50)\text{ V}$.

### Worked Example 2

**Problem:** Two alternating currents entering a node are given by $i_1(t) = 10\sqrt{2}\sin(\omega t + 30^\circ)\text{ A}$ and $i_2(t) = 20\sqrt{2}\sin(\omega t - 45^\circ)\text{ A}$. Find the total current $i(t) = i_1(t) + i_2(t)$ in time-domain sinusoidal form.

**Solution:**

1. **Convert $i_1(t)$ and $i_2(t)$ to RMS Polar and Rectangular forms:**
   - $\mathbf{I}_1 = 10\angle 30^\circ = 10(\cos 30^\circ + j\sin 30^\circ) = 8.66 + j5.0\text{ A}$
   - $\mathbf{I}_2 = 20\angle -45^\circ = 20(\cos 45^\circ - j\sin 45^\circ) = 14.14 - j14.14\text{ A}$
2. **Add the two phasors in rectangular form:**
   $$\mathbf{I} = \mathbf{I}_1 + \mathbf{I}_2 = (8.66 + 14.14) + j(5.0 - 14.14) = 22.80 - j9.14\text{ A}$$
3. **Convert $\mathbf{I}$ back to polar form:**
   $$I = \sqrt{(22.80)^2 + (-9.14)^2} = \sqrt{519.84 + 83.54} = \sqrt{603.38} = 24.56\text{ A}$$
   $$\phi = \tan^{-1}\left(\frac{-9.14}{22.80}\right) = -21.84^\circ$$
   $$\mathbf{I} = 24.56 \angle -21.84^\circ\text{ A}$$
4. **Write the time-domain expression ($I_m = \sqrt{2} I$):**
   $$i(t) = 24.56\sqrt{2} \sin(\omega t - 21.84^\circ) = 34.73 \sin(\omega t - 21.84^\circ)\text{ A}$$

**Answer:** $i(t) = 34.73 \sin(\omega t - 21.84^\circ)\text{ A}$.

### Summary

- A sinusoid $v(t) = \sqrt{2}V\sin(\omega t + \phi)$ is represented as an RMS phasor $\mathbf{V} = V\angle\phi = V(\cos\phi + j\sin\phi) = a + jb$.
- Use **rectangular form** for addition/subtraction and **polar form** for multiplication/division.
- Multiplying by $j$ advances the phase by $+90^\circ$; multiplying by $-j$ (or dividing by $j$) retards the phase by $-90^\circ$.

---

<!-- page 6 | Analysis of simple AC circuits: Purely resistive, inductive and capacitive circuits -->

## Analysis of simple AC circuits: Purely resistive, inductive and capacitive circuits

### Syllabus: Analysis of Simple AC Circuits

- Purely resistive, inductive & capacitive circuits
- Inductive and capacitive reactance, concept of impedance - numerical problems

### 1. AC Circuit with a Pure Resistor ($R$)

Consider an AC voltage source $v(t) = V_m \sin(\omega t)$ connected across a pure resistor of resistance $R$ ohms.

```
         i(t) --->
      +-----/\/\/\-----+
      |       R        |
     (~) v(t)          |
      |                |
      +----------------+
```

1. **Current Equation:** By Ohm's law, the instantaneous current is:
   $$i(t) = \frac{v(t)}{R} = \frac{V_m \sin(\omega t)}{R} = I_m \sin(\omega t)$$
   where peak current $I_m = \frac{V_m}{R}$ and RMS current $I = \frac{V}{R}$.
2. **Phase Relationship:** Comparing $v(t) = V_m \sin(\omega t)$ and $i(t) = I_m \sin(\omega t)$, the phase angle between voltage and current in a pure resistor is **zero** ($\phi = 0^\circ$). Voltage and current are **in phase**.
3. **Phasor Relation and Complex Impedance:**
   If $\mathbf{V} = V\angle 0^\circ$, then $\mathbf{I} = I\angle 0^\circ$.
   $$\mathbf{Z}_R = \frac{\mathbf{V}}{\mathbf{I}} = R\angle 0^\circ = R + j0 \quad (\Omega)$$
4. **Instantaneous and Average Power:**
   $$p(t) = v(t) \cdot i(t) = (V_m \sin\omega t)(I_m \sin\omega t) = V_m I_m \sin^2(\omega t)$$
   Using $\sin^2(\omega t) = \frac{1 - \cos(2\omega t)}{2}$ and $V_m I_m = 2VI$:
   $$p(t) = V I (1 - \cos 2\omega t) = V I - V I \cos(2\omega t)$$
   Since the average of $\cos(2\omega t)$ over a full cycle is zero, the average power consumed over a cycle is:
   $$P = V I = I^2 R = \frac{V^2}{R} \quad \text{(watts, W)}$$

### 2. AC Circuit with a Pure Inductor ($L$)

Consider an AC voltage source $v(t) = V_m \sin(\omega t)$ connected across a pure (lossless, $R = 0$) inductor of inductance $L$ henrys.

1. **Current Equation:** By KVL and Faraday's law, the applied voltage equals the self-induced voltage drop across the inductor:
   $$v(t) = L \frac{di}{dt} = V_m \sin(\omega t)$$
   Integrating both sides with respect to $t$:
   $$i(t) = \frac{V_m}{L} \int \sin(\omega t) \, dt = -\frac{V_m}{\omega L} \cos(\omega t)$$
   Using $-\cos(\omega t) = \sin(\omega t - 90^\circ)$:
   $$i(t) = I_m \sin(\omega t - 90^\circ) = I_m \sin\left(\omega t - \frac{\pi}{2}\right)$$
   where the peak current is $I_m = \frac{V_m}{\omega L} = \frac{V_m}{X_L}$.
2. **Inductive Reactance ($X_L$):**
   The opposition offered by an inductor to the flow of alternating current is called **inductive reactance** ($X_L$), measured in ohms ($\Omega$):
   $$X_L = \omega L = 2\pi f L \quad (\Omega)$$
   - $X_L$ is directly proportional to frequency $f$. For DC ($f = 0$), $X_L = 0\ \Omega$, so a pure inductor acts as a **short circuit** to steady DC.
3. **Phase Relationship:** In a pure inductor, the **current lags behind the applied voltage by $90^\circ$** ($\pi/2\text{ rad}$), or equivalently, voltage leads current by $90^\circ$.
4. **Phasor Relation and Complex Impedance:**
   If $\mathbf{V} = V\angle 0^\circ$, then $\mathbf{I} = I\angle -90^\circ$.
   $$\mathbf{Z}_L = \frac{\mathbf{V}}{\mathbf{I}} = \frac{V\angle 0^\circ}{I\angle -90^\circ} = X_L \angle 90^\circ = j X_L = j\omega L \quad (\Omega)$$
5. **Instantaneous and Average Power:**
   $$p(t) = v(t) \cdot i(t) = (V_m \sin\omega t)\left(-I_m \cos\omega t\right) = -\frac{V_m I_m}{2} \sin(2\omega t) = -V I \sin(2\omega t)$$
   The instantaneous power is a double-frequency sine wave ($2f$) that alternates equally between positive (energy absorbed from source to build magnetic field, $\frac{1}{2}Li^2$) and negative (energy returned completely to the source when magnetic field collapses). Therefore, the average power consumed over a complete cycle is **zero**:
   $$P = 0\text{ W}$$

### 3. AC Circuit with a Pure Capacitor ($C$)

Consider an AC voltage source $v(t) = V_m \sin(\omega t)$ connected across a pure capacitor of capacitance $C$ farads.

1. **Current Equation:** The instantaneous charge on the capacitor is $q(t) = C v(t)$, so the current is:
   $$i(t) = \frac{dq}{dt} = C \frac{dv}{dt} = C \frac{d}{dt} \left(V_m \sin\omega t\right) = \omega C V_m \cos(\omega t)$$
   Using $\cos(\omega t) = \sin(\omega t + 90^\circ)$:
   $$i(t) = I_m \sin(\omega t + 90^\circ) = I_m \sin\left(\omega t + \frac{\pi}{2}\right)$$
   where the peak current is $I_m = \omega C V_m = \frac{V_m}{1/(\omega C)} = \frac{V_m}{X_C}$.
2. **Capacitive Reactance ($X_C$):**
   The opposition offered by a capacitor to the flow of alternating current is called **capacitive reactance** ($X_C$), measured in ohms ($\Omega$):
   $$X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C} \quad (\Omega)$$
   - $X_C$ is inversely proportional to frequency $f$. For DC ($f = 0$), $X_C = \infty\ \Omega$, so a capacitor acts as an **open circuit** to steady DC.
3. **Phase Relationship:** In a pure capacitor, the **current leads the applied voltage by $90^\circ$** ($\pi/2\text{ rad}$), or equivalently, voltage lags behind current by $90^\circ$.
4. **Phasor Relation and Complex Impedance:**
   If $\mathbf{V} = V\angle 0^\circ$, then $\mathbf{I} = I\angle +90^\circ$.
   $$\mathbf{Z}_C = \frac{\mathbf{V}}{\mathbf{I}} = \frac{V\angle 0^\circ}{I\angle 90^\circ} = X_C \angle -90^\circ = -j X_C = \frac{1}{j\omega C} \quad (\Omega)$$
5. **Instantaneous and Average Power:**
   $$p(t) = v(t) \cdot i(t) = (V_m \sin\omega t)(I_m \cos\omega t) = \frac{V_m I_m}{2} \sin(2\omega t) = V I \sin(2\omega t)$$
   Energy stored in the electrostatic field ($\frac{1}{2}Cv^2$) during one quarter-cycle is returned completely to the source during the next quarter-cycle. Hence, the average power consumed over a complete cycle is **zero**:
   $$P = 0\text{ W}$$

### Concept of Impedance ($\mathbf{Z}$)

In general AC circuits containing resistance $R$ and reactance $X$, **impedance** ($\mathbf{Z}$) is defined as the complex ratio of the voltage phasor $\mathbf{V}$ to the current phasor $\mathbf{I}$:

$$
\mathbf{Z} = \frac{\mathbf{V}}{\mathbf{I}} = R + jX = Z \angle \phi \quad (\Omega)
$$

where the magnitude of impedance is $Z = \sqrt{R^2 + X^2}$ and the phase angle is $\phi = \tan^{-1}(X/R)$.

### Comparison of Pure R, Pure L, and Pure C Circuits

| Parameter | Pure Resistor ($R$) | Pure Inductor ($L$) | Pure Capacitor ($C$) |
| --- | --- | --- | --- |
| **Opposition to AC** | Resistance $R$ (independent of $f$) | Reactance $X_L = 2\pi f L$ ($\propto f$) | Reactance $X_C = \frac{1}{2\pi f C}$ ($\propto \frac{1}{f}$) |
| **Complex Impedance ($\mathbf{Z}$)** | $R = R\angle 0^\circ$ | $+jX_L = X_L\angle +90^\circ$ | $-jX_C = X_C\angle -90^\circ$ |
| **Phase of $\mathbf{I}$ relative to $\mathbf{V}$** | $\mathbf{I}$ is in phase with $\mathbf{V}$ ($\phi = 0^\circ$) | $\mathbf{I}$ lags $\mathbf{V}$ by $90^\circ$ ($\phi = +90^\circ$) | $\mathbf{I}$ leads $\mathbf{V}$ by $90^\circ$ ($\phi = -90^\circ$) |
| **Average Power ($P$)** | $P = VI = I^2 R$ | $P = 0\text{ W}$ | $P = 0\text{ W}$ |

### Worked Example 1

**Problem:** A pure inductor of $L = 0.15\text{ H}$ is connected across a $230\text{ V}, 50\text{ Hz}$ AC supply. Find: (a) Inductive reactance, (b) RMS current, (c) Peak current, and (d) Equation for instantaneous current if $v(t) = 230\sqrt{2}\sin(314t)\text{ V}$.

**Solution:**

1. (a) Inductive reactance:
   $$X_L = 2\pi f L = 2\pi \times 50 \times 0.15 = 47.12\ \Omega$$
2. (b) RMS current:
   $$I = \frac{V}{X_L} = \frac{230}{47.12} = 4.88\text{ A}$$
3. (c) Peak current:
   $$I_m = \sqrt{2} I = 1.414 \times 4.88 = 6.90\text{ A}$$
4. (d) Since current lags voltage by $90^\circ$ in a pure inductor:
   $$i(t) = 6.90 \sin(314t - 90^\circ)\text{ A}$$

**Answer:** $X_L = 47.12\ \Omega$, $I = 4.88\text{ A}$, $I_m = 6.90\text{ A}$, $i(t) = 6.90\sin(314t - 90^\circ)\text{ A}$.

### Worked Example 2

**Problem:** A $50\ \mu\text{F}$ capacitor is connected across a $200\text{ V}, 50\text{ Hz}$ single-phase AC supply. Calculate: (a) Capacitive reactance, (b) RMS current, and (c) Maximum power delivered by the source at any instant.

**Solution:**

1. (a) Capacitive reactance:
   $$X_C = \frac{1}{2\pi f C} = \frac{1}{2\pi \times 50 \times 50 \times 10^{-6}} = 63.66\ \Omega$$
2. (b) RMS current:
   $$I = \frac{V}{X_C} = \frac{200}{63.66} = 3.14\text{ A}$$
3. (c) Instantaneous power is $p(t) = VI\sin(2\omega t)$. Its maximum value (when $\sin 2\omega t = 1$) is:
   $$P_{\text{inst, max}} = V I = 200 \times 3.14 = 628\text{ W}$$
   *(Note: Average power over a full cycle is $0\text{ W}$.)*

**Answer:** $X_C = 63.66\ \Omega$, $I = 3.14\text{ A}$, $P_{\text{inst, max}} = 628\text{ W}$.

### Summary

- Pure $R$: $\mathbf{Z}_R = R\angle 0^\circ$, $\mathbf{I}$ in phase with $\mathbf{V}$, $P = VI$.
- Pure $L$: $\mathbf{Z}_L = jX_L = \omega L \angle 90^\circ$, $\mathbf{I}$ lags $\mathbf{V}$ by $90^\circ$, $P = 0$.
- Pure $C$: $\mathbf{Z}_C = -jX_C = \frac{1}{\omega C} \angle -90^\circ$, $\mathbf{I}$ leads $\mathbf{V}$ by $90^\circ$, $P = 0$.

---

<!-- page 7 | RL, RC and RLC series AC circuits -->

## RL, RC and RLC series AC circuits

### Syllabus: RL, RC and RLC Series Circuits

- RL, RC and RLC series circuits
- Power factor, active, reactive and apparent power - simple numerical problems

### 1. Series RL Circuit

Consider a resistor $R$ and an inductor $L$ connected in series across an AC supply $v(t) = V_m \sin(\omega t)$. Since the circuit is in series, the same current $\mathbf{I} = I\angle 0^\circ$ (taken as the reference phasor) flows through both elements.

```
         I --->      V_R          V_L
      +-----------/\/\/\-------uuuuuu-------+
      |             R            L          |
     (~) V                                  |
      |                                     |
      +-------------------------------------+
```

1. **Component Voltage Phasors:**
   - Voltage drop across $R$: $\mathbf{V}_R = I R \angle 0^\circ = V_R + j0$ (in phase with $\mathbf{I}$).
   - Voltage drop across $L$: $\mathbf{V}_L = I (j X_L) = I X_L \angle +90^\circ = j V_L$ (leads $\mathbf{I}$ by $90^\circ$).
2. **Total Supply Voltage and Voltage Triangle:**
   By Kirchhoff's Voltage Law (KVL) in phasor form:
   $$\mathbf{V} = \mathbf{V}_R + \mathbf{V}_L = V_R + j V_L = I(R + jX_L)$$
   Magnitude of supply voltage:
   $$V = \sqrt{V_R^2 + V_L^2} = I \sqrt{R^2 + X_L^2}$$
3. **Impedance ($\mathbf{Z}$) and Impedance Triangle:**
   $$\mathbf{Z} = \frac{\mathbf{V}}{\mathbf{I}} = R + j X_L = Z \angle +\phi$$
   where magnitude $Z = \sqrt{R^2 + X_L^2}$ and phase angle $\phi = \tan^{-1}\left(\frac{X_L}{R}\right) = \tan^{-1}\left(\frac{V_L}{V_R}\right)$.
4. **Phase Relationship:** Since $\phi$ is positive ($0^\circ < \phi < 90^\circ$), the supply voltage $\mathbf{V}$ leads the current $\mathbf{I}$ by angle $\phi$, or **current $\mathbf{I}$ lags behind voltage $\mathbf{V}$ by angle $\phi$**.

```
   Voltage Triangle (RL)             Impedance Triangle (RL)
          /|                                /|
       V / | V_L = I*X_L                 Z / | X_L
        /  |                              /  |
       /phi|                             /phi|
      +----+                            +----+
     V_R = I*R                            R
```

### 2. Series RC Circuit

Consider a resistor $R$ and a capacitor $C$ connected in series carrying reference current $\mathbf{I} = I\angle 0^\circ$.

1. **Component Voltage Phasors:**
   - Voltage drop across $R$: $\mathbf{V}_R = I R \angle 0^\circ = V_R$ (in phase with $\mathbf{I}$).
   - Voltage drop across $C$: $\mathbf{V}_C = I (-j X_C) = I X_C \angle -90^\circ = -j V_C$ (lags behind $\mathbf{I}$ by $90^\circ$).
2. **Total Supply Voltage:**
   $$\mathbf{V} = \mathbf{V}_R + \mathbf{V}_C = V_R - j V_C = I(R - jX_C)$$
   Magnitude:
   $$V = \sqrt{V_R^2 + V_C^2} = I \sqrt{R^2 + X_C^2}$$
3. **Impedance ($\mathbf{Z}$):**
   $$\mathbf{Z} = \frac{\mathbf{V}}{\mathbf{I}} = R - j X_C = Z \angle -\phi$$
   where magnitude $Z = \sqrt{R^2 + X_C^2}$ and phase angle Magnitude $\phi = \tan^{-1}\left(\frac{X_C}{R}\right) = \tan^{-1}\left(\frac{V_C}{V_R}\right)$ (or $\theta_Z = \tan^{-1}(-X_C/R) = -\phi$).
4. **Phase Relationship:** The supply voltage $\mathbf{V}$ lags behind $\mathbf{I}$ by angle $\phi$, or **current $\mathbf{I}$ leads the supply voltage $\mathbf{V}$ by angle $\phi$** ($0^\circ < \phi < 90^\circ$).

### 3. Series RLC Circuit

Consider a resistor $R$, an inductor $L$, and a capacitor $C$ connected in series across an AC supply $\mathbf{V}$, carrying a common reference current $\mathbf{I} = I\angle 0^\circ$.

```
         I --->    V_R       V_L       V_C
      +----------/\/\/\----uuuuuu------||------+
      |            R         L         C       |
     (~) V                                     |
      +----------------------------------------+
```

1. **Phasor KVL Equation:**
   - $\mathbf{V}_R = I R$ (along $+x$ axis, in phase with $\mathbf{I}$)
   - $\mathbf{V}_L = +j I X_L$ (along $+j$ axis, leading $\mathbf{I}$ by $90^\circ$)
   - $\mathbf{V}_C = -j I X_C$ (along $-j$ axis, lagging $\mathbf{I}$ by $90^\circ$)
   Since $\mathbf{V}_L$ and $\mathbf{V}_C$ are $180^\circ$ out of phase with each other, they partially or fully cancel:
   $$\mathbf{V} = \mathbf{V}_R + \mathbf{V}_L + \mathbf{V}_C = V_R + j(V_L - V_C) = I \left[ R + j(X_L - X_C) \right]$$
   Magnitude of supply voltage:
   $$V = \sqrt{V_R^2 + (V_L - V_C)^2}$$
2. **Total Complex Impedance ($\mathbf{Z}$):**
   $$\mathbf{Z} = R + j(X_L - X_C) = R + jX = Z \angle \phi$$
   where net reactance is $X = X_L - X_C$, impedance magnitude is:
   $$Z = \sqrt{R^2 + (X_L - X_C)^2}$$
   and phase angle is:
   $$\phi = \tan^{-1}\left(\frac{X_L - X_C}{R}\right) = \tan^{-1}\left(\frac{V_L - V_C}{V_R}\right)$$

**Three Operating Cases of an RLC Series Circuit:**

| Condition | Net Reactance ($X = X_L - X_C$) | Circuit Nature | Phase of Current $\mathbf{I}$ relative to $\mathbf{V}$ | Power Factor ($\cos\phi$) |
| --- | --- | --- | --- | --- |
| **Case 1: $X_L > X_C$** ($V_L > V_C$) | Positive ($+X$) | Predominantly **Inductive** | $\mathbf{I}$ **lags** $\mathbf{V}$ by $\phi$ | Lagging |
| **Case 2: $X_L < X_C$** ($V_L < V_C$) | Negative ($-X$) | Predominantly **Capacitive** | $\mathbf{I}$ **leads** $\mathbf{V}$ by $|\phi|$ | Leading |
| **Case 3: $X_L = X_C$** ($V_L = V_C$) | Zero ($X = 0$) | **Purely Resistive (Series Resonance)** | $\mathbf{I}$ is **in phase** with $\mathbf{V}$ ($\phi = 0^\circ$) | Unity ($\cos\phi = 1$) |

*(Note: At series resonance, $X_L = X_C \implies 2\pi f_r L = \frac{1}{2\pi f_r C}$, giving the resonant frequency $f_r = \frac{1}{2\pi\sqrt{LC}}$, where impedance is minimum $Z = R$ and current is maximum $I = V/R$.)*

### Worked Example 1

**Problem:** A coil having a resistance of $12\ \Omega$ and an inductance of $0.05\text{ H}$ is connected in series with a $100\ \mu\text{F}$ capacitor across a $230\text{ V}, 50\text{ Hz}$ AC supply. Calculate:
(a) Inductive reactance, capacitive reactance, and total impedance,
(b) RMS current and its phase angle with respect to supply voltage, and
(c) Voltage drops across the coil and across the capacitor.

**Solution:**

1. **Calculate reactances and total impedance:**
   - $X_L = 2\pi f L = 2\pi \times 50 \times 0.05 = 15.71\ \Omega$
   - $X_C = \frac{1}{2\pi f C} = \frac{1}{2\pi \times 50 \times 100 \times 10^{-6}} = 31.83\ \Omega$
   - Net reactance: $X = X_L - X_C = 15.71 - 31.83 = -16.12\ \Omega$ (capacitive since $X_C > X_L$)
   - Complex impedance: $\mathbf{Z} = 12 - j16.12\ \Omega$
   - Magnitude of impedance:
     $$Z = \sqrt{12^2 + (-16.12)^2} = \sqrt{144 + 259.85} = \sqrt{403.85} = 20.10\ \Omega$$
   - Impedance angle:
     $$\phi = \tan^{-1}\left(\frac{-16.12}{12}\right) = -53.34^\circ \implies \mathbf{Z} = 20.10 \angle -53.34^\circ\ \Omega$$

2. **Calculate RMS current (taking $\mathbf{V} = 230\angle 0^\circ\text{ V}$):**
   $$\mathbf{I} = \frac{\mathbf{V}}{\mathbf{Z}} = \frac{230\angle 0^\circ}{20.10\angle -53.34^\circ} = 11.44 \angle +53.34^\circ\text{ A}$$
   Thus, RMS current is $11.44\text{ A}$ and it **leads** the supply voltage by $53.34^\circ$.

3. **Calculate voltage across the coil ($R$ and $L$ together) and across the capacitor ($C$):**
   - Impedance of the coil: $Z_{\text{coil}} = \sqrt{R^2 + X_L^2} = \sqrt{12^2 + 15.71^2} = 19.77\ \Omega$
   - Voltage across coil: $V_{\text{coil}} = I \cdot Z_{\text{coil}} = 11.44 \times 19.77 = 226.17\text{ V}$
   - Voltage across capacitor: $V_C = I \cdot X_C = 11.44 \times 31.83 = 364.14\text{ V}$

**Answer:** (a) $X_L = 15.71\ \Omega, X_C = 31.83\ \Omega, \mathbf{Z} = 20.10\angle -53.34^\circ\ \Omega$; (b) $I = 11.44\text{ A}$ (leading by $53.34^\circ$); (c) $V_{\text{coil}} = 226.17\text{ V}, V_C = 364.14\text{ V}$.

### Summary

- Series RL: $\mathbf{Z} = R + jX_L = \sqrt{R^2 + X_L^2}\angle +\phi$, current lags voltage by $\phi = \tan^{-1}(X_L/R)$.
- Series RC: $\mathbf{Z} = R - jX_C = \sqrt{R^2 + X_C^2}\angle -\phi$, current leads voltage by $\phi = \tan^{-1}(X_C/R)$.
- Series RLC: $\mathbf{Z} = R + j(X_L - X_C)$, $Z = \sqrt{R^2 + (X_L - X_C)^2}$, $V = \sqrt{V_R^2 + (V_L - V_C)^2}$.

---

<!-- page 8 | Power in AC circuits: Power factor, active, reactive and apparent power -->

## Power in AC circuits: Power factor, active, reactive and apparent power

### Instantaneous and Average Power in a General AC Circuit

Let the voltage applied across a general single-phase AC circuit and the resulting current be:

$$
v(t) = V_m \sin(\omega t) \quad \text{and} \quad i(t) = I_m \sin(\omega t - \phi)
$$

where $\phi$ is the phase angle between voltage and current.

**Derivation of Instantaneous and Average Power:**

1. The **instantaneous power** $p(t)$ is the product of instantaneous voltage and instantaneous current:
   $$p(t) = v(t) \cdot i(t) = V_m I_m \sin(\omega t) \sin(\omega t - \phi)$$
2. Using the trigonometric identity $2\sin A \sin B = \cos(A - B) - \cos(A + B)$:
   $$p(t) = \frac{V_m I_m}{2} \left[ \cos\phi - \cos(2\omega t - \phi) \right]$$
3. Since $V = V_m/\sqrt{2}$ and $I = I_m/\sqrt{2}$, we have $\frac{V_m I_m}{2} = V I$:
   $$p(t) = V I \cos\phi - V I \cos(2\omega t - \phi)$$
4. The instantaneous power consists of two parts:
   - A constant part $V I \cos\phi$, which is independent of time.
   - A pulsating cosine term $V I \cos(2\omega t - \phi)$ that oscillates at twice the supply frequency ($2f$) and whose average value over one complete cycle is zero.
5. Therefore, the **average power** (real or active power) $P$ over a complete cycle is:
   $$P = \frac{1}{2\pi} \int_{0}^{2\pi} p(\omega t) \, d(\omega t) = V I \cos\phi \quad \text{(watts, W)}$$

### The Three Types of AC Power

In an AC circuit, power is characterized by three related quantities that form a right-angled triangle called the **Power Triangle**:

```
             /|
            / |
   S = VI  /  | Q = VI sin(phi)  [Reactive Power, VAR]
  [VA]    /   |
         /phi |
        +-----+
     P = VI cos(phi)  [Active Power, W]
```

1. **Active Power / Real Power / True Power ($P$):**
   The actual power consumed or dissipated in the resistive part of the circuit that does useful work (converted into heat, light, or mechanical work).
   $$P = V I \cos\phi = I^2 R \quad \text{(Unit: watt, W or kilowatt, kW)}$$

2. **Reactive Power / Quadrature Power ($Q$):**
   The power that continuously surges back and forth between the AC source and the magnetic field of inductors or electric field of capacitors without doing net useful work.
   $$Q = V I \sin\phi = I^2 X = I^2 (X_L - X_C) \quad \text{(Unit: volt-ampere reactive, VAR or kVAR)}$$
   -By convention, an inductive circuit ($X_L > X_C$) absorbs positive reactive power ($+Q$, lagging VAR), whereas a capacitive circuit ($X_C > X_L$) supplies reactive power ($-Q$, leading VAR).

3. **Apparent Power ($S$):**
   The product of the RMS voltage $V$ and the RMS current $I$ supplied to the circuit, without considering the phase angle. Electrical equipment such as transformers and AC generators are rated in terms of apparent power ($S$).
   $$S = V I = I^2 Z = \sqrt{P^2 + Q^2} \quad \text{(Unit: volt-ampere, VA or kilovolt-ampere, kVA)}$$

*(Note: **Complex Power** is written as $\mathbf{S} = \mathbf{V} \mathbf{I}^* = P + jQ = S\angle\phi\text{ VA}$.)*

### Power Factor ($\cos\phi$)

**Definitions of Power Factor**

The **power factor** (pf) of an AC circuit can be defined in three equivalent ways:

1. **Cosine of the phase angle** between the supply voltage $\mathbf{V}$ and supply current $\mathbf{I}$:
   $$\text{Power Factor} = \cos\phi$$
2. **Ratio of Resistance to Impedance** (from the impedance triangle):
   $$\cos\phi = \frac{R}{Z}$$
3. **Ratio of Active Power to Apparent Power** (from the power triangle):
   $$\cos\phi = \frac{\text{Active Power }(P)}{\text{Apparent Power }(S)} = \frac{V I \cos\phi}{V I}$$

**Nature and Range of Power Factor:**
- Since $-90^\circ \le \phi \le +90^\circ$ for passive circuits, $0 \le \cos\phi \le 1$.
- **Lagging power factor:** Occurs in inductive circuits ($X_L > X_C$), where current lags voltage.
- **Leading power factor:** Occurs in capacitive circuits ($X_C > X_L$), where current leads voltage.
- **Unity power factor ($\cos\phi = 1$):** Occurs in purely resistive circuits or RLC circuits at resonance ($X_L = X_C$), where $\phi = 0^\circ$.
- **Zero power factor ($\cos\phi = 0$):** Occurs in pure inductive or pure capacitive circuits ($\phi = \pm 90^\circ$).

**Significance of Power Factor:**
For a fixed active power $P$ to be delivered at a constant supply voltage $V$, the line current required is:
$$I = \frac{P}{V \cos\phi}$$
If the power factor $\cos\phi$ is low, the circuit draws a much **larger current** $I$ from the supply to deliver the same real power $P$. This causes higher $I^2R$ copper losses in transmission lines, larger voltage drops, and requires higher kVA ratings of generators and transformers.

### Worked Example 1

**Problem:** A single-phase AC motor takes a current of $20\text{ A}$ from a $230\text{ V}, 50\text{ Hz}$ supply at a lagging power factor of $0.8$. Calculate:
(a) Apparent power in kVA,
(b) Active power in kW,
(c) Reactive power in kVAR, and
(d) Resistance and inductive reactance of the motor (modeled as a series RL circuit).

**Solution:**

1. **Given data:** $V = 230\text{ V}$, $I = 20\text{ A}$, $\cos\phi = 0.8\text{ (lagging)}$.
   - Phase angle: $\phi = \cos^{-1}(0.8) = 36.87^\circ$
   - $\sin\phi = \sin(36.87^\circ) = 0.6$
2. (a) **Apparent power ($S$):**
   $$S = V I = 230 \times 20 = 4600\text{ VA} = 4.6\text{ kVA}$$
3. (b) **Active power ($P$):**
   $$P = V I \cos\phi = 4600 \times 0.8 = 3680\text{ W} = 3.68\text{ kW}$$
4. (c) **Reactive power ($Q$):**
   $$Q = V I \sin\phi = 4600 \times 0.6 = 2760\text{ VAR} = 2.76\text{ kVAR}$$
5. (d) **Equivalent series $R$ and $X_L$:**
   - Impedance magnitude: $Z = \frac{V}{I} = \frac{230}{20} = 11.5\ \Omega$
   - Resistance: $R = Z \cos\phi = 11.5 \times 0.8 = 9.2\ \Omega$
   - Inductive reactance: $X_L = Z \sin\phi = 11.5 \times 0.6 = 6.9\ \Omega$

**Answer:** (a) $S = 4.6\text{ kVA}$; (b) $P = 3.68\text{ kW}$; (c) $Q = 2.76\text{ kVAR}$; (d) $R = 9.2\ \Omega, X_L = 6.9\ \Omega$.

### Worked Example 2

**Problem:** A voltage $v(t) = 200\sqrt{2}\sin(314t + 20^\circ)\text{ V}$ applied across an AC circuit produces a current $i(t) = 10\sqrt{2}\sin(314t - 10^\circ)\text{ A}$. Find the phase angle, power factor, active power, reactive power, and apparent power.

**Solution:**

1. **Extract RMS values and phase angles:**
   - $V = 200\text{ V}$, $\phi_v = +20^\circ$
   - $I = 10\text{ A}$, $\phi_i = -10^\circ$
2. **Calculate phase difference ($\phi$) and power factor:**
   $$\phi = \phi_v - \phi_i = 20^\circ - (-10^\circ) = 30^\circ \quad (\text{current lags voltage by } 30^\circ)$$
   $$\text{Power factor} = \cos 30^\circ = 0.866\text{ (lagging)}$$
3. **Calculate $S$, $P$, and $Q$:**
   - Apparent power: $S = V I = 200 \times 10 = 2000\text{ VA} = 2\text{ kVA}$
   - Active power: $P = V I \cos 30^\circ = 2000 \times 0.866 = 1732\text{ W} = 1.732\text{ kW}$
   - Reactive power: $Q = V I \sin 30^\circ = 2000 \times 0.5 = 1000\text{ VAR} = 1\text{ kVAR}$

**Answer:** $\phi = 30^\circ$, $\text{pf} = 0.866\text{ (lagging)}$, $P = 1732\text{ W}$, $Q = 1000\text{ VAR}$, $S = 2000\text{ VA}$.

### Summary

- **Active power:** $P = VI\cos\phi = I^2R\text{ (W)}$.
- **Reactive power:** $Q = VI\sin\phi = I^2X\text{ (VAR)}$.
- **Apparent power:** $S = VI = I^2Z = \sqrt{P^2 + Q^2}\text{ (VA)}$.
- **Power factor:** $\cos\phi = \frac{R}{Z} = \frac{P}{S}$.

---

<!-- page 9 | Three-phase AC systems: Generation, advantages and balanced connections -->

## Three-phase AC systems: Generation, advantages and balanced connections

### Syllabus: Three-Phase AC Systems

- Generation of three-phase voltages, advantages of three-phase systems
- Star and delta connections (balanced only)
- Relation between line and phase voltages, line and phase currents - numerical problems

### Generation of Three-Phase Voltages

A **three-phase AC system** consists of three identical single-phase AC voltage sources of the same frequency and same amplitude, displaced from one another in phase by **$120^\circ$ electrical** ($2\pi/3\text{ radians}$).

**Principle of Generation:**
1. Consider three identical armature coils $R$-$R'$, $Y$-$Y'$, and $B$-$B'$ (representing the Red, Yellow, and Blue phases) mounted on the stator of an alternator such that their magnetic axes are physically displaced from one another in space by **$120^\circ$**.
2. When a magnetic rotor is rotated at a constant angular velocity $\omega$ inside these three coils, sinusoidal emfs of equal maximum value $E_m$ and equal frequency $f = \omega / (2\pi)$ are induced in all three coils.
3. Because of the $120^\circ$ spatial displacement, the emf in phase $Y$ reaches its positive peak $120^\circ$ after phase $R$, and the emf in phase $B$ reaches its positive peak $120^\circ$ after phase $Y$ (i.e., $240^\circ$ after phase $R$, or $120^\circ$ before phase $R$).

**Instantaneous and Phasor Equations (for $RYB$ Phase Sequence):**
- **Time-domain expressions:**
  $$e_R(t) = E_m \sin(\omega t)$$
  $$e_Y(t) = E_m \sin(\omega t - 120^\circ)$$
  $$e_B(t) = E_m \sin(\omega t - 240^\circ) = E_m \sin(\omega t + 120^\circ)$$

- **RMS Phasor expressions** (where $E_{ph} = E_m/\sqrt{2}$):
  $$\mathbf{E}_R = E_{ph} \angle 0^\circ$$
  $$\mathbf{E}_Y = E_{ph} \angle -120^\circ$$
  $$\mathbf{E}_B = E_{ph} \angle -240^\circ = E_{ph} \angle +120^\circ$$

```
             E_B (120 deg)
               \
                \  120 deg
                 \
                  o------------> E_R (0 deg)
                 /
                /  120 deg
               /
             E_Y (-120 deg)
```

**Important Property:** At every instant of time, the algebraic sum of the three balanced instantaneous three-phase voltages is zero, and their phasor sum is also zero:
$$e_R(t) + e_Y(t) + e_B(t) = 0 \quad \text{and} \quad \mathbf{E}_R + \mathbf{E}_Y + \mathbf{E}_B = 0$$

**Phase Sequence:**
The order in which the voltages in the three phases attain their positive maximum values is called the **phase sequence**. The standard (positive) phase sequence is **$R \to Y \to B$**; reversing the direction of rotation (or interchanging any two line leads) gives the reverse (negative) sequence **$R \to B \to Y$**.

### Advantages of Three-Phase Systems over Single-Phase Systems

1. **Constant Instantaneous Power and Uniform Torque:** In a single-phase system, instantaneous power pulsates at twice the supply frequency ($2f$), causing vibration in motors. In a balanced three-phase system, the total instantaneous power $p_{\text{total}}(t) = p_R(t) + p_Y(t) + p_B(t) = 3 V_{ph} I_{ph} \cos\phi$ is completely constant at every instant, resulting in smooth, pulsation-free torque in three-phase motors.
2. **Higher Output Rating for a Given Frame Size:** A three-phase alternator or motor has about $1.5$ times the power output of a single-phase machine of the same physical frame size and weight.
3. **Economy in Transmission Conductor Material:** To transmit the same amount of power over a fixed distance at the same voltage and power loss, a three-phase system requires only about $75\%$ of the conductor weight (copper/aluminium) required by a single-phase system.
4. **Self-Starting Capability of Three-Phase Motors:** Three-phase currents flowing in three spatially displaced windings produce a uniform **rotating magnetic field (RMF)**, making three-phase induction motors inherently self-starting without auxiliary starting windings or capacitors.
5. **Availability of Two Voltages (in 3-Phase, 4-Wire Star System):** A star-connected system with a neutral wire provides two voltage levels simultaneously: phase voltage ($230\text{ V}$) between any line and neutral for domestic single-phase loads, and line voltage ($\sqrt{3} \times 230 \approx 400\text{ V}$) between any two lines for industrial three-phase loads.

### Balanced Three-Phase System and Basic Definitions

- **Balanced Supply and Balanced Load:** Three-phase voltages are **balanced** if they are equal in magnitude and displaced by $120^\circ$ in phase. A three-phase load is **balanced** if the impedances in all three phases are identical in both magnitude and phase angle ($\mathbf{Z}_R = \mathbf{Z}_Y = \mathbf{Z}_B = Z_{ph} \angle \phi$).
- **Phase Voltage ($V_{ph}$):** The voltage across any single phase winding or single load impedance branch.
- **Line Voltage ($V_L$):** The voltage measured between any two of the three line conductors ($V_{RY}$, $V_{YB}$, or $V_{BR}$).
- **Phase Current ($I_{ph}$):** The current flowing through any single phase winding or single load impedance branch.
- **Line Current ($I_L$):** The current flowing through any of the three external transmission line conductors ($I_R$, $I_Y$, or $I_B$).

### 1. Balanced Star (Wye, Y) Connection

In a **Star (Y) connection**, the similar ends (starting ends or finishing ends) of the three phase impedances are joined together at a common point $N$ called the **neutral point** (or star point), and the other three ends are connected to the three line conductors $R$, $Y$, and $B$.

```
   Line R ------>----+   I_L = I_ph
                     |
                    [Z_ph]  (V_ph = V_RN)
                     |
   Neutral N --------*-------------------- (Neutral Wire)
                    / \
     (V_YN) [Z_ph] /   \ [Z_ph] (V_BN)
                  /     \
   Line Y ------>+       +<------ Line B
```

**Derivation of Line-to-Phase Relations in Star Connection:**

1. **Current Relation:**
   Since each line conductor is connected directly in series with its respective phase winding, the line current is identical to the phase current:
   $$I_L = I_{ph}$$
   *(In a balanced 4-wire star system, the neutral current is $\mathbf{I}_N = \mathbf{I}_R + \mathbf{I}_Y + \mathbf{I}_B = 0$.)*

2. **Voltage Relation:**
   Let the balanced phase voltages with respect to the neutral $N$ be:
   $$\mathbf{V}_{RN} = V_{ph} \angle 0^\circ, \qquad \mathbf{V}_{YN} = V_{ph} \angle -120^\circ, \qquad \mathbf{V}_{BN} = V_{ph} \angle +120^\circ$$
   Applying KVL between line $R$ and line $Y$, the line voltage $\mathbf{V}_{RY}$ (potential of $R$ with respect to $Y$) is the phasor difference between $\mathbf{V}_{RN}$ and $\mathbf{V}_{YN}$:
   $$\mathbf{V}_{RY} = \mathbf{V}_{RN} - \mathbf{V}_{YN} = \mathbf{V}_{RN} + (-\mathbf{V}_{YN})$$
   - On the phasor diagram, $-\mathbf{V}_{YN}$ has magnitude $V_{ph}$ at an angle of $-120^\circ + 180^\circ = +60^\circ$ with respect to $\mathbf{V}_{RN}$.
   - Therefore, the angle between $\mathbf{V}_{RN}$ ($0^\circ$) and $-\mathbf{V}_{YN}$ ($+60^\circ$) is $\alpha = 60^\circ$.
   - Using the parallelogram law of vector addition for two equal phasors of length $V_{ph}$ separated by $60^\circ$:
     $$V_L = V_{RY} = \sqrt{V_{ph}^2 + V_{ph}^2 + 2 V_{ph} V_{ph} \cos 60^\circ} = \sqrt{V_{ph}^2 + V_{ph}^2 + 2 V_{ph}^2 (0.5)} = \sqrt{3 V_{ph}^2}$$
     $$V_L = \sqrt{3} V_{ph} \approx 1.732 V_{ph}$$
   - Also, the resultant phasor $\mathbf{V}_{RY}$ bisects the $60^\circ$ angle between $\mathbf{V}_{RN}$ and $-\mathbf{V}_{YN}$, so **each line voltage leads its corresponding phase voltage by $30^\circ$**:
     $$\mathbf{V}_{RY} = \sqrt{3} V_{ph} \angle +30^\circ, \quad \mathbf{V}_{YB} = \sqrt{3} V_{ph} \angle -90^\circ, \quad \mathbf{V}_{BR} = \sqrt{3} V_{ph} \angle +150^\circ$$

### 2. Balanced Delta (Mesh, $\Delta$) Connection

In a **Delta ($\Delta$) connection**, the finishing end of one phase impedance is connected to the starting end of the next phase impedance to form a closed triangular loop, and the three line conductors $R$, $Y$, and $B$ are connected to the three junction points.

```
   Line R (I_R) ---------->---------*
                                   / \
                                  /   \
                   (I_BR) [Z_ph] /     \ [Z_ph] (I_RY = I_ph)
                                /       \
   Line B (I_B) ------>--------*---------*--------<------ Line Y (I_Y)
                                  [Z_ph]
                                  (I_YB)
```

**Derivation of Line-to-Phase Relations in Delta Connection:**

1. **Voltage Relation:**
   Since each phase impedance is connected directly across a pair of line conductors, the line voltage is equal to the phase voltage:
   $$V_L = V_{ph}$$

2. **Current Relation:**
   Let the three balanced phase currents inside the delta loop be:
   $$\mathbf{I}_{RY} = I_{ph} \angle 0^\circ, \qquad \mathbf{I}_{YB} = I_{ph} \angle -120^\circ, \qquad \mathbf{I}_{BR} = I_{ph} \angle +120^\circ$$
   Applying Kirchhoff's Current Law (KCL) at junction $R$:
   $$\mathbf{I}_R + \mathbf{I}_{BR} = \mathbf{I}_{RY} \implies \mathbf{I}_R = \mathbf{I}_{RY} - \mathbf{I}_{BR} = \mathbf{I}_{RY} + (-\mathbf{I}_{BR})$$
   - On the phasor diagram, $-\mathbf{I}_{BR}$ has magnitude $I_{ph}$ at an angle of $+120^\circ - 180^\circ = -60^\circ$ with respect to $\mathbf{I}_{RY}$ ($0^\circ$).
   - The angle between $\mathbf{I}_{RY}$ and $-\mathbf{I}_{BR}$ is $60^\circ$.
   - Using the parallelogram law of vector addition for two equal phasors of magnitude $I_{ph}$ separated by $60^\circ$:
     $$I_L = I_R = \sqrt{I_{ph}^2 + I_{ph}^2 + 2 I_{ph} I_{ph} \cos 60^\circ} = \sqrt{3 I_{ph}^2}$$
     $$I_L = \sqrt{3} I_{ph} \approx 1.732 I_{ph}$$
   - Also, the line current $\mathbf{I}_R$ bisects the angle between $\mathbf{I}_{RY}$ ($0^\circ$) and $-\mathbf{I}_{BR}$ ($-60^\circ$), so **each line current lags behind its corresponding phase current by $30^\circ$**:
     $$\mathbf{I}_R = \sqrt{3} I_{ph} \angle -30^\circ$$

### Summary of Star and Delta Relations

- **Star (Y) connection:** $I_L = I_{ph}$ and $V_L = \sqrt{3} V_{ph}$.
- **Delta ($\Delta$) connection:** $V_L = V_{ph}$ and $I_L = \sqrt{3} I_{ph}$.

---

<!-- page 10 | Power in balanced three-phase circuits and worked problems -->

## Power in balanced three-phase circuits and worked problems

### Power Expressions in a Balanced Three-Phase Circuit

In any balanced three-phase circuit (whether connected in Star or Delta), each of the three identical phases has phase voltage $V_{ph}$, phase current $I_{ph}$, and phase angle $\phi$ between $V_{ph}$ and $I_{ph}$ (where $\cos\phi = R_{ph}/Z_{ph}$).

Therefore, the active power consumed per phase is $P_{ph} = V_{ph} I_{ph} \cos\phi$, and the **total three-phase active power** $P$ is three times the single-phase power:

$$
P = 3 P_{ph} = 3 V_{ph} I_{ph} \cos\phi \quad \text{(watts, W)}
$$

**Expressing Three-Phase Power in Terms of Line Quantities ($V_L$ and $I_L$):**

1. **For a Balanced Star (Y) Connection:**
   Substitute $V_{ph} = \frac{V_L}{\sqrt{3}}$ and $I_{ph} = I_L$:
   $$P = 3 \left(\frac{V_L}{\sqrt{3}}\right) I_L \cos\phi = \sqrt{3} V_L I_L \cos\phi \quad \text{(W)}$$

2. **For a Balanced Delta ($\Delta$) Connection:**
   Substitute $V_{ph} = V_L$ and $I_{ph} = \frac{I_L}{\sqrt{3}}$:
   $$P = 3 V_L \left(\frac{I_L}{\sqrt{3}}\right) \cos\phi = \sqrt{3} V_L I_L \cos\phi \quad \text{(W)}$$

Thus, the expressions for **Total Active, Reactive, and Apparent Power** in terms of line voltage $V_L$ and line current $I_L$ are identical for both Star and Delta connections:

- **Total Active Power ($P$):**
  $$P = 3 V_{ph} I_{ph} \cos\phi = \sqrt{3} V_L I_L \cos\phi = 3 I_{ph}^2 R_{ph} \quad \text{(W)}$$
- **Total Reactive Power ($Q$):**
  $$Q = 3 V_{ph} I_{ph} \sin\phi = \sqrt{3} V_L I_L \sin\phi = 3 I_{ph}^2 X_{ph} \quad \text{(VAR)}$$
- **Total Apparent Power ($S$):**
  $$S = 3 V_{ph} I_{ph} = \sqrt{3} V_L I_L = \sqrt{P^2 + Q^2} \quad \text{(VA)}$$

*(Important Note: In all these formulas, $\phi$ is always the **phase angle** between the phase voltage $\mathbf{V}_{ph}$ and the phase current $\mathbf{I}_{ph}$, i.e., $\cos\phi = R_{ph}/Z_{ph}$, NOT the angle between $V_L$ and $I_L$.)*

### Comparison: Balanced Star vs. Balanced Delta Connection

| Parameter | Star (Y) Connection | Delta ($\Delta$) Connection |
| --- | --- | --- |
| **Voltage relation** | $V_L = \sqrt{3} V_{ph}$ | $V_L = V_{ph}$ |
| **Current relation** | $I_L = I_{ph}$ | $I_L = \sqrt{3} I_{ph}$ |
| **Phase current ($I_{ph}$)** | $I_{ph} = \frac{V_L}{\sqrt{3} Z_{ph}}$ | $I_{ph} = \frac{V_L}{Z_{ph}}$ |
| **Line current ($I_L$)** | $I_{L(\text{star})} = \frac{V_L}{\sqrt{3} Z_{ph}}$ | $I_{L(\text{delta})} = \frac{\sqrt{3} V_L}{Z_{ph}} = 3 \, I_{L(\text{star})}$ |
| **Total Active Power ($P$)** | $P = \sqrt{3} V_L I_L \cos\phi$ | $P = \sqrt{3} V_L I_L \cos\phi = 3 \, P_{\text{star}}$ (for same $Z_{ph}$ and $V_L$) |
| **Neutral point** | Available (permits 3-phase 4-wire supply) | Not available (3-phase 3-wire only) |

### Worked Example 1 (Star-Connected Load)

**Problem:** Three identical coils, each having a resistance of $15\ \Omega$ and an inductance of $0.04\text{ H}$, are connected in **star** across a $400\text{ V}, 50\text{ Hz}$, three-phase balanced AC supply. Calculate:
(a) Phase voltage,
(b) Impedance and power factor of each phase,
(c) Phase current and line current, and
(d) Total active power, reactive power, and apparent power absorbed by the load.

**Solution:**

1. **Identify given data:** $V_L = 400\text{ V}$, $f = 50\text{ Hz}$, $R_{ph} = 15\ \Omega$, $L_{ph} = 0.04\text{ H}$ (Star connected).
2. (a) **Calculate phase voltage ($V_{ph}$):**
   $$V_{ph} = \frac{V_L}{\sqrt{3}} = \frac{400}{1.732} = 230.94\text{ V}$$
3. (b) **Calculate phase impedance ($Z_{ph}$) and power factor ($\cos\phi$):**
   - Inductive reactance per phase:
     $$X_{ph} = 2\pi f L_{ph} = 2\pi \times 50 \times 0.04 = 12.57\ \Omega$$
   - Impedance per phase:
     $$Z_{ph} = \sqrt{R_{ph}^2 + X_{ph}^2} = \sqrt{15^2 + 12.57^2} = \sqrt{225 + 158.0} = \sqrt{383.0} = 19.57\ \Omega$$
   - Power factor:
     $$\cos\phi = \frac{R_{ph}}{Z_{ph}} = \frac{15}{19.57} = 0.7665\text{ (lagging)}$$
     $$\phi = \cos^{-1}(0.7665) = 39.96^\circ, \qquad \sin\phi = \frac{X_{ph}}{Z_{ph}} = \frac{12.57}{19.57} = 0.6423$$
4. (c) **Calculate phase current ($I_{ph}$) and line current ($I_L$):**
   $$I_{ph} = \frac{V_{ph}}{Z_{ph}} = \frac{230.94}{19.57} = 11.80\text{ A}$$
   For a star connection:
   $$I_L = I_{ph} = 11.80\text{ A}$$
5. (d) **Calculate total $P$, $Q$, and $S$:**
   - Total Active Power:
     $$P = \sqrt{3} V_L I_L \cos\phi = 1.732 \times 400 \times 11.80 \times 0.7665 = 6266\text{ W} = 6.266\text{ kW}$$
   - Total Reactive Power:
     $$Q = \sqrt{3} V_L I_L \sin\phi = 1.732 \times 400 \times 11.80 \times 0.6423 = 5251\text{ VAR} = 5.251\text{ kVAR}$$
   - Total Apparent Power:
     $$S = \sqrt{3} V_L I_L = 1.732 \times 400 \times 11.80 = 8175\text{ VA} = 8.175\text{ kVA}$$

**Answer:** (a) $V_{ph} = 230.94\text{ V}$; (b) $Z_{ph} = 19.57\ \Omega, \cos\phi = 0.7665\text{ (lag)}$; (c) $I_{ph} = I_L = 11.80\text{ A}$; (d) $P = 6.266\text{ kW}, Q = 5.251\text{ kVAR}, S = 8.175\text{ kVA}$.

### Worked Example 2 (Delta-Connected Load)

**Problem:** If the same three coils of Worked Example 1 ($R_{ph} = 15\ \Omega$, $L_{ph} = 0.04\text{ H}$) are reconnected in **delta** across the same $400\text{ V}, 50\text{ Hz}$ three-phase supply, calculate: (a) Phase voltage, (b) Phase current, (c) Line current, and (d) Total active power consumed.

**Solution:**

1. From Worked Example 1, per-phase impedance and power factor remain unchanged:
   $$Z_{ph} = 19.57\ \Omega \quad \text{and} \quad \cos\phi = 0.7665\text{ (lagging)}$$
2. (a) **Phase voltage ($V_{ph}$) in Delta:**
   $$V_{ph} = V_L = 400\text{ V}$$
3. (b) **Phase current ($I_{ph}$):**
   $$I_{ph} = \frac{V_{ph}}{Z_{ph}} = \frac{400}{19.57} = 20.44\text{ A}$$
4. (c) **Line current ($I_L$):**
   $$I_L = \sqrt{3} I_{ph} = 1.732 \times 20.44 = 35.40\text{ A}$$
   *(Notice that $I_{L(\text{delta})} = 35.40\text{ A} = 3 \times 11.80\text{ A} = 3 I_{L(\text{star})}$.)*
5. (d) **Total Active Power ($P$):**
   $$P = \sqrt{3} V_L I_L \cos\phi = 1.732 \times 400 \times 35.40 \times 0.7665 = 18.80\text{ kW}$$
   *(Notice that $P_{\text{delta}} = 18.80\text{ kW} = 3 \times 6.266\text{ kW} = 3 P_{\text{star}}$.)*

**Answer:** (a) $V_{ph} = 400\text{ V}$; (b) $I_{ph} = 20.44\text{ A}$; (c) $I_L = 35.40\text{ A}$; (d) $P = 18.80\text{ kW}$.

### Worked Example 3

**Problem:** A balanced three-phase delta-connected load draws a total active power of $12\text{ kW}$ at a lagging power factor of $0.8$ from a $415\text{ V}, 50\text{ Hz}$ three-phase supply. Find the line current, phase current, and the resistance and reactance of each phase of the load.

**Solution:**

1. **Calculate line current ($I_L$):**
   $$P = \sqrt{3} V_L I_L \cos\phi \implies I_L = \frac{P}{\sqrt{3} V_L \cos\phi} = \frac{12000}{1.732 \times 415 \times 0.8} = 20.87\text{ A}$$
2. **Calculate phase current ($I_{ph}$) for Delta:**
   $$I_{ph} = \frac{I_L}{\sqrt{3}} = \frac{20.87}{1.732} = 12.05\text{ A}$$
3. **Calculate phase impedance ($Z_{ph}$), resistance ($R_{ph}$), and reactance ($X_{ph}$):**
   - For Delta, $V_{ph} = V_L = 415\text{ V}$.
   - $Z_{ph} = \frac{V_{ph}}{I_{ph}} = \frac{415}{12.05} = 34.44\ \Omega$
   - $R_{ph} = Z_{ph} \cos\phi = 34.44 \times 0.8 = 27.55\ \Omega$
   - Since $\cos\phi = 0.8$, $\sin\phi = 0.6$:
     $$X_{ph} = Z_{ph} \sin\phi = 34.44 \times 0.6 = 20.66\ \Omega$$

**Answer:** $I_L = 20.87\text{ A}$, $I_{ph} = 12.05\text{ A}$, $R_{ph} = 27.55\ \Omega$, $X_{ph} = 20.66\ \Omega$.

### Summary

- In both Star and Delta balanced 3-phase circuits: $P = \sqrt{3} V_L I_L \cos\phi$, $Q = \sqrt{3} V_L I_L \sin\phi$, and $S = \sqrt{3} V_L I_L$.
- When three identical impedances are switched from Star to Delta across the same line voltage $V_L$, both the line current drawn and the total power consumed increase by a factor of $3$ ($I_{L(\Delta)} = 3I_{L(Y)}$ and $P_{\Delta} = 3P_Y$).

---

<!-- page 11 | Suggested reading -->

## Suggested reading

### Textbooks

1. **D. P. Kothari and I. J. Nagrath**, *Basic Electrical Engineering*, Tata McGraw Hill, 4th ed., 2019.
2. **J. J. Cathey and Syed A. Nasar**, *Schaum's Outline of Basic Electrical Engineering*, Tata McGraw Hill, 3rd ed., 2010.
3. **D. P. Kothari and I. J. Nagrath**, *Basic Electrical and Electronics Engineering*, McGraw Hill, 2nd ed., 2020.

### Reference Books

1. **D. C. Kulshreshtha**, *Basic Electrical Engineering*, Tata McGraw Hill, 2nd ed., 2019.
2. **V. Del Toro**, *Electrical Engineering Fundamentals*, Pearson Education, 2nd ed., 2019.
3. **T. K. Nagsarkar and M. S. Sukhija**, *Basic Electrical Engineering*, Oxford Higher Education, 3rd ed., 2017.
