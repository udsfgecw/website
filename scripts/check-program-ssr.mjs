import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import programs from '../api/programs.mjs';
import landing from '../api/landing.mjs';

const server = createServer(async (request, response) => {
  response.status = (code) => { response.statusCode = code; return response; };
  await (request.url === '/api/programs' ? programs : landing)(request, response);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
try {
  const response = await fetch(`${base}/api/programs`);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  const feed = await response.json();
  assert.equal(feed.programs.length, 17);
  assert.equal(new Set(feed.programs.map(event => event.id)).size, 17);
  const second = await (await fetch(`${base}/api/programs`)).json();
  assert.notDeepEqual(feed.programs.map(event => event.id), second.programs.map(event => event.id));
  const htmlResponse = await fetch(base);
  assert.equal(htmlResponse.status, 200);
  assert.equal(htmlResponse.headers.get('cache-control'), 'no-store');
  const html = await htmlResponse.text();
  const serialized = JSON.parse(html.match(/<script id="program-feed" type="application\/json">(.*?)<\/script>/s)[1]);
  assert.equal(serialized.programs.length, 17);
  const section = html.match(/<section id="programs"[\s\S]*?<\/section>/)[0];
  const renderedImages = [...section.matchAll(/<img[^>]*src="([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(renderedImages, serialized.programs.filter(event => event.image).map(event => event.image));
  assert.match(html, /College Bus Inauguration/);
  const secondHtml = await (await fetch(base)).text();
  const secondSnapshot = JSON.parse(secondHtml.match(/<script id="program-feed" type="application\/json">(.*?)<\/script>/s)[1]);
  assert.notDeepEqual(serialized.programs.map(event => event.id), secondSnapshot.programs.map(event => event.id));
  for (const route of ['/', '/api/programs']) {
    const head = await fetch(base + route, { method: 'HEAD' });
    assert.equal(head.status, 200);
    assert.equal(await head.text(), '');
    const invalid = await fetch(base + route, { method: 'POST' });
    assert.equal(invalid.status, 405);
    assert.equal(invalid.headers.get('allow'), 'GET, HEAD');
  }
  const eventsHtml = await readFile(new URL('../dist/events/index.html', import.meta.url), 'utf8');
  assert.match(eventsHtml, /All events and programs/);
  assert.doesNotMatch(eventsHtml, /The lineup\.|From the archive/);
  console.log('Passed: API permutation, no-cache headers, request-time SSR, serialized hydration order, method handling, and unified events page.');
} finally {
  await new Promise(resolve => server.close(resolve));
}
