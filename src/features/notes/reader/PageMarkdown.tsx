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
import CodeBlock from "./CodeBlock";
import IdentityGraph from "./IdentityGraph";
import PlotFigure, { type PlotSpec } from "./PlotFigure";
import TreeDiagram from "./TreeDiagram";
import { module3DiagramDimensions } from "../python-module-3/diagramDimensions";
import { module4DiagramDimensions } from "../python-module-4/diagramDimensions";
import { chemistryModule1DiagramDimensions } from "../chemistry-module-1/diagramDimensions";
import { chemistryModule2DiagramDimensions } from "../chemistry-module-2/diagramDimensions";
import { chemistryModule3DiagramDimensions } from "../chemistry-module-3/diagramDimensions";
import { chemistryModule4DiagramDimensions } from "../chemistry-module-4/diagramDimensions";

const diagramDimensions: Record<string, { width: number; height: number }> = {
  ...module3DiagramDimensions,
  ...module4DiagramDimensions,
  ...chemistryModule1DiagramDimensions,
  ...chemistryModule2DiagramDimensions,
  ...chemistryModule3DiagramDimensions,
  ...chemistryModule4DiagramDimensions,
};

const remarkPlugins = [remarkGfm, remarkMath];
const rehypePlugins: Parameters<typeof ReactMarkdown>[0]["rehypePlugins"] = [
  [rehypeKatex, { strict: false }],
  // Only the languages the notes use are bundled; diagram fences (mermaid, jsxgraph) are left alone.
  [rehypeHighlight, { languages: { bash, c, javascript, json, python }, plainText: ["text"], ignoreMissing: true, detect: false }],
];

type HastNode = { type: string; value?: string; children?: HastNode[] };
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
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre({ node, children }) {
    const className = isValidElement<{ className?: string }>(children) ? children.props.className : undefined;
    if (className?.includes("language-mermaid") || className?.includes("language-jsxgraph")) return <div>{children}</div>;
    const language = /language-([\w+-]+)/.exec(className ?? "")?.[1];
    return (
      <CodeBlock language={language} text={textOf(node as HastNode).replace(/\n$/, "")}>
        {children}
      </CodeBlock>
    );
  },
  img({ src, alt }) {
    const moduleDiagram = typeof src === "string" && /^\/notes\/cse\/s1\/(python\/module-[234]|chemistry\/module-[1-4])\/assets\/.*\.svg$/.test(src);
    const dimensions = typeof src === "string" ? diagramDimensions[src] : undefined;
    return <img src={src} alt={alt || "Notes diagram"} {...dimensions} className={moduleDiagram ? "notes-module-diagram" : undefined} loading="lazy" decoding="async" />;
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

/* One page of notes. Memoised, so scrolling (which updates the reader) doesn't re-render the maths. */
export default memo(function PageMarkdown({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins} components={components}>
      {content}
    </ReactMarkdown>
  );
});
