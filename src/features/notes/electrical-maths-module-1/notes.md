<!-- page 1 | Start here -->

## Linear Systems, Matrix Rank, and the Matrix Eigenvalue Problem

This course guides learners from setting up and solving linear systems of equations using Gaussian elimination to analyzing vector independence and matrix rank. Learners will also determine matrix eigenvalues and eigenvectors, characterize algebraic and geometric multiplicities, and diagonalize square matrices via modal transformations.

**Before you start:** High school algebra and polynomial factorization; Basic 2D and 3D coordinate geometry; Familiarity with matrices, basic matrix multiplication, and determinants.

### Your path through this module

1. **Systems of Linear Equations and Matrix Representations**: A set of linear relationships can be packaged into a single matrix equation Ax = b whose solvability corresponds to the geometric intersection of hyperplanes.
2. **Elementary Row Operations and Gaussian Elimination**: Elementary row operations transform a system into an equivalent upper triangular form that is readily solved from the bottom up.
3. **Row Echelon Form, Matrix Rank, and Linear Independence**: The number of non-zero rows in echelon form defines the rank, which directly counts independent relationships and dictates solution behavior.
4. **The Matrix Eigenvalue Problem and Characteristic Equations**: Eigenvalues are roots of the characteristic polynomial det(A - lambda I) = 0, identifying scalar factors by which matrix transformation acts purely as stretching.
5. **Eigenspaces, Multiplicity, and Diagonalization**: When a matrix has a full set of linearly independent eigenvectors, it can be factored into a pure diagonal matrix through a change of basis.
6. **Gaussian Elimination and Physical Network Modeling**: Physical networks governed by linear conservation laws convert directly into augmented matrices that yield branch currents via triangular elimination.
7. **Solving Systems with Infinite Solutions, Inconsistencies, and Free Parameters**: Zero rows either indicate redundant equations giving rise to free parameters or, when paired with nonzero constants, signal total inconsistency.
8. **Determining Matrix Rank and Vector Independence**: Evaluating whether vectors are linearly independent reduces to computing the echelon rank of the matrix formed by those vectors.
9. **Computing Eigenvalues and Eigenvectors of 2x2 and 3x3 Matrices**: Solving (A - lambda I)x = 0 for each root lambda of the characteristic polynomial isolates the invariant directional axes of the matrix.
10. **Repeated Eigenvalues, Defect, and Complex Spectra**: A repeated root may yield a multi-dimensional eigenspace or fewer eigenvectors than its multiplicity, indicating an incomplete or defective set of axes.
11. **Matrix Diagonalization and Modal Transformations**: Multiplying A by its modal matrix X and its inverse transforms the matrix into a pure diagonal array of its eigenvalues.

<!-- page 2 | Systems of Linear Equations and Matrix Representations -->

## Systems of Linear Equations and Matrix Representations

In algebra, you solved pairs of equations by substituting variables by hand. In engineering, problems like balancing forces in a bridge truss or analyzing electrical grids involve hundreds of simultaneous equations, requiring a compact and systematic bookkeeping method: matrices.

A *linear equation* relates variables raised only to the first power, such as $a_1 x_1 + a_2 x_2 = b$. When several linear equations share the same set of unknowns, they form a *system of linear equations*. Instead of writing out variable names repeatedly, we extract their numerical weights into a rectangular grid called the *coefficient matrix*, denoted by $A$. 

We place the unknown variables into a vertical list called a *column vector*, $\mathbf{x}$, and the right-hand constants into another column vector, $\mathbf{b}$. The entire system is then written in the compact matrix form $A\mathbf{x} = \mathbf{b}$. If the constant vector consists purely of zeros ($\mathbf{b} = \mathbf{0}$), the system is *homogeneous*; otherwise, it is *nonhomogeneous*.

To prepare a system for systematic calculation, we append the constant column to the coefficient matrix, separated by a vertical divider. This combined table is the *augmented matrix*, written as $[A \mid \mathbf{b}]$. It contains every essential number from the equations without the clutter of variable symbols.

Geometrically, each equation in a two-variable system represents a straight line on a plane. The solution to the system is the point where these lines meet. Three geometric cases can occur:
- *Intersecting lines*: The lines cross at a single point, yielding exactly one unique solution.
- *Parallel lines*: The lines have the same slope but different intercepts; they never meet, yielding no solution.
- *Coincident lines*: The equations describe the exact same line; they touch everywhere, yielding infinitely many solutions.

### Worked example

Consider the system:
$$2x_1 + x_2 = 5$$
$$x_1 - x_2 = 1$$

1. **Identify the coefficients and constants.** The coefficients multiplying $x_1$ are $2$ and $1$; the coefficients multiplying $x_2$ are $1$ and $-1$. The constants on the right are $5$ and $1$.
2. **Form the matrix equation $A\mathbf{x} = \mathbf{b}$.** Group the coefficients into $A$, unknowns into $\mathbf{x}$, and constants into $\mathbf{b}$:
$$\begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 5 \\ 1 \end{bmatrix}$$
3. **Assemble the augmented matrix $[A \mid \mathbf{b}]$.** Place $A$ and $\mathbf{b}$ together:
$$\left[\begin{array}{cc|c} 2 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right]$$
4. **Classify geometrically.** Rewriting both equations in slope-intercept form gives $x_2 = -2x_1 + 5$ and $x_2 = x_1 - 1$. The slopes ($-2$ and $1$) are distinct, meaning the lines intersect at exactly one point, $(2, 1)$, giving a unique solution.

### Remember

- The matrix equation $A\mathbf{x} = \mathbf{b}$ condenses a system of equations by separating coefficients, variables, and constants.
- The augmented matrix $[A \mid \mathbf{b}]$ records all coefficients and targets in one array ready for calculation.
- In two dimensions, linear systems correspond to lines that are intersecting (unique solution), parallel (no solution), or coincident (infinite solutions).

<!-- page 3 | Elementary Row Operations and Gaussian Elimination -->

## Elementary Row Operations and Gaussian Elimination

In the previous lesson, we packed systems of linear equations into compact augmented matrices. Now, we need a systematic way to untangle those equations and find the unknowns without changing the true solution.

Imagine a mobile hanging from a ceiling. If every hanging piece is tangled with every other piece, finding the balance points is messy. But if you can isolate the lowest piece so it hangs freely, you can balance it first and easily work your way upward. Gaussian elimination untangles a system in precisely this way: it clears variables out of equations row by row until the system is straightforward to resolve.

Two matrices are *row equivalent* if one can be turned into the other using steps that preserve the original solution set. These allowable moves are called *elementary row operations*, and there are only three:
1. **Row interchange** ($R_i \leftrightarrow R_j$): Swap two rows, which corresponds to reordering the equations.
2. **Row scaling** ($c R_i$, with $c \neq 0$): Multiply an entire row by a non-zero number, which scales both sides of an equality.
3. **Row replacement** ($R_i \to R_i + c R_j$): Add a multiple of one row to another, which eliminates a variable.

By systematically using row replacement from left to right, we place zeros beneath the first non-zero entry of each row. This organizes the matrix into an *upper triangular form*, where all entries below the main diagonal are zero. From this form, the bottom equation contains only the final variable. We find its value immediately and use *back substitution*—substituting known values upward into earlier equations—to find all remaining unknowns.

### Worked example

Solve the system using Gaussian elimination:
$$
\begin{aligned}
x + 2y &= 5 \\
3x + 4y &= 7
\end{aligned}
$$

1. **Write the augmented matrix:**
   $$\left[\begin{array}{cc|c} 1 & 2 & 5 \\ 3 & 4 & 7 \end{array}\right]$$
   This organizes all coefficients and constants into rows and columns.

2. **Eliminate the $x$-term from the second row:**
   Apply $R_2 \to R_2 - 3R_1$. We choose $-3$ because $3 - 3(1) = 0$, giving a zero beneath the leading entry:
   $$\left[\begin{array}{cc|c} 1 & 2 & 5 \\ 0 & -2 & -8 \end{array}\right]$$
   The system is now in upper triangular form.

3. **Solve the bottom equation:**
   Row 2 reads $-2y = -8$. Dividing by $-2$ yields $y = 4$.

4. **Back-substitute to find the remaining variable:**
   Substitute $y = 4$ into Row 1 ($x + 2y = 5$):
   $$x + 2(4) = 5 \implies x = -3$$
   The unique solution is $x = -3$ and $y = 4$.

### Remember
- The three elementary row operations (swap, scale, replace) produce row-equivalent systems with identical solutions.
- Gaussian elimination drives lower-left entries to zero to create an upper triangular system.
- Back substitution solves the triangular system sequentially from the bottom row up to the top.

<!-- page 4 | Row Echelon Form, Matrix Rank, and Linear Independence -->

## Row Echelon Form, Matrix Rank, and Linear Independence

In the previous lesson, you used Gaussian elimination to simplify systems into an upper triangular shape. Now, we formalize this staircase layout to identify redundant equations and determine exactly when a system has solutions.

A matrix is in **row echelon form** when its non-zero rows form a descending staircase: the first non-zero number in each row—called the **pivot** or leading entry—sits strictly to the right of the pivot in the row above it, and any all-zero rows rest at the bottom.

Imagine combining recipes: if you already have flour and sugar, a pre-mixed bag of flour and sugar gives you no new ingredients. A set of vectors is **linearly independent** if no vector in the set can be written as a **linear combination** (a sum of scalar multiples) of the others. If one vector can be built from the rest, the set is **linearly dependent** and carries redundant information.

The **rank** of a matrix $A$, written $\text{rank}(A)$, is the number of pivots in its row echelon form. It counts the number of truly independent rows—or columns—in the matrix. Remarkably, a matrix always has the same number of independent columns as independent rows, so $\text{rank}(A) = \text{rank}(A^T)$.

To know if $Ax = b$ has a solution, compare the rank of the coefficient matrix $A$ to the rank of the augmented matrix $[A \mid b]$. A system is **consistent** (solvable) if and only if $\text{rank}(A) = \text{rank}([A \mid b])$. If adding the target vector $b$ creates a new pivot in the final column, it describes an impossible equation like $0 = 1$. If consistent and the rank $r$ equals the number of variables $n$, the solution is unique; if $r < n$, there are $n - r$ free parameters (degrees of freedom), yielding infinitely many solutions.

### Worked example

Determine the consistency and number of solutions for the system represented by $[A \mid b] = \begin{bmatrix} 1 & 1 & 2 & 3 \\ 2 & 2 & 4 & 6 \\ 0 & 1 & 1 & 2 \end{bmatrix}$.

