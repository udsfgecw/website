<!-- page 1 | Page 1 -->

<!-- page 2 | Module-4: -->

# Module-4:

## Taylor Series & Maclaurin Series

If a function $f(x)$ has derivatives of all orders at the point $x=x_0$, then the Taylor series for $f$ at $x_0$ is given by

$$f(x_0) + f'(x_0)(x-x_0) + rac{f''(x_0)}{2!}(x-x_0)^2 + \dots = \sum_{K=0}^{\infty} \frac{f^K(x)}{K!} (x-x_0)^K$$

The case when $x_0 = 0$, then the series become

$$f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \dots = \sum_{K=0}^{\infty} \frac{f^{(k)}(0)}{K!} x^k$$

which is called the Maclaurin's series for $f$.

Q). Find the Maclaurin's series for the function
$f(x) = e^x$.

ans:
$$\begin{aligned}
f(x) &= e^x \implies f(0) = 1 \\
f'(x) &= e^x \implies f'(0) = 1 \\
f''(x) &= e^x \implies f''(0) = 1 \\
&\vdots \\
f^K(x) &= e^x \implies f^K(0) = 1
\end{aligned}$$

$$\therefore \text{Maclaurin series for } e^x \text{ is, } 1 + x + \frac{x^2}{2!} + \dots + \frac{x^K}{K!} + \dots$$

<!-- page 3 | Page 3 -->

Q. Find the Maclaurin's series for $f(x) = 
u\sin x$.

Ans:
$$f(x) = \sin x \implies f(0) = 0$$
$$f'(x) = \cos x \implies f'(0) = 1$$
$$f''(x) = -\sin x \implies f''(0) = 0$$
$$f'''(x) = -\cos x \implies f'''(0) = -1$$
$$f^{(4)}(x) = \sin x \implies f^{(4)}(0) = 0$$
$$\vdots$$
$$f^{(2k+1)}(x) = (-1)^k \cos x \implies f^{(2k+1)}(0) = (-1)^k, \quad k \geqslant 0$$
$$f^{2k}(x) = (-1)^k \sin x \implies f^{2k}(0) = 0, \quad k \geqslant 0$$

$$\therefore \text{ Maclaurin series of } \sin x \text{ is, }$$
$$x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k+1}}{(2k+1)!}$$

Q. Find the Maclaurin series for $\cos x$.

Ans:
$$1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k}}{(2k)!}$$

Q. Find the Maclaurin series for the function
$$f(x) = \frac{1}{1+x}, \quad |x| < 1.$$

Ans:
$$f(x) = \frac{1}{1+x} \implies f(0) = 1$$
$$f'(x) = \frac{-1}{(1+x)^2} \implies f'(0) = -1$$
$$f''(x) = \frac{+2}{[illegible]} \implies f''(0) = 2$$

<!-- page 4 | Page 4 -->

$$f^{\prime\prime\prime}(x) = \frac{-2 \cdot 3}{(1+x)^4} \quad \Rightarrow f^{\prime\prime\prime}(0) = -6 = -3!$$

$$f^{(4)}(x) = \frac{+2 \cdot 3 \cdot 4}{(1+x)^5} \quad \Rightarrow f^{(4)}(0) = 4!$$

$$\vdots$$

$$f^k(x) = \frac{(-1)^k k!}{(1+x)^k} \quad \Rightarrow f^k(0) = (-1)^k k!$$

$$\therefore \text{ The Maclaurin series of } \frac{1}{1+x} \text{ is,}$$

$$~~1 - x + x^2~~ \quad 1 - 1 \times x + \frac{2}{2!} x^2 - \frac{3!}{3!} x^3 + \dots$$

$$\Rightarrow 1 - x + x^2 - x^3 + \dots = \sum_{k=0}^{\infty} (-1)^k x^k.$$

Q. Find the Maclaurin series of

(i) $f(x) = e^{-x}, \quad \forall x \in \mathbb{R}$

(ii) $f(x) = \frac{1}{1-x}, \quad |x| < 1$

ans: (i) $1 - x + \frac{x^2}{2!} - \frac{x^3}{3!} + \dots$

(ii) $1 + x + x^2 + x^3 + \dots$

<!-- page 5 | Page 5 -->

Q. Find the Taylor series for the function $f(x) = \frac{1}{x}$ about the point $x=1$ in the region $|x-1|<1$.

Ans: $f(x) = \frac{1}{x}$, at $x=1$ i.e., $x_0 = 1$.

$f(x) = \frac{1}{x}$, $f(1) = 1$

$f'(x) = \frac{-1}{x^2}$, $f'(1) = -1$

$f''(x) = \frac{2}{x^3}$, $f''(1) = 2$

$f'''(x) = \frac{-3!}{x^4}$, $f'''(1) = -3!$

$f^{(iv)}(x) = \frac{4!}{x^5}$, $f^{(iv)}(1) = 4!$

$\vdots$

$f^k(x) = \frac{(-1)^k k!}{x^k}$, $f^k(1) = (-1)^k k!$, $k \ge 1$.

$\therefore$ Taylor series of $f(x)$ at $x=1$ is,

$1 - (x-1) + (x-1)^2 - (x-1)^3 + \dots = \sum_{k=0}^{\infty} \frac{f^k(1)}{k!} (x-1)^k$.

---

Q. Find the Taylor series of $f(x) = \frac{1}{1+x}$ at $x=1$ in the region $|x-1|<1$.

Ans: $f(x) = \frac{1}{1+x}$ & $x_0 = 1 \Rightarrow f(1) = 1/2$

$f'(x) = \frac{-1}{(1+x)^2} \Rightarrow f'(1) = -1/4$

<!-- page 6 | Page 6 -->

$$f^{\prime\prime}(x) = \frac{2}{(1+x)^3} \implies f^{\prime\prime}(1) = \frac{2}{2^3}$$

$$f^{\prime\prime\prime}(x) = \frac{-3!}{(1+x)^4} \implies f^{\prime\prime\prime}(1) = \frac{-3!}{2^4}$$

$$f^{\text{iv}}(x) = \frac{4!}{(1+x)^5} \implies f^{\text{iv}}(1) = \frac{4!}{2^5}$$

$$\vdots$$

$$f^K(x) = \frac{(-1)^K K!}{(1+x)^{K+1}} \implies f^K(1) = \frac{(-1)^K K!}{2^{K+1}}, \quad K \ge 0$$

$$\therefore \text{ Taylor series of } f(x) = \frac{1}{1+x} \text{ at } x=1 \text{ is,}$$

$$\sum_{K=0}^{\infty} \frac{f^K(1)}{K!} (x-1)^K = \sum_{K=0}^{\infty} \frac{(-1)^K K!}{2^{K+1}} \times \frac{1}{K!} (x-1)^K$$

$$= \sum_{K=0}^{\infty} \frac{(-1)^K}{2^{K+1}} (x-1)^K = \frac{1}{2} - \frac{1}{2^2}(x-1) + \frac{1}{2^3}(x-1)^2 - \dots$$

---

Q). Find the Maclaurin series for the function  
$$f(x) = \frac{3}{2-x} \quad \text{in the region } |x| < 2.$$

ans: $$f(x) = \frac{3}{2-x} = \frac{3}{2} \left( \frac{1}{1 - x/2} \right)$$

Maclaurin series of $\frac{1}{1-x}, \quad |x| < 1$ is

<!-- page 7 | Fourier Series -->

$\therefore |x| < 2, \quad \left|\frac{x}{2}\right| < 1$

$\Rightarrow \text{Replace } x \text{ by } \frac{x}{2} \text{ in } (1),$

$\therefore \text{Maclaurin series of } \frac{3}{2-x} \text{ is,}$

$$\frac{3}{2} \left( 1 + \frac{x}{2} + \left(\frac{x}{2}\right)^2 + \left(\frac{x}{2}\right)^3 + \dots \right)$$

---

## Fourier Series

### Periodic function :

A function $f(x)$ is called a periodic function if $f(x+T) = f(x)$, for a positive number $T$.

smallest such $T$ is called the fundamental period of the periodic function $f(x)$.

### Piecewise continuous :

A function $f(x)$ is said to be piecewise continuous on an interval if it is continuous everywhere on this interval except at a finite number of jump discontinuities.

<!-- page 8 | Definition - Fourier series -->

## Definition - Fourier series

If $f(x)$ is a periodic function with period $2L$, satisfying the Dirichlet conditions:

1. $f(x)$ is piecewise continuous -
2. $f(x)$ has atmost a finite number of maxima & minima

then the Fourier series of $f(x)$ in the interval $[c, c+2L]$ is

$$S(x) = a_0 + rac{n=1}{\sum}^{\infty} \left[a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right)\right]$$

where 

$$a_0 = \frac{1}{2L} \int_{c}^{c+2L} f(x)\,dx$$

$$a_n = \frac{1}{L} \int_{c}^{c+2L} f(x) \cos\left(\frac{n\pi x}{L}\right)\,dx$$

$$b_n = \frac{1}{L} \int_{c}^{c+2L} f(x) \sin\left(\frac{n\pi x}{L}\right)\,dx.$$

These three formulae together are called Euler's formulae.

## Relation between $f(x)$ & its Fourier series $S(x)$

Let $f(x)$ be periodic with period $2L$ & piecewise continuous in the interval $c \le x \le c+2L$. Furthermore, let $f(x)$ have a left-hand derivative $f(x-)$ and a right-hand derivative $f(x+)$ at each point of that interval. Then the

<!-- page 9 | Some special Cases -->

Fourier series $S(x)$ of $f(x)$ converges, and

1). If $f(x)$ is continuous at a point $x$, then $S(x) = f(x)$.  
2). If $f(x)$ is discontinuous at a point $x$, then $S(x) = \frac{f(x^+) + f(x^-)}{2}$.

### Some special Cases

Case-1: $2L = 2\pi$ & $C = -\pi$.

Fourier series of $f(x)$ in the interval $[-\pi, \pi]$ is

$$S(x) = a_0 + \sum_{n=1}^{\infty} [a_n \cos(nx) + b_n \sin(nx)]$$

Where $a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x)\, dx$.

$$a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\, dx .$$

$$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx)\, dx .$$

Q). Find the fourier series of $f(x) = \begin{cases} -k, & -\pi < x < 0 \\ k, & 0 < x < \pi \end{cases}$ in $(-\pi, \pi)$, where $k > 0$. Hence evaluate $1 - \frac{1}{3} + \frac{1}{5} + - \dots$

ans:

$$a_0 = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x)\, dx$$

$$= \frac{1}{\quad} \left[ \int^0 -k\, dx + \int^\pi k\, dx \right]$$

<!-- page 10 | Page 10 -->

$$= \frac{1}{2\pi} \left[ [-kx]_{-\pi}^0 + [kx]_0^\pi \right]$$

$$= \frac{1}{2\pi} \left[ (0 - (-kx-\pi)) + (k\pi - 0) \right] = \frac{1}{2\pi} [\cancel{2k\pi}^0] = 0$$

$$a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) \, dx$$

$$= \frac{1}{\pi} \left[ -\int_{-\pi}^0 k \cos(nx) \, dx + \int_0^\pi k \cos(nx) \, dx \right]$$

$$= \frac{1}{\pi} \left[ \left[ -k \frac{\sin nx}{n} \right]_{-\pi}^0 + \left[ k \frac{\sin nx}{n} \right]_0^\pi \right] = 0$$

