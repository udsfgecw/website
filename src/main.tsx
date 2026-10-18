import { lazy, StrictMode, Suspense } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./tailwind.css";

const isMathsRoute = window.location.pathname.replace(/\/+$/, "") === "/notes/cse/s1/maths";
const MathsReader = lazy(() => import("./notes/MathsReader"));

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    {isMathsRoute ? <Suspense fallback={<p role="status" style={{ padding: 32 }}>Opening your maths notebook…</p>}><MathsReader /></Suspense> : <App />}
  </StrictMode>
);

// The production build ships pre-rendered HTML (see scripts/prerender.mjs), so attach to it;
// the dev server serves an empty root, so render from scratch there.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
