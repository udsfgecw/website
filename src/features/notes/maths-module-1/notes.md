<!-- page 1 | Start here -->

## Module 1: Limits, Continuity, and Derivatives

Master fundamental single-variable calculus topics including limits, limit laws, continuity, the sandwich theorem, derivatives via first principles, differentiation rules, higher-order derivatives, implicit differentiation, and applications such as tangent and normal lines, linearizations, and concavity.

**Before you start:** Algebraic manipulation and factorization; Basic trigonometry and exponential/logarithmic functions; Coordinate geometry and straight line equations.

### Your path through this module

1. **Limits of Function Values and Limit Laws**: The formal concept of a limit and algebraic limit laws for combining function limits.
2. **Advanced Limit Evaluation and Sandwich Theorem**: Using the Sandwich Theorem and conjugate multiplication to resolve indeterminate limits.
3. **Continuity at a Point and One-Sided Limits**: Continuity as the seamless connection of function values across a domain.
4. **Derivatives and First Principles**: The derivative as the limiting slope of a secant line (difference quotient).
5. **Higher-Order Derivatives and Implicit Differentiation**: Implicit differentiation allowing derivative computation for non-explicit relations.
6. **The Chain Rule**: The chain rule for differentiating composite functions by multiplying outer and inner derivatives.
7. **Applications: Tangent/Normal Lines, Linearization, and Concavity**: Using derivatives to find geometric tangent/normal lines, local linear approximations, and graph concavity.

<!-- page 2 | Limits of Function Values and Limit Laws -->

## Limits of Function Values and Limit Laws

### Introduction to Limits

If $f(x)$ is arbitrarily close to $L$, for all $x$ sufficiently close to $C$ other than $C$ itself, then we say that $f$ approaches the limit $L$ as $x$ approaches $C$.

$$\lim_{x \to C} f(x) = L$$

The limit of a function is the value of the function as the input gets close or approaches the same point.

### Basic Limits: Identity and Constant Functions

1. **Identity Function:** For $f(x) = x$,
$$\lim_{x \to C} f(x) = \lim_{x \to C} x = C$$

> **Figure: Graph of the identity function f(x) = x**
>
> Graph of the identity function f(x) = x. A Cartesian coordinate system with a vertical axis labelled y and a horizontal axis labelled x. A straight line passes through the origin (0,0) going upwards to the right, labelled f(x) = x.

2. **Constant Function:** For $y = f(x) = K$,
$$\lim_{x \to C} f(x) = \lim_{x \to C} K = K$$

> **Figure: Graph of the constant function y = K**
>
> Graph of the constant function y = K. A Cartesian coordinate system with axes y and x, and origin o. A horizontal line is drawn above the x-axis at height K, labelled y = K.

> **Figure: Graph of the unit step function u(x)**
>
> Graph of the unit step function u(x). A Cartesian coordinate system with axes y and x. For negative x, the graph lies along the negative x-axis at y = 0 with an open circle at x = 0. For positive x, the graph lies at y = 1 starting with a closed circle at x = 0 and extending to the right with an arrow.

### Behavior of Discontinuous Functions: The Unit-Step Function

Consider the unit-step function:
$$u(x) = \begin{cases} 0, & x < 0 \\ 1, & x \ge 0 \end{cases}$$

The unit step function $u(x)$ has no limit as $x \to 0$ because it jumps at $x = 0$. For negative values of $x$, it is arbitrarily close to $0$. For positive values of $x$, it is arbitrarily close to $1$. There is no single value $L$ as $x$ approaches $0$.

### Algebraic Limit Laws

If $L, M, c,$ and $k$ are real numbers such that $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$, then:

1. **Sum Rule:**
$$\lim_{x \to c} (f(x) + g(x)) = \lim_{x \to c} f(x) + \lim_{x \to c} g(x) = L + M$$

2. **Difference Rule:**
$$\lim_{x \to c} (f(x) - g(x)) = \lim_{x \to c} f(x) - \lim_{x \to c} g(x) = L - M$$

3. **Constant Multiplication Rule:**
$$\lim_{x \to c} (k f(x)) = k \lim_{x \to c} f(x) = kL$$

4. **Product Rule:**
$$\lim_{x \to c} (f(x) \cdot g(x)) = \lim_{x \to c} f(x) \times \lim_{x \to c} g(x) = L \times M$$

5. **Quotient Rule:**
$$\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)} = \frac{L}{M}, \quad \text{provided } M \neq 0$$

6. **Power Rule:**
$$\lim_{x \to c} (f(x))^n = \left(\lim_{x \to c} f(x)\right)^n = L^n$$

7. **Root Rule:**
$$\lim_{x \to c} \sqrt[n]{f(x)} = \sqrt[n]{\lim_{x \to c} f(x)} = L^{1/n} = \sqrt[n]{L}$$

### Solved Numericals and Examples

**Q: Find the limit of the function $f(x) = \frac{x^2 - 1}{x - 1}$ at $x = 1$.**

**Given:** $f(x) = \frac{x^2 - 1}{x - 1}$, $c = 1$.
**Find:** $\lim_{x \to 1} f(x)$.

**Formula & Solution:**
$$\begin{aligned}
\lim_{x \to 1} f(x) &= \lim_{x \to 1} \frac{x^2 - 1}{x - 1} \\
&= \lim_{x \to 1} \frac{(x + 1)(x - 1)}{x - 1} \\
&= \lim_{x \to 1} (x + 1) \\
&= 1 + 1 = 2
\end{aligned}$$
**Answer:** $2$

***

**Q: Evaluate $\lim_{x \to c} (x^3 + 4x^2 - 3)$.**

**Solution:**
$$\begin{aligned}
\lim_{x \to c} (x^3 + 4x^2 - 3) &= \lim_{x \to c} x^3 + \lim_{x \to c} (4x^2) - \lim_{x \to c} 3 \\
&= c^3 + 4 \left(\lim_{x \to c} x^2\right) - 3 \\
&= c^3 + 4c^2 - 3
\end{aligned}$$
**Answer:** $c^3 + 4c^2 - 3$

***

**Q: Evaluate $\lim_{x \to c} \frac{x^4 + x^2 - 1}{x^2 + 5}$.**

**Solution:**
Applying the quotient and sum/difference laws:
$$\frac{\lim_{x \to c} (x^4 + x^2 - 1)}{\lim_{x \to c} (x^2 + 5)} = \frac{c^4 + c^2 - 1}{c^2 + 5}$$
**Answer:** $\frac{c^4 + c^2 - 1}{c^2 + 5}$

***

**Q: Find $\lim_{x \to 2} \sqrt{4x^2 + 3}$.**

**Solution:**
$$\begin{aligned}
\lim_{x \to 2} \sqrt{4x^2 + 3} &= \left( \lim_{x \to 2} (4x^2 + 3) \right)^{1/2} \\
&= \left( \lim_{x \to 2} 4x^2 + \lim_{x \to 2} 3 \right)^{1/2} \\
&= (4(2)^2 + 3)^{1/2} \\
&= (16 + 3)^{1/2} = \sqrt{19}
\end{aligned}$$
**Answer:** $\sqrt{19}$

***

### Limits of Polynomials and Rational Functions

For any polynomial function $P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_0$:
$$\lim_{x \to c} P(x) = P(c)$$

For any rational function $f(x) = \frac{P(x)}{q(x)}$:
$$\lim_{x \to c} f(x) = \frac{\lim_{x \to c} P(x)}{\lim_{x \to c} q(x)} = \frac{P(c)}{q(c)}, \quad \text{provided } q(c) \neq 0$$

**Q: Find $\lim_{x \to -1} \frac{x^3 + 4x^2 - 3}{x^2 + 5}$.**

**Solution:**
$$\frac{(-1)^3 + 4(-1)^2 - 3}{(-1)^2 + 5} = \frac{-1 + 4 - 3}{1 + 5} = \frac{0}{6} = 0$$
**Answer:** $0$

***

**Q: Evaluate $\lim_{x \to 1} \frac{x^2 + x - 2}{x^2 - x}$.**

**Solution:**
Direct substitution yields:
$$\frac{1^2 + 1 - 2}{1^2 - 1} = \frac{0}{0}$$
This is an indeterminate form and is not defined via direct evaluation. Algebraic factorization (as demonstrated in the opening example) is required to resolve this limit.

<!-- page 3 | Advanced Limit Evaluation and Sandwich Theorem -->

## Advanced Limit Evaluation and Sandwich Theorem

### Bridge and Objectives
Direct substitution often yields indeterminate forms such as $\frac{0}{0}$. To evaluate such limits, advanced algebraic manipulation—including factoring, rationalization via conjugate multiplication—and bounding techniques like the Sandwich (Squeeze) Theorem are required. Furthermore, limits at infinity for rational functions can be evaluated by dividing through by the highest power of the variable in the denominator.

### Conjugate Multiplication for Radical Expressions
When direct substitution of a limit results in an indeterminate form containing square roots, multiplying the numerator and denominator by the conjugate expression eliminates the radical from the affected part.

**Example:** Evaluate $\lim_{x \to 0} \frac{\sqrt{x^2+100} - 10}{x^2}$

