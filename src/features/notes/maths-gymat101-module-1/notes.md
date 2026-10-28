<!-- page 1 | Page 1 -->

<!-- page 2 | Module 1 -->

# Module 1

## Linear System of Equations - Gauss Elimination.

### Linear System, Coefficient Matrix, Augmented Matrix.

A linear system of $m$ equations in $n$ unknowns $x_1, x_2, \dots, x_n$ is a set of equations of the form,

$$\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &= b_2 \\
&\dots \dots \dots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n &= b_m
\end{aligned}\qquad \text{--- } \textcircled{1}$$

The system is called linear, because each variable $x_j$ appears in the first power only, just as in the equation of a straight line.

$a_{11}, a_{12}, \dots, a_{mn}$ are given numbers called the coefficients of the system.

$b_1, b_2, \dots, b_m$ on the right are also given numbers.

* If all the $b_j$ are zero, then \textcircled{1} is called a homogenous system.
* If atleast one $b_j$ is not zero, then \textcircled{1} is called a nonhomogenous system.
* A solution of \textcircled{1} is a set of numbers $x_1, \dots, x_n$ that satisfies all the $m$ equations.
* A solution vector of \textcircled{1} is a vector $x$ whose components form a solution of \textcircled{1}.
* If \textcircled{1} is homogeneous, it always has atleast the trivial solution $x_1 = x_2 = \dots = x_n = 0$

<!-- page 3 | Page 3 -->

Matrix form of (1) is,

$$Ax = b$$

where the coefficient matrix $A = [a_{jk}]$ is the $m \times n$ matrix

$$A = \begin{bmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} \end{bmatrix} \& \quad x = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix} \& \quad b = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix}$$

are the column vectors.

* Augmented matrix of (1) is

$$\tilde{A} = \left[ \begin{array}{cccc|c} a_{11} & a_{12} & \dots & a_{1n} & b_1 \\ a_{21} & a_{22} & \dots & a_{2n} & b_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ a_{m1} & a_{m2} & \dots & a_{mn} & b_m \end{array} \right]$$

__Example-1:__ Geometric Interpretation. Existence & Uniqueness of sol$^n$.

If $m = n = 2$, we have 2 equation & 2 unknowns $x_1, x_2$

$$a_{11}x_1 + a_{12}x_2 = b_1$$
$$a_{21}x_1 + a_{22}x_2 = b_2$$

Each of these two equations represents a straight line.
$(x_1, x_2)$ is a solution iff the point $P$ with coordinates $x_1, x_2$ lies on both lines.

<!-- page 4 | Page 4 -->

(i). Precisely one solution if the lines intersect.

(ii). Infinitely many solutions if the lines coincide.

(iii). No solution if the lines are parallel.

Case (i)
$$x_1 + x_2 = 1$$
$$2x_1 - x_2 = 0$$

![Graph showing two intersecting lines for Case (i)](/assets/notes/me/s1/maths/module-1/case-i-intersecting.svg)

Case (ii)
$$x_1 + x_2 = 1$$
$$2x_1 + 2x_2 = 2$$

![Graph showing two coinciding lines for Case (ii)](/assets/notes/me/s1/maths/module-1/case-ii-coinciding.svg)

Case (iii)
$$x_1 + x_2 = 1$$
$$x_1 + x_2 = 0$$

![Graph showing two parallel lines for Case (iii)](/assets/notes/me/s1/maths/module-1/case-iii-parallel.svg)

* If the system is homogenous, case (iii) can't happen.

<!-- page 5 | Gauss Elimination and Back substitution -->

# Gauss Elimination and Back substitution

Consider the linear system in triangular form (upper triangular)
$$\begin{aligned}
2x_1 + 5x_2 &= 2 \\
13x_2 &= -26
\end{aligned}$$

Then, we can solve the system by back substitution.

i.e. , $13x_2 = -26 \Rightarrow x_2 = \frac{-26}{13} = -2$

Then, $2x_1 + 5x_2 = 2 \Rightarrow 2x_1 + 5(-2) = 2$
$$\begin{aligned}
\Rightarrow 2x_1 - 10 &= 2 \\
\Rightarrow 2x_1 &= 2 + 10 = 12 \\
\Rightarrow x_1 &= 6
\end{aligned}$$

Q). Solve
$$\begin{aligned}
2x_1 + 5x_2 &= 2 \\
-4x_1 + 3x_2 &= -30
\end{aligned}$$

Soln: Augmented matrix of given system is,
$$\left[\begin{array}{cc:c} 2 & 5 & 2 \\ -4 & 3 & -30 \end{array}\right]$$

$$R_2 \to 2R_1 + R_2 \sim \left[\begin{array}{cc:c} 2 & 5 & 2 \\ 0 & 13 & -26 \end{array}\right]$$

$$\Rightarrow \left.\begin{aligned}
2x_1 + 5x_2 &= 2 \\
13x_2 &= -26
\end{aligned}\right\} \Rightarrow x_2 = \frac{-26}{13} = -2$$
$$\begin{aligned}
\& \ 2x_1 &= 2 + 10 = 12 \\
\Rightarrow x_1 &= 6
\end{aligned}$$

<!-- page 6 | Page 6 -->

Q. Find the unknown currents $i_1, i_2, i_3$ in the given circuit.

![Circuit diagram with resistors, voltage sources, and nodes P and Q](/assets/notes/me/s1/maths/module-1/circuit-p-q.svg)

By Kirchoff's laws,

Node $P$: $i_1 - i_2 + i_3 = 0$

Node $Q$: $-i + i_2 - i_3 = 0$

Right loop: $10 i_2 + 25 i_3 = 90$

Left loop: $20 i_1 + 10 i_2 = 80$

Let $i_1 = x_1$ , $i_2 = x_2$ , $i_3 = x_3$

Then, we get the linear system

$$\begin{aligned}
x_1 - x_2 + x_3 &= 0 \\
-x_1 + x_2 - x_3 &= 0 \\
10 x_2 + 25 x_3 &= 90 \\
20 x_1 + 10 x_2 &= 80
\end{aligned} \quad \text{--- } (1)$$

Augmented matrix is,

$$\tilde{A} = \begin{bmatrix}
1 & -1 & 1 & : & 0 \\
-1 & 1 & -1 & : & 0 \\
0 & 10 & 25 & : & 90 \\
20 & 10 & 0 & : & 80
\end{bmatrix}$$

<!-- page 7 | Page 7 -->

$$\begin{matrix} R_2 
ightarrow R_1 + R_2 \\ R_3 
ightarrow -20R_1 + R_3 \end{matrix} \sim \begin{bmatrix} 1 & -1 & 1 & : & 0 \\ 0 & 0 & 0 & : & 0 \\ 0 & 10 & 25 & : & 90 \\ 0 & 30 & -20 & : & 80 \end{bmatrix} \sim \begin{bmatrix} 1 & -1 & 1 & : & 0 \\ 0 & 10 & 25 & : & 90 \\ 0 & 30 & -20 & : & 80 \\ 0 & 0 & 0 & : & 0 \end{bmatrix}$$

$$R_3 
ightarrow -3R_2 + R_3 \quad \begin{bmatrix} 1 & -1 & 1 & : & 0 \\ 0 & 10 & 25 & : & 90 \\ 0 & 0 & -95 & : & -190 \\ 0 & 0 & 0 & : & 0 \end{bmatrix}$$

$$\begin{aligned}
\Rightarrow \quad x_1 - x_2 + x_3 &= 0 \\
10x_2 + 25x_3 &= 90 \\
-95x_3 &= -190 \\
0 &= 0
\end{aligned}$$

By Back substitution,
$$-95x_3 = -190 \implies x_3 = 2$$

$$10x_2 + 25(2) = 90 \implies x_2 = \frac{90 - 50}{10} = 4$$

$$x_1 - 4 + 2 = 0 \implies x_1 = 2$$

$$\begin{aligned}
\therefore i_1 &= 2\text{ A} \\
i_2 &= 4\text{ A} \\
i_3 &= 2\text{ A}
\end{aligned}$$

<!-- page 8 | Page 8 -->

Elementary Row Operations for Matrices:
- Interchange of two rows
- Addition of a constant multiple of one row to another row.
- Multiplication of a row by a nonzero constant $c$.

These operations are for rows, not for columns.

* A linear system $S_1$ is row-equivalent to a linear system $S_2$, if $S_1$ can be obtained from $S_2$ by row operations.

<u>Theorem:</u>
Row equivalent systems have the same set of solutions.

* In the circuit problem, we've seen that the Gauss elimination can solve linear systems that have a <u>unique solution.</u>
In the following 2 examples, we apply Gauss elimination to a system with infinitely many solutions and one with no solution.

* Solve the following linear system of three equations in four unknowns whose augmented matrix is,
$$\begin{bmatrix}
3 & 2 & 2 & -5 & : & 8 \\
.6 & 1.5 & 1.5 & -5.4 & : & 2.7 \\
1.2 & -0.3 & -0.3 & 2.4 & : & 2.1
\end{bmatrix}$$

Soln:
$$\begin{matrix}
-0.2 \text{ Row } 1 + \text{ Row } 2 \\
-0.4 \text{ Row } 1 + \text{ Row } 3
\end{matrix} \sim \begin{bmatrix}
3 & 2 & 2 & -5 & : & 8 \\
0 & 1.1 & 1.1 & -4.4 & : & 1.1 \\
0 & -1.1 & -1.1 & 4.4 & : & -1.1
\end{bmatrix}$$

<!-- page 9 | Page 9 -->

$$\sim \text{Row 3} \rightarrow \text{Row 2} + \text{Row 3} \begin{bmatrix} 3 & 2 & 2 & -5 & : 8 \\ 0 & 1.1 & 1.1 & -4.4 & : 1.1 \\ 0 & 0 & 0 & 0 & : 0 \end{bmatrix}$$

