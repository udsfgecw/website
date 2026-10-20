<!-- page 1 | Start here -->

## Orthographic Projections of Solids Inclined to Both Reference Planes

This notebook teaches how to draw multi-stage orthographic projections of three-dimensional solids—prisms, pyramids, cylinders, cones, and cubes—inclined to both the Horizontal Plane (HP) and Vertical Plane (VP). Learners will master the three-stage change-of-position method, visibility rules, apparent angle (locus) constructions, and special geometric conditions such as freely suspended solids.

**Before you start:** First-angle orthographic projection fundamentals (XY reference line, Front View above XY, Top View below XY); Orthographic projections of points, straight lines (including true length and apparent inclination), and regular plane figures; Basic geometric constructions of regular polygons (triangles, squares, pentagons, hexagons) and division of circles.

### Your path through this module

1. **Classification of Solids and the Simple Position**: Every multi-stage solid projection begins in a 'simple position' with the axis perpendicular to a reference plane, oriented so the resting edge or corner lies at the extreme right or left.
2. **The Three-Stage Change-of-Position Method and Visibility Rules**: By tilting the solid in two successive stages—first changing its elevation angle without altering widths from the XY line, then rotating its plan without altering heights—we can project any 3D orientation onto 2D paper.
3. **Solids of Revolution and Resting on Faces, Slant Edges, or Generators**: Curved solids are projected by tracking eight equally spaced generators around their circular base, and conditions like 'resting on a slant face or generator' simply mean rotating that line directly onto the XY line.
4. **True vs. Apparent Inclination (The Locus Method) and Profile Plane Cases**: When a line is already tilted to HP, its top view is foreshortened, so to incline it at a true angle to VP we must use a locus construction to find the larger apparent angle (beta) in the top view.
5. **Freely Suspended Solids and Solids Resting on the Vertical Plane (VP)**: A freely hanging solid tilts until the line joining its suspension corner and its center of gravity is vertical, while a solid resting on VP simply swaps the roles of the front and top views across all three stages.
6. **Practice: Polyhedra on HP with Direct Stage-3 Rotation**: When a resting base edge lies on HP (preserving its true length) or the top-view angle with XY is explicitly given, Stage 3 is drawn by rotating the Stage 2 top view directly by the stated angle.
7. **Practice: Cones and Cylinders on HP with Direct Stage-3 Rotation**: By dividing the circular base into eight points and tracking them through three stages, we can accurately plot the elliptical projections of cones and cylinders tilted on base points or generators.
8. **Practice: Pyramids and Cubes on HP with Special Face, Edge, and Diagonal Conditions**: Geometric statements like 'resting on a triangular face', 'slant edge vertical', or 'body diagonal perpendicular to VP' replace numeric angles by telling us which line in the solid must be made horizontal or vertical.
9. **Practice: True Inclination to Both Planes (Locus and Profile Plane Problems on HP)**: Whenever a problem specifies the true angle of an already-inclined axis or slant edge with VP, you must first construct a locus triangle to find the enlarged apparent angle beta before rotating the Stage 2 top view.
10. **Practice: Solids Resting on the Vertical Plane (VP)**: When a solid rests on VP, the entire three-stage procedure is mirrored across the XY line: draw the true base in the Stage 1 front view, tilt to VP in the Stage 2 top view, and rotate to HP in the Stage 3 front view.
11. **Practice: Real-World Equilibrium—Freely Suspended Pyramids**: A pyramid suspended from a base corner naturally settles so that its center of gravity (one-quarter of the height up the axis) hangs directly below the suspension corner.

<!-- page 2 | Classification of Solids and the Simple Position -->

## Classification of Solids and the Simple Position

You already know how to project points, lines, and flat planes onto the Horizontal Plane (HP) and Vertical Plane (VP). This lesson shows you how to set up three-dimensional solids in their starting upright view—the essential first step before tilting them in space.

Look around a workshop and you will see two main families of machine parts: flat-sided blocks and round turned shafts. In engineering drawing, flat-sided solids are called **polyhedra**, and round ones are **solids of revolution**. Both share an **axis**, which is an imaginary center line running from the center of the bottom **base** to the top.

| Solid Type | Base & Top | Side Surfaces | Key Lines |
| :--- | :--- | :--- | :--- |
| **Regular Prism** | Two identical polygons | Rectangular **lateral faces** | Parallel **longer edges** |
| **Cube (Hexahedron)** | Six equal squares | Square faces | 12 equal edges |
| **Regular Pyramid** | One polygon base, one point (**apex**) | Triangular lateral faces | **Slant edges** meeting at the apex |
| **Cylinder / Cone** | Two circles / One circle and an apex | Curved surface | Imaginary straight **generators** |

Because a cylinder or cone has no sharp side edges, we divide its base circle into 8 or 12 equal parts and draw straight lines—**generators**—up the curved surface to give us points to track.

You cannot draw a tilted solid directly because neither the top view nor the front view shows its true shape. Instead, we start in a **simple position**, standing the solid upright so its base is flat against one reference plane. The rule is: if the solid will first tilt relative to the HP, stand it with its axis perpendicular to the HP; if it will first tilt relative to the VP, place its axis perpendicular to the VP. On your drawing, the view looking straight down the axis shows the base in its exact true size and shape.

Before drawing that true-shape polygon, imagine tipping a cereal box onto one bottom edge versus tipping it onto a single sharp corner. The part that stays on the table acts as a hinge. In your first view, you must place this hinge at the extreme right (or extreme left). If the solid rests on a **base edge**, draw that edge perpendicular to the reference line $XY$ on the right side. If it rests on a **base corner**, place that single point at the far right, with the two meeting edges angled equally away from $XY$.

### Worked example

Set up the simple position for a pentagonal pyramid (base side 30 mm, axis 60 mm) that will rest on a base edge on the HP and tilt toward the HP.

1. **Choose the axis plane:** Since the first tilt is with the HP, place the axis perpendicular to the HP. The top view will show the true pentagonal base.
2. **Orient the base (Top View):** Below the $XY$ line, draw a vertical line 30 mm long on the right side. This is the resting base edge, perpendicular to $XY$. Complete the regular pentagon to the left of this edge, and connect all five corners to the center to show the slant edges meeting at the apex.
3. **Project the elevation (Front View):** Project the corners up to the $XY$ line to form the flat base. From the center, measure 60 mm straight up along the axis to mark the apex, and connect it to the base corners to finish the triangle.

### Remember

* Tilt with HP first $\rightarrow$ start with the axis perpendicular to HP (true base in the top view).
* Resting on a base edge $\rightarrow$ draw that edge perpendicular to $XY$ on the extreme right or left.
* Resting on a base corner $\rightarrow$ place that single corner on the extreme right or left.

<!-- page 3 | The Three-Stage Change-of-Position Method and Visibility Rules -->

## The Three-Stage Change-of-Position Method and Visibility Rules

In the previous lesson, you learned to draw a solid standing upright in its simple position with the resting edge or corner placed at the extreme right or left. Now, we will use a step-by-step graphical method to tilt that solid to one reference plane and rotate it to the second, while tracking which edges remain visible to the observer.

Imagine tilting a hardcover book on your desk and then spinning it. Trying to draw that final, doubly tilted book all at once is nearly impossible because every edge appears foreshortened. Instead, we use the **three-stage change-of-position method**, a technique that breaks a complex 3D movement into three easy 2D drawings: Stage 1 is the simple position, Stage 2 tilts the solid to one plane, and Stage 3 rotates it to the second plane.

In Stage 2, we tilt the Stage 1 front view (or top view) without changing its shape. Because the axis is perpendicular to the base, tilting the axis to the Horizontal Plane (HP) by an angle $\theta_{\text{axis}}$ automatically tilts the base by the complementary angle:
$$\theta_{\text{base}} = 90^\circ - \theta_{\text{axis}}$$
To build the new matching view, we use the **projector intersection rule**: draw vertical **projectors** (straight construction lines) from the tilted view and intersect them with horizontal **locus lines** (paths of constant distance from the $XY$ line) coming from the Stage 1 view. In simple words, when a solid tilts up or down in the front view, its corners keep their exact front-to-back distances in the top view.

In Stage 3, we take the newly drawn Stage 2 top view and rotate it as a rigid shape so its axis makes the required angle with the Vertical Plane (VP). Watch the directional instruction carefully: place the **apex** (top point) closer to the $XY$ line if it is "nearer to VP," or farther down if it is "nearer to the observer." Projecting vertically up to meet horizontal locus lines from the Stage 2 front view gives the final Stage 3 front view.

Finally, a solid is opaque, so you must distinguish continuous visible lines from dashed **hidden edges** (edges blocked from sight by the body of the solid). Always apply four visibility rules in order:
1. The outer **boundary** (outline) of any view is always a continuous visible line.
2. Look at the adjacent view to find the corner closest to the observer; all edges meeting at this nearest corner are visible.
3. Find the corner farthest from the observer (closest to the $XY$ line when looking from the front or top); all internal edges meeting at this hidden corner are dashed.
4. Two continuous visible lines can never cross each other inside the boundary—if two lines intersect, at least one must be dashed.

### Worked example
A square pyramid (base 30 mm, axis 50 mm) rests on a base edge on HP with its axis inclined at 40° to HP, and the resting edge inclined at 30° to VP.

1. **Draw Stage 1 (Simple Position):** Draw a 30 mm square below $XY$ with its right edge perpendicular to $XY$ (so the resting edge is on the extreme right). Project up to draw the triangle front view of height 50 mm.
2. **Tilt for Stage 2 (Inclined to HP):** Since $\theta_{\text{axis}} = 40^\circ$, calculate $\theta_{\text{base}} = 90^\circ - 40^\circ = 50^\circ$. Redraw the Stage 1 triangle along $XY$ with its base tilted at 50° and the right base corner touching $XY$.
3. **Project the Stage 2 top view:** Drop vertical projectors from the tilted triangle to meet horizontal locus lines from the Stage 1 square. Connect the outer boundary continuously. In the tilted front view, the resting right edge is lowest (farthest from a top observer), so draw that edge as a dashed line in the Stage 2 top view.
4. **Rotate for Stage 3 (Inclined to VP):** Copy the entire Stage 2 top view, rotating it so the dashed resting edge makes 30° with $XY$. Project vertically up to meet horizontal locus lines from the Stage 2 front view, and apply the four visibility rules to finish.

### Remember
* Never change the shape or size of the view you are rotating between stages; only change its angle.
* Base and axis inclinations to the same plane always add up to 90° ($\theta_{\text{base}} = 90^\circ - \theta_{\text{axis}}$).
* Always draw the outer boundary continuous first, then check the adjacent view to find the nearest (visible) and farthest (hidden) corners.

<!-- page 4 | Solids of Revolution and Resting on Faces, Slant Edges, or Generators -->

## Solids of Revolution and Resting on Faces, Slant Edges, or Generators

You already know how to tilt prisms and pyramids through given angles using the three-stage method. This lesson shows you how to project curved solids that have no sharp corners, and how to tilt a solid when the problem gives a physical resting condition instead of a number of degrees.

Imagine trying to project a smooth traffic cone onto paper; unlike a pyramid, it has no sharp slant edges to track from view to view. To give ourselves points to project, we invent imaginary straight lines on the curved surface called **generators**, which run from the circular base to the apex (for a cone) or between the two circular bases (for a cylinder). In Stage 1, divide the circular view into 8 equal parts ($45^\circ$ sectors) using your $45^\circ$ set-square, label the 8 base points, and project them to the other view as light generator lines.

When you tilt a cone or cylinder in Stage 2 and project those 8 base points, the circle foreshortens into an oval shape called an **ellipse**. Join the 8 projected points with a smooth freehand curve. To finish the solid's outer boundary, draw straight lines from the apex (or second base) that just kiss the outside of the ellipse as **tangents**—do not simply stop at the widest numbered points.

Sometimes a problem does not state an angle, such as tipping a party hat until its side lies flat on a table, or standing a pyramid so one sloping side is vertical. Because your Stage 1 right-hand line represents the true length of a slant edge, triangular face, or extreme generator, you can rotate the Stage 1 figure directly to match the words of the problem:

| Problem Condition | Stage 2 Action (Front View) |
| :--- | :--- |
| Resting on a slant edge, triangular face, or generator on HP | Rotate the Stage 1 front view until that right-hand line lies flat on the $XY$ line. |
| Slant edge or triangular face perpendicular to HP | Rotate the Stage 1 front view until that right-hand line stands vertically ($90^\circ$ to $XY$). |

A cube has a special internal line called the **body diagonal** (or space diagonal), which connects a bottom corner to the opposite top corner straight through the center of the block. If you place the cube in Stage 1 with a base diagonal parallel to $XY$, the front view shows the true length of this body diagonal as a slanted line from the bottom-left to the top-right corner. You can then rotate the Stage 2 front view to make this diagonal either parallel or perpendicular to $XY$.

### Worked example

Draw a cone (base diameter 40 mm, axis 60 mm) resting on a generator on HP, with its axis parallel to VP.

1. **Draw Stage 1 in simple position:** Draw a circle of diameter 40 mm in the top view below $XY$. Divide it into 8 equal parts, labeling the horizontal diameter $a$-$e$ (with $e$ on the extreme right). Project these up to the $XY$ line, mark the apex $o'$ 60 mm above the center, and draw the triangular front view. The right-hand boundary $o'e'$ is the extreme generator.
2. **Tilt onto the generator in Stage 2:** Copy the triangular front view so that line $o'e'$ lies completely flat along the $XY$ line. Use your compass to transfer the base width $a'e'$ and side $o'a'$ so the triangle stays rigid.
3. **Project the Stage 2 top view:** Drop vertical projectors from the tilted apex $o'_1$ and all 8 base points on $a'_1e'_1$, intersecting horizontal projectors from the Stage 1 circle. Join the 8 base intersections into a smooth ellipse, and draw two straight lines from the new apex $o_1$ tangent to the outer curve of the ellipse.

### Remember

- Divide circular bases into 8 equal sectors in Stage 1 so you have points to project as ellipses in later stages.
- Always draw the outer boundaries of tilted cones and cylinders tangent to the smooth ellipse.
- "Resting on HP" means rotating the Stage 1 right-hand edge, face, or generator directly onto the $XY$ line in Stage 2.

<!-- page 5 | True vs. Apparent Inclination (The Locus Method) and Profile Plane Cases -->

## True vs. Apparent Inclination (The Locus Method) and Profile Plane Cases

So far, we have rotated the second-stage view directly by the angle given in the problem, which only works when that angle is the view's apparent angle or the tilted line is still in true length. This lesson teaches you how to handle problems where an already tilted axis or edge is given a true angle to the second reference plane.

Imagine holding a pencil tilted up from your desk (the Horizontal Plane, HP) and ALSO angled toward the wall behind it (the Vertical Plane, VP). Because the pencil slopes upward, its shadow on the desk is shorter than the actual pencil; this shrinking in a projection is called **foreshortening**. If you now pivot the pencil without changing its upward tilt, that shorter shadow makes a steeper angle with the wall line than the real pencil makes in 3D space. We call the real 3D angle the **true inclination** ($\phi$) and the steeper angle of the shadow on the drawing the **apparent inclination** ($\beta$).

Look closely at the wording in your problem statement to know whether to rotate directly or find $\beta$ first:

| Problem Wording | Angle Given | Stage 3 Action |
| :--- | :--- | :--- |
| "Top view of axis inclined at $\phi$ to VP" or "vertical plane containing axis inclined at $\phi$" | Apparent angle ($\beta$) | Rotate Stage 2 plan directly at $\phi$ to XY. |
| "Axis (or slant edge) is inclined at $\theta$ to HP and $\phi$ to VP" | True angle ($\phi$) | Construct the locus to find $\beta$ ($\beta > \phi$). |

A **locus** is simply a line showing all possible positions of a moving point at a constant distance from a reference plane. When the axis has true length $L$ in Stage 1 and foreshortened length $L_1$ in the Stage 2 top view, you cannot place $L_1$ directly at the true angle $\phi$ to XY. Instead, you first draw $L$ at $\phi$ to find how far the end of the axis sits from XY (its locus), and then fit the shorter length $L_1$ into that exact same distance. On your drawing, the shorter line $L_1$ must swing steeper to reach the same locus line, automatically giving you the apparent angle $\beta$.

A special case occurs when the two true angles add up to 90° ($\theta + \phi = 90^\circ$). Hold your pencil up at 30° to the floor and 60° to the wall: it must point straight toward the wall, lying entirely in a **Profile Plane (PP)**—a flat plane perpendicular to both HP and VP. Whenever $\theta + \phi = 90^\circ$, the apparent angle $\beta$ is simply 90°, so you rotate the Stage 2 top view until the axis is perpendicular to the XY line without needing a locus construction.

### Worked example

Suppose a cone's axis of true length $L = 60$ mm is inclined at $\theta = 30^\circ$ to HP and $\phi = 45^\circ$ to VP. After drawing Stages 1 and 2, the Stage 2 top view of the axis measures a foreshortened length $L_1 = 52$ mm. Let us find the Stage 3 orientation:

1. **Draw the true angle line:** Below the XY line, pick a starting point $o_1$ (representing the apex) and draw a light construction line inclined at the true angle $\phi = 45^\circ$ to XY. This models the true 3D tilt before foreshortening.
2. **Establish the locus:** Along this 45° line, measure the true axis length $L = 60$ mm from $o_1$ to mark point $p$, and draw a horizontal line (parallel to XY) through $p$. This horizontal line is the locus of the base center, fixing its true distance in front of VP.
3. **Find the apparent angle ($\beta$):** With your compass set to the foreshortened Stage 2 axis length $L_1 = 52$ mm and centered at $o_1$, swing an arc to cut the horizontal locus line at $p_1$. Join $o_1$ to $p_1$; this line makes the steeper apparent angle $\beta$ (about 55°) with XY, and you now redraw the Stage 2 top view along $o_1 p_1$.

### Remember

* Only use the locus construction when the line being angled to VP is already inclined to HP (so its top view is foreshortened) AND the problem gives its true angle to VP.
* The apparent angle $\beta$ is always larger than the true angle $\phi$ because the foreshortened length $L_1$ is shorter than the true length $L$.
* If the true angles with HP and VP add up to 90° ($\theta + \phi = 90^\circ$), skip the locus construction and place the Stage 3 axis line perpendicular (90°) to the XY line.

<!-- page 6 | Freely Suspended Solids and Solids Resting on the Vertical Plane (VP) -->

## Freely Suspended Solids and Solids Resting on the Vertical Plane (VP)

You have learned how to tilt solids by given angles and find apparent angles using the locus method. This final theory lesson shows you how to draw a solid hanging freely from a string, and how to handle solids that rest against the vertical wall (VP) instead of the floor (HP).

Imagine tying a string to one corner of a heavy wooden pyramid and lifting it into the air. The pyramid will swing and settle into a natural tilt. This happens because of its **center of gravity (CG)**, the single balance point where all the solid's weight acts. For any prism or cylinder, the CG is on the axis at half the height ($h/2$). For any pyramid or cone, because most of the bulk is near the bottom, the CG lies on the axis at one-fourth the height ($h/4$) measured up from the base.

When a solid hangs freely from a corner, gravity pulls the CG straight down until it rests directly below the hanging corner. The straight line joining the suspension corner to the CG is called the **line of suspension**. On your drawing, you mark the CG as $g'$ on the axis in the Stage 1 front view, join it to the hanging corner (placed at the extreme right or left), and then rotate the Stage 2 front view so this line of suspension stands perpendicular to the $XY$ line, with the corner at the top.

Now imagine pushing a solid against a wall (VP) instead of setting it on the floor (HP). Everything you learned about the three stages still works, except the front view and top view swap jobs. You start Stage 1 with the axis perpendicular to VP, so the true shape of the base appears in the front view.

| Stage | Solid Resting on HP | Solid Resting on VP |
| :--- | :--- | :--- |
| **Stage 1** | Top view shows true base. | Front view shows true base. |
| **Stage 2** | Rotate front view (tilt to HP). | Rotate top view (tilt to VP). |
| **Stage 3** | Rotate top view (tilt to VP). | Rotate front view (tilt to HP). |

### Worked example

A square pyramid (base 30 mm, axis 60 mm) is freely suspended from one of its base corners so that its axis is parallel to VP. Draw its projections.

1. **Draw Stage 1 on HP:** Since a corner is the key point, draw a 30 mm square in the top view with all sides at 45° to $XY$. Name the extreme right corner $c$.
2. **Project the Stage 1 front view:** Draw the triangle of height 60 mm sitting on $XY$. The extreme right base corner is $c'$.
3. **Locate the CG:** Measure $60 / 4 = 15$ mm up along the axis from the base and mark $g'$. Draw a light line joining $c'$ to $g'$.
4. **Rotate for Stage 2:** Copy the front view triangle Above $XY$ so that the line $c'g'$ is perpendicular to $XY$, with $c'$ above $g'$. Project down from Stage 2 and across from Stage 1 to complete the top view.

### Remember
- The center of gravity (CG) of a pyramid or cone is on its axis at $h/4$ from the base; for a prism or cylinder, it is at $h/2$.
- For a freely suspended solid, rotate the Stage 2 front view until the line joining the hanging corner and $g'$ is perpendicular to $XY$.
- When a solid rests on VP, start with the true base in the front view, tilt the top view in Stage 2, and rotate the front view in Stage 3.

<!-- page 7 | Practice: Polyhedra on HP with Direct Stage-3 Rotation -->

## Practice: Polyhedra on HP with Direct Stage-3 Rotation

With the three-stage method and visibility rules in hand, we start practicing on prisms and pyramids resting on HP. What is new here is recognizing when the third stage requires a direct angle rotation without a locus construction, and controlling the exact quadrant orientation of the solid.

### The idea

In a three-stage projection, Stage 3 rotates the Stage 2 top view without changing any point's height above HP. You do not need a locus construction whenever the line whose inclination to VP is given appears in **true length** in the Stage 2 top view, or when the problem directly states the angle made by the **top view** with the $xy$ line.

First, consider a solid resting on a **base edge on HP**. Because that resting edge lies flat on HP throughout Stage 2, its top view remains in true length. When the problem states that this resting base edge is inclined at an angle $\phi$ to VP, you simply rotate the Stage 2 top view so that the resting edge makes the true angle $\phi$ directly with the $xy$ line. Similarly, if the problem states that the **vertical plane containing the axis** (or the **top view of the axis or slant edge**) is inclined at $\phi$ to VP or $xy$, that angle is already a plan angle, so you rotate the top view directly by $\phi$.

Second, pay attention to **apex orientation** in pyramids. In Stage 2, tilting the solid on a right-side base edge tips the apex to the right; tilting it on a left-side base edge tips the apex to the left. In Stage 3, rotating the top view so the apex moves below the resting edge (further from $xy$) places the **apex away from VP**, whereas rotating it so the apex lies closer to $xy$ places the **apex towards VP**.

### Worked example

**Problem Q211 (51): Triangular prism resting on a base edge inclined to VP**
**Given:** A triangular prism of base edge 30 mm and length 50 mm rests on a base edge on HP, with its axis inclined at 35° to HP and the resting base edge inclined at 45° to VP.
**Find:** Draw the three-stage orthographic projections of the prism.

1. **Stage 1 (Simple position):** Draw the top view as an equilateral triangle $abc(123)$ of side 30 mm below $xy$ with edge $b(2)-c(3)$ vertical on the right so the resting edge becomes a point in elevation; project the front view as a rectangle of height 50 mm above $xy$.

> **Figure: Step 211-1: Initial projection of triangular prism resting with its base on HP**
>
> Initial stage (Step 211-1) of projecting a triangular prism with base edge 30 mm and height 50 mm:
> - A horizontal reference line labelled 'x' on the left and 'y' on the right.
> - Text boxes to the left of the drawing specify: 'B = 30', 'H = 50', 'SCALE 1:1', and 'ALL DIMENSIONS ARE IN mm'.
> - Top view (below xy line): An equilateral triangle with edge length 30 mm, oriented such that vertical edge c(3)-b(2) is perpendicular to the xy line on the right, and apex a(1) points to the left. Dimension 30 is shown along the edge a(1)-b(2).
> - Front view (above xy line): A rectangle of height 50 mm resting on the xy line. The bottom corners are labelled 1' on the left and 2'(3') on the right. The top corners are labelled a' on the left and b'(c') on the right. The left vertical edge has a height dimension of 50.
> - Vertical projection lines connect top view vertex a(1) to front view base point 1' (and top a'), and edge c(3)-b(2) to base point 2'(3') (and top b'(c')).

2. **Stage 2 (Front view):** Redraw the front view tilted on the right base edge $2'(3')$ on $xy$ so the axis is inclined at 35° to $xy$ (the base makes $90^\circ - 35^\circ = 55^\circ$ with $xy$).

> **Figure: Orthographic projection of a triangular prism - Step 211-2: Front view tilted at 35 degrees**
>
> Step 211-2 of triangular prism projection. Given base edge B = 30 mm, height H = 50 mm. In the first position: Top view shows an equilateral triangle with vertices a(1) on the left, b(2) and c(3) on a vertical line on the right; edge a(1)-b(2) is dimensioned as 30. Front view directly above XY line is a vertical rectangle of height 50 mm and base spanning from projector 1' to projector 2'(3'), top vertices are a' and b'(c'). In the second position: Front view is rotated and rests on point 2'(3') on the XY line, with its bottom face inclined at an angle of 35° to the XY line; vertices labelled 1', 2'(3'), a', and b'(c'). The second top view has not yet been projected.

3. **Stage 2 (Top view):** Project vertically down from the tilted front view and horizontally from the Stage 1 top view to complete the foreshortened Stage 2 top view, marking the hidden lower edge $2-3$ as dashed.

> **Figure: Orthographic projection of a triangular prism - Step 211-3: Projection of final top view**
>
> Step 211-3 of triangular prism projection. Given base edge B = 30 mm, height H = 50 mm. Stage 1 shows the reference front view (rectangle of height 50 mm) and top view (triangle with side 30 mm). Stage 2 shows the front view inclined at 35° resting on base corner 2'(3') on the XY line. In Stage 3, projectors are dropped down from the tilted front view and drawn horizontally from the initial top view to construct the second top view: visible outline formed by points 1, 2, b, c, 3, 1; vertex a inside connects to b and c with solid lines; hidden edge connecting base vertices 2 and 3 is shown as a dashed line.

4. **Stage 3 (Top view):** Because the resting base edge $2-3$ stays on HP in true length, rotate the Stage 2 top view directly so edge $2-3$ is inclined at 45° to $xy$.

> **Figure: Orthographic projections of a triangular prism in three stages (Problem 211-4)**
>
> Three-stage projection of an equilateral triangular prism with base side B = 30 mm and axis height H = 50 mm. Scale 1:1, all dimensions in mm. Given box: B = 30, H = 50. Stage 1 (Simple position): Front view is a rectangle of height 50 mm resting on the XY line, labeled a' and b'(c') at the top, 1' and 2'(3') on the XY line. Top view is an equilateral triangle of side 30 mm, vertex a(1) pointing to the left and vertical side b(2)-c(3) on the right. Stage 2 (Base/axis inclined to HP): Front view is tilted such that the base edge 2'(3') rests on the XY line, inclined at 35° to the horizontal. Vertices are labeled 1', a', b'(c'), 2'(3'). Top view is projected downwards from front view and horizontally from stage 1 top view; hidden edge 2-3 is shown dashed, vertices labeled 1, 2, 3 and a, b, c. Stage 3 (Inclined to VP): Top view is reproduced with the axis/edge inclined at 45° to the projector line, vertices labeled 1, 2, 3 and a, b, c with edge 2-3 dashed.

5. **Stage 3 (Front view):** Project vertically up from the Stage 3 top view and horizontally from the Stage 2 front view to complete the final front view, drawing visible edges solid and hidden edges dashed.

> **Figure: Complete orthographic projections of a triangular prism in three stages (Problem 211-5)**
>
> Complete three-stage orthographic projection of an equilateral triangular prism with base side B = 30 mm and height H = 50 mm. Scale 1:1, all dimensions in mm. Given box: B = 30, H = 50. Stage 1: Front view is a rectangle with height 50 mm resting on the reference line x-y, labeled a', b'(c') on top and 1', 2'(3') at bottom. Top view is an equilateral triangle with side 30 mm, vertices a(1) pointing left and c(3)-b(2) on the right. Stage 2: Front view is tilted with base edge 2'(3') on the reference line, inclined at 35° to the HP; vertices labeled 1', a', b'(c'), 2'(3'). Top view projected below with hidden edge 2-3 dashed; vertices 1, 2, 3 and a, b, c. Stage 3: Top view reproduced inclined at 45° to the vertical projector line; vertices 1, 2, 3 and a, b, c with hidden edge 2-3 dashed. Final front view projected vertically from stage 3 top view and horizontally from stage 2 front view, showing all visible and hidden edges connecting vertices 1', 2', 3' and a', b', c'.

**Answer:** The three-stage projections of the 30 mm by 50 mm triangular prism with axis at 35° to HP and resting edge at 45° to VP are completed as shown.

### More problems

#### Problem Q51: Square pyramid, apex away from VP, right
**Given:** Square pyramid, base edge 40 mm, height 60 mm, base edge on HP inclined 45° to VP, axis 40° to HP, apex away from VP on the right.
**Find:** Draw the projections of the pyramid.

1. Draw a 40 mm square $abcd$ below $xy$ with $bc$ vertical on the right, and project a 60 mm tall triangle above $xy$.
2. Tilt the front view about the right base edge $b'(c')$ on $xy$ so the axis makes 40° with $xy$ (base at 50° to $xy$), placing the apex on the right.
3. Project down from the tilted front view and across from the first top view to draw the Stage 2 top view, with hidden base edge $b-c$ dashed.
4. Rotate the Stage 2 top view so resting edge $b-c$ is at 45° to $xy$ and apex $o$ points down away from $xy$ (away from VP) to the right.
5. Project up to meet horizontal projectors from the Stage 2 front view to complete the final front view.

