<!-- page 1 | Start here -->

## Isometric Projections of Solids and Combinations of Solids

This notebook teaches how to construct isometric projections and isometric views of three-dimensional engineering solids from their two-dimensional orthographic views. Learners will master the box method, the four-center ellipse method, the true-radius rule for spheres, and the coaxial offset method for stacking multiple solids and real-world mechanical parts.

**Before you start:** Basic 2D geometric constructions (squares, regular pentagons, regular hexagons, and circles); Reading and drawing first-angle orthographic projections (front view and top view across an x-y reference line); Using standard drafting instruments (compass, set squares, and protractor).

### Your path through this module

1. **Isometric Axes, Planes, and the Isometric Scale**: By tilting a 3D object so that all three coordinate axes make equal angles with the drawing plane, its three main axes appear at 30 degrees left, 30 degrees right, and vertical, with all parallel edges foreshortened to about 81.6% of their true length.
2. **The Box and Coordinate Offset Method for Polyhedra**: Because non-isometric lines do not stay at their true angles or lengths, we never measure them directly; instead, we enclose the shape in a rectangular box and transfer the corners by measuring along the box's isometric sides.
3. **Circles, Cylinders, Cones, and Hemispheres (Four-Center Method)**: A circle enclosed in a square becomes an ellipse inside an isometric rhombus, which can be drawn smoothly with four compass arcs centered at the obtuse corners and the intersections of lines to the opposite midpoints.
4. **Coaxial Combinations of Solids and the Sphere Rule**: To stack solids coaxially, you locate the upper solid's base or center on the lower solid's top face using isometric offsets; if the upper solid is a sphere, its center rises by the isometric radius while its outline remains a circle of true radius.
5. **Practice: Prisms, Pyramids, and Polyhedral Combinations**: Apply the bounding-box and offset method to orient single prisms and stack two or three flat-faced polyhedra along a common vertical axis.
6. **Practice: Combinations with Cylinders, Cones, and Holes**: Combine the box method with four-center ellipses to place cones, cylindrical holes, and pyramids accurately onto flat polygonal or hemispherical surfaces.
7. **Practice: Spheres Resting on Blocks, Cylinders, and Spheres**: Place spheres onto square, cylindrical, hexagonal, and spherical bases by stepping up along the vertical axis by the sphere's isometric radius and drawing a circle with its true radius.
8. **Practice: Frustums, Multi-Solid Stacks, and Engineering Applications**: Synthesize two-base frustum constructions, four-center ellipses, and the sphere rule to draw complex multi-solid stacks and real-world mechanical shapes.

<!-- page 2 | Isometric Axes, Planes, and the Isometric Scale -->

## Isometric Axes, Planes, and the Isometric Scale
You already know how to represent 3D objects using separate 2D front and top orthographic views; now we begin learning how to combine those views into a single 3D pictorial drawing.

Imagine holding a cardboard shipping box and tilting it toward your eyes until you see its top, front-left, and front-right faces equally well. When the three mutually perpendicular corners of the box make equal angles with your flat drawing sheet, their projected lines are called the **isometric axes**. On your paper, if you draw a horizontal reference line, the three isometric axes meet at a single point: one goes up and left at 30°, one goes up and right at 30°, and the third goes straight up vertically at 90°. This means the three axes are spaced equally at 120° from one another on the flat page.

Once these axes are set up, any edge of an object that runs parallel to an isometric axis is called an **isometric line**, and any flat surface formed by two isometric axes is an **isometric plane**. Edges that are tilted and do not run parallel to any of the three isometric axes are called **non-isometric lines**.

Because the box is tilted away from your sheet, its edges appear slightly shorter than they really are, just as a pencil looks shorter when you point it toward your eye. This visual shrinking is called **foreshortening**. For isometric lines, the ratio of the apparent **isometric length** to the actual **true length** is a constant value given by $\frac{\cos 30^\circ}{\cos 45^\circ} = \sqrt{\frac{2}{3}} \approx 0.8165$. In plain words, every isometric line shrinks to about 81.6% of its real size, while non-isometric lines shrink by different amounts and cannot be measured directly along their tilted paths.

Engineers use two slightly different styles depending on whether they apply this shrinkage, and you must always read the problem carefully to see which one is requested:

| Feature | Isometric Projection | Isometric View (or Isometric Drawing) |
| :--- | :--- | :--- |
| **Lengths used along axes** | Foreshortened isometric lengths (81.6% of true size) | True lengths (100% of true size) |
| **Why we use it** | Mathematically exact optical representation | Faster to draw directly with a standard ruler |

### Worked example
Let us construct a graphical **isometric scale** to convert a true length of 40 mm into an isometric length without using a calculator, and then draw the isometric projection of a 40 mm cube.

1. Draw a horizontal baseline starting at point $O$. From $O$, draw a line at 45° to represent the true-length scale, and a lower line at 30° to represent the isometric-length scale.
2. Using your standard ruler, mark 40 mm along the 45° line from $O$ to a point $A$. We use 45° because the trigonometry of a 45° and 30° right triangle naturally produces the ratio $\frac{\cos 30^\circ}{\cos 45^\circ}$.
3. From point $A$, drop a vertical line straight down (90° to the horizontal baseline) until it hits the 30° line at point $B$. The distance $OB$ is the exact isometric length of 40 mm.
4. Pick a new starting corner $P$ on your sheet and draw a horizontal line through it. From $P$, draw three isometric axes: 30° to the left, 30° to the right, and 90° straight up.
5. Set your compass to the isometric length $OB$ and step off this distance from $P$ along all three axes to locate the three adjacent corners of the cube. Complete the visible faces by drawing lines parallel to the isometric axes from these points.

### Remember
- Always draw isometric axes at 30° left, 30° right, and 90° vertical relative to a horizontal baseline.
- Measure lengths **only** along isometric lines (lines parallel to the three isometric axes).
- Use foreshortened lengths ($\approx 81.6\%$ via the 45°/30° scale) for an **isometric projection**, and true ruler lengths ($100\%$) for an **isometric view**.

<!-- page 3 | The Box and Coordinate Offset Method for Polyhedra -->

## The Box and Coordinate Offset Method for Polyhedra

Now that you can draw lines along the three isometric axes, you need a reliable way to draw inclined edges—like the sides of hexagons, pentagons, and pyramids—whose angles and lengths change in isometric views. This lesson teaches you how to trap any flat-faced solid (called a polyhedron) inside a simple rectangular box so you only ever have to measure along the isometric axes.

Imagine shipping an oddly shaped hexagonal nut by packing it snugly inside a standard rectangular cardboard box. In drafting, any line not parallel to the three isometric axes is a **non-isometric line**. Because non-isometric lines do not foreshorten equally and their angles distort, you can never measure their lengths or angles directly on an isometric drawing. Instead, you use the **box method**: draw a light rectangle, labeled $1$-$2$-$3$-$4$, tightly around the polygon in your 2D orthographic view, and then draw that rectangle in isometric as a parallelogram with $30°$ sides.

To put the polygon inside your isometric box, you use **coordinate offsets**, which are the distances from the box corners ($1, 2, 3, 4$) to the polygon's corners (vertices) measured strictly along the box edges. Take these distances from the 2D view with your compass (using isometric lengths for an isometric projection, or true lengths for an isometric view) and step them off along the $30°$ edges of the isometric parallelogram. Connect the marked points with straight lines, and the angled edges appear automatically.

Once the base is drawn, you build the 3D solid by lifting it along the third axis. A **prism** has two identical parallel bases; to draw it, raise vertical lines of equal height from every base vertex and connect their tops. A **pyramid** tapers to a single point called the **apex**; find the center of the base by crossing the box diagonals, raise a vertical axis line to the required height to locate the apex, and join the apex to each base corner. For a **frustum** (a pyramid with its top sliced off flat), enclose the whole solid in a 3D box, draw the bottom base on the floor, and use coordinate offsets on the box's top face to plot the smaller top base before connecting the sloping edges. Finally, apply **visibility rules**: darken all outer boundary lines and front-facing edges, and leave rear edges that pass behind the solid out (or dashed if required).

### Worked example

Draw the isometric view of a regular hexagonal prism with base side $20\text{ mm}$ and height $50\text{ mm}$ standing upright.

1. **Draw the 2D box:** Draw a regular hexagon of side $20\text{ mm}$ and enclose it snugly in a rectangle $1$-$2$-$3$-$4$. This turns angled sides into simple horizontal and vertical offsets along the rectangle.
2. **Draw the isometric base box:** From corner $1$, draw edges $1$-$2$ and $1$-$4$ at $30°$ left and right, copying the rectangle's true width and depth. Complete the parallelogram $1$-$2$-$3$-$4$ so you have an isometric frame.
3. **Transfer offsets:** With your compass, transfer the distance from each box corner to the six hexagon vertices $A$ through $F$ onto the parallelogram edges, then join $A$-$B$-$C$-$D$-$E$-$F$ lightly. This locates the non-isometric edges without measuring angles.
4. **Extrude the height:** From each vertex $A$ through $F$, draw a vertical line $50\text{ mm}$ up and connect the top points to form the parallel top hexagon.
5. **Set visibility:** Darken the entire top hexagon, the front bottom edges, and the four visible vertical edges, leaving the hidden back edges light.

### Remember
- Never measure the length or angle of a non-isometric line directly; always locate its two endpoints using offsets along the isometric box.
- For pyramids, find the base center using box diagonals, step off the axis height along the third isometric axis to find the apex, and join the apex to the base corners.
- Darken the top face, outer boundary, and front edges last; omit or dash the rear edges hidden behind the solid.

<!-- page 4 | Circles, Cylinders, Cones, and Hemispheres (Four-Center Method) -->

## Circles, Cylinders, Cones, and Hemispheres (Four-Center Method)

You can now enclose and draw any flat-faced polygon using a rectangular box. In this lesson, you will apply that same enclosing-box idea to circles so you can draw curved solids like cylinders, cones, and hemispheres.

If you tilt a round coin in your hand, its circular edge looks like an oval. In an isometric drawing, any circle parallel to a coordinate plane projects as an **ellipse**, a smooth, symmetrical oval. To draw it, we first enclose the true circle in a square touching it at four midpoints ($a, b, c, d$). When drawn along isometric axes, this square becomes a 30° **rhombus** (a tilted diamond with four equal sides) whose corners we label $1, 2, 3, 4$.

Drawing a freehand ellipse is clumsy, so we use the **four-center method**, a compass technique that approximates the ellipse using four smooth circular arcs. Look at your isometric rhombus: two opposite corners are **obtuse corners** (wider than 90°), and two are acute (narrower than 90°). Draw straight lines from both obtuse corners to the midpoints ($a, b, c, d$) of their opposite sides. These four lines cross each other inside the rhombus at two new points. Your four compass centers are the two obtuse corners (for the two long, shallow arcs) and the two inner intersection points (for the two tight end arcs).

Once you can draw one isometric circle, you can build curved 3D solids. A **generator** is an imaginary straight line on a curved surface that shapes its outer boundary, like the straight side silhouette of a tin can or a party hat. For a cylinder or a **frustum** (a cone with its pointed top sliced off flat), draw the bottom and top ellipses, then join their outer edges with straight lines that are **common tangents**—lines that smoothly kiss both ellipses without cutting inside them. For a cone, draw the base ellipse, Step up vertically from the rhombus center to the apex, and draw two tangent generators from the apex to the ellipse.

A **hemisphere** is an exact half-ball with one flat circular face and one curved dome. Because a ball looks equally wide from every viewing angle, the curved dome contour is drawn as a simple semicircular arc touching the extreme left and right edges of the ellipse. Whether the flat face rests on the ground or faces the sky, first draw the flat circular face as an isometric ellipse (using isometric length for an isometric projection), and then sweep a single compass arc from the ellipse's center to form the round dome.

### Worked example

Let us draw the isometric view of a vertical cylinder of diameter 40 mm and height 60 mm.

1. **Draw the base rhombus:** From a front corner $1$, draw two 40 mm lines at 30° left and 30° right, then complete the top-view rhombus $1\text{-}2\text{-}3\text{-}4$ so that corners $1$ and $3$ are obtuse. Mark the side midpoints $a, b, c, d$.
2. **Find the four centers and draw the base:** Join obtuse corner $1$ to opposite midpoints $b$ and $c$, and obtuse corner $3$ to $a$ and $d$. Where these lines cross, mark centers $C_1$ and $C_2$. Use $1$ and $3$ as centers to swing the two large arcs, and $C_1$ and $C_2$ to swing the two small end arcs.
3. **Lift the top face and connect:** Shift the four centers ($1, 3, C_1, C_2$) and the four midpoints vertically upward by 60 mm to draw the identical top ellipse. Finally, connect the extreme left and right curves of both ellipses with two vertical tangent lines, and erase the hidden back half of the bottom ellipse.

### Remember

- Always start the four-center construction from the two **obtuse** corners of the isometric rhombus, never the acute ones.
- Connect the outer boundaries of cylinders, cones, and frustums using straight lines tangent to the ellipses, not by joining the rhombus corners.
- For a hemisphere, construct the flat circular face as a four-center ellipse first, then draw the curved dome as a circular arc.

<!-- page 5 | Coaxial Combinations of Solids and the Sphere Rule -->

## Coaxial Combinations of Solids and the Sphere Rule

Now that you can draw any single polyhedron or curved solid using bounding boxes and four-center ellipses, we can combine them into real engineering parts. This lesson shows you how to stack one solid centered on top of another, including the special case of a sphere.

Think of stacking a small square gift box squarely in the middle of a larger one. When two solids share the same central vertical line, we call them **coaxial**. To stack two square-based solids coaxially, the center of the upper solid's base must sit directly on the center of the lower solid's top face. If the lower top face has side $B_1$ and the upper base has side $B_2$, you can step inward from the lower edges by the **symmetric offset distance** $d = (B_1 - B_2) / 2$ along both 30° isometric axes. On your drawing, this frames a smaller isometric rhombus right in the middle of the larger one.

What if the top object is a ball, like a finial on a fence post? A **sphere** is a 3D solid where every surface point is at an equal distance—its radius—from the center. When a sphere rests on a flat face, it touches at a single point called the **point of contact**. Because you look at a sphere along tilted sightlines, the vertical line from the contact point to the sphere's center is foreshortened, just like any vertical edge. However, no matter what angle you view a ball from, its silhouette is always a full-sized circle. This gives us the **Sphere Rule**: in an isometric projection, raise the sphere's center above the contact point by the **isometric radius** ($R_{\text{iso}} \approx 0.816 R$), then set your compass to the **true radius** ($R$) to draw the outer circle. Because $R$ is larger than $R_{\text{iso}}$, the circle's bottom edge will dip below the contact point on paper—this is normal and shows the front belly of the sphere curving toward you.

Finally, whenever an upper solid sits on a lower one, it blocks part of the view. This **inter-solid visibility** means you must keep construction lines light and darken only the visible front edges, leaving the rear parts of the lower top face erased where they pass behind the upper solid.

### Worked example

Draw the isometric projection of a sphere of radius 25 mm resting centrally on the top face of a square slab of side 60 mm and height 20 mm.

1. **Convert slab dimensions to isometric lengths:** Multiply 60 mm and 20 mm by 0.816 to get $B_{\text{iso}} = 49$ mm and $H_{\text{iso}} = 16.3$ mm. We use isometric lengths because this is a true isometric projection.
2. **Draw the lower slab:** Construct a 30° isometric box with a 49 mm $\times$ 49 mm base and 16.3 mm vertical edges.
3. **Find the point of contact:** Lightly draw the two diagonals of the slab's top rhombus. Their intersection $P$ is the exact center where the sphere touches.
4. **Locate the sphere's center:** From $P$, draw a vertical line straight up of length $R_{\text{iso}} = 25 \times 0.816 = 20.4$ mm to mark the center $C$. The vertical radius foreshortens like any isometric axis.
5. **Draw the sphere and check visibility:** With center $C$ and your compass set to the **true radius** $R = 25$ mm, draw a full circle. Leave the back edges of the slab's top face light wherever they fall inside this circle.

### Remember