$$\Rightarrow 3x_1 + 2x_2 + 2x_3 - 5x_4 = 8 \quad \text{--- } ①$$

$$1.1x_2 + 1.1x_3 - 4.4x_4 = 1.1 \quad \text{--- } ②$$

By Back substitution,

~~$② \Rightarrow x_2 = \frac{1.1 - [1.1x_3 + 4.4x_4]}{1.1}$~~

$$- \quad ② \Rightarrow x_2 = [1.1 - 1.1x_3 + 4.4x_4] \times \frac{1}{1.1} = 1 - x_3 + 4x_4$$

$$\therefore ① \Rightarrow 3x_1 = -2(1 - x_3 + 4x_4) - 2x_3 + 5x_4 + 8$$

$$3x_1 = 6 - 3x_4 \Rightarrow x_1 = 2 - x_4$$

i.e., $x_1 = 2 - x_4$ & $x_2 = 1 - x_3 + x_4$

$$\therefore x_3 \ \& \ x_4 \text{ remain arbitrary, we've } \underline{\text{infinitely many solutions.}}$$

Let $x_3 = t_1 \ \& \ x_4 = t_2$

$$\Rightarrow \begin{aligned} x_1 &= 2 - t_2 \\ x_2 &= 1 - t_1 + t_2 \\ x_3 &= t_1 \\ x_4 &= t_2 \end{aligned}$$

<!-- page 10 | Page 10 -->

*solve, whose augmented form is,

$$\left[\begin{matrix} 3 & 2 & 1 & : & 3 \\ 2 & 1 & 1 & : & 0 \\ 6 & 2 & 4 & : & 6 \end{matrix}\right]$$

Soln: 

$$\begin{aligned} \text{Row } 2 &\rightarrow -\frac{2}{3} \text{ Row } 1 + \text{Row } 2 \\ \text{Row } 3 &\rightarrow -2 \text{ Row } 1 + \text{Row } 3 \end{aligned} \qquad \left[\begin{matrix} 3 & 2 & 1 & : & 3 \\ 0 & -\frac{1}{3} & \frac{1}{3} & : & -2 \\ 0 & -2 & 2 & : & 0 \end{matrix}\right]$$

$$\text{Row } 3 \rightarrow -6 \text{ Row } 2 + \text{Row} \qquad \left[\begin{matrix} 3 & 2 & 1 & : & 3 \\ 0 & -\frac{1}{3} & \frac{1}{3} & : & -2 \\ 0 & 0 & 0 & : & 12 \end{matrix}\right]$$

$$\begin{aligned} \Rightarrow 3x_1 + 2x_2 + x_3 &= 3 \\ -\frac{1}{3}x_2 + \frac{1}{3}x_3 &= -2 \\ 0 &= 12 \end{aligned}$$

the false statement $0=12$ shows that the system <u>has no solutions.</u>

<!-- page 11 | Page 11 -->

* Solve
$$\begin{aligned}
x + y - z &= 9 \\
8y + 6z &= -6 \\
-2x + 4y - 6z &= 40
\end{aligned}$$

Soln: The corresponding augmented form is,

$$\left[ \begin{matrix} 1 & 1 & -1 & \vdots & 9 \\ 0 & 8 & 6 & \vdots & -6 \\ -2 & 4 & -6 & \vdots & 40 \end{matrix} \right]$$

$$\text{Row } 3 \to 2 \text{ Row } 1 + \text{ Row } 3 \quad \left[ \begin{matrix} 1 & 1 & -1 & \vdots & 9 \\ 0 & 8 & 6 & \vdots & -6 \\ 0 & 6 & -8 & \vdots & 58 \end{matrix} \right] \sim \left[ \begin{matrix} 1 & 1 & -1 & \vdots & 9 \\ 0 & 4 & 3 & \vdots & -3 \\ 0 & 3 & -4 & \vdots & 29 \end{matrix} \right]$$

$$\text{Row } 3 \to -\frac{3}{4} \text{ Row } 2 + \text{ Row } 3 \quad \left[ \begin{matrix} 1 & 1 & -1 & \vdots & 9 \\ 0 & 4 & 3 & \vdots & -3 \\ 0 & 0 & -\frac{25}{4} & \vdots & \frac{125}{4} \end{matrix} \right]$$

By Back substitution,

$$-\frac{25}{4} x_3 = \frac{125}{4} \implies x_3 = 5$$

$$4x_2 + 3(-5) = -3 \implies 4x_2 = -3 + 15 = 12$$

$$\implies x_2 = \frac{12}{4} = 3$$

$$x_1 + 3 - (-5) = 9 \implies x_1 = 1$$

$$\therefore x_1 = 1, x_2 = 3, x_2 = -5$$

<!-- page 12 | Page 12 -->

Solve. The augmented matrix is given below.
$$\begin{bmatrix} 2 & 4 & 1 & : & 0 \\ -1 & 1 & -2 & : & 0 \\ 4 & 0 & 6 & : & 0 \end{bmatrix}$$

Soln:
$$\begin{aligned}
& \text{Row } 2 \to \frac{1}{2} \text{ Row } 1 + \text{ Row } 2 \\ 
& \text{Row } 3 \to -2 \text{ Row } 1 + \text{ Row } 3
\end{aligned}$$
$$\begin{bmatrix} 2 & 4 & 1 & : & 0 \\ 0 & 3 & -\frac{3}{2} & : & 0 \\ 0 & -8 & 4 & : & 0 \end{bmatrix}$$

$$\begin{aligned}
& \text{Row } 2 \to \frac{1}{3} \text{ Row } 2 \\ 
& \text{Row } 3 \to \frac{1}{4} \text{ Row } 3
\end{aligned}$$
$$\begin{bmatrix} 2 & 4 & 1 & : & 0 \\ 0 & 1 & -\frac{1}{2} & : & 0 \\ 0 & -2 & 1 & : & 0 \end{bmatrix}$$

$$\text{Row } 3 \to 2 \text{ Row } 1 + \text{Row}$$
$$\begin{bmatrix} 2 & 4 & 1 & : & 0 \\ 0 & 1 & -\frac{1}{2} & : & 0 \\ 0 & 0 & 0 & : & 0 \end{bmatrix}$$

$$\Rightarrow \begin{aligned} 2x_1 + 4x_2 + x_3 &= 0 \\ x_2 - \frac{1}{2} x_3 &= 0 \end{aligned}$$

By back substitution,
$$x_2 = \frac{1}{2} x_3$$

$$2x_1 + 4\left(\frac{1}{2} x_3\right) + x_3 = 0$$
$$\Rightarrow 2x_1 = -3x_3 \Rightarrow x_1 = -\frac{3}{2} x_3.$$

Let $x_2 = t \Rightarrow x_3 = 2t \Rightarrow x_1 = -\frac{3}{2}(2t) = -3t$.

$$\therefore x_1 = -3t, \; x_2 = t, \; x_3 = 2t. \quad , t \text{ is arbitrary.}$$

<!-- page 13 | Page 13 -->

* Augmented matrix of a linear system is given below. Solve it.

$$\begin{bmatrix} 0 & 5 & 5 & -10 & 0 \\ 2 & -3 & -3 & 6 & 2 \\ 4 & 1 & 1 & -2 & 4 \end{bmatrix}$$

Soln: Interchange Row 1 & Row 3

$$\begin{bmatrix} 4 & 1 & 1 & -2 & : & 4 \\ 2 & -3 & -3 & 6 & : & 2 \\ 0 & 5 & 5 & -10 & : & 0 \end{bmatrix}$$

$$\text{Row 2} \to \frac{-2}{4} \text{ Row 1} + \text{Row 2} \quad \begin{bmatrix} 4 & 1 & 1 & -2 & : & 4 \\ 0 & \frac{-7}{2} & \frac{-7}{2} & 7 & : & 0 \\ 0 & 5 & 5 & -10 & : & 0 \end{bmatrix}$$

$$\text{Row 2} \to \frac{-2}{7} \text{ Row 2} \quad \begin{bmatrix} 4 & 1 & 1 & -2 & : & 4 \\ 0 & 1 & 1 & -2 & : & 0 \\ 0 & 5 & 5 & -10 & : & 0 \end{bmatrix}$$

$$\text{Row 3} \to -5 \text{ Row 2} + \text{Row 3} \quad \begin{bmatrix} 4 & 1 & 1 & -2 & : & 4 \\ 0 & 1 & 1 & -2 & : & 0 \\ 0 & 0 & 0 & 0 & : & 0 \end{bmatrix}$$

$$4x_1 + x_2 + x_3 - 2x_4 = 4$$

$$x_2 + x_3 - 2x_4 = 0$$

By back substitution, $x_2 = 2x_4 - x_3$

$$4x_1 = -2x_4 + x_3 - x_3 + 2x_4 + 4$$
$$= 4$$

<!-- page 14 | Row Echelon form -->

Let $x_3 = t_1$, $x_4 = t_2$

$$\Rightarrow \cancel{x_3 = 2t_2 -} \; x_2 = 2t_2 - t_1$$

$$\therefore x_1 = 1, \quad x_2 = 2t_2 - t_1, \quad x_3 = t_1, \quad x_4 = t_2$$

where $t_1$ & $t_2$ are arbitrary.

## Row Echelon form

At the end of the Gauss elimination, the form of the coefficient matrix, the augmented matrix, and the system itself are called the **row echelon form**. In it, the zero rows, if present, are the last rows, and, in each nonzero row, the leftmost nonzero entry is farther to the right than in the previous row.

At the end of the Gauss elimination, the row echelon form of the augmented matrix will be

$$\begin{bmatrix}
r_{11} & r_{12} & \cdots & r_{1n} & : & f_1 \\
0 & r_{2j} & \cdots & r_{2n} & : & f_2 \\
0 & 0 \dots r_{kn} & \dots & \dots & : & \dots \\
0 & \dots 0 \dots r_r & \dots & r_{rn} & : & f_r \\
0 & \dots & \dots & 0 & : & f_{r+1} \\
0 & \dots & \dots & 0 & : & f_{r+2} \\
& & & & \vdots & \\
& 0 & & 0 & : & f_m
\end{bmatrix}$$

Here $r \le m$ & $r_{11} \neq 0$

<!-- page 15 | Page 15 -->

- The no. of nonzero rows, $r$, in the row-reduced coefficient matrix $R$ is called the <u>rank of $R$</u> and also the <u>rank of $A$</u>.

- Method for determining where $Ax = b$ has solutions:

(a). No solution.
If $r < m$ and atleast one of the no's $f_{r+1}, 	ext{... } f_m$ is not zero, then the system is inconsistent. No solution is possible.

(b). Unique solution.
If $r = m$, then the system is consistent & there is exactly one solution.

(c). Infinitely many solutions.
If $r < m$ & all the numbers $f_{r+1}, f_{r+2}, 	ext{... } f_m$ are zero, then the system is consistent & there is infinitely many solutions. To obtain any of these solutions, choose values of $x_{r+1}, 	ext{... } x_n$ arbitrarily. Then solve the $r^{\text{th}}$ $\text{eq}^\text{n}$ for $x_r$, then $(r-1)^{\text{st}}$ $\text{eq}^\text{n}$ for $x_{r-1}$ and so on.

<!-- page 16 | Linear Independence, Rank of a Matrix. -->

## Linear Independence, Rank of a Matrix.

- Linear combination of vectors:
  
  Given any set of $m$ vectors $a_1, a_2, \dots, a_m$ (with the same no. of components), a _linear combination_ of these vectors is an expression of the form
  
  $$c_1 a_{(1)} + c_2 a_{(2)} + \dots + c_m a_{(m)}$$
  
  where $c_1, c_2, \dots, c_m$ are any scalars.

- Linearly independent & dependent set.
  
  Consider the equation
  
  $$c_1 a_{(1)} + c_2 a_{(2)} + \dots + c_m a_{(m)} = 0 \quad \text{--- } (1)$$
  
  clearly $(1)$ holds if we choose all $c_j$'s zero. If this is the only $m$-tuple of scalars for which $(1)$ holds, then our vectors $a_{(1)}, a_{(2)}, \dots, a_{(m)}$ are said to form a _linearly independent set_.
  
  If $(1)$ holds with scalars not all zero, we call these vectors _linearly dependent_.
  
  (This means we can express atleast one of the vectors as a linear combination of the other vectors.)

Eg: Consider the vectors
  
$$a_{(1)} = \begin{bmatrix} 3 & 0 & 2 & 2 \end{bmatrix}$$
  
$$a_{(2)} = \begin{bmatrix} -6 & 42 & 24 & 54 \end{bmatrix}$$

[illegible]

<!-- page 17 | Rank of a Matrix -->

Here, $6 a_{(1)} - \frac{1}{2} a_{(2)} - a_{(3)} = 0$

Scalars are $6, -1/2, -1$

$\therefore$ These vectors are linearly dependent.

The first two of three vectors are linearly independent, because $c_1 a_{(1)} + c_2 a_{(2)} = 0 \Rightarrow c_2 = 0 \text{ & } c_1 = 0$.

## Rank of a Matrix

**Definition:** The rank of a matrix $A$ is the maximum no. of linearly independent row vectors of $A$. It is denoted by $\text{rank } A$.

eg: The matrix $\begin{bmatrix} 3 & 0 & 2 & 2 \\ -6 & 42 & 24 & 54 \\ 21 & -21 & 0 & -15 \end{bmatrix}$ has rank 2.

**Note:** $\text{Rank } A = 0$ iff $A = 0$.

**Theorem:** Row-equivalent matrices have the same rank.

* Find the rank of the matrix

$$A = \begin{bmatrix} 3 & 0 & 2 & 2 \\ -6 & 42 & 24 & 54 \\ 21 & -21 & 0 & -15 \end{bmatrix}$$

Soln:
$$\begin{aligned}
\text{Row } 2 &\rightarrow 2 \text{ Row } 1 + \text{ Row } 2 \\
\text{Row } 3 &\rightarrow -7 \text{ Row } 1 + \text{ Row } 3
\end{aligned}
\qquad
\begin{bmatrix} 3 & 0 & 2 & 2 \\ 0 & 42 & 28 & 58 \\ 0 & -21 & -14 & -29 \end{bmatrix}$$

<!-- page 18 | Page 18 -->

Row $3 
ightarrow rac{1}{2}	ext{Row } 2 + 	ext{Row } 3 egin{bmatrix} 3 & 0 & 2 & 2 \ 0 & 42 & 28 & 28 \ 0 & 0 & 0 & 0 egin{bmatrix}

$\Rightarrow \text{Rank } A = 2$

<u>Theorem:</u> Linear independence & Dependence of vectors.

Consider $p$ vectors that each have $n$ components. Then these vectors are linearly independent if the matrix formed, with these vectors as row vectors, has rank $p$. However, these vectors are linearly dependent if that matrix has rank less than $p$.

<u>Theorem:</u> Rank in terms of column vectors.

The rank $r$ of a matrix $A$ equals the maximum number of linearly independent column vectors of $A$.

$A$ & $A^T$ have the same rank.

<u>Theorem:</u> Linear Dependence of vectors

Consider $p$ vectors each having $n$ components. If $n < p$, then these vectors are linearly dependent.

Q. Find the rank of following matrices

(i) $A = \begin{pmatrix} 0 & 3 & 5 \\ 3 & 5 & 0 \\ 5 & 0 & 10 \end{pmatrix}$

(ii). $A = \begin{pmatrix} 2 & 4 & 8 & 16 \\ 16 & 8 & 4 & 2 \\ 4 & 8 & 16 & 2 \\ 2 & 16 & 8 & 4 \end{pmatrix}$

<!-- page 19 | Page 19 -->

(i) $A = \begin{pmatrix} 0 & 3 & 5 \\ 3 & 5 & 0 \\ 5 & 0 & 10 \end{pmatrix} \sim \begin{pmatrix} 5 & 0 & 10 \\ 3 & 5 & 0 \\ 0 & 3 & 5 \end{pmatrix}$

$R_2 \rightarrow -\frac{3}{5} \text{Row}1 + \text{Row}2 \quad \begin{pmatrix} 5 & 0 & 10 \\ 0 & 5 & -6 \\ 0 & 3 & 5 \end{pmatrix}$

$R_3 \rightarrow -\frac{3}{5} \text{Row}2 + \text{Row} \quad \begin{pmatrix} 5 & 0 & 10 \\ 0 & 5 & -6 \\ 0 & 0 & \frac{43}{5} \end{pmatrix}$

$\therefore \text{Rank } A = 3$.

(ii). $A = \begin{pmatrix} 2 & 4 & 8 & 16 \\ 16 & 8 & 4 & 2 \\ 4 & 8 & 16 & 2 \\ 2 & 16 & 8 & 4 \end{pmatrix} \sim \begin{pmatrix} 1 & 2 & 4 & 8 \\ 8 & 4 & 2 & 1 \\ 2 & 4 & 8 & 1 \\ 1 & 8 & 4 & 2 \end{pmatrix}$

$$\begin{aligned}
& R_2 \rightarrow -8 R_1 + R_2 \\
& R_3 \rightarrow -2 R_1 + R_3 \\
& R_4 \rightarrow -R_1 + R_4
\end{aligned}
\quad \begin{pmatrix}
1 & 2 & 4 & 8 \\
0 & -12 & -30 & -63 \\
0 & 0 & 0 & -15 \\
0 & 6 & 0 & -6
\end{pmatrix}$$

$R_4 \rightarrow \frac{1}{2} R_1 + R_4 \quad \begin{pmatrix}
1 & 2 & 4 & 8 \\
0 & -12 & -30 & -63 \\
0 & 0 & 0 & -15 \\
0 & 0 & -15 & -75
\end{pmatrix} \sim \begin{pmatrix}
1 & 2 & 4 & 8 \\
0 & -12 & -30 & -63 \\
0 & 0 & -15 & -75/2 \\
0 & 0 & 0 & -15
\end{pmatrix}$

<!-- page 20 | Page 20 -->

Q. Are the following set of vectors linearly independent?

(i) $\begin{bmatrix}3 & 4 & 0 & 2\end{bmatrix}$, $\begin{bmatrix}2 & -1 & 3 & 7\end{bmatrix}$, $\begin{bmatrix}1 & 16 & -12 & -22\end{bmatrix}$

(ii) $\begin{bmatrix}0 & 1 & 1\end{bmatrix}$, $\begin{bmatrix}1 & 1 & 1\end{bmatrix}$, $\begin{bmatrix}0 & 0 & 1\end{bmatrix}$

(iii) $\begin{bmatrix}0.4 & -0.2 & 0.2\end{bmatrix}$, $\begin{bmatrix}0 & 0 & 0\end{bmatrix}$, $\begin{bmatrix}3.0 & -0.6 & 1.5\end{bmatrix}$.

Soln: (i).
$$A = \begin{bmatrix} 3 & 4 & 0 & 2 \\ 2 & -1 & 3 & 7 \\ 1 & 16 & -12 & -22 \end{bmatrix} \sim \begin{bmatrix} 1 & 16 & -12 & -22 \\ 2 & -1 & 3 & 7 \\ 3 & 4 & 0 & 2 \end{bmatrix}$$

$$\begin{matrix} R_2 \to -2R_1 + R_2 \\ R_3 \to -3R_1 + R_3 \end{matrix} \begin{bmatrix} 1 & 16 & -12 & -22 \\ 0 & -33 & 27 & 51 \\ 0 & -44 & 36 & 68 \end{bmatrix} \sim \begin{bmatrix} 1 & 16 & -12 & -22 \\ 0 & -11 & 9 & 17 \\ 0 & -22 & 18 & 34 \end{bmatrix}$$

$$R_3 \to -2R_2 + R_3 \begin{bmatrix} 1 & 16 & -12 & -22 \\ 0 & -11 & 9 & 17 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$

Rank $A = 2 \implies$ Given vectors are Linearly dependent.

(ii). $A = \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix} \sim \begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix} \quad \text{Rank } A = 3$
$$\implies \text{Linearly independent.}$$

