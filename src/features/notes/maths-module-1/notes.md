<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 1 -->

[Non-content page]

---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 2 -->

# Module 1 : Limits Of Function Values

If $f(x)$ is arbitrarily close to the no. $L$, for all $x$'s sufficiently close to $c$ other the $c$ itself, then we say that $f$ approaches the limit $L$ as $x$ approaches to $c$.



```math
\lim_{x \to c} f(x) = L
```



> The limit of a function is the value of the function as the input gets close or approaches the some point.

**Q.** Find the limit of the function $f(x) = \frac{x^2 - 1}{x - 1}$ at $x = 1$



```math
\begin{aligned}
\lim_{x \to 1} f(x) &= \lim_{x \to 1} \frac{x^2 - 1}{x - 1} \\
&= \lim_{x \to 1} \frac{(x + 1)(x - 1)}{(x - 1)} \\
&= 1 + 1 = \underline{\underline{2}}
\end{aligned}
```



**Q.** Find the limits of the identity function and constant function as $x$ approaches to $c$.

### Identity Functions



```math
f(x) = x
```




```math
\lim_{x \to c} f(x) = \lim_{x \to c} x = c
```





```jsxgraph
{
  "boundingBox": [
    -1,
    5,
    5,
    -1
  ],
  "axis": true,
  "points": [],
  "segments": [],
  "circles": [],
  "functions": [
    {
      "expression": "x",
      "label": "f(x): y = x"
    }
  ]
}
```



### Constant Function



![Graph of a constant function y = k](/notes/cse/s1/maths/page-002-image-2-60fc0510-c168-41a0-ba3c-75207bd63713.webp)





```math
y = f(x) = k
```




```math
\lim_{x \to c} f(x) = \lim_{x \to c} k = k
```



---

**Discuss the behaviour of the following**



```math
u(x) = \begin{cases} 0, & x < 0 \\ 1, & x \ge 0 \end{cases} \quad (\text{unit - step function})
```





![Graph of the unit step function u(x)](/notes/cse/s1/maths/page-002-image-3-b3043ba9-9d0f-4cc6-b8ae-99de8957fc12.webp)



The unit step fn. $u(x)$ has no limit as $x \to 0$. Because it jumps at $x = 0$. For -ve values of $x$, it is arbitrarily close to $0$. For +ve values of $x$, it is arbitrarily close to $1$. There is no single value $L$ as $x$ approaches to $0$.

---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 3 -->

## Limit Laws / Limit Rules

If: $L, M, c$ and $k$ are real numbers and limit extends to $c$



```math
\lim_{x \to c} f(x) = L
```




```math
\lim_{x \to c} g(x) = M
```



1. **Sum Rule :** 
   

```math
\lim_{x \to c} (f(x) + g(x)) = \lim_{x \to c} f(x) + \lim_{x \to c} g(x)
```


   

```math
= L + M
```



2. **Difference Rule :** 
   

```math
\lim_{x \to c} (f(x) - g(x)) = \lim_{x \to c} f(x) - \lim_{x \to c} g(x) = L - M
```



3. **Constant Multiplication Rule :**
   

```math
\lim_{x \to c} (k f(x)) = k \lim_{x \to c} f(x) = k L
```



4. **Product Rule :** 
   

```math
\lim_{x \to c} (f(x) * g(x)) = \lim_{x \to c} f(x) \times \lim_{x \to c} g(x) = L \times M
```



5. **Quotient Rule :** 
   

```math
\lim_{x \to c} (f(x) / g(x)) = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)} = L / M
```



6. **Power Rule :** 
   

```math
\lim_{x \to c} (f(x))^n = \left(\lim_{x \to c} f(x)\right)^n = (L)^n
```



7. **Root Rule :** 
   

```math
\lim_{x \to c} \sqrt[n]{f(x)} = \left(\lim_{x \to c} f(x)\right)^{1/n} = (L)^{1/n} \text{ or } \sqrt[n]{L}
```



---

### Q. Find the limit of the following

1) 


```math
\lim_{x \to c} (x^3 + 4x^2 - 3)
```




```math
= \lim_{x \to c} x^3 + \lim_{x \to c} 4x^2 - \lim_{x \to c} 3
```




```math
= c^3 + 4 \lim_{x \to c} x^2 - 3
```




```math
= \underline{c^3 + 4c^2 - 3}
```



2) 


```math
\lim_{x \to c} \frac{x^4 + x^2 - 1}{x^2 + 5} = \frac{\lim_{x \to c} x^4 + x^2 - 1}{\lim_{x \to c} x^2 + 5} = \frac{\lim_{x \to c} x^4 + \lim_{x \to c} x^2 - \lim_{x \to c} 1}{\lim_{x \to c} x^2 + \lim_{x \to c} 5}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 4 -->



```math
= \frac{c^4 + c^2 - 1}{c^2 + 5}
```



---

3) $\lim_{x \to 2} \sqrt{4x^2 + 3}$



```math
\begin{aligned}
= \left(\lim_{x \to 2} \{4x^2 + 3\}\right)^{1/2} &= \left(\lim_{x \to 2} 4x^2\right)^{1/2} + \left(\lim_{x \to 2} 3\right)^{1/2} \\
&= \lim_{x \to 2} (4 \times 4)^{1/2} + (3)^{1/2} \\
&= \sqrt{16} + \sqrt{3} = \cancel{\sqrt{19}} \quad \sqrt{16+3} = \underline{\underline{\sqrt{19}}}
\end{aligned}
```



---

### Evaluating limits of Polynomials and Rational Functions.

Let $P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_0$ be a polynomial of degree $n$.



```math
\lim_{x \to c} P(x) = P(c).
```



Let $f(x) = \frac{P(x)}{q(x)}$ is a quotient polynomial or rational polynomial.



```math
\lim_{x \to c} f(x) = \frac{\lim_{x \to c} P(x)}{\lim_{x \to c} q(x)} = \frac{P(c)}{q(c)}, \quad q(c) \neq 0.
```



---

**Q.** Find $\lim_{x \to -1} \frac{x^3 + 4x^2 - 3}{x^2 + 5}$



```math
= \frac{\lim_{x \to -1} x^3 + 4x^2 - 3}{\lim_{x \to -1} x^2 + 5} = \frac{-1 + 4 - 3}{1 + 5} = 0/6 = 0 //
```



---

**Q.** Evaluate $\lim_{x \to 1} \frac{x^2 + x - 2}{x^2 - x}$



```math
= \frac{\lim_{x \to 1} x^2 + x - 2}{\lim_{x \to 1} x^2 - x} = \frac{1 + 1 - 2}{1 - 1} = 0/0, \text{ not defined}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 5 -->

$\cdot \lim_{x \to 1} \frac{(x+2)(x-1)}{x(x-1)} = \frac{1+2}{1} = 3/1 = \underline{\underline{3}}$



```math
\begin{aligned}
\text{Sum} &= -1 \\
\text{product} &= 2
\end{aligned}
```



**Q.** Evaluate $\lim_{x \to 0} \frac{\sqrt{x^2+100}-10}{x^2}$

*taking conjugative of radical*



```math
\lim_{x \to 0} \frac{(\sqrt{x^2+100}-10)(\sqrt{x^2+100}+10)}{x^2(\sqrt{x^2+100}+10)} = \lim_{x \to 0} \frac{(\sqrt{x^2+100})^2 - 10^2}{x^2(\sqrt{x^2+100}+10)}
```





```math
= \lim_{x \to 0} \frac{x^2+100-100}{x^2(\sqrt{x^2+100}+10)} = \lim_{x \to 0} \frac{x^2}{x^2(\sqrt{x^2+100}+10)} = \frac{1}{\sqrt{0^2+100}+10}
```





```math
= \frac{1}{10+10} = \underline{\underline{1/20}}
```



---

## The Sandwitch theorem

Suppose that $g(x) \le f(x) \le h(x)$ for all $x$ in some open interval containing $C$ let



```math
\lim_{x \to c} g(x) = L
```




```math
\lim_{x \to c} h(x) = L
```




```math
\lim_{x \to c} f(x) = L
```



> *Sandwitch theorem also known as squeeze theorem, is a calculus theorem that helps to determine the limit of an inequality function by comparing it to two other function with known limit.*

---

**Q** Given a function $u$ satisfying the condition $1 - \frac{x^2}{4} \le u(x) \le 1 + \frac{x^2}{2}, x \ne 0$ for all $x$ not equal to $0$, find $\lim_{x \to 0} u(x)$.

By using sandwitch theorem



```math
\lim_{x \to 0} g(x) = \lim_{x \to 0} 1 - \frac{x^2}{4} = 1 - \frac{0}{4} = 1 - 0 = 1
```





```math
\lim_{x \to 0} h(x) = \lim_{x \to 0} 1 + \frac{x^2}{2} = 1 + \frac{0}{2} = 1 + 0 = 1
```





```math
\therefore \underline{\underline{\lim_{x \to 0} u(x) = 1}}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 6 -->

How does the function $g(x) = x^2 \text{sin} \frac{1}{x^2}$ behaves near $x = 0$ :

By using sandwitch theorem,

Since the range of the $\sin$ function lies between -1 and 1 ,
Similarly $\sin \frac{1}{x^2}$ is also lies blw -1 and 1

i.e, $-1 \le \sin(\frac{1}{x^2}) \le 1$ [multiplying $x^2$ in both sides]

$\Rightarrow -x^2 \le x^2 \sin(\frac{1}{x^2}) \le x^2$

$f(x) \le g(x) \le h(x)$ By using Sandwitch theorem



```math
\lim_{x \to 0} f(x) = \lim_{x \to 0} -x^2 = 0
```





```math
\lim_{x \to 0} h(x) = \lim_{x \to 0} x^2 = 0
```





```math
\therefore \lim_{x \to 0} g(x) = \lim_{x \to 0} x^2 \cdot \sin(\frac{1}{x^2}) = 0
```



---

Q Find the limit of the following.

1. $\lim_{x \to 3} \frac{x^2-6x+9}{x-3}$

   

```math
\begin{aligned}
   &\Rightarrow x^2-6x+9 = 0 \\
   &\Rightarrow (x-3)(x-3) = 0 \quad \begin{matrix} P = 9 \\ S = -6 \end{matrix}
   \end{aligned}
