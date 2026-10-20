import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const base = process.argv[2] || 'http://localhost:5174';
const source = await readFile(path.join(root, 'src/data/event-reels.ts'), 'utf8');
const reels = JSON.parse(source.match(/export const EVENT_REELS: readonly Activity\[\] = (\[.*\]);/s)[1]);
const verification = JSON.parse(await readFile(path.join(root, 'data/curation/reel-verification.json'), 'utf8')).reels;
assert.ok(reels.length > 0, 'Expected approved event reels');
assert.equal(new Set(reels.map(reel => reel.id)).size, reels.length);
for (const reel of reels) {
  assert.equal(reel.category, 'events_programs');
  assert.equal(verification[reel.id].eligible, true, 'Only verified events may be published');
  assert.equal(verification[reel.id].confidence, 'high');
  const videoPath = path.join(root, 'public', reel.video);
  assert.ok((await stat(videoPath)).size > 0);
  assert.ok((await stat(path.join(root, 'public', reel.image))).size > 0);
  const video = await readFile(videoPath);
  assert.ok(video.indexOf('moov') > 0 && video.indexOf('moov') < video.indexOf('mdat'), 'Playback metadata must precede media for fast startup');
  const range = await fetch(base + reel.video, { headers: { Range: 'bytes=0-511' } });
  assert.equal(range.status, 206, 'Video seeking requires range requests');
  assert.match(range.headers.get('content-type'), /video\/mp4/);
  assert.equal((await range.arrayBuffer()).byteLength, 512);
  if (reel.subtitles) assert.ok((await readFile(path.join(root, 'public', reel.subtitles), 'utf8')).startsWith('WEBVTT\n'));
}
console.log(`Passed: ${reels.length} approved event reels, posters, fast-start metadata, video range requests and available subtitle tracks.`);
