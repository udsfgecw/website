<!-- page 1 | About this notebook -->

## Orthographic Projection of Straight Lines

This hands-on workbook guides learners through the orthographic projection of straight lines inclined to both reference planes across all four quadrants. By working through 45 graded graphical problems, students will master the Line Rotation Method, the Plane Rotation (Trapezoidal) Method, trace location, and real-world 3D spatial applications.

**Before you start:** Orthographic projection principles and the XY reference line; Projection of points in all four quadrants (above/below HP, in front of/behind VP); Basic geometric constructions using compass, protractor, and drawing scales.

**In this notebook**

1. Foundations of Line Projections and Traces
2. Line Rotation Method: Direct Data and Multi-Quadrant Lines
3. Line Rotation Method: Working Backwards from View Lengths and Apparent Angles
4. Line Rotation Method: Midpoint and Endpoint-on-Plane Constraints
5. Plane Rotation (Auxiliary/Trapezoidal) Method: End Projectors
6. Lines in a Profile Plane (Complementary Inclinations)
7. Trace Problems I: Given Trace Positions and Projector Distances
8. Trace Problems II: Combining Views, Angles, and Traces
9. Engineering Applications of Line Projections

<!-- page 2 | Foundations of Line Projections and Traces -->

## Foundations of Line Projections and Traces