```



   

```math
\Rightarrow \lim_{x \to 3} \frac{x^2-6x+9}{x-3} = \lim_{x \to 3} \frac{(x-3)^2}{(x-3)} = x-3 = 3-3 = 0
```



2. $\lim_{x \to -4} \frac{2x+8}{x^2+x-12}$

   

```math
= \lim_{x \to -4} \frac{2(x+4)}{(x+4)(x-3)} = \frac{2}{-4-3} = \frac{2}{-7} = -2/7
```



3. $\lim_{x \to 5} \frac{x^2-3x-10}{x^2-10x+25} = \lim_{x \to 5} \frac{(x-5)(x+2)}{(x-5)(x-5)}$

   

```math
\begin{aligned}
   \Rightarrow & x^2-3x-10 = 0 \\
   \begin{matrix} P = -10 \\ S = -3 \end{matrix} & (x-5)(x+2) = 0 \\
   \Rightarrow & x^2-10x+25 = 0 \\
   \begin{matrix} P = 25 \\ S = -10 \end{matrix} & (x-5)(x-5) = 0
   \end{aligned}
```



   

```math
= \lim_{x \to 5} \frac{(x+2)}{(x-5)}
```



   it cannot be factorised further

   

```math
\therefore \text{limit does not exists!}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 7 -->

4. $\lim_{x \to -2} (x^3 - 15)$

   $= ((-2)^3 - 15) = -8 - 15 = \underline{\underline{-23}}$

---

5. $\lim_{x \to 2} (-x^2 + 5x - 2) = \lim_{x \to 2} (-x^2) + \lim_{x \to 2} (5x) - \lim_{x \to 2} (2)$

   $\text{\sout{= -4 + 10 - 2 = 12}}$

   $= -4 + 10 - 2 = \underline{\underline{4}}$

---

6. $\lim_{x \to 2} \frac{2x + 5}{11 - x^3}$

   $= \frac{\lim_{x \to 2} 2x + 5}{\lim_{x \to 2} 11 - x^3} = \frac{2 \times 2 + 5}{11 - 2^3} = \frac{9}{3} = \underline{\underline{3}}$

---

7. $\lim_{x \to 2/3} (8 - 3x)(2x - 1)$

   $= \lim_{x \to 2/3} (8 - 3x) \times \lim_{x \to 2/3} (2x - 1)$

   $= 8 - 3 \times \frac{2}{3} \cdot 2 \times \frac{2}{3} - 1$

   $= 6 \times \frac{1}{3} = \text{\sout{4/2}} \text{ } 6/3 = \underline{\underline{2}}$

---

8. $\lim_{x \to -1/2} 4x(3x + 4)^2$

   $= \lim_{x \to -1/2} (4x) \cdot \left(\lim_{x \to -1/2} (3x + 4)\right)^2$

   $= \overset{2}{\cancel{4}}x \cdot -\frac{1}{2} \cdot \left(3x \cdot -\frac{1}{2} + 4\right)^2$

   $= -2 \cdot \left(\frac{-3 + 8}{2}\right)^2 = -2 \cdot \left(\frac{5}{2}\right)^2 = \frac{-\cancel{2} \times 25}{\cancel{4}_2} = \underline{\underline{\frac{-25}{2}}}$

---

9. $\lim_{y \to -3} (5 - y)^{4/3} \qquad\qquad \begin{matrix} (2^3)^{4/3} \\ = 2 \end{matrix}$

   $= \left(\lim_{y \to -3} 5 - y\right)^{4/3} = (5 - (-3))^{4/3} = \text{\sout{5+}} (8)^{4/3} = (2^3)^{4/3} = (2)^4 = \underline{\underline{16}}$

---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 8 -->

10. $\lim_{h \to 0} \frac{3}{\sqrt{3h+1} + 1}$



```math
= \frac{\lim_{h \to 0} 3}{\lim_{h \to 0} \sqrt{3h+1} + 1} = \frac{3}{\sqrt{1} + 1} = \underline{3/2}
```



---

11. $\lim_{h \to 1} \frac{\sqrt{6h+10} - 5}{h^2}$



```math
= \frac{\lim_{h \to 1} \sqrt{6h+10} - 5}{\lim_{h \to 1} h^2} = \frac{\sqrt{6+10} - 5}{1} = \frac{4-5}{1} = \underline{-1}
```



---

12. $\lim_{x \to 1} \frac{x-1}{\sqrt{x+3} - 2}$



```math
= \frac{\lim_{x \to 1} x-1}{\lim_{x \to 1} \sqrt{x+3} - 2} = \frac{1-1}{\sqrt{1+3} - 2} = \frac{0}{0} \quad \text{Not defined}
```





```math
\lim_{x \to 1} \frac{(x-1)(\sqrt{x+3} + 2)}{(\sqrt{x+3} - 2)(\sqrt{x+3} - 2)} = \lim_{x \to 1} \frac{(x-1)(\sqrt{x+3} + 2)}{(\sqrt{x+3})^2 - (2)^2}
```





```math
= \lim_{x \to 1} \frac{(x-1)(\sqrt{x+3} + 2)}{x+3-4} = \lim_{x \to 1} \frac{(x-1)(\sqrt{x+3} - 2)}{(x-1)} = \lim_{x \to 1} \sqrt{1+3} + 2
```





```math
= 2+2 = \underline{\underline{4}}
```



---

13. $\lim_{x \to 5} \frac{x-5}{x^2-25}$

$\Rightarrow x^2-25 = (x+5)(x-5)$

Subs $(x+5)(x-5)$



```math
\lim_{x \to 5} \frac{x-5}{(x+5)(x-5)} = \frac{1}{5+5} = \underline{\underline{\frac{1}{10}}}
```



---

14. $\lim_{x \to 3} \frac{x+4}{x^2+7x+14}$



```math
= \frac{\lim_{x \to 3} x+4}{\lim_{x \to 3} (x^2+7x+14)} = \frac{3+4}{9+21+14} = \underline{\underline{\frac{7}{44}}}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 9 -->

15. 


```math
\lim_{x \to -5} \frac{x^2+3x-10}{x+5}
```





```math
\begin{aligned}
\Rightarrow & x^2+3x-10 = 0 \\
& (x+5)(x-2) = 0
\end{aligned}
```





```math
\begin{aligned}
&= \lim_{x \to -5} \frac{(x+5)(x-2)}{x+5} \\
&= -5-2 = \underline{\underline{-7}}
\end{aligned}
```



---

16. 


```math
\lim_{x \to 2} \frac{x^2-7x+10}{x-2}
```





```math
\begin{aligned}
\Rightarrow & x^2-7x+10 = 0 \\
& (x-5)(x-2) = 0
\end{aligned}
```





```math
\begin{aligned}
&= \lim_{x \to 2} \frac{(x-5)(x-2)}{x-2} \\
&= 2-5 = \underline{\underline{-3}}
\end{aligned}
```



---

17. 


```math
\lim_{t \to 2} \frac{t^2+4t+3}{t^2-9}
```





```math
= \frac{\lim_{t \to 2} t^2+4t+3}{\lim_{t \to 2} t^2-9} = \frac{4+8+3}{4-9} = \frac{-15}{5} = \underline{\underline{-3}}
```



---

18. 


```math
\lim_{t \to -2} \frac{-2t-4}{t^3+2t^2}
```





```math
= \lim_{t \to -2} \frac{-2(t+2)}{t^2(t+2)} = \frac{-2}{-2^2} = \frac{-2}{4} = \underline{\underline{-1/2}}
```



---

19. 


```math
\lim_{x \to 0} (2\sin x - 1)
```





```math
\begin{aligned}
&= \lim_{x \to 0} 2\sin x - \lim_{x \to 0} 1 \\
&= 2 \times \sin 0 - 1 \\
&= \underline{\underline{-1}}
\end{aligned}
```



---

20. 


```math
\lim_{x \to 0} \frac{1+x+\sin x}{2\cos x}
```





```math
\begin{aligned}
&= \frac{\lim_{x \to 0} 1+x+\sin x}{\lim_{x \to 0} 2\cos x} \\
&= \frac{1+0+\sin 0}{2\cos 0} = \underline{\underline{\frac{1}{2}}}
\end{aligned}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 10 -->

21. $\lim_{x \to \pi} \sqrt{x+2} \{\sin(x/2)\}



```math
= \sqrt{\pi+2} \times 1 = \underline{\underline{\sqrt{\pi+2}}}
```



---

22. $\lim_{x \to -3} \frac{2 - \sqrt{x^2-5}}{x+3}$



```math
= \lim_{x \to -3} \frac{(2 - \sqrt{x^2-5})(2 + \sqrt{x^2-5})}{(x+3)(2 + \sqrt{x^2-5})}
```





```math
= \lim_{x \to -3} \frac{(2^2 - (\sqrt{x^2-5})^2)}{(x+3)(2 + \sqrt{x^2-5})} = \lim_{x \to -3} \frac{4 - x^2 + 5}{(x+3)(2 + \sqrt{x^2-5})}
```





```math
= \lim_{x \to -3} \frac{9 - x^2}{(x+3)(2 + \sqrt{x^2-5})} = \lim_{x \to -3} \frac{(3+x)(3-x)}{(x+3)(2 + \sqrt{x^2-5})}
```