> **Figure: Step 51.1: Simple position projections of a square pyramid standing on HP**
>
> Step 51.1 showing the initial simple position of a square pyramid:
> - A horizontal reference line labelled 'x' on the left and 'y' on the right.
> - Top View (below xy): A square base with vertices labelled a (bottom-left), b (bottom-right), c (top-right), and d (top-left). The base dimension is marked with a dimension line at the bottom as '□40'. Diagonals connect opposite corners ac and bd, intersecting at the center apex 'o'.
> - Front View (above xy): An isosceles triangle representing the front view of the pyramid resting on the HP (xy line). Base lies on the xy line with vertices labelled 'a'(d')' at the left end and 'b'(c')' at the right end. The apex is at the top labelled 'o''. Centerline (axis) is drawn from apex o' down to the base. A vertical dimension line on the left indicates height '60'.
> - Vertical projection lines connect the corners of the top view to the corresponding base points in the front view.
> - Inset label box: '51.1', with 'B = 40', 'H = 60'.

> **Figure: Projection of a square pyramid, step 51.2: tilting the front view**
>
> Step 51.2 of the projection of a square pyramid with base side B = 40 mm and height H = 60 mm.
> Left: Initial position showing front view (FV) above XY and top view (TV) below XY.
> - FV: Triangle with base on the XY line labelled a'(d') at the left and b'(c') at the right; height is dimensioned as 60 mm; apex is labelled o'; vertical centerline connects the midpoint of the base to apex o'.
> - TV: Square a-b-c-d of side dimensioned as □40 mm, with edges ab at the bottom, bc at the right, cd at the top, and da at the left; diagonals connect opposite vertices intersecting at center apex o.
> Right: The front view triangle is reproduced tilted such that the base a'(d')-b'(c') is inclined at an angle of 40° to the horizontal/XY line, resting on base edge b'(c') on the XY line; apex o' is at the top right.
> A box above displays:
> 51.2
> B = 40
> H = 60

> **Figure: Projection of a square pyramid, step 51.3: obtaining the second-stage top view**
>
> Step 51.3 of the projection of a square pyramid with base side B = 40 mm and height H = 60 mm.
> Left: Initial FV (isosceles triangle, base on XY, height 60) and TV (square 40x40 with diagonals intersecting at apex o).
> Right: Tilted FV with base a'(d')-b'(c') inclined at 40° to XY, resting on point b'(c') on XY line, apex o' at the top right.
> Below the tilted FV, vertical projection lines are drawn down from a'(d'), b'(c'), and o', and horizontal projection lines are drawn across from points a, b, c, d, and o of the initial TV to establish the second top view:
> - Base corner points a, b, c, d and apex o are located.
> - Outer boundary lines d-a, a-b, b-o, and o-c are solid visible outlines.
> - Slanted edge d-o is drawn as a solid visible line.
> - Slanted edges a-o and b-o form the outer outline or visible edges.
> - Base edge b-c is represented as a dashed (hidden) line.
> A box above displays:
> 51.3
> B = 40
> H = 60

> **Figure: Orthographic projections of a square pyramid tilted in two stages (Problem 51.4)**
>
> Three-stage projection of a square pyramid with base side B = 40 mm and height H = 60 mm:
> 1. Simple position:
>    - Front view: Isosceles triangle with base a'(d')-b'(c') of 40 mm lying on the XY reference line, height 60 mm to apex o'. Center axis shown with a centerline.
>    - Top view: Square a-b-c-d (dimension □40) with base edges parallel/perpendicular to the XY line. Diagonals meet at apex o.
> 2. First inclination (inclined to HP):
>    - Front view: The pyramid rests on base edge b'(c') on the XY line; the base a'(d')-b'(c') is inclined at 40° to the horizontal reference line XY.
>    - Top view: Projected downwards from the tilted front view; base edges a-d and b-c are vertical, with apex o projected to the right. Slant edges connect corners to o, with edge b-c shown dashed (hidden).
> 3. Second inclination (inclined to VP):
>    - Top view: The previous top view is reproduced with its axis inclined at 45° to the vertical plane/reference line.
>    (Final front view is not projected in this problem).

> **Figure: Complete orthographic projections of a square pyramid tilted in two stages (Problem 51.5)**
>
> Full three-stage orthographic projection of a square pyramid with base side B = 40 mm and height H = 60 mm:
> 1. Simple position:
>    - Front view: Triangle a'(d')-b'(c')-o' on the XY line (base 40 mm, height 60 mm).
>    - Top view: Square a-b-c-d of side 40 mm (dimensioned □40) with diagonals connecting to apex o.
> 2. Base inclined to HP:
>    - Front view: Pyramid tilted on base corner/edge b'(c') with base a'(d')-b'(c') making an angle of 40° with the XY reference line.
>    - Top view: Projected downward, showing the foreshortened base a-b-c-d and apex o to the right, with hidden base edge indicated by a dashed line.
> 3. Base/axis inclined to VP and final front view:
>    - Top view: Re-drawn rotated so that the axis/slant edge makes an angle of 45° with the XY reference line.
>    - Final front view: Projected upward to intersect horizontal projectors from the second-stage front view, forming the final front view with visible outline a'-b'-c'-o' and apex o', and hidden lines shown dashed for back edges.

**Answer:** Projections completed with base edge 40 mm, height 60 mm, axis at 40° to HP, and resting edge at 45° to VP (apex away from VP on the right).

#### Problem Q52 (53): Square pyramid, apex towards VP, right
**Given:** Square pyramid, base edge 40 mm, height 60 mm, base edge on HP inclined 45° to VP, axis 40° to HP, apex towards VP on the right.
**Find:** Draw the projections of the pyramid.

1. Construct the 40 mm square $abcd$ below $xy$ with $bc$ vertical on the right, and project the 60 mm tall triangular front view.
2. Redraw the front view resting on right edge $b'(c')$ with the base at 50° to $xy$ (axis at 40° to HP) so the apex tips right.
3. Project the Stage 2 top view below $xy$, marking hidden edge $b-c$ dashed.
4. Rotate the Stage 2 top view so edge $b-c$ makes 45° with $xy$, orienting apex $o$ upward towards $xy$ (towards VP) on the right.
5. Project vertically up and horizontally across to complete the Stage 3 front view, checking visibility from the bottom of the top view.

> **Figure: Step 52.1: Initial projections of a square pyramid resting on HP**
>
> Orthographic projection step 52.1 showing the simple position of a square pyramid with its base on HP:
> - Ground/reference line labelled 'x' on the left and 'y' on the right.
> - Box labelled '52.1' with 'B = 40' and 'H = 60'.
> - Front View (above xy line): Isosceles triangle with base on the xy line from a'(d') on the left to b'(c') on the right. Apex o' at height 60 mm above xy (dimensioned as 60 on the left). A chain-dotted vertical axis extends from the base center to apex o'.
> - Top View (below xy line): A square of side 40 mm (dimensioned as '□40' below) with corners labelled d (top-left), c (top-right), a (bottom-left), and b (bottom-right). Diagonals connect opposite corners intersecting at apex o.
> - Vertical projection lines connect top view and front view points.
> - Text at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 52.2: Projection of square pyramid tilted at 40 degrees**
>
> Step 52.2 of the projection of a square pyramid. A boxed label shows '52.2' with 'B = 40' (base side) and 'H = 60' (axis height). First stage: The top view is a 40 mm square labeled a, b, c, d with diagonals meeting at apex o. The front view is an isosceles triangle with base a'(d')-b'(c') lying on the ground/reference line xy, and height 60 mm to apex o'. Second stage: The front view is redrawn tilted such that the base a'(d')-b'(c') makes an angle of 40° with the horizontal reference line xy, resting on edge b'(c') on the xy line. The axis is shown as a centerline.

> **Figure: Step 52.3: Completed top view for tilted square pyramid**
>
> Step 52.3 of the projection of a square pyramid. A boxed label shows '52.3' with 'B = 40' and 'H = 60'. First stage: Shows the initial top and front views as in step 52.2. Second stage: Shows the tilted front view with the base inclined at 40° to the xy line, resting on b'(c'). Below it, the corresponding top view is constructed using horizontal projectors from the initial top view and vertical projectors from the tilted front view. Vertices are labeled a, b, c, d and apex o. The visible outer boundary includes edges d-c, c-o, o-b, b-a, and a-d; slant edges d-o and a-o are solid lines, while the base edge b-c under the solid is shown as a dashed hidden line.

> **Figure: Orthographic projections of a square pyramid for Problem 52.4**
>
> Multi-stage projection of a square pyramid with base side $B = 40\text{ mm}$ and height $H = 60\text{ mm}$, drawn to SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> - **Given Box**:
>   - $B = 40$
>   - $H = 60$
> - **Stage 1 (Simple position)**:
>   - Front View: Isosceles triangle with base $a'(d')-b'(c')$ of length 40 mm resting on the $xy$ line, vertical axis line of height 60 mm from the base to apex $o'$. Height dimensioned as 60.
>   - Top View: Square $a-b-c-d$ with side $\square 40$, edges parallel/perpendicular to $xy$. Diagonals intersect at apex $o$.
> - **Stage 2 (Base inclined)**:
>   - Front View: The front view is tilted such that the base $a'(d')-b'(c')$ rests on point $b'(c')$ on the $xy$ line and is inclined at $40^\circ$ to the $xy$ line (horizontal). Apex is $o'$.
>   - Top View: Projected downwards. Base edge $a-d$ is a vertical line on the left, base edge $b-c$ is a dashed vertical line in the middle. Slant edges $a-o$, $d-o$, $b-o$, $c-o$ converge to apex $o$ at the far right.
> - **Stage 3 (Turned in top view)**:
>   - The top view from Stage 2 is reproduced rotated such that its edge/axis is inclined at $45^\circ$ to the $xy$ line, showing points $a$, $b$, $c$, $d$, and apex $o$. Slant edge or hidden base edge shown dashed.

> **Figure: Orthographic projections of a square pyramid for Problem 52.5**
>
> Complete three-stage orthographic projection of a square pyramid with base side $B = 40\text{ mm}$ and height $H = 60\text{ mm}$, drawn to SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> - **Given Box**:
>   - $B = 40$
>   - $H = 60$
> - **Stage 1 (Initial position)**:
>   - Front View: Triangle $a'(d')-b'(c')-o'$ on the $xy$ line, with height dimensioned as 60 mm and base on $xy$.
>   - Top View: Square $a-b-c-d$ with side $\square 40\text{ mm}$ and diagonals converging at apex $o$.
> - **Stage 2 (Inclined to HP)**:
>   - Front View: Tilted on base corner $b'(c')$ on the $xy$ line, with the base inclined at an angle of $40^\circ$ to the $xy$ line. Apex is $o'$.
>   - Top View: Projected downwards with base $a-d$ as solid vertical line, base $b-c$ as dashed line, and apex $o$ on the right.
> - **Stage 3 (Inclined to VP and final front view)**:
>   - Top View: Tilted so that the reference line/edge is at $45^\circ$ to the horizontal/$xy$ line, showing corners $a, b, c, d$ and apex $o$.
>   - Front View: Projected upwards from Stage 3 top view and horizontally from Stage 2 front view. Visible edges form a solid outline with corners $c'$, $b'$, $o'$, $a'$, $d'$, and internal edges including dashed hidden edge connecting to corner $c'$.

**Answer:** Projections completed with base edge 40 mm, height 60 mm, axis at 40° to HP, and resting edge at 45° to VP (apex towards VP on the right).

#### Problem Q53 (54): Square pyramid, apex away from VP, left
**Given:** Square pyramid, base edge 40 mm, height 60 mm, base edge on HP inclined 45° to VP, axis 40° to HP, apex away from VP on the left.
**Find:** Draw the projections of the pyramid.

1. Draw the 40 mm square $abcd$ in the top view and the 60 mm tall triangle in the front view.
2. Tilt the front view onto the left base edge $a'(d')$ on $xy$ with the base at 50° to $xy$ (axis at 40° to HP) so the apex leans to the left.
3. Project the Stage 2 top view below $xy$, showing hidden resting edge $a-d$ dashed.
4. Rotate the Stage 2 top view so resting edge $a-d$ is at 45° to $xy$ with apex $o$ pointing downward away from $xy$ (away from VP) on the left.
5. Project up from the rotated top view and across from the Stage 2 front view to complete the final front view.

> **Figure: Step 53.1: Initial projection of a square pyramid standing on its base**
>
> Initial orthographic projection of the square pyramid (labeled 53.1):
> - Reference line labeled 'x' on the left and 'y' on the right.
> - Top View (below xy line): A square of side 40 mm with vertices labeled clockwise: bottom-left 'a', bottom-right 'b', top-right 'c', top-left 'd'. Diagonals connect opposite corners intersecting at central apex point 'o'. Horizontal dimension below 'ab' is marked '□40'.
> - Front View (above xy line): Isosceles triangle resting directly on the xy line with base vertices labeled 'a\'(d\')' on the left and 'b\'(c\')' on the right, and apex 'o\'' at the top. The vertical axis is drawn as a dashed centerline from the midpoint of base to apex 'o\''. Height from base to apex is dimensioned as 60 mm.
> - Annotation box beside the apex shows: 'B = 40', 'H = 60'.
> - Bottom note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 53.2: Tilting the front view of a square pyramid**
>
> Step 53.2 of projection of a square pyramid. Initial stage shows the pyramid resting on its square base on the HP: top view is a square abcd of side 40 mm with diagonals intersecting at apex o; front view is an isosceles triangle with base a'(d')-b'(c') on reference line x-y, axis height 60 mm to apex o'. Second stage shows the front view reproduced and tilted such that the base edge a'(d')-b'(c') is inclined at 40° to the reference line x-y, pivoting on point a'(d'). The axis is drawn with a long-dash short-dash line. Box 53.2 lists: B = 40, H = 60.

> **Figure: Step 53.3: Projecting the final top view of the tilted square pyramid**
>
> Step 53.3 of projection of a square pyramid. Shows horizontal projection lines from the initial top view and vertical projection lines from the tilted front view (inclined at 40° to x-y) to construct the final top view. In the final top view, the four base corners are labelled a, b, c, d, with hidden base edge a-d shown as a dashed line and visible edges a-b, b-c, c-d drawn solid. Slant edges o-a, o-b, o-c, o-d converge to apex o. Base side 40 mm, vertical height 60 mm. Box 53.3 lists: B = 40, H = 60.

> **Figure: Orthographic projections of a square pyramid - Problem 53.4**
>
> Projection of a square pyramid with base side B = 40 mm and height H = 60 mm.
> 
> - Stage 1 (Initial position):
>   - Front View: An isosceles triangle with base 40 mm lying on the reference line x-y and vertical axis of height 60 mm. Base vertices labeled a'(d') at left, b'(c') at right; apex labeled o' at top.
>   - Top View: A square of side 40 mm with vertices a (bottom-left), b (bottom-right), c (top-right), d (top-left). Diagonals connect opposite corners representing slant edges, intersecting at apex o.
> 
> - Stage 2 (First tilt):
>   - Front View: The pyramid is tilted such that base point a'(d') rests on the x-y line, and the base a'(d')-b'(c') is inclined at an angle of 40° to the horizontal / ground plane (x-y line). Slant face / edges extend to apex o'. Centerline shown dashed-dotted.
>   - Top View: Projected from the tilted front view; base edge c-d-a-b forms a foreshortened quadrilateral/rectangle, with apex o projected to the left. The base edge a-d is drawn dashed (hidden edge).
> 
> - Stage 3 (Second tilt / rotation):
>   - Top View: The figure from stage 2 top view is reproduced rotated such that an edge/axis is inclined at 45° to the vertical/reference line. Apex is labeled o', base corners labeled a, b, c, d (with dashed line for hidden edge from d to the apex/base).
>   - Scale: 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Orthographic projections of a square pyramid - Problem 53.5**
>
> Projection of a square pyramid with base side B = 40 mm and height H = 60 mm showing complete 3-stage projection.
> 
> - Stage 1 (Simple position):
>   - Front View: Isosceles triangle on x-y line of base 40 mm and height 60 mm. Labels: base left a'(d'), base right b'(c'), apex o'.
>   - Top View: Square of side 40 mm with corners a, b, c, d and apex o at the center connected by diagonals.
> 
> - Stage 2 (First inclination):
>   - Front View: Pyramid tilted with base corner a'(d') on x-y line, base inclined at 40° to the horizontal. Apex o' tilted left, base b'(c') elevated.
>   - Top View: Projected top view with base corners a, b, c, d and apex o. Hidden edge represented by a dashed line.
> 
> - Stage 3 (Second inclination / final views):
>   - Top View: Rotated so that its axis or centerline is at 45° to the horizontal/vertical. Corners labeled a, b, c, d and apex o.
>   - Front View: Final front view projected from the rotated top view and horizontally projected from stage 2 front view. Shows apex o', base points a', b', c', d' with visible solid lines and hidden edges shown with dashed lines connecting d' to other vertices. Base corner d' rests on the x-y line.
>   - Scale: 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** Projections completed with base edge 40 mm, height 60 mm, axis at 40° to HP, and resting edge at 45° to VP (apex away from VP on the left).

#### Problem Q54 (55): Square pyramid, apex towards VP, left
**Given:** Square pyramid, base edge 40 mm, height 60 mm, base edge on HP inclined 45° to VP, axis 40° to HP, apex towards VP on the left.
**Find:** Draw the projections of the pyramid.

1. Draw the Stage 1 top view (40 mm square $abcd$) and front view (60 mm tall triangle).
2. Tilt the front view on the left base edge $a'(d')$ so the base makes 50° with $xy$ (axis at 40° to HP), tipping the apex left.
3. Project down and across to complete the Stage 2 top view with hidden edge $a-d$ dashed.
4. Rotate the Stage 2 top view so edge $a-d$ is at 45° to $xy$ and apex $o$ points upward towards $xy$ (towards VP) on the left.
5. Project the final front view above $xy$ and apply visibility rules.

> **Watch out.** When the apex is tilted to the left and rotated towards VP, the base faces the observer in the front view, making all four base edges visible.

> **Figure: Step 1: Simple position projections of the square pyramid**
>
> Initial orthographic projections of a square pyramid resting on its base in the HP. Top view (below the XY line) shows a 40 mm square with corners labelled a (bottom-left), b (bottom-right), c (top-right), and d (top-left). Diagonals connect opposite corners, intersecting at center o. Base dimension is marked as '□40'. Front view (above the XY line) shows an isosceles triangular elevation resting on the reference line xy, with base endpoints labelled a'(d') and b'(c'), and apex o'. The axis is shown with a centerline, and height is dimensioned as '60' mm on the left. A box to the upper right contains: '54.1', 'B = 40', 'H = 60'. Below the top view is text: 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Orthographic projection of a square pyramid tilted to the HP (Step 54.2)**
>
> Step 54.2 of the projection of a square pyramid (base side 40 mm, height 60 mm):
> - Reference line labeled 'x' and 'y'.
> - First position:
>   - Front view: isosceles triangle with base vertices $a'(d')$ and $b'(c')$ resting on the xy line, apex $o'$ at a height of 60 mm. The axis is vertical (chain-dashed line).
>   - Top view: square of side 40 mm with vertices $a, b, c, d$ (edges parallel and perpendicular to the reference line), diagonals connecting opposite corners through apex center $o$.
> - Second position (Front view only):
>   - The pyramid is tilted so that the base line $a'(d')-b'(c')$ makes an angle of $40^\circ$ with the horizontal reference line, resting on base edge $a'(d')$. The apex $o'$ is tilted upwards and to the left. Triangular outline connects $a'(d')$, $b'(c')$, and $o'$.

> **Figure: Complete second stage orthographic projection of a square pyramid tilted to the HP (Step 54.3)**
>
> Step 54.3 of the projection of a square pyramid (base side 40 mm, height 60 mm):
> - First position shown on the left: front view (triangle of base 40 mm, height 60 mm with labels $a'(d')$, $b'(c')$, $o'$) and top view (square with diagonals, vertices $a, b, c, d$, and center $o$).
> - Second position:
>   - Front view: identical to 54.2, tilted pyramid resting on edge $a'(d')$ with base $a'(d')-b'(c')$ inclined at $40^\circ$ to the xy line.
>   - Top view: obtained by projecting downward from the tilted front view ($o'$, $a'(d')$, $b'(c')$) and horizontally from the first top view ($a, b, c, d, o$). Apex $o$ is on the left. The base forms a rectangle $a-b-c-d$ on the right. Slant edges $o-b$ and $o-c$ are visible solid lines; slant edges $o-a$ and $o-d$ are visible solid lines; the rear/bottom base edge connecting $a$ and $d$ is shown as a dashed (hidden) line. Visible outer profile is $o-c-b-o$.

> **Figure: Orthographic projections of a square pyramid tilted in stages (Problem 54.4)**
>
> Projection of a square pyramid with base side $B = 40\text{ mm}$ and height $H = 60\text{ mm}$ across three stages:
> - **Stage 1 (Simple Position):**
>   - Reference line $x-y$.
>   - Front View (above $xy$): An isosceles triangle representing the pyramid resting with its base on the HP. Height is dimensioned as $60\text{ mm}$. Apex labelled $o'$, base corners labelled $a'(d')$ on the left and $b'(c')$ on the right.
>   - Top View (below $xy$): A square with side dimension $\square 40\text{ mm}$, corners labelled $a, b, c, d$ counter-clockwise from bottom-left. Diagonal lines connect opposite corners intersecting at apex $o$.
> - **Stage 2 (Inclination to HP):**
>   - Front View: The front view from Stage 1 is tilted such that the base $a'(d')-b'(c')$ makes an angle of $40^\circ$ with the horizontal line / HP. Apex is $o'$, base corners are $a'(d')$ on the reference line and $b'(c')$ elevated.
>   - Top View: Projected downwards from the tilted front view and across from the Stage 1 top view. Forms an elongated hexagonal contour with apex $o$ pointing to the left and base $a-b-c-d$ on the right.
> - **Stage 3 (Inclination to VP):**
>   - Top View: The Stage 2 top view is reproduced tilted such that the edge or line through $d$ makes an angle of $45^\circ$ to the horizontal reference line / VP. Labelled points include $o, a, b, c, d$.
>   - Note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Complete orthographic projections of a square pyramid tilted in three stages (Problem 54.5)**
>
> Complete three-stage projection of a square pyramid with base side $B = 40\text{ mm}$ and height $H = 60\text{ mm}$:
> - **Stage 1:**
>   - Front View: Triangular front view with apex $o'$ at height $60\text{ mm}$, base on reference line $xy$ labelled $a'(d')$ to $b'(c')$.
>   - Top View: Square of side $\square 40\text{ mm}$ labelled $a, b, c, d$ with diagonals meeting at apex $o$.
> - **Stage 2:**
>   - Front View: Base $a'(d')-b'(c')$ inclined at $40^\circ$ to the $xy$ line.
>   - Top View: Derived from the tilted front view and Stage 1 top view, showing base corners $a, b, c, d$ and apex $o$.
> - **Stage 3:**
>   - Top View: Stage 2 top view rotated so that the edge through $d$ is inclined at $45^\circ$ to the reference line $xy$.
>   - Final Front View: Projected upward from Stage 3 top view and horizontally from Stage 2 front view. Visible edges are shown as solid lines connecting apex $o'$ to corners $a', b', c'$, and base edges $a'-b', b'-c'$. Hidden edges from $d'$ (namely $o'-d', a'-d', c'-d'$) are drawn as dashed lines. Corners labelled $o', a', b', c', d'$.
>   - Note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Projections completed with base edge 40 mm, height 60 mm, axis at 40° to HP, and resting edge at 45° to VP (apex towards VP on the left).

#### Problem Q55 (56): Pentagonal pyramid on a base corner
**Given:** Pentagonal pyramid, base edge 30 mm, height 60 mm, resting on base corner $c$ on HP, slant edge $o'c'$ at 50° to HP, top view of $oc$ at 30° to $xy$.
**Find:** Draw the projections of the pyramid.

1. Draw a regular pentagon $abcde$ of side 30 mm below $xy$ with edge $a-e$ vertical on the left so corner $c$ is at the extreme right; project the 60 mm tall front view.
2. Tilt the front view about corner $c'$ on $xy$ so slant edge $o'c'$ is inclined at 50° to $xy$.
3. Project down from the tilted front view and across from the Stage 1 top view to draw the Stage 2 top view.
4. Because the angle of the top view of the slant edge is given directly, rotate the Stage 2 top view so $o-c$ makes 30° with $xy$.
5. Project up and across to complete the final front view.

> **Figure: Step 55.1: Initial position of pentagonal pyramid resting on base in HP**
>
> Step 55.1 of projection of a pentagonal pyramid. A data box on the left shows 'B = 30', 'H = 60'.
> 
> - Reference line labeled x at left and y at right.
> - Top View (below xy line):
>   - Regular pentagon with vertical edge a-e on the left (length 30 mm) and corner c pointing horizontally to the right.
>   - Vertices are labeled counter-clockwise starting from lower left: a, b (bottom), c (rightmost corner), d (top), e (upper left).
>   - Center apex is labeled o, connected to all five vertices a, b, c, d, e with solid lines representing slant edges.
> - Front View (above xy line):
>   - Base rests on the xy line with base points labeled a'(e') at left, b'(d') at center, and c' at right.
>   - Apex o' is located directly above center o at a vertical height of 60 mm.
>   - Triangle outlines the pyramid: slant edge o'-a'(e') on the left, o'-c' on the right, and central slant edge o'-b'(d').
> - Thin vertical projection lines link the top view vertices and apex to the front view.
> - Dimensions: Base edge labeled 30 on vertical edge a-e; height labeled 60 between base line and apex o'.
> - Notes at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Orthographic projection step 55.2 of a pentagonal pyramid**
>
> Step 55.2 of the projection of a regular pentagonal pyramid. GIVEN box: B = 30, H = 60. First stage (left): Front view shows a triangle o'-a'(e')-c' on the xy line with axis height 60 mm; points along the xy line are a'(e'), b'(d'), and c'. Top view below shows a regular pentagon with vertical base edge a-e of length 30 mm perpendicular to xy, apex o at the center connected to vertices a, b, c, d, and c on the rightmost vertex. Second stage (right): Front view is tilted so that the slant edge o'-c' is inclined at an angle of 50° to the horizontal (xy line). Vertices are labelled a'(e'), b'(d'), c' on the base resting at point c' on the ground line, and apex o' tilted to the right.

> **Figure: Orthographic projection step 55.3 of a pentagonal pyramid**
>
> Step 55.3 of the projection of a pentagonal pyramid. GIVEN box: B = 30, H = 60. Left side shows initial front view (height 60 mm, base points a'(e'), b'(d'), c' on xy) and top view (pentagon with vertical edge a-e = 30 mm). Top-right shows the tilted front view with slant edge o'-c' inclined at 50° to xy resting on corner c'. Bottom-right shows the projected final top view obtained by projecting vertically down from the tilted front view and horizontally across from the initial top view. In the final top view, the outer boundary formed by a-b-o-d-e is solid; apex o is connected to corners; edges underneath (c-b, c-d, and slant edge o-c) are drawn as dashed hidden lines.

> **Figure: Projections of a pentagonal pyramid (Problem 55.4)**
>
> Orthographic projections of a pentagonal pyramid with base edge B = 30 mm and height H = 60 mm (Scale 1:1, all dimensions in mm):
> - Given data box on upper left: '55.4', 'B = 30', 'H = 60'.
> - Stage 1 (Initial position):
>   - Front View (above reference line x-y): Triangle with base on x-y line. Base vertices marked a'(e'), b'(d'), and c'. Apex o' at vertical height 60 mm above x-y. Centerline/axis shown as dash-dot line.
>   - Top View (below x-y): Regular pentagon with vertical edge a-e on the left (length 30 mm), base vertices a, b, c, d, e, and apex o at the center connected to all five corners.
> - Stage 2 (Inclination to HP):
>   - Front View: The pyramid is tilted with corner c' on the x-y line, slant edge o'-c' making an angle of 50° with the horizontal x-y line. Labels: a'(e'), b'(d'), c', and apex o'.
>   - Top View: Projected downwards from stage 2 front view and horizontally from stage 1 top view. Apex o on the right, vertices a, b, c, d, e. Slant edges from c are shown dashed (hidden).
> - Stage 3 (Inclination to VP):
>   - Top View: Redrawn from stage 2 top view, tilted such that the axis makes an angle of 30° with the horizontal.
>   - Projectors extend upwards toward the x-y line.

> **Figure: Projections of a pentagonal pyramid (Problem 55.5)**
>
> Orthographic projections of a pentagonal pyramid with base edge B = 30 mm and height H = 60 mm (Scale 1:1, all dimensions in mm):
> - Given data box on upper left: '55.5', 'B = 30', 'H = 60'.
> - Stage 1 (Initial position):
>   - Front View (above x-y): Triangular elevation, base on x-y labeled a'(e'), b'(d'), c', height 60 mm to apex o'.
>   - Top View (below x-y): Regular pentagon with base edge a-e of 30 mm on left, apex o at center connected to corners a, b, c, d, e.
> - Stage 2 (Inclination to HP):
>   - Front View: The pyramid is inclined such that the slant edge/face makes an angle of 50° to the horizontal; corner c' rests on the x-y line. Labels: a'(e'), (d')b', c', and apex o'.
>   - Top View: Projected from stage 2 front view and stage 1 top view, showing base corners a, b, c, d, e and apex o with hidden interior edges dashed.
> - Stage 3 (Inclination to VP):
>   - Top View: The top view of stage 2 is reproduced at an inclination of 30° to the x-y reference line.
>   - Front View: Completely drawn by projecting vertically from stage 3 top view and horizontally from stage 2 front view. Vertices labeled a', b', c', d', e', and apex o', with hidden lines drawn dashed.

**Answer:** Projections completed with base edge 30 mm, height 60 mm, slant edge at 50° to HP, and top view of slant edge at 30° to $xy$.

#### Problem Q250 (59): Hexagonal prism with resting edge inclined
**Given:** Hexagonal prism, base edge 30 mm, axis 80 mm, resting on a base edge on HP, axis at 45° to HP, resting base edge at 50° to VP.
**Find:** Draw the projections of the prism.

1. Draw a regular hexagon of side 30 mm below $xy$ with two vertical edges so right edge $c(3)-d(4)$ is perpendicular to $xy$; project the 80 mm tall rectangular front view.
2. Tilt the front view on base edge $3'(4')$ so the axis makes 45° with $xy$.
3. Project down and across to complete the Stage 2 top view, marking hidden lower base edges dashed.
4. Rotate the Stage 2 top view directly so the true-length resting edge $3-4$ is inclined at 50° to $xy$.
5. Project vertically up and horizontally across to complete the Stage 3 front view.

