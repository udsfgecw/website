<!-- page 1 | Source page 2 -->

# Module 1: Matrices and Linear Systems
## Module outline

Linear systems of equations : Gauss elimination, Row echelon form, Linear Independence : rank of a matrix, Solutions of linear systems : Existence, Uniqueness (without proof), The matrix Eigen value Problem, Determining Eigen values and Eigen vector, Diagonalization of matrices.

---

### Linear Systems of Equations.

A linear system of 'm' equations in 'n' unknowns $x_1, \dots, x_n$ is a set of equations of the form:

$$
\begin{aligned}
a_{11} x_1 + \dots + a_{1n} x_n &= b_1 \\
a_{21} x_1 + \dots + a_{2n} x_n &= b_2 \\
\dots\dots\dots\dots\dots\dots\dots\dots & \dots \\
a_{m1} x_1 + \dots + a_{mn} x_n &= b_m
\end{aligned}
$$

The system is called linear because each variable $x_j$ appears in the first power only.

* $a_{11}, \dots, a_{mn}$ are given numbers, called the coefficients of the system.

<!-- page 2 | Source page 3 -->

* $b_1, \dots, b_m$ on the right are also given numbers

### Homogeneous Systems and Non-homogeneous System.

* If all the $b_j$ are zero, then the system is called a homogeneous system.
* If at least one $b_j$ is not zero, then the system is called a non homogeneous system.

### Solutions of linear system.

* A solution of the system is a set of numbers $x_1, \dots, x_n$ that satisfies all the $m$ equations.
* If the system is homogeneous, it always has at least the trivial solution $x_1 = 0, \dots, x_n = 0$.
* When the system has at least one solution (one solution or infinitely many solutions) it is said to be **consistent**.
* When the system has no solution then the system is **inconsistent system**.

### Matrix Form of the Linear system.

Matrix form of the Linear system: From the definition of matrix multiplication we see that the $m$ equations of the system may be written as a single vector equation.

$$AX = B$$

<!-- page 3 | Source page 4 -->

where the coefficient matrix $A = [a_{ij}]$ is a $m \times n$ matrix.

$$A = \begin{bmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{bmatrix}, \quad \text{and } x = \begin{bmatrix} x_1 \\ \vdots \\ x_n \end{bmatrix}, \quad \text{and } B = \begin{bmatrix} b_1 \\ \vdots \\ b_m \end{bmatrix}$$

are column vectors.

we assume that the coefficients $a_{ij}$ are not all zero, so that $A$ is not a zero matrix.

Note that $x$ has $n$ components, whereas $B$ has $m$ components.

The matrix $\tilde{A} = \left[\begin{array}{ccc:c} a_{11} & \cdots & a_{1n} & b_1 \\ \vdots & & \vdots & \vdots \\ a_{m1} & \cdots & a_{mn} & b_m \end{array}\right]$ is called the **augmented matrix** of the system (1)

> Note that the augmented matrix $\tilde{A}$ determines the system completely because it contains all the given numbers appearing in the system.

**Geometric Interpretation, Existence and uniqueness of solutions.**

If $m = n = 2$, we have two equations in two unknowns $x_1, x_2$

$$\begin{aligned}
a_{11}x_1 + a_{12}x_2 &= b_1, \\
a_{21}x_1 + a_{22}x_2 &= b_2
\end{aligned}$$

<!-- page 4 | Source page 5 -->

If we interpret $x_1, x_2$ as coordinates in the $x_1 - x_2$ - plane, then each of the two equations represents a straight line, and $(x_1, x_2)$ is a solution if and only if the point $P$ with coordinates $x_1, x_2$ lies on both lines. Hence there are three possible cases.

(a) Precisely one solution if the lines intersect
(b) Infinitely many solutions if the lines coincide.
(c) No solution if the lines are parallel.

$$\begin{aligned}
x_1 + x_2 &= 1 \\
2x_1 - x_2 &= 0
\end{aligned}$$

Case (a)



```jsxgraph
{
  "boundingBox": [
    -0.5,
    1.5,
    1.5,
    -0.5
  ],
  "axis": true,
  "points": [
    {
      "id": "P",
      "x": 0.3333,
      "y": 0.6667,
      "label": "P"
    },
    {
      "id": "x1_int",
      "x": 1,
      "y": 0,
      "label": "1"
    },
    {
      "id": "x1_val",
      "x": 0.3333,
      "y": 0,
      "label": "1/3"
    },
    {
      "id": "x2_val",
      "x": 0,
      "y": 0.6667,
      "label": "2/3"
    }
  ],
  "segments": [
    {
      "from": "x1_val",
      "to": "P",
      "label": ""
    },
    {
      "from": "x2_val",
      "to": "P",
      "label": ""
    }
  ],
  "circles": [],
  "functions": []
}
```



$$\begin{aligned}
x_1 + x_2 &= 1 \\
2x_1 + 2x_2 &= 2
\end{aligned}$$

Case (b)



```jsxgraph
{
  "boundingBox": [
    -0.5,
    1.5,
    1.5,
    -0.5
  ],
  "axis": true,
  "points": [
    {
      "id": "A",
      "x": 1,
      "y": 0,
      "label": "1"
    }
  ],
  "segments": [],
  "circles": [],
  "functions": []
}
```



$$\begin{aligned}
x_1 + x_2 &= 1 \\
x_1 + x_2 &= 0
\end{aligned}$$

Case (c)



```jsxgraph
{
  "boundingBox": [
    -1.5,
    1.5,
    1.5,
    -1.5
  ],
  "axis": true,
  "points": [],
  "segments": [],
  "circles": [],
  "functions": []
}
```

<!-- page 5 | Source page 6 -->

### Gauss Elimination and Back substitution

In the Gauss elimination method, the solution to the linear system of equations is obtained by.

**Step 1 :** First write the given system of equations into the matrix form.

$$AX = B$$

**Step 2 :** By elementary row operations, the augmented matrix $[AB]$ is brought to the upper triangular form.

**Step 3 :** The upper triangular system is solved using back substitution procedure by which we obtain the solution in the order $x_n, x_{n-1}, x_{n-2}, 	ext{...}, x_2, x_1$.

**Example :**

The Gauss elimination method can be motivated as follows. Consider a linear system that is in triangular form (in full, upper triangular form) such as

$$\begin{aligned}
2x_1 + 5x_2 &= 2 \\
13x_2 &= -26
\end{aligned}$$

For instance, let the given system be,

$$\begin{aligned}
2x_1 + 5x_2 &= 2 \\
-4x_1 + 3x_2 &= -30
\end{aligned}$$

$$\begin{bmatrix} 2 & 5 \\ -4 & 3 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 2 \\ -30 \end{bmatrix}$$

Its augmented matrix is

$$\begin{bmatrix} 2 & 5 & 2 \\ -4 & 3 & -30 \end{bmatrix}$$

<!-- page 6 | Source page 7 -->

We leave the first equation as it is. we eliminate $x_1$ from the second equation, to get a triangular system. For this we add twice the first equation to the second, and we do the same operation on the rows of the augmented matrix.

This gives $-4x_1 + 4x_1 + 3x_2 + 10x_2 = -30 + (2 \times 2)$,

that is,

$$2x_1 + 5x_2 = 2$$
$$13x_2 = -26$$

$$\sim \begin{bmatrix} 2 & 5 & 2 \\ 0 & 13 & -26 \end{bmatrix} \quad R_2 \Rightarrow R_2 + 2R_1$$

$$\begin{bmatrix} 2 & 5 \\ 0 & 13 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 2 \\ -26 \end{bmatrix}$$

$$\therefore x_1 = 6 \ , \ x_2 = -2$$

**Example :**

Solve the system

$$2x_1 + x_2 + 2x_3 + x_4 = 6$$
$$6x_1 - 6x_2 + 6x_3 + 12x_4 = 36$$
$$4x_1 + 3x_2 + 3x_3 - 3x_4 = -1$$
$$2x_1 + 2x_2 - x_3 + x_4 = 10$$

**Step 1 :** The given system of equations can be brought to the form.

$$AX = B$$

by writing it as

$$\begin{bmatrix} 2 & 1 & 2 & 1 \\ 6 & -6 & 6 & 12 \\ 4 & 3 & 3 & -3 \\ 2 & 2 & -1 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} 6 \\ 36 \\ -1 \\ 10 \end{bmatrix}$$

<!-- page 7 | Source page 8 -->

Step 2 : Now the augmented matrix $[AB]$ is brought to the upper triangular form as below:

$$\left[\begin{array}{cccc:c}
2 & 1 & 2 & 1 & 6 \\
6 & -6 & 6 & 12 & 36 \\
4 & 3 & 3 & -3 & -1 \\
2 & 2 & -1 & 1 & 10
\end{array}\right]$$

$$\sim \left[\begin{array}{cccc:c}
2 & 1 & 2 & 1 & 6 \\
0 & -9 & 0 & 9 & 18 \\
0 & 1 & -1 & -5 & -13 \\
0 & 1 & -3 & 0 & 4
\end{array}\right]
\begin{array}{l}
R_2 \Rightarrow R_2 - 3R_1 \\
R_3 \Rightarrow R_3 - 2R_1 \\
R_4 \Rightarrow R_4 - R_1
\end{array}$$

$$\sim \left[\begin{array}{cccc:c}
2 & 1 & 2 & 1 & 6 \\
0 & -9 & 0 & 9 & 18 \\
0 & 0 & -1 & -4 & -11 \\
0 & 0 & -3 & 1 & 6
\end{array}\right]
\begin{array}{l}
\text{by} \\
R_3 \Rightarrow R_3 + \frac{1}{9}R_2 \\
R_4 \Rightarrow R_4 + \frac{1}{9}R_2
\end{array}$$

Hence the corresponding matrix equation is,

$$\sim \left[\begin{array}{cccc:c}
2 & 1 & 2 & 1 & 6 \\
0 & -9 & 0 & 9 & 18 \\
0 & 0 & -1 & -4 & -11 \\
0 & 0 & 0 & 13 & 39
\end{array}\right]
\quad R_4 \Rightarrow R_4 - 3R_3$$

