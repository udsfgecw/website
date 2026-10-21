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

![Step 211-1: Initial projection of triangular prism resting with its base on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-002-panel-2.webp)

2. **Stage 2 (Front view):** Redraw the front view tilted on the right base edge $2'(3')$ on $xy$ so the axis is inclined at 35° to $xy$ (the base makes $90^\circ - 35^\circ = 55^\circ$ with $xy$).

![Orthographic projection of a triangular prism - Step 211-2: Front view tilted at 35 degrees](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-003-panel-1.webp)

3. **Stage 2 (Top view):** Project vertically down from the tilted front view and horizontally from the Stage 1 top view to complete the foreshortened Stage 2 top view, marking the hidden lower edge $2-3$ as dashed.

![Orthographic projection of a triangular prism - Step 211-3: Projection of final top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-003-panel-2.webp)

4. **Stage 3 (Top view):** Because the resting base edge $2-3$ stays on HP in true length, rotate the Stage 2 top view directly so edge $2-3$ is inclined at 45° to $xy$.

![Orthographic projections of a triangular prism in three stages (Problem 211-4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-004-panel-1.webp)

5. **Stage 3 (Front view):** Project vertically up from the Stage 3 top view and horizontally from the Stage 2 front view to complete the final front view, drawing visible edges solid and hidden edges dashed.

![Complete orthographic projections of a triangular prism in three stages (Problem 211-5)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-004-panel-2.webp)

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

![Step 51.1: Simple position projections of a square pyramid standing on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-005-panel-2.webp)

![Projection of a square pyramid, step 51.2: tilting the front view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-006-panel-1.webp)

![Projection of a square pyramid, step 51.3: obtaining the second-stage top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-006-panel-2.webp)

![Orthographic projections of a square pyramid tilted in two stages (Problem 51.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-007-panel-1.webp)

![Complete orthographic projections of a square pyramid tilted in two stages (Problem 51.5)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-007-panel-2.webp)

**Answer:** Projections completed with base edge 40 mm, height 60 mm, axis at 40° to HP, and resting edge at 45° to VP (apex away from VP on the right).

#### Problem Q52 (53): Square pyramid, apex towards VP, right
**Given:** Square pyramid, base edge 40 mm, height 60 mm, base edge on HP inclined 45° to VP, axis 40° to HP, apex towards VP on the right.
**Find:** Draw the projections of the pyramid.

1. Construct the 40 mm square $abcd$ below $xy$ with $bc$ vertical on the right, and project the 60 mm tall triangular front view.
2. Redraw the front view resting on right edge $b'(c')$ with the base at 50° to $xy$ (axis at 40° to HP) so the apex tips right.
3. Project the Stage 2 top view below $xy$, marking hidden edge $b-c$ dashed.
4. Rotate the Stage 2 top view so edge $b-c$ makes 45° with $xy$, orienting apex $o$ upward towards $xy$ (towards VP) on the right.
5. Project vertically up and horizontally across to complete the Stage 3 front view, checking visibility from the bottom of the top view.

![Step 52.1: Initial projections of a square pyramid resting on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-008-panel-2.webp)

![Step 52.2: Projection of square pyramid tilted at 40 degrees](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-009-panel-1.webp)

![Step 52.3: Completed top view for tilted square pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-009-panel-2.webp)

![Orthographic projections of a square pyramid for Problem 52.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-010-panel-1.webp)

![Orthographic projections of a square pyramid for Problem 52.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-010-panel-2.webp)

**Answer:** Projections completed with base edge 40 mm, height 60 mm, axis at 40° to HP, and resting edge at 45° to VP (apex towards VP on the right).

#### Problem Q53 (54): Square pyramid, apex away from VP, left
**Given:** Square pyramid, base edge 40 mm, height 60 mm, base edge on HP inclined 45° to VP, axis 40° to HP, apex away from VP on the left.
**Find:** Draw the projections of the pyramid.

1. Draw the 40 mm square $abcd$ in the top view and the 60 mm tall triangle in the front view.
2. Tilt the front view onto the left base edge $a'(d')$ on $xy$ with the base at 50° to $xy$ (axis at 40° to HP) so the apex leans to the left.
3. Project the Stage 2 top view below $xy$, showing hidden resting edge $a-d$ dashed.
4. Rotate the Stage 2 top view so resting edge $a-d$ is at 45° to $xy$ with apex $o$ pointing downward away from $xy$ (away from VP) on the left.
5. Project up from the rotated top view and across from the Stage 2 front view to complete the final front view.

![Step 53.1: Initial projection of a square pyramid standing on its base](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-011-panel-2.webp)

![Step 53.2: Tilting the front view of a square pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-012-panel-1.webp)

![Step 53.3: Projecting the final top view of the tilted square pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-012-panel-2.webp)

![Orthographic projections of a square pyramid - Problem 53.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-013-panel-1.webp)

![Orthographic projections of a square pyramid - Problem 53.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-013-panel-2.webp)

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

![Step 1: Simple position projections of the square pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-014-panel-2.webp)

![Orthographic projection of a square pyramid tilted to the HP (Step 54.2)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-015-panel-1.webp)

![Complete second stage orthographic projection of a square pyramid tilted to the HP (Step 54.3)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-015-panel-2.webp)

