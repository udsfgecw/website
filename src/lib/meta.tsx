import { createContext, useContext, useEffect } from "react";

export type PageMeta = { title: string; description: string };

/* Each page declares its title and description with usePageMeta. During the build's pre-render a
   collector is provided so they can be written into that page's static HTML; in the browser the
   hook keeps the document head in sync as the visitor navigates. */
const MetaContext = createContext<((meta: PageMeta) => void) | null>(null);
export const MetaCollector = MetaContext.Provider;

export function usePageMeta(meta: PageMeta) {
  useContext(MetaContext)?.(meta);
  useEffect(() => {
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  }, [meta.title, meta.description]);
}
