<!-- page 1 | Page 1 -->

<!-- page 2 | Module-4 -->

# Module-4

## Mechanical Vibrations

- Types of vibrations

-> Simple harmonic motion:-

  • Amplitude
  • Oscillation
  • Time period
  • Frequency
  • Displacement

### Mechanical vibrations

Vibration is a periodic motion which exactly repeats itself after a regular interval of time. Any system posessing mass and elasticity is capable of undergoing vibration.

There are three types of mechanical vibrations;

1) Free or natural vibrations

A body is said to have free vibration if the periodic motion continues after the cause of initial disturbance is removed.

The free vibration will eventually stop because of the loss of energy from the system.

eg:- Tuning fork vibrations, guitar string vibrations, etc

<!-- page 3 | Page 3 -->

2) forced or excited vibration

when the body vibrates under the influence of external force only, the resulting vibration is called forced vibration.

eg:- Vibration due to reciprocating and rotating masses of IC engines (internal combustion)

3) Damped vibrations

If the vibratory system has a damper the vibration of the system will be opposed and the energy of the system will be dissipated.

eg:- Dampers are used as automobile shock absorbers.

Simple harmonic Motion (SHM)

Any motion which repeats all its characteristics after regular interval of time is called periodic motion. If the periodic motion satisfy the following two general conditions, that motion will be simple harmonic motion (SHM). The two conditions are:-

1) The acceleration of the body is always proportional to its distance from a fixed point known as centre of SHM or mean position of the motion.

The acceleration of the body is always directed towards the

<!-- page 4 | Page 4 -->

Example of SHM: Simple pendulum motion

![Simple pendulum motion showing extreme left (L), mean (M), and extreme right (R) positions.](/assets/notes/me/s1/engineering-mechanics/module-4/pendulum-left-mean-right.svg)

Extreme left Mean Extreme right

The important terms used in SHM :-

1) Amplitude (a)

The maximum displacement of the particle from its mean position is called amplitude.

![Pendulum diagram illustrating amplitude 'a'.](/assets/notes/me/s1/engineering-mechanics/module-4/pendulum-amplitude-a.svg)

The amplitude always equal to the radius of the circular orbit.

![Circular orbit relation with radius a.](/assets/notes/me/s1/engineering-mechanics/module-4/circular-orbit-radius-a.svg)

$a$ - radius of circle

![Displacement x and amplitude a in pendulum motion.](/assets/notes/me/s1/engineering-mechanics/module-4/pendulum-displacement-x.svg)

$a$ is the amplitude, $x$ is the displacement
(max displacement)
position closer to extreme position

<!-- page 5 | Oscillation -->

### Oscillation

The to and fro motion of the particle from the mean position.

Here, M-R-M-L-M represents one oscillation.

### Time period ($T$)

Time taken by the particle to complete one oscillation is called time period. Equation for time period,

$$T = \frac{2\pi}{\omega}$$

$\omega \to$ angular velocity in $\text{rad/s}$.

### Frequency

Number of cycles or oscillations completed per second (in one second) is known as frequency.

Frequency is the reciprocal of time period.

$$f = \frac{1}{T} = \frac{\omega}{2\pi}$$

Unit of $f$ is Hertz or cycles per second.

### Displacement from mean position

In this diagram displacement <u>from mean position</u> occupied by particle at $O$,

$$x = a \sin \omega t$$

$a \to$ amplitude  
$\omega \to$ angular velocity

Displacement <u>from extreme position</u> occupied by particle at $O$,

$$x' = a \cos \omega t$$

<!-- page 6 | Page 6 -->

In this motion, linear velocity$^{(v)}$ based on angular velocity

$$V = \omega \sqrt{a^2 - x^2}$$

$V_{max}$ will be when $x=0$ (at mean position)

$$V_{max} = a\omega$$

Min. velocity, min. acceleration = 0 .
$\hookrightarrow$ (extreme position)

<u>Acceleration</u>

Angular acceleration, $\text{acc} = \omega^2 x$

