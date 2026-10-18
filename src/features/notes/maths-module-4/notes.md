<!-- page 1 | Notes -->

$$
\frac{\partial L}{\partial x} = 0
$$

$$
\frac{\partial L}{\partial y} = 0
$$

$$
\frac{\partial L}{\partial \lambda} = 0
$$

This yields 
$$
\begin{cases} \frac{\partial f}{\partial x} + \lambda \frac{\partial g}{\partial x} = 0 \\ \frac{\partial f}{\partial y} + \lambda \frac{\partial g}{\partial y} = 0 \\ g(x,y) = 0 \end{cases}
$$

Q. Maximize $f(x,y) = x^2 + y^2$ subject to the constraint $g(x,y) = x+y - 1 = 0$

$f(x,y) = x^2+y^2$
$g(x,y) = x+y-1 = 0$

Construct the Lagrange's function -
$h(x,y,\lambda) = x^2 + y^2 + \lambda (x+y-1)$

System of eqn -
$$
\frac{\partial L}{\partial x} = 2x + \lambda = 0 \rightarrow (1)
$$

$$
\frac{\partial L}{\partial y} = 2y + \lambda = 0 \rightarrow (2)
$$

$$
\frac{\partial L}{\partial \lambda} = x+y -1 = 0 \rightarrow (3)
$$

$(1) \Rightarrow 2x + \lambda = 0$, $\quad (2) \Rightarrow 2y+\lambda = 0$
$\lambda = -2x$ $\quad\quad\quad\quad\quad\quad \lambda = -2y$

$$
\therefore -2x = -2y
$$
$$
x = y \quad \text{sub in } (3)
$$
$$
\Rightarrow x + x - 1 = 0
$$
$$
2x - 1 = 0
$$
$$
2x = 1
$$
$$
x = 1/2, \quad y = 1/2
$$

---

<!-- page 2 | Notes (cont.) -->

$\therefore (1/2, 1/2)$ are the critical points

Then, $f(1/2, 1/2) = 1/2^2 + 1/2^2 = 1/4 + 1/4$

$$
= 2/4 = 1/2
$$

2. Maximize $f(x, y) = xy$ subject to $x^2 + y^2 = 1$

$f(x, y) = xy$

$g(x, y) = x^2 + y^2 - 1 = 0$

Construct the Lagrange's function

$L(x, y, \lambda) = xy + \lambda (x^2 + y^2 - 1)$

System of eqns.

$$
\frac{\partial L}{\partial x} = y + 2x\lambda = 0 \rightarrow (1)
$$

$$
\frac{\partial L}{\partial y} = x + 2y\lambda = 0 \rightarrow (2)
$$

$$
\frac{\partial L}{\partial \lambda} = x^2 + y^2 - 1 = 0 \rightarrow (3)
$$

$(1) \Rightarrow y + 2x\lambda = 0$

$2x\lambda = -y$

$$
\lambda = \frac{-y}{2x}
$$

$(2) \Rightarrow x + 2y\lambda = 0$

$2y\lambda = -x$

$$
\lambda = \frac{-x}{2y}
$$

$$
\therefore \frac{-y}{2x} = \frac{-x}{2y}
$$

$-2y^2 = -2x^2$

$y^2 = x^2$ sub in (3)

$(3) \Rightarrow x^2 + x^2 = 1$

$2x^2 = 1$

$$
x^2 = 1/2 \Rightarrow x = \pm \frac{1}{\sqrt{2}}
$$

---

<!-- page 3 | Notes (cont.) -->

$$
x = \pm \frac{1}{\sqrt{2}} \Rightarrow y = \pm \frac{1}{\sqrt{2}}
$$

$$
\therefore \left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right), \left(-\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}\right), \left(\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}\right), \left(-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right) \text{ are the critical points.}
$$

$$
f\left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right) = \frac{1}{\sqrt{2}} \times \frac{1}{\sqrt{2}} = \frac{1}{2}
$$

$$
f\left(-\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}\right) = -\frac{1}{\sqrt{2}} \times -\frac{1}{\sqrt{2}} = \frac{1}{2}
$$

$$
f\left(-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right) = -\frac{1}{\sqrt{2}} \times \frac{1}{\sqrt{2}} = -\frac{1}{2}
$$

$$
f\left(\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}\right) = \frac{1}{\sqrt{2}} \times -\frac{1}{\sqrt{2}} = -\frac{1}{2}
$$

$$
\therefore \text{ The max. value is } \frac{1}{2} \text{ at } \left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right) \cup \left(-\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}\right)
$$

3. Maximize $f(x,y) = xy$ subject to the constraint $x^2 + 4y^2 = 4$.

$$
f(x,y) = xy
$$
$$
g(x,y) = x^2 + 4y^2 - 4 = 0
$$

Construct the Lagrange's fn

$$
L(x,y,\lambda) = xy + \lambda (x^2 + 4y^2 - 4)
$$

$$
\text{By } \frac{\partial L}{\partial x} = y + 2x\lambda = 0 \rightarrow (1)
$$

$$
\frac{\partial L}{\partial y} = x + 8y\lambda = 0 \rightarrow (2)
$$

$$
\frac{\partial L}{\partial \lambda} = x^2 + 4y^2 - 4 = 0 \rightarrow (3)
$$

$$
(1) \Rightarrow y + 2x\lambda = 0 \quad (2) \Rightarrow x + 8y\lambda = 0
$$
$$
2x\lambda = -y \quad 8y\lambda = -x
$$
$$
\lambda = -\frac{y}{2x} \quad \lambda = -\frac{x}{8y}
$$

$$
\therefore \frac{-y}{2x} = \frac{-x}{8y}
$$
$$
-8y^2 = -2x^2
$$
$$
y = \frac{-2x}{-8} \Rightarrow y = \frac{x}{4} \text{ or } x = 4y
$$

Sub in $(3)$
$$
(4y) + 4y^2 - 4 = 0
$$
$$
[illegible]
$$

---

<!-- page 4 | Notes (cont.) -->

$$
20 y^2 = 4
$$
$$
y^2 = \frac{4}{20} = \frac{1}{5}
$$
$$
y = \frac{1}{\pm \sqrt{5}}
$$

When $y = \frac{1}{\sqrt{5}}$, $x = \frac{4}{\sqrt{5}}$ 
When $y = -\frac{1}{\sqrt{5}}$, $x = -\frac{4}{\sqrt{5}}$ 

$$
\therefore \left(\frac{4}{\sqrt{5}}, \frac{1}{\sqrt{5}}\right) \text{ and } \left(-\frac{4}{\sqrt{5}}, -\frac{1}{\sqrt{5}}\right) \text{ are the critical ptr}
$$

