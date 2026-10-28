<!-- page 1 | Page 1 -->

<!-- page 2 | Module - 2. -->

# Module - 2.

### Homogenous Linear ODEs of Second Order.

A second-order ODE is called linear, if it can be written
$$y'' + p(x)y' + q(x)y = r(x) \qquad \text{--- } (1).$$
and nonlinear if it cannot be written in this form.

If $r(x) \equiv 0$ (ie, $r(x) = 0$) in (1), then (1) becomes
$$y'' + p(x)y' + q(x)y = 0 \qquad \text{--- } (2).$$
and is called homogenous linear ODE.

If $r(x) \not\equiv 0$, then (1) is called nonhomogenous linear ODE.

eg: 1). $xy'' + y' + xy = 0$ is homogenous linear ODE.
$$\Rightarrow y'' + \frac{1}{x}y' + y = 0 \quad (\text{standard form})$$

2). $y'' + 2y = e^{-x} \cos x$ is nonhomogeneous linear ODE.

3). $y''y + (y')^2 = 0$ is nonlinear ODE.

- The function $p$ & $q$ in (1) and (2) are called the coefficients of the ODEs.

### Solution of a second order ODE:

A function $y = h(x)$ is called a solution of a (linear or nonlinear) second-order ODE on some open interval $I$ if $h$ is defined and twice differentiable throughout that interval and is such that the ODE becomes an identity if we replace $y$ by $h$, $y'$ by $h'$ & $y''$ by $h''$.

<!-- page 3 | Page 3 -->

Q. Check whether ~~or not~~ $y=\cos x$ & $y=\sin x$ are solutions of the homogenous ODE,
$$y''+y=0 \quad \text{--- } (1)$$

Soln: Consider $y=\cos x$. 
$$\begin{aligned}
y' &= -\sin x \\
y'' &= -\cos x
\end{aligned}$$

Substituting in (1), $-\cos x + \cos x = 0$
$$\Rightarrow y = \cos x \text{ is a solution of } (1).$$

Consider $y=\sin x$.
$$\begin{aligned}
y' &= \cos x \\
y'' &= -\sin x
\end{aligned}$$

Substituting in (1), $-\sin x + \sin x = 0$
$$\Rightarrow y = \sin x \text{ is a solution of } (1).$$

Q. Check ~~wheth~~ whether $e^{2x}$ & $e^x$ are solutions of $y'' - 5y' + 6y = 0 \quad \text{--- } (1)$

Ans: Consider $y = e^{2x}$
$$y' = 2e^{2x}, \quad y'' = 4e^{2x}$$

Substituting in (1), 
$$\begin{aligned}
4e^{2x} - 5(2e^{2x}) + 6(e^{2x}) &= 4e^{2x} - 10e^{2x} + 6e^{2x} \\
&= 0
\end{aligned}$$

$$\therefore y = e^{2x} \text{ is a solution of } (1).$$

Consider $y = e^x$.
$$y' = e^x, \quad y'' = e^x$$

Substituting in (1), $e^x - 5e^x + 6e^x = 2e^x \neq 0$

$$\Rightarrow e^x \text{ is not a solution of } (1).$$

<!-- page 4 | Page 4 -->

Note: If $y = c_1 y_1 + c_2 y_2$ (where $y_1$ & $y_2$ are two functions &
$c_1$ & $c_2$ are arbitrary constants.)
This is called a linear combination of $y_1$ & $y_2$.

Superposition principle (or linearity principle) (Fundamental Theorem for the homogeneous linear ODE).

For a homogeneous linear ODE, any linear combination of two solutions on an open interval $I$ is again a solution of (2) on $I$. In particular, for such an equation, sums and constant multiples of solutions are again solutions.

Note: The above principle do not hold for nonhomogeneous linear or nonlinear ODE's.

General solution, Basis, Particular solution.

Definition:

A general solution of an ODE (2) on an open interval $I$ is a solution $y = c_1 y_1 + c_2 y_2$, where $y_1$ and $y_2$ are solutions of (2) on $I$ that are not proportional, and $c_1$ & $c_2$ are arbitrary constants.

These $y_1, y_2$ are called a basis (or a fundamental system) of solutions of (2) on $I$.

A particular solution of (2) on $I$ is obtained if we assign specific values to $c_1$ and $c_2$ in $y = c_1 y_1 + c_2 y_2$.

* $y_1$ & $y_2$ are linearly independent solutions if $\frac{y_1}{y_2} \neq \text{constant}$, otherwise dependent.

<!-- page 5 | Page 5 -->

* For a second-order homogeneous linear ODE (2), an <u>initial value problem</u> consists of (2) and two initial conditions
$$y(x_0) = K_0 \ , \quad y'(x_0) = K_1.$$

These conditions are used to determine the two arbitrary constants $c_1$ and $c_2$ in the general $\text{sol}^n$ $y = c_1 y_1 + c_2 y_2$.
Assigning those specific values of $c_1 \ \&\ c_2$ on general $\text{sol}^n$, we get particular solution

<u>Example</u>.
Given $y_1 = \cos x \ \&\ y_2 = \sin x$ are solutions of the IVP
$$y''+y = 0 \ , \quad y(0) = 3, \quad y'(0) = -0.5.$$

Obtain the general solution and particular solution.

Soln:
General solution is, $y = c_1 \cos x + c_2 \sin x$. -------- (1)

To apply the initial condition, we need $y'$.
$$y' = -c_1 \sin x + c_2 \cos x. \text{ -------- (2)}$$

Now apply initial conditions

$y(0) = 3$ in (1) $\Rightarrow c_1 \cos 0 + c_2 \sin 0 = 3$
$$\Rightarrow c_1 + 0 = 3$$
$$\Rightarrow c_1 = 3$$

$y'(0) = -0.5$ in (2) $\Rightarrow -c_1 \sin 0 + c_2 \cos 0 = -0.5$
$$\Rightarrow c_2 = -0.5$$

Substituting values of $c_1 \ \&\ c_2$ we get in (1), we get the particular solution is,
$$y = 3 \cos x - 0.5 \sin x.$$

<!-- page 6 | Page 6 -->

- A basis of solutions of (2) on an open interval $I$ is a pair of linearly independent solutions of (2) on $I$.

Q). Verify by substitution that $y_1 = e^x$ & $y_2 = e^{-x}$ are solutions of the ODE $y'' - y = 0$. Then solve the IVP
$$y'' - y = 0, 
oy(0) = 6, 
oy'(0) = -2.$$

Solution.	~~$y_1 = e^x$~~
$$y'' - y = 0 \quad \text{---} \quad (1).$$

Consider $y_1 = e^x$.
$$y_1' = e^x, \quad y_1'' = e^x$$

Substituting in (1),
$$e^x - e^x = 0 \implies e^x \text{ is a solution of } (1)$$

Consider $y_2 = e^{-x}$
$$y_2' = -e^{-x}, \quad y_2'' = e^{-x}$$

Substituting in (1),
$$e^{-x} - e^{-x} = 0 \implies e^{-x} \text{ is a solution of } (1).$$

$\because e^x$ & $e^{-x}$ are not proportional, we can write the general solution of (1) as
$$y = c_1 e^x + c_2 e^{-x} \quad \text{---} \quad (2).$$

~~To app $y(0) = 6$ in (2) $\implies 2 = c_1 + c_2$~~

To apply initial conditions, we find $y'$,
$$y' = c_1 e^x - c_2 e^{-x} \quad \text{---} \quad (3).$$

applying initial conditions on (2) & (3),

<!-- page 7 | <u>Reduction of order</u> -->

$$c_1 + c_2 = 6$$

$$c_1 - c_2 = -2$$

Solving, $2c_1 = 4 \Rightarrow c_1 = 2$

