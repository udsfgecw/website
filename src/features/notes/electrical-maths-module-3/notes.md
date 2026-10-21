<!-- page 1 | Start here -->

## Laplace Transforms and Their Applications

Master the theory and application of the Laplace transform to evaluate transforms of elementary functions, invert rational frequency-domain functions, and solve initial value ordinary differential equations.

**Before you start:** Differential calculus including derivatives of polynomial, exponential, and trigonometric functions; Integral calculus including integration by parts and definite integration; Algebraic techniques including partial fraction decomposition and completing the square.

### Your path through this module

1. **Definition and Elementary Laplace Transforms**: An improper integral containing an exponential kernel transforms continuous time-domain functions into algebraic expressions in a new variable.
2. **First Shifting Theorem and Inverse Transforms**: Multiplying by an exponential in the time domain corresponds directly to a simple horizontal shift in the s-domain.
3. **Transforms of Derivatives and ODE Solutions**: Laplace transforms convert calculus operations into algebra by absorbing initial boundary conditions directly into the transform.
4. **The Convolution Integral and Inverse Products**: The inverse transform of a product of two frequency-domain functions is the convolution integral of their respective time-domain originals.
5. **Discontinuous and Impulse Functions**: Step and delta distributions allow piecewise and instantaneous inputs to be represented concisely and transformed into exponential s-domain terms.
6. **Computing Forward Transforms and Trigonometric Identities**: Nonlinear time functions like products or powers of sinusoids must first be linearized using trigonometric identities before applying Laplace transforms.
7. **Inverse Transforms by Completing the Square**: Completing the square exposes an internal s-shift, allowing quadratic denominators to be inverted into exponentially damped oscillatory functions.
8. **Inverse Transforms via Partial Fractions**: Complex multi-pole rational functions decompose into a sum of simple first-order and power poles that each map directly to standard inverse formulas.
9. **Solving Initial Value Problems via Laplace Transforms**: Differential equations are solved entirely within the algebraic s-domain, automatically packaging the initial state into the algebraic solution.
10. **Evaluating Inverse Transforms with the Convolution Theorem**: Factoring a complicated transform into two simpler transforms converts an algebraic inversion problem into a single definite time integral.
11. **Transforming Delayed Step and Impulse Functions**: Delayed activation and sudden spikes produce simple exponential phase factors e^(-as) in the frequency domain.

<!-- page 2 | Definition and Elementary Laplace Transforms -->

## Definition and Elementary Laplace Transforms

In standard calculus, you learned how differentiation and integration act on functions of time, $t$. The Laplace transform gives you a completely new perspective: it maps continuous functions of time into algebraic expressions of a new frequency variable, $s$, allowing you to replace difficult calculus operations with simple algebra.

Think of a glass prism breaking a single beam of light into its component colors. The Laplace transform acts like a mathematical prism, breaking a continuous time signal into a spectrum of exponential building blocks. Each value of $s$ gauges how strongly a specific exponential mode is present in your original signal.

We define the unilateral Laplace transform of a function $f(t)$, written as $\mathcal{L}\{f(t)\}$ or $F(s)$, through an improper integral evaluated over positive time:

$$F(s) = \int_{0}^{\infty} f(t)e^{-st} \, dt$$

The factor $e^{-st}$ is the kernel of the transform. Because $s$ is chosen to have a sufficiently large real part, $e^{-st}$ decays rapidly toward zero as $t$ grows, forcing the area under the curve to stay finite even for functions that grow over time.

Because integration is a linear operation, the Laplace transform inherits the linearity property. For any constants $a$ and $b$, and functions $f(t)$ and $g(t)$:

$$\mathcal{L}\{a f(t) + b g(t)\} = a F(s) + b G(s)$$

By evaluating the integral for basic building blocks, we obtain a standard catalog of elementary transforms valid for $s > 0$ (or $s > a$):

| $f(t)$ | $F(s) = \mathcal{L}\{f(t)\}$ |
| :--- | :--- |
| $1$ (constant) | $\frac{1}{s}$ |
| $t^n$ ($n$ is a positive integer) | $\frac{n!}{s^{n+1}}$ |
| $e^{at}$ | $\frac{1}{s - a}$ |
| $\cos(\omega t)$ | $\frac{s}{s^2 + \omega^2}$ |
| $\sin(\omega t)$ | $\frac{\omega}{s^2 + \omega^2}$ |
| $\cosh(at)$ | $\frac{s}{s^2 - a^2}$ |
| $\sinh(at)$ | $\frac{a}{s^2 - a^2}$ |

### Worked example

Find the Laplace transform of $f(t) = 4t^3 - 5\sin(3t) + 2e^{-4t}$.

1. **Apply linearity** to separate the expression into individual standard forms:  
   $\mathcal{L}\{f(t)\} = 4\mathcal{L}\{t^3\} - 5\mathcal{L}\{\sin(3t)\} + 2\mathcal{L}\{e^{-4t}\}$.
2. **Transform the power term** $t^3$ using the rule $t^n \to \frac{n!}{s^{n+1}}$ with $n=3$:  
   $\mathcal{L}\{t^3\} = \frac{3!}{s^4} = \frac{6}{s^4}$.
3. **Transform the sine term** $\sin(3t)$ using the rule $\sin(\omega t) \to \frac{\omega}{s^2 + \omega^2}$ with $\omega=3$:  
   $\mathcal{L}\{\sin(3t)\} = \frac{3}{s^2 + 9}$.
4. **Transform the exponential term** $e^{-4t}$ using $e^{at} \to \frac{1}{s-a}$ with $a=-4$:  
   $\mathcal{L}\{e^{-4t}\} = \frac{1}{s - (-4)} = \frac{1}{s + 4}$.
5. **Combine the scaled components** into a single $s$-domain expression:  
   $F(s) = 4\left(\frac{6}{s^4}\right) - 5\left(\frac{3}{s^2 + 9}\right) + 2\left(\frac{1}{s + 4}\right) = \frac{24}{s^4} - \frac{15}{s^2 + 9} + \frac{2}{s + 4}$.

### Remember

- The unilateral transform integrates from $t = 0$ to $\infty$, weighted by the decaying kernel $e^{-st}$.
- Linearity permits term-by-term transformation of linear combinations.
- Memorize the core transforms for $1$, $t^n$, $e^{at}$, $\cos(\omega t)$, and $\sin(\omega t)$ to rapidly build solutions.

<!-- page 3 | First Shifting Theorem and Inverse Transforms -->

## First Shifting Theorem and Inverse Transforms

You already know how to transform basic signals like sine waves and powers of time into the $s$-domain. Now we will learn how to handle signals that fade away over time, and how to translate $s$-domain answers back into real time.

Think of plucking a guitar string: the sound does not ring forever, because friction makes the vibration die out exponentially. In math, we model this fading by multiplying a regular time function $f(t)$ by an exponential factor $e^{at}$. Because the Laplace integral already uses $e^{-st}$ as its kernel, multiplying by $e^{at}$ simply combines the exponents into $e^{-(s-a)t}$. This gives us the **first shifting theorem**: if $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{e^{at}f(t)\} = F(s - a)$. In plain words, multiplying by $e^{at}$ in time shifts every $s$ in the transform to $s - a$. If you draw a graph of $F(s)$ against $s$, this rule simply slides the whole curve horizontally by $a$ units.

Transforming a problem into the $s$-domain is only half the job; at the end, we need a time function again. The **inverse Laplace transform**, written as $\mathcal{L}^{-1}\{F(s)\} = f(t)$, is the operation that reverses the transform. It asks: what time signal $f(t)$ produces this $F(s)$? Because the forward integral is linear, the inverse operator is also **linear**, meaning we can pull out constant multipliers and invert sums term by term.

Instead of computing a new integral to go backward, we read our basic transform table in reverse.

| $s$-domain $F(s)$ | Time-domain $f(t) = \mathcal{L}^{-1}\{F(s)\}$ |
| :--- | :--- |
| $\frac{n!}{s^{n+1}}$ | $t^n$ |
| $\frac{\omega}{s^2 + \omega^2}$ | $\sin(\omega t)$ |
| $\frac{s - a}{(s - a)^2 + \omega^2}$ | $e^{at}\cos(\omega t)$ |

### Worked example
Find the inverse Laplace transform of $F(s) = \frac{6}{(s + 2)^2 + 9}$.

1. **Spot the shift:** Notice that $s$ only appears inside the group $(s + 2)$, which matches $s - a$ with $a = -2$. By the first shifting theorem, we can factor out the shift as $e^{-2t}$ in time and replace $(s + 2)$ with $s$: $\mathcal{L}^{-1}\left\{\frac{6}{(s + 2)^2 + 9}\right\} = e^{-2t} \mathcal{L}^{-1}\left\{\frac{6}{s^2 + 9}\right\}$.
2. **Match the base form:** The remaining fraction has $s^2 + 3^2$ in the bottom, which matches the sine transform with $\omega = 3$.
3. **Adjust the constant using linearity:** A sine transform needs $\omega = 3$ on top, so we rewrite $6$ as $2 \times 3$ and pull the $2$ out front: $2e^{-2t} \mathcal{L}^{-1}\left\{\frac{3}{s^2 + 3^2}\right\} = 2e^{-2t}\sin(3t)$.

