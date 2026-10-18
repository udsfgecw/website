import { useState, type ReactNode } from "react";

const LABELS: Record<string, string> = { python: "Python", bash: "Shell", c: "C", javascript: "JavaScript", json: "JSON", text: "Output" };

/* A fenced code block: a header with the language name and a copy button above the (already highlighted) code. */
export default function CodeBlock({ language, text, children }: { language?: string; text: string; children: ReactNode }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable (insecure context or denied): leave the label unchanged */
    }
  };
  return (
    <div className="notes-code">
      <div className="notes-code-bar">
        <span>{(language && LABELS[language]) || language || "Code"}</span>
        <button type="button" onClick={copy} aria-label="Copy code to clipboard">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{children}</pre>
    </div>
  );
}