$$\begin{bmatrix}
2 & 1 & 2 & 1 \\
0 & -9 & 0 & 9 \\
0 & 0 & -1 & -4 \\
0 & 0 & 0 & 13
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
x_3 \\
x_4
\end{bmatrix}
=
\begin{bmatrix}
6 \\
18 \\
-11 \\
39
\end{bmatrix}$$

or the corresponding linear system of equations is :

$$\begin{aligned}
2x_1 + x_2 + 2x_3 + x_4 &= 6 & \cdots\cdots (1) \\
-9x_2 + 9x_4 &= 18 & \cdots\cdots (2) \\
-x_3 - 4x_4 &= -11 & \cdots\cdots (3) \\
13x_4 &= 39 & \cdots\cdots (4).
\end{aligned}$$

<!-- page 8 | Source page 9 -->

### Step 3 : [Back substitution]

From (4), we obtain $x_4 = 3$.

Substituting this value in (3), we obtain $x_3 = -1$.

Using these values, (2) gives $x_2 = 1$.

Putting all these values in (1), we obtain $x_1 = 2$.

Hence the solution to the given system of equations is
$$x_1 = 2, 	 x_2 = 1, 	 x_3 = -1, 	 x_4 = 3$$

### Example :

Solve the linear system.
$$\begin{aligned}
x_1 - x_2 + x_3 &= 0 \\
-x_1 + x_2 - x_3 &= 0 \\
10x_2 + 25x_3 &= 90 \\
20x_1 + 10x_2 &= 80
\end{aligned}$$

$$A = \begin{bmatrix} 1 & -1 & 1 \\ -1 & 1 & -1 \\ 0 & 10 & 25 \\ 20 & 10 & 0 \end{bmatrix} \qquad X = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} \qquad B = \begin{bmatrix} 0 \\ 0 \\ 90 \\ 80 \end{bmatrix}$$

$$[AB] = \begin{bmatrix} 1 & -1 & 1 & 0 \\ -1 & 1 & -1 & 0 \\ 0 & 10 & 25 & 90 \\ 20 & 10 & 0 & 80 \end{bmatrix}$$

$$\sim \begin{bmatrix} 1 & -1 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 10 & 25 & 90 \\ 0 & 30 & -20 & 80 \end{bmatrix} \begin{aligned} &R_2 \Rightarrow R_2 + R_1 \\ &R_4 \Rightarrow R_4 + 20R_2 \end{aligned}$$

$$\sim \begin{bmatrix} 1 & -1 & 1 & 0 \\ 0 & 30 & -20 & 80 \\ 0 & 10 & 25 & 90 \\ 0 & 0 & 0 & 0 \end{bmatrix} \begin{aligned} &R_2 \Leftrightarrow R_4 \\ &R_3 \Rightarrow 3R_3 - R_2 \end{aligned}$$

<!-- page 9 | Source page 10 -->

$$\sim \begin{bmatrix}
1 & -1 & 1 & 0 \\
0 & 30 & -20 & 80 \\
0 & 0 & 95 & 190 \\
0 & 0 & 0 & 0
\end{bmatrix}$$

$$\begin{bmatrix}
1 & -1 & 1 \\
0 & 30 & -20 \\
0 & 0 & 95 \\
0 & 0 & 0
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
=
\begin{bmatrix}
0 \\
80 \\
190 \\
0
\end{bmatrix}$$

$$x_1 - x_2 + x_3 = 0 \quad \text{--- } (1)$$
$$30x_2 - 20x_3 = 80 \quad \text{--- } (2)$$
$$95x_3 = 190 \quad \text{--- } (3)$$

$$\therefore x_3 = 2$$

substitute in $(2)$
$$\Rightarrow 30x_2 - 40 = 80$$
$$30x_2 = 120$$
$$\therefore x_2 = 4$$

substitute in $(1)$
$$\Rightarrow x_1 - x_2 + x_3 = 0$$
$$x_1 = x_2 - x_3$$
$$x_1 = 4 - 2$$
$$\underline{\therefore x_1 = 2}$$

## Elementary Row Operations.

### Elementary Row Operations for Matrices:

Interchange of two rows

Addition of a constant multiple of one row to another row.

Multiplication of a row by a non zero constant 'c'

<!-- page 10 | Source page 11 -->

### Elementary operations for Equations.

* Interchange of two equations
* Addition of a constant multiple of one equation to another equation
* Multiplication of an equation by a non zero constant '$c$'.

### Row - Equivalent systems :

We now call a linear system $S_1$ row-equivalent to a linear system $S_2$ if $S_1$ can be obtained from $S_2$ by (finitely many!) row operations. This justifies Gauss elimination and establishes the following result.

**Theorem.**

| Row - Equivalent systems |
| :--- |
| Row-equivalent linear systems have the same set of solutions. |

* Systems having the same solution sets are often called $\underline{\text{equivalent systems}}$.

### Gauss Elimination : The Three Possible cases of systems.

1.) Gauss elimination if unique solution exists

2.) Gauss elimination if infinitely many solutions exist.

3.) Gauss elimination if no solution exists.

<!-- page 11 | Source page 12 -->

## Gauss Elimination if infinitely Many solutions exist

solve the following linear system of three equations in four unknowns whose augmented matrix is:

$$
\left[\begin{array}{cccc:c}
3.0 & 2.0 & 2.0 & -5.0 & 8.0 \\
0.6 & 1.5 & 1.5 & -5.4 & 2.7 \\
1.2 & -0.3 & -0.3 & 2.4 & 2.1
\end{array}\right]
$$

Thus,

$$
\begin{aligned}
\textcircled{3.0x_1} + 2.0x_2 + 2.0x_3 - 5.0x_4 &= 8.0 \\
\boxed{0.6x_1} + 1.5x_2 + 1.5x_3 - 5.4x_4 &= 2.7 \\
\boxed{1.2x_1} - 0.3x_2 - 0.3x_3 + 2.4x_4 &= 2.1
\end{aligned}
$$

Solution: As in the previous example, we circle pivots and box terms of equations and corresponding entries to be eliminated. We indicate the operations in terms of equations and operate on both equations and matrices.

Step 1. Elimination of $x_1$ from the second and third equations by adding

$$-0.6 / 3.0 = -0.2 \text{ times the first equation to the second equation,}$$

$$-1.2 / 3.0 = -0.4 \text{ times the first equation to the third equation.}$$

This gives the following, in which the pivot of the next step is circled.

$$
\sim \left[\begin{array}{cccc:c}
3.0 & 2.0 & 2.0 & -5.0 & 8.0 \\
0 & \textcircled{1.1} & 1.1 & -4.4 & 1.1 \\
0 & -1.1 & -1.1 & 4.4 & -1.1
\end{array}\right]
\begin{array}{l}
\\
R_2 \Rightarrow R_2 - 0.2R_1 \\
R_3 \Rightarrow R_3 - 0.4R_1
\end{array}
$$

<!-- page 12 | Source page 13 -->

$$3.0 x_1 + 2.0 x_2 + 2.0 x_3 - 5.0 x_4 = 8.0$$
$$(1.1 x_2) + 1.1 x_3 - 4.4 x_4 = 1.1$$
$$[-1.1 x_2] - 1.1 x_3 + 4.4 x_4 = -1.1$$

Step 2. Elimination of $x_2$ from the third equation by adding $1.1 / 1.1 = 1$ times the second equation to the third equation.

This gives,

$$\sim \begin{bmatrix}
3.0 & 2.0 & 2.0 & -5.0 & \vdots & 8.0 \\
0 & 1.1 & 1.1 & -4.4 & \vdots & 1.1 \\
0 & 0 & 0 & 0 & \vdots & 0
\end{bmatrix} \quad R_3 \Rightarrow R_3 + R_2$$

$$3.0 x_1 + 2.0 x_2 + 2.0 x_3 - 5.0 x_4 = 8.0$$
$$1.1 x_2 + 1.1 x_3 - 4.4 x_4 = 1.1$$
$$0 = 0$$

Back substitution :

from the $2^{\text{nd}}$ equation,
$$x_2 + x_3 - x_4 = 1$$
$$x_2 = 1 - x_3 + 4x_4$$

Substitute the value of $x_2$ in the $1^{\text{st}}$ equation
$$\Rightarrow 3x_1 + 2(1 - x_3 + x_4) + 2x_3 - 5x_4 = 8$$
$$3x_1 + 2 - 2x_3 + 8x_4 + 2x_3 - 5x_4 = 8$$
$$3x_1 + 2 + 3x_4 = 8$$
$$3(x_1 + x_4) + 2 = 8$$
$$3(x_1 + x_4) = 6$$
$$x_1 + x_4 = 2$$
$$\underline{\underline{x_1 = 2 - x_4}}$$

<!-- page 13 | Source page 14 -->

since $x_3$ and $x_4$ remain arbitrary, we have infinitely many solutions. If we choose a value of $x_3$ and a value of $x_4$, then the corresponding values of $x_1$ and $x_2$ are uniquely determined.

### Gauss Elimination if no solution Exists.

Consider

$$\left[\begin{array}{ccc:c}
3 & 2 & 1 & 3 \\
2 & 1 & 1 & 0 \\
6 & 2 & 4 & 6
\end{array}\right] 
\qquad 
\begin{aligned}
\boxed{3x_1} + 2x_2 + x_3 &= 3 \\
\boxed{2x_1} + x_2 + x_3 &= 0 \\
\boxed{6x_1} + 2x_2 + 4x_3 &= 6
\end{aligned}$$

**Step 1.** Elimination of $x_1$ from the second and third equations by adding.

$-\frac{2}{3}$ times the first equation to the second equation,

$-\frac{6}{3} = -2$ times the first equation to the third equation.

This gives