Acceleration will be maximum when $x = a$

$$\text{acc}_{(max)} = \omega^2 a = a\omega^2$$

Q. A body moving with SHM has an amplitude of $2\text{ m}$ and a time period of $4\text{ s}$. Find maximum velocity and maximum acceleration.

Note:-

Maximum linear velocity and acceleration is asked.

1) $V_{max} = a\omega = 2\omega$

$$\omega = ? \quad T = 4\text{ s}$$

$$T = \frac{2\pi}{\omega} \implies \omega = \frac{2\pi}{T} = \frac{\pi}{2} = 1.57\text{ rad/s}$$

$$V_{max} = 2 \times \frac{\pi}{2} = \pi = 3.14\text{ m/s}$$

$$a_{max} = \omega^2 a = (1.57)^2 \times 2 = 4.93\text{ m/s}^2$$

<!-- page 7 | Page 7 -->

Q. A particle undergoes SHM if the acceleration of the particle at a distance of $1.5\text{ m}$ from the centre of motion (mean position) is $6\text{ m/s}^2$.

Find :-
(1) Angular velocity $\omega$
(2) Time period of oscillation
(3) Frequency of oscillation

A) (1) $\text{acc} = \omega^2 x$

$x = 1.5\text{ m}, \quad \text{acc} = 6\text{ m/s}^2$

$6 = \omega^2 \times 1.5$

$\omega^2 = 4 \implies \omega = 2\text{ rad/s}$

(2) $T = \frac{2\pi}{\omega} = \frac{2\pi}{2} = 3.14\text{ s}$

(3) $f = \frac{1}{T} = \frac{1}{3.14} = 0.318\text{ Hz}$

Q) A body moving with SHM has velocities $10\text{ m/s}$ and $4\text{ m/s}$ at $2$ and $4\text{ m}$ distance from the mean position. Find amplitude, time period, maximum velocity and maximum acceleration.

A) $x = 2, \quad v = 10\text{ m/s} \quad - \text{(1)}$

$x = 4, \quad v = 4\text{ m/s} \quad - \text{(2)}$

![Diagram showing a simple pendulum undergoing SHM with two different positions corresponding to velocities and displacements.](/assets/notes/me/s1/engineering-mechanics/module-4/shm-two-velocities.svg)

We know, $v = \omega \sqrt{a^2 - x^2}$

Applying condition (1),

$10 = \omega \sqrt{a^2 - 2^2}$

Applying condition (2),

$4 = \omega \sqrt{a^2 - 4^2}$

<!-- page 8 | Page 8 -->

Dividing, $\frac{10}{4} = \sqrt{\frac{a^2 - 2^2}{a^2 - 4^2}}$

squaring, $\frac{100}{16} = \frac{a^2 - 2^2}{a^2 - 4^2}$

$100 a^2 - 1600 = 16 a^2 - 64$

$84 a^2 - 1536 = 0$

$a = 4.28 \text{ m}$

we know, as per (1) condition,

$10 = \omega \sqrt{4.28^2 - 2^2}$

$\omega = \frac{10}{\sqrt{4.28^2 - 4}} = 2.64 \text{ rad/s}$

Time period, $T = \frac{2\pi}{\omega} = \frac{2\pi}{2.64} = 2.38 \text{ s}$

~~$\omega = 2$~~

Maximum velocity will be at the mean position.

ie, at $x = 0$.

$\therefore V_{max} = a\omega$

$= 4.28 \times 2.64 = 11.29 \text{ m/s}$

Maximum acceleration $= a\omega^2$

$= 4.28 \times 2.64^2$

$= 29.82 \text{ m/s}^2$

<!-- page 9 | Page 9 -->

Q. A particle performing SHM when it is at a distance of $10\text{ cm}$ and $20\text{ cm}$ from the mean position. Its velocities are $1.2\text{ m/s}$ and $0.8\text{ m/s}$ respectively. Find amplitude of oscillation, time period of oscillation, maximum velocity and maximum acceleration.

