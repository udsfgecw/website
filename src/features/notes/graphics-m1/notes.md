<!-- page 1 | Start here -->

## Start here

Engineering drawing is how engineers describe a solid object on flat paper. The trick is to draw it as seen from two directions at once: from the **front** (the front view) and from **above** (the top view). Together the two views fix where every point of the object is.

This module builds that skill from the ground up:

1. **Drawing basics:** the lines and dimensions every drawing uses.
2. **Planes, quadrants and points:** the two planes the views are drawn on, and how to draw a point.
3. **Lines:** how a straight line shows up in the two views, and how to find its true length and its angles to the planes.
4. **Traces:** where a line pierces the two planes.
5. **Problems**, from easy to hard. Each one lists what is given, what to find, the steps, and the finished drawing.

### How to use the figures

Every line problem has a figure under its steps.

- **Drawing (2D)** builds the construction in four steps. Press the step buttons to see what each step adds.
- **In space (3D)** shows the same line between the two planes. Drag to turn it. Move the slider to fold the horizontal plane down into the vertical plane: the picture in space becomes the flat drawing you make on paper.

Try it on this line before you read on.

```line-projection
{
  "A": { "y": 20, "z": 15 },
  "B": { "y": 50, "z": 40 },
  "length": 55.902,
  "unit": "mm",
  "givens": [
    "A is 15 mm above the HP and 20 mm in front of the VP",
    "B is 40 mm above the HP and 50 mm in front of the VP",
    "The end projectors are 40 mm apart"
  ]
}
```

<!-- page 2 | Drawing basics: lines and dimensions -->

## Drawing basics: lines and dimensions

> **Syllabus note.** The BIS code of practice for technical drawing is not asked in the end-semester examination. Use this page to draw neatly.

The **Bureau of Indian Standards (BIS) code of practice** sets consistent conventions for engineering drawings, including line types and thicknesses, lettering, dimensioning, scales, and symbols. Apply the conventions specified in the KTU/department drawing template. The syllabus does not require memorizing a particular standard number for the end-semester examination.

### Types of lines

| Line | Looks like | Used for |
| --- | --- | --- |
| Continuous thick | solid, dark | visible outlines and edges, the final answer |
| Continuous thin | solid, light | construction, projectors, dimension and extension lines |
| Dashed | short dashes | hidden edges |
| Chain thin | long and short dashes | centre lines and axes |

Draw construction lines light so the final lines stand out. Keep every construction line: it shows how you got the answer.

### Dimensions

- A **dimension line** is thin, with an arrowhead at each end, and is drawn outside the shape.
- **Extension lines** are thin lines that run from the shape to the dimension line. They stop just short of the shape and go slightly past the dimension line.
- Write the number **above the dimension line**, in the middle, so it reads from the bottom or the right.
- Give each dimension **once**, in millimetres, without writing "mm" on every number. A note on the sheet says "all dimensions in mm".

<!-- page 3 | Planes, quadrants and points -->

## Planes, quadrants and points

### The two planes

Two flat planes meet at right angles:

- the **Horizontal Plane (HP)**, lying flat like a floor,
- the **Vertical Plane (VP)**, standing upright like a wall.

They meet in a line called the **XY line**. The two planes cut space into four **quadrants**.

| Quadrant | Where the point is | Front view lies | Top view lies |
| --- | --- | --- | --- |
| I | above the HP, in front of the VP | above XY | below XY |
| II | above the HP, behind the VP | above XY | above XY |
| III | below the HP, behind the VP | below XY | above XY |
| IV | below the HP, in front of the VP | below XY | below XY |

This course uses **first-angle projection**: the object is placed in the first quadrant, between you and the planes.

### From space to paper

You look at the object from the front. What you see is projected on the VP: that is the **front view**. You look from above. What you see is projected on the HP: that is the **top view**.

To draw both on one sheet, the HP is turned down through 90° until it lies flat in the VP. After the turn:

- the **front view** is drawn **above** XY,
- the **top view** is drawn **below** XY (for a point in front of the VP),
- the front view and top view of one point lie on one straight line at right angles to XY, called the **projector**.

Letters: write the front view with a dash (a′, b′) and the top view without (a, b).

### Projecting a point

Two distances place a point:

| Distance | Where it shows |
| --- | --- |
| height above the HP | how far the **front view** a′ is from XY |
| distance in front of the VP | how far the **top view** a is from XY |

Above the HP or in front of the VP: the view goes to the usual side of XY (front view up, top view down). Below the HP or behind the VP: the view goes to the other side.

### Example: four points

Draw the views of A (20 above HP, 30 in front of VP), B (25 above HP, 35 behind VP), C (30 below HP, 25 behind VP) and D (15 below HP, 40 in front of VP).

1. Draw XY and four projectors across it, one for each point.
2. A, first quadrant: mark a′ 20 above XY and a 30 below XY.
3. B, second quadrant: mark b′ 25 above XY and b 35 above XY.
4. C, third quadrant: mark c′ 30 below XY and c 25 above XY.
5. D, fourth quadrant: mark d′ 15 below XY and d 40 below XY.

A point **in the HP** has its front view on XY. A point **in the VP** has its top view on XY.

<!-- page 4 | Lines: true length and inclinations -->

## Lines: true length and inclinations

A straight line AB is fixed by its two end points, so its views are the lines a′b′ and ab joining the views of A and B.

### Positions of a line

| Line is | Front view | Top view |
| --- | --- | --- |
| parallel to both planes | true length, parallel to XY | true length, parallel to XY |
| perpendicular to the HP | true length, perpendicular to XY | a point |
| perpendicular to the VP | a point | true length, perpendicular to XY |
| parallel to one plane, inclined to the other | see the next rule | see the next rule |
| inclined to both planes | shorter than AB | shorter than AB |

**Rule.** A line parallel to a plane shows its **true length** in its view on that plane.

### Worked example: line parallel to HP and inclined to VP

A line $AB$ is 80 mm long, lies in HP, and makes a true angle $\phi=30^\circ$ with VP. Draw its **top view** at the true length of 80 mm, at $30^\circ$ to $XY$. Its **front view** lies along $XY$ and has length

$$a'b'=80\cos30^\circ=40\sqrt3\approx69.3\text{ mm}.$$

Both ends have the same height because the line lies in HP. Their distances from VP differ by

$$80\sin30^\circ=40\text{ mm}.$$

This is the one-plane special case: the view on the parallel plane shows true length, while the other view is foreshortened. If the line instead lies in VP, interchange front and top views and use $\theta$ for its inclination to HP.

### Angles and lengths

Four angles are used. Learn them first.

| Symbol | Meaning |
| --- | --- |
| θ (theta) | true angle of AB with the **HP** |
| φ (phi) | true angle of AB with the **VP** |
| α (alpha) | angle the **front view** a′b′ makes with XY |
| β (beta) | angle the **top view** ab makes with XY |

For a line of true length TL:

- **Top view** length: ab = TL cos θ
- **Front view** length: a′b′ = TL cos φ
- **Height difference** of the ends: TL sin θ
- **Distance difference** of the ends from the VP: TL sin φ
- θ + φ is never more than 90°.
- A view is never longer than TL, and the apparent angles α and β are never smaller than θ and φ.

### Finding the true length

When a line is inclined to both planes, neither view shows TL. Turn the line until it is parallel to one plane:

1. Keep end A fixed. Turn the **top view** ab about a until it is parallel to XY. Its length does not change.
2. Project the new end up to the height of b′. The line from a′ to that point is the **true length**, and the angle it makes with XY is **θ**.
3. In the same way turn the **front view** a′b′ about a′ until it is parallel to XY and project down. The new line in the top view is the true length, and its angle with XY is **φ**.

The figure under every problem draws exactly this.

<!-- page 5 | Traces of a line -->

## Traces of a line

A line that is inclined to a plane, if extended, meets that plane in a point called a **trace**.

- **HT** (horizontal trace): where the line meets the **HP**. It lies on the top view and its front view is on XY.
- **VT** (vertical trace): where the line meets the **VP**. It lies on the front view and its top view is on XY.

### Finding the traces

1. **HT:** extend the front view a′b′ until it meets XY at h′. Draw a projector down from h′ to meet the extended top view ab. That point is HT.
2. **VT:** extend the top view ab until it meets XY at v. Draw a projector up from v to meet the extended front view a′b′. That point is VT.

HT is in front of the VP when it falls below XY, and behind it when it falls above XY. VT is above the HP when it falls above XY, and below it when it falls below XY.

> **Remember.** A line parallel to the HP has no HT. A line parallel to the VP has no VT.

<!-- page 6 | Reading a problem -->

## Reading a problem

A line is fixed by **five facts**. A line problem always gives five, in some mix of these:

| Fact | Usually written as |
| --- | --- |
| where an end is | "A is 20 mm above HP and 30 mm in front of VP" |
| the true length | "line AB is 90 mm long" |
| the true angles | "inclined at 30° to HP and 40° to VP" |
| the length of a view | "the top view measures 55 mm" |
| the angle of a view | "the front view makes 45° with XY" |
| the distance between the end projectors | "the projectors of A and B are 50 mm apart" |
| a trace, or the mid-point | "HT is 30 mm in front of VP", "mid-point is 40 mm above HP" |

How to start:

1. Write down the five facts. If a word like "assume" appears, the statement is giving you one.
2. Draw XY and the views of the end you know.
3. Use any fact that fixes a **height** or a **distance** as a horizontal **locus line** parallel to XY. The other end must lie on it.
4. Use true length and true angles by turning the line parallel to a plane, as on the previous pages.

The problems below start with the simplest data and end with applications.

<!-- page 7 | Line Rotation Method: True Length and True Inclinations or Loci -->

## Line Rotation Method: True Length and True Inclinations or Loci
Now that you understand how rotating a line parallel to a reference plane reveals its true length and angle, we will apply this forward and backward to draw projections across different quadrants. By drawing the true-length line at its true inclination to establish the endpoint's horizontal locus, you can project and swing arcs of the foreshortened lengths to lock in the final front and top views.

### The idea
A line inclined to both the Horizontal Plane (HP) and the Vertical Plane (VP) looks shorter than its **true length** ($TL$) in both orthographic views. In the **Line Rotation Method**, we imagine pivoting the line around one endpoint until it becomes parallel to one of the reference planes while keeping its inclination to the other plane unchanged.

When we rotate a line $AB$ about end $A$ until it is parallel to the VP, its inclination $\theta$ to the HP stays constant. Therefore, its new front view $a'b_1'$ shows the true length $TL$ at the true angle $\theta$, and the height of $b_1'$ defines the horizontal **locus of $b'$** (the path of constant height for end $B$). Simultaneously, its new top view $ab_1$ lies parallel to the $XY$ line and reveals the exact apparent length of the top view ($ab = ab_1 = TL \cos\theta$). Symmetrically, rotating the line parallel to the HP keeps its angle $\phi$ to the VP constant: the top view $ab_2$ shows $TL$ at angle $\phi$, establishes the horizontal **locus of $b$**, and projects to $a'b_2'$ to give the apparent front view length ($a'b' = a'b_2' = TL \cos\phi$). Swinging $ab_1$ and $a'b_2'$ onto their respective loci completes the views.

Finally, the points where the extended line (if necessary) pierces the HP and VP are the **Horizontal Trace** ($HT$) and **Vertical Trace** ($VT$). To locate $HT$, extend the front view $a'b'$ to meet the $XY$ line at $h'$, erect a perpendicular to $XY$, and intersect it with the extended top view $ab$. To locate $VT$, extend the top view $ab$ to meet the $XY$ line at $v$, erect a perpendicular to $XY$, and intersect it with the extended front view $a'b'$.

### Worked example
**Given:** Line $AB$ is 90 mm long, inclined at $\theta = 30^\circ$ to the HP and $\phi = 40^\circ$ to the VP, with end $A$ 20 mm above the HP and 30 mm in front of the VP (first quadrant).
**Find:** The front view $a'b'$, top view $ab$, and the traces $HT$ and $VT$.

1. Draw the reference line $XY$ and mark $a'$ 20 mm above $XY$ and $a$ 30 mm below $XY$ on a common vertical projector, because $A$ is in the first quadrant.
2. From $a'$, draw $a'b_1'$ of length 90 mm at $30^\circ$ above the horizontal to represent the line rotated parallel to the VP, and draw a horizontal line through $b_1'$ (65 mm above $XY$) as the locus of $b'$.
3. Project $b_1'$ vertically down to meet the horizontal line through $a$ at $b_1$, which gives the apparent top view length $ab_1 = 77.9$ mm.
4. From $a$, draw $ab_2$ of length 90 mm at $40^\circ$ below the horizontal to represent the line rotated parallel to the HP, and draw a horizontal line through $b_2$ (87.9 mm below $XY$) as the locus of $b$.
5. Project $b_2$ vertically up to meet the horizontal line through $a'$ at $b_2'$, which gives the apparent front view length $a'b_2' = 68.9$ mm.
6. With center $a$ and radius $ab_1$, swing an arc down to the locus of $b$ to find $b$, and join $ab$; with center $a'$ and radius $a'b_2'$, swing an arc up to the locus of $b'$ to find $b'$, and join $a'b'$ (check that $b'$ and $b$ lie on the same vertical projector).
7. Extend $a'b'$ to meet $XY$ at $h'$ and project vertically to meet extended $ab$ at $HT$; extend $ab$ to meet $XY$ at $v$ and project vertically to meet extended $a'b'$ at $VT$.

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