$$\therefore c_2 = 6 - 2 = 4$$

$$\therefore \text{Particular solution of } (1) \text{ is,}$$

$$y = 2e^x + 4e^{-x}$$

---

## <u>Reduction of order</u>

Consider second order homogenous linear ODE

$$y'' + p(x)y' + q(x)y = 0 \quad \text{--- } (1)$$

If $y_1$ is a solution of $(1)$, then ~~we can find the solution~~

$y_2$ is given by,

$$y_2 = y_1 \int \frac{1}{y_1^2} e^{-\int p dx}$$

~~$$y_2 = \int \frac{1}{y_1} e^{-\int p dx}$$~~

~~Thus $y_1$~~ Here $y_1 \ \& \ y_2$ form a basis of solutions.

**eg:** Consider $y'' - 5y' + 6y = 0 \quad \text{--- } (1)$. Given $y_1 = e^{2x}$ is a sol$^n$.

$$y_1 = e^{2x} \text{ is a solution.}$$

$$\therefore y_2 = e^{2x} \int \frac{1}{e^{4x}} e^{-\int -5 dx} dx = e^{2x} \int \frac{1}{e^{4x}} e^{5x} dx$$

$$= e^{2x} \cdot e^x = e^{3x}$$

<!-- page 8 | Homogenous Linear ODEs with Constant Coefficient -->

# Homogenous Linear ODEs with Constant Coefficient

Consider second-order homogeneous linear ODE with constant coefficients $a$ & $b$

$$y'' + ay' + by = 0 \quad ---------- (1)$$

The characteristic equation (or auxiliary equation) corresponding to (1) is,

$$\lambda^2 + a\lambda + b = 0 \quad ---------- (2)$$

This is a quadratic equation in $\lambda$ and it has at most two solutions.

Case-1: Two distinct real roots $\lambda_1$ and $\lambda_2$.

Then, $y_1 = e^{\lambda_1 x}$ & $y_2 = e^{\lambda_2 x}$

The corresponding general solution is,

$$y = c_1 e^{\lambda_1 x} + c_2 e^{\lambda_2 x}$$

Case-2: Real double root $\lambda$

Then, $y_1 = e^{\lambda x}$ & $y_2 = x e^{\lambda x}$

The corresponding general solution is,

$$y = (c_1 + c_2 x) e^{\lambda x}$$

Case-3: Complex roots $\alpha + i\beta$ and $\alpha - i\beta$.

Then, $y_1 = e^{\alpha x} \cos \beta x$ & $y_2 = e^{\alpha x} \sin \beta x$.

The corresponding general solution is,

$$y = e^{\alpha x} [c_1 \cos \beta x + c_2 \sin \beta x]$$

<!-- page 9 | Page 9 -->

| Case | Roots of (2) | Basis of (1) | General solution of (1). |
| :--- | :--- | :--- | :--- |
| I | Distinct, real<br>$\lambda_1, \lambda_2$ | $e^{\lambda_1 x}, e^{\lambda_2 x}$ | $y = c_1 e^{\lambda_1 x} + c_2 e^{\lambda_2 x}$ |
| II | Real double root<br>$\lambda$ | $e^{\lambda x}, x e^{\lambda x}$ | $y = (c_1 + c_2 x) e^{\lambda x}$ |
| III | Complex roots<br>$\alpha + i\beta$<br>$\alpha - i\beta$ | $e^{\alpha x} \cos \beta x$<br>$e^{\alpha x} \sin \beta x$ | $y = e^{\alpha x} [c_1 \cos \beta x + c_2 \sin \beta x]$ |

Example -

1). Solve the initial value problem
$$y'' + y' - 2y = 0 \quad , y(0) = 4 \quad , \quad y'(0) = 5.$$

ans:
$$y'' + y' - 2y = 0 \quad \text{---} (1)$$

The characteristic equation is,
$$\begin{aligned}
&a = 1 \\
&b = -2
\end{aligned}$$
$$\lambda^2 + \lambda - 2 = 0$$
$$\Rightarrow (\lambda - 1)(\lambda + 2) = 0$$
$$\Rightarrow \lambda_1 = 1, \lambda_2 = -2$$

$\therefore$ The general solution is,
$$y = c_1 e^x + c_2 e^{-2x} \quad \text{---} (2)$$

Now, to find particular solution, we find $y'$.
$$y' = c_1 e^x - 2 c_2 e^{-2x} \quad \text{---} (3)$$

$$y(0) = 4 \text{ in } (2) \Rightarrow c_1 + c_2 = 4$$

<!-- page 10 | Page 10 -->

$y'(0) = -5 \text{ in } (3) \Rightarrow C_1 - 2C_2 = -5$

$$\begin{aligned}
C_1 + C_2 &= 4 \quad \text{--- } (a) \\
C_1 - 2C_2 &= -5 \quad \text{--- } (b)
\end{aligned}$$

$$(a) - (b) \Rightarrow 3C_2 = 9 \Rightarrow C_2 = 3$$
$$(a) \Rightarrow C_1 = 4 - C_2 = 4 - 3 = 1$$

$\therefore$ The particular solution is,
$$y = e^x + 3e^{-2x}$$

2). Solve the initial value problem,
$$y'' + y' + 0.25y = 0, \quad y(0) = 3, \quad y'(0) = -3.5$$

ans:
$$y'' + y' + 0.25y = 0 \quad \text{--- } (1)$$

The characteristic $eq^n$ corresponding to (1) is,
$$\lambda^2 + \lambda + 0.25 = 0$$
$$\lambda = \frac{-1 \pm \sqrt{1 - 4 \times 0.25}}{2} = -1/2 = -0.5$$

$\therefore$ The general solution is,
$$y = (C_1 + C_2 x) e^{-0.5x} \quad \text{--- } (2)$$

To apply initial conditions, we need to find $y'$
$$y' = (C_1 + C_2 x) \times -0.5e^{-0.5x} + e^{-0.5x} \times C_2$$
$$= C_2 e^{-0.5x} - 0.5(C_1 + C_2 x)e^{-0.5x} \quad \text{--- } (3)$$

<!-- page 11 | Page 11 -->

$$y(0)=3 \implies C_1 = 3$$
$$\begin{aligned}
y'(0) = -3.5 &\implies C_2 - 0.5 C_1 = -3.5 \\
&\implies C_2 = -3.5 + 0.5 \times 3 = -2
\end{aligned}$$

$$\therefore \text{ The particular solution is}$$
$$y = (3 - 2x) e^{-0.5x}.$$

3). $y'' + y = 0 \ , \ y(0) = 3 \ , \ y'(0) = -0.5$. Solve this initial value problem.

ans:
$$y'' + y = 0 \quad — (1)$$

Corresponding characteristic equation is
$$\lambda^2 + 1 = 0 \implies \lambda = \pm i \qquad \begin{aligned}
\alpha &= 0 \\
\beta &= 1
\end{aligned}$$

$$\therefore \text{ General solution is, } y = C_1 \cos x + C_2 \sin x \quad — (2)$$

To find particular solution, we need $y'$
$$y' = -C_1 \sin x + C_2 \cos x.$$

<!-- page 12 | Page 12 -->

$$y(0) = 3 \Rightarrow c_1 = 3$$

$$y'(0) = -0.5 \Rightarrow c_2 = -0.5$$

$$\therefore y(x) = 3\cos x - 0.5\sin x$$

Q. Find a general solution. Check your answer by substitution.

1). $4y'' - 25y = 0$

2). $y'' + 36y = 0$

3). $y'' + 9y' + 20y = 0$

4). $y'' + 2\pi y' + \pi^2 y = 0$

Ans: 1). $4y'' - 25y = 0 \quad \text{--- (1)}$