1. **Row-reduce to find pivots:** Subtract twice the first row from the second ($R_2 \leftarrow R_2 - 2R_1$) to eliminate the leading entry in row 2. This yields $\begin{bmatrix} 1 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 \\ 0 & 1 & 1 & 2 \end{bmatrix}$.
2. **Arrange in row echelon form:** Swap rows 2 and 3 so all-zero rows are at the bottom: $\begin{bmatrix} 1 & 1 & 2 & 3 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{bmatrix}$. The pivots are the leading entries in columns 1 and 2.
3. **Compare ranks and find degrees of freedom:** The coefficient matrix has 2 pivots, so $\text{rank}(A) = 2$. The augmented matrix introduces no new pivot, so $\text{rank}([A \mid b]) = 2$. Because both ranks match, the system is consistent. With $n = 3$ variables and rank $r = 2$, there is $3 - 2 = 1$ degree of freedom, giving infinitely many solutions.

### Remember

- The rank $r$ is the count of non-zero rows in row echelon form and equals the number of linearly independent rows or columns.
- A system is consistent if and only if $\text{rank}(A) = \text{rank}([A \mid b])$.
- A consistent system has a unique solution if $r = n$, or infinitely many solutions with $n - r$ free variables if $r < n$.

<!-- page 5 | The Matrix Eigenvalue Problem and Characteristic Equations -->

## The Matrix Eigenvalue Problem and Characteristic Equations

Until now, you used matrices to solve static systems $Ax = b$, finding an unknown vector $x$ that maps to a specific target $b$. Now, consider what happens when a square matrix $A$ acts as an operator that transforms space by rotating and stretching vectors.

Imagine stretching a rubber sheet in two directions. Most arrows drawn on the sheet tilt and change direction, but along specific axes, arrows simply stretch or shrink while pointing along their original line. A non-zero vector $x$ that does not rotate when multiplied by $A$ is an **eigenvector**. The scaling factor $\lambda$ is its corresponding **eigenvalue**. We write this relationship as the eigenvalue problem:
$$Ax = \lambda x$$

Rearranging this into a homogeneous system gives $(A - \lambda I)x = 0$, where $I$ is the identity matrix. From your work on matrix rank, a non-trivial solution $x \neq 0$ exists if and only if the matrix $(A - \lambda I)$ is singular. Therefore, its determinant must equal zero:
$$\det(A - \lambda I) = 0$$
This is the **characteristic equation**. Expanding the determinant produces the characteristic polynomial in $\lambda$. For an $n \times n$ matrix, the coefficients are matrix invariants—quantities that remain constant regardless of coordinate choices. For a $2 \times 2$ matrix, the equation simplifies to $\lambda^2 - S_1\lambda + S_2 = 0$, where $S_1 = \text{tr}(A)$ is the **trace** (the sum of the main diagonal elements) and $S_2 = \det(A)$. For a $3 \times 3$ matrix, it expands to $\lambda^3 - S_1\lambda^2 + S_2\lambda - S_3 = 0$, where $S_2$ is the sum of the principal $2 \times 2$ minors and $S_3 = \det(A)$.

The collection of all eigenvalues of $A$ is called the **spectrum** of $A$. The largest absolute value in the spectrum is the **spectral radius**, denoted $\rho(A) = \max_i |\lambda_i|$. It tells an engineer the maximum amplification factor that $A$ can apply to any invariant vector.

### Worked example

Find the spectrum and spectral radius of $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

1. Form the characteristic matrix: Subtract $\lambda$ along the main diagonal to get $A - \lambda I = \begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix}$.
2. Set the determinant to zero: Calculate $\det(A - \lambda I) = (4 - \lambda)(3 - \lambda) - (1)(2) = 0$, which simplifies to $\lambda^2 - 7\lambda + 10 = 0$. Note that $S_1 = 4 + 3 = 7$ and $S_2 = 12 - 2 = 10$.
3. Solve for the eigenvalues: Factor the quadratic to get $(\lambda - 5)(\lambda - 2) = 0$, yielding $\lambda_1 = 5$ and $\lambda_2 = 2$.
4. Determine the spectrum and spectral radius: The spectrum is the set $\{5, 2\}$. The spectral radius is $\rho(A) = \max(|5|, |2|) = 5$.

### Remember

- An eigenvector satisfies $Ax = \lambda x$; its direction is preserved under multiplication by $A$.
- Eigenvalues are the roots of the characteristic equation $\det(A - \lambda I) = 0$.
- The spectrum is the set of all eigenvalues; the spectral radius is the largest magnitude among them.

<!-- page 6 | Eigenspaces, Multiplicity, and Diagonalization -->

## Eigenspaces, Multiplicity, and Diagonalization

In the previous lesson, we found the individual eigenvalues and eigenvectors that describe the axes along which a matrix purely scales space. Now, we assemble those directions into a unified coordinate system that uncouples matrix operations completely.

Imagine stretching a sheet of rubber diagonally. Along the stretch axes, points move straight outward without rotating. The collection of all eigenvectors belonging to a specific eigenvalue $\lambda$, combined with the zero vector, forms an **eigenspace**. An eigenspace is a vector subspace—a line, plane, or higher-dimensional region through the origin—on which the matrix acts purely as multiplication by $\lambda$.

When finding eigenvalues from $\det(A - \lambda I) = 0$, a root may repeat. The number of times an eigenvalue appears as a root is its **algebraic multiplicity** ($M_\lambda$). The number of linearly independent eigenvectors you can actually find for that eigenvalue—the dimension of its eigenspace—is its **geometric multiplicity** ($m_\lambda$). The geometric multiplicity never exceeds the algebraic multiplicity ($1 \le m_\lambda \le M_\lambda$). If $m_\lambda < M_\lambda$, the difference is called the **defect**, $\Delta_\lambda = M_\lambda - m_\lambda$.

An $n \times n$ matrix is diagonalizable if and only if every eigenvalue has zero defect, providing $n$ total linearly independent eigenvectors. Packaging these vectors side by side as columns forms the **modal matrix** $X$. Because its columns are independent, $X$ is invertible, and changing coordinates untangles $A$ into a pure diagonal matrix:
$$D = X^{-1} A X$$
where the diagonal entries of $D$ are the eigenvalues. This representation simplifies repeated matrix multiplication, since $A^m = X D^m X^{-1}$, where $D^m$ is computed simply by raising each diagonal entry to the $m$-th power.

### Worked example

Diagonalize the matrix $A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$ and determine $A^3$.

1. **Find eigenvalues and multiplicities:** Solve $\det(A - \lambda I) = (4 - \lambda)(3 - \lambda) - 2 = \lambda^2 - 7\lambda + 10 = 0$. Factoring gives $\lambda_1 = 5$ and $\lambda_2 = 2$. Each root appears once, so $M_1 = M_2 = 1$. Because $1 \le m_\lambda \le M_\lambda$, both geometric multiplicities equal $1$. The defect is zero, so $A$ is diagonalizable.
2. **Find independent eigenvectors:** Solve $(A - \lambda I)\mathbf{v} = \mathbf{0}$ for each eigenvalue. For $\lambda_1 = 5$, $\begin{bmatrix} -1 & 1 \\ 2 & -2 \end{bmatrix}\mathbf{v}_1 = \mathbf{0}$ yields $\mathbf{v}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$. For $\lambda_2 = 2$, $\begin{bmatrix} 2 & 1 \\ 2 & 1 \end{bmatrix}\mathbf{v}_2 = \mathbf{0}$ yields $\mathbf{v}_2 = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$.
3. **Construct $X$ and $D$:** Place eigenvectors into columns to form $X = \begin{bmatrix} 1 & 1 \\ 1 & -2 \end{bmatrix}$, which sets $D = \begin{bmatrix} 5 & 0 \\ 0 & 2 \end{bmatrix}$. Inverting $X$ gives $X^{-1} = \frac{1}{3}\begin{bmatrix} 2 & 1 \\ 1 & -1 \end{bmatrix}$.
4. **Compute $A^3$:** Calculate the diagonal power $D^3 = \begin{bmatrix} 5^3 & 0 \\ 0 & 2^3 \end{bmatrix} = \begin{bmatrix} 125 & 0 \\ 0 & 8 \end{bmatrix}$, then transform back: $A^3 = X D^3 X^{-1} = \begin{bmatrix} 86 & 39 \\ 78 & 47 \end{bmatrix}$.

### Remember

- Algebraic multiplicity $M_\lambda$ counts root occurrences, while geometric multiplicity $m_\lambda$ counts independent eigenvectors; a defect occurs when $m_\lambda < M_\lambda$.
- A matrix is diagonalizable if and only if total defect is zero, allowing columns of independent eigenvectors to form an invertible modal matrix $X$.
- Powers decouple under diagonalization via $A^m = X D^m X^{-1}$, where $D^m$ simply raises each diagonal entry to the power $m$.

<!-- page 7 | Gaussian Elimination and Physical Network Modeling -->

## Gaussian Elimination and Physical Network Modeling
Equipped with the rules of linear equations and Gaussian elimination, you can now apply them to basic $2 \times 2$ systems and circuit loop analysis. Physical networks governed by linear conservation laws convert directly into augmented matrices that yield branch currents via triangular elimination.

### The idea
A system of $m$ linear equations in $n$ unknowns $x_1, x_2, \dots, x_n$ is written in matrix form as $Ax = b$, where the **coefficient matrix** $A = [a_{jk}]$ holds the multipliers of the unknowns, $x$ is the column vector of unknowns, and $b$ is the column vector of right-hand side constants:

> **Figure: Matrix equation components showing A, x, and b matrices**
>
> Handwritten matrix definitions showing three bracketed arrays side by side: First, A = [ [a_11, a_12, ..., a_1n], [a_21, a_22, ..., a_2n], [..., ..., ..., ...], [a_m1, a_m2, ..., a_mn] ]. Second, after an ampersand (&), the column vector x = [x_1, x_2, ..., x_n]^T with vertical dots between x_2 and x_n. Third, after an ampersand (&), the column vector b = [b_1, b_2, ..., b_m]^T with vertical dots between b_2 and b_m.

To solve the system without repeatedly writing the variable names, we append the column $b$ to the right of $A$ to form the **augmented matrix** $\tilde{A}$:

> **Figure: Augmented matrix A tilde**
>
> Handwritten augmented matrix expression: A-tilde (A with a tilde above it) equals a square-bracketed matrix with a vertical dashed line separating the coefficient matrix entries on the left from the constant column on the right. Row 1: a_11, a_12, ..., a_1n | b_1. Row 2: a_21, a_22, ..., a_2n | b_2. Next is a horizontal dashed line across the matrix. Last row: a_m1, a_m2, ..., a_mn | b_m.

