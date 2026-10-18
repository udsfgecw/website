import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./tailwind.css";

const isMathsRoute = window.location.pathname.replace(/\/+$/, "") === "/notes/cse/s1/maths";
const MathsReader = lazy(() => import("./notes/MathsReader"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isMathsRoute ? <Suspense fallback={<p role="status" style={{ padding: 32 }}>Opening your maths notebook…</p>}><MathsReader /></Suspense> : <App />}
  </StrictMode>,
);
