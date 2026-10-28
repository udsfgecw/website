<!-- page 1 | Page 1 -->

<!-- page 2 | Mechanics -->

Engineering Mechanics is the physical science which describes and predicts the conditions of rest or motion of bodies under the action of forces.

It is a physical science because ~~since~~ it deals with the study of physical phenomena.

The subject is subdivided into statics and dynamics.

Statics deals with the action of forces on bodies which are at rest and remain at rest.

Dynamics deals with the motion of bodies under the action of forces.

![Subdivision of Mechanics into Statics and Dynamics](/assets/notes/me/s1/engineering-mechanics/module-1/subdivision-of-mechanics.svg)

### Mechanics

**(1) Statics**
Deals with the action of forces on bodies at rest.

**(2) Dynamics**
Deals with the action of forces on bodies at motion.

$\rightarrow$ **(1) Kinematics:** It is the study of motion without considering the force which either cause the motion or are generated as a result of the motion

$\rightarrow$ **(2) Kinetics:** It is the study of the relationship between motion and the corresponding forces which cause or accompany the motion.

<!-- page 3 | Concept of rigid body -->

The fundamental concept used in mechanics are space, time, mass and force.

The concept of space is associated with motion of the position of a point.

The concept for ordering the flow of events is the time.

The concept of mass is used to characterise and compare bodies on the basis of the response to mechanical disturbance.

A force is characterized by point of application, magnitude and direction.

## Concept of rigid body

A rigid body is a body which does not deform when subjected to external forces.

However, bodies are never absolutely rigid and hence deform under the forces to which they are subjected.

when the deformation is negligibly small compared with the overall dimensions of the body, body can be treated as rigid.

## Fundamental principles

the study of elementary mechanics is based on 6 fundamental principles.

<!-- page 4 | Page 4 -->

1) Newton's first law

Everybody continues to be in its state of rest or of uniform motion in a straight line, unless it is acted upon by some external force.

2) Newton's second law

The acceleration of a particle is proportional to the resultant force acting on it and is in the direction of this force. ($F = ma$)

3) Newton's third law

To every action, there is an equal and opposite reaction.

4) Newton's law of gravitation

Two particles are attracted towards each other along the line connecting them with a force whose magnitude is proportional to the product of their masses and inversely proportional to the square of the distance b/w them.

ie, $F \propto \frac{m_1 m_2}{r^2}$,

$F \rightarrow$ force of attraction

$m_1, m_2 \Rightarrow$ Masses of particles

$r \rightarrow$ distance b/w particles

$F = \frac{G m_1 m_2}{r^2}$,

$G \rightarrow$ Universal constant of gravitation

<!-- page 5 | Page 5 -->

When a particle of mass $m$ lies on the surface of earth, the force exerted by the earth is the weight of the particle.

weight of the particle, $W = F = \left(\frac{GMm}{R^2}\right) = gm = mg$

5) Principle of transmissibility.

The condition of equilibrium or of motion of a rigid body will remain unchanged if the point of application of a force acting on the rigid body is transmitted to any other point on the line of action of the force.

![Diagram showing the principle of transmissibility for a rigid block not fixed at base](/assets/notes/me/s1/engineering-mechanics/module-1/transmissibility-not-fixed.svg)

Rigid block (Not fixed at base)

![Diagram showing the principle of transmissibility for a rigid block at rest](/assets/notes/me/s1/engineering-mechanics/module-1/transmissibility-at-rest.svg)

Rigid block (at rest)

<!-- page 6 | Page 6 -->

[6] The parallelogram law of forces

If two forces acting simultaneously at a point are represented in magnitude and direction by the adjacent sides of a parallelogram, then the diagonal of the parallelogram passing through their point of intersection represents the resultant of the two forces in both magnitude and direction.

![Geometric derivation of the resultant of two forces using the parallelogram law](/assets/notes/me/s1/engineering-mechanics/module-1/parallelogram-law-derivation.svg)

$$\cos \alpha = \frac{AD}{Q} \Rightarrow AD = Q \cos \alpha$$

$\Delta OCD$:

$$OC^2 = OD^2 + CD^2 \qquad | \quad OD = OA + AD$$

$$= (P + Q \cos \alpha)^2 + CD^2 \qquad \sin \alpha = \frac{CD}{Q} \Rightarrow CD = Q \sin \alpha$$

$$OC^2 = (P + Q \cos \alpha)^2 + (Q \sin \alpha)^2$$

$$R^2 = P^2 + 2PQ \cos \alpha + Q^2 \cos^2 \alpha + Q^2 \sin^2 \alpha$$

$$= P^2 + 2PQ \cos \alpha + Q^2(1)$$

$$\boxed{R = \sqrt{P^2 + 2PQ \cos \alpha + Q^2}} \quad \Rightarrow \text{Magnitude of resultant}$$

<u>Direction</u>

Let $\theta$ be the inclination of the resultant with respect to $P$,

$$\tan \theta = \frac{CD}{OD} = \frac{Q \sin \alpha}{P + Q \cos \alpha}$$

<!-- page 7 | Page 7 -->

$$\tan\theta = \frac{Q \text{ sin } \theta}{P + Q \text{ cos } \theta} \implies \text{Direction of resultant w.r.t } P \text{ force}$$

Let $\phi$ be the inclination of the resultant with respect to $Q$

$$\therefore \tan\phi = \frac{P \sin\alpha}{Q + P \cos\alpha}$$

Q. Two forces $10\text{ KN}$ and $20\text{ KN}$ are acting at a point. Find the resultant and its direction if the angle between them is:

1) $0^\circ$

2) $60^\circ$

3) $90^\circ$

4) $180^\circ$

*)

$P = 10\text{ KN} = 10 \times 10^3\text{ N}$

$Q = 20\text{ KN} = 20 \times 10^3\text{ N}$

$$R = \sqrt{P^2 + 2PQ \cos\alpha + Q^2}$$

1) $\alpha = 0^\circ$

$$R = \sqrt{(10^4)^2 + 2 \times 10^4 \times 20 \times 10^3 + (20 \times 10^3)^2}$$

$$= 30 \times 10^3\text{ N} = 30\text{ KN}$$

Assume $\theta$ be the direction $10\text{ KN}$ is making with resultant;

$$\therefore \tan\theta = \frac{20 \sin 0}{10 + 20 \cos 0} = 0$$

$$\Rightarrow \theta = 0^\circ$$

<!-- page 8 | Page 8 -->

2) $\alpha = 60^{\circ}$, $\cos \alpha = \frac{1}{2}$

$$R = \sqrt{10^{2} + 2 \times 10 \times 20 \times \frac{1}{2} + 20^{2}} = 10\sqrt{7} \text{ KN} = 26.45 \text{ KN}$$

Assume $\theta$ be the direction of $10 \text{ KN}$ w.r.t the resultant;

$$\tan \theta = \frac{20 \sin 60}{10 + 20 \cos 60} = 0.866$$

$$\theta = 40.89^{\circ}$$

3) $\alpha = 90^{\circ}$, $\cos \alpha = 0$

$$R = \sqrt{10^{2} + 20^{2}} = 22.36 \text{ KN}$$

Assume $\theta$ be the direction of $10 \text{ KN}$ w.r.t resultant;

$$\tan \theta = \frac{20 \sin 90}{10 + 20 \cos 90} = 2$$

$$\theta = 63.43^{\circ}$$

4) $\alpha = 180^{\circ}$, $\cos 180 = -1$

$$R = \sqrt{10^{2} + 2 \times 10 \times 20 \times -1 + 20^{2}} = 10 \text{ KN}$$

Let $\phi$ be the inclination of the resultant w.r.t $20 \text{ KN}$;

$$\therefore \tan \phi = \frac{10 \sin 180}{20 + 10 \cos 180} = 0$$

$$\therefore \phi = 0^{\circ}$$

<!-- page 9 | Page 9 -->

Q) The greatest and least resultant of two forces $F_1$ and $F_2$ are $17\text{ N}$ and $3\text{ N}$ respectively. Determine the angle between them when the resultant is $\sqrt{149}\text{ N}$.

Ans) $F_1 + F_2 = 17\text{ N}$ —— ①

$F_1 - F_2 = 3\text{ N}$ —— ②

Let $\alpha$ be the angle between $F_1$ and $F_2$.

![Vector addition diagram showing forces F1, F2 and resultant R with angle alpha](/assets/notes/me/s1/engineering-mechanics/module-1/vector-addition-f1-f2-r.svg)

$R = \sqrt{F_1^2 + F_2^2 + 2F_1F_2 \cos\alpha}$

Solving ① and ②;

① + ② $\Rightarrow$ $2F_1 = 20$

$F_1 = 10\text{ N}$

$\therefore F_2 = 7\text{ N}$

$\therefore \text{Resultant } R = \sqrt{F_1^2 + F_2^2 + 2F_1F_2 \cos\alpha}$

$$R = \sqrt{10^2 + 7^2 + 2 \times 10 \times 7 \cos\alpha} = \sqrt{149}$$

$$10^2 + 7^2 + 140 \cos\alpha = 149$$

$$140 \cos\alpha = 149 - 149$$

$$\cos\alpha = 0$$

$$\therefore \alpha = 90^\circ$$

<!-- page 10 | Page 10 -->

Q. Two forces $P$ and $Q$ of magnitude $25\text{ N}$ and $10\text{ N}$ are acting at a point. The forces $P$ and $Q$ make angle $15^{\circ}$ and $45^{\circ}$, measured counter clockwise with the horizontal. Determine:

i) Resultant in magnitude

ii) Direction of resultant with $25\text{ N}$

iii) Direction of resultant with $10\text{ N}$

