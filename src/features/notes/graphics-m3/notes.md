<!-- page 1 | Start here -->

## Engineering Graphics: Sections of Solids and Development of Surfaces

By completing this notebook, you will be able to construct orthographic sectional views and determine the true shapes of cross-sections for polyhedra and solids of revolution cut by various planes. You will also learn how to unfold three-dimensional truncated solids into flat patterns (surface developments) and determine the shortest paths across curved and faceted surfaces.

**Before you start:** Orthographic projection fundamentals (First-Angle Projection, XY reference line, Front View, Top View, Side View); Projections of simple solids (prisms, pyramids, cylinders, cones, cubes, tetrahedra) resting on the Horizontal Plane (HP); Basic geometric constructions (regular polygons, dividing circles into equal sectors, drawing parallel and perpendicular lines).

### Your path through this module

1. **Introduction to Sections of Solids and Cutting Planes**: A cutting plane appears as a single straight edge (trace) in the view corresponding to the reference plane it is perpendicular to, allowing us to see exactly where it slices the solid.
2. **Finding Section Points and Projecting True Shapes**: By setting up an auxiliary reference line parallel to the cutting plane trace and transferring distances from the opposite view, we view the cut surface head-on to reveal its True Shape.
3. **Conic sections on cones**: The cutting plane orientation determines whether a cone section is an ellipse, parabola, or hyperbola.
4. **Principles of Surface Development: Parallel-Line Method**: Unrolling a prism or cylinder creates a flat rectangle whose width equals the base perimeter and where vertical edges remain parallel, allowing cut heights to be projected directly across from the Front View.
5. **Radial-Line Development and Shortest Surface Paths**: Tapering solids unfold around their apex using radial arcs of true slant length, and any shortest path wrapped around a 3D surface becomes a simple straight line when drawn on the unfolded development.
6. **Sections of Prisms and Pyramids by Auxiliary Inclined Planes (AIP)**: When an inclined plane cuts a prism or pyramid, the cut appears as a straight line in the Front View, and projecting its intersections straight down to the Top View reveals the polygonal boundary of the cut.
7. **Sections of Cylinders and Cones by Auxiliary Inclined Planes (AIP)**: Because cylinders and cones have no sharp vertical edges, we divide their circular bases into equal sectors to create artificial generator lines that act just like pyramid edges during projection.
8. **Sections by Auxiliary Vertical Planes (AVP) and Profile Planes**: When a cutting plane is perpendicular to the Horizontal Plane, its trace appears in the Top View, and projecting upward to the Front View reveals the cut face—including hyperbolic curves on cones.
9. **Development of Prisms and Cylinders (Parallel-Line Method)**: Because every vertical edge or generator on a prism or cylinder is parallel to the Vertical Plane, its true cut height in the Front View transfers horizontally onto the unfolded rectangular stretch-out.
10. **Development of Pyramids, Cones, and Shortest-Path Applications (Radial-Line Method)**: On pyramids and cones, cut heights on interior slant lines are foreshortened in the Front View and must first be projected horizontally to the outer true-length boundary before being marked on the radial development.

<!-- page 2 | Introduction to Sections of Solids and Cutting Planes -->

## Introduction to Sections of Solids and Cutting Planes

You already know how to draw the front and top views of intact 3D solids resting on the Horizontal Plane (HP). In this lesson, you will learn how to slice through a solid with an imaginary flat sheet and represent the newly exposed inner surface on your drawing.

Imagine slicing an apple in half to check if the core is healthy. In engineering, parts often have complex hollow interiors that look like a confusing tangle of dashed hidden lines on a drawing. To see inside clearly, we pass an imaginary flat blade called a **cutting plane** (or **section plane**) through the object and mentally remove the piece between the blade and the observer. The newly exposed flat surface is called the **section**.

Because the cutting plane is always perpendicular to at least one reference plane, it projects as a single straight line—called a **trace**—on that plane. We draw this trace as a thin chain line (alternating long dashes and dots) that is thickened at both ends. Depending on how the blade is tilted, we get four main types of cutting planes:

| Cutting Plane Type | Orientation | Appears as a straight line (Trace) in... |
| :--- | :--- | :--- |
| Horizontal Plane | Parallel to HP, $\perp$ to VP | Front View (Vertical Trace, $VT$, parallel to $XY$) |
| Auxiliary Inclined Plane (AIP) | Inclined to HP, $\perp$ to VP | Front View ($VT$ inclined to $XY$) |
| Auxiliary Vertical Plane (AVP) | Inclined to VP, $\perp$ to HP | Top View (Horizontal Trace, $HT$, inclined to $XY$) |
| Profile Cutting Plane | $\perp$ to both HP and VP | Both Front and Top Views ($VT$ and $HT$ $\perp$ to $XY$) |

When we look at the remaining part of the solid in our standard views, we get a **Sectional Top View** (Plan) or a **Sectional Front View** (Elevation). To show which area was physically touched by the blade, we fill the cut surface with **section hatching**: thin, parallel continuous lines drawn at $45^\circ$ to the reference line $XY$, spaced evenly about 2 mm to 3 mm apart. If the cutting plane is tilted (like an AIP or AVP), the standard view looks at the cut surface at an angle, making it look foreshortened. We call this foreshortened area the **apparent section**, whereas looking directly perpendicular at the cut reveals its **True Shape**.

### Worked example

A cube of 40 mm side rests on the HP with its vertical faces equally inclined to the Vertical Plane (VP). Set up the cutting plane line for an AIP inclined at $30^\circ$ to the HP that bisects the vertical axis.

1. **Draw the intact views:** Draw the reference line $XY$. Below $XY$, draw a 40 mm square tilted at $45^\circ$ for the top view. Project upwards above $XY$ to draw the 40 mm high rectangular front view, including the central vertical axis.
2. **Locate the midpoint of the axis:** Measure 20 mm up from the base along the axis in the front view and mark point $M$. We do this because the plane must bisect the axis.
3. **Draw the Vertical Trace ($VT$):** Through point $M$, draw a line inclined at $30^\circ$ to $XY$ using a thin chain line thickened at the ends. We draw it in the front view because an AIP is perpendicular to the VP, so its edge view appears entirely on the front view.
4. **Darken the retained portion:** Darken the outline of the front view below the $VT$ line and leave the top part faint, showing the top piece is removed.

### Remember
- A cutting plane projects as a single straight line (trace) in the view corresponding to the reference plane it is perpendicular to.
- Always fill the cut area in a sectional view with thin, equally spaced hatching lines at $45^\circ$ to $XY$.
- Inclined cutting planes (AIP and AVP) produce a foreshortened apparent section in the standard views, not the True Shape.

<!-- page 3 | Finding Section Points and Projecting True Shapes -->

## Finding Section Points and Projecting True Shapes

Now that you can represent a cutting plane as a straight line trace, you need a systematic method to project the cut points into the other views. This lesson shows you how to map the cut surface and find the exact size of the sliced face.

Imagine slicing a block of cheese at an angle. To draw the cut face, we first find its corners. For prisms and pyramids, we use the **edge method**: wherever the cutting plane trace crosses a solid's edge in one view, we mark a **section point** and project it straight across the $XY$ line to the same edge in the other view. What about smooth cylinders and cones that have no corners? We create artificial edges called **generators**—imaginary straight lines drawn along the curved surface by dividing the circular base into 8 or 12 equal parts—and project points onto them the exact same way.

Sometimes a pyramid's slant edge or a cone's generator stands perpendicular to the $XY$ line in the top view. We call this a **profile line**. Because both the line and your projector run vertically on the paper, a simple vertical projection cannot tell you where the point lands. To fix this, we use the **rotation method**: in the front view, move the section point horizontally onto an outside slant edge (which shows true length), project it down to that outer edge in the top view, and swing it back to the profile line with your compass centered at the apex.

When a cutting plane is tilted, the cut surface looks foreshortened in the standard views, just like a tilted coin looks like an oval. To see the **True Shape**—the actual, un-distorted size of the cut face—we must look directly perpendicular to the cutting plane. On your drawing, draw a new **auxiliary reference line** labeled $x_1\text{-}y_1$ parallel to the cutting plane trace. From each section point on the trace, draw projectors perpendicular to $x_1\text{-}y_1$. Finally, use your compass to measure the perpendicular distance of each point from $XY$ in the opposite view, and step that exact distance off from $x_1\text{-}y_1$ along the new projectors.

### Worked example
A square pyramid (base 40 mm, axis 60 mm) rests on its base on the HP with base edges equally inclined to the VP. A cutting plane inclined at 45° to the HP bisects the axis. Find the sectional top view and True Shape.

1. **Draw the basic views:** Draw a 40 mm square in the top view with corners pointing up, down, left, and right. Connect corners to the center $o$ to represent slant edges $oa, ob, oc, od$. Project up to draw the 60 mm tall triangle in the front view.
2. **Mark the cut:** Draw the cutting plane trace $V.T.$ at 45° to $XY$ passing through the midpoint of the axis (30 mm above $XY$). Mark where $V.T.$ cuts the outer slant edges $o'a'$ and $o'c'$ as $1'$ and $3'$, and the middle vertical slant edges $o'b'$ and $o'd'$ as $2'$ and $4'$.
3. **Project to top view:** Project $1'$ and $3'$ straight down to $oa$ and $oc$ to get points $1$ and $3$. Since $ob$ and $od$ are profile lines, move $2'$ and $4'$ horizontally to the outer edge $o'c'$, project down to $oc$, and use a compass centered at $o$ to swing the point onto $ob$ and $od$ to locate $2$ and $4$. Join $1\text{-}2\text{-}3\text{-}4$ and hatch at 45°.
4. **Project the True Shape:** Draw reference line $x_1\text{-}y_1$ parallel to $V.T.$ Project lines from $1', 2', 3', 4'$ perpendicular to $x_1\text{-}y_1$. Measure the distances of $1, 2, 3, 4$ from $XY$ in the top view, and transfer them from $x_1\text{-}y_1$ along the matching projectors. Connect and hatch to reveal the True Shape.

