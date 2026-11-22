import { useEffect, useMemo, useRef, useState } from 'react';
import { X, Layers, Home, Loader2, Box, Map as Mapa, Plus, Check, Trash2, Wrench, Bell, ShoppingBag, RotateCcw, Mountain, Eye } from 'lucide-react';
import { COMODOS_PLANTA, MOVEIS, PROPS, comodoDoItem, mx, mz, nomeMovel, salaDoPonto, salaDoMovel, medidasMovel, areaComodo } from './planta';
import type { ItemCasa } from './casa-logic';
import type { Cena } from './casa3d-cena';
import { TIPOS_AVISO, rotuloTipo, avisosDe, novoAviso, salaDoAviso, type Aviso, type TipoAviso } from './avisos';
import { quem } from './quem';

type Pino = { item: ItemCasa; x: number; z: number; sala: string };
type Sel = { movel?: string; sala?: string } | null;

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
const ICONE: Record<TipoAviso, typeof Wrench> = { manutencao: Wrench, ajuste: Wrench, comprar: ShoppingBag, outro: Bell };
export const COMODO_TEXTO: Record<string, string> = { cozinha: 'Cozinha', servico: 'Área de serviço', jantar: 'Sala', sala: 'Sala', banho: 'Banheiro', escritorio: 'Escritório', casal: 'Quarto', varanda: 'Varanda' };

