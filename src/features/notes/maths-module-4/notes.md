<!-- page 1 | Start here -->

# Module 4 at a glance

Modules 2 and 3 used derivatives to describe functions. Module 4 uses them, and a little geometry, to **make the best choice**: the largest profit, the smallest cost, the shortest distance.

1. **Lagrange multipliers.** Find the maximum or minimum of $f(x,y)$ when $x$ and $y$ are tied together by a condition such as $x^2+y^2=1$. One condition (constraint) or two.
2. **Linear programming.** Optimise a *linear* objective such as $z=3x_1+5x_2$ when the variables must satisfy several *linear inequalities*. Formulate word problems, then solve them by the **graphical method**.
3. **Gradient descent (steepest descent).** A step-by-step numerical method that walks downhill to a minimum, using the gradient from Module 3.

## What you will be able to do

- Set up the Lagrange function $L=f+\lambda g$ and solve the system $\nabla L=0$.
- Find the closest point on a plane to the origin, the largest area for a fixed perimeter, and similar problems.
- Handle two constraints with two multipliers $\lambda$ and $\mu$.
- Translate a word problem into a linear programming problem (LPP).
- Draw the feasible region of a two-variable LPP, find its corner points and pick the optimal one.
- Recognise infeasible, unbounded and multiple-optimum problems.
- Carry out gradient descent iterations by hand.

## How to use these notes

- Every topic has the same shape: **idea → method → worked examples → common mistakes.**
- Try each worked example yourself before reading the solution.
- Green boxes hold key ideas. Amber boxes marked **Watch out** hold the mistakes that cost marks. Boxes marked **Note on the source** record where the handwritten class notes were corrected.
- The last page has practice questions with answers and a formula sheet.

## Where each topic sits

| Part | Topics |
| --- | --- |
| Lagrange multipliers | One constraint, applications in three variables, two constraints |
| Linear programming | Terms and general form, formulation, graphical method, special cases |
| Numerical optimisation | Gradient descent |

> **Prerequisites.** Partial derivatives and the gradient (Modules 2 and 3), solving simultaneous linear equations, and plotting straight lines from their intercepts.

---

<!-- page 2 | Lagrange multipliers -->

# Lagrange multipliers

## The idea

In Module 3 we found extreme values of $f(x,y)$ with $x$ and $y$ free to move anywhere. Often they are **not** free: a fence of fixed length, a point that must stay on a circle, a budget that must be spent. Such a condition is a **constraint**, written

$$
g(x,y)=0
$$

We want the largest or smallest value of $f$ **among the points that satisfy the constraint**.

> **Key idea.** At a constrained maximum or minimum, the level curve of $f$ just touches the constraint curve $g=0$. Touching curves have parallel normals, so $\nabla f$ and $\nabla g$ are parallel: $\nabla f=-\lambda\nabla g$ for some number $\lambda$, the **Lagrange multiplier**.

## Method

1. Write the function $f(x,y)$ and the constraint in the form $g(x,y)=0$.
2. Build the **Lagrange function**

$$
L(x,y,\lambda)=f(x,y)+\lambda\,g(x,y)
$$

3. Set all its partial derivatives to zero:

$$
\frac{\partial L}{\partial x}=0,\qquad\frac{\partial L}{\partial y}=0,\qquad\frac{\partial L}{\partial\lambda}=0
$$

That is,

$$
\begin{cases}
f_x+\lambda g_x=0\\
f_y+\lambda g_y=0\\
g(x,y)=0
\end{cases}
$$

The third equation is just the constraint again.

4. Solve for $x$, $y$ (and $\lambda$). The solutions are the **critical points**.
5. Evaluate $f$ at every critical point. On a closed, bounded constraint curve (a circle, an ellipse) the largest value is the maximum and the smallest is the minimum.

> **Solving tip.** The usual trick: solve the first two equations for $\lambda$, set the two expressions equal (this eliminates $\lambda$), and substitute the resulting relation between $x$ and $y$ into the constraint.

## First example

**Example 1.** Find the extreme value of $f(x,y)=x^2+y^2$ subject to $x+y=1$.

Here $g(x,y)=x+y-1=0$ and

$$
L(x,y,\lambda)=x^2+y^2+\lambda(x+y-1)
$$

$$
\frac{\partial L}{\partial x}=2x+\lambda=0\ \ (1)\qquad
\frac{\partial L}{\partial y}=2y+\lambda=0\ \ (2)\qquad
\frac{\partial L}{\partial\lambda}=x+y-1=0\ \ (3)
$$

From (1) and (2), $\lambda=-2x=-2y$, so $x=y$. Substituting into (3): $2x=1$, so

$$
x=y=\tfrac12,\qquad f\!\left(\tfrac12,\tfrac12\right)=\tfrac14+\tfrac14=\mathbf{\tfrac12}
$$

This is the **minimum**. $x^2+y^2$ is the squared distance from the origin, and $\left(\tfrac12,\tfrac12\right)$ is the point of the line $x+y=1$ nearest the origin.

> **Note on the source.** The class notes asked to "maximize" $x^2+y^2$ on $x+y=1$. There is no maximum: points of the line far from the origin make $x^2+y^2$ as large as you like. The single critical point $\left(\tfrac12,\tfrac12\right)$ gives the **minimum** value $\tfrac12$.

> **Watch out.** The Lagrange method finds *candidates*. Decide whether each is a maximum or a minimum by comparing values, and remember that on an unbounded constraint (a line, a plane) one of the two may not exist.

---

<!-- page 3 | Lagrange multipliers: worked examples -->

# Lagrange multipliers: worked examples

**Example 1.** Find the maximum and minimum of $f(x,y)=xy$ subject to $x^2+y^2=1$.

$$
L=xy+\lambda(x^2+y^2-1)
$$

$$
L_x=y+2\lambda x=0\ \ (1)\qquad L_y=x+2\lambda y=0\ \ (2)\qquad L_\lambda=x^2+y^2-1=0\ \ (3)
$$

From (1), $\lambda=-\dfrac{y}{2x}$; from (2), $\lambda=-\dfrac{x}{2y}$. Equating, $y^2=x^2$. Then (3) gives $2x^2=1$, so $x=\pm\dfrac1{\sqrt2}$, $y=\pm\dfrac1{\sqrt2}$: four critical points.

| Point | $f=xy$ |
| --- | --- |
| $\left(\frac1{\sqrt2},\frac1{\sqrt2}\right)$, $\left(-\frac1{\sqrt2},-\frac1{\sqrt2}\right)$ | $\tfrac12$ |
| $\left(\frac1{\sqrt2},-\frac1{\sqrt2}\right)$, $\left(-\frac1{\sqrt2},\frac1{\sqrt2}\right)$ | $-\tfrac12$ |

**Maximum $\tfrac12$** at the first pair, **minimum $-\tfrac12$** at the second pair.

**Example 2.** Maximise $f(x,y)=xy$ subject to $x^2+4y^2=4$.

$$
L=xy+\lambda(x^2+4y^2-4)
$$

