// Cálculos do painel de gastos (puro, testável).
import { identify } from './product-identity.ts';
import { lugarDe, TODOS_LUGARES, CAT_FORA } from './lugar.ts';

export type Periodo = '1m' | '3m' | 'tudo';
const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const chave = (d: Date) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
const linha = (i: any) => i.lineTotal != null ? i.lineTotal : (i.price != null ? i.price * i.qty : 0);

/** Gastos fora do mercado viram "compras" de um item só, para entrar nos mesmos gráficos. */
export const comprasFora = (data: any) => (data.gastosFora || []).map((g: any) => ({ id: g.id, date: g.data, store: g.desc || g.tipo, lugar: g.tipo, total: g.valor, unknown: 0, fora: true,
  items: [{ id: g.id + '-i', name: g.desc || g.tipo, cat: CAT_FORA(g.tipo), qty: 1, unit: 'un', price: g.valor, lineTotal: g.valor, lugar: g.tipo, checked: true, date: null }] }));
const NAO_COMIDA = new Set(['Limpeza', 'Higiene', 'Utilidades', 'Casa e bem-estar', 'Farmácia', 'Outros']);
export function gastos(data: any, periodo: Periodo, hoje = new Date(), lugares: readonly string[] = TODOS_LUGARES, categorias: readonly string[] | null = null) {
  const todos = TODOS_LUGARES.every(l => lugares.includes(l)) && !categorias;
  const ok = (i: any, h: any) => lugares.includes(lugarDe(i, h)) && (!categorias || categorias.includes(i.cat || 'Outros'));
  const porLugar = new Map<string, number>(TODOS_LUGARES.map(l => [l, 0]));
  const brutas = [...(data.history || []), ...comprasFora(data)].filter((h: any) => !h.archived && h.date && Number.isFinite(Date.parse(h.date)));
  const compras = brutas.map((h: any) => {
    const itens = (h.items || []).filter((i: any) => ok(i, h));
    const soma = itens.reduce((a: number, i: any) => a + linha(i), 0);
    return { ...h, items: itens, total: todos ? (h.total || 0) : soma };
  }).filter((h: any) => h.items.length || (todos && h.total));
  const inicio = periodo === '1m' ? new Date(hoje.getFullYear(), hoje.getMonth(), 1) : periodo === '3m' ? new Date(hoje.getFullYear(), hoje.getMonth() - 2, 1) : new Date(0);
  const noPeriodo = compras.filter((h: any) => new Date(h.date) >= inicio);
  const meses = Array.from({ length: 6 }, (_, k) => { const d = new Date(hoje.getFullYear(), hoje.getMonth() - 5 + k, 1); return { chave: chave(d), rotulo: MESES[d.getMonth()], total: 0, atual: k === 5 }; });
  for (const h of compras) { const m = meses.find(x => x.chave === chave(new Date(h.date))); if (m) m.total += h.total || 0; }
  const cats = new Map<string, number>(), prods = new Map<string, { nome: string; cat: string; total: number; vezes: number }>();
  const precos = new Map<string, { nome: string; unit: string; lista: { t: number; p: number }[] }>();
  for (const h of compras) for (const i of h.items || []) {
    const cat = i.cat || 'Outros';
    const nome = (i.catalogId && (data.catalog || []).find((p: any) => p.id === i.catalogId)?.name) || identify(i.name, data.catalog || []).name || i.name;
    if (new Date(h.date) >= inicio) {
      const v = linha(i); cats.set(cat, (cats.get(cat) || 0) + v);
      const p = prods.get(nome) || { nome, cat, total: 0, vezes: 0 }; p.total += v; p.vezes++; prods.set(nome, p);
    }
    if (i.price != null && i.price > 0 && !h.fora) { const k = nome + '|' + i.unit; const e = precos.get(k) || { nome, unit: i.unit, lista: [] as { t: number; p: number }[] }; e.lista.push({ t: Date.parse(h.date), p: i.price }); precos.set(k, e); }
  }
  for (const h of brutas) if (new Date(h.date) >= inicio) for (const i of h.items || []) { if (categorias && !categorias.includes(i.cat || 'Outros')) continue; const l = lugarDe(i, h); porLugar.set(l, (porLugar.get(l) || 0) + linha(i)); }
  // Mês corrente por categoria (para o orçamento por categoria) e comida dentro x fora de casa
  const mesKey = chave(hoje), catsMes = new Map<string, number>(); let comidaMercado = 0, comidaFora = 0, foraTotal = 0;
  for (const h of brutas) if (chave(new Date(h.date)) === mesKey) for (const i of h.items || []) { const v = linha(i), c = i.cat || 'Outros'; catsMes.set(c, (catsMes.get(c) || 0) + v); if (h.fora) foraTotal += v; if (!NAO_COMIDA.has(c)) { if (h.fora) comidaFora += v; else comidaMercado += v; } }
  const orc = data.orcCat || {};
  const orcamentos = Object.entries(orc).filter(([, v]) => (v as number) > 0).map(([cat, limite]) => { const gasto = catsMes.get(cat) || 0; return { cat, limite: limite as number, gasto, pct: gasto / (limite as number) }; }).sort((a, b) => b.pct - a.pct);
  const totalPer = [...cats.values()].reduce((a, b) => a + b, 0) || 1;
  const variacoes = [...precos.values()].map(e => { const l = e.lista.sort((a, b) => a.t - b.t); const ult = l[l.length - 1]; const ant = [...l].reverse().find(x => x.t < ult.t && Math.abs(x.p - ult.p) > 0.001); return ant ? { nome: e.nome, unit: e.unit, antes: ant.p, agora: ult.p, pct: (ult.p - ant.p) / ant.p } : null; })
    .filter((v: any) => v && Math.abs(v.pct) <= 1.5).sort((a: any, b: any) => Math.abs(b.pct) - Math.abs(a.pct)) as { nome: string; unit: string; antes: number; agora: number; pct: number }[];
  const totalNoPeriodo = noPeriodo.reduce((a: number, h: any) => a + (h.total || 0), 0);
  const primeiro = noPeriodo.length ? Math.min(...noPeriodo.map((h: any) => Date.parse(h.date))) : hoje.getTime();
  const semanas = Math.max(1, (hoje.getTime() - Math.max(primeiro, inicio.getTime())) / (7 * 864e5));
  return {
    compras: compras.length, comprasPeriodo: noPeriodo.length,
    rotuloPeriodo: periodo === '1m' ? 'este mês' : periodo === '3m' ? 'últimos 3 meses' : 'todo o histórico',
    mesAtual: meses[5].total, mesAnterior: meses[4].total, meses,
    ticketMedio: noPeriodo.length ? totalNoPeriodo / noPeriodo.length : 0, porSemana: totalNoPeriodo / semanas,
    categorias: [...cats.entries()].map(([cat, total]) => ({ cat, total, pct: total / totalPer })).sort((a, b) => b.total - a.total),
    categoriasExistentes: [...new Set(brutas.flatMap((h: any) => (h.items || []).map((i: any) => i.cat || 'Outros')))] as string[],
    lugares: [...porLugar.entries()].map(([lugar, total]) => ({ lugar, total })).filter(l => l.total > 0),
    produtos: [...prods.values()].sort((a, b) => b.total - a.total), variacoes,
    orcamentos, comidaMes: { mercado: comidaMercado, fora: comidaFora, total: comidaMercado + comidaFora }, foraMes: foraTotal,
  };
}