$$
f\left(\frac{4}{\sqrt{5}}, \frac{1}{\sqrt{5}}\right) = \frac{4}{\sqrt{5}} + \frac{1}{\sqrt{5}} - \frac{5}{\sqrt{5}} = \frac{\sqrt{5} \times \sqrt{5}}{\sqrt{5}} = \sqrt{5}
$$
$$
f\left(-\frac{4}{\sqrt{5}}, -\frac{1}{\sqrt{5}}\right) = -\frac{4}{\sqrt{5}} - \frac{1}{\sqrt{5}} = -\frac{5}{\sqrt{5}} = -\sqrt{5}
$$

$$
\therefore \text{The max. value} = \sqrt{5} \text{ at } f\left(\frac{4}{\sqrt{5}}, \frac{1}{\sqrt{5}}\right)
$$

4. Find the extreme values of the fn. $f(x,y) = xy$ subject to the constraint $g(x,y) = x^2 + y^2 - 10$ 

$$
f(x,y) = xy
$$
$$
g(x,y) = x^2 + y^2 - 10 = 0
$$

Construct the lagrange's function, 

$$
L(x, y, \lambda) = f(x,y) + \lambda g(x,y)
$$
$$
= xy + \lambda(x^2 + y^2 - 10)
$$

System of eqn 

$$
\frac{\partial L}{\partial x} = y + 2x\lambda = 0 \rightarrow (1)
$$
$$
\frac{\partial L}{\partial y} = x + 2y\lambda = 0 \rightarrow (2)
$$

---

<!-- page 5 | Notes (cont.) -->

$$
\frac{\partial L}{\partial x} = x^2+y^2-10 \to (3)
$$

$$
\begin{aligned}
(1) \Rightarrow y + 2x\lambda &= 0 \\
2x\lambda &= -y \\
\lambda &= \frac{-y}{2x}
\end{aligned}
$$

$$
\begin{aligned}
(2) \Rightarrow x + 2y\lambda &= 0 \\
2y\lambda &= -x \\
\lambda &= \frac{-x}{2y}
\end{aligned}
$$

$$
\therefore \frac{-y}{2x} = \frac{-x}{2y}
$$

$$
-2y^2 = -2x^2
$$

$$
x^2 = y^2
$$

$$
\text{Sub in } (3)
$$

$$
\Rightarrow x^2 + x^2 - 10 = 0
$$

$$
2x^2 = 10
$$

$$
x^2 = \frac{10}{2}
$$

$$
x^2 = 5 \quad \Rightarrow x = \pm \sqrt{5} \quad \Rightarrow y = \pm \sqrt{5}
$$

$$
\therefore (\sqrt{5}, \sqrt{5}), (-\sqrt{5}, \sqrt{5}), (\sqrt{5}, -\sqrt{5}), (-\sqrt{5}, -\sqrt{5}) \text{ are the critical pts.}
$$

$$
f(\sqrt{5}, \sqrt{5}) = \sqrt{5} \times \sqrt{5} = \underline{5}
$$

$$
f(-\sqrt{5}, \sqrt{5}) = \sqrt{5} \times -\sqrt{5} = \underline{5}
$$

$$
f(-\sqrt{5}, -\sqrt{5}) = -\sqrt{5} \times \sqrt{5} = \underline{-5}
$$

$$
f(\sqrt{5}, -\sqrt{5}) = \sqrt{5} \times -\sqrt{5} = \underline{-5}
$$

$$
\therefore \text{The max. value is } 5 \text{ at } (\sqrt{5}, \sqrt{5}) \text{ and } (-\sqrt{5}, -\sqrt{5})
$$

$$
\therefore \text{The min. value is } -5 \text{ at } (-\sqrt{5}, \sqrt{5}) \text{ & } (\sqrt{5}, -\sqrt{5})
$$

---

<!-- page 6 | Notes (cont.) -->

Q. Find the point $P(x, y, z)$ on the plane $2x + y - z - 5 = 0$ that is closest to the origin.

Here, the problem asked us to find the min. value of fn. $d = op$.

$$
d = op =
oot(x - 0)^2 + (y - 0)^2 + (z - 0)^2
$$

$$
d =
oot x^2 + y^2 + z^2 , \text{ $d$ is a minimum, then $d^2$ is also equivalent}\\$ 
$$
\text{to the minimum}
$$

$$
\therefore d^2 = x^2 + y^2 + z^2 \quad \quad g(x, y, z) = 2x + y - z - 5 = 0
$$

We can minimize $f(x, y, z) = x^2 + y^2 + z^2$ subject to $2x + y - z - 5 = 0$

$$
h(x, y, z, \lambda) = f(x, y, z) + \lambda g(x, y, z) = (x^2 + y^2 + z^2) + \lambda(2x + y - z - 5) = 0
$$

$$
= x^2 + y^2 + z^2 + \lambda(2x + y - z - 5) = 0
$$

$$
\frac{\partial L}{\partial x} = 2x + 2\lambda = 0 \rightarrow (1)
$$

$$
\frac{\partial L}{\partial y} = 2y + \lambda = 0 \rightarrow (2)
$$

$$
\frac{\partial L}{\partial z} = 2z - \lambda = 0 \rightarrow (3)
$$

$$
\frac{\partial L}{\partial \lambda} = 2x + y - z - 5 = 0 \rightarrow (4)
$$

$$
(1) \Rightarrow 2x + 2\lambda = 0
$$
$$
\lambda = -x \Rightarrow x = \frac{-\lambda}{2}
$$

$$
(2) \Rightarrow 2y + \lambda = 0
$$
$$
\lambda = -2y \Rightarrow y = \frac{-\lambda}{2}
$$

$$
(3) \Rightarrow 2z - \lambda = 0
$$
$$
\lambda = 2z \Rightarrow z = \frac{\lambda}{2}
$$

Sub in $(4)$

$$
2\left(\frac{-\lambda}{2}\right) + \frac{-\lambda}{2} - \frac{\lambda}{2} - 5 = 0
$$

$$
-2\lambda - \frac{\lambda}{2} - \frac{\lambda}{2} = 5
$$

$$
\frac{-4\lambda - 2\lambda - \lambda}{2} = 5
$$

$$
\Rightarrow -6\lambda = 10
$$
$$
\lambda = \frac{-10}{6}
$$
$$
\lambda = \frac{-5}{3}
$$

---

<!-- page 7 | Notes (cont.) -->

When $\lambda = -5/3$

