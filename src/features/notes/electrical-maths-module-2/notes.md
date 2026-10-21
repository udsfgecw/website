<!-- page 1 | Start here -->

## Second-Order Linear Ordinary Differential Equations

Learners will master techniques for solving second-order linear ordinary differential equations, covering both homogeneous and nonhomogeneous systems. They will be able to apply characteristic equations, the method of undetermined coefficients, and variation of parameters to solve initial value problems.

**Before you start:** Differential Calculus (differentiation rules, product rule, chain rule); Integral Calculus (integration by parts, standard trigonometric and logarithmic integrals); Basic Linear Algebra and System of Linear Equations.

### Your path through this module

1. **Structure of Second-Order Linear ODEs**: Any general solution to a linear homogeneous second-order ODE is formed by a linear combination of exactly two independent solutions.
2. **Homogeneous ODEs with Constant Coefficients**: Assuming an exponential solution transforms a differential equation into a simple quadratic polynomial equation.
3. **Method of Undetermined Coefficients**: Differentiating polynomials, exponentials, and sines/cosines reproduces their own family, allowing us to guess the particular solution's algebraic form.
4. **Method of Variation of Parameters**: Replacing the constants in the homogeneous solution with variable functions yields an exact formula valid for any continuous forcing function.
5. **Solution Verification, IVPs, and Reduction of Order**: Practicing direct verification and reduction of order confirms how linear independence operates algebraically.
6. **Constant-Coefficient Homogeneous ODEs and IVPs**: Mastering the three root cases of the characteristic equation enables instant writing of the general solution.
7. **Undetermined Coefficients: Guided Problems and IVPs**: Initial conditions must always be applied to the complete solution y_h + y_p, never to y_h alone.
8. **Undetermined Coefficients: Comprehensive Case Practice**: Whenever the driving function mimics a natural solution mode, the trial solution must be boosted by powers of x to preserve independence.
9. **Variation of Parameters Practice**: Evaluating Wronskian-based integrals provides particular solutions even for functions that do not possess finite derivative sets.

<!-- page 2 | Structure of Second-Order Linear ODEs -->

## Structure of Second-Order Linear ODEs

In differential calculus, you learned to take derivatives to find rates of change, such as velocity and acceleration from position. This lesson lets you classify second-order differential equations and build their complete solution spaces from individual pieces.

Imagine a mass bouncing on a spring: Newton's second law relates its acceleration ($y''$) to its velocity ($y'$) and position ($y$). When the relationship involves only first powers of these terms, we write the equation in standard form as $y'' + p(x)y' + q(x)y = r(x)$. It is called *linear* because $y$ and its derivatives are never raised to powers or multiplied by each other. If the external driving force $r(x) = 0$, the equation is *homogeneous*; if $r(x) \neq 0$, it is *nonhomogeneous*.

For a homogeneous linear equation, the *superposition principle* guarantees that if $y_1(x)$ and $y_2(x)$ are solutions, any combination $y(x) = c_1 y_1(x) + c_2 y_2(x)$ is also a solution for any constants $c_1$ and $c_2$. To describe every possible motion, the two solutions must be *linearly independent*, meaning one is not simply a constant multiple of the other ($y_2 \neq k y_1$). Two independent solutions form a *basis* (or fundamental system), and their combination provides the *general solution*.

To test independence, we use a determinant called the *Wronskian*, defined as $W(y_1, y_2) = y_1 y_2' - y_1' y_2$. If $W(y_1, y_2) \neq 0$ across an interval, the two solutions are independent and span the full solution space.

If you already know one valid solution $y_1(x)$, you can find a second independent solution $y_2(x)$ using *reduction of order*. By substituting $y_2(x) = v(x)y_1(x)$ into the ODE, the equation collapses into a simpler first-order problem for $v'$, yielding the formula:

$$y_2(x) = y_1(x) \int \frac{e^{-\int p(x)\,dx}}{y_1(x)^2}\,dx$$

### Worked example

Find a second independent solution to $y'' - 4y' + 4y = 0$, given that $y_1(x) = e^{2x}$.

1. **Identify the coefficient $p(x)$**: In standard form, the coefficient of $y'$ is $p(x) = -4$.
2. **Compute the numerator exponential**: Calculate $e^{-\int p(x)\,dx} = e^{-\int (-4)\,dx} = e^{4x}$.
3. **Set up and evaluate the integral**: Divide by $y_1^2 = (e^{2x})^2 = e^{4x}$:

   $$\int \frac{e^{4x}}{e^{4x}}\,dx = \int 1\,dx = x$$

4. **Form the second solution**: Multiply this result by $y_1(x)$ to get $y_2(x) = x e^{2x}$.
5. **Write the general solution**: Combine them to obtain $y(x) = c_1 e^{2x} + c_2 x e^{2x}$.

### Remember

- The general solution to $y'' + p(x)y' + q(x)y = 0$ requires exactly two linearly independent solutions: $y = c_1 y_1 + c_2 y_2$.
- Two solutions are independent if their Wronskian $W = y_1 y_2' - y_1' y_2$ is nonzero.
- If one solution $y_1$ is known, reduction of order determines $y_2$ by setting $y_2 = v(x)y_1$.

<!-- page 3 | Homogeneous ODEs with Constant Coefficients -->

## Homogeneous ODEs with Constant Coefficients

In the previous lesson, we saw that any general solution to a second-order linear homogeneous equation is built from two independent solutions: $y = c_1 y_1 + c_2 y_2$. When the equation has constant coefficients, finding those two solutions requires nothing more than high school algebra.

Consider the equation $y'' + a y' + b y = 0$, where $a$ and $b$ are fixed real numbers. Think of a physical system like a car shock absorber: the restoring and damping forces depend directly on position and speed. The only function whose derivatives naturally match its own shape—allowing terms to cancel to zero—is the exponential function $y = e^{\lambda x}$.

If we substitute $y = e^{\lambda x}$, $y' = \lambda e^{\lambda x}$, and $y'' = \lambda^2 e^{\lambda x}$ into the differential equation, we get $(\lambda^2 + a\lambda + b)e^{\lambda x} = 0$. Because $e^{\lambda x}$ is never zero, we can divide it out. This leaves the **characteristic equation** (also called the auxiliary equation): $\lambda^2 + a\lambda + b = 0$. Solving this quadratic gives the values of $\lambda$ needed to construct our solution.

The roots fall into three distinct cases depending on the quadratic discriminant:

- **Distinct real roots** ($\lambda_1 \neq \lambda_2$): The solutions are pure exponentials, giving $y = c_1 e^{\lambda_1 x} + c_2 e^{\lambda_2 x}$. On a graph, this looks like smooth exponential growth or decay.
- **Repeated real root** ($\lambda_1 = \lambda_2 = \lambda$): A single root only gives one exponential. To obtain a second independent solution, multiply by $x$: $y = c_1 e^{\lambda x} + c_2 x e^{\lambda x}$.
- **Complex conjugate roots** ($\lambda = \alpha \pm i\beta$): Using Euler's formula ($e^{i\theta} = \cos\theta + i\sin\theta$), imaginary powers convert into sines and cosines: $y = e^{\alpha x}(c_1 \cos(\beta x) + c_2 \sin(\beta x))$. Graphically, this is an oscillation with an exponentially growing or decaying amplitude.

An **initial value problem** provides starting values $y(x_0) = k_0$ and $y'(x_0) = k_1$. Substituting these values into the general solution and its derivative yields two linear equations to pin down $c_1$ and $c_2$.

### Worked example

Solve $y'' - 4y' + 13y = 0$ subject to $y(0) = 2$ and $y'(0) = 1$.

1. **Write the characteristic equation**: Replace derivatives with powers of $\lambda$ to get $\lambda^2 - 4\lambda + 13 = 0$.
2. **Find the roots**: By the quadratic formula, $\lambda = \frac{4 \pm \sqrt{16 - 52}}{2} = 2 \pm 3i$. Here $\alpha = 2$ and $\beta = 3$.
3. **Form the general solution**: Plug $\alpha$ and $\beta$ into the complex-root template: $y(x) = e^{2x}(c_1 \cos(3x) + c_2 \sin(3x))$.
4. **Differentiate to prepare for initial conditions**: Using the product rule, $y'(x) = 2e^{2x}(c_1 \cos(3x) + c_2 \sin(3x)) + e^{2x}(-3c_1 \sin(3x) + 3c_2 \cos(3x))$.
5. **Apply $y(0) = 2$**: Since $e^0 = 1$, $\cos(0) = 1$, and $\sin(0) = 0$, we find $c_1 = 2$.
6. **Apply $y'(0) = 1$**: Evaluating $y'(0)$ gives $2c_1 + 3c_2 = 1$. Substituting $c_1 = 2$ yields $4 + 3c_2 = 1$, so $c_2 = -1$.
7. **State the final result**: $y(x) = e^{2x}(2\cos(3x) - \sin(3x))$.

### Remember

