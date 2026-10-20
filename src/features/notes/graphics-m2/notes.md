<!-- page 1 | About this notebook -->

## Engineering Graphics: Complete Guide to Projection of Solids

Master orthographic projections of right regular prisms, pyramids, cylinders, and cones tilted relative to the reference planes. Learn step-by-step projection procedures across three stages, handling simple positions, auxiliary inclinations, apparent angles, locus constructions, and special suspension states.

**Before you start:** Orthographic projection fundamentals (first-angle projection); Projections of straight lines and planes; Basic geometric constructions of polygons and circles.

**In this notebook**

1. Principles of Multi-Stage Solid Projections
2. Solids Resting on Base Edge with Axis Inclined to HP
3. Corner Resting and Apparent Top View Inclination
4. Locus Method and Complementary Angles for Solids
5. Solids Lying on Lateral Face, Lateral Edge, or Generator on HP
6. Special Orientations, Inverted Solids, and Freely Suspended Bodies
7. Solids Resting on or Inclined Initially to the Vertical Plane

<!-- page 2 | Principles of Multi-Stage Solid Projections -->

## Principles of Multi-Stage Solid Projections

> **Syllabus note.** Per the syllabus, questions are restricted to Triangular, Rectangular, Square, Pentagonal, and Hexagonal Prisms, Pyramids, Cone, and Cylinder only.

### What you need
- First-angle projection: the object lies between the observer and the plane; Top View (TV) appears below reference line $XY$, and Front View (FV) appears above $XY$.
- Axis orientation rule: when a solid's axis is inclined to HP at angle $\theta$, assume the axis perpendicular to HP in Stage 1; when inclined to VP at $\phi$, assume it perpendicular to VP.
- Resting element rule: the resting corner or base edge must be kept on the right-hand side in the Stage 1 base view so it serves as the tilt pivot.
- Outer boundary rule: the outermost boundary lines of any projection are always continuous visible lines.
- Visibility criteria: an edge or base is visible to an observer looking along projectors if it is closer to the viewer than the remaining solid body; otherwise, draw it dashed.

### The method
1. Identify the primary inclination (to HP or VP) and place the base in the simple position on that reference plane.
2. Draw the true shape of the base first (TV if resting on HP, FV if resting on VP), positioning the resting feature (edge or corner) on the extreme right.
3. Project perpendiculars to the $XY$ line to construct the other corresponding view (Stage 1 FV or TV) showing the true axial height.
4. Reproduce the Stage 1 view in Stage 2, tilted at the specified inclination angle $\theta$ (to HP) or $\phi$ (to VP), keeping the resting point on $XY$.
5. Project horizontal projectors from Stage 1 and vertical projectors from Stage 2 to establish new intersection vertices.
6. Form the complete outline using continuous dark lines; determine visibility of internal edges and bases by checking proximity to the observer.
7. Repeat the transfer process in Stage 3 if a secondary inclination (apparent or true angle with the second plane) is required.

### Problems

#### Problem 1: Simple Position and Stage 2 Tilt of a Square Prism
**Given:** Square prism, base side $35\text{ mm}$, axis height $65\text{ mm}$, resting on HP on one base edge, axis inclined at $45^\circ$ to HP.  
**Find:** Projections of the prism in Stage 1 and Stage 2.

**Solution**
1. Draw the reference line $XY$.
2. Draw the Stage 1 top view below $XY$ as a true square of $35\text{ mm} \times 35\text{ mm}$ ($a\text{-}b\text{-}c\text{-}d$) with edge $c\text{-}d$ perpendicular to $XY$ on the right.
3. Label the top face corners $1, 2, 3, 4$ coincident with bottom corners $a, b, c, d$ in the top view.
4. Project vertical lines up to $XY$ to mark bottom base points $a'(b')$ and $d'(c')$.
5. Draw vertical axis and lateral edges of length $65\text{ mm}$ above $XY$ to obtain the Stage 1 front view rectangle $a'b'1'2'$ and $d'c'4'3'$.
6. Redraw the front view rectangle tilted in Stage 2 such that the axis makes $45^\circ$ with $XY$ (base makes $45^\circ$ with $XY$), resting on point $c'_1(d'_1)$ on $XY$.
7. Project vertical projectors downwards from all tilted vertices of Stage 2 front view.
8. Project horizontal lines from Stage 1 top view vertices to intersect corresponding vertical projectors.
9. Connect the outermost points $(a_1, b_1, 2_1, 3_1, 4_1, d_1)$ with continuous lines to form the outline.
10. Draw visible edges $(1_1\text{-}2_1, 1_1\text{-}4_1, 1_1\text{-}a_1)$ as solid lines since the top face is facing the observer looking from above.
11. Draw bottom edges $(c_1\text{-}d_1, b_1\text{-}c_1, c_1\text{-}3_1)$ as dashed lines because the resting base is underneath.

**Answer:** Front view shows tilted rectangle of height $65\text{ mm}$ at $45^\circ$ to $XY$; top view shows apparent prism of overall length $70.7\text{ mm}$.

#### Problem 2: Cylinder with Axis Inclined to HP
**Given:** Cylinder, base diameter $40\text{ mm}$, axis length $60\text{ mm}$, resting on HP on a point of its base circumference, axis inclined at $30^\circ$ to HP.  
**Find:** Projections showing the Stage 1 simple position and Stage 2 inclined position.

**Solution**
1. Draw horizontal line $XY$.
2. Draw the Stage 1 top view as a circle of diameter $40\text{ mm}$ below $XY$ and divide the circumference into 8 equal parts ($1$ to $8$).
3. Project points $1$ through $8$ vertically up to $XY$ to locate base points $1'$ to $8'$ and axis center $o'$.
4. Extend vertical generators upward by $60\text{ mm}$ to form the Stage 1 front view rectangle of size $40\text{ mm} \times 60\text{ mm}$, labeling the top points $1'_1$ to $8'_1$.
5. Recreate the Stage 1 rectangle in Stage 2 tilted such that the axis makes $30^\circ$ to $XY$, pivoting on base point $5'$ lying on $XY$.
6. Draw horizontal projection lines from the 8 circular points of the Stage 1 top view.
7. Draw vertical projection lines downwards from corresponding points of both elliptical bases in the Stage 2 front view.
8. Connect the intersecting points of the top base to form an ellipse using a smooth continuous curve (fully visible to the top observer).
9. Connect the intersecting points of the bottom base; draw the upper half curve continuous and the lower half curve hidden (dashed).
10. Draw outer tangential generators connecting the two base ellipses to complete the top view outline.

> **Watch out.** The two extreme generators must be drawn tangential to the ellipses, not simply connected to arbitrary division points.

**Answer:** Stage 2 top view consists of two parallel ellipses of minor axis $20\text{ mm}$ and major axis $40\text{ mm}$ joined by continuous contour generators.

#### Problem 3: Hexagonal Pyramid with Axis Inclined to HP
**Given:** Regular hexagonal pyramid, base side $25\text{ mm}$, axis height $60\text{ mm}$, resting on HP on one base corner, axis inclined at $40^\circ$ to HP.  
**Find:** Projections of the pyramid through Stage 1 and Stage 2.

**Solution**
1. Draw reference line $XY$.
2. Draw Stage 1 top view as a regular hexagon of side $25\text{ mm}$ with a corner-to-corner diagonal parallel to $XY$, placing corner $d$ on the extreme right.
3. Connect all base corners $a, b, c, d, e, f$ to center $o$ representing slant edges in top view.
4. Project all points to $XY$ to mark base points $a', b', c', d', e', f'$ on $XY$.
5. Mark the apex $o'$ at a height of $60\text{ mm}$ along the central axis projector above $XY$ and join $o'$ to $a'$ and $d'$ to complete the triangular front view outline.
6. Redraw the front view triangle in Stage 2 with axis inclined at $40^\circ$ to $XY$ (base inclined at $50^\circ$), keeping resting corner $d'$ on $XY$.
7. Project horizontal lines from Stage 1 top view points $a$ through $f$ and $o$.
8. Project vertical lines downwards from Stage 2 front view points $a'_1$ through $f'_1$ and $o'_1$.
9. Join outer envelope points to form the boundary of the Stage 2 top view.
10. Draw slant edges running to apex $o_1$ as continuous lines if they lie on the upper contour, and as dashed lines if obscured beneath the pyramid body.

**Answer:** Front view shows triangle inclined at $40^\circ$ resting on corner $d'$; top view shows foreshortened hexagonal base with apex $o_1$ shifted outward.

### Quick recall
- Base view comes first: draw the view that shows the true shape of the base before projecting the axial view.
- Pivot placement: always position the resting element (edge or corner) on the right edge of the Stage 1 primary view.
- Solid outlines: the peripheral boundary of any projected view is always fully visible—never dashed.
- Locus principle: when rotating a view, axial length in the plane of rotation is preserved; dimensions parallel to the tilt axis remain constant.

<!-- page 3 | Simple Position Projections and Profile Views of Simple Solids -->

## Simple Position Projections and Profile Views of Simple Solids

### What you need
- In simple position, a solid has its axis perpendicular to one reference plane ($HP$ or $VP$) and parallel to the other; the view projected onto the plane to which the axis is perpendicular gives the true shape and size of the base.
- First-angle projection places the Left-Hand Side View (LHSV) to the right of the Front View ($FV$) and the Right-Hand Side View (RHSV) to the left of the $FV$.
- The Profile Plane ($PP$) is perpendicular to both $HP$ and $VP$, represented on drawing sheets by the $X_1Y_1$ line drawn perpendicular to the $XY$ line.
- Height dimensions in the side view are transferred horizontally from the $FV$; width/depth dimensions are transferred from the $TV$ via a $45^\circ$ miter line passing through the origin $O = XY \cap X_1Y_1$ (or using circular arcs centered at $O$).
- Visibility rule: The external boundary of any view is always visible (drawn with continuous thick lines); internal features facing away from the viewing direction are drawn with dashed hidden lines.

### The method
1. **Draw the true-shape view first**: If the axis is $\perp HP$, draw the Top View ($TV$) first below $XY$; if the axis is $\perp VP$, draw the Front View ($FV$) first above $XY$. Orient the base edges according to the given conditions (e.g., parallel, perpendicular, or equally inclined to reference planes).
2. **Project the second principal view**: Project lines perpendicular to $XY$ from all base corners and apex/centers into the adjacent view. Measure the axial height along the centerline to complete the solid outline.
3. **Set up the Profile Plane**: Draw an auxiliary vertical reference line $X_1Y_1 \perp XY$ to the right of the $FV$ (for LHSV) or to the left (for RHSV) with adequate clearance.
4. **Transfer depth coordinates from $TV$**: Draw a $45^\circ$ miter line downward/outward from the intersection $O (XY, X_1Y_1)$. Project horizontal lines from each vertex in the $TV$ to intersect the $45^\circ$ line, then project these points vertically up to the $XY$ line and beyond onto the $PP$.
5. **Transfer height coordinates from $FV$**: Project horizontal lines from each vertex, base corner, and apex in the $FV$ across $X_1Y_1$ into the profile plane.
6. **Locate and connect side view vertices**: Find the intersection of corresponding height and depth projectors for each point. Label them with double primes (e.g., $a'', b''$).
7. **Determine visibility**: Outline the outer boundary with continuous bold lines. Inspect the solid from the profile direction to draw visible interior edges as continuous lines and obscured edges as dashed lines. Draw centerlines for axes.

### Worked examples

#### Example 1: Rectangular Prism with Axis Perpendicular to HP
*Statement*: A rectangular prism of base $50\text{ mm} \times 30\text{ mm}$ and height $70\text{ mm}$ rests on its base on the $HP$ with a longer base edge parallel to the $VP$. Draw its front view, top view, and left-hand side view.

1. *Draw Top View ($TV$)*: Draw $XY$. Below $XY$, construct a rectangle $abcd$ of length $50\text{ mm}$ (horizontal, parallel to $XY$) and width $30\text{ mm}$ (vertical). Label top corners as $a(1), b(2), c(3), d(4)$. Base is on $HP$, so $TV$ shows true base shape.
2. *Draw Front View ($FV$)*: Project vertical lines upward from $a,b,c,d$ to $XY$ to mark base points $a'(d')$ and $b'(c')$. Measure height $70\text{ mm}$ vertically upward to draw the top face $1'(4')$ and $2'(3')$. Outline the resulting $50\text{ mm} \times 70\text{ mm}$ rectangle.
3. *Set up $X_1Y_1$*: Draw vertical line $X_1Y_1 \perp XY$ to the right of the front view. Let intersection be $O$.
4. *Project to Profile Plane*: From $O$, draw a line at $45^\circ$ into the bottom-right quadrant. Project horizontal lines from $a, b, c, d$ in $TV$ to meet the $45^\circ$ line; turn them vertically upward across $XY$ into the profile region.
5. *Complete Left-Hand Side View ($LHSV$)*: Project horizontal lines from base and top of $FV$ across $X_1Y_1$. Intersect the vertical projectors to obtain a rectangle of width $30\text{ mm}$ and height $70\text{ mm}$. Label corners: base as $d''(c'')$ and $a''(b'')$; top as $4''(3'')$ and $1''(2'')$. All boundary edges are visible.

*Answer*: The $TV$ is a rectangle $50\text{ mm} \times 30\text{ mm}$, $FV$ is a rectangle $50\text{ mm} \times 70\text{ mm}$, and $LHSV$ is a rectangle $30\text{ mm} \times 70\text{ mm}$ placed to the right of $FV$.

#### Example 2: Hexagonal Pyramid with Axis Perpendicular to HP
*Statement*: A regular hexagonal pyramid of base side $25\text{ mm}$ and axis length $60\text{ mm}$ rests on its base on $HP$ with one base edge perpendicular to $VP$. Draw its front view, top view, and left-hand side view.

1. *Draw Top View ($TV$)*: Below $XY$, construct a regular hexagon $abcdef$ of side $25\text{ mm}$ such that edge $ab$ is perpendicular to $XY$. Join opposite corners through center $o$ to represent slant edges. Base is on $HP$, so base appears in true shape in $TV$.
2. *Draw Front View ($FV$)*: Project base corners upward to $XY$ to mark base line $a', b', c', d', e', f'$. From $o$, project the axis vertically upward to height $60\text{ mm}$ to mark apex $o'$. Join $o'$ to each base point on $XY$. The visible slant edges are $o'a', o'b', o'c'$, while internal hidden edges are checked from the front direction.
3. *Set up Profile Plane*: Draw $X_1Y_1 \perp XY$ to the right of the front view. Draw a $45^\circ$ miter line from $O = XY \cap X_1Y_1$ into the lower-right quadrant.
4. *Project to $PP$*: Project all base corners $a$ through $f$ and center $o$ horizontally to the $45^\circ$ line, then vertically upward past $XY$.
5. *Draw Side View ($LHSV$)*: Project apex $o'$ and base line horizontally from $FV$. The apex $o''$ lies on the projected axis line at height $60\text{ mm}$. Connect $o''$ to the projected base points $a'', b'', c'', d'', e'', f''$ on the ground line. Outline the triangular envelope $o''d''a''$ with solid lines. Viewers looking from the left see edges $o-e$ and $o-f$ directly; draw $o''e''$ and $o''f''$ as visible continuous lines.

*Answer*: $TV$ is a hexagon of side $25\text{ mm}$ with corner-to-center lines; $FV$ is an isosceles triangle of base equal to the projected hexagon width and height $60\text{ mm}$; $LHSV$ is an isosceles triangle of width equal to hexagon depth ($2 \times 25\cos(30^\circ) \approx 43.3\text{ mm}$) and height $60\text{ mm}$.

#### Example 3: Cylinder with Axis Perpendicular to HP
*Statement*: A cylinder of base diameter $40\text{ mm}$ and axial height $60\text{ mm}$ stands vertically on $HP$. Draw its front view, top view, and profile view.

1. *Draw Top View ($TV$)*: Draw a circle of diameter $40\text{ mm}$ below $XY$. Mark center $o$. Divide the circle into 8 equal parts $(1\text{ to }8)$ for projection purposes. The base is on $HP$, so $TV$ shows true circular shape.
2. *Draw Front View ($FV$)*: Project extreme left (point 7) and right (point 3) points vertically to $XY$. Draw a rectangle of breadth $40\text{ mm}$ and height $60\text{ mm}$. Draw the vertical axis through center $o'$ as a chain line.
3. *Project Profile View*: Draw $X_1Y_1 \perp XY$ to the right of $FV$. Use a $45^\circ$ miter line from $O$ to transfer points from the $TV$ circle vertically upward into the profile plane.
4. *Complete Profile View*: Project top and bottom lines of the cylinder horizontally from $FV$. The extreme depth points (points 1 and 5 from $TV$) define the lateral boundary lines. Draw a rectangle of breadth $40\text{ mm}$ and height $60\text{ mm}$ with a vertical central axis chain line.

*Answer*: $TV$ is a $\phi 40\text{ mm}$ circle; both $FV$ and profile view are identical rectangles of size $40\text{ mm} \times 60\text{ mm}$ with vertical centerlines.

### Quick recall
- When the solid axis is $\perp HP$, $TV$ is the base true shape, $FV$ shows height, and side view shows depth $\times$ height.
- When the solid axis is $\perp VP$, $FV$ is the base true shape, $TV$ shows depth, and side view shows height $\times$ depth.
- Left-hand side view (observer looking from the left of $FV$) is drawn to the right of $FV$ on line $X_1Y_1$.
- The $45^\circ$ miter line converts horizontal distances in the $TV$ from $XY$ into vertical distances in the profile view from $X_1Y_1$.
- Always construct extreme boundary generators/edges as solid continuous lines before deciding visibility of internal edges.

