import { createProgramFeed } from '../dist-ssr/entry-server.js';

export default function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.setHeader('Allow', 'GET, HEAD');
    return response.status(405).end();
  }
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  const body = JSON.stringify(createProgramFeed());
  return response.status(200).end(request.method === 'HEAD' ? undefined : body);
}
