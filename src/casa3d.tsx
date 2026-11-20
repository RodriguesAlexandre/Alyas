import { useEffect, useMemo, useRef, useState } from 'react';
import { X, Layers, Home, Loader2 } from 'lucide-react';
import { COMODOS_PLANTA, comodoDoItem, mx, mz } from './planta';
import type { ItemCasa } from './casa-logic';
import type { Cena } from './casa3d-cena';

type Pino = { item: ItemCasa; x: number; z: number; sala: string };

// Distribui os itens de cada cômodo em volta do centro dele (sem sobrepor os pinos)
export function posicionar(itens: ItemCasa[]): Pino[] {
  const porSala = new Map<string, ItemCasa[]>();
  itens.forEach(i => { const r = comodoDoItem(i.comodo); if (r) porSala.set(r.id, [...(porSala.get(r.id) || []), i]); });
  const out: Pino[] = [];
  porSala.forEach((lst, id) => {
    const r = COMODOS_PLANTA.find(c => c.id === id)!;
    const cx = mx(r.x + r.w / 2), cz = mz(r.y + r.h / 2), cols = Math.max(1, Math.min(3, Math.round(r.w / 40)));
    lst.forEach((item, k) => {
      const c = k % cols, l = Math.floor(k / cols);
      out.push({ item, sala: id, x: cx + (c - (cols - 1) / 2) * 0.7, z: cz + (l - (Math.ceil(lst.length / cols) - 1) / 2) * 0.55 });
    });
  });
  return out;
}

export default function Casa3D({ itens, onFechar, onAbrir }: { itens: ItemCasa[]; onFechar: () => void; onAbrir: (i: ItemCasa) => void }) {
  const palco = useRef<HTMLDivElement>(null), cena = useRef<Cena | null>(null), pinosEl = useRef<HTMLDivElement>(null), rotulosEl = useRef<HTMLDivElement>(null);
  const [pronto, setPronto] = useState(false), [erro, setErro] = useState(''), [altas, setAltas] = useState(false), [sala, setSala] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<'todos' | 'quero' | 'temos'>('todos');
  const pinos = useMemo(() => posicionar(itens.filter(i => filtro === 'todos' || (filtro === 'temos' ? i.status === 'temos' : i.status !== 'temos'))), [itens, filtro]);
  const semComodo = itens.filter(i => !comodoDoItem(i.comodo)).length;

  useEffect(() => {
    let vivo = true;
    import('./casa3d-cena').then(({ criarCena }) => {
      if (!vivo || !palco.current) return;
      try { cena.current = criarCena(palco.current); setPronto(true); } catch (e) { setErro('Este aparelho não conseguiu abrir o 3D.'); }
    }).catch(() => setErro('Não consegui carregar o 3D. Confira a internet e tente de novo.'));
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onFechar();
    addEventListener('keydown', esc);
    return () => { vivo = false; removeEventListener('keydown', esc); cena.current?.destruir(); cena.current = null; };
  }, []);

  useEffect(() => {
    const c = cena.current; if (!c) return;
    c.fantasmas(pinos.filter(p => p.item.status !== 'temos' && p.item.medidas).map(p => ({ id: p.item.id, x: p.x, z: p.z, l: p.item.medidas!.l / 100, p: p.item.medidas!.p / 100, a: p.item.medidas!.a / 100 })));
    c.onMudou(() => {
      const els = pinosEl.current?.children;
      if (els) pinos.forEach((p, k) => {
        const s = c.projetar(p.x, (p.item.medidas && p.item.status !== 'temos' ? p.item.medidas.a / 100 : 0.9) + 0.25 + (k % 2) * 0.45, p.z); const e = els[k] as HTMLElement;
        if (e && s) { e.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -100%)`; e.style.visibility = s.ok ? '' : 'hidden'; }
      });
      const rs = rotulosEl.current?.children;
      if (rs) COMODOS_PLANTA.forEach((r, k) => {
        const s = c.projetar(mx(r.x + r.w / 2), 0.05, mz(r.y + r.h - 8)); const e = rs[k] as HTMLElement;
        if (e && s) e.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -50%)`;
      });
    });
  }, [pronto, pinos]);

  const focar = (id: string | null) => { setSala(id); cena.current?.focar(id); };

  return <div className="c3d" role="dialog" aria-label="Casa em 3D">
    <div className="c3d-topo">
      <div><b>Nossa casa em 3D</b><small>Arraste para girar · pinça para zoom · dois dedos para mover</small></div>
      <button className="icon" aria-label="Fechar 3D" onClick={onFechar}><X size={20} /></button>
    </div>
    <div className="c3d-palco" ref={palco}>
      {!pronto && !erro && <div className="c3d-carregando"><Loader2 className="spin" size={26} /> Montando a maquete…</div>}
      {erro && <div className="c3d-carregando">{erro}</div>}
      <div className="c3d-rotulos" ref={rotulosEl} aria-hidden>{COMODOS_PLANTA.map(r => <span key={r.id} className={sala === r.id ? 'on' : ''}>{r.nome}</span>)}</div>
      <div className="c3d-pinos" ref={pinosEl}>{pinos.map(p => <button key={p.item.id} className={'c3d-pino ' + (p.item.status === 'temos' ? 'temos' : 'quero')} onClick={() => onAbrir(p.item)} title={p.item.name}>
        <span>{p.item.name}</span></button>)}</div>
    </div>
    <div className="c3d-base">
      <div className="chips c3d-salas">
        <button className={!sala ? 'selected' : ''} onClick={() => focar(null)}><Home size={14} /> Tudo</button>
        {COMODOS_PLANTA.map(r => <button key={r.id} className={sala === r.id ? 'selected' : ''} onClick={() => focar(r.id)}>{r.nome}</button>)}
      </div>
      <div className="c3d-acoes">
        <div className="chips">{([['todos', 'Todos'], ['quero', 'Queremos'], ['temos', 'Já temos']] as const).map(([k, t]) => <button key={k} className={filtro === k ? 'selected' : ''} onClick={() => setFiltro(k)}>{t}</button>)}</div>
        <button className="secondary" onClick={() => { setAltas(!altas); cena.current?.paredes(!altas); }}><Layers size={16} /> {altas ? 'Paredes baixas' : 'Paredes inteiras'}</button>
      </div>
      <p className="c3d-legenda"><i className="quero" /> queremos comprar <i className="temos" /> já temos{semComodo ? ` · ${semComodo} ${semComodo > 1 ? 'itens' : 'item'} sem cômodo (escolha o cômodo no item para aparecer aqui)` : ''}. Itens que vocês querem com medidas aparecem em laranja no tamanho real.</p>
    </div>
  </div>;
}