(iii). $A = \begin{bmatrix} 0.4 & -0.2 & 0.2 \\ 0 & 0 & 0 \\ 3.0 & -0.6 & 1.5 \end{bmatrix}$ has rank = 2

$\implies$ linearly dependent.

<!-- page 21 | Page 21 -->

Existence of Linear Systems : Existence, Uniqueness.

Theorem: Fundamental theorem for Linear systems.

(a). Existence.

A linear system of $m$ equations in $n$ unknowns $x_1, 
u, x_n$
$$
\begin{aligned}
a_{11} x_1 + \dots + a_{1n} x_n &= b_1 \\
a_{21} x_1 + \dots + a_{2n} x_n &= b_2 \qquad \text{---} (1) \\
&\;\vdots \\
a_{m1} x_1 + \dots + a_{mn} x_n &= b_m
\end{aligned}
$$
is consistent, i.e., has solutions, iff the coefficient matrix $A$ and the augmented matrix $\tilde{A}$ have the same rank.

Here, $A = \begin{bmatrix} a_{11} & \dots & a_{1n} \\ a_{21} & \dots & a_{2n} \\ \vdots & \dots & \vdots \\ a_{m1} & \dots & a_{mn} \end{bmatrix}$, $\tilde{A} = \begin{bmatrix} a_{11} & \dots & a_{1n} & : & b_1 \\ a_{21} & \dots & a_{2n} & : & b_2 \\ \vdots & \dots & \vdots & : & \vdots \\ a_{m1} & \dots & a_{mn} & : & b_m \end{bmatrix}$

