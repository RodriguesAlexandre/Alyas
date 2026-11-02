// Converte uma nota lida pela IA em compra do histórico e atualiza lista/catálogo.
import { importReceipts } from './receipt-tools.ts';
import { sameProduct } from './product-identity.ts';

const UNID = ['un', 'g', 'kg', 'ml', 'L', 'fatia', 'pacote'];
const CATS = ['Hortifruti', 'Proteínas', 'Laticínios', 'Mercearia', 'Bebidas', 'Limpeza', 'Higiene', 'Utilidades', 'Outros'];
const num = (v: any) => (typeof v === 'number' && Number.isFinite(v) ? v : Number(String(v ?? '').replace(',', '.')));
const r2 = (n: number) => Math.round(n * 100) / 100;

export function montarNota(n: any, agora = new Date()) {
  const dia = /^\d{4}-\d{2}-\d{2}$/.test(String(n.date || '')) && Date.parse(n.date) <= agora.getTime() + 864e5 ? n.date + 'T12:00:00-03:00' : agora.toISOString();
  const items = (Array.isArray(n.items) ? n.items : []).filter((i: any) => String(i?.name || '').trim()).slice(0, 300).map((i: any, k: number) => {
    const qty = num(i.qty) > 0 && num(i.qty) <= 100000 ? num(i.qty) : 1;
    const lineTotal = num(i.lineTotal) >= 0 ? r2(num(i.lineTotal)) : num(i.price) >= 0 ? r2(num(i.price) * qty) : 0;
    const price = num(i.price) > 0 ? r2(num(i.price)) : qty ? r2(lineTotal / qty) : null;
    const name = String(i.name).trim().slice(0, 80);
    return { id: 'ia-' + agora.getTime().toString(36) + '-' + k, name, qty, unit: UNID.includes(i.unit) ? i.unit : 'un', cat: CATS.includes(i.cat) ? i.cat : 'Outros', price, date: dia, checked: true, priceSource: 'paid', lineTotal, originalText: name };
  });
  const soma = r2(items.reduce((a: number, i: any) => a + i.lineTotal, 0));
  const total = num(n.total) > 0 ? r2(num(n.total)) : soma;
  return {
    id: 'nota-' + agora.getTime().toString(36), date: dia, store: String(n.store || 'Mercado').slice(0, 100),
    ...(n.ref ? { receiptRef: String(n.ref).replace(/\s+/g, '').slice(0, 100) } : {}),
    total, unknown: 0, items, importBatch: 'nota-ia', ...(Math.abs(soma - total) > 0.05 ? { reviewNote: 'Soma dos itens ' + soma.toFixed(2).replace('.', ',') + ' (desconto ou item ilegível)' } : {}),
  };
}

export function notaDuplicada(data: any, nota: any) {
  return (data.history || []).some((h: any) => !h.archived && ((nota.receiptRef && h.receiptRef === nota.receiptRef) || (h.date && nota.date && h.date.slice(0, 10) === nota.date.slice(0, 10) && Math.abs((h.total || 0) - nota.total) < 0.01)));
}

/** Salva a nota no histórico, marca os produtos como "tem em casa" e tira da lista o que foi comprado. */
export function registrarNota(data: any, nota: any, tirarDaLista = true) {
  const r = importReceipts(data, [nota]);
  const salva = r.data.history.find((h: any) => h.id === nota.id) || nota;
  const ids = new Set(salva.items.map((i: any) => i.catalogId).filter(Boolean));
  const catalog = (r.data.catalog || []).map((p: any) => ids.has(p.id) ? { ...p, supply: 'ok' } : p);
  const comprado = (i: any) => salva.items.some((b: any) => (i.catalogId && b.catalogId === i.catalogId) || sameProduct(b.name, i.name, catalog));
  const tirados = tirarDaLista ? data.items.filter(comprado) : [];
  return { data: { ...r.data, catalog, items: tirarDaLista ? data.items.filter((i: any) => !comprado(i)) : data.items }, tirados: tirados.length, itens: salva.items.length };
}