$$\left[\begin{array}{ccc:c}
3 & 2 & 1 & 3 \\
0 & -\frac{1}{3} & \frac{1}{3} & -2 \\
0 & -2 & 2 & 0
\end{array}\right]
\begin{aligned}
&R_2 \Rightarrow R_2 - \frac{2}{3} R_1 \\
&R_3 \Rightarrow R_3 - 2 R_1
\end{aligned}
\qquad
\begin{aligned}
3x_1 + 2x_2 + x_3 &= 3 \\
-\frac{1}{3}x_2 + \frac{1}{3}x_3 &= -2 \\
-2x_2 + 2x_3 &= 0
\end{aligned}$$

**Step 2.** Elimination of $x_2$ from the third equation gives

$$\left[\begin{array}{ccc:c}
3 & 2 & 1 & 3 \\
0 & -\frac{1}{3} & \frac{1}{3} & -2 \\
0 & 0 & 0 & 12
\end{array}\right]
\quad R_3 \Rightarrow R_3 - 6 R_2
\qquad
\begin{aligned}
3x_1 + 2x_2 + x_3 &= 3 \\
-\frac{1}{3}x_2 + \frac{1}{3}x_3 &= -2 \\
0 &= 12
\end{aligned}$$

The false statement $0 = 12$ shows that the system has no solution.

<!-- page 14 | Source page 15 -->

# Row Echelon form.

At the end of the Gauss elimination the form of the coefficient matrix, the augmented matrix, and the system itself are called the row echelon form. In it, rows of zeros, if present, are the last rows, and, in each non zero row, the leftmost non zero entry is farther to the right than in the previous row.

The original system of '$m$' equations in '$n$' unknowns has augmented matrix $[A|B]$. This is to be row reduced to matrix $[R|F]$. The two systems $AX = B$ and $RX = F$ are equivalent:

if either one has a solution, so does the other, and the solutions are identical.

At the end of the Gauss elimination (before the back substitution), the row echelon form of the augmented matrix will be,



![Row echelon form of an augmented matrix showing zero regions](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/shared/gymat101/module-1/row-echelon-form.webp)



Here, $r \le m$, $r_{11} \ne 0$, and all entries in the blue triangle and blue rectangle are zero.

<!-- page 15 | Source page 16 -->

### The Rank.

The rank of a matrix in Row-Echelon form is equal to the number of non-zero rows.

The rank of a matrix is also given by the number of linearly independent rows.

$$\text{If } A \text{ is zero matrix, then } r(A) = 0$$
$$\text{If } A \text{ is not a zero matrix, } r(A) \ge 1$$

Note:

(a) No solution: If $r$ is less than $m$ (meaning that $R$ actually has at least one row of all $0$s) and at least one of the numbers $f_{r+1}, f_{r+2}, \dots, f_m$ is not zero, then the system $RX = F$ is inconsistent: No solution is possible. Therefore the system $AX = B$ is inconsistent as well.

(b) Unique solution. If the system is consistent and $r = n$ there is exactly one solution, which can be found by back substitution.

(c) Infinitely many solutions. To obtain any of these solutions, choose values of $x_{r+1}, \dots, x_n$ arbitrarily. Then solve the $r^{\text{th}}$ equation for $x_r$ (in terms of those arbitrary values), then the $(r-1)^{\text{st}}$ equation for $x_{r-1}$ and so on up the line.

---

### Linear Independence and Dependence of vectors.

Given any set of $m$ vectors $a_{(1)}, \dots, a_{(m)}$ (with the same number of components), a linear combination of these vectors is an expression of the form.

$$\boxed{c_1 a_{(1)} + c_2 a_{(2)} + \dots + c_m a_{(m)}}$$

<!-- page 16 | Source page 17 -->

where $c_1, c_2, \dots, c_m$ are any scalars. Now consider the equation.

$$c_1 a_{(1)} + c_2 a_{(2)} + \dots + c_m a_{(m)} = 0$$

clearly, this vector equation holds if we choose all $c_j$'s zero, because then it becomes $0 = 0$. If this is the only $m$-tuple of scalars for which it holds, then our vectors $a_{(1)}, \dots, a_{(m)}$ are said to form a linearly independent set or, more briefly, we call them linearly independent. Otherwise, if it also holds with scalars not all zero, we call these vectors linearly dependent.

This means that we can express at least one of the vectors as a linear combination of the other vectors. For instance, if (1) holds with, say, $c_1 \neq 0$, we can solve it for $a_{(1)}$:

$$a_{(1)} = k_2 a_{(2)} + \dots + k_m a_{(m)} \quad \text{where } k_j = -c_j / c_1$$