$$\Rightarrow y'' - \frac{25}{4}y = 0$$

chara. eqt$^n$ is, $\lambda^2 - \frac{25}{4} = 0$

$$\Rightarrow \lambda = \pm \frac{5}{2}$$

$$\therefore y(x) = c_1 e^{\frac{5}{2}x} + c_2 e^{-\frac{5}{2}x}$$

To check, find $y'$ & $y''$ & then substitute them in (1).

$$y'(x) = \frac{5}{2} c_1 e^{\frac{5}{2}x} - \frac{5}{2} c_2 e^{-\frac{5}{2}x}$$

$$y'' = \frac{25}{4} c_1 e^{\frac{5}{2}x} + \frac{25}{4} c_2 e^{-\frac{5}{2}x}$$

$$\frac{25}{4} c_1 e^{\frac{5}{2}x} + \frac{25}{4} c_2 e^{-\frac{5}{2}x} - \frac{25}{4} \left[c_1 e^{\frac{5}{2}x} + c_2 e^{-\frac{5}{2}x}\right] = 0$$

$$\Rightarrow y \text{ is a solution of (1).}$$

<!-- page 13 | Page 13 -->

3). $y'' + 9y' + 20y = 0$ ------ (1)

ans: Chara. $\text{eqt}^n$ is $\lambda^2 + 9\lambda + 20 = 0$

$$(\lambda + 5)(\lambda + 4) = 0$$

$$\Rightarrow \lambda = -5, -4$$

$$\therefore y = c_1 e^{-5x} + c_2 e^{-4x}.$$

To check, find $y', y''$.

$$y' = -5c_1 e^{-5x} - 4c_2 e^{-4x}$$

$$y'' = 25c_1 e^{-5x} + 16c_2 e^{-4x}$$

substituting in ①,

$$\left[25c_1 e^{-5x} + 16c_2 e^{-4x}\right] + 9\left[-5c_1 e^{-5x} - 4c_2 e^{-4x}\right] + 20\left[c_1 e^{-5x} + c_2 e^{-4x}\right]$$

$$= (25 - 45 + 20)c_1 e^{-5x} + (16 - 36 + 20)c_2 e^{-4x}$$

$$= 0$$

$$\Rightarrow y \text{ is a solution of (1)}$$

Q). Solve the following IVP.

1). $y'' + y' - 6y = 0 \quad ; y(0) = 10, \ y'(0) = 0$

2). $y'' + 25y = 0 \quad ; y(0) = 4.6, \ y'(0) = -1.2$

ans: 1). Chara. $\text{eqt}^n \quad \lambda^2 + \lambda - 6 = 0$

$$(\lambda + 3)(\lambda - 2) = 0$$

$$\lambda = -3, 2.$$

$$\therefore y = c_1 e^{-3x} + c_2 e^{2x}$$

<!-- page 14 | Page 14 -->

$$y' = -3c_1 e^{-3x} + 2c_2 e^{2x}$$ 

$$y(0) = 10 \Rightarrow c_1 + c_2 = 10 \quad \text{--- } (1)$$ 
$$y'(0) = 0 \Rightarrow -3c_1 + 2c_2 = 0 \quad \text{--- } (2)$$ 

$$(1) \times -3 \Rightarrow -3c_1 - 3c_2 = -30 \quad \text{--- } (3)$$ 

$$(3) - (2) \Rightarrow -5c_2 = -30 \Rightarrow c_2 = \frac{30}{5} = 6$$ 

$$\therefore c_1 = 10 - 6 = 4$$ 

$$\therefore \text{Particular solution is } y = 4e^{-3x} + 6e^{2x}$$ 

---

2) $y'' + 25y = 0$ 

$$\text{chara. eq}^{tn} \quad \lambda^2 + 25 = 0$$ 
$$\Rightarrow \lambda = \pm 5i$$ 

$$\therefore y = c_1 \cos 5x + c_2 \sin 5x$$ 
$$y' = -5c_1 \sin 5x + 5c_2 \cos 5x$$ 

$$y(0) = 4.6 \Rightarrow c_1 = 4.6$$ 
$$y'(0) = -1.2 \Rightarrow 5c_2 = -1.2 \Rightarrow c_2 = \frac{-1.2}{5} = -0.24$$ 

$$\therefore \text{Particular sol}^n \text{ is, } y = 4.6 \cos 5x - 0.24 \sin 5x$$ 

---

3) $y'' + y' + 0.25y = 0 \quad , \, y(0) = 3 \quad , \, y'(0) = -3.5$ 

$$\text{ans: } \text{chara. eq}^n \text{ is } \lambda^2 + \lambda + 0.25 = 0$$ 
$$(\lambda + 0.5)^2 = 0$$ 
$$\Rightarrow \lambda = -0.5, \, -0.5$$ 

$$\therefore y = (c_1 + c_2 x) e^{-0.5x}$$ 
$$y' = (c_1 + c_2 x) \times (-0.5) e^{-0.5x} + e^{-0.5x} \times c_2$$

<!-- page 15 | Page 15 -->

$$y(0) = 3 \implies C_1 = 3$$

$$y'(0) = -3.5 \implies -0.5 C_1 + C_2 = -3.5$$

$$-0.5 \times 3 + C_2 = -3.5$$

$$C_2 = -3.5 + 1.5 = -2$$

$$\therefore y = \cancel{3+} (3 - 2x)e^{-0.5x}$$

<!-- page 16 | Nonhomogeneous ODE -->

## Nonhomogeneous ODE

Consider,
$$y'' + p(x)y' + q(x)y = r(x) 	ag{1}$$
is a nonhomogeneous linear ODE, whose corresponding homogeneous ODE is
$$y'' + p(x)y' + q(x)y = 0 	ag{2}$$

### Definition: General solution, Particular solution.

A general solution of the non-homogeneous ODE (1) on an open interval $I$ is a solution of the form
$$y(x) = y_h(x) + y_p(x)$$
where $y_h(x) = c_1 y_1 + c_2 y_2$ is a general solution of the homogeneous ODE (2) on $I$ and $y_p$ is any solution of (1) on $I$ containing no arbitrary constants.

A particular solution of (1) on $I$ is a solution obtained from (3) by assigning specific values to the arbitrary constants $c_1$ & $c_2$.

### Method of undetermined coefficients.

Consider a nonhomogeneous linear ODE with constant coefficients $a$ & $b$,
$$y'' + ay' + by = r(x) 	ag{3}$$
where $r(x)$ is an exponential function, a power of $x$, a cosine, or sine, or sums or products of such functions.

<!-- page 17 | Page 17 -->

Choice rules for the method of ~~variation of parameter~~ undetermined coefficients:

(a) Basic rule: If $r(x)$ in (3) is one of the functions in the first column in table given below, choose $y_p$ in the same line and determine its undetermined coefficients by substituting $y_p$ and its derivatives into (3).

(b) Modification rule: If a term in your choice for $y_p$ happens to be a solution of the homogeneous ODE corresponding to (3), multiply this term by $x$ (or by $x^2$ if this solution corresponds to a double root of the characteristic eq$^{\text{n}}$ of the homogeneous ~~equation~~ ODE).

(c) Sum Rule: If $r(x)$ is a sum of functions in the first column of table given below, choose $y_p$ the ~~same~~ sum of the functions in the corresponding lines of the second column.

| Term in $r(x)$ | Choice for $y_p(x)$ |
| --- | --- |
| $ke^{\alpha x}$ | $Ce^{\alpha x}$ |
| $kx^n \;(n=0, 1, 2, \dots)$ | $K_n x^n + K_{n-1} x^{n-1} + \dots + K_1 x + K_0$ |
| $k \cos \omega x$ and $k \sin \omega x$ | $K \cos \omega x + M \sin \omega x$ |
| $ke^{\alpha x} \cos \omega x$ and $ke^{\alpha x} \sin \omega x$ | $e^{\alpha x}(K \cos \omega x + M \sin \omega x)$ |

