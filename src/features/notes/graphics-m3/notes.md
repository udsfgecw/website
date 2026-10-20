<!-- page 1 | About this notebook -->

## Sections of Solids and Surface Developments: Engineering Graphics Practical Workbook

This workbook guides students through the step-by-step principles of sectioning geometric solids and developing their lateral surfaces. Students will learn to construct sectional orthographic projections, determine true shapes of cut surfaces across auxiliary planes, and apply parallel-line and radial-line development methods to solve practical engineering and shortest-path geometric problems.

**Before you start:** Orthographic projections of points, lines, and planes; Projections of regular solids (prisms, pyramids, cylinders, cones) in simple positions; Basic geometric constructions including dividing lines and circles, true length determinations, and auxiliary planes.

**In this notebook**

1. Fundamentals of Section Planes and True Shapes
2. Solids Cut by Planes Perpendicular to VP and Inclined to HP (AIP)
3. Curved Surfaces Cut by Auxiliary Planes (Cylinders and Conic Sections)
4. Solids Cut by Planes Perpendicular to HP and Profile Planes
5. Inverse Section Problems: Determining Plane Angles from Section Geometry
6. Parallel-Line Development of Prisms and Cylinders
7. Radial-Line Development of Pyramids and Cones

<!-- page 2 | Fundamentals of Section Planes and True Shapes -->

## Fundamentals of Section Planes and True Shapes

### What you need
* **Auxiliary Inclined Plane (AIP):** Perpendicular to VP, inclined at angle $\theta$ to HP; shows as an edge line (Vertical Trace, VT) in the front view.
* **Auxiliary Vertical Plane (AVP):** Perpendicular to HP, inclined at angle $\phi$ to VP; shows as an edge line (Horizontal Trace, HT) in the top view.
* **Sectional View vs. True Shape:** A section projected onto HP or VP is foreshortened; the true shape appears only on an auxiliary projection plane set parallel to the cutting plane.
* **Coordinate Transfer Rule:** For an AIP, transfer perpendicular distances of points from $XY$ in the top view to project from $X_1Y_1$ in the auxiliary view.
* **True Length (TL) of a Slant Edge:** An edge shows its true length in a view only when it is parallel to the corresponding reference plane ($XY$). If inclined in both views, rotate it parallel to $XY$ in one view and project to the other.

### The method
1. Draw the standard front view (FV) and top view (TV) of the uncut solid.
2. Mark the cutting plane trace: draw a dashed-and-dotted line thickened at the ends (VT in FV for AIP, or HT in TV for AVP).
3. Number the points of intersection ($1', 2', 3', \dots$) where the cutting trace crosses the outer contours and solid edges in the cutting-trace view.
4. Project these intersection points perpendicular to the reference line $XY$ into the adjacent view onto the corresponding edges.
5. Draw an auxiliary reference line $X_1Y_1$ parallel to the cutting plane trace at a convenient distance.
6. Project perpendicular rays from each section point on the cutting trace across $X_1Y_1$.
7. Measure the perpendicular distance of each point in the adjacent view from $XY$, and mark that exact distance along its projector from $X_1Y_1$.
8. Connect the transferred points in sequence (straight lines for planar faces, smooth curves for cylinders and cones).
9. Apply section hatching: thin, continuous parallel lines spaced 1 mm to 2 mm apart at $45^\circ$ to the principal section boundaries.

### Problems

#### Problem 1: True Shape of Cut Square Prism (Example)
**Given:** Square prism, base side $40\text{ mm}$, height $70\text{ mm}$, standing vertically on HP with base edges at $45^\circ$ to VP. Cut by an AIP at $45^\circ$ to HP passing through the midpoint of the axis.  
**Find:** Sectional top view and true shape of the section.

**Solution**
1. Draw $XY$. Draw TV as a square of side $40\text{ mm}$ with sides at $45^\circ$ to $XY$; label corners $a, b, c, d$.
2. Project FV: draw a rectangle of width equal to the diagonal $40\sqrt{2} \approx 56.6\text{ mm}$ and height $70\text{ mm}$; label front corners $a', c'$ on the outside, and central overlapping edges $b', d'$.
3. Locate the axis midpoint $O'$ at height $35\text{ mm}$ from the base; draw the cutting plane VT through $O'$ inclined at $45^\circ$ to $XY$.
4. Mark cut points on the four vertical edges: $1'$ on edge $a'-a'_1$, $2'$ on $b'-b'_1$, $3'$ on $c'-c'_1$, and $4'$ on $d'-d'_1$.
5. Project $1'$ down to edge $a$ in TV to fix point $1$; project $3'$ down to edge $c$ to fix point $3$.
6. Project $2'$ and $4'$ down to edges $b$ and $d$ in TV to fix points $2$ and $4$.
7. Join $1-2-3-4-1$ in TV and hatch the enclosed area at $45^\circ$ to form the sectional top view.
8. Draw $X_1Y_1$ parallel to VT at a convenient offset (e.g., $20\text{ mm}$ away).
9. From $1', 2', 3', 4'$ on VT, draw projectors perpendicular to $X_1Y_1$.
10. Transfer TV depths from $XY$: measure distance $y_1$ from $XY$ to point $1$ in TV, and mark it from $X_1Y_1$ along the ray from $1'$ to locate $1_1$. Repeat for $2_1, 3_1, 4_1$.
11. Join $1_1-2_1-3_1-4_1-1_1$ with firm lines and apply $45^\circ$ hatching.

**Answer:** Sectional top view is a rhombus with diagonals $56.6\text{ mm}$ and $56.6\text{ mm}$; True shape is a rhombus with major axis along the plane $= 56.6 / \cos 45^\circ = 80\text{ mm}$ and minor axis $= 56.6\text{ mm}$.

#### Problem 2: True Shape and Slant Edge True Length of a Hexagonal Pyramid (Example)
**Given:** Regular hexagonal pyramid, base side $25\text{ mm}$, axis $60\text{ mm}$, resting on HP with one base edge perpendicular to VP. Cut by an AIP at $30^\circ$ to HP, intersecting the axis at $25\text{ mm}$ above the base.  
**Find:** True length of the slant edge, sectional top view, and true shape.

**Solution**
1. Draw TV: regular hexagon of side $25\text{ mm}$ with one edge perpendicular to $XY$; mark base corners $a$ to $f$ and apex $o$ at the center. Draw slant edges $o-a, o-b, \dots, o-f$.
2. Find true length of slant edge: rotate TV generator $o-a$ about $o$ until parallel to $XY$ at $a_r$; project $a_r$ to $XY$ at $a'_r$, and join $o'-a'_r$. Measure $TL = o'-a'_r$.
3. Project FV of pyramid: base on $XY$, apex $o'$ at height $60\text{ mm}$; connect $o'$ to base corners $a', b', c', d', e', f'$.
4. Mark point $M'$ on the axis at height $25\text{ mm}$ above $XY$; draw the cutting trace VT through $M'$ at $30^\circ$ to $XY$.
5. Mark intersections of VT with FV edges: $1'$ on $o'-a'$, $2'$ on $o'-b'$, $3'$ on $o'-c'$, $4'$ on $o'-d'$, $5'$ on $o'-e'$, $6'$ on $o'-f'$.
6. For points on non-profile edges ($2', 3', 5', 6'$), project vertically down to meet their respective slant edges $o-b, o-c, o-e, o-f$ in TV.
7. For points on edges nearly vertical or overlapping in FV, project horizontally onto the true-length generator $o'-a'_r$, then project down to the rotated horizontal edge in TV, and swing an arc centered at $o$ back to the target edge.
8. Connect $1-2-3-4-5-6-1$ in TV to obtain the cut boundary; draw hatch lines inside.
9. Draw auxiliary axis $X_1Y_1$ parallel to VT.
10. Project rays from $1', 2', 3', 4', 5', 6'$ perpendicular to $X_1Y_1$.
11. Measure perpendicular distances of points $1$ through $6$ from $XY$ in TV, and transfer each distance along its respective ray from $X_1Y_1$ to locate $1_1$ through $6_1$.
12. Connect $1_1-2_1-3_1-4_1-5_1-6_1-1_1$ and hatch the enclosed true shape.

> **Watch out.** Never measure section distances along the inclined face itself; always measure along the true perpendicular projectors from $X_1Y_1$.

**Answer:** True length of slant edge $TL = 65.0\text{ mm}$; cut produces an irregular hexagon with bilateral symmetry; true shape obtained on auxiliary plane parallel to VT.

### Quick recall
* An AIP shows as a line in FV; an AVP shows as a line in TV.
* True shape is always wider or longer along the inclination than the foreshortened sectional view: dimension along the tilt equals $(\text{projected length}) / \cos\theta$.
* Always project the true shape perpendicular to the trace line ($X_1Y_1 \parallel$ trace, projectors $\perp X_1Y_1$).
* Coordinate transfer is 1-to-1: distances perpendicular to $XY$ in the plan view are transferred directly as distances from $X_1Y_1$ in the auxiliary view.
* Hatched section lines must be drawn using continuous thin (2H) lines at a uniform $45^\circ$ slant.

<!-- page 3 | Solids Cut by Planes Perpendicular to VP and Inclined to HP (AIP) -->

## Solids Cut by Planes Perpendicular to VP and Inclined to HP (AIP)

### What you need
- An Auxiliary Inclined Plane (AIP) appears as an inclined line trace (Vertical Trace, $VT$) in the front view, inclined at angle $\theta$ to the $XY$ reference line.
- Cutting points are marked directly where $VT$ intersects the edges or generators in the front view ($1', 2', 3', \dots$).
- Top-view cutting points lie on the corresponding horizontal projections of those same edges.
- If an edge is horizontal or profile-projected, rotate the point horizontally to a true-length outer slant edge in elevation, then project down and swing back to the edge in plan.
- True shape of the section is obtained on an auxiliary plane parallel to $VT$ ($X_1Y_1 \parallel VT$) by transferring plan distances perpendicular to $VT$.

### The method
1. Draw the top view (plan) in the specified orientation relative to the $XY$ line.
2. Project vertically to construct the front view (elevation) with the given axis height.
3. Locate the given axis or edge point in elevation and draw the cutting plane trace $VT$ inclined at angle $\theta$ to $XY$.
4. Label all intersection points $1', 2', 3', \dots$ where $VT$ crosses solid edges in elevation.
5. Project each cut point vertically down onto its corresponding edge in the top view; connect these points in order and hatch the cut surface at $45^\circ$ with thin lines.
6. Draw an auxiliary reference line $X_1Y_1$ parallel to $VT$ at a convenient clearance.
7. Project lines perpendicular to $VT$ from each cut point across $X_1Y_1$.
8. Measure the distance of each cut point in the plan from the $XY$ line (or solid centerline) and transfer it along its perpendicular projector from $X_1Y_1$ to plot the true shape.

### Problems

#### Problem 86: Square Prism Cut by AIP
**Given:** Square prism, base edge $40\text{ mm}$, height $70\text{ mm}$, resting on HP, vertical faces equally inclined to VP ($45^\circ$). Cutting plane $\perp$ VP, inclined $55^\circ$ to HP, meeting axis $15\text{ mm}$ from top face.  
**Find:** Elevation, sectional plan, and true shape of section.

**Solution**
1. Draw the top view as a $40\text{ mm} \times 40\text{ mm}$ square with edges inclined at $45^\circ$ to $XY$; label corners $a(e), b(f), c(g), d(h)$.
2. Project upward to construct the front view rectangle of height $70\text{ mm}$ resting on $XY$.
3. Locate a point on the axis $15\text{ mm}$ below the top face ($55\text{ mm}$ above base) and draw cutting trace $VT$ inclined at $55^\circ$ to $XY$.
4. Mark cut points in elevation: $1'$ on edge $a'-e'$, $2'$ on $b'-f'$ and $d'-h'$, and $3'$ on $c'-g'$.
5. Project cut points $1', 2', 3'$ straight down to plan; because the prism faces are vertical, the cut profile coincides with the square boundary $a-b-c-d$; hatch the sectioned area.
6. Retain the lower solid portion $e'-f'-g'-c'-3'-2'-1'-e'$ in elevation with thick continuous lines.
7. Draw auxiliary reference line $X_1Y_1$ parallel to $VT$.
8. Project perpendiculars from $1', 2', 3'$ through $X_1Y_1$ and transfer horizontal offsets from $XY$ to obtain the true rhombus shape $1-2-3-4$.

> **Figure: Step 98.1: Projections of square prism resting on HP with faces equally inclined to VP**
>
> Step 98.1 of the solution showing the initial projections of a square prism:
> - Reference line labelled 'y' on both sides (XY line).
> - Top view (below XY line): A square rotated at 45° to the XY line (corners at top, bottom, left, right). The corners are labelled: left corner 'a(e)', bottom corner 'b(f)', right corner 'c(g)', top corner 'd(h)'. The lower-right side is dimensioned with '□40'.
> - Front view (above XY line): A rectangle representing the elevation of the prism, resting on the XY line. Base points are labelled 'e'' (left), 'f' (h')' (center vertical line), and 'g'' (right). Top corners are labelled 'a'' (left), 'b' (d')' (center), and 'c'' (right). Center vertical line connects 'b'(d')' to 'f'(h')'. Vertical height dimension on the left is labelled '70'.
> - Projection lines connect the corresponding corners between top and front views.
> - A small table next to the front view states 'B = 40' and 'H = 70'.

> **Figure: Section of a square prism - cutting plane representation (Step 98.2)**
>
> Step 98.2 of the projection and sectioning of a square prism:
> - Reference line labeled y-y.
> - Top View: A square of side 40 mm with all sides inclined at 45° to the reference line. Corners are labeled a(e) on the left, b(f) at the bottom, c(g) on the right, and d(h) at the top. Dimensioned with square symbol 40 (□40).
> - Front View: A square prism of base side 40 mm and height 70 mm resting on HP. Base corners labeled e' (left), f'(h') (center vertical edge), and g' (right). Top corners labeled a' (left), b'(d') (center vertical edge), and c' (right). Overall height dimension is 70 mm. A horizontal line is located 15 mm below the top face.
> - Section Plane (V-T): A cutting plane inclined at 55° to the horizontal passes through the prism, cutting edge a'-e' at point 1', axis/edge b'(d') at point 2', and the top face at point 3'. Section plane ends are thickened with perpendicular arrows marked 'V' at the bottom-left and 'T' at the top-right.
> - Data Box: '98.2', 'B = 40', 'H = 70'.
> - Text: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Sectional top view and front view of the cut square prism (Step 98.3)**
>
> Step 98.3 showing the completed sectional views of the square prism:
> - Reference line labeled y-y.
> - Front View: Retained lower portion of the prism is outlined with heavy dark lines passing through e'-f'-g'-c'-3'-2'-1'-e'. The cutting plane V-T is inclined at 55° to HP, cutting through 1', 2', and 3'. Height dimensions are 70 mm total and 15 mm from the top face.
> - Sectional Top View: The cut section is shown with 45° hatching lines across the cut region between points 1 on edge a(e), 2 near d(h), 3 on the top face, and symmetric points 3_1 and 2_1 toward b(f). Corner c(g) remains unsectioned outside the hatched area. Edge length is dimensioned as □40.
> - Data Box: '98.3', 'B = 40', 'H = 70'.
> - Text: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Sectional views and true shape of section of a square prism cut by an inclined cutting plane**
>
> Technical drawing labeled 98.4 showing the sectional projections and true shape of a section of a vertical square prism:
> - Inset box: '98.4', 'B = 40', 'H = 70', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.
> - Front View: A square prism of base side 40 mm and height 70 mm rests on HP on horizontal reference line y-y. Base corners are marked e', f'(h'), g'; top corners are a', b'(d'), c'. A cutting plane V-T is inclined at 55° to the horizontal, intersecting the left vertical edge at point 1', the central vertical edge at point 2', and the top base at point 3' (dimensioned 15 mm from the right edge c').
> - Sectional Top View: The prism is oriented with base edges inclined at 45° to the VP, dimensioned with a square symbol '□40'. Corners are marked a(e)₁, b(f)₂, c(g), d(h). The portion cut by the plane is hatched between section points 1, 2, and 3.
> - True Shape of Section: Projected perpendicular to the cutting plane V-T onto an auxiliary plane with reference line x₁-y₁. Projectors from points 1', 2', 3' yield vertices 1₁, 2₁, 3₁, etc., forming a hatched polygon representing the true shape of the section.

**Answer:** Sectional plan is a hatched square of side $40\text{ mm}$; true shape of section is a rhombus of width $56.6\text{ mm}$ and length $69.1\text{ mm}$.

---

#### Problem 87: Pentagonal Pyramid Cut by AIP Bisecting Axis
**Given:** Regular pentagonal pyramid, base side $30\text{ mm}$, height $60\text{ mm}$, resting on base on HP with one base edge $\perp$ VP. Cutting plane $\perp$ VP, inclined $45^\circ$ to HP, bisecting the axis ($30\text{ mm}$ from base).  
**Find:** Front view, sectional top view, true shape of section, and true height/width of section.

**Solution**
1. Draw the top view of the regular pentagon $a-b-c-d-e$ with edge $a-e$ perpendicular to $XY$; connect corners to apex $o$.
2. Project front view with base $a'(e'), b'(d'), c'$ on $XY$ and apex $o'$ at axis height $60\text{ mm}$.
3. Locate midpoint of axis at $30\text{ mm}$ above $XY$ and draw cutting plane $VT$ inclined at $45^\circ$ to $XY$.
4. Mark intersections: $1'$ on slant edges $o'-a'$ and $o'-e'$, $2'$ on $o'-b'$ and $o'-d'$, and $3'$ on $o'-c'$.
5. Project points $1'$ down to $o-a$ and $o-e$, $2'$ down to $o-b$ and $o-d$, and $3'$ down to $o-c$; join $1-2-3-2_1-1_1$ and hatch the sectional plan.
6. Darken the retained lower pyramid base and truncations in both elevation and plan.
7. Draw $X_1Y_1$ parallel to $VT$ and project perpendiculars from $1', 2', 3'$.
8. Transfer plan distances from $XY$ to auxiliary projectors to construct the true cut section polygon.

> **Figure: Projection of a pentagonal pyramid (Step 86.1)**
>
> Step 86.1: Orthographic projection of a regular pentagonal pyramid. Givens: Base side B = 30 mm, Height H = 60 mm. Front view above ground line x-y shows apex o' with height 60 mm, base on x-y line with points a'(e'), b'(d'), and c'. Top view below x-y shows a regular pentagon a-b-c-d-e with apex o at the center; edge a-e is oriented vertically with length 30 mm. Lines connect apex o to each base vertex (a, b, c, d, e). Scale: 1:1. All dimensions are in mm.

> **Figure: Section plane cutting pentagonal pyramid (Step 86.2)**
>
> Step 86.2: Cutting plane setup on the pentagonal pyramid. Givens: Base side B = 30 mm, Height H = 60 mm. The cutting plane V-T is inclined at 45° to the base/x-y line and passes through the axis at a height of 30 mm from the base. Slant edges are intersected at points 1', 2', and 3'. Front view and top view of the pyramid are identical in outline to Step 86.1. Scale: 1:1. All dimensions are in mm.

> **Figure: Orthographic projections and sectional top view of a cut pentagonal pyramid (Step 86.3)**
>
> Step 86.3 of worked solution for Problem 86: Section of a regular pentagonal pyramid.
> - Given box: Base side B = 30 mm, Axis height H = 60 mm.
> - Reference line: xy.
> - Front view:
>   - Base rests on xy: points a'(e') at left, b'(d') in middle, c' at right.
>   - Apex o' at height 60 mm above xy.
>   - A section plane VT is inclined at 45° to the base/xy line, sloping upwards to the right.
>   - It cuts slant edge o'-c' at point 3' at a height of 30 mm from the base.
>   - It cuts slant edges o'-b' and o'-d' at point 2'.
>   - It cuts slant edges o'-a' and o'-e' at point 1'.
>   - Section plane line is indicated with heavy ends labelled V and T with viewing direction arrows.
> - Top view:
>   - Regular pentagon base a-b-c-d-e with vertical base edge a-e (length 30 mm) on the left, and apex o at the center.
>   - Slant edges o-a, o-b, o-c, o-d, o-e.
>   - Projectors from the front view determine section points in top view: 1 on o-e, 1₁ on o-a, 2 on o-d, 2₁ on o-b, and 3 on o-c.
>   - The resulting sectional area 1-2-3-2₁-1₁ is hatched.
> - Notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: True shape of section of the pentagonal pyramid (Step 86.4)**
>
> Step 86.4 of worked solution for Problem 86: Construction of the true shape of the section.
> - Given box: Base side B = 30 mm, Axis height H = 60 mm.
> - Answer box: W = 36 mm.
> - Front view and top view are identical to Step 86.3, showing the cut pentagonal pyramid with section plane VT inclined at 45° to xy, cutting o'-c' at height 30 mm (point 3'), o'-b'(d') at 2', and o'-a'(e') at 1'.
> - True shape construction:
>   - Projectors are drawn perpendicular to the cutting plane line VT from points 1', 2', and 3' towards the upper-left.
>   - Distances of section points from the center line in the top view are transferred along these projectors to plot points 1, 1₁, 2, 2₁, and 3.
>   - The resulting polygon 1-2-3-2₁-1₁ is hatched, representing the true shape of the section.
>   - Dimension W (width across true shape) is dimensioned with answer W = 36 mm.
> - Notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** True width of the section $W = 36\text{ mm}$; true length along section axis $= 42.4\text{ mm}$.

---

#### Problem 88: Hexagonal Pyramid Cut by AIP
**Given:** Regular hexagonal pyramid, base side $30\text{ mm}$, height $60\text{ mm}$, resting on base on HP with two base edges parallel to VP. Cutting plane $\perp$ VP, inclined $30^\circ$ to HP, passing through the axis $25\text{ mm}$ above base.  
**Find:** Elevation, sectional plan, and true shape of section.

**Solution**
1. Draw top view regular hexagon $a-b-c-d-e-f$ with edges $b-c$ and $e-f$ parallel to $XY$; connect each corner to apex $o$.
2. Project front view with base on $XY$ and apex $o'$ at height $60\text{ mm}$.
3. Mark the cutting point on the axis $25\text{ mm}$ above the base and draw cutting trace $VT$ inclined at $30^\circ$ to $XY$.
4. Identify cutting points in elevation: $1'$ on $o'-a'$, $2'$ on $o'-b'$ and $o'-f'$, $3'$ on $o'-c'$ and $o'-e'$, and $4'$ on $o'-d'$.
5. Project $1'$ to $o-a$, $2'$ to $o-b$ and $o-f$, $3'$ to $o-c$ and $o-e$, and $4'$ to $o-d$ in plan.
6. Connect points $1-2_1-3_1-4-3-2-1$ with straight segments and hatch the resulting sectional polygon.
7. Draw auxiliary reference line $X_1Y_1$ parallel to $VT$ outside the front view.
8. Project perpendicular lines from $1', 2', 3', 4'$ across $X_1Y_1$, set off distances from the plan centerline, and join to obtain the true symmetric section polygon.

> **Watch out.** The problem heading mentions "25mm from vertex" while the drawing dimension and problem banner specify "25mm from base"; follow the $25\text{ mm}$ from base dimension shown on the construction drawing.

> **Figure: Projections of a hexagonal pyramid resting on HP**
>
> Orthographic projections of a hexagonal pyramid (Step 91.1):
> - Top view (below xy reference line): A regular hexagon representing the base, oriented with edges f-e and b-c parallel to the horizontal reference line xy. Vertices are labelled counter-clockwise: a (leftmost), b, c, d (rightmost), e, f. Center apex is labelled o, connected to each base vertex with slant edge lines. One base edge length is dimensioned as 30 mm.
> - Front view (above xy reference line): The base lies along the reference line xy, labelled with endpoints x and y. Base corner projections are labelled a', b' f', c' e', d'. Center axis line extends vertically up to apex o' at a height of 60 mm (dimensioned on the right as 60). Slant edges connect o' to a', b' f', c' e', and d'.
> - Info box on the left shows: '91.1', 'B = 30', 'H = 60'.
> - Scale notation at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 91.2: Front view and top view of hexagonal pyramid showing cutting plane location**
>
> Step 91.2 of engineering drawing problem 91 for a regular hexagonal pyramid (Base B = 30 mm, Height H = 60 mm). Top view shows a regular hexagon with corners labelled a, b, c, d, e, f and apex o, oriented such that corners a and d lie on a horizontal line. Slant edges connect each corner to apex o. Base side length is dimensioned as 30 mm. Projectors lead up to the front view across the reference line x-y. The base rests on x-y with points a', b', f', c', e', d'. Apex is o' at height 60 mm above x-y. A section/cutting plane line V-T is inclined at 30° to the horizontal, intersecting the axis at a distance of 25 mm below the apex o'. The cutting plane cuts the slant edges at points labelled 1' (on o'-a'), 2' (on o'-b' and o'-f'), 3' (on o'-c' and o'-e'), and 4' (on o'-d'). Includes boxes: '91.2', 'B = 30, H = 60', and note 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 91.3: Final sectional top view and front view of the truncated hexagonal pyramid**
>
> Step 91.3 of problem 91 showing the completion of the sectional top view and darkening of retained edges. The cutting points 1', 2', 3', 4' from the front view are projected downwards to the respective edges in the top view: 1 on oa, 2 on of, 2₁ on ob, 3 on oe, 3₁ on oc, and 4 on od. These points form a closed section polygon 1-2-3-4-3₁-2₁ in the top view which is hatched. The retained base edges (a-b-c-d-e-f) and remaining parts of the slant edges connecting the base to the cut section are drawn with thick solid lines. In the front view, the lower portion of the pyramid below the cutting plane (points a'-1'-2'-3'-4'-d') is drawn in thick solid lines. Includes boxes: '91.3', 'B = 30, H = 60', and note 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.

> **Figure: Orthographic projection and true shape of section of a hexagonal pyramid**
>
> Step 91.4 of a section of solids problem for a hexagonal pyramid:
> - Top View: A regular hexagon with corners a, b, c, d, e, f and apex o at the center. Base side length is dimensioned as 30 mm. Cut section points are marked: 1 on slant edge o-a, 2 and 2_1 on o-b and o-f, 3 and 3_1 on o-c and o-e, and 4 on o-d. The sectioned inner region 1-2-3-4-3_1-2_1 is hatched with thin lines.
> - Front View: Base line lies on reference line x-y between points a' and d', with projector points b', f' and c', e' indicated. Apex o' is at height 60 mm above the base. Cutting plane line V-T is inclined at 30° to the horizontal/xy-line, passing through slant edges with cut points marked 1', 2', and 3', 4'. A vertical height of 25 mm is dimensioned from the apex o' down to the section plane at the right slant edge.
> - True Shape: Projectors perpendicular to the cutting plane V-T extend upwards to an auxiliary reference line x1-y1 parallel to V-T. The true shape is plotted with vertices 1, 2, 3, 4, 3_1, 2_1 and hatched.
> - Side box notes: '91.4', 'B = 30', 'H = 60', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Sectional plan is a closed six-sided polygon; true shape is an elongated symmetric hexagon of true section length $47.3\text{ mm}$.

---

#### Problem 89: Pentagonal Pyramid Cut by Steep AIP
**Given:** Regular pentagonal pyramid, base side $30\text{ mm}$, height $60\text{ mm}$, resting on HP with one base edge $\perp$ VP. Cutting plane $\perp$ VP, inclined $60^\circ$ to HP, meeting axis $15\text{ mm}$ from base.  
**Find:** Front view, sectional top view, true shape of section, and true height/width of section.

**Solution**
1. Draw top view pentagon $a-b-c-d-e$ with vertical edge $e-a$ ($30\text{ mm}$) perpendicular to $XY$ and connect corners to center $o$.
2. Project front view pyramid of height $60\text{ mm}$ on base $a'(e'), b'(d'), c'$.
3. Mark a point on the vertical axis $15\text{ mm}$ above $XY$ and draw cutting line $VT$ at $60^\circ$ to $XY$.
4. Mark cut points: $1'$ on $o'-a'(e')$, $2'$ on $o'-b'(d')$, and $3'$ on $o'-c'$.
5. Project cutting points vertically downwards to intersect the corresponding plan edges $o-a, o-e, o-b, o-d,$ and $o-c$.
6. Connect points $1-2-3-2_1-1_1$ to outline the sectional plan and apply $45^\circ$ hatching.
7. Draw auxiliary datum line $X_1Y_1$ parallel to $VT$.
8. Project perpendiculars from $1', 2', 3'$ to $X_1Y_1$ and transfer lateral offsets from plan to plot the true shape of the section.