(b). Uniqueness.

The system $(1)$ has precisely one solution iff this common rank $r$ of $A$ & $\tilde{A}$ equals $n$.

(c). Infinitely many solutions.

If this common rank $r$ is less than $n$, the system $(1)$ has infinitely many solutions. All of these solutions are obtained by determining $r$ suitable unknowns (whose submatrix of coefficients must be rank $r$) in terms of the remaining $(n-r)$ unknowns, to which arbitrary values can be assigned.

(d). Gauss elimination: If solution exists, they can all be obtained by the Gauss elimination.

<!-- page 22 | Homogeneous Linear System -->

## Homogeneous Linear System

**Theorem:**

A homogeneous linear system
$$\begin{aligned}
a_{11}x_1 + \dots + a_{1n}x_n &= 0 \\
a_{21}x_1 + \dots + a_{2n}x_n &= 0 \qquad \text{--- } (2) \\
&\dots \\
a_{m1}x_1 + \dots + a_{mn}x_n &= 0
\end{aligned}$$
always has the trivial solution $x_1 = 0, \dots, x_n = 0$.

Nontrivial solution exists iff $\text{rank } A < n$.

In particular, if $x_{(1)}$ & $x_{(2)}$ are solutions vectors of $(2)$, then $x = c_1 x_{(1)} + c_2 x_{(2)}$ with any scalars $c_1 \& c_2$ is a solution vector of $(2)$.

**Theorem:**

A homogeneous linear system with fewer equations than unknowns always has nontrivial solutions.

## Non homogeneous Linear System

**Theorem:**

If a nonhomogeneous linear system $(1)$ is consistent, then all of its solutions are obtained as
$$x = x_0 + x_h$$
where $x_0$ is any (fixed) solution of $(1)$ and $x_h$ runs through all the solutions of the corresponding homogeneous system $(2)$.

<!-- page 23 | The Matrix Eigenvalue Problem - Determining Eigenvalues and Eigenvectors. -->

## The Matrix Eigenvalue Problem - Determining Eigenvalues and Eigenvectors.

Let $A = [a_{jk}]$ be a given nonzero square matrix of dimension $n 	imes n$. Consider the vector equation:

$$Ax = \lambda x. \qquad \text{--- } (1)$$

* The problem of finding nonzero $x$'s & $\lambda$'s that satisfy eqn (1) is called an **eigenvalue problem**.

* A value of $\lambda$ for which (1) has a solution $x \neq 0$, is called an **eigenvalue** or **characteristic value** of the matrix $A$. (or latent root)

The corresponding solutions $x \neq 0$ of (1) are called the **eigenvectors** or **characteristic ~~of~~ vectors** of $A$ corresponding to that eigenvalue $\lambda$.

* The set of all eigenvalues of $A$ is called the **spectrum** of $A$.
* The largest of the absolute values of the eigenvalues of $A$ is called the **spectral radius** of $A$.

### Characteristic equation & Characteristic polynomial

Let $A$ be a $n \times n$ square matrix. Then the characteristic polynomial of $A$ ^(or characteristic determinant) denoted by $D(\lambda)$ is $\det (A - \lambda I)$.

$D(\lambda) = \det(A - \lambda I) = 0$ is the **characteristic ~~polyn~~ equation** of $A$.

* $A - \lambda I$ is called the **characteristic matrix** & ~~$D(\lambda)$ is the characteristic determinant of $A$~~

<!-- page 24 | Page 24 -->

* Determine the eigenvalues & eigenvectors of matrix A
given below .

$$A = \begin{bmatrix} -5 & 2 \\ 2 & -2 \end{bmatrix}$$

$\text{Sol}^n$: We know, eigenvalues of a square matrix $A$ are the solutions of the $\text{eq}^n$ $\det(A - \lambda I) = 0$

$$\det(A - \lambda I) = 0 \Rightarrow \det \left( \begin{bmatrix} -5 & 2 \\ 2 & -2 \end{bmatrix} - \lambda \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \right) = 0$$

$$\Rightarrow \det \begin{bmatrix} -5 - \lambda & 2 \\ 2 & -2 - \lambda \end{bmatrix} = 0$$

$$\Rightarrow (-5 - \lambda)(-2 - \lambda) - 4 = 0$$

$$10 + 5\lambda + 2\lambda + \lambda^2 - 4 = 0$$

$$\Rightarrow \lambda^2 + 7\lambda + 6 = 0 \text{ , is the characteristic } \text{eq}^n \text{ of } A .$$

$$\Rightarrow \lambda = \frac{-7 \pm \sqrt{49 - 4 \times 6}}{2} = \frac{-7 \pm \sqrt{25}}{2}$$

$$= \frac{-7 \pm 5}{2} = \frac{-7 + 5}{2} \text{ or } \frac{-7 - 5}{2}$$

$$= -1, -6$$

$$\therefore \lambda_1 = -1 \text{ , } \lambda_2 = -6 \text{ , are the eigenvalues of } A .$$

Now, we find eigenvector of $A$ corresponding to each eigenvalue.
To find eigenvector corresponding to $\lambda_1 = -1$, we find those vectors

<!-- page 25 | Page 25 -->

$x \neq 0$ such that $(A - \lambda_1 I)x = 0$, where $x = \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}$

$\Rightarrow \left(\begin{bmatrix} -5 & 2 \\ 2 & -2 \end{bmatrix} - -1\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}\right) x = 0$

$\Rightarrow \begin{pmatrix} -4 & 2 \\ 2 & -1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

$\Rightarrow \begin{aligned} -4x_1 + 2x_2 &= 0 \\ 2x_1 - x_2 &= 0 \end{aligned}$

Solve this system of linear equation to find $x_1 \& x_2$.

$\begin{pmatrix} -4 & 2 \\ 2 & -1 \end{pmatrix}$ or

$R_2 \to \frac{1}{2} R_1 + R_2 \Rightarrow \begin{pmatrix} -4 & 2 \\ 0 & 0 \end{pmatrix}$

$\Rightarrow -4x_1 + 2x_2 = 0 \Rightarrow -4x_1 = -2x_2$

$\Rightarrow x_1 = +\frac{1}{2} x_2$

or, $x_2 = 2x_1$

we choose $x_1 = 1 \Rightarrow x_2 = 2$.

$\therefore \quad x = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ is an eigenvector of $A$ corresponding

to the eigenvalue $\lambda_1 = -1$.

Now, we need to find the eigenvector of $A$ corresponding
to $\lambda_2$. i.e., find those $x \neq 0$ such that $(A - \lambda_2 I)x = 0$.

$(A - \lambda_2 I) = \begin{pmatrix} -5 & 2 \end{pmatrix} - -6\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$

<!-- page 26 | Page 26 -->

$$\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

$$\Rightarrow \quad x_1 + 2x_2 = 0$$
$$2x_1 + 4x_2 = 0$$

Solve this system of linear equation to find $x_1$ & $x_2$.

$$\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$$

$$R_2 \rightarrow -2R_1 + R_2 \Rightarrow \begin{pmatrix} 1 & 2 \\ 0 & 0 \end{pmatrix}$$

$$\Rightarrow x_1 + 2x_2 = 0 \Rightarrow x_1 = -2x_2.$$

Choose $x_2 = 1 \Rightarrow x_1 = -2.$