Applying elementary row operations reduces $\tilde{A}$ to an **upper triangular form**, where all entries below the main diagonal are zero. Once the system is triangular, we apply **back substitution**: we solve the last nonzero equation for its single unknown, then substitute that value upward row by row to find the remaining unknowns.

Physical networks produce linear systems directly from conservation laws. In direct-current (DC) electrical circuits, **Kirchhoff's current law (KCL)** states that the algebraic sum of currents meeting at any node is zero, and **Kirchhoff's voltage law (KVL)** states that the sum of voltage drops $R \cdot i$ around any closed loop equals the sum of voltage sources in that loop. Writing KCL for every node and KVL for every loop often gives an **overdetermined consistent system**—more equations than unknowns—where redundant node equations naturally reduce to zero rows ($0 = 0$) during elimination.

### Worked example
**Given:** Three $2 \times 2$ linear systems: Case (i) $x_1 + x_2 = 1$ and $2x_1 - x_2 = 0$; Case (ii) $x_1 + x_2 = 1$ and $2x_1 + 2x_2 = 2$; Case (iii) $x_1 + x_2 = 1$ and $x_1 + x_2 = 0$.
**Find:** The geometric interpretation, existence, and uniqueness of the solution for each case.

1. Interpret each equation in $x_1$ and $x_2$ as a straight line in the $x_1 x_2$-plane, because a pair $(x_1, x_2)$ solves the system if and only if the point $P(x_1, x_2)$ lies on both lines.
2. Plot Case (i) ($x_1 + x_2 = 1$ and $2x_1 - x_2 = 0$): the lines have different slopes, so they intersect at a single point, giving precisely one unique solution.

> **Figure: Case (i) graph showing intersecting lines**
>
> A 2D coordinate system with horizontal axis $x_1$ and vertical axis $x_2$. Two intersecting lines are plotted. One line is labeled $2x_1 - x_2 = 0$ passing through the origin. The second line is labeled $x_1 + x_2 = 1$ intersecting the axes. The axes have tick marks -2, -1, 0, 1, 2, 3.

3. Plot Case (ii) ($x_1 + x_2 = 1$ and $2x_1 + 2x_2 = 2$): the second equation is twice the first, so the two lines coincide and every point on the line is a solution, giving infinitely many solutions.

> **Figure: Case (ii) graph showing coincident lines**
>
> A 2D coordinate system with horizontal axis and vertical axis. Two overlapping (coincident) lines are plotted, representing $x_1 + x_2 = 1$ and $2x_1 + 2x_2 = 2$. Both lines are labeled along the path.

4. Plot Case (iii) ($x_1 + x_2 = 1$ and $x_1 + x_2 = 0$): the lines have the same slope but different intercepts, so they are parallel and never meet, giving no solution (which can never happen if the system is homogeneous with $b = 0$).

> **Figure: Case (iii) graph showing parallel lines**
>
> A 2D coordinate system with vertical and horizontal axes. Two parallel lines are plotted, labeled $x_1 + x_2 = 1$ and $x_1 + x_2 = 0$. The lines do not intersect.

**Answer:** Case (i) has precisely one solution (intersecting lines); Case (ii) has infinitely many solutions (coincident lines); Case (iii) has no solution (parallel lines).

### More problems

#### Problem 2: Back substitution on a triangular system
**Given:** The upper triangular system $2x_1 + 5x_2 = 2$ and $13x_2 = -26$.
**Find:** The values of $x_1$ and $x_2$.

1. Divide the second equation $13x_2 = -26$ by $13$ to get $x_2 = -2$, since it contains only one unknown.
2. Substitute $x_2 = -2$ into the first equation to get $2x_1 + 5(-2) = 2$, which simplifies to $2x_1 = 12$ and yields $x_1 = 6$.

**Answer:** $x_1 = 6$, $x_2 = -2$.

#### Problem 3: Gauss elimination on a 2x2 system
**Given:** The linear system $2x_1 + 5x_2 = 2$ and $-4x_1 + 3x_2 = -30$.
**Find:** The solution $(x_1, x_2)$ using Gauss elimination.

1. Write the augmented matrix $\begin{bmatrix} 2 & 5 & : & 2 \\ -4 & 3 & : & -30 \end{bmatrix}$.
2. Perform $R_2 \to 2R_1 + R_2$ to eliminate $x_1$ from the second row, giving $\begin{bmatrix} 2 & 5 & : & 2 \\ 0 & 13 & : & -26 \end{bmatrix}$.
3. Translate back to the triangular system $2x_1 + 5x_2 = 2$ and $13x_2 = -26$.
4. Solve the bottom equation for $x_2 = -26 / 13 = -2$, then substitute into the top equation $2x_1 = 2 + 10 = 12$ to get $x_1 = 6$.

**Answer:** $x_1 = 6$, $x_2 = -2$.

#### Problem 4: Unknown currents in a two-loop circuit
**Given:** A two-loop DC circuit with nodes $P$ and $Q$, resistors $20\text{ }\Omega$, $10\text{ }\Omega$, $25\text{ }\Omega$, and sources $80\text{ V}$, $90\text{ V}$.
**Find:** The unknown branch currents $i_1$, $i_2$, and $i_3$.

1. Apply Kirchhoff's current law at nodes $P$ and $Q$ to get $i_1 - i_2 + i_3 = 0$ and $-i_1 + i_2 - i_3 = 0$.
2. Apply Kirchhoff's voltage law to the right and left loops to get $10i_2 + 25i_3 = 90$ and $20i_1 + 10i_2 = 80$.
3. Set $i_1 = x_1, i_2 = x_2, i_3 = x_3$ and form the $4 \times 4$ augmented matrix $\tilde{A} = \begin{bmatrix} 1 & -1 & 1 & : & 0 \\ -1 & 1 & -1 & : & 0 \\ 0 & 10 & 25 & : & 90 \\ 20 & 10 & 0 & : & 80 \end{bmatrix}$.
4. Add $R_1$ to $R_2$ and subtract $20R_1$ from $R_4$ to eliminate $x_1$ below the first pivot.
5. Move the resulting zero second row to the bottom so the nonzero rows sit in rows 2 and 3: $\begin{bmatrix} 1 & -1 & 1 & : & 0 \\ 0 & 10 & 25 & : & 90 \\ 0 & 30 & -20 & : & 80 \\ 0 & 0 & 0 & : & 0 \end{bmatrix}$.
6. Apply $R_3 \to -3R_2 + R_3$ to reach upper triangular form $\begin{bmatrix} 1 & -1 & 1 & : & 0 \\ 0 & 10 & 25 & : & 90 \\ 0 & 0 & -95 & : & -190 \\ 0 & 0 & 0 & : & 0 \end{bmatrix}$.
7. Solve row 3 ($-95x_3 = -190$) to get $x_3 = 2$, then substitute into row 2 ($10x_2 + 25(2) = 90$) to get $x_2 = 4$.
8. Substitute $x_2 = 4$ and $x_3 = 2$ into row 1 ($x_1 - 4 + 2 = 0$) to find $x_1 = 2$.

> **Figure: Circuit diagram with resistors and voltage sources**
>
> A two-loop electrical circuit diagram with a top middle node labelled Q and a bottom middle node labelled P. The left branch connecting Q and P consists of a top-left horizontal 20 Ω resistor, a left vertical wire with a downward current arrow labelled i₁ above a DC voltage source (shorter plate on top, longer plate on bottom, with a downward arrow alongside it labelled 80V), and a plain bottom-left horizontal wire connected to node P. The central vertical branch between node Q and node P contains a 10 Ω resistor and an upward current arrow labelled i₂ pointing from P toward Q. The right branch connecting Q and P consists of a top-right horizontal 10 Ω resistor, a right vertical wire with a downward current arrow labelled i₃ above a DC voltage source (shorter plate on top, longer plate on bottom, with a downward arrow alongside it labelled 90V), and a bottom-right horizontal 15 Ω resistor connected to node P.

> **Watch out.** In step 4, the operation eliminating $x_1$ from the fourth row ($20x_1 + 10x_2 = 80$) is written in the step label as $R_3 \to -20R_1 + R_3$, but it actually acts on $R_4$ before the zero row in $R_2$ is swapped to the bottom.

**Answer:** $i_1 = 2\text{ A}$, $i_2 = 4\text{ A}$, $i_3 = 2\text{ A}$.

<!-- page 8 | Solving Systems with Infinite Solutions, Inconsistencies, and Free Parameters -->

## Solving Systems with Infinite Solutions, Inconsistencies, and Free Parameters
You already know how to reduce an augmented matrix to upper triangular form and solve for a unique set of unknowns. Here we practice interpreting Gaussian elimination when entire rows of coefficients vanish, either producing arithmetic contradictions or leaving free parameters that generate infinitely many solutions.

### The idea
When you apply elementary row operations—interchanging rows, multiplying a row by a nonzero constant, or adding a multiple of one row to another—you create a **row-equivalent** system. By the **row equivalence theorem**, row-equivalent systems share the exact same set of solutions. However, elimination does not always end with a neat triangle of nonzero pivots.

If elimination produces a row of all zeros on the coefficient side paired with a nonzero constant on the right—an equation of the form $0 = c$ where $c \neq 0$—the system contains a **contradiction condition**. No values of the unknowns can make zero equal a nonzero number, so the system is **inconsistent** and has no solution.

Conversely, if a row becomes entirely zero including the constant ($0 = 0$), that equation was redundant and drops out. When fewer nonzero rows remain than there are unknowns, the system is underdetermined. The unknowns without leading pivots are **free variables**: you can assign them arbitrary parameters (such as $t_1, t_2$) and express the remaining variables in terms of these parameters, yielding infinitely many solutions. In a **homogeneous system** (where all right-hand constants are zero), $x_1 = x_2 = \dots = 0$ is always a **trivial solution**, while free variables generate infinitely many **non-trivial solutions**.

### Worked example
**Given:** A linear system with the augmented matrix $\begin{bmatrix} 3 & 2 & 1 & : & 3 \\ 2 & 1 & 1 & : & 0 \\ 6 & 2 & 4 & : & 6 \end{bmatrix}$.
**Find:** The solution set of the linear system.