![Parallelogram law of forces diagram showing forces P and Q, resultant R, and angle alpha = 30 degrees](/assets/notes/me/s1/engineering-mechanics/module-1/parallelogram-p-q-alpha-30.svg)

i) $R = \sqrt{25^2 + 10^2 + 2 \times 25 \times 10 \times \cos 30^{\circ}} = 34.03\text{ N}$

ii) Direction of /angle/slope that resultant $R$ makes with $P$ force ($25\text{ N}$)

We are assuming $\theta$ be the direction $R$ makes with $P$.

$$\tan\theta = \frac{10 \sin 30^{\circ}}{25 + 10 \cos 30^{\circ}} = 0.1485$$

$$\therefore \theta = 8.45^{\circ}$$

Inclination resultant makes with horizontal is: $15 + \theta = 15 + 8.45$

$$= 23.45^{\circ}$$

<!-- page 11 | Page 11 -->

ii) Direction resultant $R$ makes with $Q$ ($10\text{ N}$)

Assuming $\phi$ be the angle $R$ makes with $Q$ force

$$\tan\phi = \frac{25 \sin 30}{10 + 25 \cos 30} = 0.3949$$

$$\phi = 21.55^{\circ}$$

Inclination of $Q$ w.r.t horizontal $= 15 + \theta + \phi$

$$= 15 + \alpha = 15 + 30$$

$$= 45^{\circ}$$

Q. A boat is moved uniformly by pulling with forces $240\text{ N}$ and $200\text{ N}$ acting at an angle $60^{\circ}$ as shown in figure. Determine the magnitude of the resultant pull on the boat and the angle made by the resultant with forces $240\text{ N}$ and $200\text{ N}$.

![Parallelogram law of forces for a boat pulled by 200 N and 240 N forces at 60 degree angle](/assets/notes/me/s1/engineering-mechanics/module-1/boat-200n-240n-60.svg)

Resultant force,

$$R = \sqrt{240^2 + 200^2 + 2 \times 240 \times 200 \times \cos 60^{\circ}}$$

$$R = 381.58\text{ N}$$

<!-- page 12 | Page 12 -->

Let $\theta$ be the direction of $240\text{ N}$ making with resultant;
$$\tan \theta = \frac{200 \times \sin 60}{240 + 200 \cos 60} = 0.5094$$
$$\theta = 27^\circ$$

Let $\phi$ be the direction $200\text{ N}$ makes with resultant.
$$\tan \phi = \frac{240 \times \sin 60}{200 + 240 \cos 60} = 0.6495$$
$$\phi = 33^\circ$$

2) A boat is moved uniformly by pulling with forces $P = 240\text{ N}$ and $Q = 200\text{ N}$. what must be the inclination of the resultant force with $P$ and $Q$ to have the resultant $R = 400\text{ N}$?

![Diagram showing a boat pulled by two forces P (240 N) and Q (200 N) with their resultant R (400 N)](/assets/notes/me/s1/engineering-mechanics/module-1/boat-p-q-r.svg)

A) $R = \sqrt{P^2 + Q^2 + 2PQ \cos \alpha}$

$$400 = \sqrt{240^2 + 200^2 + 2 \times 240 \times 200 \cos \alpha}$$

$$160000 = 97600 + 96000 \cos \alpha$$

$$\cos \alpha = 0.65, \quad \alpha = 49.45^\circ$$

<!-- page 13 | Page 13 -->

Let $\theta$ be the angle b/w $R$ and $240\text{ N}$,

$$\tan\theta = \frac{200 \sin(49.46)}{240 + 200 \cos(49.46)} = 0.4107$$

$$\theta = 22.38^\circ$$

Let $\phi$ be the angle b/w $R$ and $200\text{ N}$,

$$\tan\phi = \frac{240 \sin(49.46)}{200 + 240 \cos(49.46)} = 0.5123$$

$$\phi = 27.13^\circ$$

Q. The resultant of two forces when they act at $60^\circ$ is $14\text{ N}$. when they act at right angles, their resultant is $12\text{ N}$. Determine magnitude of the two forces.

A) Let $P$ and $Q$ be the forces.

Case-I

$\alpha = 60^\circ$, $R = \sqrt{P^2 + Q^2 + 2PQ \cos 60} = 14$

$$P^2 + Q^2 + 2PQ \times \frac{1}{2} = 14^2 \quad -(1)$$

Case-II

$\alpha = 90^\circ$, $R = \sqrt{P^2 + Q^2 + 2PQ \cos 90} = 12$

$$P^2 + Q^2 = 12^2 \quad -(2)$$

<!-- page 14 | Page 14 -->

Substituting ② in ①:

① $\Rightarrow 12^2 + PQ = 14^2$

$$\cancel{PQ = 196 - 144}$$

$$144 + PQ = 196 \; ; \; PQ = 52$$

Now we are following some mathematical rules. As we know

$$(P+Q)^2 = P^2 + Q^2 + 2PQ \quad -(3)$$

we also know $(P-Q)^2 = P^2 + Q^2 - 2PQ \quad -(4)$

$$> (P+Q)^2 = 144 + (2 \times 52)$$

$$(P+Q)^2 = 248$$

$$P+Q = 15.75 \text{ N} \quad -(5)$$

$$(P-Q)^2 = 144 - (2 \times 52)$$

$$= 40$$

$$P-Q = 6.32 \text{ N} \quad -(6)$$

Solve (5) and (6);

$$\text{⑤} + \text{⑥} \Rightarrow 2P = 22.07$$

$$P = \underline{\underline{11.04 \text{ N}}}$$

$$Q = \underline{\underline{4.71 \text{ N}}}$$

<!-- page 15 | Scalars and Vectors -->

# Scalars and Vectors

A scalar quantity is defined as the physical quantity with only magnitude and no direction.

some examples for scalars include mass, speed, distance, time, volume, density, temperature.

A vector is a quantity that posess magnitude and direction.

eg:- weight, velocity, displacement, force.

vector quantities are added according to triangle law of vector addition.

A vector such as force can be represented by a line AB as shown in figure.

![Vector representation as a line AB with angle theta](/assets/notes/me/s1/engineering-mechanics/module-1/vector-ab-angle-theta.svg)

The length of the line AB denotes the magnitude of the force to some scale.

The angle $\theta$ denotes the direction of the force.

the arrow head shows the sense of the force.

The vector $F$ is generally written as $\vec{F}$, where $F$ is the magnitude of $\vec{F}$.

<!-- page 16 | Force Systems -->

# Force Systems

## classification of force systems

when a number of forces act simultaneously on a body, they constitute a force system depending upon the relative positions of the lines of action of forces. The force system may be classified as follows.

### coplanar forces

If all the forces in a force system lie on a single plane that force system is known as coplanar force system.

coplanar forces are subdivided into:

1) coplanar colinear force

![Coplanar collinear forces diagram showing forces F1, F2, F3, F4 inside a rectangle](/assets/notes/me/s1/engineering-mechanics/module-1/collinear-forces-rectangle.svg)

Forces acting on a single plane and acting along the same line of action.

$F_1 \; \& \; F_2 \Rightarrow$ coplanar collinear

$F_3 \; \& \; F_4 \Rightarrow$ coplanar collinear

2) coplanar concurrent forces

Forces lying on a single plane with their line of action intersecting at a common point.

<!-- page 17 | Page 17 -->

![Diagram showing coplanar concurrent forces](/assets/notes/me/s1/engineering-mechanics/module-1/concurrent-forces.svg)

coplanar concurrent

3) coplanar Non concurrent forces

![Diagram showing coplanar non-concurrent forces](/assets/notes/me/s1/engineering-mechanics/module-1/non-concurrent-forces.svg)

coplanar non concurrent

Forces lying on a single plane with their line of action not passing through a common point

4) coplanar parallel forces

![Diagram showing coplanar parallel forces](/assets/notes/me/s1/engineering-mechanics/module-1/parallel-forces.svg)

Forces lying on a single plane and parallel to each other.

Non coplanar forces

If the line of action of the forces do not lie in one plane,

that force system is known as non coplanar force systems.

1) Non coplanar concurrent forces :-

<!-- page 18 | Page 18 -->

Forces do not lie in a single plane but they meet at a point.

2) Non coplanar non concurrent forces

![Diagram showing non-coplanar non-concurrent forces in 3D coordinate planes](/assets/notes/me/s1/engineering-mechanics/module-1/non-coplanar-non-concurrent-3d.svg)

Forces do not lie in a single plane and do not meet at a common point.

3) Non coplanar parallel forces

![Diagram showing non-coplanar parallel forces in 3D coordinate planes](/assets/notes/me/s1/engineering-mechanics/module-1/non-coplanar-parallel-3d.svg)

~~Non~~ Forces do not lie in a single plane but are parallel to each other which could be like parallel or unlike parallel.

<!-- page 19 | Page 19 -->

Rectangular components ~~in 2D~~ of force Systems in 2D

<u>composition and resolution of forces</u>

The replacement of several forces by a single force is called composition.

The replacement of a single force by two or more forces is called resolution.

Two forces by which a single force can be replaced are called components

![Force F along vertical y-axis showing Fx=0, Fy=F at theta = 90 degrees](/assets/notes/me/s1/engineering-mechanics/module-1/force-along-y-axis.svg)

$F_x = H = 0$

$F_y = V = F$

$\theta = 90^\circ$ (angle with x-axis)

![Force F along horizontal x-axis showing Fx=F, Fy=0 at theta = 0 degrees](/assets/notes/me/s1/engineering-mechanics/module-1/force-along-x-axis.svg)

$F_y = V = 0$

$F_x = H = F$

$\theta = 0^\circ$