A - $10\text{ cm} = 0.1\text{ m}$, $20\text{ cm} = 0.1\text{ m}$

![Pendulum diagram showing oscillation positions x = 0.1m with v = 1.2 m/s and x = 0.2m with v = 0.8 m/s](/assets/notes/me/s1/engineering-mechanics/module-4/pendulum-x-v-two-positions.svg)

$a$ is the amplitude,  
$\omega$ is the angular velocity

$$\begin{aligned}
V &= \omega \sqrt{a^2 - x^2} \\
1.2 &= \omega \sqrt{a^2 - 0.1^2} \quad \text{--- } \textcircled{1} \\
0.8 &= \omega \sqrt{a^2 - 0.2^2} \quad \text{--- } \textcircled{2}
\end{aligned}$$

$$\frac{\textcircled{1}}{\textcircled{2}} \Rightarrow \frac{12}{8} = \sqrt{\frac{a^2 - 0.1^2}{a^2 - 0.2^2}} = 1.5$$

$$(1.5)^2 = \frac{a^2 - 0.1^2}{a^2 - 0.2^2}$$

$$2.25(a^2 - 0.2^2) = a^2 - 0.1^2$$

$$1.25\, a^2 - 0.08 = 0$$

$$a = 0.253\text{ m}$$

$$\textcircled{1} \Rightarrow 1.2 = \omega \sqrt{0.253^2 - 0.1^2}$$

$$\omega = \frac{1.2}{\sqrt{0.253^2 - 0.1^2}} = 5.16\text{ rad/s}$$

<!-- page 10 | Page 10 -->

Time period, $T = rac{2\pi}{\omega} = rac{2\pi}{5.16}$

$T = 1.21\text{ s}$

Maximum velocity, $V_{\max} = a\omega = 0.253 \times 5.16$

$= 1.31\text{ m/s}$

Maximum acceleration = $a\omega^2$

$= 0.253 \times 5.16^2 = 6.73\text{ m/s}^2$

<u>New type problems</u>

Velocity, $V = ?$

Acceleration, $\text{acc} = ?$

$\boxed{x = a \sin \omega t}$ where $\boxed{\omega t = \frac{2\pi}{T} \times t \times \left(\frac{180}{\pi}\right)}$ $(\omega t \text{ is in degree})$

$\Downarrow$ $\qquad\qquad\qquad\qquad\text{degree to radian}$

(Time from mean position)

$\boxed{x = a \cos \omega t}$ (Time from extreme position)

$$\omega t = \frac{2\pi}{T} \times t \times \frac{180}{\pi}$$

Acceleration, $a = \omega^2 x$

Q) A body moving with SHM has an amplitude of $1\text{ m}$ and period of oscillation is $2\text{ s}$. Find velocity and acceleration of the body at time, $t = 0.4\text{ s}$ when time is measured from:-

<!-- page 11 | Page 11 -->

1) Mean position
2) Extreme position.

Ans) Amplitude, $a = 1\text{ m}$
Period of oscillation, $T = 2\text{ s}$
$t = 0.4\text{ s}$
Velocity, $V = ?$ , acceleration, $acc = ?$

1) when time is measured from mean position, $x = a\sin\omega t$
$$V = \omega\sqrt{a^2 - x^2}$$
$$V = \frac{2\pi}{T}\sqrt{1^2 - x^2}$$
where, $x = a\sin\omega t = 1 \times \sin\left(\frac{2\pi}{T} \times t \times \frac{180}{\pi}\right)$$
$$= \sin\left(\frac{2}{2} \times 0.4 \times 180\right)$$
$$x = 0.95\text{ m}$$
$$\therefore\quad \text{velocity, } V = \frac{2\pi}{2}\sqrt{1^2 - (0.95)^2} = 3.14\sqrt{1^2 - 0.95^2}$$
$$= 0.9804\text{ m/s}$$