> **Figure: Step 250.1: Initial position projections of the hexagonal prism**
>
> Initial position (step 250.1) showing the orthographic projections of a hexagonal prism with base edge 30 mm and height 80 mm. The reference line is labeled x - y.
> - Top View (below xy): A regular hexagon with vertical edges on the left [a(1) to f(6)] and right [c(3) to d(4)]. The right vertical edge has a dimension of 30 mm. The topmost corner is e(5) and the bottommost corner is b(2).
> - Front View (above xy): A rectangular outline resting on the xy line with base points labeled 1' (6'), 2' (5'), 3' (4') from left to right along xy, and top face points labeled a' (f'), b' (e'), c' (d'). A vertical line connects 2' (5') to b' (e'). The height of the prism is dimensioned as 80 mm.
> - Annotations: Top-left box contains '250.1', 'B = 30', 'H = 80'. Bottom note reads 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.

> **Figure: Projection of hexagonal prism - Step 250.2**
>
> Engineering graphics construction step 250.2 showing the initial orthographic views and tilted front view of a hexagonal prism.
> - Given box: '250.2', 'B = 30', 'H = 80'. Note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.
> - Reference line: Horizontal line labeled 'x' on the left and 'y' on the right.
> - Stage 1 (left):
>   - Top view (below xy): Regular hexagon with vertical side edges. Vertices labeled counterclockwise/clockwise: bottom-left a(1), bottom vertex b(2), bottom-right c(3), top-right d(4), top vertex e(5), top-left f(6). Vertical right edge c(3)-d(4) dimensioned 30 mm.
>   - Front view (above xy): Vertical rectangle of height 80 mm and width matching the top view. Base on xy line labeled from left to right: 1' (6'), 2' (5'), 3' (4'). Top face labeled a'(f'), b'(e'), c'(d'). Central vertical line connects 2'(5') to b'(e'). Height dimension 80 mm indicated on the left.
> - Stage 2 (right):
>   - Front view tilted: The base 1'(6')-3'(4') rests on corner/edge 3'(4') on the xy line and is tilted at an angle of 45° to the horizontal (xy line). Faces and edges maintain the rectangular prism dimensions (80 mm length, edges parallel). Labels on the tilted front view: base points 1' (6'), 2' (5'), 3' (4'); top face points a'(f'), b'(e'), c'(d').

> **Figure: Projection of hexagonal prism - Step 250.3**
>
> Engineering graphics construction step 250.3 showing the complete projection of the tilted hexagonal prism (front view and final top view).
> - Given box: '250.3', 'B = 30', 'H = 80'. Note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.
> - Reference line: Horizontal line labeled 'x' on the left and 'y' on the right.
> - Stage 1 (left):
>   - Front view: Height 80 mm, base on xy line with points 1'(6'), 2'(5'), 3'(4'); top face a'(f'), b'(e'), c'(d').
>   - Top view: Regular hexagon with side 30 mm; vertices labeled a(1), b(2), c(3), d(4), e(5), f(6).
> - Stage 2 (right):
>   - Front view: Base inclined at 45° to the xy line, resting on point 3'(4'). Vertices labeled 1'(6'), 2'(5'), 3'(4') on the base and a'(f'), b'(e'), c'(d') on the top face.
>   - Top view (below xy): Projected downward from the tilted front view and across from the initial top view.
>     - Base vertices labeled 1, 2, 3, 4, 5, 6.
>     - Top face vertices labeled a, b, c, d, e, f.
>     - Visible outline formed by solid lines connecting outer vertices (6 to 5, 5 to e, e to d, d to c, c to b, b to 2, 2 to 1, 1 to 6).
>     - Visible edges: lines connecting 6 to f, f to e, 1 to a, a to b, f to a, etc.
>     - Hidden edges indicated by dashed lines connecting to hidden base corners 3 and 4 (including lines 2-3, 3-4, 4-5, and dashed axial/internal edges).

> **Figure: Step-by-step projection of a hexagonal prism tilted to HP and VP (Step 250.4)**
>
> Projection of a hexagonal prism with base side B = 30 mm and height H = 80 mm, showing stage 250.4:
> - Given parameters in box: B = 30, H = 80.
> - Stage 1: Front view is a rectangle of height 80 on the xy reference line with vertical edges; base points are 1'(6'), 2'(5'), 3'(4') and top points are a'(f'), b'(e'), c'(d'). Top view below xy line is a regular hexagon of side 30 with corners a(1), b(2), c(3), d(4), e(5), f(6).
> - Stage 2: Front view is tilted such that the base edge 3'(4') rests on the HP (xy line) and the base is inclined at 45° to xy. Top view is projected below xy showing faces 1-2-b-a, 2-3-c-b, etc., with axis centers p and o.
> - Stage 3: Top view is redrawn with its axis/edges inclined at 50° to the xy reference line.

> **Figure: Final orthographic projection of hexagonal prism inclined to both HP and VP (Step 250.5)**
>
> Complete orthographic projection of the hexagonal prism (Step 250.5) with B = 30 mm, H = 80 mm:
> - Given parameters in box: B = 30, H = 80.
> - Shows the full construction from Stage 1 (simple position), Stage 2 (tilted at 45° to HP resting on base edge 3'(4')), Stage 3 (top view inclined at 50° to xy/VP).
> - Final front view is fully projected above the xy line from the Stage 3 top view and horizontally from the Stage 2 front view, showing all visible and hidden outlines/edges with labels a', b', c', d', e', f' for the top face and 1', 2', 3', 4', 5', 6' for the base.

**Answer:** Projections completed with base edge 30 mm, height 80 mm, axis at 45° to HP, and resting base edge at 50° to VP.

#### Problem Q79 (60): Hexagonal prism with axis top view inclined
**Given:** Hexagonal prism, base edge 30 mm, axis 80 mm, resting on a base edge on HP, axis at 45° to HP, plane containing the axis (top view of axis) at 40° to $xy$.
**Find:** Draw the projections of the prism.

1. Draw a regular hexagon of side 30 mm below $xy$ with vertical edges $a(1)-f(6)$ and $c(3)-d(4)$, and project the 80 mm tall front view.
2. Tilt the front view on right base edge $3'(4')$ so the axis is inclined at 45° to $xy$.
3. Project down and across to obtain the Stage 2 top view.
4. Because the angle of the vertical plane containing the axis is given, rotate the Stage 2 top view directly so the top view of the axis makes 40° with $xy$.
5. Project up from the rotated top view and across from the Stage 2 front view to finish the Stage 3 front view.

> **Watch out.** Do not confuse "resting base edge at 40° to VP" with "plane containing the axis at 40° to VP"—the two lines are perpendicular in the top view, so rotating the axis to 40° puts the resting edge at 50° to $xy$.

> **Figure: Step 79.1: Simple position orthographic projection of hexagonal prism**
>
> Step 79.1 showing the initial position (simple position) of a hexagonal prism with base resting on HP:
> - Top view (below xy line): A regular hexagon oriented with two vertical edges $a(1)-f(6)$ and $c(3)-d(4)$. Base side length is dimensioned as 30 mm between $c(3)$ and $d(4)$. The vertices are labeled clockwise/counter-clockwise with letters for top face and numbers in parentheses for bottom face: bottom-left $a(1)$, top-left $f(6)$, top corner $e(5)$, top-right $d(4)$, bottom-right $c(3)$, and bottom corner $b(2)$.
> - Front view (above xy line): The base rests directly on the xy reference line (labeled 'x' on left, 'y' on right). Base corners are labeled $1'(6')$, $2'(5')$, $3'(4')$. The top corners are labeled $a'(f')$, $b'(e')$, $c'(d')$. The height is dimensioned as 80 mm on the left. Vertical projection lines connect the points of the top view to the front view.
> - Inset box on the left contains '79.1', 'B = 30', 'H = 80'.
> - Bottom text reads: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Projections of a hexagonal prism: Step 79.2 showing initial position and tilted front view**
>
> Step 79.2 of the projection of a hexagonal prism. Information box shows base side B = 30 mm and axis height H = 80 mm; note specifies 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'. Drawn relative to reference line x-y. In the first stage: top view is a regular hexagon with vertical edge c(3)-d(4) of length 30 mm, vertices labeled counterclockwise a(1), b(2), c(3), d(4), e(5), f(6); front view is a rectangle of height 80 mm standing on the xy line with base points 1'(6'), 2'(5'), 3'(4') and top points a'(f'), b'(e'), c'(d'). In the second stage: the front view is reproduced tilted such that its base 1'(6')-3'(4') is inclined at an angle of 45° to the xy line, resting on base point 3'(4').

> **Figure: Projections of a hexagonal prism: Step 79.3 showing complete second stage top view**
>
> Step 79.3 of the projection of a hexagonal prism. Information box shows B = 30 mm, H = 80 mm; note specifies 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'. Contains the first stage front and top views, the tilted front view at 45° to the xy line resting on 3'(4'), and the final top view obtained by projecting vertically down from the tilted front view and horizontally across from the initial top view. The resulting top view shows the two hexagonal faces 1-2-3-4-5-6 and a-b-c-d-e-f connected by axial edges, with visible boundary edges drawn solid and hidden interior edges (such as through corners 3, 4, and the connecting edges) drawn dashed.

> **Figure: Projections of a hexagonal prism tilted to HP and VP, Step 79.4**
>
> Step 79.4 showing the three-stage orthographic projection of a hexagonal prism with base side B = 30 mm and height H = 80 mm. Given box: B = 30, H = 80. Stage 1: Initial position with axis perpendicular to HP and parallel to VP. Top view shows a regular hexagon with base side 30 mm, corners labelled a(1), b(2), c(3), d(4), e(5), f(6). Front view shows a rectangle of height 80 mm resting on the xy line with base points 1'(6'), 2'(5'), 3'(4') and top face points a'(f'), b'(e'), c'(d'). Stage 2: Front view is tilted so that the base rests on the xy line at 3'(4') with the base inclined at 45° to the HP (xy line). Corresponding top view is projected downwards showing the two hexagonal faces with centres p and o. Stage 3 (partially complete): The Stage 2 top view is reproduced with its axis/edges inclined at 40° to the xy line (VP). Below drawing: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Completed orthographic projections of a hexagonal prism, Step 79.5**
>
> Step 79.5 showing the complete three-stage orthographic projection of the hexagonal prism with base side B = 30 mm and height H = 80 mm. Given box: B = 30, H = 80. Stage 1: Initial front view (height 80 mm) and top view (regular hexagon of side 30 mm). Stage 2: Front view tilted at 45° to the HP resting on corner/edge 3'(4'), with its projected top view below xy. Stage 3: Top view rotated such that its axis is inclined at 40° to VP. Final front view is obtained by projecting vertically upward from the inclined top view and horizontally from the Stage 2 front view, showing visible and hidden edges (dashed lines) with corners labelled 1', 2', 3', 4', 5', 6' on the base face and a', b', c', d', e', f' on the other face. Below drawing: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Projections completed with base edge 30 mm, height 80 mm, axis at 45° to HP, and top view of axis at 40° to $xy$.

<!-- page 8 | Practice: Cones and Cylinders on HP with Direct Stage-3 Rotation -->

## Practice: Cones and Cylinders on HP with Direct Stage-3 Rotation

Having practiced direct three-stage rotations on flat-faced polyhedra, we now apply the exact same direct rotation method to curved solids—cones and cylinders—using eight generators. By dividing the circular base into eight points and tracking them through three stages, we can accurately plot the elliptical projections of cones and cylinders tilted on base points or generators.

### The idea

Unlike prisms and pyramids, cones and cylinders have smooth curved surfaces and circular bases with no sharp corners to project. To track them across three stages, we divide the circular base in the Stage 1 top view into eight equal parts (every 45°), numbered 1 to 8, and draw the corresponding **generators**—straight lines on the curved surface running from the base points to the cone's apex (or between the cylinder's two bases). When the solid tilts in Stage 2 and rotates in Stage 3, the circular base foreshortens into an ellipse. Joining the eight projected base points with a smooth freehand curve gives that ellipse, and drawing tangents from the apex (or between the two ellipses) gives the outer visible boundary of the curved surface.

In every problem here, Stage 3 requires a **direct rotation** of the Stage 2 top view without a locus construction. This happens for one of three reasons: the top-view angle with the XY line is given directly (or as the vertical plane containing the axis and resting generator), the angle is given for the **base diameter parallel to HP** (chord 3–7, which stays perpendicular to XY in Stage 2 and therefore keeps its true length), or a geometric condition fixes the Stage 3 top view directly (such as the axis lying on a Profile Plane perpendicular to XY, or a generator lying directly on XY).

When finishing each view, always check base visibility first: if the base is tilted toward the observer (or toward the top in Stage 2), the entire elliptical base is a continuous dark curve; if it faces away, the inner half of the ellipse is hidden and drawn dashed while the outer boundary generators remain continuous.

### Worked example

**Problem 69:** A cone of base diameter 40 mm and height 60 mm is resting on a base point on HP. The axis (or generator) is inclined at 40° to HP and the vertical plane containing the axis and the generator is inclined at 45° to VP with the apex away from VP.

**Given:** Cone with base diameter $D = 40$ mm, height $H = 60$ mm, resting on base point $5'$ on HP, tilted at 40° to HP, and vertical plane containing the axis inclined at 45° to VP (apex away from VP).
**Find:** The three-stage orthographic projections of the cone.

1. **Stage 1 (Simple position):** Draw the top view as a circle of diameter 40 mm below XY, divide it into 8 equal parts numbered 1 to 8 with point 5 at the extreme right so it becomes the resting point, and project the front view as an isosceles triangle of base 40 mm on XY and height 60 mm.

> **Figure: Step 69.1: Simple position of the cone with base on HP**
>
> Orthographic projection showing the first step (labelled 69.1) of a cone in simple position resting on HP:
> - Parameter box specifies: 'D = 40', 'H = 60'.
> - Horizontal reference line labelled 'x' on the left and 'y' on the right.
> - Top View (below xy): Circle of diameter 40 mm with center 'o', divided into 8 equal sectors with division points numbered 1 (extreme left), 2, 3 (bottom), 4, 5 (extreme right), 6, 7 (top), 8.
> - Front View (above xy): Isosceles triangle standing on the xy line representing the cone of height 60 mm. The base is on xy, with base points marked 1', 2'(8'), 3'(7'), 4'(6'), 5' from left to right. The apex is labelled o'. Generators connect o' to the base points. Center line/axis extends from 3'(7') to apex o'. Vertical projector lines connect the top view circle divisions to the front view base points.

2. **Stage 2 Front View:** Copy the front-view triangle with point $5'$ resting on the XY line and incline the right-hand generator $5'o'$ at 40° to XY so the cone tilts to the right.

> **Figure: Orthographic projection of a cone - Step 69.2**
>
> Step 69.2 showing the tilt of the front view of a cone with base diameter D = 40 mm and height H = 60 mm.
> - Reference line labeled 'x' and 'y'.
> - Simple position:
>   - Top view: Circle with diameter D = 40 divided into 8 equal parts labeled 1 (left), 2, 3 (bottom), 4, 5 (right), 6, 7 (top), 8, with center 'o'.
>   - Front view: Triangle resting on HP (xy line). Base points labeled 1', 2'(8'), 3'(7'), 4'(6'), 5'. Apex labeled o' at height H = 60.
> - Second position front view:
>   - The cone is rotated so that the generator 5'-o' is inclined at an angle of 40° to the xy line (horizontal).
>   - Base labeled 1', 2'(8'), 3'(7'), 4'(6'), 5' and apex o'.
>   - Parameters box: D = 40, H = 60.

3. **Stage 2 Top View:** Drop vertical projectors from $1' 	ext{ to } 5'$ and $o'$ to meet horizontal projectors from the Stage 1 circle; join points 1 to 8 with a smooth ellipse (keeping the lower half dashed if hidden from above) and draw the two extreme tangent generators to apex $o$.

> **Figure: Orthographic projection of a cone - Step 69.3**
>
> Step 69.3 showing the completed second stage projection of the cone.
> - Simple position (left):
>   - Front view: Triangle on xy line with apex o' and base points 1', 2'(8'), 3'(7'), 4'(6'), 5'.
>   - Top view: Circle with 8 generator divisions (1 to 8) and center o.
> - Second stage (right):
>   - Front view: Cone tilted with generator 5'-o' inclined at 40° to the xy line, resting on point 5' on HP.
>   - Top view: Obtained by projecting points vertically down from the front view and horizontally across from the initial top view.
>     - The circular base appears as an ellipse with points 1, 2, 3, 4, 5, 6, 7, 8. The portion of the rim from 4 through 5 to 6 is hidden and drawn with a dashed line.
>     - Tangent generators are drawn from apex o to the elliptical base.
>   - Parameters box: 69.3, D = 40, H = 60.

4. **Stage 3 Top View:** Because a vertical plane appears as a straight line in the top view, rotate the entire Stage 2 top view directly so the axis line $o	ext{–}5$ makes 45° with the XY line, placing apex $o$ closer to XY (away from the observer, or toward VP as drawn).

> **Figure: Projection of a cone: step 69.4 showing stage 1, stage 2, and stage 3 top view**
>
> Step 69.4 of projection of a cone with base diameter $D = 40\text{ mm}$ and height $H = 60\text{ mm}$. Reference line $xy$ is horizontal.
> 1. Stage 1 (Simple Position):
> - Top View: Circle of diameter $40\text{ mm}$ with center $o$, divided into 8 equal sectors with generator points 1 to 8 clockwise (1 at left, 3 at bottom, 5 at right, 7 at top).
> - Front View: Isosceles triangle with base on $xy$ line from $1'$ to $5'$, apex $o'$ at height $60\text{ mm}$. Base generator points labeled $1', 2'(8'), 3'(7'), 4'(6'), 5'$. Center axis connects $3'(7')$ to apex $o'$.
> 2. Stage 2 (Axis inclined at $40^\circ$ to HP):
> - Front View: The cone from Stage 1 is tilted about the base point $5'$ on the $xy$ line such that the axis makes an angle of $40^\circ$ with the horizontal.
> - Top View: Projected from Stage 2 front view and Stage 1 top view. The base is an ellipse with points 1 to 8; apex $o$ is to the right. Outline generators connect $o$ to the tangents of the ellipse. The visible curve of the base is drawn with a solid line, and the hidden portion is dashed.
> 3. Stage 3 (Axis inclined at $45^\circ$ to VP - Top View only):
> - Top View: Redrawn from Stage 2 top view with the axis tilted at $45^\circ$ to the vertical projector direction, apex $o$ directed toward the lower right.

5. **Stage 3 Front View:** Project all eight base points and apex $o$ vertically up to meet horizontal projectors from the Stage 2 front view, draw the smooth elliptical base (with the back half dashed), and connect the extreme tangent generators to apex $o'$.

> **Figure: Projection of a cone: step 69.5 showing completed projection with final front view**
>
> Step 69.5 of projection of a cone with base diameter $D = 40\text{ mm}$ and height $H = 60\text{ mm}$, showing the completed three-stage projection including the final front view.
> 1. Stage 1 and Stage 2 are identical to step 69.4.
> 2. Stage 3 (Final views):
> - Top View: Same as in step 69.4, axis inclined at $45^\circ$ to VP.
> - Front View: Obtained by projecting vertically upwards from the Stage 3 top view and horizontally from the Stage 2 front view. Base points $1', 2', 3', 4', 5', 6', 7', 8'$ form an ellipse with hidden portions drawn dashed. Apex $o'$ is located at the top right at the same level as in Stage 2. Extreme generators connect apex $o'$ tangent to the base ellipse to form the final front view of the cone.

> **Watch out.** The problem text states the axis is inclined at 40° to HP and the apex is away from VP, whereas the worked drawing inclines generator $5'o'$ at 40° to XY and places the apex closer to XY in the top view.

**Answer:** Three-stage projections of the cone ($D = 40$ mm, $H = 60$ mm) inclined at 40° to HP and 45° to XY in the top view.

### More problems

#### Problem 70: Cone with Horizontal Base Diameter Inclined to VP

**Given:** Cone ($D = 40$ mm, $H = 60$ mm) resting on base point $5'$ on HP, generator $5'o'$ at 40° to HP, base diameter parallel to HP at 45° to VP, apex towards VP.
**Find:** The three-stage front and top views of the cone.

1. Draw the Stage 1 top-view circle ($D = 40$ mm, divided into 8 parts) below XY and the front-view triangle ($H = 60$ mm) on XY.
2. Redraw the front-view triangle in Stage 2 resting on point $5'$ on XY with generator $5'o'$ inclined at 40° to XY.
3. Project down from the Stage 2 front view and across from Stage 1 to complete the Stage 2 elliptical top view.
4. Note that base diameter 3–7 remains parallel to HP and is in true length (perpendicular to the axis in the top view).
5. Rotate the Stage 2 top view so diameter 3–7 makes 45° with XY (making the axis also 45° to XY) with apex $o$ towards XY.
6. Project vertically up from the Stage 3 top view and horizontally across from Stage 2 to plot the final front view.

> **Figure: Step 70.1: Initial position projection of a cone resting on HP**
>
> Step 70.1 showing the initial orthographic projections of a cone. Top view shows a circle of diameter D = 40 mm divided into 8 equal parts labeled 1 through 8 clockwise, with center o. Front view above the xy line shows an isosceles triangle of height H = 60 mm with apex o' and base points on the xy line labeled 1', 2'(8'), 3'(7'), 4'(6'), 5'. Vertical projectors connect the corresponding points between top and front views.

> **Figure: Projection of a cone: step 70.2 showing simple position views and tilted front view**
>
> Step 70.2 of problem 70 for the projection of a cone with base diameter D = 40 mm and axis height H = 60 mm. At the top-left, a box displays '70.2', 'D = 40', and 'H = 60'. Reference line xy is horizontal. Simple position: Front view is an isosceles triangle with apex o' and base points 1', 2'(8'), 3'(7'), 4'(6'), and 5' resting on xy; top view directly below is a circle of diameter 40 mm divided into 8 equal sectors numbered 1 to 8 with center o. Second stage front view: the cone is tilted to rest on generator or base point 5' on xy, with slant generator o'5' inclined at 40° to the xy line; base points are labeled 1', 2'(8'), 3'(7'), 4'(6'), 5' and apex o'.

> **Figure: Projection of a cone: step 70.3 showing the completed top view of the inclined cone**
>
> Step 70.3 of problem 70 for the projection of a cone (D = 40 mm, H = 60 mm). A box at top-left shows '70.3', 'D = 40', and 'H = 60'. Shows the simple position front and top views on the left, and the tilted front view inclined with generator o'5' at 40° to the xy line on the right, resting at base point 5'. Vertical projectors are dropped from points 1', 2'(8'), 3'(7'), 4'(6'), 5', and o' of the tilted front view, intersecting horizontal projectors from the initial circular top view. The resulting top view shows the base as an ellipse with visible arc passing through 7, 8, 1, 2, 3 and dashed/hidden arc through 4, 5, 6, with apex o to the right and outline tangents drawn from o to the base ellipse contour.

> **Figure: Projection of a cone: Step 70.4**
>
> Step 70.4 for projection of a cone with diameter D = 40 mm and height H = 60 mm. The drawing consists of three stages across reference line xy:
> - Box at top: "70.4", "D = 40", "H = 60".
> - Stage 1 (Simple position):
>   - Front View: Isosceles triangle o'-1'-5' resting with base 1'-5' on xy line. Points marked on base: 1', 2'(8'), 3'(7'), 4'(6'), 5'. Apex labelled o'.
>   - Top View: Circle of diameter 40 mm with center o, divided into 8 equal sectors with generator points numbered counterclockwise: 1 (left), 2, 3 (bottom), 4, 5 (right), 6, 7 (top), 8.
> - Stage 2 (Inclined to HP):
>   - Front View: Cone tilted so that generator o'-5' is inclined at an angle of 40° to xy (resting on point 5' on HP). Base points: 1', 2'(8'), 3'(7'), 4'(6'), 5'; apex o'.
>   - Top View: Projected downward from stage 2 FV and horizontally from stage 1 TV. Base appears as an ellipse with points 1 to 8, apex o to the right, and generators connecting apex to the base.
> - Stage 3 (Inclined to VP - Top View positioned):
>   - Top View from stage 2 reproduced with its axis inclined at 45° to the xy line, directed upwards to the right. Base points 1, 2, 3, 4, 5, 6, 7, 8 and apex o. Front view is not yet projected in this step.

> **Figure: Projection of a cone: Step 70.5 (Final projection)**
>
> Step 70.5 showing the complete three-stage orthographic projection of a cone with diameter D = 40 mm and height H = 60 mm:
> - Box at top: "70.5", "D = 40", "H = 60".
> - Stage 1 (Simple position): Identical to Step 70.4, with FV as triangle o'-1'-5' on xy, and TV as a circle of diameter 40 mm divided into 8 sectors numbered 1 to 8.
> - Stage 2 (Inclined to HP): Identical to Step 70.4, with cone tilted so that generator o'-5' makes an angle of 40° with xy, and corresponding TV projected.
> - Stage 3 (Final projection inclined to VP):
>   - Top View: TV from stage 2 reproduced with its axis inclined at 45° to xy.
>   - Front View: Projected upwards from stage 3 TV and horizontally from stage 2 FV. The base forms an ellipse with points 1', 2', 3', 4', 5', 6', 7', 8', and apex o' at the top-right. Tangents from apex o' to the base ellipse complete the final front view.

**Answer:** Three-stage projections of the cone ($D = 40$ mm, $H = 60$ mm) with generator $5'o'$ at 40° to HP and horizontal base diameter 3–7 at 45° to VP.

#### Problem 219: Cylinder Inclined to HP and Top View Inclined

**Given:** Cylinder ($D = 40$ mm, $H = 60$ mm) resting on base point $5'$ on HP, base at 60° to HP, top view of axis at 35° to XY.
**Find:** The three-stage orthographic projections of the cylinder.

1. Draw the Stage 1 top-view circle ($D = 40$ mm, 8 divisions: $1	ext{–}8$ bottom, $a	ext{–}h$ top) and front-view rectangle ($H = 60$ mm) on XY.
2. Redraw the Stage 2 front-view rectangle resting on base point $5'$ on XY with its base $1'5'$ inclined at 60° to XY.
3. Project both bases down to form two ellipses in the Stage 2 top view, keeping the lower half of the bottom base dashed.
4. Rotate the Stage 2 top view directly so the axis makes 35° with the XY line.
5. Project all sixteen points of both bases up to the Stage 2 height levels to draw the two final front-view ellipses and boundary generators.

