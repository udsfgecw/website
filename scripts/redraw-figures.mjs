#!/usr/bin/env node
// Redraws blurry, watermarked scan figures from a notes.md as clean textbook diagrams with Gemini.
// An image model redraws each figure from the source scan; a vision model then compares the redraw
// with the scan (labels, values, polarity, topology) and asks for another try when they differ.
//   node scripts/redraw-figures.mjs <notes.md> --out DIR [--only SUBSTRING] [--limit N] [--concurrency N]
// Auth reuses the notebook-agent Vertex AI setup (.env + GOOGLE_APPLICATION_CREDENTIALS).
import { createRequire } from 'node:module';
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const AGENT_DIR = '/home/adhil/projects/notebook-agent';
const require = createRequire(path.join(AGENT_DIR, 'package.json'));
require('dotenv').config({ path: path.join(AGENT_DIR, '.env'), quiet: true });
const { GoogleGenAI } = require('@google/genai');
const { createCanvas, loadImage } = require('@napi-rs/canvas');

const IMAGE_MODEL = process.env.IMAGE_MODEL || 'gemini-3.1-flash-image';
const CHECK_MODEL = process.env.CHECK_MODEL || process.env.TEXT_MODEL || 'gemini-4-argon';
const MAX_TRIES = 3;
const MIN_SCORE = 8;

function parseArgs(argv) {
  const o = { notes: '', out: '', only: '', limit: Infinity, concurrency: 2, force: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--out') o.out = argv[++i];
    else if (a === '--only') o.only = argv[++i];
    else if (a === '--limit') o.limit = Number(argv[++i]);
    else if (a === '--concurrency') o.concurrency = Number(argv[++i]);
    else if (a === '--force') o.force = true;
    else if (!o.notes) o.notes = a;
  }
  if (!o.notes || !o.out) { console.error('usage: redraw-figures.mjs <notes.md> --out DIR [--only S] [--limit N] [--concurrency N] [--force]'); process.exit(1); }
  return o;
}

const ai = new GoogleGenAI({ vertexai: true, project: process.env.GOOGLE_CLOUD_PROJECT, location: process.env.GOOGLE_CLOUD_LOCATION || 'global', httpOptions: { timeout: 240000 } });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Retries provider errors; quota errors wait with a growing delay, as in the other Gemini scripts. */
async function withRetry(label, fn) {
  for (let attempt = 1; ; attempt++) {
    try { return await fn(); } catch (e) {
      const msg = String(e?.message || e);
      const quota = /429|RESOURCE_EXHAUSTED|quota|rate.?limit/i.test(msg);
      if (attempt >= (quota ? 12 : 4)) throw e;
      const delay = quota ? Math.min(300000, 15000 * 2 ** Math.min(attempt - 1, 4)) : 3000 * attempt;
      console.log(`  ${label}: ${quota ? 'quota' : 'error'} (${msg.replace(/\s+/g, ' ').slice(0, 90)}), retry in ${Math.round(delay / 1000)}s`);
      await sleep(delay);
    }
  }
}

/** Figures in the notes worth redrawing: scans of diagrams, not portraits or already-generated art. */
function findFigures(markdown) {
  const lines = markdown.split(/\r?\n/);
  const figures = [];
  lines.forEach((line, i) => {
    const m = line.match(/^!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/);
    if (!m) return;
    const [, alt, url] = m;
    const name = path.basename(new URL(url).pathname).replace(/\.\w+$/, '');
    if (!/-source$/.test(name) || /portrait|photo/i.test(alt)) return;
    const before = lines.slice(Math.max(0, i - 8), i).filter((l) => l.trim() && !l.startsWith('![')).join('\n').slice(-700);
    const after = lines.slice(i + 1, i + 6).filter((l) => l.trim() && !l.startsWith('![')).join('\n').slice(0, 400);
    figures.push({ alt, url, name, context: `${before}\n[figure]\n${after}` });
  });
  return figures;
}