$$
L_x=y+2\lambda x=0\ \ (1)\qquad L_y=x+8\lambda y=0\ \ (2)\qquad L_\lambda=x^2+4y^2-4=0\ \ (3)
$$

From (1), $\lambda=-\dfrac{y}{2x}$; from (2), $\lambda=-\dfrac{x}{8y}$. Equating and cross-multiplying:

$$
8y^2=2x^2\ \Rightarrow\ x^2=4y^2\ \Rightarrow\ x=\pm2y
$$

Substitute $x^2=4y^2$ into (3): $4y^2+4y^2=4$, so $y^2=\tfrac12$ and $y=\pm\dfrac1{\sqrt2}$, $x=\pm\sqrt2$.

| Point | $f=xy$ |
| --- | --- |
| $\left(\sqrt2,\frac1{\sqrt2}\right)$, $\left(-\sqrt2,-\frac1{\sqrt2}\right)$ | $1$ |
| $\left(\sqrt2,-\frac1{\sqrt2}\right)$, $\left(-\sqrt2,\frac1{\sqrt2}\right)$ | $-1$ |

The **maximum is $1$** at $\left(\sqrt2,\tfrac1{\sqrt2}\right)$ and $\left(-\sqrt2,-\tfrac1{\sqrt2}\right)$.

> **Note on the source.** The class notes went from $8y^2=2x^2$ to "$y=x/4$", taking a square root wrongly (it should be $x=\pm2y$), and then evaluated $xy$ at $\left(\frac4{\sqrt5},\frac1{\sqrt5}\right)$ by **adding** the coordinates, getting $\sqrt5$. That point does lie on the ellipse, but $xy$ there is only $\frac45$. The correct maximum is $1$.

**Example 3.** Find the extreme values of $f(x,y)=xy$ subject to $x^2+y^2=10$.

Exactly as in Example 1: $L_x=y+2\lambda x=0$ and $L_y=x+2\lambda y=0$ give $x^2=y^2$, and the constraint gives $2x^2=10$, so $x=\pm\sqrt5$, $y=\pm\sqrt5$.

| Point | $f=xy$ |
| --- | --- |
| $(\sqrt5,\sqrt5)$, $(-\sqrt5,-\sqrt5)$ | $5$ |
| $(\sqrt5,-\sqrt5)$, $(-\sqrt5,\sqrt5)$ | $-5$ |

**Maximum $5$**, **minimum $-5$**.

> **Note on the source.** One line of the handwritten table wrote $f(-\sqrt5,\sqrt5)=5$. It is $-5$; the final conclusion in the notes was right.

**Example 4.** Find the maximum and minimum of $f(x,y)=3x+4y$ on the circle $x^2+y^2=1$.

$$
L=3x+4y+\lambda(x^2+y^2-1)
$$

$$
L_x=3+2\lambda x=0\ \Rightarrow\ x=-\frac{3}{2\lambda}\qquad L_y=4+2\lambda y=0\ \Rightarrow\ y=-\frac{4}{2\lambda}
$$

Substitute into the constraint:

$$
\frac{9}{4\lambda^2}+\frac{16}{4\lambda^2}=1\ \Rightarrow\ \frac{25}{4\lambda^2}=1\ \Rightarrow\ \lambda=\pm\frac52
$$

- $\lambda=-\tfrac52$: $x=\tfrac35$, $y=\tfrac45$, and $f=\tfrac95+\tfrac{16}5=\mathbf{5}$ (maximum).
- $\lambda=\tfrac52$: $x=-\tfrac35$, $y=-\tfrac45$, and $f=-\tfrac95-\tfrac{16}5=\mathbf{-5}$ (minimum).

> **Note on the source.** The page with the last line of this example was blank in the transcription after the value $-5$; the maximum $5$ at $\left(\tfrac35,\tfrac45\right)$ is completed here.

> **Watch out.** When you divide by $x$ or $y$ to isolate $\lambda$, you silently assume they are non-zero. Check separately whether $x=0$ or $y=0$ could satisfy the equations (in these examples it cannot, because then the other variable would also be $0$, which is not on the curve).

---

<!-- page 4 | Lagrange multipliers: applications -->

# Lagrange multipliers: applications

The method works the same way with three variables: $L=f(x,y,z)+\lambda g(x,y,z)$ and four equations $L_x=L_y=L_z=L_\lambda=0$.

**Example 1. Closest point on a plane.** Find the point $P(x,y,z)$ on the plane $2x+y-z-5=0$ that is closest to the origin.

The distance is $d=\sqrt{x^2+y^2+z^2}$. Minimising $d$ is the same as minimising $d^2$, which has no square root, so take

$$
f(x,y,z)=x^2+y^2+z^2,\qquad g(x,y,z)=2x+y-z-5=0
$$

$$
L=x^2+y^2+z^2+\lambda(2x+y-z-5)
$$

$$
L_x=2x+2\lambda=0\Rightarrow x=-\lambda\qquad L_y=2y+\lambda=0\Rightarrow y=-\frac\lambda2\qquad L_z=2z-\lambda=0\Rightarrow z=\frac\lambda2
$$

Substitute into the plane:

$$
2(-\lambda)-\frac\lambda2-\frac\lambda2-5=0\ \Rightarrow\ -3\lambda=5\ \Rightarrow\ \lambda=-\frac53
$$

so

$$
P=\left(\frac53,\ \frac56,\ -\frac56\right),\qquad d=\sqrt{\frac{25}9+\frac{25}{36}+\frac{25}{36}}=\sqrt{\frac{25}{6}}=\frac{5}{\sqrt6}\approx2.04
$$

*Check.* The distance from the origin to $ax+by+cz=k$ is $\dfrac{|k|}{\sqrt{a^2+b^2+c^2}}=\dfrac{5}{\sqrt6}$. $\checkmark$

> **Note on the source.** The notes wrote "$x=-\lambda/2$" from $2x+2\lambda=0$; it should be $x=-\lambda$. The next lines actually used $x=-\lambda$, so the final point $\left(\tfrac53,\tfrac56,-\tfrac56\right)$ is correct.

**Example 2.** Find the minimum of $f(x,y,z)=x^2+y^2+z^2$ subject to $x+y+z=9$.

$$
L=x^2+y^2+z^2+\lambda(x+y+z-9)
$$

$L_x=2x+\lambda=0$, $L_y=2y+\lambda=0$, $L_z=2z+\lambda=0$ give $x=y=z=-\dfrac\lambda2$. The constraint gives $3x=9$, so $x=y=z=3$ and $\lambda=-6$:

$$
f(3,3,3)=9+9+9=\mathbf{27}
$$

> **Note on the source.** The statement of this example was lost in the transcription; only the working "$\lambda=-6$, $x=y=z=3$, $f=27$" survives. The constraint $x+y+z=9$ is the one that produces exactly that working.

**Example 3. Largest rectangle.** A rectangle has perimeter $20\ \text{m}$. Find the dimensions that maximise its area.

Let the length be $x$ and the breadth $y$. Maximise $f=xy$ subject to $2(x+y)=20$, that is $g=x+y-10=0$.