$$
x = 5/3
$$
$$
y = 5/6
$$
$$
z = \frac{-5/3}{2} = \frac{-5}{6}
$$

$(5/3, 5/6, -5/6)$ are the points closest to the origin

Q. Find the max and min values of the fn $f(x, y) = 3x+4y$ subject to the condition on the circle $x^2+y^2=1$

$$
f(x,y) = 3x+4y
$$
$$
g(x,y) = x^2+y^2-1 = 0
$$
$$
\begin{aligned}
L(x,y) &= f(x,y) + \lambda g(x,y) \\
&= 3x+4y + \lambda \left(x^2+y^2-1\right) = 0
\end{aligned}
$$

$$
\frac{\partial L}{\partial x} = 3 + 2\lambda x = 0 \to (1) \quad \Rightarrow \quad 2\lambda x = -3 \quad \Rightarrow \lambda = \frac{-3}{2x} \quad \Rightarrow x = \frac{-3}{2\lambda}
$$

$$
\frac{\partial L}{\partial y} = 4 + 2\lambda y = 0 \to (2) \quad \Rightarrow \quad 2\lambda y = -4 \quad \Rightarrow \lambda = \frac{-4}{2y} \quad \Rightarrow y = \frac{-4}{2\lambda}
$$

$$
\frac{\partial L}{\partial \lambda} = 3 \cdot x^2+y^2-1 = 0 \to (3)
$$

When $\lambda = 5/2$

$$
x = \frac{-3}{2 \times \frac{5}{2}} = \frac{-3}{5}
$$

$$
y = \frac{-4}{2 \times \frac{5}{2}} = \frac{-4}{5}
$$

$(-3/5, -4/5)$ are the critical point.

When $\lambda = -5/2$

$$
x = \frac{-3}{2 \times \frac{-5}{2}} = \frac{3}{5}
$$

$$
y = \frac{-4}{2 \times \frac{-5}{2}} = \frac{4}{5}
$$

Sub in $(3)$

$$
\Rightarrow \left(\frac{-3}{2\lambda}\right)^2 + \left(\frac{-4}{2\lambda}\right)^2 - 1 = 0
$$

$$
\Rightarrow \frac{9}{4\lambda^2} + \frac{16}{4\lambda^2} - 1 = 0
$$

$$
\Rightarrow \frac{25}{4\lambda^2} - 1 = 0
$$

$$
\Rightarrow \frac{25}{4\lambda^2} = 1
$$

$$
\Rightarrow 25 = 4\lambda^2
$$

$$
\Rightarrow \frac{25}{4} = \lambda^2
$$

$$
\Rightarrow \sqrt{25/4} = \lambda
$$

$$
\Rightarrow \lambda = \pm 5/2
$$

$ (3/- , 4/-) $ are the critical point.

---

<!-- page 8 | Notes (cont.) -->

at
$(-3/5, -4/5)$
$$
\begin{aligned}
f(x, y) &= 3 \times \frac{-3}{5} + 4 \times \frac{-4}{5} \
&= \frac{-9}{5} - \frac{16}{5} = \frac{-25}{5} = -5
\end{aligned}
$$

---

<!-- page 9 | Notes (cont.) -->

when $\lambda = -6$

$$
x = -\frac{\lambda}{2} = 3
$$
$$
y = 3
$$
$$
z = 3
$$

$(3, 3, 3)$ are the critical points.

At $(3, 3, 3)$:
$$
f(x, y, z) = 3^2 + 3^2 + 3^2 = 9 + 9 + 9 = 27
$$

Two Constraints

for a function $f(x, y, z)$ subject to 2 constraints $g(x, y, z) = 0$ and $h(x, y, z) = 0$

1) Lagrangient function

2) Construct the lagrangient fn.
$$
L(x, y, z, \mu) = f(x, y, z) + \lambda g(x, y, z) + \mu h(x, y, z)
$$
where $\lambda$ and $\mu$ are the lagrangient multipliers.

2) System of Equations.

Find the critical points by solving the following system of eqns.
$$
\frac{\partial L}{\partial x} = 0 \quad \frac{\partial L}{\partial z} = 0 \quad \frac{\partial L}{\partial \mu} = 0
$$
$$
\frac{\partial L}{\partial y} = 0 \quad \frac{\partial L}{\partial \lambda} = 0
$$

Q Find the max. and min. values of $f(x, y) = x^2 + y^2$ subject to the constraints $x + y = 1$ and $x - y = 1$.

$$
f(x, y) = x^2 + y^2
$$
$$
g(x, y) = x + y - 1 = 0
$$
$$
h(x, y) = x - y - 1 = 0
$$
$$
L(x, y, \lambda, \mu) = x^2 + y^2 + \lambda (x + y - 1) + \mu (x - y - 1)
$$

$$
\frac{\partial L}{\partial x} = 2x + \lambda + \mu = 0 \to (1)
$$
$$
\frac{\partial L}{\partial \lambda} = x + y - 1 = 0 \to (3)
$$

$$
\frac{\partial L}{\partial y} = 2y + \lambda - \mu = 0 \to (2)
$$
$$
\frac{\partial L}{\partial \mu} = x - y - 1 = 0 \to (4)
$$

---

<!-- page 10 | Notes (cont.) -->

Only one critical pt -> minima

$(3) + (4) \Rightarrow 2x = $

$(1) + (2) \Rightarrow 2x + 2y + 2\lambda = 0 \Rightarrow (5)$

$(3) - (4) \Rightarrow 2y + 2 = 0$

$$
\begin{aligned}
2x - 2 &= 0 \\
2x &= 2 \\
x &= 1
\end{aligned}
$$

Sub in $(3) \Rightarrow 1 + y - 1 = 0$

$$
\begin{aligned}
y &= 1 - 1 \\
y &= 0
\end{aligned}
$$

$(1, 0)$ is the critical point.

At $(1,0)$ $f(x,y) = 1^2 + 0^2$

$$
2\times 1 + 2\times 0 + 2\lambda = 0
$$
$$
2\lambda = -2
$$
$$
\lambda = -1
$$

$$
= 1$ minimum value
$$

$$
2\times 1 - 1 + \mu = 0
$$
$$
2 - 1 + \mu = 0
$$
$$
\mu = -1
$$

2. Find the max. and min values of $f(x, y, z) = x^2 + y^2 + z^2$ subject to the constraints $x + y + z = 3$ and $x - y + z = 1$.

$$
\begin{aligned}
f(x, y, z) &= x^2 + y^2 + z^2 \\
g(x, y, z) &= x + y + z - 3 = 0 \\
h(x, y, z) &= x - y + z - 1 = 0
\end{aligned}
$$