const redrawPrompt = (f, feedback) => `Redraw the attached figure as a clean, high-resolution textbook diagram.

The attachment is a low-quality scan of an electrical-circuit / engineering figure. It may carry a watermark, a logo, a coloured overlay, a blur, or the question text printed above it.
Output ONLY the figure itself:
- plain white background; remove every watermark, logo, QR code, stray mark, and any problem statement text that is not part of the diagram
- crisp uniform dark-navy lines (about 3 px), pure-white background, no colour fills, no gradients, no shadows, no scan noise
- standard zig-zag resistor symbols, standard circle voltage/current-source symbols with +/- or an arrow, a clear ground symbol, solid dots at wire junctions
- keep the EXACT topology: every component, wire, junction, node, terminal and its position relative to the others
- keep EVERY label exactly as in the scan: component values with units (for example 5 Ω, 50 V, 2 A), node and terminal letters, current and mesh-current names and arrow directions, polarity signs, figure captions that sit inside the figure
- draw everything in the same dark navy with no outlines, halos or glow; if the scan highlights some elements with another colour, draw those elements slightly thicker instead
- large, legible sans-serif labels placed beside the component without touching any wire
- generous white margin on every side; nothing may touch or leave the canvas
- do not invent components, values, or labels, and do not add titles or explanations

Context from the study notes (for your understanding only; do not draw this text):
${f.context}
Caption: ${f.alt}${feedback ? `\n\nYOUR PREVIOUS ATTEMPT WAS REJECTED. Fix exactly these problems:\n${feedback}` : ''}`;

const CHECK_SYSTEM = `You are a strict reviewer of redrawn textbook figures. You get the ORIGINAL scan (image 1) and a REDRAW (image 2).
Compare them element by element: every component and its value/unit, every node/terminal letter, every current or mesh-current label and its arrow direction, source polarity, wiring topology, and junctions.
Return JSON {"score": 0-10, "problems": string[], "leftovers": string[]}.
- score 10 = identical content, clean style. Score 8+ only when no label, value, polarity, direction or connection differs from the original.
- problems: each concrete difference (missing/changed/extra label or component, wrong connection, wrong polarity or arrow, cropped or overlapping text).
- leftovers: watermark text/logos, problem statement text, or scan noise still visible in the redraw.
Elements that exist only as scan artefacts (watermark, question text) must NOT be in the redraw and are not problems when absent.`;

async function fetchBytes(url) {
  const r = await fetch(url, { signal: AbortSignal.timeout(60000) });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return Buffer.from(await r.arrayBuffer());
}

/** webp/png in, PNG bytes out, so the models always receive a type they accept. */
async function toPng(buf) {
  const img = await loadImage(buf);
  const c = createCanvas(img.width, img.height);
  c.getContext('2d').drawImage(img, 0, 0);
  return { png: c.toBuffer('image/png'), width: img.width, height: img.height };
}

async function generate(source, f, feedback) {
  const response = await withRetry(`image ${f.name}`, () => ai.models.generateContent({
    model: IMAGE_MODEL,
    contents: [{ role: 'user', parts: [{ inlineData: { mimeType: 'image/png', data: source.toString('base64') } }, { text: redrawPrompt(f, feedback) }] }],
    config: { responseModalities: ['TEXT', 'IMAGE'], temperature: 0.4 },
  }));
  const inline = response.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data)?.inlineData;
  if (!inline) throw new Error('image model returned no image');
  return Buffer.from(inline.data, 'base64');
}

async function review(source, redraw) {
  const response = await withRetry('check', () => ai.models.generateContent({
    model: CHECK_MODEL,
    contents: [{ role: 'user', parts: [
      { text: 'ORIGINAL scan:' }, { inlineData: { mimeType: 'image/png', data: source.toString('base64') } },
      { text: 'REDRAW:' }, { inlineData: { mimeType: 'image/png', data: redraw.toString('base64') } },
    ] }],
    config: { systemInstruction: CHECK_SYSTEM, responseMimeType: 'application/json', temperature: 0 },
  }));
  const verdict = JSON.parse(response.text);
  return { score: Number(verdict.score) || 0, problems: verdict.problems || [], leftovers: verdict.leftovers || [] };
}

/** Bounding box of the non-white pixels, so the redraw can be cropped to its artwork. */
function inkBox(ctx, w, h) {
  const { data } = ctx.getImageData(0, 0, w, h);
  let x0 = w, y0 = h, x1 = -1, y1 = -1;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = (y * w + x) * 4;
    if (data[i + 3] > 20 && (data[i] < 235 || data[i + 1] < 235 || data[i + 2] < 235)) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  }
  return x1 < 0 ? { x: 0, y: 0, w, h } : { x: x0, y: y0, w: x1 - x0 + 1, h: y1 - y0 + 1 };
}