- To center a base of width $B_2$ inside a face of width $B_1$, measure inward by $d = (B_1 - B_2) / 2$ along the 30° isometric axes.
- **The Sphere Rule:** Step up from the contact point by the *isometric radius* ($R_{\text{iso}}$) to find the center, then draw a circle of *true radius* ($R$).
- Always draw the lower solid's top face lightly first, since the upper solid will hide part of its rear edges.

<!-- page 6 | Practice: Prisms, Pyramids, and Polyhedral Combinations -->

## Practice: Prisms, Pyramids, and Polyhedral Combinations

Having learned the box method and coaxial offset rules in theory, we start our practice with purely flat-faced solids where every vertex can be plotted directly by coordinates. You will now apply the bounding-box and offset method to orient single prisms and stack two or three flat-faced polyhedra along a common vertical axis.

### The idea

Flat-faced solids (polyhedra) have straight edges that meet at sharp vertices. Even when a prism is tilted onto a side face or several solids are stacked on top of one another, you never need curves: you only need to locate corner points and join them with straight lines.

When a prism rests on a rectangular side face with its axis horizontal, its polygonal end faces are vertical. Because the polygon's slanted edges are non-isometric lines, you enclose the polygon in a 2D rectangle in the orthographic view and draw the corresponding 3D **isometric box** oriented vertically. You then transfer each polygon corner to the vertical box face using coordinate offsets before projecting the prism's length along the horizontal isometric axis.

When two or three polyhedra share a **coaxial** vertical axis, you build them sequentially from bottom to top. First, complete the bottom slab and locate the top face of its enclosing box. To center an upper solid of base width $B_2$ inside a lower box face of width $B_1$, calculate the **symmetric offset** $(B_1 - B_2) / 2$ along both horizontal isometric directions. Stepping inward by these isometric offsets gives a smaller grid on the lower solid's top face, which serves as the exact footprint for raising the next solid.

### Worked example

**Given:** A square slab of base edge 60 mm and height 20 mm is surmounted coaxially by a cube of side 40 mm.
**Find:** Draw the isometric projection of the combination.

1. Construct an isometric scale converting the true lengths 20 mm, 40 mm, and 60 mm into foreshortened isometric lengths, because an isometric projection requires all parallel dimensions to be scaled by $\cos 30^\circ / \cos 45^\circ$.
2. Draw the orthographic front and top views of the coaxial pair to visualize how the 40 mm cube sits inside the 60 mm square slab, leaving a uniform border of $(60 - 40) / 2 = 10$ mm on all four sides.

> **Figure: Orthographic projections showing front view and top view of a cube on a square prism**
>
> Orthographic projection (labelled 156.1) showing the front view and top view of a cube of side 40 mm placed centrally over a square slab (prism) of base edge 60 mm and height 20 mm. A horizontal reference line is labelled x on the left and y on the right. Above the xy line, the front view shows a lower rectangle of width 60 and height 20 representing the square slab, with an upper rectangle of width 40 and height 40 centered on top of it representing the cube. Vertical dimension lines on the left indicate heights of 20 (for the bottom slab) and 40 (for the top cube). Below the xy line, the top view shows two concentric squares: an outer square labelled a (bottom-left), b (bottom-right), c (top-right), d (top-left) representing the square slab, and an inner square labelled p (bottom-left), q (bottom-right), r (top-right), s (top-left) representing the cube. Horizontal dimension lines at the bottom indicate widths of □40 for the inner square and □60 for the outer square. Light vertical projector lines connect the corners of the top view squares to the corresponding edges in the front view. To the right of the front view, a box below the label '156.1' lists: '1. SQUARE SLAB, B = 60, H = 20' and '2. CUBE, B = 40'.

3. Draw the bottom isometric rhombus $ABCD$ of side ISO 60 mm with edges inclined at 30° to the horizontal to represent the base of the square slab.

> **Figure: Engineering drawing showing orthographic views, given dimensions, isometric view and construction scale for problem 156.2**
>
> Figure for problem 156.2. On the left, orthographic projections showing front view with heights 20 and 40, and top view with square slab of size 60 and inner square of size 40 labeled a b c d and p q r s. In the middle, a given box with '1. SQUARE SLAB B = 60 H = 20' and '2. CUBE B = 40'. On the right, an isometric view of a square slab with corners A, B, C, D and sides of length 60, along with an isometric scale diagram showing ISO 20, ISO 40, ISO 60 with corresponding horizontal lengths 20, 40, 60.

4. Raise vertical edges of height ISO 20 mm from corners $A, B, C, D$ and join their tops to complete the lower square slab.

> **Figure: Engineering drawing showing orthographic views, given dimensions, isometric view and construction scale for problem 156.3**
>
> Figure for problem 156.3. On the left, orthographic projections showing front view with heights 20 and 40, and top view with square slab of size 60 and inner square of size 40 labeled a b c d and p q r s. In the middle, a given box with '1. SQUARE SLAB B = 60 H = 20' and '2. CUBE B = 40'. On the right, an isometric view of a raised square block with corners A, B, C, D, 1, 2, 3, 4, height 20, and sides of length 60, along with an isometric scale diagram showing ISO 20, ISO 40, ISO 60 with corresponding horizontal lengths 20, 40, 60.

5. On the top face of the slab, step inward by an isometric offset of ISO 10 mm from each side to draw parallel grid lines that locate the centered base $PQRS$ of the 40 mm cube.

> **Figure: Isometric and orthographic views for problem 156.4**
>
> Orthographic and isometric projection drawings for step 156.4. On the left, the orthographic projection has a horizontal reference line labelled x at the left end and y at the right end. Above line xy is the front view showing a lower rectangle of height 20 (dimensioned 20 on the left with vertical dimension arrows) resting on xy, and a centred upper square of height 40 (dimensioned 40 on the left with vertical dimension arrows) on top of it. Below line xy is the top view showing two concentric squares connected to the front view by vertical projector lines: the outer square has corners labelled a (bottom-left), b (bottom-right), c (top-right), and d (top-left), with its bottom horizontal width dimensioned as square 60 (□60); the inner concentric square has corners labelled p (bottom-left), q (bottom-right), r (top-right), and s (top-left), with its bottom horizontal width dimensioned as square 40 (□40). In the middle is a boxed label '156.4' above a text box reading '1. SQUARE SLAB, B = 60, H = 20' and '2. CUBE, B = 40'. On the right is an isometric projection of the square slab (base 60 by 60, height 20) with the base outline of the cube marked on its top face: the bottom base corners of the slab are labelled A (front/bottom), B (right), C (back, hidden corner connected by dashed hidden lines to D, B, and the top back corner), and D (left). The two front base edges AD and AB are each dimensioned 60, and the vertical right edge at B is dimensioned 20. Centered on the top face of the slab is an isometric square outline with corners labelled P (front), Q (right), R (back), and S (left).

> **Figure: Length scale or construction diagram for 156.4**
>
> Isometric scale construction diagram for step 156.4. A horizontal baseline is dimensioned at lengths 20, 40, and 60 from the left vertex using parallel horizontal dimension lines below the base. From the left vertex, an inclined line rises at 30 degrees to the horizontal. Slanted parallel projection lines (at 45 degrees to the horizontal) connect the true length marks 20, 40, and 60 on the horizontal base up to the inclined isometric line. Parallel dimension lines above the inclined line label the resulting isometric lengths from the left vertex as 'ISO 20', 'ISO 40', and 'ISO 60'.

6. Erect vertical lines of height ISO 40 mm from $P, Q, R, S$ to complete the upper cube, darkening all visible front and top edges while omitting hidden rear lines.

> **Figure: Isometric and orthographic views for problem 156.5**
>
> Orthographic and isometric projection drawings for step 156.5. On the left, the orthographic projection is identical to step 156.4: a horizontal reference line xy separates the front view above (a lower slab of height 20 and a centred upper cube of height 40, both dimensioned on the left) and the top view below (an outer square a-b-c-d dimensioned □60 and a concentric inner square p-q-r-s dimensioned □40). In the middle is a boxed label '156.5' above a text box reading '1. SQUARE SLAB, B = 60, H = 20' and '2. CUBE, B = 40'. On the right is the complete isometric projection showing the cube resting centrally on top of the square slab: the slab has bottom base corners A (front), B (right), C (back hidden corner with dashed edges), and D (left), with front base edges AD and AB each dimensioned 60 and the vertical edge at B dimensioned 20. On the top surface of the slab, the cube rises vertically from its base corners P (front), Q (right), R (back, with dashed hidden edges meeting at R), and S (left). The vertical height of the cube on the right is dimensioned 40, and its top back-right edge is dimensioned □40.

> **Figure: Length scale or construction diagram for 156.5**
>
> Isometric scale construction diagram for step 156.5. A horizontal baseline has true lengths 20, 40, and 60 marked and dimensioned below it from the left vertex. An inclined line from the same left vertex has corresponding isometric lengths projected onto it via parallel slanted lines from the 20, 40, and 60 marks on the horizontal baseline. Parallel dimension lines along the inclined line label these segments 'ISO 20', 'ISO 40', and 'ISO 60'.

**Answer:** Isometric projection of the 40 mm cube centered with a 10 mm offset on the 60 mm by 20 mm square slab.

### More problems

#### Problem 133: Pentagonal prism resting on a rectangular face

**Given:** A pentagonal prism of base edge 30 mm and axis length 70 mm resting on a rectangular face on the HP with end faces parallel to the VP.
**Find:** Draw the isometric projection.

1. Draw the orthographic front view as a regular pentagon $abcde$ of side 30 mm enclosed in rectangle $1234$, and draw the top view with length 70 mm.
2. Construct the isometric box $1234$ vertically using isometric lengths from the box width and height, and extend it along the 30° axis by ISO 70 mm.
3. Transfer the pentagon vertices $A, B, C, D, E$ onto the front vertical face of the isometric box by measuring their coordinate offsets along the box edges.
4. Project parallel lines of length ISO 70 mm from each vertex along the horizontal isometric axis to locate the rear pentagon and darken visible edges.

> **Figure: Orthographic projections and isometric view of a pentagonal prism resting on a rectangular face**
>
> Orthographic projections (left) and isometric projection (right) of a pentagonal prism of base edge 30 mm and axis length 70 mm resting on one of its rectangular faces on the HP with its end faces parallel to the VP. On the left, above the horizontal reference line x-y, the front view shows a regular pentagon a-b-c-d-e with its base edge a-b resting on the x-y line, enclosed within a rectangle 1-2-3-4 (where corners 1 and 2 lie on x-y, 3 is top-right, 4 is top-left, vertex c lies on side 2-3, vertex d on side 4-3, and vertex e on side 1-4). The inclined edge e-d is dimensioned as 30. Below the x-y line, the top view is a rectangle of vertical length dimensioned as 70 on the left, with solid vertical outer edges projected from e and c, a solid central vertical line projected from top ridge d, and two dashed hidden vertical lines projected from the bottom base corners a and b. In the centre are two rectangular callout boxes: the upper box reads '1. PENTAGONAL PRISM, B = 30, H = 70' and the lower box reads 'L5.15'. On the right, the isometric drawing shows the prism enclosed in an isometric bounding box. The front pentagonal face A-B-C-D-E is inscribed in the front vertical isometric rectangle 1-2-3-4 (with 1 at bottom-left, 2 at bottom-right, 3 at top-right, 4 at top-left; A and B on edge 1-2 with the distance between A and B dimensioned as 30, C on vertical edge 2-3, D on top edge 4-3, and E on vertical edge 1-4). The prism extends along the receding isometric axis to the upper right with the receding length dimensioned as 70 along the bottom-right edge from corner 2. Visible edges of the prism (front pentagon A-B-C-D-E, receding edges from B, C, D, and visible rear edges) are drawn in thick solid lines, while hidden rear and bottom edges (the receding edge from A and the hidden rear edges meeting it) are drawn as dashed lines, and the enclosing box edges are drawn in thin construction lines.

**Answer:** Isometric projection of the horizontal pentagonal prism of base 30 mm and length 70 mm.

#### Problem 157: Square pyramid on a hexagonal prism

**Given:** A hexagonal slab of base edge 30 mm and height 20 mm surmounted coaxially by a square pyramid of base edge 24 mm and height 40 mm.
**Find:** Draw the isometric projection of the combination.

1. Draw the orthographic views enclosing the 30 mm hexagon $abcdef$ in a 60 mm by 52 mm rectangle $1234$, with the 24 mm square $pqrs$ centered inside.
2. Measure the coordinate offsets of the square base from the bounding box edges: $(60 - 24) / 2 = 18$ mm along the 60 mm width and $(52 - 24) / 2 = 14$ mm along the 52 mm depth.
3. Construct the isometric bounding box $1234$ of size ISO 60 mm by ISO 52 mm and plot the bottom hexagon $ABCDEF$ using corner offsets.
4. Raise vertical edges of height ISO 20 mm from the box and hexagon corners to complete the top face of the hexagonal slab.
5. Step inward on the top box face by ISO 18 mm and ISO 14 mm from opposite sides to form the centered square base $PQRS$ of side ISO 24 mm.
6. Locate the center $O$ by intersecting the diagonals of $PQRS$, raise a vertical axis of height ISO 40 mm to the apex, and join it to $P, Q, R, S$.

> **Watch out.** Because a regular hexagon is wider across its corners (60 mm) than across its flats (52 mm), the two offsets to center the 24 mm square inside the enclosing box are unequal (18 mm and 14 mm).

> **Figure: Orthographic projection showing a square pyramid placed centrally on top of a hexagonal prism, with dimensions and labels.**
>
> Orthographic projections (front view and top view) of a square pyramid placed centrally on top of a hexagonal prism (slab), labelled '157.1'. A horizontal reference line is labelled 'x' on the left and 'y' on the right. Below the x-y line, the top view shows a regular hexagon with vertices 'a' (bottom-left), 'b' (bottom), 'c' (bottom-right), 'd' (top-right), 'e' (top), and 'f' (top-left), oriented with two vertical edges 'a-f' and 'c-d'. The inclined edge 'a-b' is dimensioned as 30. Centrally inside the hexagon is a square representing the base of the pyramid, with vertices 'p' (bottom-left), 'q' (bottom-right), 'r' (top-right), and 's' (top-left), and diagonal lines 'p-r' and 'q-s' intersecting at the apex/centre 'o'. The vertical side 'p-s' of the square is dimensioned as 24. Vertical projectors extend upward from the top view to the front view above the x-y line. The front view shows the hexagonal prism resting on the x-y line as a rectangle partitioned by a central vertical line (projected from vertices 'b' and 'e'), with a vertical dimension of 20 on the left. Resting centrally on the top face of the hexagonal prism is the triangular front view of the square pyramid, with a central vertical line from its apex down through the prism, and a vertical height dimension of 40 indicated on the left. To the right of the views, a boxed note reads: '1. HEX. SLAB: B = 30, H = 20' and '2. SQ. PYRAMID: B = 24, H = 40'.

> **Figure: Orthographic projections of hexagonal slab with square pyramid on top**
>
> Orthographic projection showing top view and front view. The top view is a regular hexagon with sides labelled a, b, c, d, e, f and vertices 1, 2, 3, 4 with dimension 30 for side length. Inside the hexagon is a square p, q, r, s with diagonals intersecting at o, and side dimension 24. The front view shows a hexagonal slab of height 20 sitting on the xy line, and a square pyramid of height 40 on top of it.

> **Figure: Isometric view of hexagonal slab base**
>
> Isometric view of a hexagonal slab with vertices A, B, C, D, E, F and bottom corners 1, 2, 4. Side length is 30.

> **Figure: Isometric scale or measurement helper**
>
> Diagram with inclined lines at angles ISO 20, ISO 40, ISO 60 and horizontal dimension lines showing lengths 20, 30, 40, 60.

> **Figure: Orthographic projections of hexagonal slab with square pyramid on top**
>
> Orthographic projection showing top view and front view for problem 157.3. The top view is a regular hexagon with sides labelled a, b, c, d, e, f and vertices 1, 2, 3, 4 with dimension 30 for side length. Inside the hexagon is a square p, q, r, s with diagonals intersecting at o, and side dimension 24. The front view shows a hexagonal slab of height 20 sitting on the xy line, and a square pyramid of height 40 on top of it.

> **Figure: Isometric projection of a complete hexagonal slab**
>
> Isometric projection of a hexagonal slab with height 20 and vertices A, B, C, D, E, F and 1, 2, 3, 4. Side length is 30.