$$
L(x, y, z, \lambda, \mu) = x^2 + y^2 + z^2 + \lambda(x + y + z - 3) + \mu(x - y + z - 1)
$$

$$
\begin{aligned}
\frac{\partial L}{\partial x} &= 2x + \lambda + \mu = 0 \rightarrow (1) && \frac{\partial L}{\partial z} = 2z + \lambda + \mu = 0 \rightarrow (3) \\
\frac{\partial L}{\partial y} &= 2y + \lambda - \mu = 0 \rightarrow (2) && \frac{\partial L}{\partial \lambda} = x + y + z - 3 = 0 \rightarrow (4) \\
\frac{\partial L}{\partial \mu} &= x - y + z - 1 = 0 \rightarrow (5) &&
\end{aligned}
$$

$$
\begin{aligned}
(4) - (5) \Rightarrow 2y - 2 &= 0 \\
2y &= 2 \\
y &= 1
\end{aligned}
$$

$$
\begin{aligned}
x &= 3 - y - z \\
x &= 3 - 1 - z \\
x &= 2 - z \\
x + z &= 2
\end{aligned}
$$

$$
\begin{aligned}
x + y + z - 3 &= 0 \\
+ (x - y + z - 1) &= 0 \\
2x + 2z - 4 &= 0
\end{aligned}
$$

---

<!-- page 11 | Notes (cont.) -->

$$(1) \Rightarrow 2x + \lambda + \mu = 0$$\$$\lambda + \mu = -2x$$\$\implies -2x - 2z$$\$\implies x = z$$\$\text{(3)} \Rightarrow 2z + \lambda + \mu = 0$$\$$\lambda + \mu = -2z$$\$\implies -2x =$$\$(4) \Rightarrow xy + x = 3$$\$$xy + x = 3$$\$$2x = 2$$\$$x = 1$$\$\therefore (1, 1, 1) \text{ is the critical pt}$$\text{3. Find the extrema of } f(x, y, z) = x^2 + y^2 + z^2 \text{ subject to the constraint } x + y + z = 1 \text{ and } x - y = 0.$$\$$f(x, y, z) = x^2 + y^2 + z^2$$\$$g(x, y, z) = x + y + z - 1 = 0$$\$$h(x, y) = x - y = 0$$\$$L(x, y, z, \lambda, \mu) = x^2 + y^2 + z^2 + \lambda(x + y + z - 1) + \mu(x - y)$$\$\frac{\partial L}{\partial x} = 2x + \lambda + \mu = 0 \to (1) \quad \frac{\partial L}{\partial z} = 2z + \lambda = 0 \to (3)$$\$\frac{\partial L}{\partial y} = 2y + \lambda - \mu = 0 \to (2) \quad \frac{\partial L}{\partial 
\lambda} = x + y + z - 1 = 0 \to (4)$$\$\frac{\partial L}{\partial \mu} = x - y = 0 \to (5)$$\$\text{From } (5) \Rightarrow x - y = 0$$\$\implies x = y$$\$\text{(4)} \Rightarrow 2x + \lambda - \mu = 0 \to (6)$$\$\text{(3)} \Rightarrow 2z + \lambda = 0 \to (3)$$\$\text{(4)-(3)} \Rightarrow 2x - 2z = 0$$\$$2x = 2z$$\$$x = z$$\$\text{(2)} \Rightarrow 2y + \lambda - \mu = 0$$\$\text{(1)} \Rightarrow -2x - \lambda + \mu = 0$$\$(2)-(1) \Rightarrow -2\mu = 0$$\$\mu = 0$$\$$x + x + x - 1 = 0$$\$$3x - 1 = 0$$\$$3x = 1$$\$$x = 1/3$$\$\left(\frac{1}{3}, \frac{1}{3}, \frac{1}{3}\right) \text{ is the critical point}$$\text{Minimum value} = 1/3, \quad y = 1/3, \quad z = 1/3$$

---

<!-- page 12 | Notes (cont.) -->

4. For a rectangle whose perimeter is $20m$ use the Lagrangian multiplier to find the dimension that will maximize the area.

Let $x$ and $y$ be length and breadth.

$$
2(x+y) = 20
$$
$$
2(x+y) = 20 \implies x+y = 10 \implies g(x,y) = x+y - 10
$$
$$
f(x,y) = xy
$$
$$
L(x,y,\lambda) = f(x,y) + \lambda g(x,y)
$$
$$
= xy + \lambda(x+y-10)
$$

$$
\frac{\partial L}{\partial x} = y + \lambda = 0 \implies \lambda = -y, \, x = -\lambda
$$
$$
\frac{\partial L}{\partial y} = x + \lambda = 0 \implies \lambda = -x, \, y = -\lambda \implies y = x
$$
$$
\frac{\partial L}{\partial \lambda} = x+y - 10 = 0 \rightarrow \text{Sub in (3)}
$$
$$
\implies x - x - 10 = 0
$$
$$
\implies -\lambda - \lambda - 10 = 0
$$
$$
-2\lambda = 10
$$
$$
\lambda = -5
$$

$$
x = 5 \quad y = 5
$$
$$
\underbrace{x = 5}_{length} \quad \underbrace{y = 5}_{breadth}
$$

Linear Programming

Key concepts in linear programming:

Decision Variables are the variables that represent the choices or decisions to be made in the problem. These variables are what you are trying to determine in order to optimize the objective function. They are the unknowns that need to be solved. They must be non-negative in most LPP.

---

<!-- page 13 | Objective function -->

Example:

In manufacturing problem where the objective is to maximize profit from producing 2 products. The decision variables might be $x_1$,

$x_1$: The no. of units of product 1 to produce.

$x_2$: The no. of units of product 2 to produce.

### Objective function

It is the fn. that needs to be optimized (maximized / minimized) based on the decision variables.

### Constraints

They are the restrictions or limitations imposed on the decision variables. Constraints are typically expressed as linear eqns or inequalities involving the decision variables. They define the feasible region of the soln space.

They are in the form
$$
\begin{aligned}
a_{11}x_1 + a_{12}x_2 &≤ b_1 \
a_{21}x_1 + a_{22}x_2 &≧ b_2 \
a_{i1}x_1 + a_{i2}x_2 &= b_i

### Linear Programming Problem (LPP)

A linear programming problem involves optimizing a linear objective fn. subject to a set of linear inequality / equality constraints. The general form of an LPP is objective function

$$
\text{maximize} / \text{minimize } z = c_1 x_1 + c_2 x_2 + \dots + c_n x_n
$$

