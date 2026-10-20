import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(path.join(process.env.UDSF_IMAGE_RUNTIME || '/tmp/udsf-media-converter', 'package.json'));
const sharp = require('sharp');
sharp.concurrency(1);
const backup = process.env.UDSF_MEDIA_BACKUP || path.join(os.homedir(), 'Downloads', 'udsf-media-originals-2026-10-20');
const reportPath = path.join(root, 'data/media-conversion-images.json');
const report = fs.existsSync(reportPath) ? JSON.parse(fs.readFileSync(reportPath,'utf8')) : { backup, files: {} };
const walk = dir => fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
const sources = walk(path.join(root,'public')).filter(file=>/\.(png|jpe?g|svg)$/i.test(file));
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
async function convert(source) {
  const original = path.relative(path.join(root,'public'),source).replaceAll(path.sep,'/');
  const key = original.replace(/\.(png|jpe?g|svg)$/i,'.webp');
  const target = path.join(root,'public',key);
  const sha256 = hash(source);
  if(report.files[original]?.sourceSha256===sha256 && fs.existsSync(target)) return;
  if(fs.existsSync(target)) throw Error(`Unexpected existing target: ${key}`);
  const saved = path.join(backup,original);
  fs.mkdirSync(path.dirname(saved),{recursive:true});
  if(fs.existsSync(saved) && hash(saved)!==sha256) throw Error(`Original backup differs: ${original}`);
  if(!fs.existsSync(saved)) fs.copyFileSync(source,saved);
  const metadata = await sharp(source).metadata();
  const vector = /\.svg$/i.test(source);
  const temporary = target + '.tmp.webp';
  await sharp(source, vector ? {density:144} : {}).rotate().webp({lossless:! /\.jpe?g$/i.test(source),quality:85,effort:6}).toFile(temporary);
  const converted = await sharp(temporary).metadata();
  if(converted.format!=='webp'||!converted.width||!converted.height) throw Error(`Invalid conversion: ${original}`);
  fs.renameSync(temporary,target);
  report.files[original]={key,sourceSha256:sha256,sourceBytes:fs.statSync(source).size,bytes:fs.statSync(target).size,width:metadata.width,height:metadata.height,pixelWidth:converted.width,pixelHeight:converted.height,vectorSource:vector};
}
for(let start=0;start<sources.length;start+=4){
  await Promise.all(sources.slice(start,start+4).map(convert));
  fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
  console.log(`WebP: ${Math.min(start+4,sources.length)}/${sources.length}`);
}
console.log(`Converted ${Object.keys(report.files).length} images; originals preserved at ${backup}`);
