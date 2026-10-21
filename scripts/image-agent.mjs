#!/usr/bin/env node
// Image-finder agent: gemini-3.5-flash-lite plans searches, then looks at each
// candidate image and only saves ones it verifies against the description.
//   node scripts/image-agent.mjs "description" [--out DIR] [--count 1] [--min-score 8] [--max-candidates 12] [--model ID] [--dry-run]
// Auth reuses the notebook-agent Vertex AI setup (.env + GOOGLE_APPLICATION_CREDENTIALS).
import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const UA = 'udsfgecw-image-agent/1.0 (educational notes site; contact via repo owner)';
const AGENT_DIR = '/home/adhil/projects/notebook-agent';

function parseArgs(argv) {
  const o = { out: 'data/image-agent/downloads', count: 1, minScore: 8, maxCandidates: 20, model: 'gemini-3.5-flash-lite', dryRun: false };
  const words = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help') { console.log('node scripts/image-agent.mjs "description" [--out DIR] [--count N] [--min-score 1-10] [--max-candidates N] [--model ID] [--dry-run]'); process.exit(0); }
    if (a === '--dry-run') { o.dryRun = true; continue; }
    const map = { '--out': 'out', '--count': 'count', '--min-score': 'minScore', '--max-candidates': 'maxCandidates', '--model': 'model' };
    if (map[a]) { const v = argv[++i]; o[map[a]] = ['out', 'model'].includes(map[a]) ? v : Number(v); continue; }
    words.push(a);
  }
  o.description = words.join(' ').trim();
  if (!o.description) { console.error('Provide an image description. See --help.'); process.exit(1); }
  return o;
}

async function makeModel(modelId) {
  const require = createRequire(path.join(AGENT_DIR, 'package.json'));
  require('dotenv').config({ path: path.join(AGENT_DIR, '.env'), quiet: true });
  const { GoogleGenAI } = require('@google/genai');
  const ai = new GoogleGenAI({ vertexai: true, project: process.env.GOOGLE_CLOUD_PROJECT, location: process.env.GOOGLE_CLOUD_LOCATION || 'global', httpOptions: { timeout: 120000 } });
  return async (parts, system) => {
    for (let attempt = 1; ; attempt++) {
      try {
        const r = await ai.models.generateContent({ model: modelId, contents: [{ role: 'user', parts }], config: { systemInstruction: system, responseMimeType: 'application/json', temperature: 0 } });
        return JSON.parse(r.text);
      } catch (e) {
        if (attempt >= 4) throw e;
        await new Promise((res) => setTimeout(res, 2000 * attempt));
      }
    }
  };
}

const strip = (s = '') => String(s).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
const okMime = new Set(['image/jpeg', 'image/png', 'image/webp']);
const reusableLicense = (license = '') => /\b(CC0|PUBLIC DOMAIN(?: MARK)?|PDM|CC BY(?:-SA)?(?:\s|$)|BY(?:-SA)?(?:\s|$)|GFDL|GNU FREE DOCUMENTATION)\b/i.test(license);

async function searchCommons(q) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({ action: 'query', format: 'json', generator: 'search', gsrnamespace: 6, gsrlimit: 10, gsrsearch: q, prop: 'imageinfo', iiprop: 'url|mime|size|extmetadata', iiurlwidth: 1024 }).forEach(([k, v]) => u.searchParams.set(k, v));
  let j;
  for (let attempt = 1; ; attempt++) {
    const r = await fetch(u, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) });
    if (r.status === 429 && attempt < 4) {
      const wait = Number(r.headers.get('retry-after')) || attempt * 3;
      await new Promise((res) => setTimeout(res, Math.min(wait, 15) * 1000));
      continue;
    }
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const body = await r.text();
    try { j = JSON.parse(body); } catch { throw new Error(`Commons returned non-JSON (HTTP ${r.status})`); }
    break;
  }
  return Object.values(j.query?.pages || {}).flatMap((p) => {
    const ii = p.imageinfo?.[0]; if (!ii || !(okMime.has(ii.mime) || ii.mime === 'image/svg+xml')) return [];
    const svg = ii.mime === 'image/svg+xml'; // rendered PNG thumbnail is what gets saved
    const m = ii.extmetadata || {};
    return [{ source: 'wikimedia-commons', title: strip(p.title), pageUrl: ii.descriptionurl, thumbUrl: ii.thumburl || ii.url, fullUrl: svg ? (ii.thumburl || ii.url) : ii.url, width: ii.width, license: strip(m.LicenseShortName?.value), author: strip(m.Artist?.value), mime: svg ? 'image/png' : ii.mime }];
  });
}

async function searchOpenverse(q) {
  const u = new URL('https://api.openverse.org/v1/images/');
  u.searchParams.set('q', q); u.searchParams.set('page_size', '10'); u.searchParams.set('mature', 'false');
  const r = await fetch(u, { headers: { 'User-Agent': UA } });
  if (!r.ok) return [];
  const j = await r.json();
  return (j.results || []).filter((x) => /^(jpe?g|png|webp)$/i.test(x.filetype || 'jpg')).map((x) => ({
    source: 'openverse', title: strip(x.title), pageUrl: x.foreign_landing_url, thumbUrl: x.thumbnail || x.url, fullUrl: x.url, width: x.width,
    license: `${x.license || ''} ${x.license_version || ''}`.trim().toUpperCase(), author: strip(x.creator), mime: 'image/' + (x.filetype === 'png' ? 'png' : x.filetype === 'webp' ? 'webp' : 'jpeg'),
  }));
}