<!-- page 4 | Solids Resting on Base Edge with Axis Inclined to HP -->

## Solids Resting on Base Edge with Axis Inclined to HP

### What you need
- **Base-perpendicular condition:** When a solid rests on a base edge on the HP, that resting edge must be drawn perpendicular to the $xy$ reference line in the initial top view.
- **Base tilt angle:** If the axis makes angle $\theta$ with the HP, the base plane makes angle $\alpha = 90^\circ - \theta$ with the HP.
- **Apex orientation rules:** In the top view, "away from VP" places the apex farther below the $xy$ line; "towards VP" places the apex closer to the $xy$ line.
- **Visibility convention:** Outermost boundary lines in any projection are always visible (continuous); hidden edges are dashed.

### The method
1. **Stage 1 (Simple Position):** Draw the true shape of the base in top view with the resting base edge perpendicular to the $xy$ line. Project the front view standing on the $xy$ line with height $H$.
2. **Stage 2 (Axis Tilt to HP):** Redraw the front view tilted such that the axis makes angle $\theta$ (or the base makes $90^\circ - \theta$) to the $xy$ line, keeping the resting edge on the $xy$ line. Project vertically down and horizontally across to construct the second-stage top view.
3. **Stage 3 (Edge Tilt to VP):** Reproduce the second-stage top view rotated so that the resting base edge lies at the given angle $\phi$ to the $xy$ line, orienting the apex as specified (left/right, towards/away from VP).
4. **Final Front View:** Project vertically up from the Stage 3 top view and horizontally from the Stage 2 front view to locate all vertices; connect the outline, visible edges, and dashed hidden edges.

### Problems

#### Problem 211: Triangular Prism with Axis Inclined to HP and Resting Edge Inclined to VP
**Given:** Base edge $B = 30\text{ mm}$, height $H = 50\text{ mm}$, resting on HP on a base edge, axis inclined $35^\circ$ to HP, resting base edge inclined $45^\circ$ to VP.  
**Find:** Three-stage orthographic projections.

**Solution**
1. Draw reference line $xy$. In the top view below $xy$, draw an equilateral triangle $a(1)-b(2)-c(3)$ of side $30\text{ mm}$ with vertical resting edge $b(2)-c(3)$ on the right.
2. Project vertically up to draw the front view as a rectangle of height $50\text{ mm}$ on the $xy$ line, labeled $1'$ to $2'(3')$ at the base and $a'$ to $b'(c')$ at the top.
3. Tilt the front view onto resting corner $2'(3')$ on $xy$ such that the base makes $90^\circ - 35^\circ = 55^\circ$ to the $xy$ line (axis at $35^\circ$ to $xy$).
4. Drop vertical projectors from the tilted front view and intersect with horizontal projectors from the initial top view to draw the Stage 2 top view.
5. Reproduce the Stage 2 top view with resting edge $2-3$ inclined at $45^\circ$ to the $xy$ line.
6. Project upward from the Stage 3 top view and horizontally across from the Stage 2 front view, joining visible boundary lines and dashed hidden edges to complete the final front view.

> **Figure: Step 211-1: Initial projection of triangular prism resting with its base on HP**
>
> Initial stage (Step 211-1) of projecting a triangular prism with base edge 30 mm and height 50 mm:
> - A horizontal reference line labelled 'x' on the left and 'y' on the right.
> - Text boxes to the left of the drawing specify: 'B = 30', 'H = 50', 'SCALE 1:1', and 'ALL DIMENSIONS ARE IN mm'.
> - Top view (below xy line): An equilateral triangle with edge length 30 mm, oriented such that vertical edge c(3)-b(2) is perpendicular to the xy line on the right, and apex a(1) points to the left. Dimension 30 is shown along the edge a(1)-b(2).
> - Front view (above xy line): A rectangle of height 50 mm resting on the xy line. The bottom corners are labelled 1' on the left and 2'(3') on the right. The top corners are labelled a' on the left and b'(c') on the right. The left vertical edge has a height dimension of 50.
> - Vertical projection lines connect top view vertex a(1) to front view base point 1' (and top a'), and edge c(3)-b(2) to base point 2'(3') (and top b'(c')).

> **Figure: Orthographic projection of a triangular prism - Step 211-2: Front view tilted at 35 degrees**
>
> Step 211-2 of triangular prism projection. Given base edge B = 30 mm, height H = 50 mm. In the first position: Top view shows an equilateral triangle with vertices a(1) on the left, b(2) and c(3) on a vertical line on the right; edge a(1)-b(2) is dimensioned as 30. Front view directly above XY line is a vertical rectangle of height 50 mm and base spanning from projector 1' to projector 2'(3'), top vertices are a' and b'(c'). In the second position: Front view is rotated and rests on point 2'(3') on the XY line, with its bottom face inclined at an angle of 35° to the XY line; vertices labelled 1', 2'(3'), a', and b'(c'). The second top view has not yet been projected.

> **Figure: Orthographic projection of a triangular prism - Step 211-3: Projection of final top view**
>
> Step 211-3 of triangular prism projection. Given base edge B = 30 mm, height H = 50 mm. Stage 1 shows the reference front view (rectangle of height 50 mm) and top view (triangle with side 30 mm). Stage 2 shows the front view inclined at 35° resting on base corner 2'(3') on the XY line. In Stage 3, projectors are dropped down from the tilted front view and drawn horizontally from the initial top view to construct the second top view: visible outline formed by points 1, 2, b, c, 3, 1; vertex a inside connects to b and c with solid lines; hidden edge connecting base vertices 2 and 3 is shown as a dashed line.

> **Figure: Orthographic projections of a triangular prism in three stages (Problem 211-4)**
>
> Three-stage projection of an equilateral triangular prism with base side B = 30 mm and axis height H = 50 mm. Scale 1:1, all dimensions in mm. Given box: B = 30, H = 50. Stage 1 (Simple position): Front view is a rectangle of height 50 mm resting on the XY line, labeled a' and b'(c') at the top, 1' and 2'(3') on the XY line. Top view is an equilateral triangle of side 30 mm, vertex a(1) pointing to the left and vertical side b(2)-c(3) on the right. Stage 2 (Base/axis inclined to HP): Front view is tilted such that the base edge 2'(3') rests on the XY line, inclined at 35° to the horizontal. Vertices are labeled 1', a', b'(c'), 2'(3'). Top view is projected downwards from front view and horizontally from stage 1 top view; hidden edge 2-3 is shown dashed, vertices labeled 1, 2, 3 and a, b, c. Stage 3 (Inclined to VP): Top view is reproduced with the axis/edge inclined at 45° to the projector line, vertices labeled 1, 2, 3 and a, b, c with edge 2-3 dashed.

> **Figure: Complete orthographic projections of a triangular prism in three stages (Problem 211-5)**
>
> Complete three-stage orthographic projection of an equilateral triangular prism with base side B = 30 mm and height H = 50 mm. Scale 1:1, all dimensions in mm. Given box: B = 30, H = 50. Stage 1: Front view is a rectangle with height 50 mm resting on the reference line x-y, labeled a', b'(c') on top and 1', 2'(3') at bottom. Top view is an equilateral triangle with side 30 mm, vertices a(1) pointing left and c(3)-b(2) on the right. Stage 2: Front view is tilted with base edge 2'(3') on the reference line, inclined at 35° to the HP; vertices labeled 1', a', b'(c'), 2'(3'). Top view projected below with hidden edge 2-3 dashed; vertices 1, 2, 3 and a, b, c. Stage 3: Top view reproduced inclined at 45° to the vertical projector line; vertices 1, 2, 3 and a, b, c with hidden edge 2-3 dashed. Final front view projected vertically from stage 3 top view and horizontally from stage 2 front view, showing all visible and hidden edges connecting vertices 1', 2', 3' and a', b', c'.

**Answer:** Completed three-stage projections of the triangular prism with axis inclined at $35^\circ$ to HP and resting base edge inclined at $45^\circ$ to VP.

---

#### Problem 51: Square Pyramid — Apex Away from VP, on Right Side
**Given:** Base edge $B = 40\text{ mm}$, height $H = 60\text{ mm}$, resting on base edge on HP, axis inclined $40^\circ$ to HP, resting base edge inclined $45^\circ$ to VP, apex away from VP on the right side.  
**Find:** Three-stage orthographic projections.

**Solution**
1. Draw the top view as a square $a-b-c-d$ of side $40\text{ mm}$ with resting edge $b-c$ perpendicular to $xy$ on the right and diagonals intersecting at apex $o$.
2. Project front view as an isosceles triangle on $xy$ of base $a'(d')-b'(c') = 40\text{ mm}$ and central axis height $60\text{ mm}$ to apex $o'$.
3. Redraw the front view tilted to the right on resting base corner $b'(c')$ on $xy$, tilting base $a'(d')-b'(c')$ at $90^\circ - 40^\circ = 50^\circ$ to the $xy$ line.
4. Project vertically down from the tilted front view and horizontally from the first top view to complete the Stage 2 top view, where apex $o$ is to the right.
5. Redraw the Stage 2 top view with the resting base edge $b-c$ tilted at $45^\circ$ to $xy$ such that apex $o$ lies away from the $xy$ line (pointing downward) and to the right.
6. Project vertically up from the inclined top view and horizontally from the tilted front view to obtain the final front view vertices, connecting outer boundaries solid and hidden base edges dashed.

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

**Answer:** Final front view and top view of the square pyramid with axis inclined at $40^\circ$ to HP and resting base edge at $45^\circ$ to VP (apex away from VP, right side).

---

#### Problem 52: Square Pyramid — Apex Towards VP, on Right Side
**Given:** Base edge $B = 40\text{ mm}$, height $H = 60\text{ mm}$, axis inclined $40^\circ$ to HP, resting base edge on HP inclined $45^\circ$ to VP, apex towards VP on the right side.  
**Find:** Three-stage orthographic projections.

**Solution**
1. Construct the simple position top view square of side $40\text{ mm}$ and front view triangle of height $60\text{ mm}$ resting on $xy$.
2. Incline the front view to the right resting on base edge $b'(c')$ on $xy$, setting the base inclination to $50^\circ$ (axis at $40^\circ$ to $xy$).
3. Project down and across to obtain the Stage 2 top view with visible slant faces and foreshortened base.
4. Rotate the Stage 2 top view such that the resting base edge makes $45^\circ$ to $xy$, positioning apex $o$ towards the $xy$ line (pointing upward) and to the right.
5. Project Stage 3 top view points upward and Stage 2 front view points horizontally to locate vertices; draw boundary edges solid and obscured edges dashed.

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

**Answer:** Final projections of the square pyramid with axis inclined at $40^\circ$ to HP and resting base edge at $45^\circ$ to VP (apex towards VP, right side).

---

#### Problem 53: Square Pyramid — Apex Away from VP, on Left Side
**Given:** Base edge $B = 40\text{ mm}$, height $H = 60\text{ mm}$, axis inclined $40^\circ$ to HP, resting base edge on HP inclined $45^\circ$ to VP, apex away from VP on the left side.  
**Find:** Three-stage orthographic projections.

**Solution**
1. Draw the Stage 1 top view square of side $40\text{ mm}$ with resting edge $a-d$ vertical on the left; project the triangular front view of altitude $60\text{ mm}$ on $xy$.
2. Incline the front view to the left on resting edge $a'(d')$ on $xy$, tilting the base at $50^\circ$ to $xy$ (axis inclined $40^\circ$ to $xy$, apex $o'$ to the left).
3. Project vertically downward and horizontally across to construct the Stage 2 top view.
4. Reproduce the Stage 2 top view with resting base edge $a-d$ inclined at $45^\circ$ to $xy$ such that apex $o$ is directed away from the $xy$ line (downward) and to the left.
5. Intersect vertical projectors from the Stage 3 top view with horizontal projectors from the Stage 2 front view to draw the final front view.

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

**Answer:** Final projections of the square pyramid with axis inclined at $40^\circ$ to HP and resting edge at $45^\circ$ to VP (apex away from VP, left side).

---

#### Problem 54: Square Pyramid — Apex Towards VP, on Left Side
**Given:** Base edge $B = 40\text{ mm}$, height $H = 60\text{ mm}$, axis inclined $40^\circ$ to HP, resting base edge on HP inclined $45^\circ$ to VP, apex towards VP on the left side.  
**Find:** Three-stage orthographic projections.

**Solution**
1. Draw the initial square top view ($40\text{ mm}$) and triangular front view (height $60\text{ mm}$) resting on base $a'(d')-b'(c')$.
2. Incline the front view to the left resting on edge $a'(d')$ on $xy$ with base tilted at $50^\circ$ to $xy$.
3. Project the Stage 2 top view by dropping vertical projectors from the front view and extending horizontal projectors from the initial top view.
4. Rotate the Stage 2 top view so that resting edge $a-d$ is inclined at $45^\circ$ to $xy$, placing apex $o$ towards the $xy$ line (upward) and to the left.
5. Project points vertically upward from the Stage 3 top view and horizontally from the Stage 2 front view to complete the final front view.

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

**Answer:** Final projections of the square pyramid with axis inclined at $40^\circ$ to HP and resting edge at $45^\circ$ to VP (apex towards VP, left side).

---

#### Problem 250: Hexagonal Prism with Axis Inclined to HP and Resting Edge Inclined to VP
**Given:** Base edge $B = 30\text{ mm}$, axis length $H = 80\text{ mm}$, resting on HP on a base edge, axis inclined $45^\circ$ to HP, resting base edge inclined $50^\circ$ to VP.  
**Find:** Three-stage orthographic projections.

**Solution**
1. In the initial top view below $xy$, draw a regular hexagon of side $30\text{ mm}$ oriented with two vertical edges; label the right edge $c(3)-d(4)$ as the resting edge.
2. Project front view vertically above $xy$ as a rectangle of height $80\text{ mm}$ on base $1'(6')-2'(5')-3'(4')$.
3. Redraw the front view tilted to the right on resting base corner $3'(4')$ on the $xy$ line, inclining the axis at $45^\circ$ to $xy$ (base tilted at $90^\circ - 45^\circ = 45^\circ$).
4. Drop vertical projectors from all 6 top vertices and 6 base vertices of the tilted front view; intersect with horizontal projectors from the initial top view to complete the Stage 2 top view.
5. Reproduce the Stage 2 top view rotated so that resting base edge $3-4$ makes an angle of $50^\circ$ with the $xy$ line.
6. Project upward from the Stage 3 top view and horizontally from the Stage 2 front view to plot all twelve vertices; connect outer boundary lines, visible base/face edges, and hidden dashed edges to complete the final front view.

> **Watch out.** The prism has two parallel hexagonal bases: ensure horizontal projectors connect corresponding top-base and bottom-base points without mixing indices.

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

**Answer:** Three-stage orthographic projections of the hexagonal prism with axis inclined at $45^\circ$ to HP and resting base edge inclined at $50^\circ$ to VP.

### Quick recall
- When a solid rests on a base edge on the HP, that edge must be perpendicular to $xy$ in Stage 1 top view.
- Tilting the axis at angle $\theta$ to the HP means tilting the base line in the front view at $(90^\circ - \theta)$ to the $xy$ reference line.
- True lengths of resting edges are preserved across all top views because the resting edge remains parallel to HP (lying on HP).
- "Apex away from VP" directs the apex downward in the top view; "apex towards VP" directs the apex upward toward the $xy$ line.

<!-- page 5 | Corner Resting and Apparent Top View Inclination -->

## Corner Resting and Apparent Top View Inclination

### What you need
- When a solid rests on a base corner, orient the initial top view such that the resting corner lies on the extreme right or left of the horizontal axis.
- If the "top view of the axis" or the "plane containing the axis" is inclined to VP, the given angle $\beta$ is already an apparent angle; reproduce the Stage 2 top view directly at this angle without any locus construction.
- For curved solids (cones and cylinders), divide the circular base into 8 or 12 equal sectors to obtain generators and key perimeter points.
- Project inclined circular faces point by point to generate smooth elliptical contours; the outer profile is bounded by tangents drawn from the apex (cone) or between corresponding contour points (cylinder).

### The method
1. **Stage 1 (Simple Position):** Draw the true shape of the base in top view with the resting corner, base point, or resting edge positioned on the right horizontal centerline. Project vertically to draw the initial front view resting on $xy$.
2. **Stage 2 (Inclination to HP):** Re-draw the front view tilted to the given angle (axis angle $\theta$, slant edge angle, or base tilt angle) resting on its base corner/generator on $xy$. Project vertically down from this front view and horizontally across from the Stage 1 top view to plot the intermediate top view, joining base points into an ellipse/polygon.
3. **Stage 3 (Apparent Inclination to VP):** Draw a line inclined at the given apparent angle $\beta$ to $xy$. Re-draw the entire Stage 2 top view onto this line maintaining rigid dimensions.
4. **Final Front View:** Project vertically upwards from the rotated top view and horizontally across from the Stage 2 front view. Connect the outer contour with continuous outlines and interior visible edges as firm lines, marking hidden edges/generators as dashed lines.

### Problems

#### Problem 55: Pentagonal Pyramid Resting on Base Corner
**Given:** Pentagonal pyramid, base edge $B = 30\text{ mm}$, height $H = 60\text{ mm}$, resting on corner $c$ on HP, slant edge $o'c'$ inclined at $50^\circ$ to HP, top view of slant edge inclined at $30^\circ$ to XY.  
**Find:** Three-stage orthographic projections.