### Remember
- Multiplying by $e^{at}$ in time replaces every $s$ with $s - a$ in the $s$-domain.
- To invert a shifted function, replace $(s - a)$ with $s$, invert the simpler fraction, and multiply the result by $e^{at}$.
- The inverse transform is linear: split sums apart and factor constants out to match standard table forms.

<!-- page 4 | Transforms of Derivatives and ODE Solutions -->

## Transforms of Derivatives and ODE Solutions

Now that you can move functions back and forth between the $t$-domain and the $s$-domain, we can see what the Laplace transform does to derivatives. This lets us turn differential equations into simple algebra problems.

Imagine tracking a moving car. To predict its future position, you need to know how fast it is moving and exactly where it started. An **initial value problem** is a differential equation paired with **initial conditions**, which are the known values of the function and its derivatives at time $t = 0$. Usually, you solve the equation first and plug in these starting values at the very end. The Laplace transform is powerful because it absorbs those starting values right at the beginning.

When we apply the integral definition of the Laplace transform to a derivative $y'(t)$ and use integration by parts, the boundary at $t = 0$ brings the starting value $y(0)$ directly into the equation. If $\mathcal{L}\{y(t)\} = Y(s)$, the rule for the first derivative is $\mathcal{L}\{y'(t)\} = sY(s) - y(0)$. In plain words, taking a derivative in time becomes multiplying by $s$ in the frequency domain, minus the starting value. Applying this rule a second time gives the transform of the second derivative:

| Time Domain | Frequency Domain ($s$-domain) |
| :--- | :--- |
| $y(t)$ | $Y(s)$ |
| $y'(t)$ | $sY(s) - y(0)$ |
| $y''(t)$ | $s^2Y(s) - sy(0) - y'(0)$ |

To picture the complete solution pipeline, draw a square with four corners. Label the top-left corner "ODE in $t$" and the top-right "ODE solution $y(t)$". Label the bottom-left "Algebraic equation in $s$" and the bottom-right "$Y(s)$". Instead of crossing the hard top path using calculus, you go down to the $s$-domain using the derivative rules, walk across the bottom by algebraically isolating $Y(s)$, and climb back up to $y(t)$ using the inverse transform.

### Worked example

Solve the initial value problem $y'(t) + 2y(t) = 0$, given the initial condition $y(0) = 3$.

1. **Transform the equation to turn calculus into algebra.** Take the Laplace transform of each term using the first derivative rule:

   $$[sY(s) - y(0)] + 2Y(s) = 0$$

2. **Insert the initial condition to include the starting state.** Substitute $y(0) = 3$ into the brackets:

   $$sY(s) - 3 + 2Y(s) = 0$$

3. **Isolate $Y(s)$ to solve the problem in the $s$-domain.** Factor out $Y(s)$ and divide by $(s + 2)$:

   $$Y(s)(s + 2) = 3 \implies Y(s) = \frac{3}{s + 2}$$

4. **Invert to return to the time domain.** Recognize the elementary form $\frac{1}{s - a}$ with $a = -2$ and apply the inverse transform:

   $$y(t) = \mathcal{L}^{-1}\left\{\frac{3}{s + 2}\right\} = 3e^{-2t}$$

### Remember
- Differentiation in the $t$-domain turns into multiplication by $s$ in the $s$-domain, minus the initial conditions.
- Memorize the two core rules: $\mathcal{L}\{y'\} = sY(s) - y(0)$ and $\mathcal{L}\{y''\} = s^2Y(s) - sy(0) - y'(0)$.
- Follow the three-step pipeline: transform the equation, solve algebraically for $Y(s)$, and invert to find $y(t)$.

<!-- page 5 | The Convolution Integral and Inverse Products -->

## The Convolution Integral and Inverse Products

In the previous lesson, you solved differential equations by inverting rational expressions in the $s$-domain. When a transform is a product of two simple terms that are hard to pull apart algebraically, this lesson gives you an integral tool to invert them directly.

Imagine striking a bell repeatedly with a hammer. The sound you hear right now is the sum of the fresh strike and the fading echoes of all earlier strikes. In engineering, we combine a current input with the fading memory of past inputs using an operation called **convolution**, written as $(f * g)(t)$. It takes two time-domain functions, $f(t)$ and $g(t)$, and blends them over the interval from $0$ to $t$ using a **dummy variable** $\tau$ (tau) to track the past times:

$$(f * g)(t) = \int_{0}^{t} f(\tau)g(t - \tau)\,d\tau$$

In words, we multiply the first function at an earlier time $\tau$ by the second function shifted backward by the elapsed time $t - \tau$, then add up all these products from the start ($\tau = 0$) to the present ($\tau = t$). To see this on a drawing, sketch a horizontal axis for $\tau$. Draw the curve $f(\tau)$ starting at $\tau = 0$. On the same axis, draw $g(\tau)$ flipped horizontally so it runs backward, and slide its starting point to $\tau = t$. The convolution at time $t$ is the area under the product of these two overlapping curves between $0$ and $t$.

It is tempting to think that the inverse transform of a product $F(s)G(s)$ is simply $f(t)g(t)$, but integrals do not distribute over multiplication. Instead, the **Convolution Theorem** states that multiplication in the $s$-domain corresponds to convolution in the time domain:

$$\mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t) = \int_{0}^{t} f(\tau)g(t - \tau)\,d\tau$$

Because convolution is commutative, $(f * g)(t) = (g * f)(t)$. When setting up the integral, choose the simpler function to hold the shifted argument $t - \tau$ so the integration stays easy.

### Worked example
Find the inverse Laplace transform of $H(s) = \frac{1}{s^2(s - 2)}$.

1. **Split the transform into two known factors.** Write $H(s) = F(s)G(s)$ with $F(s) = \frac{1}{s - 2}$ and $G(s) = \frac{1}{s^2}$ because we know both elementary inverses from memory.
2. **Invert each factor separately.** From our basic transform pairs, $f(t) = e^{2t}$ and $g(t) = t$.
3. **Set up the convolution integral.** Put the shifted argument $t - \tau$ into $g(t)$ because a polynomial is easier to expand than an exponential:

   $$h(t) = \int_{0}^{t} e^{2\tau}(t - \tau)\,d\tau$$

4. **Integrate with respect to $\tau$, holding $t$ constant.** Using integration by parts with $u = t - \tau$ and $dv = e^{2\tau}\,d\tau$:

   $$h(t) = \left[ (t - \tau)\frac{e^{2\tau}}{2} + \frac{e^{2\tau}}{4} \right]_{\tau=0}^{\tau=t} = \left(0 + \frac{e^{2t}}{4}\right) - \left(\frac{t}{2} + \frac{1}{4}\right) = \frac{1}{4}e^{2t} - \frac{1}{2}t - \frac{1}{4}$$

### Remember
- Never invert a product term-by-term: $\mathcal{L}^{-1}\{F(s)G(s)\} \neq f(t)g(t)$.
- Put the shifted variable $t - \tau$ into the simpler time function.
- Treat $t$ as a fixed constant while integrating with respect to $\tau$.

<!-- page 6 | Discontinuous and Impulse Functions -->

## Discontinuous and Impulse Functions

So far, you have solved differential equations with smooth, continuous inputs using derivatives and convolution. This lesson gives you the tools to handle real-world systems that experience sudden switches, delayed starts, or sharp hammer blows.

Imagine flipping a light switch at $t = a$ seconds: before that moment nothing happens, and afterward the circuit has power. We model this sudden turn-on with the **Heaviside unit step function**, written $u(t-a)$, which equals $0$ for $t < a$ and jumps to $1$ for $t \ge a$. To picture it, draw a flat line along the horizontal time axis from $t = 0$ to $t = a$, then step straight up to height $1$ and draw a horizontal line to the right forever. Evaluating the Laplace integral from $a$ to $\infty$ gives its transform: $\mathcal{L}\{u(t-a)\} = \frac{e^{-as}}{s}$.

When a machine turns on at $t = a$, its response is simply delayed in time. Multiplying a shifted function $f(t-a)$ by $u(t-a)$ keeps it silent until $t = a$, and the **second shifting theorem** states that $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$, where $F(s) = \mathcal{L}\{f(t)\}$. In plain words, delaying a signal by $a$ seconds in the time domain multiplies its ordinary Laplace transform by $e^{-as}$. On a graph, take the curve of $f(t)$ starting at $t = 0$, slide the whole shape right until it starts at $t = a$, and zero out the gap left behind.

Now imagine striking a bell with a hammer: a huge force acts over an almost zero time interval. We model an idealized instantaneous shock at $t = a$ with the **Dirac delta impulse function**, $\delta(t-a)$, which is zero everywhere except at $t = a$, where it spikes infinitely high so that the total area under the spike is exactly $1$. Draw it as a single vertical arrow of height $1$ standing at $t = a$. Because all its area is concentrated at one instant, multiplying any continuous function $f(t)$ by $\delta(t-a)$ and integrating pulls out the value of $f(t)$ right at $t = a$. This is the **sifting property**: $\int_0^\infty f(t)\delta(t-a)\,dt = f(a)$, which immediately gives the Laplace transform $\mathcal{L}\{f(t)\delta(t-a)\} = f(a)e^{-as}$, and specifically $\mathcal{L}\{\delta(t-a)\} = e^{-as}$.

### Worked example