```math
= \frac{3+3}{2 + \sqrt{9-5}} = \frac{6}{2+2} = 6/4 = \underline{\underline{3/2}}
```



---

23. $\lim_{x \to 1} \frac{x^{-1} - 1}{x - 1}$



```math
= \lim_{x \to 1} \frac{\frac{1}{x} - 1}{x - 1} = \frac{\lim_{x \to 1} \frac{1-x}{x}}{\lim_{x \to 1} x - 1} \qquad ~~= \lim_{x \to 1} \frac{1-1}{1-1} = \frac{0}{1} \times 0 \to \frac{0}{1} = 0

Crossed out in the source:
```





```math
= \lim_{x \to 1} \frac{-(x-1)}{x} \times \frac{1}{x-1} = \lim \frac{-1}{1} = -1 //
```



---

24. Find $\lim_{x \to 0} f(x)$ if $\sqrt{9 - 5x^2} \le f(x) \le \sqrt{x^2 + 9}$

By using sandwitch theorem,



```math
\lim_{g(x)} = \lim_{x \to 0} \sqrt{9 - 5x^2} = \sqrt{9 - 0} = \sqrt{9} = \underline{\underline{3}}
```





```math
\lim_{h(x)} = \lim_{x \to 0} \sqrt{x^2 + 9} = \sqrt{0 + 9} = \sqrt{9} = \underline{\underline{3}}
```





```math
\therefore \lim_{x \to 0} f(x) = \underline{\underline{3}}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 11 -->

### Q. 25


```math
\lim_{x \to 0} \frac{2\sin x}{2 - 2\cos x} \quad \text{if } 1 - \frac{x^2}{6} \le \frac{2\sin x}{2 - 2\cos x} \le 1
```





```math
g(x) \le f(x) \le h(x)
```





```math
\lim_{x \to 0} g(x) = \lim_{x \to 0} 1 - \frac{x^2}{6} = 1 - \frac{0}{6} = 1
```





```math
\lim_{x \to 0} h(x) = \lim_{x \to 0} 1 = 1
```





```math
\therefore \lim_{x \to 0} \frac{2\sin x}{2 - 2\cos x} = 1
```



---

### Q. Evaluate


```math
\lim_{x \to \infty} \frac{3x^2 + 2x + 1}{2x^2 + x + 1}
```



> $(1/\infty = 0)$  
> if infinity is in  
> denominator $= 0$



```math
\lim_{x \to \infty} \frac{\frac{3x^2 + 2x + 1}{x^2}}{\frac{2x^2 + x + 1}{x^2}} = \lim_{x \to \infty} \frac{\frac{3x^2}{x^2} + \frac{2x}{x^2} + \frac{1}{x^2}}{\frac{2x^2}{x^2} + \frac{x}{x^2} + \frac{1}{x^2}}
```





```math
= \frac{3 + \frac{2}{x} + \frac{1}{x^2}}{2 + \frac{1}{x} + \frac{1}{x^2}} = \frac{3 + \frac{2}{\infty} + \frac{1}{\infty}}{2 + \frac{1}{\infty} + \frac{1}{\infty}} = \frac{3 + 0 + 0}{2 + 0 + 0} = \frac{3}{2}
```



---

### 2.


```math
\lim_{x \to \infty} \frac{4x^2 - x + 2}{2x^2 + 3x - 1}
```





```math
\lim_{x \to \infty} \frac{\frac{4x^2 - x + 2}{x^2}}{\frac{2x^2 + 3x - 1}{x^2}} = \frac{\frac{4x^2}{x^2} - \frac{x}{x^2} + 2/x^2}{\frac{2x^2}{x^2} + \frac{3x}{x^2} - 1/x^2} = \frac{4 - 1/x + 2/x^2}{2 + 3/x - 1/x^2}
```





```math
= \frac{4 - \frac{1}{\infty} + 2/\infty}{2 + 3/\infty - 1/\infty} = \frac{4 - 0 + 0}{2 + 0 - 0} = \frac{4}{2} = 2
```



**OR**



```math
\lim_{x \to \infty} \frac{x^2(4 - 1/x + 2/x^2)}{[illegible]} = \frac{4 - 1/\infty + 2/\infty}{[illegible]} = \frac{4 - 0 + 0}{[illegible]} = \frac{4}{2} = 2
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 12 -->

3. 

```math
\lim_{x \to \infty} \frac{2x^2+3x+1}{x^2-x+4}
```





```math
= \lim_{x \to \infty} \frac{x^2 \left(2 + 3/x + 1/x^2\right)}{x^2 \left(1 - 1/x + 4/x^2\right)} = \frac{2 + \frac{3}{\infty} + \frac{1}{\infty}}{1 - \frac{1}{\infty} + \frac{4}{\infty}} = \frac{2+0+0}{1-0+0} = \underline{\underline{2}}
```



---

### $\underline{\text{Continuity At a Point}}$

A function $f(x)$ continuation at $x = a$, if

* $f(a)$ is exists.
* $\lim_{x \to a} f(x)$ is defined
* $\lim_{x \to a} f(x) = f(a)$.

Consider the function $f(x) = x^2$ check whether this function is continuous at $x = 3$.



```math
f(3) = 3^2 = 9
```




```math
\lim_{x \to 3} f(x) = x^2 = 3^2 = 9
```




```math
\lim_{x \to 3} f(x) = f(3)
```



$\therefore$ the given function, $f(x) = x^2$ is continuous at $x = 3$.

Consider the function $f(x) = 1/x$ Check the continuity of the function at $x = 1$



```math
f(1) = 1/x = 1/1 = 1
```




```math
\lim_{x \to 1} f(x) = 1/x = 1/1 = 1
```




```math
\lim_{x \to 1} f(x) = f(1)
```



$\therefore f(x) = 1/x$ is continuous at $x = 1$.

Check whether $f(x) = 1/x$ is continuous at $x = 0$



```math
f(0) = 1/0 \quad \text{Not defined.}
```



$\therefore f(0)$ does not exist  
$\therefore f(x) = 1/x$ is not continuous at $x = 0$.

---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 13 -->

# One-Sided Limit

### Right-Handed Continuity
A function $f(x)$ is continuous from the right at $x=a$ if


```math
\lim_{x \to a^+} f(x) = f(a)
```



### Left-Handed Continuity
A function $f(x)$ is said to continuous from the left at $x=a$ if


```math
\lim_{x \to a^-} f(x) = f(a)
```



**Q.** Determine if the function $f(x)$ is continuous from the left at $x=2$.


```math
f(x) = \begin{cases} x^2+3 & ; \ x < 2 \\ 5 & ; \ x \ge 2 \end{cases}
```





```math
\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} f(x^2+3) = 2^2+3 = 4+3 = \underline{\underline{7}}
```





```math
f(2) = 5
```





```math
\Rightarrow \lim_{x \to 2^-} f(x) \ne f(2)
```





```math
\therefore \text{It is not left-continuous.}
```



**Q.** Determine if the function $f(x)$ is continuous from the right at $x=-1$.


```math
g(x) = \begin{cases} \sin x & ; \ x \le -1 \\ x^2 & ; \ x > -1 \end{cases}
```





```math
\lim_{x \to -1^+} f(x) = \lim_{x \to -1^+} f(x^2) = (-1)^2 = \underline{\underline{1}} \quad \Rightarrow f(-1) = \sin x = -(\sin(1))
```





```math
\lim_{x \to -1^+} f(x) \ne f(-1)
```





```math
\therefore \text{the function } g(x) \text{ is not right continuous.}
```



**Q.** Determine if the function


```math
f(x) = \begin{cases} 3x-9 & ; \ x \le 3 \\ x^2-6x+9 & ; \ x > 3 \end{cases}
```


is continuous from the right at $x=3$.



