<!-- page 1 | Start here -->

# Module 2 at a glance

Quantum mechanics is the branch of mechanics that gives the mathematical description of the motion and interaction of very small particles such as electrons, protons and atoms. Classical (Newtonian) mechanics works perfectly for cricket balls and planets, but it fails at the atomic scale. It cannot explain why atoms are stable, why their spectra have sharp lines, or why electrons are diffracted by crystals. Quantum mechanics takes its place there. It is based on three ideas that have no place in everyday physics:

1. **Quantisation of energy.** A confined particle cannot have any energy it likes. Only certain discrete energies are allowed.
2. **Wave–particle duality.** Every moving particle has a wave associated with it, called the **matter wave**. The wave is described by a **wave function** $\Psi$, and $|\Psi|^2$ tells where the particle is *likely* to be, not where it definitely *is*.
3. **The uncertainty principle.** Position and momentum (and also energy and time) cannot both be known exactly at the same time.

From these ideas we build the **Schrödinger equation**, the equation that the wave function follows. We solve it for two standard problems: a particle trapped in a **box** (which explains why energy comes in discrete levels and why a confined particle can never be at rest) and a particle meeting a **barrier** that it does not have enough energy to climb (which explains **tunnelling**).

## What you will be able to do

- Derive the de Broglie relation $\lambda=h/p$ and calculate the wavelength of any particle, and of an electron accelerated through a voltage.
- Explain the physical meaning of the wave function (Born's interpretation), write the conditions for a well-behaved wave function, and normalise a wave function.
- Write the wave function of a free particle and show that $\omega=E/\hbar$ and $k=p/\hbar$.
- Explain wave packets, phase and group velocity, and how a wave packet leads to the uncertainty principle.
- State the uncertainty principle for the three conjugate pairs and use it to show that electrons cannot exist inside the nucleus and that spectral lines have a natural width.
- Derive the time-dependent Schrödinger equation by two methods, and derive the time-independent equation from it.
- Solve the Schrödinger equation for a particle in a one-dimensional box: find the energy eigenvalues and the normalised eigenfunctions, and interpret them.
- Explain quantum mechanical tunnelling, write the wave function in each region, define the transmission coefficient and list its applications.

## How to use these notes

- Each page follows **idea → explanation or derivation → worked example → common mistakes.**
- Green boxes show key ideas and definitions. Amber boxes marked **Watch out** show mistakes that make you lose marks. Boxes marked **Note on the source** show where the lecture notes were corrected.
- The derivations of the Schrödinger equation and the particle in a box are the most frequently asked essay questions. Read them, then close the notes and write them yourself, step by step, until you can do it without looking.
- The last page has practice problems with full answers, the past KTU exam questions and a formula sheet.

## Where each topic sits

| Part | Pages |
| --- | --- |
| Matter waves | Matter waves, de Broglie wavelength examples |
| The wave function | Wave function and probability, normalisation, the free-particle wave function, wave packets |
| Uncertainty | Uncertainty principle, its applications |
| Schrödinger equation | Time-dependent form (two derivations), time-independent form |
| Applications | Particle in a box (solution, then energies and wave functions), tunnelling |
| Revision | Practice questions, exam questions and formula sheet |

> **Before you start.** You should know wavelength $\lambda$, frequency $\nu$, period $T=1/\nu$, angular frequency $\omega=2\pi\nu=2\pi/T$ and wave number $k=2\pi/\lambda$; the photon relations $E=h\nu$ and $p=h/\lambda$; complex numbers, with $e^{i\theta}=\cos\theta+i\sin\theta$, the conjugate $z^*$ and $|z|^2=z^*z$; partial derivatives and simple integration, including $\sin^2\theta=\tfrac12(1-\cos2\theta)$.

---

<!-- page 2 | Matter waves -->

# Matter waves

## The idea

By the early twentieth century it was clear that **light has a dual nature**. Interference, diffraction and polarisation show that light is a wave. The photoelectric effect and the Compton effect show that light also behaves as a stream of particles, called **photons**, each carrying energy $E=h\nu$ and momentum $p=h/\lambda$.

In **1924** the French physicist **Louis de Broglie** argued by analogy and symmetry: if waves (light) can behave like particles, then particles should also be able to behave like waves. He proposed that **every moving object has a wave associated with it** under suitable conditions. These waves are called **matter waves** or **de Broglie waves**.

> **Matter waves.** The waves associated with a moving particle are called matter waves or de Broglie waves. Their wavelength is called the de Broglie wavelength.

## Deriving the de Broglie wavelength (route 1: from the photon's energy)

For a photon the energy can be written in two ways, one from its wave nature and one from its particle nature:

$$
E=h\nu=\frac{hc}{\lambda}\qquad\text{(wave nature)}
$$

$$
E=mc^2\qquad\text{(particle nature)}
$$

Since both describe the same photon, they must be equal. This shows its **wave–particle dual nature**:

$$
mc^2=\frac{hc}{\lambda}
$$

Cancel one factor of $c$:

$$
mc=\frac{h}{\lambda}
$$

Here $mc$ (mass times velocity) is the momentum $p$ of the photon. So

$$
\lambda=\frac{h}{p}
$$

## Deriving it (route 2: from the photon's momentum)

The momentum of a photon is known directly from experiment and theory to be $p=h/\lambda$, which can be written as $\lambda=h/p$. De Broglie's step was to assume that this equation is **completely general**. It applies not only to photons but to electrons, protons, atoms and every other particle.

## The de Broglie wavelength of a particle

A particle of mass $m$ moving with speed $v$ has momentum $p=mv$. Its kinetic energy is $KE=\tfrac12mv^2$, which can be written as

$$
KE=\frac12mv^2=\frac{(mv)^2}{2m}=\frac{p^2}{2m}\qquad\Longrightarrow\qquad p=\sqrt{2m\,KE}
$$

so the de Broglie wavelength can be written in three equivalent ways:

> **de Broglie wavelength.**
>
> $$\lambda=\frac{h}{p}=\frac{h}{mv}=\frac{h}{\sqrt{2m\,KE}}$$

## An electron accelerated through a voltage

An electron of charge $e$ and mass $m$, starting from rest and accelerated through a potential difference of $V$ volts, gains kinetic energy $KE=eV$. So

$$
\frac12mv^2=eV\qquad\Longrightarrow\qquad v=\sqrt{\frac{2eV}{m}}
$$

Then the wavelength of the electron is

$$
\lambda=\frac{h}{mv}=\frac{h}{m}\sqrt{\frac{m}{2eV}}=\frac{h}{\sqrt{2meV}}
$$

This is the same as putting $KE=eV$ in $\lambda=h/\sqrt{2m\,KE}$. Now put $h=6.626\times10^{-34}\ \text{J s}$, $m=9.11\times10^{-31}\ \text{kg}$ and $e=1.6\times10^{-19}\ \text{C}$:

$$
\lambda=\frac{6.626\times10^{-34}}{\sqrt{2\times9.11\times10^{-31}\times1.6\times10^{-19}\times V}}=\frac{1.227\times10^{-9}}{\sqrt V}\ \text{m}
$$

Since $1\ \text{Å}=10^{-10}\ \text{m}$, the same result in ångström is

$$
\lambda=\frac{12.27}{\sqrt V}\ \text{Å}\approx\sqrt{\frac{150}{V}}\ \text{Å}
$$

(because $12.27^2\approx150$). Both forms appear in textbooks; they are the same formula.

> **Watch out.** These shortcut formulas are **only for electrons**, because the mass and charge of the electron are already inside the number $1.227\times10^{-9}$. For a proton, neutron, alpha particle or anything else, go back to $\lambda=h/\sqrt{2m\,KE}$ with the correct mass.

## Some properties of matter waves

- The lighter the particle, the longer its wavelength for a given speed ($\lambda\propto1/m$). This is why wave effects are noticeable for electrons but not for everyday objects.
- The faster the particle, the shorter its wavelength ($\lambda\propto1/v$).
- A particle at rest ($v=0$) would have an infinite wavelength. Matter waves are associated only with **moving** particles.
- Matter waves are not electromagnetic waves. They are produced by any moving particle, charged or neutral (neutrons are also diffracted).
- The wave is not a physical disturbance of a medium. As the wave function pages explain, it is a **probability wave**.

## Experimental evidence

De Broglie had no experimental evidence when he proposed the idea. But he could show that it explained the **stationary orbits** and the quantised energy levels that Bohr had assumed for the hydrogen atom in 1913. An electron orbit is allowed only if a whole number of de Broglie wavelengths fits around it, $2\pi r=n\lambda$, which is exactly Bohr's condition on angular momentum.

The direct proof came in **1927**. **Davisson and Germer** in the USA, and independently **G. P. Thomson** in Britain, showed that electrons are **diffracted** by crystals exactly as X-rays are, with the wavelength given by $\lambda=h/p$. Today, electron diffraction and the electron microscope depend on this.

> **Key idea.** Wave and particle are two aspects of the same object. Which aspect we see depends on the experiment. Diffraction shows the wave, and a collision with a detector shows the particle.

---

<!-- page 3 | de Broglie wavelength: examples -->

# de Broglie wavelength: worked examples

Constants: $h=6.626\times10^{-34}\ \text{J s}$, $m_e=9.11\times10^{-31}\ \text{kg}$, $m_p=1.673\times10^{-27}\ \text{kg}$, $m_n=1.675\times10^{-27}\ \text{kg}$, $e=1.6\times10^{-19}\ \text{C}$.

**Example 1. Why we never notice matter waves.** Find the de Broglie wavelength of (a) a ball of mass $500\ \text{g}$ moving at $50\ \text{km/h}$, and (b) an electron accelerated through $100\ \text{V}$.

(a) First convert the speed: $v=50\ \text{km/h}=\dfrac{50\times1000}{3600}=13.9\ \text{m/s}$. Then

$$
\lambda=\frac{h}{mv}=\frac{6.626\times10^{-34}}{0.5\times13.9}=\mathbf{9.5\times10^{-35}\ \text{m}}
$$

This is roughly $10^{-34}\ \text{m}$, which is extremely small compared with the size of the ball (and far smaller than even a nucleus). No experiment can ever detect a wave aspect in the behaviour of the ball, so for everyday objects classical mechanics is perfectly good.

(b) Using the electron formula,

$$
\lambda=\frac{1.227\times10^{-9}}{\sqrt{100}}=\mathbf{1.23\times10^{-10}\ \text{m}}=1.23\ \text{Å}
$$

This is about the size of an atom, and it is much larger than the classical radius of the electron ($\approx10^{-15}\ \text{m}$). So the wave nature of the electron **cannot** be neglected. It is also comparable to the spacing between atoms in a crystal, which is why crystals diffract electrons.

> **Note on the source.** One lecture set gave the wavelength of the electron in part (b) as $0.123\times10^{-10}\ \text{m}$. The correct value is $1.23\times10^{-10}\ \text{m}$, ten times larger, as the formula $\lambda=1.227\times10^{-9}/\sqrt V$ shows for $V=100$.

**Example 2. The Davisson–Germer experiment.** In the original experiment the electrons were accelerated through $54\ \text{V}$. Find their wavelength.

$$
\lambda=\frac{1.227\times10^{-9}}{\sqrt{54}}=\frac{1.227\times10^{-9}}{7.35}=\mathbf{1.67\times10^{-10}\ \text{m}}=1.67\ \text{Å}
$$

This matched the wavelength measured from the diffraction pattern of a nickel crystal, and this is how the experiment confirmed de Broglie's hypothesis.

**Example 3. A slow (thermal) neutron.** Find the de Broglie wavelength of a neutron with kinetic energy $0.025\ \text{eV}$.

The electron formula cannot be used. Change the energy to joules, $KE=0.025\times1.6\times10^{-19}=4.0\times10^{-21}\ \text{J}$, and use the general form:

$$
\lambda=\frac{h}{\sqrt{2m_nKE}}=\frac{6.626\times10^{-34}}{\sqrt{2\times1.675\times10^{-27}\times4.0\times10^{-21}}}=\mathbf{1.81\times10^{-10}\ \text{m}}
$$

Again about $1.8\ \text{Å}$. Slow neutrons are diffracted by crystals and are used to study crystal structures.

**Example 4. A proton versus an electron.** A proton and an electron are each accelerated through $100\ \text{V}$. Compare their wavelengths.

Both gain the same kinetic energy $eV$, so $\lambda=h/\sqrt{2meV}\propto1/\sqrt m$:

$$
\lambda_p=\frac{6.626\times10^{-34}}{\sqrt{2\times1.673\times10^{-27}\times1.6\times10^{-19}\times100}}=\mathbf{2.86\times10^{-12}\ \text{m}}
$$

$$
\frac{\lambda_e}{\lambda_p}=\sqrt{\frac{m_p}{m_e}}=\sqrt{1836}\approx43
$$

The proton's wavelength is about 43 times shorter, because it is 1836 times heavier.

**Example 5. Reverse problem.** Through what voltage must an electron be accelerated to have a wavelength of $1\ \text{Å}$?

From $\lambda=\sqrt{150/V}\ \text{Å}$: $1=\sqrt{150/V}$, so $V=\mathbf{150\ \text{V}}$.

> **Watch out.** Always work in SI units: mass in kg (500 g is $0.5$ kg), speed in m/s (divide km/h by 3.6) and energy in joules (multiply eV by $1.6\times10^{-19}$). Most wrong answers here come from a unit that was not converted.

---

<!-- page 4 | Wave function and probability -->

# The wave function and probability

## The idea

In every wave, something varies periodically with space and time:

| Wave | What varies |
| --- | --- |
| Water wave | the height of the water surface |
| Sound wave | the pressure of the air |
| Light (electromagnetic) wave | the electric and magnetic fields |
| **Matter wave** | the **wave function** $\Psi$ |

The quantity whose variations make up matter waves is called the **wave function**, written $\Psi$ (the Greek capital letter psi, pronounced "sigh"). In general it is a function of all three space coordinates and of time:

$$
\Psi=\Psi(x,y,z,t)
$$

The wave function is a mathematical function that represents the **state** of the particle. The mathematical theory of quantum mechanics tells how to use $\Psi(x,y,z,t)$ to find the position, velocity, momentum, energy, angular momentum and so on of the particle. Everything that can be known about the particle is contained in $\Psi$.

## Physical significance (Born's interpretation)

1. **$\Psi$ itself cannot be measured.** The wave function is in general a **complex** quantity (it contains $i=\sqrt{-1}$). A complex number cannot be the result of a measurement, so $\Psi$ has no direct physical meaning by itself.
2. **$|\Psi|^2$ is real and measurable.** The square of the absolute value of $\Psi$,

$$
|\Psi|^2=\Psi^*\Psi
$$

where $\Psi^*$ is the complex conjugate of $\Psi$, is always **real and positive**.

3. **$|\Psi|^2$ is a probability density.** $|\Psi(x,y,z,t)|^2$ represents the **probability of finding the particle at the point $(x,y,z)$ at time $t$**, per unit volume. It is called the **probability density** or the **probability distribution function**. Where $|\Psi|^2$ is large, the particle is likely to be found. Where it is small, the particle is unlikely to be found.
4. **Probability in a region.** The probability of finding the particle in a small volume $dV$ around $(x,y,z)$ at time $t$ is $|\Psi|^2\,dV$. For a finite region it is the integral

$$
P=\int|\Psi|^2\,dV
$$

$P$ always lies between $0$ (never there) and $1$ (certainly there). For example, if $P=0.4$ for a region, there is a 40 % chance of finding the particle in that region.

5. **Probability amplitude.** $\Psi$ itself is not a probability, but its square is. So $\Psi$ is also called the **probability amplitude**.
6. **Statistical link between wave and particle.** The wave function connects the particle nature and the wave nature **statistically**. It does not tell exactly where the particle is. It tells where the particle is *likely* to be. If we repeat the same experiment many times, the particle is found most often where $|\Psi|^2$ is largest.

> **Key idea.** Quantum mechanics does not predict the exact location of a particle. It predicts the **probability** of finding it in each region of space. The matter wave is a **probability wave**.

## A one-dimensional picture

For a particle moving only along $x$, the wave function is $\Psi(x,t)$ and $|\Psi(x,t)|^2\,dx$ is the probability of finding the particle between $x$ and $x+dx$. The probability of finding it between $x=a$ and $x=b$ is

$$
P(a\le x\le b)=\int_a^b|\Psi|^2\,dx
$$

> **Watch out.** The probability density is $|\Psi|^2=\Psi^*\Psi$, **not** $\Psi^2$. For a complex $\Psi$, $\Psi^2$ is itself complex and cannot be a probability. Only when $\Psi$ is real (as for the particle in a box) are the two the same.

---

<!-- page 5 | Normalisation and well-behaved wave functions -->

# Normalisation and well-behaved wave functions

## Normalisation

A particle that exists in a particular region must be found **somewhere** in that region. So the probability of finding it anywhere in the region must be exactly 1 (100 %):

$$
\int_V|\Psi|^2\,dV=1
$$

A wave function that satisfies this is said to be **normalised** (normalised to unity).

Now suppose we have a wave function $\Psi$ that solves the Schrödinger equation but is not normalised. If we multiply a solution by a constant $A$ (not depending on $x$, $y$, $z$), we get another solution, $\Psi_N=A\Psi$. We choose $A$ so that the new wave function is normalised. Adding the probability at all points in the volume $V$,

$$
\sum_{\text{all points in }V}|\Psi_N|^2=1\qquad\text{or}\qquad\int_V|\Psi_N|^2\,dV=1
$$

$$
\text{that is}\qquad |A|^2\int_V|\Psi|^2\,dV=1
$$

> **Normalisation.** The process of multiplying a wave function by a suitable constant so that the probability of finding the particle within the region becomes exactly 1 is called **normalisation**. The constant is called the **normalisation constant**.

## Why a wave function must be normalisable

$|\Psi|^2$ is supposed to be a probability density. A probability can only be interpreted if the total adds up to 1, so the integral $\int|\Psi|^2\,dV$ must be **finite**. A wave function whose integral is infinite cannot be normalised and cannot describe a real particle.

## Conditions for a well-behaved wave function

The physically acceptable ("well-behaved") wave functions satisfy these conditions:

1. **$\Psi$ is finite everywhere.** An infinite value would mean an infinite probability.
2. **$\Psi$ is single-valued.** At any point and time there must be only one value of the probability.
3. **$\Psi$ is continuous.** The probability cannot jump suddenly from place to place.
4. **The first derivatives $\dfrac{\partial\Psi}{\partial x}$, $\dfrac{\partial\Psi}{\partial y}$, $\dfrac{\partial\Psi}{\partial z}$ are continuous and single-valued**, wherever the potential is finite. These derivatives decide the momentum of the particle, which must change smoothly.
5. **$\Psi$ is normalisable**, so $\Psi\to0$ as $x,y,z\to\pm\infty$.

## Worked example

**Example 1.** A particle confined between $x=0$ and $x=L$ has the wave function $\psi=A\,x(L-x)$ inside, and $\psi=0$ outside. Find the normalisation constant $A$.

Normalisation requires

$$
\int_0^L|A|^2x^2(L-x)^2\,dx=1
$$

Expand $x^2(L-x)^2=L^2x^2-2Lx^3+x^4$ and integrate term by term:

$$
\int_0^L\left(L^2x^2-2Lx^3+x^4\right)dx=\frac{L^5}{3}-\frac{2L^5}{4}+\frac{L^5}{5}=L^5\left(\frac{10-15+6}{30}\right)=\frac{L^5}{30}
$$

So $|A|^2\dfrac{L^5}{30}=1$, giving

$$
A=\mathbf{\sqrt{\frac{30}{L^5}}}
$$

This function is finite, single-valued, continuous and zero at both walls, so it is well behaved.

> **Watch out.** When normalising, square the **absolute value** of the constant ($|A|^2$), integrate over the **whole region** where the particle can be, and remember to take the square root at the end.

---

<!-- page 6 | The wave function of a free particle -->

# The wave function of a free particle

## Setting it up

Consider a particle moving freely along the $x$ direction with energy $E$ and momentum $p$. Its matter wave is a travelling wave, which we write in complex form as

$$
\Psi=a\,e^{-i(\omega t-kx)}\qquad(1)
$$

where $a$ is the amplitude, $\omega$ is the angular frequency and $k$ is the wave number:

$$
\omega=\frac{2\pi}{T}=2\pi\nu\qquad\qquad k=\frac{2\pi}{\lambda}
$$

## Expressing $\omega$ and $k$ through energy and momentum

**Angular frequency.** Use Planck's relation $E=h\nu$, so $\nu=E/h$:

$$
\omega=\frac{2\pi}{T}=2\pi\nu=\frac{2\pi h\nu}{h}=\frac{2\pi}{h}\,E=\frac{E}{\hbar}\qquad(2)
$$

where $\hbar=\dfrac{h}{2\pi}=1.055\times10^{-34}\ \text{J s}$ (read "h-bar").

**Wave number.** Use the de Broglie relation $\lambda=h/p$:

$$
k=\frac{2\pi}{\lambda}=\frac{2\pi p}{h}=\frac{p}{\hbar}\qquad(3)
$$

**Put (2) and (3) in (1):**

$$
\Psi=a\,e^{-i\left(\frac{E}{\hbar}t-\frac{p}{\hbar}x\right)}
$$

$$
\boxed{\,\Psi=a\,e^{-\frac{i}{\hbar}(Et-px)}\,}
$$

This is the wave function of a free particle of energy $E$ and momentum $p$. It is the starting point for the Schrödinger equation.

## A second way to reach the same form

The same result can be reached through frequency and wavelength (this is the method used in the second lecture set). Write the wave as

$$
\Psi=A\,e^{-i\omega\left(t-\frac xv\right)}
$$

where $v$ is the wave speed. With $\omega=2\pi\nu$ and $v=\nu\lambda$:

$$
\Psi=A\,e^{-i2\pi\nu\left(t-\frac{x}{\nu\lambda}\right)}=A\,e^{-2\pi i\left(\nu t-\frac{x}{\lambda}\right)}
$$

Now use $E=h\nu$ (so $\nu=E/h$) and $\lambda=h/p$ (so $1/\lambda=p/h$):

$$
\Psi=A\,e^{-2\pi i\left(\frac{Et}{h}-\frac{px}{h}\right)}=A\,e^{-\frac{2\pi i}{h}(Et-px)}
$$

Since $\dfrac{2\pi}{h}=\dfrac1\hbar$,

$$
\Psi=A\,e^{-\frac{i}{\hbar}(Et-px)}
$$

exactly as before.

## Its probability density is constant

$$
|\Psi|^2=\Psi^*\Psi=A\,e^{+\frac{i}{\hbar}(Et-px)}\cdot A\,e^{-\frac{i}{\hbar}(Et-px)}=A^2e^{0}=A^2
$$

This is a **constant**. It does not depend on position or time. The particle is equally likely to be found at any point along the $x$ axis. This makes sense, because this wave has one exact wavelength and so describes a particle with an exactly known momentum but a completely unknown position. The next page shows how a particle that *is* located somewhere is described.

> **Watch out.** The sign convention matters only for consistency. These notes always use $e^{-\frac{i}{\hbar}(Et-px)}$, which represents a wave moving in the $+x$ direction. Use the same form in the whole derivation.

---

<!-- page 7 | Wave packets -->

# Wave packets

## A single wave cannot represent a localised particle

The wave function of a moving body shows the probability of finding it at a particular place at a particular time. Consider the free-particle wave function $\Psi=Ae^{-i(\omega t-kx)}$. Its real part, $A\cos(\omega t-kx)$, is a sine-shaped wave of constant amplitude that goes on for ever in both directions.

As the previous page showed, its probability density is

$$
|\Psi|^2=A^2
$$

which is the same everywhere. So this wave says the particle is **equally likely to be found at any point** along the $x$ axis. That describes a particle with an exact wavelength, and hence an exact momentum, but with no position at all.

## A wave packet

A real particle is more likely to be found in some places than in others at a given time. Its wave function must therefore be large in a small region of space and nearly zero everywhere else. Graphically this is a short burst of waves, a **wave packet** (also called a **wave group**).

![Top: a single wavelength extends everywhere. Bottom: a wave packet confined to a region of width Δx](/notes/cse/s1/physics/module-2/wave-packet.webp)

**How a wave packet is formed.** A wave packet is formed by the **superposition** (adding together) of a large number of waves of slightly different wavelengths and frequencies. In one small region the waves are in step and reinforce each other, which gives a large amplitude. Away from that region they go out of step and cancel, so the amplitude dies away.

- The **larger** the number of component waves (the wider the range of wavelengths), the **smaller** the length of the wave packet.
- The **smaller** the number of component waves, the **longer** the packet.

When the particle moves, the wave packet moves as a whole.

## Phase velocity and group velocity

Two different velocities describe a wave packet:

- The **phase velocity** $v_p$ is the velocity of the individual component waves (the crests inside the packet).
- The **group velocity** $v_g$ is the velocity with which the wave packet as a whole (its envelope) moves.

The group velocity is equal to the velocity of the **particle**, so it is also called the **particle velocity**. It is the group, not the individual waves, that carries the particle along.

## From wave packets to uncertainty

This picture leads directly to the uncertainty principle:

- If the wave function is a single sine wave of wavelength $\lambda$, the momentum $p=h/\lambda$ is known **exactly**. But $|\Psi|^2$ has the same value all over space, so the position at a given time cannot be determined. The particle is "spread out" in space: **exact momentum means a very large uncertainty in position**.
- If the wave function is a narrow packet of width $\Delta x$, then $|\Psi|^2$ is zero everywhere except in that region, so the position is known to within $\Delta x$. But the packet is formed by the interference of a large number of waves of slightly different wavelengths. Since $\lambda$ can take any value in that range, the momentum $p=h/\lambda$ can also take a range of values. So there is an **uncertainty in momentum $\Delta p$**.
- For a **narrower** packet the number of component waves must be **larger**, so $\Delta p$ is **larger**.

> **Key idea.** You cannot make $\Delta x$ and $\Delta p$ both small at the same time. This trade-off is not a fault of our instruments. It is part of the wave nature of matter. It is **Heisenberg's uncertainty principle** (next page).

> **Watch out.** The individual waves inside a packet (phase velocity) and the packet itself (group velocity) move at different speeds. When an exam asks for the speed of the particle, it is the **group** velocity.

---

<!-- page 8 | Heisenberg's uncertainty principle -->

# Heisenberg's uncertainty principle

## Statement

When we treat a moving particle as a wave group, there are basic limits to the accuracy with which we can measure particle properties such as position and momentum.

> **Heisenberg's uncertainty principle.** It is impossible to know both the position and the momentum of a particle exactly at the same time. If $\Delta x$ is the uncertainty in the position and $\Delta p$ the uncertainty in the corresponding component of momentum ($p_x$), then
>
> $$\Delta x\,\Delta p\ \ge\ \frac{\hbar}{2}$$

where $\hbar=\dfrac{h}{2\pi}=1.055\times10^{-34}\ \text{J s}$, so that $\dfrac\hbar2=\dfrac{h}{4\pi}$.

In simple words: the product of the uncertainty in position and the uncertainty in momentum can never be smaller than $\hbar/2$. The more precisely one is known, the less precisely the other can be known.

## Other conjugate pairs

A pair of variables connected by an uncertainty relation is called a **conjugate pair**. Besides position and momentum, the important pairs are **energy and time**, and **angular momentum and angular position**:

$$
\Delta E\,\Delta t\ \ge\ \frac{\hbar}{2}
$$

$$
\Delta L\,\Delta\theta\ \ge\ \frac{\hbar}{2}
$$

Here $\Delta E$ and $\Delta t$ are the uncertainties in finding the energy and time, and $\Delta L$ and $\Delta\theta$ are the uncertainties in the angular momentum and the angle.

There is **no** uncertainty relation between $\Delta x$ and a component of momentum other than the $x$ component. For example, $x$ and $p_y$ can both be known exactly at the same time.

> **Note on the source.** One lecture set wrote these relations with $\hbar$ on the right ($\Delta x\,\Delta p\ge\hbar$, $\Delta E\,\Delta t\ge\hbar$, $\Delta J\,\Delta\theta\ge\hbar$) and the other with $\hbar/2$. The exact lower limit is $\hbar/2$, used in all these notes. Some textbooks write $\hbar$ or even $h$ because they make an estimate of the order of magnitude. Then the answers change by a factor of 2 or $4\pi$. Write which form you use.

## What the principle does and does not say

- It is **not** about poor instruments or experimental error. Even with perfect instruments, $\Delta x\,\Delta p$ cannot be smaller than $\hbar/2$. It is a property of nature, coming from the wave nature of matter.
- It applies to **simultaneous** knowledge. You can measure position very precisely, but then the momentum becomes very uncertain, and the other way round.
- Because $\hbar$ is tiny, the limits matter only on the **atomic scale**. For everyday objects the uncertainties are far too small to notice.

## Why we never notice it in everyday life

**Example 1.** A bullet of mass $25\ \text{g}$ moves with a speed of $400\ \text{m/s}$. The speed is measured to an accuracy of $0.02\,\%$. How precisely can the position of the bullet be found?

The uncertainty in speed is $0.02\,\%$ of $400\ \text{m/s}$:

$$
\Delta v=400\times\frac{0.02}{100}=0.08\ \text{m/s}
$$

The uncertainty in momentum is

$$
\Delta p=m\,\Delta v=0.025\times0.08=2\times10^{-3}\ \text{kg m/s}
$$

So

$$
\Delta x\ \ge\ \frac{\hbar}{2\,\Delta p}=\frac{1.055\times10^{-34}}{2\times2\times10^{-3}}=\mathbf{2.64\times10^{-32}\ \text{m}}
$$

This uncertainty is far smaller than even the size of an atom (about $10^{-10}\ \text{m}$), so for a bullet it is completely negligible.

> **Note on the source.** The lecture notes gave $2.626\times10^{-32}\ \text{m}$. When we calculate $h/(4\pi\,\Delta p)$ with $h=6.625\times10^{-34}$, we get $2.64\times10^{-32}\ \text{m}$.

**Example 2. An electron in an atom.** An electron is confined within an atom of size about $10^{-10}\ \text{m}$. Find the minimum uncertainty in its speed.

$$
\Delta p\ \ge\ \frac{\hbar}{2\,\Delta x}=\frac{1.055\times10^{-34}}{2\times10^{-10}}=5.3\times10^{-25}\ \text{kg m/s}
$$

$$
\Delta v=\frac{\Delta p}{m}=\frac{5.3\times10^{-25}}{9.11\times10^{-31}}=\mathbf{5.8\times10^{5}\ \text{m/s}}
$$

An uncertainty of more than half a million metres per second. For an electron in an atom, the uncertainty principle is very large, and the idea of a definite orbit with a definite speed breaks down.

> **Watch out.** Change a percentage accuracy into an actual $\Delta v$ before multiplying by the mass, and use the mass in kilograms. Also remember that $\Delta x$ comes out as a **minimum** ($\ge$), not an exact value.

---

<!-- page 9 | Applications of the uncertainty principle -->

# Applications of the uncertainty principle

Planck's constant is so small that the limitations given by the uncertainty principle are important only at the subatomic level. On that scale, the principle is a powerful tool for understanding many phenomena.

## 1. Electrons cannot exist inside the nucleus

In the early days, people thought that the electrons coming out of a nucleus as $\beta$ rays in radioactivity actually existed inside the nucleus before they were emitted. The uncertainty principle shows that this is impossible.

**Step 1: the uncertainty in position.** The diameter of a nucleus is typically about $10^{-14}\ \text{m}$. If an electron existed inside it, the maximum uncertainty in its position would be the size of the nucleus:

$$
\Delta x=10^{-14}\ \text{m}
$$

**Step 2: the minimum uncertainty in momentum.**

$$
\Delta p=\frac{\hbar}{2\,\Delta x}=\frac{h}{4\pi\,\Delta x}=\frac{6.625\times10^{-34}}{4\times3.14\times10^{-14}}=5.3\times10^{-21}\ \text{kg m/s}
$$

**Step 3: the minimum momentum.** If this is the uncertainty in the momentum, the momentum itself must be at least as large:

$$
p_{\min}\approx5.3\times10^{-21}\ \text{kg m/s}
$$

**Step 4: the minimum energy.** At such a large momentum the electron moves at nearly the speed of light, so its rest-mass energy can be neglected and its kinetic energy is about $pc$:

$$
KE\approx pc=5.3\times10^{-21}\times3\times10^{8}=1.6\times10^{-12}\ \text{J}=\frac{1.6\times10^{-12}}{1.6\times10^{-19}}\ \text{eV}\approx\mathbf{10\ \text{MeV}}
$$

**Step 5: compare with experiment.** An electron inside the nucleus would need a kinetic energy of at least about $10\ \text{MeV}$. But the electrons emitted in $\beta$ decay have energies of only a fraction of this, a few MeV at most. Hence **electrons do not exist inside the nucleus**. The electrons emitted in $\beta$ decay are created at the moment of decay, when a neutron changes into a proton.

> **Note on the source.** One lecture set used $\Delta x\,\Delta p\ge\hbar$ with $\Delta x=10^{-14}\ \text{m}$ taken as the nuclear radius, and got $\Delta p=1.1\times10^{-20}\ \text{kg m/s}$ and about $20\ \text{MeV}$. The other used $\hbar/2$ and got $10\ \text{MeV}$. In both cases the conclusion is the same, because both values are far above the energies seen in $\beta$ decay.

## 2. Natural width of spectral lines (natural line broadening)

When excited atoms return to the ground state, they emit radiation. The emitted lines do not have a perfectly sharp frequency. Each line has a small spread of frequencies, called its **natural width**. The uncertainty principle explains this.

**Step 1: the uncertainty in time.** The average time between the excitation of an atom and the moment it radiates is called the **lifetime** of the excited state. It is typically about $10^{-8}\ \text{s}$. This is the uncertainty in the time of the de-excitation:

$$
\Delta t=10^{-8}\ \text{s}
$$

**Step 2: the uncertainty in energy.** From $\Delta E\,\Delta t\approx\hbar/2$,

$$
\Delta E\approx\frac{\hbar}{2\,\Delta t}=\frac{6.625\times10^{-34}}{2\times3.14\times2\times10^{-8}}\approx5.3\times10^{-27}\ \text{J}
$$

**Step 3: the uncertainty in frequency.** Since $E=h\nu$, $\Delta E=h\,\Delta\nu$:

$$
\Delta\nu=\frac{\Delta E}{h}=\frac{\hbar}{2h\,\Delta t}=\frac{1}{4\pi\,\Delta t}=\frac{1}{4\pi\times10^{-8}}\approx\mathbf{8\times10^{6}\ \text{Hz}}
$$

So the emitted frequency is not sharp: **the spectral line has a finite width** of a few megahertz. The shorter the lifetime of the excited state, the broader the line.

> **Note on the source.** The lecture set that used $\Delta E\,\Delta t\ge\hbar$ got $\Delta\nu=1/(2\pi\Delta t)\approx16\ \text{MHz}$ for the same lifetime. It differs from $8\ \text{MHz}$ only by the factor of 2 in the convention.

> **Key idea.** Both applications use the same idea: a quantity confined to a small range ($\Delta x$ or $\Delta t$) forces a large spread in its conjugate ($\Delta p$ or $\Delta E$).

> **Watch out.** Use $\Delta\nu=\Delta E/h$ (with $h$), not $\Delta E/\hbar$. If you combine it with $\Delta E=\hbar/(2\Delta t)$, you get the neat result $\Delta\nu=1/(4\pi\Delta t)$, which is worth remembering.

---

<!-- page 10 | Time-dependent Schrödinger equation -->

# The time-dependent Schrödinger equation

## The idea

How can we find $\Psi$ for a particle? The answer is the **Schrödinger equation**. It is to quantum mechanics what Newton's second law is to classical mechanics: given the forces acting (described by the potential energy $V$), it tells how the wave function behaves in space and time.

The Schrödinger equation cannot be *derived* from older physics. We get it by starting from the wave function of a free particle and using Planck's relation $E=h\nu$ and de Broglie's relation $p=h/\lambda$. The equation we reach is then taken as the general law, valid for any potential. Two equivalent methods are given below. Learn one thoroughly. The second one is useful because it also gives the energy and momentum **operators**.

## Derivation, route 1 (differentiating twice)

Consider a particle moving in the $x$ direction with momentum $p$ and energy $E$. Its wave function is (see the free-particle page)

$$
\Psi=A\,e^{-\frac{i}{\hbar}(Et-px)}\qquad(1)
$$

**Step 1: differentiate (1) with respect to $t$.** Only the exponent depends on $t$, and its derivative is $-\dfrac{iE}{\hbar}$:

$$
\frac{\partial\Psi}{\partial t}=-\frac{iE}{\hbar}\,A\,e^{-\frac{i}{\hbar}(Et-px)}=-\frac{iE}{\hbar}\,\Psi\qquad\text{(using (1))}
$$

Multiply both sides by $i\hbar$. Since $i\hbar\cdot\left(-\dfrac{iE}{\hbar}\right)=-i^2E=E$:

$$
E\Psi=i\hbar\,\frac{\partial\Psi}{\partial t}\qquad(2)
$$

**Step 2: differentiate (1) twice with respect to $x$.** Each differentiation brings down a factor $\dfrac{ip}{\hbar}$:

$$
\frac{\partial\Psi}{\partial x}=\frac{ip}{\hbar}\,\Psi
$$

$$
\frac{\partial^2\Psi}{\partial x^2}=\frac{ip}{\hbar}\cdot\frac{ip}{\hbar}\,\Psi=\frac{i^2p^2}{\hbar^2}\,\Psi=-\frac{p^2}{\hbar^2}\,\Psi
$$

Multiply both sides by $-\hbar^2$:

$$
p^2\Psi=-\hbar^2\,\frac{\partial^2\Psi}{\partial x^2}\qquad(3)
$$

**Step 3: total energy.** The total energy of the particle is the sum of its kinetic energy and potential energy $V$. With $KE=\tfrac12mv^2=\dfrac{(mv)^2}{2m}=\dfrac{p^2}{2m}$:

$$
E=\frac{p^2}{2m}+V
$$

Multiply by $\Psi$:

$$
E\Psi=\frac{p^2\Psi}{2m}+V\Psi\qquad(4)
$$

**Step 4: put (2) and (3) in (4).**

$$
\boxed{\,i\hbar\,\frac{\partial\Psi}{\partial t}=-\frac{\hbar^2}{2m}\,\frac{\partial^2\Psi}{\partial x^2}+V\Psi\,}\qquad(5)
$$

This is the **time-dependent Schrödinger equation in one dimension**. It is the most general form of the Schrödinger equation. $V$ and $\Psi$ may depend on both position and time, which is why it is called *time-dependent*.

## Derivation, route 2 (energy and momentum operators)

Start from the same wave function, $\Psi=Ae^{-\frac{i}{\hbar}(Et-px)}$.

Differentiating partially with respect to $t$:

$$
\frac{\partial\Psi}{\partial t}=Ae^{-\frac{i}{\hbar}(Et-px)}\cdot\left(\frac{-iE}{\hbar}\right)=\frac{-iE}{\hbar}\,\Psi
\qquad\Longrightarrow\qquad
E\Psi=-\frac{\hbar}{i}\frac{\partial\Psi}{\partial t}=i\hbar\,\frac{\partial\Psi}{\partial t}\qquad(6)
$$

(using $-\dfrac1i=i$). Differentiating partially with respect to $x$:

$$
\frac{\partial\Psi}{\partial x}=Ae^{-\frac{i}{\hbar}(Et-px)}\cdot\left(\frac{ip}{\hbar}\right)=\frac{ip}{\hbar}\,\Psi
\qquad\Longrightarrow\qquad
p\Psi=\frac{\hbar}{i}\frac{\partial\Psi}{\partial x}=-i\hbar\,\frac{\partial\Psi}{\partial x}\qquad(7)
$$

Equations (6) and (7) say that, when they act on $\Psi$, energy and momentum can be replaced by **operators**:

> **Energy and momentum operators.**
>
> $$E\ \to\ i\hbar\,\frac{\partial}{\partial t}\qquad\qquad p\ \to\ -i\hbar\,\frac{\partial}{\partial x}$$

These are used to find the energy and momentum of a particle when its wave function is known.

Now write the total energy, $E=\dfrac{p^2}{2m}+V$, multiply by $\Psi$, and replace $E$ and $p$ by their operators ($p^2$ means applying the momentum operator twice):

$$
i\hbar\,\frac{\partial\Psi}{\partial t}=\frac{1}{2m}\left(-i\hbar\,\frac{\partial}{\partial x}\right)^2\Psi+V\Psi
$$

Since $(-i\hbar)^2=i^2\hbar^2=-\hbar^2$,

$$
i\hbar\,\frac{\partial\Psi}{\partial t}=-\frac{\hbar^2}{2m}\,\frac{\partial^2\Psi}{\partial x^2}+V\Psi
$$

which is equation (5) again.

## Three dimensions

If $\Psi$ depends on $x$, $y$ and $z$, the second derivative is replaced by the sum of all three:

$$
i\hbar\,\frac{\partial\Psi}{\partial t}=-\frac{\hbar^2}{2m}\left(\frac{\partial^2\Psi}{\partial x^2}+\frac{\partial^2\Psi}{\partial y^2}+\frac{\partial^2\Psi}{\partial z^2}\right)+V\Psi
$$

$$
\text{or}\qquad i\hbar\,\frac{\partial\Psi}{\partial t}=-\frac{\hbar^2}{2m}\nabla^2\Psi+V\Psi
$$

where $\nabla^2=\dfrac{\partial^2}{\partial x^2}+\dfrac{\partial^2}{\partial y^2}+\dfrac{\partial^2}{\partial z^2}$ is the **Laplacian operator**.

## What $V$ does

The potential energy function $V$ represents the effect of the surroundings on the particle. Any restriction on the motion of the particle (walls, barriers, the attraction of a nucleus) appears in $V$. Once $V$ is known, the Schrödinger equation can be solved for the wave function $\Psi$ of the particle, and from $\Psi$ we get $|\Psi|^2$ and all the other physical quantities.

> **Watch out.** Be careful with the signs: there is a **minus** sign in front of $\dfrac{\hbar^2}{2m}\dfrac{\partial^2\Psi}{\partial x^2}$, and $i\hbar$ (not $-i\hbar$) on the left. They come from $\left(\tfrac{ip}{\hbar}\right)^2=-\tfrac{p^2}{\hbar^2}$ and from multiplying $-\tfrac{iE}{\hbar}\Psi$ by $i\hbar$. In an exam, write each step. Examiners give marks for the steps, not only for the final equation.

---

<!-- page 11 | Time-independent Schrödinger equation -->

# The time-independent Schrödinger equation

## The idea

In many situations, the potential energy of the particle does **not depend on time**. The forces acting on the particle, and hence $V$, change only with the position of the particle, $V=V(x)$. The particle is then in a **steady state**. When this is true, the Schrödinger equation can be simplified by separating the wave function into a part that depends only on position and a part that depends only on time. The result is the **steady-state** or **time-independent** form.

## Derivation

**Step 1: separate the wave function.** Start from the free-particle wave function and split the exponential into two factors:

$$
\Psi=A\,e^{-\frac{i}{\hbar}(Et-px)}=A\,e^{\frac{i}{\hbar}px}\;e^{-\frac{i}{\hbar}Et}
$$

Let $\psi=A\,e^{\frac{i}{\hbar}px}$, a function of position only (it is sometimes written $\Psi_0$ or $\psi_0$). Then

$$
\Psi=\psi\,e^{-\frac{i}{\hbar}Et}\qquad(1)
$$

So the wave function $\Psi$ has a **time-independent part** $\psi$ and a **time-dependent part** $e^{-iEt/\hbar}$.

**Step 2: differentiate (1) with respect to $t$.** $\psi$ does not depend on $t$, so only the exponential is differentiated:

$$
\frac{\partial\Psi}{\partial t}=-\frac{iE}{\hbar}\,\psi\,e^{-\frac{i}{\hbar}Et}\qquad(2)
$$

**Step 3: differentiate (1) twice with respect to $x$.** The exponential does not depend on $x$, so only $\psi$ is differentiated:

$$
\frac{\partial^2\Psi}{\partial x^2}=\frac{d^2\psi}{dx^2}\,e^{-\frac{i}{\hbar}Et}\qquad(3)
$$

**Step 4: put in the time-dependent equation.** The time-dependent Schrödinger equation is

$$
i\hbar\,\frac{\partial\Psi}{\partial t}=-\frac{\hbar^2}{2m}\,\frac{\partial^2\Psi}{\partial x^2}+V\Psi\qquad(4)
$$

Putting (1), (2) and (3) in (4):

$$
i\hbar\left(-\frac{iE}{\hbar}\right)\psi\,e^{-\frac{i}{\hbar}Et}=-\frac{\hbar^2}{2m}\,\frac{d^2\psi}{dx^2}\,e^{-\frac{i}{\hbar}Et}+V\psi\,e^{-\frac{i}{\hbar}Et}
$$

On the left, $i\hbar\cdot\left(-\dfrac{iE}{\hbar}\right)=E$, so

$$
E\psi\,e^{-\frac{i}{\hbar}Et}=-\frac{\hbar^2}{2m}\,\frac{d^2\psi}{dx^2}\,e^{-\frac{i}{\hbar}Et}+V\psi\,e^{-\frac{i}{\hbar}Et}
$$

**Step 5: cancel the time factor.** Divide throughout by $e^{-iEt/\hbar}$, which is never zero:

$$
E\psi=-\frac{\hbar^2}{2m}\,\frac{d^2\psi}{dx^2}+V\psi
$$

**Step 6: rearrange.** Take everything to one side:

$$
\frac{\hbar^2}{2m}\,\frac{d^2\psi}{dx^2}+(E-V)\,\psi=0
$$

and multiply through by $\dfrac{2m}{\hbar^2}$:

$$
\boxed{\,\frac{d^2\psi}{dx^2}+\frac{2m}{\hbar^2}\,(E-V)\,\psi=0\,}
$$

This is the **time-independent Schrödinger equation** in one dimension. Since $\psi$ depends only on $x$, there is no need for partial derivatives. Ordinary derivatives $\dfrac{d^2\psi}{dx^2}$ are used.

## Three dimensions

$$
\frac{\partial^2\psi}{\partial x^2}+\frac{\partial^2\psi}{\partial y^2}+\frac{\partial^2\psi}{\partial z^2}+\frac{2m}{\hbar^2}(E-V)\psi=0
$$

$$
\text{or}\qquad\nabla^2\psi+\frac{2m}{\hbar^2}(E-V)\psi=0
$$

## Stationary states

For a steady state, the probability density is

$$
|\Psi|^2=|\psi|^2\,\big|e^{-iEt/\hbar}\big|^2=|\psi|^2
$$

because $|e^{-iEt/\hbar}|=1$. So **the probability density does not change with time**. This is why these solutions are called **stationary states**. All the problems in this module (the box and the barrier) use the time-independent equation, because their potentials do not change with time.

> **Key idea.** The time-independent equation can also be written as $-\dfrac{\hbar^2}{2m}\dfrac{d^2\psi}{dx^2}+V\psi=E\psi$: some operator acting on $\psi$ gives a number $E$ times $\psi$. Only certain values of $E$ (the **energy eigenvalues**) allow acceptable solutions $\psi$ (the **eigenfunctions**). The particle in a box shows this clearly.

> **Watch out.** An equivalent and equally correct way to write the result is $\dfrac{\hbar^2}{2m}\dfrac{d^2\psi}{dx^2}+(E-V)\psi=0$ (multiply through by $\hbar^2/2m$). Do not mix the two forms in the middle of a derivation.

---

<!-- page 12 | Particle in a box: solving the equation -->

# Particle in a one-dimensional box: solving the equation

## The set-up

Consider a particle of mass $m$ moving inside a box along the $x$ direction, bouncing back and forth between two walls a distance $L$ apart. The walls at $x=0$ and $x=L$ are **infinitely high** (potential barriers that cannot be crossed), so the particle can never get past them, however much energy it has. This is the **one-dimensional infinite square well potential**, also called a **particle in a one-dimensional box**. The potential energy varies as:

$$
V=0\quad\text{for }0<x<L\qquad\text{(region II, inside the box)}
$$

$$
V=\infty\quad\text{for }x\le0\text{ and }x\ge L\qquad\text{(regions I and III, outside)}
$$

![Infinite square well: V = 0 between x = 0 and x = L, and V infinite outside (regions I, II and III)](/notes/cse/s1/physics/module-2/infinite-well.webp)

The position of the particle at any moment lies in $0<x<L$. Since the particle cannot exist outside the box, the probability of finding it there is zero, so $\Psi^*\Psi=0$ and hence $\psi=0$ for $x\le0$ and $x\ge L$. Our task is to find $\psi$ **inside** the box. Since the potential does not depend on time, we use the time-independent Schrödinger equation.

## The equation inside the box

The time-independent Schrödinger equation is

$$
\frac{d^2\psi}{dx^2}+\frac{2m}{\hbar^2}(E-V)\psi=0
$$

Inside the box $V=0$, so

$$
\frac{d^2\psi}{dx^2}+\frac{2mE}{\hbar^2}\,\psi=0
$$

Put

$$
k^2=\frac{2mE}{\hbar^2},\qquad\text{that is}\qquad k=\sqrt{\frac{2mE}{\hbar^2}}\qquad(1)
$$

so the equation becomes

$$
\frac{d^2\psi}{dx^2}+k^2\psi=0\qquad(2)
$$

This is the equation of simple harmonic motion. Its general solution can be written in two equivalent ways.

## Method A: sine and cosine form

The general solution of (2) is

$$
\psi=A\sin kx+B\cos kx\qquad(3)
$$

with two constants $A$ and $B$ fixed by the **boundary conditions**. The wave function must be continuous, and it is zero outside the box, so it must vanish at both walls:

$$
\psi=0\ \text{ at }x=0\qquad\text{and}\qquad\psi=0\ \text{ at }x=L
$$

**Boundary condition at $x=0$:**

$$
\psi(0)=A\sin(k\cdot0)+B\cos(k\cdot0)=A\cdot0+B\cdot1=B
$$

So $B=0$ and

$$
\psi=A\sin kx
$$

**Boundary condition at $x=L$:**

$$
\psi(L)=A\sin kL=0
$$

We cannot have $A=0$, because then $\psi=0$ everywhere and there would be no particle. So

$$
\sin kL=0\qquad\Longrightarrow\qquad kL=n\pi\qquad\Longrightarrow\qquad k=\frac{n\pi}{L},\qquad n=1,2,3,\dots\qquad(4)
$$

## Method B: exponential form

The general solution of (2) can also be written as

$$
\psi=Ae^{ikx}+Be^{-ikx}
$$

**At $x=0$:** $\psi(0)=A+B=0$, so $B=-A$ and

$$
\psi=A\left(e^{ikx}-e^{-ikx}\right)=A\cdot2i\sin kx=2iA\sin kx
$$

using $e^{ikx}-e^{-ikx}=2i\sin kx$.

**At $x=L$:** $2iA\sin kL=0$. Since $2iA\ne0$, $\sin kL=0$, so again $kL=n\pi$ and $k=n\pi/L$. The wave function is

$$
\psi=2iA\sin\frac{n\pi x}{L}
$$

which is the same as Method A with the constant $C=2iA$ in place of $A$. Both methods lead to

$$
\psi_n=C\sin\frac{n\pi x}{L},\qquad n=1,2,3,\dots
$$

The wave function has several expressions, one for each value of $n$. The $n$th wave function is $\psi_n$.

## Why $n=0$ is not allowed

For $n=0$, $k=0$ and $\psi=C\sin0=0$ everywhere inside the box. A wave function that is zero everywhere means the particle is not present at all, so $n=0$ is not allowed. Negative values of $n$ give the same functions with a minus sign (the same physical state), so we take $n=1,2,3,\dots$

> **Watch out.** The general solution has **two** constants. The boundary condition at $x=0$ removes the cosine (or makes $B=-A$). The condition at $x=L$ quantises $k$. Do not drop a constant at the start.

> **Note on the source.** One lecture set wrote the general solution as "$A\cos kx+\sin kx$", where the second constant is missing. It is corrected above.

---

<!-- page 13 | Particle in a box: energies and wave functions -->

# Particle in a box: energy levels and wave functions

## Allowed energy levels

The value of $n$ depends on the energy of the particle. From (1) and (4) on the previous page,

$$
k=\sqrt{\frac{2mE}{\hbar^2}}\qquad\text{and}\qquad kL=n\pi
$$

$$
\Longrightarrow\qquad\sqrt{\frac{2mE}{\hbar^2}}\;L=n\pi
$$

Since $n$ must be a whole number, the energy $E$ can take only certain values. Squaring both sides:

$$
\frac{2mE}{\hbar^2}\,L^2=n^2\pi^2
$$

$$
\boxed{\,E_n=\frac{n^2\pi^2\hbar^2}{2mL^2}=\frac{n^2h^2}{8mL^2}\,}\qquad n=1,2,3,\dots
$$

The second form uses $\hbar=h/2\pi$, so $\pi^2\hbar^2=\pi^2h^2/4\pi^2=h^2/4$. Each allowed energy $E_n$ is called an **energy eigenvalue**.

$$
n=1:\ E_1=\frac{h^2}{8mL^2}\qquad n=2:\ E_2=\frac{4h^2}{8mL^2}=4E_1\qquad n=3:\ E_3=\frac{9h^2}{8mL^2}=9E_1
$$

and in general $E_n=n^2E_1$: $E_4=16E_1$, $E_5=25E_1$, and so on. The number $n$ is called the **quantum number**.

## Normalised wave functions

The wave function for level $n$ is $\psi_n=C\sin\dfrac{n\pi x}{L}$. The square of the absolute value of the wave function gives the probability of finding the particle. Since the particle is certainly somewhere inside the box,

$$
\int_0^L\psi_n^*\psi_n\,dx=1\qquad\text{(for all values of }n)
$$

This is the **normalisation condition**. Putting $\psi_n$:

$$
CC^*\int_0^L\sin^2\left(\frac{n\pi x}{L}\right)dx=1
$$

Use $\sin^2\theta=\dfrac{1-\cos2\theta}{2}$:

$$
|C|^2\int_0^L\frac{1-\cos\left(\frac{2n\pi x}{L}\right)}{2}\,dx=1
$$

Integrate each term:

$$
\int_0^L\frac12\,dx=\frac L2\qquad\qquad\int_0^L\frac12\cos\frac{2n\pi x}{L}\,dx=\frac{L}{4n\pi}\Big[\sin\frac{2n\pi x}{L}\Big]_0^L=\frac{L}{4n\pi}\left(\sin2n\pi-\sin0\right)=0
$$

So

$$
|C|^2\cdot\frac{L}{2}=1\qquad\Longrightarrow\qquad|C|^2=\frac2L\qquad\Longrightarrow\qquad|C|=\sqrt{\frac2L}
$$

The **normalised wave function** is

$$
\boxed{\,\psi_n=\sqrt{\frac2L}\,\sin\frac{n\pi x}{L}\,}\qquad n=1,2,3,\dots
$$

Each $\psi_n$ is an **energy eigenfunction**. For each value of $n$ there is an energy level $E_n$ and a corresponding wave function $\psi_n$.

![Wave functions and probability densities for n = 1, 2, 3, and the energy levels E1, 4E1, 9E1, 16E1](/notes/cse/s1/physics/module-2/box-wavefunctions.webp)

The figure shows the first three wave functions $\psi_n$ (left), the corresponding probability densities $|\psi_n|^2$ (middle) and the energy levels (right). As $x$ goes from $0$ to $L$, the angle $\dfrac{n\pi x}{L}$ goes from $0$ to $n\pi$, so $\psi_n$ contains exactly $n$ half-wavelengths: one half-wave for $n=1$, two for $n=2$, three for $n=3$.

## What the solution tells us

1. **Energy is quantised.** Inside the potential well, the particle can have only the discrete energies $E_n$, not any arbitrary value. This is the origin of energy levels in atoms.
2. **Zero-point energy.** The lowest energy is $E_1=\dfrac{h^2}{8mL^2}=\dfrac{\pi^2\hbar^2}{2mL^2}$, not zero. This minimum is called the **zero-point energy**. A confined particle can never be completely at rest. (This agrees with the uncertainty principle: if the particle is confined to $\Delta x\approx L$, there is a spread in momentum and hence some kinetic energy.)
3. **The levels are not equally spaced.** $E_n\propto n^2$, so the gaps increase: $E_2-E_1=3E_1$, $E_3-E_2=5E_1$, $E_4-E_3=7E_1$, …
4. **Preferred positions.** In the ground state ($n=1$) the probability of finding the particle is greatest at the **centre** ($x=L/2$). For $n=2$ the maxima are at $L/4$ and $3L/4$, a quarter and three quarters of the way across, and the probability at the centre is zero (a **node**). For $n=3$ the maxima are at $L/6$, $L/2$ and $5L/6$. Classically every position would be equally likely.
5. **Smaller box, larger energies.** $E_n\propto1/L^2$ and $E_n\propto1/m$. For a large box or a heavy particle, the levels are so close together that the quantisation cannot be noticed, and the classical picture is recovered.

> **Key idea.** When a particle is confined in a potential well, we get (i) certain preferred positions of maximum probability, (ii) only certain discrete energy levels, and (iii) a minimum energy that the particle must have.

## Worked examples

**Example 1.** Find the ground-state energy of an electron in an infinitely deep box of width $1\ \text{Å}$.

$$
E_1=\frac{h^2}{8mL^2}=\frac{(6.626\times10^{-34})^2}{8\times9.11\times10^{-31}\times(10^{-10})^2}=6.02\times10^{-18}\ \text{J}
$$

$$
E_1=\frac{6.02\times10^{-18}}{1.6\times10^{-19}}\ \text{eV}=\mathbf{37.6\ \text{eV}}
$$

The next levels are $E_2=4E_1=150\ \text{eV}$ and $E_3=9E_1=338\ \text{eV}$.

**Example 2.** In Example 1 the electron drops from $n=2$ to $n=1$ and emits a photon. Find the wavelength of the photon.

$$
\Delta E=E_2-E_1=3E_1=3\times37.6=112.8\ \text{eV}
$$

$$
\lambda=\frac{hc}{\Delta E}=\frac{1240\ \text{eV nm}}{112.8\ \text{eV}}=\mathbf{11.0\ \text{nm}}
$$

(using $hc=1240\ \text{eV nm}$). This is in the far ultraviolet.

**Example 3.** Find the ground-state energy of an electron in a box of width $1\ \text{nm}$.

The box is 10 times wider than in Example 1, and $E_1\propto1/L^2$, so the energy is 100 times smaller:

$$
E_1=\frac{37.6}{100}=\mathbf{0.376\ \text{eV}}
$$

**Example 4.** An electron in a box of width $L$ is in its first excited state. Find the probability of finding it in the central half of the box.

The first excited state is $n=2$. The central half runs from $L/4$ to $3L/4$:

$$
P=\int_{L/4}^{3L/4}\frac2L\sin^2\frac{2\pi x}{L}\,dx=\frac1L\int_{L/4}^{3L/4}\left(1-\cos\frac{4\pi x}{L}\right)dx=\frac1L\left[x-\frac{L}{4\pi}\sin\frac{4\pi x}{L}\right]_{L/4}^{3L/4}
$$

The sine term is $\sin3\pi-\sin\pi=0$, so

$$
P=\frac1L\left(\frac{3L}{4}-\frac L4\right)=\mathbf{\frac12}
$$

For comparison, in the ground state ($n=1$) the same central half has probability $\tfrac12+\tfrac1\pi\approx0.82$, because the particle is concentrated near the centre.

**Example 5.** A particle is in the ground state of a box of width $L$. Find the probability of finding it between $x=0$ and $x=L/4$.

$$
P=\int_0^{L/4}\frac2L\sin^2\frac{\pi x}{L}\,dx=\frac1L\left[x-\frac{L}{2\pi}\sin\frac{2\pi x}{L}\right]_0^{L/4}=\frac1L\left(\frac L4-\frac{L}{2\pi}\right)=\frac14-\frac{1}{2\pi}=\mathbf{0.091}
$$

Only about 9 %, much less than the 25 % a classical particle would have, because the ground-state wave function is small near the walls.

> **Watch out.** The quantum number starts at $n=1$, so the "first excited state" is $n=2$, not $n=1$. Also, the energy depends on $n^2$: if $n$ is doubled, the energy becomes four times.

---

<!-- page 14 | Quantum mechanical tunnelling -->

# Quantum mechanical tunnelling

## The idea

Consider a stream of particles, each of energy $E$, falling on a potential barrier of height $V_0$ and width $L$, with the energy less than the barrier height ($E<V_0$):

$$
V=0\quad\text{for }x<0\qquad\text{(region I)}
$$

$$
V=V_0\quad\text{for }0\le x\le L\qquad\text{(region II, the barrier)}
$$

$$
V=0\quad\text{for }x>L\qquad\text{(region III)}
$$

- **Classically**, when a particle of lower kinetic energy approaches a higher potential barrier, it bounces back. It does not have enough energy to climb over, so it can never appear on the other side.
- **Quantum mechanically**, the wave function representing the particle does not vanish at the barrier. If we solve the time-independent Schrödinger equation in the three regions, the wave function is **non-zero in all three regions I, II and III**. So there is a finite probability that the particle goes through the barrier and is found beyond it.

> **Quantum mechanical tunnelling.** The phenomenon of particles passing through potential barriers higher than their own energy is known as quantum mechanical tunnelling. It is purely a quantum effect, showing the wave property of quantum objects, and has no classical counterpart.

![Tunnelling: the incident wave is partly reflected, decays inside the barrier and emerges as a smaller transmitted wave](/notes/cse/s1/physics/module-2/tunnelling-barrier.webp)

## The wave function in each region

**Region I ($x<0$): incident and reflected waves.** Here $V=0$, so the solution is a travelling wave in each direction:

$$
\psi_{\text{I}}=Ae^{ikx}+Be^{-ikx},\qquad k=\frac{\sqrt{2mE}}{\hbar}
$$

$A$ is the amplitude of the **incident** wave (moving right) and $B$ the amplitude of the **reflected** wave (moving left). The non-zero value of the wave function in region I is due to the incident particles and the particles reflected from the barrier.

**Region II ($0\le x\le L$): inside the barrier.** Here $E<V_0$, so $E-V_0$ is negative and the solution no longer oscillates. It **decays exponentially** with distance into the barrier, roughly as

$$
\psi_{\text{II}}\approx Ce^{-\kappa x},\qquad\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}
$$