1. Subtract $\frac{2}{3}$ of Row 1 from Row 2 ($\text{Row } 2 \rightarrow -\frac{2}{3}\text{Row } 1 + \text{Row } 2$) and subtract $2$ times Row 1 from Row 3 ($\text{Row } 3 \rightarrow -2\text{Row } 1 + \text{Row } 3$) to eliminate $x_1$ below the first pivot:
$$\begin{bmatrix} 3 & 2 & 1 & : & 3 \\ 0 & -\frac{1}{3} & \frac{1}{3} & : & -2 \\ 0 & -2 & 2 & : & 0 \end{bmatrix}$$
2. Subtract $6$ times Row 2 from Row 3 ($\text{Row } 3 \rightarrow -6\text{Row } 2 + \text{Row } 3$) to eliminate $x_2$ from the third row:
$$\begin{bmatrix} 3 & 2 & 1 & : & 3 \\ 0 & -\frac{1}{3} & \frac{1}{3} & : & -2 \\ 0 & 0 & 0 & : & 12 \end{bmatrix}$$
3. Translate the reduced rows back into algebraic equations:
$$3x_1 + 2x_2 + x_3 = 3$$
$$-\frac{1}{3}x_2 + \frac{1}{3}x_3 = -2$$
$$0 = 12$$
4. Interpret the bottom equation: because $0 = 12$ is a false statement, no values of $x_1, x_2, x_3$ can satisfy the system.

**Answer:** The system is inconsistent and has no solutions.

### More problems

#### Problem 1: Three-variable system with a unique solution
**Given:** The linear system $x + y - z = 9$, $8y + 6z = -6$, and $-2x + 4y - 6z = 40$.
**Find:** The values of $x, y, z$ (denoted as $x_1, x_2, x_3$).

1. Write the augmented matrix for the system:
$$\begin{bmatrix} 1 & 1 & -1 & : & 9 \\ 0 & 8 & 6 & : & -6 \\ -2 & 4 & -6 & : & 40 \end{bmatrix}$$
2. Apply $\text{Row } 3 \rightarrow 2\text{Row } 1 + \text{Row } 3$ to eliminate the first variable from Row 3:
$$\begin{bmatrix} 1 & 1 & -1 & : & 9 \\ 0 & 8 & 6 & : & -6 \\ 0 & 6 & -8 & : & 58 \end{bmatrix}$$
3. Divide Row 2 and Row 3 by $2$ to simplify the arithmetic:
$$\begin{bmatrix} 1 & 1 & -1 & : & 9 \\ 0 & 4 & 3 & : & -3 \\ 0 & 3 & -4 & : & 29 \end{bmatrix}$$
4. Apply $\text{Row } 3 \rightarrow -\frac{3}{4}\text{Row } 2 + \text{Row } 3$ to reach upper triangular form:
$$\begin{bmatrix} 1 & 1 & -1 & : & 9 \\ 0 & 4 & 3 & : & -3 \\ 0 & 0 & -\frac{25}{4} & : & \frac{125}{4} \end{bmatrix}$$
5. Solve the third row $-\frac{25}{4}x_3 = \frac{125}{4}$ to get $x_3 = -5$.
6. Substitute $x_3 = -5$ into the second row $4x_2 + 3(-5) = -3$ to get $4x_2 = 12$, so $x_2 = 3$.
7. Substitute $x_2 = 3$ and $x_3 = -5$ into the first row $x_1 + 3 - (-5) = 9$ to find $x_1 = 1$.

> **Watch out.** In step 5, dividing $\frac{125}{4}$ by $-\frac{25}{4}$ gives $x_3 = -5$ (used in step 6), even if the minus sign is easy to drop on the first line.

**Answer:** $x_1 = 1$, $x_2 = 3$, $x_3 = -5$.

#### Problem 2: Homogeneous system with non-trivial solutions
**Given:** The homogeneous augmented matrix $\begin{bmatrix} 2 & 4 & 1 & : & 0 \\ -1 & 1 & -2 & : & 0 \\ 4 & 0 & 6 & : & 0 \end{bmatrix}$.
**Find:** The parameterized solution set for $x_1, x_2, x_3$.

1. Apply $\text{Row } 2 \rightarrow \frac{1}{2}\text{Row } 1 + \text{Row } 2$ and $\text{Row } 3 \rightarrow -2\text{Row } 1 + \text{Row } 3$ to clear the first column:
$$\begin{bmatrix} 2 & 4 & 1 & : & 0 \\ 0 & 3 & -\frac{3}{2} & : & 0 \\ 0 & -8 & 4 & : & 0 \end{bmatrix}$$
2. Scale Row 2 by $\frac{1}{3}$ and Row 3 by $\frac{1}{4}$ to simplify the rows:
$$\begin{bmatrix} 2 & 4 & 1 & : & 0 \\ 0 & 1 & -\frac{1}{2} & : & 0 \\ 0 & -2 & 1 & : & 0 \end{bmatrix}$$
3. Apply $\text{Row } 3 \rightarrow 2\text{Row } 2 + \text{Row } 3$, reducing Row 3 to all zeros:
$$\begin{bmatrix} 2 & 4 & 1 & : & 0 \\ 0 & 1 & -\frac{1}{2} & : & 0 \\ 0 & 0 & 0 & : & 0 \end{bmatrix}$$
4. Write the remaining equations $2x_1 + 4x_2 + x_3 = 0$ and $x_2 - \frac{1}{2}x_3 = 0$, giving $x_2 = \frac{1}{2}x_3$.
5. Substitute $x_2 = \frac{1}{2}x_3$ into the first equation: $2x_1 + 4(\frac{1}{2}x_3) + x_3 = 0$, so $x_1 = -\frac{3}{2}x_3$.
6. Set the free parameter $x_2 = t$ to avoid fractions, which yields $x_3 = 2t$ and $x_1 = -\frac{3}{2}(2t) = -3t$.

**Answer:** $x_1 = -3t$, $x_2 = t$, $x_3 = 2t$, where $t$ is arbitrary.

#### Problem 3: Three equations in four unknowns (decimal coefficients)
**Given:** The augmented matrix $\begin{bmatrix} 3 & 2 & 2 & -5 & : & 8 \\ 0.6 & 1.5 & 1.5 & -5.4 & : & 2.7 \\ 1.2 & -0.3 & -0.3 & 2.4 & : & 2.1 \end{bmatrix}$.
**Find:** The general solution in terms of free parameters.

1. Apply $\text{Row } 2 \rightarrow -0.2\text{Row } 1 + \text{Row } 2$ and $\text{Row } 3 \rightarrow -0.4\text{Row } 1 + \text{Row } 3$ to eliminate $x_1$ below Row 1:
$$\begin{bmatrix} 3 & 2 & 2 & -5 & : & 8 \\ 0 & 1.1 & 1.1 & -4.4 & : & 1.1 \\ 0 & -1.1 & -1.1 & 4.4 & : & -1.1 \end{bmatrix}$$
2. Apply $\text{Row } 3 \rightarrow \text{Row } 2 + \text{Row } 3$, turning Row 3 into a complete row of zeros:
$$\begin{bmatrix} 3 & 2 & 2 & -5 & : & 8 \\ 0 & 1.1 & 1.1 & -4.4 & : & 1.1 \\ 0 & 0 & 0 & 0 & : & 0 \end{bmatrix}$$
3. Write the two nonzero equations: $3x_1 + 2x_2 + 2x_3 - 5x_4 = 8$ and $1.1x_2 + 1.1x_3 - 4.4x_4 = 1.1$.
4. Divide the second equation by $1.1$ to isolate $x_2 = 1 - x_3 + 4x_4$.
5. Substitute $x_2$ into the first equation: $3x_1 = -2(1 - x_3 + 4x_4) - 2x_3 + 5x_4 + 8 = 6 - 3x_4$, giving $x_1 = 2 - x_4$.
6. Assign arbitrary parameters $x_3 = t_1$ and $x_4 = t_2$ to express the infinite solution set.

> **Watch out.** In step 4, $x_2 = 1 - x_3 + 4x_4$ has a coefficient of $4$ on $x_4$; take care not to drop the $4$ when copying the final summary ($x_2 = 1 - t_1 + t_2$ vs. $1 - t_1 + 4t_2$).

**Answer:** $x_1 = 2 - t_2$, $x_2 = 1 - t_1 + t_2$ (or $1 - t_1 + 4t_2$), $x_3 = t_1$, $x_4 = t_2$, with $t_1, t_2$ arbitrary.

#### Problem 4: Four-unknown system requiring a row interchange
**Given:** The augmented matrix $\begin{bmatrix} 0 & 5 & 5 & -10 & : & 0 \\ 2 & -3 & -3 & 6 & : & 2 \\ 4 & 1 & 1 & -2 & : & 4 \end{bmatrix}$.
**Find:** The general solution of the system.

1. Interchange Row 1 and Row 3 to place a nonzero pivot in the top-left corner:
$$\begin{bmatrix} 4 & 1 & 1 & -2 & : & 4 \\ 2 & -3 & -3 & 6 & : & 2 \\ 0 & 5 & 5 & -10 & : & 0 \end{bmatrix}$$
2. Apply $\text{Row } 2 \rightarrow -\frac{2}{4}\text{Row } 1 + \text{Row } 2$ to eliminate the first entry in Row 2:
$$\begin{bmatrix} 4 & 1 & 1 & -2 & : & 4 \\ 0 & -\frac{7}{2} & -\frac{7}{2} & 7 & : & 0 \\ 0 & 5 & 5 & -10 & : & 0 \end{bmatrix}$$
3. Multiply Row 2 by $-\frac{2}{7}$ to get a leading $1$ in the second row:
$$\begin{bmatrix} 4 & 1 & 1 & -2 & : & 4 \\ 0 & 1 & 1 & -2 & : & 0 \\ 0 & 5 & 5 & -10 & : & 0 \end{bmatrix}$$
4. Apply $\text{Row } 3 \rightarrow -5\text{Row } 2 + \text{Row } 3$ to eliminate Row 3 completely:
$$\begin{bmatrix} 4 & 1 & 1 & -2 & : & 4 \\ 0 & 1 & 1 & -2 & : & 0 \\ 0 & 0 & 0 & 0 & : & 0 \end{bmatrix}$$
5. Solve the second row $x_2 + x_3 - 2x_4 = 0$ by back substitution to get $x_2 = 2x_4 - x_3$.
6. Substitute $x_2$ into the first row $4x_1 + x_2 + x_3 - 2x_4 = 4$: $4x_1 = -2x_4 + x_3 - x_3 + 2x_4 + 4 = 4$, so $x_1 = 1$.
7. Let the free variables be $x_3 = t_1$ and $x_4 = t_2$.

> **Figure: Linear system solution continuation**
>
> Continuation of back substitution showing equations and calculations at the bottom of the page.

**Answer:** $x_1 = 1$, $x_2 = 2t_2 - t_1$, $x_3 = t_1$, $x_4 = t_2$, where $t_1, t_2$ are arbitrary.

<!-- page 9 | Determining Matrix Rank and Vector Independence -->

## Determining Matrix Rank and Vector Independence

With Gaussian elimination mastered, you can already reduce any system of equations to an upper staircase structure and identify free parameters. Now we use row echelon reduction as a direct measurement tool to find the rank of a matrix and test whether a set of vectors is linearly independent.

