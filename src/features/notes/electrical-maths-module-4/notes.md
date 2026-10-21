<!-- page 1 | Start here -->

## Taylor, Maclaurin, and Fourier Series

This notebook teaches how to represent smooth functions locally using Taylor and Maclaurin power series, and how to represent periodic and piecewise-smooth functions globally using Fourier trigonometric series. Learners will compute full and half-range Fourier expansions over arbitrary intervals and apply Dirichlet's convergence theorem to evaluate classical infinite numerical series.

**Before you start:** Higher-order derivatives of elementary functions; Definite integration and integration by parts; Trigonometric identities and values at integer multiples of pi.

### Your path through this module

1. **Local Approximation with Taylor and Maclaurin Series**: Any infinitely differentiable function can be represented near a chosen center point as an infinite sum of powers whose coefficients are determined by the function's derivatives at that center.
2. **Periodic Functions and Euler's Formulas for Fourier Series**: A periodic, piecewise-smooth function on any interval of length 2L can be decomposed into an average value plus an infinite sum of sines and cosines whose coefficients are found by integrating the function against each harmonic.
3. **Integration Shortcuts and Dirichlet's Convergence Theorem**: By evaluating Euler integrals with tabular integration by parts and then plugging a specific x-value into Dirichlet's convergence formula, we can find exact closed-form sums for famous infinite numerical series.
4. **Even and Odd Extensions and Half-Range Series**: A function defined only on [0, L] can be mirrored evenly across the vertical axis to produce a pure cosine series, or mirrored oddly through the origin to produce a pure sine series.
5. **Practice: Computing Maclaurin and Taylor Series**: Find the general k-th derivative formula (or rewrite the expression in terms of a standard geometric series) to generate Taylor and Maclaurin expansions and identify their intervals of convergence.
6. **Practice: Full Fourier Series on 2pi-Length Intervals**: Break integrals across piecewise intervals on [-pi, pi] or [0, 2pi] and apply tabular integration by parts to find full Fourier expansions and sum classical series.
7. **Practice: Full Fourier Series on Arbitrary Intervals [-L, L] and [0, 2L]**: Replace nx with n*pi*x/L in Euler's formulas to handle arbitrary interval lengths, and combine evaluations at continuous and jump points to solve for multiple infinite series at once.
8. **Practice: Half-Range Cosine Series on [0, L]**: Extend a function on [0, L] as an even function to represent it purely with cosines, taking care to compute the n = 1 coefficient separately whenever a product-to-sum formula divides by n - 1.
9. **Practice: Half-Range Sine Series on [0, L]**: Extend a function on [0, L] as an odd function so that a0 = 0 and an = 0, leaving only a single sine integral bn to compute.

<!-- page 2 | Local Approximation with Taylor and Maclaurin Series -->

## Local Approximation with Taylor and Maclaurin Series

You already know how to compute derivatives of all orders for elementary functions; now we use those derivatives at a single point to build an infinite polynomial that matches the function. This lets us replace complicated curves with simple addition and multiplication.

Imagine driving along a winding mountain road in heavy fog. Even if you only know your exact position, speed, and how fast you are turning the wheel right now, you can predict where the road goes for the next few meters. In mathematics, a **smooth function** is one you can differentiate infinitely many times without any sharp corners or breaks. An **infinite power series** is an endless polynomial built from powers of how far you step away from a starting point $x_0$.

To make our polynomial match the function $f(x)$ near the **center point** $x_0$, we force both to have the exact same value, slope, curvature, and higher derivatives at $x_0$. This rule produces the **Taylor series**:

$$f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$$

In plain words, each term adjusts the polynomial's $k$-th derivative to match $f^{(k)}(x_0)$, while the factorial $k!$ cancels out the constants that drop down during repeated differentiation. To see this, draw a wavy curve $f(x)$ and mark a point $x_0$. Draw a straight tangent line at $x_0$ (using up to $k=1$); it hugs the curve right at $x_0$. Now draw a parabola that also matches the second derivative (up to $k=2$); it bends with the curve and stays close over a wider stretch.

When we choose the origin $x_0 = 0$ as our center, the formula simplifies and is called a **Maclaurin series**:

$$f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(0)}{k!}x^k$$

Rather than computing derivatives every time, engineers memorize four foundational Maclaurin expansions and their **region of convergence**, which is the set of $x$ values where the infinite sum actually equals the function. You can also substitute algebraic expressions directly for $x$ inside these series.

| Function | Maclaurin Series | Region of Convergence |
| :--- | :--- | :--- |
| $e^x$ | $1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{k=0}^{\infty} \frac{x^k}{k!}$ | All real $x$ |
| $\sin(x)$ | $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k+1}}{(2k+1)!}$ | All real $x$ |
| $\cos(x)$ | $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k}}{(2k)!}$ | All real $x$ |
| $\frac{1}{1-x}$ | $1 + x + x^2 + x^3 + \cdots = \sum_{k=0}^{\infty} x^k$ | $|x| < 1$ |

### Worked example
Find the first three nonzero terms of the Taylor series for $f(x) = \ln(x)$ centered at $x_0 = 1$, and find the Maclaurin series for $g(x) = \frac{1}{1+x^2}$.

1. **Evaluate derivatives at the center $x_0 = 1$ to find the Taylor coefficients:** We need the function value and derivatives at $x_0 = 1$. Here $f(1) = \ln(1) = 0$, $f'(x) = x^{-1}$ so $f'(1) = 1$, $f''(x) = -x^{-2}$ so $f''(1) = -1$, and $f'''(x) = 2x^{-3}$ so $f'''(1) = 2$.
2. **Assemble the Taylor series for $\ln(x)$:** Plugging these numbers into the Taylor formula gives $\ln(x) = 0 + \frac{1}{1!}(x-1) + \frac{-1}{2!}(x-1)^2 + \frac{2}{3!}(x-1)^3 + \cdots = (x-1) - \frac{1}{2}(x-1)^2 + \frac{1}{3}(x-1)^3 - \cdots$.
3. **Use algebraic substitution for $g(x)$ to avoid taking derivatives:** Rewrite $g(x)$ as $\frac{1}{1 - (-x^2)}$ to match the standard geometric form $\frac{1}{1-u}$ with $u = -x^2$.
4. **Substitute into the known Maclaurin series:** Replace $x$ with $-x^2$ in $\sum_{k=0}^{\infty} x^k$ to get $g(x) = 1 - x^2 + x^4 - x^6 + \cdots = \sum_{k=0}^{\infty} (-1)^k x^{2k}$, which converges when $|-x^2| < 1$, or $|x| < 1$.

### Remember
- A Taylor series builds a polynomial around $x = x_0$ using coefficients $\frac{f^{(k)}(x_0)}{k!}$; a Maclaurin series is simply a Taylor series centered at $x_0 = 0$.
- Memorize the Maclaurin series for $e^x$, $\sin(x)$, $\cos(x)$ (valid for all $x$) and $\frac{1}{1-x}$ (valid for $|x| < 1$).
- Obtain new series quickly by substituting algebraic terms into the four standard series instead of differentiating from scratch.

<!-- page 3 | Periodic Functions and Euler's Formulas for Fourier Series -->

## Periodic Functions and Euler's Formulas for Fourier Series

In the previous lesson, we built Taylor series for smooth functions around a single point. Now we will represent repeating signals—even those with sharp corners or sudden jumps—using an infinite sum of sines and cosines across a whole interval.

Think of an electrocardiogram (ECG) trace or a blinking turn signal: the same pattern repeats over and over. A **periodic function** satisfies $f(x + T) = f(x)$ for all $x$, where the smallest positive shift $T$ is the **fundamental period**. For convenience in formulas, we write this period as $T = 2L$, where $L$ is the **half-period**. Any interval of length $2L$, written $[c, c+2L]$, captures one full cycle and is called a **fundamental interval**. On a graph, if you trace the curve from $x = -L$ to $x = L$ (or from $0$ to $2L$) and slide that cutout sideways by $2L$, it lands right back on the graph.

Real engineering signals, like a switch flipping on and off, cannot be expanded in Taylor series because derivatives fail at jumps. Instead, we only require the signal to obey **Dirichlet's conditions** on one period: it must have a finite number of maxima and minima, and be **piecewise continuous**. Piecewise continuous means the graph is made of unbroken smooth pieces separated by a finite number of **jump discontinuities**—places where the graph steps instantaneously from a finite left-hand value to a finite right-hand value without shooting to infinity.

Just as a musical chord can be separated into pure tuning-fork notes, any periodic function meeting Dirichlet's conditions can be written as a **Fourier trigonometric series** $S(x)$:

$$S(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\frac{n\pi x}{L} + b_n \sin\frac{n\pi x}{L} \right)$$

In words, the function is built from a constant baseline $\frac{a_0}{2}$ plus waves of frequency $\frac{n\pi}{L}$, called **harmonics**. To find how much of each wave is inside $f(x)$, we use **Euler's formulas** over any one period $[c, c+2L]$:

$$a_0 = \frac{1}{L}\int_{c}^{c+2L} f(x)\,dx, \quad a_n = \frac{1}{L}\int_{c}^{c+2L} f(x)\cos\frac{n\pi x}{L}\,dx, \quad b_n = \frac{1}{L}\int_{c}^{c+2L} f(x)\sin\frac{n\pi x}{L}\,dx$$

Here, $\frac{a_0}{2}$ is simply the average height of the graph over one cycle. On a standard interval like $[-\pi, \pi]$ or $[0, 2\pi]$, the half-period is $L = \pi$, so $\frac{n\pi x}{L}$ simplifies nicely to $nx$.

### Worked example
Find the Fourier series for the square wave $f(x) = 0$ on $(-2, 0)$ and $f(x) = 4$ on $(0, 2)$, repeated with period $2L = 4$.

1. **Identify the half-period and check Dirichlet's conditions:** The fundamental interval is $[-2, 2]$ of length $2L = 4$, so $L = 2$. The graph has two flat pieces and finite jumps at $x = 0$ and $x = 2$, so Dirichlet's conditions hold.
2. **Compute $a_0$ to find the average height:** Set $c = -2$ and $L = 2$ in Euler's formula. Since $f(x) = 0$ on $(-2, 0)$, integrate only from $0$ to $2$:

   $$a_0 = \frac{1}{2}\int_{0}^{2} 4\,dx = \frac{1}{2}[4x]_0^2 = 4$$

3. **Compute $a_n$ for the cosine weights:**

   $$a_n = \frac{1}{2}\int_{0}^{2} 4\cos\frac{n\pi x}{2}\,dx = 2\left[\frac{2}{n\pi}\sin\frac{n\pi x}{2}\right]_0^2 = \frac{4}{n\pi}\sin(n\pi) = 0$$

4. **Compute $b_n$ for the sine weights:**

   $$b_n = \frac{1}{2}\int_{0}^{2} 4\sin\frac{n\pi x}{2}\,dx = 2\left[-\frac{2}{n\pi}\cos\frac{n\pi x}{2}\right]_0^2 = \frac{4}{n\pi}(1 - \cos(n\pi))$$

Assemble the series with $\frac{a_0}{2} = 2$:

$$S(x) = 2 + \sum_{n=1}^{\infty} \frac{4}{n\pi}(1 - (-1)^n)\sin\frac{n\pi x}{2}$$

### Remember
- Always divide the full period $T$ by $2$ to get the half-period $L$ before writing Euler's formulas.
- The constant term in the series is $\frac{a_0}{2}$ (the average value over one period), so take care not to forget the factor of $\frac{1}{2}$.
- When $f(x)$ is defined in pieces, split each Euler integral into matching sub-intervals.

<!-- page 4 | Integration Shortcuts and Dirichlet's Convergence Theorem -->

## Integration Shortcuts and Dirichlet's Convergence Theorem

Now that you can set up Euler's integrals for a Fourier series, you need fast shortcuts to evaluate them and a rule to know what the infinite sum actually equals at any point, enabling you to sum famous numerical series.

When a periodic signal is a ramp or parabola, Euler's formulas require integrating a polynomial $u(x)$ times a wave $v(x)$. Doing integration by parts repeatedly is slow and error-prone. Instead, we use **Bernoulli's generalized integration by parts** (often called tabular integration), where you differentiate $u$ until it vanishes and repeatedly integrate $v$:

$$\int u v \, dx = u v_1 - u' v_2 + u'' v_3 - u''' v_4 + \cdots$$

Here $u', u''$ are successive derivatives of $u$, and $v_1, v_2, v_3$ are successive integrals of $v$. In words: multiply each derivative of the polynomial by the next integral of the wave, alternating plus and minus signs.

Other signals decay like a plucked guitar string or beat like two tuning forks. To integrate a decaying wave $e^{ax}$ times $\cos(bx)$ or $\sin(bx)$, or the product of two waves, use these direct shortcuts:

| Integral Type | Shortcut Formula / Identity |
| :--- | :--- |
| Exponential-Cosine | $\int e^{ax}\cos(bx)\,dx = \frac{e^{ax}}{a^2+b^2}(a\cos bx + b\sin bx)$ |
| Exponential-Sine | $\int e^{ax}\sin(bx)\,dx = \frac{e^{ax}}{a^2+b^2}(a\sin bx - b\cos bx)$ |
| Product-to-Sum | $\cos A\cos B = \frac{1}{2}[\cos(A-B)+\cos(A+B)]$, $\sin A\cos B = \frac{1}{2}[\sin(A+B)+\sin(A-B)]$ |

When you plug integration limits like $\pi$ or $-\pi$ into your results for an integer $n$, always simplify using $\sin(n\pi) = 0$ and $\cos(n\pi) = (-1)^n$. On a unit circle, stepping by $n$ half-turns always lands on the horizontal axis, alternating between $-1$ and $+1$.

Once you build the series, does it equal $f(x)$? Imagine tracing a square wave: at a vertical cliff, the smooth waves cannot be in two places at once, so they split the difference. A **jump discontinuity** is a point $x_0$ where the **left-hand limit** $f(x_0^-)$ (value approached from the left) and **right-hand limit** $f(x_0^+)$ (value approached from the right) are finite but unequal. **Dirichlet's convergence theorem** states that for a periodic, piecewise-smooth function, the Fourier series at any $x_0$ converges to the midpoint of the left and right limits:

$$S(x_0) = \frac{f(x_0^-) + f(x_0^+)}{2}$$

If you draw a vertical jump from height $1$ to height $3$ at $x_0$, place a solid dot at height $2$; the series lands on that dot. Where $f$ is continuous, both limits equal $f(x_0)$, so the series equals $f(x_0)$. Substituting a clever $x_0$ turns the function series into an exact sum for a numerical series.

### Worked example
Given that $f(x) = x^2$ on $(-\pi, \pi)$ with period $2\pi$ has $a_0 = \frac{2\pi^2}{3}$ and $b_n = 0$, find $a_n$ and evaluate $\sum_{n=1}^{\infty} \frac{1}{n^2}$.

1. **Integrate using Bernoulli's formula:** To find $a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} x^2 \cos(nx)\,dx$, set $u = x^2$ and $v = \cos(nx)$ so we avoid integrating by parts twice.

   $$a_n = \frac{1}{\pi}\left[ (x^2)\left(\frac{\sin nx}{n}\right) - (2x)\left(-\frac{\cos nx}{n^2}\right) + (2)\left(-\frac{\sin nx}{n^3}\right) \right]_{-\pi}^{\pi}$$

2. **Simplify at the limits:** Because $\sin(n\pi) = 0$ and $\cos(n\pi) = (-1)^n$, the sine terms vanish and the cosine term doubles:

   $$a_n = \frac{1}{\pi}\left[ \frac{2\pi(-1)^n}{n^2} - \frac{2(-\pi)(-1)^n}{n^2} \right] = \frac{4(-1)^n}{n^2}$$

3. **Apply Dirichlet's theorem at $x = \pi$:** The periodic extension of $x^2$ is continuous at $x = \pi$, since $f(\pi^-) = \pi^2$ and by periodicity $f(\pi^+) = f(-\pi^+) = (-\pi)^2 = \pi^2$. Plugging $x = \pi$ into the Fourier series gives:

   $$\pi^2 = \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4(-1)^n}{n^2} \cos(n\pi)$$

4. **Solve for the numerical sum:** Replace $\cos(n\pi)$ with $(-1)^n$, note that $(-1)^n(-1)^n = 1$, and isolate the sum:

   $$\frac{2\pi^2}{3} = 4 \sum_{n=1}^{\infty} \frac{1}{n^2} \implies \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

### Remember
- Use Bernoulli's formula $\int uv\,dx = uv_1 - u'v_2 + u''v_3 - \cdots$ when $u$ is a polynomial.
- For any integer $n$, always simplify $\sin(n\pi) = 0$ and $\cos(n\pi) = (-1)^n$.
- By Dirichlet's theorem, a Fourier series converges to $f(x_0)$ at continuous points and to $\frac{f(x_0^-) + f(x_0^+)}{2}$ at jumps.

<!-- page 5 | Even and Odd Extensions and Half-Range Series -->

## Even and Odd Extensions and Half-Range Series
In the previous lessons, you learned how to find full Fourier series by integrating both cosines and sines over a full period $[-L, L]$. Now, you will use symmetry to cut that work in half and represent a function defined only on $[0, L]$ using purely cosines or purely sines.

Imagine folding a sheet of paper along the vertical $y$-axis. An **even function** matches up with itself when folded across the $y$-axis, so $f(-x) = f(x)$, like $\cos(x)$ or $x^2$. On a symmetric interval $[-L, L]$, the signed area of an even function on the left equals the area on the right: $\int_{-L}^{L} f(x)\,dx = 2\int_{0}^{L} f(x)\,dx$. An **odd function** matches up only if you fold across the $y$-axis and then flip across the $x$-axis, so $f(-x) = -f(x)$, like $\sin(x)$ or $x$. Because its left and right areas have opposite signs, the symmetric integral of an odd function is zero: $\int_{-L}^{L} f(x)\,dx = 0$.

In engineering, a signal or a vibrating string of length $L$ is often defined only on $[0, L]$. Since we do not care what happens for negative $x$, we can invent the left half on $[-L, 0]$ to create symmetry. An **even periodic extension** reflects the graph across the $y$-axis onto $[-L, 0]$ and repeats it every $2L$, while an **odd periodic extension** reflects the graph across the $y$-axis and then flips it upside down across the $x$-axis before repeating.

Because the product of an even and an odd function is always odd, choosing an extension zeroes out half the Euler coefficients and yields a **half-range series** valid on $[0, L]$:

| Extension Type | Visual on $[-L, L]$ | Zero Terms | Remaining Coefficients (Double the $[0, L]$ integral) | Series on $[0, L]$ |
| :--- | :--- | :--- | :--- | :--- |
| **Even (Half-Range Cosine)** | Mirror across $y$-axis | $b_n = 0$ | $a_0 = \frac{2}{L}\int_0^L f(x)\,dx$, $a_n = \frac{2}{L}\int_0^L f(x)\cos\left(\frac{n\pi x}{L}\right)dx$ | $\frac{a_0}{2} + \sum_{n=1}^\infty a_n\cos\left(\frac{n\pi x}{L}\right)$ |
| **Odd (Half-Range Sine)** | Flip through origin | $a_0 = 0, a_n = 0$ | $b_n = \frac{2}{L}\int_0^L f(x)\sin\left(\frac{n\pi x}{L}\right)dx$ | $\sum_{n=1}^\infty b_n\sin\left(\frac{n\pi x}{L}\right)$ |

### Worked example
Find the half-range sine series for $f(x) = 1$ on $[0, \pi]$.

1. **Choose the extension:** A half-range sine series requires an odd extension, so $a_0 = 0$ and $a_n = 0$ automatically.
2. **Set up the sine coefficient $b_n$:** With $L = \pi$, double the integral over the half-period $[0, \pi]$: $b_n = \frac{2}{\pi}\int_0^\pi 1 \cdot \sin(nx)\,dx$.
3. **Integrate and simplify:** Evaluating gives $b_n = \frac{2}{\pi}\left[-\frac{\cos(nx)}{n}\right]_0^\pi = \frac{2}{n\pi}(1 - (-1)^n)$. This equals $0$ for even $n$ and $\frac{4}{n\pi}$ for odd $n$.
4. **Write the series:** Summing over odd integers $n = 1, 3, 5, \dots$ gives $f(x) \sim \frac{4}{\pi}\left(\sin(x) + \frac{\sin(3x)}{3} + \frac{\sin(5x)}{5} + \dots\right)$.

### Remember
- Even $\times$ Even = Even, Odd $\times$ Odd = Even, and Even $\times$ Odd = Odd.
- On $[-L, L]$, the integral of an odd function is $0$; the integral of an even function is $2\int_0^L$.
- On $[0, L]$, mirror evenly across the $y$-axis for a pure cosine series ($b_n = 0$), or flip oddly through the origin for a pure sine series ($a_0 = a_n = 0$).

<!-- page 6 | Practice: Computing Maclaurin and Taylor Series -->

## Practice: Computing Maclaurin and Taylor Series
With the theory of Taylor and Maclaurin series in place, we now practice deriving power series expansions from higher-order derivative patterns and algebraic substitutions. You will find the general $k$-th derivative formula or rewrite an expression in terms of a standard geometric series to generate expansions and identify their intervals of convergence.

### The idea
Writing out the first three or four terms of a Taylor or Maclaurin series is straightforward, but writing the infinite sum requires a general formula for the $k$-th derivative, $f^{(k)}(x)$. By computing the first few derivatives before plugging in the center $x_0$, you can spot how signs alternate, how factorials grow from repeated power-rule steps, or how trigonometric functions cycle every four derivatives. Once you write $f^{(k)}(x_0)$ in terms of $k$, dividing by $k!$ often cancels factorial factors cleanly.

For rational functions, repeated differentiation produces a geometric series whose terms are powers of $(x - x_0)$. Once you know the basic Maclaurin expansion $\frac{1}{1-u} = 1 + u + u^2 + u^3 + \dots$, which converges on the **interval of convergence** $|u| < 1$, you do not need to differentiate from scratch every time. You can factor out constants to create a leading $1$ in the denominator and substitute a rescaled variable $u$ directly into the known series. The series is valid wherever the substituted expression satisfies $|u| < 1$.

### Worked example
**Given:** The exponential function $f(x) = e^x$ centered at $x_0 = 0$.
**Find:** The Maclaurin series expansion of $f(x)$.

1. Evaluate the function at the center $x_0 = 0$: $f(0) = e^0 = 1$, which gives the constant term.
2. Compute the first few derivatives at $x = 0$: since $f'(x) = e^x$ and $f''(x) = e^x$, we get $f'(0) = 1$ and $f''(0) = 1$.
3. State the general $k$-th derivative pattern: because $e^x$ is its own derivative, $f^{(k)}(x) = e^x$, so $f^{(k)}(0) = 1$ for all $k \ge 0$.
4. Substitute $f^{(k)}(0) = 1$ into the Maclaurin formula $\sum_{k=0}^{\infty} \frac{f^{(k)}(0)}{k!} x^k$ to write out the expansion.

**Answer:** $1 + x + \frac{x^2}{2!} + \dots + \frac{x^k}{k!} + \dots$

### More problems

#### Problem Q(i): Maclaurin series for the decaying exponential
**Given:** The function $f(x) = e^{-x}$ for all $x \in \mathbb{R}$.
**Find:** The Maclaurin series of $f(x)$.

1. By the chain rule, each derivative of $e^{-x}$ multiplies by $-1$, giving $f^{(k)}(0) = (-1)^k$ (or substitute $-x$ into the series for $e^x$).
2. Substitute these coefficients into the Maclaurin series formula to get the alternating expansion.

**Answer:** $1 - x + \frac{x^2}{2!} - \frac{x^3}{3!} + \dots$

#### Problem Q(ii): Maclaurin series for the basic geometric fraction
**Given:** The function $f(x) = \frac{1}{1-x}$ in the region $|x| < 1$.
**Find:** The Maclaurin series of $f(x)$.

