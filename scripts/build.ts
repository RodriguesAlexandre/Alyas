// Gera o site estático em docs/ (o GitHub Pages publica essa pasta). Rode: bun scripts/build.ts
import { rmSync, mkdirSync, cpSync, readFileSync, writeFileSync, readdirSync } from 'node:fs';
const out = 'docs';
rmSync(out, { recursive: true, force: true });
mkdirSync(out + '/assets', { recursive: true });
const r = await Bun.build({
  entrypoints: ['src/main.tsx'], outdir: out + '/assets', target: 'browser', splitting: true, minify: true,
  naming: { entry: '[name]-[hash].[ext]', chunk: 'chunk-[hash].[ext]', asset: '[name]-[hash].[ext]' },
  define: { 'process.env.NODE_ENV': '"production"' },
});
if (!r.success) { console.error(r.logs); process.exit(1); }
const files = readdirSync(out + '/assets');
const js = files.find(f => /^main-.*\.js$/.test(f)), css = files.find(f => /^main-.*\.css$/.test(f));
if (!js || !css) { console.error('saída inesperada', files); process.exit(1); }
cpSync('public', out, { recursive: true });
const build = Date.now().toString(36);
writeFileSync(out + '/index.html', readFileSync('index.html', 'utf8').replace('assets/main.css', 'assets/' + css).replace('assets/main.js', 'assets/' + js));
writeFileSync(out + '/sw.js', readFileSync('public/sw.js', 'utf8').replace('__BUILD__', build));
writeFileSync(out + '/.nojekyll', '');
writeFileSync(out + '/404.html', readFileSync(out + '/index.html', 'utf8'));
console.log('ok', js, css, files.length, 'arquivos');