### The idea

A **linear combination** of $m$ vectors $a_{(1)}, a_{(2)}, \dots, a_{(m)}$ is a weighted sum $c_1 a_{(1)} + c_2 a_{(2)} + \dots + c_m a_{(m)}$ using scalar multipliers $c_1, \dots, c_m$. The vectors form a **linearly independent** set if the vector equation $c_1 a_{(1)} + c_2 a_{(2)} + \dots + c_m a_{(m)} = 0$ holds only when every scalar $c_j$ is zero. If the equation can be satisfied with scalars not all zero, the vectors are **linearly dependent**, meaning at least one vector is a redundant combination of the others.

Testing whether vectors are linearly independent reduces to computing the echelon rank of the matrix formed by those vectors. The **rank** of a matrix $A$, written $\text{rank } A$, is the maximum number of linearly independent row vectors (or column vectors, since $\text{rank } A = \text{rank } A^T$). Because elementary row operations only combine existing rows without creating or destroying independent directions, row-equivalent matrices have the exact same rank. In **row echelon form**, all zero rows sit at the bottom, and the leftmost nonzero entry (pivot) in each nonzero row lies strictly to the right of the pivot in the row above it. Thus, $\text{rank } A$ is simply the count $r$ of nonzero rows in row echelon form. If $p$ vectors are stacked as rows of a matrix $A$, they are linearly independent if $\text{rank } A = p$, and linearly dependent if $\text{rank } A < p$ (which always happens when the number of vectors $p$ exceeds the number of components $n$).

By the **Fundamental Theorem for Linear Systems**, a system $Ax = b$ with $n$ unknowns is consistent if and only if the coefficient matrix $A$ and the augmented matrix $\tilde{A} = [A \mid b]$ share the same rank $r$. It has a unique solution when $r = n$, and infinitely many solutions with $n - r$ arbitrary parameters when $r < n$. A **homogeneous system** $Ax = 0$ is always consistent with the trivial solution $x = 0$, and possesses nontrivial solutions if and only if $\text{rank } A < n$.

### Worked example

**Given:** Three vectors $\begin{bmatrix} 0 & 1 & 1 \end{bmatrix}$, $\begin{bmatrix} 1 & 1 & 1 \end{bmatrix}$, and $\begin{bmatrix} 0 & 0 & 1 \end{bmatrix}$.
**Find:** Whether the set of vectors is linearly independent.

1. Stack the three given vectors as the rows of a $3 \times 3$ matrix $A = \begin{bmatrix} 0 & 1 & 1 \\ 1 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}$ so that row reduction tests for redundant linear combinations among them.

2. Swap Row 1 and Row 2 to place a nonzero pivot in the top-left entry $r_{11}$, yielding $\begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}$.

3. Observe that the leftmost nonzero entry in each row now shifts strictly to the right of the previous row, which matches the general row echelon structure:

> **Figure: Row echelon form of an augmented matrix**
>
> A handwritten augmented matrix enclosed in large square brackets illustrating the general structure of row echelon form. Each row has matrix entries on the left separated by a colon (or vertical dotted separator) from the augmented column entry on the right:
> - Row 1: r_{11}, r_{12}, ..., r_{1n} : f_1
> - Row 2: 0, r_{21} (or r_{2j}), ..., r_{2n} : f_2
> - Row 3: 0, 0 ... r_{k_2} . . . . .
> - Row 4 (r-th row): 0 .. 0 ... r_{r} ... r_{rn} : f_r
> - Row 5: 0 . . . . . 0 : f_{r+1}
> - Row 6: 0 . . . . . 0 : f_{r+2}
> - Row 7: horizontal dots across the row (. . . . .)
> - Bottom row (m-th row): 0 . . . 0   f_m

4. Count the nonzero rows in this echelon matrix to find $\text{rank } A = 3$, and compare it to the number of vectors $p = 3$; because $\text{rank } A = p$, no row can be eliminated as a combination of the others.

**Answer:** $\text{rank } A = 3$, so the vectors are linearly independent.

### More problems

#### Problem 1(iii): Independence of vectors containing a zero vector
**Given:** Vectors $\begin{bmatrix} 0.4 & -0.2 & 0.2 \end{bmatrix}$, $\begin{bmatrix} 0 & 0 & 0 \end{bmatrix}$, and $\begin{bmatrix} 3.0 & -0.6 & 1.5 \end{bmatrix}$.
**Find:** Whether the vectors are linearly independent.

1. Form the matrix $A = \begin{bmatrix} 0.4 & -0.2 & 0.2 \\ 0 & 0 & 0 \\ 3.0 & -0.6 & 1.5 \end{bmatrix}$ with the three given vectors as rows.
2. Swap Row 2 and Row 3 to move the all-zero row to the bottom.
3. Eliminate the first entry of the new Row 2 using Row 1, leaving two nonzero rows in echelon form.
4. Compare $\text{rank } A = 2$ with the number of vectors $p = 3$ to conclude dependence.

**Answer:** $\text{rank } A = 2 < 3$, so the vectors are linearly dependent.

#### Problem (Unnumbered): Rank of a $3 \times 4$ matrix
**Given:** Matrix $A = \begin{bmatrix} 3 & 0 & 2 & 2 \\ -6 & 42 & 24 & 54 \\ 21 & -21 & 0 & -15 \end{bmatrix}$.
**Find:** The rank of $A$ (and verify whether its rows $a_{(1)}, a_{(2)}, a_{(3)}$ are dependent).

1. Apply $R_2 \to 2R_1 + R_2$ and $R_3 \to -7R_1 + R_3$ to clear column 1 below the first pivot.
2. Write the intermediate matrix $\begin{bmatrix} 3 & 0 & 2 & 2 \\ 0 & 42 & 28 & 58 \\ 0 & -21 & -14 & -29 \end{bmatrix}$.
3. Apply $R_3 \to \frac{1}{2}R_2 + R_3$ to eliminate the third row completely, leaving two nonzero rows.
4. Note that $6a_{(1)} - \frac{1}{2}a_{(2)} - a_{(3)} = 0$, confirming the three rows are linearly dependent.

> **Watch out.** The final echelon matrix on page 18 writes the $(2,4)$ entry as $28$ instead of $58$, a handwriting slip after $R_3 \to \frac{1}{2}R_2 + R_3$ has already zeroed out Row 3; the rank remains $2$.

**Answer:** $\text{rank } A = 2$.

#### Problem (i): Rank of a $3 \times 3$ matrix
**Given:** Matrix $A = \begin{pmatrix} 0 & 3 & 5 \\ 3 & 5 & 0 \\ 5 & 0 & 10 \end{pmatrix}$.
**Find:** The rank of matrix $A$.

1. Swap Row 1 and Row 3 to bring a nonzero pivot to the top-left corner: $\begin{pmatrix} 5 & 0 & 10 \\ 3 & 5 & 0 \\ 0 & 3 & 5 \end{pmatrix}$.
2. Apply $R_2 \to -\frac{3}{5}R_1 + R_2$ to zero the $(2,1)$ entry, yielding $\begin{pmatrix} 5 & 0 & 10 \\ 0 & 5 & -6 \\ 0 & 3 & 5 \end{pmatrix}$.
3. Apply $R_3 \to -\frac{3}{5}R_2 + R_3$ to obtain $\begin{pmatrix} 5 & 0 & 10 \\ 0 & 5 & -6 \\ 0 & 0 & \frac{43}{5} \end{pmatrix}$ with three nonzero rows.

**Answer:** $\text{rank } A = 3$.

#### Problem 1(i): Independence of three 4-component vectors
**Given:** Vectors $\begin{bmatrix} 3 & 4 & 0 & 2 \end{bmatrix}$, $\begin{bmatrix} 2 & -1 & 3 & 7 \end{bmatrix}$, and $\begin{bmatrix} 1 & 16 & -12 & -22 \end{bmatrix}$.
**Find:** Whether the vectors are linearly independent.

1. Form the matrix $A = \begin{bmatrix} 3 & 4 & 0 & 2 \\ 2 & -1 & 3 & 7 \\ 1 & 16 & -12 & -22 \end{bmatrix}$ and swap Row 1 with Row 3 for a unit pivot.
2. Apply $R_2 \to -2R_1 + R_2$ and $R_3 \to -3R_1 + R_3$ to get $\begin{bmatrix} 1 & 16 & -12 & -22 \\ 0 & -33 & 27 & 51 \\ 0 & -44 & 36 & 68 \end{bmatrix}$.
3. Scale Row 2 by $\frac{1}{3}$ and Row 3 by $\frac{1}{2}$ to simplify: $\begin{bmatrix} 1 & 16 & -12 & -22 \\ 0 & -11 & 9 & 17 \\ 0 & -22 & 18 & 34 \end{bmatrix}$.
4. Apply $R_3 \to -2R_2 + R_3$ to zero out Row 3 completely, leaving $\text{rank } A = 2 < 3$.

**Answer:** $\text{rank } A = 2$, so the given vectors are linearly dependent.

#### Problem (ii): Rank of a $4 \times 4$ matrix
**Given:** Matrix $A = \begin{pmatrix} 2 & 4 & 8 & 16 \\ 16 & 8 & 4 & 2 \\ 4 & 8 & 16 & 2 \\ 2 & 16 & 8 & 4 \end{pmatrix}$.
**Find:** The rank of matrix $A$.

1. Divide every row by $2$ to simplify arithmetic: $\begin{pmatrix} 1 & 2 & 4 & 8 \\ 8 & 4 & 2 & 1 \\ 2 & 4 & 8 & 1 \\ 1 & 8 & 4 & 2 \end{pmatrix}$.
2. Apply $R_2 \to -8R_1 + R_2$, $R_3 \to -2R_1 + R_3$, and $R_4 \to -R_1 + R_4$ to clear column 1.
3. Write the resulting matrix $\begin{pmatrix} 1 & 2 & 4 & 8 \\ 0 & -12 & -30 & -63 \\ 0 & 0 & 0 & -15 \\ 0 & 6 & 0 & -6 \end{pmatrix}$.
4. Apply $R_4 \to \frac{1}{2}R_2 + R_4$ to eliminate the $(4,2)$ entry, giving row 4 as $\begin{pmatrix} 0 & 0 & -15 & -\frac{75}{2} \end{pmatrix}$.
5. Swap Row 3 and Row 4 to reach echelon form $\begin{pmatrix} 1 & 2 & 4 & 8 \\ 0 & -12 & -30 & -63 \\ 0 & 0 & -15 & -\frac{75}{2} \\ 0 & 0 & 0 & -15 \end{pmatrix}$ with four nonzero rows.

**Answer:** $\text{rank } A = 4$.