**Answer:** Front view $a'b' = 68.9$ mm, top view $ab = 77.9$ mm, $HT$ is 4.3 mm from the $XY$ line, and $VT$ is 3.3 mm from the $XY$ line.

### More problems

#### Problem 2: Finding inclinations and views from endpoint loci
**Given:** $AB = 75$ mm; $A$ is 25 mm above the HP and 20 mm in front of the VP; $B$ is 50 mm above the HP and 65 mm in front of the VP.
**Find:** Front view $a'b'$, top view $ab$, inclinations $\theta$ and $\phi$, and traces $HT$ and $VT$.

1. Mark $a'$ 25 mm above $XY$ and $a$ 20 mm below $XY$ on a vertical projector.
2. Draw the horizontal locus of $b'$ 50 mm above $XY$ and the locus of $b$ 65 mm below $XY$.
3. Swing an arc of 75 mm from $a'$ to cut the locus of $b'$ at $b_1'$, measuring $\theta = 19.5^\circ$.
4. Project $b_1'$ down to the horizontal line through $a$ to get $b_1$, then swing $ab_1$ to the locus of $b$ for $ab = 70.7$ mm.
5. Swing an arc of 75 mm from $a$ to cut the locus of $b$ at $b_2$, measuring $\phi = 36.9^\circ$.
6. Project $b_2$ up to the horizontal through $a'$ to get $b_2'$, then swing $a'b_2'$ to the locus of $b'$ for $a'b' = 60$ mm.
7. Extend $a'b'$ and $ab$ to the $XY$ line at $h'$ and $v$, and project vertically to locate $HT$ and $VT$.

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

**Answer:** $a'b' = 60$ mm (printed: 47 mm), $ab = 70.7$ mm (printed: 60 mm), $\theta = 19.5^\circ$ (printed: $23^\circ$), $\phi = 36.9^\circ$ (printed: $44^\circ$), $HT$ is 25 mm from $XY$ (printed: 24 mm), and $VT$ is 13.9 mm from $XY$ (printed: 14 mm).

> **Watch out.** The printed values on the drawing ($a'b' = 47$ mm, $ab = 60$ mm, $\theta = 23^\circ$, $\phi = 44^\circ$) do not match the given coordinates; a 75 mm line rising 25 mm and advancing 45 mm yields $a'b' = 60$ mm, $ab = 70.7$ mm, $\theta = 19.5^\circ$, and $\phi = 36.9^\circ$.

#### Problem 5: Line in the third quadrant
**Given:** $AB = 80$ mm, $\theta = 30^\circ$, $\phi = 45^\circ$; $A$ is 20 mm below the HP and 25 mm behind the VP (third quadrant).
**Find:** Front view $a'b'$, top view $ab$, and traces $HT$ and $VT$.

1. Mark $a$ 25 mm above $XY$ and $a'$ 20 mm below $XY$ because $A$ is in the third quadrant.
2. From $a$, draw $ab_2 = 80$ mm at $45^\circ$ above the horizontal to set the locus of $b$ 81.6 mm above $XY$.
3. Project $b_2$ down to the horizontal through $a'$ at $b_2'$, finding the front view length $a'b_2' = 56.6$ mm.
4. From $a'$, draw $a'b_1' = 80$ mm at $30^\circ$ below the horizontal to set the locus of $b'$ 60 mm below $XY$.
5. Project $b_1'$ up to the horizontal through $a$ at $b_1$, finding the top view length $ab_1 = 69.3$ mm.
6. Swing $a'b_2'$ down to the locus of $b'$ for $b'$, and swing $ab_1$ up to the locus of $b$ for $b$.
7. Extend $a'b'$ and $ab$ to meet $XY$ at $h'$ and $v$, and project vertically to intersect the views at $HT$ and $VT$.

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

**Answer:** $a'b' = 56.6$ mm, $ab = 69.3$ mm, $HT$ is 3.3 mm from $XY$, and $VT$ is 2.3 mm from $XY$.

#### Problem 4: Line ending in the second quadrant
**Given:** $PQ = 100$ mm, $\theta = 30^\circ$, $\phi = 20^\circ$; $P$ is on the HP and 20 mm in front of the VP; $Q$ is in the second quadrant.
**Find:** Front view $p'q'$ and top view $pq$.

