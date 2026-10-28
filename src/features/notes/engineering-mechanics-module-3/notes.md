<!-- page 1 | Page 1 -->

<!-- page 2 | Module-3 -->

# Module-3
## Dynamics

### Dynamics
Dynamics deals with the motion of the bodies under the action of forces.

### Kinematics
Branch of dynamics which deals with the motion of bodies without the reference of forces.

### Kinetics
Branch of dynamics which deals with the motion of bodies and the forces causing the motion.

## Kinematics

**Rectilinear motion** - ~~Motion~~ particle moves along a straight line.

**Velocity** - rate of change of displacement of a particle moving in straight line.

$$\text{velocity, } v = \frac{s}{t}, \quad \text{unit} \to \text{m/s}$$

when displacement and time caused for displacement is very small,

$$v = \frac{ds}{dt}$$

<!-- page 3 | Page 3 -->

Acceleration - Rate of change of velocity of a body.

$$\boxed{a = \frac{v}{t}} \quad \text{or} \quad \boxed{a = \frac{dv}{dt}}$$

$$a = \frac{d}{dt}\left(\frac{ds}{dt}\right) \Rightarrow \boxed{a = \frac{d^2s}{dt^2}}$$

$$\text{Unit} \rightarrow \text{m/s}^2$$

<u>Equations of motion in a Straight line</u>

Let $u$ be the initial velocity, $v$ be the final velocity, and $t$ be the time in sec. during which velocity changes from $u$ to $v$, $s \rightarrow$ distance travelled by the body in time $t$, $a \rightarrow$ acceleration of the body.

Equations of motion are as follows:-

1) $v = u + at$

2) $s = ut + \frac{1}{2}at^2$

3) $v^2 - u^2 = 2as$

Q. A car is moving with a velocity of $15\text{ m/s}$. The car is brought to rest by applying brake in $5\text{ seconds}$. Determine,

i) retardation or decceleration

ii) The distance travelled by the car after applying the brake.

<!-- page 4 | Page 4 -->

i) $u = 15\text{ m/s}$, $t = 5\text{ s}$, $v = 0$

$$\begin{aligned}
v &= u + at \\
0 &= 15 + a \times 5 \\
5a &= -15 \\
a &= -3\text{ m/s}^2
\end{aligned}$$

ii) $S = ut + \frac{1}{2}at^2$

$$\begin{aligned}
&= 15 \times 5 + \frac{1}{2} \times (-3) \times 5^2 \\
S &= 37.5\text{ m}
\end{aligned}$$

3. The motion of a particle along a straight line is defined as

$S = 25t + 5t^2 - 2t^3$, where $S$ is in metres and $t$ in seconds. Find :-

i) velocity and acceleration at start.

ii) the time the particle reaches the maximum velocity.

iii) the maximum velocity of the particle.

Ans)
$$\begin{aligned}
v &= \frac{ds}{dt} = 25 + 10t - 6t^2 \\
a &= \frac{dv}{dt} = 10 - 12t
\end{aligned}$$

i) At start, $t = 0$

$$v = 25\text{ m/s} \quad a = 10\text{ m/s}^2$$

ii) Velocity reaches maximum means $\frac{dv}{dt} = 0$

<!-- page 5 | Page 5 -->

$$\Rightarrow 10 - 12 t = 0$$

$$\Rightarrow t = 0.833\text{ s}$$

iii) the expression for velocity here is $V = 25 + 10t - 6t^2$

$$\therefore V_{max} = (25 + (10 \times 0.833)) - (6 \times 0.833^2)$$

$$= 29.17\text{ m/s}$$

Q. A bullet moving at a rate of $250\text{ m/s}$ is fired into a ~~log of wood~~
log of wood. the bullet penetrates to a depth of $40\text{ cm}$.
If the bullet moving with same velocity is fired into a similar piece of
wood, $20\text{ cm}$ thick, with what velocity would it merge. Taking
resistance to be same.

A. $u = 250\text{ m/s} \quad V = 0$

$$S = 40\text{ cm} = 40 \times 10^{-2}\text{ m}$$

\underline{\text{Case - I}} $(v = 0)$

$$v^2 - u^2 = 2as$$

$$0^2 - 250^2 = 2 \times a \times 0.4$$

$$a = \frac{-250^2}{2 \times 0.4} = -78125\text{ m/s}^2$$

<!-- page 6 | Page 6 -->

Take same acceleration,

$$v^2 = u^2 + 2as$$

$$v^2 = 250^2 + 2 \times (-78125) \times 20 \times 10^{-2}$$

$$v = \sqrt{31250} = 176.77 \text{ m/s}$$

Given $S = t^3 - 3t^2 + 2t + 5$, find the time at which acceleration $= 0$ and the time at which velocity is $2 \text{ m/s}$. Given

$$v = \frac{ds}{dt} = 3t^2 - 6t + 2$$

Given, $v = 2 \text{ m/s}$

$$2 = 3t^2 - 6t + 2$$

$$3t^2 - 6t = 0$$

$$t = 2 \text{ s}$$

$$a = \frac{dv}{dt} = 6t - 6$$

$$a = 0 \implies 6t - 6 = 0 \qquad 6t = 6$$

$$t = 1 \text{ s}$$

* A stone dropped into well is heard to strike the water after [uncertain: be] $2 \text{ sec}$.

Find the depth of the well if the velocity of sound is $340 \text{ m/s}$.

<!-- page 7 | Page 7 -->

![Diagram of a well showing depth h, time t1 for stone to fall, and time t2 for sound to travel up.](/assets/notes/me/s1/engineering-mechanics/module-3/well-stone-fall-sound.svg)

$$\boxed{t_1 + t_2 = 2}$$

$t_1 \rightarrow$ Time to reach bottom

$t_2 \rightarrow$ Time by sound to reach top.

$h \rightarrow$ depth of well.

Stone dropped, $u = 0$

$$s = ut + \frac{1}{2}at^2$$

$$s = 0 \cdot t + \frac{1}{2} \times 9.8 \times t_1^2 \implies \boxed{h = \frac{1}{2}gt_1^2} - \textcircled{1}$$

Similarly, $h = 340 \times t_2$

$$\boxed{h = 340(2 - t_1)} - \textcircled{2} \qquad \boxed{S = vt}$$

Equating $\textcircled{1}$ and $\textcircled{2}$,

$$\frac{1}{2}gt_1^2 = 340(2 - t_1)$$

$$\frac{1}{2} \times 9.81 \times t_1^2 = 680 - 340t_1$$