$$\cancel{= \frac{1}{\pi} [(0 - 0) + -k [}$$

$$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) \, dx$$

$$= \frac{1}{\pi} \left[ \int_{-\pi}^0 -k \sin(nx) \, dx + \int_0^\pi k \sin(nx) \, dx \right]$$

$$= \frac{1}{\pi} \left[ \left[ k \frac{\cos nx}{n} \right]_{-\pi}^0 + \left[ -k \frac{\cos nx}{n} \right]_0^\pi \right]$$

$$= \frac{1}{\pi} \left[ \frac{k}{n} (1 - \cos(-n\pi)) - \frac{k}{n} (\cos n\pi - 1) \right]$$

$$= \frac{k}{n\pi} [2 - 2\cos(n\pi)] = \frac{2k}{n\pi} (1 - (-1)^n)$$

<!-- page 11 | Page 11 -->

$\therefore$ Fourier series of $f(x)$ is,

$$\begin{aligned}
S(x) &= \sum_{n=1}^{\infty} \frac{2K}{n\pi} \left(1 - (-1)^n\right) \sin(nx) \\
&= \frac{4K}{\pi} \sin x + \frac{4K}{3\pi} \sin 3x + \frac{4K}{5\pi} \sin 5x + \cdots \\
&= \frac{4K}{\pi} \left[ \sin x + \frac{1}{3} \sin 3x + \frac{1}{5} \sin 5x + \cdots \right]
\end{aligned}$$

$\because f(x)$ is continuous at $x = \pi/2$,

$$\begin{aligned}
S(\pi/2) &= f(\pi/2) \\
\frac{4K}{\pi} \left(1 - \frac{1}{3} + \frac{1}{5} - \cdots\right) &= K \\
1 - \frac{1}{3} + \frac{1}{5} - \cdots &= \frac{\pi}{4}
\end{aligned}$$

---

Note:
Let $u', u'', \dots, u^{(n)}$ be derivatives of $u$ &

$v_1 = \int v \, dv$, $v_2 = \int (\int v \, dv)$, $v_3 = \int v_2 \, dv, \dots$

where $u$ is a polynomial.

Then, $\int u v \, dx = u v_1 - u' v_2 + u'' v_3 - \dots + (-1)^n u^{(n-1)} v_n$.

eg:

$$\begin{aligned}
\int x^3 e^{-2x} \, dx &= x^3 \left(\frac{e^{-2x}}{-2}\right) - 3x^2 \left(\frac{e^{-2x}}{4}\right) + 6x \left(\frac{e^{-2x}}{-8}\right) \\
&\quad - 6 \left(\frac{e^{-2x}}{16}\right) + 0 \\
&= - \left( \frac{x^3 e^{-2x}}{2} \right) - \left( \frac{3x^2 e^{-2x}}{4} \right) - \left( \frac{6x e^{-2x}}{8} \right) - \frac{6e^{-2x}}{16}
\end{aligned}$$

<!-- page 12 | Page 12 -->

Q. Find the Fourier series of $x - x^2$ in the interval $(-rac{\pi}{1}, \pi)$ [uncertain: $(-\pi, \pi)$]. Hence evaluate $\frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \frac{1}{4^2} + \dots$

Ans:
$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos(nx) + b_n \sin(nx).$$

$$\begin{aligned}
a_0 &= \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x)\,dx = \frac{1}{2\pi} \int_{-\pi}^{\pi} (x - x^2)\,dx \\
&= \frac{1}{2\pi} \left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_{-\pi}^{\pi} = \frac{1}{2\pi} \left[ \left(\frac{\pi^2}{2} - \frac{\pi^3}{3}\right) - \left(\frac{\pi^2}{2} + \frac{\pi^3}{3}\right) \right] \\
&= \frac{1}{2\pi} \times \frac{-2\pi^3}{3} = \frac{-\pi^2}{3}
\end{aligned}$$

$$\begin{aligned}
a_n &= \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\,dx \\
&= \frac{1}{\pi} \int_{-\pi}^{\pi} (x - x^2) \cos(nx)\,dx \\
&= \frac{1}{\pi} \left[ (x - x^2)\left(\frac{\sin nx}{n}\right) - (1 - 2x)\left(\frac{-\cos nx}{n^2}\right) + (-2)\left(-\frac{\sin nx}{n^3}\right) \right]_{-\pi}^{\pi} \\
&= \frac{1}{\pi} \left[ \left( (\pi - \pi^2)\frac{\sin n\pi}{n} + (1 - 2\pi)\left(\frac{+\cos n\pi}{n^2}\right) + (2)\left(\frac{\sin n\pi}{n^3}\right) \right) \right. \\
&\quad \left. - \left[ (-\pi - \pi^2)\left(\frac{\sin n(-\pi)}{n}\right) + (1 + 2\pi)\left(\frac{\cos n(-\pi)}{n^2}\right) + 2\frac{\sin n(-\pi)}{n^3} \right] \right] \\
&= \frac{1}{\pi} \left[ \left((1 - 2\pi) - (1 + 2\pi)\right) \frac{\cos n(\pi)}{n^2} \right]
\end{aligned}$$

<!-- page 13 | Page 13 -->

$$= \frac{1}{\pi} \left[ -4\pi \times \frac{(-1)^n}{n^2} \right] = \frac{-4(-1)^n}{n^2} .$$

$$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} (x - x^2) \sin(nx) \, dx .$$

$$= \frac{1}{\pi} \left[ (x - x^2)\left(\frac{-\cos nx}{n}\right) - (1 - 2x)\left(\frac{-\sin nx}{n^2}\right) + (-2)\left(\frac{\cos nx}{n^3}\right) \right]_{-\pi}^{\pi}$$

$$= \frac{1}{\pi} \left[ \left[ (\pi - \pi^2)\left(\frac{-\cos n\pi}{n}\right) + (1 - 2\pi)\left(\frac{\sin n\pi}{n}\right) - 2\left(\frac{\cos n\pi}{n^3}\right) \right] - \left[ (-\pi - \pi^2)\left(\frac{-\cos n(-\pi)}{n}\right) + (1 + 2\pi)\left(\frac{\sin n(-\pi)}{n}\right) - 2\left(\frac{\cos n(-\pi)}{n^3}\right) \right] \right]$$

$$= \frac{1}{\pi} \left[ \left( -(\pi - \pi^2) + (-\pi - \pi^2) \right) \left(\frac{\cos(n\pi)}{n}\right) + (-2 + 2)\left(\frac{\cos(n\pi)}{n}\right) \right]$$

$$= \frac{1}{\pi} \left[ -2\pi \frac{(-1)^n}{n} \right] = \frac{-2(-1)^n}{n}$$

$$\therefore \text{Fourier series of } x - x^2 \text{ is,}$$

$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos(nx) + b_n \sin(nx)$$

$$= \frac{-\pi^2}{3} + \sum_{n=1}^{\infty} \frac{-4(-1)^n}{n^2} \cos(nx) + \frac{-2(-1)^n}{n} \sin(nx) .$$

$$= \frac{-\pi^2}{3} + \left[ 4\frac{\cos x}{1^2} - \frac{4\cos 2x}{2^2} + \frac{4\cos 3x}{3^2} - \dots \right]$$

$$+ \left[ \frac{2\sin x}{1} - \frac{2\sin 2x}{2} + \frac{2\sin 3x}{3} - \dots \right]$$

$$= \frac{-\pi^2}{3} + 4 \left[ \frac{\cos x}{1^2} - \frac{\cos 2x}{2^2} + \frac{\cos 3x}{3^2} - \dots \right] + 2 \left[ \frac{\sin x}{1} - \frac{\sin 2x}{2} + \dots \right]$$

<!-- page 14 | Page 14 -->

$\because f(x)$ is continuous at $x=0$, $f(0) = S(0)$.

$$\Rightarrow f(0) = 0$$

$$\therefore S(0) = 0 = \frac{-\pi^2}{3} + 4 \left[ \frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \dots \right]$$

$$\frac{\pi^2}{3} = 4 \left[ \frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \dots \right]$$

$$\Rightarrow \frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \frac{1}{4^2} + \dots = \frac{\pi^2}{12}$$

Q. Find the Fourier series of $f(x) = |x|$ in $[-\pi, \pi]$.

Hence evaluate $1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots$

Q. Find the Fourier series of $f(x) = x \sin x$, $-\pi < x < \pi$.

Hence evaluate

(i) $1 + \frac{2}{1 \cdot 3} - \frac{2}{3 \cdot 5} + \frac{2}{5 \cdot 7} - \dots$

(ii). $\frac{1}{1 \cdot 3} - \frac{1}{2 \cdot 4} + \frac{1}{3 \cdot 5} - \dots$

<!-- page 15 | Page 15 -->

Case-2: $2L = 2rac{1}{2}$? no, $2L = 2\pi$ and $c=0$.

Fourier series of $f(x)$ in the interval $[0, 2\pi]$ is

$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos(nx) + b_n \sin(nx),$$

where $a_0 = \frac{1}{2\pi} \int_{0}^{2\pi} f(x)\,dx$.

$$a_n = \frac{1}{\pi} \int_{0}^{2\pi} f(x) \cos(nx)\,dx, \quad b_n = \frac{1}{\pi} \int_{0}^{2\pi} f(x) \sin(nx)\,dx.$$

Q. Find the Fourier series of periodic square wave of amplitude $k$ in the interval $[0, 2\pi]$. Hence evaluate $1 - \frac{1}{3} + \frac{1}{5} - \cdots$

$$f(x) = \begin{cases} k, & 0 \le x < \pi/2 \\ -k, & \pi/2 \le x < 3\pi/2 \\ k, & 3\pi/2 \le x < 2\pi \end{cases}$$

Ans:

$$a_0 = \frac{1}{2\pi} \int_{0}^{2\pi} f(x)\,dx = \frac{1}{2\pi} \left[ \int_{0}^{\pi/2} k\,dx + \int_{\pi/2}^{3\pi/2} -k\,dx + \int_{3\pi/2}^{2\pi} k\,dx \right]$$

$$= \frac{k}{2\pi} \left[ \left(\frac{\pi}{2} - 0\right) - \left(\frac{3\pi}{2} - \frac{\pi}{2}\right) + \left(2\pi - \frac{3\pi}{2}\right) \right]$$

$$= \frac{k}{2\pi} \left[ \frac{\pi}{2} - \frac{2\pi}{2} + \frac{\pi}{2} \right] = \frac{k}{2\pi} [\pi - \pi] = 0.$$

$$a_n = \frac{1}{\pi} \int_{0}^{2\pi} f(x) \cos(nx)\,dx = \frac{k}{\pi} \left[ \int_{0}^{\pi/2} \cos nx\,dx - \int_{\pi/2}^{3\pi/2} \cos nx\,dx + \int_{3\pi/2}^{2\pi} \cos nx\,dx \right]$$

$$= \frac{k}{\pi} \left[ \left[ \frac{\sin nx}{n} \right]_{0}^{\pi/2} - \left[ \frac{\sin nx}{n} \right]_{\pi/2}^{3\pi/2} + \left[ \frac{\sin nx}{n} \right]_{3\pi/2}^{2\pi} \right]$$

$$= \frac{k}{n\pi} \left[ 2\sin \frac{n\pi}{2} - 2\sin \frac{3n\pi}{2} \right] = -\frac{4k}{n\pi} \cos n\pi \sin \frac{n\pi}{2} \quad \left(\begin{array}{l} \text{By using} \\ \sin A - \sin B \end{array}\right)$$