Subject to the constraint
$$
\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &\le b_1 \
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &\le b_2 \
&\vdots \
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n &\le b_m
\end{aligned}
$$

---

<!-- page 14 | Objective function (cont.) -->

Basic Feasible Solution

A solution to the LPP is feasible if it satisfies all the constraints including non-negativity constraints. A basic feasible soln is obtained by setting $n-m$ variables to $0$ (where $n$ is the no. of variables and $m$ is the no. of constraints) and solving the resulting system of eqns.

Optimal Solution

An optimal soln is a feasible soln that maximises or minimises the objective function. The graphical method is a common algorithm used to find the optimal soln.

Formulation of LPP

Q. Manufacturing Problem

A factory manufactures $2$ products $P_1$ and $P_2$ each product requires different amounts of resources. The objective is to maximize profit. Profit from $P_1 = \text{Rs } 3 \text{ per unit}$. Profit from $P_2 = \text{Rs } 5 \text{ per unit}$. Resource constraints:

Resource $1 = 4 \text{ units available}$
Resource $2 = 6 \text{ units available}$

$P_1$ requires $1 \text{ unit of resource } 1$ and $2 \text{ units of resource } 2$.
$P_2$ requires $2 \text{ units of resource } 1$ and $1 \text{ unit of resource } 2$.

Ans: Let $x_1$ and $x_2$ be the no. of units produced by the manufacturing factory.

Objective fn: Maximize $Z = 3x_1 + 5x_2$

Subject to: 
$$
\begin{aligned}
x_1 + 2x_2 &\le 4\\
2x_1 + x_2 &\le 6\\
x_1 \ge 0, &\; x_2 \ge 0
\end{aligned}
$$

Q. (Diet problem)

A hospital wants to create a nutritious diet for patients, that needs at least certain nutritional requirements at the minimum cost. The diet must include $2000 \text{ cal}$, $50 \text{ g}$ of protein and $300 \text{ g}$ of carbohydrates per day. There are $2$ food items available with the following nutritional values and cost:

Food $1$ : $\text{cost } \text{Rs } 3 \text{ per unit}$, provides $500 \text{ cal.}$, $20 \text{ g}$ of protein & $30 \text{ g}$ of carbs.

Food $2$ : $\text{cost } \text{Rs } 4 \text{ per unit}$, provides $600 \text{ cal.}$, $30 \text{ g}$ of protein & $40 \text{ g}$ of carbs.

---

<!-- page 15 | Objective function (cont.) -->

let $x_1$ and $x_2$ be the units.

minimize $z = 3x_1 + 4x_2$

Subject to the constraints:

$$
500x_1 + 600x_2 \ge 2000
$$
$$
20x_1 + 30x_2 \ge 50
$$
$$
30x_1 + 40x_2 \ge 300
$$

$$
\left. \begin{aligned} x_1 \ge 0, \; x_2 \ge 0 \\ \text{or} \\ x_1, x_2 \ge 0. \end{aligned} \right\} \begin{matrix} \text{non-negative} \\ \text{fn.} \end{matrix}
$$

$Q_3$ A company needs to schedule employs to ensure enough staff is available throughout the day. The company requires 5 employs from 8 A.M to 12 P.M, 3 employs from 12 P.M to 4 P.M, 4 employs from 4 P.M to 8 P.M. Employs work 8 hour shift and can't start at 8 A.M, 12 P.M or 4 P.M. The goal is to minimize the no. of employees needed.

let $x_1, x_2, x_3$ be the shifts.

minimize $\cancel{z = 5x_1} + 5x_1 + 3x_2 + 4x_3$

Subject to constraint.

let $x_1 \to 8 \text{ AM} - 12 \text{ PM}$

$x_2 \to 12 \text{ PM} - 4 \text{ PM}$

$x_3 \to 4 \text{ PM} - 8 \text{ PM}$

Minimize $z = x_1 + x_2 + x_3$

$x_1 \ge 5$

$x_1 + x_2 \ge 3$

$x_2 + x_3 \ge 4$

$x_1, x_2, x_3 \ge 0$.

---

<!-- page 16 | Objective function (cont.) -->

Graphical Method for Solving LPP

$Q_1.$ Solve the LPP maximize $z = 3x_1 + 4x_2$ subject to $4x_1 + 2x_2 \le 80$, $2x_1 + 5x_2 \le 180$, $x_1, x_2 \ge 0$.

$$
\begin{aligned}
4x_1 + 2x_2 &= 80 & 2x_1 + 5x_2 &= 180 \\
x_1 = 0 \implies x_2 &= 40 \quad (0, 40) & x_1 = 0 \implies x_2 &= 36 \quad (0, 36) \\
x_2 = 0 \implies x_1 &= 20 \quad (20, 0) & x_2 = 0 \implies x_1 &= 90 \quad (90, 0)
\end{aligned}
$$

![Graphical representation of linear programming problem constraints](/notes/cse/s1/maths/module-4/lpp-graph-1.webp)

$$
A(0, 0), \ B(20, 0), \ D(0, 36)
$$
$$
C \left(\frac{5}{2}, 35\right).
$$

For $C$, solve the $2$ eqns.

$$
\Rightarrow \begin{aligned} 4x_1 + 2x_2 &= 80 \to (1) \\ 2x_1 + 5x_2 &= 180 \to (2) \end{aligned}
$$

$x_1 \text{ $2$ with } (2) \Rightarrow 4x_1 + 10x_2 = 360 \to (3)$
$$
4x_1 + 2x_2 = 80 \to (1)
$$

$$
\begin{aligned}
(1) - (3) \Rightarrow -8x_2 &= -280 \\
x_2 &= \frac{-280}{-8} \, 35 \\
x_2 &= 35
\end{aligned}
$$

Sub $x_2 = 35$ in $(1)$
$$
\begin{aligned}
4x_1 + 2 \times 35 &= 80 \\
4x_1 &= 80 - 70 \\
x_1 &= \frac{10}{4} \\
x_1 &= \frac{5}{2}
\end{aligned}
$$

---

<!-- page 17 | Objective function (cont.) -->

$$
z = 3x_1 + 4x_2
$$

$$
(0,0) \Rightarrow 3 \times 0 + 4 \times 0 = 0
$$
$$
(20,0) \Rightarrow 3 \times 20 + 0 = 60
$$
$$
(5/2, 35) \Rightarrow 3 \times \frac{5}{2} + 4 \times 35 = \frac{15}{2} + 140 = \frac{15 + 280}{2} = \frac{295}{2} = 147.5
$$
$$
(0, 36) \Rightarrow 3 \times 0 + 4 \times 36 = 144
$$