The wave function is small at the far side of the barrier, but **not zero**. Since the probability of finding the particle is non-zero in region II, the particle can be inside the barrier, which is classically forbidden.

**Region III ($x>L$): the transmitted wave.** Here $V=0$ again, so in general

$$
\psi_{\text{III}}=Fe^{ikx}+Ge^{-ikx}
$$

where $F$ is the amplitude of the **transmitted** wave. But nothing comes back from the right, so there is no reflected wave in region III: $G=0$ and

$$
\psi_{\text{III}}=Fe^{ikx}
$$

**Interpretation.** A non-zero wave function in region III means there is a finite probability of finding particles there. The incident particles have less energy than the barrier height, so they could not have climbed over it. Also, the wave function is non-zero inside the barrier. So we conclude that the particles have reached region III by **penetrating, or "tunnelling" through, the barrier**.

## Transmission coefficient

The probability of tunnelling is measured by the **transmission coefficient** $T$. Since the probability of finding the particle is proportional to the square of the amplitude,

$$
T=\frac{\text{probability density of the transmitted wave}}{\text{probability density of the incident wave}}=\frac{|F|^2}{|A|^2}
$$

In classical physics $T=0$ when $E<V_0$. In quantum mechanics it is a **finite, non-zero** quantity. For a barrier that is not too thin, it is approximately