acceleration, $acc = \omega^2 x$
$$= \left(\frac{2\pi}{2}\right)^2 \times 0.95 = 9.37\text{ m/s}^2$$
$$= 9.4\text{ m/s}^2$$

Time measured
From extreme position, $x = a\cos\omega t$

<!-- page 12 | Page 12 -->

$$x = a rac{}{} \cos \left(\frac{2\pi}{T} \times t \times \frac{180}{\pi}\right) = 1 \times \cos(1 \times 0.4 \times 180) = \cos(72)$$ 

$$= 0.309\text{ m}$$

$$v = \omega\sqrt{a^2 - x^2}$$

$$V = \frac{2\pi}{2} \sqrt{1^2 - (0.309)^2} = 3.14 \times \sqrt{1^2 - 0.309^2}$$

$$= 2.986\text{ m/s}$$

$$\text{acc} = \omega^2 x = \left(\frac{2\pi}{2}\right)^2 \times 0.309 = 3.049\text{ m/s}^2$$

Q. In the above problem, compute maximum velocity and maximum acceleration

$$\text{Maximum velocity, } a\omega = 1 \times \frac{2\pi}{2} = 3.14\text{ m/s}$$

$$\text{Maximum acceleration, } \omega^2 a = \left(\frac{2\pi}{2}\right)^2 \times 1 = \pi^2 = 9.86\text{ m/s}^2$$

Q) A body moving with SHM has an amplitude of $2\text{ m}$ and time period of $4\text{ S}$. Find the velocity and acceleration at the time of $t = 0.8\text{ S}$, when time is measured from:-

1) the mean position
2) the extreme position.

Also calculate maximum velocity and maximum acceleration.

Ans) 1) when time is measured from mean position,

$$x = a \sin \omega t \text{ ; } a = 2\text{ m, } T = 4\text{ s, } t = 0.8\text{ s}$$

$$= 2 \times \sin \left(\frac{2\pi}{4} \times 0.8 \times \frac{180}{\pi}\right) = 1.902\text{ m}$$

<!-- page 13 | Page 13 -->

Velocity $= \omega\sqrt{a^2 - x^2}$

$= \frac{2\pi}{4} \times \sqrt{2^2 - 1.902^2} = \frac{3.14}{2} \times \sqrt{4 - 1.902^2}$

$= 0.971 \text{ m/s}$

Acceleration, $a_{cc} = \omega^2 x$

$= \left(\frac{2\pi}{4}\right)^2 \times 1.902 = 4.69 \text{ m/s}^2$

2) Time from extreme position: $x = a \cos \omega t$

$x = 2 \times \cos\left(\frac{2\pi}{4} \times 0.8 \times \frac{180}{\pi}\right) = 0.618 \text{ m}$

Velocity $= \frac{2\pi}{4} \times \sqrt{2^2 - 0.618^2} = 2.98 \text{ m/s}$

$a_{cc} = \left(\frac{2\pi}{4}\right)^2 \times 0.618 = 1.524 \text{ m/s}^2$

- Maximum velocity $= a \omega = 2 \times \frac{2\pi}{4} = 3.14 \text{ m/s}$

- Maximum acceleration $= \omega^2 a = \left(\frac{2\pi}{4}\right)^2 \times 2 = \cancel{19.739 \text{ m/s}^2}$

$= 4.934 \text{ m/s}^2$

Q. A particle undergoes SHM. Find at what distance from the centre of motion, velocity will be half the maximum velocity?

<!-- page 14 | Page 14 -->

Note:-

centre of motion / Mean position

Velocity, $V_{	ext{max}} = a
u$

$$\frac{1}{2} V_{	ext{max}} = \frac{a\omega}{2}$$

We know, $V = \omega\sqrt{a^2 - x^2}$

$$\frac{a\omega}{2} = \omega\sqrt{a^2 - x^2}$$

Squaring both sides; $\quad \frac{a^2}{4} = a^2 - x^2$

$$\frac{3}{4} a^2 - x^2 = 0$$

$$\frac{3}{4} a^2 = x^2$$