```math
\lim_{x \to 3^+} f(x) = \lim_{x \to 3^+} f(x^2-6x+9) = 9-18+9 = 0
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 14 -->



```math
f(3) = 3 \times 3 - 9 = \underline{0}
```





```math
\lim_{x \to 3^+} f(x) = f(3)
```



$\therefore$ function $f(x)$ is right continuous at $x = 3$.

---

**Q** Determine if the function $f(x)$ is continuous from the left at $x = 1$



```math
f(x) = \begin{cases} 2x + 1 & ; \quad x < 1 \\ 3 & ; \quad x \ge 1 \end{cases}
```





```math
\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} 2x + 1 = 2 + 1 = \underline{\underline{3}}
```





```math
f(1) = 3
```





```math
\lim_{x \to 1^-} f(x) = f(1)
```



$\therefore$ the given function is left continuous at $x = 1$.

---

## Continuous function

A function is called continuous if it is continuous at every point in domain. The domain of a function is a set of all input values for which the function is defined.

Consider the function $f(x) = x^2$ is continuous at every point in its domain (its domain is the set of all real numbers). Therefore $f(x) = x^2$ is a continuous function.

Consider $f(x) = 1/x$ is not a continuous function, because it is not continuous at $x = 0$. i.e, $f(x) = 1/x$ is continuous at everypoint except $x = 0$. $x = 0$ is called the point of discontinuity. or the function has a discontinuity at $x = 0$.

---

**Q.** At what points are the following functions $y = f(x)$ continuous.

1. $y = \frac{1}{x-2} - 3x$

   

```math
x - 2 = 0
```


   
   $\Rightarrow x = 2$ is the only point of discontinuity

---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 15 -->

2. $y = \frac{x+1}{x^2-4x+3}$



```math
x^2-4x+3 = 0
```




```math
(x-3)(x-1) = 0
```




```math
x = 3, 1.
```



$\therefore$ the function is continuous at every point except at $x=1$ and $x=3$.

---

3. $y = |x+1| + \sin x$

the function is continuous at every points.

---

4. $y = \frac{1}{|x|+1} - \frac{x^2}{2}$

Here, the denominator
$|x|+1 \neq 0$, for all $x$ also the limit exists

$\therefore$ the function is continuous at every point.

---

5. $y = \frac{\cos x}{x}$

Here the denominator vanishes at $x=0$

$x=0$ is the only discontinuous point

$\therefore$ the given function is continuous at every point except at $x=0$.

---

6. $y = \tan \frac{\pi x}{2}$

When $x=1$, $y = \tan \frac{\pi}{2}$, the limit does not exist

$\therefore$ the function is not continuous

When $x=3$, $y = \tan \frac{3\pi}{2}$, also discontinuous

$\therefore$ the function is discontinuous at all point where $\frac{\pi x}{2}$ is an odd integer multiple of $\frac{\pi}{2}$.

$\therefore$ the function is continuous at all points except the odd integers.

---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 16 -->

# Derivative

$\rightarrow$ Slope of a curve

The derivative gives the rate of change of a function $f(x)$ with respect to $x$ at $x = x_0$, denoted by $f'(x_0)$.

The rate of a function or the derivative of a function $f(x)$ at $x = a$ is defined by



```math
\boxed{f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}}
```



All the following are the interpretations for the limits of the difference quotient. Or



```math
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} \rightarrow 1^{\text{st}} \text{ principle of differentiation}
```



1) The slope of the graph $y = f(x)$ at $x = a$
2) The slope of the tangent line to the curve $y = f(x)$ at $x = a$
3) The rate of change of $f(x)$ at $x = a$
4) The derivative $f'(x)$ at $x = a$

---

**$Q_1$.** Find the derivative of $f(x) = x^2$ at $x = 2$ using the $1^{\text{st}}$ principle of differentiation.



```math
f'(2) = \lim_{h \to 0} \frac{f(2+h) - f(2)}{h}
```





```math
= \lim_{h \to 0} \frac{(2+h)^2 - 4}{h} = \lim_{h \to 0} \frac{\cancel{4} + 4h + h^2 - \cancel{4}}{h}
```





```math
= \lim_{h \to 0} \frac{4h + h^2}{h} = \lim_{h \to 0} \frac{\cancel{h}(4+h)}{\cancel{h}}
```





```math
= \cancel{\lim} 4 + 0 = \underline{\underline{4}}
```



---

**$Q_2$.** Find the derivative of $f(x) = \sqrt{x}$ at $x = 4$ using $1^{\text{st}}$ principle.



```math
f'(4) = \lim_{h \to 0} \frac{f(4+h) - f(4)}{h}
```





```math
= \lim_{h \to 0} \frac{\sqrt{4+h} - 2}{h} = \cancel{\lim_{h \to 0} \frac{\sqrt{4+0} - 2}{0}} = \lim_{h \to 0} \frac{(\sqrt{4+h}-2)(\sqrt{4+h}+2)}{h(\sqrt{4+h}+2)}
```





```math
= \lim_{h \to 0} \frac{(\sqrt{4+h})^2 - (2)^2}{h(\sqrt{4+h}+2)} = \lim_{h \to 0} \frac{\cancel{4}+\cancel{h}-\cancel{4}}{\cancel{h}(\sqrt{4+h}+2)} = \lim_{h \to 0} \frac{1}{\sqrt{4+h}+2}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 17 -->

## $Q_5$ Find the derivative of $f(x) = 3x^2 + 2x$ at $x = 1$ using $1^{\text{st}}$ principle.



```math
f'(1) = \lim_{h \to 0} \frac{f(1+h) - f(1)}{h}
```





```math
= \lim_{h \to 0} \frac{3(1+h)^2 + 2(1+h) - (3 \times 1^2 + 2 \times 1)}{h}
```





```math
= \lim_{h \to 0} \frac{3(1+2h+h^2) + 2 + 2h - 5}{h} = \lim_{h \to 0} \frac{3+6h+3h^2+2+2h-5}{h}
```





```math
= \lim_{h \to 0} \frac{\cancel{5} + 8h + 3h^2 - \cancel{5}}{h} = \lim_{h \to 0} \frac{\cancel{h}(8+3h)}{\cancel{h}}
```





```math
= 8 + 3 \times 0 = \underline{\underline{8}}
```



---

## $Q$ Find the derivative of $f(x) = 1/x$ at $x = 2$ using $1^{\text{st}}$ first principle.



```math
f'(2) = \lim_{h \to 0} \frac{f(2+h) - f(2)}{h} = \lim_{h \to 0} \frac{\frac{1}{2+h} - \frac{1}{2}}{h}
```





```math
= \lim_{h \to 0} \frac{\frac{2 - (2+h)}{(2+h)2}}{h} = \lim_{h \to 0} \frac{-h}{4+2h} \div h
```





```math
= \lim_{h \to 0} \frac{-\cancel{h}}{4+2h} \times \frac{1}{\cancel{h}} = \underline{\underline{-\frac{1}{4}}}
```



---

## $Q_6$ Find the derivative of $f(x) = \sin x$ at $x = 0$ using $1^{\text{st}}$ principle.



```math
f'(0) = \lim_{h \to 0} \frac{f(0+h) - f(0)}{h}
```





```math
= \lim_{h \to 0} \frac{\sin(0+h) - \sin 0}{h} = \lim_{h \to 0} \frac{\sin(0+h) - 0}{h}
```





```math
= \lim_{h \to 0} \frac{\sin h}{h}
```





```math
= \lim_{h \to 0} \frac{\cos h}{1} \quad [\text{by using L-hospital Rule}]
```





