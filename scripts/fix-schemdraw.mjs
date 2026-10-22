#!/usr/bin/env node
// Fixes low-scoring schemdraw redraws with a Gemini vision model: it sees the scan, the current render,
// the code and the reviewer's complaints, returns corrected code, and the same reviewer re-scores it.
//   node scripts/fix-schemdraw.mjs WORKDIR REVIEW.json [--below 8] [--tries 3] [--concurrency 3]
// WORKDIR has src/NAME.png scans and out/NAME.{py,png}; PYTHON env var points at the schemdraw venv python.
import { createRequire } from 'node:module';
import { readFile, writeFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import path from 'node:path';

const require = createRequire('/home/adhil/projects/notebook-agent/package.json');
require('dotenv').config({ path: '/home/adhil/projects/notebook-agent/.env', quiet: true });
const { GoogleGenAI } = require('@google/genai');
const [work, reviewPath] = process.argv.slice(2);
const opt = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? Number(process.argv[i + 1]) : d; };
const BELOW = opt('--below', 8), TRIES = opt('--tries', 3), CONC = opt('--concurrency', 3);
const MODEL = process.env.FIX_MODEL || 'gemini-4-argon';
const PYTHON = process.env.PYTHON || 'python3';
const BUILD = path.join(path.dirname(new URL(import.meta.url).pathname), 'build-schemdraw-figure.py');
const ai = new GoogleGenAI({ vertexai: true, project: process.env.GOOGLE_CLOUD_PROJECT, location: 'global', httpOptions: { timeout: 300000 } });

const FIX_SYSTEM = `You fix schemdraw (v0.23, matplotlib backend) Python code that redraws a scanned circuit figure.
You get: the ORIGINAL scan, the CURRENT render, the current code, and a reviewer's list of problems.
Return ONLY the complete corrected Python code (no fence, no commentary). Keep: import schemdraw / import schemdraw.elements as elm / d = schemdraw.Drawing() ... (no draw/save/show; only schemdraw and math imports).
Rules: same topology, layout, labels, values, units, node letters, current names, arrow directions and source polarity as the scan; invent nothing; omit watermark and question text. Subscripts: write R_1, V_s, R_AB (auto mathtext) or $R_{AB}$. Put labels beside components (loc=, ofst=) or as free text elm.Label().at((x,y)).label('t') in empty space, never on a wire or overlapping another label. Wires must close exactly (reuse saved .start/.end). Mesh/loop current: draw a small curved arrow (elm.Arc2 or elm.CurrentLabel) inside the loop with its label, direction as in the scan. Battery long plate = positive terminal. If you are unsure about a detail of the scan, keep your best reading.`;
const REVIEW_SYSTEM = `You are a strict reviewer. Image 1 is the ORIGINAL scan of a circuit figure, image 2 is a clean REDRAW.
Compare element by element: component values/units, node/terminal letters, current labels and arrow directions, source polarity, wiring topology, labels overlapping wires or each other, cropped parts.
Ignore watermarks, printed question text, hand-drawn annotations and symbol style in the original.
Return JSON {"score":0-10,"problems":string[]}. 9-10 = no differences; 7-8 = only cosmetic (label placement, plain-text subscripts); below 7 = a wrong or missing value, label, polarity, direction or connection.`;

const img = async (p) => ({ inlineData: { mimeType: 'image/png', data: (await readFile(p)).toString('base64') } });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function ask(config, parts) {
  for (let a = 1; ; a++) {
    try { return (await ai.models.generateContent({ model: MODEL, contents: [{ role: 'user', parts }], config })).text; }
    catch (e) { if (a >= 5) throw e; await sleep(5000 * a); }
  }
}
const build = (name) => new Promise((resolve, reject) => execFile(PYTHON, [BUILD, work, name], { timeout: 90000 }, (err, _o, se) => err ? reject(new Error(String(se).trim().split('\n').pop())) : resolve()));
const review = async (name) => JSON.parse(await ask({ systemInstruction: REVIEW_SYSTEM, responseMimeType: 'application/json', temperature: 0 },
  [{ text: 'ORIGINAL:' }, await img(`${work}/src/${name}.png`), { text: 'REDRAW:' }, await img(`${work}/out/${name}.png`)]));
const extract = (t) => { const m = t.match(/```(?:python)?\n([\s\S]*?)```/); return (m ? m[1] : t).trim(); };

const todo = JSON.parse(await readFile(reviewPath, 'utf8')).filter((x) => x.score < BELOW);
console.log(`${todo.length} figure(s) below ${BELOW}, fixing with ${MODEL}`);
const results = [];
let next = 0;
await Promise.all(Array.from({ length: CONC }, async () => {
  while (next < todo.length) {
    const item = todo[next++];
    const name = item.name, codeFile = `${work}/out/${name}.py`;
    const original = await readFile(codeFile, 'utf8');
    let best = { score: item.score, code: original }, problems = item.problems;
    for (let t = 1; t <= TRIES && best.score < BELOW; t++) {
      try {
        const current = await readFile(codeFile, 'utf8');
        const code = extract(await ask({ systemInstruction: FIX_SYSTEM, temperature: 0.2, maxOutputTokens: 16000 },
          [{ text: 'ORIGINAL scan:' }, await img(`${work}/src/${name}.png`), { text: 'CURRENT render:' }, await img(`${work}/out/${name}.png`), { text: `Current code:\n${current}\n\nReviewer problems:\n- ${problems.join('\n- ')}` }]));
        await writeFile(codeFile, code);
        await build(name);
        const v = await review(name);
        console.log(`${name} try ${t}: ${v.score}${v.problems.length ? ' — ' + v.problems[0].slice(0, 100) : ''}`);
        if (v.score > best.score) best = { score: v.score, code };
        problems = v.problems;
      } catch (e) { console.log(`${name} try ${t}: ${String(e.message).slice(0, 100)}`); await writeFile(codeFile, best.code); }
    }
    await writeFile(codeFile, best.code);   // keep the best-scoring version
    await build(name).catch(() => {});
    results.push({ name, before: item.score, after: best.score });
    await writeFile(`${work}/fix-gemini.json`, JSON.stringify(results, null, 2));
  }
}));
console.log('done', JSON.stringify(results.map((r) => `${r.name.slice(0, 14)} ${r.before}->${r.after}`)));
