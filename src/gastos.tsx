import { useMemo, useState } from 'react';
import { TrendingUp, TrendingDown, Receipt, ShoppingCart, CalendarRange } from 'lucide-react';
import { gastos, type Periodo } from './gastos-logic';
import { LUGARES } from './lugar';

const money = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const money0 = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const CORES: Record<string, string> = { Hortifruti: '#7d9c5a', Proteínas: '#d9714a', Laticínios: '#e8b84f', Mercearia: '#1f3d30', Bebidas: '#5b8fa8', Limpeza: '#9b7bb5', Higiene: '#c97a9a', Utilidades: '#8a8f80', 'Casa e bem-estar': '#b0789b', Outros: '#b9b29f' };

/** Dashboard de gastos da casa, a partir das compras registradas (notas e compras concluídas). */
export default function Gastos({ data, compacto = false }: { data: any; compacto?: boolean }) {
  const [periodo, setPeriodo] = useState<Periodo>('3m');
  const [lugares, setLugares] = useState<string[]>([...LUGARES]);
  const todosL = lugares.length === LUGARES.length;
  const alterna = (l: string) => setLugares(v => todosL ? [l] : v.includes(l) ? (v.length > 1 ? v.filter(x => x !== l) : [...LUGARES]) : [...v, l]);
  const [cats, setCats] = useState<string[] | null>(null);
  const alternaCat = (c: string) => setCats(v => !v ? [c] : v.includes(c) ? (v.length > 1 ? v.filter(x => x !== c) : null) : [...v, c]);
  const g = useMemo(() => gastos(data, periodo, new Date(), lugares, cats), [data, periodo, lugares, cats]);
  const todos = todosL && !cats;
  const ordemCats = Object.keys(CORES).filter(c => g.categoriasExistentes.includes(c)).concat(g.categoriasExistentes.filter(c => !(c in CORES)));
  const filtros = <div className="chips gastos-lugares" role="group" aria-label="Filtrar por lugar de compra">
    <button className={todosL ? 'selected' : ''} aria-pressed={todosL} onClick={() => setLugares([...LUGARES])}>Tudo</button>
    {LUGARES.map(l => <button key={l} className={!todosL && lugares.includes(l) ? 'selected' : ''} aria-pressed={!todosL && lugares.includes(l)} onClick={() => alterna(l)}>{!todosL && lugares.includes(l) ? '✓ ' : ''}{l}</button>)}
  </div>;
  if (!g.compras && todos) return <section className="card gastos"><span className="eyebrow">GASTOS DA CASA</span><h2>Seu painel de gastos</h2><p className="muted">Assim que vocês concluírem compras ou importarem notas, os gastos aparecem aqui por mês e por categoria.</p></section>;
  const maxMes = Math.max(...g.meses.map(m => m.total), 1);
  const maxCat = Math.max(...g.categorias.map(c => c.total), 1);
  const delta = g.mesAnterior > 0 ? (g.mesAtual - g.mesAnterior) / g.mesAnterior : 0;
  return <section className="card gastos">
    <div className="section-title"><div><span className="eyebrow">GASTOS DA CASA</span><h2>Para onde vai o dinheiro</h2></div>
      {!compacto && <div className="chips gastos-periodo">{([['1m', 'Este mês'], ['3m', '3 meses'], ['tudo', 'Tudo']] as [Periodo, string][]).map(([v, l]) => <button key={v} className={periodo === v ? 'selected' : ''} onClick={() => setPeriodo(v)}>{l}</button>)}</div>}</div>
    {filtros}
    <div className="chips gastos-lugares gastos-catfiltro" role="group" aria-label="Filtrar por categoria">
      <button className={!cats ? 'selected' : ''} aria-pressed={!cats} onClick={() => setCats(null)}>Todas as categorias</button>
      {ordemCats.map(c => <button key={c} aria-pressed={!!cats?.includes(c)} className={cats?.includes(c) ? 'selected' : ''} onClick={() => alternaCat(c)}><i style={{ background: CORES[c] || '#999' }} />{cats?.includes(c) ? '✓ ' : ''}{c}</button>)}
    </div>
    {!todos && <p className="muted gastos-filtro-nota">Mostrando só: {[lugares.length < LUGARES.length ? lugares.join(' + ') : '', cats ? cats.join(' + ') : ''].filter(Boolean).join(' · ')}. Toque em Tudo e em Todas as categorias para ver o gasto total.</p>}
    {lugares.length === LUGARES.length && g.lugares.length > 1 && <div className="gastos-lugar-resumo">{g.lugares.map(l => <span key={l.lugar}><b>{money0(l.total)}</b> {l.lugar}</span>)}<small className="muted">{g.rotuloPeriodo}</small></div>}
    <div className="gastos-kpis">
      <div><small><CalendarRange size={14} /> Este mês</small><strong>{money0(g.mesAtual)}</strong><span className={delta > 0 ? 'up' : 'down'}>{!g.mesAtual ? 'nenhuma compra registrada ainda' : g.mesAnterior > 0 ? <>{delta > 0 ? <TrendingUp size={13} /> : <TrendingDown size={13} />} {Math.abs(Math.round(delta * 100))}% vs mês passado</> : 'primeiro mês registrado'}</span></div>
      <div><small><Receipt size={14} /> Por compra</small><strong>{money0(g.ticketMedio)}</strong><span>{g.comprasPeriodo} compras no período</span></div>
      <div><small><ShoppingCart size={14} /> Por semana</small><strong>{money0(g.porSemana)}</strong><span>média do período · orçamento {money0(data.budget)}</span></div>
    </div>
    <h3 className="gastos-h3">Por mês</h3>
    <div className="gastos-meses" role="img" aria-label="Gastos por mês">
      {g.meses.map(m => <div key={m.chave} className={'gm' + (m.atual ? ' atual' : '')}>
        <span className="gm-valor">{m.total ? money0(m.total) : ''}</span>
        <i style={{ height: Math.max(3, (m.total / maxMes) * 110) + 'px' }} />
        <small>{m.rotulo}</small></div>)}
    </div>
    <h3 className="gastos-h3">Por categoria <small>{g.rotuloPeriodo}</small></h3>
    <div className="gastos-cats">{g.categorias.map(c => <div key={c.cat} className="gc">
      <span className="gc-nome"><i style={{ background: CORES[c.cat] || '#999' }} />{c.cat}</span>
      <div className="gc-barra"><i style={{ width: (c.total / maxCat) * 100 + '%', background: CORES[c.cat] || '#999' }} /></div>
      <span className="gc-valor">{money0(c.total)} <small>{Math.round(c.pct * 100)}%</small></span></div>)}</div>
    {!compacto && <div className="gastos-duas">
      <div><h3 className="gastos-h3">O que mais pesa</h3><ol className="gastos-top">{g.produtos.slice(0, 8).map(p => <li key={p.nome}><span>{p.nome}<small>{p.vezes}× · {p.cat}</small></span><b>{money(p.total)}</b></li>)}</ol></div>
      <div><h3 className="gastos-h3">Preços que mudaram</h3>{g.variacoes.length ? <ul className="gastos-var">{g.variacoes.slice(0, 8).map(v => <li key={v.nome + v.unit}><span>{v.nome}<small>{money(v.antes)} → {money(v.agora)} /{v.unit}</small></span><b className={v.pct > 0 ? 'up' : 'down'}>{v.pct > 0 ? '+' : ''}{Math.round(v.pct * 100)}%</b></li>)}</ul> : <p className="muted">Ainda não há preços repetidos para comparar.</p>}</div>
    </div>}
  </section>;
}
