/* Adds the construction, step by step, to each line problem in the Projection of Lines notes.
   Run from the site folder:  npx tsx scripts/render-line-steps.tsx
   Each ```line-projection block gets four SVG images, one per construction step, with a caption.
   Safe to run again: blocks that already have their step images are left alone. */
import fs from 'node:fs';
import path from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Epure from '../src/features/notes/reader/graphics/Epure';
import { solveLine, type LineProjectionSpec } from '../src/features/notes/reader/graphics/lineProjection';

const NOTES = path.resolve('src/features/notes/graphics-m1/notes.md');
const OUT = path.resolve('public/notes/cse/s1/graphics/m1/assets');
const PUBLIC = '/notes/cse/s1/graphics/m1/assets';

const CAPTIONS = [
  'Step 1: fix end A on one projector. a′ is its height above XY (HP) and a its distance in front of the VP, below XY.',
  'Step 2: plot end B. b′ and b sit on one projector; the front view a′b′ and top view ab are the lines joining them.',
  'Step 3: rotate the line to its true length. TL is drawn at θ above XY in the front view and at φ below XY in the top view; the arcs give the view lengths.',
  'Step 4: find the traces. Extend the views to XY at h′ and v; the perpendiculars give HT and VT.',
];

/** The drawing for one step, as a standalone SVG file. */
function stepSvg(spec: LineProjectionSpec, step: number): string {
  // a room measured in metres is drawn larger, as the site's figure does
  const factor = spec.unit === 'm' ? 25 : 1;
  const scaled = factor === 1 ? spec : { ...spec, A: { y: spec.A.y * factor, z: spec.A.z * factor }, B: spec.B && { y: spec.B.y * factor, z: spec.B.z * factor }, length: spec.length * factor };
  const solved = solveLine(scaled);
  let markup = renderToStaticMarkup(createElement(Epure, { solved, divisor: factor, step }));
  const svg = /<svg[\s\S]*<\/svg>/.exec(markup)![0];
  return svg
    .replace(/\sstyle="[^"]*"/, ' width="640"')
    .replace(/<svg /, '<svg xmlns="http://www.w3.org/2000/svg" ')
    .replace(/[«»]/g, '_')        // React's generated ids are not valid in a file's url(#...) references
    .replace(/&quot;/g, '"');
}

function main() {
  const source = fs.readFileSync(NOTES, 'utf8');
  fs.mkdirSync(OUT, { recursive: true });
  let count = 0;
  let index = 0;
  const updated = source.replace(/```line-projection\n([\s\S]*?)\n```(\n\n\*\*Step-by-step drawing\*\*)?/g, (block, json: string, already?: string) => {
    if (already) { index++; return block; }   // steps already added: keep them
    index++;
    const spec = JSON.parse(json) as LineProjectionSpec;
    const steps = CAPTIONS.map((caption, i) => {
      const name = `line-${String(index).padStart(2, '0')}-step-${i + 1}.svg`;
      fs.writeFileSync(path.join(OUT, name), stepSvg(spec, i + 1) + '\n');
      return `![${caption.replace(/[[\]]/g, '')}](${PUBLIC}/${name})\n\n*${caption}*`;
    });
    count++;
    return `${block}\n\n**Step-by-step drawing**\n\n${steps.join('\n\n')}`;
  });
  fs.writeFileSync(NOTES, updated);
  console.log(`Added step drawings to ${count} problem(s); ${index} line problem(s) in all.`);
}
main();