```math
= \frac{\cos 0}{1} = \underline{\underline{1}} \qquad \left( \lim_{h \to 0} \frac{\sin x}{x} = 1 \right)
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 18 -->

$Q_6.$ find the derivative of $f(x) = \ln x$ at $x = 1$ using $1^{\text{st}}$ principle :



```math
\begin{aligned}
f'(1) &= \lim_{h \to 0} \frac{f(1+h) - f(1)}{h} && [\text{using L-Hospitals Rule}] \\
&= \lim_{h \to 0} \frac{\ln(1+h) - \ln 1}{h} = \lim_{h \to 0} \frac{\ln(1+h) - 0}{h} \\
&= \lim_{h \to 0} \frac{1/(1+h)}{1} = \frac{\frac{1}{1+0}}{1} = \frac{1}{1} = 1
\end{aligned}
```



> **standard result**
>
> 

```math
\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1
```



---

## Rules Of Differentiation

- **Sum Rule** : $\frac{d}{dx} (f(x) + g(x)) = \frac{d}{dx} f(x) + \frac{d}{dx} g(x) = f'(x) + g'(x)$

- **Difference Rule** : $\frac{d}{dx} (f(x) - g(x)) = \frac{d}{dx} f(x) - \frac{d}{dx} g(x)$

- **Constant Rule** : $\frac{d}{dx} (c) = 0$

- **Constant xplication Rule** : $\frac{d}{dx} (k f(x)) = k \frac{d}{dx} f(x) = k f'(x)$

- **Product Rule** : $\frac{d}{dx} f(x) \cdot g(x) = f(x) \frac{d}{dx} g(x) + g(x) \frac{d}{dx} f(x)$

- **Quotient Rule** : $\frac{\frac{d}{dx} f(x)}{g(x)} = \frac{g(x) f'(x) - f(x) g'(x)}{(g(x))^2}$

- **Power Rule** : $\frac{d}{dx} (x^n) = n x^{n-1}$

~~$\frac{d}{dx}(\sin x)$~~

$Q_1.$ find the derivate of $f(x) = 5x^4$



```math
\cancel{f'} \frac{d}{dx} f(x) = 4 \times 5 \cancel{(x)} \quad \underline{\underline{20 x^3}}
```



$Q_2.$ Find $\frac{d}{dx}$ of $f(x) = (2x^3) \sin x$



```math
f'(x) = 2x^3 \cdot \cos x + \sin x \cdot 6x^2
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 19 -->



```math
Q_3.\text{ find } \frac{d}{dx} \text{ of } f(x)
```



1. $f(x) = e^x \cos x$
   

```math
\begin{aligned}
   f'(x) &= e^x(-\sin x) + \cos x \cdot e^x \\
   &= e^x \cos x - e^x \sin x = \underline{\underline{e^x (\cos x - \sin x)}}
   \end{aligned}
```



2. $f(x) = \frac{e^x}{x^2}$
   

```math
\begin{aligned}
   f'(x) &= \frac{x^2 \cdot e^x - e^x \cdot 2x}{(x^2)^2} = \frac{e^x x^2 - e^x \cdot 2x}{(x^2)^2 x^4} = \frac{e^x x^2 - e^x 2x}{x^4} \\
   &= \frac{e^x(x^2 - 2x)}{(x^2)^2 x^4} \\
   &= \frac{x(e^x x - 2e^x)}{x^4} \\
   &= \underline{\underline{\frac{e^x x - 2e^x}{x^3}}}
   \end{aligned}
```



3. $f(x) = \frac{\ln x}{x^3}$
   

```math
\begin{aligned}
   f'(x) &= \frac{x^3 \cdot \frac{1}{x} - \ln x \cdot 3x^2}{(x^3)^2} = \frac{x^2 - 3x^2 \ln x}{x^6} \\
   &= \frac{x^2(1 - 3\ln x)}{x^6} = \underline{\underline{\frac{1 - 3\ln x}{x^4}}}
   \end{aligned}
```



4. Find the slope of the curve $y = x^2$ at $x = 3$,
   

```math
\begin{aligned}
   f(a) &= \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} \\
   &= \lim_{h \to 0} \frac{f(3+h)^2 - (3)^2}{h} = \lim_{h \to 0} \frac{f[(9 + 6h + h^2)] - 9}{h} \\
   &= \lim_{h \to 0} \frac{6h + h^2}{h} = \lim_{h \to 0} \frac{h(6+h)}{h} = 6 + 0 = \underline{\underline{6}}
   \end{aligned}
```



5. Find the derivative of $f(x) = x^2 / \sin x$
   

```math
f'(x) = \frac{2x \cdot \sin x \cdot 2x - x^2 \cdot \cos x}{\sin^2 x} = \underline{\underline{\frac{2x \sin x - x^2 \cos x}{\sin^2 x}}}
```



6. Find the slope of the curve $y = \sin x$ at $x = \pi/4$
   

```math
\lim \frac{dy}{dx} = \cos x
```


   

```math
\text{at } x = \pi/4 \implies \frac{dy}{dx} = \cos \pi/4 = \underline{\underline{1/\sqrt{2}}}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 20 -->

# Higher Order Derivates

The first order derivative of the $y = f(x)$ is denoted by $\frac{dy}{dx}$ or $y'$ or $f'(x)$. Again differentiate this first order with respect to $x$ we get the second order derivatives $\frac{d^2y}{dx^2}$ or $y''$ or $f''(x)$, again differentiate the second orde w.r.t $x$, we get $\frac{d^3y}{dx^3}$ or $y'''$ or $f'''(x)$ and so on.

**Q.** Find the fourth order derivative of the function.



```math
y = 3x^5
```




```math
y' = 15x^4
```




```math
y'' = 60x^3
```




```math
y''' = 180x^2
```




```math
y'''' = \underline{\underline{360x}}
```



**Q.** Find the $1^{\text{st}}$ order and $2^{\text{nd}}$ order derivative of $f(x) = 1/x$.



```math
f'(x) = -\frac{1}{x^2}
```




```math
f''(x) = \frac{x^2 \cdot 0 - (-1) \cdot 2x}{(x^2)^2} = \frac{2x}{x^4} = \underline{\underline{\frac{2}{x^3}}}
```



**Q.** Find the third derivative of $f(x) = x^5 - 4x^3 + x$



```math
f'(x) = 5x^4 - 12x^2 + 1
```




```math
f''(x) = 20x^3 - 24x
```




```math
f'''(x) = \underline{60x^2 - 24}
```



**Q.** Find the derivatives of all orders of $y = \frac{x^4}{2} - \frac{3x^2}{2} - x$



```math
y' = \frac{4x^3}{2} - \frac{6x}{2} - 1 = 2x^3 - 3x - 1
```




```math
y'' = 6x^2 - 3
```




```math
y''' = 12x
```




```math
y'''' = 12
```




```math
y''''' = \underline{\underline{0}}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 21 -->

**Q.** Find the 4th derivative of $y = e^x 	imes \sin x$.



```math
\frac{dy}{dx} = e^x \cdot \cos x + \sin x \cdot e^x = e^x (\cos x + \sin x)
```





```math
\begin{aligned}
\frac{d^2y}{dx^2} &= e^x (-\sin x + \cos x) + (\cos x + \sin x) e^x \\
&= -e^x \sin x + e^x \cos x + e^x \cos x + e^x \sin x \\
&= 2e^x \cos x
\end{aligned}
```





```math
\begin{aligned}
\frac{d^3y}{dx^3} &= 2 \left[ e^x \cdot -\sin x + \cos x \cdot e^x \right] \\
&= 2 [e^x \cos x - e^x \sin x] = 2e^x [\cos x - \sin x]
\end{aligned}
```





```math
\begin{aligned}
\frac{d^4y}{dx^4} &= 2e^x [-\sin x - \cos x] + [\cos x - \sin x] \cdot 2e^x \\
&= -2e^x \sin x - 2e^x \cos x + 2e^x \cos x - 2e^x \sin x \\
&= -4e^x \sin x
\end{aligned}
```



---

**Q.** Find the third derivative of $f(x) = x^3 \ln x$



```math
\begin{aligned}
f'(x) &= x^3 \frac{1}{x} + \ln x \cdot 3x^2 \\
&= x^2 + 3x^2 \ln x
\end{aligned}
```





```math
\begin{aligned}
f''(x) &= 2x + 3x^2 \cdot \frac{1}{x} + \ln x \cdot 6x \\
&= 2x + 3x + 6x \ln x
\end{aligned}
```





```math
\begin{aligned}
f'''(x) &= 2 + 3 + 6x \times \frac{1}{x} + \ln x \cdot 6 \\
&= 5 + 6 + 6 \ln x = 11 + 6 \ln x
\end{aligned}
```



---

**Q.** Find the $1^{\text{st}}$ order derivative $f(x) = \frac{x^3}{\sqrt{x^2+1}}$



```math
\begin{aligned}
f'(x) &= \frac{\sqrt{x^2+1} \cdot 3x^2 - x^3 \cdot \frac{1}{2\sqrt{x^2+1}} \cdot 2x}{\left(\sqrt{x^2+1}\right)^2} \\
&= \frac{3x^2 \sqrt{x^2+1} - \frac{2x^4}{2\sqrt{x^2+1}}}{\left(\sqrt{x^2+1}\right)^2} = \frac{3x^2(x^2+1) - x^4}{\sqrt{x^2+1} \left(\sqrt{x^2+1}\right)^2} \\
&= \frac{3x^4 + 3x^2 - x^4}{\left(\sqrt{x^2+1}\right)^3} = \frac{2x^4 + 3x^2}{\left(\sqrt{x^2+1}\right)^3}
\end{aligned}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 22 -->

# Instantaneous Rate of Change

**Q.** Find the 'instantaneous rate of change of $f(x) = x^2$ at $x = 5$



```math
f'(x) = 2x
```





```math
\left. f'(x) \right|_{x=5} = f'(5) \text{ ; } 2 \times 5 = \underline{\underline{10}}
```



---

**Q.** Find the rate of change of the function $f(x) = 4x^3 - x^2 + 2x - 7$ at $x = 1$



```math
f'(x) = 12x^2 - 2x + 2
```





```math
\left. f'(x) \right|_{x=1} = 12 \times 1^2 - 2 \times 1 + 2
```





```math
= 12 - \cancel{2} + \cancel{2} = \underline{\underline{12}}
```



---

**Q.** A car's position $s(t)$ in metres at time '$t$' in seconds is given by $s(t) = 4t^2$
Find the car's instantaneous velocity at $t = 5\text{ seconds}$.



```math
s'(t) = 8t
```





```math
\left. s'(t) \right|_{t=5} = 8 \times 5 = \underline{\underline{40\text{ m/s}}}
```



---

**Q.** The stress $\sigma(t)$ in a material is given by $\sigma(t) = 100t - 5t^2$, where '$t$' is in seconds. Find the rate of change of stress at $t = \underline{8\text{ s}}$.



```math
\sigma'(t) = 100 - 10t
```





```math
\left. \sigma'(t) \right|_{t=8} = 100 - 10 \times 8
```





```math
= 100 - 80
```





```math
= \underline{\underline{20\text{ Pa/s } \{ \text{or } \text{Nm}^2}}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 23 -->

# Chain-Rule

$Q_1$. If $y = f(u(x))$, differentiate $y$ with respect to $x$ is given by $\frac{dy}{dx} = \frac{df}{du} \cdot \frac{du}{dx}$.  
Find the derivative of $y = (3x+2)^3$.



```math
y = (3x+2)^3
```




```math
\begin{aligned}
\frac{dy}{dx} &= 3(3x+2)^2 \frac{d}{dx}(3x+2) \\
&= 3(3x+2)^2 \cdot 3 \\
&= 9(3x+2)^2
\end{aligned}
```





```math
y = (3x+2)^3
```




```math
f(x) = u^3 \qquad u(x) = (3x+2)
```




```math
\frac{df}{du} = 3u^2 \qquad \frac{du}{dx} = 3
```




```math
\begin{aligned}
\frac{dy}{dx} &= \frac{df}{du} \times \frac{du}{dx} \\
&= 3u^2 \times 3 \\
&= 9u^2 = 9(3x+2)^2
\end{aligned}
```



$Q_2$. Find the derivative of $y = \sin(4x^3)$.



```math
y = (\sin(4x^3))
```




```math
\begin{aligned}
\frac{dy}{dx} &= \cos(4x^3) \cdot \frac{d}{dx}(4x^3) \\
&= \cos(4x^3) \cdot 12x^2 \\
&= 12x^2 \cos(4x^3)
\end{aligned}
```





```math
y = (\sin(4x^3))
```




```math
f(x) = \sin u \qquad u(x) = 4x^3
```




```math
\frac{df}{du} = \cos u \qquad \frac{du}{dx} = 12x^2
```




```math
\begin{aligned}
\frac{dy}{dx} &= \frac{df}{du} \times \frac{du}{dx} = \cos u \cdot 12x^2 \\
&= \cos(4x^3) \cdot 12x^2
\end{aligned}
```



$Q_3$. $y = e^{\sin x}$


```math
\begin{aligned}
\frac{dy}{dx} &= e^{\sin x} \cdot \frac{d}{dx}(\sin x) \\
&= \cos x \cdot e^{\sin x}
\end{aligned}
```



$Q_4$. $y = \sqrt{5x^2 + 3x}$


```math
\begin{aligned}
\frac{dy}{dx} &= \frac{1}{2\sqrt{5x^2 + 3x}} \cdot \frac{d}{dx}(5x^2 + 3x) \\
&= \frac{1}{2\sqrt{5x^2 + 3x}} \cdot 10x + 3 = \frac{10x + 3}{}
\end{aligned}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 24 -->

### $Q_5$



```math
y = \tan(2x + 1)
```





```math
\begin{aligned}
\frac{dy}{dx} &= \sec^2(2x + 1) \cdot \frac{d}{dx}(2x + 1) \\
&= \sec^2(2x + 1) \cdot 2 = 2 \sec^2(2x + 1)
\end{aligned}
```



---

### $Q_6$



```math
y = x \sin^4 x + x \cos^{-2} x
```





```math
\begin{aligned}
\frac{dy}{dx} &= \cancel{(x \cos^4 x + \sin^4 x \cdot 1) + (x \cdot \sin^{-2} x + \cos^{-2} x \cdot 1)} \\
&= \cancel{x \cos^4 x + \sin^4 x - x \sin^{-2} x + \cos^{-2} x} \\
&= x \frac{d}{dx}(\sin^4 x) + \sin^4 x \cdot \frac{d}{dx}(x) + x \cdot \frac{d}{dx}(\cos^{-2} x) + \cos^{-2} x \cdot \frac{d}{dx}(x) \\
&= x \cdot 4 \sin^3 x \cdot \frac{d}{dx}(\sin x) + \sin^4 x \cdot 1 + x \cdot -2 \cos^{-3} x \cdot \frac{d}{dx}(\cos x) + \cos^{-2} x \cdot 1 \\
&= x \cdot 4 \sin^3 x \cdot \cos x + \sin^4 x + \cancel{x \cdot 2 \cos^{-3} x} \, x \cdot 2 \cos^{-3} x \sin x + \cos^{-2} x \\
&= x \cdot 4 \sin^3 x \cos x + \sin^4 x + \frac{2\sin x}{\cos^3 x} + \frac{1}{\cos^2 x}
\end{aligned}
```



---

### $Q_7$



```math
f(\theta) = \left( \frac{\sin \theta}{1 + \cos \theta} \right)^2
```





```math
\cancel{\frac{dy}{d\theta} = \frac{df}{d\theta}}
```





```math
\begin{aligned}
\frac{df}{d\theta} &= 2 \left( \frac{\sin \theta}{1 + \cos \theta} \right) \cdot \frac{d}{dx} \left( \frac{\sin \theta}{1 + \cos \theta} \right) \\
&= 2 \left( \frac{\sin \theta}{1 + \cos \theta} \right) \cdot \frac{(1 + \cos \theta) \cos \theta - \sin \theta(0 - \sin \theta)}{(1 + \cos \theta)^2} \\
&= 2 \left( \frac{\sin \theta}{1 + \cos \theta} \right) \frac{(1 + \cos \theta)\cos \theta + \sin^2 \theta}{(1 + \cos \theta)^2} = \frac{2(\sin \theta)}{(1 + \cos \theta)} \frac{\cos \theta + \cos^2 \theta + \sin^2 \theta}{(1 + \cos \theta)^2} \\
&= \frac{2(\sin \theta)}{(1 + \cos \theta)} \cdot \frac{1 + \cos \theta}{(1 + \cos \theta)^2} = \frac{2(\sin \theta)}{(1 + \cos \theta)^2}
\end{aligned}
```



---

### $Q_8$



```math
y = x \tan 2\sqrt{x} + 7
```





```math
\begin{aligned}
\frac{dy}{dx} &= x \cdot \sec^2 2\sqrt{x} \cdot \frac{d}{dx} 2\sqrt{x} + \tan 2\sqrt{x} \cdot \frac{d}{dx}(x) + \frac{d}{dx}(7) \\
&= x \sec^2 2\sqrt{x} \cdot 2 \cdot \frac{1}{2\sqrt{x}} + 0 \\
&= x \sec^2 2\sqrt{x} \cdot \frac{1}{\sqrt{x}} = \frac{x \sec^2 2\sqrt{x}}{\sqrt{x}} + \tan 2\sqrt{x}
\end{aligned}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 25 -->

# Implicit Differentiation

It is used when a function is given in an "implicit form"
meaning, it is not solved for 1 variable in terms of the other.

**Q.** Find the derivate of :

1) $x^2 + y^2 = r^2$ implicitly to find $dy/dx$.

diff. both sides with respect to $x$.



```math
\Rightarrow \frac{d}{dx} (x^2 + y^2) = \frac{d}{dx} (r^2)
```





```math
\frac{d}{dx} (x^2) + \frac{d}{dx} (y^2) = \frac{d}{dx} (r^2)
```





```math
2x + 2y \frac{dy}{dx} = 0
```





```math
2y \frac{dy}{dx} = -2x
```





```math
\frac{dy}{dx} = \frac{-2x}{2y}
```





```math
\underline{\underline{\frac{dy}{dx} = -x/y}}
```





```math
\begin{matrix} x^2 + y^2 = r^2 \\ \downarrow \\ \text{eqn of circle.} \end{matrix}
```



2) diff the eqn of the ~~elip~~ ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ implicitly to find $dy/dx$