$\sin \frac{n\pi}{2} = 0$ when $n$ is even $\& \cos n\pi = -1$, when $n$ is odd.

<!-- page 16 | Page 16 -->

$\therefore a_n = \begin{cases} 0, & \text{if } n \text{ is even} \\ \frac{4K}{n\pi} \sin \frac{n\pi}{2}, & \text{if } n \text{ is odd} . \end{cases}$

$b_n = \frac{1}{\pi} \int_{0}^{2\pi} f(x) \sin(nx) \, dx = \frac{K}{\pi} \left[ \int_{0}^{\pi/2} \sin nx \, dx - \int_{\pi/2}^{3\pi/2} \sin nx \, dx + \int_{3\pi/2}^{2\pi} \sin nx \, dx \right]$

$= \frac{-K}{n\pi} \left[ [\cos nx]_{0}^{\pi/2} - \left. \cos nx \right]_{\pi/2}^{3\pi/2} + \left. \cos nx \right]_{3\pi/2}^{2\pi} \right]$

$= \frac{-K}{n\pi} \left[ \left(\cos \frac{n\pi}{2} - 1\right) - \left(\cos \frac{3n\pi}{2} - \cos \frac{n\pi}{2}\right) + \left(\cos 2n\pi - \cos \frac{3n\pi}{2}\right) \right]$

$= \frac{-K}{n\pi} \left[ 2\cos \frac{n\pi}{2} - 2\cos \frac{3n\pi}{2} \right] = \frac{-4K}{n\pi} \sin n\pi \sin \frac{n\pi}{2} = 0$

$\therefore S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos nx + b_n \sin nx$

$= \sum_{n=1,3,5,\dots}^{\infty} \frac{4K}{n\pi} \sin \frac{n\pi}{2} \cos nx$

$= \frac{4K}{\pi} \left[ \frac{\cos x}{1} - \frac{\cos 3x}{3} + \frac{\cos 5x}{5} - \dots \right]$

$\therefore f(x)$ is continuous at $0$, $f(0) = S(0)$.

$K = \frac{4K}{\pi} \left[ \frac{1}{1} - \frac{1}{3} + \frac{1}{5} - \dots \right]$

$\Rightarrow 1 - \frac{1}{3} + \frac{1}{5} - \dots = \frac{\pi}{4}$

<!-- page 17 | Page 17 -->

**Problem 4.2.7.** Find the Fourier series of the function $f(x) = \frac{(\pi - x)^2}{4}$ with period $2\pi$ in $[0, 2\pi]$. Hence evaluate $\sum_{n=1}^{\infty} \frac{1}{n^2}$.

**Solution.** Fourier series is $S(x) = a_0 + \sum_{n=1}^{\infty} [a_n \cos nx + b_n \sin nx]$

$$a_0 = \frac{1}{2\pi} \int_0^{2\pi} f(x) \, dx$$

<!-- page 18 | Page 18 -->

$$\begin{aligned}
&= \frac{1}{2\pi} \int_{0}^{2\pi} \frac{(\pi - x)^{2}}{4} \, dx \\[6pt]
&= \frac{1}{8\pi} \left[ \frac{(\pi - x)^{3}(-1)}{3} \right]_{0}^{2\pi} \\[6pt]
&= -\frac{1}{24\pi} \left[ (-\pi)^{3} - \pi^{3} \right] \\[6pt]
&= -\frac{1}{24\pi} \left[ -2\pi^{3} \right] = \frac{\pi^{2}}{12}
\end{aligned}$$

$$\begin{aligned}
a_{n} &= \frac{1}{\pi} \int_{0}^{2\pi} f(x) \cos nx \, dx = \frac{1}{\pi} \int_{0}^{2\pi} \frac{(\pi - x)^{2}}{4} \cos nx \, dx \\[6pt]
&= \frac{1}{4\pi} \left[ (\pi - x)^{2} \left( \frac{\sin nx}{n} \right) - [2(\pi - x)(-1)] \left( -\frac{\cos nx}{n^{2}} \right) + [(-2)(-1)] \left( -\frac{\sin nx}{n^{3}} \right) \right]_{0}^{2\pi} \\[6pt]
&= \frac{1}{4\pi} \left[ \frac{(\pi - x)^{2} \sin nx}{n} - \frac{2(\pi - x) \cos nx}{n^{2}} - \frac{2 \sin nx}{n^{3}} \right]_{0}^{2\pi} \\[6pt]
&= \frac{1}{4\pi} \left[ \left( 0 - \frac{2(-\pi)}{n^{2}} - 0 \right) - \left( 0 - \frac{2\pi}{n^{2}} - 0 \right) \right] \\[6pt]
&= \frac{1}{4\pi} \left[ \frac{2\pi}{n^{2}} + \frac{2\pi}{n^{2}} \right] = \frac{1}{n^{2}}
\end{aligned}$$

$$\begin{aligned}
b_{n} &= \frac{1}{\pi} \int_{0}^{2\pi} f(x) \sin nx \, dx = \frac{1}{\pi} \int_{0}^{2\pi} \frac{(\pi - x)^{2}}{4} \sin nx \, dx \\[6pt]
&= \frac{1}{4\pi} \left[ (\pi - x)^{2} \left( -\frac{\cos nx}{n} \right) - [2(\pi - x)(-1)] \left( -\frac{\sin nx}{n^{2}} \right) + [(-2)(-1)] \left( \frac{\cos nx}{n^{3}} \right) \right]_{0}^{2\pi} \\[6pt]
&= \frac{1}{4\pi} \left[ \frac{(\pi - x)^{2} \cos nx}{n} - \frac{2(\pi - x) \sin nx}{n^{2}} + \frac{2 \cos nx}{n^{3}} \right]_{0}^{2\pi} \\[6pt]
&= \frac{1}{4\pi} \left[ \left( -\frac{\pi^{2}}{n} - 0 + \frac{2}{n^{3}} \right) - \left( -\frac{\pi^{2}}{n} - 0 + \frac{2}{n^{3}} \right) \right] = 0
\end{aligned}$$

Fourier series is,

$$S(x) = a_{0} + \sum_{n=1}^{\infty} [a_{n} \cos nx + b_{n} \sin nx]$$

<!-- page 19 | Page 19 -->

$$= \frac{\pi^2}{12} + \sum_{n=1}^{\infty} \frac{1}{n^2} \cos nx$$

![Graph of the periodic function (pi-x)^2 / 4](/assets/notes/me/s1/maths/module-4/fn-pi-minus-x-squared.svg)

Figure 4.7 : Graph of the periodic function $\frac{(\pi - x)^2}{4}$

Since $f(x)$ is continuous at $0$,

$$f(0) = S(0)$$
$$\frac{\pi^2}{4} = \frac{\pi^2}{12} + \sum_{n=1}^{\infty} \frac{1}{n^2}$$
$$\frac{\pi^2}{4} - \frac{\pi^2}{12} = \sum_{n=1}^{\infty} \frac{1}{n^2}$$
$$\frac{\pi^2}{6} = \sum_{n=1}^{\infty} \frac{1}{n^2}$$

Case 3: $2L \equiv 2l$ and $c \equiv -l$

Fourier series of $f(x)$ in the interval $[-l, l]$ is

$$S(x) = a_0 + \sum_{n=1}^{\infty} \left[a_n \cos \frac{n\pi x}{l} + b_n \sin \frac{n\pi x}{l}\right] \quad \text{where}$$

$$a_0 = \frac{1}{2l} \int_{-l}^{l} f(x)\, dx$$

$$a_n = \frac{1}{l} \int_{-l}^{l} f(x) \cos \frac{n\pi x}{l}\, dx, \quad b_n = \frac{1}{l} \int_{-l}^{l} f(x) \sin \frac{n\pi x}{l}\, dx$$

<!-- page 20 | Page 20 -->

**Problem 4.2.8.** Find the Fourier series of the periodic function $f(x)$ given by

$$f(x) = \begin{cases} -x & \text{if } -l \le x < 0 \\ \pi + x & \text{if } 0 \le x < l \end{cases}$$

Hence evaluate $1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots$

**Solution.** Fourier series, $S(x) = a_0 + \sum_{n=1}^{\infty} \left[a_n \cos \frac{n\pi x}{l} + b_n \sin \frac{n\pi x}{l}\right]$

$$a_0 = \frac{1}{2l} \int_{-l}^{l} f(x)\,dx$$

$$= \frac{1}{2l} \left[ \int_{-l}^{0} (-x)\,dx + \int_{0}^{l} (\pi + x)\,dx \right]$$

$$= \frac{1}{2l} \left[ \left. -\frac{x^2}{2} \right|_{-l}^{0} + \left. \pi x + \frac{x^2}{2} \right|_{0}^{l} \right]$$

$$= \frac{1}{2l} \left[ \frac{l^2}{2} + \left( \pi l + \frac{l^2}{2} \right) \right] = \frac{1}{2} (\pi + l)$$

$$a_n = \frac{1}{l} \int_{-l}^{l} f(x) \cos \frac{n\pi x}{l}\,dx$$

$$= \frac{1}{l} \left[ \int_{-l}^{0} (-x) \cos \frac{n\pi x}{l}\,dx + \int_{0}^{l} (\pi + x) \cos \frac{n\pi x}{l}\,dx \right]$$

$$= \frac{1}{l} \left[ \int_{0}^{l} x \cos \frac{n\pi x}{l}\,dx + \int_{0}^{l} (\pi + x) \cos \frac{n\pi x}{l}\,dx \right]$$

$$= \frac{1}{l} \left[ 2 \int_{0}^{l} x \cos \frac{n\pi x}{l}\,dx + \int_{0}^{l} \pi \cos \frac{n\pi x}{l}\,dx \right]$$

$$= \frac{1}{l} \left[ \int_{0}^{l} (2x + \pi) \cos \frac{n\pi x}{l}\,dx \right]$$

$$= \frac{1}{l} \left[ (2x + \pi) \left( \frac{l}{n\pi} \sin \frac{n\pi x}{l} \right) + 2 \left(\frac{l}{n\pi}\right)^2 \cos \frac{n\pi x}{l} \right]_{0}^{l}$$

<!-- page 21 | Page 21 -->

$$= \frac{1}{l}\left[0 + 2\left(\frac{l}{n\pi}\right)^2 \cos n\pi - \left(0 + 2\left(\frac{l}{n\pi}\right)^2\right)\right]$$
$$= \frac{2l}{n^2\pi^2}(\cos n\pi - 1) = \frac{2l}{n^2\pi^2}[(-1)^n - 1]$$

$$a_n = \begin{cases} 0 & \text{if } n \text{ even} \\ \dfrac{-4l}{n^2\pi^2} & \text{if } n \text{ odd} \end{cases}$$

$$b_n = \frac{1}{l} \int_{-l}^{l} f(x) \sin \frac{n\pi x}{l} \, dx$$
$$= \frac{1}{l} \left[ \int_{-l}^{0} (-x) \sin \frac{n\pi x}{l} \, dx + \int_{0}^{l} (\pi + x) \sin \frac{n\pi x}{l} \, dx \right]$$
$$= \frac{1}{l} \left[ -\int_{0}^{l} x \sin \frac{n\pi x}{l} \, dx + \int_{0}^{l} (\pi + x) \sin \frac{n\pi x}{l} \, dx \right]$$
$$= \frac{\pi}{l} \int_{0}^{l} \sin \frac{n\pi x}{l} \, dx = -\frac{\pi}{l} \frac{l}{n\pi} \left. \cos \frac{n\pi x}{l} \right|_0^l$$
$$= -\frac{1}{n} (\cos \pi n - 1) = \frac{1}{n} [1 - (-1)^n]$$