**Solution**
1. Draw the reference line $xy$ and construct a regular pentagon $a$-$b$-$c$-$d$-$e$ of side $30\text{ mm}$ in top view below $xy$, placing base edge $a$-$e$ vertical on the left and corner $c$ on the extreme right.
2. Locate center $o$, connect all corners to $o$, and project vertices up to $xy$ to locate $a'(e')$, $b'(d')$, and $c'$.
3. Erect axis of height $60\text{ mm}$ from $xy$ to mark apex $o'$ and draw triangular front view $a'o'c'$.
4. Re-draw the front view tilted such that corner $c'$ rests on $xy$ and slant edge $o'c'$ makes $50^\circ$ with $xy$.
5. Project points $a', b', c', d', e'$ and $o'$ down and intersect with horizontal projectors from the initial top view to construct the second-stage top view.
6. Draw an axis line at $30^\circ$ to $xy$ and reproduce the second-stage top view rigidly such that top view slant edge $o$-$c$ lies on this line.
7. Project points from the tilted top view up and intersect with horizontal projectors from the second-stage front view to complete the final front view.

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

**Answer:** Complete three-stage projections drawn with slant edge $o'c'$ at $50^\circ$ to HP and its top view at $30^\circ$ to VP.

#### Problem 60: Hexagonal Prism with Plane Containing Axis Inclined to VP
**Given:** Hexagonal prism, base edge $B = 30\text{ mm}$, axis $H = 80\text{ mm}$, resting on base edge on HP, axis inclined at $45^\circ$ to HP, plane containing the axis (top view of axis) inclined at $40^\circ$ to VP.  
**Find:** Three-stage orthographic projections.

**Solution**
1. Draw reference line $xy$ and construct the top view as a regular hexagon $a(1)$ to $f(6)$ of side $30\text{ mm}$ below $xy$, with base edge $c(3)$-$d(4)$ vertical on the right.
2. Project vertices upwards to $xy$ and draw the initial front view as a rectangle of width equal to the hexagon span and height $80\text{ mm}$.
3. Tilt the front view by $45^\circ$ so that base edge $3'(4')$ rests on $xy$ and the axis is inclined at $45^\circ$ to $xy$.
4. Project downwards from the tilted front view and horizontally from the Stage 1 top view to establish the intermediate top view showing both hexagonal faces.
5. Draw a reference line inclined at $40^\circ$ to $xy$ and duplicate the Stage 2 top view without distortion on this line.
6. Project upwards from the rotated top view and horizontally from the Stage 2 front view to obtain the final front view, drawing visible boundary outlines and hidden edges as dashed lines.

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

**Answer:** Completed orthographic views showing axis inclined at $45^\circ$ to HP and top view of axis inclined at $40^\circ$ to VP.

#### Problem 63: Cone Resting on Base Point with Axis Inclined
**Given:** Cone, base diameter $D = 40\text{ mm}$, height $H = 60\text{ mm}$, resting on base point on HP, axis inclined at $40^\circ$ to HP, vertical plane containing axis and generator inclined at $45^\circ$ to VP with apex away from VP.  
**Find:** Three-stage orthographic projections.

**Solution**
1. In top view below $xy$, draw a circle of diameter $40\text{ mm}$ centered at $o$ and divide it into 8 equal sectors numbered 1 to 8, with point 5 on the extreme right.
2. Project points $1$ through $8$ to $xy$ to form base points $1', 2'(8'), 3'(7'), 4'(6'), 5'$, and draw the triangular front view with axis height $60\text{ mm}$ to apex $o'$.
3. Tilt the front view about resting base point $5'$ such that the axis makes $40^\circ$ with $xy$ (or base makes $50^\circ$ to $xy$).
4. Drop vertical projectors from base points and apex $o'$, intersecting horizontal projectors from Stage 1 to plot the elliptical base curve and triangular outline in top view.
5. Draw an apparent inclination line at $45^\circ$ to $xy$ directed downward-right (apex away from VP) and reproduce the Stage 2 top view on this center axis.
6. Project upwards from the Stage 3 top view and horizontally from the Stage 2 front view to determine final base points and apex $o'$, connecting the elliptical contour and tangent generators.

> **Figure: Step 69.1: Simple position of the cone with base on HP**
>
> Orthographic projection showing the first step (labelled 69.1) of a cone in simple position resting on HP:
> - Parameter box specifies: 'D = 40', 'H = 60'.
> - Horizontal reference line labelled 'x' on the left and 'y' on the right.
> - Top View (below xy): Circle of diameter 40 mm with center 'o', divided into 8 equal sectors with division points numbered 1 (extreme left), 2, 3 (bottom), 4, 5 (extreme right), 6, 7 (top), 8.
> - Front View (above xy): Isosceles triangle standing on the xy line representing the cone of height 60 mm. The base is on xy, with base points marked 1', 2'(8'), 3'(7'), 4'(6'), 5' from left to right. The apex is labelled o'. Generators connect o' to the base points. Center line/axis extends from 3'(7') to apex o'. Vertical projector lines connect the top view circle divisions to the front view base points.

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

> **Figure: Projection of a cone: step 69.5 showing completed projection with final front view**
>
> Step 69.5 of projection of a cone with base diameter $D = 40\text{ mm}$ and height $H = 60\text{ mm}$, showing the completed three-stage projection including the final front view.
> 1. Stage 1 and Stage 2 are identical to step 69.4.
> 2. Stage 3 (Final views):
> - Top View: Same as in step 69.4, axis inclined at $45^\circ$ to VP.
> - Front View: Obtained by projecting vertically upwards from the Stage 3 top view and horizontally from the Stage 2 front view. Base points $1', 2', 3', 4', 5', 6', 7', 8'$ form an ellipse with hidden portions drawn dashed. Apex $o'$ is located at the top right at the same level as in Stage 2. Extreme generators connect apex $o'$ tangent to the base ellipse to form the final front view of the cone.

**Answer:** Final projections with cone axis inclined at $40^\circ$ to HP and top view axis at $45^\circ$ to VP.

#### Problem 64: Cone with Generator Inclined and Base Diameter Inclined to VP
**Given:** Cone, diameter $D = 40\text{ mm}$, height $H = 60\text{ mm}$, resting on point 5 of base circle, generator $o'5'$ inclined at $40^\circ$ to HP, diameter parallel to HP (3-7) inclined at $45^\circ$ to VP with apex towards VP.  
**Find:** Three-stage orthographic projections.

**Solution**
1. Draw Stage 1 top view as a $\varnothing 40\text{ mm}$ circle divided into 8 sectors (points 1 to 8) and project to form the Stage 1 triangular front view $o'1'5'$ of height $60\text{ mm}$ on $xy$.
2. Tilt the front view so that generator $o'5'$ makes $40^\circ$ with $xy$, resting on base point $5'$.
3. Project vertically down from the tilted front view and horizontally from the Stage 1 top view to establish the 8 base points and apex $o$, sketching the elliptical base and contour lines.
4. Draw a line inclined at $45^\circ$ to $xy$ and re-draw the Stage 2 top view with horizontal diameter 3-7 along this line, positioning apex $o$ closer to $xy$ (towards VP).
5. Project vertically up from the Stage 3 top view and horizontally across from the Stage 2 front view to plot the final front view profile.

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

**Answer:** Completed projections with generator inclined at $40^\circ$ to HP and diameter 3-7 inclined at $45^\circ$ to VP.

#### Problem 219: Cylinder with Base Inclined to HP and Top View Axis Inclined
**Given:** Cylinder, diameter $D = 40\text{ mm}$, height $H = 60\text{ mm}$, base inclined at $60^\circ$ to HP, top view of axis makes $35^\circ$ to XY line.  
**Find:** Three-stage orthographic projections.

> **Watch out.** The problem banner states top view at $30^\circ$, but the drawing specifies and constructs the top view axis at $35^\circ$ to $xy$.

**Solution**
1. Draw a circle of diameter $40\text{ mm}$ divided into 8 parts in top view, labelling top base $a$ to $h$ and bottom base 1 to 8.
2. Project to front view to create a rectangle of width $40\text{ mm}$ and height $60\text{ mm}$ resting on $xy$.
3. Tilt the front view about point $5'$ such that base $1'5'$ is inclined at $60^\circ$ to $xy$ (axis inclined at $30^\circ$ to $xy$).
4. Drop projectors from top and bottom base points to meet horizontal lines from Stage 1, plotting two identical ellipses connected by envelope tangents for the Stage 2 top view.
5. Draw a centerline inclined at $35^\circ$ to $xy$ and re-draw the two-ellipse top view body without changing dimensions.
6. Project upwards from the Stage 3 top view and horizontally from the Stage 2 front view to construct the final elliptical ends and outer generating lines.

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

**Answer:** Complete projections with base inclined at $60^\circ$ to HP and top view axis inclined at $35^\circ$ to XY.

### Quick recall
- "Top view of axis inclined" or "plane containing axis inclined" means the angle given is already the apparent angle $\beta$; never construct a locus line in Stage 3.
- In corner-resting pyramids and prisms, the corner must lie on the horizontal projection axis in Stage 1 to retain true symmetry during tilting.
- An inclined circular face projects as an ellipse whose major axis equals the true diameter and minor axis equals $D\cos\theta$.
- In third-stage front views, the upper visible base ellipse is fully drawn with a continuous line, while the lower obscured base portion is dashed.

<!-- page 6 | Locus Method and Complementary Angles for Solids -->

## Locus Method and Complementary Angles for Solids

### What you need
- **True length vs. apparent length:** A line inclined at $\theta$ to the HP appears foreshortened in the top view to an apparent length $L_1 = L\cos\theta$.
- **Locus line for apparent angle ($\beta$):** When the true inclination to the VP is $\phi$, mark true length $L$ at angle $\phi$ to find the locus line of the free end; swing arc of radius $L_1$ onto this locus to find apparent angle $\beta$.
- **Formula for $\beta$:** $\cos\beta = \frac{\cos\phi}{\cos\theta}$ or graphically via locus line parallel to $xy$ at distance $L\sin\phi$.
- **Complementary angles rule:** If true inclinations satisfy $\theta + \phi = 90^\circ$, the apparent angle becomes $\beta = 90^\circ$; the element aligns perpendicular to $xy$ (lying in a Profile Plane, PP).

### The method
1. **Stage 1 (Simple position):** Draw the top view and front view with the solid resting upright on the HP, orienting the specified resting corner or edge correctly relative to the reference line $xy$.
2. **Stage 2 (Inclination to HP):** Tilt the Stage 1 front view by angle $\theta$ (or tilt the base by $90^\circ - \theta$) resting on the specified element on the $xy$ line; project down and cross-project horizontally from Stage 1 top view to construct the Stage 2 top view.
3. **Locus construction for Stage 3:**
   - Choose a point on or below $xy$, draw a reference line at true inclination $\phi$ to the $xy$ line, and cut the true length of the axis or slant edge ($L$).
   - Draw a horizontal locus line parallel to $xy$ through this endpoint.
   - With the origin as center and apparent length ($L_1$, measured from Stage 2 top view) as radius, strike an arc cutting the locus line to establish the apparent angle $\beta$.
4. **Stage 3 (Inclination to VP):** Re-draw the entire Stage 2 top view rotated such that the axis/slant edge lies along the line inclined at $\beta$ to $xy$.
5. **Final front view:** Project vertical lines upwards from the Stage 3 top view and intersect them with horizontal projectors from the Stage 2 front view; connect visible and hidden edges.

### Problems

#### Problem 56: Pentagonal Pyramid with Slant Edge Inclined to Both Planes
**Given:** Base side $B = 30\text{ mm}$, height $H = 60\text{ mm}$, rests on corner $c$ on HP, slant edge $o\text{-}c$ inclined at $\theta = 50^\circ$ to HP and $\phi = 30^\circ$ to VP.  
**Find:** Three-stage orthographic projections and apparent angle $\beta$.

**Solution**
1. Draw reference line $xy$, and construct a regular pentagon $a\text{-}b\text{-}c\text{-}d\text{-}e$ of side $30\text{ mm}$ below $xy$ with vertical edge $a\text{-}e$ on the left and corner $c$ on the right.
2. Connect apex $o$ to all base corners to complete the Stage 1 top view.
3. Project vertices upwards to $xy$ and draw the Stage 1 front view of height $60\text{ mm}$ with base $a'(e')\text{-}b'(d')\text{-}c'$ on $xy$ and apex $o'$ at $60\text{ mm}$.

> **Figure: Step 56.1: Initial projection of pentagonal pyramid resting on base in HP**
>
> Step 56.1 of the solution for question 56 showing the initial orthographic projections of a pentagonal pyramid. Top view: pentagon with vertical edge ae on the left (dimension 30 mm) and corner c pointing horizontally to the right. Slant edges connect corners a, b, c, d, e to the central apex o. Front view above reference line xy: base lies on the xy line with points a'(e') on the left, b'(d') inside, and c' on the right. Apex o' is directly above the center, with a vertical height dimension of 60 mm. The outline is triangle o'-a'(e')-c' with edge o'-b'(d') drawn as a visible line. An inset box reads B = 30, H = 60. Bottom notes state 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

4. Re-draw the front view tilted such that slant edge $o'c'$ is inclined at $50^\circ$ to the $xy$ line, resting on base corner $c'$ on $xy$.

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

5. Project vertical lines downward from tilted front view points $a', b', c', d', e', o'$ and horizontal lines from the Stage 1 top view to construct the Stage 2 top view, measuring foreshortened slant edge $o\text{-}c$.

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

6. On the locus construction, draw a line at $\phi = 30^\circ$ to $xy$, mark true slant edge length $o'c'$ from Stage 1, and draw a horizontal locus line through the end point.
7. Swing an arc with center $c$ and radius equal to apparent length $o\text{-}c$ onto the locus line, obtaining apparent angle $\beta = 51^\circ$.
8. Re-draw the Stage 2 top view rotated so that slant edge $c\text{-}o$ lies along the $\beta = 51^\circ$ line.

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

9. Project upwards from the Stage 3 top view and horizontally from the Stage 2 front view to obtain the final front view vertices, connecting visible outer contours and hidden edges.

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

**Answer:** Apparent inclination $\beta = 51^\circ$.

---

#### Problem 57: Pentagonal Pyramid with Slant Edge in Profile Plane (Complementary Angles)
**Given:** Base side $B = 30\text{ mm}$, height $H = 60\text{ mm}$, resting on corner $c$ on HP, slant edge $o\text{-}c$ inclined at $\theta = 50^\circ$ to HP and $\phi = 40^\circ$ to VP (complementary angles: $50^\circ + 40^\circ = 90^\circ$).  
**Find:** Complete orthographic projections with slant edge in profile plane alignment.

**Solution**
1. Draw Stage 1 top view as a regular pentagon with edge $a\text{-}e = 30\text{ mm}$ vertical on the left and corner $c$ pointing right; project Stage 1 front view of height $60\text{ mm}$ on $xy$.

> **Figure: Step 57.1: Initial front and top views of pentagonal pyramid**
>
> Step 57.1 of orthographic projection showing the initial position of a pentagonal pyramid. Front view above xy line: isosceles triangular outline of height 60 mm with apex o' and base on xy line. Base points are labeled a'(e'), b'(d'), and c'. Apex o' connects to a'(e'), b'(d'), and c', with an axis centerline extending to the mid-base. Top view below xy line: regular pentagon with vertical edge a-e of length 30 mm on the left, vertices labeled a, b, c, d, e, and apex at center o connected to all five base corners. Vertical projection lines align top view corners with base points on the xy line. Includes an annotation box with 'B = 30' and 'H = 60'.

2. In Stage 2, tilt the front view triangle so that slant edge $o'c'$ is inclined at $50^\circ$ to $xy$, resting on corner $c'$.

> **Figure: Orthographic projections of a pentagonal pyramid - Step 57.2**
>
> Step 57.2 of the projection of a regular pentagonal pyramid with base edge B = 30 mm and height H = 60 mm. At the left, the initial position shows: top view as a regular pentagon with corners labeled a, b, c, d, e and apex o at the center (side a-e is vertical and dimensioned 30 mm); front view above the xy line as an isosceles triangle of height 60 mm, with base points a'(e'), b'(d'), c' on the xy line and apex o'. At the right, the front view is reproduced tilted such that the slant edge o'c' makes an angle of 50° with the horizontal xy reference line, resting on corner c', with apex o' and base corners a'(e') and b'(d') labeled.

3. Project downwards from the tilted front view to intersect horizontal lines from the Stage 1 top view, drawing the second-stage top view.

> **Figure: Orthographic projections of a pentagonal pyramid - Step 57.3**
>
> Step 57.3 showing the completed top view for the tilted pentagonal pyramid (B = 30 mm, H = 60 mm). On the left, the initial front and top views are shown identically to step 57.2. On the right, the front view is tilted at 50° to the xy line resting on corner c'. Vertical projectors from the tilted front view (points a', e', b', d', c', o') intersect horizontal projectors from the first top view (points a, b, c, d, e, o) to form the tilted top view. The outer boundary formed by points a-b-o-d-e is visible (solid lines), while the base corner c lies underneath, making edges c-b, c-d, and the slant edge o-c dashed hidden lines.

4. Since $\theta + \phi = 50^\circ + 40^\circ = 90^\circ$, apparent angle $\beta = 90^\circ$; position the top view with slant edge $c\text{-}o$ perpendicular to $xy$.

> **Figure: Orthographic projection of a pentagonal pyramid - Step 57.4**
>
> Step 57.4 of the projection of a pentagonal pyramid. A given box on the left lists: B = 30, H = 60. First stage (simple position): Front view is a triangle of height 60 mm with base a'(e')-b'(d')-c' on the xy line and apex o'. Top view is a regular pentagon a-b-c-d-e with base edge ae = 30 mm perpendicular to xy, and apex o connected to all base corners. Second stage (inclined to HP): The front view is tilted such that the slant edge o'c' makes an angle of 50° with the horizontal line/xy. Projectors from the tilted front view and first top view yield the second top view. Third stage: The top view from stage 2 is reproduced rotated such that its axis/centerline is inclined at 40° to the xy reference line (indicated with 'APPARENT ANGLE - 90°'). Front view for stage 3 is not yet drawn. Note reads: 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.

5. Project vertically upward from the Stage 3 top view and horizontally from the Stage 2 front view to plot all points and complete the final front view.

> **Figure: Orthographic projection of a pentagonal pyramid - Step 57.5**
>
> Step 57.5 showing the completed orthographic projection of the pentagonal pyramid. A given box on the left lists: B = 30, H = 60. First stage: Front view of height 60 mm standing on the xy line, top view pentagon with side 30 mm and edge ae perpendicular to xy. Second stage: Front view rotated so slant edge o'c' is inclined at 50° to xy; corresponding second top view projected below xy. Third stage: Top view rotated at an angle of 40° to the xy reference line ('APPARENT ANGLE - 90°'). Vertical projectors from this rotated top view and horizontal projectors from the second front view determine the final front view above xy, with vertices a', b', c', d', e' and apex o', showing visible outlines as solid lines and hidden edges as dashed lines. Note reads: 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.

> **Key idea.** When $\theta + \phi = 90^\circ$, the apparent angle $\beta$ is always $90^\circ$. The line lies entirely in a Profile Plane, so no graphical arc-swing is needed to find $\beta$.

**Answer:** Apparent inclination $\beta = 90^\circ$.

---

#### Problem 80: Hexagonal Prism with Axis Inclined to Both Planes
**Given:** Base edge $B = 30\text{ mm}$, axis height $H = 80\text{ mm}$, resting on base edge $3\text{-}4$ on HP, axis inclined at $\theta = 45^\circ$ to HP and $\phi = 40^\circ$ to VP.  
**Find:** Three-stage orthographic projections and apparent angle $\beta$.

**Solution**
1. Draw Stage 1 top view as a regular hexagon of side $30\text{ mm}$ with vertical edge $3\text{-}4$ on the right; label base points $1$ to $6$ and top face points $a$ to $f$.
2. Project vertically to draw the Stage 1 front view as a rectangle of height $80\text{ mm}$ resting on $xy$.

> **Figure: Step 80.1: Initial projection of hexagonal prism resting on HP**
>
> Step 80.1 showing the initial front and top views of the hexagonal prism. A small box at upper left gives: 'B = 30', 'H = 80'. The horizontal reference line is labelled 'x' on the left and 'y' on the right. Below the xy line, the top view is a regular hexagon with vertical edges a(1)-f(6) and c(3)-d(4), and vertices labelled clockwise from left: a(1) at bottom-left, f(6) at middle-left, e(5) at top vertex, d(4) at top-right, c(3) at bottom-right, and b(2) at bottom vertex. The vertical right edge length c(3)-d(4) is dimensioned as 30. Projectors extend upward to the front view resting on the xy line. The front view is a rectangle of height 80 mm and width corresponding to the profile of the hexagon. The bottom edge lies on xy with vertices 1'(6') on the left, 2'(5') at the center axis, and 3'(4') on the right. The top edge is parallel to xy with vertices a'(f') on the left, b'(e') at the center axis, and c'(d') on the right. A vertical line divides the front view along the axis from 2'(5') to b'(e'). Height is dimensioned as 80 mm on the left. Below the top view is text 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