> **Figure: Initial position projection of a vertical cylinder (Step 219.1)**
>
> Step 219.1 showing the initial projections of a vertical cylinder resting on HP:
> - Problem parameters given in a box: D = 40, H = 60.
> - Front view (above reference line xy): A rectangle of width 40 mm and height 60 mm resting on the xy line. The top base is labeled from left to right with points a', b'(h'), c'(g'), d'(f'), e'. The bottom base lying on xy is labeled 1', 2'(8'), 3'(7'), 4'(6'), 5'. Vertical generators/projectors connect corresponding base points with a central axis line through c'(g')-3'(7'). A height dimension of 60 mm is indicated on the left.
> - Top view (below xy): A circle with diameter dimensioned as Φ40, centered at o, divided into 8 equal sectors. The division points are labeled along the perimeter counterclockwise/clockwise as: left a(1), bottom-left b(2), bottom c(3), bottom-right d(4), right e(5), top-right f(6), top g(7), top-left h(8). Thin vertical projection lines link the top view points to the front view.

> **Figure: Projection of cylinder inclined to HP - Step 219.2**
>
> Step 219.2 of cylinder projection. Given box at top left: D = 40 mm, H = 60 mm. The figure shows orthographic projections across an xy reference line.
> - First stage:
>   - Front view: A rectangle of width 40 mm and height 60 mm resting on xy. Top base is labeled a', b'(h'), c'(g'), d'(f'), e'. Bottom base on xy is labeled 1', 2'(8'), 3'(7'), 4'(6'), 5'. Axis and generator lines are drawn vertically.
>   - Top view: Circle of diameter Φ40 mm with center o, divided into 8 equal sectors with points labeled a(1), b(2), c(3), d(4), e(5), f(6), g(7), h(8).
> - Second stage:
>   - Front view: The cylinder is tilted such that the base 1'-5' rests on the xy line at point 5' and is inclined at 60° to the horizontal/xy line (making the cylinder axis inclined at 30° to HP). Points on base: 1', 2'(8'), 3'(7'), 4'(6'), 5'. Points on top face: a', b'(h'), c'(g'), d'(f'), e'.
> - Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Projection of cylinder inclined to HP - Step 219.3**
>
> Step 219.3 of cylinder projection showing the completed top view. Given box at top left: D = 40 mm, H = 60 mm.
> - Reference line xy separates front view above and top view below.
> - Initial stage: Identical to step 219.2 with front view (rectangle 40×60 mm) and top view (circle Φ40 mm divided into 8 parts).
> - Second stage:
>   - Front view: Tilted cylinder resting on point 5' on xy with base inclined at 60° to xy. Center of axis is labeled p'. Base points: 1', 2'(8'), 3'(7'), 4'(6'), 5'; top face points: a', b'(h'), c'(g'), d'(f'), e'.
>   - Top view: Obtained by projecting vertical projector lines downward from the tilted front view and horizontal projection lines from the initial top view.
>     - Base ellipse: Points 1, 2, 3, 4, 5, 6, 7, 8 with center p. Left arc 7-8-1-2 is drawn solid (visible), while the right inner arc 2-3-4-5-6-7 is drawn dashed (hidden).
>     - Top face ellipse: Points a, b, c, d, e, f, g, h with center o, fully drawn with a solid line (visible).
>     - Outer contour generators connect the two ellipses tangentially at top (7 to g) and bottom (3 to c).
> - Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Projection of a cylinder: Step 219.4 showing Stage 1, Stage 2, and Stage 3 top view inclined at 35 degrees**
>
> Orthographic projection step 219.4 for a cylinder with diameter D = 40 mm and height H = 60 mm (Scale 1:1, all dimensions in mm):
> - Given values: D = 40, H = 60.
> - Stage 1: Simple position. Front view is a rectangle of height 60 mm and width 40 mm on reference line xy with base points 1', 2'(8'), 3'(7'), 4'(6'), 5' and top face points a', b'(h'), c'(g'), d'(f'), e'. Top view is a circle of diameter 40 mm divided into 8 equal parts: a(1), b(2), c(3), d(4), e(5), f(6), g(7), h(8) with center o.
> - Stage 2: Front view inclined with the base 1'-5' at 60° to the horizontal plane (xy line), resting on corner 5'. Top view is projected down from Stage 2 front view and horizontally from Stage 1 top view, forming two elliptical ends with centers p (base points 1 to 8) and o (top face points a to h).
> - Stage 3: The top view is reproduced with its axis inclined at 35° to the VP (xy line). The final front view is not yet drawn in this step.

> **Figure: Projection of a cylinder: Step 219.5 showing the completed three-stage projection including the final front view**
>
> Orthographic projection step 219.5 (completed solution) for a cylinder with diameter D = 40 mm and height H = 60 mm (Scale 1:1, all dimensions in mm):
> - Given values: D = 40, H = 60.
> - Stage 1 and Stage 2 are identical to step 219.4 (circle and rectangle in Stage 1; front view with base inclined at 60° to HP resting on 5', and projected top view with two elliptical ends in Stage 2).
> - Stage 3: Top view is reproduced with its axis inclined at 35° to xy. Projectors are projected vertically upward from this top view to intersect horizontal projectors from the Stage 2 front view to construct the final front view. The final front view shows the cylinder with elliptical base (points 1' through 8') and elliptical top face (points a' through h') connected by contour generators.

> **Watch out.** The summary banner on the problem page prints "TOP VIEW 30° TO XY", but the problem statement and the solution drawing both use 35°.

**Answer:** Three-stage projections of the cylinder ($D = 40$ mm, $H = 60$ mm) with base at 60° to HP and top-view axis at 35° to XY.

#### Problem 71: Cone Lying on a Generator on HP

**Given:** Cone ($D = 40$ mm, $H = 60$ mm) lying on a generator on HP, vertical plane containing axis and generator at 40° to VP, apex away from observer.
**Find:** The three-stage projections of the cone.

1. Construct the Stage 1 circle ($D = 40$ mm, 8 parts) in the top view and triangle ($H = 60$ mm) on XY in the front view.
2. Rotate the front-view triangle in Stage 2 until generator $5'o'$ lies flat on the XY line.
3. Project down to complete the Stage 2 top view; the entire elliptical base faces upward and is completely visible.
4. Rotate the Stage 2 top view so the axis (and resting generator $5	ext{–}o$) makes 40° with XY, placing apex $o$ towards XY (away from the observer).
5. Project upward to the Stage 2 height levels to complete the final front view, keeping the rear half of the base ellipse dashed.

> **Figure: Step 71.1: Initial projection of cone with base on HP**
>
> Step 71.1 of the solution showing the initial simple position of the cone with its base resting on HP. In the top view (below the horizontal reference line xy), the base appears as a true-shape circle of diameter 40 mm, divided into 8 equal sectors with division points numbered 1 through 8 clockwise (1 on the far left, 3 at the bottom, 5 on the far right, 7 at the top) and center labeled 'o'. Projectors are drawn vertically up to the reference line xy to form the front view (above xy). The front view is an isosceles triangle of base diameter 40 mm lying on the xy line with base points labeled from left to right as 1', 2'(8'), 3'(7'), 4'(6'), 5', and apex o' at height H = 60 mm above the base. Axis line is drawn from 3'(7') to apex o'. Beside the drawing is a box labeled '71.1' with 'D = 40' and 'H = 60'. Below the figure is the text 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 71.2: Projection of a cone with generator on HP - tilted front view**
>
> Step 71.2 of the projection of a cone.
> Given box: D = 40 mm (base diameter), H = 60 mm (height).
> Scale note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> 
> Stage 1 (Initial position):
> - Front view: Triangle 1'-o'-5' resting on xy line with height 60 mm. Base points marked 1', 2'(8'), 3'(7'), 4'(6'), 5'. Axis connects apex o' to 3'(7').
> - Top view: Circle of diameter 40 mm divided into 8 sectors numbered 1 to 8 counterclockwise starting from left (1 at 9 o'clock, 3 at 6 o'clock, 5 at 3 o'clock, 7 at 12 o'clock), center o. Vertical projection lines connect top view points to front view base points on xy.
> 
> Stage 2 (Generator on HP):
> - Front view: The cone is tilted such that generator o'-5' lies directly on the xy reference line. Base line 5'-1' is inclined with points 4'(6'), 3'(7'), 2'(8') marked along it, all connected to apex o' on the xy line.

> **Figure: Step 71.3: Projection of a cone with generator on HP - completed top view**
>
> Step 71.3 of the projection of a cone.
> Given box: D = 40 mm, H = 60 mm.
> Scale note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> 
> Stage 1 (Initial position):
> - Front view: Vertical cone triangle 1'-o'-5' on xy line with base points 1', 2'(8'), 3'(7'), 4'(6'), 5' and apex o'.
> - Top view: Circle of diameter 40 mm with 8 division points (1 through 8) and center o.
> 
> Stage 2 (Tilted position and final top view):
> - Front view: Cone lying on xy along generator o'-5' with apex o' on xy. Base points 5', 4'(6'), 3'(7')p', 2'(8'), 1'.
> - Top view: Constructed by projecting vertically down from front view points (1', 2'(8'), 3'(7')/p', 4'(6'), 5', o') and projecting horizontally from stage 1 top view points (1, 2, 3, 4, 5, 6, 7, 8, o). The base forms an ellipse through points 1, 2, 3, 4, 5, 6, 7, 8 with center p. Outlines are drawn tangentially from apex o to the base ellipse contour (near points 2 and 8).

> **Figure: Projections of a cone - Problem 71.4**
>
> Orthographic projections of a cone showing three successive stages:
> 1. Simple position: Front view is a triangle with base 1'-5' on the reference line x-y, axis height H = 60 mm, base diameter D = 40 mm, with generators from apex o' to 1', 2'(8'), 3'(7'), 4'(6'), 5'. Top view is a circle of diameter 40 mm divided into 8 equal parts (1 to 8) with apex o at the center.
> 2. Tilted on generator: Front view shows the cone lying with generator o'-5' on the x-y line. Top view shows the base projected as an ellipse (major axis 7-3, minor axis 5-1) and outline generators converging to apex o.
> 3. Inclination to VP: Top view is reproduced with its axis inclined at 40° to the x-y line.
> GIVEN box: D = 40, H = 60. Notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Projections of a cone - Problem 71.5**
>
> Full three-stage orthographic projection of a cone:
> 1. Simple position: Front view shows cone of base diameter D = 40 mm on HP (x-y line), apex o' at height H = 60 mm. Top view is a circle with diameter 40 mm divided into 8 equal segments (1 to 8) with center o.
> 2. Lying on generator: Front view shows generator o'-5' on the x-y line. The corresponding top view shows the base projected as an ellipse with points 1 through 8 and apex o.
> 3. Final projection: Top view inclined at 40° to the VP (x-y line). The final front view is projected above x-y, showing the base as an inclined ellipse with points 1' through 8' and contour generators extending to apex o'.
> GIVEN box: D = 40, H = 60. Notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** Three-stage projections of the cone ($D = 40$ mm, $H = 60$ mm) resting on generator $5'o'$ on HP with top-view axis at 40° to XY.

#### Problem 73: Cone on Generator on HP with Axis on Profile Plane

**Given:** Cone ($D = 40$ mm, $H = 60$ mm) resting on generator $5'o'$ on HP, axis on a Profile Plane (perpendicular to both HP and VP), base visible in front view, apex touching VP.
**Find:** The three-stage projections of the cone.

1. Draw the Stage 1 top-view circle ($D = 40$ mm, 8 divisions) and front-view triangle ($H = 60$ mm) resting on XY.
2. Tilt the front-view triangle in Stage 2 so generator $5'o'$ lies completely flat on the XY line.
3. Project the Stage 2 top view below XY, drawing the entire tilted base as a visible ellipse.
4. Rotate the Stage 2 top view by 90° so the axis is perpendicular to XY (lying on a Profile Plane) with apex $o$ touching the XY line.
5. Project up to the Stage 2 heights to draw the final front view; the entire elliptical base faces the observer and is fully visible.

> **Figure: Step 73.1: Simple position of the cone with base on HP**
>
> Step 73.1 shows the initial projections of a cone with diameter D = 40 mm and height H = 60 mm resting with its base on HP. 
> - Reference line xy separates the front view (above) and top view (below).
> - Front View: An isosceles triangle with base on the xy line representing the base of the cone, points labeled 1', 2'(8'), 3'(7'), 4'(6'), and 5'. The apex o' is at height 60 mm. Generators connect o' to each base point.
> - Top View: A full circle of diameter 40 mm centered at o, divided into 8 equal parts with points labeled counterclockwise/clockwise: 1 (leftmost), 8 (top-left), 7 (top), 6 (top-right), 5 (rightmost), 4 (bottom-right), 3 (bottom), 2 (bottom-left). Vertical projector lines connect corresponding points between the top view circle and the front view base line.
> - Notes below the top view: 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'. Beside the front view is a box with '73.1' and 'D = 40', 'H = 60'.

> **Figure: Projection of a cone: step 73.2 showing initial views and tilted front view**
>
> Step 73.2 for a cone with base diameter D = 40 mm and height H = 60 mm.
> 1. Initial Stage:
>    - Front view (above reference line x-y): Isosceles triangle with base on x-y, apex at top labelled o', base vertices labelled 1', 2'(8'), 3'(7'), 4'(6'), 5'. Axis drawn from apex o' to mid-point 3'(7').
>    - Top view (below x-y): Circle of diameter 40 mm with center o, divided into 8 equal sectors labelled counterclockwise from left: 1, 2, 3, 4, 5, 6, 7, 8.
> 2. Second Stage (Front View):
>    - The cone is tilted such that generator o'-5' lies on the reference line x-y.
>    - Base line inclined to x-y with points labelled 5' on x-y, followed by 4'(6'), 3'(7'), 2'(8'), and 1' at the top.
>    - Apex o' lies on x-y.
>    - Lines connect apex o' to 1', 2'(8'), 3'(7'), 4'(6'), and 5'.
> Box at top-right indicates: '73.2', 'D = 40', 'H = 60'.

> **Figure: Projection of a cone: step 73.3 completing the top view of the tilted cone**
>
> Step 73.3 for a cone with base diameter D = 40 mm and height H = 60 mm.
> 1. Left Stage (Initial Views):
>    - Front view: Triangle with apex o' and base on x-y labelled 1', 2'(8'), 3'(7'), 4'(6'), 5'.
>    - Top view: Circle with center o, divided into 8 points (1 to 8).
> 2. Right Stage (Tilted Position):
>    - Front view: Generator o'-5' rests on the x-y reference line. Base is divided with points 5', 4'(6'), 3'(7')p', 2'(8'), 1'. Generators connect o' to base division points.
>    - Top view: Formed by projecting horizontally from the initial circular top view and vertically from the tilted front view.
>      - Base appears as an ellipse passing through points 1, 2, 3, 4, 5, 6, 7, 8, with center p.
>      - Tangent outlines connect apex o to the outer edges of the base (points 3 and 7).
>      - Visible and hidden outline shown; horizontal axis line runs through 5, p, 1, to apex o.
> Box at upper-left indicates: '73.3', 'D = 40', 'H = 60'.

> **Figure: Orthographic projections of a cone, Step 73.4**
>
> Step 73.4 showing the orthographic projection of a cone with base diameter D = 40 mm and height H = 60 mm. Shows the simple position (front view: isosceles triangle with base 1'-5' and apex o', top view: circle divided into 8 sectors numbered 1 to 8), followed by tilting the cone to lie on one generator (front view resting on 5'-o' on the XY line, top view projected as an ellipse for the base and outline converging to apex o), and finally rotating the top view so that its axis or generator makes 90° with a reference direction, with the base ellipse showing points 1 to 8 and apex o.

> **Figure: Orthographic projections of a cone, Step 73.5**
>
> Step 73.5 completing the final front view projection of the tilted and rotated cone. Shows Stage 1 (front view triangle 1'-5'-o', top view circle with 8 points), Stage 2 (front view lying on generator 5'-o' on the reference line xy, top view projected with elliptical base 1-8 and apex o), and Stage 3 (top view rotated with its axis tilted, projectors drawn upward to intersect horizontal projectors from the second front view to construct the final front view ellipse 1'-8' and generators to apex o'). Box indicates D = 40, H = 60, SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** Three-stage projections of the cone ($D = 40$ mm, $H = 60$ mm) on generator $5'o'$ on HP with the top-view axis perpendicular to XY (90°) and apex on XY.

#### Problem 75: Cone Lying on a Generator on VP with Base Inclined to HP

**Given:** Cone ($D = 40$ mm, $H = 60$ mm) lying on a generator on VP, base at 60° to HP, one point of the base circle touching HP.
**Find:** The three-stage projections of the cone.

1. Draw the Stage 1 top-view circle ($D = 40$ mm, 8 divisions) and front-view triangle ($H = 60$ mm) on XY.
2. Tilt the front-view triangle in Stage 2 with point $5'$ on XY so the base $1'5'$ makes 60° with XY.
3. Project the Stage 2 top view below XY; note that the extreme back generator $o	ext{–}7$ is parallel to HP and therefore shows its true length.
4. Rotate the Stage 2 top view until generator $o	ext{–}7$ lies directly on the XY line, placing that generator on VP.
5. Project up from the Stage 3 top view to the Stage 2 height levels (keeping point $5'$ on XY) to complete the final front view.

> **Figure: Step 75.1: Initial projections of the cone resting with its base on HP**
>
> Step 75.1 of the projection of a cone. Contains a small reference box stating 'D = 40', 'H = 60'. An XY reference line is marked with 'x' on the left and 'y' on the right. Above the XY line is the front view: an isosceles triangle with its base on the XY line of length 40 mm and height 60 mm. The apex is labelled o', and the base points from left to right are labelled 1', 2'(8'), 3'(7'), 4'(6'), and 5'. Vertical projectors connect the base points downward to the top view below the XY line. The top view is a circle of diameter 40 mm divided into 8 equal sectors with central point o. The circumference points are numbered 1 (left), 2 (lower left), 3 (bottom), 4 (lower right), 5 (right), 6 (upper right), 7 (top), and 8 (upper left). Below the diagram are notes: 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Projection of a cone: Stage 2 front view tilted at 60 degrees**
>
> Step 75.2 of the projection of a cone with diameter D = 40 mm and height H = 60 mm.
> - Reference line xy.
> - Left (Simple position):
>   - Top view: Circle of diameter 40 mm divided into 8 equal parts numbered 1 through 8 counter-clockwise, with center labelled 'o'.
>   - Front view: Triangle with base of 40 mm on the xy line, apex o' at height 60 mm. Base points labelled 1', 2'(8'), 3'(7'), 4'(6'), 5'. Generators connect apex o' to base points.
> - Right (Tilted front view):
>   - Front view redrawn resting on point 5' on the xy line, with its base inclined at 60° to the horizontal/xy line.
>   - Base points: 1', 2'(8'), 3'(7'), 4'(6'), 5'. Apex: o'.
>   - Generators connect o' to the base points.
> - Labels: "SCALE 1:1", "ALL DIMENSIONS ARE IN mm". Given box: "D = 40", "H = 60".

> **Figure: Projection of a cone: Stage 2 completed front and top views**
>
> Step 75.3 of the projection of a cone with diameter D = 40 mm and height H = 60 mm.
> - Reference line xy.
> - Left (Simple position):
>   - Top view: Circle divided into 8 equal parts (1 to 8), center o.
>   - Front view: Triangle resting on xy line with base 1'-5' and apex o'.
> - Right (Tilted position):
>   - Front view: Base resting on point 5' on the xy line, inclined at 60° to xy. Points 1', 2'(8'), 3'(7'), 4'(6'), 5' and apex o'.
>   - Top view: Formed by intersecting vertical projectors from the front view and horizontal projectors from the initial top view. Base forms an apparent ellipse with points 1, 2, 3, 4, 5, 6, 7, 8 (arc through 4-5-6 is dashed/hidden). Tangents are drawn from the apex o to the elliptical base.
> - Labels: "SCALE 1:1", "ALL DIMENSIONS ARE IN mm". Given box: "D = 40", "H = 60".

> **Figure: Projection of a cone: Step 4 (75.4)**
>
> Step 75.4 of the orthographic projection of a cone of base diameter D = 40 mm and height H = 60 mm (Scale 1:1, all dimensions in mm):
> - Reference line labeled 'x' on the left and 'y' on the right.
> - Step 1:
>   - Front View: Isosceles triangle standing on the XY line. Apex o' at height 60 mm. Base points marked 1', 2'(8'), 3'(7'), 4'(6'), 5'.
>   - Top View: Circle of diameter 40 mm divided into 8 equal sectors numbered 1 to 8, with center o.
> - Step 2:
>   - Front View: Cone tilted such that its base 1'-5' is inclined at an angle of 60° to the horizontal / XY line, resting on point 5' on XY. Points: 1', 2'(8'), 3'(7'), 4'(6'), 5' and apex o'.
>   - Top View: Projected from the tilted front view and step 1 top view. The base is an ellipse with visible outer curve 7-8-1-2-3 and hidden (dashed) curve 3-4-5-6-7. Tangents drawn from apex o to the ellipse.
> - Step 3:
>   - Top View: The top view from step 2 is redrawn inclined, with apex o lying on the XY line. Base points 1 through 8 and apex o.
> - Given box: '75.4', 'D = 40', 'H = 60'.

> **Figure: Projection of a cone: Final Step (75.5)**
>
> Step 75.5 showing the complete projection of a cone of base diameter D = 40 mm and height H = 60 mm (Scale 1:1, all dimensions in mm):
> - Reference line labeled 'x' on the left and 'y' on the right.
> - Step 1: Initial front view (triangle, base on XY, points 1' to 5', apex o') and top view (circle divided into 8 parts numbered 1 to 8, center o).
> - Step 2: Cone tilted in front view with base at 60° to XY, resting on point 5'. Top view projected showing elliptical base (visible arc 7-8-1-2-3, dashed arc 3-4-5-6-7) and apex o.
> - Step 3:
>   - Top View: Reproduced from step 2 with apex o lying on the XY line and axis inclined to the VP.
>   - Final Front View: Projected from the tilted top view and step 2 front view using horizontal and vertical projectors. Shows apex o' and the base ellipse formed by points 1', 2', 3', 4', 5', 6', 7', 8', with contour generators connecting apex o' tangentially to the base.
> - Given box: '75.5', 'D = 40', 'H = 60'.

**Answer:** Three-stage projections of the cone ($D = 40$ mm, $H = 60$ mm) with base at 60° to HP, base point $5'$ on HP, and generator $o	ext{–}7$ lying on XY (VP).

<!-- page 9 | Practice: Pyramids and Cubes on HP with Special Face, Edge, and Diagonal Conditions -->

## Practice: Pyramids and Cubes on HP with Special Face, Edge, and Diagonal Conditions

Now that you can tilt solids by explicit degree angles, we will practice problems where the Stage 2 tilt is defined geometrically by placing a face, slant edge, apex, or cube diagonal parallel or perpendicular to a reference plane. Instead of measuring a numeric angle, geometric statements like "resting on a triangular face", "slant edge vertical", or "body diagonal perpendicular to VP" tell us directly which line in the solid must be made horizontal or vertical.

### The idea

When a problem states a geometric resting condition instead of a degree angle, the shape of the solid itself controls the tilt. In Stage 1, you must orient the base so the featured element—a **triangular face** (a flat lateral side of a pyramid), a **slant edge** (a corner line running from the base to the apex), or a **body diagonal** (the internal line connecting two opposite corners through the center of a cube)—appears as a single true-length line on the extreme right or left of the front view.

In Stage 2, you simply rotate the Stage 1 front view until that edge-view line matches the stated geometry. If the pyramid is *lying on* a triangular face or slant edge on HP, rotate that line directly onto the $xy$ line (making it horizontal). If a face or slant edge is *perpendicular to HP* (vertical), rotate that line to $90^\circ$ with the $xy$ line. If the pyramid rests *on its apex* on HP, draw the Stage 1 front view upside down with the apex $o'$ on $xy$ and the base at the top.

In Stage 3, translate the second condition into a top-view rotation. For example, making a vertical triangular face "parallel to VP" or making a horizontal body diagonal "perpendicular to VP" simply means rotating the Stage 2 top view by $90^\circ$.

### Worked example

**Problem 213:** A square pyramid of base edge 30 mm and height 60 mm is resting on HP on its triangular face such that the square base edge on HP is inclined at $30^\circ$ to VP. Draw its projections.

**Given:** Square pyramid, base edge $B = 30$ mm, height $H = 60$ mm, resting on HP on a triangular face, resting base edge inclined at $30^\circ$ to VP.
**Find:** Three-stage front and top view projections.

1. **Stage 1 (Simple position):** Draw the top view as a square $abcd$ of side 30 mm below $xy$ with right-hand edge $bc$ perpendicular to $xy$ so the triangular face $obc$ will appear as a single edge in the front view. Join the diagonals to mark the apex $o$. Project up to draw the front view triangle $a'(d')-b'(c')-o'$ of height 60 mm resting on $xy$.

> **Figure: Step 213.1: Projections of square pyramid in simple position**
>
> Step 213.1 of the solution showing the orthographic projections of a square pyramid in simple position resting on HP with its base.
> - Front view (above ground line x-y): Triangle with base on the x-y line spanning from a'(d') to b'(c') and vertex o' at the top. The vertical axis height is dimensioned as 60 mm.
> - Top view (below ground line x-y): A square base with vertices a (bottom-left), b (bottom-right), c (top-right), and d (top-left). The base edge is dimensioned as ◻30. The two diagonal lines intersect at the apex/center o, representing the slant edges of the pyramid.
> - Projection lines: Vertical alignment between top view vertices (a, d) and front view base corner a'(d'), top view vertices (b, c) and front view base corner b'(c'), and center o to apex o'.
> - Info box labelled '213.1' with 'B = 30' and 'H = 60'.

2. **Stage 2 Front View (Lying on triangular face):** Rotate the front view triangle to the right until the right-hand slant face $b'(c')-o'$ lies flat on the $xy$ line. Use compass arcs from $b'(c')$ and $o'$ to locate the lifted base edge $a'(d')$.

> **Figure: Step 213.2 of projection of a square pyramid lying on a slant triangular face or edge on the HP**
>
> Projection of a square pyramid with base side B = 30 mm and height H = 60 mm (Step 213.2).
> - Left (Simple position):
>   - Reference line xy.
>   - Front view: Isosceles triangle with base a'(d') - b'(c') = 30 mm resting on xy, apex o' at a vertical height of 60 mm.
>   - Top view: Square of side 30 mm with corners a (bottom-left), b (bottom-right), c (top-right), d (top-left), diagonals intersecting at apex o.
> - Right (Tilted position):
>   - Front view: The pyramid is tilted such that the slant edge/face b'(c')-o' lies horizontally on the xy line. Apex o' is on xy to the right, b'(c') is on xy to the left, and apex a'(d') is elevated above xy.
> - Labels and annotations: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', label '213.2', and parameter box 'B = 30', 'H = 60'.

3. **Stage 2 Top View:** Project vertical lines down from $a'(d')$, $b'(c')$, and $o'$ in the tilted front view, and intersect them with horizontal locus lines from the Stage 1 top view. Darken the visible upper faces and draw the hidden bottom base edge $bc$ as a dashed line.

> **Figure: Step 213.3 of projection of a square pyramid showing top view of tilted pyramid**
>
> Projection of a square pyramid with base side B = 30 mm and height H = 60 mm (Step 213.3).
> - Left (Simple position):
>   - Same as step 213.2, showing front view triangle (height 60 mm, base 30 mm) and top view square (30 mm × 30 mm).
> - Right (Tilted position):
>   - Front view: Tilted triangle with face b'(c')-o' on the xy line, apex a'(d') at top.
>   - Top view: Projected downward from front view and horizontally from initial top view. Corners of base: b (bottom-left), a (bottom-middle), c (top-left), d (top-middle). Apex o is at the far right. Visible edges include solid outlines b-c-d-o-a-b, while internal edges from d and a to o are shown as hidden (dashed) lines, and line b-c forms the base boundary.
> - Labels and annotations: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', label '213.3', and parameter box 'B = 30', 'H = 60'.

4. **Stage 3 Top View (Base edge at $30^\circ$ to VP):** Draw a construction line below $xy$ inclined at $30^\circ$ to $xy$, and reproduce the Stage 2 top view so the resting base edge $bc$ lies along this $30^\circ$ line.

> **Figure: Projection of a square pyramid - intermediate step 213.4**
>
> Orthographic projection step 213.4 of a square pyramid with base $B = 30\text{ mm}$ and height $H = 60\text{ mm}$:
> - Stage 1 (Simple position):
>   - Front View: Isosceles triangle with base of width $30\text{ mm}$ on the $xy$ reference line labeled $a'(d')$ on the left and $b'(c')$ on the right; apex $o'$ at height $60\text{ mm}$.
>   - Top View: A square of dimension $\square 30$, corners labeled $a$ (bottom-left), $b$ (bottom-right), $c$ (top-right), $d$ (top-left), with diagonals intersecting at center $o$.
> - Stage 2 (First tilt / lying on triangular face or slant edge on HP):
>   - Front View: Triangular shape lying on the $xy$ line with apex $o'$ on the $xy$ line, base edge $b'(c')$ on $xy$, and $a'(d')$ vertically above $b'(c')$.
>   - Top View: Apex $o$ projected to the right; base corners labeled $c, d$ at top and $b, a$ at bottom, connecting to apex $o$.
> - Stage 3 (Second tilt in top view):
>   - Top View reproduced and inclined such that the base edge line makes an angle of $30^\circ$ with the horizontal ($xy$ reference line), with corners $b, c, d, a$ and apex $o$ pointing downwards to the right.
>   - The final front view is not yet constructed in this step.

5. **Stage 3 Front View:** Project vertical lines up from all corners of the Stage 3 top view to meet horizontal locus lines from the Stage 2 front view. Connect the base $a'b'c'd'$ and slant edges to $o'$, keeping edges from the back corner $b'$ dashed.

> **Figure: Projection of a square pyramid - completed solution 213.5**
>
> Complete orthographic projection 213.5 of a square pyramid with base $B = 30\text{ mm}$ and height $H = 60\text{ mm}$:
> - Stage 1: Front view triangle (height $60$, base $30$ on $xy$) and top view square (side $30$, corners $a, b, c, d$, center $o$).
> - Stage 2: Front view tilted with apex $o'$ and base point $b'(c')$ on the $xy$ line; corresponding top view projected below.
> - Stage 3:
>   - Top view inclined at $30^\circ$ to the $xy$ line.
>   - Final Front View constructed by projecting upwards from the inclined top view and horizontally from the stage 2 front view: points $b', c'$ on the $xy$ line, $a', d'$ at the top base level, and apex $o'$ on the $xy$ line. Outlines $b'-a'-d'-o'-b'$ are solid; interior edges from $d'$ down to $c'$ are shown, with hidden/visible edge conventions.

**Answer:** The complete three-stage orthographic projections of the square pyramid lying on its triangular face $obc$ with base edge $bc$ at $30^\circ$ to VP are shown in Figure 213.5.

### More problems

#### Problem 58: Hexagonal pyramid lying on a triangular face

**Given:** Hexagonal pyramid, base edge 30 mm, height 60 mm, lying on a triangular face on HP, resting base edge at $50^\circ$ to VP, apex nearer to observer.
**Find:** Three-stage orthographic projections.

1. Draw a regular hexagon $abcdef$ of side 30 mm below $xy$ with right edge $cd \perp xy$, and project the Stage 1 front view of height 60 mm.

> **Figure: Step 58.1: Initial orthographic projection of hexagonal pyramid resting on HP**
>
> Step 58.1 shows the initial stage of orthographic projections for a hexagonal pyramid.
> - Given box: 'B = 30', 'H = 60'.
> - Reference line xy separates front view (above) and top view (below).
> - Front view: A triangular outline resting on the xy line with base vertices a'(f') on the left, b'(e') in the middle, and c'(d') on the right. Apex is o' at a vertical height of 60 mm from the xy line. A central vertical centerline connects o' to b'(e').
> - Top view: A regular hexagon oriented with two vertical side edges: a-f on the left and c-d on the right. Vertices are labelled counter-clockwise starting from bottom: b (bottommost vertex), c (lower right), d (upper right), e (topmost vertex), f (upper left), a (lower left). Center apex is labelled o, connected by radial lines (slant edges) to all six vertices: o-a, o-b, o-c, o-d, o-e, o-f.
> - Dimension 30 mm is marked along edge a-b.
> - Dimension 60 mm is marked for the pyramid height in front view.
> - Notes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. Rotate the front view so the triangular face $c'(d')-o'$ lies flat on the $xy$ line.

> **Figure: Step 58.2: Projection of hexagonal pyramid tilted on a slant edge**
>
> Worked step 58.2 for the projection of a hexagonal pyramid. Given box: B = 30 mm (base edge), H = 60 mm (height/axis length). Left: Initial projection showing the front view resting on reference line xy with base vertices a'(f'), b'(e'), c'(d') and apex o' at height 60 mm, with central line from b'(e') to o'. The corresponding top view shows a regular hexagon of side 30 mm with corners labeled a, b, c, d, e, f and apex o at the center connected to all vertices. Right: Front view tilted such that the slant edge c'(d')-o' lies on the reference line xy, with corners labeled c'(d'), b'(e'), a'(f'), and apex o'. Note below: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. Project down from the tilted front view and across from Stage 1 to complete the Stage 2 top view, marking hidden base edge $cd$ dashed.

> **Figure: Step 58.3: Top view projection of tilted hexagonal pyramid**
>
> Worked step 58.3 for the projection of a hexagonal pyramid (given B = 30 mm, H = 60 mm). Left: Initial top and front views as in step 58.2. Right: Front view tilted with slant edge c'(d')-o' on the xy line. Horizontal projection lines from the initial top view and vertical projectors from the tilted front view intersect to construct the final top view. In the final top view, base vertices are labeled a, b, c, d, e, f, apex is labeled o, visible outlines/edges are drawn as solid lines, and hidden edges are drawn as dashed lines. Note below: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

4. Rotate the Stage 2 top view so the resting base edge $cd$ is inclined at $50^\circ$ to $xy$ with apex $o$ pointing downward (nearer the observer).

> **Figure: Orthographic projections of a hexagonal pyramid - Step 58.4**
>
> Projection of a hexagonal pyramid with base edge B = 30 mm and height H = 60 mm. Scale 1:1, all dimensions in mm.
> - Stage 1 (Simple position): Base on HP, axis perpendicular to HP. Top view is a regular hexagon abcdef with side 30 mm and center apex o connected to all corners; edges af and cd are perpendicular to the XY line. Front view is an isosceles triangle on XY with base points a'(f'), b'(e'), c'(d'), apex o' at height 60 mm, and axis line shown.
> - Stage 2: Pyramid tilted to rest on HP on slant edge/face with base edge c'(d') and apex o' on the XY line. Top view projected with apex o to the right, foreshortened hexagonal base on the left, visible edges (solid) and hidden edges (dashed: o-a, o-f, a-b, a-f).
> - Stage 3: Top view from Stage 2 reproduced inclined at an angle of 50° to the VP (XY line). The front view for this stage is not yet drawn.