> **Figure: Isometric scale or measurement helper**
>
> Diagram with inclined lines at angles ISO 20, ISO 40, ISO 60 and horizontal dimension lines showing lengths 20, 30, 40, 60 for problem 157.3.

> **Figure: Orthographic projections of a square pyramid on a hexagonal slab**
>
> Front elevation showing a hexagonal slab of height 20 with a square pyramid of height 40 centered on top. Plan view below showing a regular hexagon with vertices 1, 2, 3, 4, a, b, c, d, e, f, and a concentric square p, q, r, s with center o. Dimensions: total height 60 (20 for slab + 40 for pyramid), hexagon side 30, horizontal offset 14, total width 52, vertical offsets 18, 60, etc.

> **Figure: Isometric projection of a square pyramid on a hexagonal slab**
>
> Isometric view showing a hexagonal slab with vertices 1, 2, C, B, A, F, E, D and a square pyramid on top with base P, Q, R, S and apex 3. Dimensions shown on top and side edges: 14, 18, 24, 30, height 20.

> **Figure: Isometric scale reference diagram**
>
> Isometric length conversion scale with divisions labeled ISO 20, ISO 40, ISO 60, and measurements 20, a, 30, 40, 60 corresponding to points 1, 2, 4.

> **Figure: Orthographic projections of a square pyramid on a hexagonal slab**
>
> Front elevation showing a hexagonal slab of height 20 with a square pyramid of height 40 centered on top. Plan view below showing a regular hexagon with vertices 1, 2, 3, 4, a, b, c, d, e, f, and a concentric square p, q, r, s with center o. Dimensions: total height 60, hexagon side 30, horizontal offset 14.

**Answer:** Isometric projection of the 24 mm by 40 mm square pyramid centered on the 30 mm by 20 mm hexagonal slab.

#### Problem 174: Square pyramid on cube on rectangular slab

**Given:** A 60 mm by 50 mm by 20 mm rectangular slab, a 40 mm cube, and a square pyramid of base 30 mm and altitude 40 mm stacked coaxially.
**Find:** Draw the isometric projection of the three-solid stack.

1. Draw the orthographic front and top views of all three coaxial solids and construct an isometric scale for lengths 20 mm, 30 mm, 40 mm, 50 mm, and 60 mm.
2. Draw the isometric base $ABCD$ of size ISO 60 mm by ISO 50 mm and raise verticals of ISO 20 mm to complete the bottom rectangular slab.
3. On the slab's top face, step inward by $(60 - 40) / 2 = 10$ mm along the 60 mm edges and $(50 - 40) / 2 = 5$ mm along the 50 mm edges (using isometric lengths) to locate the cube's base $PQRS$.
4. Erect verticals of height ISO 40 mm from $P, Q, R, S$ to complete the middle cube.
5. On the cube's top face, step inward uniformly by $(40 - 30) / 2 = 5$ mm (ISO 5 mm) from all four edges to plot the 30 mm square base of the pyramid.
6. Intersect the diagonals of the pyramid base to find its center, raise the vertical axis by ISO 40 mm to the apex, and join the apex to the four base corners.

> **Figure: Given dimensions box**
>
> A rectangular text box outlining the given dimensions of the three solids: "RECT ANGULAR SLAB : 60x50x20mm; CUBE B- 40mm ; SQUARE PYRAMID: B-30mm & H-40mm".

> **Figure: Orthographic views showing front elevation and top view of square pyramid on cube on rectangular slab with dimensions**
>
> Orthographic projection (labelled 174.1) showing the front view (above the reference line xy) and top view (below xy) of three coaxial solids stacked vertically: a bottom rectangular slab, a middle cube, and a top square pyramid.
> 
> Top view (below xy):
> - Outer rectangle abcd representing the rectangular slab: horizontal width (a to b) = 60, vertical depth (a to d) = 50. Corners are labelled 'a' (bottom-left), 'b' (bottom-right), 'c' (top-right), and 'd' (top-left).
> - Middle concentric square pqrs representing the cube of side 40 (dimensioned as ▁40 at the bottom). Corners are labelled 'p' (bottom-left), 'q' (bottom-right), 'r' (top-right), and 's' (top-left).
> - Inner concentric square uvwx representing the base of the square pyramid of side 30 (dimensioned as ▁30 at the bottom). Corners are labelled 'u' (bottom-left), 'v' (bottom-right), 'w' (top-right), and 'x' (top-left). Diagonal lines u-w and v-x meet at the apex 'o' in the center, representing the slant edges of the pyramid.
> 
> Front view (above xy):
> - Bottom rectangle resting on the xy line representing the rectangular slab of width 60 and height 20 (dimensioned on the left).
> - Middle square resting centrally on the slab representing the cube of width 40 and height 40 (dimensioned on the left).
> - Top isosceles triangle resting centrally on the cube representing the square pyramid of base 30 and altitude 40 (dimensioned on the left).
> - Vertical projectors connect all corresponding corners from the top view to the front view, along with a central vertical axis line passing through 'o' up to the apex of the pyramid.
> 
> To the right of the views, below a small box labelled "174.1", is a summary box containing:
> "1. RECT. PRISM
>    B = 60
>    D = 50
>    H = 20
> 2. CUBE
>    B = 40
> 3. SQ. PYRAMID
>    B = 30
>    H = 40"

> **Figure: Engineering drawing showing orthographic projections and isometric view for problem 174.2**
>
> The figure contains an orthographic projection (front and top views) on the left, a text box in the center, and an isometric view on the right. In the orthographic projection, an $x-y$ reference line separates the front view above from the top view below. The front view shows a combination of three objects centered vertically: a rectangular prism at the bottom of height 20, a cube in the middle of height 40, and a square pyramid at the top of height 40. The top view shows a square base with corners $a, b, c, d$ of side 60, inside which is another square $p, q, r, s$ of side 40, and a smaller square $u, v, w, x$ of side 30, with diagonal lines forming a square pyramid top. Dimension lines indicate widths of 30, 40, and 60, and heights of 20, 40, and 40. The text box labeled 174.2 lists: 1. RECT. PRISM B = 60, D = 50, H = 20; 2. CUBE B = 40; 3. SQ. PYRAMID B = 30, H = 40. The isometric view on the right shows a rectangular base block labeled with corners A, B, C, D, with side dimensions 60 and 50.

> **Figure: Engineering drawing showing orthographic projections and isometric view for problem 174.3**
>
> The figure contains an orthographic projection (front and top views) on the left, a text box in the center, and an isometric view on the right. In the orthographic projection, an $x-y$ reference line separates the front view above from the top view below. The front view shows a combination of three objects centered vertically: a rectangular prism at the bottom of height 20, a cube in the middle of height 40, and a square pyramid at the top of height 40. The top view shows a square base with corners $a, b, c, d$ of side 60, inside which is another square $p, q, r, s$ of side 40, and a smaller square $u, v, w, x$ of side 30, with diagonal lines forming a square pyramid top. Dimension lines indicate widths of 30, 40, and 60, and heights of 20, 40, and 40. The text box labeled 174.3 lists: 1. RECT. PRISM B = 60, D = 50, H = 20; 2. CUBE B = 40; 3. SQ. PYRAMID B = 30, H = 40. The isometric view on the right shows a rectangular base block labeled with corners A, B, C, D, with side dimensions 60 and 50, and height 20.

> **Figure: Problem 174.4 Orthographic and isometric projections of a rectangular prism with a square recess and a square pyramid inside**
>
> Step 174.4 showing the orthographic projection (left) and partial isometric construction (right) of three coaxially stacked solids. In the center, a boxed label '174.4' sits above a specification box listing: '1. RECT. PRISM: B = 60, D = 50, H = 20; 2. CUBE: B = 40; 3. SQ. PYRAMID: B = 30, H = 40'. On the left, the orthographic projection has a horizontal reference line labelled 'x' and 'y'. Above 'x-y', the front view shows a bottom rectangular prism of height 20, a middle cube of height 40, and a top square pyramid of height 40 (vertical dimension lines on the left indicate 20, 40, and 40 from bottom to top), with a vertical central axis line passing through the apex. Below 'x-y', the top view shows three concentric rectangles/squares: the outer rectangle with corners 'a' (bottom-left), 'b' (bottom-right), 'c' (top-right), 'd' (top-left) of width 60 (dimensioned at the bottom); the middle square with corners 'p' (bottom-left), 'q' (bottom-right), 'r' (top-right), 's' (top-left) of side '□40'; and the inner square with corners 'u' (bottom-left), 'v' (bottom-right), 'w' (top-right), 'x' (top-left) of side '□30', with diagonal lines meeting at the apex 'o'. Vertical projectors connect the top view corners to the front view. On the right, the isometric view shows the bottom rectangular prism with bottom corners 'A' (front), 'B' (right), 'C' (back, hidden edges dashed), 'D' (left) and dimensions 50 along 'D-A', 60 along 'A-B', and height 20 on the left vertical edge. On the top face of the rectangular prism, the square base 'P' (front), 'Q' (right), 'R' (back), 'S' (left) of the cube is marked with dimension '□40' along 'P-Q', along with a point 'U' just above 'R' and an isolated apex point 'O' high above.

> **Figure: Problem 174.5 Orthographic and isometric projections of a rectangular prism topped with a cube and a square pyramid**
>
> Step 174.5 showing the orthographic projection (left) and the next stage of isometric construction (right) of the same three coaxially stacked solids. In the center, a boxed label '174.5' sits above a specification box listing: '1. RECT. PRISM: B = 60, D = 50, H = 20; 2. CUBE: B = 40; 3. SQ. PYRAMID: B = 30, H = 40'. On the left, the orthographic projection is identical to step 174.4: above reference line 'x-y', the front view has stacked heights 20, 40, and 40; below 'x-y', the top view has concentric rectangles/squares 'a-b-c-d' (width 60), 'p-q-r-s' (side '□40'), and 'u-v-w-x' (side '□30') with diagonals meeting at center 'o'. On the right, the isometric view shows the rectangular prism (base corners 'A', 'B', 'C', 'D', dimensions 50 along 'D-A', 60 along 'A-B', and height 20 on the left) now with the complete cube of height 40 (dimensioned vertically on the left of the cube) erected on the square base 'P-Q-R-S' (dimensioned '□40' along 'P-Q'). Hidden edges at the back of the prism and cube (meeting at 'C', 'R', and 'U') are shown as dashed lines.

> **Figure: Orthographic and isometric projection of combination of solids 174.6**
>
> Engineering drawing showing the orthographic projections (front view and top view above and below $x-y$ line) and an isometric projection of a combination of three solids: a rectangular prism at the bottom ($B=60, D=50, H=20$), a cube in the middle ($B=40$), and a square pyramid on top ($B=30, H=40$). Dimensions: base lengths 60 and 50, heights 20, 40, 40. Top view shows top corners labeled a, b, c, d, p, q, r, s, x, w, u, v and center o.

> **Figure: Orthographic and isometric projection of combination of solids 174.7**
>
> Engineering drawing showing the orthographic projections (front view and top view above and below $x-y$ line) and an isometric projection of a combination of three solids: a rectangular prism at the bottom ($B=60, D=50, H=20$), a cube in the middle ($B=40$), and a square pyramid on top ($B=30, H=40$). Dimensions: base lengths 60 and 50, heights 20, 40, 40. Top view shows top corners labeled a, b, c, d, p, q, r, s, x, w, u, v and center o. Isometric drawing clearly shows pyramid apex O.

**Answer:** Isometric projection of the 30 mm by 40 mm square pyramid on the 40 mm cube on the 60 mm by 50 mm by 20 mm rectangular slab.

<!-- page 7 | Practice: Combinations with Cylinders, Cones, and Holes -->

## Practice: Combinations with Cylinders, Cones, and Holes
Now that you can stack flat-faced blocks and pyramids, we introduce the four-center ellipse method into stacked combinations involving cylinders, cones, through-holes, and hemispherical bases. You will combine the box method with four-center ellipses to place cones, cylindrical holes, and pyramids accurately onto flat polygonal or hemispherical surfaces.

### The idea
Whenever a combination includes a circular edge—whether it is the base of a cone, the rim of a cylinder, a drilled **through-hole** (a cylindrical cut passing completely through a solid), or the flat top of a hemisphere—that circle lies in an isometric plane and projects as an ellipse. Because you cannot align two ellipses directly by their curves, you must always enclose each circle in a square bounding box first. In isometric projection, these squares become **concentric rhombuses** (rhombuses that share the same center and axes) on the contact plane.

The key rule is to align the bounding boxes using isometric offsets before constructing any curves. To place a cone or drill a hole on a lower solid's top face, first find the center of that face, or step inward from the outer box edges by the isometric offset $(B_1 - B_2)/2$. Once the inner rhombus is positioned, apply the four-center method inside it to draw the ellipse. For a cone, project the apex vertically from the rhombus center and draw **tangent generators** (straight lines from the apex that just touch the outer edges of the base ellipse).

When the lower solid is an upward-facing hemisphere, always start at its flat circular top face. Construct the top ellipse inside its isometric rhombus first, then sweep the lower spherical outline using the **true radius** (the exact unscaled radius $R = D/2$) centered at the ellipse's center, or tangent to the ellipse's major axis. Any upper solid—even when both solids share the exact same diameter—then sits directly on that flat top rhombus.

### Worked example
**Given:** A cone of base diameter 50 mm and height 70 mm rests coaxially on the flat circular face of a hemisphere of diameter 50 mm.
**Find:** Draw the isometric projection of the combined toy.

1. Draw the orthographic front and top views of the 50 mm cone resting on the 50 mm hemisphere, enclosing the circular top view in a square $1234$ of side 50 mm.
2. Construct an isometric rhombus $1234$ of side 50 mm with edges at 30° to the horizontal to represent the shared circular contact plane.
3. Use the four-center method inside rhombus $1234$ to draw the isometric ellipse for the shared 50 mm circular face.
4. Draw the lower curved outline of the hemisphere as a circular arc tangent to the outermost corners of the ellipse.
5. From the center of rhombus $1234$, erect a vertical axis of isometric height 70 mm to locate the cone's apex.
6. Draw two straight generators from the apex tangent to the outer left and right arcs of the ellipse, and darken only the visible front arc of the shared base.

> **Figure: Orthographic projections of a cone placed on a hemisphere with a given values box**
>
> Orthographic projections (front view and top view) of a toy composed of a cone placed coaxially on top of a hemisphere, labelled 161.1. A horizontal reference line is labelled 'x' at the left end and 'y' at the right end. Above the x-y line, the front view shows a downwardly curved semicircle (hemisphere) resting with its lowest point tangent to the x-y line, and an isosceles triangle (cone) mounted directly on the horizontal flat circular top face of the hemisphere, sharing the same diameter. A vertical dimension line to the left of the cone indicates its height as '70' (between the horizontal joint line and the apex of the cone). Below the x-y line, projected vertically down between thin projector lines from the left and right edges of the front view, the top view is a circle with a leader line at the bottom right labelled 'Ø50'. To the right of the views, a small boxed label reads '161.1' above a larger rectangular note box containing: '1. HEMISPHERE / D = 50' and '2. CONE / D= 50 / H =70'.

> **Figure: Engineering drawing showing orthographic projections and isometric view for problem 161.2**
>
> The figure contains an orthographic projection on the left showing an x-y line with a hemisphere at the bottom and a cone on top, with a height dimension of 70 for the cone, and a circular top view below with points 1, 2, 3, 4 and a diameter label $\varnothing50$. In the middle, a box with '161.2' and a GIVEN box containing '1. HEMISPHERE D = 50' and '2. CONE D = 50, H = 70'. On the right, an isometric view showing a cone mounted on a hemisphere/base, with height 70, diameter $\varnothing50$, and base points 1, 2, 3, 4.

> **Figure: Engineering drawing showing orthographic projections and isometric view for problem 161.3**
>
> The figure contains an orthographic projection on the left showing an x-y line with a hemisphere at the bottom and a cone on top, with a height dimension of 70 for the cone, and a circular top view below with points 1, 2, 3, 4 and a diameter label $\varnothing50$. In the middle, a box with '161.3' and a GIVEN box containing '1. HEMISPHERE D = 50' and '2. CONE D = 50, H = 70'. On the right, an isometric view showing a cone mounted on a hemisphere, with height 70, diameter $\varnothing50$, and base points 1, 2, 3, 4.

