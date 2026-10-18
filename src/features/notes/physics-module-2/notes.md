<!-- page 1 | Notes -->

[Non-content page]

---

<!-- page 2 | QUANTUM MECHANICS -->

## QUANTUM MECHANICS

Quantum Mechanics is a branch of mechanics that deals with the mathematical description of the motion and interaction of subatomic particles. It incorporates the concepts of quantization of energy, wave–particle duality and the uncertainty principle.

### Matter Waves

Waves associated with a particle in motion are called de Broglie waves. In case of photons, energy can be expressed as

$E = h\nu = h\frac{c}{\lambda}$ (wave nature)

$E = mc^2$ (Particle nature)

$mc^2 = h\frac{c}{\lambda}$ (wave- particle dual nature)

$mc = \frac{h}{\lambda}$

de Broglie wavelength $\lambda = \frac{h}{p}$

In general, for a particle of mass '$m$' and velocity '$v$', the associated matter wave is of wavelength

$\lambda = \frac{h}{p} = \frac{h}{mv} = \frac{h}{\sqrt{2mKE}} = \frac{h}{\sqrt{2m eV}}$

For an electron accelerated through a potential '$V$', the associated matter wave is of wavelength

$\lambda = \sqrt{\frac{150}{V}} \text{ \AA}$

### Wave function ($\Psi$)

In a wave there is something that varies periodically. In case of electromagnetic waves, the electric and magnetic fields vary periodically, whereas in sound waves, pressure varies periodically. In water waves the height of water surface varies periodically. Similarly in matter waves, a quantity that varies is called wave function, denoted by $\Psi$. It is a mathematical function in terms of position and time that represent state of a particle.

Wave function $\Psi$ is a complex quantity, which gives 'the idea of the probability of finding the particle' in a particular region of space.

### Properties / Physical Significance of Wave Function ($\Psi$)

1. The wave function $\Psi$ is complex quantity, so one can not measure it.

2. The wave function relates the particle nature and wave nature statistically.

3. Square of the wave function $\Psi\Psi^* = |\Psi|^2$ is a real quantity and gives the probability of finding a particle in region of space.

$$
\text{Position probability density, } P = \int |\Psi|^2 \text{d}\tau
$$

Value of $P$ is between $0$ and $1$. For ex; if $P=0.4$, it means there is a $40\%$ chance for the presence of particle.

4. It does not predict the exact location of the particle, but it says where the particle is likely to be.

### Normalization of Wave function

A wave function, which satisfies equation $\int |\Psi|^2 \text{d}\tau = 1$ is said to be normalized to unity or simply normalized. This means particle which exist in a particular region must be found somewhere in that region, i.e., the probability of finding the particle in that region will be $100\%$, i.e., unity.

### Wave function of a particle with energy E and momentum p

Consider a particle moving in x-direction with momentum '$p$'. The wave function of the particle can be written in the form

$\Psi = ae^{-i[\omega t - kx]}$  (1)

---

<!-- page 3 | TIME-DEPENDENT SCHRÖDINGER EQUATION -->

where 'a' is the amplitude , $\omega = \frac{2\pi}{T}$ and $k = \frac{2\pi}{\lambda}$

$$
\omega = \frac{2\pi}{T} = 2\pi\nu = \frac{2\pi h\nu}{h} = \frac{2\pi}{h} E = \frac{E}{\hbar}  (2)
$$

where E-energy of particle and $\hbar = \frac{h}{2\pi}$

Using de Broglie wave equation,

$$
k = \frac{2\pi}{\lambda} = \frac{2\pi p}{h} = \frac{p}{\hbar}  (3)
$$

Using eqn (2) and (3) in (1)

$$
\psi = a e^{\frac{-i}{\hbar}[Et - px]}
$$

### TIME-DEPENDENT SCHRÖDINGER EQUATION

Consider a particle moving in x-direction with momentum 'p'. wave function of the particle is

$$
\psi = a e^{\frac{-i}{\hbar}[Et - px]}  (1)
$$

Differentiating (1) w.r.t. 't'

$$
\frac{\partial \psi}{\partial t} = \frac{-i}{\hbar} E a e^{\frac{-i}{\hbar}[Et - px]}
$$

$$
\frac{\partial \psi}{\partial t} = \frac{-i}{\hbar} E \psi \quad \text{using eqn (1)}
$$

$$
E \psi = i \hbar \frac{\partial \psi}{\partial t}  (2)
$$

Differentiating (1) w.r.t. 'x' twice

$$
\frac{\partial^2 \psi}{\partial x^2} = \frac{i}{\hbar} p \frac{i}{\hbar} p a e^{\frac{-i}{\hbar}[Et - px]}
$$

$$
\frac{\partial^2 \psi}{\partial x^2} = \frac{-p^2}{\hbar^2} \psi \text{ using equation (1)}
$$

$$
p^2 \psi = -\hbar^2 \frac{\partial^2 \psi}{\partial x^2}  (3)
$$

Total energy of the particle is the sum of KE and PE

$$
E = \frac{p^2}{2m} + V
$$

Multiplying by $\psi$

$$
E \psi = \frac{p^2}{2m} \psi + V \psi
$$

Using eqns (2) and (3)

$$
i \hbar \frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} \frac{\partial^2 \psi}{\partial x^2} + V \psi  (4)
$$

This is the time dependent Schrodinger equation in one dimension. In 3 dimension,

$$
i \hbar \frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} \nabla^2 \psi + V \psi
$$

where $\nabla^2$ is the Laplacian operator

### TIME INDEPENDENT SCHRÖDINGER EQUATION

In many cases the potential (V) is independent of time and depends only on position. In such steady state cases, the Schrodinger equation can be simplified by separating the time dependent and independent parts.

Wave function of a particle moving in x-direction with momentum 'p' is

---

<!-- page 4 | TIME-DEPENDENT SCHRÖDINGER EQUATION (cont.) -->

$$
\psi = a e^{\frac{-i}{\hbar}[Et-px]}
$$