![Orthographic projections of a square pyramid tilted in stages (Problem 54.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-016-panel-1.webp)

![Complete orthographic projections of a square pyramid tilted in three stages (Problem 54.5)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-016-panel-2.webp)

**Answer:** Projections completed with base edge 40 mm, height 60 mm, axis at 40° to HP, and resting edge at 45° to VP (apex towards VP on the left).

#### Problem Q55 (56): Pentagonal pyramid on a base corner
**Given:** Pentagonal pyramid, base edge 30 mm, height 60 mm, resting on base corner $c$ on HP, slant edge $o'c'$ at 50° to HP, top view of $oc$ at 30° to $xy$.
**Find:** Draw the projections of the pyramid.

1. Draw a regular pentagon $abcde$ of side 30 mm below $xy$ with edge $a-e$ vertical on the left so corner $c$ is at the extreme right; project the 60 mm tall front view.
2. Tilt the front view about corner $c'$ on $xy$ so slant edge $o'c'$ is inclined at 50° to $xy$.
3. Project down from the tilted front view and across from the Stage 1 top view to draw the Stage 2 top view.
4. Because the angle of the top view of the slant edge is given directly, rotate the Stage 2 top view so $o-c$ makes 30° with $xy$.
5. Project up and across to complete the final front view.

![Step 55.1: Initial position of pentagonal pyramid resting on base in HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-017-panel-2.webp)

![Orthographic projection step 55.2 of a pentagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-018-panel-1.webp)

![Orthographic projection step 55.3 of a pentagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-018-panel-2.webp)

![Projections of a pentagonal pyramid (Problem 55.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-019-panel-1.webp)

![Projections of a pentagonal pyramid (Problem 55.5)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-019-panel-2.webp)

**Answer:** Projections completed with base edge 30 mm, height 60 mm, slant edge at 50° to HP, and top view of slant edge at 30° to $xy$.

#### Problem Q250 (59): Hexagonal prism with resting edge inclined
**Given:** Hexagonal prism, base edge 30 mm, axis 80 mm, resting on a base edge on HP, axis at 45° to HP, resting base edge at 50° to VP.
**Find:** Draw the projections of the prism.

1. Draw a regular hexagon of side 30 mm below $xy$ with two vertical edges so right edge $c(3)-d(4)$ is perpendicular to $xy$; project the 80 mm tall rectangular front view.
2. Tilt the front view on base edge $3'(4')$ so the axis makes 45° with $xy$.
3. Project down and across to complete the Stage 2 top view, marking hidden lower base edges dashed.
4. Rotate the Stage 2 top view directly so the true-length resting edge $3-4$ is inclined at 50° to $xy$.
5. Project vertically up and horizontally across to complete the Stage 3 front view.

![Step 250.1: Initial position projections of the hexagonal prism](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-026-panel-2.webp)

![Projection of hexagonal prism - Step 250.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-027-panel-1.webp)

![Projection of hexagonal prism - Step 250.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-027-panel-2.webp)

![Step-by-step projection of a hexagonal prism tilted to HP and VP (Step 250.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-028-panel-1.webp)

![Final orthographic projection of hexagonal prism inclined to both HP and VP (Step 250.5)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-028-panel-2.webp)

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

![Step 79.1: Simple position orthographic projection of hexagonal prism](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-029-panel-2.webp)

![Projections of a hexagonal prism: Step 79.2 showing initial position and tilted front view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-030-panel-1.webp)

![Projections of a hexagonal prism: Step 79.3 showing complete second stage top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-030-panel-2.webp)

![Projections of a hexagonal prism tilted to HP and VP, Step 79.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-031-panel-1.webp)

![Completed orthographic projections of a hexagonal prism, Step 79.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-031-panel-2.webp)

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

![Step 69.1: Simple position of the cone with base on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-038-panel-2.webp)

2. **Stage 2 Front View:** Copy the front-view triangle with point $5'$ resting on the XY line and incline the right-hand generator $5'o'$ at 40° to XY so the cone tilts to the right.

![Orthographic projection of a cone - Step 69.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-039-panel-1.webp)

3. **Stage 2 Top View:** Drop vertical projectors from $1' 	ext{ to } 5'$ and $o'$ to meet horizontal projectors from the Stage 1 circle; join points 1 to 8 with a smooth ellipse (keeping the lower half dashed if hidden from above) and draw the two extreme tangent generators to apex $o$.

![Orthographic projection of a cone - Step 69.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-039-panel-2.webp)

4. **Stage 3 Top View:** Because a vertical plane appears as a straight line in the top view, rotate the entire Stage 2 top view directly so the axis line $o	ext{–}5$ makes 45° with the XY line, placing apex $o$ closer to XY (away from the observer, or toward VP as drawn).

![Projection of a cone: step 69.4 showing stage 1, stage 2, and stage 3 top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-040-panel-1.webp)

5. **Stage 3 Front View:** Project all eight base points and apex $o$ vertically up to meet horizontal projectors from the Stage 2 front view, draw the smooth elliptical base (with the back half dashed), and connect the extreme tangent generators to apex $o'$.

![Projection of a cone: step 69.5 showing completed projection with final front view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-040-panel-2.webp)

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

![Step 70.1: Initial position projection of a cone resting on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-041-panel-2.webp)

![Projection of a cone: step 70.2 showing simple position views and tilted front view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-042-panel-1.webp)

![Projection of a cone: step 70.3 showing the completed top view of the inclined cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-042-panel-2.webp)

![Projection of a cone: Step 70.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-043-panel-1.webp)

![Projection of a cone: Step 70.5 (Final projection)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-043-panel-2.webp)

**Answer:** Three-stage projections of the cone ($D = 40$ mm, $H = 60$ mm) with generator $5'o'$ at 40° to HP and horizontal base diameter 3–7 at 45° to VP.

#### Problem 219: Cylinder Inclined to HP and Top View Inclined

**Given:** Cylinder ($D = 40$ mm, $H = 60$ mm) resting on base point $5'$ on HP, base at 60° to HP, top view of axis at 35° to XY.
**Find:** The three-stage orthographic projections of the cylinder.

1. Draw the Stage 1 top-view circle ($D = 40$ mm, 8 divisions: $1	ext{–}8$ bottom, $a	ext{–}h$ top) and front-view rectangle ($H = 60$ mm) on XY.
2. Redraw the Stage 2 front-view rectangle resting on base point $5'$ on XY with its base $1'5'$ inclined at 60° to XY.
3. Project both bases down to form two ellipses in the Stage 2 top view, keeping the lower half of the bottom base dashed.
4. Rotate the Stage 2 top view directly so the axis makes 35° with the XY line.
5. Project all sixteen points of both bases up to the Stage 2 height levels to draw the two final front-view ellipses and boundary generators.

![Initial position projection of a vertical cylinder (Step 219.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-044-panel-2.webp)

![Projection of cylinder inclined to HP - Step 219.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-045-panel-1.webp)

![Projection of cylinder inclined to HP - Step 219.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-045-panel-2.webp)

![Projection of a cylinder: Step 219.4 showing Stage 1, Stage 2, and Stage 3 top view inclined at 35 degrees](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-046-panel-1.webp)

![Projection of a cylinder: Step 219.5 showing the completed three-stage projection including the final front view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-046-panel-2.webp)

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

![Step 71.1: Initial projection of cone with base on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-059-panel-2.webp)

![Step 71.2: Projection of a cone with generator on HP - tilted front view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-060-panel-1.webp)

![Step 71.3: Projection of a cone with generator on HP - completed top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-060-panel-2.webp)

![Projections of a cone - Problem 71.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-061-panel-1.webp)

![Projections of a cone - Problem 71.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-061-panel-2.webp)

**Answer:** Three-stage projections of the cone ($D = 40$ mm, $H = 60$ mm) resting on generator $5'o'$ on HP with top-view axis at 40° to XY.

#### Problem 73: Cone on Generator on HP with Axis on Profile Plane

**Given:** Cone ($D = 40$ mm, $H = 60$ mm) resting on generator $5'o'$ on HP, axis on a Profile Plane (perpendicular to both HP and VP), base visible in front view, apex touching VP.
**Find:** The three-stage projections of the cone.

1. Draw the Stage 1 top-view circle ($D = 40$ mm, 8 divisions) and front-view triangle ($H = 60$ mm) resting on XY.
2. Tilt the front-view triangle in Stage 2 so generator $5'o'$ lies completely flat on the XY line.
3. Project the Stage 2 top view below XY, drawing the entire tilted base as a visible ellipse.
4. Rotate the Stage 2 top view by 90° so the axis is perpendicular to XY (lying on a Profile Plane) with apex $o$ touching the XY line.
5. Project up to the Stage 2 heights to draw the final front view; the entire elliptical base faces the observer and is fully visible.

![Step 73.1: Simple position of the cone with base on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-065-panel-2.webp)

![Projection of a cone: step 73.2 showing initial views and tilted front view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-066-panel-1.webp)

![Projection of a cone: step 73.3 completing the top view of the tilted cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-066-panel-2.webp)

![Orthographic projections of a cone, Step 73.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-067-panel-1.webp)

![Orthographic projections of a cone, Step 73.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-067-panel-2.webp)

**Answer:** Three-stage projections of the cone ($D = 40$ mm, $H = 60$ mm) on generator $5'o'$ on HP with the top-view axis perpendicular to XY (90°) and apex on XY.

#### Problem 75: Cone Lying on a Generator on VP with Base Inclined to HP

**Given:** Cone ($D = 40$ mm, $H = 60$ mm) lying on a generator on VP, base at 60° to HP, one point of the base circle touching HP.
**Find:** The three-stage projections of the cone.

1. Draw the Stage 1 top-view circle ($D = 40$ mm, 8 divisions) and front-view triangle ($H = 60$ mm) on XY.
2. Tilt the front-view triangle in Stage 2 with point $5'$ on XY so the base $1'5'$ makes 60° with XY.
3. Project the Stage 2 top view below XY; note that the extreme back generator $o	ext{–}7$ is parallel to HP and therefore shows its true length.
4. Rotate the Stage 2 top view until generator $o	ext{–}7$ lies directly on the XY line, placing that generator on VP.
5. Project up from the Stage 3 top view to the Stage 2 height levels (keeping point $5'$ on XY) to complete the final front view.

![Step 75.1: Initial projections of the cone resting with its base on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-068-panel-2.webp)

![Projection of a cone: Stage 2 front view tilted at 60 degrees](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-069-panel-1.webp)

![Projection of a cone: Stage 2 completed front and top views](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-069-panel-2.webp)

![Projection of a cone: Step 4 (75.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-070-panel-1.webp)

![Projection of a cone: Final Step (75.5)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-070-panel-2.webp)

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

![Step 213.1: Projections of square pyramid in simple position](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-050-panel-2.webp)

2. **Stage 2 Front View (Lying on triangular face):** Rotate the front view triangle to the right until the right-hand slant face $b'(c')-o'$ lies flat on the $xy$ line. Use compass arcs from $b'(c')$ and $o'$ to locate the lifted base edge $a'(d')$.

![Step 213.2 of projection of a square pyramid lying on a slant triangular face or edge on the HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-051-panel-1.webp)

3. **Stage 2 Top View:** Project vertical lines down from $a'(d')$, $b'(c')$, and $o'$ in the tilted front view, and intersect them with horizontal locus lines from the Stage 1 top view. Darken the visible upper faces and draw the hidden bottom base edge $bc$ as a dashed line.

![Step 213.3 of projection of a square pyramid showing top view of tilted pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-051-panel-2.webp)

4. **Stage 3 Top View (Base edge at $30^\circ$ to VP):** Draw a construction line below $xy$ inclined at $30^\circ$ to $xy$, and reproduce the Stage 2 top view so the resting base edge $bc$ lies along this $30^\circ$ line.

![Projection of a square pyramid - intermediate step 213.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-052-panel-1.webp)

5. **Stage 3 Front View:** Project vertical lines up from all corners of the Stage 3 top view to meet horizontal locus lines from the Stage 2 front view. Connect the base $a'b'c'd'$ and slant edges to $o'$, keeping edges from the back corner $b'$ dashed.

![Projection of a square pyramid - completed solution 213.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-052-panel-2.webp)

**Answer:** The complete three-stage orthographic projections of the square pyramid lying on its triangular face $obc$ with base edge $bc$ at $30^\circ$ to VP are shown in Figure 213.5.

### More problems

#### Problem 58: Hexagonal pyramid lying on a triangular face

**Given:** Hexagonal pyramid, base edge 30 mm, height 60 mm, lying on a triangular face on HP, resting base edge at $50^\circ$ to VP, apex nearer to observer.
**Find:** Three-stage orthographic projections.

1. Draw a regular hexagon $abcdef$ of side 30 mm below $xy$ with right edge $cd \perp xy$, and project the Stage 1 front view of height 60 mm.

![Step 58.1: Initial orthographic projection of hexagonal pyramid resting on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-053-panel-2.webp)

2. Rotate the front view so the triangular face $c'(d')-o'$ lies flat on the $xy$ line.

![Step 58.2: Projection of hexagonal pyramid tilted on a slant edge](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-054-panel-1.webp)

3. Project down from the tilted front view and across from Stage 1 to complete the Stage 2 top view, marking hidden base edge $cd$ dashed.

![Step 58.3: Top view projection of tilted hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-054-panel-2.webp)

4. Rotate the Stage 2 top view so the resting base edge $cd$ is inclined at $50^\circ$ to $xy$ with apex $o$ pointing downward (nearer the observer).

![Orthographic projections of a hexagonal pyramid - Step 58.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-055-panel-1.webp)

5. Project up from the Stage 3 top view and across from Stage 2 to complete the final front view.

![Orthographic projections of a hexagonal pyramid - Step 58.5 (Complete solution)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-055-panel-2.webp)

**Answer:** Projections of the hexagonal pyramid lying on face $ocd$ with edge $cd$ at $50^\circ$ to VP are completed in Figure 58.5.

#### Problem 59: Hexagonal pyramid lying on a lateral edge

**Given:** Hexagonal pyramid, base edge 30 mm, height 60 mm, lying on a lateral edge on HP inclined at $30^\circ$ to VP, apex nearer to observer.
**Find:** Three-stage orthographic projections.

1. Draw top view hexagon $abcdef$ of side 30 mm with corner $d$ on the extreme right so lateral edge $od$ is parallel to $xy$, then project the front view of height 60 mm.

![Step 59.1: Initial projection of hexagonal pyramid resting on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-056-panel-2.webp)

2. Rotate the front view until the right-hand slant edge $o'-d'$ rests completely flat on the $xy$ line.

![Orthographic projection of a hexagonal pyramid - Step 2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-057-panel-1.webp)

3. Intersect vertical projectors from Stage 2 with horizontal lines from Stage 1 to draw the Stage 2 top view, showing hidden edge $od$ dashed.

![Orthographic projection of a hexagonal pyramid - Step 3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-057-panel-2.webp)

4. Redraw the Stage 2 top view so the resting lateral edge $od$ lies on a line inclined at $30^\circ$ to $xy$ with apex $o$ nearer the observer.

![Orthographic projections of a hexagonal pyramid inclined to HP and VP - Problem 59.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-058-panel-1.webp)

5. Project up to meet horizontal locus lines from Stage 2 and complete the Stage 3 front view.

![Complete orthographic projections of a hexagonal pyramid inclined to HP and VP - Problem 59.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-058-panel-2.webp)

**Answer:** Projections of the hexagonal pyramid lying on lateral edge $od$ at $30^\circ$ to VP are completed in Figure 59.5.

#### Problem 60: Square pyramid with triangular face parallel to VP

**Given:** Square pyramid, base edge 40 mm, height 60 mm, resting on a base edge on HP, triangular face containing that edge parallel to VP, base visible in front view.
**Find:** Three-stage orthographic projections.

1. Draw top view square $abcd$ of side 40 mm with edge $bc \perp xy$, and project the Stage 1 front view of height 60 mm.

![Step 60.1: Initial projection of square pyramid resting on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-071-panel-2.webp)

2. Rotate the front view about $b'(c')$ on $xy$ until the triangular face $b'(c')-o'$ stands perpendicular ($90^\circ$) to $xy$, keeping it parallel to HP's vertical projector.