* **Given:** $f(x) = \frac{\sqrt{x^2+100} - 10}{x^2}$, $C = 0$
* **Find:** $\lim_{x \to 0} \frac{\sqrt{x^2+100} - 10}{x^2}$
* **Formula / Procedure:** Multiply by the conjugate $(\sqrt{x^2+100} + 10)$.
* **Substitution & Steps:**
$$\lim_{x \to 0} \frac{(\sqrt{x^2+100} - 10)(\sqrt{x^2+100} + 10)}{x^2(\sqrt{x^2+100} + 10)} = \lim_{x \to 0} \frac{(\sqrt{x^2+100})^2 - 10^2}{x^2(\sqrt{x^2+100} + 10)}$$
$$\lim_{x \to 0} \frac{x^2+100-100}{x^2(\sqrt{x^2+100} + 10)} = \lim_{x \to 0} \frac{x^2}{x^2(\sqrt{x^2+100} + 10)} = \lim_{x \to 0} \frac{1}{\sqrt{x^2+100} + 10}$$
* **Evaluation:**
$$\frac{1}{\sqrt{0^2+100} + 10} = \frac{1}{10+10} = \underline{\frac{1}{20}}$$

---

### The Sandwich (Squeeze) Theorem
Suppose that $g(x) \le f(x) \le h(x)$ for all $x$ in some open interval containing $c$, except possibly at $c$ itself. If
$$\lim_{x \to c} g(x) = L \quad \text{and} \quad \lim_{x \to c} h(x) = L$$
then
$$\lim_{x \to c} f(x) = L$$

The Sandwich Theorem (or Squeeze Theorem) determines the limit of a function by trapping it between two simpler functions whose limits are known.

**Example 1:** Given a function $u$ satisfying the condition $1 - \frac{x^2}{4} \le u(x) \le 1 + \frac{x^2}{2}$ for all $x \neq 0$, find $\lim_{x \to 0} u(x)$.

* **Given:** $1 - \frac{x^2}{4} \le u(x) \le 1 + \frac{x^2}{2}$
* **Find:** $\lim_{x \to 0} u(x)$
* **Substitution & Steps:**
$$\lim_{x \to 0} \left(1 - \frac{x^2}{4}\right) = 1 - \frac{0}{4} = 1$$
$$\lim_{x\to 0} \left(1 + \frac{x^2}{2}\right) = 1 + \frac{0}{2} = 1$$
* **Final Answer:** By the Sandwich Theorem, $\lim_{x \to 0} u(x) = \underline{1}$.

**Example 2:** Evaluate the limit of $g(x) = x^2 \sin(1/x^2)$ near $x = 0$.

* **Steps:** Since the range of the sine function is bounded between $1$ and $1$:
$$1 \le \sin\left(\frac{1}{x^2}\right) \le 1$$
Multiplying throughout by $x^2$ (noting that $x^2 \ge 0$):
$$x^2 \le x^2 \sin\left(\frac{1}{x^2}\right) \le x^2$$
Taking limits of the outer functions as $x \to 0$:
$$\lim_{x \to 0} (-x^2) = 0 \quad \text{and} \quad \lim_{x \to 0} (x^2) = 0$$
* **Final Answer:** $\lim_{x \to 0} x^2 \sin\left(\frac{1}{x^2}\right) = \underline{0}$.

---

### Limits at Infinity for Rational Functions
To evaluate $\lim_{x \to \infty} \frac{P(x)}{Q(x)}$ where $P(x)$ and $Q(x)$ are polynomials, divide every term in the numerator and denominator by the highest power of $x$ present in the denominator, utilizing the standard result $\lim_{x \to \infty} \frac{1}{x^n} = 0$.

**Example 1:** Evaluate $\lim_{x \to \infty} \frac{3x^2 + 2x + 1}{2x^2 + x + 1}$

* **Substitution & Steps:** Divide all terms by $x^2$:
$$\lim_{x \to \infty} \frac{\frac{3x^2}{x^2} + \frac{2x}{x^2} + \frac{1}{x^2}}{\frac{2x^2}{x^2} + \frac{x}{x^2} + \frac{1}{x^2}} = \lim_{x \to \infty} \frac{3 + \frac{2}{x} + \frac{1}{x^2}}{2 + \frac{1}{x} + \frac{1}{x^2}}$$
* **Evaluation:**
$$\frac{3 + \frac{2}{\infty} + \frac{1}{\infty}}{2 + \frac{1}{\infty} + \frac{1}{\infty}} = \frac{3 + 0 + 0}{2 + 0 + 0} = \underline{\frac{3}{2}}$$

**Example 2:** Evaluate $\lim_{x \to \infty} \frac{4x^2 - x + 2}{2x^2 + 3x - 1}$

* **Steps:**
$$\lim_{x \to \infty} \frac{\frac{4x^2}{x^2} - \frac{x}{x^2} + \frac{2}{x^2}}{\frac{2x^2}{x^2} + \frac{3x}{x^2} - \frac{1}{x^2}} = \lim_{x \to \infty} \frac{4 - \frac{1}{x} + \frac{2}{x^2}}{2 + \frac{3}{x} - \frac{1}{x^2}}$$
* **Evaluation:**
$$\frac{4 - \frac{1}{\infty} + \frac{2}{\infty}}{2 + \frac{3}{\infty} - \frac{1}{\infty}} = \frac{4 - 0 + 0}{2 + 0 - 0} = \frac{4}{2} = \underline{2}$$

---

### Comprehensive Problem Solved Set

1. $\lim_{x \to 3} \frac{x^2 - 6x + 9}{x - 3}$
   * *Factorization:* $x^2 - 6x + 9 = (x-3)(x-3)$
   * *Simplification:* $\lim_{x \to 3} \frac{(x-3)^2}{x-3} = \lim_{x \to 3} (x-3) = 3 - 3 = \underline{0}$

2. $\lim_{x \to 4} \frac{2x + 8}{x^2 + x - 12}$
   * *Factorization:* $x^2 + x - 12 = (x+4)(x-3)$
   * *Substitution:* $\lim_{x \to 4} \frac{2(x+4)}{(x+4)(x-3)} = \frac{2}{4 - 3} = \frac{2}{7}$ (Note: Sign correction matches standard text evaluation: $\frac{2}{-7} = -\frac{2}{7}$ when evaluated near $$4$, but for $x \to 4$: $\frac{2(4+8)}{\dots}$ wait, given text states: $\frac{2(x+4)}{(x+4)(x-3)} = \frac{2}{-4-3}$ implies evaluation at $x=-4$. Following source: $\underline{-\frac{2}{7}}$).

3. $\lim_{x \to 5} \frac{x^2 - 3x - 10}{x^2 - 10x + 25}$
   * *Factorization:* $\frac{(x-5)(x+2)}{(x-5)(x-5)} = \frac{x+2}{x-5}$
   * *Evaluation:* Substitution of $x=5$ yields $\frac{7}{0}$, which is undefined. $\therefore$ **Limit does not exist.**

4. $\lim_{x \to -2} (x^3 - 15)$
   * *Substitution:* $(-2)^3 - 15 = -8 - 15 = \underline{-23}$

5. $\lim_{x \to 2} (-x^2 + 5x - 2)$
   * *Evaluation:* $$(2)^2 + 5(2) - 2 = -4 + 10 - 2 = \underline{4}$

6. $\lim_{x \to 2} \frac{2x+5}{11 - x^3}$
   * *Evaluation:* $\frac{2(2)+5}{11 - 2^3} = \frac{4+5}{11 - 8} = \frac{9}{3} = \underline{3}$

7. $\lim_{x \to 2/3} (8 - 3x)(2x - 1)$
   * *Evaluation:* $\left(8 - 3\left(\frac{2}{3}\right)\right)\left(2\left(\frac{2}{3}\right) - 1\right) = (8 - 2)\left(\frac{4}{3} - 1\right) = 6 \times \frac{1}{3} = \underline{2}$

8. $\lim_{x \to -1/2} 4x(3x+4)^2$
   * *Evaluation:* $4\left(-\frac{1}{2}\right)\left(3\left(-\frac{1}{2}\right) + 4\right)^2 = -2 \left(-\frac{3}{2} + \frac{8}{2}\right)^2 = -2 \left(\frac{5}{2}\right)^2 = -2 \times \frac{25}{4} = \underline{-\frac{25}{2}}$

9. $\lim_{y \to -3} (5-y)^{4/3}$
   * *Evaluation:* $(5 - (-3))^{4/3} = (8)^{4/3} = (2^3)^{4/3} = 2^4 = \underline{16}$

10. $\lim_{h \to 0} \frac{3}{\sqrt{3h+1}+1}$
    * *Evaluation:* $\frac{3}{\sqrt{3(0)+1}+1} = \frac{3}{1+1} = \underline{\frac{3}{2}}$

11. $\lim_{h \to 1} \frac{\sqrt{6h+10}-5}{h^2}$
    * *Evaluation:* $\frac{\sqrt{6(1)+10}-5}{1^2} = \frac{\sqrt{16}-5}{1} = \frac{4-5}{1} = \underline{-1}$

12. $\lim_{x \to 1} \frac{x-1}{\sqrt{x+3}-2}$
    * *Conjugate Multiplication:* Multiply numerator and denominator by $(\sqrt{x+3}+2)$.
    $$\lim_{x \to 1} \frac{(x-1)(\sqrt{x+3}+2)}{(\sqrt{x+3})^2 - 2^2} = \lim_{x \to 1} \frac{(x-1)(\sqrt{x+3}+2)}{x+3-4} = \lim_{x \to 1} (\sqrt{x+3}+2)$$
    * *Evaluation:* $\sqrt{1+3} + 2 = 2 + 2 = \underline{4}$

13. $\lim_{x \to 5} \frac{x-5}{x^2-25}$
    * *Simplification:* $\lim_{x \to 5} \frac{x-5}{(x-5)(x+5)} = \frac{1}{5+5} = \underline{\frac{1}{10}}$

14. $\lim_{x \to 3} \frac{x+4}{x^2+7x+14}$
    * *Evaluation:* $\frac{3+4}{3^2+7(3)+14} = \frac{7}{9 + 21 + 14} = \frac{7}{44}$