- The characteristic equation $\lambda^2 + a\lambda + b = 0$ converts the ODE into an algebraic quadratic problem.
- Repeated roots gain a factor of $x$; complex roots $\alpha \pm i\beta$ produce oscillations governed by $e^{\alpha x}\cos(\beta x)$ and $e^{\alpha x}\sin(\beta x)$.
- Given initial conditions $y(x_0)$ and $y'(x_0)$, differentiate the general solution once to solve for constants $c_1$ and $c_2$.

<!-- page 4 | Method of Undetermined Coefficients -->

## Method of Undetermined Coefficients

Now that you can solve homogeneous equations where a system vibrates freely, we can add an external push—known as a forcing term—to model driven systems like a car riding over rhythmic bumps. This lesson shows you how to find the full response of the system by predicting the algebraic shape of the forced motion.

When an external force $f(x)$ acts on the system, giving $a y'' + b y' + c y = f(x)$, the complete solution divides into two parts: $y(x) = y_h(x) + y_p(x)$. The homogeneous solution $y_h$ describes the natural, unforced behavior, while the particular solution $y_p$ is any single specific function that balances the external push.

Why does guessing work? Differentiating polynomials, exponentials, and sines or cosines keeps them within their own algebraic families. A derivative of an exponential is an exponential, and derivatives of sines produce cosines. Therefore, we select a trial form for $y_p$ using unknown constants, plug it into the differential equation, and equate like terms on both sides to find those constants.

If the forcing function consists of several added pieces, the sum rule tells us to add the corresponding trial forms together. However, if any term in your trial guess duplicates a term already present in $y_h$, the differential operator will crush it to zero instead of matching the force. This behavior represents resonance. To fix it, use the modification rule: multiply the trial guess by $x$ (or $x^2$ if the characteristic root is repeated) until no part duplicates a term in $y_h$.

### Worked example

Find the general solution to $y'' - 3y' + 2y = 4e^{3x}$.

1. **Find the homogeneous solution $y_h$:** Solve the characteristic equation $r^2 - 3r + 2 = (r - 1)(r - 2) = 0$. The roots are $r = 1$ and $r = 2$, yielding $y_h = C_1 e^{x} + C_2 e^{2x}$.
2. **Choose the trial form for $y_p$:** The forcing term is $4e^{3x}$. Because $e^{3x}$ does not appear in $y_h$, duplication is not an issue. We guess $y_p = A e^{3x}$, where $A$ is an undetermined coefficient.
3. **Substitute into the differential equation:** Taking derivatives gives $y_p' = 3A e^{3x}$ and $y_p'' = 9A e^{3x}$. Substituting these into the left side yields $(9A e^{3x}) - 3(3A e^{3x}) + 2(A e^{3x}) = 2A e^{3x}$.
4. **Solve for the coefficient:** Set the result equal to the forcing function: $2A e^{3x} = 4e^{3x}$. Equating coefficients gives $2A = 4$, so $A = 2$. Thus, $y_p = 2e^{3x}$.
5. **Write the complete solution:** Combine the natural and driven responses: $y(x) = C_1 e^{x} + C_2 e^{2x} + 2e^{3x}$.

### Remember

- The general solution is always the sum of the natural response and the forced response: $y = y_h + y_p$.
- Trial forms must mirror the family of the forcing function (polynomial, exponential, or sinusoidal combinations).
- If a trial term duplicates any part of $y_h$, multiply that trial term by $x$ until the overlap is gone.

<!-- page 5 | Method of Variation of Parameters -->

## Method of Variation of Parameters

You already know how to find particular solutions when the forcing term has cycling derivatives, like polynomials or sines. But what happens if an engine is driven by a force like $\sec(x)$ or $\ln(x)$? Because their derivatives keep creating new shapes indefinitely, guessing fails; variation of parameters provides a universal formula that works for any continuous forcing function.

Imagine a radio receiver with two tuning knobs, $c_1$ and $c_2$, in the homogeneous response $y_h = c_1 y_1 + c_2 y_2$. Instead of leaving those knobs permanently fixed at constant values, we let them continuously adjust over time as functions, $u_1(x)$ and $u_2(x)$. Our new particular solution takes the form $y_p = u_1(x)y_1(x) + u_2(x)y_2(x)$.

To find these functions, we measure how independent the two fundamental solutions are using the **Wronskian**, denoted $W(y_1, y_2)$. The Wronskian is a $2 \times 2$ determinant formed by the solutions and their slopes: $W = y_1 y_2' - y_2 y_1'$. You can picture this as tracking the area spanned by the two solution states at each point; since $y_1$ and $y_2$ are independent, this area is never zero.

For an equation in standard form $y'' + p(x)y' + q(x)y = g(x)$, substituting $y_p$ yields two straightforward formulas for the rates at which our knobs must turn:

$$u_1'(x) = -\frac{y_2(x) g(x)}{W(x)}, \quad u_2'(x) = \frac{y_1(x) g(x)}{W(x)}$$

Integrating both gives $u_1(x)$ and $u_2(x)$, directly assembling $y_p$.

### Worked example

Find the general solution to $y'' + y = \sec(x)$.

1. **Find the homogeneous solutions:** The characteristic equation $r^2 + 1 = 0$ gives roots $r = \pm i$, so $y_1 = \cos(x)$ and $y_2 = \sin(x)$.
2. **Compute the Wronskian:** Apply the determinant definition to ensure independence:

   $$W = (\cos(x))(\cos(x)) - (\sin(x))(-\sin(x)) = \cos^2(x) + \sin^2(x) = 1$$

3. **Set up and evaluate $u_1$ and $u_2$:** Plug $g(x) = \sec(x)$ into the rate formulas:

   $$u_1'(x) = -\frac{\sin(x)\sec(x)}{1} = -\tan(x) \implies u_1(x) = \ln|\cos(x)|$$

$$u_2'(x) = \frac{\cos(x)\sec(x)}{1} = 1 \implies u_2(x) = x$$

4. **Assemble the general solution:** Combine $y = y_h + y_p$:

   $$y(x) = c_1\cos(x) + c_2\sin(x) + \cos(x)\ln|\cos(x)| + x\sin(x)$$

### Remember
- Always divide the ODE by the coefficient of $y''$ first so that $g(x)$ is identified correctly.
- The Wronskian $W = y_1 y_2' - y_2 y_1'$ sits in the denominator of both parameter rates.
- The first rate carries a negative sign: $u_1' = -y_2 g / W$, while $u_2' = y_1 g / W$.

<!-- page 6 | Solution Verification, IVPs, and Reduction of Order -->

## Solution Verification, IVPs, and Reduction of Order
Having covered fundamental ODE properties in theory, you will now practice verifying solutions and generating independent bases from scratch. Practicing direct verification and reduction of order confirms how linear independence operates algebraically.

### The idea
A function $y = h(x)$ is a **solution** of a second-order ODE on an open interval $I$ if it is twice differentiable on $I$ and turns the equation into a true identity when you substitute $h$, $h'$, and $h''$ for $y$, $y'$, and $y''$. Once you verify two solutions $y_1$ and $y_2$ that are not proportional ($y_1 / y_2 \neq \text{constant}$), they form a **basis** (or **fundamental system**) of linearly independent solutions. Their linear combination $y = c_1 y_1 + c_2 y_2$ is the **general solution**.

An **initial value problem** (IVP) pairs the ODE with two **initial conditions**, $y(x_0) = k_0$ and $y'(x_0) = k_1$, at a single point $x_0$. Because the general solution contains two arbitrary constants $c_1$ and $c_2$, you need both the function value and the derivative value to lock in a unique curve. Substituting these conditions into $y$ and $y'$ gives two algebraic equations; solving for $c_1$ and $c_2$ yields the **particular solution**.

Sometimes you only know one solution $y_1$ of a homogeneous equation in **standard form**, $y'' + p(x)y' + q(x)y = 0$, where the coefficient of $y''$ is 1. **Reduction of order** finds a second, independent solution $y_2$ without guessing. Seeking $y_2$ as a non-constant multiple of $y_1$ cancels the zero-order terms and reduces the problem to a direct integration:

$$y_2 = y_1 \int \frac{1}{y_1^2} e^{-\int p(x)\,dx}\,dx$$

The resulting $y_1$ and $y_2$ are guaranteed to form a basis.

### Worked example
**Given:** The homogeneous ODE $y'' + y = 0$ and the candidate functions $y = \cos x$ and $y = \sin x$.
**Find:** Whether $y = \cos x$ and $y = \sin x$ are solutions of the ODE.

1. Differentiate the first candidate $y = \cos x$ twice to get $y' = -\sin x$ and $y'' = -\cos x$, because we must substitute both the function and its second derivative into the ODE.
2. Substitute $y$ and $y''$ into $y'' + y = 0$ to obtain $-\cos x + \cos x = 0$, which simplifies to the identity $0 = 0$ and confirms $y = \cos x$ is a solution.
3. Differentiate the second candidate $y = \sin x$ twice to find $y' = \cos x$ and $y'' = -\sin x$.
4. Substitute these into $y'' + y = 0$ to get $-\sin x + \sin x = 0$, confirming that $y = \sin x$ is also a solution.

**Answer:** Both $y = \cos x$ and $y = \sin x$ are solutions of $y'' + y = 0$.

### More problems

