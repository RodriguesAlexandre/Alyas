import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, Plus, ArrowUpRight } from 'lucide-react';
import ProdutoIcone from './produto-icone';
import { allRecipes } from './data';

const n = (s: string) => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

/** Busca única: acha em lista, produtos, despensa, casa e receitas. */
export default function Busca({ data, save, busy, ready, onClose, irPara }: {
  data: any; save: (d: any, m?: string) => Promise<any>; busy: boolean; ready: boolean; onClose: () => void;
  irPara: (tab: number, termo?: string, vista?: string) => void;
}) {
  const [q, setQ] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { ref.current?.focus(); const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); }; window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc); }, []);
  const t = n(q);
  const r = useMemo(() => {
    if (t.length < 2) return null;
    const tem = (...xs: any[]) => xs.some(x => n(String(x || '')).includes(t));
    const pend = (data.items || []).filter((i: any) => !i.checked);
    return {
      lista: pend.filter((i: any) => tem(i.name)).slice(0, 6),
      produtos: (data.catalog || []).filter((p: any) => tem(p.name, p.brand, ...(p.aliases || []).filter((a: string) => !a.startsWith('ean:')))).slice(0, 6),
      despensa: (data.pantry || []).filter((i: any) => tem(i.name)).slice(0, 6),
      casa: (data.casa || []).filter((i: any) => tem(i.name, i.marca, i.modelo, i.comodo, i.note)).slice(0, 6),
      receitas: allRecipes(data).filter((r: any) => tem(r.name, ...(r.ingredients || []).map((x: any) => x.name))).slice(0, 5),
    };
  }, [t, data]);
  const total = r ? Object.values(r).reduce((a, l: any) => a + l.length, 0) : 0;
  const naLista = (p: any) => (data.items || []).some((i: any) => !i.checked && (i.catalogId === p.id || n(i.name) === n(p.name)));

  return <div className="overlay busca-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <section className="busca" role="dialog" aria-modal="true" aria-label="Buscar no app">
      <label className="busca-campo"><Search size={19} /><input ref={ref} value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar em tudo: café, robô, frango…" aria-label="Buscar em tudo" /><button className="icon-btn" aria-label="Fechar busca" onClick={onClose}><X size={18} /></button></label>
      {!r && <p className="muted busca-dica">Digite pelo menos 2 letras. A busca olha a lista, os produtos, a despensa, a Casa e as receitas.</p>}
      {r && !total && <p className="muted busca-dica">Nada encontrado para “{q}”.</p>}
      {r && <div className="busca-resultados">
        {r.lista.length > 0 && <Grupo titulo="Na lista de compras" onVer={() => irPara(1, q, 'current')}>{r.lista.map((i: any) => <Linha key={i.id} nome={i.name} cat={i.cat} sub={i.qty + ' ' + i.unit} onClick={() => irPara(1, q, 'current')} />)}</Grupo>}
        {r.produtos.length > 0 && <Grupo titulo="Nossos produtos" onVer={() => irPara(1, '', 'catalog')}>{r.produtos.map((p: any) => <Linha key={p.id} nome={p.name} cat={p.cat} sub={p.supply === 'ok' ? 'tem em casa' : p.supply === 'low' ? 'acabando' : p.supply === 'out' ? 'acabou' : p.cat}
          acao={naLista(p) ? <span className="busca-tag">na lista</span> : <button className="icon-btn add" aria-label={'Pôr ' + p.name + ' na lista'} disabled={!ready || busy} onClick={e => { e.stopPropagation(); save({ ...data, items: [...data.items, { id: crypto.randomUUID(), name: p.name, qty: 1, unit: p.unit, cat: p.cat, checked: false, price: null, date: null, catalogId: p.id }] }, p.name + ' foi para a lista'); }}><Plus size={17} /></button>}
          onClick={() => irPara(1, '', 'catalog')} />)}</Grupo>}
        {r.despensa.length > 0 && <Grupo titulo="Na despensa" onVer={() => irPara(2, q)}>{r.despensa.map((i: any) => <Linha key={i.id} nome={i.name} cat={i.cat} sub={i.qty === 0 ? 'acabou' : String(i.qty).replace('.', ',') + ' ' + i.unit + ' em casa'} onClick={() => irPara(2, q)} />)}</Grupo>}
        {r.casa.length > 0 && <Grupo titulo="Casa" onVer={() => irPara(4)}>{r.casa.map((i: any) => <Linha key={i.id} nome={i.name} cat={i.cat} sub={i.status === 'temos' ? 'já temos' : 'queremos comprar'} onClick={() => irPara(4)} />)}</Grupo>}
        {r.receitas.length > 0 && <Grupo titulo="Receitas" onVer={() => irPara(3)}>{r.receitas.map((x: any) => <button key={x.id} className="busca-linha" onClick={() => irPara(3)}><span className="product-icon busca-emoji">{x.emoji}</span><span><b>{x.name}</b><small>{x.time} min</small></span></button>)}</Grupo>}
      </div>}
    </section>
  </div>;
}

function Grupo({ titulo, onVer, children }: { titulo: string; onVer: () => void; children: any }) {
  return <div className="busca-grupo"><h3>{titulo}<button className="text-btn" onClick={onVer}>abrir <ArrowUpRight size={13} /></button></h3>{children}</div>;
}
function Linha({ nome, cat, sub, acao, onClick }: { nome: string; cat: string; sub: string; acao?: any; onClick: () => void }) {
  return <div className="busca-linha" role="button" tabIndex={0} onClick={onClick} onKeyDown={e => { if (e.key === 'Enter') onClick(); }}><ProdutoIcone nome={nome} cat={cat} /><span><b>{nome}</b><small>{sub}</small></span>{acao}</div>;
}