1. Differentiate $f(x) = (1-x)^{-1}$ repeatedly using the chain rule to find $f^{(k)}(x) = \frac{k!}{(1-x)^{k+1}}$, so $f^{(k)}(0) = k!$.
2. Divide $f^{(k)}(0) = k!$ by $k!$ in the Maclaurin formula, leaving a coefficient of $1$ on every power $x^k$.

**Answer:** $1 + x + x^2 + x^3 + \dots$

#### Problem 1: Maclaurin series for the sine function
**Given:** The trigonometric function $f(x) = \sin x$.
**Find:** The Maclaurin series of $f(x)$.

1. Evaluate the function and its first four derivatives at $0$: $f(0) = 0$, $f'(0) = \cos 0 = 1$, $f''(0) = -\sin 0 = 0$, $f'''(0) = -\cos 0 = -1$, and $f^{(4)}(0) = \sin 0 = 0$.
2. Group the derivatives into even and odd orders: for $k \ge 0$, all even derivatives vanish ($f^{(2k)}(0) = 0$) because $\sin 0 = 0$.
3. Write the odd derivative formula: $f^{(2k+1)}(x) = (-1)^k \cos x$, which gives $f^{(2k+1)}(0) = (-1)^k$ for $k \ge 0$.
4. Substitute the non-zero odd terms into the Maclaurin formula to obtain the odd-power series.

**Answer:** $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k+1}}{(2k+1)!}$

#### Problem 2: Maclaurin series for the cosine function
**Given:** The trigonometric function $f(x) = \cos x$.
**Find:** The Maclaurin series of $f(x)$.

1. Evaluate the derivatives of $\cos x$ at $x = 0$: odd derivatives contain $\sin 0$ and vanish, while even derivatives alternate as $f^{(2k)}(0) = (-1)^k$.
2. Substitute the even-order derivatives into the Maclaurin series formula.

**Answer:** $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k}}{(2k)!}$

#### Problem 3: Maclaurin series for an alternating rational function
**Given:** The function $f(x) = \frac{1}{1+x}$ for $|x| < 1$.
**Find:** The Maclaurin series of $f(x)$.

1. Compute the value and first two derivatives at $x = 0$: $f(0) = 1$, $f'(x) = \frac{-1}{(1+x)^2} \implies f'(0) = -1$, and $f''(x) = \frac{2}{(1+x)^3} \implies f''(0) = 2$.
2. Compute the third and fourth derivatives to see the factorial pattern: $f'''(x) = \frac{-2 \cdot 3}{(1+x)^4} \implies f'''(0) = -3!$ and $f^{(4)}(x) = \frac{2 \cdot 3 \cdot 4}{(1+x)^5} \implies f^{(4)}(0) = 4!$.
3. State the general $k$-th derivative at $x = 0$: $f^{(k)}(0) = (-1)^k k!$.
4. Substitute $f^{(k)}(0)$ into the Maclaurin formula and cancel $k!$ in the numerator and denominator.

> **Watch out.** The $k$-th derivative of $(1+x)^{-1}$ has denominator $(1+x)^{k+1}$, not $(1+x)^k$; at $x = 0$ both equal $1$, so $f^{(k)}(0) = (-1)^k k!$ is unaffected.

**Answer:** $1 - x + x^2 - x^3 + \dots = \sum_{k=0}^{\infty} (-1)^k x^k$

#### Problem Q(1): Taylor series of the reciprocal function at x = 1
**Given:** The function $f(x) = \frac{1}{x}$ about $x_0 = 1$ in the region $|x-1| < 1$.
**Find:** The Taylor series of $f(x)$ at $x = 1$.

1. Evaluate $f(x)$ and its first four derivatives at $x_0 = 1$: $f(1) = 1$, $f'(1) = -1$, $f''(1) = 2$, $f'''(1) = -3!$, and $f^{(4)}(1) = 4!$.
2. Write the general derivative value at $x_0 = 1$: $f^{(k)}(1) = (-1)^k k!$ for $k \ge 1$ (and $k = 0$).
3. Substitute $f^{(k)}(1)$ into the Taylor formula $\sum_{k=0}^{\infty} \frac{f^{(k)}(1)}{k!} (x-1)^k$ and cancel $k!$ to get powers of $(x-1)$.

> **Watch out.** The $k$-th derivative of $x^{-1}$ is $\frac{(-1)^k k!}{x^{k+1}}$ (exponent $k+1$, not $k$), which still evaluates to $(-1)^k k!$ at $x = 1$.

**Answer:** $1 - (x-1) + (x-1)^2 - (x-1)^3 + \dots = \sum_{k=0}^{\infty} (-1)^k (x-1)^k$

#### Problem Q(2): Taylor series of a shifted rational function at x = 1
**Given:** The function $f(x) = \frac{1}{1+x}$ at $x_0 = 1$ in the region $|x-1| < 1$.
**Find:** The Taylor series of $f(x)$ at $x = 1$.