$$b_n = \begin{cases} 0 & \text{if } n \text{ even} \\ \dfrac{2}{n} & \text{if } n \text{ odd} \end{cases}$$

Fourier series is,

$$S(x) = a_0 + \sum_{n=1}^{\infty} \left[a_n \cos \frac{n\pi x}{l} + b_n \sin \frac{n\pi x}{l}\right]$$
$$= \frac{l}{2}(\pi + l) + \sum_{n=1,3,5,\dots} \left[ -\frac{4l}{n^2\pi^2} \cos nx + \frac{2}{n} \sin \frac{n\pi x}{l} \right]$$
$$= \frac{l}{2}(\pi + l) + \sum_{n=1,3,5,\dots} -\frac{4l}{n^2\pi^2} \cos nx + \sum_{n=1,3,5,\dots} \frac{2}{n} \sin \frac{n\pi x}{l}$$

<!-- page 22 | Page 22 -->

Since $f(x)$ is discontinuous at $0$,

$$\begin{aligned}
\frac{f(0^+) + f(0^-)}{2} &= S(0) \\
\frac{\pi + 0}{2} &= \frac{1}{2}(\pi + l) + \sum_{n=1,3,5,\cdots} \frac{-4l}{n^2\pi^2} \cos 0 \\
\frac{\pi}{2} &= \frac{1}{2}(\pi + l) - \frac{4l}{\pi^2} \left[1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots\right] \\
-\frac{l}{2} &= -\frac{4l}{\pi^2} \left[1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots\right] \\
\frac{\pi^2}{8} &= 1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots
\end{aligned}$$

Problem 4.2.9. Find the Fourier series of the periodic function $f(x)$ given by,

$$f(x) = \begin{cases} 2 & \text{if } -2 \le x < 0 \\ x & \text{if } 0 \le x < 2 \end{cases}$$

Hence evaluate (i) $1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots$ and (ii) $1 - \frac{1}{3} + \frac{1}{5} - +\cdots$

☞ For python implementation of the problem, refer page 191.)

Solution. Here $2L = 4 \implies L = 2$ and $C = -2$.

<!-- page 23 | Page 23 -->

The Fourier series is $S(x) = a_0 + \sum_{n=1}^{\infty} \left[a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right)\right]$

$$a_0 = \frac{1}{2L} \int_{c}^{c+2L} f(x) \, dx = \frac{1}{4} \int_{-2}^{2} f(x) \, dx = \frac{1}{4} \left[ \int_{-2}^{0} 2 \, dx + \int_{0}^{2} x \, dx \right]$$
$$= \frac{1}{4} \left[ 2x\Big|_{-2}^{0} + \frac{x^2}{2}\Big|_{0}^{2} \right] = \frac{1}{4} [2(0 - (-2)) + (2 - 0)] = \frac{3}{2}$$

$$a_n = \frac{1}{L} \int_{c}^{c+2L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx = \frac{1}{2} \int_{-2}^{2} f(x) \cos\left(\frac{n\pi x}{2}\right) \, dx$$
$$= \frac{1}{2} \left[ \int_{-2}^{0} 2 \cos\left(\frac{n\pi x}{2}\right) \, dx + \int_{0}^{2} x \cos\left(\frac{n\pi x}{2}\right) \, dx \right]$$
$$= \frac{1}{2} \left[ 2 \left(\frac{2}{n\pi}\right) \sin\left(\frac{n\pi x}{2}\right)\Big|_{-2}^{0} + \left[ x \left(\frac{2}{n\pi}\right) \sin\left(\frac{n\pi x}{2}\right) - (1) \left(\frac{2}{n\pi}\right)^2 \left(-\cos\frac{n\pi x}{2}\right) \right]_0^2 \right]$$
$$= \frac{1}{2} \left[ \frac{4}{n\pi} \sin\left(\frac{n\pi x}{2}\right)\Big|_{-2}^{0} + \left[ \frac{2x}{n\pi} \sin\left(\frac{n\pi x}{2}\right) + \frac{4}{n^2\pi^2} \cos\left(\frac{n\pi x}{2}\right) \right]_0^2 \right]$$
$$= \frac{1}{2} \left[ \frac{4}{n\pi} [0 - 0] + \left[ \left(0 + \frac{4(-1)^n}{n^2\pi^2}\right) - \left(0 + \frac{4}{n^2\pi^2}\right) \right] \right]$$
$$= \frac{2}{n^2\pi^2} \left[(-1)^n - 1\right]$$

$$b_n = \frac{1}{L} \int_{c}^{c+2L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx = \frac{1}{2} \int_{-2}^{2} f(x) \sin\left(\frac{n\pi x}{2}\right) \, dx$$
$$= \frac{1}{2} \left[ \int_{-2}^{0} (2) \sin\left(\frac{n\pi x}{2}\right) \, dx + \int_{0}^{2} (x) \sin\left(\frac{n\pi x}{2}\right) \, dx \right]$$
$$= \frac{1}{2} \left[ 2 \left(\frac{2}{n\pi}\right) \left(-\cos\left(\frac{n\pi x}{2}\right)\right)\Big|_{-2}^{0} \right.$$
$$\left. + \left[ x \left(\frac{2}{n\pi}\right) \left(-\cos\left(\frac{n\pi x}{2}\right)\right) + \left(\frac{2}{n\pi}\right)^2 \left(\sin\frac{n\pi x}{2}\right) \right]_0^2 \right]$$

<!-- page 24 | Page 24 -->

$$= \frac{1}{2} \left[ \left[ -\frac{4}{n\pi} \cos \left(\frac{n\pi x}{2}\right) \right]_{-2}^{0} + \left[ -\frac{2x}{n\pi} \cos \left(\frac{n\pi x}{2}\right) + \frac{4}{n^2\pi^2} \sin \left(\frac{n\pi x}{2}\right) \right]_{0}^{2} \right]$$
$$= \frac{1}{2} \left[ \left( -\frac{4}{n\pi} \right) - \left( -\frac{4(-1)^n}{n\pi} \right) + \left[ \left( -\frac{4(-1)^n}{n\pi} \right) + 0 - (0 + 0) \right] \right]$$
$$= -\frac{2}{n\pi}$$

Fourier series of given periodic function is,

$$S(x) = a_0 + \sum_{n=1}^{\infty} \left[ a_n \cos \frac{n\pi x}{2} + b_n \sin \frac{n\pi x}{2} \right]$$
$$= \frac{3}{2} + \sum_{n=1}^{\infty} \frac{2}{n^2\pi^2} [(-1)^n - 1] \cos \left(\frac{n\pi x}{2}\right) - \frac{2}{n\pi} \sin \left(\frac{n\pi x}{2}\right)$$
$$= \frac{3}{2} - \frac{4}{\pi^2} \left[ \cos \left(\frac{\pi x}{2}\right) + \frac{1}{3^2} \cos \left(\frac{3\pi x}{2}\right) + \frac{1}{5^2} \cos \left(\frac{5\pi x}{2}\right) + \dots \right]$$
$$- \frac{2}{\pi} \left[ \sin \left(\frac{\pi x}{2}\right) + \frac{1}{2} \sin \left(\frac{2\pi x}{2}\right) + \frac{1}{3} \sin \left(\frac{3\pi x}{2}\right) + \dots \right]$$

![Graph of periodic function f(x)](/assets/notes/me/s1/maths/module-4/fn-ramp-flat.svg)

**Figure 4.9** : Graph of periodic function $f(x)$

Since $f(x)$ is discontinuous at $x = 0$

$$\frac{f(0+) + f(0-)}{2} = S(0)$$
$$\frac{0 + 2}{2} = \frac{3}{2} - \frac{4}{\pi^2} \left[ 1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots \right]$$
$$1 - \frac{3}{2} = -\frac{4}{\pi^2} \left[ 1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots \right]$$

<!-- page 25 | Page 25 -->

$$\frac{1}{2} = \frac{4}{\pi^2} \left[ 1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots \right]$$
$$\frac{\pi^2}{8} = 1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots$$

Since $f(x)$ is continuous at $x = 1$

$$f(1) = S(1)$$
$$1 = \frac{3}{2} - \frac{2}{\pi} \left[ \sin\left(\frac{\pi}{2}\right) + \frac{1}{2}\sin\left(\frac{2\pi}{2}\right) + \frac{1}{3}\sin\left(\frac{3\pi}{2}\right) + \dots \right]$$
$$1 - \frac{3}{2} = -\frac{2}{\pi} \left[ 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \dots \right]$$
$$\frac{1}{2} = \frac{2}{\pi} \left[ 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \dots \right]$$
$$\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \dots$$

<!-- page 26 | Page 26 -->

**Problem 4.2.10.** Find the Fourier series of the function $f(x) = x|x|$ in the interval $(-1, 1)$.

**Solution.** Here $2L = 2 \implies L = 1$ and $C = -1$.

The Fourier series is

$$S(x) = a_0 + \sum_{n=1}^{\infty} \left[ a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right]$$
$$= a_0 + \sum_{n=1}^{\infty} \left[ a_n \cos(n\pi x) + b_n \sin(n\pi x) \right]$$

Where,

$$a_0 = \frac{1}{2L} \int_{c}^{c+2L} f(x)\,dx$$
$$= \frac{1}{2} \int_{-1}^{1} x|x|\,dx = 0 \text{ (since } x|x| \text{ is an odd function)}$$

$$a_n = \frac{1}{L} \int_{c}^{c+2L} f(x) \cos\frac{n\pi x}{L}\,dx$$
$$= \frac{1}{1} \int_{-1}^{1} x|x| \cos\frac{n\pi x}{1}\,dx$$
$$= \int_{-1}^{1} x|x| \cos n\pi x\,dx$$
$$= 0 \cdot (\text{since } x|x| \cos n\pi x \text{ is an odd function)}$$

$$b_n = \frac{1}{L} \int_{c}^{c+2L} f(x) \sin\frac{n\pi x}{L}\,dx$$
$$= \frac{1}{1} \int_{-1}^{1} x|x| \sin\frac{n\pi x}{1}\,dx$$
$$= \int_{-1}^{1} x|x| \sin n\pi x\,dx$$

<!-- page 27 | Page 27 -->

$$= 2 \int_{0}^{1} x|x| \sin n\pi x \, dx \quad \text{(since } x|x| \sin n\pi x \text{ is an even function)}$$

$$= 2 \int_{0}^{1} xx \sin n\pi x \, dx \quad \text{(since } |x| = x \text{ if } x > 0)$$

$$= 2 \int_{0}^{1} x^{2} \sin n\pi x \, dx$$

$$= 2 \left[ x^{2} \frac{-\cos n\pi x}{n\pi} - 2x \frac{-\sin n\pi x}{n^{2}\pi^{2}} + 2 \frac{\cos n\pi x}{n^{3}\pi^{3}} \right]_{0}^{1}$$

$$= 2 \left[ 1^{2} \frac{-\cos n\pi}{n\pi} + 2 \frac{\sin n\pi}{n^{2}\pi^{2}} + 2 \frac{\cos n\pi}{n^{3}\pi^{3}} - \left(0 + 0 + 2 \frac{\cos 0}{n^{3}\pi^{3}}\right) \right]$$

$$= 2 \left[ \frac{-(-1)^{n}}{n\pi} + 0 + 2 \frac{(-1)^{n}}{n^{3}\pi^{3}} - \left(\frac{2}{n^{3}\pi^{3}}\right) \right]$$

$$= 2 \left[ \frac{(-1)^{n+1}}{n\pi} + \frac{2}{n^{3}\pi^{3}} ((-1)^{n} - 1) \right]$$

Fourier series of given periodic function is,

$$S(x) = a_{0} + \sum_{n=1}^{\infty} [a_{n} \cos (n\pi x) + b_{n} \sin (n\pi x)]$$

$$= \sum_{n=1}^{\infty} 2 \left[ \frac{(-1)^{n+1}}{n\pi} + \frac{2}{n^{3}\pi^{3}} ((-1)^{n} - 1) \right] \sin (n\pi x)$$

<!-- page 28 | Page 28 -->

**Case 4: $2L = 2l$ and $c = 0$**

Fourier series of $f(x)$ in the interval $[0, 2l]$ is

$$S(x) = a_0 + \sum_{n=1}^{\infty} \left[a_n \cos\left(\frac{n\pi x}{l}\right) + b_n \sin\left(\frac{n\pi x}{l}\right)\right] \quad \text{where}$$

$$a_0 = \frac{1}{2l} \int_0^{2l} f(x)\,dx$$

$$a_n = \frac{1}{l} \int_0^{2l} f(x) \cos\frac{n\pi x}{l}\,dx$$

$$b_n = \frac{1}{l} \int_0^{2l} f(x) \sin\frac{n\pi x}{l}\,dx$$

**Problem 4.2.11.** Find the Fourier series of $2x - x^2$ in the interval $(0, 3)$. Hence evaluate (i) $\frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \frac{1}{4^2} + \cdots$, (ii) $\frac{1}{1^2} + \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \cdots$ and (iii) $\frac{1}{1^2} + \frac{1}{3^2} + \frac{1}{5^2} + \frac{1}{7^2} \cdots$

**Solution.** Here $C = 0$ and $2L = 3 \implies L = \frac{3}{2}$.

The Fourier series is

$$S(x) = a_0 + \sum_{n=1}^{\infty} \left[a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right)\right]$$

$$= a_0 + \sum_{n=1}^{\infty} \left[a_n \cos\frac{2n\pi x}{3} + b_n \sin\frac{2n\pi x}{3}\right]$$

Where

$$a_0 = \frac{1}{2L} \int_0^{2L} f(x)\,dx$$

$$= \frac{1}{3} \left[\int_0^{3} (2x - x^2)\,dx\right]$$

$$= \frac{1}{3} \left[x^2 - \frac{x^3}{3}\right]_0^3 = 0$$

<!-- page 29 | Page 29 -->

$$
\begin{aligned}
a_n &= \frac{1}{L} \int_{0}^{2L} f(x) \cos \frac{n\pi x}{L} dx \\
&= \frac{2}{3} \int_{0}^{3} (2x - x^2) \cos \frac{2n\pi x}{3} dx \\
&= \frac{2}{3} \left[ (2x - x^2) \frac{3}{2n\pi} \sin \frac{2n\pi x}{3} - (2 - 2x) \left(\frac{3}{2n\pi}\right)^2 \left(-\cos \frac{2n\pi x}{3}\right) \right. \\
&\qquad \left. + (-2) \left(\frac{3}{2n\pi}\right)^3 \left(-\sin \frac{2n\pi x}{3}\right) \right]_0^3 \\
&= \frac{2}{3} \left[ 0 - (-4) \left(\frac{3}{2n\pi}\right)^2 (-\cos 2n\pi) + 0 - \left( 0 - 2 \left(\frac{3}{2n\pi}\right)^2 (-1) + 0 \right) \right] \\
&= \frac{2}{3} \left[ -4 \left(\frac{3}{2n\pi}\right)^2 - 2 \left(\frac{3}{2n\pi}\right)^2 \right] \\
&= \frac{2}{3} \cdot \frac{9}{4n^2\pi^2} [-6] = -\frac{9}{n^2\pi^2}
\end{aligned}
$$

$$
\begin{aligned}
b_n &= \frac{1}{L} \int_{0}^{2L} f(x) \sin \frac{n\pi x}{L} dx \\
&= \frac{2}{3} \int_{0}^{3} (2x - x^2) \sin \frac{2n\pi x}{3} dx \\
&= \frac{2}{3} \left[ (2x - x^2) \frac{3}{2n\pi} \left(-\cos \frac{2n\pi x}{3}\right) - (2 - 2x) \left(\frac{3}{2n\pi}\right)^2 \left(-\sin \frac{2n\pi x}{3}\right) \right. \\
&\qquad \left. + (-2) \left(\frac{3}{2n\pi}\right)^3 \left(\cos \frac{2n\pi x}{3}\right) \right]_0^3 \\
&= \frac{2}{3} \left[ (-3) \frac{3}{2n\pi} (-1) - 0 + (-2) \left(\frac{3}{2n\pi}\right)^3 (1) - \left( 0 + 0 + (-2) \left(\frac{3}{2n\pi}\right)^3 (1) \right) \right] \\
&= \frac{2}{3} \left[ \frac{9}{2n\pi} \right] = \frac{3}{n\pi}
\end{aligned}
$$

<!-- page 30 | Page 30 -->

Fourier series is,

$$S(x) = a_0 + rac{9}{n^2\pi^2} \dots$$

$$S(x) = a_0 + \sum_{n=1}^{\infty} \left[a_n \cos \frac{2n\pi x}{3} + b_n \sin \frac{2n\pi x}{3}\right]$$

$$= \sum_{n=1}^{\infty} \left[-\frac{9}{n^2\pi^2} \cos \frac{2n\pi x}{3} + \frac{3}{n\pi} \sin \frac{2n\pi x}{3}\right]$$

![Graph of the periodic function 2x - x^2 showing parabolas repeating with period 3](/assets/notes/me/s1/maths/module-4/fn-parabola-period3.svg)

Figure 4.12 : Graph of periodic function $2x - x^2$

(i) Since $f(x)$ is continuous at $\frac{3}{2}$,

$$f(3/2) = S(3/2)$$

$$2\frac{3}{2} - \left(\frac{3}{2}\right)^2 = \sum_{n=1}^{\infty} \left[-\frac{9}{n^2\pi^2} \cos n\pi + \frac{3}{n\pi} \sin n\pi\right]$$

$$3 - \frac{9}{4} = -\frac{9}{\pi^2} \sum_{n=1}^{\infty} \frac{1}{n^2}(-1)^n$$

$$\frac{3}{4} = -\frac{9}{\pi^2} \left[-\frac{1}{1^2} + \frac{1}{2^2} - \frac{1}{3^2} + \frac{1}{4^2} - + \dots\right]$$

$$\frac{\pi^2}{12} = \frac{1}{1^2} - \frac{1}{2^2} + \frac{1}{3^2} - \frac{1}{4^2} + - \dots$$

(ii) Since $f(x)$ is discontinuous at $0$,

$$\frac{f(0^+) + f(0^-)}{2} = S(0)$$

<!-- page 31 | Page 31 -->

$$\frac{0 + -3}{2} = \sum_{n=1}^{\infty}\left[-\frac{9}{n^2\pi^2}\cos 0 + \frac{3}{n\pi}\sin 0\right]$$

$$-\frac{3}{2} = -\frac{9}{\pi^2}\sum_{n=1}^{\infty}\frac{1}{n^2}$$

$$\frac{\pi^2}{6} = \sum_{n=1}^{\infty}\frac{1}{n^2} = \frac{1}{1^2} + \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \cdots$$

Sum of (i) and (ii) gives

$$\frac{1}{1^2} + \frac{1}{3^2} + \frac{1}{5^2} + \frac{1}{7^2} \cdots = \frac{\pi^2}{8}$$

**Problem 4.2.12.** Find the Fourier series of $e^{-x}$ in the interval $(0, 2)$.

**Solution.** Here $C = 0$ and $2L = 2 \implies L = 1$.

![Graph of periodic function e^-x showing a repeating decaying exponential curve over intervals of length 2](/assets/notes/me/s1/maths/module-4/fn-exp-neg-period2.svg)

**Figure 4.13** : Graph of periodic function $e^{-x}$

The Fourier series is

$$S(x) = a_0 + \sum_{n=1}^{\infty}\left[a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right)\right]$$