$$
\psi = a e^{\frac{-i}{\hbar}Et} e^{\frac{i}{\hbar}px}
$$

$$
\psi = \psi_0 e^{\frac{-i}{\hbar}Et} \qquad (1)
$$

where $\psi_0$ is a function that depend on position only

Differentiating eqn (1) w.r.t. 't'

$$
\frac{\partial \psi}{\partial t} = \frac{-i}{\hbar} E \psi_0 e^{\frac{-i}{\hbar}Et} \qquad (2)
$$

Differentiating eqn (1) w.r.t. 'x' twice

$$
\frac{\partial^2 \psi}{\partial x^2} = \frac{\partial^2 \psi_0}{\partial x^2} e^{\frac{-i}{\hbar}Et} \qquad (3)
$$

The time dependent Schrodinger equation is

$$
i\hbar \frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} \frac{\partial^2 \psi}{\partial x^2} + V\psi \qquad (4)
$$

Using (1), (2) and (3) in (4)

$$
i\hbar \frac{-i}{\hbar} E \psi_0 e^{\frac{-i}{\hbar}Et} = \frac{-\hbar^2}{2m} \frac{\partial^2 \psi_0}{\partial x^2} e^{\frac{-i}{\hbar}Et} + V \psi_0 e^{\frac{-i}{\hbar}Et}
$$

$$
E \psi_0 e^{\frac{-i}{\hbar}Et} = \frac{-\hbar^2}{2m} \frac{\partial^2 \psi_0}{\partial x^2} e^{\frac{-i}{\hbar}Et} + V \psi_0 e^{\frac{-i}{\hbar}Et}
$$

$$
E \psi_0 = \frac{-\hbar^2}{2m} \frac{\partial^2 \psi_0}{\partial x^2} + V \psi_0
$$

$$
\frac{\hbar^2}{2m} \frac{\partial^2 \psi_0}{\partial x^2} + (E - V)\psi_0 = 0 \qquad (5)
$$

This is the time independent Schrodinger equation in one dimension. In three dimensions it takes the form

$$
\frac{\hbar^2}{2m} \nabla^2 \psi_0 + (E - V) \psi_0 = 0
$$

**ONE DIMENSIONAL INFINITE SQUARE WELL POTENTIAL (PARTICLE IN A ONE-DIMENSIONAL BOX)**

Consider a particle of mass 'm' confined in an infinite square well potential of width L defined by

V=0 for x>0 to x<L and

V=\infty for x<0 and x\ge L

Time independent Schrodinger equation of the particle in the region II (where V=0) is

$$
\frac{\hbar^2}{2m} \frac{\partial^2 \psi}{\partial x^2} + (E - 0)\psi = 0
$$

$$
\frac{\partial^2 \psi}{\partial x^2} + \frac{2m}{\hbar^2} E \psi = 0
$$

$$
\frac{\partial^2 \psi}{\partial x^2} + k^2 \psi = 0 \qquad (1)
$$

where $k = \sqrt{\frac{2mE}{\hbar^2}} \qquad (2)$

![Potential energy diagram of a 1D infinite square well showing regions I, II, and III.](/notes/cse/s1/physics/module-2/infinite-well.webp)

Possible solution of eqn (1) is

$$
\psi = A \cos(kx) + \sin(kx) \qquad (3)
$$

---

<!-- page 5 | Allowed Energy Levels -->

Probability of finding the particle outside the well is zero. So $\Psi^*\Psi$ must be zero at walls (at x=0 and x=L). This means $\Psi$ must be zero at walls.

Applying boundary condition; at x=0, $\Psi(x)=0$

$\Psi(0)= A\cos(k.0) + B\sin(k.0)=0$

This is valid only if A=0

$\therefore \Psi = B\sin(kx)$

Applying boundary condition;, at x=L , $\Psi(x)=0$

$\Psi(L)= B\sin(kL) = 0$

This is valid only when $kL=n\pi$

$k = \frac{n\pi}{L}$  (4)

$\therefore \Psi_n = B\sin\left(\frac{n\pi}{L}x\right)$

By using the normalization condition and applying limits it can be shown that $B = \sqrt{\frac{2}{L}}$

$$\Psi_n = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi}{L}x\right)$$  (5)
where $n=1,2,3$ ......

n=0 is not admissible because when n=0, $\Psi(x)=0$ inside the box which means particle is not present inside the box.

Wave function and probability of finding the particle are represented below figure.

![Plots of wave function Psi_n(x) and position probability Psi_n^2(x) for n=1, 2, 3](/notes/cse/s1/physics/module-2/box-wavefunctions.webp)


(Note: when x varies from 0 to L, $\frac{x}{L}$ varies from 0 to L and $\frac{n\pi}{L}x$ varies from 0 to $n\pi$)

In ground state (n=1) maximum probability of finding the particle is at the midpoint. But for n=2, the maximum probabilities are at $\frac{1}{4}^{\text{th}}$ and $\frac{3}{4}^{\text{th}}$ distance from one end of the box.

### Allowed Energy Levels

From (2) and (4)

$\frac{n^2\pi^2}{L^2} = \frac{2mE}{\hbar^2}$

$E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}$ or $E_n = \frac{n^2h^2}{8mL^2}$ (using $\hbar=h/2\pi$)

---

<!-- page 6 | Quantum Mechanical Tunneling -->

when n=1, $E_1 = \frac{h^2}{8mL^2}$  
when n=2, $E_2 = \frac{4h^2}{8mL^2}$  
when n=3, $E_3 = \frac{9h^2}{8mL^2}$  

> **Figure: Energy level diagram for a particle in a box showing discrete energy states E1, E2, E3, E4 corresponding to quantum numbers n=1, 2, 3, 4.**
>
> An energy level diagram with a vertical axis and four horizontal energy levels: E1 at the bottom (n=1), E2 = 4E1 (n=2), E3 = 9E1 (n=3), and E4 = 16E1 (n=4).

This means that particle cannot have any arbitrary energy value but can have only certain discrete values. Also the particle cannot have zero energy.