$$
L=xy+\lambda(x+y-10)
$$

$$
L_x=y+\lambda=0,\qquad L_y=x+\lambda=0\ \Rightarrow\ x=y=-\lambda
$$

The constraint gives $-2\lambda=10$, so $\lambda=-5$ and

$$
x=y=5\ \text{m},\qquad\text{area}=25\ \text{m}^2
$$

The best rectangle is a **square**.

> **Note on the source.** One line of the notes read "$x-x-10=0$"; it should be $x+x-10=0$ (the next line, $-\lambda-\lambda-10=0$, is right).

> **Watch out.** When the quantity to optimise is a distance, minimise $d^2$ instead of $d$. The square root only makes the derivatives messier and does not change where the minimum is.

---

<!-- page 5 | Two constraints -->

# Lagrange multipliers with two constraints

## Method

To optimise $f(x,y,z)$ subject to **two** constraints $g(x,y,z)=0$ and $h(x,y,z)=0$, use one multiplier for each:

$$
L(x,y,z,\lambda,\mu)=f+\lambda g+\mu h
$$

and solve the five equations

$$
L_x=0,\quad L_y=0,\quad L_z=0,\quad L_\lambda=0,\quad L_\mu=0
$$

The last two are the constraints themselves.

> **Key idea.** Each constraint removes one degree of freedom. In three variables with two constraints, the allowed points form a **curve** (usually a line, the intersection of two planes), and we optimise $f$ along it.

## Examples

**Example 1.** Find the extreme value of $f(x,y)=x^2+y^2$ subject to $x+y=1$ and $x-y=1$.

$$
L=x^2+y^2+\lambda(x+y-1)+\mu(x-y-1)
$$

$$
L_x=2x+\lambda+\mu=0\ \ (1)\qquad L_y=2y+\lambda-\mu=0\ \ (2)
$$

$$
L_\lambda=x+y-1=0\ \ (3)\qquad L_\mu=x-y-1=0\ \ (4)
$$

Adding (3) and (4): $2x=2$, so $x=1$, and then $y=0$. From (1) and (2): $2+\lambda+\mu=0$ and $\lambda-\mu=0$, so $\lambda=\mu=-1$.

$$
f(1,0)=\mathbf{1}
$$

Two lines in the plane meet in a single point, so $(1,0)$ is the **only** point satisfying both constraints, and $1$ is the only value $f$ can take there.

**Example 2.** Find the extreme value of $f(x,y,z)=x^2+y^2+z^2$ subject to $x+y+z=3$ and $x-y+z=1$.

$$
L=x^2+y^2+z^2+\lambda(x+y+z-3)+\mu(x-y+z-1)
$$

$$
L_x=2x+\lambda+\mu=0\ \ (1)\qquad L_y=2y+\lambda-\mu=0\ \ (2)\qquad L_z=2z+\lambda+\mu=0\ \ (3)
$$

$$
L_\lambda=x+y+z-3=0\ \ (4)\qquad L_\mu=x-y+z-1=0\ \ (5)
$$

- (4) $-$ (5): $2y-2=0$, so $y=1$.
- (1) and (3) give $2x=-(\lambda+\mu)=2z$, so $x=z$.
- (4) then gives $2x+1=3$, so $x=z=1$.

The critical point is $(1,1,1)$ with

$$
f(1,1,1)=\mathbf{3}
$$

This is the **minimum**: the two planes meet in a line, and $(1,1,1)$ is the point of that line nearest the origin. There is no maximum, since the line runs off to infinity.

**Example 3.** Find the extremum of $f(x,y,z)=x^2+y^2+z^2$ subject to $x+y+z=1$ and $x-y=0$.

$$
L=x^2+y^2+z^2+\lambda(x+y+z-1)+\mu(x-y)
$$

$$
L_x=2x+\lambda+\mu=0\ \ (1)\qquad L_y=2y+\lambda-\mu=0\ \ (2)\qquad L_z=2z+\lambda=0\ \ (3)
$$

$$
L_\lambda=x+y+z-1=0\ \ (4)\qquad L_\mu=x-y=0\ \ (5)
$$

- (5): $x=y$.
- (1) $-$ (2): $2(x-y)+2\mu=0$, so $\mu=0$.
- Then (1) and (3) give $2x=-\lambda=2z$, so $x=z$.
- (4): $3x=1$, so $x=y=z=\tfrac13$.

$$
f\!\left(\tfrac13,\tfrac13,\tfrac13\right)=3\cdot\tfrac19=\mathbf{\tfrac13}\quad\text{(minimum)}
$$

> **Note on the source.** The transcription of the page holding Examples 2 and 3 was badly garbled. The working above is reconstructed from the surviving equations, and both answers have been re-checked: $(1,1,1)$ with value $3$, and $\left(\tfrac13,\tfrac13,\tfrac13\right)$ with value $\tfrac13$.

> **Watch out.** Number your equations and say which ones you combine. With five equations it is easy to lose one, and a missing equation usually means a wrong point.

---

<!-- page 6 | Linear programming: the terms -->

# Linear programming: the terms

## The idea

A **linear programming problem (LPP)** asks for the best value of a *linear* function when the variables must obey several *linear* inequalities. It models production planning, diets, staffing, transport and many other decisions.

## The parts of an LPP

| Term | Meaning | Example |
| --- | --- | --- |
| **Decision variables** | the unknown quantities we choose; usually required to be $\ge0$ | $x_1$ = units of product 1, $x_2$ = units of product 2 |
| **Objective function** | the linear function to maximise or minimise | profit $z=3x_1+5x_2$ |
| **Constraints** | linear equations or inequalities the variables must satisfy | resources: $x_1+2x_2\le4$ |
| **Non-negativity** | the variables cannot be negative | $x_1\ge0,\ x_2\ge0$ |

Constraints come in three shapes:

$$
a_1x_1+a_2x_2\le b,\qquad a_1x_1+a_2x_2\ge b,\qquad a_1x_1+a_2x_2=b
$$

## General form

$$
\text{Maximise (or minimise)}\quad z=c_1x_1+c_2x_2+\dots+c_nx_n
$$

subject to

$$
\begin{aligned}
a_{11}x_1+a_{12}x_2+\dots+a_{1n}x_n&\le b_1\\
a_{21}x_1+a_{22}x_2+\dots+a_{2n}x_n&\le b_2\\
&\ \,\vdots\\
a_{m1}x_1+a_{m2}x_2+\dots+a_{mn}x_n&\le b_m\\
x_1,\ x_2,\ \dots,\ x_n&\ge0
\end{aligned}
$$

## Kinds of solution

- **Feasible solution:** any choice of the variables that satisfies **all** the constraints, including non-negativity. The set of all feasible solutions is the **feasible region**.
- **Basic feasible solution:** with $n$ variables and $m$ equality constraints, set $n-m$ of the variables to $0$ and solve for the rest; if the result is feasible it is a basic feasible solution. Geometrically these are the **corner points** of the feasible region.
- **Optimal solution:** a feasible solution that gives the largest (for maximise) or smallest (for minimise) value of the objective.