$$
T\approx e^{-2\kappa L},\qquad\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}
$$

so it falls off **very rapidly**:

- The **wider** the barrier ($L$ larger), the smaller $T$.
- The **higher** the barrier compared with the energy ($V_0-E$ larger), the smaller $T$.
- The **heavier** the particle ($m$ larger), the smaller $T$. So tunnelling is important for light particles such as electrons.

**Example 1.** An electron has energy $1\ \text{eV}$ less than the height of a barrier. Find the approximate transmission coefficient for a barrier of width (a) $0.5\ \text{nm}$, (b) $1\ \text{nm}$.

$$
\kappa=\frac{\sqrt{2\times9.11\times10^{-31}\times1\times1.6\times10^{-19}}}{1.055\times10^{-34}}=5.1\times10^{9}\ \text{m}^{-1}
$$

(a) $2\kappa L=2\times5.1\times10^{9}\times0.5\times10^{-9}=5.1$, so $T\approx e^{-5.1}\approx\mathbf{6\times10^{-3}}$.

(b) $2\kappa L=10.2$, so $T\approx e^{-10.2}\approx\mathbf{3.5\times10^{-5}}$.

If the width is doubled, the tunnelling probability becomes about 170 times smaller. The scanning tunnelling microscope uses this extreme sensitivity to width.

