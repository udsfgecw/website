import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageTitle } from "@/config";
import { syncHead, type PageMeta } from "@/lib/seo";

export type { PageMeta };

/* Each page declares its title, description and structured data with usePageMeta. During the
   build's pre-render a collector is provided so they can be written into that page's static HTML;
   in the browser the hook keeps the document head in sync as the visitor navigates. The canonical
   path defaults to the current route. */
const MetaContext = createContext<((meta: PageMeta) => void) | null>(null);
export const MetaCollector = MetaContext.Provider;

export function usePageMeta(meta: PageMeta) {
  const { pathname } = useLocation();
  const resolved: PageMeta = { ...meta, path: meta.path ?? pathname };
  useContext(MetaContext)?.(resolved);
  const key = JSON.stringify(resolved);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- `key` captures every field of `resolved`
  useEffect(() => syncHead(resolved), [key]);
}

/** Title and description for a URL that has no page; kept out of search results. */
export const notFoundMeta = (): PageMeta => ({
  title: pageTitle("Page not found"),
  description: "This page doesn’t exist on the UDSF GECW website.",
  noindex: true,
});