![Orthographic projection of a square pyramid, Step 60.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-072-panel-1.webp)

3. Project down and across to construct the Stage 2 top view, where the vertical face $obc$ appears as a single horizontal line segment.

![Orthographic projection of a square pyramid, Step 60.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-072-panel-2.webp)

4. Rotate the Stage 2 top view by $90^\circ$ so face $obc$ becomes parallel to $xy$ at the back, placing the base toward the observer so it is visible.

![Orthographic projection stages of a square pyramid (Problem 60.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-073-panel-1.webp)

5. Project up from Stage 3 and across from Stage 2 to complete the final front view with the full square base $a'b'c'd'$ visible.

![Complete orthographic projection of a square pyramid (Problem 60.5)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-073-panel-2.webp)

> **Watch out.** For a tilted triangular face to be parallel to VP in Stage 3, it must first be made vertical (perpendicular to HP) in Stage 2.

**Answer:** Projections of the square pyramid with vertical face $obc$ parallel to VP and base visible are shown in Figure 60.5.

#### Problem 197: Pentagonal pyramid with triangular face perpendicular to HP

**Given:** Pentagonal pyramid, base edge 30 mm, height 60 mm, resting on a base edge on HP, containing triangular face $\perp$ HP, resting base edge parallel to VP and nearer to it.
**Find:** Three-stage orthographic projections.

1. Draw regular pentagon $abcde$ of side 30 mm below $xy$ with left edge $ae \perp xy$, and project the Stage 1 front view of height 60 mm.

![Step 197.1: Initial projection of pentagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-074-panel-2.webp)

2. Tilt the front view about base edge $a'(e')$ on $xy$ until the left triangular face $o'-a'(e')$ is perpendicular ($90^\circ$) to $xy$.

![Projection of a pentagonal pyramid, step 197.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-075-panel-1.webp)

3. Project vertical lines down and horizontal lines across to complete the Stage 2 top view.

![Projection of a pentagonal pyramid, step 197.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-075-panel-2.webp)

4. Rotate the Stage 2 top view by $90^\circ$ so resting base edge $ae$ is parallel to $xy$ and placed nearer to the $xy$ line.

![Orthographic projection of a pentagonal pyramid, stages 1 and 2 with rotated top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-076-panel-1.webp)

5. Project up to intersect horizontal locus lines from the Stage 2 front view and complete the final front view.

![Complete three-stage orthographic projection of a pentagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-076-panel-2.webp)

**Answer:** Projections of the pentagonal pyramid with face $oae \perp$ HP and edge $ae$ parallel and nearer to VP are shown in Figure 197.4.

#### Problem 61: Square pyramid with lateral edge perpendicular to HP

**Given:** Square pyramid, base edge 40 mm, height 60 mm, resting on a base corner on HP, lateral edge through resting corner $\perp$ HP, adjacent faces equally inclined to VP, base visible in front view.
**Find:** Three-stage orthographic projections.

1. Draw top view square $abcd$ of side 40 mm with diagonals parallel and perpendicular to $xy$ (corner $c$ on right), and project the front view of height 60 mm.

![Step 61.1: Initial projection of square pyramid with base corner on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-077-panel-2.webp)

2. Rotate the front view about corner $c'$ on $xy$ until the right-hand slant edge $o'-c'$ stands perpendicular ($90^\circ$) to $xy$.

![Projection of a square pyramid, step 61.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-078-panel-1.webp)

3. Project down and across to draw the Stage 2 top view, where points $o$ and $c$ coincide at a single point.

![Projection of a square pyramid, step 61.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-078-panel-2.webp)

4. Rotate the Stage 2 top view by $90^\circ$ so the symmetry line $ac$ is perpendicular to $xy$ and the base lies nearer the observer.

![Orthographic projections of a square pyramid (Step 61.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-079-panel-1.webp)

5. Project up and across to complete the Stage 3 front view with the entire base $a'b'c'd'$ visible.

![Orthographic projections of a square pyramid (Step 61.5 - Final Stage)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-079-panel-2.webp)

**Answer:** Projections of the square pyramid with lateral edge $oc \perp$ HP and base visible are shown in Figure 61.5.

#### Problem 62: Square pyramid resting on apex with vertical slant edge

**Given:** Square pyramid, base edge 40 mm, height 60 mm, resting on apex on HP, one slant edge vertical, triangular face containing that edge $\perp$ VP, base visible in front view.
**Find:** Three-stage orthographic projections.

1. Draw top view square $abcd$ of side 40 mm with diagonal $ac$ parallel to $xy$, and project an inverted front view with apex $o'$ on $xy$ and base $a'c'$ 60 mm above $xy$.

![Step 62.1: Initial position of square pyramid resting on its apex on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-080-panel-2.webp)

2. Rotate the inverted front view about $o'$ on $xy$ until the right slant edge $o'-c'$ is vertical ($90^\circ$ to $xy$).

![Step 62.2: Projection of a square pyramid with axis/slant edge inclined to HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-081-panel-1.webp)

3. Project down from the tilted front view and across from Stage 1 to complete the Stage 2 top view.

![Step 62.3: Final top view projection of the square pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-081-panel-2.webp)

4. Rotate the Stage 2 top view by $90^\circ$ so the base faces the observer (downward) and symmetry line $ac$ is perpendicular to $xy$.

![Orthographic projections of an inverted square pyramid tilted on its slant edge](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-082-panel-1.webp)

5. Project up and across to draw the final front view.

![Completed three-stage orthographic projection of an inverted square pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-082-panel-2.webp)

> **Watch out.** A triangular face cannot contain a single diagonal slant edge $oc$; the solution places the vertical slant edge $oc$ in a plane perpendicular to VP.

**Answer:** Projections of the inverted square pyramid resting on apex $o'$ with slant edge $o'c'$ vertical are shown in Figure 62.5.

#### Problem 82: Cube with body diagonal perpendicular to VP

**Given:** Cube of edge 40 mm, resting on a base corner on HP, solid body diagonal perpendicular to VP.
**Find:** Three-stage orthographic projections.

1. Draw top view square $abcd(1234)$ of side 40 mm with edges at $45^\circ$ to $xy$ so diagonal $1c$ is parallel to $xy$, and project the Stage 1 front view of height 40 mm with body diagonal $1'-c'$ drawn.

![Step 82.1: Initial projection of a 40 mm cube](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-083-panel-2.webp)

2. Tilt the front view about resting corner $3'$ on $xy$ until the body diagonal $1'-c'$ is horizontal (parallel to $xy$).

![Projection of a solid - Step 82.2: Initial views and tilted front view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-084-panel-1.webp)

3. Project down from Stage 2 and across from Stage 1 to complete the Stage 2 top view, where body diagonal $1c$ appears in true length parallel to $xy$.

![Projection of a solid - Step 82.3: Final front and top views](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-084-panel-2.webp)

4. Rotate the Stage 2 top view by $90^\circ$ so the horizontal body diagonal $1c$ becomes perpendicular to $xy$.

![Orthographic projections of a cube (side 40 mm) - Step 82.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-085-panel-1.webp)

5. Project up and across to complete the Stage 3 front view, where the body diagonal $1'(c')$ reduces to a single point at the center.

![Orthographic projections of a cube (side 40 mm) - Complete Step 82.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-085-panel-2.webp)

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

![Step 56.1: Initial projection of pentagonal pyramid resting on base in HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-020-panel-2.webp)

2. Rotate the Stage 1 front view about corner $c'$ on $xy$ until the right-hand slant edge $o'c'$ makes $50^\circ$ with $xy$ because this slant edge is in true length in Stage 1.

![Projection of a pentagonal pyramid - Step 56.2: Initial projections and tilted front view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-021-panel-1.webp)

3. Project vertical lines down from the tilted front view to meet horizontal locus lines from the Stage 1 top view, completing the Stage 2 top view where slant edge $oc$ is foreshortened.

![Projection of a pentagonal pyramid - Step 56.3: Complete projection with second stage top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-021-panel-2.webp)

4. In Stage 3, draw a construction line from $c$ at the true angle $\phi = 30^\circ$ to $xy$, step off the true slant-edge length $L = o'c'$ along it to draw a horizontal locus line, and swing an arc of radius $L_1 = oc$ (from Stage 2) to cut the locus at $o$ for an apparent angle $\beta = 51^\circ$; then copy the Stage 2 top view onto line $oc$.

![Orthographic projection steps of a pentagonal pyramid (base side 30 mm, height 60 mm) showing stage 1, stage 2, and stage 3 top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-022-panel-1.webp)

5. Project upward from the Stage 3 top view to meet horizontal locus lines from the Stage 2 front view, drawing the visible upper slant faces with continuous lines and the hidden edges meeting at bottom corner $c'$ as dashed lines.

![Complete three-stage orthographic projection of a pentagonal pyramid inclined to both reference planes](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-022-panel-2.webp)

**Answer:** Apparent angle $\beta = 51^\circ$.

### More problems

#### Problem 80: Hexagonal Prism with Axis Inclined to HP and VP
**Given:** Hexagonal prism, base side 30 mm, axis 80 mm, resting on a base edge on HP with its axis inclined at $45^\circ$ to HP and $40^\circ$ to VP.
**Find:** Three-stage projections of the prism and the apparent angle $\beta$ of the axis.

1. Draw the Stage 1 top view as a regular hexagon of side 30 mm with right edge $3–4$ perpendicular to $xy$, and project the 80 mm tall front view.

![Step 80.1: Initial projection of hexagonal prism resting on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-032-panel-2.webp)

2. Tilt the front view on base edge $3'(4')$ on $xy$ so the axis makes $45^\circ$ with $xy$ (base at $45^\circ$).