### Remember
- Use real edges for prisms and pyramids; create 8 or 12 imaginary generators for cylinders and cones.
- When a slant line is perpendicular to $XY$, shift the cut point horizontally to a true-length outer edge before projecting and swinging it back.
- Always measure from the old $XY$ line and step off from the new $x_1\text{-}y_1$ line to plot the True Shape.

<!-- page 4 | Conic Sections on a Cone -->

## Conic Sections on a Cone

When a plane cuts a cone, the section curve depends on the plane's angle to the cone's extreme generator. This classification helps you anticipate the true shape before constructing the projected views.

| Section curve | Plane orientation relative to an extreme generator | Result |
|---|---|---|
| **Ellipse** | The plane cuts across all generators on one nappe without being parallel to a generator. | A closed curve. A circle is the special case of a plane parallel to the cone's base. |
| **Parabola** | The plane is parallel to an extreme generator. | An open curve. |
| **Hyperbola** | The plane intersects both nappes of a double cone. | Two open branches. |

For engineering drawing, construct the section points from the given cutting plane using the applicable projection method in the following lessons. Do not start from a specified true shape to work backwards to a cutting plane; that reverse-section problem type is outside the KTU 2024 GMEST103 examination scope.

### Remember
- The visible section in a standard view may be foreshortened; use an auxiliary view to show its true shape.
- Divide a circular base into equal parts and project the corresponding generators when constructing sections of cones and cylinders.

<!-- page 5 | Principles of Surface Development: Parallel-Line Method -->

## Principles of Surface Development: Parallel-Line Method
Having mastered how to slice 3D solids and view their cross-sections, we now learn how to unfold the remaining outer shell of prisms and cylinders into a flat sheet. This lets you design exact flat patterns for sheet-metal parts like ducts, pipes, and boxes.

Imagine cutting open a cardboard cereal box or peeling the paper label off a soup can and laying it flat on your desk. In engineering graphics, this unfolded flat pattern is called a **development**. Specifically, we usually draw the **lateral surface development**, which is the outer wrap of the solid, leaving out the top and bottom bases. Every line on a development must show its true length so a fabricator can cut the exact shape from a flat metal sheet and fold or roll it into the 3D object.

Prisms and cylinders have the exact same cross-section from bottom to top, meaning their vertical edges are all parallel to one another. Because of this, we unfold them using the **parallel-line method**. We start by drawing a long horizontal baseline, called the **stretch-out line**, right next to the Front View's base. The total length of this line is the **stretch-out length** ($P$), which equals the perimeter of the solid's base. On your drawing, you step off the true widths of each prism face ($P = n \times B$ for $n$ equal sides of width $B$) or calculate the circumference of a cylinder ($P = \pi D$ for diameter $D$).

Along the stretch-out line, we draw perpendicular vertical lines at each division point. For a prism, these are **fold lines** representing the sharp vertical corners; for a cylinder, we divide the circle into 8 or 12 equal parts to create imaginary vertical lines called **generators**. When a prism or cylinder stands upright on the Horizontal Plane, its vertical edges are parallel to the Vertical Plane, so the Front View already shows their true heights. This means we can project any cut point from a cutting plane trace in the Front View directly across—horizontally—to the matching vertical line on the development.

This flat unrolling also makes complex 3D curves remarkably simple. Think of a spiral staircase or a screw thread wrapping around a cylinder at a constant upward slope; this 3D curve is called a **helix**, and the vertical height it climbs in one full turn is its **pitch**. Because a helix rises at a steady rate as it wraps around the circumference, unfolding the cylinder turns the curved helix into a simple straight diagonal line drawn across the development, rising by one pitch for every full stretch-out length.

### Worked example
Let us develop the lateral surface of a vertical square prism (base $30\text{ mm}$, height $60\text{ mm}$) resting on the Horizontal Plane with base edges equally inclined to the Vertical Plane, cut by a plane at $45^\circ$ to the Horizontal Plane bisecting its axis.

1. **Draw the views and cut:** Draw the Top View as a $30\text{ mm}$ square rotated at $45^\circ$, labeling corners $a, b, c, d$. Project up to draw the Front View ($60\text{ mm}$ tall) and draw the $45^\circ$ cutting plane line through the axis midpoint ($30\text{ mm}$ high), marking cut points $1', 2', 3', 4'$ on the vertical edges.
2. **Lay out the stretch-out line:** From the base of the Front View, extend a horizontal stretch-out line to the right of length $P = 4 \times 30\text{ mm} = 120\text{ mm}$ so the pattern unfolds right alongside the heights.
3. **Draw the fold lines:** Step off four $30\text{ mm}$ segments along the stretch-out line, label them $A, B, C, D, A$, and draw vertical fold lines up from each point to represent the four corners opening and closing at seam $A$.
4. **Transfer the cut heights:** Project horizontal lines from cut points $1', 2', 3', 4'$ in the Front View straight across to meet fold lines $A, B, C, D, A$ at points $1, 2, 3, 4, 1$, because horizontal projection preserves true vertical heights.
5. **Complete the pattern:** Connect $1\text{--}2\text{--}3\text{--}4\text{--}1$ with straight dark lines, and darken the base and outer vertical seams to finish the flat sheet-metal shape.

### Remember
- The stretch-out length always equals the true perimeter of the base ($n \times B$ for regular prisms, $\pi D$ for cylinders).
- Connect cut points with straight lines for prisms, but use a smooth freehand curve for cylinders.
- A cylindrical helix always unfolds into a straight diagonal line on the development.

<!-- page 6 | Radial-Line Development and Shortest Surface Paths -->

## Radial-Line Development and Shortest Surface Paths

In the previous lesson, you unrolled straight-sided prisms and cylinders into flat rectangles using parallel lines. Now, you will unfold tapering solids like pyramids and cones around their tips, and use these flat patterns to find the shortest path across a three-dimensional surface.

Imagine rolling an ice cream cone covered in wet ink across a flat table. Because the tip stays pinned in one spot while the circular base rolls out, the cone leaves behind a fan-shaped wedge, or sector, of a circle. This is the **radial-line method**, where all fold lines or generators radiate outward from a single point called the **apex**. To draw this fan, you first need the **true slant length** ($L$), which is the actual distance from the apex to a base corner or rim. On a drawing, a slant edge only shows its true length in the Front View if its Top View is parallel to the $XY$ reference line. If none of a pyramid's slant edges are parallel to $XY$, you must rotate one edge in the Top View until it is parallel to $XY$, and then project it up to the Front View to reveal the true slant length $L$.

Once you have the true slant length $L$, you swing an arc of radius $L$ to start the development. For a pyramid, you step off the true base edge lengths as straight chords along this arc and connect them to create flat triangles. For a cone, the curved base unfolds into a smooth circular arc whose length equals the base circumference ($2\pi r$). This creates a sector with a **subtended angle** ($\theta$) given by:
$$\theta = \frac{r}{L} \times 360^\circ$$
where $r$ is the base radius and $L$ is the true slant generator length. If a cutting plane slices the pyramid or cone, you cannot transfer cut distances directly from interior edges in the Front View because those edges lean toward or away from you and appear foreshortened. Instead, you must project every cut point horizontally in the Front View over to the extreme true-length boundary edge, measure that true distance from the apex, and swing it onto the matching radial line in the development.

Suppose an ant wants to walk from a point on the base of a cone, all the way around its curved side, and return to the start by the shortest possible route. This shortest surface path, called a **geodesic**, looks like a complex curve in the Front and Top Views. However, because flattening a surface does not stretch or shrink it, the shortest path between any two points on a solid is simply a straight line drawn between those two points on its flat development. To show how this path looks in 3D, you mark where the straight line crosses each radial line on the development, swing those true distances back to the true-length edge in the Front View, and project them horizontally back to their respective generators.

### Worked example

Find the development and the shortest path around a cone of base radius $r = 30$ mm and true slant length $L = 90$ mm, starting and ending at the same base point $A$.

1. **Calculate the sector angle:** Use the formula $\theta = (30 / 90) \times 360^\circ = 120^\circ$. We need this angle to make the unfolded arc length equal the base circumference.
2. **Draw the flat cone:** Pick an apex $O$, draw two radial lines of length $90$ mm at $120^\circ$ to each other, and swing an arc between their ends. Label the two outer base corners $A$ and $A_1$, since they meet when the cone is rolled up.
3. **Draw the shortest path:** Use a straightedge to draw a straight line directly from $A$ to $A_1$ across the sector. Because a straight line is the shortest distance on a flat sheet, this chord is the exact shortest path the ant can take around the cone.

### Remember

- Always measure along a true-length slant edge (parallel to $XY$ in the Top View) before swinging radial arcs.
- Project interior cut points horizontally to the extreme true-length boundary edge in the Front View before transferring them to the development.
- The shortest path between two points on any developable surface is always a straight line on its flat development.

<!-- page 7 | Sections of Prisms and Pyramids by Auxiliary Inclined Planes (AIP) -->

## Sections of Prisms and Pyramids by Auxiliary Inclined Planes (AIP)

With the foundational theory complete, we begin our practice with the most straightforward sectioning problems: slicing flat-faced prisms and pyramids with a plane inclined to the horizontal. When an inclined plane cuts a prism or pyramid, the cut appears as a straight line in the Front View, and projecting its intersections straight down to the Top View reveals the polygonal boundary of the cut.

### The idea

An **Auxiliary Inclined Plane (AIP)** is a cutting plane perpendicular to the Vertical Plane (VP) and inclined to the Horizontal Plane (HP). Because it stands perpendicular to the VP, the entire plane collapses into a single straight edge—its **Vertical Trace (VT)**—in the Front View. Every point where this trace crosses an edge of the solid is a cut point. Since the solid has flat faces bounded by straight edges, connecting the projected cut points in order produces a closed polygon.

How you project those points to the Top View depends on the type of edge the plane crosses. In a vertical prism, the lateral edges stand perpendicular to the HP, so their Top Views collapse into single corner points on the base perimeter; any cut along a vertical edge lands directly on that corner in the Top View. If the cutting plane climbs high enough to exit through the flat top face, it slices across the horizontal top edges, and those intersections project straight down onto the corresponding edges in the Top View. In a pyramid, the **slant edges** slope inward from the base corners to the apex, so they appear as distinct radiating lines in the Top View; you project each cut point from the Front View straight down until it hits its matching slant edge line in the Top View. Similarly, if a steep plane slices right through the base, the intersection projects straight down to the base edges.

