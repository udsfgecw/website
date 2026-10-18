<!-- page 1 | Start here -->

# Module 2 at a glance

Quantum mechanics is the branch of mechanics that describes the motion and interaction of very small particles such as electrons. It rests on three ideas that have no place in everyday (classical) physics:

1. **Wave–particle duality.** Every moving particle has a wave associated with it, the **matter wave**.
2. **Probability.** The wave is described by a **wave function** $\Psi$, and $|\Psi|^2$ tells you where the particle is *likely* to be, not where it *is*.
3. **Limits on measurement.** Position and momentum cannot both be known exactly: the **uncertainty principle**.

From these we build the **Schrödinger equation**, the equation that the wave function obeys, and solve it for two standard problems: a particle trapped in a **box** (which explains why energy comes in discrete levels) and a particle meeting a **barrier** (which explains **tunnelling**).

## What you will be able to do

- Calculate the de Broglie wavelength of a particle, and of an electron accelerated through a voltage.
- Explain the physical meaning of the wave function, and normalise it.
- Explain wave packets, and how they lead to the uncertainty principle.
- State the uncertainty principle and use it to show that electrons cannot exist inside the nucleus and that spectral lines have a natural width.
- Derive the time-dependent and the time-independent Schrödinger equations.
- Solve the Schrödinger equation for a particle in a one-dimensional box, and find its energy levels and normalised wave functions.
- Explain quantum mechanical tunnelling and its applications.

## How to use these notes

- Each page follows **idea → derivation or explanation → worked example → common mistakes.**
- Green boxes hold key ideas. Amber boxes marked **Watch out** hold mistakes that cost marks. Boxes marked **Note on the source** record where the lecture notes were corrected.
- The derivations of the Schrödinger equation and the particle in a box are the most frequently asked essay questions. Practise writing them out.
- The last page has practice problems with answers, past exam questions and a formula sheet.

## Where each topic sits

| Part | Pages |
| --- | --- |
| Waves and probability | Matter waves, wave function, wave packets |
| Uncertainty | Uncertainty principle and its applications |
| Schrödinger equation | Time-dependent form, time-independent form |
| Applications | Particle in a box, tunnelling |

> **Prerequisites.** Wavelength $\lambda$, frequency $\nu$, angular frequency $\omega=2\pi\nu$ and wave number $k=2\pi/\lambda$; the photon relations $E=h\nu$ and $p=h/\lambda$; complex numbers, with $e^{i\theta}=\cos\theta+i\sin\theta$ and $|z|^2=z^*z$; partial derivatives and simple integration.

---

<!-- page 2 | Matter waves -->

# Matter waves

## The idea

Light behaves both as a wave (interference, diffraction) and as a stream of particles (photons). In **1924** the French physicist **Louis de Broglie** proposed that the reverse is also true: **every moving particle has a wave associated with it**. These waves are called **matter waves** or **de Broglie waves**.

## The de Broglie wavelength

For a photon the energy can be written two ways:

$$
E=h\nu=\frac{hc}{\lambda}\quad\text{(wave)}\qquad\qquad E=mc^2\quad\text{(particle)}
$$

Equating them gives $mc=\dfrac{h}{\lambda}$. Since $mc$ is the momentum $p$ of the photon,

$$
\lambda=\frac{h}{p}
$$

De Broglie assumed that this relation holds for **every** particle. A particle of mass $m$ moving with speed $v$ therefore has

> **de Broglie wavelength.**
>
> $$\lambda=\frac{h}{p}=\frac{h}{mv}=\frac{h}{\sqrt{2m\,KE}}$$

where $KE=\tfrac12mv^2=\dfrac{p^2}{2m}$ is the kinetic energy.

## An electron accelerated through a voltage

An electron (charge $e$, mass $m$) accelerated from rest through a potential difference $V$ gains kinetic energy $eV$:

$$
\frac12mv^2=eV\quad\Longrightarrow\quad v=\sqrt{\frac{2eV}{m}}
$$

$$
\lambda=\frac{h}{mv}=\frac{h}{\sqrt{2meV}}
$$

Putting in the values of $h$, $m$ and $e$:

$$
\lambda=\frac{1.227\times10^{-9}}{\sqrt V}\ \text{m}=\frac{12.27}{\sqrt V}\ \text{Å}\approx\sqrt{\frac{150}{V}}\ \text{Å}
$$

> **Watch out.** This shortcut formula is **only for electrons**, because it has the electron's mass and charge built in. For any other particle use $\lambda=h/\sqrt{2m\,KE}$.

## Example: why we never notice matter waves

**Example 1.** Find the de Broglie wavelength of (a) a ball of mass $500\ \text{g}$ moving at $50\ \text{km/h}$, and (b) an electron accelerated through $100\ \text{V}$.

(a) $v=50\ \text{km/h}=13.9\ \text{m/s}$, so

$$
\lambda=\frac{h}{mv}=\frac{6.626\times10^{-34}}{0.5\times13.9}=\mathbf{9.5\times10^{-35}\ \text{m}}
$$

This is absurdly small compared with the size of the ball, so no wave behaviour can ever be detected.

(b)

$$
\lambda=\frac{1.227\times10^{-9}}{\sqrt{100}}=\mathbf{1.23\times10^{-10}\ \text{m}}=1.23\ \text{Å}
$$