async function fetchBytes(url) {
  for (let attempt = 1; ; attempt++) {
    const r = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) });
    if (r.status === 429 && attempt < 4) {
      const wait = Number(r.headers.get('retry-after')) || attempt * 3;
      await new Promise((res) => setTimeout(res, Math.min(wait, 15) * 1000));
      continue;
    }
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const type = (r.headers.get('content-type') || '').split(';')[0];
    if (!okMime.has(type)) throw new Error(`unsupported type ${type}`);
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length > 25 * 1024 * 1024) throw new Error('too large');
    return { buf, type };
  }
}

const PLAN_SYSTEM = 'You plan image searches. Return JSON {"queries": string[]} with 4 short, distinct keyword queries (the first must be just the core subject in 1-3 words, e.g. "Daniell cell"; the rest 2-5 words, no quotes or operators) most likely to find a real image matching the description on Wikimedia Commons / Openverse. Order from most specific to most general.';
const VERIFY_SYSTEM = `You are a strict image reviewer. Given a target description and one candidate image (plus its title), decide whether the image really depicts what was described. Be skeptical: reject images that show something merely related, wrong subject, wrong style (e.g. photo vs diagram when a diagram was asked), heavy watermarks, text overlays that obscure content, tiny/blurry images, or labels in the diagram that contradict the description.
Return JSON: {"match": boolean, "score": integer 0-10, "shows": "one sentence of what the image actually shows", "problems": string[]}. Score 8+ only if every key element of the description is clearly visible.`;

async function main() {
  const o = parseArgs(process.argv.slice(2));
  const ask = await makeModel(o.model);
  console.log(`Description: ${o.description}\nModel: ${o.model}`);

  const plan = await ask([{ text: `Description: ${o.description}` }], PLAN_SYSTEM);
  const queries = [...new Set([...(plan.queries || []), o.description])].slice(0, 5);
  console.log('Queries:', queries.join(' | '));

  const seen = new Set(); const candidates = [];
  for (const q of queries) {
    for (const fn of [searchCommons, searchOpenverse]) {
      try { for (const c of await fn(q)) if (c.thumbUrl && !seen.has(c.fullUrl)) { seen.add(c.fullUrl); candidates.push(c); } }
      catch (e) { console.warn(`search failed (${fn.name}, "${q}"): ${e.message}`); }
    }
  }
  const pool = candidates.filter((c) => !c.width || c.width >= 300).slice(0, o.maxCandidates);
  console.log(`${candidates.length} candidates found, reviewing ${pool.length}.`);
  if (o.dryRun) { pool.forEach((c) => console.log(`- [${c.source}] ${c.title} ${c.pageUrl}`)); return; }

  const accepted = []; const rejected = [];
  for (const c of pool) {
    if (accepted.length >= o.count) break;
    if (!reusableLicense(c.license)) { console.log(`skip license [${c.source}] ${c.title} — ${c.license || 'license not identified'}`); continue; }
    try {
      const thumb = await fetchBytes(c.thumbUrl);
      const v = await ask([{ text: `Target description: ${o.description}\nCandidate title: ${c.title}` }, { inlineData: { mimeType: thumb.type, data: thumb.buf.toString('base64') } }], VERIFY_SYSTEM);
      const pass = v.match === true && v.score >= o.minScore;
      console.log(`${pass ? 'PASS' : 'skip'} ${v.score}/10 [${c.source}] ${c.title} — ${v.shows}`);
      if (!pass) { rejected.push({ ...c, review: v }); continue; }
      const full = c.fullUrl === c.thumbUrl ? thumb : await fetchBytes(c.fullUrl).catch(() => thumb);
      const ext = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' }[full.type];
      const slug = o.description.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 48).replace(/^-|-$/g, '');
      const base = `${slug}-${crypto.createHash('sha1').update(full.buf).digest('hex').slice(0, 8)}`;
      await mkdir(o.out, { recursive: true });
      const file = path.join(o.out, `${base}.${ext}`);
      await writeFile(file, full.buf);
      await writeFile(path.join(o.out, `${base}.json`), JSON.stringify({ description: o.description, file: path.basename(file), title: c.title, source: c.source, pageUrl: c.pageUrl, imageUrl: c.fullUrl, license: c.license, author: c.author, verifiedBy: o.model, review: v }, null, 2));
      accepted.push(file);
    } catch (e) { console.warn(`error on "${c.title}": ${e.message}`); }
  }

  if (!accepted.length) { console.log(`\nNo candidate passed verification (${rejected.length} rejected). Nothing downloaded. Try a more specific description or lower --min-score.`); process.exitCode = 2; return; }
  console.log('\nSaved:'); accepted.forEach((f) => console.log(' ', f));
}

main().catch((e) => { console.error(String(e.message || e).slice(0, 800)); process.exit(1); });
