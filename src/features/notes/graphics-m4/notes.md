<!-- page 1 | About this notebook -->

## Mastering Isometric Projections of Combined Solids

Develop hands-on expertise in constructing isometric projections and views of multi-body engineering solids. Progress from basic coaxial prisms and pyramids through curved surfaces, holes, spheres, and frustums to complex three-tier assemblies.

**Before you start:** Orthographic projection principles (First-angle projection); Basic geometric constructions (polygons, tangents, and circles); Familiarity with drafting tools (mini-drafter, compass, set squares).

**In this notebook**

1. Fundamentals of Isometric Projections
2. Isometric Projections of Prisms and Pyramids
3. Cylindrical Surfaces, Cones, and Internal Holes
4. Cones, Pyramids, and Hemispherical Bases
5. Spherical Surfaces, Blocks, and Conical Frustums
6. Frustums of Pyramids and Stacked Spherical Bodies
7. Multi-tier Coaxial Assemblies

<!-- page 2 | Fundamentals of Isometric Projections -->

## Fundamentals of Isometric Projections

### What you need
- **Isometric View vs. Projection**: An isometric view uses full true scale ($1:1$), whereas an isometric projection uses a foreshortened isometric scale ($0.816:1$).
- **Reduction Factor**: $\text{Isometric Length (IL)} = \text{True Length (TL)} \times \sqrt{2/3} = \text{TL} \times \frac{\cos 45^\circ}{\cos 30^\circ} \approx 0.816 \times \text{TL}$.
- **Isometric Axes**: Three mutually perpendicular lines in space projected onto a plane, spaced at $120^\circ$ apart (one vertical, two at $30^\circ$ to the horizontal baseline).
- **Isometric Lines vs. Non-Isometric Lines**: Lines parallel to the isometric axes are isometric lines and can be measured directly; all other lines are non-isometric and cannot be measured directly.
- **Box Method**: Enclose an irregular or non-rectangular profile inside an orthographic rectangular box, transfer the box along the isometric axes, and locate profile vertices along the box edges.

### The method
1. Draw a horizontal reference baseline.
2. Construct the three principal isometric axes: a vertical line ($90^\circ$) and two receding axes at $30^\circ$ to either side of the baseline.
3. Construct an isometric scale by drawing a true length line at $45^\circ$ and an isometric scale line at $30^\circ$ to a common horizontal line, projecting points vertically downward from the $45^\circ$ line to the $30^\circ$ line.
4. Determine whether the drawing requires an isometric view (measure true lengths directly) or an isometric projection (measure all dimensions from the isometric scale).
5. For irregular bases or non-isometric lines, draw the orthographic view, enclose it in a bounding rectangle, and determine offset coordinates along the bounding edges.
6. Draw the isometric bounding box using the three isometric axes, transfer coordinate distances along the box edges, connect the located points, and outline the visible contours.

### Problems

#### Problem 1: Construction of an Isometric Scale
**Given:** A maximum true length of $100\text{ mm}$.  
**Find:** Construct an isometric scale showing markings every $10\text{ mm}$ up to $100\text{ mm}$, and measure an isometric length of $65\text{ mm}$.

**Solution**
1. Draw a horizontal baseline $OA$.
2. From $O$, draw line $OB$ at an angle of $45^\circ$ to represent true lengths.
3. From $O$, draw line $OC$ at an angle of $30^\circ$ to represent isometric lengths.
4. Along the true length line $OB$, mark regular divisions of $10\text{ mm}$ from $0$ to $100\text{ mm}$ using a standard ruler.
5. From each marked division on $OB$, project lines vertically downward (perpendicular to baseline $OA$) to intersect line $OC$.
6. Label the corresponding intersection points on $OC$ from $0$ to $100\text{ mm}$; these define the isometric scale units.
7. Subdivide the first $10\text{ mm}$ unit to the left of $0$ into $1\text{ mm}$ increments along $OB$, and project them vertically onto $OC$ for millimeter precision.
8. Measure $65\text{ mm}$ on the isometric scale by placing a divider from main division $60$ to sub-division $5$.

> **Key idea.** Projections between the $45^\circ$ line and the $30^\circ$ line must be perpendicular to the horizontal baseline, not perpendicular to the scale lines.

**Answer:** Isometric scale calibrated up to $100\text{ mm}$; isometric equivalent of $65\text{ mm}$ true length measures $53.04\text{ mm}$.

#### Problem 2: Isometric Projection of a Hexagonal Lamina (Box Method)
**Given:** Regular hexagonal lamina of side $30\text{ mm}$, lying flat on a horizontal plane.  
**Find:** Isometric projection of the lamina.

**Solution**
1. Draw the orthographic top view of a regular hexagon $ABCDEF$ with edge $30\text{ mm}$ such that two edges are horizontal.
2. Enclose $ABCDEF$ inside a minimum bounding rectangle $PQRS$ with length $L = 2 \times 30 = 60\text{ mm}$ and width $W = 2 \times 30 \cos 30^\circ = 51.96\text{ mm}$.
3. Determine the reduced isometric lengths from the isometric scale: $L_{\text{iso}} = 60 \times 0.816 = 48.96\text{ mm}$, $W_{\text{iso}} = 51.96 \times 0.816 = 42.40\text{ mm}$, and edge $S_{\text{iso}} = 30 \times 0.816 = 24.48\text{ mm}$.
4. Mark an origin $P$ and draw two isometric axes at $30^\circ$ to the horizontal representing the horizontal plane.
5. Mark length $PQ = 48.96\text{ mm}$ along the right $30^\circ$ axis and width $PS = 42.40\text{ mm}$ along the left $30^\circ$ axis.
6. Complete the isometric parallelogram $PQRS$ by drawing parallel lines from $Q$ and $S$.
7. Locate corners $B$ and $E$ at the midpoints of sides $QR$ and $SP$ respectively.
8. Mark distances $PA = QD = \frac{L_{\text{iso}} - S_{\text{iso}}}{2} = \frac{48.96 - 24.48}{2} = 12.24\text{ mm}$ from corners along $PQ$, and mark $SF = RC = 12.24\text{ mm}$ along $SR$.
9. Connect the plotted points $A-B-C-D-E-F-A$ with straight visible outlines.

> **Watch out.** Never set a divider to $24.48\text{ mm}$ and try to step off inclined sides like $AB$ or $BC$ directly; non-isometric lines are distorted and must be plotted purely by edge intercepts.

**Answer:** Isometric projection of the hexagonal lamina enclosed within an isometric parallelogram of sides $48.96\text{ mm} \times 42.40\text{ mm}$.

#### Problem 3: Isometric Projection of a Right Triangular Prism
**Given:** Equilateral triangular base of edge $40\text{ mm}$, height $60\text{ mm}$, resting vertically on its base.  
**Find:** Isometric projection of the prism.

**Solution**
1. Calculate the isometric dimensions using factor $0.816$: base edge $s_{\text{iso}} = 40 \times 0.816 = 32.64\text{ mm}$, base altitude $h_{b,\text{iso}} = (40 \sin 60^\circ) \times 0.816 = 34.64 \times 0.816 = 28.27\text{ mm}$, and prism height $H_{\text{iso}} = 60 \times 0.816 = 48.96\text{ mm}$.
2. Draw the orthographic equilateral base triangle $1-2-3$ enclosed in a bounding rectangle of length $32.64\text{ mm}$ and width $28.27\text{ mm}$.
3. Establish an isometric origin $O$, drawing receding axes at $30^\circ$ to the horizontal and a vertical axis at $90^\circ$.
4. Draw the bottom isometric reference rectangle on the two $30^\circ$ axes with dimensions $32.64\text{ mm}$ and $28.27\text{ mm}$.
5. Transfer base vertices $1, 2, 3$ onto the bottom rectangle: vertices $1$ and $2$ lie at the corners of one $32.64\text{ mm}$ edge, and vertex $3$ lies at the midpoint of the opposite parallel edge.
6. From each of the base vertices $1, 2, 3$, draw vertical lines parallel to the vertical isometric axis.
7. Measure the isometric height $H_{\text{iso}} = 48.96\text{ mm}$ upward along each vertical line to locate top vertices $1', 2', 3'$.
8. Connect top vertices $1'-2'-3'-1'$ with solid lines.
9. Draw visible vertical edges $1-1'$, $2-2'$, and $3-3'$ with dark outlines, keeping hidden base edges dashed or omitted.

**Answer:** Isometric projection completed with vertical prism edges measuring $48.96\text{ mm}$ and base edges plotted via coordinates.

### Quick recall
- Isometric projection uses an isometric scale ($0.816$), while isometric view uses the full true scale ($1.0$).
- An isometric scale is constructed using an angle ratio of $45^\circ$ (true length) to $30^\circ$ (isometric length) over a horizontal baseline.
- Isometric axes always sit at $120^\circ$ to each other: one vertical line and two lines sloping at $30^\circ$ above the horizontal.
- Non-isometric lines cannot be directly measured with a scale; their endpoints must be fixed using the box or coordinate method.
- Vertical lines in space always remain vertical lines in isometric drawings.

<!-- page 3 | Isometric Projections of Prisms and Pyramids -->

## Isometric Projections of Prisms and Pyramids

### What you need
- Isometric length reduction: $\text{Isometric Length} = \text{True Length} \times \sqrt{2/3} \approx 0.816 \times \text{True Length}$.
- Isometric axes: two receding axes at $30^\circ$ to the horizontal baseline and one vertical axis at $90^\circ$.
- Box containment method: enclose irregular or non-isometric profiles (triangles, pentagons, hexagons) in an orthographic bounding rectangle and transfer coordinates along isometric axes.
- Common vertical axis: concentric stacked solids share a central vertical axis; offsets are measured outward from the center along isometric directions.
- Non-isometric lines: slanted edges of pyramids cannot be measured directly; locate end vertices and join them.

### The method
1. Construct the isometric scale to convert all required true lengths into isometric values.
2. Draw the orthographic plan/elevation and enclose polygonal profiles inside tight rectangular bounding boxes.
3. Lay out the isometric axes from a reference origin ($30^\circ$ left, $30^\circ$ right, vertical).
4. Transfer the bounding box of the base solid onto the isometric plane and plot its perimeter vertices.
5. Project corner vertices vertically along the vertical axis by the solid's isometric height to form the top face.
6. Locate the central axis on the top face to set out the bounding box or apex of the secondary solid.
7. Connect corner vertices, define all visible outlines with dark lines, and omit hidden details.

### Problems

#### Problem 156: Cube Placed Centrally on a Square Slab
**Given:** Square slab base $B_1 = 60\text{ mm}$, height $H_1 = 20\text{ mm}$; Cube base $B_2 = 40\text{ mm}$, height $H_2 = 40\text{ mm}$; axes coincide.  
**Find:** Isometric projection of the combined solids.