## Each inequality is a half-plane

A single linear inequality in two variables is satisfied on one side of its boundary line. To find which side, test a point not on the line, usually the origin: if $(0,0)$ satisfies the inequality, shade the side containing the origin; otherwise shade the other side. The feasible region is where all the shaded sides overlap.

![A linear inequality defines a half-plane; the feasible region is the overlap of the half-planes](/notes/cse/s1/maths/module-4/half-planes.webp)

> **Watch out.** "$\le$" with the origin satisfying it does not always mean "shade below". For $x_1-3x_2\ge-6$, the origin gives $0\ge-6$, which is true, so the origin's side is shaded even though the line slopes upward. Always test a point.

---

<!-- page 7 | Formulating an LPP -->

# Formulating an LPP from a word problem

## Method

1. **Name the decision variables:** what quantities does the decision-maker choose? Say what each one measures.
2. **Write the objective function:** profit, cost or number to be maximised or minimised, in terms of the variables.
3. **Write one constraint for each limited resource or requirement.** "Available" or "at most" gives $\le$; "at least" or "required" gives $\ge$.
4. **Add non-negativity:** $x_1,x_2,\dots\ge0$.

## Examples

**Example 1. Manufacturing.** A factory makes products $P_1$ and $P_2$, with profit Rs 3 and Rs 5 per unit. $P_1$ needs 1 unit of resource 1 and 2 units of resource 2; $P_2$ needs 2 units of resource 1 and 1 unit of resource 2. Only 4 units of resource 1 and 6 units of resource 2 are available. Formulate the LPP to maximise profit.

Let $x_1$, $x_2$ be the numbers of units of $P_1$ and $P_2$ produced.

$$
\text{Maximise}\quad z=3x_1+5x_2
$$

subject to

$$
\begin{aligned}
x_1+2x_2&\le4\qquad\text{(resource 1)}\\
2x_1+x_2&\le6\qquad\text{(resource 2)}\\
x_1,\ x_2&\ge0
\end{aligned}
$$

(It is solved on the practice page: the best profit is $\tfrac{34}{3}$ at $x_1=\tfrac83$, $x_2=\tfrac23$.)

**Example 2. Diet problem.** A hospital diet must provide at least 2000 calories, 50 g of protein and 300 g of carbohydrate per day, at minimum cost. Food 1 costs Rs 3 per unit and gives 500 cal, 20 g protein and 30 g carbohydrate. Food 2 costs Rs 4 per unit and gives 600 cal, 30 g protein and 40 g carbohydrate. Formulate the LPP.

Let $x_1$, $x_2$ be the units of food 1 and food 2 per day.

$$
\text{Minimise}\quad z=3x_1+4x_2
$$

subject to

$$
\begin{aligned}
500x_1+600x_2&\ge2000\qquad\text{(calories)}\\
20x_1+30x_2&\ge50\qquad\text{(protein)}\\
30x_1+40x_2&\ge300\qquad\text{(carbohydrate)}\\
x_1,\ x_2&\ge0
\end{aligned}
$$

(It is solved graphically on the "word problems" page.)

**Example 3. Staff scheduling.** A company needs at least 5 employees from 8 am to 12 noon, 3 from 12 noon to 4 pm, and 4 from 4 pm to 8 pm. Each employee works an 8-hour shift starting at 8 am, 12 noon or 4 pm. Minimise the number of employees.

Let $x_1$, $x_2$, $x_3$ be the numbers starting at 8 am, 12 noon and 4 pm. Someone starting at 8 am works 8 am to 4 pm, so covers the first two periods; someone starting at noon covers the second and third; someone starting at 4 pm covers the third.

$$
\text{Minimise}\quad z=x_1+x_2+x_3
$$

subject to

$$
\begin{aligned}
x_1&\ge5\qquad\text{(8 am to 12 noon)}\\
x_1+x_2&\ge3\qquad\text{(12 noon to 4 pm)}\\
x_2+x_3&\ge4\qquad\text{(4 pm to 8 pm)}\\
x_1,\ x_2,\ x_3&\ge0
\end{aligned}
$$

The minimum is $9$ employees, for example $x_1=5$, $x_2=0$, $x_3=4$: the first constraint forces $x_1\ge5$ and the third forces $x_2+x_3\ge4$.

> **Note on the source.** The handwritten statement said employees "can't start" at 8 am, 12 noon or 4 pm, and labelled $x_1,x_2,x_3$ by the four-hour periods. The constraints written in the notes only make sense with shifts *starting* at those times, so that reading is used here.

> **Watch out.** Write down what each variable means, with units. Most formulation mistakes come from a variable whose meaning drifted halfway through.

---

<!-- page 8 | The graphical method -->

# The graphical method

## The idea

With two decision variables, the feasible region can be drawn. For a linear objective, the lines $z=\text{constant}$ are parallel; sliding them in the direction that increases $z$, the last point of the region they touch is a **corner**.

![The objective lines z = constant slide across the feasible region; the optimum is at a corner](/notes/cse/s1/maths/module-4/graphical-method.webp)

> **Key idea (corner-point theorem).** If an LPP has an optimal solution, then one occurs at a **corner point** (vertex) of the feasible region. So we only need to evaluate $z$ at the corners.

## Method

1. Replace each inequality by an equation and draw the line, using its two intercepts (put $x_1=0$, then $x_2=0$).
2. Shade the side of each line that satisfies the inequality (test the origin). Include $x_1,x_2\ge0$.
3. The overlap is the **feasible region**. List its **corner points**; find each one by solving the two equations of the lines that meet there.
4. Evaluate $z$ at every corner. The largest (or smallest) value is the optimum.

## Examples

**Example 1.** Maximise $z=3x_1+4x_2$ subject to $4x_1+2x_2\le80$, $2x_1+5x_2\le180$, $x_1,x_2\ge0$.

Intercepts: $4x_1+2x_2=80$ passes through $(20,0)$ and $(0,40)$; $2x_1+5x_2=180$ passes through $(90,0)$ and $(0,36)$.

The two lines meet where $4x_1+2x_2=80$ and $2x_1+5x_2=180$. Doubling the second, $4x_1+10x_2=360$; subtracting the first, $8x_2=280$, so $x_2=35$ and $x_1=\tfrac52$.

```jsxgraph
{
  "boundingBox": [-4, 46, 30, -4],
  "axis": true,
  "points": [
    { "id": "A", "x": 0, "y": 0, "label": "A(0,0)" },
    { "id": "B", "x": 20, "y": 0, "label": "B(20,0)" },
    { "id": "C", "x": 2.5, "y": 35, "label": "C(2.5,35)" },
    { "id": "D", "x": 0, "y": 36, "label": "D" },
    { "id": "P", "x": 0, "y": 40, "label": "" },
    { "id": "Q", "x": 10, "y": 32, "label": "2x₁+5x₂=180" }
  ],
  "polygons": [{ "points": ["A", "B", "C", "D"] }],
  "segments": [
    { "from": "P", "to": "B" },
    { "from": "D", "to": "Q" }
  ],
  "circles": [],
  "functions": [],
  "title": "Feasible region ABCD; the steep line is 4x₁ + 2x₂ = 80"
}
```