#### Problem 2: Checking exponential candidates by substitution
**Given:** The ODE $y'' - 5y' + 6y = 0$ and candidate functions $y = e^{2x}$ and $y = e^x$.
**Find:** Whether $e^{2x}$ and $e^x$ are solutions of the ODE.

1. Differentiate $y = e^{2x}$ twice using the chain rule to get $y' = 2e^{2x}$ and $y'' = 4e^{2x}$.
2. Substitute into the ODE to get $4e^{2x} - 5(2e^{2x}) + 6e^{2x} = 0$, confirming $y = e^{2x}$ is a solution.
3. Differentiate $y = e^x$ twice to get $y' = e^x$ and $y'' = e^x$.
4. Substitute into the ODE to get $e^x - 5e^x + 6e^x = 2e^x \neq 0$, showing $e^x$ fails the equation.

**Answer:** $y = e^{2x}$ is a solution, whereas $y = e^x$ is not a solution.

#### Problem 3: Solving an IVP with trigonometric solutions
**Given:** Solutions $y_1 = \cos x$ and $y_2 = \sin x$ for $y'' + y = 0$, with $y(0) = 3$ and $y'(0) = -0.5$.
**Find:** The general solution and the particular solution.

1. Combine the basis functions to write the general solution $y = c_1 \cos x + c_2 \sin x$.
2. Differentiate $y$ to get $y' = -c_1 \sin x + c_2 \cos x$ so we can apply the derivative condition.
3. Substitute $y(0) = 3$ into $y$ to get $c_1 \cos 0 + c_2 \sin 0 = 3$, which gives $c_1 = 3$.
4. Substitute $y'(0) = -0.5$ into $y'$ to get $-c_1 \sin 0 + c_2 \cos 0 = -0.5$, giving $c_2 = -0.5$.
5. Insert $c_1 = 3$ and $c_2 = -0.5$ into the general solution to form the particular solution.

**Answer:** General solution: $y = c_1 \cos x + c_2 \sin x$; Particular solution: $y = 3\cos x - 0.5\sin x$.

#### Problem 4: Verifying a basis and solving an IVP
**Given:** Candidates $y_1 = e^x$ and $y_2 = e^{-x}$ for $y'' - y = 0$, with $y(0) = 6$ and $y'(0) = -2$.
**Find:** Verification that $y_1$ and $y_2$ are solutions, and the particular solution of the IVP.

1. Compute $y_1' = e^x$ and $y_1'' = e^x$, then substitute into $y'' - y = 0$ to get $e^x - e^x = 0$.
2. Compute $y_2' = -e^{-x}$ and $y_2'' = e^{-x}$, then substitute into $y'' - y = 0$ to get $e^{-x} - e^{-x} = 0$.
3. Write the general solution $y = c_1 e^x + c_2 e^{-x}$ since $e^x$ and $e^{-x}$ are not proportional.
4. Differentiate the general solution to obtain $y' = c_1 e^x - c_2 e^{-x}$.
5. Apply $y(0) = 6$ and $y'(0) = -2$ to get the system $c_1 + c_2 = 6$ and $c_1 - c_2 = -2$.
6. Add the two equations to find $2c_1 = 4 \Rightarrow c_1 = 2$, then substitute back to get $c_2 = 4$.
7. Substitute $c_1 = 2$ and $c_2 = 4$ into the general solution.

**Answer:** Both $e^x$ and $e^{-x}$ are verified solutions; the particular solution is $y = 2e^x + 4e^{-x}$.

#### Problem 5: Finding a second solution by reduction of order
**Given:** The ODE $y'' - 5y' + 6y = 0$ and one known solution $y_1 = e^{2x}$.
**Find:** A second linearly independent solution $y_2$ using reduction of order.

1. Compare $y'' - 5y' + 6y = 0$ with standard form $y'' + p(x)y' + q(x)y = 0$ to identify $p(x) = -5$.
2. Substitute $y_1 = e^{2x}$ and $p = -5$ into the reduction of order formula $y_2 = y_1 \int \frac{1}{y_1^2} e^{-\int p\,dx}\,dx$.
3. Evaluate $y_1^2 = e^{4x}$ and the integrating factor $e^{-\int -5\,dx} = e^{5x}$ to get $y_2 = e^{2x} \int \frac{e^{5x}}{e^{4x}}\,dx$.
4. Simplify the integrand to $e^x$ and integrate to find $y_2 = e^{2x} \int e^x\,dx = e^{2x} e^x = e^{3x}$.

> **Watch out.** Keep the negative sign attached to $p(x) = -5$ and remember the formula already has a minus sign in $e^{-\int p\,dx}$, making the exponent $+5x$.

**Answer:** $y_2 = e^{3x}$.

<!-- page 7 | Constant-Coefficient Homogeneous ODEs and IVPs -->

## Constant-Coefficient Homogeneous ODEs and IVPs
With the general solution structure understood, you can now apply characteristic equations to solve homogeneous differential equations of increasing complexity. Mastering the three root cases of the characteristic quadratic equation allows you to write down the general solution instantly and solve initial value problems systematically.

### The idea
Substituting the exponential trial solution $y = e^{\lambda x}$ into the constant-coefficient equation $y'' + ay' + by = 0$ transforms the calculus problem into an algebra problem: the **characteristic equation** (or auxiliary equation) $\lambda^2 + a\lambda + b = 0$. Because every second-order linear homogeneous ODE requires two linearly independent solutions to form a basis, the algebraic nature of the roots $\lambda_1, \lambda_2$ dictates the exact functional form of the general solution (also called the **complementary function**, $y_h$).

When the quadratic yields two distinct real roots $\lambda_1 \neq \lambda_2$, the two exponential functions $e^{\lambda_1 x}$ and $e^{\lambda_2 x}$ are automatically independent, giving $y = c_1 e^{\lambda_1 x} + c_2 e^{\lambda_2 x}$. If the discriminant $a^2 - 4b$ is zero, you get a **real double root** $\lambda = -a/2$. Because repeating $e^{\lambda x}$ fails linear independence, reduction of order multiplies the second term by $x$, producing the basis $e^{\lambda x}$ and $x e^{\lambda x}$ and the general solution $y = (c_1 + c_2 x)e^{\lambda x}$. When the discriminant is negative, the quadratic formula produces **complex conjugate roots** $\alpha \pm i\beta$. Applying Euler's formula converts complex exponentials into real oscillating functions modulated by an exponential envelope, yielding $y = e^{\alpha x}[c_1 \cos(\beta x) + c_2 \sin(\beta x)]$.

To solve an initial value problem (IVP), you first write the general solution for the appropriate root case, differentiate it once to obtain $y'(x)$, and substitute the given initial values $y(x_0)$ and $y'(x_0)$. This creates a $2 \times 2$ linear system of algebraic equations for the unknown constants $c_1$ and $c_2$.

### Worked example
**Problem 2.2:**
**Given:** The homogeneous differential equation $y'' + 36y = 0$.
**Find:** The general solution $y(x)$ and check the answer by direct substitution.

1. Replace $y''$ with $\lambda^2$ and $y$ with $1$ to write the characteristic equation $\lambda^2 + 36 = 0$, since $y' = 0\cdot y'$ has coefficient $a = 0$.
2. Solve the quadratic equation for $\lambda$ to obtain the pure imaginary conjugate roots $\lambda = \pm 6i$, which correspond to complex roots $\alpha \pm i\beta$ with real part $\alpha = 0$ and imaginary part $\beta = 6$.
3. Substitute $\alpha = 0$ and $\beta = 6$ into the Case 3 complex-root template $y = e^{\alpha x}[c_1 \cos(\beta x) + c_2 \sin(\beta x)]$ to get the general solution $y(x) = c_1 \cos(6x) + c_2 \sin(6x)$ because $e^{0x} = 1$.
4. Differentiate $y(x)$ twice using the chain rule to verify the solution: $y'(x) = -6c_1 \sin(6x) + 6c_2 \cos(6x)$ and $y''(x) = -36c_1 \cos(6x) - 36c_2 \sin(6x)$.
5. Substitute $y''$ and $y$ into the left-hand side of the ODE: $[-36c_1 \cos(6x) - 36c_2 \sin(6x)] + 36[c_1 \cos(6x) + c_2 \sin(6x)] = 0$, confirming the solution is valid.

**Answer:** $y(x) = c_1 \cos(6x) + c_2 \sin(6x)$

### More problems

#### Problem 2.1: Distinct real roots from a two-term ODE
**Given:** The differential equation $4y'' - 25y = 0$.
**Find:** The general solution $y(x)$ and verify it by substitution.

1. Divide the equation by $4$ to put it into standard form $y'' - \frac{25}{4}y = 0$.
2. Write the characteristic equation $\lambda^2 - \frac{25}{4} = 0$ and solve to find distinct real roots $\lambda = \pm \frac{5}{2}$.
3. Write the Case 1 general solution $y(x) = c_1 e^{\frac{5}{2}x} + c_2 e^{-\frac{5}{2}x}$.
4. Differentiate twice to get $y'(x) = \frac{5}{2} c_1 e^{\frac{5}{2}x} - \frac{5}{2} c_2 e^{-\frac{5}{2}x}$ and $y''(x) = \frac{25}{4} c_1 e^{\frac{5}{2}x} + \frac{25}{4} c_2 e^{-\frac{5}{2}x}$.
5. Substitute $y''$ and $y$ into $y'' - \frac{25}{4}y = 0$ to obtain $\frac{25}{4} c_1 e^{\frac{5}{2}x} + \frac{25}{4} c_2 e^{-\frac{5}{2}x} - \frac{25}{4}[c_1 e^{\frac{5}{2}x} + c_2 e^{-\frac{5}{2}x}] = 0$.