$$4.9t_1^2 = 680 - 340t_1$$

$$4.9t_1^2 + 340t_1 - 680 = 0$$

$$t_1 = \underline{1.95}\text{ s}$$

$$t_2 = 2 - 1.95 = \underline{0.05}\text{ s}$$

$$\textcircled{2} \Rightarrow \quad h = 340(2 - 1.95)$$

$$= \underline{\underline{17\text{ m}}} \Rightarrow \text{Height of well. on the basis of velocity of sound.}$$

<!-- page 8 | Page 8 -->

A stone is dropped from the top of a tower $60\text{ m}$ high. At the same time, another stone is thrown upwards from the foot of the tower with a velocity of $30\text{ m/s}$. When and where the two stones cross each other?

![Diagram showing a tower of height 60m with a stone dropped from the top travelling a distance x downwards and another stone thrown upwards with velocity 30 m/s from the bottom.](/assets/notes/me/s1/engineering-mechanics/module-3/tower-stone-meeting-60m.svg)

Height of the tower: $60\text{ m}$

Case-1

$\text{Distance} = x$, $\text{time} = t_1$, $u_1 = 0$

$x = ut + \frac{1}{2}gt^2$

$$\boxed{x = \frac{1}{2}gt_1^2} - \text{(1)}$$

Case-2

$\text{Distance} = 60-x$, $\text{time} = t_2$, $u_2 = 30\text{ ms}^{-1}$

$60 - x = u_2 t_2 + \frac{1}{2}(-g)t_2^2$

at same time $\Rightarrow t_1 = t_2 = t$.

$$\Rightarrow \boxed{60 - x = u_2 t_1 - \frac{1}{2}gt_1^2} - \text{(2)}$$

$\text{(1)} \Rightarrow \quad 60 - x = u_2 t_1 - x$

$$60 = u_2 t_1 \qquad 60 = 30 \times t_1$$

<!-- page 9 | Page 9 -->

(1) $\Rightarrow x = \frac{1}{2} g \times 2^2 = 2 \times 9.81$

$$= 19.62\text{ m}$$

$\therefore$ The two stones will cross each other at the distance of $19.62\text{ m}$ from the top of the tower after two seconds.

Q. A stone is dropped from top of a tower $100\text{ m}$ high. Another stone is projected upwards at the same time from the foot of the tower and meets the first particle at a height of $30\text{ m}$. Determine the velocity with which the second Stone is projected upwards.

A.

![Diagram showing a vertical tower of height 100 m, with a stone dropped from the top and meeting another stone at a height of 30 m from the bottom.](/assets/notes/me/s1/engineering-mechanics/module-3/tower-100m-two-stones.svg)

Case-1

Stone is dropped, $(u = 0)$

$$s = ut + \frac{1}{2}at^2$$

$$70 = \frac{1}{2} g t_1^2$$

$$t_1 = \sqrt{\frac{70 \times 2}{9.8}} = 3.78\text{ s}$$

$$30 = u_2 t_2 + \frac{1}{2} g t_2^2$$

$(t_1 = t_2 \because \text{at same time})$

$$30 = u_2 t_1 - \frac{1}{2} \times 9.8 \times t_1^2$$

$$30 = u_2 \times 3.78 - \frac{1}{2} \times 9.81 \times 3.78^2$$

$$u_2 = 26.47\text{ m/s}$$

<!-- page 10 | Page 10 -->

5. A body is moving with uniform acceleration and covers $10\text{ m}$ in $4^{\text{th}}$ second and $25\text{ m}$ in the $10^{\text{th}}$ second. Determine the initial velocity of the body and its acceleration.

Note:-
Distance travelled by the particle in the $n^{\text{th}}$ second, $S = u + \frac{a}{2}(2n-1)$

$$10 = u + \frac{a}{2}(2 \times 4 - 1)$$

$$10 = u + \frac{a}{2} \cdot 7 \quad \Rightarrow \quad 10 = u + 3.5a \quad -(1)$$

$$25 = u + \frac{a}{2} \times 19 \quad \Rightarrow \quad 25 = u + 9.5a \quad -(2)$$

solving: $\underline{u = 1.25\text{ m/s}}$

$a = 2.5\text{ m/s}^2$

6. The motion of a body along a straight line with an acceleration is given by the relation $a = 4t^2 - 3t + 2$, where $a$ is in $\text{m/s}^2$ and $t$ is in $\text{s}$. The body has a velocity of $10\text{ m/s}$ at $t = 3\text{ s}$. ~~At $t =$~~ , and it is located $12\text{ m}$ to the right of origin at $t = 2\text{ s}$. Determine the position and velocity of the particle after $10\text{ seconds}$.

Integrating,

$$\int a \cdot dt = \int (4t^2 - 3t + 2) \cdot dt = \frac{4t^3}{3} - \frac{3t^2}{2} + 2t + C_1$$

Given, $t = 3\text{ s}$, $v = 10\text{ m/s}$

$$\frac{4 \times 3^3}{3} - \frac{3 \times 3^2}{2} + 6 + C_1 = 10$$

<!-- page 11 | Page 11 -->

Now the expression for velocity becomes. $V = rac{4t^3}{3} - rac{3t^2}{2} + 2t - 18.5$

Velocity at $t = 10\text{ s}$:
$$V = \frac{4 \times 10^3}{3} - \frac{3}{2} \times 10^2 + 20 - 18.5 = 1184.83\text{ m/s}$$

$$s = \int v\cdot dt = \frac{4}{3} \cdot \frac{t^4}{4} - \frac{3}{2} \cdot \frac{t^3}{3} + \frac{2t^2}{2} - 18.5\,t + C_2$$

$$S = \frac{t^4}{3} - \frac{t^3}{2} + t^2 - 18.5\,t + C_2$$

$$12 = \frac{2^4}{3} - \frac{2^3}{2} + 2^2 - 18.5 \times 2 + C_2$$

$$C_2 = 43.66$$

$$S = \frac{t^4}{3} - \frac{t^3}{2} + t^2 - 18.5\,t + 43.6$$

displacement at $t = 10\text{ s}$:
$$S = \frac{10^4}{3} - \frac{10^3}{2} + 10^2 - (18.5 \times 10) + 43.6$$

$$S = 2791.93\text{ m}$$

<!-- page 12 | Page 12 -->

Q. A ball is thrown vertically upwards with a velocity $20\text{ m/s}$ from the top of a tower $25\text{ m}$ high. Calculate :-