![Force F inclined at angle theta showing rectangular components Fx = F cos theta and Fy = F sin theta](/assets/notes/me/s1/engineering-mechanics/module-1/force-inclined-components.svg)

$$\begin{aligned}
F_x &= F \cos \theta \\
F_y &= F \sin \theta
\end{aligned}$$

<!-- page 20 | Page 20 -->

$$\tan \theta = \frac{F_y}{F_x}$$

$$\boxed{\theta = \tan^{-1} \frac{(F_y)}{(F_x)}}$$

Multiple forces; $\tan \theta = \frac{\Sigma F_y}{\Sigma F_x}$

(coplanar concurrent)

Q. Determine the horizontal and vertical components for the following cases.

1)
$$F_x = 100 \cos 30 = + 86.60\text{ N}$$

$$F_y = 100 \sin 30 = + 50\text{ N}$$
$\downarrow$
Normal component

2)
$$F_x = 50 \cos 40 = - 38.30\text{ N}$$

$$F_y = 50 \sin 40 = + 32.13\text{ N}$$

$$F_x = - 50 \cos 45 = - 35.35$$

$$F_y = - 50 \sin 45 = - 35.35$$

<!-- page 21 | Page 21 -->

![Force vector of 70 N at 50 degrees](/assets/notes/me/s1/engineering-mechanics/module-1/force-70n-at-50.svg)

$F_x = 70 \cos 50^{\circ} = 44.99\text{ N}$

$F_y = -70 \sin 50^{\circ} = -53.62\text{ N}$

Q.

![Concurrent force system with four forces](/assets/notes/me/s1/engineering-mechanics/module-1/concurrent-four-forces.svg)

Find the component of each force and also find the resultant of the forces in the force system. Draw the resultant with magnitude and direction.

![Component resolution for 150 N force](/assets/notes/me/s1/engineering-mechanics/module-1/resolve-150n.svg)

$F_x = 150 \cos 30^{\circ}$

$F_y = 150 \sin 30^{\circ}$

![Component resolution for 200 N force](/assets/notes/me/s1/engineering-mechanics/module-1/resolve-200n.svg)

$F_x = -200 \cos 30^{\circ}$

$F_y = +200 \sin 30^{\circ}$

<!-- page 22 | Page 22 -->

<!-- page 23 | Page 23 -->

$\theta = 26.12^{\circ}$

Q. Find the component of each force shown in figure also find the resultant of the forces.

$$R: 69.24\text{ N}$$
$$\theta = 0.32^{\circ} = 0^{\circ}\text{ } 19^{\prime}\text{ } 19.2^{\prime\prime}$$

![Free body diagram of forces acting at a point](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-forces-at-point.svg)

![Resolution of 100 N force](/assets/notes/me/s1/engineering-mechanics/module-1/resolve-100n.svg)

$$F_x = 100\text{ } \cos 35$$
$$F_y = 100\text{ } \sin 35$$

![Resolution of 50 N force](/assets/notes/me/s1/engineering-mechanics/module-1/resolve-50n.svg)

$$F_x = -50\text{ } \cos 35$$
$$F_y = -50\text{ } \sin 35$$

![Resolution of 40 N force](/assets/notes/me/s1/engineering-mechanics/module-1/resolve-40n.svg)

$$F_x = 40\text{ } \cos 45$$
$$F_y = -40\text{ } \sin 45$$

<!-- page 24 | Page 24 -->

$$\sum F_x = 100 \cos 35 + -50 \cos 35 + 40 \cos 45$$

$$\phantom{\sum F_x} = 69.241$$

$$\sum F_y = 100 \sin 35 - 50 \sin 35 - 40 \sin 45$$

$$\phantom{\sum F_y} = 0.39455$$

$$\begin{aligned}
R &= \sqrt{P^2 + Q^2 + 2PQ \cos \alpha} & P &= \sum F_x = 69.241 \\
&& Q &= \sum F_y = 0.39455 \\
&& \alpha &= 90^\circ
\end{aligned}$$

$$\begin{aligned}
\therefore R &= \sqrt{69.24^2 + 0.394^2} \\
&= 69.24\text{ N}
\end{aligned}$$

$$\cancel{\tan \theta = \frac{\sum F_x}{\sum F_y} = \frac{69.241}{0.394} = 175.493}$$

$$\tan \theta = \frac{\sum F_y}{\sum F_x} = \frac{0.394}{69.24} = 5.69 \times 10^{-3}$$

$$\theta = 0.32^\circ = 0^\circ 19'$$

![Resultant force vector diagram showing components 69.241 and 0.394 with angle theta and resultant R](/assets/notes/me/s1/engineering-mechanics/module-1/resultant-components-69-0-39.svg)

<!-- page 25 | Page 25 -->

Q. Find the resultant of the system.

![Force system diagram with three forces: 300 N at 30 degrees to the positive y-axis, 300 N at 30 degrees below the positive x-axis, and 200 N at 45 degrees below the negative x-axis.](/assets/notes/me/s1/engineering-mechanics/module-1/three-forces-300n.svg)

Ans)

![Redrawn force system diagram showing angles with respect to the x-axis.](/assets/notes/me/s1/engineering-mechanics/module-1/redrawn-force-system.svg)

$\sum F_x = 300 \cos 60 - 300 \cos 30 - 200 \cos 45$

$= -251.228\text{ N}$

$\sum F_y = 300 \sin 60 + 300 \sin 30 - 200 \sin 45$

$= 268.386\text{ N}$

![Component force diagram showing summation of forces along x and y axes leading to resultant R.](/assets/notes/me/s1/engineering-mechanics/module-1/summation-x-y-resultant.svg)

$R = \sqrt{\sum F_x^2 + \sum F_y^2}$

$= \sqrt{(-251.228)^2 + (268.386)^2} = 367.622\text{ N}$

combined effect of $\sum F_x$ and $\sum F_y$ will induce a resultant force whose magnitude is  
(Given by $R = \sqrt{\sum F_x^2 + \sum F_y^2}$)

<!-- page 26 | Page 26 -->

$$\therefore \tan\theta = \left| \frac{\sum F_y}{\sum F_x} \right| = \frac{268.386}{251.228} = 1.0682$$

$$\theta = 46.88^{\circ} = 46^{\circ} 53'$$

2. Forces of $15\text{ N}$, $20\text{ N}$, $25\text{ N}$, $35\text{ N}$ and $45\text{ N}$ act at an angular point of a regular hexagon towards the other angular point as shown in figure calculate the \underline{magnitude and direction} of the resultant force

![Diagram showing forces acting from an angular point of a regular hexagon towards other angular points](/assets/notes/me/s1/engineering-mechanics/module-1/hexagon-forces-to-vertices.svg)

Magnitude of resultant is given by:

$$R = \sqrt{\sum F_x^2 + \sum F_y^2}$$

$$\sum F_x = 15 \cos 0 + 20 \cos 30 + 25 \cos 60 + (35 \cos 90) - 45 \cos 60$$
$$= 22.32\text{ N}$$

$$\sum F_y = 15 \sin 0 + 20 \sin 30 + 25 \sin 60 + 35 \sin 90 + 45 \sin 60$$
$$= 105.62\text{ N}$$

![Resultant force triangle showing summation of forces along x and y axes](/assets/notes/me/s1/engineering-mechanics/module-1/resultant-force-triangle.svg)

$$R = \sqrt{(22.32)^2 + (105.62)^2}$$
$$= 107.95\text{ N}$$

$$\tan \theta = \left| \frac{\sum F_y}{\sum F_x} \right| = 4.732, \quad \theta = 78.06^{\circ}$$
$$= 78^{\circ} 4'$$

<!-- page 27 | Page 27 -->

Q. Concurrent forces $1, 3, 5, 7, 9,$ and $11\text{ N}$ are applied at the centre regular hexagon acting towards its vertices as in figure. Determine the magnitude and direction of the resultant.

![A regular hexagon with concurrent forces acting towards its centre from each vertex: 1 N at top, 3 N at top-right, 5 N at right, 7 N at bottom-right, 9 N at bottom, 11 N at left, with internal diagonal lines meeting at the centre.](/assets/notes/me/s1/engineering-mechanics/module-1/hexagon-1n-3n-5n.svg)

$$\Sigma F_x = 5 + 3 \cos 60 - 1 \cos 60 - 11 - 9 \cos 60 + 7 \cos 60$$

$$= -6$$

$$\Sigma F_y = \underset{(5 \sin 0)}{0} + 3 \sin 60 + 1 \sin 60 + (11 \sin 0) - 9 \sin 60 - 7 \sin 60$$

$$= -10.39\text{ N}$$

![Resultant force vector diagram showing Fx = -6 pointing left and Fy = -10.39 pointing down, with resultant R in the third quadrant and angle theta.](/assets/notes/me/s1/engineering-mechanics/module-1/resultant-fx-minus6-fy-minus10.svg)

$$R = \sqrt{F_x^2 + F_y^2}$$

$$= 11.99\text{ N}$$

$$\tan \theta = \left| \frac{\Sigma F_y}{\Sigma F_x} \right| = 1.7316$$

$$\theta = 59.99^\circ$$

<!-- page 28 | Moment of a force -->

## Moment of a force

The effectiveness of a force as regards to its tendency to produce rotation of a body about an axis or a point is called moment of force.

It is measured by the product of the magnitude of the force and arm of the force.

It is also called moment arm which is the perpendicular distance of line of the action of force from the moment centre.

Moment of the force will be zero if the force acts at the moment centre itself. Also, it will be zero when the line of action of the forces pass through the moment centre.

![Diagram showing force F acting at point B at a distance AB from moment centre A, with moment equation MA = F x AB](/assets/notes/me/s1/engineering-mechanics/module-1/moment-force-at-b.svg)