diff both sides with respect to $x$



```math
\frac{d}{dx} \left( \frac{x^2}{a^2} + \frac{y^2}{b^2} \right) = \frac{d}{dx} (1)
```





```math
\frac{d}{dx} \frac{x^2}{a^2} + \frac{d}{dx} \frac{y^2}{b^2} = 0
```





```math
\frac{1}{a^2} \frac{d}{dx} (x^2) + \frac{1}{b^2} \frac{d}{dx} (y^2) = 0
```





```math
\frac{1}{a^2} 2x + \frac{1}{b^2} \cdot 2y \cdot \frac{dy}{dx} = 0
```





```math
\frac{2y}{b^2} \frac{dy}{dx} = -\frac{2x}{a^2}
```





```math
\frac{dy}{dx} = \frac{-\frac{2x}{a^2}}{\frac{2y}{b^2}}
```





```math
\frac{dy}{dx} = -\frac{2x}{a^2} \times \frac{b^2}{2y} = -\frac{b^2 x}{a^2 y}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 26 -->

3) diff. ~~$x^2 + y$~~ $x^2 + xy + y^2 = 1$ implicitly to find $dy/dx$

diff both sides with respect to $x$



```math
\frac{d}{dx}(x^2 + xy + y^2) = \frac{d}{dx}(1)
```





```math
\frac{d}{dx}(x^2) + \frac{d}{dx}(xy) + \frac{d}{dx}(y^2) = 0
```





```math
2x + x \cdot \frac{dy}{dx} + y \cdot 1 + 2y \cdot \frac{dy}{dx} = 0
```





```math
2x + x \frac{dy}{dx} + y + 2y \frac{dy}{dx} = 0
```





```math
2x + y + \frac{dy}{dx}(x + 2y) = 0
```





```math
\frac{dy}{dx}(x + 2y) = -2x - y
```





```math
\frac{dy}{dx} = \frac{-2x - y}{x + 2y}
```



---

4) $x^2 y + y^3 = 7$



```math
\frac{d}{dx}(x^2 y) + \frac{d}{dx}(y^3) = \frac{d}{dx}(7)
```





```math
x^2 \frac{dy}{dx} + y \cdot 2x + 3y^2 \frac{dy}{dx} = 0
```





```math
x^2 \frac{dy}{dx} + 3y^2 \frac{dy}{dx} = -2xy
```





```math
\frac{dy}{dx}(x^2 + 3y^2) = -2xy
```





```math
\frac{dy}{dx} = \frac{-2xy}{x^2 + 3y^2}
```



---

5) $\text{Sin}(xy) = x + y$



```math
\cos(xy) \cdot \frac{d}{dx}(xy) = 1 + \frac{dy}{dx}
```





```math
\cos(xy) \left[ x \frac{dy}{dx} + y \right] = 1 + \frac{dy}{dx}
```





```math
\cos x \cdot \overset{\cos(xy)}{\frac{dy}{dx}} - \frac{dy}{dx} = 1 - ~\cos(xy)~ - y \implies
```





```math
\frac{dy}{dx} [x^{\cos(xy)} - 1] = 1 - ~\cos(xy)~ - y
```



~~

```math
\implies \frac{dy}{dx} = \frac{1 - \cos(xy) - y}{x - 1}
```







```math
\frac{dy}{dx} = 1 -
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 27 -->



```math
\sin(xy) = x + y
```





```math
\cos(xy)\left[x\frac{dy}{dx} + y\right] = 1 + \frac{dy}{dx}
```





```math
x\cos(xy)\frac{dy}{dx} + y\cos(xy) = 1 + \frac{dy}{dx}
```





```math
x\cos(xy)\frac{dy}{dx} - \frac{dy}{dx} = 1 - y\cos(xy)
```





```math
\frac{dy}{dx}[x\cos(xy) - 1] = 1 - y\cos(xy)
```





```math
\frac{dy}{dx} = \frac{1 - y\cos(xy)}{x\cos(xy) - 1}
```



---

6) 

```math
x^2(x-y^2) = x^2 - y^2
```





Crossed out in the source:



```math
\frac{dy}{dx}\left(x^2(x-y^2)\right) = \frac{d}{dx}(x^2 - y^2)
```





```math
x^2\left(1 - 2y\frac{dy}{dx}\right) + (x-y^2)\cdot 2x = 2x - 2y\frac{dy}{dx}
```





```math
x^2 - 2x^2 y\frac{dy}{dx} + 2x^2 - 2xy^2 = 2x - 2y\frac{dy}{dx}
```





```math
2y\frac{dy}{dx} - 2x^2 y\frac{dy}{dx} = 2x - x^2 - 2x^2 + 2xy^2
```





```math
\frac{dy}{dx}(2y - 2x^2 y) = 2x - x^2 - 2x^2 + 2xy^2 = x(2 - x - 2x + 2y^2)
```





```math
\frac{dy}{dx} = \frac{2x - x^2 - 2x^2 + 2xy^2}{2y - 2(x^2 y)}
```





