// Insights de custos calculados a partir dos dados do app (puro, testável).
import { gastos } from './gastos-logic.ts';
import { lugarDe } from './lugar.ts';

export type Insight = { tom: 'bom' | 'alerta' | 'dica'; titulo: string; texto: string };
const money = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const pct = (v: number) => Math.round(v * 100) + '%';

export function insights(data: any, hoje = new Date()): Insight[] {
  const out: Insight[] = [];
  const g = gastos(data, '3m', hoje), mes = gastos(data, '1m', hoje);
  if (!g.compras) return out;
  // ritmo do mês e orçamento
  const dia = hoje.getDate(), diasMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0).getDate();
  const orcMes = (data.budget || 0) * diasMes / 7;
  if (mes.mesAtual > 0 && orcMes > 0) {
    const proj = mes.mesAtual / Math.max(dia, 7) * diasMes;
    out.push(proj > orcMes * 1.05
      ? { tom: 'alerta', titulo: 'Mês acima do orçamento', texto: `No ritmo atual o mês fecha em ~${money(proj)}, acima dos ~${money(orcMes)} do orçamento semanal de ${money(data.budget)}.` }
      : { tom: 'bom', titulo: 'Mês dentro do orçamento', texto: `${money(mes.mesAtual)} até agora; no ritmo atual fecha em ~${money(proj)}, dentro dos ~${money(orcMes)} previstos.` });
  }
  if (g.mesAnterior > 0 && g.mesAtual > 0 && dia >= 20) {
    const d = (g.mesAtual - g.mesAnterior) / g.mesAnterior;
    if (Math.abs(d) >= .15) out.push({ tom: d > 0 ? 'alerta' : 'bom', titulo: d > 0 ? 'Gastando mais que no mês passado' : 'Gastando menos que no mês passado', texto: `${d > 0 ? '+' : ''}${pct(d)} em relação ao mês passado (${money(g.mesAnterior)}).` });
  }
  for (const o of mes.orcamentos.filter(o => o.pct >= .8)) out.unshift({ tom: 'alerta', titulo: o.pct >= 1 ? `${o.cat}: limite do mês estourado` : `${o.cat}: ${pct(o.pct)} do limite do mês`, texto: `${money(o.gasto)} de ${money(o.limite)} definidos para ${o.cat} este mês.` });
  if (mes.foraMes > 0 && mes.comidaMes.total > 0 && mes.comidaMes.fora / mes.comidaMes.total >= .3) out.push({ tom: 'dica', titulo: `${pct(mes.comidaMes.fora / mes.comidaMes.total)} da comida veio de fora`, texto: `${money(mes.comidaMes.fora)} em delivery, padaria e restaurante este mês, contra ${money(mes.comidaMes.mercado)} no mercado.` });
  // categoria que mais pesa
  const top = g.categorias[0];
  if (top && top.pct >= .3) out.push({ tom: 'dica', titulo: `${top.cat} é ${pct(top.pct)} dos gastos`, texto: `${money(top.total)} nos últimos 3 meses. É onde uma troca de marca, compra no atacado ou oferta faz mais diferença.` });
  // produtos que mais pesam
  const prods = g.produtos.slice(0, 3);
  if (prods.length >= 2) out.push({ tom: 'dica', titulo: 'Os itens que mais pesam', texto: prods.map(p => `${p.nome} (${money(p.total)}, ${p.vezes}×)`).join(' · ') + '. Vale acompanhar o preço desses na etiqueta.' });
  // preços que subiram
  const altas = g.variacoes.filter(v => v.pct >= .1).slice(0, 3);
  if (altas.length) out.push({ tom: 'alerta', titulo: 'Preços que subiram', texto: altas.map(v => `${v.nome} +${pct(v.pct)}`).join(' · ') + '. Compare com outra marca ou outro mercado antes de repor.' });
  const quedas = g.variacoes.filter(v => v.pct <= -.1).slice(0, 2);
  if (quedas.length) out.push({ tom: 'bom', titulo: 'Preços que caíram', texto: quedas.map(v => `${v.nome} ${pct(v.pct)}`).join(' · ') + '. Bom momento para estocar se não estraga.' });
  // lugar de compra
  if (g.lugares.length > 1) { const tot = g.lugares.reduce((a, l) => a + l.total, 0); out.push({ tom: 'dica', titulo: 'Onde vai o dinheiro', texto: g.lugares.map(l => `${l.lugar} ${pct(l.total / tot)}`).join(' · ') + '.' }); }
  // compras pequenas e frequentes
  const hist = (data.history || []).filter((h: any) => !h.archived && h.date && Date.parse(h.date) > hoje.getTime() - 30 * 864e5);
  const pequenas = hist.filter((h: any) => (h.total || 0) < 60).length;
  if (pequenas >= 3) out.push({ tom: 'dica', titulo: `${pequenas} compras pequenas no último mês`, texto: 'Idas rápidas ao mercado costumam puxar itens fora da lista. Juntar numa compra maior com a lista pronta ajuda a gastar menos.' });
  // casa: metas de compra
  const casa = (data.casa || []).filter((i: any) => i.status !== 'temos' && i.meta && i.cotacoes?.length);
  for (const i of casa.slice(0, 2)) { const m = Math.min(...i.cotacoes.map((c: any) => c.preco)); out.push(m <= i.meta ? { tom: 'bom', titulo: `${i.name}: dentro da meta`, texto: `Melhor cotação ${money(m)}, meta ${money(i.meta)}.` } : { tom: 'dica', titulo: `${i.name}: faltam ${money(m - i.meta)}`, texto: `Melhor cotação ${money(m)} para a meta de ${money(i.meta)}. Esperar uma promoção pode valer a pena.` }); }
  // itens da casa e bem-estar
  const bem = g.categorias.find(c => c.cat === 'Casa e bem-estar');
  if (bem && bem.pct >= .08) out.push({ tom: 'dica', titulo: 'Casa e bem-estar pesando', texto: `${money(bem.total)} em essências, incensos e afins nos últimos 3 meses (${pct(bem.pct)}).` });
  return out.slice(0, 8);
}

