#!/usr/bin/env node
// Scores redrawn figures against their scans with a vision model.
//   node scripts/review-redraws.mjs SRC_DIR OUT_DIR REPORT.json [--concurrency N]
// SRC_DIR holds NAME.png scans, OUT_DIR holds NAME.png redraws.
import { createRequire } from 'node:module';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const require = createRequire('/home/adhil/projects/notebook-agent/package.json');
require('dotenv').config({ path: '/home/adhil/projects/notebook-agent/.env', quiet: true });
const { GoogleGenAI } = require('@google/genai');
const [src, out, reportPath] = process.argv.slice(2);
const concurrency = Number(process.argv[process.argv.indexOf('--concurrency') + 1]) || 4;
const MODEL = process.env.CHECK_MODEL || 'gemini-4-argon';
const ai = new GoogleGenAI({ vertexai: true, project: process.env.GOOGLE_CLOUD_PROJECT, location: 'global', httpOptions: { timeout: 300000 } });

const SYSTEM = `You are a strict reviewer. Image 1 is the ORIGINAL scan of a circuit figure, image 2 is a clean REDRAW.
Compare element by element: component values/units, node/terminal letters, current labels and arrow directions, source polarity, wiring topology, labels overlapping wires or each other, cropped parts.
Ignore watermarks, printed question text, hand-drawn annotations and symbol style in the original.
Return JSON {"score":0-10,"problems":string[]}. 9-10 = no differences; 7-8 = only cosmetic (label placement, plain-text subscripts); below 7 = a wrong or missing value, label, polarity, direction or connection.`;

const names = (await readdir(out)).filter((f) => f.endsWith('.png')).map((f) => f.slice(0, -4));
const results = [];
let next = 0;
await Promise.all(Array.from({ length: concurrency }, async () => {
  while (next < names.length) {
    const name = names[next++];
    for (let attempt = 1; attempt <= 5; attempt++) {
      try {
        const [a, b] = await Promise.all([readFile(path.join(src, `${name}.png`)), readFile(path.join(out, `${name}.png`))]);
        const r = await ai.models.generateContent({ model: MODEL, contents: [{ role: 'user', parts: [{ text: 'ORIGINAL:' }, { inlineData: { mimeType: 'image/png', data: a.toString('base64') } }, { text: 'REDRAW:' }, { inlineData: { mimeType: 'image/png', data: b.toString('base64') } }] }], config: { systemInstruction: SYSTEM, responseMimeType: 'application/json', temperature: 0 } });
        const v = JSON.parse(r.text);
        results.push({ name, score: Number(v.score) || 0, problems: v.problems || [] });
        console.log(`${name}: ${v.score}`);
        break;
      } catch (e) {
        if (attempt === 5) { results.push({ name, score: -1, problems: [String(e.message).slice(0, 120)] }); console.log(`${name}: ERROR`); }
        else await new Promise((r) => setTimeout(r, 5000 * attempt));
      }
    }
    await writeFile(reportPath, JSON.stringify(results, null, 2));
  }
}));
console.log('done');
