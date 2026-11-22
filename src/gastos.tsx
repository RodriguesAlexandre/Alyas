import { useMemo, useState } from 'react';
import { TrendingUp, TrendingDown, Receipt, ShoppingCart, CalendarRange, ChevronDown, Plus, Trash2, Target, Bike } from 'lucide-react';
import { gastos, type Periodo } from './gastos-logic';
import { TODOS_LUGARES as LUGARES, FORA } from './lugar';
import { quem } from './quem';

const money = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const money0 = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const CORES: Record<string, string> = { Hortifruti: '#7d9c5a', Proteínas: '#d9714a', Laticínios: '#e8b84f', Mercearia: '#1f3d30', Bebidas: '#5b8fa8', Limpeza: '#9b7bb5', Higiene: '#c97a9a', Utilidades: '#8a8f80', 'Casa e bem-estar': '#b0789b', 'Comida pronta': '#e0662e', Farmácia: '#3fa7a0', Outros: '#b9b29f' };

/** Dashboard de gastos da casa, a partir das compras registradas (notas e compras concluídas). */
export default function Gastos({ data, save, busy, compacto = false }: { data: any; save?: (d: any, m?: string) => Promise<any>; busy?: boolean; compacto?: boolean }) {
  const [fora, setFora] = useState(false), [editOrc, setEditOrc] = useState(false);
  const [periodo, setPeriodo] = useState<Periodo>('3m');
  const [lugares, setLugares] = useState<string[]>([...LUGARES]);
  const todosL = lugares.length === LUGARES.length;
    const [cats, setCats] = useState<string[] | null>(null);
    const g = useMemo(() => gastos(data, periodo, new Date(), lugares, cats), [data, periodo, lugares, cats]);
  const todos = todosL && !cats;
  const ordemCats = Object.keys(CORES).concat(g.categoriasExistentes.filter(c => !(c in CORES)));
  const filtros = null;
  if (!g.compras && todos) return <section className="card gastos"><span className="eyebrow">GASTOS DA CASA</span><h2>Seu painel de gastos</h2><p className="muted">Assim que vocês concluírem compras ou importarem notas, os gastos aparecem aqui por mês e por categoria.</p>{save && <FormFora data={data} save={save} busy={busy} />}</section>;
  const maxMes = Math.max(...g.meses.map(m => m.total), 1);
  const maxCat = Math.max(...g.categorias.map(c => c.total), 1);
  const delta = g.mesAnterior > 0 ? (g.mesAtual - g.mesAnterior) / g.mesAnterior : 0;
  return <section className="card gastos">
    <div className="section-title"><div><span className="eyebrow">GASTOS DA CASA</span><h2>Para onde vai o dinheiro</h2></div>
      {!compacto && <div className="chips gastos-periodo">{([['1m', 'Este mês'], ['3m', '3 meses'], ['tudo', 'Tudo']] as [Periodo, string][]).map(([v, l]) => <button key={v} className={periodo === v ? 'selected' : ''} onClick={() => setPeriodo(v)}>{l}</button>)}</div>}</div>
    <div className="gastos-filtros">
      <Multi rotulo="Lugar" todosRotulo="Todos os lugares" opcoes={[...LUGARES]} marcados={todosL ? null : lugares} onMudar={v => setLugares(v ? v : [...LUGARES])} />
      <Multi rotulo="Categoria" todosRotulo="Todas as categorias" opcoes={ordemCats} cores={CORES} marcados={cats} onMudar={setCats} />
    </div>
    {!todos && <button type="button" className="text-btn gastos-limpar" onClick={() => { setLugares([...LUGARES]); setCats(null); }}>✕ Limpar filtros</button>}
    {!todos && <p className="muted gastos-filtro-nota">Mostrando só: {[lugares.length < LUGARES.length ? lugares.join(' + ') : '', cats ? cats.join(' + ') : ''].filter(Boolean).join(' · ')}. Toque em Tudo e em Todas as categorias para ver o gasto total.</p>}
    {lugares.length === LUGARES.length && g.lugares.length > 1 && <div className="gastos-lugar-resumo">{g.lugares.map(l => <span key={l.lugar}><b>{money0(l.total)}</b> {l.lugar}</span>)}<small className="muted">{g.rotuloPeriodo}</small></div>}
    <div className="gastos-kpis">
      <div><small><CalendarRange size={14} /> Este mês</small><strong>{money0(g.mesAtual)}</strong><span className={delta > 0 ? 'up' : 'down'}>{!g.mesAtual ? 'nenhuma compra registrada ainda' : g.mesAnterior > 0 ? <>{delta > 0 ? <TrendingUp size={13} /> : <TrendingDown size={13} />} {Math.abs(Math.round(delta * 100))}% vs mês passado</> : 'primeiro mês registrado'}</span></div>
      <div><small><Receipt size={14} /> Por compra</small><strong>{money0(g.ticketMedio)}</strong><span>{g.comprasPeriodo} compras no período</span></div>
      <div><small><ShoppingCart size={14} /> Por semana</small><strong>{money0(g.porSemana)}</strong><span>média do período · orçamento {money0(data.budget)}</span></div>
    </div>
    {(g.comidaMes.total > 0) && <p className="gastos-comida"><Bike size={15} /> Comida este mês: <b>{money0(g.comidaMes.total)}</b> <small>mercado {money0(g.comidaMes.mercado)} + fora de casa {money0(g.comidaMes.fora)}</small></p>}
    {save && !compacto && <div className="gastos-acoes"><button type="button" className="secondary" onClick={() => setFora(!fora)}><Plus size={15} /> Gasto fora do mercado</button><button type="button" className="secondary" onClick={() => setEditOrc(!editOrc)}><Target size={15} /> Limites por categoria</button></div>}
    {fora && save && <FormFora data={data} save={save} busy={busy} onPronto={() => setFora(false)} />}
    {editOrc && save && <FormOrc data={data} save={save} busy={busy} cats={ordemCats} onPronto={() => setEditOrc(false)} />}
    {g.orcamentos.length > 0 && <><h3 className="gastos-h3">Orçamento do mês por categoria</h3><div className="gastos-orc">{g.orcamentos.map(o => <div key={o.cat} className={'go ' + (o.pct >= 1 ? 'estourou' : o.pct >= .8 ? 'perto' : '')}>
      <span className="go-nome"><i style={{ background: CORES[o.cat] || '#999' }} />{o.cat}<small>{o.pct >= 1 ? 'passou do limite' : o.pct >= .8 ? 'chegou a ' + Math.round(o.pct * 100) + '%' : ''}</small></span>
      <div className="go-barra"><i style={{ width: Math.min(100, o.pct * 100) + '%' }} /><b style={{ left: '80%' }} /></div>
      <span className="go-valor">{money0(o.gasto)} <small>de {money0(o.limite)}</small></span></div>)}</div></>}
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
    {save && !compacto && (data.gastosFora || []).length > 0 && <details className="gastos-fora-lista"><summary>Gastos fora do mercado lançados ({data.gastosFora.length})</summary><ul>{[...data.gastosFora].sort((a: any, b: any) => Date.parse(b.data) - Date.parse(a.data)).slice(0, 30).map((f: any) => <li key={f.id}><span>{f.desc || f.tipo}<small>{f.tipo} · {new Date(f.data).toLocaleDateString('pt-BR')}{f.por ? ' · ' + f.por : ''}</small></span><b>{money(f.valor)}</b><button className="icon-btn" aria-label="Apagar gasto" disabled={busy} onClick={() => save({ ...data, gastosFora: data.gastosFora.filter((x: any) => x.id !== f.id) }, 'Gasto apagado')}><Trash2 size={14} /></button></li>)}</ul></details>}
    {!compacto && <div className="gastos-duas">
      <div><h3 className="gastos-h3">O que mais pesa</h3><ol className="gastos-top">{g.produtos.slice(0, 8).map(p => <li key={p.nome}><span>{p.nome}<small>{p.vezes}× · {p.cat}</small></span><b>{money(p.total)}</b></li>)}</ol></div>
      <div><h3 className="gastos-h3">Preços que mudaram</h3>{g.variacoes.length ? <ul className="gastos-var">{g.variacoes.slice(0, 8).map(v => <li key={v.nome + v.unit}><span>{v.nome}<small>{money(v.antes)} → {money(v.agora)} /{v.unit}</small></span><b className={v.pct > 0 ? 'up' : 'down'}>{v.pct > 0 ? '+' : ''}{Math.round(v.pct * 100)}%</b></li>)}</ul> : <p className="muted">Ainda não há preços repetidos para comparar.</p>}</div>
    </div>}
  </section>;
}