(some $k_j$'s may be zero. Or even all of them, namely, if $a_{(1)} = 0$.)

Remark: Any set of $m$ vectors $a_{(1)}, \dots, a_{(m)}$ is linearly independent if $c_1 a_{(1)} + c_2 a_{(2)} + \dots + c_m a_{(m)} = 0$ implies $c_1 = c_2 = \dots = c_m = 0$.

---

Example: Examine the linear independence of the three vectors.

$$\begin{aligned}
a_{(1)} &= [1 \quad 2 \quad 3] \\
a_{(2)} &= [2 \quad 3 \quad 4] \\
a_{(3)} &= [3 \quad 5 \quad 7]
\end{aligned}$$

<!-- page 17 | Source page 18 -->

Solution:

The given three vectors are linearly dependent because
$$a_{(1)} + a_{(2)} - a_{(3)} = [0 \quad 0 \quad 0] = 0$$

The first two of the three vectors are linearly independent : because
$$c_1 a_{(1)} + c_1 a_{(2)} = [0 \quad 0 \quad 0] = 0$$

implies
$$[c_1 + 2c_2 \quad 2c_1 + 3c_2 \quad 3c_1 + 4c_2] = [0, 0 \quad 0]$$

implies
$$c_1 + 2c_2 = 0, \quad 2c_1 + 3c_2 = 0, \quad \text{and} \quad 3c_1 + 4c_2 = 0$$

The first one of these equations gives $c_1 = -2c_2$ which substituting on the second equation yields $c_2 = 0$ which implies $c_1 = -2c_2 = -2 \times 0 = 0$.

Hence $c_1 = 0$ and $c_2 = 0$.

**Example:** find whether the vectors
$$[1 \quad 2 \quad -1 \quad 3], [2 \quad -1 \quad 3 \quad 2], [-1 \quad 8 \quad -9 \quad 3]$$
are linearly independent.

solution
$$c_1 [1 \quad 2 \quad -1 \quad 3] + c_2 [2 \quad -1 \quad 3 \quad 2] + c_3 [-1 \quad 8 \quad -9 \quad 3] = [0 \quad 0 \quad 0 \quad 0]$$

implies
$$\begin{aligned}
c_1 + 2c_2 - c_3 &= 0 \\
2c_1 - c_2 + 8c_3 &= 0 \\
-c_1 + 3c_2 - 9c_3 &= 0 \\
3c_1 + 2c_2 + 3c_3 &= 0
\end{aligned}$$

$$\begin{bmatrix} 1 & 2 & -1 \\ 2 & -1 & 8 \\ -1 & 3 & -9 \\ 3 & 2 & 3 \end{bmatrix} \sim \begin{bmatrix} 1 & 2 & -1 \\ 0 & -5 & 10 \\ 0 & 5 & -10 \\ 0 & -4 & 6 \end{bmatrix} \quad \begin{matrix} \text{by } R_2 \to R_2 - 2R_1 \\ R_3 \to R_3 + R_1 \\ R_4 \to R_4 - 3R_1 \end{matrix}$$

<!-- page 18 | Source page 19 -->

$$\sim \begin{bmatrix} 1 & 2 & -1 \\ 0 & -5 & 10 \\ 0 & 0 & 0 \\ 0 & -4 & 6 \end{bmatrix} \quad \text{by } R_3 \to R_3 + R_2$$

$$\sim \begin{bmatrix} 1 & 2 & -1 \\ 0 & -5 & 10 \\ 0 & -4 & 6 \\ 0 & 0 & 0 \end{bmatrix} \quad \text{by } R_3 \leftrightarrow R_4$$

$$\sim \begin{bmatrix} 1 & 2 & -1 \\ 0 & -5 & 10 \\ 0 & 0 & -2 \\ 0 & 0 & 0 \end{bmatrix} \quad \text{by } R_3 \to R_3 - \frac{4}{5}R_2$$

Hence we have the system of equations:

$$c_1 + 2c_2 - c_3 = 0$$
$$-5c_2 + 10c_3 = 0$$
$$-2c_3 = 0$$

gives by back substitution

$$c_3 = 0, \quad c_2 = 0, \quad c_1 = 0$$

Hence the given set of vectors is linearly independent.

### Rank of a matrix

> The rank of a matrix $A$ is the maximum number of linearly independent row vectors of $A$. It is denoted by $\text{rank } A$.

The matrix

$$A = \begin{bmatrix} 3 & 0 & 2 & 2 \\ -6 & 42 & 24 & 54 \\ 21 & -21 & 0 & -15 \end{bmatrix} \text{ has rank } 2$$

first two row vectors are linearly independent,

<!-- page 19 | Source page 20 -->

whereas all three row vectors are linearly dependent.

We call a matrix $A_1$ row-equivalent to a matrix $A_2$ if $A_1$ can be obtained from $A_2$ by (finitely many!) elementary row operations.

Now the maximum number of linearly independent row vectors of a matrix does not change if we change the order of rows or multiply a row by a nonzero $c$ or take a linear combination by adding a multiple of a row to another row. This shows that rank is invariant under elementary row operations:

**THEOREM 1**
> **Row-Equivalent Matrices.**  
> Row-equivalent matrices have the same rank.

Once the matrix is in row-echelon form, we count the number of nonzero rows, which is precisely the rank of the matrix.

### Determination of Rank.

$$
A = \begin{bmatrix} 
3 & 0 & 2 & 2 \\ 
-6 & 42 & 24 & 54 \\ 
21 & -21 & 0 & -15 
\end{bmatrix}
$$

$$
\sim \begin{bmatrix} 
3 & 0 & 2 & 2 \\ 
0 & 42 & 28 & 58 \\ 
0 & -21 & -14 & -29 
\end{bmatrix} 
\quad \begin{aligned} 
R_2 &\Rightarrow R_2 + 2R_1 \\ 
R_3 &\Rightarrow R_3 - 7R_1 
\end{aligned}
$$

$$
\begin{bmatrix} 
3 & 0 & 2 & 2 \\ 
0 & 42 & 28 & 58 \\ 
0 & 0 & 0 & 0 
\end{bmatrix} 
\quad R_3 \Rightarrow R_3 + \frac{1}{2} R_2
$$

<!-- page 20 | Source page 21 -->

The last matrix is in row-echelon form and has two non zero rows. Hence $\operatorname{rank} A = 2$, as before.

### THEOREM 2

> **Linear Independence and Dependence of vectors.**
>
> Consider $p$ vectors that each have $n$ components. Then these vectors are linearly independent if the matrix formed, with these vectors as row vectors, has rank $p$. However, these vectors are linearly dependent if that matrix has rank less than $p$.

### THEOREM 3

> **Rank in Terms of Column vectors**
>
> The rank $r$ of a matrix $A$ equals the maximum number of linearly independent column vectors of $A$.
>
> Hence $A$ and its transpose $A^T$ have the same rank.

## VECTOR SPACE

A vector space is a (non empty) set $V$ of vectors with the same number of components such that with any two vectors $a$ and $b$ in $V$ all their linear combinations $\alpha a + \beta b$ ($\alpha, \beta$ any real numbers) are elements of $V$, and these vectors satisfy the following laws:

- **A1 :** $a + b = b + a$
- **A2 :** $(a + b) + c = a + (b + c)$ (written $a + b + c$)
- **A3 :** $a + 0 = a$
- **A4 :** $a + (-a) = 0$.

<!-- page 21 | Source page 22 -->

$M1 : \alpha (a+b) = \alpha a + \alpha b$  
$M2 : (\alpha + \beta) a = \alpha a + \beta a$  
$M3 : \alpha (\beta a) = (\alpha \beta) a$ (written $\alpha \beta a$)  
$M4 : 1a = a$  

The maximum number of linearly independent vectors in $V$ is called the dimension of $V$ and is denoted by $\dim V$.

A linearly independent set in $V$ consisting of a maximum possible number of vectors in $V$ is called a basis for $V$. In other words, any largest possible set of independent vectors in $V$ forms basis for $V$. That means, if we add one or more vector to that set, the set will be linearly independent.

### THEOREM 6

> **Row space and Column space**  
> The row space and the column space of a matrix $A$ have the same dimension, equal to $\text{rank } A$.

**Example:** Find the rank and a basis for the row space and for the column space of the matrix.

$$A = \begin{bmatrix} 1 & -2 \\ 0 & 0 \\ -3 & 6 \end{bmatrix}$$

$$\sim \begin{bmatrix} 1 & -2 \\ 0 & 0 \\ 0 & 0 \end{bmatrix} \quad R_3 \to R_3 + 3R_1$$

The last matrix is in row echelon form and since it has only one non zero row, rank of that matrix and hence that of the given matrix is 1.

Also, a basis for the row space of $A$ is $\begin{bmatrix} 1 & -2 \end{bmatrix}$

To find a basis for the column space, we find the row echelon form of $A^T$.

<!-- page 22 | Source page 23 -->

$$A^T = \begin{bmatrix} 1 & 0 & -3 \\ -2 & 0 & 6 \end{bmatrix}$$

$$\sim \begin{bmatrix} 1 & 0 & -3 \\ 0 & 0 & 0 \end{bmatrix} \text{ by } R_2 \to R_2 + 2R_1$$

Hence a basis for the row space of $A^T$ is $\begin{bmatrix} 1 & 0 & -3 \end{bmatrix}$

Hence a basis for the column space of $A$ is $\begin{bmatrix} 1 \\ 0 \\ -3 \end{bmatrix}$

### Solutions of Linear Systems: Existence, Uniqueness.

A linear system in $n$ unknowns has a unique solution if the coefficient matrix and the augmented matrix have the same rank $n$, and infinitely many solutions if that common rank is less than $n$. The system has no solution if those two matrices have different rank.

### Fundamental theorem for Linear Systems.

(a) Existence. A linear system of $m$ equations

$x_1, \dots, x_n$ :

$$\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n &= b_2 \\
&\;\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n &= b_m
\end{aligned}$$

is consistent, that is, has solutions, if and only if the coefficient matrix $A$ and the augmented matrix $\tilde{A}$ have the same rank. Here,

$$A = \begin{bmatrix} a_{11} & \dots & a_{1n} \\ \vdots & \dots & \vdots \\ a_{m1} & \dots & a_{mn} \end{bmatrix}$$

<!-- page 23 | Source page 24 -->

and $\tilde{A} = \left[\begin{array}{ccc:c} a_{11} & \cdots & a_{1n} & b_1 \\ \vdots & \cdots & \vdots & \vdots \\ a_{m1} & \cdots & a_{mn} & b_m \end{array}\right]$

(b) Uniqueness. The system has precisely one solution if and only if this common rank $r$ of $A$ and $\tilde{A}$ equals $n$.

(c) Infinitely many solutions. If this common rank $r$ is less than $n$, the system has infinitely many solutions. All of these solutions are obtained by determining $r$ suitable unknowns (whose submatrix of coefficients must have rank $r$.) in terms of the remaining $n-r$ unknowns, to which arbitrary values can be assigned.

d.) Gauss elimination : If solution exist, they can all be obtained by the Gauss elimination. This method will automatically reveal whether or not solutions exist.

### Homogeneous Linear system.

A homogeneous linear system.

$$\begin{matrix} a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = 0 \\ a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = 0 \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = 0 \end{matrix}$$

always has the trivial solution $x_1 = 0, \dots, x_n = 0$. Non trivial solutions exist if and only if $\text{rank } A < n$. If $\text{rank } A = r < n$, these solutions, together with $x=0$, form a vector space of dimension $n-r$, called the solution space.

<!-- page 24 | Source page 25 -->

In particular, if $x_{(1)}$ and $x_{(2)}$ are solution vectors, then $x = c_1 x_{(1)} + c_2 x_{(2)}$ with any scalars $c_1$ and $c_2$ is a solution vector. (This does not hold for nonhomogeneous systems. Also, the term solution space is used for homogeneous systems only.)

* **Test for consistency and solve the system of equations.**

  $$x + 2y - z = 3 \quad , \quad 3x - y + 2z = 1$$
  $$2x - 2y + 3z = 2 \quad , \quad x - y + z = -1$$

  $$AX = B$$

  $$A = \begin{bmatrix} 1 & 2 & -1 \\ 3 & -1 & 2 \\ 2 & -2 & 3 \\ 1 & -1 & 1 \end{bmatrix}, \quad B = \begin{bmatrix} 3 \\ 1 \\ 2 \\ -1 \end{bmatrix}, \quad X = \begin{bmatrix} x \\ y \\ z \end{bmatrix}$$

  $$[AB] = \left[\begin{array}{ccc:c} 1 & 2 & -1 & 3 \\ 3 & -1 & 2 & 1 \\ 2 & -2 & 3 & 2 \\ 1 & -1 & 1 & -1 \end{array}\right]$$

  $$\sim \begin{bmatrix} 1 & 2 & -1 & 3 \\ 0 & -7 & 5 & -8 \\ 0 & -6 & 5 & -4 \\ 0 & -3 & 2 & -4 \end{bmatrix} \begin{array}{l} R_2 \Rightarrow R_2 - 3R_1 \\ R_3 \Rightarrow R_3 - 2R_1 \\ R_4 \Rightarrow R_4 - R_1 \end{array}$$

  $$\sim \begin{bmatrix} 1 & 2 & -1 & 3 \\ 0 & -7 & 5 & -8 \\ 0 & 0 & 5 & 20 \\ 0 & 0 & -1 & -4 \end{bmatrix} \begin{array}{l} R_3 \Rightarrow 7R_3 - 6R_2 \\ R_4 \Rightarrow 2R_4 - R_3 \end{array}$$

  $$\sim \begin{bmatrix} 1 & 2 & -1 & 3 \\ 0 & -7 & 5 & -8 \\ 0 & 0 & 5 & 20 \\ 0 & 0 & 0 & 0 \end{bmatrix} \quad R_4 \Rightarrow 5R_4 + R_3$$

<!-- page 25 | Source page 26 -->

$$\begin{aligned}
\therefore \quad x + 2y - z &= 3 & \therefore \quad x &= -1 \\
-7y + 5z &= -8 & y &= 4 \\
\frac{5}{7}z &= \frac{20}{7} & z &= 4 \\
\therefore z &= 4
\end{aligned}$$

## Matrix Eigenvalue Problems.

A matrix eigen value problem considers the vector equation.

$$\boxed{Ax = \lambda x}$$

Here $A$ is a given square matrix, $\lambda$ an unknown scalar, and $x$ an unknown vector. In a matrix eigen value problem, the task is to determine $\lambda$'s and $x$'s that satisfy. Since $x = 0$ is always a solution for any $\lambda$ and thus not interesting, we only admit solutions with $x \neq 0$.

The solutions are given the following names: The $\lambda$'s that satisfy are called eigenvalues of $A$ and the corresponding non zero $x$'s that also satisfy are called eigenvectors of $A$.

Consider multiplying non zero vectors by a given square matrix, such as,

$$\begin{bmatrix} 6 & 3 \\ 4 & 7 \end{bmatrix} \begin{bmatrix} 5 \\ 1 \end{bmatrix} = \begin{bmatrix} 33 \\ 27 \end{bmatrix}, \quad \begin{bmatrix} 6 & 3 \\ 4 & 7 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \end{bmatrix} = \begin{bmatrix} 30 \\ 40 \end{bmatrix}$$

