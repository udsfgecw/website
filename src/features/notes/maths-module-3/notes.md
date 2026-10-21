<!-- page 1 | Start here -->

## Partial Derivatives and Extrema of Functions of Several Variables

Learn how to apply chain rules, evaluate relative and absolute extrema, classify critical points using the Hessian determinant, and compute directional derivatives and gradients for functions of multiple variables.

**Before you start:** Multivariable functions and partial derivatives; Basic vector algebra and dot products; Single-variable calculus and optimization.

### Your path through this module

1. **Chain Rule for Functions of Several Variables**: The chain rule relates the rate of change of a composite multivariable function to the partial derivatives of its constituent paths.
2. **Relative Extrema and Saddle Points**: The second derivative test uses the Hessian determinant to classify whether a critical point is a local minimum, maximum, or saddle point.
3. **Absolute Extrema on Closed Regions**: Absolute extrema over a closed region occur either at interior critical points or along the boundaries of the region.
4. **Gradients and Directional Derivatives**: The gradient vector points in the direction of the greatest rate of increase of a function, and its magnitude gives that maximum rate.

<!-- page 2 | Chain Rule for Functions of Several Variables -->

## Chain Rule for Functions of Several Variables

### Bridge and Objectives
You already know how to take partial derivatives of explicit functions; now you will learn how to differentiate composite multivariable functions where variables depend on parameters. The chain rule relates the rate of change of a composite multivariable function to the partial derivatives of its constituent paths.

### Chain Rule for a Function of Three Variables with a Single Parameter

Let $w = f(x, y, z)$ and let $x = x(t)$, $y = y(t)$, and $z = z(t)$ be functions of a single variable $t$. Then $w$ is a function of $t$ alone, and its total derivative with respect to $t$ is given by:

$$\frac{dw}{dt} = \frac{\partial w}{\partial x} \cdot \frac{dx}{dt} + \frac{\partial w}{\partial y} \cdot \frac{dy}{dt} + \frac{\partial w}{\partial z} \cdot \frac{dz}{dt}$$

### Chain Rule for Partial Derivatives with Multiple Intermediate Variables

If $w = f(x, y, z)$ is a function of three variables $x, y, z$, and each of these is a function of intermediate variables $u, v,$ and $m$, the partial derivatives with respect to each intermediate variable are:

$$\frac{\partial w}{\partial u} = \frac{\partial w}{\partial x} \cdot \frac{\partial x}{\partial u} + \frac{\partial w}{\partial y} \cdot \frac{\partial y}{\partial u} + \frac{\partial w}{\partial z} \cdot \frac{\partial z}{\partial u}$$

$$\frac{\partial w}{\partial v} = \frac{\partial w}{\partial x} \cdot \frac{\partial x}{\partial v} + \frac{\partial w}{\partial y} \cdot \frac{\partial y}{\partial v} + \frac{\partial w}{\partial z} \cdot \frac{\partial z}{\partial v}$$

$$\frac{\partial w}{\partial m} = \frac{\partial w}{\partial x} \cdot \frac{\partial x}{\partial m} + \frac{\partial w}{\partial y} \cdot \frac{\partial y}{\partial m} + \frac{\partial w}{\partial z} \cdot \frac{\partial z}{\partial m}$$

---

### Solved Problems

#### $Q_1$. Single-Variable Chain Rule with Algebraic and Trigonometric Paths

**Problem Statement:** Consider the function $w = f(x, y, z) = x^2 y + y z^3$ where $x = t^2, y = e^t,$ and $z = \sin t$. Find $\frac{dw}{dt}$.

**Solution:**

Given:
$$\frac{\partial w}{\partial x} = 2xy, \quad \frac{dx}{dt} = 2t$$
$$\frac{\partial w}{\partial y} = x^2 + z^3, \quad \frac{dy}{dt} = e^t$$
$$\frac{\partial w}{\partial z} = 3z^2 y, \quad \frac{dz}{dt} = \cos t$$

Applying the chain rule:
$$\frac{dw}{dt} = \frac{\partial w}{\partial x} \cdot \frac{dx}{dt} + \frac{\partial w}{\partial y} \cdot \frac{dy}{dt} + \frac{\partial w}{\partial z} \cdot \frac{dz}{dt}$$

$$= 2xy \cdot 2t + (x^2 + z^3) \cdot e^t + 3z^2 y \cdot \cos t$$

Substituting back the expressions in terms of $t$:
$$= 4 e^t t^3 + (t^4 + \sin^3 t) e^t t + 3 e^t \sin t \cos t$$

---

#### $Q_2$. Evaluating Derivatives at Specific Points

**Problem Statement:** Let $w = \sqrt{x^2+y^2+z^2}$, where $x = \cos\theta, y = \sin\theta,$ and $z = \tan\theta$. Find $\frac{dw}{d\theta}$ at $\theta = \pi/4$.

**Solution:**

Computing partial derivatives and path derivatives:
$$\frac{\partial w}{\partial x} = \frac{x}{\sqrt{x^2+y^2+z^2}}, \quad \frac{dx}{d\theta} = -\sin\theta$$
$$\frac{\partial w}{\partial y} = \frac{y}{\sqrt{x^2+y^2+z^2}}, \quad \frac{dy}{d\theta} = \cos\theta$$
$$\frac{\partial w}{\partial z} = \frac{z}{\sqrt{x^2+y^2+z^2}}, \quad \frac{dz}{d\theta} = \sec^2\theta$$

Applying the chain rule and evaluating at $\theta = \pi/4$:
$$\begin{aligned}
\frac{dw}{d\theta} &= \frac{x(-\sin\theta)}{\sqrt{\cos^2\theta+\sin^2\theta+\tan^2\theta}} + \frac{y \cos\theta}{\sqrt{\cos^2\theta+\sin^2\theta+\tan^2\theta}} + \frac{z \tan\theta \sec^2\theta}{\sqrt{\cos^2\theta+\sin^2\theta+\tan^2\theta}} \\
&= \tan\theta \sec\theta \\
&= \tan\frac{\pi}{4} \sec\frac{\pi}{4} = 1 \times \sqrt{2} = \sqrt{2}
\end{aligned}$$

---

#### $Q_3$. Chain Rule Verification by Direct Substitution

**Problem Statement:** If $u = x^2 + y^2 + z^2$ where $x = e^t \cos t$, $y = e^t \sin t$, and $z = e^t$. Show that $\frac{du}{dt} = 4e^{2t}$ using the chain rule and verify the answer by direct substitution.

**Solution (Chain Rule):**
$$\frac{\partial u}{\partial x} = 2x, \quad \frac{dx}{dt} = e^t(\cos t - \sin t)$$
$$\frac{\partial u}{\partial y} = 2y, \quad \frac{dy}{dt} = e^t(\cos t + \sin t)$$
$$\frac{\partial u}{\partial z} = 2z, \quad \frac{dz}{dt} = e^t$$

$$\begin{aligned}
\frac{du}{dt} &= 2x \cdot e^t(\cos t - \sin t) + 2y \cdot e^t(\cos t + \sin t) + 2z \cdot e^t \\
&= 2e^{2t}(\cos^2 t + \sin^2 t) + 2e^{2t} = 4e^{2t}
\end{aligned}$$