**Answer:** Isometric projection of a 50 mm diameter, 70 mm high cone coaxially mounted on a 50 mm diameter hemisphere.

### More problems

#### Problem 158: Cone coaxially placed on a cylindrical slab
**Given:** A cylindrical slab of diameter 50 mm and height 20 mm surmounted coaxially by a cone of diameter 30 mm and height 45 mm.
**Find:** Draw the isometric projection of the combination.

1. Draw the orthographic views of the 50 mm slab and 30 mm cone, enclosing both concentric circles in square boxes.
2. Construct a bottom isometric rhombus $1234$ of side 50 mm and project it up by 20 mm to form top rhombus $5678$.
3. Use the four-center method to draw the full top ellipse in $5678$ and the visible front half of the bottom ellipse in $1234$, joined by vertical tangents.
4. Offset inward by $(50 - 30)/2 = 10$ mm from each side of top rhombus $5678$ to construct the concentric 30 mm rhombus for the cone's base.
5. Draw the 30 mm base ellipse inside this inner rhombus using the four-center method.
6. From the center of the inner rhombus, measure 45 mm vertically up to mark the apex and draw two tangent generators to the 30 mm ellipse.
7. Darken the visible outlines and erase the hidden rear arc of the cone's base.

> **Figure: Orthographic projections of a cone placed on a cylinder with dimensions**
>
> Orthographic projections (front view and top view) of a cone placed coaxially on top of a cylindrical slab, labelled 158.1. A horizontal reference line is labelled 'x' at the left end and 'y' at the right end. Above the x-y line, the front view shows a rectangle representing the cylindrical slab resting on the x-y line, with a vertical dimension of 20 on the left. Centered on top of this rectangle is an isosceles triangle representing the cone, with a vertical dimension of 45 on the left (measured from the top of the slab to the apex of the cone). A vertical centreline passes through the apex of the cone, the slab, and continues down into the top view. Below the x-y line, projected vertically from the front view by thin projection lines, the top view consists of two concentric circles: an outer circle representing the cylindrical slab labelled with a leader line as 'Ø50', and an inner circle representing the base of the cone labelled with a leader line as 'Ø30'. To the right of the drawing is a boxed label '158.1' above another box containing the specifications: '1. CYL. SLAB / D = 50 / H = 20' and '2. CONE / D = 30 / H = 45'.

> **Figure: Orthographic projections and isometric projection step for a cylindrical slab with a cone on top, labelled 158.2**
>
> The figure shows orthographic projections (front and top views) on the left and an isometric projection step on the right. In the front view, an xy line is shown with a cylindrical slab of height 20 and diameter 50 resting on it, and a cone of height 45 and diameter 30 centered on top of the slab. The top view shows two concentric circles with diameters Ø50 and Ø30, with numbering vertices 1, 2, 3, 4 on the outer square corners and 5, 6, 7, 8 on the inner circle. The isometric view on the right shows an isometric rhombus with an inscribed ellipse, with vertices numbered 1, 2, 3, 4. A given-answers box shows: 1. CYL. SLAB D = 50 H = 20, 2. CONE D = 30 H = 45.

> **Figure: Orthographic projections and isometric projection step for a cylindrical slab with a cone on top, labelled 158.3**
>
> The figure shows orthographic projections (front and top views) on the left and an isometric projection step on the right. In the front view, an xy line is shown with a cylindrical slab of height 20 and diameter 50 resting on it, and a cone of height 45 and diameter 30 centered on top of the slab. The top view shows two concentric circles with diameters Ø50 and Ø30, with numbering vertices 1, 2, 3, 4 on the outer square corners and 5, 6, 7, 8 on the inner circle. The isometric view on the right shows the 3D cylindrical slab extruded upwards by height 20 from the base rhombus, with vertices 1, 2, 3, 4 at the bottom and 6 marking the top right. A dimension line for Ø50 points to the top circle. A given-answers box shows: 1. CYL. SLAB D = 50 H = 20, 2. CONE D = 30 H = 45.

> **Figure: Engineering drawing and isometric view for problem 158.4**
>
> Orthographic projection on the left showing a cylindrical slab and a cone on top with dimensions 45, 20, 10, 10, 50, $\varnothing 50$, $\varnothing 30$ and reference line x y. In the middle, a box labelled 158.4 and two given components: 1. CYL. SLAB with D = 50, H = 20; 2. CONE with D = 30, H = 45. On the right, an isometric projection showing the combined solids with numbered points 1 to 8, height 20, diameter dimensions $\varnothing 50$ and $\varnothing 30$, and offset dimensions 10.

> **Figure: Engineering drawing and isometric view for problem 158.5**
>
> Orthographic projection on the left showing a cylindrical slab and a cone on top with dimensions 45, 20, 50, $\varnothing 50$, $\varnothing 30$ and reference line x y. In the middle, a box labelled 158.5 and two given components: 1. CYL. SLAB with D = 50, H = 20; 2. CONE with D = 30, H = 45. On the right, an isometric projection showing the combined solids with numbered points 1 to 8, height 20, cone height 45, diameter dimensions $\varnothing 50$ and $\varnothing 30$.

**Answer:** Isometric projection of a cone (diameter 30 mm, height 45 mm) on a cylindrical slab (diameter 50 mm, height 20 mm).

#### Problem 160: Cylindrical through-hole in a hexagonal prism
**Given:** A hexagonal prism of base edge 30 mm and height 20 mm with a concentric cylindrical through-hole of diameter 30 mm.
**Find:** Draw the isometric projection of the hexagonal nut.

1. Draw the orthographic views of the hexagonal prism (edge 30 mm, height 20 mm) with its central 30 mm circle, and enclose the hexagon in rectangle $1234$.
2. Construct the isometric bounding box $1234$ on the base plane and transfer the six hexagon vertices $ABCDEF$ from the orthographic box using coordinate offsets.
3. Project the base hexagon vertically upward by 20 mm and connect the corners to complete the hexagonal prism.
4. On the top hexagonal face, construct a concentric isometric rhombus of side 30 mm centered on the prism's vertical axis.
5. Apply the four-center method inside this 30 mm rhombus to draw the complete top ellipse representing the mouth of the cylindrical through-hole.
6. Darken the top ellipse and all visible front and top edges of the hexagonal prism.

> **Figure: Orthographic projections showing top view as a hexagon with a concentric circle and front view as a rectangle**
>
> Orthographic projections (labelled 160.1) of a hexagonal prism with a concentric cylindrical through-hole, separated by a horizontal reference line x-y. Below the x-y line, the top view shows a regular hexagon with two vertical left and right edges (a-f on the left, c-d on the right) and top and bottom vertices (e at the top, b at the bottom); vertices are labelled a, b, c, d, e, f counter-clockwise starting from the lower-left vertex 'a'. The vertical left edge f-a is dimensioned as 30. Inside the hexagon is a concentric circle representing the cylindrical hole, with a diameter dimension leader pointing to it labelled 'Ø30'. Vertical projector lines extend upward from the vertices (f/a, e/b, d/c) and from the left and right tangents of the inner circle to the front view above the x-y line. The front view is a rectangle resting on the x-y line, divided into two equal halves by a vertical solid edge down the middle (projected from vertices e and b). The height of the rectangle is dimensioned as 20 on the left side. Two vertical dashed (hidden) lines inside the rectangle represent the cylindrical through-hole, projected from the circle in the top view. To the right of the views, a boxed note reads: '1. HEX. SLAB, B = 30, H = 20' and '2. CYL. HOLE, D = 30'.

> **Figure: Step 160.2 of technical drawing showing orthographic projections and isometric step**
>
> Engineering drawing step 160.2 containing an orthographic projection on the left with top and front views, a GIVEN box with HEX. SLAB B = 30, H = 20 and CYL. HOLE D = 30, and an isometric drawing on the right showing a hexagonal slab with corners numbered 1, 2, 3, 4 and labelled A, B, C, D, E, F with a dimension 30.

> **Figure: Step 160.3 of technical drawing showing orthographic projections and isometric step**
>
> Engineering drawing step 160.3 containing an orthographic projection on the left with top and front views, a GIVEN box with HEX. SLAB B = 30, H = 20 and CYL. HOLE D = 30, and an isometric drawing on the right showing an extruded hexagonal slab with height 20, corners numbered 1, 2, 3, 4 and labelled A, B, C, D, E, F with a dimension 30.

> **Figure: Engineering drawing and isometric view for problem 160.4 showing a hexagonal slab with a cylindrical hole.**
>
> Engineering drawing showing step 160.4 of constructing the isometric view of a hexagonal slab with a central cylindrical hole. A central text box is labelled '160.4' above a specification box reading '1. HEX. SLAB, B = 30, H = 20' and '2. CYL. HOLE, D = 30'. On the left, the orthographic projection has a horizontal reference line 'x y'. Above 'x y', the front view is a rectangle of height 20 (dimensioned '20' on the left) divided by a solid vertical centreline (matching vertices e and b) and two dashed vertical lines representing the cylindrical hole of diameter 30. Below 'x y', the top view shows a regular hexagon 'a-b-c-d-e-f' enclosed in a bounding rectangle '1-2-3-4', with side 'a-f' vertical on the left and dimensioned '30', and vertices 'b' at the bottom and 'e' at the top. Inside the hexagon is a concentric circle dimensioned 'Ø30', enclosed in a square '5-6-7-8' (5 bottom-left, 6 bottom-right, 7 top-right, 8 top-left). On the right, the isometric drawing shows the hexagonal prism built inside an isometric bounding box (base '1-2-3-4', height dimensioned '20' on the left vertical edge, side 'A-F' dimensioned '30' at the bottom-left). The base hexagon vertices are labelled 'A, B, C, D, E, F' with hidden rear edges 'F-E', 'E-D', 'D-C' dashed. On the bottom face, the isometric rhombus '5-6-7-8' is drawn using the four-centre method to construct the bottom ellipse of the cylindrical hole (shown dashed). A logo 'G' inside a diamond is in the top right corner.

> **Figure: Engineering drawing and isometric view for problem 160.5 showing a hexagonal slab with a cylindrical hole.**
>
> Engineering drawing showing the final step 160.5 of constructing the isometric view of a hexagonal slab with a central cylindrical hole. A central text box is labelled '160.5' above a specification box reading '1. HEX. SLAB, B = 30, H = 20' and '2. CYL. HOLE, D = 30'. On the left, the orthographic views are identical to step 160.4: a front view above 'x y' of height '20' with a central vertical line and two dashed vertical lines for the hole, and a top view below 'x y' showing the regular hexagon 'a-b-c-d-e-f' inside bounding rectangle '1-2-3-4' (vertical side 'a-f' dimensioned '30') and the concentric circle 'Ø30' inside square '5-6-7-8'. On the right, the completed isometric view shows the hexagonal slab (base 'A, B, C, D, E, F' inside box '1-2-3-4', height dimensioned '20', side 'A-F' dimensioned '30'). In addition to the dashed bottom ellipse inside rhombus '5-6-7-8', the top face now includes its corresponding isometric rhombus and a solid ellipse for the top opening of the hole, dimensioned 'Ø30' with a leader arrow, and two vertical tangent lines (dashed) connecting the extreme left and right points of the top and bottom ellipses. A logo 'G' inside a diamond is in the top right corner.

**Answer:** Isometric projection of a hexagonal prism (base edge 30 mm, height 20 mm) with a central 30 mm cylindrical hole.

#### Problem 162: Square pyramid resting centrally on a hemisphere
**Given:** A square pyramid of base side 24 mm and height 40 mm resting centrally on the flat top of a 50 mm diameter hemisphere.
**Find:** Draw the isometric projection of the combined solids.

1. Draw the orthographic front and top views of the 50 mm hemisphere and 24 mm square pyramid, enclosing the 50 mm circle in square $1234$.
2. Construct an isometric rhombus $1234$ of side 50 mm and use the four-center method to draw the ellipse for the hemisphere's flat top face.
3. Sweep the lower curved outline of the hemisphere tangent to the outer ends of the ellipse.
4. Step inward from each side of rhombus $1234$ by $(50 - 24)/2 = 13$ mm to construct the concentric 24 mm isometric rhombus $abcd$ for the pyramid's base.
5. From the center of rhombus $abcd$, erect a vertical axis of 40 mm to locate the pyramid's apex.
6. Connect the apex to the visible corners of base $abcd$ and darken the visible portions of the pyramid and hemisphere.

> **Figure: Orthographic views of a square pyramid resting centrally on a hemisphere**
>
> Orthographic projections (front view and top view) of a square pyramid resting centrally on a hemisphere, labelled 162.1. A horizontal reference line is labelled 'x' at the left end and 'y' at the right end. Below the x-y line, the top view shows a circle of diameter 50 mm (indicated by a leader arrow pointing to the lower right of the circle, labelled 'Ø50'). Concentric inside the circle is a smaller square representing the base of the pyramid with its sides parallel and perpendicular to the x-y line; its corners are labelled 'p' (bottom-left), 'q' (bottom-right), 'r' (top-right), and 's' (top-left). The two diagonals 'pr' and 'qs' are drawn, intersecting at the centre labelled 'o'. The vertical left side 'ps' is dimensioned as '24'. Vertical projector lines extend upward from the extreme left and right edges of the circle, from the corners of the square ('p'/'s' and 'q'/'r'), and from the apex/centre 'o'. Above the x-y line, the front view shows the hemisphere resting with its curved bottom tangent to the x-y line and its flat circular top face horizontal (diameter 50 mm, radius 25 mm above x-y). Resting centrally on the flat top of the hemisphere is the front view of the square pyramid, shown as an isosceles triangle of base 24 mm and vertical height dimensioned on the left as '40'. To the right of the views, a boxed label '162.1' sits above another box containing the text: '1. HEMISPHERE D = 50' and '2. SQ. PYRAMID B = 24, H = 40'.

> **Figure: Isometric projection step 162.2 of a square pyramid on a hemisphere**
>
> Solution step 162.2 containing orthographic projections on the left, a GIVEN box in the center, and an isometric projection on the right. The GIVEN box contains: 1. HEMISPHERE D = 50, 2. SQ. PYRAMID B = 24, H = 40. The orthographic projection shows a hemisphere of diameter 50 with an x-y reference line, and a square pyramid of base 24 and height 40 placed on top. The top view shows a circle of diameter 50 with a concentric square of side 24, corners labeled p, q, r, s and center o, enclosed in a bounding box 1, 2, 3, 4. The isometric projection on the right shows an isometric view of the base construction with numbered corners 1, 2, 3, 4, an elliptical shape for the hemisphere, and dimension pointer for $\varnothing 50$.

> **Figure: Isometric projection step 162.3 of a square pyramid on a hemisphere**
>
> Solution step 162.3 containing orthographic projections on the left, a GIVEN box in the center, and an isometric projection on the right. The GIVEN box contains: 1. HEMISPHERE D = 50, 2. SQ. PYRAMID B = 24, H = 40. The orthographic projection shows a hemisphere of diameter 50 with an x-y reference line, and a square pyramid of base 24 and height 40 placed on top. The top view shows a circle of diameter 50 with a concentric square of side 24, corners labeled p, q, r, s and center o, enclosed in a bounding box 1, 2, 3, 4. The isometric projection on the right shows the completed isometric drawing of the square pyramid mounted on the hemisphere, with numbered base corners 1, 2, 3, 4, and dimension pointer for $\varnothing 50$.

> **Figure: Orthographic and isometric projections of a square pyramid resting on a hemisphere for problem 162.4**
>
> Step 162.4 showing the orthographic projections (left) and isometric construction step (right) of a square pyramid resting centrally on a hemisphere. A boxed note states: '1. HEMISPHERE D = 50' and '2. SQ. PYRAMID B = 24, H = 40'. On the left, above the horizontal reference line x-y, the front view shows an inverted hemisphere resting at its bottom point on x-y with a flat horizontal top surface, and a triangle of height dimensioned 40 representing the square pyramid centrally placed on top. Below x-y, the top view shows a circle of diameter Ø50 enclosed in a square bounding box with corners labelled 1 (bottom-left), 2 (bottom-right), 3 (top-right), and 4 (top-left). Inside the circle is a smaller concentric square representing the base of the pyramid with corners labelled p (bottom-left), q (bottom-right), r (top-right), and s (top-left), and diagonals intersecting at center o. The side length p-s is dimensioned 24, and the offset distances between the inner square (p, q, r, s) and the outer bounding box (1, 2, 3, 4) are dimensioned 13 on the left (vertical offsets from 4 and 1) and 13 at the bottom (horizontal offsets from 1 and 2). On the right, the isometric view shows the hemisphere (leader line labelled Ø50) with its top flat face enclosed in the isometric rhombus 1-2-3-4. On this top face, the square base P-Q-R-S (with side P-Q dimensioned 24 and back edges S-R and R-Q dashed) is located using offset dimensions of 13 along the edges near corners 1, 4, and 3.