we introduce more terminology. A value of $\lambda$, for which it has a solution $x \neq 0$, is called an eigen value or characteristic value of the matrix $A$. Another term for $\lambda$ is a latent root.
("Eigen" is German and means "proper" or "characteristic".)

<!-- page 26 | Source page 27 -->

The corresponding solutions $x \neq 0$ are called the eigen vectors or characteristic vectors of $A$ corresponding to that eigen value $\lambda$. The set of all the eigenvalues of $A$ is called the spectrum of $A$.

we shall see that the spectrum consists of atleast one eigenvalue and at most of $n$ numerically different eigenvalues. The largest of the absolute values of the eigen values of $A$ is called the spectral radius of $A$.

### How to find Eigen values and Eigenvectors ?

* We illustrate all the steps in terms of the matrix $A = \begin{bmatrix} -5 & 2 \\ 2 & -2 \end{bmatrix}$

$$Ax = \lambda x$$

$$Ax = \begin{bmatrix} -5 & 2 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \lambda \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$$

$$-5x_1 + 2x_2 = \lambda x_1$$
$$2x_1 - 2x_2 = \lambda x_2$$

$$-5x_1 + 2x_2 - \lambda x_1 = 0$$
$$(-5 - \lambda)x_1 + 2x_2 = 0$$
$$(-2 - \lambda)x_2 + 2x_1 = 0$$

$$\begin{bmatrix} -5 - \lambda & 2 \\ 2 & -2 - \lambda \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 0 \qquad [A - \lambda I]x = 0$$

$$|A - \lambda I| = 0$$

$$(-5 - \lambda)(-2 - \lambda) - 4 = 0$$
$$10 + 5\lambda + 2\lambda + \lambda^2 - 4 = 0$$

<!-- page 27 | Source page 28 -->

$$\lambda^2 + 7\lambda + 6 = 0$$
$$(\lambda + 1)(\lambda + 6) = 0$$
$$\therefore \lambda = -1, -6$$

---

when $\lambda = -1$

$$\begin{bmatrix} -5-\lambda & 2 \\ 2 & -2-\lambda \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 0$$

$$\begin{bmatrix} -4 & 2 \\ 2 & -1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 0$$

$$-4x_1 + 2x_2 = 0$$
$$2x_1 - x_2 = 0$$

$$\Rightarrow -2x_1 + x_2 = 0$$

Put, $x_1 = a$
$$x_2 = 2a$$

$$\therefore X = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} a \\ 2a \end{bmatrix}$$

$$\therefore X = a \begin{bmatrix} 1 \\ 2 \end{bmatrix}$$

$$a = 1$$
$$X = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$$

---

when $\lambda = -6$

$$\begin{bmatrix} -5-\lambda & 2 \\ 2 & -2-\lambda \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 0$$

$$\begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 0$$

$$x_1 + 2x_2 = 0$$
$$2x_1 + 4x_2 = 0$$

$$\Rightarrow 3x_1 + 6x_2 = 0$$
$$x_1 + 2x_2 = 0$$

Put $x_1 = a$
$$x_2 = -\frac{a}{2}$$

$$X = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} a \\ -\frac{a}{2} \end{bmatrix}$$

$$X = a \begin{bmatrix} 1 \\ -\frac{1}{2} \end{bmatrix}$$

$$a = 2$$
$$X = \begin{bmatrix} 2 \\ -1 \end{bmatrix}$$

---

This example illustrates the general case as follows.
Equation written in components is

$$a_{11}x_1 + \dots + a_{1n}x_n = \lambda x_1,$$
$$a_{21}x_1 + \dots + a_{2n}x_n = \lambda x_2$$

$$- - - - - - - - - - - - - - - - - - - - -$$

$$a_{n1}x_1 + \dots + a_{nn}x_n = \lambda x_n$$

Transferring the terms on the right side to the left side, we have,

<!-- page 28 | Source page 29 -->

$$\begin{aligned}
(a_{11} - \lambda) x_1 + a_{12} x_2 + \dots + a_{1n} x_n &= 0 \\
a_{21} x_1 + (a_{22} - \lambda) x_2 + \dots + a_{2n} x_n &= 0 \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots& \\
a_{n1} x_1 + a_{n2} x_2 + \dots + (a_{nn} - \lambda) x_n &= 0
\end{aligned}$$

In matrix notation,
$$\boxed{(A - \lambda I) x = 0}$$

By Cramer's theorem, this homogeneous linear system of equations has a non trivial solution if and only if the corresponding determinant of the coefficients is zero:

$$D(\lambda) = \det(A - \lambda I) = \begin{vmatrix}
a_{11} - \lambda & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} - \lambda & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \dots & a_{nn} - \lambda
\end{vmatrix} = 0$$

$A - \lambda I$ is called the characteristic matrix and $D(\lambda)$ the characteristic determinant of $A$.

$|A - \lambda I| = 0$ is called the characteristic equation of $A$. By developing $D(\lambda)$ we obtain a polynomial of $n^{\text{th}}$ degree in $\lambda$. This is called the characteristic polynomial of $A$.

**Q:-** Find the eigen values and eigen vectors of $\begin{bmatrix} 10 & 3 \\ 4 & 6 \end{bmatrix}$

characteristic equation of $A$ is $|A - \lambda I| = 0$

$$A = \begin{bmatrix} 10 & 3 \\ 4 & 6 \end{bmatrix}$$

$$|A - \lambda I| = \begin{vmatrix} 10 - \lambda & 3 \\ 4 & 6 - \lambda \end{vmatrix} = 0$$

<!-- page 29 | Source page 30 -->

$$\boxed{\lambda^2 - (\operatorname{tr} A)\lambda + |A| = 0}$$
characteristic equation.

$$\lambda^2 - 16\lambda + 48 = 0$$
$$\Rightarrow \lambda = 4, 12$$

For $\lambda = 4$

$$[A - 4I]x = 0$$
$$\Rightarrow \begin{bmatrix} 10-4 & 3 \\ 4 & 6-4 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$
$$\begin{bmatrix} 6 & 3 \\ 4 & 2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$
$$6x_1 + 3x_2 = 0$$
$$4x_1 + 2x_2 = 0$$

on solving, $2x_1 + x_2 = 0$
$$\text{Let, } x_1 = k, \ x_2 = -2k$$
$$\text{ie, } \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} k \\ -2k \end{bmatrix} = k \begin{bmatrix} 1 \\ -2 \end{bmatrix}$$

$$\text{For } k = 1, \quad \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$$
$$k = 3 \quad \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 3 \\ -6 \end{bmatrix}$$

for $\lambda = 12$

$$[A - 12I]x = 0$$
$$\begin{bmatrix} 10-12 & 3 \\ 4 & 6-12 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 0$$
$$\begin{bmatrix} -2 & 3 \\ 4 & -6 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 0$$
$$-2x_1 + 3x_2 = 0$$
$$4x_1 - 6x_2 = 0$$

on solving $2x_1 - 3x_2 = 0$
$$\text{put } x_1 = k, \ x_2 = \frac{2}{3}k$$

<!-- page 30 | Source page 31 -->

$$\therefore \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} k \\ \frac{2}{3}k \end{bmatrix} = k \begin{bmatrix} 1 \\ \frac{2}{3} \end{bmatrix}$$

for $k = 1$, $\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 1 \\ \frac{2}{3} \end{bmatrix}$

$k = 3$, $\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 3 \\ 2 \end{bmatrix}$

---

**Q:-** Find eigen values and eigen vectors of the matrix $A = \begin{bmatrix} 8 & -4 \\ 2 & 2 \end{bmatrix}$

$$\lambda^2 - (\text{tr} A)\lambda + |A| = 0$$

$$|A - \lambda I| = 0$$

$$\begin{vmatrix} 8 - \lambda & -4 \\ 2 & 2 - \lambda \end{vmatrix} = 0$$

$$\lambda^2 - 10\lambda + 24 = 0$$

$$\lambda = 4, 6$$

**$\underline{\lambda = 4}$**

$$[A - 4I]x = 0$$

$$\begin{bmatrix} 8 - 4 & -4 \\ 2 & 2 - 4 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\begin{bmatrix} 4 & -4 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$4x - 4y = 0$$
$$\Rightarrow x - y = 0$$
$$2x - 2y = 0$$
$$\Rightarrow x - y = 0$$

Let $x = k$, $y = k$

$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} k \\ k \end{bmatrix} = k \begin{bmatrix} 1 \\ 1 \end{bmatrix}$$

therefore $k = 1$, $\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$

$k = 2$, $\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2 \\ 2 \end{bmatrix}$$

<!-- page 31 | Source page 32 -->

$\underline{\lambda = 6}$

$[A - 6I]X = 0$

$$\begin{bmatrix} 8-6 & -4 \\ 2 & 2-6 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\begin{bmatrix} 2 & -4 \\ 2 & -4 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$2x - 4y = 0$$
$$\Rightarrow x - 2y = 0$$

Let, $x = k$, $y = \frac{k}{2}$

$$\therefore \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} k \\ \frac{k}{2} \end{bmatrix} = k \begin{bmatrix} 1 \\ \frac{1}{2} \end{bmatrix}$$

When,
$$t = 1 : \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 \\ \frac{1}{2} \end{bmatrix}$$

$$t = 2 : \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$$

---

**Q:-** Find eigen values and the corresponding eigen vectors of the matrix.

$$A = \begin{bmatrix} 1 & 0 & -1 \\ 1 & 2 & 1 \\ 2 & 2 & 3 \end{bmatrix}$$

$$|A - \lambda I| = 0$$

$$\begin{vmatrix} 1-\lambda & 0 & -1 \\ 1 & 2-\lambda & 1 \\ 2 & 2 & 3-\lambda \end{vmatrix} = 0$$

$$\lambda^3 - 6\lambda^2 + 11\lambda - 6 = 0$$
$$\lambda = 1, 2, 3.$$

