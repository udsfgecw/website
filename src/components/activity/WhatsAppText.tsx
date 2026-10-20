import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Renders text written with WhatsApp's formatting, as the UDSF feed's captions are:
   *bold*, _italic_, ~strikethrough~, `code` and ```monospace``` inside a line, and
   "> " quotes, "- " / "* " / "• " bullets and "1. " numbered lists as whole lines. Links become clickable. */

// A marker only counts when it hugs its text (`*hi*`, not `* hi *`) and isn't inside a word (snake_case).
const INLINE =
  /(```[\s\S]+?```)|(`[^`\n]+`)|(?<![\p{L}\p{N}])([*_~])(?=\S)([^\n]*?\S)\3(?![\p{L}\p{N}])|(https?:\/\/[^\s<>()]+[^\s<>().,!?:;'"])/gu;

export function WhatsAppInline({ text }: { text: string }) {
  return <>{inline(text)}</>;
}

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(INLINE)) {
    const [whole, block, code, marker, inner, url] = match;
    if (match.index > last) out.push(text.slice(last, match.index));
    const key = match.index;
    if (block) out.push(<code key={key} className="font-mono text-[0.92em]">{block.slice(3, -3)}</code>);
    else if (code) out.push(<code key={key} className="rounded bg-current/10 px-1 font-mono text-[0.92em]">{code.slice(1, -1)}</code>);
    else if (marker === "*") out.push(<strong key={key} className="font-semibold">{inline(inner)}</strong>);
    else if (marker === "_") out.push(<em key={key}>{inline(inner)}</em>);
    else if (marker === "~") out.push(<s key={key}>{inline(inner)}</s>);
    else if (url)
      out.push(
        <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="break-all underline decoration-current/30 underline-offset-2 hover:decoration-current">
          {url.replace(/^https?:\/\//, "")}
        </a>,
      );
    else out.push(whole);
    last = match.index + whole.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

type Block =
  | { kind: "text"; lines: string[] }
  | { kind: "quote"; lines: string[] }
  | { kind: "ul"; lines: string[] }
  | { kind: "ol"; lines: string[] }
  | { kind: "gap" };

const QUOTE = /^\s*>\s?/;
const BULLET = /^\s*[-•*]\s+/;
const NUMBER = /^\s*\d+[.)]\s+/;

function blocks(text: string) {
  const out: Block[] = [];
  for (const line of text.split("\n")) {
    const kind = !line.trim() ? "gap" : QUOTE.test(line) ? "quote" : BULLET.test(line) ? "ul" : NUMBER.test(line) ? "ol" : "text";
    const prev = out.at(-1);
    if (kind === "gap") {
      if (prev && prev.kind !== "gap") out.push({ kind: "gap" });
      continue;
    }
    const body = line.replace(kind === "quote" ? QUOTE : kind === "ul" ? BULLET : kind === "ol" ? NUMBER : /^/, "");
    if (prev?.kind === kind) prev.lines.push(body);
    else out.push({ kind, lines: [body] });
  }
  if (out.at(-1)?.kind === "gap") out.pop();
  return out;
}

export default function WhatsAppText({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn("break-words", className)}>
      {blocks(text).map((block, i) => {
        if (block.kind === "gap") return <div key={i} className="h-[0.85em]" aria-hidden />;
        const lines = block.lines.map((line, j) => (
          <Fragment key={j}>
            {j > 0 && <br />}
            {inline(line)}
          </Fragment>
        ));
        if (block.kind === "quote")
          return (
            <blockquote key={i} className="border-l-2 border-current/25 pl-3 opacity-90">
              {lines}
            </blockquote>
          );
        if (block.kind === "ul" || block.kind === "ol") {
          const List = block.kind;
          return (
            <List key={i} className={cn("space-y-1 pl-5", block.kind === "ul" ? "list-disc" : "list-decimal")}>
              {block.lines.map((line, j) => <li key={j}>{inline(line)}</li>)}
            </List>
          );
        }
        return <p key={i}>{lines}</p>;
      })}
    </div>
  );
}