$\therefore$ An eigenvector of $A$ corresponding to $\lambda_2 = -6$ is,

$$x = \begin{bmatrix} -2 \\ 1 \end{bmatrix}$$

<!-- page 27 | Page 27 -->

<u>Another method</u> to find Characteristic equation.

~~Let~~ characteristic equation of a $2\times 2$ matrix:

Let $A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}$

chara. $\text{eq}^n$ is, $\lambda^2 - s_1 \lambda + s_2 = 0$

where $s_1 = a_{11} + a_{22}$
$s_2 = |A|$.

Characteristic equation of a $3\times 3$ matrix:

Let $A = \begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix}$

chara. $\text{eq}^n$ is, $\lambda^3 - s_1 \lambda^2 + s_2 \lambda - s_3 = 0$.

where $s_1 = \text{sum of main diagonal elements}$
$= a_{11} + a_{22} + a_{33}$

$s_2 = \text{sum of minor of main diagonal elements}$
$= \begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} + \begin{vmatrix} a_{11} & a_{13} \\ a_{31} & a_{33} \end{vmatrix} + \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}$

$s_3 = |A|$.

<!-- page 28 | Page 28 -->

* Find the eigen values of $A = \begin{bmatrix} 8 & -4 \\ 2 & 2 \end{bmatrix}$ (or find spectrum)

Soln: $A = \begin{bmatrix} 8 & -4 \\ 2 & 2 \end{bmatrix} \qquad |A - \lambda I| = 0$

characteristic $\text{eq}^n$ is $\lambda^2 - S_1 \lambda + S_2 = 0$

$$S_1 = 8 + 2 = 10 \quad , S_2 = |A| = 16 + 8 = 24$$

$$\therefore D(\lambda) = \lambda^2 - 10\lambda + 24 = 0$$
$$\Rightarrow (\lambda - 6)(\lambda - 4) = 0$$
$$\Rightarrow \lambda = 6, 4$$

$$\therefore \text{The eigenvalues of } A \text{ are } \lambda = 6, 4.$$

* Find the spectrum of $A = \begin{bmatrix} 1 & 2 \\ 2 & -2 \end{bmatrix}$

Soln: Characteristic $\text{eq}^n$ is $\lambda^2 - S_1 \lambda + S_2 = 0$

$$S_1 = 1 - 2 = -1$$
$$S_2 = |A| = \begin{vmatrix} 1 & 2 \\ 2 & -2 \end{vmatrix} = -2 - 4 = -6$$

$$\therefore \lambda^2 + 1\lambda - 6 = 0$$
$$\Rightarrow (\lambda + 3)(\lambda - 2) = 0$$
$$\Rightarrow \lambda = -3, 2.$$

$$\therefore \text{spectrum of } A = \{-3, 2\}.$$

<!-- page 29 | Page 29 -->

* Find the eigenvalue of $A = \begin{bmatrix} 3 & 10 & 5 \\ -2 & -3 & -4 \\ 3 & 5 & 7 \end{bmatrix}$

soln: Characteristic eqn is, $|A - \lambda I| = 0$ .

$i.e,$ $\lambda^3 - S_1 \lambda^2 + S_2 \lambda - S_3 = 0$ .

$S_1 = 3 - 3 + 7 = 7$

$S_2 = \begin{vmatrix} 3 & 10 \\ -2 & -3 \end{vmatrix} + \begin{vmatrix} -3 & -4 \\ 5 & 7 \end{vmatrix} + \begin{vmatrix} 3 & 5 \\ 3 & 7 \end{vmatrix}$

$= (-9 + 20) + (-21 + 20) + (21 - 15)$

$= 11 - 1 + 6 = \underline{16}$

$S_3 = |A| = 3[-21 + 20] - 10[-14 + 12] + 5[-10 + 9]$

$= (3 \times -1) - (10 \times -2) + (5 \times -1) = -3 + 20 - 5 = 12$

$\therefore \text{chara. } eq^n \text{ is } \lambda^3 - 7\lambda^2 + 16\lambda - 12 = 0$

Put $\lambda = 1 \Rightarrow 1^3 - 7 + 16 - 12 \neq 0$

$\lambda = 2 \Rightarrow 8 - 28 + 32 - 12 = 0$

$\Rightarrow \lambda = 2$ is an eigenvalue of $A$.

$$\begin{array}{r|rrrr}
  & \lambda^3 & \lambda^2 & \lambda & \text{constant} \\
  2 & 1 & -7 & 16 & -12 \\
  & 0 & 2 & -10 & 12 \\ \hline
  & 1 & -5 & 6 & \lfloor 0 \\
  & \lambda^2 & \lambda & \text{constant} &
\end{array}$$

$\lambda^2 - 5\lambda + 6 = 0 \Rightarrow (\lambda - 3)(\lambda - 2) = 0$

$\Rightarrow \lambda = 3, 2$ .

<!-- page 30 | Page 30 -->

$$\therefore 2, 3, 2 \text{ are eigenvalues of } A$$

* Find the eigen vector of $A = \begin{bmatrix} 8 & -4 \\ 2 & 2 \end{bmatrix}$

Soln: chara. $\text{eq}^n$ $\lambda^2 - 10\lambda + 24 = 0$

$$\Rightarrow \lambda = 4, 6.$$

To find the eigen vector, $[A-\lambda I]X = 0$

$$\Rightarrow \left[ \begin{pmatrix} 8 & -4 \\ 2 & 2 \end{pmatrix} - \lambda \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \right] \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

$$\begin{bmatrix} 8-\lambda & -4 \\ 2 & 2-\lambda \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

When $\lambda = 4$,

$$\begin{pmatrix} 4 & -4 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$4x_1 - 4x_2 = 0$$
$$2x_1 - 2x_2 = 0$$

$$\begin{bmatrix} 4 & -4 \\ 2 & -2 \end{bmatrix} \sim \begin{bmatrix} 4 & -4 \\ 0 & 0 \end{bmatrix}$$

$$\Rightarrow 4x_1 - 4x_2 = 0 \Rightarrow 4x_1 = 4x_2$$
$$\Rightarrow x_1 = x_2$$
$$\text{choose } x_1 = 1$$

$$\therefore \text{eigenvector corresponding to } \lambda = 4 \text{ is } x = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$$

<!-- page 31 | Page 31 -->

when $\lambda = 6$,

$$\begin{bmatrix} 2 & -4 \\ 2 & -4 \end{bmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\left. \begin{aligned} 2x_1 - 4x_2 &= 0 \\ 2x_1 - 4x_2 &= 0 \end{aligned} \right\} \Rightarrow 2x_1 = 4x_2$$
$$\Rightarrow x_1 = 2x_2$$

choose $x_2 = 1 \Rightarrow x_1 = 2$

$\therefore$ Eigenvector corresponding to $\lambda = 6$ is $x = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$

* Find the eigen values and eigen vector of $A = \begin{pmatrix} 1 & 1 & 2 \\ -1 & 2 & 1 \\ 0 & 1 & 3 \end{pmatrix}$

Soln: characteristic equation is , $|A - \lambda I| = 0$

$$\Rightarrow \lambda^3 - s_1\lambda^2 + s_2\lambda - s_3 = 0$$

$$s_1 = 1 + 2 + 3 = 6$$

$$s_2 = \begin{vmatrix} 1 & 1 \\ -1 & 2 \end{vmatrix} + \begin{vmatrix} 2 & 1 \\ 1 & 3 \end{vmatrix} + \begin{vmatrix} 1 & 2 \\ 0 & 3 \end{vmatrix} = 3 + 5 + 3 = 11$$

$$s_3 = |A| = 1(5) - 1(-3) + 2(-1) = 5 + 3 - 2 = 6$$

$$\therefore \lambda^3 - 6\lambda^2 + 11\lambda - 6 = 0$$

$$\lambda = 1 \Rightarrow 1 - 6 + 11 - 6 = 0$$
$$\Rightarrow \lambda = 1 \text{ is an eigen value of } A.$$

$$\begin{array}{r|rrrr}
1 & 1 & -6 & 11 & -6 \\
  & 0 & 1 & -5 & 6 \\ \hline
  & 1 & -5 & 6 & 0
\end{array}$$

$$\Rightarrow \lambda^2 - 5\lambda + 6 = 0 \Rightarrow (\lambda - 3)(\lambda - 2) = 0 \Rightarrow \lambda = 3, 2$$

$\therefore$ eigenvalues of $A$ are $1, 2, 3.$

<!-- page 32 | Page 32 -->

To find eigenvector,

$$[A - \lambda I]x = 0$$

$$\Rightarrow \begin{bmatrix} 1-\lambda & 1 & 2 \\ -1 & 2-\lambda & 1 \\ 0 & 1 & 3-\lambda \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

When $\lambda = 1$,

$$\begin{bmatrix} 0 & 1 & 2 \\ -1 & 1 & 1 \\ 0 & 1 & 2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

$$\Rightarrow \begin{aligned} x_2 + 2x_3 &= 0 \\ -x_1 + x_2 + x_3 &= 0 \\ x_2 + 2x_3 &= 0 \end{aligned}$$

$$\Rightarrow \begin{bmatrix} 0 & 1 & 2 \\ -1 & 1 & 1 \\ 0 & 1 & 2 \end{bmatrix} \sim \begin{bmatrix} -1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 1 & 2 \end{bmatrix}$$

$$R_3 \rightarrow -R_2 + R_3 \quad \begin{bmatrix} -1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{bmatrix}$$

$$\Rightarrow \begin{aligned} -x_1 + x_2 + x_3 &= 0 \\ x_2 + 2x_3 &= 0 \end{aligned}$$

By Back substitution, $x_2 = -2x_3$.

