import { mediaPath, resolveMediaUrl } from "@/lib/media";
import { GRAPHICS_FIGURE_DIMENSIONS } from "@/data/graphics-figure-dimensions";
import { IMPORTED_FIGURE_DIMENSIONS } from "@/data/imported-figure-dimensions";
import { MEDIA_DIMENSIONS } from "@/data/media-dimensions";
import { isValidElement, memo } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import bash from "highlight.js/lib/languages/bash";
import c from "highlight.js/lib/languages/c";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import python from "highlight.js/lib/languages/python";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkProblemCards from "./remarkProblemCards";
import CodeBlock from "./CodeBlock";
import IdentityGraph from "./IdentityGraph";
import PlotFigure, { type PlotSpec } from "./PlotFigure";
import TreeDiagram from "./TreeDiagram";
import KekuleViewer from "./KekuleViewer";
import LineProjectionFigure from "./graphics/LineProjectionFigure";
import { module3DiagramDimensions } from "../python-module-3/diagramDimensions";
import { module4DiagramDimensions } from "../python-module-4/diagramDimensions";

const plainRemarkPlugins = [remarkGfm];
const mathRemarkPlugins = [remarkGfm, remarkMath];
const plainProblemPlugins = [remarkGfm, remarkProblemCards];
const mathProblemPlugins = [remarkGfm, remarkMath, remarkProblemCards];
const mathPlugins: NonNullable<Parameters<typeof ReactMarkdown>[0]["rehypePlugins"]> = [
  [rehypeKatex, { strict: false }],
];
const highlightPlugins: NonNullable<Parameters<typeof ReactMarkdown>[0]["rehypePlugins"]> = [
  // Only the languages the notes use are bundled; diagram fences (mermaid, jsxgraph) are left alone.
  [rehypeHighlight, { languages: { bash, c, javascript, json, python }, plainText: ["text"], ignoreMissing: true, detect: false }],
];
const allPlugins = [...mathPlugins, ...highlightPlugins];
const noPlugins: typeof mathPlugins = [];
const diagramDimensions = { ...MEDIA_DIMENSIONS, ...module3DiagramDimensions, ...module4DiagramDimensions, ...GRAPHICS_FIGURE_DIMENSIONS, ...IMPORTED_FIGURE_DIMENSIONS };
// Engineering Graphics drawings cropped from the source sheets: full width, linked to the full-size crop.
const graphicsFigure = /^\/notes\/cse\/s1\/graphics\/module-[1-4]\/assets\/.*\.webp$/;

type HastNode = {
  type: string;
  tagName?: string;
  value?: string;
  properties?: { className?: string[] };
  children?: HastNode[];
};
const textOf = (node?: HastNode): string =>
  !node ? "" : node.type === "text" ? node.value || "" : (node.children || []).map(textOf).join("");
// Matches the lines that start a worked question: "Example.", "Q.", "Q Find…", "Q_3." and "Q6." (KaTeX text).
const isQuestion = (node?: HastNode) => /^(Example\b|Q(?=[\s._:\d]|$))/.test(textOf(node).trimStart());

function Plot({ source }: { source: string }) {
  let spec: PlotSpec;
  try {
    spec = JSON.parse(source);
  } catch {
    return null;
  }
  // The only plotted function is f(x) = x (Module 1), which has its own drawing.
  return spec.functions?.length ? <IdentityGraph /> : <PlotFigure spec={spec} />;
}