**Verification (Direct Substitution):**
$$u = (e^t \cos t)^2 + (e^t \sin t)^2 + (e^t)^2 = e^{2t}(\cos^2 t + \sin^2 t) + e^{2t} = 2e^{2t}$$
$$\frac{du}{dt} = \frac{d}{dt}[2e^{2t}] = 4e^{2t}\quad \text{(verified)}$$

---

#### $Q_4$. Spherical Coordinate Partial Derivatives

**Problem Statement:** Let $w = 4x^2 + 4y^2 + z^2$, where $x = \rho\sin\phi\cos\theta$, $y = \rho\sin\phi\sin\theta$, and $z = \rho\cos\phi$. Find $\frac{\partial w}{\partial \rho}$, $\frac{\partial w}{\partial \phi}$, and $\frac{\partial w}{\partial \theta}$.

**Solution:**

First, evaluate basic partial derivatives:
$$\frac{\partial w}{\partial x} = 8x, \quad \frac{\partial w}{\partial y} = 8y, \quad \frac{\partial w}{\partial z} = 2z$$

Applying the chain rule for each parameter:
$$\begin{aligned}
\frac{\partial w}{\partial \rho} &= 8x(\sin\phi\cos\theta) + 8y(\sin\phi\sin\theta) + 2z(\cos\phi) = \underline{8\rho\sin^2\phi + 2\rho\cos^2\phi} \\
\frac{\partial w}{\partial \phi} &= 8x(\rho\cos\phi\cos\theta) + 8y(\rho\sin\phi\cos\phi) + 2z(-\rho\sin\phi) = \underline{2\rho^2\sin\phi\cos\phi[4(\cos^2\theta + \sin^2\theta) - 1]} \\
\frac{\partial w}{\partial \theta} &= 8x(-\rho\sin\phi\sin\theta) + 8y(\rho\sin\phi\cos\theta) + 2z(0) = \underline{0}
\end{aligned}$$

---

#### $Q_5$. Difference-Variable Composite Functions

**Problem Statement:** If $u = f(x-y, y-z, z-x)$, show that $\frac{\partial u}{\partial x} + \frac{\partial u}{\partial y} + \frac{\partial u}{\partial z} = 0$.

**Solution:**

Let $r = x-y$, $s = y-z$, and $t = z-x$. Computing partial derivatives of the intermediate variables:
$$\frac{\partial r}{\partial x} = 1, \frac{\partial r}{\partial y} = -1$$
$$\frac{\partial s}{\partial y} = 1, \frac{\partial s}{\partial z} = -1$$
$$\frac{\partial t}{\partial z} = 1, \frac{\partial t}{\partial x} = -1$$

Applying the chain rule gives:
$$\frac{\partial u}{\partial x} = \frac{\partial u}{\partial r}(1) + \frac{\partial u}{\partial s}(0) + \frac{\partial u}{\partial t}(-1) = \frac{\partial u}{\partial r} - \frac{\partial u}{\partial t} \quad \text{--- (1)}$$
$$\frac{\partial u}{\partial y} = \frac{\partial u}{\partial r}(-1) + \frac{\partial u}{\partial s}(1) + \frac{\partial u}{\partial t}(0) = -\frac{\partial u}{\partial r} + \frac{\partial u}{\partial s} \quad \text{--- (2)}$$
$$\frac{\partial u}{\partial z} = \frac{\partial u}{\partial r}(0) + \frac{\partial u}{\partial s}(-1) + \frac{\partial u}{\partial t}(1) = -\frac{\partial u}{\partial s} + \frac{\partial u}{\partial t} \quad \text{--- (3)}$$

Summing equations (1), (2), and (3):
$$\frac{\partial u}{\partial x} + \frac{\partial u}{\partial y} + \frac{\partial u}{\partial z} = \left(\frac{\partial u}{\partial r} - \frac{\partial u}{\partial t}\right) + \left(-\frac{\partial u}{\partial r} + \frac{\partial u}{\partial s}\right) + \left(-\frac{\partial u}{\partial s} + \frac{\partial u}{\partial t}\right) = 0$$

---

#### $Q_6$. Ratio-Variable Composite Functions

**Problem Statement:** If $u = f(x/y, y/z, z/x)$, show that $x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} + z \frac{\partial u}{\partial z} = 0$.

**Solution:**

Let $r = x/y$, $s = y/z$, and $t = z/x$. Computing the required partial derivatives:
$$\frac{\partial r}{\partial x} = \frac{1}{y}, \quad \frac{\partial r}{\partial y} = -\frac{x}{y^2}$$
$$\frac{\partial s}{\partial y} = \frac{1}{z}, \quad \frac{\partial s}{\partial z} = -\frac{y}{z^2}$$
$$\frac{\partial t}{\partial z} = \frac{1}{x}, \quad \frac{\partial t}{\partial x} = -\frac{z}{x^2}$$

Forming the weighted partial differential expressions:
$$\begin{aligned}
x \frac{\partial u}{\partial x} &= \frac{x}{y} \frac{\partial u}{\partial r} - \frac{z}{x} \frac{\partial u}{\partial t} \quad \text{--- (1)} \\
y \frac{\partial u}{\partial y} &= -\frac{x}{y} \frac{\partial u}{\partial r} + \frac{y}{z} \frac{\partial u}{\partial s} \quad \text{--- (2)} \\
z \frac{\partial u}{\partial z} &= -\frac{y}{z} \frac{\partial u}{\partial s} + \frac{z}{x} \frac{\partial u}{\partial t} \quad \text{--- (3)}
\end{aligned}$$

Adding equations (1), (2), and (3) yields:
$$x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} + z \frac{\partial u}{\partial z} = 0$$

---

#### $Q_7$. Two-Parameter Transformations

**Problem Statement:** Express $\frac{\partial w}{\partial r}$ and $\frac{\partial w}{\partial s}$ in terms of $r$ and $s$ if $w = x^2 + y^2$, $x = r - s$, and $y = r + s$.

**Solution:**

Using the multivariable chain rule:
$$\frac{\partial w}{\partial r} = \frac{\partial w}{\partial x} \cdot \frac{\partial x}{\partial r} + \frac{\partial w}{\partial y} \cdot \frac{\partial y}{\partial r} = 2x(1) + 2y(1) = 2(r-s) + 2(r+s) = 4r$$

$$\frac{\partial w}{\partial s} = \frac{\partial w}{\partial x} \cdot \frac{\partial x}{\partial s} + \frac{\partial w}{\partial y} \cdot \frac{\partial y}{\partial s} = 2x(-1) + 2y(1) = -2(r-s) + 2(r+s) = 4s$$

<!-- page 3 | Relative Extrema and Saddle Points -->

## Relative Extrema and Saddle Points

Bridge: Having mastered partial derivatives and chain rules, you can now analyze the curvature of surfaces to find peaks, valleys, and saddle points.

The new idea: The second derivative test uses the Hessian determinant to classify whether a critical point is a local minimum, maximum, or saddle point.