3. Tilt the Stage 1 front view such that the axis is at $45^\circ$ to $xy$ (base edge $3'(4')$ rests on $xy$, base line inclined at $90^\circ - 45^\circ = 45^\circ$).

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

4. Project vertical lines downwards from all front view corners and horizontal lines from the Stage 1 top view to construct the Stage 2 top view.

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

5. Draw a line at true inclination $\phi = 40^\circ$ to $xy$, mark the true axis length ($80\text{ mm}$), and draw a locus line parallel to $xy$ through the end point.
6. With axis endpoint as center and Stage 2 top view axis length as radius, cut the locus line to establish apparent angle $\beta = 66^\circ$.
7. Re-draw the entire Stage 2 top view rotated so that its axis aligns with the line at $\beta = 66^\circ$.

> **Figure: Projection of hexagonal prism - Step 80.4**
>
> Multi-stage orthographic projection of a hexagonal prism with base edge B = 30 mm and height H = 80 mm (labelled 80.4). Stage 1 shows the initial position: a regular hexagon in the top view below the XY line with corners labelled a(1), b(2), c(3), d(4), e(5), f(6) and side dimension 30, and a rectangle in the front view above the XY line of height 80, with base labelled 1'(6'), 2'(5'), 3'(4') and top face a'(f'), b'(e'), c'(d'). Stage 2 shows the front view inclined such that the base 1'(6')-3'(4') makes an angle of 45° with the XY ground line, resting on 3'(4'), with corresponding top view projected below showing corners 1 to 6, a to f, and axis p-o. Stage 3 shows the top view reproduced rotated such that its axis is inclined: an apparent angle of 66° is constructed corresponding to a true angle of 40° to the VP (XY line). The stage 3 front view is not yet drawn. GIVEN box: B = 30, H = 80. Notes: APPARENT ANGLE - 66°, SCALE 1:1, ALL DIMENSIONS ARE IN mm.

8. Project upward from the Stage 3 top view and horizontally from the Stage 2 front view to construct the final front view, displaying visible outlines and dashed hidden lines.

> **Figure: Projection of hexagonal prism - Step 80.5**
>
> Final completed orthographic projection of the hexagonal prism (labelled 80.5) with base edge B = 30 mm and height H = 80 mm. Stages 1 and 2 are identical to step 80.4 (simple position with regular hexagon in top view and 80 mm high rectangle in front view; stage 2 with base inclined at 45° to HP resting on corner 3'(4')). Stage 3 shows the top view tilted at an apparent angle of 66° (true inclination 40° to VP), and the final front view is fully constructed above the XY line by projecting upwards from the stage 3 top view and horizontally from the stage 2 front view. The final front view depicts all visible and hidden edges of both hexagonal faces (a', b', c', d', e', f' and 1', 2', 3', 4', 5', 6') and the connecting lateral edges. GIVEN box: B = 30, H = 80. Notes: APPARENT ANGLE - 66°, SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** Apparent inclination $\beta = 66^\circ$.

---

#### Problem 84: Pentagonal Prism with Axis in Profile Plane (Complementary Angles)
**Given:** Base edge $B = 30\text{ mm}$, height $H = 80\text{ mm}$, resting on base corner $3$ on HP, axis/slant edge inclined at $\theta = 45^\circ$ to HP and $\phi = 45^\circ$ to VP (complementary: $45^\circ + 45^\circ = 90^\circ$).  
**Find:** Projections showing Stage 3 profile plane alignment.

**Solution**
1. Draw Stage 1 top view as a regular pentagon of side $30\text{ mm}$ with corner $c(3)$ on the right and edge $e(5)\text{-}a(1)$ vertical on the left; project the Stage 1 front view of height $80\text{ mm}$ resting on $xy$.

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

2. Tilt the front view such that the axis is inclined at $45^\circ$ to $xy$ with corner $3'$ resting on $xy$.

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

3. Project downwards from the tilted front view and cross-project from the Stage 1 top view to complete the Stage 2 top view.

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

4. Because $\theta + \phi = 45^\circ + 45^\circ = 90^\circ$, apparent inclination is $\beta = 90^\circ$; re-draw the Stage 2 top view with its axis oriented strictly perpendicular to $xy$.

> **Figure: Orthographic projections of a pentagonal prism inclined to HP and VP (Problem 84.4)**
>
> Projection of a pentagonal prism with base side B = 30 mm and height H = 80 mm:
> 1. Initial position: Front view is a rectangle of height 80 mm with vertical edges labelled a'(e'), b'(d'), c' resting on XY line with base 1'(5'), 2'(4'), 3'. Top view is a regular pentagon with base side 30 mm labelled a(1), b(2), c(3), d(4), e(5).
> 2. Second stage: Prism inclined to HP such that the base edge 3' is on HP and the axis/base is inclined at 45° to the horizontal. Front view shows tilted outline with corners 1'(5'), 2'(4'), 3', a'(e'), b'(d'), c'. Top view is projected showing base points 1, 2, 3, 4, 5 and top face points a, b, c, d, e connected with visible and hidden (dashed) lines.
> 3. Third stage: Top view rotated at 45° to the XY line (vertical plane inclination), showing corners 1, 2, 3, 4, 5 and a, b, c, d, e arranged vertically with hidden lines.

5. Project vertically upward from the Stage 3 top view and horizontally from the Stage 2 front view to establish all vertices and complete the final front view.

> **Figure: Complete orthographic projections of a pentagonal prism including final front view (Problem 84.5)**
>
> Projection of a pentagonal prism with base edge B = 30 mm and height H = 80 mm:
> 1. Initial position: Front view of height 80 mm resting on XY line; top view is a regular pentagon of side 30 mm.
> 2. Second stage: Prism inclined at 45° to HP, base on 3'. Front view is tilted, and corresponding top view is drawn.
> 3. Third stage: Top view rotated at an angle of 45° to the XY reference line. From this top view, projectors are drawn upwards to meet horizontal projectors from the second stage front view to complete the final front view showing vertices a', b', c', d', e' and base corners 1', 2', 3', 4', 5' with solid visible lines and dashed hidden lines.

**Answer:** Apparent inclination $\beta = 90^\circ$.

---

#### Problem 85: Cylinder with Axis Inclined to Both Planes
**Given:** Base diameter $D = 40\text{ mm}$, axis height $H = 60\text{ mm}$, rests on point $5'$ on HP, axis inclined at $\theta = 30^\circ$ to HP and $\phi = 30^\circ$ to VP.  
**Find:** Three-stage orthographic projections and apparent angle $\beta$.

**Solution**
1. Draw Stage 1 top view as a circle of diameter $40\text{ mm}$, divide it into 8 equal parts labeled $a(1)$ through $h(8)$, and project Stage 1 front view as a $40\text{ mm} \times 60\text{ mm}$ rectangle standing on $xy$.

> **Figure: Step 85.1: Initial projection of cylinder resting on HP with axis perpendicular to HP**
>
> Step 85.1 shows the simple position (first stage) projections of a cylinder resting on HP. In the top view (below reference line xy), there is a circle with diameter Ø40 divided into 8 equal parts, labeled with base points and top face points: a(1) at 9 o'clock, b(2) at 7:30, c(3) at 6 o'clock, d(4) at 4:30, e(5) at 3 o'clock, f(6) at 1:30, g(7) at 12 o'clock, h(8) at 10:30, and center o. In the front view (above xy line), a vertical rectangle of width 40 mm and height 60 mm rests directly on the xy line. The base points on xy are labeled 1', 2'(8'), 3'(7'), 4'(6'), 5' from left to right. The top face points are labeled a', b'(h'), c'(g'), d'(f'), e' from left to right. Vertical projectors connect the top and front views. Box on the left indicates 'D = 40', 'H = 60'. Below the top view is labeled 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Tilt the front view rectangle such that the axis is inclined at $30^\circ$ to $xy$, resting on base point $5'$ on the $xy$ line.

> **Figure: Step 85.2: Projection of cylinder with axis inclined at 30 degrees to HP**
>
> Step 85.2 of the projection of a cylinder. Beside the drawing is a box with GIVEN: D = 40, H = 60. On the left is the cylinder in simple position with axis perpendicular to the HP: top view is a circle of diameter 40 mm divided into 8 sectors labelled a(1), b(2), c(3), d(4), e(5), f(6), g(7), h(8) with center o; front view is a rectangle of width 40 mm and height 60 mm resting on the reference line xy, with base points 1', 2'(8'), 3'(7'), 4'(6'), 5' and top face points a', b'(h'), c'(g'), d'(f'), e'. On the right, the front view of the cylinder is tilted such that its axis is inclined at 30° to the xy line, resting on base point 5' on the reference line.

3. Project vertically downwards from all 8 generator points and horizontally from the circular top view to plot the elliptical bases and tangents of the Stage 2 top view.

> **Figure: Step 85.3: Completed projections of cylinder inclined at 30 degrees to HP**
>
> Step 85.3 showing the completed top view for the inclined cylinder. Beside the drawing is a box with GIVEN: D = 40, H = 60. On the left are the initial front and top views in simple position. On the right, the front view is tilted at 30° to the xy line, resting on point 5'. Vertical projection lines are drawn downward from points 1', 2'(8'), 3'(7'), 4'(6'), 5' and a', b'(h'), c'(g'), d'(f'), e', intersecting horizontal projectors from the corresponding points of the initial circular top view. The resulting top view consists of: a visible elliptical top face with points a, b, c, d, e, f, g, h and center o; an elliptical bottom base with points 1, 2, 3, 4, 5, 6, 7, 8 and center p (the half containing points 4 and 5 is dashed as hidden, while the remaining half is solid); and outline generators connecting tangent points 7 to g at the top and 3 to c at the bottom.

4. From a selected center on or below $xy$, draw a line at true inclination $\phi = 30^\circ$ to $xy$, lay off the true axis length ($60\text{ mm}$), and draw a locus line parallel to $xy$ through the axis tip.
5. Using the apparent axis length from Stage 2 as radius, swing an arc onto the locus line to measure apparent angle $\beta = 36^\circ$.
6. Re-draw the Stage 2 top view rotated so that its central axis lies along the $\beta = 36^\circ$ line.

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

7. Project vertically upwards from the rotated top view and horizontally from the Stage 2 front view to locate base ellipses and generators in the final front view.

> **Figure: Orthographic projection of a cylinder - Step 85.5 (Final projection)**
>
> Step 85.5 showing the final completed projection of the cylinder. Parameter box: D = 40, H = 60. Scale 1:1, all dimensions in mm, APPARENT ANGLE - 36°.
> Stage 1: Simple position with rectangle front view (60 mm height, 40 mm width) and circular top view (Ø40 mm, 8 divisions).
> Stage 2: Axis inclined at 30° to HP. Front view tilted rectangle resting on point 5' on XY line; top view projected showing elliptical ends.
> Stage 3:
> - Top view: Redrawn at apparent angle with axis inclined at 30° to reference.
> - Final Front View: Completed by projecting vertical projectors from Stage 3 top view and horizontal projectors from Stage 2 front view. The top face forms an ellipse with points a', b', c', d', e', f', g', h' fully visible (solid). The base forms an ellipse with visible outer contour points 1', 2', 3', 4', 5' and hidden dashed curve through points 6', 7', 8'. Extreme contour generators connect the two bases.

**Answer:** Apparent inclination $\beta = 36^\circ$.

### Quick recall
- Apparent top view inclination $\beta$ is always larger than true VP inclination $\phi$ because $\cos\beta = \frac{\cos\phi}{\cos\theta} < \cos\phi$ when $\theta > 0^\circ$.
- When true angles sum to $90^\circ$ ($\theta + \phi = 90^\circ$), the solid aligns directly into the profile plane, making $\beta = 90^\circ$.
- The locus line is always drawn parallel to the reference line $xy$ at a perpendicular distance equal to the true vertical component ($L\sin\phi$).
- The radius swung onto the locus line is strictly the apparent length taken from the Stage 2 top view.

<!-- page 7 | Solids Lying on Lateral Face, Lateral Edge, or Generator on HP -->

## Solids Lying on Lateral Face, Lateral Edge, or Generator on HP

### What you need
- **Resting feature orientation:** Orient the initial base so the resting element (edge for face-resting, corner for edge-resting, extreme point for generator) lies on the tilt side perpendicular or parallel to the tilt direction.
- **Full contact on HP:** When lying on a lateral face, edge, or generator, the corresponding element in the front view lies directly on the reference line $xy$.
- **Base tilt angle:** For a cone lying on a generator, the semi-apex angle is $\alpha = \arctan(r/h)$; the axis inclination to HP is $\theta = \alpha$, and the base tilts at $90^\circ - \alpha$ to HP.
- **Locus requirement:** If the problem specifies the *true inclination* $\phi$ of the axis to VP, use locus construction to determine the apparent angle $\beta$; if it specifies the *top view of the axis* or *plane containing the axis*, rotate the top view directly at the given angle.
- **Visibility:** The tilted base facing upward in Stage 2 is completely visible in the top view; hidden outlines and internal edges in Stage 3 depend on the observer's viewing direction relative to $xy$.

### The method
1. **Stage 1 (Simple Position):** Draw the top view with base true shape on HP; orient the base so the feature to lie on HP is on the right side. Project the simple front view resting on $xy$.
2. **Stage 2 (Tilt on HP):** Reproduce the front view tilted such that the resting slant edge, triangular face, or generator lies flat along the reference line $xy$.
3. **Stage 2 (Foreshortened TV):** Project vertical lines down from the tilted front view and horizontal lines from the initial top view; plot the foreshortened base (polygon or smooth ellipse) and connect the apex to form the boundary.
4. **Stage 3 (VP Alignment):** Re-draw the top view from Stage 2 rotated at the specified angle to $xy$, positioning the apex nearer or farther from the observer as stated. Use locus construction if the true axis angle is given.
5. **Stage 3 (Final FV):** Project vertical lines up from the Stage 3 top view and horizontal lines from Stage 2 front view; join intersection points, rendering outermost boundaries solid and occluded edges dashed.

---

### Problems

#### Problem 213: Square Pyramid Lying on Triangular Face
**Given:** Square pyramid, base edge $s = 30\text{ mm}$, height $h = 60\text{ mm}$, lying on HP on a triangular face, resting base edge inclined $30^\circ$ to VP.  
**Find:** Projections of the square pyramid.

**Solution**
1. Draw the reference line $xy$; in the top view, draw a $30\text{ mm} \times 30\text{ mm}$ square $abcd$ with vertical edge $bc$ on the right, and connect diagonals to apex $o$.
2. Project upward to draw the Stage 1 front view: base $a'(d')-b'(c') = 30\text{ mm}$ on $xy$ and apex $o'$ at vertical axis height $60\text{ mm}$.
3. Redraw the front view in Stage 2 with the triangular face edge $o'-b'(c')$ resting completely on $xy$.
4. Project vertically downward from the tilted front view and horizontally from the Stage 1 top view to establish base points $a, b, c, d$ and apex $o$, drawing the fully visible base and lateral edges.
5. In Stage 3, draw a line inclined at $30^\circ$ to $xy$ and reproduce the Stage 2 top view with the resting base edge $bc$ lying along this line.
6. Project vertically up from the Stage 3 top view and horizontally from Stage 2 front view to construct the final front view, showing visible edges $a'-b'$, $a'-d'$, and lateral edges with correct dashed hidden lines.

> **Figure: Step 213.1: Projections of square pyramid in simple position**
>
> Step 213.1 of the solution showing the orthographic projections of a square pyramid in simple position resting on HP with its base.
> - Front view (above ground line x-y): Triangle with base on the x-y line spanning from a'(d') to b'(c') and vertex o' at the top. The vertical axis height is dimensioned as 60 mm.
> - Top view (below ground line x-y): A square base with vertices a (bottom-left), b (bottom-right), c (top-right), and d (top-left). The base edge is dimensioned as ◻30. The two diagonal lines intersect at the apex/center o, representing the slant edges of the pyramid.
> - Projection lines: Vertical alignment between top view vertices (a, d) and front view base corner a'(d'), top view vertices (b, c) and front view base corner b'(c'), and center o to apex o'.
> - Info box labelled '213.1' with 'B = 30' and 'H = 60'.

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

> **Figure: Step 213.3 of projection of a square pyramid showing top view of tilted pyramid**
>
> Projection of a square pyramid with base side B = 30 mm and height H = 60 mm (Step 213.3).
> - Left (Simple position):
>   - Same as step 213.2, showing front view triangle (height 60 mm, base 30 mm) and top view square (30 mm × 30 mm).
> - Right (Tilted position):
>   - Front view: Tilted triangle with face b'(c')-o' on the xy line, apex a'(d') at top.
>   - Top view: Projected downward from front view and horizontally from initial top view. Corners of base: b (bottom-left), a (bottom-middle), c (top-left), d (top-middle). Apex o is at the far right. Visible edges include solid outlines b-c-d-o-a-b, while internal edges from d and a to o are shown as hidden (dashed) lines, and line b-c forms the base boundary.
> - Labels and annotations: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', label '213.3', and parameter box 'B = 30', 'H = 60'.

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

> **Figure: Projection of a square pyramid - completed solution 213.5**
>
> Complete orthographic projection 213.5 of a square pyramid with base $B = 30\text{ mm}$ and height $H = 60\text{ mm}$:
> - Stage 1: Front view triangle (height $60$, base $30$ on $xy$) and top view square (side $30$, corners $a, b, c, d$, center $o$).
> - Stage 2: Front view tilted with apex $o'$ and base point $b'(c')$ on the $xy$ line; corresponding top view projected below.
> - Stage 3:
>   - Top view inclined at $30^\circ$ to the $xy$ line.
>   - Final Front View constructed by projecting upwards from the inclined top view and horizontally from the stage 2 front view: points $b', c'$ on the $xy$ line, $a', d'$ at the top base level, and apex $o'$ on the $xy$ line. Outlines $b'-a'-d'-o'-b'$ are solid; interior edges from $d'$ down to $c'$ are shown, with hidden/visible edge conventions.

**Answer:** Projections completed with Stage 2 axis inclination $\theta = 14^\circ$ to HP and resting base edge inclined $30^\circ$ to VP.

---

#### Problem 58: Hexagonal Pyramid Lying on Triangular Face
**Given:** Hexagonal pyramid, base edge $s = 30\text{ mm}$, height $h = 60\text{ mm}$, lying on triangular face on HP, resting base edge inclined $50^\circ$ to VP, apex nearer to observer.  
**Find:** Orthographic projections.

**Solution**
1. Draw reference line $xy$; draw a regular hexagon $abcdef$ of side $30\text{ mm}$ below $xy$ with base edges $af$ and $cd$ perpendicular to $xy$, connecting all corners to center $o$.
2. Project upward to construct the Stage 1 front view: base $a'(f')-b'(e')-c'(d')$ on $xy$ and apex $o'$ at height $60\text{ mm}$.
3. Redraw the front view tilted to the right so slant face line $o'-c'(d')$ lies directly on $xy$.
4. Project vertically down from tilted front view and horizontally from Stage 1 top view to plot the six base corners and apex $o$; draw the visible hexagonal base and outline generators.
5. Draw a line at $50^\circ$ to $xy$; redraw the Stage 2 top view rotated so the resting edge $cd$ lies along this line with the apex $o$ pointing downwards (closer to the observer).
6. Project upward from the rotated top view and horizontally from Stage 2 front view to determine final front view vertices, outlining outer contours in solid lines and inner occluded edges in dashed lines.

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

> **Figure: Step 58.2: Projection of hexagonal pyramid tilted on a slant edge**
>
> Worked step 58.2 for the projection of a hexagonal pyramid. Given box: B = 30 mm (base edge), H = 60 mm (height/axis length). Left: Initial projection showing the front view resting on reference line xy with base vertices a'(f'), b'(e'), c'(d') and apex o' at height 60 mm, with central line from b'(e') to o'. The corresponding top view shows a regular hexagon of side 30 mm with corners labeled a, b, c, d, e, f and apex o at the center connected to all vertices. Right: Front view tilted such that the slant edge c'(d')-o' lies on the reference line xy, with corners labeled c'(d'), b'(e'), a'(f'), and apex o'. Note below: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Step 58.3: Top view projection of tilted hexagonal pyramid**
>
> Worked step 58.3 for the projection of a hexagonal pyramid (given B = 30 mm, H = 60 mm). Left: Initial top and front views as in step 58.2. Right: Front view tilted with slant edge c'(d')-o' on the xy line. Horizontal projection lines from the initial top view and vertical projectors from the tilted front view intersect to construct the final top view. In the final top view, base vertices are labeled a, b, c, d, e, f, apex is labeled o, visible outlines/edges are drawn as solid lines, and hidden edges are drawn as dashed lines. Note below: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Orthographic projections of a hexagonal pyramid - Step 58.4**
>
> Projection of a hexagonal pyramid with base edge B = 30 mm and height H = 60 mm. Scale 1:1, all dimensions in mm.
> - Stage 1 (Simple position): Base on HP, axis perpendicular to HP. Top view is a regular hexagon abcdef with side 30 mm and center apex o connected to all corners; edges af and cd are perpendicular to the XY line. Front view is an isosceles triangle on XY with base points a'(f'), b'(e'), c'(d'), apex o' at height 60 mm, and axis line shown.
> - Stage 2: Pyramid tilted to rest on HP on slant edge/face with base edge c'(d') and apex o' on the XY line. Top view projected with apex o to the right, foreshortened hexagonal base on the left, visible edges (solid) and hidden edges (dashed: o-a, o-f, a-b, a-f).
> - Stage 3: Top view from Stage 2 reproduced inclined at an angle of 50° to the VP (XY line). The front view for this stage is not yet drawn.