a) The maximum height to which the ball will rise in its flight.

b) Velocity of the ball during the downward travel at a point in the same level as the point of projection.

c) Time required for the ball to reach the ground.

![Diagram showing the trajectory of a ball thrown upwards from a tower to the ground](/assets/notes/me/s1/engineering-mechanics/module-3/ball-thrown-tower-trajectory.svg)

consider the travel from $B$ to $C$. we know $V = u + at$

$$0 = u_B + -gt$$

$$u_B = gt \Rightarrow 20 = 9.8 \times t$$

$$t = 2.04\text{ s}$$

Now consider the vertical distance covered by ball from $C$ to $D$,

$$S = u_C t + \frac{1}{2} g t^2$$

$$= 0 + \frac{1}{2} \times 9.8 \times (2.04)^2$$

$$= 20.41\text{ m}$$

<!-- page 13 | Page 13 -->

$\therefore$ Total distance travelled by the ball from $C$ to $A$,

$$S + 25\text{ m}$$

$$20.41 + 25 = 45.41\text{ m}$$

b) consider the flight from $C$ to $D$.

$$v = u + at$$

$$u_D = u_C + g t$$

$$u_D = 0 + 9.81 \times 2.04 = 20.01\text{ m/s}$$

$$= 20\text{ m/s}$$

c) Total time taken = Time for $C \to D$ + Time for $B \to C$ + Time for $25\text{ m}$ coverage

$$= 2.04 + 2.04 + t$$

we know - $S = ut + \frac{1}{2}at^2$

$$25 = 20.01 t + \frac{1}{2} \times 9.8 \times t^2$$

$$t = 1\text{ s}$$

Total time : $2.04 + 2.04 + 1$

$$= 5.08\text{ s}$$

A thief's car had a start with an acceleration of $2\text{ m/s}^2$. A police vigilant came after $10\text{ s}$ and continued to chase the thief's car with a uniform velocity of $40\text{ m/s}$. Find out the time taken by which the police jeep will overtake the car.

<!-- page 14 | Thief car -->

### Thief car
$$\begin{aligned}
u_t &= 0 \\
a &= 2\text{ m/s}^2 \\
t_t &= t + 10 \\
S_t &= ut + \frac{1}{2}at_t^2 \\
&= 0 + \frac{1}{2} \times 2 \times (t+10)^2
\end{aligned}$$

$$\boxed{S_t = t^2 + 20t + 100} \quad \text{--- } ①$$

### Police jeep
$$\begin{aligned}
t_p &= t \\
u_p &= 40\text{ m/s}, \quad a = 0 \quad (\text{uniform velocity}) \\
S_p &= u_pt + \frac{1}{2} \cdot 0 \times t^2
\end{aligned}$$

$$\boxed{S_p = 40 \times t} \quad \text{--- } ②$$

Police overtook thief $\rightarrow \quad S_t = S_p$

$$t^2 + 20t + 100 = 40t$$

$$t^2 - 20t + 100 = 0$$

$$\underline{t = 10\text{ s}}$$

Time taken by the police $= 10 + 10 = \underline{20\text{ s}}$

---

**Q.** On a straight road, a smuggler's car passes a police station with a uniform velocity of $10\text{ m/s}$. After $10\text{ s}$, a police party follows in a jeep with a uniform acceleration of $1\text{ m/s}^2$. Find the time necessary for the jeep to catch up with the smuggler's car. Also find the time smuggler's car takes while the police jeep catch them.

**A)** 
$$\begin{array}{l|l}
\underline{\text{Smuggler}} & \underline{\text{Police}} \\[4pt]
u_s = 10\text{ m/s}, \quad a = 0 & t_p = t \quad u_p = 0 \\[4pt]
t_s = t + 10 & a_p = 1\text{ m/s}^2
\end{array}$$

<!-- page 15 | Page 15 -->

$$\begin{aligned}
S_s &: u_s t + 0 \\
S_s &: 10(t + 10) \\
S_s &= 10t + 100 \quad -(1)
\end{aligned}
\qquad\vrule\qquad
\begin{aligned}
S_p &: u_p t_p + \frac{1}{2} a t_p^2 \\
S_p &= \frac{1}{2} \times 1 \times t^2 \\
S_p &: 0.5 t^2 \quad -(2)
\end{aligned}$$

Overtaking; $S_s = S_p$

$$10t + 100 = 0.5 t^2$$

$$0.5 t^2 - 10t - 100 = 0$$

$$t = 27.32 \text{ s}$$

***

) Two cars, A and B travelling in the same direction gets stopped at a traffic signal. When the signal turn green, car A accelerates at $0.75 \text{ m/s}^2$ and $1.75 \text{ s}$ later car B starts and accelerates at $1.1 \text{ m/s}^2$.

a) Determine when and where B will overtake A?

b) The speed of each car at that time.

Ans)
$$\begin{array}{c|c}
\underline{A} & \underline{B} \\[6pt]
u_A = 0 & u_B = 0 \\[6pt]
a_A = 0.75 \text{ m/s}^2 & a_B = 1.1 \text{ m/s}^2 \\[6pt]
t_A = t + 1.75 & t_B = t \\[6pt]
S_A = u_A t_A + \frac{1}{2} a_A t_A^2 & S_B = u_B t_B + \frac{1}{2} a_B t_B^2 \\[6pt]
= 0 + \frac{1}{2} \times 0.75 \times (t + 1.75)^2 & S_B = \frac{1}{2} \times 1.1 \times t^2 \\[6pt]
S_A = \frac{0.75}{2}\left(t^2 + 3.5t + 3.0625\right) & S_B = \frac{1.1}{2} t^2 \quad -(2)
\end{array}$$

<!-- page 16 | Kinetics -->

Overtaking, $S_A = S_B$

$$\frac{0.75}{2}(t^2 + 3.5t + 3.0625) = \frac{1.1}{2} t^2$$

$$t = 8.29\text{ s}$$

b) where car B will overtake car A $\Rightarrow$ Distance travelled by car B.

$$S_B = \frac{1}{2} \times 1.1 \times t^2 = \frac{1}{2} \times 1.1 \times 8.29^2$$

$$= 37.8\text{ m}$$

c) $V_A = u_A + a_A t_A = u_A + a_A (t + 1.75)$

$$V_A = 0 + 0.75 \times (8.29 + 1.75)$$

$$= 7.53\text{ m/s}$$

$$V_B = u_B + a_B t_B = 0 + (1.1 \times 8.29)$$

$$= 9.119\text{ m/s}$$