$$\therefore x_1 = x_2 + x_3 = -2x_3 + x_3 = -x_3$$

choose $x_3 = 1 \Rightarrow x_2 = -2 \text{ & } x_1 = -1$

<!-- page 33 | Page 33 -->

$\therefore$ The eigenvector corresponding to $\lambda = 1$ is,

$$X = \begin{bmatrix} -1 \\ -2 \\ 1 \end{bmatrix}$$

when $\lambda = 2$,

$$\begin{bmatrix} -1 & 1 & 2 \\ -1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

$$\begin{bmatrix} -1 & 1 & 2 \\ -1 & 0 & 1 \\ 0 & 1 & 1 \end{bmatrix} \Rightarrow R_2 \to -R_1 + R_2 \begin{bmatrix} -1 & 1 & 2 \\ 0 & -1 & -1 \\ 0 & 1 & 1 \end{bmatrix} \sim \begin{bmatrix} -1 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{bmatrix}$$

$$\Rightarrow \begin{aligned} -x_1 + x_2 + 2x_3 &= 0 \\ x_2 + x_3 &= 0 \end{aligned}$$

By back substitution, $x_2 = -x_3$

$$\Rightarrow x_1 = x_2 + 2x_3 = -x_3 + 2x_3 = x_3$$

choose $x_3 = 1 \Rightarrow x_2 = -1$ & $x_1 = 1$

$\therefore$ eigenvector corresponding to $\lambda = 2$ is,

$$X = \begin{bmatrix} 1 \\ -1 \\ 1 \end{bmatrix}$$

when $\lambda = 3$,

$$\begin{bmatrix} -2 & 1 & 2 \\ -1 & -1 & 1 \\ 0 & 1 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

<!-- page 34 | Page 34 -->

Consider $\begin{bmatrix} -2 & 1 & 2 \\ -1 & -1 & 1 \\ 0 & 1 & 0 \end{bmatrix} \sim \begin{bmatrix} -1 & -1 & 1 \\ -2 & 1 & 2 \\ 0 & 1 & 0 \end{bmatrix}$

$R_2 \to -2 R_1 + R_2 \sim \begin{bmatrix} -1 & -1 & 1 \\ 0 & 3 & 0 \\ 0 & 1 & 0 \end{bmatrix}$

$R_3 \to -\frac{1}{3} R_2 + R_3 \sim \begin{bmatrix} -1 & -1 & 1 \\ 0 & 3 & 0 \\ 0 & 0 & 0 \end{bmatrix}$

$\Rightarrow -x_1 - x_2 + x_3 = 0$

$$3x_2 = 0$$

$\Rightarrow x_2 = 0$ & $x_1 = x_3$

Choose $x_3 = 1 \Rightarrow x_1 = 1$

$\therefore$ The Eigenvector corresponding to $\lambda = 3$ is

$$X = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}$$

<!-- page 35 | Page 35 -->

Theorem: Eigenvectors, eigenspace.

If $w$ and $x$ are eigenvectors of a matrix $A$ corresponding to the same eigenvalue $\lambda$, so are ~~x~~ $w + x$ (provided $x \neq -w$)
and $kx$ for any $k \neq 0$.

Hence the eigenvectors corresponding to one and the same eigenvalue $\lambda$ of $A$, together with $0$, form a vector space, called the eigenspace of $A$, corresponding to that $\lambda$.

Q. Find the eigenvalues and eigenvectors of $A = \begin{bmatrix} -2 & 2 & -3 \\ 2 & 1 & -6 \\ 1 & -2 & 0 \end{bmatrix}$

Sol$^{\text{n}}$: For $A$, charac. eqn is $\lambda^3 - s_1 \lambda^2 + s_2 \lambda - s_3 = 0$

$$S_1 = -2 + 1 + 0 = -1$$

$$S_2 = \begin{vmatrix} -2 & 2 \\ 2 & 1 \end{vmatrix} + \begin{vmatrix} 1 & -6 \\ -2 & 0 \end{vmatrix} + \begin{vmatrix} -2 & -3 \\ 1 & 0 \end{vmatrix}$$

$$= \cancel{-6} + -12 + -3 = \cancel{-6} - 12 - 3 = \cancel{+3} -21$$

$$S_3 = |A| = -2(0 - 12) - 2(0 - 6) - 3(-4 + 1)$$

$$= 24 + 12 + 9 = 45$$

$$\therefore \text{charac. eqn is } \lambda^3 + \lambda^2 - 21\lambda - 45 = 0.$$

$$\lambda_1 = 5$$

$$\begin{array}{r|rrrr}
5 & 1 & 1 & -21 & -45 \\
  & 0 & 5 & 30 & 45 \\ \hline
  & 1 & 6 & 9 & \underline{|~0}
\end{array}$$

$$\lambda^2 + 6\lambda + 9 = 0 \implies (\lambda + 3)^2 = 0$$

$$\implies \lambda = -3, -3$$

<!-- page 36 | Page 36 -->

$$\therefore \text{The eigenvalues are } \lambda = 5, -3, -3.$$

To find eigenvectors, we apply Gauss elimination to the system $(A - \lambda I)x = 0$.

$$(A - \lambda I)x = 0 \Rightarrow \begin{bmatrix} -2-\lambda & 2 & -3 \\ 2 & 1-\lambda & -6 \\ -1 & -2 & -\lambda \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

$$\lambda = 5,$$

$$\begin{bmatrix} -7 & 2 & -3 \\ 2 & -4 & -6 \\ -1 & -2 & -5 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

$$\begin{bmatrix} -7 & 2 & -3 \\ 2 & -4 & -6 \\ -1 & -2 & -5 \end{bmatrix}$$

$$\begin{aligned}
&R_2 \to \frac{2}{7} R_1 + R_2 \\
&R_3 \to \frac{-1}{7} R_1 + R_3
\end{aligned} \quad \begin{bmatrix} -7 & 2 & -3 \\ 0 & \frac{-24}{7} & \frac{-48}{7} \\
0 & \frac{-16}{7} & \frac{-32}{7} \end{bmatrix} \sim \begin{bmatrix} -7 & 2 & -3 \\ 0 & 1 & 2 \\ 0 & 1 & 2 \end{bmatrix}$$

$$\begin{aligned}
\Rightarrow &-7x_1 + 2x_2 - 3x_3 = 0 \\
&x_2 + 2x_3 = 0 \\
\Rightarrow &x_2 = -2x_3 \\
\& \quad 7x_1 = 2x_2 - 3x_3 = 2(-2x_3) - 3x_3 = -7x_3 \\
\Rightarrow &x_1 = -x_3
\end{aligned}$$

$$\text{choose } x_3 = 1 \Rightarrow$$

<!-- page 37 | Page 37 -->

$\therefore$ An eigenvector of $A$ corresponding to $\lambda = 5$ is
$$x_1 = \begin{bmatrix} 1 \\ 2 \\ -1 \end{bmatrix}$$

For $\lambda = -3$,
$$\begin{bmatrix} 1 & 2 & -3 \\ 2 & 4 & -6 \\ -1 & -2 & +3 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

$$\begin{bmatrix} 1 & 2 & -3 \\ 2 & 4 & -6 \\ -1 & -2 & 3 \end{bmatrix}$$

$$\begin{aligned}
R_2 & \rightarrow -2R_1 + R_2 \\
R_3 & \rightarrow R_1 + R_3
\end{aligned} \quad \begin{bmatrix} 1 & 2 & -3 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$

$$\begin{aligned}
\Rightarrow \quad x_1 + 2x_2 - 3x_3 &= 0 \\
\Rightarrow \quad x_1 &= 3x_3 - 2x_2
\end{aligned}$$

choosing $x_2 = 1 \text{ & } x_3 = 0$, we get $x_1 = -2$

choosing $x_3 = 1 \text{ & } x_2 = 0$, we get $x_1 = 3$

$\therefore$ we get two linearly independent eigenvectors of $A$ corresponding to $\lambda = -3$

$$x_2 = \begin{bmatrix} -2 \\ 1 \\ 0 \end{bmatrix} \quad \& \quad x_3 = \begin{bmatrix} 3 \\ 0 \\ 1 \end{bmatrix}$$

<!-- page 38 | Page 38 -->

Q). Find the eigen value & eigen vector of $A = \begin{bmatrix} 6 & -6 & 5 \\ 14 & -13 & 10 \\ 7 & -6 & 4 \end{bmatrix}$

ans: chara. eqn is, $\lambda^3 - S_1 \lambda^2 + S_2 \lambda - S_3 = 0$

$S_1 = 6 - 13 + 4 = -3$

$S_2 = \begin{vmatrix} 6 & -6 \\ 14 & -13 \end{vmatrix} + \begin{vmatrix} -13 & 10 \\ -6 & 4 \end{vmatrix} + \begin{vmatrix} 6 & 5 \\ 7 & 4 \end{vmatrix}$

$= 6 + 8 - 11 = 3$

$S_3 = 6(-13 \times 4 + 6 \times 10) + 6(14 \times 4 - 70) + 5(-6 \times 14 + 13 \times 7)$

$= 48 - 84 + 35 = -1$

$\therefore$ Chara eqn is, $\lambda^3 + 3\lambda^2 + 3\lambda + 1 = 0$

$\Rightarrow \lambda_1 = -1$

$$\begin{array}{r|rrr|r}
-1 & 1 & 3 & 3 & 1 \\
& 0 & -1 & -2 & -1 \\ \hline
& 1 & 2 & 1 & 0
\end{array}$$

$\lambda^2 + 2\lambda + 1 = 0 \Rightarrow (\lambda + 1)^2 = 0 \Rightarrow \lambda = -1, -1$

$\therefore$ Eigen values of A are $-1, -1, -1$.

