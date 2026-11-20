import { useMemo } from 'react';
import { ShoppingBasket, AlertTriangle, RotateCcw, Plus, ArrowUpRight, Radar } from 'lucide-react';
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

  return <section className="card resumo">
    <div className="resumo-topo"><div><span className="eyebrow">{new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }).toUpperCase()}</span>
      <h2>{saudacao()}{nome ? ', ' + nome : ''}.</h2></div></div>
    <div className="resumo-tiles">
      <button onClick={() => irPara(1)}><ShoppingBasket size={18} /><b>{pendentes.length}</b><small>para comprar</small></button>
      <button className={acabando.length ? 'alerta' : ''} onClick={() => irPara(1)}><AlertTriangle size={18} /><b>{acabando.length}</b><small>acabando</small></button>
      <button className={repor.length ? 'repor' : ''} onClick={() => document.getElementById('hora-de-repor')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}><RotateCcw size={18} /><b>{repor.length}</b><small>hora de repor</small></button>
    </div>
    {acabando.length > 0 && <div className="resumo-linha"><span><b>Acabando:</b> {acabando.slice(0, 5).map((p: any) => p.name).join(', ')}{acabando.length > 5 ? '…' : ''}</span>
      <button className="secondary" disabled={!ready || busy} onClick={() => add(acabando.map((p: any) => ({ id: crypto.randomUUID(), name: p.name, qty: 1, unit: p.unit, cat: p.cat, checked: false, price: null, date: null, catalogId: p.id })), acabando.length + ' itens foram para a lista')}><Plus size={14} /> Pôr na lista</button></div>}
    {repor.length > 0 && <div className="resumo-repor" id="hora-de-repor">
      <h3><RotateCcw size={16} /> Hora de repor <small>pelo ritmo das compras de vocês</small></h3>
      {repor.slice(0, 5).map(s => <div key={s.chave} className="mini-row"><ProdutoIcone nome={s.nome} cat={s.cat} /><div><b>{s.nome}</b><small>costumam comprar a cada {s.mediaDias} dias · última há {s.diasDesde}</small></div>
        <button className="icon-btn add" aria-label={'Pôr ' + s.nome + ' na lista'} disabled={!ready || busy} onClick={() => add([itemDaSugestao(s)], s.nome + ' foi para a lista')}><Plus size={18} /></button></div>)}
      {repor.length > 1 && <button className="secondary resumo-todos" disabled={!ready || busy} onClick={() => add(repor.slice(0, 5).map(itemDaSugestao), Math.min(5, repor.length) + ' itens foram para a lista')}>Pôr {Math.min(5, repor.length) === repor.length ? 'todos' : 'esses ' + Math.min(5, repor.length)} na lista</button>}
    </div>}
    {radar && <button className="resumo-radar" onClick={() => irPara(4)}><Radar size={16} /><span><b>{radar.name.replace(/^Robô aspirador /, 'Robô ')}: {radar.radar.decisao}</b><small>{(() => { const m = melhorCotacao(radar); return m ? 'melhor ' + money(m.preco) + (radar.meta ? ' · meta ' + money(radar.meta) : '') : 'sem cotação hoje'; })()}</small></span><ArrowUpRight size={16} /></button>}
  </section>;
}