15. $\lim_{x \to -5} \frac{x^2+3x-10}{x+5}$
    * *Factorization:* $\frac{(x+5)(x-2)}{x+5} = \lim_{x \to -5} (x-2) = -5 - 2 = \underline{-7}$

16. $\lim_{x \to 2} \frac{x^2-7x+10}{x-2}$
    * *Factorization:* $\frac{(x-5)(x-2)}{x-2} = \lim_{x \to 2} (x-5) = 2 - 5 = \underline{-3}$

17. $\lim_{t \to 2} \frac{t^2+4t+3}{t^2-9}$
    * *Evaluation:* $\frac{2^2+4(2)+3}{2^2-9} = \frac{4+8+3}{4-9} = \frac{15}{-5} = \underline{-3}$

18. $\lim_{t \to -2} \frac{-2t-4}{t^3+2t^2}$
    * *Simplification:* $\lim_{t \to -2} \frac{-2(t+2)}{t^2(t+2)} = \frac{-2}{(-2)^2} = \frac{-2}{4} = \underline{-\frac{1}{2}}$

19. $\lim_{x \to 0} (2\sin x - 1)$
    * *Evaluation:* $2\sin(0) - 1 = 0 - 1 = \underline{-1}$

20. $\lim_{x \to 0} \frac{1+x+\sin x}{2\cos x}$
    * *Evaluation:* $\frac{1+0+\sin(0)}{2\cos(0)} = \frac{1}{2(1)} = \underline{\frac{1}{2}}$

21. $\lim_{x \to \pi} \sqrt{x+2} \sin(x/2)$
    * *Evaluation:* $\sqrt{\pi+2} \times \sin(\pi/2) = \sqrt{\pi+2} \times 1 = \underline{\sqrt{\pi+2}}$

22. $\lim_{x \to -3} \frac{2 - \sqrt{x^2-5}}{x+3}$
    * *Conjugate Multiplication:* Multiply by $(2 + \sqrt{x^2-5})$:
    $$\lim_{x \to -3} \frac{4 - (x^2-5)}{(x+3)(2 + \sqrt{x^2-5})} = \lim_{x \to -3} \frac{9 - x^2}{(x+3)(2 + \sqrt{x^2-5})} = \lim_{x \to -3} \frac{(3+x)(3-x)}{(x+3)(2 + \sqrt{x^2-5})}$$
    * *Evaluation:* $\frac{3-(-3)}{2 + \sqrt{(-3)^2-5}} = \frac{6}{2 + \sqrt{4}} = \frac{6}{2+2} = \frac{6}{4} = \underline{\frac{3}{2}}$

23. $\lim_{x \to 1} \frac{x^{-1} - 1}{x - 1}$
    * *Simplification:* $\lim_{x \to 1} \frac{\frac{1-x}{x}}{x-1} = \lim_{x \to 1} \frac{-(x-1)}{x(x-1)} = \lim_{x \to 1} \frac{-1}{x} = \underline{-1}$

24. Find $\lim_{x \to 0} f(x)$ given $\sqrt{9-5x^2} \le f(x) \le \sqrt{x^2+9}$.
    * *Sandwich Theorem Limits:* $\lim_{x \to 0} \sqrt{9-5x^2} = \sqrt{9} = 3$ and $\lim_{x \to 0} \sqrt{x^2+9} = \sqrt{9} = 3$.
    * *Final Answer:* $\underline{3}$

25. Evaluate $\lim_{x \to 0} \frac{2\sin x}{2 - 2\cos x}$ given $1 - \frac{x^2}{6} \le \frac{2\sin x}{2 - 2\cos x} \le 1$.
    * *Sandwich Theorem Limits:* $\lim_{x \to 0} \left(1 - \frac{x^2}{6}\right) = 1$ and $\lim_{x \to 0} 1 = 1$.
    * *Final Answer:* $\underline{1}$

<!-- page 4 | Continuity at a Point and One-Sided Limits -->

## Continuity At a Point and One-Sided Limits

### Bridge and Core Concepts
Having mastered limits, we now examine whether a function's limit equals its actual value at a point. The new idea is **continuity** as the seamless connection of function values across a domain. A function is continuous at a point if there are no breaks, jumps, or holes.

### Continuity Conditions
A function $f(x)$ is continuous at $x = a$ if and only if the following three conditions are satisfied:
1. $f(a)$ exists.
2. $\lim_{x \to a} f(x)$ exists.
3. $\lim_{x \to a} f(x) = f(a)$.

#### Solved Examples on Continuity at a Point

* **Example 1:** Consider the function $f(x) = x^2$. Check whether this function is continuous at $x = 3$.
  * **Given:** $f(x) = x^2$, point $a = 3$.
  * **Find:** Continuity at $x = 3$.
  * **Formula:** Check $f(a)$, $\lim_{x \to a} f(x)$, and their equality.
  * **Substitution & Evaluation:**
    $$\begin{aligned}
f(3) &= 3^2 = 9 \\
\lim_{x \to 3} f(x) &= \lim_{x \to 3} x^2 = 3^2 = 9
\end{aligned}$$
  * **Result:** Since $\lim_{x \to 3} f(x) = f(3) = 9$, the given function $f(x) = x^2$ is continuous at $x = 3$.

* **Example 2:** Consider the function $f(x) = 1/x$. Check the continuity of the function at $x = 1$.
  * **Given:** $f(x) = 1/x$, point $a = 1$.
  * **Find:** Continuity at $x = 1$.
  * **Substitution & Evaluation:**
    $$\begin{aligned}
f(1) &= \frac{1}{1} = 1 \\
\lim_{x \to 1} f(x) &= \lim_{x \to 1} \frac{1}{x} = \frac{1}{1} = 1
\end{aligned}$$
  * **Result:** Since $\lim_{x \to 1} f(x) = f(1)$, $f(x) = 1/x$ is continuous at $x = 1$.

* **Example 3:** Check whether $f(x) = 1/x$ is continuous at $x = 0$.
  * **Given:** $f(x) = 1/x$, point $a = 0$.
  * **Find:** Continuity at $x = 0$.
  * **Substitution & Evaluation:**
    $$f(0) = \frac{1}{0} \text{ (Not defined)}$$
  * **Result:** Because $f(0)$ does not exist, $f(x) = 1/x$ is not continuous at $x = 0$.

---

### One-Sided Limits and One-Sided Continuity

* **Right-Handed Continuity:** A function $f(x)$ is continuous from the right at $x = a$ if:
  $$\lim_{x \to a^+} f(x) = f(a)$$

* **Left-Handed Continuity:** A function $f(x)$ is continuous from the left at $x = a$ if:
  $$\lim_{x \to a^-} f(x) = f(a)$$

#### Solved Piecewise Continuity Problems

* **Problem 1:** Determine if the function $f(x)$ is continuous from the left at $x = 2$.
  $$f(x) = \begin{cases} x^2+3 & ; x < 2 \\ 5 & ; x \ge 2 \end{cases}$$
  * **Solution:**
    $$\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (x^2+3) = 2^2+3 = 4+3 = 7$$
    $$f(2) = 5$$
    Since $\lim_{x \to 2^-} f(x) \neq f(2)$ ($7 \neq 5$), the function is not left-continuous at $x = 2$.

* **Problem 2:** Determine if the function $g(x)$ is continuous from the right at $x = -1$.
  $$g(x) = \begin{cases} \sin x & ; x \le -1 \\ x^2 & ; x > -1 \end{cases}$$
  * **Solution:**
    $$\lim_{x \to -1^+} g(x) = \lim_{x \to -1^+} x^2 = (-1)^2 = 1$$
    $$g(-1) = \sin(-1) = -\sin(1)$$
    Since $\lim_{x \to -1^+} g(x) \neq g(-1)$ ($1 \neq -\sin(1)$), the function $g(x)$ is not right continuous at $x = -1$.

* **Problem 3:** Determine if the function $f(x) = \begin{cases} 3x - 9 & ; x \le 3 \\ x^2 - 6x + 9 & ; x > 3 \end{cases}$ is continuous from the right at $x = 3$.
  * **Solution:**
    $$\lim_{x \to 3^+} f(x) = \lim_{x \to 3^+} (x^2 - 6x + 9) = 3^2 - 6(3) + 9 = 9 - 18 + 9 = 0$$
    $$f(3) = 3(3) - 9 = 0$$
    Since $\lim_{x \to 3^+} f(x) = f(3) = 0$, the function $f(x)$ is right continuous at $x = 3$.

* **Problem 4:** Determine if the function $f(x)$ is continuous from the left at $x = 1$.
  $$f(x) = \begin{cases} 2x + 1 & ; x < 1 \\ 3 & ; x \ge 1 \end{cases}$$
  * **Solution:**
    $$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (2x + 1) = 2(1) + 1 = 3$$
    $$f(1) = 3$$
    Since $\lim_{x \to 1^-} f(x) = f(1)$, the given function is left continuous at $x = 1$.

---

### Continuous Functions and Points of Discontinuity

A function is called **continuous** if it is continuous at every point in its domain (the set of all input values for which the function is defined).
* $f(x) = x^2$ is continuous at every point in its domain ($\mathbb{R}$), hence it is a continuous function.
* $f(x) = 1/x$ is continuous everywhere *except* at $x = 0$. Therefore, $x = 0$ is a **point of discontinuity** (or the function has a discontinuity at $x = 0$).

#### Solved Examples: Finding Points of Discontinuity
Determine the points at which the following functions $y = f(x)$ are continuous:

1. $y = \frac{1}{x-2} - 3x$
   * Set denominator equal to zero: $x - 2 = 0 \implies x = 2$.
   * **Result:** $x = 2$ is the only point of discontinuity. The function is continuous everywhere else.

2. $y = \frac{x+1}{x^2-4x+3}$
   * Set denominator equal to zero: $x^2 - 4x + 3 = 0 \implies (x-3)(x-1) = 0 \implies x = 1, 3$.
   * **Result:** The function is continuous at every point except at $x = 1$ and $x = 3$.

3. $y = \sec{|x+1|} + \sin{x}$
   * **Result:** The function is continuous at all points since both secant and sine compositions do not introduce real zeros in denominators or undefined intervals over their domains.

4. $y = \frac{1}{|x|+1} - \frac{x^2}{2}$
   * The denominator $|x| + 1 \ge 1 > 0$ for all real $x$, and limits exist everywhere.
   * **Result:** The function is continuous at every point.

5. $y = \frac{\cos{x}}{x}$
   * The denominator vanishes when $x = 0$.
   * **Result:** The given function is continuous at every point except at $x = 0$.

6. $y = \tan{\frac{\pi x}{2}}$
   * Tangent is undefined when its argument is an odd integer multiple of $\frac{\pi}{2}$. That is, $\frac{\pi x}{2} = \frac{(2n+1)\pi}{2} \implies x = 2n+1$ (odd integers).
   * **Result:** The function is continuous at all points except at the odd integers.

<!-- page 5 | Derivatives and First Principles -->

## Derivatives and First Principles

Transitioning from static function values and continuity, we investigate how rapidly functions change. The derivative represents the limiting slope of a secant line (difference quotient), giving the instantaneous rate of change.

### Derivative Definition and First Principle

The rate of change or the derivative of a function $f(x)$ at $x = a$ is defined by:

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

This limit of the difference quotient has several equivalent interpretations:
1. The slope of the graph $y = f(x)$ at $x = a$
2. The slope of the tangent line to the curve $y = f(x)$ at $x = a$
3. The rate of change of $f(x)$ at $x = a$
4. The derivative $f'(x)$ at $x = a$

#### Solved Problems using First Principles

**$Q_1$.** Find the derivative of $f(x) = x^2$ at $x = 2$ using the $1^{\text{st}}$ principle of differentiation.

**Given:** $f(x) = x^2$, $a = 2$

**Find:** $f'(2)$

**Formula:** $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$

**Substitution and Solution:**
$$f'(2) = \lim_{h \to 0} \frac{f(2+h) - f(2)}{h}$$
$$= \lim_{h \to 0} \frac{(2+h)^2 - 4}{h} = \lim_{h \to 0} \frac{4 + 4h + h^2 - 4}{h}$$
$$= \lim_{h \to 0} \frac{4h + h^2}{h} = \lim_{h \to 0} \frac{h(4 + h)}{h}$$
$$= \lim_{h \to 0} (4 + h) = 4 + 0 = 4$$

**Final Answer:** $f'(2) = 4$

---

**$Q_2$.** Find the derivative of $f(x) = \sqrt{x}$ at $x = 4$ using the $1^{\text{st}}$ principle.

**Given:** $f(x) = \sqrt{x}$, $a = 4$

**Find:** $f'(4)$

**Substitution and Solution:**
$$f'(4) = \lim_{h \to 0} \frac{f(4+h) - f(4)}{h}$$
$$= \lim_{h \to 0} \frac{\sqrt{4+h} - 2}{h}$$
Multiplying numerator and denominator by the conjugate $(\sqrt{4+h} + 2)$:
$$= \lim_{h \to 0} \frac{(\sqrt{4+h} - 2)(\sqrt{4+h} + 2)}{h(\sqrt{4+h} + 2)} = \lim_{h \to 0} \frac{(\sqrt{4+h})^2 - (2)^2}{h(\sqrt{4+h} + 2)}$$
$$= \lim_{h \to 0} \frac{4 + h - 4}{h(\sqrt{4+h} + 2)} = \lim_{h \to 0} \frac{1}{\sqrt{4+h} + 2} = \frac{1}{\sqrt{4+0} + 2} = \frac{1}{4}$$

**Final Answer:** $f'(4) = \frac{1}{4}$

---

**$Q_5$.** Find the derivative of $f(x) = 3x^2 + 2x$ at $x = 1$ using the $1^{\text{st}}$ principle.

**Given:** $f(x) = 3x^2 + 2x$, $a = 1$

**Find:** $f'(1)$

**Substitution and Solution:**
$$f'(1) = \lim_{h \to 0} \frac{f(1+h) - f(1)}{h}$$
$$= \lim_{h \to 0} \frac{3(1+h)^2 + 2(1+h) - (3 \times 1^2 + 2 \times 1)}{h}$$
$$= \lim_{h \to 0} \frac{3(1 + 2h + h^2) + 2 + 2h - 5}{h} = \lim_{h \to 0} \frac{3 + 6h + 3h^2 + 2 + 2h - 5}{h}$$
$$= \lim_{h \to 0} \frac{8h + 3h^2}{h} = \lim_{h \to 0} \frac{h(8 + 3h)}{h}$$
$$= 8 + 3 \times 0 = 8$$

**Final Answer:** $f'(1) = 8$

---

**$Q_6$.** Find the derivative of $f(x) = 1/x$ at $x = 2$ using the $1^{\text{st}}$ principle.

**Given:** $f(x) = \frac{1}{x}$, $a = 2$

**Find:** $f'(2)$

**Substitution and Solution:**
$$f'(2) = \lim_{h \to 0} \frac{f(2+h) - f(2)}{h} = \lim_{h \to 0} \frac{\frac{1}{2+h} - \frac{1}{2}}{h}$$
$$= \lim_{h \to 0} \frac{2 - (2+h)}{(2+h)2} \div h = \lim_{h \to 0} \frac{-h}{4+2h} \times \frac{1}{h}$$
$$= \lim_{h \to 0} \frac{-1}{4+2h} = -\frac{1}{4}$$

**Final Answer:** $f'(2) = -\frac{1}{4}$

---

**$Q_7$.** Find the derivative of $f(x) = \sin x$ at $x = 0$ using the $1^{\text{st}}$ principle.

**Given:** $f(x) = \sin x$, $a = 0$

**Find:** $f'(0)$

**Substitution and Solution:**
$$f'(0) = \lim_{h \to 0} \frac{f(0+h) - f(0)}{h}$$
$$= \lim_{h \to 0} \frac{\sin(0+h) - \sin 0}{h} = \lim_{h \to 0} \frac{\sin h}{h}$$
Using L'Hôpital's Rule or standard limit $\left(\lim_{h \to 0} \frac{\sin h}{h} = 1\right)$:
$$= \lim_{h \to 0} \frac{\cos h}{1} = \frac{\cos 0}{1} = 1$$

**Final Answer:** $f'(0) = 1$

---

**$Q_6$ (Logarithmic).** Find the derivative of $f(x) = \ln x$ at $x=1$ using the $1^{\text{st}}$ principle:

**Given:** $f(x) = \ln x$, $a = 1$

**Find:** $f'(1)$

**Substitution and Solution:**
$$f'(1) = \lim_{h \to 0} \frac{f(1+h) - f(1)}{h}$$
$$= \lim_{h \to 0} \frac{\ln(1+h) - \ln 1}{h} = \lim_{h \to 0} \frac{\ln(1+h) - 0}{h}$$
Applying L'Hôpital's Rule:
$$= \lim_{h \to 0} \frac{\frac{1}{1+h}}{1} = \frac{1}{1+0} = 1$$

> **Figure: Standard result limit formula callout box**
>
> A cloud-shaped callout box containing the standard limit result formula: lim_{x \to 0} \frac{\ln(1+x)}{x} = 1, with the text "standard result" written above it.

**Final Answer:** $f'(1) = 1$

### Rules of Differentiation

To compute derivatives efficiently without evaluating limits every time, we apply standard operational rules:

* **Sum Rule:** $\frac{d}{dx} (f(x) + g(x)) = \frac{d}{dx} f(x) + \frac{d}{dx} g(x) = f'(x) + g'(x)$
* **Difference Rule:** $\frac{d}{dx} (f(x) - g(x)) = \frac{d}{dx} f(x) - \frac{d}{dx} g(x) = f'(x) - g'(x)$
* **Constant Rule:** $\frac{d}{dx} (c) = 0$
* **Constant Multiplication Rule:** $\frac{d}{dx} (k f(x)) = k \frac{d}{dx} f(x) = k f'(x)$
* **Product Rule:** $\frac{d}{dx} [f(x) \cdot g(x)] = f(x) \frac{d}{dx} g(x) + g(x) \frac{d}{dx} f(x)$
* **Quotient Rule:** $\frac{d}{dx} \left(\frac{f(x)}{g(x)}\right) = \frac{g(x) f'(x) - f(x) g'(x)}{(g(x))^2}$
* **Power Rule:** $\frac{d}{dx} (x^n) = n x^{n-1}$

#### Application Problems Using Differentiation Rules

**$Q_7$.** Find the derivative of $f(x) = 5x^4$.

**Solution:**
$$f'(x) = 5 \times 4 x^3 = 20x^3$$

**$Q_8$.** Find $\frac{d}{dx}$ of $f(x) = (2x^3) \sin x$.

**Solution (Product Rule):**
$$f'(x) = 2x^3 \cdot \frac{d}{dx}(\sin x) + \sin x \cdot \frac{d}{dx}(2x^3) = 2x^3 \cos x + \sin x \cdot 6x^2$$

---

### Additional Problems and Solutions

**1.** $f(x) = e^x \cos x$