<!-- page 10 | Computing Eigenvalues and Eigenvectors of 2x2 and 3x3 Matrices -->

## Computing Eigenvalues and Eigenvectors of 2x2 and 3x3 Matrices
Now that solving homogeneous systems is routine, we use that technique to extract the specific direction vectors scaled by matrix transformations. Solving $(A - \lambda I)x = 0$ for each root $\lambda$ of the characteristic polynomial isolates the invariant directional axes of the matrix.

### The idea
An **eigenvalue** (or **characteristic value** or **latent root**) $\lambda$ is a scalar for which $Ax = \lambda x$ has a nonzero solution vector $x$, called an **eigenvector** (or **characteristic vector**). The set of all eigenvalues of $A$ is its **spectrum**, and the largest absolute value among them is the **spectral radius**. Rewriting the equation as $(A - \lambda I)x = 0$ shows that the **characteristic matrix** $(A - \lambda I)$ must be singular for a nonzero eigenvector to exist. Thus, its **characteristic determinant** $D(\lambda) = \det(A - \lambda I)$ must equal zero.

Instead of expanding $\det(A - \lambda I) = 0$ from scratch every time, we can build the **characteristic polynomial** directly from matrix invariants. For a $2 \times 2$ matrix, the characteristic equation is $\lambda^2 - S_1\lambda + S_2 = 0$, where $S_1 = a_{11} + a_{22}$ is the sum of the main diagonal elements and $S_2 = |A|$ is the determinant. For a $3 \times 3$ matrix, the formula is $\lambda^3 - S_1\lambda^2 + S_2\lambda - S_3 = 0$. Here, $S_1 = a_{11} + a_{22} + a_{33}$ is the sum of the main diagonal elements, $S_2$ is the sum of the minors of the main diagonal elements, and $S_3 = |A|$.

To solve a cubic characteristic equation, test small integer values to find one root $\lambda_1$, then use **synthetic division** to divide the cubic polynomial by $(\lambda - \lambda_1)$ and reduce it to a factorable quadratic. Once all eigenvalues are known, substitute each $\lambda$ one at a time into $(A - \lambda I)x = 0$, apply row reduction to create a zero row, and assign a convenient value to the free variable to find the corresponding eigenvector.

### Worked example
**Given:** Matrix $A = \begin{bmatrix} 8 & -4 \\ 2 & 2 \end{bmatrix}$.
**Find:** The eigenvalues (or spectrum) of $A$.

1. Write the $2 \times 2$ characteristic equation $\lambda^2 - S_1\lambda + S_2 = 0$, because its roots are the eigenvalues where $|A - \lambda I| = 0$.
2. Compute the trace $S_1 = 8 + 2 = 10$ by summing the main diagonal elements.
3. Compute the determinant $S_2 = |A| = (8)(2) - (-4)(2) = 16 + 8 = 24$.
4. Substitute $S_1$ and $S_2$ into the formula to get $D(\lambda) = \lambda^2 - 10\lambda + 24 = 0$.
5. Factor the quadratic into $(\lambda - 6)(\lambda - 4) = 0$ to isolate the roots.

**Answer:** $\lambda = 6, 4$.

### More problems

#### Problem 2: Spectrum of a 2x2 Matrix
**Given:** Matrix $A = \begin{bmatrix} 1 & 2 \\ 2 & -2 \end{bmatrix}$.
**Find:** The spectrum of $A$.
1. Compute the sum of the main diagonal elements $S_1 = 1 - 2 = -1$.
2. Compute the determinant $S_2 = |A| = (1)(-2) - (2)(2) = -2 - 4 = -6$.
3. Form the characteristic equation $\lambda^2 - S_1\lambda + S_2 = \lambda^2 + \lambda - 6 = 0$.
4. Factor the polynomial as $(\lambda + 3)(\lambda - 2) = 0$ to find the roots $\lambda = -3, 2$.

**Answer:** Spectrum of $A = \{-3, 2\}$.

#### Problem 3: Eigenvectors of a 2x2 Matrix
**Given:** Matrix $A = \begin{bmatrix} 8 & -4 \\ 2 & 2 \end{bmatrix}$ with characteristic equation $\lambda^2 - 10\lambda + 24 = 0$ and eigenvalues $\lambda = 4, 6$.
**Find:** The eigenvectors of $A$.
1. Set up the homogeneous system $\begin{bmatrix} 8-\lambda & -4 \\ 2 & 2-\lambda \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$ to solve for each $\lambda$.
2. Substitute $\lambda = 4$ to get $\begin{pmatrix} 4 & -4 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$ and row-reduce to $\begin{bmatrix} 4 & -4 \\ 0 & 0 \end{bmatrix}$.
3. Solve $4x_1 - 4x_2 = 0$ to get $x_1 = x_2$, and choose $x_1 = 1$ to obtain the first eigenvector.
4. Substitute $\lambda = 6$ to get $\begin{bmatrix} 2 & -4 \\ 2 & -4 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$, which yields $2x_1 - 4x_2 = 0$ or $x_1 = 2x_2$.
5. Choose the free variable $x_2 = 1$ so that $x_1 = 2$ for the second eigenvector.

**Answer:** Eigenvectors are $x = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ for $\lambda = 4$, and $x = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$ for $\lambda = 6$.

#### Problem 4: Eigenvalues and Eigenvectors by Direct Determinant
**Given:** Matrix $A = \begin{bmatrix} -5 & 2 \\ 2 & -2 \end{bmatrix}$.
**Find:** The eigenvalues and eigenvectors of $A$.
1. Set $\det(A - \lambda I) = \det \begin{bmatrix} -5-\lambda & 2 \\ 2 & -2-\lambda \end{bmatrix} = (-5-\lambda)(-2-\lambda) - 4 = 0$.
2. Expand to $\lambda^2 + 7\lambda + 6 = 0$ and apply the quadratic formula $\lambda = \frac{-7 \pm \sqrt{25}}{2}$ to get $\lambda_1 = -1, \lambda_2 = -6$.
3. For $\lambda_1 = -1$, form $(A - \lambda_1 I)x = \begin{pmatrix} -4 & 2 \\ 2 & -1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.
4. Apply $R_2 \to \frac{1}{2}R_1 + R_2$ to get $\begin{pmatrix} -4 & 2 \\ 0 & 0 \end{pmatrix}$, yielding $-4x_1 + 2x_2 = 0$ or $x_2 = 2x_1$.
5. Choose $x_1 = 1$ so that $x_2 = 2$ for the first eigenvector.
6. For $\lambda_2 = -6$, form $(A - \lambda_2 I)x = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.
7. Apply $R_2 \to -2R_1 + R_2$ to get $\begin{pmatrix} 1 & 2 \\ 0 & 0 \end{pmatrix}$, yielding $x_1 = -2x_2$; choose $x_2 = 1$ so $x_1 = -2$.

> **Watch out.** When substituting a negative eigenvalue like $\lambda_2 = -6$ into $A - \lambda I$, you are subtracting a negative number, so $-5 - (-6)$ becomes $+1$.

**Answer:** Eigenvalues $\lambda_1 = -1, \lambda_2 = -6$; eigenvectors $x = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ for $\lambda_1 = -1$, and $x = \begin{bmatrix} -2 \\ 1 \end{bmatrix}$ for $\lambda_2 = -6$.

#### Problem 5: Eigenvalues of a 3x3 Matrix
**Given:** Matrix $A = \begin{bmatrix} 3 & 10 & 5 \\ -2 & -3 & -4 \\ 3 & 5 & 7 \end{bmatrix}$.
**Find:** The eigenvalues of $A$.
1. Compute the sum of the main diagonal elements $S_1 = 3 - 3 + 7 = 7$.
2. Sum the diagonal minors: $S_2 = \begin{vmatrix} 3 & 10 \\ -2 & -3 \end{vmatrix} + \begin{vmatrix} -3 & -4 \\ 5 & 7 \end{vmatrix} + \begin{vmatrix} 3 & 5 \\ 3 & 7 \end{vmatrix} = 11 - 1 + 6 = 16$.
3. Compute the determinant $S_3 = |A| = 3(-21 + 20) - 10(-14 + 12) + 5(-10 + 9) = -3 + 20 - 5 = 12$.
4. Form the cubic characteristic equation $\lambda^3 - 7\lambda^2 + 16\lambda - 12 = 0$.
5. Test integer roots: $\lambda = 1$ gives $-2 \neq 0$, while $\lambda = 2$ gives $8 - 28 + 32 - 12 = 0$.
6. Use synthetic division with $\lambda = 2$ on coefficients $1, -7, 16, -12$ to get the depressed quadratic $\lambda^2 - 5\lambda + 6 = 0$.
7. Factor $(\lambda - 3)(\lambda - 2) = 0$ to find the remaining roots $\lambda = 3, 2$.

> **Figure: Synthetic division table for polynomial root finding**
>
> Synthetic division table showing division of lambda^3 - 7lambda^2 + 16lambda - 12 by (lambda - 2). The top row headers are lambda^3, lambda^2, lambda, constant. The values in the table are: outer divisor 2; row 1 coefficients: 1, -7, 16, -12; row 2: 0, 2, -10, 12; row 3 result coefficients: 1, -5, 6, 0. Below the result coefficients, labels indicate lambda^2, lambda, constant.

**Answer:** $2, 3, 2$.

#### Problem 6: Eigenvalues and Eigenvectors of a 3x3 Matrix
**Given:** Matrix $A = \begin{pmatrix} 1 & 1 & 2 \\ -1 & 2 & 1 \\ 0 & 1 & 3 \end{pmatrix}$.
**Find:** The eigenvalues and eigenvectors of $A$.
1. Compute the invariants $S_1 = 1 + 2 + 3 = 6$, $S_2 = 3 + 5 + 3 = 11$, and $S_3 = |A| = 5 + 3 - 2 = 6$.
2. Write $\lambda^3 - 6\lambda^2 + 11\lambda - 6 = 0$ and verify that $\lambda = 1$ is a root since $1 - 6 + 11 - 6 = 0$.
3. Divide by $(\lambda - 1)$ synthetically to get $\lambda^2 - 5\lambda + 6 = 0$, which factors to give $\lambda = 3, 2$.
4. For $\lambda = 1$, swap rows of $(A - I)$ and apply $R_3 \to -R_2 + R_3$ to get $\begin{bmatrix} -1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{bmatrix}$.
5. Back-substitute $x_2 = -2x_3$ into $-x_1 + x_2 + x_3 = 0$ to get $x_1 = -x_3$, and choose $x_3 = 1$.
6. For $\lambda = 2$, apply $R_2 \to -R_1 + R_2$ on $(A - 2I)$ to get $-x_1 + x_2 + 2x_3 = 0$ and $x_2 + x_3 = 0$.
7. Substitute $x_2 = -x_3$ to find $x_1 = x_3$, and choose $x_3 = 1$ to get the second eigenvector.
8. For $\lambda = 3$, swap $R_1, R_2$ of $(A - 3I)$ and eliminate using $R_2 \to -2R_1 + R_2$ and $R_3 \to -\frac{1}{3}R_2 + R_3$ to get $3x_2 = 0$ and $x_1 = x_3 = 1$.