/** Lista suspensa com caixas de marcar (várias opções ao mesmo tempo). */
function Multi({ rotulo, todosRotulo, opcoes, marcados, onMudar, cores }: { rotulo: string; todosRotulo: string; opcoes: string[]; marcados: string[] | null; onMudar: (v: string[] | null) => void; cores?: Record<string, string> }) {
  const [aberto, setAberto] = useState(false);
  const resumo = !marcados ? todosRotulo : marcados.length === 1 ? marcados[0] : marcados.length + ' selecionados';
  const alterna = (o: string) => { const atual = marcados || []; const prox = atual.includes(o) ? atual.filter(x => x !== o) : [...atual, o]; onMudar(!prox.length || prox.length === opcoes.length ? null : prox); };
  return <div className={'multi' + (aberto ? ' aberto' : '') + (marcados ? ' ativo' : '')}>
    <button type="button" className="multi-botao" aria-expanded={aberto} onClick={() => setAberto(!aberto)}><small>{rotulo}</small><span>{resumo}</span><ChevronDown size={16} /></button>
    {aberto && <><div className="multi-fundo" onClick={() => setAberto(false)} />
      <div className="multi-painel" role="listbox" aria-multiselectable="true">
        <label className="multi-op todos"><input type="checkbox" checked={!marcados} onChange={() => onMudar(null)} /> {todosRotulo}</label>
        {opcoes.map(o => <label key={o} className="multi-op"><input type="checkbox" checked={!!marcados?.includes(o)} onChange={() => alterna(o)} />{cores && <i style={{ background: cores[o] || '#999' }} />}{o}</label>)}
        <button type="button" className="primary multi-ok" onClick={() => setAberto(false)}>Pronto</button>
      </div></>}
  </div>;
}