| Corner | $z=3x_1+4x_2$ |
| --- | --- |
| $A(0,0)$ | $0$ |
| $B(20,0)$ | $60$ |
| $C\left(\tfrac52,35\right)$ | $7.5+140=147.5$ |
| $D(0,36)$ | $144$ |

**Maximum $z=147.5$** at $x_1=2.5$, $x_2=35$.

**Example 2.** Maximise $z=3x+2y$ subject to $x+2y\le10$, $3x+y\le15$, $x,y\ge0$.

Intercepts: $x+2y=10$ through $(10,0)$ and $(0,5)$; $3x+y=15$ through $(5,0)$ and $(0,15)$. They meet where $6x+2y=30$ and $x+2y=10$: subtracting, $5x=20$, so $x=4$, $y=3$.

![Feasible region for x + 2y ≤ 10 and 3x + y ≤ 15 with corners (0,0), (5,0), (4,3), (0,5)](/notes/cse/s1/maths/module-4/feasible-region.webp)

| Corner | $z=3x+2y$ |
| --- | --- |
| $(0,0)$ | $0$ |
| $(5,0)$ | $15$ |
| $(4,3)$ | $18$ |
| $(0,5)$ | $10$ |

**Maximum $z=18$** at $(4,3)$.

> **Watch out.** An intercept of a constraint line is a corner **only if it satisfies every other constraint**. In Example 2, $(10,0)$ is on $x+2y=10$ but breaks $3x+y\le15$, so it is not a corner.

---

<!-- page 9 | Graphical method: more examples -->

# Graphical method: more examples

**Example 1.** Maximise $z=15x_1+10x_2$ subject to $4x_1+6x_2\le360$, $3x_1\le180$, $5x_2\le500$, $x_1,x_2\ge0$.

The constraints say $4x_1+6x_2\le360$ (through $(90,0)$ and $(0,60)$), $x_1\le60$, and $x_2\le100$. The last is never the binding one, because $4x_1+6x_2\le360$ already forces $x_2\le60$.

The line $x_1=60$ meets $4x_1+6x_2=360$ at $240+6x_2=360$, so $x_2=20$.

```jsxgraph
{
  "boundingBox": [-8, 75, 100, -8],
  "axis": true,
  "points": [
    { "id": "A", "x": 0, "y": 0, "label": "A(0,0)" },
    { "id": "B", "x": 60, "y": 0, "label": "B(60,0)" },
    { "id": "C", "x": 60, "y": 20, "label": "C(60,20)" },
    { "id": "D", "x": 0, "y": 60, "label": "D(0,60)" },
    { "id": "P", "x": 90, "y": 0, "label": "(90,0)" },
    { "id": "Q", "x": 60, "y": 70, "label": "x₁ = 60" }
  ],
  "polygons": [{ "points": ["A", "B", "C", "D"] }],
  "segments": [
    { "from": "D", "to": "P" },
    { "from": "B", "to": "Q" }
  ],
  "circles": [],
  "functions": [],
  "title": "Feasible region ABCD for 4x₁ + 6x₂ ≤ 360 and x₁ ≤ 60"
}
```

| Corner | $z=15x_1+10x_2$ |
| --- | --- |
| $(0,0)$ | $0$ |
| $(60,0)$ | $900$ |
| $(60,20)$ | $900+200=1100$ |
| $(0,60)$ | $600$ |

**Maximum $z=1100$** at $x_1=60$, $x_2=20$.

> **Note on the source.** The class notes listed the corners as $(0,0)$, $(90,0)$, $(60,20)$, $(40,30)$, $(0,40)$ and picked out $1350$ at $(90,0)$. But $(90,0)$ breaks $3x_1\le180$, the point $(40,30)$ is not where any two constraint lines meet, and $(0,40)$ is not on any boundary. The correct corners are those in the table, and the maximum is $1100$.

**Example 2.** Maximise $z=2x+3y$ subject to $x+y\le30$, $3\le y\le12$, $x-y\ge0$, $0\le x\le20$.

The region lies between the horizontal lines $y=3$ and $y=12$, to the right of the line $y=x$ (because $x\ge y$), left of $x=20$, and below $x+y=30$. Its corners:

- $y=3$ meets $y=x$ at $A(3,3)$ and meets $x=20$ at $B(20,3)$.
- $x=20$ meets $x+y=30$ at $C(20,10)$.
- $x+y=30$ meets $y=12$ at $D(18,12)$.
- $y=12$ meets $y=x$ at $E(12,12)$.

```jsxgraph
{
  "boundingBox": [-2, 33, 33, -2],
  "axis": true,
  "points": [
    { "id": "A", "x": 3, "y": 3, "label": "A" },
    { "id": "B", "x": 20, "y": 3, "label": "B" },
    { "id": "C", "x": 20, "y": 10, "label": "C" },
    { "id": "D", "x": 18, "y": 12, "label": "D" },
    { "id": "E", "x": 12, "y": 12, "label": "E" },
    { "id": "L1", "x": 0, "y": 30, "label": "x+y=30" },
    { "id": "L2", "x": 30, "y": 0, "label": "" },
    { "id": "M1", "x": 0, "y": 0, "label": "" },
    { "id": "M2", "x": 28, "y": 28, "label": "y = x" },
    { "id": "V1", "x": 20, "y": 0, "label": "" },
    { "id": "V2", "x": 20, "y": 30, "label": "x = 20" }
  ],
  "polygons": [{ "points": ["A", "B", "C", "D", "E"] }],
  "segments": [
    { "from": "L1", "to": "L2" },
    { "from": "M1", "to": "M2" },
    { "from": "V1", "to": "V2" },
    { "from": "A", "to": "B" },
    { "from": "E", "to": "D" }
  ],
  "circles": [],
  "functions": [],
  "title": "Feasible region ABCDE between y = 3 and y = 12"
}
```

| Corner | $z=2x+3y$ |
| --- | --- |
| $A(3,3)$ | $15$ |
| $B(20,3)$ | $49$ |
| $C(20,10)$ | $70$ |
| $D(18,12)$ | $72$ |
| $E(12,12)$ | $60$ |

**Maximum $z=72$** at $(18,12)$. (The minimum, if asked, is $15$ at $(3,3)$.)

> **Note on the source.** The notes used $E(3,12)$ as a corner, with $z=42$. That point breaks $x\ge y$; the correct corner is $E(12,12)$ with $z=60$. The maximum is unaffected.

**Example 3.** Maximise $f=5x_1+25x_2$ subject to $x_1-3x_2\ge-6$, $x_1+x_2\le6$, $x_1,x_2\ge0$.