Q. Solve the LPP graphically.

$$
\text{maximize } z = 15x_1 + 10x_2
$$
$$
\text{Subject to } 4x_1 + 6x_2 \le 360
$$
$$
3x_1 \le 180
$$
$$
5x_2 \le 500
$$
$$
x_1, x_2 \ge 0
$$

$$
4x_1 + 6x_2 \le 360
$$
$$
4x_1 + 6x_2 = 360
$$
$$
x_1 = 0 \Rightarrow x_2 = 60 \quad (0, 60)
$$
$$
x_2 = 0 \Rightarrow x_1 = 90 \quad (90, 0)
$$

$$
3x_1 \le 180
$$
$$
3x_1 = 180
$$
$$
x_1 = 60 \quad (60, 0)
$$

$$
5x_2 \le 500
$$
$$
5x_2 = 500
$$
$$
x_2 = 100 \quad (0, 100)
$$

$$
A(0,0), B(90,0), C(60,20), D(40,30), E(0,40)
$$

![Graphical method for solving LPP showing feasible region, constraint lines, and corner points A, B, C, D, E](/notes/cse/s1/maths/module-4/lpp-graph-2.webp)

$$
4x_1 + 6x_2 = 360
$$

For $x_1 = 60$:
$$
4(60) + 6x_2 = 360
$$
$$
240 + 6x_2 = 360
$$
$$
6x_2 = 360 - 240
$$
$$
6x_2 = 120
$$
$$
x_2 = 20
$$

For $x_2 = 40$:
$$
4x_1 + 6(40) = 360
$$
$$
4x_1 + 240 = 360
$$
$$
4x_1 = 360 - 240
$$
$$
4x_1 = 120
$$
$$
x_1 = 30
$$

---

<!-- page 18 | Objective function (cont.) -->

$z = 15x_1 + 10x_2$

$(0,0) \Rightarrow z = \underline{0}$

$(90,0) \Rightarrow z = 15 \times 90 + 0 = \underline{1350}$

$(60,20) \Rightarrow z = 15 \times 60 + 10 \times 20 = 900 + 200 = \underline{1100}$

$(40,30) \Rightarrow z = 15 \times 40 + 10 \times 30 = 600 + 300 = \underline{900}$

$(0,40) \Rightarrow z = 0 + 10 \times 40 = \underline{400}$

$Q_3 \quad z = 3x + 2y \quad [maximize]$

Subject to the constraint $\quad x + 2y \le 10$

$\quad 3x + y \le 15$

$\quad x, y \ge 0$

$$
 \begin{aligned}
x + 2y &= 10 & 3x + y &= 15 \\
x = 0 \Rightarrow y &= 5 \quad (0,5) & x = 0 \Rightarrow y &= 15 \quad (0,15) \\
y = 0 \Rightarrow x &= 10 \quad (10,0) & y = 0 \Rightarrow x &= 5 \quad (5,0)
\end{aligned} 
$$

![Linear programming graphical method showing feasible region and constraint lines](/notes/cse/s1/maths/module-4/lpp-graph-3.webp)

$A(0,0), \ B(5,0), \ C(4,3), \ D(0,5)$

$$
\begin{aligned}
x + 2y &= 10 \\
3x + y &= 15 \\
6x + 2y &= 30 \to (3) \\
x + 2y &= 10 \to (1)
\end{aligned}
\Rightarrow (3) - (1) \Rightarrow \begin{aligned}
5x &= 20 \\
x &= \underline{4}
\end{aligned}
$$

$$
\begin{aligned}
x + 2y &= 10 \\
2y &= 6 \\
y &= \frac{6}{2} = \underline{3}
\end{aligned}
$$

$z = 3x + 2y$

$(0,0) \Rightarrow z = 3 \times 0 + 2 \times 0 = 0$

$(5,0) \Rightarrow z = 3 \times 5 + 2 \times 0 = 15$

$(4,3) \Rightarrow z = 3 \times 4 + 2 \times 3 = 12 + 6 = 18$

$(0,5) \Rightarrow z = 3 \times 0 + 2 \times 5 = 10$

Maximum at value of $z = 18$ at $(4,3)$

---

<!-- page 19 | Objective function (cont.) -->

Maximize $z = 2x + 3y$

Subject to the constraint
$x + y \le 30$
$y \ge 3$
$0 \le y \le 12 \implies y \ge 0, \ y \le 12$
$x - y \ge 0$
$0 \le x \le 20 \implies x \ge 0, \ x \le 20$

$x + y = 30$
$x = 0 \implies y = 30 \quad (0, 30)$
$y = 0 \implies x = 30 \quad (30, 0)$

$y \le 12$
$y = 12 \quad (0, 12)$

$y \ge 3$
$y = 3 \quad (0, 3)$

$x - y = 0 \implies x = y$
$x = 0 \implies y = 0 \quad (0, 0)$
$y = 0 \implies x = 0 \quad (0, 0)$

$x = 20 \quad (20, 0)$

$A(3, 3), \ B(20, 3), \ C(20, 10), \ D(18, 12), \ E(3, 12)$

![Linear programming graphical method showing the feasible region and constraint lines](/notes/cse/s1/maths/module-4/lpp-graph-4.webp)

$z = \text{at } A \ 2 \times 3 + 3 \times 3 = 6 + 9 = 15$

$z = 2 \times 20 + 3 \times 3 = 49$

$z = 2 \times 20 + 3 \times 10 = 40 + 30 = 70$

$z = 2 \times 18 + 3 \times 12 = 36 + 36 = 72$

$z = 2 \times 3 + 3 \times 12 = 6 + 36 = 42$

---

<!-- page 20 | Objective function (cont.) -->

$Q_5.$ Use the graphical method to solve the LPP.

$$
\begin{aligned}
\text{Maximize } z &= 6x_1 - 4x_2 \\
\text{Subject to the constraints } 2x_1 + 4x_2 &\le 4 \\
4x_1 + 8x_2 &\ge 15 \\
x_1, x_2 &\ge 0
\end{aligned}
$$

$$
\begin{aligned}
2x_1 + 4x_2 &= 4 \\
x_1 = 0 &\implies x_2 = 1 \quad (0, 1) \\
x_2 = 0 &\implies x_1 = 2 \quad (2, 0)
\end{aligned}
$$

$$
\begin{aligned}
4x_1 + 8x_2 &= 15 \\
x_1 = 0 &\implies x_2 = 15/8 \quad (0, 15/8) \\
x_2 = 0 &\implies x_1 = 15/4 \quad (3.75, 0)
\end{aligned}
$$