![Stage 80.2: Projection of hexagonal prism with axis inclined at 45 degrees to HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-033-panel-1.webp)

3. Project down from the tilted front view and across from the Stage 1 top view to complete the Stage 2 top view.

![Stage 80.3: Completed projection of hexagonal prism including top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-033-panel-2.webp)

4. From axis endpoint $p$ in Stage 3, draw a line at $40^\circ$ to $xy$ of true axis length 80 mm to set the horizontal locus.
5. Swing an arc of Stage 2 top-view axis length $op$ from $p$ to cut the locus at $\beta = 66^\circ$, and copy the Stage 2 top view along it.

![Projection of hexagonal prism - Step 80.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-034-panel-1.webp)

6. Project vertically to the Stage 2 front-view heights to complete the Stage 3 front view, dashing hidden edges from $3'(4')$.

![Projection of hexagonal prism - Step 80.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-034-panel-2.webp)

**Answer:** Apparent angle $\beta = 66^\circ$.

#### Problem 85: Cylinder Resting on Base Point with Axis Inclined to Both Planes
**Given:** Cylinder, base diameter 40 mm, axis 60 mm, resting on a base point on HP with its axis inclined at $30^\circ$ to HP and $30^\circ$ to VP.
**Find:** Three-stage projections of the cylinder and the apparent angle $\beta$.