**Solution**
1. Draw the orthographic top and front views showing the $40\text{ mm}$ cube placed concentrically on the $60\text{ mm} \times 20\text{ mm}$ square slab.
2. Construct the standard isometric scale diagram to obtain $\text{iso } 20$, $\text{iso } 40$, and $\text{iso } 60$.
3. From an origin on the horizontal baseline, draw two isometric axes inclined at $30^\circ$ to the left and right, and mark the slab base edges $A\text{--}B = B\text{--}C = C\text{--}D = D\text{--}A = \text{iso } 60$.
4. Erect vertical lines of height $\text{iso } 20$ from vertices $A, B, C, D$ to establish the upper face $1\text{--}2\text{--}3\text{--}4$ of the square slab.
5. Draw the diagonals of the upper square face $1\text{--}2\text{--}3\text{--}4$ to determine the central axis point.
6. Set off the centered square boundary $P\text{--}Q\text{--}R\text{--}S$ of edge length $\text{iso } 40$ on the top face by measuring offsets of $\text{iso } 10$ inward from each slab edge.
7. From corners $P, Q, R, S$, project verticals upwards of height $\text{iso } 40$ and join top ends to complete the cube.
8. Darken the visible outer boundary lines and intersecting visible edges, leaving non-visible base edges light or omitted.

> **Figure: Orthographic projections showing front view and top view of a cube on a square prism**
>
> Orthographic projection (labelled 156.1) showing the front view and top view of a cube of side 40 mm placed centrally over a square slab (prism) of base edge 60 mm and height 20 mm. A horizontal reference line is labelled x on the left and y on the right. Above the xy line, the front view shows a lower rectangle of width 60 and height 20 representing the square slab, with an upper rectangle of width 40 and height 40 centered on top of it representing the cube. Vertical dimension lines on the left indicate heights of 20 (for the bottom slab) and 40 (for the top cube). Below the xy line, the top view shows two concentric squares: an outer square labelled a (bottom-left), b (bottom-right), c (top-right), d (top-left) representing the square slab, and an inner square labelled p (bottom-left), q (bottom-right), r (top-right), s (top-left) representing the cube. Horizontal dimension lines at the bottom indicate widths of □40 for the inner square and □60 for the outer square. Light vertical projector lines connect the corners of the top view squares to the corresponding edges in the front view. To the right of the front view, a box below the label '156.1' lists: '1. SQUARE SLAB, B = 60, H = 20' and '2. CUBE, B = 40'.

> **Figure: Engineering drawing showing orthographic views, given dimensions, isometric view and construction scale for problem 156.2**
>
> Figure for problem 156.2. On the left, orthographic projections showing front view with heights 20 and 40, and top view with square slab of size 60 and inner square of size 40 labeled a b c d and p q r s. In the middle, a given box with '1. SQUARE SLAB B = 60 H = 20' and '2. CUBE B = 40'. On the right, an isometric view of a square slab with corners A, B, C, D and sides of length 60, along with an isometric scale diagram showing ISO 20, ISO 40, ISO 60 with corresponding horizontal lengths 20, 40, 60.

> **Figure: Engineering drawing showing orthographic views, given dimensions, isometric view and construction scale for problem 156.3**
>
> Figure for problem 156.3. On the left, orthographic projections showing front view with heights 20 and 40, and top view with square slab of size 60 and inner square of size 40 labeled a b c d and p q r s. In the middle, a given box with '1. SQUARE SLAB B = 60 H = 20' and '2. CUBE B = 40'. On the right, an isometric view of a raised square block with corners A, B, C, D, 1, 2, 3, 4, height 20, and sides of length 60, along with an isometric scale diagram showing ISO 20, ISO 40, ISO 60 with corresponding horizontal lengths 20, 40, 60.

> **Figure: Isometric and orthographic views for problem 156.4**
>
> Orthographic and isometric projection drawings for step 156.4. On the left, the orthographic projection has a horizontal reference line labelled x at the left end and y at the right end. Above line xy is the front view showing a lower rectangle of height 20 (dimensioned 20 on the left with vertical dimension arrows) resting on xy, and a centred upper square of height 40 (dimensioned 40 on the left with vertical dimension arrows) on top of it. Below line xy is the top view showing two concentric squares connected to the front view by vertical projector lines: the outer square has corners labelled a (bottom-left), b (bottom-right), c (top-right), and d (top-left), with its bottom horizontal width dimensioned as square 60 (□60); the inner concentric square has corners labelled p (bottom-left), q (bottom-right), r (top-right), and s (top-left), with its bottom horizontal width dimensioned as square 40 (□40). In the middle is a boxed label '156.4' above a text box reading '1. SQUARE SLAB, B = 60, H = 20' and '2. CUBE, B = 40'. On the right is an isometric projection of the square slab (base 60 by 60, height 20) with the base outline of the cube marked on its top face: the bottom base corners of the slab are labelled A (front/bottom), B (right), C (back, hidden corner connected by dashed hidden lines to D, B, and the top back corner), and D (left). The two front base edges AD and AB are each dimensioned 60, and the vertical right edge at B is dimensioned 20. Centered on the top face of the slab is an isometric square outline with corners labelled P (front), Q (right), R (back), and S (left).

> **Figure: Length scale or construction diagram for 156.4**
>
> Isometric scale construction diagram for step 156.4. A horizontal baseline is dimensioned at lengths 20, 40, and 60 from the left vertex using parallel horizontal dimension lines below the base. From the left vertex, an inclined line rises at 30 degrees to the horizontal. Slanted parallel projection lines (at 45 degrees to the horizontal) connect the true length marks 20, 40, and 60 on the horizontal base up to the inclined isometric line. Parallel dimension lines above the inclined line label the resulting isometric lengths from the left vertex as 'ISO 20', 'ISO 40', and 'ISO 60'.

> **Figure: Isometric and orthographic views for problem 156.5**
>
> Orthographic and isometric projection drawings for step 156.5. On the left, the orthographic projection is identical to step 156.4: a horizontal reference line xy separates the front view above (a lower slab of height 20 and a centred upper cube of height 40, both dimensioned on the left) and the top view below (an outer square a-b-c-d dimensioned □60 and a concentric inner square p-q-r-s dimensioned □40). In the middle is a boxed label '156.5' above a text box reading '1. SQUARE SLAB, B = 60, H = 20' and '2. CUBE, B = 40'. On the right is the complete isometric projection showing the cube resting centrally on top of the square slab: the slab has bottom base corners A (front), B (right), C (back hidden corner with dashed edges), and D (left), with front base edges AD and AB each dimensioned 60 and the vertical edge at B dimensioned 20. On the top surface of the slab, the cube rises vertically from its base corners P (front), Q (right), R (back, with dashed hidden edges meeting at R), and S (left). The vertical height of the cube on the right is dimensioned 40, and its top back-right edge is dimensioned □40.

> **Figure: Length scale or construction diagram for 156.5**
>
> Isometric scale construction diagram for step 156.5. A horizontal baseline has true lengths 20, 40, and 60 marked and dimensioned below it from the left vertex. An inclined line from the same left vertex has corresponding isometric lengths projected onto it via parallel slanted lines from the 20, 40, and 60 marks on the horizontal baseline. Parallel dimension lines along the inclined line label these segments 'ISO 20', 'ISO 40', and 'ISO 60'.

**Answer:** Isometric projection of coaxial assembly (slab $60 \times 20\text{ mm}$, cube $40\text{ mm}$ side) completed using isometric scale dimensions.

---

#### Problem 133: Pentagonal Prism Resting on a Rectangular Face
**Given:** Pentagonal prism base edge $B = 30\text{ mm}$, axis length $L = 70\text{ mm}$, resting on HP on one rectangular face, end pentagonal faces parallel to VP.  
**Find:** Isometric projection of the prism.

**Solution**
1. Draw the orthographic front view (a regular pentagon $a\text{-}b\text{-}c\text{-}d\text{-}e$ of side $30\text{ mm}$ with base edge $a\text{-}b$ on $xy$) and top view (rectangle of $70\text{ mm}$ width).
2. Enclose the pentagon in the front view within a bounding rectangle $1\text{-}2\text{-}3\text{-}4$ resting on $xy$.
3. Convert box dimensions, pentagon vertex offsets, and prism length ($70\text{ mm}$) to isometric scale lengths.
4. Since end faces are parallel to VP, set up a vertical isometric front plane ($90^\circ$ vertical and a horizontal baseline, with the axis receding at $30^\circ$ to the right).
5. Construct the bounding box $1\text{-}2\text{-}3\text{-}4$ on the vertical plane using isometric dimensions and transfer pentagon corners $A, B, C, D, E$ onto the box edges.
6. From each vertex $A, B, C, D, E$, project parallel edges backward along the $30^\circ$ receding isometric axis by length $\text{iso } 70$.
7. Join the rear end vertices to replicate the identical parallel pentagonal face.
8. Darken all visible outlines and long lateral edges; keep hidden base and rear edges light or omitted.

> **Watch out.** When an end face is parallel to VP, its vertical dimensions remain along vertical isometric axes, but the longitudinal axis recedes at $30^\circ$.

> **Figure: Orthographic projections and isometric view of a pentagonal prism resting on a rectangular face**
>
> Orthographic projections (left) and isometric projection (right) of a pentagonal prism of base edge 30 mm and axis length 70 mm resting on one of its rectangular faces on the HP with its end faces parallel to the VP. On the left, above the horizontal reference line x-y, the front view shows a regular pentagon a-b-c-d-e with its base edge a-b resting on the x-y line, enclosed within a rectangle 1-2-3-4 (where corners 1 and 2 lie on x-y, 3 is top-right, 4 is top-left, vertex c lies on side 2-3, vertex d on side 4-3, and vertex e on side 1-4). The inclined edge e-d is dimensioned as 30. Below the x-y line, the top view is a rectangle of vertical length dimensioned as 70 on the left, with solid vertical outer edges projected from e and c, a solid central vertical line projected from top ridge d, and two dashed hidden vertical lines projected from the bottom base corners a and b. In the centre are two rectangular callout boxes: the upper box reads '1. PENTAGONAL PRISM, B = 30, H = 70' and the lower box reads 'L5.15'. On the right, the isometric drawing shows the prism enclosed in an isometric bounding box. The front pentagonal face A-B-C-D-E is inscribed in the front vertical isometric rectangle 1-2-3-4 (with 1 at bottom-left, 2 at bottom-right, 3 at top-right, 4 at top-left; A and B on edge 1-2 with the distance between A and B dimensioned as 30, C on vertical edge 2-3, D on top edge 4-3, and E on vertical edge 1-4). The prism extends along the receding isometric axis to the upper right with the receding length dimensioned as 70 along the bottom-right edge from corner 2. Visible edges of the prism (front pentagon A-B-C-D-E, receding edges from B, C, D, and visible rear edges) are drawn in thick solid lines, while hidden rear and bottom edges (the receding edge from A and the hidden rear edges meeting it) are drawn as dashed lines, and the enclosing box edges are drawn in thin construction lines.