> **Figure: Orthographic and isometric projections of a square pyramid resting on a hemisphere for problem 162.5**
>
> Step 162.5 showing the orthographic projections (left) and completed isometric projection (right) of a square pyramid resting centrally on a hemisphere. A boxed note states: '1. HEMISPHERE D = 50' and '2. SQ. PYRAMID B = 24, H = 40'. On the left, above the reference line x-y, the front view shows a hemisphere resting on x-y with a square pyramid of height 40 on its flat top face. Below x-y, the top view shows the circle of diameter Ø50 inside the square box 1-2-3-4, with the concentric square pyramid base p-q-r-s of side 24 and diagonal intersection o. On the right, the completed isometric view shows the hemisphere (leader labelled Ø50) inside the isometric square 1-2-3-4, with the square pyramid of base P-Q-R-S (side P-Q dimensioned 24) and vertical axis height dimensioned 40 standing on the flat top of the hemisphere. Hidden base edges S-R and R-Q, the hidden part of the hemisphere's rear upper rim, and the hidden slant edge to corner R are shown as dashed lines.

**Answer:** Isometric projection of a square pyramid (base 24 mm, height 40 mm) centered on a 50 mm diameter hemisphere.

#### Problem 163: Right circular cone on a rectangular block
**Given:** A right circular cone of diameter 50 mm and height 70 mm resting symmetrically on a rectangular block of base $50\text{ mm} \times 40\text{ mm}$ and height 30 mm.
**Find:** Draw the isometric projection of the solids.

1. Draw the orthographic front and top views showing the 50 mm cone centered on the $50\text{ mm} \times 40\text{ mm}$ block $abcd$ of height 30 mm.
2. Enclose the 50 mm circular base in a $50\text{ mm} \times 50\text{ mm}$ square $1234$, which overhangs the 40 mm width of the block by 5 mm on both sides.
3. Construct the isometric rhombus $1234$ of side 50 mm at the top plane of the block and draw the 50 mm base ellipse using the four-center method.
4. Erect a 70 mm vertical axis from the center of rhombus $1234$ and draw two straight generators from the apex tangent to the ellipse.
5. Construct the $50\text{ mm} \times 40\text{ mm}$ rectangular top face $abcd$ concentric with rhombus $1234$ and project its corners downward by 30 mm to complete the block.
6. Darken the visible outlines of the overhanging cone and the rectangular block underneath.

> **Watch out.** Because the cone's 50 mm diameter is wider than the block's 40 mm width, the cone overhangs the front and back edges of the block by $(50 - 40)/2 = 5$ mm on each side.

> **Figure: Orthographic views of a cone on a rectangular block**
>
> Orthographic projection (labelled 163.1) showing the front view and top view of a right circular cone resting centrally on a rectangular block across a horizontal reference line x-y. In the top view below the x-y line, a rectangle with corners labelled a (bottom-left), b (bottom-right), c (top-right) and d (top-left) has its horizontal length dimensioned as 50 at the bottom and its vertical width dimensioned as 40 on the left. A circle of diameter 50 (indicated by a leader labelled Ø50 on the right) is centred symmetrically over the rectangle; it is tangent to the left edge ad and right edge bc, and overhangs the front edge ab and rear edge dc by 5 mm each, with the covered portions of edges ab and dc drawn as dashed hidden lines. In the front view above the x-y line, the rectangular block rests on the x-y line with width 50 and height dimensioned as 30 on the left. Surmounting the top face of the block is an isosceles triangle of base 50 and height 70 representing the cone. A vertical chain centreline passes through the axis of the cone and block in the front view and continues into the top view, and thin vertical projector lines connect the left and right sides of the two views. To the right of the views, below the box labelled 163.1, a summary box reads: '1. RECT. BLOCK: L = 50, B = 40, H = 30' and '2. CONE: D = 50, H = 70'.

> **Figure: Orthographic and isometric views showing step 163.2 for a rectangular block and cone**
>
> Orthographic projections (front view and top view) on the left, with an x-y reference line. Front view shows a rectangular block of height 30 surmounted by a cone. Top view shows a square of side 50 with corners labelled 1, 2, 3, 4 and a circle inscribed inscribed inside with diameter indicator $\emptyset 50$ and points a, b, c, d. A GIVEN table in the middle shows: 1. RECT. BLOCK, L = 50, B = 40, H = 30; 2. CONE, D = 50, H = 70, with header 163.2. On the right, an isometric view showing only the base ellipse inscribed in a rectangular isometric plane with vertices 1, 2, 3, 4, pointing to $\emptyset 50$.

> **Figure: Orthographic and isometric views showing step 163.3 for a rectangular block and cone**
>
> Orthographic projections (front view and top view) on the left, with an x-y reference line. Front view shows a rectangular block of height 30 surmounted by a cone. Top view shows a square of side 50 with corners labelled 1, 2, 3, 4 and a circle inscribed inside with diameter indicator $\emptyset 50$ and points a, b, c, d. A GIVEN table in the middle shows: 1. RECT. BLOCK, L = 50, B = 40, H = 30; 2. CONE, D = 50, H = 70, with header 163.3. On the right, an isometric view showing a full cone on an isometric plane with vertices 1, 2, 3, 4, height 70, and diameter $\emptyset 50$.

> **Figure: Orthographic and isometric views for problem 163.4 showing a cone on a plane**
>
> Orthographic projection on the left with an x-y line, showing a cylinder/block base of height 30 and a cone above it, with top view showing a circle of diameter 50 inside a rectangular boundary of 50 by 40 labelled with points a, b, c, d and 1, 2, 3, 4. On the right, an isometric view showing a cone of height 70 resting on a base circle of diameter 50, with isometric axes and numbering 1, 2, 3, 4.

> **Figure: Orthographic and isometric views for problem 163.5 showing a cone on a rectangular block**
>
> Orthographic projection on the left with an x-y line, showing a rectangular block of height 30 with a cone on top, with top view showing a circle of diameter 50 inside a rectangular boundary of 50 by 40 labelled with points a, b, c, d and 1, 2, 3, 4. On the right, an isometric view showing a cone of height 70 placed on a rectangular block of dimensions L = 50, B = 40, H = 30, with base circle diameter 50, and isometric numbering 1, 2, 3, 4.

**Answer:** Isometric projection of a 50 mm diameter, 70 mm high cone resting centrally on a $50\text{ mm} \times 40\text{ mm} \times 30\text{ mm}$ rectangular block.

<!-- page 8 | Practice: Spheres Resting on Blocks, Cylinders, and Spheres -->

## Practice: Spheres Resting on Blocks, Cylinders, and Spheres

You already know how to construct flat-faced blocks and four-center cylinders, and how to locate centers on their top surfaces. Now we isolate and practice the special true-radius rule to place spheres onto square, cylindrical, hexagonal, and spherical bases.

### The idea

When a sphere is tilted into an isometric position, its outer contour remains a circle of its full, unscaled **true radius** ($R$), because a sphere looks the same from every viewing direction. However, the center of the sphere sits on a vertical isometric axis that foreshortens just like any other isometric line.

This creates a two-step rule for placing any sphere in an isometric projection. First, find the **contact point** on the supporting surface—such as the diagonal intersection of a square or the center of a top ellipse—and step vertically upward by the sphere's **isometric radius** ($R_{\text{iso}} = 0.816 R$). Second, place your compass at that elevated center and draw a circle using the **true radius** ($R$). (Even when a problem asks for an "isometric view" where the base block is drawn with true lengths, a sphere's center still steps up by its isometric radius while its outline is drawn with the true radius.)

When a second sphere rests coaxially on top of a lower sphere of radius $R_1$, their point of tangency lies along the vertical axis between their centers. To find the upper sphere's center, step vertically upward from the lower sphere's center by the sum of both isometric radii ($R_{1,\text{iso}} + R_{2,\text{iso}}$), then draw both circles with their respective true radii $R_1$ and $R_2$. Finally, darken only the base edges that lie outside the overhanging circular outline of the sphere.

### Worked example

**Problem 205: Sphere resting on a square block**
**Given:** A square block of base side 70 mm and height 20 mm, with a sphere of diameter 60 mm resting centrally on its top face.
**Find:** The isometric view of the combination.

1. Draw the orthographic front and top views of the 70 mm square block of height 20 mm with the 60 mm diameter sphere centered on top to establish the vertical axis and contact point.
2. Construct the isometric base rhombus $ABCD$ with sides of 70 mm at 30° to the horizontal, then project verticals of 20 mm from each corner to form the top square face of the block.
3. Draw the diagonals on the top face of the square block to intersect at the central contact point $O_1$, because the sphere touches the flat top face right at its geometric center.
4. From the contact point $O_1$, step vertically upward by the isometric radius of the sphere ($R_{\text{iso}}$ for $R = 30$ mm) to locate the sphere's isometric center $O_2$, since vertical distances along the axis are foreshortened.
5. With center $O_2$ and the sphere's true radius of 30 mm, draw a full circle for the sphere's outline, and darken the visible front edges of the square block outside the circle.

> **Figure: Orthographic views of a sphere resting on a square block with a given data box**
>
> Orthographic projection (front view and top view) of a sphere centrally resting on a square block, labelled 205.1. A horizontal reference line is labelled x on the left and y on the right. Below the x-y line, the top view shows a square with vertices labelled a (bottom-left), b (bottom-right), c (top-right), and d (top-left), with a horizontal dimension line below side ab labelled '□70'. Concentric inside the square a-b-c-d is a circle representing the top view of the sphere. Above the x-y line, the front view shows a rectangular block resting on the x-y line, aligned vertically with the square below, having a vertical dimension of '20' on its left side. Resting centrally on the top horizontal edge of this rectangular block is a circle representing the front view of the sphere, with a leader line pointing to its upper-right circumference labelled 'Ø60'. To the right of the views, below a small boxed label '205.1', is a rectangular summary box containing the text: '1. SQ. PRISM / B = 70 / H = 20' and below it 'SPHERE / D = 60'.

> **Figure: Orthographic and isometric projections for step 205.2 showing a square prism with a given height and a sphere.**
>
> Solution step 205.2 showing orthographic projections (front view above x-y line, top view below) and an isometric view. GIVEN box states: SQ. PRISM, B = 70, H = 20, SPHERE, D = 60. The orthographic views show an x-y line, a front rectangular view of height 20, a top square view with vertices labeled a, b, c, d and a circle inside, and a circle of diameter $\varnothing60$ above the front view. The isometric view shows a square prism with sides 70 and height 20, with vertices A, B, C, D.

> **Figure: Orthographic and isometric projections for step 205.3 showing a square prism with a sphere placed on top.**
>
> Solution step 205.3 showing orthographic projections (front view above x-y line, top view below) and an isometric view. GIVEN box states: SQ. PRISM, B = 70, H = 20, SPHERE, D = 60. The orthographic views show an x-y line, a front rectangular view of height 20, a top square view with vertices labeled a, b, c, d and a circle inside, and a circle of diameter $\varnothing60$ above the front view. The isometric view shows a square prism with sides 70 and height 20, with vertices A, B, C, D, and a sphere of diameter $\varnothing60$ resting on top center of the prism.

**Answer:** The isometric view is completed with a 70 mm by 20 mm square block and a 30 mm true-radius circle centered at $R_{\text{iso}}$ above the top face center.

### More problems

#### Problem 171: Sphere resting on another sphere
**Given:** A lower sphere 1 of diameter 50 mm and an upper sphere 2 of diameter 30 mm surmounted centrally on top.
**Find:** The isometric projection of the two stacked spheres.

1. Draw the orthographic front and top views showing sphere 1 (diameter 50 mm, center height 25 mm) and sphere 2 (diameter 30 mm, center height 65 mm).
2. Mark the ground contact point on the isometric reference line and step vertically upward by the isometric radius of sphere 1 ($R_{1,\text{iso}}$ for $R_1 = 25$ mm) to locate center $O_1$.
3. From the ground contact point, measure vertically upward by the total isometric center height (isometric length of 65 mm, which equals $R_{1,\text{iso}} + 2R_{1,\text{iso}}$... or step up from $O_1$ by $R_{1,\text{iso}} + R_{2,\text{iso}}$ for $R_2 = 15$ mm) to locate the upper center $O_2$.
4. With center $O_2$ and true radius 15 mm, draw the complete circle for the upper sphere 2.
5. With center $O_1$ and true radius 25 mm, draw the circle for the lower sphere 1, stopping the arc where it passes behind the upper sphere.

> **Watch out.** Do not step up by the true radii (25 mm and 15 mm) to locate the centers; if you do, the two true-radius circles will only touch at a single point instead of overlapping as a tilted 3D stack.

> **Figure: Orthographic views and given/answer boxes for two spheres, sphere 1 diameter 50 and sphere 2 diameter 30**
>
> Orthographic projections (front view and top view) of a combination of two spheres, labelled 171.1. A horizontal reference line is labelled 'x' at the left end and 'y' at the right end. Above the xy line (front view): a larger circle of diameter 50 mm rests tangent to the xy line at its bottom point, and a smaller circle of diameter 30 mm rests centrally on top of the larger circle, tangent to its highest point. Leader arrows point to the two circles in the front view, labelled 'Ø30' for the upper smaller circle and 'Ø50' for the lower larger circle. Below the xy line (top view): two concentric circles vertically aligned with the front view circles, where the outer circle represents the 50 mm diameter sphere and the inner solid circle represents the 30 mm diameter sphere. To the right of the views is a rectangular box labelled '171.1' above it, containing the text: '1. SPHERE 1 D = 50' and '2. SPHERE 2 D = 30'.

> **Figure: Engineering drawing step 171.2 showing two stacked spheres in orthographic projection**
>
> Step 171.2 showing orthographic projections of two spheres. On the left, front and top views are shown. The reference line is labeled x and y. The bottom sphere (SPHERE 1) has diameter $\varnothing50$ and its center is at height 25 from the xy line. The top sphere (SPHERE 2) has diameter $\varnothing30$ and its center is at height 65 from the xy line. In the center, a given box states: 1. SPHERE 1 D = 50, 2. SPHERE 2 D = 30. On the right, a solution step drawing shows a circle of diameter $\varnothing50$ with a vertical dimension line of $25\times0.816$ from the baseline to the center.

> **Figure: Engineering drawing step 171.3 showing two stacked spheres in orthographic projection**
>
> Step 171.3 showing orthographic projections of two spheres. On the left, front and top views are shown with the reference line labeled x and y. The bottom sphere (SPHERE 1) has diameter $\varnothing50$ and its center is at height 25 from the xy line. The top sphere (SPHERE 2) has diameter $\varnothing30$ and its center is at height 65 from the xy line. In the center, a given box states: 1. SPHERE 1 D = 50, 2. SPHERE 2 D = 30. On the right, a solution step drawing shows two overlapping circles, the top one with diameter $\varnothing30$ and the bottom one with diameter $\varnothing50$, with vertical dimension lines of $(50+15)\times0.816$ and $25\times0.816$.

**Answer:** The isometric projection consists of a 15 mm true-radius circle above a partially hidden 25 mm true-radius circle, spaced vertically by their isometric center heights.

#### Problem 164: Sphere resting on a cylindrical slab
**Given:** A cylindrical slab of base diameter 50 mm and height 20 mm supporting a central sphere of diameter 40 mm.
**Find:** The isometric projections of the combination.