## Applications

- **Tunnel diode** (Module 4): electrons tunnel through a very thin depletion layer, giving a negative-resistance region used in high-frequency oscillators.
- **Zener breakdown**: in heavily doped p-n junctions, electrons tunnel through the thin depletion region at a sharp reverse voltage.
- **Alpha decay**: alpha particles inside a nucleus have less energy than the nuclear barrier, yet they escape by tunnelling.
- **Scanning tunnelling microscope (STM)**: the tunnelling current between a sharp tip and a surface depends so strongly on the gap that it can map individual atoms.
- **Josephson effect and SQUIDs**: Cooper pairs tunnel through a thin insulating layer between two superconductors.

> **Watch out.** Tunnelling does not mean the particle gains energy to go over the barrier. Its energy stays $E$ throughout. It appears on the far side with the **same energy**, only with a much smaller probability (amplitude). Also, $T\approx e^{-2\kappa L}$ is an approximation for a fairly wide barrier, not an exact result.

---

<!-- page 15 | Practice and formula sheet -->

# Practice questions and formula sheet

Constants: $h=6.626\times10^{-34}\ \text{J s}$, $\hbar=1.055\times10^{-34}\ \text{J s}$, $m_e=9.11\times10^{-31}\ \text{kg}$, $e=1.6\times10^{-19}\ \text{C}$, $c=3\times10^{8}\ \text{m/s}$.

