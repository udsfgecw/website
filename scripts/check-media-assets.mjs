import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/cloudflare-media-manifest.json'),'utf8'));
const imageReport=JSON.parse(fs.readFileSync(path.join(root,'data/media-conversion-images.json'),'utf8'));
const videoReport=JSON.parse(fs.readFileSync(path.join(root,'data/media-conversion-videos.json'),'utf8'));
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(path.join(dir,entry.name)):[path.join(dir,entry.name)]);
const publicFiles=walk(path.join(root,'public'));
assert.equal(publicFiles.filter(file=>/\.(png|jpe?g|svg|mp4|mov|m4v)$/i.test(file)).length,0,'Published media should use WebP/WebM');
assert.equal(new Set(manifest.files.map(file=>file.key)).size,manifest.files.length);
for(const asset of manifest.files){
 const file=path.join(root,asset.localPath);const bytes=fs.readFileSync(file);
 assert.equal(bytes.length,asset.bytes);
 assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),asset.sha256);
 if(asset.contentType==='image/webp'){
  assert.equal(bytes.subarray(0,4).toString(),'RIFF');assert.equal(bytes.subarray(8,12).toString(),'WEBP');
 }else if(asset.contentType==='video/webm')assert.deepEqual([...bytes.subarray(0,4)],[0x1a,0x45,0xdf,0xa3]);
}
const code=[...walk(path.join(root,'src')),path.join(root,'index.html')].filter(file=>/\.(tsx?|md|css|html|json)$/.test(file)).map(file=>[file,fs.readFileSync(file,'utf8')]);
for(const report of [imageReport,videoReport])for(const [original,item] of Object.entries(report.files)){
 assert.ok(fs.existsSync(path.join(report.backup,original)),`Missing original backup: ${original}`);
 for(const [file,text] of code)assert.ok(!text.includes(original),`Stale media path ${original} in ${file}`);
 assert.ok(fs.existsSync(path.join(root,'public',item.key)));
}
assert.equal(manifest.summary.images,manifest.files.filter(file=>file.contentType==='image/webp').length);
assert.equal(manifest.summary.videos,manifest.files.filter(file=>file.contentType==='video/webm').length);
console.log(`Passed: ${manifest.summary.images} WebP images, ${manifest.summary.videos} WebM videos, original backups, reference migration and Cloudflare manifest integrity.`);