1. Draw the orthographic front and top views of the 50 mm diameter, 20 mm high cylinder with the 40 mm sphere on top, enclosing the circular base in a square $1234$.
2. Construct the isometric bounding box of base 50 mm and height 20 mm, and use the four-center method on both top and bottom rhombuses to draw the cylindrical slab.
3. Join the midpoints of opposite sides of the top rhombus to find the center of the cylinder's top face.
4. Step vertically upward from the top face center by the sphere's isometric radius ($R_{\text{iso}}$ for $R = 20$ mm) to locate the sphere center.
5. Draw the sphere as a circle of true radius 20 mm around the sphere center, leaving the front lower arc of the cylinder visible and hiding the rear covered portion.

> **Figure: Orthographic projection showing front and top views of a sphere on a cylindrical slab**
>
> Orthographic projection (labelled 164.1) showing the front view and top view of a sphere of diameter 40 mm placed centrally over a cylindrical slab of base diameter 50 mm and height 20 mm. A horizontal reference line labelled x at the left end and y at the right end separates the views. Above the x-y line (front view): a rectangle of width 50 mm and height 20 mm rests on the x-y line, representing the cylindrical slab, with a vertical dimension line on the left showing 20. Resting centrally on the top edge of the rectangle is a circle of diameter 40 mm, representing the sphere. Below the x-y line (top view), aligned with vertical projector lines from the front view: two concentric circles of diameter 50 mm (outer, projected from the cylindrical slab) and diameter 40 mm (inner, projected from the sphere), indicated by leader arrows at the bottom right labelled Ø50 and Ø40 respectively. To the right of the drawing is a boxed note beneath the boxed label '164.1' reading: '1. CYL. SLAB D = 50, H = 20' and '2. SPHERE D = 40'.

> **Figure: Isometric and orthographic projection step 164.2**
>
> Step 164.2 showing orthographic and isometric projections of a cylindrical slab. GIVEN box lists: 1. CYL. SLAB D = 50, H = 20; 2. SPHERE D = 40. The orthographic view shows a circle representing a sphere on top of a rectangular front view of height 20, with top view below showing concentric circles of diameter 50 and 40, labeled with points 1, 2, 3, 4 and reference line y. The isometric projection shows the cylindrical slab with diameter 50 and height 20 inside a bounding box with corners 1, 2, 3, 4.

> **Figure: Isometric and orthographic projection step 164.3**
>
> Step 164.3 showing orthographic and isometric projections of a cylindrical slab with a sphere on top. GIVEN box lists: 1. CYL. SLAB D = 50, H = 20; 2. SPHERE D = 40. The orthographic view shows a sphere of diameter 40 resting on a cylindrical slab of height 20 and diameter 50, with top view showing concentric circles of diameter 50 and 40, labeled with points 1, 2, 3, 4 and reference line y. The isometric projection shows the sphere of diameter 40 placed centrally on top of the cylindrical slab of diameter 50 and height 20.

**Answer:** The isometric projection shows the 50 mm diameter, 20 mm high four-center cylindrical slab topped by a 20 mm true-radius circle centered at $R_{\text{iso}}$ above the top ellipse center.

#### Problem 216: Sphere resting on a hexagonal block
**Given:** A hexagonal block of base edge 30 mm and height 20 mm with a central sphere of radius 20 mm on top.
**Find:** The isometric view of the combination.

1. Draw the orthographic front and top views of the 30 mm edge hexagonal block (vertices $a$ through $f$) and the 40 mm diameter sphere, enclosing the hexagon in a rectangle $1234$.
2. Draw the isometric rectangle $1234$ at 30° axes and transfer the offsets of vertices $A, B, C, D, E, F$ from the orthographic top view to form the hexagonal base.
3. Project vertical edges of height 20 mm from each hexagonal corner and connect their tops to complete the hexagonal prism slab.
4. Draw the intersecting axis lines across the top face to locate the central contact point, then step vertically upward by the sphere's isometric radius ($R_{\text{iso}}$ for $R = 20$ mm).
5. Using that elevated point as center, draw a circle of true radius 20 mm for the sphere and darken the visible front edges of the hexagonal block.

> **Figure: Orthographic projections showing front view and top view of a sphere resting on a hexagonal block**
>
> Orthographic projections (front view and top view) of a sphere centrally resting on a hexagonal block, labelled '216.1' in a box to the right. Below the reference line 'x–y', the top view shows a regular hexagon with vertical left and right edges 'a–f' and 'c–d', top vertex 'e', and bottom vertex 'b' (vertices labelled a, b, c, d, e, f counter-clockwise starting from the bottom-left vertex 'a'). The bottom-left edge 'a–b' is dimensioned as '30'. Concentric inside the hexagon is a circle representing the top view of the sphere. Vertical projector lines extend upward from vertices 'a/f', 'b/e', and 'c/d' to the reference line 'x–y'. Above the 'x–y' line, the front view of the hexagonal block is a rectangle of height dimensioned as '20' on the left, divided into two equal halves by a vertical line projected from 'b/e'. Resting centrally on top of the rectangular block is a circle representing the front view of the sphere, with a leader line at the upper right labelled 'Ø40'. To the right of the views, a boxed note lists the dimensions: '1. HEX. SLAB: B = 30, H = 20' and '2. SPHERE: D = 40'.

> **Figure: Solution step 216.1 - Part 1**
>
> Solution step 216.1 showing orthographic projections on the left with a given hexagonal slab of B = 30, H = 20 and a sphere of D = 40, and an isometric projection on the right showing a hexagon base with side 30 labelled between points F and A, vertices A, B, C, D, E, F, and axis lines 1, 2, 4.

> **Figure: Solution step 216.1 - Part 2**
>
> Solution step 216.1 showing orthographic projections on the left with a given hexagonal slab of B = 30, H = 20 and a sphere of D = 40, and an isometric projection on the right showing the fully constructed hexagonal prism slab with height 20, vertices A, B, C, D, E, F, axis 3, and side 30 between F and A.

> **Figure: Orthographic projections and isometric projection of a sphere on a hexagonal slab**
>
> Orthographic projections (left) and isometric projection (right) of a sphere resting centrally on a regular hexagonal slab, labelled 216.1. Left side (orthographic views): A horizontal reference line is labelled x at the left end and y at the right end. Above the xy line is the front view: a rectangular block of height 20 (dimensioned on the left with vertical arrows between the xy line and the top of the block) divided into two equal halves by a vertical line, representing the hexagonal slab resting on the HP; resting centrally on its top surface is a circle representing a sphere, with leader dimension 'Ø40' pointing to the top-right of the circle. Below the xy line is the top view: a regular hexagon with vertices labelled a, b, c, d, e, f (with e at the top, b at the bottom, f and a on the left vertical edge, d and c on the right vertical edge). The bottom-left side a-b is dimensioned as 30. Inside the hexagon is a concentric circle representing the sphere. Vertically aligned on the far left is the text 'SUMESH 8848440142'. Center: A small rectangular box contains '216.1'. Below it, a larger rectangular box contains the specifications: '1. HEX. SLAB, B = 30, H = 20' and '2. SPHERE, D = 40'. Right side (isometric projection): A hexagonal prism (slab) is drawn inside an isometric bounding box whose base corners are labelled 1 (bottom), 2 (right), 3 (top/back), and 4 (left). The base vertices of the hexagonal slab are labelled A, B, C, D, E, F (with hidden back edges and vertical edges shown as dashed lines). The height of the bounding box is dimensioned as 20 on the left vertical edge above corner 4, and the base edge F-A along side 4-1 is dimensioned as 30. Resting centrally on the top hexagonal face is a sphere drawn as a circle with leader dimension 'Ø40' at the top right, with its center located by construction lines on the top face.

**Answer:** The isometric view shows the 30 mm edge, 20 mm high hexagonal block obtained by the box method, surmounted by a 20 mm true-radius sphere.

<!-- page 9 | Practice: Frustums, Multi-Solid Stacks, and Engineering Applications -->

## Practice: Frustums, Multi-Solid Stacks, and Engineering Applications

Having mastered polyhedra, curved solids, and spheres on simple slabs, you are ready to combine all these techniques to draw tapered frustums, three-part curved assemblies, and practical engineering objects like rivets and bowls. In this section, you will synthesize two-base frustum constructions, four-center ellipses, and the sphere rule to draw complex multi-solid stacks and real-world mechanical shapes.

### The idea

A **frustum** is a pyramid or cone sliced parallel to its base, leaving two unequal parallel faces. Because the sloping lateral edges or generators are non-isometric lines, you cannot measure their lengths or angles directly. Instead, you must use a **two-plane box construction**: build the isometric bounding box for the bottom base, locate its center, step vertically up by the frustum's isometric height, and construct a second, smaller isometric bounding box centered at that upper point. Connecting corresponding corners of the two polygons (or drawing common tangents to the two four-center ellipses for a cone) automatically gives the correct sloping edges.

When stacking a curved solid onto a frustum or cylinder, the orientation and size of the upper solid dictate how you locate its center. If a sphere or a bowl-like hemisphere rests on its curved surface, its point of contact is at the center of the lower solid's top face; you must step vertically upward by the **isometric radius** to find the sphere's center, then draw its outer contour using the **true radius**. Conversely, if a hemisphere rests flat on its circular base—or overhangs a narrower cylindrical shank like an engineering **rivet head**—its flat circular face lies directly in the top plane of the lower solid. You construct its four-center ellipse right on that plane (stepping outward if it overhangs) and sweep the dome tangentially using its true radius.

### Worked example

**Problem Q170: Sphere on a Frustum of a Square Pyramid**

**Given:** A frustum of a square pyramid (bottom base 50 mm, top base 30 mm, height 40 mm) surmounted centrally by a sphere of diameter 30 mm.
**Find:** The isometric projection of the combination.

1. Draw the front and top orthographic views of the square frustum and sphere using true dimensions to establish all coordinate offsets.
2. Construct an isometric rhombus $abcd$ of isometric side 50 mm with edges at 30° to the horizontal because the bottom square base lies on the horizontal plane.
3. Locate the base center by intersecting the diagonals of $abcd$, then project vertically upward by the isometric height of 40 mm to establish the top face's center.
4. Around this upper center, construct a parallel isometric rhombus $efgh$ of isometric side 30 mm, which represents the smaller top square face at the correct elevation.
5. Join the visible corresponding corners ($a$ to $e$, $b$ to $f$, and $c$ to $g$) with straight lines to form the non-isometric sloping edges of the frustum.
6. From the center of the top face $efgh$, measure vertically upward by the sphere's isometric radius of 15 mm to locate the isometric center of the sphere.
7. With the compass set to the sphere's true radius of 15 mm, draw a full circle centered at the sphere's isometric center, because a sphere's contour always projects as its true radius.
8. Darken all visible edges of the frustum and erase the back edges of the top face that are hidden behind the opaque sphere.

> **Figure: Solution step 170.1 showing front view, top view, and given parameters for a frustum of a square pyramid surmounted by a sphere**
>
> Solution step drawing 170.1. On the left is an orthographic projection showing a front view above an $x-y$ reference line and a top view below it. The front view shows a frustum of a square pyramid of height 40, with a sphere of diameter $\emptyset30$ resting centrally on its top face. The top view shows the square base with corners labeled a, b, c, d and the top face corners labeled e, f, g, h, with dimension lines indicating side lengths $\square30$ for the top and $\square50$ for the base, and a circle representing the sphere. To the right, a GIVEN box contains: 1. FRUSTUM OF SQ. PYRAMID, BB = 50, TB = 30, H = 40; 2. SPHERE, D = 30.

> **Figure: Solution step 170.2 showing orthographic projections, given parameters, and an isometric base plate view**
>
> Solution step drawing 170.2. On the left is an orthographic projection with a front view and top view identical to 170.1, showing a frustum of a square pyramid (height 40) and a sphere ($\emptyset30$), with $x-y$ axis and vertices labeled a, b, c, d (base) and e, f, g, h (top). Below the top view, dimensions $\square30$ and $\square50$ are indicated. In the middle, a GIVEN box contains: 1. FRUSTUM OF SQ. PYRAMID, BB = 50, TB = 30, H = 40; 2. SPHERE, D = 30. On the bottom right, an isometric view shows a square plate with corners A, B, C, D, with two adjacent sides dimensioned as 50 each.

> **Figure: Orthographic and isometric projections for problem 170.3**
>
> Step 170.3 showing orthographic and isometric projections of a frustum of a square pyramid (BB = 50, TB = 30, H = 40) and a sphere (D = 30). On the left, the orthographic projection has a horizontal reference line labelled x-y. Above x-y, the front view shows a trapezoidal frustum of height 40 resting on x-y, topped centrally by a circle of diameter Ø30 representing the sphere. Below x-y, the top view shows two concentric squares and an inscribed circle: the outer square (bottom base) has corners labelled a (bottom-left), b (bottom-right), c (top-right), d (top-left) with dimension □50; the inner square (top base) has corners labelled e (bottom-left), f (bottom-right), g (top-right), h (top-left) with dimension □30, connected to the outer corners by diagonal slant edges a-e, b-f, c-g, d-h; the circle of the sphere is inscribed within the inner squareefgh. In the centre, a text box labelled 170.3 lists: '1. FRUSTUM OF SQ. PYRAMID BB = 50, TB = 30, H = 40' and '2. SPHERE D = 30'. On the right, the isometric drawing shows the completed frustum of the square pyramid (before placing the sphere): the bottom square base has corners A (bottom), B (right), C (back, hidden), D (left) with isometric side dimensions 50 and 50 along D-A and A-B, and dashed hidden edges D-C, B-C, and C-G; the top square face has corners E (front), F (right), G (back), H (left) with dimensions 30 and 30 along the top construction plane, at a vertical height of 40 above the base.

> **Figure: Orthographic and isometric projections for problem 170.4**
>
> Step 170.4 showing the final orthographic and isometric projections of a sphere (D = 30) placed centrally on top of a frustum of a square pyramid (BB = 50, TB = 30, H = 40). On the left, the orthographic view is identical to 170.3: above the x-y line is the front view showing the trapezoidal frustum of height 40 and the sphere of diameter Ø30 on top; below the x-y line is the top view showing the outer square a-b-c-d (dimension □50), inner square e-f-g-h (dimension □30), slant edges a-e, b-f, c-g, d-h, and the circle of the sphere tangent to the inner square. In the centre, a text box labelled 170.4 lists: '1. FRUSTUM OF SQ. PYRAMID BB = 50, TB = 30, H = 40' and '2. SPHERE D = 30'. On the right, the isometric view shows the frustum with base corners A, B, C, D (sides 50, 50), top corners E, F, G, H (sides 30, 30), vertical height 40, hidden rear edges shown dashed, and a circle of diameter Ø30 drawn on top of the frustum centred above the top face E-F-G-H to represent the sphere.

**Answer:** The completed isometric projection shows the square frustum (isometric bases 50 mm and 30 mm, isometric height 40 mm) topped by a sphere of true radius 15 mm centered at an isometric height of 15 mm above the top face.

### More problems

#### Problem 166: Hemispherical Rivet Head on a Cylindrical Shank
**Given:** A cylindrical shank (diameter 30 mm, height 60 mm) topped centrally by an overhanging hemispherical rivet head (diameter 50 mm).
**Find:** The isometric projection of the rivet.
1. Draw the orthographic front and top views of the rivet, noting the 10 mm overhang around the 30 mm shank.
2. Construct a bottom isometric rhombus of side 30 mm and draw the visible front half of its four-center ellipse.
3. Project the rhombus corners vertically upward by 60 mm to form the cylinder's top rhombus and vertical tangent generators.
4. Extend the top plane outward by 10 mm on each side to build a coaxial 50 mm isometric rhombus.
5. Inscribe a four-center ellipse inside the 50 mm rhombus to represent the flat underside of the overhanging rivet head.
6. With the compass at the top face center, draw an upper semicircular arc of radius 25 mm tangent to the ellipse.

> **Figure: Orthographic projections of a rivet consisting of a hemisphere over a cylinder**
>
> Orthographic projections (front view and top view) of a rivet consisting of a hemispherical head placed centrally over a cylindrical shank, divided by a horizontal reference line labelled x at the left end and y at the right end. Above the x-y line, the front view shows a vertical rectangular cylindrical shank resting on the x-y line, with a vertical dimension of 60 on its left side between the x-y line and the flat base of the hemisphere. On top of the shank is a semicircle representing the hemisphere, with a leader arrow pointing to its curved outline labelled Ø50. Vertical projector lines extend downward from the outer edges of the hemisphere and the cylindrical shank to the top view below the x-y line. The top view consists of two concentric circles: an outer solid circle for the hemisphere with a leader arrow labelled Ø50, and an inner dashed circle (hidden line) for the cylindrical shank with a leader arrow labelled Ø30. To the right of the drawing is a small box labelled 166.1 above a larger rectangular text box containing: '1. CYLINDER D = 30, H = 60' and '2. HEMISPHERE D = 50'.

