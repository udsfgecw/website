import { forwardRef } from "react";
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
    return <div className="reader-code-block">{children}</div>;
  },
  img({ src, alt }) {
    return <img src={src} alt={alt || "Mathematics diagram"} loading="eager" decoding="async" />;
  },
  // page headings sit under the reader's own h1
  h1({ children }) {
    return <h2>{children}</h2>;
  },
};

/* One page of notes: markdown with KaTeX maths. */
const NotebookPage = forwardRef<HTMLElement, { page: number; content: string; size: number }>(function NotebookPage(
  { page, content, size },
  ref,
) {
  return (
    <article
      id="notebook-page"
      ref={ref}
      tabIndex={-1}
      className="reader-article"
      style={{ fontSize: size }}
      aria-label={`Notebook page ${page}`}
    >
      <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
});

export default NotebookPage;