export default function Casa3D({ itens, avisos, inicial, onFechar, onAbrir, onSalvarAvisos, onNovoItem }: {
  itens: ItemCasa[]; avisos: Aviso[]; inicial?: Sel; onFechar: () => void; onAbrir: (i: ItemCasa) => void;
  onSalvarAvisos: (l: Aviso[], msg: string) => Promise<any>; onNovoItem: (comodo: string, nome?: string, aviso?: Aviso, movel?: string) => void;
}) {
  const palco = useRef<HTMLDivElement>(null), cena = useRef<Cena | null>(null), pinosEl = useRef<HTMLDivElement>(null), rotulosEl = useRef<HTMLDivElement>(null), avisosEl = useRef<HTMLDivElement>(null);
  const [pronto, setPronto] = useState(false), [erro, setErro] = useState(''), [altas, setAltas] = useState(true), [sala, setSala] = useState<string | null>(null);
  const [paisagem, setPaisagem] = useState(() => { try { return localStorage.getItem('aleyas-3d-paisagem') === '1'; } catch { return false; } });
  const [planta, setPlanta] = useState(false), [ver, setVer] = useState({ comodos: true, avisos: true, temos: false, quero: false });
  const alterna = (k: keyof typeof ver) => setVer(v => ({ ...v, [k]: !v[k] }));
  const [aba, setAba] = useState<'props' | 'avisos'>('avisos'), [sel, setSel_] = useState<Sel>(inicial || null), [texto, setTexto] = useState(''), [tipo, setTipo] = useState<TipoAviso>('manutencao'), [salvando, setSalvando] = useState(false);
  const setSel = (s: Sel) => { setSel_(s); if (s) setAba(avisosDe(avisos, s).some(a => !a.feito) ? 'avisos' : 'props'); };
  const pinos = useMemo(() => posicionar(itens.filter(i => i.status === 'temos' ? ver.temos : ver.quero)), [itens, ver.temos, ver.quero]);
  const pendentes = avisos.filter(a => !a.feito);
  const grupos = useMemo(() => { const g = new Map<string, Aviso[]>(); avisos.filter(a => !a.feito).forEach(a => { const k = a.movel ? 'm:' + a.movel : 's:' + (a.sala || ''); g.set(k, [...(g.get(k) || []), a]); }); return [...g.entries()]; }, [avisos]);
  const semComodo = itens.filter(i => !comodoDoItem(i.comodo)).length;

  useEffect(() => {
    let vivo = true;
    import('./casa3d-cena').then(({ criarCena }) => {
      if (!vivo || !palco.current) return;
      try {
        const c = criarCena(palco.current); cena.current = c; setPronto(true);
        try { if (localStorage.getItem('aleyas-3d-paisagem') === '1') c.paisagem(true); } catch {}
        c.onToque(t => { const s: Sel = t.movel ? { movel: t.movel } : { sala: salaDoPonto(t.x, t.y)?.id }; if (s.movel || s.sala) setSel(s); });
        if (inicial) { const r = inicial.movel ? salaDoMovel(inicial.movel)?.id : inicial.sala; if (r) setTimeout(() => c.focar(r), 50); }
      } catch (e) { setErro('Este aparelho não conseguiu abrir o 3D.'); }
    }).catch(() => setErro('Não consegui carregar o 3D. Confira a internet e tente de novo.'));
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onFechar();
    addEventListener('keydown', esc);
    return () => { vivo = false; removeEventListener('keydown', esc); cena.current?.destruir(); cena.current = null; };
  }, []);

  useEffect(() => { cena.current?.selecionar(sel?.movel || null); }, [sel, pronto]);

  useEffect(() => {
    const c = cena.current; if (!c) return;
    c.fantasmas(pinos.filter(p => p.item.status !== 'temos' && p.item.medidas).map(p => ({ id: p.item.id, x: p.x, z: p.z, l: p.item.medidas!.l / 100, p: p.item.medidas!.p / 100, a: p.item.medidas!.a / 100 })));
    const posAviso = grupos.map(([k]) => {
      if (k.startsWith('m:')) return c.topo(k.slice(2));
      const r = COMODOS_PLANTA.find(x => x.id === k.slice(2)); return r ? { x: mx(r.x + r.w / 2), y: 1.2, z: mz(r.y + r.h / 2) } : null;
    });
    const coloca = (e: HTMLElement | undefined, s: { x: number; y: number; ok: boolean } | null, centro = false) => {
      if (!e || !s) return; e.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, ${centro ? '-50%' : '-100%'})`; e.style.visibility = s.ok ? '' : 'hidden';
    };
    c.onMudou(() => {
      const els = pinosEl.current?.children;
      if (els) pinos.forEach((p, k) => coloca(els[k] as HTMLElement, c.projetar(p.x, (p.item.medidas && p.item.status !== 'temos' ? p.item.medidas.a / 100 : 0.9) + 0.25 + (k % 2) * 0.45, p.z)));
      const av = avisosEl.current?.children;
      if (av) posAviso.forEach((p, k) => p && coloca(av[k] as HTMLElement, c.projetar(p.x, p.y + .15, p.z)));
      const rs = rotulosEl.current?.children;
      if (rs) COMODOS_PLANTA.forEach((r, k) => coloca(rs[k] as HTMLElement, c.projetar(mx(r.x + r.w / 2), 0.05, mz(r.y + r.h - 8)), true));
    });
  }, [pronto, pinos, grupos]);

  const focar = (id: string | null) => { setSala(id); cena.current?.focar(id); };
  const alvoNome = sel?.movel ? nomeMovel(sel.movel) : COMODOS_PLANTA.find(r => r.id === sel?.sala)?.nome;
  const salaSel = sel?.movel ? salaDoMovel(sel.movel)?.id : sel?.sala;
  const lista = sel ? avisosDe(avisos, sel).sort((a, b) => (a.feito ? 1 : 0) - (b.feito ? 1 : 0)) : [];
  const itensAqui = sel ? itens.filter(i => comodoDoItem(i.comodo)?.id === salaSel) : [];
  const vinculado = sel?.movel ? itens.find(i => i.movel === sel.movel) : undefined;
  const money = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const propsSel: [string, string][] = !sel ? [] : sel.movel ? (() => {
    const p = PROPS[sel.movel], md = vinculado?.medidas || medidasMovel(sel.movel); const n = medidasMovel(sel.movel)?.n || 1;
    return ([
      ['Categoria', p?.categoria || '—'], ['Família', p?.familia || nomeMovel(sel.movel) || '—'], ['Material', p?.material || '—'],
      ['Dimensões (L × P × A)', md ? `${md.l} × ${md.p} × ${md.a} cm${vinculado?.medidas ? '' : ' (aprox.)'}` : '—'], ['Cômodo', COMODOS_PLANTA.find(r => r.id === salaSel)?.nome || '—'],
      ...(n > 1 && sel.movel !== 'armario-cozinha' ? [['Quantidade', String(n)]] : []),
      ...(vinculado ? [['Situação', vinculado.status === 'temos' ? 'Já temos' : 'Queremos'], ['Marca', vinculado.marca || '—'], ['Modelo', vinculado.modelo || '—'], ['Valor', vinculado.preco ? money(vinculado.preco) : '—'], ['Compra', [vinculado.dataCompra ? new Date(vinculado.dataCompra + 'T12:00').toLocaleDateString('pt-BR') : '', vinculado.loja].filter(Boolean).join(' · ') || '—']] : []),
      ['Avisos abertos', String(avisosDe(avisos, sel).filter(a => !a.feito).length)], ['Código', sel.movel],
    ] as [string, string][]).filter(([, v]) => v !== '');
  })() : (() => {
    const r = COMODOS_PLANTA.find(c => c.id === sel.sala); const objs = new Set(MOVEIS.filter(f => salaDoPonto(f.x + f.w / 2, f.y + f.d / 2)?.id === sel.sala).map(f => f.id)).size;
    return [['Área aproximada', areaComodo(sel.sala || '').toLocaleString('pt-BR') + ' m²'], ['Dimensões', r ? `${(r.w / 40).toFixed(2).replace('.', ',')} × ${(r.h / 40).toFixed(2).replace('.', ',')} m` : '—'], ['Objetos na maquete', String(objs)], ['Itens cadastrados', String(itensAqui.length)], ['Avisos abertos', String(pendentes.filter(a => salaDoAviso(a) === sel.sala).length)], ['Piso', sel.sala === 'varanda' ? 'Cerâmica 45 × 45' : 'Porcelanato 60 × 60 bege'], ['Paredes', 'Pintura branca']] as [string, string][];
  })();

  async function salvar(l: Aviso[], msg: string) { setSalvando(true); try { await onSalvarAvisos(l, msg); } finally { setSalvando(false); } }
  async function adicionar(e: React.FormEvent) {
    e.preventDefault(); if (!texto.trim() || !sel) return;
    await salvar([...avisos, novoAviso(texto, tipo, sel.movel ? { movel: sel.movel } : { sala: sel.sala }, quem() || undefined)], 'Aviso anotado'); setTexto('');
  }

  return <div className="c3d" role="dialog" aria-label="Casa em 3D">
    <div className="c3d-topo">
      <div><b>Nossa casa</b><small>{planta ? 'Arraste para mover · pinça para zoom' : 'Arraste para girar · dois dedos movem'}</small></div>
      <div className="c3d-modo">
        <button className={!planta ? 'on' : ''} aria-pressed={!planta} onClick={() => { setPlanta(false); cena.current?.modo(false); }}><Box size={15} /> 3D</button>
        <button className={planta ? 'on' : ''} aria-pressed={planta} onClick={() => { setPlanta(true); cena.current?.modo(true); }}><Mapa size={15} /> Planta</button>
      </div>
      <button className="icon" aria-label="Fechar 3D" onClick={onFechar}><X size={20} /></button>
    </div>
    <div className={'c3d-palco' + (planta ? ' planta' : '') + (!sala && !sel ? ' compacto' : '')} ref={palco}>
      {!pronto && !erro && <div className="c3d-carregando"><Loader2 className="spin" size={26} /> Montando a maquete…</div>}
      {erro && <div className="c3d-carregando">{erro}</div>}
      <div className={'c3d-rotulos' + (planta ? ' planta' : '') + (ver.comodos ? '' : ' oculto')} ref={rotulosEl} aria-hidden>{COMODOS_PLANTA.map(r => <span key={r.id} className={sala === r.id ? 'on' : ''}>{r.nome}</span>)}</div>
      <div className="c3d-pinos" ref={pinosEl}>{pinos.map(p => <button key={p.item.id} className={'c3d-pino ' + (p.item.status === 'temos' ? 'temos' : 'quero')} onClick={() => onAbrir(p.item)} title={p.item.name}><span>{p.item.name}</span></button>)}</div>
      <div className={"c3d-pinos" + (ver.avisos ? "" : " oculto")} ref={avisosEl}>{grupos.map(([k, l]) => { const I = ICONE[l[0].tipo]; return <button key={k} className={'c3d-aviso ' + l[0].tipo} onClick={() => setSel(k.startsWith('m:') ? { movel: k.slice(2) } : { sala: k.slice(2) })} title={l.map(a => a.texto).join(' · ')}>
        <span><I size={13} /> {l.length > 1 ? l.length + ' avisos' : l[0].texto}</span></button>; })}</div>
    </div>
    {sel ? <div className="c3d-base c3d-ficha">
      <div className="c3d-ficha-topo"><div><span className="eyebrow">{sel.movel ? (COMODOS_PLANTA.find(r => r.id === salaSel)?.nome || '').toUpperCase() : 'CÔMODO'}</span><h3>{alvoNome}</h3></div>
        <button className="icon-btn" aria-label="Fechar ficha" onClick={() => setSel(null)}><X size={18} /></button></div>
      <div className="c3d-abas"><button className={aba === 'props' ? 'on' : ''} onClick={() => setAba('props')}>Propriedades</button><button className={aba === 'avisos' ? 'on' : ''} onClick={() => setAba('avisos')}>Avisos{lista.filter(a => !a.feito).length ? ` (${lista.filter(a => !a.feito).length})` : ''}</button></div>
      {aba === 'props' ? <><dl className="c3d-props">{propsSel.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        <div className="c3d-ficha-acoes">{vinculado ? <button className="secondary" onClick={() => onAbrir(vinculado)}>Abrir ficha do item (fotos, garantia, cotações)</button>
          : <button className="secondary" onClick={() => onNovoItem(COMODO_TEXTO[salaSel || ''] || 'Outro', sel.movel ? nomeMovel(sel.movel) : undefined, undefined, sel.movel)}><Plus size={15} /> {sel.movel ? 'Cadastrar este objeto (marca, valor, fotos)' : 'Cadastrar item neste cômodo'}</button>}</div></>
      : <>{lista.length ? <ul className="c3d-avisos">{lista.map(a => <li key={a.id} className={a.feito ? 'feito' : ''}>
        <button className="check" aria-label={a.feito ? 'Reabrir aviso' : 'Marcar como resolvido'} disabled={salvando} onClick={() => salvar(avisos.map(x => x.id === a.id ? { ...x, feito: a.feito ? undefined : new Date().toISOString() } : x), a.feito ? 'Aviso reaberto' : 'Resolvido ✓')}>{a.feito ? <RotateCcw size={14} /> : <Check size={15} />}</button>
        <span><b>{a.texto}</b><small className={'tag ' + a.tipo}>{rotuloTipo(a.tipo)}{a.por ? ' · ' + a.por : ''}{a.feito ? ' · resolvido' : ''}</small></span>
        {a.tipo === 'comprar' && !a.feito && <button className="mini" onClick={() => onNovoItem(COMODO_TEXTO[salaDoAviso(a) || ''] || 'Outro', a.texto.replace(/^comprar\s*(uma|um)?\s*/i, ''), a)}>Cotar</button>}
        <button className="icon-btn" aria-label="Apagar aviso" disabled={salvando} onClick={() => salvar(avisos.filter(x => x.id !== a.id), 'Aviso apagado')}><Trash2 size={15} /></button></li>)}</ul>
        : <p className="muted c3d-vazio">Nenhum aviso aqui. Anote o que precisa de conserto, ajuste ou compra.</p>}
      <form className="c3d-novo" onSubmit={adicionar}>
        <div className="chips">{TIPOS_AVISO.map(([k, t]) => <button type="button" key={k} className={tipo === k ? 'selected' : ''} onClick={() => setTipo(k)}>{t}</button>)}</div>
        <div className="c3d-novo-linha"><input aria-label="Novo aviso" maxLength={200} placeholder={tipo === 'comprar' ? 'Ex.: comprar uma planta' : 'Ex.: precisa de manutenção'} value={texto} onChange={e => setTexto(e.target.value)} />
          <button className="primary" disabled={!texto.trim() || salvando}><Plus size={16} /> Aviso</button></div>
      </form></>}
    </div> : <div className="c3d-base">
      <div className="chips c3d-salas">
        <button className={!sala ? 'selected' : ''} onClick={() => focar(null)}><Home size={14} /> Tudo</button>
        {COMODOS_PLANTA.map(r => <button key={r.id} className={sala === r.id ? 'selected' : ''} onClick={() => focar(r.id)}>{r.nome}</button>)}
      </div>
      <div className="c3d-acoes">
        <div className="chips c3d-filtros" role="group" aria-label="Mostrar no 3D">{([['comodos', 'Nomes dos cômodos'], ['avisos', 'Consertos e avisos'], ['temos', 'Itens que temos'], ['quero', 'Itens para comprar']] as const).map(([k, t]) => <button key={k} aria-pressed={ver[k]} className={ver[k] ? 'selected' : ''} onClick={() => alterna(k)}>{ver[k] ? '✓ ' : ''}{t}</button>)}</div>
        <div className="c3d-botoes">
        {!planta && <button className="secondary" onClick={() => { setAltas(!altas); cena.current?.paredes(!altas); }}><Layers size={16} /> {altas ? 'Paredes baixas' : 'Paredes altas'}</button>}
        {!planta && <button className={'secondary' + (paisagem ? ' ativo' : '')} aria-pressed={paisagem} onClick={() => { const v = !paisagem; setPaisagem(v); cena.current?.paisagem(v); try { localStorage.setItem('aleyas-3d-paisagem', v ? '1' : '0'); } catch {} }}><Mountain size={16} /> Paisagem {paisagem ? 'ligada' : 'desligada'}</button>}
        {!planta && <button className="secondary" onClick={() => { setPaisagem(true); try { localStorage.setItem('aleyas-3d-paisagem', '1'); } catch {} cena.current?.vistaVaranda(); }}><Eye size={16} /> Vista da varanda</button>}
        </div>
      </div>
      <p className="c3d-legenda"><i className="aviso" /> {pendentes.length} {pendentes.length === 1 ? 'aviso' : 'avisos'} <i className="quero" /> para comprar <i className="temos" /> temos{semComodo ? ` · ${semComodo} sem cômodo` : ''}. Toque em qualquer objeto para anotar um aviso.</p>
    </div>}
  </div>;
}