5. Project up from the Stage 3 top view and across from Stage 2 to complete the final front view.

> **Figure: Orthographic projections of a hexagonal pyramid - Step 58.5 (Complete solution)**
>
> Complete orthographic projection of the hexagonal pyramid (B = 30 mm, H = 60 mm). Scale 1:1, all dimensions in mm.
> - Stage 1: Front and top views in simple position (identical to 58.4).
> - Stage 2: Front view lying with c'(d') and apex o' on the XY line, and projected top view (identical to 58.4).
> - Stage 3: Top view tilted at 50° to XY with apex o pointing towards the bottom right. Final front view projected from Stage 3 top view and Stage 2 front view: apex o' lies on the XY line; base corners a', f' at the top level, b', e' at the intermediate level, and c', d' on XY, fully outlining the tilted hexagonal pyramid in elevation.

**Answer:** Projections of the hexagonal pyramid lying on face $ocd$ with edge $cd$ at $50^\circ$ to VP are completed in Figure 58.5.

#### Problem 59: Hexagonal pyramid lying on a lateral edge

**Given:** Hexagonal pyramid, base edge 30 mm, height 60 mm, lying on a lateral edge on HP inclined at $30^\circ$ to VP, apex nearer to observer.
**Find:** Three-stage orthographic projections.

1. Draw top view hexagon $abcdef$ of side 30 mm with corner $d$ on the extreme right so lateral edge $od$ is parallel to $xy$, then project the front view of height 60 mm.

> **Figure: Step 59.1: Initial projection of hexagonal pyramid resting on HP**
>
> Step 59.1 of the orthographic projection of a hexagonal pyramid with base edge 30 mm and height 60 mm.
> - Given box: B = 30, H = 60.
> - Reference line labeled x and y.
> - Front view (above xy): Symmetrical triangular projection with base a'-d' on the xy line and apex o' at height 60 mm above xy. Base points labeled from left to right: a', b' (f'), c' (e'), d'. Slant edges drawn from o' to each visible corner: o'a', o'b'(f'), o'c'(e'), and o'd'. Axis runs vertically from o' to the base.
> - Top view (below xy): Regular hexagon with corner vertices labeled counterclockwise starting from the leftmost vertex: a (leftmost corner on horizontal symmetry line), b (bottom-left), c (bottom-right), d (rightmost corner on horizontal symmetry line), e (top-right), f (top-left). Center apex labeled o, with radial lines connecting o to all six vertices (a, b, c, d, e, f). Dimension line shows bottom base edge bc = 30 mm.
> - Thin vertical projection lines connect points a, b, c, d, e, f, and o in the top view to corresponding points a', b'(f'), c'(e'), d', and o' in the front view.
> - Annotations at bottom: 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Rotate the front view until the right-hand slant edge $o'-d'$ rests completely flat on the $xy$ line.

> **Figure: Orthographic projection of a hexagonal pyramid - Step 2**
>
> Technical drawing labelled 59.2 showing the projection of a hexagonal pyramid with base edge B = 30 mm and height H = 60 mm.
> - Given box: 'B = 30', 'H = 60'.
> - Scale note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.
> - Initial Position (left):
>   - Front View: Triangular elevation resting on reference line x. Apex labelled o', vertical height dimensioned as 60. Base vertices labelled from left to right as a', b'(f'), c'(e'), d'. Centerline axis connects the base midpoint to o'. Slant edges run from apex o' to a', b'(f'), c'(e'), and d'.
>   - Top View: Regular hexagon with base edge dimensioned as 30 mm between b and c. Vertices labelled counter-clockwise: a (far left), b (bottom-left), c (bottom-right), d (far right), e (top-right), f (top-left). Center apex o is connected to all six base corners. Projectors connect the top view corners to the corresponding points on the reference line.
> - Second Position (right):
>   - Front view redrawn tilted so that slant edge o'-d' lies horizontally on the reference line.
>   - Vertices are labelled: o' at the right on the reference line, d' at the bottom-left on the reference line, c'(e') and b'(f') along the inclined base line, and apex corner a' at the highest position.
>   - Edges connect o' to a', b'(f'), c'(e'), and d'.

3. Intersect vertical projectors from Stage 2 with horizontal lines from Stage 1 to draw the Stage 2 top view, showing hidden edge $od$ dashed.

> **Figure: Orthographic projection of a hexagonal pyramid - Step 3**
>
> Technical drawing labelled 59.3 showing the complete projection of a hexagonal pyramid tilted on its slant edge.
> - Given box: 'B = 30', 'H = 60'.
> - Scale note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.
> - Reference line is labelled x on the left and y on the right.
> - Left side:
>   - Initial front and top views identical to figure 59.2, with base edge 30 mm and height 60 mm.
> - Upper right:
>   - Tilted front view with slant edge o'-d' lying on reference line xy. Base points are d' on xy, c'(e'), b'(f'), and a' at the apex of the base.
> - Lower right:
>   - Final top view obtained by projecting vertically downwards from the tilted front view and horizontally across from the initial top view.
>   - Vertices are labelled: d (far left), e and f (top), c and b (bottom), a (inside), and o (far right apex).
>   - The outer boundary is solid (d-e-f-o-b-c-d).
>   - Hidden edges and the axis/internal edges connecting to point a are shown as dashed lines.

4. Redraw the Stage 2 top view so the resting lateral edge $od$ lies on a line inclined at $30^\circ$ to $xy$ with apex $o$ nearer the observer.

> **Figure: Orthographic projections of a hexagonal pyramid inclined to HP and VP - Problem 59.4**
>
> Multi-stage orthographic projection of a hexagonal pyramid with base edge B = 30 mm and height H = 60 mm:
> 1. Stage 1 (Simple Position):
>    - Front View (above reference line xy): Triangular view with apex o' at height 60 mm from base on reference line xy. Base points labelled a', b'(f'), c'(e'), d'. Centerline indicated.
>    - Top View (below xy): Regular hexagon with base edge dimensioned as 30 mm. Vertices labelled a, b, c, d, e, f with apex o at the center. Projectors link top and front views.
> 2. Stage 2 (Tilted to HP):
>    - Front View: Pyramid lies with its slant edge o'-d' on the reference line xy. Base d'-a' is inclined to xy, with points d', c'(e'), b'(f'), and apex a' at the top, all connected to apex o'. Vertical height 60 mm is conserved.
>    - Top View: Projected from the front view and first stage. Base corners c, b, a, f, e, d are projected horizontally and vertically. Apex o is on the centerline. Outline of the pyramid and visible/hidden edges shown.
> 3. Stage 3 (Tilted to VP):
>    - Top View: The top view from stage 2 is reproduced tilted such that the axis makes an angle of 30° with a vertical projector line.
>    - A vertical bracket on the right side indicates the space for the final front view.
> - Text at bottom right: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

5. Project up to meet horizontal locus lines from Stage 2 and complete the Stage 3 front view.

> **Figure: Complete orthographic projections of a hexagonal pyramid inclined to HP and VP - Problem 59.5**
>
> Complete three-stage orthographic projection of a hexagonal pyramid with base edge B = 30 mm and height H = 60 mm:
> 1. Stage 1 (Simple Position):
>    - Front View: Apex o' at height 60 mm above reference line x-y. Base points on x-y labelled a', b'(f'), c'(e'), d'. Vertical centerline.
>    - Top View: Regular hexagon with corners a, b, c, d, e, f, apex o at center, side dimension 30 mm.
> 2. Stage 2 (Slant edge on HP):
>    - Front View: Slant edge o'-d' lies on the reference line x-y. Base is inclined with points d', c'(e'), b'(f'), a'.
>    - Top View: Plan view projected from stage 2 front view and stage 1 top view, showing foreshortened base and triangular faces.
> 3. Stage 3 (Inclined to VP):
>    - Top View: Top view from stage 2 reproduced tilted at an angle of 30° to the vertical.
>    - Front View: Complete final front view constructed by projecting points up from the tilted top view and across from the stage 2 front view. Vertices labelled a', b', c', d', e', f' and apex o'. Visible edges drawn solid, hidden edges dashed.
> - Text at bottom right: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Projections of the hexagonal pyramid lying on lateral edge $od$ at $30^\circ$ to VP are completed in Figure 59.5.

#### Problem 60: Square pyramid with triangular face parallel to VP

**Given:** Square pyramid, base edge 40 mm, height 60 mm, resting on a base edge on HP, triangular face containing that edge parallel to VP, base visible in front view.
**Find:** Three-stage orthographic projections.

1. Draw top view square $abcd$ of side 40 mm with edge $bc \perp xy$, and project the Stage 1 front view of height 60 mm.

> **Figure: Step 60.1: Initial projection of square pyramid resting on HP**
>
> Initial position (Step 60.1) of a square pyramid resting on HP with its base.
> - Reference line: Horizontal line labelled 'x' on the left and 'y' on the right.
> - Front view (above xy):
>   - An isosceles triangle with base lying on the xy line between points a'(d') on the left and b'(c') on the right, and apex o' above.
>   - Vertical height of the apex o' is dimensioned as 60 mm.
>   - A vertical dashed centerline passes through the apex o' to the base.
> - Top view (below xy):
>   - A square base with corners labelled counterclockwise starting from bottom-left: 'a' (bottom-left), 'b' (bottom-right), 'c' (top-right), 'd' (top-left).
>   - The square has dimension '□40' along the bottom edge.
>   - Diagonals connect the corners (a-c and b-d) intersecting at apex 'o'.
>   - Vertical projection lines connect corresponding points between front view and top view: a'(d') aligns with line d-a, and b'(c') aligns with line c-b; apex o' aligns with top view apex o.
> - An information box labelled '60.1' with 'B = 40' and 'H = 60' is located to the right of the front view apex.
> - Notes at the bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. Rotate the front view about $b'(c')$ on $xy$ until the triangular face $b'(c')-o'$ stands perpendicular ($90^\circ$) to $xy$, keeping it parallel to HP's vertical projector.

> **Figure: Orthographic projection of a square pyramid, Step 60.2**
>
> Step 60.2 of orthographic projection of a square pyramid with base side B = 40 mm and height H = 60 mm.
> Left (Initial position):
> - Front view: Isosceles triangle with base a'(d')-b'(c') on reference line xy and apex o', height dimensioned as 60 mm. Vertical chain line represents axis.
> - Top view: Square a-b-c-d with diagonals meeting at apex o, dimensioned as square 40 (□40).
> Right (Second position front view):
> - Front view tilted such that slant edge o'-b'(c') is perpendicular to the reference line xy (marked with a 90° arc between xy and edge o'-b'(c')). Slant base a'(d')-b'(c') is elevated above xy at a'(d').
> Annotations box: '60.2', 'B = 40', 'H = 60', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

3. Project down and across to construct the Stage 2 top view, where the vertical face $obc$ appears as a single horizontal line segment.

> **Figure: Orthographic projection of a square pyramid, Step 60.3**
>
> Step 60.3 showing the completed projection of the square pyramid.
> Left (Initial position):
> - Front view: Triangle a'(d')-b'(c')-o' resting on xy, height 60 mm.
> - Top view: Square a-b-c-d with base 40 mm (□40), apex o at center.
> Right (Second position):
> - Front view: Slant edge o'-b'(c') is perpendicular (90°) to xy.
> - Top view: Projected downward from the second front view and horizontally from the first top view. Corner points d, a, c, b form an apparent rectangle. Slant edges connect corners a, b, c, d to apex o, which lies on edge c-b.
> Annotations box: '60.3', 'B = 40', 'H = 60', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

4. Rotate the Stage 2 top view by $90^\circ$ so face $obc$ becomes parallel to $xy$ at the back, placing the base toward the observer so it is visible.

> **Figure: Orthographic projection stages of a square pyramid (Problem 60.4)**
>
> Orthographic projection of a square pyramid with base side B = 40 mm and axis height H = 60 mm. Stage 1 (Initial position): Front view is an isosceles triangle a'(d')-b'(c')-o' on the XY line with base 40 mm and vertical axis height 60 mm. Top view is a square base a-b-c-d of side 40 mm with diagonals meeting at apex o. Stage 2: Front view tilted such that slant edge o'-b'(c') is perpendicular to the XY line (indicated by a right-angle symbol at b'(c')). Corresponding top view is projected with apex o on the right. Stage 3: Top view rotated such that edge c-b is at the top with apex o on it, and corners d and a are at the bottom. The final front view is not drawn. Given box: B = 40, H = 60. Notation: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

5. Project up from Stage 3 and across from Stage 2 to complete the final front view with the full square base $a'b'c'd'$ visible.

> **Figure: Complete orthographic projection of a square pyramid (Problem 60.5)**
>
> Complete three-stage orthographic projection of a square pyramid with base side B = 40 mm and axis height H = 60 mm. Stage 1: Front view triangle a'(d')-b'(c')-o' resting on XY line, base 40 mm, height 60 mm. Top view square a-b-c-d (40 mm) with apex o at the center. Stage 2: Pyramid tilted with slant edge o'-b'(c') perpendicular to XY line (with a right-angle symbol at b'(c')). Top view projected below. Stage 3: Top view rotated such that edge c-b is horizontal at top with apex o, corners d and a at bottom. Final front view is projected above XY: apex o' is connected to base corners d', c', b', a'; visible outlines and edges are solid, hidden edges to inner corners are shown dashed. Given box: B = 40, H = 60. Notation: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Watch out.** For a tilted triangular face to be parallel to VP in Stage 3, it must first be made vertical (perpendicular to HP) in Stage 2.

**Answer:** Projections of the square pyramid with vertical face $obc$ parallel to VP and base visible are shown in Figure 60.5.

#### Problem 197: Pentagonal pyramid with triangular face perpendicular to HP

**Given:** Pentagonal pyramid, base edge 30 mm, height 60 mm, resting on a base edge on HP, containing triangular face $\perp$ HP, resting base edge parallel to VP and nearer to it.
**Find:** Three-stage orthographic projections.

1. Draw regular pentagon $abcde$ of side 30 mm below $xy$ with left edge $ae \perp xy$, and project the Stage 1 front view of height 60 mm.

> **Figure: Step 197.1: Initial projection of pentagonal pyramid**
>
> Step 197.1 showing the first stage of projection of a regular pentagonal pyramid. A data box on the left reads: '197.1', 'B = 30', 'H = 60'. Reference ground line is marked 'x' on the left and 'y' on the right.
> - Top View (below xy line): A regular pentagon with base edge a-e positioned vertically on the left (dimensioned 30 mm). Apex o is at the center, connected to vertices a, b, c, d, e by slant edges.
> - Front View (above xy line): Triangular elevation resting on the xy line with base vertices a'(e'), b'(d'), and c'. Slant edges connect to apex o' at a vertical height dimensioned as 60 mm.
> - Projection lines: Thin vertical projectors connect corresponding vertices between the top and front views.
> - Notes below the drawing: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. Tilt the front view about base edge $a'(e')$ on $xy$ until the left triangular face $o'-a'(e')$ is perpendicular ($90^\circ$) to $xy$.

> **Figure: Projection of a pentagonal pyramid, step 197.2**
>
> Step 197.2 of the projection of a pentagonal pyramid (base side B = 30 mm, height H = 60 mm). 
> Left (initial position): 
> - Top view: regular pentagon a-b-c-d-e with vertical side a-e = 30 mm on the left, corner c on the right, and apex o at the center connected to all vertices.
> - Front view: base a'(e')-b'(d')-c' lying on the reference line x-y. Apex o' is on the central axis at height 60 mm above the base. Triangular faces are shown bounded by o'-a'(e'), o'-b'(d'), and o'-c'.
> Right (second stage - front view tilted):
> - The front view is tilted such that the slant edge o'-a'(e') becomes vertical (perpendicular to x-y). The base a'(e')-c' is inclined, with midpoint b'(d') along the base edge. Apex o' is at the top directly above a'(e').
> Labels and parameters box: '197.2', 'B = 30', 'H = 60', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

3. Project vertical lines down and horizontal lines across to complete the Stage 2 top view.

> **Figure: Projection of a pentagonal pyramid, step 197.3**
>
> Step 197.3 of the projection of a pentagonal pyramid (base side B = 30 mm, height H = 60 mm). 
> Left (initial position): 
> - Identical to step 197.2: top view pentagon a-b-c-d-e (side a-e = 30 mm vertical on left) with apex o; front view on x-y line with base a'(e')-b'(d')-c' and apex o' at height 60 mm.
> Right (second stage - full projection):
> - Front view: tilted such that slant edge o'-a'(e') is perpendicular to the x-y line. Base line a'(e')-b'(d')-c' is tilted up towards the right.
> - Top view: projected from the tilted front view and horizontal projectors from the initial top view. Base points a, e form a vertical line on the left below a'(e'); apex o is located between a and e; points d, c, b are projected to form the distorted pentagonal base; visible edges and base outline are drawn with thick continuous lines.
> Labels and parameters box: '197.3', 'B = 30', 'H = 60', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

4. Rotate the Stage 2 top view by $90^\circ$ so resting base edge $ae$ is parallel to $xy$ and placed nearer to the $xy$ line.

> **Figure: Orthographic projection of a pentagonal pyramid, stages 1 and 2 with rotated top view**
>
> Step of worked solution for problem 197.4. Given parameters: base edge B = 30 mm, axis height H = 60 mm; Scale 1:1, all dimensions in mm.
> - Stage 1 (Initial position): Front view is an isosceles triangle with base a'(e') to c' on the xy line and apex o' at height 60 mm. Base edge a'(e')-b'(d')-c' with axis shown as a center line. Top view is a regular pentagon a-b-c-d-e with edge a-e of length 30 mm perpendicular to xy on the left, with all corners connected to apex o.
> - Stage 2 (First tilt): Front view tilted such that edge o'-a'(e') is vertical (perpendicular to xy line), base a'(e')-c' inclined to HP. Below xy, the top view is projected from this front view and Stage 1 top view, showing apex o and vertices a, b, c, d, e.
> - Stage 3 (Incomplete): Top view reproduced to the right, rotated so that edge a-e is horizontal at the top with apex o positioned on line a-e.

5. Project up to intersect horizontal locus lines from the Stage 2 front view and complete the final front view.

> **Figure: Complete three-stage orthographic projection of a pentagonal pyramid**
>
> Completed worked solution for problem 197.4. Given parameters: B = 30 mm, H = 60 mm; Scale 1:1, all dimensions in mm.
> - Stage 1: Front view triangle (height 60 mm) on xy line labeled a'(e'), b'(d'), c', o'. Top view regular pentagon (edge 30 mm) labeled a, b, c, d, e, o.
> - Stage 2: Front view tilted with edge o'-a'(e') vertical to xy. Top view projected below xy with apex o connected to base corners.
> - Stage 3: Top view redrawn with base edge a-e horizontal at the top. The final front view is projected above the xy line, showing apex o' at the top, visible base outline b'-a'-e'-d' and slant edges o'-b', o'-d', with hidden lines drawn dashed connecting to rear base corner c' and edges.

**Answer:** Projections of the pentagonal pyramid with face $oae \perp$ HP and edge $ae$ parallel and nearer to VP are shown in Figure 197.4.

#### Problem 61: Square pyramid with lateral edge perpendicular to HP

**Given:** Square pyramid, base edge 40 mm, height 60 mm, resting on a base corner on HP, lateral edge through resting corner $\perp$ HP, adjacent faces equally inclined to VP, base visible in front view.
**Find:** Three-stage orthographic projections.

1. Draw top view square $abcd$ of side 40 mm with diagonals parallel and perpendicular to $xy$ (corner $c$ on right), and project the front view of height 60 mm.

> **Figure: Step 61.1: Initial projection of square pyramid with base corner on HP**
>
> Step 61.1 orthographic projection of a square pyramid in simple position. Reference line labeled x-y. Below the xy line (top view), a square of base side dimensioned as '□40' is oriented with diagonals horizontal and vertical; corners labeled 'a' (left), 'b' (bottom), 'c' (right), 'd' (top), and center apex 'o'. Thin vertical projectors extend from the top view to the xy line: corner 'a' to 'a'', corners 'b' and 'd' to 'b' (d')', and corner 'c' to 'c''. Above the xy line (front view), the base lies on the xy line from a' to c' with b'(d') at the center. Apex o' is projected at a vertical height dimensioned as '60' directly above b'(d'), forming an isosceles triangular elevation a'-o'-c' with an axis/edge line o'-b'(d'). Beside the drawing, a small info box is labeled '61.1' with 'B = 40' and 'H = 60'. Text at the bottom states 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Rotate the front view about corner $c'$ on $xy$ until the right-hand slant edge $o'-c'$ stands perpendicular ($90^\circ$) to $xy$.

> **Figure: Projection of a square pyramid, step 61.2**
>
> Step 61.2 showing the tilt of a square pyramid in the front view. Box details: B = 40, H = 60. First stage: Front view is a triangle of base 40 mm (represented by corner points a' to c' on the xy line with central axis/projector through b'(d')) and height 60 mm to apex. Top view is a square oriented with diagonals along horizontal/vertical (rhombus orientation with corners a, b, c, d and center o), side length 40 mm (labeled with square symbol 40). Second stage: Front view is tilted so that the slant edge o'-c' is vertical, making an angle of 90° with the xy ground line, with apex o' at the top and base corners a', b'(d'), and corner c' resting on the xy line. Note below reads: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. Project down and across to draw the Stage 2 top view, where points $o$ and $c$ coincide at a single point.

> **Figure: Projection of a square pyramid, step 61.3**
>
> Step 61.3 showing projection of the top view from the tilted front view. Box details: B = 40, H = 60. First stage: Same initial front and top views (height 60, base side 40). Second stage: Front view has the pyramid tilted such that slant edge o'-c' is at 90° to the xy line, resting on c'. Vertical projectors are drawn downward from a', b'(d'), and o'/c', and horizontal projectors are drawn from the first stage top view (from d, a, c, and b) to construct the new top view with vertices a, b, c, d and apex o coinciding with c (labeled o(c)). Note below reads: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

4. Rotate the Stage 2 top view by $90^\circ$ so the symmetry line $ac$ is perpendicular to $xy$ and the base lies nearer the observer.

> **Figure: Orthographic projections of a square pyramid (Step 61.4)**
>
> Step 61.4 of the projection of a square pyramid with base side B = 40 mm and height H = 60 mm.
> - Given box: B = 40, H = 60.
> - Stage 1 (Initial position):
>   - Front View (above reference line XY): An isosceles triangle with base on XY spanning from a' through b'(d') to c', apex at height 60 mm.
>   - Top View (below XY): A square of side 40 mm with corners a (left), b (bottom), c (right), d (top), and apex o at the center, oriented with diagonals horizontal (ac) and vertical (bd).
> - Stage 2 (Tilted on slant edge):
>   - Front View: The pyramid is tilted so that the slant edge o'-c' is vertical (perpendicular to XY line, marked with a right-angle symbol). Base a'-c' is inclined, with b'(d') along the base.
>   - Top View: Projectors from Stage 2 front view and horizontal projectors from Stage 1 top view form the foreshortened top view with points a, b, d, and combined o(c) on the right.
> - Stage 3 (Rotated top view):
>   - Top View: Reoriented top view with o(c) at the top, a at the bottom, d on the left, and b on the right.
> - Text: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

5. Project up and across to complete the Stage 3 front view with the entire base $a'b'c'd'$ visible.