---

### Kinetics

#### D'Alembert's principle

Kinetics is the study of the relation existing between the forces acting on a body, the mass of body, motion of body.

<!-- page 17 | D'Alembert's principle -->

## D'Alembert's principle

D Alembert's principle is the application of Newton's second law of motion. This principle can be stated as when a body in motion is in dynamic equilibrium, then the algebraic sum of all the forces acting on the body in the direction of motion including the inertia force taken in the opposite direction to motion is zero.

Kinetics problems in dynamics is converted to equivalent problem in statics using D'Alembert's principle. ie, mathematically, D'Alembert's principle is :-

![An irregular body acted upon by force F and inertia force ma, with equation F - ma = 0](/assets/notes/me/s1/engineering-mechanics/module-3/irregular-body-f-ma.svg)

In a kinetic problem

![A rectangular block on a surface subjected to weight W, normal reaction R_N, force F, inertia force ma, and frictional force mu R_N](/assets/notes/me/s1/engineering-mechanics/module-3/block-inertia-weight-f.svg)

Q. A force of $300\text{ N}$ act on a body of mass $150\text{ kg}$. Calculate acceleration of the body using D' Alembert's principle.

1. Given, $F = 300\text{ N}$, $m = 150\text{ kg}$

<!-- page 18 | Page 18 -->

Note:-

In this type of problems, force should be in $\text{N}$ and mass in kilogram.

D'Alembert's principle;

$$F - ma = 0$$

$$\Rightarrow \quad a = \frac{F}{m} = \frac{300}{150} = 2\text{ m/s}^2$$

In the above problem, if force was $50\text{ kg}$, ($F = (mg)\text{N}$) \quad $\frac{1\text{ N}}{9.81} = 1\text{ kg}$

$$F = 50 \times 9.81$$

$$= 490.5\text{ N}$$

Q. A force of $100\text{ N}$ act on a body having mass $4\text{ kg}$ for $10\text{ s}$. If the initial velocity of the body is $5\text{ m/s}$, determine :-

(i) Acceleration produced in the direction of force

(ii) Distance moved by the body in $10\text{ s}$.

Ans: (i) $F = 100\text{ N}$, $m = 4\text{ kg}$, $t = 10\text{ s}$, $u = 5\text{ m/s}$

$$F - ma = 0 \Rightarrow \text{D'Alembert's principle}$$

$$a = \frac{F}{m} = \frac{100}{4} = 25\text{ m/s}^2$$

(ii) Distance moved by the body,

$$S = ut + \frac{1}{2}at^2$$

$$= 5 \times 10 + \frac{1}{2} \times 25 \times 10^2$$

$$= 50 + 50 \times 25 = 1300\text{ m}$$

<!-- page 19 | Page 19 -->

Q. A block weighing $1000\text{ N}$ rest on a horizontal plane. Find the magnitude of force required to give the block an acceleration of $2.5\text{ m/s}^2$ to the right. The coefficient of kinetic friction between the block and the plane is $0.25$.

A.

![Free body diagram of a block on a horizontal plane showing applied force, weight, normal reaction, inertia force, and friction](/assets/notes/me/s1/engineering-mechanics/module-3/block-w-1000n.svg)

By D'Alembert's principle, for the block to be in dynamic equilibrium,
$$F - ma - \mu R_N = 0$$
$$F - \frac{1000}{9.81} \times 2.5 - 0.25 \times 1000 = 0$$
$$F = 504.84\text{ N}$$

Q. A body of mass $15\text{ kg}$ falls on ground from a height of $19.6\text{ m}$. The body penetrates into the ground. Find the distance through which the body penetrates into the ground if the resistance by the ground for the penetration is constant and is equal to $4900\text{ N}$.

![Diagram showing a body falling from point B to A and penetrating into the ground to point C](/assets/notes/me/s1/engineering-mechanics/module-3/body-falling-into-ground.svg)

$$\begin{array}{l l}
\underline{\text{B to A}} & \text{At B} \\[4pt]
u_B = 0 & u_A = ? \\[4pt]
a = g\text{ m/s}^2 & u_C = 0 \\[4pt]
u_A = ? & a = a\text{ m/s}^2
\end{array}$$

Note:-
Ground resistance to penetration means it is the reaction in this case

<!-- page 20 | Page 20 -->

Case 1 (B to A)

Consider the movement from B to A.

$$v^2 - u^2 = 2as$$

$$u_A^2 - u_B^2 = 2g \cdot 19.6 \quad (g = 9.81)$$

$$u_A^2 - u_B^2 = 384.552 \quad (u_B = 0)$$

$$\therefore u_A = 19.6 \text{ m/s}$$

Case-2 (A to C)

Since ground resistance is mentioned, it is understood that it is a kinetics problem. Now applying D'Alembert's principle,

![Free body diagram for motion from A to C showing forces on a curved surface](/assets/notes/me/s1/engineering-mechanics/module-3/curved-surface-a-to-c.svg)

the direction in which movement happens, take it as positive.

$$15 \times 9.81 - 4900 - 15a = 0$$

$$a = -316.87 \text{ m/s}^2$$

$\Rightarrow$ The body is decelerating.

![Diagram showing displacement S from A to C](/assets/notes/me/s1/engineering-mechanics/module-3/displacement-s-a-to-c.svg)

$$u_C^2 - u_A^2 = 2aS$$

$$0 - (19.6)^2 = 2 \times -316.87 \times S$$

$$S = 0.6061 \text{ m}$$

2. A bullet of mass $80\text{ g}$ and moving with a velocity of $300\text{ m/s}$ is fired into a log of wood and it penetrates to a depth of $10\text{ cm}$.

<!-- page 21 | Page 21 -->

If the bullet is moving with the same velocity where fired into a similar piece of wood $50\text{ cm}$ thick, with what velocity would it emerge

Find also the force of resistance.

Note:-

Here, the force of resistance means inertial force.

![Diagram showing a bullet of mass m and a block of wood of thickness s](/assets/notes/me/s1/engineering-mechanics/module-3/bullet-block-thickness-s.svg)

case-1

$v^2 - u^2 = 2as$

$0 - 300^2 = 2a \times 10 \times 10^{-2}\text{ m}$

$\Rightarrow a = -450000\text{ m/s}^2$

By D'Alembert's principle, inertial force $= ma$

$= |81 \times 10^{-3}\text{ kg} \times -450000|$

$= -36450\text{ N}$

ie, force of resistance : $36450\text{ N}$

case-2