$$\boxed{\begin{gathered} \lambda^3 - (\text{tr } A) \lambda^2 + [M_{11} + M_{22} + M_{33}] \lambda - |A| = 0 \\ \text{characteristic equation.} \end{gathered}}$$

$$ax^3 + bx^2 + cx + d = 0$$

$$\alpha, \beta, \gamma$$
$$\alpha \beta \gamma = -\frac{d}{a}$$
$$\alpha + \beta + \gamma = -\frac{b}{a}.$$

<!-- page 32 | Source page 33 -->

$\lambda = 1$

$$
\begin{bmatrix}
1 - 1 & 0 & -1 \\
1 & 2 - 1 & 1 \\
2 & 2 & 3 - 1
\end{bmatrix}
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
\qquad
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
=
\begin{bmatrix}
t \\
-t \\
0
\end{bmatrix}
=
t
\begin{bmatrix}
1 \\
-1 \\
0
\end{bmatrix}
$$

$$
\begin{bmatrix}
0 & 0 & -1 \\
1 & 1 & 1 \\
2 & 2 & 2
\end{bmatrix}
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
\qquad
t = 1 \rightarrow
\begin{bmatrix}
1 \\
-1 \\
0
\end{bmatrix}
$$

$$
\begin{aligned}
-z &= 0 \ , & z &= 0 \\
x + y + z &= 0 \ , & x &= t \\
\implies x + y &= 0 & y &= -t \\
x &= -y
\end{aligned}
\qquad
t = -2 \rightarrow
\begin{bmatrix}
-2 \\
2 \\
0
\end{bmatrix}
$$

### THEOREM 1

> **Eigenvalues**  
> The eigenvalues of a square matrix $A$ are the roots of the characteristic equation of $A$.  
> Hence a $n \times n$ matrix has at least one eigenvalue and at most $n$ numerically different eigenvalues.

### THEOREM 2

> **Eigenvectors, Eigenspace.**  
> If $w$ and $x$ are eigenvectors of a matrix $A$ corresponding to the same eigenvalue $\lambda$, so are $w + x$ (provided $x \neq -w$) and $kx$ for any $k \neq 0$.  
> Hence the eigenvectors corresponding to one and the same eigenvalue $\lambda$ of $A$, together with $0$, form a vector space called the eigenspace of $A$ corresponding to that $\lambda$.

<!-- page 33 | Source page 34 -->

### Remark

Note that eigenvalues are roots of characteristic equation of a square matrix. Generally the roots need not be distinct. That is, the order of an eigenvalue as a root of the characteristic equation can be $1$ or more. Also, corresponding to an eigenvalue there can be one or more number of linearly independent eigenvectors.

### Algebraic Multiplicity and Geometric Multiplicity

The algebraic multiplicity, $M_\lambda$ of an eigenvalue $\lambda$ of matrix $A$ is the order of $\lambda$ as a root of the characteristic equation.

The geometric multiplicity, $m_\lambda$ of an eigenvalue $\lambda$ is the number of independent eigenvectors corresponding to that eigenvalue. So geometric multiplicity is the dimension of the eigenspace corresponding to the eigen value $\lambda$

By the definition of eigenvalues and eigenvectors, an eigenvalue's geometric multiplicity must be at least one, that is, each eigenvalue has at least one associated eigenvector. Furthermore, an eigenvalue's geometric multiplicity cannot exceed its algebraic multiplicity.

Additionally, recall that an eigenvalue's algebraic multiplicity cannot exceed $n$.

$$1 \le m_\lambda \le M_\lambda \le n$$

The difference $\Delta_\lambda = M_\lambda - m_\lambda$ is called the defect of $\lambda$.

<!-- page 34 | Source page 35 -->

Q Find the eigen values and eigen vectors of the matrix

$$A = \begin{bmatrix} -2 & 2 & -3 \\ 2 & 1 & -6 \\ -1 & -2 & 0 \end{bmatrix}$$

$$[A - \lambda I] x = 0$$

$$\begin{bmatrix} -2 - \lambda & 2 & -3 \\ 2 & 1 - \lambda & -6 \\ -1 & -2 & 0 - \lambda \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

$$|A - \lambda I| = 0$$

$$\lambda^3 + \lambda^2 - 21\lambda - 45 = 0$$

$$\lambda = -3, 5, \quad \text{when } \lambda = 5:$$

$$\begin{bmatrix} -2 - 5 & 2 & -3 \\ 2 & 1 - 5 & -6 \\ -1 & -2 & -5 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

$$A = \begin{bmatrix} -7 & 2 & -3 \\ 2 & -4 & -6 \\ -1 & -2 & -5 \end{bmatrix}$$

$$\sim \begin{bmatrix} -7 & 2 & -3 \\ 0 & -24 & -48 \\ 0 & -16 & -32 \end{bmatrix} \begin{array}{l} R_2 \Rightarrow 7R_2 + 2R_1 \\ R_3 \Rightarrow 7R_3 - R_1 \\ R_3 \Rightarrow 3R_3 - 2R_2 \end{array}$$

$$\sim \begin{bmatrix} -7 & 2 & -3 \\ 0 & -24 & -48 \\ 0 & 0 & 0 \end{bmatrix}$$

$$\therefore \begin{bmatrix} -7 & 2 & -3 \\ 0 & -24 & -48 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

<!-- page 35 | Source page 36 -->

$$\begin{aligned}
\therefore -7x + 2y - 3z &= 0 \\
-24y - 48z &= 0 \\
-2y - 4z &= 0 \\
-y - 2z &= 0 \\
y &= -2z
\end{aligned}$$

$$\begin{aligned}
\text{put } y &= t \\
z &= -\frac{t}{2} \\
\\
\therefore -7x + 2t + \frac{3t}{2} &= 0 \\
-7x &= -\left(2t + \frac{3t}{2}\right) \\
7x &= \frac{7t}{2} \\
\therefore x &= \frac{t}{2}.
\end{aligned}$$

$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} t/2 \\ t \\ -t/2 \end{bmatrix} = t \begin{bmatrix} 1/2 \\ 1 \\ -1/2 \end{bmatrix}$$

In the above example, the algebraic multiplicity of the eigen value $-3$ is $2$ and that of $5$ is $1$. Corresponding to the eigen value $-3$, we have two independent eigen vectors and so geometric multiplicity of $-3$ is $2$ and that of the eigen value $5$ is one as it has only one eigen vector.

### THEOREM 3

> **Eigen values of the Transpose**
>
> The transpose $A^T$ of a square matrix $A$ has the same eigen values as $A$.

### Real Matrices with Complex Eigen values and Eigen vectors.

$$A = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} \qquad \lambda I = \begin{bmatrix} \lambda & 0 \\ 0 & \lambda \end{bmatrix}$$

$$\det (A - \lambda I) = \begin{vmatrix} -\lambda & 1 \\ -1 & -\lambda \end{vmatrix} = \lambda^2 + 1 = 0.$$

$$\lambda^2 = -1, \quad \lambda = \pm\sqrt{-1} = \pm i$$

<!-- page 36 | Source page 37 -->

$\lambda = i$

$(A - \lambda I) x = 0$

$$\begin{bmatrix} -i & 1 \\ -1 & -i \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = 0$$

$$\begin{bmatrix} -i & 1 & 0 \\ -1 & -i & 0 \end{bmatrix} R_2 \rightarrow R_2 + i R_1$$

$$\begin{bmatrix} -i & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$

$$\begin{bmatrix} -i & 1 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$-ix_1 + x_2 = 0$$

$$x_1 = 1$$
$$-i + x_2 = 0$$
$$x_2 = i$$

$$\therefore \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 1 \\ i \end{bmatrix}$$

$$\therefore -it + x_2 = 0$$
$$x_2 = it$$
$$\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = t \begin{bmatrix} 1 \\ i \end{bmatrix}$$

---

$\underline{\lambda = -i}$

$$\begin{bmatrix} i & 1 \\ -1 & i \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\begin{bmatrix} i & 1 & 0 \\ -1 & i & 0 \end{bmatrix} R_2 \rightarrow R_2 - i R_1$$

$$\begin{bmatrix} i & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$

$$\begin{bmatrix} i & 1 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$i x_1 + x_2 = 0$$

$$x_1 = 1 \implies x_2 = -i$$

$$\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 1 \\ -i \end{bmatrix}$$

---

### Eigenbases

Eigenvectors of an $n \times n$ matrix $A$ may (or may not!) form a basis for $R^n$. If we are interested in a transformation $y = Ax$, such an

<!-- page 37 | Source page 38 -->

"eigenbasis" (basis of eigen vectors) - if it exists - is of great advantage because then we can represent any $x$ in $R^n$ uniquely as a linear combination of the eigenvectors $x_1, \ldots, x_n$, say,

$$x = c_1 x_1 + c_2 x_2 + \dots + c_n x_n$$

And, denoting the corresponding (not necessarily distinct) eigenvalues of the matrix $A$ by $\lambda_1, \ldots, \lambda_n$, we have $Ax_j = \lambda_j x_j$, so that we simply obtain

$$\begin{aligned}
y = Ax &= A(c_1 x_1 + \dots + c_n x_n) \\
&= c_1 A x_1 + \dots + c_n A x_n \\
&= c_1 \lambda_1 x_1 + \dots + c_n \lambda_n x_n
\end{aligned}$$

This shows that we have decomposed the complicated action of $A$ on an arbitrary vector $x$ into a sum of multiple actions (multiplication by scalars) on the eigenvectors of $A$.

### THEOREM 1

> **Basis of Eigenvectors.**  
> If an $n \times n$ matrix $A$ has $n$ distinct eigenvalues, then $A$ has a basis of eigenvectors $x_1, \ldots, x_n$ for $R^n$.

### THEOREM 2

> **Symmetric Matrices.**  
> A symmetric matrix has an orthonormal basis of eigenvectors for $R^n$.

<!-- page 38 | Source page 39 -->

# Similarity of Matrices.