const components: Components = {
  code({ className, children, ...props }) {
    if (className === "language-jsxgraph") return <Plot source={String(children)} />;
    if (className === "language-mermaid") return <TreeDiagram source={String(children)} />;
    if (className === "language-kekule" || className === "language-chem") return <KekuleViewer source={String(children)} />;
    if (className === "language-line-projection") return <LineProjectionFigure source={String(children)} />;
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre({ node, children }) {
    // Read the original fence from the Markdown AST. A custom `code` renderer
    // can replace its React child with a diagram, removing the language class.
    const codeNode = (node as HastNode | undefined)?.children?.find((child) => child.type === "element" && child.tagName === "code");
    const classes = codeNode?.properties?.className ?? [];
    const languageClass = classes.find((name) => name.startsWith("language-"));
    const language = languageClass?.slice("language-".length)
      ?? (isValidElement<{ className?: string }>(children) ? /language-([\w+-]+)/.exec(children.props.className ?? "")?.[1] : undefined);
    const source = codeNode ? textOf(codeNode).replace(/\n$/, "") : textOf(node as HastNode).replace(/\n$/, "");

    if (language === "jsxgraph") return <Plot source={source} />;
    if (language === "mermaid") return <TreeDiagram source={source} />;
    if (language === "kekule" || language === "chem") return <KekuleViewer source={source} />;
    if (language === "line-projection") return <LineProjectionFigure source={source} />;
    return (
      <CodeBlock language={language} text={source}>
        {children}
      </CodeBlock>
    );
  },
  img({ src, alt }) {
    const localPath = typeof src === "string" ? mediaPath(src) : undefined;
    const imageSrc = typeof src === "string" ? resolveMediaUrl(src) : src;
    const moduleDiagram = typeof src === "string" && (
      /^\/notes\/cse\/s1\/python\/module-[234]\/assets\/.*\.webp$/.test(localPath!)
      || /^\/notes\/cse\/s1\/chemistry\/module-1\/assets\/.*-clean\.webp$/.test(localPath!)
      || /^\/notes\/cse\/s1\/chemistry\/module-2\/assets\/.*\.webp$/.test(localPath!)
      || /^\/notes\/cse\/s1\/chemistry\/module-3\/assets\/.*-clean\.webp$/.test(localPath!)
      || /^\/notes\/(?:ece|eee)\/s1\/chemistry\/module-[1-4]\/assets\/.*\.webp$/.test(localPath!)
      || /^\/assets\/notes\/ece\/s1\/chemistry\/module-1\/.*\.webp$/.test(localPath!)
    );
    const graphics = typeof src === "string" && graphicsFigure.test(localPath!);
    const dimensions = typeof src === "string" ? diagramDimensions[localPath!] : undefined;
    const image = <img src={imageSrc} alt={alt || "Notes diagram"} {...dimensions} className={moduleDiagram || graphics ? "notes-module-diagram" : undefined} loading="lazy" decoding="async" />;
    return graphics ? <a href={imageSrc} target="_blank" rel="noopener" className="notes-figure-link" title="Open the full-size drawing">{image}</a> : image;
  },
  a({ href, children, ...props }) {
    return <a href={href ? resolveMediaUrl(href) : href} {...props}>{children}</a>;
  },
  p({ node, children }) {
    return <p className={isQuestion(node as HastNode) ? "notes-question" : undefined}>{children}</p>;
  },
  // a quote opening with a bold label ("Watch out.", "Key idea.") becomes a tagged note box
  blockquote({ node, children }) {
    const first = node?.children.find((child) => child.type === "element" && child.tagName === "p");
    const lead = first && first.type === "element" ? first.children[0] : undefined;
    const text = lead?.type === "element" && lead.tagName === "strong" && lead.children[0]?.type === "text" ? lead.children[0].value : "";
    const label = /^[^.:]{2,40}\.$/.test(text) ? text.slice(0, -1) : undefined;
    const warn = text.startsWith("Watch out");
    const key = /^(Key idea|Important)/.test(text);
    return (
      <blockquote className={warn ? "warn" : key ? "key" : undefined} data-label={label}>
        {children}
      </blockquote>
    );
  },
  // page headings sit under the notes' own h1
  h1({ children }) {
    return <h2>{children}</h2>;
  },
  h2({ children }) {
    return <h3>{children}</h3>;
  },
  h3({ children }) {
    return <h4>{children}</h4>;
  },
  h4({ children }) {
    return <h5>{children}</h5>;
  },
};

function normalizeMath(text: string): string {
  return text
    .replace(/(?<![\\a-zA-Z])rac\{/g, "\\frac{")
    .replace(/^(\s*)\$\$(\\begin\{[a-zA-Z*]+\}[\s\S]*?\\end\{[a-zA-Z*]+\})\$\$(\s*)$/gm, (_, before, inner, after) => `${before}$$\n${inner}\n$$${after}`)
    .replace(/^(\s*)\$\$(\\begin\{[a-zA-Z*]+\})/gm, (_, before, inner) => `${before}$$\n${inner}`)
    .replace(/(\\end\{[a-zA-Z*]+\})\$\$(\s*)$/gm, (_, inner, after) => `${inner}\n$$${after}`)
    .replace(/^(\s*)\$\$(.+?)\$\$(\s*)$/gm, (match, before, inner, after) => {
      if (inner.includes("\\\\") || inner.includes("&") || inner.includes("\\tag")) {
        return `${before}$$\n${inner.trim()}\n$$${after}`;
      }
      return match;
    });
}

/* One page of notes. Memoised, so scrolling (which updates the reader) doesn't re-render the maths. */
export default memo(function PageMarkdown({ content, outlinedProblems = false }: { content: string; outlinedProblems?: boolean }) {
  // Most Python pages have no maths, and many maths pages have no code. Avoid
  // walking their entire syntax trees with plugins that have nothing to render.
  const maths = content.includes("$");
  const code = /(?:`{3,}|~{3,})/.test(content);
  const normalized = maths ? normalizeMath(content) : content;
  const rehypePlugins = maths ? (code ? allPlugins : mathPlugins) : (code ? highlightPlugins : noPlugins);
  const remarkPlugins = outlinedProblems
    ? (maths ? mathProblemPlugins : plainProblemPlugins)
    : (maths ? mathRemarkPlugins : plainRemarkPlugins);
  return (
    <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins} components={components}>
      {normalized}
    </ReactMarkdown>
  );
});
