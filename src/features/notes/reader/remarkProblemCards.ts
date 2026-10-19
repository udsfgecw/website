import type { Blockquote, Root, RootContent } from "mdast";

const textOf = (node: { value?: string; children?: unknown[] }): string =>
  node.value ?? (node.children ?? []).map((child) => textOf(child as Parameters<typeof textOf>[0])).join("");

/** Keep a worked example's heading, question, calculations and answer in one card. */
export default function remarkProblemCards() {
  return (tree: Root) => {
    const result: RootContent[] = [];
    let practice = false;

    for (let i = 0; i < tree.children.length; i++) {
      const node = tree.children[i];
      if (node.type === "heading") {
        const title = textOf(node).trim();
        practice = /^Numerical practice problems$/i.test(title);

        // The plural "Worked examples" introduces a group, not one large card.
        if (/^(?:Example\s+\d+\b|Worked example\s*:)/i.test(title)) {
          const children: RootContent[] = [node];
          while (i + 1 < tree.children.length) {
            const next = tree.children[i + 1];
            if (next.type === "heading" && next.depth <= node.depth) break;
            children.push(next);
            i++;
          }
          while (children.at(-1)?.type === "thematicBreak") children.pop();
          result.push({
            type: "blockquote",
            children: children as Blockquote["children"],
            data: { hName: "div", hProperties: { className: ["notes-problem-card"] } },
          });
          continue;
        }
      }

      if (practice && node.type === "list" && node.ordered) {
        node.data = { ...node.data, hProperties: { ...node.data?.hProperties, className: ["notes-practice-problems"] } };
        for (const item of node.children) {
          item.data = { ...item.data, hProperties: { ...item.data?.hProperties, className: ["notes-practice-problem"] } };
        }
      }
      result.push(node);
    }
    tree.children = result;
  };
}