1. Draw the Stage 1 top view as a 40 mm circle divided into 8 parts ($1–8$, $a–h$), and project the 60 mm tall rectangular front view.

![Step 85.1: Initial projection of cylinder resting on HP with axis perpendicular to HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-047-panel-2.webp)

2. Tilt the front view about base point $5'$ on $xy$ so the axis is inclined at $30^\circ$ to $xy$ (base at $60^\circ$).

![Step 85.2: Projection of cylinder with axis inclined at 30 degrees to HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-048-panel-1.webp)

3. Project down from the tilted front view and across from the Stage 1 circle to draw the elliptical Stage 2 top view.

![Step 85.3: Completed projections of cylinder inclined at 30 degrees to HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-048-panel-2.webp)

4. Construct the locus triangle in Stage 3 using true length 60 mm at $30^\circ$ to $xy$ and Stage 2 axis length $op$ to find $\beta = 36^\circ$, then reproduce the Stage 2 top view.

![Orthographic projection of a cylinder - Step 85.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-049-panel-1.webp)

5. Project up to the Stage 2 front-view heights to plot the Stage 3 front view ellipses, dashing the hidden lower half of base $1'–5'$, and add tangent outer generators.

![Orthographic projection of a cylinder - Step 85.5 (Final projection)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-049-panel-2.webp)