## Numerical problems

**1.** A certain excited state of a helium atom has an average lifetime of $2.11\times10^{-8}\ \text{s}$. What is the minimum uncertainty with which the frequency of the emitted radiation can be measured?

$$
\Delta\nu=\frac{1}{4\pi\,\Delta t}=\frac{1}{4\pi\times2.11\times10^{-8}}=\mathbf{3.8\times10^{6}\ \text{Hz}}=3.8\ \text{MHz}
$$

**2.** Calculate the uncertainty in the frequency of the emitted radiation if the uncertainty in time of an excited atom is $5\times10^{-8}\ \text{s}$.

$$
\Delta\nu=\frac{1}{4\pi\times5\times10^{-8}}=\mathbf{1.6\times10^{6}\ \text{Hz}}=1.6\ \text{MHz}
$$

**3.** The time gap between the excitation of an atom and the emission of radiation is $\Delta t=10^{-8}\ \text{s}$. Find the uncertainty in the frequency of the radiation.

$$
\Delta\nu=\frac{1}{4\pi\times10^{-8}}=\mathbf{8.0\times10^{6}\ \text{Hz}}=8.0\ \text{MHz}
$$

**4.** Find the energy of the ground state of an electron moving in an infinitely high potential box of width $1\ \text{Å}$.