<!-- page 18 | Page 18 -->

Example.

1). Solve the IVP
$$y'' + y = 0.001 x^2 \quad , \quad y(0) = 0 \quad , \quad y'(0) = 1.5$$
$$\textcircled{1}$$

Solution:
\textul{Step 1} First we need to find the general $\text{sol}^n$ of \cancel{ho}
corresponding homogeneous ODE, $y''+y=0$.
$$\Rightarrow \text{chara. eq}^n \quad m^2+1=0 \Rightarrow m = \pm i$$
$$\Rightarrow \quad y_h = \cancel{A} C_1 \cos x + C_2 \sin x .$$

\textul{Step-2}: Solution $y_p$ of the nonhomogeneous ODE.
$$r(x) = 0.001 x^2 .$$
$$\text{Let } y_p = K_2 x^2 + K_1 x + K_0 \quad \Rightarrow y_p' = 2 K_2 x + K_1$$
$$\cancel{\Rightarrow y_p' = 2Kx \ \& \ y_p'' = 2K} \qquad y_p'' = 2 K_2$$

Substituting these in $\textcircled{1}$,
$$2K_2 + (K_2 x^2 + K_1 x + K_0) = 0.001 x^2$$
$$\cancel{2K + K x^2 = 0.001 x^2} \Rightarrow K_2 x^2 + K_1 x + (2 K_2 + K_0) = 0.001 x^2$$

Comparing coefficients,
$$\cancel{K = 0.001 \ \& \ 2K = 0}$$
$$K_2 = 0.001$$
$$K_1 = 0$$
$$2K_2 + K_0 = 0 \quad \Rightarrow K_0 = -2K_2 = -0.002$$

$$\Rightarrow y_p = 0.001 x^2 - 0.002$$

$\therefore$ General solution is,
$$y = C_1 \cos x + C_2 \sin x + 0.001 x^2 - 0.002 .$$

<!-- page 19 | Page 19 -->

step-3: solution to IVP -

Differentiating $y$, we get
$$y' = -C_1 \sin x + C_2 \cos x + 0.002x$$

Applying initial conditions,

$$y(0) = 0$$
$$\Rightarrow C_1 - 0.002 = 0 \Rightarrow C_1 = 0.002$$

$$y'(0) = 1.5$$
$$\Rightarrow C_2 = 1.5$$

Particular $\text{sol}^n$ is,
$$y = 0.002 \cos x + 1.5 \sin x + 0.001 x^2 - 0.002$$

---

2). Solve the IVP
$$y'' + 3y' + 2.25 y = -10 e^{-1.5x}$$
$$y(0) = 1, \quad y'(0) = 0.$$

ans:
$$y'' + 3y' + 2.25 y = -10 e^{-1.5x} \quad \text{--- } (1)$$

Homogeneous ODE corresponding to (1) is,
$$y'' + 3y' + 2.25 y = 0.$$

corresponding chara- $\text{eq}^n$ is
$$\lambda^2 + 3\lambda + 2.25 = 0$$
$$(\lambda + 1.5)^2 = 0$$
$$\Rightarrow \lambda = -1.5, -1.5.$$

<!-- page 20 | Page 20 -->

$$\therefore y_h = (c_1 + c_2 x) e^{-1.5x}$$

Here $r(x) = -10 e^{-1.5x}$  
$\because e^{-1.5x}$ is a term in $y_h$, & this corresponds to a double root of chara $\text{eqn}^n$,  
we need to choose $y_p$
$$y_p = c x^2 e^{-1.5x}$$

$$\Rightarrow y_p' = c \left(-1.5 e^{-1.5x} x^2 + 2x e^{-1.5x}\right)$$
$$= c \left(2x - 1.5x^2\right) e^{-1.5x}$$
$$y_p'' = c \left[-1.5 e^{-1.5x} (2x - 1.5x^2) + (2 - 3x) e^{-1.5x}\right]$$
$$= c \left[-3x + 2.25x^2 + 2 - 3x\right] e^{-1.5x}$$
$$= c \left[2.25x^2 - 6x + 2\right] e^{-1.5x}$$

Substituting these in (1),  
$$c \left[2.25x^2 - 6x + 2\right] e^{-1.5x} + 3 \left[c \left(2x - 1.5x^2\right) e^{-1.5x}\right] + 2.25 \left[c x^2 e^{-1.5x}\right] = -10 e^{-1.5x}$$

$$(2.25c + 2.25c - 3c \times 1.5)x^2 + (-6c + 6c)x + 2c = -10$$

Equating coefficients of $x^2$, $x$ & constant,  
$$2c = -10 \Rightarrow c = -5$$

$$\therefore y_p = -5x^2 e^{-1.5x}$$

$\therefore$ The general solution of (1) is,  
$$y = (c_1 + c_2 x) e^{-1.5x} - 5x^2 e^{-1.5x}$$

<!-- page 21 | Page 21 -->

Now, to find particular solution, we find $y'$,
$$y' = -1.5 (c_1 + c_2 x) e^{-1.5x} + c_2 e^{-1.5x} - 5 \left[ -1.5 x^2 e^{-1.5x} + 2x e^{-1.5x} \right]$$
$$= (c_2 - 1.5 c_1 + c_2 x) e^{-1.5x} + \left[ 7.5 x^2 - 10x \right] e^{-1.5x} .$$

$y(0) = 1 \Rightarrow c_1 = 1$

$y'(0) = 0 \Rightarrow c_2 - 1.5 c_1 = 0 \Rightarrow c_2 = 1.5 c_1 = 1.5$

$$\therefore \quad y = (1 + 1.5x) e^{-1.5x} - 5x^2 e^{-1.5x} = (1 + 1.5x - 5x^2) e^{-1.5x}$$

3) solve the IVP
$$y'' + 2y' + 0.75y = 2 \cos x - 0.25 \sin x + 0.09x \quad \text{--- } (1)$$
$$y(0) = 2.78 , \quad y'(0) = -0.43 .$$

ans:
$$y'' + 2y' + 0.75y = 0 \quad \text{--- } (2)$$
is homogeneous ODE corresponding to (1).

chara-eqt$^n$ is, $\lambda^2 + 2\lambda + 0.75 = 0$
$$\lambda = \frac{-2 \pm \sqrt{4 - 4 \times 0.75}}{2}$$
$$= \frac{-2 \pm 1}{2} = -\frac{1}{2} , -\frac{3}{2}$$
$$\therefore \quad y_h = c_1 e^{-x/2} + c_2 e^{\frac{-3x}{2}}$$

<!-- page 22 | Page 22 -->

$$r(x) = 2\cos x - 0.25 \sin x + 0.09 x.$$

$$y_p(x) = [illegible] + K_2 x^2 + K_0$$

$$y_p(x) = K \cos x + M \sin x + K_1 x + K_0$$

$$y_p' = -K \sin x + M \cos x + K_1$$

$$y_p'' = -K \cos x - M \sin x.$$

Substituting in ①,

$$(-K \cos x - M \sin x) + 2[-K \sin x + M \cos x + K_1] + 0.75 [K \cos x + M \sin x$$

$$+ K_1 x + K_0] = 2 \cos x - 0.25 \sin x + 0.09 x.$$

$$(-K + 2M + 0.75K)\cos x + (-M - 2K + 0.75M) \sin x + 0.75 K_1 x$$

$$+ 2 K_1 + 0.75 K_0 = 2 \cos x - 0.25 \sin x + 0.09 x.$$