1. Evaluate $f(x)$ and its first two derivatives at $x_0 = 1$: $f(1) = \frac{1}{2}$, $f'(x) = \frac{-1}{(1+x)^2} \implies f'(1) = -\frac{1}{4}$, and $f''(x) = \frac{2}{(1+x)^3} \implies f''(1) = \frac{2}{2^3}$.
2. Evaluate the third and fourth derivatives at $x_0 = 1$: $f'''(1) = \frac{-3!}{2^4}$ and $f^{(4)}(1) = \frac{4!}{2^5}$.
3. Write the general $k$-th derivative formula at $x_0 = 1$: from $f^{(k)}(x) = \frac{(-1)^k k!}{(1+x)^{k+1}}$, we have $f^{(k)}(1) = \frac{(-1)^k k!}{2^{k+1}}$ for $k \ge 0$.
4. Substitute $f^{(k)}(1)$ into the Taylor formula $\sum_{k=0}^{\infty} \frac{f^{(k)}(1)}{k!}(x-1)^k$ and cancel $k!$ in each term.

**Answer:** $\sum_{k=0}^{\infty} \frac{(-1)^k}{2^{k+1}} (x-1)^k = \frac{1}{2} - \frac{1}{2^2}(x-1) + \frac{1}{2^3}(x-1)^2 - \dots$

#### Problem Q(3): Maclaurin series by algebraic factoring and substitution
**Given:** The function $f(x) = \frac{3}{2-x}$ in the region $|x| < 2$.
**Find:** The Maclaurin series of $f(x)$.

1. Factor $2$ from the denominator so the constant term becomes $1$: $f(x) = \frac{3}{2}\left(\frac{1}{1 - x/2}\right)$.
2. Recall the standard geometric Maclaurin series $\frac{1}{1-u} = 1 + u + u^2 + u^3 + \dots$ for $|u| < 1$.
3. Check the convergence condition: since $|x| < 2$, the rescaled variable satisfies $|\frac{x}{2}| < 1$.
4. Replace $u$ with $\frac{x}{2}$ in the geometric series and multiply by $\frac{3}{2}$.

**Answer:** $\frac{3}{2} \left(1 + \frac{x}{2} + \left(\frac{x}{2}\right)^2 + \left(\frac{x}{2}\right)^3 + \dots \right)$

<!-- page 7 | Practice: Full Fourier Series on 2pi-Length Intervals -->

## Practice: Full Fourier Series on 2pi-Length Intervals

Having mastered power series at a point, we now practice computing full trigonometric Fourier series on standard $2\pi$ intervals for square waves and polynomials. The new skill here is breaking Euler's integrals across piecewise subintervals on $[-\pi, \pi]$ or $[0, 2\pi]$ and applying tabular integration by parts to find full Fourier expansions and sum classical infinite series.

### The idea

When a function $f(x)$ has period $2L = 2\pi$, the harmonic factor $\frac{n\pi x}{L}$ simplifies directly to $nx$. Whether the base interval is $[-\pi, \pi]$ (where $c = -\pi$) or $[0, 2\pi]$ (where $c = 0$), **Euler's formulas** take the streamlined form:

$$a_0 = \frac{1}{2\pi} \int_{c}^{c+2\pi} f(x)\,dx, \quad a_n = \frac{1}{\pi} \int_{c}^{c+2\pi} f(x)\cos(nx)\,dx, \quad b_n = \frac{1}{\pi} \int_{c}^{c+2\pi} f(x)\sin(nx)\,dx$$

Two integration techniques handle almost every problem on these intervals. First, if $f(x)$ is a piecewise-constant **square wave** with jump discontinuities, split each Euler integral into separate integrals over each subinterval where the formula for $f(x)$ is constant. Second, if $f(x)$ is a polynomial, use **Bernoulli's integration by parts** (tabular integration):

$$
\int u\,v\,dx = u v_1 - u' v_2 + u'' v_3 - \dots
$$

where $u$ is the polynomial differentiated until it vanishes, and $v_1, v_2, v_3, \dots$ are successive antiderivatives of $\cos(nx)$ or $\sin(nx)$.

Once you assemble the **Fourier series** $S(x) = a_0 + \sum_{n=1}^{\infty} [a_n \cos(nx) + b_n \sin(nx)]$, you can sum numerical series by applying **Dirichlet's convergence theorem**: at any point $x$ where $f(x)$ is continuous, the series converges directly to the function value, $S(x) = f(x)$.

### Worked example

**Problem 2:**
**Given:** $f(x) = \begin{cases} -K, & -\pi < x < 0 \\ K, & 0 < x < \pi \end{cases}$ on $(-\pi, \pi)$ with $K > 0$.
**Find:** The Fourier series of $f(x)$ and the sum of $1 - \frac{1}{3} + \frac{1}{5} - \dots$

1. Split the $a_0$ integral at the jump $x = 0$ because $f(x)$ changes formula there:
$$a_0 = \frac{1}{2\pi}\left[\int_{-\pi}^{0} (-K)\,dx + \int_{0}^{\pi} K\,dx\right] = \frac{1}{2\pi}[-K\pi + K\pi] = 0$$

2. Split the $a_n$ integral at $x = 0$ and integrate $\cos(nx)$, which vanishes because $\sin(n\pi) = \sin(0) = 0$:

   $$a_n = \frac{1}{\pi}\left[\left[\frac{-K\sin(nx)}{n}\right]_{-\pi}^{0} + \left[\frac{K\sin(nx)}{n}\right]_{0}^{\pi}\right] = 0$$

3. Split the $b_n$ integral at $x = 0$ and integrate $\sin(nx)$ to get cosine terms:

   $$b_n = \frac{1}{\pi}\left[\left[\frac{K\cos(nx)}{n}\right]_{-\pi}^{0} + \left[\frac{-K\cos(nx)}{n}\right]_{0}^{\pi}\right]$$

4. Evaluate at the limits using $\cos(-n\pi) = \cos(n\pi) = (-1)^n$ to simplify $b_n$:

   $$b_n = \frac{K}{n\pi}[2 - 2\cos(n\pi)] = \frac{2K}{n\pi}(1 - (-1)^n)$$

5. Substitute $a_0$, $a_n$, and $b_n$ into $S(x)$, noting that $1 - (-1)^n$ equals $2$ for odd $n$ and $0$ for even $n$:

   $$f(x) = \frac{4K}{\pi}\left[\sin x + \frac{1}{3}\sin(3x) + \frac{1}{5}\sin(5x) + \dots\right]$$

6. Substitute $x = \frac{\pi}{2}$, where $f(x)$ is continuous with $f\left(\frac{\pi}{2}\right) = K$, to evaluate the alternating series:

   $$K = \frac{4K}{\pi}\left(1 - \frac{1}{3} + \frac{1}{5} - \dots\right) \implies 1 - \frac{1}{3} + \frac{1}{5} - \dots = \frac{\pi}{4}$$

**Answer:** $f(x) = \frac{4K}{\pi}\left[\sin x + \frac{1}{3}\sin(3x) + \frac{1}{5}\sin(5x) + \dots\right]$, and $1 - \frac{1}{3} + \frac{1}{5} - \dots = \frac{\pi}{4}$.

### More problems

#### Problem 3: Periodic square wave on [0, 2pi]
**Given:** $f(x) = \begin{cases} K, & 0 \le x < \pi/2 \\ -K, & \pi/2 \le x < 3\pi/2 \\ K, & 3\pi/2 \le x < 2\pi \end{cases}$ on $[0, 2\pi]$.
**Find:** The Fourier series of $f(x)$ and the sum of $1 - \frac{1}{3} + \frac{1}{5} - \dots$

1. Split the $a_0$ integral across the three subintervals to find the average value:

   $$a_0 = \frac{K}{2\pi}\left[\left(\frac{\pi}{2} - 0\right) - \left(\frac{3\pi}{2} - \frac{\pi}{2}\right) + \left(2\pi - \frac{3\pi}{2}\right)\right] = 0$$

2. Integrate $f(x)\cos(nx)$ across all three subintervals:

   $$a_n = \frac{K}{n\pi}\left[2\sin\left(\frac{n\pi}{2}\right) - 2\sin\left(\frac{3n\pi}{2}\right)\right]$$

3. Apply the identity $\sin A - \sin B$ to simplify $a_n$:

   $$a_n = \frac{-4K}{n\pi}\cos(n\pi)\sin\left(\frac{n\pi}{2}\right) = \begin{cases} 0, & n \text{ even} \\ \frac{4K}{n\pi}\sin\left(\frac{n\pi}{2}\right), & n \text{ odd} \end{cases}$$

4. Integrate $f(x)\sin(nx)$ across the three subintervals and apply $\cos A - \cos B$, which vanishes because $\sin(n\pi) = 0$:

   $$b_n = \frac{-K}{n\pi}\left[2\cos\left(\frac{n\pi}{2}\right) - 2\cos\left(\frac{3n\pi}{2}\right)\right] = \frac{-4K}{n\pi}\sin(n\pi)\sin\left(\frac{n\pi}{2}\right) = 0$$

5. Write the Fourier series using only the odd cosine harmonics:

   $$S(x) = \frac{4K}{\pi}\left[\frac{\cos x}{1} - \frac{\cos(3x)}{3} + \frac{\cos(5x)}{5} - \dots\right]$$

6. Set $x = 0$, where $f(x)$ is continuous with $f(0) = K$, to find the numerical sum:

   $$K = \frac{4K}{\pi}\left[1 - \frac{1}{3} + \frac{1}{5} - \dots\right] \implies 1 - \frac{1}{3} + \frac{1}{5} - \dots = \frac{\pi}{4}$$

**Answer:** $S(x) = \frac{4K}{\pi}\left[\frac{\cos x}{1} - \frac{\cos(3x)}{3} + \frac{\cos(5x)}{5} - \dots\right]$, and $1 - \frac{1}{3} + \frac{1}{5} - \dots = \frac{\pi}{4}$.

#### Problem 4: Quadratic polynomial on (-pi, pi)
**Given:** $f(x) = x - x^2$ on the interval $(-\pi, \pi)$.
**Find:** The Fourier series of $x - x^2$ and the sum of $\frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \frac{1}{4^2} + \dots$

1. Integrate $x - x^2$ from $-\pi$ to $\pi$ to find $a_0$:

   $$a_0 = \frac{1}{2\pi}\left[\frac{x^2}{2} - \frac{x^3}{3}\right]_{-\pi}^{\pi} = \frac{1}{2\pi}\left(\frac{-2\pi^3}{3}\right) = \frac{-\pi^2}{3}$$

2. Apply Bernoulli's integration by parts to find $a_n$:

   $$a_n = \frac{1}{\pi}\left[(x - x^2)\left(\frac{\sin(nx)}{n}\right) - (1 - 2x)\left(\frac{-\cos(nx)}{n^2}\right) + (-2)\left(\frac{-\sin(nx)}{n^3}\right)\right]_{-\pi}^{\pi}$$

3. Evaluate at $\pm\pi$ where $\sin(\pm n\pi) = 0$ and $\cos(\pm n\pi) = (-1)^n$:

   $$a_n = \frac{1}{\pi}\left[((1 - 2\pi) - (1 + 2\pi))\frac{\cos(n\pi)}{n^2}\right] = \frac{-4(-1)^n}{n^2}$$

4. Apply Bernoulli's integration by parts to find $b_n$:

   $$b_n = \frac{1}{\pi}\left[(x - x^2)\left(\frac{-\cos(nx)}{n}\right) - (1 - 2x)\left(\frac{-\sin(nx)}{n^2}\right) + (-2)\left(\frac{\cos(nx)}{n^3}\right)\right]_{-\pi}^{\pi}$$

5. Evaluate at $\pm\pi$, where the $n^3$ cosine terms cancel each other:

   $$b_n = \frac{1}{\pi}\left[(-(\pi - \pi^2) + (-\pi - \pi^2))\frac{\cos(n\pi)}{n}\right] = \frac{-2(-1)^n}{n}$$

6. Assemble the full Fourier series expansion:

   $$S(x) = \frac{-\pi^2}{3} + 4\left[\frac{\cos x}{1^2} - \frac{\cos(2x)}{2^2} + \frac{\cos(3x)}{3^2} - \dots\right] + 2\left[\frac{\sin x}{1} - \frac{\sin(2x)}{2} + \dots\right]$$

7. Substitute $x = 0$, where $f(0) = 0$ is continuous, to solve for the alternating series:

   $$0 = \frac{-\pi^2}{3} + 4\left[\frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \dots\right] \implies \frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \frac{1}{4^2} + \dots = \frac{\pi^2}{12}$$

**Answer:** $S(x) = \frac{-\pi^2}{3} + 4\sum_{n=1}^{\infty}\frac{(-1)^{n+1}\cos(nx)}{n^2} + 2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}\sin(nx)}{n}$, and $\frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \frac{1}{4^2} + \dots = \frac{\pi^2}{12}$.

#### Problem 4.2.7: Shifted parabola on [0, 2pi]
**Given:** $f(x) = \frac{(\pi - x)^2}{4}$ with period $2\pi$ on $[0, 2\pi]$.
**Find:** The Fourier series of $f(x)$ and the sum $\sum_{n=1}^{\infty} \frac{1}{n^2}$.

1. Integrate $f(x)$ on $[0, 2\pi]$ to find $a_0$:

   $$a_0 = \frac{1}{8\pi}\left[\frac{(\pi - x)^3(-1)}{3}\right]_{0}^{2\pi} = -\frac{1}{24\pi}[(-\pi)^3 - \pi^3] = \frac{\pi^2}{12}$$

2. Apply Bernoulli's rule to integrate $f(x)\cos(nx)$, remembering the chain-rule factor $(-1)$ when differentiating $(\pi - x)$:

   $$a_n = \frac{1}{4\pi}\left[\frac{(\pi - x)^2\sin(nx)}{n} - \frac{2(\pi - x)\cos(nx)}{n^2} - \frac{2\sin(nx)}{n^3}\right]_{0}^{2\pi}$$

3. Evaluate at $0$ and $2\pi$ using $\cos(2n\pi) = \cos(0) = 1$ and $\sin(2n\pi) = \sin(0) = 0$:

   $$a_n = \frac{1}{4\pi}\left[\frac{2\pi}{n^2} + \frac{2\pi}{n^2}\right] = \frac{1}{n^2}$$

4. Apply Bernoulli's rule to integrate $f(x)\sin(nx)$ on $[0, 2\pi]$:

   $$b_n = \frac{1}{4\pi}\left[-\frac{(\pi - x)^2\cos(nx)}{n} - \frac{2(\pi - x)\sin(nx)}{n^2} + \frac{2\cos(nx)}{n^3}\right]_{0}^{2\pi} = 0$$

5. Combine $a_0$, $a_n$, and $b_n$ into the Fourier series:

   $$S(x) = \frac{\pi^2}{12} + \sum_{n=1}^{\infty} \frac{1}{n^2}\cos(nx)$$

6. Substitute $x = 0$, where the periodic extension is continuous with $f(0) = \frac{\pi^2}{4}$, to evaluate the sum:

   $$\frac{\pi^2}{4} = \frac{\pi^2}{12} + \sum_{n=1}^{\infty}\frac{1}{n^2} \implies \sum_{n=1}^{\infty}\frac{1}{n^2} = \frac{\pi^2}{6}$$

![Periodic parabolic graph of (π − x)² / 4](/assets/notes/ece/s1/maths/module-4/m4-parabola-periodic.svg)


> **Watch out.** When differentiating $(\pi - x)^2$ during tabular integration, do not forget the inner derivative $(-1)$: its first derivative is $-2(\pi - x)$ and its second derivative is $+2$.

**Answer:** $S(x) = \frac{\pi^2}{12} + \sum_{n=1}^{\infty} \frac{1}{n^2}\cos(nx)$, and $\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$.

#### Problem 5: Absolute value function on [-pi, pi]
**Given:** $f(x) = |x|$ on $[-\pi, \pi]$.
**Find:** The Fourier series of $f(x)$ and the sum of $1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots$

1. Split the integral at $x = 0$ where $|x|$ changes from $-x$ to $x$ to compute $a_0$:

   $$a_0 = \frac{1}{2\pi}\left[\int_{-\pi}^{0} (-x)\,dx + \int_{0}^{\pi} x\,dx\right] = \frac{1}{2\pi}\left[\frac{\pi^2}{2} + \frac{\pi^2}{2}\right] = \frac{\pi}{2}$$

2. Integrate $|x|\cos(nx)$ by parts across $[-\pi, 0]$ and $[0, \pi]$:

   $$a_n = \frac{2}{\pi}\left[x\frac{\sin(nx)}{n} + \frac{\cos(nx)}{n^2}\right]_{0}^{\pi} = \frac{2}{\pi n^2}[(-1)^n - 1]$$

3. Integrate $|x|\sin(nx)$ across $[-\pi, 0]$ and $[0, \pi]$, where the two halves cancel by odd symmetry:

   $$b_n = \frac{1}{\pi}\left[\int_{-\pi}^{0} (-x)\sin(nx)\,dx + \int_{0}^{\pi} x\sin(nx)\,dx\right] = 0$$

4. Write the Fourier series keeping only odd $n$ where $(-1)^n - 1 = -2$:

   $$S(x) = \frac{\pi}{2} - \frac{4}{\pi}\left[\frac{\cos x}{1^2} + \frac{\cos(3x)}{3^2} + \frac{\cos(5x)}{5^2} + \dots\right]$$

5. Substitute $x = 0$, where $f(x) = |x|$ is continuous with $f(0) = 0$, to evaluate the sum:

   $$0 = \frac{\pi}{2} - \frac{4}{\pi}\left[1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots\right] \implies 1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots = \frac{\pi^2}{8}$$

**Answer:** $S(x) = \frac{\pi}{2} - \frac{4}{\pi}\sum_{n=1,3,5,\dots}^{\infty}\frac{\cos(nx)}{n^2}$, and $1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots = \frac{\pi^2}{8}$.

#### Problem 6: Product x sin(x) on (-pi, pi)
**Given:** $f(x) = x\sin x$ on $-\pi < x < \pi$.
**Find:** The Fourier series of $f(x)$ and the sums (i) $1 + \frac{2}{1\cdot 3} - \frac{2}{3\cdot 5} + \frac{2}{5\cdot 7} - \dots$ and (ii) $\frac{1}{1\cdot 3} - \frac{1}{2\cdot 4} + \frac{1}{3\cdot 5} - \dots$

1. Integrate $x\sin x$ by parts on $(-\pi, \pi)$ to find $a_0$:

   $$a_0 = \frac{1}{2\pi}\Big[-x\cos x + \sin x\Big]_{-\pi}^{\pi} = \frac{1}{2\pi}[-2\pi\cos\pi] = 1$$

2. Compute $a_1$ separately because $\sin x \cos x = \frac{1}{2}\sin(2x)$ prevents division by $n^2 - 1$:

   $$a_1 = \frac{1}{\pi}\int_{-\pi}^{\pi} x\sin x\cos x\,dx = \frac{1}{2\pi}\Big[-x\frac{\cos(2x)}{2} + \frac{\sin(2x)}{4}\Big]_{-\pi}^{\pi} = -\frac{1}{2}$$

3. For $n \ge 2$, rewrite $\sin x\cos(nx) = \frac{1}{2}[\sin((n+1)x) - \sin((n-1)x)]$ and integrate by parts:

   $$a_n = \frac{1}{\pi}\left[\frac{-\pi\cos((n+1)\pi)}{n+1} + \frac{\pi\cos((n-1)\pi)}{n-1}\right] = \frac{2(-1)^{n+1}}{n^2 - 1}$$

4. Note that $b_n = 0$ for all $n$ because $x\sin x\sin(nx)$ is odd on $(-\pi, \pi)$.
5. Assemble the Fourier series with $n^2 - 1 = (n-1)(n+1)$:

   $$S(x) = 1 - \frac{1}{2}\cos x - 2\left[\frac{\cos(2x)}{1\cdot 3} - \frac{\cos(3x)}{2\cdot 4} + \frac{\cos(4x)}{3\cdot 5} - \dots\right]$$

6. Substitute $x = \frac{\pi}{2}$, where $f\left(\frac{\pi}{2}\right) = \frac{\pi}{2}$ and odd cosines vanish, to find sum (i):

   $$\frac{\pi}{2} = 1 + \frac{2}{1\cdot 3} - \frac{2}{3\cdot 5} + \frac{2}{5\cdot 7} - \dots$$

7. Substitute $x = 0$, where $f(0) = 0$, to solve for sum (ii):

   $$0 = 1 - \frac{1}{2} - 2\left[\frac{1}{1\cdot 3} - \frac{1}{2\cdot 4} + \frac{1}{3\cdot 5} - \dots\right] \implies \frac{1}{1\cdot 3} - \frac{1}{2\cdot 4} + \frac{1}{3\cdot 5} - \dots = \frac{1}{4}$$

**Answer:** $S(x) = 1 - \frac{1}{2}\cos x + 2\sum_{n=2}^{\infty}\frac{(-1)^{n+1}\cos(nx)}{n^2 - 1}$; (i) $\frac{\pi}{2}$; (ii) $\frac{1}{4}$.

<!-- page 8 | Practice: Full Fourier Series on Arbitrary Intervals [-L, L] and [0, 2L] -->

## Practice: Full Fourier Series on Arbitrary Intervals [-L, L] and [0, 2L]

Now that you can expand functions with period $2\pi$, we extend the exact same method to functions of any period $2L$ by scaling the harmonic arguments. In this section, you will replace $nx$ with $\frac{n\pi x}{L}$ in Euler's formulas to handle arbitrary interval lengths, and combine evaluations at continuous and jump points to solve for multiple infinite series at once.

### The idea

Standard sines and cosines repeat every $2\pi$ units, so they cannot directly build a function that repeats every $2L$ units. By replacing the argument $nx$ with the **scaled frequency** $\frac{n\pi x}{L}$, each wave completes exactly $n$ full cycles as $x$ travels across an interval of length $2L$. Whether the base interval is symmetric like $[-L, L]$ or shifted like $[0, 2L]$, the half-period $L$ is always half the total interval length.

With this scaling, the Fourier series becomes $S(x) = a_0 + \sum_{n=1}^{\infty} \left[a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right)\right]$. In Euler's integrals, the front multiplier $\frac{1}{\pi}$ becomes $\frac{1}{L}$ (and $\frac{1}{2\pi}$ becomes $\frac{1}{2L}$ for $a_0$). When you integrate $\cos\left(\frac{n\pi x}{L}\right)$ or $\sin\left(\frac{n\pi x}{L}\right)$ by parts, each antiderivative step brings out a factor of $\frac{L}{n\pi}$ instead of $\frac{1}{n}$. At the interval boundaries $x = \pm L$ or $x = 2L$, the scaled angles simplify cleanly to multiples of $n\pi$, where $\sin(n\pi) = 0$ and $\cos(n\pi) = (-1)^n$.

Once you have the series, you can evaluate multiple numerical sums from a single expansion. Evaluating $S(x)$ at an interior point where $f(x)$ is continuous gives one series, while evaluating at a jump discontinuity (including the endpoints where the periodic copies meet) gives a second series via the average $\frac{f(x^+) + f(x^-)}{2}$. Adding or subtracting those two results isolates even-term or odd-term sub-series.

### Worked example

**Problem 4.2.10.**
**Given:** $f(x) = x|x|$ on the interval $(-1, 1)$.
**Find:** The Fourier series $S(x)$ on $(-1, 1)$.

1. Find the half-period $L$ from the interval length $2L = 1 - (-1) = 2$, which gives $L = 1$ and harmonic arguments $\frac{n\pi x}{1} = n\pi x$.
2. Check symmetry on $(-1, 1)$: since $f(-x) = (-x)|-x| = -x|x| = -f(x)$, the function is odd, so $a_0 = 0$ and $a_n = 0$ because the product of an odd function and an even cosine is odd.
3. Set up the sine coefficient integral using even symmetry of $f(x)\sin(n\pi x)$, and replace $|x|$ with $x$ since $x > 0$ on $(0, 1)$:

   $$b_n = \frac{1}{1} \int_{-1}^{1} x|x| \sin(n\pi x)\,dx = 2 \int_{0}^{1} x^2 \sin(n\pi x)\,dx$$

4. Apply tabular integration by parts three times to integrate $x^2 \sin(n\pi x)$, dividing by $n\pi$ at each step:

   $$b_n = 2 \left[ x^2 \left(\frac{-\cos(n\pi x)}{n\pi}\right) - 2x \left(\frac{-\sin(n\pi x)}{n^2\pi^2}\right) + 2 \left(\frac{\cos(n\pi x)}{n^3\pi^3}\right) \right]_{0}^{1}$$

5. Substitute the limits $x = 1$ and $x = 0$, using $\sin(n\pi) = 0$, $\cos(n\pi) = (-1)^n$, and $\cos(0) = 1$:

   $$b_n = 2 \left[ \frac{-(-1)^n}{n\pi} + 0 + \frac{2(-1)^n}{n^3\pi^3} - \left(0 + 0 + \frac{2}{n^3\pi^3}\right) \right] = 2 \left[ \frac{(-1)^{n+1}}{n\pi} + \frac{2}{n^3\pi^3}\left((-1)^n - 1\right) \right]$$

6. Substitute $a_0 = 0$, $a_n = 0$, and $b_n$ into the scaled Fourier series formula.

**Answer:** $S(x) = \sum_{n=1}^{\infty} 2 \left[ \frac{(-1)^{n+1}}{n\pi} + \frac{2}{n^3\pi^3}\left((-1)^n - 1\right) \right] \sin(n\pi x)$.

### More problems

#### Problem 4.2.12: Exponential function on (0, 2)
**Given:** $f(x) = e^{-x}$ on the interval $(0, 2)$.
**Find:** The Fourier series $S(x)$.

1. From $c = 0$ and $2L = 2$, set $L = 1$ so the harmonic arguments are $\frac{n\pi x}{1} = n\pi x$.
2. Compute the average term $a_0$ across $(0, 2)$:

   $$a_0 = \frac{1}{2} \int_{0}^{2} e^{-x}\,dx = \frac{1}{2} \left[ -e^{-x} \right]_{0}^{2} = \frac{1 - e^{-2}}{2}$$

3. Set up the cosine integral $a_n = \int_{0}^{2} e^{-x} \cos(n\pi x)\,dx$ and apply the standard exponential-cosine antiderivative formula:

   $$a_n = \left[ \frac{e^{-x}}{(-1)^2 + (n\pi)^2} \left(-\cos(n\pi x) + n\pi \sin(n\pi x)\right) \right]_{0}^{1} = \frac{1 - e^{-1}(-1)^n}{1 + n^2\pi^2}$$

4. Set up the sine integral $b_n = \int_{0}^{2} e^{-x} \sin(n\pi x)\,dx$ and apply the standard exponential-sine antiderivative formula:

   $$b_n = \left[ \frac{e^{-x}}{(-1)^2 + (n\pi)^2} \left(-\sin(n\pi x) - n\pi \cos(n\pi x)\right) \right]_{0}^{1} = \frac{n\pi}{1 + n^2\pi^2} \left[1 - e^{-1}(-1)^n\right]$$

5. Substitute $a_0$, $a_n$, and $b_n$ into the Fourier series expansion.

![Periodic graph of e⁻ˣ](/assets/notes/ece/s1/maths/module-4/m4-exp-negative-periodic.svg)


> **Watch out.** In steps 3 and 4, the integral starts with upper limit $2$, but the evaluation switches the upper limit to $1$, producing $e^{-1}(-1)^n$ instead of $e^{-2}$.

**Answer:** $S(x) = \frac{1 - e^{-2}}{2} + \sum_{n=1}^{\infty} \left[ \frac{1 - e^{-1}(-1)^n}{1 + n^2\pi^2} \cos(n\pi x) + \frac{n\pi}{1 + n^2\pi^2}\left[1 - e^{-1}(-1)^n\right] \sin(n\pi x) \right]$.

#### Problem 4.2.8: Piecewise linear function on [-l, l]
**Given:** $f(x) = -x$ on $-l \le x < 0$ and $f(x) = \pi + x$ on $0 \le x < l$.
**Find:** The Fourier series $S(x)$ and the sum $1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots$

1. Split the $a_0$ integral at $x = 0$ and integrate each piece:

   $$a_0 = \frac{1}{2l} \left[ \int_{-l}^{0} (-x)\,dx + \int_{0}^{l} (\pi + x)\,dx \right] = \frac{1}{2l}\left[\frac{l^2}{2} + \pi l + \frac{l^2}{2}\right] = \frac{1}{2}(\pi + l)$$

2. Substitute $x \to -x$ on $[-l, 0]$ to fold the two cosine integrals into one integral over $[0, l]$:

   $$a_n = \frac{1}{l} \left[ \int_{-l}^{0} (-x)\cos\frac{n\pi x}{l}\,dx + \int_{0}^{l} (\pi + x)\cos\frac{n\pi x}{l}\,dx \right] = \frac{1}{l} \int_{0}^{l} (2x + \pi)\cos\frac{n\pi x}{l}\,dx$$

3. Integrate $a_n$ by parts, bringing out $\frac{l}{n\pi}$ each time, and evaluate at $0$ and $l$:

   $$a_n = \frac{1}{l} \left[ (2x + \pi)\frac{l}{n\pi}\sin\frac{n\pi x}{l} + 2\left(\frac{l}{n\pi}\right)^2\cos\frac{n\pi x}{l} \right]_{0}^{l} = \frac{2l}{n^2\pi^2}\left[(-1)^n - 1\right]$$

4. Fold the sine integrals on $[-l, 0]$ and $[0, l]$; the $x\sin\left(\frac{n\pi x}{l}\right)$ terms cancel because $x\sin\left(\frac{n\pi x}{l}\right)$ is even:

   $$b_n = \frac{1}{l} \left[ -\int_{-l}^{0} x\sin\frac{n\pi x}{l}\,dx + \int_{0}^{l} (\pi + x)\sin\frac{n\pi x}{l}\,dx \right] = \frac{\pi}{l} \int_{0}^{l} \sin\frac{n\pi x}{l}\,dx = \frac{1}{n}\left[1 - (-1)^n\right]$$

5. Note that for even $n$, $a_n = 0$ and $b_n = 0$; for odd $n$, $a_n = \frac{-4l}{n^2\pi^2}$ and $b_n = \frac{2}{n}$.
6. Evaluate the series at the jump $x = 0$, where $\frac{f(0^+) + f(0^-)}{2} = \frac{\pi + 0}{2} = \frac{\pi}{2}$ and $\sin(0) = 0$:

   $$\frac{\pi}{2} = \frac{1}{2}(\pi + l) - \frac{4l}{\pi^2}\left(1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots\right) \implies 1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots = \frac{\pi^2}{8}$$

> **Watch out.** The printed final series writes $\frac{l}{2}(\pi + l)$ for $a_0$ and $\cos nx$ for the cosine term, instead of $\frac{1}{2}(\pi + l)$ and $\cos\left(\frac{n\pi x}{l}\right)$.

**Answer:** $S(x) = \frac{l}{2}(\pi + l) + \sum_{n=1,3,5,\dots} \left[-\frac{4l}{n^2\pi^2}\cos nx + \frac{2}{n}\sin\frac{n\pi x}{l}\right]$; $1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots = \frac{\pi^2}{8}$.

#### Problem 4.2.9: Step-ramp function on [-2, 2]
**Given:** $f(x) = 2$ on $-2 \le x < 0$ and $f(x) = x$ on $0 \le x < 2$.
**Find:** The Fourier series $S(x)$, (i) $1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots$, and (ii) $1 - \frac{1}{3} + \frac{1}{5} - \cdots$

1. Since $2L = 4$, set $L = 2$ and integrate the two pieces to find $a_0$:

   $$a_0 = \frac{1}{4}\left[\int_{-2}^{0} 2\,dx + \int_{0}^{2} x\,dx\right] = \frac{1}{4}\left[4 + 2\right] = \frac{3}{2}$$

2. Integrate $a_n$ across $[-2, 0]$ and $[0, 2]$ using integration by parts on the second piece:

   $$a_n = \frac{1}{2}\left[\left.\frac{4}{n\pi}\sin\left(\frac{n\pi x}{2}\right)\right|_{-2}^{0} + \left.\left(\frac{2x}{n\pi}\sin\left(\frac{n\pi x}{2}\right) + \frac{4}{n^2\pi^2}\cos\left(\frac{n\pi x}{2}\right)\right)\right|_{0}^{2}\right] = \frac{2}{n^2\pi^2}\left[(-1)^n - 1\right]$$

3. Integrate $b_n$ across both pieces and evaluate at the limits:

   $$b_n = \frac{1}{2}\left[\left.-\frac{4}{n\pi}\cos\left(\frac{n\pi x}{2}\right)\right|_{-2}^{0} + \left.\left(-\frac{2x}{n\pi}\cos\left(\frac{n\pi x}{2}\right) + \frac{4}{n^2\pi^2}\sin\left(\frac{n\pi x}{2}\right)\right)\right|_{0}^{2}\right] = -\frac{2}{n\pi}$$

4. Write out the full series using the odd-index values $a_n = -\frac{4}{n^2\pi^2}$ and all-index values $b_n = -\frac{2}{n\pi}$.
5. At the jump $x = 0$, set $S(0) = \frac{f(0^+) + f(0^-)}{2} = \frac{0 + 2}{2} = 1$ to solve for series (i):

   $$1 = \frac{3}{2} - \frac{4}{\pi^2}\left(1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots\right) \implies 1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots = \frac{\pi^2}{8}$$

6. At the continuity point $x = 1$, set $S(1) = f(1) = 1$ (where $\cos\left(\frac{n\pi}{2}\right) = 0$ for odd $n$) to solve for series (ii):

   $$1 = \frac{3}{2} - \frac{2}{\pi}\left(1 - \frac{1}{3} + \frac{1}{5} - \cdots\right) \implies 1 - \frac{1}{3} + \frac{1}{5} - \cdots = \frac{\pi}{4}$$

```jsxgraph
{
  "boundingBox": [
    -5,
    3,
    9,
    -1
  ],
  "axis": true,
  "points": [
    {
      "id": "p1",
      "x": -4,
      "y": 0,
      "label": "-4"
    },
    {
      "id": "p2",
      "x": -2,
      "y": 2
    },
    {
      "id": "p2x",
      "x": -2,
      "y": 0,
      "label": "-2"
    },
    {
      "id": "p3",
      "x": 0,
      "y": 2,
      "label": "2"
    },
    {
      "id": "p4",
      "x": 0,
      "y": 0,
      "label": "0"
    },
    {
      "id": "p5",
      "x": 2,
      "y": 2
    },
    {
      "id": "p5x",
      "x": 2,
      "y": 0,
      "label": "2"
    },
    {
      "id": "p6",
      "x": 4,
      "y": 2
    },
    {
      "id": "p7",
      "x": 4,
      "y": 0,
      "label": "4"
    },
    {
      "id": "p8",
      "x": 6,
      "y": 2
    },
    {
      "id": "p8x",
      "x": 6,
      "y": 0,
      "label": "6"
    },
    {
      "id": "p9",
      "x": 8,
      "y": 2
    }
  ],
  "segments": [
    {
      "from": "p1",
      "to": "p2"
    },
    {
      "from": "p2",
      "to": "p3"
    },
    {
      "from": "p4",
      "to": "p5"
    },
    {
      "from": "p5",
      "to": "p6"
    },
    {
      "from": "p7",
      "to": "p8"
    },
    {
      "from": "p8",
      "to": "p9"
    }
  ],
  "circles": []
}
```

**Answer:** $S(x) = \frac{3}{2} + \sum_{n=1}^{\infty}\left[\frac{2}{n^2\pi^2}\left[(-1)^n - 1\right]\cos\left(\frac{n\pi x}{2}\right) - \frac{2}{n\pi}\sin\left(\frac{n\pi x}{2}\right)\right]$; (i) $\frac{\pi^2}{8}$; (ii) $\frac{\pi}{4}$.

#### Problem 4.2.11: Quadratic function on (0, 3)
**Given:** $f(x) = 2x - x^2$ on the interval $(0, 3)$.
**Find:** The Fourier series $S(x)$, (i) $\sum \frac{(-1)^{n-1}}{n^2}$, (ii) $\sum \frac{1}{n^2}$, and (iii) $\sum_{\text{odd } n} \frac{1}{n^2}$.

1. From $2L = 3$, set $L = \frac{3}{2}$ so the harmonic arguments are $\frac{n\pi x}{3/2} = \frac{2n\pi x}{3}$.
2. Compute the average term $a_0$ over $(0, 3)$:

   $$a_0 = \frac{1}{3}\int_{0}^{3} (2x - x^2)\,dx = \frac{1}{3}\left[x^2 - \frac{x^3}{3}\right]_{0}^{3} = 0$$

3. Apply three-step tabular integration by parts to find $a_n$, noting that $\sin(2n\pi) = \sin(0) = 0$ and $\cos(2n\pi) = 1$:

   $$a_n = \frac{2}{3}\left[(2x - x^2)\frac{3}{2n\pi}\sin\frac{2n\pi x}{3} + (2 - 2x)\left(\frac{3}{2n\pi}\right)^2\cos\frac{2n\pi x}{3} + 2\left(\frac{3}{2n\pi}\right)^3\sin\frac{2n\pi x}{3}\right]_{0}^{3} = -\frac{9}{n^2\pi^2}$$

4. Apply three-step tabular integration by parts to find $b_n$, where the $\left(\frac{3}{2n\pi}\right)^3\cos\left(\frac{2n\pi x}{3}\right)$ terms cancel at $3$ and $0$:

   $$b_n = \frac{2}{3}\left[-(2x - x^2)\frac{3}{2n\pi}\cos\frac{2n\pi x}{3} + (2 - 2x)\left(\frac{3}{2n\pi}\right)^2\sin\frac{2n\pi x}{3} - 2\left(\frac{3}{2n\pi}\right)^3\cos\frac{2n\pi x}{3}\right]_{0}^{3} = \frac{3}{n\pi}$$

5. For (i), evaluate at the continuous midpoint $x = \frac{3}{2}$, where $f\left(\frac{3}{2}\right) = \frac{3}{4}$, $\cos(n\pi) = (-1)^n$, and $\sin(n\pi) = 0$:

   $$\frac{3}{4} = -\frac{9}{\pi^2}\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2} = \frac{9}{\pi^2}\left(\frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \cdots\right) \implies \frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \cdots = \frac{\pi^2}{12}$$

6. For (ii), evaluate at the endpoint jump $x = 0$, using $f(0^+) = 0$ and $f(0^-) = f(3) = -3$:

   $$\frac{0 + (-3)}{2} = -\frac{9}{\pi^2}\sum_{n=1}^{\infty}\frac{1}{n^2} \implies \frac{1}{1^2} + \frac{1}{2^2} + \frac{1}{3^2} + \cdots = \frac{\pi^2}{6}$$

7. For (iii), average the series from (i) and (ii) so the even-indexed terms cancel out:

   $$\frac{1}{2}\left(\frac{\pi^2}{12} + \frac{\pi^2}{6}\right) = \frac{1}{1^2} + \frac{1}{3^2} + \frac{1}{5^2} + \cdots = \frac{\pi^2}{8}$$

![Periodic graph of 2x − x²](/assets/notes/ece/s1/maths/module-4/m4-quadratic-periodic.svg)


**Answer:** $S(x) = \sum_{n=1}^{\infty}\left[-\frac{9}{n^2\pi^2}\cos\frac{2n\pi x}{3} + \frac{3}{n\pi}\sin\frac{2n\pi x}{3}\right]$; (i) $\frac{\pi^2}{12}$; (ii) $\frac{\pi^2}{6}$; (iii) $\frac{\pi^2}{8}$.

<!-- page 9 | Practice: Half-Range Cosine Series on [0, L] -->

## Practice: Half-Range Cosine Series on $[0, L]$
You already know how to integrate over a full interval $[-L, L]$ to find both cosine and sine coefficients. Instead of integrating over a full period, we now practice extending a function evenly on $[0, L]$ so that $b_n = 0$ and only cosine coefficients need to be computed. We also take care to compute the $n = 1$ coefficient separately whenever a product-to-sum formula divides by $n - 1$.

### The idea
When a function $f(x)$ is given only on the half-interval $[0, L]$, we can mirror its graph across the vertical axis to create an **even extension** $F(x)$ on $[-L, L]$, where $F(x) = f(-x)$ for $-L < x \le 0$ and $F(x) = f(x)$ for $0 \le x < L$. Repeating this symmetric shape every $2L$ units produces an **even periodic extension**.

![Graph of f(x) on [0, L]](/assets/notes/ece/s1/maths/module-4/m4-generic-base.svg)


![Even extension of f(x) on [−L, L]](/assets/notes/ece/s1/maths/module-4/m4-generic-even.svg)


![Even periodic extension of f(x) with period 2L](/assets/notes/ece/s1/maths/module-4/m4-generic-even-periodic.svg)


Because $F(x)$ is symmetric across the vertical axis, its product with $\sin(n\pi x/L)$ is odd, forcing every sine coefficient $b_n$ to be zero. The products for $a_0$ and $a_n$ are even, so integrating from $-L$ to $L$ is just twice the integral from $0$ to $L$. This gives the **half-range cosine series** $S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right)$ on $0 < x < L$, with coefficients:

$$a_0 = \frac{1}{L} \int_0^L f(x)\,dx, \qquad a_n = \frac{2}{L} \int_0^L f(x) \cos\left(\frac{n\pi x}{L}\right)\,dx$$

When $f(x)$ contains a sine or cosine factor, rewrite the integrand using a product-to-sum identity before integrating. If the resulting general formula for $a_n$ has $n - 1$ in the denominator, that formula is invalid for $n = 1$; you must plug $n = 1$ directly into the original integral to compute $a_1$ separately. Finally, because an even extension matches at $x = 0$ ($F(0^+) = F(0^-) = f(0)$) and at $x = L$ ($F(L^-) = F((-L)^+) = f(L)$), the periodic extension is continuous at both endpoints whenever $f(x)$ is continuous on $[0, L]$, allowing you to evaluate $S(x) = f(x)$ right at $x = 0$ or $x = L$ to sum numerical series.

### Worked example
**Problem 4.3.1:** Find the half-range cosine series of $e^x$ in $[0, 1]$, and hence evaluate $\sum_{n=1}^{\infty} \frac{e(-1)^n - 1}{1 + n^2\pi^2}$.

**Given:** $f(x) = e^x$ on $[0, 1]$, so the half-period is $L = 1$.
**Find:** The half-range cosine series $S(x)$ and the sum $\sum_{n=1}^{\infty} \frac{e(-1)^n - 1}{1 + n^2\pi^2}$.

1. Write the half-range cosine series form for $L = 1$, where $\cos(n\pi x/L)$ simplifies to $\cos(n\pi x)$:

   $$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos(n\pi x)$$

2. Compute the average value $a_0$ by integrating $e^x$ over $[0, 1]$:

   $$a_0 = \frac{1}{1} \int_0^1 e^x\,dx = \left[e^x\right]_0^1 = e - 1$$

3. Set up the integral for $a_n$ on $[0, 1]$ and apply the standard exponential-cosine antiderivative formula:

   $$a_n = 2 \int_0^1 e^x \cos(n\pi x)\,dx = 2 \left[ \frac{e^x}{1^2 + (n\pi)^2} \left(\cos(n\pi x) + n\pi \sin(n\pi x)\right) \right]_0^1$$

4. Evaluate at the limits $x = 1$ and $x = 0$ using $\cos(n\pi) = (-1)^n$ and $\sin(n\pi) = 0$:

   $$a_n = 2 \left[ \frac{e}{1 + n^2\pi^2}\left((-1)^n + 0\right) - \frac{1}{1 + n^2\pi^2}(1 + 0) \right] = \frac{2\left[e(-1)^n - 1\right]}{1 + n^2\pi^2}$$

5. Substitute $a_0$ and $a_n$ into $S(x)$ to write the half-range cosine series:

   $$S(x) = e - 1 + \sum_{n=1}^{\infty} \frac{2\left[e(-1)^n - 1\right]}{1 + n^2\pi^2} \cos(n\pi x)$$

6. Because the even periodic extension is continuous at $x = 0$, set $S(0) = f(0) = e^0 = 1$ and solve for the sum:

   $$1 = e - 1 + 2 \sum_{n=1}^{\infty} \frac{e(-1)^n - 1}{1 + n^2\pi^2} \implies \sum_{n=1}^{\infty} \frac{e(-1)^n - 1}{1 + n^2\pi^2} = \frac{2 - e}{2}$$

![Even periodic extension of eˣ](/assets/notes/ece/s1/maths/module-4/m4-even-exp.svg)


**Answer:** $S(x) = e - 1 + \sum_{n=1}^{\infty} \frac{2[e(-1)^n - 1]}{1 + n^2\pi^2} \cos(n\pi x)$, and the sum is $\frac{2 - e}{2}$.

### More problems

#### Problem 4.3.4: Half-range cosine series of $x^2$ on $[0, 5]$
**Given:** $f(x) = x^2$ on $[0, 5]$, so $L = 5$.
**Find:** The half-range cosine series of $f(x)$ and the sum $1 - \frac{1}{2^2} + \frac{1}{3^2} - \cdots$.

1. Compute $a_0$ by integrating $x^2$ over $[0, 5]$:

   $$a_0 = \frac{1}{5} \int_0^5 x^2\,dx = \frac{1}{5} \left[\frac{x^3}{3}\right]_0^5 = \frac{25}{3}$$

2. Integrate $a_n = \frac{2}{5} \int_0^5 x^2 \cos\left(\frac{n\pi x}{5}\right)\,dx$ using tabular integration by parts:

   $$a_n = \frac{2}{5} \left[ x^2 \left(\frac{5}{n\pi}\right) \sin\left(\frac{n\pi x}{5}\right) - 2x \left(\frac{5}{n\pi}\right)^2 \left(-\cos\left(\frac{n\pi x}{5}\right)\right) + 2 \left(\frac{5}{n\pi}\right)^3 \left(-\sin\left(\frac{n\pi x}{5}\right)\right) \right]_0^5$$

3. Evaluate at $x = 5$ and $x = 0$, where all sine terms vanish and $\cos(n\pi) = (-1)^n$:

   $$a_n = \frac{2}{5} \left[ 10 \left(\frac{25}{n^2\pi^2}\right) (-1)^n \right] = \frac{100(-1)^n}{n^2\pi^2}$$

4. Substitute $a_0$ and $a_n$ into $S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{5}\right)$:

   $$S(x) = \frac{25}{3} + \frac{100}{\pi^2} \sum_{n=1}^{\infty} \frac{(-1)^n}{n^2} \cos\left(\frac{n\pi x}{5}\right)$$

5. Set $S(0) = f(0) = 0$ at the point of continuity $x = 0$ and rearrange to isolate the alternating series:

   $$0 = \frac{25}{3} + \frac{100}{\pi^2} \sum_{n=1}^{\infty} \frac{(-1)^n}{n^2} \implies 1 - \frac{1}{2^2} + \frac{1}{3^2} - \frac{1}{4^2} + \cdots = \frac{\pi^2}{12}$$

![Even periodic extension of x²](/assets/notes/ece/s1/maths/module-4/m4-even-x2.svg)


**Answer:** $S(x) = \frac{25}{3} + \frac{100}{\pi^2} \sum_{n=1}^{\infty} \frac{(-1)^n}{n^2} \cos\left(\frac{n\pi x}{5}\right)$, and the sum is $\frac{\pi^2}{12}$.

#### Problem 4.3.2: Half-range cosine series of $\sin x$ on $[0, \pi/2]$
**Given:** $f(x) = \sin x$ on $[0, \pi/2]$, so $L = \pi/2$.
**Find:** The half-range cosine series of $\sin x$ and the sum $\frac{1}{1 \cdot 3} + \frac{1}{3 \cdot 5} + \frac{1}{5 \cdot 7} + \cdots$.

1. With $L = \pi/2$, note that $\cos(n\pi x/L) = \cos(2nx)$ and compute $a_0$:

   $$a_0 = \frac{2}{\pi} \int_0^{\pi/2} \sin x\,dx = \frac{2}{\pi} \left[-\cos x\right]_0^{\pi/2} = \frac{2}{\pi}$$

2. Set up $a_n$ and rewrite $\sin x \cos(2nx)$ using $2\sin A \cos B = \sin(A+B) + \sin(A-B)$:

   $$a_n = \frac{4}{\pi} \int_0^{\pi/2} \sin x \cos(2nx)\,dx = \frac{2}{\pi} \int_0^{\pi/2} \left[\sin((2n+1)x) - \sin((2n-1)x)\right]\,dx$$

3. Integrate each sine term from $0$ to $\pi/2$:

   $$a_n = \frac{2}{\pi} \left[ \frac{-\cos((2n+1)x)}{2n+1} + \frac{\cos((2n-1)x)}{2n-1} \right]_0^{\pi/2}$$

4. Since $2n+1$ and $2n-1$ are odd integers, $\cos((2n\pm 1)\pi/2) = 0$, leaving only the lower limit $x = 0$:

   $$a_n = \frac{2}{\pi} \left[ \frac{1}{2n+1} - \frac{1}{2n-1} \right] = \frac{-4}{\pi(4n^2 - 1)}$$

5. Substitute $a_0$ and $a_n$ into $S(x)$:

   $$S(x) = \frac{2}{\pi} - \frac{4}{\pi} \sum_{n=1}^{\infty} \frac{1}{4n^2 - 1} \cos(2nx)$$

6. Set $S(0) = \sin 0 = 0$ at $x = 0$ and factor $4n^2 - 1 = (2n-1)(2n+1)$ to find the sum:

   $$0 = \frac{2}{\pi} - \frac{4}{\pi} \sum_{n=1}^{\infty} \frac{1}{(2n-1)(2n+1)} \implies \frac{1}{1 \cdot 3} + \frac{1}{3 \cdot 5} + \frac{1}{5 \cdot 7} + \cdots = \frac{1}{2}$$

![Even periodic extension of sin(x)](/assets/notes/ece/s1/maths/module-4/m4-even-sin.svg)


**Answer:** $S(x) = \frac{2}{\pi} - \frac{4}{\pi} \sum_{n=1}^{\infty} \frac{1}{4n^2 - 1} \cos(2nx)$, and the sum is $\frac{1}{2}$.

#### Problem 4.3.5: Piecewise linear function on $[0, l]$
**Given:** $f(x) = 5x$ on $[0, l/2]$ and $f(x) = 5(l - x)$ on $[l/2, l)$, so $L = l$.
**Find:** The half-range cosine series of $f(x)$.

1. Split the $a_0$ integral at $x = l/2$ and integrate both linear pieces:

   $$a_0 = \frac{1}{l} \left[ \int_0^{l/2} 5x\,dx + \int_{l/2}^l 5(l-x)\,dx \right] = \frac{5}{l} \left[ \left(\frac{x^2}{2}\right)_0^{l/2} + \left(lx - \frac{x^2}{2}\right)_{l/2}^l \right] = \frac{5l}{4}$$

2. Split the $a_n$ integral at $x = l/2$:

   $$a_n = \frac{2}{l} \left[ \int_0^{l/2} 5x \cos\left(\frac{n\pi x}{l}\right)\,dx + \int_{l/2}^l 5(l-x) \cos\left(\frac{n\pi x}{l}\right)\,dx \right]$$

3. Apply tabular integration by parts to each integral:

   $$a_n = \frac{10}{l} \left( \left[ \frac{lx}{n\pi} \sin\left(\frac{n\pi x}{l}\right) + \frac{l^2}{n^2\pi^2} \cos\left(\frac{n\pi x}{l}\right) \right]_0^{l/2} + \left[ \frac{l(l-x)}{n\pi} \sin\left(\frac{n\pi x}{l}\right) - \frac{l^2}{n^2\pi^2} \cos\left(\frac{n\pi x}{l}\right) \right]_{l/2}^l \right)$$

4. Evaluate at the limits, noting that the $\sin(n\pi/2)$ terms cancel and $\cos(n\pi) = (-1)^n$:

   $$a_n = \frac{10l}{n^2\pi^2} \left[ 2\cos\left(\frac{n\pi}{2}\right) - 1 - (-1)^n \right]$$

5. Substitute $a_0$ and $a_n$ into $S(x)$:

   $$S(x) = \frac{5l}{4} + \sum_{n=1}^{\infty} \frac{10l}{n^2\pi^2} \left[ 2\cos\left(\frac{n\pi}{2}\right) - 1 - (-1)^n \right] \cos\left(\frac{n\pi x}{l}\right)$$

**Answer:** $S(x) = \frac{5l}{4} + \sum_{n=1}^{\infty} \frac{10l}{n^2\pi^2} \left[ 2\cos\left(\frac{n\pi}{2}\right) - 1 - (-1)^n \right] \cos\left(\frac{n\pi x}{l}\right)$.

#### Problem 4.3.3: Half-range cosine series of $x \sin x$ on $(0, \pi)$
**Given:** $f(x) = x \sin x$ on $(0, \pi)$, so $L = \pi$.
**Find:** The half-range cosine series of $x \sin x$ and the sum $\frac{1}{1 \cdot 3} - \frac{1}{3 \cdot 5} + \frac{1}{5 \cdot 7} - \cdots$.

1. Compute $a_0$ on $(0, \pi)$ using integration by parts:

   $$a_0 = \frac{1}{\pi} \int_0^{\pi} x \sin x\,dx = \frac{1}{\pi} \left[-x\cos x + \sin x\right]_0^{\pi} = 1$$

2. Set up $a_n$ and apply $2\sin x \cos(nx) = \sin((n+1)x) - \sin((n-1)x)$:

   $$a_n = \frac{2}{\pi} \int_0^{\pi} x \sin x \cos(nx)\,dx = \frac{1}{\pi} \int_0^{\pi} x \left[\sin((n+1)x) - \sin((n-1)x)\right]\,dx$$

3. Integrate by parts for $n \neq 1$ (so $n - 1 \neq 0$):

   $$a_n = \frac{1}{\pi} \left[ x\left(\frac{-\cos((n+1)x)}{n+1} + \frac{\cos((n-1)x)}{n-1}\right) - \left(\frac{-\sin((n+1)x)}{(n+1)^2} + \frac{\sin((n-1)x)}{(n-1)^2}\right) \right]_0^{\pi}$$

4. Evaluate at $0$ and $\pi$ using $\cos((n\pm 1)\pi) = (-1)^{n-1}$:

   $$a_n = \frac{(-1)^{n-1}}{n-1} - \frac{(-1)^{n-1}}{n+1} = \frac{2(-1)^{n-1}}{(n-1)(n+1)} \quad (n \neq 1)$$

5. Compute $a_1$ separately by setting $n = 1$ in the original integral and using $2\sin x \cos x = \sin(2x)$:

   $$a_1 = \frac{1}{\pi} \int_0^{\pi} x \sin(2x)\,dx = \frac{1}{\pi} \left[ \frac{-x\cos(2x)}{2} + \frac{\sin(2x)}{4} \right]_0^{\pi} = -\frac{1}{2}$$

6. Combine $a_0$, $a_1$, and $a_n$ ($n \ge 2$) into the series:

   $$S(x) = 1 - \frac{1}{2}\cos x + 2 \sum_{n=2}^{\infty} \frac{(-1)^{n-1}}{(n-1)(n+1)} \cos(nx)$$

7. Evaluate at the continuity point $x = \pi/2$, where $\cos(\pi/2) = 0$ and even harmonics alternate signs:

   $$\frac{\pi}{2}\sin\left(\frac{\pi}{2}\right) = 1 + 2\left[\frac{1}{1 \cdot 3} - \frac{1}{3 \cdot 5} + \frac{1}{5 \cdot 7} - \cdots\right] \implies \frac{1}{1 \cdot 3} - \frac{1}{3 \cdot 5} + \frac{1}{5 \cdot 7} - \cdots = \frac{\pi - 2}{4}$$

> **Watch out.** Because the general formula for $a_n$ divides by $n - 1$, you must start the summation at $n = 2$ and add the separately computed $a_1 \cos x$ term in front.

![Even periodic extension of x sin(x)](/assets/notes/ece/s1/maths/module-4/m4-even-xsin.svg)


**Answer:** $S(x) = 1 - \frac{1}{2}\cos x + 2\sum_{n=2}^{\infty} \frac{(-1)^{n-1}}{(n-1)(n+1)} \cos(nx)$, and the sum is $\frac{\pi - 2}{4}$.

<!-- page 10 | Practice: Half-Range Sine Series on [0, L] -->

## Practice: Half-Range Sine Series on [0, L]

Having built pure cosine expansions via even extensions, we conclude by extending functions on $[0, L]$ oddly to build pure sine expansions. By mirroring $f(x)$ through the origin, both cosine coefficients $a_0$ and $a_n$ vanish automatically, leaving only the single sine coefficient $b_n$ to compute.

### The idea

When a function $f(x)$ is given only on the half-interval $[0, L]$, we can represent it using sines alone by constructing its **odd extension** $F(x)$ on $[-L, L]$:

$$F(x) = \begin{cases} -f(-x) & \text{if } -L < x \le 0 \\ f(x) & \text{if } 0 \le x < L \end{cases}$$

![Graph of f(x) on [0, L]](/assets/notes/ece/s1/maths/module-4/m4-generic-base.svg)


![Odd extension of f(x) on [−L, L]](/assets/notes/ece/s1/maths/module-4/m4-generic-odd.svg)


Repeating $F(x)$ every $2L$ units forms the **odd periodic extension**. Because $F(x)$ is odd, its product with $\cos(n\pi x/L)$ is odd (so $a_0 = 0$ and $a_n = 0$), while its product with $\sin(n\pi x/L)$ is even. Doubling the integral over the half-interval $[0, L]$ gives the **half-range sine series**:

$$S(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right), \quad \text{where} \quad b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx$$

![Odd periodic extension of f(x) with period 2L](/assets/notes/ece/s1/maths/module-4/m4-generic-odd-periodic.svg)


Notice what happens at the endpoints $x = 0$ and $x = L$: every term $\sin(n\pi x/L)$ evaluates to zero there. If $f(0) \ne 0$ or $f(L) \ne 0$, the odd periodic extension jumps from $-f(0)$ to $+f(0)$ at $x = 0$, and from $f(L)$ to $-f(L)$ at $x = L$. At any interior continuity point $x \in (0, L)$, Dirichlet's theorem guarantees $S(x) = f(x)$, whereas at jump discontinuities $S(x) = \frac{f(x^+) + f(x^-)}{2}$.

### Worked example

**Problem 4.3.6.**
**Given:** $f(x) = x^2$ on $[0, 5]$.
**Find:** The half-range sine series of $f(x)$.

1. Identify the half-period $L = 5$ so the series takes the form $S(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{5}\right)$.
2. Set up the sine coefficient integral on $[0, 5]$:

   $$b_n = \frac{2}{5} \int_{0}^{5} x^2 \sin\left(\frac{n\pi x}{5}\right) dx$$

3. Apply tabular integration by parts (differentiating $x^2$ down to $0$ and integrating the sine factor three times):

   $$b_n = \frac{2}{5} \left[ x^2 \left(\frac{5}{n\pi}\right)\left(-\cos\frac{n\pi x}{5}\right) - 2x \left(\frac{5}{n\pi}\right)^2 \left(-\sin\frac{n\pi x}{5}\right) + 2\left(\frac{5}{n\pi}\right)^3 \left(\cos\frac{n\pi x}{5}\right) \right]_{0}^{5}$$

4. Evaluate at $x = 5$ and $x = 0$, using $\sin(n\pi) = 0$, $\sin(0) = 0$, $\cos(0) = 1$, and $\cos(n\pi) = (-1)^n$:

   $$b_n = \frac{2}{5} \left[ \frac{-125(-1)^n}{n\pi} + \frac{250}{n^3\pi^3}\big((-1)^n - 1\big) \right] = \frac{50(-1)^{n+1}}{n\pi} + \frac{100}{n^3\pi^3}\big[(-1)^n - 1\big]$$

![Odd periodic extension of x²](/assets/notes/ece/s1/maths/module-4/m4-odd-x2.svg)


**Answer:** $S(x) = \sum_{n=1}^{\infty} \left( \frac{50(-1)^{n+1}}{n\pi} + \frac{100}{n^3\pi^3} [(-1)^n - 1] \right) \sin\left(\frac{n\pi x}{5}\right)$.

### More problems

#### Problem 4.3.8: Exponential function on [0, 1]
**Given:** $f(x) = e^x$ on $[0, 1]$.
**Find:** The half-range sine series of $f(x)$.

1. Set $L = 1$ in the half-range formula to write $S(x) = \sum_{n=1}^{\infty} b_n \sin(n\pi x)$ with $b_n = 2 \int_{0}^{1} e^x \sin(n\pi x) \, dx$.
2. Integrate using the standard exponential-sine reduction formula:

   $$b_n = 2 \left[ \frac{e^x}{1^2 + (n\pi)^2} \big(\sin(n\pi x) - n\pi \cos(n\pi x)\big) \right]_{0}^{1}$$

3. Substitute the limits $x = 1$ and $x = 0$, noting $\sin(n\pi) = 0$ and $\cos(n\pi) = (-1)^n$:

   $$b_n = \frac{2}{1 + n^2\pi^2} \left[ e^1\big(0 - n\pi(-1)^n\big) - \big(0 - n\pi(1)\big) \right] = \frac{2n\pi}{1 + n^2\pi^2} \left[ e(-1)^{n+1} + 1 \right]$$

4. Substitute $b_n$ into the sine series expansion; note that the odd periodic extension has jump discontinuities at all integers.

![Odd periodic extension of eˣ](/assets/notes/ece/s1/maths/module-4/m4-odd-exp.svg)


**Answer:** $S(x) = \sum_{n=1}^{\infty} \frac{2n\pi}{1 + n^2\pi^2} \left[ e(-1)^{n+1} + 1 \right] \sin(n\pi x)$.

#### Problem 4.3.7: Piecewise triangular wave on (0, pi)
**Given:** $f(x) = \begin{cases} x, & \text{if } 0 < x \le \pi/2 \\ \pi - x, & \text{if } \pi/2 < x < \pi \end{cases}$.
**Find:** The half-range sine series of $f(x)$ and the sum $1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots$

1. With $L = \pi$, split the $b_n$ integral at $x = \pi/2$ to match the two linear pieces:

   $$b_n = \frac{2}{\pi} \left[ \int_{0}^{\pi/2} x \sin(nx) \, dx + \int_{\pi/2}^{\pi} (\pi - x) \sin(nx) \, dx \right]$$

2. Integrate both parts by parts (noting the derivative of $\pi - x$ is $-1$):

   $$b_n = \frac{2}{\pi} \left( \left[ -\frac{x \cos(nx)}{n} + \frac{\sin(nx)}{n^2} \right]_{0}^{\pi/2} + \left[ -\frac{(\pi - x) \cos(nx)}{n} - \frac{\sin(nx)}{n^2} \right]_{\pi/2}^{\pi} \right)$$

3. Evaluate at the limits so the cosine terms cancel and the sine terms add:

   $$b_n = \frac{2}{\pi} \left[ \frac{2}{n^2} \sin\left(\frac{n\pi}{2}\right) \right] = \frac{4}{\pi n^2} \sin\left(\frac{n\pi}{2}\right)$$

4. Write out the expansion by plugging $n = 1, 2, 3, \dots$ into $\sin(n\pi/2)$:

   $$S(x) = \frac{4}{\pi} \left( \sin x - \frac{1}{3^2}\sin 3x + \frac{1}{5^2}\sin 5x - \dots \right)$$

5. Evaluate $S(x) = f(x)$ at the continuity point $x = \pi/2$, where $f(\pi/2) = \pi/2$, to solve for the numerical series:

   $$\frac{\pi}{2} = \frac{4}{\pi} \left( 1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots \right)$$

![Odd periodic triangular wave](/assets/notes/ece/s1/maths/module-4/m4-odd-triangle.svg)


**Answer:** $S(x) = \sum_{n=1}^{\infty} \frac{4}{\pi n^2} \sin\left(\frac{n\pi}{2}\right) \sin(nx)$, and $1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots = \frac{\pi^2}{8}$.

#### Problem 4.3.9: Trigonometric product x sin(x) on (0, pi)
**Given:** $f(x) = x \sin x$ on $(0, \pi)$.
**Find:** The half-range sine series of $f(x)$.

1. With $L = \pi$, rewrite the integrand using $2\sin x \sin(nx) = \cos((n-1)x) - \cos((n+1)x)$:

   $$b_n = \frac{2}{\pi} \int_{0}^{\pi} x \sin x \sin(nx) \, dx = \frac{1}{\pi} \int_{0}^{\pi} x \big(\cos(n-1)x - \cos(n+1)x\big) \, dx$$

2. Integrate by parts for $n \ne 1$:

   $$b_n = \frac{1}{\pi} \left[ x \left( \frac{\sin(n-1)x}{n-1} - \frac{\sin(n+1)x}{n+1} \right) - 1 \cdot \left( \frac{-\cos(n-1)x}{(n-1)^2} - \frac{-\cos(n+1)x}{(n+1)^2} \right) \right]_{0}^{\pi}$$

3. Evaluate at $x = \pi$ and $x = 0$ for $n \ne 1$, using $\cos((n\mp 1)\pi) = (-1)^{n\mp 1}$:

   $$b_n = \frac{1}{\pi} \left[ \frac{(-1)^{n-1} - 1}{(n-1)^2} + \frac{1 - (-1)^{n+1}}{(n+1)^2} \right]$$

4. Compute $b_1$ separately using $2\sin^2 x = 1 - \cos 2x$ because the general formula divides by $n - 1 = 0$:

   $$b_1 = \frac{2}{\pi} \int_{0}^{\pi} x \sin^2 x \, dx = \frac{1}{\pi} \int_{0}^{\pi} x(1 - \cos 2x) \, dx$$

5. Integrate $b_1$ by parts and evaluate at $0$ and $\pi$:

   $$b_1 = \frac{1}{\pi} \left[ x\left(x - \frac{\sin 2x}{2}\right) - 1\left(\frac{x^2}{2} - \frac{\cos 2x}{4}\right) \right]_{0}^{\pi} = \frac{1}{\pi}\left(\pi^2 - \frac{\pi^2}{2}\right) = \frac{\pi}{2}$$

6. Combine the $n = 1$ harmonic with the sum over $n \ge 2$.

> **Watch out.** Never plug $n = 1$ into the general $b_n$ formula when a denominator contains $n - 1$; always evaluate $b_1$ from its original integral.

**Answer:** $S(x) = \frac{\pi}{2} \sin x + \sum_{n=2}^{\infty} \frac{1}{\pi} \left[ \frac{(-1)^{n-1} - 1}{(n-1)^2} + \frac{1 - (-1)^{n+1}}{(n+1)^2} \right] \sin(nx)$.