$$
E_1=\frac{h^2}{8mL^2}=\frac{(6.626\times10^{-34})^2}{8\times9.11\times10^{-31}\times10^{-20}}=6.02\times10^{-18}\ \text{J}=\mathbf{37.6\ \text{eV}}
$$

**5.** An electron confined in a one-dimensional box of width $L$ is known to be in its first excited state. Determine the probability of finding the electron in the central half.

$n=2$, and integrating $|\psi_2|^2=\frac2L\sin^2\frac{2\pi x}{L}$ from $L/4$ to $3L/4$ gives $P=\mathbf{\tfrac12}$ (worked on the energy-levels page).

**6.** Find the de Broglie wavelength of an electron accelerated through $100\ \text{V}$.

$$
\lambda=\frac{1.227\times10^{-9}}{\sqrt{100}}=\mathbf{1.23\times10^{-10}\ \text{m}}
$$

**7.** A bullet of mass $25\ \text{g}$ moving at $400\ \text{m/s}$ has its speed measured to $0.02\,\%$. Find the minimum uncertainty in its position.

$\Delta v=0.08\ \text{m/s}$, $\Delta p=0.025\times0.08=2\times10^{-3}\ \text{kg m/s}$, so $\Delta x\ge\dfrac{\hbar}{2\Delta p}=\mathbf{2.64\times10^{-32}\ \text{m}}$.

