import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  server: { port: 5173 },
  // the manifest lets the pre-render link each lazily loaded page's CSS and JS in its HTML
  build: {
    assetsDir: "static",
    manifest: true,
    // the notes chunk (KaTeX and the markdown renderer) is about 510 kB but loads only on notes pages
    chunkSizeWarningLimit: 600,
  },
});
