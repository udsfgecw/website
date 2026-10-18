import { memo } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import IdentityGraph from "./IdentityGraph";

const remarkPlugins = [remarkGfm, remarkMath];
const rehypePlugins: Parameters<typeof ReactMarkdown>[0]["rehypePlugins"] = [[rehypeKatex, { strict: false }]];

type HastNode = { type: string; value?: string; children?: HastNode[] };
const textOf = (node?: HastNode): string =>
  !node ? "" : node.type === "text" ? node.value || "" : (node.children || []).map(textOf).join("");
// Matches the notes' question lines: "Q.", "Q Find…", "Q_3." and "Q6." (KaTeX text).
const isQuestion = (node?: HastNode) => /^Q(?=[\s._:\d]|$)/.test(textOf(node).trimStart());

const components: Components = {
  code({ className, children, ...props }) {
    return className === "language-jsxgraph" ? (
      <IdentityGraph />
    ) : (
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
  // page headings sit under the notes' own h1
  h1({ children }) {
    return <h2>{children}</h2>;
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
