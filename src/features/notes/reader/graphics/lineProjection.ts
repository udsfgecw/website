/* Orthographic projection of a straight line AB (first-angle). Every figure is computed from the
   problem's numbers, so dimensions are exact and the answers can be checked against the source.

   Space coordinates (mm): x along the XY line, y = distance in front of the VP (negative = behind),
   z = height above the HP (negative = below). */

export interface LineProjectionSpec {
  title?: string;
  /** end A: distance in front of the VP and height above the HP */
  A: { y: number; z: number };
  /** true length of AB */
  length: number;
  /** end B given by its own distances ... */
  B?: { y: number; z: number };
  /** ... or by the inclinations to the HP (theta) and VP (phi), in degrees */
  theta?: number;
  phi?: number;
  /** with theta and phi: does B lie above A, and further in front of the VP than A? (default both true) */
  bAbove?: boolean;
  bInFront?: boolean;
  /** answers printed in the source, to compare with the computed ones */
  printed?: Partial<Record<"length" | "fvLength" | "tvLength" | "theta" | "phi" | "htDistance" | "vtDistance", number>>;
  /** metres for room, pole and ladder problems (the drawing is then at a scale such as 1:100) */
  unit?: "mm" | "m";
  /** the problem's given data as short sentences, shown above the drawing */
  givens?: string[];
}

export interface Pt {
  x: number;
  y: number;
  z: number;
}

export interface LineProjection {
  A: Pt;
  B: Pt;
  length: number;
  /** length of the front view a'b' and top view ab */
  fvLength: number;
  tvLength: number;
  /** inclinations to the HP and VP, degrees */
  theta: number;
  phi: number;
  /** horizontal trace (where AB meets the HP) and vertical trace (where it meets the VP), if they exist */
  HT?: Pt;
  VT?: Pt;
  /** quadrant (1-4) of each end; 0 when the end lies in a reference plane */
  quadrantA: number;
  quadrantB: number;
}

const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;

export function quadrant({ y, z }: { y: number; z: number }): number {
  if (y === 0 || z === 0) return 0;
  return y > 0 ? (z > 0 ? 1 : 4) : z > 0 ? 2 : 3;
}

export function solveLine(spec: LineProjectionSpec): LineProjection {
  const L = spec.length;
  const A: Pt = { x: 0, y: spec.A.y, z: spec.A.z };
  let dy: number;
  let dz: number;
  if (spec.B) {
    dy = spec.B.y - spec.A.y;
    dz = spec.B.z - spec.A.z;
  } else if (spec.theta !== undefined && spec.phi !== undefined) {
    dz = L * Math.sin(rad(spec.theta)) * (spec.bAbove === false ? -1 : 1);
    dy = L * Math.sin(rad(spec.phi)) * (spec.bInFront === false ? -1 : 1);
  } else {
    throw new Error("Give either B or both theta and phi.");
  }
  const dx2 = L * L - dy * dy - dz * dz;
  // allow the rounding in printed coordinates; a line that is really too short is still refused
  if (dx2 < -1e-4 * L * L) throw new Error("These distances are longer than the line: no such line exists.");
  const B: Pt = { x: Math.sqrt(Math.max(dx2, 0)), y: A.y + dy, z: A.z + dz };

  const fvLength = Math.hypot(B.x, dz);
  const tvLength = Math.hypot(B.x, dy);
  const trace = (t: number): Pt => ({ x: t * B.x, y: A.y + t * dy, z: A.z + t * dz });
  return {
    A,
    B,
    length: L,
    fvLength,
    tvLength,
    theta: deg(Math.asin(Math.min(1, Math.abs(dz) / L))),
    phi: deg(Math.asin(Math.min(1, Math.abs(dy) / L))),
    HT: dz !== 0 ? trace(-A.z / dz) : undefined,
    VT: dy !== 0 ? trace(-A.y / dy) : undefined,
    quadrantA: quadrant(A),
    quadrantB: quadrant(B),
  };
}

/** Computed answers next to the printed ones, with a flag where they disagree by more than rounding on a drawing. */
export function compareWithPrinted(spec: LineProjectionSpec, solved: LineProjection) {
  const computed = {
    length: solved.length, fvLength: solved.fvLength, tvLength: solved.tvLength, theta: solved.theta, phi: solved.phi,
    htDistance: solved.HT ? Math.abs(solved.HT.y) : undefined, vtDistance: solved.VT ? Math.abs(solved.VT.z) : undefined,
  };
  const lengthTolerance = spec.unit === "m" ? 0.15 : 1.5;
  return (Object.keys(spec.printed ?? {}) as (keyof typeof computed)[]).flatMap((key) => {
    const printed = spec.printed![key];
    const value = computed[key];
    if (printed === undefined || value === undefined) return [];
    return [{ key, printed, computed: value, matches: Math.abs(printed - value) <= (key === "theta" || key === "phi" ? 1.5 : lengthTolerance) }];
  });
}