> **Figure: Step 87.1: Orthographic projections of a pentagonal pyramid**
>
> Step 87.1 showing the projections of a regular pentagonal pyramid.
> - Given box: B = 30, H = 60.
> - Top view (below XY line x-y): regular pentagon a-b-c-d-e with apex o at the center. Base edge e-a is vertical (perpendicular to XY) with dimension 30 mm.
> - Front view (above XY line x-y): base lies on x-y line at points a'(e'), b'(d'), and c'. Apex o' is on the vertical centerline at height 60 mm from the base. Slant edges connect o' to base corners a'(e'), b'(d'), and c'.
> - Dimension 60 mm indicated for the axis height.
> - Note below: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Step 87.2: Pentagonal pyramid cut by a section plane inclined at 60 degrees**
>
> Step 87.2 showing the pentagonal pyramid intersected by a cutting plane.
> - Given box: B = 30, H = 60.
> - Front view: cutting plane (trace marked with cutting plane indicators V and T) inclined at 60° to the horizontal/XY line. The cutting plane cuts the right slant edge o'-c' at a height of 15 mm above the base line x-y. The intersection points with the edges are marked as 1' on slant edge o'-a'(e'), 2' on o'-b'(d'), and 3' on o'-c'.
> - Top view: regular pentagon a-b-c-d-e with apex o; side length e-a dimensioned 30 mm.
> - Dimensions indicated: total height 60 mm, cutting height 15 mm, section plane angle 60°, base edge 30 mm.
> - Note below: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Section of a pentagonal pyramid - Step 87.3**
>
> Projection of a regular pentagonal pyramid cut by an auxiliary inclined plane:
> - GIVEN: Base edge $B = 30\text{ mm}$, Pyramid height $H = 60\text{ mm}$.
> - Front View: Apex $o'$ at height $60\text{ mm}$ above the $xy$ line. Base on $xy$ line represented by points $a'(e')$, $b'(d')$, and $c'$.
> - Section Plane (Cutting Plane VT): Inclined at $60^\circ$ to the $xy$ line, passing through a point on the right slant edge $o'c'$ at a vertical height of $15\text{ mm}$ above the base. Arrows labeled $V$ and $T$ mark the trace ends.
> - Cutting plane cuts slant edges at points labeled $3'$ (on $o'c'$), $2'$ (on $o'b'$ and $o'd'$), and $1'$ (on $o'a'$ and $o'e'$ or base).
> - Top View: Pentagonal base with corners $a, b, c, d, e$ and center/apex $o$, with vertical side $e-a = 30\text{ mm}$ on the left. The sectional area is hatched, with vertices labeled $1, 2, 3, 2_1, 1_1$.
> - Scale: 1:1. All dimensions are in mm.

> **Figure: True shape of section of a pentagonal pyramid - Step 87.4**
>
> Complete projection and true shape of the section of a pentagonal pyramid:
> - GIVEN: Base edge $B = 30\text{ mm}$, Height $H = 60\text{ mm}$.
> - Front view and top view are identical to Step 87.3.
> - An auxiliary view (true shape of the section) is projected perpendicularly from the cutting plane $V-T$.
> - The true shape is a hatched polygon with vertices labeled $1, 2, 3, 2_1, 1_1$.
> - The overall width/dimension of the true shape is indicated as $W$.
> - ANSWER: $W = 39\text{ mm}$.
> - Scale: 1:1. All dimensions are in mm.

**Answer:** Sectional plan is a pentagonal boundary; true shape is a five-sided polygon with true section height along trace $= 34.6\text{ mm}$ and maximum width $= 28.5\text{ mm}$.

### Quick recall
- An AIP always cuts a solid along a line trace $VT$ in elevation and an apparent, foreshortened area in plan.
- For vertical prisms, the sectional plan outline coincides with the solid's plan boundary because lateral faces are perpendicular to HP.
- Always label each cutting point in elevation with the specific slant edge it lies on to avoid projection errors in plan.
- Distances transferred to the auxiliary view for true shape are always perpendicular distances taken from the plan reference axis.

<!-- page 4 | Curved Surfaces Cut by Auxiliary Planes (Cylinders and Conic Sections) -->

## Curved Surfaces Cut by Auxiliary Planes (Cylinders and Conic Sections)

### What you need
- **Generator division**: Divide circular top views into 8 equal parts ($45^\circ$) or 12 equal parts ($30^\circ$) to track surface points.
- **Conic section criteria** (where $\theta$ is cutting plane angle and $\alpha$ is base angle of generator):
  - If $\theta > \alpha$ and the plane cuts all generators: **Ellipse**.
  - If $\theta = \alpha$ (cutting plane parallel to an extreme generator): **Parabola**.
  - Cylinder cut through all generators at angle $\theta$: **Ellipse** with minor axis $= D$ and major axis $= \frac{D}{\cos \theta}$.
- **True shape transfer**: Draw auxiliary datum line $X_1Y_1 \parallel VT$; project section points perpendicular to $VT$ and transfer distances from the top view centerline.

### The method
1. Draw the basic orthographic projections (top view circle and front view elevation) and divide the perimeter into 8 or 12 equal generators.
2. Project division points to the front view to form elements.
3. Draw the cutting plane trace $VT$ at the given angle and position in the front view, marking cutting points $1', 2', 3', \dots$ along intersecting generators or edges.
4. Project section points vertically down to the corresponding generators in the top view; connect with a smooth curve and hatch at $45^\circ$ to create the sectional top view.
5. Draw an auxiliary reference line $X_1Y_1$ parallel to $VT$ at a convenient distance.
6. Erect perpendicular projectors from each cut point on $VT$ across $X_1Y_1$.
7. Measure the lateral offset of each point from the horizontal centerline in the top view and transfer it along the corresponding auxiliary projector on both sides of $X_1Y_1$.
8. Connect the auxiliary points with a smooth curve to obtain the true shape of the section.

### Problems

#### Problem 114: Cylinder Cut by Plane Bisecting the Axis (Full Ellipse)
**Given:** Cylinder diameter $D = 40\text{ mm}$, height $H = 60\text{ mm}$, cutting plane inclined at $30^\circ$ to HP bisecting the axis ($30\text{ mm}$ from base).  
**Find:** Projections of cut solid and true shape of section.

**Solution**
1. Draw the top view as a circle of diameter $\Phi 40\text{ mm}$ below $XY$ and divide it into 8 equal sectors labeled clockwise $a(i), h(p), g(o), f(n), e(m), d(l), c(k), b(j)$ with center $o$.

> **Figure: Projections of a cylinder resting on its base (Step 114.1)**
>
> Step 114.1 shows the initial orthographic projections of a cylinder resting on the HP on its base:
> - Top View: A circle with diameter 40 mm (dimensioned as Ø40), divided into 8 equal divisions with lines intersecting at the center point 'o'. The division points along the circumference are labeled clockwise: a(i) at 9 o'clock, h(p) at 10:30, g(o) at 12 o'clock, f(n) at 1:30, e(m) at 3 o'clock, d(l) at 4:30, c(k) at 6 o'clock, and b(j) at 7:30.
> - Reference line: Horizontal line labeled 'x' on the left and 'y' on the right.
> - Front View: A rectangle of width 40 mm and height 60 mm (dimensioned as 60 on the left). The bottom base points on xy are labeled i', j'(p'), k'(o'), l'(n'), m'. The top base points are labeled a', b'(h'), c'(g'), d'(f'), e'. Vertical projection lines link each point in the top view to the corresponding generator in the front view.
> - Inset box to the upper-left of the front view: 'D = 40', 'H = 60'.

2. Project points up to the $XY$ line to draw the front view rectangle of height $60\text{ mm}$ and width $40\text{ mm}$; mark the midpoint of the axis at height $30\text{ mm}$ and draw the cutting plane line $VT$ inclined at $30^\circ$ to $XY$.

> **Figure: Projection of cylinder cut by an inclined section plane (Step 114.2)**
>
> Step 114.2 of a cylinder cut by an inclined section plane.
> - Given box: D = 40 mm, H = 60 mm; SCALE 1:1; ALL DIMENSIONS ARE IN mm.
> - Top View: A circle of diameter Ø40 divided into 8 equal sectors with generator points labelled along the perimeter: a(i), b(j), c(k), d(l), e(m), f(n), g(o), h(p), and center o.
> - Front View: A cylinder of height 60 mm and base width 40 mm standing on the horizontal reference line x-y.
>   - Base points: i', j'(p'), k'(o'), l'(n'), m'.
>   - Top face points: a', b'(h'), c'(g'), d'(f'), e'.
>   - Generators are drawn vertically connecting top and bottom points.
>   - An inclined cutting plane V-T cuts across the cylinder, inclined at 30° to the central vertical axis (k'(o')).
>   - The cutting plane intersects the central axis at point 3', located at a height of 30 mm above the base x-y line.
>   - Intersection points along the generators are marked as: 1' (on generator a'-i'), 2' (on generators b'-j' and h'-p'), 3' (on the axis / generators c'-k' and g'-o'), 4' (on generators d'-l' and f'-n'), and 5' (on generator e'-m').

3. Mark section points $1', 2'(8'), 3'(7'), 4'(6'), 5'$ where the cutting plane intersects generators $a'i', b'j'(h'p'), c'k'(g'o'), d'l'(f'n'), e'm'$; project them down to the top view and outline the retained lower cylinder in bold.

> **Figure: Sectional top view and front view of the cut cylinder (Step 114.3)**
>
> Step 114.3 showing the completed sectional views of the cut cylinder.
> - Given box: D = 40 mm, H = 60 mm; SCALE 1:1; ALL DIMENSIONS ARE IN mm.
> - Front View: The retained lower portion of the cylinder is outlined in bold lines: base i'-m', left vertical edge i'-1', inclined cut face line 1'-2'-3'-4'-5', and right vertical edge 5'-m'. The cut-away upper portion is indicated with thin construction lines. The cutting plane line V-T remains inclined at 30° to the vertical axis, passing through the axis at height 30 mm above the base.
> - Sectional Top View: The circle of diameter Ø40 (with generators a(i) through h(p)) is entirely covered with 45° hatching lines, representing the sectional top view of the cut cylinder.

4. Draw auxiliary line $X_1Y_1$ parallel to $VT$; project lines perpendicular from each section point $1'$ to $5'$, transfer top view widths from center line $a-e$, and draw a smooth ellipse hatched at $45^\circ$.

> **Figure: Projections and true shape of section of a cylinder cut by an inclined plane (step 114.4)**
>
> Engineering drawing showing orthographic projections and true sectional shape for a cylinder (step 114.4). Dimensions given in a box: D = 40, H = 60, Scale 1:1, all dimensions in mm. Top view shows a circle with diameter Ø40 divided into 12 equal sectors with generator points labeled a(i), b(j), c(k), d(l), e(m), f(n), g(o), h(p) around the perimeter and center o. Front view is drawn above the reference line xy, showing a cylinder of diameter 40 mm and height 60 mm, with base points i', j'(p'), k'(o'), l'(n'), m' and top points a', b'(h'), c'(g'), d'(f'), e'. A cutting plane line V-T is inclined at 30° to the horizontal/xy line, passing through the axis at a height of 30 mm from the base. The cutting plane intersects generators at points 1', 2', 3', 4', 5'. Auxiliary projection lines perpendicular to the cutting plane project points to an auxiliary datum line x1-y1, constructing the true shape of the section as a hatched ellipse.

**Answer:** Sectional top view is a circle of diameter $40\text{ mm}$; true shape is an ellipse of minor axis $40\text{ mm}$ and major axis $46.2\text{ mm}$.

---

#### Problem 115: Truncated Cylinder Cut Through Top Face and Generators
**Given:** Cylinder diameter $D = 40\text{ mm}$, height $H = 60\text{ mm}$, cutting plane inclined at $50^\circ$ to HP meeting the axis at height $45\text{ mm}$ from the base.  
**Find:** Sectional views and true shape of the cut surface.

**Solution**
1. Draw the top view circle $\Phi 40\text{ mm}$ divided into 8 equal parts labeled $a(i)$ to $h(p)$, and project the front view rectangle of height $60\text{ mm}$ on base $i'-m'$.

> **Figure: Step 115.1: Projections of a cylinder resting on HP**
>
> Step 115.1 of cylinder projection:
> - Parameters: D = 40 mm, H = 60 mm.
> - Reference line labelled x-y.
> - Top View: A circle of diameter $\Phi 40$ divided into 8 equal sectors with center 'o'. The perimeter points are labelled counterclockwise: a(i) at 9 o'clock, b(j) at ~7:30, c(k) at 6 o'clock, d(l) at ~4:30, e(m) at 3 o'clock, f(n) at ~1:30, g(o) at 12 o'clock, h(p) at ~10:30.
> - Front View: A vertical rectangle of width 40 mm and height 60 mm sitting on reference line x-y. 
>   - Base points along x-y: i', j'(p'), k'(o'), l'(n'), m'.
>   - Top face points: a', b'(h'), c'(g'), d'(f'), e'.
>   - Centerline shown passing through k'(o') - c'(g').
>   - Height dimensioned as 60 on the left.
> - Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. Locate the point on the axis $45\text{ mm}$ above the base line; draw cutting plane $VT$ inclined at $50^\circ$ to $XY$, cutting the top face as well as the left generators.

> **Figure: Step 115.2: Cylinder cut by an inclined section plane**
>
> Step 115.2 of cylinder section:
> - Parameters: D = 40 mm, H = 60 mm.
> - Reference line labelled x-y.
> - Top View: Same as in step 115.1, circle of $\Phi 40$ divided into 8 equal sectors.
> - Front View: Vertical cylinder of height 60 mm.
> - A cutting/section plane V-T inclined at 50° to the horizontal/x-y line cuts across the cylinder.
>   - The cutting plane is indicated by thick end lines marked 'V' and 'T'.
>   - Intersection points with generators are labelled 1', 2', 3', 4'.
>   - A height dimension of 45 mm from the x-y line to the cutting point on the generator d'(f') - l'(n') is shown on the right.
>   - Angle of the cutting plane with the axis or horizontal: 50°.
> - Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. Label the cut points $1'$ on $a'i'$, $2'(4')$ on intermediate generators, and $3'$ on the top face; project them down to intersect generators in the top view and apply section hatching to the cut segment.

> **Figure: Orthographic projections of a truncated cylinder (Step 115.3)**
>
> Front view (elevation) and top view (plan) of a cut vertical cylinder. In the top view, a circle of diameter 40 mm is divided into 8 equal parts labeled a(i), b(j), c(k), d(l), e(m), f(n), g(o), h(p) with center o. The rightmost segment between f(n) and d(l) is hatched. In the front view, the cylinder has base width 40 mm and height 60 mm. Projectors from the top view map the base points i', j'(p'), k'(o'), l'(n'), m' along the horizontal axis x-y, and top points a', b'(h'), c'(g'), d'(f'), e'. A cutting plane line V-T is inclined at 50° to the horizontal, intersecting the cylinder generators at points 1', 2', 3', and 4', where point 4' is at a vertical height of 45 mm from the base. A small vertical cut is made on the right between 4' and the top face at d'(f').

4. Draw auxiliary reference line $X_1Y_1$ parallel to $VT$, project points perpendicular to $VT$, measure lateral offsets from the top view center line, and connect to form the truncated elliptical true shape.

> **Figure: Auxiliary view showing true shape of section of a truncated cylinder (Step 115.4)**
>
> Orthographic projections and true sectional view of the truncated cylinder. In addition to the top view (circle of diameter 40 mm) and front view (cylinder of diameter 40 mm, height 60 mm, cut by plane V-T inclined at 50° up to height 45 mm), an auxiliary reference line x1-y1 is drawn parallel to the cutting plane line V-T. Perpendicular projectors from cut points 1', 2', 3', 4' extend across x1-y1 to construct the true shape of the section, which is a hatched parabolic/elliptical shape truncated by a straight chord corresponding to the right cut face.

> **Watch out.** The cutting plane exits through the top flat face before reaching the rightmost generator, truncating the section so the true shape is bounded by a straight line chord at the top.

**Answer:** Sectional top view showing cut region hatched; true shape is a truncated ellipse with width $40\text{ mm}$.

---

#### Problem 117: Cone Cut by Plane Passing Through Base Edge (Elliptical Section)
**Given:** Cone base diameter $D = 50\text{ mm}$, axis height $H = 60\text{ mm}$, cutting plane inclined at $50^\circ$ to HP passing through extreme left point of base.  
**Find:** Projections of cut solid and true shape of section.

**Solution**
1. Draw top view circle $\Phi 50\text{ mm}$, divide into 8 equal parts $a$ through $h$, and project the front view isosceles triangle with apex $o'$ at height $60\text{ mm}$ and base $a'-e'$ on $XY$.

> **Figure: Projections of a cone resting on HP (Step 117.1)**
>
> Orthographic projections of a cone resting on HP before sectioning. Top view is a circle with diameter Ø50 mm divided into 8 equal sectors with points labeled a, b, c, d, e, f, g, h and center o. Vertical projection lines extend up to reference line x-y. Front view is a triangle with base points a', b'(h'), c'(g'), d'(f'), e' on the xy line, apex o' at height 60 mm, with generators drawn from o' to the base points. Beside the front view is a label box '117.1' with 'D = 50', 'H = 60'. Bottom note specifies 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.

2. Draw cutting plane $VT$ through base corner $a'$ (point $1'$) at an angle of $50^\circ$ to $XY$, cutting all cone generators at $1', 2'(8'), 3'(7'), 4'(6'), 5'$.

> **Figure: Step 117.2: Cone with section plane inclined at 50 degrees**
>
> Orthographic projections of a cone (step 117.2). GIVEN box contains D = 50, H = 60. Front View (above reference line x-y): An isosceles triangle with apex o' and height 60 mm, base diameter 50 mm represented by base points a', b'(h'), c'(g'), d'(f'), e'. A cutting plane line inclined at 50° to the x-y line passes through point 1' (coincident with a') and cuts the generators at points 2', 3', 4', and 5'. Viewing direction arrows T (from top-right, perpendicular to the section plane) and V (from bottom-left along the plane) are indicated. Top View (below x-y line): A full circle of diameter Ø50 mm with center o, divided into 8 equal sectors with points labeled a, b, c, d, e, f, g, h. Thin projectors connect corresponding points between views. Notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. Project cut points vertically down to their corresponding generators in top view (use a horizontal generator transfer for points on the central generator if required) and outline the truncated cone.

> **Figure: Step 117.3: Sectional top view and front view of truncated cone**
>
> Orthographic projections showing sectioned cone (step 117.3). GIVEN box contains D = 50, H = 60. Front View: Lower retained portion of the cone is drawn with thick continuous lines, bounded by base line, generator to the right, and the cutting plane line 1'-2'-3'-4'-5' inclined at 50° to the horizontal. Vertical projectors are projected down from the section points 1', 2', 3', 4', 5' to intersect corresponding generators and circle boundaries in the top view. Top View: Shows the sectional top view with a hatched region bounded by points 1, 2, 3, 4, 5, 4_1, 3_1, 2_1. Outer circle diameter Ø50 mm with base points a, b, c, d, e, f, g, h. Retained outline of the cone is highlighted. Notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

4. Set $X_1Y_1$ parallel to $VT$; project perpendiculars from $1', 2', 3', 4', 5'$, transfer half-widths from top view about the center axis, join points smoothly, and hatch the resulting ellipse.

> **Figure: Orthographic projections and true shape of section of a cone cut by an inclined section plane**
>
> Projection drawing of a cut cone:
> - **Front View**: A triangle representing the cone resting on the reference line $xy$. Base points are $a', b'(h'), c'(g'), d'(f'), e'$, and apex is $o'$. Cone base diameter is 50 mm, axis height is 60 mm. A cutting plane $V-T$ cuts through the cone parallel to the leftmost generator $o'a'$ at an angle of $50^\circ$, with section points labelled $1', 2', 3', 4', 5'$.
> - **Top View**: A circle representing the base with 8 generator divisions labelled $a, b, c, d, e, f, g, h$ and center $o$, diameter $\varnothing 50$. The cut section is shown hatched between points $1, 2, 3, 4, 5, 4_1, 3_1, 2_1$.
> - **True Shape**: An auxiliary view projected perpendicular to the cutting plane $V-T$ shows the true shape of the section (a parabola), hatched, with numbered points $1, 2, 3, 4, 5, 4_1, 3_1, 2_1$.
> - **Labels & Notes**: Box marked '117.4', with 'D = 50', 'H = 60', 'SCALE 1:1', and 'ALL DIMENSIONS ARE IN mm'.

**Answer:** True shape is an ellipse of major axis $47.5\text{ mm}$ and minor axis $28.5\text{ mm}$.

---

#### Problem 122: Cone Cut by Plane Parallel to Extreme Generator (Parabolic Section)
**Given:** Cone base diameter $D = 50\text{ mm}$, axis height $H = 60\text{ mm}$, cutting plane perpendicular to VP, parallel to leftmost generator, and $10\text{ mm}$ offset from it.  
**Find:** Front view, sectional top view, and true shape of section.

**Solution**
1. Draw the top view as a circle of diameter $50\text{ mm}$ and project the front view triangular elevation with apex $o'$ and base diameter $50\text{ mm}$ on $XY$.

> **Figure: Orthographic projections of a cone - Step 122.1**
>
> Step 122.1 showing the initial orthographic projections of a vertical cone. A specification box indicates 'D = 50', 'H = 60'. Front view above reference line xy shows an isosceles triangle with base on the xy line, apex labeled o', base diameter 50 mm, and vertical height 60 mm. Top view below the xy line shows a full circle of diameter Ø50 mm with center labeled o, aligned with the front view's vertical centerline. Additional annotations: 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

2. Measure a perpendicular distance of $10\text{ mm}$ from leftmost generator $o'a'$ and draw the cutting plane $VT$ parallel to $o'a'$, cutting the base at $1'$ and the cone surface up to generator $o'e'$.

> **Figure: Section of a cone - Step 122.2**
>
> Step 122.2 showing the introduction of a section plane parallel to an extreme generator of the cone. In the front view, a cutting plane is drawn parallel to the left generator at an offset distance of 10 mm, marked with perpendicular offset dimension lines '10' and section plane trace markers labeled 'T' and 'V'. The cutting plane intersects the base (xy line), and a vertical projector is projected down into the top view to cut the Ø50 mm circular base, showing a section chord with an indicated dimension of 41 mm. Boxed text: 'D = 50', 'H = 60'. Additional labels: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

3. Draw horizontal cutting planes/generators through intermediate cut points $2', 3', 4'$ to project their radial widths down to the top view, and outline the parabolic sectional top view.

> **Figure: Step 122.3: Section of a cone with cutting plane parallel to generator**
>
> Engineering drawing step 122.3 showing the front view and top view of a cone cut by an inclined section plane.
> Givens box: D = 50, H = 60.
> Front View: Cone with vertex o' and base a'b' resting on the reference line xy. Height is 60 mm, base diameter is 50 mm. A cutting plane VT is inclined and drawn parallel to the extreme generator o'a' at a perpendicular distance of 10 mm. The section plane cuts the base at point 1' and the surface at points 2', 3', 4', and apex/limit 5'.
> Top View: A circle of diameter Ø50 with centre o. The cut surface is projected down, showing a straight cut along the base of length 41 mm between points 1 and 1_1, and a curved section passing through points 2, 3, 4, 5, 4_1, 3_1, 2_1. The sectional area is hatched.
> Notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

4. Draw $X_1Y_1$ parallel to cutting plane $VT$; erect perpendicular projectors from section points $1', 2', 3', 4'$, transfer widths from the top view symmetric axis, and trace the smooth parabolic curve.

> **Figure: Step 122.4: True shape of the section of a cone**
>
> Engineering drawing step 122.4 showing the determination of the true shape of the parabolic section of a cone.
> Givens box: D = 50, H = 60.
> Front and Top Views: Cone of base diameter 50 mm and height 60 mm with cutting plane VT offset by 10 mm from the generator o'a'. Section points 1', 2', 3', 4', 5' on the cutting plane.
> True Shape Construction: Projectors are drawn perpendicular to the cutting plane VT from points 1', 2', 3', 4', 5'. Distances from the axis in the top view are transferred along these projectors to plot the true shape with points 1, 2, 3, 4, 5, 4_1, 3_1, 2_1, 1_1 (base width is 41 mm). The resulting parabolic profile is fully hatched.
> Notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Key idea.** A cutting plane parallel to an extreme generator cuts a right circular cone along a parabola whose axis is parallel to that generator.

**Answer:** Sectional top view showing parabolic boundary on base; true shape of section is a parabola of base width $37.5\text{ mm}$ and axis length $52\text{ mm}$.

### Quick recall
- Cylinders cut across all generators always produce a full ellipse of minor axis equal to cylinder diameter $D$.
- When a plane exits through the top or bottom flat face, the true shape is truncated by a straight boundary chord.
- For cones, if cutting angle $\theta = \text{generator slope } \alpha$, the true section profile is strictly a parabola.
- Always transfer lateral offsets perpendicular to $X_1Y_1$ symmetrically from the plan centerline.

<!-- page 5 | Solids Cut by Planes Perpendicular to HP and Profile Planes -->

## Solids Cut by Planes Perpendicular to HP and Profile Planes

### What you need
- An Auxiliary Vertical Plane (AVP) is perpendicular to the horizontal plane (HP) and inclined at $\beta$ or $\phi$ to the vertical plane (VP); it appears as an inclined line representing its Horizontal Trace ($H$-$T$) in the top view.
- When a cutting plane is parallel to the cone axis or vertical (perpendicular to HP), the section curve generated on the cone is a hyperbola.
- A Profile Plane is perpendicular to both HP and VP; its trace appears perpendicular to reference line $xy$ in both top and front views, showing true cut shapes directly in the side view.
- Side view projections of points on section planes use a $45^\circ$ miter projection line from the intersection of reference axes $x$-$y$ and $x_1$-$y_1$ (or $x'$-$y'$).
- To locate cutting points on slant edges not showing true lengths, rotate generators/edges parallel to $xy$ in top view, project to the true-length contour generator in front view, and project horizontally back.

### The method
1. Draw the basic orthographic views (top view and front view) of the uncut solid resting on HP.
2. In the top view, draw the section plane line representing its horizontal trace ($H$-$T$), using the specified offset from the axis and inclination angle to $xy$.
3. Identify and label intersection points of the cutting plane with base edges and slant edges/generators ($1, 2, 3, \dots$).
4. Project these intersection points vertically upward into the corresponding edges and generators in the front view to obtain $1', 2', 3', \dots$.
5. For profile cutting planes, project coordinates from front and top views into the side view via horizontal projectors and a $45^\circ$ miter line.
6. For true shapes of cuts by an AVP, draw an auxiliary reference line $x_1$-$y_1$ parallel to $H$-$T$ and project perpendicular distances corresponding to front-view heights ($z$-coordinates above $xy$).
7. Outline remaining solid edges in firm lines and hatch the cut surface with thin parallel lines inclined at $45^\circ$.

### Problems

#### Problem 88: Pentagonal Pyramid Cut by an AVP at $30^\circ$ to VP
**Given:** Pentagonal pyramid, base edge $b = 30\text{ mm}$, height $h = 60\text{ mm}$, base on HP with one base edge perpendicular to VP. Section plane $\perp \text{HP}$ and inclined at $30^\circ$ to VP, offset $10\text{ mm}$ from the axis.
**Find:** Top view, sectional front view, and true shape of the section.

**Solution**
1. Draw reference line $xy$. Construct the regular pentagon $a$-$b$-$c$-$d$-$e$ in the top view with vertical edge $e$-$a \perp xy$ and center $o$.
2. Project vertices upward to $xy$ and draw the front view triangle with apex $o'$ at height $60\text{ mm}$.

> **Figure: Initial orthographic projections of a pentagonal pyramid resting on HP**
>
> Step 88.1 showing the initial projections of a pentagonal pyramid:
> - Left text box: 'B = 30', 'H = 60'.
> - Reference line labelled x on the left and y on the right.
> - Top view (below xy line): A pentagon abcde oriented such that the vertical edge e-a is perpendicular to the xy line (length dimensioned as 30 mm). Apex o is at the center, connected to all vertices a, b, c, d, e by slant edge lines.
> - Front view (above xy line): Triangular elevation with apex o' at height 60 mm above the base on the xy line. Base points are a'(e') at the left, b'(d') along the middle, and c' at the right. Solid lines connect o' to a'(e'), b'(d'), and c'. Vertical axis line runs from o' down through the base.
> - Vertical projection lines connect each vertex between top and front views.
> - Notes at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

3. In the top view, draw an offset circle of radius $10\text{ mm}$ centered at $o$, and draw cutting plane line $H$-$T$ tangent to this circle at an angle of $30^\circ$ to $xy$.
4. Mark the intersection points where $H$-$T$ cuts base edge $a$-$b$ at $1$, slant edge $o$-$b$ at $2$, slant edge $o$-$c$ at $3$, and base edge $c$-$d$ at $4$.

> **Figure: Step 88.2 of section of a pentagonal pyramid**
>
> Projection of a pentagonal pyramid cut by an auxiliary inclined section plane. Box at upper left indicates: '88.2', 'B = 30', 'H = 60'. Front view shows apex o' with height 60 mm above reference line x-y; base points on x-y are a'(e'), b'(d'), and c'. Top view shows a regular pentagon base a-b-c-d-e with center/apex o, base side length 30 mm (dimensioned along edge a-b). A section plane H-T is inclined at 30° to the vertical projector and passes at a perpendicular offset of 10 mm from the apex o. It intersects edge e-a at point 1, slant edge o-a at point 2, slant edge o-b at point 3, and edge b-c at point 4. Note at bottom right: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

5. Project cut points $1$ and $4$ vertically to the base line on $xy$ in the front view to mark $1'$ and $4'$.
6. Project cut points $2$ and $3$ vertically to slant edges $o'$-$b'$ and $o'$-$c'$ to locate $2'$ and $3'$; connect $1'$-$2'$-$3'$-$4'$ and hatch the cut section.

> **Figure: Step 88.3 showing the sectional front view of the pentagonal pyramid**
>
> Completed sectional front view and top view of the pentagonal pyramid. Box at upper left indicates: '88.3', 'B = 30', 'H = 60'. Top view shows the pentagonal base a-b-c-d-e with base side 30 mm, apex o, and cutting plane line H-T inclined at 30° at a distance of 10 mm from o, intersecting at points 1, 2, 3, and 4. Projectors transfer these points to the front view: point 1 to base at 1', point 2 to slant edge o'-a' at 2', point 3 to slant edge o'-b' at 3', and point 4 to base at 4'. The resulting cut surface 1'-2'-3'-4' in the front view is hatched. The retained lower portion of the solid is shown in firm outlines. Height of pyramid is dimensioned as 60 mm. Reference line is labeled x-y. Note at bottom right: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Sectional front view completed with cut surface $1'$-$2'$-$3'$-$4'$; true height of section is measured along projectors perpendicular to $H$-$T$.

#### Problem 92: Hexagonal Pyramid Cut by an AVP at $20^\circ$ to VP
**Given:** Hexagonal pyramid, base edge $b = 30\text{ mm}$, height $h = 60\text{ mm}$, resting on HP with two base edges parallel to VP. Section plane $\perp \text{HP}$, inclined at $20^\circ$ to VP, passing $15\text{ mm}$ from the vertex axis.
**Find:** Plan, sectional front view, and true shape of the section.

**Solution**
1. Draw the reference line $xy$. Draw the regular hexagonal plan $a$-$b$-$c$-$d$-$e$-$f$ with edges $a$-$b$ and $d$-$e$ parallel to $xy$, and apex at center $o$.
2. Project the plan vertices to $xy$ to construct the front view elevation with apex $o'$ at $60\text{ mm}$ above $xy$.

> **Figure: Step 92.1: Projections of a hexagonal pyramid**
>
> Orthographic projections of a hexagonal pyramid standing on the HP with axis perpendicular to the HP. Front view shows apex o' at height H = 60 mm above reference line xy. Base points on xy are marked a', b' f', c' e', d'. Top view shows a regular hexagon with base edge B = 30 mm (corners labelled a, b, c, d, e, f, and center/apex o). Slant edges connect each corner to apex o. Dimension 60 mm indicates the axis height. Scale 1:1, all dimensions are in mm.

3. In the plan, draw a circle of radius $15\text{ mm}$ centered at $o$ and draw the section line $H$-$T$ tangent to it at $20^\circ$ to the horizontal.
4. Label intersection points $1$ on base edge $a$-$b$, $2$ on slant edge $o$-$b$, $3$ on slant edge $o$-$c$, and $4$ on base edge $c$-$d$.

> **Figure: Step 92.2: Section plane in top view of hexagonal pyramid**
>
> Projections of the hexagonal pyramid showing a cutting plane H-T in the top view. The section plane is inclined at 20° to the horizontal/reference direction and is located at a perpendicular distance of 15 mm from the axis o. The cutting plane cuts the edges of the base and slant faces at points labelled 1, 2, 3, 4. The base dimension is 30 mm and height is 60 mm. Scale 1:1, all dimensions are in mm.

5. Project points $1$ and $4$ upward to reference line $xy$ as $1'$ and $4'$.
6. Project points $2$ and $3$ to slant edges $o'$-$b'$ and $o'$-$c'$ in the front view, forming boundary points $2'$ and $3'$.

> **Figure: Orthographic projections of a truncated hexagonal pyramid (step 92.3)**
>
> Step 92.3 of the projection and section of a hexagonal pyramid. 
> - Parameters in box: B = 30, H = 60. SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> - Front View: A hexagonal pyramid standing on the HP on reference line x-y. Apex is labelled o', base vertices are a', b', f', c', e', d'. Height is dimensioned as 60 mm. A cutting plane appears inclined, with cut points 1', 2', 3', 4' on generators/edges, and the sectioned portion hatched.
> - Top View: A regular hexagon with base edge dimensioned as 30 mm, with vertices a, b, c, d, e, f, and center/apex o. An inclined section plane H-T is shown inclined at 20° to the horizontal/edge direction, at a distance of 15 mm from center o. Cut points 1, 2, 3, 4 are marked where the cutting plane intersects the edges/base.

7. Connect points $1'$-$2'$-$3'$-$4'$ with dark lines, complete the retained solid outline, and hatch the section in the front view.

> **Figure: Orthographic projections and true shape of section of a hexagonal pyramid**
>
> Projection drawing showing the front view, top view, and true shape of a section of a hexagonal pyramid. 
> - Front view shows pyramid apex o', base points a'(e'), b'(d'), c', height 60 mm, with cut section hatched between points 1', 2', 3', 4'. Base width/side B = 30, Height H = 60.
> - Top view (plan) shows hexagonal base with vertices a, b, c, d, e, apex o, side length 30 mm. A section plane line cuts through edges at points 1, 2, 3, 4, inclined at 30° to the horizontal/reference, with offset distance 10 mm indicated to the axis. Cutting plane is indicated with section arrows labelled H and T.
> - An auxiliary reference line x1-y1 is drawn parallel to the cutting plane line.
> - The true shape of the section is projected perpendicular to x1-y1 and hatched, with vertices labelled 1, 2, 3, 4, showing width dimension W = 34.
> - Inset box: '88.4', 'B = 30', 'H = 60'.
> - Inset box: 'ANSWER W = 34'.
> - Note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

8. Draw an auxiliary datum line $x_1$-$y_1$ parallel to $H$-$T$. Project perpendicular rays from points $1, 2, 3, 4$ and transfer heights from $xy$ to plot the true shape $1_1$-$2_1$-$3_1$-$4_1$.

> **Figure: Projections and true shape of section of a hexagonal pyramid (step 92.4)**
>
> Step 92.4 of the section of a hexagonal pyramid showing the true shape of the section.
> - Parameters in box: B = 30, H = 60. SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> - Front View: Triangular outline of hexagonal pyramid with apex o' and base on x-y line (a', 1', b', f', c', e', 4', d'). Section cut points 1', 2', 3', 4' connected and hatched, height 60 mm.
> - Top View: Regular hexagon with corners a, b, c, d, e, f, center o. Cutting plane H-T inclined at 20°, offset by 15 mm from apex o, cutting points 1, 2, 3, 4.
> - Auxiliary Plane View: An auxiliary reference line x1-y1 parallel to the cutting plane H-T (or perpendicular projectors from cut points 1, 2, 3, 4). The true shape of the section is drawn with vertices 1, 2, 3, 4, hatched, using the heights/distances from the front view.

**Answer:** Sectional front view showing cut trapezoidal region $1'$-$2'$-$3'$-$4'$ and auxiliary true shape plotted along $x_1$-$y_1$.

#### Problem 89: Pentagonal Pyramid Cut by an AVP at $45^\circ$ to VP
**Given:** Pentagonal pyramid, base edge $b = 30\text{ mm}$, height $h = 60\text{ mm}$, base on HP with one base edge parallel to VP. Section plane $\perp \text{HP}$ and inclined at $45^\circ$ to VP, offset $10\text{ mm}$ from the axis.
**Find:** Plan, sectional elevation, and true shape of the section.

**Solution**
1. Draw reference line $xy$, base $a$-$b$-$c$-$d$-$e$ in the plan with edge $e$-$d \parallel xy$, and front view elevation with height $60\text{ mm}$.

> **Figure: Step 89.1: Orthographic projections of the pentagonal pyramid before sectioning**
>
> Step 89.1 shows the front and top projections of a pentagonal pyramid.
> - Given box: 'B = 30', 'H = 60'.
> - Reference line: Horizontal line labeled 'x' on the left and 'y' on the right.
> - Top View (below xy line): A regular pentagon labeled with vertices a, b, c, d, e, and apex at center o. Edge 'e-d' is horizontal (parallel to the xy line). Base edge 'a-b' is dimensioned as 30. Slant edges connect apex o to each base corner: o-a, o-b, o-c, o-d, o-e.
> - Front View (above xy line): The base lies on xy, with points labeled a', e', b', d', c' from left to right, projected vertically from the top view. Apex o' is located at a height of 60 mm above xy along the vertical center axis. Slant edges are drawn from o' to each base point (o'a', o'e', o'b', o'd', o'c').
> - Height dimension: 60 mm between base on xy and apex o'.
> - Footer notes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. In the plan, construct a $10\text{ mm}$ radius circle at apex $o$, and draw the cutting plane line $H$-$T$ inclined at $45^\circ$ tangent to the circle, cutting edges at points $1, 2, 3, 4$.

> **Figure: Step 89.2: Projections of a pentagonal pyramid with a section plane in the top view**
>
> Worked step labelled 89.2.
> GIVEN box:
> - B = 30
> - H = 60
> 
> Projections:
> - Reference line labelled x on the left and y on the right.
> - Top view (below xy line): A regular pentagon base a-b-c-d-e with center apex o. One side is dimensioned as 30. A cutting plane line H-T is inclined at 45° to the base edge and passes at a perpendicular distance of 10 mm from the apex o. The cutting plane intersects the edges at points 1, 2, 3, and 4.
> - Front view (above xy line): Triangle with apex o' and base on the xy line with corners a', e', b', d', c'. The vertical height of the pyramid from xy to o' is dimensioned as 60. Thin projection lines link the top view vertices to the front view base points.
> - Caption: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. Project cut points $1$ and $4$ on base edges to the ground line $xy$ as $1'$ and $4'$.
4. For points $2$ and $3$ on slant edges, project directly to the corresponding front-view edges $o'$-$b'$ and $o'$-$c'$ (or rotate to the true contour generator if needed) to locate $2'$ and $3'$.

> **Figure: Step 89.3: Sectional front view of the pentagonal pyramid with hatching**
>
> Worked step labelled 89.3.
> GIVEN box:
> - B = 30
> - H = 60
> 
> Projections:
> - Reference line x - y.
> - Top view (below xy): Pentagonal pyramid a-b-c-d-e with apex o and cutting plane line H-T inclined at 45° and offset 10 mm from center o, cutting at points 1, 2, 3, 4. An arc from o with radius to c rotates to horizontal point c1.
> - Front view (above xy): The cutting plane points are projected upward: point 1 to 1' on the base line, point 2 to 2' on slant edge o'a', point 3 to 3' on slant edge o'b' (height dimensioned as 31 from the xy line to point 3'), and point 4 to 4' near the base. The sectioned face bounded by 1'-2'-3' is hatched with diagonal lines. The retained portion of the pyramid is drawn with thick dark outlines, while cut-away edges are faint.
> - Caption: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

5. Set up auxiliary axis $x_1$-$y_1$ parallel to $H$-$T$. Project lines perpendicular to $H$-$T$ and transfer the vertical heights of $1', 2', 3', 4'$ from $xy$ to outline and hatch the true shape.

> **Figure: Section of a pentagonal pyramid and true shape of section**
>
> Worked solution drawing labelled 89.4 for a pentagonal pyramid (base side B = 30 mm, height H = 60 mm, scale 1:1, all dimensions in mm). 
> - Top view: Regular pentagon a-b-c-d-e with center apex o, base edge dimensioned as 30 mm. A vertical cutting plane line T-T is inclined at 45° to the reference line xy, at an offset distance of 10 mm perpendicular to the axis o. It intersects edges at points 1, 2, 3, 4.
> - Front view: Shows the triangular outline on ground line x-y. The section plane projects vertically to cut the edges at points 1', 2', 3', 4'. The sectioned upper portion between 1'-2'-3'-4' and the base is hatched with section lines. Heights are dimensioned (vertical dimension 31 mm shown on the right).
> - True shape of section: Projected perpendicular to cutting plane line T-T onto reference line x1-y1, forming the hatched true shape quadrilateral 1-2-3-4.

**Answer:** Sectional front view completed; true shape is a quadrilateral with true height equal to the vertical distance of point $3'$ above $xy$.

#### Problem 118: Cone Cut by a Vertical Plane Parallel to VP (Rectangular Hyperbola)
**Given:** Cone of base diameter $d = 50\text{ mm}$, axis $h = 60\text{ mm}$, resting on base on HP. Section plane vertical, parallel to VP, and $10\text{ mm}$ in front of the axis.
**Find:** Sectional front view, top view, and true shape of section.

**Solution**
1. In the top view, draw a circle of diameter $50\text{ mm}$ divided into 8 equal parts ($a$ through $h$). Project generators upward to front view apex $o'$ at height $60\text{ mm}$.

> **Figure: Projections of a cone, step 118.1**
>
> Step 118.1: Orthographic projection of a cone resting on HP with base on XY line.
> - Given box: D = 50, H = 60.
> - Front view: Isosceles triangle with apex o' and base points on reference line xy: a', b'(h'), c'(g'), d'(f'), e'. Height of apex o' from xy is 60 mm. Generators connect o' to base points.
> - Top view: Circle of diameter Ø50 centered at o, divided into 8 equal sectors with points labeled counter-clockwise: a (left, 9 o'clock), b, c (bottom, 6 o'clock), d, e (right, 3 o'clock), f, g (top, 12 o'clock), h. Thin projection lines link points between views.
> - Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

2. Draw the cutting plane line $H$-$T$ parallel to $xy$ at a distance of $10\text{ mm}$ in front of the axis line $a$-$e$ in the top view.
3. Mark intersection points $1$ and $5$ on the base circle circumference, and points $2, 3, 4$ where $H$-$T$ intersects plan generators $o$-$b, o$-$c, o$-$d$.

> **Figure: Projections of a cone with cutting plane line, step 118.2**
>
> Step 118.2: Cutting plane introduced in top view.
> - Given box: D = 50, H = 60.
> - Front view and top view are identical to step 118.1 (base diameter Ø50, height 60 mm).
> - In the top view, a section plane line H-T is drawn parallel to the horizontal centerline a-e at a distance of 10 mm below it. Arrows at ends labeled H and T point downwards.
> - Intersections of the cutting plane with the cone features are numbered 1 through 5 from left to right: 1 on the outer circumference, 2 on generator o-b, 3 on generator o-c, 4 on generator o-d, and 5 on the outer circumference.
> - Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

4. Project base points $1$ and $5$ vertically to reference line $xy$.
5. Project internal intersection points $2, 3, 4$ to the corresponding front view generators $o'$-$b', o'$-$c', o'$-$d'$.
6. Draw a smooth curve through points $1', 2', 3', 4', 5'$ and hatch the region.

> **Figure: Orthographic projections of a cone cut by a section plane, showing a hyperbolic cross-section.**
>
> Step 118.3 of a worked problem showing the section of a cone producing a hyperbola.
> - Top-left box: 'D = 50', 'H = 60', with text 'HYPERBOLA'.
> - Front View (above line x-y): Triangular elevation of the cone with apex o' and base a'-e' of diameter 50 mm, height 60 mm. The sectional area is hatched with boundary points 1, 2, 3, 4, 5 forming a hyperbolic profile. Base points labelled a', 1, b'(h'), c'(g'), d'(f'), 5, e'. Apex labelled o'.
> - Top View (below line x-y): Circular plan with center o and diameter Ø50, generator lines radiating to points a, h, g, f, e. A horizontal cutting line H-T is positioned 10 mm offset from the center/axis, intersecting the base circle at points 1, 2, 3, 4, 5.
> - Projectors connect top view points 1, 2, 3, 4, 5 to front view points 1, 2, 3, 4, 5.
> - Annotations: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Key idea.** A cutting plane parallel to the vertical axis of a cone produces a hyperbolic section; since the plane is parallel to VP, the sectional front view directly shows the true shape of the hyperbola.

**Answer:** The sectional front view shows the true shape of the section, which is a hyperbola of base length $\approx 45.8\text{ mm}$ and height $36\text{ mm}$.

#### Problem 119: Cone Cut by an AVP at $45^\circ$ to VP (Hyperbolic Section)
**Given:** Cone of diameter $d = 50\text{ mm}$, height $h = 60\text{ mm}$, resting on HP on its base. Vertical section plane inclined at $45^\circ$ to VP, passing $10\text{ mm}$ from the axis.
**Find:** Top view, sectional front view, and true shape of the section.

**Solution**
1. Draw the circular plan ($\varnothing 50\text{ mm}$) divided into 8 equal parts, and project the triangular front view of height $60\text{ mm}$.

> **Figure: Orthographic projections of a cone (Step 119.1)**
>
> Step 119.1 of the solution. Given parameters: D = 50 mm, H = 60 mm. The drawing shows the initial front view (elevation) and top view (plan) of a vertical cone:
> - Top view (below xy line): A circle of diameter Ø50 mm with center o, divided into 8 equal parts by four diameters with perimeter points labeled clockwise starting from the left: a, h, g, f, e, d, c, b (a-e is horizontal, g-c is vertical).
> - Front view (above xy line): An isosceles triangle with apex o' and base lying on the reference line xy. Height of apex o' above xy is 60 mm. The base points are projected directly upward from the top view and labeled: a' (leftmost), b'(h'), c'(g') (axis center line), d'(f'), and e' (rightmost). Generators connect each base point to the apex o'.
> - Notes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. In the plan, draw an offset circle of radius $10\text{ mm}$ centered at $o$. Draw cutting plane $H$-$T$ inclined at $45^\circ$ to $xy$ and tangent to this circle.
3. Label intersections: points $1$ and $5$ on the base circle, and points $2, 3, 4$ on radial generators.

> **Figure: Section plane cutting the top view of the cone (Step 119.2)**
>
> Step 119.2 of the solution. Given parameters: D = 50 mm, H = 60 mm.
> - Front view: Same as step 119.1, triangular elevation of the cone with apex o', height 60 mm, base on xy with points a', b'(h'), c'(g'), d'(f'), e'.
> - Top view: The circular top view (Ø50 mm, 8 divisions: a, b, c, d, e, f, g, h) intersected by a cutting plane line H-T.
> - Cutting plane: Inclined at 45° to the vertical (parallel to the 45° diameter line h-o-d), offset at a perpendicular distance of 10 mm from the center o towards the bottom. Arrows labeled 'H' and 'T' at the ends of the cutting plane line point downward/inward perpendicular to the plane.
> - Intersection points along the cutting plane line are numbered:
>   - 1: intersection with the base circle between a and h
>   - 2: intersection with generator o-a
>   - 3: intersection with generator o-b
>   - 4: intersection with generator o-c
>   - 5: intersection with the base circle between c and d.
> - Notes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

4. Project the cutting points vertically into the front view generators. For points near center, project horizontally to the contour generator and transfer back to locate heights $2', 3', 4'$. Connect with a smooth curve and hatch.

> **Figure: Orthographic projection step 119.3 of a cone cut by an inclined section plane**
>
> Step 119.3 showing orthographic projection of a cone cut by a section plane. Boxed label '119.3'. Given parameters: D = 50, H = 60. Note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'. Front view shows cone of apex o', base points a', b'(h'), c'(g'), d'(f'), e' on the horizontal reference line x-y. Height of cone is 60 mm. The sectional front view shows a hatched curve resulting from the cut. Top view shows the circular base of diameter Ø50 with center o and generators radiating to base points. A cutting plane line labeled H-T is inclined at 45° to the x-y axis, offset by 10 mm from the base perimeter/centerline, cutting the cone generators at points 1, 2, 3, 4, 5. Projector lines project these cut points upwards to the corresponding generators in the front view to construct the hatched section.

5. Draw auxiliary plane $x_1$-$y_1$ parallel to $H$-$T$. Project perpendicular rays from points $1$ through $5$, transferring the vertical heights of each point from $xy$ to obtain the true shape.

> **Figure: Orthographic projection step 119.4 showing true shape of the hyperbolic section**
>
> Step 119.4 completing the sectional projection and constructing the true shape of the section. Boxed label '119.4'. Given parameters: D = 50, H = 60. Text notes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', 'HYPERBOLA'. Contains the front view and top view from step 119.3, along with an auxiliary projection plane x₁-y₁ drawn parallel to the cutting plane line H-T (inclined at 45° with a 10 mm offset). Perpendicular projection lines are drawn from cut points 1, 2, 3, 4, 5 on line H-T across reference line x₁-y₁. Distances from the front view are transferred to plot points 1, 2, 3, 4, 5, defining a smooth, hatched curve representing the true shape of the section, labeled 'HYPERBOLA'.

**Answer:** Sectional front view drawn; true shape of the cut is a hyperbola plotted along $x_1$-$y_1$.

#### Problem 93: Hexagonal Pyramid Cut by a Profile Plane
**Given:** Regular hexagonal pyramid, base edge $b = 30\text{ mm}$, axis $h = 60\text{ mm}$, base on HP with two base edges perpendicular to VP. Cutting plane $\perp$ to both HP and VP, passing $15\text{ mm}$ to the left of the axis.
**Find:** Front view, top view, and sectional side view (true shape).

**Solution**
1. Set up axes $xy$ and $x_1 y_1$ (or $x' y'$). In the top view, draw regular hexagon $a$-$b$-$c$-$d$-$e$-$f$ with edges $a$-$f$ and $c$-$d$ perpendicular to $xy$.
2. Project upward to construct the front view elevation with apex $o'$ at height $60\text{ mm}$. Using a $45^\circ$ miter line from the axis origin, project the side view outline.

> **Figure: Step 93.1: Projections and initial side view of a hexagonal pyramid**
>
> Engineering drawing showing step 93.1 of the projection of a hexagonal pyramid:
> - A horizontal reference line labeled x-y and a vertical reference line labeled x'-y' intersecting at the axis origin.
> - Box at the top-left of the drawing indicates: B = 30, H = 60.
> - Top View (Plan): A regular hexagon with base side 30 mm, oriented such that vertical edges (a-f and c-d) are perpendicular to the XY line. Vertices are labeled counterclockwise: a (bottom-left), b (bottom-center), c (bottom-right), d (top-right), e (top-center), f (top-left), with center apex labeled o. Internal generators connect each base corner to o.
> - Front View (Elevation): The base rests directly on the xy line with points a'(f'), b'(e'), and c'(d'). The apex o' is at a height of 60 mm along the central axis projector from o. Triangular faces are outlined by joining o' to the base corners.
> - Side View (Right Profile View): Horizontal projection lines from corners of the top view extend rightward to the vertical axis x'-y', then arc 90 degrees upward to the xy line using circular transfer arcs, yielding points e'', f'' d'', a'' c'', and b''. Apex o'' is projected horizontally from o' at height 60 mm. Generators connect o'' to each base point.
> - Dimension 30 mm shown on the base edge (between f and a).
> - Dimension 60 mm shown for the height from xy to o'.
> - Bottom note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

3. In the top view, draw the cutting plane line perpendicular to $xy$ at a distance of $15\text{ mm}$ to the left of axis $o$, intersecting base and slant edges at points $1, 2, 3, 4$.
4. Project points $1, 2, 3, 4$ upward into the front view, marking the cut boundary lines.

> **Figure: Step 93.2: Orthographic projections and side view construction for a cut hexagonal pyramid**
>
> Step 93.2 of the solution for problem 93. Box at top-left shows given dimensions: base side B = 30 mm, height H = 60 mm. Bottom-right text: 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.
> - Reference axes: Horizontal ground line x-y and vertical reference line x'-y' intersecting at an origin.
> - Front view (above x-y): Triangular elevation of the regular hexagonal pyramid with apex o' at height 60 mm (dimensioned on the left). Base vertices on x-y are a'(f'), b'(e'), and c'(d'). An axis/edge line runs from o' to b'(e').
> - Top view (below x-y): Regular hexagon with apex o at the center and vertices e (top), d (top-right), c (bottom-right), b (bottom), a (bottom-left), f (top-left). Hexagon width dimensioned as 30 on the left. A vertical cutting plane is located 15 mm to the left of the central axis (dimensioned 15 at bottom), cutting edges at point 1 (on f-e), point 2 (on f-o), point 3 (on a-o), and point 4 (on a-b). Arrows labeled 'T' at top and 'V' at bottom point rightward indicating the viewing direction for the sectional side view.
> - Side view construction (right of x'-y'): Apex o'' is at height 60 mm, projected horizontally from o'. Horizontal projectors from top view vertices (e, d, c, b, a, f) extend to the x'-y' axis and are rotated 90 degrees via quarter-circle arcs centered at the axis origin onto the x-y line, establishing base points e'', f'' d'', a'' c'', and b''. Slant edges connect o'' to each base point. Projection lines from the cutting points also begin extending rightward.

5. Project points $1, 2, 3, 4$ from the top view onto the $45^\circ$ miter line, turn them vertically into the side view, and intersect with horizontal projectors from corresponding points in the front view.
6. Connect the cut points in the side view, outline the retained pyramid edges, and hatch the section.

> **Figure: Step 93.3: Sectional side view and final views of the cut hexagonal pyramid**
>
> Step 93.3 of the solution for problem 93. Box at top-left shows given dimensions: base side B = 30 mm, height H = 60 mm. Bottom-right text: 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.
> - Top view (below x-y): Regular hexagon with vertices a, b, c, d, e, f and center o, cut by a vertical section plane at 15 mm from the axis, with cutting points 1, 2, 3, 4.
> - Front view (above x-y): Elevation of the pyramid with apex o' and base a'(f'), b'(e'), c'(d'). Points 3', 2' are marked along the cutting plane line, projected horizontally from the side view.
> - Sectional side view (right of x'-y'):
>   - The cutting plane points are projected via quarter-circle arcs and vertical lines into the side view:
>     - Points 1 and 4 on the base project to 1'' and 4'' on the x-y base line.
>     - Points 2 and 3 on the slant edges project to points 2'' and 3'' at their corresponding heights on the slant edges.
>   - The cross-sectional surface 1''-2''-3''-4'' is hatched with evenly spaced diagonal section lines at 45 degrees.
>   - A horizontal projector links height 2'', 3'' back to 3', 2' in the front view.
>   - The visible outline of the cut solid is outlined in thick solid lines: from e'' to o'', o'' to b'', along the base to 4'', up through the section boundary 4''-3''-2''-1'', and along the base to e''.

> **Key idea.** A plane perpendicular to both HP and VP is a profile plane; the sectional side view gives the true shape of the cut surface directly without needing an auxiliary view.

**Answer:** The sectional side view shows the true shape of the cut trapezoid located $15\text{ mm}$ from the axis.

#### Problem 120: Cone Cut by a Profile Plane (Hyperbola with $40\text{ mm}$ Base)
**Given:** Cone of diameter $d = 50\text{ mm}$, height $h = 60\text{ mm}$, resting on HP. Cutting plane perpendicular to both HP and VP producing a hyperbolic true shape having a base width of $40\text{ mm}$.
**Find:** Front view, top view, and sectional side view.

**Solution**
1. Draw circular top view ($\varnothing 50\text{ mm}$) and triangular front view (height $60\text{ mm}$). Set up the vertical profile axis $x'$-$y'$ and draw the $45^\circ$ miter line.

> **Figure: Step 120.1: Initial projection showing front view, top view, and right side view setup of a cone resting on its base on HP**
>
> Orthographic projections of a cone:
> - Reference lines: horizontal XY line labelled 'x' on the left and 'y' on the right; vertical axis labelled 'y'' at the top and 'x'' at the bottom.
> - Top view (below XY line, left of vertical axis): A circle of diameter 50 mm (labelled 'Ø50') centered at 'o', divided into 8 equal sectors with circumferential points labelled counterclockwise from left: a, b, c, d, e, f, g, h.
> - Front view (above XY line, left of vertical axis): Triangle with base on the XY line and apex at 'o''. Base points correspond to top-view projections: a', b'(h'), c'(g'), d'(f'), e'. Cone height is dimensioned as 60 mm.
> - Side view construction (to the right of vertical axis): Horizontal projection lines from top view points g, f, e, d, c extend rightward to the vertical axis, then curve via quarter-circle arcs to the XY line, meeting base points labelled g'', f''h'', a''e'', b''d'', c''. Above the XY line, generators extend to the side-view apex o''.
> - Annotation box: '120.1' with 'D = 50', 'H = 60'.
> - Scale note at bottom right: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

2. In the top view, identify a chord of length $40\text{ mm}$ perpendicular to $xy$. By geometry, distance from center $o$ is $\sqrt{R^2 - (w/2)^2} = \sqrt{25^2 - 20^2} = 15\text{ mm}$. Draw the vertical section line at $15\text{ mm}$ from $o$.
3. Mark section points: base ends $1$ and $5$ (chord length $40\text{ mm}$), and generator intersections $2, 3, 4$.

> **Figure: Orthographic projection step 120.2 showing construction lines for a sectioned cone**
>
> Step 120.2 of orthographic projection of a cone cut by a section plane parallel to VP. Given parameters in a box on the left: D = 50, H = 60. The layout shows:
> - Reference axes: Horizontal axis x-y and vertical reference axis y'-x' separating front view and side view.
> - Top view: A circle of diameter Ø50 with center 'o', divided into 8 equal parts labeled a, b, c, d, e, f, g, h. A vertical cutting plane T-T cuts the circle along chord h-b (length 40 mm). Intermediate points 1, 2, 3, 4, 5 are marked along the section line.
> - Front view: Cone elevation with base on x-y line of points a', b'(h'), c'(g'), d'(f'), e', and apex o' at height 60 mm. Light construction lines connect base points to apex o'. Cutting plane T-T is projected upwards as a dashed line.
> - Side view (profile view): Shows apex o'' at height 60 mm. Projection arcs centered on the origin transfer horizontal positions from the top view to the profile baseline, locating points g'', f''h'', a''e'', b''d'', c'', which connect to apex o''.
> - Annotations: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

4. Project the cutting line to the front view to show the truncated vertical face. Project the cut points horizontally and through the $45^\circ$ miter line into the side view to construct and hatch the hyperbolic section.

> **Figure: Orthographic projection step 120.3 showing the completed views and hatched section of the cone**
>
> Step 120.3 of orthographic projection of the cut cone. Given box: D = 50, H = 60.
> - Top view: Shows the retained portion of the circular base (Ø50) with the circular segment beyond chord h-b removed. The cut section line b-h has length 40 mm and contains points 1, 2, 3, 4, 5.
> - Front view: The remaining truncated cone is drawn with dark outlines, showing the vertical cut surface rising from base point b'(h') to the outer generator, and base line from b'(h') to e'.
> - Side view (left profile view): Shows the true shape of the vertical section surface as a hatched hyperbolic area with a base width of 40 mm (centered at a''e'' and spanning to f''h'' and b''d''). The outline of the cone is also darkened.
> - Annotations: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Front and top views completed; side view shows the true shape of the hyperbola with base width $40\text{ mm}$ and section height $24\text{ mm}$.

### Quick recall
- Planes perpendicular to HP appear as straight cutting-plane lines ($H$-$T$) in the top view.
- If a cutting plane is parallel to the axis of a right circular cone, the resulting section is always a hyperbola.
- A profile cutting plane is parallel to the profile plane of projection; thus, the side view directly represents the true shape of the cut section.
- True shapes for Auxiliary Vertical Planes require an auxiliary reference plane $x_1$-$y_1$ drawn parallel to $H$-$T$, taking heights directly from the front view.

<!-- page 6 | Inverse Section Problems: Determining Plane Angles from Section Geometry -->

## Inverse Section Problems: Determining Plane Angles from Section Geometry

> **Syllabus note.** Note: The syllabus explicitly states 'Exclude true shape given problems' and restricts solids to Prisms, Pyramids, Cone, and Cylinder only with the axis in a vertical position.

### What you need
- An **Auxiliary Inclined Plane (AIP)** appears as an inclined line trace ($V$-$T$) in the front view making an angle $\theta$ with the $xy$ reference line.
- True horizontal widths of cut sections project directly to and from the top view without foreshortening ($W_{\text{true}} = W_{\text{TV}}$).
- Slant dimensions along the cutting plane foreshorten in elevation according to $L_{\text{elevation}} = L_{\text{true}} \cos\theta$.
- A section plane parallel to a single generator of a right circular cone produces a **parabola**; the base cut chord is the **double ordinate** ($2y$), and the section length along the axis is the **abscissa** ($x$).
- Cube and tetrahedron symmetries:
  - Regular hexagon in a cube of side $a$: cutting plane bisects six edges; hexagon side $s = \frac{a}{\sqrt{2}} \approx 0.707a$, $\theta = 54.74^\circ \approx 55^\circ$ to the axis/vertical.
  - Maximum square in a regular tetrahedron of edge $E$: cutting plane is parallel to two mutually perpendicular skew edges and bisects them; square side $s = \frac{E}{2} = 0.5E$.

### The method
1. Draw the reference line $xy$ and project the initial front and top views from the given base orientation.
2. Locate known horizontal section dimensions (such as widths, chords, or parallel edges) directly in the top view across corresponding edges or generators.
3. Project these located points vertically upward to the corresponding edges, generators, or base line in the front view.
4. Draw the cutting plane trace ($V$-$T$) through the projected points in the front view, satisfying given geometric constraints (e.g., parallelism to a generator or a specific true slant length).
5. Measure the cutting plane inclination $\theta$ with the horizontal ($xy$) or vertical axis, and determine any unknown solid heights.
6. Draw an auxiliary reference line $x_1y_1$ parallel to the cutting plane trace $V$-$T$, project perpendiculars from each cut point, and transfer lateral distances from the top view to obtain the true shape.

### Problems

#### Problem 101: Square Pyramid — Trapezium Section
**Given:** Square pyramid, base edge $40\text{ mm}$, height $60\text{ mm}$, resting on base on HP. True shape of section is a trapezium with parallel sides $30\text{ mm}$ and $20\text{ mm}$.  
**Find:** Inclination $\theta$ of the section plane, distance between the parallel sides, and true shape.

**Solution**
1. Draw top view $abcd$ of the square base ($40\text{ mm} \times 40\text{ mm}$) with sides horizontal/vertical, diagonals intersecting at apex $o$, and project the front view triangle $a'(d')b'(c')o'$ of height $60\text{ mm}$.
2. In the top view, draw horizontal lines representing parallel cut widths of $30\text{ mm}$ and $20\text{ mm}$ across slant edges $oa, od$ and $ob, oc$ respectively.
3. Project these cut points vertically to slant edges $o'a'(d')$ as point $1'$ and $o'b'(c')$ as point $2'$ in the front view.
4. Connect $1'$ and $2'$ to form the cutting plane trace $V$-$T$, extending to the $xy$ line, and measure the inclination angle $\theta$.
5. Draw auxiliary line $x_1y_1$ parallel to $1'2'$ and project cut points perpendicular to it.
6. Transfer perpendicular top-view distances from the center line to locate true shape corners and hatch the resulting trapezium.

> **Figure: Initial orthographic projections of a square pyramid**
>
> Projection step labeled 96.1 showing the initial setup of a square pyramid of base side 40 mm and height 60 mm. The reference line xy separates the views. In the top view below xy, square base abcd is drawn with horizontal sides ab and cd, vertical sides ad and bc, and diagonals intersecting at center o. A dimension of square 40 is indicated below edge ab. Projectors extend upward to the xy line: a and d project to a'(d'), b and c project to b'(c'). The apex o projects along a centerline to o' at a height of 60 mm above xy. The front view forms an isosceles triangle o'-a'(d')-b'(c'). A text box next to the axis indicates 'B = 40' and 'H = 60'.

> **Figure: Orthographic projections of a cut square pyramid (Step 96.2)**
>
> Step 96.2 of problem 96. Shows the front view and top view of a truncated square pyramid.
> - Given box: B = 40, H = 60, SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> - Front view: Apex o', base a'(d') to b'(c') of width 40 mm resting on the XY line. Axis height is 60 mm. A cutting plane line cuts the pyramid through point 1' on slant edge o'-a'(d') and point 2' on slant edge o'-b'(c') at an inclination angle θ = 31° to the horizontal. Viewing arrows marked 'T' (perpendicular to cutting plane) and 'V' (from the right).
> - Top view: Base square a-b-c-d of side length 40 mm, center apex o. Section area is hatched with vertices 1, 2, 2_1, 1_1. The vertical distance between 1 and 1_1 is 20 mm, and between 2 and 2_1 is 30 mm.
> - Answer box: θ = 31°.

> **Figure: Auxiliary view showing the true shape of the section of a square pyramid (Step 96.3)**
>
> Step 96.3 of problem 96. Demonstrates the construction of the true shape of the section.
> - Base projections (front and top views) identical to Step 96.2.
> - Auxiliary projection: An auxiliary reference line x1-y1 is drawn parallel to the cutting plane line 1'-2'. Projectors are drawn perpendicular to x1-y1 from cutting points 1' and 2' to construct the true shape of the cut section with hatched quadrilateral boundary 1-1_1-2_1-2. Width is marked as W.
> - Given box: B = 40, H = 60, SCALE 1:1, ALL DIMENSIONS ARE IN mm.
> - Answer box: θ = 31°, W = 29 mm.

**Answer:** Section plane inclination $\theta \approx 48^\circ$; distance between parallel sides $\approx 22\text{ mm}$.

---

#### Problem 102: Square Prism — Trapezium Section
**Given:** Square prism, base edge $40\text{ mm}$, height $70\text{ mm}$, resting on HP with vertical faces equally inclined at $45^\circ$ to VP. True shape of section is a trapezium with parallel sides $20\text{ mm}$ and $40\text{ mm}$.  
**Find:** Inclination $\theta$ of the section plane with HP, sectional views, and true shape.

**Solution**
1. Draw top view $abcd$ as a square turned at $45^\circ$ to $xy$ with diagonal horizontal; label top corners $a, b, c, d$ and base corners $e, f, g, h$.
2. Project front view $a'c'g'e'$ of width equal to the corner-to-corner diagonal and height $70\text{ mm}$.
3. In top view, identify the diagonal width $40\text{ mm}$ at corner $b(f)$ or $d(h)$ and mark the chord of width $20\text{ mm}$ across the adjacent faces.
4. Project the located points to the corresponding vertical edges in the front view to define cutting points $1'$ and $2'$.
5. Draw the cutting plane line through $1'$ and $2'$; extend it to intersect $xy$ and measure angle $\theta$.
6. Set up auxiliary axis $x_1y_1$ parallel to $V$-$T$, project perpendiculars from all cut points, transfer lateral top-view widths, and draw the hatched trapezium.

> **Figure: Step 100.1: Initial front and top views of the square prism resting on HP**
>
> Step 100.1 showing the initial orthographic projections of a square prism:
> - Top View: A square resting with its vertical faces equally inclined at 45° to the VP (diamond orientation). The vertices are labelled counter-clockwise: left corner a(e), bottom corner b(f), right corner c(g), top corner d(h). The edge length is dimensioned as '□40'.
> - Front View: Projected above the horizontal reference line (marked 'y' on both ends). The base lies on the reference line with vertices e' on the left, f'(h') in the centre, and g' on the right. The top face has vertices a' on the left, b'(d') in the centre, and c' on the right. A central vertical axis/edge connects f'(h') to b'(d'). The total height is dimensioned as 70 mm on the left.
> - Step label box at upper-right: '100.1', with 'B = 40' and 'H = 70'.
> - Bottom text: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 100.2: Orthographic projections of a truncated square prism**
>
> Front view and top view of a truncated square prism standing on HP. The square base has side 40 mm, height H = 70 mm. In the top view, the square base is oriented with diagonals parallel and perpendicular to the reference line y-y; corners are labelled a(e) at left, b(f) at bottom, c(g) at right, and d(h) at top. The side is dimensioned as square 40. A section plane cuts through the prism, with the hatched cut section bounded by points 1, 2, 2_1, and 1_1. The vertical distance between points 1 and 1_1 is 20 mm, while the total width across the corner is 40 mm. In the front view, the prism is drawn on ground line y-y with height 70 mm. Points at top: a', b'(d'), c'; points at base: e', f'(h'), g'. The cut section is shown by inclined line 1'-2'. Arrow V points downwards from above b'(d') towards 2', and arrow T points upwards. A box at the upper right indicates '100.2' with givens B = 40, H = 70. Note at bottom right: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 100.3: True shape of section of the truncated square prism using an auxiliary plane**
>
> Auxiliary projection to determine the true shape of the section of the truncated square prism. The front view and top view are reproduced from step 100.2 with base B = 40 mm and height H = 70 mm. The cutting plane in the front view is inclined at angle θ to the horizontal ground line. An auxiliary reference line x_1-y_1 is drawn parallel to the cutting plane line 1'-2'. Projectors are drawn perpendicular to x_1-y_1 from points 1' and 2' to obtain the true shape of the cut section, labelled with vertices 1, 2, 2_1, 1_1 and hatched. The true length of the section is dimensioned as W. A box labelled '100.3' shows 'B = 40', 'H = 70'. An 'ANSWER' box indicates 'θ = 82°', 'W = 71mm'. Note at bottom right: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Inclination of section plane $\theta \approx 58^\circ$.

---

#### Problem 103: Square Prism — Hexagonal Section and Unknown Height
**Given:** Square prism, base edge $40\text{ mm}$, resting on HP. Cut by an AIP yielding an irregular hexagon with two opposite parallel sides of $30\text{ mm}$ and four sides of $40\text{ mm}$.  
**Find:** Height $H$ of the prism, inclination $\theta$ of the section plane with HP, and projections.

**Solution**
1. Draw the top view of the prism with edges inclined at $45^\circ$ to $xy$; draw a vertical chord of length $30\text{ mm}$ across the left corner faces to establish the top edge of the section.
2. In the auxiliary projection aligned with the cutting direction, lay out the true shape hexagon with two parallel sides of $30\text{ mm}$ and remaining four sides of $40\text{ mm}$, measuring the total true section length $L = 75\text{ mm}$.
3. In the front view, swing an arc of radius $R = L = 75\text{ mm}$ from the lowest cut point on the base line up to intersect the vertical projector of the uppermost cut edge.
4. Measure the vertical height from the base to this intersection to determine overall prism height $H = 71\text{ mm}$.
5. Draw the cutting plane trace $V$-$T$ connecting these cut points and measure its inclination $\theta$ to the horizontal.
6. Project the intermediate cut points to complete the sectional front view and sectional top view.

> **Figure: Step 103.1: Initial top view and base front view of the square prism**
>
> Initial orthographic projections (step 103.1) of a square prism with base edge 40 mm. Reference line xy is horizontal. The top view below xy is a square rotated 45 degrees, with vertices labeled clockwise: top vertex d(h) lying on the vertical centerline, right vertex c(g), bottom vertex b(f), and left vertex a(e). Dimension of square side is marked as □40. Vertical projectors extend upwards from a(e), d(h), and c(g) to the xy line, marking base points e', f'(h'), and g' on the xy line. A small box above the drawing is labeled '103.1' and 'B = 40'. Notes at the bottom read 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 103.2 of orthographic projection and true shape construction**
>
> Projection drawing showing the top view (below xy reference line) of a cut hexagonal prism or shape with vertices labelled a(e), b(f), c(g), d(h). The left section between vertical line of length 30 and d(h)-b(f) is hatched. Above xy are projected points e', f'(h'), g'. To the right is an auxiliary hexagonal view with side dimension 40 and total length L = 75, with horizontal projection alignment lines to the top view. Given parameters: B = 40, Scale 1:1, all dimensions in mm.

> **Figure: Step 103.3 finding height H = 71 mm using arc of radius L = R75**
>
> Continuation of step 103.2 showing the construction of the front view height H. An arc with radius L = R75 swings from point b(f) up to the projector from e', determining the overall height H. Beside it is the answer box 'ANSWER: H=71mm'. The top view shows the hatched hexagonal shape with side length 30, vertices a(e), b(f), c(g), d(h), and the right-hand view with side 40 and overall length L = 75.

> **Figure: Section of solid orthographic projections and true shape of section labeled 103.4**
>
> Technical drawing for problem 103.4 showing sections of a solid:
> - Information boxes: 'B = 40', 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', and ANSWER box: 'H = 71mm', 'θ = 69°'.
> - Front View (above reference line x-y): Vertical elevation of total height H, intersected by a cutting plane VT inclined at angle θ to the horizontal. The cutting plane passes through points marked 1', 2', 3', with a vertical dimension of 30 mm shown. Corners of the base and solid are labeled e', f'(h'), g'.
> - Top View (below reference line x-y): Plan view with vertices labeled a(e), b(f), c(g), d(h). The cut section inside is hatched and connects points labeled 1, 2, 3, 4 with a side dimension of 40.
> - True Shape of Section: Projected perpendicular to the cutting plane VT onto an auxiliary plane line x1-y1. The resulting section is a hatched symmetric polygon with vertices labeled 1, 2, 3.
> - Additional view to the right: A six-sided symmetrical figure with side length 40 and total length dimension L = 75.

**Answer:** Prism height $H = 71\text{ mm}$; cutting plane inclination $\theta = 69^\circ$.

---

#### Problem 104: Cube — Rhombus Section of Maximum Size
**Given:** Cube of $40\text{ mm}$ side, resting on HP with vertical faces equally inclined to VP. True shape of section is a rhombus of maximum side length.  
**Find:** Inclination $\theta$ of the section plane, sectional top view, true shape, and side length.

**Solution**
1. Draw the top view of the cube as a square of side $40\text{ mm}$ with diagonals parallel and perpendicular to $xy$, and project the front view rectangle of height $40\text{ mm}$.
2. For maximum side length, the section plane must cut through the two opposite extreme vertical edges $a'-e'$ and $c'-g'$ and cross the center.
3. Draw the cutting plane trace $V$-$T$ passing through the bottom corner $e'$ and the opposite top corner $c'$ (or through the midpoints of the opposite vertical faces to span the diagonal).
4. Measure inclination $\theta$ of trace $V$-$T$ with the horizontal base line.
5. Project the intersection points with the vertical edges down to the top view to complete the sectional top view.
6. Draw $x_1y_1$ parallel to $V$-$T$, project perpendiculars from cut points $1', 2', 3'$, transfer half-diagonal widths from the top view, and measure the rhombus side.

> **Figure: Orthographic projections of a square prism / cube standing vertically**
>
> Step 106.1 shows the initial projections of a vertical square prism (or cube) with a side of base B = 40 mm. 
> Top View: A square inclined at 45° to the XY line with vertices labeled a(e) on the left, d(h) at the top, c(g) on the right, and b(f) at the bottom. One edge length is dimensioned as '□40'.
> Front View: Located above the XY line, drawn as a rectangle resting on the reference line xy. The base vertices on xy are labeled e', f'(h'), and g'. The top face vertices are labeled a', b'(d'), and c'. Vertical projection lines link corresponding points between the top and front views.
> Labels and annotations: 'B = 40' in a rectangle above; 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm' at the bottom right.

> **Figure: Section of a square prism cut by an inclined cutting plane**
>
> Step 106.2 shows the prism cut by an inclined section plane T-V.
> Front View: An inclined cutting plane represented by a center line with thick ends and arrows marked 'T' (upper left) and 'V' (lower right) cuts through the front view. The cutting plane intersects the leftmost vertical edge a'-e' at point 1', the central vertical axis/edges at point 2', and the rightmost vertical edge c'-g' at point 3'.
> Top View: The entire square cross-section is hatched with section lines inclined at 45°. Points corresponding to the cutting plane are marked 1 at vertex a(e), 2 at vertex d(h), 3 at vertex c(g), and 2₁ at vertex b(f).
> Labels and annotations: '106.2' and 'B = 40' at the top; 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm' at the bottom.

> **Figure: Orthographic projections and true shape of a section of a cube**
>
> Worked solution 106.3 for a cube section. Top view shows a square of side 40 mm resting on a corner with edges inclined at 45 degrees to the reference line xy, vertices labeled a(e), b(f), c(g), d(h). The front view shows the elevation of the cube bounded by a', b'(d'), c' on top and e', f'(h'), g' on base line xy. A cutting plane VT passes through the cube at an angle theta to xy, cutting edges at points labeled 1', 2', 3'. The sectional top view shows hatching across the cut area between points 1, 2, 3. Projectors at angle perpendicular to VT project onto an auxiliary ground line x1-y1 to draw the true shape of the section, which is a hatched rectangle of width W = 72 mm labeled with vertices 1, 2, 3, 2_1. Answer box specifies: W = 72mm, theta = 35°, B = 40, SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** Inclination $\theta \approx 35^\circ$; maximum side of rhombus $\approx 43.5\text{ mm}$.

---

#### Problem 105: Cube — Regular Hexagon Section
**Given:** Cube of $40\text{ mm}$ side resting on HP with vertical faces at $45^\circ$ to VP. True shape is a regular hexagon.  
**Find:** Inclination $\theta$ of the section plane, sectional top view, true shape, and side length.

**Solution**
1. Draw the top view square at $45^\circ$ to $xy$ and front view rectangle resting on the $xy$ line.
2. Mark midpoints of the two top edges $a'b'$ and $a'd'$ in top view, project to top face $a'-b'(d')$ in front view as point $1'$.
3. Mark the midpoint of the central vertical edges $b'-f'$ and $d'-h'$ as point $2'$.
4. Mark midpoints of the bottom edges $f'g'$ and $h'g'$ on the base line $xy$ as point $3'$.
5. Draw trace $V$-$T$ through points $1', 2', 3'$; measure inclination $\theta$ to the vertical axis or horizontal ground line.
6. Project all six cut points to the top view to form the foreshortened hexagon, then project onto an auxiliary plane parallel to $V$-$T$ to construct the true regular hexagon.

> **Figure: Orthographic projections of a square prism with its base inclined**
>
> Step 109.1 of a worked problem showing orthographic projections of a square prism:
> - Label box at top: '109.1', 'B = 40'.
> - Front view (above reference line x-y): A rectangle representing the front view of the prism standing on the HP. Bottom base line on x-y has points e', f'(h'), and g'. Top face has points a', b'(d'), and c'. An internal vertical line represents the front-most edge connecting f'(h') and b'(d').
> - Top view (below reference line x-y): A square rotated at 45 degrees (diamond shape) with corners labelled a(e) on the left, d(h) at the top, c(g) on the right, and b(f) at the bottom. Side dimension marked as '□40'.
> - Projection lines connect corresponding points between front view and top view: a(e) to e' and a', d(h) and b(f) to f'(h') and b'(d'), and c(g) to g' and c'.
> - Text at bottom right: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Section of a square prism cut by an inclined section plane**
>
> Step 109.2 of the worked problem showing the prism cut by an inclined cutting plane:
> - Label box at right: '109.2', 'B = 40'.
> - Front view: An inclined cutting plane V-T slopes downward to the right, intersecting the top face a'-b'(d') at point 1', the central vertical edge b'(d')-f'(h') at point 2', and the base line f'(h')-g' at point 3' on the x-y reference line. The portion of the prism to the left of the cutting plane remains in thick visible lines.
> - Top view: Projectors from cutting points 1', 2', and 3' drop down to the top view to define the sectioned area:
>   - Point 1' projects to 1 on top edge a-d and 1₁ on bottom edge a-b.
>   - Point 2' projects to 2 on corner d(h) and 2₁ on corner b(f).
>   - Point 3' projects to 3 on edge d-c and 3₁ on edge b-c.
> - The resulting section is a six-sided polygon with vertices 1, 2, 3, 3₁, 2₁, 1₁, shown filled with 45-degree hatching lines.
> - Retained visible edges of the prism in the top view are drawn with solid lines, and the cut side is bounded by the section.
> - Base side dimension is marked as '□40'.
> - Text at bottom right: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Section of a cube showing sectional views and hexagonal true shape**
>
> Orthographic projection and true shape of a section of a cube:
> - Reference line labelled x - y.
> - Front view: cube elevation with top corners a', b'(d'), c' and base corners e', f'(h'), g'. An inclined cutting plane T-V passes through, intersecting edges at points 1', 2', 3'. The plane is inclined at angle θ = 55° to the vertical.
> - Top view: cube positioned with diagonal horizontal, corners labelled a(e), b(f), c(g), d(h), with side dimension marked □40. The cut section is shown hatched with cutting points 1, 2, 3 and corresponding symmetric points 1₁, 2₁, 3₁.
> - True shape view: projected along reference line x₁-y₁ parallel to cutting plane line T-V. Shows a hatched hexagonal section of width W = 28 mm.
> - Text boxes beside the drawing:
>   - 'ANSWER: W = 28mm, θ = 55°'
>   - Label '109.3'
>   - Box 'B = 40'
>   - 'SCALE 1:1'
>   - 'ALL DIMENSIONS ARE IN mm'

**Answer:** Inclination $\theta = 55^\circ$ to the vertical ($35^\circ$ to HP); side length of regular hexagon $\approx 28.3\text{ mm}$.

---

#### Problem 106: Cube — Equilateral Triangle Section of Maximum Size
**Given:** Cube of $40\text{ mm}$ side resting on HP. True shape of section is an equilateral triangle of maximum size.  
**Find:** Inclination $\theta$ of the section plane, sectional top view, and length of sides.

**Solution**
1. Draw the top view square ($40\text{ mm}$) at $45^\circ$ to VP and the front view elevation of height $40\text{ mm}$.
2. The maximum equilateral triangle is formed by the three face diagonals meeting at three alternate corners of the cube.
3. In the front view, locate the cutting plane passing through top corner $b'(d')$ (point $1'$) and cutting down to the opposite base corner $g'$ (point $2'$).
4. Measure the inclination angle $\theta$ of trace $V$-$T$ with the horizontal base line.
5. Project the cut points into the top view to delineate the triangular sectional area.
6. Draw $x_1y_1$ parallel to $1'2'$ and project perpendiculars to draw the true shape of the equilateral triangle.

> **Figure: Projection of a square prism, step 107.1**
>
> Step 107.1: Orthographic projections of a square prism with base side 40 mm. Front view above xy-line shows a rectangle: top corners labelled a', b' (d'), c'; bottom corners on xy-line labelled e', f' (h'), g'. Top view below xy-line is a diamond-oriented square (sides inclined at 45° to xy) labelled at vertices: top corner d(h), left corner a(e), right corner c(g), and bottom corner b(f). Dimension of the square side is marked as □40. Scale is 1:1. Box at top reads 'B = 40'. Note at bottom: 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Section of a square prism, step 107.2**
>
> Step 107.2: Square prism cut by an inclined section plane VT. In the front view, the cutting plane line passes through point 1' near b'(d') down to point 2' near g', marked with cutting plane indicators labelled 'T' at the top and 'V' at the bottom right. The remaining portion of the prism is outlined in dark lines: a'-b'-2'-g'-e'-a', with line b'(d')-f'(h') retained. In the top view, the sectioned surface corresponds to vertices 1, 2, 1₁, forming a hatched triangular region across the right half of the square between d(h), c(g), and b(f). Vertices labelled: d(h) with point 1, c(g) with point 2, b(f) with point 1₁, and a(e). Side dimension marked as □40. Box at top reads 'B = 40'. Note at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Orthographic projections and true shape of cut prism (Step 107.3)**
>
> Projection of a vertical square prism (base side 40 mm, marked as square 40) cut by an inclined section plane:
> - Horizontal reference line marked x-y.
> - Front view: Base points e', f'(h'), g'; top points a', b'(d'), c'. A cutting plane passes through point 1' on the vertical edge b'(d') down to point 2' at the bottom right corner g', making an inclination angle θ with the horizontal. Viewing direction arrows marked T and V.
> - Top view: Square base resting on HP with edges inclined at 45°, corners labelled a(e) at left, b(f) at bottom, c(g) at right, and d(h) at top. The cut region between section points 1 (along edges d-h and b-f) and 2 (at corner c) is cross-hatched.
> - True shape of section: Drawn on an auxiliary plane x1-y1 parallel to the cutting plane line 1'-2'. Perpendicular projection lines project points 1' and 2' to form a hatched triangular true shape with vertices 1_1, 1_1, and 2, with width marked W.
> - Data/result boxes:
>   - ANSWER: W = 57mm, θ = 55°
>   - Label: 107.3
>   - B = 40
>   - SCALE 1:1, ALL DIMENSIONS ARE IN mm

**Answer:** Inclination $\theta \approx 55^\circ$; side of equilateral triangle $= 40\sqrt{2} \approx 56.6\text{ mm}$.

---

#### Problem 107: Tetrahedron — Triangular Section
**Given:** Regular tetrahedron of edge $50\text{ mm}$ resting on HP on one face with one edge vertical in top view. True shape is a triangle of base $30\text{ mm}$ and altitude $35\text{ mm}$.  
**Find:** Projections of cut solid, inclination $\theta$ of the section plane, and true shape.

**Solution**
1. Draw the top view equilateral triangle $abc$ of side $50\text{ mm}$ with edge $ac$ vertical and centroid $o$; project front view with base $a'c'$ and $b'$ on $xy$, determining apex $o'$ using true slant edge $50\text{ mm}$.
2. In top view, mark the cut chord of length $30\text{ mm}$ parallel to vertical edge $ac$ on base face $oac$.
3. Project this line to the front view to mark point $1'$ on slant edge $o'-a'(c')$.
4. With point $1'$ as center and true altitude $35\text{ mm}$ as radius, swing an arc to intersect the projector of the opposite slant edge $o'-b'$ at point $2'$.
5. Connect $1'$ and $2'$ to form the cutting plane line $V$-$T$ and measure inclination angle $\theta$ to the horizontal base line.
6. Project point $2'$ to slant edge $ob$ in top view, outline the cut triangle $1-1_1-2$, and project to an auxiliary plane parallel to $V$-$T$ to verify the true shape.

> **Figure: Orthographic projections of a triangular pyramid (Step 110.1)**
>
> Projections of a triangular pyramid:
> - Horizontal reference line labelled 'x' on the left and 'y' on the right.
> - Front view (above xy): Base lies on the xy line with corners labelled a', c' at the left end and b' at the right end. Apex o' is located centrally above the base, connected to a', c' and b'. A dashed axis line extends vertically down from o'.
> - Top view (below xy): Triangular base with vertical edge ac on the left (length 50 mm) and corner b to the right. Apex o is centrally located and connected to corners a, b, and c with solid lines.
> - Labels and annotations: Label box '110.1', given box 'B = 50', note 'SCALE 1:1', and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Section of triangular pyramid by an inclined cutting plane (Step 110.2)**
>
> Section of the triangular pyramid:
> - Front view (above xy): Cutting plane line marked with arrows 'T' and 'V' cuts through the pyramid at an angle of 35° to the horizontal. It intersects the left edges at point 1' and the right edge at point 2'. The lower retained portion is drawn with thick continuous lines; the removed upper portion with apex o' is drawn in thin lines.
> - Top view (below xy): Shows the true/apparent section created by the cutting plane, represented by a hatched triangle with vertices 1, 2, and 1₁. The vertical distance between points 1 and 1₁ along the left side is dimensioned as 30 mm. Total base edge length ac is 50 mm.
> - Labels and annotations: Label box '110.2', given box 'B = 50', note 'SCALE 1:1', and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Orthographic projections and true shape of section for a tetrahedron cut by an inclined plane (Step 110.3)**
>
> Step 110.3 showing the section of a tetrahedron. Front view above ground line x-y with base points a', c' and b', and apex o'. A cutting plane with trace T-V passes through the tetrahedron at points 1' and 2', making an angle θ with the horizontal. In top view below x-y, triangle abc has edge ac of length 50 mm oriented vertically, with an internal dimension of 30 mm, apex o, and hatched section area with vertices 1, 2, 1_1. Projectors from the cutting plane 1'-2' perpendicular to an auxiliary reference line x1-y1 (with dimension 35 mm) construct the true shape of the cut section with points 1, 1_1, 2 hatched. Beside the drawing are an ANSWER box stating 'θ = 17°', a label '110.3', a box 'B = 50', and notes 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Inclination of section plane $\theta = 35^\circ$.

---

#### Problem 108: Tetrahedron — Square Section of Maximum Size
**Given:** Regular tetrahedron of edge $50\text{ mm}$ resting on HP. True shape is a square of maximum size.  
**Find:** Inclination $\theta$ of the section plane, sectional top view, and square side length.

**Solution**
1. Draw the top view of the tetrahedron of side $50\text{ mm}$ with one base edge vertical; project the front view elevation with apex $o'$.
2. > **Key idea.** A section plane parallel to two opposite skew edges of a regular tetrahedron produces a rectangle; when it passes through their midpoints, it produces a square of side $E/2$.
3. Locate the midpoint of slant edge $o'-a'(c')$ as point $1'$ and midpoint of opposite edge $o'-b'$ or base edge as point $2'$ in the front view.
4. Draw the section plane trace $V$-$T$ through points $1'$ and $2'$ and measure the inclination angle $\theta$ with $xy$.
5. Project cut points $1, 1_1$ on edges $oa, oc$ and $2, 2_1$ on edges $ob, bc$ in the top view; verify that distance $1-1_1 = 25\text{ mm}$.
6. Draw $x_1y_1$ parallel to $V$-$T$, project points perpendicularly, and construct the true shape square.

> **Figure: Engineering drawing step 111.1 showing projections of a triangular pyramid**
>
> Step 111.1 of Problem 111. Shows the front view and top view of a triangular pyramid resting on its base on HP. Reference line x-y. Front view: Apex o' is connected to base points a', c' (coincident on x-y line) and b' (on x-y line). The vertical axis line is drawn with dash-dot line from o' to the base. Top view: Triangular base with vertices a, b, c. The vertical edge c-a is dimensioned as 50 mm. Apex o is at the center, connected to vertices a, b, and c. Projectors connect corresponding points between top and front views. Beside the drawing is a box labelled '111.1', a box with 'B = 50', and text 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Engineering drawing step 111.2 showing section of a triangular pyramid**
>
> Step 111.2 of Problem 111. Shows the front view and top view of the triangular pyramid cut by a cutting plane V-T. Front view: Cutting plane line passes through points 1' on slant edge and 2' on slant edge, inclined at angle θ to the horizontal base line. Top view: Sectioned area is hatched with diagonally ruled lines, bounded by points 1, 2, 2₁, and 1₁. The width/length between 1 and 1₁ is dimensioned as 25 mm. Base side c-a is dimensioned as 50 mm. A box contains 'ANSWER' with 'W = 25mm' and 'θ = 55°'. Beside the drawing are boxes '111.2' and 'B = 50', and annotations 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Projections and true shape of section of a solid (step 111.3)**
>
> Step 111.3 of a worked solution showing the orthographic projections and true section shape. In the front view above the xy line, a triangular view of a solid with apex o' and base points a', c', b' is cut by a section plane VT inclined at an angle θ to the xy line, intersecting at points 1' and 2'. In the top view below the xy line, the triangular outline shows base vertices a, b, c, central point o, and a hatched section polygon with vertices 1, 1₁, 2, 2₁. Dimensions indicated are 50 mm along the base edge and 25 mm for the section width. Projectors perpendicular to the section plane transfer points across the auxiliary reference line x₁-y₁ to construct the true shape of the section (hatched quadrilateral with points 1, 1₁, 2, 2₁ and width dimension W). Beside the drawing, a box lists: ANSWER W = 25mm, θ = 55°, B = 50, and SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** Inclination $\theta \approx 45^\circ$; maximum square side $= 25\text{ mm}$.

---

#### Problem 121: Cone — Parabola of Given Double Ordinate
**Given:** Cone of base diameter $50\text{ mm}$, height $60\text{ mm}$, resting on HP. True shape of section is a parabola of double ordinate $40\text{ mm}$.  
**Find:** Projections of cut solid and true shape of the parabola.

**Solution**
1. Draw the top view circle of diameter $50\text{ mm}$ and front view triangle $a'b'o'$ of base $50\text{ mm}$ and axis height $60\text{ mm}$.
2. In the top view, draw a vertical chord of length $40\text{ mm}$ perpendicular to the horizontal centerline to represent the double ordinate.
3. Project the ends of this chord vertically to the base line $a'b'$ in the front view to locate the base cut point.
4. From this base point, draw the cutting plane trace $V$-$T$ strictly parallel to the extreme slant generator $o'b'$.
5. Divide the section trace in the front view into intermediate points $1', 2', 3', 4', 5'$ and project them to corresponding generators in the top view.
6. Set up auxiliary axis $x_1y_1$ parallel to $V$-$T$, project perpendicular lines from $1'$ through $5'$, and transfer lateral chord half-widths from the top view to draw the smooth parabolic curve.

> **Figure: Orthographic projection of a cone - Step 121.1**
>
> Step 121.1 of Problem 121. Given box: D = 50, H = 60. Orthographic projection of a cone resting with its circular base on the horizontal plane (HP). A horizontal reference line is labelled 'x' on the left and 'y' on the right. In the front view (above xy), an isosceles triangle represents the cone with its 50 mm base resting on the xy line and apex labelled o' at a vertical height of 60 mm (dimensioned as 60 on the right). An axial centerline extends vertically from o' to the base. In the top view (below xy), a circle with center o represents the base of diameter Ø50 (dimensioned as Ø50), projected directly below the front view. Bottom notes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Orthographic projection of a cut cone - Step 121.2**
>
> Step 121.2 of Problem 121. Given box: D = 50, H = 60. The figure shows the location of an inclined cutting plane passing through the apex of the cone. In the top view, a vertical chord of length 40 mm is drawn across the circle (dimensioned as 40 on the left). A vertical projector extends upward from this chord to the base of the cone on the xy line. From this point on the base, an inclined cutting plane line passes through the apex o'. The cutting plane is indicated by thickened ends with perpendicular viewing direction arrows pointing downward to the right, labelled 'V' at the bottom-left and 'T' at the top-right (forming the vertical trace VT). Height is dimensioned as 60, base circle diameter as Ø50. Bottom notes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Engineering graphics construction step 121.3 showing projections of a sectioned cone**
>
> Step 121.3 of cutting of a cone. Inset box specifies: D = 50, H = 60. Bottom note reads: 'SCALE 1:1 / ALL DIMENSIONS ARE IN mm'. The drawing consists of:
> - Reference line labelled 'x' on the left and 'y' on the right.
> - Front view (above x-y): An isosceles triangle representing a cone with base on x-y, diameter 50 mm, and vertical height labeled 60. A cutting plane line VT is inclined to the base, with 'V' near the bottom left and 'T' near the top right. Along the section plane, intersection points are labeled 1', 2', 3', 4', and 5'. Horizontal generator lines from these points connect to the right contour generator to determine section radiuses, with vertical projectors dropping down into the top view.
> - Top view (below x-y): Full circle of diameter Ø50 centered at O. A chord of length 40 mm is drawn on the left. Concentric arcs from center O project the widths at each cutting level, locating section boundary points labeled 1, 2, 3, 4, 5, 4₁, 3₁, 2₁, and 1₁. The resulting sectional region in the top view is hatched.

> **Figure: Engineering graphics construction step 121.4 showing true shape of section of a cone**
>
> Step 121.4 of cutting of a cone. Inset box specifies: D = 50, H = 60. Bottom note reads: 'SCALE 1:1 / ALL DIMENSIONS ARE IN mm'. The drawing consists of:
> - Reference line labelled 'x' and 'y'.
> - Front view (above x-y): Cone with base on x-y, height 60, diameter 50, cutting plane VT with points 1', 2', 3', 4', 5'.
> - Top view (below x-y): Circle of diameter Ø50, chord length 40, center O, with projection arcs and hatched sectional top view labeled with points 1, 2, 3, 4, 5, 4₁, 3₁, 2₁, 1₁.
> - True shape of section (top-left): Projectors are drawn perpendicular to the cutting plane line VT towards the upper-left. Distances measured from the top view's centerline to points 1, 2, 3, 4, 5 and 1₁, 2₁, 3₁, 4₁ are transferred along these projectors to plot the true shape of the section, labeled 1₁, 2₁, 3₁, 4₁, 5, 4, 3, 2, 1, which is shown fully hatched.

**Answer:** Cutting plane inclination $\theta = 67.4^\circ$ (equal to cone generator angle); true shape is a parabola with base chord $40\text{ mm}$.

---

#### Problem 123: Cone — Unknown Height from Parabolic Section
**Given:** Cone of base diameter $50\text{ mm}$ resting on HP. True shape is a parabola of double ordinate $40\text{ mm}$ and abscissa $50\text{ mm}$.  
**Find:** Height $H$ of the cone, projections, and true shape.

**Solution**
1. Draw top view circle of diameter $50\text{ mm}$; draw a vertical chord of length $40\text{ mm}$ (double ordinate) and project its position to base line $a'b'$ on $xy$.
2. On the auxiliary true shape plane, draw the axis of the parabola with given abscissa (length along axis) $= 50\text{ mm}$ and base width $= 40\text{ mm}$.
3. In the front view, the cutting plane trace $V$-$T$ must have length equal to the abscissa ($50\text{ mm}$) and be parallel to the opposite generator.
4. Draw trace $V$-$T$ at length $50\text{ mm}$ starting from the projected chord base point to intersect the extreme generator at point $1'$.
5. Through point $1'$, draw the opposite generator parallel to $V$-$T$ downward to the base line and upward to intersect the cone axis, fixing apex $o'$.
6. Measure the vertical height from $xy$ to apex $o'$ to determine the solid height $H$.
7. Project points $1', 2', 3', 4', 5'$ to the top view and to an auxiliary plane parallel to $V$-$T$ to complete the views and the true parabolic shape.

> **Figure: Step 123.1: Initial projection of cone with base diameter 50mm and chord of 40mm**
>
> Step 123.1 of the construction showing the initial projections.
> Box at upper left gives: 'D = 50', 'H = 60'.
> Reference line labelled 'x' on left and 'y' on right.
> Front view above xy line: An isosceles triangle representing the cone with base resting on xy, diameter 50 mm, with slant edges labelled 50 and 50.
> A central vertical axis line passes through the apex.
> Top view below xy line: A circle of diameter labelled 'Ø50' with center marked 'o'.
> A chord perpendicular to the horizontal centerline is drawn on the left side at a distance, with double ordinate length marked as '40'.
> Scale note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 123.2: Orthographic projections of a cone with section plane setup**
>
> Step 123.2: Projection of a cone cut by a section plane.
> - Given box: D = 50, H = 60.
> - Front view (above x-y line): Apex marked as o', vertical axis of the cone, base resting on the reference line x-y. A dimension of 57 mm is indicated on the right from the base to an intersection point. Cutting plane/trace line VT is indicated with cutting direction arrows labeled 'T' at the top and 'V' near the x-y line.
> - Top view (below x-y line): Circular base with center o and diameter dimension Ø50. A vertical chord/feature on the left is dimensioned with length 40 mm.
> - General note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 123.3: Completed section of the cone showing front view and hatched sectional top view**
>
> Step 123.3: Final projections and section of the cone.
> - Given box: D = 50, H = 60.
> - Front view (above x-y line): Triangular outline of the cone with base a'-b' on the reference line x-y and apex o'. Height dimension of 57 mm is marked on the right. Section points are plotted and labeled 1', 2', 3', 4', 5' on the cutting surface/generators, with vertical projectors descending into the top view. Plane trace arrows marked T and V.
> - Top view (below x-y line): Base circle with diameter Ø50 and horizontal/vertical references passing through center o. The sectional surface on the left side is hatched, bounded by a vertical chord of length 40 mm between points 1 and 1_1 and a curve with intermediate points labeled 2, 3, 4, 5, 4_1, 3_1, 2_1. Base points labeled a and b.
> - General note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Section of a cone and true shape of section (Problem 123.4)**
>
> Orthographic projection showing the section of a vertical cone and its true shape:
> - Given parameters in box: Cone base diameter $D = 50\text{ mm}$, height $H = 60\text{ mm}$. Scale 1:1, all dimensions in mm.
> - Front View: A cone with apex $o'$ and base $a'b'$ resting on the reference line $xy$. An inclined section plane $V-T$ cuts through the cone, marked with cutting points $1'$ on the left edge/base, $2'$, $3'$, $4'$, and $5'$ near the right slant generator. The vertical height from the base to point $5'$ is dimensioned as 57 mm.
> - Top View: Full circle of diameter $\varnothing 50\text{ mm}$ with center $o$. A vertical chord of length 40 mm connects points $1$ and $1_1$ on the left side of the base. Cut points in top view are $1, 2, 3, 4, 5, 4_1, 3_1, 2_1, 1_1$, forming a hatched section.
> - True Shape of Section: Projected perpendicular to the cutting plane line $V-T$ to the upper left. The true shape boundary is defined by points $1, 2, 3, 4, 5, 4_1, 3_1, 2_1, 1_1$, completely hatched.

**Answer:** Cone height $H = 57\text{ mm}$ (theoretical generator layout yields $60\text{ mm}$);
> **Watch out.** In the provided drawings, the cone dimension box lists reference values $D = 50\text{ mm}, H = 60\text{ mm}$, while the constructed cut-point elevation measures $57\text{ mm}$ to the apex.

### Quick recall
- True widths parallel to the reference plane are directly transferred between top view and true shape without scaling.
- To produce a parabola in a cone, the cutting plane trace must be parallel to one of the extreme slant generators ($V$-$T \parallel$ generator).
- In a regular tetrahedron, a plane parallel to two mutually perpendicular edges yields a square when it bisects both edges; maximum square side is exactly half the edge length ($s = E/2$).
- A regular hexagon is cut from a cube when the section plane passes through the midpoints of six successive perimeter edges, inclined at $\approx 55^\circ$ to the cube axis.

<!-- page 7 | Parallel-Line Development of Prisms and Cylinders -->

## Parallel-Line Development of Prisms and Cylinders

> **Syllabus note.** Note: For the end-semester examination, the syllabus explicitly excludes development problems with through holes.

### What you need
- **Stretch-out line length**: For regular prisms with $n$ sides of width $s$, $L = n \times s$; for cylinders of base diameter $D$, $L = \pi D$.
- **Parallel generators / vertical edges**: Parallel lines drawn perpendicular to the stretch-out line at equal divisions representing prism lateral edges or cylindrical surface elements.
- **True lengths of edges**: When vertical edges or cylinder generators are parallel to the vertical plane (VP), their lengths in the front view represent true lengths directly transferable via horizontal projection.
- **Shortest path principle**: The shortest distance between two points across lateral faces or cylindrical surfaces unrolls into a single straight line on the flat development.
- **Pitch of a helix**: Axial advance per complete revolution, $p = \frac{H}{N}$, where $H$ is total height and $N$ is the number of turns.

### The method
1. **Draw projections**: Construct the top view (true shape of base) and project the front view of the uncut solid standing on HP.
2. **Locate cutting plane**: Draw the cutting plane line ($V-T$) at the specified inclination and axis/boundary location in the front view.
3. **Divide perimeter**: For cylinders, divide the circular top view into 8 or 12 equal arcs; for prisms, label base corners sequentially.
4. **Mark cut intersections**: Mark intersection points $1', 2', 3', \dots$ where the cutting plane crosses vertical edges or generators in the front view.
5. **Lay out stretch-out line**: Extend the base baseline horizontally and lay out the total perimeter $L$; divide it into corresponding segments.
6. **Project cut heights**: Project horizontal lines from each cut point $1', 2', \dots$ in the front view to its matching vertical generator line on the development.
7. **Draw boundary profile**: Connect edge cut points with straight lines for prisms, or through a smooth continuous curve using a French curve for cylinders.

---

### Problems

#### Problem 126: Truncated Square Prism
**Given:** Square prism base edge $s = 40\text{ mm}$, height $h = 70\text{ mm}$, base on HP with base edge parallel to VP; AIP at $45^\circ$ bisects axis at height $35\text{ mm}$.  
**Find:** Sectional top view and lateral surface development of the lower retained portion.

**Solution**
1. Draw the top view as a $40\text{ mm} \times 40\text{ mm}$ square with horizontal and vertical sides, corners $a(e), b(f), c(g), d(h)$.
2. Project the front view rectangle of width $40\text{ mm}$ and height $70\text{ mm}$ on reference line $xy$.
3. Locate the axis midpoint at height $35\text{ mm}$ and draw cutting plane line $V-T$ at $45^\circ$ to $xy$.
4. Mark cut points $1'$ on edge $a'e'(d'h')$ and $2'$ on edge $b'f'(c'g')$.
5. Section-hatch the top view bounded by the square outline with thin parallel lines at $45^\circ$.
6. Draw horizontal stretch-out line of length $L = 4 \times 40 = 160\text{ mm}$ aligned with the base, spaced into four $40\text{ mm}$ intervals labeled $A, B, C, D, A$.
7. Project horizontal lines from $1'$ to edges $A$ and $D$, and from $2'$ to edges $B$ and $C$.
8. Join points $1-2-2-1-1$ with straight line segments and darken the retained lower outline.

> **Figure: Orthographic projections of square prism cut by an AIP at 45 degrees**
>
> Step 126.1 of the solution showing the front view and top view of a square prism cut by an auxiliary inclined plane (AIP):
> - A horizontal reference line labeled 'y' on both ends.
> - Front view above the reference line: A vertical rectangle of width 40 mm and height 70 mm. Top corners labeled a'(d') and b'(c'), bottom corners resting on the reference line labeled e'(h') and f'(g').
> - The vertical axis is drawn as a centerline. A cutting plane VT inclined at 45° to the horizontal passes through the midpoint of the axis (height 35 mm from the base), intersecting the left vertical edge at 1' and the right vertical edge at 2'.
> - Top view below the reference line: A square of side 40 mm, with corners labeled d(h) at top-left, c(g) at top-right, a(e) at bottom-left, and b(f) at bottom-right.
> - Dimensions indicated: Total height 70 mm, distance from base to axis cut point 35 mm, base dimension marked as □40, cutting plane angle marked as 45°.
> - Annotation boxes: '126.1', 'B = 40, H = 70', and note 'SCALE 1:1, ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 126.2: Front view and top view of a cut square prism**
>
> Orthographic projections of a square prism cut by an inclined section plane:
> - Box at upper right: '126.2', 'B = 40', 'H = 70'.
> - Reference line: Horizontal line labelled y - y.
> - Top view (below y-y): A square of size 40 mm x 40 mm, cross-hatched with 45° lines. Vertices labelled a(e) at bottom-left, b(f) at bottom-right, c(g) at top-right, and d(h) at top-left. Dimension '□40' shown at bottom.
> - Front view (above y-y): Base rests on the reference line with vertices e'(h') on left and f'(g') on right. Top edge is between a'(d') on left and b'(c') on right. Total height is 70 mm. Vertical centerline shown along the axis.
> - Cutting plane: Line labelled T-V inclined at 45° to the horizontal, cutting the left face at point 1' and the right face at point 2'. Point 2' is located 35 mm below the top edge a'(d')-b'(c').

> **Figure: Step 126.3: Lateral surface development of the truncated square prism**
>
> Complete orthographic projections and lateral surface development of the truncated square prism:
> - Left: Front and top views identical to step 126.2, showing the cutting plane V-T inclined at 45°, cutting left edge at 1' and right edge at 2' (35 mm below the top edge). Total height is 70 mm. Top view shows the square base of size □40.
> - Right: Development of the lateral surfaces of the truncated prism:
>   - Unfolded base divided into four equal segments representing the four faces, each 40 mm wide, labelled A, B, C, D, A from left to right. Total unfolded length = 4X40 = 160 mm.
>   - Full height frame is 70 mm.
>   - Cut boundary lines:
>     - On vertical edge A: height reaches point 1.
>     - From A to B: inclined line rising from point 1 up to point 2.
>     - From B to C: horizontal line connecting point 2 to point 2.
>     - From C to D: inclined line descending from point 2 down to point 1.
>     - From D to the end edge A: horizontal line connecting point 1 to point 1.
>   - Base is a solid straight line across all four panels.
> - Inset box: '126.3', 'B = 40', 'H = 70'.

**Answer:** Stretch-out length $L = 160\text{ mm}$; cut heights $h_1 = 15\text{ mm}$, $h_2 = 55\text{ mm}$.

---

#### Problem 128: Truncated Pentagonal Prism
**Given:** Pentagonal prism base side $s = 30\text{ mm}$, height $h = 70\text{ mm}$, two base edges parallel to VP; AIP at $45^\circ$ bisects axis at height $35\text{ mm}$.  
**Find:** Sectional top view and lateral development of the lower portion.

**Solution**
1. Draw the top view regular pentagon of side $30\text{ mm}$ with horizontal top edge $ed$ parallel to $xy$; label vertices $a, b, c, d, e$.
2. Project vertical edges into front view above $xy$ to height $70\text{ mm}$.
3. Draw cutting plane $V-T$ at $45^\circ$ through the axis midpoint at height $35\text{ mm}$.
4. Mark cutting plane intersections on front view edges: $1'$ on $a'$, $2'$ on $e'$, $3'$ on $b'$, $4'$ on $d'$, and $5'$ on $c'$.
5. Hatch the sectional top view across the cut area.
6. Draw the horizontal stretch-out line of length $L = 5 \times 30 = 150\text{ mm}$, divided into 5 equal divisions of $30\text{ mm}$ labeled $A, B, C, D, E, A$.
7. Project horizontal locus lines from points $1', 2', 3', 4', 5'$ to intersect corresponding vertical edge lines $A, B, C, D, E, A$.
8. Connect the cut points on the development with straight line segments.

> **Figure: Projection of a pentagonal prism cut by an auxiliary inclined plane (AIP) at 45 degrees**
>
> Step 128.1 for Q128. Shows the orthographic projections (front view above XY line, top view below XY line) of a pentagonal prism. A parameters box on the left shows: '128.1', 'B = 30', 'H = 70'.
> - Top View (below XY): Regular pentagon with vertices a, b, c, d, e. Edge ed is horizontal (parallel to the XY reference line / parallel to VP). One base edge is dimensioned as 30 mm.
> - Front View (above XY): Rectangular outline of the prism with total height dimensioned as 70 mm. Vertical projection lines correspond to points a', e', b', d', c'.
> - Axis is bisected at a height of 35 mm from the top face (dimensioned as 35).
> - Cutting plane line V-T passes through the axis midpoint (point 3') inclined at an angle of 45° to the horizontal/HP.
> - Points of intersection of the cutting plane with the prism edges are marked as 1', 2', 3', 4', 5'.

> **Figure: Orthographic projections and sectional cutting plane of a pentagonal prism (Step 128.2)**
>
> Step 128.2 of a problem with givens B = 30 mm, H = 70 mm. Top view below the reference line xy shows a regular pentagon with vertices labelled a, b, c, d, e (side length 30 mm between a and b), with diagonal section hatching inside. Above xy, the front view shows the pentagonal prism of height 70 mm, with vertical edges projected from a', e', b', d', and c'. A cutting plane line V-T is inclined at 45° to the horizontal/xy line, cutting edge b' at point 3' located 35 mm below the top base (height 35 mm from bottom). The cutting plane intersects the lateral edges at points 1' (on a'), 2' (on e'), 3' (on b'), 4' (on d'), and 5' (on c'). Note indicates 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Development of the lateral surface of a truncated pentagonal prism (Step 128.3)**
>
> Step 128.3 showing the development of the lateral surface of the truncated pentagonal prism. Given: B = 30 mm, H = 70 mm. On the left are the front and top views identical to step 128.2: a pentagon of side 30 mm in top view, and a 70 mm high front view cut by a 45° section plane V-T at points 1', 2', 3', 4', 5' (with point 3' 35 mm below the top edge). Projectors extend horizontally from 1', 2', 3', 4', 5' to the right into the development. The development on the right has a horizontal baseline of length 5 × 30 = 150 mm divided into five 30 mm intervals for faces A-B, B-C, C-D, D-E, E-A. Vertical fold lines are labelled at the top as A, B, C, D, E, A. Cut points are plotted along these vertical lines: point 1 on the first A, 3 on B, 5 on C, 4 on D, 2 on E, and 1 on the final A, joined by straight lines forming the truncated top profile of the unfolded sheet.

**Answer:** Total stretch-out length $L = 150\text{ mm}$.

---

#### Problem 129: Truncated Hexagonal Prism
**Given:** Hexagonal prism base edge $s = 30\text{ mm}$, height $h = 70\text{ mm}$, two base edges perpendicular to VP; AIP at $30^\circ$ bisects axis at height $35\text{ mm}$.  
**Find:** Sectional top view and lateral development of the lower portion.

**Solution**
1. Draw regular hexagon of side $30\text{ mm}$ in top view with vertical sides $af$ and $cd$ perpendicular to $xy$.
2. Project the front view of width $2 \times 30\cos(30^\circ) = 51.96\text{ mm}$ and height $70\text{ mm}$.
3. Draw the cutting plane line inclined at $30^\circ$ through the axis center at $35\text{ mm}$ height.
4. Mark intersections $1'$ on outer edge $a'(f')$, $2'$ on center edge $b'(e')$, and $3'$ on outer edge $c'(d')$.
5. Hatch the cut profile in the top view.
6. Extend the base line to total stretch-out length $L = 6 \times 30 = 180\text{ mm}$, marking six $30\text{ mm}$ panels labeled $A, B, C, D, E, F, A$.
7. Project cut points horizontally from front view to intersect matching vertical edges on development.
8. Connect points $1, 2, 3, 2, 1$ across panels with straight lines.

> **Figure: Step 129.1: Projections of hexagonal prism cut by an auxiliary inclined plane**
>
> Front and top views of a hexagonal prism resting on HP. In the top view, a regular hexagon has vertices labelled a, b, c, d, e, f, with side dimension 30 mm, oriented such that base edges are perpendicular to VP (vertical edges on left and right). The front view shows the prism standing on the xy ground line, base edges a'(f'), b'(e'), c'(d'), total height 70 mm. The axis is vertical. An auxiliary inclined cutting plane V-T is inclined at 30° to the horizontal/xy line, passing through the midpoint of the axis at a height of 35 mm. It intersects the vertical edges/generators at points labelled 1', 2', and 3'. A small data box at the left indicates 'B = 30' and 'H = 70'.

> **Figure: Section of a regular hexagonal prism cut by an inclined plane**
>
> Step 129.2 of the problem: Orthographic projections (front view and top view) of a regular hexagonal prism. In the given parameters box: B = 30 mm, H = 70 mm. Top view shows a regular hexagon with base edge 30 mm, vertices labelled a, b, c, d, e, f, with section lines (hatching). Front view shows the elevation on reference line x-y, labelled with vertical edges a'(f'), b'(e'), c'(d'). Total height is 70 mm. An inclined cutting plane V-T makes an angle of 30° with the horizontal (x-y line), passing through the axis at a height of 35 mm. Cutting points are marked 1' on edge a'(f'), 2' on edge b'(e'), and 3' on edge c'(d'). Scale is 1:1, all dimensions are in mm.

> **Figure: Development of lateral surface of a truncated hexagonal prism**
>
> Step 129.3 of the problem: Front view and top view on the left, and lateral surface development of the truncated hexagonal prism on the right. Given box: B = 30, H = 70. Front view shows edges a'(f'), b'(e'), c'(d') with cutting line at 30° passing through height 35, with points 1', 2', 3'. Lateral development on the right extends across 6 faces of width 30 mm each (total length 6x30 = 180 mm), with generators labelled A, B, C, D, E, F, A. Heights from the base on each generator correspond to the truncated front view: point 1 on generator A, point 2 on B, point 3 on C, point 3 on D, point 2 on E, point 1 on F, point 1 on A. Scale is 1:1, all dimensions are in mm.

**Answer:** Total stretch-out length $L = 180\text{ mm}$.

---

#### Problem 131: Hexagonal Prism – Shortest Path of Ant
**Given:** Hexagonal prism base edge $s = 30\text{ mm}$, height $h = 70\text{ mm}$; ant travels from base corner $A$ to diametrically opposite top corner $D$ by the shortest route.  
**Find:** Surface development and the path of the ant sketched in front view.

**Solution**
1. Draw the top view regular hexagon (side $30\text{ mm}$) and front view rectangle (height $70\text{ mm}$).
2. Construct the flat lateral development of length $L = 6 \times 30 = 180\text{ mm}$ and height $70\text{ mm}$, marking faces $A, B, C, D, E, F, A$.
3. Identify the start point at bottom corner $A$ and destination at top corner $D$ (spanning 3 faces, width $3 \times 30 = 90\text{ mm}$).
4. Connect bottom corner $A$ to top corner $D$ with a single straight line on the development.
5. Mark the intersections of this straight path with intermediate vertical fold lines $B$ and $C$.
6. Project these intersection heights horizontally back onto corresponding vertical edges $b'$ and $c'$ in the front view.
7. Connect the points in elevation sequentially to represent the shortest path in front view.

> **Figure: Step 131.1: Orthographic projections of the hexagonal prism**
>
> Orthographic views of a regular hexagonal prism resting on its base on HP. The top view shows a regular hexagon with base edge 30 mm, corners labelled clockwise starting from left: a, f, e, d, c, b (with horizontal edges fe at the top and bc at the bottom, edge bc dimensioned as 30). Projection lines extend vertically up to the reference line xy. The front view is a rectangle of height 70 mm (dimensioned on the left as 70) and total width equal to the distance between extreme corners a and d. The top face vertices are labelled a', b'(f'), c'(e'), d'. Vertical edges are shown as solid lines corresponding to corners a, b, c, d. A small box at the lower left reads '131.1' and 'B = 30', 'H = 70'. Below the top view is the note 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Orthographic projections and lateral surface development of a hexagonal prism**
>
> The figure illustrates the front view, top view, and lateral surface development of a hexagonal prism (labelled 131.2):
> - Left side shows the front view and top view:
>   - Top view: Regular hexagon with side length 30 mm, vertices labelled a (left), b (bottom-left), c (bottom-right), d (right), e (top-right), f (top-left). Side bc has dimension 30 mm.
>   - Front view: Height 70 mm resting on the XY line. Vertical lines represent edges: a' on the left, b'(f') inside, vertical center-line, c'(e') inside, and d' on the right. A cutting line or path connects 1' (bottom of a') through 2' (on b'), 3' (on c'), to 4' (at the top-right corner d'). Horizontal projection lines extend from 1', 2', 3', and 4' to the development on the right.
> - Right side shows the development:
>   - A rectangle of height 70 mm and total width 180 mm (dimensioned as 6x30=180), divided into 6 panels of width 30 mm each, labelled A, B, C, D, E, F, A at the top edges.
>   - Path connects point 1 (bottom of first edge A), point 2 (on edge B), point 3 (on edge C), and point 4 (top of edge D).
> - Parameter box: labelled 131.2 with B = 30, H = 70. Notes specify SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** Shortest path length on development $= \sqrt{90^2 + 70^2} = \sqrt{8100 + 4900} = 114.02\text{ mm}$.

---

#### Problem 133: Truncated Cylinder (Cut through Axis 20 mm from Top)
**Given:** Cylinder diameter $D = 40\text{ mm}$, height $h = 60\text{ mm}$; AIP at $45^\circ$ cuts axis $20\text{ mm}$ below top face.  
**Find:** Front view, sectional top view, and lateral surface development.

**Solution**
1. Draw circular top view of diameter $40\text{ mm}$; divide circumference into 8 equal sectors: $a, b, c, d, e, f, g, h$.
2. Project front view rectangle ($40\text{ mm} \times 60\text{ mm}$) with generator lines $a', b'(h'), c'(g'), d'(f'), e'$.
3. Locate the cutting point on the axis at height $60 - 20 = 40\text{ mm}$; draw cutting plane $V-T$ at $45^\circ$ to HP.
4. Mark intersections $1', 2', 3', 4', 5'$ on the generators in front view.
5. Hatch the sectional area in top view.
6. Lay out horizontal stretch-out line of length $L = \pi D = 3.1416 \times 40 = 125.66\text{ mm}$.
7. Divide $L$ into 8 equal spaces of $15.71\text{ mm}$ labeled $A, B, C, D, E, F, G, H, A$.
8. Project heights of $1', 2', 3', 4', 5'$ horizontally to corresponding generators and join points with a smooth curve.

> **Figure: Orthographic projections and cutting plane of a cylinder (Step 133.1)**
>
> Step 133.1 showing the initial setup for sectioning a cylinder:
> - Given parameters in box: Diameter $D = 40$, Height $H = 60$.
> - Reference line $x-y$.
> - Top View: Circle of diameter $\Phi 40$, center $o$, divided into 8 equal parts labelled $a, b, c, d, e, f, g, h$.
> - Front View: Rectangular outline of the cylinder standing on the $xy$ line with height 60 mm. Generators projected upwards labelled at the top: $a', b', c', d', e'$.
> - Cutting plane: Section plane $V-T$ inclined at $30^\circ$ to the $xy$ line, passing through the axis (generator $c'$) at a distance of 20 mm below the top base.
> - Cutting plane intersections labelled $1'$ on generator $a'$, $2'$ on $b'$, $3'$ on $c'$, $4'$ on $d'$, and $5'$ on $e'$.

> **Figure: Sectional views of the cut cylinder (Step 133.2)**
>
> Step 133.2 showing the completed sectional views of the cut cylinder:
> - Given parameters in box: Diameter $D = 40$, Height $H = 60$.
> - Front View: The retained lower portion of the cylinder is drawn in bold outlines, bounded by the base on $xy$, vertical lines from $xy$ to $1'$ and $5'$, and the inclined cut face connecting $1', 2', 3', 4', 5'$. The cutting plane $V-T$ is inclined at $30^\circ$ to $xy$ and cuts the axis at a distance of 20 mm below the top.
> - Top View: Circle of diameter $\Phi 40$ fully hatched with diagonal section lines (sectional top view), with division points $a, b, c, d, e, f, g, h$ and center $o$.

> **Figure: Orthographic projection and development of a cut cylinder**
>
> Technical drawing showing the orthographic projection and surface development of a cylinder (diameter D = 40 mm, height H = 60 mm):
> - Top View: A circle of diameter 40 mm divided into 8 equal parts labeled a, b, c, d, e, d, c, b with center o and thin hatching/section lines across it.
> - Front View: Drawn above reference line x-y, a rectangle of height 60 mm and width 40 mm with generators a', b', c', d', e'. An inclined cutting plane V-T inclined at 30° cuts through the top-right corner 5' (on generator e') down to point 1' (on generator a'), intersecting intermediate generators at 2', 3', and 4'. Dimension 20 is indicated vertically on the upper left.
> - Development of Lateral Surface: A rectangle of total developed length 40 × π = 125.6 mm and height 60 mm, divided into 8 equal parts labeled at the top: A, B, C, D, E, D, C, B, A. Projector lines transfer heights of points 1' through 5' to corresponding generators, producing points 1, 2, 3, 4, 5, 4, 3, 2, 1 connected by a smooth curve representing the cut profile.
> - Labels and notes: '133.3' in a box; 'SCALE 1:1'; 'ALL DIMENSIONS ARE IN mm'; box with 'D = 40', 'H = 60'.

**Answer:** Stretch-out length $L = 125.66\text{ mm}$.

---

#### Problem 134: Truncated Cylinder (Cut through Extreme Right Top)
**Given:** Cylinder diameter $D = 40\text{ mm}$, height $h = 60\text{ mm}$; AIP inclined $45^\circ$ passes through the extreme right top corner $e'$.  
**Find:** Front view, sectional top view, and lateral development.

**Solution**
1. Draw top view circle divided into 8 equal parts $a$ to $h$, and front view rectangle resting on $xy$.
2. Draw cutting plane $V-T$ at $45^\circ$ passing through top-right point $e'$ downward to the left.
3. Mark generator intersections $1'$ on $a'$, $2'$ on $b'(h')$, $3'$ on $c'(g')$, $4'$ on $d'(f')$, and $5'$ at $e'$.
4. Hatch the cut section in top view.
5. Draw base stretch-out line of length $L = \pi D = 125.66\text{ mm}$ divided into 8 equal intervals.
6. Project horizontal lines from points $1'$ through $5'$ to generators $A, B, C, D, E, F, G, H, A$.
7. Connect the mapped points using a smooth sinusoidal curve.

> **Figure: Step 134.1: Orthographic projection of a cylinder cut by an inclined section plane**
>
> Projection of a vertical cylinder cut by an inclined section plane:
> - Parameter box: $D = 40$, $H = 60$.
> - Front view (above $x-y$ line): Rectangular outline of the cylinder of height $60\text{ mm}$ and diameter $40\text{ mm}$. Vertical generators labeled $a', b', c', d', e'$ along the top. An inclined cutting plane V-T makes an angle of $45^\circ$ with the horizontal ($x-y$), intersecting the generators at points $1', 2', 3', 4', 5'$. Thickened lines indicate the portion retained.
> - Top view (below $x-y$ line): A circle of diameter $\varnothing 40$, divided into 8 equal parts labeled $a, b, c, d, e, f, g, h$ around the circumference with center $o$.
> - Scale note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Step 134.2: Sectional top view showing hatched section of the cylinder**
>
> Projection showing the sectional top view of the cylinder:
> - Parameter box: $D = 40$, $H = 60$.
> - Front view (above $x-y$ line): Same cylinder cut by the cutting plane V-T inclined at $45^\circ$, marked with intersection points $1', 2', 3', 4', 5'$.
> - Top view (below $x-y$ line): The circular top view divided into 8 parts with generators $a, b, c, d, e, f, g, h$ is completely hatched with section lines inclined at $45^\circ$, representing the sectional view of the cut cylinder.
> - Dimensions: Height $60$, diameter $\varnothing 40$.
> - Scale note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

> **Figure: Orthographic projections and lateral surface development of a cut cylinder**
>
> Engineering drawing showing the front view, sectional top view, and lateral surface development of a vertical cylinder cut by an inclined section plane.
> 
> Left side (Projections):
> - Reference line labeled 'x' and 'y'.
> - Top view: Below xy line, a circle of diameter Ø40 divided into 8 equal sectors with generator points labeled counterclockwise: a (left), b, c (bottom), d, e (right), f, g (top), h. The circle has section hatching (cross-hatching) and center labeled 'o'.
> - Front view: Above xy line, cylinder of height 60 mm. Generators project up from top view to a', b', c', d', e' on the base line and top. Cutting plane V-T is inclined at 45° to the horizontal, intersecting the axis/generators at points 1', 2', 3', 4', 5'.
> 
> Right side (Development of lateral surface):
> - Stretch-out rectangle with length 40 x π = 125.6 mm.
> - Divided into 8 equal vertical strips corresponding to generators A, B, C, D, E, D, C, B, A.
> - Points 1, 2, 3, 4, 5, 4, 3, 2, 1 are projected horizontally from the cut points 1' through 5' in the front view, forming a smooth wave-like cut profile curve at the top.
> 
> Labels and notes:
> - Label box: '134.3' with parameters 'D = 40', 'H = 60'.
> - Text: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Stretch-out line length $L = 125.66\text{ mm}$; cut base height at extreme left generator $h_1 = 60 - 40\tan(45^\circ) = 20\text{ mm}$.

---

#### Problem 135: Truncated Cylinder (Cut at 60° through Top of Axis)
**Given:** Cylinder diameter $D = 40\text{ mm}$, height $h = 60\text{ mm}$; AIP at $60^\circ$ passes through the top center point of the axis.  
**Find:** Front view, sectional top view, and lateral development.

**Solution**
1. Draw top view circle divided into 8 equal parts and project front view rectangle of height $60\text{ mm}$.
2. From the center of the top face $c'(g')$, draw cutting plane $V-T$ downward to the left at $60^\circ$ to horizontal.
3. Mark cut points $1'$ on generator $a'$, $2'$ on $b'(h')$, and $3'$ on the top face at $c'(g')$. Generators to the right remain uncut at full height.
4. Hatch the cut sector in the top view between points $a, b, c, g, h$.
5. Draw the stretch-out line $L = \pi D = 125.66\text{ mm}$ with 8 equal divisions.
6. Project heights of $1', 2', 3'$ horizontally to generators $A, B, H$ on the development; generators $C, D, E, F, G$ maintain full $60\text{ mm}$ height.
7. Join the cut points with a smooth curve merging into the horizontal top edge at $C$ and $G$.

> **Figure: Step 135.1: Section plane cutting a cylinder**
>
> Step 135.1 of section of solids for a vertical cylinder. Top view shows a circle of diameter Ø40 mm with center o, divided into 8 equal parts labeled a, b, c, d, e, f, g, h. Projectors extend upward to the reference line x-y. Front view shows a rectangle of base Ø40 and height 60 mm with vertical generators a', b', c', d', e' (generators b' and h', c' and g', d' and f' coincide). An auxiliary/cutting plane V-T inclined at 60° to the horizontal cuts through generators at intersection points 1', 2', 3'. Parameter box on the right specifies: D = 40, H = 60.

> **Figure: Step 135.2: Truncated cylinder and hatched cut section**
>
> Step 135.2 of section of solids. Front view shows the retained truncated cylinder outlined in dark lines, truncated by the cutting plane V-T inclined at 60° passing through points 1', 2', 3' to the top face at c'. The base is retained and the right portion remains full height 60 mm. In the top view, the cut region between points a, b, c, g, h is hatched with inclined lines. Parameter box on the right specifies: D = 40, H = 60.

> **Figure: Orthographic views and development of a cut cylinder (Problem 135.3)**
>
> Engineering drawing showing the development of a truncated right circular cylinder:
> - **Top View (Plan):** A circle of diameter $\varnothing 40$ divided into 8 equal parts labeled $a, b, c, d, e, f, g, h$, with center $o$. Sector between $a-b-c-g-h$ is hatched.
> - **Front View (Elevation):** A cylinder of total height 60 mm resting on the reference line $xy$. Base width is 40 mm. Generator lines are labeled $a', b', c', d', e'$. An inclined cutting plane V-T cuts the cylinder at an angle of $60^\circ$ to the horizontal base, cutting generator $a'$ at point $1'$, generator $b'$ at point $2'$, and generator $c'$ at top point $3'$. The truncated shape is outlined.
> - **Development of the lateral surface:** A rectangular sheet of length $40 \times \pi = 125.6\text{ mm}$ and height 60 mm, divided into 8 equal parts with vertical lines corresponding to generators $A, B, C, D, E, D, C, B, A$. Cut points $1, 2, 3$ are transferred horizontally from the front view to the corresponding generator lines, connected with a smooth symmetrical curve.
> - **Data box:** Labeled '135.3' with dimensions $D = 40$, $H = 60$, 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Stretch-out length $L = 125.66\text{ mm}$; cut point on left generator $h_1 = 60 - 20\tan(60^\circ) = 25.36\text{ mm}$.

---

#### Problem 136: Cylinder – Double Helix / Two Turns
**Given:** Cylinder diameter $D = 40\text{ mm}$, total height $H = 60\text{ mm}$, pitch $p = 30\text{ mm}$, two complete revolutions.  
**Find:** Surface development and elevation of the double helix / shortest two-turn path.

**Solution**
1. Draw top view circle divided into 8 equal sectors ($a$ to $h$) and front view rectangle ($40\text{ mm} \times 60\text{ mm}$).
2. Construct the lateral development rectangle of width $L = \pi D = 125.6\text{ mm}$ and height $H = 60\text{ mm}$.
3. Divide the height of the development into 2 equal parts of $30\text{ mm}$ each (one pitch per revolution).
4. Draw two parallel straight diagonal lines across the development: first turn from $(0, 0)$ to $(125.6, 30)$, second turn from $(0, 30)$ to $(125.6, 60)$.
5. Divide development width into 8 equal vertical generator divisions.
6. Project heights where the diagonals cross generators back onto matching generators in the front view.
7. Sketch the helical curve through projected points in front view (solid for front half, dashed for rear half).

> **Figure: Step 136.1: Orthographic projections of a cylinder**
>
> Step 136.1 shows the initial orthographic projections of a cylinder:
> - Boxed parameters: D = 40, H = 60.
> - Top view (below reference line x-y): Circle of diameter ⌀40 with center o, divided into 8 equal sectors by radial lines. Division points are labelled along the circumference counter-clockwise from the left: a, b, c, d, e, f, g, h.
> - Front view (above reference line x-y): A rectangle representing the front elevation of the cylinder, height 60 mm, with vertical projector lines extending upwards from points a, b, c, d, e to the top base, labelled a', b', c', d', e'.

> **Figure: Step 136.2: Development and orthographic projection of a double helix on a cylinder**
>
> Step 136.2 shows the construction of a double helix on a cylinder:
> - Boxed parameters: D = 40, H = 60.
> - Title: DOUBLE HELIX.
> - Development of cylinder surface: A rectangle of width 40×π = 125.6 mm and height 60 mm, divided into 8 equal vertical divisions labelled at the top: A, B, C, D, E, D, C, B, A. Two parallel straight inclined lines are drawn across the development representing the two helices.
> - Top view: Circle of diameter ⌀40 divided into 8 points (a, b, c, d, e, f, g, h).
> - Front view: Rectangle of height 60 mm showing two smooth sinusoidal/helical curves (the front view of the double helix) projected horizontally from the intersection points of the development and vertically from the top view generators (a', b', c', d', e').

> **Figure: Orthographic projections and surface development for shortest path of an ant on a cylinder**
>
> Technical drawing showing the orthographic projection and surface development of a cylinder to find the shortest path of an ant:
> - Top view (below xy): Circle of diameter 40 mm, center labeled 'o', divided into 8 equal parts labeled a, b, c, d, e, f, g, h.
> - Front view (above xy): Cylinder of height 60 mm and diameter 40 mm, base resting on the xy line. Vertical generators are projected from top view points and labeled a', b', c', d', e'. The path of the ant wraps around the cylinder twice, drawn as helical curves (solid lines where visible in front, dashed lines where on the rear).
> - Development (to the right): A rectangle of height 60 mm and stretch-out width calculated as $40 \times \pi = 125.6\text{ mm}$, divided into 8 equal vertical divisions with labels along the top: A, B, C, D, E, D, C, B, A. Horizontal projection lines connect the front view to the development grid. A straight inclined path is drawn across the development.
> - Annotations: Boxed value '136.3', box with parameters 'D = 40' and 'H = 60', note 'SCALE 1:1 / ALL DIMENSIONS ARE IN mm', and title 'ANT ON CYLINDER'.

**Answer:** Stretch-out length $L = 125.6\text{ mm}$; lead angle $\alpha = \arctan\left(\frac{30}{125.6}\right) \approx 13.43^\circ$.

---

#### Problem 137: Cylindrical Pipe with Miter Cut and 20° Cut
**Given:** Cylindrical pipe diameter $D = 40\text{ mm}$, height $h = 60\text{ mm}$, lower end cut at $20^\circ$ to HP, upper end miter cut ($45^\circ$) in same direction.  
**Find:** Complete lateral surface development.

**Solution**
1. Draw circular top view divided into 8 equal segments and project vertical generators in front view.
2. In front view, draw top cutting plane at $45^\circ$ and bottom cutting plane at $20^\circ$.
3. Number upper cut points $1'$ to $5'$ and lower cut points $6'$ to $10'$ along generators $a'$ to $e'$.
4. Lay out horizontal stretch-out line of length $L = \pi D = 125.66\text{ mm}$ divided into 8 equal spaces.
5. Project upper points $1'\text{--}5'$ horizontally to corresponding generators to form the upper curved boundary.
6. Project lower points $6'\text{--}10'$ horizontally to form the lower curved boundary.
7. Connect both sets of points with smooth sinusoidal curves.

> **Figure: Orthographic projections of a cylinder truncated by two inclined cutting planes (Step 137.1)**
>
> Step 137.1 showing the front and top views of a vertical cylinder cut by two cutting planes:
> - Top View: A circle of diameter $\varnothing 40$ mm divided into 8 equal segments by lines passing through center 'o', labelled a, b, c, d, e, f, g, h along the circumference.
> - Front View: Projected above reference line x-y, representing a cylinder of height $H = 60$ mm with vertical generators $a', b', c', d', e'$.
> - Upper Cutting Plane: Inclined at $45^\circ$ to the axis/generators, marked with cutting plane indicators 'V' and 'T'. It cuts the cylinder generators at points $1', 2', 3', 4', 5'$.
> - Lower Cutting Plane: Inclined at $20^\circ$ to the base, marked with cutting plane indicators 'V' and 'T'. It intersects the generators at points $6', 7', 8', 9', 10'$.
> - Parameter box: 137.1 with $D = 40$, $H = 60$.
> - Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

> **Figure: Development of the lateral surface of the truncated cylinder (Step 137.2)**
>
> Step 137.2 showing the front and top views alongside the complete development of the lateral surface of the truncated cylinder:
> - Left side: Front view showing the cut cylinder portion retained between cutting planes V-T (top cutting plane at $45^\circ$, bottom cutting plane at $20^\circ$) with points $1'$ to $5'$ along the top cut and $6'$ to $10'$ along the bottom cut, and the top view divided into 8 sections (a through h).
> - Right side: Surface development of the cylinder rolled out into a rectangle of stretch-out length $40 \times \pi = 125.6$ mm, divided into 8 equal parts labelled with generator lines A, B, C, D, E, D, C, B, A.
> - Upper profile: Formed by projecting heights of points $1', 2', 3', 4', 5'$ horizontally to the corresponding generators A, B, C, D, E, D, C, B, A, connected by a smooth curve through points 1, 2, 3, 4, 5, 4, 3, 2, 1.
> - Lower profile: Formed by projecting heights of points $6', 7', 8', 9', 10'$ to the generators, connected by a smooth curve through points 6, 7, 8, 9, 10, 9, 8, 7, 6.
> - Parameter box: 137.2 with $D = 40$, $H = 60$.
> - Note: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** Stretch-out length $L = 125.66\text{ mm}$; development bounded by two distinct sinusoidal curves.

---

#### Problem 138: Cylindrical Pipe with Opposing 30° Cuts
**Given:** Cylinder diameter $D = 40\text{ mm}$, height $h = 60\text{ mm}$; top cut by $30^\circ$ plane through top-right generator point; bottom cut by $30^\circ$ plane through bottom-left generator point.  
**Find:** Front view, top view, and lateral surface development.

**Solution**
1. Draw circular top view divided into 8 equal sectors and project front view rectangle.
2. Draw upper cutting plane at $30^\circ$ passing through the top of generator $e'$.
3. Draw lower cutting plane at $30^\circ$ passing through the base of generator $a'$.
4. Mark intersection points along all 8 generators for both top and bottom section planes.
5. Lay out stretch-out line of length $L = \pi D = 125.66\text{ mm}$ divided into 8 equal intervals $A$ through $A$.
6. Project upper cut heights and lower cut heights horizontally onto matching development generators.
7. Connect top points with a smooth upper curve and bottom points with an identical parallel lower curve.

> **Figure: Orthographic projections of sectioned cylinder (Step 138.1)**
>
> Front view and top view of a cut cylinder of diameter 40 mm and height 60 mm:
> - Reference line labeled x-y.
> - Top view: A circle of diameter 40 mm (labeled Ø40) with center o, divided into 8 equal sectors with circumference points labeled a, b, c, d, e, f, g, h.
> - Front view: A rectangular outline of width 40 mm and height 60 mm, with generator lines projected upwards from points a to e, labeled at the top as a', b', c', d', e'.
> - Top cutting plane: Inclined at 30° to the horizontal, passing through the top of the extreme right generator (point 5'/e'). Section points along generators are labeled 1', 2', 3', 4', 5'. Section plane trace is marked with cutting plane line and arrows labeled V-T.
> - Bottom cutting plane: Inclined at 30° to the horizontal, passing through the bottom of the extreme left generator on the xy line. Section points along generators are labeled 6', 7', 8', 9', 10'. Marked with cutting plane line and arrows labeled V-T.
> - Annotation note inside front view: 'D = 40', 'H = 60'. Label above front view: '138.1'.

> **Figure: Orthographic projections and lateral surface development of a cut cylinder**
>
> Step 138.2 of development of a cut cylinder. Dimensions given in the diagram box: D = 40 mm, H = 60 mm; Scale 1:1; all dimensions are in mm. Top View: Circle of diameter 40 mm (labelled Ø40) with center o, divided into 8 equal parts labelled a, b, c, d, e, f, g, h. Front View: Height 60 mm between base xy and top. Base generator points a', b', c', d', e'. Two inclined cutting planes: upper cutting plane V-V inclined at 30° to the vertical axis passing through generators at cut points 1', 2', 3', 4', 5'; lower cutting plane T-T inclined at 30° to the vertical axis cutting generators at points 6', 7', 8', 9', 10'. Development of lateral surface: Unrolled rectangular pattern with width equal to the circumference 40 × π = 125.6 mm, divided into 8 equal vertical strips with generator lines A, B, C, D, E, D, C, B, A. The top boundary is a smooth curve through points 1, 2, 3, 4, 5, 4, 3, 2, 1; the bottom cut boundary is a smooth curve through points 6, 7, 8, 9, 10, 9, 8, 7, 6.

**Answer:** Stretch-out length $L = 125.66\text{ mm}$; minimum generator length $= 60 - 40\tan(30^\circ) = 36.91\text{ mm}$.

---

### Quick recall
- Prisms unfold into adjacent planar panels connected by straight fold lines; cylinders unfold into a flat rectangle with curved cut profiles.
- The stretch-out length is strictly the perimeter of the base: $n \times s$ for regular polygons, $\pi D$ for circles.
- A straight line drawn on a flat surface development represents the absolute shortest path between two points on the 3D solid.
- A single miter or inclined plane cut develops into a sinusoidal wave on the unfolded cylindrical surface.

<!-- page 8 | Radial-Line Development of Pyramids and Cones -->

## Radial-Line Development of Pyramids and Cones

### What you need
- **Radial-line principle**: The lateral surface unrolls into adjacent triangles (for pyramids) or a circular sector (for cones) centered at the apex $O$ with radius equal to the true slant edge/generator length $R$.
- **Cone sector angle**: $\theta = \frac{r}{R} \times 360^\circ$, where $r$ is the base radius and $R = \sqrt{r^2 + h^2}$ is the true slant height.
- **True length rule**: Cut points along edges or generators must always be projected horizontally to the extreme true-length slant edge before swinging radial arcs onto the development.
- **Shortest path principle**: The shortest path between two points across a curved or faceted lateral surface is a straight line drawn on its flat development.

### The method
1. **Draw orthographic projections**: Construct the top view (TV) and front view (FV) showing all base vertices, the apex, and dividing generators/edges.
2. **Find true slant length**: If extreme slant edges in FV are not parallel to VP in TV, rotate a base radius to the horizontal center line in TV and project up to find true slant length $R = o'-b_1'$.
3. **Calculate or lay out development**: Draw an arc of radius $R$ centered at $O$. For pyramids, step off base edge lengths along the arc; for cones, subtend the angle $\theta = (r/R) \times 360^\circ$ and divide into equal generators.
4. **Locate section points**: In FV, project cutting plane intersections horizontally to the true-length generator $o'-b_1'$ to obtain true radial distances from the apex.
5. **Transfer points to development**: Sweep radial arcs from $O$ of radii equal to these true distances to intersect corresponding development radial lines.
6. **Connect and complete**: Connect points with straight lines for pyramids or smooth fair curves for cones. For shortest-path problems, draw a straight line between the start and end points on the development, then project intermediate intersections back to the orthographic views.

### Problems

#### Problem 142: Truncated Square Pyramid Cut by an Inclined Section Plane
**Given:** Square pyramid, base side $40\text{ mm}$, height $60\text{ mm}$, base edges equally inclined to VP; cutting plane inclined $45^\circ$ to HP bisecting/cutting slant edges.  
**Find:** Front view, sectional top view, and lateral surface development.

**Solution**
1. Draw the top view $a\text{-}b\text{-}c\text{-}d$ with edges at $45^\circ$ to $xy$ and center apex $o$.
2. Project the front view $o'\text{-}a'\text{-}b'(d')\text{-}c'$ resting on $xy$ with axis height $60\text{ mm}$.
3. Rotate base corner $b$ horizontally to the centerline in TV and project to $xy$ at $b_1'$ to determine true slant length $R = o'-b_1'$.
4. Draw cutting plane trace $V\text{-}T$ at $45^\circ$ to $xy$ passing through the axis.

> **Figure: Step 142.1: Projections of a square pyramid cut by an inclined section plane**
>
> Orthographic projections (front and top views) of a square pyramid. In the top view below the xy line, the square base a-b-c-d has dimensions 40 mm x 40 mm (labeled with a square symbol 40) with diagonal lines intersecting at apex o. In the front view above the xy line, the pyramid has base a'(d')-b'(c') and apex o', with an axis height of 60 mm. An inclined section plane V-T is oriented at 45 degrees to the horizontal, intersecting the axis at a height of 30 mm above the base line. The section plane cuts the slant edges at points 1' and 2'. To the right is a box labeled '142.1' with 'B = 40' and 'H = 60', and underneath: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

5. Project section points $1', 2', 3', 4'$ horizontally onto the true slant line $o'-b_1'$ to obtain true distances $1'', 2'', 3'', 4''$.
6. From apex $O$, swing an arc of radius $R$ and step off 4 successive chords of $40\text{ mm}$ labeled $A, B, C, D, A$.
7. Transfer true radial distances onto radial edges $OA, OB, OC, OD, OA$ and connect consecutive points with straight lines.
8. Darken the retained lower portion in FV and hatch the sectional top view.

> **Figure: Step 142.2: Sectional views and surface development of the truncated square pyramid**
>
> Final solution step showing the sectional orthographic views and the radial development of the truncated pyramid's lateral surface. The front view shows the cut pyramid with bold outlines below the cutting plane V-T inclined at 45 degrees at height 30 mm. Cutting points 1' and 2' are projected horizontally to the true-length slant edge o'-b1' (giving points 1'' and 2''). The top view shows the hatched cut section within the square base a-b-c-d, with true-length construction point b1 on the horizontal axis. On the right, the radial line development of the lateral surface unfolds from apex O with four base panels of length 40 mm (A-B-C-D-A) and radius equal to the true slant height o'b1'. Points 1'', 2'', 2'', 1'' are transferred onto the radial edges OA, OB, OC, OD, OA, respectively, and joined with straight lines to form the developed cut boundary. Beside the drawing is a box labeled '142.2' with 'B = 40', 'H = 60', and note 'SCALE 1:1 / ALL DIMENSIONS ARE IN mm'.

**Answer:** True slant edge $R \approx 66.3\text{ mm}$; developed surface consists of 4 trapezoidal facets forming the truncated pyramid.

#### Problem 143: Square Pyramid – Section Plane Inclined to HP Cutting the Base
**Given:** Square pyramid, base $40\text{ mm}$, axis $60\text{ mm}$, resting on HP with base edges equally inclined to VP; cutting plane inclined $45^\circ$ to HP passing through axis at $15\text{ mm}$ above base.  
**Find:** Front view, sectional top view, and development of lower portion.

**Solution**
1. Draw the top view as a square of side $40\text{ mm}$ having diagonals parallel and perpendicular to $xy$.
2. Draw the front view with base $a'\text{-}c'$ on $xy$, central edge $o'\text{-}b'(d')$, and height $60\text{ mm}$.
3. Locate the cutting point on the axis $15\text{ mm}$ above the base and draw plane $V\text{-}T$ inclined at $45^\circ$ to $xy$, cutting slant edges $o'a'$ at $1'$, $o'b'(d')$ at $2'$, and base at $3', 4'$.

> **Figure: Step 143.1: Projections of square pyramid and cutting plane**
>
> Step 143.1 showing the orthographic projections of a square pyramid and the section plane trace:
> - Reference line labeled x - y.
> - Front view (above xy): Apex labeled o', base on xy with vertices a', b'(d'), c'. Total vertical height is 60 mm. The central axis has a point at 15 mm from the base through which a cutting plane line V-T passes, inclined at 45° to the horizontal/xy. Cutting points on edges are marked: 1' on slant edge o'a', 2' on the axis / slant edges o'b' and o'd', 3' on slant edge o'c'.
> - Top view (below xy): Square base with corners labeled a (left), b (bottom), c (right), d (top), oriented such that its edges are equally inclined to the xy line (diagonals are horizontal and vertical). Slant edges connect corners to the center. One base edge is dimensioned as square 40 (□40).
> - Beside the drawing: Box labeled '143.1' with 'B = 40', 'H = 60'.
> - Text at bottom: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

4. Determine true slant edge length $R = o'-b_1'$ by rotating base corner $b$ to the horizontal axis in TV.
5. Project cut points $1'$ and $2'$ horizontally to $o'-b_1'$ to find true lengths from $o'$.
6. On development centered at $O$ with radius $R$, step off four $40\text{ mm}$ arcs for base points $A, B, C, D, A$.
7. Lay off true lengths on generators $OA, OB, OD$ and transfer base cut points $3, 4$ directly onto base lines $BC$ and $CD$.
8. Connect the points with straight segments to complete the development.

> **Figure: Projections and surface development of a cut pentagonal pyramid labelled 143.2**
>
> Orthographic projections and lateral surface development of a cut pentagonal pyramid:
> - Left (Projections):
>   - Front View: Base resting on the xy line with base points a', b'(d'), c'. Apex at o', total height 60 mm. An inclined cutting plane V-T cuts the pyramid at an angle of 45° to the horizontal, starting at height 15 mm from the base on edge o'a' (point 1'), passing through point 2' on axis/edge b'(d'), and exit point 3' on edge o'c'. Projectors show horizontal lines from cut points 2' and 1' to true slant edge o'c' giving points 2" and 1".
>   - Top View: Pentagon with base vertices a, b, c, d, e, where base edge cd is perpendicular to xy. Apex o connected to each vertex. Sectioned area is hatched between the cut points on edges oa, ob, oc, od, oe. Base dimension 40 mm is shown along edge bc.
> - Right (Development of Lateral Surfaces):
>   - True slant edge length o'c' used as radius from apex O to develop five triangular faces with base points A, B, C, D, E, A (each base segment 40 mm).
>   - Cut boundary lines join points transferred from true lengths to form the development of the truncated pyramid.
> - Annotation Box:
>   - Label: '143.2'
>   - GIVEN: 'B = 40', 'H = 60'
>   - 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'

**Answer:** Retained lateral boundary consists of segments $1\text{-}2\text{-}3\text{-}4\text{-}2\text{-}1$ connected to base edges.

#### Problem 144: Pentagonal Pyramid – Section Planes Parallel and Inclined to HP
**Given:** Regular pentagonal pyramid, base side $30\text{ mm}$, altitude $60\text{ mm}$, one base edge perpendicular to VP; cut by horizontal plane $20\text{ mm}$ below apex and inclined plane at $30^\circ$ containing one base edge.  
**Find:** Development of lateral surfaces of remaining portion.

**Solution**
1. Draw TV as a regular pentagon $a\text{-}b\text{-}c\text{-}d\text{-}e$ with edge $a\text{-}e \perp xy$.
2. Project FV showing base $a'(e'), b'(d'), c'$ on $xy$ and apex $o'$ at height $60\text{ mm}$.
3. Draw the horizontal cutting plane $20\text{ mm}$ below apex $o'$.
4. Draw the inclined cutting plane at $30^\circ$ to $xy$ starting from base corner $c'$ passing through intermediate edges.

> **Figure: Orthographic projections of a pentagonal pyramid with cutting planes (Step 144.1)**
>
> Front view and top view of a regular pentagonal pyramid (base side B = 30 mm, axis height H = 60 mm). Top view shows a regular pentagon a-b-c-d-e with side a-e = 30 mm perpendicular to the xy line, and apex o connected to all five base corners. Front view shows apex o' at height 60 mm above base line x-y. Base points are labeled a'(e'), b'(d'), c'. Two cutting planes are introduced: a horizontal cutting plane 20 mm below apex o' with downward arrows, and an inclined cutting plane labeled V-T inclined at 30° to the vertical axis, passing through base corner a'(e') (point 1') and cutting slant edges at 2' and 3'. Beside the drawing is a box labeled '144.1' with specifications 'B = 30', 'H = 60', 'SCALE 1:1', and 'ALL DIMENSIONS ARE IN mm'.

5. Find true slant edge length $R$ by rotating slant edge $o\text{-}c$ to horizontal in TV and projecting to $o'\text{-}c_1'$ in FV.
6. Project all section points on the two planes horizontally onto true-length line $o'\text{-}c_1'$.
7. From $O$, draw radial stretch-out with 5 chords of $30\text{ mm}$ labeled $A, B, C, D, E, A$.
8. Transfer true radial distances to corresponding radial lines $OA, OB, OC, OD, OE, OA$ and connect upper and lower cut points with straight lines.

> **Figure: Development of the lateral surface of the truncated pentagonal pyramid (Step 144.2)**
>
> Left: Orthographic views showing the retained portion of the truncated pentagonal pyramid highlighted in thick lines between the horizontal cut (20 mm below o') and the inclined cut 1'-2'-3' at 30° to the axis. Right: Radial development of the truncated pyramid from apex O. The full stretch-out of five triangular faces is drawn with true slant edges O-A, O-B, O-C, O-D, O-E, O-A, each base segment A-B, B-C, C-D, D-E, E-A equal to 30 mm. Cut points 1, 2'', 3, 2'', 1 are marked on the respective radial generators corresponding to the lower inclined cutting plane, and concentric arc segments define the upper horizontal cut. Beside the figure is a label box '144.2' with 'B = 30', 'H = 60', 'SCALE 1:1', and 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Lateral development bounded at top by uniform offset arc-chords and at bottom by inclined facet cuts.

#### Problem 215: Frustum of Square Pyramid
**Given:** Square pyramid frustum, bottom base $40\text{ mm}$, top base $20\text{ mm}$, height $50\text{ mm}$, base sides parallel to VP.  
**Find:** Orthographic projections and development of lateral surface.

**Solution**
1. Draw TV showing concentric squares of sides $40\text{ mm}$ ($a\text{-}b\text{-}c\text{-}d$) and $20\text{ mm}$ ($1\text{-}2\text{-}3\text{-}4$) with sides parallel/perpendicular to $xy$.
2. Draw FV frustum of height $50\text{ mm}$; extend slant edges upward to intersect at apex $o'$ (total apex height $= 100\text{ mm}$).

> **Figure: Orthographic projection of a frustum of a square pyramid**
>
> Step 215.1: Orthographic projection showing the front view and top view of the frustum of a square pyramid.
> - Front view (above reference line x-y):
>   - Base on XY line of width 40 mm, endpoints labeled a'(d') and b'(c').
>   - Top cut edge parallel to XY line at a height of 50 mm, endpoints labeled 1'(4') and 2'(3').
>   - Height dimensioned as 50 mm between the base and the cut surface.
>   - Apex o' indicated above with projection/construction lines extending from the slanted sides up to the apex.
> - Top view (below reference line x-y):
>   - Outer square representing the base, side length 40 mm, corners labeled a (bottom-left), b (bottom-right), c (top-right), d (top-left). Dimensioned as ◻40.
>   - Inner square representing the top cut face, side length 20 mm, corners labeled 1 (bottom-left), 2 (bottom-right), 3 (top-right), 4 (top-left). Dimensioned as ◻20.
>   - Diagonal lines connect outer corners to inner corners: a-1, b-2, c-3, d-4.
> - Annotations:
>   - "SCALE 1:1"
>   - "ALL DIMENSIONS ARE IN mm"
>   - Label box: "215.1"
>   - Data box: "BB = 40, TB = 20, H = 50"

3. Determine true slant lengths: rotate $o\text{-}b$ to horizontal in TV, project up to find true slant length $R = O\text{-}B$ and top slant length $r_0 = O\text{-}2$.
4. With center $O$, swing arcs of radii $R$ and $r_0$.
5. Step off four successive base chords of $40\text{ mm}$ ($A\text{-}B\text{-}C\text{-}D\text{-}A$) along outer arc.
6. Join base division points to $O$ with radial lines, intersecting inner arc at $1, 2, 3, 4, 1$.
7. Connect adjacent points on each arc with straight lines to form four identical isosceles trapezoids.

> **Figure: Orthographic projections and radial line development of the surface of a frustum of a square pyramid**
>
> Engineering drawing showing the development of a frustum of a square pyramid. On the left are the orthographic views: a top view showing concentric squares of side 40 mm (corners a, b, c, d) and side 20 mm (corners 1, 2, 3, 4), and a front view of the frustum resting on the ground line xy with base width 40 (a'(d') to b'(c')), top width 20 (1'(4') to 2'(3')), and vertical height 50 mm, tapering up to an apex o'. Slant edge true length is found by rotating corner b to b1 in the top view and projecting to b1' on xy, connecting o' to b1'. To the right is the radial line development of the lateral surface with apex at the bottom center: four consecutive trapezoidal faces with bottom curved boundary A-B-C-D-A (chords forming base) and top curved boundary 1-2-3-4-1. Beside the drawing are notes: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', a boxed solution label '215.1', and a parameter box with 'BB = 40', 'TB = 20', 'H = 50'.

**Answer:** Lateral surface is composed of four symmetric trapezoids with parallel sides $40\text{ mm}$ and $20\text{ mm}$.

#### Problem 145: Hexagonal Pyramid – Shortest Path Around Lateral Surface
**Given:** Regular hexagonal pyramid, base side $30\text{ mm}$, altitude $60\text{ mm}$, base edge parallel to VP; insect travels from extreme left point around lateral surface back to starting point.  
**Find:** Shortest path shown in FV, TV, and lateral development.

**Solution**
1. Draw regular hexagon TV with edges $a\text{-}b$ and $d\text{-}e$ parallel to $xy$.
2. Draw FV with base $a'\text{-}d'$ on $xy$ and apex $o'$ at height $60\text{ mm}$.

> **Figure: Orthographic projections of a hexagonal pyramid (Step 145.1)**
>
> Step 145.1 of worked solution for a hexagonal pyramid.
> Givens box:
> - B = 30 (base side length in mm)
> - H = 60 (axis height in mm)
> 
> Drawing shows:
> - Front View: A triangle representing the hexagonal pyramid resting on the HP with its base on the xy line. Base line runs from a' to d' with intermediate points b', f' and c', e'. Apex is o' at height 60 mm above xy. Slant edges connect o' to a', b'/f', c'/e', and d'.
> - Top View: A regular hexagon a-b-c-d-e-f with side 30 mm, with edges fe and bc parallel to xy. Center is o, representing the apex, connected to all six base corners (a, b, c, d, e, f).
> - Vertical projection lines connect corresponding points between the top and front views.
> - Note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

3. Identify true slant length $R = o'\text{-}a' = o'\text{-}d'$ directly from FV since extreme edges are parallel to VP in TV.
4. From apex $O$, draw an arc of radius $R$ and step off six $30\text{ mm}$ chords for points $A, B, C, D, E, F, A$.
5. Draw a straight line connecting initial point $A$ to final point $A$ on the opposite boundary of the development.
6. Mark intersections $1, 2, 3, 4, 5$ of this straight line with radial edges $OB, OC, OD, OE, OF$.
7. Measure radial distances $O\text{-}1, O\text{-}2$, etc., and transfer horizontally back to FV slant edge $o'a'$, then project to corresponding edges in FV and TV.

> **Figure: Orthographic projections and development of the surface of a cut hexagonal pyramid (Step 145.2)**
>
> Step 145.2 showing the development of the lateral surface of a truncated hexagonal pyramid.
> Givens box:
> - B = 30
> - H = 60
> 
> Drawings:
> 1. Front View (left):
>    - Base on xy line from a' to d', height = 60 mm to apex o'.
>    - A cutting plane/line passes through the pyramid with section points: 1' on slant edge o'a', 2' on o'b'(f'), 3' on o'c'(e'), and 4' on o'd'.
> 2. Top View (bottom-left):
>    - Regular hexagon a-b-c-d-e-f (side = 30 mm) with apex o.
>    - Cutting boundary points projected down: point 1 on oa, points 2 on ob and of, points 3 on oc and oe, point 4 on od, forming the shape 1-2-3-4-3-2-1.
> 3. Surface Development (right):
>    - Apex O with radial generator length equal to true slant length o'd'.
>    - Six connected triangular sectors with base corners labelled A, B, C, D, E, F, A (each base chord = 30 mm).
>    - Points 1, 2, 3, 4, 3, 2, 1 marked along the radial lines OA, OB, OC, OD, OE, OF, OA at their respective true distances from O, joined with straight segments to form the developed cut boundary.
> - Note: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm'.

**Answer:** Shortest path length on development $= 2R \sin(6\alpha / 2)$, appearing as a continuous polygonal loop in orthographic views.

#### Problem 147: Cone Cut by a Plane Inclined to HP Bisecting the Axis
**Given:** Right circular cone, base diameter $50\text{ mm}$, height $60\text{ mm}$; section plane inclined $30^\circ$ to HP bisecting axis ($30\text{ mm}$ above base).  
**Find:** Front view, sectional top view, and lateral surface development.

**Solution**
1. Draw TV circle $\varnothing 50\text{ mm}$, divided into 8 equal sectors with generators $a, b, c, d, e, \dots$
2. Draw FV triangle with base $a'\text{-}e' = 50\text{ mm}$ on $xy$ and apex $o'$ at $60\text{ mm}$.
3. Draw cutting plane at $30^\circ$ to $xy$ passing through axis midpoint ($30\text{ mm}$ above $xy$).

> **Figure: Step 147.1: Orthographic projections of cone with cutting plane**
>
> Step 147.1 shows the front view and top view of a cone resting on HP with a cutting plane. In the top view, a circle of diameter Ø50 mm with center 'o' is divided into 8 equal sectors with generator points labelled along the perimeter: a (leftmost), b, c, d, e (rightmost), d, c, b. Projectors lead up to the XY reference line labelled 'x' on the left and 'y' on the right. In the front view, the base lies on XY with points a', b', c', d', e', and apex o' directly above center o at a total height of 60 mm. The axis is bisected at a height of 30 mm above XY, through which a cutting plane line V-T passes, inclined at 30° to the horizontal. Intersection points of the cutting plane with the generators are labelled 1', 2', 3', 4', 5'. A box on the upper-left notes 'D = 50' and 'H = 60'. Notes at the bottom read 'SCALE 1:1' and 'ALL DIMENSIONS ARE IN mm'.

4. Calculate true slant height $R = \sqrt{25^2 + 60^2} = 65\text{ mm}$.
5. Calculate sector angle $\theta = \frac{r}{R} \times 360^\circ = \frac{25}{65} \times 360^\circ \approx 138.5^\circ$ (use $138^\circ$).
6. Project all generator cut points horizontally to extreme generator $o'e'$ in FV to obtain true radial distances.
7. Lay out sector of radius $65\text{ mm}$ and angle $138^\circ$, divide into 8 equal parts, and mark true radial lengths on corresponding generators.
8. Draw a smooth curve through the points to outline the development.

> **Figure: Orthographic projections and surface development of a cut cone**
>
> Engineering drawing showing the front view, top view, and development of the lateral surface of a truncated cone (labeled 147.2).
> - Given parameters box: D = 50, H = 60.
> - Front View: A cone with apex o' and base on reference line xy from a' to e', base diameter 50 mm, total height 60 mm. Generators are drawn from apex o' to base points a', b', c', d', e'. Cutting planes intersect the cone: one cutting plane labeled V-T is inclined at 30° to the axis/HP, and another section cut is shown. Intersection points on generators are labeled 1', 2', 3', 4', 5'. A height dimension of 30 mm is indicated on the right side.
> - Top View: Concentric circle projection showing base circle of diameter Ø50 divided into 8 or 12 sectors with points a, b, c, d, e. Cut section points are projected down and hatched with section lines.
> - Development of Lateral Surface: Sector of radius equal to slant height o'e' with apex O and included angle calculated as θ = (r / R) × 360° = (25 × 360) / 65 = 138°. The sector is divided into segments corresponding to base points A, B, C, D, E, D, C, B, A. Cut points 1, 2, 3, 4, 5, 4, 3, 2, 1 are transferred from true length generators to form the developed profile of the retained lower portion.

**Answer:** Sector subtended angle $\theta = 138^\circ$; development bounded by smooth truncated curve.

#### Problem 149: Cone Cut by Two Section Planes Parallel and Inclined to HP
**Given:** Cone, base $\varnothing 50\text{ mm}$, height $60\text{ mm}$; horizontal plane $15\text{ mm}$ below apex; inclined plane at $30^\circ$ to HP through extreme left base point.  
**Find:** Lateral surface development of the lower retained portion.

**Solution**
1. Draw TV circle $\varnothing 50\text{ mm}$ divided into 8 equal sectors.
2. Draw FV triangle with apex $o'$ at height $60\text{ mm}$ above base on $xy$.
3. In FV, draw the horizontal plane line $15\text{ mm}$ below $o'$, and the inclined plane line at $30^\circ$ starting at $a'$.

> **Figure: Orthographic projections of a cone cut by section planes (Step 149.1)**
>
> Front view and top view of a cone cut by two section planes. Cone parameters: Base diameter D = 50 mm, Height H = 60 mm. The top view shows a circle of diameter 50 mm divided into 8 equal parts with points labelled a, b, c, d, e around the circumference and centre o. Projection lines extend to the front view with base points a', b', c', d', e' on the reference line xy, apex at o', and height 60 mm. Two section planes are shown: a horizontal cutting plane V-T located 15 mm below the apex o', and an inclined cutting plane inclined at 30° to the horizontal reference line passing through the axis at point 3' and intersecting the generators at points 1', 2', 3', 4', 5'. Labelled box indicates: '149.1', 'D = 50', 'H = 60'.

4. Compute $R = \sqrt{25^2 + 60^2} = 65\text{ mm}$ and sector angle $\theta = \frac{25}{65} \times 360^\circ = 138^\circ$.
5. Project section points on each generator horizontally to true generator $o'e'$ to get true lengths from apex.
6. On development of radius $R = 65\text{ mm}$ and angle $138^\circ$, draw 8 sector generators.
7. Transfer true lengths from apex onto generators; join top cut points with a circular arc of radius $R_{top} = 15 \times \frac{65}{60} = 16.25\text{ mm}$ and bottom cut points with a smooth curve.

> **Figure: Orthographic projections and development of the lateral surface of a truncated cone (Step 149.2)**
>
> Front view, top view, and lateral surface development of a cut cone. Cone dimensions: base diameter D = 50 mm, height H = 60 mm, true slant length R = 65 mm. The front view shows the cone truncated by a horizontal cutting plane 15 mm below the apex and an inclined cutting plane at 30° to the base. The top section is bounded by cut point 6', and the bottom cut passes through points 1', 2', 3', 4', 5'. The development is a circular sector with true slant radius R = 65 mm (marked o'e') and sector angle theta = (25 * 360)/65 = 138°, divided into 8 equal sectors labelled with generators A1, B, C, D, E, D, C, B, A1. The top truncation forms an arc of radius o'6'. The bottom cut profile is plotted using points 1, 2, 3, 4, 5, 4, 3, 2, 1 connected by a smooth curve. Labelled box indicates: '149.2', 'D = 50', 'H = 60'.

**Answer:** Sector angle $\theta = 138^\circ$, with upper boundary as a circular arc and lower boundary as an inclined section curve.

#### Problem 150: Cone – Sugar Jar Problem: Return to Initial Point
**Given:** Conical vessel, base diameter $50\text{ mm}$, height $60\text{ mm}$; ant travels from extreme left base point once around the surface returning to starting point.  
**Find:** Shortest path in front view, top view, and development.

**Solution**
1. Draw TV circle $\varnothing 50\text{ mm}$ divided into 8 generators and FV triangle of height $60\text{ mm}$.
2. Compute slant radius $R = \sqrt{25^2 + 60^2} = 65\text{ mm}$ and sector angle $\theta = \frac{25}{65} \times 360^\circ \approx 138.5^\circ$.
3. Construct development sector with radius $R = 65\text{ mm}$ and angle $138.5^\circ$, bounded by generators $OA$ and $OA$.
4. Draw a straight line from base point $A$ on the left edge to base point $A$ on the right edge.
5. Divide the development sector into 8 equal angles corresponding to TV generators $OA, OB, OC, OD, OE, OD, OC, OB, OA$.
6. Mark intersections of the straight line with each generator, measure their radial distances from $O$, and project horizontally to $o'e'$ in FV, then onto matching generators in FV and TV.
7. Connect mapped points in FV and TV with smooth curves to display the 3D trajectory.

> **Figure: Orthographic projections and development of the surface of a cone showing shortest path of an ant**
>
> The figure illustrates the development of a cone and the path of an ant around it:
> - **Front View**: Apex labeled o', base points labeled a', b', c', d', e' on the ground line x-y. Cone base diameter = 50 mm, vertical height = 60 mm. Path of the ant shown passing through points 1', 2', 3', 4', 5' along the generators and returning.
> - **Top View**: A circle of diameter Ø50 with center o, showing radial generators a, b, c, d, e and the closed loop path of the ant projected from the front view and development.
> - **Surface Development**: A circular sector with apex O and radius equal to the true slant length o'e'. The arc subtends an angle $\theta = (25 \times 360)/65 = 138^\circ$. The sector base is divided into 8 equal parts labeled $A^1$, B, C, D, E, D, C, B, A. A straight line is drawn from $A^1$ to $A$ representing the shortest path of the ant, intersecting generators at points labeled 2, 3, 4, 5, 4, 3, 2.
> - **Parameters**: D = 50 mm, H = 60 mm, slant generator o'e' ≈ 65 mm. Scale 1:1, all dimensions are in mm.

**Answer:** Straight line on development gives shortest path; maximum height reached is at the midpoint generator opposite to start.

#### Problem 152: Cone – Sugar Jar Problem: Extreme Left to Right
**Given:** Right circular cone, base $\varnothing 50\text{ mm}$, height $60\text{ mm}$; insect moves on surface from extreme left base point to diametrically opposite base point.  
**Find:** Shortest path in FV and TV, and shortest distance value.

**Solution**
1. Draw orthographic views of cone with base $\varnothing 50\text{ mm}$, height $60\text{ mm}$, and 8 generators.
2. Compute true slant length $R = \sqrt{25^2 + 60^2} = 65\text{ mm}$ and total sector angle $\theta = 138.5^\circ$.
3. In development, the diametrically opposite point lies on generator $OE$ at half the total angle: $\theta/2 = 69.25^\circ$.
4. Draw straight line on development from start point $A$ (on outer arc) to opposite point $E$ (on outer arc).
5. Measure length of straight line segment $AE$: $L = 2 R \sin(\theta/4) = 2 \times 65 \times \sin(34.6^\circ) \approx 73.8\text{ mm}$.
6. Mark intersections along intermediate generators, transfer radial distances back to FV and TV, and draw the resulting curve.

> **Figure: Orthographic projections and surface development of a cone showing the shortest path of an insect**
>
> Technical drawing labeled 152.1 showing the development of a cone and the shortest path between diametrically opposite points:
> 1. Front View (FV):
> - Cone resting on XY reference line with apex $o'$ and base line $a'-e'$.
> - Height of cone dimensioned as 60 mm.
> - Base diameter dimensioned via top view as Ø50 mm.
> - Generatrix lines divide the cone into sections labeled $a', b', c', d', e'$.
> - Curve representing the path of the insect passes through points $1', 2', 3', 4', 5'$ across the front view.
> 2. Top View (TV):
> - Circle of diameter 50 mm representing the base, divided into 8 equal parts labeled $a, b, c, d, e$ and corresponding points.
> - Center marked as $o$.
> - Curved path from point $a$ to diametrically opposite point $e$ plotted through points 2, 3, 4, 5.
> 3. Surface Development:
> - Sector of a circle with apex $O$ and radius $o'e'$ (true slant height = 65 mm).
> - Sector angle $\theta = (25 \times 360)/65 = 138^\circ$.
> - Sector base is divided into 8 sections labeled $A_1, B, C, D, E, D, C, B, A$.
> - A straight line connects point $A_1$ on the base to the diametrically opposite base point $E$ representing the shortest path across the half-cone surface, intersecting generators at intermediate points 2, 3, 4, 5.
> - Parameter box: D = 50, H = 60.
> - Notes: SCALE 1:1, ALL DIMENSIONS ARE IN mm.

**Answer:** Shortest distance $\approx 74\text{ mm}$.

#### Problem 153: Cone – Development is Semicircle with Inscribed Circle
**Given:** Development of right circular cone is a semicircle of radius $R = 60\text{ mm}$; largest possible circle is inscribed in the development.  
**Find:** Orthographic projections of the inscribed circle on the cone in FV and TV.

**Solution**
1. Semicircle development implies sector angle $\theta = 180^\circ$; base radius is $r = R \times \frac{\theta}{360^\circ} = 60 \times \frac{180^\circ}{360^\circ} = 30\text{ mm}$.
2. Cone vertical height is $h = \sqrt{R^2 - r^2} = \sqrt{60^2 - 30^2} = \sqrt{2700} \approx 51.96\text{ mm}$.
3. In the semicircle of radius $R = 60\text{ mm}$, the inscribed circle touches the diameter at apex $O$ and the curved arc, so its radius is $r_c = R/2 = 30\text{ mm}$ with center at distance $30\text{ mm}$ from $O$ along the central generator.
4. Divide the inscribed circle in development into 12 points and draw radial lines from apex $O$ through these points to find their angular positions and radial distances.
5. Transfer corresponding generator angles to the top view (angular coordinate in TV is $\phi = 2\theta_{dev}$ since $\theta / 360^\circ = 1/2$).
6. For each point, project radial distance horizontally from slant edge in FV to locate heights and plot points on front and top views, connecting them into smooth 3D curves.

> **Figure: Orthographic projections and surface development of a cone with an inscribed circle**
>
> Engineering drawing showing the front view, top view, and development of a cone labelled 153.1:
> - Right: The development is a semicircle of radius $L = 60\text{ mm}$ centered at $O (1)$ with base line $A-A$ of length 120 mm. The subtended angle is $\theta = (r \times 360)/L = 180^\circ$, hence cone base radius $r = 30\text{ mm}$. A circle is inscribed in this semicircle, touching the base diameter at point $1$ (center $O$) and the arc at top point $E_5$. Semicircle is divided into 8 equal sectors by radial generators to points $A, B, C, D, E_5, D, C, B, A$. The inscribed circle intersects these generators at points $1, 2, 3, 4, E_5$.
> - Left: Front view (elevation) and top view (plan) of the cone on reference line $x-y$:
>   - Top view: Circle of radius $r = 30\text{ mm}$ (diameter 60 mm) representing the base of the cone, divided into 8 sectors with points $a, b, c, d, e$. The inscribed circle from the development is projected back onto the cone's surface, forming a symmetrical loop/heart-shaped curve through points $1, 2, 3, 4, 5$.
>   - Front view: An isosceles triangle with base on $x-y$ from $a'$ to $e'$ (diameter 60 mm) and apex $o', 1'$. Cut points $2, 3, 4$ are transferred horizontally from true slant height positions onto corresponding generators $o'-b', o'-c', o'-d'$ to form the front view of the curve passing through $1', 2', 3', 4', 5'$.
> - Text annotations: 'SCALE 1:1', 'ALL DIMENSIONS ARE IN mm', 'L = 60', '$\theta = (r \times 360)/L = 180^\circ$ hence $r = 30$'.

**Answer:** Base diameter $\varnothing 60\text{ mm}$, height $h \approx 52\text{ mm}$; inscribed circle forms a closed spatial loop on the cone surface.

### Quick recall
- Slant edges in front view represent true length only when parallel to the $xy$ reference line in the top view.
- Cone sector angle is always governed by $\theta = \frac{r}{R} \times 360^\circ$; never step off curved chords with straight dividers around cones.
- All section points must be projected horizontally onto a true-length generator before swinging radial arcs to the development.
- A straight line on the development always maps to the shortest surface path (geodesic) on the solid.