> **Figure: Orthographic projections of a hexagonal pyramid - Step 58.5 (Complete solution)**
>
> Complete orthographic projection of the hexagonal pyramid (B = 30 mm, H = 60 mm). Scale 1:1, all dimensions in mm.
> - Stage 1: Front and top views in simple position (identical to 58.4).
> - Stage 2: Front view lying with c'(d') and apex o' on the XY line, and projected top view (identical to 58.4).
> - Stage 3: Top view tilted at 50° to XY with apex o pointing towards the bottom right. Final front view projected from Stage 3 top view and Stage 2 front view: apex o' lies on the XY line; base corners a', f' at the top level, b', e' at the intermediate level, and c', d' on XY, fully outlining the tilted hexagonal pyramid in elevation.

**Answer:** Completed three-stage projections with face $o'-c'(d')$ on HP and base edge $cd$ at $50^\circ$ to VP.

---

#### Problem 59: Hexagonal Pyramid Lying on Lateral Edge
**Given:** Hexagonal pyramid, base edge $s = 30\text{ mm}$, height $h = 60\text{ mm}$, resting on a lateral edge on HP, resting lateral edge inclined $30^\circ$ to VP, apex nearer to observer.  
**Find:** Orthographic projections.

**Solution**
1. Draw reference line $xy$; draw top view regular hexagon $abcdef$ of side $30\text{ mm}$ with corner $d$ on the horizontal centerline pointing directly rightward.
2. Project upward to draw the Stage 1 front view: base points $a', b'(f'), c'(e'), d'$ on $xy$ and apex $o'$ at height $60\text{ mm}$, with slant edge $o'-d'$ on the right.
3. Tilt the front view into Stage 2 such that the lateral edge $o'-d'$ lies completely flat on the reference line $xy$.
4. Project downward from the tilted front view and horizontally from the Stage 1 top view to establish the top view; connect outer boundaries and show visible base edges.
5. Draw a line at $30^\circ$ to $xy$; redraw the Stage 2 top view with the resting lateral edge $o-d$ along this line, orienting apex $o$ toward the bottom (nearer to observer).
6. Project vertically up from the Stage 3 top view and horizontally from Stage 2 front view to construct the final front view, marking unseen edges as dashed.

> **Figure: Step 59.1: Initial projection of hexagonal pyramid resting on HP**
>
> Step 59.1 of the orthographic projection of a hexagonal pyramid with base edge 30 mm and height 60 mm.
> - Given box: B = 30, H = 60.
> - Reference line labeled x and y.
> - Front view (above xy): Symmetrical triangular projection with base a'-d' on the xy line and apex o' at height 60 mm above xy. Base points labeled from left to right: a', b' (f'), c' (e'), d'. Slant edges drawn from o' to each visible corner: o'a', o'b'(f'), o'c'(e'), and o'd'. Axis runs vertically from o' to the base.
> - Top view (below xy): Regular hexagon with corner vertices labeled counterclockwise starting from the leftmost vertex: a (leftmost corner on horizontal symmetry line), b (bottom-left), c (bottom-right), d (rightmost corner on horizontal symmetry line), e (top-right), f (top-left). Center apex labeled o, with radial lines connecting o to all six vertices (a, b, c, d, e, f). Dimension line shows bottom base edge bc = 30 mm.
> - Thin vertical projection lines connect points a, b, c, d, e, f, and o in the top view to corresponding points a', b'(f'), c'(e'), d', and o' in the front view.
> - Annotations at bottom: 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

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

**Answer:** Completed projections with lateral edge $o'-d'$ on HP and inclined $30^\circ$ to VP.

---

#### Problem 71: Cone Lying on Generator – Top View Inclined
**Given:** Cone, base diameter $d = 40\text{ mm}$, height $h = 60\text{ mm}$, lying on a generator on HP, vertical plane containing axis and generator inclined $40^\circ$ to VP, apex away from observer.  
**Find:** Orthographic projections.

**Solution**
1. In the top view, draw a circle of diameter $40\text{ mm}$ centered at $o$, divided into 8 equal sectors numbered 1 to 8 with generator point 5 on the right.
2. Project upward to draw the Stage 1 front view: isosceles triangle with base $1'-5' = 40\text{ mm}$ on $xy$ and apex $o'$ at vertical axis height $60\text{ mm}$.
3. Redraw the front view in Stage 2 tilted so the extreme generator $o'-5'$ lies flat along the $xy$ line.
4. Project vertically down from Stage 2 front view and horizontally from Stage 1 top view; draw a smooth ellipse through points 1 to 8 to represent the tilted base and draw tangents from apex $o$ to the ellipse.
5. Draw an axis line inclined at $40^\circ$ to $xy$; copy the Stage 2 top view rotated along this axis with apex $o$ directed upward (away from observer).
6. Project vertically up from Stage 3 top view and horizontally from Stage 2 front view to plot the final front view ellipse and apex $o'$, connecting tangent generators.

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

**Answer:** Completed projections with cone lying on generator $o'-5'$ on HP and top view of axis inclined $40^\circ$ to VP.

---

#### Problem 72: Cone Lying on Generator – Axis Inclined (Locus Method)
**Given:** Cone, base diameter $d = 40\text{ mm}$, height $h = 60\text{ mm}$, lying on a generator on HP, axis inclined $40^\circ$ to VP, apex nearer to observer.  
**Find:** Projections showing apparent angle construction.

**Solution**
1. Draw Stage 1 top view circle $\varnothing 40\text{ mm}$ divided into 8 parts and front view triangle $1'-5'-o'$ of height $60\text{ mm}$ standing on $xy$.
2. Tilt the front view so generator $o'-5'$ lies on $xy$; project vertically down and horizontally from Stage 1 to draw the Stage 2 elliptical top view with apparent axis length $L_a = o-3(7)$.
3. Mark a point $o$ in Stage 3 and draw a true inclination line at $\phi = 40^\circ$ to $xy$; mark the true axis length $60\text{ mm}$ to locate point $P$.
4. Draw a horizontal locus line through $P$ parallel to $xy$.
5. With center $o$ and radius equal to apparent axis length $L_a$, draw an arc cutting the locus line to establish the apparent angle $\beta$; reproduce the Stage 2 top view aligned along this line with apex $o$ nearer to the observer.
6. Project upward from Stage 3 top view and horizontally from Stage 2 front view to obtain intersection points for the base ellipse and apex $o'$, drawing the final front view contour.

> **Watch out.** The given angle is the true inclination of the axis to VP ($\\phi = 40^\circ$), not the top view inclination. A locus line construction is compulsory to determine the apparent angle $\\beta$.

> **Figure: Step 72.1: Projections of cone resting with base on HP**
>
> Step 72.1: Orthographic projection of a cone resting on its base in the HP. Top view shows a circle of diameter 40 mm divided into 8 equal sectors labeled clockwise from the left: 1, 8, 7, 6, 5, 4, 3, 2, with center apex o. Front view shows an isosceles triangle with base on the xy line, labeled 1', 2'(8'), 3'(7'), 4'(6'), 5', and apex o' at height 60 mm connected to base points by generators and an axis line. An info box next to the drawing states '72.1', 'D = 40', 'H = 60'.

> **Figure: Projection of a cone resting on a generator - Step 72.2**
>
> Step 72.2 of the projection of a cone. Given: D = 40 mm (base diameter), H = 60 mm (axis height). Reference line xy. Stage 1: Top view shows a circle of diameter 40 mm centered at o, divided into 8 equal parts labeled 1 through 8 counter-clockwise (1 at 9 o'clock, 3 at 6 o'clock, 5 at 3 o'clock, 7 at 12 o'clock). Front view shows an isosceles triangle resting with base 1'-5' on xy, apex o' at height 60 mm; base division points labeled 1', 2'(8'), 3'(7'), 4'(6'), 5'. Stage 2 (front view only): The cone is tilted such that generator 5'-o' lies horizontally on the xy line. The circular base 5'-1' is inclined to xy, with division points 5', 4'(6'), 3'(7'), 2'(8'), 1'. Lines are drawn from base points to apex o' on the xy line.

> **Figure: Projection of a cone resting on a generator - Step 72.3**
>
> Step 72.3 of the projection of a cone. Given: D = 40 mm, H = 60 mm. Stage 1 shows the cone in simple position (top view circle divided into 8 parts; front view triangle standing on xy). Stage 2 shows the front view with generator 5'-o' lying on the xy line, points labeled 5', 4'(6'), 3'(7')p', 2'(8'), 1' along the base and o' on xy. Below xy, the top view of the tilted cone is drawn by projecting vertically downwards from the stage 2 front view and horizontally from the stage 1 top view: the base forms an ellipse with points 1, 2, 3, 4, 5, 6, 7, 8 and center p, and tangent outline generators connect the base ellipse to the apex o.

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

**Answer:** Apparent inclination $\beta \approx 43^\circ$; projections completed with true axis angle $\phi = 40^\circ$ to VP.

---

#### Problem 73: Cone Lying on Generator – Axis on Profile Plane
**Given:** Cone, base diameter $d = 40\text{ mm}$, height $h = 60\text{ mm}$, resting on a generator on HP, axis lying in a profile plane (perpendicular to both HP and VP), base visible in front view, apex touching VP.  
**Find:** Orthographic projections.

**Solution**
1. Draw simple position: top view circle $\varnothing 40\text{ mm}$ divided into 8 points; front view isosceles triangle on $xy$ with axis height $60\text{ mm}$.
2. Tilt front view into Stage 2 with generator $o'-5'$ on $xy$, and project the top view showing the elliptical base.
3. In Stage 3, orient the top view such that the axis is perpendicular to $xy$ ($90^\circ$ to VP) with apex $o$ placed directly on the $xy$ reference line (touching VP).
4. Project vertical lines upward from the Stage 3 top view and horizontal lines from the Stage 2 front view.
5. Connect the plotted base points to form the visible base ellipse facing forward and draw tangent generators from $o'$ on $xy$ to complete the final front view.

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

**Answer:** Final projections with axis on profile plane ($90^\circ$ to $xy$) and apex $o'$ touching the reference line.

---

### Quick recall
- Lying on a lateral face requires an initial base edge perpendicular to the vertical tilting plane; lying on a lateral edge requires an initial corner on the center axis.
- When a cone lies on a generator, its front view is an isosceles triangle rotated until one extreme generator lies collinear with $xy$.
- Always inspect whether the Stage 3 angle is for the "axis" (true inclination $\phi$, requires locus) or for the "top view of the axis / vertical plane" (apparent angle $\beta$, direct copy).
- In the top view of a cone lying on HP, the circular base is projected as an ellipse whose minor axis equals $d\sin\alpha$ and major axis equals base diameter $d$.

<!-- page 8 | Special Orientations, Inverted Solids, and Freely Suspended Bodies -->

## Special Orientations, Inverted Solids, and Freely Suspended Bodies

### What you need
- For a freely suspended solid, the suspension line connecting the suspension point to the center of gravity ($G$) hangs strictly vertical ($\,\perp xy\,$ in front view).
- The center of gravity of a pyramid of axis height $H$ lies on the axis at $h_G = \frac{H}{4}$ from the base.
- When a lateral edge or slant face is vertical, tilt the front view so that the specific edge/slant line forms $90^\circ$ with the reference line $xy$.
- A cube has four body diagonals of length $s\sqrt{3}$; in a corner-resting orientation, tilting a body diagonal parallel to HP makes it ready to turn perpendicular to VP.

### The method
1. **Simple Position**: Draw the base on HP or apex on HP as specified, orienting key edges (resting edge perpendicular to $xy$ or base diagonal parallel/perpendicular to $xy$).
2. **Identify Reference Features**: Mark the apex, corners, axis midpoint, or center of gravity $G$ ($H/4$ above base on the axis).
3. **Stage 2 (Tilt to HP)**: Re-draw the front view according to the condition (suspension line $O'G'$ or $A'G'$ vertical, slant edge vertical, or body diagonal horizontal). Project vertically downward and horizontally from the first top view to obtain the Stage 2 top view.
4. **Stage 3 (Turn to VP)**: Reproduce the Stage 2 top view rotated at the specified angle (apparent angle directly, or true inclination via locus construction). Project vertically upward and horizontally from Stage 2 front view to complete the final front view.

---

### Problems

#### Problem 60: Square Pyramid – Triangular Face Parallel to VP
**Given:** Square pyramid, base edge $40\text{ mm}$, height $60\text{ mm}$, resting on base edge on HP, slant triangular face containing the resting edge is parallel to VP, base visible in front view.  
**Find:** Complete projections.

**Solution**
1. Draw the top view in simple position below $xy$: a square $a-b-c-d$ of side $40\text{ mm}$ with edge $b-c$ perpendicular to $xy$ on the right.
2. Project front view $a'(d')-b'(c')-o'$ on $xy$ with axis height $60\text{ mm}$.

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