/** Resumo em texto para a IA analisar. */
export function resumoParaIA(data: any, hoje = new Date()) {
  const g = gastos(data, '3m', hoje);
  return [
    `Orçamento semanal: R$ ${data.budget}. Gasto este mês: R$ ${g.mesAtual.toFixed(2)}; mês passado: R$ ${g.mesAnterior.toFixed(2)}; média por semana (3 meses): R$ ${g.porSemana.toFixed(2)}.`,
    'Por categoria (3 meses): ' + g.categorias.map(c => `${c.cat} R$ ${c.total.toFixed(2)}`).join('; '),
    'Por lugar: ' + g.lugares.map(l => `${l.lugar} R$ ${l.total.toFixed(2)}`).join('; '),
    'Itens que mais pesam: ' + g.produtos.slice(0, 12).map(p => `${p.nome} R$ ${p.total.toFixed(2)} (${p.vezes}x)`).join('; '),
    'Preços que mudaram: ' + g.variacoes.slice(0, 10).map(v => `${v.nome} ${Math.round(v.pct * 100)}%`).join('; '),
    'Lista atual: ' + (data.items || []).filter((i: any) => !i.checked).map((i: any) => i.name + (lugarDe(i) !== 'Supermercado' ? ' [' + lugarDe(i) + ']' : '')).join(', '),
    'Casa, para comprar: ' + (data.casa || []).filter((i: any) => i.status !== 'temos').map((i: any) => i.name + (i.cotacoes?.length ? ' melhor R$ ' + Math.min(...i.cotacoes.map((c: any) => c.preco)) : '') + (i.meta ? ' meta R$ ' + i.meta : '')).join('; '),
  ].join('\n');
}