In the **sectional top view**, the cut surface appears foreshortened because the cutting plane slopes away from the horizontal. To find the **True Shape** of the section, we must look at the cut face head-on. Set up an auxiliary reference line $x_1y_1$ parallel to the cutting plane trace $VT$, draw projectors perpendicular to $VT$ from each cut point in the Front View, and transfer the depth of each point (its distance from the main reference line $xy$ in the Top View) onto its matching projector.

### Worked example

#### Problem 98 (86): Square prism cut by an inclined plane

**Given:** A square prism of base edge 40 mm and height 70 mm resting on HP on an end with rectangular faces equally inclined to VP, cut by an AIP inclined at 55° to HP meeting the axis 15 mm from the top.
**Find:** The elevation, sectional plan, and true shape of the section.

1. Draw the reference line $y$-$y$ and construct the Top View as a 40 mm square $a(e)$-$b(f)$-$c(g)$-$d(h)$ with its sides inclined at 45° to $y$-$y$ so the vertical faces are equally inclined to VP.
2. Project the corners up to draw the Front View as a rectangle of height 70 mm resting on $y$-$y$, with top corners $a'$, $b'(d')$, $c'$ and base corners $e'$, $f'(h')$, $g'$.

![Step 98.1: Projections of square prism resting on HP with faces equally inclined to VP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-002-panel-2.webp)

3. Mark a point on the central axis $b'f'$ at 15 mm below the top face and draw the cutting plane line $V$-$T$ through it at 55° to $y$-$y$; mark intersection $1'$ on vertical edge $a'e'$, $2'$ on vertical edges $b'f'$ and $d'h'$, and $3'$ where $V$-$T$ exits through the top face between $b'(d')$ and $c'$.

![Section of a square prism - cutting plane representation (Step 98.2)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-003-panel-1.webp)

4. Project the cut points down to the Top View: $1'$ lands directly on corner $a(e)$, $2'$ lands on corners $b(f)$ and $d(h)$ (marked $2$ and $2_1$), and $3'$ projects down to top edges $b$-$c$ and $d$-$c$ (marked $3$ and $3_1$); hatch the polygon $1$-$2$-$3$-$3_1$-$2_1$ and darken the retained lower boundary in the Front View.

![Sectional top view and front view of the cut square prism (Step 98.3)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-003-panel-2.webp)

5. Draw projectors perpendicular to $V$-$T$ from $1'$, $2'$, and $3'$, transfer each point's distance from $y$-$y$ in the Top View to locate $1$, $2$, $3$, $3_1$, and $2_1$, and join and hatch them to complete the True Shape.

![Sectional views and true shape of section of a square prism cut by an inclined cutting plane](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-004-panel-1.webp)

**Answer:** Elevation, sectional plan (pentagonal cut surface $1$-$2$-$3$-$3_1$-$2_1$), and true shape constructed as shown.

### More problems

#### Problem 86 (87): Pentagonal pyramid bisected by an inclined plane

**Given:** A pentagonal pyramid of base side 30 mm and height 60 mm resting on HP with one base edge perpendicular to VP, cut by an AIP at 45° to HP bisecting the axis.
**Find:** The front view, sectional top view, true shape of the section, and true height of the section.

1. Draw the Top View as a regular pentagon $a$-$b$-$c$-$d$-$e$ of side 30 mm with left edge $a$-$e$ perpendicular to $x$-$y$ and slant edges meeting at apex $o$, then project up to form the Front View of height 60 mm with apex $o'$.

![Projection of a pentagonal pyramid (Step 86.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-005-panel-1.webp)

2. Draw the cutting plane $V$-$T$ at 45° to $x$-$y$ bisecting the axis at 30 mm above the base; mark intersections $1'$ on slant edges $o'a'(e')$, $2'$ on $o'b'(d')$, and $3'$ on $o'c'$.

![Section plane cutting pentagonal pyramid (Step 86.2)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-005-panel-2.webp)

> **Watch out.** In the drawing above, the 30 mm height is measured at the right slant edge $o'c'$ rather than at the central axis.

3. Project $1'$, $2'$, and $3'$ straight down to their corresponding slant edges in the Top View to mark $1$ on $oa$, $1_1$ on $oe$, $2$ on $ob$, $2_1$ on $od$, and $3$ on $oc$, then join and hatch polygon $1$-$2$-$3$-$2_1$-$1_1$ and darken the retained lower edges.

![Orthographic projections and sectional top view of a cut pentagonal pyramid (Step 86.3)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-006-panel-1.webp)

4. Project lines perpendicular to $V$-$T$ from $1'$, $2'$, and $3'$, transfer the distances of $1$, $2$, $3$, $2_1$, and $1_1$ from $x$-$y$ in the Top View to plot and hatch the True Shape, and measure its height along the center line from edge $1$-$1_1$ to vertex $3$.

![True shape of section of the pentagonal pyramid (Step 86.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-006-panel-2.webp)

**Answer:** True height (width) of the section $W =$ 36 mm.

#### Problem 91 (88): Hexagonal pyramid cut by an inclined plane

**Given:** A hexagonal pyramid of base side 30 mm and axis 60 mm resting on HP with two base edges parallel to VP, cut by an AIP at 30° to HP meeting the axis 25 mm from the vertex.
**Find:** The elevation, sectional plan, and true shape of the section.

1. Draw the Top View as a regular hexagon $a$-$b$-$c$-$d$-$e$-$f$ of side 30 mm with edges $b$-$c$ and $f$-$e$ parallel to $x$-$y$ and slant edges joined to center $o$, then project up the Front View with apex $o'$ at 60 mm above $x$-$y$.

![Projections of a hexagonal pyramid resting on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-007-panel-2.webp)

2. Draw the cutting plane $V$-$T$ inclined at 30° to $x$-$y$ passing 25 mm above the base, and mark cut points $1'$ on $o'a'$, $2'$ on $o'b'(f')$, $3'$ on $o'c'(e')$, and $4'$ on $o'd'$.

![Step 91.2: Front view and top view of hexagonal pyramid showing cutting plane location](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-008-panel-1.webp)

> **Watch out.** The problem text states 25 mm from the vertex, but the summary and construction place the plane 25 mm above the base at the right slant edge.

3. Project $1'$, $2'$, $3'$, and $4'$ straight down to the matching slant edges in the Top View to get points $1$, $2$, $3$, $4$, $3_1$, and $2_1$; connect and hatch the hexagon and darken the retained solid.

![Step 91.3: Final sectional top view and front view of the truncated hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-008-panel-2.webp)

4. Draw projectors perpendicular to $V$-$T$ from $1'$, $2'$, $3'$, and $4'$, transfer each point's distance from $x$-$y$ in the Top View, and join and hatch $1$-$2$-$3$-$4$-$3_1$-$2_1$ to get the True Shape.

![Orthographic projection and true shape of section of a hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-009-panel-1.webp)

**Answer:** Elevation, sectional plan, and hexagonal true shape $1$-$2$-$3$-$4$-$3_1$-$2_1$ constructed as shown.

#### Problem 87 (89): Pentagonal pyramid cut at 60 degrees

**Given:** A pentagonal pyramid of 30 mm side and height 60 mm resting on HP with one base edge perpendicular to VP, cut by an AIP at 60° to HP meeting the axis 15 mm from the base.
**Find:** The front view, sectional top view, true shape of the section, and true height of the section.

1. Construct the Top View as a regular pentagon $a$-$b$-$c$-$d$-$e$ of side 30 mm with edge $e$-$a$ perpendicular to $x$-$y$ and slant edges meeting at $o$, then project the Front View with apex $o'$ at height 60 mm.

![Step 87.1: Orthographic projections of a pentagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-010-panel-1.webp)

2. Draw the cutting plane $V$-$T$ at 60° to $x$-$y$ passing 15 mm above the base at the right slant edge $o'c'$, and mark intersections $1'$ on $o'a'(e')$, $2'$ on $o'b'(d')$, and $3'$ on $o'c'$.

![Step 87.2: Pentagonal pyramid cut by a section plane inclined at 60 degrees](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-010-panel-2.webp)

3. Project $1'$, $2'$, and $3'$ straight down to the Top View slant edges to locate $1$ on $oa$, $1_1$ on $oe$, $2$ on $ob$, $2_1$ on $od$, and $3$ on $oc$; join and hatch $1$-$2$-$3$-$2_1$-$1_1$ and darken the retained portion.

![Section of a pentagonal pyramid - Step 87.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-011-panel-1.webp)

4. Project perpendiculars from $1'$, $2'$, and $3'$ across $V$-$T$, transfer the Top View distances from $x$-$y$ to plot and hatch the True Shape $1$-$2$-$3$-$2_1$-$1_1$, and measure its height from edge $1$-$1_1$ to vertex $3$.

![True shape of section of a pentagonal pyramid - Step 87.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-011-panel-2.webp)

**Answer:** True height (width) of the section $W =$ 43 mm.

<!-- page 8 | Sections of Cylinders and Cones by Auxiliary Inclined Planes (AIP) -->

## Sections of Cylinders and Cones by Auxiliary Inclined Planes (AIP)
Now that you can section flat-edged polyhedra with an inclined plane, we apply the exact same projection method to curved solids by introducing imaginary generator lines. Because cylinders and cones have no sharp vertical edges, we divide their circular bases into equal sectors to create artificial generator lines that act just like prism or pyramid edges during projection.

### The idea
A prism or pyramid has distinct straight edges where the cutting plane leaves clear intersection points. A cylinder or cone has a smooth, continuous curved surface with no edges to project. To locate enough section points to draw a smooth curve, we divide the circular base in the Top View into 8 or 12 equal sectors. The straight lines connecting these base points to the top face (on a cylinder) or to the apex (on a cone) are called **generators**. Once drawn in both views, generators work just like the lateral edges of a prism or pyramid.

When an Auxiliary Inclined Plane (AIP) cuts across all generators of a vertical cylinder, the Top View of the cut remains a full circle, while the True Shape stretches into an **ellipse**. If the cutting plane is steep enough to slice through the flat top or bottom face of the cylinder, that straight cut becomes a chord across the curve, producing a **truncated ellipse**.

On a cone, the shape of the section depends on the cutting plane angle relative to the cone's extreme outline (its extreme generator). When the cutting plane angle is less than the generator angle, it cuts across every generator and forms a closed **ellipse**. When the cutting plane is parallel to an extreme generator, it never meets that generator and exits through the base, producing an open, symmetric curve called a **parabola**. If a section point lies on the vertical center generator in the Front View, you cannot project it straight down to the Top View; instead, rotate it horizontally to the extreme generator, project down to the horizontal centerline, and swing an arc to the vertical centerline.

### Worked example
**Given:** A cylinder of diameter 40 mm and height 60 mm rests on HP on its base, cut by a 30° AIP bisecting the axis. **Find:** The projections of the cut solid and the true shape of the section.

1. Draw the Top View as a circle of diameter 40 mm, and divide it into 8 equal parts to create imaginary vertical generators labeled $a(i)$ through $h(p)$ so we have reference lines to locate points on the smooth surface.
2. Project the base points up to the $xy$ line and draw the Front View as a 40 mm by 60 mm rectangle with vertical generator lines.

![Projections of a cylinder resting on its base (Step 114.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-012-panel-2.webp)

3. Mark the midpoint of the axis at 30 mm height, and draw the cutting plane line $V$-$T$ through it inclined at 30° to $xy$.
4. Label the intersection points $1'$ to $8'$ where the cutting plane crosses each vertical generator in the Front View.

![Projection of cylinder cut by an inclined section plane (Step 114.2)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-013-panel-1.webp)

5. Darken the retained lower boundary of the Front View, and hatch the entire Top View circle because the cutting plane slices across the full width of the vertical cylinder.

![Sectional top view and front view of the cut cylinder (Step 114.3)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-013-panel-2.webp)

6. Draw an auxiliary reference line $x_1y_1$ parallel to the cutting plane $V$-$T$, and project perpendicular lines from points $1'$ through $8'$ across $x_1y_1$.
7. Measure the distance of each generator point from $xy$ in the Top View, transfer those distances from $x_1y_1$ along the matching projectors, and join the points with a smooth curve to reveal the elliptical True Shape.

![Projections and true shape of section of a cylinder cut by an inclined plane (step 114.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-014-panel-1.webp)

**Answer:** The sectional Top View is a circle of diameter 40 mm, and the True Shape is an ellipse with a minor axis of 40 mm and a major axis equal to the cut length $1'$-$5'$.

### More problems

#### Problem 115: Cylinder cut through top face and generator
**Given:** A cylinder of diameter 40 mm and height 60 mm on HP, cut by a 50° AIP meeting the axis 45 mm above the base. **Find:** The sectional views and true shape of the section.

1. Draw the 40 mm diameter Top View circle divided into 8 generators, and project the 60 mm high Front View.

![Step 115.1: Projections of a cylinder resting on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-015-panel-1.webp)

2. Draw the 50° cutting plane $V$-$T$ through the axis at 45 mm height, cutting the top face at $4'$ and generators at $1'$ to $7'$.

![Step 115.2: Cylinder cut by an inclined section plane](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-015-panel-2.webp)

3. Project the top face cut point $4'$ straight down to the Top View circle to mark the boundary chord, and hatch the cut area to its right.

![Orthographic projections of a truncated cylinder (Step 115.3)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-016-panel-1.webp)

4. Project perpendiculars from $1'$ through $7'$ across a parallel reference line $x_1y_1$, transfer Top View distances from $xy$, and join into a smooth truncated ellipse.

![Auxiliary view showing true shape of section of a truncated cylinder (Step 115.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-016-panel-2.webp)

**Answer:** The True Shape is a truncated ellipse bounded by a flat chord where the plane exits the top face.

#### Problem 117: Cone cut by an AIP to form an ellipse
**Given:** A cone of base diameter 50 mm and height 60 mm on HP, cut by a 50° AIP passing through the extreme left base point. **Find:** The sectional views and true shape of the section.

1. Draw the 50 mm diameter Top View circle with 8 radial generators connected to center $o$, and project the 60 mm high triangular Front View.

![Projections of a cone resting on HP (Step 117.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-017-panel-2.webp)

2. Draw the cutting plane at 50° to $xy$ starting from the extreme left base point $a'$, and mark intersection points $1'$ through $8'$ on the generators.

![Step 117.2: Cone with section plane inclined at 50 degrees](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-018-panel-1.webp)

3. Project points down to their matching Top View radial generators; for points $3'$ and $7'$ on the vertical center generator, rotate horizontally to the extreme generator first, drop to $o$-$e$, and swing to $o$-$c$ and $o$-$g$.

![Step 117.3: Sectional top view and front view of truncated cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-018-panel-2.webp)

4. Connect the Top View points into an ellipse and hatch it, then project from $1'$ to $8'$ across $x_1y_1$ and transfer Top View distances from $xy$ to draw the True Shape ellipse.

![Orthographic projections and true shape of section of a cone cut by an inclined section plane](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-019-panel-1.webp)

> **Watch out.** Points on the center generator $o'c'(g')$ cannot be projected straight down; you must project them horizontally to the extreme generator $o'e'$ to find their true radial radius from the axis.

**Answer:** Both the sectional Top View and the True Shape are closed ellipses.

#### Problem 122: Cone cut parallel to an extreme generator
**Given:** A cone of base diameter 50 mm and axis 60 mm on HP, cut by an AIP parallel to and 10 mm away from the leftmost generator. **Find:** The front view, sectional top view, and true shape of the section.

1. Draw the 50 mm diameter Top View circle divided into 8 radial generators, and project the 60 mm high Front View.

![Orthographic projections of a cone - Step 122.1](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-020-panel-1.webp)

2. Draw the cutting plane $V$-$T$ parallel to the left extreme generator $o'a'$ at a perpendicular distance of 10 mm, marking where it cuts the base and generators.

![Section of a cone - Step 122.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-020-panel-2.webp)

3. Project the base cut straight down to the Top View perimeter, project the generator intersections to their matching radial lines (using horizontal rotation for the center generator), and hatch the resulting open curve.

![Step 122.3: Section of a cone with cutting plane parallel to generator](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-021-panel-1.webp)

4. Set up $x_1y_1$ parallel to $V$-$T$, project all cut points perpendicular to $x_1y_1$, and transfer Top View distances from $xy$ to plot the parabolic True Shape.

![Step 122.4: True shape of the section of a cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-021-panel-2.webp)

**Answer:** The True Shape of the section is a parabola bounded by a flat chord across the base.

<!-- page 9 | Sections by Auxiliary Vertical Planes (AVP) and Profile Planes -->

## Sections by Auxiliary Vertical Planes (AVP) and Profile Planes

Having practiced cuts that appear as straight lines in the Front View, we now switch roles and work with vertical cutting planes that appear as straight lines in the Top View. When a cutting plane is perpendicular to the Horizontal Plane, its trace appears in the Top View, and projecting upward to the Front View reveals the cut face—including hyperbolic curves on cones.

### The idea

An **Auxiliary Vertical Plane (AVP)** is a cutting plane perpendicular to the Horizontal Plane (HP) and inclined to the Vertical Plane (VP). Because it stands vertically, its entire cut surface collapses into a single straight edge—its **Horizontal Trace (HT)**—in the Top View. Instead of intersecting the vertical axis of the solid, the plane is positioned by its **shortest distance** (perpendicular offset) from the axis in the Top View. To locate the plane accurately, draw a construction circle centered on the top-view axis with a radius equal to this offset distance, and then draw the cutting plane line tangent to that circle at the required angle to $xy$.

Once the trace $HT$ is drawn in the Top View, it directly marks where the base edges, slant edges, or cone generators are sliced. Projecting these intersection points straight up to their corresponding lines in the Front View reveals the sectional elevation. To find the True Shape, place an auxiliary reference line $x_1y_1$ parallel to $HT$ in the Top View, project perpendiculars from the cut points, and transfer the vertical heights of the points above $xy$ from the Front View.

Two special cases simplify the work. First, when a vertical plane cuts a vertical cone parallel to its axis (without passing through the apex), the True Shape of the cut is always a **hyperbola** (specifically a **rectangular hyperbola** when parallel to VP). Second, a **profile cutting plane** is perpendicular to both HP and VP; its trace appears as a vertical line in both the Front and Top Views, and projecting horizontal heights directly across to the Side View reveals the True Shape without needing an auxiliary view.

### Worked example

**Problem 118: Cone cut by a plane parallel to VP**
**Given:** A cone of base diameter 50 mm and axis length 60 mm rests on its base on HP, cut by a vertical section plane parallel to VP and 10 mm in front of the axis.
**Find:** The sectional front view, top view, and true shape of the section.

1. Draw the Top View as a circle of diameter 50 mm centered at $o$ and divide it into 8 equal sectors ($a$ through $h$) to create artificial generators.
2. Project the base points up to $xy$ and draw the Front View triangle of height 60 mm with apex $o'$ and corresponding front-view generators.

![Projections of a cone, step 118.1](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-030-panel-1.webp)

3. In the Top View, draw the horizontal cutting plane trace $HT$ parallel to $xy$ and 10 mm below the axis $o$, because the vertical plane is parallel to VP and 10 mm in front of the axis.
4. Mark the intersection points $1$ and $5$ on the base circle, and points $2$, $3$, and $4$ where $HT$ crosses generators $ob$, $oc$, and $od$.

![Projections of a cone with cutting plane line, step 118.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-030-panel-2.webp)

5. Project points $1$ and $5$ straight up to the base line $xy$ in the Front View, and project points $2$ and $4$ straight up to their respective generators $o'b'$ and $o'd'$.
6. Because generator $o'c'$ is vertical in both views, rotate point $3$ in the Top View around center $o$ to the outer horizontal generator $oe$, project up to the true slant edge $o'e'$, and carry that height horizontally back to $o'c'$ to locate point $3'$.
7. Join points $1, 2, 3, 4, 5$ in the Front View with a smooth hyperbolic curve and hatch the area; since the cutting plane is parallel to VP, this sectional front view directly shows the True Shape.

![Orthographic projections of a cone cut by a section plane, showing a hyperbolic cross-section.](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-031-panel-1.webp)

**Answer:** The sectional front view directly gives the true shape, which is a rectangular hyperbola.

### More problems

#### Problem 88: Pentagonal pyramid cut by a 30° vertical plane
**Given:** A pentagonal pyramid (base side 30 mm, height 60 mm) on HP with one base edge perpendicular to VP, cut by an AVP inclined at 30° to VP and 10 mm from the axis.
**Find:** The sectional front view, top view, true shape, and true height of the section.

1. Draw the Top View pentagon $abcde$ of side 30 mm with edge $ae$ perpendicular to $xy$, join corners to apex $o$, and project the Front View of height 60 mm.

![Initial orthographic projections of a pentagonal pyramid resting on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-022-panel-2.webp)

2. In the Top View, draw the cutting plane line $HT$ inclined at 30° to $xy$ and tangent to a 10 mm radius circle around $o$, marking cut points $1$ and $4$ on the base edges and $2$ and $3$ on slant edges $ob$ and $oc$.

![Step 88.2 of section of a pentagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-023-panel-1.webp)

3. Project points $1$ and $4$ up to $xy$ at $1'$ and $4'$, and project $2$ and $3$ up to slant edges $o'b'$ and $o'c'$ at $2'$ and $3'$, then connect and hatch $1'2'3'4'$.

![Step 88.3 showing the sectional front view of the pentagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-023-panel-2.webp)

4. Draw auxiliary line $x_1y_1$ parallel to $HT$, project perpendiculars from points $1, 2, 3, 4$, and transfer the heights of $1', 2', 3', 4'$ above $xy$ from the Front View to complete the True Shape.

![Orthographic projections and true shape of section of a hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-024-panel-1.webp)

**Answer:** The sectional views and true shape polygon $1''2''3''4''$ are constructed as shown.

#### Problem 92: Hexagonal pyramid cut by a 20° vertical plane
**Given:** A hexagonal pyramid (base side 30 mm, axis 60 mm) on HP with two base edges parallel to VP, cut by an AVP inclined at 20° to VP passing 15 mm from the axis.
**Find:** The sectional front view, top view (plan), and true shape of the section.

1. Draw the Top View regular hexagon $abcdef$ of side 30 mm with two edges parallel to $xy$, and project the Front View pyramid of height 60 mm.

![Step 92.1: Projections of a hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-025-panel-1.webp)

2. Draw the cutting plane trace $HT$ in the Top View inclined at 20° to $xy$ at a perpendicular distance of 15 mm from $o$, marking intersections $1$ and $4$ on the base and $2$ and $3$ on slant edges $ob$ and $oc$.

![Step 92.2: Section plane in top view of hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-025-panel-2.webp)

3. Project points $1, 2, 3, 4$ straight up to the corresponding base and slant edges in the Front View to mark $1', 2', 3', 4'$, and hatch the cut face.

![Orthographic projections of a truncated hexagonal pyramid (step 92.3)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-026-panel-1.webp)

4. Set up reference line $x_1y_1$ parallel to $HT$, project perpendiculars from $1, 2, 3, 4$, and transfer the heights of $1'$ through $4'$ above $xy$ to plot the True Shape.

![Projections and true shape of section of a hexagonal pyramid (step 92.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-026-panel-2.webp)

> **Watch out.** The problem text says "meeting the axis 15 mm from the vertex", which means a perpendicular offset of 15 mm from the top-view center $o$.

**Answer:** The sectional views and true shape trapezium $1''2''3''4''$ are completed as shown.

#### Problem 89: Pentagonal pyramid cut by a 45° vertical plane
**Given:** A pentagonal pyramid (base side 30 mm, height 60 mm) on HP with one base edge parallel to VP, cut by an AVP inclined at 45° to VP and 10 mm from the axis.
**Find:** The sectional front view, top view, true shape, and true height of the section.

1. Draw the Top View pentagon $abcde$ (side 30 mm) with edge $ed$ parallel to $xy$, and project the Front View triangle of height 60 mm.

![Step 89.1: Orthographic projections of the pentagonal pyramid before sectioning](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-027-panel-2.webp)

2. Draw the cutting plane trace $HT$ in the Top View at 45° to $xy$ and 10 mm from center $o$, cutting the base at $1$ and $4$ and slant edges $od$ and $oc$ at $2$ and $3$.

![Step 89.2: Projections of a pentagonal pyramid with a section plane in the top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-028-panel-1.webp)

3. Project $1, 2, 4$ up to $1', 2', 4'$; because edge $oc$ is vertical, rotate point $3$ around $o$ to horizontal line $oc_1$, project to true slant edge $o'c_1'$, and carry horizontally to $o'c'$ to find $3'$.

![Step 89.3: Sectional front view of the pentagonal pyramid with hatching](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-028-panel-2.webp)

4. Draw an auxiliary line parallel to $HT$, project perpendiculars from $1, 2, 3, 4$, and transfer the front-view heights above $xy$ to construct the True Shape.

![Section of a pentagonal pyramid and true shape of section](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-029-panel-1.webp)

**Answer:** The sectional front view, top view, and true shape are obtained as shown.

#### Problem 119: Cone cut by a 45° vertical plane
**Given:** A cone (diameter 50 mm, height 60 mm) on HP, cut by a 45° vertical plane passing 10 mm from the axis.
**Find:** The projections of the cut solid and the true shape of the section.

1. Draw the Top View circle of diameter 50 mm divided into 8 sectors ($a$ through $h$) and project the Front View cone of height 60 mm.

![Orthographic projections of a cone (Step 119.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-032-panel-1.webp)

2. In the Top View, draw the cutting plane line $HT$ at 45° to $xy$ and tangent to a 10 mm radius offset circle around $o$, marking cut points $1$ through $5$ on the base and generators.

![Section plane cutting the top view of the cone (Step 119.2)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-032-panel-2.webp)

3. Project points $1$ through $5$ up to their respective front-view generators (rotating point $2$ on the vertical generator $oc$ to the outer generator first) and join them into a hatched curve.

![Orthographic projection step 119.3 of a cone cut by an inclined section plane](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-033-panel-1.webp)

4. Draw auxiliary line $x_1y_1$ parallel to $HT$, project perpendiculars from points $1$ through $5$, and transfer heights above $xy$ from the Front View to draw the hyperbolic True Shape.

![Orthographic projection step 119.4 showing true shape of the hyperbolic section](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-033-panel-2.webp)

**Answer:** The true shape of the section is a hyperbola.

#### Problem 93: Hexagonal pyramid cut by a profile plane
**Given:** A hexagonal pyramid (base side 30 mm, axis 60 mm) on HP with two base edges perpendicular to VP, cut by a plane perpendicular to both HP and VP at 15 mm left of the axis.
**Find:** The sectional side view, plan, elevation, and true shape of the section.

1. Draw the Top View hexagon (side 30 mm) with two edges perpendicular to $xy$, project the Front View (height 60 mm), and construct the initial Side View across vertical reference line $x'y'$.

![Step 93.1: Projections and initial side view of a hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-034-panel-2.webp)

2. Draw the vertical cutting plane line 15 mm to the left of the axis in both the Front and Top Views, marking top-view intersections $1, 2, 3, 4$ and front-view heights on the vertical trace.

![Step 93.2: Orthographic projections and side view construction for a cut hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-035-panel-1.webp)

3. Project the top-view widths of $1, 2, 3, 4$ to the Side View via a 45° mitre line (or compass arcs) and intersect them with horizontal projectors from the Front View to hatch the True Shape.

![Step 93.3: Sectional side view and final views of the cut hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-035-panel-2.webp)

**Answer:** The sectional side view directly reveals the true shape of the section.

#### Problem 120: Cone cut by a profile plane for a given hyperbola base
**Given:** A cone (base diameter 50 mm, axis 60 mm) on HP, cut by a plane perpendicular to both HP and VP so the true shape is a hyperbola of 40 mm base.
**Find:** The front view, top view, and sectional side view showing the true shape.

1. Draw the Top View circle (diameter 50 mm, 8 sectors), project the Front View (height 60 mm), and project the uncut Side View across vertical line $x'y'$.

![Step 120.1: Initial projection showing front view, top view, and right side view setup of a cone resting on its base on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-036-panel-2.webp)

2. In the Top View, locate the vertical cutting chord of length 40 mm (20 mm above and below horizontal centerline $ae$), and extend this vertical cutting plane line up into the Front View.

![Orthographic projection step 120.2 showing construction lines for a sectioned cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-037-panel-1.webp)

3. Project the cut points from the Top View and their heights from the Front View into the Side View, then join them with a smooth curve and hatch the resulting hyperbola.

![Orthographic projection step 120.3 showing the completed views and hatched section of the cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-037-panel-2.webp)

**Answer:** The vertical profile plane cuts a chord of 40 mm in the Top View and produces the required hyperbolic true shape in the Side View.

<!-- page 10 | Development of Prisms and Cylinders (Parallel-Line Method) -->

## Development of Prisms and Cylinders (Parallel-Line Method)

You already know how to slice prisms and cylinders with inclined cutting planes and project their sectional views. Moving from cross-sections to surface fabrication, we now apply the Parallel-Line Method to unfold truncated prisms and cylindrical pipes into flat patterns. Because every vertical edge or generator on a prism or cylinder is parallel to the Vertical Plane, its true cut height in the Front View transfers horizontally onto the unfolded rectangular stretch-out.

### The idea

When a sheet-metal worker makes a duct or pipe, they start with a flat sheet, cut a specific pattern, and fold or roll it into a 3D shape. Finding that flat pattern is called **surface development**. For a right prism or cylinder standing on the Horizontal Plane (HP), every vertical edge or **generator** is parallel to the Vertical Plane (VP). Therefore, the Front View shows the exact, true length of every vertical line on the surface.

To unfold the solid, we draw a **stretch-out line** right next to the Front View, aligned with the base. Its total length equals the perimeter of the base ($n \times B$ for an $n$-sided prism of base side $B$, or $\pi \times D$ for a cylinder of diameter $D$). We divide this stretch-out into segments matching the faces of the prism or the 8 equal sectors of the cylinder, and draw vertical fold lines or generators at each division. Since heights do not change when the surface unrolls horizontally, we simply project each cut point horizontally from the Front View to its corresponding vertical line on the development.

Connecting these projected points gives the upper boundary of the flat pattern: straight segments for faceted prisms, and a smooth sine-like curve for cylinders. In **compound pipe cuts**—such as a $45^\circ$ **mitre cut** used to join two pipes at a right angle—both the top and bottom ends are sliced, so we project both cut profiles across. Finally, because the shortest distance between two points on a flat sheet is a straight line, any shortest path or **helix** (a curve rising at a constant rate around a cylinder, Advancing by one **pitch** per full turn) is drawn as a straight diagonal on the development first, and its intersection points are projected back to the Front View.

### Worked example

**Problem 126: Square prism cut by an inclined plane**
**Given:** A square prism of base side 40 mm and height 70 mm rests on HP with a base edge parallel to VP, cut by an AIP at 45° to HP bisecting the axis.
**Find:** The sectional top view and the lateral surface development of the lower portion.

1. Draw a 40 mm square below the $xy$ line with edges parallel to $xy$ for the Top View, and project the 70 mm high rectangular Front View above $xy$ because the vertical edges are parallel to VP.
2. Mark the axis midpoint at 35 mm height in the Front View and draw the cutting plane line $V\text{-}T$ at 45° to $xy$, marking cut points $1'$ on the left edges $a'(d')$ and $2'$ on the right edges $b'(c')$.

![Orthographic projections of square prism cut by an AIP at 45 degrees](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-062-panel-2.webp)

3. Darken the retained lower portion in the Front View and hatch the entire square in the Top View at 45° because the cutting plane slices across the full width of the prism.

![Step 126.2: Front view and top view of a cut square prism](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-063-panel-1.webp)

4. Draw a horizontal stretch-out line to the right of the Front View of length $4 \times 40 = 160$ mm, divide it into four 40 mm faces ($E\text{-}F\text{-}G\text{-}H\text{-}E$), and erect vertical fold lines.
5. Project cut heights $1'$ and $2'$ horizontally from the Front View to the corresponding vertical fold lines on the development, and connect them with straight dark lines to complete the pattern.

![Step 126.3: Lateral surface development of the truncated square prism](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-063-panel-2.webp)

**Answer:** Stretch-out length = 160 mm; cut heights on vertical edges steps from 15 mm on $A$ and $D$ up to 55 mm on $B$ and $C$.

### More problems

#### Problem 128: Truncated pentagonal prism
**Given:** A pentagonal prism ($B = 30$ mm, $H = 70$ mm) rests on HP with a base edge parallel to VP, cut by a 45° AIP bisecting the axis.
**Find:** The sectional top view and lateral surface development.

1. Draw a regular pentagon of side 30 mm below $xy$ with back edge $ed$ parallel to $xy$, and project the 70 mm high Front View.
2. Draw the 45° cutting plane through the axis midpoint (35 mm height), marking intersections $1', 2', 3', 4', 5'$ on vertical edges $a', e', b', d', c'$.

![Projection of a pentagonal prism cut by an auxiliary inclined plane (AIP) at 45 degrees](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-064-panel-2.webp)

3. Darken the lower prism in the Front View and hatch the entire pentagon in the Top View to represent the cut surface.

![Orthographic projections and sectional cutting plane of a pentagonal prism (Step 128.2)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-065-panel-1.webp)

4. Draw a stretch-out line of length $5 \times 30 = 150$ mm divided into five 30 mm strips, project $1'$ through $5'$ horizontally to their respective fold lines, and join them with straight segments.

![Development of the lateral surface of a truncated pentagonal prism (Step 128.3)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-065-panel-2.webp)

**Answer:** Stretch-out length = 150 mm divided into five 30 mm faces.

#### Problem 129: Truncated hexagonal prism
**Given:** A hexagonal prism ($B = 30$ mm, $H = 70$ mm) on HP with two base edges perpendicular to VP, cut by a 30° AIP bisecting the axis.
**Find:** The sectional top view and lateral surface development.

1. Construct a 30 mm regular hexagon in the Top View with two vertical sides perpendicular to $xy$, and project the 70 mm tall Front View.
2. Draw the cutting plane at 30° to $xy$ through the axis midpoint (35 mm height), labeling cut points $1', 2', 3'$ on the projected vertical edges.

![Step 129.1: Projections of hexagonal prism cut by an auxiliary inclined plane](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-066-panel-2.webp)

3. Outline the retained lower portion in the Front View and hatch the complete hexagonal Top View.

![Section of a regular hexagonal prism cut by an inclined plane](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-067-panel-1.webp)

4. Lay out a stretch-out line of $6 \times 30 = 180$ mm with six 30 mm faces, project heights $1', 2', 3'$ horizontally across, and connect the points with straight lines.

![Development of lateral surface of a truncated hexagonal prism](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-067-panel-2.webp)

**Answer:** Stretch-out length = 180 mm divided into six 30 mm faces.

#### Problem 131: Shortest path of an ant on a hexagonal prism
**Given:** A hexagonal prism ($B = 30$ mm, $H = 70$ mm) on HP; an ant travels from a bottom corner to the diametrically opposite top corner.
**Find:** The lateral surface development and the ant's path in the Front View.

1. Draw the Top View hexagon of side 30 mm with two edges parallel to $xy$, and project the 70 mm high Front View.

![Step 131.1: Orthographic projections of the hexagonal prism](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-068-panel-2.webp)

2. Construct the $180 \text{ mm} \times 70 \text{ mm}$ rectangular development alongside the Front View, divided into six 30 mm vertical strips labeled $A$ through $A$.
3. Draw a straight line from bottom corner $A$ to top corner $D$ (three faces over, 90 mm horizontally) because a flat straight line gives the shortest surface path.
4. Mark points $1', 2', 3', 4'$ where this diagonal crosses fold lines $A, B, C, D$, project them horizontally back to edges $a', b', c', d'$ in the Front View, and connect them.

![Orthographic projections and lateral surface development of a hexagonal prism](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-069-panel-1.webp)

**Answer:** Stretch-out length = 180 mm; the shortest path spans three faces (90 mm width by 70 mm height) on the development.

#### Problem 133: Cylinder cut by an inclined plane through the axis
**Given:** A vertical cylinder ($D = 40$ mm, $H = 60$ mm) on HP, cut by an AIP at 45° to HP passing through the axis 20 mm below the top.
**Find:** The front view, sectional top view, and lateral surface development.

1. Draw a 40 mm circle in the Top View divided into 8 equal sectors ($a$ to $h$), and project the 60 mm high Front View with its vertical generators.
2. Draw the cutting plane at 30° to $xy$ passing through the axis 20 mm from the top (40 mm from base), marking cut points $1'$ to $5'$.

![Orthographic projections and cutting plane of a cylinder (Step 133.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-070-panel-1.webp)

3. Darken the lower cylinder in the Front View and hatch the entire circle in the Top View.

![Sectional views of the cut cylinder (Step 133.2)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-070-panel-2.webp)

4. Draw a stretch-out of length $\pi \times 40 = 125.6$ mm divided into 8 equal parts, project $1'$ to $5'$ horizontally to the corresponding generators, and join them with a smooth curve.

![Orthographic projection and development of a cut cylinder](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-071-panel-1.webp)

> **Watch out.** The problem text states a 45° cutting plane, but the worked construction uses a 30° cutting plane passing 20 mm below the top.

**Answer:** Stretch-out length = 125.6 mm; smooth sine-like upper boundary centered at 40 mm height.

#### Problem 134: Cylinder cut through the extreme right top point
**Given:** A vertical cylinder ($D = 40$ mm, $H = 60$ mm) on HP, cut by a 45° AIP passing through the extreme right point of the top face.
**Find:** The front view, sectional top view, and lateral surface development.

1. Draw the 40 mm circle divided into 8 sectors in the Top View and project the 60 mm tall Front View.
2. Draw a 45° cutting plane down from the top-right corner $e'$ in the Front View, intersecting the generators at $1', 2', 3', 4', 5'$.

![Step 134.1: Orthographic projection of a cylinder cut by an inclined section plane](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-072-panel-1.webp)

3. Darken the retained Front View outline and hatch the full circle in the Top View because the plane cuts every vertical generator.

![Step 134.2: Sectional top view showing hatched section of the cylinder](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-072-panel-2.webp)

4. Lay out the 125.6 mm stretch-out in 8 divisions, project points $1'$ to $5'$ horizontally across, and draw a smooth curve through them.

![Orthographic projections and lateral surface development of a cut cylinder](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-073-panel-1.webp)

> **Watch out.** The summary banner under the problem states 30°, but the problem statement and drawings use a 45° cutting plane.

**Answer:** Stretch-out length = 125.6 mm; height ranges from 20 mm at $A$ up to 60 mm at $E$.

#### Problem 135: Cylinder cut at 60° through the top center
**Given:** A vertical cylinder ($D = 40$ mm, $H = 60$ mm) on HP, cut by a 60° AIP passing through the top point of the axis.
**Find:** The front view, sectional top view, and lateral surface development.

1. Project the 60 mm Front View from an 8-sector, 40 mm diameter Top View circle, and draw a 60° cutting plane through the top center $c'$.

![Step 135.1: Section plane cutting a cylinder](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-074-panel-1.webp)

2. Mark cut points $1', 2', 3'$ on the left half of the Front View, and hatch only the left semicircle ($a\text{-}b\text{-}c\text{-}g\text{-}h$) in the Top View because the right half remains uncut.

![Step 135.2: Truncated cylinder and hatched cut section](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-074-panel-2.webp)

3. Draw the $125.6 \text{ mm} \times 60 \text{ mm}$ development in 8 divisions, project $1', 2', 3'$ to the outer quarters ($A\text{-}C$ and $G\text{-}A$), and leave the middle half ($C\text{-}E\text{-}G$) flat at 60 mm height.

![Orthographic views and development of a cut cylinder (Problem 135.3)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-075-panel-1.webp)

**Answer:** Stretch-out length = 125.6 mm; curved cut on outer quarters and full 60 mm height across the middle half.

#### Problem 136: Two-turn helix (shortest path) on a cylinder
**Given:** A vertical cylinder ($D = 40$ mm, $H = 60$ mm) on HP; a point moves along a two-turn helix of pitch 30 mm (or a single shortest path).
**Find:** The lateral surface development and the helical path in the Front View.

1. Draw the 40 mm circle divided into 8 sectors in the Top View and project the 60 mm high Front View with generators $a'$ to $e'$.

![Step 136.1: Orthographic projections of a cylinder](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-076-panel-1.webp)

2. Draw the $125.6 \text{ mm} \times 60 \text{ mm}$ development divided into 8 vertical strips; for two turns of 30 mm pitch, draw a line from $A$ at the base to $A$ at 30 mm height, and a parallel line from 30 mm to 60 mm height.
3. Project the generator intersections from both straight lines horizontally back to the Front View and join them into two smooth sinusoidal turns.

![Step 136.2: Development and orthographic projection of a double helix on a cylinder](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-076-panel-2.webp)

4. For the alternative single-revolution shortest path, draw one diagonal from bottom-left $A$ to top-right $A$ across the full 60 mm height and project its points back to the Front View.

![Orthographic projections and surface development for shortest path of an ant on a cylinder](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-077-panel-1.webp)

**Answer:** Stretch-out length = 125.6 mm; pitch = 30 mm per turn for the double helix (or 60 mm for one full turn).

#### Problem 137: Cylindrical pipe with 20° cut and mitre cut
**Given:** A cylindrical pipe ($D = 40$ mm, $H = 60$ mm) with a 20° cut at the bottom end and an opposite 45° mitre cut at the top end.
**Find:** The lateral surface development of the pipe.

1. Draw the 40 mm, 8-sector circle in the Top View and project the 60 mm Front View.
2. Draw the top mitre cut at 45° down from the top-left corner ($1'$ to $5'$) and the bottom cut at 20° up from the bottom-left corner ($6'$ to $10'$).

![Orthographic projections of a cylinder truncated by two inclined cutting planes (Step 137.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-078-panel-1.webp)

3. Construct the 125.6 mm stretch-out with 8 divisions, project both sets of points ($1'\text{--}5'$ and $6'\text{--}10'$) horizontally to the generators, and trace smooth curves for both top and bottom edges.

![Development of the lateral surface of the truncated cylinder (Step 137.2)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-078-panel-2.webp)

**Answer:** Stretch-out length = 125.6 mm bounded by two smooth sinusoidal curves at top and bottom.

#### Problem 138: Cylindrical pipe with parallel 30° cuts at both ends
**Given:** A cylindrical pipe ($D = 40$ mm, $H = 60$ mm) with a 30° top cut through the top-right point and a 30° bottom cut through the bottom-left point.
**Find:** The lateral surface development of the pipe.

1. Draw the 8-sector, 40 mm circle in the Top View and project the 60 mm Front View; draw a 30° line from the top-right corner ($1'\text{--}5'$) and a parallel 30° line from the bottom-left corner ($6'\text{--}10'$).

![Orthographic projections of sectioned cylinder (Step 138.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-079-panel-2.webp)

2. Lay out the 125.6 mm stretch-out divided into 8 strips, project upper points $1'\text{--}5'$ and lower points $6'\text{--}10'$ horizontally to their matching generators, and connect both sets with smooth curves.

![Orthographic projections and lateral surface development of a cut cylinder](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-080-panel-1.webp)

**Answer:** Stretch-out length = 125.6 mm with parallel upper and lower sinusoidal cut profiles.

<!-- page 11 | Development of Pyramids, Cones, and Shortest-Path Applications (Radial-Line Method) -->

## Development of Pyramids, Cones, and Shortest-Path Applications (Radial-Line Method)
You can already unfold prisms and cylinders by projecting cut heights directly across from the Front View onto a rectangular stretch-out. Finally, we extend surface development to tapering solids—pyramids and cones—where edges converge at an apex, and use these radial developments to solve real-world shortest-path and surface-mapping problems. On pyramids and cones, cut heights on interior slant lines are foreshortened in the Front View and must first be projected horizontally to the outer true-length boundary before being marked on the radial development.

### The idea
When a pyramid or cone is unfolded, its lateral surface swings open around the apex $O$. Every slant edge of a pyramid (or generator of a cone) radiates from $O$ at its **true slant length** ($L$ or $R$). In the Front View, however, only an edge or generator that is parallel to the Vertical Plane (parallel to the $xy$ line in the Top View) shows its true length. For a cone, the two extreme outer generators automatically show true slant length $R$. For a pyramid, if no slant edge is parallel to $xy$ in the Top View, you must rotate one slant edge about the apex $o$ until it is parallel to $xy$, then project it up to the Front View to establish the **true-length slant line**.

Once you have the true-length slant line in the Front View, the key rule applies: never measure along an interior, foreshortened slant line. Instead, project every cut point ($1', 2', 3', \dots$) horizontally across to the true-length slant line first. The distance from the apex $o'$ along this true-length line to the projected point is the true radial distance from $O$ on the development.

For a frustum where the apex is missing, extend the tapering sides upward in the Front View until they meet to locate the **virtual apex** $o'$, then develop as usual. For cones, unfold a circular sector of radius $R$ and **sector angle** $\theta = (r / R) \times 360^\circ$, where $r$ is the base radius. Finally, any shortest path (or drawn curve, like an inscribed circle) on a 3D surface is a simple straight line (or true circle) on the flat development; draw it on the development first, transfer the generator intersection distances back to the true-length line in the Front View, and project horizontally inward to the respective generators.

### Worked example
**Problem 142: Square pyramid cut by an inclined plane**
**Given:** A square pyramid of base side 40 mm and altitude 60 mm rests on HP with two base edges parallel to VP, cut by a plane inclined at 45° to HP bisecting the axis at 30 mm height.
**Find:** The sectional top view and the radial development of the lower lateral surface.

1. Draw the Top View as a 40 mm square $a$-$b$-$c$-$d$ with sides parallel to $xy$ and diagonals meeting at apex $o$, then project the Front View with height 60 mm to apex $o'$.
2. Draw the cutting plane trace $V$-$T$ at 45° to $xy$ passing through the axis 30 mm above the base, marking cut points $1'$ on $o'a'(d')$ and $2'$ on $o'b'(c')$.
3. Project $1'$ and $2'$ down to the Top View slant edges to get $1, 2, 3, 4$ and hatch the sectional top view.
4. Because slant edge $ob$ is inclined to $xy$, swing an arc of radius $ob$ from center $o$ in the Top View to bring $b$ parallel to $xy$, and project up to the base line at $b_1'$ to draw the true-length line $o'b_1'$.
5. Project cut points $1'$ and $2'$ horizontally to the true-length line $o'b_1'$ to get true radial distances $o'1''$ and $o'2''$ because $o'a'$ and $o'b'$ are foreshortened.
6. With center $O$ and radius equal to true length $o'b_1'$, swing a development arc and step off four 40 mm chords $A$-$B$-$C$-$D$-$A$, joining each to $O$.
7. Measure true distances $o'1''$ and $o'2''$ from $O$ along the corresponding radial edges ($OA, OD$ and $OB, OC$) and join the points with straight lines to complete the development.

![Step 142.1: Projections of a square pyramid cut by an inclined section plane](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-081-panel-1.webp)

![Step 142.2: Sectional views and surface development of the truncated square pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-081-panel-2.webp)

**Answer:** The development consists of four isosceles triangles of true slant side $o'b_1'$ and base 40 mm, truncated at true radial distances $o'1''$ and $o'2''$ from apex $O$.

### More problems

#### Problem 143: Square pyramid cut through its base
**Given:** A square pyramid of base 40 mm and altitude 60 mm rests on HP with base edges equally inclined to VP, cut by a 45° plane passing through the axis 15 mm above the base.
**Find:** The front view, sectional top view, and lateral surface development of the lower portion.

1. Draw the Top View square $a$-$b$-$c$-$d$ (side 40 mm) with edges at 45° to $xy$ so slant edges $oa$ and $oc$ are parallel to $xy$, and project the Front View (height 60 mm).
2. Draw the 45° cutting plane $V$-$T$ through the axis 15 mm above $xy$, cutting slant edge $o'a'$ at $1'$, edges $o'b'(d')$ at $2'$, and the base directly at $3'$.
3. Project $1', 2', 3'$ down to the Top View to locate the section polygon on the slant edges and base edges $bc$ and $dc$, and hatch the cut face.
4. Since outer edge $o'c'$ is already parallel to $xy$ in the Top View, use $o'c'$ directly as the true-length slant line.
5. Project $1'$ and $2'$ horizontally to $o'c'$, swing the development arc of radius $o'c'$ with four 40 mm base chords, and transfer the cut distances along the radial lines and base edges $BC$ and $DC$.

> **Watch out.** Because the cutting plane hits the base between $b$ and $c$ (and $d$ and $c$), mark the cut point $3$ directly along base chords $BC$ and $DC$ on the development rather than on radial edge $OC$.

![Step 143.1: Projections of square pyramid and cutting plane](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-082-panel-2.webp)

![Projections and surface development of a cut pentagonal pyramid labelled 143.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-083-panel-1.webp)

**Answer:** The lateral development spans four 40 mm base chords on a true-length arc of radius $o'c'$, with corner $C$ completely removed outside the base cuts on $BC$ and $DC$.

#### Problem 144: Pentagonal pyramid cut by two planes
**Given:** A pentagonal pyramid (base 30 mm, altitude 60 mm) rests on HP with one base edge perpendicular to VP, cut by a horizontal plane 20 mm below the apex and a 30° plane through the left base edge.
**Find:** The lateral surface development of the remaining middle portion.

1. Draw the Top View regular pentagon $a$-$b$-$c$-$d$-$e$ (side 30 mm) with edge $ae$ perpendicular to $xy$, and project the Front View with height 60 mm.
2. Draw the horizontal cutting plane 20 mm below $o'$ and the 30° cutting plane starting from base edge $a'(e')$ to get lower cut points $1', 2', 3'$.
3. Since slant edge $oc$ is parallel to $xy$ in the Top View, use the outer Front View edge $o'c'$ directly as the true slant length.
4. Draw the radial development from $O$ with radius $o'c'$, stepping off five 30 mm base chords $A$-$B$-$C$-$D$-$E$-$A$.
5. Project both the upper horizontal cut and lower cut points $2'$ and $3'$ horizontally to true-length line $o'c'$, transfer these radial distances to the development, and join them with straight lines.

![Orthographic projections of a pentagonal pyramid with cutting planes (Step 144.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-084-panel-1.webp)

![Development of the lateral surface of the truncated pentagonal pyramid (Step 144.2)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-084-panel-2.webp)

**Answer:** The development forms a five-panel radial band bounded between the uniform upper cut radius and the lower inclined cut lines.

#### Problem 215: Frustum of a square pyramid
**Given:** A frustum of a square pyramid has a 40 mm bottom base, a 20 mm top square face parallel to the base, and a vertical height of 50 mm, with two base sides parallel to VP.
**Find:** The lateral surface development of the frustum.

1. Draw the Top View as two concentric squares of sides 40 mm ($a$-$b$-$c$-$d$) and 20 mm ($1$-$2$-$3$-$4$) with sides parallel to $xy$, and connect their corners.
2. Project the Front View of the 50 mm high frustum, then extend the tapering sides upward until they intersect at the virtual apex $o'$ at total height 100 mm.
3. Rotate slant edge $ob$ in the Top View parallel to $xy$ and project up to the base line to draw the true-length line from $o'$, which measures $R = 104$ mm.
4. Project the 50 mm top face of the frustum horizontally to the true-length line to find the upper cut radial distance from $o'$.
5. Swing concentric arcs from $O$ using the full true length $R = 104$ mm and the upper cut distance, step off four 40 mm chords on the outer arc, and join the radial and chordal lines.

![Orthographic projection of a frustum of a square pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-085-panel-2.webp)

![Orthographic projections and radial line development of the surface of a frustum of a square pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-086-panel-1.webp)

**Answer:** Virtual apex height is 100 mm, true slant edge $R = 104$ mm, with four trapezoidal panels tapering from 40 mm to 20 mm.

#### Problem 145: Shortest path around a hexagonal pyramid
**Given:** A hexagonal pyramid of base 30 mm and altitude 60 mm rests on HP with one base edge parallel to VP; an ant travels from the extreme left base corner around the pyramid and back.
**Find:** The shortest path shown in both the front and top views.

1. Draw the Top View regular hexagon $a$-$b$-$c$-$d$-$e$-$f$ (side 30 mm) with two edges parallel to $xy$ so outer slant edges $oa$ and $od$ are parallel to $xy$, and project the Front View (height 60 mm).
2. Using the true slant length $o'd'$ directly from the Front View, draw the six-panel radial development $O$-$A$-$B$-$C$-$D$-$E$-$F$-$A$ with six 30 mm base chords.
3. Draw a single straight line on the development connecting starting corner $A$ to the final corner $A$ to represent the shortest path across all six faces.
4. Mark the intersections of this straight line with radial edges $OB, OC, OD, OE, OF$, and transfer their radial distances from $O$ back to the true-length line $o'd'$ in the Front View.
5. Project these points horizontally from $o'd'$ to the corresponding slant edges in the Front View to get $1', 2', 3', 4'$, then project straight down to the Top View slant edges and connect the path in both views.

![Orthographic projections of a hexagonal pyramid (Step 145.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-087-panel-1.webp)

![Orthographic projections and development of the surface of a cut hexagonal pyramid (Step 145.2)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-087-panel-2.webp)

**Answer:** The shortest path is the straight line $A$-$A$ on the six-face radial development, projecting as a polygonal loop through $1', 2', 3', 4'$ in the Front View and around the Top View.

#### Problem 147: Cone cut by an inclined plane bisecting the axis
**Given:** A cone of base diameter 50 mm and height 60 mm rests on HP and is cut by a plane inclined at 30° to HP bisecting the axis.
**Find:** The front view, sectional top view, and lateral surface development of the lower portion.

1. Draw the Top View circle (diameter 50 mm) divided into 8 equal sectors ($a$ to $e$), and project the Front View (height 60 mm) with true slant length $R = \sqrt{25^2 + 60^2} = 65$ mm.
2. Draw the 30° cutting plane passing through the axis midpoint (30 mm above $xy$), marking cut points $1'$ to $5'$ on the generators.
3. Project $1'$ to $5'$ down to the Top View generators (rotating $3'$ from the center generator via the outer generator first) to draw and hatch the sectional ellipse.
4. Calculate the development sector angle $\theta = (25 \times 360) / 65 = 138^\circ$, draw the sector of radius $R = 65$ mm, and divide it into 8 equal generator divisions.
5. Project cut points $1'$ to $5'$ horizontally to the outer true-length generator $o'e'$, transfer these true radial distances onto the corresponding development generators, and join with a smooth curve.

![Step 147.1: Orthographic projections of cone with cutting plane](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-088-panel-2.webp)

![Orthographic projections and surface development of a cut cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-089-panel-1.webp)

**Answer:** True slant length $R = 65$ mm and sector angle $\theta = 138^\circ$, bounded at the top by a smooth symmetrical curve.

#### Problem 149: Cone cut by horizontal and inclined planes
**Given:** A cone of base diameter 50 mm and height 60 mm rests on HP, cut by a horizontal plane 15 mm below the apex and a 30° plane passing through the extreme left base point.
**Find:** The lateral surface development of the lower portion of the cone.

1. Draw the Top View circle (diameter 50 mm) with 8 generators and project the Front View (height 60 mm, true slant length $R = 65$ mm).
2. Draw the 30° plane from left base point $a'$ (giving points $1'$ to $5'$) and the horizontal plane 15 mm below $o'$ (giving point $6'$).
3. Draw the development sector of radius $R = 65$ mm and angle $\theta = (25 \times 360) / 65 = 138^\circ$, divided into 8 equal parts.
4. Project $1'$ to $6'$ horizontally to the outer true-length generator, transfer the radial distances to the development generators (swinging a constant-radius arc for the horizontal cut $6'$), and draw the smooth boundary.

![Orthographic projections of a cone cut by section planes (Step 149.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-090-panel-1.webp)

![Orthographic projections and development of the lateral surface of a truncated cone (Step 149.2)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-090-panel-2.webp)

**Answer:** True slant length $R = 65$ mm and sector angle $\theta = 138^\circ$, with a lower curved cut starting from $A$ and an upper circular arc cut near the apex.

#### Problem 150: Conical sugar jar full-loop shortest path
**Given:** A conical vessel of base diameter 50 mm and height 60 mm rests on HP; an ant starts at the extreme left base point, loops once around the surface, and returns to the start.
**Find:** The shortest path of the ant in both the front and top views.

1. Draw the Top View (diameter 50 mm, 8 generators) and Front View (height 60 mm, true slant length $R = 65$ mm).
2. Construct the development sector of radius $R = 65$ mm and angle $\theta = 138^\circ$ divided into 8 equal parts.
3. Draw a straight chord directly from starting point $A$ on one edge of the sector to the final point $A$ on the other edge to represent the shortest full loop.
4. Measure the radial distances from $O$ where the chord crosses the 8 generators, mark them on the outer true-length line in the Front View, and project horizontally inward to the respective generators ($1'$ to $5'$).
5. Project the Front View path points down to the Top View generators (transferring the center generator point via the outer generator) and join with smooth curves in both views.

![Orthographic projections and development of the surface of a cone showing shortest path of an ant](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-091-panel-2.webp)

**Answer:** True slant length $R = 65$ mm and sector angle $\theta = 138^\circ$, with the straight chord $A$-$A$ projecting as a smooth loop rising to peak $5'$ in the Front View.

#### Problem 152: Cone shortest path to the diametrically opposite point
**Given:** A cone of base diameter 50 mm and height 60 mm rests on HP; an insect travels along the surface from a base point to the diametrically opposite base point.
**Find:** The shortest distance and the path in both the front and top views.

1. Draw the Top View (diameter 50 mm, 8 generators) and Front View (height 60 mm, true slant length $R = 65$ mm).
2. Construct the development sector of radius $R = 65$ mm and angle $\theta = 138^\circ$ divided into 8 equal parts from $A$ to $A$, where the middle generator $OE$ is the diametrically opposite position.
3. Draw a straight line on the development from starting base point $A$ to the middle generator base point $E$ and measure its length.
4. Transfer the radial distances where line $AE$ crosses generators $OB, OC, OD$ back to the outer true-length line in the Front View, and project horizontally to the corresponding generators ($1', 2', 3', 4', 5'$).
5. Project these points down to the Top View generators and trace the smooth curve from $a$ to $e$ in both views.

![Orthographic projections and surface development of a cone showing the shortest path of an insect](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-092-panel-2.webp)

**Answer:** The shortest path is the straight line $A$-$E$ across half the development sector ($69^\circ$ central angle on radius $R = 65$ mm), projecting as a single rising and falling curve from $a'$ to $e'$.

#### Problem 153: Semicircular cone development with an inscribed circle
**Given:** The development of a right circular cone is a semicircle of radius 60 mm, and the largest possible circle is inscribed inside this development.
**Find:** The projections of the inscribed circle in both the front and top views.

1. Since the development is a semicircle ($\theta = 180^\circ$) of slant radius $L = 60$ mm, calculate the cone base radius from $180^\circ = (r \times 360) / 60$ to get $r = 30$ mm (base diameter 60 mm).
2. Draw the Top View circle of diameter 60 mm divided into 8 generators and project the Front View with true slant length $L = 60$ mm.
3. Draw the semicircular development of radius 60 mm divided into 8 generators, and inscribe the largest possible circle (diameter 60 mm, radius 30 mm) tangent to the base diameter $A$-$A$ at $O$ and tangent to the outer arc at the middle generator.
4. Mark the intersection points of the inscribed circle with each radial generator on the development, and transfer their radial distances from $O$ to the outer true-length line in the Front View.
5. Project these heights horizontally to the corresponding generators in the Front View, then project down to the Top View generators and draw smooth closed curves in both views.

![Orthographic projections and surface development of a cone with an inscribed circle](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-3/assets/page-093-panel-2.webp)

**Answer:** Cone base diameter is 60 mm, inscribed circle radius is 30 mm, projecting as a closed loop touching the apex and middle generator base in the Front View.