**Answer:** Apparent angle $\beta = 36^\circ$.

#### Problem 72: Cone Lying on a Generator on HP with Axis Inclined to VP
**Given:** Cone, base diameter 40 mm, height 60 mm, lying on a generator on HP with the axis inclined at $40^\circ$ to VP and apex nearer to the observer.
**Find:** Three-stage projections of the cone.

1. Draw the Stage 1 top view as a 40 mm circle divided into 8 parts ($1–8$), and project the triangular front view of height 60 mm.

![Step 72.1: Projections of cone resting with base on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-062-panel-2.webp)

2. Rotate the front view until right-hand generator $o'5'$ lies flat on $xy$ so the cone rests on a generator on HP.

![Projection of a cone resting on a generator - Step 72.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-063-panel-1.webp)

3. Project down from the tilted front view and across from Stage 1 to draw the Stage 2 top view with axis $op$.

![Projection of a cone resting on a generator - Step 72.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-063-panel-2.webp)

4. Draw a line from base center $p$ at $40^\circ$ to $xy$ pointing away from $xy$ so apex $o$ lies nearer to the observer (further below $xy$).
5. Mark true axis length 60 mm along the $40^\circ$ line to set the horizontal locus, swing an arc of Stage 2 length $po$ to find the apparent axis, and copy the Stage 2 top view.

![Projections of a cone resting on a generator on HP with axis inclined to VP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-064-panel-1.webp)

6. Project up to the Stage 2 heights to complete the Stage 3 front view with a fully visible base ellipse.

![Projections of a cone resting on a generator on HP with apparent angle inclination to VP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-064-panel-2.webp)

**Answer:** Cone projected with generator $o'5'$ on HP, axis at true angle $40^\circ$ to VP, and apex $o$ nearer to the observer.

#### Problem 57: Pentagonal Pyramid with Slant Edge in a Profile Plane
**Given:** Pentagonal pyramid, base edge 30 mm, height 60 mm, resting on a base corner on HP with the slant edge containing that corner inclined at $50^\circ$ to HP and $40^\circ$ to VP.
**Find:** Three-stage projections when the slant edge inclinations are complementary ($50^\circ + 40^\circ = 90^\circ$).

1. Draw the Stage 1 top view as a regular pentagon of side 30 mm with left edge $ae$ vertical and corner $c$ on the right, and project the 60 mm tall front view.

![Step 57.1: Initial front and top views of pentagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-023-panel-2.webp)

2. Rotate the front view about corner $c'$ on $xy$ so slant edge $o'c'$ is inclined at $50^\circ$ to $xy$.

![Orthographic projections of a pentagonal pyramid - Step 57.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-024-panel-1.webp)

3. Project down and across to complete the Stage 2 top view.

![Orthographic projections of a pentagonal pyramid - Step 57.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-024-panel-2.webp)

4. In Stage 3, draw true length $o'c'$ from $c$ at $40^\circ$ to $xy$ to set the locus; because $50^\circ + 40^\circ = 90^\circ$, the arc of radius $oc$ meets the locus at $\beta = 90^\circ$ (perpendicular to $xy$).

![Orthographic projection of a pentagonal pyramid - Step 57.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-025-panel-1.webp)

5. Rotate the Stage 2 top view so $oc$ is vertical, and project upward to the Stage 2 heights to complete the Stage 3 front view.

![Orthographic projection of a pentagonal pyramid - Step 57.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-025-panel-2.webp)

**Answer:** Apparent angle $\beta = 90^\circ$ (slant edge $oc$ lies in a Profile Plane).

