type Node = { type: string; value?: string; children?: Node[]; data?: Record<string, unknown> };

const isTag = (node: Node, tag: string) => node.type === "html" && node.value?.trim().toLowerCase() === tag;

/* The notes write underline as inline <u>…</u>. Markdown renders raw HTML as text, so pair each
   opening and closing tag within a block and wrap what lies between them in a <u> element. */
function wrapUnderlines(children: Node[]): Node[] {
  const result: Node[] = [];
  let open: Node[] | null = null;
  for (const child of children) {
    if (isTag(child, "<u>")) {
      open = [];
      continue;
    }
    if (open && isTag(child, "</u>")) {
      result.push({ type: "underline", children: open, data: { hName: "u" } });
      open = null;
      continue;
    }
    if (open) open.push(child);
    else result.push(child);
  }
  // An unclosed <u> stays as written rather than underlining the rest of the block.
  if (open) result.push(...open.map((node) => node));
  return result;
}

function walk(node: Node) {
  if (!node.children) return;
  node.children = wrapUnderlines(node.children);
  node.children.forEach(walk);
}

/** Renders the notes' inline <u>…</u> as underlined text. */
export default function remarkUnderline() {
  return (tree: Node) => walk(tree);
}
