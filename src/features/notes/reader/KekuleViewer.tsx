import { useEffect, useRef, useState } from "react";
import { chemPresets } from "./chemPresets";
import { Loader } from "@/components/ui/loader";

export interface KekuleViewerProps {
  source: string;
}

export default function KekuleViewer({ source }: KekuleViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");

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

        const trimmed = source.trim();
        let config: any = {};
        let molData = "";
        let cmlData = "";
        let detectedTitle = "";

        if (chemPresets[trimmed.toLowerCase()]) {
          const preset = chemPresets[trimmed.toLowerCase()];
          molData = preset.mol;
          detectedTitle = preset.title;
        } else if (trimmed.includes("V2000") || trimmed.includes("M  END")) {
          molData = trimmed;
        } else if (trimmed.startsWith("<")) {
          cmlData = trimmed;
        } else {
          try {
            config = JSON.parse(trimmed);
            if (config.preset && chemPresets[config.preset.toLowerCase()]) {
              const preset = chemPresets[config.preset.toLowerCase()];
              molData = preset.mol;
              detectedTitle = config.title || preset.title;
            } else {
              molData = config.mol || "";
              cmlData = config.cml || "";
              detectedTitle = config.title || "";
            }
          } catch {
            const fallbackKey = trimmed.toLowerCase().replace(/[^a-z0-9]/g, "");
            if (chemPresets[fallbackKey]) {
              const preset = chemPresets[fallbackKey];
              molData = preset.mol;
              detectedTitle = preset.title;
            }
          }
        }

        if (detectedTitle) {
          setTitle(detectedTitle);
        }

        viewer = new Kekule.ChemWidget.Viewer(containerRef.current);
        viewer.setRenderType(Kekule.Render.RendererType.R2D);
        viewer.setEnableDirectInteraction(config.interactive ?? true);
        viewer.setEnableToolbar(config.toolbar ?? false);

        let chemObj = null;
        if (cmlData) {
          chemObj = Kekule.IO.loadFormatData(cmlData, "cml");
        } else if (molData) {
          chemObj = Kekule.IO.loadFormatData(molData, "mol");
        } else if (config.json) {
          chemObj = Kekule.IO.loadFormatData(JSON.stringify(config.json), "json");
        }

        if (chemObj) {
          viewer.setChemObj(chemObj);
        } else {
          setError("No molecule structure provided");
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
    <div className="my-6 flex flex-col items-center w-full">
      <div className="w-full max-w-md border border-border/60 rounded-xl bg-card overflow-hidden shadow-xs">
        {title && (
          <div className="px-4 py-2 border-b border-border/40 bg-muted/30 text-xs font-semibold text-muted-foreground flex items-center justify-between">
            <span>{title}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono">2D Interactive (Kekule)</span>
          </div>
        )}
        <div
          ref={containerRef}
          className="w-full h-64 bg-background flex items-center justify-center"
        >
          {error ? (
            <p className="text-xs text-muted-foreground">{error}</p>
          ) : (
            <Loader variant="inline" label="Loading molecule" />
          )}
        </div>
      </div>
    </div>
  );
}
