import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { protectSection, validateSection, retryInfo, backoff, requestWithRetries, atomicWrite, acquireLock, assertUnchanged, ValidationError } from './format-chemistry-notes.mjs';

const section = { title: 'Example topic', content: `## Example topic

**Definition** is a statement containing $x$ and a [topic link](#page-2).

$$
x = 2
$$

![diagram](/diagram.svg)

\`\`\`chem
ethanol
\`\`\`

> **Watch out.** Preserve this warning and its equation:
> $$
> y = 3
> $$

#### Example 1: Calculation

**Problem:** Find $x$.

**Solution:**

$$
x = 2
$$

### Next topic

Another explanation remains outside the problem box.

### Self-check questions

1. **Question:** What is $x$?
   **Answer:** $2$.
` };
const response = (text = '{"markdown":"ok","formattingChanges":[]}') => ({ text, modelVersion: 'gemini-3.8-flash', candidates: [{ finishReason: 'STOP' }] });

test('round-trip preserves $$, molecular code, links, warning and whole worked/self-check blocks', () => {
  const protectedSource = protectSection(section.content);
  const result = validateSection(section, protectedSource, { markdown: protectedSource.markdown, formattingChanges: [] });
  assert.equal(result.markdown, section.content.trim());
  assert.equal(result.inventory.cards.worked, 1);
  assert.equal(result.inventory.code.length, 1);
  assert(protectedSource.tokens.filter(t => t.kind === 'BLOCK').length >= 3);
});

test('rejects lost, repeated and reordered placeholders, extra formulas and broken card boundaries', () => {
  const p = protectSection(section.content), base = p.markdown;
  const [a, b] = p.tokens;
  for (const markdown of [base.replace(a.token, ''), base + a.token, base.replace(a.token, 'TEMP').replace(b.token, a.token).replace('TEMP', b.token), base + '\n\n$new$']) {
    assert.throws(() => validateSection(section, p, { markdown, formattingChanges: [] }));
  }
  // A newly inserted shallower heading inside a protected example would alter
  // the box; the immutable token and inventory checks reject this shape.
  assert.throws(() => validateSection(section, p, { markdown: base.replace('### Next topic', '## Next topic'), formattingChanges: [] }));
});

test('Retry-After seconds, HTTP dates and Google RetryInfo are respected, including long floors', () => {
  assert.equal(retryInfo({ status: 429, message: 'quota', headers: { 'Retry-After': '7' } }).waitMs, 7000);
  assert.equal(retryInfo({ status: 503, message: 'busy', headers: { get: () => 'Thu, 01 Jan 1970 00:00:08 GMT' } }, 1000).waitMs, 7000);
  const error = new Error(JSON.stringify({ error: { code: 429, details: [{ '@type': 'type.googleapis.com/google.rpc.RetryInfo', retryDelay: '12.5s' }] } }));
  assert.equal(retryInfo(error).waitMs, 12500);
  assert.equal(retryInfo(error).quota, true);
  assert.equal(backoff(12, 900000, () => 0), 900000);
  assert.equal(backoff(1, 0, () => 0), 5000);
  assert.equal(retryInfo({ status: 403, message: 'access denied' }).transient, false);
  assert.equal(retryInfo({ message: 'Request timed out' }).transient, true);
});

test('quota retry waits, paces every attempt and then saves a validated response', async () => {
  let calls = 0, paced = 0, saved = 0; const waits = [], events = [];
  const result = await requestWithRetries({
    generate: async () => { if (++calls === 1) throw Object.assign(new Error('RESOURCE_EXHAUSTED'), { status: 429, headers: { 'retry-after': '30' } }); return response(); },
    validate: data => data, saveRaw: async () => saved++, pace: async () => paced++, wait: async ms => waits.push(ms), log: event => events.push(event), attempts: 3,
  });
  assert.equal(calls, 2); assert.equal(paced, 2); assert.equal(saved, 1);
  assert(waits[0] >= 30000); assert(events.includes('QUOTA_WAIT'));
  assert.equal(result.modelVersion, 'gemini-3.8-flash');
});

test('invalid JSON triggers a repair request; permanent authorization failures are not retried', async () => {
  let calls = 0, feedback = '';
  await requestWithRetries({ generate: async f => { feedback = f; return response(++calls === 1 ? 'bad JSON' : undefined); }, validate: x => x, saveRaw: async () => {}, pace: async () => {}, wait: async () => {}, log: () => {} });
  assert.equal(calls, 2); assert.match(feedback, /Invalid JSON/);
  calls = 0;
  await assert.rejects(requestWithRetries({ generate: async () => { calls++; throw Object.assign(new Error('Permission denied'), { status: 403 }); }, validate: x => x, saveRaw: async () => {}, pace: async () => {}, wait: async () => {}, log: () => {} }), /Permission denied/);
  assert.equal(calls, 1);
});

test('retry budget and validation budget stop instead of retrying forever', async () => {
  let calls = 0;
  const shared = { saveRaw: async () => {}, pace: async () => {}, wait: async () => {}, log: () => {} };
  await assert.rejects(requestWithRetries({ ...shared, attempts: 3, generate: async () => { calls++; throw Object.assign(new Error('busy'), { status: 503 }); }, validate: x => x }));
  assert.equal(calls, 3);
  calls = 0;
  await assert.rejects(requestWithRetries({ ...shared, generate: async () => { calls++; return response(); }, validate: () => { throw new ValidationError('bad tokens'); } }));
  assert.equal(calls, 4);
});

test('atomic checkpoint survives reload and lock prevents overlapping runs', async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), 'chemistry-formatter-test-'));
  try {
    const file = path.join(dir, 'cache', '01.validated.json');
    await atomicWrite(file, JSON.stringify({ complete: true }));
    assert.deepEqual(JSON.parse(await readFile(file, 'utf8')), { complete: true });
    const release = await acquireLock(dir);
    await assert.rejects(acquireLock(dir), /already running/);
    await release();
    // An impossible PID represents a process killed before it could unlock.
    await writeFile(path.join(dir, 'run.lock'), JSON.stringify({ pid: 2147483647, host: os.hostname() }));
    const releaseRecovered = await acquireLock(dir); await releaseRecovered();
  } finally { await rm(dir, { recursive: true, force: true }); }
});

test('source guard accepts original/applied output but refuses concurrent edits', () => {
  const hash = s => createHash('sha256').update(s).digest('hex');
  const allowed = [hash('original'), hash('formatted')];
  assertUnchanged('original', allowed, 'changed');
  assertUnchanged('formatted', allowed, 'changed');
  assert.throws(() => assertUnchanged('another editor changed this', allowed, 'refusing to overwrite'), /refusing to overwrite/);
});
