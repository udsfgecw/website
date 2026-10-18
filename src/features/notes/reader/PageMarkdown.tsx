import { memo } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import IdentityGraph from "./IdentityGraph";
import PlotFigure, { type PlotSpec } from "./PlotFigure";
import TreeDiagram from "./TreeDiagram";

const remarkPlugins = [remarkGfm, remarkMath];
const rehypePlugins: Parameters<typeof ReactMarkdown>[0]["rehypePlugins"] = [[rehypeKatex, { strict: false }]];

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
  pre({ children }) {
    return <div>{children}</div>;
  },
  img({ src, alt }) {
    return <img src={src} alt={alt || "Mathematics diagram"} loading="lazy" decoding="async" />;
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
