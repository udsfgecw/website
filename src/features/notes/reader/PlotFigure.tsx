import { useId } from "react";

export interface PlotSpec {
  /** [left, top, right, bottom] in graph units */
  boundingBox: [number, number, number, number];
  axis?: boolean;
  points?: { id: string; x: number; y: number; label?: string }[];
  segments?: { from: string; to: string }[];
  circles?: { center: string; radius: number }[];
  functions?: { expression: string; label?: string }[];
  title?: string;
}

const SIZE = 340;

/* Draws a ```jsxgraph block's axes, points, segments and circles as SVG. */
export default function PlotFigure({ spec }: { spec: PlotSpec }) {
  const marker = useId();
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
        {spec.circles?.map((c, i) => {
          const centre = points.get(c.center);
          if (!centre) return null;
          return <circle key={i} cx={sx(centre.x)} cy={sy(centre.y)} r={c.radius * scale} fill="none" stroke="var(--color-green)" strokeWidth="2.5" />;
        })}
        {spec.segments?.map((s, i) => {
          const a = points.get(s.from);
          const b = points.get(s.to);
          if (!a || !b || a === b) return null;
          return <line key={i} x1={sx(a.x)} y1={sy(a.y)} x2={sx(b.x)} y2={sy(b.y)} stroke="var(--color-green)" strokeWidth="2.5" />;
        })}
        {spec.points?.map((p) => {
          // labels sit outside the point, away from the origin
          const dx = Math.sign(p.x);
          const dy = Math.sign(p.y);
          return (
            <g key={p.id}>
              <circle cx={sx(p.x)} cy={sy(p.y)} r="3.5" fill="currentColor" />
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
      </svg>
      {spec.title && <figcaption>{spec.title}</figcaption>}
    </figure>
  );
}
