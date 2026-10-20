<!-- page 1 | About this notebook -->

## Orthographic Projection of Straight Lines

This study notebook covers the graphical methods used in engineering drawing to project straight lines inclined to both reference planes across all four quadrants. Learners will master the line rotation method, the plane rotation (trapezoidal) method, trace determination, midpoint and profile-plane constructions, and real-world 3D spatial applications.

**Before you start:** Fundamentals of orthographic projection and reference planes (HP, VP, and XY reference line); Projection of points in all four quadrants (above/below HP, in front of/behind VP); Basic geometric constructions using compass, protractor, and engineering scales.

**In this notebook**

1. Foundations of Line Projections and Traces
2. Line Rotation Method: True Length, Inclinations, and Endpoint Loci
3. Line Rotation Method: Working from Apparent Views and Apparent Angles
4. Plane Rotation (Trapezoidal) Method and End Projectors
5. Midpoint Problems and Special Endpoint Configurations
6. Trace Problems: Projector Distances and Plane Rotation
7. Trace Problems: Combined Views, Inclinations, and Coincident Traces
8. Engineering Applications of Line Projections

<!-- page 2 | Foundations of Line Projections and Traces -->

## Foundations of Line Projections and Traces

### Idea in brief

When a straight line in space is inclined to a flat viewing plane, its shadow or projection on that plane looks shorter than the line really is, and its angle looks steeper than the real angle. In engineering drawing, we capture a three-dimensional line on a flat sheet of paper using two perpendicular reference planes: the Vertical Plane (VP) and the Horizontal Plane (HP). By understanding the exact geometric relationship between the real line in space and its two foreshortened views, you can find the true length, true angles, and exact spatial position of any structural member, pipe, or cable.

> **Key idea.** A projection shows the true length of a line if and only if the line is parallel to that plane of projection.

### Key terms

- **Reference Planes ($\text{VP}$ and $\text{HP}$):** Two mutually perpendicular planes in space—the Vertical Plane ($\text{VP}$) and the Horizontal Plane ($\text{HP}$)—onto which objects are orthographically projected.
- **Reference Line ($XY$):** The line of intersection between the $\text{VP}$ and the $\text{HP}$. On drawing paper, it is drawn as a horizontal baseline.
- **Front View ($\text{FV}$) or Elevation ($a'b'$):** The orthographic projection of a line $AB$ onto the $\text{VP}$. Lowercase letters with primes ($a'$, $b'$) denote endpoints in the front view.
- **Top View ($\text{TV}$) or Plan ($ab$):** The orthographic projection of a line $AB$ onto the $\text{HP}$, rotated $90^\circ$ downward about $XY$ to lie flat on the same sheet as the $\text{VP}$. Lowercase letters without primes ($a$, $b$) denote endpoints in the top view.
- **True Length ($\text{TL}$):** The actual, unforeshortened physical length of the line $AB$ in three-dimensional space.
- **Apparent Lengths ($\text{FV}$ and $\text{TV}$):** The foreshortened lengths of the projections $a'b'$ and $ab$ measured on the drawing.
- **True Inclinations ($\theta$ and $\phi$):** The actual acute angles the line $AB$ makes in 3D space with the $\text{HP}$ (denoted $\theta$) and with the $\text{VP}$ (denoted $\phi$).
- **Apparent Inclinations ($\alpha$ and $\beta$):** The projected angles measured on the drawing paper that the front view $a'b'$ makes with $XY$ (denoted $\alpha$) and the top view $ab$ makes with $XY$ (denoted $\beta$).
- **Locus of an Endpoint:** A horizontal line drawn parallel to $XY$ through a projected endpoint ($a'$, $b'$, $a$, or $b$). It represents the constant height (distance from $\text{HP}$) or constant depth (distance from $\text{VP}$) of that point as the line rotates.
- **End Projectors ($\text{EP}$):** Vertical construction lines perpendicular to $XY$ that connect a point's front view and top view (e.g., the line joining $a'$ and $a$, and the line joining $b'$ and $b$). The horizontal distance between the two end projectors $a'a$ and $b'b$ is denoted $d$ or $\text{EP}$.
- **Horizontal Trace ($\text{HT}$):** The exact point where the line $AB$ (extended if necessary) pierces the Horizontal Plane ($\text{HP}$). Its front view lies on $XY$ and is denoted $h'$.
- **Vertical Trace ($\text{VT}$):** The exact point where the line $AB$ (extended if necessary) pierces the Vertical Plane ($\text{VP}$). Its top view lies on $XY$ and is denoted $v$.

### Rules and formulas

$$\text{FV} = \text{TL} \cos\phi$$
The length of the front view ($a'b'$) is foreshortened by the cosine of the true inclination with the $\text{VP}$.

$$\text{TV} = \text{TL} \cos\theta$$
The length of the top view ($ab$) is foreshortened by the cosine of the true inclination with the $\text{HP}$.

$$\Delta y_{\text{HP}} = \text{TL} \sin\theta = \text{FV} \sin\alpha$$
The vertical distance between the loci of $a'$ and $b'$ equals the difference in the endpoints' distances from the $\text{HP}$.

$$\Delta y_{\text{VP}} = \text{TL} \sin\phi = \text{TV} \sin\beta$$
The vertical distance between the loci of $a$ and $b$ equals the difference in the endpoints' distances from the $\text{VP}$.

$$\alpha \ge \theta \quad \text{and} \quad \beta \ge \phi$$
Apparent inclinations measured on the drawing are always greater than or equal to the corresponding true inclinations (equality holds only when the line is parallel to one of the planes).

$$\theta + \phi \le 90^\circ$$
The sum of the true inclinations with the $\text{HP}$ and $\text{VP}$ can never exceed $90^\circ$. When $\theta + \phi = 90^\circ$, the line lies in a profile plane perpendicular to $XY$, and both $\alpha = 90^\circ$ and $\beta = 90^\circ$.

$$\text{Collinearity for HT: } a',\, b',\, h' \text{ are collinear, and } a,\, b,\, \text{HT} \text{ are collinear.}$$
The front view $a'b'$ meets $XY$ at $h'$; dropping a perpendicular from $h'$ to meet the extended top view $ab$ locates the Horizontal Trace ($\text{HT}$).

$$\text{Collinearity for VT: } a,\, b,\, v \text{ are collinear, and } a',\, b',\, \text{VT} \text{ are collinear.}$$
The top view $ab$ meets $XY$ at $v$; erecting a perpendicular from $v$ to meet the extended front view $a'b'$ locates the Vertical Trace ($\text{VT}$).

> **Key idea.** The points $a$, $b$, $v$, and $\text{HT}$ always lie on the exact same straight line (the extended top view). Similarly, the points $a'$, $b'$, $h'$, and $\text{VT}$ always lie on the exact same straight line (the extended front view).

### Method

#### 1. The Line Rotation Method
This method imagines pivoting the line in space about one of its endpoints (say, $A$) like the surface of a cone until it becomes parallel to one of the reference planes, while the other endpoint ($B$) stays at a constant distance from the other plane (moving along its locus).

1. **Establish the starting endpoint:** Draw the reference line $XY$ and plot the front view $a'$ and top view $a$ on the same vertical projector according to the given distances from the $\text{HP}$ and $\text{VP}$.
2. **Rotate parallel to the $\text{VP}$ (to link $\text{TV}$ with $\text{TL}$ and $\theta$):**
   - If $\text{TL}$ and $\theta$ are known: Draw $a'b_1'$ of length $\text{TL}$ at angle $\theta$ to $XY$. Draw a horizontal line through $b_1'$ to establish the **Locus of $b'$**. Project $b_1'$ straight down to meet the horizontal line through $a$ at $b_1$; the segment $ab_1$ equals the top view length ($\text{TV}$).
   - If the top view $ab$ is known: With center $a$ and radius $ab$, swing an arc to meet the horizontal line through $a$ at $b_1$. Project $b_1$ straight up to meet the **Locus of $b'$** at $b_1'$. The line $a'b_1'$ gives the True Length ($\text{TL}$) and true angle $\theta$ with $XY$.
3. **Rotate parallel to the $\text{HP}$ (to link $\text{FV}$ with $\text{TL}$ and $\phi$):**
   - If $\text{TL}$ and $\phi$ are known: Draw $ab_2$ of length $\text{TL}$ at angle $\phi$ to $XY$. Draw a horizontal line through $b_2$ to establish the **Locus of $b$**. Project $b_2$ straight up to meet the horizontal line through $a'$ at $b_2'$; the segment $a'b_2'$ equals the front view length ($\text{FV}$).
   - If the front view $a'b'$ is known: With center $a'$ and radius $a'b'$, swing an arc to meet the horizontal line through $a'$ at $b_2'$. Project $b_2'$ straight down to meet the **Locus of $b$** at $b_2$. The line $ab_2$ gives the True Length ($\text{TL}$) and true angle $\phi$ with $XY$.
4. **Complete the views:** Swing the apparent lengths ($\text{FV} = a'b_2'$ and $\text{TV} = ab_1$) into their respective loci to locate $b'$ and $b$ on a shared vertical end projector.

#### 2. The Plane Rotation (Trapezoidal) Method
This method folds the projecting plane (the imaginary 3D trapezoid formed by the line $AB$, its projection, and the two perpendicular projectors from $A$ and $B$ to the reference plane) by $90^\circ$ directly around the projection line until it lies flat on the drawing paper.

1. **To find $\text{TL}$ and $\theta$ from the Top View ($ab$):**
   - Measure the perpendicular distances of $a'$ and $b'$ from $XY$ (which are the heights of $A$ and $B$ from the $\text{HP}$).
   - At $a$ and $b$, erect perpendiculars to the top view line $ab$ of lengths equal to the distances of $a'$ and $b'$ from $XY$ respectively. (If $a'$ and $b'$ are on the same side of $XY$, erect both perpendiculars on the same side of $ab$; if on opposite sides, erect them on opposite sides of $ab$.)
   - Join the free ends $A_1$ and $B_1$ of these perpendiculars. The line $A_1B_1$ is the True Length ($\text{TL}$), and the acute angle between $A_1B_1$ and $ab$ is the true inclination $\theta$.
2. **To find $\text{TL}$ and $\phi$ from the Front View ($a'b'$):**
   - Measure the perpendicular distances of $a$ and $b$ from $XY$ (the depths of $A$ and $B$ from the $\text{VP}$).
   - At $a'$ and $b'$, erect perpendiculars to the front view line $a'b'$ equal to the distances of $a$ and $b$ from $XY$ respectively.
   - Join the free ends $A_2$ and $B_2$. The line $A_2B_2$ is the True Length ($\text{TL}$), and the acute angle between $A_2B_2$ and $a'b'$ is the true inclination $\phi$.

#### 3. Locating the Traces ($\text{HT}$ and $\text{VT}$)
1. **To locate the Horizontal Trace ($\text{HT}$):**
   - Extend the front view $a'b'$ until it intersects the reference line $XY$. Label this intersection point $h'$.
   - From $h'$, draw a vertical projector line perpendicular to $XY$ (either upward or downward).
   - Extend the top view $ab$ until it intersects this vertical projector from $h'$. Mark the intersection as $\text{HT}$.
2. **To locate the Vertical Trace ($\text{VT}$):**
   - Extend the top view $ab$ until it intersects the reference line $XY$. Label this intersection point $v$.
   - From $v$, draw a vertical projector line perpendicular to $XY$.
   - Extend the front view $a'b'$ until it intersects this vertical projector from $v$. Mark the intersection as $\text{VT}$.

### Common mistakes