The line $x_1-3x_2=-6$ passes through $(0,2)$ and $(-6,0)$, and the origin satisfies $0\ge-6$, so the feasible side is **below** this rising line. The line $x_1+x_2=6$ passes through $(6,0)$ and $(0,6)$. The two lines meet where $x_1=3x_2-6$ and $x_1+x_2=6$: $4x_2=12$, so $x_2=3$, $x_1=3$.

```jsxgraph
{
  "boundingBox": [-1, 7, 7.5, -1],
  "axis": true,
  "points": [
    { "id": "A", "x": 0, "y": 0, "label": "A(0,0)" },
    { "id": "B", "x": 6, "y": 0, "label": "B(6,0)" },
    { "id": "C", "x": 3, "y": 3, "label": "C(3,3)" },
    { "id": "D", "x": 0, "y": 2, "label": "D(0,2)" },
    { "id": "P", "x": 0, "y": 6, "label": "(0,6)" },
    { "id": "Q", "x": 4.5, "y": 3.5, "label": "x₁ − 3x₂ = −6" }
  ],
  "polygons": [{ "points": ["A", "B", "C", "D"] }],
  "segments": [
    { "from": "P", "to": "B" },
    { "from": "D", "to": "Q" }
  ],
  "circles": [],
  "functions": [],
  "title": "Feasible region ABCD"
}
```

| Corner | $f=5x_1+25x_2$ |
| --- | --- |
| $(0,0)$ | $0$ |
| $(6,0)$ | $30$ |
| $(3,3)$ | $15+75=90$ |
| $(0,2)$ | $50$ |

**Maximum $f=90$** at $(3,3)$.

> **Note on the source.** The notes gave the $x_2$-intercept of $x_1-3x_2=-6$ as $(0,-2)$; it is $(0,2)$ (put $x_1=0$: $-3x_2=-6$). The corner $D(0,2)$ in the notes was right.

---

<!-- page 10 | Word problems solved graphically -->

# Word problems solved graphically

**Example 1. Chairs and tables.** A manufacturer makes chairs and tables on machines $A$ and $B$. A chair needs 2 hours on $A$ and 6 hours on $B$; a table needs 5 hours on $A$ and 1 hour on $B$. Machine $A$ is available 16 hours a day and machine $B$ 30 hours. The profit is Rs 2 per chair and Rs 10 per table. Formulate and solve the LPP.

Let $x_1$ chairs and $x_2$ tables be made per day.

$$
\text{Maximise}\quad z=2x_1+10x_2
$$

subject to

$$
\begin{aligned}
2x_1+5x_2&\le16\qquad\text{(machine A)}\\
6x_1+x_2&\le30\qquad\text{(machine B)}\\
x_1,\ x_2&\ge0
\end{aligned}
$$

Intercepts: $2x_1+5x_2=16$ through $(8,0)$ and $\left(0,\tfrac{16}5\right)$; $6x_1+x_2=30$ through $(5,0)$ and $(0,30)$.

Intersection: from the second, $x_2=30-6x_1$; then $2x_1+150-30x_1=16$, so $x_1=\tfrac{134}{28}=\tfrac{67}{14}\approx4.79$ and $x_2=\tfrac97\approx1.29$.

```jsxgraph
{
  "boundingBox": [-0.8, 5.5, 9, -0.8],
  "axis": true,
  "points": [
    { "id": "A", "x": 0, "y": 0, "label": "A(0,0)" },
    { "id": "B", "x": 5, "y": 0, "label": "B(5,0)" },
    { "id": "C", "x": 4.786, "y": 1.286, "label": "C(4.79,1.29)" },
    { "id": "D", "x": 0, "y": 3.2, "label": "D(0,3.2)" },
    { "id": "P", "x": 8, "y": 0, "label": "(8,0)" },
    { "id": "Q", "x": 4.25, "y": 4.5, "label": "6x₁+x₂=30" }
  ],
  "polygons": [{ "points": ["A", "B", "C", "D"] }],
  "segments": [
    { "from": "D", "to": "P" },
    { "from": "B", "to": "Q" }
  ],
  "circles": [],
  "functions": [],
  "title": "Feasible region ABCD; the shallow line is 2x₁ + 5x₂ = 16"
}
```

| Corner | $z=2x_1+10x_2$ |
| --- | --- |
| $(0,0)$ | $0$ |
| $(5,0)$ | $10$ |
| $\left(\tfrac{67}{14},\tfrac97\right)$ | $\tfrac{67}{7}+\tfrac{90}{7}=\tfrac{157}7\approx22.43$ |
| $\left(0,\tfrac{16}5\right)$ | $10\times\tfrac{16}5=32$ |

**Maximum profit Rs 32**, making no chairs and $3.2$ tables a day (over five days, 16 tables).

> **Note on the source.** The notes wrote the value at $D$ as "$2\times\frac{16}{5}=\frac{32}{5}=32$". The right working is $z=2(0)+10\left(\tfrac{16}5\right)=32$. They also rounded $C$ to $(4.78,1.28)$ with $z=22.36$; the exact value is $\tfrac{157}{7}\approx22.43$. The conclusion (maximum $32$) stands.

**Example 2. The diet problem, solved.** Minimise $z=3x_1+4x_2$ subject to $500x_1+600x_2\ge2000$, $20x_1+30x_2\ge50$, $30x_1+40x_2\ge300$, $x_1,x_2\ge0$ (from the formulation page).

The carbohydrate line $30x_1+40x_2=300$ passes through $(10,0)$ and $(0,7.5)$. Every point on or above it automatically satisfies the calorie line (through $(4,0)$ and $(0,3.\overline{3})$) and the protein line (through $(2.5,0)$ and $(0,1.\overline{6})$), which lie below it. So the feasible region is everything on or above the carbohydrate line: an **unbounded** region.

```jsxgraph
{
  "boundingBox": [-1, 10, 13, -1],
  "axis": true,
  "points": [
    { "id": "P", "x": 0, "y": 7.5, "label": "(0,7.5)" },
    { "id": "Q", "x": 10, "y": 0, "label": "(10,0)" },
    { "id": "R", "x": 18, "y": 0, "label": "" },
    { "id": "S", "x": 18, "y": 15, "label": "" },
    { "id": "T", "x": 0, "y": 15, "label": "" },
    { "id": "C1", "x": 0, "y": 3.333, "label": "calories" },
    { "id": "C2", "x": 4, "y": 0, "label": "" },
    { "id": "P1", "x": 0, "y": 1.667, "label": "protein" },
    { "id": "P2", "x": 2.5, "y": 0, "label": "" }
  ],
  "polygons": [{ "points": ["P", "Q", "R", "S", "T"] }],
  "segments": [
    { "from": "P", "to": "Q" },
    { "from": "C1", "to": "C2" },
    { "from": "P1", "to": "P2" }
  ],
  "circles": [],
  "functions": [],
  "title": "Feasible region (shaded, continuing upwards) on or above 30x₁ + 40x₂ = 300"
}
```

| Corner | $z=3x_1+4x_2$ |
| --- | --- |
| $(0,7.5)$ | $30$ |
| $(10,0)$ | $30$ |