Objectives: Identify critical points by setting first-order partial derivatives to zero; Use the second derivative test and Hessian determinant to classify local extrema and saddle points.

Concepts to teach: Critical point; Hessian determinant; Local maximum; Local minimum; Saddle point; Second derivative test.

### Local Maxima and Local Minima (Relative Extrema)

A critical point of a function $f(x,y)$ is a point $(a,b)$ where both first-order partial derivatives of $f$ are zero:
$$\left. \frac{\partial f}{\partial x} \right|_{(a,b)} = 0$$
$$\left. \frac{\partial f}{\partial y} \right|_{(a,b)} = 0$$

To find local extrema, we first identify the critical points by setting the $1^{\text{st}}$order partial derivatives to zero. Once the critical points are found, we use the $2^{\text{nd}}$ derivative test to classify them.

The $2^{\text{nd}}$ derivative test involves computing the second partial derivatives and forming the Hessian determinant ($D$) at the critical points:
$$D = f_{xx}(a,b) \cdot f_{yy}(a,b) - (f_{xy}(a,b))^2$$

1. If $D > 0$ and $f_{xx}(a,b) > 0$, then $(a,b)$ is a **local minimum**.
2. If $D > 0$ and $f_{xx}(a,b) < 0$, then $(a,b)$ is a **local maximum**.
3. If $D < 0$, then $(a,b)$ is a **saddle point**.
4. If $D = 0$, the test fails.

---

### Solved Problems

**Q1:** Find the relative extrema and saddle points, if any, of the function $f(x,y) = x^2 + y^2 - 2x - 6y + 14$.

**Given:** $f(x,y) = x^2 + y^2 - 2x - 6y + 14$
**Find:** Relative extrema

**Solution:**
Compute first-order partial derivatives:
$$f_x = 2x - 2$$
$$f_y = 2y - 6$$

Set $f_x = 0$ and $f_y = 0$ to find critical points:
$$2x - 2 = 0 \implies x = 1$$
$$2y - 6 = 0 \implies y = 3$$
Critical point: $(1, 3)$.

Compute second-order partial derivatives:
$$f_{xx} = 2, \quad f_{yy} = 2, \quad f_{xy} = 0$$

Evaluate the Hessian determinant $D$ at $(1,3)$:
$$D = f_{xx}(1,3) \cdot f_{yy}(1,3) - (f_{xy}(1,3))^2 = (2)(2) - (0)^2 = 4$$

Since $D = 4 > 0$ and $f_{xx}(1,3) = 2 > 0$, the point $(1,3)$ is a **local minimum**.

Local minimum value:
$$f(1,3) = 1^2 + 3^2 - 2(1) - 6(3) + 14 = 1 + 9 - 2 - 18 + 14 = 4$$

---

**Q2:** Find the relative extrema and saddle points, if any, of the function $f(x,y) = xy - x^2 - y^2 - 2x - 2y + 4$.

**Given:** $f(x,y) = xy - x^2 - y^2 - 2x - 2y + 4$
**Find:** Relative extrema

**Solution:**
$$\begin{aligned}
f_x &= y - 2x - 2 = 0 \quad \to \quad (1)\\
f_y &= x - 2y - 2 = 0 \quad \to \quad (2)
\end{aligned}$$

Solving the linear system gives the critical point $(-2, -2)$.

Second-order partial derivatives:
$$f_{xx} = -2, \quad f_{yy} = -2, \quad f_{xy} = 1$$

Compute $D$:
$$D = (-2)(-2) - (1)^2 = 4 - 1 = 3$$

Since $D = 3 > 0$ and $f_{xx}(-2, -2) = -2 < 0$, $(-2, -2)$ is a **local maximum**.

Local maximum value:
$$f(-2, -2) = (-2)(-2) - (-2)^2 - (-2)^2 - 2(-2) - 2(-2) + 4 = 8$$

---

**Q3:** Find the critical points of the function $f(x,y) = 2xy - x^3 - y^3$ and their extreme values.

**Solution:**
$$\begin{aligned}
f_x &= 2y - 3x^2 = 0\\
f_y &= 2x - 3y^2 = 0
\end{aligned}$$

Solving these equations yields critical points at $(0,0)$ and $\left(\frac{2}{3}, \frac{2}{3}\right)$.

Second-order derivatives:
$$f_{xx} = -6x, \quad f_{yy} = -6y, \quad f_{xy} = 2$$

* At $(0,0)$:
  $$D = (-6(0))(-6(0)) - (2)^2 = -4 < 0$$
  Thus, $(0,0)$ is a **saddle point**.

* At $\left(\frac{2}{3}, \frac{2}{3}\right)$:
  $$f_{xx} = -4, \quad f_{yy} = -4, \quad f_{xy} = 2$$
  $$D = (-4)(-4) - (2)^2 = 12 > 0$$
  Since $D > 0$ and $f_{xx} < 0$, $\left(\frac{2}{3}, \frac{2}{3}\right)$ is a **local maximum**.

Local maximum value:
$$f\left(\frac{2}{3}, \frac{2}{3}\right) = 2\left(\frac{2}{3}\right)\left(\frac{2}{3}\right) - \left(\frac{2}{3}\right)^3 - \left(\frac{2}{3}\right)^3 = \frac{8}{27}$$

---

**Q4:** Find the extreme values of the function $f(x,y) = 3x^2 - 2xy + y^2 - 8y$.

**Solution:**
$$\begin{aligned}
f_x &= 6x - 2y = 0 \implies y = 3x\\
f_y &= -2x + 2y - 8 = 0
\end{aligned}$$

Substituting $y = 3x$ into $f_y = 0$ gives $x = 2$ and $y = 6$. The critical point is $(2, 6)$.

Second-order derivatives:
$$f_{xx} = 6, \quad f_{yy} = 2, \quad f_{xy} = -2$$
$$D = (6)(2) - (-2)^2 = 12 - 4 = 8$$

Since $D = 8 > 0$ and $f_{xx} = 6 > 0$, $(2, 6)$ is a **local minimum**.

Minimum value:
$$f(2, 6) = 3(2)^2 - 2(2)(6) + (6)^2 - 8(6) = 12 - 48 + 36 - 48 = -24$$

---

**Q5:** Find the extreme values of $f(x, y) = x^3 + 3xy^2 - 15x^2 - 15y^2 + 72x$.

**Solution:**
$$\begin{aligned}
f_x &= 3x^2 + 3y^2 - 30x + 72 = 0\\
f_y &= 6xy - 30y = y(6x - 30) = 0
\end{aligned}$$

Solving $f_y = 0$ yields $y = 0$ or $x = 5$. Substituting these into $f_x = 0$ gives four critical points: $(5, 1)$, $(5, -1)$, $(6, 0)$, and $(4, 0)$.

Second-order derivatives:
$$f_{xx} = 6x - 30, \quad f_{yy} = 6x - 30, \quad f_{xy} = 6y$$

| Critical Point | $f_{xx}$ | $f_{yy}$ | $f_{xy}$ | $D$ | Classification |
| :--- | :---: | :---: | :---: | :---: | :--- |
| $(5, 1)$ | $0$ | $0$ | $6$ | $36$ | Saddle point |
| $(5, -1)$ | $0$ | $$6$ | $36$ | $36$ | Saddle point |
| $(6, 0)$ | $6$ | $6$ | $0$ | $36$ | Local minimum |
| $(4, 0)$ | $$6$ | $$6$ | $0$ | $36$ | Local maximum |

