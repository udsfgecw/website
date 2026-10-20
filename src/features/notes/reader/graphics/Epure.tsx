import { useId, useState } from "react";
import type { LineProjection } from "./lineProjection";

const STEPS = [
  "Given: mark a' and a",
  "Draw the views a'b' and ab",
  "Find the true length and inclinations",
  "Locate the traces",
] as const;


/* The 2D drawing: front view above the XY line, top view below it. Built up in steps so the
   construction can be followed in order. Drawing x is the space x; the front view is drawn at -z
   (up the page) and the top view at +y (down the page), as in first-angle projection. */
/* `divisor` converts drawing units back to the problem's own (a 5 m room is drawn 25 times larger). */
export default function Epure({ solved, divisor = 1, step: fixedStep }: { solved: LineProjection; divisor?: number; step?: number }) {
  const fmt = (n: number, d = divisor) => String(Math.round((n / d) * 10) / 10);
  const [picked, setStep] = useState<number>(STEPS.length);
  // a fixed step is used when the drawing is exported as an image for the written steps
  const step = fixedStep ?? picked;
  const marker = useId();
  const { A, B, HT, VT } = solved;

  // every drawn point, to size the sheet
  const xs = [0, B.x, solved.fvLength, solved.tvLength, HT?.x ?? 0, VT?.x ?? 0];
  const zs = [A.z, B.z, 0, VT?.z ?? 0];
  const ys = [A.y, B.y, 0, HT?.y ?? 0];
  const pad = 22;
  const left = Math.min(...xs) - pad - 14;
  const right = Math.max(...xs) + pad + 10;
  const top = -Math.max(...zs) - pad - 8; // screen y of the highest front-view point
  const bottom = Math.max(...ys) + pad + 8;
  const width = right - left;
  const height = bottom - top;

  const fv = (x: number, z: number) => ({ x, y: -z });
  const tv = (x: number, y: number) => ({ x, y });
  const aF = fv(0, A.z), bF = fv(B.x, B.z), aT = tv(0, A.y), bT = tv(B.x, B.y);
  // true-length construction: rotate each view parallel to XY and project across
  const b1T = tv(solved.tvLength, A.y); // top view rotated to the horizontal
  const b1F = fv(solved.tvLength, B.z); // ... and projected up to b' 's level
  const b2F = fv(solved.fvLength, A.z); // front view rotated to the horizontal
  const b2T = tv(solved.fvLength, B.y); // ... and projected down to b 's level

  const arc = (c: { x: number; y: number }, from: { x: number; y: number }, to: { x: number; y: number }) => {
    const r = Math.hypot(from.x - c.x, from.y - c.y);
    const sweep = (from.x - c.x) * (to.y - c.y) - (from.y - c.y) * (to.x - c.x) > 0 ? 1 : 0;
    return `M${from.x},${from.y} A${r},${r} 0 0 ${sweep} ${to.x},${to.y}`;
  };
  const dot = (p: { x: number; y: number }, label: string, dx = 3, dy = -3, color = "currentColor") => (
    <g key={label}>
      <circle cx={p.x} cy={p.y} r={1.3} fill={color} />
      <text x={p.x + dx} y={p.y + dy} fontSize="6.5" fontStyle="italic" fill={color}>{label}</text>
    </g>
  );
  const dim = (id: string, x: number, y1: number, y2: number, text: string) => (
    <g key={id} fontSize="5.5">
      <line x1={x} y1={y1} x2={x} y2={y2} stroke="currentColor" strokeWidth="0.4" markerStart={`url(#${marker})`} markerEnd={`url(#${marker})`} />
      <text x={x - 2} y={(y1 + y2) / 2 + 2} textAnchor="end">{text}</text>
    </g>
  );

  const thin = { stroke: "currentColor", strokeWidth: 0.4, opacity: 0.55 } as const;
  const dash = { ...thin, strokeDasharray: "2 1.6" } as const;
  const accent = "var(--notes-accent, #b4561f)";

  return (
    <div className="notes-epure">
      <svg viewBox={`${left} ${top} ${width} ${height}`} role="img" aria-label="Orthographic projection of the line AB: front view above the XY line and top view below it" style={{ maxWidth: Math.min(width * 4.2, 720), width: "100%" }}>
        <defs>
          <marker id={marker} markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto-start-reverse">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="currentColor" />
          </marker>
        </defs>
        <line x1={left + 4} y1={0} x2={right - 4} y2={0} stroke="currentColor" strokeWidth="0.6" />
        <text x={left + 5} y={-2} fontSize="6.5" fontStyle="italic">x</text>
        <text x={right - 9} y={-2} fontSize="6.5" fontStyle="italic">y</text>
        <text x={right - 4} y={top + 7} fontSize="5.5" textAnchor="end" opacity="0.6">FRONT VIEW</text>
        <text x={right - 4} y={bottom - 3} fontSize="5.5" textAnchor="end" opacity="0.6">TOP VIEW</text>

        {/* step 1: the first point and its distances from the planes */}
        {step >= 1 && (
          <g>
            <line x1={0} y1={aF.y} x2={0} y2={aT.y} {...dash} />
            {dim("za", -9, 0, aF.y, fmt(Math.abs(A.z)))}
            {dim("ya", -9, 0, aT.y, fmt(Math.abs(A.y)))}
            {dot(aF, "a′", -8, -2)}
            {dot(aT, "a", -8, 6)}
          </g>
        )}

        {/* step 2: the second point and the two views */}
        {step >= 2 && (
          <g>
            <line x1={B.x} y1={bF.y} x2={B.x} y2={bT.y} {...dash} />
            <line x1={aF.x} y1={aF.y} x2={bF.x} y2={bF.y} stroke="currentColor" strokeWidth="1.1" />
            <line x1={aT.x} y1={aT.y} x2={bT.x} y2={bT.y} stroke="currentColor" strokeWidth="1.1" />
            {dim("zb", B.x + 9, 0, bF.y, fmt(Math.abs(B.z)))}
            {dim("yb", B.x + 9, 0, bT.y, fmt(Math.abs(B.y)))}
            {dot(bF, "b′", 2, -2)}
            {dot(bT, "b", 2, 6)}
          </g>
        )}

        {/* step 3: rotate each view parallel to XY; the rotated length is the true length */}
        {step >= 3 && (
          <g color={accent} stroke={accent} fill={accent}>
            <path d={arc(aT, bT, b1T)} fill="none" strokeWidth="0.5" strokeDasharray="2 1.6" />
            <line x1={b1T.x} y1={b1T.y} x2={b1F.x} y2={b1F.y} strokeWidth="0.4" strokeDasharray="2 1.6" />
            <line x1={aF.x} y1={aF.y} x2={b1F.x} y2={b1F.y} strokeWidth="1" />
            <text x={(aF.x + b1F.x) / 2} y={(aF.y + b1F.y) / 2 - 3} fontSize="6" stroke="none" textAnchor="middle">{`TL ${fmt(solved.length)}`}</text>
            <text x={aF.x + 14} y={aF.y - 2} fontSize="6" stroke="none">{`θ = ${fmt(solved.theta, 1)}°`}</text>

            <path d={arc(aF, bF, b2F)} fill="none" strokeWidth="0.5" strokeDasharray="2 1.6" />
            <line x1={b2F.x} y1={b2F.y} x2={b2T.x} y2={b2T.y} strokeWidth="0.4" strokeDasharray="2 1.6" />
            <line x1={aT.x} y1={aT.y} x2={b2T.x} y2={b2T.y} strokeWidth="1" />
            <text x={(aT.x + b2T.x) / 2} y={(aT.y + b2T.y) / 2 + 8} fontSize="6" stroke="none" textAnchor="middle">{`TL ${fmt(solved.length)}`}</text>
            <text x={aT.x + 14} y={aT.y + 8} fontSize="6" stroke="none">{`φ = ${fmt(solved.phi, 1)}°`}</text>
          </g>
        )}

        {/* step 4: extend both views until they meet the XY line */}
        {step >= 4 && (
          <g>
            {HT && (
              <g>
                <line x1={aT.x} y1={aT.y} x2={HT.x} y2={HT.y} {...dash} />
                <line x1={aF.x} y1={aF.y} x2={HT.x} y2={0} {...dash} />
                {dot(tv(HT.x, HT.y), "HT", 2, 7, accent)}
                {dot({ x: HT.x, y: 0 }, "h′", -9, -2, accent)}
              </g>
            )}
            {VT && (
              <g>
                <line x1={aF.x} y1={aF.y} x2={VT.x} y2={-VT.z} {...dash} />
                <line x1={aT.x} y1={aT.y} x2={VT.x} y2={0} {...dash} />
                {dot(fv(VT.x, VT.z), "VT", 2, -3, accent)}
                {dot({ x: VT.x, y: 0 }, "v", 2, 7, accent)}
              </g>
            )}
          </g>
        )}
      </svg>
      {fixedStep === undefined && <div className="notes-epure-steps" role="group" aria-label="Construction steps">
        {STEPS.map((label, i) => (
          <button key={label} type="button" aria-pressed={step === i + 1} onClick={() => setStep(i + 1)}>
            <span>{i + 1}</span> {label}
          </button>
        ))}
      </div>}
    </div>
  );
}