#### Problem 84: Pentagonal Prism with Axis in a Profile Plane
**Given:** Pentagonal prism, base side 30 mm, axis 80 mm, resting on a base corner on HP with its axis (slant/longer edge) inclined at $45^\circ$ to HP and $45^\circ$ to VP.
**Find:** Three-stage projections and the apparent angle $\beta$.

1. Draw the Stage 1 top view as a 30 mm regular pentagon with left edge $a(1)–e(5)$ vertical and corner $c(3)$ on the right, and project the 80 mm tall front view.

![Step 84.1: Initial projections of pentagonal prism](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-035-panel-2.webp)

2. Tilt the front view on base corner $3'$ on $xy$ so the longer edge/axis makes $45^\circ$ with $xy$.

![Step 84.2: Projection of a pentagonal prism with its axis/base inclined to the HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-036-panel-1.webp)

3. Project down and across to complete the Stage 2 top view.

![Step 84.3: Final top view projection of the tilted pentagonal prism](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-036-panel-2.webp)

4. Construct the locus at $45^\circ$ to $xy$ in Stage 3 to verify $\beta = 90^\circ$ ($45^\circ + 45^\circ = 90^\circ$), and rotate the Stage 2 top view.

![Orthographic projections of a pentagonal prism inclined to HP and VP (Problem 84.4)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-037-panel-1.webp)

5. Project up from the Stage 3 top view to the Stage 2 heights to complete the Stage 3 front view.

![Complete orthographic projections of a pentagonal prism including final front view (Problem 84.5)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-037-panel-2.webp)

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

![Step 81.1: Initial projection of square prism with base on VP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-092-panel-2.webp)

2. Incline the axis at 30° to VP in the top view, where angles with VP appear in their true size. Reproduce the Stage 1 top view rectangle below XY with corner $2(3)$ on the XY line and the axis inclined at 30° to XY (so the base makes 60° with XY).

![Orthographic projection of a square prism - Stage 1 and Stage 2 top view rotation](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-093-panel-1.webp)

3. Project upward from all corners of the Stage 2 top view to intersect horizontal projectors from the Stage 1 front view. Connect the vertices to complete the Stage 2 front view, drawing the hidden resting edge $2'3'$ as a dashed line because it lies at the back (closest to VP).

![Completed orthographic projection of a square prism inclined to VP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-093-panel-2.webp)

4. Since the resting base edge $2'3'$ remains in true length on VP, rotate the entire Stage 2 front view directly so that edge $2'3'$ is inclined at 40° to the XY line.

![Projection of a square prism, Step 81.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-094-panel-1.webp)

5. Project vertically downward from every corner of the Stage 3 front view to intersect horizontal projectors from the Stage 2 top view, and join the points with visible and hidden lines to complete the final top view.

![Projection of a square prism, Step 81.5 (Completed projection)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-094-panel-2.webp)

**Answer:** Completed three-stage projections of the 40 mm by 80 mm square prism with its axis at 30° to VP and resting base edge at 40° to HP.

### More problems

#### Problem 74: Cone resting on base point on VP
**Given:** Cone of diameter 40 mm and height 60 mm touching VP on a base point, axis at 30° to VP, front view of axis at 45° to XY.
**Find:** The three-stage orthographic projections of the cone.

1. Draw a 40 mm diameter circle above XY divided into 8 sectors, and project a 60 mm high triangle below XY.

![Step 74.1: Initial projection of a cone resting with its base on the VP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-098-panel-2.webp)

2. Rotate the Stage 1 top view triangle keeping base point 5 on XY so the axis is inclined at 30° to XY.

![Projection of an inclined cone, step 74.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-099-panel-1.webp)

3. Project upward from the Stage 2 top view to meet horizontal projectors from Stage 1, forming the Stage 2 front view.

![Projection of an inclined cone, step 74.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-099-panel-2.webp)

4. Because the apparent front-view angle is given directly, rotate the Stage 2 front view so axis $o'o_1'$ is at 45° to XY.

![Projection of a cone, step 74.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-100-panel-1.webp)

5. Project downward from Stage 3 and horizontally from Stage 2 to plot the elliptical base and complete the final top view.

![Projection of a cone, completed step 74.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-100-panel-2.webp)

**Answer:** Completed projections of the cone ($D = 40$ mm, $H = 60$ mm) with axis at 30° to VP and front-view axis at 45° to XY.

#### Problem 63: Hexagonal pyramid with triangular face on VP
**Given:** Hexagonal pyramid of base 30 mm and height 60 mm, triangular face on VP, resting base edge at 45° to HP, corner on HP.
**Find:** The three-stage orthographic projections of the pyramid.

1. Draw a regular hexagon of side 30 mm above XY with edge $c'd'$ vertical, and project the 60 mm triangle below XY.

![Step 63.1: Simple position projections of a hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-095-panel-2.webp)

2. Rotate the top view triangle so slant face $c(d)o$ lies flat along the XY line, putting the triangular face on VP.

![Orthographic projection step 63.2 of a hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-096-panel-1.webp)

3. Project upward from the tilted top view to intersect horizontal projectors from Stage 1, completing the Stage 2 front view.

![Orthographic projection step 63.3 of a hexagonal pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-096-panel-2.webp)

4. Rotate the Stage 2 front view so edge $c'd'$ makes 45° with XY and corner $d'$ touches the XY line (on HP).

![Projections of a hexagonal pyramid - Problem 63.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-097-panel-1.webp)

5. Project downward from Stage 3 and horizontally from Stage 2 to connect all edges and complete the final top view.

![Projections of a hexagonal pyramid - Problem 63.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-097-panel-2.webp)

> **Watch out.** Because the pyramid simultaneously rests on a base corner on HP, make sure corner $d'$ is placed directly on the XY line when inclining edge $c'd'$ at 45° in Stage 3.

**Answer:** Completed projections of the hexagonal pyramid ($B = 30$ mm, $H = 60$ mm) with face $c'd'o'$ on VP, edge $c'd'$ at 45° to HP, and corner $d'$ on HP.

#### Problem 76: Cone resting on generator on VP
**Given:** Cone of base diameter 40 mm and height 60 mm resting on a generator on VP, generator at 40° to HP, apex touching HP.
**Find:** The three-stage orthographic projections of the cone.