Minimum value at $(6,0)$: $f(6,0) = 603 - 108 = 495$ (or respective evaluated polynomial value).
Maximum value at $(4,0)$: $f(4,0) = 112$.

---

**Q6:** Find the extreme value of $f(x,y) = 4xy - x^4 - y^4$.

**Solution:**
$$\begin{aligned}
f_x &= 4y - 4x^3 = 0 \implies y = x^3\\
f_y &= 4x - 4y^3 = 0
\end{aligned}$$

Substituting $y = x^3$ into $f_y = 0$ gives $4x - 4x^9 = 0 \implies 4x(1 - x^8) = 0$. This yields critical points $(0,0)$, $(1,1)$, and $(-1,-1)$.

Second-order derivatives:
$$f_{xx} = 12x^2, \quad f_{yy} = 12y^2, \quad f_{xy} = 4$$

> **Figure: Table of critical points and second partial derivatives**
>
> A table with columns: Critical Points, f_xx, f_yy, f_xy, D. Row 1: (0,0), 0, 0, 4, -16. Row 2: (-1,-1), -12, -12, 4, 128. Row 3: (1,1), -12, -12, 4, 128.

* At $(0,0)$: $D = (0)(0) - (4)^2 = -16 < 0$ (**Saddle point**).
* At $(1,1)$: $D = (12)(12) - (4)^2 = 128 > 0$ and $f_{xx} = -12 < 0$ (**Local maximum**).
* At $(-1,-1)$: $D = 128 > 0$ and $f_{xx} = -12 < 0$ (**Local maximum**).

Maximum values:
$$f(1,1) = 4(1)(1) - (1)^4 - (1)^4 = 2$$
$$f(-1,-1) = 4(-1)(-1) - (-1)^4 - (-1)^4 = 2$$

---

**Q7:** Discuss the maxima and minima of the function $f(x,y) = xy(a-x-y)$.

**Solution:**
$$f(x,y) = axy - x^2y - xy^2$$
$$\begin{aligned}
f_x &= ay - 2xy - y^2 = 0\\
f_y &= ax - x^2 - 2xy = 0
\end{aligned}$$

Solving the equations yields critical points $(0,0)$, $(a,0)$, $(0,a)$, and $\left(\frac{a}{3}, \frac{a}{3}\right)$.

Second-order derivatives:
$$f_{xx} = -2y, \quad f_{yy} = -2x, \quad f_{xy} = a - 2x - 2y$$

Evaluating the Hessian determinant $D$:
* At $(0,0)$: $D = -a^2 < 0$ (**Saddle point**).
* At $(a,0)$ and $(0,a)$: $D = -a^2 < 0$ (**Saddle point**).
* At $\left(\frac{a}{3}, \frac{a}{3}\right)$: $D = \frac{a^2}{3} > 0$. If $a > 0$, $f_{xx} = -\frac{2a}{3} < 0$ (**Local maximum**). If $a < 0$, $f_{xx} > 0$ (**Local minimum**).

---

**Q8:** Find the maxima and minima of $f(x,y) = x^3 + y^3 - 3axy$.

**Solution:**
$$\begin{aligned}
f_x &= 3x^2 - 3ay = 0 \implies x^2 = ay\\
f_y &= 3y^2 - 3ax = 0
\end{aligned}$$

Solving yields critical points $(0,0)$ and $(a,a)$.

Second-order derivatives:
$$f_{xx} = 6x, \quad f_{yy} = 6y, \quad f_{xy} = -3a$$

* At $(0,0)$: $D = (0)(0) - (-3a)^2 = -9a^2 < 0$ (**Saddle point**).
* At $(a,a)$: $D = (6a)(6a) - (-3a)^2 = 36a^2 - 9a^2 = 27a^2 > 0$.

If $a > 0$, $f_{xx} = 6a > 0$, making $(a,a)$ a **local minimum**. The minimum value is $a^3 + a^3 - 3a(a)(a) = -a^3$ (or $a^3$ depending on terms).

---

**Q9:** A rectangular box open at the top is to have a volume of $32$ cubic feet. Find its dimensions if the total surface area (T.S.A) is minimum.

**Given:** Volume $V = xyz = 32 \implies z = \frac{32}{xy}$
**Find:** Dimensions $x, y, z$ for minimum T.S.A.

**Solution:**
The surface area function is:
$$S = xy + 2yz + 2xz = xy + \frac{64}{x} + \frac{64}{y}$$

Compute first-order partial derivatives:
$$S_x = y - \frac{64}{x^2} = 0 \implies x^2y = 64$$
$$S_y = x - \frac{64}{y^2} = 0 \implies xy^2 = 64$$

Equating both gives $x = y$. Substituting $x = y$ into $x^2y = 64$ gives $x^3 = 64 \implies x = 4, y = 4$.

Then,
$$z = \frac{32}{(4)(4)} = 2$$

Second-order derivatives:
$$S_{xx} = \frac{128}{x^3}, \quad S_{yy} = \frac{128}{y^3}, \quad S_{xy} = 1$$
$$D = S_{xx}S_{yy} - (S_{xy})^2 = \left(\frac{128}{64}\right)\left(\frac{128}{64}\right) - 1^2 = (2)(2) - 1 = 3$$

Since $D = 3 > 0$ and $S_{xx} = 2 > 0$, the total surface area is **minimum** at dimensions $x = 4\text{ ft}, y = 4\text{ ft}, z = 2\text{ ft}$.

---

**Q10:** A manufacturer produces two types of products A and B. The cost function for producing $x$ units of product A and $y$ units of product B is given by $C(x,y) = x^2 + y^2 + 4xy + 10x + 8y + 50$. Find the critical points and determine the minimum cost.

**Solution:**
$$\begin{aligned}
C_x &= 2x + 4y + 10 = 0\\
C_y &= 2y + 4x + 8 = 0
\end{aligned}$$

Solving this linear system yields the critical point $(-1, -2)$.

Second-order derivatives:
$$C_{xx} = 2, \quad C_{yy} = 2, \quad C_{xy} = 4$$
$$D = C_{xx}C_{yy} - (C_{xy})^2 = (2)(2) - (4)^2 = 4 - 16 = -12$$

Since $D = -12 < 0$, the critical point $(-1, -2)$ is a **saddle point**. Therefore, a relative minimum cost does not exist at this point.

<!-- page 4 | Absolute Extrema on Closed Regions -->

## Absolute Extrema on Closed Regions

Bridge: Now that you can locate local extrema inside open domains, you will extend optimization to closed boundaries to find global extrema.

The new idea: Absolute extrema over a closed region occur either at interior critical points or along the boundaries of the region.

Objectives: Find critical points within a closed bounded domain; Evaluate boundary conditions to determine absolute maximum and minimum values.

Concepts to teach: Absolute maxima, absolute minima, boundary analysis, closed bounded regions.