we use Gauss elimination to find eigen vectors,

$(A - \lambda I)X = 0$

$\Rightarrow \begin{bmatrix} 6-\lambda & -6 & 5 \\ 14 & -13-\lambda & 10 \\ 7 & -6 & 4-\lambda \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$

$\lambda = -1 \Rightarrow \begin{bmatrix} 7 & -6 & 5 \\ 14 & -12 & 10 \\ 7 & -6 & 5 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$

<!-- page 39 | Page 39 -->

$$\begin{bmatrix} 7 & -6 & 5 \\ 14 & -12 & 10 \\ 7 & -6 & 5 \end{bmatrix}$$

$$\begin{aligned}
R_2 & \rightarrow -2R_1 + R_2 \\ 
R_3 & \rightarrow -2R_1 + R_3
\end{aligned}\quad \begin{bmatrix} 7 & -6 & 5 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$

$$\Rightarrow 7x_1 - 6x_2 + 5x_3 = 0 \quad \Rightarrow 7x_1 = 6x_2 - 5x_3$$

choose $x_3 = 0 \quad \& \quad x_2 = 7 \quad \Rightarrow x_1 = \frac{6 \times 7}{7} = 6$

choose $x_2 = 0 \quad \& \quad x_3 = 7 \quad \Rightarrow x_1 = -5$

choose $x_1 = 0 \quad \& \quad x_2 = 5 \quad \Rightarrow x_3 = 6$

$$\therefore x_1 = \begin{bmatrix} 6 \\ 7 \\ 0 \end{bmatrix} \quad \&, \quad x_2 = \begin{bmatrix} -5 \\ 0 \\ 7 \end{bmatrix} \quad \& \quad x_3 = \begin{bmatrix} 0 \\ 5 \\ 6 \end{bmatrix}$$

are the eigenvectors of $A$ corresponding to eigenvalue $\lambda = 7$

2). Find eigen values and eigen vectors of $A = \begin{bmatrix} -3 & -7 & -5 \\ 2 & 4 & 3 \\ 1 & 2 & 2 \end{bmatrix}$

ans: Chara. $\text{eq}^n$ is, $\lambda^3 - s_1 \lambda^2 + s_2 \lambda - S_3 = 0$.

$$S_1 = -3 + 4 + 2 = 3$$
$$S_2 = (-12 + 14) + (8 - 6) + (-6 + 5) = 3$$
$$S_3 = -3(2) + 7(1) + -5(0) = 1$$

$$\therefore \text{chara } \text{eq}^n \text{ is,} \quad \lambda^3 - 3\lambda^2 + 3\lambda - 1 = 0$$
$$\Rightarrow (\lambda-1)^3 = 0 \Rightarrow \lambda = 1, 1, 1$$

are the eigenvalues of $A$.

<!-- page 40 | Page 40 -->

To find eigenvector, we solve $[A - \lambda I] X = 0$

$$\lambda = 1 \implies \begin{bmatrix} -3 - 1 & -7 & -5 \\ 2 & 4 - 1 & 3 \\ 1 & 2 & 2 - 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

$$\begin{bmatrix} -4 & -7 & -5 \\ 2 & 3 & 3 \\ 1 & 2 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

$$\begin{bmatrix} -4 & -7 & -5 \\ 2 & 3 & 3 \\ 1 & 2 & 1 \end{bmatrix} \sim \begin{bmatrix} 1 & 2 & 1 \\ 2 & 3 & 3 \\ -4 & -7 & -5 \end{bmatrix}$$

$$\begin{aligned}
&R_2 \to -2R_1 + R_2 \\ 
&R_3 \to 4R_1 + R_3
\end{aligned} \quad \begin{bmatrix} 1 & 2 & 1 \\ 0 & -1 & 1 \\ 0 & 1 & -1 \end{bmatrix}$$

$$R_3 \to R_2 + R_3 \quad \begin{bmatrix} 1 & 2 & 1 \\ 0 & -1 & 1 \\ 0 & 0 & 0 \end{bmatrix}$$

$$\implies \begin{aligned}
x_1 + 2x_2 + x_3 &= 0 \\ 
-x_2 + x_3 &= 0
\end{aligned}$$

$$\implies x_2 = x_3 \text{ & } x_1 = -2x_2 - x_3 = -2x_3 - x_3 = -3x_3$$

$$\text{i.e., } x_1 = -3x_3 \text{ & } x_2 = x_3$$

$$\text{choose } x_2 = x_3 = 1 \implies x_1 = -3.$$

$$\therefore X = \begin{bmatrix} -3 \\ 1 \\ 1 \end{bmatrix} \text{ is the eigenvector of } A \text{ corresponding to } \lambda = 1.$$

<!-- page 41 | Page 41 -->

Q. Find the eigenvalues & eigenvectors of $A = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}$

soln: characteristic eqn is $\lambda^2 - S_1\lambda + S_2 = 0$

$$S_1 = 0 + 0 = 0$$
$$S_2 = |A| = 0 - (-1) = 1$$

$$\Rightarrow \lambda^2 + 1 = 0 \Rightarrow \lambda = \pm i$$

To find eigenvectors, we solve
$$[A - \lambda I] X = 0$$

$$\begin{bmatrix} -\lambda & 1 \\ -1 & -\lambda \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\lambda = i \Rightarrow \begin{bmatrix} -i & 1 \\ -1 & -i \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$R_2 \to iR_1 + R_2 \quad \begin{bmatrix} -i & 1 \\ 0 & 0 \end{bmatrix}$$

$$\Rightarrow -ix_1 + x_2 = 0$$
$$\Rightarrow x_2 = ix_1$$

$$x_1 = 1 \Rightarrow x_2 = i$$

$$\Rightarrow X = \begin{bmatrix} 1 \\ i \end{bmatrix} \text{ is an eigenvector corresponding to } \lambda = i$$

$$\lambda = -i \Rightarrow \begin{bmatrix} i & 1 \\ -1 & i \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$R_2 \to -iR_1 + R_2 \quad \begin{bmatrix} i & 1 \\ 0 & 0 \end{bmatrix}$$

$$\Rightarrow ix_1 + x_2 = 0 \Rightarrow x_2 = -ix_1$$

$$\Rightarrow \text{eigenvector is } X = \begin{bmatrix} 1 \\ -i \end{bmatrix}$$

<!-- page 42 | Page 42 -->

<u>Theorem: eigenvalues of the transpose.</u>

The transpose $A^T$ of a square matrix $A$ has the same eigenvalues as $A$.

<u>Note:</u>
- Sum of eigenvalues of a matrix = sum of diagonal elements of the matrix.

- Product of eigenvalues of a matrix = determinant value of the matrix.

- If $\lambda_1, \dots \lambda_n$ are distinct eigenvalues of an $n \times n$ matrix.
Then corresponding eigenvectors $x_1, x_2, \dots x_n$ form an linearly independent set.

- If $\lambda$ is an eigenvalue of $A$, then $\lambda^n$ is eigenvalue of $A^n$.
- If " " " " , then $k\lambda$ is " " of $kA$.
- " " " " " $\frac{1}{\lambda}$ " " of $A^{-1}$.
- " " " " " $\frac{|A|}{\lambda}$ " " of $\text{adj } A$.

- Eigenvalues of triangular matrix and diagonal matrix are its diagonal elements.

<u>Algebraic multiplicity, Geometric multiplicity, defect:</u>

The order $M_\lambda$ of an eigenvalue $\lambda$ as a root of characteristic polynomial is called the algebraic multiplicity of $\lambda$.

The number $m_\lambda$ of linearly independent eigenvectors corresponding to $\lambda$ is called the geometric multiplicity of $\lambda$. ($= n - \text{rank}(A - \lambda I)$)

$\Delta_\lambda = M_\lambda - m_\lambda$ is called the defect of $\lambda$.

<!-- page 43 | Diagonalization -->

# Diagonalization

**Theorem**
Diagonalization of a Matrix.

If an $n \times n$ matrix $A$ has a basis of eigenvectors, then

$$D = X^{-1} A X$$

is diagonal, with the eigenvalues of $A$ as the entries on the main diagonal. Here $X$ is the matrix with these eigenvectors as column vectors. Also,

$$D^m = X^{-1} A^m X \quad (m = 2, 3, \dots)$$

~~Q. Diagonalize $A = \begin{matrix} 7.3 & 0.2 & -3.7 \\ -11.5 & & \end{matrix}$~~

### Diagonalization Procedure:

(i). Find eigen values

(ii). Find eigen vectors $x_1, x_2, \dots x_n$

(iii). Form the modal matrix $X = [x_1 \; x_2 \dots x_n]$

(iv). Find $X^{-1}$

(v). Find the diagonal matrix ~~$D = X^{-1} A X$~~. $D = X^{-1} A X$.

<!-- page 44 | Page 44 -->

Q. Diagonalize $A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$

Soln: Chara. $eq^n$ is $|A - \lambda I| = 0$

$$\lambda^2 - S_1\lambda + S_2 = 0$$

$$S_1 = 4 + 3 = 7$$

$$S_2 = |A| = 12 - 2 = 10$$

$$\therefore \lambda^2 - 7\lambda + 10 = 0$$

$$(\lambda - 5)(\lambda - 2) = 0$$

$$\Rightarrow \lambda = 5, 2$$

To find eigenvectors, solve $(A - \lambda I)X = 0$