![Graphical representation of two lines: 2x1 + 4x2 = 4 and 4x1 + 8x2 = 15 showing no bounded feasible region.](/notes/cse/s1/maths/module-4/lpp-no-feasible-region.webp)

There is no bounded region

$\therefore$ No solution for $z = 6x_1 - 4x_2$.

* Method of Steepest descent [Gradient Descent]

The method of steepest descent is an iterative optimization algorithm used to find the minimum of a function. The main idea behind the method of steepest descent is to iteratively move in the direction of the steepest decrease of the fn. For a fn $f(x,y)$ this direction is given by the -ve gradient of $f$, denoted as $-\nabla f(x,y)$. For a fn $f(x,y)$ the gradient of $f$ is a vector of partial derivatives i.e.,

$$
\nabla f = \hat{i} \frac{\partial f}{\partial x} + \hat{j} \frac{\partial f}{\partial y} = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}\right)
$$

The direction of steepest descent is given by $-\nabla f(x,y)$, the algorithm updates the current point $(x_k, y_k)$ to the new point $(x_{k+1}, y_{k+1})$ using the update rule $(x_{k+1}, y_{k+1}) = (x_k, y_k) - \alpha \nabla f(x_k, y_k)$, where $\alpha$ is the stepsize or learning rate.

---

<!-- page 21 | Objective function (cont.) -->

Q. Find the minimum of $f(x,y) = x^2 + 3y^2$, starting from the point $(x_0, y_0) = (6,3)$ where $\frac{\text{where }\text{alfa }=0.1}{\text{where }\text{a}=0.1}$ using the method of steepest descent.

[uncertain: choose $\alpha = 0.1$ when it is not given]

The gradient of $f$ is given
$$
\nabla f(x,y) = i \frac{\partial}{\partial x}(x^2+3y^2) + j \frac{\partial}{\partial y}(x^2+3y^2)
$$
$$
= 2xi + 6yj = (2x, 6y) \implies \nabla f(6,3) = (2x, 6y) = (12, 18)
$$

The update rule for steepest descent is:
$$
(x_{k+1}, y_{k+1}) = (x_k, y_k) - \alpha \nabla f(x_k, y_k)
$$
where $\alpha$ is the steepest size or learning rate
$$
\alpha = 0.1
$$

Iteration 0 (initial point)
$$
(x_0, y_0) = (6,3)
$$

Iteration 1
$$
(x_1, y_1) = (x_0, y_0) - \alpha \nabla f(x_0, y_0)
$$
$$
= (6,3) - 0.1(12, 18) = (6,3) - (1.2, 1.8) = (4.8, 1.2)
$$

$$
\nabla f(4.8, 1.2) = (2x, 6y) = (9.6, 7.2)
$$

$$
(x_2, y_2) = (x_1, y_1) - \alpha \nabla f(x_1, y_1)
$$
$$
= (4.8, 1.2) - 0.1(9.6, 7.2)
$$
$$
= (4.8, 1.2) - (0.96, 0.72)
$$
$$
= (3.84, 0.48)
$$

$$
(x_3, y_3) = (x_2, y_2) - \alpha \nabla f(x_2, y_2)
$$
$$
= (3.84, 0.48) - 0.1(7.68, 2.88) \qquad \nabla f(3.84, 0.48) = (7.68, 2.88)
$$
$$
= (3.84, 0.48) - (0.768, 0.288)
$$
$$
= (3.072, 0.192)
$$

$$
(x_4, y_4) = (x_3, y_3) - \alpha \nabla f(x_3, y_3)
$$
$$
= (3.072, 0.192) - 0.1(6.144, 1.152) \qquad \nabla f(3.072, 0.192) = (6.144, 1.152)
$$
$$
= (3.072, 0.192) - (0.6144, 0.1152)
$$
$$
= (2.4576, 0.0768) //
$$

---

<!-- page 22 | Objective function (cont.) -->

$$
(x_5, y_5) = (x_4, y_4) - \beta \nabla f(x_4, y_4)
$$
$$
= (2.4576, 0.0761) - 0.1(4.9152, 0.4608)
$$
$$
= (2.4576, 0.0761) - (0.49152, 0.04608)
$$
$$
= (1.96608, 0.03072)
$$

After 5 iterations using the method of steepest descent with a step size of $\alpha = 0.1$, the point has been updated from $(6, 3)$ to app. $(1.96608, 0.03072)$.

Q. Minimize quadratic function $f(x, y) = 3x^2 + 4y^2$ starting from the point $(x_0, y_0) = (1, 1)$ using the method of steepest descent with a fixed step size $\alpha = 0.01$. Iterate 5 steps.

$$
\alpha = 0.01
$$

$$
\nabla f(x, y) = 6xi + 8yj
$$

i.e.

$$
(x_0, y_0) = (1, 1)
$$

Iteration 1 : $(x_0, y_0) - \alpha \nabla f(x_0, y_0)$

$$
= (1, 1) - 0.01 (6xi + 8yj)
$$

$$
= (1, 1) - (0.06i + 0.08j)
$$

$$
(x_1, y_1) = (0.94, 0.92)
$$

$$
(x_2, y_2) = (x_1, y_1) - \alpha \nabla f(x_1, y_1)
$$

$$
= (0.94, 0.92) - 0.01 (5.64, 7.36)
$$

$$
= (0.94, 0.92) - (0.0564, 0.0736)
$$

$$
= (0.8836, 0.8464)
$$

$$
(x_3, y_3) = (0.8836, 0.8464) - 0.01 (5.3016, 6.7712)
$$

$$
= (0.8836, 0.8464) - (0.053016, 0.067712)
$$

$$
= (0.830584, 0.778688)
$$

---

<!-- page 23 | Objective function (cont.) -->

$$
(x_4, y_4) = (0.830584, 0.778688) - 0.01 (4.983504, 4.672128)
$$
$$
= (0.78074896, 0.73196672)
$$
$$
(x_5, y_5) = (0.7807, 0.7319) - 0.01 (4.6842, 5.8552)
$$
$$
= (0.7338, 0.6733)
$$

Q. Minimize the function $f(x, y) = x^2 + y^2$ using steepest descent.

Let initial value $(x_0, y_0) = (1, 1)$
Let step size $\alpha = 0.1$

$$
\nabla f(x, y) = 2x\hat{i} + 2y\hat{j}
$$

$$
(x_1, y_1) = (1, 1) - 0.1 (2, 2)
$$
$$
= (0.8, 0.8)
$$

