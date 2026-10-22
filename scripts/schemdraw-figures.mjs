#!/usr/bin/env node
// Redraws circuit scans with schemdraw: a vision model reads the scan and writes schemdraw Python,
// scripts/run-schemdraw.py runs it, and a second call compares the render with the scan and asks
// for fixes. Labels are exact and the output is vector; text-model quota is far looser than image quota.
//   node scripts/schemdraw-figures.mjs <notes.md> --out DIR [--only SUBSTRING] [--limit N] [--concurrency N] [--force]
import { createRequire } from 'node:module';
import { mkdir, readFile, writeFile, mkdtemp } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';

const AGENT_DIR = '/home/adhil/projects/notebook-agent';
const require = createRequire(path.join(AGENT_DIR, 'package.json'));
require('dotenv').config({ path: path.join(AGENT_DIR, '.env'), quiet: true });
const { GoogleGenAI } = require('@google/genai');
const { createCanvas, loadImage } = require('@napi-rs/canvas');

const DRAW_MODEL = process.env.DRAW_MODEL || 'gemini-3.8-flash';
const MAX_TRIES = 3;
const MIN_SCORE = 8;

const o = { notes: '', out: '', only: '', limit: Infinity, concurrency: 4, force: false };
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--out') o.out = argv[++i]; else if (a === '--only') o.only = argv[++i];
  else if (a === '--limit') o.limit = Number(argv[++i]); else if (a === '--concurrency') o.concurrency = Number(argv[++i]);
  else if (a === '--force') o.force = true; else if (!o.notes) o.notes = a;
}
if (!o.notes || !o.out) { console.error('usage: schemdraw-figures.mjs <notes.md> --out DIR [--only S] [--limit N] [--concurrency N] [--force]'); process.exit(1); }

const ai = new GoogleGenAI({ vertexai: true, project: process.env.GOOGLE_CLOUD_PROJECT, location: process.env.GOOGLE_CLOUD_LOCATION || 'global', httpOptions: { timeout: 300000 } });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function withRetry(label, fn) {
  for (let attempt = 1; ; attempt++) {
    try { return await fn(); } catch (e) {
      const msg = String(e?.message || e);
      const quota = /429|RESOURCE_EXHAUSTED|quota|rate.?limit/i.test(msg);
      if (attempt >= (quota ? 12 : 4)) throw e;
      const delay = quota ? Math.min(120000, 10000 * 2 ** Math.min(attempt - 1, 3)) : 3000 * attempt;
      console.log(`  ${label}: ${quota ? 'quota' : 'error'}, retry in ${Math.round(delay / 1000)}s`);
      await sleep(delay);
    }
  }
}

function findFigures(markdown) {
  const lines = markdown.split(/\r?\n/);
  const figures = [];
  lines.forEach((line, i) => {
    const m = line.match(/^!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/);
    if (!m) return;
    const [, alt, url] = m;
    const name = path.basename(new URL(url).pathname).replace(/\.\w+$/, '');
    if (!/-source$/.test(name) || /portrait|photo/i.test(alt)) return;
    const before = lines.slice(Math.max(0, i - 8), i).filter((l) => l.trim() && !l.startsWith('![')).join('\n').slice(-600);
    figures.push({ alt, url, name, context: before });
  });
  return figures;
}

const PYTHON = process.env.SCHEMDRAW_PYTHON || 'python3';
const RUNNER = path.join(path.dirname(new URL(import.meta.url).pathname), 'run-schemdraw.py');

