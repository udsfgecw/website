import { lazy, Suspense, useMemo, useState } from "react";
import Epure from "./Epure";
import { compareWithPrinted, solveLine, type LineProjectionSpec } from "./lineProjection";

// three.js is only fetched when the 3D tab is opened
const Space3D = lazy(() => import("./Space3D"));

const NAMES = { fvLength: "Front view a′b′", tvLength: "Top view ab", theta: "θ (to HP)", phi: "φ (to VP)" } as const;
const unit = (key: keyof typeof NAMES) => (key === "theta" || key === "phi" ? "°" : " mm");
const fmt = (n: number) => String(Math.round(n * 10) / 10);

/* A ```line-projection block: JSON of the problem's numbers. Shows the worked 2D drawing, the same
   line in 3D, and the computed answers beside the ones printed in the source. */
export default function LineProjectionFigure({ source }: { source: string }) {
  const [tab, setTab] = useState<"2d" | "3d">("2d");
  const parsed = useMemo(() => {
    try {
      const spec = JSON.parse(source) as LineProjectionSpec;
      const solved = solveLine(spec);
      return { spec, solved, rows: compareWithPrinted(spec, solved) };
    } catch (error) {
      return { error: error instanceof Error ? error.message : "Invalid figure data" };
    }
  }, [source]);

  if ("error" in parsed) return <p className="notes-epure-note">Figure unavailable: {parsed.error}</p>;
  const { spec, solved, rows } = parsed;
  const answers = [
    { key: "fvLength", value: solved.fvLength },
    { key: "tvLength", value: solved.tvLength },
    { key: "theta", value: solved.theta },
    { key: "phi", value: solved.phi },
  ] as const;

  return (
    <figure className="notes-figure notes-line-projection">
      <div role="tablist" className="notes-epure-tabs">
        <button role="tab" aria-selected={tab === "2d"} onClick={() => setTab("2d")}>Drawing (2D)</button>
        <button role="tab" aria-selected={tab === "3d"} onClick={() => setTab("3d")}>In space (3D)</button>
      </div>
      {tab === "2d" ? (
        <Epure solved={solved} />
      ) : (
        <Suspense fallback={<p className="notes-epure-note">Loading the 3D view…</p>}>
          <Space3D solved={solved} />
        </Suspense>
      )}
      <table className="notes-epure-answers">
        <thead>
          <tr><th>Answer</th><th>Computed</th>{rows.length > 0 && <th>Printed in source</th>}</tr>
        </thead>
        <tbody>
          {answers.map(({ key, value }) => {
            const row = rows.find((r) => r.key === key);
            return (
              <tr key={key}>
                <td>{NAMES[key]}</td>
                <td>{fmt(value)}{unit(key)}</td>
                {rows.length > 0 && <td>{row ? <>{fmt(row.printed)}{unit(key)} {row.matches ? "✓" : "✗ differs"}</> : "—"}</td>}
              </tr>
            );
          })}
          {solved.HT && <tr><td>HT</td><td colSpan={rows.length > 0 ? 2 : 1}>{fmt(Math.abs(solved.HT.y))} mm {solved.HT.y >= 0 ? "in front of" : "behind"} the VP</td></tr>}
          {solved.VT && <tr><td>VT</td><td colSpan={rows.length > 0 ? 2 : 1}>{fmt(Math.abs(solved.VT.z))} mm {solved.VT.z >= 0 ? "above" : "below"} the HP</td></tr>}
        </tbody>
      </table>
      {spec.title && <figcaption>{spec.title}</figcaption>}
    </figure>
  );
}