Initial velocity $= 300\text{ m/s}$ $\qquad S = 50\text{ cm} \qquad \text{Ans: } 212.$

Final velocity: ?

Acceleration $= -450000$

<!-- page 22 | Page 22 -->

$$v^2 = u^2 + 2as$$

$$v = \sqrt{300^2 + 2 \times -450000 \times 5 \times 10^{-2}}$$

$$V = 212.13\text{ m/s}$$

Q) A force of $100\text{ N}$ acts on a body having a mass of $4\text{ kg}$ for $10\text{ seconds}$.

If the initial velocity of the body is $5\text{ m/s}$, determine:-

1) Acceleration

2) Distance moved by the body in $10\text{ s}$.

3) Velocity of the body when force acts :-

   a) In the direction of motion

   b) In the opposite direction of motion.

Ans) 1) $F = ma$

$$100 = 4 \times a$$

$$a = 25\text{ m/s}^2$$

2) $u = 5\text{ m/s}$, $t = 10$, $a = 25\text{ m/s}^2$

$$S = ut + \frac{1}{2}at^2$$

$$= 5 \times 10 + \frac{1}{2} \times 25 \times 100 = 1300\text{ m}$$

3) a) $V = u + at = 5 + (25 \times 10) = 255\text{ m/s}$

b) $V = u - at = 5 - (25 \times 10) = -245\text{ m/s}$

$$\Rightarrow 245\text{ m/s}$$

<!-- page 23 | Page 23 -->

Q) A block weighing $1\text{ kN}$ rests on a horizontal plane as shown in figure. Find the force required to give the block an acceleration of $3\text{ m/s}^2$ to the right. Given coefficient of dynamic friction, $\mu = 0.25$

![Diagram of a block on a horizontal plane with an external force F applied downwards at 30 degrees to the horizontal.](/assets/notes/me/s1/engineering-mechanics/module-3/block-f-downward-30.svg)

Ans)

![Free body diagram of the block showing all forces acting on it.](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-block-1kn-f-sin30.svg)

$$\begin{aligned}
1\text{ kN} &= \frac{1000\text{ N}}{9.81} \text{ kg} \\
&= 101.936 \text{ kg}
\end{aligned}$$

Here, $\sum F_y = 0$

$$R_N - F \sin 30 - 10^3 = 0$$

$$R_N - \frac{F}{2} - 1000 = 0$$

$$R_N = 1000 + \frac{F}{2} \quad \text{---} \text{ (1)}$$

$$\sum F_x = 0$$

$$F \cos 30 - \mu R_N - ma = 0$$

$$\Rightarrow F \cdot \frac{\sqrt{3}}{2} - 0.25 \left(1000 + \frac{F}{2}\right) - (101.936 \times 3) = 0$$

$$\frac{\sqrt{3}F}{2} - 250 - 0.125 F - 305.8 = 0$$

$$\frac{\sqrt{3}F}{2} - 0.125 F = 555.8$$

$$F = \text{[illegible]}$$

<!-- page 24 | Page 24 -->

<u>Analysis of lift</u>

Lift moving downwards and to find out the force exerted by the man on the floor of the lift.

<u>Lift moving downwards</u>

![Free body diagram of a man in a lift moving downwards](/assets/notes/me/s1/engineering-mechanics/module-3/man-in-lift-downward.svg)

$$(R_N + ma) - W = 0$$

(weight of lift neglected  
$W \rightarrow$ weight of man)

<u>Lift moving upwards</u>

![Free body diagram of a man in a lift moving upwards](/assets/notes/me/s1/engineering-mechanics/module-3/man-in-lift-upward.svg)

$$R_N - W - ma = 0$$

Q A man weighing $100\text{ N}$ is entered into a lift, which moves with an acceleration of $2\text{ m/s}^2$ Find the force exerted by the man on the floor of the lift when:-

i) Lift is moving downwards

ii) Lift is moving upwards.

<!-- page 25 | Page 25 -->

Ans) i)

![Free body diagram for case (i) showing a box with downward force 100 N, upward normal reaction R_N, and upward inertia force ma](/assets/notes/me/s1/engineering-mechanics/module-3/box-case-i-100n.svg)

$$-100 + R_N + ma = 0$$

$$R_N + \left(\frac{100}{9.81} \times 2\right) = 100$$

$$R_N = 79.61\text{ N}$$

ii)

![Free body diagram for case (ii) showing a box with downward forces and upward reaction](/assets/notes/me/s1/engineering-mechanics/module-3/box-case-ii-100n.svg)

$$-100 - ma + R_N = 0$$

$$R_N = 100 + \left(\frac{100}{9.81} \times 2\right)$$

$$= 120.38\text{ N}$$

Q. A lift has an acceleration of $1.5\text{ m/s}^2$ downwards. what force will a man weighing $1050\text{ N}$ exert on the floor of the lift ?

A)

![Free body diagram for the lift problem with a man weighing 1050 N](/assets/notes/me/s1/engineering-mechanics/module-3/lift-man-1050n.svg)

Lift is accelerating downwards means lift is moving downwards.

$$-1050 + R_N + \left(\frac{1050}{9.81} \times 1.5\right) = 0$$

As per dynamic equilibrium
$$\Sigma f_y = 0$$

$$R_N = 889.44\text{ N}$$

<!-- page 26 | Page 26 -->

Q. An elevator descends with an acceleration of $2\text{ m/s}^2$, what will be the scale reading ($R_N$) if a weighing machine is placed at the base of the elevator? Given a woman weighing $80\text{ kg}$ is in the elevator.

A.

![Free body diagram of a woman in an elevator](/assets/notes/me/s1/engineering-mechanics/module-3/woman-elevator-80kg.svg)

$$-784.8 + 160 + R_N = 0$$

$$R_N = 624.8\text{ N} \Rightarrow \text{scale reading}$$

A cage carries 10 men each weighing $500\text{ N}$ starts moving downwards from rest in a mine vertical shaft. The cage attains a speed of $12\text{ m/s}$ in $20\text{ m}$. Find the pressure exerted by each man on the floor of the cage.

A. $u = 0$; $v = 12\text{ m/s}$, $S = 20\text{ m}$

$$v^2 - u^2 = 2as$$

$$a = \frac{v^2 - u^2}{2S} = \frac{12^2 - 0}{2 \times 20} = 3.6\text{ m/s}^2$$

![Free body diagram of the cage with 10 men](/assets/notes/me/s1/engineering-mechanics/module-3/cage-10-men.svg)