Both corners give $30$. Notice $z=3x_1+4x_2=\tfrac1{10}(30x_1+40x_2)\ge\tfrac{300}{10}=30$ everywhere in the region, with equality along the whole carbohydrate line. So the **minimum cost is Rs 30**, reached at **every point** of the segment from $(10,0)$ to $(0,7.5)$: this LPP has **multiple optimal solutions**.

> **Watch out.** For a *minimisation* over an unbounded region, a minimum can still exist (as here), because the cost grows as you move further into the region. It is a *maximisation* over an unbounded region that may have no answer.

---

<!-- page 11 | Special cases -->

# Special cases of the graphical method

Not every LPP has a single neat answer.

| Case | What the graph shows | What to say |
| --- | --- | --- |
| **Unique optimum** | one corner gives the best value | "the optimum is $z^*$ at $(x_1,x_2)$" |
| **Multiple optima** | two adjacent corners give the same best value: the objective lines are parallel to an edge | every point of that edge is optimal (diet problem) |
| **Unbounded** | the region extends forever in the direction that improves $z$ | no finite optimum |
| **Infeasible** | the constraints have no common point: no feasible region at all | the LPP has no feasible solution |

**Example 1. An infeasible problem.** Maximise $z=6x_1-4x_2$ subject to $2x_1+4x_2\le4$, $4x_1+8x_2\ge15$, $x_1,x_2\ge0$.

Divide the constraints by 2 and 4:

$$
x_1+2x_2\le2\qquad\text{and}\qquad x_1+2x_2\ge3.75
$$

No pair $(x_1,x_2)$ can make $x_1+2x_2$ both at most $2$ and at least $3.75$. The boundary lines are **parallel** (through $(2,0)$, $(0,1)$ and through $(3.75,0)$, $(0,1.875)$): the first constraint allows only the triangle below the lower line, and the second only the region above the upper line.

```jsxgraph
{
  "boundingBox": [-0.4, 2.4, 4.4, -0.4],
  "axis": true,
  "points": [
    { "id": "O", "x": 0, "y": 0, "label": "" },
    { "id": "A", "x": 2, "y": 0, "label": "(2,0)" },
    { "id": "B", "x": 0, "y": 1, "label": "(0,1)" },
    { "id": "C", "x": 3.75, "y": 0, "label": "(3.75,0)" },
    { "id": "D", "x": 0, "y": 1.875, "label": "(0,1.875)" }
  ],
  "polygons": [{ "points": ["O", "A", "B"] }],
  "segments": [
    { "from": "A", "to": "B" },
    { "from": "C", "to": "D" }
  ],
  "circles": [],
  "functions": [],
  "title": "Shaded: 2x₁ + 4x₂ ≤ 4. The second constraint needs points above the upper line, so the regions never meet"
}
```

The LPP is **infeasible**: it has no solution.

> **Note on the source.** The class notes concluded "there is no bounded region". The accurate statement is stronger: there is **no feasible region at all**, so the problem is infeasible (not merely unbounded).

> **Watch out.** "Unbounded" and "infeasible" are different. Unbounded: feasible points exist but $z$ can be made as large as you like. Infeasible: there are no feasible points.

---

<!-- page 12 | Gradient descent -->

# Gradient descent (method of steepest descent)

## The idea

From Module 3, $\nabla f$ points in the direction in which $f$ **increases** fastest, so $-\nabla f$ points the way it **decreases** fastest. To find a minimum, start somewhere and keep taking small steps downhill.

$$
\nabla f=\left(\frac{\partial f}{\partial x},\ \frac{\partial f}{\partial y}\right)
$$

> **Update rule.** From the current point $(x_k,y_k)$,
>
> $$(x_{k+1},y_{k+1})=(x_k,y_k)-\alpha\,\nabla f(x_k,y_k)$$
>
> where $\alpha>0$ is the **step size** (also called the **learning rate**).

## Method

1. Find $\nabla f(x,y)$ as a formula.
2. Start at the given $(x_0,y_0)$.
3. At each step, evaluate $\nabla f$ at the current point, multiply by $\alpha$, and subtract.
4. Repeat for the required number of iterations, or until the steps become tiny.

Lay the work out in a table: point, gradient, new point.

## Examples

**Example 1.** Find the minimum of $f(x,y)=x^2+3y^2$ by steepest descent from $(x_0,y_0)=(6,3)$, with $\alpha=0.1$, for five iterations.

$\nabla f=(2x,\ 6y)$. Each update is

$$
x_{k+1}=x_k-0.1(2x_k)=0.8\,x_k,\qquad y_{k+1}=y_k-0.1(6y_k)=0.4\,y_k
$$

| $k$ | $(x_k,y_k)$ | $\nabla f(x_k,y_k)$ |
| --- | --- | --- |
| 0 | $(6,\ 3)$ | $(12,\ 18)$ |
| 1 | $(4.8,\ 1.2)$ | $(9.6,\ 7.2)$ |
| 2 | $(3.84,\ 0.48)$ | $(7.68,\ 2.88)$ |
| 3 | $(3.072,\ 0.192)$ | $(6.144,\ 1.152)$ |
| 4 | $(2.4576,\ 0.0768)$ | $(4.9152,\ 0.4608)$ |
| 5 | $(1.96608,\ 0.03072)$ | |

The points head towards the true minimum $(0,0)$, where $f=0$. The $y$-coordinate shrinks faster because $f$ is steeper in the $y$-direction.

> **Note on the source.** No step size was given in this question; the class notes chose $\alpha=0.1$, and that assumption is kept. One line of the notes copied $y_4$ as $0.0761$; it is $0.0768$, and $y_5=0.03072$ is correct.

**Example 2.** Minimise $f(x,y)=x^2+y^2$ from $(1,1)$ with $\alpha=0.1$, for three iterations.

$\nabla f=(2x,\ 2y)$, so each step multiplies both coordinates by $1-0.2=0.8$:

$$
(1,1)\ \to\ (0.8,\ 0.8)\ \to\ (0.64,\ 0.64)\ \to\ (0.512,\ 0.512)
$$

approaching the minimum at the origin.

> **Watch out.** Evaluate the gradient at the **current** point at every step. A common slip is to keep using $\nabla f(x_0,y_0)$, or to write the new point in place of the gradient.

---

<!-- page 13 | Gradient descent: more examples -->

# Gradient descent: more examples

**Example 1.** Minimise $f(x,y)=3x^2+4y^2$ from $(x_0,y_0)=(1,1)$ with fixed step $\alpha=0.01$, for five iterations.

$\nabla f=(6x,\ 8y)$. So $x_{k+1}=x_k-0.06x_k=0.94\,x_k$ and $y_{k+1}=y_k-0.08y_k=0.92\,y_k$.

| $k$ | $(x_k,y_k)$ | $\nabla f(x_k,y_k)$ |
| --- | --- | --- |
| 0 | $(1,\ 1)$ | $(6,\ 8)$ |
| 1 | $(0.94,\ 0.92)$ | $(5.64,\ 7.36)$ |
| 2 | $(0.8836,\ 0.8464)$ | $(5.3016,\ 6.7712)$ |
| 3 | $(0.830584,\ 0.778688)$ | $(4.983504,\ 6.229504)$ |
| 4 | $(0.780749,\ 0.716393)$ | $(4.684494,\ 5.731144)$ |
| 5 | $(0.733904,\ 0.659082)$ | |