$$= a_0 + \sum_{n=1}^{\infty}\left[a_n \cos(n\pi x) + b_n \sin(n\pi x)\right]$$

Where,

$$a_0 = \frac{1}{2L}\int_{0}^{2L} f(x)\,dx$$

<!-- page 32 | Page 32 -->

$$= \frac{1}{2} \left[ \int_{0}^{2} e^{-x} dx \right]$$
$$= \frac{1}{2} \left[ \frac{e^{-x}}{-1} \right]_{0}^{2}$$
$$= \frac{-1}{2} \left[ e^{-2} - 1 \right] = \frac{1 - e^{-2}}{2}$$

$$a_n = \frac{1}{L} \int_{0}^{2L} f(x) \cos \frac{n\pi x}{L} dx$$
$$= \frac{1}{1} \int_{0}^{2} e^{-x} \cos n\pi x dx$$
$$= \left[ \frac{e^{-x}}{(-1)^2 + (n\pi)^2} (-\cos n\pi x + n\pi \sin n\pi x) \right]_{0}^{1}$$
$$= \frac{1}{(-1)^2 + (n\pi)^2} \left[ e^{-1}(-\cos n\pi + n\pi \sin n\pi) - (e^0(-1 + 0)) \right]$$
$$= \frac{1}{1 + n^2\pi^2} \left[ -e^{-1}(-1)^n + 1 \right]$$
$$= \frac{1 - e^{-1}(-1)^n}{1 + n^2\pi^2}$$

$$b_n = \frac{1}{L} \int_{0}^{2L} f(x) \sin \frac{n\pi x}{L} dx$$
$$= \frac{1}{1} \int_{0}^{2} e^{-x} \sin n\pi x dx$$
$$= \left[ \frac{e^{-x}}{(-1)^2 + (n\pi)^2} (-\sin n\pi x - n\pi \cos n\pi x) \right]_{0}^{1}$$
$$= \frac{1}{(-1)^2 + (n\pi)^2} \left[ e^{-1}(-\sin n\pi - n\pi \cos n\pi) - e^0(0 - n\pi \cos 0) \right]$$
$$= \frac{1}{1 + n^2\pi^2} \left[ -e^{-1}n\pi(-1)^n + n\pi \right]$$
$$= \frac{n\pi}{1 + n^2\pi^2} \left[ 1 - e^{-1}(-1)^n \right]$$

<!-- page 33 | Page 33 -->

The Fourier series is

$$
\begin{aligned}
S(x) &= a_0 + \sum_{n=1}^{\infty} [a_n \cos (n\pi x) + b_n \sin (n\pi x)] \\
&= \frac{1 - e^{-2}}{2} + \sum_{n=1}^{\infty} \left[ \frac{1 - e^{-1}(-1)^n}{1 + n^2\pi^2} \cos (n\pi x) + \frac{n\pi}{1 + n^2\pi^2} [1 - e^{-1}(-1)^n] \sin (n\pi x) \right]
\end{aligned}
$$

---

<!-- page 34 | 4.3 Half range series -->

## 4.3 Half range series

### 4.3.1 Half range cosine series

Let $f(x)$ be a function defined in the interval $[0, L]$. Then we can extend $f(x)$ as an even function in $[-L, L]$. The even extension $F(x)$ is defined by,