Two matrices $A$ and $B$ are said to be similar if there exists an invertible matrix $P$ such that
$$P^{-1}AP = B$$

### DEFINITION

> **Similar Matrices, Similarity Transformation.**  
> An $n \times n$ matrix $\hat{A}$ is called similar to an $n \times n$ matrix $A$ if  
> $$\hat{A} = P^{-1}AP$$  
> for some (non singular!) $n \times n$ matrix $P$. This transformation, which gives $\hat{A}$ from $A$, is called a similarity transformation.

The key property of this transformation is that it preserves the eigen values of $A$.

### THEOREM 3

> **Eigen values and Eigen vectors of similar Matrices**  
> If $\hat{A}$ is similar to $A$, then $\hat{A}$ has the same eigen values as $A$
> Furthermore, if $x$ is an eigenvector of $A$, then $y = P^{-1}x$ is an eigenvector of $\hat{A}$ corresponding to the same eigen value.

Let,
$$A = \begin{bmatrix} 6 & -3 \\ 4 & -1 \end{bmatrix} \quad \text{and} \quad P = \begin{bmatrix} 1 & 3 \\ 1 & 4 \end{bmatrix}$$

Then
$$\hat{A} = \begin{bmatrix} 4 & -3 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 6 & -3 \\ 4 & -1 \end{bmatrix} \begin{bmatrix} 1 & 3 \\ 1 & 4 \end{bmatrix} = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}$$

<!-- page 39 | Source page 40 -->

### EXAMPLE

#### Eigen values and Vectors of similar Matrices.

Let,
$$A = \begin{bmatrix} 6 & -3 \\ 4 & -1 \end{bmatrix} \quad \text{and} \quad P = \begin{bmatrix} 1 & 3 \\ 1 & 4 \end{bmatrix}$$

Then
$$A = \begin{bmatrix} 4 & -3 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 6 & -3 \\ 4 & -1 \end{bmatrix} \begin{bmatrix} 1 & 3 \\ 1 & 4 \end{bmatrix} = \begin{bmatrix} 3 & 0 \\ 0 & 2 \end{bmatrix}$$

$\det P = 1$. We see that $\hat{A}$ has the eigen values
$\lambda_1 = 3$, $\lambda_2 = 2$.

The characteristic equation of $A$ is
$$(6-\lambda)(-1-\lambda) + 12 = \lambda^2 - 5\lambda + 6 = 0$$

It has the roots (the eigenvalues of $A$)
$\lambda_1 = 3, \lambda_2 = 2.$ confirming the first part of Theorem 3.

We confirm the second part. From the first component of $(A - \lambda I)x = 0$ we have $(6-\lambda)x_1 - 3x_2 = 0$.

For $\lambda = 3$ this gives $3x_1 - 3x_2 = 0$, say, $x_1 = [1 \quad 1]^T$

For $\lambda = 2$ it gives $4x_1 - 3x_2 = 0$, say, $x_2 = [3 \quad 4]^T$

In theorem 3 we thus have
$$y_1 = P^{-1} x_1 = \begin{bmatrix} 4 & -3 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix},$$

$$y_2 = P^{-1} x_2 = \begin{bmatrix} 4 & -3 \\ -1 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

Indeed, these are eigenvectors of the diagonal matrix $\hat{A}$.

Perhaps we see that $x_1$ and $x_2$ are the columns of $P$. This suggests the general method of transforming a matrix $A$ to diagonal

<!-- page 40 | Source page 41 -->

form $D$ by using $P = X$, the matrix with eigenvectors as columns.

### Diagonalization

Diagonalization is a process by which the given matrix $A$ is reduced to its simplest form (to a diagonal matrix) such that the eigen values are same and both are similar matrices.

### THEOREM 4

> #### Diagonalization of a Matrix
>
> If an $n \times n$ matrix $A$ has a basis of eigen vectors, then
> $$D = X^{-1}AX$$
> is diagonal, with the eigenvalues of $A$ as the entries on the main diagonal. Here $X$ is the matrix with these eigen vectors as column vectors. Also,
> $$D^m = X^{-1}A^mX \qquad (m = 2, 3, \dots)$$

### General Method.

Now we shall describe a method to diagonalize a given diagonalizable matrix. This method is applicable to $n \times n$ matrices having $n$ linearly independent eigen vectors. We explain this method for a $3 \times 3$ matrix, and the method can be extended to square matrix of any order.

Consider three independent eigen vectors

$$X_1 = \begin{bmatrix} x_1 \\ y_1 \\ z_1 \end{bmatrix}, \quad X_2 = \begin{bmatrix} x_2 \\ y_2 \\ z_2 \end{bmatrix}, \quad X_3 = \begin{bmatrix} x_3 \\ y_3 \\ z_3 \end{bmatrix}$$

<!-- page 41 | Source page 42 -->

corresponding to the eigen values $\lambda_1, \lambda_2, \lambda_3$
of a $3 \times 3$ matrix $A = \begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix}$

we have $AX_i = \lambda_i X_i$, $i = 1, 2, 3$

Define $P = [X_1, X_2, X_3]$
$$= \begin{bmatrix} x_1 & x_2 & x_3 \\ y_1 & y_2 & y_3 \\ z_1 & z_2 & z_3 \end{bmatrix}$$

Consider
$$AP = \begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix} \begin{bmatrix} x_1 & x_2 & x_3 \\ y_1 & y_2 & y_3 \\ z_1 & z_2 & z_3 \end{bmatrix}$$

$$= \begin{bmatrix} a_{11}x_1 + a_{12}y_1 + a_{13}z_1 & a_{11}x_2 + a_{12}y_2 + a_{13}z_2 & a_{11}x_3 + a_{12}y_3 + a_{13}z_3 \\ a_{21}x_1 + a_{22}y_1 + a_{23}z_1 & a_{21}x_2 + a_{22}y_2 + a_{23}z_2 & a_{21}x_3 + a_{22}y_3 + a_{23}z_3 \\ a_{31}x_1 + a_{32}y_1 + a_{33}z_1 & a_{31}x_2 + a_{32}y_2 + a_{33}z_2 & a_{31}x_3 + a_{32}y_3 + a_{33}z_3 \end{bmatrix}$$

$$= \begin{bmatrix} AX_1 & AX_2 & AX_3 \end{bmatrix}$$

$$= [\lambda_1 X_1, \lambda_2 X_2, \lambda_3 X_3]$$

$$= \begin{bmatrix} \lambda_1 x_1 & \lambda_2 x_2 & \lambda_3 x_3 \\ \lambda_1 y_1 & \lambda_2 y_2 & \lambda_3 y_3 \\ \lambda_1 z_1 & \lambda_2 z_2 & \lambda_3 z_3 \end{bmatrix}$$

$$= \begin{bmatrix} x_1 & x_2 & x_3 \\ y_1 & y_2 & y_3 \\ z_1 & z_2 & z_3 \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 & 0 \\ 0 & \lambda_2 & 0 \\ 0 & 0 & \lambda_3 \end{bmatrix}$$

$$= PD$$

where, $D = \begin{bmatrix} \lambda_1 & 0 & 0 \\ 0 & \lambda_2 & 0 \\ 0 & 0 & \lambda_3 \end{bmatrix}$

so that $P^{-1}AP = D$

so $A$ is diagonalizable.

<!-- page 42 | Source page 43 -->

Diagonalize $A = \begin{bmatrix} 1 & 2 \\ 2 & 1 \end{bmatrix}$

$[A - \lambda I] x = 0$

$$\begin{bmatrix} 1-\lambda & 2 \\ 2 & 1-\lambda \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\begin{vmatrix} 1-\lambda & 2 \\ 2 & 1-\lambda \end{vmatrix} = 0$$

$$\lambda^2 - 2\lambda - 3 = 0$$
$$\lambda = 3, -1$$

---

### $\lambda = 3$

$$\begin{bmatrix} -2 & 2 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\begin{bmatrix} 1 & -1 & 0 \\ 2 & -2 & 0 \end{bmatrix} \quad R_1 \to -\frac{1}{2}R_1$$

$$\begin{bmatrix} 1 & -1 & 0 \\ 0 & 0 & 0 \end{bmatrix} \quad R_2 \to R_2 - 2R_1$$

$$\begin{bmatrix} 1 & -1 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\begin{aligned}
x - y &= 0 \\
x &= y \\
x = t, &\quad y = t \\
X_2 = \begin{bmatrix} x \\ y \end{bmatrix} &= \begin{bmatrix} t \\ t \end{bmatrix} = t \begin{bmatrix} 1 \\ 1 \end{bmatrix}
\end{aligned}$$

---

### $\lambda = -1$

$$\begin{bmatrix} 2 & 2 \\ 2 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\qquad R_1 \to \frac{1}{2}R_1$$

$$\begin{bmatrix} 1 & 1 \\ 2 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\qquad R_2 \to R_2 - 2R_1$$

$$\begin{bmatrix} 1 & 1 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\begin{aligned}
x + y &= 0 \\
x &= -y \\
x &= t \\
y &= -t \\
X_1 = \begin{bmatrix} x \\ y \end{bmatrix} &= \begin{bmatrix} t \\ -t \end{bmatrix} = t \begin{bmatrix} 1 \\ -1 \end{bmatrix}
\end{aligned}$$

---

$$X_1 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}, \quad X_2 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \quad D = \begin{bmatrix} -1 & 0 \\ 0 & 3 \end{bmatrix}$$

<!-- page 43 | Source page 44 -->

$$X = \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} \qquad X^{-1}AX = D$$
$$X^{-1} = \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix} \qquad = \begin{bmatrix} -1 & 0 \\ 0 & 3 \end{bmatrix}$$
$$A = \begin{bmatrix} 7 & -1 \\ 4 & 3 \end{bmatrix}$$

---

## REVISION

4.) If $A$ is diagonalizable and $X^{-1}AX = D$

Then for any integer $k$,

$$(X^{-1}AX)^k = D^k$$

$$(X^{-1}AX)(X^{-1}AX) = D^k$$