**Answer:** $y(x) = c_1 e^{\frac{5}{2}x} + c_2 e^{-\frac{5}{2}x}$

#### Problem 2.3: General solution with distinct negative roots
**Given:** The differential equation $y'' + 9y' + 20y = 0$.
**Find:** The general solution $y(x)$ and check by substitution.

1. Form the characteristic equation $\lambda^2 + 9\lambda + 20 = 0$ and factor it as $(\lambda + 5)(\lambda + 4) = 0$.
2. Extract the distinct real roots $\lambda = -5, -4$ and write the general solution $y = c_1 e^{-5x} + c_2 e^{-4x}$.
3. Differentiate twice: $y' = -5c_1 e^{-5x} - 4c_2 e^{-4x}$ and $y'' = 25c_1 e^{-5x} + 16c_2 e^{-4x}$.
4. Substitute $y, y', y''$ into the ODE to get $(25 - 45 + 20)c_1 e^{-5x} + (16 - 36 + 20)c_2 e^{-4x} = 0$.

**Answer:** $y = c_1 e^{-5x} + c_2 e^{-4x}$

#### Problem 2.4: Repeated transcendental root
**Given:** The differential equation $y'' + 2\pi y' + \pi^2 y = 0$.
**Find:** The general solution $y(x)$ and check by substitution.

1. Write the characteristic equation $\lambda^2 + 2\pi\lambda + \pi^2 = 0$ and factor the perfect square as $(\lambda + \pi)^2 = 0$.
2. Identify the real double root $\lambda = -\pi$ and write the Case 2 general solution $y(x) = (c_1 + c_2 x)e^{-\pi x}$.
3. Differentiate using the product rule to find $y'(x) = (c_2 - \pi c_1 - \pi c_2 x)e^{-\pi x}$ and $y''(x) = (\pi^2 c_1 - 2\pi c_2 + \pi^2 c_2 x)e^{-\pi x}$.
4. Substitute $y, y', y''$ into $y'' + 2\pi y' + \pi^2 y = 0$ so all terms cancel to $0$.

**Answer:** $y(x) = (c_1 + c_2 x)e^{-\pi x}$

#### Problem 1.3: Initial value problem with pure imaginary roots
**Given:** The initial value problem $y'' + y = 0$, $y(0) = 3$, $y'(0) = -0.5$.
**Find:** The particular solution $y(x)$.

1. Solve the characteristic equation $\lambda^2 + 1 = 0$ to obtain complex roots $\lambda = \pm i$ with $\alpha = 0, \beta = 1$.
2. Write the general solution $y = C_1 \cos x + C_2 \sin x$ and differentiate to get $y' = -C_1 \sin x + C_2 \cos x$.
3. Apply $y(0) = 3$ to the general solution to find $C_1 = 3$.
4. Apply $y'(0) = -0.5$ to the derivative to find $C_2 = -0.5$, and substitute both constants into $y(x)$.

**Answer:** $y(x) = 3 \cos x - 0.5 \sin x$

#### Problem 4.2: Oscillating IVP with frequency scaling
**Given:** The initial value problem $y'' + 25y = 0$, $y(0) = 4.6$, $y'(0) = -1.2$.
**Find:** The particular solution $y(x)$.

1. Solve the characteristic equation $\lambda^2 + 25 = 0$ to get $\lambda = \pm 5i$, giving $y = c_1 \cos 5x + c_2 \sin 5x$.
2. Differentiate using the chain rule to obtain $y' = -5c_1 \sin 5x + 5c_2 \cos 5x$.
3. Substitute $y(0) = 4.6$ into $y$ to get $c_1 = 4.6$.
4. Substitute $y'(0) = -1.2$ into $y'$ to get $5c_2 = -1.2 \implies c_2 = -0.24$.

> **Watch out.** Do not forget the chain-rule factor of $5$ when differentiating $\sin 5x$, or $c_2$ will be off by a factor of $5$.

**Answer:** $y = 4.6 \cos 5x - 0.24 \sin 5x$

