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

![Orthographic projections showing front view and top view of a cube on a square prism](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-002-panel-2.webp)

3. Draw the bottom isometric rhombus $ABCD$ of side ISO 60 mm with edges inclined at 30° to the horizontal to represent the base of the square slab.

![Engineering drawing showing orthographic views, given dimensions, isometric view and construction scale for problem 156.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-003-panel-1.webp)

4. Raise vertical edges of height ISO 20 mm from corners $A, B, C, D$ and join their tops to complete the lower square slab.

![Engineering drawing showing orthographic views, given dimensions, isometric view and construction scale for problem 156.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-003-panel-2.webp)

5. On the top face of the slab, step inward by an isometric offset of ISO 10 mm from each side to draw parallel grid lines that locate the centered base $PQRS$ of the 40 mm cube.

![Isometric and orthographic views for problem 156.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-004-panel-1.webp)

6. Erect vertical lines of height ISO 40 mm from $P, Q, R, S$ to complete the upper cube, darkening all visible front and top edges while omitting hidden rear lines.

![Isometric and orthographic views for problem 156.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-004-panel-2.webp)

**Answer:** Isometric projection of the 40 mm cube centered with a 10 mm offset on the 60 mm by 20 mm square slab.

### More problems

#### Problem 133: Pentagonal prism resting on a rectangular face

**Given:** A pentagonal prism of base edge 30 mm and axis length 70 mm resting on a rectangular face on the HP with end faces parallel to the VP.
**Find:** Draw the isometric projection.

1. Draw the orthographic front view as a regular pentagon $abcde$ of side 30 mm enclosed in rectangle $1234$, and draw the top view with length 70 mm.
2. Construct the isometric box $1234$ vertically using isometric lengths from the box width and height, and extend it along the 30° axis by ISO 70 mm.
3. Transfer the pentagon vertices $A, B, C, D, E$ onto the front vertical face of the isometric box by measuring their coordinate offsets along the box edges.
4. Project parallel lines of length ISO 70 mm from each vertex along the horizontal isometric axis to locate the rear pentagon and darken visible edges.

![Orthographic projections and isometric view of a pentagonal prism resting on a rectangular face](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-008-panel-2.webp)

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

![Orthographic projection showing a square pyramid placed centrally on top of a hexagonal prism, with dimensions and labels.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-005-panel-2.webp)

![Orthographic projections of hexagonal slab with square pyramid on top](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-006-panel-1.webp)

![Orthographic projections of hexagonal slab with square pyramid on top](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-006-panel-2.webp)

![Orthographic projections of a square pyramid on a hexagonal slab](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-007-panel-1.webp)

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

![Orthographic views showing front elevation and top view of square pyramid on cube on rectangular slab with dimensions](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-047-panel-2.webp)

![Engineering drawing showing orthographic projections and isometric view for problem 174.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-048-panel-1.webp)

![Engineering drawing showing orthographic projections and isometric view for problem 174.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-048-panel-2.webp)

![Problem 174.4 Orthographic and isometric projections of a rectangular prism with a square recess and a square pyramid inside](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-049-panel-1.webp)

![Problem 174.5 Orthographic and isometric projections of a rectangular prism topped with a cube and a square pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-049-panel-2.webp)

![Orthographic and isometric projection of combination of solids 174.6](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-050-panel-1.webp)

![Orthographic and isometric projection of combination of solids 174.7](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-050-panel-2.webp)

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

![Orthographic projections of a cone placed on a hemisphere with a given values box](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-015-panel-2.webp)

![Engineering drawing showing orthographic projections and isometric view for problem 161.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-016-panel-1.webp)

![Engineering drawing showing orthographic projections and isometric view for problem 161.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-016-panel-2.webp)

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

![Orthographic projections of a cone placed on a cylinder with dimensions](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-009-panel-2.webp)

![Orthographic projections and isometric projection step for a cylindrical slab with a cone on top, labelled 158.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-010-panel-1.webp)

![Orthographic projections and isometric projection step for a cylindrical slab with a cone on top, labelled 158.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-010-panel-2.webp)

![Engineering drawing and isometric view for problem 158.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-011-panel-1.webp)

![Engineering drawing and isometric view for problem 158.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-011-panel-2.webp)

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

![Orthographic projections showing top view as a hexagon with a concentric circle and front view as a rectangle](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-012-panel-2.webp)

![Step 160.2 of technical drawing showing orthographic projections and isometric step](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-013-panel-1.webp)

![Step 160.3 of technical drawing showing orthographic projections and isometric step](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-013-panel-2.webp)

![Engineering drawing and isometric view for problem 160.4 showing a hexagonal slab with a cylindrical hole.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-014-panel-1.webp)

![Engineering drawing and isometric view for problem 160.5 showing a hexagonal slab with a cylindrical hole.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-014-panel-2.webp)

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

![Orthographic views of a square pyramid resting centrally on a hemisphere](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-017-panel-2.webp)

![Isometric projection step 162.2 of a square pyramid on a hemisphere](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-018-panel-1.webp)

![Isometric projection step 162.3 of a square pyramid on a hemisphere](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-018-panel-2.webp)