This is about the size of an atom and much larger than the classical electron radius ($\approx10^{-15}\ \text{m}$), so the wave nature of electrons is important. It is also comparable to the spacing of atoms in a crystal, which is why crystals diffract electrons.

> **Note on the source.** One lecture set gave the electron's wavelength in part (b) as $0.123\times10^{-10}\ \text{m}$. The correct value is $1.23\times10^{-10}\ \text{m}$, ten times larger, as the formula $\lambda=1.227\times10^{-9}/\sqrt V$ shows.

## Experimental evidence

De Broglie had no experimental evidence, but he showed that his idea explained the stationary orbits and quantised energies of Bohr's model of the hydrogen atom (1913). In **1927** his hypothesis was confirmed by the **electron diffraction** experiments of **Davisson and Germer**, and of **G. P. Thomson**: electrons were diffracted by crystals exactly like waves of wavelength $h/p$.

---

<!-- page 3 | Wave function and probability -->

# The wave function and probability

## The idea

In every wave something varies periodically: the height of the water surface in a water wave, the pressure in a sound wave, the electric and magnetic fields in a light wave. The quantity that varies in a matter wave is called the **wave function**, written $\Psi$ (the Greek letter psi). In general it depends on position and time:

$$
\Psi=\Psi(x,y,z,t)
$$

The wave function describes the **state** of the particle. The theory of quantum mechanics shows how to obtain the particle's position, momentum, energy and other quantities from $\Psi$.

## Physical meaning (Born's interpretation)

- $\Psi$ is in general a **complex** quantity, so it **cannot be measured** and has no direct physical meaning by itself.
- The square of its absolute value,

$$
|\Psi|^2=\Psi^*\Psi
$$

is always **real and positive**. It is the **probability density**: the probability per unit volume of finding the particle at $(x,y,z)$ at time $t$.

- The probability of finding the particle in a small volume $dV$ is $|\Psi|^2\,dV$, and in a region it is

$$
P=\int|\Psi|^2\,dV
$$

$P$ lies between $0$ and $1$. For example $P=0.4$ means a 40 % chance that the particle is in that region.

- Where $|\Psi|^2$ is large the particle is likely to be found; where it is small, unlikely. Because $\Psi$ gives a probability in this way it is also called the **probability amplitude**.

> **Key idea.** Quantum mechanics does not predict the exact position of a particle. It predicts the **probability** of finding it in each region. The wave function connects the wave and particle natures statistically.

## Normalisation

The particle is certainly somewhere, so the total probability over all space must be exactly 1:

$$
\int_{\text{all space}}|\Psi|^2\,dV=1
$$

A wave function that satisfies this is **normalised**. If a wave function $\Psi$ does not, we multiply it by a constant $A$ chosen so that

$$
A^2\int|\Psi|^2\,dV=1
$$

and then $\Psi_N=A\Psi$ is normalised. This process is called **normalisation**.

## Conditions for a well-behaved wave function

1. $\Psi$ must be **finite, continuous and single-valued** everywhere.
2. Its first derivatives $\dfrac{\partial\Psi}{\partial x}$, $\dfrac{\partial\Psi}{\partial y}$, $\dfrac{\partial\Psi}{\partial z}$ must also be **continuous and single-valued** (they are related to the momentum, which must be continuous).
3. $\Psi$ must be **normalisable**, so $\Psi\to0$ as $x,y,z\to\pm\infty$.

## The wave function of a free particle

A particle moving along $x$ with energy $E$ and momentum $p$ is represented by a plane wave

$$
\Psi=A\,e^{-i(\omega t-kx)}
$$

with amplitude $A$, angular frequency $\omega=\dfrac{2\pi}{T}=2\pi\nu$ and wave number $k=\dfrac{2\pi}{\lambda}$. Using $E=h\nu$ and the de Broglie relation $\lambda=h/p$:

$$
\omega=2\pi\nu=\frac{2\pi E}{h}=\frac{E}{\hbar}\qquad k=\frac{2\pi}{\lambda}=\frac{2\pi p}{h}=\frac{p}{\hbar}
$$

where $\hbar=\dfrac{h}{2\pi}$. Substituting,

$$
\Psi=A\,e^{-\frac{i}{\hbar}(Et-px)}
$$

This form is the starting point for the Schrödinger equation.

> **Watch out.** The probability density is $|\Psi|^2=\Psi^*\Psi$, **not** $\Psi^2$. For a complex $\Psi$, $\Psi^2$ is itself complex and cannot be a probability.

---

<!-- page 4 | Wave packets -->

# Wave packets

## A single wave cannot represent a localised particle

The real part of the free-particle wave function $\Psi=Ae^{-i(\omega t-kx)}$ is a sine wave that goes on for ever. Its probability density is

$$
|\Psi|^2=\Psi^*\Psi=A\,e^{+i(\omega t-kx)}\cdot A\,e^{-i(\omega t-kx)}=A^2
$$

which is the **same everywhere**. The particle is equally likely to be anywhere along the $x$ axis. That describes a particle with an exact wavelength, and hence an exact momentum, but no position at all.

## A wave packet

A real particle is more likely to be found in some places than in others. Its wave function must be large in a small region and nearly zero elsewhere. Such a wave is a **wave packet** (or **wave group**).

![Top: a single wavelength extends everywhere. Bottom: a wave packet confined to a region of width Δx](/notes/cse/s1/physics/module-2/wave-packet.webp)

