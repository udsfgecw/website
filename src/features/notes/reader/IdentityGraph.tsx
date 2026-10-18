/* Drawn in place of the ```jsxgraph block in the notes. */
export default function IdentityGraph() {
  return (
    <figure className="identity-graph">
      <svg viewBox="0 0 440 260" role="img" aria-labelledby="identity-title">
        <title id="identity-title">Graph of the identity function f(x) = x</title>
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8" fill="none" stroke="currentColor" />
          </marker>
        </defs>
        <path d="M50 218H410 M65 235V25" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <path d="M65 218L325 38" fill="none" stroke="#25846c" strokeWidth="3" />
        <g fill="currentColor" fontSize="17">
          <text x="45" y="240">
            0
          </text>
          <text x="409" y="242">
            x
          </text>
          <text x="43" y="27">
            y
          </text>
          <text x="255" y="105">
            f(x) = x
          </text>
        </g>
      </svg>
      <figcaption>The identity function · f(x) = x</figcaption>
    </figure>
  );
}