> **Figure: Orthographic projections of a square pyramid (Step 61.5 - Final Stage)**
>
> Step 61.5 completing the projection of the square pyramid (B = 40 mm, H = 60 mm).
> - Given box: B = 40, H = 60.
> - Stage 1 (Initial position):
>   - Front View: Triangle of base length corresponding to square diagonal, height 60 mm, labelled a', b'(d'), c'.
>   - Top View: Square with corners a, b, c, d and center o, side length 40 mm, diagonals parallel/perpendicular to XY.
> - Stage 2 (Slant edge vertical):
>   - Front View: Slant edge o'-c' is vertical (perpendicular to XY). Apex o' at top right, base tilted up to a'.
>   - Top View: Foreshortened view projected from Stage 2 front view.
> - Stage 3 (Final projection):
>   - Top View: Top view from stage 2 reproduced/rotated so that the axis/slant edge lies at an angle, with corners d (left), a (bottom), b (right), and o(c) at top.
>   - Front View: Final front view projected by vertical projectors from the rotated top view and horizontal projectors from the second stage front view. Corners are d' (left), c' (on XY), b' (right), a' (center/hidden behind), and apex o' (top), with dashed lines indicating hidden base edges.

**Answer:** Projections of the square pyramid with lateral edge $oc \perp$ HP and base visible are shown in Figure 61.5.

#### Problem 62: Square pyramid resting on apex with vertical slant edge

**Given:** Square pyramid, base edge 40 mm, height 60 mm, resting on apex on HP, one slant edge vertical, triangular face containing that edge $\perp$ VP, base visible in front view.
**Find:** Three-stage orthographic projections.

1. Draw top view square $abcd$ of side 40 mm with diagonal $ac$ parallel to $xy$, and project an inverted front view with apex $o'$ on $xy$ and base $a'c'$ 60 mm above $xy$.

> **Figure: Step 62.1: Initial position of square pyramid resting on its apex on HP**
>
> Initial position orthographic projection (Step 62.1) of a square pyramid with base edge 40 mm and height 60 mm.
> - Reference line labeled 'x' on the left and 'y' on the right.
> - In the Front View (above the xy line):
>   - Apex o' is on the xy reference line.
>   - Base is represented as a horizontal line segment a'-c' of length equal to the diagonal of the square base, positioned 60 mm above xy.
>   - The central axis/slant edge connects o' to b'(d') at the center of the base line.
>   - Outer slant edges connect o' to a' and o' to c'.
>   - A label box to the right indicates '62.1' with 'B = 40' and 'H = 60'.
> - In the Top View (below the xy line):
>   - The square base is oriented with its diagonals parallel and perpendicular to the xy line (diamond orientation), with corners labeled a (left), b (bottom), c (right), and d (top).
>   - Center apex o is connected to the corners with dashed lines along the diagonals.
>   - The edge a-b is dimensioned with '□40'.
> - Projection lines connect corresponding points a to a', c to c', and b, d to b'(d') across the xy line.
> - Annotation at the bottom right states 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Rotate the inverted front view about $o'$ on $xy$ until the right slant edge $o'-c'$ is vertical ($90^\circ$ to $xy$).

> **Figure: Step 62.2: Projection of a square pyramid with axis/slant edge inclined to HP**
>
> Step 62.2 of the projection of an inverted square pyramid. Left: initial front view showing base a'-c' horizontal of height H = 60 above apex o' on the reference line xy, with middle edge b'(d'). Below xy, the top view shows the base as a rhombus/square standing on corner with side dimension 40 mm (labeled □40), vertices a, b, c, d, and apex o at the center with dashed/chain lines. Right: second front view tilted such that slant edge o'-c' is perpendicular to the xy line (vertical), with base vertices a', b'(d'), c' and apex o' on xy. Parameters in box: B = 40, H = 60. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. Project down from the tilted front view and across from Stage 1 to complete the Stage 2 top view.

> **Figure: Step 62.3: Final top view projection of the square pyramid**
>
> Step 62.3 of the projection of an inverted square pyramid. Left: initial front and top views (B = 40, H = 60, side □40). Right: front view tilted with slant edge o'-c' vertical on the xy line. Projectors are drawn downwards from front view vertices a', b'(d'), c', o' and horizontal projectors from the first top view vertices a, b, c, d to construct the second top view. The resulting top view shows corners a, b, c(o), d with visible edges drawn as solid lines. Parameters in box: B = 40, H = 60. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

4. Rotate the Stage 2 top view by $90^\circ$ so the base faces the observer (downward) and symmetry line $ac$ is perpendicular to $xy$.

> **Figure: Orthographic projections of an inverted square pyramid tilted on its slant edge**
>
> Projection of an inverted square pyramid with given parameters: B = 40 mm (base edge), H = 60 mm (height/axis).
> - Step 1:
>   - Front View (above reference line xy): Apex o' lies on the xy line. Base line a'-c' is horizontal and parallel to xy at height H = 60. Point b'(d') is marked at the midpoint of the base. An inverted triangle is formed by edges o'a', o'c', and horizontal base a'c', with a vertical center edge from o' to b'(d').
>   - Top View (below xy line): A square base a-b-c-d oriented with diagonal a-c horizontal and diagonal b-d vertical. Base side length is dimensioned as ▢40. Horizontal diagonal a-c is drawn with a dashed line, while vertical diagonal b-d is solid. Corner a is on the left, c on the right, d at top, and b at bottom.
> - Step 2:
>   - Front View: The pyramid is tilted such that slant edge o'-c' is vertical (perpendicular to the xy line, indicated by a right-angle symbol at o'). The base a'-c' is tilted downwards to the left, with apex o' on the xy line. Apex connects to b'(d') and a'.
>   - Top View: Projected below step 2 using projectors from step 2 front view and step 1 top view. Base corner c coincides with apex o labeled as c(o) on the right; d is at top, b at bottom, a at left. Diagonal a-c is dashed.
> - Step 3:
>   - Top view is reproduced rotated counterclockwise: square with corners a at bottom-left, b at bottom-right, c(o) at top-right, and d at top-left, with solid diagonals connecting opposite corners.

5. Project up and across to draw the final front view.

> **Figure: Completed three-stage orthographic projection of an inverted square pyramid**
>
> Completed orthographic projections of an inverted square pyramid with given parameters: B = 40 mm, H = 60 mm.
> - Step 1:
>   - Front View: Apex o' on xy line, horizontal base a'-c' at height 60 mm, mid-point b'(d') connected to o'.
>   - Top View: Square base a-b-c-d oriented diagonally with base edge ▢40. Horizontal diagonal a-c dashed, vertical diagonal b-d solid.
> - Step 2:
>   - Front View: Tilted with slant edge o'-c' perpendicular to the xy line (marked with right-angle symbol at o'). Base a'-c' inclined. Apex o' connected to b'(d') and a'.
>   - Top View: Projected directly below step 2; corner c(o) on right, d at top, b at bottom, a at left.
> - Step 3:
>   - Top View: Rotated counterclockwise with corners a (bottom-left), b (bottom-right), c(o) (top-right), d (top-left). Diagonal a-c(o) is dashed.
>   - Front View: Projected upwards from step 3 top view and horizontally from step 2 front view. Apex o' lies on the xy line at the rightmost projector. Slant edge c'-o' is vertical along the projector from c(o) (marked with a right-angle symbol at o'). Corners a', b', c', d' form the tilted top base: edge c'-d' is horizontal, edges connect to form the quadrilateral base. Slant edges to apex o': edge d'-o' is solid, b'-o' is solid, c'-o' is solid, and a'-o' is dashed (hidden edge).

> **Watch out.** A triangular face cannot contain a single diagonal slant edge $oc$; the solution places the vertical slant edge $oc$ in a plane perpendicular to VP.

**Answer:** Projections of the inverted square pyramid resting on apex $o'$ with slant edge $o'c'$ vertical are shown in Figure 62.5.

#### Problem 82: Cube with body diagonal perpendicular to VP

**Given:** Cube of edge 40 mm, resting on a base corner on HP, solid body diagonal perpendicular to VP.
**Find:** Three-stage orthographic projections.

1. Draw top view square $abcd(1234)$ of side 40 mm with edges at $45^\circ$ to $xy$ so diagonal $1c$ is parallel to $xy$, and project the Stage 1 front view of height 40 mm with body diagonal $1'-c'$ drawn.

> **Figure: Step 82.1: Initial projection of a 40 mm cube**
>
> Step 82.1 showing the initial front view and top view of a cube with 40 mm edge. The top view is oriented as a square with edges inclined at 45° to the reference line, labeled corners a(1) on the left, b(2) at the bottom, c(3) on the right, and d(4) at the top. The side is dimensioned as '□40'. Projectors extend up to the horizontal reference line xy. The front view is drawn resting on xy, spanning from projector of a(1) to c(3), with base points labeled 1', 2'(4'), 3' and top points labeled a', b'(d'), c'. A faint line connects corner 1' to opposite corner c' representing the body diagonal. Label 'B = 40' is indicated above the front view. Notes state 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Tilt the front view about resting corner $3'$ on $xy$ until the body diagonal $1'-c'$ is horizontal (parallel to $xy$).

> **Figure: Projection of a solid - Step 82.2: Initial views and tilted front view**
>
> Step 82.2 of the orthographic projection of a cube (side 40 mm):
> - Given box: 'B = 40'.
> - Stage 1 (Initial position):
>   - Top view: Square of side 40 mm inclined at 45° to the reference line xy, corners labelled a(1) at left, b(2) at bottom, c(3) at right, d(4) at top. Dimension '□40' along side a-b.
>   - Front view: Rectangle on reference line xy with base corners 1' (left), 2'(4') (middle), 3' (right) and top corners a' (left), b'(d') (middle), c' (right). A diagonal is drawn from corner 1' to c', and a perpendicular is dropped from corner 3' to meet the diagonal at point h' with a right-angle symbol.
> - Stage 2 (Tilted front view):
>   - The front view is redrawn tilted such that the body diagonal 1'-c' is horizontal (parallel to xy), resting on corner 3' on the xy line. The perpendicular from 3' to h' on 1'-c' is vertical. Corners are labelled 1', 2'(4'), 3', a', b'(d'), and c'.

3. Project down from Stage 2 and across from Stage 1 to complete the Stage 2 top view, where body diagonal $1c$ appears in true length parallel to $xy$.

> **Figure: Projection of a solid - Step 82.3: Final front and top views**
>
> Step 82.3 of the orthographic projection of a cube (side 40 mm):
> - Given box: 'B = 40'.
> - Shows the complete two-stage projection:
>   - Stage 1: Same as Step 82.2 (initial front view and square top view with side □40).
>   - Stage 2 Front View: Tilted cube resting on corner 3' on reference line xy with body diagonal 1'-c' horizontal.
>   - Stage 2 Top View: Projected downwards from the tilted front view and horizontally from the initial top view.
>     - Outer boundary forms an irregular hexagon with vertices 1, 2, b, c, d, 4.
>     - Visible edges are drawn as solid lines.
>     - Hidden edges from internal vertex 3 (connected to 2, 4, and c) are drawn with dashed lines.
>     - Internal edges connected to vertex a (lines a-1, a-b, a-d) are solid.
>     - Projection lines connect corresponding vertices between views.

4. Rotate the Stage 2 top view by $90^\circ$ so the horizontal body diagonal $1c$ becomes perpendicular to $xy$.

> **Figure: Orthographic projections of a cube (side 40 mm) - Step 82.4**
>
> Solution step 82.4 showing orthographic projections of a cube with edge 40 mm (B = 40). Scale 1:1, dimensions in mm. The drawing contains three stages across the reference line x-y: Stage 1 (left): Initial top view is a square tilted at 45° to XY with corners a(1), b(2), c(3), d(4), dimensioned 40 mm (square symbol 40). Front view above XY shows base corners 1', 2'(4'), 3' on the XY line and top face a', b'(d'), c'. Body diagonal 1'-c' is drawn with a perpendicular from b'(d') meeting it at h' (right angle marked). Stage 2 (center): The cube is tilted such that corner 3' rests on the XY line and the body diagonal is tilted. Top view is projected downward from the tilted front view and horizontally from stage 1, forming an apparent hexagonal silhouette with vertices 1, 4, d, c, b, 2 and internal vertices a and 3, with visible (solid) and hidden (dashed) edges. Stage 3 (right): The top view is reproduced/rotated to a specified inclination to the VP, with vertices 1, 2, b, c, d, 4, a, 3 and dashed edges shown; the final front view is not yet drawn in this step.

5. Project up and across to complete the Stage 3 front view, where the body diagonal $1'(c')$ reduces to a single point at the center.

> **Figure: Orthographic projections of a cube (side 40 mm) - Complete Step 82.5**
>
> Solution step 82.5 showing the completed orthographic projection of the cube with side 40 mm (B = 40). Scale 1:1, dimensions in mm. Consists of three stages: Stage 1 (left): Identical to 82.4, showing initial front and top views with square side 40 mm, corners a(1), b(2), c(3), d(4), front view 1', 2'(4'), 3' and a', b'(d'), c', diagonal 1'-c' with normal from b'(d') to h'. Stage 2 (center): Identical to 82.4, showing front view tilted on corner 3' and projected intermediate top view. Stage 3 (right): Complete final projection. Bottom part is the rotated top view with vertices 1, 2, b, c, d, 4, a, 3. Top part is the completed final front view projected vertically from stage 3 top view and horizontally from stage 2 front view, showing vertices labelled a', b', c'(1'), d', 2', 3', 4' with solid boundary lines, internal solid lines, and dashed hidden lines.

> **Watch out.** Because a body diagonal connects opposite corners through the cube's interior, you must orient the Stage 1 top view with its diagonal parallel to $xy$ so the body diagonal shows its true length in the Stage 1 front view.

**Answer:** Projections of the 40 mm cube resting on corner $3'$ with body diagonal $1c \perp$ VP are completed in Figure 82.5.

<!-- page 10 | Practice: True Inclination to Both Planes (Locus and Profile Plane Problems on HP) -->

## Practice: True Inclination to Both Planes (Locus and Profile Plane Problems on HP)
Up to this point, you rotated the Stage 2 top view directly by a given top-view angle or edge condition. Now we tackle problems where the true inclination of an already-tilted axis or slant edge to the Vertical Plane (VP) is given. Whenever a problem specifies the true angle of a foreshortened axis or slant edge with VP, you must first construct a locus triangle to find the enlarged apparent angle $\beta$ before rotating the Stage 2 top view.

### The idea
When an axis or slant edge of true length $L$ is tilted to the Horizontal Plane (HP) by an angle $\theta$ in Stage 2, it is no longer parallel to HP. Its Stage 2 top view foreshortens to a shorter length $L_1$. If you rotate this foreshortened line $L_1$ directly at the given true angle $\phi$ to the $xy$ line in Stage 3, its true 3D angle with VP will be wrong because the line slopes upward while turning.

To keep the true angle with VP equal to $\phi$, the vertical distance of the moving endpoint in front of VP must match the distance set by the true length $L$ inclined at $\phi$. We draw a line from a fixed point (such as the base center $p$ or resting corner $c$) at the true angle $\phi$ to $xy$ and mark the true length $L$ along it. Through that endpoint, we draw a horizontal **locus line** parallel to $xy$. Next, with the same fixed point as center and the shorter Stage 2 top-view length $L_1$ as radius, we swing an arc to cut the locus line. The line joining the fixed point to this intersection gives the **apparent angle** $\beta$ (where $\beta > \phi$), which is the true orientation of the Stage 2 top view.

A special case occurs when the true angles with HP and VP are **complementary inclinations** ($\theta + \phi = 90^\circ$, such as $50^\circ + 40^\circ = 90^\circ$ or $45^\circ + 45^\circ = 90^\circ$). Here, the foreshortened top-view length $L_1 = L \cos\theta$ equals $L \sin\phi$, which is the exact perpendicular distance to the locus line. The arc of radius $L_1$ touches the locus line tangentially straight down from the fixed point, making the apparent angle $\beta = 90^\circ$ and placing the axis or slant edge in a **Profile Plane (PP)** perpendicular to both HP and VP.

### Worked example
**Problem 56: Pentagonal Pyramid with Slant Edge Inclined to Both Planes**
**Given:** Pentagonal pyramid, base edge 30 mm, height 60 mm, resting on a base corner on HP with the slant edge containing that corner inclined at $50^\circ$ to HP and $30^\circ$ to VP.
**Find:** Three-stage orthographic projections and the apparent angle $\beta$ of the slant edge in the top view.

1. Draw the Stage 1 top view as a regular pentagon $abcde$ of side 30 mm with left edge $ae$ perpendicular to $xy$ so corner $c$ points to the right, and project the Stage 1 front view of height 60 mm.

> **Figure: Step 56.1: Initial projection of pentagonal pyramid resting on base in HP**
>
> Step 56.1 of the solution for question 56 showing the initial orthographic projections of a pentagonal pyramid. Top view: pentagon with vertical edge ae on the left (dimension 30 mm) and corner c pointing horizontally to the right. Slant edges connect corners a, b, c, d, e to the central apex o. Front view above reference line xy: base lies on the xy line with points a'(e') on the left, b'(d') inside, and c' on the right. Apex o' is directly above the center, with a vertical height dimension of 60 mm. The outline is triangle o'-a'(e')-c' with edge o'-b'(d') drawn as a visible line. An inset box reads B = 30, H = 60. Bottom notes state 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Rotate the Stage 1 front view about corner $c'$ on $xy$ until the right-hand slant edge $o'c'$ makes $50^\circ$ with $xy$ because this slant edge is in true length in Stage 1.

> **Figure: Projection of a pentagonal pyramid - Step 56.2: Initial projections and tilted front view**
>
> Step 56.2 of the projection of a pentagonal pyramid.
> 
> Given box:
> - Problem number: 56.2
> - Base side ($B$): 30 mm
> - Height ($H$): 60 mm
> 
> Initial Views:
> - Ground/reference line labeled $x$ at left and $y$ at right.
> - Top View: Regular pentagon with apex at center $o$ and base vertices $a, b, c, d, e$. Edge $e-a$ is vertical on the left with dimension 30 mm. Apex $o$ is connected to all base vertices $a, b, c, d, e$.
> - Front View: Triangular elevation directly projected from the top view. Base lies on the reference line with points $a'(e')$, $b'(d')$, and $c'$. Apex is labeled $o'$ at a vertical height of 60 mm from the base. Slant edges connect $o'$ to $a'(e')$, $b'(d')$, and $c'$.
> 
> Second Stage (Tilted Front View):
> - The pyramid is tilted such that it rests on base corner $c'$ on the reference line $xy$.
> - Slant edge $o'c'$ is inclined at an angle of $50^\circ$ to the $xy$ line / horizontal plane.
> - Vertices labeled: apex $o'$, base points $c'$, $b'(d')$, and $a'(e')$ with $e'$ in parentheses above $a'$. The axis is drawn as a center line from $o'$ to the midpoint of the base.
> 
> Notes:
> - SCALE 1:1
> - ALL DIMENSIONS ARE IN mm

3. Project vertical lines down from the tilted front view to meet horizontal locus lines from the Stage 1 top view, completing the Stage 2 top view where slant edge $oc$ is foreshortened.

> **Figure: Projection of a pentagonal pyramid - Step 56.3: Complete projection with second stage top view**
>
> Step 56.3 showing the final top view of the inclined pentagonal pyramid.
> 
> Given box:
> - Problem number: 56.3
> - Base side ($B$): 30 mm
> - Height ($H$): 60 mm
> 
> First stage and tilted front view:
> - Identical to step 56.2, with the front view tilted at $50^\circ$ on corner $c'$ on the $xy$ line.
> 
> Second Stage Top View Construction:
> - Vertical projection lines are drawn downwards from all vertices of the tilted front view ($o'$, $c'$, $b'(d')$, $a'(e')$).
> - Horizontal projection lines are drawn across to the right from the corresponding vertices of the first top view ($a, b, c, d, e, o$).
> - Resulting final top view:
>   - Apex $o$ is located on the right.
>   - Base vertices labeled $a, b, c, d, e$.
>   - Outer contour edges $o-b$, $b-a$, $a-e$, $e-d$, $d-o$ and internal visible edges $o-a$, $o-e$ are drawn as solid continuous lines.
>   - Base edges $b-c$, $c-d$ and slant edge $o-c$ are hidden (underneath) and drawn as dashed lines meeting at vertex $c$.
> 
> Notes:
> - SCALE 1:1
> - ALL DIMENSIONS ARE IN mm

4. In Stage 3, draw a construction line from $c$ at the true angle $\phi = 30^\circ$ to $xy$, step off the true slant-edge length $L = o'c'$ along it to draw a horizontal locus line, and swing an arc of radius $L_1 = oc$ (from Stage 2) to cut the locus at $o$ for an apparent angle $\beta = 51^\circ$; then copy the Stage 2 top view onto line $oc$.

> **Figure: Orthographic projection steps of a pentagonal pyramid (base side 30 mm, height 60 mm) showing stage 1, stage 2, and stage 3 top view**
>
> Projection of a pentagonal pyramid with base side B = 30 mm and axis height H = 60 mm.
> - Stage 1:
>   - Front View (FV1): Triangle resting on reference line xy with apex o' at height 60 mm. Base points are labeled a'(e'), b'(d'), and c'. Slant edges o'-a'(e'), o'-b'(d'), o'-c' are shown, along with a vertical center axis line.
>   - Top View (TV1): Regular pentagon with vertical edge a-e of length 30 mm on the left, vertices labeled a, b, c, d, e, and central apex o connected to all vertices.
> - Stage 2:
>   - Front View (FV2): The pyramid is tilted with base corner c' on the xy line. The base line passing through c' is inclined at an angle of 50° to the horizontal reference line. Base points are labeled (e')a', b'(d'), and apex o'.
>   - Top View (TV2): Projected from FV2 and TV1. Points a, b, c, d, e form the base outline, and apex o is to the right. Solid lines show visible edges o-b, o-c, o-d, while hidden edges are dashed.
> - Stage 3:
>   - Top View (TV3): The top view from stage 2 is reproduced with its axis inclined at 30° to the xy line, showing an APPARENT ANGLE of 51° with the reference horizontal line o-o1. Vertices labeled a, b, c, d, e, and apex o.
>   - Front View (FV3): Omitted in this problem step.

5. Project upward from the Stage 3 top view to meet horizontal locus lines from the Stage 2 front view, drawing the visible upper slant faces with continuous lines and the hidden edges meeting at bottom corner $c'$ as dashed lines.

> **Figure: Complete three-stage orthographic projection of a pentagonal pyramid inclined to both reference planes**
>
> Complete three-stage projection of a pentagonal pyramid with base B = 30 mm and height H = 60 mm.
> - Stage 1:
>   - Front View (FV1): Isosceles triangle with base on xy line of height 60 mm, apex o', base points a'(e'), b'(d'), c'. Centerline shown along the axis.
>   - Top View (TV1): Regular pentagon with base edge a-e = 30 mm vertical on the left, vertices a, b, c, d, e, and center apex o connected to all five corners.
> - Stage 2:
>   - Front View (FV2): Tilted with corner c' on xy, base line inclined at 50° to the horizontal xy line. Labeled points: c', b'(d'), (e')a', and apex o'.
>   - Top View (TV2): Projected downwards from FV2 and horizontally from TV1. Shows apex o to the right, visible outer edges and dashed hidden lines.
> - Stage 3:
>   - Top View (TV3): TV2 rotated so the axis is inclined at true angle 30° to the VP, corresponding to an APPARENT ANGLE of 51° to the horizontal reference line o-o1.
>   - Front View (FV3): Final front view projected vertically from TV3 and horizontally from FV2. Vertices a', b', c', d', e' and apex o' are connected, with visible edges shown as solid lines and hidden edges as dashed lines.

**Answer:** Apparent angle $\beta = 51^\circ$.

### More problems

#### Problem 80: Hexagonal Prism with Axis Inclined to HP and VP
**Given:** Hexagonal prism, base side 30 mm, axis 80 mm, resting on a base edge on HP with its axis inclined at $45^\circ$ to HP and $40^\circ$ to VP.
**Find:** Three-stage projections of the prism and the apparent angle $\beta$ of the axis.

1. Draw the Stage 1 top view as a regular hexagon of side 30 mm with right edge $3–4$ perpendicular to $xy$, and project the 80 mm tall front view.

> **Figure: Step 80.1: Initial projection of hexagonal prism resting on HP**
>
> Step 80.1 showing the initial front and top views of the hexagonal prism. A small box at upper left gives: 'B = 30', 'H = 80'. The horizontal reference line is labelled 'x' on the left and 'y' on the right. Below the xy line, the top view is a regular hexagon with vertical edges a(1)-f(6) and c(3)-d(4), and vertices labelled clockwise from left: a(1) at bottom-left, f(6) at middle-left, e(5) at top vertex, d(4) at top-right, c(3) at bottom-right, and b(2) at bottom vertex. The vertical right edge length c(3)-d(4) is dimensioned as 30. Projectors extend upward to the front view resting on the xy line. The front view is a rectangle of height 80 mm and width corresponding to the profile of the hexagon. The bottom edge lies on xy with vertices 1'(6') on the left, 2'(5') at the center axis, and 3'(4') on the right. The top edge is parallel to xy with vertices a'(f') on the left, b'(e') at the center axis, and c'(d') on the right. A vertical line divides the front view along the axis from 2'(5') to b'(e'). Height is dimensioned as 80 mm on the left. Below the top view is text 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Tilt the front view on base edge $3'(4')$ on $xy$ so the axis makes $45^\circ$ with $xy$ (base at $45^\circ$).

> **Figure: Stage 80.2: Projection of hexagonal prism with axis inclined at 45 degrees to HP**
>
> Engineering drawing showing the second stage of projecting a hexagonal prism (Problem 80.2). Boxed information indicates B = 30 mm (base edge) and H = 80 mm (height), with SCALE 1:1 and 'ALL DIMENSIONS ARE IN mm'.
> - Reference line marked x-y.
> - Stage 1 (left):
>   - Top view: Regular hexagon with corners labelled a(1), b(2), c(3), d(4), e(5), f(6). Side length between c(3) and d(4) is dimensioned as 30 mm.
>   - Front view: Rectangular outline resting on the xy line with base points 1'(6'), 2'(5'), 3'(4') and top points a'(f'), b'(e'), c'(d'). Height is dimensioned as 80 mm. A vertical center line connects 2'(5') to b'(e').
> - Stage 2 (right):
>   - Front view reproduced and tilted so that base corner 3'(4') rests on the xy line.
>   - An angle of 45° is shown between the horizontal and the prism's axis / base orientation.
>   - Vertices are labelled identically: base 1'(6'), 2'(5'), 3'(4') and top face a'(f'), b'(e'), c'(d').

3. Project down from the tilted front view and across from the Stage 1 top view to complete the Stage 2 top view.

> **Figure: Stage 80.3: Completed projection of hexagonal prism including top view**
>
> Engineering drawing showing the completed projection of the hexagonal prism (Problem 80.3). Boxed information indicates B = 30 mm, H = 80 mm, SCALE 1:1, 'ALL DIMENSIONS ARE IN mm'.
> - Reference line marked x-y.
> - Stage 1 (left):
>   - Front view: Height 80 mm, base 1'(6'), 2'(5'), 3'(4') on xy line, top face a'(f'), b'(e'), c'(d').
>   - Top view: Regular hexagon with side 30 mm, corners a(1), b(2), c(3), d(4), e(5), f(6).
> - Stage 2 (right):
>   - Front view: Tilted at 45° to the HP resting on corner 3'(4') on xy line, with angle 45° marked at 2'(5') relative to the vertical projector.
>   - Top view: Fully projected downwards from the tilted front view and across from the first-stage top view.
>     - Base vertices numbered 1, 2, 3, 4, 5, 6, with hidden edges 3-4, 4-5, and vertical edge through 3 drawn as dashed lines.
>     - Top face vertices lettered a, b, c, d, e, f shown fully visible.
>     - Visible outline forms an elongated twelve-sided boundary connecting visible outer edges of both bases.

4. From axis endpoint $p$ in Stage 3, draw a line at $40^\circ$ to $xy$ of true axis length 80 mm to set the horizontal locus.
5. Swing an arc of Stage 2 top-view axis length $op$ from $p$ to cut the locus at $\beta = 66^\circ$, and copy the Stage 2 top view along it.

> **Figure: Projection of hexagonal prism - Step 80.4**
>
> Multi-stage orthographic projection of a hexagonal prism with base edge B = 30 mm and height H = 80 mm (labelled 80.4). Stage 1 shows the initial position: a regular hexagon in the top view below the XY line with corners labelled a(1), b(2), c(3), d(4), e(5), f(6) and side dimension 30, and a rectangle in the front view above the XY line of height 80, with base labelled 1'(6'), 2'(5'), 3'(4') and top face a'(f'), b'(e'), c'(d'). Stage 2 shows the front view inclined such that the base 1'(6')-3'(4') makes an angle of 45° with the XY ground line, resting on 3'(4'), with corresponding top view projected below showing corners 1 to 6, a to f, and axis p-o. Stage 3 shows the top view reproduced rotated such that its axis is inclined: an apparent angle of 66° is constructed corresponding to a true angle of 40° to the VP (XY line). The stage 3 front view is not yet drawn. GIVEN box: B = 30, H = 80. Notes: APPARENT ANGLE - 66°, SCALE 1:1, ALL DIMENSIONS ARE IN mm.

6. Project vertically to the Stage 2 front-view heights to complete the Stage 3 front view, dashing hidden edges from $3'(4')$.

> **Figure: Projection of hexagonal prism - Step 80.5**
>
> Final completed orthographic projection of the hexagonal prism (labelled 80.5) with base edge B = 30 mm and height H = 80 mm. Stages 1 and 2 are identical to step 80.4 (simple position with regular hexagon in top view and 80 mm high rectangle in front view; stage 2 with base inclined at 45° to HP resting on corner 3'(4')). Stage 3 shows the top view tilted at an apparent angle of 66° (true inclination 40° to VP), and the final front view is fully constructed above the XY line by projecting upwards from the stage 3 top view and horizontally from the stage 2 front view. The final front view depicts all visible and hidden edges of both hexagonal faces (a', b', c', d', e', f' and 1', 2', 3', 4', 5', 6') and the connecting lateral edges. GIVEN box: B = 30, H = 80. Notes: APPARENT ANGLE - 66°, SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** Apparent angle $\beta = 66^\circ$.

#### Problem 85: Cylinder Resting on Base Point with Axis Inclined to Both Planes
**Given:** Cylinder, base diameter 40 mm, axis 60 mm, resting on a base point on HP with its axis inclined at $30^\circ$ to HP and $30^\circ$ to VP.
**Find:** Three-stage projections of the cylinder and the apparent angle $\beta$.

1. Draw the Stage 1 top view as a 40 mm circle divided into 8 parts ($1–8$, $a–h$), and project the 60 mm tall rectangular front view.