A wave packet is formed by the **superposition** of a large number of waves of slightly different wavelengths. They reinforce each other in a small region and cancel elsewhere.

- The **more** component waves (the wider the range of wavelengths), the **narrower** the packet.
- The **fewer** component waves, the **wider** the packet.

When the particle moves, the wave packet moves as a whole.

## Phase velocity and group velocity

- The **phase velocity** $v_p$ is the velocity of the individual component waves.
- The **group velocity** $v_g$ is the velocity of the packet (the envelope) as a whole. The group velocity equals the velocity of the **particle**, so it is also called the **particle velocity**.

## From wave packets to uncertainty

- A wave with a single wavelength $\lambda$ has an exact momentum $p=h/\lambda$, but it is spread over all space: the **position is completely uncertain**.
- A narrow packet of width $\Delta x$ pins the position down to $\Delta x$, but it is made of many wavelengths, so the momentum $p=h/\lambda$ takes a spread of values $\Delta p$.
- The narrower the packet (smaller $\Delta x$), the more wavelengths it needs, and the larger $\Delta p$.

> **Key idea.** You cannot make $\Delta x$ and $\Delta p$ both small at the same time. This trade-off is not a fault of our instruments; it is built into the wave nature of matter. It is the **uncertainty principle** (next page).

---

<!-- page 5 | Heisenberg's uncertainty principle -->

# Heisenberg's uncertainty principle

## Statement

> **Heisenberg's uncertainty principle.** It is impossible to know simultaneously and exactly both the position and the momentum of a particle. If $\Delta x$ is the uncertainty in position and $\Delta p$ the uncertainty in the corresponding component of momentum, then
>
> $$\Delta x\,\Delta p\ \ge\ \frac{\hbar}{2}$$

where $\hbar=\dfrac{h}{2\pi}=1.055\times10^{-34}\ \text{J s}$.

## Other conjugate pairs

Two quantities connected by an uncertainty relation form a **conjugate pair**. The other important pairs are energy and time, and angular momentum and angle:

$$
\Delta E\,\Delta t\ \ge\ \frac{\hbar}{2}\qquad\qquad\Delta L\,\Delta\theta\ \ge\ \frac{\hbar}{2}
$$

There is **no** uncertainty relation between $x$ and a component of momentum other than $p_x$. For example $x$ and $p_y$ can both be known exactly.

> **Note on the source.** One lecture set wrote these relations with $\hbar$ on the right ($\Delta x\,\Delta p\ge\hbar$) and the other with $\hbar/2$. The precise lower limit is $\hbar/2$, used throughout these notes. Some textbooks write $\hbar$ or even $h$ because they are making an order-of-magnitude estimate; answers then change by a factor of 2 or $4\pi$. State which form you use.

## Why we never notice it in everyday life

Planck's constant is tiny, so the limits only matter on the atomic scale.

**Example 1.** A bullet of mass $25\ \text{g}$ moves at $400\ \text{m/s}$, and its speed is measured to within $0.02\,\%$. How precisely can its position be known?

$$
\Delta v=400\times\frac{0.02}{100}=0.08\ \text{m/s}\qquad\Delta p=m\,\Delta v=0.025\times0.08=2\times10^{-3}\ \text{kg m/s}
$$

$$
\Delta x\ \ge\ \frac{\hbar}{2\,\Delta p}=\frac{1.055\times10^{-34}}{2\times2\times10^{-3}}=\mathbf{2.64\times10^{-32}\ \text{m}}
$$

This is far smaller than even the size of an atom, so for a bullet the uncertainty is completely negligible.

> **Note on the source.** The lecture notes gave $2.626\times10^{-32}\ \text{m}$; evaluating $h/(4\pi\,\Delta p)$ gives $2.64\times10^{-32}\ \text{m}$.

> **Watch out.** "Uncertainty" here is not experimental error. Even with perfect instruments, $\Delta x\,\Delta p$ cannot be smaller than $\hbar/2$. And remember to convert a percentage accuracy into an actual $\Delta v$ before multiplying by the mass.

---

<!-- page 6 | Applications of the uncertainty principle -->

# Applications of the uncertainty principle

## 1. Electrons cannot exist inside the nucleus

In the early days it was thought that the electrons emitted as $\beta$ rays in radioactive decay were present inside the nucleus beforehand. The uncertainty principle shows this is impossible.

The diameter of a nucleus is about $10^{-14}\ \text{m}$. An electron inside it would have an uncertainty in position of at most

$$
\Delta x=10^{-14}\ \text{m}
$$

The minimum uncertainty in its momentum is then

$$
\Delta p=\frac{\hbar}{2\,\Delta x}=\frac{1.055\times10^{-34}}{2\times10^{-14}}=5.3\times10^{-21}\ \text{kg m/s}
$$

The momentum itself must be at least as large as its uncertainty, so $p\ge5.3\times10^{-21}\ \text{kg m/s}$. At such momentum the electron is highly relativistic, so its kinetic energy is about $pc$:

$$
KE\approx pc=5.3\times10^{-21}\times3\times10^{8}=1.6\times10^{-12}\ \text{J}=\frac{1.6\times10^{-12}}{1.6\times10^{-19}}\ \text{eV}\approx\mathbf{10\ \text{MeV}}
$$