const STYLE = `You turn a scan of an electrical-circuit figure into schemdraw (v0.23) Python code.
Output ONLY the Python code (no markdown fence, no commentary). Available names: schemdraw, elm (= schemdraw.elements), math. Create the drawing as \`d\`.

Template:
import schemdraw
import schemdraw.elements as elm
d = schemdraw.Drawing()
d.config(unit=3, fontsize=14, lw=2, color='#14213d')
d += elm.SourceV().up().label('50 V', loc='left')   # elements chain: each starts where the previous ended
d += elm.Resistor().right().label('5 Ω')
d += elm.Dot().label('A', loc='top')
(Do not use "with"; do not call draw/save/show; the runner saves \`d\`.)

Cheat sheet:
- Direction: .up() .down() .left() .right() .theta(deg) (diagonals: .theta(-45)); .length(n) sets length in units; .at((x, y)) or .at(elem.end/.start/.center, elem.N...) places it; .to((x,y)) draws to a point; .endpoints(start, end) draws between two points.
- Wires: elm.Line(). Dots: elm.Dot() (junction/node), elm.Dot(open=True) for an open terminal. Save a node position: p = d.here, or e = d.add(elm.Resistor()...) then e.start / e.end.
- d.push() / d.pop() remember and restore the drawing position (use for branches).
- Components: elm.Resistor(), elm.SourceV() (circle voltage source; polarity shown with + - when .label('+', 'in')? use elm.BatteryCell()/elm.Battery() for plate symbols), elm.SourceI() (current source, arrow inside), elm.Capacitor(), elm.Inductor(), elm.Ground(), elm.Switch(), elm.Ammeter(), elm.Voltmeter(), elm.Lamp(), elm.Diode().
- Labels: .label('5 Ω', loc='top'|'bot'|'left'|'right', ofst=0.2); value text must match the scan exactly (Ω, μ, subscripts like 'R$_1$'; math with $..$). Terminal letters: elm.Dot().label('A', loc='top').
- Source polarity: for elm.SourceV the + terminal is at the arrow tip (end); draw it so the + sign sits where the scan shows it, and add .label('+', loc='start')/.label('−', loc='end') style marks if needed.
- Current arrows beside a wire: elm.CurrentLabel(top=True, ofst=0.3).at(element) or elm.CurrentLabelInline(direction='in'|'out').at(element) with .label('I$_1$'). Loop (mesh) current: elm.LoopCurrent([elem1, elem2, elem3, elem4], pad=0.8, direction='cw'|'ccw').label('I$_1$') where the elements are the four elements around the loop in order (use d.add(...) results).
- Voltage across an element: elm.Annotate or element.label('+', 'start') ... keep to what the scan shows.

Rules:
- Reproduce the EXACT topology, relative positions and orientation of the scan (diamond bridge stays a diamond, a delta stays a triangle). Do not add components, labels, values or ground symbols that are not in the scan.
- Every label, value and unit, node/terminal letter, current name and arrow direction exactly as the scan. Omit watermark, logo, question text and scan noise.
- Keep wires closed: make endpoints meet exactly (reuse saved .end positions) so no line is left open.
- If the scan colours some elements differently, keep the same elements and make those .linewidth(3.5).
- Keep the code short and robust; prefer a few explicit coordinates over long chains if the layout is irregular.`;

const DRAW_USER = (f, feedback) => `Write schemdraw code for this scan.\nCaption: ${f.alt}\nNotes context (do not draw):\n${f.context}${feedback ? `\n\nYOUR PREVIOUS CODE WAS REJECTED. Fix exactly these problems and return the full corrected code:\n${feedback}` : ''}`;

const CHECK_SYSTEM = `You are a strict reviewer. Image 1 is an ORIGINAL scan of a figure, image 2 is a REDRAW. Compare element by element (the redraw uses schemdraw's standard symbols and fonts, so ignore symbol style differences): components and values/units, node/terminal letters, current and mesh-current labels and arrow directions, source polarity, wiring topology, junction dots, text overlapping lines or cropped.
Return JSON {"score":0-10,"problems":string[]}. 10 = same content, clean. Score 8+ only when no label, value, polarity, direction or connection differs. Watermark/question text absent from the redraw is correct.`;

const fetchBytes = async (url) => { const r = await fetch(url, { signal: AbortSignal.timeout(60000) }); if (!r.ok) throw new Error(`HTTP ${r.status} ${url}`); return Buffer.from(await r.arrayBuffer()); };

async function toPng(buf) {
  const img = await loadImage(buf);
  const c = createCanvas(img.width, img.height);
  const ctx = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, img.width, img.height); ctx.drawImage(img, 0, 0);
  return c.toBuffer('image/png');
}

/** Rasterises an SVG string; throws when the SVG does not parse. */
async function renderSvg(svg, width = 1400) {
  const probe = await loadImage(Buffer.from(svg));
  const scale = width / probe.width;
  const w = width, h = Math.round(probe.height * scale);
  const c = createCanvas(w, h);
  const ctx = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); ctx.drawImage(probe, 0, 0, w, h);
  return { png: c.toBuffer('image/png'), webp: c.toBuffer('image/webp', 92), w, h };
}

const extractCode = (text) => { const m = text.match(/```(?:python)?\n([\s\S]*?)```/); const code = (m ? m[1] : text).trim(); if (!/schemdraw/.test(code)) throw new Error('no schemdraw code in answer'); return code; };