> **Figure: Step 85.1: Initial projection of cylinder resting on HP with axis perpendicular to HP**
>
> Step 85.1 shows the simple position (first stage) projections of a cylinder resting on HP. In the top view (below reference line xy), there is a circle with diameter Ø40 divided into 8 equal parts, labeled with base points and top face points: a(1) at 9 o'clock, b(2) at 7:30, c(3) at 6 o'clock, d(4) at 4:30, e(5) at 3 o'clock, f(6) at 1:30, g(7) at 12 o'clock, h(8) at 10:30, and center o. In the front view (above xy line), a vertical rectangle of width 40 mm and height 60 mm rests directly on the xy line. The base points on xy are labeled 1', 2'(8'), 3'(7'), 4'(6'), 5' from left to right. The top face points are labeled a', b'(h'), c'(g'), d'(f'), e' from left to right. Vertical projectors connect the top and front views. Box on the left indicates 'D = 40', 'H = 60'. Below the top view is labeled 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Tilt the front view about base point $5'$ on $xy$ so the axis is inclined at $30^\circ$ to $xy$ (base at $60^\circ$).

> **Figure: Step 85.2: Projection of cylinder with axis inclined at 30 degrees to HP**
>
> Step 85.2 of the projection of a cylinder. Beside the drawing is a box with GIVEN: D = 40, H = 60. On the left is the cylinder in simple position with axis perpendicular to the HP: top view is a circle of diameter 40 mm divided into 8 sectors labelled a(1), b(2), c(3), d(4), e(5), f(6), g(7), h(8) with center o; front view is a rectangle of width 40 mm and height 60 mm resting on the reference line xy, with base points 1', 2'(8'), 3'(7'), 4'(6'), 5' and top face points a', b'(h'), c'(g'), d'(f'), e'. On the right, the front view of the cylinder is tilted such that its axis is inclined at 30° to the xy line, resting on base point 5' on the reference line.

3. Project down from the tilted front view and across from the Stage 1 circle to draw the elliptical Stage 2 top view.

> **Figure: Step 85.3: Completed projections of cylinder inclined at 30 degrees to HP**
>
> Step 85.3 showing the completed top view for the inclined cylinder. Beside the drawing is a box with GIVEN: D = 40, H = 60. On the left are the initial front and top views in simple position. On the right, the front view is tilted at 30° to the xy line, resting on point 5'. Vertical projection lines are drawn downward from points 1', 2'(8'), 3'(7'), 4'(6'), 5' and a', b'(h'), c'(g'), d'(f'), e', intersecting horizontal projectors from the corresponding points of the initial circular top view. The resulting top view consists of: a visible elliptical top face with points a, b, c, d, e, f, g, h and center o; an elliptical bottom base with points 1, 2, 3, 4, 5, 6, 7, 8 and center p (the half containing points 4 and 5 is dashed as hidden, while the remaining half is solid); and outline generators connecting tangent points 7 to g at the top and 3 to c at the bottom.

4. Construct the locus triangle in Stage 3 using true length 60 mm at $30^\circ$ to $xy$ and Stage 2 axis length $op$ to find $\beta = 36^\circ$, then reproduce the Stage 2 top view.

> **Figure: Orthographic projection of a cylinder - Step 85.4**
>
> Step 85.4 of cylinder projection problem. Parameter box specifies: D = 40, H = 60. Scale 1:1, all dimensions in mm, APPARENT ANGLE - 36°.
> Stage 1 (Simple position):
> - Front view: Rectangle on reference line x-y of width 40 mm and height 60 mm. Top edge marked with points a', b'(h'), c'(g'), d'(f'), e'. Base on XY line marked with points 1', 2'(8'), 3'(7'), 4'(6'), 5'.
> - Top view: Circle of diameter Ø40 mm divided into 8 equal sectors with generator labels a(1), b(2), c(3), d(4), e(5), f(6), g(7), h(8), and center o.
> Stage 2 (Axis inclined to HP):
> - Front view: Cylinder tilted with axis p'-o' inclined at 30° to horizontal, base resting on XY at point 5'. Points labeled on base 1', 2'(8'), 3'(7'), 4'(6'), 5' and on top face a', b'(h'), o'c'(g'), d'(f'), e'.
> - Top view: Projected from Stage 2 front view and Stage 1 top view. Forms two ellipses for the bases (base 1 to 8 with hidden dotted arc from 5-4-3-2-1 and visible arc 1-8-7-6-5; top face a-b-c-d-e-f-g-h fully visible) joined by horizontal outline generators.
> Stage 3 (Axis inclined to VP):
> - Top view: Redrawn from Stage 2 top view with axis inclined at 30° to vertical projection line (apparent angle 36°).

5. Project up to the Stage 2 front-view heights to plot the Stage 3 front view ellipses, dashing the hidden lower half of base $1'–5'$, and add tangent outer generators.

> **Figure: Orthographic projection of a cylinder - Step 85.5 (Final projection)**
>
> Step 85.5 showing the final completed projection of the cylinder. Parameter box: D = 40, H = 60. Scale 1:1, all dimensions in mm, APPARENT ANGLE - 36°.
> Stage 1: Simple position with rectangle front view (60 mm height, 40 mm width) and circular top view (Ø40 mm, 8 divisions).
> Stage 2: Axis inclined at 30° to HP. Front view tilted rectangle resting on point 5' on XY line; top view projected showing elliptical ends.
> Stage 3:
> - Top view: Redrawn at apparent angle with axis inclined at 30° to reference.
> - Final Front View: Completed by projecting vertical projectors from Stage 3 top view and horizontal projectors from Stage 2 front view. The top face forms an ellipse with points a', b', c', d', e', f', g', h' fully visible (solid). The base forms an ellipse with visible outer contour points 1', 2', 3', 4', 5' and hidden dashed curve through points 6', 7', 8'. Extreme contour generators connect the two bases.

**Answer:** Apparent angle $\beta = 36^\circ$.

#### Problem 72: Cone Lying on a Generator on HP with Axis Inclined to VP
**Given:** Cone, base diameter 40 mm, height 60 mm, lying on a generator on HP with the axis inclined at $40^\circ$ to VP and apex nearer to the observer.
**Find:** Three-stage projections of the cone.

1. Draw the Stage 1 top view as a 40 mm circle divided into 8 parts ($1–8$), and project the triangular front view of height 60 mm.

> **Figure: Step 72.1: Projections of cone resting with base on HP**
>
> Step 72.1: Orthographic projection of a cone resting on its base in the HP. Top view shows a circle of diameter 40 mm divided into 8 equal sectors labeled clockwise from the left: 1, 8, 7, 6, 5, 4, 3, 2, with center apex o. Front view shows an isosceles triangle with base on the xy line, labeled 1', 2'(8'), 3'(7'), 4'(6'), 5', and apex o' at height 60 mm connected to base points by generators and an axis line. An info box next to the drawing states '72.1', 'D = 40', 'H = 60'.

2. Rotate the front view until right-hand generator $o'5'$ lies flat on $xy$ so the cone rests on a generator on HP.

> **Figure: Projection of a cone resting on a generator - Step 72.2**
>
> Step 72.2 of the projection of a cone. Given: D = 40 mm (base diameter), H = 60 mm (axis height). Reference line xy. Stage 1: Top view shows a circle of diameter 40 mm centered at o, divided into 8 equal parts labeled 1 through 8 counter-clockwise (1 at 9 o'clock, 3 at 6 o'clock, 5 at 3 o'clock, 7 at 12 o'clock). Front view shows an isosceles triangle resting with base 1'-5' on xy, apex o' at height 60 mm; base division points labeled 1', 2'(8'), 3'(7'), 4'(6'), 5'. Stage 2 (front view only): The cone is tilted such that generator 5'-o' lies horizontally on the xy line. The circular base 5'-1' is inclined to xy, with division points 5', 4'(6'), 3'(7'), 2'(8'), 1'. Lines are drawn from base points to apex o' on the xy line.

3. Project down from the tilted front view and across from Stage 1 to draw the Stage 2 top view with axis $op$.

> **Figure: Projection of a cone resting on a generator - Step 72.3**
>
> Step 72.3 of the projection of a cone. Given: D = 40 mm, H = 60 mm. Stage 1 shows the cone in simple position (top view circle divided into 8 parts; front view triangle standing on xy). Stage 2 shows the front view with generator 5'-o' lying on the xy line, points labeled 5', 4'(6'), 3'(7')p', 2'(8'), 1' along the base and o' on xy. Below xy, the top view of the tilted cone is drawn by projecting vertically downwards from the stage 2 front view and horizontally from the stage 1 top view: the base forms an ellipse with points 1, 2, 3, 4, 5, 6, 7, 8 and center p, and tangent outline generators connect the base ellipse to the apex o.

4. Draw a line from base center $p$ at $40^\circ$ to $xy$ pointing away from $xy$ so apex $o$ lies nearer to the observer (further below $xy$).
5. Mark true axis length 60 mm along the $40^\circ$ line to set the horizontal locus, swing an arc of Stage 2 length $po$ to find the apparent axis, and copy the Stage 2 top view.

> **Figure: Projections of a cone resting on a generator on HP with axis inclined to VP**
>
> Problem 72.4: Projection of a cone with given parameters D = 40 mm and H = 60 mm.
> - Stage 1 (Initial position):
>   - Front view (FV): An isosceles triangle with base 1'-5' = 40 mm lying on the xy reference line, apex o' at height 60 mm above xy. Points along base: 1', 2'(8'), 3'(7'), 4'(6'), 5'. Axis connects base midpoint 3'(7') to apex o'.
>   - Top view (TV): Circle of diameter 40 mm with center o, divided into 8 equal parts labeled 1 through 8 (1 at 9 o'clock, 3 at 6 o'clock, 5 at 3 o'clock, 7 at 12 o'clock).
> - Stage 2 (Resting on HP on one of its generators):
>   - FV: Cone tilted so that generator 5'-o' lies entirely on the xy line. Base line 1'-5' is inclined; base center is marked p'. Generatrix lines drawn from apex o' to 1', 2'(8'), 3'(7')p', 4'(6').
>   - TV: Projectors drawn down from FV. The base projects as an ellipse with major axis 3-7 and minor axis 1-5, centered at p. Outlines drawn tangentially from apex o to the ellipse.
> - Stage 3 (Inclination to VP):
>   - TV: The TV from stage 2 is reproduced tilted such that its axis is inclined at an angle of 40° to the horizontal/xy direction.
>   - Base points labeled 1 through 8 around the ellipse, center p, apex o / o1.

6. Project up to the Stage 2 heights to complete the Stage 3 front view with a fully visible base ellipse.

> **Figure: Projections of a cone resting on a generator on HP with apparent angle inclination to VP**
>
> Problem 72.5: Projection of a cone with parameters D = 40 mm and H = 60 mm.
> - Stage 1 (Initial position):
>   - FV: Triangle 1'-5'-o' on the xy line with height 60 mm and base 40 mm.
>   - TV: Circle of diameter 40 mm divided into 8 sectors with points 1 to 8 and center o.
> - Stage 2 (Resting on generator on HP):
>   - FV: Cone tilted such that generator 5'-o' lies on xy line; points labeled 1', 2'(8'), 3'(7')p', 4'(6'), 5', o'.
>   - TV: Elliptical projection of base with points 1 to 8, center p, and apex o.
> - Stage 3 (Apparent angle tilt and final front view):
>   - TV: Cone redrawn with axis inclined at 'APPARENT ANGLE - 42°' to the reference line. Base points 1 to 8 and apex o.
>   - FV: Final front view obtained by projecting up from stage 3 TV and horizontally from stage 2 FV. The base forms an ellipse with visible outline 1'-2'-3'-4'-5' and hidden dashed curve through 6'-7'-8'. Tangent lines from apex o' to the base ellipse complete the cone outline.

**Answer:** Cone projected with generator $o'5'$ on HP, axis at true angle $40^\circ$ to VP, and apex $o$ nearer to the observer.

#### Problem 57: Pentagonal Pyramid with Slant Edge in a Profile Plane
**Given:** Pentagonal pyramid, base edge 30 mm, height 60 mm, resting on a base corner on HP with the slant edge containing that corner inclined at $50^\circ$ to HP and $40^\circ$ to VP.
**Find:** Three-stage projections when the slant edge inclinations are complementary ($50^\circ + 40^\circ = 90^\circ$).

1. Draw the Stage 1 top view as a regular pentagon of side 30 mm with left edge $ae$ vertical and corner $c$ on the right, and project the 60 mm tall front view.

> **Figure: Step 57.1: Initial front and top views of pentagonal pyramid**
>
> Step 57.1 of orthographic projection showing the initial position of a pentagonal pyramid. Front view above xy line: isosceles triangular outline of height 60 mm with apex o' and base on xy line. Base points are labeled a'(e'), b'(d'), and c'. Apex o' connects to a'(e'), b'(d'), and c', with an axis centerline extending to the mid-base. Top view below xy line: regular pentagon with vertical edge a-e of length 30 mm on the left, vertices labeled a, b, c, d, e, and apex at center o connected to all five base corners. Vertical projection lines align top view corners with base points on the xy line. Includes an annotation box with 'B = 30' and 'H = 60'.

2. Rotate the front view about corner $c'$ on $xy$ so slant edge $o'c'$ is inclined at $50^\circ$ to $xy$.

> **Figure: Orthographic projections of a pentagonal pyramid - Step 57.2**
>
> Step 57.2 of the projection of a regular pentagonal pyramid with base edge B = 30 mm and height H = 60 mm. At the left, the initial position shows: top view as a regular pentagon with corners labeled a, b, c, d, e and apex o at the center (side a-e is vertical and dimensioned 30 mm); front view above the xy line as an isosceles triangle of height 60 mm, with base points a'(e'), b'(d'), c' on the xy line and apex o'. At the right, the front view is reproduced tilted such that the slant edge o'c' makes an angle of 50° with the horizontal xy reference line, resting on corner c', with apex o' and base corners a'(e') and b'(d') labeled.

3. Project down and across to complete the Stage 2 top view.

> **Figure: Orthographic projections of a pentagonal pyramid - Step 57.3**
>
> Step 57.3 showing the completed top view for the tilted pentagonal pyramid (B = 30 mm, H = 60 mm). On the left, the initial front and top views are shown identically to step 57.2. On the right, the front view is tilted at 50° to the xy line resting on corner c'. Vertical projectors from the tilted front view (points a', e', b', d', c', o') intersect horizontal projectors from the first top view (points a, b, c, d, e, o) to form the tilted top view. The outer boundary formed by points a-b-o-d-e is visible (solid lines), while the base corner c lies underneath, making edges c-b, c-d, and the slant edge o-c dashed hidden lines.

4. In Stage 3, draw true length $o'c'$ from $c$ at $40^\circ$ to $xy$ to set the locus; because $50^\circ + 40^\circ = 90^\circ$, the arc of radius $oc$ meets the locus at $\beta = 90^\circ$ (perpendicular to $xy$).

> **Figure: Orthographic projection of a pentagonal pyramid - Step 57.4**
>
> Step 57.4 of the projection of a pentagonal pyramid. A given box on the left lists: B = 30, H = 60. First stage (simple position): Front view is a triangle of height 60 mm with base a'(e')-b'(d')-c' on the xy line and apex o'. Top view is a regular pentagon a-b-c-d-e with base edge ae = 30 mm perpendicular to xy, and apex o connected to all base corners. Second stage (inclined to HP): The front view is tilted such that the slant edge o'c' makes an angle of 50° with the horizontal line/xy. Projectors from the tilted front view and first top view yield the second top view. Third stage: The top view from stage 2 is reproduced rotated such that its axis/centerline is inclined at 40° to the xy reference line (indicated with 'APPARENT ANGLE - 90°'). Front view for stage 3 is not yet drawn. Note reads: 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.

5. Rotate the Stage 2 top view so $oc$ is vertical, and project upward to the Stage 2 heights to complete the Stage 3 front view.

> **Figure: Orthographic projection of a pentagonal pyramid - Step 57.5**
>
> Step 57.5 showing the completed orthographic projection of the pentagonal pyramid. A given box on the left lists: B = 30, H = 60. First stage: Front view of height 60 mm standing on the xy line, top view pentagon with side 30 mm and edge ae perpendicular to xy. Second stage: Front view rotated so slant edge o'c' is inclined at 50° to xy; corresponding second top view projected below xy. Third stage: Top view rotated at an angle of 40° to the xy reference line ('APPARENT ANGLE - 90°'). Vertical projectors from this rotated top view and horizontal projectors from the second front view determine the final front view above xy, with vertices a', b', c', d', e' and apex o', showing visible outlines as solid lines and hidden edges as dashed lines. Note reads: 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.

**Answer:** Apparent angle $\beta = 90^\circ$ (slant edge $oc$ lies in a Profile Plane).

#### Problem 84: Pentagonal Prism with Axis in a Profile Plane
**Given:** Pentagonal prism, base side 30 mm, axis 80 mm, resting on a base corner on HP with its axis (slant/longer edge) inclined at $45^\circ$ to HP and $45^\circ$ to VP.
**Find:** Three-stage projections and the apparent angle $\beta$.

1. Draw the Stage 1 top view as a 30 mm regular pentagon with left edge $a(1)–e(5)$ vertical and corner $c(3)$ on the right, and project the 80 mm tall front view.

> **Figure: Step 84.1: Initial projections of pentagonal prism**
>
> Step 84.1 of the orthographic projection showing the initial position of a pentagonal prism:
> - Reference line labeled 'x' on the left and 'y' on the right.
> - Given box at top-left: '84.1', 'B = 30', 'H = 80'.
> - Front View (above xy-line): A vertical rectangular outline of height 80 mm resting on the xy-line.
>   - Base on xy: labeled 1'(5') on the left edge, 2'(4') at the intermediate vertical line, and 3' on the right edge.
>   - Top face: labeled a'(e') on the left, b'(d') at the intermediate vertical line, and c' on the right.
>   - Height is dimensioned as 80 mm on the left.
> - Top View (below xy-line): A regular pentagon with base side dimensioned as 30 mm.
>   - Vertices are labeled: a(1) at bottom-left, b(2) at the lowest point, c(3) at the right, d(4) at the top, and e(5) at top-left.
>   - The edge a(1)-e(5) is vertical and parallel to the vertical projection plane.
>   - Vertical projector lines align vertices 1'(5'), 2'(4'), 3' with the corresponding vertices in the top view.
> - Text at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. Tilt the front view on base corner $3'$ on $xy$ so the longer edge/axis makes $45^\circ$ with $xy$.

> **Figure: Step 84.2: Projection of a pentagonal prism with its axis/base inclined to the HP**
>
> Step 84.2 of a problem on the projection of a pentagonal prism.
> - Given box at top left:
>   - Problem number: 84.2
>   - Base edge: B = 30 mm
>   - Axis height: H = 80 mm
> - Stage 1 (Initial position):
>   - Top view: Regular pentagon with one vertical edge on the left labelled e(5) at top and a(1) at bottom, dimensioned 30 mm. Other vertices are b(2) at bottom, c(3) at rightmost apex, and d(4) at top.
>   - Reference line XY (labelled 'x' on left).
>   - Front view: A rectangle of height 80 mm sitting on the XY line. Base corners on XY are 1'(5') on left, 2'(4') in the middle, and 3' on right. Top base corners are a'(e') on left, b'(d') in the middle, and c' on right. Vertical edges connect 1'(5') to a'(e'), 2'(4') to b'(d'), and 3' to c'.
> - Stage 2 (Inclined position of front view):
>   - The front view rectangle is tilted such that base corner 3' rests on the XY line.
>   - The edge 3'-c' is inclined at an angle of 45° to the horizontal (XY line).
>   - Base points: 3' on XY, 2'(4') in the middle, 1'(5') on top left.
>   - Top face points: c' on bottom right, b'(d') in the middle, a'(e') on top.
>   - Solid lines connect the corresponding corners forming the tilted rectangular front view.

3. Project down and across to complete the Stage 2 top view.

> **Figure: Step 84.3: Final top view projection of the tilted pentagonal prism**
>
> Step 84.3 of the projection of a pentagonal prism:
> - Given box at left:
>   - 84.3
>   - B = 30
>   - H = 80
> - Stage 1:
>   - Orthographic projections identical to step 84.2 (top view pentagon dimensioned 30 mm, front view rectangle of height 80 mm).
> - Stage 2:
>   - Tilted front view identical to 84.2, tilted at 45° to XY with corner 3' on the XY line.
>   - Vertical projection lines drawn downward from all points of the tilted front view: 1'(5'), 2'(4'), 3', a'(e'), b'(d'), c'.
>   - Horizontal projection lines drawn to the right from the vertices of the initial top view: a(1), b(2), c(3), d(4), e(5).
>   - Projected top view of the inclined prism:
>     - Top pentagonal face a-b-c-d-e on the right is fully visible (solid lines for edges a-b, b-c, c-d, d-e, e-a).
>     - Visible longitudinal edges: 1-a, 2-b, 4-d.
>     - Base edge outline: 1-2, 4-5, 5-1 are solid.
>     - Hidden edges associated with corner 3 on HP are drawn with dashed lines: 2-3, 4-3, and the longitudinal edge 3-c.

4. Construct the locus at $45^\circ$ to $xy$ in Stage 3 to verify $\beta = 90^\circ$ ($45^\circ + 45^\circ = 90^\circ$), and rotate the Stage 2 top view.

> **Figure: Orthographic projections of a pentagonal prism inclined to HP and VP (Problem 84.4)**
>
> Projection of a pentagonal prism with base side B = 30 mm and height H = 80 mm:
> 1. Initial position: Front view is a rectangle of height 80 mm with vertical edges labelled a'(e'), b'(d'), c' resting on XY line with base 1'(5'), 2'(4'), 3'. Top view is a regular pentagon with base side 30 mm labelled a(1), b(2), c(3), d(4), e(5).
> 2. Second stage: Prism inclined to HP such that the base edge 3' is on HP and the axis/base is inclined at 45° to the horizontal. Front view shows tilted outline with corners 1'(5'), 2'(4'), 3', a'(e'), b'(d'), c'. Top view is projected showing base points 1, 2, 3, 4, 5 and top face points a, b, c, d, e connected with visible and hidden (dashed) lines.
> 3. Third stage: Top view rotated at 45° to the XY line (vertical plane inclination), showing corners 1, 2, 3, 4, 5 and a, b, c, d, e arranged vertically with hidden lines.

5. Project up from the Stage 3 top view to the Stage 2 heights to complete the Stage 3 front view.

> **Figure: Complete orthographic projections of a pentagonal prism including final front view (Problem 84.5)**
>
> Projection of a pentagonal prism with base edge B = 30 mm and height H = 80 mm:
> 1. Initial position: Front view of height 80 mm resting on XY line; top view is a regular pentagon of side 30 mm.
> 2. Second stage: Prism inclined at 45° to HP, base on 3'. Front view is tilted, and corresponding top view is drawn.
> 3. Third stage: Top view rotated at an angle of 45° to the XY reference line. From this top view, projectors are drawn upwards to meet horizontal projectors from the second stage front view to complete the final front view showing vertices a', b', c', d', e' and base corners 1', 2', 3', 4', 5' with solid visible lines and dashed hidden lines.

> **Watch out.** Although the locus construction and printed label give $\beta = 90^\circ$ because $45^\circ + 45^\circ = 90^\circ$, the Stage 3 drawing rotates the top view directly at $45^\circ$ to $xy$ instead of $90^\circ$; always state $\beta = 90^\circ$ for complementary angles.

**Answer:** Apparent angle $\beta = 90^\circ$.

<!-- page 11 | Practice: Solids Resting on the Vertical Plane (VP) -->

## Practice: Solids Resting on the Vertical Plane (VP)
Having mastered every type of constraint for solids resting on HP, we now invert our workspace to solve problems where the solid rests with a point, edge, generator, or face on the Vertical Plane (VP). When a solid rests on VP, the entire three-stage procedure is mirrored across the XY line: draw the true base in the Stage 1 front view, tilt to VP in the Stage 2 top view, and rotate to HP in the Stage 3 front view.

### The idea
When a solid rests on the Vertical Plane (VP), its axis is initially perpendicular to VP rather than HP. Because the base faces the observer directly in this simple position, the **Stage 1 front view** (above XY) shows the true shape of the base, while the **Stage 1 top view** (below XY) shows the solid's altitude with its resting base lying flat along the XY line. As always, orient the true-shape base in the front view so that the specific resting edge, corner, or base point lies at the extreme right.

In **Stage 2**, we introduce the inclination to VP ($Ά$). Since distances in front of VP are seen in the top view, we rotate the Stage 1 top view below the XY line while keeping the resting point or edge on XY. Projecting upward from this tilted top view and across from the Stage 1 front view gives the foreshortened Stage 2 front view.

In **Stage 3**, we incline the solid to HP ($θ$). Because inclination to HP is visible above the XY line, we rotate the Stage 2 front view directly by the given angle—or use a locus construction if a true angle is specified for an already-foreshortened axis. If the problem states that a corner or apex also touches HP, place that point directly on the XY line during this Stage 3 rotation. Finally, project downward to meet horizontal projectors from the Stage 2 top view to complete the final top view.

### Worked example
**Problem 81:** A square prism of base side 40 mm and length 80 mm has a base edge on VP, axis inclined at 30° to VP and the resting base edge is inclined at 40° to HP. Draw the projections of the solid.

**Given:** Square prism, base side $B = 40$ mm, length $H = 80$ mm, resting on a base edge on VP, axis at 30° to VP, resting base edge at 40° to HP.
**Find:** The three-stage orthographic projections of the prism.

1. Begin in the simple position with the axis perpendicular to VP so the base is parallel to VP and shows its true shape in the front view. Draw a 40 mm square above the XY line with its vertical edges perpendicular to XY, placing the resting base edge $2'3'$ on the right. Project downward to draw the Stage 1 top view as a 40 mm by 80 mm rectangle with the base $1(4)	ext{--}2(3)$ resting directly on the XY line.

> **Figure: Step 81.1: Initial projection of square prism with base on VP**
>
> Step 81.1 shows the initial projections of a square prism:
> - Horizontal reference line labelled 'x' on the left and 'y' on the right.
> - Front view (above xy): A square of side 40 mm with vertices labelled top-left a'(1'), top-right b'(2'), bottom-right c'(3'), and bottom-left d'(4'). The top side is dimensioned as '□40'.
> - Top view (below xy): A rectangle of width 40 mm and length 80 mm aligned vertically with the front view. The top base edge lies on the xy line with vertices labelled 1(4) at the left and 2(3) at the right. The lower base edge has vertices labelled a(d) at the left and b(c) at the right. The axial length is dimensioned as 80 mm on the right.
> - A given box to the left contains: '81.1', 'B = 40', 'H = 80'.
> - Bottom text: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. Incline the axis at 30° to VP in the top view, where angles with VP appear in their true size. Reproduce the Stage 1 top view rectangle below XY with corner $2(3)$ on the XY line and the axis inclined at 30° to XY (so the base makes 60° with XY).

> **Figure: Orthographic projection of a square prism - Stage 1 and Stage 2 top view rotation**
>
> Step 81.2 of the projection of a square prism.
> GIVEN box: B = 40, H = 80.
> Reference line XY labeled with 'x' on the left and 'y' on the right.
> Stage 1 (Simple position):
> - Front view (above XY): Square of side 40 mm (dimensioned '□40' at top). Top-left corner labeled a'(1'), top-right b'(2'), bottom-right c'(3'), bottom-left d'(4').
> - Top view (below XY): Rectangle of width 40 mm and length 80 mm (dimensioned '80' on the right side). Top edge lies on XY line with left vertex labeled 1(4) and right vertex labeled 2(3). Bottom vertices labeled a(d) on left and b(c) on right.
> Stage 2:
> - Top view is reproduced rotated such that vertex 2(3) lies on the XY line and the long edge 2(3)-b(c) is inclined at an angle of 30° to the XY line.
> - Corners of the inclined top view labeled 2(3) at XY, b(c) at bottom-right, a(d) at bottom, and 1(4) at left.
> - Note at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

3. Project upward from all corners of the Stage 2 top view to intersect horizontal projectors from the Stage 1 front view. Connect the vertices to complete the Stage 2 front view, drawing the hidden resting edge $2'3'$ as a dashed line because it lies at the back (closest to VP).

> **Figure: Completed orthographic projection of a square prism inclined to VP**
>
> Step 81.3 of the projection of a square prism showing final front view projection.
> GIVEN box: B = 40, H = 80.
> Stage 1:
> - Same as in step 81.2 (square front view of side 40 mm, rectangular top view of 40x80 mm with top edge on XY).
> Stage 2:
> - Top view: Rectangle 40x80 mm inclined at 30° to the XY line with corner 2(3) touching the XY line. Corners labeled 2(3), b(c), a(d), 1(4).
> - Front view: Projected vertically upwards from the rotated top view and horizontally from the first stage front view.
> - Top horizontal line contains vertices: 1', 2', a', b'.
> - Bottom horizontal line contains vertices: 4', 3', d', c'.
> - Outer boundary 1'-b'-c'-4' drawn with solid lines.
> - Vertical edge a'-d' is a continuous visible solid line.
> - Vertical edge 2'-3' is a dashed hidden line.
> - Note at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

4. Since the resting base edge $2'3'$ remains in true length on VP, rotate the entire Stage 2 front view directly so that edge $2'3'$ is inclined at 40° to the XY line.

> **Figure: Projection of a square prism, Step 81.4**
>
> Step 81.4 in orthographic projection of a square prism.
> - Given box: B = 40, H = 80.
> - Scale: SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> - Stage 1 (Initial position):
>   - Front View (above reference line): Square of dimension □40, vertices labeled top-left a'(1'), top-right b'(2'), bottom-right c'(3'), bottom-left d'(4').
>   - Top View (below reference line): Rectangle 40 mm wide and 80 mm long, vertices labeled top-left 1(4), top-right 2(3), bottom-left a(d), bottom-right b(c). Height dimension 80 marked.
> - Stage 2 (First tilt):
>   - Top view rotated such that long edge 2(3)–b(c) is inclined at 30° to the horizontal reference line.
>   - Front view projected onto reference line xy: base line on xy from 4' to c' passing through 3' and d', top line from 1' to b' passing through 2' and a'. A vertical dashed line connects 2' to 3'.
> - Stage 3 (Second tilt - incomplete):
>   - Front view reproduced and tilted so that the base line 4'-3' makes an angle of 40° with the horizontal line.
>   - Vertices labeled 1', 2', 3', 4', a', b', c', d'. Top view is yet to be drawn.

5. Project vertically downward from every corner of the Stage 3 front view to intersect horizontal projectors from the Stage 2 top view, and join the points with visible and hidden lines to complete the final top view.

> **Figure: Projection of a square prism, Step 81.5 (Completed projection)**
>
> Step 81.5 showing the final stage of the orthographic projection of the square prism.
> - Given box: B = 40, H = 80.
> - Scale: SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> - Stages 1 and 2 are identical to Step 81.4.
> - Stage 3 (Final projection):
>   - Front view: Tilted at 40° to xy line with vertices 1', 2', 3', 4', a', b', c', d'.
>   - Top view: Completed by projecting downward from the Stage 3 front view and horizontally across from the Stage 2 top view. Vertices labeled 1, 2, 3, 4, a, b, c, d.
>   - Outlines and visible edges drawn solid: 2-3-c-d-a-1-2, 3-b, b-c, 2-b.
>   - Hidden edges drawn dashed: connecting to vertex 4 (edges 1-4, 3-4, and 4-d).

**Answer:** Completed three-stage projections of the 40 mm by 80 mm square prism with its axis at 30° to VP and resting base edge at 40° to HP.

### More problems

#### Problem 74: Cone resting on base point on VP
**Given:** Cone of diameter 40 mm and height 60 mm touching VP on a base point, axis at 30° to VP, front view of axis at 45° to XY.
**Find:** The three-stage orthographic projections of the cone.

1. Draw a 40 mm diameter circle above XY divided into 8 sectors, and project a 60 mm high triangle below XY.

> **Figure: Step 74.1: Initial projection of a cone resting with its base on the VP**
>
> Projection step 74.1 for a cone with base diameter 40 mm and height 60 mm:
> - Front view (above XY line): A circle of diameter Ø40 divided into 8 equal parts by lines passing through the center o'. The points on the circumference are labeled consecutively from left to right as 1', 2', 3', 4', 5', 6', 7', 8', with 1' on the far left, 3' at top, 5' on far right, and 7' at bottom.
> - Reference line: Horizontal line labeled 'x' on the left and 'y' on the right.
> - Top view (below XY line): An inverted isosceles triangle with base lying along the XY line, points labeled 1, 2(8), 3(7), 4(6), 5 from left to right. The apex 'o' is at the bottom, 60 mm below the XY line.
> - Dimensions and annotations:
>   - In a box labeled '74.1': 'D = 40', 'H = 60'.
>   - Height dimension line showing 60 mm between XY and the apex o.
>   - Note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. Rotate the Stage 1 top view triangle keeping base point 5 on XY so the axis is inclined at 30° to XY.

> **Figure: Projection of an inclined cone, step 74.2**
>
> Step 74.2 of cone projection with dimensions D = 40 mm, H = 60 mm. The reference line is labeled x-y. Above the xy line, the initial view shows a circle of diameter 40 mm divided into 8 equal sectors with center labeled o' and division points labeled 1' through 8' counter-clockwise starting from the left. Below the xy line, projectors from the circle define the base on the xy line with points labeled 1, 2(8), 3(7), 4(6), and 5 from left to right, converging to apex o at a height of 60 mm below the xy line. To the right, the cone is reproduced in an inclined position: base points labeled 1, 2(8), 3(7), 4(6), 5, with point 5 resting on the xy line; generator 5-o is inclined at an angle of 30° to the vertical downward projector from 5; generators connect the base points to apex o.

3. Project upward from the Stage 2 top view to meet horizontal projectors from Stage 1, forming the Stage 2 front view.

