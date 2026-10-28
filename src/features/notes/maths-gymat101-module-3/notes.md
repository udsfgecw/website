<!-- page 1 | Page 1 -->

[Non-content page]

<!-- page 2 | MODULE - 3 -->

# MODULE - 3

## Laplace Transform

### Laplace Transform

If $f(t)$ is a function defined for all $t \ge 0$ then Laplace transform of $f(t)$ is denoted by $L[f(t)]$, i.e.,

$$L[f(t)] = \int_{0}^{\infty} e^{-st} f(t) \, dt = f(s)$$

### Result

1. $L(1) = 1/s$

2. $L(e^{at}) = \frac{1}{s-a}$

3. $L(e^{-at}) = \frac{1}{s+a}$

4. $L(\sin at) = \frac{a}{s^2 + a^2}$

<!-- page 3 | Page 3 -->

5. $L [\sinh at] = \frac{a}{s^2 - a^2} \qquad \left\{\begin{matrix} e^{-\infty} = 0 \\ e^{\infty} = 0 \\ e^0 = 1 \end{matrix}\right\}$

6. $L (\cos at) = \frac{s}{s^2 + a^2}$

7. $L (\cosh at) = \frac{s}{s^2 - a^2}$

8. $L [t^n] = \frac{n!}{s^{n+1}}$

First shifting theorem

If $L[f(t)] = f(s)$
then,
$L[e^{at} f(t)] = f(s-a)$

Result

$L[e^{at} t^n] = \frac{n!}{(s-a)^{n+1}}$

<!-- page 4 | Page 4 -->

2. $L(e^{at} 	ext{sin } bt) = \frac{b}{(s-a)^2 + b^2}$

3. $L(e^{at} \sinh bt) = \frac{b}{(s-a)^2 - b^2}$

4. $L(e^{at} \cos bt) = \frac{s-a}{(s-a)^2 + b^2}$

5. $L(e^{at} \cosh bt) = \frac{s-a}{(s-a)^2 - b^2}$

<u>Questions</u>

1. Find the Laplace transform of the following function

$e^{3t} \sin 5t$

$L(e^{3t} \sin 5t) = \frac{5}{(s-3)^2 + (5)^2}$

<!-- page 5 | Page 5 -->

2. $e^{-3t} \cos 2t$

$$\begin{aligned}
L\left(e^{-3t} \cos 2t\right) &= \frac{s+3}{(s+3)^2 + (2)^2} \\
&= \frac{s+3}{(s+3)^2 + 4}
\end{aligned}$$

3. $\cos 7t$

$$\begin{aligned}
&= \frac{s}{s^2 + 7^2} \\
&= \frac{s}{s^2 + 49}
\end{aligned}$$

4. $L(\sinh 4t)$

$$\begin{aligned}
&= \frac{4}{s^2 - 4^2} \\
&= \frac{4}{s^2 - 16}
\end{aligned}$$

<!-- page 6 | Page 6 -->

5. $t^9$
$$\begin{aligned}
&= \frac{9!}{s^{9+1}} \\
&= \frac{9!}{s^{10}} //
\end{aligned}$$

6. $e^{-7t}$
$$\begin{aligned}
&= \frac{1}{s+7} //
\end{aligned}$$

7. $e^{2t} \sinh 4t$
$$\begin{aligned}
&= \frac{4}{(s-2)^2 - 4^2} \\
&= \frac{4}{(s-2)^2 - 16} //
\end{aligned}$$

8. $(\sin t + \cos t)^2$
$$\mathcal{L}\left((\sin t + \cos t)^2\right) = \Rightarrow [(a+b)^2$$
$$\mathcal{L}\left(\sin^2 t + 2\sin t \cos t + \cos^2 t\right) \left\} \begin{aligned} &\Rightarrow \sin^2 t + \cos^2 t = 1 \\
&\Rightarrow 2\sin t \cos t = \sin 2t \end{aligned}\right.$$

<!-- page 7 | Page 7 -->

$$L \left[ 1 + \sin 2t \right]$$

$$L(1) + L(\sin 2t)$$

$$= 1/s + \frac{2}{s^2 + 4} //$$

9) $\sin(at + b) \rightarrow \sin(A+B) = \sin A \cos B + \cos A$

$$L(\sin(at+b)) \Rightarrow$$

$$L(\sin at \cos b + \cos at \sin b)$$

$$= \cos b \ L(\sin at) + \sin b \ L(\cos at)$$

$$\cos b \ \frac{at}{s^2 + at^2} + \sin b \ \frac{s}{s^2 + at^2}$$

<!-- page 8 | Page 8 -->

10) $\sin 4t \cos 3t \Rightarrow \times$ and $\div$ by $2$

$$\mathcal{L}\left[\frac{1}{2} \quad 2 \sin 4t + \cos 3t\right]$$

$$\frac{1}{2} \left[\mathcal{L} \quad 2 \sin 4t + \cos 3t\right] \Rightarrow$$

$$\boxed{2 \sin A \cos B = \sin(A + B) + \sin(A - B)}$$

$$\frac{1}{2} \mathcal{L} \left[2 \sin 4t + \cos 3t\right]$$

$$= \frac{1}{2} \mathcal{L} \left[\sin 7t + \sin t\right]$$

$$\frac{1}{2} \mathcal{L}(\sin 7t) + \mathcal{L}(\sin t)$$

$$\frac{1}{2} \times \frac{7}{s^2 + 49} + \frac{1}{s^2 + 1^2}$$

$$s(A+B) = \sin A \cos B + \cos A \sin B$$

$$2 \sin A \cos B = \sin(A+B) + \sin(A-B)$$

<!-- page 9 | Page 9 -->

11) $e^{-4t} - 6t^2 + 4	ext{ sin } 2t$

$$\frac{1}{s+4} - 6 \times \frac{2!}{s^3} + 4 \times \frac{2}{s^2+4}$$

$$\left. \begin{array}{l} \text{12) Find the Laplace Transform of} \\[4pt] \qquad (t+1)^2 e^t \\[6pt] \text{13) Find the L.T of} \\[4pt] \qquad \cos^2 t. \end{array} \right\} \text{Assignment}$$