$$F(x) = \begin{cases} f(-x) & \text{if } -L < x \le 0 \\ f(x) & \text{if } 0 \le x < L \end{cases}$$

![Graph of f(x) on interval [0, L]](/assets/notes/me/s1/maths/module-4/fn-general-on-interval.svg)

Figure 4.15 : Graph of $f(x)$

![Graph of even extension F(x) on interval [-L, L]](/assets/notes/me/s1/maths/module-4/fn-general-even-full.svg)

Figure 4.16 : $F(x)$ : Graph of even extension of $f(x)$

![Graph of even periodic extension of f(x) spanning from -2L to 2L](/assets/notes/me/s1/maths/module-4/fn-general-even-periodic.svg)

Figure 4.17 : Graph of even periodic extension of $f(x)$

Then Fourier series of $F(x)$ in $-L < x < L$ is

$$S(x) = a_0 + \sum_{n=1}^{\infty} \left[ a_n \cos \left(\frac{n\pi x}{L}\right) + b_n \sin \left(\frac{n\pi x}{L}\right) \right], \text{ where}$$

<!-- page 35 | Half-range Cosine series of f(x) in 0 < x < L -->

$$a_0 = \frac{1}{2L} \int_{-L}^{L} F(x) \, dx = \frac{2}{L} \int_{0}^{L} F(x) \, dx = \frac{1}{L} \int_{0}^{L} f(x) \, dx$$

$$\begin{aligned} a_n &= \frac{1}{L} \int_{-L}^{L} F(x) \cos\left(\frac{n\pi x}{L}\right) \, dx \\ &= \frac{2}{L} \int_{0}^{L} F(x) \cos\left(\frac{n\pi x}{L}\right) \, dx \\ &= \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx \\ b_n &= \frac{1}{L} \int_{-L}^{L} F(x) \sin\left(\frac{n\pi x}{L}\right) \, dx = 0 \end{aligned}$$

## Half-range Cosine series of $f(x)$ in $0 < x < L$

If $f(x)$ is defined in the interval $[0, L]$, then Half-range cosine series of $f(x)$ is $S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right)$, where

$$a_0 = \frac{1}{L} \int_{0}^{L} f(x) \, dx, \quad a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx$$

**Case-1:** If $f(x)$ is continuous at a point $x$ then $S(x) = f(x)$

**Case-2:** If $f(x)$ is discontinuous at a point $x$ then $S(x) = \frac{f(x^+) + f(x^-)}{2}$

**Problem 4.3.1.** Find the half range cosine series of $e^x$ in $[0, 1]$.

Hence evaluate $\sum_{n=1}^{\infty} \frac{e(-1)^n - 1}{1 + n^2 \pi^2}$.

**Solution.** Here $L = 1$. Hence the half range cosine series is

$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{1}\right) = a_0 + \sum_{n=1}^{\infty} a_n \cos n\pi x$$

$$\begin{aligned} a_0 &= \frac{1}{L} \int_{0}^{L} f(x) \, dx = \frac{1}{1} \int_{0}^{1} e^x \, dx \\ &= [e^x]_0^1 \\ &= e - 1 \end{aligned}$$

<!-- page 36 | Page 36 -->

$$a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) dx = \frac{2}{1} \int_{0}^{1} e^x \cos\left(\frac{n\pi x}{1}\right) dx$$
$$= 2 \int_{0}^{1} e^x \cos n\pi x \, dx$$
$$= 2 \left[ \frac{e^x}{1^2 + (n\pi)^2} (\cos n\pi x + n\pi \sin n\pi x) \right]_{0}^{1}$$
$$= 2 \left[ \frac{e}{1 + n^2 \pi^2} (\cos n\pi + n\pi \sin n\pi) - \left(\frac{1}{1 + n^2 \pi^2}\right) (1 + 0) \right]$$
$$= \frac{2}{1 + n^2 \pi^2} [e(-1)^n - 1]$$

**Half range cosine series is,**

$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos n\pi x$$
$$= e - 1 + \sum_{n=1}^{\infty} \frac{2}{1 + n^2 \pi^2} [e(-1)^n - 1] \cos n\pi x$$

![Graph of even periodic extension of e^x showing a periodic V-shaped waveform centered at the y-axis.](/assets/notes/me/s1/maths/module-4/fn-even-exp.svg)

**Figure 4.18** : Graph of even periodic extension of $e^x$

**Since $f(x)$ is continuous at $0$,**

$$f(0) = S(0)$$
$$e^0 = e - 1 + \sum_{n=1}^{\infty} \frac{2}{1 + n^2 \pi^2} [e(-1)^n - 1] \cos 0$$
$$\frac{2 - e}{2} = \sum_{n=1}^{\infty} \frac{e(-1)^n - 1}{1 + n^2 \pi^2}$$

<!-- page 37 | Page 37 -->

**Problem 4.3.2.** Find the half range cosine series of $\sin x$ in $\left[0, \frac{\pi}{2}\right]$. Hence evaluate $\frac{1}{1.3} + \frac{1}{3.5} + \frac{1}{5.7} + \cdots$.

**Solution.** Here $L = \frac{\pi}{2}$. Half range cosine series is,

$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos \left(\frac{n\pi x}{L}\right) = a_0 + \sum_{n=1}^{\infty} a_n \cos \left(\frac{n\pi x}{\pi / 2}\right) = a_0 + \sum_{n=1}^{\infty} a_n \cos 2nx$$

$$a_0 = \frac{1}{L} \int_{0}^{L} f(x)\, dx = \frac{1}{\pi/2} \int_{0}^{\pi/2} \sin x\, dx$$

$$= \frac{2}{\pi} [-\cos x]_{0}^{\pi/2}$$

$$= -\frac{2}{\pi} \left[\cos \frac{\pi}{2} - \cos 0\right]$$

$$= -\frac{2}{\pi} [0 - 1] = \frac{2}{\pi}$$

$$a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos \left(\frac{n\pi x}{L}\right) dx = \frac{2}{\pi/2} \int_{0}^{\pi/2} \sin x \cos \left(\frac{n\pi x}{\pi/2}\right) dx$$

$$= \frac{4}{\pi} \int_{0}^{\pi/2} \sin x \cos 2nx\, dx$$

$$= \frac{2}{\pi} \int_{0}^{\pi/2} \sin(1+2n)x + \sin(1-2n)x\, dx$$

$$= \frac{2}{\pi} \int_{0}^{\pi/2} \sin(2n+1)x - \sin(2n-1)x\, dx$$

$$= \frac{2}{\pi} \left[ \frac{-\cos(2n+1)x}{(2n+1)} + \frac{\cos(2n-1)x}{(2n-1)} \right]_{0}^{\pi/2}$$

$$= \frac{2}{\pi} \left[ \frac{-\cos(2n+1)\frac{\pi}{2}}{(2n+1)} + \frac{\cos(2n-1)\frac{\pi}{2}}{(2n-1)} - \left(\frac{-1}{2n+1} + \frac{1}{2n-1}\right) \right]$$

$$= \frac{2}{\pi} \left[ -0 + 0 + \frac{1}{2n+1} - \frac{1}{2n-1} \right]$$

$$= \frac{2}{\pi} \left[ \frac{2n-1 - (2n+1)}{4n^2 - 1} \right]$$

<!-- page 38 | Page 38 -->

$$= \frac{2}{\pi} \left[ \frac{-2}{4n^2 - 1} \right]$$
$$= \frac{-4}{\pi(4n^2 - 1)}$$

Half range cosine series is,

$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos 2nx$$
$$= \frac{2}{\pi} + \sum_{n=1}^{\infty} \frac{-4}{\pi(4n^2 - 1)} \cos 2nx$$
$$= \frac{2}{\pi} - \frac{4}{\pi} \sum_{n=1}^{\infty} \frac{1}{4n^2 - 1} \cos 2nx$$

![Graph of even periodic extension of sin(x)](/assets/notes/me/s1/maths/module-4/fn-even-sin.svg)

**Figure 4.19** : Graph of even periodic extension of $\sin(x)$

Since $f(x)$ is continuous at $0$,

$$f(0) = S(0)$$
$$\sin 0 = \frac{2}{\pi} - \frac{4}{\pi} \sum_{n=1}^{\infty} \frac{1}{4n^2 - 1}$$
$$\frac{2}{\pi} = \frac{4}{\pi} \sum_{n=1}^{\infty} \frac{1}{(2n - 1)(2n + 1)}$$
$$\frac{1}{2} = \frac{1}{1.3} + \frac{1}{3.5} + \frac{1}{5.7} + \dots$$

<!-- page 39 | Page 39 -->

Problem 4.3.3. Find the half range cosine series of $x \sin x$ in $(0, \pi)$. Hence evaluate $\frac{1}{1.3} - \frac{1}{3.5} + \frac{1}{5.7} - +\cdots$

Solution. Half range cosine series is,
$$
S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n \pi x}{L}\right) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n \pi x}{\pi}\right) = a_0 + \sum_{n=1}^{\infty} a_n \cos nx
$$

$$
\begin{aligned}
a_0 &= \frac{1}{L} \int_{0}^{L} f(x) \, dx = \frac{1}{\pi} \int_{0}^{\pi} f(x) \, dx \\
&= \frac{1}{\pi} \int_{0}^{\pi} x \sin x \, dx \\
&= \frac{1}{\pi} [x(-\cos x) - 1(-\sin x)]_{0}^{\pi} \\
&= \frac{1}{\pi} [\pi(1) + 0 - (0 + 0)] = 1
\end{aligned}
$$

$$
\begin{aligned}
a_n &= \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n \pi x}{L}\right) \, dx = \frac{2}{\pi} \int_{0}^{\pi} f(x) \cos\left(\frac{n \pi x}{\pi}\right) \, dx \\
&= \frac{2}{\pi} \int_{0}^{\pi} x \sin x \cos nx \, dx \\
&= \frac{1}{\pi} \int_{0}^{\pi} x(\sin(1 + n)x + \sin(1 - n)x) \, dx \\
&= \frac{1}{\pi} \int_{0}^{\pi} x(\sin(n + 1)x - \sin(n - 1)x) \, dx \\
&= \frac{1}{\pi} \left[ x \left( \frac{-\cos(n + 1)x}{n + 1} + \frac{\cos(n - 1)x}{n - 1} \right) - 1 \cdot \left( \frac{-\sin(n + 1)x}{(n + 1)^2} + \frac{\sin(n - 1)x}{(n - 1)^2} \right) \right]_{0}^{\pi} \\
&= \frac{1}{\pi} \left( \frac{\cos(n - 1)\pi}{n - 1} - \frac{\cos(n + 1)\pi}{n + 1} \right), \quad (n \neq 1) \\
&= \left( \frac{(-1)^{(n - 1)}}{n - 1} - \frac{(-1)^{(n + 1)}}{n + 1} \right), \quad (n \neq 1) \\
&= (-1)^{(n - 1)} \left( \frac{n + 1 - (n - 1)(-1)^2}{(n - 1)(n + 1)} \right), \quad (n \neq 1) \\
&= \frac{(-1)^{(n - 1)}2}{(n - 1)(n + 1)}, \quad (n \neq 1)
\end{aligned}
$$

<!-- page 40 | Page 40 -->

When $n = 1$,