With such a small step the progress towards $(0,0)$ is slow.

> **Note on the source.** At step 3 the notes used $4.672128$ for the $y$-component of the gradient; it is $8\times0.778688=6.229504$. That slip made $y_4$ and $y_5$ wrong ($0.73196672$ and $0.6733$ in the notes). The corrected values are in the table.

**Example 2.** Minimise $f(x,y)=(x-2)^2+(y+3)^2$ from $(0,0)$ with learning rate $0.1$.

$\nabla f=\big(2(x-2),\ 2(y+3)\big)=(2x-4,\ 2y+6)$.

| $k$ | $(x_k,y_k)$ | $\nabla f(x_k,y_k)$ |
| --- | --- | --- |
| 0 | $(0,\ 0)$ | $(-4,\ 6)$ |
| 1 | $(0.4,\ -0.6)$ | $(-3.2,\ 4.8)$ |
| 2 | $(0.72,\ -1.08)$ | $(-2.56,\ 3.84)$ |
| 3 | $(0.976,\ -1.464)$ | $(-2.048,\ 3.072)$ |
| 4 | $(1.1808,\ -1.7712)$ | |

The iterates approach the true minimum $(2,-3)$, where $f=0$. Each step closes 20 % of the remaining gap, since $x_{k+1}-2=0.8\,(x_k-2)$ and $y_{k+1}+3=0.8\,(y_k+3)$.

> **Note on the source.** The notes wrote the second step as $(0.4,-0.6)-0.1(0.72,-1.08)$, putting the *next point* where the gradient belongs. The gradient at $(0.4,-0.6)$ is $(-3.2,4.8)$, which gives the point $(0.72,-1.08)$.

> **Watch out.** The step size matters. Too small and convergence is slow (Example 1). Too large and the iterates overshoot: for $f=x^2$, any $\alpha>1$ makes $|x_k|$ grow instead of shrink.

---

<!-- page 14 | Practice and formula sheet -->

# Practice questions and formula sheet

## Practice questions

Try these without looking. Answers follow.

**A. Lagrange multipliers**

1. Find the maximum and minimum of $f(x,y)=x+y$ on the circle $x^2+y^2=8$.
2. Find the point of the line $2x+3y=13$ closest to the origin.
3. Three positive numbers add up to $12$. Use Lagrange multipliers to maximise their product.
4. Minimise $x^2+y^2+z^2$ subject to $x+y=2$ and $y+z=2$.

**B. Linear programming**

5. Solve the manufacturing problem: maximise $z=3x_1+5x_2$ subject to $x_1+2x_2\le4$, $2x_1+x_2\le6$, $x_1,x_2\ge0$.
6. Minimise $z=2x+3y$ subject to $x+y\ge6$, $x+3y\ge12$, $x,y\ge0$.
7. Show that the LPP "maximise $x+y$ subject to $x+y\le2$, $x+y\ge5$, $x,y\ge0$" has no solution.

**C. Gradient descent**

8. Take two steps of steepest descent for $f(x,y)=(x-1)^2+2y^2$ from $(0,1)$ with $\alpha=0.1$.

## Answers

1. $L_x=1+2\lambda x=0$, $L_y=1+2\lambda y=0$ give $x=y$; then $2x^2=8$. **Maximum $4$ at $(2,2)$, minimum $-4$ at $(-2,-2)$.**
2. Minimise $x^2+y^2$: $2x+2\lambda=0$, $2y+3\lambda=0$ give $x=2t$, $y=3t$; the line gives $13t=13$. **The point is $(2,3)$**, at distance $\sqrt{13}$.
3. $L=xyz+\lambda(x+y+z-12)$: $yz=xz=xy$ gives $x=y=z=4$. **Maximum product $64$.**
4. $2x+\lambda=0$, $2y+\lambda+\mu=0$, $2z+\mu=0$ give $y=x+z$; with $x+y=2$, $y+z=2$: $x=z=\tfrac23$, $y=\tfrac43$. **Minimum $\tfrac83$** at $\left(\tfrac23,\tfrac43,\tfrac23\right)$.
5. Corners $(0,0)$, $(3,0)$, $\left(\tfrac83,\tfrac23\right)$, $(0,2)$ with $z=0,\ 9,\ \tfrac{34}{3},\ 10$. **Maximum $\tfrac{34}{3}\approx11.33$ at $\left(\tfrac83,\tfrac23\right)$.**
6. The region is unbounded above, with corners $(0,6)$, $(3,3)$, $(12,0)$ and $z=18,\ 15,\ 24$. **Minimum $15$ at $(3,3)$.**
7. The constraints require $x+y\le2$ and $x+y\ge5$ at once, which is impossible: the LPP is **infeasible**.
8. $\nabla f=(2(x-1),\ 4y)$. From $(0,1)$: gradient $(-2,4)$, new point $(0.2,\ 0.6)$. Then gradient $(-1.6,\ 2.4)$, new point $\mathbf{(0.36,\ 0.36)}$. (The minimum is at $(1,0)$.)

> **Study tip.** For LPPs, make the corner table every time: corner, how you found it (which two lines), value of $z$. It makes the answer easy to check and easy to mark.

---

## Formula sheet

### Lagrange multipliers

| | |
| --- | --- |
| One constraint | $L=f+\lambda g$; solve $L_x=L_y=L_\lambda=0$ |
| Condition | $\nabla f=-\lambda\nabla g$ at the optimum |
| Three variables | add $L_z=0$ |
| Two constraints | $L=f+\lambda g+\mu h$; solve $L_x=L_y=L_z=L_\lambda=L_\mu=0$ |
| Distance problems | minimise $d^2=x^2+y^2+z^2$, not $d$ |

### Linear programming

| | |
| --- | --- |
| General form | optimise $z=\sum c_jx_j$ subject to $\sum a_{ij}x_j\le b_i$ (or $\ge$, $=$), $x_j\ge0$ |
| Feasible region | intersection of the half-planes of all constraints |
| Corner-point theorem | if an optimum exists, one occurs at a corner of the feasible region |
| Graphical method | draw lines by intercepts, test the origin, list corners, evaluate $z$ at each |
| Special cases | multiple optima, unbounded, infeasible |

### Gradient descent

$$
(x_{k+1},y_{k+1})=(x_k,y_k)-\alpha\,\nabla f(x_k,y_k),\qquad\nabla f=(f_x,\ f_y)
$$

| | |
| --- | --- |
| Direction of steepest descent | $-\nabla f$ |
| Step size (learning rate) | $\alpha>0$: small is slow, too large overshoots |
| For $f=ax^2+by^2$ | $x_{k+1}=(1-2a\alpha)x_k$, $\ y_{k+1}=(1-2b\alpha)y_k$ |