async function saveWebp(png, file) {
  const img = await loadImage(png);
  const probe = createCanvas(img.width, img.height);
  const pctx = probe.getContext('2d');
  pctx.fillStyle = '#fff'; pctx.fillRect(0, 0, img.width, img.height);
  pctx.drawImage(img, 0, 0);
  const box = inkBox(pctx, img.width, img.height);
  const pad = Math.round(Math.max(box.w, box.h) * 0.05) + 8;
  const sx = Math.max(0, box.x - pad), sy = Math.max(0, box.y - pad);
  const sw = Math.min(img.width - sx, box.w + 2 * pad), sh = Math.min(img.height - sy, box.h + 2 * pad);
  const scale = Math.min(1, 1800 / sw, 1600 / sh);
  const w = Math.round(sw * scale), h = Math.round(sh * scale);
  const c = createCanvas(w, h);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h);
  ctx.drawImage(probe, sx, sy, sw, sh, 0, 0, w, h);
  const bytes = c.toBuffer('image/webp', 92);
  await writeFile(file, bytes);
  return { width: w, height: h, bytes: bytes.length };
}

async function redraw(f, outDir, reportRows) {
  const file = path.join(outDir, `${f.name.replace(/-source$/, '')}-clean.webp`);
  const source = (await toPng(await fetchBytes(f.url))).png;
  let feedback = '', best = null;
  for (let attempt = 1; attempt <= MAX_TRIES; attempt++) {
    const redrawn = await generate(source, f, feedback);
    const verdict = await review(source, redrawn);
    console.log(`  ${f.name} try ${attempt}: score ${verdict.score}${verdict.problems.length ? ` — ${verdict.problems.slice(0, 2).join('; ').slice(0, 140)}` : ''}${verdict.leftovers.length ? ` [leftover: ${verdict.leftovers.join(', ').slice(0, 80)}]` : ''}`);
    if (!best || verdict.score > best.verdict.score) best = { redrawn, verdict };
    if (verdict.score >= MIN_SCORE && !verdict.leftovers.length) break;
    feedback = [...verdict.problems, ...verdict.leftovers.map((l) => `remove leftover: ${l}`)].join('\n');
  }
  const saved = await saveWebp(best.redrawn, file);
  reportRows.push({ name: f.name, url: f.url, file, score: best.verdict.score, problems: best.verdict.problems, leftovers: best.verdict.leftovers, ...saved, status: best.verdict.score >= MIN_SCORE && !best.verdict.leftovers.length ? 'ok' : 'needs-review' });
}

async function main() {
  const o = parseArgs(process.argv.slice(2));
  await mkdir(o.out, { recursive: true });
  const reportPath = path.join(o.out, 'report.json');
  let report = [];
  try { report = JSON.parse(await readFile(reportPath, 'utf8')); } catch {}
  const done = new Set(report.map((r) => r.name));

  let figures = findFigures(await readFile(o.notes, 'utf8')).filter((f) => !o.only || f.name.includes(o.only));
  if (!o.force) figures = figures.filter((f) => !done.has(f.name));
  figures = figures.slice(0, o.limit);
  console.log(`${figures.length} figure(s) to redraw with ${IMAGE_MODEL}, checked by ${CHECK_MODEL}`);

  let next = 0;
  const worker = async () => {
    while (next < figures.length) {
      const f = figures[next++];
      console.log(`[${next}/${figures.length}] ${f.name}`);
      try { await redraw(f, o.out, report); }
      catch (e) { console.log(`  FAILED ${f.name}: ${String(e?.message || e).slice(0, 200)}`); report.push({ name: f.name, url: f.url, status: 'failed', error: String(e?.message || e).slice(0, 300) }); }
      await writeFile(reportPath, JSON.stringify(report, null, 2));
    }
  };
  await Promise.all(Array.from({ length: o.concurrency }, worker));
  const count = (s) => report.filter((r) => r.status === s).length;
  console.log(`done: ${count('ok')} ok, ${count('needs-review')} need review, ${count('failed')} failed`);
}

main().catch((e) => { console.error(e); process.exit(1); });