> **Figure: Projection of an inclined cone, step 74.3**
>
> Step 74.3 of cone projection with dimensions D = 40 mm, H = 60 mm. Shows the completed first two stages from 74.2 (initial views and inclined view below xy line) and projects to the corresponding view above the xy line. Projectors are drawn upward from the inclined cone points (1, 2(8), 3(7), 4(6), 5, and apex o) intersecting horizontal projectors from the initial circle (points 1' through 8' and o'). The resulting view above xy shows an elliptical base with visible half (solid line through 3', 2', 1', 8', 7') and hidden half (dashed line through 3', 4', 5', 6', 7'), and extreme contour generators connecting 3' and 7' to the apex o'.

4. Because the apparent front-view angle is given directly, rotate the Stage 2 front view so axis $o'o_1'$ is at 45° to XY.

> **Figure: Projection of a cone, step 74.4**
>
> Orthographic projections of an inverted cone of base diameter D = 40 mm and height H = 60 mm.
> - Stage 1 (Initial position):
>   - Front view (above xy): Base circle of diameter 40 mm divided into 8 equal parts labeled 1' through 8' with center o'.
>   - Top view (below xy): Inverted triangle with the base on the reference line xy (points 1, 2(8), 3(7), 4(6), 5) and apex o pointing downwards at height 60 mm.
> - Stage 2 (Axis inclined to VP):
>   - Top view: Rotated such that the axis is inclined at an angle of 30° to the xy line; apex o points toward the right.
>   - Front view: Projectors from Stage 2 TV and horizontal projectors from Stage 1 FV yield an elliptical base with points 1' to 8' and apex o' to the right.
> - Stage 3 (Base inclined to HP - intermediate step):
>   - Front view: Re-drawn with the base inclined at 45° to the horizontal/xy line, with apex o' pointing upwards-right.
>   - Top view: Not yet projected (work in progress).
> - Box specifies: D = 40, H = 60.

5. Project downward from Stage 3 and horizontally from Stage 2 to plot the elliptical base and complete the final top view.

> **Figure: Projection of a cone, completed step 74.5**
>
> Completed orthographic projections of the cone (D = 40 mm, H = 60 mm).
> - Stage 1: Front view is circle (diameter 40 mm) divided into 8 points (1' to 8'); top view is inverted triangle of height 60 mm with base on xy.
> - Stage 2: Top view rotated with axis at 30° to xy; front view base appears as an ellipse with apex o' to the right.
> - Stage 3 (Final projection):
>   - Front view: Reproduced with base inclined at 45° to xy, apex o' pointing upwards-right.
>   - Top view: Fully projected from Stage 3 FV and Stage 2 TV. Base appears as an ellipse with visible curve through points 1, 2, 3, 4, 5 and dashed/hidden curve through points 5, 6, 7, 8, 1, flanked by tangential contour generators connecting to apex o.
> - Box specifies: D = 40, H = 60.

**Answer:** Completed projections of the cone ($D = 40$ mm, $H = 60$ mm) with axis at 30° to VP and front-view axis at 45° to XY.

#### Problem 63: Hexagonal pyramid with triangular face on VP
**Given:** Hexagonal pyramid of base 30 mm and height 60 mm, triangular face on VP, resting base edge at 45° to HP, corner on HP.
**Find:** The three-stage orthographic projections of the pyramid.

1. Draw a regular hexagon of side 30 mm above XY with edge $c'd'$ vertical, and project the 60 mm triangle below XY.

> **Figure: Step 63.1: Simple position projections of a hexagonal pyramid**
>
> Step 63.1 showing initial projections of the hexagonal pyramid:
> - A label box on the left shows: '63.1', 'B = 30', 'H = 60'.
> - Front View (above reference line xy): Regular hexagon with vertices labeled counterclockwise starting from the leftmost corner: a', b' (top), c' (rightmost), d' (bottom-right), e' (bottom), f' (bottom-left), with center apex o' connected to all six vertices. The edge between a' and b' is dimensioned as 30.
> - Reference line is labeled 'x' on the left and 'y' on the right.
> - Top View (below xy line): Inverted triangular outline with base on the xy line containing projectors for points a(f), b(e), and c(d). Apex 'o' is located vertically below b(e) at a perpendicular distance of 60 mm from the xy line. Lines connect apex o to a(f), b(e), and c(d).
> - Text below: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. Rotate the top view triangle so slant face $c(d)o$ lies flat along the XY line, putting the triangular face on VP.

> **Figure: Orthographic projection step 63.2 of a hexagonal pyramid**
>
> Step 63.2 of hexagonal pyramid projection. Inset box on the left gives B = 30, H = 60. Reference line xy is horizontal. Above xy: Initial front view is a regular hexagon of side length 30 mm with vertical side edges a'-f' and c'-d', top vertex b', bottom vertex e', and apex o' at the center connected to all vertices. Below xy: Initial top view is an inverted triangle of height 60 mm with base along xy between a(f) and c(d), central point b(e), and apex o pointing downwards. Second stage below xy: The top view is rotated such that apex o lies on xy, with base tilted downwards showing corners c(d) on xy, intermediate point b(e), and lowest point a(f). Text at bottom reads 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

3. Project upward from the tilted top view to intersect horizontal projectors from Stage 1, completing the Stage 2 front view.

> **Figure: Orthographic projection step 63.3 of a hexagonal pyramid**
>
> Step 63.3 completing the projection of the tilted hexagonal pyramid. Inset box gives B = 30, H = 60. Reference line xy is horizontal. Left side shows the initial views: front view regular hexagon (side 30 mm, corners a', b', c', d', e', f' and center o') above xy, and top view inverted triangle (height 60 mm, base a(f)-c(d) on xy, apex o) below xy. Bottom right: Tilted top view with apex o on xy and base inclined showing c(d) on xy, b(e), and a(f). Top right: Final front view obtained by projecting vertically from the tilted top view and horizontally from the first front view. Base vertices are c', d', b', a', e', f'; apex is o'. Slant edges o'-b', o'-c', and o'-e' are solid lines; internal slant edges running to hidden base corners are drawn as dashed lines. Text at bottom reads 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

4. Rotate the Stage 2 front view so edge $c'd'$ makes 45° with XY and corner $d'$ touches the XY line (on HP).

> **Figure: Projections of a hexagonal pyramid - Problem 63.4**
>
> Multi-stage orthographic projection of a hexagonal pyramid with base edge 30 mm and height 60 mm:
> 1. Initial Stage:
>    - Front View (above xy line): Regular hexagon standing with vertices labeled a', b', c', d', e', f' clockwise from left; apex/center labeled o'. Side length dimensioned as 30.
>    - Top View (below xy line): Isosceles triangle with base on the xy line representing base points a(f), b(e), c(d), and apex o pointing downwards, with height 60 mm.
> 2. Second Stage (Pyramid rotated with axis horizontal/inclined):
>    - Top View: Tilted triangle with apex o on the xy line, points a(f) below, and b(e) intermediate.
>    - Front View: Hexagonal pyramid viewed from the front, base edges and slant edges extending to apex o' on the right, dashed lines representing hidden edges f' and d'.
> 3. Third Stage:
>    - Front View: Pyramid tilted such that the base edge/face makes an angle of 45° with the horizontal (xy line). Vertices labeled b', a', c', d', e', f', o'.
> Reference line xy separates the views.

5. Project downward from Stage 3 and horizontally from Stage 2 to connect all edges and complete the final top view.

> **Figure: Projections of a hexagonal pyramid - Problem 63.5**
>
> Complete orthographic projection of a hexagonal pyramid with base edge 30 mm and height 60 mm through three stages:
> 1. Initial Stage:
>    - Front View (above xy): Regular hexagon with corners a', b', c', d', e', f' and apex o', side 30 mm.
>    - Top View (below xy): Inverted triangle with base along xy containing points a(f), b(e), c(d), and apex o pointing down at height 60 mm.
> 2. Second Stage:
>    - Front View: Base projected to the left, apex o' to the right; hidden internal edges shown with dashed lines.
>    - Top View: Slanted projection showing apex o at xy line, points a(f) at the bottom, b(e) and c(d).
> 3. Final Stage:
>    - Front View: Solid tilted at 45° to the horizontal reference line xy, vertices b', a', c', d', e', f', and apex o'.
>    - Top View: Fully projected top view below the xy line showing visible edges connecting base vertices a, b, c, d, e, f to apex o, with dashed lines representing hidden base edge and slant edge to e.

> **Watch out.** Because the pyramid simultaneously rests on a base corner on HP, make sure corner $d'$ is placed directly on the XY line when inclining edge $c'd'$ at 45° in Stage 3.

**Answer:** Completed projections of the hexagonal pyramid ($B = 30$ mm, $H = 60$ mm) with face $c'd'o'$ on VP, edge $c'd'$ at 45° to HP, and corner $d'$ on HP.

#### Problem 76: Cone resting on generator on VP
**Given:** Cone of base diameter 40 mm and height 60 mm resting on a generator on VP, generator at 40° to HP, apex touching HP.
**Find:** The three-stage orthographic projections of the cone.

1. Draw a 40 mm diameter circle divided into 8 parts above XY, and project the 60 mm triangle with base on XY.

> **Figure: Step 76.1: Initial orthographic projection of the cone with base on VP**
>
> Step 76.1 of the projection of a cone. Beside the drawing is a box labeled '76.1' with 'D = 40' and 'H = 60'.
> - Front view (above horizontal line xy): A circle of diameter Ø40 with center marked o', divided into 8 equal sectors with points labeled 1', 2', 3', 4', 5', 6', 7', 8' along the circumference (1' at left, 3' at top, 5' at right, 7' at bottom).
> - Reference line: Horizontal line labeled x on the left and y on the right.
> - Top view (below xy line): Inverted triangular view of the cone with its base resting on the xy line. Vertical projector lines project points from the circle down to the base line: 1, 2(8), 3(7), 4(6), and 5. Apex is labeled o at the bottom, located at a height of 60 mm below the base line. Straight generator lines connect the apex o to base points 1, 2(8), 3(7), 4(6), and 5.
> - Bottom right notes: 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Rotate the top view triangle below XY so the rightmost generator $5o$ lies completely flat along the XY line.

> **Figure: Step 76.2: Initial views and tilted top view of a cone**
>
> Step 76.2 of problem 76 for a cone with diameter D = 40 mm and height H = 60 mm.
> 1. Reference line xy separates the views.
> 2. Above the xy line: Initial front/top circle view of diameter 40 mm, center labeled o', divided into 8 equal sectors labeled 1' through 8' counterclockwise starting from the leftmost point (1' at left, 3' at top, 5' at right, 7' at bottom).
> 3. Below the xy line: Inverted triangular view with its base along the xy line from 1 to 5, marked with generator points 1, 2(8), 3(7), 4(6), 5. Apex o is at the bottom at height/length H = 60 mm.
> 4. To the right below the xy line: The cone's triangular view is tilted such that the generator 5-o lies along the xy line (point 5 at left, apex o on xy at right). The inclined base contains points 5, 4(6), 3(7), 2(8), 1.
> Data box: D = 40, H = 60.

3. Project upward from the Stage 2 top view to meet horizontal projectors from Stage 1, forming the Stage 2 front view.

> **Figure: Step 76.3: Final front view projection of the tilted cone**
>
> Step 76.3 of problem 76 for a cone with diameter D = 40 mm and height H = 60 mm.
> 1. Reference line xy separates the views.
> 2. Left side: Initial projection with circle (points 1' to 8', center o') above xy and inverted triangular view (base 1-5 on xy, apex o below) below xy.
> 3. Bottom right: Tilted top view with generator on xy, apex o on xy line, base inclined with points 5, 4(6), 3(7), 2(8), 1.
> 4. Top right: Final front view projected upwards from the tilted top view and across from the initial front view. The base is an ellipse with major and minor axes, labeled with points 1', 2', 3', 4', 5', 6', 7', 8'. Apex o' is connected to the extreme tangents of the elliptical base to form the cone outline.
> Data box: D = 40, H = 60.

4. Since generator $o'5'$ is on VP (true length), rotate the Stage 2 front view with $o'5'$ at 40° to XY and apex $o'$ on XY.

> **Figure: Step 76.4: Projections of a cone with inclined axis**
>
> Step 76.4 of the orthographic projection of a cone of diameter D = 40 mm and height H = 60 mm. Stage 1: Front view above reference line xy shows a circle of diameter 40 mm divided into 8 equal parts labelled 1' to 8' (o' at center). Top view below xy shows an inverted triangle of height 60 mm with base 1-5 on the xy line and apex o pointing downwards. Stage 2: The cone is reoriented with its axis parallel to the VP and HP; front view shows apex o' and base points 1' through 8'; top view shows apex o on xy and base on the left. Stage 3: The front view is tilted such that the base/axis is inclined at 40° to the xy line with apex o' resting on xy. Dimensions box indicates D = 40, H = 60.

5. Project downward from the Stage 3 front view and horizontally from Stage 2 to complete the final top view.

> **Figure: Step 76.5: Final top view projection of the inclined cone**
>
> Step 76.5 completing the projection of the cone (D = 40 mm, H = 60 mm). Stages 1 and 2 are identical to step 76.4. In Stage 3, the front view inclined at 40° to the reference line xy has projectors drawn down to meet horizontal projectors from the Stage 2 top view, constructing the final top view. The base appears as an ellipse with generator points 1, 2, 3, 4, 5, 6, 7, 8 plotted, and tangents drawn from apex o' on the xy line to the base ellipse. Dimensions box specifies D = 40, H = 60.

**Answer:** Completed projections of the cone ($D = 40$ mm, $H = 60$ mm) resting on generator $o5$ on VP at 40° to HP with apex $o'$ on HP.

#### Problem 198: Cone on base point on VP (locus)
**Given:** Cone of base 50 mm diameter and axis 70 mm resting on VP, axis at 45° to VP and 30° to HP.
**Find:** The three-stage orthographic projections of the cone with apex away from VP and nearer to HP.

1. Draw a 50 mm diameter circle with 8 divisions above XY, and project the 70 mm high triangle below XY.

> **Figure: Step 198.1: Initial projections of a cone resting with its base on the VP**
>
> Given box above states: BASE DIA - 50mm ; HEIGHT - 70mm; RESTING ON BASE POINT ON VP; θ = 30°; φ = 45°. Step 198.1 shows the initial stage of projection with D = 50, H = 70. Front view (above reference line x-y): a circle of diameter 50 mm (labeled Ø50) with center o', divided into 8 equal sectors with generator points numbered counterclockwise: 1' (leftmost on horizontal center line), 2', 3' (topmost on vertical center line), 4', 5' (rightmost), 6', 7' (bottom), and 8'. Top view (below reference line x-y): an inverted isosceles triangle with base on the xy line of width 50 mm with base points projected down as 1, 2(8), 3(7), 4(6), and 5. The apex is at point o, located at an axis height of 70 mm below the xy line. The axis connects 3(7) to o. Bottom right note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. Rotate the top view triangle keeping base point 5 on XY so the axis is inclined at 45° to XY.

> **Figure: Projection of a cone: Step 198.2**
>
> Step 198.2 showing the initial and tilted positions of a cone with diameter D = 50 mm and height H = 70 mm. Scale 1:1, all dimensions in mm. Reference line labeled x-y.
> - Left stage:
>   - Above x-y: Circle of diameter Ø50 with center o', divided into 8 equal parts labeled 1', 2', 3', 4', 5', 6', 7', 8' counter-clockwise starting from the leftmost point.
>   - Below x-y: Inverted triangular elevation of the cone with base on x-y labeled 1, 2(8), 3(7), 4(6), 5, apex o pointing downwards, and height dimensioned as 70 mm.
> - Right stage:
>   - Below x-y: The cone is tilted such that base point 5 is on the x-y line and the base line 1-5 is inclined at 40° to the x-y line. Base points are labeled 1, 2(8), 3(7), 4(6), 5, connected by generators to apex o at the bottom right.
> Box values: 198.2, D = 50, H = 70.

3. Project upward from the Stage 2 top view to meet horizontal projectors from Stage 1, obtaining foreshortened axis $o_1'o'$.

> **Figure: Projection of a cone: Step 198.3**
>
> Step 198.3 showing the completed projection of the tilted cone. Scale 1:1, all dimensions in mm. Reference line labeled x-y.
> - Left stage:
>   - Above x-y: Circle of diameter Ø50, center o', divided into 8 parts 1' to 8'.
>   - Below x-y: Inverted cone triangle, height 70 mm, base on x-y with points 1, 2(8), 3(7), 4(6), 5, apex o.
> - Right stage:
>   - Below x-y: Tilted cone with point 5 on x-y, base line points 1, 2(8), 3(7), 4(6), 5, apex o, with 40° inclination angle.
>   - Above x-y: Derived view formed by projecting vertical projectors from the tilted view to intersect horizontal projectors from the initial circle. The base appears as an ellipse passing through 1', 2', 3', 4', 5', 6', 7', 8', with the hidden portion through 4'-5'-6' shown dashed. Apex o' is projected to the right, with apparent contour tangents drawn from o' to the ellipse.
> Box values: 198.3, D = 50, H = 70.

4. Draw a line at 30° to XY with true length 70 mm for the locus, swing arc $o_1'o'$ to find apparent angle, and rotate the Stage 2 front view.

> **Figure: Orthographic projection of a cone - Step 198.4**
>
> Step 198.4 of orthographic projections of a cone. Inset box indicates '198.4', 'D = 50', 'H = 70', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.
> - Stage 1: Simple position with base in VP. Front view (above reference line xy) is a circle of diameter Ø50 mm divided into 8 sectors numbered 1' through 8' with center o'. Top view (below xy) is an inverted triangle of base length 50 mm on line xy (points 1, 2(8), 3(7), 4(6), 5) and height 70 mm ending at apex o.
> - Stage 2: Top view rotated such that the base/generator is inclined at 40° to the xy line, apex o pointing down-right. The front view is projected above xy, showing an apparent elliptical base (points 1' to 8') and apex o' to the right.
> - Stage 3: The front view from Stage 2 is redrawn inclined such that its axis is tilted at 30° to the horizontal (line xy). The final top view is not yet constructed in this step.

5. Project downward from Stage 3 and horizontally from Stage 2 to plot the base and complete the final top view.

> **Figure: Orthographic projection of a cone - Step 198.5**
>
> Step 198.5 showing the completed three-stage orthographic projection of the cone. Inset box indicates '198.5', 'D = 50', 'H = 70', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.
> - Stage 1: Front view is a circle Ø50 mm with 8 divisions (1'–8', center o') above xy; top view is an inverted triangle with base 50 mm on xy and height 70 mm extending to apex o.
> - Stage 2: Cone tilted to VP with top view inclined at 40°, apex o at the bottom-right. Front view shows base as an ellipse and apex o' connected by outline generators.
> - Stage 3: Front view is redrawn with axis inclined at 30° to HP. Vertical projectors drawn down from front view and horizontal projectors drawn across from Stage 2 top view to form the final top view: the base appears as an ellipse with plotted points 1 through 8, connected by tangential generators to apex o.

> **Watch out.** Because the axis is already inclined at 45° to VP, its Stage 2 front view $o_1'o'$ is foreshortened; you must construct the locus triangle above XY to find the apparent inclination before rotating Stage 3, orienting the apex downward toward XY so it lies nearer to HP.

**Answer:** Completed locus projections of the cone ($D = 50$ mm, $H = 70$ mm) with true axis inclinations of 45° to VP and 30° to HP.

<!-- page 12 | Practice: Real-World Equilibrium—Freely Suspended Pyramids -->

## Practice: Real-World Equilibrium—Freely Suspended Pyramids

You already know how to tilt solids through three stages and how to construct a locus triangle when an already-inclined axis makes a true angle with VP. Now we combine those geometric skills with physics to predict how a three-dimensional pyramid hangs in space when freely suspended from a corner by a string. A pyramid suspended from a base corner naturally settles so that its center of gravity (one-quarter of the height up the axis) hangs directly below the suspension corner.

### The idea

When you tie a string to one base corner of a solid and let it hang freely, gravity pulls the solid's entire weight downward through a single balance point called the **center of gravity** ($G$, front view $g'$). The solid swings until it reaches physical equilibrium, which happens only when $g'$ comes to rest vertically below the **suspension corner**. In a front view, "vertically below" means the line joining the suspension corner and $g'$ is perpendicular to the $xy$ line.

For any pyramid or cone of height $H$, the center of gravity always lies on the central axis at a distance of $H/4$ from the base. For example, if the axis height is 60 mm, you measure $60/4 = 15$ mm up the axis from the base in the Stage 1 front view to mark $g'$. You must also orient the Stage 1 top view so that the chosen suspension corner lies at an extreme left or right position, ensuring the line from that corner to $g'$ shows its true relationship in the front view.

Instead of being given a numerical angle with HP for Stage 2, the suspension rule sets the tilt automatically: redraw the Stage 1 front view so the line connecting the suspension corner to $g'$ is perpendicular to $xy$ (with the apex $o'$ resting on $xy$ for convenience). Finally, complete Stage 3 either by rotating the top view of the axis directly if the apparent angle with $xy$ is given, or by constructing an apparent-angle locus if the true inclination to VP is specified.

### Worked example

**Problem 64: Freely suspended triangular pyramid (top view inclined)**

**Given:** A triangular pyramid of base edge 40 mm and axis 60 mm is freely suspended from a base corner, with the top view of its axis inclined at 50° to the $xy$ line.
**Find:** Its three-stage front and top views.

1. Draw the Stage 1 top view as an equilateral triangle $abc$ of side 40 mm with edge $bc$ perpendicular to $xy$ on the right, placing the suspension corner $a$ at the extreme left so it tilts cleanly in the front view.
2. Project up to draw the Stage 1 front view with base $a'b'(c')$ on $xy$ and apex $o'$ at height 60 mm, then mark the center of gravity $g'$ on the axis at $H/4 = 60/4 = 15$ mm above the base and join $a'g'$.

> **Figure: Projection of triangular pyramid in simple position (Step 64.1)**
>
> Step 64.1 of the projection of a triangular pyramid:
> - A given box specifies: 'B = 40', 'H = 60'.
> - Front view (above the xy-line): An isosceles triangle with base corners a' and b'(c') resting on the xy reference line. Base edge a'b'(c') is horizontal. The apex is labeled o' at a vertical height of 60 mm from the base. A dashed centerline extends vertically from the base through the center of gravity g' (located at height 60/4 = 15 mm above the base) to the apex o'.
> - Top view (below the xy-line): An equilateral triangle with corners a on the left, and vertical edge bc on the right (c at top, b at bottom). Base edge ab has dimension 40 mm. Apex o is at the centroid, with slant edges connecting o to a, o to b, and o to c.
> - Vertical projector lines connect corners a to a', b and c to b'(c'), and apex o to axis line/o'.

3. For Stage 2, redraw the front view so the suspension line $a'g'$ is perpendicular to $xy$ (resting apex $o'$ on $xy$), because a freely hanging body settles with its center of gravity directly below the point of suspension.

> **Figure: Orthographic projection step 64.2 of a triangular pyramid**
>
> Step 64.2 showing the initial orthographic projections and the tilted front view of a triangular pyramid.
> - GIVEN box: B = 40, H = 60.
> - Notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> - Stage 1 (Initial position):
>   - Reference line labeled x-y.
>   - Front view: An isosceles triangle with base on the xy line from a' to b'(c'). Total height is 60 mm. The center of gravity g' is marked on the central axis at a height of 60/4 = 15 mm above the base.
>   - Top view: Equilateral triangle with base edge bc vertical on the right (length 40 mm) and vertex a pointing to the left. The apex o is at the center, connected to vertices a, b, and c by slant edges.
> - Stage 2 (Tilted front view):
>   - The pyramid's front view is redrawn tilted to the right, showing base vertices b'(c') and a', apex o', and center of gravity g' with a dashed line connected towards o'.

4. Project downward from the tilted Stage 2 front view and across from the Stage 1 top view to complete the Stage 2 top view, marking the foreshortened axis and hidden edges.

> **Figure: Orthographic projection step 64.3 of a triangular pyramid**
>
> Step 64.3 showing the completed two-stage projection of the triangular pyramid.
> - GIVEN box: B = 40, H = 60.
> - Notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> - Stage 1 (Initial position):
>   - Front view: Base a'-b'(c') on the xy line, height 60 mm, center of gravity g' at height 60/4 = 15 mm.
>   - Top view: Triangle abc with base side 40 mm, apex o at the center connected to vertices a, b, and c.
> - Stage 2 (Tilted position):
>   - Front view: Re-drawn from step 64.2 with apex o' tilted to the right, base edge b'(c')-a', and center of gravity g'.
>   - Top view: Obtained by projecting vertically downwards from front view vertices a', b'(c'), o' and horizontally from the first stage top view vertices a, b, c, o. Base vertices b and c remain on vertical alignment, apex o is on the far right, and apex lines connect to all vertices.

5. Since the problem gives the angle of the top view of the axis directly, draw a line inclined at 50° to $xy$ and reproduce the Stage 2 top view along it to get the Stage 3 top view.

> **Figure: Orthographic projection steps of a triangular pyramid - Step 64.4**
>
> Step 64.4 showing projection of a triangular pyramid with base edge B = 40 mm and height H = 60 mm.
> 1. First stage: 
> - Front view shows an isosceles triangle on reference line x-y with base points a' to b'(c') = 40 mm, apex at top with height 60 mm, and center of gravity g' marked at height 60/4 = 15 mm above base.
> - Top view directly below shows an equilateral triangle with vertices a, b, c and apex o at the center connected to vertices. Side length = 40 mm.
> 2. Second stage:
> - Front view is tilted so it rests on apex o' with base b'(c') elevated and apex a' at the highest point, with g' along the axis line.
> - Top view is projected below with vertices a, b, c, o.
> 3. Third stage:
> - Top view is reproduced rotated such that its edge/axis makes an angle of 50° with the horizontal/reference line.
> Note: Scale 1:1, all dimensions are in mm.

6. Project vertically up from the Stage 3 top view and horizontally across from the Stage 2 front view to complete the final Stage 3 front view, checking visibility from the bottom of the top view.

> **Figure: Completed orthographic projection of a triangular pyramid - Step 64.5**
>
> Step 64.5 showing the complete three-stage projection of the triangular pyramid (B = 40 mm, H = 60 mm).
> 1. First stage: Front view of height 60 mm with base on x-y line, center of gravity g' at 15 mm (60/4), and equilateral triangular top view of base edge 40 mm.
> 2. Second stage: Tilted front view resting on apex o' with base b'(c') tilted, and the corresponding top view projected downwards.
> 3. Third stage: Top view rotated at 50° to the horizontal/projector line, and projectors drawn vertically upward intersecting horizontal projectors from stage 2 to construct the final front view. In the final front view, visible edges connect apex a' to b', c', and o', while base edge b'-c' is drawn as a hidden dashed line.
> Note: Scale 1:1, all dimensions are in mm.

**Answer:** The pyramid hangs with line $a'g'$ vertical ($g'$ at 15 mm from the base along the 60 mm axis) and its top-view axis rotated directly at 50° to $xy$.

### More problems

#### Problem 65: Freely suspended square pyramid (locus method)
**Given:** Square pyramid, base side 40 mm, height 60 mm, freely suspended from a base corner, axis inclined at 30° to VP. **Find:** Front and top views.

1. Draw the Stage 1 top view as a 40 mm square $abcd$ with diagonal $ac$ parallel to $xy$ so the suspension corner $a$ (or $c$) lies at an extreme position.
2. Project the Stage 1 front view of height 60 mm, mark $g'$ on the axis $p'o'$ at $60/4 = 15$ mm above the base, and join $g'$ to suspension corner $a'$.

> **Figure: Step 65.1: Initial front and top views of the square pyramid resting on HP**
>
> Initial orthographic projection step 65.1 of a square pyramid resting on HP:
> - Front view (above reference line xy): Triangular view with apex o' at top and base along xy. Base corners are labelled a' (left), b'(d') (center), and c' (right). Total height of the pyramid is dimensioned as 60 mm. The center of gravity g' is located on the axis at a height of 60/4 = 15 mm above the base. A line connects corner a' to g' to represent the suspension line from corner a'.
> - Top view (below xy): Square base oriented diagonally with corners a (left), b (bottom), c (right), and d (top). The center apex o connects to all four corners. One edge is dimensioned as □40 mm.
> - Annotations: Box containing '65.1' with 'B = 40' and 'H = 60'. Scale note at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

3. Redraw the front view in Stage 2 with the line $a'g'$ perpendicular to $xy$ and apex $o'$ touching $xy$ to satisfy the free-suspension equilibrium condition.

> **Figure: Step 65.2: Projection of a square pyramid tilted in front view**
>
> Step 65.2 showing projection of a square pyramid with base side B = 40 mm and height H = 60 mm. Left side shows simple position: top view is a square oriented as a rhombus with diagonal horizontal and vertical, labeled corners a (left), b (bottom), c (right), d (top), and apex o (center), side dimension labeled □40. The front view sits on XY line with base a'-b'(d')-c' and apex o' at height 60 mm. Point g' is located on the axis b'(d')-o' at a height of 60/4 = 15 mm from the base. Right side shows the tilted front view with vertices labeled c' (left), b'(d') on edge c'a', a' (top apex of the triangle), o' (right), and internal point g'.

4. Project down from the Stage 2 front view and across from Stage 1 to complete the Stage 2 top view, obtaining the foreshortened axis length $po$.

> **Figure: Step 65.3: Projection of a square pyramid with second stage top view**
>
> Step 65.3 showing the complete two-stage projection of the square pyramid (B = 40 mm, H = 60 mm). The left stage is identical to step 65.2 (top view square base of side 40 mm with corners a, b, c, d and center o; front view a'-b'(d')-c' to apex o' with height 60 mm, and point g' at height 15 mm). The second stage shows the tilted front view (vertices c', b'(d'), a', o', and point g') and projects downward to obtain the second-stage top view: corners are labeled c (leftmost), d (top), b (bottom), a (inside), and apex o (rightmost). Slant edges d-o, b-o, c-d, c-b, d-a, b-a are drawn, with edge c-a shown as a dashed (hidden) line.

5. Because the 30° angle to VP is a true inclination of an already-tilted axis, draw a line from $p$ at 30° to $xy$, step off the true axis length 60 mm to establish a horizontal locus, and swing the foreshortened length $po$ to find the apparent angle $\beta = 35^\circ$.
6. Rotate the Stage 2 top view so its axis $po$ lies along the $\beta = 35^\circ$ line to complete the Stage 3 top view.

> **Figure: Step 65.4: Orthographic projection of a square pyramid up to inclined top view**
>
> Orthographic projection stages of a square pyramid with base side B = 40 mm and height H = 60 mm.
> - Stage 1 (Simple position): Front view is an isosceles triangle a'o'c' of height 60 mm resting on the xy line. Point p' is at the base on the vertical axis, and point g' is located at a height of 60/4 = 15 mm above the base. Top view is a diamond/square of side 40 mm with vertices a (left), b (bottom), c (right), and d (top), and apex o(p) at the center.
> - Stage 2: Front view is tilted so that apex o' rests on the xy line, with base corner c' and apex a' elevated, showing points c', b'(d'), a', p', and g'. Projectors drop down to form the tilted top view showing base quadrilateral a-b-c-d and apex o.
> - Stage 3: Top view is reproduced rotated such that the axis/slant edge is inclined at 30° to the xy line (with note 'APPARENT ANGLE - 35°'), showing points a, b, c, d, p, o, and o1.
> - Labels include: 'B = 40', 'H = 60', 'APPARENT ANGLE - 35°', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

7. Project vertically up from the Stage 3 top view to meet horizontal projectors from the Stage 2 front view and draw the final Stage 3 front view.

> **Figure: Step 65.5: Complete three-stage orthographic projection of the square pyramid**
>
> Complete orthographic projection of a square pyramid (B = 40 mm, H = 60 mm):
> - Stages 1 and 2 are identical to step 65.4.
> - Stage 3 Top View: Tilted at an inclination of 30° to the xy line with an apparent angle of 35°, showing points a, b, c, d, p, o, and o1.
> - Stage 3 Front View: Projectors drawn vertically upwards from the rotated top view to intersect horizontal projectors from the second stage front view, constructing the final front view. Apex o' lies on the xy line. Visible outer profile is formed by solid lines connecting c'-b'-a'-o'-c'. The hidden corner d' and edges connecting d' to a', c', and o' are drawn with dashed lines.
> - Labels include: 'B = 40', 'H = 60', 'APPARENT ANGLE - 35°', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Watch out.** Do not rotate the Stage 2 top view directly at 30°; since the axis is inclined to HP during suspension, you must use the locus construction to find the apparent angle 35° with $xy$.

**Answer:** Center of gravity $g'$ is 15 mm from the base; the three-stage projections are completed using an apparent top-view axis inclination of $\beta = 35^\circ$ to $xy$.