$$
(x_2, y_2) = (0.8, 0.8) - 0.1 (1.6, 1.6) = (0.64, 0.64)
$$

$$
(x_3, y_3) = (0.512, 0.512)
$$

Q. Minimize the fn $f(x, y) = (x-2)^2 + (y+3)^2$ using steepest descent method to find the minimum value for the fn. starting from the point $(x_0, y_0) = (0, 0)$ and the learning rate is $0.1$.

$$
\nabla f(x, y) = (2x-4)\hat{i} + (2y+6)\hat{j}
$$

$$
(x_1, y_1) = (0, 0) - 0.1 (2x-4, 2y+6)
$$
$$
= (0, 0) - 0.1 (-4, 6)
$$
$$
= (0, 0) - (-0.4, 0.6)
$$
$$
= (0.4, -0.6)
$$

$$
(x_2, y_2) = (0.4, -0.6) - 0.1 (0.72, -1.08)
$$

---

<!-- page 24 | Objective function (cont.) -->

Q. Maximize $f = 5x_1 + 25x_2$, Subject to the constraints $x_1 - 3x_2 \ge -6$, $x_1 + x_2 \le 6$, $x_1, x_2 \ge 0$. Solve this eqn graphically.

$f = 5x_1 + 25x_2$

$$
\begin{aligned}
x_1 - 3x_2 &\ge -6 \\
x_1 - 3x_2 - 6 &= 0 \\
x_1 = 0 \Rightarrow -3x_2 &= 6 \quad (0, -2) \\
x_2 &= -2 \\
x_2 = 0 \Rightarrow x_1 &= 6 \quad (6, 0)
\end{aligned}
$$

$$
\begin{aligned}
x_1 + x_2 &\le 6 \\
x_1 + x_2 - 6 &= 0 \\
x_1 = 0 \Rightarrow x_2 &= 6 \quad (0, 6) \\
x_2 = 0 \Rightarrow x_1 &= 6 \quad (6, 0)
\end{aligned}
$$

In $2^{\text{nd}}$ case: for the bounding region direction, upwards, both $x$ and $y$ should be +ve. If any of the coordinate is negative, should put values and check if its true and direction will be downwards.

![Graphical method of linear programming showing feasible region bounded by points A, B, C, D](/notes/cse/s1/maths/module-4/lpp-graph-5.webp)

$A(0,0)$, $B(6,0)$, $C(3,3)$,
$D(0,2)$

$f = 5x_1 + 25x_2$.

$(0,0) \Rightarrow f = 0$

$(6,0) \Rightarrow f = 30$

$(3,3) \Rightarrow f = 15 + 75 = 90$

$(0,2) \Rightarrow f = 50$

Maximum value = $90$ at $x$ $(3,3)$

---

<!-- page 25 | Objective function (cont.) -->

A furniture manufacturer makes two product-chairs and table with the help of machines $A$ and $B$. A chair requires $2$ hours on machine $A$, $6$ hours on machine $B$. A table requires $5$ hrs on mac $A$ [uncertain: machine A] and $1$ hrs on $B$. There are $16$ hrs per day available on machine $A$ and $30$ hrs on machine $B$. Profit gain by the manufacturers from a chair and a table is $2$ and $10$ respectively. Formulate this prob. prob. as a linear programming prob to maximize the total profit of the manufacturers. Also using graphical method to solve this LPP.

Let $x_1$ and $x_2$ be the units.

$$
\text{maximize } z = 2x_1 + 10x_2
$$

Subject constraint to:
$$
\begin{aligned}
2x_1 + 5x_2 &\le 16 &\to \text{machine } A \\
6x_1 + x_2 &\le 30 &\to \text{machine } B \\
x_1, x_2 &\ge 0 .
\end{aligned}
$$

$$
\begin{array}{c|c}
x_1 & x_2 \ \hline
0 & 16/5 \\
8 & 0
\end{array} \quad \begin{array}{c|c}
x_1 & x_2 \ \hline
0 & 30 \\
5 & 0
\end{array}
$$

![Graphical representation of linear programming problem with feasible region and constraint lines](/notes/cse/s1/maths/module-4/lpp-graph-6.webp)

$$
\begin{aligned}
A(0, 0) & \\
B(5, 0) & \\
C(4.78, 1.28) & \\
D(0, 16/5) &
\end{aligned}
$$

$$
\begin{aligned}
2x_1 + 5x_2 &= 16 \\
6x_1 + x_2 &= 30 \\
\hline
30x_1 + 25x_2 &= 150 \\
2x_1 + 5x_2 &= 16 \\
\hline
28x_1 &= 134 \\
x_1 &= 4.78
\end{aligned}
$$

$$
\begin{aligned}
\Rightarrow 2x_1 + 5x_2 &= 16 \\
5x_2 &= 16 - 9.56 \ 
x_2 &= \frac{6.44}{5} \\
x_2 &= 1.288
\end{aligned}
$$

$$
z = 2x_1 + 10x_2
$$

$$
\begin{aligned}
A(0,0) &= 0 \\
B(5,0) &= 10 \ 
C(4.78, 1.28) &= 2 \times 4.78 + 10 \times 1.28 \\
&= 9.56 + 12.8 \\
&= 22.36 \\
D(0, 16/5) &= 2 \times \frac{16}{5} = \frac{32}{5} = 32 \quad \text{[uncertain: calculation]}
\end{aligned}
$$

Max. value is $32$ at $(0, 16/5)$

---

<!-- page 26 | Study diagrams -->

# Study diagrams

These additional diagrams were created as learning aids by three parallel ImageGen subagents. The graphical maximization figure is conceptual; consult the worked examples and equations in the notes for exact values.

### Feasible-region diagram for x1 + 2x2 <= 10 and 3x1 + x2 <= 15, showing the labeled corner points

![Feasible-region diagram for x1 + 2x2 <= 10 and 3x1 + x2 <= 15, showing the labeled corner points.](/notes/cse/s1/maths/module-4/feasible-region.webp)

### Half-plane diagram illustrating solid and dashed inequality boundaries, test points, and overlap of constraints

![Half-plane diagram illustrating solid and dashed inequality boundaries, test points, and overlap of constraints.](/notes/cse/s1/maths/module-4/half-planes.webp)

### Conceptual graphical maximization diagram showing the feasible region, objective-function lines, increasing direction, and an optimal corner

![Conceptual graphical maximization diagram showing the feasible region, objective-function lines, increasing direction, and an optimal corner. Schematic, not a precise plot.](/notes/cse/s1/maths/module-4/graphical-method.webp)