$M_A = F \times AB$

![Diagram showing force F acting directly at moment centre A, with moment equation MA = F x 0](/assets/notes/me/s1/engineering-mechanics/module-1/moment-force-through-a.svg)

$M_A = F \times 0$

![Diagram showing line of action of force F passing through moment centre A, with moment equation MA = F x 0](/assets/notes/me/s1/engineering-mechanics/module-1/moment-line-through-a.svg)

$M_A = F \times 0$

<!-- page 29 | Page 29 -->

Sign convention of moments

![Diagram illustrating sign convention of moments with a horizontal beam AD, points A, B, O, C, D and forces F1, F2, F3, F4 acting at various points.](/assets/notes/me/s1/engineering-mechanics/module-1/moment-sign-convention.svg)

Moment of force $F_1$ about $O$ is given by $= F_1 \times AO$ (Clockwise, $+ve$)

Moment of force $F_2$ about $O$ is given by: $F_2 \times BO$ (anticlockwise, $-ve$)

Moment of force $F_3$ about $O$ is given by: $F_3 \times OC$ (clockwise, $+ve$)

Moment of force $F_4$ about $O$ is given by: $F_4 \times OD$ (anticlockwise, $-ve$)

Q. Four forces of magnitude $10\text{ N}$, $20\text{ N}$, $30\text{ N}$ and $40\text{ N}$ are acting respectively along four sides of a square $ABCD$ as in figure.

Determine the resultant moment at $A, B, C, D$ given that each side of square is $2\text{ m}$.

![Diagram of square ABCD with forces acting along its sides: 30 N along CD (or DC), 20 N along BC, 10 N along AB, and an arrow at A.](/assets/notes/me/s1/engineering-mechanics/module-1/square-abcd-forces.svg)

<!-- page 30 | Principle of moments -->

A) Moment about A, $M_A = (40 \times 0) + (10 \times 0) + (-20 \times 2) + (-30 \times 2)$

$$= -40 - 60 = -100\text{ Nm}$$

Moment about B, $M_B = (10 \times 0) + (20 \times 0) + (-30 \times 2) + (-40 \times 2)$

$$= -60 + -80 = -140\text{ Nm}$$

Moment about C, $M_C = (20 \times 0) + (-30 \times 0) + (-40 \times 3) + (-10 \times 4)$

![Rectangular frame ABCD with forces applied at corners](/assets/notes/me/s1/engineering-mechanics/module-1/rectangular-frame-forces.svg)

$$= -120 + -40 = -160\text{ Nm}$$

Moment about D, $M_D = (30 \times 0) + (40 \times 0) + (-10 \times 4) + (-20 \times 3)$

$$= -40 - 60 = -100\text{ Nm}$$

### Principle of moments

It states that moment of the resultant of a number of forces about any point is equal to the algebraic sum of the moment of ~~sythem~~ the system about the same point.

![Diagram illustrating the principle of moments with forces F1, F2, F3 and moment arms r1, r2, r3 from point O](/assets/notes/me/s1/engineering-mechanics/module-1/principle-of-moments.svg)

<!-- page 31 | Page 31 -->

Q) A force of 100 N is acting at a point A as in figure. Determine moment of this force about the point O.

![Diagram showing a force of 100 N acting at point A at an angle of 60 degrees, with a distance of 3m from origin O to point A.](/assets/notes/me/s1/engineering-mechanics/module-1/force-100n-at-60.svg)

Ans)

![Resolved components of the 100 N force into horizontal and vertical components at point A.](/assets/notes/me/s1/engineering-mechanics/module-1/resolved-100n-components.svg)

$$\begin{aligned}
M_O &= (100\cos 60 \times 0) + (100\sin 60 \times 3) \\
&= -100 \times \sin 60 \times 3 = \cancel{91.443} \\
&= -259.80\text{ Nm}
\end{aligned}$$

Q. what will be the y-intercept of 5000 N force as shown in figure if its moment about point A is 8000 Nm ?

![Line representing a 5000 N force with a slope triangle of 3 vertical and 4 horizontal, intersecting the y-axis at point B and point A below it.](/assets/notes/me/s1/engineering-mechanics/module-1/line-5000n-slope-3-4.svg)

$$\tan \theta = \frac{3}{4} \Rightarrow \theta = 36.869^\circ$$

![Resolved components of 5000 N force with angle theta.](/assets/notes/me/s1/engineering-mechanics/module-1/resolved-5000n-theta.svg)

<!-- page 32 | Varignon's theorem -->

$$M_A = (5000 \sin(36.87) \times 0) + (5000 \cos 36.87 \times AB) = 8000\text{ Nm}$$

$$5000 \cos(36.87) \times AB = 8000$$

$$AB = \text{y intercept} = \frac{8000}{5000 \times \cos(36.87)}$$

$$= 2\text{ m}$$

## Varignon's theorem

Varignon's theorem states that the moment of a force about any point is equal to the algebraic sum of the moments of its components about the point.

or

The moment of the resultant of a number of forces about any point is equal to the algebraic sum of the moments of all the forces of the system about the same point.

![Diagram illustrating Varignon's theorem with a force F resolved into horizontal and vertical components F cos theta and F sin theta relative to point A and origin O.](/assets/notes/me/s1/engineering-mechanics/module-1/varignon-theorem.svg)

$$\Sigma M_{\text{force}} = M_{\text{resultant}}$$

<!-- page 33 | Page 33 -->

![Forces in a Cartesian coordinate system](/assets/notes/me/s1/engineering-mechanics/module-1/forces-cartesian.svg)

$$\sum M_{\text{forces}} = M_{\text{resultant}}$$

Q A system of parallel forces are acting on a rigid ball as in fig,

Reduce this system to a :-

1) Single force

2) Single force and couple at $A$.

3) A single force and couple at $B$.

![System of parallel forces acting on a beam with points A, C, D, B](/assets/notes/me/s1/engineering-mechanics/module-1/parallel-forces-beam.svg)

$$\begin{aligned}
\sum F_x &= 0 \\
\sum F_y &= 50 + 130 + -250 + -25 \\
&= -95\text{ N}
\end{aligned}$$

1) So, due to this force system, a resultant force will be generated whose magnitude is given by $R = \sqrt{\sum F_x^2 + \sum F_y^2}$

$$R = \sqrt{0 + (-95)^2} = 95\text{ N}$$

(The resultant will be acting downwards).

<!-- page 34 | Page 34 -->

2) 

![Free body diagram for moment calculation about point A](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-moment-about-a.svg)

$$\Sigma M_A = (50 \times 0) + (250 \times 2) + (-130 \times 4) + (25 \times 7) = 95 \times x$$

$$x = 1.63\text{ m}$$

$$\begin{aligned}
\text{couple/at moment at A} &= 95 \times x \\
&= 95 \times 1.63 \\
&= 155\text{ Nm (clockwise moment)}
\end{aligned}$$

3) 

![Beam showing distances for moment about point B](/assets/notes/me/s1/engineering-mechanics/module-1/beam-distances-about-b.svg)

$$\begin{aligned}
M_B &= 95 \times 5.37 \\
&= 510\text{ Nm (Anticlockwise moment)}
\end{aligned}$$

<u>Vector</u>

Q. Find the <u>unit vector</u> of the force vector, $\vec{F} = 2\hat{i} + 4\hat{j} - 5\hat{k}$.

$$|\vec{F}| = \sqrt{2^2 + 4^2 + (-5)^2} = 6.71\text{ N}$$

![3D Cartesian coordinate axes with unit vectors i, j, k](/assets/notes/me/s1/engineering-mechanics/module-1/3d-axes-unit-vectors.svg)

$$F_x = 2,\quad F_y = 4,\quad F_z = -5$$

$$\text{Magnitude of } \vec{F} = \sqrt{F_x^2 + F_y^2 + F_z^2} = 6.71$$

<!-- page 35 | Position Vector -->

Unit vector of $\vec{F} = \frac{\vec{F}}{|\vec{F}|} = \frac{2\hat{i} + 4\hat{j} - 5\hat{k}}{6.71}$

$= 0.298\hat{i} + 0.596\hat{j} - 0.745\hat{k}$

Q. What is the magnitude of the unit vector in the above question?

A. Magnitude of unit vector $= \sqrt{0.298^2 + 0.596^2 + 0.745^2} = 1$

Q. Find the unit vector of $\vec{F} = 4\hat{i} - 3\hat{k}$

A) $F_x = 4,\ F_y = 0,\ F_z = -3$

$|\vec{F}| = \sqrt{4^2 + 3^2} = 5$

Unit vector of $\vec{F} = \frac{4\hat{i} - 3\hat{k}}{5} =$

### Position Vector

Position vector of a point $A$ in space with respect to the origin of coordinate axis $ox$, $oy$ and $oz$ is $OA$. It is denoted by $\vec{r}$.

![Position vector of a point A in a 3D coordinate system](/assets/notes/me/s1/engineering-mechanics/module-1/position-vector-a.svg)

$$\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$$

$\vec{r}$ is known as the position vector of the point.

Magnitude of $\vec{r} = \sqrt{x^2 + y^2 + z^2}$.

<!-- page 36 | Vector Addition -->

![3D Cartesian coordinate system with points A and B and position vector r_AB](/assets/notes/me/s1/engineering-mechanics/module-1/position-vector-ab.svg)

$$r_{AB} = (x_B - x_A)\,\hat{i} + (y_B - y_A)\,\hat{j} + (z_B - z_A)\,\hat{k}$$

$$\text{magnitude; } |r_{AB}| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$

## Vector Addition

Q. Add two vectors $\vec{A} = 2\hat{i} + 3\hat{j} + 4\hat{k}$ and $\vec{B} = -4\hat{i} + 2\hat{j} + 2\hat{k}$.

