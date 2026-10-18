import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

/* Used at build time only: renders the page to HTML so crawlers and link previews get the full content. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