$E_1 = \frac{h^2}{8mL^2}$ for n=1 is the minimum energy a particle can have and is called zero point energy

The number 'n' is the quantum number.

*Thus confinement of particle in a potential well leads to;*

i. *Certain preferred positions of maximum probability of finding the particle.*

ii. *Particle is allowed to have certain discrete energy levels only.*

iii. *There is a minimum limit to the energy that particle can have.*

### Quantum Mechanical Tunneling

According to classical mechanics, when a particle of lower kinetic energy approaches a larger potential barrier ($E < V_0$), it bounces off. But in quantum mechanics the wave function representing the particle does not vanish on the other side of the barrier. This means there is a finite probability of particle penetrating the barrier exists. Phenomenon of penetration of particle through barriers higher than their own energy is known as quantum mechanical tunnelling.

Wave function of the incident and transmitted particle are

$$
\psi_1 = Ae^{ikx} + Be^{-ikx}
$$

![Quantum tunneling through a finite potential barrier: the wavefunction decays in the barrier but remains non-zero, allowing transmission.](/notes/cse/s1/physics/module-2/tunnelling-barrier.webp)

Where A represent the amplitude of incident wave and B represent the amplitude of reflected wave.

$$
\psi_3 = Fe^{ikx} + Ge^{-ikx}
$$

Where F represent the amplitude of transmitted wave and B represent the amplitude of reflected wave. But there is no reflection in region 3 and therefore

$$
\psi_3 = Fe^{ikx}
$$

Since the probability of finding the particle is proportional to the square of the amplitude, tunneling probabilityis

$$
T = \frac{|F|^2}{|A|^2}
$$

Applications

1. Explanation of Zener break down
2. Explanation of Josephson effect / SQUID

### Heisenberg's Uncertainty Principle

The Heisenberg's uncertainty principle states that it is not possible to find the position and the momentum of a particle simultaneously with precision. In other words, the product of uncertainty in the measurement of position $(\Delta x)$ and uncertainty in the measurement of momentum $(\Delta p)$ is greater than or equal to $h/2\pi$,

$$
\Delta p \Delta x \ge \hbar
$$

---

<!-- page 7 | Applications of uncertainty principle -->

Similar to above expression, we can write

$$
\Delta E \, \Delta t \ge \hbar
$$

where $\Delta E$ and $\Delta t$ are the uncertainties in determining energy and time, respectively and

$$
\Delta J \, \Delta \theta \ge \hbar
$$

$\Delta J$ and $\Delta \theta$ are the uncertainties in the measurement of angular momentum and angle, respectively.

### Applications of uncertainty principle

#### 1. Prove that Electron cannot exist inside nucleus

Radii of nucleus are of the order of $10^{-14} \text{m}$.

$$
\therefore \Delta x = 10^{-14} \text{m}
$$

$$
\Delta p = \frac{\hbar}{\Delta x} = \frac{1.054 \times 10^{-34}}{10^{-14}} = 1.1 \times 10^{-20} \text{kg ms}^{-1}
$$

Momentum of electron is $p \approx 1.1 \times 10^{-20} \text{kg ms}^{-1}$

Neglecting rest mass energy, kinetic energy of the electron is $KE = pc = 1.1 \times 10^{-20} \text{kg ms}^{-1} \times 3 \times 10^{8} \text{ms}^{-1} = 3.3 \times 10^{-12} \text{J} \approx 20 \text{MeV}$

So an electron requires $20 \text{MeV}$ energy to stay inside nucleus. But experiments shows that electrons associated with even the unstable atoms never have more than fraction of this energy. Hence we can conclude that electron cannot be present inside nucleus.

#### 2. Uncertainty in frequency of light emitted by an atom / Natural Line Broadening

Typical lifetime in an excited stat of an atom is $10^{-8} \text{s}$. So the uncertainty of de-excitation is $\Delta t = 10^{-8} \text{s}$. The corresponding uncertainty in energy is

$$
\Delta E = \frac{\hbar}{\Delta t} \quad \text{and} \quad \Delta E = h \Delta \nu
$$

$$
h \Delta \nu = \frac{\hbar}{\Delta t}
$$

$$
\Delta \nu = \frac{\hbar}{h \Delta t} = \frac{1}{2 \pi \Delta t} = \frac{1}{6.28 \times 10^{-8} \text{s}^{-1}} \approx 16 \text{MHz}
$$

---

<!-- page 8 | Applications of uncertainty principle (cont.) -->

[Non-content page]

---

<!-- page 9 | 1 Introduction -->

Dr. Raghu O | Dept. of Physics | GEC Thrissur

Quantum Mechanics

### 1 Introduction

In 1924, French scientist Louis de Broglie proposed that all moving objects exhibit wave like properties under suitable conditions. The waves associated with a particle in motion are called matter waves. The idea originated by analogy with radiation which has dual nature of wave and particle.

The momentum of a photon (particle of light) is given by $p = \frac{h}{\lambda}$ where h is the Planck's constant and $\lambda$ is the wavelength of light. From this $\lambda = \frac{h}{p}$. De Broglie assumed that this equation is very general and can be applied to other particles as well. Hence the wavelength of a particle of mass m moving with velocity v is given by $\lambda = \frac{h}{p} = \frac{h}{mv}$

$$
\begin{aligned}
& \text{If an electron of charge } e \text{ and mass } m \text{ is accelerated by a potential} \\
& \text{difference of } V \text{ volts, its kinetic energy is } K.E. = eV \\
& \qquad \frac{1}{2} mv^2 = eV \\
& \qquad v = \sqrt{\frac{2eV}{m}} \\
& \text{Then the wavelength of the electron is} \\
& \qquad \lambda = \frac{h}{mv} = \frac{h}{m} \sqrt{\frac{m}{2eV}} \\
& \qquad \lambda = \frac{h}{\sqrt{2meV}} = \frac{1.23 \times 10^{-9}}{\sqrt{V}} m \\
& \textbf{Remember that this formula is applicable only for electrons}
\end{aligned}
$$