**Answer:** Isometric projection of horizontal pentagonal prism ($30\text{ mm}$ edge, $70\text{ mm}$ length) completed.

---

#### Problem 157: Square Pyramid Centrally Positioned on a Hexagonal Prism
**Given:** Hexagonal prism (slab) base edge $B_1 = 30\text{ mm}$, height $H_1 = 20\text{ mm}$; Square pyramid base edge $B_2 = 24\text{ mm}$, height $H_2 = 40\text{ mm}$; common central vertical axis.  
**Find:** Isometric projection of the combined solids.

**Solution**
1. Draw the orthographic plan view of the regular hexagon (side $30\text{ mm}$) and enclose it in a bounding rectangle $1\text{-}2\text{-}3\text{-}4$ of width $2 \times 30 = 60\text{ mm}$ and depth $2 \times 30 \cos(30^\circ) = 51.96\text{ mm} \approx 52\text{ mm}$.
2. Inside the plan, draw the concentric square of side $24\text{ mm}$ and identify its diagonal intersection as the central axis $o$.
3. Draw the orthographic front view showing the slab height $20\text{ mm}$ and the pyramid apex at height $40\text{ mm}$ above the slab.
4. Construct an isometric scale line to obtain $\text{iso } 20$, $\text{iso } 24$, $\text{iso } 30$, $\text{iso } 40$, and the box dimensions $\text{iso } 52$ and $\text{iso } 60$.
5. Draw the lower isometric bounding box $1\text{--}2\text{--}3\text{--}4$ at $30^\circ$ inclinations and locate the bottom hexagonal corners $A, B, C, D, E, F$ along its sides.
6. Project these vertices vertically upwards by $\text{iso } 20$ to plot the top hexagonal face corners.
7. Locate the center $O$ on the upper hexagonal face via diagonals of its enclosing box.
8. Lay out the square base $P\text{--}Q\text{--}R\text{--}S$ (side $\text{iso } 24$) centered at $O$ on the upper face using coordinate offsets parallel to the isometric axes.
9. Erect a vertical axis of height $\text{iso } 40$ from center $O$ to locate the pyramid apex.
10. Join the apex to corners $P, Q, R, S$ with straight lines to form the slanted triangular faces.
11. Darken visible prism outer edges and pyramid slant edges, leaving rear concealed edges un-inked.

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

**Answer:** Isometric projection of square pyramid ($24\text{ mm} \times 40\text{ mm}$) stacked coaxially on hexagonal slab ($30\text{ mm} \times 20\text{ mm}$) completed.

### Quick recall
- Never apply scale dimensions directly to inclined edges; always map coordinates through the enclosing isometric box.
- In isometric projection, all linear dimensions must be converted using the isometric ratio $0.816$ via an isometric scale.
- Pyramids are drawn by first fixing the base perimeter on the supporting plane, then setting the apex vertically above the base center.
- Concentric alignment requires determining the center of the supporting top face before laying out the upper solid.

<!-- page 4 | Cylindrical Surfaces, Cones, and Internal Holes -->

## Cylindrical Surfaces, Cones, and Internal Holes

### What you need
- An isometric circle appears as an ellipse inside a rhombus of side equal to circle diameter $D$.
- **Four-center method**: obtuse corners serve as centers for large arcs; intersections of lines from obtuse corners to opposite midpoints serve as centers for small arcs.
- Coaxial vertical solids share a single vertical axis; center heights transfer along the vertical axis via $Z_{\text{new}} = Z_{\text{base}} + H$.
- Tangents to a cone in isometric projection run from the apex to the widest points of the base ellipse.
- A through-hole shows its top ellipse and only the visible lower rim curve within depth $H$.

### The method
1. Enclose non-circular bases (like hexagons) in a rectangular box in orthographic view; enclose circular bases in a square box of side $D$.
2. Project the bounding box into isometric space at $30^\circ$ base angles.
3. Construct base curves using the four-center ellipse method within the isometric rhombuses.
4. Measure solid heights vertically along the central axis to position upper faces or apex points.
5. Draw outer tangent generators from apex points or between matching ellipses.
6. For through-holes, project the bottom ellipse downward by hole depth $H$ and trace only the visible section.
7. Darken visible outlines and leave hidden or construction lines light.

### Problems

#### Problem 158: Cone Mounted on Cylindrical Slab
**Given:** Cylindrical slab of base diameter $D = 50\text{ mm}$, height $H = 20\text{ mm}$; cone of base diameter $d = 30\text{ mm}$, height $h = 45\text{ mm}$ placed coaxially on top.  
**Find:** Isometric projection of the combined solids.

**Solution**
1. Draw horizontal reference line and establish isometric axes at $30^\circ$, $90^\circ$, and $30^\circ$.
2. Construct the bottom rhombus of side $50\text{ mm}$ on the ground plane.
3. Draw the bottom half-ellipse of diameter $50\text{ mm}$ using the four-center method.
4. Project the center vertically upward by height $20\text{ mm}$ and construct the upper rhombus of side $50\text{ mm}$.
5. Draw the complete upper ellipse of diameter $50\text{ mm}$ in this rhombus.
6. Draw two vertical tangent lines connecting the outer limits of the top and bottom $50\text{ mm}$ ellipses.
7. Locate the common center on the top face of the cylinder and construct a concentric rhombus of side $30\text{ mm}$.
8. Draw the complete $30\text{ mm}$ base ellipse of the cone using the four-center method.
9. Measure the cone height $45\text{ mm}$ vertically from the center along the axis to locate apex $O$.
10. Draw tangents from apex $O$ to the outer curve of the $30\text{ mm}$ base ellipse.
11. Darken visible profiles of the cone, the exposed top ring of the cylinder, and the cylinder sides.

> **Watch out.** Tangents to a cone must be tangent to the base ellipse, not drawn to the rhombus corners.

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

**Answer:** Isometric projection showing coaxial assembly of cylindrical slab ($D = 50\text{ mm}, H = 20\text{ mm}$) and cone ($d = 30\text{ mm}, h = 45\text{ mm}$).

#### Problem 160: Cylindrical Hole in Hexagonal Prism (Hexagonal Nut)
**Given:** Regular hexagonal prism of base edge $b = 30\text{ mm}$, height $h = 20\text{ mm}$; concentric cylindrical through-hole of diameter $d = 30\text{ mm}$.  
**Find:** Isometric projection of the hexagonal nut.

**Solution**
1. Draw the orthographic top view of the regular hexagon of edge $30\text{ mm}$ with two vertical edges, and enclose it in rectangle $1\text{-}2\text{-}3\text{-}4$.
2. Measure dimensions of rectangle $1\text{-}2\text{-}3\text{-}4$ and distances of hexagon corners $A, B, C, D, E, F$ from box corners.
3. Draw isometric box of base $1\text{-}2\text{-}3\text{-}4$ on isometric axes at $30^\circ$.
4. Mark hexagonal corners $A, B, C, D, E, F$ along the box edges to complete the bottom hexagon.
5. Project all corners vertically upward by height $20\text{ mm}$ to form the top hexagonal face.
6. Locate the central axis on the top hexagonal face and lay out a rhombus of side $30\text{ mm}$ parallel to the isometric axes.
7. Draw the four-center ellipse of diameter $30\text{ mm}$ within this rhombus for the top rim of the hole.
8. Shift the arc centers of the visible lower curvature vertically downward by depth $20\text{ mm}$.
9. Draw the visible bottom arc of the cylindrical hole using the shifted centers.
10. Darken the outer hexagonal vertical edges, visible top face edges, and visible hole curves.

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

**Answer:** Isometric projection of hexagonal nut with base edge $30\text{ mm}$, height $20\text{ mm}$, and through-hole diameter $30\text{ mm}$.

### Quick recall
- Isometric circles always require an enclosing rhombus of side equal to the circle's diameter.
- The four-center method uses lines from obtuse vertices to opposite midpoints to find arc centers.
- Cylinder outlines consist of two ellipses connected by common tangent vertical generators.
- When projecting through-holes, duplicate only the bottom arc that falls inside the visible opening.

<!-- page 5 | Cones, Pyramids, and Hemispherical Bases -->

## Cones, Pyramids, and Hemispherical Bases

### What you need
- Isometric scale conversion: $\text{isometric length} = 0.816 \times \text{true length}$ (for isometric projections).
- Isometric circle (ellipse): drawn inside a rhombus of side equal to isometric diameter using the four-center method.
- Hemisphere profile: the flat circular face is an ellipse; the curved bottom contour is drawn as a circular arc with the true sphere radius $R$ centered at the ellipse center.
- Coaxial mounting: locate the common vertical axis through the center of the base solid to position the upper solid.

### The method
1. Draw the isometric axes at $30^\circ$, $30^\circ$, and vertical ($90^\circ$).
2. Construct the lower solid (block or hemisphere flat face) using isometric dimensions.
3. Locate the center point of the top mating face by intersecting diagonals or axes.
4. If drawing a hemisphere resting on its curved base, draw the circular profile of radius $R$ tangent to the bottom and sides from the center of the top flat face.
5. Project the vertical axis upward from the center point to the required height of the upper solid.
6. Construct the base rhombus or square of the upper solid centrally on the lower face, draw its base edges or four-center ellipse, and connect the apex or corner vertices to complete the visible outlines.

### Problems

#### Problem 161: Cone on Hemisphere (Toy)
**Given:** Cone diameter $D = 50\text{ mm}$, height $H = 70\text{ mm}$; Hemisphere diameter $D = 50\text{ mm}$. Axes coincide; circular faces are pasted together.  
**Find:** Isometric projection of the toy.

**Solution**
1. Draw orthographic views showing the semicircle base of $\varnothing 50\text{ mm}$ and cone triangle of base $50\text{ mm}$ and height $70\text{ mm}$.

> **Figure: Orthographic projections of a cone placed on a hemisphere with a given values box**
>
> Orthographic projections (front view and top view) of a toy composed of a cone placed coaxially on top of a hemisphere, labelled 161.1. A horizontal reference line is labelled 'x' at the left end and 'y' at the right end. Above the x-y line, the front view shows a downwardly curved semicircle (hemisphere) resting with its lowest point tangent to the x-y line, and an isosceles triangle (cone) mounted directly on the horizontal flat circular top face of the hemisphere, sharing the same diameter. A vertical dimension line to the left of the cone indicates its height as '70' (between the horizontal joint line and the apex of the cone). Below the x-y line, projected vertically down between thin projector lines from the left and right edges of the front view, the top view is a circle with a leader line at the bottom right labelled 'Ø50'. To the right of the views, a small boxed label reads '161.1' above a larger rectangular note box containing: '1. HEMISPHERE / D = 50' and '2. CONE / D= 50 / H =70'.