Comparing coefficients of $\sin x$ & $\cos x$,

$$\cancel{-K} \quad 2M - 0.25K = 2 \quad \text{--- } ⓐ$$

$$-0.25M - 2K = -0.25 \quad \text{--- } ⓑ$$

$$ⓑ \times 8 \implies -2M - 16K = -2 \quad \text{--- } ⓒ$$

$$ⓐ + ⓒ \implies -16.25 K = 0 \implies K = 0$$

$$\therefore 2M = 2 \implies M = 1$$

Comparing coefficients of $x$ & constant terms,

$$0.75 K_1 = 0.09 \implies K_1 = 0.12$$

$$2 K_1 + 0.75 K_0 = 0$$

$$\implies 0.75 K_0 = -2 \times 0.12 = -0.24$$

$$\implies K_0 = -0.32$$

<!-- page 23 | Page 23 -->

$\therefore y_p(x) = \sin x + 0.12x - 0.32$.

$\therefore$ General solution is,
$$y = c_1 e^{-x/2} + c_2 e^{-3x/2} + \sin x + 0.12x - 0.32.$$

$y' = -\frac{1}{2} c_1 e^{-x/2} - \frac{3}{2} c_2 e^{-3x/2} + \cos x + 0.12$

~~$y'' = \frac{1}{4} c_1 e^{-x/2} + \frac{9}{4} c_2 e^{-3x/2} - \sin x$~~

$y(0) = 2.78 \implies c_1 + c_2 - 0.32 = 2.78$

$\implies c_1 + c_2 = 3.1 \quad \text{--- } \textcircled{d}$

$y'(0) = -0.43 \implies -\frac{1}{2} c_1 - \frac{3}{2} c_2 + 1 + .12 = -0.43$

$-c_1 - 3c_2 = -3.1 \quad \text{--- } \textcircled{e}$

$\textcircled{d} + \textcircled{e} \implies -2c_2 = 0 \implies c_2 = 0$

$\therefore c_1 = 3.1$

$\therefore y = 3.1 e^{-x/2} + \sin x + 0.12x - 0.32$

<!-- page 24 | Page 24 -->

1). Solve $y'' + 4y = x^2$ — (1)

ans: Corresponding homogenous ODE is ,
$$y'' + 4y = 0$$

Corresponding chara. $eq^n$ is , $\lambda^2 + 4 = 0 \implies \lambda = \pm 2i$

$\therefore y_h = C_1 \cos 2x + C_2 \sin 2x$.

$r(x) = x^2$

$\implies$ Choose $y_p(x) = K_2 x^2 + K_1 x + K_0$

$$y_p' = 2 K_2 x + K_1$$
$$y_p'' = 2 K_2$$

Substituting in (1),
$$2K_2 + 4(K_2 x^2 + K_1 x + K_0) = x^2$$
$$(4K_2)x^2 + (4K_1)x + (2K_2 + 4K_0) = x^2$$

Comparing coefficients of $x^2, x, \& \text{ constant}$,
$$4K_2 = 1 \implies K_2 = 1/4$$
$$4K_1 = 0 \implies K_1 = 0$$
$$2K_2 + 4K_0 = 0 \implies 4K_0 = -2K_2 = -\frac{1}{2} \implies K_0 = -1/8$$

$$\therefore y_p(x) = \frac{1}{4}x^2 - \frac{1}{8}$$

$\therefore$ The solution is, $y = C_1 \cos 2x + C_2 \sin 2x + \frac{1}{4}x^2 - \frac{1}{8}$

---

2). Solve $y'' - 4y' - 12y = 3e^{5x}$ — (1)

ans: Corresponding homogeneous ODE is , $y'' - 4y' - 12y = 0$

" chara. $eq^n$ is , $\lambda^2 - 4\lambda - 12 = 0 \implies (\lambda - 6)(\lambda + 2) = 0$
$$\implies \lambda = 6, -2$$

<!-- page 25 | Page 25 -->

$$\Rightarrow y_h = c_1 e^{6x} + c_2 e^{-2x}$$

Here $r(x) = 3e^{5x}$

$$\therefore y_p(x) = K e^{5x}$$
$$y_p' = 5Ke^{5x} \text{ & } y_p'' = 25Ke^{5x}$$

Substituting in ①,

$$25Ke^{5x} - 4(5Ke^{5x}) - 12(Ke^{5x}) = 3e^{5x}$$
$$(25K - 20K - 12K) e^{5x} = 3e^{5x}$$

Comparing coefficients of $e^{5x}$,
$$-7K = 3 \Rightarrow K = -\frac{3}{7}.$$

$$\therefore y_p = -\frac{3}{7} e^{5x}$$

$$\therefore \text{solution of ① is, } y = c_1 e^{6x} + c_2 e^{-2x} - \frac{3}{7} e^{5x}$$

---

3) solve $y'' + y' - 2y = \sin x$ -----(1)

ans: 

$$y'' + y' - 2y = 0$$

chara-eqn: $\lambda^2 + \lambda - 2 = 0 \Rightarrow (\lambda + 2)(\lambda - 1) = 0$
$$\Rightarrow \lambda = -2, 1$$

$$\therefore y_h = c_1 e^{-2x} + c_2 e^x$$

$$r(x) = \sin x$$

$$\therefore y_p = K \cos x + M \sin x.$$
$$y_p' = -K \sin x + M \cos x$$
$$y_p'' = -K \cos x - M \sin x.$$

Substituting in ①, $(-K \cos x - M \sin x) + (-K \sin x + M \cos x) - 2(K \cos x + M \sin x)$
$$\qquad = \sin x$$

<!-- page 26 | Page 26 -->

$$(-K+M-2K)\cos x + (-M-K-2M)\sin x = \sin x$$
$$(M-3K)\cos x + (-3M-K)\sin x = \sin x$$

Comparing coefficients of $\sin x$ & $\cos x$,
$$M-3K = 0 \quad \text{--- } (a)$$
$$-3M-K = 1 \quad \text{--- } (b)$$

(a) $\times 3 \Rightarrow \quad 3M-9K = 0 \quad \text{--- } (c)$

(c) + (b) $\Rightarrow \quad -10K = 1 \Rightarrow K = -1/10$

(a) $\Rightarrow M = 3K = \frac{-3}{10}$

$$\therefore y_p = -\frac{1}{10}\cos x - \frac{3}{10}\sin x$$
$$\therefore \text{Solution of (1) is, } y = c_1 e^{-2x} + c_2 e^x - \frac{1}{10}\cos x - \frac{3}{10}\sin x$$

---

4). solve $y'' - 2y' - 3y = 2e^{3x} \quad \text{--- } (1)$

ans: Corresponding homo. ODE, $y'' - 2y' - 3y = 0$
$$\text{chara } eq^n, \quad \lambda^2 - 2\lambda - 3 = 0$$
$$(\lambda + 1)(\lambda - 3) = 0 \Rightarrow \lambda = 3, -1$$

$$\therefore y_h = c_1 e^{3x} + c_2 e^{-x}$$

$$r(x) = 2e^{3x}$$
$$\therefore y_p = Kxe^{3x}$$
$$y_p' = K [3xe^{3x} + e^{3x}]$$
$$y_p'' = 3K [3xe^{3x} + e^{3x}] + 3Ke^{3x} = [9Kx + 6K] e^{3x}$$

Substituting in (1),
$$[9Kx + 6K]e^{3x} - 2K [3xe^{3x} + e^{3x}] - 3Kxe^{3x} = 2e^{3x}$$
$$(9K - 6K - 3K)xe^{3x} + (6K - 2K)e^{3x} = 2e^{3x}$$

<!-- page 27 | Page 27 -->