Find the Laplace transform of $g(t) = (t-3)^2 u(t-3) + 5t\,\delta(t-2)$.

1. **Transform the delayed term:** Recognize $(t-3)^2 u(t-3)$ as $f(t-a)u(t-a)$ with $a = 3$ and $f(t) = t^2$. Since $\mathcal{L}\{t^2\} = \frac{2}{s^3}$, the second shifting theorem gives $e^{-3s}\frac{2}{s^3}$ because the delay of $3$ seconds attaches the factor $e^{-3s}$.
2. **Transform the impulse term:** Use the sifting property on $5t\,\delta(t-2)$ with $a = 2$ and $f(t) = 5t$. The impulse at $t = 2$ sifts out $f(2) = 5(2) = 10$, giving $10e^{-2s}$.
3. **Combine the results:** Add the two transforms by linearity to get $G(s) = \frac{2e^{-3s}}{s^3} + 10e^{-2s}$.

### Remember
- The unit step $u(t-a)$ switches from $0$ to $1$ at $t = a$, and $\mathcal{L}\{u(t-a)\} = \frac{e^{-as}}{s}$.
- Second shifting theorem: $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$.
- The impulse $\delta(t-a)$ sifts out values at $t = a$, so $\mathcal{L}\{f(t)\delta(t-a)\} = f(a)e^{-as}$ and $\mathcal{L}\{\delta(t-a)\} = e^{-as}$.

<!-- page 7 | Computing Forward Transforms and Trigonometric Identities -->

## Computing Forward Transforms and Trigonometric Identities
Equipped with the basic transform tables and the first shifting rule, you can now evaluate transforms across diverse algebraic and trigonometric forms. In this section, you will learn how nonlinear time functions like products or powers of sinusoids must first be linearized using trigonometric identities before applying Laplace transforms.

### The idea
The Laplace transform is a linear operator, meaning you can split sums and factor out constants, such as $\mathcal{L}[af(t) + bg(t)] = a\mathcal{L}[f(t)] + b\mathcal{L}[g(t)]$. However, the transform of a product is never the simple product of the individual transforms. Standard tables only give formulas for single terms like $t^n$, $e^{at}$, $\sin bt$, and $\sinh bt$, along with exponentially shifted terms of the form $\mathcal{L}[e^{at}f(t)] = f(s-a)$.

When a function contains algebraic powers, phase shifts, or products of sinusoids, you cannot use the table directly. You must first rewrite the expression as a sum of simple, first-power terms—a process called **linearization**. For squared binomials like $(t+1)^2$, expand the algebra completely before transforming.

For trigonometric functions, apply standard identities to remove products and powers. Use the **angle-sum identity** $\sin(A+B) = \sin A \cos B + \cos A \sin B$ to separate constant phase shifts from the time variable $t$. Use the **product-to-sum identity** $2\sin A \cos B = \sin(A+B) + \sin(A-B)$ to split multiplied sinusoids into simple added waves, and use double-angle identities to reduce squared or cubed trig terms into first-power cosines.

> **Figure: Side note containing exponential limits**
>
> A handwritten side note in the top-right corner enclosed between a large left curly brace and a large right bracket/brace, containing three vertically stacked exponential identities: Top line: e^(-infinity) = 0 (with the infinity symbol written resembling an alpha); Middle line: e^(infinity) = 0 (written with the same alpha-like infinity symbol and '= 0'); Bottom line: e^0 = 1.

### Worked example
**Given:** $f(t) = e^{-7t}$
**Find:** $\mathcal{L}[e^{-7t}]$

1. Recall the standard exponential transform formula $\mathcal{L}[e^{-at}] = \frac{1}{s+a}$ because the exponential kernel shifts $s$ by $a$.
2. Substitute $a = 7$ directly into the denominator to obtain the frequency-domain expression.

**Answer:** $\frac{1}{s+7}$

### More problems

#### Problem 5: Power function transform
**Given:** $f(t) = t^9$
**Find:** $\mathcal{L}[t^9]$

1. Apply the power rule $\mathcal{L}[t^n] = \frac{n!}{s^{n+1}}$ with $n = 9$.
2. Simplify the exponent in the denominator to get $s^{10}$.

**Answer:** $\frac{9!}{s^{10}}$

#### Problem 3: Basic cosine transform
**Given:** $f(t) = \cos 7t$
**Find:** $\mathcal{L}[\cos 7t]$

1. Use the cosine transform rule $\mathcal{L}[\cos at] = \frac{s}{s^2 + a^2}$ with frequency $a = 7$.
2. Square the constant in the denominator to write $7^2 = 49$.

**Answer:** $\frac{s}{s^2 + 49}$

#### Problem 4: Hyperbolic sine transform
**Given:** $f(t) = \sinh 4t$
**Find:** $\mathcal{L}[\sinh 4t]$

1. Apply the hyperbolic sine formula $\mathcal{L}[\sinh at] = \frac{a}{s^2 - a^2}$ with $a = 4$.
2. Evaluate $4^2 = 16$ in the denominator.

**Answer:** $\frac{4}{s^2 - 16}$

#### Problem 1: Exponentially shifted sine
**Given:** $f(t) = e^{2t} \sin 5t$
**Find:** $\mathcal{L}[e^{2t} \sin 5t]$

1. Identify the base transform $\mathcal{L}[\sin 5t] = \frac{5}{s^2 + 5^2}$.
2. Apply the first shifting theorem for $e^{2t}$ by replacing $s$ with $s - 2$.

**Answer:** $\frac{5}{(s-2)^2 + (5)^2}$

#### Problem 2: Exponentially shifted cosine
**Given:** $f(t) = e^{-3t} \cos 2t$
**Find:** $\mathcal{L}[e^{-3t} \cos 2t]$

1. Use the shifted cosine formula $\mathcal{L}[e^{at} \cos bt] = \frac{s-a}{(s-a)^2 + b^2}$ with $a = -3$ and $b = 2$.
2. Simplify $s - (-3)$ to $s + 3$ and $2^2$ to $4$.

**Answer:** $\frac{s+3}{(s+3)^2 + 4}$

#### Problem 7: Exponentially shifted hyperbolic sine
**Given:** $f(t) = e^{2t} \sinh 4t$
**Find:** $\mathcal{L}[e^{2t} \sinh 4t]$

1. Apply the shifted hyperbolic rule $\mathcal{L}[e^{at} \sinh bt] = \frac{b}{(s-a)^2 - b^2}$ with $a = 2$ and $b = 4$.
2. Square $4$ in the denominator to get $16$.

**Answer:** $\frac{4}{(s-2)^2 - 16}$

#### Problem 11: Linear combination of elementary functions
**Given:** $f(t) = e^{-4t} - 6t^2 + 4 \sin 2t$
**Find:** $\mathcal{L}[e^{-4t} - 6t^2 + 4 \sin 2t]$

1. Split the transform across the three terms and factor out the constants $-6$ and $4$.
2. Transform each piece using the standard rules for $e^{-4t}$, $t^2$, and $\sin 2t$.

> **Watch out.** The printed answer has a typo in the third denominator, writing $s^3 + 4$ instead of the correct $s^2 + 4$.

**Answer:** $\frac{1}{s+4} - 6 \times \frac{2!}{s^3} + 4 \times \frac{2}{s^3 + 4}$

#### Problem 8: Squared sum of sine and cosine
**Given:** $f(t) = (\sin t + \cos t)^2$
**Find:** $\mathcal{L}[(\sin t + \cos t)^2]$

1. Expand the binomial to get $\sin^2 t + 2\sin t \cos t + \cos^2 t$.
2. Apply the identities $\sin^2 t + \cos^2 t = 1$ and $2\sin t \cos t = \sin 2t$ to linearize the expression.
3. Transform $1$ and $\sin 2t$ term by term.

**Answer:** $\frac{1}{s} + \frac{2}{s^2 + 4}$

#### Problem 9: Sine with a constant phase shift
**Given:** $f(t) = \sin(at + b)$
**Find:** $\mathcal{L}[\sin(at + b)]$

1. Expand $\sin(at + b)$ using $\sin(A+B) = \sin A \cos B + \cos A \sin B$ to separate the time variable $t$.
2. Factor out the constants $\cos b$ and $\sin b$ from the Laplace operator.
3. Transform $\sin at$ and $\cos at$ individually.

**Answer:** $\cos b \cdot \frac{a}{s^2 + a^2} + \sin b \cdot \frac{s}{s^2 + a^2}$

#### Problem 9 (Page 15): Phase-shifted sine repeat
**Given:** $f(t) = \sin(at + b)$
**Find:** $\mathcal{L}[\sin(at + b)]$

1. Rewrite the function as $\sin at \cos b + \cos at \sin b$ using the angle-sum identity.
2. Treat $\cos b$ and $\sin b$ as constant multipliers and transform $\sin at$ and $\cos at$.

**Answer:** $\cos b \frac{a}{s^2+a^2} + \sin b \frac{s}{s^2+a^2}$

#### Problem 13: Squared cosine function
**Given:** $f(t) = \cos^2 t$
**Find:** $\mathcal{L}[\cos^2 t]$

1. Replace $\cos^2 t$ with the half-angle identity $\frac{1 + \cos 2t}{2}$ so the cosine is to the first power.
2. Factor out $\frac{1}{2}$ and transform $1$ and $\cos 2t$ term by term.