2. Draw the horizontal and $30^\circ$ isometric axes, and construct an isometric rhombus of side $50 \times 0.816 = 40.8\text{ mm}$ for the common circular interface.
3. Inscribe the base ellipse inside this rhombus using the four-center method.

> **Figure: Engineering drawing showing orthographic projections and isometric view for problem 161.2**
>
> The figure contains an orthographic projection on the left showing an x-y line with a hemisphere at the bottom and a cone on top, with a height dimension of 70 for the cone, and a circular top view below with points 1, 2, 3, 4 and a diameter label $\varnothing50$. In the middle, a box with '161.2' and a GIVEN box containing '1. HEMISPHERE D = 50' and '2. CONE D = 50, H = 70'. On the right, an isometric view showing a cone mounted on a hemisphere/base, with height 70, diameter $\varnothing50$, and base points 1, 2, 3, 4.

4. From the center $O$ of the ellipse, set a compass to the true radius $R = 25\text{ mm}$ and draw the bottom circular arc representing the curved surface of the hemisphere, smoothly tangent to the outer contour.
5. From center $O$, draw a vertical axis line upward of isometric height $70 \times 0.816 = 57.1\text{ mm}$ to mark the apex $V$.
6. Draw two tangent lines from apex $V$ to the extremities of the base ellipse to complete the cone.

> **Figure: Engineering drawing showing orthographic projections and isometric view for problem 161.3**
>
> The figure contains an orthographic projection on the left showing an x-y line with a hemisphere at the bottom and a cone on top, with a height dimension of 70 for the cone, and a circular top view below with points 1, 2, 3, 4 and a diameter label $\varnothing50$. In the middle, a box with '161.3' and a GIVEN box containing '1. HEMISPHERE D = 50' and '2. CONE D = 50, H = 70'. On the right, an isometric view showing a cone mounted on a hemisphere, with height 70, diameter $\varnothing50$, and base points 1, 2, 3, 4.

**Answer:** Completed isometric projection of the cone mounted coaxially on the flat face of the hemisphere.

---

#### Problem 162: Square Pyramid on Hemisphere
**Given:** Square pyramid base side $B = 24\text{ mm}$, height $H = 40\text{ mm}$; Hemisphere diameter $D = 50\text{ mm}$. Resting centrally on the flat face of the hemisphere.  
**Find:** Isometric projection of the combined solid.

**Solution**
1. Draw the reference front and top orthographic views showing the $\varnothing 50\text{ mm}$ hemisphere surmounted centrally by the $24\text{ mm}$ square pyramid.

> **Figure: Orthographic views of a square pyramid resting centrally on a hemisphere**
>
> Orthographic projections (front view and top view) of a square pyramid resting centrally on a hemisphere, labelled 162.1. A horizontal reference line is labelled 'x' at the left end and 'y' at the right end. Below the x-y line, the top view shows a circle of diameter 50 mm (indicated by a leader arrow pointing to the lower right of the circle, labelled 'Ø50'). Concentric inside the circle is a smaller square representing the base of the pyramid with its sides parallel and perpendicular to the x-y line; its corners are labelled 'p' (bottom-left), 'q' (bottom-right), 'r' (top-right), and 's' (top-left). The two diagonals 'pr' and 'qs' are drawn, intersecting at the centre labelled 'o'. The vertical left side 'ps' is dimensioned as '24'. Vertical projector lines extend upward from the extreme left and right edges of the circle, from the corners of the square ('p'/'s' and 'q'/'r'), and from the apex/centre 'o'. Above the x-y line, the front view shows the hemisphere resting with its curved bottom tangent to the x-y line and its flat circular top face horizontal (diameter 50 mm, radius 25 mm above x-y). Resting centrally on the flat top of the hemisphere is the front view of the square pyramid, shown as an isosceles triangle of base 24 mm and vertical height dimensioned on the left as '40'. To the right of the views, a boxed label '162.1' sits above another box containing the text: '1. HEMISPHERE D = 50' and '2. SQ. PYRAMID B = 24, H = 40'.

2. Set up isometric axes at $30^\circ$ to horizontal and construct the bounding rhombus of side $50 \times 0.816 = 40.8\text{ mm}$ for the top flat face of the hemisphere.

> **Figure: Isometric projection step 162.2 of a square pyramid on a hemisphere**
>
> Solution step 162.2 containing orthographic projections on the left, a GIVEN box in the center, and an isometric projection on the right. The GIVEN box contains: 1. HEMISPHERE D = 50, 2. SQ. PYRAMID B = 24, H = 40. The orthographic projection shows a hemisphere of diameter 50 with an x-y reference line, and a square pyramid of base 24 and height 40 placed on top. The top view shows a circle of diameter 50 with a concentric square of side 24, corners labeled p, q, r, s and center o, enclosed in a bounding box 1, 2, 3, 4. The isometric projection on the right shows an isometric view of the base construction with numbered corners 1, 2, 3, 4, an elliptical shape for the hemisphere, and dimension pointer for $\varnothing 50$.

3. Using the four-center method, draw the ellipse representing the top circular face of the hemisphere.

> **Figure: Isometric projection step 162.3 of a square pyramid on a hemisphere**
>
> Solution step 162.3 containing orthographic projections on the left, a GIVEN box in the center, and an isometric projection on the right. The GIVEN box contains: 1. HEMISPHERE D = 50, 2. SQ. PYRAMID B = 24, H = 40. The orthographic projection shows a hemisphere of diameter 50 with an x-y reference line, and a square pyramid of base 24 and height 40 placed on top. The top view shows a circle of diameter 50 with a concentric square of side 24, corners labeled p, q, r, s and center o, enclosed in a bounding box 1, 2, 3, 4. The isometric projection on the right shows the completed isometric drawing of the square pyramid mounted on the hemisphere, with numbered base corners 1, 2, 3, 4, and dimension pointer for $\varnothing 50$.

4. With center $O$ of the ellipse as center and true radius $R = 25\text{ mm}$, draw the lower semicircular contour of the hemisphere.
5. From center $O$, lay off isometric distances of $12 \times 0.816 = 9.8\text{ mm}$ along the isometric axes in both directions to construct the $24\text{ mm}$ square base symmetrically on the flat face.

> **Figure: Orthographic and isometric projections of a square pyramid resting on a hemisphere for problem 162.4**
>
> Step 162.4 showing the orthographic projections (left) and isometric construction step (right) of a square pyramid resting centrally on a hemisphere. A boxed note states: '1. HEMISPHERE D = 50' and '2. SQ. PYRAMID B = 24, H = 40'. On the left, above the horizontal reference line x-y, the front view shows an inverted hemisphere resting at its bottom point on x-y with a flat horizontal top surface, and a triangle of height dimensioned 40 representing the square pyramid centrally placed on top. Below x-y, the top view shows a circle of diameter Ø50 enclosed in a square bounding box with corners labelled 1 (bottom-left), 2 (bottom-right), 3 (top-right), and 4 (top-left). Inside the circle is a smaller concentric square representing the base of the pyramid with corners labelled p (bottom-left), q (bottom-right), r (top-right), and s (top-left), and diagonals intersecting at center o. The side length p-s is dimensioned 24, and the offset distances between the inner square (p, q, r, s) and the outer bounding box (1, 2, 3, 4) are dimensioned 13 on the left (vertical offsets from 4 and 1) and 13 at the bottom (horizontal offsets from 1 and 2). On the right, the isometric view shows the hemisphere (leader line labelled Ø50) with its top flat face enclosed in the isometric rhombus 1-2-3-4. On this top face, the square base P-Q-R-S (with side P-Q dimensioned 24 and back edges S-R and R-Q dashed) is located using offset dimensions of 13 along the edges near corners 1, 4, and 3.

6. Erect a vertical center axis from $O$ of isometric height $40 \times 0.816 = 32.6\text{ mm}$ to locate the apex $O'$.
7. Join apex $O'$ to the four corners of the base square with straight lines, showing visible edges as solid lines and hidden edges omitted.

> **Figure: Orthographic and isometric projections of a square pyramid resting on a hemisphere for problem 162.5**
>
> Step 162.5 showing the orthographic projections (left) and completed isometric projection (right) of a square pyramid resting centrally on a hemisphere. A boxed note states: '1. HEMISPHERE D = 50' and '2. SQ. PYRAMID B = 24, H = 40'. On the left, above the reference line x-y, the front view shows a hemisphere resting on x-y with a square pyramid of height 40 on its flat top face. Below x-y, the top view shows the circle of diameter Ø50 inside the square box 1-2-3-4, with the concentric square pyramid base p-q-r-s of side 24 and diagonal intersection o. On the right, the completed isometric view shows the hemisphere (leader labelled Ø50) inside the isometric square 1-2-3-4, with the square pyramid of base P-Q-R-S (side P-Q dimensioned 24) and vertical axis height dimensioned 40 standing on the flat top of the hemisphere. Hidden base edges S-R and R-Q, the hidden part of the hemisphere's rear upper rim, and the hidden slant edge to corner R are shown as dashed lines.

> **Key idea.** The flat face of a hemisphere undergoes isometric foreshortening as an ellipse, but its spherical contour is always seen as a circular arc drawn with the TRUE radius $R$.

**Answer:** Isometric projection showing the square pyramid resting centrally on the flat surface of the hemisphere.

---

#### Problem 163: Cone on Rectangular Block
**Given:** Right circular cone $D = 50\text{ mm}$, height $H = 70\text{ mm}$; Rectangular block base $50\text{ mm} \times 40\text{ mm}$, height $H = 30\text{ mm}$. Cone rests symmetrically over the block.  
**Find:** Isometric projection of the solids.

**Solution**
1. Draw orthographic front and top views of the rectangular block ($50 \times 40 \times 30\text{ mm}$) surmounted centrally by the cone ($D = 50\text{ mm}$, $H = 70\text{ mm}$).

> **Figure: Orthographic views of a cone on a rectangular block**
>
> Orthographic projection (labelled 163.1) showing the front view and top view of a right circular cone resting centrally on a rectangular block across a horizontal reference line x-y. In the top view below the x-y line, a rectangle with corners labelled a (bottom-left), b (bottom-right), c (top-right) and d (top-left) has its horizontal length dimensioned as 50 at the bottom and its vertical width dimensioned as 40 on the left. A circle of diameter 50 (indicated by a leader labelled Ø50 on the right) is centred symmetrically over the rectangle; it is tangent to the left edge ad and right edge bc, and overhangs the front edge ab and rear edge dc by 5 mm each, with the covered portions of edges ab and dc drawn as dashed hidden lines. In the front view above the x-y line, the rectangular block rests on the x-y line with width 50 and height dimensioned as 30 on the left. Surmounting the top face of the block is an isosceles triangle of base 50 and height 70 representing the cone. A vertical chain centreline passes through the axis of the cone and block in the front view and continues into the top view, and thin vertical projector lines connect the left and right sides of the two views. To the right of the views, below the box labelled 163.1, a summary box reads: '1. RECT. BLOCK: L = 50, B = 40, H = 30' and '2. CONE: D = 50, H = 70'.