> **Figure: Engineering drawing and isometric projection for 166.2 showing a cylinder and hemisphere combination**
>
> The figure shows an orthographic projection on the left and an isometric projection on the right for 166.2. The orthographic projection has a front view showing a cylinder of height 60 topped with a hemisphere of diameter $\varnothing50$. A top view shows a concentric circle of $\varnothing30$ inside $\varnothing50$ with offset dimensions 10 from the edges and reference points 1, 2, 3, 4, 5, 6, 7, 8. A given box lists: 1. CYLINDER D = 30, H = 60; 2. HEMISPHERE D = 50. The isometric projection on the right shows the combined shape inside a bounding box with dimensions 50, and 8, 3, 8 spacings.

> **Figure: Engineering drawing and isometric projection for 166.3 showing a cylinder and hemisphere combination**
>
> The figure shows an orthographic projection on the left and an isometric projection on the right for 166.3. The orthographic projection has a front view showing a cylinder of height 60 topped with a hemisphere of diameter $\varnothing50$. A top view shows concentric circles of $\varnothing50$ and $\varnothing30$ with dashed lines. A given box lists: 1. CYLINDER D = 30, H = 60; 2. HEMISPHERE D = 50. The isometric projection on the right shows the combined shape with a height of 60 and reference points 1, 2, 3, 4, 5, 6, 7, 8.

> **Figure: Orthographic views of a cylinder and hemisphere combination**
>
> Orthographic projection (front view and top view) of a hemisphere resting centrally on top of a vertical cylinder, separated by a horizontal reference line labelled 'x' on the left and 'y' on the right. Above the x-y line, the front view shows a vertical rectangle representing the cylinder with its base on the x-y line and a vertical dimension of 60 on the left. Centered on top of the cylinder is a semicircle with a flat horizontal base representing the hemisphere, with a leader line pointing to the curved top edge labelled 'Ø50'. Below the x-y line, projected vertically from the front view, the top view shows two concentric circles: an outer solid circle for the hemisphere labelled 'Ø50' via a leader line, and an inner dashed (hidden) circle for the cylinder labelled 'Ø30' via a leader line.

> **Figure: Isometric view of cylinder and hemisphere combination**
>
> Isometric projection of a hemisphere resting centrally on top of a vertical cylinder, labelled with step box '166.4' and a specification box reading '1. CYLINDER D = 30 H = 60' and '2. HEMISPHERE D = 50'. The base of the cylinder is drawn inside an isometric rhombus with corners numbered 1 (bottom), 2 (right), 3 (top), and 4 (left). The lower half of the base ellipse is a solid curve, and the upper (back) half is a dashed curve. Vertical generators rise from the extreme left and right of the base ellipse to the top of the cylinder, which has a vertical height dimension of 60 on the left side. At the top, a smaller inner isometric ellipse represents the top face of the cylinder, enclosed in a construction rhombus with midpoints/corners labelled 5, 6, 7, 8; its back half is dashed and its front half is solid. Surrounding the top of the cylinder is a larger isometric rhombus with corners numbered 1 (bottom), 2 (right), 3 (top), and 4 (left), containing the isometric ellipse of the hemisphere's flat base (front half solid, back half dashed) and a semicircular arc over the top representing the curved surface of the hemisphere.

**Answer:** Isometric projection of a 30 mm by 60 mm cylindrical shank capped by an overhanging 50 mm hemispherical head.

#### Problem 217: Flat-Down Hemisphere on a Frustum of a Cone
**Given:** A frustum of a cone (bottom diameter 50 mm, top diameter 30 mm, height 50 mm) topped by a 30 mm hemisphere resting on its flat face.
**Find:** The isometric view of the combination.
1. Draw the orthographic views of the frustum and hemisphere using true lengths, since an isometric view is required.
2. Construct a 50 mm isometric rhombus and use the four-center method to draw the visible front half of the base ellipse.
3. Step up 50 mm from the base center and construct a parallel 30 mm isometric rhombus for the top face.
4. Inscribe a four-center ellipse in the 30 mm rhombus and draw straight lines tangent to both ellipses for the cone's sides.
5. Because the hemisphere's flat face matches the 30 mm top face, its base is the upper ellipse already drawn.
6. From the top face center, sweep a semicircular dome tangent to the upper ellipse using the radius of 15 mm.

> **Figure: Engineering drawing step 217.1 showing orthographic projections of a frustum with a hemisphere on top**
>
> Orthographic projection drawing labelled 217.1. Front elevation and top view of a frustum with a hemisphere mounted on top. The x-y reference line is shown. Dimensions: height 50, top diameter $\varnothing30$, bottom diameter $\varnothing50$. A GIVEN box contains: 1. FRUSTUM, BD = 50, TD = 30, H = 50; 2. HEMISPHERE, D = 30.

> **Figure: Engineering drawing step 217.2 showing orthographic projections and an auxiliary or isometric construction view**
>
> Orthographic and auxiliary projection drawing labelled 217.2. Front elevation and top view on the left with height 50, $\varnothing30$, and $\varnothing50$. On the right, a diamond-shaped construction frame with numbered corners 1, 2, 3, 4 enclosing an ellipse. A GIVEN box contains: 1. FRUSTUM, BD = 50, TD = 30, H = 50; 2. HEMISPHERE, D = 30.

> **Figure: Engineering drawing step 217.3 showing orthogonal projections and isometric view**
>
> Step 217.3 containing an orthogonal projection on the left (front view showing a frustum of height 50 and top diameter 30, with a hemisphere of diameter 30 on top; top view showing concentric circles of diameters 50 and 30) and an isometric view on the right with points labelled 1 to 9. A GIVEN box specifies FRUSTUM with BD = 50, TD = 30, H = 50, and HEMISPHERE with D = 30.

> **Figure: Engineering drawing step 217.4 showing orthogonal projections and isometric view**
>
> Step 217.4 containing an orthogonal projection on the left (front view showing a frustum of height 50 and top diameter 30, with a hemisphere of diameter 30 on top; top view showing concentric circles of diameters 50 and 30) and an isometric view on the right with points labelled 1 to 9, showing the hemisphere construction. A GIVEN box specifies FRUSTUM with BD = 50, TD = 30, H = 50, and HEMISPHERE with D = 30.

**Answer:** Isometric view of the conical frustum (diameters 50 mm and 30 mm, height 50 mm) capped flush by a 30 mm hemispherical dome.

#### Problem 165: Hemispherical Bowl on a Frustum of a Cone
**Given:** A frustum of a cone (bottom diameter 50 mm, top diameter 30 mm, height 50 mm) supporting a centrally placed hemisphere resting on its curved surface.
**Find:** The isometric projection of the combination.
1. Draw the orthographic views of the frustum and the upward-facing hemispherical bowl.
2. Build a 50 mm isometric rhombus and draw the visible front half of the bottom base ellipse using four centers.
3. From the base center, rise vertically by 50 mm to construct the 30 mm top rhombus and its four-center ellipse.
4. Draw common outer tangents connecting the 50 mm and 30 mm ellipses to complete the conical frustum.
5. From the top face center, step vertically upward by the hemisphere's radius to locate the center of its flat circular rim.
6. Construct a rhombus at this top center and inscribe a four-center ellipse for the hemisphere's open top face.
7. Sweep the lower curved bowl tangent to the upper ellipse from the top center, hiding the obscured frustum lines.

> **Figure: Orthographic projection of a hemisphere resting on a frustum of a cone**
>
> Orthographic projection showing a hemisphere of diameter Ø50 placed centrally on top of a frustum with height 50, base diameter Ø50, and top diameter Ø30. The top view consists of three concentric circles labelled Ø50, Ø40, and Ø30. The X-Y reference line is indicated.

> **Figure: Orthographic projection with numbering for construction**
>
> Orthographic projection showing a hemisphere of diameter Ø50 on a frustum (height 50, base diameter Ø50, top diameter Ø30). The top view includes numbered points 1 through 12 along the concentric circles for construction. The X-Y reference line is shown.

> **Figure: Isometric view or construction diagram**
>
> A rhombus with numbered vertices 1, 2, 3, 4 containing an inscribed ellipse.

> **Figure: Engineering drawing and isometric view for problem 165.3**
>
> Engineering drawing showing step 165.3 of constructing the isometric projection of a hemisphere resting centrally on a frustum of a cone. In the center is a label box '165.3' above a specification box reading: '1. FRUSTUM: BD = 50, TD = 30, H = 50; 2. HEMISPHERE: D = 40'. On the left is the orthographic projection separated by a horizontal reference line 'x-y'. Above the x-y line (front view), a frustum of height 50 rests with its base on x-y, and an inverted hemisphere (flat circular face on top, curved surface resting centrally on the top face of the frustum) is placed above it, with a leader line pointing to the hemisphere arc labeled 'Ø50' (representing the isometric/true sphere diameter scale or a print label of Ø50, while the text box states D = 40). Below the x-y line (top view), three concentric circles are enclosed in concentric square bounding boxes with vertical projectors connecting to the front view. The outer circle is labeled 'Ø50' and enclosed in square 1-2-3-4 (bottom-left 1, bottom-right 2, top-right 3, top-left 4). The middle circle is labeled 'Ø40' and enclosed in square 9-10-11-12 (bottom-left 9, bottom-right 10, top-right 11, top-left 12). The inner dashed circle is labeled 'Ø30' and enclosed in square 5-6-7-8 (bottom-left 5, bottom-right 6, top-right 7, top-left 8). Offset dimensions of 10 (vertical and horizontal) are shown at the bottom-left corner between square 1-2-3-4 and square 5-6-7-8. On the right is the isometric construction of the frustum inside a rectangular isometric box of base 50 x 50 (corners 1, 2, 3, 4) and height 50. On the top face of the box, offset dimensions of 10 from each edge locate the smaller inner square 5-6-7-8 (with 5 at the front corner, 6 right, 7 back, 8 left). Isometric ellipses are drawn inside 1-2-3-4 (with the back half dashed) and 5-6-7-8 (solid), connected by tangent generators to form the frustum of the cone.

> **Figure: Engineering drawing and isometric view for problem 165.4**
>
> Engineering drawing showing step 165.4 of the same problem. In the center is a label box '165.4' above a specification box reading: '1. FRUSTUM: BD = 50, TD = 30, H = 50; 2. HEMISPHERE: D = 40'. On the left is the same orthographic projection as in 165.3: front view above the x-y line showing the frustum of height 50 and the hemisphere on top labeled 'Ø50'; top view below the x-y line showing three concentric circles ('Ø50' solid, 'Ø40' solid, 'Ø30' dashed) inside three concentric squares 1-2-3-4, 9-10-11-12, and 5-6-7-8. On the right is the isometric drawing extending step 165.3 by adding the bounding box for the hemisphere's top circular face: above the frustum's box (height 50, base corners 1, 2, 3, 4, top inner square 5-6-7-8), the vertical corner lines are extended upward by 20 (dimensioned '20' on the left). At this upper level (total height 50 + 20 = 70), a 50 x 50 isometric square is drawn with an inner square 9-10-11-12 (9 at front, 10 right, 11 back, 12 left) inset by 5 from the outer edges (dimensioned '5' at the left, back-left, back-right, and right edges along the 50-unit side). An isometric ellipse for the flat top face of the hemisphere is inscribed in square 9-10-11-12 above the frustum.

> **Figure: Orthographic and isometric projections of a hemisphere on a frustum of a cone**
>
> Orthographic and isometric projections labeled 165.5 (from the preceding problem, showing a hemisphere resting on its curved surface on top of a frustum of a cone). A central text box lists the parameters: '1. FRUSTUM: BD = 50, TD = 30, H = 50' and '2. HEMISPHERE: D = 40'. On the left, the orthographic views are drawn across reference line x-y: the front view above x-y shows a frustum of height 50 (dimensioned on the left) on the x-y line, and a hemisphere resting on its curved surface centrally on the top face of the frustum (with its flat circular face horizontal at the top and a leader labeled Ø50 pointing to the hemisphere arc). Below x-y, the top view shows three concentric circles enclosed in three concentric squares: an outer solid circle labeled Ø50 inside square 1-2-3-4 (1 at bottom-left, 2 at bottom-right, 3 at top-right, 4 at top-left), a middle solid circle labeled Ø40 inside square 9-10-11-12, and an inner dashed circle labeled Ø30 inside square 5-6-7-8. Vertical projectors link the squares in the top view to the front view. On the right, the isometric drawing shows the frustum base ellipse inscribed in isometric rhombus 1-2-3-4 (with the rear arc dashed), the frustum top ellipse at height 50 (dimensioned vertically on the left) inscribed in rhombus 5-6-7-8, and the hemisphere's flat top face ellipse a further height 20 above (dimensioned vertically on the left above the 50 dimension) inscribed in rhombus 9-10-11-12, with its curved lower surface resting on the top of the frustum.

> **Watch out.** The specification tables list the hemisphere diameter as 40 mm, whereas the front orthographic views label it as $\varnothing 50$ mm while keeping the top view circle at 40 mm.

**Answer:** Isometric projection of the conical frustum (diameters 50 mm and 30 mm, height 50 mm) topped by an upward-facing hemisphere of diameter 40 mm.

#### Problem 167: Sphere on a Frustum of a Hexagonal Pyramid
**Given:** A frustum of a hexagonal pyramid (bottom base side 30 mm, top base side 20 mm, height 40 mm) surmounted centrally by a 30 mm sphere.
**Find:** The isometric projection of the combination.
1. Draw the orthographic front view and top view, enclosing both concentric hexagons in rectangular bounding boxes.
2. Construct the bottom isometric bounding box and transfer the six corner offsets from the top view to draw hexagon $ABCDEF$.
3. Locate the base center by intersecting diagonals, then measure vertically upward by the isometric height of 40 mm.
4. Around this upper center, construct the smaller isometric bounding box for the 20 mm top hexagon and plot its six corners.
5. Connect the visible top corners to their corresponding bottom corners with straight lines to form the sloping lateral edges.
6. From the top hexagon's center, step vertically upward by the sphere's isometric radius of 15 mm to find the sphere's center.
7. Set the compass to the true radius of 15 mm and draw the sphere's circular outline around this center, hiding covered edges.

> **Figure: Given dimensions box for Q167**
>
> A rectangular summary box outlining the given dimensions for problem Q167, containing the text: 'FRUSTUM OF HEXAGONAL PYRAMID : BB- 30mm; TB -20; H- 40mm; SPHERE: D-30mm'.

> **Figure: Engineering drawing showing the orthographic projection of a frustum of a hexagonal prism with a sphere on top**
>
> Orthographic projection drawing with a box labelled 167.1. To the right, a GIVEN box lists: 1. FRUSTUM OF HEX. PRISM, BB = 30, TB = 20, H = 40; 2. SPHERE, D = 30. The main drawing shows an $x-y$ reference line. Above the $x-y$ line is the front view showing a frustum of a hexagonal prism of height 40, surmounted by a circle of diameter $\varnothing30$. Below the $x-y$ line is the top view showing a regular hexagon with vertices labelled a, b, c, d, e, f on the outer boundary, and inner vertices $a_1, b_1, c_1, d_1, e_1, f_1$ representing the top base, enclosing a concentric circle of diameter $\varnothing30$. Dimension lines show widths 30 and 20, and height 40.

> **Figure: Engineering drawing showing orthographic and isometric construction steps for a frustum of a hexagonal prism with a sphere**
>
> Orthographic and isometric projection drawing with a box labelled 167.2. To the right, a GIVEN box lists: 1. FRUSTUM OF HEX. PRISM, BB = 30, TB = 20, H = 40; 2. SPHERE, D = 30. The left side shows front and top orthographic views similar to 167.1, with additional projection numbers 1, 2, 3, 4, 5, 6, 7, 8 on the top view corners. The bottom right shows an isometric view of the hexagonal base labelled with vertices A, B, C, D, E, F and outer corner numbers 1, 2, 3, 4, with a dimension of 30 along edge A.