**8.** Find the de Broglie wavelength of a neutron with kinetic energy $0.025\ \text{eV}$ ($m_n=1.675\times10^{-27}\ \text{kg}$).

$$
\lambda=\frac{h}{\sqrt{2m_nKE}}=\frac{6.626\times10^{-34}}{\sqrt{2\times1.675\times10^{-27}\times4.0\times10^{-21}}}=\mathbf{1.81\times10^{-10}\ \text{m}}
$$

**9.** An electron is confined to a region of size $10^{-10}\ \text{m}$. Find the minimum uncertainty in its speed.

$\Delta p\ge\dfrac{\hbar}{2\Delta x}=5.3\times10^{-25}\ \text{kg m/s}$, so $\Delta v=\Delta p/m=\mathbf{5.8\times10^{5}\ \text{m/s}}$.

**10.** For an electron in a box of width $1\ \text{Å}$, find the wavelength of the photon emitted in the transition $n=2\to n=1$.

$\Delta E=3E_1=112.8\ \text{eV}$, so $\lambda=\dfrac{1240}{112.8}\ \text{nm}=\mathbf{11.0\ \text{nm}}$.

> **Note on the source.** The lecture sheets used $\Delta E\,\Delta t\approx\hbar/2$ in one place and $\hbar$ in another. With $\hbar/2$, $\Delta\nu=1/(4\pi\Delta t)$ as above. With $\hbar$ every frequency width would be twice as large.

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
| Probability in a region | $P=\displaystyle\int\lvert\Psi\rvert^2\,dV$ |
| Normalisation | $\displaystyle\int\lvert\Psi\rvert^2\,dV=1$ |