$$6Kxe^{3x} + 4Ke^{3x} = 2e^{3x}$$
$$\Rightarrow 4K = 2 \Rightarrow K = \frac{1}{2}$$

$$\therefore y_p = \frac{1}{2}xe^{3x}$$

$$\therefore \text{The solution is, } y = C_1 e^{3x} + c_2 e^{-2x} + \frac{x}{2} e^{3x}$$

5). $y'' + 4y' + 4y = e^{-2x}$

Ans: 
$$y'' + 4y' + 4y = 0$$
$$\Rightarrow \lambda^2 + 4\lambda + 4 = 0 \Rightarrow (\lambda + 2)^2 = 0 \Rightarrow \lambda = -2, -2$$

$$\therefore y_h = (c_1 + c_2 x) e^{-2x}$$

$$r(x) = e^{-2x}$$
$$\because e^{-2x} \text{ is a term in } y_h \text{ \& } -2 \text{ is a double root.}$$
$$\therefore y_p = K x^2 e^{-2x}$$

$$y_p' = K \left[ -2x^2 e^{-2x} + 2x e^{-2x} \right]$$

$$y_p'' = -2K \left[ -2e^{-2x} x^2 + 2x e^{-2x} \right] + 2K \left[ -2x e^{-2x} + e^{-2x} \right]$$

Substituting,
$$\left[ +4K x^2 - 4Kx - 4Kx + 2K \right] e^{-2x} + 4 \left[ -2K x^2 + 2Kx \right] e^{-2x} + 4 \left[ K x^2 \right] e^{-2x} = e^{-2x}$$

$$(4K + 4K - 8K) x^2 + (-8K + 8K) x + (2K) = 1$$

Comparing coefficients, $2K = 1 \Rightarrow K = 1/2$

$$\therefore y_p = \frac{x^2}{2} e^{-2x}$$

$$\therefore \text{Solution is, } y = y_h + y_p = (c_1 + c_2 x) e^{-2x} + \frac{x^2}{2} e^{-2x}$$

<!-- page 28 | Page 28 -->

6). $y'' + 4y = 	ext{cos } 2x$.

ans: $y'' + 4y = 0$

$$\lambda^2 + 4 = 0 \implies \lambda = \pm 2i$$

$$\implies y_h = c_1 \cos 2x + c_2 \sin 2x.$$

$$r(x) = \cos 2x$$

~~$$\implies y_p = Kx \cos 2x.$$~~

~~$$y_p' = K [-2\sin 2x \cdot x + \cos 2x]$$~~

~~$$= -2Kx \sin 2x + K \cos 2x.$$~~

$$\implies y_p(x) = x [K \cos 2x + M \sin 2x]$$

$$= Kx \cos 2x + Mx \sin 2x.$$

$$y_p' = K [-2x \sin 2x + \cos 2x] +$$

$$M [2x \cos 2x + \sin 2x]$$

$$y_p'' = -2K [2x \cos 2x + \sin 2x] - 2K \sin 2x +$$

$$2M [-2x \sin 2x + \cos 2x] + 2M \cos 2x$$

$$= K [-4x \cos 2x - 4 \sin 2x] +$$

$$M [-4x \sin 2x + 4 \cos 2x]$$

Substituting,

$$K [-4x \cos 2x - 4 \sin 2x] +$$

$$M [-4x \sin 2x + 4 \cos 2x] +$$

$$4 [Kx \cos 2x + Mx \sin 2x] = \cos 2x.$$

~~$$(-4Kx + 4Kx) \cos 2x + (-4Mx + 4Mx) \sin 2x$$~~

~~$$+ (-4K + 4$$~~

$$(-4K + 4K) x \cos 2x +$$

$$(-4M + 4M) x \sin 2x +$$

$$-4K \sin 2x + 4M \cos 2x$$

$$= \cos 2x$$

Comparing coefficients,

$$-4K = 0 \quad \& \quad 4M = 1$$

$$\implies K = 0 \quad \& \quad M = \frac{1}{4}.$$

$$\therefore y_p = \frac{1}{4} x \sin 2x.$$

$$\therefore \text{The solution is,}$$

~~$$y = c_1 \cos 2x + c_2 \sin 2x + x$$~~

$$y = c_1 \cos 2x + c_2 \sin 2x + \frac{x}{4} \sin 2x$$

---

7). $y'' + 2y = e^x + 2$ --- ①

ans: $y'' + 2y = 0$

$$\implies \lambda^2 + 2 = 0 \implies \lambda = \pm i\sqrt{2}$$

$$\therefore y_h = c_1 \cos \sqrt{2}x + c_2 \sin \sqrt{2}x.$$

$$r(x) = e^x + 2$$

$$\implies y_p = Ke^x + M.$$

$$y_p' = Ke^x \quad \& \quad y_p'' = Ke^x.$$

Substituting in ①,

$$Ke^x + 2(Ke^x + M) = e^x + 2$$

$$(K + 2K) e^x + 2M = e^x + 2.$$

<!-- page 29 | Page 29 -->

Comparing coefficients,

$$3K = 1, 
effort2M = 2$$

$$\Rightarrow K = 1/3, \quad M = 1$$

$$\therefore y_p = \frac{e^x}{3} + 1$$

$$\therefore \text{Solution is,}$$

$$y = c_1 \cos\sqrt{2}x + c_2 \sin\sqrt{2}x + \frac{e^x}{3} + 1$$

8). Solve $y'' + 3y' + 2y = -x + 1$.

(Ans: $y_h = c_1 e^{-3x} + c_2 e^{-x}$.

$$\therefore y_p = K_1 x + K_0$$

$$= -\frac{x}{2} + \frac{1}{4}$$

$$\therefore y = c_1 e^{-3x} + c_2 e^{-x} - \frac{x}{2} + \frac{1}{4}$$

9). $y'' + y' = x^2 + 2x + 4$.

(Ans: $y_h = c_1 + c_2 e^{-x}$

$$y_p = [Ax^2 + Bx + C]x = Ax^3 + Bx^2 + Cx$$

$$= \frac{1}{3}x^3 + 4x$$

$$y = c_1 + c_2 e^{-x} + \frac{x^3}{3} + 4x$$

10). $y'' - 2y' + 3y = x^2 + \cos x$.

ans: $\lambda^2 - 2\lambda + 3 = 0$.

$$\lambda = \frac{2 \pm \sqrt{4 - 3\times 4}}{2}$$

$$= \frac{2 \pm 2\sqrt{2}i}{2} = 1 \pm i\sqrt{2}$$

$$y_h = e^x [c_1 \cos\sqrt{2}x + c_2 \sin\sqrt{2}x]$$

$$r(x) = x^2 + \cos x.$$

$$\therefore y_p = K_2 x^2 + K_1 x + K_0 + A\cos x + B\sin x$$

$$y_p' = 2K_2 x + K_1 - A\sin x + B\cos x$$

$$y_p'' = 2K_2 - A\cos x - B\sin x.$$

Substituting,

$$[2K_2 - A\cos x - B\sin x] - 2[2K_2 x + K_1 - A\sin x + B\cos x] + 3[K_2 x^2 + K_1 x + K_0 + A\cos x + B\sin x] = x^2 + \cos x.$$

$$(-A - 2B + 3A)\cos x + (-B + 2A + 3B)\sin x + 3K_2 x^2 + (-4K_2 + 3K_1)x + (2K_2 - 2K_1 + 3K_0) = x^2 + \cos x.$$

Comparing coefficients,

$$\begin{aligned}
2A - 2B &= 1 \\
+\quad 2A + 2B &= 0 \\
\hline
4A &= 1 \implies A = 1/4
\end{aligned}$$

$$\begin{aligned}
A &= 1/4 \\
2B &= -2A \\
B &= -A = -1/4
\end{aligned}$$