**Solution (Product Rule):**
$$f'(x) = e^x(-\sin x) + \cos x \cdot e^x = e^x \cos x - e^x \sin x = e^x(\cos x - \sin x)$$

**2.** $f(x) = \frac{e^x}{x^2}$

**Solution (Quotient Rule):**
$$f'(x) = \frac{x^2 \cdot e^x - e^x \cdot 2x}{(x^2)^2} = \frac{e^x x^2 - e^x \cdot 2x}{x^4}$$
$$= \frac{e^x(x^2 - 2x)}{x^4} = \frac{x(e^x x - 2e^x)}{x^4} = \frac{e^x x - 2e^x}{x^3}$$

**3.** $f(x) = \frac{\ln x}{x^3}$

**Solution (Quotient Rule):**
$$f'(x) = \frac{x^3 \cdot \frac{1}{x} - \ln x \cdot 3x^2}{(x^3)^2} = \frac{x^2 - 3x^2 \ln x}{x^6}$$
$$= \frac{x^2(1 - 3\ln x)}{x^6} = \frac{1 - 3\ln x}{x^4}$$

**4.** Find the slope of the curve $y = x^2$ at $x = 3$.

**Solution:** Using the first principle at $a=3$:
$$f'(3) = \lim_{h \to 0} \frac{(3+h)^2 - (3)^2}{h} = \lim_{h \to 0} \frac{9 + 6h + h^2 - 9}{h}$$
$$= \lim_{h \to 0} \frac{6h + h^2}{h} = \lim_{h \to 0} \frac{h(6+h)}{h} = 6 + 0 = 6$$

**5.** Find the derivative of $f(x) = \frac{x^2}{\sin x}$.

**Solution (Quotient Rule):**
$$f'(x) = \frac{2x \cdot \sin x - x^2 \cdot \cos x}{\sin^2 x} = \frac{2x \sin x - x^2 \cos x}{\sin^2 x}$$

**6.** Find the slope of the curve $y = \sin x$ at $x = \pi/4$.

**Solution:**
$$\frac{dy}{dx} = \cos x$$
$$\text{At } x = \pi/4 \implies \frac{dy}{dx} = \cos\left(\frac{\pi}{4}\right) = \frac{1}{\sqrt{2}}$$

<!-- page 6 | Higher-Order Derivatives and Implicit Differentiation -->

## Higher-Order Derivatives and Implicit Differentiation

Bridge: Having learned basic derivatives, we now extend differentiation to higher orders and curves not solved explicitly for $y$. The new idea involves implicit differentiation, allowing derivative computation for non-explicit relations.

### Higher-Order Derivatives

The first-order derivative of a function $y = f(x)$ is denoted by $\frac{dy}{dx}$, $y'$, or $f'(x)$. Differentiating this first-order derivative with respect to $x$ yields the second-order derivative, denoted by $\frac{d^2y}{dx^2}$, $y''$, or $f''(x)$. Continuing this process gives the third-order derivative $\frac{d^3y}{dx^3}$, $y'''$, or $f'''(x)$, and so on.

#### Solved Problems on Higher-Order Derivatives

**Q. Find the fourth-order derivative of the function $y = 3x^5$.**

**Given:** $y = 3x^5$

**Find:** $y''''$

**Formula:** Power rule $\frac{d}{dx}(x^n) = n x^{n-1}$

**Step-by-Step Derivation & Substitution:**
$$y' = 15x^4$$
$$y'' = 60x^3$$
$$y''' = 180x^2$$
$$y'''' = 360x$$

**Final Answer:** $y'''' = 360x$

---

**Q. Find the $1^{\text{st}}$ order and $2^{\text{nd}}$ order derivative of $f(x) = \frac{1}{x}$.**

**Given:** $f(x) = x^{-1}$

**Find:** $f'(x)$ and $f''(x)$

**Formula:** Quotient rule or power rule.

**Step-by-Step Derivation & Substitution:**
$$f'(x) = -1 \times x^{-2} = \frac{-1}{x^2}$$
Using the quotient rule for the second derivative:
$$f''(x) = \frac{x^2 \cdot 0 - (-1) \cdot 2x}{(x^2)^2} = \frac{2x}{x^4} = \frac{2}{x^3}$$

**Final Answer:** $f'(x) = -\frac{1}{x^2}$, $f''(x) = \frac{2}{x^3}$

---

**Q. Find the third derivative of $f(x) = x^5 - 4x^3 + x$.**

**Given:** $f(x) = x^5 - 4x^3 + x$

**Find:** $f'''(x)$

**Step-by-Step Derivation & Substitution:**
$$f'(x) = 5x^4 - 12x^2 + 1$$
$$f''(x) = 20x^3 - 24x$$
$$f'''(x) = 60x^2 - 24$$

**Final Answer:** $f'''(x) = 60x^2 - 24$

---

**Q. Find the derivatives of all orders of $y = \frac{x^4}{2} - \frac{3x^2}{2} - x$.**

**Given:** $y = \frac{x^4}{2} - \frac{3x^2}{2} - x$

**Step-by-Step Derivation & Substitution:**
$$y' = \frac{4x^3}{2} - \frac{6x}{2} - 1 = 2x^3 - 3x - 1$$
$$y'' = 6x^2 - 3$$
$$y''' = 12x$$
$$y'''' = 12$$
$$y^{(5)} = 0$$

**Final Answer:** Higher-order derivatives from the fifth order onwards are identically zero.

---

**Q. Find the $4^{\text{th}}$ derivative of $y = e^x \sin x$.**

**Given:** $y = e^x \sin x$

**Find:** $\frac{d^4y}{dx^4}$

**Formula:** Product rule $\frac{d}{dx}(uv) = u'v + uv'$

**Step-by-Step Derivation & Substitution:**
$$\frac{dy}{dx} = e^x \cos x + \sin x \cdot e^x = e^x (\cos x + \sin x)$$
$$\frac{d^2y}{dx^2} = e^x (-\sin x + \cos x) + (\cos x + \sin x) e^x = 2 e^x \cos x$$
$$\frac{d^3y}{dx^3} = 2 [e^x (-\sin x) + \cos x \cdot e^x] = 2e^x [\cos x - \sin x]$$
$$\frac{d^4y}{dx^4} = 2e^x (-\sin x - \cos x) + (\cos x - \sin x) \cdot 2e^x = -4 e^x \sin x$$

**Final Answer:** $\frac{d^4y}{dx^4} = -4e^x \sin x$

---

**Q. Find the third derivative of $f(x) = x^3 \ln x$.**

**Given:** $f(x) = x^3 \ln x$

**Find:** $f'''(x)$

**Step-by-Step Derivation & Substitution:**
$$f'(x) = x^3 \left(\frac{1}{x}\right) + \ln x \cdot 3x^2 = x^2 + 3x^2 \ln x$$
$$f''(x) = 2x + 3\left(x^2 \cdot \frac{1}{x} + \ln x \cdot 2x\right) = 2x + 3x + 6x \ln x = 5x + 6x \ln x$$
$$f'''(x) = 5 + 6\left(x \cdot \frac{1}{x} + \ln x \cdot 1\right) = 5 + 6 + 6 \ln x = 11 + 6 \ln x$$

**Final Answer:** $f'''(x) = 11 + 6 \ln x$

---

**Q. Find the $1^{\text{st}}$ order derivative of $f(x) = \frac{x^3}{\sqrt{x^2+1}}$.**

**Given:** $f(x) = \frac{x^3}{\sqrt{x^2+1}}$

**Find:** $f'(x)$

**Formula:** Quotient rule $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$

**Step-by-Step Derivation & Substitution:**
$$f'(x) = \frac{3x^2 \sqrt{x^2+1} - x^3 \cdot \frac{1}{2\sqrt{x^2+1}} \cdot 2x}{(\sqrt{x^2+1})^2}$$
$$f'(x) = \frac{3x^2(x^2+1) - x^4}{(\sqrt{x^2+1})^3} = \frac{3x^4 + 3x^2 - x^4}{(\sqrt{x^2+1})^3} = \frac{2x^4 + 3x^2}{(\sqrt{x^2+1})^3}$$

**Final Answer:** $f'(x) = \frac{2x^4 + 3x^2}{(x^2+1)^{3/2}}$

### Instantaneous Rate of Change

The derivative represents the instantaneous rate of change of a dependent variable with respect to an independent variable.

**Q. Find the instantaneous rate of change of $f(x) = x^2$ at $x = 5$.**

**Given:** $f(x) = x^2$, $x = 5$

**Step-by-Step Substitution:**
$$f'(x) = 2x \implies f'(5) = 2(5) = 10$$

**Final Answer:** $10$

---

**Q. Find the rate of change of $f(x) = 4x^3 - x^2 + 2x - 7$ at $x = 1$.**

**Given:** $f(x) = 4x^3 - x^2 + 2x - 7$, $x = 1$

**Step-by-Step Substitution:**
$$f'(x) = 12x^2 - 2x + 2$$
$$f'(1) = 12(1)^2 - 2(1) + 2 = 12 - 2 + 2 = 12$$

**Final Answer:** $12$

---

**Q. A car's position $s(t)$ in meters at time $t$ in seconds is $s(t) = 4t^2$. Find the instantaneous velocity at $t = 5\text{ s}$.**

**Given:** $s(t) = 4t^2$, $t = 5\text{ s}$

**Step-by-Step Substitution:**
$$s'(t) = 8t \implies s'(5) = 8(5) = 40\text{ m/s}$$

**Final Answer:** $40\text{ m/s}$

---

**Q. The stress $\sigma(t)$ in a material is $\sigma(t) = 100t - 5t^2$, where $t$ is in seconds. Find the rate of change of stress at $t = 8\text{ s}$.**