$$a_1 = rac{2}{rac{\pi}} \int_0^{\pi} x \sin x \cos x \, dx = \frac{1}{\pi} \int_0^{\pi} x \sin 2x \, dx$$
$$\phantom{a_1} = \frac{1}{\pi} \left[ x \left( \frac{-\cos 2x}{2} \right) - 1 \left( \frac{-\sin 2x}{4} \right) \right]_0^{\pi}$$
$$\phantom{a_1} = \frac{1}{\pi} \left( -\frac{\pi \cos 2\pi}{2} + 0 - (0 + 0) \right) = -\frac{1}{2}$$

Half range cosine series is,

$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos nx = 1 - \frac{1}{2} \cos x + \sum_{n=2}^{\infty} \left( \frac{(-1)^{(n-1)} 2}{(n-1)(n+1)} \right) \cos nx$$
$$= 1 - \frac{1}{2} \cos x + 2 \left[ \frac{-\cos 2x}{1.3} + \frac{\cos 3x}{2.4} - \frac{\cos 4x}{3.5} + \dots \right]$$

![Graph of even periodic extension of x sin(x)](/assets/notes/me/s1/maths/module-4/fn-even-x-sin.svg)

Figure 4.20 : Graph of even periodic extension of $x\sin(x)$

Since $f(x)$ is continuous at $\frac{\pi}{2}$, we have $f(\pi/2) = S(\pi/2)$

$$\frac{\pi}{2} \sin \left(\frac{\pi}{2}\right) = 1 - \frac{1}{2} \cos \left(\frac{\pi}{2}\right) + 2 \left[ \frac{-\cos 2\left(\frac{\pi}{2}\right)}{1.3} + \frac{\cos 3\left(\frac{\pi}{2}\right)}{2.4} - \frac{\cos 4\left(\frac{\pi}{2}\right)}{3.5} + \dots \right].$$
$$\frac{\pi}{2} = 1 + 2 \left[ \frac{1}{1.3} + \frac{0}{2.4} - \frac{1}{3.5} + \dots \right]$$
$$\frac{\pi - 2}{4} = \frac{1}{1.3} - \frac{1}{3.5} + \frac{1}{5.7} - \dots$$

**Remark :** There is nothing unusual about the fact that this half-range cosine series is the same as the Fourier series in Problem 4.2.5. The reason is that the even extension of $x \sin x$ is the same as that of $x \sin x$, because $x \sin x$ is an even function.

<!-- page 41 | Page 41 -->

**Problem 4.3.4.** Find the half range cosine series of $f(x) = x^2$ in $[0, 5]$. Hence evaluate $1 - \frac{1}{2^2} + \frac{1}{3^2} - \dots$

**Solution.** Here $L = 5$. Half range cosine series is,

$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{5}\right)$$

$$a_0 = \frac{1}{L} \int_{0}^{L} f(x) \, dx = \frac{1}{5} \int_{0}^{5} x^2 \, dx = \frac{1}{5} \left[ \frac{x^3}{3} \right]_{0}^{5} = \frac{25}{3}$$

$$a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \, dx = \frac{2}{5} \int_{0}^{5} x^2 \cos\left(\frac{n\pi x}{5}\right) \, dx$$

$$= \frac{2}{5} \left[ x^2 \frac{5}{n\pi} \sin\frac{n\pi x}{5} - 2x \left(\frac{5}{n\pi}\right)^2 \left(-\cos\frac{n\pi x}{5}\right) + 2 \left(\frac{5}{n\pi}\right)^3 \left(-\sin\frac{n\pi x}{5}\right) \right]_{0}^{5}$$

$$= \frac{2}{5} \left[ 0 + 10\left(\frac{5}{n\pi}\right)^2 \cos n\pi - 0 - (0 + 0 - 0) \right]$$

$$= \frac{100(-1)^n}{n^2\pi^2}$$

Half range cosine series is,

$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{5}\right)$$

$$= \frac{25}{3} + \sum_{n=1}^{\infty} \frac{100(-1)^n}{n^2\pi^2} \cos\left(\frac{n\pi x}{5}\right)$$

$$= \frac{25}{3} + \frac{100}{\pi^2} \sum_{n=1}^{\infty} \frac{(-1)^n}{n^2} \cos\left(\frac{n\pi x}{5}\right)$$

Since $f(x)$ is continuous at $x = 0$, we have $f(0) = S(0)$.

$$0 = \frac{25}{3} + \sum_{n=1}^{\infty} \frac{100(-1)^n}{n^2\pi^2} \cos 0$$

<!-- page 42 | Page 42 -->

![Graph of even periodic extension of x^2](/assets/notes/me/s1/maths/module-4/fn-even-x-squared.svg)

**Figure 4.21** : Graph of even periodic extension of $x^2$

$$-\frac{25}{3} = \frac{100}{\pi^2} \sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$$
$$-\frac{\pi^2}{12} = -\frac{1}{1^2} + \frac{1}{2^2} - \frac{1}{3^2} + \frac{1}{4^2} - +\dots$$
$$\frac{\pi^2}{12} = 1 - \frac{1}{2^2} + \frac{1}{3^2} - \frac{1}{4^2} + -\dots$$

**Problem 4.3.5.** Find the half range cosine series of
$$f(x) = \begin{cases} 5x & \text{if } 0 \le x \le l/2 \\ 5(l - x) & \text{if } l/2 \le x < l \end{cases}$$

**Solution.** Half range cosine series is
$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{L}\right) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{l}\right)$$

$$a_0 = \frac{1}{L} \int_{0}^{L} f(x)\,dx = \frac{1}{l} \int_{0}^{l} f(x)\,dx$$
$$= \frac{1}{l} \left[ \int_{0}^{l/2} 5x\,dx + \int_{l/2}^{l} 5(l - x)\,dx \right]$$
$$= \frac{5}{l} \left[ \left(\frac{x^2}{2}\right)_{0}^{l/2} + \left(lx - \frac{x^2}{2}\right)_{l/2}^{l} \right]$$
$$= \frac{5}{l} \left[ \frac{l^2}{8} - 0 + \frac{l^2}{2} - \frac{3l^2}{8} \right] = \frac{5}{l} \left[ \frac{l^2}{4} \right] = \frac{5l}{4}$$

<!-- page 43 | Page 43 -->

$$a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) dx = \frac{2}{l} \int_{0}^{l} f(x) \cos\left(\frac{n\pi x}{l}\right) dx$$

$$= \frac{2}{l} \left[ \int_{0}^{l/2} 5x \cos\left(\frac{n\pi x}{l}\right) dx + \int_{l/2}^{l} 5(l - x) \cos\left(\frac{n\pi x}{l}\right) dx \right]$$

$$= \frac{10}{l} \left( \left[ (x) \left( \frac{l}{n\pi} \sin\left(\frac{n\pi x}{l}\right) \right) - (1) \left( \left(\frac{l}{n\pi}\right)^2 \times -\cos\left(\frac{n\pi x}{l}\right) \right) \right]_{0}^{l/2} \right.$$

$$\left. + \left[ (l - x) \left( \frac{l}{n\pi} \sin\left(\frac{n\pi x}{l}\right) \right) - (-1) \left( \left(\frac{l}{n\pi}\right)^2 \times -\cos\left(\frac{n\pi x}{l}\right) \right) \right]_{l/2}^{l} \right)$$

$$= \frac{10}{l} \left( \left[ \frac{lx}{n\pi} \sin\left(\frac{n\pi x}{l}\right) + \frac{l^2}{n^2\pi^2} \cos\left(\frac{n\pi x}{l}\right) \right]_{0}^{l/2} \right.$$

$$\left. + \left[ \frac{l(l - x)}{n\pi} \sin\left(\frac{n\pi x}{l}\right) - \frac{l^2}{n^2\pi^2} \cos\left(\frac{n\pi x}{l}\right) \right]_{l/2}^{l} \right)$$

$$= \frac{10}{l} \left( \left[ \frac{l^2}{2n\pi} \sin\left(\frac{n\pi}{2}\right) + \frac{l^2}{n^2\pi^2} \cos\left(\frac{n\pi}{2}\right) - 0 - \frac{l^2}{n^2\pi^2} \right] \right.$$

$$\left. + \left[ -\frac{l^2}{n^2\pi^2} \cos n\pi - \frac{l^2}{2n\pi} \sin\left(\frac{n\pi}{2}\right) - 0 + \frac{l^2}{n^2\pi^2} \cos\left(\frac{n\pi}{2}\right) \right] \right)$$

$$= \frac{10}{l} \left( \left[ \frac{l^2}{2n\pi} \sin\left(\frac{n\pi}{2}\right) + \frac{l^2}{n^2\pi^2} \cos\left(\frac{n\pi}{2}\right) - \frac{l^2}{n^2\pi^2} \right] \right.$$

$$\left. + \left[ -\frac{l^2}{n^2\pi^2}(-1)^n - \frac{l^2}{2n\pi} \sin\left(\frac{n\pi}{2}\right) + \frac{l^2}{n^2\pi^2} \cos\left(\frac{n\pi}{2}\right) \right] \right)$$

$$= \frac{10}{l} \times \frac{l^2}{n^2\pi^2} \left[ 2 \cos\left(\frac{n\pi}{2}\right) - 1 - (-1)^n \right] = \frac{10l}{n^2\pi^2} \left[ 2 \cos\left(\frac{n\pi}{2}\right) - 1 - (-1)^n \right]$$

Half range cosine series is,

$$S(x) = a_0 + \sum_{n=1}^{\infty} a_n \cos\left(\frac{n\pi x}{l}\right)$$

$$= \frac{5l}{4} + \sum_{n=1}^{\infty} \frac{10l}{n^2\pi^2} \left[ 2 \cos\left(\frac{n\pi}{2}\right) - 1 - (-1)^n \right] \cos\left(\frac{n\pi x}{l}\right)$$

<!-- page 44 | 4.3.2 Half range sine series -->

### 4.3.2 Half range sine series

Let $f(x)$ be a function defined in the interval $[0, L]$. Then we can extend $f(x)$ as an odd function in $[-L, L]$. The odd extension $F(x)$ is defined by,
$$F(x) = \begin{cases} -f(-x) & \text{if } -L < x \le 0 \\ f(x) & \text{if } 0 \le x < L \end{cases}$$

![Graph of f(x) from 0 to L](/assets/notes/me/s1/maths/module-4/graph-f-from-0-to-L.svg)

**Figure 4.22** : Graph of $f(x)$

![Graph of odd extension F(x) from -L to L](/assets/notes/me/s1/maths/module-4/fn-general-odd-extension.svg)

**Figure 4.23** : $F(x)$ : Graph of odd extension of $f(x)$

![Graph of odd periodic extension of f(x)](/assets/notes/me/s1/maths/module-4/fn-general-odd-periodic.svg)

**Figure 4.24** : Graph of odd periodic extension of $f(x)$

<!-- page 45 | Page 45 -->

Then Fourier series of $F(x)$ for $-L < x < L$ is,