```math
\frac{dy}{dx} = \frac{2(x - x^2 + y^2) - x^2}{y - 2x^2 y}
```







```math
x^2 \cdot 2(x-y)\frac{d}{dx}(x-y) + (x-y)^2 \cdot 2x = 2x - 2y\frac{dy}{dx}
```





```math
2x^2(x-y)[1 - dy/dx] + (x-y)^2 \cdot 2x = 2x - 2y\frac{dy}{dx}
```





```math
2x^2(x-y) - 2x^2(x-y)\frac{dy}{dx} + 2y\frac{dy}{dx} = 2x - 2y\frac{dy}{dx}
```





```math
2x^2(x-y) - 2x^2(x-y)\frac{dy}{dx} + 2y\frac{dy}{dx} = 2x - 2x(x-y)^2
```





```math
\frac{dy}{dx}\left[2y - 2x^2(x-y)\right] = 2x - 2x(x-y)^2 - 2x^2(x-y)
```





```math
\frac{dy}{dx} = \frac{2x - 2x(x-y)^2 - 2x^2(x-y)}{2y - 2x^2(x-y)}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 28 -->



```math
= \frac{2x [1 - (x+y)^2 - x[x-y]]}{2[y - x^2[x-y]]}
```




```math
= \frac{x [1 - (x+y)^2 - x(x-y)]}{[y - x^2(x-y)]}
```



---

1. Use Implicit diff to find $\frac{dy}{dx}$
   1. $2xy + y^2 = x + y$
   2. $y^2 = \frac{x-1}{x+1}$
   3. $x^3y + xy^3 = 6$

2. Find $1^{\text{st}}$ & $2^{\text{nd}}$ order derivatives of the following
   1. $r = \frac{1}{3s^2} - 5/2s$
   2. $y = 4 - 2x - x^{-3}$
   3. $y = \left(\frac{1+3z}{3z}\right)(3-z)$
   4. $y = \frac{(\theta - 1)(\theta^2 + \theta + 1)}{\theta^3}$

Find the derivative of the following functions
1. $y = (5 - 2x^2)(2x^3 - 3x + 4)$
2. $y = (1+x^2)(x^{3/4} - x^{-3})$
3. $y = \frac{\sqrt{4s} - 9}{\sqrt{4s} + 9}$

---

9) $2xy + y^2 = x + y$



```math
\frac{d}{dx}(2xy + y^2) = \frac{d}{dx}(x+y)
```





```math
2\left(x \cdot \frac{dy}{dx} + y\right) + 2y \frac{dy}{dx} = 1 + \frac{dy}{dx}
```





```math
2x \frac{dy}{dx} + 2y + 2y \frac{dy}{dx} = 1 + \frac{dy}{dx}
```





```math
2x \frac{dy}{dx} + 2y \frac{dy}{dx} - \frac{dy}{dx} = 1 - 2y
```





```math
\frac{dy}{dx}(2x + 2y - 1) = 1 - 2y
```





```math
\frac{dy}{dx} = \frac{1 - 2y}{2x + 2y - 1}
```



---

8) $\frac{dy}{dx}$ where $x^3 = \frac{2x-y}{x+3y}$



```math
3x^2 = \frac{(x+3y)\left(2 - \frac{dy}{dx}\right) - (2x-y)\left(1 + 3\frac{dy}{dx}\right)}{(x+3y)^2}
```





```math
3x^2 = \frac{2x + 6y - x\frac{dy}{dx} - 3y\frac{dy}{dx} - \left[2x - y + 6x\frac{dy}{dx} - 3y\frac{dy}{dx}\right]}{(x+3y)^2}
```





```math
3x^2 = \frac{6y - x\frac{dy}{dx} + y - 6x\frac{dy}{dx}}{(x+3y)^2}
```





```math
3x^2 = \frac{7y - \frac{dy}{dx}(x - 6x)}{(x+3y)^2}
```





```math
3x^2(x+3y)^2 = 7y - \frac{dy}{dx}(-5x)
```





```math
\Rightarrow \frac{3x^2(x+3y)^2 - 7y}{-5x} = \frac{dy}{dx}
```





```math
\Rightarrow \frac{dy}{dx} = \frac{3x^2(x+3y)^2 - 7y}{5x}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 29 -->

# Tangent Line and Normal Line

## Equation of Tangent Line

The eqn of the tangent line to the curve $y = f(x)$ at the point $(x_0, y_0)$ is given by $(y - y_0) = f'(x_0)(x - x_0)$ where $f'(x)$ is the slope of the curve at $x_0$.

## Equation of Normal Line

A normal line to a curve at a given point is the line that is $\perp$ar to the tangent line at that point the slope of the normal line is the -ve reciprocal of the slope of the tangent line. and the eqn of the normal line is



```math
(y - y_0) = \frac{-1}{f'(x_0)} (x - x_0)
```



---

**Q.** Find the eqn of the tangent and normal lines to the curve $y = x^2$ at the point $(1, 1)$:



```math
\begin{aligned}
f'(x) &= 2x \\
f'(x_0) &= f'(1) = 2
\end{aligned}
```



**Eqn of tangent line :**



```math
\begin{aligned}
y - y_0 &= f'(x_0)(x - x_0) \\
y - 1 &= 2(x - 1) \\
y &= 2x - 2 + 1 \\
\underline{y = 2x - 1}
\end{aligned}
```



**Eqn of normal line :**



```math
\begin{aligned}
y - y_0 &= \frac{-1}{f'(x_0)} (x - x_0) \\
y - 1 &= -\frac{1}{2}(x - x_0) \\
2y - 2 &= -x + 1 \\
2y &= -x + 1 + 2 \\
\underline{y = -\frac{x}{2} + \frac{3}{2}}
\end{aligned}
```



---

**Q.** Find the eqn of tangent and the normal lines to the curve $y = x^2 + 3x + 2$ at $x = 1$.



```math
(1, 6) \implies y = 1^2 + 3 \times 1 + 2 = 6
```





```math
\begin{aligned}
f'(x) &= 2x + 3 \\
f'(x_0) &= 2 + 3 = \underline{5}
\end{aligned}
```