### Uncertainty principle

| | |
| --- | --- |
| Position and momentum | $\Delta x\,\Delta p\ge\hbar/2$ |
| Energy and time | $\Delta E\,\Delta t\ge\hbar/2$ |
| Angular momentum and angle | $\Delta L\,\Delta\theta\ge\hbar/2$ |
| Natural line width | $\Delta\nu=\dfrac{1}{4\pi\,\Delta t}$ |
| Electron in nucleus | $\Delta x=10^{-14}\ \text{m}\Rightarrow KE\gtrsim10\ \text{MeV}$ |

### Schrödinger equation

| | |
| --- | --- |
| Time-dependent | $i\hbar\dfrac{\partial\Psi}{\partial t}=-\dfrac{\hbar^2}{2m}\dfrac{\partial^2\Psi}{\partial x^2}+V\Psi$ |
| Time-independent | $\dfrac{d^2\psi}{dx^2}+\dfrac{2m}{\hbar^2}(E-V)\psi=0$ |
| Three dimensions | $\nabla^2\psi+\dfrac{2m}{\hbar^2}(E-V)\psi=0$ |
| Operators | $E\to i\hbar\dfrac{\partial}{\partial t}$, $\ p\to-i\hbar\dfrac{\partial}{\partial x}$ |

### Particle in a box and tunnelling

| | |
| --- | --- |
| Energy levels | $E_n=\dfrac{n^2h^2}{8mL^2}=\dfrac{n^2\pi^2\hbar^2}{2mL^2}$, $\ n=1,2,3,\dots$ |
| Wave functions | $\psi_n=\sqrt{\dfrac2L}\sin\dfrac{n\pi x}{L}$ |
| Zero-point energy | $E_1=\dfrac{h^2}{8mL^2}$ |
| Level ratios | $E_n=n^2E_1$: $E_1, 4E_1, 9E_1, 16E_1,\dots$ |
| Transmission coefficient | $T=\dfrac{\lvert F\rvert^2}{\lvert A\rvert^2}\approx e^{-2\kappa L}$, $\ \kappa=\dfrac{\sqrt{2m(V_0-E)}}{\hbar}$ |