$$\Rightarrow \begin{bmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\lambda = 5 \Rightarrow \begin{bmatrix} -1 & 1 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

Consider,

$$\begin{bmatrix} -1 & 1 \\ 2 & -2 \end{bmatrix}$$

$$R_2 \rightarrow 2R_1 + R_2 \Rightarrow \begin{bmatrix} -1 & 1 \\ 0 & 0 \end{bmatrix}$$

$$\Rightarrow -x_1 + x_2 = 0$$

$$\Rightarrow x_1 = x_2$$

Choose $x_1 = x_2 = 1$

$$\Rightarrow X_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$$

<!-- page 45 | Page 45 -->

$\lambda = 2 \implies \begin{bmatrix} 2 & 1 \\ 2 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$

$\implies 2x_1 + x_2 = 0$

$\implies 2x_1 = -x_2$.

Choose $x_1 = 1 \implies x_2 = -2$.

$\therefore X_2 = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$

$\therefore X = \begin{bmatrix} 1 & 1 \\ 1 & -2 \end{bmatrix}$

$X^{-1} = \frac{\text{adj } X}{|X|}$

$|X| = -2 - 1 = -3$

$\text{adj } X = \begin{bmatrix} -2 & -1 \\ -1 & 1 \end{bmatrix}$

$\implies X^{-1} = \frac{1}{-3} \begin{bmatrix} -2 & -1 \\ -1 & 1 \end{bmatrix}$

$\therefore D = X^{-1} A X = -\frac{1}{3} \begin{bmatrix} -2 & -1 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & -2 \end{bmatrix}$

$= -\frac{1}{3} \begin{bmatrix} -10 & -5 \\ -2 & 2 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & -2 \end{bmatrix} = -\frac{1}{3} \begin{bmatrix} -15 & 0 \\ 0 & -6 \end{bmatrix}$

$= \begin{bmatrix} 5 & 0 \\ 0 & 2 \end{bmatrix}$

<!-- page 46 | Page 46 -->

Q. Diagonalize $A = \begin{bmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ -4 & 4 & 3 \end{bmatrix}$

ans: charac. $\text{eq}^n$ is, $|A - \lambda I| = 0$

$$\Rightarrow \lambda^3 - S_1 \lambda^2 + S_2 \lambda - S_3 = 0$$

$$S_1 = 1 + 2 + 3 = 6$$
$$S_2 = 2 + 2 + 7 = 11$$
$$\Rightarrow S_3 = 1(6 - 4) - 1(0 + 4) + 1(0 + 8)$$
$$= 2 - 4 + 8 = 6$$

$$\lambda^3 - 6\lambda^2 + 11\lambda - 6 = 0$$

$$\lambda = 1 \Rightarrow 1 - 6 + 11 - 6 = 0$$
$$\therefore \lambda = 1 \text{ is an eigenvalue.}$$

$$\begin{array}{r|rrrr}
1 & 1 & -6 & 11 & -6 \\
  & 0 & 1 & -5 & 6 \\ \hline
  & 1 & -5 & 6 & 0
\end{array}$$

$$\lambda^2 - 5\lambda + 6 = 0 \Rightarrow (\lambda - 3)(\lambda - 2) = 0$$
$$\Rightarrow \lambda = 2, 3$$

$$\therefore \text{Eigenvalues of } A \text{ are } 1, 2 \text{ & } 3$$

To find eigenvectors, solve $[A - \lambda I] X = 0$

$$\begin{bmatrix} 1-\lambda & 1 & 1 \\ 0 & 2-\lambda & 1 \\ -4 & 4 & 3-\lambda \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

When $\lambda = 1, \Rightarrow$ $\begin{bmatrix} 0 & 1 & 1 \\ 0 & 1 & 1 \\ -4 & 4 & 2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$ [uncertain: transcription continues on next page]

<!-- page 47 | Page 47 -->

$$\Rightarrow -4x_1 + 4x_2 + 2x_3 = 0$$

$$x_2 + x_3 = 0 	o x_2 = -x_3$$

$$\therefore 4x_1 = +4x_2 + 2x_3 = -4x_3 + 2x_3 = -2x_3.$$

Choose ~~$x_3 = 1 \rightarrow x_2 = -1 \text{ \& } 4x_1 = -2 \Rightarrow$~~

Choose $x_3 = 2 \Rightarrow x_2 = -2$

$$\Rightarrow 4x_1 = -4 \Rightarrow x_1 = -1$$

$$\therefore \text{Eigenvector corresponding to } \lambda = 1 \text{ is,}$$

$$X_1 = \begin{bmatrix} -1 \\ -2 \\ 2 \end{bmatrix}$$

When $\lambda = 2$,

$$\begin{bmatrix} -1 & 1 & 1 \\ 0 & 0 & 1 \\ -4 & 4 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

Consider,

$$\begin{bmatrix} -1 & 1 & 1 \\ 0 & 0 & 1 \\ -4 & 4 & 1 \end{bmatrix}$$

$$R_3 \rightarrow -4 R_1 + R_3 \quad \begin{bmatrix} -1 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & -3 \end{bmatrix} ~~\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}~~$$

$$R_3 \rightarrow 3 R_2 + R_3 \quad \begin{bmatrix} -1 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix}$$

$$\Rightarrow -x_1 + x_2 + x_3 = 0 \text{ \& } x_3 = 0$$

$$\Rightarrow x_1 = x_2$$

Choose $x_1 = 1 \Rightarrow x_2 = 1$

<!-- page 48 | Page 48 -->

$\therefore$ The eigenvector corresponding to $\lambda = 2$ is,

$$X_2 = \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix}$$

When $\lambda = 3$,

$$\begin{bmatrix} -2 & 1 & 1 \\ 0 & -1 & 1 \\ -4 & 4 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

Consider $\begin{bmatrix} -2 & 1 & 1 \\ 0 & -1 & 1 \\ -4 & 4 & 0 \end{bmatrix}$

$R_3 \to -2R_1 + R_3 \quad \begin{bmatrix} -2 & 1 & 1 \\ 0 & -1 & 1 \\ 0 & 2 & -2 \end{bmatrix}$

$R_3 \to 2R_2 + R_3 \quad \begin{bmatrix} -2 & 1 & 1 \\ 0 & -1 & 1 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$

$$\Rightarrow -2x_1 + x_2 + x_3 = 0$$
$$-x_2 + x_3 = 0$$

$$\Rightarrow x_2 = x_3$$

$$\& + 2x_1 = x_2 + x_3 = 2x_2$$

$$\Rightarrow x_1 = x_2 \quad \therefore x_1 = x_2 = x_3.$$

$$\therefore \text{choose } x_1 = x_2 = x_3 = 1$$

$\therefore$ eigenvector corresponding to $\lambda = 3$ is

$$X_3 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$$

<!-- page 49 | Page 49 -->

$$\therefore X = \begin{bmatrix} -1 & 1 & 1 \\ -2 & 1 & 1 \\ 2 & 0 & 1 \end{bmatrix}$$


$$\begin{aligned} X^{-1} &= \frac{\text{adj } X}{|X|} \\ |X| &= -1(1 - 0) - 1(-2 - 2) + 1(0 - 2) \\ &= -1 + 4 - 2 = \underline{1} \end{aligned}$$

$$\therefore X^{-1} = \begin{bmatrix} 1 & -1 & 0 \\ 4 & -3 & -1 \\ -2 & 2 & 1 \end{bmatrix}$$

Or,

$$\left[\begin{array}{ccc|ccc} -1 & 1 & 1 & 1 & 0 & 0 \\ -2 & 1 & 1 & 0 & 1 & 0 \\ +2 & 0 & 1 & 0 & 0 & 1 \end{array}\right]$$

$$R_1 \rightarrow -R_1 \quad \begin{array}{ccc|ccc} 1 & -1 & -1 & -1 & 0 & 0 \\ -2 & 1 & 1 & 0 & 1 & 0 \\ +2 & 0 & 1 & 0 & 0 & 1 \end{array}$$

$$\begin{aligned} R_2 &\rightarrow 2R_1 + R_2 \\ R_3 &\rightarrow -2R_1 + R_3 \end{aligned} \quad \begin{array}{ccc|ccc} 1 & -1 & -1 & -1 & 0 & 0 \\ 0 & -1 & -1 & -2 & 1 & 0 \\ 0 & +2 & 3 & 2 & 0 & 1 \end{array}$$

$$\begin{aligned} R_2 &\rightarrow -R_2 \\ R_3 &\rightarrow -2R_2 + R_3 \end{aligned} \quad \begin{array}{ccc|ccc} 1 & -1 & -1 & -1 & 0 & 0 \\ 0 & 1 & 1 & 2 & -1 & 0 \\ 0 & 0 & 1 & -2 & +2 & 1 \end{array}$$

$$\begin{aligned} R_1 &\rightarrow R_2 + R_1 \\ R_2 &\rightarrow -R_3 + R_2 \end{aligned} \quad \begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & -1 & 0 \\ 0 & 1 & 0 & 4 & -3 & -1 \\ 0 & 0 & 1 & -2 & 2 & 1 \end{array}$$

$$\therefore X^{-1} = \begin{bmatrix} 1 & -1 & 0 \\ 4 & -3 & -1 \\ -2 & 2 & 1 \end{bmatrix}$$

<!-- page 50 | Page 50 -->

$$\begin{aligned}
\therefore D &= X^T A X \\
&= \begin{bmatrix} 1 & -1 & 0 \\ 4 & -3 & -1 \\ -2 & 2 & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ -4 & 4 & 3 \end{bmatrix} \begin{bmatrix} -1 & 1 & 1 \\ -2 & 1 & 1 \\ 2 & 0 & 1 \end{bmatrix} \\
&= \begin{bmatrix} 1 & -1 & 0 \\ 8 & -6 & -2 \\ -6 & 6 & 3 \end{bmatrix} \begin{bmatrix} -1 & 1 & 1 \\ -2 & 1 & 1 \\ 2 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}
\end{aligned}$$

<!-- page 51 | Page 51 -->