$$-5000 + R_N + \left(\frac{5000}{9.81} \times 3.6\right) = 0$$

$$R_N = 3165.13\text{ N} \Rightarrow \text{Total Scale reading}$$

<!-- page 27 | Analysis of lift -->

$\therefore$ Pressure exerted by each man $= \frac{3165}{10} = \underline{\underline{316\cdot 5 \text{ N}}}$

## Analysis of lift

computation of tension in the cables supporting lift

![Diagram of an elevator lift showing forces acting on it: upward tension T, downward combined weight (W1 + W2), and downward inertia force Ma.](/assets/notes/me/s1/engineering-mechanics/module-3/elevator-tension-weights.svg)

elevator weight = $W_1$

weight of persons = $W_2$

acceleration = $a$

$\text{Tension} \rightarrow T$

Lift is ascending with acceleration $a$. Find the tension in the ropes supporting lift.

Assume the tension in the rope as $T$. Here, Do not consider reaction in dynamic equilibrium equation.

$$T - (W_1 + W_2) - Ma = 0$$

Q. An elevator weighing $5000\text{ N}$ is ascending with an acceleration of $3\text{ m/s}^2$. During this ascend, its operator whose weight $700\text{ N}$ is standing on the scales placed on the floor. Determine:-

1) The total tension in the cables of the elevator.

2) Pressure exerted by the operator on the floor or find the total scale reading.

<!-- page 28 | Page 28 -->

d

Let 'T' be the tension in the cables.

Ans) 1)

![Free body diagram showing tension, weight, and inertia force for the first case.](/assets/notes/me/s1/engineering-mechanics/module-3/elevator-case-1-tension.svg)

$$T - 5700 - \left(\frac{5700}{9.81} \times 3\right) = 0$$

$$T = 7443.12\text{ N} \quad (\text{Direction upwards})$$

2) scale reading / Pressure

![Free body diagram showing weight, normal reaction, and inertia force for the second case.](/assets/notes/me/s1/engineering-mechanics/module-3/elevator-case-2-normal.svg)

Let $R_N$ be the pressure exerted by operator.

$$R_N - 700 - \frac{700}{9.81} \times 3 = 0$$

$$R_N = 914.06\text{ N}$$

Q. An elevator weighs $2500\text{ N}$ and is moving vertically downwards with constant acceleration. Write the equation for the elevator cable tension.

Starting from rest, it travels a distance of $35\text{ m}$ during an interval of $10\text{ seconds}$. Find the cable tension during that time. Neglect all other resistance to motion except inertial force. Also, explain about limits of cable.

<!-- page 29 | Limits of cable -->

Let $T$ be the tension and $a$ be the acceleration

![Free body diagram of an elevator box showing tension, weight, and inertial force](/assets/notes/me/s1/engineering-mechanics/module-3/elevator-box-2500n.svg)

$$T + ma - 2500 = 0$$

$$\boxed{T = \left(2500 - \frac{2500}{9.81} \times a\right)}$$

$$u = 0, \quad S = 35\text{ m}, \quad t = 10\text{ s}$$

$$s = ut + \frac{1}{2}at^2$$

$$35 = \frac{1}{2}a \times 10^2$$

$$a = 0.7\text{ m/s}^2$$

$$\Rightarrow \quad T = 2500 - \frac{2500}{9.81} \times 0.7$$

$$T = 2321.61\text{ N}$$

### Limits of cable

Elevator cable have limits based on material's elastic limit and safety factors, with maximum stress not exceeding half of the elastic limit. Multiple cables are used to ensure safety of the lift.

The elastic limit of an elevator cable is $2 \times 10^9\text{ N/m}^2$.

<!-- page 30 | Page 30 -->

Problems on connected bodies

Two bodies of weight $50\text{ N}$ and $30\text{ N}$ are connected to the two ends of a light inextensible string. The string is passing over smooth pulley.

Determine:-

1) Acceleration of the system

2) Tension in the string.

![Pulley system with two weights hanging from a string](/assets/notes/me/s1/engineering-mechanics/module-3/pulley-50n-200n-hanging.svg)

Ans Let $T$ be the tension in the strings and $a$ be the acceleration of the system.

Since $50\text{ N}$ is greater than $30\text{ N}$, $50\text{ N}$ weight will move downwards, with an acceleration $a$. whereas, $30\text{ N}$ will move upwards with Same acceleration $a$.

Now analysing free body diagram of two blocks,

![Free body diagram of the 50 N block](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-50n-block.svg)

Applying dynamic equilibrium, $\Sigma F_y = 0$

$$T + ma - 50 = 0$$

$$T + \frac{50 a}{9.81} - 50 = 0$$

$$\Rightarrow \boxed{T = 50 - \frac{50 a}{9.81}} \quad - \text{①}$$

<!-- page 31 | Page 31 -->

Now analysing second body,

![Free body diagram of the second body of mass corresponding to 30 N with tension T acting upwards, weight 30 N downwards, and inertia force downwards.](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-30n-body.svg)

$$T - 30 - \frac{30a}{9.81} = 0$$

$$T = 30 + \frac{30a}{9.81} \quad \text{--- (2)}$$

$$\text{(1)} = \text{(2)} \Rightarrow 50 - \frac{50a}{9.81} = 30 + \frac{30a}{9.81}$$

$$50 - 30 = \frac{30a}{9.81} + \frac{50a}{9.81}$$

$$9.81 \times 20 = 80a \Rightarrow a = \frac{9.81}{4}$$

$$\Rightarrow a = 2.45 \text{ m/s}^2$$

2) $\text{(1)} \Rightarrow T = 50 - \frac{50 \times 2.45}{9.81} = 37.51 \text{ N}$

Substituting acceleration in (1)

Q) Find the acceleration and tension of the system

![Pulley system diagram with two masses hanging over a pulley.](/assets/notes/me/s1/engineering-mechanics/module-3/pulley-30kg-80kg.svg)

<!-- page 32 | Page 32 -->

A)

![Free body diagram of a mass of 30 kg](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-30kg.svg)

$$- 30 \times 9.81 - 30 \times a + T = 0$$
$$T = 294.3 + 30 \ a \quad -(1)$$

![Free body diagram of a mass of 80 kg](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-80kg.svg)

$$T + 80 \ a - 80 \times 9.81 = 0$$
$$T = 784.8 - 80 \ a \quad -(2)$$

$(1) = (2) \implies 294.3 + 30 \ a = 784.8 - 80 \ a$

$$110 \ a = 784.8 - 294.3$$