2. Draw the isometric axes at $30^\circ$ and construct the base rectangular prism with isometric lengths $50 \times 0.816 = 40.8\text{ mm}$, $40 \times 0.816 = 32.6\text{ mm}$, and vertical height $30 \times 0.816 = 24.5\text{ mm}$.

> **Figure: Orthographic and isometric views showing step 163.2 for a rectangular block and cone**
>
> Orthographic projections (front view and top view) on the left, with an x-y reference line. Front view shows a rectangular block of height 30 surmounted by a cone. Top view shows a square of side 50 with corners labelled 1, 2, 3, 4 and a circle inscribed inscribed inside with diameter indicator $\emptyset 50$ and points a, b, c, d. A GIVEN table in the middle shows: 1. RECT. BLOCK, L = 50, B = 40, H = 30; 2. CONE, D = 50, H = 70, with header 163.2. On the right, an isometric view showing only the base ellipse inscribed in a rectangular isometric plane with vertices 1, 2, 3, 4, pointing to $\emptyset 50$.

3. Locate the center of the top face of the rectangular block by drawing diagonals.
4. Around this top center, lay out a square of side $50\text{ mm}$ (isometric length $40.8\text{ mm}$) aligned with the isometric axes, noting that it extends $5\text{ mm}$ beyond the $40\text{ mm}$ edges.

> **Figure: Orthographic and isometric views showing step 163.3 for a rectangular block and cone**
>
> Orthographic projections (front view and top view) on the left, with an x-y reference line. Front view shows a rectangular block of height 30 surmounted by a cone. Top view shows a square of side 50 with corners labelled 1, 2, 3, 4 and a circle inscribed inside with diameter indicator $\emptyset 50$ and points a, b, c, d. A GIVEN table in the middle shows: 1. RECT. BLOCK, L = 50, B = 40, H = 30; 2. CONE, D = 50, H = 70, with header 163.3. On the right, an isometric view showing a full cone on an isometric plane with vertices 1, 2, 3, 4, height 70, and diameter $\emptyset 50$.

5. Inscribe an ellipse inside this $50\text{ mm}$ isometric rhombus using the four-center method to form the base circle of the cone.

> **Figure: Orthographic and isometric views for problem 163.4 showing a cone on a plane**
>
> Orthographic projection on the left with an x-y line, showing a cylinder/block base of height 30 and a cone above it, with top view showing a circle of diameter 50 inside a rectangular boundary of 50 by 40 labelled with points a, b, c, d and 1, 2, 3, 4. On the right, an isometric view showing a cone of height 70 resting on a base circle of diameter 50, with isometric axes and numbering 1, 2, 3, 4.

6. Draw the vertical axis upward from the center by isometric height $70 \times 0.816 = 57.1\text{ mm}$ to locate apex $V$.
7. Draw tangents from apex $V$ to the base ellipse and darken only the visible outlines of both solids.

> **Figure: Orthographic and isometric views for problem 163.5 showing a cone on a rectangular block**
>
> Orthographic projection on the left with an x-y line, showing a rectangular block of height 30 with a cone on top, with top view showing a circle of diameter 50 inside a rectangular boundary of 50 by 40 labelled with points a, b, c, d and 1, 2, 3, 4. On the right, an isometric view showing a cone of height 70 placed on a rectangular block of dimensions L = 50, B = 40, H = 30, with base circle diameter 50, and isometric numbering 1, 2, 3, 4.

> **Watch out.** Since the cone base diameter ($50\text{ mm}$) exceeds the block width ($40\text{ mm}$), the cone base ellipse overhangs the block by $5\text{ mm}$ on each side.

**Answer:** Completed isometric projection of the cone positioned centrally over the rectangular block.

### Quick recall
- An isometric projection requires scaling all linear dimensions by $0.816$; an isometric view uses true full-scale dimensions.
- The curved contour of a sphere or hemisphere is never foreshortened; always draw it using the true sphere radius $R$.
- The four-center method requires drawing lines from the obtuse corners of the rhombus perpendicular to opposite sides to find arc centers.
- When a circular base overhangs a rectangular slab, construct the full guide rhombus centered on the top plane before drawing the ellipse.

<!-- page 6 | Spherical Surfaces, Blocks, and Conical Frustums -->

## Spherical Surfaces, Blocks, and Conical Frustums

### What you need
- **Sphere Rule**: Locate the center of the sphere along the central vertical axis at distance $R_{\text{iso}}$ (for isometric projection) or $R$ (for isometric view); draw the spherical outline as a **true circle** using the **true radius** $R$.
- **Isometric scale**: For isometric projections, isometric length $= L \times \sqrt{2/3} \approx 0.816 \times L$.
- **Four-center ellipse**: An isometric circle of diameter $D$ is drawn inside a rhombus of side $D$ along the $30^\circ$ isometric axes using four circular arcs.
- **Conical frustum**: Built by constructing two parallel horizontal isometric rhombuses separated by height $H$, drawing their four-center ellipses, and connecting them with tangent envelope lines.
- **Hemisphere orientation**:
  - *Upright bowl (flat face up)*: Four-center ellipse at top; semi-circular contour of true radius $R$ below center.
  - *Inverted (flat face down)*: Four-center ellipse at base; semi-circular contour of true radius $R$ above center.

### The method
1. Draw isometric axes at $30^\circ$, $90^\circ$, and $150^\circ$ to horizontal.
2. Construct the supporting base block (square, cylinder, or hexagon) up to its top face.
3. Locate the center point $O$ of the top resting face.
4. From $O$, erect a vertical axis line of height equal to the sphere's radius (isometric radius $R_{\text{iso}}$ for isometric projection, or true radius $R$ for isometric view) to fix center $C$.
5. With center $C$ and **true radius** $R$, draw a full circle (for a sphere) or a half-circle combined with an isometric elliptical face (for a hemisphere).
6. Darken visible outlines and erase or lighten hidden construction lines.

---

### Problems

#### Problem 205: Sphere on Square Block
**Given:** Square block base $70\text{ mm}$, height $20\text{ mm}$; Sphere diameter $60\text{ mm}$ centrally placed.   **Find:** Isometric view.

**Solution**
1. Draw isometric axes at $30^\circ$ and $150^\circ$, and outline the bottom square of side $70\text{ mm}$.
2. Project vertical edges of height $20\text{ mm}$ upward from each corner to complete the top isometric square $70\text{ mm} \times 70\text{ mm}$.
3. Locate the top center $O$ by intersecting the diagonals of the top square face.
4. From $O$, measure a vertical height equal to the true radius $R = 30\text{ mm}$ to mark the sphere center $C$.
5. With center $C$ and radius $R = 30\text{ mm}$, draw a true circle.
6. Erase the hidden rear edges of the block and the portion of the top face covered by the sphere.

> **Figure: Orthographic views of a sphere resting on a square block with a given data box**
>
> Orthographic projection (front view and top view) of a sphere centrally resting on a square block, labelled 205.1. A horizontal reference line is labelled x on the left and y on the right. Below the x-y line, the top view shows a square with vertices labelled a (bottom-left), b (bottom-right), c (top-right), and d (top-left), with a horizontal dimension line below side ab labelled '□70'. Concentric inside the square a-b-c-d is a circle representing the top view of the sphere. Above the x-y line, the front view shows a rectangular block resting on the x-y line, aligned vertically with the square below, having a vertical dimension of '20' on its left side. Resting centrally on the top horizontal edge of this rectangular block is a circle representing the front view of the sphere, with a leader line pointing to its upper-right circumference labelled 'Ø60'. To the right of the views, below a small boxed label '205.1', is a rectangular summary box containing the text: '1. SQ. PRISM / B = 70 / H = 20' and below it 'SPHERE / D = 60'.

> **Figure: Orthographic and isometric projections for step 205.2 showing a square prism with a given height and a sphere.**
>
> Solution step 205.2 showing orthographic projections (front view above x-y line, top view below) and an isometric view. GIVEN box states: SQ. PRISM, B = 70, H = 20, SPHERE, D = 60. The orthographic views show an x-y line, a front rectangular view of height 20, a top square view with vertices labeled a, b, c, d and a circle inside, and a circle of diameter $\varnothing60$ above the front view. The isometric view shows a square prism with sides 70 and height 20, with vertices A, B, C, D.

> **Figure: Orthographic and isometric projections for step 205.3 showing a square prism with a sphere placed on top.**
>
> Solution step 205.3 showing orthographic projections (front view above x-y line, top view below) and an isometric view. GIVEN box states: SQ. PRISM, B = 70, H = 20, SPHERE, D = 60. The orthographic views show an x-y line, a front rectangular view of height 20, a top square view with vertices labeled a, b, c, d and a circle inside, and a circle of diameter $\varnothing60$ above the front view. The isometric view shows a square prism with sides 70 and height 20, with vertices A, B, C, D, and a sphere of diameter $\varnothing60$ resting on top center of the prism.

**Answer:** Isometric view completed with block $70 \times 70 \times 20\text{ mm}$ and sphere $\varnothing 60\text{ mm}$.

---

#### Problem 164: Sphere on Cylinder
**Given:** Cylindrical slab diameter $50\text{ mm}$, height $20\text{ mm}$; Sphere diameter $40\text{ mm}$ centrally placed.   **Find:** Isometric projection.

**Solution**
1. Convert all dimensions to isometric scale: $D_{\text{iso}} = 50 \times 0.816 = 40.8\text{ mm}$, $H_{\text{iso}} = 20 \times 0.816 = 16.3\text{ mm}$, and $R_{\text{iso}} = 20 \times 0.816 = 16.3\text{ mm}$.
2. At ground level, construct an isometric rhombus of side $50_{\text{iso}}$ and draw the base ellipse using the four-center method.
3. Project the center vertically upward by $20_{\text{iso}}$ to plot the top face rhombus, then draw the upper ellipse.
4. Connect the two ellipses with vertical tangent boundary generators.
5. From the center of the top ellipse $O$, measure vertically upward by isometric radius $R_{\text{iso}} = 16.3\text{ mm}$ to locate center $C$.
6. With center $C$ and **true radius** $R = 20\text{ mm}$, draw a full circle representing the sphere.

> **Watch out.** The vertical center position uses the isometric radius ($R_{\text{iso}} = 16.3\text{ mm}$), but the sphere contour must be drawn with the **true radius** ($R = 20\text{ mm}$).