Let C be the sum of vector $\vec{A}$ and $\vec{B}$

$$\vec{C} = -2\hat{i} + 5\hat{j} + 6\hat{k} = -2\vec{i} + 5\vec{j} + 6\vec{k}$$

Q. Find the resultant of 3 forces, $\vec{F}_1 = 2\hat{i} + 3\hat{j} - 3\hat{k}$, $\vec{F}_2 = 3\hat{i} + 4\hat{j} - 2\hat{k}$,
$$\vec{F}_3 = -3\hat{i} - 3\hat{j} + 7\hat{k}$$

A. Let $\vec{R}$ be the resultant of three forces,

$$\vec{R} = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 = 2\hat{i} + 4\hat{j} + 2\hat{k}$$

$$|\vec{R}| = \sqrt{2^2 + 4^2 + 2^2} = 4.898\text{ N}$$

![3D coordinate system showing a resultant vector R and angles theta_x, theta_y, theta_z](/assets/notes/me/s1/engineering-mechanics/module-1/resultant-3d-angles.svg)

$$\cos \theta_x = \frac{F_x}{R} = \frac{2}{4.9} = 0.40816$$

$$\theta_x = 65.91^\circ$$

<!-- page 37 | Inclination -->

$\cos \theta_y = \frac{F_y}{R} = \frac{4}{4.9} = 0.81632$

$$\theta_y = 35.28^\circ$$

$\cos \theta_z = \frac{F_z}{R} = \frac{2}{4.9} = 0.40816$

$$\theta_z = 65.91^\circ$$

Q. Find the position vector whose ~~positions~~ coordinates of initial and terminal points are $(3, 1, -2)$ and $(4, -7, 10)$ respectively. Also obtain the inclination of this vector with $x, y$ and $z$ axis.

A.

![Geometric sketch of position vector AB between points A(3,1,-2) and B(4,-7,10)](/assets/notes/me/s1/engineering-mechanics/module-1/position-vector-a3-b-4.svg)

Position vector, $\vec{r}_{AB} = (4-3)\hat{i} + (-7-1)\hat{j} + (10 - -2)\hat{k}$

$$= \hat{i} - 8\hat{j} + 12\hat{k}$$

Magnitude of the position vector $AB = \sqrt{1^2 + (-8)^2 + (12)^2}$

$$= 14.46\text{ units}$$

### Inclination

Let $\theta_x$ be the inclination of position vector with $x$ axis.

$$\cos \theta_x = \frac{1}{14.46} = 0.0691$$

$$\theta_x \Rightarrow 86.03^\circ$$

<!-- page 38 | cross product -->

$$\theta_y = \frac{-8}{14.46} = -0.55325$$

$$\theta_y = \cancel{56.41^\circ} \quad 123.59^\circ$$

$$\theta_z = \frac{12}{14.46} = 0.8298$$

$$\theta_z = 33.92^\circ$$

### cross product

Q. Find the cross product of the forces $\vec{F}_1 = 2\hat{i} - 4\hat{j} + 5\hat{k}$, $\vec{F}_2 = -\hat{i} + 3\hat{j} + 6\hat{k}$

A. 
$$\begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & -4 & 5 \\ -1 & 3 & 6 \end{vmatrix}$$

$$F_1 \times F_2 = \hat{i}(-24 - 15) - \hat{j}(12 + 5) + \hat{k}(6 - 4)$$

$$= -39\hat{i} - 17\hat{j} + 2\hat{k}$$

### Moment of force

Moment of force in vector representation is given by the equation

$$M = \vec{r} \times \vec{F}$$

Q. A force $\vec{F} = 2\hat{i} + 3\hat{j} - 4\hat{k}$ is applied at the point $B \cdot (1, -1, 2)$. Find the moment of force about a point $A(2, -1, 3)$.

A. We know, $M_A = \vec{r}_{AB} \times \vec{F}$

$$\vec{r}_{AB} = \underset{(B)}{\text{At the point}} - \underset{(A)}{\text{About the point}} = -\hat{i} - 0\hat{j} - \hat{k}$$

$$= -\hat{i} - \hat{k}$$

<!-- page 39 | Page 39 -->

$$\vec{F} =$$
Also given $2\hat{i} + 3\hat{j} - 4\hat{k}$

$$\text{Moment} = \vec{r} \times \vec{F}$$

$$\begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -1 & 0 & -1 \\ 2 & 3 & -4 \end{vmatrix} = \hat{i}(0 + 3) - \hat{j}(4 + 2) + \hat{k}(-3 - 0)$$

$$= 3\hat{i} - 6\hat{j} - 3\hat{k}$$

Q. A force of magnitude $44\text{ N}$ acts through the point $A (4, -1, 7)$ in the direction of vector $9\hat{i} + 6\hat{j} - 2\hat{k}$. Find the moment of force about the point $B (1, -3, 2)$.

1) $$M_B = \vec{r}_{AB} \times \vec{F}$$

$$\vec{r}_{AB} = \vec{r}_A - \vec{r}_B = 3\hat{i} + 2\hat{j} + 5\hat{k}$$

Also given, $F = 44\text{ N}$ (Scalar)

$$\vec{F} = F \times \text{unit vector as directed}$$

$$\text{Unit vector} = \frac{9\hat{i} + 6\hat{j} - 2\hat{k}}{\sqrt{9^2 + 6^2 + (-2)^2}} = \frac{9\hat{i} + 6\hat{j} - 2\hat{k}}{11}$$

$$\therefore \vec{F} = 44 \times \frac{(9\hat{i} + 6\hat{j} - 2\hat{k})}{11} = 4(9\hat{i} + 6\hat{j} - 2\hat{k})$$

$$= 36\hat{i} + 24\hat{j} - 8\hat{k}$$

$$\therefore \text{Moment} = \vec{r} \times \vec{F} =$$

<!-- page 40 | Couple -->

$$M_B = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 3 & 2 & 5 \\ 36 & 24 & -8 \end{vmatrix} = \hat{i}(-16 - 120) - \hat{j}(-24 - 180) + \hat{k}(72 - 72)$$

$$= -136 \hat{i} + 204 \hat{j}$$

## Couple

Two parallel forces, equal in magnitude and opposite in direction constitute a couple.

Since two forces are equal and opposite the sum of forces is zero.

$$+\uparrow \quad \downarrow -F \qquad \Sigma F = F + -F = 0 \qquad\qquad \begin{matrix} \longrightarrow \\ \longleftarrow \end{matrix} \qquad \begin{aligned} \Sigma F_H &= F + -F \\ &= 0 \end{aligned}$$
$$\Sigma F_v = 0$$

Q) Two forces $\vec{F}_1 = 50\hat{i} + 80\hat{j} + 100\hat{k}$ and $\vec{F}_2 = -50\hat{i} - 80\hat{j} - 100\hat{k}$ act at two points $A (0.7, 1.5, 1)$ and $B (1, 0.9, -1)$ respectively. Calculate moment of the forces and distance between the forces. also express the magnitude of moment.

![Diagram showing points A and B with forces F1 and F2](/assets/notes/me/s1/engineering-mechanics/module-1/points-a-b-forces-f1-f2.svg)

$$M = \vec{r} \times \vec{F}$$

where $\vec{r} = \text{position vector of } AB$

$$= (x_A - x_B)\hat{i} + (y_A - y_B)\hat{j} + (z_A - z_B)\hat{k}$$

<!-- page 41 | Force system in space -->

$$ = (0.7-1)\,\hat{i} + (1.5-0.9)\,\hat{j} + (1-(-1))\,\hat{k} $$

$$ = -0.3\,\hat{i} + 0.6\,\hat{j} + 2\,\hat{k} $$

$$ \vec{F} = 50\,\hat{i} + 80\,\hat{j} + 100\,\hat{k} \quad (\text{Taking } +\text{ve } \vec{F}) $$

Now, $\text{Moment},\ M = \vec{r} \times \vec{F}$

$$ = (-0.3\,\hat{i} + 0.6\,\hat{j} + 2\,\hat{k}) \times (50\,\hat{i} + 80\,\hat{j} + 100\,\hat{k}) $$

$$ = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -0.3 & 0.6 & 2 \\ 50 & 80 & 100 \end{vmatrix} = -100\,\hat{i} + 130\,\hat{j} - 54\,\hat{k} $$

Magnitude of moment, $|M| = \sqrt{(-100)^2 + (130)^2 + (-54)^2}$

$$ = 172.67 \text{ Nm} $$

We know, $M = r \times F$

$$\begin{aligned}
r &= \frac{M}{F} = \frac{172.67}{137.48} & \vec{F} &= 50\,\hat{i} + 80\,\hat{j} + 100\,\hat{k} \\[6pt]
r &= 1.256 \text{ units} & |\vec{F}| &= \sqrt{50^2 + 80^2 + 100^2} = 137.48
\end{aligned}$$

### Force system in space

Components of force in space, $F_x = F \cos \theta_x$

<!-- page 42 | Page 42 -->

$$F_y = F \cos\theta_y$$

$$F_z = F \cos\theta_z$$

$$\therefore R = \sqrt{F_x^2 + F_y^2 + F_z^2}$$

$$\cos\theta_x = \frac{F_x}{R}, \quad \cos\theta_y = \frac{F_y}{R}, \quad \cos\theta_z = \frac{F_z}{R}$$

a. 3 Forces $500\text{ N}$, $700\text{ N}$ and $600\text{ N}$ are acting along 3 diagonals of adjacent faces of a cube of side $2\text{m}$ as shown in figure.

Determine the resultant of the forces.