![Orthographic and isometric projections of a square pyramid resting on a hemisphere for problem 162.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-019-panel-1.webp)

![Orthographic and isometric projections of a square pyramid resting on a hemisphere for problem 162.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-019-panel-2.webp)

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

![Orthographic views of a cone on a rectangular block](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-020-panel-2.webp)

![Orthographic and isometric views showing step 163.2 for a rectangular block and cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-021-panel-1.webp)

![Orthographic and isometric views showing step 163.3 for a rectangular block and cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-021-panel-2.webp)

![Orthographic and isometric views for problem 163.4 showing a cone on a plane](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-022-panel-1.webp)

![Orthographic and isometric views for problem 163.5 showing a cone on a rectangular block](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-022-panel-2.webp)

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

![Orthographic views of a sphere resting on a square block with a given data box](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-023-panel-2.webp)

![Orthographic and isometric projections for step 205.2 showing a square prism with a given height and a sphere.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-024-panel-1.webp)

![Orthographic and isometric projections for step 205.3 showing a square prism with a sphere placed on top.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-024-panel-2.webp)

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

![Orthographic views and given/answer boxes for two spheres, sphere 1 diameter 50 and sphere 2 diameter 30](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-045-panel-2.webp)

![Engineering drawing step 171.2 showing two stacked spheres in orthographic projection](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-046-panel-1.webp)

![Engineering drawing step 171.3 showing two stacked spheres in orthographic projection](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-046-panel-2.webp)

**Answer:** The isometric projection consists of a 15 mm true-radius circle above a partially hidden 25 mm true-radius circle, spaced vertically by their isometric center heights.

#### Problem 164: Sphere resting on a cylindrical slab
**Given:** A cylindrical slab of base diameter 50 mm and height 20 mm supporting a central sphere of diameter 40 mm.
**Find:** The isometric projections of the combination.

1. Draw the orthographic front and top views of the 50 mm diameter, 20 mm high cylinder with the 40 mm sphere on top, enclosing the circular base in a square $1234$.
2. Construct the isometric bounding box of base 50 mm and height 20 mm, and use the four-center method on both top and bottom rhombuses to draw the cylindrical slab.
3. Join the midpoints of opposite sides of the top rhombus to find the center of the cylinder's top face.
4. Step vertically upward from the top face center by the sphere's isometric radius ($R_{\text{iso}}$ for $R = 20$ mm) to locate the sphere center.
5. Draw the sphere as a circle of true radius 20 mm around the sphere center, leaving the front lower arc of the cylinder visible and hiding the rear covered portion.

![Orthographic projection showing front and top views of a sphere on a cylindrical slab](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-025-panel-2.webp)

![Isometric and orthographic projection step 164.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-026-panel-1.webp)

![Isometric and orthographic projection step 164.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-026-panel-2.webp)

**Answer:** The isometric projection shows the 50 mm diameter, 20 mm high four-center cylindrical slab topped by a 20 mm true-radius circle centered at $R_{\text{iso}}$ above the top ellipse center.

#### Problem 216: Sphere resting on a hexagonal block
**Given:** A hexagonal block of base edge 30 mm and height 20 mm with a central sphere of radius 20 mm on top.
**Find:** The isometric view of the combination.

1. Draw the orthographic front and top views of the 30 mm edge hexagonal block (vertices $a$ through $f$) and the 40 mm diameter sphere, enclosing the hexagon in a rectangle $1234$.
2. Draw the isometric rectangle $1234$ at 30° axes and transfer the offsets of vertices $A, B, C, D, E, F$ from the orthographic top view to form the hexagonal base.
3. Project vertical edges of height 20 mm from each hexagonal corner and connect their tops to complete the hexagonal prism slab.
4. Draw the intersecting axis lines across the top face to locate the central contact point, then step vertically upward by the sphere's isometric radius ($R_{\text{iso}}$ for $R = 20$ mm).
5. Using that elevated point as center, draw a circle of true radius 20 mm for the sphere and darken the visible front edges of the hexagonal block.

![Orthographic projections showing front view and top view of a sphere resting on a hexagonal block](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-027-panel-2.webp)

![Solution step 216.1 - Part 1](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-028-panel-1.webp)

![Orthographic projections and isometric projection of a sphere on a hexagonal slab](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-029-panel-1.webp)

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

![Solution step 170.1 showing front view, top view, and given parameters for a frustum of a square pyramid surmounted by a sphere](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-043-panel-1.webp)

![Solution step 170.2 showing orthographic projections, given parameters, and an isometric base plate view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-043-panel-2.webp)

![Orthographic and isometric projections for problem 170.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-044-panel-1.webp)

![Orthographic and isometric projections for problem 170.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-044-panel-2.webp)

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

![Orthographic projections of a rivet consisting of a hemisphere over a cylinder](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-035-panel-2.webp)

![Engineering drawing and isometric projection for 166.2 showing a cylinder and hemisphere combination](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-036-panel-1.webp)

![Engineering drawing and isometric projection for 166.3 showing a cylinder and hemisphere combination](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-036-panel-2.webp)

