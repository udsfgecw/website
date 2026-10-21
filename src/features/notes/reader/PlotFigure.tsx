import { useId } from "react";

export interface PlotSpec {
  /** [left, top, right, bottom] in graph units */
  boundingBox: [number, number, number, number];
  axis?: boolean;
  points?: { id: string; x: number; y: number; label?: string; show?: boolean }[];
  segments?: { from: string; to: string }[];
  /** filled regions, each a list of point ids in order around the edge */
  polygons?: { points: string[]; fill?: string; stroke?: string }[];
  circles?: { center: string; radius: number; stroke?: string }[];
  arrows?: { from: string; to: string }[];
  /** y = vertex y + a (x - vertex x)², drawn across the box; the label sits just above its vertex */
  parabolas?: { vertex: [number, number]; a: number; label?: string }[];
  functions?: { expression: string; label?: string }[];
  /** Sampled curves for scientific plots; points are in graph coordinates. */
  polylines?: ({ points: [number, number][]; label?: string; stroke?: string; dashed?: boolean } | [number, number][])[];
  labels?: { x: number; y: number; text: string }[];
  title?: string;
}

const SIZE = 340;

/* Draws a ```jsxgraph block's axes, points, segments, shaded regions, circles and parabolas as SVG. */
export default function PlotFigure({ spec }: { spec: PlotSpec }) {
  const marker = useId();
  const clip = useId();
  const [left, top, right, bottom] = spec.boundingBox;
  const scale = SIZE / Math.max(right - left, top - bottom);
  const width = (right - left) * scale;
  const height = (top - bottom) * scale;
  const sx = (x: number) => (x - left) * scale;
  const sy = (y: number) => (top - y) * scale;
  const points = new Map((spec.points ?? []).map((p) => [p.id, p]));

  return (
    <figure className="notes-figure">
      <svg viewBox={`-12 -12 ${width + 24} ${height + 24}`} style={{ maxWidth: width + 24 }} role="img" aria-label={spec.title ?? "Graph"}>
        <defs>
          <marker id={marker} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8" fill="none" stroke="currentColor" />
          </marker>
          <clipPath id={clip}>
            <rect width={width} height={height} />
          </clipPath>
        </defs>
        {spec.axis && (
          <g stroke="currentColor" strokeWidth="1.2" markerEnd={`url(#${marker})`}>
            <line x1={0} y1={sy(0)} x2={width} y2={sy(0)} />
            <line x1={sx(0)} y1={height} x2={sx(0)} y2={0} />
          </g>
        )}
        {spec.axis && (
          <g fontSize="15" fontStyle="italic" fontFamily="KaTeX_Math, Georgia, serif" fill="currentColor">
            <text x={width - 4} y={sy(0) + 18} textAnchor="end">
              x
            </text>
            <text x={sx(0) - 10} y={12} textAnchor="end">
              y
            </text>
          </g>
        )}
        {spec.polygons?.map((region, i) => {
          const corners = region.points.map((id) => points.get(id)).filter((p) => p !== undefined);
          if (corners.length < 3) return null;
          return <polygon key={i} points={corners.map((p) => `${sx(p.x)},${sy(p.y)}`).join(" ")} fill={region.fill ?? "var(--color-green-tint)"} stroke={region.stroke ?? "var(--color-green)"} strokeWidth="2.5" />;
        })}
        {spec.circles?.map((c, i) => {
          const centre = points.get(c.center);
          if (!centre) return null;
          return <circle key={i} cx={sx(centre.x)} cy={sy(centre.y)} r={c.radius * scale} fill="white" stroke={c.stroke ?? "var(--color-green)"} strokeWidth="2.5" />;
        })}
        {spec.parabolas?.map((p, i) => {
          const [vx, vy] = p.vertex;
          const y = (x: number) => vy + p.a * (x - vx) ** 2;
          const steps = 80;
          const path = Array.from({ length: steps + 1 }, (_, k) => {
            const x = left + ((right - left) * k) / steps;
            return `${k ? "L" : "M"}${sx(x).toFixed(1)} ${sy(y(x)).toFixed(1)}`;
          }).join("");
          // the curve is flat at the vertex, so a label there stays clear of the neighbouring curves
          return (
            <g key={i}>
              <path d={path} fill="none" stroke="var(--color-green)" strokeWidth="2.5" clipPath={`url(#${clip})`} />
              {p.label && (
                <text x={sx(vx) + 8} y={sy(vy) - 8} fontSize="14" className="notes-figure-label">
                  {p.label}
                </text>
              )}
            </g>
          );
        })}
        {spec.polylines?.map((line, i) => {
          const linePoints = Array.isArray(line) ? line : line.points;
          if (linePoints.length < 2) return null;
          const stroke = Array.isArray(line) ? undefined : line.stroke;
          const dashed = Array.isArray(line) ? false : line.dashed;
          const path = linePoints.map(([x, y], index) =>
            `${index ? "L" : "M"}${sx(x).toFixed(1)} ${sy(y).toFixed(1)}`,
          ).join(" ");
          return <path key={`polyline-${i}`} d={path} fill="none" stroke={stroke ?? "var(--color-green)"} strokeWidth="2.5" strokeDasharray={dashed ? "7 5" : undefined} clipPath={`url(#${clip})`} />;
        })}
        {spec.segments?.map((s, i) => {
          const a = points.get(s.from);
          const b = points.get(s.to);
          if (!a || !b || a === b) return null;
          return <line key={i} x1={sx(a.x)} y1={sy(a.y)} x2={sx(b.x)} y2={sy(b.y)} stroke="var(--color-green)" strokeWidth="2.5" />;
        })}
        {spec.arrows?.map((s, i) => {
          const a = points.get(s.from);
          const b = points.get(s.to);
          if (!a || !b || a === b) return null;
          return <line key={`arrow-${i}`} x1={sx(a.x)} y1={sy(a.y)} x2={sx(b.x)} y2={sy(b.y)} stroke="var(--color-green)" strokeWidth="2.5" markerEnd={`url(#${marker})`} />;
        })}
        {spec.points?.map((p) => {
          // labels sit outside the point, away from the origin
          const dx = Math.sign(p.x);
          const dy = Math.sign(p.y);
          return (
            <g key={p.id}>
              {p.show !== false && <circle cx={sx(p.x)} cy={sy(p.y)} r="3.5" fill="currentColor" />}
              {p.label && (
                <text
                  x={sx(p.x) + (dx || 0.4) * 8}
                  y={sy(p.y) - (dy || -1) * 10}
                  textAnchor={dx < 0 ? "end" : "start"}
                  dominantBaseline={dy > 0 ? "auto" : "hanging"}
                  fontSize="14"
                  className="notes-figure-label"
                >
                  {p.label}
                </text>
              )}
            </g>
          );
        })}
        {spec.labels?.map((label, i) => (
          <text key={`label-${i}`} x={sx(label.x)} y={sy(label.y)} textAnchor="middle" dominantBaseline="middle" fontSize="14" className="notes-figure-label">
            {label.text}
          </text>
        ))}
      </svg>
      {spec.title && <figcaption>{spec.title}</figcaption>}
    </figure>
  );
}