$$x = \frac{\sqrt{3}}{2} a = 0.866 \, a \text{ m}$$

$\therefore$ The distance at which velocity is half of maximum velocity  
$= (0.866 \text{ amplitude})$.

2) A body is vibrating with SHM of amplitude $150\text{ mm}$ and frequency $3\text{ cps}$ or $3\text{ hertz}$. Calculate maximum velocity and maximum acceleration.

A) $a = 150\text{ mm} = 0.15\text{ m}$

$$\omega = \frac{2\pi}{T} = 2\pi f = 2\pi \times 3 = 6\pi$$

$$V_{\text{max}} = a\omega = 0.15 \times 6\pi$$
$$= 0.9\pi = 2.827 \text{ m/s}$$

$$(acc)_{\text{max}} : \omega^2 a$$
$$= 0.15 \times (6\pi)^2$$
$$= 53.29 \text{ m/s}^2$$

<!-- page 15 | Page 15 -->

Mass spring Analogy or Spring mass model

In this system, system is idealised as ^a one having mass and spring constant (Stiffness). For eg:- In siesmic analysis, it is idealised that building has a mass $m$ and it has a spring constant (stiffness).

1) Degree of freedom

The number of independent coordinates required to describe the motion of a system at any instant is known as degree of freedom.

A simple spring mass system like a simple pendulum oscillating in single plane is an example for single degree of freedom system.

A two mass two spring system is an example of two degree of freedom system.

![Single degree freedom system diagram showing a mass suspended from a fixed support by a single spring](/assets/notes/me/s1/engineering-mechanics/module-4/sdof-mass-spring.svg)

Single degree
freedom system

![Two degree of freedom system diagram with a single mass between two springs](/assets/notes/me/s1/engineering-mechanics/module-4/two-dof-one-mass.svg)

![Two degree of freedom system with two masses and three springs](/assets/notes/me/s1/engineering-mechanics/module-4/two-dof-two-masses.svg)

( Two degree of freedom system )

<!-- page 16 | Page 16 -->

Spring Mass model

1) Angular velocity (natural), $\omega_n = \sqrt{\frac{k}{m}} \qquad k \to \text{stiffness con } (\text{N/m})$
$\phantom{1) Angular velocity (natural), \omega_n = \sqrt{\frac{k}{m}} \qquad} m \to \text{Mass } (\text{Kg})$

2) Linear velocity , $f_n (\text{Natural})$

$$f_n = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$

3) Tension $= k \times x$

$\text{Max} \cdot \text{tension} = K \times a$

($k \to \text{stiffness}$
$a \to \text{amplitude}$)

![Diagram of a spring-mass system hanging from a fixed support](/assets/notes/me/s1/engineering-mechanics/module-4/spring-mass-hanging.svg)

Q) A weight of $50\text{ N}$ is suspended from a spring which vibrate vertically with an amplitude of $8\text{ cm}$ and a frequency of $1\text{ oscillation per second}$.

Find :-
1) The stiffness of the spring
2) Maximum tension in the spring
3) Maximum velocity of the system
4) Maximum acceleration of the system.

A) $\text{weight} = 50\text{ N} \Rightarrow \text{Mass}, m = \frac{50}{9.81} = 5.09\text{ Kg}$

$\text{amplitude}, a = 0.08\text{ m} \quad (8\text{cm} = 8 \times 10^{-2}\text{m})$

$$\text{Frequency expressed in Hertz } / \underset{(\text{cps})}{\text{cycles per seconds}} / \underset{(\text{rps})}{\text{revolutions per second}} / \text{oscillations per second} / \text{rotations per second} = f_n$$

<!-- page 17 | Page 17 -->

$$f_n = 1$$

$$f_n = rac{1}{2\pi} \sqrt{\frac{K}{m}}$$

$$1 = rac{1}{2\pi} \sqrt{\frac{K}{5.096}} \quad k \rightarrow \text{stiffness}$$