**Answer:** Eigenvalues $1, 2, 3$; eigenvectors $x = \begin{bmatrix} -1 \\ -2 \\ 1 \end{bmatrix}$ for $\lambda = 1$, $x = \begin{bmatrix} 1 \\ -1 \\ 1 \end{bmatrix}$ for $\lambda = 2$, and $x = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}$ for $\lambda = 3$.

<!-- page 11 | Repeated Eigenvalues, Defect, and Complex Spectra -->

## Repeated Eigenvalues, Defect, and Complex Spectra

Having found eigenvectors for simple distinct real roots, we now handle degeneracies such as repeated roots and complex rotation values. A repeated root may yield a multi-dimensional eigenspace or fewer eigenvectors than its multiplicity, indicating an incomplete or defective set of axes.

### The idea

When two eigenvectors $w$ and $x$ share the same eigenvalue $\lambda$, any non-zero linear combination $w + x$ or scalar multiple $kx$ is also an eigenvector for $\lambda$. Together with the zero vector, all eigenvectors for a fixed $\lambda$ form a vector subspace called the **eigenspace** of $A$ corresponding to $\lambda$. The number of times $\lambda$ appears as a root of the characteristic polynomial is its **algebraic multiplicity** $M_\lambda$. The number of linearly independent eigenvectors associated with $\lambda$ is its **geometric multiplicity** $m_\lambda$, which equals the number of free variables in $(A - \lambda I)x = 0$, or $n - \text{rank}(A - \lambda I)$. The difference $\Delta_\lambda = M_\lambda - m_\lambda$ is the **defect** of $\lambda$. When $\Delta_\lambda = 0$, the repeated root provides a full set of independent axes; when $\Delta_\lambda > 0$, the matrix is defective and lacks enough eigenvectors to span that dimension.

Even when roots are repeated or come in **complex conjugate** pairs ($a \pm ib$) representing rotations, the same elimination process applies using complex arithmetic. Throughout all calculations, you can verify your roots using key **spectral properties**: the sum of all eigenvalues equals the **trace** (the sum of the main diagonal entries), and their product equals the **determinant** $|A|$. Furthermore, the transpose $A^T$ shares the exact same eigenvalues as $A$, and for any eigenvalue $\lambda$ of $A$, the matrices $kA$, $A^n$, $A^{-1}$, and $\text{adj } A$ have eigenvalues $k\lambda$, $\lambda^n$, $1/\lambda$, and $|A|/\lambda$ respectively.

### Worked example

**Given:** The $2 \times 2$ matrix $A = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}$ (Problem 1, page 41).
**Find:** The eigenvalues and corresponding eigenvectors of $A$.

1. Compute the trace $S_1 = 0 + 0 = 0$ and the determinant $S_2 = |A| = 0 - (-1) = 1$ to form the characteristic equation $\lambda^2 - S_1\lambda + S_2 = 0$.
2. Solve $\lambda^2 + 1 = 0$ to obtain the purely imaginary conjugate eigenvalues $\lambda = \pm i$.
3. Substitute $\lambda = i$ into the homogeneous system $(A - \lambda I)X = 0$, which gives $\begin{bmatrix} -i & 1 \\ -1 & -i \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$.
4. Apply the complex row operation $R_2 \to iR_1 + R_2$ to eliminate the second row, leaving $\begin{bmatrix} -i & 1 \\ 0 & 0 \end{bmatrix}$ and the single equation $-ix_1 + x_2 = 0$, or $x_2 = ix_1$.
5. Set the free parameter $x_1 = 1$ so that $x_2 = i$, giving the first complex eigenvector $X = \begin{bmatrix} 1 \\ i \end{bmatrix}$.
6. Substitute the second root $\lambda = -i$ into $(A - \lambda I)X = 0$ to get $\begin{bmatrix} i & 1 \\ -1 & -i \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$, and apply $R_2 \to -iR_1 + R_2$ to reduce it to $ix_1 + x_2 = 0$.
7. Solve for $x_2 = -ix_1$ and choose $x_1 = 1$ to obtain the conjugate eigenvector $X = \begin{bmatrix} 1 \\ -i \end{bmatrix}$.

**Answer:** Eigenvalues $\lambda = i, -i$; eigenvectors $X = \begin{bmatrix} 1 \\ i \end{bmatrix}$ for $\lambda = i$ and $X = \begin{bmatrix} 1 \\ -i \end{bmatrix}$ for $\lambda = -i$.

### More problems

#### Problem Q: Repeated root with two independent eigenvectors
**Given:** The matrix $A = \begin{bmatrix} -2 & 2 & -3 \\ -1 & 1 & -6 \\ 1 & -2 & 0 \end{bmatrix}$.
**Find:** All eigenvalues and linearly independent eigenvectors of $A$.

1. Compute $S_1 = -2 + 1 + 0 = -1$, $S_2 = -21$, and $S_3 = |A| = 45$ to write the characteristic equation $\lambda^3 + \lambda^2 - 21\lambda - 45 = 0$.
2. Factor out $\lambda_1 = 5$ by synthetic division to get $\lambda^2 + 6\lambda + 9 = (\lambda + 3)^2 = 0$, giving eigenvalues $\lambda = 5, -3, -3$.
3. For $\lambda = 5$, set up $(A - 5I)x = 0$ as $\begin{bmatrix} -7 & 2 & -3 \\ 2 & -4 & -6 \\ -1 & -2 & -5 \end{bmatrix} x = 0$ and apply $R_2 \to \frac{2}{7}R_1 + R_2$ and $R_3 \to -\frac{1}{7}R_1 + R_3$.
4. Scale the reduced rows to obtain $x_2 + 2x_3 = 0$ and $-7x_1 + 2x_2 - 3x_3 = 0$, which yield $x_2 = -2x_3$ and $x_1 = -x_3$.
5. Set $x_3 = -1$ to find the first eigenvector $x_1 = \begin{bmatrix} 1 \\ 2 \\ -1 \end{bmatrix}$ for $\lambda = 5$.
6. For the repeated root $\lambda = -3$, form $(A + 3I)x = 0$ as $\begin{bmatrix} 1 & 2 & -3 \\ 2 & 4 & -6 \\ -1 & -2 & 3 \end{bmatrix} x = 0$ and reduce with $R_2 \to -2R_1 + R_2$ and $R_3 \to R_2 + R_3$ to get two zero rows.
7. Solve the remaining equation $x_1 = 3x_3 - 2x_2$ by choosing $(x_2, x_3) = (1, 0)$ and then $(x_2, x_3) = (0, 1)$ to get two independent eigenvectors.

> **Figure: Synthetic division table**
>
> Synthetic division showing 5 divided into coefficients 1, 1, -21, -45. Row 1: 1, 1, -21, -45. Row 2: 0, 5, 30, 45. Bottom row: 1, 6, 9, with remainder 0 enclosed.

> **Watch out.** The given matrix has $a_{21} = -1$ and $a_{31} = 1$, which gives $S_2 = -13$, $|A| = -27$, and $x_2 = 2x_3$ for $\lambda = 5$, whereas the worked solution switches those entries to $a_{21} = 2$ and $a_{31} = -1$ (making $S_2 = -21$ and $|A| = 45$) and writes $x_2 = -2x_3$.

**Answer:** Eigenvalues $\lambda = 5, -3, -3$; eigenvectors $x_1 = \begin{bmatrix} 1 \\ 2 \\ -1 \end{bmatrix}$ for $\lambda = 5$, and $x_2 = \begin{bmatrix} -2 \\ 1 \\ 0 \end{bmatrix}$, $x_3 = \begin{bmatrix} 3 \\ 0 \\ 1 \end{bmatrix}$ for $\lambda = -3$.

#### Problem 1: Triple root with a two-dimensional eigenspace
**Given:** The matrix $A = \begin{bmatrix} 6 & -6 & 5 \\ 14 & -13 & 10 \\ 7 & -6 & 4 \end{bmatrix}$.
**Find:** All eigenvalues and eigenvectors of $A$.

1. Calculate the trace $S_1 = 6 - 13 + 4 = -3$, sum of minors $S_2 = 6 + 8 - 11 = 3$, and determinant $S_3 = 48 - 84 + 35 = -1$.
2. Write the characteristic equation $\lambda^3 + 3\lambda^2 + 3\lambda + 1 = 0$ and test $\lambda_1 = -1$ by synthetic division.
3. Factor the quotient $\lambda^2 + 2\lambda + 1 = (\lambda + 1)^2 = 0$ to find the triple eigenvalue $\lambda = -1, -1, -1$.
4. Substitute $\lambda = -1$ into $(A - \lambda I)x = 0$ to obtain the system $\begin{bmatrix} 7 & -6 & 5 \\ 14 & -12 & 10 \\ 7 & -6 & 5 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$.
5. Eliminate the second and third proportional rows to leave a single plane equation $7x_1 - 6x_2 + 5x_3 = 0$, or $7x_1 = 6x_2 - 5x_3$.
6. Choose $x_3 = 0$ and $x_2 = 7$ to get $x_1 = 6$,Choose $x_2 = 0$ and $x_3 = 7$ to get $x_1 = -5$, and choose $x_1 = 0$ and $x_2 = 5$ to get $x_3 = 6$.

> **Figure: Synthetic division calculation**
>
> Handwritten synthetic division table for dividing the polynomial lambda^3 + 3*lambda^2 + 3*lambda + 1 by (lambda + 1) using root -1. An L-shaped bracket has the divisor root -1 written to the left of the vertical bar. Inside the bracket, the first row lists the coefficients: 1, 3, 3, 1. The second row above the horizontal line shows: 0, -1, -2, -1. Below the horizontal line, the bottom row shows the quotient coefficients and remainder: 1, 2 (written below a crossed-out digit), 1, and 0 (enclosed in a small L-shaped corner bracket to indicate the remainder).

> **Watch out.** Because $\text{rank}(A + I) = 1$, the eigenspace has geometric multiplicity $m_{-1} = 3 - 1 = 2$, so only two of the three listed vectors are linearly independent; also note that the final line writes $\lambda = 7$ instead of $\lambda = -1$ and $R_3 \to -2R_1 + R_3$ instead of $R_3 \to -R_1 + R_3$.

