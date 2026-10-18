import { useId } from "react";

interface Edge {
  from: string;
  to: string;
  label?: string;
  arrow: boolean;
}

const NODE = /^([\w]+)(?:\(\((.+?)\)\)|\[(.+?)\]|\((.+?)\))?$/;
const EDGE = /^(.+?)\s*(-->|---)\s*(?:\|(.+?)\|\s*)?(.+)$/;

/* Reads the small subset of Mermaid the notes use for chain-rule trees: "graph TD" or "flowchart TD"
   followed by edges such as `z -->|∂z/∂x| x` or `X[x] --- U1[u]`. */
function parse(source: string) {
  const names = new Map<string, string>();
  const edges: Edge[] = [];
  const node = (token: string) => {
    const m = NODE.exec(token.trim());
    if (!m) return null;
    const label = m[2] ?? m[3] ?? m[4];
    if (label || !names.has(m[1])) names.set(m[1], label ?? m[1]);
    return m[1];
  };
  for (const line of source.split("\n").slice(1)) {
    const m = EDGE.exec(line.trim());
    if (!m) continue;
    const from = node(m[1]);
    const to = node(m[4]);
    if (from && to) edges.push({ from, to, label: m[3]?.trim(), arrow: m[2] === "-->" });
  }
  return { names, edges };
}

/* Each node sits one row below its deepest parent; a row's nodes are spread evenly across the width,
   in the order they first appear, which keeps each parent's children beneath it in these trees. */
function layout(names: Map<string, string>, edges: Edge[]) {
  const depth = new Map<string, number>();
  for (const id of names.keys()) if (!edges.some((e) => e.to === id)) depth.set(id, 0);
  for (let changed = true, guard = 0; changed && guard < names.size; guard++) {
    changed = false;
    for (const e of edges) {
      const d = (depth.get(e.from) ?? 0) + 1;
      if (d > (depth.get(e.to) ?? -1)) {
        depth.set(e.to, d);
        changed = true;
      }
    }
  }
  const rows: string[][] = [];
  for (const id of names.keys()) (rows[depth.get(id) ?? 0] ??= []).push(id);
  const columns = Math.max(...rows.map((r) => r.length));
  const width = Math.max(240, columns * 96);
  const position = new Map<string, { x: number; y: number }>();
  rows.forEach((row, level) =>
    row.forEach((id, i) => position.set(id, { x: ((i + 0.5) * width) / row.length, y: 34 + level * 104 })),
  );
  return { width, height: 34 * 2 + (rows.length - 1) * 104, position };
}

const R = 19;

/* Drawn in place of a ```mermaid block in the notes. */
export default function TreeDiagram({ source }: { source: string }) {
  const marker = useId();
  const { names, edges } = parse(source);
  if (edges.length === 0) return null;
  const { width, height, position } = layout(names, edges);
  const description = edges
    .map((e) => `${names.get(e.from)} to ${names.get(e.to)}${e.label ? ` (${e.label})` : ""}`)
    .join(", ");

  return (
    <figure className="notes-figure">
      <svg viewBox={`0 0 ${width} ${height}`} style={{ maxWidth: width }} role="img" aria-label={`Tree diagram: ${description}`}>
        <defs>
          <marker id={marker} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
          </marker>
        </defs>
        {edges.map((e, i) => {
          const a = position.get(e.from)!;
          const b = position.get(e.to)!;
          const len = Math.hypot(b.x - a.x, b.y - a.y);
          const ux = (b.x - a.x) / len;
          const uy = (b.y - a.y) / len;
          const gap = R + (e.arrow ? 3 : 0);
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          // labels sit beside the branch, on the side away from the middle, so branches meeting below don't collide
          const side = Math.abs(mx - width / 2) > 1 ? Math.sign(mx - width / 2) : b.x < a.x ? -1 : 1;
          return (
            <g key={i}>
              <line
                x1={a.x + ux * R}
                y1={a.y + uy * R}
                x2={b.x - ux * gap}
                y2={b.y - uy * gap}
                stroke="currentColor"
                strokeWidth="1.4"
                markerEnd={e.arrow ? `url(#${marker})` : undefined}
              />
              {e.label && (
                <text x={mx + side * 10} y={my} textAnchor={side < 0 ? "end" : "start"} dominantBaseline="middle" fontSize="15" className="notes-figure-label">
                  {e.label}
                </text>
              )}
            </g>
          );
        })}
        {[...position].map(([id, p]) => (
          <g key={id}>
            <circle cx={p.x} cy={p.y} r={R} fill="var(--color-green-tint)" stroke="var(--color-green)" strokeWidth="1.5" />
            <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central" fontSize="19" fontStyle="italic" fontFamily="KaTeX_Math, Georgia, serif" fill="currentColor">
              {names.get(id)}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