**Problem :** Find the De Broglie wavelength of a) a ball of mass $500\text{g}$ moving with a speed $50\text{km/hr}$ and b) an electron of mass $9.1 \times 10^{-31}\text{kg}$ accelerated through

---

<!-- page 10 | 2 Wave function and Probability -->

100V

In the first part of the problem, we find that the wavelength of the ball $10^{-34}\text{ m}$ is so small compared to its size and hence we cannot find any wave aspect in its behavior. In the second part we find that the wavelength $0.123 \times 10^{-10}\text{m}$ is much larger compared to the classical electron radius of $\simeq 10^{-15}\text{ m}$. Hence it cannot be neglected.

De Broglie had no experimental evidence to support his hypothesis. However he was able to show that this leads to the stationary orbits and energy quantization postulated in the Bohr model of hydrogen atom in 1913. Later in 1927, De Broglie's hypothesis was experimentally proved by electron diffraction experiments conducted by Davission and Germer and also by G P Thomson.

## 2 Wave function and Probability

In water waves, the quality that varies periodically with space and time is the relative height of the water surface. In sound waves, it is pressure. In light waves, electric and magnetic fields vary. The quantity whose variations make up matter waves is called wave function represented by $\Psi$ (Greek letter pronounced as psi). In general $\Psi$ is a function of all space coordinates and time ie., $\Psi = \Psi(x, y, z, t)$. $\Psi$ can be expressed as a mathematical function but is *not physically observable or measurable*. The mathematical theory of quantum mechanics describes how to use $\Psi(x, y, z, t)$ to determine values of particle's position, velocity, momentum, energy, angular momentum etc.

Even though $\Psi(x, y, z, t)$ does not have a physical meaning, square of the absolute value of $\Psi(x, y, z, t)$ ie., $|\Psi|^2$ **represents the probability of finding the particle at the point $(x,y,z)$ at the time $t$**. $|\Psi|^2$ is called probability density or probability distribution function. Larger the value of $|\Psi|^2$, larger is the probability and smaller the value of $|\Psi|^2$, smaller is the probability. In general $\Psi$ can be complex function. $|\Psi|^2 = (\sqrt{(\Psi^*\Psi)})^2$ is always positive. Wave function $\Psi$ is also called probability amplitude because of this reason. $|\Psi|^2dV$ is the probability of finding the particle in a small volume dV around the point $(x,y,z)$ at time $t$.

## 3 Wave packets

The wave function of the De Broglie waves corresponding to a moving body reflects the probability that it will be found at a particular place at a particular

---

<!-- page 11 | 2 Wave function and Probability (cont.) -->

time. Consider a wave function of the form $\Psi = Ae^{-i(\omega t-kx)}$. Its real part can be graphically represented as shown below.

![Continuous sinusoidal wave representing the real part of the wave function](/notes/cse/s1/physics/module-2/infinite-well.webp)


This type of wave function gives the same probability of finding the particle everywhere, since $|\Psi|^2 = |\Psi\Psi^*|^2 = (\sqrt{Ae^{-i(\omega t-kx)}.Ae^{+i(\omega t-kx)}})^2 = (\sqrt{A^2})^2 = A^2$.
This is a constant which does not depend on position or time. Hence the particle is equally likely to be found at any point along the x-axis. If the particle is more likely to be found at some points in space compared to other points at a given time, the wave function is graphically represented by a wave packet as shown in figure.

![Wave packet graph with localized central amplitude](/notes/cse/s1/physics/module-2/wave-packet.webp)


When the particle moves, the wave packet moves as a whole. A wave packet like this is formed by the super position of a large number of waves of different wavelengths ($\lambda$). Larger the number of component waves, smaller is the length of the wave packet and vice versa.

> **Figure: Superposition of multiple waves resulting in a wave packet**
>
> Diagram with two main sections. On the left, labeled 'adding these ...', four stacked sinusoidal waves of slightly different wavelengths and frequencies are shown. On the right, labeled 'results in this', the resulting interference pattern forms a wave packet.

The velocity with which the wave packet as a whole moves is called the group velocity or particle velocity ($v_g$). The velocity of the individual waves is called the phase velocity ($v_p$).

---

<!-- page 12 | 2 Wave function and Probability (cont.) -->

> **Figure: A wave packet showing a group velocity envelope and phase velocity oscillations with a spread of Delta x**
>
> An illustration showing a wave packet or wave group. The wave packet is bounded by an envelope labeled with group velocity $v_g$ pointing to an upper envelope line and phase velocity $v_p$ pointing to individual oscillations inside. The horizontal length of the packet is marked as $\Delta x$ with arrows at both ends.

4 Properties of $\Psi$

1. $\Psi$ must be finite, continuous and single valued everywhere.
2. $\frac{\partial \Psi}{\partial x}, \frac{\partial \Psi}{\partial y}, \frac{\partial \Psi}{\partial z}$ must be continuous and single valued. (This is because these derivatives determine the momentum of the particle which should be continuous)
3. Normalization:- If $\Psi$ is a wavefunction corresponding to a particle, then we can multiply $\Psi$ with some constant $A$ (independent of $x,y,z$) and get a new wavefunction $\Psi_N = A \Psi$. Suppose the particle is present at some point in a space of volume $V$. Then the probability of finding the particle at all points in the volume $V$ will add upto $1$.

   Mathematically, $\sum_{\text{All points in volume } V} |\Psi_N|^2 = 1$ or

   $$\int_V |\Psi_N|^2 dV = 1$$

   or

   $$A^2 \int_V |\Psi|^2 dV = 1$$

   Then $\Psi_N$ is said to be normalized. The process of multiplying the wave function $\Psi$ with a suitable constant such that the probability of finding the particle within certain region becomes equal to $1$, is called normalization

4. As $x, y, z \rightarrow \pm\infty$, $\Psi \rightarrow 0$

5. Uncertainty principle - Problems in measurement when particles have wave nature