#### Problem 1.1: Initial value problem with distinct real roots
**Given:** The initial value problem $y'' + y' - 2y = 0$, $y(0) = 4$, $y'(0) = 5$ (solved using $y'(0) = -5$ in steps).
**Find:** The particular solution $y(x)$.

1. Factor the characteristic equation $\lambda^2 + \lambda - 2 = 0$ as $(\lambda - 1)(\lambda + 2) = 0$ to get roots $\lambda_1 = 1, \lambda_2 = -2$.
2. Write the general solution $y = c_1 e^x + c_2 e^{-2x}$ and differentiate to get $y' = c_1 e^x - 2c_2 e^{-2x}$.
3. Apply $y(0) = 4$ and $y'(0) = -5$ to form the linear system $c_1 + c_2 = 4$ and $c_1 - 2c_2 = -5$.
4. Subtract the second equation from the first to get $3c_2 = 9 \implies c_2 = 3$, which gives $c_1 = 4 - 3 = 1$.

> **Watch out.** The problem statement prints $y'(0) = 5$, but the worked steps and answer use $y'(0) = -5$ (which gives $y = e^x + 3e^{-2x}$; using $+5$ gives $y = \frac{13}{3}e^x - \frac{1}{3}e^{-2x}$).

**Answer:** $y = e^x + 3e^{-2x}$

#### Problem 4.1: Distinct real roots with zero initial velocity
**Given:** The initial value problem $y'' + y' - 6y = 0$, $y(0) = 10$, $y'(0) = 0$.
**Find:** The particular solution $y(x)$.

1. Factor the characteristic equation $\lambda^2 + \lambda - 6 = 0$ as $(\lambda + 3)(\lambda - 2) = 0$ to find roots $\lambda = -3, 2$.
2. Write the general solution $y = c_1 e^{-3x} + c_2 e^{2x}$ and its derivative $y' = -3c_1 e^{-3x} + 2c_2 e^{2x}$.
3. Substitute $x = 0$ into both expressions to form the system $c_1 + c_2 = 10$ and $-3c_1 + 2c_2 = 0$.
4. Multiply $c_1 + c_2 = 10$ by $-3$ and add to $-3c_1 + 2c_2 = 0$ to find $c_2 = 6$ and $c_1 = 4$.

**Answer:** $y = 4e^{-3x} + 6e^{2x}$

#### Problem 1.2: Double root IVP via quadratic formula
**Given:** The initial value problem $y'' + y' + 0.25y = 0$, $y(0) = 3$, $y'(0) = -3.5$.
**Find:** The particular solution $y(x)$.

1. Apply the quadratic formula to $\lambda^2 + \lambda + 0.25 = 0$: $\lambda = \frac{-1 \pm \sqrt{1 - 4(0.25)}}{2} = -0.5$.
2. Write the Case 2 general solution for the double root: $y = (C_1 + C_2 x)e^{-0.5x}$.
3. Differentiate using the product rule to obtain $y' = C_2 e^{-0.5x} - 0.5(C_1 + C_2 x)e^{-0.5x}$.
4. Substitute $y(0) = 3$ to get $C_1 = 3$, and substitute $y'(0) = -3.5$ to get $C_2 - 0.5(3) = -3.5 \implies C_2 = -2$.

**Answer:** $y = (3 - 2x)e^{-0.5x}$

#### Problem 4.3: Double root IVP via factoring
**Given:** The initial value problem $y'' + y' + 0.25y = 0$, $y(0) = 3$, $y'(0) = -3.5$.
**Find:** The particular solution $y(x)$.

1. Factor the characteristic equation $\lambda^2 + \lambda + 0.25 = 0$ as $(\lambda + 0.5)^2 = 0$ to get the double root $\lambda = -0.5, -0.5$.
2. Write the general solution $y = (c_1 + c_2 x)e^{-0.5x}$ and differentiate: $y' = (c_1 + c_2 x)(-0.5)e^{-0.5x} + c_2 e^{-0.5x}$.
3. Evaluate at $x = 0$ using $y(0) = 3$ to get $c_1 = 3$.
4. Evaluate $y'(0) = -3.5$ to get $-0.5(3) + c_2 = -3.5 \implies c_2 = -2$, then substitute $c_1, c_2$ into $y$.

> **Watch out.** The final line prints an extra leading $3 +$ typo in $y = 3 + (3 - 2x)e^{-0.5x}$; substituting $c_1 = 3$ and $c_2 = -2$ into $(c_1 + c_2 x)e^{-0.5x}$ gives $(3 - 2x)e^{-0.5x}$.

**Answer:** $y = 3 + (3 - 2x)e^{-0.5x}$ (or $y = (3 - 2x)e^{-0.5x}$)

<!-- page 8 | Undetermined Coefficients: Guided Problems and IVPs -->

## Undetermined Coefficients: Guided Problems and IVPs
You already know how to find the general solution $y_h$ for homogeneous equations with constant coefficients and how to choose trial forms for undetermined coefficients. Now you will find particular solutions $y_p$ for driven equations and apply initial conditions to the complete solution $y = y_h + y_p$.

### The idea
A **nonhomogeneous linear ODE** has a driving term $r(x)$ on the right-hand side: $y'' + ay' + by = r(x)$. Its **general solution** on an open interval is the sum $y(x) = y_h(x) + y_p(x)$, where $y_h = c_1 y_1 + c_2 y_2$ solves the corresponding homogeneous equation and the **particular solution** $y_p$ is any solution to the full equation containing no arbitrary constants.

To find $y_p$ using undetermined coefficients, follow three choice rules. Under the **basic rule**, pick a trial form matching the family of $r(x)$; for instance, a degree-$n$ polynomial requires a full polynomial $K_n x^n + … + K_1 x + K_0$ because derivatives of $x^n$ generate lower powers of $x$ that must cancel out. Under the **modification rule**, if your trial term is already a solution in $y_h$, multiply it by $x$—or by $x^2$ if it matches a double root of the characteristic equation—so it does not vanish when plugged into the left-hand side. Under the **sum rule**, if $r(x)$ is a sum of functions, add their corresponding trial forms together.

When solving an initial value problem, the key rule in words is: initial conditions must always be applied to the complete general solution $y = y_h + y_p$, never to $y_h$ alone. The particular solution $y_p$ contributes to both the initial value $y(0)$ and the initial slope $y'(0)$, so finding $c_1$ and $c_2$ before adding $y_p$ will give the wrong constants.

### Worked example
**Given:** The initial value problem $y'' + y = 0.001x^2$ with initial conditions $y(0) = 0$ and $y'(0) = 1.5$.
**Find:** The particular solution $y(x)$ satisfying the ODE and initial conditions.

1. Solve the corresponding homogeneous equation $y'' + y = 0$ by forming its characteristic equation $m^2 + 1 = 0$, which gives roots $m = \pm i$ and the homogeneous solution $y_h = C_1 \cos x + C_2 \sin x$.
2. Choose the trial solution $y_p = K_2 x^2 + K_1 x + K_0$ using the basic rule for the polynomial $r(x) = 0.001x^2$, including all lower powers of $x$ to balance the derivatives.
3. Differentiate twice to get $y_p' = 2K_2 x + K_1$ and $y_p'' = 2K_2$, and substitute $y_p$ and $y_p''$ into the ODE to obtain $K_2 x^2 + K_1 x + (2K_2 + K_0) = 0.001x^2$.
4. Equate coefficients of like powers of $x$ on both sides to find $K_2 = 0.001$, $K_1 = 0$, and $2K_2 + K_0 = 0 \implies K_0 = -0.002$, which gives $y_p = 0.001x^2 - 0.002$.
5. Combine $y_h$ and $y_p$ to form the complete general solution $y = C_1 \cos x + C_2 \sin x + 0.001x^2 - 0.002$ before touching the initial conditions.
6. Differentiate the complete solution to get $y' = -C_1 \sin x + C_2 \cos x + 0.002x$, then apply $y(0) = 0 \implies C_1 - 0.002 = 0 \implies C_1 = 0.002$ and $y'(0) = 1.5 \implies C_2 = 1.5$.

> **Figure: Table of choice rules for undetermined coefficients**
>
> A two-column handwritten table specifying the choice rules for the method of undetermined coefficients. The left column header is 'Term in r(x)' and the right column header is 'Choice for y_p(x).'. Row 1: Left column has 'k e^{\alpha x}', right column has 'C e^{\alpha x}'. Row 2: Left column has 'k x^n (n = 0, 1, 2, ...)', right column has 'K_n x^n + K_{n-1} x^{n-1} + ... + K_1 x + K_0'. Row 3: Left column lists two terms stacked vertically, 'k \cos \omega x' and 'k \sin \omega x', which are grouped together by a right curly brace '}' pointing to the right column entry 'K \cos \omega x + M \sin \omega x .'. Row 4: Left column lists two terms stacked vertically, 'k e^{\alpha x} \cos \omega x' and 'k e^{\alpha x} \sin \omega x', which are grouped together by a right curly brace '}' pointing to the right column entry 'e^{\alpha x} (K \cos \omega x + M \sin \omega x)'.

**Answer:** $y = 0.002 \cos x + 1.5 \sin x + 0.001x^2 - 0.002$

### More problems

#### Problem 2: Exponential forcing at a double characteristic root
**Given:** $y'' + 3y' + 2.25y = -10e^{-1.5x}$ with $y(0) = 1$ and $y'(0) = 0$.
**Find:** The solution $y(x)$ to the initial value problem.

1. Solve the characteristic equation $\lambda^2 + 3\lambda + 2.25 = (\lambda + 1.5)^2 = 0$ to get $y_h = (c_1 + c_2 x)e^{-1.5x}$.
2. Choose $y_p = cx^2 e^{-1.5x}$ by multiplying by $x^2$ because $e^{-1.5x}$ corresponds to a double root of the characteristic equation.
3. Compute the derivatives $y_p' = c(2x - 1.5x^2)e^{-1.5x}$ and $y_p'' = c(2.25x^2 - 6x + 2)e^{-1.5x}$ using the product rule.
4. Substitute $y_p, y_p', y_p''$ into the ODE and cancel $e^{-1.5x}$ to get $(2.25c - 4.5c + 2.25c)x^2 + (-6c + 6c)x + 2c = -10$.
5. Solve $2c = -10$ to find $c = -5$, giving the general solution $y = (c_1 + c_2 x)e^{-1.5x} - 5x^2 e^{-1.5x}$.
6. Differentiate the general solution to get $y' = (c_2 - 1.5c_1 - 1.5c_2 x + 7.5x^2 - 10x)e^{-1.5x}$.
7. Apply $y(0) = 1$ and $y'(0) = 0$ to find $c_1 = 1$ and $c_2 - 1.5c_1 = 0 \implies c_2 = 1.5$.

> **Watch out.** Because $\lambda = -1.5$ is a double root, multiplying the trial term by a single $x$ still gives a homogeneous solution $cxe^{-1.5x}$; you must multiply by $x^2$.

**Answer:** $y = (1 + 1.5x - 5x^2)e^{-1.5x}$

#### Problem 3: Sum rule with trigonometric and polynomial forcing
**Given:** $y'' + 2y' + 0.75y = 2\cos x - 0.25\sin x + 0.09x$ with $y(0) = 2.78$ and $y'(0) = -0.43$.
**Find:** The solution $y(x)$ to the initial value problem.

1. Solve the characteristic equation $\lambda^2 + 2\lambda + 0.75 = 0$ to get roots $\lambda = -1/2, -3/2$ and $y_h = c_1 e^{-x/2} + c_2 e^{-3x/2}$.
2. Apply the sum rule to choose the combined trial form $y_p = K\cos x + M\sin x + K_1 x + K_0$.
3. Compute $y_p' = -K\sin x + M\cos x + K_1$ and $y_p'' = -K\cos x - M\sin x$, then substitute into the ODE.
4. Group like terms to get $(2M - 0.25K)\cos x + (-0.25M - 2K)\sin x + 0.75K_1 x + (2K_1 + 0.75K_0)$ on the left.
5. Equate the $\cos x$ and $\sin x$ coefficients to $2$ and $-0.25$, solving the system to get $K = 0$ and $M = 1$.
6. Equate the polynomial coefficients to get $0.75K_1 = 0.09 \implies K_1 = 0.12$ and $2K_1 + 0.75K_0 = 0 \implies K_0 = -0.32$.
7. Write the general solution $y = c_1 e^{-x/2} + c_2 e^{-3x/2} + \sin x + 0.12x - 0.32$ and differentiate it.
8. Substitute $y(0) = 2.78$ and $y'(0) = -0.43$ to get $c_1 + c_2 = 3.1$ and $-c_1 - 3c_2 = -3.1$, giving $c_1 = 3.1, c_2 = 0$.

**Answer:** $y = 3.1e^{-x/2} + \sin x + 0.12x - 0.32$

<!-- page 9 | Undetermined Coefficients: Comprehensive Case Practice -->

## Undetermined Coefficients: Comprehensive Case Practice

You have already solved basic nonhomogeneous differential equations and applied initial conditions to the complete solution $y = y_h + y_p$. Now you will tackle a wide range of forcing functions that require sinusoidal pairs, sum rules, and modifications when the forcing term overlaps with the homogeneous solution.

### The idea

The method of undetermined coefficients works because differentiating polynomials, exponentials, and sines or cosines produces terms from the exact same families. For a sinusoidal forcing term like $\sin(\omega x)$ or $\cos(\omega x)$, differentiation switches between sine and cosine, so your **trial solution** $y_p$ must always include both: $K \cos(\omega x) + M \sin(\omega x)$. When the forcing function $r(x)$ is a sum of different families, the **sum rule** lets you add their individual trial forms together. When $r(x)$ is a product, such as $e^{\alpha x} \cos(\omega x)$, you multiply the corresponding trial forms together.

A critical complication arises when a term in your basic trial choice is already a solution to the homogeneous equation $y'' + ay' + by = 0$. Substituting such a term into the left side produces zero, making it impossible to match the non-zero right side $r(x)$. This overlap is called **resonance**.

The **modification rule** fixes this: whenever the driving function mimics a natural solution mode in $y_h$, multiply the entire trial solution block by $x$ to preserve linear independence. If the matching root $\lambda$ of the characteristic equation is a simple root (or a complex conjugate pair), multiply the trial form by $x$. In a critically damped system where $\lambda$ is a **double root** (so both $e^{\lambda x}$ and $x e^{\lambda x}$ are already in $y_h$), you face **double resonance** and must boost the trial solution by $x^2$.

### Worked example

#### Problem 2: Exponential forcing with no resonance

**Given:** $y'' - 4y' - 12y = 3e^{5x}$
**Find:** The general solution $y(x)$.

1. Write the characteristic equation $\lambda^2 - 4\lambda - 12 = 0$ for the homogeneous ODE $y'' - 4y' - 12y = 0$ to find the natural modes.
2. Factor as $(\lambda - 6)(\lambda + 2) = 0$ to get roots $\lambda = 6, -2$, giving the homogeneous solution $y_h = c_1 e^{6x} + c_2 e^{-2x}$.
3. Choose the trial solution $y_p(x) = ke^{5x}$ because the forcing function $r(x) = 3e^{5x}$ is exponential and $e^{5x}$ does not appear in $y_h$.
4. Differentiate $y_p$ twice to get $y_p' = 5ke^{5x}$ and $y_p'' = 25ke^{5x}$ so you can substitute them into the ODE.
5. Substitute $y_p, y_p', y_p''$ into the given ODE to get $25ke^{5x} - 4(5ke^{5x}) - 12(ke^{5x}) = 3e^{5x}$.
6. Combine the left-side terms into $(25k - 20k - 12k)e^{5x} = -7ke^{5x}$ and compare the coefficient of $e^{5x}$ with the right side to get $-7k = 3$, so $k = -\frac{3}{7}$.
7. Add $y_h$ and $y_p = -\frac{3}{7}e^{5x}$ to form the complete general solution.

**Answer:** $y = c_1 e^{6x} + c_2 e^{-2x} - \frac{3}{7} e^{5x}$

### More problems

#### Problem 1: Quadratic polynomial forcing

**Given:** $y'' + 4y = x^2$
**Find:** The general solution $y(x)$.

1. Solve the characteristic equation $\lambda^2 + 4 = 0$ to get $\lambda = \pm 2i$, yielding $y_h = C_1 \cos 2x + C_2 \sin 2x$.
2. Choose the full quadratic trial solution $y_p(x) = k_2 x^2 + k_1 x + k_0$ since $r(x) = x^2$ is a degree-2 polynomial.
3. Compute the derivatives $y_p' = 2k_2 x + k_1$ and $y_p'' = 2k_2$.
4. Substitute into the ODE to get $2k_2 + 4(k_2 x^2 + k_1 x + k_0) = x^2$.
5. Group by powers of $x$ as $(4k_2)x^2 + (4k_1)x + (2k_2 + 4k_0) = x^2$.
6. Equate coefficients of $x^2, x$, and constants: $4k_2 = 1 \Rightarrow k_2 = \frac{1}{4}$, $4k_1 = 0 \Rightarrow k_1 = 0$, and $2k_2 + 4k_0 = 0 \Rightarrow k_0 = -\frac{1}{8}$.
7. Combine $y_h$ and $y_p(x) = \frac{1}{4}x^2 - \frac{1}{8}$ to write the general solution.

**Answer:** $y = C_1 \cos 2x + C_2 \sin 2x + \frac{1}{4}x^2 - \frac{1}{8}$

#### Problem 8: Linear polynomial forcing

**Given:** $y'' + 3y' + 2y = x + 1$
**Find:** The general solution $y(x)$.

1. Solve the homogeneous equation $y'' + 3y' + 2y = 0$ to write the homogeneous solution $y_h = c_1 e^{-3x} + c_2 e^{-x}$.
2. Choose the linear trial solution $y_p = K_1 x + K_0$ for the degree-1 polynomial forcing term $x + 1$.
3. Differentiate to get $y_p' = K_1$ and $y_p'' = 0$, and substitute into the ODE: $3K_1 + 2(K_1 x + K_0) = x + 1$.
4. Compare coefficients of $x$ and constants ($2K_1 = 1$ and $3K_1 + 2K_0 = 1$) to find $K_1 = \frac{1}{2}$ and $K_0 = -\frac{1}{4}$ (printed as $+\frac{1}{4}$).
5. Sum $y_h$ and $y_p = \frac{x}{2} + \frac{1}{4}$ to write the general solution.

> **Watch out.** Thecharacteristic roots of $\lambda^2 + 3\lambda + 2 = 0$ are $\lambda = -2, -1$ and the constant term satisfies $3(\frac{1}{2}) + 2K_0 = 1 \Rightarrow K_0 = -\frac{1}{4}$, which does not match the printed $e^{-3x}$ and $+\frac{1}{4}$.

**Answer:** $y = c_1 e^{-3x} + c_2 e^{-x} + \frac{x}{2} + \frac{1}{4}$

#### Problem 7: Combined exponential and constant forcing

**Given:** $y'' + 2y = e^x + 2$
**Find:** The general solution $y(x)$.

1. Solve $\lambda^2 + 2 = 0$ to find $\lambda = \pm i\sqrt{2}$, giving $y_h = c_1 \cos \sqrt{2}x + c_2 \sin \sqrt{2}x$.
2. Choose $y_p = K e^x + M$ by the sum rule for $r(x) = e^x + 2$.
3. Differentiate twice to get $y_p' = K e^x$ and $y_p'' = K e^x$.
4. Substitute into the ODE to obtain $K e^x + 2(K e^x + M) = (K + 2K)e^x + 2M = e^x + 2$.
5. Compare coefficients to get $3K = 1 \Rightarrow K = \frac{1}{3}$ and $2M = 2 \Rightarrow M = 1$.
6. Combine $y_h$ and $y_p = \frac{e^x}{3} + 1$ for the general solution.

**Answer:** $y = c_1 \cos \sqrt{2}x + c_2 \sin \sqrt{2}x + \frac{e^x}{3} + 1$

#### Problem 3: Sinusoidal forcing with a first-derivative term

**Given:** $y'' + y' - 2y = \sin x$
**Find:** The general solution $y(x)$.

1. Factor the characteristic equation $\lambda^2 + \lambda - 2 = (\lambda + 2)(\lambda - 1) = 0$ to get $\lambda = -2, 1$ and $y_h = c_1 e^{-2x} + c_2 e^x$.
2. Choose $y_p = K \cos x + M \sin x$ because $y'$ mixes sine and cosine terms.
3. Differentiate to find $y_p' = -K \sin x + M \cos x$ and $y_p'' = -K \cos x - M \sin x$.
4. Substitute into the ODE and group: $(M - 3K)\cos x + (-3M - K)\sin x = \sin x$.
5. Set coefficients equal to the right side: $M - 3K = 0$ and $-3M - K = 1$.
6. Substitute $M = 3K$ into the second equation to get $-10K = 1 \Rightarrow K = -\frac{1}{10}$ and $M = -\frac{3}{10}$.
7. Combine $y_h$ and $y_p = -\frac{1}{10} \cos x - \frac{3}{10} \sin x$.

**Answer:** $y = c_1 e^{-2x} + c_2 e^x - \frac{1}{10} \cos x - \frac{3}{10} \sin x$

#### Problem 4: Simple exponential resonance

**Given:** $y'' - 2y' - 3y = 2e^{3x}$
**Find:** The general solution $y(x)$.

1. Factor $\lambda^2 - 2\lambda - 3 = (\lambda + 1)(\lambda - 3) = 0$ to get $\lambda = 3, -1$, so $y_h = c_1 e^{3x} + c_2 e^{-x}$.
2. Multiply the basic trial choice $ke^{3x}$ by $x$ to get $y_p = K x e^{3x}$ because $\lambda = 3$ is a simple root of the characteristic equation.
3. Apply the product rule to find $y_p' = K[3x e^{3x} + e^{3x}]$ and $y_p'' = [9K x + 6K]e^{3x}$.
4. Substitute into the ODE: $[9K x + 6K]e^{3x} - 2K[3x e^{3x} + e^{3x}] - 3K x e^{3x} = 2e^{3x}$.
5. Simplify the left side; the $x e^{3x}$ terms cancel out ($(9K - 6K - 3K)x e^{3x} = 0$), leaving $4K e^{3x} = 2e^{3x}$.
6. Solve $4K = 2$ to get $K = \frac{1}{2}$, so $y_p = \frac{1}{2} x e^{3x}$.
7. Add $y_h$ and $y_p$ to form the final solution.

> **Watch out.** In step 1 the second root is $\lambda = -1$ giving $c_2 e^{-x}$, which does not match the printed $C_2 e^{-2x}$ in the final line.

**Answer:** $y = C_1 e^{3x} + C_2 e^{-2x} + \frac{x}{2} e^{3x}$

#### Problem 9: Polynomial forcing with a zero characteristic root

**Given:** $y'' + y' = x^2 + 2x + 4$
**Find:** The general solution $y(x)$.

1. Solve $\lambda^2 + \lambda = \lambda(\lambda + 1) = 0$ to get roots $\lambda = 0, -1$ and $y_h = c_1 + c_2 e^{-x}$.
2. Multiply the standard quadratic choice by $x$ to get $y_p = [Ax^2 + Bx + C]x = Ax^3 + Bx^2 + Cx$ because a constant term $c_1$ is already in $y_h$.
3. Differentiate to find $y_p' = 3Ax^2 + 2Bx + C$ and $y_p'' = 6Ax + 2B$.
4. Substitute into $y'' + y' = x^2 + 2x + 4$ to get $3Ax^2 + (6A + 2B)x + (2B + C) = x^2 + 2x + 4$.
5. Equate coefficients ($3A = 1$, $6A + 2B = 2$, $2B + C = 4$) to get $A = \frac{1}{3}$, $B = 0$, and $C = 4$.
6. Write $y_p = \frac{1}{3}x^3 + 4x$ and add $y_h$ to obtain the general solution.

**Answer:** $y = c_1 + c_2 e^{-x} + \frac{x^3}{3} + 4x$

#### Problem 5: Double exponential resonance in a critically damped system

**Given:** $y'' + 4y' + 4y = e^{-2x}$
**Find:** The general solution $y(x)$.

1. Solve $\lambda^2 + 4\lambda + 4 = (\lambda + 2)^2 = 0$ to find the double root $\lambda = -2, -2$, giving $y_h = (C_1 + C_2 x)e^{-2x}$.
2. Choose $y_p = K x^2 e^{-2x}$ by multiplying by $x^2$, because $-2$ is a double root so both $e^{-2x}$ and $x e^{-2x}$ are in $y_h$.
3. Differentiate using the product rule to get $y_p' = K[-2x^2 e^{-2x} + 2x e^{-2x}]$.
4. Differentiate again and simplify to get $y_p'' = [4K x^2 - 8K x + 2K]e^{-2x}$.
5. Substitute $y_p, y_p', y_p''$ into the ODE: $[4K x^2 - 8K x + 2K]e^{-2x} + 4[-2K x^2 + 2K x]e^{-2x} + 4[K x^2]e^{-2x} = e^{-2x}$.
6. Group terms on the left; both $x^2 e^{-2x}$ and $x e^{-2x}$ cancel completely, leaving $2K e^{-2x} = e^{-2x}$.
7. Solve $2K = 1 \Rightarrow K = \frac{1}{2}$ to get $y_p = \frac{x^2}{2}e^{-2x}$, and add $y_h$.

**Answer:** $y = (C_1 + C_2 x) e^{-2x} + \frac{x^2}{2} e^{-2x}$

#### Problem 6: Pure oscillatory resonance

**Given:** $y'' + 4y = \cos 2x$
**Find:** The general solution $y(x)$.

1. Solve $\lambda^2 + 4 = 0$ to get $\lambda = \pm 2i$ and $y_h = c_1 \cos 2x + c_2 \sin 2x$.
2. Multiply the entire sinusoidal pair by $x$ to get $y_p(x) = x[K \cos 2x + M \sin 2x] = K x \cos 2x + M x \sin 2x$ because $\cos 2x$ is in $y_h$.
3. Differentiate once: $y_p' = K[-2x \sin 2x + \cos 2x] + M[2x \cos 2x + \sin 2x]$.
4. Differentiate a second time and collect terms: $y_p'' = K[-4x \cos 2x - 4 \sin 2x] + M[-4x \sin 2x + 4 \cos 2x]$.
5. Substitute $y_p''$ and $y_p$ into $y'' + 4y = \cos 2x$; the $x \cos 2x$ and $x \sin 2x$ terms cancel, leaving $-4K \sin 2x + 4M \cos 2x = \cos 2x$.
6. Compare coefficients to get $-4K = 0 \Rightarrow K = 0$ and $4M = 1 \Rightarrow M = \frac{1}{4}$.
7. Combine $y_h$ and $y_p = \frac{1}{4}x \sin 2x$ to write the general solution.

> **Watch out.** Never try $y_p = K x \cos 2x$ alone; the product rule creates a $\sin 2x$ term in $y_p''$ that can only be balanced if $M x \sin 2x$ is included from the start.

**Answer:** $y = c_1 \cos 2x + c_2 \sin 2x + \frac{x}{4} \sin 2x$

#### Problem 10: Combined polynomial and trigonometric forcing

**Given:** $y'' - 2y' + 3y = x^2 + \cos x$
**Find:** The general solution $y(x)$.

1. Use the quadratic formula on $\lambda^2 - 2\lambda + 3 = 0$ to find $\lambda = 1 \pm i\sqrt{2}$, giving $y_h = e^x[c_1 \cos \sqrt{2}x + c_2 \sin \sqrt{2}x]$.
2. Combine a quadratic polynomial and a sinusoidal pair for the trial solution: $y_p = K_2 x^2 + K_1 x + K_0 + A \cos x + B \sin x$.
3. Compute $y_p' = 2K_2 x + K_1 - A \sin x + B \cos x$ and $y_p'' = 2K_2 - A \cos x - B \sin x$.
4. Substitute into the ODE and group like terms: $(2A - 2B)\cos x + (2A + 2B)\sin x + 3K_2 x^2 + (-4K_2 + 3K_1)x + (2K_2 - 2K_1 + 3K_0) = x^2 + \cos x$.
5. Equate the trigonometric coefficients ($2A + 2B = 1$ and $-2A + 2B = 0$ as written) to find $A = \frac{1}{4}$ and $B = -\frac{1}{4}$.
6. Equate the polynomial coefficients ($3K_2 = 1$, $-4K_2 + 3K_1 = 0$, $2K_2 - 2K_1 + 3K_0 = 0$) to find $K_2 = \frac{1}{3}$, $K_1 = \frac{4}{9}$, and $K_0 = \frac{2}{27}$.
7. Sum $y_h$ and $y_p$ to form the complete general solution.

> **Watch out.** Grouping the $\cos x$ terms from step 4 actually gives $2A - 2B = 1$ and $\sin x$ gives $2A + 2B = 0$ (which yields $A = \frac{1}{4}, B = -\frac{1}{4}$), whereas solving the written system $2A + 2B = 1$ and $-2A + 2B = 0$ would give $B = +\frac{1}{4}$.

**Answer:** $y = e^x \left[c_1 \cos \sqrt{2}x + c_2 \sin \sqrt{2}x\right] + \frac{x^2}{3} + \frac{4x}{9} + \frac{2}{27} + \frac{\cos x}{4} - \frac{\sin x}{4}$

#### Problem 11: Exponentially damped sinusoidal forcing

**Given:** $y'' - 4y' + 13y = e^{2x} \cos x$
**Find:** The general solution $y(x)$.

1. Solve the auxiliary equation $\lambda^2 - 4\lambda + 13 = 0$ via the quadratic formula to get $\lambda = 2 \pm 3i$ and $y_h = e^{2x}(c_1 \cos 3x + c_2 \sin 3x)$.
2. Choose the product trial form $y_p = e^{2x}[K \cos x + M \sin x]$ since $2 \pm i$ is not a root of the auxiliary equation.
3. Differentiate using the product rule to get $y_p' = e^{2x}[(2K + M)\cos x + (-K + 2M)\sin x]$.
4. Differentiate again and collect terms: $y_p'' = e^{2x}[(3K + 4M)\cos x + (-4K + 3M)\sin x]$.
5. Substitute $y_p'', y_p', y_p$ into the ODE and divide out $e^{2x}$: $[3K + 4M - 4M - 8K + 13K]\cos x + [-4K + 3M + 4K - 8M + 13M]\sin x = \cos x$.
6. Simplify to $8K \cos x + 8M \sin x = \cos x$ and compare coefficients to find $8K = 1 \Rightarrow K = \frac{1}{8}$ and $8M = 0 \Rightarrow M = 0$.
7. Combine $y_h$ and $y_p = \frac{e^{2x}}{8} \cos x$ for the general solution.

**Answer:** $y = e^{2x} (c_1 \cos 3x + c_2 \sin 3x) + \frac{e^{2x}}{8} \cos x$

<!-- page 10 | Variation of Parameters Practice -->

## Variation of Parameters Practice
With undetermined coefficients mastered for elementary forms, you can now apply the universal variation of parameters technique to arbitrary driving functions. Evaluating Wronskian-based integrals provides particular solutions even for functions that do not possess finite derivative sets.

### The idea
Undetermined coefficients fails when the forcing term $r(x)$ is a function like $\sec x$, $\tan x$, or $\ln x$, because differentiating these functions produces an endless chain of new algebraic forms. Variation of parameters bypasses guessing altogether. By replacing the constants in the homogeneous solution $y_h = c_1 y_1(x) + c_2 y_2(x)$ with unknown functions, we construct a direct integral formula that works for any continuous driving term.

To execute the method, first find the **solution basis** $y_1, y_2$ of the corresponding homogeneous equation $y'' + p(x)y' + q(x)y = 0$. Next, compute the **Wronskian** $W$, which is the determinant $W = y_1 y_2' - y_2 y_1'$ that measures the linear independence of the basis. Because $y_1$ and $y_2$ are independent, $W$ is never zero, allowing us to divide by it inside the particular solution formula:

$$y_p(x) = -y_1 \int \frac{y_2 r(x)}{W} \, dx + y_2 \int \frac{y_1 r(x)}{W} \, dx$$

Notice that $y_1$ and $y_2$ sit outside the integrals while their partners sit inside. In practice, exponential factors in $y_1, y_2$, and $r(x)$ often cancel against the Wronskian, leaving clean integrals that you can evaluate using trigonometric identities or integration by parts.

### Worked example
**Given:** The nonhomogeneous differential equation $y'' + y = \sec x$.
**Find:** The general solution $y = y_h + y_p$.

1. Solve the homogeneous equation $y'' + y = 0$ via its characteristic equation $\lambda^2 + 1 = 0$ to get roots $\lambda = \pm i$, which gives the basis $y_1 = \cos x$, $y_2 = \sin x$ and $y_h = C_1 \cos x + C_2 \sin x$.
2. Compute the Wronskian determinant to form the denominator of the integral formula:

   $$W = \begin{vmatrix} \cos x & \sin x \\ -\sin x & \cos x \end{vmatrix} = \cos^2 x + \sin^2 x = 1$$

3. Substitute $y_1 = \cos x$, $y_2 = \sin x$, $r(x) = \sec x$, and $W = 1$ into the variation of parameters formula:

   $$y_p = -\cos x \int (\sin x \sec x) \, dx + \sin x \int (\cos x \sec x) \, dx$$

4. Rewrite $\sec x$ as $1/\cos x$ so the integrands simplify to basic trigonometric ratios:

   $$y_p = -\cos x \int \frac{\sin x}{\cos x} \, dx + \sin x \int \frac{\cos x}{\cos x} \, dx = \cos x \ln|\cos x| + x\sin x$$

5. Add $y_h$ and $y_p$ to form the complete general solution.

**Answer:** $y = C_1 \cos x + C_2 \sin x + \cos x \ln|\cos x| + x\sin x = (C_1 + \ln|\cos x|)\cos x + (C_2 + x)\sin x$.

### More problems

#### Problem 2: Secant forcing with scaled frequency
**Given:** $y'' + 9y = \sec 3x$.
**Find:** The general solution $y$.

1. Solve $\lambda^2 + 9 = 0$ to get $\lambda = \pm 3i$, giving $y_1 = \cos 3x$, $y_2 = \sin 3x$, and $y_h = C_1 \cos 3x + C_2 \sin 3x$.
2. Calculate the Wronskian $W = (\cos 3x)(3\cos 3x) - (\sin 3x)(-3\sin 3x) = 3(\cos^2 3x + \sin^2 3x) = 3$.
3. Set up the particular solution $y_p = -\cos 3x \int \frac{\sin 3x \sec 3x}{3} \, dx + \sin 3x \int \frac{\cos 3x \sec 3x}{3} \, dx$.
4. Simplify using $\sec 3x = 1/\cos 3x$ to get $y_p = -\frac{\cos 3x}{3} \int \frac{\sin 3x}{\cos 3x} \, dx + \frac{\sin 3x}{3} \int dx$.
5. Integrate both terms (accounting for the inner derivative of $3x$) to obtain $y_p = \frac{1}{9}\cos 3x \ln|\cos 3x| + \frac{x\sin 3x}{3}$.
6. Combine $y_h$ and $y_p$ to write the general solution.

> **Watch out.** Both the Wronskian ($W = 3$) and the u-substitution $u = \cos 3x$ ($du = -3\sin 3x \, dx$) introduce a factor of $3$ in the denominator, producing $\frac{1}{9}$ on the logarithmic term.

**Answer:** $y = C_1 \cos 3x + C_2 \sin 3x + \frac{1}{9}\cos 3x \ln|\cos 3x| + \frac{x\sin 3x}{3}$.

#### Problem 3: Exponential-tangent forcing term
**Given:** $y'' - 2y' + 5y = e^x \tan 2x$.
**Find:** The general solution $y$.

1. Solve $\lambda^2 - 2\lambda + 5 = 0$ to find $\lambda = 1 \pm 2i$, giving $y_1 = e^x \cos 2x$, $y_2 = e^x \sin 2x$, and $y_h = e^x(c_1 \cos 2x + c_2 \sin 2x)$.
2. Compute $W = y_1 y_2' - y_2 y_1' = 2e^{2x}\cos^2 2x + 2e^{2x}\sin^2 2x = 2e^{2x}$.
3. Substitute $y_1, y_2, W$, and $r(x) = e^x \tan 2x$ into the formula and cancel $e^{2x}$: $y_p = -\frac{e^x \cos 2x}{2} \int \sin 2x \tan 2x \, dx + \frac{e^x \sin 2x}{2} \int \cos 2x \tan 2x \, dx$.
4. Rewrite $\tan 2x = \frac{\sin 2x}{\cos 2x}$ and use $\sin^2 2x = 1 - \cos^2 2x$ on the first integral to get $-\frac{e^x \cos 2x}{2} \int (\sec 2x - \cos 2x) \, dx + \frac{e^x \sin 2x}{2} \int \sin 2x \, dx$.
5. Evaluate the integrals: $y_p = -\frac{e^x \cos 2x}{2} \left[\frac{\ln|\sec 2x + \tan 2x|}{2} - \frac{\sin 2x}{2}\right] - \frac{e^x \sin 2x \cos 2x}{4}$.
6. Cancel the matching $\pm \frac{e^x \sin 2x \cos 2x}{4}$ terms and add $y_h$.

**Answer:** $y = e^x (c_1 \cos 2x + c_2 \sin 2x) - \frac{1}{4} e^x \cos 2x \ln|\sec 2x + \tan 2x|$.

#### Problem 4: Repeated roots with logarithmic forcing
**Given:** $y'' + 2y' + y = 4e^{-x} \log x$.
**Find:** The general solution $y$.

1. Solve $\lambda^2 + 2\lambda + 1 = (\lambda + 1)^2 = 0$ to get $\lambda = -1, -1$, so $y_1 = e^{-x}$, $y_2 = xe^{-x}$, and $y_h = (c_1 + c_2 x)e^{-x}$.
2. Compute the Wronskian $W = e^{-x}(-xe^{-x} + e^{-x}) - xe^{-x}(-e^{-x}) = e^{-2x}$.
3. Substitute into the $y_p$ formula and cancel $e^{-2x}$: $y_p = -4e^{-x} \int x \log x \, dx + 4xe^{-x} \int \log x \, dx$.
4. Integrate by parts using $\int x \log x \, dx = \frac{x^2}{2}\log x - \frac{x^2}{4}$ and $\int \log x \, dx = x\log x - x$.
5. Multiply out the factors to get $y_p = e^{-x}[-2x^2 \log x + x^2] + 4xe^{-x}[x \log x - x]$ and add $y_h$.

**Answer:** $y = (c_1 + c_2 x)e^{-x} + e^{-x}[-2x^2 \log x + x^2] + 4xe^{-x}[x \log x - x]$.

#### Problem 5: Product forcing with trigonometric identities
**Given:** $y'' + y = x \sin x$.
**Find:** The general solution $y$.

1. From $\lambda^2 + 1 = 0$, write the basis $y_1 = \cos x$, $y_2 = \sin x$, $y_h = c_1 \cos x + c_2 \sin x$, and Wronskian $W = \cos^2 x + \sin^2 x = 1$.
2. Substitute $r(x) = x \sin x$ into the formula: $y_p = -\cos x \int x \sin^2 x \, dx + \sin x \int x \cos x \sin x \, dx$.
3. Apply the double-angle identities $\sin^2 x = \frac{1 - \cos 2x}{2}$ and $\cos x \sin x = \frac{\sin 2x}{2}$ to linearize the trig powers: $y_p = -\frac{\cos x}{2} \int (x - x \cos 2x) \, dx + \frac{\sin x}{2} \int x \sin 2x \, dx$.
4. Integrate $\int x \cos 2x \, dx$ and $\int x \sin 2x \, dx$ by parts: $y_p = -\frac{\cos x}{2} \left[\frac{x^2}{2} - \frac{x \sin 2x}{2} - \frac{\cos 2x}{4}\right] + \frac{\sin x}{2} \left[\frac{-x \cos 2x}{2} + \frac{\sin 2x}{4}\right]$.
5. Distribute the outer $\frac{1}{2}$ factors and add $y_h$ to form the complete solution.

**Answer:** $y = c_1 \cos x + c_2 \sin x - \cos x \left[\frac{x^2}{4} - \frac{x \sin 2x}{4} - \frac{\cos 2x}{8}\right] + \sin x \left[\frac{-x \cos 2x}{4} + \frac{\sin 2x}{8}\right]$.