1. Mark $p'$ on $XY$ and $p$ 20 mm below $XY$ on a common vertical projector.
2. From $p'$, draw $p'q_1' = 100$ mm at $30^\circ$ above $XY$ to set the locus of $q'$ 50 mm above $XY$.
3. Project $q_1'$ down to the horizontal through $p$ at $q_1$ to get the top view length $pq_1 = 86.6$ mm.
4. From $p$, draw $pq_2 = 100$ mm at $20^\circ$ above the horizontal (going behind the VP) to set the locus of $q$ 14.2 mm above $XY$.
5. Project $q_2$ to $XY$ (the horizontal through $p'$) at $q_2'$ to get the front view length $p'q_2' = 94$ mm.
6. Swing $p'q_2'$ from $p'$ to the locus of $q'$ to locate $q'$, and swing $pq_1$ from $p$ to the locus of $q$ to locate $q$.
7. Join $p'q'$ and $pq$; $HT$ is at $p$ (20 mm from $XY$) and $VT$ is 29.2 mm from $XY$.

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

**Answer:** $p'q' = 94$ mm and $pq = 86.6$ mm (printed: 86 mm).

#### Problem 6: Line crossing into the second quadrant
**Given:** $AB = 100$ mm, $\theta = 30^\circ$, $\phi = 45^\circ$; $A$ is 20 mm above the HP and 25 mm in front of the VP; $B$ is in the second quadrant.
**Find:** Front view $a'b'$, top view $ab$, and traces $HT$ and $VT$.

1. Mark $a'$ 20 mm above $XY$ and $a$ 25 mm below $XY$ on a vertical projector.
2. From $a'$, draw $a'b_1' = 100$ mm at $30^\circ$ above the horizontal to set the locus of $b'$ 70 mm above $XY$.
3. Project $b_1'$ down to the horizontal through $a$ at $b_1$ to get the top view length $ab_1 = 86.6$ mm.
4. From $a$, draw $ab_2 = 100$ mm at $45^\circ$ above the horizontal (crossing $XY$ into the second quadrant) to set the locus of $b$ 45.7 mm above $XY$.
5. Project $b_2$ down to the horizontal through $a'$ at $b_2'$ to get the front view length $a'b_2' = 70.7$ mm.
6. Swing $a'b_2'$ to the locus of $b'$ for $b'$, and swing $ab_1$ upwards across $XY$ to the locus of $b$ for $b$.
7. Extend $a'b'$ and $ab$ to meet $XY$ at $h'$ and $v$, and project vertically to locate $HT$ and $VT$.

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

**Answer:** $a'b' = 70.7$ mm (printed: 70 mm), $ab = 86.6$ mm (printed: 86 mm), $HT$ is 53.3 mm from $XY$ (printed: 53 mm), and $VT$ is 37.7 mm from $XY$ (printed: 38 mm).

#### Problem 3: Line spanning first and second quadrants from loci
**Given:** $AB = 100$ mm; $A$ is 25 mm above the HP and 25 mm in front of the VP; $B$ is 50 mm above the HP and 50 mm behind the VP.
**Find:** Front view $a'b'$, top view $ab$, inclinations $\theta$ and $\phi$, and traces $HT$ and $VT$.

1. Mark $a'$ 25 mm above $XY$ and $a$ 25 mm below $XY$ on a vertical projector.
2. Draw a single horizontal line 50 mm above $XY$ to serve as the locus for both $b'$ and $b$ (since $B$ is in the second quadrant).
3. Swing an arc of 100 mm from $a'$ to cut the 50 mm locus at $b_1'$, measuring $\theta = 14.5^\circ$.
4. Project $b_1'$ down to the horizontal through $a$ at $b_1$ ($ab_1 = 96.8$ mm), and swing $ab_1$ up to the 50 mm locus to find $b$.
5. Swing an arc of 100 mm from $a$ up across $XY$ to cut the 50 mm locus at $b_2$, measuring $\phi = 48.6^\circ$.
6. Project $b_2$ down to the horizontal through $a'$ at $b_2'$ ($a'b_2' = 66.1$ mm), and swing $a'b_2'$ up to the 50 mm locus to find $b'$ (coinciding with $b$).
7. Extend $a'b'$ and $ab$ to meet $XY$ at $h'$ and $v$, and project vertically to find $HT$ and $VT$.

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

**Answer:** $a'b' = 66.1$ mm (printed: 66 mm), $ab = 96.8$ mm (printed: 97 mm), $\theta = 14.5^\circ$ (printed: $14^\circ$), $\phi = 48.6^\circ$ (printed: $49^\circ$), $HT$ is 100 mm from $XY$, and $VT$ is 33.3 mm from $XY$.

> **Watch out.** Because $B$ is 50 mm above the HP and 50 mm behind the VP, the loci of $b'$ and $b$ coincide 50 mm above $XY$, so the endpoints $b'$ and $b$ land on the exact same spot.

<!-- page 8 | Line Rotation Method: Working from Apparent Lengths and Angles -->

## Line Rotation Method: Working from Apparent Lengths and Angles
Having used true lengths and inclinations to find apparent views, you can now run the exact same rotation arcs in reverse when the problem gives you the apparent view lengths or angles first. Any known apparent view (front or top) can be rotated until it is parallel to the XY line and then projected to the other view's locus to recover the missing true length and true inclination.

### The idea
When a line is inclined to both reference planes, its front view $a'b'$ and top view $ab$ are foreshortened and make **apparent inclinations** with the XY line: $\alpha$ in the front view and $\beta$ in the top view. Because the line leans away from the plane, an apparent angle is always larger than the corresponding true inclination ($\alpha > \theta$ and $\beta > \phi$).

In the forward method, you started with a true-length line $a'b_1'$, dropped a vertical projector to a horizontal line through $a$ to get the foreshortened length $ab_1$, and swung an arc of radius $ab_1$ to find the top view $ab$. **Reverse line rotation** runs that exact path backward. Whenever you know the length of a view—say, the front view $a'b'$—you can lay off that length horizontally from $a'$ to get $a'b_2'$, then project straight down to the locus of $b$ (or intersect with a true-length arc from $a$) to recover the true-length position $ab_2$ and the true angle $\phi$.

Similarly, if a problem gives an apparent angle ($\alpha$ or $\beta$), draw that angle ray first and intersect it with either the endpoint's horizontal locus or a rotation arc to lock in the endpoint. Finally, a complete projection requires five parameters, including the starting point's coordinates. If a problem gives only three geometric parameters and omits the endpoint location, make the standard simplifying assumption: place endpoint A on both the HP and the VP so that $a'$ and $a$ sit directly on the XY line.

### Worked example
**Given:** Line AB is 80 mm long, inclined at $\theta = 30^\circ$ to the HP, with front view $a'b' = 60$ mm; end A is 15 mm above the HP and 20 mm in front of the VP. **Find:** The top view $ab$ and the inclination $\phi$ with the VP.

1. Draw the XY line and mark $a'$ 15 mm above XY and $a$ 20 mm below XY on the same vertical projector.
2. From $a'$, draw the true-length line $a'b_1' = 80$ mm at $\theta = 30^\circ$ to the horizontal to establish the horizontal locus of $b'$ at 55 mm above XY.
3. Drop a vertical projector from $b_1'$ to the horizontal line through $a$ to find $b_1$; the segment $ab_1 = 69.3$ mm is the true top-view length because $a'b_1'$ is parallel to the VP.
4. With center $a'$ and radius equal to the given front view 60 mm, cut the locus of $b'$ to locate $b'$ and draw the front view $a'b'$.
5. Drop a vertical projector from $b'$ and intersect it with an arc of radius $ab_1 = 69.3$ mm centered at $a$ to locate $b$, completing the top view $ab$ and establishing the locus of $b$ at 72.9 mm below XY.
6. To find $\phi$ by reverse rotation, mark $b_2'$ on the horizontal line through $a'$ at $a'b_2' = 60$ mm, drop a projector to the locus of $b$ at $b_2$, and measure $\phi$ on $ab_2$ (or cut the locus of $b$ directly with an 80 mm arc from $a$).

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

**Answer:** Top view $ab = 69.3$ mm, true inclination with the VP $\phi = 41.4^\circ$.

### More problems

#### Problem 191: True length, $\theta$, and plan angle $\beta$ given
**Given:** Line PQ is 80 mm long, $\theta = 30^\circ$, top-view angle $\beta = 60^\circ$; P is on the HP and 15 mm in front of the VP. **Find:** The projections of PQ and its inclination $\phi$ with the VP.
1. Mark $p'$ on the XY line and $p$ 15 mm below XY on a common vertical projector.
2. From $p'$, draw $p'q_1' = 80$ mm at $\theta = 30^\circ$ to XY and draw the horizontal locus of $q'$ through $q_1'$ at 40 mm above XY.
3. Project $q_1'$ down to the horizontal line through $p$ to obtain the top-view length $pq_1 = 69.3$ mm.
4. From $p$, draw a ray at $\beta = 60^\circ$ below the horizontal and swing an arc from $q_1$ centered at $p$ to cut this ray at $q$, locating the locus of $q$ 75 mm below XY.
5. Project $q$ vertically up to the locus of $q'$ to locate $q'$ and join $p'q'$ ($52.9$ mm).
6. With center $p$ and true length radius 80 mm, cut the horizontal locus of $q$ at $q_2$ and measure $\phi$ between $pq_2$ and XY.

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

**Answer:** Front view $p'q' = 52.9$ mm, top view $pq = 69.3$ mm, inclination with the VP $\phi = 48.6^\circ$.

#### Problem 9: Only three parameters given (assume A on XY)
**Given:** Line AB is 70 mm long, $\theta = 40^\circ$, and plan inclination $\beta = 30^\circ$. **Find:** The projections of AB and its inclination $\phi$ with the VP.
1. Because endpoint coordinates are omitted, assume end A lies on both the HP and the VP so that $a'$ and $a$ coincide on the XY line.
2. From $a'$, draw the true-length line $a'b_1' = 70$ mm at $\theta = 40^\circ$ above XY and draw the horizontal locus of $b'$ at 45 mm above XY.
3. Drop a vertical projector from $b_1'$ to the XY line at $b_1$ to get the top-view radius $ab_1 = 53.6$ mm.
4. From $a$, draw a ray at $\beta = 30^\circ$ below XY and swing an arc from $b_1$ centered at $a$ to intersect it at $b$, establishing the locus of $b$ at 26.8 mm below XY.
5. Project $b$ vertically upward to the locus of $b'$ to find $b'$ and draw the front view $a'b' = 64.7$ mm.
6. With center $a$ and radius 70 mm, cut the horizontal locus of $b$ at $b_2$ and measure the true angle $\phi$ between $ab_2$ and XY.

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

**Answer:** Front view $a'b' = 64.7$ mm, top view $ab = 53.6$ mm, inclination with the VP $\phi = 22.5^\circ$.

#### Problem 8: Both apparent inclinations $\alpha$ and $\beta$ given
**Given:** Front view angle $\alpha = 35^\circ$, top view angle $\beta = 45^\circ$; A is 20 mm above the HP and 25 mm in front of the VP; B is 40 mm above the HP. **Find:** The projections, true length, $\theta$, and $\phi$.
1. Mark $a'$ 20 mm above XY, $a$ 25 mm below XY, and draw the horizontal locus of $b'$ 40 mm above XY.
2. From $a'$, draw a ray at $\alpha = 35^\circ$ to the horizontal to cut the 40 mm locus at $b'$, giving the front view $a'b' = 34.9$ mm.
3. From $a$, draw a ray at $\beta = 45^\circ$ below the horizontal and drop a vertical projector from $b'$ to intersect it at $b$, giving the top view $ab = 40.4$ mm and the locus of $b$ at 53.6 mm below XY.
4. Rotate $ab$ centered at $a$ up to the horizontal through $a$ at $b_1$, project $b_1$ up to the locus of $b'$ at $b_1'$, and measure true length $a'b_1'$ and angle $\theta$.
5. Rotate $a'b'$ centered at $a'$ down to the horizontal through $a'$ at $b_2'$, project $b_2'$ down to the locus of $b$ at $b_2$, and measure angle $\phi$ on $ab_2$.

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

**Answer:** True length $AB = 45.1$ mm, front view $a'b' = 34.9$ mm, top view $ab = 40.4$ mm, $\theta = 26.3^\circ$, $\phi = 39.3^\circ$.

#### Problem 204: Top view, $\beta$, and locus of Q given
**Given:** Top view $pq = 70$ mm at $\beta = 45^\circ$ to XY; P is in the VP and 15 mm above the HP; Q is 30 mm above the HP in the first quadrant. **Find:** True length, elevation length $p'q'$, inclinations $\theta$ and $\phi$, and traces.
1. Mark $p'$ 15 mm above XY, $p$ on the XY line, and draw the horizontal locus of $q'$ 30 mm above XY.
2. From $p$, draw the top view $pq = 70$ mm at $\beta = 45^\circ$ below XY, establishing the locus of $q$ at 49.5 mm below XY.
3. Project $q$ vertically up to the 30 mm locus line to locate $q'$ and join $p'q'$ to get the elevation length.
4. Rotate $pq$ centered at $p$ up to the XY line at $q_1$, project $q_1$ up to the locus of $q'$ at $q_1'$, and measure true length $p'q_1'$ and $\theta$.
5. With center $p$ and radius equal to the true length $71.6$ mm, cut the locus of $q$ at $q_2$ and measure $\phi$ between $pq_2$ and XY.
6. Note that $p'$ is already the Vertical Trace (VT) 15 mm above XY since $p$ is on XY; extend $p'q'$ back to XY at $h'$ and project to the extended line $qp$ to locate the Horizontal Trace (HT) 49.5 mm from XY.

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

![Worked solution step 204 for projection of line PQ](/notes/cse/s1/graphics/module-1/assets/page-024-panel-1.webp)

**Answer:** True length = 71.6 mm, elevation $p'q' = 51.7$ mm, $\theta = 12.1^\circ$, $\phi = 43.7^\circ$, HT = 49.5 mm from XY, VT = 15 mm from XY.

#### Problem 193: Both view lengths and front-view angle $\alpha$ given
**Given:** Front view $p'q' = 50$ mm at $\alpha = 45^\circ$ to XY, top view $pq = 65$ mm; P is on the HP and 20 mm in front of the VP. **Find:** The true length, inclinations $\theta$ and $\phi$, and the traces.
1. Mark $p'$ on the XY line and $p$ 20 mm below XY on the same vertical projector.
2. From $p'$, draw the front view $p'q' = 50$ mm at $\alpha = 45^\circ$ above XY and draw the horizontal locus of $q'$ through $q'$ at 35.4 mm above XY.
3. Drop a vertical projector from $q'$ and cut it with an arc of radius 65 mm centered at $p$ to locate $q$, establishing the locus of $q$ at 74.5 mm below XY.
4. Mark $q_1$ on the horizontal line through $p$ at $pq_1 = 65$ mm, project $q_1$ up to the locus of $q'$ at $q_2'$, and measure true length $p'q_2'$ and $\theta$.
5. Project $q'$ down to the horizontal through $p'$ (on XY) or cut the locus of $q$ with the true length radius 74 mm from $p$ to measure $\phi$.
6. Point $p$ is the HT (20 mm from XY) since $p'$ is on XY; extend $qp$ to XY at $v$ and project down to the extended $q'p'$ to find the VT 13 mm from XY.

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

![Projection of line PQ (solution step 193)](/notes/cse/s1/graphics/module-1/assets/page-027-panel-1.webp)

**Answer:** True length = 74 mm, $\theta = 28.5^\circ$, $\phi = 47.5^\circ$, HT = 20 mm from XY, VT = 13 mm from XY.

#### Problem 10: True length and both apparent view lengths given
**Given:** Line AB has true length 75 mm, top view $ab = 65$ mm, and front view $a'b' = 50$ mm; end A is on both the HP and the VP. **Find:** The projections of AB and its inclinations $\theta$ and $\phi$.
1. Mark both $a'$ and $a$ at the same point on the XY line.
2. Along the XY line from $a$, mark $ab_1 = 65$ mm (the un-rotated top view) and erect a vertical projector upward from $b_1$.
3. With center $a'$ and true-length radius 75 mm, cut the vertical projector from $b_1$ at $b_1'$ to find $\theta$ and draw the horizontal locus of $b'$ at 37.4 mm above XY.
4. With center $a'$ and radius $a'b' = 50$ mm, cut the locus of $b'$ at $b'$ to complete the front view $a'b'$.
5. Drop a vertical projector from $b'$ below XY and intersect it with an arc of radius 65 mm centered at $a$ to locate $b$ and its locus at 55.9 mm below XY.
6. With center $a$ and true-length radius 75 mm, cut the horizontal locus of $b$ at $b_2$ and measure $\phi$ between $ab_2$ and XY.
> **Watch out.** You cannot draw $a'b'$ or $ab$ directly at the start because neither locus is known; you must lay off $ab_1 = 65$ mm along the horizontal through $a$ and intersect its projector with the 75 mm true-length arc from $a'$ to find the locus of $b'$ first.

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

**Answer:** Inclination with the HP $\theta = 29.9^\circ$, inclination with the VP $\phi = 48.2^\circ$ (HT and VT at 0 mm from XY).

#### Problem 7: Line crossing from fourth to first quadrant
**Given:** Line AB is 80 mm long, top view $ab = 55$ mm; A is 15 mm below the HP and 45 mm in front of the VP; B is 15 mm in front of the VP and above the HP. **Find:** The front view $a'b'$ and inclinations $\theta$ and $\phi$.
1. Because A is in the fourth quadrant, mark both $a'$ (15 mm) and $a$ (45 mm) below XY on the same projector, and draw the locus of $b$ 15 mm below XY.
2. With center $a$ and radius $ab = 55$ mm, cut the 15 mm locus line at $b$ to get the top view $ab$.
3. With center $a$ and true-length radius 80 mm, cut the 15 mm locus line at $b_2$ and measure $\phi$ between $ab_2$ and the horizontal through $a$.
4. Drop a vertical projector from $b_2$ to the horizontal line through $a'$ (also 15 mm below XY) at $b_2'$, giving the front-view length $a'b_2' = 74.2$ mm.
5. Erect a vertical projector from $b$ into the region above XY and cut it with an arc of radius $a'b_2' = 74.2$ mm centered at $a'$ to locate $b'$ at 43.1 mm above XY.
6. With center $a'$ and true-length radius 80 mm, cut the horizontal locus of $b'$ at $b_1'$ and measure $\theta$ between $a'b_1'$ and the horizontal through $a'$.
> **Watch out.** End A is below the HP and in front of the VP (fourth quadrant), so both $a'$ and $a$ lie below XY, whereas B is in the first quadrant with $b'$ above XY.

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

**Answer:** Front view $a'b' = 74.2$ mm, inclination with the HP $\theta = 46.6^\circ$, inclination with the VP $\phi = 22^\circ$.

#### Problem 11: End B in the second quadrant equidistant from HP and VP
**Given:** End A is 15 mm above the HP and 25 mm in front of the VP; $\theta = 20^\circ$, top view $ab = 80$ mm, and B is in the second quadrant equidistant from the HP and the VP. **Find:** The projections of AB and its inclination $\phi$ with the VP.
1. Mark $a'$ 15 mm above XY and $a$ 25 mm below XY on a common vertical projector.
2. From $a$, draw the un-rotated top-view segment $ab_1 = 80$ mm horizontally to the right and erect a vertical projector from $b_1$.
3. From $a'$, draw a line at $\theta = 20^\circ$ above the horizontal to intersect the projector from $b_1$ at $b_1'$, establishing the true length $a'b_1'$ and the horizontal locus of $b'$.
4. Because B is in the second quadrant (above HP, behind VP) and equidistant from both planes, both $b'$ and $b$ lie on the same horizontal locus line above XY.
5. With center $a$ and radius $ab_1 = 80$ mm, swing an arc counterclockwise above XY to cut the horizontal locus of $b'$ at $b$, completing the top view $ab$.
6. Since $b$ and $b'$ share the same vertical projector and the same horizontal locus line, $b'$ coincides with $b$; join $a'b'$ to complete the front view.
7. With center $a$ and radius equal to the true length $a'b_1'$, cut the horizontal locus of $b$ above XY at $b_2$ and measure $\phi$ between $ab_2$ and the horizontal.
> **Watch out.** A point in the second quadrant equidistant from the HP and the VP has both its front view $b'$ and top view $b$ at the exact same distance above the XY line, so $b$ and $b'$ coincide at one point.

![Step 11.1 of projection of straight line AB](/notes/cse/s1/graphics/module-1/assets/page-028-panel-1.webp)

![Step 11.2 of projection of straight line AB](/notes/cse/s1/graphics/module-1/assets/page-028-panel-2.webp)

![Step 11.3 of projection of line AB with given data and final answers](/notes/cse/s1/graphics/module-1/assets/page-029-panel-1.webp)

**Answer:** True length $AB = a'b_1'$, inclination with the VP $\phi$ is the angle between $ab_2$ and the horizontal.

#### Problem 12: Front view and distance between end projectors given
**Given:** End A is 10 mm above the HP and 15 mm in front of the VP; B is 40 mm in front of the VP, front view $a'b' = 75$ mm, and distance between end projectors is 50 mm. **Find:** The projections, true length, and true inclinations $\theta$ and $\phi$.
1. Mark $a'$ 10 mm above XY, $a$ 15 mm below XY, and draw the horizontal locus of $b$ 40 mm below XY.
2. Draw the vertical end projector of B parallel to the projector of A at a horizontal distance of 50 mm to the right.
3. Intersect the end projector of B with the 40 mm locus below XY to locate $b$ and join $ab$ ($55.9$ mm).
4. With center $a'$ and radius $a'b' = 75$ mm, cut the end projector of B above XY to locate $b'$ at 65.9 mm above XY and draw $a'b'$.
5. Rotate $ab$ centered at $a$ to the horizontal through $a$ at $b_1$, project $b_1$ up to the locus of $b'$ at $b_1'$, and measure true length $a'b_1'$ and $\theta$.
6. Rotate $a'b'$ centered at $a'$ to the horizontal through $a'$ at $b_2'$, project $b_2'$ down to the locus of $b$ at $b_2$, and measure $\phi$ on $ab_2$.

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

**Answer:** True length $AB = 79.1$ mm, top view $ab = 55.9$ mm, $\theta = 45^\circ$, $\phi = 18.4^\circ$.

<!-- page 9 | Plane Rotation Method and End-Projector Problems -->

## Plane Rotation Method and End-Projector Problems

You already know how to find projections by rotating a line's apparent view until it is parallel to the $XY$ line. When the distance between end projectors is given instead of true lengths or angles, the views can be drawn immediately, and rotating the projecting plane onto the sheet gives the true length directly. By erecting perpendiculars at the ends of a view equal to the other view's distances from the $XY$ line, you fold the 3D projecting trapezoid flat to measure true length and true angle directly.

### The idea

The **distance between end projectors** ($EP$) is the horizontal spacing along the $XY$ line between the vertical projector of end $A$ ($a'a$) and the vertical projector of end $B$ ($b'b$). When you know the positions of both endpoints relative to the reference planes and the distance $EP$, you do not need loci or arcs to draw the views. You simply draw two vertical projectors spaced $EP$ apart, plot $a'$, $a$, $b'$, and $b$ at their given distances from $XY$, and join $a'b'$ and $ab$.

To find the true length and inclinations from these views, use the **Plane Rotation (Trapezoidal) Method**. Imagine the 3D line $AB$ and its top view $ab$. Together with the vertical projecting lines from $A$ to $a$ and $B$ to $b$, they form a vertical right-angled trapezoid resting on the $HP$. If you hinge this trapezoid about $ab$ and fold it flat onto the drawing sheet, the vertical heights become perpendiculars erected at $a$ and $b$. The lengths of these perpendiculars are simply the heights of $A$ and $B$ above or below the $HP$—which you read from the front view ($a'$ and $b'$ to $XY$). Joining their tips gives the true length $TL$, and the angle between $TL$ and $ab$ is the true inclination $\theta$ with the $HP$. Repeating this on the front view $a'b'$ using the distances of $a$ and $b$ from $XY$ gives $TL$ and the true inclination $\phi$ with the $VP$.

If a line crosses between quadrants, an endpoint's distance may be above $XY$ while the other is below $XY$; in that case, erect the two perpendiculars on opposite sides of the view so the line crosses the view just as it crosses the reference plane. Finally, if an endpoint lies directly on a reference plane, that endpoint is already the trace: an end in the $HP$ is the **Horizontal Trace** ($HT$), and an end in the $VP$ is the **Vertical Trace** ($VT$).

### Worked example

**Problem 20 (Q15):**
**Given:** End $A$ is in the $HP$ and 40 mm in front of the $VP$; end $B$ is in the $VP$ and 50 mm above the $HP$; distance between end projectors $EP = 70$ mm.
**Find:** The front and top views, true length $TL$, true inclinations $\theta$ and $\phi$, and traces $HT$ and $VT$.

1. Draw the reference line $XY$ and two vertical end projectors 70 mm apart to establish the horizontal spacing between ends $A$ and $B$.
2. On the left projector, mark $a'$ on $XY$ (since $A$ is in the $HP$) and $a$ 40 mm below $XY$ (since $A$ is in front of the $VP$).
3. On the right projector, mark $b'$ 50 mm above $XY$ (since $B$ is above the $HP$) and $b$ on $XY$ (since $B$ is in the $VP$).
4. Join $a'b'$ to get the front view (86 mm) and $ab$ to get the top view (80.6 mm).
5. Because end $A$ touches the $HP$ ($a'$ is on $XY$, so $a'$ is $h'$), the top view $a$ is directly the Horizontal Trace $HT$ (40 mm from $XY$); because end $B$ touches the $VP$ ($b$ is on $XY$, so $b$ is $v$), the front view $b'$ is directly the Vertical Trace $VT$ (50 mm from $XY$).
6. To fold the horizontal projecting plane flat, erect a perpendicular to $ab$ at $b$ of length 50 mm (the distance of $b'$ from $XY$; $a'$ is at 0 mm) to locate $B_1$, and join $aB_1$ to measure $TL = 94.9$ mm and $\theta = 31.8$° between $ab$ and $aB_1$.
7. To fold the vertical projecting plane flat, erect a perpendicular to $a'b'$ at $a'$ of length 40 mm (the distance of $a$ from $XY$; $b$ is at 0 mm) to locate $A_1$, and join $A_1b'$ to confirm $TL = 94.9$ mm and measure $\phi = 24.9$° between $a'b'$ and $A_1b'$.

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

**Answer:** $TL = 94.9$ mm, $a'b' = 86$ mm, $ab = 80.6$ mm, $\theta = 31.8$°, $\phi = 24.9$°, $HT = 40$ mm from $XY$, $VT = 50$ mm from $XY$.

### More problems

#### Problem 21 (Q16): Line touching reference planes in third quadrant
**Given:** End $A$ is in the $HP$ and 25 mm behind the $VP$; end $B$ is in the $VP$ and 50 mm below the $HP$; $EP = 75$ mm.
**Find:** Projections $a'b'$ and $ab$, true length $TL$, inclinations $\theta$ and $\phi$, and traces $HT$ and $VT$.

1. Draw $XY$ and two vertical end projectors 75 mm apart.
2. In the third quadrant, mark $a$ 25 mm above $XY$ and $a'$ on $XY$ on the left projector.
3. On the right projector, mark $b$ on $XY$ and $b'$ 50 mm below $XY$.
4. Join $a'b'$ for the front view (90.1 mm) and $ab$ for the top view (79.1 mm).
5. Mark $HT$ at $a$ (25 mm from $XY$, since $a'$ is $h'$ on $XY$) and $VT$ at $b'$ (50 mm from $XY$, since $b$ is $v$ on $XY$).
6. Erect a perpendicular to $ab$ at $b$ of length 50 mm (distance of $b'$ from $XY$) to find $TL = 93.5$ mm and $\theta = 32.3$°.
7. Erect a perpendicular to $a'b'$ at $a'$ of length 25 mm (distance of $a$ from $XY$) to measure $\phi = 15.5$°.

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

**Answer:** $TL = 93.5$ mm, $a'b' = 90.1$ mm, $ab = 79.1$ mm, $\theta = 32.3$°, $\phi = 15.5$°, $HT = 25$ mm from $XY$, $VT = 50$ mm from $XY$.

#### Problem 13 (Q13): Plane rotation in the third quadrant
**Given:** $A$ is 10 mm behind the $VP$ and 25 mm below the $HP$; $B$ is 30 mm behind the $VP$ and 40 mm below the $HP$; $EP = 50$ mm.
**Find:** Projections $a'b'$ and $ab$, true length $TL$, inclinations $\theta$ and $\phi$, and traces $HT$ and $VT$.

1. Draw $XY$ and two vertical projectors 50 mm apart.
2. Plot third-quadrant top views above $XY$ ($a$ at 10 mm, $b$ at 30 mm) and join $ab$ (53.9 mm).
3. Plot third-quadrant front views below $XY$ ($a'$ at 25 mm, $b'$ at 40 mm) and join $a'b'$ (52.2 mm).
4. Erect perpendiculars to $ab$ on the same side at $a$ (25 mm) and $b$ (40 mm); join their ends for $TL = 55.9$ mm and $\theta = 15.6$°.
5. Erect perpendiculars to $a'b'$ on the same side at $a'$ (10 mm) and $b'$ (30 mm); join their ends for $\phi = 21$°.
6. Extend $a'b'$ to meet $XY$ at $h'$, and project a vertical line from $h'$ to meet extended $ab$ at $HT$ (23.3 mm from $XY$).
7. Extend $ab$ to meet $XY$ at $v$, and project a vertical line from $v$ to meet extended $a'b'$ at $VT$ (17.5 mm from $XY$).

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

**Answer:** $TL = 55.9$ mm, $a'b' = 52.2$ mm, $ab = 53.9$ mm, $\theta = 15.6$°, $\phi = 21$°, $HT = 23.3$ mm from $XY$, $VT = 17.5$ mm from $XY$.

#### Problem 18 (Q14): Line spanning first and third quadrants
**Given:** $A$ is 25 mm below the $HP$ and 40 mm behind the $VP$; $B$ is 50 mm above the $HP$ and 25 mm in front of the $VP$; $EP = 55$ mm.
**Find:** Projections $a'b'$ and $ab$, true length $TL$, inclinations $\theta$ and $\phi$, and traces $HT$ and $VT$.

1. Draw $XY$ and two vertical projectors 55 mm apart.
2. On the left projector (third quadrant), mark $a$ 40 mm above $XY$ and $a'$ 25 mm below $XY$.
3. On the right projector (first quadrant), mark $b'$ 50 mm above $XY$ and $b$ 25 mm below $XY$.
4. Join $a'b'$ (93 mm) and $ab$ (85.1 mm), noting that both views cross the $XY$ line.
5. Mark $h'$ where $a'b'$ crosses $XY$, and project vertically to $ab$ to locate $HT$ (18.3 mm from $XY$).
6. Mark $v$ where $ab$ crosses $XY$, and project vertically to $a'b'$ to locate $VT$ (21.2 mm from $XY$).
7. Erect perpendiculars to $ab$ on opposite sides—25 mm at $a$ and 50 mm at $b$—and join their ends to find $TL = 113.5$ mm and $\theta = 41.4$°.
8. Erect perpendiculars to $a'b'$ on opposite sides—40 mm at $a'$ and 25 mm at $b'$—and join their ends to find $\phi = 34.9$°.

> **Watch out.** Because $a'$ is below $XY$ and $b'$ is above $XY$, you must erect their perpendiculars on opposite sides of $ab$ so the unfolded true-length line crosses $ab$ at the exact point where the line pierces the $HP$.

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

**Answer:** $TL = 113.5$ mm, $a'b' = 93$ mm, $ab = 85.1$ mm, $\theta = 41.4$°, $\phi = 34.9$°, $HT = 18.3$ mm from $XY$, $VT = 21.2$ mm from $XY$.

#### Problem 19 (Q207): First-to-third quadrant line with 100 mm projector spacing
**Given:** $A$ is 40 mm above the $HP$ and 20 mm in front of the $VP$; $B$ is 30 mm below the $HP$ and 50 mm behind the $VP$; $EP = 100$ mm.
**Find:** Projections $a'b'$ and $ab$, true length $TL$, inclinations $\theta$ and $\phi$, and traces $HT$ and $VT$.

1. Draw $XY$ and two vertical end projectors 100 mm apart.
2. On the left projector (first quadrant), mark $a'$ 40 mm above $XY$ and $a$ 20 mm below $XY$.
3. On the right projector (third quadrant), mark $b$ 50 mm above $XY$ and $b'$ 30 mm below $XY$.
4. Join $a'b'$ (122.1 mm) and $ab$ (122.1 mm).
5. Mark $h'$ where $a'b'$ intersects $XY$, and project vertically to $ab$ to locate $HT$ (20 mm from $XY$).
6. Mark $v$ where $ab$ intersects $XY$, and project vertically to $a'b'$ to locate $VT$ (20 mm from $XY$).
7. Erect perpendiculars to $ab$ on opposite sides—40 mm at $a$ and 30 mm at $b$—and join their ends to measure $TL = 140.7$ mm and $\theta = 29.8$°.
8. Erect perpendiculars to $a'b'$ on opposite sides—20 mm at $a'$ and 50 mm at $b'$—and join their ends to measure $\phi = 29.8$°.

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

![Worked orthographic projection solution step 207](/notes/cse/s1/graphics/module-1/assets/page-035-panel-1.webp)

**Answer:** $TL = 140.7$ mm, $a'b' = 122.1$ mm, $ab = 122.1$ mm, $\theta = 29.8$°, $\phi = 29.8$°, $HT = 20$ mm from $XY$, $VT = 20$ mm from $XY$.

<!-- page 10 | Mid-Point, Profile Plane, and Boundary-Condition Problems -->

## Mid-Point, Profile Plane, and Boundary-Condition Problems

You already know how to use both the line rotation and plane rotation methods when starting from a known endpoint. Now we adapt those same tools to special geometric constraints like midpoints, profile planes, and unanchored endpoints. Special symmetry or boundary conditions—such as a known midpoint or complementary angles ($\theta + \phi = 90^\circ$)—let you build the projection from the center outward or in a side profile view.

### The idea

Orthographic projection preserves ratios along a straight line. Therefore, the 3D midpoint $M$ of a line $AB$ always projects directly to the exact midpoint $m'$ of the front view $a'b'$ and the midpoint $m$ of the top view $ab$. Furthermore, the horizontal locus of $M$ lies halfway between the horizontal loci of $A$ and $B$. Because of this symmetry, you can treat $M$ as your anchor: build the half-line $MB$ using half the true length and half the view lengths, and then extend the views equally in the opposite direction to find $A$.

A second special case occurs when the sum of the true inclinations equals a right angle ($\theta + \phi = 90^\circ$), or when the end-projector distance is zero. The line then lies entirely within a **profile plane**—a vertical plane perpendicular to both the HP and VP. Because the line is edge-on to both main reference planes, both the front view $a'b'$ and top view $ab$ collapse onto a single vertical projector line. To see the true length and angles, you fold the profile plane flat around a perpendicular reference line $X_1Y_1$ to construct a side view.

Finally, in boundary-condition problems where end $A$ is in the HP ($a'$ on XY) and end $B$ is in the VP ($b$ on XY), you may not know the starting distance of $a$ from the XY line. You can still build the right triangle of true length and view length at the XY line to find the locus of $b'$, and then work backward from $b$ on the XY line to lock in the position of $a$.

### Worked example

#### Problem 21: Line given by midpoint, true length, and inclinations
**Given:** Midpoint $M$ is 40 mm above HP and 50 mm in front of VP; true length $AB = 70$ mm, $\theta = 45^\circ$, $\phi = 30^\circ$.
**Find:** The front view $a'b'$ and top view $ab$.

1. Draw the XY line, mark $m'$ 40 mm above XY and $m$ 50 mm below XY on a common vertical projector, and draw horizontal reference lines through both points.
2. From $m'$, draw a true-length half-segment $m'b_1' = 35$ mm at $\theta = 45^\circ$ above the horizontal to establish the horizontal locus of $b'$ at 64.7 mm above XY.
3. Extend the true-length line equally backward from $m'$ by 35 mm to $a_1'$ to establish the horizontal locus of $a'$ at 15.3 mm above XY.
4. From $m$, draw a true-length half-segment $mb_2 = 35$ mm at $\phi = 30^\circ$ below the horizontal to establish the locus of $b$ at 67.5 mm below XY, and extend it backward 35 mm to $a_2$ to establish the locus of $a$ at 32.5 mm below XY.
5. Project $b_1'$ vertically down to the horizontal line through $m$ to get $b_1$ (making $mb_1 = 24.75$ mm, half of top view $ab = 49.5$ mm), and swing an arc centered at $m$ from $b_1$ to the locus of $b$ to fix $b$; extend $bm$ backward equally to the locus of $a$ to fix $a$.
6. Project $b$ and $a$ vertically up to the loci of $b'$ and $a'$ to locate $b'$ and $a'$, and join them through $m'$ to complete the front view $a'b' = 60.6$ mm.

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

**Answer:** Front view $a'b' = 60.6$ mm, top view $ab = 49.5$ mm, $A$ is 15.3 mm above HP and 32.5 mm in front of VP, $B$ is 64.7 mm above HP and 67.5 mm in front of VP.

### More problems

#### Problem 20: Midpoint problem with given view lengths
**Given:** End $A$ is 20 mm in front of VP; midpoint $M$ is 45 mm above HP and 50 mm in front of VP; $a'b' = 90$ mm, $ab = 100$ mm.
**Find:** Projections, true length, and true inclinations $\theta$ and $\phi$.

1. Mark $m'$ 45 mm above XY and $m$ 50 mm below XY on the same vertical projector, and draw the locus of $a$ 20 mm below XY.
2. With center $m$ and radius $50$ mm (half of $ab = 100$ mm), swing an arc to cut the locus of $a$ at $a$, and extend line $am$ equally past $m$ by 50 mm to locate $b$ at 80 mm below XY.
3. Project $a$ and $b$ vertically across XY to form the end projectors of $A$ and $B$.
4. With center $m'$ and radius $45$ mm (half of $a'b' = 90$ mm), cut the end projectors of $A$ and $B$ to locate $a'$ (24.4 mm above XY) and $b'$ (65.6 mm above XY), and draw horizontal loci through both.
5. Rotate $ab$ around $a$ until horizontal as $ab_1$, project $b_1$ up to the locus of $b'$ at $b_1'$, and join $a'b_1'$ to measure true length and $\theta$.
6. Rotate $a'b'$ around $a'$ until horizontal as $a'b_2'$, project $b_2'$ down to the locus of $b$ at $b_2$, and join $ab_2$ to measure $\phi$.

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

**Answer:** True length $AB = 108.2$ mm, $\theta = 22.4^\circ$, $\phi = 33.7^\circ$.

#### Problem 17: Ladder problem in a profile plane
**Given:** Line $AB = 80$ mm; $A$ is in HP, $B$ is in VP; $\theta = 30^\circ$, $\phi = 60^\circ$.
**Find:** The projections of line $AB$.

1. Notice that $\theta + \phi = 30^\circ + 60^\circ = 90^\circ$, so the line lies in a profile plane and both views fall on a single vertical projector $y_2x_2$ intersecting the horizontal line $x_1y_1$ at $a'(b)$.
2. From the intersection $a'(b)$, draw a line of true length 80 mm inclined at $\theta = 30^\circ$ to the horizontal $x_1y_1$, and project its height horizontally to the vertical projector to locate $b'(B)$ at 40 mm above XY.
3. Alternatively, from $b'(B)$ at height $80 \sin 30^\circ = 40$ mm on the vertical projector, draw the 80 mm true-length line down at $60^\circ$ to the vertical to meet $x_1y_1$ at $a_1A$ at distance 69.3 mm.
4. Transfer the horizontal distance of 69.3 mm onto the vertical projector above XY (representing $A$ behind VP) to mark $a$ at 69.3 mm from XY, completing front view $a'b' = 40$ mm and top view $ab = 69.3$ mm.

![Worked solution step labelled 17 for a line projection problem](/notes/cse/s1/graphics/module-1/assets/page-039-panel-1.webp)

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

> **Watch out.** Because the problem does not specify a quadrant, more than one arrangement is possible; here $A$ is taken 69.3 mm behind VP so $a$ lies above XY.

**Answer:** Front view $a'b' = 40$ mm, top view $ab = 69.3$ mm, $B$ is 40 mm above HP, $A$ is 69.3 mm from VP.

#### Problem 37: Both ends on the same vertical projector
**Given:** $A$ and $B$ lie on the same projector; $A$ is 25 mm below HP and 30 mm behind VP; $B$ is 50 mm above HP and 40 mm in front of VP.
**Find:** Projections, true length, and true inclinations $\theta$ and $\phi$.

1. Draw a single vertical projector across XY; mark $a'$ 25 mm below XY and $a$ 30 mm above XY (since $A$ is in the third quadrant).
2. On the same vertical projector, mark $b'$ 50 mm above XY and $b$ 40 mm below XY, giving vertical segments $a'b' = 75$ mm and $ab = 70$ mm.
3. To construct the profile view, step out horizontally from $b'$ to the right by 40 mm (the distance of $B$ in front of VP) to mark $B_1$.
4. Step out horizontally from $a'$ to the left by 30 mm (the distance of $A$ behind VP) to mark $A_1$.
5. Join $A_1B_1$ to get the true length in the profile view, and measure its angle with the horizontal for $\theta$ and with the vertical projector for $\phi$.

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

**Answer:** Front view $a'b' = 75$ mm, top view $ab = 70$ mm, true length $AB = 102.6$ mm, $\theta = 47^\circ$, $\phi = 43^\circ$.

#### Problem 18: Unanchored endpoints resting on HP and VP
**Given:** True length $AB = 100$ mm, $\theta = 45^\circ$, $\phi = 30^\circ$; end $A$ is on the ground (HP) and end $B$ is in the VP.
**Find:** The projections of $AB$ and the height of $B$ above HP.

1. Since $A$ is in HP, mark $a'$ on the XY line and draw $a'b_1' = 100$ mm at $\theta = 45^\circ$ above XY to establish the horizontal locus of $b'$ at 70.7 mm above XY.
2. Drop a perpendicular from $b_1'$ to XY to find the top view length $ab = 70.7$ mm.
3. From $a'$ on XY, also draw a line of 100 mm at $\phi = 30^\circ$ to XY to find the front view length $a'b' = 86.6$ mm as its horizontal projection.
4. With center $a'$ and radius $a'b' = 86.6$ mm, swing an arc to cut the locus of $b'$ at $b'$, and drop a vertical projector from $b'$ to XY to locate $b$ (since $B$ is in VP).
5. With center $b$ and radius $ab = 70.7$ mm, swing an arc to cut the vertical projector through $a'$ at $a$ (located 50 mm above XY, meaning 50 mm behind VP), and join $ab$.

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

**Answer:** Height of $B$ above HP = 70.7 mm, front view $a'b' = 86.6$ mm, top view $ab = 70.7$ mm, $A$ is 50 mm behind VP.

#### Problem 25: Boundary conditions with given view lengths and true length
**Given:** True length $AB = 65$ mm, front view $a'b' = 60$ mm, top view $ab = 50$ mm; lower end $A$ is in HP and upper end $B$ is in VP.
**Find:** The projections of $AB$ and true inclinations $\theta$ and $\phi$.

1. Since $A$ is in HP, mark $a'$ on the XY line and step off $a'b_1 = 50$ mm (equal to top view $ab$) along the XY line.
2. Erect a vertical line at $b_1$, and with center $a'$ and radius $AB = 65$ mm, cut this vertical at $b_1'$ to establish the horizontal locus of $b'$ at 41.5 mm above XY and measure $\theta$.
3. With center $a'$ and radius $a'b' = 60$ mm, swing an arc to cut the locus of $b'$ at $b'$, and join $a'b'$ for the front view.
4. Since $B$ is in VP, project $b'$ vertically down to the XY line to locate $b$.
5. With center $b$ and radius $ab = 50$ mm, swing an arc to cut the vertical projector through $a'$ at $a$ (25 mm below XY), and join $ab$ for the top view.
6. Using the front view length $60$ mm and true length $65$ mm, construct the true-length triangle for the top view to measure $\phi$.

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

**Answer:** $\theta = 39.7^\circ$ (or $40^\circ$), $\phi = 22.6^\circ$ (or $23^\circ$), $A$ is 25 mm in front of VP, $B$ is 41.5 mm above HP.

<!-- page 11 | Trace Problems I: Building Projections from Both Traces -->

## Trace Problems I: Building Projections from Both Traces
Previously you found the horizontal trace ($HT$) and vertical trace ($VT$) at the very end by extending the completed views. Now you will reverse the process and use given trace positions as the starting framework to build the front and top views themselves.

### The idea
A trace is simply the point where an extended 3D line pierces one of the reference planes. When the line pierces the Horizontal Plane at $HT$, its height is zero, so the front view of that piercing point—written $h'$—must lie directly on the $XY$ line, on the same vertical projector as $HT$. Similarly, when the line pierces the Vertical Plane at $VT$, its depth from the $VP$ is zero, so the top view of that point—written $v$—lies on the $XY$ line on the same vertical projector as $VT$.

This gives you two strict **collinearity rules**: the four front-view points $a'$, $b'$, $h'$, and $VT$ always lie on a single straight line, and the four top-view points $a$, $b$, $v$, and $HT$ always lie on a single straight line. Therefore, if a problem gives you the positions of $HT$ and $VT$ along with the **distance between trace projectors** (the horizontal spacing along $XY$ between the projector $h'\text{–}HT$ and the projector $v\text{–}VT$) or an apparent inclination, you can immediately draw the entire straight line $h'\text{–}VT$ and the entire straight line $HT\text{–}v$.

Once those two trace lines are drawn, the paths of both views are locked in. You simply locate the endpoints $a'$, $b'$, $a$, and $b$ along those lines using their given heights, depths, or end-projector spacing, and then apply the Plane Rotation (trapezoidal) method directly across the view or trace segments to measure true length and true inclinations $\theta$ and $\phi$.

### Worked example
**Given:** The projectors through $HT$ and $VT$ are 95 mm apart, the end projectors are 65 mm apart, $HT$ is 30 mm in front of the $VP$, $VT$ is 45 mm above the $HP$, and end $A$ is 10 mm above the $HP$.
**Find:** The projections of line $AB$, its true length, and its true inclinations $\theta$ and $\phi$.

1. Draw the reference line $XY$ and two vertical trace projectors 95 mm apart; mark $h'$ on $XY$ with $HT$ 30 mm below $XY$ on the left projector, and mark $v$ on $XY$ with $VT$ 45 mm above $XY$ on the right projector, then join $h'\text{–}VT$ and $HT\text{–}v$ to establish the paths of the front and top views.

![Step 26.1: Locating HT, VT, h', and v with connecting trace lines](/notes/cse/s1/graphics/module-1/assets/page-044-panel-1.webp)

2. Locate $a'$ on the line $h'\text{–}VT$ at 10 mm above $XY$ (which places $A$ 23.3 mm in front of the $VP$), drop a vertical projector to meet $HT\text{–}v$ at $a$, and draw a second vertical projector 65 mm away to cut the extended trace lines at $b'$ (20.8 mm below $XY$) and $b$ (43.9 mm below $XY$).

![Step 26.2: Drawing front view a'b' and top view ab between the trace lines](/notes/cse/s1/graphics/module-1/assets/page-044-panel-2.webp)

3. Apply the trapezoidal method by erecting perpendiculars at the views equal to their opposite distances from $XY$ to fold out the true-length line $AB$ and measure $TL = 74.8$ mm, $\theta = 24.3°$, and $\phi = 15.9°$.

![Step 26.3: Orthographic projection solution for Problem 26 using the trapezoidal method](/notes/cse/s1/graphics/module-1/assets/page-045-panel-1.webp)

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

**Answer:** True length $AB = 74.8$ mm, front view $a'b' = 71.9$ mm, top view $ab = 68.2$ mm, $\theta = 24.3°$, $\phi = 15.9°$.

### More problems

#### Problem 26: Traces in behind-VP and below-HP positions
**Given:** Trace projectors are 90 mm apart, end projectors are 60 mm apart, $HT$ is 40 mm behind the $VP$, $VT$ is 50 mm below the $HP$, and end $A$ is assumed in the $HP$.
**Find:** The projections of line $AB$, its true length, and its true inclinations $\theta$ and $\phi$.

1. Draw $XY$ and two vertical trace projectors 90 mm apart.
2. On the left projector, mark $h'$ on $XY$ and $HT$ 40 mm above $XY$ (behind the $VP$).
3. On the right projector, mark $v$ on $XY$ and $VT$ 50 mm below $XY$ (below the $HP$).
4. Join $h'\text{–}VT$ and $HT\text{–}v$ to form the front-view and top-view carrier lines.
5. Since end $A$ is assumed in the $HP$, place $a'$ at $h'$ on $XY$ and $a$ at $HT$ 40 mm above $XY$.
6. Draw the second end projector 60 mm to the right to locate $b'$ (33.3 mm above $XY$) and $b$ (66.7 mm above $XY$).
7. Erect perpendiculars by the plane rotation method on $a'b'$ and $ab$ to measure true length and true angles.

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

> **Watch out.** When a problem gives four conditions instead of five, placing end $A$ in the $HP$ makes $A$ coincide directly with $HT$.

**Answer:** True length $AB = 73.6$ mm, front view $a'b' = 68.6$ mm, top view $ab = 65.7$ mm, $\theta = 26.9°$, $\phi = 21.2°$.

#### Problem 27: Traces with top-view apparent inclination
**Given:** Top view inclination $\beta = 30°$, $HT$ is 40 mm in front of the $VP$, $VT$ is 50 mm above the $HP$, $A$ is 20 mm above the $HP$, and $B$ is 10 mm behind the $VP$.
**Find:** The projections of line $AB$, its true length, and its true inclinations $\theta$ and $\phi$.

1. Draw $XY$, mark $h'$ on $XY$, and locate $HT$ 40 mm below $XY$ on the same vertical projector.
2. From $HT$, draw the top-view line at $\beta = 30°$ to $XY$, crossing $XY$ at $v$.
3. Erect a vertical projector from $v$ to locate $VT$ 50 mm above $XY$, then join $h'\text{–}VT$.
4. Mark $a'$ on $h'\text{–}VT$ at 20 mm above $XY$ and project vertically to $HT\text{–}v$ to find $a$ (24 mm below $XY$).
5. Extend $HT\text{–}v$ above $XY$ to locate $b$ at 10 mm above $XY$ (behind the $VP$).
6. Project vertically from $b$ to the extended line $h'\text{–}VT$ to find $b'$ at 62.5 mm above $XY$.
7. Construct the plane-rotation perpendiculars on $a'b'$ and $ab$ passing through $VT$ and $HT$ to find $TL$, $\theta$, and $\phi$.

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

**Answer:** True length $AB = 80.2$ mm, front view $a'b' = 72.6$ mm, top view $ab = 68$ mm, $\theta = 32°$, $\phi = 25.1°$.

#### Problem 28: Traces with front-view apparent inclination
**Given:** Front view inclination $\alpha = 30°$, $HT$ is 30 mm behind the $VP$, $VT$ is 40 mm above the $HP$, $A$ is 15 mm below the $HP$, and $B$ is 10 mm in front of the $VP$.
**Find:** The projections of line $AB$ and the lengths of the front and top views.

1. Draw $XY$, mark $h'$ on $XY$, and locate $HT$ 30 mm above $XY$ (behind the $VP$).
2. Through $h'$, draw the front-view carrier line at $\alpha = 30°$ to $XY$.
3. On this line, locate $VT$ at 40 mm above $XY$ and project vertically down to $XY$ to mark $v$.
4. Join $HT$ and $v$ and extend across $XY$ to form the top-view carrier line.
5. Locate $a'$ on the front-view line 15 mm below $XY$ and project vertically to the top-view line to find $a$ (41.3 mm above $XY$).
6. Locate $b$ on the top-view line 10 mm below $XY$ and project vertically to the front-view line to find $b'$ (53.3 mm above $XY$).
7. Measure the completed front view $a'b'$ and top view $ab$, and use plane rotation to check true length and angles.

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

**Answer:** Front view $a'b' = 136.7$ mm, top view $ab = 129$ mm (true length $AB = 146$ mm, $\theta = 27.9°$, $\phi = 20.6°$).

#### Problem 29: Traces with given true length
**Given:** True length $AB = 120$ mm, $VT$ is 80 mm above $XY$, $HT$ is 100 mm below $XY$, trace projectors are 110 mm apart, and $A$ is 10 mm above the $HP$.
**Find:** The projections of line $AB$ and its true inclinations $\theta$ and $\phi$.

1. Draw $XY$ and two vertical trace projectors 110 mm apart.
2. Mark $v$ on $XY$ with $VT$ 80 mm above $XY$ on one projector, and $h'$ on $XY$ with $HT$ 100 mm below $XY$ on the other.
3. Join $h'\text{–}VT$ and $HT\text{–}v$ to establish the front-view and top-view carrier lines.
4. Locate $a'$ on $h'\text{–}VT$ at 10 mm above $XY$ and project vertically to $HT\text{–}v$ to find $a$ (87.5 mm below $XY$).
5. Erect a perpendicular to $h'\text{–}VT$ at $h'$ of length 100 mm, join its tip to $VT$ for the true-length line, and measure $\phi = 36.3°$.
6. Project $a'$ perpendicular to $h'\text{–}VT$ onto this true-length line, step off $AB = 120$ mm along it, and project back to $h'\text{–}VT$ extended to find $b'$ (46.9 mm below $XY$).
7. Project vertically from $b'$ to $HT\text{–}v$ extended to locate $b$ (158.6 mm below $XY$) and use the top-view trapezoid to measure $\theta = 28.3°$.

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

**Answer:** True inclinations $\theta = 28.3°$ and $\phi = 36.3°$ (front view $a'b' = 96.7$ mm, top view $ab = 105.7$ mm).

<!-- page 12 | Trace Problems II: Combining One Trace with Lengths and Angles -->

## Trace Problems II: Combining One Trace with Lengths and Angles
You already know how to build a line's projections when both traces are given. Now you will combine a single known trace with rotation arcs and inclination rays to deduce the rest of the line.

### The idea
A single trace acts as a bonus point on the line with one coordinate already equal to zero. Because the **Vertical Trace** ($VT$) lies on the VP, its top view $v$ has zero depth and sits right on the $XY$ line. Similarly, because the **Horizontal Trace** ($HT$) lies on the HP, its front view $h'$ has zero height and sits on the $XY$ line. 

Whenever you know one endpoint and a trace—or the **projector spacing** between an endpoint and a trace (such as the horizontal distance $A\text{--}VT$)—you can immediately draw the entire extended view connecting them. Once one view is locked in, $v$ or $h'$ acts as a fixed pivot point on the $XY$ line. From that pivot, you can either apply the **Line Rotation Method** (swinging true-length or apparent-length arcs between loci) or the **Plane Rotation Method** (folding the projecting trapezoid flat by drawing a true-inclination ray directly from $VT$ or $HT$ at $\phi$ or $\theta$ to the view). Both methods yield the exact same projections and locate the missing trace.

Finally, in the special case where a line intersects the $XY$ reference line itself, its **coinciding traces** ($HT$ and $VT$) meet at a single common point on $XY$. Both the front view and the top view must pass through this shared point.

### Worked example
**Problem 32 (Q32):** A line $AB$ is in the third quadrant. The ends $A$ and $B$ are 20 mm and 60 mm behind the VP. The distance between the end projectors is 75 mm. The line is inclined at 30° to the HP and the top view of its horizontal trace is 10 mm above the $XY$ line (that is, the trace is 10 mm in front of VP). Draw the projections of the line $AB$, and determine its true length and vertical trace.

**Given:** Third quadrant; $A$ is 20 mm behind VP, $B$ is 60 mm behind VP; end projector distance = 75 mm; $\theta = 30°$; $HT$ is 10 mm above $XY$.
**Find:** Projections $a'b'$ and $ab$, true length $TL$, true inclination $\phi$, and $VT$.

1. Draw two vertical end projectors 75 mm apart; because the line is in the third quadrant, mark top views $a$ at 20 mm above $XY$ and $b$ at 60 mm above $XY$ to draw the top view $ab$ (85 mm).
2. Extend $ba$ down and left to cross the locus 10 mm above $XY$ at $HT$, and continue it to meet the $XY$ line at $v$, since $b$, $a$, $HT$, and $v$ must be collinear.
3. Drop a vertical projector from $HT$ to the $XY$ line to locate $h'$, the front-view anchor of the horizontal trace.
4. To find the front view length, rotate the top view $ab$ about $a$ until it is horizontal, and combine its length (85 mm) with $\theta = 30°$ to obtain the true length $TL = 98.2$ mm and the vertical height difference between $a'$ and $b'$.
5. Because $h'$, $a'$, and $b'$ are collinear and have a known height difference over the 75 mm span, draw the line from $h'$ down into the third quadrant below $XY$ to locate $a'$ (36.8 mm below $XY$) and $b'$ (85.9 mm below $XY$), giving front view $a'b' = 89.6$ mm.
6. Extend $b'a'$ up past $h'$ to meet the vertical projector through $v$ above $XY$, locating $VT$ at 12.3 mm from $XY$, and measure the true inclination with the VP as $\phi = 24.1°$.

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
    "The top view of HT is 10 mm above XY; HT is 10 mm in front of VP"
  ]
}
```

**Answer:** $TL = 98.2$ mm, $a'b' = 89.6$ mm, $ab = 85$ mm, $\phi = 24.1°$, and $VT$ is 12.3 mm from the $XY$ line.

### More problems

#### Problem 41 (Q30): Traces coinciding on the XY line
**Given:** Third quadrant; $TL = 90$ mm; top view $ab = 70$ mm at $\beta = 30°$ to $XY$; $A$ is 20 mm behind VP; $HT$ and $VT$ coincide on $XY$.
**Find:** Projections $a'b'$ and $ab$, and front view inclination $\alpha$ (and true angles $\theta$, $\phi$).

1. Mark $a$ 20 mm above $XY$ (third quadrant) and draw top view $ab = 70$ mm inclined at $\beta = 30°$ upward to locate $b$ at 55 mm above $XY$.
2. Extend $ba$ down-left to hit the $XY$ line at the common trace point $HT, h', VT, v$ (0 mm from $XY$).
3. From $a$, swing a horizontal arc of $ab$ to $b_1$ and project down, or swing $TL = 90$ mm from the common trace on $XY$, to find the heights of $a'$ (32.3 mm below $XY$) and $b'$ (88.9 mm below $XY$).
4. Draw the front view $a'b'$ (82.9 mm) from the coinciding trace on $XY$ through $a'$ and $b'$, and measure the true inclinations $\theta = 38.9°$ and $\phi = 22.9°$.

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

**Answer:** $a'b' = 82.9$ mm, $ab = 70$ mm, $\theta = 38.9°$, $\phi = 22.9°$, and $HT, VT$ are 0 mm from the $XY$ line.

#### Problem 31 (Q33): Projector distance between A and VT
**Given:** $TL = 100$ mm; $A$ is 40 mm above HP and 20 mm in front of VP; $VT$ is 15 mm above HP; $A\text{--}VT$ projector distance = 75 mm.
**Find:** Projections $a'b'$ and $ab$, true inclinations $\theta$ and $\phi$, and $HT$.

1. Mark $a'$ 40 mm above $XY$ and $a$ 20 mm below $XY$; draw a projector 75 mm from $A$'s projector and mark $VT$ 15 mm above $XY$ with $v$ on $XY$.
2. Draw the front view line from $VT$ through $a'$ and extend it to meet $XY$ at $h'$.
3. Draw the top view line from $v$ through $a$ and extend it to meet the vertical projector from $h'$ at $HT$ (12 mm from $XY$).
4. Using the Plane Rotation trapezoid on $a'$ (erecting 20 mm perpendicular to $VT\text{--}a'$) or Line Rotation, mark off $TL = 100$ mm from $A$ to locate $b'$ (70.7 mm above $XY$) and $b$ (44.5 mm below $XY$).
5. Measure front view $a'b' = 96.9$ mm, top view $ab = 95.2$ mm, and true angles $\theta = 17.9°$ and $\phi = 14.2°$.

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

**Answer:** $a'b' = 96.9$ mm, $ab = 95.2$ mm, $\theta = 17.9°$, $\phi = 14.2°$, and $HT$ is 12 mm from the $XY$ line.

#### Problem 35 (Q203): Projector distance between B and VT
**Given:** $TL = 60$ mm; $B$ is 30 mm above HP and 35 mm in front of VP; $VT$ is 15 mm above HP; $B\text{--}VT$ projector distance = 80 mm.
**Find:** Projections $a'b'$ and $ab$, true inclinations $\theta$ and $\phi$, and $HT$.

1. Mark $VT$ 15 mm above $XY$ (with $v$ on $XY$); 80 mm to the right, draw $B$'s projector and mark $b'$ 30 mm above $XY$ and $b$ 35 mm below $XY$.
2. Connect $VT$ to $b'$ for the front view line and $v$ to $b$ for the top view line.
3. Rotate the top view segment $vb$ around $v$ to the $XY$ line and project up to the horizontal locus of $b'$ (30 mm above $XY$) to establish the true-length line through $VT$ at $\theta = 9.7°$.
4. Measure $TL = 60$ mm from the rotated $B$ back toward $VT$ along the true-length ray to find the horizontal locus of $a'$ at 19.8 mm above $XY$.
5. Project $a'$ to the front view line ($a'b' = 55.1$ mm) and down to the top view line to find $a$ at 11.3 mm below $XY$ ($ab = 59.1$ mm) and $\phi = 23.3°$.

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

**Answer:** $a'b' = 55.1$ mm, $ab = 59.1$ mm, $\theta = 9.7°$, $\phi = 23.3°$, and $HT$ is 35 mm from the $XY$ line.

#### Problem 38 (Q209): Front view, apparent angles, and VT
**Given:** $a'b' = 60$ mm at $\alpha = 50°$ to $XY$; top view at $\beta = 30°$ to $XY$; $A$ is 15 mm above HP; $VT$ is 10 mm below HP.
**Find:** Projections, true length $TL$, true inclinations $\theta$ and $\phi$, and $HT$.

1. Mark $a'$ 15 mm above $XY$ and draw front view $a'b' = 60$ mm at $\alpha = 50°$ upward to locate $b'$ at 61 mm above $XY$.
2. Extend $b'a'$ down-left to cross $XY$ at $h'$ and meet the locus 10 mm below $XY$ at $VT$; project $VT$ vertically up to $XY$ to locate $v$.
3. From $v$ on $XY$, draw the extended top view line downward at $\beta = 30°$ to $XY$.
4. Drop vertical projectors from $h'$, $a'$, and $b'$ to intersect this 30° line at $HT$ (4.8 mm below $XY$), $a$ (12.1 mm below $XY$), and $b$ (34.4 mm below $XY$), giving $ab = 44.5$ mm.
5. Rotate $ab$ and $a'b'$ parallel to $XY$ and project to the opposite loci to find $TL = 64$ mm, $\theta = 45.9°$, and $\phi = 20.4°$.

> **Watch out.** The summary box at the bottom of the source page prints `[4] FV - 40 mm`, which is a typo for the 60 mm front view stated in the problem text.

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

**Answer:** $TL = 64$ mm, $ab = 44.5$ mm, $\theta = 45.9°$, $\phi = 20.4°$, and $HT$ is 4.8 mm from the $XY$ line.

#### Problem 32 (Q34): VT and phi by Line Rotation
**Given:** $a'b' = 80$ mm at $\alpha = 45°$ to $XY$; $A$ is in HP; $VT$ is 30 mm above HP; $\phi = 30°$.
**Find:** Projections, $TL$, $\theta$, distance of $B$ from HP and VP, and distance of $HT$ from $XY$.

1. Mark $a'$ on $XY$ (since $A$ is in the HP, $a'$ is also $h'$) and draw $a'b' = 80$ mm at $\alpha = 45°$ to place $b'$ at 56.6 mm above $XY$.
2. Mark $VT$ on $a'b'$ at 30 mm above $XY$, and drop a projector to $v$ on $XY$.
3. Treating $VT$ as the pivot, the segment $VT\text{--}b'$ has length $80 - (30 / \sin 45°) = 37.6$ mm; using $\phi = 30°$ by line rotation from $v$, find the true length $TL = 92.4$ mm and the locus of $b$ at 21.7 mm below $XY$.
4. Swing the top-view length from $v$ to locate $b$ on its locus, and draw the line from $b$ through $v$ to cross $A$'s projector above $XY$ at $a$ ($HT$), 24.5 mm behind the VP.
5. Rotate top view $ab$ (73 mm) parallel to $XY$ to measure true inclination $\theta = 37.8°$.

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

**Answer:** $TL = 92.4$ mm, $ab = 73$ mm, $\theta = 37.8°$, $B$ is 56.6 mm above HP and 21.7 mm in front of VP, and $HT$ is 24.5 mm from the $XY$ line.

#### Problem 33 (Q35): Same problem by Plane Rotation
**Given:** $a'b' = 80$ mm at $\alpha = 45°$ to $XY$; $A$ is in HP; $VT$ is 30 mm above HP; $\phi = 30°$.
**Find:** Projections, $TL$, $\theta$, distance of $B$ from HP and VP, and distance of $HT$ from $XY$ using the Plane Rotation method.

1. As before, draw $a'b' = 80$ mm from $a'$ ($h'$) on $XY$ at 45°, mark $VT$ at 30 mm above $XY$, and project down to $v$ on $XY$.
2. Fold the projecting plane directly onto the VP: from $VT$, draw a true-length ray at $\phi = 30°$ to the front view line $a'b'$.
3. Erect perpendiculars to $a'b'$ at $a'$ and $b'$ to meet this 30° ray, giving the true length $TL = 92.4$ mm directly and the perpendicular lengths as the distances of $A$ (24.5 mm) and $B$ (21.7 mm) from the VP.
4. Transfer 24.5 mm above $XY$ on $A$'s projector to mark $a$ ($HT$), and 21.7 mm below $XY$ on $B$'s projector to mark $b$, confirming that $a$, $v$, and $b$ are collinear with $ab = 73$ mm.
5. Rotate $ab$ or construct the HP trapezoid to measure $\theta = 37.8°$.

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

**Answer:** $TL = 92.4$ mm, $ab = 73$ mm, $\theta = 37.8°$, $B$ is 56.6 mm above HP and 21.7 mm in front of VP, and $HT$ is 24.5 mm from the $XY$ line.

#### Problem Q39: VT below HP with phi given
**Given:** $a'b' = 70$ mm at $\alpha = 45°$ to $XY$; $A$ is on HP; $VT$ is 10 mm below HP; $\phi = 30°$.
**Find:** Projections $a'b'$ and $ab$, true length $TL$, and true inclination $\theta$.

1. Mark $a'$ ($h'$) on $XY$ and draw $a'b' = 70$ mm at $\alpha = 45°$ upward to locate $b'$ at 49.5 mm above $XY$.
2. Extend $b'a'$ below $XY$ to meet the locus 10 mm below $XY$ at $VT$, and project $VT$ up to $v$ on $XY$.
3. From $VT$, draw a ray inclined at $\phi = 30°$ to the extended front view line $VT\text{--}b'$.
4. Erect perpendiculars to $VT\text{--}b'$ at $a'$ and $b'$ to intersect this 30° ray, giving $TL = 80.8$ mm and the distances of $A$ (8.2 mm) and $B$ (48.6 mm) in front of the VP.
5. Mark $a$ ($HT$) 8.2 mm below $XY$ and $b$ 48.6 mm below $XY$ on their respective projectors, connect $a$ and $b$ ($ab = 63.9$ mm, collinear with $v$), and rotate $ab$ to find $\theta = 37.8°$.

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

**Answer:** $TL = 80.8$ mm, $ab = 63.9$ mm, $\theta = 37.8°$, and $HT$ is 8.2 mm from the $XY$ line.

#### Problem Q36: Front view, theta, and HT given
**Given:** $A$ is 10 mm above HP, $B$ is 45 mm above HP; $a'b' = 60$ mm; $\theta = 30°$; $HT$ is 15 mm in front of VP.
**Find:** Projections, true length $TL$, true inclination $\phi$, and $VT$.

1. Draw horizontal loci 10 mm and 45 mm above $XY$; pick $a'$ on the 10 mm locus and swing 60 mm to the 45 mm locus to draw $a'b'$, and swing a ray at $\theta = 30°$ to the 45 mm locus to measure $TL = 70$ mm.
2. Extend $b'a'$ down-left to cross $XY$ at $h'$, and drop a projector 15 mm below $XY$ to locate $HT$.
3. Project the rotated true-length point $b_1'$ down to the horizontal line through $a$ to get the top-view radius $ab = 60.6$ mm.
4. Using the distance between $A$'s projector and $B$'s projector together with $ab = 60.6$ mm on a line passing through $HT$, locate $a$ (25.3 mm below $XY$) and $b$ (61.4 mm below $XY$).
5. Extend $ba$ through $HT$ to hit $XY$ at $v$, drop a perpendicular to the extended front view line $b'a'$ to locate $VT$ at 14.6 mm below $XY$, and find $\phi = 31°$.

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

**Answer:** $TL = 70$ mm, $ab = 60.6$ mm, $\phi = 31°$, and $VT$ is 14.6 mm from the $XY$ line.

#### Problem 36 (Q40): Endpoint heights, front view, VT, and phi
**Given:** $A$ is 50 mm above HP, $B$ is 20 mm above HP; $a'b' = 70$ mm; $VT$ is 10 mm above HP; $\phi = 40°$.
**Find:** Projections, true length $TL$, true inclination $\theta$, and $HT$.

1. Draw loci at 50 mm and 20 mm above $XY$; mark $a'$ on the 50 mm locus and swing $a'b' = 70$ mm down to the 20 mm locus to locate $b'$.
2. Extend $a'b'$ down-right to cross the 10 mm locus above $XY$ at $VT$ and meet $XY$ at $h'$; drop a projector from $VT$ to $v$ on $XY$.
3. Using the Plane Rotation method, draw a ray from $VT$ at $\phi = 40°$ to the line $a'b'\text{--}VT$.
4. Erect perpendiculars to $a'b'\text{--}VT$ at $a'$ and $b'$ to meet the 40° ray, measuring $TL = 91.4$ mm and the distances of $A$ (78.3 mm) and $B$ (19.6 mm) behind the VP.
5. Mark $a$ 78.3 mm above $XY$ and $b$ 19.6 mm above $XY$ to draw $ab = 86.3$ mm passing through $v$, locate $HT$ on $h'$'s projector at 19.6 mm from $XY$, and rotate to find $\theta = 19.2°$.

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

**Answer:** $TL = 91.4$ mm, $ab = 86.3$ mm, $\theta = 19.2°$, and $HT$ is 19.6 mm from the $XY$ line.

#### Problem 37 (Q196): Rising front view with VT and phi
**Given:** $A$ is 20 mm above HP, $B$ is 50 mm above HP; $a'b' = 70$ mm; $VT$ is 10 mm above HP; $\phi = 45°$.
**Find:** Projections, true length $TL$, true inclination $\theta$, and $HT$.

1. Draw loci at 20 mm and 50 mm above $XY$; mark $a'$ on the 20 mm locus and swing $a'b' = 70$ mm up to the 50 mm locus to locate $b'$.
2. Extend $b'a'$ down-left to cross the 10 mm locus above $XY$ at $VT$ and hit $XY$ at $h'$; project $VT$ down to $v$ on $XY$.
3. From $VT$, draw a ray at $\phi = 45°$ to the front view line $VT\text{--}a'b'$, and erect perpendiculars at $a'$ and $b'$ to meet this ray.
4. Measure the true length $TL = 99$ mm along the ray, and take the perpendicular lengths as the distances of $A$ (23.3 mm) and $B$ (93.3 mm) in front of the VP.
5. Plot $a$ and $b$ below $XY$ to get $ab = 94.3$ mm, extend to $h'$'s projector to find $HT$ at 23.3 mm from $XY$, and swing $TL = 99$ mm from $a'$ to the 50 mm locus to measure $\theta = 17.6°$.

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

**Answer:** $TL = 99$ mm, $ab = 94.3$ mm, $\theta = 17.6°$, and $HT$ is 23.3 mm from the $XY$ line.

#### Problem Q28: Line crossing quadrants with VT, beta, and theta
**Given:** $\theta = 30°$; top view angle $\beta = 45°$; $A$ is 15 mm in front of VP (below HP); $B$ is 50 mm behind VP (above HP); $VT$ is 30 mm below $XY$.
**Find:** Projections $a'b'$ and $ab$, true length $TL$, $\phi$, and $HT$.

1. Mark $a$ 15 mm below $XY$ and draw a line upward at $\beta = 45°$ to cross $XY$ at $v$ and meet the locus 50 mm above $XY$ at $b$, giving top view $ab = 91.9$ mm.
2. On the vertical projector through $v$, mark $VT$ at 30 mm below $XY$.
3. Rotate the top view $ab$ (91.9 mm) about $a$ until it is horizontal; since $\theta = 30°$, construct a right triangle on this horizontal span of 91.9 mm with base angle 30° to find $TL = 106.1$ mm and the total vertical rise of 53 mm between $a'$ and $b'$.
4. Because $a'$, $VT$, and $b'$ are collinear and $v$ divides $ab$ in the ratio $15:50$, the line through $VT$ with a total vertical rise of 53 mm between $A$'s and $B$'s projectors places $a'$ at 42.2 mm below $XY$ and $b'$ at 10.8 mm above $XY$ ($a'b' = 83.9$ mm).
5. Mark $h'$ where $a'b'$ crosses $XY$, project vertically to the top view line $ab$ to locate $HT$ at 36.7 mm from $XY$, and find $\phi = 37.8°$.

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

**Answer:** $TL = 106.1$ mm, $a'b' = 83.9$ mm, $ab = 91.9$ mm, $\phi = 37.8°$, and $HT$ is 36.7 mm from the $XY$ line.

<!-- page 13 | Real-World Engineering Applications of Line Projections -->

## Real-World Engineering Applications of Line Projections

Now that you can find the true length and angles of any abstract line in space, you are ready to translate real-world 3D objects—like rooms, poles, and ladders—into line projections and measure their true dimensions. Any real-world distance problem inside a room or between structures can be solved graphically by drawing the structure's front and top views to scale and rotating the line connecting the target points.

### The idea

Real structures are too large to draw at full size, so we first apply an **engineering scale**. A scale of 1:100 means 1 m in reality (1000 mm) is drawn as 10 mm on paper; a scale of 1:50 means 1 m is drawn as 20 mm. Once you measure a graphic length on paper, you multiply it back by the scale factor to get the real-world distance.

To model a rectangular room or **cuboid** of length $L$, breadth $B$, and height $H$, place its floor on the horizontal plane (HP) and its back wall on the vertical plane (VP). The $XY$ line represents the intersection of the floor and the back wall. Above $XY$, the front view is a rectangle of width $L$ and height $H$ showing all vertical heights. Below $XY$, the top view is a rectangle of width $L$ and depth $B$ showing all horizontal floor positions.

Any straight path inside the room—such as a light ray, a ladder, a guy wire between vertical poles, or a **space diagonal** connecting opposite corners—becomes a standard line $AB$. Because you can plot the exact height of each endpoint in the front view ($a'$, $b'$) and its exact floor position in the top view ($a$, $b$), both apparent views $a'b'$ and $ab$ are immediately known. You then apply either the line rotation method or the plane rotation (trapezoidal) method to find the true length ($TL$) and true inclination ($\heta$) to the floor.

### Worked example

**Problem Q44 (50): Length of a ladder against a wall**

**Given:** A vertical wall of height 3.2 m; the foot of the ladder is on the floor 2.5 m away from the wall. Use scale 1:50.
**Find:** The true length of the ladder required.

1. Convert the real dimensions using the 1:50 scale (1 m = 20 mm): the foot distance 2.5 m becomes 50 mm, and the wall height 3.2 m becomes 64 mm.
2. Draw the reference line $XY$ representing the floor, and draw a vertical line perpendicular to $XY$ to represent the wall seen edge-on.
3. Mark the foot of the ladder $A$ on the $XY$ line at 50 mm (2.5 m) to the left of the wall.

![Step 44.1 showing a ladder leaning against a wall at scale 1:50](/notes/cse/s1/graphics/module-1/assets/page-090-panel-1.webp)

4. Mark the top of the ladder on the vertical wall at a height of 64 mm (3.2 m) above $XY$; because the ladder rests squarely against the wall, its projection lies in a plane parallel to the viewing plane, so the line joining $A$ to the top of the wall shows the true length directly.
5. Measure this inclined length on paper (81 mm) and convert it back using the 1:50 scale.

![Step 44.2 showing the complete orthographic projection and true length of the ladder](/notes/cse/s1/graphics/module-1/assets/page-090-panel-2.webp)

**Answer:** Length of the ladder = 4.05 m.

### More problems

#### Problem Q43: Largest rod in a hollow cuboid
**Given:** A hollow cuboid of $L = 60$ mm, $B = 40$ mm, and $H = 30$ mm.
**Find:** The length of the largest rod that can be kept inside.

1. Draw the reference line $XY$ at full scale (1:1) with corner $A$ ($a'$, $a$) on $XY$ at the left.
2. Above $XY$, draw the front-view rectangle of length 60 mm and height 30 mm; below $XY$, draw the top-view rectangle of length 60 mm and breadth 40 mm.
3. Draw the space diagonal connecting opposite corners: front view $a'b'$ from the bottom-left to the top-right (67.1 mm), and top view $ab$ from the top-left to the bottom-right (72.1 mm).
4. To find the true length by the plane rotation method, erect a perpendicular to $ab$ at $b$ of length 30 mm (equal to the height of $b'$ above $XY$).
5. Join the end of this perpendicular to $a$ and measure the hypotenuse for the true length of the rod.

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

**Answer:** True length of the rod = 78.1 mm ($\heta = 22.6^\ext{o}$, $\ext{phi} = 30.8^\ext{o}$).

#### Problem 49: Distance between diagonally opposite room corners
**Given:** A room of length 4.8 m, breadth 4.2 m, and height 3.6 m.
**Find:** The true distance between a top corner and the diagonally opposite bottom corner.

1. Using scale 1:100 (1 m = 10 mm), draw the $XY$ line and place the bottom-back-left corner $A$ ($a'$, $a$) on $XY$ at 0 m from both planes.
2. Above $XY$, draw the front-view room rectangle of width 48 mm (4.8 m) and height 36 mm (3.6 m); below $XY$, draw the top-view rectangle of width 48 mm (4.8 m) and depth 42 mm (4.2 m).
3. Mark the diagonally opposite top-front-right corner $B$: $b'$ is 3.6 m above $XY$ at the top-right of the front view, and $b$ is 4.2 m in front of $XY$ at the bottom-right of the top view.
4. Join $a'b'$ (6 m) and $ab$ (6.4 m) to form the apparent views of the room diagonal.

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

5. Rotate the top view $ab$ about the left corner until it is parallel to $XY$, project up to the horizontal locus of the top corner at height 3.6 m, and measure the true length and floor inclination $\heta$.

![Worked orthographic projection solution step 194 for a room diagonal PQ](/notes/cse/s1/graphics/module-1/assets/page-089-panel-1.webp)

**Answer:** True distance = 7.3 m ($a'b' = 6$ m, $ab = 6.4$ m, $\heta = 29.4^\ext{o}$, $\ext{phi} = 35^\ext{o}$).

#### Problem Q202 (46): Distance from hanging lamp to floor corner
**Given:** A room of $5\ext{ m} \imes 5\ext{ m}$ and height 6 m; a lamp hangs from the roof center at 4 m above the floor.
**Find:** The true distance between the lamp and any floor corner.

1. Choose a suitable scale (1:100, so 1 m = 10 mm) and draw the reference line $XY$.
2. Above $XY$, draw the front-view rectangle of width 50 mm (5 m) and height 60 mm (6 m); below $XY$, draw the top-view square of $50\ext{ mm} \imes 50\ext{ mm}$ ($5\ext{ m} \imes 5\ext{ m}$).
3. Locate the floor corner $A$ at the left on $XY$ ($a'$ at the bottom-left of the front view, $a$ at the top-left of the top view).
4. Locate the lamp $B$ on the vertical center projector (2.5 m from the left wall): mark $b$ at the center of the top-view square (2.5 m below $XY$) and $b'$ in the front view at 4 m above $XY$.
5. Join $a'b'$ and $ab$, then rotate the top view $ab$ about $a$ until it lies on $XY$.
6. Project the rotated end vertically up to the horizontal locus of $b'$ (4 m above $XY$) and measure the true distance from $a'$.

![Worked solution step 202 showing orthographic projection for a line in a rectangle of 5m by 5m and height 6m](/notes/cse/s1/graphics/module-1/assets/page-084-panel-1.webp)

**Answer:** True distance between the lamp and the floor corner = 5.34 m.

#### Problem Q41 (45): Hanging bulb and black spot image
**Given:** A room 8 m long, 5 m wide, and 4 m high; a bulb hangs at the ceiling center 1 m below it; its spot image falls on a room corner 1 m above the floor. Use scale 1:100.
**Find:** The true length of the line joining the bulb and the black spot image.

1. Using scale 1:100 (1 m = 10 mm), draw $XY$, the front-view rectangle of $80\ext{ mm} \imes 40\ext{ mm}$ ($8\ext{ m} \imes 4\ext{ m}$) above $XY$, and the top-view rectangle of $80\ext{ mm} \imes 50\ext{ mm}$ ($8\ext{ m} \imes 5\ext{ m}$) below $XY$.
2. Draw the central vertical projector 40 mm (4 m) from the side wall: mark the bulb $b'$ in the front view 10 mm (1 m) below the ceiling line, and $b$ in the top view at the center 25 mm (2.5 m) below $XY$.

![Step 41.1: Orthographic projection of room and point B](/notes/cse/s1/graphics/module-1/assets/page-082-panel-1.webp)

3. On the left wall corner, mark the spot image $a'$ in the front view at 10 mm (1 m) above the floor line $XY$, and mark $a$ in the top view at the top-left corner on $XY$; join $a'b'$ and $ab$.

![Step 41.2: Orthographic projection of room with line AB in front and top views](/notes/cse/s1/graphics/module-1/assets/page-082-panel-2.webp)

4. With center $b$, swing the top view $ba$ to the horizontal locus through $b$ to make it parallel to $XY$.
5. Project this rotated point up to the horizontal locus through $a'$ (1 m above $XY$), join to $b'$, and measure the true length at 1:100 scale.

![Solution step 41.3 showing orthographic projection of a line inside a 8m x 5m x 4m room](/notes/cse/s1/graphics/module-1/assets/page-083-panel-1.webp)

**Answer:** True length of the line joining the bulb and the black spot = 5.12 m.

> **Watch out.** Both the bulb and the spot are elevated above the floor (3 m and 1 m high), so their vertical height difference is only $3\ext{ m} - 1\ext{ m} = 2\ext{ m}$, not the full 3 m height of the bulb.

#### Problem Q42 (47): Three vertical poles in an equilateral triangle
**Given:** Three vertical poles $AB = 2$ m, $CD = 4$ m, and $EF = 8$ m stand on floor corners $B, D, F$ forming an equilateral triangle of side 5 m with $BF$ parallel to VP. Use scale 1:100.
**Find:** The true distances between the top ends ($AC$, $CE$, $AE$) and their inclinations to the floor.

1. Using scale 1:100 (1 m = 10 mm), draw $XY$ and construct the top-view equilateral triangle below $XY$ with horizontal base $a(b)-e(f) = 50$ mm (5 m) parallel to $XY$ and apex $c(d)$.
2. Project up from the three corners to the $XY$ floor line to mark bases $b', d', f'$, and draw the vertical poles above $XY$ of heights $b'a' = 20$ mm (2 m), $d'c' = 40$ mm (4 m), and $f'e' = 80$ mm (8 m).

![Step 42.1: Orthographic projection of three vertical poles arranged in an equilateral triangle](/notes/cse/s1/graphics/module-1/assets/page-085-panel-1.webp)

3. Connect the pole tops in the front view to form triangle $a'c'e'$; because base $a(b)-e(f)$ is parallel to $XY$, the front view $a'e'$ already shows the true length $AE$ and its true floor inclination.

![Step 42.2: Orthographic projection connecting the tops of the three poles](/notes/cse/s1/graphics/module-1/assets/page-085-panel-2.webp)

4. To find the true length and floor inclination of $AC$, rotate the top-view side $a(b)-c(d)$ about $a(b)$ until it is parallel to $XY$, project up to the horizontal locus of $c'$, and join to $a'$.
5. Similarly, rotate the top-view side $c(d)-e(f)$ about $c(d)$ until it is parallel to $XY$, project up to the horizontal locus of $e'$, and join to $c'$ to measure the true length $CE$ and its inclination.

![Step 42.3: Projection drawing finding true lengths AE, AC, and CE of triangle poles](/notes/cse/s1/graphics/module-1/assets/page-086-panel-1.webp)

**Answer:** $AE = 7.81$ m ($\heta_{AE} = 50^\ext{o}$), $AC = 5.39$ m ($\heta_{AC} = 22^\ext{o}$), and $CE = 6.40$ m ($\heta_{CE} = 39^\ext{o}$).