3. Tilt the front view around resting edge $b'(c')$ such that the slant edge/face $o'-b'(c')$ is perpendicular to $xy$ ($90^\circ$) with the base facing upwards (base visible).

> **Figure: Orthographic projection of a square pyramid, Step 60.2**
>
> Step 60.2 of orthographic projection of a square pyramid with base side B = 40 mm and height H = 60 mm.
> Left (Initial position):
> - Front view: Isosceles triangle with base a'(d')-b'(c') on reference line xy and apex o', height dimensioned as 60 mm. Vertical chain line represents axis.
> - Top view: Square a-b-c-d with diagonals meeting at apex o, dimensioned as square 40 (□40).
> Right (Second position front view):
> - Front view tilted such that slant edge o'-b'(c') is perpendicular to the reference line xy (marked with a 90° arc between xy and edge o'-b'(c')). Slant base a'(d')-b'(c') is elevated above xy at a'(d').
> Annotations box: '60.2', 'B = 40', 'H = 60', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

4. Project downwards from the tilted front view and horizontally from the initial top view to construct the second top view.

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

5. For the final orientation, turn the second top view so that the triangular face containing the resting edge lies parallel to the reference line $xy$.

> **Figure: Orthographic projection stages of a square pyramid (Problem 60.4)**
>
> Orthographic projection of a square pyramid with base side B = 40 mm and axis height H = 60 mm. Stage 1 (Initial position): Front view is an isosceles triangle a'(d')-b'(c')-o' on the XY line with base 40 mm and vertical axis height 60 mm. Top view is a square base a-b-c-d of side 40 mm with diagonals meeting at apex o. Stage 2: Front view tilted such that slant edge o'-b'(c') is perpendicular to the XY line (indicated by a right-angle symbol at b'(c')). Corresponding top view is projected with apex o on the right. Stage 3: Top view rotated such that edge c-b is at the top with apex o on it, and corners d and a are at the bottom. The final front view is not drawn. Given box: B = 40, H = 60. Notation: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

6. Project upward from the rotated top view and horizontally from the second front view to obtain the final front view.

> **Figure: Complete orthographic projection of a square pyramid (Problem 60.5)**
>
> Complete three-stage orthographic projection of a square pyramid with base side B = 40 mm and axis height H = 60 mm. Stage 1: Front view triangle a'(d')-b'(c')-o' resting on XY line, base 40 mm, height 60 mm. Top view square a-b-c-d (40 mm) with apex o at the center. Stage 2: Pyramid tilted with slant edge o'-b'(c') perpendicular to XY line (with a right-angle symbol at b'(c')). Top view projected below. Stage 3: Top view rotated such that edge c-b is horizontal at top with apex o, corners d and a at bottom. Final front view is projected above XY: apex o' is connected to base corners d', c', b', a'; visible outlines and edges are solid, hidden edges to inner corners are shown dashed. Given box: B = 40, H = 60. Notation: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** Base visible in front view, triangular face parallel to VP.

---

#### Problem 197: Pentagonal Pyramid – Face Perpendicular to HP
**Given:** Pentagonal pyramid, base edge $30\text{ mm}$, height $60\text{ mm}$, resting on HP on one base edge with the face containing that edge perpendicular to HP, resting base edge parallel to VP and nearer to it.  
**Find:** Complete three-stage projections.

**Solution**
1. In the first stage top view, draw a regular pentagon $a-b-c-d-e$ of side $30\text{ mm}$ with edge $a-e$ on the left perpendicular to $xy$.

> **Figure: Step 197.1: Initial projection of pentagonal pyramid**
>
> Step 197.1 showing the first stage of projection of a regular pentagonal pyramid. A data box on the left reads: '197.1', 'B = 30', 'H = 60'. Reference ground line is marked 'x' on the left and 'y' on the right.
> - Top View (below xy line): A regular pentagon with base edge a-e positioned vertically on the left (dimensioned 30 mm). Apex o is at the center, connected to vertices a, b, c, d, e by slant edges.
> - Front View (above xy line): Triangular elevation resting on the xy line with base vertices a'(e'), b'(d'), and c'. Slant edges connect to apex o' at a vertical height dimensioned as 60 mm.
> - Projection lines: Thin vertical projectors connect corresponding vertices between the top and front views.
> - Notes below the drawing: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. Project upward to construct the front view triangle $a'(e')-b'(d')-c'-o'$ with axis height $60\text{ mm}$ resting on $xy$.

> **Figure: Projection of a pentagonal pyramid, step 197.2**
>
> Step 197.2 of the projection of a pentagonal pyramid (base side B = 30 mm, height H = 60 mm). 
> Left (initial position): 
> - Top view: regular pentagon a-b-c-d-e with vertical side a-e = 30 mm on the left, corner c on the right, and apex o at the center connected to all vertices.
> - Front view: base a'(e')-b'(d')-c' lying on the reference line x-y. Apex o' is on the central axis at height 60 mm above the base. Triangular faces are shown bounded by o'-a'(e'), o'-b'(d'), and o'-c'.
> Right (second stage - front view tilted):
> - The front view is tilted such that the slant edge o'-a'(e') becomes vertical (perpendicular to x-y). The base a'(e')-c' is inclined, with midpoint b'(d') along the base edge. Apex o' is at the top directly above a'(e').
> Labels and parameters box: '197.2', 'B = 30', 'H = 60', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

3. Tilt the front view about $a'(e')$ such that the slant face edge $o'-a'(e')$ is perpendicular to $xy$ ($90^\circ$). Project vertically downward and horizontally to draw the Stage 2 top view.

> **Figure: Projection of a pentagonal pyramid, step 197.3**
>
> Step 197.3 of the projection of a pentagonal pyramid (base side B = 30 mm, height H = 60 mm). 
> Left (initial position): 
> - Identical to step 197.2: top view pentagon a-b-c-d-e (side a-e = 30 mm vertical on left) with apex o; front view on x-y line with base a'(e')-b'(d')-c' and apex o' at height 60 mm.
> Right (second stage - full projection):
> - Front view: tilted such that slant edge o'-a'(e') is perpendicular to the x-y line. Base line a'(e')-b'(d')-c' is tilted up towards the right.
> - Top view: projected from the tilted front view and horizontal projectors from the initial top view. Base points a, e form a vertical line on the left below a'(e'); apex o is located between a and e; points d, c, b are projected to form the distorted pentagonal base; visible edges and base outline are drawn with thick continuous lines.
> Labels and parameters box: '197.3', 'B = 30', 'H = 60', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

4. Re-draw the second top view so that the resting edge $a-e$ is parallel to $xy$ and positioned nearer to the reference line.

> **Figure: Orthographic projection of a pentagonal pyramid, stages 1 and 2 with rotated top view**
>
> Step of worked solution for problem 197.4. Given parameters: base edge B = 30 mm, axis height H = 60 mm; Scale 1:1, all dimensions in mm.
> - Stage 1 (Initial position): Front view is an isosceles triangle with base a'(e') to c' on the xy line and apex o' at height 60 mm. Base edge a'(e')-b'(d')-c' with axis shown as a center line. Top view is a regular pentagon a-b-c-d-e with edge a-e of length 30 mm perpendicular to xy on the left, with all corners connected to apex o.
> - Stage 2 (First tilt): Front view tilted such that edge o'-a'(e') is vertical (perpendicular to xy line), base a'(e')-c' inclined to HP. Below xy, the top view is projected from this front view and Stage 1 top view, showing apex o and vertices a, b, c, d, e.
> - Stage 3 (Incomplete): Top view reproduced to the right, rotated so that edge a-e is horizontal at the top with apex o positioned on line a-e.

5. Project vertically upward to meet horizontal projectors from the second front view to complete the final front view.

> **Figure: Complete three-stage orthographic projection of a pentagonal pyramid**
>
> Completed worked solution for problem 197.4. Given parameters: B = 30 mm, H = 60 mm; Scale 1:1, all dimensions in mm.
> - Stage 1: Front view triangle (height 60 mm) on xy line labeled a'(e'), b'(d'), c', o'. Top view regular pentagon (edge 30 mm) labeled a, b, c, d, e, o.
> - Stage 2: Front view tilted with edge o'-a'(e') vertical to xy. Top view projected below xy with apex o connected to base corners.
> - Stage 3: Top view redrawn with base edge a-e horizontal at the top. The final front view is projected above the xy line, showing apex o' at the top, visible base outline b'-a'-e'-d' and slant edges o'-b', o'-d', with hidden lines drawn dashed connecting to rear base corner c' and edges.

**Answer:** Resting edge $a-e = 30\text{ mm}$ parallel to VP; face $o-a-e$ perpendicular to HP.

---

#### Problem 61: Square Pyramid – Lateral Edge Perpendicular to HP
**Given:** Square pyramid, base edge $40\text{ mm}$, height $60\text{ mm}$, resting on a base corner on HP, lateral edge containing resting corner perpendicular to HP, faces containing the edge equally inclined to VP, base visible.  
**Find:** Projections.

**Solution**
1. Draw the top view square $a-b-c-d$ ($40\text{ mm}$) with diagonals horizontal and vertical so corners $a$ and $c$ lie along the horizontal center line.

> **Figure: Step 61.1: Initial projection of square pyramid with base corner on HP**
>
> Step 61.1 orthographic projection of a square pyramid in simple position. Reference line labeled x-y. Below the xy line (top view), a square of base side dimensioned as '□40' is oriented with diagonals horizontal and vertical; corners labeled 'a' (left), 'b' (bottom), 'c' (right), 'd' (top), and center apex 'o'. Thin vertical projectors extend from the top view to the xy line: corner 'a' to 'a'', corners 'b' and 'd' to 'b' (d')', and corner 'c' to 'c''. Above the xy line (front view), the base lies on the xy line from a' to c' with b'(d') at the center. Apex o' is projected at a vertical height dimensioned as '60' directly above b'(d'), forming an isosceles triangular elevation a'-o'-c' with an axis/edge line o'-b'(d'). Beside the drawing, a small info box is labeled '61.1' with 'B = 40' and 'H = 60'. Text at the bottom states 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Project front view $a'-b'(d')-c'-o'$ with apex height $60\text{ mm}$ and base $a'-c'$ on $xy$.

> **Figure: Projection of a square pyramid, step 61.2**
>
> Step 61.2 showing the tilt of a square pyramid in the front view. Box details: B = 40, H = 60. First stage: Front view is a triangle of base 40 mm (represented by corner points a' to c' on the xy line with central axis/projector through b'(d')) and height 60 mm to apex. Top view is a square oriented with diagonals along horizontal/vertical (rhombus orientation with corners a, b, c, d and center o), side length 40 mm (labeled with square symbol 40). Second stage: Front view is tilted so that the slant edge o'-c' is vertical, making an angle of 90° with the xy ground line, with apex o' at the top and base corners a', b'(d'), and corner c' resting on the xy line. Note below reads: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. Tilt the front view around resting corner $c'$ until slant edge $o'-c'$ is vertical ($90^\circ$ to $xy$).

> **Figure: Projection of a square pyramid, step 61.3**
>
> Step 61.3 showing projection of the top view from the tilted front view. Box details: B = 40, H = 60. First stage: Same initial front and top views (height 60, base side 40). Second stage: Front view has the pyramid tilted such that slant edge o'-c' is at 90° to the xy line, resting on c'. Vertical projectors are drawn downward from a', b'(d'), and o'/c', and horizontal projectors are drawn from the first stage top view (from d, a, c, and b) to construct the new top view with vertices a, b, c, d and apex o coinciding with c (labeled o(c)). Note below reads: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

4. Project downward and horizontally to construct the Stage 2 top view; outline the outer boundary and draw visible edges of the upward-facing base.

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

5. Complete the final projection with faces containing the vertical edge equally inclined to VP.

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

**Answer:** Lateral edge $o'-c' \perp xy$; base fully visible from the front.

---

#### Problem 62: Square Pyramid Resting on Apex on HP – Vertical Slant Edge
**Given:** Square pyramid, base $40\text{ mm}$, height $60\text{ mm}$, resting on apex on HP, slant edge vertical, triangular face containing the slant edge perpendicular to VP, base visible in front view.  
**Find:** Projections of the inverted pyramid.

**Solution**
1. Draw the initial front view inverted: apex $o'$ on $xy$ and base $a'-c'$ horizontal at height $60\text{ mm}$. In top view, draw the base square $a-b-c-d$ with corner orientation.

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

2. Tilt the front view about apex $o'$ until slant edge $o'-c'$ becomes perpendicular to $xy$ ($90^\circ$).

> **Figure: Step 62.2: Projection of a square pyramid with axis/slant edge inclined to HP**
>
> Step 62.2 of the projection of an inverted square pyramid. Left: initial front view showing base a'-c' horizontal of height H = 60 above apex o' on the reference line xy, with middle edge b'(d'). Below xy, the top view shows the base as a rhombus/square standing on corner with side dimension 40 mm (labeled □40), vertices a, b, c, d, and apex o at the center with dashed/chain lines. Right: second front view tilted such that slant edge o'-c' is perpendicular to the xy line (vertical), with base vertices a', b'(d'), c' and apex o' on xy. Parameters in box: B = 40, H = 60. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. Project points downward to intersect horizontal lines from the initial top view to plot the tilted top view.