$$-4K_2 + 3K_1 = 0$$

$$3K_2 = 1 \implies K_2 = 1/3$$

$$\therefore 3K_1 = 4K_2 = 4 \times \frac{1}{3} = \frac{4}{3}$$

$$\implies K_1 = \frac{4}{9}$$

$$2K_2 - 2K_1 + 3K_0 = 0$$

$$\implies 3K_0 = 2K_1 - 2K_2 = \frac{8}{9} - \frac{2}{3} = \frac{2}{9}$$

$$\implies K_0 = \frac{2}{27}$$

<!-- page 30 | Page 30 -->

$$y_p = \frac{x^2}{3} + \frac{4x}{9} + \frac{2}{27} + \frac{\cos x}{4} - \frac{\sin x}{4}$$

$$\therefore \text{The solution is,}$$
$$y = e^x \left[ c_1 \cos\sqrt{2}x + c_2 \sin\sqrt{2}x \right] + \frac{x^2}{3} + \frac{4x}{9} + \frac{2}{27} + \frac{\cos x}{4} - \frac{\sin x}{4}$$

---

11) $y'' - 4y' + 13y = e^{2x} \cos x$.

am: $\lambda^2 - 4\lambda + 13 = 0$

$$\lambda = \frac{4 \pm \sqrt{16 - 4 \times 13}}{2}$$

$$= \frac{4 \pm 6i}{2} = 2 \pm 3i$$

$$\therefore y_h = e^{2x} (c_1 \cos 3x + c_2 \sin 3x).$$

$$r(x) = e^{2x} \cos x$$

$$y_p = e^{2x} [K \cos x + M \sin x]$$

$$y_p' = e^{2x} [-K \sin x + M \cos x] + 2e^{2x} [K \cos x + M \sin x].$$

$$y_p'' = e^{2x} [-K \cos x - M \sin x] + 2e^{2x} [-K \sin x + M \cos x] + 2e^{2x} [-K \sin x + M \cos x] + 4e^{2x} [K \cos x + M \sin x].$$

$$= e^{2x} [-K \cos x - M \sin x - 2K \sin x + 2M \cos x - 2K \sin x + 2M \cos x + 4K \cos x + 4M \sin x]$$

Substituting,

$$e^{2x} \left[ (3K + 4M) \cos x + (-4K + 3M) \sin x \right]$$

$$- 4 e^{2x} \left[ (-K + 2M) \sin x + (M + 2K) \cos x \right]$$

$$+ 13 e^{2x} [K \cos x + M \sin x]$$

$$= e^{2x} \cos x.$$

$$[3K + 4M - 4M - 8K + 13K] \cos x + [-4K + 3M + 4K - 8M + 13M] \sin x = \cos x.$$

Comparing coefficients,

$$8K = 1 \implies K = 1/8$$

$$8M = 0 \implies M = 0$$

$$\therefore y_p = e^{2x} \left[ \frac{1}{8} \cos x \right]$$

$$\therefore \text{The solution is,}$$
$$y = e^{2x} (c_1 \cos 3x + c_2 \sin 3x) + \frac{e^{2x}}{8} \cos x.$$

<!-- page 31 | Solution by Variation of Parameters. -->

### Solution by Variation of Parameters.

Consider a non-homogeneous linear ODE,
$$y'' + p(x)y' + q(x)y = r(x) \longrightarrow (1)$$

Then, solution of (1) is, $y = y_h + y_p$

By method of variation of parameters,
$$y_p(x) = -y_1 \int \frac{y_2 r}{W} \, dx + y_2 \int \frac{y_1 r}{W} \, dx.$$

where $y_1, y_2$ form basis of solutions of $y'' + p(x)y' + q(x)y = 0$ on $I$

& $W$ is the wronskian of $y_1, y_2$

$$ie, \ W = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_2 y_1'.$$

1) Solve $y'' + y = \sec x \longrightarrow (1)$

Ans: Corresponding homogeneous part of (1) is
$$y'' + y = 0$$
$$\Rightarrow \text{chara. eq}^n \text{ is } \lambda^2 + 1 = 0 \Rightarrow \lambda = \pm i \quad \Rightarrow y_1 = \cos x, \ y_2 = \sin x$$

$$\therefore y_h = c_1 \cos x + c_2 \sin x.$$

Here, $y_1 = \cos x, \ y_2 = \sin x$.

$$\therefore W = \begin{vmatrix} \cos x & \sin x \\ -\sin x & \cos x \end{vmatrix} = \cos^2 x + \sin^2 x = 1$$

$$\therefore y_p = -\cos x \int \frac{\sin x \sec x}{1} \, dx + \sin x \int \frac{\cos x \sec x}{1} \, dx$$

<!-- page 32 | Page 32 -->

$$y_p = -\cos x \int \frac{\sin x}{\cos x} \, dx + \sin x \int \frac{\cos x}{\cos x} \, dx$$

$$\begin{aligned}
\cos x &= t \\
-\sin x \, dx &= dt \\
\int \frac{\sin x}{\cos x} \, dx &= \int \frac{-dt}{t} \\
&= -\log t.
\end{aligned}$$

$$\phantom{y_p} = -\cos x \times -\ln |\cos x| + x \sin x$$
$$\phantom{y_p} = \cos x \ln |\cos x| + x \sin x.$$

$$\therefore y = y_h + y_p = C_1 \cos x + C_2 \sin x + \ln |\cos x| \cos x + x \sin x$$
$$= (C_1 + \ln |\cos x|) \cos x + (C_2 + x) \sin x.$$

2) $y'' + 9y = \sec 3x$.

Ans: Corresponding homogeneous ODE,
$$y'' + 9y = 0$$
Charac. eqn is, $\lambda^2 + 9 = 0 \Rightarrow \lambda = \pm 3i \Rightarrow y_1 = \cos 3x, \; y_2 = \sin 3x$.

$$\therefore y_h = C_1 \cos 3x + C_2 \sin 3x$$

$$W(y_1, y_2) = \begin{vmatrix} \cos 3x & \sin 3x \\ -3 \sin 3x & 3 \cos 3x \end{vmatrix} = 3 \cos^2 3x + 3 \sin^2 3x = 3$$

$$\begin{aligned}
\therefore y_p &= -y_1 \int \frac{y_2 r}{W} \, dx + y_2 \int \frac{y_1 r}{W} \, dx \\
&= -\cos 3x \int \frac{\sin 3x \times \sec 3x}{3} \, dx + \sin 3x \int \frac{\cos 3x \times \sec 3x}{3} \, dx \\
&= \frac{-\cos 3x}{3} \int \frac{\sin 3x}{\cos 3x} \, dx + \frac{\sin 3x}{3} \int dx
\end{aligned}$$

<!-- page 33 | Page 33 -->

$$= \frac{1}{9} \cos 3x \ln |\cos 3x| + \frac{x \sin 3x}{3}$$

$$\therefore y = y_h + y_p = C_1 \cos 3x + C_2 \sin 3x + \frac{1}{9} \cos 3x \ln |\cos 3x| + \frac{x \sin 3x}{3}$$

3) $y'' - 2y' + 5y = e^x \tan 2x$

Hom: $y'' - 2y' + 5y = 0$

$$\lambda^2 - 2\lambda + 5 = 0$$

$$\lambda = \frac{2 \pm \sqrt{4 - 4 \cdot 5}}{2} = \frac{2 \pm 4i}{2} = 1 \pm 2i$$

$$\therefore y_1 = e^x \cos 2x, \quad y_2 = e^x \sin 2x$$

$$y_h = e^x (C_1 \cos 2x + C_2 \sin 2x)$$

~~$$W = e^x \cos 2x \quad e^x \sin 2x$$~~
~~$$-2 \sin 2x \cos 2x$$~~