$$\begin{cases} 2\cos^2 t = 1 - \cos 2t \\ 2\sin^2 t = 1 + \cos 2t \end{cases}$$

<!-- page 10 | Inverse Laplace Transform -->

# Inverse Laplace Transform

If $\mathcal{L}(f(t)) = f(s)$  
then the inverse LT  

$$\mathcal{L}^{-1} f(s) = f(t)$$

$$\mathcal{L}^{-1}\left[\frac{1}{(s-a)^{n+1}}\right] = \frac{e^{at} t^n}{n!}$$

1. $\mathcal{L}^{-1}\left(\frac{1}{s}\right) = 1$
2. $\mathcal{L}^{-1}\left(\frac{1}{s-a}\right) = e^{at}$
3. $\mathcal{L}^{-1}\left(\frac{1}{s+a}\right) = e^{-at}$
4. $\mathcal{L}^{-1}\left[\frac{1}{s^{n+1}}\right] = \frac{t^n}{n!}$
5. $\mathcal{L}^{-1}\left[\frac{1}{s^2+a^2}\right] = \frac{1}{a} \sin at$
6. $\mathcal{L}^{-1}\left[\frac{s}{s^2+a^2}\right] = \cos at$

<!-- page 11 | Page 11 -->

7. $\mathcal{L}^{-1}\left[\frac{1}{s^2 - a^2}\right] = \frac{\sinh at}{a}$

8. $\mathcal{L}^{-1}\left[\frac{s}{s^2 - a^2}\right] = \cosh at$

9. $\mathcal{L}^{-1}\left[\frac{1}{(s-a)^2 + b^2}\right] = \frac{1}{b} e^{at} \sin bt$

10. $\mathcal{L}^{-1}\left[\frac{s-a}{(s-a)^2 + b^2}\right] = e^{at} \cos bt$

11. $\mathcal{L}^{-1}\left(\frac{1}{(s-a)^2 - \dots}\right.$

Find the inverse Laplace transform of the following function.

1. $\frac{s^2 + 2s + 5}{s^3}$

$$\mathcal{L}^{-1}\left[\frac{s^2 + 2s + 5}{s^3}\right]$$

$$\mathcal{L}^{-1}\left[1/s + 2/s^2 + 5/s^3\right]$$

<!-- page 12 | Page 12 -->

$$= L^{-1}\left[\frac{1}{s}\right] + L^{-1}\left[\frac{2}{s^2}\right] + L^{-1}\left[\frac{5}{s^3}\right]$$

$$= L^{-1}\left[\frac{1}{s}\right] + 2L^{-1}\left[\frac{1}{s^{1+1}}\right] + 5L^{-1}\left[\frac{1}{s^{2+1}}\right]$$

$$= 1 + \frac{2t^{1}}{1!} + \frac{5t^2}{2!}$$

2. $\frac{2\pi}{(s+\pi)^2}$

$$L^{-1}\left(\frac{2\pi}{(s+\pi)^2}\right)$$

$$= 2\pi L^{-1}\left[\frac{1}{(s - -\pi)^{1+1}}\right]$$

$$= 2\pi e^{-\pi t} t/1! = 2\pi t e^{-\pi t}$$

<!-- page 13 | Page 13 -->

$$\frac{2}{s^4} - rac{48}{s^6}$$

$$L^{-1}\left(\frac{2}{s^4} - \frac{48}{s^6}\right)$$

~~$$L^{-1} 2 \left[\frac{1}{s^4}\right] - 48 \left[\frac{1}{s^6}\right]$$~~

$$= \frac{2}{s^{3+1}} - \frac{48}{s^{5+1}}$$

$$\frac{2 \times t^3}{3!} - 48 \times \frac{t^5}{5!}$$

<!-- page 14 | Page 14 -->

Find the Laplace transform of the following fns.

(i) $\sin 3t \cos 2t$

$$\mathcal{L}(\sin 3t \cos 2t)$$

$$\mathcal{L} \frac{1}{2} (2 \sin 3t \cos 2t)$$

$$2 \sin x \cos y = \sin (x+y) + \sin (x-y)$$

$$= \frac{1}{2} \mathcal{L} [\sin(3t+2t) + \sin(3t-2t)]$$

$$= \frac{1}{2} \mathcal{L} [\sin(5t) + \sin t]$$

$$= \frac{1}{2} \left( \frac{5}{s^2 + 5^2} + \frac{1}{s^2 + 1^2} \right)$$

$$= \frac{1}{2} \left( \frac{5}{s^2 + 25} + \frac{1}{s^2 + 1} \right)$$

<!-- page 15 | Page 15 -->

(iii) $\cos^3 2t$

$$\mathcal{L}(\cos^3 2t)$$

HW

$\sin(at+b)$

$$\mathcal{L}(\sin(at+b))$$

$$\mathcal{L}(\sin at \cos b + \cos at \sin b)$$

$$\cos b \frac{a}{s^2+a^2} + \sin b \frac{s}{s^2+a^2}$$

<!-- page 16 | Page 16 -->

$$3e^{5t} + (t+2)^2 + 2\cos 3t$$

$$\mathcal{L}\left[3e^{5t} + (t+2)^2 + 2\cos 3t\right]$$

$$\mathcal{L}\left[3e^{5t}\right] + \mathcal{L}\left[(t+2)^2\right] + \mathcal{L}\left[2\cos 3t\right]$$

$$3\mathcal{L}\left[e^{5t}\right] + \mathcal{L}\left[t^2\right] + 4\mathcal{L}[t] + \mathcal{L}[4] + 2\mathcal{L}[\cos 3t]$$

$$3 \times \frac{1}{s-5} + \frac{2!}{s^3} + 4\frac{1!}{s^2} + \frac{4}{s} + \frac{2 \cdot s}{s^2 + 9}$$

$$\frac{3}{s-5} + \frac{2!}{s^3} + \frac{4}{s^2} + \frac{4}{s} + \frac{2 \cdot s}{s^2 + 9}$$

<!-- page 17 | Page 17 -->

4) $\mathcal{L}^{-1}\left(\frac{s-4}{s^{2}-4}\right)$