![Cube with forces acting along face diagonals](/assets/notes/me/s1/engineering-mechanics/module-1/cube-face-diagonal-forces.svg)

Position vector of $\text{OA} = (2-0)\hat{i} + (0-0)\hat{j} + (2-0)\hat{k}$

$$= 2\hat{i} + 0\hat{j} + 2\hat{k}$$

$\therefore$ Force vector along $\text{OA } (500\text{ N})$

$$= 500 \times \text{unit vector of P.v of OA}$$

$$= 500 \times \frac{2\hat{i} + 0\hat{j} + 2\hat{k}}{\sqrt{2^2 + 0^2 + 2^2}} = 500 \times (0.707\hat{i} + 0.707\hat{k})$$

<!-- page 43 | Page 43 -->

$$=355\hat{i} + 0\hat{j} + 355\hat{k}$$

Position vector of $OB = (2-0)\hat{i} + (2-0)\hat{j} + (0-0)\hat{k}$

$$= 2\hat{i} + 2\hat{j} + 0\hat{k}$$

$$\therefore \text{Force vector along } OB : 700 \times \text{unit vector along P.V of } OB$$
$$(700\text{ N})$$

$$= 700 \times \frac{2\hat{i} + 2\hat{j} + 0\hat{k}}{\sqrt{2^2 + 2^2 + 0^2}}$$

$$= 700 \times (0.707\hat{i} + 0.707\hat{j})$$

$$= 495\hat{i} + 495\hat{j} + 0\hat{k}$$

Position vector of $OC = (0-0)\hat{i} + (2-0)\hat{j} + (2-0)\hat{k}$

$$= 0\hat{i} + 2\hat{j} + 2\hat{k}$$

$$\text{Force vector along } OC = 800 \times \text{unit vector of P.V of } OC$$
$$(800\text{ N})$$

$$= 800 \times \frac{0\hat{i} + 2\hat{j} + 2\hat{k}}{\sqrt{0^2 + 2^2 + 2^2}}$$

$$= 800 \left(0\hat{i} + 0.707\hat{j} + 0.707\hat{k}\right)$$

$$= 0\hat{i} + 566\hat{j} + 566\hat{k}$$

<!-- page 44 | Free Body Diagram (FBD) -->

## Free Body Diagram (FBD)

The process of creating a free body diagram involves the following steps:-

1) Identifying the object
2) Isolating the object from its surroundings.
3) Identifying all forces acting on the object, including contact forces, tension forces, normal forces and any other external forces.
4) Representing each force as a vector with its magnitude and direction.

The sketch in which the body is completely isolated from its supports and in which all forces acting on it are shown is called free body diagram.

Q: Draw the free body diagram of two spheres kept inside a cylindrical vessel. Draw the FBD of these two spheres.

![Two spheres inside a cylindrical vessel](/assets/notes/me/s1/engineering-mechanics/module-1/two-spheres-in-cylinder.svg)

A)

![Free body diagram of the two spheres](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-two-spheres.svg)

<!-- page 45 | Page 45 -->

Q. Draw the free body diagram

![Three cylinders A, B, and C in a rectangular container with numbered contact points 1 to 6](/assets/notes/me/s1/engineering-mechanics/module-1/three-cylinders-container.svg)

![Free body diagrams for cylinders A, B, and C showing weights W_A, W_B, W_C and reactions R_1 through R_6](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-three-cylinders.svg)

Q. A solid cylinder $30\text{ mm}$ diameter and weighing $30\text{ N}$ is placed in a triangular channel as shown in figure. Neglecting the friction between the contact surfaces, calculate the normal reaction on the sides of the channel.

![A cylinder in a triangular channel with inclined walls at angles 45 degrees and 60 degrees](/assets/notes/me/s1/engineering-mechanics/module-1/cylinder-triangular-channel.svg)

A)

![Free body diagram of the cylinder in the triangular channel](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-channel-cylinder.svg)

<!-- page 46 | Lami's theorem -->

As per Lami's theorem, if three forces are concurrent,

$$\frac{30}{\sin(45+60)} = \frac{R_A}{\sin(180-60)} = \frac{R_B}{\sin(180-45)}$$

$$\frac{30}{\sin(105)} = \frac{R_A}{\sin(120)} = \frac{R_B}{\sin(135^\circ)}$$

$$R_A = \frac{30 \times \sin(120)}{\sin(105)} = 28.62\text{ N}$$

$$R_B = \frac{30 \times \sin(135)}{\sin(105)} = 21.96\text{ N}$$

## Lami's theorem

If a body is in equilibrium, under the action of three concurrent forces, say $P, Q, R$ and angles b/w them as in figure, then Lami's theorem states that

![Diagram showing three concurrent forces P, Q, and R meeting at a central point, with angles alpha, beta, and gamma between them.](/assets/notes/me/s1/engineering-mechanics/module-1/three-concurrent-forces-pqr.svg)

$$\frac{P}{\sin \alpha} = \frac{Q}{\sin \beta} = \frac{R}{\sin \gamma}$$

<!-- page 47 | Page 47 -->

Q. A steel ball rest in a groove, the sides of which are smooth. One side of the groove is vertical while other side is at $40^{\circ}$ to the horizontal. If the ball has a weight of $10\text{ N}$, find the reaction on each side of the groove.

![Diagram showing the steel ball in the groove and the free body diagram with forces for Lami's theorem](/assets/notes/me/s1/engineering-mechanics/module-1/steel-ball-groove-lami.svg)

Lami's theorem;

$$\frac{10}{\sin(90+40)} = \frac{R_A}{\sin(90)} = \frac{R_B}{\sin(180-40)}$$

$$R_A = \frac{10 \times \sin 90}{\sin(130)} = 13.05\text{ N}$$

$$R_B = \frac{10 \times \sin 140}{\sin 130} = 8.39\text{ N}$$

A smooth sphere of weight $w$ is supported in contact with a smooth vertical wall by a string fastened to a point in its surface, the other end being attached to a point in the wall. If the length of the string is equal to the radius of the sphere, find the inclination of the string to the vertical, also determine the tension in the string and reaction of the wall.

<!-- page 48 | Page 48 -->

![Diagram of a sphere hanging against a vertical wall by a string](/assets/notes/me/s1/engineering-mechanics/module-1/sphere-hanging-wall.svg)

Assuming weight as $W$, tension imparted to string $T$, normal reaction $R$.

![Free body diagram of the sphere](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-sphere-wall.svg)

Applying Lami's theorem,

$$\frac{T}{\sin 90} = \frac{R}{\sin \theta} = \frac{W}{\sin (90-\theta)}$$

![Geometric diagram showing angles for the sphere and wall](/assets/notes/me/s1/engineering-mechanics/module-1/sphere-wall-angles.svg)

$$\cos \angle DCA = \frac{DC}{AC} = \frac{R}{2R} = \frac{1}{2}$$

$$\therefore \angle DCA = 60^{\circ}$$

$$\therefore \theta = 30^{\circ}$$

$$\rightarrow \frac{T}{\sin 90} = \frac{R}{\sin 30} = \frac{W}{\sin 60}$$

$$\frac{T}{1} = \frac{W}{\sin 60}$$

$$T = 1.154 \ W$$

$$\frac{R}{\sin 30} = \frac{W}{\sin 60} \ ; \ R = \frac{\sin 30}{\sin 60} W$$

$$R = 0.577 \ W$$

<!-- page 49 | Page 49 -->

Q. A wooden decorative ball of $10\text{ N}$ weight hangs on Smooth wall by a String which is making $20^{\circ}$ with the vertical. Find the tension in the String and reaction by the wall.

![Diagram showing a wooden ball hanging from a vertical wall by a string at 20 degrees](/assets/notes/me/s1/engineering-mechanics/module-1/ball-20-degrees.svg)

A)

![Free body diagram of the ball with forces T, R, and W](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-ball-t-r-w.svg)

By Lami's theorem,
$$\frac{T}{\sin 90} = \frac{R}{\sin 20} = \frac{10}{\sin 70}$$

$$T = \frac{10}{\sin 70} = 10.64\text{ N}$$

$$R = \frac{\sin 20}{\sin 70} \times 10 = 3.639\text{ N}$$

![Free body diagram showing angles between forces](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-angles-between-forces.svg)

$$\frac{T}{\sin 90} = \frac{R}{\sin(90+70)} = \frac{W}{\sin 70}$$

Q) Electric light of weight $5\text{ N}$ hangs by two strings which makes angles $45^{\circ}$ and $60^{\circ}$ with horizontal. Calculate the forces by Lami's theorem. Sketch is given below.

<!-- page 50 | Equilibrium conditions -->

![Diagram showing an electric light suspended by two strings attached to a ceiling with angles 45 degrees and 60 degrees](/assets/notes/me/s1/engineering-mechanics/module-1/light-two-strings.svg)

In this, tension in the strings are making the electric light in equilibrium.

![Free body diagram of the electric light showing tensions T1, T2 and weight 5N with angle 75 degrees](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-electric-light.svg)

Lami's theorem,

$$\frac{5}{\sin(75)} = \frac{T_1}{\sin(90+60)} = \frac{T_2}{\sin(90+45)}$$

$$T_1 = \frac{5}{\sin(75)} \times \sin(150)$$

$$T_1 = 2.588 \text{ N}$$

$$T_2 = \frac{5}{\sin(75)} \times \sin(135)$$

$$= 3.66 \text{ N}$$

### Equilibrium conditions

A body is said to be in equilibrium when all the forces exerted on the body are in balance.

![Diagram of a body in equilibrium showing horizontal and vertical forces acting on it](/assets/notes/me/s1/engineering-mechanics/module-1/body-equilibrium-forces.svg)

Here, sum of forces acting in the vertical direction