$$1^2 = \frac{1}{4\pi^2} \frac{K}{5.096}$$

$$K = 201.18 \text{ N/m}$$

$$\therefore \text{Stiffness or spring constant} = 201.2 \text{ N/m}$$

2) Maximum tension $= K a$

$$= 201.2 \times 0.08$$

$$= 16.1 \text{ N}$$

3) Maximum velocity $= a \omega_n$

$$\omega = \sqrt{\frac{K}{m}} = \sqrt{\frac{201.18}{5.09}}$$

$$V_{max} = 0.08 \times \sqrt{\frac{201.18}{5.09}} = 0.50 \text{ m/s}$$

4) Maximum acceleration: $a \omega_n^2$

$$= 0.08 \times \frac{201.18}{5.09}$$

$$= 3.16 \text{ m/s}^2$$

<!-- page 18 | Page 18 -->

Q) A weight of $30\text{ kg}$ is oscillating suspended from a spring with an amplitude of $90\text{ mm}$ and with a frequency of $3\text{ rad/sec}$. Determine stiffness of the spring (spring constant), Maximum tension, maximum velocity and Maximum acceleration.

*) $m = 30\text{ kg}$, $a = 90 \times 10^{-3}\text{ m} = 0.09\text{ m}$

$\omega_n = 3\text{ rad/s} \Rightarrow \text{Ang. velocity}$

$K = ? \quad \omega_n = \sqrt{\frac{K}{m}}$

$3 = \sqrt{\frac{K}{30}}$

$K = 3^2 \times 30 = 270\text{ N/m} \Rightarrow \text{spring constant}$

Maximum tension: $ka$

$= 270 \times 0.09$

$= \underline{24.3\text{ N}}$

Maximum velocity $= a\omega$

$= 0.09 \times 3 = \underline{0.27\text{ m/s}}$

Maximum acceleration $= \omega^2a$

$= 0.09 \times 9 = \underline{0.81\text{ m/s}^2}$

In the above question, determine the tension if the system was subjected to $20\text{ mm}$ displacement.

<!-- page 19 | Page 19 -->

Tension $= kx$

$\phantom{\text{Tension}} = 270 \times 2 \cdot 10^2 \text{ N}$ [uncertain: $2 \cdot 10^2$ or $0.02$]

$\phantom{\text{Tension}} = 540 \text{ N}$

Here, $x = 20 \text{ mm}$

$\phantom{\text{Here, }} x = 0.02 \text{ m}$

Q) If a helical spring is having a stiffness of $90 \text{ N/cm}$, what weight should be hung on it so that it will oscillate with a time period of one second?

A)

![Diagram of a helical spring suspended from a rigid support with a mass m attached at the bottom.](/assets/notes/me/s1/engineering-mechanics/module-4/helical-spring-mass.svg)

Natural frequency of the system, $f_n = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$

$f_n = \frac{1}{T_n} \quad T_n \to \text{time period}$

$f_n = \frac{1}{1} = 1 \text{ Hz} \quad , \quad K = 90 \text{ N/cm} = 90 \times 10^2 \text{ N/m}$

$1 = \frac{1}{2\pi}\sqrt{\frac{90 \times 10^2}{m}}$

$4\pi^2 m = 90 \times 10^2$

$m = 227.97 \text{ kg}$

In the above problem, if time period was $4 \text{ seconds}$,

$f_n = \frac{1}{2\pi}\sqrt{\frac{k}{m}} = \frac{1}{T_n}$

$\frac{1}{4} = \frac{1}{2\pi}\sqrt{\frac{90 \times 10^2}{m}}$

~~$m = 4^2 \times 4\pi^2$~~

$\frac{4\pi^2 m}{4^2} = 90 \times 10^2 \implies m = 3647.5 \text{ kg}$

<!-- page 20 | Page 20 -->

Q) A $80\text{ N}$ weight is hung from a spring. The weight makes $4$ oscillations per second. Determine time period and stiffness of the spring.