function FormFora({ data, save, busy, onPronto }: { data: any; save: (d: any, m?: string) => Promise<any>; busy?: boolean; onPronto?: () => void }) {
  const [tipo, setTipo] = useState<string>('iFood/delivery');
  return <form className="gastos-form" onSubmit={async e => {
    e.preventDefault(); const f = new FormData(e.currentTarget); const valor = Number(String(f.get('valor')).replace(/\./g, '').replace(',', '.'));
    if (!(valor > 0)) return; const dia = String(f.get('data') || '') || new Date().toLocaleDateString('sv-SE');
    const g = { id: 'f-' + Date.now().toString(36), data: new Date(dia + 'T12:00:00').toISOString(), tipo, valor, ...(String(f.get('desc') || '').trim() ? { desc: String(f.get('desc')).trim().slice(0, 80) } : {}), ...(quem() ? { por: quem() } : {}) };
    if (await save({ ...data, gastosFora: [...(data.gastosFora || []), g] }, tipo + ' lançado')) { e.currentTarget?.reset?.(); onPronto?.(); }
  }}>
    <b>Gasto fora do mercado</b>
    <div className="chips">{FORA.map(t => <button type="button" key={t} className={tipo === t ? 'selected' : ''} onClick={() => setTipo(t)}>{t}</button>)}</div>
    <div className="form-grid"><label>Valor (R$)<input name="valor" inputMode="decimal" required placeholder="0,00" /></label><label>Dia<input name="data" type="date" defaultValue={new Date().toLocaleDateString('sv-SE')} /></label></div>
    <label>O que foi (opcional)<input name="desc" maxLength={80} placeholder={tipo === 'Farmácia' ? 'Ex.: remédio, protetor' : 'Ex.: pizza de sábado'} /></label>
    <button className="primary" disabled={busy}><Plus size={15} /> Lançar</button>
  </form>;
}
function FormOrc({ data, save, busy, cats, onPronto }: { data: any; save: (d: any, m?: string) => Promise<any>; busy?: boolean; cats: string[]; onPronto: () => void }) {
  const orc = data.orcCat || {};
  return <form className="gastos-form" onSubmit={async e => {
    e.preventDefault(); const f = new FormData(e.currentTarget); const novo: Record<string, number> = {};
    cats.forEach(c => { const v = Number(String(f.get(c) || '').replace(/\./g, '').replace(',', '.')); if (v > 0) novo[c] = Math.round(v * 100) / 100; });
    if (await save({ ...data, orcCat: novo }, 'Limites por categoria salvos')) onPronto();
  }}>
    <b>Limite por mês em cada categoria</b><small className="muted">Deixe vazio para não ter limite. Vocês recebem um aviso quando chegar a 80%.</small>
    <div className="gastos-orc-form">{cats.map(c => <label key={c}><span><i style={{ background: CORES[c] || '#999' }} />{c}</span><input name={c} inputMode="decimal" placeholder="—" defaultValue={orc[c] ? String(orc[c]).replace('.', ',') : ''} /></label>)}</div>
    <button className="primary" disabled={busy}>Salvar limites</button>
  </form>;
}