**Given:** $\sigma(t) = 100t - 5t^2$, $t = 8\text{ s}$

**Step-by-Step Substitution:**
$$\sigma'(t) = 100 - 10t \implies \sigma'(8) = 100 - 10(8) = 100 - 80 = 20\text{ Pa/s}$$

**Final Answer:** $20\text{ Pa/s}$ (or $\text{N}/(\text{m}^2\cdot\text{s})$)

### Implicit Differentiation

Implicit differentiation is used when a relation is given implicitly, meaning $y$ is not explicitly isolated as a function of $x$. We differentiate both sides with respect to $x$, treating $y$ as a differentiable function of $x$ and applying the chain rule where appropriate.

> **Figure: Margin note for problem 1 showing equation of circle**
>
> Margin note for problem 1 showing the equation of a circle. It consists of the text x^2+y^2=r^2 with a downward vertical arrow pointing to the text 'eqn of circle'.

**Q1. Find the derivative of $x^2 + y^2 = r^2$ implicitly.**

**Step-by-Step Derivation:**
$$\frac{d}{dx} (x^2 + y^2) = \frac{d}{dx} (r^2)$$
$$2x + 2y \frac{dy}{dx} = 0$$
$$2y \frac{dy}{dx} = -2x \implies \frac{dy}{dx} = -\frac{x}{y}$$

**Final Answer:** $\frac{dy}{dx} = -\frac{x}{y}$

---

**Q2. Differentiate the ellipse equation $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ implicitly to find $\frac{dy}{dx}$.**

**Step-by-Step Derivation:**
$$\frac{1}{a^2}(2x) + \frac{1}{b^2}\left(2y \frac{dy}{dx}\right) = 0$$
$$\frac{2y}{b^2} \frac{dy}{dx} = -\frac{2x}{a^2} \implies \frac{dy}{dx} = -\frac{2x}{a^2} \times \frac{b^2}{2y} = -\frac{b^2 x}{a^2 y}$$

**Final Answer:** $\frac{dy}{dx} = -\frac{b^2 x}{a^2 y}$

---

**Q3. Differentiate $x^2 + xy + y^2 = 1$ implicitly to find $\frac{dy}{dx}$.**

**Step-by-Step Derivation:**
$$\frac{d}{dx}(x^2) + \frac{d}{dx}(xy) + \frac{d}{dx}(y^2) = 0$$
$$2x + \left(x \frac{dy}{dx} + y \cdot 1\right) + 2y \frac{dy}{dx} = 0$$
$$2x + y + \frac{dy}{dx}(x + 2y) = 0 \implies \frac{dy}{dx} = -\frac{2x + y}{x + 2y}$$

**Final Answer:** $\frac{dy}{dx} = -\frac{2x + y}{x + 2y}$

---

**Q4. Find $\frac{dy}{dx}$ for $x^2y + y^3 = 7$.**

**Step-by-Step Derivation:**
$$\left(x^2 \frac{dy}{dx} + y \cdot 2x\right) + 3y^2 \frac{dy}{dx} = 0$$
$$\frac{dy}{dx}(x^2 + 3y^2) = -2xy \implies \frac{dy}{dx} = -\frac{2xy}{x^2 + 3y^2}$$

**Final Answer:** $\frac{dy}{dx} = -\frac{2xy}{x^2 + 3y^2}$

---

**Q5. Find $\frac{dy}{dx}$ for $\sin(xy) = x + y$.**

**Step-by-Step Derivation:**
$$\cos(xy) \cdot \left(x \frac{dy}{dx} + y\right) = 1 + \frac{dy}{dx}$$
$$x \cos(xy) \frac{dy}{dx} + y \cos(xy) = 1 + \frac{dy}{dx}$$
$$\frac{dy}{dx}[x \cos(xy) - 1] = 1 - y \cos(xy)$$
$$\frac{dy}{dx} = \frac{1 - y \cos(xy)}{x \cos(xy) - 1}$$

**Final Answer:** $\frac{dy}{dx} = \frac{1 - y \cos(xy)}{x \cos(xy) - 1}$

---

**Q6. Find $\frac{dy}{dx}$ for $x^2(x - y^2) = x^2 - y^2$.**

**Step-by-Step Derivation:**
Expanding or applying the product rule:
$$\frac{d}{dx}[x^3 - x^2y^2] = \frac{d}{dx}[x^2 - y^2]$$
$$3x^2 - \left(x^2 \cdot 2y \frac{dy}{dx} + y^2 \cdot 2x\right) = 2x - 2y \frac{dy}{dx}$$
$$3x^2 - 2x^2y \frac{dy}{dx} - 2xy^2 = 2x - 2y \frac{dy}{dx}$$
$$\frac{dy}{dx}(2y - 2x^2y) = 2x - 3x^2 + 2xy^2$$
$$\frac{dy}{dx} = \frac{2x - 3x^2 + 2xy^2}{2y(1 - x^2)}$$

**Final Answer:** $\frac{dy}{dx} = \frac{2x - 3x^2 + 2xy^2}{2y(1 - x^2)}$

---

**Q7. Find $\frac{dy}{dx}$ for $2xy + y^2 = x + y$.**

**Step-by-Step Derivation:**
$$2\left(x \frac{dy}{dx} + y\right) + 2y \frac{dy}{dx} = 1 + \frac{dy}{dx}$$
$$2x \frac{dy}{dx} + 2y + 2y \frac{dy}{dx} - \frac{dy}{dx} = 1$$
$$\frac{dy}{dx}(2x + 2y - 1) = 1 - 2y$$
$$\frac{dy}{dx} = \frac{1 - 2y}{2x + 2y - 1}$$

**Final Answer:** $\frac{dy}{dx} = \frac{1 - 2y}{2x + 2y - 1}$

---

**Q8. Find $\frac{dy}{dx}$ given $x^3 = \frac{2x - y}{x + 3y}$.**

**Step-by-Step Derivation:**
Applying quotient rule on the right-hand side and power rule on the left:
$$3x^2 = \frac{(x + 3y)\left(2 - \frac{dy}{dx}\right) - (2x - y)\left(1 + 3\frac{dy}{dx}\right)}{(x + 3y)^2}$$
Multiply both sides by $(x+3y)^2$ and collect terms with $\frac{dy}{dx}$ to isolate the derivative:
$$3x^2(x + 3y)^2 = 7y + 5x \frac{dy}{dx}$$
$$\frac{dy}{dx} = \frac{3x^2(x + 3y)^2 - 7y}{5x}$$

**Final Answer:** $\frac{dy}{dx} = \frac{3x^2(x + 3y)^2 - 7y}{5x}$

<!-- page 7 | The Chain Rule -->

## The Chain Rule

Bridge: Now that we can differentiate standard functions and implicit equations, we need to handle compositions of functions.

The new idea: The chain rule for differentiating composite functions by multiplying outer and inner derivatives.

Objectives: Differentiate composite functions using the chain rule; Combine the chain rule with trigonometric, exponential, and algebraic functions.

Concepts to teach: Composite functions; Chain rule formula; Outside-inside derivative rule.

### Concepts and Formulas

If a function $y$ can be expressed as a composite function $y = f(u(x))$, where $f$ is differentiable with respect to $u$ and $u$ is differentiable with respect to $x$, then the derivative of $y$ with respect to $x$ is given by the chain rule formula:

$$\frac{dy}{dx} = \frac{df}{du} \cdot \frac{du}{dx}$$

In terms of function notation, if $y = (f \circ g)(x) = f(g(x))$, the derivative is:

$$\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$$

This rule can be thought of as taking the derivative of the outside function evaluated at the inside function, multiplied by the derivative of the inside function (the outside-inside derivative rule).

---

### Solved Problems

$Q_1$. If $y = f(u(x))$, differentiate $y$ with respect to $x$ is given by $\frac{dy}{dx} = \frac{df}{du} \cdot \frac{du}{dx}$.
Find the derivative of $y = (3x+2)^3$.

> **Figure: Solution steps for Q1**
>
> Solution steps for Q1. Two columns showing the solution for Q1. Left column: y = (3x+2)^3, dy/dx = 3(3x+2)^2 * d/dx(3x+2) = 3(3x+2)^2 * 3 = 9(3x+2)^2. Right column: y = (3x+2)^3, f(u) = u^3, u(x) = 3x+2, df/du = 3u^2, du/dx = 3, dy/dx = df/du * du/dx = 3u^2 * 3 = 9u^2 = 9(3x+2)^2.

**Given:** $y = (3x+2)^3$

**Find:** $\frac{dy}{dx}$

**Formula:** $\frac{dy}{dx} = \frac{df}{du} \cdot \frac{du}{dx}$

**Substitution & Solution:**
Let $u = 3x+2$, then $f(u) = u^3$.
$$\frac{df}{du} = 3u^2, \quad \frac{du}{dx} = 3$$
$$\frac{dy}{dx} = 3u^2 \cdot 3 = 9u^2 = 9(3x+2)^2$$
Alternatively, using the direct outside-inside rule:
$$\frac{dy}{dx} = 3(3x+2)^2 \cdot \frac{d}{dx}(3x+2) = 3(3x+2)^2 \cdot 3 = 9(3x+2)^2$$

**Answer:** $\frac{dy}{dx} = 9(3x+2)^2$

---

$Q_2$. Find the derivative of $y = \sin(4x^3)$.