$$\implies a = 4.46 \text{ m/s}^2$$

substituting $a$ in $(1) \implies$ $T = 294.3 + 30 \times (4.46)$

$$T = 428.07 \text{ N}$$

Q. Two blocks are joined by an inextensible string as shown in figure. If the system is released from rest, determine the velocity of the block it has moved $2\text{ m}$. Coefficient of friction between the block and the plane is $0.25$. The pulley is weightless and frictionless. Also find the tension in the cable.

![Diagram of two blocks connected by a string over a pulley](/assets/notes/me/s1/engineering-mechanics/module-3/block-table-300kg-pulley.svg)

<!-- page 33 | Page 33 -->

The body $200\text{ kg}$ is moving rightwards and body $300\text{ kg}$ is moving downwards. Let $T$ be the tension in the strings and $a$ be the acceleration. Now considering free body diagram of $300\text{ kg}$,

![Free body diagram of 300 kg body](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-300kg.svg)

$$
T + 300\,a - 300 \times 9.81 = 0
$$
$$T = 300 \times 9.81 - 300\,a$$
$$\boxed{T = 2943 - 300\,a} \quad \text{--- ①}$$

Now free body diagram of $200\text{ kg}$:

![Free body diagram of 200 kg body](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-200kg-table.svg)

$$\Sigma F_y = 0 \Rightarrow R_N - (200 \times 9.81) = 0$$
$$R_N = \underline{1962\text{ N}}$$

$$\Sigma F_x = 0 \Rightarrow T + (-200 \times a) + (-0.25 \times R_N) = 0$$
$$T - 200\,a - 0.25 \times 1962 = 0$$
$$\boxed{T = 200\,a + 490.5} \quad \text{--- ②}$$

$$\therefore$$
$$T + 300\,a = 2943$$
$$T - 200\,a = 490.5$$

$$T = \underline{1471.5\text{ N}} \qquad a = \underline{4.905\text{ m/s}^2}$$

<!-- page 34 | Page 34 -->

$u = 0$, $v = ?$, $S = 2\text{ m}$, $a = 4.905\text{ m/s}^2$

we know initial velocity, $u = 0$.

$$v^2 - u^2 = 2as$$

$$v^2 = u^2 + 2as = 0 + 2 \times 4.905 \times 2$$

$$\therefore v = \sqrt{2 \times 4.905 \times 2} = 4.429\text{ m/s}$$

Q. Two blocks are joined by an inextensible string. The block resting on horizontal surface is placed $10\text{ m}$ away from the edge. If the system is released from rest, determine the velocity of block after it has moved $4\text{ m}$. Also find the time at which the horizontal block reaches the edge of the surface. Assume the coefficient of friction between the block and the plane is $0.2$. The pulley is weightless and frictionless.

![Two blocks connected by a string over a pulley](/assets/notes/me/s1/engineering-mechanics/module-3/blocks-2000kg-3000kg.svg)

Free body diagram of $3000\text{ kg}$; (Let $T$ be the tension in the string and $a$ be the acceleration of system);

![Free body diagram of the 3000 kg block](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-3000kg.svg)

$$\begin{aligned}
T + 3000 a &= 3000 \times 9.81 \\[6pt]
T &= 3000 \times 9.81 - 3000 a \\[6pt]
\mathbf{T} &\mathbf{= 29430 - 3000 a}
\end{aligned} \qquad \text{--- (1)}$$

$$\boxed{T = 29430 - 3000 a} \qquad \text{--- (1)}$$

<!-- page 35 | Page 35 -->

Free body diagram of $2000\text{ kg}$:

![Free body diagram of 2000 kg mass showing forces T, normal reaction RN, weight 2000x9.81, frictional force mu_R N = 0.2 RN, and inertia force ma = 2000 a](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-2000kg-rn.svg)

$$\Sigma F_y = 0 \Rightarrow R_N - 2000 \times 9.81 = 0$$

$$R_N = 19620\text{ N}$$

$$\Sigma F_x = 0 \Rightarrow T - 2000\,a - 0.2\,R_N = 0$$

$$T = 2000\,a + 0.2 \times 19620$$

$$T = 2000\,a + 3924 \quad \text{--- } ②$$

①, \quad $T + 3000\,a = 29430$

②, \quad $T - 2000\,a = 3924$

$$T = 14126.4\text{ N}, \quad a = 5.101\text{ m/s}^2$$

$u = 0$, $a = 5.101\text{ m/s}^2$, $S = 4\text{ m}$, $V = ?$

$$v^2 - u^2 = 2as$$

$$v^2 = 2as = 2 \times 5.101 \times 4$$

$$V = \sqrt{8 \times 5.101} = 6.38\text{ m/s}$$

$$S = ut + \frac{1}{2}at^2$$

$S = 10\text{ m}$, \quad $u = 0;\, a = 5.101 \quad t \rightarrow \text{time for covering } 10\text{ m to edge}$

<!-- page 36 | Page 36 -->

$$10 = \frac{1}{2} \times 5.101 \times t^2$$
$$t^2 = 20 \div 5.101$$
$$t = [illegible] \quad 1.98 \text{ s}$$

Q. A mass of $60 \text{ kg}$ lies on a smooth horizontal table. It is connected to a fine string passing over a smooth guide pulley on the edge of the table to a mass $50 \text{ kg}$ hanging freely. Find $T$ and $a$.

![Diagram showing a 60 kg mass on a horizontal table connected by a string over a pulley to a 50 kg hanging mass](/assets/notes/me/s1/engineering-mechanics/module-3/block-60kg-table-50kg.svg)

Here, it is a smooth table, $\therefore \mu = 0$

$$\begin{aligned}
T + 50\text{ }a &= 50 \times 9.81 \\
T - 490.5 - 50\text{ }a & \quad — ①
\end{aligned}$$

![Free body diagrams for the 50 kg and 60 kg masses](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-50kg-60kg.svg)

$$\begin{aligned}
R_N - 60 \times 9.81 &= 0 \\
R_N &= 588.6 \text{ N}
\end{aligned}$$

$$\begin{aligned}
T - 60\text{ }a &= 0 \\
T &= 60\text{ }a \quad — ②
\end{aligned}$$

$$\begin{aligned}
T - 60\text{ }a &= 0 \\
T + 50\text{ }a &= 490.5
\end{aligned}$$

$$\Rightarrow T = 267.54 \text{ N}, \quad a = 4.459 \text{ m/s}^2$$

<!-- page 37 | Page 37 -->

8) Find the acceleration and tension of the system.