An electron inside the nucleus would need a kinetic energy of at least about $10\ \text{MeV}$. But the electrons emitted in $\beta$ decay have energies of only a fraction of this (a few MeV at most). Hence **electrons do not exist inside the nucleus**; they are created at the moment of decay.

> **Note on the source.** One lecture set used $\Delta x\,\Delta p\ge\hbar$ and obtained $20\ \text{MeV}$; the other used $\hbar/2$ and obtained $10\ \text{MeV}$. Either way the conclusion is the same, because both values are far above the energies observed in $\beta$ decay.

## 2. Natural width of spectral lines

When an excited atom returns to its ground state it emits radiation. The emitted lines are not perfectly sharp: each has a small spread of frequencies, its **natural width**.

The average time an atom stays in an excited state (its **lifetime**) is about $\Delta t=10^{-8}\ \text{s}$. This is the uncertainty in the time of emission. The energy–time relation gives an uncertainty in the energy of the emitted photon:

$$
\Delta E\approx\frac{\hbar}{2\,\Delta t}=\frac{1.055\times10^{-34}}{2\times10^{-8}}=5.3\times10^{-27}\ \text{J}
$$

Since $E=h\nu$, the uncertainty in frequency is

$$
\Delta\nu=\frac{\Delta E}{h}=\frac{1}{4\pi\,\Delta t}=\frac{1}{4\pi\times10^{-8}}\approx\mathbf{8\times10^{6}\ \text{Hz}}
$$

So the emitted frequency is not sharp: the **spectral line has a finite width** of a few megahertz. The shorter the lifetime, the broader the line.

> **Key idea.** Both results come from the same move: a quantity confined to a small range ($\Delta x$ or $\Delta t$) forces a large spread in its conjugate ($\Delta p$ or $\Delta E$).

> **Watch out.** Use $\Delta\nu=\Delta E/h$ (with $h$), not $\Delta E/\hbar$. Combining it with $\Delta E=\hbar/(2\Delta t)$ gives the tidy result $\Delta\nu=1/(4\pi\Delta t)$.

---

<!-- page 7 | Time-dependent Schrödinger equation -->

# The time-dependent Schrödinger equation

## The idea

The Schrödinger equation is to quantum mechanics what Newton's second law is to classical mechanics: given the forces (the potential energy $V$) it determines how the wave function behaves. It cannot be *derived* from older physics. We obtain it by starting from the wave function of a free particle and using $E=h\nu$ and $p=h/\lambda$; the result is then taken as the general law.

## Derivation

The wave function of a particle moving freely along $+x$ with energy $E$ and momentum $p$ is (see the wave function page)

$$
\Psi=A\,e^{-\frac{i}{\hbar}(Et-px)}\qquad(1)
$$

**Differentiate with respect to $t$:**

$$
\frac{\partial\Psi}{\partial t}=-\frac{iE}{\hbar}\,A\,e^{-\frac{i}{\hbar}(Et-px)}=-\frac{iE}{\hbar}\,\Psi
$$

Multiply both sides by $i\hbar$ and use $i^2=-1$:

$$
E\Psi=i\hbar\,\frac{\partial\Psi}{\partial t}\qquad(2)
$$

**Differentiate with respect to $x$:**

$$
\frac{\partial\Psi}{\partial x}=\frac{ip}{\hbar}\,\Psi\qquad\Longrightarrow\qquad p\Psi=-i\hbar\,\frac{\partial\Psi}{\partial x}
$$

Differentiating once more:

$$
\frac{\partial^2\Psi}{\partial x^2}=\left(\frac{ip}{\hbar}\right)^2\Psi=-\frac{p^2}{\hbar^2}\,\Psi\qquad\Longrightarrow\qquad p^2\Psi=-\hbar^2\,\frac{\partial^2\Psi}{\partial x^2}\qquad(3)
$$

**Total energy.** The total energy is kinetic plus potential energy. With $KE=\tfrac12mv^2=\dfrac{p^2}{2m}$:

$$
E=\frac{p^2}{2m}+V
$$

Multiply by $\Psi$:

$$
E\Psi=\frac{p^2\Psi}{2m}+V\Psi\qquad(4)
$$

**Substitute (2) and (3) into (4):**

$$
\boxed{\,i\hbar\,\frac{\partial\Psi}{\partial t}=-\frac{\hbar^2}{2m}\,\frac{\partial^2\Psi}{\partial x^2}+V\Psi\,}\qquad(5)
$$

This is the **time-dependent Schrödinger equation in one dimension**. Here $V$ and $\Psi$ may depend on both position and time.

## Three dimensions

If $\Psi$ depends on $x$, $y$ and $z$:

$$
i\hbar\,\frac{\partial\Psi}{\partial t}=-\frac{\hbar^2}{2m}\left(\frac{\partial^2\Psi}{\partial x^2}+\frac{\partial^2\Psi}{\partial y^2}+\frac{\partial^2\Psi}{\partial z^2}\right)+V\Psi=-\frac{\hbar^2}{2m}\nabla^2\Psi+V\Psi
$$

where $\nabla^2=\dfrac{\partial^2}{\partial x^2}+\dfrac{\partial^2}{\partial y^2}+\dfrac{\partial^2}{\partial z^2}$ is the **Laplacian operator**.

## Energy and momentum operators

Equations (2) and the line above (3) show that, acting on $\Psi$, energy and momentum can be replaced by operations:

$$
E\ \to\ i\hbar\,\frac{\partial}{\partial t}\qquad\qquad p\ \to\ -i\hbar\,\frac{\partial}{\partial x}
$$

These are used to find the energy and momentum of a particle when its wave function is known.

The potential energy $V$ represents the influence of the surroundings on the particle. Once $V$ is known, the Schrödinger equation can be solved for $\Psi$, and from $\Psi$ we obtain $|\Psi|^2$ and all other physical quantities.

> **Watch out.** Keep the signs straight: there is a **minus** sign in front of $\dfrac{\hbar^2}{2m}\dfrac{\partial^2\Psi}{\partial x^2}$, and $i\hbar$ (not $-i\hbar$) on the left. They come from $\left(\tfrac{ip}{\hbar}\right)^2=-\tfrac{p^2}{\hbar^2}$ and from multiplying $-\tfrac{iE}{\hbar}\Psi$ by $i\hbar$.

---

<!-- page 8 | Time-independent Schrödinger equation -->

# The time-independent Schrödinger equation

## The idea

In many situations the potential energy depends only on position, not on time: $V=V(x)$. The forces on the particle do not change with time, and the particle is in a **steady state**. The Schrödinger equation can then be simplified by separating the wave function into a part that depends only on position and a part that depends only on time.

## Derivation

Start from the free-particle wave function and split the exponential:

$$
\Psi=A\,e^{-\frac{i}{\hbar}(Et-px)}=A\,e^{\frac{i}{\hbar}px}\;e^{-\frac{i}{\hbar}Et}
$$

Write $\psi=A\,e^{\frac{i}{\hbar}px}$, which depends only on $x$:

$$
\Psi=\psi\,e^{-\frac{i}{\hbar}Et}\qquad(1)
$$

So $\Psi$ has a **time-independent part** $\psi$ and a **time-dependent part** $e^{-iEt/\hbar}$.

Differentiate (1) with respect to $t$:

$$
\frac{\partial\Psi}{\partial t}=-\frac{iE}{\hbar}\,\psi\,e^{-\frac{i}{\hbar}Et}\qquad(2)
$$

Differentiate (1) twice with respect to $x$:

$$
\frac{\partial^2\Psi}{\partial x^2}=\frac{d^2\psi}{dx^2}\,e^{-\frac{i}{\hbar}Et}\qquad(3)
$$

Substitute (1), (2) and (3) into the time-dependent equation $i\hbar\,\dfrac{\partial\Psi}{\partial t}=-\dfrac{\hbar^2}{2m}\dfrac{\partial^2\Psi}{\partial x^2}+V\Psi$:

$$
i\hbar\left(-\frac{iE}{\hbar}\right)\psi\,e^{-\frac{i}{\hbar}Et}=-\frac{\hbar^2}{2m}\,\frac{d^2\psi}{dx^2}\,e^{-\frac{i}{\hbar}Et}+V\psi\,e^{-\frac{i}{\hbar}Et}
$$

The left side is $E\psi\,e^{-iEt/\hbar}$. Divide throughout by $e^{-iEt/\hbar}$:

$$
E\psi=-\frac{\hbar^2}{2m}\,\frac{d^2\psi}{dx^2}+V\psi
$$

Rearranging:

$$
\boxed{\,\frac{d^2\psi}{dx^2}+\frac{2m}{\hbar^2}\,(E-V)\,\psi=0\,}
$$

This is the **time-independent Schrödinger equation** in one dimension. Since $\psi$ depends only on $x$, ordinary derivatives are used.

## Three dimensions

$$
\frac{\partial^2\psi}{\partial x^2}+\frac{\partial^2\psi}{\partial y^2}+\frac{\partial^2\psi}{\partial z^2}+\frac{2m}{\hbar^2}(E-V)\psi=0
\qquad\text{or}\qquad
\nabla^2\psi+\frac{2m}{\hbar^2}(E-V)\psi=0
$$

> **Key idea.** For a steady state, $|\Psi|^2=|\psi|^2\,\big|e^{-iEt/\hbar}\big|^2=|\psi|^2$, because $|e^{-iEt/\hbar}|=1$. So the probability density does not change with time, which is why these are called **stationary states**. All the problems in this module use the time-independent equation.

> **Watch out.** An equivalent and equally correct way to write the result is $\dfrac{\hbar^2}{2m}\dfrac{d^2\psi}{dx^2}+(E-V)\psi=0$ (multiply through by $\hbar^2/2m$). Do not mix the two forms halfway through a derivation.

---

<!-- page 9 | Particle in a one-dimensional box -->

# Particle in a one-dimensional box

## The set-up

A particle of mass $m$ moves along $x$, bouncing back and forth between two walls a distance $L$ apart. The walls are **infinitely high**, so the particle can never get past them. This is the **one-dimensional infinite square well**:

$$
V=0\quad\text{for }0<x<L\qquad\qquad V=\infty\quad\text{for }x\le0\text{ and }x\ge L
$$

![Infinite square well: V = 0 between x = 0 and x = L, and V infinite outside (regions I, II and III)](/notes/cse/s1/physics/module-2/infinite-well.webp)

The particle cannot exist outside the box, so $\psi=0$ for $x\le0$ and $x\ge L$. We need $\psi$ inside. Since $V$ does not depend on time we use the time-independent equation.