### Absolute Maxima and Absolute Minima

The absolute maxima and minima of a function involve identifying the highest and lowest values that a function attains over its entire domain.

#### Solved Problems

**Problem 1:** Find the absolute extrema of a function $f(x,y) = xy - 4x$ on $R$, where $R$ is the triangular region with vertices $(0,0)$, $(0,4)$, and $(4,0)$.

> **Figure: Triangle OAB with vertices at origin O(0,0), A(4,0) and B(0,4)**
>
> A right-angled triangle in the first quadrant with vertices labelled O(0,0) at the origin, A(4,0) on the x-axis, and B(0,4) on the y-axis. The region inside the triangle is shaded and labelled with the letter R.

**Given:** $f(x,y) = xy - 4x$, region $R$ with vertices $(0,0)$, $(0,4)$, and $(4,0)$.

**Step 1: Find interior critical points.**
Compute first-order partial derivatives:
$$f_x = y - 4$$
$$f_y = x$$
Set $f_x = 0$ and $f_y = 0$:
$$y - 4 = 0 \implies y = 4$$
$$x = 0$$
Therefore, $(0,4)$ is a critical point.

**Step 2: Evaluate along the boundaries.**
- **Along $OA$ ($y = 0$):**
  $f(x,y) = -4x$
  $f_x = -4 \neq 0$, so there are no critical points on $OA$.
- **Along $OB$ ($x = 0$):**
  $f(x,y) = 0$, so there are no critical points on $OB$.
- **Along $AB$ (line segment joining $(4,0)$ and $(0,4)$):**
  The equation of the line passing through $(x_1, y_1) = (4,0)$ and $(x_2, y_2) = (0,4)$ is:
  $$\frac{x - 4}{0 - 4} = \frac{y - 0}{4 - 0} \implies y = -x + 4$$
  Substituting $y = 4 - x$ into $f(x,y)$:
  $$f(x,y) = x(4 - x) - 4x = 4x - x^2 - 4x = -x^2$$
  $f_x = -2x, f_y = 0$, giving no critical points on $AB$.

**Step 3: Compare values at critical and boundary points.**

| Critical Points | $f(x, y)$ |
| :--- | :--- |
| $(0, 0)$ | $0$ |
| $(4, 0)$ | $0$ |
| $(0, 4)$ | $16$ |

**Result:** The absolute maximum value is $0$, which occurs at $(0,0)$ and $(4,0)$ [Note: text lists $(0,0)$ and $(0,4)$]. The absolute minimum value is $16$, which occurs at $(0,4)$.

---

**Problem 2:** Find the absolute max. and min. values of the function $f(x,y) = x^2 - 2xy + 2y$ on the rectangular region $D = \{ (x, y) \mid 0 \le x \le 3, 0 \le y \le 2 \}$.

> **Figure: Rectangular region for optimization problem showing vertices O(0,0), A(3,0), B(3,2), and C(0,2).**
>
> Rectangular region graph with vertices labelled O at (0,0), A at (3,0), B at (3,2), and C at (0,2). The origin O is at the bottom-left, A is at the bottom-right, C is at the top-left, and B is at the top-right.

**Given:** $f(x,y) = x^2 - 2xy + 2y$, $0 \le x \le 3$, $0 \le y \le 2$.

**Step 1: Find interior critical points.**
$$f_x = 2x - 2y$$
$$f_y = -2x + 2$$
Set $f_x = 0$ and $f_y = 0$:
$$2x - 2y = 0 \implies x = y$$
$$2x + 2 = 0 \implies x = 1$$
Substituting $x = 1$ gives $y = 1$. Thus, $(1,1)$ is a critical point inside the region.

**Step 2: Evaluate along the boundaries.**
- **Along $OA$ ($y = 0$):** $f(x,y) = x^2$, yielding $f_x = 2x = 0 \implies x = 0$ (boundary point already checked).
- **Along $AB$ ($x = 3$):** $f(3,y) = 9 - 6y + 2y = 9 - 4y$, giving $f_y = -4 \neq 0$ (no critical points).
- **Along $BC$ ($y = 2$):** $f(x,2) = x^2 - 4x + 4$, giving $f_x = 2x - 4 = 0 \implies x = 2$. Thus, $(2,2)$ is a boundary critical point.
- **Along $OC$ ($x = 0$):** $f(0,y) = 2y$, giving $f_y = 2 \neq 0$ (no critical points).

**Step 3: Compare values.**

| Critical Point | $f(x, y)$ |
| :--- | :--- |
| $(1, 1)$ | $1$ |
| $(2, 2)$ | $0$ |
| $(0, 0)$ | $0$ |
| $(3, 0)$ | $9$ |
| $(0, 2)$ | $4$ |
| $(3, 2)$ | $1$ |

**Result:** The absolute maximum value is $9$ at $(3,0)$. The absolute minimum value is $0$ at $(2,2)$ and $(0,0)$.

---

**Problem 3:** Find the absolute extrema of $f(x, y) = x^2 - 3y^2 - 2x + 6y$ over the square region with vertices $(0,0)$, $(2,0)$, $(2,2)$, and $(0,2)$.

> **Figure: Square region with vertices (0,0), (2,0), (2,2) and (0,2)**
>
> A square region in the Cartesian coordinate system with vertices labelled O(0,0) at the bottom-left, A(2,0) at the bottom-right, B(2,2) at the top-right, and C(2,0) at the top-left (representing (0,2)).

**Given:** $f(x,y) = x^2 - 3y^2 - 2x + 6y$.

**Step 1: Find interior critical points.**
$$f_x = 2x - 2 = 0 \implies x = 1$$
$$f_y = -6y + 6 = 0 \implies y = 1$$
Critical point: $(1,1)$.

**Step 2: Evaluate boundaries.**
- **Along $OA$ ($y = 0$):** $f(x,0) = x^2 - 2x \implies f_x = 2x - 2 = 0 \implies x = 1$. Critical point: $(1,0)$.
- **Along $AB$ ($x = 2$):** $f(2,y) = 4 - 3y^2 - 4 + 6y = -3y^2 + 6y \implies f_y = -6y + 6 = 0 \implies y = 1$. Critical point: $(2,1)$.
- **Along $CB$ ($y = 2$):** $f(x,2) = x^2 - 12 - 2x + 12 = x^2 - 2x \implies f_x = 2x - 2 = 0 \implies x = 1$. Critical point: $(1,2)$.
- **Along $OC$ ($x = 0$):** $f(0,y) = -3y^2 + 6y \implies f_y = -6y + 6 = 0 \implies y = 1$. Critical point: $(0,1)$.

**Step 3: Compare values.**

| Critical Point | $f(x, y)$ |
| :--- | :--- |
| $(0,0)$ | $0$ |
| $(2,0)$ | $0$ |
| $(2,2)$ | $0$ |
| $(0,2)$ | $0$ |
| $(1,0)$ | $1$ |
| $(2,1)$ | $3$ |
| $(1,2)$ | $1$ |
| $(0,1)$ | $3$ |
| $(1,1)$ | $2$ |

**Result:** Absolute maximum value is $3$ at $(2,1)$ and $(0,1)$. Absolute minimum value is $1$ at $(1,0)$ and $(1,2)$.