$$S(x) = a_0 + \sum_{n=1}^{\infty} \left[a_n \cos\left(\frac{n\pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right)\right],$$

where

$$\begin{aligned}
a_0 &= \frac{1}{2L} \int_{-L}^{L} F(x) \, dx = 0 \\
a_n &= \frac{1}{L} \int_{-L}^{L} F(x) \cos\left(\frac{n\pi x}{L}\right) \, dx = 0 \\
b_n &= \frac{1}{L} \int_{-L}^{L} F(x) \sin\left(\frac{n\pi x}{L}\right) \, dx \\
&= \frac{2}{L} \int_{0}^{L} F(x) \sin\left(\frac{n\pi x}{L}\right) \, dx = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx
\end{aligned}$$

**Half-range Sine series of f(x) in $0 < x < L$**

If $f(x)$ is defined in the interval $[0, L]$, then **Half-range sine series of $f(x)$ is**
$S(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right)$, where
$b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx$

**Case-1:** If $f(x)$ is continuous at a point $x$ then $S(x) = f(x)$

**Case-2:** If $f(x)$ is discontinuous at a point $x$ then $S(x) = \frac{f(x^+) + f(x^-)}{2}$

**Problem 4.3.6.** Find the half range sine series of $f(x) = x^2$ in $[0, 5]$.

**Solution.** Half range sine series is $S(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{5}\right)$

$$\begin{aligned}
b_n &= \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \, dx = \frac{2}{5} \int_{0}^{5} x^2 \sin\left(\frac{n\pi x}{5}\right) \, dx \\
&= \frac{2}{5} \left[ x^2 \frac{5}{n\pi} \left(-\cos \frac{n\pi x}{5}\right) - 2x \left(\frac{5}{n\pi}\right)^2 \left(-\sin \frac{n\pi x}{5}\right) + 2 \left(\frac{5}{n\pi}\right)^3 \left(\cos \frac{n\pi x}{5}\right) \right]_0^5
\end{aligned}$$

<!-- page 46 | Page 46 -->

![Graph of odd periodic extension of x^2 showing periodic curves with vertical asymptotes or steep segments](/assets/notes/me/s1/maths/module-4/fn-odd-x-squared.svg)

**Figure 4.25 : Graph of odd periodic extension of $x^2$**

$$\begin{aligned}
&= \frac{2}{5}\left[25 \frac{5}{n\pi}(-\cos n\pi) + 0 + 2\left(\frac{5}{n\pi}\right)^3 \cos n\pi - \left(-0 + 0 + 2\left(\frac{5}{n\pi}\right)^3\right)\right] \\
&= \frac{2}{5}\left[\frac{-125(-1)^n}{n\pi} + \frac{250}{n^3 \pi^3}[(-1)^n - 1]\right] \\
&= \frac{50(-1)^{n+1}}{n\pi} + \frac{100}{n^3 \pi^3}[(-1)^n - 1]
\end{aligned}$$

Half range sin series is

$$\begin{aligned}
S(x) &= \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{5}\right) \\
&= \sum_{n=1}^{\infty} \left(\frac{50(-1)^{n+1}}{n\pi} + \frac{100}{n^3 \pi^3}[(-1)^n - 1]\right) \sin\left(\frac{n\pi x}{5}\right)
\end{aligned}$$

**Problem 4.3.7.** Find the half range sine series of $f(x) = \begin{cases} x, & \text{if } 0 < x \le \pi/2 \\ \pi - x, & \text{if } \pi/2 < x < \pi \end{cases}$

Hence evaluate $1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots$

<!-- page 47 | Page 47 -->

**Solution.** Half range sine series is $S(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{\pi}\right) = \sum_{n=1}^{\infty} a_n \sin nx$

$$\begin{aligned}
b_n &= \frac{2}{\pi} \int_0^{\pi} f(x) \sin\left(\frac{n\pi x}{\pi}\right) dx = \frac{2}{\pi} \int_0^{\pi} f(x) \sin nx \, dx \\
&= \frac{2}{\pi} \left[ \int_0^{\pi/2} x \sin nx \, dx + \int_{\pi/2}^{\pi} (\pi - x) \sin nx \, dx \right] \\
&= \frac{2}{\pi} \left( \left[ (x) \left(-\frac{\cos nx}{n}\right) - (1) \left(-\frac{\sin nx}{n^2}\right) \right]_0^{\pi/2} \right. \\
&\quad + \left. \left[ (\pi - x) \left(-\frac{\cos nx}{n}\right) - (-1) \left(-\frac{\sin nx}{n^2}\right) \right]_{\pi/2}^{\pi} \right) \\
&\quad + \frac{2}{\pi} \left( \left[-\frac{x \cos nx}{n} + \frac{\sin nx}{n^2}\right]_0^{\pi/2} + \left[-\frac{(\pi - x) \cos nx}{n} - \frac{\sin nx}{n^2}\right]_{\pi/2}^{\pi} \right) \\
&= \frac{2}{\pi} \left( \left[ -\frac{\pi}{2n} \cos\left(\frac{n\pi}{2}\right) + \frac{1}{n^2} \sin\left(\frac{n\pi}{2}\right) \right] - [0 + 0] \right. \\
&\quad + \left. [0 - 0] - \left[ -\frac{\pi}{2n} \cos\left(\frac{n\pi}{2}\right) - \frac{1}{n^2} \sin\left(\frac{n\pi}{2}\right) \right] \right) \\
&= \frac{2}{\pi} \left[ \frac{2}{n^2} \sin\left(\frac{n\pi}{2}\right) \right] \\
&= \frac{4}{\pi n^2} \sin\left(\frac{n\pi}{2}\right)
\end{aligned}$$

Half range sine series is,

$$\begin{aligned}
S(x) &= \sum_{n=1}^{\infty} b_n \sin nx = \sum_{n=1}^{\infty} \frac{4}{\pi n^2} \sin\left(\frac{n\pi}{2}\right) \sin nx \\
&= \frac{4}{\pi} \left( \sin x - \frac{1}{3^2} \sin 3x + \frac{1}{5^2} \sin 5x - \dots \right)
\end{aligned}$$

Since $f(x)$ is continuous at $\frac{\pi}{2}$,

$$f(\pi/2) = S(\pi/2)$$

<!-- page 48 | Page 48 -->

![Graph of Odd periodic extension of f(x)](/assets/notes/me/s1/maths/module-4/fn-odd-triangular.svg)

**Figure 4.26 :** Graph of Odd periodic extension of $f(x)$

$$\frac{\pi}{2} = \frac{4}{\pi} \left[ \sin\left(\frac{\pi}{2}\right) - \frac{1}{3^2} \sin\left(\frac{3\pi}{2}\right) + \frac{1}{5^2} \sin\left(\frac{5\pi}{2}\right) - \cdots \right]$$
$$\frac{\pi^2}{8} = 1 + \frac{1}{3^2} + \frac{1}{5^2} + \cdots$$

**Problem 4.3.8.** Find the half range sine series of $f(x) = e^x$ in $[0, 1]$.

**Solution.** Half range sine series is,
$$S(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{1}\right) = \sum_{n=1}^{\infty} b_n \sin(n\pi x)$$

$$b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx = 2 \int_{0}^{1} e^x \sin(n\pi x) dx$$
$$= 2 \left[ \frac{e^x}{1^2 + (n\pi)^2} (\sin n\pi x - n\pi \cos n\pi x) \right]_0^1$$
$$= \frac{2}{1 + n^2 \pi^2} \left[ e^1 (\sin n\pi - n\pi \cos n\pi) - (0 - n\pi \cos 0) \right]$$
$$= \frac{2}{1 + n^2 \pi^2} \left[ e n\pi (-1)^{n+1} + n\pi \right]$$
$$= \frac{2n\pi}{1 + n^2 \pi^2} \left[ e(-1)^{n+1} + 1 \right]$$

Half range sine series is
$$S(x) = \sum_{n=1}^{\infty} b_n \sin(n\pi x) = \sum_{n=1}^{\infty} \frac{2n\pi}{1 + n^2 \pi^2} \left[ e(-1)^{n+1} + 1 \right] \sin(n\pi x)$$

**Remark :** Odd periodic extension of $e^x$ has discontinuities at all integers.

<!-- page 49 | Page 49 -->

![Graph of odd periodic extension of e^x](/assets/notes/me/s1/maths/module-4/fn-odd-exp.svg)

**Figure 4.27 : Graph of odd periodic extension of $e^x$**

**Problem 4.3.9.** Find the half range sine series of $x \sin x$ in $(0, \pi)$.

**Solution.** Half range sine series is
$$S(x) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{L}\right) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{n\pi x}{\pi}\right) = \sum_{n=1}^{\infty} b_n \sin nx$$

$$b_n = \frac{2}{L}\int_{0}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) dx = \frac{2}{\pi}\int_{0}^{\pi} f(x) \sin\left(\frac{n\pi x}{\pi}\right) dx$$
$$= \frac{2}{\pi}\int_{0}^{\pi} x \sin x \sin nx dx$$
$$= \frac{1}{\pi}\int_{0}^{\pi} x(\cos(1 - n)x - \cos(1 + n)x) dx$$
$$= \frac{1}{\pi}\int_{0}^{\pi} x(\cos(n - 1)x - \cos(n + 1)x) dx$$
$$= \frac{1}{\pi}\left[ x\left(\frac{\sin(n - 1)x}{n - 1} - \frac{\sin(n + 1)x}{n + 1}\right) - 1 \cdot \left(\frac{-\cos(n - 1)x}{(n - 1)^2} - \frac{-\cos(n + 1)x}{(n + 1)^2}\right) \right]_0^\pi$$
$$= \frac{1}{\pi}\left[ 0 + \left(\frac{\cos(n - 1)\pi}{(n - 1)^2} - \frac{\cos(n + 1)\pi}{(n + 1)^2}\right) - \left(0 + \left(\frac{1}{(n - 1)^2} - \frac{1}{(n + 1)^2}\right)\right) \right], (n \neq 1)$$
$$= \frac{1}{\pi}\left[ \left(\frac{(-1)^{(n-1)}}{(n - 1)^2} - \frac{(-1)^{(n+1)}}{(n + 1)^2}\right) - \left(\frac{1}{(n - 1)^2} - \frac{1}{(n + 1)^2}\right) \right], \quad (n \neq 1)$$
$$= \frac{1}{\pi}\left[ \frac{((-1)^{(n-1)} - 1)}{(n - 1)^2} + \frac{(1 - (-1)^{(n+1)})}{(n + 1)^2} \right], \quad (n \neq 1)$$

<!-- page 50 | Page 50 -->

When $n = 1$,

$$\begin{aligned}
b_1 &= \frac{2}{\pi} \int_0^{\pi} x \sin x \sin x \, dx = \frac{2}{\pi} \int_0^{\pi} x \sin^2 x \, dx \\
&= \frac{1}{\pi} \int_0^{\pi} x (1 - \cos 2x) \, dx \\
&= \frac{1}{\pi} \left[ x \left( x - \frac{\sin 2x}{2} \right) - 1 \left( \frac{x^2}{2} - \frac{-\cos 2x}{4} \right) \right]_0^{\pi} \\
&= \frac{1}{\pi} \left[ \pi (\pi - 0) - \left( \frac{\pi^2}{2} + \frac{1}{4} \right) - \left( 0 - \left( 0 + \frac{1}{4} \right) \right) \right] \\
&= \frac{1}{\pi} \left[ \pi^2 - \frac{\pi^2}{2} \right] \\
&= \frac{1}{\pi} \frac{\pi^2}{2} \\
&= \frac{\pi}{2}
\end{aligned}$$

Half range sine series is,

$$\begin{aligned}
S(x) &= \sum_{n=1}^{\infty} b_n \sin nx \\
&= \frac{\pi}{2} \sin x + \sum_{n=2}^{\infty} \frac{1}{\pi} \left[ \frac{((-1)^{(n-1)} - 1)}{(n-1)^2} + \frac{(1 - (-1)^{(n+1)})}{(n+1)^2} \right] \sin nx
\end{aligned}$$

<!-- page 51 | Page 51 -->