## Solving the Schrödinger equation

Inside the box ($V=0$):

$$
\frac{d^2\psi}{dx^2}+\frac{2mE}{\hbar^2}\,\psi=0
$$

Put

$$
k^2=\frac{2mE}{\hbar^2}\qquad(1)
$$

so that

$$
\frac{d^2\psi}{dx^2}+k^2\psi=0
$$

The general solution of this equation is

$$
\psi=A\sin kx+B\cos kx\qquad(2)
$$

with constants $A$ and $B$ fixed by the **boundary conditions**. The wave function must be continuous, and it is zero outside, so it must vanish at both walls:

$$
\psi=0\ \text{ at }x=0\qquad\text{and}\qquad\psi=0\ \text{ at }x=L
$$

**At $x=0$:** $\psi(0)=A\sin0+B\cos0=B=0$. So

$$
\psi=A\sin kx
$$

**At $x=L$:** $\psi(L)=A\sin kL=0$. We cannot have $A=0$ (then $\psi=0$ everywhere and there is no particle), so $\sin kL=0$:

$$
kL=n\pi\quad\Longrightarrow\quad k=\frac{n\pi}{L},\qquad n=1,2,3,\dots\qquad(3)
$$

$n=0$ is not allowed, because it gives $\psi=0$ everywhere inside the box, meaning no particle.

## Energy levels

Squaring (3) and using (1):

$$
\frac{2mE}{\hbar^2}=\frac{n^2\pi^2}{L^2}
$$

$$
\boxed{\,E_n=\frac{n^2\pi^2\hbar^2}{2mL^2}=\frac{n^2h^2}{8mL^2}\,}\qquad n=1,2,3,\dots
$$

(using $\hbar=h/2\pi$). Each allowed energy $E_n$ is called an **energy eigenvalue**.

$$
E_1=\frac{h^2}{8mL^2},\qquad E_2=4E_1,\qquad E_3=9E_1,\qquad E_4=16E_1,\ \dots
$$

## Normalised wave functions

The wave function for level $n$ is $\psi_n=A\sin\dfrac{n\pi x}{L}$. The particle is certainly somewhere in the box, so

$$
\int_0^L|\psi_n|^2\,dx=1\quad\Longrightarrow\quad|A|^2\int_0^L\sin^2\frac{n\pi x}{L}\,dx=1
$$

Using $\sin^2\theta=\dfrac{1-\cos2\theta}{2}$, the cosine term integrates to zero over whole half-periods, leaving

$$
|A|^2\cdot\frac{L}{2}=1\quad\Longrightarrow\quad A=\sqrt{\frac2L}
$$

$$
\boxed{\,\psi_n=\sqrt{\frac2L}\,\sin\frac{n\pi x}{L}\,}
$$

Each $\psi_n$ is an **energy eigenfunction**.

![Wave functions and probability densities for n = 1, 2, 3, and the energy levels E1, 4E1, 9E1, 16E1](/notes/cse/s1/physics/module-2/box-wavefunctions.webp)

## What the solution tells us

1. **Energy is quantised.** The particle can have only the discrete energies $E_n$, not any value.
2. **Zero-point energy.** The lowest energy is $E_1=h^2/8mL^2$, not zero. A confined particle can never be completely at rest.
3. **The levels are not equally spaced.** $E_n\propto n^2$, so the gaps grow: $E_2-E_1=3E_1$, $E_3-E_2=5E_1$, …
4. **Preferred positions.** In the ground state ($n=1$) the particle is most likely to be found at the centre. For $n=2$ the most likely positions are at $L/4$ and $3L/4$, and it is never found at the centre. Classically every position would be equally likely.
5. **Smaller box, larger energies.** $E_n\propto1/L^2$. For a large box (or a heavy particle) the levels are so close that the quantisation is unnoticeable.

**Example 1.** Find the ground-state energy of an electron in an infinitely deep box of width $1\ \text{Å}$.

$$
E_1=\frac{h^2}{8mL^2}=\frac{(6.626\times10^{-34})^2}{8\times9.11\times10^{-31}\times(10^{-10})^2}=6.02\times10^{-18}\ \text{J}=\mathbf{37.6\ \text{eV}}
$$

(The next levels are $E_2=4E_1=150\ \text{eV}$ and $E_3=9E_1=338\ \text{eV}$.)

**Example 2.** An electron in a box of width $L$ is in its first excited state. Find the probability of finding it in the central half of the box.

The first excited state is $n=2$. The central half runs from $L/4$ to $3L/4$:

$$
P=\int_{L/4}^{3L/4}\frac2L\sin^2\frac{2\pi x}{L}\,dx=\frac1L\int_{L/4}^{3L/4}\left(1-\cos\frac{4\pi x}{L}\right)dx=\frac1L\left[x-\frac{L}{4\pi}\sin\frac{4\pi x}{L}\right]_{L/4}^{3L/4}
$$

The sine is $\sin3\pi-\sin\pi=0$, so

$$
P=\frac1L\cdot\frac L2=\mathbf{\frac12}
$$

(For comparison, in the ground state $n=1$ the same region has probability $\tfrac12+\tfrac1\pi\approx0.82$, because the particle is concentrated near the centre.)