> **Figure: Step 62.3: Final top view projection of the square pyramid**
>
> Step 62.3 of the projection of an inverted square pyramid. Left: initial front and top views (B = 40, H = 60, side □40). Right: front view tilted with slant edge o'-c' vertical on the xy line. Projectors are drawn downwards from front view vertices a', b'(d'), c', o' and horizontal projectors from the first top view vertices a, b, c, d to construct the second top view. The resulting top view shows corners a, b, c(o), d with visible edges drawn as solid lines. Parameters in box: B = 40, H = 60. Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

4. Rotate the top view such that the triangular face containing the vertical slant edge is perpendicular to VP.

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

5. Project upward to intersect horizontal projectors from the second front view to establish the final front view.

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

**Answer:** Slant edge $o'-c'$ vertical ($90^\circ$ to HP); apex $o'$ on HP.

---

#### Problem 82: Cube – Body Diagonal Perpendicular to VP
**Given:** Cube of $40\text{ mm}$ edge, resting on one corner on HP, body diagonal perpendicular to VP.  
**Find:** Projections in three stages.

**Solution**
1. In top view, draw square $a(1)-b(2)-c(3)-d(4)$ with edge $40\text{ mm}$ inclined at $45^\circ$ to $xy$. Project front view rectangle of height $40\text{ mm}$ on $xy$.

> **Figure: Step 82.1: Initial projection of a 40 mm cube**
>
> Step 82.1 showing the initial front view and top view of a cube with 40 mm edge. The top view is oriented as a square with edges inclined at 45° to the reference line, labeled corners a(1) on the left, b(2) at the bottom, c(3) on the right, and d(4) at the top. The side is dimensioned as '□40'. Projectors extend up to the horizontal reference line xy. The front view is drawn resting on xy, spanning from projector of a(1) to c(3), with base points labeled 1', 2'(4'), 3' and top points labeled a', b'(d'), c'. A faint line connects corner 1' to opposite corner c' representing the body diagonal. Label 'B = 40' is indicated above the front view. Notes state 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Identify body diagonal $1'-c'$. Tilt the front view about resting corner $3'$ so that body diagonal $1'-c'$ becomes parallel to the $xy$ line.

> **Figure: Projection of a solid - Step 82.2: Initial views and tilted front view**
>
> Step 82.2 of the orthographic projection of a cube (side 40 mm):
> - Given box: 'B = 40'.
> - Stage 1 (Initial position):
>   - Top view: Square of side 40 mm inclined at 45° to the reference line xy, corners labelled a(1) at left, b(2) at bottom, c(3) at right, d(4) at top. Dimension '□40' along side a-b.
>   - Front view: Rectangle on reference line xy with base corners 1' (left), 2'(4') (middle), 3' (right) and top corners a' (left), b'(d') (middle), c' (right). A diagonal is drawn from corner 1' to c', and a perpendicular is dropped from corner 3' to meet the diagonal at point h' with a right-angle symbol.
> - Stage 2 (Tilted front view):
>   - The front view is redrawn tilted such that the body diagonal 1'-c' is horizontal (parallel to xy), resting on corner 3' on the xy line. The perpendicular from 3' to h' on 1'-c' is vertical. Corners are labelled 1', 2'(4'), 3', a', b'(d'), and c'.

3. Project downward to establish the second top view; the body diagonal $1-c$ now shows its true length parallel to $xy$.

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

4. Reproduce the second top view rotated by $90^\circ$ so that the body diagonal $1-c$ is perpendicular to $xy$.

> **Figure: Orthographic projections of a cube (side 40 mm) - Step 82.4**
>
> Solution step 82.4 showing orthographic projections of a cube with edge 40 mm (B = 40). Scale 1:1, dimensions in mm. The drawing contains three stages across the reference line x-y: Stage 1 (left): Initial top view is a square tilted at 45° to XY with corners a(1), b(2), c(3), d(4), dimensioned 40 mm (square symbol 40). Front view above XY shows base corners 1', 2'(4'), 3' on the XY line and top face a', b'(d'), c'. Body diagonal 1'-c' is drawn with a perpendicular from b'(d') meeting it at h' (right angle marked). Stage 2 (center): The cube is tilted such that corner 3' rests on the XY line and the body diagonal is tilted. Top view is projected downward from the tilted front view and horizontally from stage 1, forming an apparent hexagonal silhouette with vertices 1, 4, d, c, b, 2 and internal vertices a and 3, with visible (solid) and hidden (dashed) edges. Stage 3 (right): The top view is reproduced/rotated to a specified inclination to the VP, with vertices 1, 2, b, c, d, 4, a, 3 and dashed edges shown; the final front view is not yet drawn in this step.

5. Project vertically upward and horizontally from the second front view to draw the final front view.

> **Figure: Orthographic projections of a cube (side 40 mm) - Complete Step 82.5**
>
> Solution step 82.5 showing the completed orthographic projection of the cube with side 40 mm (B = 40). Scale 1:1, dimensions in mm. Consists of three stages: Stage 1 (left): Identical to 82.4, showing initial front and top views with square side 40 mm, corners a(1), b(2), c(3), d(4), front view 1', 2'(4'), 3' and a', b'(d'), c', diagonal 1'-c' with normal from b'(d') to h'. Stage 2 (center): Identical to 82.4, showing front view tilted on corner 3' and projected intermediate top view. Stage 3 (right): Complete final projection. Bottom part is the rotated top view with vertices 1, 2, b, c, d, 4, a, 3. Top part is the completed final front view projected vertically from stage 3 top view and horizontally from stage 2 front view, showing vertices labelled a', b', c'(1'), d', 2', 3', 4' with solid boundary lines, internal solid lines, and dashed hidden lines.

**Answer:** Body diagonal $1-c \perp$ VP; final front view is a regular hexagon.

---

#### Problem 64: Suspended Triangular Pyramid – Top View Inclined
**Given:** Triangular pyramid, base edge $40\text{ mm}$, height $60\text{ mm}$, freely suspended from a base corner, axis top view inclined $50^\circ$ to $xy$.  
**Find:** Orthographic projections.

**Solution**
1. Draw the triangular pyramid in simple position with base on $xy$. Locate center of gravity $g'$ on the axis at $\frac{H}{4} = \frac{60}{4} = 15\text{ mm}$ above base.

> **Figure: Projection of triangular pyramid in simple position (Step 64.1)**
>
> Step 64.1 of the projection of a triangular pyramid:
> - A given box specifies: 'B = 40', 'H = 60'.
> - Front view (above the xy-line): An isosceles triangle with base corners a' and b'(c') resting on the xy reference line. Base edge a'b'(c') is horizontal. The apex is labeled o' at a vertical height of 60 mm from the base. A dashed centerline extends vertically from the base through the center of gravity g' (located at height 60/4 = 15 mm above the base) to the apex o'.
> - Top view (below the xy-line): An equilateral triangle with corners a on the left, and vertical edge bc on the right (c at top, b at bottom). Base edge ab has dimension 40 mm. Apex o is at the centroid, with slant edges connecting o to a, o to b, and o to c.
> - Vertical projector lines connect corners a to a', b and c to b'(c'), and apex o to axis line/o'.

2. Join suspension corner $a'$ to $g'$. Tilt the front view such that suspension line $a'-g'$ is vertical (perpendicular to $xy$).

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

3. Project downward from the tilted front view to obtain the Stage 2 top view.

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

4. Re-draw the top view so that the axis makes an apparent angle of $50^\circ$ with $xy$.

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

5. Project upward from the rotated top view and horizontally from the tilted front view to complete the final front view.

> **Figure: Completed orthographic projection of a triangular pyramid - Step 64.5**
>
> Step 64.5 showing the complete three-stage projection of the triangular pyramid (B = 40 mm, H = 60 mm).
> 1. First stage: Front view of height 60 mm with base on x-y line, center of gravity g' at 15 mm (60/4), and equilateral triangular top view of base edge 40 mm.
> 2. Second stage: Tilted front view resting on apex o' with base b'(c') tilted, and the corresponding top view projected downwards.
> 3. Third stage: Top view rotated at 50° to the horizontal/projector line, and projectors drawn vertically upward intersecting horizontal projectors from stage 2 to construct the final front view. In the final front view, visible edges connect apex a' to b', c', and o', while base edge b'-c' is drawn as a hidden dashed line.
> Note: Scale 1:1, all dimensions are in mm.

**Answer:** Suspension line $a'-g' \perp xy$; top view of axis inclined $50^\circ$ to VP.

---

#### Problem 65: Suspended Square Pyramid – Axis Inclined to VP (Locus Problem)
**Given:** Square pyramid, base edge $40\text{ mm}$, height $60\text{ mm}$, freely suspended from base corner, axis inclined $30^\circ$ to VP.  
**Find:** Projections using locus method.

**Solution**
1. Draw simple position: front view triangle on $xy$, top view square with horizontal diagonal. Locate $g'$ on the axis at $15\text{ mm}$ above base; join corner $c'$ to $g'$.

> **Figure: Step 65.1: Initial front and top views of the square pyramid resting on HP**
>
> Initial orthographic projection step 65.1 of a square pyramid resting on HP:
> - Front view (above reference line xy): Triangular view with apex o' at top and base along xy. Base corners are labelled a' (left), b'(d') (center), and c' (right). Total height of the pyramid is dimensioned as 60 mm. The center of gravity g' is located on the axis at a height of 60/4 = 15 mm above the base. A line connects corner a' to g' to represent the suspension line from corner a'.
> - Top view (below xy): Square base oriented diagonally with corners a (left), b (bottom), c (right), and d (top). The center apex o connects to all four corners. One edge is dimensioned as □40 mm.
> - Annotations: Box containing '65.1' with 'B = 40' and 'H = 60'. Scale note at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. Tilt front view such that line of suspension $c'-g'$ is vertical (perpendicular to $xy$).

> **Figure: Step 65.2: Projection of a square pyramid tilted in front view**
>
> Step 65.2 showing projection of a square pyramid with base side B = 40 mm and height H = 60 mm. Left side shows simple position: top view is a square oriented as a rhombus with diagonal horizontal and vertical, labeled corners a (left), b (bottom), c (right), d (top), and apex o (center), side dimension labeled □40. The front view sits on XY line with base a'-b'(d')-c' and apex o' at height 60 mm. Point g' is located on the axis b'(d')-o' at a height of 60/4 = 15 mm from the base. Right side shows the tilted front view with vertices labeled c' (left), b'(d') on edge c'a', a' (top apex of the triangle), o' (right), and internal point g'.

3. Project downward to draw the Stage 2 top view. Measure the reduced (apparent) axis length $o-p$.

> **Figure: Step 65.3: Projection of a square pyramid with second stage top view**
>
> Step 65.3 showing the complete two-stage projection of the square pyramid (B = 40 mm, H = 60 mm). The left stage is identical to step 65.2 (top view square base of side 40 mm with corners a, b, c, d and center o; front view a'-b'(d')-c' to apex o' with height 60 mm, and point g' at height 15 mm). The second stage shows the tilted front view (vertices c', b'(d'), a', o', and point g') and projects downward to obtain the second-stage top view: corners are labeled c (leftmost), d (top), b (bottom), a (inside), and apex o (rightmost). Slant edges d-o, b-o, c-d, c-b, d-a, b-a are drawn, with edge c-a shown as a dashed (hidden) line.

4. Since true angle $\phi = 30^\circ$ to VP is given, construct the locus for the apparent top view axis length to determine apparent angle $\beta = 35^\circ$.

> **Figure: Step 65.4: Orthographic projection of a square pyramid up to inclined top view**
>
> Orthographic projection stages of a square pyramid with base side B = 40 mm and height H = 60 mm.
> - Stage 1 (Simple position): Front view is an isosceles triangle a'o'c' of height 60 mm resting on the xy line. Point p' is at the base on the vertical axis, and point g' is located at a height of 60/4 = 15 mm above the base. Top view is a diamond/square of side 40 mm with vertices a (left), b (bottom), c (right), and d (top), and apex o(p) at the center.
> - Stage 2: Front view is tilted so that apex o' rests on the xy line, with base corner c' and apex a' elevated, showing points c', b'(d'), a', p', and g'. Projectors drop down to form the tilted top view showing base quadrilateral a-b-c-d and apex o.
> - Stage 3: Top view is reproduced rotated such that the axis/slant edge is inclined at 30° to the xy line (with note 'APPARENT ANGLE - 35°'), showing points a, b, c, d, p, o, and o1.
> - Labels include: 'B = 40', 'H = 60', 'APPARENT ANGLE - 35°', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

5. Draw the Stage 3 top view with axis oriented along the apparent angle $\beta = 35^\circ$, and project upward to complete the final front view.

> **Figure: Step 65.5: Complete three-stage orthographic projection of the square pyramid**
>
> Complete orthographic projection of a square pyramid (B = 40 mm, H = 60 mm):
> - Stages 1 and 2 are identical to step 65.4.
> - Stage 3 Top View: Tilted at an inclination of 30° to the xy line with an apparent angle of 35°, showing points a, b, c, d, p, o, and o1.
> - Stage 3 Front View: Projectors drawn vertically upwards from the rotated top view to intersect horizontal projectors from the second stage front view, constructing the final front view. Apex o' lies on the xy line. Visible outer profile is formed by solid lines connecting c'-b'-a'-o'-c'. The hidden corner d' and edges connecting d' to a', c', and o' are drawn with dashed lines.
> - Labels include: 'B = 40', 'H = 60', 'APPARENT ANGLE - 35°', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Watch out.** The true axis inclination of $30^\circ$ requires a locus because the axis tilts in Stage 2, yielding an apparent angle $\beta = 35^\circ$ in top view.

**Answer:** Apparent inclination in top view $\beta = 35^\circ$; true axis inclination $\phi = 30^\circ$.

---

### Quick recall
- Pyramidal center of gravity is always at $h_G = \frac{H}{4}$ along the axis from the base.
- In suspension problems, the line connecting the suspension point to $G$ must be drawn perpendicular to $xy$ in the front view.
- When a body diagonal of a cube is perpendicular to VP, the final front view projects as a regular hexagon.
- If a solid is inverted on its apex, apex $o'$ rests on the reference line $xy$ and the base extends upward.

<!-- page 9 | Solids Resting on or Inclined Initially to the Vertical Plane -->

## Solids Resting on or Inclined Initially to the Vertical Plane

### What you need
- **True shape on VP:** When a solid rests with its base on or parallel to the VP, its base shows true shape in the front view (FV) above XY.
- **Simple position top view:** The initial top view (TV) below XY is a rectangle (prisms/cylinders) or triangle (pyramids/cones) with base on or parallel to XY.
- **Inclination to VP ($\phi$):** Applied in the top view by tilting the solid's axis or resting feature at angle $\phi$ to the XY line.
- **Inclination to HP ($\theta$):** Applied in the front view by tilting the Stage 2 FV at angle $\theta$ (or apparent angle $\alpha$) to the XY line.
- **Locus rule in FV:** When true angles to both planes ($\phi$ to VP and $	heta$ to HP) are given, apparent axis length $L_1$ from Stage 2 FV is rotated onto the HP locus line at height $L\sin\theta$: $\sin\alpha = \frac{L\sin\theta}{L_1}$.

### The method
1. Draw the Stage 1 FV above XY showing the true base shape, orienting the resting edge or corner on the reference line.
2. Project downward to draw the Stage 1 TV below XY with axis perpendicular to XY and base on or parallel to XY.
3. Tilt the solid in TV to the given inclination $\phi$ to VP (or place the resting generator or face on XY).
4. Project vertically upward from Stage 2 TV and horizontally from Stage 1 FV to construct the Stage 2 FV.
5. Incline the Stage 2 FV to XY at the specified angle to HP, constructing a locus if a true angle $\theta$ is given.
6. Project downward from Stage 3 FV and horizontally from Stage 2 TV to construct the final TV, applying visibility rules.

### Problems

#### Problem 81: Square Prism Resting on Base Edge on VP
**Given:** Base side $s = 40\text{ mm}$, length $h = 80\text{ mm}$, base edge on VP, axis inclined at $30^\circ$ to VP, resting base edge inclined at $40^\circ$ to HP.  
**Find:** Orthographic projections through three stages.

**Solution**
1. Draw reference line XY. Above XY, draw a square of side $40\text{ mm}$ with vertical edge $b'(2')-c'(3')$ representing the resting base edge. Label vertices $a'(1')$, $b'(2')$, $c'(3')$, $d'(4')$.
2. Project downward to XY. Draw a rectangle of $40\text{ mm} \times 80\text{ mm}$ below XY with base edge $1(4)-2(3)$ lying on XY and lateral faces extending $80\text{ mm}$ downward to end base $a(d)-b(c)$.
3. Redraw the top view tilted such that the axis is inclined at $30^\circ$ to XY, keeping corner $2(3)$ touching XY.
4. Project upward from Stage 2 TV to intersect horizontal projectors from Stage 1 FV, completing the Stage 2 FV.
5. In Stage 3, reproduce the Stage 2 FV with the resting edge $2'3'$ tilted at $40^\circ$ to XY.
6. Project downward from Stage 3 FV and horizontally from Stage 2 TV to construct the final top view.

> **Figure: Step 81.1: Initial projection of square prism with base on VP**
>
> Step 81.1 shows the initial projections of a square prism:
> - Horizontal reference line labelled 'x' on the left and 'y' on the right.
> - Front view (above xy): A square of side 40 mm with vertices labelled top-left a'(1'), top-right b'(2'), bottom-right c'(3'), and bottom-left d'(4'). The top side is dimensioned as '□40'.
> - Top view (below xy): A rectangle of width 40 mm and length 80 mm aligned vertically with the front view. The top base edge lies on the xy line with vertices labelled 1(4) at the left and 2(3) at the right. The lower base edge has vertices labelled a(d) at the left and b(c) at the right. The axial length is dimensioned as 80 mm on the right.
> - A given box to the left contains: '81.1', 'B = 40', 'H = 80'.
> - Bottom text: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

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

**Answer:** Completed three-stage projections of the square prism with axis inclined $30^\circ$ to VP and resting edge at $40^\circ$ to HP.

---

#### Problem 74: Cone Resting on Base Point on VP
**Given:** Cone diameter $d = 40\text{ mm}$, height $h = 60\text{ mm}$, base point touches VP, axis inclined at $30^\circ$ to VP, front view of axis inclined at $45^\circ$ to HP.  
**Find:** Orthographic projections.