![Pulley system diagram with masses A and B](/assets/notes/me/s1/engineering-mechanics/module-3/pulley-masses-a-b.svg)

Here, for the body B, tension will be equal to $2T$. Also, the downward displacement of $300\text{ kg}$ mass will only be half of the upward displacement of $100\text{ kg}$ mass. Or else, the same will be followed in acceleration also.

ie, If $a_B$ is the acceleration of $300\text{ kg}$ and $a_A$ be the acceleration of $100\text{ kg}$, then 
$$\boxed{a_B = \frac{1}{2} a_A}$$

consider the free body diagram of $300\text{ kg}$,

![Free body diagram of the 300 kg mass](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-300kg-b.svg)

$$2T + 300\,a_B = 300 \times 9.8$$
$$2T = 2943 - 300\,a_B$$
$$\boxed{T = 1471.5 - 150\,a_B}$$
$$\boxed{T = 1471.5 - 75\,a_A} \quad \text{--- ①}$$

![Free body diagram of the 100 kg mass](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-100kg-a.svg)

$$T = 100\,a_A + 100 \times 9.81$$
$$\boxed{T = 981 + 100\,a_A} \quad \text{--- ②}$$

$$T = 1261.28\text{ N} \qquad a_A = 2.8\text{ m/s}^2 \implies \underline{a_B = 1.4\text{ m/s}^2}$$

<!-- page 38 | Page 38 -->

Q.

![Pulley system with masses 50 N and 200 N](/assets/notes/me/s1/engineering-mechanics/module-3/pulley-50n-200n-ceiling.svg)

$$\left[a_B = \frac{1}{2} a_A\right]$$

Let $T$ be the tension and $a$ be the acceleration,
$50\text{ N}$ will go upwards, $200\text{ N}$ downwards.

F.B.D of $50\text{ N}$,

![Free body diagram of 50 N block](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-50n-block-b.svg)

$$\begin{aligned}
2T &= 50 + \frac{50}{9.81} a_B \\[6pt]
T &= 25 + \frac{25}{9.81} \times \frac{1}{2} a_A \\[6pt]
\mathbf{T} &\mathbf{= 25 + 1.2742 \; a_A} \quad \text{--- } (1)
\end{aligned}$$

FBD of $200\text{ N}$

![Free body diagram of 200 N block](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-200n-block-a.svg)

$$\begin{aligned}
T + 200 \, a_A &= 200 \\[6pt]
\mathbf{T} &\mathbf{= 200 - \frac{200}{9.81} a_A} \quad \text{--- } (2)
\end{aligned}$$

$$\begin{aligned}
T &= 35.294\text{ N} & a_A &= 8.07\text{ m/s}^2 \\[6pt]
&& a_B &= 4.039\text{ m/s}^2
\end{aligned}$$

Q) A weight $4500\text{ N}$ is supported by a string and pulley arrangement.
If the free end of the string is pulled vertically downward with an acceleration of $1.8\text{ m/s}^2$, find the tension in the string.

<!-- page 39 | Combined motion of translation and rotation -->

![Pulley system diagram showing a weight of 4500 N connected to pulleys and cords](/assets/notes/me/s1/engineering-mechanics/module-3/pulley-4500n-block.svg)

![Free body diagram of the 4500 N block](/assets/notes/me/s1/engineering-mechanics/module-3/fbd-4500n-block.svg)

$$\text{F.B.D of } 4500\text{ N}$$

$$\begin{aligned}
2T + \frac{4500}{9.81} \times 0.9 &= 4500 \\
T &= 2043.57\text{ N}
\end{aligned}$$

## Combined motion of translation and rotation

Generally, a body may have three types of motion.

1) translation

2) Rotation

3) combined motion of translation and rotation / General plane motion

## Translation

If the path traced by the particles during motion is a straight line, then the translation is called rectilinear translation (motion).

If the particles traces a curved path, then the motion is called curvilinear motion / curvilinear translation.

![Diagram illustrating translation showing an object moving from position 1 to position 2](/assets/notes/me/s1/engineering-mechanics/module-3/translation-position-1-2.svg)

<!-- page 40 | Page 40 -->

<!-- page 41 | Page 41 -->

translation, it is called general plane motion or combined motion of translation and rotation. In the analysis of such a motion, it is convenient to split the motion into translation and rotation.

Consider a body initially at position $A_1 B_1$ and assume it moved to new position $A_2, B_2$. If general plane motion is to be followed, this can be done in two ways. Body can first translate to $A' B_2$ and then rotate to the position $A_2 B_2$ keeping $B_2$ as the centre of rotation.

In the another method, first the body can rotate to $B_1 A'$ keeping $B_1$ as the centre of rotation and then translate to the final position $A_2, B_2$. This motion is known as combined motion of translation and rotation.

![First method of general plane motion decomposition showing a body moving from initial position A1B1 to final position A2B2 via intermediate translation to A'B2](/assets/notes/me/s1/engineering-mechanics/module-3/plane-motion-method-1.svg)

![Second method of general plane motion decomposition showing rotation followed by translation](/assets/notes/me/s1/engineering-mechanics/module-3/plane-motion-method-2.svg)

Examples of general plane motion are $^{(1)}$ motion of ~~the~~ wheels of truck, car, etc.

<!-- page 42 | Instantaneous centre -->

(2) The motion of a rod ~~sliding~~ leaned against a wall.

(1) Motion of a roller without slipping motion, the wheel of truck, car etc.

![Diagram showing roller rolling without slipping as a combination of translation and rotation](/assets/notes/me/s1/engineering-mechanics/module-3/rolling-roller.svg)

(2) A rod sliding against a wall at one end and floor at the other end.

![Diagram showing a rod sliding against a wall and floor as a combination of translation and rotation](/assets/notes/me/s1/engineering-mechanics/module-3/rod-sliding-wall-floor.svg)

## Instantaneous centre

The combined motion of translation and rotation of a body can be the motion about a point at a given instant. This point which is instantaneous at rest and has <u>zero velocity</u> is called instantaneous centre or virtual centre of the body.

## Projectile motion

Whenever a particle is projected upward at an angle (not vertical angle) the particle traces some path in air and falls on the ground. The path traced by the particle is called trajectory and the motion

<!-- page 43 | Page 43 -->

followed is known as projectile motion. The trajectory will always be parabolic and the body in projectile motion is referred to as projectile.

Examples for projectiles:-
- Javeline throw
- Ball thrown from a tower

<!-- page 44 | Page 44 -->