$\rightarrow f_n = 4\text{ Hz}, \quad T_n = \frac{1}{4} = 0.25\text{ s}$

$$f_n = \frac{1}{2\pi} \sqrt{\frac{K}{M}} \qquad M = \frac{80}{9.81}\text{ kg} = 8.15\text{ kg}$$

$$4 = \frac{1}{2\pi} \sqrt{\frac{K}{8.154}}$$

$$K = 16 \times 4\pi^2 \times 8.154$$

$$\underline{K = 5150.51\text{ N/m}}$$

$$\text{Time period} = \frac{1}{f_n} = \frac{1}{4} = \underline{0.25\text{ s}}$$

Q) If angular velocity is $20\text{ rad/second}$, what is the time period?

$$\omega = 20\text{ rad/s}$$

We know, $\quad \frac{2\pi}{T} = \omega$

$$T = \frac{2\pi}{\omega} = \frac{2\pi}{20} = \underline{0.314\text{ s}}$$

Q) A weight of $50\text{ N}$ is vibrating with an amplitude of $70\text{ mm}$ with a angular velocity of $20\text{ rad/s}$. Determine time period, stiffness and maximum tension.

<!-- page 21 | Page 21 -->

Ans) $m = \frac{50}{9.81} = \cancel{5.09} \quad 5.096\text{ kg}$

$\omega = 20\text{ rad/s} \quad a = 70\text{ mm} = 0.07\text{ m}$

$\omega_n = \sqrt{\frac{k}{m}} = \cancel{\sqrt{\frac{k}{m}}}$

$20 = \sqrt{\frac{k}{5.096}}$

$\Rightarrow K = 2038.4\text{ N/m}$

$\frac{1}{T_n} = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$

$T_n = 2\pi \sqrt{\frac{m}{k}} = \cancel{2\pi \sqrt{2038.4}}$

$T_n = 2\pi \sqrt{\frac{5.096}{2038.4}} = 0.314\text{ s}$

$\text{Maximum tension} = k a$

$\quad = 2038.4 \times 0.07$

$\quad = 142.68\text{ N}$

Q) The frequency of a weight (w) with spring constant $k$ is $12\text{ cycles per second}$ ($12\text{ Hz}$). When an extra weight of $20\text{ N}$ is coupled with the weight, the frequency reduces to $10\text{ Hz}$. Find the weight $w$ and spring constant of the spring.

<!-- page 22 | Page 22 -->

$$f_n = \frac{1}{2\pi} \sqrt{\frac{k}{m}}$$

Case-I, $12 = \frac{1}{2\pi} \sqrt{\frac{k}{(W/9.81)}}$

$$12 = \frac{1}{2\pi} \sqrt{\frac{k \times 9.81}{W}} \quad \text{--- } (1)$$

Case-II, $10 = \frac{1}{2\pi} \sqrt{\frac{k \times 9.81}{W + 20}} \quad \text{--- } (2)$$

$$\frac{(1)}{(2)} = \frac{12}{10} = \sqrt{\frac{W + 20}{W}}$$

$$\text{Squaring;} \quad 1.44 = \frac{W + 20}{W}$$

$$1.44 W = W + 20$$

$$W (1.44 - 1) = 20$$

$$W = 45.45 \text{ N}$$

$$m = \frac{45.45}{9.81} = 4.63 \text{ kg}$$

![Diagrams for springs in series and parallel connections](/assets/notes/me/s1/engineering-mechanics/module-4/springs-series-parallel.svg)

Equivalent stiffness ($K_e$)

Springs are in Series

$K_e = ?$

$$\frac{1}{K_e} = \frac{1}{K_1} + \frac{1}{K_2}$$

Parallel connection

$$K_e = K_1 + K_2 \rightarrow \text{Equivalent stiffness}$$
$$(\text{Unit} \rightarrow \text{N/m})$$

<!-- page 23 | Page 23 -->