**Solution**
1. Draw Stage 1 FV above XY as a circle of diameter $40\text{ mm}$. Divide into 8 equal sectors marked $1'$ to $8'$ with center $o'$.
2. Project downward below XY to construct an inverted triangle of base length $40\text{ mm}$ on XY and apex $o$ at depth $60\text{ mm}$.
3. Revolve the top view about base point $5$ so the axis makes $30^\circ$ with XY, keeping point $5$ on XY.
4. Project upward from Stage 2 TV and horizontally from Stage 1 FV to obtain the Stage 2 FV (elliptical base with apex $o'$).
5. Incline the Stage 2 FV so that the front view axis makes $45^\circ$ to the XY line (direct tilt using apparent angle).
6. Project downward from Stage 3 FV and horizontally from Stage 2 TV to complete the final top view.

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

> **Figure: Projection of an inclined cone, step 74.2**
>
> Step 74.2 of cone projection with dimensions D = 40 mm, H = 60 mm. The reference line is labeled x-y. Above the xy line, the initial view shows a circle of diameter 40 mm divided into 8 equal sectors with center labeled o' and division points labeled 1' through 8' counter-clockwise starting from the left. Below the xy line, projectors from the circle define the base on the xy line with points labeled 1, 2(8), 3(7), 4(6), and 5 from left to right, converging to apex o at a height of 60 mm below the xy line. To the right, the cone is reproduced in an inclined position: base points labeled 1, 2(8), 3(7), 4(6), 5, with point 5 resting on the xy line; generator 5-o is inclined at an angle of 30° to the vertical downward projector from 5; generators connect the base points to apex o.

> **Figure: Projection of an inclined cone, step 74.3**
>
> Step 74.3 of cone projection with dimensions D = 40 mm, H = 60 mm. Shows the completed first two stages from 74.2 (initial views and inclined view below xy line) and projects to the corresponding view above the xy line. Projectors are drawn upward from the inclined cone points (1, 2(8), 3(7), 4(6), 5, and apex o) intersecting horizontal projectors from the initial circle (points 1' through 8' and o'). The resulting view above xy shows an elliptical base with visible half (solid line through 3', 2', 1', 8', 7') and hidden half (dashed line through 3', 4', 5', 6', 7'), and extreme contour generators connecting 3' and 7' to the apex o'.

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

> **Figure: Projection of a cone, completed step 74.5**
>
> Completed orthographic projections of the cone (D = 40 mm, H = 60 mm).
> - Stage 1: Front view is circle (diameter 40 mm) divided into 8 points (1' to 8'); top view is inverted triangle of height 60 mm with base on xy.
> - Stage 2: Top view rotated with axis at 30° to xy; front view base appears as an ellipse with apex o' to the right.
> - Stage 3 (Final projection):
>   - Front view: Reproduced with base inclined at 45° to xy, apex o' pointing upwards-right.
>   - Top view: Fully projected from Stage 3 FV and Stage 2 TV. Base appears as an ellipse with visible curve through points 1, 2, 3, 4, 5 and dashed/hidden curve through points 5, 6, 7, 8, 1, flanked by tangential contour generators connecting to apex o.
> - Box specifies: D = 40, H = 60.

**Answer:** Projections of the cone showing an elliptical front view tilted at $45^\circ$ and final top view.

---

#### Problem 76: Cone Resting on Generator on VP with Generator Inclined to HP
**Given:** Base diameter $d = 40\text{ mm}$, height $h = 60\text{ mm}$, resting on generator on VP, resting generator inclined at $40^\circ$ to HP, apex touching HP.  
**Find:** Projections of the cone.

**Solution**
1. Draw Stage 1 FV as a circle of diameter $40\text{ mm}$ above XY, divided into 8 sectors $1'$ through $8'$ with center $o'$.
2. Draw Stage 1 TV below XY as an inverted triangle of base $40\text{ mm}$ on XY and height $60\text{ mm}$ to apex $o$.
3. Revolve the TV so that generator $o-5$ lies entirely along the XY line.
4. Project upward from Stage 2 TV and horizontally from Stage 1 FV to complete the Stage 2 FV with apex $o'$ on XY.
5. Tilt the Stage 2 FV so that the resting generator on XY is inclined at $40^\circ$ to XY, keeping apex $o'$ on the reference line.
6. Project downward from Stage 3 FV and horizontally from Stage 2 TV to construct the final top view.

> **Figure: Step 76.1: Initial orthographic projection of the cone with base on VP**
>
> Step 76.1 of the projection of a cone. Beside the drawing is a box labeled '76.1' with 'D = 40' and 'H = 60'.
> - Front view (above horizontal line xy): A circle of diameter Ø40 with center marked o', divided into 8 equal sectors with points labeled 1', 2', 3', 4', 5', 6', 7', 8' along the circumference (1' at left, 3' at top, 5' at right, 7' at bottom).
> - Reference line: Horizontal line labeled x on the left and y on the right.
> - Top view (below xy line): Inverted triangular view of the cone with its base resting on the xy line. Vertical projector lines project points from the circle down to the base line: 1, 2(8), 3(7), 4(6), and 5. Apex is labeled o at the bottom, located at a height of 60 mm below the base line. Straight generator lines connect the apex o to base points 1, 2(8), 3(7), 4(6), and 5.
> - Bottom right notes: 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 76.2: Initial views and tilted top view of a cone**
>
> Step 76.2 of problem 76 for a cone with diameter D = 40 mm and height H = 60 mm.
> 1. Reference line xy separates the views.
> 2. Above the xy line: Initial front/top circle view of diameter 40 mm, center labeled o', divided into 8 equal sectors labeled 1' through 8' counterclockwise starting from the leftmost point (1' at left, 3' at top, 5' at right, 7' at bottom).
> 3. Below the xy line: Inverted triangular view with its base along the xy line from 1 to 5, marked with generator points 1, 2(8), 3(7), 4(6), 5. Apex o is at the bottom at height/length H = 60 mm.
> 4. To the right below the xy line: The cone's triangular view is tilted such that the generator 5-o lies along the xy line (point 5 at left, apex o on xy at right). The inclined base contains points 5, 4(6), 3(7), 2(8), 1.
> Data box: D = 40, H = 60.

> **Figure: Step 76.3: Final front view projection of the tilted cone**
>
> Step 76.3 of problem 76 for a cone with diameter D = 40 mm and height H = 60 mm.
> 1. Reference line xy separates the views.
> 2. Left side: Initial projection with circle (points 1' to 8', center o') above xy and inverted triangular view (base 1-5 on xy, apex o below) below xy.
> 3. Bottom right: Tilted top view with generator on xy, apex o on xy line, base inclined with points 5, 4(6), 3(7), 2(8), 1.
> 4. Top right: Final front view projected upwards from the tilted top view and across from the initial front view. The base is an ellipse with major and minor axes, labeled with points 1', 2', 3', 4', 5', 6', 7', 8'. Apex o' is connected to the extreme tangents of the elliptical base to form the cone outline.
> Data box: D = 40, H = 60.

> **Figure: Step 76.4: Projections of a cone with inclined axis**
>
> Step 76.4 of the orthographic projection of a cone of diameter D = 40 mm and height H = 60 mm. Stage 1: Front view above reference line xy shows a circle of diameter 40 mm divided into 8 equal parts labelled 1' to 8' (o' at center). Top view below xy shows an inverted triangle of height 60 mm with base 1-5 on the xy line and apex o pointing downwards. Stage 2: The cone is reoriented with its axis parallel to the VP and HP; front view shows apex o' and base points 1' through 8'; top view shows apex o on xy and base on the left. Stage 3: The front view is tilted such that the base/axis is inclined at 40° to the xy line with apex o' resting on xy. Dimensions box indicates D = 40, H = 60.

> **Figure: Step 76.5: Final top view projection of the inclined cone**
>
> Step 76.5 completing the projection of the cone (D = 40 mm, H = 60 mm). Stages 1 and 2 are identical to step 76.4. In Stage 3, the front view inclined at 40° to the reference line xy has projectors drawn down to meet horizontal projectors from the Stage 2 top view, constructing the final top view. The base appears as an ellipse with generator points 1, 2, 3, 4, 5, 6, 7, 8 plotted, and tangents drawn from apex o' on the xy line to the base ellipse. Dimensions box specifies D = 40, H = 60.

**Answer:** Three-stage projections of the cone resting on a generator on VP inclined at $40^\circ$ to HP.

---

#### Problem 75: Cone Lying on Generator on VP with Base Inclined to HP
**Given:** Base diameter $d = 40\text{ mm}$, height $h = 60\text{ mm}$, lying on generator on VP, base inclined at $60^\circ$ to HP, point on base circle on HP.  
**Find:** Projections of the cone.

**Solution**
1. Draw Stage 1 FV above XY as an isosceles triangle of base $40\text{ mm}$ on XY and height $60\text{ mm}$ to apex $o'$. Draw Stage 1 TV as a circle of diameter $40\text{ mm}$ divided into 8 equal parts.
2. In Stage 2, tilt the front view triangle so base $1'-5'$ rests on point $5'$ on XY and is inclined at $60^\circ$ to XY.
3. Project downward from Stage 2 FV and horizontally from Stage 1 TV to complete the Stage 2 TV.
4. In Stage 3, rotate the top view so that the resting generator lies on the XY line.
5. Project upward from Stage 3 TV and horizontally from Stage 2 FV to draw the final front view.

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

> **Key idea.** When the base inclination to HP is given before laying the generator on VP, execute the tilt to HP in front view during Stage 2, then place the generator on XY in top view during Stage 3.

**Answer:** Projections of the cone with base at $60^\circ$ to HP and generator lying on VP.

---

#### Problem 63: Hexagonal Pyramid Lying on Triangular Face on VP
**Given:** Regular hexagonal pyramid, base edge $s = 30\text{ mm}$, height $h = 60\text{ mm}$, triangular face lying on VP, base edge of this face inclined at $45^\circ$ to HP, resting on base corner on HP.  
**Find:** Projections of the pyramid.

**Solution**
1. Draw Stage 1 FV above XY as a regular hexagon of side $30\text{ mm}$ with vertical edge $c'-d'$ and apex $o'$ at the center.
2. Draw Stage 1 TV below XY as an inverted triangle of base length on XY and depth $60\text{ mm}$ to apex $o$.
3. Tilt Stage 1 TV so the slant face generator $o-c(d)$ lies on the XY line.
4. Project upward from Stage 2 TV and horizontally from Stage 1 FV to obtain the Stage 2 FV.
5. Redraw Stage 2 FV with base edge $c'd'$ inclined at $45^\circ$ to XY, keeping the lowest base corner on XY.
6. Project downward from Stage 3 FV and horizontally from Stage 2 TV to complete the final top view, drawing visible edges as solid lines and hidden edges as dashed lines.

> **Figure: Step 63.1: Simple position projections of a hexagonal pyramid**
>
> Step 63.1 showing initial projections of the hexagonal pyramid:
> - A label box on the left shows: '63.1', 'B = 30', 'H = 60'.
> - Front View (above reference line xy): Regular hexagon with vertices labeled counterclockwise starting from the leftmost corner: a', b' (top), c' (rightmost), d' (bottom-right), e' (bottom), f' (bottom-left), with center apex o' connected to all six vertices. The edge between a' and b' is dimensioned as 30.
> - Reference line is labeled 'x' on the left and 'y' on the right.
> - Top View (below xy line): Inverted triangular outline with base on the xy line containing projectors for points a(f), b(e), and c(d). Apex 'o' is located vertically below b(e) at a perpendicular distance of 60 mm from the xy line. Lines connect apex o to a(f), b(e), and c(d).
> - Text below: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Orthographic projection step 63.2 of a hexagonal pyramid**
>
> Step 63.2 of hexagonal pyramid projection. Inset box on the left gives B = 30, H = 60. Reference line xy is horizontal. Above xy: Initial front view is a regular hexagon of side length 30 mm with vertical side edges a'-f' and c'-d', top vertex b', bottom vertex e', and apex o' at the center connected to all vertices. Below xy: Initial top view is an inverted triangle of height 60 mm with base along xy between a(f) and c(d), central point b(e), and apex o pointing downwards. Second stage below xy: The top view is rotated such that apex o lies on xy, with base tilted downwards showing corners c(d) on xy, intermediate point b(e), and lowest point a(f). Text at bottom reads 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Orthographic projection step 63.3 of a hexagonal pyramid**
>
> Step 63.3 completing the projection of the tilted hexagonal pyramid. Inset box gives B = 30, H = 60. Reference line xy is horizontal. Left side shows the initial views: front view regular hexagon (side 30 mm, corners a', b', c', d', e', f' and center o') above xy, and top view inverted triangle (height 60 mm, base a(f)-c(d) on xy, apex o) below xy. Bottom right: Tilted top view with apex o on xy and base inclined showing c(d) on xy, b(e), and a(f). Top right: Final front view obtained by projecting vertically from the tilted top view and horizontally from the first front view. Base vertices are c', d', b', a', e', f'; apex is o'. Slant edges o'-b', o'-c', and o'-e' are solid lines; internal slant edges running to hidden base corners are drawn as dashed lines. Text at bottom reads 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

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

**Answer:** Completed projections of the hexagonal pyramid with triangular face on VP and base edge at $45^\circ$ to HP.

---

#### Problem 198: Cone Resting on Base Point on VP (Locus Problem)
**Given:** Base diameter $d = 50\text{ mm}$, axis $h = 70\text{ mm}$, rests on VP on a base point, axis inclined at $\phi = 45^\circ$ to VP and $\theta = 30^\circ$ to HP, axis away from VP and apex nearer to HP.  
**Find:** Projections using locus construction in front view.

**Solution**
1. Draw Stage 1 FV above XY as a circle of diameter $50\text{ mm}$ divided into 8 parts with center $o'$.
2. Draw Stage 1 TV below XY as an inverted triangle with base $50\text{ mm}$ on XY and axis length $70\text{ mm}$ downward to apex $o$.
3. Tilt the top view such that the axis makes true angle $\phi = 45^\circ$ to XY, keeping base point $5$ on XY.
4. Project upward from Stage 2 TV and horizontally from Stage 1 FV to construct the Stage 2 FV. Measure apparent axis length $L_1 = o'_1 p'_1$.
5. From resting point $p'$ on XY, draw a line at true inclination $\theta = 30^\circ$ of true axis length $L = 70\text{ mm}$ to locate $O$. Draw horizontal locus line through $O$ at height $h_{\text{locus}} = 70\sin 30^\circ = 35\text{ mm}$.
6. With center $p'$ and radius equal to apparent axis length $L_1$, draw an arc intersecting the locus line at $o'$, determining apparent inclination $\alpha$. Reconstruct the Stage 2 FV along this axis with apex $o'$ nearer to HP.
7. Project downward from Stage 3 FV and horizontally from Stage 2 TV to complete the final top view ellipse and boundary generators.

> **Figure: Step 198.1: Initial projections of a cone resting with its base on the VP**
>
> Given box above states: BASE DIA - 50mm ; HEIGHT - 70mm; RESTING ON BASE POINT ON VP; θ = 30°; φ = 45°. Step 198.1 shows the initial stage of projection with D = 50, H = 70. Front view (above reference line x-y): a circle of diameter 50 mm (labeled Ø50) with center o', divided into 8 equal sectors with generator points numbered counterclockwise: 1' (leftmost on horizontal center line), 2', 3' (topmost on vertical center line), 4', 5' (rightmost), 6', 7' (bottom), and 8'. Top view (below reference line x-y): an inverted isosceles triangle with base on the xy line of width 50 mm with base points projected down as 1, 2(8), 3(7), 4(6), and 5. The apex is at point o, located at an axis height of 70 mm below the xy line. The axis connects 3(7) to o. Bottom right note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Projection of a cone: Step 198.2**
>
> Step 198.2 showing the initial and tilted positions of a cone with diameter D = 50 mm and height H = 70 mm. Scale 1:1, all dimensions in mm. Reference line labeled x-y.
> - Left stage:
>   - Above x-y: Circle of diameter Ø50 with center o', divided into 8 equal parts labeled 1', 2', 3', 4', 5', 6', 7', 8' counter-clockwise starting from the leftmost point.
>   - Below x-y: Inverted triangular elevation of the cone with base on x-y labeled 1, 2(8), 3(7), 4(6), 5, apex o pointing downwards, and height dimensioned as 70 mm.
> - Right stage:
>   - Below x-y: The cone is tilted such that base point 5 is on the x-y line and the base line 1-5 is inclined at 40° to the x-y line. Base points are labeled 1, 2(8), 3(7), 4(6), 5, connected by generators to apex o at the bottom right.
> Box values: 198.2, D = 50, H = 70.

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

> **Figure: Orthographic projection of a cone - Step 198.4**
>
> Step 198.4 of orthographic projections of a cone. Inset box indicates '198.4', 'D = 50', 'H = 70', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.
> - Stage 1: Simple position with base in VP. Front view (above reference line xy) is a circle of diameter Ø50 mm divided into 8 sectors numbered 1' through 8' with center o'. Top view (below xy) is an inverted triangle of base length 50 mm on line xy (points 1, 2(8), 3(7), 4(6), 5) and height 70 mm ending at apex o.
> - Stage 2: Top view rotated such that the base/generator is inclined at 40° to the xy line, apex o pointing down-right. The front view is projected above xy, showing an apparent elliptical base (points 1' to 8') and apex o' to the right.
> - Stage 3: The front view from Stage 2 is redrawn inclined such that its axis is tilted at 30° to the horizontal (line xy). The final top view is not yet constructed in this step.

> **Figure: Orthographic projection of a cone - Step 198.5**
>
> Step 198.5 showing the completed three-stage orthographic projection of the cone. Inset box indicates '198.5', 'D = 50', 'H = 70', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.
> - Stage 1: Front view is a circle Ø50 mm with 8 divisions (1'–8', center o') above xy; top view is an inverted triangle with base 50 mm on xy and height 70 mm extending to apex o.
> - Stage 2: Cone tilted to VP with top view inclined at 40°, apex o at the bottom-right. Front view shows base as an ellipse and apex o' connected by outline generators.
> - Stage 3: Front view is redrawn with axis inclined at 30° to HP. Vertical projectors drawn down from front view and horizontal projectors drawn across from Stage 2 top view to form the final top view: the base appears as an ellipse with plotted points 1 through 8, connected by tangential generators to apex o.

> **Watch out.** Since both given angles are true angles to HP and VP, the apparent front view length $L_1$ must be swung onto the locus line; never incline the axis directly at $30^\circ$ in the final front view.

**Answer:** Final projections of the cone with apparent front view axis inclination $\alpha = 45^\circ$ and locus height $35\text{ mm}$.

### Quick recall
- When base is on VP, FV shows the true base shape and TV base lies on XY.
- Stage 2 applies inclination to VP ($\phi$) in top view below XY.
- Stage 3 applies inclination to HP ($\theta$) in front view above XY.
- If an apparent angle of the axis in FV is given, rotate the Stage 2 FV directly; if a true angle $\theta$ is given, draw a locus line at $L\sin\theta$ and swing apparent length $L_1$ to locate the apex.