ie, $\sum F_v = 0$

<!-- page 51 | Page 51 -->

Also, the sum of forces in horizontal direction;

ie, $\Sigma F_H = 0$

Also the sum of moments about any point $= 0$

ie, $\Sigma M = 0$

Q. Two identical balls of $500\text{ N}$ are placed in a channel as in figure.

Determine normal reaction. Also establish the relation between the normal reactions.

![Two identical balls in a channel touching a vertical wall and each other](/assets/notes/me/s1/engineering-mechanics/module-1/balls-in-channel-wall.svg)

Step-I

FBD:

![Free body diagrams of Ball (1) and Ball (2)](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-balls-1-2.svg)

Analysing ball (2), By Lami's theorem,

$$\frac{500}{\sin 90} = \frac{R_c}{\sin 180} = \frac{R_A}{\sin 90}$$

$$\frac{500}{1} = \cancel{\frac{R_c}{0}} = \frac{R_A}{1} \implies 500 = R_A$$
$$(\infty)$$

$$R_A = 500\text{ N}$$

<!-- page 52 | Page 52 -->

Analysing ball (1),

Since there are four concurrent forces, Lami's theorom cannot be applied.

Now, applying the principles of equilibrium in ball (1):

$$\Sigma F_H = 0 \qquad (\text{right} \rightarrow +\text{ve}$$
$$\qquad\qquad\qquad\text{left} \rightarrow -\text{ve})$$

$$R_D + (-R_C) = 0$$

$$\Rightarrow R_D = R_C$$

~~Applying eq~~ $\quad \Sigma F_V = 0 \qquad (\text{upward} \rightarrow +\text{ve}$
$$\qquad\qquad\qquad\qquad\quad\ \text{downward} \rightarrow -\text{ve})$$

$$-500 + R_B = 0$$

$$\underline{\underline{R_B = 500\text{ N}}}$$

5. Two identical balls each of weight $Q = 500\text{ N}$, are supported by an inclined plane and a vertical wall as shown in figure. Assuming smooth surfaces, find the reactions induced at the point of contact of supports A, B and C.

![Diagram showing two identical balls resting on an inclined plane and against a vertical wall](/assets/notes/me/s1/engineering-mechanics/module-1/two-balls-incline-wall.svg)

A) FBD:

![Free body diagrams for Sphere 1 and Sphere 2](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-spheres-1-2.svg)

Sphere (1) Lami's theorom cannot be applied [4 forces]

<!-- page 53 | Page 53 -->

Analysing sphere (2) by Lami's theorem,

$$\frac{500}{\sin 90} = \frac{R_A}{\sin(120)} = \frac{R_C}{\sin 150}$$

$$R_A = \frac{500 \times \sin(120)}{1} = 433.01\text{ N}$$

$$R_C = 500 \times \sin 150 = 250\text{ N}$$

![Free body diagram of sphere (1) showing forces $500\text{ N}$, $R_C$, $R_B$, and $R_D$.](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-sphere-500n.svg)

Sphere (1)

Applying conditions of equilibrium,

$$\sum F_V = 0$$

$$-500 + -R_C \sin 30 + R_B \sin 60 = 0$$

$$-500 + -250 \sin 30 + R_B \sin 60 = 0$$

$$R_B \cancel{\sin 60} = \frac{500 + 250 \sin 30}{\sin 60}$$

$$R_B = 721.68\text{ N}$$

Now, $\sum F_H = 0$

$$R_D + -R_C \cos 30 + -R_B \cos 60 = 0$$

$$R_D = R_B \cos 60 + R_C \cos 30$$

$$= 721.68 \times \cos 60 + 250 \times \cos 30$$

$$= 577.35\text{ N}$$

Q. A rope $9\text{ m}$ long is connected at $A$ and $B$, two points on the same level $8\text{ m}$ apart. A load of $300\text{ N}$ is suspended from a point $C$ on

<!-- page 54 | Page 54 -->

the rope, $3\text{ m}$ from $A$. What load connected to $D$ on the rope $2\text{ m}$ from $B$ is necessary to keep portion $CD$ parallel to $AB$ ?

![Rope system with loads and tensions](/assets/notes/me/s1/engineering-mechanics/module-1/rope-system-loads.svg)

Tension induced in $AC \rightarrow T_1$

$$\text{"}\qquad\text{"} \qquad CD \rightarrow T_2$$

Analysing joint $C$,

![Free body diagram of joint C](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-joint-c.svg)

Lami's theorom, $\frac{300}{\sin\alpha} = \frac{T_1}{\sin 90} = \frac{T_2}{\sin\beta}$

$$\frac{300}{\sin\alpha} = \frac{T_1}{1}$$

$$\Rightarrow \boxed{T_1 \sin\alpha = 300}$$

Analysing joint $D$,

![Free body diagram of joint D](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-joint-d.svg)

$$\frac{W}{\sin\alpha} = \frac{T_1}{\sin 90} = \frac{T_2}{\sin\beta}$$

$$\rightarrow \boxed{W = T_1 \sin\alpha}$$

$$\therefore W = 300\text{ N} \text{ (same weight)}$$

<!-- page 55 | Page 55 -->

Q. Two smooth cylinders $A$ and $B$ each of diameter $400\text{ mm}$ and weight $200\text{ N}$ rest in a horizontal channel having vertical walls and base width of $720\text{ mm}$ as shown in figure. Find the reactions at $P$, $Q$ and $R$.

A)

![Two smooth cylinders A and B resting in a horizontal channel](/assets/notes/me/s1/engineering-mechanics/module-1/two-smooth-cylinders-channel.svg)

consider $\Delta ABC$; and compute

$$\begin{aligned}
BC &= 720 - (400) = 320 \\
AB &= 200 + 200 = 400
\end{aligned}$$

$$\cos \theta = \frac{BC}{AB} = \frac{320}{400}$$

$$\theta = 36.87^\circ$$

Analysing ball (2) where only three forces exist;

![Free body diagram of cylinder B with forces](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-cylinder-b.svg)

Lami's theorem,

$$\frac{200}{\sin(90 + 53.13)} = \frac{R_R}{\sin(90 + 36.87^\circ)} = \frac{R_S}{\sin 90}$$

$$\frac{200}{\sin(143.13^\circ)} = \frac{R_R}{\sin(126.87^\circ)} = \frac{R_S}{1}$$

$$R_R = \frac{200 \times \sin(126.87^\circ)}{\sin(143.13^\circ)} = 266.66^\circ$$

$$R_S = \frac{200}{\sin(143.13^\circ)} = 333.33\text{ N}$$

<!-- page 56 | Module-1 -->

# Module-1

## Beams, Supports & support reaction

Beam - Is a structural member having two ends supported.

### Types of beams

1. Simply supported beams

![Simply supported beam diagrams](/assets/notes/me/s1/engineering-mechanics/module-1/simply-supported-beam.svg)

2. Cantilever beam

![Cantilever beam diagram](/assets/notes/me/s1/engineering-mechanics/module-1/cantilever-beam.svg)

eg:- Sunshade of a house

<!-- page 57 | Page 57 -->

3) overhanging beam

![Overhanging beam diagram](/assets/notes/me/s1/engineering-mechanics/module-1/overhanging-beam.svg)

Types of supports

1) Fixed support

![Fixed support diagram](/assets/notes/me/s1/engineering-mechanics/module-1/fixed-support.svg)

Three movements are restricted.
(3 reaction forces present).

2) Hinged support

![Hinged support diagram](/assets/notes/me/s1/engineering-mechanics/module-1/hinged-support.svg)

No. of reactions = 2

3) Roller support

![Roller support diagram](/assets/notes/me/s1/engineering-mechanics/module-1/roller-support.svg)

No. of reaction = 1

Types of loading

There are two types of loading:

<!-- page 58 | Page 58 -->

1) concentrated load
2) Uniformly distributed load

1) concentrated load

![Diagram showing beams with concentrated loads](/assets/notes/me/s1/engineering-mechanics/module-1/beam-concentrated-loads.svg)

2) Uniformly distributed load (udl)

![Diagram showing beams with uniformly distributed loads](/assets/notes/me/s1/engineering-mechanics/module-1/beam-udl.svg)

Beam analysis

![Beam analysis diagram showing a simply supported beam with a point load and reactions](/assets/notes/me/s1/engineering-mechanics/module-1/beam-point-load-reactions.svg)

Applying equations of equilibrium, $\Sigma F_v = 0$

$$V_A + V_B - 10 = 0 \qquad V_A + V_B = 10 \text{ — ①}$$

$\Sigma F_H = 0$

$$-H_B = 0 \qquad H_B = 0$$

<!-- page 59 | Page 59 -->

$$\Sigma M_A = 0$$

$$10 \times 2.5 + (-V_B \times 5) = 0$$

$$V_B = 5\text{ kN}$$

Substituting $V_B$ in ①; $\quad V_A = 5\text{ kN}$

Q. Find the reactions at $A$ and $B$.

![Beam with point load and udl](/assets/notes/me/s1/engineering-mechanics/module-1/beam-point-load-and-udl.svg)

Ans)

![Free body diagrams showing conversion of UDL to equivalent point load](/assets/notes/me/s1/engineering-mechanics/module-1/udl-to-equivalent-point.svg)

Applying equations of equilibrium,

$$\Sigma F_V = 0\text{;}$$

$$V_A + V_B - 3 - 25 = 0$$

$$\Rightarrow \quad V_A + V_B = 28 \quad \text{--- } ①$$

$$\Sigma F_H = 0$$

$$\Rightarrow \quad H_A = 0\text{ kN}$$

$$\Sigma M_A = 0$$

$$\Rightarrow \quad -V_B \times 8 + (25 \times 5.5) + (3 \times 3) = 0$$