### What you need
* **Reference Line ($XY$):** Represents the intersection of the Horizontal Plane (HP) and the Vertical Plane (VP); the HP is rotated $90^\circ$ clockwise about $XY$ to overlap the VP.
* **Quadrant Sign Convention:** Distance from the HP determines the Front View ($a'$) position (above HP = above $XY$; below HP = below $XY$). Distance from the VP determines the Top View ($a$) position after $90^\circ$ clockwise rotation (in front of VP = below $XY$; behind VP = above $XY$).
* **Lengths and Angles:** For a line inclined to both planes, foreshortening makes the apparent lengths shorter than the True Length ($TL > a'b'$ and $TL > ab$) and the apparent angles steeper than the true inclinations ($\alpha > \theta$ and $\beta > \phi$).
* **End Projectors and Loci:** The Front View ($a'$) and Top View ($a$) of the same endpoint always lie on a single vertical projector perpendicular to $XY$. Rotating a line parallel to a reference plane preserves the other view's distance from $XY$, moving its endpoint along a horizontal locus line parallel to $XY$.
* **Trace Collinearity Rule:** The Horizontal Trace ($HT$, where the line pierces the HP) and Vertical Trace ($VT$, where the line pierces the VP) satisfy strict collinearity:
  * $(a', b', h', VT)$ are collinear along the Front View extended, where $h'$ lies on $XY$.
  * $(a, b, v, HT)$ are collinear along the Top View extended, where $v$ lies on $XY$.

| Symbol | Meaning | View / Reference |
| :--- | :--- | :--- |
| $a'b'$ (or $FV$) | Front View (Elevation) length | Projected on VP |
| $ab$ (or $TV$) | Top View (Plan) length | Projected on HP |
| $TL$ | True Length of the line | Shown by $a'b_1'$ in VP and $ab_2$ in HP |
| $\theta$ | True inclination with the HP | Measured between $TL$ ($a'b_1'$) and horizontal in VP |
| $\phi$ | True inclination with the VP | Measured between $TL$ ($ab_2$) and horizontal in HP |
| $\alpha$ | Apparent angle in the Front View | Measured between $a'b'$ and horizontal |
| $\beta$ | Apparent angle in the Top View | Measured between $ab$ and horizontal |
| $HT$ / $h'$ | Horizontal Trace and its front view | $h'$ lies on $XY$; $HT$ lies on the vertical projector through $h'$ |
| $VT$ / $v$ | Vertical Trace and its top view | $v$ lies on $XY$; $VT$ lies on the vertical projector through $v$ |

### The method
1. Draw the horizontal reference line $XY$.
2. Plot the Front View ($p'$) above $XY$ if the point is above the HP, or below $XY$ if it is below the HP.
3. Plot the Top View ($p$) on the same vertical projector: below $XY$ if the point is in front of the VP, or above $XY$ if it is behind the VP.
4. Draw horizontal locus lines through the projected endpoints parallel to $XY$ to guide true-length rotations.
5. To find the Horizontal Trace ($HT$), extend the Front View $a'b'$ to meet $XY$ at $h'$, erect a vertical projector from $h'$, and intersect it with the extended Top View $ab$ at $HT$.
6. To find the Vertical Trace ($VT$), extend the Top View $ab$ to meet $XY$ at $v$, erect a vertical projector from $v$, and intersect it with the extended Front View $a'b'$ at $VT$.

### Problems

#### Problem 1: Worked Example — Plotting Endpoints Across Four Quadrants
**Given:** Four spatial points: $A$ is $20\text{ mm}$ above HP and $30\text{ mm}$ in front of VP; $B$ is $25\text{ mm}$ above HP and $35\text{ mm}$ behind VP; $C$ is $30\text{ mm}$ below HP and $25\text{ mm}$ behind VP; $D$ is $15\text{ mm}$ below HP and $40\text{ mm}$ in front of VP.   **Find:** The quadrant and orthographic projections $(p', p)$ of each point relative to $XY$.

**Solution**
1. Draw the reference line $XY$ and mark four spaced vertical projectors along it for points $A$, $B$, $C$, and $D$.
2. For point $A$ (First Quadrant): mark the front view $a'$ $20\text{ mm}$ above $XY$ (above HP) and the top view $a$ $30\text{ mm}$ below $XY$ (in front of VP turns downward).
3. For point $B$ (Second Quadrant): mark the front view $b'$ $25\text{ mm}$ above $XY$ (above HP) and the top view $b$ $35\text{ mm}$ above $XY$ (behind VP turns upward).
4. For point $C$ (Third Quadrant): mark the front view $c'$ $30\text{ mm}$ below $XY$ (below HP) and the top view $c$ $25\text{ mm}$ above $XY$ (behind VP turns upward).
5. For point $D$ (Fourth Quadrant): mark the front view $d'$ $15\text{ mm}$ below $XY$ (below HP) and the top view $d$ $40\text{ mm}$ below $XY$ (in front of VP turns downward).

> **Key idea.** In the 1st and 3rd quadrants the two views lie on opposite sides of $XY$; in the 2nd and 4th quadrants both views overlap on the same side of $XY$.

**Answer:** $A$ (1st Quadrant): $a'$ is $20\text{ mm}$ above $XY$, $a$ is $30\text{ mm}$ below $XY$; $B$ (2nd Quadrant): $b'$ is $25\text{ mm}$ above $XY$, $b$ is $35\text{ mm}$ above $XY$; $C$ (3rd Quadrant): $c'$ is $30\text{ mm}$ below $XY$, $c$ is $25\text{ mm}$ above $XY$; $D$ (4th Quadrant): $d'$ is $15\text{ mm}$ below $XY$, $d$ is $40\text{ mm}$ below $XY$.

#### Problem 2: Worked Example — True Length vs. Apparent View Lengths
**Given:** A line $AB$ in the First Quadrant has endpoint $A$ $15\text{ mm}$ above HP and $20\text{ mm}$ in front of VP. Its Top View $ab$ measures $60\text{ mm}$ and is inclined at $\beta = 45^\circ$ to $XY$, while endpoint $B$ is $50\text{ mm}$ above HP.   **Find:** The True Length ($TL$), the true inclination with the HP ($\theta$), the Front View length ($a'b'$), and the apparent inclination in the Front View ($\alpha$).

**Solution**
1. Draw $XY$, mark a vertical projector for end $A$, plot $a'$ $15\text{ mm}$ above $XY$, and plot $a$ $20\text{ mm}$ below $XY$.
2. From $a$, draw the Top View $ab$ of length $60\text{ mm}$ inclined at $\beta = 45^\circ$ downward from the horizontal.
3. Draw a horizontal locus line for $B$'s front view at $50\text{ mm}$ above $XY$.
4. Erect a vertical projector from $b$ to intersect the $50\text{ mm}$ locus line above $XY$; mark this intersection as the Front View $b'$, and join $a'b'$.
5. Measure the Front View $a'b'$ and its angle $\alpha$ with the horizontal ($a'b' = 54.6\text{ mm}$, $\alpha = 39.8^\circ$).
6. With center $a$ and radius $ab = 60\text{ mm}$, rotate the Top View parallel to $XY$ to locate $b_1$ on the horizontal line through $a$.
7. Project $b_1$ vertically upward to intersect the $50\text{ mm}$ front-view locus line at $b_1'$.
8. Join $a'b_1'$ to represent the True Length ($TL$) in the VP, and measure $TL = a'b_1'$ and the true inclination $\theta$ with the horizontal.

> **Watch out.** Never measure the true inclination $\theta$ along the foreshortened Front View $a'b'$; $\theta$ is only seen when the opposite view ($ab$) is rotated parallel to $XY$.

**Answer:** $TL = 69.5\text{ mm}$, $\theta = 30.3^\circ$, $a'b' = 54.6\text{ mm}$, $\alpha = 39.8^\circ$.

#### Problem 3: Worked Example — Locating Horizontal and Vertical Traces ($HT$ and $VT$)
**Given:** The projections of a line $AB$ in the First Quadrant have $a'$ $40\text{ mm}$ above $XY$, $a$ $15\text{ mm}$ below $XY$, $b'$ $15\text{ mm}$ above $XY$, and $b$ $45\text{ mm}$ below $XY$, with a distance of $50\text{ mm}$ between the end projectors of $A$ and $B$.   **Find:** The positions of the Horizontal Trace ($HT$) and Vertical Trace ($VT$) relative to $XY$.

**Solution**
1. Draw $XY$ and construct two vertical end projectors spaced $50\text{ mm}$ apart.
2. On the left projector, mark $a'$ $40\text{ mm}$ above $XY$ and $a$ $15\text{ mm}$ below $XY$.
3. On the right projector, mark $b'$ $15\text{ mm}$ above $XY$ and $b$ $45\text{ mm}$ below $XY$.
4. Join $a'b'$ for the Front View and $ab$ for the Top View.
5. Extend the Front View $a'b'$ downward to the right until it intersects $XY$ at $h'$ ($30\text{ mm}$ to the right of $B$'s projector).
6. From $h'$, draw a vertical projector downward to intersect the extended Top View line $ab$; mark this intersection as $HT$ and measure its distance below $XY$.
7. Extend the Top View $ba$ upward to the left until it intersects $XY$ at $v$ ($25\text{ mm}$ to the left of $A$'s projector).
8. From $v$, draw a vertical projector upward to intersect the extended Front View line $b'a'$; mark this intersection as $VT$ and measure its distance above $XY$.

**Answer:** $HT$ is $63\text{ mm}$ below $XY$ (in front of VP); $VT$ is $52.5\text{ mm}$ above $XY$ (above HP).

### Quick recall
* **Above/Below HP $\rightarrow$ Front View ($a'$):** Above HP is above $XY$; below HP is below $XY$.
* **In Front/Behind VP $\rightarrow$ Top View ($a$):** In front of VP is below $XY$; behind VP is above $XY$.
* **Foreshortening Rule:** Apparent lengths are always shorter than True Length ($a'b' < TL$, $ab < TL$), and apparent angles are always larger than true inclinations ($\alpha > \theta$, $\beta > \phi$).
* **Trace Collinearity:** $(a', b', h', VT)$ always form a single straight line, and $(a, b, v, HT)$ always form a single straight line, with $h'$ and $v$ anchored on $XY$.

<!-- page 3 | Line Rotation Method: Direct Data and Multi-Quadrant Lines -->

## Line Rotation Method: Direct Data and Multi-Quadrant Lines

### What you need
- **Line parallel to VP ($a'b_1'$ and $ab_1$):** Rotating the line parallel to the VP shows its True Length ($TL$) and true inclination $\theta$ to the HP in the front view ($a'b_1' = TL$), while its top view is horizontal ($ab_1 = TL \cos\theta$, length of the final top view $ab$).
- **Line parallel to HP ($ab_2$ and $a'b_2'$):** Rotating the line parallel to the HP shows its True Length ($TL$) and true inclination $\phi$ to the VP in the top view ($ab_2 = TL$), while its front view is horizontal ($a'b_2' = TL \cos\phi$, length of the final front view $a'b'$).
- **Horizontal Loci:** The elevation of $B$ relative to the HP fixes a horizontal locus passing through $b'$ and $b_1'$; the distance of $B$ from the VP fixes a horizontal locus passing through $b$ and $b_2$.
- **Multi-Quadrant Projections:**

| Quadrant | Point Position | Front View ($a', b'$) | Top View ($a, b$) |
| :--- | :--- | :--- | :--- |
| **First (I)** | Above HP, in front of VP | Above $XY$ | Below $XY$ |
| **Second (II)** | Above HP, behind VP | Above $XY$ | Above $XY$ |
| **Third (III)** | Below HP, behind VP | Below $XY$ | Above $XY$ |

- **Trace Location:** Extend the front view $a'b'$ to meet $XY$ at $h'$, then erect or drop a perpendicular to meet the extended top view $ab$ at the Horizontal Trace ($HT$). Extend the top view $ab$ to meet $XY$ at $v$, then erect or drop a perpendicular to meet the extended front view $a'b'$ at the Vertical Trace ($VT$).

### The method
1. Draw the reference line $XY$ and plot the projections of the known end ($a'$ and $a$) on a common vertical projector according to its quadrant.
2. Draw horizontal reference lines through $a'$ and $a$ to serve as base lines for angles and rotations.
3. From $a'$, draw the rotated front view $a'b_1'$ using $TL$ and $\theta$ (or to meet the given locus of $b'$); draw the horizontal locus of $b'$ through $b_1'$ and project $b_1'$ vertically to meet the horizontal line through $a$ at $b_1$.
4. From $a$, draw the rotated top view $ab_2$ using $TL$ and $\phi$ (or to meet the given locus of $b$), heading away from $XY$ if staying in the same quadrant or toward $XY$ if crossing into another quadrant; draw the horizontal locus of $b$ through $b_2$ and project $b_2$ vertically to meet the horizontal line through $a'$ at $b_2'$.
5. With center $a$ and radius $ab_1$, swing an arc to intersect the locus of $b$ at $b$, and join $ab$ for the final top view.
6. With center $a'$ and radius $a'b_2'$, swing an arc to intersect the locus of $b'$ at $b'$ (verify that $b'$ and $b$ lie on the same vertical projector), and join $a'b'$ for the final front view.
7. Extend $a'b'$ and $ab$ to intersect $XY$ at $h'$ and $v$, and project vertically from $h'$ and $v$ to the opposite views to locate $HT$ and $VT$.

### Problems

#### Problem 1: Line in First Quadrant Given True Length and True Inclinations
**Given:** First quadrant; $AB = 90\text{ mm}$; $\theta = 30^\circ$ to HP; $\phi = 40^\circ$ to VP; end $A$ is $20\text{ mm}$ above HP and $30\text{ mm}$ in front of VP.   **Find:** Projections $a'b'$ and $ab$, and traces $HT$ and $VT$.

**Solution**
1. Draw the reference line $XY$ and mark $a'$ $20\text{ mm}$ above $XY$ and $a$ $30\text{ mm}$ below $XY$ on a common vertical projector.
2. Draw horizontal lines to the right through both $a'$ and $a$.
3. From $a'$, draw line $a'b_1' = 90\text{ mm}$ inclined at $\theta = 30^\circ$ above the horizontal; draw a horizontal locus line for $b'$ through $b_1'$ ($65\text{ mm}$ above $XY$).
4. Drop a vertical projector from $b_1'$ to meet the horizontal line through $a$ at $b_1$, giving the top view length $ab_1 = 77.9\text{ mm}$.
5. From $a$, draw line $ab_2 = 90\text{ mm}$ inclined at $\phi = 40^\circ$ below the horizontal; draw a horizontal locus line for $b$ through $b_2$ ($87.9\text{ mm}$ below $XY$).
6. Erect a vertical projector from $b_2$ to meet the horizontal line through $a'$ at $b_2'$, giving the front view length $a'b_2' = 68.9\text{ mm}$.
7. With center $a$ and radius $ab_1 = 77.9\text{ mm}$, swing an arc downward to cut the locus of $b$ at $b$; join $a$ and $b$ to obtain the top view $ab$.
8. With center $a'$ and radius $a'b_2' = 68.9\text{ mm}$, swing an arc upward to cut the locus of $b'$ at $b'$ (directly above $b$); join $a'$ and $b'$ to obtain the front view $a'b'$.
9. Extend $b'a'$ to meet $XY$ at $h'$, and drop a vertical projector from $h'$ to meet $ba$ extended at $HT$ ($4.3\text{ mm}$ from $XY$).
10. Extend $ba$ to meet $XY$ at $v$, and drop a vertical projector from $v$ to meet $b'a'$ extended at $VT$ ($3.3\text{ mm}$ from $XY$).

```line-projection
{
  "A": {
    "y": 30,
    "z": 20
  },
  "B": {
    "y": 87.851,
    "z": 65
  },
  "length": 90,
  "unit": "mm",
  "givens": [
    "True length AB = 90 mm",
    "Inclination to the HP, θ = 30°",
    "Inclination to the VP, φ = 40°",
    "A is 20 mm above the HP",
    "A is 30 mm in front of the VP"
  ],
  "printed": {
    "fvLength": 69,
    "tvLength": 78
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-01-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-01-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-01-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-01-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $a'b' = 68.9\text{ mm}$, $ab = 77.9\text{ mm}$, $HT = 4.3\text{ mm}$ from $XY$, $VT = 3.3\text{ mm}$ from $XY$.

---

#### Problem 2: Line in First Quadrant Given Endpoint Coordinates and True Length
**Given:** First quadrant; $AB = 75\text{ mm}$; end $A$ is $25\text{ mm}$ above HP and $20\text{ mm}$ in front of VP; end $B$ is $50\text{ mm}$ above HP and $65\text{ mm}$ in front of VP.   **Find:** Projections $a'b'$ and $ab$, true inclinations $\theta$ and $\phi$, and traces $HT$ and $VT$.

**Solution**
1. Draw $XY$ and plot $a'$ $25\text{ mm}$ above $XY$ and $a$ $20\text{ mm}$ below $XY$ on a common vertical projector, with horizontal lines through both points.
2. Draw the horizontal locus of $b'$ $50\text{ mm}$ above $XY$ and the horizontal locus of $b$ $65\text{ mm}$ below $XY$.
3. With center $a'$ and radius $TL = 75\text{ mm}$, cut the locus of $b'$ at $b_1'$; join $a'b_1'$ and measure its inclination $\theta = 19.5^\circ$ to the horizontal.
4. Drop a vertical projector from $b_1'$ to the horizontal line through $a$ to locate $b_1$, giving the top view length $ab_1 = 70.7\text{ mm}$.
5. With center $a$ and radius $ab_1 = 70.7\text{ mm}$, swing an arc downward to meet the locus of $b$ at $b$; join $ab$ for the top view.
6. With center $a$ and radius $TL = 75\text{ mm}$, cut the locus of $b$ at $b_2$; join $ab_2$ and measure its inclination $\phi = 36.9^\circ$ to the horizontal.
7. Erect a vertical projector from $b_2$ to the horizontal line through $a'$ to locate $b_2'$ ($a'b_2' = 60\text{ mm}$), then swing an arc of radius $a'b_2'$ centered at $a'$ to meet the locus of $b'$ at $b'$ (vertically aligned with $b$); join $a'b'$ for the front view.
8. Extend $b'a'$ to meet $XY$ at $h'$ and project vertically to $ba$ extended to mark $HT$ ($25\text{ mm}$ from $XY$); extend $ba$ to meet $XY$ at $v$ and project vertically to $b'a'$ extended to mark $VT$ ($13.9\text{ mm}$ from $XY$).

```line-projection
{
  "A": {
    "y": 20,
    "z": 25
  },
  "B": {
    "y": 65,
    "z": 50
  },
  "length": 75,
  "unit": "mm",
  "givens": [
    "True length AB = 75 mm",
    "A is 20 mm in front of the VP",
    "A is 25 mm above the HP",
    "B is 65 mm in front of the VP",
    "B is 50 mm above the HP"
  ],
  "printed": {
    "fvLength": 47,
    "tvLength": 60,
    "theta": 23,
    "phi": 44,
    "htDistance": 24,
    "vtDistance": 14
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-02-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-02-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-02-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-02-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** Printed: $a'b' = 47\text{ mm}$, $ab = 60\text{ mm}$, $\theta = 23^\circ$, $\phi = 44^\circ$, $h'-HT = 24\text{ mm}$, $v-VT = 14\text{ mm}$ (From data: $a'b' = 60\text{ mm}$, $ab = 70.7\text{ mm}$, $\theta = 19.5^\circ$, $\phi = 36.9^\circ$, $HT = 25\text{ mm}$ from $XY$, $VT = 13.9\text{ mm}$ from $XY$).

> **Watch out.** The printed answer key lists $a'b' = 47\text{ mm}$, $ab = 60\text{ mm}$, $\theta = 23^\circ$, and $\phi = 44^\circ$, which do not match the given dimensions ($AB = 75\text{ mm}$ with $\Delta z = 25\text{ mm}$ and $\Delta y = 45\text{ mm}$ yields $a'b' = 60\text{ mm}$, $ab = 70.7\text{ mm}$, $\theta = 19.5^\circ$, and $\phi = 36.9^\circ$).

---

#### Problem 3: Line Crossing from First to Second Quadrant Given Endpoint Coordinates
**Given:** $AB = 100\text{ mm}$; end $A$ in first quadrant, $25\text{ mm}$ above HP and $25\text{ mm}$ in front of VP; end $B$ in second quadrant, $50\text{ mm}$ above HP and $50\text{ mm}$ behind VP.   **Find:** Projections $a'b'$ and $ab$, true inclinations $\theta$ and $\phi$, and traces $HT$ and $VT$.

**Solution**
1. Draw $XY$ and locate $a'$ $25\text{ mm}$ above $XY$ and $a$ $25\text{ mm}$ below $XY$ on a single vertical projector.
2. Because $B$ is $50\text{ mm}$ above HP and $50\text{ mm}$ behind VP (second quadrant), both $b'$ and $b$ lie $50\text{ mm}$ above $XY$; draw a single shared horizontal locus line $50\text{ mm}$ above $XY$ for both $b'$ and $b$.
3. With center $a'$ and radius $TL = 100\text{ mm}$, cut the $50\text{ mm}$ locus line above $XY$ at $b_1'$; join $a'b_1'$ and measure $\theta = 14.5^\circ$ above the horizontal through $a'$.
4. Drop a vertical projector from $b_1'$ to the horizontal line through $a$ at $b_1$ ($ab_1 = 96.8\text{ mm}$), then with center $a$ and radius $ab_1$, swing an arc counter-clockwise upward across $XY$ to cut the $50\text{ mm}$ locus line above $XY$ at $b(b')$.
5. Join $a$ to $b$ for the top view $ab = 96.8\text{ mm}$ and join $a'$ to $b'$ (coincident with $b$) for the front view $a'b' = 66.1\text{ mm}$.
6. With center $a$ and radius $TL = 100\text{ mm}$, cut the $50\text{ mm}$ locus line above $XY$ at $b_2$; join $ab_2$ and measure $\phi = 48.6^\circ$ above the horizontal through $a$.
7. Extend $b'a'$ downward to meet $XY$ at $h'$, and drop a vertical projector from $h'$ to meet $ba$ extended at $HT$ ($100\text{ mm}$ below $XY$); mark $v$ where $ab$ crosses $XY$, and erect a vertical projector from $v$ to meet $a'b'$ at $VT$ ($33.3\text{ mm}$ above $XY$).

```line-projection
{
  "A": {
    "y": 25,
    "z": 25
  },
  "B": {
    "y": -50,
    "z": 50
  },
  "length": 100,
  "unit": "mm",
  "givens": [
    "True length AB = 100 mm",
    "A is 25 mm above the HP",
    "A is 25 mm in front of the VP",
    "B is 50 mm above the HP",
    "B is 50 mm behind the VP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-03-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-03-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-03-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-03-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $a'b' = 66.1\text{ mm}$ (printed $66\text{ mm}$), $ab = 96.8\text{ mm}$ (printed $97\text{ mm}$), $\theta = 14.5^\circ$ (printed $14^\circ$), $\phi = 48.6^\circ$ (printed $49^\circ$), $HT = 100\text{ mm}$ from $XY$, $VT = 33.3\text{ mm}$ from $XY$.

> **Key idea.** When a point lies in the second quadrant at equal distances from HP and VP, its front view $b'$ and top view $b$ overlap at the exact same point above $XY$.

---

#### Problem 4: Line Entering Second Quadrant with One End on HP
**Given:** $PQ = 100\text{ mm}$; end $P$ is on HP and $20\text{ mm}$ in front of VP; $\theta = 30^\circ$ to HP; $\phi = 20^\circ$ to VP; end $Q$ is in the second quadrant.   **Find:** Projections $p'q'$ and $pq$.

**Solution**
1. Draw $XY$ and plot $p'$ on $XY$ ($0\text{ mm}$ above HP) and $p$ $20\text{ mm}$ below $XY$ on a common vertical projector.
2. From $p'$, draw the true length line $p'q_1' = 100\text{ mm}$ at $\theta = 30^\circ$ above $XY$, and draw the horizontal locus of $q'$ through $q_1'$ ($50\text{ mm}$ above $XY$).
3. Drop a vertical projector from $q_1'$ to the horizontal line through $p$ to obtain $pq_1 = 86.6\text{ mm}$.
4. Because $Q$ lies behind the VP in the second quadrant, draw the true length line $pq_2 = 100\text{ mm}$ from $p$ inclined upward at $\phi = 20^\circ$ above the horizontal so that $q_2$ crosses above $XY$; draw the horizontal locus of $q$ through $q_2$ ($14.2\text{ mm}$ above $XY$).
5. With center $p$ and radius $pq_1 = 86.6\text{ mm}$, swing an arc upward across $XY$ to intersect the locus of $q$ at $q$; join $pq$ for the top view ($86.6\text{ mm}$).
6. Erect a vertical projector from $q$ to meet the locus of $q'$ at $q'$; join $p'q'$ for the front view ($94\text{ mm}$). (Here $HT$ is at $p$ $20\text{ mm}$ from $XY$, and $VT$ is $29.2\text{ mm}$ above $XY$.)

```line-projection
{
  "A": {
    "y": 20,
    "z": 0
  },
  "B": {
    "y": -14.202,
    "z": 50
  },
  "length": 100,
  "unit": "mm",
  "givens": [
    "True length AB = 100 mm",
    "A is 0 mm above the HP",
    "A is 20 mm in front of the VP",
    "Inclination to the HP, θ = 30°",
    "Inclination to the VP, φ = 20°"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-04-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-04-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-04-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-04-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $p'q' = 94\text{ mm}$, $pq = 86.6\text{ mm}$ (printed $86\text{ mm}$), $HT = 20\text{ mm}$ from $XY$, $VT = 29.2\text{ mm}$ from $XY$.

---

#### Problem 5: Line in Third Quadrant Given True Length and True Inclinations
**Given:** Third quadrant; $AB = 80\text{ mm}$; $\theta = 30^\circ$ to HP; $\phi = 45^\circ$ to VP; end $A$ is $20\text{ mm}$ below HP and $25\text{ mm}$ behind VP.   **Find:** Projections $a'b'$ and $ab$, and traces $HT$ and $VT$.

**Solution**
1. Draw $XY$ and plot $a$ $25\text{ mm}$ above $XY$ (behind VP) and $a'$ $20\text{ mm}$ below $XY$ (below HP) on a common vertical projector, with horizontal lines through both.
2. From $a$, draw true length line $ab_2 = 80\text{ mm}$ inclined upward at $\phi = 45^\circ$ to the horizontal; draw the horizontal locus of $b$ through $b_2$ ($81.6\text{ mm}$ above $XY$).
3. Drop a vertical projector from $b_2$ to the horizontal line through $a'$ at $b_2'$ ($a'b_2' = 56.6\text{ mm}$).
4. From $a'$, draw true length line $a'b_1' = 80\text{ mm}$ inclined downward at $\theta = 30^\circ$ to the horizontal; draw the horizontal locus of $b'$ through $b_1'$ ($60\text{ mm}$ below $XY$).
5. Erect a vertical projector from $b_1'$ to the horizontal line through $a$ at $b_1$ ($ab_1 = 69.3\text{ mm}$).
6. With center $a'$ and radius $a'b_2' = 56.6\text{ mm}$, swing an arc downward to cut the locus of $b'$ at $b'$, and join $a'b'$ for the front view; with center $a$ and radius $ab_1 = 69.3\text{ mm}$, swing an arc upward to cut the locus of $b$ at $b$ (vertically aligned with $b'$), and join $ab$ for the top view.
7. Extend $b'a'$ upward to meet $XY$ at $h'$ and project vertically to $ba$ extended to locate $HT$ ($3.3\text{ mm}$ from $XY$); extend $ba$ downward to meet $XY$ at $v$ and project vertically to $b'a'$ extended to locate $VT$ ($2.3\text{ mm}$ from $XY$).

```line-projection
{
  "A": {
    "y": -25,
    "z": -20
  },
  "B": {
    "y": -81.569,
    "z": -60
  },
  "length": 80,
  "unit": "mm",
  "givens": [
    "True length AB = 80 mm",
    "Inclination to the HP, θ = 30°",
    "Inclination to the VP, φ = 45°",
    "A is 20 mm below the HP",
    "A is 25 mm behind the VP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-05-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-05-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-05-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-05-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $a'b' = 56.6\text{ mm}$, $ab = 69.3\text{ mm}$, $HT = 3.3\text{ mm}$ from $XY$, $VT = 2.3\text{ mm}$ from $XY$.

---

#### Problem 6: Line Crossing from First to Second Quadrant Given True Inclinations
**Given:** $AB = 100\text{ mm}$; $\theta = 30^\circ$ to HP; $\phi = 45^\circ$ to VP; end $A$ is in the first quadrant, $20\text{ mm}$ above HP and $25\text{ mm}$ in front of VP; end $B$ is in the second quadrant.   **Find:** Projections $a'b'$ and $ab$, and traces $HT$ and $VT$.

**Solution**
1. Draw $XY$ and locate $a'$ $20\text{ mm}$ above $XY$ and $a$ $25\text{ mm}$ below $XY$ on a common vertical projector.
2. From $a'$, draw $a'b_1' = 100\text{ mm}$ inclined upward at $\theta = 30^\circ$ to the horizontal, and draw the horizontal locus of $b'$ through $b_1'$ ($70\text{ mm}$ above $XY$); drop a vertical projector from $b_1'$ to the horizontal line through $a$ at $b_1$ ($ab_1 = 86.6\text{ mm}$).
3. Because $B$ lies in the second quadrant (behind VP), draw $ab_2 = 100\text{ mm}$ from $a$ inclined upward at $\phi = 45^\circ$ above the horizontal so that it crosses $XY$; draw the horizontal locus of $b$ through $b_2$ ($45.7\text{ mm}$ above $XY$).
4. Drop a vertical projector from $b_2$ to the horizontal line through $a'$ at $b_2'$ ($a'b_2' = 70.7\text{ mm}$).
5. With center $a$ and radius $ab_1 = 86.6\text{ mm}$, swing an arc counter-clockwise across $XY$ to cut the locus of $b$ at $b$, and join $ab$ for the top view; with center $a'$ and radius $a'b_2' = 70.7\text{ mm}$, swing an arc upward to cut the locus of $b'$ at $b'$ (on the same vertical projector as $b$), and join $a'b'$ for the front view.
6. Extend $b'a'$ downward to meet $XY$ at $h'$, and drop a vertical projector from $h'$ to meet $ba$ extended at $HT$ ($53.3\text{ mm}$ below $XY$); mark $v$ where $ab$ intersects $XY$, and erect a vertical projector from $v$ to meet $a'b'$ at $VT$ ($37.7\text{ mm}$ above $XY$).

```line-projection
{
  "A": {
    "y": 25,
    "z": 20
  },
  "B": {
    "y": -45.711,
    "z": 70
  },
  "length": 100,
  "unit": "mm",
  "givens": [
    "True length AB = 100 mm",
    "A is 20 mm above the HP",
    "A is 25 mm in front of the VP",
    "Inclination to the HP, θ = 30°",
    "Inclination to the VP, φ = 45°"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-06-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-06-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-06-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-06-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $a'b' = 70.7\text{ mm}$ (printed $70\text{ mm}$), $ab = 86.6\text{ mm}$ (printed $86\text{ mm}$), $HT = 53.3\text{ mm}$ (printed $53\text{ mm}$) from $XY$, $VT = 37.7\text{ mm}$ (printed $38\text{ mm}$) from $XY$.

### Quick recall
- The rotated front view $a'b_1'$ gives the top view radius $ab_1 = TL \cos\theta$ on the horizontal line through $a$.
- The rotated top view $ab_2$ gives the front view radius $a'b_2' = TL \cos\phi$ on the horizontal line through $a'$.
- When a line crosses from the first quadrant into the second quadrant, draw the true-length line $ab_2$ upward toward $XY$ so the locus of $b$ lies above $XY$.
- For a line entirely in the third quadrant, plot the top view above $XY$ (expanding upward) and the front view below $XY$ (expanding downward).

<!-- page 4 | Line Rotation Method: Working Backwards from View Lengths and Apparent Angles -->

## Line Rotation Method: Working Backwards from View Lengths and Apparent Angles

### What you need
- **Apparent inclinations:** The front view $a'b'$ makes angle $\alpha$ with $XY$; the top view $ab$ makes angle $\beta$ with $XY$. Always $\alpha \ge \theta$ and $\beta \ge \phi$.
- **Reverse rotation:** Swing a known top view length $ab$ onto the horizontal line through $a$ (to $b_1$), then project straight up to the true length line $a'b_1'$ to establish the locus of $b'$.
- **Direct view construction:** When $\alpha$ or $\beta$ is given alongside a view length or endpoint locus, draw the final view $a'b'$ or $ab$ first, then un-rotate to find the true length ($\text{TL}$).
- **Standard assumption:** If the location of the starting point $A$ is omitted, place $A$ on both the HP and VP so that $a'$ and $a$ coincide on the $XY$ line.
- **Equidistant in the second quadrant:** A point $B$ in the second quadrant lies above the HP and behind the VP; both $b'$ and $b$ fall above $XY$. If $B$ is equidistant from the HP and VP, $b'$ and $b$ share the exact same horizontal locus line above $XY$.
- **End-projector distance (Trapezoidal/Plane Rotation):** When the distance between end projectors ($\text{EP}$) is given, draw the second vertical projector at distance $\text{EP}$ from the first to intersect the view arcs directly.

### The method
1. Draw the reference line $XY$ and plot $a'$ and $a$ on a single vertical projector (on $XY$ if $A$'s position is not given).
2. Draw any known horizontal locus lines for $b'$ or $b$ from the given heights or depths.
3. If true length and $\theta$ (or $\phi$) are given, draw $a'b_1'$ (or $ab_2$) to find the missing horizontal locus and the rotated view length $ab_1$ (or $a'b_2'$).
4. If a view length ($ab$ or $a'b'$) is given without its locus, lay that length horizontally from $a$ (as $ab_1$) or $a'$ (as $a'b_2'$), project to the known true-length line or inclination line to establish the opposite locus, and swing an arc to the final view.
5. If $\alpha$ or $\beta$ is given, draw the view line directly at that angle from $a'$ or $a$ to meet its length or locus, then un-rotate to horizontal to project and find the true length and true inclinations.
6. Extend $a'b'$ and $ab$ to the $XY$ line and project vertically to locate the horizontal trace ($\text{HT}$) and vertical trace ($\text{VT}$) when required.

### Problems

#### Problem Q6: Given Front View Length and True Inclination with HP
**Given:** $\text{AB} = 80\text{ mm}$, $\theta = 30^\circ$, $A$ is $15\text{ mm}$ above HP and $20\text{ mm}$ in front of VP, front view $a'b' = 60\text{ mm}$.   **Find:** Top view $ab$ and inclination with VP ($\phi$).

**Solution**
1. Draw the reference line $XY$ and mark $a'$ $15\text{ mm}$ above $XY$ and $a$ $20\text{ mm}$ below $XY$ on a vertical projector.
2. From $a'$, draw the true length line $a'b_1' = 80\text{ mm}$ inclined at $\theta = 30^\circ$ above the horizontal.
3. Draw a horizontal locus line through $b_1'$ (which lies $55\text{ mm}$ above $XY$).
4. Project $b_1'$ straight down to meet the horizontal line through $a$ at $b_1$; this gives the top view length $ab_1 = 69.3\text{ mm}$.
5. With centre $a'$ and radius $60\text{ mm}$, cut the locus line through $b_1'$ to locate $b'$, and draw the front view $a'b'$.
6. Project $b'$ straight down to intersect the arc swung from $b_1$ (with centre $a$ and radius $ab_1 = 69.3\text{ mm}$) at $b$ ($72.9\text{ mm}$ below $XY$), and join $ab$.
7. Draw a horizontal locus line through $b$; with centre $a'$ and radius $80\text{ mm}$, cut the horizontal line through $a'$ at $b_2'$, drop a projector to the locus of $b$ at $b_2$, and measure $\phi = 41.4^\circ$ between $ab_2$ and the horizontal.

```line-projection
{
  "A": {
    "y": 20,
    "z": 15
  },
  "B": {
    "y": 72.915,
    "z": 55
  },
  "length": 80,
  "unit": "mm",
  "givens": [
    "True length AB = 80 mm",
    "Inclination to the HP, θ = 30°",
    "A is 15 mm above the HP",
    "A is 20 mm in front of the VP",
    "Front view a′b′ = 60 mm"
  ],
  "printed": {
    "tvLength": 69,
    "phi": 41
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-07-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-07-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-07-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-07-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** Top view $ab = 69.3\text{ mm}$, $\phi = 41.4^\circ$ (with $\text{HT} = 0.2\text{ mm}$ and $\text{VT} = 0.1\text{ mm}$ from $XY$).

#### Problem Q7: Multi-Quadrant Line Given Top View Length and Both Depths
**Given:** $\text{AB} = 80\text{ mm}$, $A$ is $15\text{ mm}$ below HP and $45\text{ mm}$ in front of VP, $B$ is above HP and $15\text{ mm}$ in front of VP, top view $ab = 55\text{ mm}$.   **Find:** Front view $a'b'$, $\theta$, and $\phi$.

**Solution**
1. Draw $XY$ and mark $a'$ $15\text{ mm}$ below $XY$ and $a$ $45\text{ mm}$ below $XY$ on the same vertical projector (since $A$ is in the fourth quadrant).
2. Draw a horizontal locus line for $b$ $15\text{ mm}$ below $XY$ (passing through $a'$).
3. With centre $a$ and radius $80\text{ mm}$ ($\text{TL}$), cut the locus of $b$ at $b_1$, join $ab_1$, and measure the true inclination with VP as $\phi = 22^\circ$.
4. With centre $a$ and top view radius $ab = 55\text{ mm}$, cut the locus of $b$ at $b$ and draw the top view $ab$.
5. Swing an arc with centre $a$ and radius $ab = 55\text{ mm}$ down to the horizontal line through $a$ to get $b_2$.
6. Project $b_2$ vertically upwards; with centre $a'$ and radius $80\text{ mm}$ ($\text{TL}$), cut this vertical projector above $XY$ at $b_2'$ ($43.1\text{ mm}$ above $XY$) to establish the horizontal locus of $b'$, and measure $\theta = 46.6^\circ$.
7. Project $b$ vertically up to meet the locus of $b'$ at $b'$, join $a'b'$, and measure the front view length $a'b' = 74.2\text{ mm}$.

```line-projection
{
  "A": {
    "y": 45,
    "z": -15
  },
  "B": {
    "y": 15,
    "z": 43.095
  },
  "length": 80,
  "unit": "mm",
  "givens": [
    "True length AB = 80 mm",
    "Top view ab = 55 mm",
    "A is 45 mm in front of the VP",
    "A is 15 mm below the HP",
    "B is 15 mm in front of the VP"
  ],
  "printed": {
    "fvLength": 74,
    "theta": 47,
    "phi": 22
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-08-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-08-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-08-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-08-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** Front view $a'b' = 74.2\text{ mm}$, $\theta = 46.6^\circ$, $\phi = 22^\circ$ (with $\text{HT} = 37.3\text{ mm}$ and $\text{VT} = 72.1\text{ mm}$ from $XY$).

#### Problem Q8: Both Apparent Inclinations Given
**Given:** $\alpha = 35^\circ$, $\beta = 45^\circ$, $A$ is $20\text{ mm}$ above HP and $25\text{ mm}$ in front of VP, $B$ is $40\text{ mm}$ above HP.   **Find:** Projections $a'b'$ and $ab$, true length $\text{AB}$, $\theta$, and $\phi$.

**Solution**
1. Draw $XY$, mark $a'$ $20\text{ mm}$ above $XY$ and $a$ $25\text{ mm}$ below $XY$, and draw the horizontal locus of $b'$ $40\text{ mm}$ above $XY$.
2. From $a'$, draw a line at $\alpha = 35^\circ$ above the horizontal to intersect the $40\text{ mm}$ locus at $b'$; this completes the front view $a'b' = 34.9\text{ mm}$.
3. From $a$, draw a line at $\beta = 45^\circ$ below the horizontal, and drop a vertical projector from $b'$ to intersect it at $b$ ($53.6\text{ mm}$ below $XY$); this completes the top view $ab = 40.4\text{ mm}$ and sets the horizontal locus of $b$.
4. With centre $a$ and radius $ab = 40.4\text{ mm}$, swing $b$ up to the horizontal line through $a$ at $b_1$, project $b_1$ up to the locus of $b'$ at $b_1'$, and join $a'b_1'$ to measure $\text{TL} = 45.1\text{ mm}$ and $\theta = 26.3^\circ$.
5. With centre $a'$ and radius $a'b' = 34.9\text{ mm}$, swing $b'$ down to the horizontal line through $a'$ at $b_2'$, project down to the locus of $b$ at $b_2$, and join $ab_2$ to measure $\phi = 39.3^\circ$.

```line-projection
{
  "A": {
    "y": 25,
    "z": 20
  },
  "B": {
    "y": 53.563,
    "z": 40
  },
  "length": 45.074,
  "unit": "mm",
  "givens": [
    "Front view makes 35° with XY",
    "Top view makes 45° with XY",
    "A is 20 mm above the HP",
    "A is 25 mm in front of the VP",
    "B is 40 mm above the HP"
  ],
  "printed": {
    "length": 45,
    "fvLength": 35,
    "tvLength": 41,
    "theta": 26,
    "phi": 40
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-09-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-09-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-09-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-09-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $\text{TL} = 45.1\text{ mm}$, $a'b' = 34.9\text{ mm}$, $ab = 40.4\text{ mm}$, $\theta = 26.3^\circ$, $\phi = 39.3^\circ$ (with $\text{HT} = 3.6\text{ mm}$ and $\text{VT} = 2.5\text{ mm}$ from $XY$).

#### Problem Q191: Given Plan Inclination $\beta$ and True Inclination $\theta$
**Given:** $\text{PQ} = 80\text{ mm}$, $\theta = 30^\circ$, $\beta = 60^\circ$, $P$ is on HP and $15\text{ mm}$ in front of VP.   **Find:** Projections and inclination with VP ($\phi$).

**Solution**
1. Draw $XY$ and locate $p'$ on $XY$ and $p$ $15\text{ mm}$ below $XY$ on a single vertical projector.
2. From $p'$, draw the true length line $p'q_1' = 80\text{ mm}$ at $\theta = 30^\circ$ above $XY$, and draw the horizontal locus of $q'$ through $q_1'$ ($40\text{ mm}$ above $XY$).
3. Project $q_1'$ vertically down to the horizontal line through $p$ to find $q_1$, giving the plan length $pq_1 = 69.3\text{ mm}$.
4. From $p$, draw a line inclined at $\beta = 60^\circ$ below the horizontal, and cut it with an arc of centre $p$ and radius $pq_1 = 69.3\text{ mm}$ at $q$ ($75\text{ mm}$ below $XY$) to get the top view $pq$ and the horizontal locus of $q$.
5. Project $q$ vertically up to the locus of $q'$ to locate $q'$, and join $p'q'$ ($52.9\text{ mm}$).
6. With centre $p$ and radius $80\text{ mm}$ ($\text{TL}$), cut the horizontal locus of $q$ at $q_2$, join $pq_2$, and measure $\phi = 48.6^\circ$.

```line-projection
{
  "A": {
    "y": 15,
    "z": 0
  },
  "B": {
    "y": 75,
    "z": 40
  },
  "length": 80,
  "unit": "mm",
  "givens": [
    "True length AB = 80 mm",
    "Inclination to the HP, θ = 30°",
    "Top view makes 60° with XY",
    "A is 0 mm above the HP",
    "A is 15 mm in front of the VP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-10-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-10-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-10-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-10-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $\phi = 48.6^\circ$, $p'q' = 52.9\text{ mm}$, $pq = 69.3\text{ mm}$ (with $\text{HT} = 15\text{ mm}$ and $\text{VT} = 10\text{ mm}$ from $XY$).

#### Problem Q9: Only Three Data Given (Assuming Point Position)
**Given:** $\text{AB} = 70\text{ mm}$, $\theta = 40^\circ$, $\beta = 30^\circ$.   **Find:** Projections and inclination with VP ($\phi$).

> **Key idea.** When no endpoint distances from the HP and VP are given, assume end $A$ lies on both the HP and VP so that $a'$ and $a$ coincide directly on $XY$.

**Solution**
1. Place both $a'$ and $a$ at the same point on the $XY$ line.
2. From $a'$, draw the true length line $a'b_1' = 70\text{ mm}$ at $\theta = 40^\circ$ above $XY$, and draw the horizontal locus of $b'$ through $b_1'$ ($45\text{ mm}$ above $XY$).
3. Drop a vertical projector from $b_1'$ to meet $XY$ at $b_1$, giving the top view length $ab_1 = 53.6\text{ mm}$.
4. From $a$, draw the top view line at $\beta = 30^\circ$ below $XY$, and swing an arc with centre $a$ and radius $ab_1 = 53.6\text{ mm}$ downwards from $b_1$ to cut it at $b$ ($26.8\text{ mm}$ below $XY$).
5. Draw a horizontal locus line through $b$, and project $b$ vertically up to the locus of $b'$ at $b'$ to complete the front view $a'b' = 64.7\text{ mm}$.
6. With centre $a$ and radius $70\text{ mm}$ ($\text{TL}$), cut the horizontal locus of $b$ at $b_2$, join $ab_2$, and measure $\phi = 22.5^\circ$.

```line-projection
{
  "A": {
    "y": 0,
    "z": 0
  },
  "B": {
    "y": 26.812,
    "z": 44.995
  },
  "length": 70,
  "unit": "mm",
  "givens": [
    "True length AB = 70 mm",
    "Inclination to the HP, θ = 40°",
    "Top view makes 30° with XY",
    "A is 0 mm above the HP",
    "A is 0 mm in front of the VP"
  ],
  "printed": {
    "fvLength": 65,
    "tvLength": 54,
    "phi": 22
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-11-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-11-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-11-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-11-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $\phi = 22.5^\circ$, $a'b' = 64.7\text{ mm}$, $ab = 53.6\text{ mm}$ (with $\text{HT} = 0\text{ mm}$ and $\text{VT} = 0\text{ mm}$ from $XY$).

#### Problem Q204: Given Plan Length, Plan Inclination, and Endpoint Heights
**Given:** Top view $pq = 70\text{ mm}$, $\beta = 45^\circ$, $P$ is in VP and $15\text{ mm}$ above HP, $Q$ is $30\text{ mm}$ above HP in the first quadrant.   **Find:** True length, elevation length $p'q'$, $\theta$, $\phi$, and traces.

**Solution**
1. Draw $XY$, mark $p'$ $15\text{ mm}$ above $XY$ and $p$ on $XY$, and draw the horizontal locus of $q'$ $30\text{ mm}$ above $XY$.
2. From $p$, draw the top view $pq = 70\text{ mm}$ inclined at $\beta = 45^\circ$ below $XY$ to locate $q$ ($49.5\text{ mm}$ below $XY$), and draw the horizontal locus of $q$.
3. Project $q$ straight up to the $30\text{ mm}$ locus above $XY$ to locate $q'$, and join $p'q'$ to get the elevation length $p'q' = 51.7\text{ mm}$.
4. With centre $p$ and radius $pq = 70\text{ mm}$, swing $q$ up to the $XY$ line at $q_1$, project $q_1$ vertically up to the locus of $q'$ at $q_1'$, and join $p'q_1'$ to measure $\text{TL} = 71.6\text{ mm}$ and $\theta = 12.1^\circ$.
5. Since $q$ already lies on its locus and $p'$ to $q'$ can be un-rotated (or use $\text{TL} = 71.6\text{ mm}$ from $p$ to cut the locus of $q$ at $q_2$), measure the true inclination with VP as $\phi = 43.7^\circ$.
6. Since $p$ is on $XY$, $p'$ is the vertical trace ($\text{VT} = 15\text{ mm}$ from $XY$); extend $p'q'$ back to $XY$ and project to the extended line $qp$ to find $\text{HT} = 49.5\text{ mm}$ from $XY$.

```line-projection
{
  "A": {
    "y": 0,
    "z": 15
  },
  "B": {
    "y": 49.497,
    "z": 30
  },
  "length": 71.589,
  "unit": "mm",
  "givens": [
    "Top view ab = 70 mm",
    "Top view makes 45° with XY",
    "A is 0 mm in front of the VP",
    "A is 15 mm above the HP",
    "B is 30 mm above the HP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-12-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-12-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-12-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-12-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

> **Figure: Worked solution step 204 for projection of line PQ**
>
> Orthographic projection diagram labelled 204 showing line PQ with reference line xy. Point p(v) lies on the xy line, and p'(VT) is 15 mm above the xy line on the same vertical projector. Locus of q' and q1' is a horizontal line 30 mm above xy. The top view pq has length 70 mm and is inclined at beta = 45 degrees below xy, ending at q (which coincides with q2). An arc goes from q(q2) up to q1 on the xy line (with upward arrow), and a vertical projector goes from q1 up to q1' on the 30 mm locus (with upward arrow), giving true length p'q1'. A vertical projector goes from q up to q' on the 30 mm locus (with upward arrow), giving front view p'q'. Extending p'q' backwards to the left meets the xy line at h'. Extending the top view pq backwards above the xy line meets the vertical projector through h' at HT above xy. Box 'GIVEN': [1] TV - 70mm, [2] beta - 45°, [3] P - in VP, [4] P - 15 aHP, [5] Q - 30 aHP. Box 'ANSWERS': [1] p'q' - 52mm, [2] TL - 72mm, [3] phi - 44°, [4] theta - 12°, [5] h'-HT - 49mm, [6] v-VT - 15mm.

**Answer:** $\text{TL} = 71.6\text{ mm}$, elevation $p'q' = 51.7\text{ mm}$, $\theta = 12.1^\circ$, $\phi = 43.7^\circ$, $\text{HT} = 49.5\text{ mm}$ from $XY$, $\text{VT} = 15\text{ mm}$ from $XY$.

#### Problem Q10: Given True Length and Both View Lengths
**Given:** $\text{AB} = 75\text{ mm}$, top view $ab = 65\text{ mm}$, front view $a'b' = 50\text{ mm}$, $A$ is on both HP and VP.   **Find:** Projections, $\theta$, and $\phi$.

**Solution**
1. Mark $a'$ and $a$ at the same point on the $XY$ line.
2. Along $XY$, mark $b_1$ at distance $ab_1 = 65\text{ mm}$ (top view length) from $a$, and draw a vertical projector upwards from $b_1$.
3. With centre $a'$ and radius $75\text{ mm}$ ($\text{TL}$), cut the vertical projector from $b_1$ at $b_1'$ ($37.4\text{ mm}$ above $XY$); draw the horizontal locus of $b'$ through $b_1'$ and measure $\theta = 29.9^\circ$.
4. With centre $a'$ and front view radius $a'b' = 50\text{ mm}$, cut the locus of $b'$ at $b'$ and join $a'b'$.
5. Project $b'$ straight down below $XY$, and swing an arc with centre $a$ and radius $65\text{ mm}$ from $b_1$ downwards to intersect this projector at $b$ ($55.9\text{ mm}$ below $XY$); join $ab$ and draw the horizontal locus of $b$.
6. With centre $a$ and radius $75\text{ mm}$ ($\text{TL}$), cut the locus of $b$ at $b_2$, join $ab_2$, and measure $\phi = 48.2^\circ$.

```line-projection
{
  "A": {
    "y": 0,
    "z": 0
  },
  "B": {
    "y": 55.902,
    "z": 37.417
  },
  "length": 75,
  "unit": "mm",
  "givens": [
    "True length AB = 75 mm",
    "Top view ab = 65 mm",
    "Front view a′b′ = 50 mm",
    "A is 0 mm above the HP",
    "A is 0 mm in front of the VP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-13-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-13-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-13-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-13-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $\theta = 29.9^\circ$, $\phi = 48.2^\circ$ (with $B$ $37.4\text{ mm}$ above HP and $55.9\text{ mm}$ in front of VP, $\text{HT} = 0\text{ mm}$, $\text{VT} = 0\text{ mm}$).

#### Problem Q193: Given Both View Lengths and Front View Inclination $\alpha$
**Given:** Front view $p'q' = 50\text{ mm}$, top view $pq = 65\text{ mm}$, $\alpha = 45^\circ$, $P$ is on HP and $20\text{ mm}$ in front of VP.   **Find:** True length $\text{PQ}$, $\theta$, $\phi$, and traces.

**Solution**
1. Draw $XY$ and mark $p'$ on $XY$ and $p$ $20\text{ mm}$ below $XY$ on a vertical projector.
2. From $p'$, draw the front view $p'q' = 50\text{ mm}$ inclined at $\alpha = 45^\circ$ above $XY$, and draw the horizontal locus of $q'$ through $q'$ ($35.4\text{ mm}$ above $XY$).
3. Drop a vertical projector from $q'$ below $XY$; with centre $p$ and radius $pq = 65\text{ mm}$, cut this projector at $q$ ($74.5\text{ mm}$ below $XY$) to get the top view $pq$ and the horizontal locus of $q$.
4. With centre $p$ and radius $65\text{ mm}$, swing $q$ up to the horizontal line through $p$ at $q_1$, project $q_1$ up to the locus of $q'$ at $q_2'$, and join $p'q_2'$ to measure $\text{TL} = 74\text{ mm}$ and $\theta = 28.5^\circ$.
5. With centre $p$ and radius $\text{TL} = 74\text{ mm}$, cut the horizontal locus of $q$ at $q_2$, join $pq_2$, and measure $\phi = 47.5^\circ$.
6. Since $p'$ is on $XY$, $p$ is the horizontal trace ($\text{HT} = 20\text{ mm}$ from $XY$); extend $qp$ to $XY$ and project vertically to the extended line $q'p'$ to locate $\text{VT} = 13\text{ mm}$ from $XY$.

```line-projection
{
  "A": {
    "y": 20,
    "z": 0
  },
  "B": {
    "y": 74.544,
    "z": 35.355
  },
  "length": 73.993,
  "unit": "mm",
  "givens": [
    "Front view a′b′ = 50 mm",
    "Top view ab = 65 mm",
    "A is 0 mm above the HP",
    "A is 20 mm in front of the VP",
    "Front view makes 45° with XY"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-14-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-14-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-14-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-14-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

> **Figure: Projection of line PQ (solution step 193)**
>
> Orthographic projection of line PQ with reference line xy. Point p' is on the xy line. Point p is 20 mm below xy. Front view p'q' has length 50 mm and makes an angle alpha = 45 degrees with xy. Top view pq has length 65 mm. Point q is projected up to the xy line to get q1', and rotated around p' to the locus of q' to get q2', giving the true length in the front view p'q2' inclined at theta to xy. Point q' is projected down to the horizontal line through p, and rotated around p to the locus of q to get q1, giving the true length in the top view pq1 (labelled TL) inclined at phi to the horizontal. Box '193'. Box 'GIVEN': [1] P - on HP, [2] P - 20 fVP, [3] alpha - 45 deg, [4] FV - 50mm, [5] TV - 65mm. Box 'ANSWERS': [1] TL - 74mm, [2] theta - 29 deg, [3] phi - 48 deg.

**Answer:** $\text{TL} = 74\text{ mm}$, $\theta = 28.5^\circ$, $\phi = 47.5^\circ$, $\text{HT} = 20\text{ mm}$ from $XY$, $\text{VT} = 13\text{ mm}$ from $XY$.

#### Problem Q11: End B in the Second Quadrant Equidistant from HP and VP
**Given:** $A$ is $15\text{ mm}$ above HP and $25\text{ mm}$ in front of VP, $\theta = 20^\circ$, top view $ab = 80\text{ mm}$, $B$ is in the second quadrant equidistant from HP and VP.   **Find:** Projections and inclination with VP ($\phi$).

> **Watch out.** Because $B$ is in the second quadrant and equidistant from both planes, both $b'$ and $b$ lie above $XY$ on the exact same horizontal locus line.

**Solution**
1. Draw $XY$ and mark $a'$ $15\text{ mm}$ above $XY$ and $a$ $25\text{ mm}$ below $XY$ on a vertical projector.
2. From $a$, draw a horizontal segment $ab_1 = 80\text{ mm}$ (the given top view length) to the right, and erect a vertical projector upwards from $b_1$.
3. From $a'$, draw a line inclined at $\theta = 20^\circ$ above the horizontal to intersect the vertical projector from $b_1$ at $b_1'$; this gives the true length $a'b_1'$ and the horizontal locus of $b'$ above $XY$.
4. Because $B$ is in the second quadrant and equidistant from HP and VP, the locus of $b'$ is also the locus of $b$; with centre $a$ and radius $ab_1 = 80\text{ mm}$, swing an arc counterclockwise (upwards above $XY$) from $b_1$ to cut this shared horizontal locus line at $b$, and join $ab$.
5. Since $b$ and $b'$ lie on the same horizontal line and the same vertical projector, $b'$ coincides with $b$; join $a'b'$ to complete the front view.
6. With centre $a$ and radius equal to the true length $a'b_1'$, cut the shared horizontal locus line above $XY$ at $b_2$, join $ab_2$, and measure the angle $\phi$ with the horizontal.

> **Figure: Projection of line AB for Q11**
>
> Problem Q11: Line AB with end A 25 mm in front of VP and 15 mm above HP, inclined at theta = 20 degrees to HP, top view length 80 mm, and end B in the second quadrant equidistant from HP and VP (so B.z > 0, B.y < 0, and B.z = -B.y).

> **Figure: Step 11.1 of projection of straight line AB**
>
> Drawing labelled 11.1 showing the initial step of constructing the projections of line AB. A horizontal reference line XY is drawn with labels 'x' on the left and 'y' on the right. Point a' is located 15 mm above the XY line, and point a is located 25 mm below the XY line on the same vertical projector (dimensioned 15 and 25 on the left). From a, a horizontal line ab1 of length 80 mm (dimensioned 80 at the bottom) is drawn parallel to XY. From a', a line a'b1' is drawn inclined at 20° to the horizontal. A vertical projector is drawn upward from b1 to meet the inclined line from a' at b1', with a horizontal locus line passing through b1'. Beside the drawing: GIVEN box: [1] TV - 80mm, [2] A - 15 aHP, [3] A - 25 fVP, [4] θ - 20°, [5] b & b' - on same locus. ANSWERS box: [1] TL - 85mm, [2] a'b' - 49mm, [3] φ - 55°. Text below boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Step 11.2 of projection of straight line AB**
>
> Drawing labelled 11.2 showing the completed projections of line AB. Building upon step 11.1, with a' 15 mm above XY, a 25 mm below XY, horizontal line ab1 = 80 mm, and line a'b1' at 20° to the horizontal meeting the vertical projector from b1 at b1'. With centre a and radius ab1 (80 mm), an arc is swung counterclockwise (upward) from b1 to intersect the horizontal locus line through b1' at point labelled b'b. The top view line ab and front view line a'b' both terminate at this coincided point b'b on the upper locus line. The angle between the horizontal line ab1 and the top view line ab is marked as φ. Beside the drawing: GIVEN box: [1] TV - 80mm, [2] A - 15 aHP, [3] A - 25 fVP, [4] θ - 20°, [5] b & b' - on same locus. ANSWERS box: [1] TL - 85mm, [2] a'b' - 49mm, [3] φ - 55°. Text below boxes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Step 11.3 of projection of line AB with given data and final answers**
>
> Engineering drawing labelled '11.3' showing the complete orthographic projection of a line AB. A horizontal reference line is labelled 'x' and 'y'. Point a' is 15 mm above the xy line, and point a is 25 mm below the xy line on the same vertical projector. From a, a horizontal segment a-b1 of length 80 mm extends to the right. A vertical projector goes up from b1 to intersect a line from a' inclined at 20 degrees to the horizontal, locating point b1' on the upper horizontal locus line. Note: the top view b and front view b' lie on the same upper horizontal locus line, denoted as 'b'b' at the intersection of the vertical projector of b/b' with the upper locus line. The front view line segment a'-b' and top view line segment a-b both terminate at this same point 'b'b' above the xy line. An arc centered at a goes from b1 upwards and leftwards to meet the upper locus line at point b2', and a line is drawn from a to b2' making an angle phi with the horizontal line a-b1. Beside the drawing are two boxes: 'GIVEN: [1] TV - 80mm, [2] A - 15 aHP, [3] A - 25 fVP, [4] \theta - 20^\circ, [5] b & b' - on same locus' and 'ANSWERS: [1] TL - 85mm, [2] a'b' - 49mm, [3] \phi - 55^\circ'. Below the boxes is text: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Projections $a'b'$ and $ab$ as constructed with $b$ and $b'$ coincident on the shared locus above $XY$, and inclination $\phi$ measured from $ab_2$.

#### Problem Q12: Given Front View Length and Distance Between End Projectors
**Given:** $A$ is $10\text{ mm}$ above HP and $15\text{ mm}$ in front of VP, $B$ is $40\text{ mm}$ in front of VP, front view $a'b' = 75\text{ mm}$, distance between end projectors $\text{EP} = 50\text{ mm}$.   **Find:** Projections, true length $\text{AB}$, $\theta$, and $\phi$.

**Solution**
1. Draw $XY$, mark $a'$ $10\text{ mm}$ above $XY$ and $a$ $15\text{ mm}$ below $XY$ on a vertical projector, and draw a second vertical projector for $B$ at a horizontal distance of $\text{EP} = 50\text{ mm}$ to the right.
2. Draw the horizontal locus of $b$ $40\text{ mm}$ below $XY$ to intersect the second vertical projector at $b$, and join $ab$ to get the top view $ab = 55.9\text{ mm}$.
3. With centre $a'$ and radius $a'b' = 75\text{ mm}$, cut the second vertical projector above $XY$ at $b'$ ($65.9\text{ mm}$ above $XY$); join $a'b'$ and draw the horizontal locus of $b'$.
4. With centre $a$ and radius $ab = 55.9\text{ mm}$, swing $b$ to the horizontal line through $a$ at $b_1$, project up to the locus of $b'$ at $b_1'$, and join $a'b_1'$ to measure $\text{TL} = 79.1\text{ mm}$ and $\theta = 45^\circ$.
5. With centre $a'$ and radius $a'b' = 75\text{ mm}$, swing $b'$ to the horizontal line through $a'$ at $b_2'$, project down to the locus of $b$ at $b_2$, and join $ab_2$ to measure $\phi = 18.4^\circ$.

```line-projection
{
  "A": {
    "y": 15,
    "z": 10
  },
  "B": {
    "y": 40,
    "z": 65.902
  },
  "length": 79.057,
  "unit": "mm",
  "givens": [
    "A is 10 mm above the HP",
    "A is 15 mm in front of the VP",
    "B is 40 mm in front of the VP",
    "Front view a′b′ = 75 mm",
    "Distance between the end projectors = 50 mm"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-15-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-15-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-15-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-15-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $\text{TL} = 79.1\text{ mm}$, $ab = 55.9\text{ mm}$, $\theta = 45^\circ$, $\phi = 18.4^\circ$ (with $\text{HT} = 10.5\text{ mm}$ and $\text{VT} = 23.5\text{ mm}$ from $XY$).

### Quick recall
- **Top view length to Front view locus:** Lay off $ab_1 = \text{TV}$ horizontally from $a$, project vertically up to meet either $\text{TL}$ or the $\theta$-line from $a'$ at $b_1'$, and draw the horizontal locus of $b'$ through $b_1'$.
- **Apparent angle first:** Whenever $\alpha$ or $\beta$ is given, you are drawing the actual foreshortened view ($a'b'$ or $ab$), never the true length line.
- **Missing point coordinates:** Place $a'$ and $a$ together on $XY$ ($0\text{ mm}$ from HP, $0\text{ mm}$ from VP) so all rotations pivot directly from the reference line.
- **Second quadrant equidistant:** Both views of the endpoint lie above $XY$ at equal height, so $b$ and $b'$ coincide at the intersection of their shared horizontal locus and common vertical projector.

<!-- page 5 | Line Rotation Method: Midpoint and Endpoint-on-Plane Constraints -->

## Line Rotation Method: Midpoint and Endpoint-on-Plane Constraints

### What you need
- **Midpoint division:** The midpoint $M$ bisects the true length ($AM = MB = \frac{1}{2}\text{TL}$), the front view ($a'm' = m'b' = \frac{1}{2}\text{FV}$), and the top view ($am = mb = \frac{1}{2}\text{TV}$).
- **True angles at the midpoint:** The rotated true-length lines through $m'$ and $m$ make the same true inclinations $\theta$ with HP and $\phi$ with VP as the full line.
- **Endpoint on HP:** Its elevation is zero, so its front view ($a'$) lies directly on the $XY$ reference line.
- **Endpoint on VP:** Its distance from VP is zero, so its top view ($b$) lies directly on the $XY$ reference line.
- **Projector alignment:** $a'$ and $a$ share a vertical projector; $b'$ and $b$ share a vertical projector; $m'$ and $m$ share a vertical projector.

### The method
1. **For midpoint problems:** Locate $m'$ and $m$ on a single vertical projector using the given distances from HP and VP.
2. Construct half-views or half-true-lengths from $m'$ and $m$ symmetrically in both directions to establish the horizontal loci of the endpoints $A$ and $B$.
3. Rotate or project between the views using $m'$ and $m$ as pivot centers to lock in $a'b'$ and $ab$.
4. **For endpoints on reference planes:** Place the known view on $XY$ (e.g., $a'$ on $XY$ if $A$ is in HP; $b$ on $XY$ if $B$ is in VP).
5. Step off the known true lengths, angles, or view lengths from the point on $XY$ to establish the horizontal loci for the opposite end, then project and swing arcs to complete both views.

### Problems

#### Problem 21: Midpoint Position, True Length, and True Inclinations
**Given:** Midpoint $M$ is $40\text{ mm}$ above HP and $50\text{ mm}$ in front of VP; true length $AB = 70\text{ mm}$; inclinations $\theta = 45^\circ$ to HP and $\phi = 30^\circ$ to VP.   **Find:** The projections of line $AB$ ($a'b'$ and $ab$).

**Solution**
1. Draw the reference line $XY$ and a vertical projector; mark $m'$ $40\text{ mm}$ above $XY$ and $m$ $50\text{ mm}$ below $XY$.
2. Through $m'$, draw a line inclined at $\theta = 45^\circ$ to $XY$ and step off $35\text{ mm}$ ($\frac{1}{2}\text{TL}$) on both sides of $m'$ to get $a_1'$ ($15.3\text{ mm}$ above HP) and $b_1'$ ($64.7\text{ mm}$ above HP).
3. Draw horizontal locus lines through $a_1'$ and $b_1'$ for the front view endpoints $a'$ and $b'$.
4. Through $m$, draw a line inclined at $\phi = 30^\circ$ to $XY$ and step off $35\text{ mm}$ on both sides of $m$ to get $a_2$ ($32.5\text{ mm}$ in front of VP) and $b_2$ ($67.5\text{ mm}$ in front of VP).
5. Draw horizontal locus lines through $a_2$ and $b_2$ for the top view endpoints $a$ and $b$.
6. Project $a_1'$ and $b_1'$ vertically to the horizontal line through $m$ and swing arcs with center $m$ to cut the top view loci at $a$ and $b$; join $ab$ ($49.5\text{ mm}$).
7. Project $a$ and $b$ vertically up to the front view loci to locate $a'$ and $b'$; join $a'b'$ ($60.6\text{ mm}$).

```line-projection
{
  "A": {
    "y": 32.5,
    "z": 15.251
  },
  "B": {
    "y": 67.5,
    "z": 64.749
  },
  "length": 70,
  "unit": "mm",
  "givens": [
    "Mid-point is 40 mm above the HP",
    "Mid-point is 50 mm in front of the VP",
    "True length AB = 70 mm",
    "Inclination to the HP, θ = 45°",
    "Inclination to the VP, φ = 30°"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-16-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-16-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-16-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-16-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** Front view $a'b' = 60.6\text{ mm}$, top view $ab = 49.5\text{ mm}$ (End $A$ is $15.3\text{ mm}$ above HP, $32.5\text{ mm}$ in front of VP; End $B$ is $64.7\text{ mm}$ above HP, $67.5\text{ mm}$ in front of VP; $\text{HT} = 21.7\text{ mm}$, $\text{VT} = 30.7\text{ mm}$ from $XY$).

#### Problem 20: Midpoint Position, View Lengths, and One Endpoint Distance
**Given:** End $A$ is $20\text{ mm}$ in front of VP; midpoint $M$ is $45\text{ mm}$ above HP and $50\text{ mm}$ in front of VP; front view $a'b' = 90\text{ mm}$; top view $ab = 100\text{ mm}$.   **Find:** Projections of the line, true length $AB$, and inclinations $\theta$ and $\phi$.

**Solution**
1. Draw $XY$, mark $m'$ $45\text{ mm}$ above $XY$ and $m$ $50\text{ mm}$ below $XY$ on a common vertical projector, and draw a horizontal locus for $a$ $20\text{ mm}$ below $XY$.
2. With center $m$ and radius $50\text{ mm}$ ($\frac{1}{2}\text{TV}$), cut the locus of $a$ to locate $a$; extend line $am$ straight through $m$ by $50\text{ mm}$ to locate $b$ ($80\text{ mm}$ below $XY$), completing top view $ab = 100\text{ mm}$.
3. Draw vertical projectors through $a$ and $b$ upwards into the front view.
4. With center $m'$ and radius $45\text{ mm}$ ($\frac{1}{2}\text{FV}$), swing arcs to cut the vertical projectors of $a$ and $b$ at $a'$ ($24.4\text{ mm}$ above $XY$) and $b'$ ($65.6\text{ mm}$ above $XY$); join $a'b' = 90\text{ mm}$.
5. Draw horizontal locus lines through $a'$ and $b'$, and through $a$ and $b$.
6. With center $a$ and radius $ab$ ($100\text{ mm}$), rotate $b$ to the horizontal line through $a$, project vertically up to the horizontal locus of $b'$ to get $b_1'$, and join $a'b_1'$ to measure $\text{TL} = 108.2\text{ mm}$ and $\theta = 22.4^\circ$.
7. With center $a'$ and radius $a'b'$ ($90\text{ mm}$), rotate $b'$ to the horizontal line through $a'$, project vertically down to the horizontal locus of $b$ to get $b_2$, and join $ab_2$ to measure $\phi = 33.7^\circ$.

> **Watch out.** Because the front view length is $90\text{ mm}$, the half-length from $m'$ is $45\text{ mm}$ (not $50\text{ mm}$ as in the top view).

```line-projection
{
  "A": {
    "y": 20,
    "z": 24.384
  },
  "B": {
    "y": 80,
    "z": 65.616
  },
  "length": 108.167,
  "unit": "mm",
  "givens": [
    "A is 20 mm in front of the VP",
    "Mid-point is 50 mm in front of the VP",
    "Mid-point is 45 mm above the HP",
    "Front view a′b′ = 90 mm",
    "Top view ab = 100 mm"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-17-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-17-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-17-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-17-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** True length $AB = 108.2\text{ mm}$, $\theta = 22.4^\circ$, $\phi = 33.7^\circ$ (End $A$ is $24.4\text{ mm}$ above HP; End $B$ is $80\text{ mm}$ in front of VP and $65.6\text{ mm}$ above HP; $\text{HT} = 15.5\text{ mm}$, $\text{VT} = 10.6\text{ mm}$ from $XY$).

#### Problem 18: Endpoints on HP and VP with True Length and True Angles
**Given:** True length $AB = 100\text{ mm}$, $\theta = 45^\circ$ to HP, $\phi = 30^\circ$ to VP; end $A$ is on the ground (HP) and end $B$ is in the VP.   **Find:** The projections of line $AB$ and the height of point $B$ above HP.

**Solution**
1. Since end $A$ is on HP, mark $a'$ directly on $XY$; from $a'$, draw the true length $a'b_1' = 100\text{ mm}$ at $\theta = 45^\circ$ above $XY$.
2. Draw a horizontal locus line through $b_1'$ ($70.7\text{ mm}$ above $XY$) to fix the height of $b'$ above HP.
3. Project $b_1'$ vertically down to $XY$ to find the top view length $ab_1 = 70.7\text{ mm}$.
4. From $a'$ on $XY$, draw a line inclined at $\phi = 30^\circ$ and step off $100\text{ mm}$ ($	ext{TL}$) to determine the vertical distance of $A$ from VP ($50\text{ mm}$) and the front view length ($86.6\text{ mm}$).
5. Mark top view $a$ $50\text{ mm}$ from $XY$ on the vertical projector of $a'$, and draw the horizontal locus of $a$.
6. Since $B$ is in VP, its top view $b$ lies on $XY$; with center $a$ and radius $70.7\text{ mm}$ ($	ext{TV}$), cut $XY$ at $b$ and join $ab$.
7. Project $b$ vertically up to the locus of $b'$ to locate $b'$, and join $a'b'$ ($86.6\text{ mm}$).

> **Key idea.** When one end is in HP and the other is in VP, $a'$ and $b$ both lie on the $XY$ line.

```line-projection
{
  "A": {
    "y": -50,
    "z": 0
  },
  "B": {
    "y": 0,
    "z": 70.711
  },
  "length": 100,
  "unit": "mm",
  "givens": [
    "True length AB = 100 mm",
    "Inclination to the HP, θ = 45°",
    "Inclination to the VP, φ = 30°",
    "A is 0 mm above the HP",
    "B is 0 mm in front of the VP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-18-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-18-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-18-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-18-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** Height of point $B$ above HP $= 70.7\text{ mm}$; front view $a'b' = 86.6\text{ mm}$, top view $ab = 70.7\text{ mm}$ ($	ext{HT} = 50\text{ mm}$, $\text{VT} = 70.7\text{ mm}$ from $XY$).

#### Problem 25: Endpoints on HP and VP with True Length and View Lengths
**Given:** True length $AB = 65\text{ mm}$, front view $a'b' = 60\text{ mm}$, top view $ab = 50\text{ mm}$; lower end $A$ is in HP, upper end $B$ is in VP.   **Find:** The projections of line $AB$ and its true inclinations $\theta$ and $\phi$ with the reference planes.

**Solution**
1. Mark $a'$ on $XY$ (since $A$ is in HP) and step off $a'b_1 = 50\text{ mm}$ ($	ext{TV}$) along $XY$.
2. Erect a vertical line from $b_1$, and with center $a'$ and radius $65\text{ mm}$ ($	ext{TL}$), cut this vertical at $b_1'$; draw a horizontal locus through $b_1'$ ($41.5\text{ mm}$ above $XY$) and measure $\theta = 39.7^\circ$.
3. With center $a'$ and radius $60\text{ mm}$ ($	ext{FV}$), cut the locus of $b_1'$ at $b'$, and join front view $a'b'$.
4. Drop a vertical projector from $b'$ to $XY$ to locate the top view $b$ directly on $XY$ (since $B$ is in VP).
5. With center $b$ and radius $50\text{ mm}$ ($	ext{TV}$), cut the vertical projector through $a'$ below $XY$ at $a$ ($25\text{ mm}$ below $XY$), and join top view $ab$.
6. From $b$ on $XY$, step off $60\text{ mm}$ ($	ext{FV}$) along $XY$ and project to the horizontal locus of $a$, or swing $	ext{TL} = 65\text{ mm}$ from $b$ to the locus of $a$, to measure the true inclination $\phi = 22.6^\circ$.

> **Figure: Worked solution step labelled 17 for a line projection problem**
>
> Orthographic projection diagram labelled 17 at the bottom right. It has two perpendicular reference lines: horizontal line $x_1 y_1$ and vertical line $y_2 x_2$ intersecting at point $a'(b)$. Above $x_1 y_1$, along the vertical line $y_2 x_2$, is the front view segment from $a'(b)$ up to $b'(B)$. From $b'(B)$, a true length line of 80 mm extends down and left to point $a_1 A$ on the horizontal line $x_1 y_1$. The angle between this 80 mm line and the horizontal line $x_1 y_1$ at $a_1 A$ is $30^\circ$. The angle between this 80 mm line and the vertical line $y_2 x_2$ at $b'(B)$ is $60^\circ$. Below $x_1 y_1$, an arc with center $a'(b)$ is swung from $a_1 A$ counter-clockwise down to meet the vertical line $y_2 x_2$ at point $a$. The segment along $y_2 x_2$ from $a'(b)$ down to $a$ represents the top view $ab$. Right of the drawing are two boxes and text: 'GIVEN: [1] AB - 80mm, [2] A - in HP, [3] B - in VP, [4] $\theta$ - $30^\circ$, [5] $\phi$ - $60^\circ$'; 'ANSWERS: [1] $a'b'$ - 40mm, [2] $ab$ - 69mm'; 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'; and '17' in a square box.

```line-projection
{
  "A": {
    "y": 25,
    "z": 0
  },
  "B": {
    "y": 0,
    "z": 41.533
  },
  "length": 65,
  "unit": "mm",
  "givens": [
    "True length AB = 65 mm",
    "Front view a′b′ = 60 mm",
    "Top view ab = 50 mm",
    "A is 0 mm above the HP",
    "B is 0 mm in front of the VP"
  ],
  "printed": {
    "theta": 40,
    "phi": 23
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-19-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-19-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-19-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-19-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $\theta = 39.7^\circ$ (printed: $40^\circ$), $\phi = 22.6^\circ$ (printed: $23^\circ$); End $A$ is $25\text{ mm}$ in front of VP, End $B$ is $41.5\text{ mm}$ above HP ($	ext{HT} = 25\text{ mm}$, $\text{VT} = 41.5\text{ mm}$ from $XY$).

### Quick recall
- Because $M$ is the exact center of $AB$, $m'$ and $m$ always bisect $a'b'$, $ab$, and the rotated true-length segments.
- An endpoint resting on HP always has its front view on $XY$; an endpoint resting on VP always has its top view on $XY$.
- If $a'$ lies on $XY$, stepping off the top view length along $XY$ and intersecting the vertical with the true length immediately yields the locus of $b'$ and angle $\theta$.
- Symmetrical rotation about $m'$ and $m$ follows the exact same horizontal-locus and vertical-projection rules as rotating about an endpoint.

<!-- page 6 | Plane Rotation (Auxiliary/Trapezoidal) Method: End Projectors -->

## Plane Rotation (Auxiliary/Trapezoidal) Method: End Projectors

### What you need
- **Distance between End Projectors ($EP$):** The horizontal distance measured parallel to the $XY$ line between the vertical projector of end $A$ ($a'a$) and the vertical projector of end $B$ ($b'b$).
- **Trapezoidal construction on Top View ($ab$):** Erect perpendiculars to $ab$ at $a$ and $b$ with lengths equal to the distances of $A$ and $B$ from the HP ($a'$-to-$XY$ and $b'$-to-$XY$). Joining their tips gives the True Length ($TL$) and the inclination with the HP ($\theta$).
- **Trapezoidal construction on Front View ($a'b'$):** Erect perpendiculars to $a'b'$ at $a'$ and $b'$ with lengths equal to the distances of $A$ and $B$ from the VP ($a$-to-$XY$ and $b$-to-$XY$). Joining their tips gives the True Length ($TL$) and the inclination with the VP ($\phi$).
- **Direction (algebraic sign) of perpendiculars:** Draw both perpendiculars on the *same side* of the view if both endpoints are on the same side of the reference plane, or on *opposite sides* if the endpoints lie on opposite sides of the reference plane (view crosses $XY$).
- **Endpoints on a reference plane:** If an endpoint lies directly in the HP, it is the Horizontal Trace ($HT$); if an endpoint lies directly in the VP, it is the Vertical Trace ($VT$).

### The method
1. Draw the $XY$ line and two vertical end projectors separated horizontally by the given distance $EP$.
2. Mark $a'$ and $a$ on the left projector, and $b'$ and $b$ on the right projector according to their quadrant positions; join $a'b'$ (front view) and $ab$ (top view).
3. At $a$ and $b$, erect perpendiculars to $ab$ equal to the vertical distances of $a'$ and $b'$ from $XY$ (on the same side of $ab$ if $a'$ and $b'$ are on the same side of $XY$, or on opposite sides if they are on opposite sides).
4. Join the free ends of these perpendiculars to measure the true length $TL$ and the true inclination $\theta$ with $ab$.
5. At $a'$ and $b'$, erect perpendiculars to $a'b'$ equal to the vertical distances of $a$ and $b$ from $XY$ (following the same-side or opposite-side rule) and join their free ends to check $TL$ and measure $\phi$ with $a'b'$.
6. Locate $h'$ where $a'b'$ (or its extension) meets $XY$ and project vertically to $ab$ to find $HT$; locate $v$ where $ab$ (or its extension) meets $XY$ and project vertically to $a'b'$ to find $VT$.

### Problems

#### Problem 13: Line in the Third Quadrant Given End Projectors
**Given:** $A$ is $10\text{ mm}$ behind VP and $25\text{ mm}$ below HP; $B$ is $30\text{ mm}$ behind VP and $40\text{ mm}$ below HP; $EP = 50\text{ mm}$.   **Find:** Projections, $TL$, $\theta$, $\phi$, $HT$, and $VT$.

**Solution**
1. Draw the reference line $XY$ and two vertical end projectors $50\text{ mm}$ apart.
2. Both points are in the third quadrant (top view above $XY$, front view below $XY$): on the left projector, mark $a$ at $10\text{ mm}$ above $XY$ and $a'$ at $25\text{ mm}$ below $XY$.
3. On the right projector, mark $b$ at $30\text{ mm}$ above $XY$ and $b'$ at $40\text{ mm}$ below $XY$.
4. Join $a$ to $b$ to get the top view ($ab = 53.9\text{ mm}$) and join $a'$ to $b'$ to get the front view ($a'b' = 52.2\text{ mm}$).
5. Since both points are below HP, erect perpendiculars $aA = 25\text{ mm}$ and $bB = 40\text{ mm}$ on the same side of $ab$; join $AB$ to measure the true length $TL = 55.9\text{ mm}$ and the angle $\theta = 15.6^\circ$ between $ab$ and $AB$.
6. Since both points are behind VP, erect perpendiculars $a'A = 10\text{ mm}$ and $b'B = 30\text{ mm}$ on the same side of $a'b'$; join $AB$ to verify $TL = 55.9\text{ mm}$ and measure the angle $\phi = 21^\circ$ between $a'b'$ and $AB$.
7. Extend $a'b'$ to meet $XY$ at $h'$ and project a vertical line from $h'$ to meet the extended line $ab$ at $HT$, measuring $23.3\text{ mm}$ from $XY$.
8. Extend $ab$ to meet $XY$ at $v$ and project a vertical line from $v$ to meet the extended line $a'b'$ at $VT$, measuring $17.5\text{ mm}$ from $XY$.

```line-projection
{
  "A": {
    "y": -10,
    "z": -25
  },
  "B": {
    "y": -30,
    "z": -40
  },
  "length": 55.902,
  "unit": "mm",
  "givens": [
    "A is 10 mm behind the VP",
    "A is 25 mm below the HP",
    "B is 30 mm behind the VP",
    "B is 40 mm below the HP",
    "Distance between the end projectors = 50 mm"
  ],
  "printed": {
    "length": 56,
    "theta": 16,
    "phi": 21
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-20-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-20-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-20-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-20-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $TL = 55.9\text{ mm}$, $a'b' = 52.2\text{ mm}$, $ab = 53.9\text{ mm}$, $\theta = 15.6^\circ$, $\phi = 21^\circ$, $HT = 23.3\text{ mm}$ from $XY$, $VT = 17.5\text{ mm}$ from $XY$.

#### Problem 20 (Q15): Line in the First Quadrant Touching Both Reference Planes
**Given:** $A$ is in HP ($0\text{ mm}$ above HP) and $40\text{ mm}$ in front of VP; $B$ is in VP ($0\text{ mm}$ in front of VP) and $50\text{ mm}$ above HP; $EP = 70\text{ mm}$.   **Find:** Projections, $TL$, $\theta$, $\phi$, $HT$, and $VT$.

**Solution**
1. Draw $XY$ and two vertical end projectors $70\text{ mm}$ apart.
2. On the left projector, mark $a'$ on $XY$ ($0\text{ mm}$ above HP) and $a$ at $40\text{ mm}$ below $XY$ (in front of VP).
3. On the right projector, mark $b'$ at $50\text{ mm}$ above $XY$ (above HP) and $b$ on $XY$ ($0\text{ mm}$ in front of VP).
4. Join $a'b'$ to get the front view ($86\text{ mm}$) and $ab$ to get the top view ($80.6\text{ mm}$).
5. Since $A$ has zero distance from HP, erect a single perpendicular at $b$ to $ab$ of length $bB = 50\text{ mm}$; join $aB$ to forms a right triangle, giving $TL = 94.9\text{ mm}$ and inclination $\theta = 31.8^\circ$ with $ab$.
6. Since $B$ has zero distance from VP, erect a single perpendicular at $a'$ to $a'b'$ of length $a'A = 40\text{ mm}$; join $Ab'$ to verify $TL = 94.9\text{ mm}$ and measure inclination $\phi = 24.9^\circ$ with $a'b'$.
7. Because end $A$ is directly in the HP ($a'$ is $h'$ on $XY$), the top view $a$ is the Horizontal Trace $HT$, located $40\text{ mm}$ from $XY$; because end $B$ is directly in the VP ($b$ is $v$ on $XY$), the front view $b'$ is the Vertical Trace $VT$, located $50\text{ mm}$ from $XY$.

```line-projection
{
  "A": {
    "y": 40,
    "z": 0
  },
  "B": {
    "y": 0,
    "z": 50
  },
  "length": 94.868,
  "unit": "mm",
  "givens": [
    "A is 0 mm above the HP",
    "A is 40 mm in front of the VP",
    "B is 0 mm in front of the VP",
    "B is 50 mm above the HP",
    "Distance between the end projectors = 70 mm"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-21-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-21-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-21-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-21-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $TL = 94.9\text{ mm}$, $a'b' = 86\text{ mm}$, $ab = 80.6\text{ mm}$, $\theta = 31.8^\circ$, $\phi = 24.9^\circ$, $HT = 40\text{ mm}$ from $XY$, $VT = 50\text{ mm}$ from $XY$.

#### Problem 21 (Q16): Line in the Third Quadrant Touching Both Reference Planes
**Given:** $A$ is in HP ($0\text{ mm}$ above HP) and $25\text{ mm}$ behind VP; $B$ is in VP ($0\text{ mm}$ in front of VP) and $50\text{ mm}$ below HP; $EP = 75\text{ mm}$.   **Find:** Projections, $TL$, $\theta$, $\phi$, $HT$, and $VT$.

**Solution**
1. Draw $XY$ and two vertical end projectors $75\text{ mm}$ apart.
2. On the left projector, mark $a'$ (also $h'$) on $XY$ and $a$ at $25\text{ mm}$ above $XY$ (behind VP).
3. On the right projector, mark $b'$ at $50\text{ mm}$ below $XY$ (below HP) and $b$ (also $v$) on $XY$; join $a'b'$ ($90.1\text{ mm}$) and $ab$ ($79.1\text{ mm}$).
4. Erect a perpendicular $bB = 50\text{ mm}$ at $b$ to the top view $ab$; join $aB$ to measure $TL = 93.5\text{ mm}$ and $\theta = 32.3^\circ$ between $ab$ and $aB$.
5. Erect a perpendicular $a'A = 25\text{ mm}$ at $a'$ to the front view $a'b'$; join $Ab'$ to verify $TL = 93.5\text{ mm}$ and measure $\phi = 15.5^\circ$ between $a'b'$ and $Ab'$.
6. Since $a'$ lies on $XY$, mark $HT$ directly at $a$ ($25\text{ mm}$ from $XY$); since $b$ lies on $XY$, mark $VT$ directly at $b'$ ($50\text{ mm}$ from $XY$).

```line-projection
{
  "A": {
    "y": -25,
    "z": 0
  },
  "B": {
    "y": 0,
    "z": -50
  },
  "length": 93.541,
  "unit": "mm",
  "givens": [
    "A is 0 mm above the HP",
    "A is 25 mm behind the VP",
    "B is 0 mm in front of the VP",
    "B is 50 mm below the HP",
    "Distance between the end projectors = 75 mm"
  ],
  "printed": {
    "length": 94,
    "fvLength": 90,
    "tvLength": 79,
    "theta": 32,
    "phi": 16,
    "htDistance": 25,
    "vtDistance": 50
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-22-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-22-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-22-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-22-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $TL = 93.5\text{ mm}$, $a'b' = 90.1\text{ mm}$, $ab = 79.1\text{ mm}$, $\theta = 32.3^\circ$, $\phi = 15.5^\circ$, $HT = 25\text{ mm}$ from $XY$, $VT = 50\text{ mm}$ from $XY$.

#### Problem 18 (Q14): Line Crossing from Third to First Quadrant
**Given:** $A$ is $25\text{ mm}$ below HP and $40\text{ mm}$ behind VP; $B$ is $50\text{ mm}$ above HP and $25\text{ mm}$ in front of VP; $EP = 55\text{ mm}$.   **Find:** Projections, $TL$, $\theta$, $\phi$, $HT$, and $VT$.

**Solution**
1. Draw $XY$ and two vertical end projectors $55\text{ mm}$ apart.
2. Point $A$ is in the third quadrant: on the left projector, mark $a$ at $40\text{ mm}$ above $XY$ and $a'$ at $25\text{ mm}$ below $XY$.
3. Point $B$ is in the first quadrant: on the right projector, mark $b'$ at $50\text{ mm}$ above $XY$ and $b$ at $25\text{ mm}$ below $XY$; join $a'b'$ ($93\text{ mm}$) and $ab$ ($85.1\text{ mm}$), both crossing $XY$.
4. Because $A$ is below HP and $B$ is above HP, erect perpendiculars to $ab$ on *opposite sides*: $aA = 25\text{ mm}$ on one side and $bB = 50\text{ mm}$ on the other side. Join $AB$ across $ab$ to measure $TL = 113.5\text{ mm}$ and $\theta = 41.4^\circ$.
5. Because $A$ is behind VP and $B$ is in front of VP, erect perpendiculars to $a'b'$ on *opposite sides*: $a'A = 40\text{ mm}$ on one side and $b'B = 25\text{ mm}$ on the other side. Join $AB$ across $a'b'$ to check $TL = 113.5\text{ mm}$ and measure $\phi = 34.9^\circ$.
6. Mark $h'$ where $a'b'$ intersects $XY$, and draw a vertical projector from $h'$ to intersect $ab$ at $HT$ ($18.3\text{ mm}$ from $XY$).
7. Mark $v$ where $ab$ intersects $XY$, and draw a vertical projector from $v$ to intersect $a'b'$ at $VT$ ($21.2\text{ mm}$ from $XY$).

> **Watch out.** When a line crosses from the first quadrant to the third quadrant, its endpoints lie on opposite sides of both HP and VP. You must draw the auxiliary perpendiculars on *opposite* sides of $ab$ (and $a'b'$), so the true-length line intersects the view between the endpoints.

```line-projection
{
  "A": {
    "y": -40,
    "z": -25
  },
  "B": {
    "y": 25,
    "z": 50
  },
  "length": 113.468,
  "unit": "mm",
  "givens": [
    "A is 25 mm below the HP",
    "A is 40 mm behind the VP",
    "B is 50 mm above the HP",
    "B is 25 mm in front of the VP",
    "Distance between the end projectors = 55 mm"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-23-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-23-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-23-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-23-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $TL = 113.5\text{ mm}$, $a'b' = 93\text{ mm}$, $ab = 85.1\text{ mm}$, $\theta = 41.4^\circ$, $\phi = 34.9^\circ$, $HT = 18.3\text{ mm}$ from $XY$, $VT = 21.2\text{ mm}$ from $XY$.

#### Problem 19 (Q207): Symmetrical Line Crossing from First to Third Quadrant
**Given:** $A$ is $40\text{ mm}$ above HP and $20\text{ mm}$ in front of VP; $B$ is $30\text{ mm}$ below HP and $50\text{ mm}$ behind VP; $EP = 100\text{ mm}$.   **Find:** Projections, $TL$, $\theta$, $\phi$, $HT$, and $VT$.

**Solution**
1. Draw $XY$ and two vertical end projectors $100\text{ mm}$ apart.
2. On the left projector (first quadrant), mark $a'$ at $40\text{ mm}$ above $XY$ and $a$ at $20\text{ mm}$ below $XY$; on the right projector (third quadrant), mark $b$ at $50\text{ mm}$ above $XY$ and $b'$ at $30\text{ mm}$ below $XY$.
3. Join $a'b'$ ($122.1\text{ mm}$) and $ab$ ($122.1\text{ mm}$), noting where $a'b'$ crosses $XY$ at $h'$ and where $ab$ crosses $XY$ at $v$.
4. Erect perpendiculars to $ab$ on opposite sides: $aA = 40\text{ mm}$ and $bB = 30\text{ mm}$; join $AB$ across $ab$ to find $TL = 140.7\text{ mm}$ and $\theta = 29.8^\circ$.
5. Erect perpendiculars to $a'b'$ on opposite sides: $a'A = 20\text{ mm}$ and $b'B = 50\text{ mm}$; join $AB$ across $a'b'$ to confirm $TL = 140.7\text{ mm}$ and find $\phi = 29.8^\circ$.
6. Project vertically from $h'$ on $XY$ to intersect $ab$ at $HT$ ($20\text{ mm}$ from $XY$), and project vertically from $v$ on $XY$ to intersect $a'b'$ at $VT$ ($20\text{ mm}$ from $XY$).

```line-projection
{
  "A": {
    "y": 20,
    "z": 40
  },
  "B": {
    "y": -50,
    "z": -30
  },
  "length": 140.712,
  "unit": "mm",
  "givens": [
    "A is 40 mm above the HP",
    "A is 20 mm in front of the VP",
    "B is 30 mm below the HP",
    "B is 50 mm behind the VP",
    "Distance between the end projectors = 100 mm"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-24-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-24-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-24-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-24-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

> **Figure: Worked orthographic projection solution step 207**
>
> Orthographic projection diagram labelled 207. Horizontal reference line xy. Left end projector has point a' 40 mm above xy and point a 20 mm below xy. Right end projector is at a horizontal distance of 100 mm from the left projector, with point b 50 mm above xy and point b' 30 mm below xy. Front view segment a'b' and top view segment ab cross the xy line. On a'b', point h' is on xy; perpendicular to xy at h' meets ab at HT. On ab, point v is on xy; perpendicular to xy at v meets a'b' at VT. Using a trapezoid/rabatment construction: perpendiculars are erected to a'b' at a' and b' to locate A and B (giving true length AB and angle phi at a' between a'b' and AB), and perpendiculars are erected to ab at a and b to locate A and B (giving true length AB and angle theta at b between ab and AB). Box GIVEN: [1] A - 40 aHP, [2] A - 20 fVP, [3] B - 30 bHP, [4] B - 50 bVP, [5] EP - 100mm. Box ANSWERS: [1] TL - 141mm, [2] v-VT - 20mm, [3] h'-HT - 20mm, [4] phi - 30°, [5] theta - 30°.

**Answer:** $TL = 140.7\text{ mm}$, $a'b' = 122.1\text{ mm}$, $ab = 122.1\text{ mm}$, $\theta = 29.8^\circ$, $\phi = 29.8^\circ$, $HT = 20\text{ mm}$ from $XY$, $VT = 20\text{ mm}$ from $XY$.

### Quick recall
- When both endpoints are in the same quadrant, the auxiliary figure on $ab$ or $a'b'$ is a right trapezoid (perpendiculars on the same side).
- When endpoints lie on opposite sides of a reference plane, the perpendiculars go on opposite sides of the view, forming two right triangles meeting across the view.
- Perpendiculars on the **top view ($ab$)** always take lengths from the **front view** (distances from HP) and yield **$TL$ and $\theta$**.
- Perpendiculars on the **front view ($a'b'$)** always take lengths from the **top view** (distances from VP) and yield **$TL$ and $\phi$**.
- If an endpoint lies directly on the HP or VP, its distance from that plane is zero, reducing the trapezoid to a single right triangle and making that endpoint the trace.

<!-- page 7 | Lines in a Profile Plane (Complementary Inclinations) -->

## Lines in a Profile Plane (Complementary Inclinations)

### What you need
- **Profile plane condition:** A line lies in a profile plane (perpendicular to both HP and VP) when the sum of its true inclinations is $\theta + \phi = 90^\circ$, or when the distance between its end projectors is zero ($EP = 0$).
- **Collinear views:** Both the front view ($a'b'$) and the top view ($ab$) are vertical line segments lying on the exact same vertical projector ($
\alpha = \beta = 90^\circ$).
- **Side (profile) view:** Because the standard rotation method collapses onto a single vertical line, use a side view on an auxiliary vertical reference line $X_2Y_2$ (or rotate the profile plane onto VP/HP) to see the true length $TL$ and true angles $\theta$ and $\phi$ directly.
- **View length relations:** $a'b' = TL \sin\theta = TL \cos\phi$ and $ab = TL \cos\theta = TL \sin\phi$.
- **Traces in profile view:** The true-length line in the profile view crosses the HP axis at the Horizontal Trace ($HT$) and the VP axis at the Vertical Trace ($VT$).

> **Key idea.** Whenever $\theta + \phi = 90^\circ$, the end projectors coincide; solve the problem in the profile view where HP and VP appear as perpendicular axes.

### The method
1. Draw the horizontal reference line $XY$ and a single vertical projector for both ends $A$ and $B$.
2. Draw a perpendicular vertical reference line $X_2Y_2$ (representing the VP in the side view, while $XY$ represents the HP) or use their intersection as the origin for profile-plane rotation.
3. Plot the known distances of ends $A$ and $B$ from HP (above/below $XY$) and from VP (in front/behind $X_2Y_2$).
4. Construct the true-length line in the profile view using the given $TL$ and $\theta$ (with $XY$) or by joining the plotted profile points $a''$ and $b''$.
5. Project the vertical heights back to the main projector to get $a'b'$ and swing the horizontal VP distances to the main projector to get $ab$ (and $HT, VT$).

### Problems

#### Problem 17: Ladder problem in a profile plane
**Given:** $TL = 80\text{ mm}$; end $A$ is in HP ($0\text{ mm}$ above HP); end $B$ is in VP ($0\text{ mm}$ in front of VP); $\theta = 30^\circ$ to HP; $\phi = 60^\circ$ to VP.   **Find:** Projections $a'b'$ and $ab$, and traces $HT$ and $VT$.

**Solution**
1. Check the sum of inclinations: $\theta + \phi = 30^\circ + 60^\circ = 90^\circ$, so line $AB$ lies in a profile plane and shares a single vertical projector.
2. Draw the horizontal line $XY$ and a vertical projector intersecting $XY$ at origin $O$ (representing the profile view axes).
3. Since end $A$ is in HP and end $B$ is in VP, construct the right triangle of the ladder in the profile view: set a line of true length $TL = 80\text{ mm}$ inclined at $\theta = 30^\circ$ to the horizontal $XY$ axis (which automatically makes $\phi = 60^\circ$ with the vertical VP axis).
4. Measure the vertical height of $B$ above $XY$ along the projector to mark $b'$ at $40\text{ mm}$ above $XY$, and mark $a'$ on $XY$ ($0\text{ mm}$ above HP). Join $a'b'$ for the front view of length $40\text{ mm}$.
5. Measure the horizontal distance of $A$ from the VP axis ($69.3\text{ mm}$ behind VP) and rotate it onto the vertical projector above $XY$ to mark $a$ at $69.3\text{ mm}$ from $XY$, with $b$ on $XY$ ($0\text{ mm}$ from VP). Join $ab$ for the top view of length $69.3\text{ mm}$.
6. Since $A$ is in HP and $B$ is in VP, the Horizontal Trace $HT$ coincides with $a$ at $69.3\text{ mm}$ from $XY$, and the Vertical Trace $VT$ coincides with $b'$ at $40\text{ mm}$ from $XY$.

```line-projection
{
  "A": {
    "y": -69.282,
    "z": 0
  },
  "B": {
    "y": 0,
    "z": 40
  },
  "length": 80,
  "unit": "mm",
  "givens": [
    "True length AB = 80 mm",
    "A is 0 mm above the HP",
    "B is 0 mm in front of the VP",
    "Inclination to the HP, θ = 30°",
    "Inclination to the VP, φ = 60°"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-25-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-25-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-25-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-25-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

> **Watch out.** The statement does not specify the quadrant; taking $A$ behind VP and $B$ above HP places both $a'b'$ and $ab$ above $XY$ on the same projector.

**Answer:** Front view $a'b' = 40\text{ mm}$; top view $ab = 69.3\text{ mm}$; $HT = 69.3\text{ mm}$ from $XY$; $VT = 40\text{ mm}$ from $XY$.

#### Problem 37: Multi-quadrant line on a single projector
**Given:** $A$ and $B$ are on the same projector; $A$ is $25\text{ mm}$ below HP and $30\text{ mm}$ behind VP (third quadrant); $B$ is $50\text{ mm}$ above HP and $40\text{ mm}$ in front of VP (first quadrant).   **Find:** Projections $a'b'$ and $ab$, true length $TL$, true inclinations $\theta$ and $\phi$, and traces $HT$ and $VT$.

**Solution**
1. Draw the horizontal reference line $XY$ and a single vertical projector for $A$ and $B$.
2. Plot the front view on the projector: mark $a'$ at $25\text{ mm}$ below $XY$ and $b'$ at $50\text{ mm}$ above $XY$. Join $a'b'$ and measure its length as $75\text{ mm}$.
3. Plot the top view on the same projector: mark $a$ at $30\text{ mm}$ above $XY$ (behind VP) and $b$ at $40\text{ mm}$ below $XY$ (in front of VP). Join $ab$ and measure its length as $70\text{ mm}$.
4. Set up the profile view around the projector intersection: project the heights of $a'$ ($25\text{ mm}$ below HP) and $b'$ ($50\text{ mm}$ above HP) and step off the VP distances horizontally in opposite directions ($A$ $30\text{ mm}$ behind VP to one side, $B$ $40\text{ mm}$ in front of VP to the other side) to locate profile points $a''$ and $b''$.
5. Join $a''b''$ in the profile view to obtain the true length $TL = 102.6\text{ mm}$.
6. Measure the angle of $a''b''$ with the horizontal HP axis as $\theta = 47^\circ$ and with the vertical VP axis as $\phi = 43^\circ$.
7. Mark where the profile line $a''b''$ crosses the HP axis and rotate it to the projector to find $HT$ at $6.7\text{ mm}$ from $XY$; mark where $a''b''$ crosses the VP axis to find $VT$ at $7.1\text{ mm}$ from $XY$.

```line-projection
{
  "A": {
    "y": -30,
    "z": -25
  },
  "B": {
    "y": 40,
    "z": 50
  },
  "length": 102.591,
  "unit": "mm",
  "givens": [
    "Distance between the end projectors = 0 mm",
    "A is 25 mm below the HP",
    "A is 30 mm behind the VP",
    "B is 50 mm above the HP",
    "B is 40 mm in front of the VP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-26-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-26-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-26-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-26-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** True length $TL = 102.6\text{ mm}$; front view $a'b' = 75\text{ mm}$; top view $ab = 70\text{ mm}$; $\theta = 47^\circ$; $\phi = 43^\circ$; $HT = 6.7\text{ mm}$ from $XY$; $VT = 7.1\text{ mm}$ from $XY$.

### Quick recall
- Check $\theta + \phi$ first: if it equals $90^\circ$, the line is in a profile plane and $EP = 0$.
- Both $a'b'$ and $ab$ lie on the same vertical line perpendicular to $XY$.
- In the profile view, vertical change equals front view length ($a'b'$) and horizontal change equals top view length ($ab$), so $TL = \sqrt{(a'b')^2 + (ab)^2}$.
- When ends lie in opposite quadrants (e.g., behind VP vs. in front of VP), step off their VP distances on opposite sides of the vertical profile axis.

<!-- page 8 | Trace Problems I: Given Trace Positions and Projector Distances -->

## Trace Problems I: Given Trace Positions and Projector Distances

### What you need
- **Front view trace line:** Points $a'$, $b'$, $h'$ (on $xy$), and $VT$ are always collinear.
- **Top view trace line:** Points $a$, $b$, $v$ (on $xy$), and $HT$ are always collinear.
- **Trace projectors:** $h'$ and $HT$ share one vertical projector; $v$ and $VT$ share another.
- **Trapezoidal true length on $a'b'$:** Erect perpendiculars at $a'$ and $b'$ equal to the distances of $a$ and $b$ from $xy$; the line joining their ends gives True Length ($TL$) and VP inclination $\phi$.
- **Trapezoidal true length on $ab$:** Erect perpendiculars at $a$ and $b$ equal to the heights of $a'$ and $b'$ from $xy$; the line joining their ends gives $TL$ and HP inclination $\theta$.

### The method
1. Draw reference line $xy$ and place the vertical trace projectors at the given horizontal spacing.
2. Mark $h'$ and $v$ on $xy$, then measure along their projectors to plot $HT$ and $VT$.
3. Connect $h'$ to $VT$ to establish the line of the front view, and connect $v$ to $HT$ to establish the line of the top view.
4. Locate endpoints $a'/a$ and $b'/b$ by intersecting the trace lines with given horizontal loci or vertical end projectors.
5. Construct right-angled trapezoids on $a'b'$ and $ab$ (or by rotating views) to measure the true length $TL$ and true inclinations $\theta$ and $\phi$.

### Problems

#### Problem 25 (Q26): Line from Trace Positions, Trace Spacing, and End Projector Distance
**Given:** Distance between $HT$ and $VT$ projectors $= 95\text{ mm}$; End projector distance ($EP$) $= 65\text{ mm}$; $HT$ is $30\text{ mm}$ in front of VP ($30\text{ mm}$ below $xy$); $VT$ is $45\text{ mm}$ above HP ($45\text{ mm}$ above $xy$); End $A$ is $10\text{ mm}$ above HP.   **Find:** Front view $a'b'$, top view $ab$, true length $TL$, and true inclinations $\theta$ and $\phi$.

**Solution**
1. Draw $xy$, place two vertical projectors $95\text{ mm}$ apart, mark $h'$ on $xy$ with $HT$ $30\text{ mm}$ below it on the left projector, and mark $v$ on $xy$ with $VT$ $45\text{ mm}$ above it on the right projector.
2. Join $h'$ to $VT$ (line of front view) and $HT$ to $v$ (line of top view).

> **Figure: Step 26.1: Locating HT, VT, h', and v with connecting trace lines**
>
> Engineering drawing step labelled 26.1. A horizontal reference line is labelled x at the left end and y at the right end. On the left, a vertical projector goes through point h' on the xy line and extends downward by 30 mm to point HT below the xy line. On the right, at a horizontal distance of 95 mm from the left projector, a vertical projector goes through point v on the xy line and extends upward by 45 mm to point VT above the xy line. A straight line connects h' to VT above the xy line, and another straight line connects HT to v below the xy line. Below the drawing is the note: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. On the right side, a GIVEN box lists: [1] HT-VT - 95mm, [2] EP - 65mm, [3] HT - 30 fVP, [4] VT - 45 aHP, [5] A - 10 aHP (with items 1, 3, 4 highlighted in red). Below it, an ANSWERS box lists: [1] θ - 24°, [2] φ - 16°, [3] TL - 75mm, [4] a'b' - 72mm, [5] ab - 68mm. Beneath the boxes: 'ALL DIMENSIONS ARE IN mm', 'SCALE 1:1'.

3. Draw a horizontal line $10\text{ mm}$ above $xy$ to cut $h'VT$ at $a'$, and project vertically down from $a'$ to cut $HT$-$v$ at $a$ ($23.3\text{ mm}$ below $xy$).
4. Draw a second vertical end projector $65\text{ mm}$ to the left of $a'a$ (moving toward and past $h'HT$) to intersect $h'VT$ extended at $b'$ ($20.8\text{ mm}$ below $xy$) and $HT$-$v$ extended at $b$ ($43.9\text{ mm}$ below $xy$).

> **Figure: Step 26.2: Drawing front view a'b' and top view ab between the trace lines**
>
> Engineering drawing step labelled 26.2, building on step 26.1. On the line connecting h' and VT, point a' is located at a height of 10 mm above the xy line. A vertical end projector (marked with a small circle above xy and a small square below xy) passes through a' and extends downward to intersect the line HT-v at point a, which is the top view of end A. At a horizontal distance of 65 mm to the right of the projector a'a, the second vertical end projector (marked with three small horizontal tick marks) intersects the line h'-VT at b' and the line HT-v at b. The thick segment a'b' represents the front view, and the thick segment ab represents the top view. Below the drawing is the note: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. On the right side, a GIVEN box lists: [1] HT-VT - 95mm, [2] EP - 65mm, [3] HT - 30 fVP, [4] VT - 45 aHP, [5] A - 10 aHP (all in red). Below it, an ANSWERS box lists: [1] θ - 24°, [2] φ - 16°, [3] TL - 75mm, [4] a'b' - 72mm, [5] ab - 68mm. Beneath the boxes: 'ALL DIMENSIONS ARE IN mm', 'SCALE 1:1'.

5. Erect perpendiculars to $a'b'$ of lengths $23.3\text{ mm}$ at $a'$ and $43.9\text{ mm}$ at $b'$ to find $TL = 74.8\text{ mm}$ and $\phi = 15.9^\circ$.
6. Erect perpendiculars to $ab$ of lengths $10\text{ mm}$ at $a$ and $20.8\text{ mm}$ (on the opposite side, since $b'$ is below $xy$) at $b$ to find $\theta = 24.3^\circ$.

> **Figure: Step 26.3: Orthographic projection solution for Problem 26 using the trapezoidal method**
>
> Solution step labelled 26.3. Horizontal reference line xy. Two vertical trace projectors are spaced 95 mm apart: the left one connects h' on xy to HT (30 mm below xy); the right one connects v on xy to VT (45 mm above xy). Line h'-VT contains the front view segment a'b' (where a' is 10 mm above xy). Line HT-v contains the top view segment ab. The distance between end projectors a'a and b'b is dimensioned as 65 mm. Using the trapezoidal method: perpendiculars to a'b' at a' and b' have lengths equal to the distances of a and b from xy, locating A and B above xy; angle between a'b' and AB is labelled phi. Perpendiculars to ab at a and b have lengths equal to the distances of a' and b' from xy (marked with three tick marks on b' and bB), locating A and B below xy; angle between ab and AB is labelled theta. Notes at bottom left: 'a,b,v,HT -same line' and 'a',b',h',VT - same line'. Box 'GIVEN': [1] HT-VT - 95mm, [2] EP - 65mm, [3] HT - 30 fVP, [4] VT - 45 aHP, [5] A - 10 aHP. Box 'ANSWERS': [1] theta - 24°, [2] phi - 16°, [3] TL - 75mm, [4] a'b' - 72mm, [5] ab - 68mm. 'ALL DIMENSIONS ARE IN mm', 'SCALE 1:1'.

```line-projection
{
  "A": {
    "y": 23.333,
    "z": 10
  },
  "B": {
    "y": 43.86,
    "z": -20.789
  },
  "length": 74.795,
  "unit": "mm",
  "givens": [
    "Projectors through HT and VT are 95 mm apart",
    "Distance between the end projectors = 65 mm",
    "HT is 30 mm in front of the VP",
    "VT is 45 mm above the HP",
    "A is 10 mm above the HP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-27-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-27-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-27-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-27-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $TL = 74.8\text{ mm}$, $a'b' = 71.9\text{ mm}$, $ab = 68.2\text{ mm}$, $\theta = 24.3^\circ$, $\phi = 15.9^\circ$.

#### Problem 26 (Q27): Line with Traces in Third Quadrant Assuming Missing Endpoint Data
**Given:** Distance between $HT$ and $VT$ projectors $= 90\text{ mm}$; $EP = 60\text{ mm}$; $HT$ is $40\text{ mm}$ behind VP ($40\text{ mm}$ above $xy$); $VT$ is $50\text{ mm}$ below HP ($50\text{ mm}$ below $xy$); Assume $A$ is in HP.   **Find:** Projections $a'b'$ and $ab$, true length $TL$, and true inclinations $\theta$ and $\phi$.

**Solution**
1. Draw $xy$ and construct two vertical projectors $90\text{ mm}$ apart; on the left projector mark $h'$ on $xy$ and $HT$ $40\text{ mm}$ above $xy$, and on the right projector mark $v$ on $xy$ and $VT$ $50\text{ mm}$ below $xy$.
2. Since $A$ is assumed in the HP, $A$ coincides with $HT$: mark $a'$ at $h'$ on $xy$ and $a$ at $HT$ ($40\text{ mm}$ above $xy$).
3. Join $a'(h')$ to $VT$ and $a(HT)$ to $v$.
4. Draw the vertical end projector for $B$ at $60\text{ mm}$ to the left of $a'a$ to cut $h'VT$ extended at $b'$ ($33.3\text{ mm}$ above $xy$) and $HT$-$v$ extended at $b$ ($66.7\text{ mm}$ above $xy$).
5. Erect a perpendicular to $ab$ at $b$ of length $33.3\text{ mm}$ to locate $B$, giving $TL = 73.6\text{ mm}$ and $\theta = 26.9^\circ$.
6. Erect perpendiculars to $a'b'$ at $a'$ ($40\text{ mm}$) and $b'$ ($66.7\text{ mm}$) to measure $\phi = 21.2^\circ$.

```line-projection
{
  "A": {
    "y": -40,
    "z": 0
  },
  "B": {
    "y": -66.667,
    "z": 33.333
  },
  "length": 73.636,
  "unit": "mm",
  "givens": [
    "Projectors through HT and VT are 90 mm apart",
    "Distance between the end projectors = 60 mm",
    "HT is 40 mm behind the VP",
    "VT is 50 mm below the HP",
    "A is 0 mm above the HP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-28-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-28-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-28-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-28-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

> **Key idea.** When one endpoint's position is omitted in a trace problem, assume that endpoint lies in the HP (at $HT$) or in the VP (at $VT$) to fix the segment along the trace lines.

**Answer:** $TL = 73.6\text{ mm}$, $a'b' = 68.6\text{ mm}$, $ab = 65.7\text{ mm}$, $\theta = 26.9^\circ$, $\phi = 21.2^\circ$.

#### Problem 27 (Q29): Line from Traces and Top View Apparent Inclination
**Given:** Top view inclination $\beta = 30^\circ$; $HT$ is $40\text{ mm}$ in front of VP ($40\text{ mm}$ below $xy$); $VT$ is $50\text{ mm}$ above HP ($50\text{ mm}$ above $xy$); $A$ is $20\text{ mm}$ above HP; $B$ is $10\text{ mm}$ behind VP.   **Find:** Projections $a'b'$ and $ab$, true length $TL$, and true inclinations $\theta$ and $\phi$.

**Solution**
1. Draw $xy$, locate $h'$ on $xy$, and mark $HT$ $40\text{ mm}$ vertically below $h'$.
2. From $HT$, draw the top view line inclined at $\beta = 30^\circ$ to $xy$ so that it cuts $xy$ at $v$ and continues above $xy$.
3. Erect a perpendicular from $v$ to $50\text{ mm}$ above $xy$ to mark $VT$, and join $h'$ to $VT$ to establish the front view line.
4. Draw a horizontal locus $20\text{ mm}$ above $xy$ to intersect $h'VT$ at $a'$, and project down to the top view line to find $a$ ($24\text{ mm}$ below $xy$).
5. Draw a horizontal locus $10\text{ mm}$ above $xy$ (since $B$ is $10\text{ mm}$ behind VP) to intersect the extended top view line $HT$-$v$ at $b$, and project up to $h'VT$ extended to locate $b'$ ($62.5\text{ mm}$ above $xy$).
6. Construct the true-length trapezoids on $a'b'$ ( passing through $VT$) and $ab$ (passing through $HT$) to measure $TL = 80.2\text{ mm}$, $\theta = 32^\circ$, and $\phi = 25.1^\circ$.

```line-projection
{
  "A": {
    "y": 24,
    "z": 20
  },
  "B": {
    "y": -10,
    "z": 62.5
  },
  "length": 80.189,
  "unit": "mm",
  "givens": [
    "Top view makes 30° with XY",
    "HT is 40 mm in front of the VP",
    "VT is 50 mm above the HP",
    "B is 10 mm behind the VP",
    "A is 20 mm above the HP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-29-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-29-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-29-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-29-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $TL = 80.2\text{ mm}$, $a'b' = 72.6\text{ mm}$, $ab = 68\text{ mm}$, $\theta = 32^\circ$, $\phi = 25.1^\circ$.

#### Problem 28 (Q31): Line from Traces and Front View Apparent Inclination
**Given:** Front view inclination $\alpha = 30^\circ$; $HT$ is $30\text{ mm}$ behind VP ($30\text{ mm}$ above $xy$); $VT$ is $40\text{ mm}$ above HP ($40\text{ mm}$ above $xy$); $A$ is $15\text{ mm}$ below HP; $B$ is $10\text{ mm}$ in front of VP.   **Find:** Projections of the line and the lengths of the front view $a'b'$ and top view $ab$.

**Solution**
1. Draw $xy$, choose $h'$ on $xy$, and mark $HT$ $30\text{ mm}$ vertically above $h'$.
2. Through $h'$, draw the front view line at $\alpha = 30^\circ$ to $xy$, extending both below and above $xy$.
3. Draw a horizontal line $40\text{ mm}$ above $xy$ to cut this front view line at $VT$, project vertically down from $VT$ to $xy$ to mark $v$, and join $HT$ to $v$ (extending both ways) for the top view line.
4. Draw a horizontal locus $15\text{ mm}$ below $xy$ to intersect the front view line at $a'$, and project vertically up to the top view line to mark $a$ ($41.3\text{ mm}$ above $xy$).
5. Draw a horizontal locus $10\text{ mm}$ below $xy$ to intersect the top view line at $b$, and project vertically up to the front view line to mark $b'$ ($53.3\text{ mm}$ above $xy$).
6. Measure the view lengths $a'b' = 136.7\text{ mm}$ and $ab = 129\text{ mm}$ (with $TL = 146\text{ mm}$, $\theta = 27.9^\circ$, $\phi = 20.6^\circ$).

```line-projection
{
  "A": {
    "y": -41.25,
    "z": -15
  },
  "B": {
    "y": 10,
    "z": 53.333
  },
  "length": 145.96,
  "unit": "mm",
  "givens": [
    "Front view makes 30° with XY",
    "A is 15 mm below the HP",
    "HT is 30 mm behind the VP",
    "B is 10 mm in front of the VP",
    "VT is 40 mm above the HP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-30-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-30-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-30-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-30-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $a'b' = 136.7\text{ mm}$, $ab = 129\text{ mm}$ ($TL = 146\text{ mm}$, $\theta = 27.9^\circ$, $\phi = 20.6^\circ$).

#### Problem 29 (Q218): Line from True Length, Both Traces, and Trace Spacing
**Given:** $TL = 120\text{ mm}$; $VT$ is $80\text{ mm}$ above $xy$; $HT$ is $100\text{ mm}$ below $xy$; Distance between $HT$ and $VT$ projectors $= 110\text{ mm}$; $A$ is $10\text{ mm}$ above HP.   **Find:** Projections $a'b'$ and $ab$, and true inclinations $\theta$ and $\phi$.

**Solution**
1. Draw $xy$ and set two vertical projectors $110\text{ mm}$ apart; mark $h'$ on $xy$ and $HT$ $100\text{ mm}$ below $xy$ on the left projector, and mark $v$ on $xy$ and $VT$ $80\text{ mm}$ above $xy$ on the right projector.
2. Join $h'$ to $VT$ and $HT$ to $v$ to establish the trace lines.
3. Draw a horizontal locus $10\text{ mm}$ above $xy$ to intersect $h'VT$ at $a'$, and project down to $HT$-$v$ to locate $a$ ($87.5\text{ mm}$ below $xy$).
4. At $a'$, erect a perpendicular $a'A = 87.5\text{ mm}$ to $h'VT$ and connect $A$ through $VT$ (which lies on the true-length line in the auxiliary plane); measure $AB = 120\text{ mm}$ along this line from $A$ and drop a perpendicular from $B$ back to $h'VT$ extended to locate $b'$ ($46.9\text{ mm}$ below $xy$).
5. Project vertically from $b'$ to $HT$-$v$ extended to locate $b$ ($158.6\text{ mm}$ below $xy$), and measure the true inclinations $\theta = 28.3^\circ$ and $\phi = 36.3^\circ$.

```line-projection
{
  "A": {
    "y": 87.5,
    "z": 10
  },
  "B": {
    "y": 158.582,
    "z": -46.865
  },
  "length": 120,
  "unit": "mm",
  "givens": [
    "True length AB = 120 mm",
    "VT is 80 mm above the HP",
    "HT is 100 mm in front of the VP",
    "Projectors through HT and VT are 110 mm apart",
    "A is 10 mm above the HP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-31-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-31-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-31-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-31-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

> **Watch out.** Because $A$ is $10\text{ mm}$ above HP and $VT$ is $80\text{ mm}$ above HP, extending the $120\text{ mm}$ true length downward from $A$ pushes $B$ into the fourth quadrant ($46.9\text{ mm}$ below $xy$). Keep your perpendiculars on the correct sides of the trace lines when crossing $xy$.

**Answer:** $a'b' = 96.7\text{ mm}$, $ab = 105.7\text{ mm}$, $\theta = 28.3^\circ$, $\phi = 36.3^\circ$.

#### Problem 30 (Q32): Third-Quadrant Line from End Projectors, HP Inclination, and HT
**Given:** Line $AB$ in third quadrant; $A$ is $20\text{ mm}$ behind VP ($20\text{ mm}$ above $xy$); $B$ is $60\text{ mm}$ behind VP ($60\text{ mm}$ above $xy$); $EP = 75\text{ mm}$; $\theta = 30^\circ$; $HT$ is $10\text{ mm}$ above $xy$.   **Find:** Projections $a'b'$ and $ab$, true length $TL$, and $VT$.

**Solution**
1. Draw $xy$, place two vertical end projectors $75\text{ mm}$ apart, and mark $a$ $20\text{ mm}$ above $xy$ on the left projector and $b$ $60\text{ mm}$ above $xy$ on the right projector.
2. Join $a$ and $b$ to get the top view $ab$ ($85\text{ mm}$), and extend $ba$ to the left until it intersects the horizontal line $10\text{ mm}$ above $xy$ at $HT$ and hits $xy$ at $v$.
3. Project $HT$ vertically down to $xy$ to locate $h'$.
4. Using the line rotation relationships, rotate the top view length $ab = 85\text{ mm}$ and apply $\theta = 30^\circ$ to determine the true length $TL = 98.2\text{ mm}$ and the vertical height difference between $a'$ and $b'$.
5. Since the line from $h'$ through $a'$ and $b'$ must maintain this height difference over the $75\text{ mm}$ projector spacing, draw the front view line from $h'$ downward-right to locate $a'$ ($36.8\text{ mm}$ below $xy$) and $b'$ ($85.9\text{ mm}$ below $xy$).
6. Extend $b'a'$ past $h'$ above $xy$ to meet the vertical projector through $v$ at $VT$ ($12.3\text{ mm}$ above $xy$).

```line-projection
{
  "A": {
    "y": -20,
    "z": -36.806
  },
  "B": {
    "y": -60,
    "z": -85.881
  },
  "length": 98.15,
  "unit": "mm",
  "givens": [
    "A is 20 mm behind the VP",
    "B is 60 mm behind the VP",
    "Distance between the end projectors = 75 mm",
    "Inclination to the HP, θ = 30°",
    "HT is 10 mm in front of the VP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-32-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-32-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-32-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-32-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $TL = 98.2\text{ mm}$, $a'b' = 89.6\text{ mm}$, $ab = 85\text{ mm}$, $\phi = 24.1^\circ$, $VT = 12.3\text{ mm}$ above $xy$.

#### Problem 31 (Q33): Line from True Length, Endpoint A, VT, and A-VT Projector Spacing
**Given:** $TL = 100\text{ mm}$; $VT$ is $15\text{ mm}$ above HP; Projectors through $A$ and $VT$ are $75\text{ mm}$ apart; $A$ is $40\text{ mm}$ above HP and $20\text{ mm}$ in front of VP.   **Find:** Projections $a'b'$ and $ab$, true inclinations $\theta$ and $\phi$, and $HT$.

**Solution**
1. Draw $xy$ and place two vertical projectors $75\text{ mm}$ apart; on the left projector mark $v$ on $xy$ and $VT$ $15\text{ mm}$ above $xy$, and on the right projector mark $a'$ $40\text{ mm}$ above $xy$ and $a$ $20\text{ mm}$ below $xy$.
2. Join $VT$ to $a'$ and extend it to the right to form the line of the front view; also extend $a'$-$VT$ down-left to intersect $xy$ at $h'$.
3. Join $v$ to $a$ and extend it both ways; drop a vertical projector from $h'$ to meet $va$ extended at $HT$ ($12\text{ mm}$ above $xy$).
4. Construct a perpendicular at $a'$ of length $20\text{ mm}$ (distance of $a$ from $xy$) to locate $A$ in the auxiliary plane, join $VT$ through $A$ (true length line), and mark off $AB = 100\text{ mm}$ from $A$ away from $VT$.
5. Drop a perpendicular from $B$ back to the front view line to locate $b'$ ($70.7\text{ mm}$ above $xy$), and project vertically down from $b'$ to the top view line to locate $b$ ($44.5\text{ mm}$ below $xy$).
6. Measure the inclinations $\theta = 17.9^\circ$ and $\phi = 14.2^\circ$.

```line-projection
{
  "A": {
    "y": 20,
    "z": 40
  },
  "B": {
    "y": 44.526,
    "z": 70.657
  },
  "length": 100,
  "unit": "mm",
  "givens": [
    "True length AB = 100 mm",
    "VT is 15 mm above the HP",
    "Projectors through A and VT are 75 mm apart",
    "A is 40 mm above the HP",
    "A is 20 mm in front of the VP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-33-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-33-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-33-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-33-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $a'b' = 96.9\text{ mm}$, $ab = 95.2\text{ mm}$, $\theta = 17.9^\circ$, $\phi = 14.2^\circ$, $HT = 12\text{ mm}$ from $xy$.

#### Problem 35 (Q203): Line from True Length, Endpoint B, VT, and B-VT Projector Spacing
**Given:** $TL = 60\text{ mm}$; $VT$ is $15\text{ mm}$ above HP; $B$ is $30\text{ mm}$ above HP and $35\text{ mm}$ in front of VP; Projectors through $B$ and $VT$ are $80\text{ mm}$ apart.   **Find:** Projections $a'b'$ and $ab$, and true inclinations $\theta$ and $\phi$.

**Solution**
1. Draw $xy$ and set two vertical projectors $80\text{ mm}$ apart; on the left projector mark $v$ on $xy$ and $VT$ $15\text{ mm}$ above $xy$, and on the right projector mark $b'$ $30\text{ mm}$ above $xy$ and $b$ $35\text{ mm}$ below $xy$.
2. Join $VT$ to $b'$ for the front view line (extending left to cut $xy$ at $h'$), and join $v$ to $b$ for the top view line (extending left to meet the vertical projector from $h'$ at $HT$, $35\text{ mm}$ above $xy$).
3. At $b'$, erect a perpendicular of length $35\text{ mm}$ to locate $B$ in the auxiliary plane, and draw the true-length line from $B$ to $VT$.
4. Along $B$-$VT$, measure $BA = 60\text{ mm}$ from $B$ toward $VT$ to locate $A$, and drop a perpendicular to $VT$-$b'$ to find $a'$ ($19.8\text{ mm}$ above $xy$).
5. Project vertically down from $a'$ to $v$-$b$ to locate $a$ ($11.3\text{ mm}$ below $xy$), and measure $\theta = 9.7^\circ$ and $\phi = 23.3^\circ$.

```line-projection
{
  "A": {
    "y": 11.298,
    "z": 19.842
  },
  "B": {
    "y": 35,
    "z": 30
  },
  "length": 60,
  "unit": "mm",
  "givens": [
    "True length AB = 60 mm",
    "VT is 15 mm above the HP",
    "B is 30 mm above the HP",
    "B is 35 mm in front of the VP",
    "Projectors through B and VT are 80 mm apart"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-34-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-34-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-34-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-34-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** $a'b' = 55.1\text{ mm}$, $ab = 59.1\text{ mm}$, $\theta = 9.7^\circ$, $\phi = 23.3^\circ$, $HT = 35\text{ mm}$ from $xy$.

### Quick recall
- Always start trace constructions by pairing $h'$ (on $xy$) with $HT$ on one vertical projector, and $v$ (on $xy$) with $VT$ on the other.
- The front view $a'b'$ lies entirely along the line through $h'$ and $VT$; the top view $ab$ lies entirely along the line through $v$ and $HT$.
- In the trapezoidal method, the true-length line passes directly through $VT$ when built on the front view (since $v$ has zero distance from $xy$) and directly through $HT$ when built on the top view (since $h'$ has zero distance from $xy$).
- When a line crosses $xy$ between its endpoints, erect the trapezoid perpendiculars on opposite sides of the view line so the algebraic sign of the coordinates is preserved.

<!-- page 9 | Trace Problems II: Combining Views, Angles, and Traces -->

## Trace Problems II: Combining Views, Angles, and Traces

### What you need
- **Collinearity of traces and views:** The points $a'$, $b'$, $h'$, and $\text{VT}$ always lie on the same straight line; the points $a$, $b$, $v$, and $\text{HT}$ always lie on the same straight line.
- **Projector alignment:** $h'$ lies on the $xy$-line on the vertical projector of $\text{HT}$; $v$ lies on the $xy$-line on the vertical projector of $\text{VT}$.
- **Endpoint on HP or VP:** If an endpoint $A$ lies in the HP, its front view $a'$ is on the $xy$-line (so $a'$ coincides with $h'$, and $a$ coincides with $\text{HT}$).
- **Plane Rotation (Trapezoidal) Method with VT:** Because $\text{VT}$ is in the VP (distance from VP $= 0$), constructing a right-angled triangle on the extended front view line $\text{VT}\text{--}a'b'$ at angle $\phi$ directly yields the true length and the perpendicular distances of $A$ and $B$ from the VP.
- **Coinciding traces on the $xy$-line:** When $\text{HT}$ and $\text{VT}$ coincide on the $xy$-line, the line passes directly through the $xy$ reference axis, so both extended views $a'b'$ and $ab$ meet at the exact same point $(h', v, \text{HT}, \text{VT})$ on the $xy$-line.

### The method
1. Draw the $xy$-line and plot the given vertical loci for the endpoints and traces ($\text{VT}$ or $\text{HT}$).
2. Construct the fully defined view (usually the front view $a'b'$) using the given view length, endpoint heights, or apparent angle $\alpha$.
3. Extend the drawn view to intersect the $xy$-line and the given trace locus, locating $h'$, $v$, and the trace ($\text{VT}$ or $\text{HT}$).
4. Use either the **Line Rotation Method** (setting off $\theta$ or $\phi$ from a temporary horizontal locus to find the true length, then projecting back) or the **Plane Rotation Method** (drawing the true inclination line at $\phi$ from $\text{VT}$ along the extended front view and erecting perpendiculars from $a'$ and $b'$) to find the missing distances from the VP or HP.
5. Transfer the distances to the vertical projectors of $a'$, $b'$, and $h'$ (passing through $v$) to complete the second view, then measure the remaining true length, true angles, and trace distances.

### Problems

#### Problem Q34 (32): Front View, Apparent Angle $\alpha$, $\phi$, and VT Given (Line Rotation Method)
**Given:** Front view $a'b' = 80\text{ mm}$; apparent inclination $\alpha = 45^\circ$; end $A$ is in the HP ($0\text{ mm}$ above HP); $\text{VT}$ is $30\text{ mm}$ above the HP; true inclination $\phi = 30^\circ$ to the VP.   **Find:** Projections of the line, true length, true inclination $\theta$ with the HP, distances of $B$ from HP and VP, and distance of $\text{HT}$ from the $xy$-line.

**Solution**
1. Draw the $xy$-line and mark $a'$ (which coincides with $h'$) on the $xy$-line since end $A$ is in the HP.
2. From $a'$, draw the front view $a'b' = 80\text{ mm}$ inclined at $\alpha = 45^\circ$ above the $xy$-line; draw a horizontal locus through $b'$ at $56.6\text{ mm}$ above the $xy$-line.
3. Draw a horizontal locus $30\text{ mm}$ above the $xy$-line to intersect $a'b'$ at $\text{VT}$, and drop a vertical projector from $\text{VT}$ to the $xy$-line to locate $v$.
4. Using the Line Rotation method, assume a temporary horizontal locus for $a$, swing $a'b'$ to the horizontal to project the rotated top view length, and use $\phi = 30^\circ$ to determine the true length $\text{TL} = 92.4\text{ mm}$ and top view length $ab = 73\text{ mm}$.
5. Position the top view line $ab$ of length $73\text{ mm}$ between the vertical projectors of $a'$ and $b'$ so that it passes through $v$ on the $xy$-line; this locates $a$ (coinciding with $\text{HT}$) $24.5\text{ mm}$ above the $xy$-line ($24.5\text{ mm}$ behind the VP) and $b$ $21.7\text{ mm}$ below the $xy$-line ($21.7\text{ mm}$ in front of the VP).
6. From $a'$, cut an arc of radius $\text{TL} = 92.4\text{ mm}$ on the horizontal locus of $b'$ to find $b_1'$, and measure the true inclination $\theta = 37.8^\circ$ with the HP.

```line-projection
{
  "A": {
    "y": -24.495,
    "z": 0
  },
  "B": {
    "y": 21.693,
    "z": 56.569
  },
  "length": 92.376,
  "unit": "mm",
  "givens": [
    "Front view a′b′ = 80 mm",
    "Front view makes 45° with XY",
    "A is 0 mm above the HP",
    "VT is 30 mm above the HP",
    "Inclination to the VP, φ = 30°"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-35-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-35-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-35-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-35-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** True length $= 92.4\text{ mm}$; top view $ab = 73\text{ mm}$; $\theta = 37.8^\circ$; point $B$ is $56.6\text{ mm}$ above the HP and $21.7\text{ mm}$ in front of the VP; $\text{HT}$ is $24.5\text{ mm}$ from the $xy$-line.

---

#### Problem Q35 (33): Same Data Solved by the Plane Rotation Method
**Given:** Front view $a'b' = 80\text{ mm}$; $\alpha = 45^\circ$; end $A$ is in the HP; $\text{VT}$ is $30\text{ mm}$ above the HP; $\phi = 30^\circ$.   **Find:** Projections of the line, true length, $\theta$, distances of $B$ from HP and VP, and distance of $\text{HT}$ from the $xy$-line using the Plane Rotation method.

**Solution**
1. Draw the $xy$-line, mark $a'$ ($h'$) on it, and draw the front view $a'b' = 80\text{ mm}$ at $\alpha = 45^\circ$ above the $xy$-line, placing $b'$ at $56.6\text{ mm}$ above the HP.
2. Mark $\text{VT}$ on $a'b'$ at $30\text{ mm}$ above the $xy$-line and drop a projector to $v$ on the $xy$-line.
3. Through $\text{VT}$, draw the rabatted true-length line inclined at $\phi = 30^\circ$ to the front view line $a'b'$.
4. Erect perpendiculars to the front view line $a'b'$ at $a'$ and $b'$ to meet this $30^\circ$ line at $A_1$ and $B_1$; the segment $A_1B_1$ directly gives the true length $\text{TL} = 92.4\text{ mm}$, while the perpendiculars $a'A_1 = 24.5\text{ mm}$ and $b'B_1 = 21.7\text{ mm}$ give the distances of $A$ and $B$ from the VP.
5. Since $\text{VT}$ lies between $a'$ and $b'$, $A$ and $B$ lie on opposite sides of the VP: mark $a$ ($\text{HT}$) on the projector of $a'$ at $24.5\text{ mm}$ above the $xy$-line ($24.5\text{ mm}$ behind the VP) and $b$ on the projector of $b'$ at $21.7\text{ mm}$ below the $xy$-line ($21.7\text{ mm}$ in front of the VP).
6. Join $a$, $v$, and $b$ to obtain the top view $ab = 73\text{ mm}$, and construct the true length $92.4\text{ mm}$ between the HP loci of $a'$ and $b'$ to measure $\theta = 37.8^\circ$.

> **Key idea.** In the Plane Rotation method, $\text{VT}$ is the point where the line meets the VP (zero distance from VP), so the right triangle of angle $\phi$ always starts at $\text{VT}$ on the front view line.

```line-projection
{
  "A": {
    "y": -24.495,
    "z": 0
  },
  "B": {
    "y": 21.693,
    "z": 56.569
  },
  "length": 92.376,
  "unit": "mm",
  "givens": [
    "Front view a′b′ = 80 mm",
    "Front view makes 45° with XY",
    "A is 0 mm above the HP",
    "VT is 30 mm above the HP",
    "Inclination to the VP, φ = 30°"
  ],
  "printed": {
    "tvLength": 73,
    "htDistance": 25
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-36-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-36-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-36-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-36-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** True length $= 92.4\text{ mm}$; top view $ab = 73\text{ mm}$; $\theta = 37.8^\circ$; point $B$ is $56.6\text{ mm}$ above the HP and $21.7\text{ mm}$ in front of the VP; $\text{HT}$ is $24.5\text{ mm}$ from the $xy$-line.

---

#### Problem Q36: Front View, Endpoint Heights, $\theta$, and HT Given
**Given:** End $A$ is $10\text{ mm}$ above the HP; end $B$ is $45\text{ mm}$ above the HP; front view $a'b' = 60\text{ mm}$; $\theta = 30^\circ$; $\text{HT}$ is $15\text{ mm}$ in front of the VP.   **Find:** Projections of the line, true length, true inclination $\phi$ with the VP, and the vertical trace $\text{VT}$.

**Solution**
1. Draw the $xy$-line and draw two horizontal loci $10\text{ mm}$ and $45\text{ mm}$ above it for $a'$ and $b'$.
2. Pick $a'$ on the $10\text{ mm}$ locus and cut an arc of radius $60\text{ mm}$ on the $45\text{ mm}$ locus to locate $b'$; join $a'b'$ to get the front view.
3. From $a'$, draw a line inclined at $\theta = 30^\circ$ to the horizontal to meet the $45\text{ mm}$ locus at $b_1'$; measure the true length $\text{TL} = a'b_1' = 70\text{ mm}$.
4. Extend $b'a'$ down to intersect the $xy$-line at $h'$, drop a vertical projector from $h'$, and mark $\text{HT}$ on it $15\text{ mm}$ below the $xy$-line ($15\text{ mm}$ in front of the VP).
5. Project $b_1'$ vertically down to the horizontal line through $a'$ to get the top view length $ab = 60.6\text{ mm}$; using the collinearity of $\text{HT}$, $a$, and $b$ across the vertical projectors of $a'$ and $b'$, draw the line from $\text{HT}$ so that the segment $ab$ between the projectors of $a'$ and $b'$ equals $60.6\text{ mm}$ (placing $a$ $25.3\text{ mm}$ and $b$ $61.4\text{ mm}$ in front of the VP).
6. Extend $ba$ past $\text{HT}$ to meet the $xy$-line at $v$, erect a vertical projector from $v$ to meet $b'a'$ extended at $\text{VT}$ ($14.6\text{ mm}$ from the $xy$-line), and use $\text{TL} = 70\text{ mm}$ with the locus of $b$ to measure $\phi = 31^\circ$.

```line-projection
{
  "A": {
    "y": 25.302,
    "z": 10
  },
  "B": {
    "y": 61.357,
    "z": 45
  },
  "length": 70,
  "unit": "mm",
  "givens": [
    "A is 10 mm above the HP",
    "B is 45 mm above the HP",
    "Front view a′b′ = 60 mm",
    "Inclination to the HP, θ = 30°",
    "HT is 15 mm in front of the VP"
  ],
  "printed": {
    "length": 69,
    "tvLength": 60,
    "phi": 30,
    "vtDistance": 15
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-37-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-37-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-37-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-37-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** True length $= 70\text{ mm}$; top view $ab = 60.6\text{ mm}$; $\phi = 31^\circ$; $\text{VT} = 14.6\text{ mm}$ from the $xy$-line.

---

#### Problem Q39: Front View, $\alpha$, $\phi$, End $A$ in HP, and VT Below HP
**Given:** Front view $a'b' = 70\text{ mm}$; $\alpha = 45^\circ$; end $A$ is in the HP ($0\text{ mm}$ above HP); $\text{VT}$ is $10\text{ mm}$ below the HP; $\phi = 30^\circ$.   **Find:** Projections of the line, true length, and true inclination $\theta$ with the HP.

**Solution**
1. Draw the $xy$-line, mark $a'$ ($h'$) on the $xy$-line, and draw the front view $a'b' = 70\text{ mm}$ at $\alpha = 45^\circ$ above the $xy$-line, placing $b'$ $49.5\text{ mm}$ above the HP.
2. Extend $b'a'$ below the $xy$-line to meet a horizontal locus $10\text{ mm}$ below the $xy$-line at $\text{VT}$, and project $\text{VT}$ vertically up to $v$ on the $xy$-line.
3. Using the inclination $\phi = 30^\circ$ and the trace $\text{VT}$ (either by assuming initial positions in Line Rotation or constructing the $\phi = 30^\circ$ triangle at $\text{VT}$), find the true length $\text{TL} = 80.8\text{ mm}$ and the distances of $A$ ($8.2\text{ mm}$ in front of the VP) and $B$ ($48.6\text{ mm}$ in front of the VP).
4. Mark $a$ (which is also $\text{HT}$) $8.2\text{ mm}$ below the $xy$-line on the projector of $a'$, and mark $b$ $48.6\text{ mm}$ below the $xy$-line on the projector of $b'$; join $v$, $a$, and $b$ to get the top view $ab = 63.9\text{ mm}$.
5. From $a'$, cut an arc of radius $\text{TL} = 80.8\text{ mm}$ on the horizontal locus of $b'$ to measure the true inclination $\theta = 37.8^\circ$ with the HP.

```line-projection
{
  "A": {
    "y": 8.165,
    "z": 0
  },
  "B": {
    "y": 48.579,
    "z": 49.497
  },
  "length": 80.829,
  "unit": "mm",
  "givens": [
    "Front view a′b′ = 70 mm",
    "Front view makes 45° with XY",
    "A is 0 mm above the HP",
    "VT is 10 mm below the HP",
    "Inclination to the VP, φ = 30°"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-38-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-38-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-38-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-38-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** True length $= 80.8\text{ mm}$; top view $ab = 63.9\text{ mm}$; $\theta = 37.8^\circ$; $\text{HT} = 8.2\text{ mm}$ from the $xy$-line.

---

#### Problem Q40 (36): Front View, Endpoint Heights, VT, and $\phi$ Given ($A$ Higher than $B$)
**Given:** End $A$ is $50\text{ mm}$ above the HP; end $B$ is $20\text{ mm}$ above the HP; front view $a'b' = 70\text{ mm}$; $\text{VT}$ is $10\text{ mm}$ above the HP; $\phi = 40^\circ$.   **Find:** True length, true inclination $\theta$ with the HP, and the horizontal trace $\text{HT}$.

**Solution**
1. Draw the $xy$-line and horizontal loci at $50\text{ mm}$, $20\text{ mm}$, and $10\text{ mm}$ above the $xy$-line for $a'$, $b'$, and $\text{VT}$.
2. Mark $a'$ on the $50\text{ mm}$ locus and cut an arc of $70\text{ mm}$ on the $20\text{ mm}$ locus to locate $b'$; extend $a'b'$ downwards to intersect the $10\text{ mm}$ locus at $\text{VT}$ and the $xy$-line at $h'$.
3. Drop a vertical projector from $\text{VT}$ to $v$ on the $xy$-line; from $\text{VT}$, draw a line at $\phi = 40^\circ$ to the extended front view line $\text{VT}\text{--}b'a'$ and erect perpendiculars from $b'$ and $a'$ to determine the true length $\text{TL} = 91.4\text{ mm}$ and the VP distances ($78.3\text{ mm}$ for $A$ and $19.6\text{ mm}$ for $B$).
4. Plot $a$ ($78.3\text{ mm}$ behind the VP) and $b$ ($19.6\text{ mm}$ behind the VP) on the vertical projectors of $a'$ and $b'$, and join them with $v$ to get the top view $ab = 86.3\text{ mm}$ and locate $\text{HT}$ at $19.6\text{ mm}$ from the $xy$-line.
5. Swing the true length $\text{TL} = 91.4\text{ mm}$ between the $50\text{ mm}$ and $20\text{ mm}$ HP loci to measure the true inclination $\theta = 19.2^\circ$.

```line-projection
{
  "A": {
    "y": -78.316,
    "z": 50
  },
  "B": {
    "y": -19.579,
    "z": 20
  },
  "length": 91.379,
  "unit": "mm",
  "givens": [
    "A is 50 mm above the HP",
    "B is 20 mm above the HP",
    "Front view a′b′ = 70 mm",
    "VT is 10 mm above the HP",
    "Inclination to the VP, φ = 40°"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-39-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-39-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-39-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-39-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** True length $= 91.4\text{ mm}$; top view $ab = 86.3\text{ mm}$; $\theta = 19.2^\circ$; $\text{HT} = 19.6\text{ mm}$ from the $xy$-line.

---

#### Problem Q196 (37): Front View, Endpoint Heights, VT, and $\phi$ Given ($B$ Higher than $A$)
**Given:** End $A$ is $20\text{ mm}$ above the HP; end $B$ is $50\text{ mm}$ above the HP; front view $a'b' = 70\text{ mm}$; $\text{VT}$ is $10\text{ mm}$ above the HP; $\phi = 45^\circ$.   **Find:** True length, true inclination $\theta$ with the HP, and the horizontal trace $\text{HT}$.

**Solution**
1. Draw the $xy$-line and horizontal loci at $10\text{ mm}$, $20\text{ mm}$, and $50\text{ mm}$ above the $xy$-line; mark $a'$ on the $20\text{ mm}$ locus and swing an arc of $70\text{ mm}$ to locate $b'$ on the $50\text{ mm}$ locus.
2. Extend $b'a'$ down to meet the $10\text{ mm}$ locus at $\text{VT}$ and the $xy$-line at $h'$; drop a vertical projector from $\text{VT}$ to $v$ on the $xy$-line.
3. From $\text{VT}$, draw an auxiliary line inclined at $\phi = 45^\circ$ to the line $\text{VT}\text{--}a'b'$, and erect perpendiculars to $\text{VT}\text{--}a'b'$ at $a'$ and $b'$ to cut off the true length $\text{TL} = 99\text{ mm}$.
4. Transfer the perpendicular distances from the rabatted triangle to the vertical projectors of $a'$ and $b'$ below the $xy$-line, locating $a$ at $23.3\text{ mm}$ in front of the VP and $b$ at $93.3\text{ mm}$ in front of the VP.
5. Join $v$, $a$, and $b$ to complete the top view $ab = 94.3\text{ mm}$ and mark $\text{HT}$ on the projector of $h'$ at $23.3\text{ mm}$ from the $xy$-line; cut an arc of radius $\text{TL} = 99\text{ mm}$ from $a'$ to the $50\text{ mm}$ locus at $b_1'$ to measure $\theta = 17.6^\circ$.

```line-projection
{
  "A": {
    "y": 23.333,
    "z": 20
  },
  "B": {
    "y": 93.333,
    "z": 50
  },
  "length": 98.995,
  "unit": "mm",
  "givens": [
    "A is 20 mm above the HP",
    "B is 50 mm above the HP",
    "Front view a′b′ = 70 mm",
    "VT is 10 mm above the HP",
    "Inclination to the VP, φ = 45°"
  ],
  "printed": {
    "length": 99,
    "theta": 18,
    "htDistance": 23
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-40-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-40-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-40-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-40-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** True length $= 99\text{ mm}$; top view $ab = 94.3\text{ mm}$; $\theta = 17.6^\circ$; $\text{HT} = 23.3\text{ mm}$ from the $xy$-line.

---

#### Problem Q209 (38): Front View, Apparent Angles $\alpha$ and $\beta$, and VT Given
**Given:** Front view $a'b' = 60\text{ mm}$; $\alpha = 50^\circ$; $\beta = 30^\circ$; end $A$ is $15\text{ mm}$ above the HP; $\text{VT}$ is $10\text{ mm}$ below the HP.   **Find:** Projections of the line, true length, true inclinations $\theta$ and $\phi$, and the traces.

**Solution**
1. Draw the $xy$-line, mark $a'$ at $15\text{ mm}$ above the $xy$-line, and draw the front view $a'b' = 60\text{ mm}$ inclined at $\alpha = 50^\circ$ above the horizontal, placing $b'$ at $61\text{ mm}$ above the HP.
2. Extend $b'a'$ backwards across the $xy$-line at $h'$ to meet the horizontal locus $10\text{ mm}$ below the $xy$-line at $\text{VT}$; project $\text{VT}$ vertically up to $v$ on the $xy$-line.
3. From $v$ on the $xy$-line, draw the extended top view line inclined at $\beta = 30^\circ$ below the $xy$-line.
4. Drop vertical projectors from $h'$, $a'$, and $b'$ to intersect this $30^\circ$ top view line at $\text{HT}$ ($4.8\text{ mm}$ below $xy$), $a$ ($12.1\text{ mm}$ in front of the VP), and $b$ ($34.4\text{ mm}$ in front of the VP); measure $ab = 44.5\text{ mm}$.
5. Rotate $ab$ parallel to the $xy$-line and project up to the locus of $b'$ to obtain the true length $\text{TL} = 64\text{ mm}$ and $\theta = 45.9^\circ$; rotate $a'b'$ parallel to the $xy$-line and project down to the locus of $b$ to obtain $\phi = 20.4^\circ$.

> **Watch out.** The summary box at the bottom of the source page has a typo `[4] FV - 40 mm`; the problem statement and the graphical solution both use $a'b' = 60\text{ mm}$.

```line-projection
{
  "A": {
    "y": 12.111,
    "z": 15
  },
  "B": {
    "y": 34.378,
    "z": 60.963
  },
  "length": 63.999,
  "unit": "mm",
  "givens": [
    "Front view a′b′ = 60 mm",
    "Front view makes 50° with XY",
    "Top view makes 30° with XY",
    "A is 15 mm above the HP",
    "VT is 10 mm below the HP"
  ],
  "printed": {
    "length": 64,
    "fvLength": 60,
    "tvLength": 45,
    "theta": 46,
    "phi": 21,
    "htDistance": 5,
    "vtDistance": 10
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-41-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-41-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-41-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-41-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** True length $= 64\text{ mm}$; top view $ab = 44.5\text{ mm}$; $\theta = 45.9^\circ$; $\phi = 20.4^\circ$; $\text{HT} = 4.8\text{ mm}$ from the $xy$-line; $\text{VT} = 10\text{ mm}$ from the $xy$-line.

---

#### Problem Q28: Multi-Quadrant Line with $\theta$, $\beta$, Endpoint VP Distances, and VT Given
**Given:** True inclination $\theta = 30^\circ$; top view inclination $\beta = 45^\circ$; end $A$ is $15\text{ mm}$ in front of the VP and below the HP; end $B$ is $50\text{ mm}$ behind the VP and above the HP; $\text{VT}$ is $30\text{ mm}$ below the $xy$-line.   **Find:** Projections of the line and the horizontal trace $\text{HT}$.

**Solution**
1. Draw the $xy$-line, mark $a$ at $15\text{ mm}$ below the $xy$-line ($15\text{ mm}$ in front of the VP), and draw a horizontal locus for $b$ at $50\text{ mm}$ above the $xy$-line ($50\text{ mm}$ behind the VP).
2. From $a$, draw the top view $ab$ inclined at $\beta = 45^\circ$ upwards to meet the $50\text{ mm}$ locus at $b$, crossing the $xy$-line at $v$; measure $ab = 91.9\text{ mm}$.
3. With center $a$, swing $b$ down to the horizontal locus through $a$ at $b_1$, and use $\theta = 30^\circ$ to construct the true length $\text{TL} = 106.1\text{ mm}$ and the vertical height difference between $A$ and $B$.
4. Drop a vertical projector from $v$ to mark $\text{VT}$ at $30\text{ mm}$ below the $xy$-line; using the vertical projectors of $a$ and $b$ and the height difference from step 3, draw the front view $a'b' = 83.9\text{ mm}$ passing through $\text{VT}$ (placing $a'$ at $42.2\text{ mm}$ below the HP and $b'$ at $10.8\text{ mm}$ above the HP).
5. Locate $h'$ where $a'b'$ crosses the $xy$-line, project vertically to $ab$ to locate $\text{HT}$ at $36.7\text{ mm}$ from the $xy$-line, and measure $\phi = 37.8^\circ$.

```line-projection
{
  "A": {
    "y": 15,
    "z": -42.247
  },
  "B": {
    "y": -50,
    "z": 10.825
  },
  "length": 106.145,
  "unit": "mm",
  "givens": [
    "Inclination to the HP, θ = 30°",
    "Top view makes 45° with XY",
    "A is 15 mm in front of the VP",
    "B is 50 mm behind the VP",
    "VT is 30 mm below the HP"
  ],
  "printed": {
    "length": 106,
    "fvLength": 84,
    "tvLength": 92,
    "htDistance": 37
  }
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-42-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-42-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-42-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-42-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** True length $= 106.1\text{ mm}$; front view $a'b' = 83.9\text{ mm}$; top view $ab = 91.9\text{ mm}$; $\phi = 37.8^\circ$; $\text{HT} = 36.7\text{ mm}$ from the $xy$-line.

---

#### Problem Q30 (41): Traces Coinciding on the XY Line (Third Quadrant)
**Given:** Line $AB$ in the third quadrant; true length $\text{AB} = 90\text{ mm}$; top view $ab = 70\text{ mm}$; $\beta = 30^\circ$; end $A$ is $20\text{ mm}$ behind the VP; $\text{HT}$ and $\text{VT}$ coincide at a common point on the $xy$-line.   **Find:** Projections of the line and the inclination of the front view with the $xy$-line.

**Solution**
1. Draw the $xy$-line and draw a horizontal locus for $a$ at $20\text{ mm}$ above the $xy$-line (since $A$ is $20\text{ mm}$ behind the VP in the third quadrant).
2. Mark $a$ on the $20\text{ mm}$ locus and draw the top view $ab = 70\text{ mm}$ inclined at $\beta = 30^\circ$ upwards and to the right, placing $b$ at $55\text{ mm}$ above the $xy$-line ($55\text{ mm}$ behind the VP).
3. Extend $ba$ downwards to intersect the $xy$-line at the common trace point $(\text{HT}, \text{VT}, h', v)$ at $0\text{ mm}$ from the $xy$-line.
4. Using the Line Rotation method with $\text{TL} = 90\text{ mm}$ and top view $ab = 70\text{ mm}$, determine the true inclination with the HP ($\theta = 38.9^\circ$) and the vertical distance between the HP loci of $a'$ and $b'$.
5. Since $\text{VT}$ is on the $xy$-line at the common point, draw the front view line from $(\text{HT}, \text{VT})$ below the $xy$-line so that the segment $a'b'$ between the vertical projectors of $a$ and $b$ has the vertical height difference found in step 4; this locates $a'$ at $32.3\text{ mm}$ below the HP and $b'$ at $88.9\text{ mm}$ below the HP, giving front view length $a'b' = 82.9\text{ mm}$ and $\phi = 22.9^\circ$.

> **Key idea.** When $\text{HT}$ and $\text{VT}$ coincide on the $xy$-line, both the extended front view $a'b'$ and the extended top view $ab$ must pass through the exact same point on the $xy$-line.

```line-projection
{
  "A": {
    "y": -20,
    "z": -32.325
  },
  "B": {
    "y": -55,
    "z": -88.893
  },
  "length": 90,
  "unit": "mm",
  "givens": [
    "True length AB = 90 mm",
    "Top view ab = 70 mm",
    "Top view makes 30° with XY",
    "A is 20 mm behind the VP",
    "HT is 0 mm in front of the VP",
    "VT is 0 mm above the HP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-43-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-43-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-43-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-43-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** Front view $a'b' = 82.9\text{ mm}$; $\theta = 38.9^\circ$; $\phi = 22.9^\circ$; $A$ is $32.3\text{ mm}$ below the HP and $B$ is $88.9\text{ mm}$ below the HP.

### Quick recall
- Always extend the first completed view to the $xy$-line and to the given trace locus before starting the second view.
- When $\text{VT}$ and $\phi$ are given with the front view $a'b'$, the Plane Rotation method gives the VP distances of $A$ and $B$ in a single right triangle constructed at $\text{VT}$.
- When $\alpha$ and $\beta$ are both given along with $\text{VT}$ (as in Q209), finding $v$ on the $xy$-line lets you draw the top view line immediately at angle $\beta$ from $v$.
- If $\text{HT}$ and $\text{VT}$ coincide on the $xy$-line, the line intersects the $xy$-line directly, so $h'$, $v$, $\text{HT}$, and $\text{VT}$ are all the same point on $xy$.

<!-- page 10 | Engineering Applications of Line Projections -->

## Engineering Applications of Line Projections

### What you need
- **Engineering scales:** Convert real-world meter dimensions into millimeters for drawing: at **Scale 1:100**, $1\text{ m} = 10\text{ mm}$ ($1\text{ cm}$); at **Scale 1:50**, $1\text{ m} = 20\text{ mm}$ ($2\text{ cm}$).
- **Room / Cuboid projections:** A rectangular enclosure of length $L$, breadth (width) $B$, and height $H$ projects as a rectangle of $L \times H$ in the Front View (above $XY$) and $L \times B$ in the Top View (below $XY$), sharing the floor-back-wall edge along $XY$.
- **Space diagonal:** The longest straight line or rod inside a cuboid/room connects a bottom-back corner ($a, a'$ on $XY$) to the diagonally opposite top-front corner ($b$ at depth $B$, $b'$ at height $H$).
- **Vertical poles:** A vertical pole of height $H$ standing on the floor projects as a vertical segment of length $H$ above $XY$ in the Front View, and as a single point on its base in the Top View.
- **Finding true 3D distance and floor inclination ($\theta$):** Rotate the Top View segment $ab$ parallel to $XY$ to $ab_1$, then project up to the horizontal locus of $b'$ in the Front View to get True Length $a'b_1'$ and floor inclination $\theta$.

### The method
1. Choose a suitable reduction scale ($1:100$ or $1:50$) and convert all given meter measurements into millimeters.
2. Draw the reference line $XY$ representing the intersection of the floor (HP) and the back wall (VP).
3. Draw the boundary of the room, cuboid, or base triangle in the Front View ($L \times H$) above $XY$ and Top View ($L \times B$) below $XY$.
4. Plot the two 3D endpoints in both views using their height above the floor (above $XY$) and distance from the back wall (below $XY$), then join them to form the Front View ($a'b'$) and Top View ($ab$).
5. Rotate the Top View $ab$ to be horizontal ($ab_1$) and project up to the Front View locus (or erect a perpendicular of height difference on the Top View) to measure the True Length and floor inclination $\theta$, then scale back to meters.

### Problems

#### Problem 44 (50): Steel Ladder Against a Vertical Wall
**Given:** Vertical wall height $= 3.2\text{ m}$; foot of ladder on floor $= 2.5\text{ m}$ away from the wall; Scale $1:50$.   **Find:** Length of the ladder required.

**Solution**
1. Apply Scale $1:50$ ($1\text{ m} = 20\text{ mm}$): wall height $= 3.2 \times 20 = 64\text{ mm}$, and foot distance from wall $= 2.5 \times 20 = 50\text{ mm}$.
2. Draw the horizontal floor reference line $XY$, mark the foot of the ladder $A$ on it, and draw a vertical wall line at a horizontal distance of $50\text{ mm}$ ($2.5\text{ m}$) to the right of $A$.

> **Figure: Step 44.1 showing a ladder leaning against a wall at scale 1:50**
>
> Drawing labelled 44.1 at bottom-left. A text box at top-left reads: 'SCALE 1:50', '50mm : 2.5m', '50mm : 2500mm', '1: 50'. A horizontal reference line labelled 'x' on the left has point 'A' on it. A vertical line intersects the horizontal line to the right of A, extending above and below the horizontal line. The horizontal distance from A to the vertical line is dimensioned below the line as '50mm = 2.5m'. Above the horizontal line, the vertical segment goes up to point 'B' and is dimensioned on the right as '64mm = 3.2m -WALL'. A thick hypotenuse connects A and B, with a parallel dimension line above it labelled 'LADDER'. Below the horizontal line, a quarter-circle arc with a clockwise arrow starts at A and swings down to meet the vertical line below.

3. Mark the top of the wall on the vertical line at a height of $64\text{ mm}$ ($3.2\text{ m}$) above the floor line.
4. Join the foot $A$ directly to the top of the wall in the profile view (since the ladder lies in a plane perpendicular to both the wall and floor, this view directly shows its true length) and measure the length.

> **Figure: Step 44.2 showing the complete orthographic projection and true length of the ladder**
>
> Drawing labelled 44.2 at bottom-left. At top-left, an 'ANSWER' box reads: 'LENGTH OF THE LADDER - 4.05m'. Below it, a box reads: 'SCALE 1:50', '50mm : 2.5m', '50mm : 2500mm', '1: 50'. A horizontal reference line XY is labelled 'x' on the left and 'y' on the right. On the left side, the construction from 44.1 is shown: point 'A' on the x-y line, horizontal distance '2.5m' to the vertical wall line, vertical height '3.2m -WALL' up to point 'B', and hypotenuse AB dimensioned as '(81mm x 50 =4.05m) L'. An arc swings from A downwards and rightwards to meet the vertical line below XY. From the bottom of this arc, a horizontal construction line with a rightward arrow goes to point 'a', which is the bottom of a vertical line on the right side. This right-hand vertical line represents the front and top views aligned along a single projector: from 'a' up to the XY line is the top view, dimensioned '2.5m' on the left, meeting XY at 'a' b'. Above XY, the vertical line continues up to 'b'', dimensioned '3.2m' on the left. A horizontal line with a rightward arrow connects B to b'.

**Answer:** Length of the ladder $= 4.05\text{ m}$.

#### Problem 43: Largest Rod in a Hollow Cuboid
**Given:** Hollow cuboid dimensions $L = 60\text{ mm}$, $B = 40\text{ mm}$, $H = 30\text{ mm}$ (Scale $1:1$).   **Find:** Length of the largest rod that can be kept inside ($TL$).

**Solution**
1. Draw the reference line $XY$, construct the Front View rectangle of $60\text{ mm} \times 30\text{ mm}$ above $XY$, and the Top View rectangle of $60\text{ mm} \times 40\text{ mm}$ directly below $XY$.
2. For the longest rod (space diagonal), mark one endpoint at the bottom-back-left corner ($a'$ and $a$ on $XY$, $0\text{ mm}$ above HP and $0\text{ mm}$ in front of VP) and the opposite endpoint at the top-front-right corner ($b'$ at $30\text{ mm}$ above HP, $b$ at $40\text{ mm}$ in front of VP).
3. Join $a'b'$ to get the Front View (measuring $67.1\text{ mm}$) and join $ab$ to get the Top View (measuring $72.1\text{ mm}$).
4. Rotate $ab$ about $a$ to become parallel to $XY$ and project up to the horizontal locus of $b'$ (or erect a perpendicular of height $30\text{ mm}$ at $b$ in the Top View and join to $a$) to measure the True Length $TL = 78.1\text{ mm}$ and inclinations $\theta = 22.6^\circ$, $\phi = 30.8^\circ$.

```line-projection
{
  "A": {
    "y": 0,
    "z": 0
  },
  "B": {
    "y": 40,
    "z": 30
  },
  "length": 78.102,
  "unit": "mm",
  "givens": [
    "A is 0 mm in front of the VP",
    "A is 0 mm above the HP",
    "Distance between the end projectors = 60 mm",
    "B is 40 mm in front of the VP",
    "B is 30 mm above the HP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-44-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-44-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-44-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-44-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

**Answer:** Length of the largest rod ($TL$) $= 78.1\text{ mm}$ (with $a'b' = 67.1\text{ mm}$, $ab = 72.1\text{ mm}$, $\theta = 22.6^\circ$, $\phi = 30.8^\circ$).

#### Problem 49: Diagonally Opposite Corners of a Room
**Given:** Room dimensions $L = 4.8\text{ m}$, $B = 4.2\text{ m}$, $H = 3.6\text{ m}$; Scale $1:100$.   **Find:** True distance between a top corner and the diagonally opposite bottom corner.

**Solution**
1. Apply Scale $1:100$ ($1\text{ m} = 10\text{ mm}$): draw the Front View rectangle of $48\text{ mm} \times 36\text{ mm}$ ($4.8\text{ m} \times 3.6\text{ m}$) above $XY$ and the Top View rectangle of $48\text{ mm} \times 42\text{ mm}$ ($4.8\text{ m} \times 4.2\text{ m}$) below $XY$.
2. Mark the bottom-back-left corner as $a', a$ on $XY$ ($0\text{ m}$ above HP, $0\text{ m}$ in front of VP) and the diagonally opposite top-front-right corner as $b'$ ($3.6\text{ m}$ above HP) and $b$ ($4.2\text{ m}$ in front of VP).
3. Join $a'b'$ for the Front View ($6\text{ m}$) and $ab$ for the Top View ($6.4\text{ m}$).
4. Rotate the Top View $ab$ about $a$ to be parallel to $XY$, project up to the horizontal locus through $b'$ at height $3.6\text{ m}$, and measure the True Length $TL = 7.3\text{ m}$ and inclinations $\theta = 29.4^\circ$, $\phi = 35^\circ$.

```line-projection
{
  "A": {
    "y": 0,
    "z": 0
  },
  "B": {
    "y": 4.2,
    "z": 3.6
  },
  "length": 7.324,
  "unit": "m",
  "givens": [
    "A is 0 m in front of the VP",
    "A is 0 m above the HP",
    "Distance between the end projectors = 4.8 m",
    "B is 4.2 m in front of the VP",
    "B is 3.6 m above the HP"
  ]
}
```

**Step-by-step drawing**

![Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.](/notes/cse/s1/graphics/projection-of-lines/assets/line-45-step-1.svg)

*Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.*

![Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.](/notes/cse/s1/graphics/projection-of-lines/assets/line-45-step-2.svg)

*Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.*

![Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.](/notes/cse/s1/graphics/projection-of-lines/assets/line-45-step-3.svg)

*Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.*

![Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.](/notes/cse/s1/graphics/projection-of-lines/assets/line-45-step-4.svg)

*Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.*

> **Figure: Worked orthographic projection solution step 194 for a room diagonal PQ**
>
> Orthographic projection diagram labelled 194, with SCALE 1:100 and ALL DIMENSIONS ARE IN m. A horizontal reference line xy is drawn. Point p' and p coincide on the xy line on the left. Above xy, a rectangle represents the front view of the room of length 4.8m (horizontal distance from p' to the right projector) and height 3.6m (vertical distance from xy up to q'). The front view diagonal p'q' connects p' on xy to the top-right corner q'. Below xy, a rectangle represents the top view of the room of length 4.8m and breadth 4.2m (vertical distance from xy down to q). The top view diagonal pq connects p on xy to the bottom-right corner q. To find the true length (TL), an arc is swung from q (or q' projected) onto the locus to construct the true length line from p, dimensioned as TL. Accompanying text boxes read: GIVEN: ROOM L-4.8m, B-4.2m; H-3.6m. ANSWERS: [1] TL - 7.3m.

**Answer:** Distance between diagonally opposite corners ($TL$) $= 7.3\text{ m}$ (with $a'b' = 6\text{ m}$, $ab = 6.4\text{ m}$, $\theta = 29.4^\circ$, $\phi = 35^\circ$).

#### Problem Q202 (46): Electric Lamp to Floor Corner
**Given:** Room size $= 5\text{ m} \times 5\text{ m}$, height $= 6\text{ m}$; lamp hung vertically from the center of the flat roof at $4\text{ m}$ above the floor; Scale $1:100$.   **Find:** True distance between the lamp and any floor corner.

**Solution**
1. Using Scale $1:100$ ($1\text{ m} = 10\text{ mm}$), draw the reference line $XY$, the Front View rectangle of $50\text{ mm} \times 60\text{ mm}$ ($5\text{ m} \times 6\text{ m}$) above $XY$, and the Top View square of $50\text{ mm} \times 50\text{ mm}$ ($5\text{ m} \times 5\text{ m}$) below $XY$.
2. Draw the vertical center projector of the room at $2.5\text{ m}$ ($25\text{ mm}$) from the side wall; mark the lamp $b$ in the Top View at the center of the square ($2.5\text{ m}$ below $XY$) and $b'$ in the Front View at $4\text{ m}$ ($40\text{ mm}$) above the floor line $XY$.
3. Select the back-left floor corner as $A$, marking both $a'$ and $a$ together at the top-left corner of the plan on the $XY$ line.
4. Join $a'b'$ (Front View) and $ab$ (Top View), then rotate $ab$ about $a$ to the $XY$ line and join to the horizontal locus of $b'$ at height $4\text{ m}$ to measure the true distance.

> **Figure: Worked solution step 202 showing orthographic projection for a line in a rectangle of 5m by 5m and height 6m**
>
> Orthographic projection diagram labelled 202 in a box on the right. The drawing shows a rectangular enclosure in front view (height 6m above the horizontal reference line) and top view (width 5m along the horizontal line and depth 5m below the horizontal line). Point a' and point a lie at the bottom-left corner of the front view and top-left corner of the top view respectively, on the horizontal reference line. In the top view, segment ab goes from the top-left corner 'a' to a point 'b' located 2.5m to the right and 2.5m below the horizontal reference line. In the front view, segment a'b' goes from 'a'' to 'b'', where b' is on the vertical projector of b at a height of 4m above the horizontal reference line. The true length (TL) line is constructed in the front view by rotating the length from the top view or projecting to the upper locus, with a dimension line labelled 'TL' along the rotated segment from a' to the top locus at 6m height (or b' rotated). Small circle markers are shown on the construction lines. Beside the drawing is an ANSWER box: 'ANSWER: [1] TL - 5.3m', and below the box: 'SCALE 1:100'.

**Answer:** True distance from the lamp to the floor corner $= 5.34\text{ m}$ ($53.4\text{ mm}$ at Scale $1:100$).

#### Problem 41 (45): Hanging Bulb and Spot Image in a Room
**Given:** Room $= 8\text{ m}$ long $\times 5\text{ m}$ wide $\times 4\text{ m}$ high; bulb $B$ at ceiling center and $1\text{ m}$ below ceiling; spot image $A$ at a room corner $1\text{ m}$ above the floor; Scale $1:100$.   **Find:** True length of the line joining the bulb and the black spot image.

**Solution**
1. At Scale $1:100$ ($1\text{ m} = 10\text{ mm}$), draw the room's Front View ($80\text{ mm} \times 40\text{ mm}$) above the floor reference line and Top View ($80\text{ mm} \times 50\text{ mm}$) below it; draw the center projector $4\text{ m}$ ($40\text{ mm}$) from the right wall, mark the bulb $b'$ at $1\text{ m}$ ($10\text{ mm}$) below the ceiling ($3\text{ m}$ above the floor), and mark $b$ at the center of the plan ($2.5\text{ m}$ from the back wall).

> **Figure: Step 41.1: Orthographic projection of room and point B**
>
> Drawing labelled 41.1 showing the front view (above) and top view (below) of a room of width 8m, depth 5m, and height 4m. A vertical projector is located 4m from the right wall (or middle of the 8m width). On this projector, point b' in the front view is located 1m below the top ceiling line, and point b in the top view is located 2.5m below the horizontal reference line (middle of the 5m depth). Boxes on the right state: 'ANSWER: [1] TL - 5.1m' and 'SCALE 1:100, 80mm : 8m, 80mm : 8000mm, 1: 100'.

2. On the left wall along the back corner, mark the spot image $a'$ in the Front View at $1\text{ m}$ ($10\text{ mm}$) above the floor line and $a$ in the Top View at the top-left corner on the reference line; join $a'b'$ and $ab$.

> **Figure: Step 41.2: Orthographic projection of room with line AB in front and top views**
>
> Drawing labelled 41.2 building upon 41.1. The room has width 8m, depth 5m, and height 4m. Point b' is 4m from the right wall and 1m below the ceiling; point b is 2.5m from the front/back wall on the same projector. On the left wall, point a' in the front view is 1m above the floor line (horizontal reference line), and point a in the top view lies at the top-left corner of the plan (on the reference line). Thick lines connect a' to b' (front view) and a to b (top view). Boxes on the right state: 'ANSWER: [1] TL - 5.1m' and 'SCALE 1:100, 80mm : 8m, 80mm : 8000mm, 1: 100'.

3. Rotate the Top View $ab$ about $a$ until it lies horizontally along the reference line, project its end vertically up to the horizontal locus of $b'$, and join to $a'$ to measure the True Length $TL$.

> **Figure: Solution step 41.3 showing orthographic projection of a line inside a 8m x 5m x 4m room**
>
> Drawing labelled '41.3' showing the front view and top view of a room of width 8m, depth 5m (top view below horizontal reference line), and height 4m (front view above horizontal reference line). On the left wall, point a' is in the front view at height 1m above the floor line, and point a is on the horizontal line (back wall). Point b' in the front view is 4m from the right wall and 1m below the top ceiling line. Point b in the top view is 2.5m below the horizontal reference line, on the same vertical projector as b' (marked with a small square symbol). Segment a'b' is drawn in bold in the front view, and segment ab is drawn in bold in the top view. An auxiliary projection (true length construction) is drawn perpendicular to ab from points a and b: segment aA of length corresponding to 1m (with a small circle right-angle symbol at a), and a perpendicular at b with a small square right-angle symbol extending to point B on the bottom floor line of the top view. Segment AB is drawn in bold and dimensioned as 'TL'. Two text boxes sit on the right: 'ANSWER: [1] TL - 5.1m, AB = 51mm, 51mm x 100, 5.1mm = 5.1m' and 'SCALE 1:100, 80mm : 8m, 80mm : 8000mm, 1: 100'.

**Answer:** Length of the line joining the bulb and the spot image $= 5.12\text{ m}$ ($51.2\text{ mm}$ at Scale $1:100$).

#### Problem 42 (47): Three Vertical Poles in an Equilateral Triangle
**Given:** Three vertical poles $AB = 2\text{ m}$, $CD = 4\text{ m}$, $EF = 8\text{ m}$ standing on the floor; floor ends $B, D, F$ form an equilateral triangle of side $5\text{ m}$ with $BF \parallel \text{VP}$; Scale $1:100$.   **Find:** True distances between top ends ($AC, CE, AE$) and their inclinations to the floor.

**Solution**
1. At Scale $1:100$ ($1\text{ m} = 10\text{ mm}$), draw $XY$ and construct the Top View equilateral triangle below $XY$ of side $50\text{ mm}$ ($5\text{ m}$) with base $a(b)-e(f)$ parallel to $XY$ and third apex $c(d)$; project vertical lines up from $b, d, f$ and mark the pole heights above $XY$: $b'a' = 20\text{ mm}$ ($2\text{ m}$), $d'c' = 40\text{ mm}$ ($4\text{ m}$), and $f'e' = 80\text{ mm}$ ($8\text{ m}$).

> **Figure: Step 42.1: Orthographic projection of three vertical poles arranged in an equilateral triangle**
>
> Step 42.1 of problem 42. A horizontal reference line XY is drawn with 'x' at the left end and 'y' at the right end. Below XY (top view), an equilateral triangle represents the bases of three vertical poles with vertices labelled 'a(b)' at the bottom-left, 'e(f)' at the bottom-right, and 'c(d)' at the top apex. The horizontal base between 'a(b)' and 'e(f)' is dimensioned as '50mm = 5m'. Vertical projectors extend upwards from 'a(b)', 'c(d)', and 'e(f)' across the XY line. Above XY (front view), three vertical segments represent the poles with bases on the XY line at 'b'', 'd'', and 'f'' respectively: pole b'a' on the left has height dimensioned as '20mm = 2m' (marked with a small circle on the pole), pole d'c' in the middle has height dimensioned as '40mm = 4m' (marked with a small square on the pole), and pole f'e' on the right has height dimensioned as '80mm = 8m' (marked with a small triangle on the pole). A box on the top right reads: 'ANSWER: [1] AE - 7.8m, [2] AC - 5.4m, [3] CE - 6.4m'. A box on the bottom right reads: 'SCALE 1:100, 80mm : 8m, 80mm : 8000mm, 1: 100'.

2. Join the top ends $a'c'$, $c'e'$, and $a'e'$ in the Front View; because the base $a(b)-e(f)$ in the Top View is already parallel to $XY$, the Front View line $a'e'$ directly shows the True Length $AE$ and its floor inclination.

> **Figure: Step 42.2: Orthographic projection connecting the tops of the three poles**
>
> Step 42.2 of problem 42. It builds on step 42.1 with the same XY line, top-view equilateral triangle 'a(b) - c(d) - e(f)' of base '5m', and front-view vertical poles b'a' ('2m'), d'c' ('4m'), and f'e' ('8m'). In the front view above XY, straight lines now connect the tops of the poles, forming triangle a'c'e'. Since segment a(b)-e(f) in the top view is parallel to XY, the front-view segment a'e' gives the true length, which is dimensioned parallel to a'e' as 'AE'. A box on the top right reads: 'ANSWER: [1] AE - 7.8m, [2] AC - 5.4m, [3] CE - 6.4m'. A box on the bottom right reads: 'SCALE 1:100, 80mm : 8m, 80mm : 8000mm, 1: 100'.

3. Since the Top View lengths $ac$ and $ce$ are both equal to the triangle side $5\text{ m}$ ($50\text{ mm}$), rotate $ac$ and $ce$ parallel to $XY$ (matching the horizontal span of $5\text{ m}$) and project up to the horizontal loci of $a', c', e'$ to measure the remaining True Lengths $AC$ and $CE$ and their floor inclinations.

> **Figure: Step 42.3: Projection drawing finding true lengths AE, AC, and CE of triangle poles**
>
> Engineering drawing labelled 42.3 showing the projections of three vertical poles and the true lengths of the wires connecting their tops, along with an ANSWER box and a SCALE box.
> 
> Reference line $xy$ separates the front view (above) and top view (below).
> - Top view (below $xy$): An equilateral triangle with vertices $a(b)$, $e(f)$ along a horizontal base of length $5\text{ m}$, and apex $c(d)$ above the base. Auxiliary rabatted/projected lines are drawn perpendicular to the sides of the triangle to find true lengths (or auxiliary views): alongside $a(b)-c(d)$ a line segment is dimensioned as '$(54\text{mm} \times 100 = 5.4\text{m})\text{ AC}$'; alongside $c(d)-e(f)$ a line segment is dimensioned as '$(64\text{mm} \times 100 = 6.4\text{m})\text{ CE}$'.
> - Front view (above $xy$): Three vertical posts rise from $xy$: $b'a'$ of height $2\text{ m}$ (with circle symbol), $d'c'$ of height $4\text{ m}$ (with square symbol), and $f'e'$ of height $8\text{ m}$ (with triangle symbol). The tops $a'$, $c'$, $e'$ are joined to form triangle $a'c'e'$. Since $a(b)-e(f)$ is parallel to $xy$, $a'e'$ gives the true length Directly, dimensioned as '$(78\text{mm} \times 100 = 7.8\text{m})\text{ AE}$'.
> 
> Top-right box labelled 'ANSWER':
> - [1] AE - 7.8m
> - [2] AC - 5.4m
> - [3] CE - 6.4m
> 
> Bottom-right box labelled 'SCALE 1:100':
> - 80mm : 8m
> - 80mm : 8000mm
> - 1 : 100

> **Key idea.** Any line connecting two points whose Top View is already parallel to $XY$ (like wire $AE$ above base $BF$) shows its True Length and true floor inclination $\theta$ directly in the Front View without rotation.

**Answer:** $AE = 7.81\text{ m}$ (inclination to floor $= 50^\circ$); $AC = 5.39\text{ m}$ (inclination to floor $= 22^\circ$); $CE = 6.40\text{ m}$ (inclination to floor $= 39^\circ$).

### Quick recall
- Always convert meter dimensions using the chosen scale before drawing: **Scale 1:100** means $1\text{ m} = 10\text{ mm}$; **Scale 1:50** means $1\text{ m} = 20\text{ mm}$.
- The floor-back-wall intersection acts as the $XY$ line: heights above the floor go above $XY$ (Front View), and distances from the back wall go below $XY$ (Top View).
- To find the true 3D distance between two points in space, rotate the Top View segment parallel to $XY$ and project it to the Front View height difference.
- Analytical check for any 3D distance: $TL = \sqrt{\Delta x^2 + \Delta y^2 + \Delta z^2}$.
