import { useId } from "react";

interface Edge {
  from: string;
  to: string;
  label?: string;
  arrow: boolean;
}

interface Box {
  lines: string[];
  width: number;
  height: number;
}

const NODE = /^([\w]+)(?:\(\((.+?)\)\)|\[(.+?)\]|\((.+?)\))?$/;
const EDGE = /^(.+?)\s*(-->|---)\s*(?:\|(.+?)\|\s*)?(.+)$/;

/* Labels in the notes are quoted in the Mermaid source (`A["X · Start node"]`); the quotes are not part of the text. */
const unquote = (text: string) => text.trim().replace(/^"(.*)"$/, "$1");

/* Reads the small subset of Mermaid the notes use: "graph TD" or "flowchart TD" followed by edges such as
   `z -->|∂z/∂x| x` or `X[x] --- U1[u]`. */
function parse(source: string) {
  const names = new Map<string, string>();
  const edges: Edge[] = [];
  const node = (token: string) => {
    const m = NODE.exec(token.trim());
    if (!m) return null;
    const label = m[2] ?? m[3] ?? m[4];
    if (label || !names.has(m[1])) names.set(m[1], label === undefined ? m[1] : unquote(label));
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

const CHAR_WIDTH = 8.4;
const LINE_HEIGHT = 20;
const MAX_CHARS = 26;
const PAD_X = 14;
const PAD_Y = 9;
const MIN_WIDTH = 46;
const GAP_X = 26;
const GAP_Y = 36;
const MARGIN = 12;

/* Breaks a label at spaces so no line is much longer than MAX_CHARS. */
function wrap(text: string) {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > MAX_CHARS && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function boxOf(label: string): Box {
  const lines = wrap(label);
  const longest = Math.max(...lines.map((l) => l.length));
  return {
    lines,
    width: Math.max(MIN_WIDTH, longest * CHAR_WIDTH + 2 * PAD_X),
    height: lines.length * LINE_HEIGHT + 2 * PAD_Y,
  };
}

/* Rows run top to bottom: each node sits one row below its deepest parent. A row's nodes are packed
   side by side, centred, in the order they first appear. Every node is sized to its own label. */
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
  const sparse: string[][] = [];
  for (const id of names.keys()) (sparse[depth.get(id) ?? 0] ??= []).push(id);
  // a depth with no nodes leaves a hole in the array; skip it rather than drawing an empty row
  const rows = sparse.filter((row) => row.length > 0);

  const boxes = new Map([...names].map(([id, label]) => [id, boxOf(label)] as const));
  const rowWidth = (row: string[]) =>
    row.reduce((sum, id) => sum + boxes.get(id)!.width, 0) + GAP_X * (row.length - 1);
  const width = Math.max(240, ...rows.map(rowWidth)) + 2 * MARGIN;

  const position = new Map<string, { x: number; y: number }>();
  let top = MARGIN;
  for (const row of rows) {
    const rowHeight = Math.max(...row.map((id) => boxes.get(id)!.height));
    let x = (width - rowWidth(row)) / 2;
    for (const id of row) {
      const box = boxes.get(id)!;
      position.set(id, { x: x + box.width / 2, y: top + rowHeight / 2 });
      x += box.width + GAP_X;
    }
    top += rowHeight + GAP_Y;
  }
  return { width, height: top - GAP_Y + MARGIN, boxes, position };
}

/* Drawn in place of a ```mermaid block in the notes. */
export default function TreeDiagram({ source }: { source: string }) {
  const marker = useId();
  const { names, edges } = parse(source);
  if (edges.length === 0) return null;
  const { width, height, boxes, position } = layout(names, edges);
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
          // leave the parent from its bottom edge and enter the child at its top edge
          const x1 = a.x;
          const y1 = a.y + boxes.get(e.from)!.height / 2;
          const x2 = b.x;
          const y2 = b.y - boxes.get(e.to)!.height / 2 - (e.arrow ? 3 : 0);
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;
          // labels sit beside the branch, on the side away from the middle, so branches meeting below don't collide
          const side = Math.abs(mx - width / 2) > 1 ? Math.sign(mx - width / 2) : x2 < x1 ? -1 : 1;
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.4" markerEnd={e.arrow ? `url(#${marker})` : undefined} />
              {e.label && (
                <text x={mx + side * 10} y={my} textAnchor={side < 0 ? "end" : "start"} dominantBaseline="middle" fontSize="15" className="notes-figure-label">
                  {e.label}
                </text>
              )}
            </g>
          );
        })}
        {[...position].map(([id, p]) => {
          const box = boxes.get(id)!;
          const firstY = p.y - ((box.lines.length - 1) * LINE_HEIGHT) / 2;
          return (
            <g key={id}>
              <rect x={p.x - box.width / 2} y={p.y - box.height / 2} width={box.width} height={box.height} rx={box.height / 2} fill="var(--color-green-tint)" stroke="var(--color-green)" strokeWidth="1.5" />
              <text textAnchor="middle" fontSize="15" fontStyle="italic" fontFamily="KaTeX_Math, Georgia, serif" fill="currentColor">
                {box.lines.map((line, n) => (
                  <tspan key={n} x={p.x} y={firstY + n * LINE_HEIGHT} dominantBaseline="central">
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