$$W = y_1 y_2' - y_2 y_1'$$

$$= (e^x \cos 2x)(2e^x \cos 2x + e^x \sin 2x) - e^x \sin 2x (-2 \sin 2x \cdot e^x + e^x \cos 2x)$$

$$= 2e^{2x} \cos^2 2x + e^{2x} \cos 2x \sin 2x + 2e^{2x} \sin^2 2x - e^{2x} \sin 2x \cos 2x$$

$$= 2e^{2x}$$

~~$$\therefore y_p = -e^x \cos 2x \int \frac{e^x \sin 2x}{2e^{2x}} dx + e^x \sin 2x \int \frac{e^x \cos 2x}{2e^{2x}} dx$$~~

$$\therefore y_p = -e^x \cos 2x \int \frac{e^x \sin 2x \cdot e^x \tan 2x}{2e^{2x}} dx + e^x \sin 2x \int \frac{e^x \cos 2x \cdot e^x \tan 2x}{2e^{2x}} dx$$

<!-- page 34 | Page 34 -->

$$ = -e^x \cos 2x \int \frac{\sin 2x \tan 2x}{2} \, dx + e^x \sin 2x \int \frac{\cos 2x \tan 2x}{2} \, dx $$

$$ = -\frac{e^x \cos 2x}{2} \int \frac{\sin 2x \sin 2x}{\cos 2x} \, dx + \frac{e^x \sin 2x}{2} \int \cos 2x \frac{\sin 2x}{\cos 2x} \, dx $$

$$ = -\frac{e^x \cos 2x}{2} \int \frac{\sin^2 2x}{\cos 2x} \, dx + \frac{e^x \sin 2x}{2} \int \sin 2x \, dx $$

$$ = -\frac{e^x \cos 2x}{2} \int \frac{1 - \cos^2 2x}{\cos 2x} \, dx + \frac{e^x \sin 2x}{2} \frac{-\cos 2x}{2} $$

$$ = -\frac{e^x \cos 2x}{2} \int \sec 2x - \cos 2x \, dx + \frac{-e^x \sin 2x \cos 2x}{4} $$

$$ = -\frac{e^x \cos 2x}{2} \left[ \frac{\ln|\sec 2x + \tan 2x|}{2} - \frac{\sin 2x}{2} \right] - \frac{e^x \sin 2x \cos 2x}{4} $$

$$ \therefore y_p = -\frac{e^x \cos 2x}{4} \ln|\sec 2x + \tan 2x| + \frac{e^x \cos 2x \sin 2x}{4} - \frac{e^x \sin 2x \cos 2x}{4} $$

$$ = -\frac{1}{4} e^x \cos 2x \ln|\sec 2x + \tan 2x| $$

$$\therefore \text{The solution is,} $$

$$ y = e^x (c_1 \cos 2x + c_2 \sin 2x) - \frac{1}{4} e^x \cos 2x \ln|\sec 2x + \tan 2x| $$

<!-- page 35 | Page 35 -->

4). Solve $y'' + 2y' + y = 4e^{-x} \	imes \log x$.

Ans:
$$y'' + 2y' + y = 0$$

$$\text{Chara. eqtn: } \lambda^2 + 2\lambda + 1 = 0 \implies (\lambda + 1)^2 = 0 \implies \lambda = -1, -1$$

$$\therefore y_1 = e^{-x}, \; y_2 = xe^{-x}$$

$$y_h = (c_1 + c_2 x)e^{-x}$$

$$y_p = -y_1 \int \frac{y_2 r}{w} \, dx + y_2 \int \frac{y_1 r}{w} \, dx$$

$$w = y_1 y_2' - y_2 y_1' = e^{-x}[-xe^{-x} + e^{-x}] - xe^{-x}[-e^{-x}]$$

$$= -xe^{-2x} + e^{-2x} + xe^{-2x} = \underline{\underline{e^{-2x}}}$$

$$\therefore y_p = -e^{-x} \int \frac{xe^{-x} \times 4e^{-x} \log x}{e^{-2x}} \, dx + xe^{-x} \int \frac{e^{-x} \times 4e^{-x} \log x}{e^{-2x}} \, dx$$

$$= -e^{-x} \times 4 \int x \log x \, dx + 4xe^{-x} \int \log x \, dx$$

$$= -4e^{-x} \left[ \log x \cdot \frac{x^2}{2} - \int \frac{1}{x} \cdot \frac{x^2}{2} \right] + 4xe^{-x} [x \log x - x]$$

$$= -4e^{-x} \left[ \frac{x^2}{2} \log x - \frac{x^2}{4} \right] + 4x^2 e^{-x} \log x - 4x^2 e^{-x}$$

~~$$= -2e^{-x} x^2 \log x + 2x^2 e^{-x} + 4x^2 e^{-x} \log x - 4x^2 e^{-x}$$~~

$$= e^{-x} \left[-2x^2 \log x + x^2\right] + 4xe^{-x} [x \log x - x]$$

$$\therefore \text{solution is,}$$
$$y = (c_1 + c_2 x)e^{-x} + e^{-x} \left[-2x^2 \log x + x^2\right] + 4xe^{-x} [x \log x - x]$$

<!-- page 36 | Page 36 -->

5) Solve $y'' + y = x \sin x$.

ans : $\lambda^2 + 1 = 0 \Rightarrow \lambda = \pm i$

$$\begin{aligned}
\therefore y_1 &= \cos x, \; y_2 = \sin x \\
y_h &= c_1 \cos x + c_2 \sin x
\end{aligned}$$

$$y_p = -y_1 \int \frac{y_2 r}{w} \, dx + y_2 \int \frac{y_1 r}{w} \, dx$$

$$w = y_1 y_2' - y_2 y_1' = \cos x \times \cos x - \sin x \times -\sin x = \cos^2 x + \sin^2 x = 1$$

$$\begin{aligned}
\therefore y_p &= -\cos x \int \frac{\sin x (x \sin x)}{1} \, dx + \sin x \int \frac{\cos x (x \sin x)}{1} \, dx \\
&= -\cos x \int x \sin^2 x \, dx + \sin x \int x \cos x \sin x \, dx \\
&= -\cos x \int x \left(\frac{1 - \cos 2x}{2}\right) dx + \sin x \int x \frac{\sin 2x}{2} \, dx \\
&= -\frac{\cos x}{2} \int x - x \cos 2x \, dx + \frac{\sin x}{2} \int x \sin 2x \, dx \\
&= -\frac{\cos x}{2} \left\{ \frac{x^2}{2} - \left[x \frac{\sin 2x}{2} - \int \frac{\sin 2x}{2}\right] \right\} + \frac{\sin x}{2} \left[x \frac{-\cos 2x}{2} + \int \frac{\cos 2x}{2} \, dx\right] \\
&= -\frac{\cos x}{2} \left[\frac{x^2}{2} - \frac{x \sin 2x}{2} - \frac{\cos 2x}{4}\right] + \frac{\sin x}{2} \left[\frac{-x \cos 2x}{2} + \frac{\sin 2x}{4}\right] \\
&= -\cos x \left[\frac{x^2}{4} - \frac{x \sin 2x}{4} - \frac{\cos 2x}{8}\right] + \sin x \left[\frac{-x \cos 2x}{4} + \frac{\sin 2x}{8}\right]
\end{aligned}$$

$\therefore$ The solution is,
$$y = c_1 \cos x + c_2 \sin x - \cos x \left[\frac{x^2}{4} - \frac{x \sin 2x}{4} - \frac{\cos 2x}{8}\right] + \sin x \left[\frac{-x \cos 2x}{4} + \frac{\sin 2x}{8}\right]$$

<!-- page 37 | Page 37 -->

