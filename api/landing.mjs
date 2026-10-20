import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { renderLandingDocument } from '../dist-ssr/entry-server.js';

const template = readFile(path.join(process.cwd(), 'dist-ssr/template.html'), 'utf8');

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.setHeader('Allow', 'GET, HEAD');
    return response.status(405).end();
  }
  try {
    const html = await renderLandingDocument(await template);
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    return response.status(200).end(request.method === 'HEAD' ? undefined : html);
  } catch (error) {
    console.error('Landing page render failed', error);
    return response.status(500).end('Unable to load this page. Please try again.');
  }
}