> **Figure: Orthographic projection showing front and top views of a sphere on a cylindrical slab**
>
> Orthographic projection (labelled 164.1) showing the front view and top view of a sphere of diameter 40 mm placed centrally over a cylindrical slab of base diameter 50 mm and height 20 mm. A horizontal reference line labelled x at the left end and y at the right end separates the views. Above the x-y line (front view): a rectangle of width 50 mm and height 20 mm rests on the x-y line, representing the cylindrical slab, with a vertical dimension line on the left showing 20. Resting centrally on the top edge of the rectangle is a circle of diameter 40 mm, representing the sphere. Below the x-y line (top view), aligned with vertical projector lines from the front view: two concentric circles of diameter 50 mm (outer, projected from the cylindrical slab) and diameter 40 mm (inner, projected from the sphere), indicated by leader arrows at the bottom right labelled Ø50 and Ø40 respectively. To the right of the drawing is a boxed note beneath the boxed label '164.1' reading: '1. CYL. SLAB D = 50, H = 20' and '2. SPHERE D = 40'.

> **Figure: Isometric and orthographic projection step 164.2**
>
> Step 164.2 showing orthographic and isometric projections of a cylindrical slab. GIVEN box lists: 1. CYL. SLAB D = 50, H = 20; 2. SPHERE D = 40. The orthographic view shows a circle representing a sphere on top of a rectangular front view of height 20, with top view below showing concentric circles of diameter 50 and 40, labeled with points 1, 2, 3, 4 and reference line y. The isometric projection shows the cylindrical slab with diameter 50 and height 20 inside a bounding box with corners 1, 2, 3, 4.

> **Figure: Isometric and orthographic projection step 164.3**
>
> Step 164.3 showing orthographic and isometric projections of a cylindrical slab with a sphere on top. GIVEN box lists: 1. CYL. SLAB D = 50, H = 20; 2. SPHERE D = 40. The orthographic view shows a sphere of diameter 40 resting on a cylindrical slab of height 20 and diameter 50, with top view showing concentric circles of diameter 50 and 40, labeled with points 1, 2, 3, 4 and reference line y. The isometric projection shows the sphere of diameter 40 placed centrally on top of the cylindrical slab of diameter 50 and height 20.

**Answer:** Isometric projection completed with cylinder $\varnothing 50\text{ mm} \times 20\text{ mm}$ and sphere $\varnothing 40\text{ mm}$.

---

#### Problem 216: Sphere on Hexagonal Block
**Given:** Hexagonal block base side $30\text{ mm}$, height $20\text{ mm}$; Sphere radius $20\text{ mm}$ centrally placed.   **Find:** Isometric view.

**Solution**
1. Draw a regular hexagon of side $30\text{ mm}$ and enclose it in a reference rectangle of dimensions $W_1 \times W_2$.
2. Transfer the reference rectangle onto isometric axes at $30^\circ$ to construct the bottom hexagonal face.
3. Raise vertical edges of true height $20\text{ mm}$ from all visible corners to form the top hexagonal face.
4. Find the center $O$ of the top hexagonal face by intersecting opposite corner diagonals.
5. From $O$, erect a vertical line of length equal to true radius $R = 20\text{ mm}$ to mark center $C$.
6. With center $C$ and true radius $R = 20\text{ mm}$, draw a full circle.
7. Darken visible outlines of the hexagon and sphere.

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

**Answer:** Isometric view completed with hexagonal block side $30\text{ mm}$, height $20\text{ mm}$, and sphere radius $20\text{ mm}$.

---

#### Problem 165: Hemispherical Bowl (Facing Upwards) on Frustum of Cone
**Given:** Conical frustum base diameter $50\text{ mm}$, top diameter $30\text{ mm}$, height $50\text{ mm}$; Hemispherical bowl diameter $40\text{ mm}$ facing upwards.   **Find:** Isometric projection.

**Solution**
1. Reduce all dimensions by isometric scale factor $0.816$: bottom diameter $50_{\text{iso}}$, top diameter $30_{\text{iso}}$, height $50_{\text{iso}}$, hemisphere diameter $40_{\text{iso}}$, radius $R_{\text{iso}} = 16.3\text{ mm}$.
2. At ground level, construct an isometric rhombus of side $50_{\text{iso}}$ and draw the lower base ellipse using the four-center method.
3. Erect a central vertical axis of height $50_{\text{iso}}$ and construct an isometric rhombus of side $30_{\text{iso}}$ to draw the top ellipse of the frustum.
4. Draw tangential outer generators connecting the bottom and top ellipses to complete the conical frustum.
5. From the top center $O$ of the frustum, the bowl rests with its spherical vertex touching $O$; hence, measure upward along the axis by $R_{\text{iso}} = 16.3\text{ mm}$ to establish the center $C$ of the flat circular rim.
6. At height $C$, draw a horizontal isometric rhombus of side $40_{\text{iso}}$ and draw the full ellipse representing the upward-facing flat rim.
7. With center $C$ and **true radius** $R = 20\text{ mm}$, draw the lower spherical arc tangent to the flat rim ellipse.

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

**Answer:** Isometric projection completed for frustum $(\varnothing 50, \varnothing 30, H=50\text{ mm})$ and hemispherical bowl $(\varnothing 40\text{ mm})$.

---

#### Problem 217: Hemisphere (Flat Face Down) on Frustum of Cone
**Given:** Conical frustum bottom diameter $50\text{ mm}$, top diameter $30\text{ mm}$, height $50\text{ mm}$; Hemisphere diameter $30\text{ mm}$ resting on flat face.   **Find:** Isometric view.

**Solution**
1. On the ground plane, draw an isometric rhombus of true side $50\text{ mm}$ and construct the base ellipse using the four-center method.
2. Measure true height $50\text{ mm}$ vertically from the base center to locate the top center $O$.
3. Construct a horizontal isometric rhombus of side $30\text{ mm}$ centered at $O$.
4. Draw the ellipse for the top of the frustum; because the hemisphere flat face matches this diameter ($30\text{ mm}$), this ellipse also serves as the base of the hemisphere.
5. Draw tangential boundary lines connecting the lower and upper ellipses to form the conical frustum.
6. With center $O$ and **true radius** $R = 15\text{ mm}$, draw the upper semi-circular contour of the hemisphere.
7. Darken visible outlines: the upper dome arc, front half of the joint ellipse, frustum generators, and visible base curve.

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

**Answer:** Isometric view completed with conical frustum $(\varnothing 50, \varnothing 30, H=50\text{ mm})$ and hemisphere $(\varnothing 30\text{ mm})$.

---

### Quick recall
- The spherical boundary is always drawn as a **true circle** of actual radius $R$, never an ellipse.
- In isometric projection, the center of the sphere is displaced vertically by the isometric radius $R_{\text{iso}} = 0.816 R$, while its circular contour retains the true radius $R$.
- A conical frustum requires two separate rhombuses on parallel isometric planes connected by common tangent envelope lines.
- An upright bowl has an elliptical top face and a circular bottom contour; an inverted hemisphere has an elliptical bottom face and a circular upper dome.

<!-- page 7 | Frustums of Pyramids and Stacked Spherical Bodies -->

## Frustums of Pyramids and Stacked Spherical Bodies

### What you need
- Isometric length reduction: $L_{\text{iso}} = L \times \sqrt{2/3} \approx 0.816 \times L$.
- Pyramid frustum layout: construct bottom box of size $S_{\text{base}}$, project center upward by isometric height $H_{\text{iso}}$, and construct coaxial top box of size $S_{\text{top}}$.
- Spherical boundary rule: locate center using isometric vertical scale, then draw the sphere outline as a true circle using actual radius $R$ ($R_{\text{true}}$).
- Tangent stacked spheres: center of bottom sphere is at vertical isometric height $R_{1}$, center of upper resting sphere is at vertical isometric height $2R_{1} + R_{2}$.

### The method
1. Draw the isometric axes ($30^\circ, 90^\circ, 150^\circ$).
2. Construct the isometric bounding box/rhombus for the bottom base using isometric dimensions.
3. Locate the base center, draw a vertical axis line, and measure the frustum height along the axis using isometric scale.
4. Construct the top isometric box centered on this axis and draw the top base contour.
5. Connect corresponding top and bottom corners to define the frustum's slant edges, darkening only visible edges.
6. For a mounted sphere or hemisphere, measure the center distance along the vertical axis using isometric scale ($R_{\text{iso}}$ above the supporting plane), then strike the outer contour using the true radius ($R_{\text{true}}$).

### Problems

#### Problem 166: Rivet (Hemispherical Head on Cylindrical Shank)
**Given:** Cylindrical shank: diameter $D = 30\text{ mm}$, height $H = 60\text{ mm}$. Hemispherical head: diameter $D = 50\text{ mm}$.  
**Find:** Isometric projection of the combined rivet.

**Solution**
1. Lay down isometric axes at $30^\circ$ to the horizontal.
2. On the ground plane, draw a $30\text{ mm}$ isometric rhombus and construct the lower base ellipse using the four-center method.
3. Project the center vertically upward by isometric height $60\text{ mm}$ ($60 \times 0.816$) to locate the top center of the shank.
4. Draw the upper cylinder ellipse of diameter $30\text{ mm}$ and connect tangent vertical outlines.
5. On the top center, construct an isometric rhombus of side $50\text{ mm}$ to represent the flat circular base of the hemispherical head.
6. Draw the complete ellipse for the $50\text{ mm}$ circular base inside this rhombus.
7. Mark the center of the $50\text{ mm}$ flat face; draw a semicircular dome above it using the true radius $R = 25\text{ mm}$ tangent to the base ellipse.
8. Darken visible outlines and erase or hide concealed cylinder features.

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

**Answer:** Isometric projection of rivet assembly with shank height $60\text{ mm}$, shank diameter $30\text{ mm}$, and head diameter $50\text{ mm}$.

---

#### Problem 167: Sphere Centered on Frustum of Hexagonal Pyramid
**Given:** Frustum of hexagonal pyramid: bottom base side $s_b = 30\text{ mm}$, top base side $s_t = 20\text{ mm}$, height $h = 40\text{ mm}$. Sphere: diameter $D = 30\text{ mm}$.  
**Find:** Isometric projection of the combination.

**Solution**
1. Inscribe the regular hexagonal base ($30\text{ mm}$ side) in an orthographic box to obtain coordinate offsets.
2. Transfer this bounding box to the isometric ground plane using isometric scale and plot the 6 base vertices.
3. Locate the base center and erect a vertical axis of isometric height $40\text{ mm}$ ($40 \times 0.816$).
4. At this height, draw the isometric bounding box for the $20\text{ mm}$ hexagon and plot the 6 top vertices.
5. Connect corresponding top and bottom vertices to form the slant edges of the hexagonal pyramid frustum.
6. From the center of the top hexagonal face, measure vertically upward by isometric radius $R_{\text{iso}} = 15 \times 0.816\text{ mm}$ to locate the sphere center $O$.
7. With $O$ as center, draw a circle of true radius $R = 15\text{ mm}$ representing the sphere boundary.
8. Darken the visible slant edges, the visible parts of the top hexagonal face, and the sphere outline.

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

