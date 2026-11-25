import { useMemo } from 'react';
import { ShoppingBasket, AlertTriangle, RotateCcw, Plus, ArrowUpRight, Radar, ChevronDown, Check } from 'lucide-react';
import ProdutoIcone from './produto-icone';
import { sugerirReposicao, itemDaSugestao } from './reposicao';
import { melhorCotacao } from './casa-logic';
import { quem } from './quem';

const money = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const saudacao = () => { const h = new Date().getHours(); return h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite'; };

/** Resumo do dia na Visão geral: o que falta, o que está acabando, o que está na hora de repor e o radar da casa. */
export default function Resumo({ data, save, busy, ready, irPara }: { data: any; save: (d: any, m?: string) => Promise<any>; busy: boolean; ready: boolean; irPara: (tab: number) => void }) {
  const pendentes = (data.items || []).filter((i: any) => !i.checked);
  const acabando = (data.catalog || []).filter((p: any) => (p.supply === 'low' || p.supply === 'out') && !pendentes.some((i: any) => i.catalogId === p.id));
  const repor = useMemo(() => sugerirReposicao(data), [data]);
  const radar = (data.casa || []).filter((i: any) => i.radar && i.status !== 'temos').sort((a: any, b: any) => (a.prioridade === 'alta' ? 0 : 1) - (b.prioridade === 'alta' ? 0 : 1))[0];
  const nome = quem();
  const add = (lista: any[], msg: string) => save({ ...data, items: [...data.items, ...lista] }, msg);
  const daCatalogo = (p: any) => ({ id: crypto.randomUUID(), name: p.name, qty: 1, unit: p.unit, cat: p.cat, checked: false, price: null, date: null, catalogId: p.id });
  const abrir = (id: string) => { const el = document.getElementById(id) as HTMLDetailsElement | null; if (!el) return; el.open = true; el.scrollIntoView({ behavior: 'smooth', block: 'center' }); };

  return <section className="card resumo">
    <div className="resumo-topo"><div><span className="eyebrow">{new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }).toUpperCase()}</span>
      <h2>{saudacao()}{nome ? ', ' + nome : ''}.</h2></div></div>
    <div className="resumo-tiles">
      <button onClick={() => pendentes.length ? abrir('nao-pode-faltar') : irPara(1)}><ShoppingBasket size={18} /><b>{pendentes.length}</b><small>para comprar</small></button>
      <button className={acabando.length ? 'alerta' : ''} onClick={() => abrir('acabando')}><AlertTriangle size={18} /><b>{acabando.length}</b><small>acabando</small></button>
      <button className={repor.length ? 'repor' : ''} onClick={() => abrir('hora-de-repor')}><RotateCcw size={18} /><b>{repor.length}</b><small>hora de repor</small></button>
    </div>
    {pendentes.length > 0 && <details className="resumo-suspensa" id="nao-pode-faltar">
      <summary><ShoppingBasket size={15} /><span><b>Não pode faltar</b><small>{pendentes.slice(0, 3).map((i: any) => i.name).join(', ')}{pendentes.length > 3 ? ` +${pendentes.length - 3}` : ''}</small></span><ChevronDown size={16} className="seta" /></summary>
      {pendentes.slice(0, 10).map((i: any) => <div key={i.id} className="mini-row"><ProdutoIcone nome={i.name} cat={i.cat} /><div><b>{i.name}</b><small>{i.qty} {i.unit} · {i.cat}{i.lugar && i.lugar !== 'Supermercado' ? ' · ' + i.lugar : ''}</small></div>
        <button className="icon-btn" aria-label={'Marcar ' + i.name + ' como comprado'} disabled={!ready || busy} onClick={() => save({ ...data, items: data.items.map((x: any) => x.id === i.id ? { ...x, checked: true, by: quem() || undefined } : x) }, i.name + ' marcado como comprado')}><Check size={18} /></button></div>)}
      <button className="secondary resumo-todos" onClick={() => irPara(1)}>Ver a lista completa{pendentes.length > 10 ? ` (${pendentes.length})` : ''} <ArrowUpRight size={14} /></button>
    </details>}
    {acabando.length > 0 && <details className="resumo-suspensa" id="acabando">
      <summary><AlertTriangle size={15} /><span><b>Acabando</b><small>{acabando.slice(0, 3).map((p: any) => p.name).join(', ')}{acabando.length > 3 ? ` +${acabando.length - 3}` : ''}</small></span><ChevronDown size={16} className="seta" /></summary>
      {acabando.slice(0, 12).map((p: any) => <div key={p.id} className="mini-row"><ProdutoIcone nome={p.name} cat={p.cat} /><div><b>{p.name}</b><small>{p.supply === 'out' ? 'acabou' : 'acabando'} · {p.cat}</small></div>
        <button className="icon-btn add" aria-label={'Pôr ' + p.name + ' na lista'} disabled={!ready || busy} onClick={() => add([daCatalogo(p)], p.name + ' foi para a lista')}><Plus size={18} /></button></div>)}
      <button className="secondary resumo-todos" disabled={!ready || busy} onClick={() => add(acabando.map(daCatalogo), acabando.length + (acabando.length === 1 ? ' item foi' : ' itens foram') + ' para a lista')}><Plus size={14} /> Pôr {acabando.length === 1 ? 'na lista' : 'todos na lista'}</button>
    </details>}
    {repor.length > 0 && <details className="resumo-suspensa" id="hora-de-repor">
      <summary><RotateCcw size={15} /><span><b>Hora de repor</b><small>{repor.slice(0, 3).map(r => r.nome).join(', ')}{repor.length > 3 ? ` +${repor.length - 3}` : ''}</small></span><ChevronDown size={16} className="seta" /></summary>
      <p className="muted resumo-nota">Pelo ritmo das compras de vocês.</p>
      {repor.slice(0, 8).map(s => <div key={s.chave} className="mini-row"><ProdutoIcone nome={s.nome} cat={s.cat} /><div><b>{s.nome}</b><small>costumam comprar a cada {s.mediaDias} dias · última há {s.diasDesde}</small></div>
        <button className="icon-btn add" aria-label={'Pôr ' + s.nome + ' na lista'} disabled={!ready || busy} onClick={() => add([itemDaSugestao(s)], s.nome + ' foi para a lista')}><Plus size={18} /></button></div>)}
      {repor.length > 1 && <button className="secondary resumo-todos" disabled={!ready || busy} onClick={() => add(repor.slice(0, 8).map(itemDaSugestao), Math.min(8, repor.length) + ' itens foram para a lista')}><Plus size={14} /> Pôr {repor.length <= 8 ? 'todos' : 'esses 8'} na lista</button>}
    </details>}
    {radar && <button className="resumo-radar" onClick={() => irPara(4)}><Radar size={16} /><span><b>{radar.name.replace(/^Robô aspirador /, 'Robô ')}: {radar.radar.decisao}</b><small>{(() => { const m = melhorCotacao(radar); return m ? 'melhor ' + money(m.preco) + (radar.meta ? ' · meta ' + money(radar.meta) : '') : 'sem cotação hoje'; })()}</small></span><ArrowUpRight size={16} /></button>}
  </section>;
}