$$X^{-1}AI AI \dots IAX = D^k$$

$$X^{-1}A^k X = D^k$$

$$\implies A^k = X D^k X^{-1} \quad \text{for any integer } k.$$

**Remark :** If $A$ is a square matrix with distinct eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$ with the corresponding eigenvectors $X_1, X_2, \dots, X_n$ then These eigen vectors are linearly independent and hence $A$ is diagonalizable with

$$X = \begin{bmatrix} X_1 & X_2 & \dots & X_n \end{bmatrix}$$

**Theorem :** An $n \times n$ square matrix $A$ is diagonalizable if and only if the geometric multiplicity of each eigenvalue equals its algebraic multiplicity.

1.) Diagonalize the matrix $A = \begin{bmatrix} -5 & 2 \\ 2 & -2 \end{bmatrix}$

<!-- page 44 | Source page 45 -->

$$|A - \lambda I| = 0 \qquad \lambda^2 - (\text{tr} A)\lambda + |A| = 0$$

$$\begin{vmatrix} -5 - \lambda & 2 \\ 2 & -2 - \lambda \end{vmatrix} = 0$$

$$\lambda^2 - 7\lambda + 6 = 0$$

$$\lambda = -1, -6$$

---

### for $\lambda = -1$

$$[A - \lambda I] x = 0$$

$$\begin{bmatrix} -5+1 & 2 \\ 2 & -2+1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$\begin{bmatrix} -4 & 2 & 0 \\ 2 & -1 & 0 \end{bmatrix} \quad R_2 \to R_2 + \frac{1}{2}R_1$$

$$\begin{bmatrix} -4 & 2 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$

$$\begin{bmatrix} -4 & 2 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$-4x_1 + 2x_2 = 0$$

$$-2x_1 + x_2 = 0$$

$$x_1 = k$$
$$x_2 = 2k$$

$$\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} k \\ 2k \end{bmatrix} = k \begin{bmatrix} 1 \\ 2 \end{bmatrix}$$

$$k = 1$$

$$\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$$

---

### $\lambda = -6$

$$\begin{bmatrix} 1 & 2 & 0 \\ 2 & 4 & 0 \end{bmatrix} \quad R_2 \to R_2 - 2R_1$$

$$\begin{bmatrix} 1 & 2 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$

$$\begin{bmatrix} 1 & 2 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$x_1 + 2x_2 = 0$$

$$x_1 = -2x_2$$

$$x_2 = k, \quad x_1 = -2k$$

$$\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} -2k \\ k \end{bmatrix}$$

$$= k \begin{bmatrix} -2 \\ 1 \end{bmatrix}$$

---

Algebraic multiplicity of each eigen value is equal to geometric multiplicity of corresponding eigen vectors.

$$\therefore \text{A is diagonalizable.}$$

<!-- page 45 | Source page 46 -->

$$\therefore X = \begin{bmatrix} 1 & -2 \\ 2 & 1 \end{bmatrix}$$

$$\therefore X^{-1}AX = D = \begin{bmatrix} -1 & 0 \\ 0 & -6 \end{bmatrix}$$

OR

$$X = \begin{bmatrix} 1 & -2 \\ 2 & 1 \end{bmatrix}$$

$$X^{-1} = -\frac{1}{5} \begin{bmatrix} 1 & 2 \\ -2 & 1 \end{bmatrix}$$

$$X^{-1}AX = D = \begin{bmatrix} -1 & 0 \\ 0 & -6 \end{bmatrix}$$

$$\begin{bmatrix} -\frac{1}{5} & \frac{2}{5} \\[6pt] -\frac{2}{5} & -\frac{1}{5} \end{bmatrix} \begin{bmatrix} -5 & 2 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} 1 & -2 \\ 2 & 1 \end{bmatrix} = \begin{bmatrix} -1 & 0 \\ 0 & -6 \end{bmatrix}$$

2.) find the matrix $P$ such that $P^{-1}AP = D$, where $D$ is a diagonal matrix if $A = \begin{bmatrix} 0 & 0 & -2 \\ 1 & 2 & +1 \\ 1 & 0 & 3 \end{bmatrix}$

Hence find $A^4$

$$A^4 = P D^4 P^{-1}$$

$$A = \begin{bmatrix} 0 & 0 & -2 \\ 1 & 2 & 1 \\ 1 & 0 & 3 \end{bmatrix}$$

$$ax^3 + bx^2 + cx + d = 0$$
$$\alpha \beta \gamma = -\frac{d}{a}, \quad \alpha + \beta + \gamma = -\frac{b}{a}$$

$$\lambda^3 - (\text{tr} A)\lambda^2 + [M_{11} + M_{22} + M_{33}]\lambda - |A| = 0$$

$$\lambda^3 - 5\lambda^2 + 8\lambda - 4 = 0$$

$$\lambda = 1, 2, 2$$

$\underline{\lambda = 1}$

$$\begin{bmatrix} -1 & 0 & -2 & 0 \\ 1 & 1 & 1 & 0 \\ 1 & 0 & 2 & 0 \end{bmatrix}$$

$$\begin{bmatrix} -1 & 0 & -2 & 0 \\ 0 & 1 & -1 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix} \quad \begin{aligned} R_2 &\rightarrow R_2 + R_1 \\ R_3 &\rightarrow R_3 + R_1 \end{aligned}$$

$$\begin{bmatrix} -1 & 0 & -2 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

$$-x_1 - 2x_3 = 0$$
$$x_2 - x_3 = 0$$
$$x_2 = x_3$$
$$x_3 = k$$
$$x_2 = k$$
$$x_1 = -2k$$

$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = k \begin{bmatrix} -2 \\ 1 \\ 1 \end{bmatrix}$$

<!-- page 46 | Source page 47 -->

$\underline{\lambda = 2}$

$$
\begin{bmatrix}
-2 & 0 & -2 & 0 \\
1 & 0 & 1 & 0 \\
1 & 0 & 1 & 0
\end{bmatrix}
$$

$$
\begin{bmatrix}
1 & 0 & 1 & 0 \\
-2 & 0 & -2 & 0 \\
1 & 0 & 1 & 0
\end{bmatrix} \quad R_2 \leftrightarrow R_1
$$

$$
\begin{bmatrix}
1 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix} \quad \begin{aligned} R_2 &\to R_2 + 2R_1 \\ R_3 &\to R_3 - R_1 \end{aligned}
$$

$$
\begin{bmatrix}
1 & 0 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$

$$
\begin{aligned}
x_1 + x_3 &= 0 \\
x_2 &= s \\
x_3 &= t \\
x_1 &= -t
\end{aligned}
$$

$$
\therefore \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} -t \\ s \\ t \end{bmatrix} = s \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} + t \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}
$$

Hence $A$ is diagonalizable.

$$
P^{-1} A P = D = \begin{bmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 2
\end{bmatrix}
$$

where,
$$
P = \begin{bmatrix}
-2 & 0 & -1 \\
1 & 1 & 0 \\
1 & 0 & 1
\end{bmatrix}
$$

$$
\begin{aligned}
P^{-1} A P &= D \\
A^4 &= P D^4 P^{-1} \\
&= \begin{bmatrix}
-2 & 0 & -1 \\
1 & 1 & 0 \\
1 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 \\
0 & 16 & 0 \\
0 & 0 & 16
\end{bmatrix}
\begin{bmatrix}
-1 & 0 & -1 \\
1 & 1 & 1 \\
1 & 0 & 2
\end{bmatrix} \\
A^4 &= \begin{bmatrix}
-4 & 0 & -30 \\
15 & 16 & 15 \\
15 & 0 & 31
\end{bmatrix}
\end{aligned}
$$

3) Diagonalize the matrix $\begin{bmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$ if possible

4) Diagonalize the following

(1) $\begin{bmatrix} 1 & 2 \\ 0 & 3 \end{bmatrix}$

(2) $\begin{bmatrix} 1 & 1 & 1 \\ 1 & 5 & 1 \\ 3 & 1 & 1 \end{bmatrix}$

<!-- page 47 | Source page 48 -->

5.) Solve the linear system
$$x - y + z = -9$$
$$-2x - 2y + 2z = -18$$
$$-3x + 3y - 3z = 27$$

$$\begin{bmatrix}
1 & -1 & 1 & -9 \\
-2 & -2 & 2 & -18 \\
-3 & 3 & -3 & 27
\end{bmatrix}$$

$$\begin{bmatrix}
1 & -1 & 1 & -9 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix} \begin{matrix} R_2 \to R_2 - 2R_1 \\ R_3 \to R_3 + 3R_1 \end{matrix}$$

$$x + y + z = -9$$
$$y = a$$
$$z = b$$
$$x = -9 + y - z$$
$$x = -9 + a - b$$

$$a = 1, b = 2$$
$$\begin{aligned}
x &= -9 + 1 - 2 = -10 & \vert & & \therefore x &= -10 \\
y &= 1 & \vert & & y &= 1 \\
z &= 2 & \vert & & z &= 2.
\end{aligned}$$

6.) check whether the vectors $\{[1\quad 2\quad 0], [2\quad 5\quad 1], [-5\quad 1\quad 2]\}$ is linearly independent or not.

$$c_1 [1\quad 2\quad 0] + c_2 [2\quad 5\quad 1] + c_3 [-5\quad 1\quad 2] = 0$$

$$\begin{matrix}
c_1 + 2c_2 - 5c_3 = 0 \\
2c_1 + 5c_2 + c_3 = 0 \\
0 + c_2 + 2c_3 = 0
\end{matrix} \implies \begin{bmatrix}
1 & 2 & -5 & 0 \\
2 & 5 & 1 & 0 \\
0 & 1 & 2 & 0
\end{bmatrix}$$

$$c_1 = c_2 = c_3 = 0$$

7.) check whether the set of vectors $\{[1\quad 3\quad 2], [2\quad -1\quad 4], [3\quad 2\quad 6]\}$ is linearly independent or not ? Dependent.