> **Watch out.** The general solution has **two** constants: $\psi=A\sin kx+B\cos kx$. The boundary condition at $x=0$ removes the cosine ($B=0$); the condition at $x=L$ quantises $k$. An equally valid start is $\psi=Ae^{ikx}+Be^{-ikx}$, which gives $B=-A$ and $\psi=2iA\sin kx$, the same function.

> **Note on the source.** One lecture set wrote the general solution as "$A\cos kx+\sin kx$", missing the second constant. It is corrected above.

---

<!-- page 10 | Quantum mechanical tunnelling -->

# Quantum mechanical tunnelling

## The idea

Fire a stream of particles of energy $E$ at a potential barrier of height $V_0$ and width $L$, with $E<V_0$:

$$
V=0\ \ (x<0,\ \text{region I})\qquad V=V_0\ \ (0\le x\le L,\ \text{region II})\qquad V=0\ \ (x>L,\ \text{region III})
$$

- **Classically**, a particle without enough energy to climb the barrier is simply reflected. It can never appear on the other side.
- **Quantum mechanically**, solving the Schrödinger equation in the three regions shows that the wave function is **non-zero in all three**. So there is a finite probability of finding the particle beyond the barrier.

> **Quantum mechanical tunnelling.** The penetration of a particle through a potential barrier higher than its own energy. It is a purely quantum effect, a consequence of the wave nature of matter.

![Tunnelling: the incident wave is partly reflected, decays inside the barrier and emerges as a smaller transmitted wave](/notes/cse/s1/physics/module-2/tunnelling-barrier.webp)

## The wave function in each region

- **Region I:** incident and reflected waves.

$$
\psi_{\text{I}}=Ae^{ikx}+Be^{-ikx}
$$

$A$ is the amplitude of the incident wave and $B$ that of the reflected wave.

- **Region II (inside the barrier):** the wave function does not oscillate. It **decays exponentially**, roughly as $e^{-\kappa x}$, with $\kappa=\dfrac{\sqrt{2m(V_0-E)}}{\hbar}$. It is small but not zero at the far side.

- **Region III:** only a transmitted wave, since nothing comes back from the right.

$$
\psi_{\text{III}}=Fe^{ikx}
$$

Since the particles in region III could not have climbed over the barrier, and since $\psi$ is non-zero inside the barrier, they must have passed **through** it: they have **tunnelled**.

## Transmission coefficient

The probability of tunnelling is measured by the **transmission coefficient**:

$$
T=\frac{\text{probability density of the transmitted wave}}{\text{probability density of the incident wave}}=\frac{|F|^2}{|A|^2}
$$

$T$ is small but finite. For a wide or high barrier it is approximately

$$
T\approx e^{-2\kappa L},\qquad\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}
$$

so it falls off **very rapidly**:

- the **wider** the barrier ($L$ larger), the smaller $T$;
- the **higher** the barrier compared with the energy ($V_0-E$ larger), the smaller $T$;
- the **heavier** the particle, the smaller $T$. Tunnelling is important for light particles such as electrons.

For example, an electron $1\ \text{eV}$ below the top of a barrier has $\kappa\approx5.1\times10^{9}\ \text{m}^{-1}$: $T\approx6\times10^{-3}$ for a barrier $0.5\ \text{nm}$ wide, but only about $4\times10^{-5}$ for $1\ \text{nm}$.

## Applications

- **Tunnel diode** (Module 4): electrons tunnel through a very thin depletion layer.
- **Zener breakdown** in heavily doped p-n junctions.
- **Alpha decay**: alpha particles tunnel out of the nucleus.
- **Scanning tunnelling microscope (STM)**: the tunnelling current between a sharp tip and a surface depends so strongly on the gap that it maps individual atoms.
- **Josephson effect** and **SQUIDs**: Cooper pairs tunnel through a thin insulating layer between two superconductors.

> **Watch out.** Tunnelling does not mean the particle gains energy to go over the barrier. Its energy stays $E$ throughout; it appears on the far side with the same energy, just with a much smaller probability (amplitude).

---

<!-- page 11 | Practice and formula sheet -->

# Practice questions and formula sheet

Constants: $h=6.626\times10^{-34}\ \text{J s}$, $\hbar=1.055\times10^{-34}\ \text{J s}$, $m_e=9.11\times10^{-31}\ \text{kg}$, $e=1.6\times10^{-19}\ \text{C}$.

## Numerical problems

**1.** An excited state of a helium atom has an average lifetime of $2.11\times10^{-8}\ \text{s}$. What is the minimum uncertainty in the frequency of the emitted radiation?

$$
\Delta\nu=\frac{1}{4\pi\,\Delta t}=\frac{1}{4\pi\times2.11\times10^{-8}}=\mathbf{3.8\times10^{6}\ \text{Hz}}=3.8\ \text{MHz}
$$

**2.** Find the uncertainty in the frequency of the emitted radiation if the uncertainty in time of an excited atom is $5\times10^{-8}\ \text{s}$.

$$
\Delta\nu=\frac{1}{4\pi\times5\times10^{-8}}=\mathbf{1.6\times10^{6}\ \text{Hz}}=1.6\ \text{MHz}
$$

**3.** The time between the excitation of an atom and its emission of radiation is $\Delta t=10^{-8}\ \text{s}$. Find the uncertainty in the frequency.

$$
\Delta\nu=\frac{1}{4\pi\times10^{-8}}=\mathbf{8.0\times10^{6}\ \text{Hz}}=8.0\ \text{MHz}
$$