Soln:

$$\mathcal{L}^{-1}\left(\frac{s-4}{s^{2}-2^{2}}\right)$$

$$\mathcal{L}^{-1}\left(\frac{s}{s^{2}-2^{2}}-\frac{4}{s^{2}-2^{2}}\right)$$

$$\left(\mathcal{L}^{-1}\frac{s}{s^{2}-2^{2}}\right) - 4 \mathcal{L}^{-1}\left(\frac{1}{s^{2}-2^{2}}\right)$$

$$= \cosh 2t - \frac{4 \sinh 2t}{2}$$

$$= \cosh 2t - 2 \sinh 2t$$

> $$\frac{2s+1}{s^{2}+2s+5}$$

<!-- page 18 | Page 18 -->

soln :

$$\frac{2s+1}{s^2+2s+5}$$

$$= \mathcal{L}^{-1}\left[ \frac{2(s+1)-1}{(s+1)^2+2^2} \right]$$

$$\mathcal{L}^{-1}\left[ \frac{2(s+1)}{(s+1)^2+2^2} - \frac{1}{(s+1)^2+2^2} \right]$$

$$= 2 \mathcal{L}^{-1}\left[ \frac{s+1}{(s+1)^2+2^2} \right] - \mathcal{L}^{-1}\left[ \frac{1}{(s+1)^2+2^2} \right]$$

$$= 2 e^{-t} \cos 2t - \frac{1}{2} e^{-t} \sin 2t \quad //$$

<!-- page 19 | Page 19 -->

5) $\dfrac{4}{s^2-2s-3}$

$$L^{-1}\left(\dfrac{4}{s^2-2s-3}\right)$$

$$L^{-1} \dfrac{4}{s^2-2s+1-1-3}$$

~~$$4 \; L^{-1} \left(\dfrac{1}{s^2-2s+1-1-3}\right)$$~~

$$= 4 \; L^{-1} \left(\dfrac{1}{s^2-2s+1-1-3}\right)$$

$$= 4 \; L^{-1} \left(\dfrac{1}{(s-1)^2 - 4}\right)$$

$$= 4 \; L^{-1} \left(\dfrac{1}{(s-1)^2 - 2^2}\right)$$

<!-- page 20 | Page 20 -->

$$4\left(\frac{1}{2} e^{t} \sinh 2t\right)$$
$$= 2 e^{t} \sinh 2t$$

$$\begin{aligned}
(s+2)^2 &= s^2 + 2 \times 2 \times s + 2^2 \\
&= s^2 + 4s + 4
\end{aligned}$$

$$\frac{4}{2} = (2)^2 = 4$$
$$\frac{4}{2} \quad (2)^2$$

$$\text{HW} \quad \frac{s+8}{s^2 + 4s + 5}$$

$$= L^{-1}\left(\frac{s+8}{s^2 + 4s + 4 - 4 + 5}\right)$$

$$= L^{-1}\left(\frac{s+8}{(s+2)^2 + 1}\right)$$

$$= L^{-1}\left(\frac{s}{(s+2)^2 + 1^2}\right) + L^{-1}\left(\frac{8}{(s+2)^2 + 1^2}\right)$$

$$= L^{-1}\left(\frac{s}{(s+2)^2 + 1^2}\right) + 8 L^{-1}\left(\frac{1}{(s+2)^2 + 1^2}\right)$$

$$= e^{-t} \cos t - 8 \times \frac{1}{1} e^{-t} \sin t$$
$$e^{-t} \cos t - 8 e^{-t} \sin t /\!/$$

<!-- page 21 | Page 21 -->

$$\frac{5}{s^2 + 3s + 7}$$

$$\mathcal{L}^{-1}\left(\frac{5}{s^2 + 3s + 7}\right)$$

$$5 \mathcal{L}^{-1}\left(\frac{1}{s^2 + 3s + 7}\right)$$

$$5 \mathcal{L}^{-1}\left(\frac{1}{s^2 + 3s + \frac{9}{4} - \frac{9}{4} + 7}\right)$$

$$5 \mathcal{L}^{-1}\left(\frac{1}{s^2 + 3s + (3/2)^2 + \frac{19}{4}}\right)$$

$$5 \mathcal{L}^{-1}\left(\frac{1}{(s + 3/2)^2 + \left(\frac{\sqrt{19}}{2}\right)^2}\right)$$

$$= 5 \frac{1}{\sqrt{19}/2} e^{-\frac{3}{2}t} \sin \frac{\sqrt{19}}{2} t$$

<!-- page 22 | Page 22 -->

$$= \frac{10}{\sqrt{19}} e^{-3/2 t} \sin \frac{\sqrt{19}}{2} t$$

$$\begin{aligned}
&3(s+2)-1 \\
&3s+6
\end{aligned}$$

9. $\frac{3s+2}{s^2+9}$

$$= \mathcal{L}^{-1}\left(\frac{3s+2}{s^2+3^2}\right)$$

$$\mathcal{L}^{-1} \frac{3s}{s^2+3^2} + 2 \mathcal{L}^{-1} \frac{1}{s^2+3^2}$$

$$\mathcal{L}^{-1} 3 \left(\frac{s}{s^2+3^2}\right) + 2 \mathcal{L}^{-1}\left(\frac{1}{s^2+3^2}\right)$$

$$3 \cos 3t + 2 \cdot \frac{1}{3} \sin 3t$$

$$= 3 \cos 3t + \frac{2}{3} \sin 3t$$

<!-- page 23 | Page 23 -->

Partial fraction

1. $\dfrac{1}{(s-a)(s-b)} = \dfrac{A}{s-a} + \dfrac{B}{s-b}$

2. $\dfrac{1}{(s-a)^2} = \dfrac{A}{s-a} + \dfrac{B}{(s-a)^2}$

