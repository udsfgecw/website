import { useEffect, useRef, useState } from "react";

export interface KekuleViewerProps {
  source: string;
}

export default function KekuleViewer({ source }: KekuleViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let viewer: any = null;
    let isMounted = true;

    async function initKekule() {
      try {
        if (!containerRef.current) return;
        const { Kekule } = await import("kekule");
        await import("kekule/theme");

        if (!isMounted || !containerRef.current) return;
        containerRef.current.innerHTML = "";

        let config: any = {};
        try {
          config = JSON.parse(source);
        } catch {
          config = { smiles: source.trim() };
        }

        viewer = new Kekule.ChemWidget.Viewer(containerRef.current);
        viewer.setRenderType(Kekule.Render.RendererType.R2D);
        viewer.setEnableDirectInteraction(config.interactive ?? false);
        viewer.setEnableToolbar(config.toolbar ?? false);

        let chemObj = null;
        if (config.cml) {
          chemObj = Kekule.IO.loadFormatData(config.cml, "cml");
        } else if (config.mol) {
          chemObj = Kekule.IO.loadFormatData(config.mol, "mol");
        } else if (config.smiles) {
          chemObj = Kekule.IO.loadFormatData(config.smiles, "smi");
        } else if (config.json) {
          chemObj = Kekule.IO.loadFormatData(JSON.stringify(config.json), "json");
        }

        if (chemObj) {
          viewer.setChemObj(chemObj);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message || "Failed to render molecule");
      }
    }

    initKekule();

    return () => {
      isMounted = false;
      if (viewer && typeof viewer.finalize === "function") {
        try {
          viewer.finalize();
        } catch {}
      }
    };
  }, [source]);

  return (
    <div className="my-6 flex flex-col items-center">
      <div
        ref={containerRef}
        className="w-full max-w-lg h-72 border border-border/40 rounded-xl bg-card/50 overflow-hidden flex items-center justify-center shadow-xs"
      >
        {error ? (
          <p className="text-xs text-muted-foreground">{error}</p>
        ) : (
          <p className="text-xs text-muted-foreground">Loading molecular viewer...</p>
        )}
      </div>
    </div>
  );
}