---

**Problem 4:** Find the absolute max. and min. of $f(x,y) = x^2 + y^2$ in the closed plate bounded by the lines $x = 0$, $y = 0$, and $y + 2x = 2$ in the first quadrant.

> **Figure: Triangle graph bounded by lines x=0, y=0, and y+2x=2 in the first quadrant**
>
> Triangle graph bounded by lines x=0, y=0, and y+2x=2 in the first quadrant. A graph in the first quadrant showing a triangular region. The origin is labeled O (0,0). Point A on the x-axis is labeled (1,0). Point B on the y-axis is labeled (0,2). A straight line connects points A and B, representing the equation y + 2x = 2.

**Given:** $f(x,y) = x^2 + y^2$, bounded by $x=0, y=0, y+2x=2$.

**Step 1: Find interior critical points.**
$$f_x = 2x = 0 \implies x = 0$$
$$f_y = 2y = 0 \implies y = 0$$
Critical point: $(0,0)$.

**Step 2: Evaluate boundaries.**
- **Along $OA$ ($y = 0$):** $f(x,0) = x^2 \implies f_x = 2x = 0 \implies x = 0$.
- **Along $OB$ ($x = 0$):** $f(0,y) = y^2 \implies f_y = 2y = 0 \implies y = 0$.
- **Along $AB$ ($y + 2x = 2 \implies y = 2 - 2x$):**
  $$f(x,y) = x^2 + (2 - 2x)^2 = x^2 + 4 - 8x + 4x^2 = 5x^2 - 8x + 4$$
  $$f_x = 10x - 8 = 0 \implies x = \frac{4}{5}$$
  When $x = \frac{4}{5}$, $y = 2 - 2\left(\frac{4}{5}\right) = \frac{2}{5}$. Critical point: $\left(\frac{4}{5}, \frac{2}{5}\right)$.

**Step 3: Compare values.**

| Critical Point | $f(x, y)$ |
| :--- | :--- |
| $(0, 0)$ | $0$ |
| $(0, 2)$ | $4$ |
| $(1, 0)$ | $1$ |
| $\left(\frac{4}{5}, \frac{2}{5}\right)$ | $\frac{4}{5}$ |

**Result:** Absolute maximum value is $4$ at $(0, 2)$ and $\left(\frac{4}{5}, \frac{2}{5}\right)$. Absolute minimum value is $0$ at $(0, 0)$.

---

**Problem 5:** Find the absolute max. and min. of $f(x,y) = x^2 - xy + y^2 + 1$ in the closed triangular plate in the first quadrant bounded by the lines $x=0$, $y=4$, and $y=x$.

> **Figure: Triangular region bounded by x=0, y=4, and y=x**
>
> Coordinate system showing a triangular region bounded by the lines x=0 (y-axis), y=4 (horizontal line at the top), and y=x (diagonal line passing through the origin). The vertices are labeled O(0,0), B(0,4), and A(4,4).

**Given:** $f(x,y) = x^2 - xy + y^2 + 1$.

**Step 1: Find interior critical points.**
$$f_x = 2x - y = 0 \implies 2x = y$$
$$f_y = -x + 2y = 0 \implies x = 2y$$
Solving yields the interior critical point $(0,0)$.

**Step 2: Evaluate boundaries.**
- **Along $OB$ ($x = 0$):** $f(0,y) = y^2 + 1 \implies f_y = 2y = 0 \implies y = 0$.
- **Along $AB$ ($y = 4$):** $f(x,4) = x^2 - 4x + 17 \implies f_x = 2x - 4 = 0 \implies x = 2$. Critical point: $(2,4)$.
- **Along line segment $OA$ ($y = x$):** $f(x,x) = x^2 - x^2 + x^2 + 1 = x^2 + 1 \implies f_x = 2x = 0 \implies x = 0$.

**Step 3: Compare values.**

| Critical Point | $f(x, y)$ |
| :--- | :--- |
| $(0, 0)$ | $1$ |
| $(0, 4)$ | $17$ |
| $(4, 4)$ | $17$ |
| $(2, 4)$ | $13$ |

**Result:** Absolute maximum value is $17$ at $(0,4)$ and $(4,4)$. Absolute minimum value is $1$ at $(0,0)$.

---

**Problem 6:** Find the absolute max. and min. of $f(x, y) = 2x^2 - 4xy^2 - 4y + 1$ on a closed star plate bounded by the lines $x = 0$, $y = 2$, and $y = 2x$.

> **Figure: Region bounded by lines x=0, y=2, y=2x**
>
> A triangular region in the xy-plane for problem 6 bounded by lines x=0, y=2, and y=2x. Vertices are labelled at (0,0) with a label O(0,0), (0,2) with a label (0,2), and a point marked as A with coordinates (1,2). The line along x=0 has length indicated as 0-2, the top horizontal line is labelled y=2, and the diagonal line is y=2x.

**Given:** $f(x,y) = 2x^2 - 4xy^2 - 4y + 1$.

**Step 1: Find interior critical points.**
$$f_x = 4x - 4y^2 = 0 \implies x = y^2$$ [using standard system derivation: $f_x = 4x - 4 = 0 \implies x = 1$ and $f_y = 2y - 4 = 0 \implies y = 2$]
Critical point: $(1,2)$.

**Step 2: Evaluate boundaries.**
- **Along $OB$ ($x = 0$):** $f(0,y) = y^2 - 4y + 1 \implies f_y = 2y - 4 = 0 \implies y = 2$.
- **Along $AB$ ($y = 2$):** $f(x,2) = 2x^2 - 4x - 3 \implies f_x = 4x - 4 = 0 \implies x = 1$.
- **Along $OA$ ($y = 2x$):** $f(x,2x) = 6x^2 - 12x + 1 \implies f_x = 12x - 12 = 0 \implies x = 1$.

**Step 3: Compare values.**

| Critical Point | $f(x, y)$ |
| :--- | :--- |
| $(0, 0)$ | $1$ |
| $(0, 2)$ | $3$ |
| $(1, 2)$ | $5$ |

**Result:** Absolute maximum value is $1$ at $(0,0)$. Absolute minimum value is $5$ at $(1,2)$.

---

### Gradient Vector (Gradient)

The gradient vector points in the direction of the greatest rate of increase of a function.

The gradient of $f(x,y)$ is the vector $\nabla f$ (where $\nabla$ is read as "del"). The operator $\nabla$ is defined as:

$$\nabla = \hat{i} \frac{\partial}{\partial x} + \hat{j} \frac{\partial}{\partial y} \quad \text{in two-dimensional space}$$

$$\nabla = \hat{i} \frac{\partial}{\partial x} + \hat{j} \frac{\partial}{\partial y} + \hat{k} \frac{\partial}{\partial z} \quad \text{in three-dimensional space}$$

Applying this operator to a scalar function $f$:

$$\nabla f = \left( \hat{i} \frac{\partial}{\partial x} + \hat{j} \frac{\partial}{\partial y} \right) f$$

$$\nabla f = \hat{i} \frac{\partial f}{\partial x} + \hat{j} \frac{\partial f}{\partial y}$$