When we consider a moving particle as a wave group, there are fundamental limits to the accuracy with which we can measure particle properties such as position and momentum.

---

<!-- page 13 | 2 Wave function and Probability (cont.) -->

> **Figure: Sine wave representing a wave function with a constant wavelength lambda**
>
> A continuous red sine wave spanning horizontally across the image, representing a single wavelength sine wave function.

If the wave function of the particle is a sine wave of wavelength $\lambda$ as shown in figure, it implies that the momentum of the particle $p = \frac{h}{\lambda}$ is known exactly. But the probability of finding the particle $|\Psi|^2$ has the same value all over space for this type of wave function. Hence the exact position of the particle at a given time cannot be determined. We say that the particle is 'spread out' in space. Thus if momentum is known exactly there is a very large uncertainty in the position of the particle.

Suppose the wave function of the particle has the following form.

> **Figure: Wave packet representing a localized wave function with uncertainty Delta x**
>
> A red wave packet graph centered horizontally with a high amplitude central oscillation that dampens out quickly to the sides, illustrating localization in a region of width Delta x.

Now the probability of finding the particle $|\Psi|^2$ is zero everywhere except in the region of width $\Delta x$. Hence the uncertainty in the position of the particle is only $\Delta x$. This type of a wave is formed by interference of a large number of waves of slightly different wavelengths. Since wavelength of the combination can have any values in the range, momentum of the particle $p = \frac{h}{\lambda}$ can also have different values. Thus there is an uncertainty in the momentum of the particle represented by $\Delta p$ and the momentum cannot be exactly determined. For narrower wave packets the number of component waves is larger and hence $\Delta p$ will be larger.

It is **impossible to know simultaneously and exactly the position and momentum of a particle.** This statement is known as **Heisenberg's uncertainty principle.** If $\Delta x$ is the uncertainty in position and $\Delta p$ is the uncertainty in the corresponding momentum (x component of momentum) then it can be shown that

$$
\Delta x \Delta p \ge \frac{1}{2}\hbar
$$

where $\hbar = \frac{h}{2\pi}$.

Similar uncertainty relations occur in the case of pairs of variables angular

---

<!-- page 14 | 6 Applications of uncertainty principle -->

displacement ($\theta$) and angular momentum ($L$), and energy ($E$) and time ($t$).
$$
\Delta L \Delta \theta \ge \frac{1}{2}\hbar
$$
$$
\Delta E \Delta t \ge \frac{1}{2}\hbar
$$

A pair of variables which are connected by uncertainty relation is known as **conjugate pair**. It should be noted that there is no uncertainty relationship between $\Delta x$ and component of momentum other than x component.

Why uncertainty principle is not relevant in the macroscopic world? A bullet of mass $25\text{g}$ is moving with a speed $400\text{m}/\text{s}$. Speed is measured accurate up to $0.02\%$. Calculate the certainty with which the position of the bullet can be located. $h = 6.625 \times 10^{-34}\text{Js}$

Ans. The uncertainty in position is $\Delta x \ge 2.626 \times 10^{-32}\text{m}$. This uncertainty in position is much less than the size of an atom which can be neglected in this case.

## 6 Applications of uncertainty principle

Planck's constant h is so small that the limitations imposed by the uncertainty principle are significant only in the subatomic level. On such a scale, this principle is of great help in understanding many phenomena.

1. **Non existence of electrons inside the atomic nucleus**

   In earlier days it was thought that the electrons coming out of nucleus as $\beta$ rays in radioactivity actually exist within the nucleus. Uncertainty principle showed that this is impossible.

   The diameter of the nucleus is typically $10^{-14}\text{m}$. Hence if the electron exists inside the nucleus the maximum uncertainty in its position is $\Delta x = 10^{-14}\text{m}$.

   The minimum uncertainty in the momentum of the electron is
   $$\Delta p = \frac{\hbar}{2\Delta x} = \frac{6.625 \times 10^{-34}}{4 \times 3.14 \times 10^{-14}} = 0.5275 \times 10^{-20}\text{kgm}/\text{s}$$

   If this is the uncertainty in momentum the minimum momentum itself should be at least this much.ie; $p_{min} = 0.5275 \times 10^{-20}\text{kgm}/\text{s}$

   Minimum kinetic energy $= pc = 0.5275 \times 10^{-20} \times 3 \times 10^8 = 1.5825 \times 10^{-12}\text{J} = \frac{1.5825 \times 10^{-12}}{1.602 \times 10^{-19}}\text{eV} \approx 10\text{MeV}$

---

<!-- page 15 | How can we determine Psi for a particle? - The Schrodinger E -->

The kinetic energy of the electron must be greater than $10\text{ MeV}$ if it exists inside the nucleus. Electrons emitted in $\beta$ decay have energies which are only a fraction of this value. Thus it is concluded that electrons from the nuclei are not those which previously exist inside.

2. Width of spectral lines

When excited atoms return to the ground level, the radiation emitted by them do not have a sharply defined frequency. This can be proved using uncertainty principle.

The average time between the excitation of an atom and the time it radiates (also called the life time of an atom in an energy state) is of the order of $10^{-8}\text{ s}$. Since $\Delta E \Delta t \approx \frac{\hbar}{2}$ the uncertainty in the energy of the emitted photon is

$$
\Delta E \approx \frac{\hbar}{2\Delta t} = \frac{6.625 \times 10^{-34}}{2 \times 3.14 \times 2 \times 10^{-8}} \approx 5.3 \times 10^{-27}\text{ J}
$$

Therefore the minimum uncertainty in the frequency of the emitted photon is

$$
\Delta \nu = \frac{\Delta E}{h} = 8 \times 10^6\text{ Hz}
$$

Hence the emitted frequency is not sharp, or the spectral lines have a finite width.

### How can we determine $\Psi$ for a particle? - The Schrodinger Equation

We assume that the wave function of a particle moving freely along the $+\text{ve}$ direction of X-axis

$$
\Psi = Ae^{-i\omega(t-\frac{x}{v})} \qquad (1)
$$