$$V_B = 18.31\text{ kN}$$

<!-- page 60 | Page 60 -->

① $\Rightarrow \therefore V_A = \underline{9.69\text{ kN}}$

5) Analyse the beam and find support reactions.

![Beam diagram with loads and supports](/assets/notes/me/s1/engineering-mechanics/module-1/beam-loads-and-supports.svg)

Sol

![Free body diagram of the beam with reaction forces and resolved components](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-beam-reactions-components.svg)

$$\Sigma F_V = 0$$
$$V_A + V_B - 10 - 20 \sin 60 = 0$$
$$V_A + V_B = 27.32 \quad \text{--- } ①$$

$$\Sigma F_H = 0$$
$$H_A - 20 \cos 60 = 0$$
$$\underline{\underline{H_A = 10\text{ kN}}}$$

$$\Sigma M_A = 0$$
$$-V_B \times 6 + (20 \sin 60 \times 4) + (10 \times 2) = 0$$
$$\underline{\underline{V_B = 14.88\text{ kN}}}$$

$$① \Rightarrow V_A = \underline{\underline{12.44\text{ kN}}}$$

<!-- page 61 | Page 61 -->

Since $10\text{ kN}$ and $12.44\text{ kN}$ happen at $A$ point, resultant reaction $\Rightarrow$

$$\sqrt{10^2 + (12.44)^2 + 2 \times 10 \times 12.44 \times \cos 90} = 15.96\text{ kN}$$

Its direction, $\tan \theta = \frac{12.44}{10} = 1.244$

$$\theta = 51.20^{\circ}$$

3.

![Beam structure diagram with a 25 kN inclined load](/assets/notes/me/s1/engineering-mechanics/module-1/beam-25kn-inclined.svg)

![Free body diagram of the beam with resolved force components](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-beam-components-25kn.svg)

$$V_A + V_B \sin 60 - 25 \sin 55 = 0$$

$$\cancel{V_A + V_B} \quad \cancel{23.63\text{ kN}} \qquad V_A + V_B \sin 60 = 20.478 \quad \text{--- } ①$$

$$H_A - 25 \cos 55 - V_B \cos 60 = 0$$

$$H_A - \frac{V_B}{2} = \cancel{28.66\text{ kN}} \quad 14.33\text{ kN} \quad \text{--- } ②$$

$$\Sigma M_A = 0$$

$$25 \sin 55 \times 2 + \left(-V_B \sin 60 \times 3\right) = 0$$

$$V_B = 15.76\text{ kN} \qquad V_B \sin 60 = 13.65\text{ kN}$$

<!-- page 62 | Page 62 -->

(1) $\Rightarrow V_A = 6.828 \text{ kN}$

(2) $\Rightarrow H_A = \frac{14.33 + 15.76}{2} = 22.21 \text{ kN}$

Cantilever problems

![Cantilever beam loaded with a point load and uniformly distributed load](/assets/notes/me/s1/engineering-mechanics/module-1/cantilever-point-and-udl.svg)

![Free body diagram of cantilever beam with reactions and equivalent loads](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-cantilever-reactions.svg)

$\Sigma F_V = 0 \Rightarrow$

$$V_A - 5 - 6 = 0$$
$$V_A = 11 \text{ N}$$

$\Sigma F_H = 0 \Rightarrow H_A = 0 \text{ N}$

$\Sigma M_A = 0 \Rightarrow (6 \times 3) + (5 \times 1) + M_A = 0$

$$M_A = -23 \text{ Nm}$$

Q) Determine the reactions at the supports A and B of the beam loaded as shown in figure.

![Beam supported at A and B with combined point loads and UDLs](/assets/notes/me/s1/engineering-mechanics/module-1/beam-combined-point-udl.svg)

<!-- page 63 | Page 63 -->

![Beam with point loads and reactions](/assets/notes/me/s1/engineering-mechanics/module-1/beam-point-loads-reactions.svg)

$\sum F_V = 0 \Rightarrow V_A - 120 - 60 - 120 - 180 + V_B = 0$

$$V_A + V_B = 480 \quad -(1)$$

$\sum M_A = 0 \Rightarrow 120 \times 1 + (60 \times 1.5) + (120 \times 2) + (180 \times 4.5) + (-V_B \times 6) = 0$

$$V_B = 210 \text{ N}$$

$(1) \Rightarrow V_A = 270 \text{ N}$

<!-- page 64 | Page 64 -->

<u>Revision - Module I</u>

<u>Beams</u>

![Beam with a point load of 60 N](/assets/notes/me/s1/engineering-mechanics/module-1/beam-60n-point.svg)

Find reactions at A and B.

![Free body diagram of the beam with reactions](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-beam-reactions.svg)

$$\boxed{\Sigma F_V = 0}$$

$$V_A + V_B - 60 = 0 \qquad \text{--- ①}$$

$$\boxed{\Sigma F_H = 0}$$

$$H_A = 0$$

$$\boxed{\text{Moment about any point} = 0} \quad \text{equations of equilibrium/compatibility condition.}$$

$$M_A = 0 \implies 60 \times 3 - V_B \times 5 = 0$$

$$V_B = \frac{60 \times 3}{5} = 36\text{ N}$$

$$① \implies V_A = 60 - 36 = 24\text{ N}$$

Reactions, $V_A = 24\text{ N}$, $V_B = 36\text{ N}$, $H_A = 0$

Q)

![Beam loaded with inclined forces of 20 kN and 30 kN](/assets/notes/me/s1/engineering-mechanics/module-1/beam-inclined-20-30kn.svg)

<!-- page 65 | Page 65 -->

![Free body diagram of a beam subjected to angled loads](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-beam-angled-loads.svg)

$$\sum F_V = 0 \Rightarrow V_A + V_B = 20 \sin 45^{\circ} + 30 \sin 30^{\circ}$$

$$V_A + V_B = 10\sqrt{2} + 15 \quad - \text{①}$$

$$\sum F_H = 0 \Rightarrow H_A + 20 \cos 45^{\circ} = 30 \cos 30^{\circ}$$

$$H_A + 10\sqrt{2} = 15\sqrt{3}$$

$$H_A = 11.838\text{ kN}$$

$$\sum M_A = 0 \Rightarrow 20 \sin 45^{\circ} \times 3 + (30 \sin 30^{\circ} \times 6) - V_B \times 10 = 0$$

$$V_B = \frac{30\sqrt{2} + 90}{10}$$

$$V_B = 13.242\text{ kN}$$

$$\text{①} \Rightarrow V_A = 10\sqrt{2} + 15 - 13.242$$

$$= 15.9\text{ N}$$

2)

![Diagram showing a beam with roller support at an angle and its free body diagram](/assets/notes/me/s1/engineering-mechanics/module-1/beam-roller-angle.svg)

<!-- page 66 | Page 66 -->

Find the Support reactions

![Beam with point load and uniformly distributed load converted to equivalent point load](/assets/notes/me/s1/engineering-mechanics/module-1/beam-equivalent-point-load.svg)

$\sum F_V = 0 \Rightarrow V_A + V_B = 10 + 15 = 25\text{ N} \quad -(1)$

$\sum F_H = 0 \Rightarrow H_A = 0$

$\sum M_A = 0 \Rightarrow 10 \times 1 + 15 \times 3.5 (-V_B \times 5) + 5 = 0$

$$V_B = \frac{10 + 52.5 + 5}{5}$$

$$V_B = 13.5\text{ N}$$

(1) $\Rightarrow V_A = 25 - 13.5 = \underline{11.5\text{ N}}$

Q)

![Beam with point load, couple, and point load at the end, and its free body diagram](/assets/notes/me/s1/engineering-mechanics/module-1/beam-couple-and-point.svg)

1) $V_A + V_B = 30\text{ kN}$

2) $H_A = 0$

3) $\sum M_A = 0$

$$\Rightarrow -V_B \times 6 + 40 + 20 \times 3 + 10 + (10 \times 1) = 0$$

$$V_B = 20\text{ kN} \Rightarrow V_A = 10\text{ kN}$$

<!-- page 67 | Page 67 -->

Q)

![Beam diagram with a 5 kN force at 30 degrees and an 8 kNm moment](/assets/notes/me/s1/engineering-mechanics/module-1/beam-5kn-30-and-8knm.svg)

![Free body diagram of the beam with reaction forces](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-beam-reactions-5kn.svg)

$$V_A + V_B = 5 \sin 30^\circ = 2.5$$

$$H_A - 5 \cos 30 - 8 = 0$$

$$\Rightarrow H_A = 12.33\text{ KN}$$

$$\sum M_A = 0$$

$$\Rightarrow 5 \sin 30 \times 1 - (16) - V_B \times 5 = 0$$

$$V_B = -2.7\text{ KN} \quad V_A = 5.2\text{ KN}$$

Q)

![Beam diagram with 10 kN force, 4 kN horizontal force, and 4 kN vertical reaction](/assets/notes/me/s1/engineering-mechanics/module-1/beam-10kn-4kn-4kn.svg)

![Free body diagram of beam with reactions](/assets/notes/me/s1/engineering-mechanics/module-1/fbd-beam-reactions-10kn.svg)

5) Find the reaction as per figure.

![Beam on inclined plane with 5 N vertical load](/assets/notes/me/s1/engineering-mechanics/module-1/beam-inclined-plane-5n.svg)

$$\tan \theta = \frac{3}{4} \Rightarrow \theta = 36.86^\circ$$

$$\theta_1 = 90 - \theta$$

$$= 90 - 36.86$$

$$\theta_1 = 53.14^\circ$$

<!-- page 68 | Page 68 -->

<!-- page 69 | Page 69 -->

