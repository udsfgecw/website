import { memo } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import IdentityGraph from "./IdentityGraph";

const remarkPlugins = [remarkGfm, remarkMath];
const rehypePlugins: Parameters<typeof ReactMarkdown>[0]["rehypePlugins"] = [[rehypeKatex, { strict: false }]];

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
  // a quote opening with "Watch out" is a warning about a common mistake
  blockquote({ node, children }) {
    const first = node?.children.find((child) => child.type === "element" && child.tagName === "p");
    const lead = first && first.type === "element" ? first.children[0] : undefined;
    const warn = lead?.type === "element" && lead.tagName === "strong" && lead.children[0]?.type === "text" && lead.children[0].value.startsWith("Watch out");
    return <blockquote className={warn ? "warn" : undefined}>{children}</blockquote>;
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