Here $\omega = 2\pi \nu$ and $v = \lambda \nu$. Therefore

$$
\Psi = Ae^{-i2\pi \nu(t-\frac{x}{\lambda \nu})} = Ae^{-2\pi i(\nu t - \frac{x}{\lambda})} \qquad (2)
$$

We know frequency and wave length of the wave are related to energy and momentum of the associated particle by the relations $E = h\nu$ and $\lambda = \frac{h}{p}$. Using these relations, the equation for $\Psi$ becomes

$$
\Psi = Ae^{-2\pi i (\frac{Et}{h} - \frac{px}{h})} \qquad (3)
$$

Let $\frac{h}{2\pi} = \hbar$. Therefore $\frac{2\pi}{h} = \frac{1}{\hbar}$. Substituting this, equation 3 becomes

$$
\Psi = Ae^{-\frac{i}{\hbar}(Et-px)} \qquad (4)
$$

7

---

<!-- page 16 | How can we determine Psi for a particle? - The Schrodinger E (cont.) -->

Differentiating equation 4 partially with respect to $t$
$$
\frac{\partial \Psi}{\partial t} = Ae^{-\frac{i}{\hbar}(Et - px)} \cdot \frac{-iE}{\hbar} = \frac{-iE}{\hbar} \Psi
$$
or
$$
E \Psi = -\frac{\hbar \partial \Psi}{i \partial t} = i\hbar \frac{\partial \Psi}{\partial t} \quad \text{(5)}
$$

Differentiating equation 4 partially with respect to $x$
$$
\frac{\partial \Psi}{\partial x} = Ae^{-\frac{i}{\hbar}(Et - px)} \cdot \frac{ip}{\hbar} = \frac{ip}{\hbar} \Psi
$$
or
$$
p \Psi = \frac{\hbar \partial \Psi}{i \partial x} = -i\hbar \frac{\partial \Psi}{\partial x} \quad \text{(6)}
$$

Equations 5 and 6 are used to find energy and momentum of the particle if the wave function is known.

In these equations $E$ represents the total energy which is the sum of kinetic energy(KE) and potential energy($V$).

Kinetic energy, $KE = \frac{1}{2}mv^2 = \frac{(mv)^2}{2m} = \frac{p^2}{2m}$. Therefore
$$
E \Psi = \left[ \frac{p^2}{2m} + V \right] \Psi = \frac{p^2 \Psi}{2m} + V \Psi \quad \text{(7)}
$$

Substituting the values of $E$ and $p$ from equations 5 and 6 in the above equation
$$
i\hbar \frac{\partial \Psi}{\partial t} = \frac{1}{2m} \left( -i\hbar \frac{\partial}{\partial x} \right)^2 \Psi + V \Psi
$$
$$
i\hbar \frac{\partial \Psi}{\partial t} = \frac{-\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2} + V \Psi \quad \text{(8)}
$$

This is the most general form of Schrodinger equation. In this equation $V$ and $\Psi$ depends on time and hence it is also called *Time dependent Schrodinger equation*.

If $\Psi$ depends on $x, y$ and $z$, we get the 3 dimensional Schrodinger equation
$$
i\hbar \frac{\partial \Psi}{\partial t} = \frac{-\hbar^2}{2m} \left[ \frac{\partial^2 \Psi}{\partial x^2} + \frac{\partial^2 \Psi}{\partial y^2} + \frac{\partial^2 \Psi}{\partial z^2} \right] + V \Psi
$$
or
$$
i\hbar \frac{\partial \Psi}{\partial t} = \frac{-\hbar^2}{2m} \nabla^2 \Psi + V \Psi \quad \text{(9)}
$$

where $\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}$ is called the Laplacian operator.

The potential energy function $V$ represents the influence of the surroundings on the particle. Any restrictions on the particle's motion will affect the potential energy function $V$. Once $V$ is known, Schrodinger equation may be solved for the wave function $\Psi$ of the particle, from which $|\Psi|^2$ and other physical quantities can be determined.

---

<!-- page 17 | How can we determine Psi for a particle? - The Schrodinger E (cont.) -->

8 Time independent Schrodinger equation- steady state form of Schrodinger equation

In many situations, the potential energy of the particle does not depend on time. The forces that act on the particle, and hence $V$ varies with position of the particle only. When this condition is satisfied the Schrodinger equation simplified as follows.

let
$$
\Psi = A e^{-\frac{i}{\hbar}(Et-px)} = A e^{-\frac{i}{\hbar}Et} e^{\frac{i}{\hbar}px} \quad (10)
$$

Let $A e^{\frac{i}{\hbar}px} = \Psi_0$. Then
$$
\Psi = \Psi_0 e^{-\frac{i}{\hbar}Et} \quad (11)
$$

This equation shows that the wave function $\Psi$ has a time independent part $\Psi_0$ and a time dependent part $e^{-\frac{i}{\hbar}Et}$.

Differentiating equation (11) partially with respect to $t$
$$
\frac{\partial \Psi}{\partial t} = \frac{-iE}{\hbar} \Psi_0 e^{-\frac{i}{\hbar}Et} \quad (12)
$$

Differentiating equation (11) partially with respect to $x$ two times
$$
\frac{\partial^2 \Psi}{\partial x^2} = \frac{\partial^2 \Psi_0}{\partial x^2} e^{-\frac{i}{\hbar}Et} \quad (13)
$$

Substituting these values in the time dependent form of Schrodinger equation ie.;
$$
i\hbar \frac{\partial \Psi}{\partial t} = \frac{-\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2} + V\Psi \quad (14)
$$

we get
$$
i\hbar \left(\frac{-iE}{\hbar}\right) \Psi_0 e^{-\frac{i}{\hbar}Et} = \frac{-\hbar^2}{2m} \frac{\partial^2 \Psi_0}{\partial x^2} e^{-\frac{i}{\hbar}Et} + V \Psi_0 e^{-\frac{i}{\hbar}Et}
$$