**4.** Find the ground-state energy of an electron in an infinitely high potential box of width $1\ \text{Å}$.

$$
E_1=\frac{h^2}{8mL^2}=\frac{(6.626\times10^{-34})^2}{8\times9.11\times10^{-31}\times10^{-20}}=6.02\times10^{-18}\ \text{J}=\mathbf{37.6\ \text{eV}}
$$

**5.** An electron in a one-dimensional box of width $L$ is in its first excited state. Find the probability of finding it in the central half of the box.

$n=2$, and integrating $|\psi_2|^2=\frac2L\sin^2\frac{2\pi x}{L}$ from $L/4$ to $3L/4$ gives $P=\mathbf{\tfrac12}$ (worked on the particle-in-a-box page).

**6.** Find the de Broglie wavelength of an electron accelerated through $100\ \text{V}$.

$$
\lambda=\frac{1.227\times10^{-9}}{\sqrt{100}}=\mathbf{1.23\times10^{-10}\ \text{m}}
$$

**7.** A bullet of mass $25\ \text{g}$ moving at $400\ \text{m/s}$ has its speed measured to $0.02\,\%$. Find the minimum uncertainty in its position.

$\Delta p=0.025\times0.08=2\times10^{-3}\ \text{kg m/s}$, so $\Delta x\ge\dfrac{\hbar}{2\Delta p}=\mathbf{2.64\times10^{-32}\ \text{m}}$.

> **Note on the source.** The lecture sheets used $\Delta E\,\Delta t\approx\hbar/2$ in one place and $\hbar$ in another. With $\hbar/2$, $\Delta\nu=1/(4\pi\Delta t)$ as above; with $\hbar$ every frequency width would be twice as large.

## Questions asked in KTU exams

**Short answer**

1. What is tunnel effect? What is quantum mechanical tunnelling?
2. State and explain Heisenberg's uncertainty principle.
3. What are the characteristics of a well-defined wave function?
4. A well-behaved wave function is normalised. Why?
5. Give the probability interpretation of the wave function.
6. Explain the absence of electrons in the nucleus on the basis of the uncertainty principle.
7. What is meant by a wave function? Write its normalisation condition.
8. How do you account for natural line broadening on the basis of Heisenberg's uncertainty principle?

**Essay**

1. Write the Schrödinger equation for a particle trapped in a one-dimensional box of width $L$ and solve it to obtain the energy eigenvalues and wave functions.
2. State the uncertainty principle. Explain the absence of electrons inside the nucleus using this principle.
3. Starting from the time-dependent equation, derive Schrödinger's time-independent wave equation.
4. Formulate Schrödinger's time-dependent equation starting from a plane wave equation, using de Broglie's formula and Einstein's relation for photon energy.

---

## Formula sheet

### Matter waves and the wave function

| | |
| --- | --- |
| de Broglie wavelength | $\lambda=\dfrac hp=\dfrac{h}{mv}=\dfrac{h}{\sqrt{2m\,KE}}$ |
| Electron through $V$ volts | $\lambda=\dfrac{h}{\sqrt{2meV}}=\dfrac{1.227\times10^{-9}}{\sqrt V}\ \text{m}\approx\sqrt{\dfrac{150}{V}}\ \text{Å}$ |
| Free-particle wave function | $\Psi=Ae^{-\frac{i}{\hbar}(Et-px)}$, with $\omega=E/\hbar$, $k=p/\hbar$ |
| Probability density | $\lvert\Psi\rvert^2=\Psi^*\Psi$ |
| Normalisation | $\displaystyle\int\lvert\Psi\rvert^2\,dV=1$ |

### Uncertainty principle

| | |
| --- | --- |
| Position and momentum | $\Delta x\,\Delta p\ge\hbar/2$ |
| Energy and time | $\Delta E\,\Delta t\ge\hbar/2$ |
| Angular momentum and angle | $\Delta L\,\Delta\theta\ge\hbar/2$ |
| Natural line width | $\Delta\nu=\dfrac{1}{4\pi\,\Delta t}$ |

### Schrödinger equation

| | |
| --- | --- |
| Time-dependent | $i\hbar\dfrac{\partial\Psi}{\partial t}=-\dfrac{\hbar^2}{2m}\dfrac{\partial^2\Psi}{\partial x^2}+V\Psi$ |
| Time-independent | $\dfrac{d^2\psi}{dx^2}+\dfrac{2m}{\hbar^2}(E-V)\psi=0$ |
| Operators | $E\to i\hbar\dfrac{\partial}{\partial t}$, $\ p\to-i\hbar\dfrac{\partial}{\partial x}$ |

### Particle in a box and tunnelling

| | |
| --- | --- |
| Energy levels | $E_n=\dfrac{n^2h^2}{8mL^2}=\dfrac{n^2\pi^2\hbar^2}{2mL^2}$, $\ n=1,2,3,\dots$ |
| Wave functions | $\psi_n=\sqrt{\dfrac2L}\sin\dfrac{n\pi x}{L}$ |
| Zero-point energy | $E_1=\dfrac{h^2}{8mL^2}$ |
| Transmission coefficient | $T=\dfrac{\lvert F\rvert^2}{\lvert A\rvert^2}\approx e^{-2\kappa L}$, $\ \kappa=\dfrac{\sqrt{2m(V_0-E)}}{\hbar}$ |
