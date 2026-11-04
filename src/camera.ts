// Uma câmera só para o app inteiro: abre uma vez e fica pronta por um tempo depois de fechar o leitor,
// para o celular não pedir permissão de novo a cada leitura.
let atual: MediaStream | null = null;
let timer: any = null;
const viva = (s: MediaStream | null) => !!s && s.getVideoTracks().some(t => t.readyState === 'live');

export async function abrirCamera(): Promise<MediaStream> {
  clearTimeout(timer);
  if (viva(atual)) return atual!;
  if (!navigator.mediaDevices?.getUserMedia) throw Object.assign(new Error('Abra o app pelo Safari ou Chrome do celular para usar a câmera.'), { name: 'SemCamera' });
  atual = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: false });
  return atual;
}
/** Solta a câmera, mas deixa ligada por um tempo para a próxima leitura abrir na hora. */
export function soltarCamera(ms = 90000) { clearTimeout(timer); timer = setTimeout(fecharCamera, ms); }
export function fecharCamera() { clearTimeout(timer); atual?.getTracks().forEach(t => t.stop()); atual = null; }
if (typeof document !== 'undefined') document.addEventListener('visibilitychange', () => { if (document.hidden) fecharCamera(); });

/** Recorta a etiqueta amarela (padrão do Supermercados BH) e deixa em preto e branco para o OCR. */
export function recortarEtiqueta(fonte: CanvasImageSource, w: number, h: number): { canvas: HTMLCanvasElement; recortou: boolean } {
  const pw = 360, ph = Math.round(h * pw / w);
  const p = document.createElement('canvas'); p.width = pw; p.height = ph;
  const pc = p.getContext('2d', { willReadFrequently: true })!; pc.drawImage(fonte, 0, 0, pw, ph);
  const px = pc.getImageData(0, 0, pw, ph).data;
  const linhas = new Array(ph).fill(0), cols = new Array(pw).fill(0);
  for (let y = 0; y < ph; y++) for (let x = 0; x < pw; x++) {
    const i = (y * pw + x) * 4, r = px[i], g = px[i + 1], b = px[i + 2];
    if (r > 150 && g > 140 && b < 130 && Math.abs(r - g) < 60 && r - b > 60) { linhas[y]++; cols[x]++; }
  }
  const ys = linhas.map((v, i) => v > pw * .22 ? i : -1).filter(i => i >= 0);
  const xs = cols.map((v, i) => v > ph * .06 ? i : -1).filter(i => i >= 0);
  let sx = 0, sy = 0, sw = w, sh = h, recortou = false;
  if (ys.length > ph * .06 && xs.length > pw * .3) {
    const k = w / pw;
    sy = Math.max(0, (ys[0] - 2) * k); sh = Math.min(h - sy, (ys[ys.length - 1] - ys[0] + 4) * k);
    sx = Math.max(0, (xs[0] - 2) * k); sw = Math.min(w - sx, (xs[xs.length - 1] - xs[0] + 4) * k);
    recortou = sh > 30 && sw > 80;
    if (!recortou) { sx = 0; sy = 0; sw = w; sh = h; }
  }
  const alvo = recortou ? 640 : Math.min(w, 1600);
  const c = document.createElement('canvas'); c.width = alvo; c.height = Math.round(sh * alvo / sw);
  const cc = c.getContext('2d', { willReadFrequently: true })!; cc.drawImage(fonte, sx, sy, sw, sh, 0, 0, c.width, c.height);
  if (recortou) {
    const img = cc.getImageData(0, 0, c.width, c.height), d = img.data, hist = new Array(256).fill(0);
    for (let i = 0; i < d.length; i += 4) { const l = Math.round(d[i] * .3 + d[i + 1] * .59 + d[i + 2] * .11); d[i] = l; hist[l]++; }
    const n = d.length / 4; let acc = 0, lo = 0, hi = 255;
    for (let v = 0; v < 256; v++) { acc += hist[v]; if (acc > n * .01) { lo = v; break; } }
    acc = 0; for (let v = 255; v >= 0; v--) { acc += hist[v]; if (acc > n * .01) { hi = v; break; } }
    const esc = 255 / Math.max(1, hi - lo);
    for (let i = 0; i < d.length; i += 4) { const v = Math.max(0, Math.min(255, (d[i] - lo) * esc)); d[i] = d[i + 1] = d[i + 2] = v; }
    cc.putImageData(img, 0, 0);
  }
  p.width = 0; p.height = 0;
  return { canvas: c, recortou };
}

/** Lê QR Code de um quadro (vídeo ou foto), tentando o centro e alguns tamanhos. */
export async function lerQR(fonte: CanvasImageSource, w: number, h: number): Promise<string> {
  const D: any = (window as any).BarcodeDetector;
  if (D) { try { const r = await new D({ formats: ['qr_code'] }).detect(fonte); if (r?.[0]?.rawValue) return r[0].rawValue; } catch { /* segue para o jsQR */ } }
  const mod: any = await import('./vendor/jsQR.js'); const jsQR = mod.default || mod;
  const tentativas: [number, number, number, number, number][] = [];
  const lado = Math.min(w, h);
  for (const f of [.7, .5, 1]) { const s = lado * f; tentativas.push([(w - s) / 2, (h - s) / 2, s, s, 700]); }
  tentativas.push([0, 0, w, h, 900]);
  const c = document.createElement('canvas'); const cc = c.getContext('2d', { willReadFrequently: true })!;
  for (const [sx, sy, sw, sh, alvo] of tentativas) {
    c.width = alvo; c.height = Math.round(sh * alvo / sw); cc.drawImage(fonte, sx, sy, sw, sh, 0, 0, c.width, c.height);
    const img = cc.getImageData(0, 0, c.width, c.height);
    const r = jsQR(img.data, c.width, c.height, { inversionAttempts: 'attemptBoth' });
    if (r?.data) { c.width = 0; return r.data; }
  }
  c.width = 0;
  return '';
}