Dividing throughout by $e^{-\frac{i}{\hbar}Et}$
$$
E \Psi_0 = \frac{-\hbar^2}{2m} \frac{\partial^2 \Psi_0}{\partial x^2} + V \Psi_0
$$

or $\frac{\hbar^2}{2m} \frac{\partial^2 \Psi_0}{\partial x^2} + (E - V) \Psi_0 = 0$. Since $\Psi_0$ depends only on $x$, there is no need to use partial derivative of $\psi$.
$$
\frac{d^2 \Psi_0}{dx^2} + \frac{2m}{\hbar^2}(E - V)\Psi_0 = 0 \quad (15)
$$

This is the **time independent Schrodinger equation**. The three dimensional form is
$$
\frac{\partial^2 \Psi_0}{\partial x^2} + \frac{\partial^2 \Psi_0}{\partial y^2} + \frac{\partial^2 \Psi_0}{\partial z^2} + \frac{2m}{\hbar^2} (E - V) \Psi_0 = 0 \quad (16)
$$

or
$$
\nabla^2 \Psi_0 + \frac{2m}{\hbar^2} (E - V) \Psi_0 = 0 \quad (17)
$$

---

<!-- page 18 | 9 Applications of Schrodinger equation -->

9 Applications of Schrodinger equation

9.1 Particle moving inside a box (particle moving in an one dimensional infinite square well potential)

Consider a particle moving inside a box along the x-direction, bouncing back and forth between the walls of the box. $L$ is the length of the box. The box has insurmountable potential barriers at x=0 and x=L ie; the box is supposed to have walls of infinite height at x=0 and x=L

> **Figure: Potential well diagram showing infinite walls at x=0 and x=L with V=infinity and V=0 inside the box**
>
> A diagram of a one-dimensional potential well along the x-axis. The region inside the box from x=0 to x=L has V=0. The regions outside (x<=0 and x>=L) are shaded gray, representing insurmountable barriers where V=infinity. Vertical arrows point upwards at x=0 and x=L labeled V=infinity. The horizontal axis has labels 0 and L, with an x arrow pointing to the right.

The variation of potential energy is as follows

$$
V = 0, \text{ for; } 0 < x < L
$$
$$
V = \infty, \text{ for } x \le 0,  x \ge L
$$

The particle has a mass m and its position at any instant is $0 < x < L$. Since the particle cannot exist outside the box, its wave function $\Psi$ is $0$ for $x \le 0$ and $x \ge L$. Our task is to find what $\Psi$ is within the box. ie., between $x=0$ and $x=L$. Since the potential energy does not depend on time, we can use time independent Schrodinger equation.

$$
\frac{d^2\psi}{dx^2} + \frac{2m}{\hbar^2}(E - V)\psi = 0
$$

where $\psi$ is the time independent part of the wave function.( Note: $\psi$ is the same as $\Psi_0$ that we used in the previous section. We are changing the symbol for simplicity)

In the region $0 < x < L$; $V = 0$

$$
\frac{d^2\psi}{dx^2} + \frac{2m}{\hbar^2} E \psi = 0
$$

put $\frac{2mE}{\hbar^2} = k^2$, then

$$
\frac{d^2\psi}{dx^2} + k^2 \psi = 0
$$

---

<!-- page 19 | 9 Applications of Schrodinger equation (cont.) -->

The general solution of this differential equation is
$$
\psi = Ae^{ikx} + Be^{-ikx}
$$

To evaluate the constants we apply the boundary conditions. Since the particle cannot jump over the walls the wave function does not exist outside the box.
$$
\psi = 0 \text{ at } x = 0 \text{ and } \psi = 0 \text{ at } x = L
$$

Applying the first condition we get $A + B = 0$ or $B = -A$
$$
\psi = A(e^{ikx} - e^{-ikx})
$$
$$
\psi = 2iA \sin kx
$$

Applying the second condition we get
$$
2iA \sin kL = 0
$$

Since $2iA$ cannot be zero, this implies
$$
\sin kL = 0 \quad \text{or} \quad kL = n\pi \quad \text{or} \quad k = \frac{n\pi}{L} \quad \text{where} \quad n = 1, 2, 3, \dots
$$

Thus
$$
\psi = 2iA \sin \frac{n\pi x}{L}
$$

This equation shows that the the wave function has several expressions depending on the value of $n$. The $n^{\text{th}}$ wave function is given by
$$
\psi_n = C \sin \frac{n\pi x}{L} \quad \text{where } C = 2iA
$$

The value of n depends on the energy of the particle in the box E as follows. We have
$$
kL = n\pi
$$
$$
\text{but} \quad k^2 = \frac{2mE}{\hbar^2} ; k = \sqrt{\frac{2mE}{\hbar^2}}
$$
$$
\sqrt{\frac{2mE}{\hbar^2}} L = n\pi
$$

since n should be an integer, the energy of the particle E can have only certain values. Squaring the above expression
$$
\frac{2mE}{\hbar^2} L^2 = n^2 \pi^2
$$

11

---

<!-- page 20 | 9 Applications of Schrodinger equation (cont.) -->

$$
E = E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}
$$

We find that the energy of the particle in the potential well can have certain values only or the **energy is quantized**. The minimum energy is $\frac{\pi^2\hbar^2}{2mL^2}$. For each value of $n$, there is an energy level $E_n$ and a corresponding wave function $\psi_n$. Each value of $E_n$ is called an **energy eigen value** and the corresponding $\psi_n$ is called the **energy eigen function**. Thus inside the potential well the particle can have only discrete energy values. The particle cannot have zero energy. The energy levels are not equally spaced.

Nature of wave function of the particle

We have
$$
\psi_n = C \sin \frac{n\pi x}{L}
$$

The square of the absolute value of wave function gives the probability of finding the particle. Since the particle is sure to be found somewhere inside the potential well we can write

$$
\int_0^L \psi_n^* \psi_n dx = 1 \text{ (for all values of } n\text{)}
$$

This is called the **normalization condition** of the wave function.