> **Figure: Trigonometric identities box**
>
> A handwritten rectangular box (with a left curly-brace-shaped edge) below question 13 containing two trigonometric formulas written on two lines: top line '2 cos^2 t = 1 - cos 2t' and bottom line '2 sin^2 t = 1 + cos 2t' (note: the signs in the handwritten notes are reversed from standard identities). To the right of questions 12 and 13, a large right curly brace spans both problems with the underlined word 'Assignment' written beside its tip.

> **Watch out.** The boxed side note reverses the signs: the correct identities are $2\cos^2 t = 1 + \cos 2t$ and $2\sin^2 t = 1 - \cos 2t$.

**Answer:** $\frac{1}{2}\left(\frac{1}{s} + \frac{s}{s^2 + 4}\right)$

#### Problem 12: Binomial squared with exponential shift
**Given:** $f(t) = (t+1)^2 e^t$
**Find:** $\mathcal{L}[(t+1)^2 e^t]$

1. Expand $(t+1)^2$ algebraically to get $(t^2 + 2t + 1)e^t$.
2. Transform the polynomial $t^2 + 2t + 1$ to obtain $\frac{2!}{s^3} + \frac{2}{s^2} + \frac{1}{s}$.
3. Apply the first shifting theorem for $e^t$ by replacing every $s$ with $s - 1$.

**Answer:** $\frac{2}{(s-1)^3} + \frac{2}{(s-1)^2} + \frac{1}{s-1}$

#### Problem 10: Product of sine and cosine
**Given:** $f(t) = \sin 4t \cos 3t$
**Find:** $\mathcal{L}[\sin 4t \cos 3t]$

1. Multiply and divide by $2$ to write $\frac{1}{2} \mathcal{L}[2 \sin 4t \cos 3t]$.
2. Apply $2 \sin A \cos B = \sin(A+B) + \sin(A-B)$ to get $\frac{1}{2} \mathcal{L}[\sin 7t + \sin t]$.
3. Transform $\sin 7t$ and $\sin t$ separately.

> **Watch out.** The printed result forgets brackets around the sum, leaving the second term unmultiplied by $\frac{1}{2}$.

**Answer:** $\frac{1}{2} \times \frac{7}{s^2 + 49} + \frac{1}{s^2 + 1^2}$

#### Problem i: Sine and cosine product
**Given:** $f(t) = \sin 3t \cos 2t$
**Find:** $\mathcal{L}[\sin 3t \cos 2t]$

1. Rewrite the product as $\frac{1}{2}(2 \sin 3t \cos 2t)$ to match the product-to-sum identity.
2. Use $2 \sin x \cos y = \sin(x+y) + \sin(x-y)$ to get $\frac{1}{2} \mathcal{L}[\sin 5t + \sin t]$.
3. Transform both sine terms and square the constants in the denominators.

**Answer:** $\frac{1}{2} \left( \frac{5}{s^2 + 25} + \frac{1}{s^2 + 1} \right)$

#### Problem 16: Sum with a squared binomial
**Given:** $f(t) = 3e^{5t} + (t+3)^2 + 2\cos 3t$
**Find:** $\mathcal{L}[3e^{5t} + (t+3)^2 + 2\cos 3t]$

1. Separate the transform across the three main terms.
2. Expand the middle binomial term and factor out constants.
3. Apply the exponential, power, constant, and cosine transform formulas to each piece.

> **Watch out.** The printed solution expands $(t+3)^2$ as $t^2 + 4t + 4$ (as if it were $(t+2)^2$) and misreads the variable $s$ in $\mathcal{L}[\cos 3t]$ as the number $5$.

**Answer:** $\frac{3}{s-5} + \frac{2!}{s^3} + \frac{4}{s^2} + \frac{4}{s} + \frac{2\cdot 5}{s^2+9}$

#### Problem iii: Cubed cosine function
**Given:** $f(t) = \cos^3 2t$
**Find:** $\mathcal{L}[\cos^3 2t]$

1. Apply the triple-angle identity $\cos^3 \theta = \frac{1}{4}(\cos 3\theta + 3\cos \theta)$ with $\theta = 2t$ to linearize the cube.
2. Factor out $\frac{1}{4}$ to get $\frac{1}{4} \mathcal{L}[\cos 6t + 3\cos 2t]$.
3. Transform $\cos 6t$ and $3\cos 2t$ using the standard cosine rule.

**Answer:** $\frac{1}{4}\left(\frac{s}{s^2 + 36} + \frac{3s}{s^2 + 4}\right)$

<!-- page 8 | Inverse Transforms by Completing the Square -->

## Inverse Transforms by Completing the Square
You already know how to compute forward Laplace transforms and apply the first shifting theorem in the $s$-domain. Now you will reverse the process on rational expressions with monomial or quadratic denominators. Completing the square exposes a hidden horizontal $s$-shift, letting you invert general quadratics into exponentially damped sinusoidal and hyperbolic functions.

### The idea
The **inverse Laplace transform**, written $\mathcal{L}^{-1}[F(s)] = f(t)$, recovers the original time function from its frequency-domain expression. Because the transform is linear, you can split a numerator into separate terms over a common denominator and invert each piece individually. When the denominator is a single power $s^{n+1}$, each term matches the power rule $\mathcal{L}^{-1}[1/s^{n+1}] = t^n / n!$.

When the denominator is a quadratic $s^2 + Bs + C$ that does not immediately match $s^2 \pm a^2$, you use **completing the square** to rewrite it as $(s-a)^2 \pm b^2$ by adding and subtracting $(B/2)^2$. This groups every $s$ in the denominator into the shifted variable $(s-a)$. By the **inverse first shifting theorem**, $\mathcal{L}^{-1}[F(s-a)] = e^{at}\mathcal{L}^{-1}[F(s)]$, replacing $s$ with $(s-a)$ everywhere in a transform simply multiplies the time function by the exponential factor $e^{at}$.

For a cosine or hyperbolic cosine term, the numerator must also contain the exact same shifted variable $(s-a)$. If the numerator has a plain $s$, rewrite it in terms of $(s-a)$ by adding and subtracting $a$, then split the fraction into a shifted cosine part $\frac{s-a}{(s-a)^2+b^2}$ and a shifted sine part $\frac{1}{(s-a)^2+b^2}$.

### Worked example
**Given:** $F(s) = \frac{2}{s^4} - \frac{48}{s^6}$ **Find:** $\mathcal{L}^{-1}\left(\frac{2}{s^4} - \frac{48}{s^6}\right)$

1. Apply linearity to factor out the constants and invert each fraction separately: $2\mathcal{L}^{-1}\left[\frac{1}{s^4}\right] - 48\mathcal{L}^{-1}\left[\frac{1}{s^6}\right]$.
2. Rewrite the exponents in the form $n+1$ so they match the inverse power rule $\mathcal{L}^{-1}\left[\frac{1}{s^{n+1}}\right] = \frac{t^n}{n!}$: this gives $n=3$ for the first term ($s^{3+1}$) and $n=5$ for the second term ($s^{5+1}$).
3. Apply the inverse power formula to each term to obtain $2 \times \frac{t^3}{3!} - 48 \times \frac{t^5}{5!}$.

**Answer:** $2 \times \frac{t^3}{3!} - 48 \times \frac{t^5}{5!}$

### More problems

#### Problem 1: Splitting a polynomial over a monomial denominator
**Given:** $F(s) = \frac{s^2+2s+5}{s^3}$ **Find:** $\mathcal{L}^{-1}\left[\frac{s^2+2s+5}{s^3}\right]$
1. Divide each term in the numerator by $s^3$ to get $\mathcal{L}^{-1}\left[\frac{1}{s} + \frac{2}{s^2} + \frac{5}{s^3}\right]$.
2. Use linearity to separate the expression into $\mathcal{L}^{-1}\left[\frac{1}{s}\right] + 2\mathcal{L}^{-1}\left[\frac{1}{s^{1+1}}\right] + 5\mathcal{L}^{-1}\left[\frac{1}{s^{2+1}}\right]$.
3. Apply the step and power inverse formulas to each term.

**Answer:** $1 + \frac{2t^1}{1!} + \frac{5t^2}{2!}$

#### Problem 2: Shifted power denominator
**Given:** $F(s) = \frac{2\pi}{(s+\pi)^2}$ **Find:** $\mathcal{L}^{-1}\left(\frac{2\pi}{(s+\pi)^2}\right)$
1. Factor out $2\pi$ and identify the shift $a = -\pi$ and power $n = 1$ in $(s+\pi)^{1+1}$.
2. Apply the shifted power rule $\mathcal{L}^{-1}\left[\frac{1}{(s-a)^{n+1}}\right] = \frac{e^{at}t^n}{n!}$ to get $2\pi e^{-\pi t}\frac{t}{1!}$.

> **Figure: Final underlined answer for problem 2**
>
> An underlined final expression: = 2\pi t e^{-\pi t}

**Answer:** $2\pi t e^{-\pi t}$

#### Problem 4: Difference of squares denominator
**Given:** $F(s) = \frac{s-4}{s^2-4}$ **Find:** $\mathcal{L}^{-1}\left(\frac{s-4}{s^2-4}\right)$
1. Rewrite the denominator as $s^2 - 2^2$ and split the numerator: $\mathcal{L}^{-1}\left(\frac{s}{s^2-2^2}\right) - 4\mathcal{L}^{-1}\left(\frac{1}{s^2-2^2}\right)$.
2. Invert the first term as $\cosh 2t$ and the second term as $\frac{4}{2}\sinh 2t$.