> **Figure: Engineering drawing showing orthographic projections and isometric view of a frustum of a hexagonal prism with a sphere on top for problem 167.3**
>
> Problem 167.3. GIVEN: 1. FRUSTUM OF HEX. PRISM, BB = 30, TB = 20, H = 40. 2. SPHERE, D = 30. The orthographic projection shows a front view with a frustum and a sphere of diameter Ø30 on top, height 40, and a top view showing concentric hexagons and a circle. The isometric projection on the right shows the frustum with base dimensions 30 and top dimensions 20, height 40, labeled with vertices A, B, C, D, E, F on the base and A1, B1, C1, D1, E1, F1 on the top, along with projection lines and numbers 1 to 8.

> **Figure: Engineering drawing showing orthographic projections and isometric view of a frustum of a hexagonal prism with a sphere placed on top for problem 167.4**
>
> Problem 167.4. GIVEN: 1. FRUSTUM OF HEX. PRISM, BB = 30, TB = 20, H = 40. 2. SPHERE, D = 30. The orthographic projection shows a front view with a frustum and a sphere of diameter Ø30 resting on top, height 40, and a top view showing concentric hexagons and a circle. The isometric projection on the right shows the frustum with a sphere of diameter Ø30 resting on top, base dimensions 30 and top dimensions 20, height 40, labeled with vertices A, B, C, D, E, F and A1, B1, C1, D1, E1, F1, along with projection lines and numbers 1 to 8.

**Answer:** Isometric projection of the hexagonal frustum (sides 30 mm and 20 mm, height 40 mm) topped by a sphere of true radius 15 mm.

#### Problem 199: Hemisphere on a Frustum of a Hexagonal Pyramid
**Given:** A frustum of a hexagonal pyramid (top side 20 mm, bottom side 50 mm in text / 30 mm in drawing, height 40 mm) topped by a 30 mm hemisphere resting on its flat base.
**Find:** The isometric projection of the combination.
1. Draw the orthographic views, enclosing the base hexagon (30 mm side) and top hexagon (20 mm side) in rectangular boxes.
2. Construct the bottom isometric box and plot the six base vertices using coordinate offsets from the box corners.
3. From the base center, rise vertically by 40 mm and build the upper isometric box to plot the 20 mm top hexagon.
4. Join the visible corresponding vertices of the two hexagons with straight lines to complete the frustum's lateral faces.
5. Around the center of the top hexagon, construct a 30 mm isometric rhombus in the same horizontal plane.
6. Use the four-center method to inscribe the hemisphere's 30 mm base ellipse, which overhangs the 20 mm top hexagon.
7. Sweep a semicircular arc of radius 15 mm from the top center, tangent to the ellipse, and erase hidden lines.

> **Figure: Orthographic views of a hemisphere on a frustum of a hexagonal pyramid**
>
> Orthographic projections (front view and top view) of a hemisphere resting centrally on the top smaller end of a frustum of a hexagonal pyramid, labelled '199.1'. Above the drawing is a banner stating: 'FRUSTUM OF HEX,.PYRAMID : BB- 30mm; TB -20mm; H -40mm HEMI SPHERE : D- 30mm' (note: the problem text says bottom base of 50mm side, while the banner and drawing use 30mm). A horizontal reference line is labelled 'x' at the left end and 'y' at the right end. Below the xy line is the top view: two concentric regular hexagons oriented with two vertical edges on the left and right, and vertices at the top and bottom. The outer hexagon (bottom base) has vertices labelled 'a' (bottom-left), 'b' (bottom), 'c' (bottom-right), 'd' (top-right), 'e' (top), and 'f' (top-left). The inner hexagon (top base) has corresponding vertices labelled 'a1', 'b1', 'c1', 'd1', 'e1', and 'f1', connected to the outer vertices by slant edge lines (a-a1, b-b1, c-c1, d-d1, e-e1, f-f1). Inside the inner hexagon is a circle representing the base of the hemisphere. Vertical dimension lines on the left side of the top view indicate the vertical side length 'a-f' of the outer hexagon as '30' and the vertical side length 'a1-f1' of the inner hexagon as '20'. Vertical projectors rise from the top view to the front view above the xy line. The front view shows the frustum as a symmetrical trapezoid resting on the xy line, with two interior slant lines corresponding to the middle vertices (b-b1 and e-e1) and a vertical axis line through the center. The height of the frustum is dimensioned on the left as '40' between the xy line and the top horizontal face of the frustum. Resting centrally on the top face of the frustum is a semicircle representing the front view of the hemisphere, with a leader line pointing to its arc labelled 'Ø30'. To the right of the views, below the '199.1' box, is a rectangular text box listing: '1. FRUSTUM OF HEX. PRISM / BB = 30 / TB = 20 / H = 40' and '2. HEMISPHERE / D = 30'.

> **Figure: Engineering drawing showing orthogonal projections and an isometric step for problem 199.2**
>
> Orthogonal projection with front view showing a frustum of a hexagonal prism with a hemisphere of diameter $\emptyset 30$ on top, height $40$, and top line width $20$. Top view shows a hexagon with vertices $a, b, c, d, e, f$ and an inner circle with inscribed hexagon $a_1, b_1, c_1, d_1, e_1, f_1$, with dimensions $30$ and $20$. Next to it is a given box: 1. FRUSTUM OF HEX. PRISM, BB = 30, TB = 20, H = 40. 2. HEMISPHERE, D = 30. An isometric projection shows the base hexagon labeled A, B, C, D, E, F with side length 30 enclosed in a rectangular grid with corners 1, 2, 3, 4.

> **Figure: Engineering drawing showing orthogonal projections and a complete isometric projection for problem 199.3**
>
> Orthogonal projection with front view showing a frustum of a hexagonal prism with a hemisphere of diameter $\emptyset 30$ on top, height $40$. Top view shows a hexagon with vertices $a, b, c, d, e, f$ and an inner circle with inscribed hexagon $a_1, b_1, c_1, d_1, e_1, f_1$, with dimensions $30$ and $20$. Next to it is a given box: 1. FRUSTUM OF HEX. PRISM, BB = 30, TB = 20, H = 40. 2. HEMISPHERE, D = 30. An isometric projection shows the completed frustum with top face vertices $A_1, B_1, C_1, D_1, E_1, F_1$, bottom face $A, B, C, D, E, F$, height dimension $40$, top side dimension $20$, and bottom side dimension $30$.

> **Figure: Orthographic and isometric views of a hemisphere on a frustum of a hexagonal prism, with given dimensions.**
>
> Engineering drawing labelled 199.4 showing the orthographic views (left) and isometric projection (right) of a hemisphere resting centrally on top of a frustum of a hexagonal pyramid (labelled in the central text box as '1. FRUSTUM OF HEX. PRISM: BB = 30, TB = 20, H = 40; 2. HEMISPHERE: D = 30'). On the left, an xy reference line separates the front view (above) and top view (below). The front view shows a frustum of height 40 resting on the xy line, surmounted by a hemisphere of diameter Ø30. The top view shows two concentric regular hexagons enclosed in rectangular bounding boxes: the outer bottom-base hexagon has vertices a, b, c, d, e, f (with side f-a vertical on the left, dimensioned 30) inside bounding box 1-2-3-4 with midpoints/projected points 5 (on 1-b), 6 (on b-2), 7 (on d-e), 8 (on e-f); the inner top-base hexagon has vertices a1, b1, c1, d1, e1, f1 (with side f1-a1 vertical on the left, dimensioned 20) with construction points 9, 10, 11, 12; a concentric circle representing the hemisphere is inscribed inside the top view. On the right, the isometric projection shows the frustum with bottom base vertices A, B, C, D, E, F inside isometric box 1-2-3-4 (with side F-A dimensioned 30 and height between bottom and top isometric boxes dimensioned 40 on the left vertical edge), top base vertices A1, B1, C1, D1, E1, F1 inside isometric box 5-6-7-8 (with helper points 9, 10, 11, 12 and side D1-C1 dimensioned 20), Hidden base edges are shown dashed, and a hemisphere of diameter Ø30 is drawn on top of the upper hexagonal face.

> **Watch out.** The problem text states a bottom base side of 50 mm, but the specification banner and solution drawings construct the bottom base with a 30 mm side.

**Answer:** Isometric projection of the hexagonal frustum (sides 30 mm and 20 mm, height 40 mm) capped by a flat-down 30 mm hemisphere.

#### Problem 175: Sphere on a Frustum of a Cone on a Cylinder
**Given:** A cylinder (diameter 50 mm, height 20 mm), a frustum of a cone (bottom diameter 40 mm, top diameter 30 mm, height 15 mm), and a sphere (diameter 20 mm) stacked coaxially.
**Find:** The isometric projection of the three-solid combination.
1. Draw the front and top orthographic views showing the four concentric circles of diameters 50 mm, 40 mm, 30 mm, and 20 mm.
2. Construct a 50 mm isometric rhombus for the cylinder's base and draw its front half ellipse using the four-center method.
3. Rise vertically by 20 mm to construct the cylinder's top 50 mm rhombus, complete its ellipse, and draw vertical tangent sides.
4. Inset by 5 mm from the cylinder's top box edges to build a coaxial 40 mm rhombus for the frustum's base.
5. Inscribe the visible front arc of the 40 mm four-center ellipse on the cylinder's top face.
6. From the frustum's base center, step up 15 mm, construct a 30 mm rhombus, and inscribe the frustum's top ellipse.
7. Draw straight lines tangent to the 40 mm and 30 mm ellipses to complete the conical frustum.
8. From the frustum's top center, rise by the sphere's isometric radius of 10 mm and draw a circle of true radius 10 mm.

> **Figure: Orthographic views and given dimensions of a sphere on a frustum of a cone on a cylinder**
>
> Orthographic projections (front view and top view) of a composite solid consisting of a sphere resting centrally on a frustum of a cone, which in turn rests centrally on a cylindrical slab, labelled in a box as 175.1. A horizontal reference line is labelled 'x' at the left end and 'y' at the right end. Above the x-y line, the front view shows: at the bottom, a rectangle representing the cylinder sitting on the x-y line with a vertical dimension of 20 on the left; in the middle, a symmetrical trapezoid representing the frustum of the cone with a vertical height dimension of 15 on the left; at the top, a circle representing the sphere resting tangentially at the center of the top edge of the frustum. Faint vertical projector lines extend downward from the front view features to the top view below the x-y line. The top view consists of four concentric circles representing, from outermost to innermost, the cylinder (diameter 50), the bottom base of the frustum (diameter 40), the top face of the frustum (diameter 30), and the sphere (diameter 20). Four radial leader lines at the bottom right of the concentric circles are labelled from top to bottom as 'Ø50' (pointing to the outermost circle), 'Ø40' (pointing to the second outermost circle), 'Ø20' (pointing to the third circle, though geometrically it has diameter 30), and 'Ø30' (pointing to the innermost circle, though geometrically it has diameter 20). To the right of the views, inside a rectangular border, is a specification list reading: '1. CYLINDER: D = 50, H = 20', '2. FRUSTUM OF CONE: BD = 40, TD = 30, H = 15', and '3. SPHERE: D = 20'.

> **Figure: Engineering drawing showing orthographic projections and isometric construction step 175.2**
>
> Problem 175.2 showing an orthographic projection on the left with an x-y reference line, a cylinder (D=50, H=20), a frustum of a cone (BD=40, TD=30, H=15), and a sphere (D=20). The top view shows concentric circles with diameters 50, 40, 30, and 20. On the right, an isometric construction box showing an ellipse inscribed in a rhombus with vertices labeled 1, 2, 3, 4.

> **Figure: Engineering drawing showing orthographic projections and isometric construction step 175.3**
>
> Problem 175.3 showing an orthographic projection on the left with an x-y reference line, a cylinder (D=50, H=20), a frustum of a cone (BD=40, TD=30, H=15), and a sphere (D=20). The top view shows concentric circles with diameters 50, 40, 30, and 20. On the right, an isometric construction box showing the cylinder with height 20 added, vertices labeled 1, 2, 3, 4.

> **Figure: Orthographic projection showing front view and top view of a combination of a cylinder, frustum of cone, and sphere.**
>
> Orthographic views with an x-y reference line. Front view shows a bottom cylinder of height 20, a frustum of cone of height 15 on top of it, and a sphere sitting on the top face of the frustum. Top view shows concentric circles with diameters $\varnothing 50$, $\varnothing 40$, $\varnothing 30$, and $\varnothing 20$ indicated with leader lines.

> **Figure: Isometric projection of a cylinder with diameter 50 and height 20.**
>
> Isometric view of a cylinder showing top and side surfaces inside isometric axes, with dimensions height 20, diameter $\varnothing 50$ for bottom face, and diameter $\varnothing 40$ for top face.

> **Figure: Orthographic projection showing front view and top view for problem 175.6.**
>
> Orthographic views with an x-y reference line. Front view shows a bottom cylinder of height 20, a frustum of cone of height 15, and a sphere on top. Top view shows concentric circles with diameters $\varnothing 50$, $\varnothing 40$, $\varnothing 30$, and $\varnothing 20$ indicated with leader lines.

> **Figure: Isometric projection of a combination of a cylinder and a frustum of cone.**
>
> Isometric view showing a bottom cylinder of height 20 and diameter $\varnothing 50$, with a frustum of cone of height 15, bottom diameter $\varnothing 40$, and top diameter $\varnothing 30$ placed on top, showing construction lines and offsets of 5 units.

> **Figure: Orthographic projections of a cylinder, frustum of cone, and sphere**
>
> Orthographic projections (front view and top view) of a combination of three coaxially stacked solids: a base cylinder, a middle frustum of a cone, and a top sphere, separated by a horizontal reference line labelled 'x' at the left end and 'y' at the right end. In the front view (above the x-y line): at the bottom, resting on the x-y line, is a rectangle representing the cylinder of height 20 (dimensioned '20' on the left with vertical extension lines and arrowheads) and width 50; stacked centrally on top of the cylinder is a symmetrical trapezoid representing the frustum of a cone of height 15 (dimensioned '15' on the left above the 20 dimension), base width 40, and top width 30; resting centrally on the flat top of the frustum is a circle representing a sphere of diameter 20. In the top view (below the x-y line): four concentric circles enclosed within a square construction box of side 50, connected to the front view by vertical projector lines passing through the outer edges of each solid. Leader arrows pointing to the four concentric circles at the bottom right are labelled, from outermost to innermost: 'Ø50' (outermost circle, cylinder), 'Ø40' (second circle, frustum base), 'Ø30' (third circle, frustum top), and 'Ø20' (innermost circle, sphere). Note that in the vertical order of leader shelves on the right, the labels read from top to bottom: Ø50, Ø40, Ø20, Ø30.

> **Figure: Isometric view of the combination of solids**
>
> Isometric projection of the coaxial combination of solids: a base cylinder, a middle frustum of a cone, and a top sphere, complete with isometric construction boxes (rhombuses) and vertex numbers. At the bottom is a cylinder of diameter 'Ø50' (leader pointing to bottom right ellipse) and height '20' (dimensioned vertically on the left between the bottom and top isometric rhombuses of the cylinder). The bottom isometric rhombus has vertices numbered '1' (front/bottom corner), '2' (right corner), '3' (back/top corner), and '4' (left corner). The top isometric rhombus of the cylinder has vertices numbered '5' (front/bottom corner), '6' (right corner), '7' (back/top corner), and '8' (left corner). Centered on the top face of the cylinder is the base ellipse of the frustum of a cone, labelled 'Ø40' via a leader on the right. The frustum has a vertical height of '15' (dimensioned on the left above the 20 dimension) and its top ellipse is labelled 'Ø30' via a leader on the right; the isometric rhombus enclosing the top face of the frustum has vertices numbered '9' (front/bottom corner), '10' (right corner), '11' (back/top corner), and '12' (left corner). Resting centrally on top of the frustum is a sphere represented by a circle labelled 'Ø20' via a leader at the top right.

**Answer:** Isometric projection of the coaxial stack: a 50 mm by 20 mm base cylinder, a 40 mm to 30 mm by 15 mm conical frustum, and a 20 mm top sphere.
