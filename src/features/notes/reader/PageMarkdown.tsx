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

function Plot({ source }: { source: string }) {
  let spec: PlotSpec;
  try {
    spec = JSON.parse(source);
  } catch {
    return null;
  }
  // Module 1's only plotted function is f(x) = x, which has its own drawing.
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