**Answer:** Eigenvalues $\lambda = -1, -1, -1$; eigenvectors $x_1 = \begin{bmatrix} 6 \\ 7 \\ 0 \end{bmatrix}$, $x_2 = \begin{bmatrix} -5 \\ 0 \\ 7 \end{bmatrix}$, and $x_3 = \begin{bmatrix} 0 \\ 5 \\ 6 \end{bmatrix}$.

#### Problem 2: Defective triple root with one eigenvector
**Given:** The matrix $A = \begin{bmatrix} -3 & -7 & -5 \\ 2 & 4 & 3 \\ 1 & 2 & 2 \end{bmatrix}$.
**Find:** The eigenvalues and eigenvectors of $A$.

1. Compute $S_1 = -3 + 4 + 2 = 3$, $S_2 = 2 + 2 - 1 = 3$, and $S_3 = -6 + 7 - 0 = 1$ to form $\lambda^3 - 3\lambda^2 + 3\lambda - 1 = 0$.
2. Rewrite the polynomial as $(\lambda - 1)^3 = 0$ to obtain the triple root $\lambda = 1, 1, 1$ ($M_1 = 3$).
3. Substitute $\lambda = 1$ into $(A - I)x = 0$ to form $\begin{bmatrix} -4 & -7 & -5 \\ 2 & 3 & 3 \\ 1 & 2 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$ and swap Row 1 with Row 3.
4. Apply $R_2 \to -2R_1 + R_2$ and $R_3 \to 4R_1 + R_3$, then $R_3 \to R_2 + R_3$ to reach the echelon matrix $\begin{bmatrix} 1 & 2 & 1 \\ 0 & -1 & 1 \\ 0 & 0 & 0 \end{bmatrix}$.
5. Since the echelon form has rank 2, there is only $3 - 2 = 1$ free variable (defect $\Delta_1 = 3 - 1 = 2$): $-x_2 + x_3 = 0 \implies x_2 = x_3$.
6. Substitute $x_2 = x_3$ into $x_1 + 2x_2 + x_3 = 0$ to get $x_1 = -3x_3$, and set $x_3 = 1$ to find the single independent eigenvector.

**Answer:** Eigenvalues $\lambda = 1, 1, 1$; eigenvector $x = \begin{bmatrix} -3 \\ 1 \\ 1 \end{bmatrix}$.

<!-- page 12 | Matrix Diagonalization and Modal Transformations -->

## Matrix Diagonalization and Modal Transformations
You already know how to compute eigenvalues, find their corresponding eigenvectors, and check whether those eigenvectors form a complete basis. With full sets of eigenvectors in hand, we complete our study by transforming matrices into simple diagonal forms. Multiplying a matrix $A$ by its modal matrix $X$ and its inverse $X^{-1}$ transforms $A$ into a pure diagonal array of its eigenvalues.

### The idea
When an $n \times n$ matrix $A$ has $n$ linearly independent eigenvectors $x_1, x_2, \dots, x_n$, we can package them side by side as columns into a single square matrix called the **modal matrix**, $X = [x_1 \; x_2 \; \dots \; x_n]$. Because $A x_i = \lambda_i x_i$ for each column, multiplying $A$ by $X$ simply scales each column of $X$ by its corresponding eigenvalue: $AX = XD$, where $D$ is the diagonal matrix containing the eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$ on its main diagonal.

Since the eigenvectors are linearly independent, the modal matrix $X$ has full rank and is invertible. Multiplying both sides of $AX = XD$ on the left by $X^{-1}$ gives the **similarity transformation** $D = X^{-1}AX$. In words: to diagonalize a matrix $A$, assemble its independent eigenvectors into columns of $X$, compute $X^{-1}$, and multiply $X^{-1}AX$ to isolate the eigenvalues along the diagonal of $D$.

To find $X^{-1}$, you can either use the adjugate formula $X^{-1} = \frac{\text{adj } X}{|X|}$ or apply **Gauss-Jordan elimination**, where elementary row operations reduce the augmented matrix $[X \mid I]$ to $[I \mid X^{-1}]$. Once $A$ is diagonalized, higher matrix powers become effortless: because middle terms cancel ($X^{-1}XX^{-1} = X^{-1}$), raising $D$ to a power $m$ gives $D^m = X^{-1}A^mX$ for $m = 2, 3, \dots$, where $D^m$ simply raises each diagonal eigenvalue to the $m$-th power.

### Worked example
**Given:** The $2 \times 2$ matrix $A = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}$.
**Find:** The modal matrix $X$, its inverse $X^{-1}$, and the diagonal matrix $D = X^{-1}AX$.

1. Set up the characteristic equation $|A - \lambda I| = \lambda^2 - S_1\lambda + S_2 = 0$ to find the eigenvalues. Here, the trace is $S_1 = 4 + 3 = 7$ and the determinant is $S_2 = |A| = 12 - 2 = 10$, giving $\lambda^2 - 7\lambda + 10 = (\lambda - 5)(\lambda - 2) = 0$, so $\lambda = 5, 2$.
2. Solve $(A - 5I)x = 0$ for $\lambda = 5$ to get the first eigenvector: row-reducing $\begin{bmatrix} -1 & 1 \\ 2 & -2 \end{bmatrix}$ via $R_2 \to 2R_1 + R_2$ gives $-x_1 + x_2 = 0$, so choosing $x_1 = 1$ yields $X_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.
3. Solve $(A - 2I)x = 0$ for $\lambda = 2$ to get the second eigenvector: the system $\begin{bmatrix} 2 & 1 \\ 2 & 1 \end{bmatrix}\begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$ gives $2x_1 + x_2 = 0$, so choosing $x_1 = 1$ yields $x_2 = -2$ and $X_2 = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$.
4. Assemble the eigenvectors as columns to form the modal matrix $X = \begin{bmatrix} 1 & 1 \\ 1 & -2 \end{bmatrix}$.
5. Compute $X^{-1} = \frac{\text{adj } X}{|X|}$ so we can apply the similarity transformation: the determinant is $|X| = -2 - 1 = -3$, and swapping diagonal entries while negating off-diagonal entries gives $\text{adj } X = \begin{bmatrix} -2 & -1 \\ -1 & 1 \end{bmatrix}$, so $X^{-1} = \frac{1}{-3}\begin{bmatrix} -2 & -1 \\ -1 & 1 \end{bmatrix}$.
6. Multiply $D = X^{-1}AX$ to verify diagonalization: first compute $X^{-1}A = \frac{1}{-3}\begin{bmatrix} -2 & -1 \\ -1 & 1 \end{bmatrix}\begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix} = \frac{1}{-3}\begin{bmatrix} -10 & -5 \\ -2 & 2 \end{bmatrix}$, then multiply on the right by $X = \begin{bmatrix} 1 & 1 \\ 1 & -2 \end{bmatrix}$ to get $-\frac{1}{3}\begin{bmatrix} -15 & 0 \\ 0 & -6 \end{bmatrix} = \begin{bmatrix} 5 & 0 \\ 0 & 2 \end{bmatrix}$.

**Answer:** $X = \begin{bmatrix} 1 & 1 \\ 1 & -2 \end{bmatrix}$, $X^{-1} = -\frac{1}{3}\begin{bmatrix} -2 & -1 \\ -1 & 1 \end{bmatrix}$, and $D = \begin{bmatrix} 5 & 0 \\ 0 & 2 \end{bmatrix}$.

### More problems
#### Problem 2: Diagonalizing a 3x3 matrix
**Given:** The $3 \times 3$ matrix $A = \begin{bmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ -4 & 4 & 3 \end{bmatrix}$.
**Find:** The modal matrix $X$, its inverse $X^{-1}$, and the diagonal matrix $D = X^{-1}AX$.

1. Form the characteristic equation $\lambda^3 - S_1\lambda^2 + S_2\lambda - S_3 = 0$ with $S_1 = 6$, $S_2 = 11$, and $S_3 = |A| = 6$.
2. Factor $\lambda^3 - 6\lambda^2 + 11\lambda - 6 = (\lambda - 1)(\lambda - 2)(\lambda - 3) = 0$ via synthetic division at $\lambda = 1$ to get $\lambda = 1, 2, 3$.
3. For $\lambda = 1$, solve $\begin{bmatrix} 0 & 1 & 1 \\ 0 & 1 & 1 \\ -4 & 4 & 2 \end{bmatrix}x = 0$: $x_2 = -x_3$ and $4x_1 = -2x_3$, so $x_3 = 2$ gives $X_1 = \begin{bmatrix} -1 \\ -2 \\ 2 \end{bmatrix}$.
4. For $\lambda = 2$, reduce $\begin{bmatrix} -1 & 1 & 1 \\ 0 & 0 & 1 \\ -4 & 4 & 1 \end{bmatrix}$ to get $x_3 = 0$ and $x_1 = x_2$, so $x_1 = 1$ gives $X_2 = \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix}$.
5. For $\lambda = 3$, reduce $\begin{bmatrix} -2 & 1 & 1 \\ 0 & -1 & 1 \\ -4 & 4 & 0 \end{bmatrix}$ to get $x_1 = x_2 = x_3$, so $x_1 = 1$ gives $X_3 = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$.
6. Assemble $X = \begin{bmatrix} -1 & 1 & 1 \\ -2 & 1 & 1 \\ 2 & 0 & 1 \end{bmatrix}$, where $|X| = -1 + 4 - 2 = 1$.
7. Row-reduce $[X \mid I]$ via Gauss-Jordan elimination (or compute $\frac{\text{adj } X}{|X|}$) to obtain $X^{-1} = \begin{bmatrix} 1 & -1 & 0 \\ 4 & -3 & -1 \\ -2 & 2 & 1 \end{bmatrix}$.
8. Multiply $D = X^{-1}AX = \begin{bmatrix} 1 & -1 & 0 \\ 8 & -6 & -2 \\ -6 & 6 & 3 \end{bmatrix}\begin{bmatrix} -1 & 1 & 1 \\ -2 & 1 & 1 \\ 2 & 0 & 1 \end{bmatrix}$ to produce the diagonal matrix of eigenvalues.

> **Watch out.** When solving $4x_1 = -4$ for $\lambda = 1$, do not drop the negative sign: $x_1 = -1$ (matching the first column of $X$), and remember to write $X^{-1}AX$ rather than $X^TAX$ because $X$ is not orthogonal.

**Answer:** $X = \begin{bmatrix} -1 & 1 & 1 \\ -2 & 1 & 1 \\ 2 & 0 & 1 \end{bmatrix}$, $X^{-1} = \begin{bmatrix} 1 & -1 & 0 \\ 4 & -3 & -1 \\ -2 & 2 & 1 \end{bmatrix}$, and $D = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{bmatrix}$.