Q) A body of mass $50\text{ kg}$ is suspended by two springs of stiffness $4\text{ kN/m}$ and $6\text{ kN/m}$ as in figure. The body is pulled $50\text{ mm}$ down from its equilibrium position and then released. Calculate:

1) equivalent stiffness

2) Maximum tension in the spring

3) Frequency of oscillation

4) Maximum velocity and Maximum acceleration.
5) Angular velocity

Sol: (a)

![Diagrams (a), (b), and (c) showing different spring-mass arrangements](/assets/notes/me/s1/engineering-mechanics/module-4/spring-arrangements-abc.svg)

(a) Series

$$\frac{1}{K_e} = \frac{1}{K_1} + \frac{1}{K_2}$$

$$\frac{1}{K_e} = \frac{1}{6} + \frac{1}{4} = \frac{10}{24}$$

$$K_e = \frac{24}{10} = 2.4\text{ kN/m}$$

(1) $\Rightarrow K_e = 2400\text{ N/m}$

(2) Maximum tension = $k a$

$$= 2400 \times (50 \times 10^{-3}) = 120\text{ N}$$

<!-- page 24 | Page 24 -->

(3) frequency, $f_n = \frac{1}{2\pi} \sqrt{\frac{K}{m}}$

$$\quad\quad\quad = \frac{1}{2\pi} \sqrt{\frac{2400}{50}} = 1.103\text{ Hz}$$

(4) Maximum velocity $= a\omega \quad \left(\omega = \sqrt{\frac{K}{m}}\right)$

$$\quad\quad\quad = 0.05 \times \sqrt{\frac{2400}{50}}$$

$$\quad\quad\quad = 0.35\text{ m/s}$$

Maximum acceleration $= \omega^2 a$

$$\quad\quad\quad = \frac{2400}{50} \times 0.05 = 2.4\text{ m/s}^2$$

(5) Angular velocity, $\omega = \sqrt{\frac{K}{m}} \text{ or } 2\pi f$

$$\quad\quad\quad \omega = \sqrt{\frac{2400}{50}} = 6.93\text{ rad/s}$$

(b)$^{(1)}$ Equivalent stiffness, $k_e = k_1 + k_2$

$$\quad\quad\quad = 6 + 4 = 10\text{ kN/m}$$

$$\quad\quad\quad K_e = 10000\text{ N/m}$$

(2) Max. tension $= K a$

$$\quad\quad\quad = 10^4 \times 0.05 = 500\text{ N}$$

(3) $f_n = \frac{1}{2\pi} \sqrt{\frac{K}{m}} = \frac{1}{2\pi} \sqrt{\frac{10^4}{50}} = 2.25\text{ Hz}$$

<!-- page 25 | Page 25 -->

5) $\omega = \sqrt{\frac{K}{m}} = \sqrt{\frac{10^4}{50}} = 14.14 \text{ rad/s}$

4) $\text{Max velocity: } a\omega = 0.05 \times 14.14$

$\phantom{\text{Max velocity: } a\omega} = 0.707 \text{ m/s}$

$\text{Max acceleration: } \omega^2 a = 14.14^2 \times 0.05$

$\phantom{\text{Max acceleration: } \omega^2 a} = 10 \text{ m/s}^2$

(c) $\to$ Since it is also same parallel connection as in (b),

answers are same

$\text{Equivalent Stiffness} = 10^4 \text{ N/m}$

$\text{Max tension} = 500 \text{ N}$

$f_n = 2.25 \text{ Hz}$

$\omega = 14.14 \text{ rad/s}$

$V_{max} = 0.707 \text{ m/s}, \quad a_{max} = 10 \text{ m/s}^2$

Q what is meant by Stiffness / spring constant ($K$) ?

Stiffness is defined as the force required to produce unit deflection. If a body is more stiff, more will be the force required to deform or deflect it. It's unit is $\text{N/m}$ or

$\boxed{K = \frac{F}{\delta}}$, $F$ is the force required to make $\delta$ displacement.

with respect to spring, the stiffness or spring constant is obtained

<!-- page 26 | Page 26 -->