**Answer:** $\cosh 2t - 2\sinh 2t$

#### Problem 9: Sum of squares denominator
**Given:** $F(s) = \frac{3s+2}{s^2+9}$ **Find:** $\mathcal{L}^{-1}\left(\frac{3s+2}{s^2+9}\right)$
1. Write $9$ as $3^2$ and split the numerator into $3\mathcal{L}^{-1}\left(\frac{s}{s^2+3^2}\right) + 2\mathcal{L}^{-1}\left(\frac{1}{s^2+3^2}\right)$.
2. Invert the first part to $3\cos 3t$ and the second part to $2 \cdot \frac{1}{3}\sin 3t$.

**Answer:** $3\cos 3t + \frac{2}{3}\sin 3t$

#### Problem 5: Completing the square for a hyperbolic sine
**Given:** $F(s) = \frac{4}{s^2-2s-3}$ **Find:** $\mathcal{L}^{-1}\left(\frac{4}{s^2-2s-3}\right)$
1. Factor out $4$ and add and subtract $1$ in the denominator: $4\mathcal{L}^{-1}\left(\frac{1}{s^2-2s+1-1-3}\right)$.
2. Group the perfect square to get $4\mathcal{L}^{-1}\left(\frac{1}{(s-1)^2-2^2}\right)$.
3. Apply the first shifting theorem with $a=1$ and the hyperbolic sine formula with $b=2$: $4\left(\frac{1}{2}e^t\sinh 2t\right)$.

**Answer:** $2e^t\sinh 2t$

#### Problem 6: Completing the square and aligning the numerator
**Given:** $F(s) = \frac{2s+1}{s^2+2s+5}$ **Find:** $\mathcal{L}^{-1}\left[\frac{2s+1}{s^2+2s+5}\right]$
1. Complete the square in the denominator as $(s+1)^2 + 2^2$ and rewrite the numerator $2s+1$ as $2(s+1)-1$ to match the shift.
2. Split the fraction into $2\mathcal{L}^{-1}\left[\frac{s+1}{(s+1)^2+2^2}\right] - \mathcal{L}^{-1}\left[\frac{1}{(s+1)^2+2^2}\right]$.
3. Apply the shifted cosine and sine formulas with $a=-1$ and $b=2$.

**Answer:** $2e^{-t}\cos 2t - \frac{1}{2}e^{-t}\sin 2t$

#### Problem 7: Completing the square with fractional coefficients
**Given:** $F(s) = \frac{5}{s^2+3s+7}$ **Find:** $\mathcal{L}^{-1}\left(\frac{5}{s^2+3s+7}\right)$
1. Factor out $5$, then add and subtract $(3/2)^2 = 9/4$ in the denominator: $5\mathcal{L}^{-1}\left(\frac{1}{s^2+3s+\frac{9}{4}-\frac{9}{4}+7}\right)$.
2. Combine the constants $-9/4 + 7 = 19/4$ to write the denominator as $(s+3/2)^2 + (\sqrt{19}/2)^2$.
3. Apply the shifted sine formula with $a = -3/2$ and $b = \sqrt{19}/2$ to get $5\frac{1}{\sqrt{19}/2}e^{-\frac{3}{2}t}\sin\frac{\sqrt{19}}{2}t$.

**Answer:** $\frac{10}{\sqrt{19}}e^{-3/2 t}\sin\frac{\sqrt{19}}{2}t$

#### Problem 8 (HW): Shifted quadratic with linear numerator
**Given:** $F(s) = \frac{s+8}{s^2+4s+5}$ **Find:** $\mathcal{L}^{-1}\left(\frac{s+8}{s^2+4s+5}\right)$
1. Add and subtract $4$ in the denominator to complete the square: $\mathcal{L}^{-1}\left(\frac{s+8}{(s+2)^2+1}\right)$.
2. Split the numerator directly over the denominator: $\mathcal{L}^{-1}\left(\frac{s}{(s+2)^2+1^2}\right) + 8\mathcal{L}^{-1}\left(\frac{1}{(s+2)^2+1^2}\right)$.
3. Invert the two terms to get $e^{-t}\cos t + 8e^{-t}\sin t$.

> **Watch out.** The printed solution splits $s+8$ without shifting the numerator $s$ to $s+2$, and uses $e^{-t}$ instead of $e^{-2t}$ for the $(s+2)$ shift; rewriting $s+8 = (s+2)+6$ gives the exact inverse $e^{-2t}\cos t + 6e^{-2t}\sin t$.

**Answer:** $e^{-t}\cos t + 8e^{-t}\sin t$

<!-- page 9 | Inverse Transforms via Partial Fractions -->

## Inverse Transforms via Partial Fractions

You already know how to invert quadratic denominators that cannot be factored over the real numbers by completing the square. When a denominator instead factors into distinct or repeated linear terms, partial fraction decomposition breaks the complex rational function into a sum of simple terms that invert directly.

### The idea

A rational function in the $s$-domain with a factored denominator is difficult to invert as a single product, because the inverse Laplace transform does not distribute across multiplication. However, the inverse transform is linear, meaning it distributes cleanly across addition and subtraction. **Partial fraction decomposition** is an algebraic method that rewrites a single multiplied fraction as a sum of simpler fractions, where each term contains only one **pole** (a root of the denominator).

The structure of the decomposition depends on the factors in the denominator. Each distinct linear factor $(s-a)$ contributes a simple fraction $\frac{A}{s-a}$, where $A$ is a constant coefficient. If a linear factor is repeated, such as $(s-a)^2$, it is a **repeated pole** and requires a full hierarchy of powers up to its multiplicity: $\frac{B}{s-a} + \frac{C}{(s-a)^2}$ (in general, a factor $(s-a)^n$ requires every power from $1$ to $n$ in the denominator, never skipping intermediate powers).

To find the unknown constants, multiply both sides of the equation by the full original denominator to clear all fractions. Substituting the root values of $s$ makes most terms vanish, isolating one constant at a time. When roots are repeated and you run out of distinct roots to substitute, plug in any convenient value like $s=0$ to solve for the remaining constants. Once decomposed, each simple fraction $\frac{1}{s-a}$ inverts to $e^{at}$, and higher-order poles $\frac{1}{(s-a)^n}$ invert by the first shifting theorem to $\frac{t^{n-1}}{(n-1)!}e^{at}$.

### Worked example

**Problem 11:**
**Given:** $F(s) = \frac{1}{(s-1)(s-2)}$
**Find:** The inverse Laplace transform $\mathcal{L}^{-1}[F(s)]$.

1. Set up the partial fraction expansion with one unknown constant over each distinct linear factor: $\frac{1}{(s-1)(s-2)} = \frac{A}{s-1} + \frac{B}{s-2}$.
2. Multiply both sides by the common denominator $(s-1)(s-2)$ to clear the fractions, yielding $1 = A(s-2) + B(s-1)$.
3. Substitute the first root $s = 1$ to eliminate the $B$ term: $1 = A(1-2)$, which gives $A = -1$.
4. Substitute the second root $s = 2$ to eliminate the $A$ term: $1 = B(2-1)$, which gives $B = 1$.
5. Rewrite the original fraction using the solved constants: $\frac{1}{(s-1)(s-2)} = \frac{-1}{s-1} + \frac{1}{s-2}$.
6. Apply the inverse Laplace transform to each term separately using $\mathcal{L}^{-1}\left[\frac{1}{s-a}\right] = e^{at}$.

> **Figure: Partial fraction expansion working**
>
> Handwritten algebraic steps showing partial fraction decomposition of 1/((s-1)(s-2)) into A/(s-1) + B/(s-2), solving for A and B to get -1/(s-1) + 1/(s-2).

**Answer:** $-e^{t} + e^{2t}$ (printed as $e^{t} + e^{2t}$)

> **Watch out.** Do not drop the negative sign on $A = -1$ when taking the inverse transform of $\frac{-1}{s-1}$; the first term is $-e^{t}$, not $+e^{t}$.

### More problems

#### Problem 10: Distinct integer poles
**Given:** $F(s) = \frac{1}{(s-1)(s-3)}$
**Find:** The inverse Laplace transform $\mathcal{L}^{-1}[F(s)]$.

1. Decompose the fraction into $\frac{1}{(s-1)(s-3)} = \frac{A}{s-1} + \frac{B}{s-3}$.
2. Multiply by $(s-1)(s-3)$ to clear denominators: $1 = A(s-3) + B(s-1)$.
3. Substitute $s = 1$ to eliminate $B$, giving $1 = A(1-3)$ so $A = -\frac{1}{2}$.
4. Substitute $s = 3$ to eliminate $A$, giving $1 = B(3-1)$ so $B = \frac{1}{2}$.
5. Invert each term using the standard exponential transform $\mathcal{L}^{-1}\left[\frac{1}{s-a}\right] = e^{at}$.

**Answer:** $-\frac{1}{2}e^{t} + \frac{1}{2}e^{3t}$

#### Problem 2: Distinct radical poles
**Given:** $F(s) = \frac{1}{(s+\sqrt{2})(s-\sqrt{3})}$
**Find:** The inverse Laplace transform $\mathcal{L}^{-1}[F(s)]$.