Substituting for $\psi_n$
$$
CC^* \int_0^L \sin^2 \left(\frac{n\pi x}{L}\right) dx = 1
$$

$$
|C|^2 \int_0^L \left( \frac{1 - \cos \left(\frac{2n\pi x}{L}\right)}{2} \right) dx = 1
$$

$$
|C|^2 \frac{L}{2} = 1; \ |C|^2 = \frac{2}{L}
$$

Or

$$
|C| = \sqrt{\frac{2}{L}}
$$

$$
\psi_n = \sqrt{\frac{2}{L}} \sin \frac{n\pi x}{L}
$$

---

<!-- page 21 | 9.2 Barrier penetration problem (Tunneling effect) -->

This is the expression for the normalized wave function. The graph of the first three wave functions and the corresponding probability densities are given below.

![Graphs of the first three wave functions, probability densities, and energy levels](/notes/cse/s1/physics/module-2/box-wavefunctions.webp)


9.2 Barrier penetration problem (Tunneling effect)

Consider a stream of particles of energy $E$, incident on a potential barrier of the type shown in figure.

> **Figure: Potential barrier diagram showing regions I, II, and III**
>
> A 2D plot with x-axis representing position and y-axis representing V(x). It shows a potential barrier of height V_0 between x = 0 and x = L, divided into three regions: I (x < 0), II (0 <= x <= L, shaded light blue), and III (x > L). A horizontal dashed line at energy E passes through all three regions.

The potential is described by
$$
V = 0 \quad \text{for } x < 0 \quad (Region \ I)
$$
$$
V = V_0 \quad \text{for } 0 \le x \le L \quad (Region \ II)
$$
$$
V = 0 \quad \text{for } x > L \quad (Region \ III)
$$

To find the wave function of the particle, we have to solve the Schrodinger equation (time independent) in the three regions. Then **it is seen that the wave function is non zero in all the three regions I, II and III.**

---

<!-- page 22 | 9.2 Barrier penetration problem (Tunneling effect) (cont.) -->

> **Figure: Potential barrier and wave function diagram**
>
> A plot showing potential energy V(x) versus position x. There is a rectangular potential barrier of height V_0 spanning from x=0 to x=L. Region I (x < 0) shows oscillating wave function Psi_I representing incident + reflected waves. Region II (0 < x < L, shaded in light blue) shows a decaying wave function Psi_II inside the barrier. Region III (x > L) shows a transmitted wave Psi_III.

* Non zero value of wave function in region I is due to the incident particles and particles reflected from the potential barrier.
* A non zero value of wave function in region III shows that, there is a finite probability of finding the particles there also. Since the energy of the incident particles is less than the height of the barrier (potential energy), they could not have overcome the barrier and moved over to region III.
* Further, since the wave function and hence probability of finding the particles is non zero in region II also, we will have to assume that the particles have moved to region III by penetrating the barrier or 'tunneling' through the barrier.

Thus there is a non-zero probability of transmission across the potential barrier even though $E < V_0$ i.e., the energy of the particles are less than the height of the potential barrier. This is in contrast to classical situation. It is purely a quantum effect signifying the wave property of quantum objects. The probability of tunneling depends on the height and width of the barrier.

The transmission coefficient is defined as
$$
T = \frac{\text{Probability density of the transmitted wave}}{\text{Probability density of the incident wave}}
$$

This is a finite non zero quantity in quantum mechanics. Its value depends on the width of the potential barrier (Larger the width smaller is the value of T) and the height of the barrier i.e., $V_0$ (Larger the value of $V_0$ compared to E, smaller is the value of T).

**Applications of tunneling**

(a) Tunnel diode

(b) Explanation of $\alpha$-decay

(c) Scanning tunneling microscope (STM)

---

<!-- page 23 | 9.2 Barrier penetration problem (Tunneling effect) (cont.) -->

Problems

(a) A certain excited state of helium atom is known to have an average lifetime of $2.11 \times 10^{-8}\text{s}$. What is the minimum uncertainty with which the frequency of the emitted radiation can be measured?

(b) Calculate the uncertainty in frequency of the emitted radiation if the uncertainty in time of an excited atom is $5 \times 10^{-8}\text{s}$.

(c) The time gap between the excitation of an atom and emission of radiation is $\triangle t = 10^{-8}\text{s}$. Find the uncertainty in the frequency of the radiation.

(d) Find the energy of the ground state of an electron moving in an infinitely high potential box of width $1\text{Å}^0$.

(e) An electron confined in a one dimensional box of width L is known to be in its first excited state. Determine the probability density of electron in the central half. (Jan 2017)

Short answer type questions

(a) What is tunnel effect? What is quantum mechanical tunneling? (May 2019, Apr 2018, Dec 2017, July 2016)

(b) State and explain Heisenberg's uncertainty principle. (July 2018)

(c) What are the characteristics of a well-defined wave function? (Dec 2018)

(d) A well behaved wave function is normalized. Why? (Apr 2018, Aug 2016)

(e) Give the probability interpretation of the wave function. (May 2017, Jan 2016)

(f) Explain the absence of electrons in in the nucleus on the basis of the uncertainty principle. (May 2017)

(g) What is meant by wave function? Write its normalization condition. (Jan 2017)

(h) How do you account for the natural line broadening on the basis of Heisenberg's uncertainty principle? (May 2016)

Essay type questions

(a) Write the Schrodinger equation for a particle trapped in a one dimensional box of width L and solve it to obtain the energy eigen values and wave function. (May 2019, July 2018, May 2017, Aug 2016, July 2016)

---

<!-- page 24 | 9.2 Barrier penetration problem (Tunneling effect) (cont.) -->

(b) State uncertainty principle. Explain the absence of electron inside the nucleus using this principle, (Dec 2018, April 2018, Jan 2017)

(c) Starting from the time dependent equation, derive Schrodinger's time independent wave equation. (Dec 2017)

(d) Formulate Schrodinger's time dependent equation starting from a plane wave equation using De Broglie's formula and Einstein's relation for photon energy. (Jan 2016)