/** Runs the code in the restricted runner; resolves to the SVG text or rejects with the Python error. */
async function runCode(code) {
  const dir = await mkdtemp(path.join(tmpdir(), 'schemdraw-'));
  const codeFile = path.join(dir, 'figure.py'), svgFile = path.join(dir, 'figure.svg');
  await writeFile(codeFile, code);
  await new Promise((resolve, reject) => execFile(PYTHON, ['-I', RUNNER, codeFile, svgFile], { timeout: 60000, cwd: dir }, (err, _out, stderr) => err ? reject(new Error(String(stderr || err.message).trim().split('\n').slice(-3).join(' | '))) : resolve()));
  return readFile(svgFile, 'utf8');
}

async function draw(source, f, feedback, previous) {  // resolves to python code
  const parts = [{ inlineData: { mimeType: 'image/png', data: source.toString('base64') } }, { text: DRAW_USER(f, feedback) }];
  if (previous) parts.push({ text: `Your previous code:\n${previous}` });
  const r = await withRetry(`draw ${f.name}`, () => ai.models.generateContent({ model: DRAW_MODEL, contents: [{ role: 'user', parts }], config: { systemInstruction: STYLE, temperature: 0.2, maxOutputTokens: 32768 } }));
  return extractCode(r.text);
}

async function review(source, redraw) {
  const r = await withRetry('check', () => ai.models.generateContent({
    model: DRAW_MODEL,
    contents: [{ role: 'user', parts: [{ text: 'ORIGINAL:' }, { inlineData: { mimeType: 'image/png', data: source.toString('base64') } }, { text: 'REDRAW:' }, { inlineData: { mimeType: 'image/png', data: redraw.toString('base64') } }] }],
    config: { systemInstruction: CHECK_SYSTEM, responseMimeType: 'application/json', temperature: 0 },
  }));
  const v = JSON.parse(r.text);
  return { score: Number(v.score) || 0, problems: v.problems || [] };
}

async function redo(f, report) {
  const source = await toPng(await fetchBytes(f.url));
  let feedback = '', previous = '', best = null;
  for (let attempt = 1; attempt <= MAX_TRIES; attempt++) {
    let code = '', svg, rendered, verdict;
    try { code = await draw(source, f, feedback, previous); svg = await runCode(code); rendered = await renderSvg(svg); verdict = await review(source, rendered.png); }
    catch (e) { console.log(`  ${f.name} try ${attempt}: ${String(e.message).slice(0, 100)}`); feedback = `The code failed: ${String(e.message).slice(0, 250)}`; previous = code; continue; }
    console.log(`  ${f.name} try ${attempt}: score ${verdict.score}${verdict.problems.length ? ` — ${verdict.problems.slice(0, 2).join('; ').slice(0, 130)}` : ''}`);
    if (!best || verdict.score > best.verdict.score) best = { code, svg, rendered, verdict };
    if (verdict.score >= MIN_SCORE) break;
    feedback = verdict.problems.join('\n'); previous = code;
  }
  if (!best) throw new Error('no renderable SVG after retries');
  const base = path.join(o.out, `${f.name.replace(/-source$/, '')}-clean`);
  await writeFile(`${base}.svg`, best.svg);
  await writeFile(`${base}.py`, best.code);
  await writeFile(`${base}.webp`, best.rendered.webp);
  report.push({ name: f.name, url: f.url, file: `${base}.webp`, svg: `${base}.svg`, score: best.verdict.score, problems: best.verdict.problems, status: best.verdict.score >= MIN_SCORE ? 'ok' : 'needs-review' });
}

await mkdir(o.out, { recursive: true });
const reportPath = path.join(o.out, 'schemdraw-report.json');
let report = []; try { report = JSON.parse(await readFile(reportPath, 'utf8')); } catch {}
const done = new Set(report.map((r) => r.name));
let figures = findFigures(await readFile(o.notes, 'utf8')).filter((f) => !o.only || f.name.includes(o.only));
if (!o.force) figures = figures.filter((f) => !done.has(f.name));
figures = figures.slice(0, o.limit);
console.log(`${figures.length} figure(s), schemdraw code by ${DRAW_MODEL}`);
let next = 0;
await Promise.all(Array.from({ length: o.concurrency }, async () => {
  while (next < figures.length) {
    const f = figures[next++];
    console.log(`[${next}/${figures.length}] ${f.name}`);
    try { await redo(f, report); } catch (e) { console.log(`  FAILED ${f.name}: ${String(e.message).slice(0, 160)}`); report.push({ name: f.name, url: f.url, status: 'failed', error: String(e.message).slice(0, 300) }); }
    await writeFile(reportPath, JSON.stringify(report, null, 2));
  }
}));
const count = (s) => report.filter((r) => r.status === s).length;
console.log(`done: ${count('ok')} ok, ${count('needs-review')} need review, ${count('failed')} failed`);