<!-- page 5 | Gradients and Directional Derivatives -->

## Gradients and Directional Derivatives

### Gradient Vector and Directional Derivatives

The gradient of a differentiable function of several variables is a vector operator that points in the direction of the greatest rate of increase of the function. Its magnitude represents that maximum rate of change. For a function $f(x, y)$, the gradient vector $\nabla f$ is defined as:

$$\nabla f = \hat{i}\frac{\partial f}{\partial x} + \hat{j}\frac{\partial f}{\partial y}$$

For a function of three variables $f(x, y, z)$:

$$\nabla f = \hat{i}\frac{\partial f}{\partial x} + \hat{j}\frac{\partial f}{\partial y} + \hat{k}\frac{\partial f}{\partial z}$$

The directional derivative of a function $f$ in the direction of a specified unit vector $\hat{u}$ represents the rate of change of $f$ along that direction. It is computed as the dot product of the gradient vector and the unit vector:

$$D_{\hat{u}} f = \nabla f \cdot \hat{u}$$

Given any vector $\vec{v}$, the corresponding unit vector $\hat{u}$ is obtained by dividing the vector by its magnitude:

$\hat{u} = \frac{\vec{v}}{|\vec{v}|} = \frac{\vec{v}}{\sqrt{v_1^2 + v_2^2 + v_3^2}}$$

### Solved Problems on Gradients

1. Find the gradient of $f(x, y) = y - x$ at $(2, 1)$.

**Given:** $f(x, y) = y - x$, Point $P(2, 1)$

**Find:** $\nabla f(2, 1)$

**Formula:** $\nabla f = \hat{i}\frac{\partial f}{\partial x} + \hat{j}\frac{\partial f}{\partial y}$

**Substitution & Calculation:**
$$\frac{\partial f}{\partial x} = -1, \quad \frac{\partial f}{\partial y} = 1$$
$$\nabla f = -\hat{i} + \hat{j}$$
$$\nabla f(2, 1) = -\hat{i} + \hat{j}$$

**Answer:** $\hat{i} + \hat{j}$

---

2. Find the gradient of $f(x, y) = \ln(x^2 + y^2)$ at $(1, 1)$.

**Given:** $f(x, y) = \ln(x^2 + y^2)$, Point $(1, 1)$

**Find:** $\nabla f(1, 1)$

**Formula:** $\nabla f = \hat{i}\frac{\partial f}{\partial x} + \hat{j}\frac{\partial f}{\partial y}$

**Substitution & Calculation:**
$$\frac{\partial f}{\partial x} = \frac{1}{x^2 + y^2} \cdot (2x) = \frac{2x}{x^2 + y^2}$$
$$\frac{\partial f}{\partial y} = \frac{1}{x^2 + y^2} \cdot (2y) = \frac{2y}{x^2 + y^2}$$
$$\left.\nabla f\right|_{(1,1)} = \hat{i}\frac{2(1)}{1^2 + 1^2} + \hat{j}\frac{2(1)}{1^2 + 1^2} = \hat{i} + \hat{j}$$

**Answer:** $\hat{i} + \hat{j}$

---

3. Find the gradient of $f(x, y) = \sqrt{2x + 3y}$ at $(-1, 2)$.

**Given:** $f(x, y) = \sqrt{2x + 3y}$, Point $(-1, 2)$

**Find:** $\nabla f(-1, 2)$

**Substitution & Calculation:**
$$\frac{\partial f}{\partial x} = \frac{1}{2\sqrt{2x + 3y}} \cdot (2) = \frac{1}{\sqrt{2x + 3y}}$$
$$\frac{\partial f}{\partial y} = \frac{1}{2\sqrt{2x + 3y}} \cdot (3) = \frac{3}{2\sqrt{2x + 3y}}$$
$$\left.\nabla f\right|_{(-1, 2)} = \hat{i}\frac{1}{\sqrt{2(-1) + 3(2)}} + \hat{j}\frac{3}{2\sqrt{2(-1) + 3(2)}} = \frac{\hat{i}}{2} + \frac{3\hat{j}}{4}$$

**Answer:** $\frac{\hat{i}}{2} + \frac{3\hat{j}}{4}$

---

4. Find the gradient of $f(x, y) = \tan^{-1}\left(\frac{\sqrt{x}}{y}\right)$ at $(4, -2)$.

**Given:** $f(x, y) = \tan^{-1}\left(\frac{\sqrt{x}}{y}\right)$, Point $(4, -2)$

**Substitution & Calculation:**
$$\frac{\partial f}{\partial x} = \frac{1}{1 + \left(\frac{\sqrt{x}}{y}\right)^2} \cdot \frac{1}{2\sqrt{x}y} = \frac{y}{y^2+x} \cdot \frac{1}{2\sqrt{x}}$$
$$\frac{\partial f}{\partial y} = \frac{1}{1 + \left(\frac{\sqrt{x}}{y}\right)^2} \cdot \left(-\frac{\sqrt{x}}{y^2}\right) = -\frac{\sqrt{x}}{y^2+x}$$
$$\left.\nabla f\right|_{(4,-2)} = \frac{-2\hat{i}}{4 + 16} \cdot \frac{1}{2(2)} - \frac{\hat{j}(2)}{16 + 4} = -\frac{\hat{i}}{16} - \frac{\hat{j}}{4}$$

**Answer:** $$\frac{\hat{i}}{16} - \frac{\hat{j}}{4}$

---

5. Find the gradient of $f(x, y, z) = x^2 + y^2 - 2z^2 + z\ln x$ at $(1, 1, 1)$.

**Given:** $f(x, y, z) = x^2 + y^2 - 2z^2 + z\ln x$, Point $(1, 1, 1)$

**Substitution & Calculation:**
$$\frac{\partial f}{\partial x} = 2x + \frac{z}{x}, \quad \frac{\partial f}{\partial y} = 2y, \quad \frac{\partial f}{\partial z} = -4z + \ln x$$
$$\left.\nabla f\right|_{(1,1,1)} = \hat{i}(2(1) + 1) + \hat{j}(2(1)) + \hat{k}(\ln(1) - 4(1)) = 3\hat{i} + 2\hat{j} - 4\hat{k}$$

**Answer:** $3\hat{i} + 2\hat{j} - 4\hat{k}$

---

6. Find the gradient of $f(x, y, z) = \log(x^2 + y^2 + z^2)$ at $(1, 2, 1)$.

**Given:** $f(x, y, z) = \log(x^2 + y^2 + z^2)$, Point $(1, 2, 1)$

**Substitution & Calculation:**
$$\nabla f = \hat{i} \cdot \frac{2x}{x^2+y^2+z^2} + \hat{j} \cdot \frac{2y}{x^2+y^2+z^2} + \hat{k} \cdot \frac{2z}{x^2+y^2+z^2}$$
$$\left.\nabla f\right|_{(1,2,1)} = \frac{2(1)\hat{i} + 4\hat{j} + 2(1)\hat{k}}{1^2 + 2^2 + 1^2} = \frac{2\hat{i} + 4\hat{j} + 2\hat{k}}{6} = \frac{\hat{i}}{3} + \frac{2\hat{j}}{3} + \frac{\hat{k}}{3}$$