3. $\dfrac{1}{(s-a)^2(s-b)} = \dfrac{A}{s-a} + \dfrac{B}{(s-a)^2} + \dfrac{C}{s-b}$

4. $\dfrac{1}{(s-a)(s-b)^2} = \dfrac{A}{s-a} + \dfrac{B}{s-b} + \dfrac{C}{(s-b)^2}$

Find the inverse Laplace transform of

1. $\left[\dfrac{1}{(s-1)(s-3)}\right]$

2. $\dfrac{1}{(s-1)(s-3)}$

apply partial fraction

<!-- page 24 | Page 24 -->

$$\frac{1}{(s-1)(s-2)} = \frac{A}{(s-1)} + \frac{B}{(s-2)}$$

$$\times \text{ by } (s-1)(s-2)$$

$$\frac{1}{(s-1)(s-2)} = A(s-2) + B(s-1)$$

when $s = 1$

$$1 = A(1-2) = 1$$

$$A(1-2) = 1$$

$$-A = 1$$

$$A = -1$$

when $s = 2$

$$B(2-1) = 1$$

$$B = 1$$

$$\frac{1}{(s-1)(s-2)} = \frac{-1}{(s-1)} + \frac{1}{s-2}$$

<!-- page 25 | Page 25 -->

$$\mathcal{L}^{-1}\left(\frac{1}{(s-1)(s-2)}\right) = \mathcal{L}^{-1}\left[\frac{-1}{s-1}\right] + \mathcal{L}^{-1}\left[\frac{1}{s-2}\right]$$

$$= e^t + e^{2t}$$

2. $\frac{1}{(s+\sqrt{2})(s-\sqrt{3})}$

apply PF

$$\frac{1}{(s+\sqrt{2})(s-\sqrt{3})} = \frac{A}{(s+\sqrt{2})} + \frac{B}{(s-\sqrt{3})}$$

$$\times (s+\sqrt{2})(s-\sqrt{3})$$

$$\frac{1}{(s+\sqrt{2})(s-\sqrt{3})} = \frac{A}{(s-\sqrt{3})} + \frac{B}{s+\sqrt{2}}$$

[illegible]

<!-- page 26 | Page 26 -->

$$1 = A(s - \sqrt{3}) + B(s + \sqrt{2})$$

when $s = \sqrt{3}$

$$B(\sqrt{3} + \sqrt{2}) = 1$$

$$B = \frac{1}{\sqrt{3} + \sqrt{2}}$$

Put $s = -\sqrt{2}$

$$A(-\sqrt{2} - \sqrt{3}) = 1$$

$$A = \frac{-1}{-\sqrt{2} - \sqrt{3}}$$

$$\frac{1}{(s + \sqrt{2})(s - \sqrt{3})} = \frac{\frac{-1}{-\sqrt{2} - \sqrt{3}}}{s + \sqrt{2}} + \frac{\frac{1}{\sqrt{2} + \sqrt{3}}}{s - \sqrt{3}}$$

$$\mathcal{L}^{-1}\left[\frac{1}{(s + \sqrt{2})(s + \sqrt{3})}\right] = \frac{-1}{\sqrt{2} + \sqrt{3}} \mathcal{L}^{-1}\left[\frac{1}{s + \sqrt{2}}\right]$$

$$+ \frac{1}{\sqrt{2} + \sqrt{3}} \mathcal{L}^{-1}\left[\frac{1}{s - \sqrt{3}}\right]$$

<!-- page 27 | Page 27 -->

$$= \frac{-1}{\sqrt{2} + \sqrt{3}} e^{-\sqrt{2}t} + \frac{1}{\sqrt{2} + \sqrt{3}} e^{\sqrt{3}t}$$

$$\frac{9s+18}{(s-2)(s+1)^2}$$

Apply PF

$$\frac{9s+18}{(s-2)(s+1)^2} = \frac{A}{s-2} + \frac{B}{s+1} + \frac{C}{(s+1)^2}$$

$$\times \text{ by } (s-2)(s+1)^2$$

$$9s+18 = A(s+1)^2 + B(s+1)(s-2) + C(s-2)$$

<!-- page 28 | Page 28 -->

put $s = 2$,

$$9 \times 2 + 18 = A(9)$$
$$36 = 9A$$
$$A = 4 //$$

when $s = -1$

$$9 \times -1 + 18 = C(-1 - 2)$$
$$9 = -3C$$
$$C = -3 //$$

put $s = 0$

$$18 = A - 2B - 2C$$
$$18 = A - 2B - 2 \times -3$$
$$18 - 4 - 6 = -2B$$
$$8 = -2B$$
$$B = \underline{\underline{-4}}$$

<!-- page 29 | Page 29 -->

$$\frac{9s+18}{(s-2)(s+1)^2} = rac{4}{s+2} + \frac{-4}{s+1} + \frac{-3}{(s+1)^2}$$

$$\mathcal{L}^{-1}\left[\frac{9s+18}{(s-2)(s+1)^2}\right] = 4 \mathcal{L}^{-1}\left[\frac{1}{s+2}\right] - 4 \left[\frac{1}{s+1}\right] - 3 \left[ \dots \right]$$

$$= 4e^{2t} - 4 \times e^{-t} - 3 \times e^{-t} \frac{t^1}{1!}$$

HW

$$\frac{1}{(s+2)(s-1)^2} \text{ apply P.F}$$

$$\frac{1}{(s+2)(s-1)^2} = \frac{A}{s+2} + \frac{B}{(s-1)} + \frac{C}{(s-1)^2}$$

$$\times \text{ by } (s+2)(s-1)^2$$

$$1 = A(s-1)^2 + B(s+2)(s-1)$$
$$+ C(s+2)$$

<!-- page 30 | Page 30 -->

when $s = 1$

$$1 = 3C$$
$$C = 1/3$$

when $s = -2$

$$1 = 9A$$
$$A = 1/9$$

$$\frac{1}{(s+2)(s-1)^2} = \frac{1/9}{s+2} + \frac{-1/9}{(s-1)} + \frac{1/3}{(s-1)^2}$$

