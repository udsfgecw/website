import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./tailwind.css";
import { ProgramFeedProvider } from "./lib/program-feed";
import type { EventEntry } from "./data/event-catalogue";

const root = document.getElementById("root")!;
const initialData: { programs?: EventEntry[] } = JSON.parse(document.getElementById("program-feed")?.textContent || "{}");
const app = (
  <StrictMode>
    <ProgramFeedProvider programs={initialData.programs}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProgramFeedProvider>
  </StrictMode>
);

// Production pages ship pre-rendered HTML for their own URL (see scripts/prerender.mjs), so attach
// to it; the dev server serves an empty root, so render from scratch there.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