1. Draw a 40 mm diameter circle divided into 8 parts above XY, and project the 60 mm triangle with base on XY.

![Step 76.1: Initial orthographic projection of the cone with base on VP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-101-panel-2.webp)

2. Rotate the top view triangle below XY so the rightmost generator $5o$ lies completely flat along the XY line.

![Step 76.2: Initial views and tilted top view of a cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-102-panel-1.webp)

3. Project upward from the Stage 2 top view to meet horizontal projectors from Stage 1, forming the Stage 2 front view.

![Step 76.3: Final front view projection of the tilted cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-102-panel-2.webp)

4. Since generator $o'5'$ is on VP (true length), rotate the Stage 2 front view with $o'5'$ at 40° to XY and apex $o'$ on XY.

![Step 76.4: Projections of a cone with inclined axis](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-103-panel-1.webp)

5. Project downward from the Stage 3 front view and horizontally from Stage 2 to complete the final top view.

![Step 76.5: Final top view projection of the inclined cone](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-103-panel-2.webp)

**Answer:** Completed projections of the cone ($D = 40$ mm, $H = 60$ mm) resting on generator $o5$ on VP at 40° to HP with apex $o'$ on HP.

#### Problem 198: Cone on base point on VP (locus)
**Given:** Cone of base 50 mm diameter and axis 70 mm resting on VP, axis at 45° to VP and 30° to HP.
**Find:** The three-stage orthographic projections of the cone with apex away from VP and nearer to HP.

1. Draw a 50 mm diameter circle with 8 divisions above XY, and project the 70 mm high triangle below XY.

![Step 198.1: Initial projections of a cone resting with its base on the VP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-104-panel-2.webp)

2. Rotate the top view triangle keeping base point 5 on XY so the axis is inclined at 45° to XY.

![Projection of a cone: Step 198.2](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-105-panel-1.webp)

3. Project upward from the Stage 2 top view to meet horizontal projectors from Stage 1, obtaining foreshortened axis $o_1'o'$.

![Projection of a cone: Step 198.3](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-105-panel-2.webp)

4. Draw a line at 30° to XY with true length 70 mm for the locus, swing arc $o_1'o'$ to find apparent angle, and rotate the Stage 2 front view.

![Orthographic projection of a cone - Step 198.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-106-panel-1.webp)

5. Project downward from Stage 3 and horizontally from Stage 2 to plot the base and complete the final top view.

![Orthographic projection of a cone - Step 198.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-106-panel-2.webp)

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

![Projection of triangular pyramid in simple position (Step 64.1)](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-086-panel-2.webp)

3. For Stage 2, redraw the front view so the suspension line $a'g'$ is perpendicular to $xy$ (resting apex $o'$ on $xy$), because a freely hanging body settles with its center of gravity directly below the point of suspension.

![Orthographic projection step 64.2 of a triangular pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-087-panel-1.webp)

4. Project downward from the tilted Stage 2 front view and across from the Stage 1 top view to complete the Stage 2 top view, marking the foreshortened axis and hidden edges.

![Orthographic projection step 64.3 of a triangular pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-087-panel-2.webp)

5. Since the problem gives the angle of the top view of the axis directly, draw a line inclined at 50° to $xy$ and reproduce the Stage 2 top view along it to get the Stage 3 top view.

![Orthographic projection steps of a triangular pyramid - Step 64.4](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-091-panel-1.webp)

6. Project vertically up from the Stage 3 top view and horizontally across from the Stage 2 front view to complete the final Stage 3 front view, checking visibility from the bottom of the top view.

![Completed orthographic projection of a triangular pyramid - Step 64.5](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-091-panel-2.webp)

**Answer:** The pyramid hangs with line $a'g'$ vertical ($g'$ at 15 mm from the base along the 60 mm axis) and its top-view axis rotated directly at 50° to $xy$.

### More problems

#### Problem 65: Freely suspended square pyramid (locus method)
**Given:** Square pyramid, base side 40 mm, height 60 mm, freely suspended from a base corner, axis inclined at 30° to VP. **Find:** Front and top views.

1. Draw the Stage 1 top view as a 40 mm square $abcd$ with diagonal $ac$ parallel to $xy$ so the suspension corner $a$ (or $c$) lies at an extreme position.
2. Project the Stage 1 front view of height 60 mm, mark $g'$ on the axis $p'o'$ at $60/4 = 15$ mm above the base, and join $g'$ to suspension corner $a'$.

![Step 65.1: Initial front and top views of the square pyramid resting on HP](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-088-panel-2.webp)

3. Redraw the front view in Stage 2 with the line $a'g'$ perpendicular to $xy$ and apex $o'$ touching $xy$ to satisfy the free-suspension equilibrium condition.

![Step 65.2: Projection of a square pyramid tilted in front view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-089-panel-1.webp)

4. Project down from the Stage 2 front view and across from Stage 1 to complete the Stage 2 top view, obtaining the foreshortened axis length $po$.

![Step 65.3: Projection of a square pyramid with second stage top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-089-panel-2.webp)

5. Because the 30° angle to VP is a true inclination of an already-tilted axis, draw a line from $p$ at 30° to $xy$, step off the true axis length 60 mm to establish a horizontal locus, and swing the foreshortened length $po$ to find the apparent angle $\beta = 35^\circ$.
6. Rotate the Stage 2 top view so its axis $po$ lies along the $\beta = 35^\circ$ line to complete the Stage 3 top view.

![Step 65.4: Orthographic projection of a square pyramid up to inclined top view](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-090-panel-1.webp)

7. Project vertically up from the Stage 3 top view to meet horizontal projectors from the Stage 2 front view and draw the final Stage 3 front view.

![Step 65.5: Complete three-stage orthographic projection of the square pyramid](https://pub-d3b7759adb7e43a7bf3f61bf5308e473.r2.dev/notes/cse/s1/graphics/module-2/assets/page-090-panel-2.webp)

> **Watch out.** Do not rotate the Stage 2 top view directly at 30°; since the axis is inclined to HP during suspension, you must use the locus construction to find the apparent angle 35° with $xy$.

**Answer:** Center of gravity $g'$ is 15 mm from the base; the three-stage projections are completed using an apparent top-view axis inclination of $\beta = 35^\circ$ to $xy$.