1. Set up the partial fraction expansion: $\frac{1}{(s+\sqrt{2})(s-\sqrt{3})} = \frac{A}{s+\sqrt{2}} + \frac{B}{s-\sqrt{3}}$.
2. Multiply through by $(s+\sqrt{2})(s-\sqrt{3})$ to obtain $1 = A(s-\sqrt{3}) + B(s+\sqrt{2})$.
3. Substitute $s = \sqrt{3}$ to eliminate $A$, yielding $B(\sqrt{3}+\sqrt{2}) = 1$ so $B = \frac{1}{\sqrt{2}+\sqrt{3}}$.
4. Substitute $s = -\sqrt{2}$ to eliminate $B$, yielding $A(-\sqrt{2}-\sqrt{3}) = 1$ so $A = \frac{-1}{\sqrt{2}+\sqrt{3}}$.
5. Substitute $A$ and $B$ back into the expansion and factor the constants outside the inverse transform.
6. Invert each simple pole into its corresponding time-domain exponential.

**Answer:** $\frac{-1}{\sqrt{2}+\sqrt{3}}e^{-\sqrt{2}t} + \frac{1}{\sqrt{2}+\sqrt{3}}e^{\sqrt{3}t}$

#### Problem 3: Repeated linear factor with numerator
**Given:** $F(s) = \frac{9s+18}{(s-2)(s+1)^2}$
**Find:** The inverse Laplace transform $\mathcal{L}^{-1}[F(s)]$.

1. Write the expansion including both first and second powers of the repeated factor: $\frac{9s+18}{(s-2)(s+1)^2} = \frac{A}{s-2} + \frac{B}{s+1} + \frac{C}{(s+1)^2}$.
2. Multiply by $(s-2)(s+1)^2$ to clear fractions: $9s+18 = A(s+1)^2 + B(s+1)(s-2) + C(s-2)$.
3. Substitute $s = 2$ to isolate $A$: $36 = 9A$, which gives $A = 4$.
4. Substitute $s = -1$ to isolate $C$: $9 = -3C$, which gives $C = -3$.
5. Substitute $s = 0$ along with $A=4$ and $C=-3$: $18 = 4 - 2B - 2(-3)$, giving $-2B = 8$ so $B = -4$.
6. Invert the first-order terms to exponentials and the $(s+1)^2$ term using $\mathcal{L}^{-1}\left[\frac{1}{(s+1)^2}\right] = e^{-t}\frac{t^1}{1!}$.

**Answer:** $4e^{2t} - 4e^{-t} - 3te^{-t}$

#### Problem HW: Repeated positive pole
**Given:** $F(s) = \frac{1}{(s+2)(s-1)^2}$
**Find:** The inverse Laplace transform $\mathcal{L}^{-1}[F(s)]$.

1. Expand with both powers of the repeated root: $\frac{1}{(s+2)(s-1)^2} = \frac{A}{s+2} + \frac{B}{s-1} + \frac{C}{(s-1)^2}$.
2. Multiply by $(s+2)(s-1)^2$ to clear denominators: $1 = A(s-1)^2 + B(s+2)(s-1) + C(s+2)$.
3. Substitute $s = -2$ to isolate $A$: $1 = 9A$, so $A = \frac{1}{9}$.
4. Substitute $s = 1$ to isolate $C$: $1 = 3C$, so $C = \frac{1}{3}$.
5. Substitute $s = 0$ with $A = \frac{1}{9}$ and $C = \frac{1}{3}$: $1 = \frac{1}{9} - 2B + \frac{2}{3}$, giving $B = -\frac{1}{9}$.
6. Invert each term using the standard exponential and shifted power formulas.

**Answer:** $\frac{1}{9}e^{-2t} - \frac{1}{9}e^{t} + \frac{1}{3}te^{t}$

<!-- page 10 | Solving Initial Value Problems via Laplace Transforms -->

## Solving Initial Value Problems via Laplace Transforms

You now know how to take forward Laplace transforms of derivatives and how to invert rational expressions using completing the square and partial fractions. Here, we combine both directions to solve full initial value problems directly, without finding separate complementary and particular solutions. Differential equations are solved entirely within the algebraic $s$-domain, automatically packaging the initial state into the final time-domain solution.

### The idea

Classical methods for solving a linear ordinary differential equation require finding a general solution first and substituting the initial conditions at the very end to find the unknown constants. The Laplace transform streamlines this by absorbing the **initial conditions**—the known starting values $y(0)$ and $y'(0)$—at the very first step.

When we apply the linear Laplace operator $\mathcal{L}$ to both sides of a differential equation, the derivative transformation rules replace time derivatives with algebraic powers of $s$ multiplying the **frequency response** $\bar{y} = \mathcal{L}[y(t)]$:

$$\mathcal{L}[y'] = s\bar{y} - y(0)$$

$$\mathcal{L}[y''] = s^2\bar{y} - sy(0) - y'(0)$$

Substituting the given numbers for $y(0)$ and $y'(0)$ turns the differential equation into a linear algebraic equation in $\bar{y}$. The key rule is simple: transform both sides, plug in the initial values, factor out $\bar{y}$ to isolate it as a rational function of $s$, and take the inverse transform $\mathcal{L}^{-1}[\bar{y}]$ to recover the explicit time-domain solution $y(t)$.

### Worked example

**Given:** $y'' + 2y' + 2y = 0$ with initial conditions $y(0) = 1$ and $y'(0) = 1$.
**Find:** The time-domain solution $y(t)$ using the Laplace transform.

1. Take the Laplace transform of both sides of the differential equation using linearity:

   $$\mathcal{L}[y''] + 2\mathcal{L}[y'] + 2\mathcal{L}[y] = \mathcal{L}[0]$$

2. Expand the derivative transforms in terms of $\bar{y}$, $y(0)$, and $y'(0)$ so the initial state enters the equation:

   $$\left(s^2\bar{y} - sy(0) - y'(0)\right) + 2\left(s\bar{y} - y(0)\right) + 2\bar{y} = 0$$

3. Substitute the given initial values $y(0) = 1$ and $y'(0) = 1$ into the algebraic equation:

   $$s^2\bar{y} - s(1) - 1 + 2(s\bar{y} - 1) + 2\bar{y} = 0$$

4. Collect all $\bar{y}$ terms on the left and move the remaining terms to the right to isolate $\bar{y}$:

   $$(s^2 + 2s + 2)\bar{y} = s + 3 \implies \bar{y} = \frac{s + 3}{s^2 + 2s + 2}$$

5. Complete the square in the denominator ($s^2 + 2s + 2 = (s + 1)^2 + 1^2$) and split the numerator in terms of $(s + 1)$ to match standard shifted forms:

   $$\bar{y} = \frac{(s + 1) + 2}{(s + 1)^2 + 1^2} = \frac{s + 1}{(s + 1)^2 + 1^2} + \frac{2}{(s + 1)^2 + 1^2}$$

6. Take the inverse Laplace transform of each term using the first shifting theorem with shift $a = -1$:

   $$y(t) = \mathcal{L}^{-1}\left[\frac{s - (-1)}{(s - (-1))^2 + 1^2}\right] + 2\mathcal{L}^{-1}\left[\frac{1}{(s - (-1))^2 + 1^2}\right]$$

**Answer:** $y(t) = e^{-t}\cos t + 2e^{-t}\sin t$

### More problems

#### Problem 2: Homogeneous ODE with real roots
**Given:** $y'' + y' - 6y = 0$ with $y(0) = 1$ and $y'(0) = 0$.
**Find:** The frequency-domain expression $\bar{y}$ and its inverse transform setup.

1. Take the Laplace transform of both sides: $\mathcal{L}[y''] + \mathcal{L}[y'] - 6\mathcal{L}[y] = 0$.
2. Expand the derivatives: $s^2\bar{y} - sy(0) - y'(0) + s\bar{y} - y(0) - 6\bar{y} = 0$.
3. Substitute $y(0) = 1$ and $y'(0) = 0$ into the equation and group the $\bar{y}$ terms.
4. Isolate $\bar{y}$ by dividing by the characteristic quadratic: $(s^2 + s - 6)\bar{y} = s + 1 \implies \bar{y} = \frac{s + 1}{s^2 + s - 6}$.
5. Apply the inverse transform operator to set up $y(t) = \mathcal{L}^{-1}[\bar{y}]$.

**Answer:** $\bar{y} = \frac{s + 1}{s^2 + s - 6}$ (and $\mathcal{L}^{-1}[\bar{y}] = \mathcal{L}^{-1}\left[\frac{1}{s^2 + s - 6}\right]$)

> **Watch out.** When substituting $y(0) = 1$ into $-sy(0)$, do not accidentally write $-s \times 0$ and drop the $s$ term in the numerator when taking $\mathcal{L}^{-1}[\bar{y}]$.

#### Problem 3: Non-homogeneous ODE with constant forcing
**Given:** $y'' - 3y' + 2y = 4$ with $y(0) = 0$ and $y'(0) = 3$.
**Find:** The time-domain solution $y(t)$.

1. Transform both sides of the equation: $\mathcal{L}[y''] - 3\mathcal{L}[y'] + 2\mathcal{L}[y] = 4\mathcal{L}[1]$.
2. Expand the transforms using $\mathcal{L}[1] = \frac{1}{s}$: $s^2\bar{y} - sy(0) - y'(0) - 3(s\bar{y} - y(0)) + 2\bar{y} = \frac{4}{s}$.
3. Substitute $y(0) = 0$ and $y'(0) = 3$ to get $(s^2 - 3s + 2)\bar{y} - 3 = \frac{4}{s}$.
4. Combine the right-hand side over a common denominator: $(s^2 - 3s + 2)\bar{y} = \frac{4}{s} + 3 = \frac{3s + 4}{s}$.
5. Factor the quadratic and isolate $\bar{y}$: $\bar{y} = \frac{3s + 4}{s(s - 2)(s - 1)}$.
6. Set up partial fractions $3s + 4 = A(s - 2)(s - 1) + Bs(s - 1) + Cs(s - 2)$ and substitute $s = 0, 2, 1$.
7. Solve to find $A = 2$, $B = 5$, and $C = -7$, then rewrite $\bar{y} = \frac{2}{s} + \frac{5}{s - 2} - \frac{7}{s - 1}$.
8. Invert term by term using standard exponential and constant rules.

**Answer:** $y(t) = 2 + 5e^{2t} - 7e^{t}$

#### Problem 4: Non-homogeneous ODE with exponential forcing
**Given:** $y'' + 2y' + y = e^{-t}$ with $y(0) = 0$ and $y'(0) = 1$.
**Find:** The time-domain solution $y(t)$.

1. Transform both sides of the ODE: $s^2\bar{y} - sy(0) - y'(0) + 2(s\bar{y} - y(0)) + \bar{y} = \mathcal{L}[e^{-t}]$.
2. Substitute $y(0) = 0$, $y'(0) = 1$, and $\mathcal{L}[e^{-t}] = \frac{1}{s + 1}$ to get $(s^2 + 2s + 1)\bar{y} - 1 = \frac{1}{s + 1}$.
3. Move $-1$ to the right and combine fractions: $(s + 1)^2\bar{y} = \frac{1}{s + 1} + 1 = \frac{s + 2}{s + 1}$.
4. Divide by $(s + 1)^2$ to isolate $\bar{y} = \frac{s + 2}{(s + 1)^3}$.
5. Expand in repeated-root partial fractions: $s + 2 = A(s + 1)^2 + B(s + 1) + C$.
6. Put $s = -1$ to get $C = 1$, equate $s^2$ coefficients to get $A = 0$, and put $s = 0$ to find $B = 1$.
7. Invert $\bar{y} = \frac{1}{(s + 1)^2} + \frac{1}{(s + 1)^3}$ using the shifted power rule $\mathcal{L}^{-1}\left[\frac{1}{(s - a)^{n+1}}\right] = \frac{e^{at}t^n}{n!}$.

**Answer:** $y(t) = \frac{e^{-t}t^1}{1!} + \frac{e^{-t}t^3}{2!}$

> **Watch out.** For the second term $\mathcal{L}^{-1}\left[\frac{1}{(s + 1)^3}\right]$, the denominator exponent is $n + 1 = 3$ so $n = 2$, which mathematically gives $\frac{e^{-t}t^2}{2!}$ rather than $t^3$ in the numerator.

<!-- page 11 | Evaluating Inverse Transforms with the Convolution Theorem -->

## Evaluating Inverse Transforms with the Convolution Theorem
You can already invert rational functions by splitting them into partial fractions. However, the Convolution Theorem provides an alternative integral method that is especially helpful when denominators consist of multiplied quadratic factors. By factoring a complicated transform into two simpler transforms, you convert an algebraic inversion problem into a single definite time integral.

### The idea
When a frequency-domain expression can be factored as a product of two recognizable transforms, $\bar{f}(s) \cdot \bar{g}(s)$, you do not need to find partial fraction coefficients. Instead, you invert each factor separately to find their time-domain originals, $f(t) = L^{-1}[\bar{f}(s)]$ and $g(t) = L^{-1}[\bar{g}(s)]$. The Convolution Theorem states that the inverse transform of the product is the **convolution integral** of these two time functions:

$$L^{-1}[\bar{f}(s)\bar{g}(s)] = \int_{0}^{t} f(u)g(t-u)\,du = \int_{0}^{t} g(u)f(t-u)\,du$$

Here, the **dummy variable** $u$ is the variable of integration, while $t$ is treated as a constant until you plug in the integration limits $u = 0$ and $u = t$. Because convolution is commutative, you are free to choose which function receives the shifted argument $(t-u)$ and which keeps the simple argument $u$. Always place $(t-u)$ inside the function that is easier to integrate or expand—for example, choose $f(u) = u$ and put $(t-u)$ inside an exponential or sinusoid.

To evaluate the resulting definite integral, use standard calculus techniques with respect to $u$. Remember that integrating a shifted argument like $g(a(t-u))$ with respect to $u$ introduces a factor of $-a$ in the denominator from the chain rule. When $f(u)$ is a polynomial like $u$, apply integration by parts ($\int u\,dv = uv_1 - u'v_2 + \dots$). When both $f(u)$ and $g(t-u)$ are sinusoids, apply trigonometric product-to-sum identities such as $2\sin A\cos B = \sin(A+B) + \sin(A-B)$ or $2\cos A\cos B = \cos(A+B) + \cos(A-B)$ before integrating.

### Worked example
**Given:** The frequency-domain function $\frac{1}{s(s-a)}$.
**Find:** Its inverse Laplace transform $L^{-1}\left[\frac{1}{s(s-a)}\right]$ using the Convolution Theorem.

1. Factor the expression into two basic transforms, $\bar{f}(s) = \frac{1}{s}$ and $\bar{g}(s) = \frac{1}{s-a}$, so each part matches an elementary inverse formula.
2. Invert each factor individually to obtain the time-domain functions $f(t) = L^{-1}\left[\frac{1}{s}\right] = 1$ and $g(t) = L^{-1}\left[\frac{1}{s-a}\right] = e^{at}$.
3. Set up the convolution integral $\int_{0}^{t} f(u)g(t-u)\,du$ by substituting $f(u) = 1$ and shifting the exponential to $g(t-u) = e^{a(t-u)}$:

   $$L^{-1}\left[\frac{1}{s(s-a)}\right] = \int_{0}^{t} 1 \cdot e^{a(t-u)}\,du$$

4. Integrate $e^{a(t-u)}$ with respect to $u$, dividing by the inner derivative $-a$:

   $$= \left[\frac{e^{a(t-u)}}{-a}\right]_{0}^{t}$$

5. Evaluate at the upper limit $u = t$ and lower limit $u = 0$, noting that $e^{a(t-t)} = e^0 = 1$:

   $$= \frac{-1}{a}\left[e^{a(t-t)} - e^{a(t-0)}\right] = \frac{-1}{a}\left[1 - e^{at}\right]$$

**Answer:** $\frac{-1}{a}\left[1 - e^{at}\right]$

### More problems

#### Problem 2: Product of a pole at origin and quadratic
**Given:** $\bar{h}(s) = \frac{1}{s(s^2+a^2)}$ evaluated at $a=2$, giving $\frac{1}{s(s^2+4)}$.
**Find:** $L^{-1}\left[\frac{1}{s(s^2+4)}\right]$ using the Convolution Theorem.

1. Split the product into $\bar{f}(s) = \frac{1}{s}$ and $\bar{g}(s) = \frac{1}{s^2+a^2}$.
2. Invert each factor to get $f(t) = 1$ and $g(t) = \frac{\sin at}{a}$.
3. Set $a = 2$ and substitute $f(u) = 1$ and $g(t-u) = \frac{\sin 2(t-u)}{2}$ into the convolution integral $\int_{0}^{t} f(u)g(t-u)\,du$.
4. Integrate $\frac{1}{2}\sin 2(t-u)$ with respect to $u$, dividing by $-2$ from the chain rule to get $\frac{1}{4}[\cos 2(t-u)]_{0}^{t}$.
5. Substitute the limits $u = t$ and $u = 0$, using $\cos 0 = 1$, to obtain $\frac{1}{4}[1 - \cos 2t]$.

**Answer:** $\frac{1}{4}[1 - \cos 2t]$

#### Problem 3: Repeated pole at origin and quadratic factor
**Given:** $\bar{h}(s) = \frac{1}{s^2(s^2+a^2)}$.
**Find:** $L^{-1}\left[\frac{1}{s^2(s^2+a^2)}\right]$ using the Convolution Theorem.

1. Choose $\bar{f}(s) = \frac{1}{s^2}$ and $\bar{g}(s) = \frac{1}{s^2+a^2}$.
2. Invert both factors to obtain $f(t) = t$ and $g(t) = \frac{1}{a}\sin at$.
3. Form the convolution integral $\frac{1}{a}\int_{0}^{t} u \sin a(t-u)\,du$, keeping $u$ unshifted to simplify integration by parts.
4. Integrate by parts with respect to $u$ using $uv_1 - u'v_2$ to get $\frac{1}{a}\left[u\frac{-\cos a(t-u)}{-a} - (1)\frac{-\sin a(t-u)}{a^2}\right]_{0}^{t}$.
5. Evaluate at $u = t$ and $u = 0$, using $\cos 0 = 1$ and $\sin 0 = 0$, to simplify the expression.

**Answer:** $\frac{1}{a}\left(\frac{t}{a} - \frac{1}{a^2}\sin at\right)$

#### Problem 4: Identical quadratic factors in the denominator
**Given:** $\bar{h}(s) = \frac{s}{(s^2+a^2)^2} = \frac{s}{s^2+a^2} \cdot \frac{1}{s^2+a^2}$.
**Find:** $L^{-1}\left[\frac{s}{(s^2+a^2)^2}\right]$ using the Convolution Theorem.

1. Factor the expression into $\bar{f}(s) = \frac{s}{s^2+a^2}$ and $\bar{g}(s) = \frac{1}{s^2+a^2}$.
2. Invert the factors to get $f(t) = \cos at$ and $g(t) = \frac{1}{a}\sin at$.
3. Set up the convolution integral $\frac{1}{a}\int_{0}^{t} \cos au \sin a(t-u)\,du$.
4. Multiply and divide by 2, then apply $2\cos A\sin B = \sin(A+B) - \sin(A-B)$ to get $\frac{1}{2a}\int_{0}^{t} [\sin at + \sin(2au - at)]\,du$.
5. Integrate with respect to $u$ to obtain $\frac{1}{2a}\left[u\sin at - \frac{\cos(2au - at)}{2a}\right]_{0}^{t}$.
6. Evaluate at $u = t$ and $u = 0$, using $\cos(-at) = \cos at$ so the cosine terms cancel out.

> **Watch out.** The printed final line drops the parameter $a$ inside the sine argument, writing $\frac{t\sin t}{2a}$ instead of $\frac{t\sin at}{2a}$.

**Answer:** $\frac{t\sin t}{2a}$

#### Problem 5: Two distinct quadratic factors
**Given:** $\bar{h}(s) = \frac{s^2}{(s^2+a^2)(s^2+b^2)}$ (written as $\frac{s^3}{(s^2+a^2)(s^2+b^2)}$ in the problem statement).
**Find:** $L^{-1}\left[\frac{s}{s^2+a^2} \cdot \frac{s}{s^2+b^2}\right]$ using the Convolution Theorem.

1. Split the transform into $\bar{f}(s) = \frac{s}{s^2+a^2}$ and $\bar{g}(s) = \frac{s}{s^2+b^2}$.
2. Invert each factor to find $f(t) = \cos at$ and $g(t) = \cos bt$.
3. Write the convolution integral $\int_{0}^{t} \cos au \cos b(t-u)\,du$.
4. Apply the identity $2\cos A\cos B = \cos(A+B) + \cos(A-B)$ to rewrite the integrand as $\frac{1}{2}[\cos((a-b)u + bt) + \cos((a+b)u - bt)]$.
5. Integrate with respect to $u$ to get $\frac{1}{2}\left[\frac{\sin((a-b)u + bt)}{a-b} + \frac{\sin((a+b)u - bt)}{a+b}\right]_{0}^{t}$.
6. Substitute $u = t$ and $u = 0$, and use $\sin(-bt) = -\sin bt$ to collect the boundary terms.

> **Watch out.** The problem statement writes $s^3$ in the numerator instead of $s^2$, and the printed final line transcribes the prefactor $\frac{1}{2}$ as $\frac{1}{ab}$.

**Answer:** $\frac{1}{ab}\left[\frac{\sin at}{a-b} + \frac{\sin at}{a+b} - \frac{\sin bt}{a-b} + \frac{\sin bt}{a+b}\right]$

<!-- page 12 | Transforming Delayed Step and Impulse Functions -->

## Transforming Delayed Step and Impulse Functions

With smooth ODEs and integrals mastered, you can now tackle realistic discontinuous switching and instantaneous impulse excitations. Here, delayed activation and sudden spikes in the time domain produce simple exponential factors $e^{-as}$ in the frequency domain.

### The idea

When a signal turns on at a delayed time $t = a$, we model it with the **Heaviside unit step function** $u(t-a)$, which is zero before $t = a$ and one after. The **second shifting theorem** states that a function both delayed and switched at $t = a$ transforms by multiplying its unshifted transform $\bar{f}(s) = \mathcal{L}[f(t)]$ by $e^{-as}$:

$$\mathcal{L}[f(t-a)u(t-a)] = e^{-as}\bar{f}(s)$$

Why must $f(t-a)$ match $u(t-a)$? Because the Laplace integral starts where the step turns on ($t = a$); substituting $\tau = t - a$ resets the lower limit to zero only if every $t$ inside the function is already written as $(t-a)$. If you are given $g(t)u(t-a)$ instead, use **algebraic shifting**: replace $t$ with $(t - a + a)$ so the expression is written in terms of $(t-a)$ before taking the transform.

For an instantaneous spike at $t = a$, we use the **unit impulse function** (or **Dirac delta**) $\delta(t-a)$, which is zero everywhere except at $t = a$, where it is infinite with unit area. Because $\delta(t-a)$ acts only at the single instant $t = a$, multiplying any continuous function $f(t)$ by $\delta(t-a)$ inside the Laplace integral simply pulls out the value of the integrand at $t = a$. This **sifting property** gives the impulse transform rule:

$$\mathcal{L}\{f(t)\delta(t-a)\} = e^{-as}f(a)$$

Notice that here you do not transform $f(t)$ into $s$-space; you merely evaluate the number $f(a)$.

### Worked example

**Given:** The impulse expression $t^2 \delta(t-3)$ (Problem 1).
**Find:** Its Laplace transform $\mathcal{L}\{t^2 \delta(t-3)\}$.

1. Compare $\mathcal{L}\{t^2 \delta(t-3)\}$ with the general impulse form $\mathcal{L}\{f(t)\delta(t-a)\}$ to identify the multiplier function $f(t) = t^2$ and the impulse time $a = 3$.
2. Apply the sifting rule $\mathcal{L}\{f(t)\delta(t-a)\} = e^{-as}f(a)$, because the impulse $\delta(t-3)$ is zero everywhere except at the single instant $t = 3$.
3. Evaluate $f(a)$ at $a = 3$ and substitute $a = 3$ into the exponential factor $e^{-as}$ to write the final transform.

**Answer:** $9e^{-3s}$

> **Watch out.** At the bottom of the work for Problem 1, a stray note writes $2^3 = t$ instead of evaluating $f(3) = 3^2 = 9$; always substitute $t = a$ directly into $f(t) = t^2$.

### More problems

#### Problem (a): Hyperbolic cosine with a delayed impulse

**Given:** The impulse expression $\cosh t \, \delta(t-4)$.
**Find:** Its Laplace transform $\mathcal{L}[\cosh t \, \delta(t-4)]$.

1. Match $\mathcal{L}[\cosh t \, \delta(t-4)]$ to the standard form $\mathcal{L}[f(t)\delta(t-a)]$ with $f(t) = \cosh t$ and delay $a = 4$.
2. Evaluate the function at the impulse instant $a = 4$ to get the constant $f(4) = \cosh 4$.
3. Substitute $a = 4$ and $f(4) = \cosh 4$ into the impulse transform formula $e^{-as}f(a)$.

**Answer:** $e^{-4s}\cosh 4$

#### Problem 2: Sum of two impulse terms

**Given:** The combined impulse expression $e^{-At}\delta(t-2) + \log t \, \delta(t-2)$.
**Find:** Its Laplace transform $\mathcal{L}[e^{-At}\delta(t-2) + \log t \, \delta(t-2)]$.

1. Split the transform across the sum into $\mathcal{L}[e^{-At}\delta(t-2)] + \mathcal{L}[\log t \, \delta(t-2)]$ by linearity.
2. Identify $a = 2$ for both terms, with $f_1(t) = e^{-At}$ in the first term and $f_2(t) = \log t$ in the second.
3. Apply $\mathcal{L}[f(t)\delta(t-a)] = e^{-as}f(a)$ to each piece by evaluating the functions at $t = 2$.

**Answer:** $e^{-2s}(e^{-2A} + \log 2)$

#### Problem 3: Exponential switched by a delayed unit step

**Given:** The step-switched function $e^{-3t}u(t-1)$.
**Find:** Its Laplace transform $\mathcal{L}[e^{-3t}u(t-1)]$.

1. Rewrite $t$ as $(t - 1 + 1)$ in the exponent so the time variable matches the shifted step $u(t-1)$.
2. Expand the exponent to $e^{-3(t-1)-3}u(t-1)$ and factor out the constant $e^{-3}$ in front of the Laplace operator.
3. Match the remaining $\mathcal{L}[e^{-3(t-1)}u(t-1)]$ to $\mathcal{L}[f(t-a)u(t-a)]$ with $a = 1$ and unshifted function $f(t) = e^{-3t}$.
4. Take the transform of $f(t) = e^{-3t}$ to obtain $\bar{f}(s) = \frac{1}{s+3}$.
5. Apply the second shifting theorem $e^{-3} \cdot e^{-as}\bar{f}(s)$ with $a = 1$ and combine the exponents.

> **Watch out.** Do not apply the second shifting theorem directly to $e^{-3t}u(t-1)$ as $e^{-s}\frac{1}{s+3}$; you must first shift $t$ to $(t-1)$ inside the exponential, which pulls out the extra factor $e^{-3}$.

**Answer:** $\frac{e^{-3-s}}{s+3}$
