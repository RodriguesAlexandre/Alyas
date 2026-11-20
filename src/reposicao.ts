// "Hora de repor": aprende de quanto em quanto tempo cada produto é comprado (pelas notas/compras)
// e sugere colocar na lista quando o intervalo de costume está chegando.
const n = (s: string) => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
const DIA = 864e5;
export type Sugestao = { chave: string; nome: string; cat: string; unit: string; catalogId?: string; mediaDias: number; diasDesde: number; atraso: number; vezes: number };

export function sugerirReposicao(data: any, hoje = new Date()): Sugestao[] {
  const catalogo = new Map<string, any>((data.catalog || []).map((p: any) => [p.id, p]));
  const mapa = new Map<string, { nome: string; cat: string; unit: string; catalogId?: string; dias: Set<number> }>();
  for (const h of data.history || []) {
    if (h.archived || !h.date) continue;
    const dia = Math.floor(new Date(h.date).getTime() / DIA);
    if (!Number.isFinite(dia)) continue;
    for (const i of h.items || []) {
      const p = i.catalogId ? catalogo.get(i.catalogId) : null;
      const chave = p ? 'c:' + p.id : 'n:' + n(i.name);
      const e = mapa.get(chave) || { nome: p?.name || i.name, cat: p?.cat || i.cat || 'Outros', unit: p?.unit || i.unit || 'un', catalogId: p?.id, dias: new Set<number>() };
      e.dias.add(dia); mapa.set(chave, e);
    }
  }
  const pendentes = (data.items || []).filter((i: any) => !i.checked);
  const naLista = (s: { nome: string; catalogId?: string }) => pendentes.some((i: any) => (s.catalogId && i.catalogId === s.catalogId) || n(i.name) === n(s.nome));
  const hojeDia = Math.floor(hoje.getTime() / DIA);
  const out: Sugestao[] = [];
  for (const [chave, e] of mapa) {
    const dias = [...e.dias].sort((a, b) => a - b);
    if (dias.length < 2) continue;
    const intervalos = dias.slice(1).map((d, k) => d - dias[k]).filter(x => x >= 3).sort((a, b) => a - b);
    if (!intervalos.length) continue;
    const media = intervalos[Math.floor(intervalos.length / 2)];
    if (media > 75) continue;
    const desde = hojeDia - dias[dias.length - 1];
    const atraso = desde / media;
    if (atraso < 0.85 || desde > media * 4) continue; // ainda cedo, ou parou de comprar
    if (naLista(e)) continue;
    out.push({ chave, nome: e.nome, cat: e.cat, unit: e.unit, catalogId: e.catalogId, mediaDias: media, diasDesde: desde, atraso: Math.round(atraso * 100) / 100, vezes: dias.length });
  }
  return out.sort((a, b) => b.atraso - a.atraso || b.vezes - a.vezes);
}

export function itemDaSugestao(s: Sugestao) {
  return { id: crypto.randomUUID(), name: s.nome, qty: 1, unit: s.unit, cat: s.cat, checked: false, price: null, date: null, ...(s.catalogId ? { catalogId: s.catalogId } : {}) };
}