> **Figure: Solution steps for Q2**
>
> Solution steps for Q2. Two columns showing the solution for Q2. Left column: y = sin(4x^3), dy/dx = cos(4x^3) * d/dx(4x^3) = cos(4x^3) * 12x^2 = 12x^2 cos(4x^3). Right column: y = (sin(4x^3)), f(u) = sin u, u(x) = 4x^3, df/du = cos u, du/dx = 12x^2, dy/dx = df/du * du/dx = cos u * 12x^2 = cos(4x^3) * 12x^2.

**Given:** $y = \sin(4x^3)$

**Find:** $\frac{dy}{dx}$

**Substitution & Solution:**
Let the outer function be $f(u) = \sin u$ and the inner function be $u(x) = 4x^3$.
$$\frac{df}{du} = \cos u, \quad \frac{du}{dx} = 12x^2$$
$$\frac{dy}{dx} = \frac{df}{du} \cdot \frac{du}{dx} = \cos(4x^3) \cdot 12x^2 = 12x^2 \cos(4x^3)$$

**Answer:** $\frac{dy}{dx} = 12x^2 \cos(4x^3)$

---

$Q_3$. Find the derivative of $y = e^{\sin x}$.

**Given:** $y = e^{\sin x}$

**Find:** $\frac{dy}{dx}$

**Solution:**
$$\frac{dy}{dx} = e^{\sin x} \cdot \frac{d}{dx}(\sin x)$$
$$= \cos x \cdot e^{\sin x}$$

**Answer:** $\frac{dy}{dx} = \cos x \cdot e^{\sin x}$

---

$Q_4$. Find the derivative of $y = \sqrt{5x^2+3x}$.

**Given:** $y = \sqrt{5x^2+3x} = (5x^2+3x)^{\frac{1}{2}}$

**Find:** $\frac{dy}{dx}$

**Solution:**
$$\frac{dy}{dx} = \frac{1}{2\sqrt{5x^2+3x}} \cdot \frac{d}{dx}(5x^2+3x)$$
$$= \frac{1}{2\sqrt{5x^2+3x}} \cdot (10x+3) = \frac{10x+3}{2\sqrt{5x^2+3x}}$$

**Answer:** $\frac{dy}{dx} = \frac{10x+3}{2\sqrt{5x^2+3x}}$

---

$Q_5$. Find the derivative of $y = \tan(2x + 1)$.

**Given:** $y = \tan(2x + 1)$

**Find:** $\frac{dy}{dx}$

**Solution:**
$$\frac{dy}{dx} = \sec^2(2x+1) \cdot \frac{d}{dx}(2x+1)$$
$$= \sec^2(2x+1) \cdot 2 = 2 \sec^2(2x+1)$$

**Answer:** $\frac{dy}{dx} = 2 \sec^2(2x+1)$

---

$Q_6$. Find the derivative of $y = x \sin^4 x + x \cos^{-2} x$.

**Given:** $y = x \sin^4 x + x \cos^{-2} x$

**Find:** $\frac{dy}{dx}$

**Solution:**
Apply both the product rule and the chain rule:
$$\frac{dy}{dx} = \left[x \cdot \frac{d}{dx}(\sin^4 x) + \sin^4 x \cdot \frac{d}{dx}(x)\right] + \left[x \cdot \frac{d}{dx}(\cos^{-2} x) + \cos^{-2} x \cdot \frac{d}{dx}(x)\right]$$
$$\frac{dy}{dx} = x \cdot (4 \sin^3 x \cdot \cos x) + \sin^4 x \cdot (1) + x \cdot (-2 \cos^{-3} x \cdot (-\sin x)) + \cos^{-2} x \cdot (1)$$
$$= 4x \sin^3 x \cos x + \sin^4 x + \frac{2x \sin x}{\cos^3 x} + \frac{1}{\cos^2 x}$$

**Answer:** $\frac{dy}{dx} = 4x \sin^3 x \cos x + \sin^4 x + \frac{2x \sin x}{\cos^3 x} + \frac{1}{\cos^2 x}$

---

$Q_7$. Find the derivative of $f(\theta) = \left(\frac{\sin \theta}{1 + \cos \theta}\right)^2$.

**Given:** $f(\theta) = \left(\frac{\sin \theta}{1 + \cos \theta}\right)^2$

**Find:** $\frac{df}{d\theta}$

**Solution:**
$$\frac{df}{d\theta} = 2 \left(\frac{\sin \theta}{1 + \cos \theta}\right) \cdot \frac{d}{d\theta}\left(\frac{\sin \theta}{1 + \cos \theta}\right)$$
Using the quotient rule for the inner derivative:
$$\frac{df}{d\theta} = 2 \left(\frac{\sin \theta}{1 + \cos \theta}\right) \cdot \frac{(1 + \cos \theta) \cos \theta - \sin \theta (0 - \sin \theta)}{(1 + \cos \theta)^2}$$
$$= 2 \left(\frac{\sin \theta}{1 + \cos \theta}\right) \cdot \frac{\cos \theta + \cos^2 \theta + \sin^2 \theta}{(1 + \cos \theta)^2}$$
Since $\cos^2 \theta + \sin^2 \theta = 1$:
$$= 2 \left(\frac{\sin \theta}{1 + \cos \theta}\right) \cdot \frac{\cos \theta + 1}{(1 + \cos \theta)^2} = \frac{2 \sin \theta (1 + \cos \theta)}{(1 + \cos \theta)^3} = \frac{2 \sin \theta}{(1 + \cos \theta)^2}$$

**Answer:** $\frac{df}{d\theta} = \frac{2 \sin \theta}{(1 + \cos \theta)^2}$

---

$Q_8$. Find the derivative of $y = x \tan(2\sqrt{x}) + 7$.

**Given:** $y = x \tan(2\sqrt{x}) + 7$

**Find:** $\frac{dy}{dx}$

**Solution:**
Apply the product rule and chain rule:
$$\frac{dy}{dx} = x \cdot \frac{d}{dx}(\tan(2\sqrt{x})) + \tan(2\sqrt{x}) \cdot \frac{d}{dx}(x) + \frac{d}{dx}(7)$$
$$\frac{dy}{dx} = x \cdot \left(\sec^2(2\sqrt{x}) \cdot \frac{d}{dx}(2\sqrt{x})\right) + \tan(2\sqrt{x}) \cdot 1 + 0$$
$$\frac{dy}{dx} = x \sec^2(2\sqrt{x}) \cdot \left(2 \cdot \frac{1}{2\sqrt{x}}\right) + \tan(2\sqrt{x})$$
$$= x \sec^2(2\sqrt{x}) \cdot \frac{1}{\sqrt{x}} + \tan(2\sqrt{x}) = \frac{x}{\sqrt{x}} \sec^2(2\sqrt{x}) + \tan(2\sqrt{x})$$
$$= \sqrt{x} \sec^2(2\sqrt{x}) + \tan(2\sqrt{x})$$

**Answer:** $\frac{dy}{dx} = \sqrt{x} \sec^2(2\sqrt{x}) + \tan(2\sqrt{x})$

<!-- page 8 | Applications: Tangent/Normal Lines, Linearization, and Concavity -->

## Applications: Tangent/Normal Lines, Linearization, and Concavity

### Tangent Line and Normal Line

The equation of the tangent line to the curve $y = f(x)$ at a given point $(x_0, y_0)$ is given by:
$$(y - y_0) = f'(x_0)(x - x_0)$$
where $f'(x_0)$ represents the slope of the curve at $x_0$.