$$s = 0$$

$$1 = A - 2B + 2C$$
$$1 = \frac{1}{9} - 2B + 2 \times \frac{1}{3}$$
$$1 = \frac{1}{9} - 2B + \frac{2}{3}$$
$$1 - \frac{1}{9} - \frac{2}{3} = -2B$$
$$\frac{2}{9} = -2B$$
$$B = -1/9$$

$$\mathcal{L}^{-1}\left[\frac{1}{(s+2)(s-1)^2}\right] = \frac{1}{9}\mathcal{L}^{-1}\left[\frac{1}{s+2}\right] - \frac{1}{9}\mathcal{L}^{-1}\left[\frac{1}{s-1}\right]$$
$$+ \frac{1}{3}\mathcal{L}^{-1}\left[\frac{1}{(s-1)^2}\right]$$

$$\frac{1}{9} e^{-2t} - \frac{1}{9} e^t + \frac{1}{3} \frac{e^t t^1}{1!}$$

----

solution of O.D.E using Laplace Transform

1. Solve the initial value problem $y'' + 2y' + 2y = 0$
$y(0) = y'(0) = 1$ using Laplace transform

$$y'' + 2y' + 2y = 0$$

----

Soln:
$$\mathcal{L}[y^n] = s^n \bar{y} - s^{n-1}y(0) - s^{n-2}y'(0) - s^{n-3}y''(0) \dots$$
$$\mathcal{L}[y'] = s\bar{y} - y(0)$$
$$\mathcal{L}[y''] = s^2\bar{y} - sy(0) - y'(0)$$

<!-- page 31 | Page 31 -->

$$L[y'''] = s^3\bar{y} - s^2 y(0) - s y'(0) - y''(0)$$

---

1) $y'' + 2y' + 2y = 0$

Taking Laplace Transform on both sides of the differential E.

$$L[y'' + 2y' + 2y] = L[0]$$

$$L[y''] + 2 L[y'] + 2 L[y'] = 0$$

Applying Laplace Transform of derivative on above eqns.

$$s^2\bar{y} - s y'(0) - y'(0) + 2(s\bar{y} - y(0)) + 2\bar{y} = 0$$

applying initial condition in above eqn:

$$s^2\bar{y} - s \times 1 - 1 + 2 s\bar{y} - 2 \times 1 + 2\bar{y} = 0$$

$$(s^2 + 2s + 2)\bar{y} = s + 3$$

<!-- page 32 | Page 32 -->

$$\bar{y} = \frac{s+3}{s^2+2s+2}$$

Taking inverse LT

$$\mathcal{L}^{-1}[\bar{y}] = \mathcal{L}^{-1}\left[\frac{s+3}{s^2+2s+2}\right]$$

$$y = \mathcal{L}^{-1}\left[\frac{s+3}{s^2+2s+2}\right]$$

$$\frac{s+3}{s^2+2s+2} = \frac{s+3}{s^2+2s+1-1+2}$$

$$= \frac{s+3}{(s^2+1)^2+1^2} \quad \frac{s+1+2}{(s+1)^2+1^2}$$

$$y = \mathcal{L}^{-1}\left[\frac{(s+1)+2}{(s+1)^2+1^2}\right]$$

<!-- page 33 | Page 33 -->

$$L^{-1}\left[\frac{s+1}{(s+1)^2 + 1^2} + \frac{2}{(s+1)^2 + 1^2}\right]$$

$$= L^{-1}\left[\frac{s-(-1)}{(s-(-1))^2 + 1^2}\right] + 2 L^{-1}\left[\frac{1}{(s-(-1))^2 + 1^2}\right]$$

$$e^{-t}\cos t + 2 \times \frac{1}{1} e^{-t}\sin t$$

$$= e^{-t}\cos t + 2 e^{-t}\sin t$$

Solve the initial value problem

$$y'' + y' - 6y = 0, \quad y(0) = 1, \quad y'(0) = 0$$

Applying Laplace Transform.

Soln

$$y'' + y' - 6y = 0$$

Applying Laplace Transform on both sides of ODE

<!-- page 34 | Page 34 -->

$\mathcal{L}\left[y'' + y' - 6y\right] = \mathcal{L}[0]$

$\mathcal{L}\left[y''\right] + \mathcal{L}\left[y'\right] - 6 \mathcal{L}[y] = \mathcal{L}(0)$

$s^2 \bar{y} - s y'(0) - y'(0) + s\bar{y} - y(0) - 6 \bar{y} = 0$

$s^2 \bar{y} - s \times 0 - 0 + s\bar{y} - 1 - 6\bar{y} = 0$

$s^2 \bar{y} + s\bar{y} - 1 - 6\bar{y} = 0$

$(s^2 + s - 6) = s + 1$

$\bar{y} = \frac{s+1}{s^2 + s - 6}$

$\mathcal{L}^{-1}\left[\bar{y}\right] = \mathcal{L}^{-1} \frac{1}{s^2 + s - 6}$

$\left(\frac{1}{2}\right)^2 = \frac{1}{4}$

<!-- page 35 | Page 35 -->

Solve the O.D.E

$$y'' - 3y' + 2y = 4$$
$$y(0) = 0, \quad y'(0) = 3$$

Given eqn is:

$$y'' - 3y' + 2y = 4$$

$$\mathcal{L}[y'' - 3y' + 2y] = \mathcal{L}[4]$$

$$\mathcal{L}[y''] - 3\mathcal{L}[y'] + 2\mathcal{L}[y] = 4\mathcal{L}[1]$$

$$s^2\bar{y} - sy(0) - y'(0) - 3[s\bar{y} - y(0)] + 2\bar{y} = \frac{4}{s}$$

$$s^2\bar{y} - (s \times 0) - 3 - 3s\bar{y} + (3 \times 0) + 2\bar{y} = \frac{4}{s}$$

$$s^2\bar{y} - 3 - 3s\bar{y} + 2\bar{y} = \frac{4}{s}$$

~~$$(s^2 - 3s + 2)\bar{y} = 3s + 4$$~~

<!-- page 36 | Page 36 -->

$$(s^2 - 3s + 2)\bar{y} = \frac{4}{s} + 3 = \frac{3s+4}{s}$$

$$(s^2 - 3s + 2)\bar{y} = \frac{3s+4}{s}$$

$$\bar{y} = \frac{3s+4}{s(s^2 - 3s + 2)}$$

$$L^{-1}[\bar{y}] = L^{-1} \frac{3s+4}{s(s^2 - 3s + 2)}$$

$$y = L^{-1}\left[\frac{3s+4}{s(s-2)(s-1)}\right]$$

$$L^{-1}\left[\frac{3s+4}{s(s-2)(s-1)}\right] = \frac{A}{s} + \frac{B}{s-2} + \frac{C}{s-1}$$

$$\times\ s(s-2)(s-1)$$

$$3s+4 = A(s-2)(s-1) + B s(s-1) + C(s-2)$$

Put $s = 2 \qquad 3 \times 2 + 4 = 2B (2-1)$

$$10 = 2B$$

[illegible]

<!-- page 37 | Page 37 -->

$$s = 1, \quad 3 + 4 = C(1 - 2)$$
$$7 = -C$$
$$C = -7$$

$$s = 0$$
$$4 = 2A$$
$$A = 2$$

$$y = L^{-1}\left[\frac{3s + 4}{s(s - 2)(s - 1)}\right]$$

$$= L^{-1}\left[\frac{2}{s} + \frac{5}{s - 2} + \frac{-7}{s - 1}\right]$$

$$= 2 L^{-1}\left[1/s\right] + 5 L^{-1}\left[\frac{1}{s - 2}\right] - 7 L^{-1}\left[\frac{1}{s - 1}\right]$$

$$= 2 \times 1 + 5 e^{2t} - 7 e^t$$

<!-- page 38 | Page 38 -->

Qns) $y'' + 2y' + y = e^{-t}$ using Laplace transform.

Soln

$$y'' + 2y' + y = e^{-t}$$

$$L[y'' + 2y' + y] = e^{-t}$$

$$s^2 ar{y} - sy(0) - y'(0) + 2[sar{y} - y(0)] + ar{y} = L[e^{-t}]$$

$$s^2 ar{y} - s 	imes 0 - 1 + 2sar{y} - 2 	imes 0 + ar{y} = rac{1}{s+1}$$

$$(s^2 + 2s + 1)ar{y} = rac{1}{s+1} + 1$$

$$rac{1+s+1}{s+1} = rac{s+2}{s+1}$$

$$ar{y} = rac{s+2}{(s+1)(s^2 + 2s + 1)}$$

<!-- page 39 | Page 39 -->

$$L^{-1}[\bar{y}] = L^{-1}\left[\frac{s+2}{(s+1)(s+1)^2}\right]$$

$$L^{-1}[\bar{y}] = L^{-1}\left[\frac{s+2}{(s+1)^3}\right]$$

$$\frac{s+2}{(s+1)^3} = \frac{A}{s+1} + \frac{B}{(s+1)^2} + \frac{C}{(s+1)^3}$$

$$s+2 = A(s+1)^2 + B(s+1) + C(1)$$

$-1 + 2 = C$

$1 = C$

put $s = -1$

$-1 + 2 = C$

$C = 1$

equate the coeff of $s^2$ on both sides,

<!-- page 40 | Page 40 -->

$$A = 0$$
put $s = 0$
$$2 = A + B + C$$
$$2 = 0 + B + 1$$
$$B + 1 = 2$$
$$B = 1 //$$

$$y \quad \mathcal{L}^{-1}\left[\frac{s+2}{(s+1)^3}\right] = \mathcal{L}^{-1}\left[\frac{0}{s+1}\right] + \mathcal{L}^{-1}\left[\frac{1}{(s+1)^2}\right] + \mathcal{L}^{-1}\left[\frac{1}{(s+1)^3}\right]$$
$$\mathcal{L}^{-1}\left[\frac{1}{(s-(-1))^{1+1}}\right] + \mathcal{L}^{-1}\left[\frac{1}{(s-(-1))^{2+1}}\right]$$
$$= \frac{e^{-t} t^1}{1!} + \frac{e^{-t} t^2}{2!}$$

<!-- page 41 | Convolution Theorem -->

# Convolution Theorem

$\Rightarrow$ If $L^{-1} [\bar{f}(s)] = f(t)$

$L^{-1} \bar{g}(s) = g(t)$

then $L^{-1} [\bar{f}(s) \, \bar{g}(s)] = \int_{0}^{t} f(u) g(t-u) \, du$

or

$$\int_{0}^{t} g(u) f(t-u) \, du$$

### Question

Using convolution theorem find $L^{-1}$ of following fns.

1) $L^{-1} \left[ \frac{1}{s(s-a)} \right]$

**Soln.**
$$L^{-1} \left[ \frac{1}{s(s-a)} \right]$$

<!-- page 42 | Page 42 -->

$$\mathcal{L}^{-1} \left[ \frac{1}{s} \quad \frac{1}{s-a} \right]$$

$$\mathcal{L}^{-1} [\bar{f}(s) \, \bar{g}(s)]$$

$$\bar{f}(s) = 1/s \qquad \bar{g}(s) = \frac{1}{s-a}$$

$$\mathcal{L}^{-1}\bar{f}(s) = \mathcal{L}^{-1} [1/s] = 1 = f(t)$$

$$\mathcal{L}^{-1}\bar{g}(s) = \mathcal{L}^{-1} \frac{1}{s-a} = e^{at} = g(t)$$

$$- e^{at} = gt$$

By CT

$$\mathcal{L}^{-1} [\bar{f}(s) \cdot \bar{g}(s)] = \int_{0}^{t} f(u) \, g(t-u) \, du$$

$$\mathcal{L}^{-1} \left[ \frac{1}{s(s-a)} \right] = \int_{0}^{t} 1 \times e^{a(t-u)} \, du$$

$$= \left( \frac{e^{a(t-u)}}{-a} \right)_{0}^{t}$$

<!-- page 43 | Page 43 -->

$$= -\frac{1}{a} \left[ e^{a(t-t)} - e^{a(t-0)} \right]$$

$$-\frac{1}{a} \left[ e^0 - e^{at} \right]$$

$$-\frac{1}{a} [1 - e^{at}]$$

2) $L^{-1} \left[ \frac{1}{s(s^2+a^2)} \right]$

$$= L^{-1} \left[ \frac{1}{s} \cdot \frac{1}{s^2+a^2} \right]$$

$$L^{-1} [\bar{f}(s) \bar{g}(s)]$$

$$\bar{f}(s) = 1/s = f(t)$$

$$\bar{g}(s) = \frac{1}{s^2+a^2}$$

$$L^{-1}[\bar{f}(s)] = L^{-1}(1/s) = 1 = f(t)$$

$$L^{-1}[\bar{g}(s)] = L^{-1}\left[ \frac{1}{s^2+a^2} \right] = \frac{\sin at}{a}$$

<!-- page 44 | Page 44 -->

By convolution

$$\mathcal{L}^{-1}\left[\bar{f}(s)\; \bar{g}(s)\right] = \int_{0}^{t} f(u)\, g(t-u)\, du$$

$$\mathcal{L}^{-1}\left[\frac{1}{s(s^2+4)}\right] = \int_{0}^{t} 1 \times \frac{\sin 2(t-u)}{2}\, du$$

$$= \frac{1}{2} \int_{0}^{t} \sin 2(t-u)\, du$$

$$= \frac{1}{2} \left( \frac{-\cos 2(t-u)}{2 \times -1} \right)_{0}^{t}$$

$$= \frac{1}{4} \left[ \cos 2(t-t) - \cos 2(t-0) \right]$$

$$= \frac{1}{4} [1 - \cos 2t] \parallel$$

<!-- page 45 | Page 45 -->

3. $L^{-1}\left[\frac{1}{s^2(s^2+a^2)}\right]$

$= L^{-1}\left[\frac{1}{s^2} \frac{1}{s^2+a^2}\right]$

$L^{-1}[\bar{f}(s) \bar{g}(s)]$

$\bar{f}(s) = 1/s^2$

$\bar{g}(s) = 1/(s^2+a^2)$

$L^{-1}[\bar{f}(s)] = L^{-1}\left(1/s^2\right) = L^{-1}\left(\frac{1}{s^{1+1}}\right) = \frac{t^1}{1!} = t$

$g(t) = L^{-1}(\bar{g}(s)) = L^{-1}\left(\frac{1}{s^2+a^2}\right) = \frac{1}{a} \sin at$

by CT

<!-- page 46 | Page 46 -->

$$\int uv = uv_1 - u'v_2 + u''v_3 - u'''v_4 \dots$$

$$L^{-1}\left[\bar{f}(s)\, \bar{g}(s)\right] = \int_0^t f(u)\, g(t-u)\, du$$

$$= \int_0^t u \frac{\sin a(t-u)}{a}\, du$$

$$= \frac{1}{a} \int_0^t u \times \sin a(t-u)\, du$$

$$= \frac{1}{a} \left[ u \cdot \frac{-\cos a(t-u)}{-a} - 1 \frac{1}{a} \frac{\sin a(t-u)}{-a} \right]_0^t$$

$$= \frac{1}{a} \left[ \frac{t}{-a} \cos a(t-t) + \frac{1}{a^2} \sin a[t-t] \right]$$
$$- \left( 0 + 1/a^2 \sin a(t-0) \right)$$

$$= \frac{1}{a} \left[ t/a \cos 0 + 0 - \frac{1}{a^2} \sin at \right]$$

$$= \frac{1}{a} \left( t/a - 1/a^2 \sin at \right)//$$

<!-- page 47 | Page 47 -->

$$L^{-1}\left[\frac{s}{s^2+a^2} \cdot \frac{1}{s^2+a^2}\right]$$

$$\bar{f}(s) = \frac{s}{s^2+a^2}$$

$$\bar{g}(s) = \frac{1}{s^2+a^2}$$

$$L^{-1}\bar{f}(s) = L^{-1}\left(\frac{s}{s^2+a^2}\right) = \cos at$$

$$L^{-1}\bar{g}(s) = L^{-1}\left(\frac{1}{s^2+a^2}\right) = \frac{1}{a} \sin at$$

By CT

~~$$L^{-1}[\bar{f}(s) \bar{g}(s)] = \int_{0}^{t} \cos at f(u) g(u)$$~~

By CT

$$L^{-1}[\bar{f}(s) \cdot \bar{g}(s)] = \int_{0}^{t} f(u) \cdot g(t-u) \, du$$

<!-- page 48 | Page 48 -->

$$L^{-1} \int_0^t \left[ \cos ay \, \frac{1}{a} \sin a (t-u) \, dy \right]$$

$$\frac{1}{2a} L^{-1} \left[ 2 \cos ay \sin a (t-u) \, dy \right]_0^t$$

$$\boxed{\begin{aligned}
2 \cos A \sin B & \\
= \sin (A+B) &+ \sin (A-B)
\end{aligned}}$$

$$\frac{1}{2a} \int_0^t \left[ \sin (ay + at - ay) + \sin (ay - (at - ay)) \right] dy$$

$$\frac{1}{2a} \int_0^t \left[ \sin at + \sin (2ay - at) \right] dy$$

$$= \frac{1}{2a} \left[ u \sin at + - \frac{\cos (2ay - at)}{2a} \right]_0^t$$

$$= \frac{1}{2a} \left[ t \sin at - \frac{\cos (2ay - at)}{2a} \right]_0^t$$

<!-- page 49 | Page 49 -->

$$\left\{\begin{aligned}\cos(-\theta) &= \cos\theta \\[6pt]\sin(-\theta) &= -\sin\theta\end{aligned}\right\}$$

$$= \frac{1}{2a} \left[ t\sin at - \frac{\cos}{2a}(\cos at - at) \left(-0 - \frac{1}{2a}\cos(0 - at)\right) \right]$$

$$= \frac{1}{2a} \left[ t\sin at - \frac{\cos at}{2a} + \frac{1}{2a}\cos at \right]$$

$$= \frac{t\sin t}{2a} \parallel$$

$$\text{Qns)} \quad L^{-1}\left[ \frac{s^2}{(s^2+a^2)(s^2+b^2)} \right]$$

$$= L^{-1}\left[ \frac{s}{s^2+a^2} \frac{s}{s^2+b^2} \right]$$

$$= L^{-1}\left[ \bar{f}(s)\, \bar{g}(s) \right]$$

<!-- page 50 | Page 50 -->

$\bar{f}(s) = \frac{s}{s^2 + a^2}$

$\bar{g}(s) = \frac{s}{s^2 + b^2}$

$f(t) = L^{-1}[\bar{f}(s)] = \cos at$

$g(t) = L^{-1}[\bar{g}(s)] = \cos bt$

By CT

$L^{-1}[\bar{f}(s) \bar{g}(s)] = \int_{0}^{t} f(u) g(t-u) \, du$

$= L^{-1}\left[ \frac{s^2}{(s^2 + a^2)(s^2 + b^2)} \right]$

$= \int_{0}^{t} \cos au \cos b(t-u) \, du$

<!-- page 51 | Page 51 -->

$$2 \cos A \cos B = \cos(A+B) + \cos(A-B)$$

$$= \frac{1}{2} \int_0^t 2 \cos ay \cdot \cos b(t-y) \, dy$$

$$\frac{1}{2} \int_0^t [\cos (ay + bt - by) + \cos (ay - (bt - by))] \, dy$$

$$= \frac{1}{2} \int_0^t \cos ((a-b)y + bt) + \cos ((a+b)y - bt) \, dy$$

$$\frac{1}{2} \left[ \frac{\sin ((a-b)y + bt)}{a-b} + \frac{\sin ((a+b)y - bt)}{a+b} \right]_0^t$$

$$\frac{1}{2} \left[ \frac{\sin ((a-b)t + bt)}{a-b} + \frac{\sin ((a+b)t - bt)}{a+b} \right]_0^t$$

$$- \left[ \frac{\sin bt}{a-b} + \frac{\sin (-bt)}{a+b} \right]_0^t$$

<!-- page 52 | Unit Step function -->

$$\frac{1}{2} \left[ \frac{\sin at}{a-b} + \frac{\sin at}{a+b} - \frac{\sin bt}{a-b} + \frac{\sin bt}{a+b} \right]$$

## Unit Step function

$u(t-a)$ is defined as, $u(t-a) = \begin{cases} 0, \text{ when } t < a \\ 1, \text{ when } t > a \end{cases}$

## LT of unit step fn

$$\mathcal{L}[u(t-a)] = \int_{0}^{\infty} e^{-st} u(t-a)\,dt$$

$$= \int_{0}^{a} e^{-st} \times 0\,dt + \int_{a}^{\infty} e^{-st} \cdot 1\,dt$$

$$= 0 + \left( \frac{e^{-st}}{-s} \right)_{a}^{\infty}$$

$$= \frac{-1}{s} \left( e^{-\infty} - e^{-as} \right)$$

$$= -\frac{1}{s} (0 - e^{-as}) = \frac{e^{as}}{s}$$

<!-- page 53 | Page 53 -->

Note:
$$L[f(t-a) u(t-a)] = e^{-as} f(s)$$

Find the Laplace Transform of the following fn

$$L\left[e^{-3t} u(t-1)\right]$$

Soln:

$$e^{-3t} u(t-1) = e^{-3(t-1+1)} u(t-1)$$

$$= e^{-3(t-1)-3} u(t-1)$$

<!-- page 54 | Page 54 -->

$$e^{-3(t-1)} e^{-3} u(t-1)$$
$$= e^{-3} e^{-3(t-1)} u(t-1)$$
$$\mathcal{L}\left[e^{-3t} u(t-1)\right]$$
$$= e^{-3} \mathcal{L}\left[e^{-3(t-1)} u(t-1)\right]$$

Here $f(t-a) = e^{-3(t-1)}$

Here $f(t) = e^{-3t}$

$a = 1$

$$\mathcal{L}[f(t)] = \frac{1}{s+3} = \bar{f}(s)$$

$$\therefore \mathcal{L}\left[e^{-3t} u(t-1)\right]$$
$$= e^{-3} e^{-as} \bar{f}(s)$$
$$= e^{-3} e^{-s} \frac{1}{s+3}$$
$$= \frac{e^{-3-s}}{s+3} //$$

<!-- page 55 | Page 55 -->

Unit Impulse function

The unit Impulse fn
$$\delta(t-a) = \begin{cases} \infty, & \text{if } t = a \\ 0, & \text{if } t \neq a \end{cases}$$

Note:
$$\mathcal{L}[f(t)\delta(t-a)] = e^{-as}f(a)$$

Find the Laplace Transform of the following fns.

1) $\mathcal{L}[t^2 \delta(t-3)]$

$$= \mathcal{L}[f(t)\delta(t-a)]$$

$$= e^{-as} f(a) \left[ a=3, f(t) = t^2, f(a=3), 3^2=9 \right]$$

<!-- page 56 | Page 56 -->

(a) $\mathcal{L}[\cosh t \ \delta(t-4)]$

$= \mathcal{L}[f(t) \ \delta(t-a)]$

$= e^{-as} f(a) \left[\begin{matrix} a=4 & f(t)=\cosh t \\ f(a=4) = \cosh 4 \end{matrix}\right]$

$= e^{-4s} \cosh 4$

$$\mathcal{L}\left[e^{-4t} \delta(t-2) + \log t \ \delta(t-2)\right]$$

$$\mathcal{L}\left[f(t) \delta(t-a)\right] + \mathcal{L}\left[\log t \ \delta(t-2)\right]$$

<!-- page 57 | Page 57 -->

[Non-content page]