![Orthographic views of a cylinder and hemisphere combination](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-037-panel-1.webp)

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

![Engineering drawing step 217.1 showing orthographic projections of a frustum with a hemisphere on top](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-033-panel-1.webp)

![Engineering drawing step 217.2 showing orthographic projections and an auxiliary or isometric construction view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-033-panel-2.webp)

![Engineering drawing step 217.3 showing orthogonal projections and isometric view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-034-panel-1.webp)

![Engineering drawing step 217.4 showing orthogonal projections and isometric view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-034-panel-2.webp)

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

![Orthographic projection of a hemisphere resting on a frustum of a cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-030-panel-1.webp)

![Orthographic projection with numbering for construction](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-030-panel-2.webp)

![Engineering drawing and isometric view for problem 165.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-031-panel-1.webp)

![Engineering drawing and isometric view for problem 165.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-031-panel-2.webp)

![Orthographic and isometric projections of a hemisphere on a frustum of a cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-032-panel-1.webp)

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

![Engineering drawing showing the orthographic projection of a frustum of a hexagonal prism with a sphere on top](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-038-panel-1.webp)

![Engineering drawing showing orthographic and isometric construction steps for a frustum of a hexagonal prism with a sphere](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-038-panel-2.webp)

![Engineering drawing showing orthographic projections and isometric view of a frustum of a hexagonal prism with a sphere on top for problem 167.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-039-panel-1.webp)

![Engineering drawing showing orthographic projections and isometric view of a frustum of a hexagonal prism with a sphere placed on top for problem 167.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-039-panel-2.webp)

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

![Orthographic views of a hemisphere on a frustum of a hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-040-panel-2.webp)

![Engineering drawing showing orthogonal projections and an isometric step for problem 199.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-041-panel-1.webp)

![Engineering drawing showing orthogonal projections and a complete isometric projection for problem 199.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-041-panel-2.webp)

![Orthographic and isometric views of a hemisphere on a frustum of a hexagonal prism, with given dimensions.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-042-panel-1.webp)

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

![Orthographic views and given dimensions of a sphere on a frustum of a cone on a cylinder](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-051-panel-2.webp)

![Engineering drawing showing orthographic projections and isometric construction step 175.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-052-panel-1.webp)

![Engineering drawing showing orthographic projections and isometric construction step 175.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-052-panel-2.webp)

![Orthographic projection showing front view and top view of a combination of a cylinder, frustum of cone, and sphere.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-053-panel-1.webp)

![Orthographic projection showing front view and top view for problem 175.6.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-053-panel-2.webp)

![Orthographic projections of a cylinder, frustum of cone, and sphere](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-4/assets/page-054-panel-1.webp)

**Answer:** Isometric projection of the coaxial stack: a 50 mm by 20 mm base cylinder, a 40 mm to 30 mm by 15 mm conical frustum, and a 20 mm top sphere.


<!-- page 10 | Computer Aided Drawing -->

## Computer Aided Drawing (CAD)

This section supports the internal evaluation portion of GMEST103 Module 4. The end-semester drawing questions focus on the theory and manual drawing topics listed for the examination; CAD activities are for internal evaluation.

### Introduction and role of CAD

Computer Aided Drawing (CAD) uses software to create, edit, store, and communicate technical drawings. In product development, CAD helps engineers turn a design idea into a dimensioned drawing, revise alternatives quickly, reuse standard components, and share consistent drawing data with manufacturing and inspection teams. A CAD drawing supports engineering decisions; it does not replace checking dimensions, tolerances, material requirements, or applicable drawing standards.

### Advantages of CAD

- **Accuracy:** coordinates, constraints, and snapping help place geometry precisely.
- **Efficient revision:** dimensions and geometry can be edited without redrawing the whole sheet.
- **Reuse:** symbols, templates, blocks, and layers support consistent drawings.
- **Clear communication:** line weights, linetypes, text, and dimensions can be controlled systematically.
- **Storage and exchange:** files can be saved, copied, printed, and shared in suitable formats.

### Creating a dimensioned two-dimensional drawing

A general workflow in suitable CAD software is:

1. **Set up the drawing:** choose units, drawing limits or sheet size, scale, and a suitable template.
2. **Organize the content:** create layers for visible outlines, hidden details, centre lines, construction geometry, dimensions, and text. Assign appropriate line types and weights.
3. **Construct the geometry:** use line, circle, arc, rectangle, and polygon tools. Enter coordinates or dimensions; use object snaps and geometric constraints to maintain alignment and size.
4. **Check the views:** verify projection relationships, hidden lines, centre lines, and consistency between views. Remove construction geometry that should not appear in the final drawing.
5. **Add dimensions:** select a consistent dimension style, units, precision, arrowheads, text height, and extension-line settings. Place dimensions so that they are legible and do not repeat the same measurement unnecessarily.
6. **Review and output:** inspect the drawing at its intended print scale, check units and dimension values, set the plot area and line weights, then save the editable file and export or print the required sheet.

The exact commands differ across CAD packages. The deliverable is a legible, accurately dimensioned 2D drawing prepared with suitable software.