**Answer:** $\frac{\hat{i}}{3} + \frac{2\hat{j}}{3} + \frac{\hat{k}}{3}$

### Solved Problems on Directional Derivatives

Q1. Find the directional derivative of $f(x, y) = x^2 + y^2$ at $(1, 1)$ in the direction of $\vec{u} = \left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right)$.

**Given:** $f(x, y) = x^2 + y^2$, Point $(1, 1)$, Unit vector $\vec{u} = \frac{1}{\sqrt{2}}\hat{i} + \frac{1}{\sqrt{2}}\hat{j}$

**Formula:** $D_{\vec{u}}f = \nabla f \cdot \vec{u}$

**Substitution & Calculation:**
$$\nabla f = 2x\hat{i} + 2y\hat{j} \implies \left.\nabla f\right|_{(1,1)} = 2\hat{i} + 2\hat{j}$$
$$D_{\vec{u}}f(1,1) = (2\hat{i} + 2\hat{j}) \cdot \left(\frac{1}{\sqrt{2}}\hat{i} + \frac{1}{\sqrt{2}}\hat{j}\right) = \frac{2}{\sqrt{2}} + \frac{2}{\sqrt{2}} = 2\sqrt{2}$$

**Answer:** $2\sqrt{2}$

---

Q2. Compute the directional derivative of $f(x, y) = x^3 - 3xy + y^3$ at $(1, 2)$ in the direction of vector $\vec{v} = 2\hat{i} + 3\hat{j}$.

**Given:** $f(x, y) = x^3 - 3xy + y^3$, Point $(1, 2)$, Vector $\vec{v} = 2\hat{i} + 3\hat{j}$

**Substitution & Calculation:**
$$\nabla f = (3x^2 - 3y)\hat{i} + (3y^2 - 3x)\hat{j}$$
$\hat{u} = \frac{2\hat{i} + 3\hat{j}}{\sqrt{2^2 + 3^2}} = \frac{2\hat{i} + 3\hat{j}}{\sqrt{13}}$$
$$\left.\nabla f\right|_{(1,2)} = (3(1)^2 - 3(2))\hat{i} + (3(2)^2 - 3(1))\hat{j} = -3\hat{i} + 9\hat{j}$$
$$D_{\hat{u}}f(1,2) = (-3\hat{i} + 9\hat{j}) \cdot \left(\frac{2}{\sqrt{13}}\hat{i} + \frac{3}{\sqrt{13}}\hat{j}\right) = \frac{-6 + 27}{\sqrt{13}} = \frac{21}{\sqrt{13}}$$

**Answer:** $\frac{21}{\sqrt{13}}$

---

Q3. Find the directional derivative of $f(x, y) = x^2y + 3xy^2$ at $(1, 2)$ in the direction of $\vec{u} = \hat{i} + \hat{j}$.

**Given:** $f(x, y) = x^2y + 3xy^2$, Point $(1, 2)$, Vector $\vec{v} = \hat{i} + \hat{j}$

**Substitution & Calculation:**
$$\nabla f = (2xy + 3y^2)\hat{i} + (x^2 + 6xy)\hat{j}$$
$\hat{u} = \frac{\hat{i} + \hat{j}}{\sqrt{1^2 + 1^2}} = \frac{\hat{i} + \hat{j}}{\sqrt{2}}$$
$$\left.\nabla f\right|_{(1,2)} = (2(1)(2) + 3(4))\hat{i} + (1^2 + 6(1)(2))\hat{j} = 16\hat{i} + 13\hat{j}$$
$$D_{\hat{u}}f(1,2) = \frac{1}{\sqrt{2}}(16(1) + 13(1)) = \frac{29}{\sqrt{2}}$$

**Answer:** $\frac{29}{\sqrt{2}}$

---

Q4. For $f(x, y) = e^x \sin y$, find the directional derivative at $\left(0, \frac{\pi}{2}\right)$ in the direction of $\hat{u} = \hat{j}$.

**Substitution & Calculation:**
$$\nabla f = \left(e^x \sin y\right)\hat{i} + \left(e^x \cos y\right)\hat{j}$$
$$\left.\nabla f\right|_{(0, \pi/2)} = e^0 \sin\left(\frac{\pi}{2}\right)\hat{i} + e^0 \cos\left(\frac{\pi}{2}\right)\hat{j} = \hat{i}$$
$$D_{\hat{j}}f = \hat{i} \cdot \hat{j} = 0$$

**Answer:** $0$

---

Q5. A hill has height $h(x, y) = 100 - 0.01x^2 - 0.02y^2$. A hiker at $(50, 40)$ moves towards $(60, 50)$. Find the slope in that direction.

**Substitution & Calculation:**
$$\nabla h = -0.02x\hat{i} - 0.04y\hat{j}$$
$$\vec{PQ} = (60 - 50)\hat{i} + (50 - 40)\hat{j} = 10\hat{i} + 10\hat{j}$$
$\hat{u} = \frac{10\hat{i} + 10\hat{j}}{\sqrt{100 + 100}} = \frac{\hat{i} + \hat{j}}{\sqrt{2}}$$
$$\left.\nabla h\right|_{(50,40)} = -0.02(50)\hat{i} - 0.04(40)\hat{j} = -1\hat{i} - 1.6\hat{j}$$
$$D_{\hat{u}}h = (-1\hat{i} - 1.6\hat{j}) \cdot \left(\frac{\hat{i} + \hat{j}}{\sqrt{2}}\right) = \frac{-1 - 1.6}{\sqrt{2}} = -\frac{2.6}{\sqrt{2}} \approx -1.8$$

**Answer:** $$1.8$

### Maximum Rates of Increase and Decrease

- **Maximum Rate of Increase:** A function increases most rapidly in the direction of the gradient vector $\nabla f$. The maximum value of the directional derivative is the magnitude of the gradient:
  $$\text{Maximum Increase} = |\nabla f|$$

- **Maximum Rate of Decrease:** A function decreases most rapidly in the direction opposite to the gradient vector, $$\nabla f$.

**Example:** Consider $f(x, y) = x^2 - 3xy + y^2$ at $(1, -1)$. Find the maximum rate of increase, the direction of steepest ascent, and the maximum rate of decrease.

- **Gradient Vector:**
  $$\nabla f = (2x - 3y)\hat{i} + (2y - 3x)\hat{j}$$
  $$\left.\nabla f\right|_{(1,-1)} = (2(1) - 3(-1))\hat{i} + (2(-1) - 3(1))\hat{j} = 5\hat{i} - 5\hat{j}$$

- **Maximum Rate of Increase (Magnitude):**
  $$\nabla f|_{(1,-1)} = \sqrt{5^2 + (-5)^2} = \sqrt{50} = 5\sqrt{2}$$

- **Direction of Steepest Ascent:** $5\hat{i} - 5\hat{j}$ (or unit vector $\frac{1}{\sqrt{2}}\hat{i} - \frac{1}{\sqrt{2}}\hat{j}$)

- **Direction of Steepest Descent:** $$5\hat{i} + 5\hat{j}$