**Answer:** Isometric projection of a $\varnothing30\text{ mm}$ sphere resting centrally on the $20\text{ mm}$ top face of the hexagonal frustum ($h = 40\text{ mm}$, base $= 30\text{ mm}$).

---

#### Problem 199: Hemisphere Centered on Frustum of Hexagonal Pyramid
**Given:** Frustum of hexagonal pyramid: top end side $s_t = 20\text{ mm}$, height $h = 40\text{ mm}$, bottom base side $s_b = 30\text{ mm}$. Hemisphere: diameter $D = 30\text{ mm}$, resting on its flat circular base.  
**Find:** Isometric projection of the combination of solids.

> **Watch out.** The problem statement lists bottom base $50\text{ mm}$, but the printed reference drawing and given box specify bottom base side $30\text{ mm}$. Use $30\text{ mm}$.

**Solution**
1. Box the regular hexagonal base ($30\text{ mm}$ side) in orthographic projection and transfer the box to the isometric plane.
2. Mark the 6 base corners on the isometric box edges and connect them to draw the bottom hexagonal face.
3. Project the axis upward by isometric height $40\text{ mm}$ to find the center of the upper face.
4. Construct the upper isometric box corresponding to the $20\text{ mm}$ hexagon and mark the 6 top vertices.
5. Join matching top and bottom vertices to delineate the slant edges of the frustum.
6. On the upper face, construct a horizontal isometric rhombus of side $30\text{ mm}$ centered on the axis.
7. Inscribe an ellipse inside this rhombus using the four-center method to represent the flat circular base of the hemisphere.
8. From the center of this ellipse, draw the upper hemispherical contour with a compass set to true radius $R = 15\text{ mm}$, tangent to the base ellipse.

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

**Answer:** Isometric projection of a hemisphere of diameter $30\text{ mm}$ resting on its flat circular base atop a hexagonal frustum ($s_b = 30\text{ mm}, s_t = 20\text{ mm}, h = 40\text{ mm}$).

---

#### Problem 170: Sphere Centered on Frustum of Square Pyramid
**Given:** Frustum of square pyramid: bottom base $50\text{ mm}$, top base $30\text{ mm}$, height $40\text{ mm}$. Sphere: diameter $D = 30\text{ mm}$.  
**Find:** Isometric projection of the combination of solids.

**Solution**
1. Along the $30^\circ$ isometric axes, lay out the square bottom base of side $50\text{ mm}$ (using isometric scale $50 \times 0.816$).
2. Locate the center of the base by intersecting diagonals.
3. Draw the vertical axis from the center and measure isometric height $40\text{ mm}$ ($40 \times 0.816$).
4. Centered on the axis at this height, construct a square top face of side $30\text{ mm}$ ($30 \times 0.816$) parallel to the base.
5. Connect the four corners of the top square to the corresponding corners of the bottom square to form the slant edges.
6. Extend the vertical axis upward from the top face center by isometric radius $R_{\text{iso}} = 15 \times 0.816\text{ mm}$ to locate center $C$.
7. With center $C$, draw a circle using true radius $R = 15\text{ mm}$ representing the outer contour of the sphere.
8. Complete the drawing by darkening visible outlines of the frustum and sphere while keeping hidden edges dashed or removed.

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

**Answer:** Isometric projection of a sphere ($D = 30\text{ mm}$) surmounted centrally on a square pyramid frustum ($50\text{ mm}$ base, $30\text{ mm}$ top, $40\text{ mm}$ height).

---

#### Problem 171: Sphere Resting Centrally on Another Sphere (Stacked Spheres)
**Given:** Lower sphere (Sphere 1): diameter $D_1 = 50\text{ mm}$. Upper sphere (Sphere 2): diameter $D_2 = 30\text{ mm}$.  
**Find:** Isometric projection of the two stacked coaxial spheres.

**Solution**
1. Draw a ground reference line and erect a central vertical axis.
2. Measure isometric height $R_{1,\text{iso}} = 25 \times 0.816\text{ mm} = 20.4\text{ mm}$ along the axis to fix the center $O_1$ of Sphere 1.
3. With $O_1$ as center, strike a complete circle of true radius $R_1 = 25\text{ mm}$ to represent the lower sphere.
4. Measure upward along the axis from $O_1$ by isometric distance $(R_1 + R_2)_{\text{iso}} = (25 + 15) \times 0.816\text{ mm} = 32.64\text{ mm}$ (total height from base $= 65 \times 0.816\text{ mm}$) to fix center $O_2$.
5. With $O_2$ as center, strike a circle of true radius $R_2 = 15\text{ mm}$ to represent the upper sphere.
6. Darken the full profile of the upper sphere and the visible portion of the lower sphere up to the tangency curve.

> **Figure: Orthographic views and given/answer boxes for two spheres, sphere 1 diameter 50 and sphere 2 diameter 30**
>
> Orthographic projections (front view and top view) of a combination of two spheres, labelled 171.1. A horizontal reference line is labelled 'x' at the left end and 'y' at the right end. Above the xy line (front view): a larger circle of diameter 50 mm rests tangent to the xy line at its bottom point, and a smaller circle of diameter 30 mm rests centrally on top of the larger circle, tangent to its highest point. Leader arrows point to the two circles in the front view, labelled 'Ø30' for the upper smaller circle and 'Ø50' for the lower larger circle. Below the xy line (top view): two concentric circles vertically aligned with the front view circles, where the outer circle represents the 50 mm diameter sphere and the inner solid circle represents the 30 mm diameter sphere. To the right of the views is a rectangular box labelled '171.1' above it, containing the text: '1. SPHERE 1 D = 50' and '2. SPHERE 2 D = 30'.

> **Figure: Engineering drawing step 171.2 showing two stacked spheres in orthographic projection**
>
> Step 171.2 showing orthographic projections of two spheres. On the left, front and top views are shown. The reference line is labeled x and y. The bottom sphere (SPHERE 1) has diameter $\varnothing50$ and its center is at height 25 from the xy line. The top sphere (SPHERE 2) has diameter $\varnothing30$ and its center is at height 65 from the xy line. In the center, a given box states: 1. SPHERE 1 D = 50, 2. SPHERE 2 D = 30. On the right, a solution step drawing shows a circle of diameter $\varnothing50$ with a vertical dimension line of $25\times0.816$ from the baseline to the center.

> **Figure: Engineering drawing step 171.3 showing two stacked spheres in orthographic projection**
>
> Step 171.3 showing orthographic projections of two spheres. On the left, front and top views are shown with the reference line labeled x and y. The bottom sphere (SPHERE 1) has diameter $\varnothing50$ and its center is at height 25 from the xy line. The top sphere (SPHERE 2) has diameter $\varnothing30$ and its center is at height 65 from the xy line. In the center, a given box states: 1. SPHERE 1 D = 50, 2. SPHERE 2 D = 30. On the right, a solution step drawing shows two overlapping circles, the top one with diameter $\varnothing30$ and the bottom one with diameter $\varnothing50$, with vertical dimension lines of $(50+15)\times0.816$ and $25\times0.816$.

**Answer:** Isometric projection of two stacked spheres with center heights $20.4\text{ mm}$ and $53.0\text{ mm}$ from the base plane, drawn with true radii $25\text{ mm}$ and $15\text{ mm}$ respectively.

### Quick recall
- All centers, axis heights, and polygon edges must be laid out using isometric scale ($0.816 \times \text{true length}$).
- The silhouette of any sphere in isometric projection is always a circle drawn with its true radius $R_{\text{true}}$.
- For a hemisphere resting on its circular base, the base is an isometric ellipse, but the dome boundary is drawn with true radius $R_{\text{true}}$.
- Tangency between stacked coaxial bodies occurs along the common vertical axis; vertical distances between centers must be scaled isometrically.

<!-- page 8 | Multi-tier Coaxial Assemblies -->

## Multi-tier Coaxial Assemblies

### What you need
- Cumulative axial height: $Z_k = \sum_{i=1}^k h_i$, establishing successive center reference points along a shared vertical axis.
- Isometric scale factor: $\text{Isometric length} = \sqrt{\frac{2}{3}} \times \text{True length} \approx 0.816 \times \text{True length}$.
- Symmetrical concentric offset: on any coaxial square or rectangular interface, $d = \frac{L_1 - L_2}{2}$ along the isometric axes.
- Four-centre ellipse construction: circular bases project as ellipses inscribed inside an isometric rhombus of side equal to the isometric diameter.
- Sphere projection rule: locate the sphere center at isometric radius ($0.816 R$) along the vertical axis, then draw its outline as a circle of true radius $R$.
- Visibility hierarchy: geometry of higher solids takes precedence, concealing interface boundaries and underlying edges.

### The method
1. Set up the baseline and three isometric axes inclined at $30^\circ$, $90^\circ$, and $150^\circ$.
2. Convert all actual dimensions to isometric dimensions using the isometric scale ratio ($0.816$).
3. Construct the isometric bounding box or rhombus of the base solid and draw its visible edges.
4. Locate the center of the top face of the base solid and erect a vertical central axis.
5. Mark the cumulative vertical heights $Z_1, Z_2, \dots$ along this common axis to locate each stage's interface.
6. Center and construct the isometric bounding box or rhombus for each successive solid using symmetrical offsets from the stage below.
7. For a top sphere, measure $R_{\text{iso}} = 0.816 R$ upward from its seat center along the axis, then draw a true circle of radius $R$.
8. Outline visible profiles from top solid downward, suppressing all obscured edges and interior construction lines.

### Problems

#### Problem 174: Square Pyramid on Cube on Rectangular Slab
**Given:** Rectangular slab ($60\text{ mm} \times 50\text{ mm} \times 20\text{ mm}$), Cube (edge $40\text{ mm}$), Square pyramid (base $30\text{ mm}$, height $40\text{ mm}$). All solids coaxial.
**Find:** Isometric projection of the three-tier assembly.

