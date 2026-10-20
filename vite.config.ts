import path from "node:path";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import type { IncomingMessage, ServerResponse } from "node:http";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

type Runtime = {
  createProgramFeed: () => unknown;
  renderLandingDocument: (template: string) => Promise<string>;
};

function runtimeRoutes(load: () => Promise<Runtime>, template: () => Promise<string>) {
  return async (request: IncomingMessage, response: ServerResponse, next: () => void) => {
    const pathname = request.url?.split("?")[0];
    if (pathname !== "/" && pathname !== "/api/landing" && pathname !== "/api/programs") return next();
    response.setHeader("Cache-Control", "no-store");
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.setHeader("Allow", "GET, HEAD");
      response.statusCode = 405;
      return response.end();
    }
    try {
      const runtime = await load();
      const json = pathname === "/api/programs";
      const body = json ? JSON.stringify(runtime.createProgramFeed()) : await runtime.renderLandingDocument(await template());
      response.setHeader("Content-Type", json ? "application/json; charset=utf-8" : "text/html; charset=utf-8");
      response.statusCode = 200;
      response.end(request.method === "HEAD" ? undefined : body);
    } catch (error) {
      console.error("Request rendering failed", error);
      response.statusCode = 500;
      response.end("Unable to load this page. Please try again.");
    }
  };
}

function requestRendering(): Plugin {
  const root = import.meta.dirname;
  return {
    name: "request-rendering",
    configureServer(server) {
      server.middlewares.use(runtimeRoutes(
        async () => await server.ssrLoadModule("/src/entry-server.tsx") as Runtime,
        async () => server.transformIndexHtml("/", await readFile(path.join(root, "index.html"), "utf8")),
      ));
    },
    configurePreviewServer(server) {
      server.middlewares.use(runtimeRoutes(
        async () => await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href) as Runtime,
        () => readFile(path.join(root, "dist-ssr/template.html"), "utf8"),
      ));
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), requestRendering()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  server: { port: 5173 },
  build: {
    assetsDir: "static",
    manifest: true,
    chunkSizeWarningLimit: 600,
  },
});
