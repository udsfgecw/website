import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const images=JSON.parse(fs.readFileSync(path.join(root,'data/media-conversion-images.json'),'utf8'));
const videos=JSON.parse(fs.readFileSync(path.join(root,'data/media-conversion-videos.json'),'utf8'));
const conversions=Object.entries({...images.files,...videos.files});
const digest=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
for(const [original,item] of conversions){
 const target=path.join(root,'public',item.key);
 const backup=path.join(item.videoCodec?videos.backup:images.backup,original);
 if(!fs.existsSync(target)||!fs.statSync(target).size||!fs.existsSync(backup)||digest(backup)!==item.sourceSha256)throw Error(`Conversion or original backup is incomplete: ${original}`);
}
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
const known=new Set(conversions.map(([original])=>original));
const remaining=walk(path.join(root,'public')).filter(file=>/\.(png|jpe?g|svg|mp4|mov|m4v)$/i.test(file));
for(const file of remaining){
 const relative=path.relative(path.join(root,'public'),file).replaceAll(path.sep,'/');
 if(!known.has(relative))throw Error(`Media is not converted yet: ${relative}`);
}
const replacements=conversions.map(([original,item])=>[original,item.key]).sort((a,b)=>b[0].length-a[0].length);
const files=[...walk(path.join(root,'src')),path.join(root,'index.html')].filter(file=>/\.(tsx?|md|css|json|html)$/.test(file));
for(const file of files){
 let text=fs.readFileSync(file,'utf8');const originalText=text;
 for(const [oldPath,newPath] of replacements)text=text.replaceAll(oldPath,newPath);
 if(file.endsWith('/src/data/progress.ts'))text=text.replaceAll('lh-lighting.jpg','lh-lighting.webp');
 if(file.endsWith('/src/features/notes/reader/PageMarkdown.tsx'))text=text.replaceAll('\\.svg$','\\.webp$');
 if(file.endsWith('.md'))text=text.replaceAll('[Open full-size SVG](', '[Open full-size image](');
 if(file.endsWith('/index.html'))text=text.replace('type="image/png"','type="image/webp"');
 if(text!==originalText)fs.writeFileSync(file,text);
}
const dimensions=Object.fromEntries(Object.values(images.files).filter(item=>item.vectorSource).map(item=>['/'+item.key,{width:item.width,height:item.height}]));
fs.writeFileSync(path.join(root,'src/data/media-dimensions.ts'),'// Original layout sizes for static SVG diagrams converted to high-resolution WebP.\nexport const MEDIA_DIMENSIONS: Record<string, { width: number; height: number }> = '+JSON.stringify(dimensions,null,2)+';\n');
const markdown=path.join(root,'src/features/notes/reader/PageMarkdown.tsx');
let text=fs.readFileSync(markdown,'utf8');
if(!text.includes('import { MEDIA_DIMENSIONS }'))text='import { MEDIA_DIMENSIONS } from "@/data/media-dimensions";\n'+text;
text=text.replace('const diagramDimensions = { ...module3DiagramDimensions, ...module4DiagramDimensions };','const diagramDimensions = { ...MEDIA_DIMENSIONS, ...module3DiagramDimensions, ...module4DiagramDimensions };');
fs.writeFileSync(markdown,text);
for(const file of ['src/components/activity/ReelCard.tsx','src/components/activity/Lightbox.tsx']){
 const target=path.join(root,file);fs.writeFileSync(target,fs.readFileSync(target,'utf8').replaceAll('type="video/mp4"','type="video/webm"'));
}
// Retire originals only after every output and external backup has been verified.
for(const [original] of conversions){const file=path.join(root,'public',original);if(fs.existsSync(file))fs.unlinkSync(file);}
const mime={'.webp':'image/webp','.webm':'video/webm','.vtt':'text/vtt; charset=utf-8'};
const pending=walk(path.join(root,'public')).filter(file=>file.includes('.tmp.'));
if(pending.length)throw Error(`Temporary media remains: ${pending[0]}`);
const assets=walk(path.join(root,'public')).filter(file=>mime[path.extname(file)]).sort();
const manifest={version:1,createdAt:new Date().toISOString(),files:assets.map(file=>({key:path.relative(path.join(root,'public'),file).replaceAll(path.sep,'/'),localPath:path.relative(root,file).replaceAll(path.sep,'/'),contentType:mime[path.extname(file)],bytes:fs.statSync(file).size,sha256:digest(file)}))};
manifest.summary={images:manifest.files.filter(file=>file.contentType==='image/webp').length,videos:manifest.files.filter(file=>file.contentType==='video/webm').length,subtitleTracks:manifest.files.filter(file=>file.contentType.startsWith('text/vtt')).length,totalBytes:manifest.files.reduce((total,file)=>total+file.bytes,0)};
fs.writeFileSync(path.join(root,'data/cloudflare-media-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Updated references and prepared ${manifest.files.length} media files for the later Cloudflare upload.`);
console.log(JSON.stringify(manifest.summary));
