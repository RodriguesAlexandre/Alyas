// Fotos dos itens da casa: comprime no aparelho, guarda na planilha (aba oculta) e mantém cópia local.
import { api } from './api';
const CACHE = 'aleyas-fotos-v1';
const memoria = new Map<string, string>();

export async function comprimirFoto(file: File, max = 1100): Promise<string> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((ok, erro) => { const i = new Image(); i.onload = () => ok(i); i.onerror = erro; i.src = url; });
    let lado = max, q = .78, dados = '';
    for (let t = 0; t < 6; t++) {
      const k = Math.min(1, lado / Math.max(img.width, img.height));
      const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height);
      dados = c.toDataURL('image/jpeg', q).split(',')[1]; c.width = 0;
      if (dados.length <= 220000) break;
      lado = Math.round(lado * .82); q = Math.max(.55, q - .06);
    }
    return dados;
  } finally { URL.revokeObjectURL(url); }
}
async function guardarLocal(id: string, dados: string) {
  memoria.set(id, dados);
  try { const c = await caches.open(CACHE); await c.put('/foto/' + id, new Response(dados)); } catch { /* sem cache */ }
}
export async function enviarFoto(file: File): Promise<string> {
  const dados = await comprimirFoto(file);
  const id = 'f-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
  await api.salvarFoto(id, dados);
  await guardarLocal(id, dados);
  return id;
}
export async function carregarFoto(id: string): Promise<string> {
  if (memoria.has(id)) return 'data:image/jpeg;base64,' + memoria.get(id);
  try { const c = await caches.open(CACHE); const r = await c.match('/foto/' + id); if (r) { const d = await r.text(); memoria.set(id, d); return 'data:image/jpeg;base64,' + d; } } catch { /* segue */ }
  const d = await api.foto(id); await guardarLocal(id, d);
  return 'data:image/jpeg;base64,' + d;
}
export async function apagarFoto(id: string) {
  memoria.delete(id);
  try { const c = await caches.open(CACHE); await c.delete('/foto/' + id); } catch { /* */ }
  try { await api.apagarFoto(id); } catch { /* fica órfã na planilha, sem problema */ }
}