**Solution**
1. Lay out the isometric axes at $30^\circ$, $90^\circ$, and $30^\circ$ to the horizontal.
2. Construct the isometric box for the base slab with length $60_{\text{iso}}$, width $50_{\text{iso}}$, and height $20_{\text{iso}}\text{ mm}$.
3. Locate the center of the top face of the slab by intersecting diagonals.
4. Lay out the $40_{\text{iso}} \times 40_{\text{iso}}\text{ mm}$ square base of the cube centrally on the slab's top face, offset by $10_{\text{iso}}\text{ mm}$ along the $60\text{ mm}$ axis and $5_{\text{iso}}\text{ mm}$ along the $50\text{ mm}$ axis.
5. Erect vertical edges of length $40_{\text{iso}}\text{ mm}$ from the four corners of this square to draw the top face of the cube at cumulative datum $Z = 60_{\text{iso}}\text{ mm}$.
6. Mark the center of the top face of the cube and outline the concentric $30_{\text{iso}} \times 30_{\text{iso}}\text{ mm}$ pyramid base with uniform margins of $5_{\text{iso}}\text{ mm}$ from the edges of the cube.
7. Extend the central axis vertically upward from the pyramid base by its altitude $40_{\text{iso}}\text{ mm}$ to mark the apex $O$ at total height $Z_{\text{total}} = 100_{\text{iso}}\text{ mm}$.
8. Draw slant edges from apex $O$ to the corners of the $30_{\text{iso}}\text{ mm}$ square base.
9. Darken the visible outlines and outer edges across all three solids, leaving all occluded lines faint or unrepresented.

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

**Answer:** Completed isometric projection of coaxial assembly: pyramid ($30\text{ mm}$ base, $40\text{ mm}$ height) atop cube ($40\text{ mm}$) atop slab ($60\text{ mm} \times 50\text{ mm} \times 20\text{ mm}$), total nominal height $= 100\text{ mm}$.

#### Problem 175: Sphere on Frustum of Cone on Cylinder
**Given:** Base cylinder ($\varnothing 50\text{ mm}$, height $20\text{ mm}$), Frustum of cone (bottom $\varnothing 40\text{ mm}$, top $\varnothing 30\text{ mm}$, height $15\text{ mm}$), Top sphere ($\varnothing 20\text{ mm}$, radius $R = 10\text{ mm}$). All solids coaxial.
**Find:** Isometric projection of the three-tier curved assembly.

**Solution**
1. Scale all base diameters and segment heights by the isometric reduction factor $0.816$.
2. At the baseline $Z = 0$, construct an isometric rhombus of side $50_{\text{iso}}\text{ mm}$ and inscribe the lower base ellipse of the cylinder using the four-centre method.
3. Construct a parallel rhombus of side $50_{\text{iso}}\text{ mm}$ at height $Z = 20_{\text{iso}}\text{ mm}$ to draw the top ellipse of the cylinder, connecting outer vertical tangents.
4. Symmetrically position a concentric rhombus of side $40_{\text{iso}}\text{ mm}$ on the cylinder's top face (offset $5_{\text{iso}}\text{ mm}$ inward) and draw the bottom ellipse of the conical frustum.
5. Project the central axis vertically upward by $15_{\text{iso}}\text{ mm}$ to reach datum $Z = 35_{\text{iso}}\text{ mm}$, and construct a horizontal isometric rhombus of side $30_{\text{iso}}\text{ mm}$.
6. Draw the top ellipse of the frustum within this rhombus using the four-centre method, then join tangent generators between the $40_{\text{iso}}\text{ mm}$ and $30_{\text{iso}}\text{ mm}$ ellipses to form the conical frustum.
7. From the center of the frustum's top face ($Z = 35_{\text{iso}}\text{ mm}$), measure vertically upward along the central axis the isometric radius $R_{\text{iso}} = 0.816 \times 10\text{ mm} \approx 8.2\text{ mm}$ to fix the sphere center $C$.
8. With center $C$, draw the boundary of the sphere as a full circle using its TRUE radius $R = 10\text{ mm}$.
9. Darken the final visible profiles: the spherical circle, the visible upper rim and flanks of the frustum, and the exposed upper surface and side flank of the cylinder.

> **Watch out.** The center of a sphere in isometric projection is plotted at its *isometric* radius ($0.816 R$) along the vertical axis, but the spherical boundary itself is drawn as a true circle using its *true* radius ($R$).

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

**Answer:** Completed isometric projection of coaxial assembly: sphere ($\varnothing 20\text{ mm}$) atop conical frustum ($\varnothing 40 / \varnothing 30\text{ mm}$, height $15\text{ mm}$) atop cylinder ($\varnothing 50\text{ mm}$, height $20\text{ mm}$), total nominal height $= 55\text{ mm}$.

### Quick recall
- Maintain a single continuous vertical center line to track cumulative axial stations: $Z_k = \sum h_i$.
- Center each successive tier using symmetrical edge margins: $d = (L_{\text{lower}} - L_{\text{upper}})/2$.
- Apply the four-centre method inside isometric rhombuses to project all circular bases into ellipses.
- Center the top sphere at an isometric height $R_{\text{iso}}$ above its support, but draw its silhouette with the true radius $R$.
- Enforce the visibility hierarchy strictly from top to bottom, keeping upper profiles solid and hiding occluded lower surfaces.

<!-- page 9 | Introduction to Computer Aided Drawing (CAD) and 2D Drafting -->

## Introduction to Computer Aided Drawing (CAD) and 2D Drafting

> **Drafted from the syllabus.** This section was written from the syllabus topics and standard theory, not from the source notes. Check it against the reference textbooks before relying on it.

### What you need
- CAD (Computer Aided Drawing/Design) replaces manual drafting boards with software to create, modify, analyze, and document 2D engineering drawings and 3D models.
- Coordinate inputs govern precision: Absolute $(X,Y)$, Relative Cartesian $(@\Delta X, \Delta Y)$, and Relative Polar $(@r < \theta)$.
- Role in product development: CAD links conceptual design to computer-aided engineering (CAE/FEA analysis) and computer-aided manufacturing (CAM/CNC toolpaths).
- Core advantages: higher accuracy, massive time savings, easy revision control, drawing reuse (via symbols/blocks), and direct digital transmission.
- Layer controls separate geometry (0.5 mm continuous visible lines), construction/centerlines (0.25 mm chain lines), and annotations (0.25 mm continuous lines with standard arrowheads).

### The method
1. Launch the CAD software and configure units using `UNITS`: select `Decimal`, precision `0.00`, and base insertion scale as `Millimeters`.
2. Define drawing bounds with `LIMITS` (e.g., `0,0` to `420,297` for standard A3 paper size), then run `ZOOM` $\rightarrow$ `ALL` to display the active workspace.
3. Create dedicated layers using `LAYER`: 'Outline' (Continuous, 0.50 mm), 'Hidden' (Dashed, 0.30 mm), 'Center' (Centerline, 0.25 mm), and 'Dimension' (Continuous, 0.25 mm).
4. Enable drafting aids: toggle `ORTHOMODE` (F8) for strict perpendicular movement and `OSNAP` (F3) targeting `Endpoint`, `Midpoint`, `Center`, and `Intersection`.
5. Draft the boundary profile on the 'Outline' layer using geometric commands (`LINE`, `RECTANG`, `CIRCLE`, `ARC`).
6. Modify geometry to final shape using editing commands: `TRIM`, `EXTEND`, `OFFSET`, and `FILLET`.
7. Switch to the 'Center' layer and add symmetry markers to all circular features using `CENTERMARK` or `CENTERLINE`.
8. Switch to the 'Dimension' layer and apply size and location annotations using `DIMLINEAR`, `DIMDIAMETER`, and `DIMRADIUS`, keeping dimension lines at least 10 mm away from visible outlines.

### Worked examples

#### Example 1: Symmetrical Base Plate with Central Hole
Create a 2D CAD drawing of a rectangular base plate of size $120\text{ mm} \times 80\text{ mm}$ having a central through-hole of diameter $\varnothing 40\text{ mm}$, fully dimensioned.

1. Set up file: run `UNITS` to millimeters, `LIMITS` from `0,0` to `210,148`, followed by `ZOOM` $\rightarrow$ `ALL`.
2. Draw outer boundary: set layer to 'Outline'. Enter `RECTANG`, specify the first corner at `0,0`, and the opposite corner at `120,80`.
3. Locate and draw the hole: run `CIRCLE`, specify center coordinate at the absolute midpoint `60,40`, enter option `D` (diameter), and input `40`.
4. Add center lines: set layer to 'Center'. Execute `CENTERMARK` and click the circle circumference to generate cross centerlines extending 3 mm beyond the diameter.
5. Apply linear dimensions: set layer to 'Dimension'. Run `DIMLINEAR`, click points `(0,0)` and `(120,0)`, and place the $120\text{ mm}$ text 12 mm below the plate. Run `DIMLINEAR` again for points `(0,0)` and `(0,80)` and place the $80\text{ mm}$ text 12 mm to the left.
6. Apply hole dimension: run `DIMDIAMETER`, click the circular hole, and place the leader at a $45^\circ$ angle showing $\varnothing 40$.
- **Answer:** A completed 2D CAD model comprising an outer $120\text{ mm} \times 80\text{ mm}$ rectangle on layer 'Outline', a concentric $\varnothing 40\text{ mm}$ hole with layer 'Center' axis lines, and three standard ISO dimensions on layer 'Dimension'.

#### Example 2: Stepped Bracket Profile with Fillet
Create a 2D CAD drawing of an L-shaped bracket with overall width $90\text{ mm}$, height $70\text{ mm}$, uniform thickness $25\text{ mm}$, and an interior fillet radius of $R15\text{ mm}$, fully dimensioned.

1. Draft the perimeter: set layer to 'Outline'. Execute `PLINE`, set start point at `0,0`.
2. Input coordinates sequentially: enter `@90,0` (base width), `@0,25` (base edge height), `@-65,0` (step back to vertical web), `@0,45` (upright height to top), `@-25,0` (web top width), and type `C` (Close) to produce a closed polygon.
3. Apply inside fillet: run `FILLET`, type `R`, set radius value to `15`, then select the horizontal line segment at $Y=25$ and the vertical line segment at $X=25$.
4. Dimension horizontal features: set layer to 'Dimension'. Execute `DIMLINEAR` to dimension the overall base width of $90\text{ mm}$ (10 mm below base) and the web width of $25\text{ mm}$ (10 mm above top edge).
5. Dimension vertical features: execute `DIMLINEAR` to dimension the total height of $70\text{ mm}$ (10 mm left of the bracket) and the base step thickness of $25\text{ mm}$ (10 mm right of the bracket).
6. Dimension the radius: run `DIMRADIUS`, click the filleted arc, and position the radial dimension line displaying $R15$.
- **Answer:** A continuous L-bracket 2D profile with a smooth internal corner transition of $R15\text{ mm}$, five driving linear dimensions, and one radial dimension, ready for technical evaluation.

### Quick recall
- CAD shortens product development by enabling parametric updates, rapid iteration, and seamless integration with CAM/CNC fabrication.
- Always configure `UNITS`, `LIMITS`, and `ZOOM ALL` before placing the first geometric entity.
- Distinct line weights and colors must be managed through layers, never by overriding individual entity properties directly.
- Use Object Snaps (`OSNAP`) exclusively—never guess points visually with the mouse crosshairs.
- Internal evaluation prioritizes layer discipline, correct dimension offset spacing, and fully constrained drawing geometry.