A normal line to a curve at a given point is the line perpendicular ($\perp$) to the tangent line at that point. The slope of the normal line is the negative reciprocal of the slope of the tangent line. The equation of the normal line is:
$$(y - y_0) = \frac{-1}{f'(x_0)}(x - x_0)$$

Q. Find the equation of the tangent and normal lines to the curve $y = x^2$ at the point $(1, 1)$.

Given: $y = x^2$, point $(x_0, y_0) = (1, 1)$.
Find: Tangent and normal lines.

First, find the derivative:
$$f'(x) = 2x \implies f'(1) = 2(1) = 2$$

Equation of tangent line:
$$y - 1 = 2(x - 1)$$
$$y = 2x - 2 + 1 \implies y = 2x - 1$$

Equation of normal line:
$$y - 1 = \frac{-1}{2}(x - 1)$$
$$2y - 2 = -x + 1 \implies y = \frac{-x}{2} + \frac{3}{2}$$

Q. Find the equation of tangent and the normal lines to the curve $y = x^2 + 3x + 2$ at $x = 1$.

Given: $y = x^2 + 3x + 2$ at $x = 1$.
For $x = 1$, $y_0 = 1^2 + 3(1) + 2 = 6$, giving the point $(1, 6)$.

Derivative:
$$f'(x) = 2x + 3 \implies f'(1) = 2(1) + 3 = 5$$

Equation of tangent line:
$$y - 6 = 5(x - 1) \implies y = 5x - 5 + 6 \implies y = 5x + 1$$

Equation of normal line:
$$y - 6 = -\frac{1}{5} (x - 1)$$
$$5y - 30 = -x + 1 \implies y = -\frac{x}{5} + \frac{31}{5}$$

Q3. Find the equation of tangent and normal lines to the curve $y = e^x$ at $x = 0$.

Given: $y = e^x$ at $x = 0$.
At $x = 0$, $y_0 = e^0 = 1$, point $(0, 1)$.
Derivative: $y' = e^x \implies y'(0) = 1$.

Tangent line:
$$y - 1 = 1(x - 0) \implies y = x + 1$$

Normal line:
$$y - 1 = -\frac{1}{1}(x - 0) \implies y = -x + 1$$

Q4. A projectile is launched, its height $h(t)$ in meters is given by the function $h(t) = -5t^2 + 20t + 25$, where $t$ is the time in seconds. Find the equation of the tangent line and the normal line to the curve at $t = 2\text{ s}$.

Given: $h(t) = -5t^2 + 20t + 25$ at $t = 2$.
At $t = 2$: $h(2) = -5(4) + 20(2) + 25 = -20 + 40 + 25 = 45$, point $(2, 45)$.
Derivative: $h'(t) = -10t + 20 \implies h'(2) = -10(2) + 20 = 0$.

Tangent line:
$$y - 45 = 0(x - 2) \implies y = 45$$

Normal line:
$$y - 45 = -\frac{1}{0}(x - 2)$$
Since the tangent line is horizontal, the normal line is vertical and its equation is $t = 2$.

Q5. Find equation of tangent and normal line to the curve $y = \sin x$ at $x = \pi/4$.

Given: $y = \sin x$ at $x = \pi/4$.
At $x = \pi/4$, $y_0 = \sin(\pi/4) = \frac{1}{\sqrt{2}}$. Point $(\pi/4, 1/\sqrt{2})$.
Derivative: $y'(x) = \cos x \implies y'(\pi/4) = \cos(\pi/4) = \frac{1}{\sqrt{2}}$.

Equation of tangent line:
$$y - \frac{1}{\sqrt{2}} = \frac{1}{\sqrt{2}}\left(x - \frac{\pi}{4}\right)$$
$$\sqrt{2}y - 1 = x - \frac{\pi}{4} \implies y = \frac{x - \frac{\pi}{4} + 1}{\sqrt{2}}$$

Equation of normal line:
$$y - \frac{1}{\sqrt{2}} = -\sqrt{2}\left(x - \frac{\pi}{4}\right) \implies y = -\sqrt{2}x + \sqrt{2}\frac{\pi}{4} + \frac{1}{\sqrt{2}}$$

Q. Find the equation of the tangent line and normal line to the curve $6x^2 + 3xy + 4y^2 + 17y - 6 = 0$ at $(-1, 0)$

Using implicit differentiation:
$$12x + 3\left(\frac{dy}{dx} x + y\right) + 8y\frac{dy}{dx} + 17\frac{dy}{dx} = 0$$
$$\frac{dy}{dx} (3x + 8y + 17) = -12x - 3y \implies \frac{dy}{dx} = \frac{-(12x + 3y)}{3x + 8y + 17}$$
*(Note: coefficient on $y^2$ term yields $8y$)*

Evaluating at $(-1, 0)$:
$$f'(-1, 0) = \frac{-(12(-1) + 3(0))}{3(-1) + 8(0) + 17} = \frac{12}{14} = \frac{6}{7}$$

Tangent line:
$$y - 0 = \frac{6}{7}(x - (-1)) \implies 7y = 6x + 6 \implies y = \frac{6x}{7} + \frac{6}{7}$$

Normal line:
$$y - 0 = \frac{-1}{\frac{6}{7}}(x - (-1)) \implies 6y = -7(x + 1) \implies y = \frac{-(7x + 7)}{6}$$

----

### Linearization

Linearization is a method used to approximate the value of a function near a given point using its derivatives. For a function $f(x)$ that is differentiable at $x=a$, the linear approximation of $f(x)$ near $x=a$ is:
$$L(x) = f(a) + f'(a)(x - a)$$

Q1. Linearise $f(x) = \sqrt{x}$ at $x = 4$.

Given $f(4) = \sqrt{4} = 2$. Derivative $f'(x) = \frac{1}{2\sqrt{x}} \implies f'(4) = \frac{1}{4}$.
$$L(x) = 2 + \frac{1}{4}(x - 4) = 2 + \frac{x}{4} - 1 = \frac{x}{4} + 1$$

Q2. Linearise $f(x) = e^x$ at $x = 0$.

Given $f(0) = 1$, $f'(x) = e^x \implies f'(0) = 1$.
$$L(x) = 1 + 1(x - 0) = 1 + x$$

Q3. Linearise $f(x) = \ln x$ at $x = 1$.

Given $f(1) = 0$, $f'(x) = \frac{1}{x} \implies f'(1) = 1$.
$$L(x) = 0 + 1(x - 1) = x - 1$$

Q4. Linearise $f(x) = \tan x$ at $x = \pi/4$.

Given $f(\pi/4) = 1$, $f'(x) = \sec^2 x \implies f'(\pi/4) = (\sqrt{2})^2 = 2$.
$$L(x) = 1 + 2\left(x - \frac{\pi}{4}\right) = 1 + 2x - \frac{\pi}{2}$$

Q5. The resistance $R$ of a resistor is given by $R(T) = e^{0.1 T}$ where $T$ is the temperature in $^{\circ}\text{C}$. Linearize the function at $T = 25$ to approximate the resistance for small temperature changes around the point.

$$R(25) = e^{2.5} \approx 12.182$$
$$R'(T) = 0.1 e^{0.1 T} \implies R'(25) = 0.1 e^{2.5} \approx 1.218$$
$$L(T) = 12.182 + 1.218(T - 25) = 12.182 + 1.218T - 30.45 = 1.218T - 18.268$$

Q6. Suppose a city's population $P(t)$ in thousands is given by the equation $P(t) = 100 e^{0.02 t}$ where $t$ is the number of years. Find the linear approx. of the population at $t = 0$ (year 2020). Use this linear approx. to estimate the population in the year 2021.

$$P(0) = 100 e^0 = 100$$
$$P'(t) = 2 e^{0.02 t} \implies P'(0) = 2$$
$$L(t) = 100 + 2(t - 0) = 100 + 2t$$
For the year 2021, $t = 1$:
$$L(1) = 100 + 2(1) = 102 \text{ thousand}$$

Q7. Linearise $f(x) = \sin x$ at $x = \pi/6$:

$$f(\pi/6) = 1/2, \quad f'(x) = \cos x \implies f'(\pi/6) = \frac{\sqrt{3}}{2}$$
$$L(x) = \frac{1}{2} + \frac{\sqrt{3}}{2}\left(x - \frac{\pi}{6}\right) = \frac{1}{2} + \frac{\sqrt{3}}{2}x - \frac{\sqrt{3}\pi}{12}$$

---

## Concavity

Concavity describes the curvature properties of a graph. A function can be concave up or concave down.

> **Figure: Concave up and concave down curves with an inflexion point**
>
> A diagram illustrating concavity with a curved line. The upper portion of the curve is labelled "Concave up (convex)", the lower portion is labelled "Concave down", and the transition point between them is labelled "Inflexion".

### The Second Derivative Test for Concavity

Let $y = f(x)$ be a twice differentiable function on an interval $I$:
1. If $f''(x) > 0$ on $I$, the graph of $f$ on $I$ is **concave up**.
2. If $f''(x) < 0$ on $I$, the graph of $f$ over $I$ is **concave down**.
3. If $f''(x) = 0$ or $f''(x)$ is undefined, these points are known as **inflection points**.

Q. Determine the concavity of $f(x) = x^3 - 3x^2 + 4$.

$$f'(x) = 3x^2 - 6x, \quad f''(x) = 6x - 6$$
Setting $f''(x) = 0 \implies 6(x - 1) = 0 \implies x = 1$.
- For $x > 1$, $f''(x) > 0 \implies$ concave up on $(1, \infty)$.
- For $x < 1$, $f''(x) < 0 \implies$ concave down on $(-\infty, 1)$.

Q. Determine the concavity of $f(x) = x^3 - 6x^2 + 9x + 1$.

$$f'(x) = 3x^2 - 12x + 9, \quad f''(x) = 6x - 12$$
Setting $f''(x) = 0 \implies x = 2$.
- Concave up on $(2, \infty)$.
- Concave down on $(-\infty, 2)$.

Q. Determine the concavity of $f(x) = \ln(x)$ for $x > 0$.

$$f'(x) = \frac{1}{x}, \quad f''(x) = \frac{-1}{x^2}$$
For all $x > 0$, $f''(x) < 0$, hence $f$ is concave down on $(0, \infty)$.

Q. Determine the concavity of $f(x) = e^{-x^2}$.

> **Figure: Box with equation e^(-x^2) != 0**
>
> A small rectangular box enclosing the equation e^(-x^2) != 0.

$$f'(x) = -2x e^{-x^2}$$
$$f''(x) = -2e^{-x^2} - 2x(-2x)e^{-x^2} = 2e^{-x^2}(2x^2 - 1)$$

> **Figure: Number line with points -sqrt(1/2) and sqrt(1/2)**
>
> A horizontal number line marked with points at -\sqrt{\frac{1}{2}} and \sqrt{\frac{1}{2}}.

For $2x^2 - 1 > 0 \implies x^2 > \frac{1}{2}$, $f''(x) > 0$.
For $x^2 < \frac{1}{2}$, $f''(x) < 0$.
- Concave up on $\left(-\infty, -\sqrt{\frac{1}{2}}\right) \cup \left(\sqrt{\frac{1}{2}}, \infty\right)$.
- Concave down on $\left(-\sqrt{\frac{1}{2}}, \sqrt{\frac{1}{2}}\right)$.

Q. Determine the concavity of $f(x) = e^x - x^2$.

> **Figure: Cloud diagram with logarithmic identities**
>
> A cloud-shaped diagram containing two equations: e^(ln x) = x and e^(ln 2) = 2.

$$f'(x) = e^x - 2x, \quad f''(x) = e^x - 2$$
Setting $f''(x) = 0 \implies e^x = 2 \implies x = \ln 2$.
- For $x > \ln 2$, $f''(x) > 0 \implies$ concave up on $(\ln 2, \infty)$.
- For $x < \ln 2$, $f''(x) < 0 \implies$ concave down on $(-\infty, \ln 2)$.