- **Swapping $\text{HP}$ and $\text{VP}$ distances relative to $XY$:** The distance of a point from the $\text{HP}$ is a vertical height, so it is always seen in the **front view** ($a'$, $b'$). The distance of a point from the $\text{VP}$ is a horizontal depth, so it is always seen in the **top view** ($a$, $b$). Never plot distance from $\text{HP}$ in the top view.
- **Setting apparent angles equal to true angles:** Drawing the final front view $a'b'$ directly at angle $\theta$ or the top view $ab$ directly at angle $\phi$ is wrong whenever the line is inclined to both planes. True angles $\theta$ and $\phi$ belong only to the rotated true-length lines ($a'b_1'$ and $ab_2$).
- **Swinging arcs from the wrong center or to the wrong line:** When finding the apparent length $\text{TV}$ from $a'b_1'$, you must drop $b_1'$ to the horizontal line passing through **$a$** (not $XY$), and then swing the arc centered at **$a$** to the locus of $b$.
- **Misapplying the collinearity rule for traces:** Students often project from where $a'b'$ hits $XY$ ($h'$) back to $a'b'$ instead of crossing over to $ab$. Remember that $h'$ is on $a'b'$, so its perpendicular must go to the *other* view ($ab$) to find $\text{HT}$.
- **Erecting trapezoid perpendiculars on the wrong side:** In the plane rotation method, if a line crosses $XY$ (meaning one end is above $\text{HP}$ and the other is below $\text{HP}$), the perpendiculars at $a$ and $b$ must be drawn on *opposite* sides of $ab$. Drawing them on the same side gives a false inclination and false length.

### Quick recall

- **True Length ($\text{TL}$)** is always longer than or equal to both the Front View ($\text{FV}$) and Top View ($\text{TV}$).
- **Apparent inclinations** ($\alpha$, $\beta$) are always steeper (larger) than **true inclinations** ($\theta$, $\phi$).
- **End projectors** ($a'a$ and $b'b$) are always strictly perpendicular to $XY$; both views of the same endpoint must align vertically.
- **Loci lines** are always strictly parallel to $XY$.
- **Collinearity:** $a', b', h', \text{VT}$ lie on one straight line (extended $\text{FV}$); $a, b, v, \text{HT}$ lie on another straight line (extended $\text{TV}$).
- **Projector pairs for traces:** $h'$ (on $XY$) and $\text{HT}$ share a vertical projector; $v$ (on $XY$) and $\text{VT}$ share a vertical projector.

<!-- page 3 | Line Rotation Method: True Length, Inclinations, and Endpoint Loci -->

## Line Rotation Method: True Length, Inclinations, and Endpoint Loci

### Idea in brief
When a straight line is inclined to both the Horizontal Plane (HP) and the Vertical Plane (VP), neither its front view nor its top view shows its true length or true inclinations. Both views appear foreshortened and tilted at steeper apparent angles. The **line rotation method** solves this by temporarily rotating the line in space until it is parallel to one reference plane at a time. While the free end rotates at a constant distance from the reference plane, its projection traces a straight horizontal line called a **locus**. By combining the true-length constructions from both rotations with these endpoint loci, we can swing the foreshortened apparent lengths into their exact final positions across any quadrant.

### Key terms
- **True Length ($TL$):** The actual spatial length of the straight line ($AB = a'b_1' = ab_2$).
- **True Inclination with HP ($\theta$):** The actual angle the line makes with the Horizontal Plane, visible in the front view when the line is rotated parallel to the VP.
- **True Inclination with VP ($\phi$ or $\varphi$):** The actual angle the line makes with the Vertical Plane, visible in the top view when the line is rotated parallel to the HP.
- **Apparent Lengths ($a'b'$ and $ab$):** The foreshortened lengths of the front view ($a'b'$) and top view ($ab$).
- **Apparent Inclinations ($\alpha$ and $\beta$):** The projected angles made by the front view ($a'b'$) and top view ($ab$) with the $XY$ reference line. Always, $\alpha > \theta$ and $\beta > \phi$.
- **Locus of an Endpoint:** A horizontal path parallel to the $XY$ line representing the constant height (above/below HP) or constant depth (in front of/behind VP) of an endpoint during rotation.
- **Horizontal Trace ($HT$):** The point where the line (or its extension) pierces the HP.
- **Vertical Trace ($VT$):** The point where the line (or its extension) pierces the VP.

### Rules and formulas

$$a'b_1' = ab_2 = TL$$
True length is projected on the VP when the line is parallel to the VP ($a'b_1'$), and on the HP when the line is parallel to the HP ($ab_2$).

$$ab = ab_1 = TL \cos\theta$$
The apparent top-view length equals the horizontal projection of the line when rotated parallel to the VP.

$$a'b' = a'b_2' = TL \cos\phi$$
The apparent front-view length equals the frontal projection of the line when rotated parallel to the HP.

$$\Delta z = |z_B - z_A| = TL \sin\theta$$
The vertical distance between the front-view loci of ends $A$ and $B$ depends only on true length and $\theta$.

$$\Delta y = |y_B - y_A| = TL \sin\phi$$
The vertical distance between the top-view loci of ends $A$ and $B$ on the drawing sheet depends only on true length and $\phi$.

> **Key idea.** The endpoints of the final front view ($b'$) and final top view ($b$) must always lie on the same vertical projector perpendicular to $XY$, and each must rest on its respective horizontal locus line.

### Method

#### Case A: Given One Endpoint, True Length ($TL$), and True Inclinations ($\theta, \phi$)
1. **Plot the known end:** Draw the reference line $XY$. Locate $a'$ (using its height above or below HP) and $a$ (using its distance in front of or behind VP) on a single vertical projector.
2. **Rotate parallel to VP (find Locus of $b'$ and length $ab_1$):** From $a'$, draw a line $a'b_1'$ of length $TL$ at angle $\theta$ to $XY$ (angling toward the quadrant specified for end $B$). Draw a horizontal line through $b_1'$ to establish the **Locus of $b'$**. Project $b_1'$ vertically to meet the horizontal line through $a$ at $b_1$. The segment $ab_1$ is the apparent top-view length ($ab$).
3. **Rotate parallel to HP (find Locus of $b$ and length $a'b_2'$):** From $a$, draw a line $ab_2$ of length $TL$ at angle $\phi$ to $XY$ (angling toward the quadrant specified for end $B$). Draw a horizontal line through $b_2$ to establish the **Locus of $b$**. Project $b_2$ vertically to meet the horizontal line through $a'$ at $b_2'$. The segment $a'b_2'$ is the apparent front-view length ($a'b'$).
4. **Swing arcs to find final views:** With center $a'$ and radius $a'b_2'$, strike an arc to cut the Locus of $b'$ at $b'$. With center $a$ and radius $ab_1$, strike an arc to cut the Locus of $b$ at $b$. Join $a'b'$ and $ab$. Verify that $b'$ and $b$ align on the same vertical projector.
5. **Locate Traces ($HT$ and $VT$):**
   - Extend the front view $a'b'$ to meet $XY$ at $h'$. Draw a vertical projector from $h'$ to intersect the extended top view $ab$ at the **Horizontal Trace ($HT$)**.
   - Extend the top view $ab$ to meet $XY$ at $v$. Draw a vertical projector from $v$ to intersect the extended front view $a'b'$ at the **Vertical Trace ($VT$)**.

#### Case B: Given One Endpoint, Loci of the Second Endpoint, and True Length ($TL$)
1. **Plot the known end and second-end loci:** Mark $a'$ and $a$ on a vertical projector. Draw the horizontal **Locus of $b'$** at the given HP distance of $B$, and the horizontal **Locus of $b$** at the given VP distance of $B$.
2. **Cut loci with True Length:** With center $a'$ and radius $TL$, strike an arc to cut the Locus of $b'$ at $b_1'$. Measure the angle of $a'b_1'$ with the horizontal to find $\theta$. With center $a$ and radius $TL$, strike an arc to cut the Locus of $b$ at $b_2$. Measure the angle of $ab_2$ with the horizontal to find $\phi$.
3. **Project to get apparent lengths and swing arcs:** Project $b_1'$ vertically to the horizontal line through $a$ to get $b_1$ (giving radius $ab_1$), and project $b_2$ vertically to the horizontal line through $a'$ to get $b_2'$ (giving radius $a'b_2'$). Swing arcs of radius $ab_1$ and $a'b_2'$ onto the respective loci to locate $b$ and $b'$.

> **Key idea.** When a line crosses into the Second Quadrant ($B$ is above HP and behind VP), both the Locus of $b'$ and the Locus of $b$ lie **above** the $XY$ line. In the Third Quadrant ($A$ and $B$ below HP and behind VP), the front view lies **below** $XY$ and the top view lies **above** $XY$.

### Worked examples

#### Example 1: Line in the First Quadrant Given True Length and Inclinations (Q1)
**Problem:** Draw the projection of the line $AB$ $90\text{ mm}$ inclined $30^\circ$ to HP and $40^\circ$ to VP. The end $A$ of the line is $20\text{ mm}$ above the HP and $30\text{ mm}$ in front VP. Also locate the traces.

**Given Data:**
- [1] $AB = 90\text{ mm}$
- [2] $\theta = 30^\circ$
- [3] $\phi = 40^\circ$
- [4] $A$: $20\text{ mm}$ aHP ($20\text{ mm}$ above HP)
- [5] $A$: $30\text{ mm}$ fVP ($30\text{ mm}$ in front of VP)

**Step-by-step Solution:**
1. **Locate end $A$:** Draw the reference line $XY$. Since $A$ is in the first quadrant, mark $a'$ $20\text{ mm}$ above $XY$ and $a$ $30\text{ mm}$ below $XY$ on the same vertical projector. Draw light horizontal construction lines through $a'$ and $a$.
2. **Establish Locus of $b'$ and apparent top-view length ($ab_1$):** From $a'$, draw true-length line $a'b_1' = 90\text{ mm}$ inclined at $\theta = 30^\circ$ upwards from the horizontal. Through $b_1'$, draw a horizontal line labeled **Locus of $b'$**. Drop a vertical projector from $b_1'$ to meet the horizontal line through $a$ at $b_1$. Now $ab_1 = 90 \cos 30^\circ \approx 78\text{ mm}$.
3. **Establish Locus of $b$ and apparent front-view length ($a'b_2'$):** From $a$, draw true-length line $ab_2 = 90\text{ mm}$ inclined at $\phi = 40^\circ$ downwards from the horizontal. Through $b_2$, draw a horizontal line labeled **Locus of $b$**. Raise a vertical projector from $b_2$ to meet the horizontal line through $a'$ at $b_2'$. Now $a'b_2' = 90 \cos 40^\circ \approx 69\text{ mm}$.
4. **Construct final views ($a'b'$ and $ab$):** With center $a'$ and radius $a'b_2'$, draw an arc intersecting the Locus of $b'$ at $b'$. With center $a$ and radius $ab_1$, draw an arc intersecting the Locus of $b$ at $b$. Darken the front view $a'b'$ and top view $ab$.
5. **Locate Traces:** Extend $b'a'$ backwards to meet $XY$ at $h'$, and project vertically from $h'$ to meet the extended top view $ba$ at $HT$. Similarly, extend $ba$ backwards to meet $XY$ at $v$, and project vertically from $v$ to meet the extended front view $b'a'$ at $VT$.

```line-projection
{
  "A": {
    "y": 30,
    "z": 20
  },
  "length": 90,
  "theta": 30,
  "phi": 40,
  "printed": {
    "fvLength": 69,
    "tvLength": 78
  }
}
```

**Final Answer:**
- Front view length $a'b' = 69\text{ mm}$
- Top view length $ab = 78\text{ mm}$

---

#### Example 2: Line in the First Quadrant Given Endpoint Loci and True Length (Q2)
**Problem:** A line $AB$ measuring $75\text{ mm}$ has its end $A$, $20\text{ mm}$ in front of VP and $25\text{ mm}$ above HP and other end $B$ is $65\text{ mm}$ in front of VP and $50\text{ mm}$ above HP. Draw the projections of the line and find the inclinations of the line with both the reference planes of projection. Also find the length of top and front views and locate its traces.

**Given Data:**
- [1] $AB = 75\text{ mm}$
- [2] $A$: $25\text{ mm}$ aHP
- [3] $A$: $20\text{ mm}$ fVP
- [4] $B$: $50\text{ mm}$ aHP
- [5] $B$: $65\text{ mm}$ fVP

**Step-by-step Solution:**
1. **Plot end $A$ and Loci of $B$:** Draw $XY$. Mark $a'$ $25\text{ mm}$ above $XY$ and $a$ $20\text{ mm}$ below $XY$ on a common vertical projector. Draw the horizontal **Locus of $b'$** $50\text{ mm}$ above $XY$, and the horizontal **Locus of $b$** $65\text{ mm}$ below $XY$.
2. **Determine true inclinations ($\theta$ and $\phi$):**
   - Set compass to $TL = 75\text{ mm}$. With center $a'$, strike an arc cutting the Locus of $b'$ at $b_1'$. Join $a'b_1'$ and measure its angle with the horizontal through $a'$ to get $\theta$.
   - With center $a$ and radius $75\text{ mm}$, strike an arc cutting the Locus of $b$ at $b_2$. Join $ab_2$ and measure its angle with the horizontal through $a$ to get $\phi$.
3. **Project and rotate for apparent views:**
   - Drop a vertical projector from $b_1'$ to the horizontal line through $a$ to locate $b_1$. With center $a$ and radius $ab_1$, swing an arc to cut the Locus of $b$ at $b$.
   - Raise a vertical projector from $b_2$ to the horizontal line through $a'$ to locate $b_2'$. With center $a'$ and radius $a'b_2'$, swing an arc to cut the Locus of $b'$ at $b'$.
   - Join $a'b'$ and $ab$.
4. **Locate Traces ($HT$ and $VT$):** Extend $b'a'$ to intersect $XY$ at $h'$, and project vertically to meet the extended line $ba$ at $HT$. Extend $ba$ to intersect $XY$ at $v$, and project vertically to meet the extended line $b'a'$ at $VT$. Measure the projector distances $v\text{-}VT$ and $h'\text{-}HT$.

```line-projection
{
  "A": {
    "y": 20,
    "z": 25
  },
  "length": 75,
  "B": {
    "y": 65,
    "z": 50
  },
  "printed": {
    "fvLength": 47,
    "tvLength": 60,
    "theta": 23,
    "phi": 44
  }
}
```

> **Watch out.** The printed answers for this problem ($a'b' = 47\text{ mm}$, $ab = 60\text{ mm}$, $\theta = 23^\circ$, $\phi = 44^\circ$) do not match the exact geometry of the given coordinates ($A: 25\text{ aHP}, 20\text{ fVP}$; $B: 50\text{ aHP}, 65\text{ fVP}$; $TL = 75\text{ mm}$). By exact calculation, $\Delta z = 50 - 25 = 25\text{ mm}$ gives $\theta = \arcsin(25/75) = 19.5^\circ$ and $ab = 75\cos(19.5^\circ) = 70.7\text{ mm}$, while $\Delta y = 65 - 20 = 45\text{ mm}$ gives $\phi = \arcsin(45/75) = 36.9^\circ$ and $a'b' = 75\cos(36.9^\circ) = 60.0\text{ mm}$. Both sets of values are noted here so you can check your work against either standard.

**Final Answer (Printed):**
- [1] $a'b' = 47\text{ mm}$
- [2] $ab = 60\text{ mm}$
- [3] $v\text{-}VT = 14\text{ mm}$
- [4] $h'\text{-}HT = 24\text{ mm}$
- [5] $\theta = 23^\circ$
- [6] $\phi = 44^\circ$

---

#### Example 3: Line Crossing from First to Second Quadrant Given Loci (Q3)
**Problem:** A line $AB$ $100\text{ mm}$ long has its end $A$ in the first quadrant, $25\text{ mm}$ from both HP and VP and the other end $B$ in the second quadrant $50\text{ mm}$ from both HP and VP. Draw its projections and determine its traces and inclinations to HP and VP.

**Given Data:**
- [1] $AB = 100\text{ mm}$
- [2] $A$: $25\text{ mm}$ aHP
- [3] $A$: $25\text{ mm}$ fVP
- [4] $B$: $50\text{ mm}$ aHP
- [5] $B$: $50\text{ mm}$ bVP ($50\text{ mm}$ behind VP)

**Step-by-step Solution:**
1. **Plot end $A$ and Loci of $B$ across quadrants:** Draw $XY$. Since $A$ is in the first quadrant, mark $a'$ $25\text{ mm}$ above $XY$ and $a$ $25\text{ mm}$ below $XY$. Since $B$ is in the second quadrant ($50\text{ mm}$ above HP and $50\text{ mm}$ behind VP), **both** the Locus of $b'$ and the Locus of $b$ lie $50\text{ mm}$ **above** $XY$ (coinciding as a single horizontal line $50\text{ mm}$ above $XY$).
2. **Find $\theta$ and apparent top-view length $ab_1$:** With center $a'$ and radius $TL = 100\text{ mm}$, strike an arc cutting the Locus of $b'$ ($50\text{ mm}$ above $XY$) at $b_1'$. Measure the angle of $a'b_1'$ with the horizontal through $a'$ to find $\theta = \arcsin((50 - 25)/100) = 14^\circ$. Drop a vertical projector from $b_1'$ to the horizontal line through $a$ ($25\text{ mm}$ below $XY$) to get $b_1$. Thus $ab_1 = 97\text{ mm}$.
3. **Find $\phi$ and apparent front-view length $a'b_2'$:** With center $a$ ($25\text{ mm}$ below $XY$) and radius $TL = 100\text{ mm}$, strike an arc upwards across $XY$ to cut the Locus of $b$ ($50\text{ mm}$ above $XY$) at $b_2$. Measure the angle of $ab_2$ with the horizontal through $a$ to find $\varphi = \arcsin((50 + 25)/100) = 49^\circ$. Drop a vertical projector from $b_2$ to the horizontal line through $a'$ ($25\text{ mm}$ above $XY$) to get $b_2'$. Thus $a'b_2' = 66\text{ mm}$.
4. **Swing arcs to complete views:** With center $a'$ and radius $a'b_2' = 66\text{ mm}$, cut the Locus of $b'$ at $b'$. With center $a$ and radius $ab_1 = 97\text{ mm}$, cut the Locus of $b$ at $b$ (since both loci are at the same height, $b'$ and $b$ coincide on the vertical projector).
5. **Locate Traces:** Where the top view $ab$ crosses $XY$ directly gives $v$; project vertically from $v$ to $a'b'$ to locate $VT$. Extend $b'a'$ downwards to meet $XY$ at $h'$, and project vertically to the extended line $ba$ to locate $HT$.

```line-projection
{
  "A": {
    "y": 25,
    "z": 25
  },
  "length": 100,
  "B": {
    "y": -50,
    "z": 50
  }
}
```

**Final Answer:**
- [1] $a'b' = 66\text{ mm}$
- [2] $ab = 97\text{ mm}$
- [3] $\theta = 14^\circ$
- [4] $\varphi = 49^\circ$

---

#### Example 4: Line Crossing from First to Second Quadrant Given Inclinations (Q5 / Problem 6)
**Problem:** One end of the line $AB$, $100\text{ mm}$ long, is $20\text{ mm}$ above HP and $25\text{ mm}$ in front of VP. The line is inclined $30^\circ$ to HP and $45^\circ$ to VP. Draw the projections of the line if **$A$ lies in the first quadrant and $B$ lies in the second quadrant.** Also indicate the traces of the line.

**Given Data:**
- [1] $AB = 100\text{ mm}$
- [2] $\theta = 30^\circ$
- [3] $\phi = 45^\circ$
- [4] $A$: $20\text{ mm}$ aHP
- [5] $A$: $25\text{ mm}$ fVP

**Step-by-step Solution:**
1. **Step 5.1 — Locate $A$ and rotate parallel to VP:** Draw $XY$, mark $a'$ $20\text{ mm}$ above $XY$ and $a$ $25\text{ mm}$ below $XY$. Since $B$ is in the second quadrant (above HP), draw $a'b_1' = 100\text{ mm}$ inclined upwards at $\theta = 30^\circ$ from $a'$. Project $b_1'$ vertically down to the horizontal line through $a$ to obtain $b_1$ and apparent top-view length $ab_1$.

> **Figure: Projection of line AB step 5.1**
>
> Step 5.1 of the projection of a straight line AB. A horizontal reference line is labelled x at the left end and y at the right end. A vertical projector connects point a' (20 mm above xy) and point a (25 mm below xy), with vertical dimension arrows labelled 20 and 25 to the left of the projector. From a', a horizontal line is drawn to the right, and a line segment a'b1' of length 100 mm is drawn inclined at 30° above the horizontal, locating b1' on a horizontal locus line. From b1', a vertical projector with a downward arrow drops down to meet the horizontal line drawn to the right from a, locating point b1. The segment ab1 is drawn as a solid horizontal line. Beside the drawing are two boxes and a note: GIVEN box containing [1] AB - 100mm, [2] A - 20 aHP, [3] A - 25 fVP, [4] θ - 30°, [5] ϕ - 45°; ANSWERS box containing [1] a'b' - 70mm, [2] ab - 86mm, [3] v-VT - 38mm, [4] h'-HT - 53mm; and text below reading SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. **Step 5.2 — Rotate parallel to HP into the Second Quadrant:** Because $B$ lies in the second quadrant (behind VP), its top view must move **above** $XY$. From $a$, draw true-length line $ab_2 = 100\text{ mm}$ inclined **upwards** at $\phi = 45^\circ$ to the horizontal line $ab_1$, crossing above $XY$.

> **Figure: Projection of line AB step 5.2**
>
> Step 5.2 of the projection of a straight line AB, continuing from step 5.1. On top of the construction of step 5.1 (xy line, a' 20 mm above xy, a 25 mm below xy, true length line a'b1' = 100 mm at 30° to the horizontal, vertical projector from b1' to b1, horizontal segment ab1), a second true-length line ab2 of length 100 mm is drawn from a inclined at 45° above the horizontal line ab1. This line ab2 crosses the xy line at a point labelled v and ends at b2 above the xy line, where a horizontal locus line is drawn through b2. Beside the drawing are the GIVEN box ([1] AB - 100mm, [2] A - 20 aHP, [3] A - 25 fVP, [4] θ - 30°, [5] ϕ - 45°), the ANSWERS box ([1] a'b' - 70mm, [2] ab - 86mm, [3] v-VT - 38mm, [4] h'-HT - 53mm), and the note SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. **Step 5.3 — Establish loci and swing arcs for final views:** Draw horizontal lines through $b_1'$ (Locus of $b'$) and through $b_2$ (Locus of $b$), both lying above $XY$. Project $b_2$ vertically down to the horizontal line through $a'$ to locate $b_2'$. With center $a'$ and radius $a'b_2'$, swing an arc to cut the Locus of $b'$ at $b'$. With center $a$ and radius $ab_1$, swing an arc upwards to cut the Locus of $b$ at $b$. Join $a'b'$ and $ab$.

> **Figure: Projection of line AB step 5.3 showing front and top views**
>
> Engineering drawing labelled 5.3 showing the projections of a straight line AB. Reference line xy is horizontal. Point a' is 20 mm above xy, and point a is 25 mm below xy on the same vertical projector. From a', true length line a'b1' is drawn at 30 degrees to the horizontal, establishing the locus of b' above xy. From a, true length line ab2 of length 100 mm is drawn at 45 degrees to the horizontal, establishing the locus of b (which happens to be above xy). Projecting b1' vertically down to the horizontal line through a gives b1; rotating b1 around center a up to the locus of b gives top view ab. Projecting b2 vertically or rotating to find front view a'b'. Text boxes on the right state: GIVEN: [1] AB - 100mm, [2] A - 20 aHP, [3] A - 25 fVP, [4] theta - 30°, [5] phi - 45°. ANSWERS: [1] a'b' - 70mm, [2] ab - 86mm, [3] v-VT - 38mm, [4] h'-HT - 53mm. Below the boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

4. **Step 5.4 — Locate $HT$ and $VT$:** The top view $ab$ crosses $XY$ at $v$; project vertically from $v$ to intersect $a'b'$ at $VT$. Extend the front view $b'a'$ downwards past $a'$ to intersect $XY$ at $h'$; drop a vertical projector from $h'$ to intersect the extended top view $ba$ at $HT$.

> **Figure: Projection of line AB step 5.4 showing front and top views along with traces HT and VT**
>
> Engineering drawing labelled 5.4 completing the projections of line AB from step 5.3 by locating the Horizontal Trace (HT) and Vertical Trace (VT). In addition to all elements of 5.3: the top view line ba is extended past a to intersect the xy line at v; a vertical projector from v intersects the front view line a'b' at VT. The front view line b'a' is extended downwards past a' to intersect the xy line at h'; a vertical projector from h' downwards intersects the extended top view line ba at HT. A note at the top left reads: 'a,b,v,HT - same line' and 'a',b',h',VT - same line'. Text boxes on the right state: GIVEN: [1] AB - 100mm, [2] A - 20 aHP, [3] A - 25 fVP, [4] theta - 30°, [5] phi - 45°. ANSWERS: [1] a'b' - 70mm, [2] ab - 86mm, [3] v-VT - 38mm, [4] h'-HT - 53mm. Below the boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Final Answer:**
- Front view $a'b'$, top view $ab$, Horizontal Trace ($HT$), and Vertical Trace ($VT$) are constructed as shown in Step 5.4.

### Common mistakes
- **Drawing $\phi$ in the wrong direction when crossing quadrants:** If end $A$ is in front of VP and end $B$ is in the second quadrant (behind VP), the true-length line $ab_2$ must be drawn **upwards** toward $XY$ (so $b_2$ lands above $XY$), not downwards.
- **Swapping arc radii ($ab_1$ vs. $a'b_2'$):** Remember that the true inclination $\theta$ in the front view determines the foreshortened **top-view** length ($ab_1 = TL\cos\theta$), whereas $\phi$ in the top view determines the foreshortened **front-view** length ($a'b_2' = TL\cos\phi$). Never swing an arc directly from $b_1'$ in the front view.
- **Projecting $b_1'$ or $b_2$ to the $XY$ line instead of the horizontal through $a$ or $a'$:** Always project $b_1'$ vertically to the horizontal construction line passing through $a$, and project $b_2$ vertically to the horizontal construction line passing through $a'$.
- **Misplacing views in the Third Quadrant:** In the third quadrant (below HP, behind VP), the front view ($a'b'$) is **below** $XY$ and the top view ($ab$) is **above** $XY$.

### Try it yourself

#### Practice Problem 1: Line Entering the Second Quadrant (Q210 / Problem 4)
**Problem:** A straight line $PQ$ is $100\text{ mm}$ long. The end $P$ is in HP and $20\text{ mm}$ in front of VP. The line $PQ$ is inclined $30^\circ$ to HP and $20^\circ$ to VP. Draw the projections of the line if the end $Q$ is in second quadrant.

**Given Data:**
- [1] $PQ = 100\text{ mm}$
- [2] $P$: on HP ($p'$ is on $XY$)
- [3] $P$: $20\text{ mm}$ fVP ($p$ is $20\text{ mm}$ below $XY$)
- [4] $\theta = 30^\circ$
- [5] $\varphi = 20^\circ$, with $Q$ in Second Quadrant

```line-projection
{
  "A": {
    "y": 20,
    "z": 0
  },
  "length": 100,
  "theta": 30,
  "phi": 20,
  "bAbove": true,
  "bInFront": false
}
```

**Printed Answers for Checking:**
- [1] $pq = 86\text{ mm}$
- [2] $p'q' = 94\text{ mm}$

---

#### Practice Problem 2: Line in the Third Quadrant (Q4 / Problem 5)
**Problem:** Draw the projection of the line $AB$ $80\text{ mm}$ inclined $30^\circ$ to HP and $45^\circ$ to VP. The end $A$ of the line is $20\text{ mm}$ below the HP and $25\text{ mm}$ behind the VP. Also locate the traces.

**Given Data:**
- [1] $AB = 80\text{ mm}$
- [2] $A$: $20\text{ mm}$ bHP ($a'$ is $20\text{ mm}$ below $XY$)
- [3] $A$: $25\text{ mm}$ bVP ($a$ is $25\text{ mm}$ above $XY$)
- [4] $\theta = 30^\circ$
- [5] $\phi = 45^\circ$

> **Figure: Projection of line AB in the third quadrant with traces**
>
> Projection of a straight line AB of true length 80 mm in the third quadrant, inclined at θ = 30° to the HP and φ = 45° to the VP, with end A 20 mm below the HP and 25 mm behind the VP, including location of its traces.

**Printed Answers for Checking:**
- [1] $a'b' = 69\text{ mm}$
- [2] $ab = 56\text{ mm}$

### Quick recall
- **Front view rotation ($a'b_1'$ at $\theta$):** Establishes the **Locus of $b'$** and projects down to give the top-view radius $ab_1 = TL\cos\theta$.
- **Top view rotation ($ab_2$ at $\phi$):** Establishes the **Locus of $b$** and projects up to give the front-view radius $a'b_2' = TL\cos\phi$.
- **Vertical alignment check:** The final projected endpoints $b'$ and $b$ must always lie on a single vertical projector perpendicular to $XY$.
- **Quadrant placement of loci:** Above HP $\rightarrow$ Locus of $b'$ is above $XY$; Below HP $\rightarrow$ below $XY$. In front of VP $\rightarrow$ Locus of $b$ is below $XY$; Behind VP $\rightarrow$ above $XY$.
- **Trace rule ($h'$ to $HT$, $v$ to $VT$):** Extend $a'b'$ to $XY$ at $h'$, then project vertically to $ab$ for $HT$; extend $ab$ to $XY$ at $v$, then project vertically to $a'b'$ for $VT$.

<!-- page 4 | Line Rotation Method: Working from Apparent Views and Apparent Angles -->

## Line Rotation Method: Working from Apparent Views and Apparent Angles

### Idea in brief
In orthographic projection, you do not always start with the true length ($TL$) and both true inclinations ($\theta$ and $\phi$). Often, a problem gives you the foreshortened apparent lengths of the front view ($FV$) or top view ($TV$), or their apparent angles ($\alpha$ and $\beta$) with the reference line $xy$. By reversing the standard line-rotation steps—rotating an inclined view until it is parallel to $xy$ and projecting it to the other view's locus—you can work backward to recover the true length and true inclinations. When a problem gives fewer than five parameters and omits endpoint coordinates, you can also assume a convenient starting point right on the reference planes ($HP$ and $VP$) because shifting a line parallel to itself never changes its lengths or angles.

### Key terms
- **True Length ($TL$ or $AB$):** The actual, unforeshortened length of the straight line in 3D space ($a'b_1'$ in the front view, $ab_2$ in the top view).
- **Front View / Elevation ($FV$ or $a'b'$):** The projection of the line onto the Vertical Plane ($VP$).
- **Top View / Plan ($TV$ or $ab$):** The projection of the line onto the Horizontal Plane ($HP$).
- **True Inclination with HP ($\theta$):** The angle the true-length line $a'b_1'$ makes with $xy$ in the front view.
- **True Inclination with VP ($\phi$):** The angle the true-length line $ab_2$ makes with $xy$ in the top view.
- **Apparent Inclination in Front View ($\alpha$):** The angle the foreshortened front view $a'b'$ makes with $xy$ ($\alpha > \theta$).
- **Apparent Inclination in Top View ($\beta$):** The angle the foreshortened top view $ab$ makes with $xy$ ($\beta > \phi$).
- **Second-Quadrant Equidistant Point:** A point behind $VP$ and above $HP$ at equal distances from both planes; its front view and top view both lie above $xy$ at the exact same height and coincide on the drawing.

### Rules and formulas
> **Key idea.** Making the top view parallel to $xy$ ($ab_1$) makes the corresponding front view show true length ($a'b_1' = TL$) and true inclination $\theta$. Making the front view parallel to $xy$ ($a'b_2'$) makes the corresponding top view show true length ($ab_2 = TL$) and true inclination $\phi$.

$$ab_1 = TV = TL \cos\theta$$
The rotated horizontal length in the top view equals the top view length, which is the base of the right triangle formed by $TL$ and $\theta$ in the front view.

$$a'b_2' = FV = TL \cos\phi$$
The rotated horizontal length in the front view equals the front view length, which is the base of the right triangle formed by $TL$ and $\phi$ in the top view.

$$\text{Vertical projector: } b' \text{ and } b \text{ lie on the same line } \perp xy$$
The final front view endpoint $b'$ and top view endpoint $b$ always share a single vertical projector.

$$h_{HP} = d_{VP} \text{ in Quadrant II} \implies \text{Locus of } b' \text{ coincides with Locus of } b$$
In the second quadrant (above $HP$, behind $VP$), both views fall above $xy$, so an endpoint equidistant from $HP$ and $VP$ has coinciding front and top views.

### Method
1. **Plot the known endpoint ($a', a$):** Draw the reference line $xy$ and locate $a'$ and $a$ on a common vertical projector according to their quadrant distances. If no endpoint distances are given at all, assume end $A$ lies on both $HP$ and $VP$ (place both $a'$ and $a$ directly on $xy$).
2. **Draw any directly known loci:** If the height of end $B$ above/below $HP$ or distance in front of/behind $VP$ is given, draw the corresponding horizontal locus line for $b'$ or $b$.
3. **Use the known pair in the rotational triangle:**
   - *If $TL$ and $\theta$ are given:* Draw $a'b_1' = TL$ at angle $\theta$ to $xy$ to establish the locus of $b'$. Drop a vertical projector from $b_1'$ to the horizontal line through $a$ to get $b_1$. The segment $ab_1$ is the top view length $TV$.
   - *If $TV$ and $TL$ (or $TV$ and $\theta$) are given:* Draw $ab_1 = TV$ parallel to $xy$ from $a$. Project $b_1$ vertically to meet either an arc of radius $TL$ or a line at angle $\theta$ from $a'$. This intersection $b_1'$ establishes the locus of $b'$.
   - *If apparent angles ($\alpha, \beta$) and a locus are given:* Draw the apparent view ($a'b'$ at angle $\alpha$, or $ab$ at angle $\beta$) directly to the known locus. Rotate $a'b'$ to the horizontal $a'b_2'$ and project to the locus of $b$ to get $ab_2 = TL$ and $\phi$. Rotate $ab$ to the horizontal $ab_1$ and project to the locus of $b'$ to get $a'b_1' = TL$ and $\theta$.
4. **Swing arcs and align end projectors:** Swing $ab_1$ (radius $TV$) from $a$ and/or $a'b_2'$ (radius $FV$) from $a'$ to meet their respective loci, or use a vertical projector between $b'$ and $b$ so both final endpoints align vertically.
5. **Measure the unknowns:** Read off the required true length, view lengths, and angles ($\theta, \phi, \alpha, \beta$).

### Worked examples

#### Example 1: Given True Length, $\theta$, and Front View Length (Q6)
**Problem:** A line $AB$, $80\text{ mm}$ long, is inclined at $30^\circ$ to the $HP$. Its end $A$ is $15\text{ mm}$ above the $HP$ and $20\text{ mm}$ in front of the $VP$. Its front view measures $60\text{ mm}$. Draw the top view of $AB$ and determine its inclination with $VP$.

**Given Data:**
- True length $AB = 80\text{ mm}$
- True inclination with $HP$, $\theta = 30^\circ$
- End $A$: $15\text{ mm}$ above $HP$, $20\text{ mm}$ in front of $VP$
- Front view length $FV = a'b' = 60\text{ mm}$

**Step-by-step Solution:**
1. **Locate end $A$ and construct the true length in elevation:** Draw the reference line $xy$. Locate $a'$ $15\text{ mm}$ above $xy$ and $a$ $20\text{ mm}$ below $xy$ on the same vertical projector. From $a'$, draw the true length line $a'b_1' = 80\text{ mm}$ inclined at $\theta = 30^\circ$ to the horizontal, and draw a horizontal locus line for $B$'s front view through $b_1'$. Drop a vertical projector from $b_1'$ to meet the horizontal line through $a$ at $b_1$; the segment $ab_1$ gives the top view length ($69\text{ mm}$).

> **Figure: Step 6.1: Construction of true length in front view and top view length**
>
> Step 6.1 of the projection of line AB. A horizontal reference line xy is drawn. Point a' is located 15 mm above the xy line, and point a is located 20 mm below the xy line on the same vertical projector. From a', a line a'b1' of length 80 mm is drawn inclined at 30 degrees to the horizontal, establishing the horizontal locus of B in the front view through b1'. A vertical projector is dropped from b1' down to the horizontal line through a, locating point b1, so segment ab1 represents the top view length when parallel to VP. Beside the drawing are two boxes and a scale note: GIVEN: [1] AB - 80mm, [2] A - 15 aHP, [3] A - 20 fVP, [4] theta - 30 degrees, [5] FV - 60mm; ANSWERS: [1] ab - 69mm, [2] phi - 41 degrees; SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. **Construct the front view $a'b'$ and project to the top view:** With centre $a'$ and radius equal to the given front view length $60\text{ mm}$, strike an arc to cut the horizontal locus through $b_1'$ at $b'$. Join $a'b'$. With centre $a$ and radius $ab_1$, swing an arc downward to meet the vertical projector dropped from $b'$ at point $b$. Draw the horizontal locus of $b$ through this intersection.

> **Figure: Step 6.2 of the projection of line AB**
>
> Step 6.2 of a line projection construction. A horizontal reference line xy is drawn. Point a' is 15 mm above xy and point a is 20 mm below xy on a common vertical projector. From a', a line a'b1' of length 80 mm is drawn at an angle of 30° to the horizontal, establishing the horizontal locus line through b1' above xy. Also from a', the front view segment a'b' of length 60 mm is swung to meet this upper locus line at b'. A vertical projector goes down from b1' (arrow pointing down) to the horizontal line through a, locating b1 so that ab1 represents the top view length. From b1, an arc is swung downwards and to the left (arrow on arc) to intersect the vertical projector descending from b' (arrow pointing down), locating point b and establishing the top view segment ab and the horizontal locus line through b. Beside the drawing are two boxes and a scale note. GIVEN box: [1] AB - 80mm, [2] A - 15 aHP, [3] A - 20 fVP, [4] θ - 30°, [5] FV - 60mm. ANSWERS box: [1] ab - 69mm, [2] ϕ - 41°. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. **Reverse-rotate the front view to find $\phi$:** With centre $a'$ and radius $a'b' = 60\text{ mm}$, rotate the front view down to the horizontal line through $a'$ to locate $b_2'$. Drop a vertical projector from $b_2'$ to intersect the horizontal locus of $b$ at $b_2$. Join $ab_2$ (which has true length $80\text{ mm}$) and measure its inclination $\phi$ with the horizontal.

> **Figure: Step 6.3 of the projection of line AB**
>
> Step 6.3 of a line projection construction, completing step 6.2. A horizontal reference line xy is drawn. Point a' is 15 mm above xy and point a is 20 mm below xy on a common vertical projector. Above xy, line a'b1' of length 80 mm is inclined at 30° to the horizontal, and the front view a'b' of length 60 mm meets the horizontal locus through b1' at b'. A vertical projector from b1' (arrow pointing down) meets the horizontal through a at b1. An arc from b1 goes down and left to meet the vertical projector from b' (arrow pointing down) at point b, giving the top view ab. In addition, from a, the true length line ab2 is drawn downwards and to the right to meet the horizontal locus through b at b2, at an angle labelled ϕ below the horizontal line ab1. Beside the drawing are two boxes and a scale note. GIVEN box: [1] AB - 80mm, [2] A - 15 aHP, [3] A - 20 fVP, [4] θ - 30°, [5] FV - 60mm. ANSWERS box: [1] ab - 69mm, [2] ϕ - 41°. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:**
- Top view length $ab = 69\text{ mm}$
- Inclination with $VP$, $\phi = 41^\circ$

---

#### Example 2: Multi-Quadrant Line with Given Top View Length (Q7)
**Problem:** The top view of $80\text{ mm}$ long line $AB$ measures $55\text{ mm}$. $A$ is $45\text{ mm}$ in front of $VP$ and $15\text{ mm}$ below $HP$. $B$ is $15\text{ mm}$ in front of $VP$ and is above $HP$. Draw the front view of $AB$ and find its inclination with $HP$ and $VP$.

**Given Data:**
- True length $AB = 80\text{ mm}$
- End $A$: $15\text{ mm}$ below $HP$, $45\text{ mm}$ in front of $VP$ (Fourth Quadrant)
- End $B$: $15\text{ mm}$ in front of $VP$, above $HP$ (First Quadrant)
- Top view length $TV = ab = 55\text{ mm}$

> **Figure: Projection of line AB problem Q7**
>
> Problem statement diagram for line AB: true length AB = 80 mm, top view measures 55 mm, end A is 45 mm in front of VP and 15 mm below HP, end B is 15 mm in front of VP and above HP. Printed answers: front view length a'b' = 74 mm, phi = 22 degrees, theta = 47 degrees.

**Step-by-step Solution:**
1. **Plot endpoint $A$ and the locus of $b$:** Since $A$ is in the fourth quadrant, both $a'$ ($15\text{ mm}$ below $xy$) and $a$ ($45\text{ mm}$ below $xy$) lie below $xy$ on a common vertical projector. End $B$ is $15\text{ mm}$ in front of $VP$, so the horizontal locus of its top view $b$ lies $15\text{ mm}$ below $xy$ (passing right through $a'$). With centre $a$ and radius equal to the true length $80\text{ mm}$, strike an arc to cut the locus of $b$ ($15\text{ mm}$ below $xy$) at $b_2$, finding $\phi = 22^\circ$.

> **Figure: Step 7.1 of the projection of line AB**
>
> Step labelled 7.1. Horizontal reference line xy. A vertical projector below xy has point a' at 15 mm below xy and point a at 45 mm below xy (both in the fourth quadrant / below xy). A horizontal locus line is drawn through a' (15 mm below xy, which also serves as the locus of b in the top view at 15 mm in front of VP). From point a (45 mm below xy), an arc of radius 80 mm (true length) is swung to intersect the horizontal line at 15 mm below xy at point b1 (also labelled b1(b1')). The segment a to b1(b1') is drawn and labelled 80. Beside the drawing, a GIVEN box lists: [1] AB - 80mm, [2] A - 15 bHP, [3] A - 45 fVP, [4] B - 15 fVP (in red), [5] TV - 55mm (in black). An ANSWERS box lists: [1] a'b' - 74mm, [2] phi - 22 degrees, [3] theta - 47 degrees. Below the boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. **Draw the top view $ab$ and rotate it parallel to $xy$:** With centre $a$ and radius $TV = 55\text{ mm}$, cut the locus of $b$ ($15\text{ mm}$ below $xy$) to locate $b$, and join $ab$. Also rotate the top view length $55\text{ mm}$ about $a$ until it is horizontal ($ab_1$ parallel to $xy$), and project $b_1$ vertically upward into the region above $xy$ (since $B$ is above $HP$).

> **Figure: Step 7.2 of line projection problem 7**
>
> Engineering drawing labelled 7.2 showing the construction of the projections of line AB. A horizontal reference line is labelled x at the left and y at the right. Both a' and a lie below the xy line on a common vertical projector: a' is 15 mm below xy and a is 45 mm below xy (both dimensioned on the left). A horizontal locus line passes through a' and b at 15 mm below xy (since B is 15 mm in front of VP and A is 15 mm below HP, their projections b and a' share the same distance below xy). From a, the top view ab of length 55 mm is drawn to meet the locus of b at point b. Also from a, the true length line ab1 of length 80 mm is drawn to meet the same horizontal locus at b1(b1'). From b1', an arc of radius a'b1' is swung upward (with centre a') to intersect the vertical projector rising from b (indicated with an upward arrow) at point b' above the xy line. The front view line a'b' is drawn. Beside the drawing are two boxes and a scale note. GIVEN box: [1] AB - 80mm, [2] A - 15 bHP, [3] A - 45 fVP, [4] B - 15 fVP, [5] TV - 55mm. ANSWERS box: [1] a'b' - 74mm, [2] phi - 22 degrees, [3] theta - 47 degrees. Note below: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. **Determine the locus of $b'$, front view $a'b'$, and $\theta$:** With centre $a'$ and radius $TL = 80\text{ mm}$, swing an arc to cut the vertical projector from $b_1$ at $b_1'$ above $xy$. The angle of $a'b_1'$ with the horizontal gives $\theta = 47^\circ$. Draw the horizontal locus of $b'$ through $b_1'$. Project $b$ vertically upward from the $15\text{ mm}$ line to meet this upper locus at $b'$, and join $a'b'$ to get the front view.

> **Figure: Step 7.3 of line projection problem 7**
>
> Engineering drawing labelled 7.3 showing the completed projections of line AB. A horizontal reference line is labelled x at the left and y at the right. On a common vertical projector below xy, point a' is 15 mm below xy and point a is 45 mm below xy (dimensioned on the left). A horizontal locus line passes through a', b, and b1(b1') at 15 mm below xy. From a, the top view segment ab has length 55 mm, and the true length segment ab1 has length 80 mm, making an angle phi with the horizontal line through a. From b, a vertical projector goes up to the front view point b' above xy, with a horizontal locus line passing through b' and b2'. The front view segment a'b' is drawn. From b1', an arc goes up to b' on the vertical projector of b. From a', the true length line a'b2' of length 80 mm is drawn up to the horizontal locus of b' at b2', making an angle theta with the horizontal line through a'b1'. An arc connects b' (or b) to b2' to determine the true length in the front view. Beside the drawing are two boxes and a scale note. GIVEN box: [1] AB - 80mm, [2] A - 15 bHP, [3] A - 45 fVP, [4] B - 15 fVP, [5] TV - 55mm. ANSWERS box: [1] a'b' - 74mm, [2] phi - 22 degrees, [3] theta - 47 degrees. Note below: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:**
- Front view length $a'b' = 74\text{ mm}$
- Inclination with $VP$, $\phi = 22^\circ$
- Inclination with $HP$, $\theta = 47^\circ$

---

#### Example 3: Apparent Inclinations $\alpha$ and $\beta$ Given (Q8)
**Problem:** The front and top views of a line are inclined at $35^\circ$ and $45^\circ$ respectively to $xy$-line. One end of the line is $20\text{ mm}$ above the $HP$ and $25\text{ mm}$ front of $VP$ while the other end is $40\text{ mm}$ above $HP$. Draw the projections of the line and find the true length and inclinations of the line with $HP$ and $VP$.

**Given Data:**
- Apparent angle in front view, $\alpha = 35^\circ$
- Apparent angle in top view, $\beta = 45^\circ$
- End $A$: $20\text{ mm}$ above $HP$, $25\text{ mm}$ in front of $VP$
- End $B$: $40\text{ mm}$ above $HP$

**Step-by-step Solution:**
1. **Draw the known loci and front view $a'b'$:** Mark $a'$ $20\text{ mm}$ above $xy$ and $a$ $25\text{ mm}$ below $xy$. Draw the horizontal locus of $b'$ at $40\text{ mm}$ above $xy$. From $a'$, draw a line at the apparent angle $\alpha = 35^\circ$ to meet the $40\text{ mm}$ locus at $b'$. Measure $a'b' = 35\text{ mm}$.

> **Figure: Step 8.1 showing the initial projection of end A and the front view a'b'**
>
> Engineering drawing labelled '8.1' showing the first step of the projection of line AB. A horizontal reference line is labelled 'x' on the left and 'y' on the right. A vertical projector line passes through the xy-line. Point 'a'' is located 20 mm above the xy-line (dimensioned '20' on the left), and point 'a' is located 25 mm below the xy-line (dimensioned '25' on the left). From 'a'', a horizontal line is drawn to the right, and the front view segment 'a'b'' is drawn inclined upwards at an angle of 35 degrees to the horizontal. A horizontal locus line passes through 'b'' at a distance of 40 mm above the xy-line (dimensioned '40' between the xy-line and the locus of b'). To the right of the drawing are two boxes. The 'GIVEN' box lists: [1] alpha - 35 degrees, [2] beta - 45 degrees, [3] A - 20 aHP, [4] A - 25 fVP, [5] B - 40 aHP. The 'ANSWERS' box lists: [1] AB - 45mm, [2] a'b' - 35mm, [3] ab - 41mm, [4] phi - 40 degrees, [5] theta - 26 degrees. Below the boxes is text reading 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. **Project $b'$ to find the top view $ab$ and rotate $a'b'$:** From $a$, draw a line at the apparent angle $\beta = 45^\circ$ below $xy$. Drop a vertical projector from $b'$ to intersect this $45^\circ$ line at $b$, completing the top view $ab$ (length $41\text{ mm}$) and establishing the horizontal locus of $b$. Next, rotate $a'b'$ about $a'$ until it is horizontal ($a'b_2'$), and drop a projector from $b_2'$ to meet the locus of $b$ at $b_2$. Join $ab_2$ to find $TL$ and $\phi$.

> **Figure: Step 8.2 of projection of straight line AB**
>
> Engineering drawing labelled 8.2 showing a step in the projection of line AB. A horizontal reference line XY is drawn. Point a' is 20 mm above XY, and point a is 25 mm below XY on the same vertical projector. A horizontal locus line for B in the front view is drawn 40 mm above XY. The front view line a'b' is drawn from a' inclined at 35° to the horizontal, meeting the 40 mm locus at b'. From b', an arc is swung down with centre a' to the horizontal line through a', and also a vertical projector is dropped downwards from b' to find point b on a line drawn from a at 45° below the horizontal, forming the top view ab and its horizontal locus line through b. Beside the drawing are two boxes. GIVEN: [1] α - 35°, [2] β - 45°, [3] A - 20 aHP, [4] A - 25 fVP, [5] B - 40 aHP. ANSWERS: [1] AB - 45mm, [2] a'b' - 35mm, [3] ab - 41mm, [4] φ - 40°, [5] θ - 26°. Below the boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. **Rotate $ab$ to find $\theta$ in the front view:** With centre $a$ and radius $ab$, rotate the top view upward to the horizontal line through $a$ to locate $b_1$. Project $b_1$ vertically upward to meet the $40\text{ mm}$ locus of $b'$ at $b_1'$. Join $a'b_1'$ to verify the true length and measure $\theta$.

> **Figure: Step 8.3 of projection of straight line AB**
>
> Engineering drawing labelled 8.3 showing the complete projection of line AB. A horizontal reference line XY is drawn. Point a' is 20 mm above XY, and point a is 25 mm below XY on the same vertical projector. A horizontal locus line for b' is 40 mm above XY. Front view a'b' is inclined at α = 35° to the horizontal, with b' on the 40 mm locus. Top view ab is inclined at β = 45° to the horizontal, where b lies on the vertical projector dropped from b'. An arc centered at a' passes from b' down to the horizontal line through a', and the true length line a'b1' is inclined at angle θ to the horizontal, with b1' on the 40 mm locus line. A vertical projector goes from b1' down to the horizontal line through a, and the true length line ab2 is inclined at angle φ to the horizontal, with b2 on the horizontal locus line through b. Beside the drawing are two boxes. GIVEN: [1] α - 35°, [2] β - 45°, [3] A - 20 aHP, [4] A - 25 fVP, [5] B - 40 aHP. ANSWERS: [1] AB - 45mm, [2] a'b' - 35mm, [3] ab - 41mm, [4] φ - 40°, [5] θ - 26°. Below the boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:**
- True length $AB = 45\text{ mm}$
- Front view length $a'b' = 35\text{ mm}$
- Top view length $ab = 41\text{ mm}$
- Inclination with $VP$, $\phi = 40^\circ$
- Inclination with $HP$, $\theta = 26^\circ$

---

#### Example 4: Given Plan Inclination $\beta$, True Inclination $\theta$, and True Length (Q191)
**Problem:** A line $PQ$ $80\text{ mm}$ long is inclined to the $HP$ at $30^\circ$. Its plan makes an angle of $60^\circ$ with the $xy$-line. Draw its projections and determine the inclination with $VP$, if the point $P$ is on $HP$ and $15\text{ mm}$ front of $VP$.

**Given Data:**
- Apparent angle of plan, $\beta = 60^\circ$
- True inclination with $HP$, $\theta = 30^\circ$
- True length $PQ = 80\text{ mm}$
- End $P$: on $HP$ ($0\text{ mm}$ above $xy$), $15\text{ mm}$ in front of $VP$

**Step-by-step Solution:**
1. **Draw the true length in the front view to find $TV$ length:** Place $p'$ on $xy$ and $p$ $15\text{ mm}$ below $xy$. From $p'$, draw $p'q_1' = 80\text{ mm}$ at $\theta = 30^\circ$ above $xy$, establishing the horizontal locus of $q'$. Drop a vertical projector from $q_1'$ to the horizontal line through $p$ to locate $q_1$; the distance $pq_1$ is the plan length $TV$.

> **Figure: Step 191-1 showing initial projection of line PQ with true length and inclination to HP**
>
> Projection of line PQ (step labelled 191-1). A horizontal reference line is labelled x on the left and y on the right. Point p' lies directly on the xy-line, and point p is located 15 mm below the xy-line on a vertical projector from p'. From p', a true length line p'q1' of length 80 is drawn above the xy-line inclined at 30 degrees to the xy-line. A horizontal dashed locus line passes through q1'. A vertical projector drops down from q1' (with a downward arrow) to meet a horizontal line drawn from p at point q1, forming the true plan length pq1 parallel to the xy-line. On the right is a GIVEN box containing: [1] PQ - 80mm, [2] P - on HP, [3] P - 15 fVP, [4] theta - 30 degrees, [5] beta - 60 degrees.

2. **Swing the plan to angle $\beta = 60^\circ$:** From $p$, draw a line inclined at $\beta = 60^\circ$ to the horizontal. With centre $p$ and radius $pq_1$, swing an arc down to intersect this $60^\circ$ line at $q$, completing the top view $pq$ and establishing the horizontal locus of $q$.

> **Figure: Projection of line PQ step 191-2**
>
> Engineering drawing step labelled 191-2. Horizontal reference line xy. Point p' lies on the xy line, and point p is 15 mm below the xy line on the same vertical projector. From p', a line p'q1' of length 80 mm is drawn at an angle of 30° above the xy line. A horizontal locus line passes through q1'. A vertical projector goes down from q1' to meet the horizontal line from p at q1. From p, an arc with radius pq1 is swung downwards to meet a line drawn from p at 60° below the horizontal line pq1 at point q. A horizontal locus line is drawn through q. A vertical projector from q goes upwards to meet the horizontal locus line through q1' at a point labelled p' (top view/front view end point q'). Box GIVEN: [1] PQ - 80mm, [2] P - on HP, [3] P - 15 fVP, [4] θ - 30°, [5] β - 60°.

3. **Project $q$ to the front view and find $\phi$:** Project $q$ vertically upward to meet the locus of $q'$ at $q'$, and join $p'q'$ for the front view. Then rotate $p'q'$ down to the $xy$ line about $p'$ to get $q_2'$, drop a vertical projector to the locus of $q$ to locate $q_2$, and measure the true inclination $\phi$ of $pq_2$ with the horizontal.

> **Figure: Projection of line PQ step 191-3 with answers**
>
> Engineering drawing step labelled 191-3. Continuing from step 191-2: Horizontal reference line xy. Point p' is on xy, point p is 15 mm below xy. Line p'q1' of length 80 mm is at 30° above xy. Horizontal locus through q1'. Vertical projector from q1' down to q1 on the horizontal line through p. Arc from q1 centered at p swung down to q, where line pq makes 60° with the horizontal line pq1. Horizontal locus line through q. Vertical projector from q goes up to meet the locus through q1' at point q', and segment p'q' is drawn. From p, a line pq2 (true length 80 mm) is drawn to the horizontal locus line of q, making an angle φ with the horizontal line pq1. Box GIVEN: [1] PQ - 80mm, [2] P - on HP, [3] P - 15 fVP, [4] θ - 30°, [5] β - 60°. Box ANSWERS: [1] pq - 69mm, [2] p'q' - 52mm, [3] φ - 48°.

**Answer:**
- Front view length $p'q' = 53\text{ mm}$
- Top view length $pq = 69\text{ mm}$
- Inclination with $VP$, $\phi = 48^\circ$

---

#### Example 5: Only Three Parameters Given — Assuming Missing Endpoint Conditions (Q9)
**Problem:** A line $AB$ $70\text{ mm}$ long is inclined to the $HP$ at $40^\circ$. Its plan makes an angle of $30^\circ$ with the $xy$-line. Draw its projections and determine the inclination with $VP$.

**Given Data:**
- Apparent angle of plan, $\beta = 30^\circ$
- True inclination with $HP$, $\theta = 40^\circ$
- True length $AB = 70\text{ mm}$
- *Assumed condition:* Place end $A$ on $HP$ and on $VP$ (so both $a'$ and $a$ lie at the same point on $xy$).

**Step-by-step Solution:**
1. **Assume $A$ on $xy$ and construct the plan:** Mark $a'$ and $a$ together on $xy$. Draw $a'b_1' = 70\text{ mm}$ at $\theta = 40^\circ$ above $xy$ and draw the horizontal locus of $b'$. Drop a vertical projector from $b_1'$ to $xy$ to get $b_1$ (giving $TV = ab_1 = 54\text{ mm}$). Swing an arc of radius $ab_1$ from $a$ to meet a line drawn at $\beta = 30^\circ$ below $xy$ at $b$, and draw the horizontal locus of $b$.

> **Figure: Step 9.1 of projection of line AB showing true length in elevation, locus of b1', and plan ab inclined at 30 degrees.**
>
> Step 9.1 of the projection of line AB, with heading 'Assume missing Conditions'. A horizontal reference line xy is drawn. Both end projections a' and a lie directly on the xy line (since A is assumed on HP and on VP). From a', a true length line a'b1' of length 70 mm is drawn above the xy line inclined at 40° to xy. A horizontal dashed locus line is drawn through b1'. From b1', a vertical projector is dropped down to meet the xy line at b1, defining the plan length a-b1 along the xy line. With center a and radius a-b1, an arc is swung downward below the xy line to meet a line drawn from a inclined at 30° below xy at point b, forming the plan (top view) ab. A horizontal dashed locus line is drawn through b. Text box 'GIVEN': [1] θ - 40°, [2] β - 30°, [3] A - on HP, [4] A - on VP, [5] TL - 70mm. Text box 'ANSWERS': [1] a'b' - 65mm, [2] ab - 54mm, [3] φ - 22°. Note at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. **Complete the front view and find $\phi$:** Project $b$ vertically up to the locus of $b'$ to get $b'$, and join $a'b'$ ($65\text{ mm}$). With centre $a$ and radius $TL = 70\text{ mm}$ (or by rotating $a'b'$ down to $xy$ and projecting to the locus of $b$), locate $b_2$ on the locus of $b$. Join $ab_2$ and measure $\phi$.

> **Figure: Worked projection step 9.2 for line AB with GIVEN and ANSWERS tables**
>
> Orthographic projection diagram labelled 9.2. A horizontal reference line x-y has points a' and a located directly on the x-y line at the same point. Above the x-y line: a true length line a'b1' of length 70 is inclined at 40 degrees to x-y; a horizontal locus line passes through b1' and b'; the front view segment a'b' connects a' to b'. A vertical projector drops from b1' to b1 on the x-y line, and an arc is swung from b1 downwards to b on a horizontal locus line below x-y. Below the x-y line: the top view segment ab is inclined at beta = 30 degrees to x-y; the true length line ab2 is inclined at phi to x-y, meeting the same horizontal locus line as b, with an arc from b's projector to b1' or from b2 up to x-y. Right side boxes: GIVEN: [1] theta - 40 degrees, [2] beta - 30 degrees, [3] A - on HP, [4] A - on VP, [5] TL - 70mm. ANSWERS: [1] a'b' - 65mm, [2] ab - 54mm, [3] phi - 22 degrees. Text below boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:**
- Front view length $a'b' = 65\text{ mm}$
- Top view length $ab = 54\text{ mm}$
- Inclination with $VP$, $\phi = 22^\circ$

---

#### Example 6: Both Apparent View Lengths ($FV$ and $TV$) and True Length Given (Q10)
**Problem:** The top and front views of $75\text{ mm}$ long line is $65\text{ mm}$ and $50\text{ mm}$ respectively. Draw the projections if one end is on both $HP$ and $VP$. Determine the inclinations with $HP$ and $VP$.

**Given Data:**
- True length $AB = 75\text{ mm}$
- Top view length $TV = 65\text{ mm}$
- Front view length $FV = 50\text{ mm}$
- End $A$: on $HP$ and on $VP$ ($a'$ and $a$ lie on $xy$)

> **Figure: Projection of line AB of length 75 mm with end A on both HP and VP**
>
> Projection of a 75 mm long line AB where end A is on both the HP and VP (on the xy reference line), the top view ab has length 65 mm, and the front view a'b' has length 50 mm, used to determine inclinations with the HP and VP.

**Step-by-step Solution:**
1. **Use $TV$ and $TL$ to find $\theta$ and the locus of $b'$:** Mark $a'$ and $a$ at the same point on $xy$. Measure $ab_1 = TV = 65\text{ mm}$ along $xy$ to the right. Erect a vertical projector from $b_1$. With centre $a'$ and radius $TL = 75\text{ mm}$, strike an arc above $xy$ to cut this vertical projector at $b_1'$. Join $a'b_1'$, draw the horizontal locus of $b'$ through $b_1'$, and measure $\theta = 30^\circ$.

> **Figure: Step 10.1 of the projection of line problem 10**
>
> Drawing labelled 10.1 showing the first step of a line projection construction. A horizontal reference line is labelled X on the left and y on the right. Point a' (and a below it) lies on the Xy line. A thick horizontal line segment extends along Xy from a/a' to point b1 on the right, with length 65 marked below it. From b1, a vertical projector with an upward arrow goes up to point b1'. A thick line connects a' to b1' with length 75 marked along it. A horizontal dashed locus line passes through b1', with a small construction arc near b1'. To the right, a GIVEN box lists: [1] TV - 65mm (in red), [2] FV - 50mm, [3] A - on HP (in red), [4] A - on VP (in red), [5] TL - 75mm (in red). Below it, an ANSWERS box lists: [1] θ - 30°, [2] φ - 48°. Below the boxes is text: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. **Locate the front view $a'b'$:** With centre $a'$ and radius $FV = 50\text{ mm}$, cut the horizontal locus of $b'$ at $b'$, and join $a'b'$.

> **Figure: Step 10.2 of the projection of line problem 10**
>
> Drawing labelled 10.2 showing the second step of the line projection construction. On the horizontal reference line Xy, point a'/a lies on the left and b1 lies 65 mm to the right along Xy. From b1, a vertical projector goes up to b1' on a horizontal dashed locus line, with true length a'b1' = 75. Another thick line segment goes from a' up to point b' on the same upper locus line, with length 50 marked along it. From b', a vertical projector with a upward arrow (near Xy) and a downward extension goes straight down below Xy to a point labelled b1 (actually the top view b) on a lower horizontal dashed locus line. A thick line connects a to this lower point, and an arc with a downward-left arrow swings from b1 (on Xy) down to this lower point. To the right, a GIVEN box lists in red: [1] TV - 65mm, [2] FV - 50mm, [3] A - on HP, [4] A - on VP, [5] TL - 75mm. Below it, an ANSWERS box lists: [1] θ - 30°, [2] φ - 48°. Below the boxes is text: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. **Project to the top view and find $\phi$:** Drop a vertical projector from $b'$ below $xy$. With centre $a$ and radius $TV = 65\text{ mm}$, swing an arc from $b_1$ down to meet the vertical projector from $b'$ at $b$, completing the top view $ab$ and defining the horizontal locus of $b$. Finally, with centre $a$ and radius $TL = 75\text{ mm}$ (or by rotating $a'b' = 50\text{ mm}$ to $xy$ and dropping a projector), cut the locus of $b$ at $b_2$. Join $ab_2$ and measure $\phi = 48^\circ$.

> **Figure: Step 10.3 of line projection solution showing front view, top view, and true length arcs**
>
> Engineering drawing labelled '10.3' in a box at the bottom left. A horizontal reference line is labelled 'x' on the left and 'y' on the right. Point a' and point a coincide on the xy line. From a'/a, a segment of length 65 lies along the xy line to point b1 (note: this construction shows a rotated view along xy). Above the xy line: front view segment a'b' of length 50, and true length segment a'b1' of length 75 inclined at angle theta to the xy line. A horizontal locus line passes through b' and b1'. A vertical projector goes from b1 on the xy line up with an upward arrow to b1'. Below the xy line: top view segment ab1 (labelled b1 at the bottom on the vertical projector from b'), and true length segment ab1 (second point also labelled b1 to the right on the same horizontal locus below xy) inclined at angle phi to the xy line. An arc connects the rotated b1 on the xy line down and left (counter-clockwise arrow) to the lower right b1. A vertical projector connects b' and the lower left b1. Text boxes on the right read: 'GIVEN: [1] TV - 65mm, [2] FV - 50mm, [3] A - on HP, [4] A - on VP, [5] TL - 75mm' and 'ANSWERS: [1] theta - 30°, [2] phi - 48°'. Below the boxes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:**
- Inclination with $HP$, $\theta = 30^\circ$
- Inclination with $VP$, $\phi = 48^\circ$

---

#### Example 7: Second-Quadrant Equidistant Endpoint (Q11)
**Problem:** The line $AB$ has its end $A$ $25\text{ mm}$ in front of $VP$ and $15\text{ mm}$ above $HP$. The line makes an angle $20^\circ$ with $HP$ and top view measures $80\text{ mm}$. The end $B$ is on second quadrant equidistant from both reference planes. Draw the projection and find the inclination with $VP$.

**Given Data:**
- True inclination with $HP$, $\theta = 20^\circ$
- Top view length $TV = 80\text{ mm}$
- End $A$: $15\text{ mm}$ above $HP$, $25\text{ mm}$ in front of $VP$ (First Quadrant)
- End $B$: in the Second Quadrant, equidistant from $HP$ and $VP$

> **Figure: Projection of line AB problem Q11**
>
> Problem Q11: Line AB has end A 25mm in front of VP and 15mm above HP. The line makes an angle 20 degrees with HP and top view measures 80mm. End B is in the second quadrant equidistant from both reference planes.

**Step-by-step Solution:**
1. **Use $TV$ and $\theta$ to find $TL$ and the locus of $b'$:** Mark $a'$ $15\text{ mm}$ above $xy$ and $a$ $25\text{ mm}$ below $xy$. From $a$, draw a horizontal segment $ab_1 = TV = 80\text{ mm}$ parallel to $xy$. Erect a vertical projector from $b_1$ upward to intersect a line drawn from $a'$ at $\theta = 20^\circ$ above the horizontal. This intersection is $b_1'$ (giving $TL = a'b_1' = 85\text{ mm}$) and establishes the horizontal locus of $b'$ above $xy$.

> **Figure: Step 11.1 of line projection problem 11**
>
> Engineering drawing step labelled 11.1. A horizontal reference line is labelled x on the left and y on the right. On a vertical projector, point a' is located 15 mm above the xy line, and point a is located 25 mm below the xy line. From a, a horizontal segment a-b1 of length 80 mm extends to the right, parallel to xy. From b1, a vertical projector goes upwards (with an upward arrow) above the xy line to meet a line drawn from a' at an angle of 20 degrees to the horizontal, establishing point b1'. A horizontal dashed locus line passes through b1'. Beside the drawing are two boxes and a note. The GIVEN box reads: [1] TV - 80mm, [2] A - 15 aHP, [3] A - 25 fVP, [4] theta - 20 degrees, [5] b & b' - on same locus. The ANSWERS box reads: [1] TL - 85mm, [2] a'b' - 49mm, [3] phi - 55 degrees. Below the boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. **Apply the second-quadrant equidistant condition to locate $b, b'$, and $\phi$:** Because end $B$ is in the second quadrant (above $HP$ and behind $VP$) and equidistant from both planes, its top view $b$ and front view $b'$ both lie above $xy$ on the *exact same horizontal locus line* (the locus of $b'$ found in Step 1). With centre $a$ and radius $TV = 80\text{ mm}$, swing an arc upward from $b_1$ across $xy$ to cut the locus of $b'$ at $b(b')$. Join $ab$ (top view) and $a'b'$ (front view). Finally, with centre $a$ and radius $TL = 85\text{ mm}$, cut this same upper locus at $b_2$, join $ab_2$, and measure its inclination $\phi = 41^\circ$ with the horizontal.

> **Figure: Step 11.2 of line projection problem 11**
>
> Engineering drawing step labelled 11.2, completing the construction from 11.1. The horizontal reference line xy has point a' 15 mm above it and point a 25 mm below it on the same vertical projector. Horizontal line a-b1 of length 80 mm is drawn below xy, and vertical projector from b1 meets the 20-degree inclined line from a' at b1', establishing the horizontal dashed locus line through b1'. With centre a and radius a-b1' (true length), an arc is swung upwards from b1 (indicated with upward arrows along the arc) to intersect the horizontal locus line through b1' at the coincident point labelled b'b. Thick lines are drawn for the front view a'-b' and the top view a-b (which crosses xy up to b'b). The inclination angle between the horizontal line a-b1 and the top view line a-b is marked as phi. Beside the drawing are the GIVEN box ([1] TV - 80mm, [2] A - 15 aHP, [3] A - 25 fVP, [4] theta - 20 degrees, [5] b & b' - on same locus), the ANSWERS box ([1] TL - 85mm, [2] a'b' - 49mm, [3] phi - 55 degrees), and text: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:**
- True length $AB = 85\text{ mm}$
- Front view length $a'b' = 65\text{ mm}$
- Inclination with $VP$, $\phi = 41^\circ$

### Common mistakes
- **Drawing the true length at an apparent angle (or vice versa):** Never set off $TL$ along a line inclined at $\alpha$ or $\beta$. Apparent angles $\alpha$ and $\beta$ belong strictly to the foreshortened views $a'b'$ and $ab$, whereas $\theta$ and $\phi$ belong strictly to the true-length lines $a'b_1'$ and $ab_2$.
- **Rotating about the reference line instead of the endpoint:** When rotating a view parallel to $xy$, the compass centre must be $a'$ (yielding a horizontal line through $a'$) or $a$ (yielding a horizontal line through $a$), not the $xy$ line—unless $a'$ or $a$ itself lies on $xy$.
- **Placing a second-quadrant top view below $xy$:** In the second quadrant (behind $VP$), the top view moves *above* $xy$. When $B$ is in the second quadrant and equidistant from $HP$ and $VP$, $b$ and $b'$ coincide on the same horizontal locus above $xy$.

### Try it yourself

#### Practice 1 (Q204)
**Problem:** The plan $pq$ of a straight line $PQ$ is $70\text{ mm}$ long and makes an angle of $45^\circ$ with $XY$. The end $P$ is in $VP$ and $15\text{ mm}$ above $HP$. The end $Q$ is $30\text{ mm}$ above $HP$ and the whole line lies in the first quadrant. Draw the projection and obtain i) True length ii) Elevation length iii) Inclination to reference plane iv) Traces.

> **Figure: Problem Q204 projection of line PQ**
>
> Projection of line PQ: top view pq is 70 mm long inclined at beta = 45 degrees to XY; end P is in VP (0 mm in front of VP) and 15 mm above HP; end Q is 30 mm above HP, in the first quadrant.

> **Figure: Solution step 204 showing projections and traces of line PQ**
>
> Worked solution drawing labelled 204. Horizontal reference line xy. Point p(v) lies on the xy line, and p'(VT) is 15 mm above the xy line. Locus of q' is a horizontal line 30 mm above xy. Top view pq is drawn from p(v) below xy at an angle of 45 degrees to xy with length 70 mm, ending at q (which coincides with q2). From q(q2), an arc is swung upwards with centre p(v) to meet the xy line at q1. A vertical projector from q1 goes up to meet the locus of q' (30 mm above xy) at q1', giving the true length line p'q1'. A vertical projector from q goes up to the locus of q' to locate q', forming the front view p'q'. Extending p'q' to the left intersects the xy line at h'. A vertical line from h' goes up to intersect the extension of top view qp at HT (horizontal trace). Box GIVEN: [1] TV - 70mm, [2] β - 45°, [3] P - in VP, [4] P - 15 aHP, [5] Q - 30 aHP. Box ANSWERS: [1] p'q' - 52mm, [2] TL - 72mm, [3] φ - 44°, [4] θ - 12°, [5] h'-HT - 49mm, [6] v-VT - 15mm.

**Printed Answers:**
- True length $PQ = 72\text{ mm}$
- Elevation length $p'q' = 52\text{ mm}$
- Inclination with $HP$, $\theta = 12^\circ$
- Inclination with $VP$, $\phi = 43^\circ$

---

#### Practice 2 (Q193)
**Problem:** The front and top views of a straight line $PQ$ measures $50\text{ mm}$ and $65\text{ mm}$ respectively. The point $P$ is on the $HP$ and $20\text{ mm}$ in front of the $VP$. The front view of the line is inclined at $45^\circ$ to the reference line. Determine the true length of $PQ$ and its inclinations with the reference planes. Also locate the traces.

> **Figure: Projection of line PQ solution step 193**
>
> Orthographic projection diagram labelled 193 showing a line PQ with reference line xy. Point p' lies on the xy line. Point p is below the xy line at a distance of 20 mm. From p', the front view p'q' is drawn above xy with length 50 mm at an angle of 45 degrees (alpha) to xy. A dashed horizontal locus line passes through q'. From p, the top view pq is drawn below xy with length 65 mm. A vertical projector from q' meets the locus of q, or the top view pq is rotated or projected: a vertical line from q goes up to meet xy at q1', and from p' an arc through q1' isn't shown, rather from p an arc through q meets the horizontal line from p? Wait: a vertical line from q' goes down to meet the horizontal line through p? No, a vertical line from q goes up to q'? Yes, q' and q are on the same vertical projector! A vertical line from q1' on xy goes down to q1 on the horizontal locus line through q, and an arc centred at p' passes through q1' up to q2' on the locus of q'. The line p'q2' makes angle theta with xy. The line pq1 has length labelled TL and makes angle phi with the horizontal line through p. Beside the drawing are three boxes: Box '193'; Box 'GIVEN': [1] P - on HP, [2] P - 20 fVP, [3] alpha - 45 deg, [4] FV - 50mm, [5] TV - 65mm; Box 'ANSWERS': [1] TL - 74mm, [2] theta - 29 deg, [3] phi - 48 deg.

**Printed Answers:**
- True length $PQ = 74\text{ mm}$
- Inclination with $HP$, $\theta = 29^\circ$
- Inclination with $VP$, $\phi = 48^\circ$

### Quick recall
- The horizontal base of the true-length triangle in the front view ($a'b_1'$ at angle $\theta$) is always equal to the top view length $TV$.
- The horizontal base of the true-length triangle in the top view ($ab_2$ at angle $\phi$) is always equal to the front view length $FV$.
- To find $TL$ and true inclinations from apparent views ($a'b'$ or $ab$), rotate the apparent view about $a'$ or $a$ until it is parallel to $xy$, then project vertically to the other view's locus.
- If no endpoint positions are specified, place end $A$ directly on both $HP$ and $VP$ ($a'$ and $a$ on $xy$) to simplify the construction.
- For an endpoint in Quadrant II equidistant from $HP$ and $VP$, its front view and top view coincide at the exact same point above $xy$.

<!-- page 5 | Plane Rotation (Trapezoidal) Method and End Projectors -->

## Plane Rotation (Trapezoidal) Method and End Projectors

### Idea in brief
When the positions of both endpoints of a line are known along with the horizontal distance between their vertical projectors, you can draw the apparent front view ($a'b'$) and top view ($ab$) directly. Instead of rotating the line using compass arcs, the **plane rotation (trapezoidal) method** folds (rabats) the projecting planes directly onto the drawing sheet. By erecting perpendiculars at the ends of an apparent view equal to the distances of the endpoints from the other reference plane, you form a right-angled trapezoid (or crossed triangles if the line crosses quadrants) whose slant edge gives the true length ($TL$), true inclination ($	heta$ or $\phi$), and trace ($HT$ or $VT$).

### Key terms
- **End projector ($EP$):** The vertical line connecting the front view and top view of the same endpoint ($a'$ with $a$, or $b'$ with $b$), perpendicular to the reference line $XY$.
- **Distance between end projectors:** The horizontal distance measured parallel to $XY$ between the projector of end $A$ and the projector of end $B$.
- **Plane rotation (trapezoidal / rabatting) method:** A graphical technique that rotates the projecting plane containing the line and its apparent view about the apparent view itself until it lies flat on the reference plane.
- **Same-side vs. opposite-side perpendiculars:** When both ends of a line lie on the same side of a reference plane (e.g., both above $HP$), the perpendiculars erected on the corresponding view go to the same side of the view. When the ends lie on opposite sides (e.g., one above $HP$ and one below $HP$), the perpendiculars are erected on opposite sides of the view.

### Rules and formulas
- **Front view trapezoidal construction:** Erect perpendiculars to the front view $a'b'$ at $a'$ and $b'$ of lengths equal to the distances of $A$ and $B$ from $VP$ (the distances of $a$ and $b$ from $XY$). Joining their tips gives:
  $$AB = TL, \quad \angle(a'b', AB) = \phi$$
- **Top view trapezoidal construction:** Erect perpendiculars to the top view $ab$ at $a$ and $b$ of lengths equal to the distances of $A$ and $B$ from $HP$ (the distances of $a'$ and $b'$ from $XY$). Joining their tips gives:
  $$AB = TL, \quad \angle(ab, AB) = \theta$$
- **Sign convention for perpendiculars:**
  - If $a$ and $b$ are on the **same side** of $XY$ (both in front of $VP$, or both behind $VP$), erect perpendiculars at $a'$ and $b'$ on the **same side** of $a'b'$.
  - If $a$ and $b$ are on **opposite sides** of $XY$ (one in front of $VP$, one behind $VP$), erect perpendiculars at $a'$ and $b'$ on **opposite sides** of $a'b'$.
  - The exact same rule applies to $a'$ and $b'$ relative to $XY$ when erecting perpendiculars on the top view $ab$.
- **Traces by plane rotation:**
  - The intersection of the true-length line $AB$ (or its extension) with the front view $a'b'$ (or its extension) locates $v'$, which projects vertically to $VT$ on the true-length line or follows the trace relation on $a'b'$. Specifically, the intersection of the rotated true-length line with the apparent view $a'b'$ gives the **Vertical Trace ($VT$)** directly when distances from $VP$ are used.
  - The intersection of the rotated true-length line $AB$ with the apparent top view $ab$ (or its extension) gives the **Horizontal Trace ($HT$)** directly when distances from $HP$ are used.
- **Endpoints resting on reference planes:**
  - If an endpoint lies **in $HP$** ($0\text{ mm}$ from $HP$), its front view lies on $XY$ ($a'$ coincides with $h'$) and its top view $a$ is directly the **Horizontal Trace ($HT$)**.
  - If an endpoint lies **in $VP$** ($0\text{ mm}$ from $VP$), its top view lies on $XY$ ($b$ coincides with $v$) and its front view $b'$ is directly the **Vertical Trace ($VT$)**.

> **Key idea.** Erect perpendiculars to the **front view** $a'b'$ using distances from **$VP$** to find $TL$, $\phi$, and $VT$. Erect perpendiculars to the **top view** $ab$ using distances from **$HP$** to find $TL$, $\theta$, and $HT$.

> **Figure: Step 11.3: Complete projection of line AB with b and b' on the same locus**
>
> Engineering drawing labelled 11.3 showing the projections of a line AB where points b and b' lie on the same horizontal locus above the xy reference line. Point a' is 15 mm above xy, and point a is 25 mm below xy on the same vertical projector. From a, a horizontal line ab1 of length 80 mm (top view length) is drawn to the right. A vertical projector goes up from b1 to intersect the line from a' inclined at 20 degrees to the horizontal at point b1'. A horizontal locus line passes through b1' above xy. An arc centered at a with radius ab1 = 80 mm is swung upwards to meet the horizontal locus of b1' at point b'b (where both the top view b and front view b' coincide on the same locus and projector). Segment a'b' is drawn (front view), and segment ab is drawn (top view, extending above xy to the locus line). From a, another line ab2' is drawn at angle phi (labelled with symbol phi) to the horizontal locus at b2', obtained by rotating the true length. Boxes on the right state: GIVEN: [1] TV - 80mm, [2] A - 15 aHP, [3] A - 25 fVP, [4] theta - 20 degrees, [5] b & b' - on same locus. ANSWERS: [1] TL - 85mm, [2] a'b' - 49mm, [3] phi - 55 degrees. Note at bottom: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

### Method
1. **Draw the reference line and end projectors:** Draw the horizontal line $XY$. Draw the vertical projector for end $A$, then draw a parallel vertical projector for end $B$ at the given horizontal distance $EP$ to the right.
2. **Plot the apparent views ($a'b'$ and $ab$):**
   - Mark $a'$, $a$, $b'$, and $b$ on their respective projectors according to quadrant rules (First Quadrant: above $HP$ is above $XY$, in front of $VP$ is below $XY$; Third Quadrant: below $HP$ is below $XY$, behind $VP$ is above $XY$).
   - If a coordinate is missing but the apparent view length ($FV$ or $TV$) is given, strike an arc of that length from the known endpoint view to intersect the second projector.
   - Join $a'$ to $b'$ for the front view and $a$ to $b$ for the top view.
3. **Construct the trapezoid on the front view ($a'b'$):**
   - At $a'$, draw a line perpendicular to $a'b'$ of length equal to the distance of $a$ from $XY$ (distance of $A$ from $VP$) to locate $A$.
   - At $b'$, draw a line perpendicular to $a'b'$ of length equal to the distance of $b$ from $XY$ (distance of $B$ from $VP$) to locate $B$. Put it on the same side of $a'b'$ if $A$ and $B$ are on the same side of $VP$, or on the opposite side if one is in front of $VP$ and the other is behind $VP$.
   - Join $A$ and $B$. Measure $AB$ as the true length ($TL$) and the angle between $a'b'$ and $AB$ as the true inclination with $VP$ ($\phi$). The intersection of $AB$ and $a'b'$ (extended if needed) marks $VT$.
4. **Construct the trapezoid on the top view ($ab$):**
   - At $a$, draw a line perpendicular to $ab$ of length equal to the distance of $a'$ from $XY$ (distance of $A$ from $HP$) to locate $A$.
   - At $b$, draw a line perpendicular to $ab$ of length equal to the distance of $b'$ from $XY$ (distance of $B$ from $HP$) to locate $B$, observing the same-side or opposite-side rule.
   - Join $A$ and $B$. Measure $AB$ to verify the true length ($TL$) and measure the angle between $ab$ and $AB$ as the true inclination with $HP$ ($\theta$). The intersection of $AB$ and $ab$ (extended if needed) marks $HT$.

---

### Worked examples

#### Example 1: First Quadrant — Plane Rotation Given Front View and End Projectors (Q12 / Problem 16)
**Problem statement:** A line $AB$ has its end $A$, $10\text{ mm}$ above $HP$ and $15\text{ mm}$ in front of $VP$. The other end $B$ is $40\text{ mm}$ in front of $VP$ and the front view of the line measures $75\text{ mm}$. The distance between the end projectors is $50\text{ mm}$. Draw the projection of the line and find the true inclinations and true length.

**Given data:**
- Distance between end projectors, $EP = 50\text{ mm}$
- Front view length, $FV = a'b' = 75\text{ mm}$
- End $A$: $10\text{ mm}$ above $HP$ ($a'$ is $10\text{ mm}$ above $XY$) and $15\text{ mm}$ in front of $VP$ ($a$ is $15\text{ mm}$ below $XY$)
- End $B$: $40\text{ mm}$ in front of $VP$ ($b$ is $40\text{ mm}$ below $XY$)

> **Figure: Projection of line AB for Q12**
>
> Problem Q12 statement diagram placeholder: A line AB has end A 10 mm above HP and 15 mm in front of VP. End B is 40 mm in front of VP. The front view measures 75 mm and the distance between end projectors is 50 mm.

**Step-by-step solution:**
1. **Draw projectors and locate known points:** Draw reference line $XY$ and two vertical end projectors $50\text{ mm}$ apart. On the left projector, mark $a'$ at $10\text{ mm}$ above $XY$ and $a$ at $15\text{ mm}$ below $XY$. On the right projector, mark $b$ at $40\text{ mm}$ below $XY$.
2. **Complete the apparent views:** Join $a$ and $b$ to obtain the top view $ab$. With center $a'$ and radius $75\text{ mm}$ ($FV$), strike an arc to cut the right projector above $XY$ at $b'$. Join $a'b'$ to get the front view.

> **Figure: Step 12.1 of line projection problem 12**
>
> Drawing labelled 12.1 showing orthographic projections of a line AB across horizontal reference line xy. End projector of A has point a' 10 mm above xy and point a 15 mm below xy. A second projector is at a horizontal distance of 50 mm to the right of A's projector. On this second projector, point b is 40 mm below xy, and point b' is above xy such that the front view segment a'b' has length 75 mm. Top view segment ab is drawn connecting a and b. Beside the drawing: 'GIVEN: [1] FV - 75mm, [2] A - 10 aHP, [3] A - 15 fVP, [4] B - 40 fVP, [5] EP - 50mm', 'SCALE 1:1, ALL DIMENSIONS ARE IN mm', and 'ANSWERS: [1] TL - 79mm, [2] Θ - 18&deg;, [3] θ - 45&deg;'.

3. **Apply plane rotation to the front view ($a'b'$):** Both $A$ and $B$ are in front of $VP$ ($a$ and $b$ are both below $XY$). Erect perpendiculars to $a'b'$ on the same side: at $a'$ of length $15\text{ mm}$ to get $A$, and at $b'$ of length $40\text{ mm}$ to get $B$. Join $AB$. The length $AB$ gives the true length $TL$, and the angle between $a'b'$ and $AB$ gives $\phi$.
4. **Apply plane rotation to the top view ($ab$):** Measure the height of $b'$ above $XY$ from the front view. Since both $a'$ and $b'$ are above $XY$, erect perpendiculars to $ab$ on the same side: at $a$ of length $10\text{ mm}$ to get $A$, and at $b$ of length equal to the height of $b'$ above $XY$ to get $B$. Join $AB$. The angle between $ab$ and $AB$ gives $\theta$.

> **Figure: Step 12.2 of line projection problem 12**
>
> Drawing labelled 12.2 building upon 12.1 (with the same x-y line, projectors 50 mm apart, a' 10 mm above xy, a 15 mm below xy, b 40 mm below xy, and a'b' = 75 mm) by adding auxiliary views to determine true length and inclinations. From a'b', perpendiculars are erected at a' (length 15 mm, equal to distance of a below xy, reaching point A) and at b' (length 40 mm, equal to distance of b below xy, reaching point B); segment AB is drawn with angle ϕ marked between a'b' and AB. Similarly, from top view ab, perpendiculars are erected at a (length 10 mm, reaching A) and at b (length equal to height of b' above xy, reaching B); segment AB is drawn with angle θ marked between ab and AB. Beside the drawing: 'GIVEN: [1] FV - 75mm, [2] A - 10 aHP, [3] A - 15 fVP, [4] B - 40 fVP, [5] EP - 50mm', 'ANSWERS: [1] TL - 79mm, [2] ϕ - 18&deg;, [3] θ - 45&deg;', and 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.

**Answers:**
- True Length, $TL = 79\text{ mm}$
- Inclination with $VP$, $\phi = 18^\circ$
- Inclination with $HP$, $\theta = 45^\circ$

---

#### Example 2: Third Quadrant — Plane Rotation Given Both Ends and End Projectors (Q13 / Problem 17)
**Problem statement:** A line $AB$ is inclined to both reference planes. Point $A$ is $10\text{ mm}$ behind $VP$ and $25\text{ mm}$ below $HP$. Point $B$ is $30\text{ mm}$ behind $VP$ and $40\text{ mm}$ below $HP$. The distance between $A$ and $B$ along $XY$ is $50\text{ mm}$. Determine the true length and true inclinations of the line with reference planes and also find its traces.

**Given data:**
- Distance between end projectors, $EP = 50\text{ mm}$
- End $A$: $25\text{ mm}$ below $HP$ ($a'$ is $25\text{ mm}$ below $XY$) and $10\text{ mm}$ behind $VP$ ($a$ is $10\text{ mm}$ above $XY$)
- End $B$: $40\text{ mm}$ below $HP$ ($b'$ is $40\text{ mm}$ below $XY$) and $30\text{ mm}$ behind $VP$ ($b$ is $30\text{ mm}$ above $XY$)

**Step-by-step solution:**
1. **Plot apparent views in the Third Quadrant:** Draw $XY$ and two vertical projectors $50\text{ mm}$ apart. On the left projector, mark $a$ at $10\text{ mm}$ above $XY$ and $a'$ at $25\text{ mm}$ below $XY$. On the right projector, mark $b$ at $30\text{ mm}$ above $XY$ and $b'$ at $40\text{ mm}$ below $XY$. Join $a'b'$ (front view) and $ab$ (top view).
2. **Trapezoid on top view ($ab$) for $TL$, $\theta$, and $HT$:** Both $A$ and $B$ are below $HP$. Erect perpendiculars to $ab$ on the same side: $25\text{ mm}$ at $a$ and $40\text{ mm}$ at $b$. Join their ends to find $TL$ and angle $\theta$. Extend the true-length line and $ab$ until they intersect at $HT$.
3. **Trapezoid on front view ($a'b'$) for $TL$, $\phi$, and $VT$:** Both $A$ and $B$ are behind $VP$. Erect perpendiculars to $a'b'$ on the same side: $10\text{ mm}$ at $a'$ and $30\text{ mm}$ at $b'$. Join their ends to find $TL$ and angle $\phi$. Extend the true-length line and $a'b'$ until they intersect at $VT$.

```line-projection
{
  "A": {
    "y": -10,
    "z": -25
  },
  "length": 56,
  "B": {
    "y": -30,
    "z": -40
  },
  "printed": {
    "theta": 16,
    "phi": 21
  }
}
```

**Answers:**
- True Length, $TL = 56\text{ mm}$
- Inclination with $VP$, $\phi = 21^\circ$
- Inclination with $HP$, $\theta = 16^\circ$

---

#### Example 3: Line Crossing Between First and Third Quadrants (Q14 / Problem 18)
**Problem statement:** The end $A$ of the line $AB$ is $25\text{ mm}$ below $HP$ and $40\text{ mm}$ behind $VP$ while the other end $B$ is $50\text{ mm}$ above $HP$ and $25\text{ mm}$ in front of $VP$. If the distance between the end projectors is $55\text{ mm}$, draw projections of the line $AB$. Determine the true length of the line, the inclinations of the line with $HP$ and $VP$ and also find its traces.

**Given data:**
- Distance between end projectors, $EP = 55\text{ mm}$
- End $A$ (Third Quadrant): $25\text{ mm}$ below $HP$ ($a'$ is $25\text{ mm}$ below $XY$) and $40\text{ mm}$ behind $VP$ ($a$ is $40\text{ mm}$ above $XY$)
- End $B$ (First Quadrant): $50\text{ mm}$ above $HP$ ($b'$ is $50\text{ mm}$ above $XY$) and $25\text{ mm}$ in front of $VP$ ($b$ is $25\text{ mm}$ below $XY$)

> **Figure: Problem Q14 projection of line AB**
>
> Projection of line AB where end A is 25 mm below HP and 40 mm behind VP, end B is 50 mm above HP and 25 mm in front of VP, and the distance between end projectors is 55 mm.

**Step-by-step solution:**
1. **Draw the apparent views ($a'b'$ and $ab$):** Draw $XY$ and two vertical projectors $55\text{ mm}$ apart. On the left projector, mark $a$ at $40\text{ mm}$ above $XY$ and $a'$ at $25\text{ mm}$ below $XY$. On the right projector, mark $b'$ at $50\text{ mm}$ above $XY$ and $b$ at $25\text{ mm}$ below $XY$. Join $a'b'$ and $ab$; notice that both apparent views cross $XY$.

> **Figure: Step 14.1 of projection of line AB showing front view a'b' and top view ab crossing xy**
>
> Solution step labelled 14.1. Horizontal reference line xy. On the left projector: point a is 40 mm above xy (marked with double tick on projector) and point a' is 25 mm below xy (marked with square on projector). On the right projector, at an end projector distance of 55 mm to the right of the left projector: point b' is 50 mm above xy (marked with circle on projector) and point b is 25 mm below xy (marked with triple tick on projector). Segment a'b' (front view) crosses xy at h'. Segment ab (top view) crosses xy at v. Box GIVEN: [1] A - 25 bHP, [2] A - 40 bVP, [3] B - 50 aHP, [4] B - 25 fVP, [5] EP - 55mm. Box ANSWERS: [1] TL - 113mm, [2] phi - 35°, [3] theta - 41°, [4] h'-HT - 18mm, [5] v-VT - 21mm. Note below boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. **Trapezoidal construction on the front view ($a'b'$):** Because $A$ is $40\text{ mm}$ behind $VP$ ($a$ is above $XY$) and $B$ is $25\text{ mm}$ in front of $VP$ ($b$ is below $XY$), their perpendiculars must be erected on **opposite sides** of $a'b'$. At $a'$, erect a perpendicular of length $40\text{ mm}$ to one side of $a'b'$ to reach $A$. At $b'$, erect a perpendicular of length $25\text{ mm}$ to the opposite side of $a'b'$ to reach $B$. Join $A$ and $B$. The segment $AB$ is the true length $TL$, the acute angle it makes with $a'b'$ is $\phi$, and the point where $AB$ crosses $a'b'$ is the Vertical Trace ($VT$).

> **Figure: Step 14.2 of projection of line AB finding true length AB, theta and HT by trapezoidal method on front view**
>
> Solution step labelled 14.2. Continues from 14.1 with reference line xy, front view a'b' (a' 25 mm below xy, b' 50 mm above xy) and top view ab (a 40 mm above xy, b 25 mm below xy), end projector distance 55 mm. Perpendiculars are erected to segment a'b' at a' (going up-left to point A, length equal to 40 mm, marked with double tick and circle on perpendicular) and at b' (going down-right to point B, length equal to 25 mm, marked with circle on perpendicular). Line AB is drawn connecting A and B; it intersects the extension of a'b' (or crosses a'b' near h') at HT, with a vertical projector from h' on xy up to HT. The angle between a'b' and AB is marked as theta. Box GIVEN: [1] A - 25 bHP, [2] A - 40 bVP, [3] B - 50 aHP, [4] B - 25 fVP, [5] EP - 55mm. Box ANSWERS: [1] TL - 113mm, [2] phi - 35°, [3] theta - 41°, [4] h'-HT - 18mm, [5] v-VT - 21mm. Note below boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. **Trapezoidal construction on the top view ($ab$):** Because $A$ is $25\text{ mm}$ below $HP$ ($a'$ is below $XY$) and $B$ is $50\text{ mm}$ above $HP$ ($b'$ is above $XY$), erect perpendiculars on **opposite sides** of $ab$. At $a$, erect a perpendicular of length $25\text{ mm}$ to reach $A$. At $b$, erect a perpendicular of length $50\text{ mm}$ to the opposite side of $ab$ to reach $B$. Join $A$ and $B$. The acute angle between $AB$ and $ab$ is $\theta$, and the intersection of $AB$ with $ab$ locates the Horizontal Trace ($HT$).

> **Figure: Step 14.3 solution drawing for projection of line AB using the plane rotation method**
>
> Engineering drawing labelled 14.3 showing the projection of line AB using the plane rotation (trapezoid) method. Horizontal reference line xy. On the left end projector: point a is 40 mm above xy, and point a' is 25 mm below xy. On the right end projector (at distance 55 mm to the right of the left projector): point b' is 50 mm above xy, and point b is 25 mm below xy. Front view segment a'b' connects a' to b', intersecting xy at h' and the vertical trace at VT. Top view segment ab connects a to b, intersecting xy at v and the horizontal trace at HT. A note at top-left reads: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Trapezoids are constructed on a'b' and ab to find true length AB and inclinations: perpendiculars at a (length 25) and b (length 50, opposite side) give rotated line AB inclined at angle theta to ab; perpendiculars at a' (length 40) and b' (length 25, opposite side) give rotated line AB inclined at angle phi to a'b'. Text boxes on the right read: GIVEN: [1] A - 25 bHP, [2] A - 40 bVP, [3] B - 50 aHP, [4] B - 25 fVP, [5] EP - 55mm. ANSWERS: [1] TL - 113mm, [2] phi - 35°, [3] theta - 41°, [4] h'-HT - 18mm, [5] v-VT - 21mm. SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answers:**
- True Length, $TL$, inclinations $\theta$ and $\phi$, and traces $HT$ and $VT$ are determined directly from the crossed-perpendicular constructions.

---

#### Example 4: Line Crossing From First to Third Quadrant (Q207 / Problem 19)
**Problem statement:** The point $A$ of a line is $40\text{ mm}$ above $HP$ and $20\text{ mm}$ in front of $VP$. The point $B$ is $30\text{ mm}$ below $HP$ and $50\text{ mm}$ behind $VP$. The distance between end projectors is $100\text{ mm}$. Find the true length of the line and its inclination with $HP$ and $VP$.

**Given data:**
- Distance between end projectors, $EP = 100\text{ mm}$
- End $A$ (First Quadrant): $40\text{ mm}$ above $HP$ ($a'$ is $40\text{ mm}$ above $XY$) and $20\text{ mm}$ in front of $VP$ ($a$ is $20\text{ mm}$ below $XY$)
- End $B$ (Third Quadrant): $30\text{ mm}$ below $HP$ ($b'$ is $30\text{ mm}$ below $XY$) and $50\text{ mm}$ behind $VP$ ($b$ is $50\text{ mm}$ above $XY$)

**Step-by-step solution:**
1. **Plot projections:** Draw $XY$ and set two vertical end projectors $100\text{ mm}$ apart. On the left projector, mark $a'$ at $40\text{ mm}$ above $XY$ and $a$ at $20\text{ mm}$ below $XY$. On the right projector, mark $b$ at $50\text{ mm}$ above $XY$ and $b'$ at $30\text{ mm}$ below $XY$. Connect $a'b'$ and $ab$.
2. **Find $TL$, $\phi$, and $VT$ on front view $a'b'$:** Since $A$ is in front of $VP$ and $B$ is behind $VP$, erect perpendiculars to $a'b'$ on opposite sides: $20\text{ mm}$ at $a'$ and $50\text{ mm}$ at $b'$. Join the ends to cross $a'b'$ at $VT$, measuring $TL$ and angle $\phi$.
3. **Find $TL$, $\theta$, and $HT$ on top view $ab$:** Since $A$ is above $HP$ and $B$ is below $HP$, erect perpendiculars to $ab$ on opposite sides: $40\text{ mm}$ at $a$ and $30\text{ mm}$ at $b$. Join the ends to cross $ab$ at $HT$, measuring $TL$ and angle $\theta$.

> **Figure: Worked projection drawing 207 showing a line crossing quadrants with traces HT and VT**
>
> Engineering drawing labelled 207 showing projections, true length by trapezoid method, and traces of a line AB.
> - Horizontal reference line x-y.
> - Left end projector has point a' at 40 mm above x-y and point a at 20 mm below x-y.
> - Right end projector is at a horizontal distance of 100 mm from the left end projector. On it, point b is 50 mm above x-y and point b' is 30 mm below x-y.
> - Front view segment a'b' crosses x-y at h'. Perpendicular at h' meets top view ab at HT.
> - Top view segment ab crosses x-y at v. Perpendicular at v meets front view a'b' at VT.
> - Trapezoid constructions on a'b' and ab give true length segments AB (one above with angle phi at a' and right-angle symbols at a' and b', and one going from A below to B above with angle theta at b and right-angle symbols at a and b).
> - GIVEN box:
>   [1] A - 40 aHP
>   [2] A - 20 fVP
>   [3] B - 30 bHP
>   [4] B - 50 bVP
>   [5] EP - 100mm
> - ANSWERS box:
>   [1] TL - 141mm
>   [2] v-VT - 20mm
>   [3] h'-HT - 20mm
>   [4] phi - 30°
>   [5] theta - 30°

**Answers:**
- True length $TL$, inclinations $\theta$ and $\phi$, and internal traces $HT$ and $VT$ are obtained at the intersections of the rotated true-length lines with $ab$ and $a'b'$.

---

#### Example 5: Endpoints Touching Reference Planes in the First Quadrant (Q15 / Problem 20)
**Problem statement:** A line $AB$ has its end $A$ in $HP$ and $40\text{ mm}$ in front of $VP$ and Point $B$ is in $VP$ and $50\text{ mm}$ above $HP$. The distance between the end projectors is $70\text{ mm}$. Draw its projections. Find the true length of the line and its inclinations with $HP$ and $VP$. Also find its traces.

**Given data:**
- Distance between end projectors, $EP = 70\text{ mm}$
- End $A$: on $HP$ ($0\text{ mm}$ above $HP$, so $a'$ is on $XY$) and $40\text{ mm}$ in front of $VP$ ($a$ is $40\text{ mm}$ below $XY$)
- End $B$: $50\text{ mm}$ above $HP$ ($b'$ is $50\text{ mm}$ above $XY$) and on $VP$ ($0\text{ mm}$ in front of $VP$, so $b$ is on $XY$)

> **Figure: Projection of line AB for Q15 with A in HP and 40mm in front of VP, B in VP and 50mm above HP, and end projectors 70mm apart**
>
> Problem Q15 (20): A line AB has its end A in HP (0 mm above HP) and 40 mm in front of VP, and point B is in VP (0 mm in front of VP) and 50 mm above HP. The distance between the end projectors (EP) is 70 mm. Find the true length, inclinations with HP and VP, and its traces.

**Step-by-step solution:**
1. **Draw views and identify traces immediately:** Draw $XY$ and two vertical projectors $70\text{ mm}$ apart. On the left projector, mark $a'(h')$ on $XY$ and $a(HT)$ at $40\text{ mm}$ below $XY$ (since $A$ is in $HP$, $A$ itself is the Horizontal Trace). On the right projector, mark $b(v)$ on $XY$ and $b'(VT)$ at $50\text{ mm}$ above $XY$ (since $B$ is in $VP$, $B$ itself is the Vertical Trace). Join $a'b'$ ($86\text{ mm}$) and $ab$ ($81\text{ mm}$).

> **Figure: Step 15.1 of line projection problem 15**
>
> Drawing labelled 15.1 showing the projections of a line AB on the horizontal reference line xy. Left projector has a'(h') on the xy line and a(HT) 40 mm below the xy line (vertical dimension 40, projector marked with a small square). Right projector, at a horizontal distance of 70 mm from the left projector, has b(v) on the xy line and b'(VT) 50 mm above the xy line (vertical dimension 50, projector marked with a small circle). Thick segments connect a'(h') to b'(VT) for the front view and a(HT) to b(v) for the top view. Beside the drawing are two boxes and a scale note. GIVEN box: [1] A - on HP, [2] A - 40 fVP, [3] B - 50 aHP, [4] B - on VP, [5] EP - 70mm. ANSWERS box: [1] TL - 95mm, [2] phi - 25°, [3] theta - 31°, [4] h'-HT - 40mm, [5] v-VT - 50mm, [6] a'b' - 86mm, [7] ab - 81mm. Below the boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. **Right-triangle construction on front view $a'b'$:** Because $B$ is on $VP$ ($0\text{ mm}$ from $VP$), the perpendicular at $b'$ has length $0$. Only erect a perpendicular at $a'$ to $a'b'$ of length $40\text{ mm}$ (distance of $A$ from $VP$) to locate $A$. Join $A$ directly to $b'(VT)$ to get $TL$ and angle $\phi$ at $b'$.
3. **Right-triangle construction on top view $ab$:** Because $A$ is on $HP$ ($0\text{ mm}$ from $HP$), the perpendicular at $a$ has length $0$. Only erect a perpendicular at $b$ to $ab$ of length $50\text{ mm}$ (distance of $B$ from $HP$) to locate $B$. Join $B$ directly to $a(HT)$ to get $TL$ and angle $\theta$ at $a$.

> **Figure: Step 15.2 of line projection problem 15**
>
> Drawing labelled 15.2 continuing step 15.1 by finding true lengths and inclinations using the trapezoidal method. The reference line xy, front view a'(h') to b'(VT), top view a(HT) to b(v), projector separation 70 mm, a(HT) 40 mm below xy, and b'(VT) 50 mm above xy are as in 15.1. At a'(h'), a construction line is drawn perpendicular to the front view a'b' (marked with a right-angle symbol and a small square, length equal to the 40 mm distance from a' to a), and its outer end is joined to b'(VT) by a thick line labelled TL; the angle between a'b' and this TL line at b'(VT) is marked phi. At b(v), a construction line is drawn perpendicular to the top view ab (marked with a right-angle symbol and a small circle, length equal to the 50 mm distance from b to b'), and its outer end is joined to a(HT) by a thick line labelled TL; the angle between ab and this TL line at a(HT) is marked theta. Beside the drawing are the same boxes and scale note: GIVEN: [1] A - on HP, [2] A - 40 fVP, [3] B - 50 aHP, [4] B - on VP, [5] EP - 70mm. ANSWERS: [1] TL - 95mm, [2] phi - 25°, [3] theta - 31°, [4] h'-HT - 40mm, [5] v-VT - 50mm, [6] a'b' - 86mm, [7] ab - 81mm. SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answers:**
- True Length, $TL = 95\text{ mm}$
- Inclination with $VP$, $\phi = 25^\circ$
- Inclination with $HP$, $\theta = 31^\circ$
- Distance $h'\text{–}HT = 40\text{ mm}$
- Distance $v\text{–}VT = 50\text{ mm}$
- Front view length, $a'b' = 86\text{ mm}$
- Top view length, $ab = 81\text{ mm}$

---

### Common mistakes
- **Swapping the perpendicular lengths between views:** Students often erect $HP$ distances (heights above/below $XY$ from the front view) onto the front view $a'b'$. Always remember: on the **front view** $a'b'$, erect the distances from **$VP$** (measured from the top view); on the **top view** $ab$, erect the distances from **$HP$** (measured from the front view).
- **Erecting perpendiculars to $XY$ instead of the apparent view:** In the plane rotation method, the construction lines at $a'$, $b'$ and $a$, $b$ must be drawn at $90^\circ$ to the **slanted apparent view** ($a'b'$ or $ab$), never vertically to $XY$.
- **Erecting perpendiculars on the same side when a line crosses quadrants:** If $a$ is above $XY$ and $b$ is below $XY$, erecting both perpendiculars on the same side of $a'b'$ gives an incorrect true length and inclination. They must go to opposite sides of $a'b'$ so the true-length line crosses $a'b'$ between $a'$ and $b'$.

---

### Try it yourself

#### Practice Problem 1: Endpoints Touching Reference Planes in the Third Quadrant (Q16 / Problem 21)
**Problem statement:** The end $A$ of the line $AB$ is in $HP$ and $25\text{ mm}$ behind $VP$. The end $B$ is in $VP$ and $50\text{ mm}$ below $HP$. The distance between the end projectors is $75\text{ mm}$. Draw the projections of $AB$ and determine its true length, traces and inclinations with $HP$ and $VP$.

**Given data:**
- $A$: on $HP$, $25\text{ mm}$ behind $VP$
- $B$: $50\text{ mm}$ below $HP$, on $VP$
- $EP = 75\text{ mm}$

> **Figure: Step 16.1 showing projections of line AB in the third quadrant with given data and answers**
>
> Orthographic projection diagram labelled 16.1 showing a horizontal reference line xy. Above xy, on the left projector, point a and (HT) is located 25mm above xy, while a' and (h') lies on xy. On the right projector, 75mm to the right of the left projector, point b and (v) lies on xy, and point b' and (VT) lies 50mm below xy. A thick line connects a (above xy) to b (on xy), representing the top view ab. Another thick line connects a' (on xy) to b' (below xy), representing the front view a'b'.
> 
> Beside the drawing are two boxes:
> GIVEN:
> [1] A - on HP
> [2] A - 25 bVP
> [3] B - 50 bHP
> [4] B - on VP
> [5] EP - 75mm
> 
> ANSWERS:
> [1] TL - 94mm
> [2] ͆ - 16&deg;
> [3] Θ - 32&deg;
> [4] h'-HT - 25mm
> [5] v-VT - 50mm
> [6] a'b' - 90mm
> [7] ab - 79mm
> 
> Below the boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Printed answers for checking:**
- $TL = 94\text{ mm}$
- $\phi = 16^\circ$
- $\theta = 32^\circ$
- $h'\text{–}HT = 25\text{ mm}$
- $v\text{–}VT = 50\text{ mm}$
- $a'b' = 90\text{ mm}$
- $ab = 79\text{ mm}$

---

### Quick recall
- **End projector spacing ($EP$):** Always measured horizontally along $XY$ between the vertical line $a'a$ and the vertical line $b'b$.
- **Front view trapezoid ($a'b'$):** Erect perpendiculars to $a'b'$ equal to the distances from $VP$ ($a$ and $b$ from $XY$) $\rightarrow$ yields $TL$, $\phi$, and $VT$.
- **Top view trapezoid ($ab$):** Erect perpendiculars to $ab$ equal to the distances from $HP$ ($a'$ and $b'$ from $XY$) $\rightarrow$ yields $TL$, $\theta$, and $HT$.
- **Quadrant-crossing rule:** Same side of $XY$ $\rightarrow$ erect perpendiculars on the **same side** of the view; opposite sides of $XY$ $\rightarrow$ erect perpendiculars on **opposite sides** of the view.
- **Endpoint on a reference plane:** An end on $HP$ is the $HT$ itself (its front view $a'$ lies on $XY$); an end on $VP$ is the $VT$ itself (its top view $b$ lies on $XY$). The trapezoid simplifies into a right triangle.

<!-- page 6 | Midpoint Problems and Special Endpoint Configurations -->

## Midpoint Problems and Special Endpoint Configurations

### Idea in brief
Standard line projection problems start with the coordinates of one endpoint. However, some problems give the position of the midpoint $M$ instead, or constrain the endpoints in special ways—such as placing both ends on a single vertical projector or resting one end on the Horizontal Plane (HP) and the other on the Vertical Plane (VP). Because orthographic projection preserves ratios along a line, a midpoint in space always projects as the exact midpoint of both the front view and the top view. For special endpoint configurations, you can use auxiliary reference lines or rabatted right triangles to find the unknown positions and true lengths.

### Key terms
- **Midpoint ($M$)**: The exact center of line $AB$, projected as $m'$ in the front view and $m$ in the top view.
- **Profile plane**: A plane perpendicular to both HP and VP (and therefore perpendicular to the $xy$ reference line).
- **Complementary inclinations**: When the true inclinations satisfy $\theta + \phi = 90^\circ$, the line lies in a profile plane and all its projections fall on a single vertical projector.
- **Auxiliary initial position**: A temporary, assumed starting position ($a_1$ or $b_1'$) used to construct true-length triangles when the initial distance of a point from a reference plane is not directly given.

### Rules and formulas
> **Key idea.** The midpoint $M$ divides the true length, the front view, and the top view into two equal halves, and the horizontal loci of endpoints $A$ and $B$ are equidistant from the locus of $M$.

- **Midpoint symmetry in views**:
  $$a'm' = m'b' = \frac{\text{FV}}{2} \quad \text{and} \quad am = mb = \frac{\text{TV}}{2}$$
  The midpoint of the line in space projects as the midpoint of both apparent views.

- **Midpoint symmetry in true length**:
  $$a_1'm' = m'b_1' = \frac{\text{TL}}{2} \quad \text{and} \quad a_2m = mb_2 = \frac{\text{TL}}{2}$$
  Rotating half of the line about $M$ works exactly like rotating the full line about an endpoint.

- **Profile plane condition**:
  $$\theta + \phi = 90^\circ$$
  When the sum of the true inclinations with HP and VP is $90^\circ$, the front view $a'b'$ and top view $ab$ lie on the same vertical projector perpendicular to $xy$.

- **Ends on reference planes**:
  $$\text{End } A \text{ in HP} \implies a' \text{ lies on } xy$$
  $$\text{End } B \text{ in VP} \implies b \text{ lies on } xy$$

### Method

#### Case 1: Midpoint problems
1. Locate $m'$ and $m$ on a single vertical projector using the given distances of midpoint $M$ from HP and VP.
2. Draw horizontal reference lines through $m'$ and $m$.
3. **If true length (TL) and true inclinations ($\theta, \phi$) are given**:
   - From $m'$, draw a line at angle $\theta$ to the horizontal and mark off $\frac{\text{TL}}{2}$ on both sides of $m'$ to get $a_1'$ and $b_1'$. Draw horizontal loci for $a'$ and $b'$ through these points.
   - Project $b_1'$ vertically to the horizontal line through $m$ to get the half-top-view length $mb_1$. Swing an arc of radius $mb_1$ centered at $m$ to cut the locus of $b$ at $b$, and extend through $m$ to $a$.
   - Alternatively, draw $\frac{\text{TL}}{2}$ at angle $\phi$ through $m$ to find the loci of $a$ and $b$, project to the horizontal through $m'$ to find the half-front-view length, and swing arcs to locate $a'$ and $b'$.
4. **If front view (FV), top view (TV), and one endpoint locus are given**:
   - Draw the given endpoint locus (for example, the locus of $a$ at its given distance in front of VP).
   - With center $m$ and radius $\frac{\text{TV}}{2}$, cut the locus of $a$ to locate $a$. Extend line $am$ straight through $m$ by an equal length $\frac{\text{TV}}{2}$ to locate $b$.
   - Project $a$ vertically into the front view. With center $m'$ and radius $\frac{\text{FV}}{2}$, cut this projector to find $a'$. Extend $a'm'$ straight through $m'$ by $\frac{\text{FV}}{2}$ to find $b'$.
   - Rotate the full view $ab$ or $a'b'$ parallel to $xy$ as usual to find the true length and inclinations.

#### Case 2: Line in a profile plane ($\theta + \phi = 90^\circ$, same projector)
1. Mark the projections $a', b', a, b$ on the single vertical projector according to their quadrant positions above or below $xy$.
2. To find true length and $\theta$: Erect perpendiculars at the top view points $a$ and $b$ of lengths equal to the distances of $A$ and $B$ from HP (heights of $a'$ and $b'$ from $xy$), taking care of signs if they lie on opposite sides of HP. Join the ends to form the true length $A_2B_2$; the angle it makes with the vertical projector is $\theta$.
3. To find true length and $\phi$: Erect perpendiculars at the front view points $a'$ and $b'$ of lengths equal to the distances of $A$ and $B$ from VP (distances of $a$ and $b$ from $xy$). Join the ends to form $A_1B_1$; the angle it makes with the vertical projector is $\phi$.

#### Case 3: End $A$ in HP and End $B$ in VP (initial position of $A$ in TV not given)
1. Since $A$ is in HP, mark $a'$ directly on $xy$. Since $B$ is in VP, its final top view $b$ must also lie on $xy$.
2. Construct the true length in the front view ($a'b_1'$) from $a'$ using $\text{TL}$ and $\theta$ (or using the given $\text{TV}$ length along $xy$ to $b_1$ and $\text{TL}$). Draw the horizontal locus of $b'$ through $b_1'$.
3. If $a$'s distance from VP is initially unknown, assume an auxiliary horizontal line $a_1b_1$ below $xy$. Set off the true length at angle $\phi$ from $a_1$ to $b_2$, and project $b_2$ vertically up to the $xy$ line (which is the locus of $b$) to find the true front view length, or swing the front view length from $a'$ to locate $b'$ and project down to $xy$ to find $b$.

---

### Worked examples

*(Note: The figure below shows the final step of the preceding problem in the course series.)*

> **Figure: Solution step 16.2 showing projections and traces of line AB**
>
> Engineering drawing labeled 16.2 showing the orthographic projections and traces of a line AB with end projectors separated by 75 mm along reference line xy.
> - On the left projector: point a' (h') is on the xy line; point a (HT) is 25 mm above the xy line.
> - On the right projector (75 mm to the right): point b (v) is on the xy line; point b' (VT) is 50 mm below the xy line.
> - Top view line segment 'ab' connects 'a' (25 mm above xy) to 'b' (on xy). From 'a', a true length line (labeled TL) extends upwards to the right at an angle of phi (labeled with symbol phi, though oriented like theta in standard diagrams, here the arc between ab and the upper TL is labeled phi) to meet the perpendicular to 'ab' at 'b'.
> - Front view line segment 'a'b'' connects 'a'' (on xy) to 'b'' (50 mm below xy). From 'b'', a true length line (labeled TL) extends upwards to the left at an angle labeled theta (arc between a'b' and lower TL) to meet the perpendicular to 'a'b'' at 'a''.
> - GIVEN box: [1] A - on HP, [2] A - 25 bVP, [3] B - 50 bHP, [4] B - on VP, [5] EP - 75mm.
> - ANSWERS box: [1] TL - 94mm, [2] phi - 16 deg, [3] theta - 32 deg, [4] h'-HT - 25mm, [5] v-VT - 50mm, [6] a'b' - 90mm, [7] ab - 79mm.
> - Note at bottom right: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

#### Example 1: Line in a Profile Plane — Ladder Problem (Q17 / Problem 22)
**Problem statement:** A straight line $AB$ is $80\text{ mm}$ long. The end $A$ is in HP and the end $B$ is in VP. The line $AB$ is inclined at $30^\circ$ to HP and $60^\circ$ to VP. Draw the projections of the line.

**Given data:**
- True length $AB = 80\text{ mm}$
- True inclination with HP, $\theta = 30^\circ$
- True inclination with VP, $\phi = 60^\circ$
- End $A$ is in HP ($a'$ on $xy$)
- End $B$ is in VP ($b$ on $xy$)

```line-projection
{
  "A": {
    "y": 40,
    "z": 0
  },
  "length": 80,
  "B": {
    "y": 0,
    "z": 40
  }
}
```

**Step-by-step solution:**
1. **Check the angle condition:** Notice that $\theta + \phi = 30^\circ + 60^\circ = 90^\circ$. Because the inclinations are complementary, the line $AB$ lies completely in a profile plane perpendicular to both HP and VP. Therefore, both the front view $a'b'$ and top view $ab$ lie on the same vertical projector.
2. **Fix the reference points on $xy$:** Since $A$ is in HP, its front view $a'$ lies at the intersection of the vertical projector and $xy$. Since $B$ is in VP, its top view $b$ also lies at the intersection of the same vertical projector and $xy$.
3. **Find the height of $B$ above HP and distance of $A$ in front of VP:** Rotate the profile plane onto VP about the vertical projector. From the $xy$ intersection, draw the true length $AB = 80\text{ mm}$ at $\theta = 30^\circ$ to the horizontal $xy$ line.
4. **Project back to the single projector:**
   - The vertical height of the rotated line gives the front view length: $a'b' = 80 \sin 30^\circ = 40\text{ mm}$ above $xy$.
   - The horizontal projection gives the distance of $A$ in front of VP: $ab = 80 \cos 30^\circ = 69.3\text{ mm}$ below $xy$.

> **Watch out.** In the interactive site data for `p038-2`, both the $y$-coordinate of $A$ and the $z$-coordinate of $B$ are entered as $40\text{ mm}$ (which corresponds to $\theta = 30^\circ$ for $z_B = 80\sin 30^\circ = 40\text{ mm}$, whereas exact geometry gives $y_A = 80\cos 30^\circ \approx 69.28\text{ mm}$).

**Answer:** The projections $a'b'$ and $ab$ lie on a single vertical line perpendicular to $xy$, with $a'$ and $b$ on $xy$, $b'$ at $40\text{ mm}$ above $xy$, and $a$ below $xy$.

---

#### Example 2: Midpoint Problem Given Apparent Views (Q20 / Problem 23)
**Problem statement:** A straight line $AB$ has its end $A$, $20\text{ mm}$ in front of VP and nearer to it. The mid point $M$ of the line is $50\text{ mm}$ in front of VP and $45\text{ mm}$ above HP. The front and top view measures $90\text{ mm}$ and $100\text{ mm}$ respectively. Draw the projections of the line. Find the true length of the line and its inclinations with HP and VP.

**Given data:**
- Front view $\text{FV} = 90\text{ mm} \implies a'm' = m'b' = 45\text{ mm}$
- Top view $\text{TV} = 100\text{ mm} \implies am = mb = 50\text{ mm}$
- Midpoint $M$: $50\text{ mm}$ in front of VP, $45\text{ mm}$ above HP
- End $A$: $20\text{ mm}$ in front of VP

> **Figure: Projection of line AB given mid-point M, front view, top view, and distance of A from VP.**
>
> Problem 20 statement figure: A straight line AB with end A 20 mm in front of VP and nearer to it; mid-point M is 50 mm in front of VP and 45 mm above HP; front view length is 90 mm and top view length is 100 mm.

**Step-by-step solution:**
1. **Plot the midpoint $M$ and locus of $a$ (Step 20.1):** Draw the $xy$ line. On a vertical projector, mark $m'$ at $45\text{ mm}$ above $xy$ and $m$ at $50\text{ mm}$ below $xy$. Draw a horizontal locus line for $a$ at $20\text{ mm}$ below $xy$. Since $\text{TV} = 100\text{ mm}$, the half-top-view length is $am = 50\text{ mm}$. With center $m$ and radius $50\text{ mm}$, swing an arc to cut the locus of $a$ at point $a$. Draw a vertical projector up from $a$. Since $\text{FV} = 90\text{ mm}$, the half-front-view length is $a'm' = 45\text{ mm}$. With center $m'$ and radius $45\text{ mm}$, cut the vertical projector from $a$ at $a'$.

> **Figure: Step 20.1 of a line projection construction using mid-point M**
>
> Engineering drawing labelled 20.1 showing the first step of projecting a line AB given its midpoint M. A horizontal reference line is labelled 'x' on the left and 'y' on the right. A vertical projector connects point a' above the xy line and point a at a distance of 20 mm below the xy line. A second vertical projector to the right connects point m' at a distance of 45 mm above the xy line and point m at a distance of 50 mm below the xy line. Above the xy line, a line segment connects a' to m' with length 45 (constructed as an arc of radius 45 from m' intersecting the vertical projector of A at a'). Below the xy line, a line segment connects a to m with length 50 (constructed as an arc of radius 50 from m intersecting the vertical projector of A at a). On the right side, a GIVEN box lists: '[1] A - 20 fVP, [2] M - 50 fVP, [3] M - 45 aHP, [4] FV - 90mm, [5] TV - 100mm'. An ANSWERS box lists: '[1] AB - 108mm, [2] θ - 23°, [3] φ - 34°'. Below the boxes is text: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', and a boxed label '20.1'.

2. **Extend the views through $M$ to find $B$ (Step 20.2):** In the front view, extend segment $a'm'$ (length $45\text{ mm}$) straight through $m'$ by another $45\text{ mm}$ to locate $b'$, and draw the horizontal locus of $b'$. In the top view, extend segment $am$ (length $50\text{ mm}$) straight through $m$ by another $50\text{ mm}$ to locate $b$, and draw the horizontal locus of $b$.

> **Figure: Step 20.2 extending the front and top views from mid-point M to end B**
>
> Engineering drawing labelled 20.2 showing the second step of the projection of line AB. It builds upon figure 20.1. Above the xy line, the front view segment a'm' (length 45) is extended straight through m' by an additional length of 45 to locate endpoint b', through which a horizontal locus line is drawn. Below the xy line, the top view segment am (length 50) is extended straight through m by an additional length of 50 to locate the bottom endpoint [uncertain: b, cut off at the bottom border], through which a horizontal locus line is drawn. All previous dimensions remain: a is 20 mm below xy, m' is 45 mm above xy, m is 50 mm below xy. On the right side, the GIVEN box lists: '[1] A - 20 fVP, [2] M - 50 fVP, [3] M - 45 aHP, [4] FV - 90mm, [5] TV - 100mm'. The ANSWERS box lists: '[1] AB - 108mm, [2] θ - 23°, [3] φ - 34°'. Below the boxes is text: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', and a boxed label '20.2'.

3. **Rotate the views to find true length and inclinations (Step 20.3):**
   - With center $a$ and radius $ab = 100\text{ mm}$, rotate the top view to the horizontal line through $a$ to get $b_2$, and project vertically up to the locus of $b'$ at $b_2'$. Join $a'b_2'$ to measure the true length $AB$ and its inclination $\theta$ with HP.
   - With center $a'$ and radius $a'b' = 90\text{ mm}$, rotate the front view to the horizontal line through $a'$ to get $b_1'$, and project vertically down to the locus of $b$ at $b_1$. Join $ab_1$ to verify the true length and measure its inclination $\phi$ with VP.

> **Figure: Solution step 20.3 for projection of line AB with mid-point M**
>
> Orthographic projection drawing labelled 20.3 with horizontal reference line xy. Above xy (front view): point a' is above xy, with a horizontal line through a' to b1'. Point m' is 45 mm above xy. The front view line a'm'b' has segments a'm' = 50 and m'b' = 50. An arc from b1' goes up to b2', forming true length line a'b2' (labelled TL) at angle theta to the horizontal through a'. A vertical projector connects b' above xy to b below xy, and m' above xy to m below xy. Below xy (top view): point a is 20 mm below xy, and point m is 50 mm below xy. The top view line amb has segments am = 50 and mb = 50. A horizontal line goes right from a, and true length line ab1 (labelled TL) goes down at angle phi to the horizontal through a, with an arc from b to b1 and a vertical projector from b1 up to b1'. Text box 'GIVEN': [1] A - 20 fVP, [2] M - 50 fVP, [3] M - 45 aHP, [4] FV - 90mm, [5] TV - 100mm. Text box 'ANSWERS': [1] AB - 108mm, [2] theta - 23 deg, [3] phi - 34 deg. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Watch out.** In diagram `20.3` (`p041-1`), the half-front-view segments $a'm'$ and $m'b'$ are labeled `50` instead of `45` (which belongs to the top view). The given data $\text{FV} = 90\text{ mm}$ ($45 + 45$) and $\text{TV} = 100\text{ mm}$ ($50 + 50$) shown in `20.1` and `20.2` are the correct values.

**Answer:**
- True length $AB = 108\text{ mm}$
- Inclination with HP, $\theta = 23^\circ$
- Inclination with VP, $\phi = 34^\circ$

---

#### Example 3: Midpoint Problem Given True Length and Inclinations (Q21 / Problem 24)
**Problem statement:** The midpoint of the line $AB$ is $40\text{ mm}$ above HP and $50\text{ mm}$ in front of VP. The line measures $70\text{ mm}$ and is inclined at $45^\circ$ to HP and $30^\circ$ to VP. Draw its projections.

**Given data:**
- True length $AB = 70\text{ mm} \implies \frac{\text{TL}}{2} = 35\text{ mm}$
- $\theta = 45^\circ$
- $\phi = 30^\circ$
- Midpoint $M$: $50\text{ mm}$ in front of VP, $40\text{ mm}$ above HP

> **Figure: Projection of line AB from its midpoint M**
>
> Problem 21 statement: Line AB of true length 70 mm, with midpoint M 40 mm above HP and 50 mm in front of VP, inclined at theta = 45 degrees to HP and phi = 30 degrees to VP.

**Step-by-step solution:**
1. **Draw the upper half-line at $\theta$ (Step 21.1):** Locate $m'$ at $40\text{ mm}$ above $xy$ and $m$ at $50\text{ mm}$ below $xy$ on the same vertical projector. Draw horizontal lines through $m'$ and $m$. From $m'$, draw a line at $\theta = 45^\circ$ upwards to the right of length $\frac{\text{TL}}{2} = 35\text{ mm}$ to locate $b_1'$. Draw the horizontal locus of $b'$ through $b_1'$. Project $b_1'$ vertically down to the horizontal line through $m$ to locate $b_1$; the segment $mb_1$ is the half-top-view length.

> **Figure: Step 21.1 of the projection of line AB from its midpoint M**
>
> Orthographic projection construction labelled 21.1. A horizontal reference line x-y is drawn. Point m' is located 40 mm above x-y and point m is located 50 mm below x-y on the same vertical projector. From m', a true length half-line m'b1' of length 35 mm is drawn upwards and to the right at an angle of 45 degrees to the horizontal, establishing the horizontal locus of B in the front view through b1'. A vertical projector goes down from b1' to meet the horizontal line through m at point b1, forming segment mb1. Text boxes on the right state: GIVEN: [1] AB - 70mm, [2] theta - 45 degrees, [3] phi - 30 degrees, [4] M - 40 aHP, [5] M - 50 fVP. ANSWERS: [1] a'b' - 61mm, [2] ab - 50mm. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. **Draw the lower half-line at $\phi$ (Step 21.2):** From $m$, draw a line at $\phi = 30^\circ$ downwards to the right of length $\frac{\text{TL}}{2} = 35\text{ mm}$ to locate $b_2$. Draw the horizontal locus of $b$ through $b_2$. Project $b_2$ vertically up to the horizontal line through $m'$ to get $b_2'$; the segment $m'b_2'$ is the half-front-view length.

> **Figure: Step 21.2 of the projection of line AB from its midpoint M**
>
> Orthographic projection construction labelled 21.2, continuing from 21.1. On the x-y reference line, m' is 40 mm above x-y and m is 50 mm below x-y. Above x-y, m'b1' of length 35 mm is inclined at 45 degrees to the horizontal, giving the locus of b' and projecting down to mb1 in the top view. Below x-y, from m, a true length half-line mb2 of length 35 mm is drawn downwards and to the right at an angle of 30 degrees to the horizontal, establishing the horizontal locus of B in the top view through b2. Taking m as centre and mb1 as radius, an arc is swung downwards from b1 to intersect the horizontal locus through b2 at point b, forming the top view half-line mb. From b, a vertical projector is drawn upwards to intersect the horizontal locus through b1' at point b', forming the front view half-line m'b'. Text boxes on the right state: GIVEN: [1] AB - 70mm, [2] theta - 45 degrees, [3] phi - 30 degrees, [4] M - 40 aHP, [5] M - 50 fVP. ANSWERS: [1] a'b' - 61mm, [2] ab - 50mm. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. **Complete the symmetrical loci and swing arcs for both ends (Step 21.3):**
   - Extend $b_1'm'$ backwards by $35\text{ mm}$ to $a_1'$ and draw the horizontal locus of $a'$. Extend $b_2m$ backwards by $35\text{ mm}$ to $a_2$ and draw the horizontal locus of $a$.
   - With center $m'$ and radius $m'b_2'$, swing an arc to cut the locus of $b'$ at $b'$ and extend straight through $m'$ to cut the locus of $a'$ at $a'$.
   - With center $m$ and radius $mb_1$, swing an arc to cut the locus of $b$ at $b$ and extend straight through $m$ to cut the locus of $a$ at $a$.

> **Figure: Solution step 21.3 showing projection of line AB from its midpoint M**
>
> Projection of line AB through midpoint M, labelled 21.3. Horizontal reference line xy. Above xy (front view): midpoint m' is 40mm above xy. True length line a1'b1' passes through m' at an angle of 45 degrees to the horizontal, with half-length m'b1' = 35mm. Locus of b' is drawn horizontally through b1', and locus of a' is drawn horizontally through a1'. Front view line a'b' passes through m' between these loci. Below xy (top view): midpoint m is 50mm below xy, on the same vertical projector as m'. True length line a2b2 passes through m at an angle of 30 degrees to the horizontal, with half-length mb2 = 35mm. Horizontal loci pass through a2 and b2. Top view line ab passes through m between these loci, with vertical projectors connecting a' to a and b' to b, and a vertical projector from b1' down to b1 on the horizontal line through m, then rotated by an arc to b. GIVEN box: [1] AB - 70mm, [2] theta - 45 degrees, [3] phi - 30 degrees, [4] M - 40 aHP, [5] M - 50 fVP. ANSWERS box: [1] a'b' - 61mm, [2] ab - 50mm. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** The projections $a'b'$ (front view) and $ab$ (top view) pass symmetrically through $m'$ and $m$ between their respective loci.

---

#### Example 4: Ends on HP and VP Given Apparent Lengths and True Length (Q25)
**Problem statement:** A line $AB$ is $65\text{ mm}$ long. Its lower end is in HP while its upper end is in VP. If the front view and top view are $60\text{ mm}$ and $50\text{ mm}$ respectively. Draw the projection and measure its true inclinations with the reference planes.

**Given data:**
- True length $AB = 65\text{ mm}$
- Front view $\text{FV} = 60\text{ mm}$
- Top view $\text{TV} = 50\text{ mm}$
- End $A$ is in HP ($a'$ on $xy$)
- End $B$ is in VP ($b$ on $xy$)

**Step-by-step solution:**
1. **Find the locus of $b'$ using TV and TL (Step 25.1):** Mark $a'$ on the $xy$ line. When the top view (length $50\text{ mm}$) is rotated parallel to $xy$, its horizontal length is $50\text{ mm}$. Mark $b_1$ on $xy$ at $50\text{ mm}$ to the right of $a'$ and draw a vertical projector upwards from $b_1$. With center $a'$ and radius equal to the true length $AB = 65\text{ mm}$, cut this vertical projector at $b_1'$. Draw the horizontal locus of $b'$ through $b_1'$. The angle of $a'b_1'$ with $xy$ is $\theta$.

> **Figure: Step 25.1: Initial projection construction for line AB with end A in HP and end B in VP**
>
> Construction step labelled 25.1. A horizontal reference line xy is drawn. Point a' lies on the xy line. A horizontal segment along the xy line from a' to b1 has length dimensioned as TV=50. From b1, a vertical projector goes straight up (indicated with an upward arrow) to a horizontal locus line at b1'. The inclined line segment a'b1' has true length labelled 65. Beside the drawing are two boxes. The 'GIVEN' box lists: [1] FV - 60mm, [2] TV - 50mm, [3] TL - 65mm, [4] B - in VP, [5] A - in HP. The 'ANSWERS' box lists: [1] θ - 40°, [2] φ - 23°. Below the boxes is the note: 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.

2. **Locate the front view $a'b'$ and end $b$ (Step 25.2):** With center $a'$ and radius $\text{FV} = 60\text{ mm}$, swing an arc to cut the locus of $b'$ at $b'$. Join $a'b'$. Project $b'$ vertically down to the $xy$ line to locate the top view endpoint $b$ (since $B$ is in VP, $b$ lies on $xy$).

> **Figure: Step 25.2 of projection of line AB**
>
> Engineering drawing labelled 25.2 showing a step in the projection of a straight line. Horizontal reference line xy. Point a' lies on the xy line (since A is in HP). Directly below a' on a vertical projector is the top view point a. Points b and b1 lie on the xy line to the right of a' (since B is in VP). Above the xy line, a horizontal locus line passes through b' and b1'. The front view line segment a'b' has length 60, and the true length line segment a'b1' has length 65. Vertical construction lines drop from b' (downwards arrow) to b on the xy line, and goes up from b1 on the xy line (upwards arrow) to b1'. Below the xy line, the top view segment ab connects a to b on the xy line with length 50. A horizontal dimension between the vertical projector of a'/a and b1 is labelled TV=50. Right side boxes: GIVEN: [1] FV - 60mm, [2] TV - 50mm, [3] TL - 65mm, [4] B - in VP, [5] A - in HP. ANSWERS: [1] θ - 40°, [2] φ - 23°. Bottom text: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. **Find the top view $ab$ and inclination $\phi$ (Step 25.3):** Draw a vertical projector downwards from $a'$. With center $b$ and radius $\text{TV} = 50\text{ mm}$, swing an arc to cut the vertical projector under $a'$ at $a$. Join $ab$ to complete the top view. To measure $\phi$ (or by using the plane rotation method), construct the right triangle with hypotenuse $AB = 65\text{ mm}$ and adjacent side $\text{FV} = 60\text{ mm}$ (or erect the perpendicular distance of $a$ from $xy$ against the true length) to find $\phi$.

> **Figure: Step 25.3 of projection of line AB**
>
> Engineering drawing labelled 25.3 showing the completed projection of a straight line. Horizontal reference line xy. Point a' is on the xy line, with a,A directly below it on a vertical projector. On the xy line to the right of a' are points b, b1, and B. Above the xy line, a horizontal locus line passes through b' and b1'. Segment a'b' has length 60, and true length segment a'b1' has length 65. The inclination angle between the xy line and a'b1' is marked as θ. A vertical projector goes down from b' to b, and up from b1 to b1'. Below the xy line, top view segment ab has length 50, and true length segment aB (from a,A to B on the xy line) has length 65. A horizontal line is drawn to the right from a,A, and the angle between this horizontal line and the xy line (or true length line aB, shown by an arc between the horizontal from a,A and aB) is marked as φ. Horizontal dimension between the projector through a'/a,A and b1 is labelled TV=50. Right side boxes: GIVEN: [1] FV - 60mm, [2] TV - 50mm, [3] TL - 65mm, [4] B - in VP, [5] A - in HP. ANSWERS: [1] θ - 40°, [2] φ - 23°. Bottom text: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:**
- True inclination with HP, $\theta = 39^\circ$
- True inclination with VP, $\phi = 23^\circ$

---

*(Note: The figure below shows the final step of an earlier trace problem on the source page.)*

> **Figure: Step 30.3 solution drawing for projection of line AB with traces on xy-line**
>
> Engineering drawing labelled 30.3 showing the complete projection of a line AB.
> - Top note: 'a,b,v,HT - same line', 'a',b',h',VT - same line'.
> - ANSWERS box: [1] θ - 39°, [2] α - 43°, [3] a'b' - 83mm.
> - GIVEN box: [1] β - 30°, [2] AB - 90mm, [3] TV - 70mm, [4] HT & VT same point on xy-line, [5] A - 20 bVP.
> - Reference line xy is horizontal. On the left of xy, a single point on the xy-line is labelled v, VT above and h', HT below.
> - A vertical projector passes through 'a' (20mm above xy), '1' (on xy), and 'a'' (below xy).
> - Above xy: Top view segment ab of length 70mm is inclined at β = 30° to the horizontal line through 'a' (ab₁). Line ba extended meets xy at v, VT / h', HT. Arc from b₁ goes up to b.
> - Below xy: From point '1' on xy, a true length line 1-b₁' of length 90mm is drawn downward to the right at angle θ below xy. A vertical projector from b drops down to meet the horizontal locus of b₁' at b₂', and continues down to b'.
> - Line from h', HT passes through a' and continues to b', forming the front view a'b' (which is parallel to 1-b₂'), inclined at angle α to xy.
> - Notes at bottom: 'ALL DIMENSIONS ARE IN mm', 'SCALE 1:1'.

#### Example 5: Ends on the Same Projector Across Quadrants (Q37 / Problem 42)
**Problem statement:** The ends of the line $AB$ are on same projector. $A$ is $25\text{ mm}$ below HP and $30\text{ mm}$ behind VP. The end $B$ is $50\text{ mm}$ above HP and $40\text{ mm}$ in front of VP. Draw the projection and find the true length and true inclinations.

**Given data:**
- $A$ and $B$ lie on the same vertical projector ($\theta + \phi = 90^\circ$)
- End $A$ (Third Quadrant): $25\text{ mm}$ below HP ($a'$ is $25\text{ mm}$ below $xy$), $30\text{ mm}$ behind VP ($a$ is $30\text{ mm}$ above $xy$)
- End $B$ (First Quadrant): $50\text{ mm}$ above HP ($b'$ is $50\text{ mm}$ above $xy$), $40\text{ mm}$ in front of VP ($b$ is $40\text{ mm}$ below $xy$)

> **Figure: Projection of line AB for Q37**
>
> Problem 37 statement representation: Line AB with ends on the same projector (so θ + φ = 90°). End A is 25mm below HP and 30mm behind VP (third quadrant). End B is 50mm above HP and 40mm in front of VP (first quadrant).

**Step-by-step solution:**
1. **Plot all four projections on one vertical projector (Step 37.1):** Draw $xy$ and a single vertical line perpendicular to it. Above $xy$, mark $a$ at $30\text{ mm}$ and $b'$ at $50\text{ mm}$. Below $xy$, mark $a'$ at $25\text{ mm}$ and $b$ at $40\text{ mm}$. Both the front view $a'b'$ (total vertical span $25 + 50 = 75\text{ mm}$) and top view $ab$ (total vertical span $30 + 40 = 70\text{ mm}$) lie along this projector.

> **Figure: Step 37.1: Projections of line AB on the same projector**
>
> Drawing labelled 37.1. A horizontal reference line x-y is drawn. All projections lie on a single vertical projector line perpendicular to x-y. Above the x-y line: point a is 30 mm above x-y, and point b' is 50 mm above x-y. Below the x-y line: point a' is 25 mm below x-y, and point b is 40 mm below x-y. Notes at the top read: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Box GIVEN: [1] A - 25 bHP, [2] A - 30 bVP, [3] B - 50 aHP, [4] B - 40 fVP, [5] line on same projector. Box ANSWERS: [1] θ - 47°, [2] φ - 43°, [3] TL - 103mm. Bottom text: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. **Find the true length and $\theta$ by rabattment (Step 37.2):** Because $A$ is below HP and $B$ is above HP, erect perpendiculars in opposite horizontal directions from the top view endpoints $a$ and $b$: at $a$ ($30\text{ mm}$ above $xy$), draw a horizontal segment $aA_2 = 25\text{ mm}$ to the left; at $b$ ($40\text{ mm}$ below $xy$), draw a horizontal segment $bB_2 = 50\text{ mm}$ to the right. Join $A_2B_2$. The length of $A_2B_2$ is the true length $AB$, and the angle $A_2B_2$ makes with the vertical projector $ab$ is $\theta$.

> **Figure: Step 37.2: Finding true length and inclination theta using rotation/trapezoid method**
>
> Drawing labelled 37.2. Builds on step 37.1 with horizontal line x-y and vertical projector containing b' (50 mm above x-y), a (30 mm above x-y), a' (25 mm below x-y), and b (40 mm below x-y). At point a (above x-y), a perpendicular segment a-A2 of length 25 is drawn horizontally to the left, with a right-angle symbol at a. At point b (below x-y), a perpendicular segment b-B2 of length 50 is drawn horizontally to the right, with a right-angle symbol at b. A straight line connects A2 to B2, intersecting the vertical projector ab at point HT (above x-y). The angle between the vertical projector a-b and the inclined line A2-B2 is marked as θ. Notes at the top read: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Box GIVEN: [1] A - 25 bHP, [2] A - 30 bVP, [3] B - 50 aHP, [4] B - 40 fVP, [5] line on same projector. Box ANSWERS: [1] θ - 47°, [2] φ - 43°, [3] TL - 103mm. Bottom text: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. **Find the inclination $\phi$ (Step 37.3):** Similarly, at $a'$ ($25\text{ mm}$ below $xy$), draw a horizontal segment $a'A_1 = 30\text{ mm}$ to the left; at $b'$ ($50\text{ mm}$ above $xy$), draw a horizontal segment $b'B_1 = 40\text{ mm}$ to the right. Join $A_1B_1$ (passing through the intersection $HT, VT$ on $xy$). The angle $A_1B_1$ makes with the vertical projector $a'b'$ is $\phi$.

> **Figure: Worked solution step 37.3 for projection of a line on the same projector**
>
> Engineering drawing labelled 37.3 showing projections of a line on a single vertical projector crossing reference line x-y at point labelled HT, VT. On the vertical projector: above x-y are point a (30 mm above x-y) and point b' (50 mm above x-y); below x-y are point a' (25 mm below x-y) and point b (40 mm below x-y). Auxiliary construction lines drawn through HT,VT: one inclined line from A1 (30 mm left of a' on horizontal line through a') through HT,VT to B1 (40 mm right of b' on horizontal line through b'), making angle phi with the vertical projector; another inclined line from A2 (25 mm left of a on horizontal line through a) through HT,VT to B2 (50 mm right of b on horizontal line through b), making angle theta with the vertical projector. Notes on right: 'a,b,v,HT - same line' and 'a',b',h',VT - same line'. GIVEN box: [1] A - 25 bHP, [2] A - 30 bVP, [3] B - 50 aHP, [4] B - 40 fVP, [5] line on same projector. ANSWERS box: [1] theta - 47 deg, [2] phi - 43 deg, [3] TL - 103mm. SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:**
- True length $AB = 103\text{ mm}$
- Inclination with HP, $\theta = 47^\circ$
- Inclination with VP, $\phi = 43^\circ$ (satisfying $\theta + \phi = 90^\circ$)

---

#### Example 6: Position of First Point Not Given Directly (Q18 / Problem 43)
**Problem statement:** Draw the projections of the line $AB$, $100\text{ mm}$ long, inclined $45^\circ$ to the ground and $30^\circ$ to VP, and the end $A$ is on the ground and the end $B$ is in the VP. What is the height of the point $B$ above HP.

**Given data:**
- True length $AB = 100\text{ mm}$
- $\theta = 45^\circ$
- $\phi = 30^\circ$
- End $A$ is in HP ($a'$ on $xy$)
- End $B$ is in VP ($b$ on $xy$)

> **Figure: Projection of line AB of length 100 mm with end A in HP and end B in VP**
>
> Problem 43 (Q18): Line AB is 100 mm long, inclined at 45 degrees to HP (theta = 45 deg) and 30 degrees to VP (phi = 30 deg), with end A in the HP (z_A = 0) and end B in the VP (y_B = 0).

**Step-by-step solution:**
1. **Draw the true length in the front view (Step 18.1):** Since $A$ is on the ground (HP), mark $a'$ on the $xy$ line. From $a'$, draw the true length $a'b_1' = 100\text{ mm}$ at $\theta = 45^\circ$ above $xy$. Draw a horizontal locus line through $b_1'$ at height $H$ above $xy$. Because the distance of $A$ in front of VP is unknown, choose an arbitrary convenient point $a_1$ on the vertical projector below $a'$ and draw a horizontal line through $a_1$. Project $b_1'$ vertically down to this horizontal line at $b_1$ (so $a_1b_1$ is the top view length).

> **Figure: Step 18.1 of projection of line AB**
>
> Engineering drawing step labelled 18.1. A horizontal reference line XY is drawn with 'x' on the left and 'y' on the right. Point a' lies on the XY line. From a', a line a'b1' of length 100 is drawn upwards and to the right at an angle of 45° to the XY line. A horizontal dashed locus line passes through b1', and its vertical distance above the XY line is dimensioned as 'H'. A vertical projector goes down from a' to point a1 below the XY line. A vertical projector goes down from b1' (with a downward arrow) to point b1 on the horizontal line through a1, forming the horizontal segment a1b1. Box GIVEN: [1] A - on HP, [2] B - on VP, [3] θ - 45°, [4] φ - 30°, [5] AB - 100mm. Box ANSWERS: [1] H - 71mm, [2] L - 50mm. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. **Use an auxiliary position to find the front view length (Step 18.2):** From the assumed point $a_1$, draw a line $a_1b_2 = 100\text{ mm}$ inclined at $\phi = 30^\circ$ upwards towards $xy$. Here $b_2$ represents the position of $B$ relative to $A$ in the top view, and the vertical distance between $a_1$ and $b_2$ is $100\sin 30^\circ = 50\text{ mm}$. Project $b_2$ vertically up to the $xy$ line at $b_2'$; the segment $a'b_2'$ along $xy$ is the apparent front view length $\text{FV}$.

> **Figure: Step 18.2 of projection of line AB**
>
> Engineering drawing step labelled 18.2. Continuing from step 18.1, on the horizontal lineXY, point a' has line a'b1' of length 100 at 45° above XY, and below XY from point a1, a horizontal segment a1b1 is drawn. Additionally, from a1, a line a1b2 of length 100 is drawn upwards and to the right at an angle of 30° to the horizontal line a1b1. From b2, a vertical projector goes upwards (with an upward arrow) to meet the XY line at b2', forming the horizontal segment a'b2' along XY. With centre a' and radius a'b2', an arc is swung counter-clockwise (upwards, indicated by an arrow) to intersect the horizontal locus line through b1' at point b'. The front view line segment a'b' is drawn bold. Box GIVEN: [1] A - on HP, [2] B - on VP, [3] θ - 45°, [4] φ - 30°, [5] AB - 100mm. Box ANSWERS: [1] H - 71mm, [2] L - 50mm. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. **Swing the front view and locate the actual top view (Step 18.3):**
   - With center $a'$ and radius $a'b_2'$ ($	ext{FV}$), swing an arc upwards to cut the horizontal locus of $b'$ at $b'$. Join $a'b'$ to get the final front view.
   - Project $b'$ vertically down to the $xy$ line to locate the final top view $b$ (since $B$ is in VP).
   - Measure the vertical distance of $b_2$ from $a_1b_1$ (or swing the top view length $a_1b_1$ from $b$) to mark the actual top view $a$ on the vertical projector below $a'$ (at $50\text{ mm}$ below $xy$). Join $ab$ to complete the top view.

> **Figure: Step 18.3 of the projection of line AB**
>
> Orthographic projection construction labelled 18.3. A horizontal reference line xy is drawn. End a' is on the xy line. Above xy, line a'b'_1 is drawn of length 100 at an angle of 45 degrees to xy, establishing a horizontal locus through b' and b'_1 at height H above xy. End b is on the xy line. An arc from b_1 (on a horizontal locus through a_1 below a) swings up to b'_2 on xy, wait: from b'_1 an arc swings down to b'_2 on xy, then drops vertically to b_2, where a_1 b_2 has length 100 at 30 degrees to the horizontal locus through a_1. From b_2, a vertical line rises to b'_2 on xy, and an arc swings up to b' on the top locus, defining front view a'b'. From b', a vertical projector drops to b on xy, defining top view ab (labelled ab = a_1 b_1), where a is at distance L below xy. On the right, a GIVEN box lists: [1] A - on HP, [2] B - on VP, [3] theta - 45 degrees, [4] phi - 30 degrees, [5] AB - 100mm. An ANSWERS box lists: [1] H - 71mm, [2] L - 50mm. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:**
- Height of point $B$ above HP, $H = 71\text{ mm}$ ($100\sin 45^\circ \approx 70.7\text{ mm}$)

---

### Common mistakes
- **Using full lengths instead of half-lengths from $M$:** When working from the midpoint $M$, always set off $\frac{\text{TL}}{2}$, $\frac{\text{FV}}{2}$, and $\frac{\text{TV}}{2}$ on each side of $m'$ and $m$. Drawing the full true length from $m'$ doubles the size of the line.
- **Swapping $a'$ and $b$ when ends lie on HP and VP:** Remember that "end $A$ in HP" places the *front view* $a'$ on $xy$, whereas "end $B$ in VP" places the *top view* $b$ on $xy$.
- **Erecting perpendiculars on the same side when a line crosses quadrants:** In profile-plane problems like Example 5 where one end is above HP and the other is below HP, you must erect the perpendicular heights on *opposite* sides of the vertical projector so the rabatted line crosses the projector properly.

---

### Try it yourself

#### Practice Problem 1 (Q26 / Problem 25)
The distance between the projectors drawn through HT and VT are $95\text{ mm}$. The distance between the end projectors is $65\text{ mm}$. The HT is $30\text{ mm}$ in front of VP and VT is $45\text{ mm}$ above HP. The end $A$ is $10\text{ mm}$ above HP. Draw the projection and find the true length and true inclinations of the line.
- **Given:** $\text{EP} = 65\text{ mm}$, $\text{HT–VT} = 95\text{ mm}$, $\text{HT} = 30\text{ mm}$ in front of VP, $A = 10\text{ mm}$ above HP, $\text{VT} = 45\text{ mm}$ above HP.

> **Figure: Projection of a line given distance between traces, end projectors, and positions of traces**
>
> Problem statement for Q26 (25): A line AB with distance between projectors through HT and VT equal to 95mm, distance between end projectors equal to 65mm, HT 30mm in front of VP, VT 45mm above HP, and end A 10mm above HP.

#### Practice Problem 2 (Q39 / Problem 44)
$AB$ is a straight line whose front view measures $70\text{ mm}$ and makes an angle $45^\circ$ with $xy$-line. The end $A$ is in the HP and the vertical trace of the line is $10\text{ mm}$ below the HP. The straight line is inclined $30^\circ$ to the VP. Draw the projections of the line $AB$ and find the true length and true inclinations with HP.
- **Given:** $\text{FV} = 70\text{ mm}$, $A$ on HP, $\text{VT} = 10\text{ mm}$ below HP, $\alpha = 45^\circ$, $\phi = 30^\circ$.

> **Figure: Projection of line AB given front view, vertical trace and inclination to VP**
>
> Problem Q39 (44): Line AB with front view length 70 mm inclined at alpha = 45 degrees to xy, end A in HP, vertical trace VT 10 mm below HP, and true inclination phi = 30 degrees to VP.

---

### Quick recall
- The midpoint $M$ bisects the true length, the front view ($a'm' = m'b'$), and the top view ($am = mb$).
- The horizontal loci of $a'$ and $b'$ are equidistant above and below $m'$; the loci of $a$ and $b$ are equidistant above and below $m$.
- Whenever $\theta + \phi = 90^\circ$, the line lies in a profile plane and all projections ($a', b', a, b$) are collinear on a single vertical projector.
- For a line on a single projector, find $\text{TL}$ and $\theta$ by plotting the distances from HP perpendicular to the top view $ab$; find $\text{TL}$ and $\phi$ by plotting the distances from VP perpendicular to the front view $a'b'$.
- When $A$ is in HP and $B$ is in VP without a known starting distance from VP, assume an auxiliary horizontal line for the top view rotation, find the apparent view lengths and loci, and then shift the top view so that $b$ rests on $xy$.

<!-- page 7 | Trace Problems: Projector Distances and Plane Rotation -->

## Trace Problems: Projector Distances and Plane Rotation

### Idea in brief
Every straight line inclined to both reference planes pierces the horizontal plane at the Horizontal Trace ($HT$) and the vertical plane at the Vertical Trace ($VT$). Because traces are points that actually lie on the reference planes, their projections are locked onto the $xy$ reference line and the trace locations themselves. When you know the horizontal distance between the projectors of $HT$ and $VT$, you can immediately draw the complete extended front view line ($h'$-$VT$) and extended top view line ($HT$-$v$) before even plotting the endpoints $A$ and $B$. From there, rotating (rabatting) the projecting planes about the views as hinges forms right triangles anchored at $HT$ or $VT$, giving the true length and true inclinations directly.

### Key terms
- **Horizontal Trace ($HT$)**: The point where the line (or its extension) pierces the Horizontal Plane ($HP$). Its front view $h'$ always lies on the $xy$ line.
- **Vertical Trace ($VT$)**: The point where the line (or its extension) pierces the Vertical Plane ($VP$). Its top view $v$ always lies on the $xy$ line.
- **Distance between trace projectors ($HT\text{-}VT$)**: The horizontal distance along the $xy$ line between the vertical projector $h'\text{-}HT$ and the vertical projector $v\text{-}VT$.
- **Distance between end projectors ($EP$)**: The horizontal distance along the $xy$ line between the vertical projector $a'\text{-}a$ and the vertical projector $b'\text{-}b$.
- **Point-to-trace projector distance ($A\text{-}VT$ or $B\text{-}VT$)**: The horizontal distance along the $xy$ line between the projector of an endpoint and the projector of a trace.
- **Trace rabatting**: Folding the vertical or horizontal projecting triangle flat onto the drawing plane using $h'\text{-}VT$ or $HT\text{-}v$ as a hinge, producing a right-angled triangle with the trace as the acute-angle vertex.

### Rules and formulas
> **Key idea.** Four collinearity laws govern every trace problem: $a', b', h', VT$ always lie on the same straight line (the front view line), and $a, b, v, HT$ always lie on the same straight line (the top view line).

- **Front view collinearity**:
  $$\text{Line }(a'b') \equiv \text{Line }(h'\text{-}VT)$$
  The front view $a'b'$ is a segment of the straight line joining $h'$ (on $xy$) to $VT$.

- **Top view collinearity**:
  $$\text{Line }(ab) \equiv \text{Line }(HT\text{-}v)$$
  The top view $ab$ is a segment of the straight line joining $HT$ to $v$ (on $xy$).

- **Right-triangle rabatting at $VT$ (on the front view line)**:
  $$\sin\phi = \frac{y_A}{\text{Distance}(VT\text{ to }A_{\text{rabatted}})}$$
  Erecting a perpendicular to the front view line at $a'$ of length equal to $a$'s distance from $xy$ (distance from $VP$) locates the rabatted point $A$; the line from $VT$ through $A$ is the true length line inclined at $\phi$ to $a'b'$.

- **Right-triangle rabatting at $HT$ (on the top view line)**:
  $$\sin\theta = \frac{z_A}{\text{Distance}(HT\text{ to }A_{\text{rabatted}})}$$
  Erecting a perpendicular to the top view line at $a$ of length equal to $a'$'s distance from $xy$ (distance from $HP$) locates the rabatted point $A$; the line from $HT$ through $A$ is the true length line inclined at $\theta$ to $ab$.

### Method
1. **Draw the reference line and known projectors**: Draw the $xy$ line. Space the vertical projectors for traces ($h'\text{-}HT$ and $v\text{-}VT$) or point-and-trace ($a'a$ and $v\text{-}VT$) according to the given horizontal distances.
2. **Mark $h'$ and $v$ on $xy$, and plot $HT$ and $VT$**: Place $h'$ and $v$ directly on the $xy$ line. Measure the given distances of $HT$ (from $VP$) and $VT$ (from $HP$) along their respective projectors above or below $xy$ according to the quadrant.
3. **Connect the trace lines**: Join $h'$ to $VT$ to establish the line of the front view. Join $HT$ to $v$ to establish the line of the top view.
4. **Locate the endpoints $a', b'$ and $a, b$**:
   - If an endpoint's distance from $HP$ or $VP$ is given, draw its locus parallel to $xy$ to intersect $h'\text{-}VT$ or $HT\text{-}v$, then project vertically to the other view.
   - If only $HT\text{-}VT$ and $EP$ are given with no endpoint coordinates, **assume** end $A$ lies in one of the reference planes (for instance, assume $A$ is in $HP$ so $a$ coincides with $HT$ and $a'$ coincides with $h'$), then step off $EP$ horizontally to find $b'$ and $b$.
5. **Rabat the projecting plane to find True Length ($TL$), $\theta$, and $\phi$**:
   - To find $\theta$ and $TL$: On the top view line $HT\text{-}v\text{-}a\text{-}b$, erect perpendiculars at $a$ and $b$ equal to the distances of $a'$ and $b'$ from $xy$. Join the resulting points $A$ and $B$ (which also passes through $HT$). Measure $AB = TL$ and the angle between $AB$ and $ab$ as $\theta$.
   - To find $\phi$ and $TL$: On the front view line $h'\text{-}VT\text{-}a'\text{-}b'$, erect perpendiculars at $a'$ and $b'$ equal to the distances of $a$ and $b$ from $xy$. Join $A$ and $B$ (which also passes through $VT$). Measure $AB = TL$ and the angle between $AB$ and $a'b'$ as $\phi$.

### Worked examples

#### Example 1: Trace Projectors and Reference Reconstruction (Problem 26)
**Problem statement:** A straight line $AB$ has its $HT$ $30\text{ mm}$ below $xy$ and its $VT$ $45\text{ mm}$ above $xy$. The projectors through $HT$ and $VT$ are $95\text{ mm}$ apart. End $A$ is $10\text{ mm}$ above $HP$, and the distance between end projectors is $50\text{ mm}$ (or end $B$ is located via the trapezoidal projection). Draw the projections and find the true length and inclinations using the trapezoidal (plane rotation) method.

**Given data:**
- $HT = 30\text{ mm}$ below $xy$
- $VT = 45\text{ mm}$ above $xy$
- Distance between trace projectors ($HT\text{-}VT$) $= 95\text{ mm}$
- End $A = 10\text{ mm}$ above $HP$

**Step-by-step solution:**
1. **Plot the trace projectors**: Draw the horizontal line $xy$. Draw two vertical projectors $95\text{ mm}$ apart. On the left projector, mark $h'$ on $xy$ and $HT$ $30\text{ mm}$ below $xy$. On the right projector, mark $v$ on $xy$ and $VT$ $45\text{ mm}$ above $xy$. Connect $h'$ to $VT$ and $HT$ to $v$.

> **Figure: Projection of line step 26.1 showing HT and VT construction**
>
> Engineering drawing step labelled 26.1. Horizontal reference line xy. On the left, a vertical projector has point h' on xy and point HT 30 mm below xy (dimensioned 30). On the right, at a horizontal distance of 95 mm (dimensioned 95 at the top) from the left projector, a second vertical projector has point v on xy and point VT 45 mm above xy (dimensioned 45). A line connects h' to VT above xy, and another line connects HT to v below xy. Below the drawing, text in blue reads: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. On the right side, a GIVEN box lists: '[1] HT-VT - 95mm' (in red), '[2] EP - 65mm', '[3] HT - 30 fVP' (in red), '[4] VT - 45 aHP' (in red), '[5] A - 10 aHP'. Below it, an ANSWERS box lists: '[1] Θ - 24°', '[2] φ - 16°', '[3] TL - 75mm', '[4] a'b' - 72mm', '[5] ab - 68mm'. Text below the boxes states: 'ALL DIMENSIONS ARE IN mm' and 'SCALE 1:1'.

2. **Locate the front and top views of $A$ and $B$**: Along the line $h'\text{-}VT$, locate point $a'$ at $10\text{ mm}$ above $xy$. Project vertically down from $a'$ to the line $HT\text{-}v$ to locate the top view $a$. Similarly, locate $b'$ on $h'\text{-}VT$ and project vertically to $b$ on $HT\text{-}v$.

> **Figure: Projection of line step 26.2 showing front view a'b' and top view ab**
>
> Engineering drawing step labelled 26.2, building on step 26.1. Horizontal reference line xy with left projector (h' on xy, HT 30 mm below xy) and right projector 95 mm away (v on xy, VT 45 mm above xy). Along the line h'-VT, point a' is located 10 mm above xy (dimensioned 10). A vertical projector from a' goes down to the line HT-v to locate point a (marked with a circle around the projector above xy and a square below xy). At a horizontal distance of 65 mm to the right of the a'-a projector (dimensioned 65 below xy), another vertical projector (marked with three horizontal tick marks) intersects h'-VT at b' and HT-v at b. Thick dark segments highlight the front view a'b' and top view ab. Below the drawing, text in blue reads: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. On the right side, a GIVEN box lists: '[1] HT-VT - 95mm', '[2] EP - 65mm', '[3] HT - 30 fVP', '[4] VT - 45 aHP', '[5] A - 10 aHP' (all in red). Below it, an ANSWERS box lists: '[1] Θ - 24°', '[2] φ - 16°', '[3] TL - 75mm', '[4] a'b' - 72mm', '[5] ab - 68mm'. Text below the boxes states: 'ALL DIMENSIONS ARE IN mm' and 'SCALE 1:1'.

3. **Apply the trapezoidal method for $TL$, $\theta$, and $\phi$**: Erect perpendiculars to the front view line $a'b'$ at $a'$ and $b'$ equal to the distances of $a$ and $b$ from $xy$ to obtain the rabatted true length $AB$ and true inclination $\phi$ with $VP$. Erect perpendiculars to the top view line $ab$ at $a$ and $b$ equal to the distances of $a'$ and $b'$ from $xy$ to obtain the true length $AB$ and true inclination $\theta$ with $HP$.

> **Figure: Worked solution step 26.3 for projection of line AB using the trapezoidal method**
>
> Engineering drawing labelled 26.3 showing the projection of a straight line AB using the trapezoidal method for traces. Horizontal reference line xy. A vertical projector on the left connects h' on xy to HT at 30 mm below xy. A vertical projector on the right, at a horizontal distance of 95 mm from the HT projector, connects v on xy to VT at 45 mm above xy. The line joining h', a', b', VT lies above xy; the line joining HT, a, b, v lies below xy. Note at bottom left states: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Point a' is 10 mm above xy. Vertical projector through a' and a is on the left, and vertical projector through b' and b is 65 mm to the right of the a'a projector. Above xy, perpendiculars to line h'-VT at a' and b' are drawn to lengths corresponding to the top view distances (marked with single and triple ticks) to locate A and B, forming angle phi between AB and h'-VT. Below xy, perpendiculars to line HT-v at a and b are drawn (marked with circle and triple ticks) to locate A and B, forming angle theta between AB and HT-v. Text boxes on the right: 'GIVEN: [1] HT-VT - 95mm, [2] EP - 65mm, [3] HT - 30 fVP, [4] VT - 45 aHP, [5] A - 10 aHP', 'ANSWERS: [1] theta - 24°, [2] phi - 16°, [3] TL - 75mm, [4] a'b' - 72mm, [5] ab - 68mm', 'ALL DIMENSIONS ARE IN mm', 'SCALE 1:1'.

---

#### Example 2: Assuming Missing Data from Trace and End Projector Distances (Problem 27 / 26)
**Problem statement:** The projectors drawn through $HT$ and $VT$ of a straight line $AB$ are $90\text{ mm}$ apart and those drawn through its end points are $60\text{ mm}$ apart. The $HT$ is $40\text{ mm}$ behind $VP$ and $VT$ is $50\text{ mm}$ below $HP$. Draw the projections of the line and determine its inclinations with $VP$ and $HP$ and also find the true length of the line.

**Given data:**
- [1] $EP = 60\text{ mm}$
- [2] $HT\text{-}VT = 90\text{ mm}$
- [3] $HT = 40\text{ mm}$ behind $VP$ ($40\text{ mm}$ above $xy$)
- [4] $A$ in $HP$ (Assumed, since no endpoint distance from $HP$ or $VP$ is specified)
- [5] $VT = 50\text{ mm}$ below $HP$ ($50\text{ mm}$ below $xy$)

> **Figure: Problem 27: Projection of line AB from trace projectors, end projectors, and trace positions**
>
> Problem 27 statement diagram (to be constructed): Projectors through HT and VT of line AB are 90 mm apart, and end projectors are 60 mm apart. HT is 40 mm behind VP, VT is 50 mm below HP, and end A is assumed to be in the HP.

**Step-by-step solution:**
1. **Plot $HT$ and $VT$**: Draw the reference line $xy$. Draw a vertical projector on the left: mark $h'$ on $xy$ and $HT$ $40\text{ mm}$ above $xy$ (since $HT$ is behind $VP$). At a horizontal distance of $90\text{ mm}$ to the right, draw a second vertical projector: mark $v$ on $xy$ and $VT$ $50\text{ mm}$ below $xy$ (below $HP$).

> **Figure: Step 27.1 of line projection problem 27 showing traces HT and VT**
>
> Engineering drawing labelled 27.1 showing the first construction step for problem 27. A horizontal reference line x-y is drawn. On the left, a vertical projector has point h' on the x-y line and point HT at 40 mm above the x-y line (dimensioned 40 on the left, with a small square on the vertical line). On the right, at a horizontal distance of 90 mm from the left projector (dimensioned 90 at the top), a vertical projector has point v on the x-y line and point VT at 50 mm below the x-y line (dimensioned 50 on the right). Straight lines connect HT to v and h' to VT. Notes at the bottom state: 'a,b,v,HT -same line' and 'a',b',h',VT - same line', 'ALL DIMENSIONS ARE IN mm', 'SCALE 1:1'. A 'GIVEN' box lists: [1] HT-VT - 90mm, [2] EP - 60mm, [3] HT - 40 bVP, [4] VT - 50 bHP, [5] A - in HP (items 1, 3, 4 are highlighted in red). An 'ANSWERS' box lists: [1] θ - 27°, [2] φ - 21°, [3] TL - 74mm, [4] a'b' - 69mm, [5] ab - 66mm.

2. **Assume end $A$ in $HP$ and locate projections $ab$ and $a'b'$**: Because no specific position for $A$ or $B$ is given, assume end $A$ lies in the $HP$. Therefore, $A$ coincides with the horizontal trace: mark $A(HT)(a)$ at $40\text{ mm}$ above $xy$ and $a'(h')$ on $xy$. Join $A(HT)(a)$ to $v$ and $a'(h')$ to $VT$. Draw a vertical end projector $60\text{ mm}$ ($EP = 60\text{ mm}$) to the right of the $a'a$ projector. Its intersection with $a\text{-}v$ gives top view $b$, and its intersection with $a'\text{-}VT$ gives front view $b'$.

> **Figure: Step 27.2 of line projection problem 27 showing projections ab and a'b'**
>
> Engineering drawing labelled 27.2 showing the second construction step for problem 27. Building upon step 27.1, the top-left point at 40 mm above x-y is now labelled A(HT)(a), and the point on the x-y line below it is labelled a'(h'). A second vertical projector is drawn 60 mm to the right of the left projector (dimensioned 60 above the x-y line). Where this projector intersects the line from A(HT)(a) to v, the point is labelled b (marked with a small triangle on the vertical line). Where this projector intersects the line from a'(h') to VT, the point is labelled b' (marked with a small circle on the vertical line between x-y and b'). Thick dark lines represent the top view segment from A(HT)(a) to b and the front view segment from a'(h') to b'. The horizontal distance between the HT and VT projectors is 90 mm, and VT is 50 mm below x-y. Notes at the bottom state: 'a,b,v,HT -same line' and 'a',b',h',VT - same line', 'ALL DIMENSIONS ARE IN mm', 'SCALE 1:1'. A 'GIVEN' box lists: [1] HT-VT - 90mm, [2] EP - 60mm, [3] HT - 40 bVP, [4] VT - 50 bHP, [5] A - in HP. An 'ANSWERS' box lists: [1] θ - 27°, [2] φ - 21°, [3] TL - 74mm, [4] a'b' - 69mm, [5] ab - 66mm.

3. **Rabat to find $TL$, $\theta$, and $\phi$**: Using the trapezoidal (right-triangle) method, erect perpendiculars to $a'b'$ and $ab$ representing the distances from $xy$ to find the true length $AB$ and the true inclinations $\theta$ (at $A(HT)(a)$) and $\phi$ (at $VT$).

> **Figure: Worked solution step 27.3 for projection of line AB with traces**
>
> Orthographic projection drawing labelled 27.3 showing a horizontal reference line xy. Above xy: point A(HT)(a) is located 40 mm above xy (dimensioned 40 on the left). From A(HT)(a), a line goes down and right through point b to point v on the xy line. The horizontal distance between the projector of A(HT)(a) and a'(h') and the projector of b and b' is 60 mm. The horizontal distance between the projector of A(HT)(a) and the projector of v and VT is 90 mm. From A(HT)(a), a rotated line goes up and right to B, with angle theta indicated between line A(HT)(a)-b-v and line A(HT)(a)-B; an arc with a small circle connects B to the line through b. Below xy: point a'(h') lies on the xy line on the same vertical projector as A(HT)(a). A line goes from a'(h') down and right through b' to VT, which is 50 mm below xy (dimensioned 50 on the right). A rotated line goes from a'(h') down and left to A (marked with a square symbol on the perpendicular from a'(h')) and then from A to B, with angle phi marked between line a'(h')-b'-VT and line A-B. Notes at top right: 'a,b,v,HT - same line', 'a',b',h',VT - same line'. GIVEN box: [1] HT-VT - 90mm, [2] EP - 60mm, [3] HT - 40 bVP, [4] VT - 50 bHP, [5] A - in HP. ANSWERS box: [1] theta - 27 deg, [2] phi - 21 deg, [3] TL - 74mm, [4] a'b' - 69mm, [5] ab - 66mm. Text below boxes: 'ALL DIMENSIONS ARE IN mm', 'SCALE 1:1'.

---

#### Example 3: Apparent Inclination of Top View and Positions of Traces (Problem Q29 / 27)
**Problem statement:** The top view of the line $AB$ is inclined $30^\circ$ to $xy$ line. The $HT$ is $40\text{ mm}$ in front of $VP$ and $VT$ is $50\text{ mm}$ above $HP$. One end point $B$ of the line is $10\text{ mm}$ behind the $VP$. Draw the projection if the other point $A$ is $20\text{ mm}$ above $HP$. What is the true length of the line? And find the true inclinations.

**Given data:**
- [1] $\beta = 30^\circ$
- [2] $A = 20\text{ mm}$ above $HP$
- [3] $HT = 40\text{ mm}$ in front of $VP$ ($40\text{ mm}$ below $xy$)
- [4] $B = 10\text{ mm}$ behind $VP$ ($10\text{ mm}$ above $xy$ in top view)
- [5] $VT = 50\text{ mm}$ above $HP$ ($50\text{ mm}$ above $xy$)

> **Figure: Problem Q29 statement figure for line AB with traces and apparent inclination**
>
> Projection of line AB problem Q29 (numbered 27): top view of line AB is inclined at beta = 30 degrees to the xy line, HT is 40 mm in front of VP, VT is 50 mm above HP, end B is 10 mm behind VP, and end A is 20 mm above HP.

**Step-by-step solution:**
1. **Draw $HT$ and the top view line at $\beta = 30^\circ$**: Mark $h'$ on $xy$ and $HT$ $40\text{ mm}$ below $xy$ on a vertical projector. Since $a, b, v, HT$ lie on the same line and the top view is inclined at $\beta = 30^\circ$ to $xy$, draw a straight line from $HT$ upwards and to the right at $30^\circ$ to $xy$. Where this line crosses $xy$ is point $v$.

> **Figure: Step 29.1 of line projection problem 29**
>
> Step 29.1 of an engineering graphics line projection construction. A horizontal reference line is labelled 'x' on the left. Text at the top-left reads 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Point h' is on the reference line, with a vertical projector down to HT at a dimensioned distance of 40 below the reference line. A line from HT goes up and to the right at an angle of 30 degrees to the reference line, intersecting the reference line at v and continuing slightly above it. From v, a vertical projector goes up to VT at a dimensioned distance of 50 above the reference line. A line connects h' through VT and extends slightly beyond. A box labelled '29.1' sits to the right of the construction. Beside it, a GIVEN box lists: [1] β - 30°, [2] B - 10 bVP, [3] HT - 40 fVP, [4] VT - 50 aHP, [5] A - 20 aHP. Below that, an ANSWERS box lists: [1] θ - 32°, [2] φ - 25°, [3] TL - 81mm, [4] a'b' - 73mm, [5] ab - 69mm. Text below the boxes states 'ALL DIMENSIONS ARE IN mm' and 'SCALE 1:1'.

2. **Locate $VT$ and draw the front view line**: From $v$ on $xy$, draw a vertical projector upwards and mark $VT$ at $50\text{ mm}$ above $xy$. Since $a', b', h', VT$ lie on the same line, join $h'$ to $VT$ and extend it.

> **Figure: Step 29.2 of line projection problem 29**
>
> Step 29.2 of an engineering graphics line projection construction, building on 29.1. A horizontal reference line is labelled 'x' on the left and 'y' on the right. Text at the top-left reads 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Point h' is on the xy line, with a vertical projector down to HT at distance 40 below xy. The line from HT passes through v on the xy line at 30 degrees to xy, and continues above xy to point b, which is at a dimensioned distance of 10 above the xy line (with a horizontal locus line at b). A vertical projector through b goes up to point b' on the extended h'-VT line (which passes through VT at distance 50 above xy). On the h'-VT-b' line, point a' is located at a dimensioned distance of 20 above the xy line (with a horizontal locus line at a'). A vertical projector from a' goes down across the xy line to point a on the HT-v-b line. The segments a'b' and ab are drawn with thick dark lines. A box labelled '29.2' sits at the bottom right. Beside the drawing, a GIVEN box lists: [1] β - 30°, [2] B - 10 bVP, [3] HT - 40 fVP, [4] VT - 50 aHP, [5] A - 20 aHP. Below that, an ANSWERS box lists: [1] θ - 32°, [2] φ - 25°, [3] TL - 81mm, [4] a'b' - 73mm, [5] ab - 69mm. Text below the boxes states 'ALL DIMENSIONS ARE IN mm' and 'SCALE 1:1'.

3. **Locate endpoints $A$ and $B$ and determine $TL$, $\theta$, and $\phi$**: Mark $a'$ on the line $h'\text{-}VT$ at $20\text{ mm}$ above $xy$, and project vertically down to $HT\text{-}v$ to find $a$. Mark $b$ on the extended line $HT\text{-}v$ at $10\text{ mm}$ above $xy$ (since $B$ is $10\text{ mm}$ behind $VP$), and project vertically up to the extended line $h'\text{-}VT$ to find $b'$. Complete the plane rotation (or line rotation) construction to measure the true length and inclinations $\theta$ and $\phi$.

> **Figure: Solution step 29.3 for projection of a line with traces**
>
> Engineering drawing labelled 29.3 showing the projections and traces of a line AB. Horizontal reference line xy. Point h' is on xy, and HT is 40 mm below xy on a vertical projector from h'. Point v is on xy, and VT is 50 mm above xy on a vertical projector from v. Front view line segment a'b' extends from h' through a' (20 mm above xy) and VT (50 mm above xy) to b'. Top view line segment ab extends from HT (40 mm below xy) through a, crossing xy at v, to b (10 mm above xy, representing 10 mm behind VP). The top view line makes an angle of 30 degrees with xy. Auxiliary true length triangles are constructed on the front view (showing angle phi and points A, B) and on the top view (showing angle theta and points A, B). Projectors connect h'-HT, a'-a, v-VT, and b'-b. A box labelled 'GIVEN' lists: [1] beta - 30 degrees, [2] B - 10 bVP, [3] HT - 40 fVP, [4] VT - 50 aHP, [5] A - 20 aHP. A box labelled 'ANSWERS' lists: [1] theta - 32 degrees, [2] phi - 25 degrees, [3] TL - 81mm, [4] a'b' - 73mm, [5] ab - 69mm. Text notes: 'ALL DIMENSIONS ARE IN mm', 'SCALE 1:1'.

---

#### Example 4: Apparent Inclination of Front View and Positions of Traces (Problem Q31 / 28)
**Problem statement:** The $HT$ of the line is $30\text{ mm}$ behind $VP$ and $VT$ of the line is $40\text{ mm}$ above $HP$. The front view of the line makes an angle $30^\circ$ with $xy$-line. One end of the line is $15\text{ mm}$ below the $HP$, while the other end is $10\text{ mm}$ in front of $VP$. Draw the projection of the line. Measure the length of front and top views.

**Given data:**
- [1] $\alpha = 30^\circ$
- [2] $A = 15\text{ mm}$ below $HP$ ($a'$ is $15\text{ mm}$ below $xy$)
- [3] $HT = 30\text{ mm}$ behind $VP$ ($HT$ is $30\text{ mm}$ above $xy$)
- [4] $B = 10\text{ mm}$ in front of $VP$ ($b$ is $10\text{ mm}$ below $xy$)
- [5] $VT = 40\text{ mm}$ above $HP$ ($VT$ is $40\text{ mm}$ above $xy$)

> **Figure: Problem Q31 statement figure**
>
> Problem Q31: A line with HT 30 mm behind VP and VT 40 mm above HP. Front view inclination alpha = 30 degrees with xy-line. End A is 15 mm below HP, end B is 10 mm in front of VP.

**Step-by-step solution:**
1. **Draw the front view line at $\alpha = 30^\circ$**: Locate $a'$ at $15\text{ mm}$ below $xy$. Through $a'$, draw the front view line inclined at $\alpha = 30^\circ$ to $xy$. Where it crosses $xy$, mark $h'$. Continue the line above $xy$ until it reaches a height of $40\text{ mm}$ above $xy$, and mark that point as $VT$. Drop a perpendicular from $VT$ to $xy$ to mark $v$.

> **Figure: Solution step 31.1 showing front view construction with traces**
>
> Engineering drawing labeled '31.1'. Note on top-left: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. GIVEN box: [1] α - 30°, [2] A - 15 bHP, [3] HT - 30 bVP, [4] VT - 40 aHP, [5] B - 10 fVP. ANSWERS box: [1] ab - 129mm, [2] a'b' - 137mm. Notes: 'ALL DIMENSIONS ARE IN mm', 'SCALE 1:1'. Construction: Horizontal reference line xy. Point a' is located 15 mm below xy. From a', a line goes up and to the right at an angle of 30° to xy, intersecting xy at h' and continuing up to point VT which is 40 mm above xy. A vertical projector connects VT down to v on the xy line.

2. **Construct the top view line through $HT$ and $v$**: From $h'$ on $xy$, erect a vertical projector to $30\text{ mm}$ above $xy$ (behind $VP$) to locate $HT$. Join $HT$ to $v$ and extend the line in both directions.

> **Figure: Solution step 31.2 adding top view line through HT and v**
>
> Engineering drawing labeled '31.2'. Note on top-left: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. GIVEN box: [1] α - 30°, [2] A - 15 bHP, [3] HT - 30 bVP, [4] VT - 40 aHP, [5] B - 10 fVP. ANSWERS box: [1] ab - 129mm, [2] a'b' - 137mm. Notes: 'ALL DIMENSIONS ARE IN mm', 'SCALE 1:1'. Construction builds on 31.1: Horizontal reference line xy. Point a' is 15 mm below xy. A line from a' at 30° to xy passes through h' on xy and reaches VT 40 mm above xy, with v on xy directly below VT. From h' on xy, a vertical projector goes up 30 mm to point HT (since HT is 30 mm behind VP, plotted above xy). A line is drawn passing through v and HT, extending upwards and to the left to meet the vertical projector from a' at point a (above xy), and extending downwards and to the right below xy.

3. **Project endpoints $A$ and $B$ and measure view lengths**: Project vertically upward from $a'$ ($15\text{ mm}$ below $xy$) to meet the extended line $v\text{-}HT$ at $a$. On the extended line $HT\text{-}v$ below $xy$, locate $b$ at $10\text{ mm}$ below $xy$ (since $B$ is $10\text{ mm}$ in front of $VP$). Project vertically upward from $b$ to meet the extended line $h'\text{-}VT$ at $b'$. Measure the view lengths.

> **Figure: Worked solution step 31.3 showing front view a'b', top view ab, and traces HT and VT**
>
> Projection of a line drawing labelled 31.3. Horizontal reference line xy. On the left, projector a-a' has 'a' above xy and 'a'' at 15 mm below xy. Front view segment a'b' passes through h' on xy at an angle of 30 degrees to xy, through VT at 40 mm above xy, up to b' above xy. Top view segment ab starts at 'a' above xy, passes through HT at 30 mm above xy, intersects the front view, passes through 'v' on xy (on the projector of VT), and goes to 'b' at 10 mm below xy (on the projector of b'). A box at the top reads: GIVEN: [1] alpha - 30 degrees, [2] A - 15 bHP, [3] HT - 30 bVP, [4] VT - 40 aHP, [5] B - 10 fVP. A box below xy reads: ANSWERS: [1] ab - 129mm, [2] a'b' - 137mm. Notes on the bottom right read: ALL DIMENSIONS ARE IN mm, SCALE 1:1.

**Answer:**
- Top view length $ab = 129\text{ mm}$
- Front view length $a'b' = 137\text{ mm}$

---

#### Example 5: Plane Rotation with Given True Length and Trace Distance (Problem Q218 / 29)
**Problem statement:** A straight line $AB$ measuring $120\text{ mm}$ long has its vertical trace $80\text{ mm}$ above $xy$-line and the $HT$ $100\text{ mm}$ below $xy$-line. The projectors through $HT$ and $VT$ are $110\text{ mm}$ apart. If the point $A$ is $10\text{ mm}$ above $HP$, draw the projections of $AB$ and find its true inclinations with respect to $HP$ and $VP$.

**Given data:**
- [1] $AB (TL) = 120\text{ mm}$
- [2] $VT = 80\text{ mm}$ above $xy$
- [3] $HT = 100\text{ mm}$ below $xy$
- [4] $HT\text{-}VT = 110\text{ mm}$
- [5] $A = 10\text{ mm}$ above $HP$

> **Figure: Problem Q218 statement for a line with given length, HT, VT, projector distance and end A**
>
> Problem statement for Q218 (trace problem - plane rotation): A straight line AB of true length 120 mm has its vertical trace (VT) 80 mm above the xy-line and horizontal trace (HT) 100 mm below the xy-line. The projectors through HT and VT are 110 mm apart. Point A is 10 mm above HP. Find the projections of AB and its true inclinations with respect to HP and VP.

**Step-by-step solution:**
1. **Draw the trace lines**: Draw $xy$ and set two vertical projectors $110\text{ mm}$ apart. Mark $h'$ on $xy$ and $HT$ $100\text{ mm}$ below $xy$ on one projector; mark $v$ on $xy$ and $VT$ $80\text{ mm}$ above $xy$ on the other. Join $h'\text{-}VT$ (front view line) and $HT\text{-}v$ (top view line).
2. **Locate end $A$**: Mark $a'$ on $h'\text{-}VT$ at $10\text{ mm}$ above $xy$, and project vertically to $HT\text{-}v$ to get $a$.
3. **Rabat to mark $TL = 120\text{ mm}$ and find $B$**: Erect a perpendicular to $h'\text{-}VT$ at $a'$ of length equal to $a$'s distance from $xy$ to find rabatted point $A$. Join $VT$ through $A$ (the true length line) and measure $AB = 120\text{ mm}$ along it. Drop a perpendicular from $B$ back to $h'\text{-}VT$ to get $b'$, and project to $HT\text{-}v$ to get $b$. Measure the true inclinations $\theta$ and $\phi$ from the rabatted triangles.

> **Figure: Worked solution step 218 for projection of line AB with traces**
>
> Orthographic projection drawing numbered 218 with 'SCALE 1:2' and 'ALL DIMENSIONS ARE IN mm'. Horizontal reference line xy. Above xy: segment A-B (horizontal in the construction or rotated view) of length 120 mm, connected by perpendiculars to front view segment h'-a'-b'-VT. Point a' is 10 mm above xy, VT is 80 mm above xy. Below xy: point HT is 100 mm below xy (vertically aligned with h'), connected through a and b to point v on xy. Horizontal distance between the projectors of HT/h' and VT/v is 110 mm. A rotated segment from HT of equal length to the top view is shown below a-b. GIVEN box: [1] AB - 120mm, [2] A - 10 aHP, [3] VT - 80 aXY, [4] HT - 100 bXY, [5] HT-VT - 110mm. ANSWERS box: [1] phi - 36 deg, [2] theta - 28 deg.

---

#### Example 6: Third Quadrant Line with $HT$, End Projectors, and $\theta$ (Problem Q32 / 30)
**Problem statement:** A line $AB$ is in third quadrant. The ends $A$ and $B$ are $20\text{ mm}$ and $60\text{ mm}$ behind $VP$. The distance between the end projectors is $75\text{ mm}$. The line is inclined at $30^\circ$ to $HP$ and its horizontal trace is $10\text{ mm}$ above $xy$-line. Draw the projections of the line $AB$, determine its true length and vertical trace.

**Given data:**
- [1] $EP = 75\text{ mm}$
- [2] $\theta = 30^\circ$
- [3] $A = 20\text{ mm}$ behind $VP$ ($20\text{ mm}$ above $xy$)
- [4] $B = 60\text{ mm}$ behind $VP$ ($60\text{ mm}$ above $xy$)
- [5] $HT = 10\text{ mm}$ above $xy$

> **Figure: Problem Q32: Line AB in third quadrant with HT 10mm above xy**
>
> Projection of a line AB in the third quadrant: end A is 20 mm behind VP, end B is 60 mm behind VP, distance between end projectors is 75 mm, inclined at 30 degrees to HP, horizontal trace (HT) is 10 mm above the xy-line. Determine projections, true length, and vertical trace.

**Step-by-step solution:**
1. **Draw the top view $ab$**: Since the line is in the third quadrant, the top view lies above $xy$. Draw two vertical end projectors $75\text{ mm}$ apart. Mark $a$ at $20\text{ mm}$ above $xy$ on the left projector and $b$ at $60\text{ mm}$ above $xy$ on the right projector. Join $a$ and $b$.

> **Figure: Solution step 32.1 for projection of line**
>
> Engineering drawing labeled '32.1' showing the first step of a projection of lines problem. At the top right is a note: 'a,b,v,HT -same line / a',b',h',VT - same line'. A 'GIVEN' box contains: '[1] θ - 30°', '[2] A - 20 bVP', '[3] B - 60 bVP', '[4] EP - 75mm', '[5] HT - 10 aXY'. The construction shows the horizontal reference line 'x y'. Above the xy line (since ends are behind VP), point 'a' is located 20mm above xy, and point 'b' is located 60mm above xy. The horizontal distance between the vertical projectors of 'a' and 'b' (end projectors EP) is dimensioned as 75 below the xy line. A solid segment connects 'a' and 'b'. Below the drawing is an 'ANSWERS' box containing: '[1] TL - 98mm', '[2] v-VT - 12mm', along with notes 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. **Extend $ab$ to locate $HT$ and $v$**: Extend the top view line $ba$ downward and to the left. At $10\text{ mm}$ above $xy$ on this line, mark $HT$ and drop a vertical projector to $xy$ to find $h'$. Continue the line until it intersects $xy$ at $v$.

> **Figure: Solution step 32.2 for projection of line**
>
> Engineering drawing labeled '32.2' showing the second step of the solution. A 'GIVEN' box contains: '[1] θ - 30°', '[2] A - 20 bVP', '[3] B - 60 bVP', '[4] EP - 75mm', '[5] HT - 10 aXY'. On the construction with horizontal reference line 'x y', the top view line segment 'a b' (with 'a' 20mm above xy, 'b' 60mm above xy, and projectors 75mm apart) is extended downward and to the left until it intersects the xy line at point 'v'. Along this extended line, at a distance of 10mm above the xy line, the horizontal trace 'HT' is marked, with its vertical projector dropping to the xy line at 'h''. From 'HT', a line is drawn upward and to the right at an angle of 30° to the line 'v-a-b'. Perpendiculars to the line 'v-a-b' are erected at 'a' and 'b' (indicated with right-angle symbols) to intersect this 30° line at points 'A' and 'B' respectively, representing the rabatted true length 'AB'. Below the drawing is an 'ANSWERS' box containing: '[1] TL - 98mm', '[2] v-VT - 12mm', a note 'a,b,v,HT -same line / a',b',h',VT - same line', and 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

3. **Rabat from $HT$ at $\theta = 30^\circ$ to find $TL$, front view $a'b'$, and $VT$**: At $HT$, draw a true-length line inclined at $\theta = 30^\circ$ to the top view line $HT\text{-}a\text{-}b$. Erect perpendiculars to the top view line at $a$ and $b$ to intersect this $30^\circ$ line at $A$ and $B$. Measure $AB$ as the true length ($TL = 98\text{ mm}$). The lengths of the perpendiculars $aA$ and $bB$ equal the distances of $A$ and $B$ below $HP$. Transfer these distances below $xy$ along the end projectors of $a$ and $b$ to locate $a'$ and $b'$. Join $b', a', h'$ and find $VT$ on the vertical projector through $v$.

> **Figure: Solution step 32.3 for projection of line AB with traces**
>
> Engineering drawing labelled 32.3 showing the projections and traces of line AB relative to reference line x-y. Above the x-y line are the top view segment a-b (with point a 20 mm above x-y and point b 60 mm above x-y), the horizontal trace HT (10 mm above x-y), the vertical trace VT, and a rabatted line A-B at an angle of 30 degrees to the top view line. Below the x-y line is the front view segment a'-b'. On the x-y line are points v (vertically aligned with VT) and h' (vertically aligned with HT). The horizontal distance between the projector a-a' and b-b' is 75 mm. Notes state: 'a,b,v,HT - same line' and 'a',b',h',VT - same line'. GIVEN box: [1] Θ - 30&deg;, [2] A - 20 bVP, [3] B - 60 bVP, [4] EP - 75mm, [5] HT - 10 aXY. ANSWERS box: [1] TL - 98mm, [2] v-VT - 12mm. Footer text: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:**
- True Length $TL = 98\text{ mm}$
- Distance $v\text{-}VT = 12\text{ mm}$

---

#### Example 7: Given True Length, Point $A$, $VT$, and Projector Distance $A\text{-}VT$ (Problem Q33 / 31)
**Problem statement:** A line $AB$ measuring $100\text{ mm}$ has its $VT$ $15\text{ mm}$ above the $HP$. The projectors through $A$ and $VT$ are $75\text{ mm}$ apart. If the end $A$ is $40\text{ mm}$ above the $HP$ and $20\text{ mm}$ in front of $VP$, draw the projections and find the true inclinations with the reference planes. Find the other trace.

**Given data:**
- [1] $AB = 100\text{ mm}$
- [2] $A\text{-}VT = 75\text{ mm}$
- [3] $A = 40\text{ mm}$ above $HP$
- [4] $A = 20\text{ mm}$ in front of $VP$
- [5] $VT = 15\text{ mm}$ above $HP$

> **Figure: Projection of line AB for Q33**
>
> Problem 33: Line AB of true length 100 mm has its vertical trace VT 15 mm above the HP. The distance between the projectors of A and VT is 75 mm. End A is 40 mm above the HP and 20 mm in front of the VP.

**Step-by-step solution:**
1. **Plot end $A$ and $VT$**: Draw $xy$. On a vertical projector on the left, mark $a'$ $40\text{ mm}$ above $xy$ and $a$ $20\text{ mm}$ below $xy$. At $75\text{ mm}$ to the right, draw a second vertical projector: mark $v$ on $xy$ and $VT$ $15\text{ mm}$ above $xy$. Join $a'$ and $VT$ and extend it to define the front view line.

> **Figure: Step 33.1 of line projection solution showing initial traces and end A**
>
> Engineering drawing labelled 33.1 showing the first construction step for a line projection problem. Horizontal reference line xy. Point a' is 40 mm above xy, and point a is 20 mm below xy on the same vertical projector (with a small square on the upper segment and a small circle on the lower segment). At a horizontal distance of 75 mm to the right of the projector a'a, another vertical projector locates point v on the xy line and VT 15 mm above the xy line. A line is drawn through a' and VT extending downwards to the right, and a line is drawn through a and v extending upwards to the right. Below the drawing, notes state: 'a,b,v,HT -same line' and 'a',b',h',VT - same line', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'. A GIVEN box states: [1] AB - 100mm, [2] VT - 15 aHP, [3] A - 20 fVP, [4] A - 40 aHP, [5] A-VT - 75mm. An ANSWERS box states: [1] phi - 14°, [2] theta - 18°, [3] h'-HT - 12 mm.

2. **Rabat at $a'$ to find $\phi$ and $b'$**: At $a'$, erect a perpendicular to the line $a'\text{-}VT$ of length $20\text{ mm}$ (equal to $a$'s distance from $xy$) to locate rabatted point $A$. Join $A$ to $VT$ and extend it: the angle between this line and $a'\text{-}VT$ is the true inclination $\phi$ with $VP$. Along the line $A\text{-}VT$, measure the true length $AB = 100\text{ mm}$ from $A$ to locate $B$. From $B$, drop a perpendicular to the extended line $a'\text{-}VT$ to locate the front view $b'$.

> **Figure: Step 33.2 of line projection solution finding end B and inclination phi**
>
> Engineering drawing labelled 33.2 building on step 33.1. Horizontal reference line xy. Point a' is 40 mm above xy and point a is 20 mm below xy on the same vertical projector. At a horizontal distance of 75 mm to the right, v lies on xy and VT is 15 mm above xy. The front view line passes from a' through VT to b'. A perpendicular is erected at a' to the line a'-VT, locating point A such that the distance from A to VT along the auxiliary line continues to b' with length A-b' = 100 mm (with a right-angle symbol at a' and a small circle on segment a'A). The angle between a'b' and the line from VT through A is marked as phi. From b', a vertical projector goes down to intersect the line a-v extended at point b (the top view ab and front view a'b' are drawn as thick lines). Below the drawing, notes state: 'a,b,v,HT -same line' and 'a',b',h',VT - same line', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'. A GIVEN box states: [1] AB - 100mm, [2] VT - 15 aHP, [3] A - 20 fVP, [4] A - 40 aHP, [5] A-VT - 75mm. An ANSWERS box states: [1] phi - 14°, [2] theta - 18°, [3] h'-HT - 12 mm.

3. **Locate $HT$, top view $ab$, and inclination $\theta$**: Note where the line $a'\text{-}VT\text{-}b'$ crosses $xy$ and label it $h'$. Join $a$ (20 mm below $xy$) through $v$ on $xy$ and extend it to form the top view line. Project vertically from $h'$ to meet the line $a\text{-}v$ at $HT$. Project vertically from $b'$ to meet the extended line $a\text{-}v$ at $b$. Finally, rabat the top view $ab$ (using the heights of $a'$ and $b'$ from $xy$) to measure the true inclination $\theta$ with $HP$.

> **Figure: Step 33.3 projection of line AB by trapezoidal plane method**
>
> Engineering drawing labelled '33.3' showing the projection of a line AB and its traces using the trapezoidal plane method. Horizontal reference line 'x y'. Above xy: point a' is 40 mm above xy; point VT is 15 mm above xy and 75 mm horizontally from the projector of a'a; front view line segment goes from a' through VT to b' and extends to h' on the xy line. A perpendicular is erected at a' and b' to form a trapezoid with true length AB = 100 mm, making angle phi with a'b'. Below xy: point a is 20 mm below xy; top view line goes from a through v (on the projector of VT) to b, and extends to HT (on the projector of h'). A perpendicular is erected at a and b to form a trapezoid with true length A-B, making angle theta with ab. Notes in blue: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Box 'GIVEN': '[1] AB - 100mm, [2] VT - 15 aHP, [3] A - 20 fVP, [4] A - 40 aHP, [5] A-VT - 75mm'. Box 'ANSWERS': '[1] \varphi - 14^\circ, [2] \theta - 18^\circ, [3] h'-HT - 12 mm'. Bottom right notes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

---

#### Example 8: Given True Length, Point $B$, $VT$, and Projector Distance $B\text{-}VT$ (Problem Q203 / 35)
**Problem statement:** A line $AB$ measuring $60\text{ mm}$ long has its $VT$ $15\text{ mm}$ above $HP$. The end $B$ is $30\text{ mm}$ above $HP$ and $35\text{ mm}$ in front of $VP$. The projectors through $B$ and $VT$ are $80\text{ mm}$ apart. Draw the projection and find the inclination with $HP$ and $VP$.

*(Note: The figure below shows the final step 36.4 from an adjacent trace construction for reference before starting Problem 35.)*

> **Figure: Solution step 36.4 for projection of line AB with traces**
>
> Engineering drawing labelled 36.4 showing the projection of line AB and its traces across reference line x-y. Above the x-y line (front view): point a' is 10 mm above x-y; locus of b' is 45 mm above x-y. Front view line a'b' has length 60 mm. True length line a'b1' is inclined at 30° to the horizontal, meeting the locus of b' at b1'. Line a'b' extended backward intersects x-y at h' and continues below x-y to point VT (on the vertical projector through v on x-y). Below the x-y line (top view): point HT is 15 mm below h' on x-y. Line from v on x-y passes through HT to point a and continues as top view ab to the locus of b, with true length line ab2 inclined at angle phi to the horizontal (constructed by rotating b1 on x-y, projected from b1', down to point 2, and projecting to the locus of b). Text note at top: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Box 'GIVEN': [1] A - 10 aHP, [2] B - 45 aHP, [3] FV - 60mm, [4] theta - 30°, [5] HT - 15 fVP. Box 'ANSWERS': [1] ab - 60mm, [2] v'-VT - 15mm, [3] phi - 30°, [4] TL - 69mm. Footer text: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Given data:**
- [1] $B = 35\text{ mm}$ in front of $VP$
- [2] $B = 30\text{ mm}$ above $HP$
- [3] $AB = 60\text{ mm}$
- [4] $VT = 15\text{ mm}$ above $HP$
- [5] $B\text{-}VT = 80\text{ mm}$

> **Figure: Problem 35 (Q203): Line AB given true length, end B position, and VT**
>
> Problem statement visualization for Q203 (problem 35): Line AB has true length 60 mm, VT is 15 mm above HP, end B is 30 mm above HP and 35 mm in front of VP, and the distance between the projectors of B and VT is 80 mm.

**Step-by-step solution:**
1. **Plot $VT$ and end $B$**: Draw $xy$. On the left vertical projector, mark $v$ on $xy$ and $VT$ at $15\text{ mm}$ above $xy$. Measure $80\text{ mm}$ horizontally to the right and draw the projector for $B$: mark $b'$ at $30\text{ mm}$ above $xy$ and $b$ at $35\text{ mm}$ below $xy$.
2. **Draw the trace lines**: Join $VT$ to $b'$ to establish the front view line. Join $v$ to $b$ to establish the top view line.
3. **Rabat at $b'$ to locate $A$ and find $\phi$ and $\theta$**: At $b'$, erect a perpendicular to the line $VT\text{-}b'$ of length $35\text{ mm}$ (distance of $b$ from $xy$) to locate rabatted point $B$. Join $VT$ to $B$; the angle at $VT$ is $\phi$. Measure $BA = 60\text{ mm}$ along $B\text{-}VT$ toward $VT$ to locate $A$. Drop a perpendicular from $A$ to $VT\text{-}b'$ to find $a'$, and project vertically to $v\text{-}b$ to find $a$. Rabat the top view $ab$ using the heights of $a'$ and $b'$ above $xy$ to find $\theta$.

> **Figure: Orthographic projection solution drawing 203 for a line with vertical trace**
>
> Projection of line AB labelled 203. Reference line xy is horizontal. On the left, vertical trace VT is 15 mm above xy, with its horizontal projection v on xy. Above xy: front view segment a'b' extends from a' up and right to b' (30 mm above xy); line b'a' extended left meets VT. Turned-down true length line AB = 60 mm is constructed perpendicular to a'b' at A (through a') and B (through b' with a right-angle square symbol and small circle on projector BB'), forming angle phi between a'b' and AB. Below xy: top view segment ab extends from a down and right to b (35 mm below xy); line ba extended up-left meets v on xy. Turned-down true length line AB is constructed below ab with right-angle symbols at a and b, forming angle theta between ab and AB. The horizontal distance between the vertical projector through VT/v and the vertical projector through b'/b is 80 mm (labelled B-VT = 80 mm). Top-left box 'GIVEN': [1] AB - 60mm, [2] B - 30 aHP, [3] B - 35 fVP, [4] VT - 15 aHP, [5] B-VT - 80mm. Bottom-left box 'ANSWERS': [2] a'b' - 55mm, [3] ab - 59mm, [4] phi - 23°, [5] theta - 10°.

### Common mistakes
- **Confusing $HT\text{-}VT$ distance with $EP$ distance**: The distance between $HT$ and $VT$ projectors ($h'\text{-}v$) is measured between the traces, whereas $EP$ is measured between $a'a$ and $b'b$. Never set $a'b'$ equal to the $HT\text{-}VT$ projector spacing.
- **Erecting the wrong perpendicular height during rabatting**: When rabatting the front view line ($h'\text{-}VT$), the perpendiculars at $a'$ and $b'$ must equal the distances of the **top view** points $a$ and $b$ from $xy$ (distances from $VP$). Conversely, perpendiculars on the top view line ($HT\text{-}v$) must equal the distances of $a'$ and $b'$ from $xy$ (distances from $HP$).
- **Reversing quadrant positions of traces**: Remember that "behind $VP$" puts $HT$ **above** $xy$, and "below $HP$" puts $VT$ **below** $xy$. Always check the quadrant of each trace before connecting $h'\text{-}VT$ and $HT\text{-}v$.

### Try it yourself

**Practice Problem 1 (Q34 / 32):**
The front view of a line $AB$ measures $80\text{ mm}$ and makes an angle of $45^\circ$ with $xy$-line. The end $A$ is in $HP$ and $VT$ of the line is $30\text{ mm}$ above $HP$. Draw the projections of the line and its true length. The line is inclined at $30^\circ$ to the $VP$. What is the distance of the point $B$ from both $HP$ and $VP$? Also measure the distance of $HT$ from $xy$-line.
- **Given:** [1] $FV = 80\text{ mm}$, [2] $\alpha = 45^\circ$, [3] $A$ in $HP$, [4] $\phi = 30^\circ$, [5] $VT = 30\text{ mm}$ above $HP$.

**Practice Problem 2 (Q40 / 36):**
The ends of the line $AB$ are $50\text{ mm}$ and $20\text{ mm}$ above the $HP$. The length of its front view is $70\text{ mm}$ and its vertical trace is $10\text{ mm}$ above $HP$. The line is inclined $40^\circ$ to $VP$. Find its true length and true inclinations with $HP$. Also locate its horizontal trace.
- **Given:** [1] $FV = 70\text{ mm}$, [2] $A = 50\text{ mm}$ above $HP$, [3] $VT = 10\text{ mm}$ above $HP$, [4] $B = 20\text{ mm}$ above $HP$, [5] $\phi = 40^\circ$.

> **Figure: Problem Q40 projection of line AB with vertical trace and inclination to VP**
>
> Problem Q40: Line AB has end A 50 mm above HP, end B 20 mm above HP, front view length a'b' = 70 mm, vertical trace VT 10 mm above HP, and inclination to VP phi = 40 degrees. Find true length, true inclination with HP, and horizontal trace.

### Quick recall
- $a', b', h', VT$ always lie on a single straight line; $a, b, v, HT$ always lie on a single straight line.
- $h'$ and $v$ are always located on the $xy$ reference line.
- Given $HT$, $VT$, and the projector distance $HT\text{-}VT$, you can immediately draw both view lines ($h'\text{-}VT$ and $HT\text{-}v$) before knowing where $A$ and $B$ are.
- If only trace positions, $HT\text{-}VT$ projector distance, and $EP$ distance are given, assume end $A$ lies in $HP$ (so $a$ is at $HT$ and $a'$ is at $h'$).
- In plane rotation (rabatting), the true length line pivoted at $VT$ makes the angle $\phi$ with the front view line $h'\text{-}VT$, and the true length line pivoted at $HT$ makes the angle $\theta$ with the top view line $HT\text{-}v$.

<!-- page 8 | Trace Problems: Combined Views, Inclinations, and Coincident Traces -->

## Trace Problems: Combined Views, Inclinations, and Coincident Traces

### Idea in brief
When a straight line is defined by a mix of apparent view lengths, true inclinations, and trace positions, you cannot always plot both views directly. By combining the collinearity of traces with either the **Line Rotation Method** or the **Plane Rotation (Trapezoidal) Method**, you can unlock the missing end projectors. If an endpoint's distance from one reference plane is unknown, you can temporarily place it on that reference plane, construct the view shape, and translate the view along the reference line to match the given trace. Furthermore, if a line passes directly through the $xy$ reference line in space, its horizontal and vertical traces meet at a single common point on $xy$.

### Key terms
- **Collinearity of Traces:** The geometric property that $a', b', h', 	ext{VT}$ always lie on the same straight line (the extended front view), and $a, b, v, 	ext{HT}$ always lie on the same straight line (the extended top view).
- **Equivalence of Methods:** Both the Line Rotation Method and the Plane Rotation Method yield identical projections, true lengths, and trace locations for any given dataset.
- **Rabatted Trace Triangle:** A right-angled triangle constructed on the front view (between $	ext{VT}$ and $h'$) or top view (between $	ext{HT}$ and $v$) using the true inclination ($	heta$ or $\phi$) to determine the perpendicular distance of a trace from $xy$.
- **Coincident Traces:** The condition where both $	ext{HT}$ and $	ext{VT}$ occupy the exact same point on the $xy$ line because the 3D line intersects the $xy$ reference line directly.
- **Projector Translation (Shifting):** Constructing a view's true geometry by temporarily assuming an endpoint lies on a reference plane, then sliding the entire view parallel to $xy$ until it aligns with the known trace projector.

### Rules and formulas
> **Key idea.** The front view and its traces are strictly collinear, and the top view and its traces are strictly collinear.

$$a', b', h', \text{VT} \quad \text{(lie on the same straight line)}$$
*Meaning:* Extending the front view segment $a'b'$ intersects the $xy$ line at $h'$ and passes through the vertical trace $\text{VT}$.

$$a, b, v, \text{HT} \quad \text{(lie on the same straight line)}$$
*Meaning:* Extending the top view segment $ab$ intersects the $xy$ line at $v$ and passes through the horizontal trace $\text{HT}$.

$$\text{FV} = \text{TL} \cos\phi \quad \text{and} \quad \text{TV} = \text{TL} \cos\theta$$
*Meaning:* The foreshortened length of a view equals the true length multiplied by the cosine of its true inclination with the opposite plane.

$$\tan\phi = \frac{h'\text{--HT}}{\text{VT--}h'}$$
*Meaning:* In the rabatted right triangle on the front view segment between $\text{VT}$ and $h'$, the perpendicular distance from $h'$ to $\text{HT}$ is opposite the angle $\phi$.

$$\text{HT} \equiv \text{VT} \equiv h' \equiv v \quad (\text{on } xy)$$
*Meaning:* When a line intersects the $xy$ line, its horizontal and vertical traces coincide at a single common point on $xy$.

### Method
1. **Using Line Rotation with Trace Shift (when an endpoint distance is missing):**
   - Draw the known view (e.g., front view $a'b'$) at its given apparent angle and length.
   - Temporarily assume the starting endpoint lies on the opposite reference plane (e.g., assume $A$ is on $\text{VP}$ so its initial top view starts on $xy$ at $a'$).
   - Rotate $a'b'$ parallel to $xy$ (to $b_1'$), project down to intersect the true inclination line at $\phi$ (finding $\text{TL}$ and the locus of $B$), and drop the vertical projector from $b'$ to find the top view length.
   - Locate the given trace (e.g., $\text{VT}$) on the extended front view and project it vertically to $v$ on $xy$.
   - Transfer the constructed top view length so that it starts at the end projector and passes directly through $v$ to locate $a$, $b$, and $\text{HT}$.
2. **Using Plane Rotation (Trapezoidal Method) with Traces:**
   - Draw the known view (e.g., front view $a'b'$) and extend it to locate $\text{VT}$ and the $xy$ intersection $h'$.
   - At $\text{VT}$ (which has zero distance from $\text{VP}$), construct a line at the true inclination $\phi$ to the front view line $a'b'$.
   - Erect perpendiculars to $a'b'$ at $a'$, $b'$, and $h'$ to intersect this $\phi$-line, forming right triangles.
   - The perpendicular heights at $a'$, $b'$, and $h'$ give the exact distances of $a$, $b$, and $\text{HT}$ from the $xy$ line in the top view. Transfer these distances along the vertical projectors from $a'$, $b'$, and $h'$ to draw $a\text{--}b\text{--}v\text{--HT}$.
3. **Solving Coincident Trace Problems:**
   - Mark the known endpoint view (e.g., $a$) and draw the known view (e.g., top view $ab$) at its apparent angle $\beta$.
   - Extend $ab$ to meet the $xy$ line at the common point $v, h', \text{HT}, \text{VT}$.
   - Rotate $ab$ parallel to $xy$ to $ab_1$, project to the other view using the given $\text{TL}$ to find the locus of $b'$, and connect through the common trace point on $xy$ to complete the projection.

### Worked examples

#### Example 1: Equivalence of Line Rotation (Q34) and Plane Rotation (Q35) Methods
**Problem Statement (33 — GIVEN: FRONT VIEW; TRUE INCLINATION WITH VP; APPARENT ANGLE WITH TOP VIEW; VT GIVEN):**
The front view of a line $AB$ measures $80\text{ mm}$ and makes an angle of $45^\circ$ with $xy$-line. The end $A$ is in $\text{HP}$ and $\text{VT}$ of the line is $30\text{ mm}$ above $\text{HP}$. Draw the projections of the line and its true length. The line is inclined at $30^\circ$ to the $\text{VP}$. What is the distance of the point $B$ from both $\text{HP}$ and $\text{VP}$. Also measure the distance of $\text{HT}$ from $xy$-line.

**Given Data:**
- [1] $\text{FV} = 80\text{ mm}$
- [2] $\alpha = 45^\circ$
- [3] $A$ – in $\text{HP}$
- [4] $\phi = 30^\circ$
- [5] $\text{VT} = 30\text{ aHP}$

**Part A: Solution by Line Rotation Method (Q34)**
1. **Step 34.1:** Draw the reference line $xy$. Since end $A$ is in $\text{HP}$, mark $a'$ (which coincides with $h'$) on the $xy$ line. From $a',h'$, draw the front view $a'b'$ of length $80\text{ mm}$ inclined at $\alpha = 45^\circ$ above $xy$.

> **Figure: Step 34.1 showing the front view of line AB on the XY line**
>
> Step 34.1 of a projection of lines problem. A horizontal reference line is labelled 'x' on the left and 'y' on the right. Point 'a',h'' is located on the xy line. From 'a',h'', the front view line segment 'a'b'' of length 80 is drawn upwards and to the right at an angle of 45 degrees to the xy line, ending at 'b''. At the top left, an 'ANSWERS' box lists: [1] ab - 73mm, [2] h'-HT - 25mm, [3] H - 57mm, [4] L - 22mm. Beside it, blue text notes: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Below the xy line on the left, a 'GIVEN' box lists: [1] A - on HP, [2] VT - 30 aHP, [3] FV - 80mm, [4] φ - 30°, [5] α - 45°. At the bottom left: 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. **Step 34.2:** Temporarily assume $A$ is also on $\text{VP}$ (at $a',h'$). With $a',h'$ as center and radius $a'b' = 80\text{ mm}$, rotate $b'$ clockwise down to $b_1'$ on the $xy$ line to make the front view parallel to $xy$. From $a',h'$, draw a line below $xy$ inclined at $\phi = 30^\circ$. Drop a vertical projector from $b_1'$ to intersect this $30^\circ$ line, establishing the true length $\text{TL}$ and the horizontal locus line in the top view.

> **Figure: Step 34.2 adding the rotation of the front view and construction of the true length in the top view**
>
> Step 34.2 of the projection of lines problem. Building on step 34.1, with 'a',h'' on the xy line and the front view 'a'b'' of length 80 inclined at 45 degrees above the xy line. An arc centered at 'a',h'' rotates 'b'' downwards (clockwise) to point 'b1'' on the xy line. From 'b1'', a vertical projector goes straight down below the xy line to meet a line drawn from 'a',h'' downwards and to the right at an angle of 30 degrees to the xy line, intersecting at point 'b1'. A horizontal dashed locus line passes through 'b1'. Includes the same 'ANSWERS' box ([1] ab - 73mm, [2] h'-HT - 25mm, [3] H - 57mm, [4] L - 22mm), notes ('a,b,v,HT -same line', 'a',b',h',VT - same line'), 'GIVEN' box ([1] A - on HP, [2] VT - 30 aHP, [3] FV - 80mm, [4] φ - 30°, [5] α - 45°), and scale notes ('SCALE 1:1', 'ALL DIMENSIONS ARE IN mm').

3. **Step 34.3:** Drop a vertical projector straight down from $b'$ to meet the horizontal locus line at point $1$. The segment from $a',h'$ to $1$ represents the true top view length $ab = 73\text{ mm}$.

> **Figure: Step 34.3 of line projection construction**
>
> Engineering drawing labelled 34.3 showing a step in the projection of a line. Horizontal reference line xy. Point a',h' lies on the xy line. Front view line a'b' goes upwards and to the right from a',h' at an angle of 45 degrees to xy, with length 80. From b', an arc is swung down to the xy line to locate b1' on xy, and a vertical projector goes straight down from b' to a horizontal locus line below xy at point 1. From b1', a vertical projector goes down to the same lower locus line to locate b1. Line from a',h' to b1 is inclined at 30 degrees below xy. Another line from a',h' to 1 has double tick marks indicating equal length to the top view. Notes at top state: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Box 'GIVEN': [1] A - on HP, [2] VT - 30 aHP, [3] FV - 80mm, [4] phi - 30 deg, [5] alpha - 45 deg. Box 'ANSWERS': [1] ab - 73mm, [2] h'-HT - 25mm, [3] H - 57mm, [4] L - 22mm. Bottom note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

4. **Step 34.4:** Mark $\text{VT}$ on the front view line $a'b'$ at a vertical height of $30\text{ mm}$ above $xy$, and drop a vertical projector to locate $v$ on $xy$. Using the collinearity rule ($a, b, v, \text{HT}$ – same line), take the top view length $73\text{ mm}$ and translate it so that its endpoints lie on the vertical projectors of $a'$ and $b'$ while passing through $v$. Since $a'$ and $h'$ coincide on $xy$, point $a$ and $\text{HT}$ coincide on the vertical projector below $a',h'$ at a distance $h'\text{--HT} = 25\text{ mm}$.

> **Figure: Step 34.4 of line projection construction with traces**
>
> Engineering drawing labelled 34.4 completing the projection and traces of the line from step 34.3. In addition to the construction in 34.3: on the front view line a'b', a point VT is marked at a vertical height of 30 above xy. A vertical projector goes down from VT to the xy line at point v. From the lower locus point 1, the top view length (equal to a'-1, marked with double ticks) is transferred to locate point b on the vertical projector through b' and 1, and extended up-left through v to meet the vertical projector through a',h' at point a,HT above the xy line. The line segment a,HT to b passes through v. Vertical dimensions on the right show 'H' as the height of b' above xy, and 'L' as the distance of the locus of b below xy. Notes at top state: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Box 'GIVEN': [1] A - on HP, [2] VT - 30 aHP, [3] FV - 80mm, [4] phi - 30 deg, [5] alpha - 45 deg. Box 'ANSWERS': [1] ab - 73mm, [2] h'-HT - 25mm, [3] H - 57mm, [4] L - 22mm. Bottom note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Part B: Solution by Plane Rotation Method (Q35 — Q34 & Q35 ARE SAME – PLANE ROTATION METHOD)**
1. **Step 35.1:** Draw the front view $a'b' = 80\text{ mm}$ at $45^\circ$ to $xy$ with $a'$ on $xy$. Mark $\text{VT}$ on $a'b'$ at $30\text{ mm}$ above $xy$ and project down to $v$ on $xy$.

> **Figure: Solution step 35.1 showing the front view a'b' and vertical trace VT**
>
> Engineering drawing labeled 35.1. A horizontal reference line x-y is drawn. Point a' lies on the x-y line. From a', a thick line representing the front view a'b' extends upwards and to the right at an angle of 45° to the x-y line, with a labeled length of 80. Along the segment a'b', a point VT (vertical trace) is marked. A vertical projector from VT drops down to point v on the x-y line, dimensioned as 30 above the x-y line. A vertical projector from b' drops down to the x-y line. Notes on the left state: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. A box labeled 'GIVEN' contains: '[1] A - on HP', '[2] VT - 30 aHP', '[3] FV - 80mm', '[4] φ - 30°', '[5] α - 45°'. A box labeled 'ANSWERS' contains: '[1] ab - 73mm', '[2] h'-HT - 25mm', '[3] H - 57mm', '[4] L - 22mm'. Text at bottom right: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. **Step 35.2:** Construct the rabatted view directly on $a'b'$. Through $\text{VT}$, draw the true length line inclined at $\phi = 30^\circ$ to $a'b'$. Draw perpendiculars to $a'b'$ at $a'$ and $b'$ to meet this $30^\circ$ line, forming two right triangles opposite $\text{VT}$.

> **Figure: Solution step 35.2 for projection of line AB**
>
> Engineering drawing labeled 35.2 showing a step in the projection of a line. A horizontal reference line is labeled 'x' on the left and 'y' on the right. Point 'a'' is on the xy line, and from it, the front view line 'a'b'' goes up and right at an angle of 45 degrees to the xy line, with a length of 80. It passes through point 'VT' which is 30 above the xy line, with a vertical projector down to 'v' on the xy line. At 'b'', a line perpendicular to 'a'b'' (marked with a right-angle symbol and double tick marks) goes down and right to point 'B'. Another line from 'b'' goes down and left at 30 degrees to 'a'b''. At 'a'', a line perpendicular to 'a'b'' (marked with a right-angle symbol and a circle) goes up and left to point 'A'. A thick line connects 'A' and 'B', passing through 'VT'. A vertical projector goes down from 'b'' to the xy line. Box 'GIVEN': [1] A - on HP, [2] VT - 30 aHP, [3] FV - 80mm, [4] φ - 30°, [5] α - 45°. Box 'ANSWERS': [1] ab - 73mm, [2] h'-HT - 25mm, [3] H - 57mm, [4] L - 22mm. Notes: 'a,b,v,HT - same line', 'a',b',h',VT - same line', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

3. **Step 35.3:** The perpendicular segment at $a'$ gives the distance of $a$ (and $\text{HT}$) in front of $\text{VP}$ ($25\text{ mm}$), which is transferred vertically above $a'$ on the projector of $A$, and the perpendicular segment at $b'$ gives the distance of $b$ behind $\text{VP}$, transferred vertically below $b'$ on the projector of $B$. Connecting $a$, $v$, and $b$ yields the exact same top view.

> **Figure: Solution step 35.3 for projection of line AB**
>
> Engineering drawing labeled 35.3 showing a further step in the projection of a line. Everything from step 35.2 is present, with additional constructions for the top view: from 'a'' on the xy line, a vertical line goes up to the line AB, labeled 'a'' at the intersection (with a circle mark on the vertical segment). A line from this upper point 'a'' goes down and right, passing through 'v' on the xy line, and continues below the xy line to point 'b', which lies on the vertical projector extended down from 'b'' (marked with double ticks below the xy line). Box 'GIVEN': [1] A - on HP, [2] VT - 30 aHP, [3] FV - 80mm, [4] φ - 30°, [5] α - 45°. Box 'ANSWERS': [1] ab - 73mm, [2] h'-HT - 25mm, [3] H - 57mm, [4] L - 22mm. Notes: 'a,b,v,HT - same line', 'a',b',h',VT - same line', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answers:**
- [1] $ab = 73\text{ mm}$
- [2] $h'\text{--HT} = 25\text{ mm}$
- [3] $\text{TL} = 92\text{ mm}$ (from diagram), distance of $B$ from $\text{HP} = 57\text{ mm}$, distance of $B$ from $\text{VP} = 33\text{ mm}$.

---

#### Example 2: Line Rotation with True Inclination to HP and HT Given (Q36)
**Problem Statement (34 — GIVEN: FRONT VIEW; TRUE INCLINATION WITH HP; HT GIVEN):**
The line $AB$ has its ends $10\text{ mm}$ and $45\text{ mm}$ above $\text{HP}$ and length of elevation is $60\text{ mm}$. The line is inclined $30^\circ$ to $\text{HP}$. The $\text{HT}$ of the line is $15\text{ mm}$ in front of $\text{VP}$. Draw its projections and find its true length and true inclination with $\text{VP}$. Locate vertical trace.

**Given Data:**
- [1] $\text{FV} = 60\text{ mm}$
- [2] $\theta = 30^\circ$
- [3] $A = 10\text{ aHP}$
- [4] $B = 45\text{ aHP}$
- [5] $\text{HT} = 15\text{ fVP}$

**Solution Steps:**
1. **Step 36.1:** Draw horizontal locus lines at $10\text{ mm}$ above $xy$ (for $a'$) and $45\text{ mm}$ above $xy$ (for $b'$). Pick $a'$ on the lower locus and cut an arc of radius $60\text{ mm}$ on the upper locus to draw the front view $a'b'$.

> **Figure: Step 36.1 showing the front view a'b' of line AB above the xy line**
>
> Construction step labelled 36.1. A horizontal reference line xy is drawn, with a point labelled v just above the left side of the line. Above the xy line, a horizontal locus line is drawn at a vertical distance of 10 mm above xy, containing point a'. Another horizontal locus line is drawn at a vertical distance of 45 mm above xy, containing point b'. The front view segment a'b' connects a' and b' with a dimensioned length of 60 mm. Top-left ANSWERS box: [1] ab - 60mm, [2] v'-VT - 15mm, [3] φ - 30°, [4] TL - 69mm. Bottom-left GIVEN box: [1] A - 10 aHP, [2] B - 45 aHP, [3] FV - 60mm, [4] θ - 30°, [5] HT - 15 fVP. Bottom notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm, a,b,v,HT -same line, a',b',h',VT - same line.

2. **Step 36.2:** From $a'$, draw a line at $\theta = 30^\circ$ to the horizontal to meet the locus of $B$ at $b_1'$. The segment $a'b_1'$ is the true length $\text{TL} = 70\text{ mm}$. Extend $b'a'$ downwards to meet the $xy$ line at $h'$. Drop a vertical projector from $h'$ down $15\text{ mm}$ below $xy$ to locate $\text{HT}$.

> **Figure: Step 36.2 of the projection of a straight line problem**
>
> Construction step labelled 36.2. Reference line x-y is drawn horizontally. Above x-y: point a' is 10 mm above x-y. A horizontal locus line of B is drawn 45 mm above x-y. From a', the true length line a'b1' is drawn at an angle of 30° to the horizontal, meeting the locus of B at b1' (labelled TL). Also from a', the front view segment a'b' of length 60 mm is drawn, meeting the locus of B at b'. A vertical projector goes down from b1' to the x-y line at point b1, forming horizontal segment 1-b1 along x-y (where 1 is on the vertical projector through a'). From 1, using 1 as centre, an arc of radius 1-b1 is swung downwards, meeting the vertical projector from b' at point 2, with segment 1-2 drawn. Text notes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', 'a,b,v,HT - same line', 'a',b',h',VT - same line'. GIVEN box: [1] A - 10 aHP, [2] B - 45 aHP, [3] FV - 60mm, [4] θ - 30°, [5] HT - 15 fVP. ANSWERS box: [1] ab - 60mm, [2] v'-VT - 15mm, [3] φ - 30°, [4] TL - 69mm.

3. **Step 36.3:** Project $b_1'$ vertically down to the horizontal level of $\text{HT}$, and swing an arc centered at $a$ to intersect the vertical projector dropped from $b'$, locating $b$. Draw the line from $\text{HT}$ through $a$ and $b$. Where $\text{HT--}b$ crosses $xy$, mark $v$. Project $v$ vertically down to meet the extended front view line $b'a'h'$ at $\text{VT}$. Rotate $ab$ parallel to $xy$ and project up to the locus of $B$ to find $\phi$.

> **Figure: Step 36.3 showing final projections and traces of the line**
>
> Construction step labelled 36.3. Reference line x-y is horizontal. Above x-y: point a' is 10 mm above x-y; locus of B is 45 mm above x-y. From a', true length line a'b1' (labelled TL) is inclined at 30° to the horizontal, and front view a'b' has length 60 mm. Line b'a' is extended downwards to intersect x-y at h', and further down to VT. From h', a vertical projector goes down 15 mm below x-y to locate HT. A line from HT through the projection 1-2 construction gives the top view ab: a is on the vertical projector below a' (and 1), and b is on the vertical projector below b' (and 2), with segment ab parallel and equal in length to segment 1-2 (marked with double ticks). Extending ba upwards to the left intersects x-y at v (on the same vertical projector as VT). Text notes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', 'a,b,v,HT - same line', 'a',b',h',VT - same line'. GIVEN box: [1] A - 10 aHP, [2] B - 45 aHP, [3] FV - 60mm, [4] θ - 30°, [5] HT - 15 fVP. ANSWERS box: [1] ab - 60mm, [2] v'-VT - 15mm, [3] φ - 30°, [4] TL - 69mm.

**Answers:**
- [1] $\text{TL} = 70\text{ mm}$
- [2] $ab = 61\text{ mm}$
- [3] $\phi = 31^\circ$
- [4] $v\text{--VT} = 8\text{ mm}$

---

#### Example 3: Plane Rotation with Front View, VT, and $\phi$ Given (Problem 40.1)
**Problem Statement:**
Draw the projections of a line $AB$ and find its true length, top view length, horizontal trace distance, and inclination with $\text{HP}$ from the given data.

**Given Data:**
- [1] $A = 50\text{ aVP}$ (plotted $50\text{ mm}$ above $xy$ as $a'$)
- [2] $B = 20\text{ aHP}$
- [3] $\text{FV} = 70\text{ mm}$
- [4] $\text{VT} = 10\text{ aHP}$
- [5] $\phi = 40^\circ$

**Solution Steps:**
1. **Step 40.1 (Stage 1):** Mark $a'$ at $50\text{ mm}$ above $xy$ and draw a horizontal locus line for $b'$ at $20\text{ mm}$ above $xy$. Cut an arc of $70\text{ mm}$ from $a'$ to locate $b'$ on the $20\text{ mm}$ locus.

> **Figure: Step 40.1 (first stage) of line projection problem 40**
>
> Engineering drawing labelled 40.1 showing the initial front view of a line. A horizontal reference line is labelled x at the left end and y at the right end. Point a' is located 50 mm above the xy line, with a vertical projector dropped to xy (marked with a small circle midway). Point b' is located 20 mm above the xy line, with a horizontal locus line through b' and a vertical projector dropped to xy (marked with a small square midway). The front view segment a'b' has length 70. Box GIVEN: [1] A - 50 aVP [uncertain: likely 50 aHP], [2] B - 20 aHP, [3] FV - 70mm, [4] VT - 10 aHP, [5] φ - 40°. Box ANSWERS: [1] ab - 86mm, [2] TL - 91mm, [3] h'-HT - 20mm, [4] θ - 19°. Note below: a,b,v,HT - same line; a',b',h',VT - same line.

2. **Step 40.1 (Stage 2):** Extend $a'b'$ downwards and to the right to locate $\text{VT}$ at $10\text{ mm}$ above $xy$. Through $\text{VT}$, draw a construction line at $\phi = 40^\circ$ to the extended front view line. Drop perpendiculars from $a'$ and $b'$ to this $40^\circ$ line to find the true length $\text{TL} = 91\text{ mm}$ and the distances of $a$ and $b$ from $xy$ (marked with triple and double ticks).

> **Figure: Step 40.1 (second stage) of line projection problem 40**
>
> Engineering drawing also labelled 40.1 showing further construction on the front view. Horizontal reference line xy. Point a' is 50 mm above xy; point b' is 20 mm above xy. The segment a'b' of length 70 is extended downwards to the right to locate VT at 10 mm above the xy line. From a' and b', parallel construction lines (marked with triple and double tick marks respectively) are drawn downwards to the left, perpendicular to a'b', to construct a right-angled triangle on a'b' with an angle of 40° at the base line AB (where B lies on the xy line and A lies below xy). Box GIVEN: [1] A - 50 aVP, [2] B - 20 aHP, [3] FV - 70mm, [4] VT - 10 aHP, [5] φ - 40°. Box ANSWERS: [1] ab - 86mm, [2] TL - 91mm, [3] h'-HT - 20mm, [4] θ - 19°. Note below: a,b,v,HT - same line; a',b',h',VT - same line.

3. **Step 40.1 (Stage 3):** Extend $a'b'\text{VT}$ further to intersect the $xy$ line at $h'$. Erect a perpendicular to the front view line at $h'$ to meet the extended $40^\circ$ line, giving the distance $h'\text{--HT} = 20\text{ mm}$ (marked with a single tick). Transfer the triple-tick, double-tick, and single-tick lengths vertically from $xy$ along the projectors of $a'$, $b'$, and $h'$ to plot $a, b, v, \text{HT}$ on the same straight line.

> **Figure: Projection of line step 40.1**
>
> Engineering drawing labelled 40.1 showing a step in the projection of a straight line relative to reference line xy. Above xy: point a' is 50 mm above xy; front view line segment a'b' has length 70 mm, with b' located 20 mm above xy. The line a'b' extends rightwards and downwards to point VT (10 mm above xy) and further to h' on the xy line. From h', a vertical projector goes up to HT above xy. The line AB (true length in top view plane) passes through B and extends to VT, inclined at 40 degrees to xy, with a perpendicular dropped from a' to point A below xy. Below xy: vertical projector from a' goes down to point a, and from b' goes down to point b. Top view segment ab extends up and right through b to HT above xy. Notes at the bottom read: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. GIVEN box: [1] A - 50 aVP, [2] B - 20 aHP, [3] FV - 70mm, [4] VT - 10 aHP, [5] phi - 40 degrees. ANSWERS box: [1] ab - 86mm, [2] TL - 91mm, [3] h'-HT - 20mm, [4] theta - 19 degrees.

4. **Step 40.1 (Stage 4):** To find $\theta$, rabat the elevation heights onto the top view line $a\text{--}b\text{--HT}$ by erecting perpendiculars at $a$ and $b$ equal to their heights above $xy$, forming a right-angled triangle with vertex at $\text{HT}$. Measure the angle at $\text{HT}$ as $\theta = 19^\circ$.

> **Figure: Projection of line step 40.1 completed**
>
> Engineering drawing labelled 40.1 showing the completed projection of the line from the previous step. It includes all elements of the upper diagram, plus the construction for the true length and inclination theta below the xy line: a perpendicular is drawn from b (and HT) to a rabatted line from a, forming a right-angled triangle on the top view line a-b-HT, with angle theta marked at HT. Notes at the bottom left read: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. GIVEN box: [1] A - 50 aVP, [2] B - 20 aHP, [3] FV - 70mm, [4] VT - 10 aHP, [5] phi - 40 degrees. ANSWERS box: [1] ab - 86mm, [2] TL - 91mm, [3] h'-HT - 20mm, [4] theta - 19 degrees.

**Answers:**
- [1] $ab = 86\text{ mm}$
- [2] $\text{TL} = 91\text{ mm}$
- [3] $h'\text{--HT} = 20\text{ mm}$
- [4] $\theta = 19^\circ$

---

#### Example 4: Front View and Vertical Trace Given (Q196)
**Problem Statement (37 — FRONT VIEW AND VERTICAL TRACE IS GIVEN):**
The ends of the line $AB$ are $20\text{ mm}$ and $50\text{ mm}$ above the $\text{HP}$. The length of its front view is $70\text{ mm}$ and its vertical trace is $10\text{ mm}$ above $\text{HP}$. The line is inclined $45^\circ$ to $\text{VP}$. Find its true length and true inclinations with $\text{HP}$. Also locate its horizontal trace.

**Given Data:**
- [1] $\text{FV} = 70\text{ mm}$
- [2] $A = 20\text{ aHP}$
- [3] $\text{VT} = 10\text{ aHP}$
- [4] $B = 50\text{ aHP}$
- [5] $\phi = 45^\circ$

**Solution Steps:**
1. Draw horizontal loci at $10\text{ mm}$, $20\text{ mm}$, and $50\text{ mm}$ above $xy$ for $\text{VT}$, $a'$, and $b'$ respectively. Draw $a'b' = 70\text{ mm}$ between the $20\text{ mm}$ and $50\text{ mm}$ loci, and extend it backwards through $a'$ to pass through $\text{VT}$ ($10\text{ mm}$ above $xy$) and meet $xy$ at $h'$.
2. Construct a rabatted triangle on the front view line by drawing a line through $\text{VT}$ at $\phi = 45^\circ$ to $h'b'$. Erect perpendiculars at $h'$, $a'$, and $b'$ to find the true length $\text{TL} = 99\text{ mm}$ and the top view projector distances.
3. Transfer the perpendicular distances from $xy$ along the vertical projectors of $h'$, $a'$, and $b'$ to locate $\text{HT}$, $a$, and $b$ collinearly with $v$. Rotate $a'b'$ or use the locus of $B$ at $50\text{ mm}$ with $\text{TL} = 99\text{ mm}$ to find $b_1'$ and measure $\theta = 18^\circ$.

> **Figure: Projection of line AB and trace construction for problem 196**
>
> Orthographic projection and auxiliary rabatted view for problem 196. Horizontal reference line xy. Above xy: vertical trace VT is 10 mm above xy (projected vertically from point v on xy), end a' is 20 mm above xy, end b' and locus point b1' are on a horizontal locus line 50 mm above xy. The front view line segment a'b' has length 70 mm, and extended backwards through a' it passes through VT and intersects xy at h'. From a'b' (extended through VT), a perpendicular projection is taken to construct the rabatted true length AB inclined at phi = 45 degrees to the line v-b' (marked with 45 degrees arc and right-angle symbols at the projectors from VT/v, a', b'). The true length segment a'b1' is drawn from a' to the 50 mm locus line, making angle theta with the horizontal. Below xy: top view segment ab is projected vertically from a' and b'. Extended backwards, line ba passes through v on xy and reaches HT above xy on the perpendicular projector through h'. A box labelled '196' is placed below xy. GIVEN box: '[1] A - 20 aHP, [2] B - 50 aHP, [3] phi - 45 degrees, [4] FV - 70mm, [5] VT - 10 aHP'. ANSWERS box: '[1] TL - 99mm, [2] theta - 18 degrees, [3] h'-HT - 23mm'.

**Answers:**
- [1] $\text{TL} = 99\text{ mm}$
- [2] $ab = 94\text{ mm}$
- [3] $\theta = 18^\circ$
- [4] $h'\text{--HT} = 24\text{ mm}$

---

#### Example 5: Front View, Apparent Inclinations, and Vertical Trace Given (Q209)
**Problem Statement (38 — GIVEN: FRONT VIEW; APPARENT INCLINATIONS & VERTICAL TRACE):**
Front view of a line $AB$ makes $50^\circ$ with $xy$-line measures $60\text{ mm}$ and its top view makes $30^\circ$ with $xy$-line. End $A$ is $15\text{ mm}$ above $\text{HP}$ and its $\text{VT}$ is $10\text{ mm}$ below $\text{HP}$. Draw the projections of the line $AB$, determine the inclinations with $\text{HP}$ and $\text{VP}$, true length and locate the traces.

**Given Data:**
- [1] $A = 15\text{ aHP}$
- [2] $\alpha = 50^\circ$
- [3] $\beta = 30^\circ$
- [4] $\text{FV} = 60\text{ mm}$ (listed as $40\text{ mm}$ in text summary, $60\text{ mm}$ in statement and drawing)
- [5] $\text{VT} = 10\text{ bHP}$

> **Watch out.** The summary line beneath the problem text prints `[4] FV - 40 mm`, whereas the problem statement and the drawing's GIVEN box both use $\text{FV} = 60\text{ mm}$. The worked construction uses $60\text{ mm}$.

**Solution Steps:**
1. Mark $a'$ at $15\text{ mm}$ above $xy$ and draw the front view $a'b' = 60\text{ mm}$ at $\alpha = 50^\circ$ to $xy$.
2. Extend $b'a'$ downwards across $xy$ (marking $h'$ on $xy$) until it reaches $10\text{ mm}$ below $xy$ to locate $\text{VT}$. Project $\text{VT}$ vertically up to $v$ on $xy$.
3. From $v$, draw the extended top view line inclined at $\beta = 30^\circ$ below $xy$. Drop vertical projectors from $h'$, $a'$, and $b'$ to intersect this $30^\circ$ line at $\text{HT}$, $a$, and $b$ respectively.
4. Use standard line rotation on $ab$ and $a'b'$ to determine the true length $\text{TL}$ and true inclinations $\theta$ and $\phi$.

> **Figure: Projection of line AB with traces HT and VT (Problem 209)**
>
> Orthographic projection diagram labelled 209 showing the construction of line AB and its traces across the reference line xy.
> 
> GIVEN box (top-left):
> [1] FV - 60mm
> [2] A - 15 aHP
> [3] α - 50°
> [4] β - 30°
> [5] VT - 10 bHP
> 
> ANSWERS box (bottom-left):
> [1] TL - 64mm
> [2] ab - 45mm
> [3] θ - 46°
> [4] φ - 21°
> [5] h'-HT - 5mm
> 
> Construction details:
> - A horizontal reference line is labelled 'x' on the left and 'y' on the right.
> - Above xy (Front View): Point a' is located at a vertical distance of 15 mm above the xy line. The front view line segment a'b' has length 60 mm and is inclined at α = 50° to the horizontal locus through a'. The true length line in the front view is a'b1', inclined at angle θ to the horizontal locus through a', with b' and b1' sharing the same horizontal locus line.
> - Extending line b'a' backwards intersects the xy line at h' and continues below xy to point VT, which is at a vertical distance of 10 mm below the xy line.
> - Below xy (Top View): A vertical projector from VT meets the xy line at point v. A vertical projector from h' goes down to HT. A line from v passes through HT and a, extending to the top view line ab. Point a lies on the same vertical projector as a'.
> - From a, a horizontal locus line is drawn to the right. The top view segment ab is inclined at β = 30° below this horizontal locus (angle arc labelled 30° is shown between the xy/horizontal direction and line v-a-b). The true length line in the top view is ab2, inclined at angle φ below the horizontal locus through a, with b and b2 sharing a horizontal locus line.
> - Projectors with arrows connect b' vertically down to b1 (on the horizontal locus through a), from which an arc swings down to b; similarly, b is projected or rotated to b1' to find the true length.

**Answers:**
- [1] $\text{TL} = 64\text{ mm}$
- [2] $ab = 45\text{ mm}$
- [3] $\theta = 46^\circ$
- [4] $\phi = 21^\circ$
- [5] $h'\text{--HT} = 5\text{ mm}$

---

#### Example 6: Line Rotation across Quadrants with VT, $\beta$, and $\theta$ Given (Q28)
**Problem Statement (40 — GIVEN: ONE DATA FOR TWO END POINTS; VERTICAL TRACE; $\beta$ & $\theta$):**
The straight line $AB$ is inclined $30^\circ$ to the $\text{HP}$ while its top view is inclined $45^\circ$ to $xy$-line. The end $A$ is $15\text{ mm}$ in front of the $\text{VP}$ and is below the $\text{HP}$. The end $B$ is $50\text{ mm}$ behind the $\text{VP}$ and is above the $\text{HP}$. The $\text{VT}$ is $30\text{ mm}$ below the $xy$-line. Draw the projection of the line and locate the $\text{HT}$.

**Given Data:**
- [1] $\theta = 30^\circ$
- [2] $\beta = 45^\circ$
- [3] $A = 15\text{ fVP}$
- [4] $B = 50\text{ bVP}$
- [5] $\text{VT} = 30\text{ bXY}$

**Solution Steps:**
1. **Step 28.1:** Draw the horizontal locus of $a$ at $15\text{ mm}$ below $xy$ (since $A$ is $15\text{ mm}$ in front of $\text{VP}$) and the horizontal locus of $b$ at $50\text{ mm}$ above $xy$ (since $B$ is $50\text{ mm}$ behind $\text{VP}$). From $a$, draw the top view $ab$ at $\beta = 45^\circ$ to meet the upper locus at $b$ ($ab = 92\text{ mm}$). Mark $v$ where $ab$ crosses $xy$, and drop a vertical projector $30\text{ mm}$ below $xy$ to locate $\text{VT}$.

> **Figure: Step 28.1 showing the top view construction of line AB**
>
> Construction step labelled 28.1 for problem 28. A horizontal reference line is labelled x on the left and y on the right. Point 'a' is located 15 mm below the xy line (dimensioned 15 with vertical arrows). A horizontal locus line extends to the right from 'a'. Another horizontal locus line is drawn 50 mm above the xy line (dimensioned 50 on the right with vertical arrows). From 'a', the top view line 'ab' is drawn inclined at 45 degrees to the horizontal locus through 'a', intersecting the xy line at 'v' and reaching point 'b' on the upper locus line (50 mm above xy). With center 'a' and radius 'ab', an arc is swung clockwise down to the horizontal locus line through 'a', locating point 'b1'. A box labelled 'GIVEN' on the top left contains: '[1] A - 15 fVP', '[2] \beta - 45^\circ', '[3] B - 50 bVP', '[4] VT - 30 bXY', '[5] \theta - 30^\circ' (items 1, 2, 3 in red). A box labelled 'ANSWERS' at the bottom right contains: '[1] a\'b\' - 84mm', '[2] ab - 92mm', '[3] TL - 106mm', '[4] h\'-HT - 37mm'.

2. **Step 28.2:** Rotate the top view $ab$ about $a$ down to the horizontal locus line through $a$ to locate $b_1$ (so $ab_1 = ab = 92\text{ mm}$). From $a$, draw a line inclined at the true angle $\theta = 30^\circ$ to the horizontal. Erect a vertical line from $b_1$ to meet this $30^\circ$ line at $b_1'$, giving the true length $\text{TL} = 106\text{ mm}$ and the vertical height difference between $A$ and $B$.

> **Figure: Step 28.2 of a line projection solution**
>
> Engineering drawing step labelled 28.2 showing the projection of a line on an x-y reference line. A GIVEN box in the top left lists: [1] A - 15 fVP (in red), [2] β - 45° (in red), [3] B - 50 bVP (in red), [4] VT - 30 bXY (in black), [5] θ - 30° (in red). Below the x-y line, point 'a' is located 15 mm below x-y, with a horizontal locus line passing through 'a'. From 'a', a line is drawn upwards and to the right at 45° to the horizontal locus, intersecting the x-y line at 'v', passing through 'HT', and terminating at 'b' on a horizontal locus line 50 mm above x-y. An arc is swung from 'b' with centre 'a' down to the horizontal locus through 'a', locating 'b1'. A vertical projector goes from 'b1' up to 'b1''. A line from 'a' at 30° to the horizontal locus goes up and right to 'b1'', which lies on a horizontal dashed locus line passing through 'HT'. Below the drawing, a note states: 'a,b,v,HT - same line' and 'a',b',h',VT - same line'. An ANSWERS box in the bottom right lists: [1] a'b' - 84mm, [2] ab - 92mm, [3] TL - 106mm, [4] h'-HT - 37mm.

3. **Step 28.3:** Connect $a$ through $\text{VT}$ and extend it to intersect the vertical projector of $b$ at $b_2'$, establishing the front view inclination and the horizontal locus of $b'$. Where this line crosses the vertical projector from $b$, mark $b'$, and where it crosses $xy$, mark $h'$. Project $h'$ vertically to the top view line $ab$ to locate $\text{HT}$.

> **Figure: Step 28.3 of a line projection solution**
>
> Engineering drawing step labelled 28.3 continuing from 28.2. A GIVEN box in the top left lists: [1] A - 15 fVP (in red), [2] β - 45° (in red), [3] B - 50 bVP (in red), [4] VT - 30 bXY (in black), [5] θ - 30° (in red). In addition to the construction in 28.2 (point 'a' 15 mm below x-y, line a-v-HT-b at 45° with 'b' 50 mm above x-y, arc from 'b' to 'b1', vertical line from 'b1' to 'b1'', line a-b1' at 30°), a vertical line drops from 'b' to intersect the horizontal locus through 'HT' at 'b2''. A line connects 'a' to 'b2'', marked with double tick marks to indicate it is parallel to the line on the 30° arc construction. A vertical projector drops from 'HT' to the x-y line, locating 'h''. Below the drawing, a note states: 'a,b,v,HT - same line' and 'a',b',h',VT - same line'. An ANSWERS box in the bottom right lists: [1] a'b' - 84mm, [2] ab - 92mm, [3] TL - 106mm, [4] h'-HT - 37mm.

4. **Step 28.4:** Project $a$ vertically to the front view line $b'\text{--VT}$ to locate $a'$. Darken the final front view $a'b'$ ($84\text{ mm}$) and top view $ab$ ($92\text{ mm}$).

> **Figure: Step 28.4: Complete projection of line AB with traces HT and VT, given data box, and answers box.**
>
> Orthographic projection drawing labelled 28.4 with reference line xy. Point a is 15 mm below xy, and VT is 30 mm below xy. Point b is on a locus line 50 mm above xy. Top view line ab passes through v (on xy) and HT (at the same height as b2'). The angle of ab with the horizontal locus at a is 45 degrees. Line a b1' has true length inclined at 30 degrees to the horizontal locus at a, with b1' on the locus of b2' and HT. An arc centered at a goes from b1 (on the horizontal locus through a) up to b2' on the locus of HT. Front view line a'b' passes through VT (30 mm below xy, vertically aligned with v) and h' (on xy, vertically aligned with HT), up to b' (vertically aligned with b). Notes at the bottom state: 'a,b,v,HT - same line' and 'a',b',h',VT - same line'. GIVEN box: [1] A - 15 fVP, [2] beta - 45 degrees, [3] B - 50 bVP, [4] VT - 30 bXY, [5] theta - 30 degrees. ANSWERS box: [1] a'b' - 84mm, [2] ab - 92mm, [3] TL - 106mm, [4] h'-HT - 37mm.

**Answers:**
- [1] $a'b' = 84\text{ mm}$
- [2] $ab = 92\text{ mm}$
- [3] $\text{TL} = 106\text{ mm}$
- [4] $h'\text{--HT} = 37\text{ mm}$

---

#### Example 7: Coincident Traces on the XY Line in the Third Quadrant (Q30)
**Problem Statement (41 — GIVEN: TRUE LENGTH; TOP VIEW; APPARENT INCLINATION OF TOP VIEW; COMMON TRACE IN XY):**
A line $AB$ $90\text{ mm}$ long has its $\text{HT}$ and $\text{VT}$ coinciding at a common point on the $xy$-line. The top view is $70\text{ mm}$ long and is inclined $30^\circ$ to the $xy$-line. One end of the line $A$ is $20\text{ mm}$ away from $\text{VP}$. Draw its projection assuming the line is in third quadrant. Measure the inclination of front view with $xy$-line.

**Given Data:**
- [1] $AB\text{ (TL)} = 90\text{ mm}$
- [2] $\text{TV} = 70\text{ mm}$
- [3] $\beta = 30^\circ$
- [4] $A = 20\text{ bVP}$ (in third quadrant, so $a$ is $20\text{ mm}$ above $xy$)
- [5] $\text{HT}$ & $\text{VT}$ on $xy$-line

**Solution Steps:**
1. **Step 30.1:** Since the line is in the third quadrant, mark point $a$ at $20\text{ mm}$ above a point $1$ on the $xy$ line. From $a$, draw the top view $ab = 70\text{ mm}$ inclined at $\beta = 30^\circ$ upwards and to the right. Rotate $b$ about $a$ down to the horizontal line through $a$ to locate $b_1$. Drop a vertical projector from $b_1$ below $xy$. Using point $1$ on $xy$ as center, cut an arc of radius $\text{TL} = 90\text{ mm}$ on this projector to locate $b_1'$, establishing the horizontal locus of $b'$ below $xy$.

> **Figure: Step 30.1 of projection of line AB**
>
> Engineering drawing labelled 30.1 showing a step in the projection of a straight line. A horizontal reference line xy is drawn. Point 1 lies on the xy line. Above the xy line, point a is located 20 mm vertically above point 1. From a, a top view line ab of length 70 mm is drawn upwards and to the right at an angle of 30 degrees to a horizontal line through a. An arc is swung from b down to the horizontal line through a, meeting it at b1. From b1, a vertical projector goes downwards below the xy line (with a downward arrow). From point 1 on the xy line, a line of length 90 mm is drawn downwards and to the right to intersect the vertical projector from b1 at point b1', with a horizontal locus line indicated at b1'. Box ANSWERS: [1] theta - 39 degrees, [2] alpha - 43 degrees, [3] a'b' - 83mm. Box GIVEN: [1] beta - 30 degrees, [2] AB - 90mm, [3] TV - 70mm, [4] HT & VT same point on xy-line, [5] A - 20 bVP. Text at bottom: ALL DIMENSIONS ARE IN mm, SCALE 1:1.

2. **Step 30.2:** Drop a vertical projector from $b$ straight down to intersect the horizontal locus line through $b_1'$ at $b'$. Extend the top view line $ba$ backwards to meet the $xy$ line at the common trace point $v, h', \text{HT}, \text{VT}$. Since $a', b', h', \text{VT}$ must lie on the same straight line, draw the front view line from the common point $v, h', \text{HT}, \text{VT}$ through $b'$, and drop a vertical projector from $a$ to meet this line at $a'$. Measure the front view inclination $\alpha = 55^\circ$.

> **Figure: Step 30.2 of projection of line AB**
>
> Engineering drawing labelled 30.2 continuing the projection of line AB. In addition to all elements of 30.1 (xy line, point 1 on xy, point a 20 mm above 1, top view ab = 70 mm at 30 degrees to horizontal, arc from b to b1 on horizontal through a, projector from b1 down to b1' with 1-b1' = 90 mm), a vertical projector with downward arrows is drawn from point b down to the horizontal locus line through b1', meeting it at b2'. A line is drawn from point 1 on the xy line to b2' at an angle labelled theta below the xy line. Note to the left of xy: 'a,b,v,HT - same line' and 'a',b',h',VT - same line'. Box ANSWERS: [1] theta - 39 degrees, [2] alpha - 43 degrees, [3] a'b' - 83mm. Box GIVEN: [1] beta - 30 degrees, [2] AB - 90mm, [3] TV - 70mm, [4] HT & VT same point on xy-line, [5] A - 20 bVP. Text at bottom: ALL DIMENSIONS ARE IN mm, SCALE 1:1.

**Answers:**
- [1] $a'b' = 83\text{ mm}$
- [2] $\alpha = 55^\circ$
- [3] $\theta = 39^\circ$

---

#### Example 8: Initial Assumption of Endpoint on VP Followed by Projector Shift (Problem 39)
**Problem Statement:**
Draw the projections of a line $AB$ given its front view length, vertical trace below $\text{HP}$, apparent front view angle, true inclination with $\text{VP}$, and end $A$ on $\text{HP}$.

**Given Data:**
- [1] $\text{FV} = 70\text{ mm}$
- [2] $\text{VT} = 10\text{ bHP}$
- [3] $\alpha = 45^\circ$
- [4] $\phi = 30^\circ$
- [5] $A$ – on $\text{HP}$ (assume $A$ on $\text{VP}$ initially)

**Solution Steps:**
1. **Step 39.1:** Since $A$ is on $\text{HP}$, mark $a'$ (and $h'$) on the $xy$ line. Draw the front view $a'b' = 70\text{ mm}$ inclined at $\alpha = 45^\circ$ above $xy$, and draw a dashed horizontal locus line through $b'$.

> **Figure: Step 39.1 of line projection problem 39**
>
> Step labelled 39.1 showing the front view construction of a straight line above the reference line xy. Point a' (also labelled h') lies on the xy line. From a', a thick segment a'b' of length 70 mm is drawn inclined at 45 degrees above the xy line, with a horizontal locus line dashed through b' above xy. Notes to the right state: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. At the bottom left: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'. Box GIVEN: [1] FV - 70mm, [2] VT - 10 bHP, [3] alpha - 45°, [4] phi - 30°, [5] A - on HP (assume A on VP initially). Box ANSWERS: [1] theta - 38°, [2] ab - 64mm, [3] TL - 81mm.

2. **Step 39.2:** Assume $A$ is on $\text{VP}$ initially (so the temporary top view starts at $a'$ on $xy$). Rotate $a'b'$ about $a'$ down to $b_1'$ on $xy$. From $a'$, draw a line below $xy$ at $\phi = 30^\circ$. Drop a vertical projector from $b_1'$ to meet this $30^\circ$ line at $b_1$, giving the true length $\text{TL} = 81\text{ mm}$ and the horizontal locus of $B$ in the top view. Drop a vertical projector from $b'$ to meet this locus at $b_2$, so $a'b_2$ is the true top view length ($ab = 64\text{ mm}$).

> **Figure: Step 39.2 of line projection problem 39**
>
> Step labelled 39.2 continuing the construction of problem 39. Above the xy line, segment a'b' of length 70 mm is inclined at 45 degrees to xy, with a' (h') on xy. From b', an arc centered at a' swings down to meet the xy line at b1', and a vertical projector goes down from b' to the locus of B in the top view at b2. From a' on the xy line, the true length line a'b1 is drawn below xy at an angle of 30 degrees to xy, meeting the vertical projector dropped from b1' at point b1 on the horizontal locus line passing through b2 and b1. Segment a'b2 is also drawn below xy. Notes to the right state: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. At the bottom left: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'. Box GIVEN: [1] FV - 70mm, [2] VT - 10 bHP, [3] alpha - 45°, [4] phi - 30°, [5] A - on HP (assume A on VP initially). Box ANSWERS: [1] theta - 38°, [2] ab - 64mm, [3] TL - 81mm.

3. **Step 39.3:** Extend $b'a'$ below the $xy$ line until it reaches $10\text{ mm}$ below $xy$ to locate $\text{VT}$. Project $\text{VT}$ vertically up to $v$ on $xy$. Now shift the top view horizontally to match $\text{VT}$: since $a, b, v, \text{HT}$ lie on the same line, transfer the top view length $ab = 64\text{ mm}$ so that it spans between the vertical projectors of $a'$ and $b'$ while passing directly through $v$. Rotate $ab$ to find the true inclination $\theta = 38^\circ$.

> **Figure: Step 39.3 projection of a line with VT and HT**
>
> Projection of lines solution step labelled 39.3. Reference line xy is horizontal. Point a' is on the xy line, with h' and v to the left of a' on the xy line. Vertical trace VT is 10 mm below the xy line vertically aligned with v. Point a,HT is below a' (actually coincident with a' on the xy line, labelled a,HT below the xy line). Front view a'b' has length 70 mm and is inclined at α = 45° above the xy line, with VT-a'-b' collinear. True length line from a' is inclined at θ above the xy line, reaching the locus of b'. From the xy line at a', a line in the top view is drawn at φ = 30° below the xy line to b1 on the locus of b, and rotated up to b1' on the xy line, then projected up to the locus of b' to get the true length (TL). Also, from b', a vertical projector goes down to intersect the locus of b at b2, and the line from v through a,HT extends to b on the locus of b. Notes state: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Scale 1:1, ALL DIMENSIONS ARE IN mm. GIVEN box: [1] FV - 70mm, [2] VT - 10 bHP, [3] α - 45°, [4] φ - 30°, [5] A - on HP (assume A on VP initially). ANSWERS box: [1] θ - 38°, [2] ab - 64mm, [3] TL - 81mm.

**Answers:**
- [1] $\theta = 38^\circ$
- [2] $ab = 64\text{ mm}$
- [3] $\text{TL} = 81\text{ mm}$

### Common mistakes
- **Forgetting to shift the top view after assuming $A$ on $\text{VP}$:** When you assume $A$ is on $\text{VP}$ to find the top view length $ab$, $a'b_2$ is only a temporary construction. You must slide that length between the vertical projectors of $a'$ and $b'$ so that its extension passes through $v$.
- **Erecting perpendiculars to $xy$ instead of $a'b'$ in Plane Rotation:** In the trapezoidal (plane rotation) method, the rabatted right triangles are built directly on the inclined view $a'b'$. The true inclination $\phi$ is measured relative to $a'b'$, and the elevation perpendiculars at $a'$, $b'$, and $h'$ must be drawn at $90^\circ$ to $a'b'$, not vertically to $xy$.
- **Misplacing views in the Third Quadrant (Q30):** In the third quadrant, the object is behind $\text{VP}$ and below $\text{HP}$. Therefore, the top view ($ab$) lies *above* the $xy$ line and the front view ($a'b'$) lies *below* the $xy$ line.

### Try it yourself

#### Practice Problem 1 (Q41 — Application Problem: Hanging Bulb)
**45 GIVEN: POSITION OF THE BULB AND SIZE OF THE ROOM; POSITION OF THE IMAGE**
A room measures $8\text{ m}$ long, $5\text{ m}$ wide and $4\text{ m}$ high. An electric bulb hangs in the center of the ceiling and $1\text{ m}$ below it. There is a black spot on the bulb surface. When the bulb is switched on the image of the black spot falls on one of the corner of the room at a height of $1\text{ m}$ above the floor. Determine the length of line joining the bulb and the black spot. (Use scale $1:100$).

> **Figure: Problem Q41: Application problem of a hanging bulb in a room**
>
> Problem statement diagram placeholder for Q41: A room 8m long, 5m wide, and 4m high has an electric bulb hanging in the center of the ceiling, 1m below it. The image of a black spot on the bulb surface falls on one of the corners of the room at a height of 1m above the floor. Use scale 1:100 to find the length of the line joining the bulb and the black spot.

### Quick recall
- **Collinearity:** Always check that $a', b', h', \text{VT}$ form a single straight line and $a, b, v, \text{HT}$ form a single straight line.
- **Method Choice:** Line rotation and plane rotation give identical answers; plane rotation is especially fast when $\text{FV}$, $\text{VT}$, and $\phi$ are given.
- **Rabatted Triangle at $\text{VT}$:** Draw the $\phi$-line through $\text{VT}$ relative to $a'b'$; perpendiculars from $a'$, $b'$, and $h'$ to this line give the exact top-view distances from $xy$.
- **Coincident Traces:** If $\text{HT}$ and $\text{VT}$ coincide on $xy$, both the extended front view $a'b'$ and extended top view $ab$ must intersect at that exact same point on the $xy$ line.
- **Temporary Endpoint Assumption:** If an endpoint's distance from $\text{VP}$ is unknown, start its temporary top view on $xy$ to find the length $ab$, then translate $ab$ between the end projectors to align with $v$.

<!-- page 9 | Engineering Applications of Line Projections -->

## Engineering Applications of Line Projections

### Idea in brief
Real-world spatial problems—such as finding the distance from a ceiling lamp to a floor corner, the length of a cable connecting vertical poles, or the longest rod that fits inside a box—can all be solved as orthographic line projections. By treating the floor as the Horizontal Plane (HP) and a back wall as the Vertical Plane (VP), we reduce 3D spaces to simple 2D rectangles and triangles. Because buildings and rooms are too large for a drawing sheet, we first shrink their measurements using a standard drawing scale, solve for the true length graphically, and then scale the measurement back up.

### Key terms
- **Drawing Scale ($1:N$)**: The ratio of the linear dimension of an element on the drawing to the actual dimension of the same element in reality.
- **Representative Fraction ($	ext{RF}$)**: The numerical fraction representing the drawing scale, where both numerator and denominator are in the same units (millimeters).
- **Room / Cuboid Projection**: Modeling a 3D box of Length ($L$), Breadth ($B$), and Height ($H$) as an $L \times H$ rectangle in the front view above the $xy$ line, directly aligned with an $L \times B$ rectangle in the top view below the $xy$ line.
- **Space Diagonal**: The straight line connecting two diagonally opposite corners of a room or cuboid (for example, bottom-left-front to top-right-back), representing the longest straight rod that can fit inside.
- **Vertical Pole Projection**: A vertical pole standing on the floor (HP) projects as a vertical line segment of true height in the front view and as a single point (where top and bottom ends coincide) in the top view.

### Rules and formulas
- **Representative Fraction**:
  $$\text{RF} = \frac{\text{Drawing Length}}{\text{Actual Length}} = \frac{1}{N}$$
  Converts between real-world sizes and drawing sheet measurements using consistent units ($1\text{ m} = 1000\text{ mm}$).
- **Scale $1:100$ Conversion**:
  $$\text{Drawing Length (mm)} = \frac{\text{Actual Length (m)} \times 1000}{100} = \text{Actual Length (m)} \times 10$$
  At scale $1:100$, every $1\text{ m}$ in reality is drawn as $10\text{ mm}$ ($1\text{ cm}$) on paper.
- **Scale $1:50$ Conversion**:
  $$\text{Drawing Length (mm)} = \frac{\text{Actual Length (m)} \times 1000}{50} = \text{Actual Length (m)} \times 20$$
  At scale $1:50$, every $1\text{ m}$ in reality is drawn as $20\text{ mm}$ ($2\text{ cm}$) on paper.
- **Analytical Check for Space Diagonal**:
  $$\text{TL} = \sqrt{\Delta x^2 + \Delta y^2 + \Delta z^2}$$
  The true 3D distance between two points with width difference $\Delta x$, depth difference $\Delta y$, and height difference $\Delta z$ (used to verify graphical results).

> **Key idea.** Always align the front view ($L \times H$) and top view ($L \times B$) of a room along the reference line $xy$ so that the floor lies directly on $xy$ in the front view and the back wall lies directly on $xy$ in the top view.

### Method
1. **Select and apply a drawing scale**: Convert all given real-world meter dimensions into millimeters on the drawing sheet using the specified scale ($1:1$, $1:50$, or $1:100$).
2. **Draw the boundary geometry**:
   - For a **room or cuboid**: Draw the reference line $xy$. Above $xy$, draw a rectangle of width $L$ and height $H$ (front view). Below $xy$, aligned with the front view, draw a rectangle of width $L$ and depth $B$ (top view).
   - For **vertical poles**: Draw the top view of the base figure (such as an equilateral triangle) below $xy$ first. Project the vertices up to $xy$ and draw vertical lines above $xy$ equal to each pole's scaled height.
3. **Plot the endpoints**: Locate the front view ($a', b'$) and top view ($a, b$) of the required line segment using their distances from the walls, floor, or ceiling. Join them to get the apparent projections $a'b'$ and $ab$.
4. **Find True Length ($\text{TL}$) and inclination ($\theta$)**: Use the standard line rotation method. Rotate the top view $ab$ about one endpoint until it is parallel to $xy$ (becoming $ab_1$). Project $b_1$ vertically up to meet the horizontal locus of $b'$ at $b_1'$.
5. **Measure and scale back**: Measure the true length $a'b_1'$ in millimeters and multiply by the scale factor $N$ to state the final answer in real-world units. Measure the inclination to the floor $\theta$ between $a'b_1'$ and the horizontal locus.

### Worked examples

#### Example 1: Line between two points inside an $8\text{ m} \times 5\text{ m} \times 4\text{ m}$ room (Problem 41)
**Problem statement:** A room measures $8\text{ m}$ long, $5\text{ m}$ deep, and $4\text{ m}$ high. Point $A$ is on the left wall at the front corner, $1\text{ m}$ above the floor. Point $B$ is $4\text{ m}$ from the right wall, $2.5\text{ m}$ from the back wall, and $1\text{ m}$ below the ceiling. Determine graphically the true distance between $A$ and $B$ using a scale of $1:100$.

**Given data:**
- Room dimensions: $L = 8\text{ m}$, $B = 5\text{ m}$, $H = 4\text{ m}$
- Scale: $1:100$ ($80\text{ mm} : 8\text{ m} \implies 80\text{ mm} : 8000\text{ mm} \implies 1:100$)
- Scaled room dimensions: $L = 80\text{ mm}$, $B = 50\text{ mm}$, $H = 40\text{ mm}$
- Point $A$: on left wall, $1\text{ m}$ ($10\text{ mm}$) above floor, on the reference wall ($0\text{ m}$ depth)
- Point $B$: $4\text{ m}$ ($40\text{ mm}$) from right wall, $1\text{ m}$ ($10\text{ mm}$) below ceiling, $2.5\text{ m}$ ($25\text{ mm}$) deep from reference wall

**Step-by-step solution:**
1. **Draw the room views and locate point $B$ (Step 41.1):** Draw reference line $xy$. Above $xy$, construct the front view rectangle of $80\text{ mm} \times 40\text{ mm}$ ($8\text{ m} \times 4\text{ m}$). Below $xy$, construct the top view rectangle of $80\text{ mm} \times 50\text{ mm}$ ($8\text{ m} \times 5\text{ m}$). Locate $b'$ in the front view $4\text{ m}$ ($40\text{ mm}$) from the right wall and $1\text{ m}$ ($10\text{ mm}$) below the ceiling line. Locate $b$ in the top view along the same vertical projector, $2.5\text{ m}$ ($25\text{ mm}$) below $xy$.

> **Figure: Step 41.1 showing room projections and point B**
>
> Drawing labelled 41.1 showing the orthographic projections of a room with width 8m, height 4m (front view above the horizontal dividing line) and depth 5m (top view below the horizontal dividing line). Point b' is located 4m from the right wall (or 4m from the left wall) and 1m below the ceiling in the front view. Point b is located 4m from the wall and 2.5m below the horizontal dividing line (front/back wall) in the top view. Right side boxes state: ANSWER: [1] TL - 5.1m; SCALE 1:100, 80mm : 8m, 80mm : 8000mm, 1: 100.

2. **Locate point $A$ and draw apparent views (Step 41.2):** Mark $a'$ on the left vertical wall $1\text{ m}$ ($10\text{ mm}$) above the floor line $xy$, and mark $a$ at the intersection of the left wall and $xy$. Join $a'b'$ for the front view and $ab$ for the top view.

> **Figure: Step 41.2 showing front view a'b' and top view ab in the room**
>
> Drawing labelled 41.2 adding point A and segments a'b' and ab to step 41.1. The room has width 8m, height 4m in the upper rectangle, and depth 5m in the lower rectangle. Point a' is on the left wall, 1m above the horizontal dividing line (floor line), with a small circle shown between a' and the dividing line. Point a is at the intersection of the left wall and the horizontal dividing line. Thick line segments connect a' to b' (where b' is 4m from the right wall and 1m below the top ceiling line, with a small square symbol on the vertical projector between b' and the dividing line) and a to b (where b is 4m from the wall and 2.5m below the dividing line). Right side boxes state: ANSWER: [1] TL - 5.1m; SCALE 1:100, 80mm : 8m, 80mm : 8000mm, 1: 100.

3. **Rotate to find True Length (Step 41.3):** With center $a$ and radius $ab$, swing an arc in the top view up to the horizontal reference line through $a$ to locate $b_1$. Project $b_1$ vertically upward to intersect the horizontal locus line through $b'$ at $b_1'$. Join $a'b_1'$ and measure its length.

> **Figure: Step 41.3 solution drawing for finding true length TL = 5.1m in an 8m x 5m x 4m room**
>
> Solution step labelled 41.3 showing the graphical construction of a room of width 8m, depth 5m, and height 4m. Above the horizontal reference line is the front view rectangle of width 8m and height 4m. Point a' is on the left vertical wall at a height of 1m above the reference line. Point b' is at a horizontal distance of 4m from the right wall and 1m below the top ceiling line, connected to a' by segment a'b' and by a vertical projector with a square marker. Below the reference line is the top view rectangle of width 8m and depth 5m. Point a is at the top-left corner (where the left wall meets the reference line). Point b is on the vertical projector 4m from the right wall and 2.5m below the reference line, joined to a by segment ab. Perpendiculars are erected at ends a and b of the top view ab (marked with a small circle on segment aA of length 1m, equal to the height of a' above the reference line, and a small square on segment bB, equal to the height of b' of 3m above the reference line) to locate points A and B. The segment AB represents the true length, dimensioned as TL. To the right are two boxes: an ANSWER box reading '[1] TL - 5.1m, AB = 51mm, 51mm x 100, 5.1mm = 5.1m', and a SCALE box reading 'SCALE 1:100, 80mm : 8m, 80mm : 8000mm, 1: 100'.

**Answer:**
- Measured drawing length: $\text{AB} = 51\text{ mm}$
- True Length: $\text{TL} = 51\text{ mm} \times 100 = 5100\text{ mm} = 5.1\text{ m}$ (printed as $5.1\text{ mm} = 5.1\text{ m}$ in the calculation note).

---

#### Example 2: Electric lamp to floor corner in a room (Q202 / Problem 46)
**Problem statement:** An electric lamp is hung vertically from the center of the flat roof of a room ($5\text{ m} \times 5\text{ m}$ and height $6\text{ m}$), at a height of $4\text{ m}$ above the floor. Find graphically the distance between the lamp and any of the floor corners.

> **Figure: Projection of a line from a lamp 4m above the floor at the center of a 5m x 5m x 6m room to a floor corner**
>
> Problem Q202 (46): A room has floor dimensions 5m x 5m and height 6m. An electric lamp is hung vertically from the center of the flat roof (2.5m from the walls in both horizontal directions) at a height of 4m above the floor. Required to find graphically the true distance between the lamp and any of the floor corners.

**Given data:**
- Room dimensions: $5\text{ m} \times 5\text{ m} \times 6\text{ m}$
- Scale: $1:100$ (so $5\text{ m} = 50\text{ mm}$, $6\text{ m} = 60\text{ mm}$)
- Position of lamp ($B$): Vertically from the center of the roof ($2.5\text{ m} = 25\text{ mm}$ from each wall in the top view), and $4\text{ m}$ ($40\text{ mm}$) above the floor in the front view.
- Floor corner ($A$): Bottom-left corner on the floor in the front view ($a'$) and top-left corner in the top view ($a$).

**Step-by-step solution:**
1. **Construct the room views:** Draw the horizontal reference line. Above it, draw a rectangle of width $50\text{ mm}$ ($5\text{ m}$) and height $60\text{ mm}$ ($6\text{ m}$) for the front view. Below it, draw a square of $50\text{ mm} \times 50\text{ mm}$ ($5\text{ m} \times 5\text{ m}$) for the top view.
2. **Plot the corner $A$ and lamp $B$:** Mark the floor corner at $a'$ (bottom-left of front view) and $a$ (top-left of top view) on the reference line. Locate the center of the room in the top view by intersecting the diagonals of the $5\text{ m} \times 5\text{ m}$ square to get $b$. Project vertically up into the front view to a height of $4\text{ m}$ ($40\text{ mm}$) above the floor (which is $2\text{ m}$ below the ceiling) to get $b'$. Join $a'b'$ and $ab$.
3. **Rotate to find True Length:** With center $a$ and radius $ab$, rotate the top view up to the horizontal reference line and project vertically up to meet the horizontal locus of $b'$ at $b_1'$. Measure the true length $a'b_1'$.

> **Figure: Worked projection drawing 202 showing line a'b' and ab inside a 5m by 5m by 6m box, with true length 5.3m**
>
> Orthographic projection labeled '202' representing a rod or line inside a room (from Q41). A rectangle above the horizontal reference line represents the front view of a room of width 5m and height 6m. A square below the reference line represents the top view of the room of width 5m and depth 5m. Point a' and a are at the bottom-left corner of the front view and top-left corner of the top view respectively (on the horizontal reference line). Point b' is located at horizontal distance 2.5m from the left wall and height 4m above the floor line. Point b is located at horizontal distance 2.5m from the left wall and depth 2.5m below the reference line. Segment a'b' is drawn in the front view and segment ab in the top view. A true length construction rotates/projects to show a line labeled 'TL' starting from a' up to the top of the 6m room height, connected to b' via a line with a small circle marker; similarly a small circle marker is on the vertical projector between b' and b. To the right, a box labeled 'ANSWER' gives '[1] TL - 5.3m', and below it 'SCALE 1:100'.

**Answer:**
- True distance between the lamp and the floor corner: $\text{TL} = 5.3\text{ m}$ ($53\text{ mm}$ at scale $1:100$).

---

#### Example 3: Three vertical poles in an equilateral triangle (Q42 / Problem 47)
**Problem statement:** Three vertical poles $AB$, $CD$, and $EF$ are respectively $2\text{ m}$, $4\text{ m}$, and $8\text{ m}$ long and standing on the floor. Their ends $B$, $D$, and $F$ are on the floor and are the corners of an equilateral triangle of side $5\text{ m}$. Determine the distances between the top ends of the poles, i.e., $AC$, $CE$, and $AE$. Find also their inclination to the floor. Assume that $BF$ is parallel to VP. Use scale $1:100$.

> **Figure: Problem 42: Three vertical poles of heights 2m, 4m, and 8m at the corners of a 5m equilateral triangle**
>
> Projection of lines application problem Q42: Three vertical poles AB (2m), CD (4m), and EF (8m) stand on the floor with base ends B, D, F forming an equilateral triangle of side 5m, with BF parallel to the VP. Required: distances between top ends AC, CE, AE and their inclinations to the floor, using scale 1:100.

**Given data:**
- Side of equilateral triangle on floor: $5\text{ m} \implies 50\text{ mm}$ at scale $1:100$
- Height of pole $AB = 2\text{ m} \implies 20\text{ mm}$ ($B$ on floor, $A$ at top)
- Height of pole $CD = 4\text{ m} \implies 40\text{ mm}$ ($D$ on floor, $C$ at top)
- Height of pole $EF = 8\text{ m} \implies 80\text{ mm}$ ($F$ on floor, $E$ at top)
- Base line $BF$ is parallel to VP (parallel to $xy$ in the top view).

**Step-by-step solution:**
1. **Draw the top view triangle and front view poles (Step 42.1):** Draw reference line $xy$. Below $xy$, draw a horizontal segment of length $50\text{ mm}$ ($5\text{ m}$) parallel to $xy$ for the base connecting $a(b)$ on the left and $e(f)$ on the right. Construct the third vertex $c(d)$ of the equilateral triangle of side $50\text{ mm}$. Project the three vertices up to $xy$ to mark the pole bases $b'$, $d'$, and $f'$. From these points, draw vertical lines upward of lengths $20\text{ mm}$ ($2\text{ m}$), $40\text{ mm}$ ($4\text{ m}$), and $80\text{ mm}$ ($8\text{ m}$) to locate the pole tops $a'$, $c'$, and $e'$.

> **Figure: Orthographic projection step 42.1 showing three vertical poles and an equilateral triangle top view**
>
> Engineering drawing labelled 42.1. A horizontal reference line x-y separates the front view (above) and top view (below). In the top view below x-y, an equilateral triangle is formed by three vertices labelled a(b) at the bottom-left, e(f) at the bottom-right, and c(d) at the top vertex. The horizontal base between a(b) and e(f) is dimensioned as 50mm = 5m. Vertical projectors extend upwards from these three vertices to the x-y line at points b', d', and f' respectively. Above the x-y line, three vertical lines represent poles: b'a' on the left has a circle symbol on it and is dimensioned as 20mm = 2m; d'c' in the middle has a square symbol on it and is dimensioned as 40mm = 4m; f'e' on the right has a triangle symbol on it and is dimensioned as 80mm = 8m. At the top right is an ANSWER box containing: [1] AE - 7.8m, [2] AC - 5.4m, [3] CE - 6.4m. At the bottom right is a box containing: SCALE 1:100, 80mm : 8m, 80mm : 8000mm, 1: 100.

2. **Connect the pole tops in the front view (Step 42.2):** Join the top ends $a'c'$, $c'e'$, and $a'e'$ with straight lines in the front view to represent the front views of the lines connecting the tops of the poles.

> **Figure: Orthographic projection step 42.2 connecting the tops of the three poles in the front view**
>
> Engineering drawing labelled 42.2. Similar to 42.1, a horizontal reference line x-y separates the front view and top view. In the top view below x-y, an equilateral triangle has vertices a(b) at bottom-left, e(f) at bottom-right, and c(d) at the top, with the base a(b)-e(f) dimensioned as 5m. Vertical projectors rise to b', d', and f' on the x-y line. Above x-y, vertical segments are drawn: b'a' (with a circle symbol, dimensioned 2m), d'c' (with a square symbol, dimensioned 4m), and f'e' (with a triangle symbol, dimensioned 8m). The top points a', c', and e' are connected by straight lines forming triangle a'c'e'. The distance between a' and e' is indicated with a parallel dimension line labelled AE. At the top right is an ANSWER box containing: [1] AE - 7.8m, [2] AC - 5.4m, [3] CE - 6.4m. At the bottom right is a box containing: SCALE 1:100, 80mm : 8m, 80mm : 8000mm, 1: 100.

3. **Determine true lengths and inclinations to the floor (Step 42.3):**
   - **For line $AE$:** Since the top view $a(b)$–$e(f)$ is already parallel to $xy$, its front view $a'e'$ gives the true length and true inclination directly. Alternatively, rotating $ab$–$ef$ confirms $\text{TL}$ and angle with the horizontal.
   - **For lines $AC$ and $CE$:** Their top views are the inclined sides of the equilateral triangle (each $50\text{ mm}$ long). Rotate each top view segment until it is horizontal (parallel to $xy$) and project upward to the horizontal loci of the pole tops to measure their true lengths and inclinations to the floor.

> **Figure: Solution step 42.3 showing orthographic projections and true lengths of lines AE, AC, and CE.**
>
> Orthographic projection diagram labeled '42.3' in a box on the right. A horizontal reference line 'x y' divides the front view (above) and top view (below). Above 'x y': vertical poles at points 'b'', 'd'', and 'f'' on the xy line. Segment b'-a' has height 2m. Segment d'-c' has height 4m (marked with a square symbol on the dimension line). Segment f'-e' has height 8m (marked with a triangle symbol on the dimension line). Triangle a'-c'-e' is drawn connecting the tops. Auxiliary true length line parallel to a'-e' is dimensioned as '(78mm x 100 = 7.8m) AE'. Below 'x y': top view forms an equilateral-like triangle with vertices 'a(b)', 'c(d)', and 'e(f)', connected to the front view via vertical projectors. The horizontal base between 'a(b)' and 'e(f)' is dimensioned as '5m'. Auxiliary true length lines are projected perpendicular to sides 'a(b)-c(d)' and 'c(d)-e(f)': on the left, dimensioned '(54mm x 100 = 5.4m) AC'; on the right, dimensioned '(64mm x 100 = 6.4m) CE'. At the top right is an 'ANSWER' box containing: '[1] AE - 7.8m', '[2] AC - 5.4m', '[3] CE - 6.4m'. At the bottom right is a scale box containing: 'SCALE 1:100', '80mm : 8m', '80mm : 8000mm', '1 : 100'.

**Answer:**
- Distance $\text{AE} = 7.8\text{ m}$ ($78\text{ mm}$), inclination to the floor $= 50^\circ$
- Distance $\text{AC} = 5.4\text{ m}$ ($54\text{ mm}$), inclination to the floor $= 22^\circ$
- Distance $\text{CE} = 6.4\text{ m}$ ($64\text{ mm}$), inclination to the floor $= 39^\circ$

---

#### Example 4: Largest rod inside a hollow cuboid (Q43 / Problem 48)
**Problem statement:** Find graphically the length of the largest rod that can be kept inside a hollow cuboid of $60\text{ mm} \times 40\text{ mm} \times 30\text{ mm}$.

> **Figure: Problem 43: largest rod in a hollow cuboid of 60mm x 40mm x 30mm.**
>
> Problem statement figure for Q43: Find graphically the length of the largest rod that can be kept inside a hollow cuboid of 60mm x 40mm x 30mm (Length L = 60mm, Breadth B = 40mm, Height H = 30mm).

**Given data:**
- Length $L = 60\text{ mm}$, Breadth $B = 40\text{ mm}$, Height $H = 30\text{ mm}$
- Scale: $1:1$ (all dimensions in $\text{mm}$)

**Step-by-step solution:**
1. **Draw the orthographic views of the cuboid (Step 43.1):** Draw reference line $xy$. Above $xy$, draw a rectangle of width $60\text{ mm}$ and height $30\text{ mm}$ resting on $xy$ for the front view. Below $xy$, draw a vertically aligned rectangle of width $60\text{ mm}$ and depth $40\text{ mm}$ for the top view.

> **Figure: Step 43.1: Orthographic projection of rectangular room**
>
> Drawing labelled 43.1 with note 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'. Shows a horizontal reference line labelled x at the left end and y at the right end. Above the xy line (front view), a rectangle rests directly on the xy line, with a vertical dimension of 30 indicated on its right side. Below the xy line (top view), a rectangle is aligned vertically with the front view rectangle, having a vertical dimension of 40 indicated on its left side and a horizontal dimension of 60 indicated at its bottom.

2. **Draw the projections of the space diagonal (Step 43.2):** The largest rod that fits inside the cuboid lies along its 3D space diagonal. In the front view, join the bottom-left corner $a'$ (on $xy$) to the top-right corner $b'$ ($30\text{ mm}$ above $xy$) to get $a'b'$. In the top view, join the top-left corner $a$ to the bottom-right corner $b$ to get $ab$.

> **Figure: Step 43.2: Orthographic projection of room with diagonal line AB**
>
> Drawing labelled 43.2 with note 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'. Similar to 43.1, it shows the front view (60 by 30 rectangle on the xy line) and top view (60 by 40 rectangle below the xy line). In the front view, a diagonal line segment a'b' is drawn from the bottom-left corner a' (on the xy line) to the top-right corner b' (30 mm above the xy line). In the top view, a diagonal line segment ab is drawn from the top-left corner a to the bottom-right corner b.

3. **Rotate to find True Length (Step 43.3):** With center $a$ and radius $ab$, rotate the top view diagonal upward until it is horizontal, meeting the top edge of the top view rectangle at $b_1$. Project $b_1$ vertically upward to intersect the extended top line of the front view (the locus of $b'$) at $b_1'$. Join $a'b_1'$ and measure its length.

> **Figure: Solution step 43.3 showing front view, top view, and true length of the rod**
>
> Orthographic projection labeled 43.3 with reference line x-y. Above x-y is the front view showing a rectangle of height 30 mm with diagonal line a'b', where a' lies on the x-y line and b' is 30 mm above x-y at the top-right corner. Below x-y is the top view showing a rectangle of width 60 mm (dimensioned at the bottom) and depth 40 mm (dimensioned on the left), with diagonal line ab from the top-left corner a to the bottom-right corner b. A true-length construction from segment ab determines the true length, labeled with a dimension arrow as 'LENGTH OF THE ROD'. Below the drawing is the label '43.3', text 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', and an ANSWER box containing '[1] LENGTH OF THE ROD 78mm'.

**Answer:**
- Length of the largest rod $= 78\text{ mm}$.

---

#### Example 5: Ladder leaning against a vertical wall (Q44 / Problem 50)
**Problem statement:** A steel ladder is to be fixed on a vertical wall of height $3.2\text{ m}$. One end of the ladder on the floor is $2.5\text{ m}$ away from the vertical wall and the other end is just at the top of the wall. Determine graphically the length of the ladder required. Use scale $1:50$.

> **Figure: Problem Q44: ladder of unknown length against a 3.2 m wall, foot 2.5 m from the wall**
>
> Projection of a ladder leaned against a vertical wall of height 3.2 m, with its foot on the floor 2.5 m in front of the wall and its top at the top of the wall, drawn to scale 1:50 to find the true length of the ladder.

**Given data:**
- Height of the vertical wall $= 3.2\text{ m}$
- Foot of the ladder from the wall $= 2.5\text{ m}$
- Scale: $1:50$
- Scaled wall height: $\frac{3.2 \times 1000}{50} = 64\text{ mm}$
- Scaled foot distance: $\frac{2.5 \times 1000}{50} = 50\text{ mm}$

**Step-by-step solution:**
1. **Draw the profile/front view of the wall and ladder (Step 44.1):** Draw a horizontal reference line $xy$ representing the floor. Mark the vertical wall rising from $xy$ to point $B$ with a scaled height of $64\text{ mm} = 3.2\text{ m}$. Along the floor line $xy$, measure $50\text{ mm} = 2.5\text{ m}$ to the left of the wall to mark the foot of the ladder $A$. Join $AB$ to represent the leaning ladder.

> **Figure: Step 44.1 showing a ladder leaning against a wall at scale 1:50**
>
> Solution step labelled 44.1. A horizontal reference line is labelled 'x' on the left. Above this line, a right-angled triangle represents a ladder leaning against a vertical wall. The base along the horizontal line from point A to the vertical wall is dimensioned as '50mm = 2.5m'. The vertical wall from the horizontal line up to point B is dimensioned as '64mm = 3.2m -WALL'. The hypotenuse AB is dimensioned and labelled 'LADDER'. Below the horizontal line, the vertical wall line extends downwards, and an arc with arrows is swung from point A (centered at the wall intersection) down to meet this vertical extension. A text box on the top left reads: 'SCALE 1:50', '50mm : 2.5m', '50mm : 2500mm', '1: 50'.

2. **Complete the projection and measure the ladder length (Step 44.2):** Extend the vertical wall line downward below $xy$ and swing an arc of radius equal to the base distance ($50\text{ mm}$) to project the side view beside it. Measure the hypotenuse $AB$ directly in millimeters and multiply by the scale factor $50$.

> **Figure: Step 44.2 showing the completed projection and answer for the length of the ladder**
>
> Solution step labelled 44.2. It builds on step 44.1 with horizontal reference line 'x-y'. The right-angled triangle on the left has base from A to the wall dimensioned as '2.5m', vertical wall height to B dimensioned as '3.2m -WALL', and hypotenuse AB dimensioned as '(81mm x 50 =4.05m) L'. An arc from A swings down to the vertical line extension below the x-y line. From the bottom of this arc and from B, horizontal projection lines with arrows extend to the right to form the front and top views on a vertical line: 'b'' is at the top, 'a'' and 'b' are at the intersection with the x-y line, and 'a' is at the bottom. The upper segment from a'/b to b' is dimensioned as '3.2m', and the lower segment from a'/b to a is dimensioned as '2.5m'. On the top left, an ANSWER box reads: 'ANSWER', 'LENGTH OF THE LADDER - 4.05m'. Below it, a scale box reads: 'SCALE 1:50', '50mm : 2.5m', '50mm : 2500mm', '1: 50'.

**Answer:**
- Measured drawing length $= 81\text{ mm}$
- Actual length of the ladder $L = 81\text{ mm} \times 50 = 4050\text{ mm} = 4.05\text{ m}$.

### Common mistakes
- **Mixing up $B$ and $H$ between views**: Always place the height $H$ above $xy$ in the front view and the breadth/depth $B$ below $xy$ in the top view. Swapping them alters the inclination to the floor $\theta$.
- **Using the front view diagonal of a cuboid as the true length**: The diagonal $a'b'$ in the front view of a box is foreshortened because the rod also travels across the depth $B$ of the box. You must rotate the top view diagonal $ab$ first.
- **Forgetting to convert scaled measurements back to meters**: Measuring $51\text{ mm}$ or $81\text{ mm}$ with a ruler and writing that as the final answer without multiplying by the scale factor ($100$ or $50$) loses marks.
- **Measuring pole heights in the top view**: Because vertical poles are perpendicular to the floor (HP), their top views are single points—all height differences appear strictly in the front view.

### Try it yourself

**Practice Problem 1 (Q194 / Problem 49):** A room is $4.8\text{ m} \times 4.2\text{ m} \times 3.6\text{ m}$ high. Determine graphically the distance between a top corner and a bottom corner diagonally opposite to it. ($[1]\ L = 4.8\text{ m}, [2]\ B = 4.2\text{ m}, [3]\ H = 3.6\text{ m}$).

> **Figure: Graphical determination of the distance between diagonally opposite corners of a 4.8m x 4.2m x 3.6m room**
>
> Problem statement diagram placeholder for Q194 (Problem 49): A room of length L = 4.8m, breadth B = 4.2m, and height H = 3.6m, requiring the graphical determination of the true distance between a top corner and the diagonally opposite bottom corner.

*Hint:* Use scale $1:100$ ($L = 48\text{ mm}$, $B = 42\text{ mm}$, $H = 36\text{ mm}$). Draw the front view rectangle ($48\text{ mm} \times 36\text{ mm}$) above $xy$ with diagonal $p'q'$, and the top view rectangle ($48\text{ mm} \times 42\text{ mm}$) below $xy$ with diagonal $pq$. Rotate $pq$ to find the true length.

> **Figure: Worked projection drawing 194 of a diagonal line PQ in a room**
>
> Orthographic projection labelled 194 with SCALE 1:100 and ALL DIMENSIONS ARE IN m. A horizontal reference line xy is drawn. Above xy is a rectangle representing the front view of a room of width 4.8m and height 3.6m, with diagonal p'q' from the bottom-left corner p' on xy to the top-right corner q'. Below xy is a rectangle representing the top view of the room of width 4.8m and depth 4.2m, with diagonal pq from the top-left corner p on xy to the bottom-right corner q. From q', an arc (with a small circle on its path) is swung to the vertical projector through q', and projected to meet the locus from q to find the true length TL, drawn as a bold line from p (labelled TL on its dimension line). A GIVEN box states: 'GIVEN: ROOM L-4.8m, B-4.2m; H-3.6m'. An ANSWERS box states: 'ANSWERS: [1] TL - 7.3m'.

**Printed Answer:** $\text{TL} = 7.3\text{ m}$ (measured as $73\text{ mm}$ at scale $1:100$, inclination $\theta = 30^\circ$).

### Quick recall
- **Scale $1:100$ rule of thumb**: Multiply meters by $10$ to get millimeters on paper ($1\text{ m} = 10\text{ mm}$).
- **Scale $1:50$ rule of thumb**: Multiply meters by $20$ to get millimeters on paper ($1\text{ m} = 20\text{ mm}$).
- **Room layout**: Front view above $xy$ is Length $\times$ Height ($L \times H$); top view below $xy$ is Length $\times$ Breadth ($L \times B$).
- **Longest rod in a cuboid**: Always connects opposite corners across all three dimensions (the space diagonal); rotate the top view diagonal $ab$ parallel to $xy$ and project up to the top edge of the front view.
- **Vertical poles on a floor**: Top views are points forming the base polygon; true lengths between pole tops are found by rotating the polygon sides parallel to $xy$ and projecting up to the pole top heights.
