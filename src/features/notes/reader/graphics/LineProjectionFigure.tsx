import { lazy, Suspense, useMemo, useState } from "react";
import { Loader } from "@/components/ui/loader";
import Epure from "./Epure";
import { compareWithPrinted, solveLine, type LineProjectionSpec } from "./lineProjection";

// three.js is only fetched when the 3D tab is opened
const Space3D = lazy(() => import("./Space3D"));

const NAMES = { length: "True length AB", fvLength: "Front view a′b′", tvLength: "Top view ab", theta: "θ (to HP)", phi: "φ (to VP)" } as const;
const unitOf = (key: string, unit: string) => (key === "theta" || key === "phi" ? "°" : ` ${unit}`);
const fmt = (n: number) => String(Math.round(n * 10) / 10);

/* A ```line-projection block: JSON of the problem's numbers. Shows the worked 2D drawing, the same
   line in 3D, and the computed answers beside the ones printed in the source. */
export default function LineProjectionFigure({ source }: { source: string }) {
  const [tab, setTab] = useState<"2d" | "3d">("2d");
  const parsed = useMemo(() => {
    try {
      const spec = JSON.parse(source) as LineProjectionSpec;
      const solved = solveLine(spec);
      // a room measured in metres is drawn larger, so the drawing keeps its proportions and label sizes
      const factor = spec.unit === "m" ? 25 : 1;
      const scaled = factor === 1 ? solved : solveLine({ ...spec, A: { y: spec.A.y * factor, z: spec.A.z * factor }, B: spec.B && { y: spec.B.y * factor, z: spec.B.z * factor }, length: spec.length * factor });
      return { spec, solved, scaled, factor, rows: compareWithPrinted(spec, solved) };
    } catch (error) {
      return { error: error instanceof Error ? error.message : "Invalid figure data" };
    }
  }, [source]);

  if ("error" in parsed) return <p className="notes-epure-note">Figure unavailable: {parsed.error}</p>;
  const { spec, solved, scaled, factor, rows } = parsed;
  const unit = spec.unit ?? "mm";
  const answers = [
    { key: "length", value: solved.length },
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
      {spec.givens?.length ? (
        <ul className="notes-epure-givens" aria-label="Given data">
          {spec.givens.map((line) => <li key={line}>{line}</li>)}
        </ul>
      ) : null}
      {tab === "2d" ? (
        <Epure solved={scaled} divisor={factor} />
      ) : (
        <Suspense fallback={<Loader variant="inline" label="Loading 3D view" />}>
          <Space3D solved={scaled} />
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
                <td>{fmt(value)}{unitOf(key, unit)}</td>
                {rows.length > 0 && <td>{row ? <>{fmt(row.printed)}{unitOf(key, unit)} {row.matches ? "✓" : "✗ differs"}</> : "—"}</td>}
              </tr>
            );
          })}
          {solved.HT && <tr><td>HT</td><td colSpan={rows.length > 0 ? 2 : 1}>{fmt(Math.abs(solved.HT.y))} {unit} {solved.HT.y >= 0 ? "in front of" : "behind"} the VP</td></tr>}
          {solved.VT && <tr><td>VT</td><td colSpan={rows.length > 0 ? 2 : 1}>{fmt(Math.abs(solved.VT.z))} {unit} {solved.VT.z >= 0 ? "above" : "below"} the HP</td></tr>}
        </tbody>
      </table>
      {spec.title && <figcaption>{spec.title}</figcaption>}
    </figure>
  );
}