```math
\begin{aligned}
y - y_0 &= f'(x_0)(x - x_0) \\
y - 6 &= 5(x - 1) \\
y &= 5x - 5 + 6
\end{aligned}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 30 -->

Eqn of normal line



```math
y - 6 = -\frac{1}{5}(x - 1)
```




```math
5y - 30 = -x + 1
```




```math
\underline{\underline{y = -\frac{x}{5} + \frac{31}{5}}}
```



---

$Q_3$. Find the eqn of tangent and normal lines to the curve $y = e^x$ at $x = 0$



```math
\begin{aligned}
y' &= e^x & \text{at } x &= 0 \\
f'(x_0) &= e^0 = 1 & y &= e^x \\
& & &= e^0 = \underline{\underline{1}}
\end{aligned}
```



**Eqn of tangent line**


```math
y - y_0 = f'(x_0)(x - x_0)
```




```math
y - 1 = 1(x - 0)
```




```math
\underline{\underline{y = x + 1}}
```



**Eqn of normal line**


```math
y - y_0 = -\frac{1}{f'(x_0)}(x - x_0)
```




```math
y - 1 = -\frac{1}{1}(x - 0)
```




```math
\underline{\underline{y = -x + 1}}
```



---

$Q_4$. A projectile is launched its height $h(t)$ in meters is given by the function:
$h(t) = -5t^2 + 20t + 25$, where $t$ is the time in seconds. Find the eqn of the tangent line and the normal line to the curve at $t = 2\text{s}$.



```math
h(t) = -5 \times 4 + 20 \times 2 + 25 = -20 + 40 + 25 = 45 \qquad (2, 45)
```




```math
h'(t) = -10t + 20
```




```math
\Rightarrow -10 \times 2 + 20 = 0
```





```math
y - 45 = 0(x - 20)
```




```math
y = 45 \implies \text{Eqn of tangant line}
```





```math
y - 45 = -\frac{1}{0}(x - 2)
```




```math
\text{Not defined} \implies \text{Eqn of normal line}
```



The eqn of normal line is not defined (Since the tangant line is horizontal the normal line is vertical) therefore, the eqn of the normal line is $t = 2$.

---

$Q_5$. Find eqn of tangent and normal line to the curve $y = \sin x$ at $x = \pi/4$



```math
y = \sin \frac{\pi}{4} = 1/\sqrt{2} \qquad (\pi/4, 1/\sqrt{2})
```




```math
y'(x) = \cos x \implies y'(x_0) = \cos \frac{\pi}{4} = 1/\sqrt{2}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 31 -->

### Eqn of tangent line


```math
y - y_0 = f'(x_0)(x - x_0)
```




```math
y - \frac{1}{\sqrt{2}} = \frac{1}{\sqrt{2}} \left(x - \pi/4\right)
```




```math
\sqrt{2}y - 1 = x - \pi/4
```




```math
y = \frac{x - \pi/4 + 1}{\sqrt{2}}
```



### Eqn of normal line.


```math
y - y_0 = -\frac{1}{f'(x_0)} (x - x_0)
```




```math
y - 1/\sqrt{2} = -\sqrt{2}(x - x_0)
```




```math
y = -\sqrt{2}x + \sqrt{2}\frac{\pi}{4} + 1/\sqrt{2}
```



---

### Linearization

Linearization is a method is used to appx the value of a function near a given point using its derivatives. For a function $f(x)$ that is differentiable at $x = a$, the linear approximation (linearization) of $f(x)$ near $x = a$ is given by


```math
L(x) = f(a) + f'(a)(x - a)
```





```math
L(x) \simeq f(x) \text{ [uncertain: at } a+h\text{]}
```



**Q. linearise $f(x) = \sqrt{x}$ at $x = 4$.**



```math
f(4) = \sqrt{4} = 2
```




```math
f'(x) = \frac{1}{2\sqrt{x}}
```




```math
f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{4}
```





```math
L(x) = f(a) + f'(a)(x - a)
```




```math
= 2 + \frac{1}{4}(x - 4)
```




```math
= 2 + \frac{x}{4} - \frac{4}{4}
```




```math
= \frac{x}{4} + 1
```



---

**$Q_2$. linearise $f(x) = e^x$ at $x = 0$**



```math
f(0) = e^0 = 1
```




```math
f'(x) = e^x.
```




```math
f'(0) = e^0 = 1
```




```math
L(x) = 1 + 1(x - 0)
```




```math
= 1 + x
```



---

**$Q_3$. linearise $f(x) = \ln x$ at $x = 1$**



```math
f(1) = \ln 1 = 0
```




```math
f'(x) = \frac{1}{x}
```




```math
f'(1) = \frac{1}{1} = 1
```




```math
L(x) = 0 + 1(x - 1)
```




```math
= x - 1
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 32 -->

**$Q_4$** Linearise $f(x) = 	an x$ at $x = \frac{\pi}{4}$



```math
\begin{aligned}
f'(\pi/4) &= \tan \frac{\pi}{4} = 1 \\
f'(x) &= \sec^2 \frac{\pi}{4} \\
f'(\pi/4) &= 2 \\
L(x) &= 1 + 2(x - \pi/4) \\
&= 1 + 2x - \frac{2\pi}{4_2} \\
&= \underline{\underline{1 + 2x - \pi/2}}
\end{aligned}
```



---

**$Q_5$** The resistance $R$ of a resistor is given by $R(T) = e^{0.1 T}$ where $T$ is the temperature in $^\circ\text{C}$. Linearize the function at $T = 25$ to appx. the resis... for small temperature changes around the point.



```math
\begin{aligned}
R'(T) &= e^{0.1 T} \cdot 0.1 = 0.1 e^{0.1 T} \\
R'(25) &= 0.1 e^{0.1 \times 25} = 1.218 \\
R(25) &= e^{0.1 \times 25} = 12.182
\end{aligned}
```





```math
\begin{aligned}
L(t) &= R(a) + R'(a)(T - a) \\
&= 12.182 + 1.218 (T - 25) \\
&= 12.182 + 1.218 T - 30.45 \\
&= \underline{1.218 - 18.268}
\end{aligned}
```



---

**$Q_6$** Suppose a citys population $P(t)$ in ~~100~~ thousands is given by the eqn $P(t) = 100 e^{0.02 t}$, where '$t$' is the number of years. Find the linear approx. of the population in at $t = 0$ in year 2020. Use this linear approx. ~~of the~~ to estimate the population in the year 2021.



```math
\begin{aligned}
P(t) &= 100 e^{0.02 t} & P(0) &= 100 e^{0.02 \times 0} = 100 \\
P'(t) &= 100 \cdot e^{0.02 t} \cdot 0.02 & P'(0) &= 100 \cdot e^{0.02 \times 0} \cdot 0.02 = \underline{2} \\
&= 2 \cdot e^{0.02 t}
\end{aligned}
```





```math
\begin{aligned}
L(t) &= P(a) + P'(a)(t - a) \\
&= 100 + 2(t - 0) \\
&= \underline{100 + 2t}
\end{aligned}
```



Estimated population in the year $2020 = 100 + 2t$.



```math
\begin{aligned}
t &= 1 \\
L(1) &= 100 + 2 \times 1 \\
&= \underline{102}
\end{aligned}
```



Estimated population in the year $2021 = \underline{\underline{102}}$

---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 33 -->

**Q:** Linearise $f(x) = \sin x$ at $x = \pi/6$:



```math
f'(x) = \cos x \implies f'(a) = \cos \frac{\pi}{6} = \frac{\sqrt{3}}{2}
```




```math
f(a) = \sin \frac{\pi}{6} = 1/2
```





```math
\begin{aligned}
L(x) &= f(a) + f'(a)(x-a) \\
&= 1/2 + \frac{\sqrt{3}}{2}\left(x - \pi/6\right) = 1/2 + \frac{\sqrt{3}}{2}x - \frac{\sqrt{3}\pi}{12}
\end{aligned}
```



### Concavity

Concavity describes the curvature nature of a graph of a function. A function may be concave up or concave down.



![Hand-drawn diagram illustrating concavity and an inflection point](/notes/cse/s1/maths/page-033-image-1-f26f2764-943e-42a6-aec9-4a45f4a2d801.webp)



### The second Derivative Test for Concavity

Let $y = f(x)$ be a twice differentiable function on an interval $I$,

(i) If $f''(x) > 0$ on $I$, the graph of '$f$' on $I$ is concave up.

(ii) If $f''(x) < 0$ on $I$, the graph of '$f$' over $I$ is concave down.

(iii) If $f''(x) = 0$ or $f''(x)$ is not defined, then this points are known as inflexion points.

**Q.** Determine the concavity of $f(x) = x^3 - 3x^2 + 4$.



```math
f(x) = x^3 - 3x^2 + 4
```




```math
f'(x) = 3x^2 - 6x
```




```math
f''(x) = 6x - 6
```



For $x > 1$, $f''(x) > 0$, $f$ is concave up.  
For $x < 1$, $f''(x) < 0$, $f$ is concave down.  
$f$ is concave up on $(1, \infty)$  
$f$ is concave down on $(-\infty, 1)$.

---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 34 -->

Q. Determine the concavity of $f(x) = x^3 - 6x^2 + 9x + 1$

1)


```math
\begin{aligned}
f'(x) &= 3x^2 - 12x + 9 \\
f''(x) &= 6x - 12
\end{aligned}
```



For $x > 2$, $f''(x) > 0$  
For $x < 2$, $f''(x) < 0$  
$f$ is concave up on $(2, \infty)$  
$f$ is concave down on $(-\infty, 2)$

---

2) $f(x) = \ln(x)$ for $x > 0$



```math
\begin{aligned}
f'(x) &= \frac{1}{x} \\
f''(x) &= -\frac{1}{x^2}
\end{aligned}
```



For $(x > 0)$, $f''(x) < 0$  
$f$ is concave down $(0, \infty)$

---

3) $f(x) = e^{-x^2}$



```math
\begin{aligned}
f'(x) &= e^{-x^2} \cdot (-2x) \\
f''(x) &= e^{-x^2} \cdot (-2) + (-2x) \cdot e^{-x^2} \cdot (-2x) \\
&= -2e^{-x^2} + 4x^2 e^{-x^2} \\
&= \underline{\underline{2e^{-x^2}(2x^2 - 1)}}
\end{aligned}
```





```math
\boxed{e^{-x^2} \neq 0}
```



For $x^2 > \frac{1}{2}$, $f''(x) > 0$  
For $x^2 < \frac{1}{2}$, $f''(x) < 0$



![Sign chart number line for concavity of e^(-x^2)](/notes/cse/s1/maths/page-034-image-1-8198fcaf-a51b-4f3f-a4d7-302bf93d5749.webp)



$f$ is concave up on $(-\infty, -\sqrt{1/2}) \cup (\sqrt{1/2}, \infty)$  
$f$ is concave down on $(-\sqrt{1/2}, \sqrt{1/2})$

---

4) $f(x) = e^x - x^2$



```math
\begin{aligned}
f'(x) &= e^x - 2x \\
f''(x) &= e^x - 2
\end{aligned}
```





```math
\begin{aligned}
f''(x) &= 0 \\
e^x - 2 &= 0 \\
e^x &= 2 \\
x &= \ln 2
\end{aligned}
```



For $x > \ln 2$, $f''(x) > 0$  
For $x < \ln 2$, $f''(x) < 0$

$f$ is concave up on $(\ln 2, \infty)$  
$f$ is convave up on $(-\infty, \ln 2)$



```math
\begin{array}{c}
e^{\ln x} = x \\
e^{\ln 2} = 2
\end{array}
```



---

<!-- Source: GAMAT101_Mathematics-for-Information-Science-1_Module-1_ktunotes.in.pdf; page 35 -->

Q. Find the eqn of the tangent line and normal line to the curve $6x^2 + 3xy + 2y^2 + 17y - 6 = 0$ at $(-1, 0)$



```math
f'(x) = 12x + 3\left(\frac{dy}{dx}x + y\right) + 4y \frac{dy}{dx} + 17 \frac{dy}{dx}
```





```math
\Rightarrow 12x + 3\frac{dy}{dx} \cdot x + 3y + 4y \frac{dy}{dx} + 17 \frac{dy}{dx} = 0
```





```math
3\frac{dy}{dx} \cdot x + 4y \cdot \frac{dy}{dx} + 17 \frac{dy}{dx} = -12x - 3y
```





```math
\frac{dy}{dx}(3x + 4y + 17) = -12x - 3y
```





```math
\frac{dy}{dx} = \frac{-(12x + 3y)}{(3x + 4y + 17)}
```





```math
f'(x_0, y_0) = \frac{-(12 \times -1 + 3 \times 0)}{3 \times -1 + 4 \times 0 + 17} = \frac{12}{14} = \frac{6}{7}
```





```math
y - y_0 = f'(x_0, y_0)(x - x_0)
```





```math
y - 0 = \frac{6}{7}(x - (-1))
```





```math
7y = 6(x + 1)
```





```math
y = \frac{6x}{7} + \frac{6}{7}
```



**Eqn of normal line**



```math
y - y_0 = \frac{-1}{f'(x_0, y_0)}(x - x_0)
```





```math
y - 0 = \frac{-1}{\frac{6}{7}}(x - (-1))
```





```math
6y = -7x - 7
```





```math
y = \frac{-(7x + 7)}{6}
```


