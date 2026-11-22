import { useEffect, useMemo, useRef, useState } from 'react';
import { X, Layers, Home, Loader2, Box, Map as Mapa, Plus, Check, Trash2, Wrench, Bell, ShoppingBag, RotateCcw, Mountain, Eye, Move, Ruler, Footprints, Camera, Sun, Moon, RotateCw, Copy, ChevronUp, ChevronDown, Sofa, FileText } from 'lucide-react';
import { COMODOS_PLANTA, MOVEIS, PROPS, comodoDoItem, mx, mz, nomeMovel, salaDoPonto, salaDoMovel, medidasMovel, areaComodo } from './planta';
import type { ItemCasa } from './casa-logic';
import type { Cena, Edicao, Extra, Layout } from './casa3d-cena';
import { TIPOS_AVISO, URGENCIAS, REPETIR, SUGESTOES, rotuloTipo, rotuloUrgencia, avisosDe, novoAviso, salaDoAviso, pendentes as pendentesDe, resolver, vencido, diasPara, ordemUrgencia, type Aviso, type TipoAviso, type Urgencia } from './avisos';
import { enviarFoto, carregarFoto } from './fotos';
import { quem } from './quem';

type Pino = { item: ItemCasa; x: number; z: number; sala: string };
type Sel = { movel?: string; sala?: string } | null;
type Versao = Layout & { id: string; nome: string };
type Layouts = { ativa: string; versoes: Versao[] };
type Ferramenta = null | 'mover' | 'trena' | 'passeio';

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
/** Catálogo de móveis genéricos (medidas em cm, editáveis). */
export const CATALOGO: { tipo: string; nome: string; l: number; p: number; a: number }[] = [
  { tipo: 'mesa', nome: 'Mesa de escritório', l: 120, p: 60, a: 75 }, { tipo: 'cadeira', nome: 'Cadeira', l: 55, p: 55, a: 100 },
  { tipo: 'estante', nome: 'Estante', l: 80, p: 30, a: 180 }, { tipo: 'armario', nome: 'Armário', l: 90, p: 45, a: 180 },
  { tipo: 'sofa', nome: 'Sofá', l: 180, p: 85, a: 85 }, { tipo: 'cama', nome: 'Cama de solteiro', l: 90, p: 190, a: 50 },
  { tipo: 'tapete', nome: 'Tapete', l: 150, p: 100, a: 1 }, { tipo: 'caixa', nome: 'Outro (caixa)', l: 60, p: 40, a: 60 },
];
const PADRAO: Layouts = { ativa: 'hoje', versoes: [{ id: 'hoje', nome: 'Como está hoje', moveis: {}, extras: [] }] };
const nid = (p: string) => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
const pior = (l: Aviso[]) => l.reduce<Urgencia>((u, a) => ordemUrgencia(a) < ordemUrgencia({ urgencia: u } as Aviso) ? (a.urgencia || 'quando') : u, 'quando');
const money = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const dataBR = (s?: string) => s ? new Date(s.length <= 10 ? s + 'T12:00' : s).toLocaleDateString('pt-BR') : '';

function FotoMini({ id }: { id: string }) {
  const [src, setSrc] = useState('');
  useEffect(() => { let v = true; carregarFoto(id).then(s => v && setSrc(s)).catch(() => {}); return () => { v = false; }; }, [id]);
  return src ? <img className="c3d-foto" src={src} alt="" /> : <span className="c3d-foto vazia" />;
}

export default function Casa3D({ itens, avisos, layout, lista: listaCompras, inicial, onFechar, onAbrir, onSalvarAvisos, onSalvar, onNovoItem }: {
  itens: ItemCasa[]; avisos: Aviso[]; layout?: Layouts; lista: any[]; inicial?: Sel; onFechar: () => void; onAbrir: (i: ItemCasa) => void;
  onSalvarAvisos: (l: Aviso[], msg: string) => Promise<any>; onSalvar: (patch: any, msg: string) => Promise<any>; onNovoItem: (comodo: string, nome?: string, aviso?: Aviso, movel?: string) => void;
}) {
  const palco = useRef<HTMLDivElement>(null), cena = useRef<Cena | null>(null), pinosEl = useRef<HTMLDivElement>(null), rotulosEl = useRef<HTMLDivElement>(null), avisosEl = useRef<HTMLDivElement>(null), trenaEl = useRef<HTMLSpanElement>(null);
  const [pronto, setPronto] = useState(false), [erro, setErro] = useState(''), [altas, setAltas] = useState(true), [sala, setSala] = useState<string | null>(null);
  const [paisagem, setPaisagem] = useState(() => { try { return localStorage.getItem('aleyas-3d-paisagem') === '1'; } catch { return false; } });
  const [planta, setPlanta] = useState(false), [ver, setVer] = useState({ comodos: true, avisos: true, temos: false, quero: false });
  const [deQuem, setDeQuem] = useState<'todos' | 'Ale' | 'Yas'>('todos');
  const alterna = (k: keyof typeof ver) => setVer(v => ({ ...v, [k]: !v[k] }));
  const [aba, setAba] = useState<'props' | 'avisos'>('avisos'), [sel, setSel_] = useState<Sel>(inicial || null), [salvando, setSalvando] = useState(false);
  const [texto, setTexto] = useState(''), [tipo, setTipo] = useState<TipoAviso>('manutencao'), [urg, setUrg] = useState<Urgencia>('quando'), [resp, setResp] = useState<'' | 'Ale' | 'Yas'>(''), [repetir, setRepetir] = useState(0), [naLista, setNaLista] = useState(true);
  const [ferr, setFerr] = useState<Ferramenta>(null), [foto, setFoto] = useState(false), [hora, setHora] = useState(() => Math.min(23, Math.max(6, new Date().getHours())));
  const [edicao, setEdicao] = useState<Edicao | null>(null), [trenaCm, setTrenaCm] = useState<number | null>(null), [catalogo, setCatalogo] = useState(false), [mudouLayout, setMudouLayout] = useState(false);
  const [lay, setLay] = useState<Layouts>(() => layout?.versoes?.length ? layout : PADRAO);
  const [manut, setManut] = useState({ texto: '', valor: '' });
  const versao = lay.versoes.find(v => v.id === lay.ativa) || lay.versoes[0];
  const setSel = (s: Sel) => { setSel_(s); if (s) setAba(avisosDe(avisos, s).some(a => vencido(a)) ? 'avisos' : 'props'); };
  const pinos = useMemo(() => posicionar(itens.filter(i => i.status === 'temos' ? ver.temos : ver.quero)), [itens, ver.temos, ver.quero]);
  const pendentes = pendentesDe(avisos).filter(a => deQuem === 'todos' || a.resp === deQuem);
  const grupos = useMemo(() => { const g = new Map<string, Aviso[]>(); pendentes.forEach(a => { const k = a.movel ? 'm:' + a.movel : 's:' + (a.sala || ''); g.set(k, [...(g.get(k) || []), a]); }); return [...g.entries()].map(([k, l]) => [k, l.sort((a, b) => ordemUrgencia(a) - ordemUrgencia(b))] as [string, Aviso[]]); }, [avisos, deQuem]);
  const semComodo = itens.filter(i => !comodoDoItem(i.comodo)).length;

  useEffect(() => {
    let vivo = true;
    import('./casa3d-cena').then(({ criarCena }) => {
      if (!vivo || !palco.current) return;
      try {
        const c = criarCena(palco.current); cena.current = c; setPronto(true);
        try { if (localStorage.getItem('aleyas-3d-paisagem') === '1') c.paisagem(true); } catch {}
        c.hora(Math.min(23, Math.max(6, new Date().getHours())));
        c.onToque(t => { const s: Sel = t.movel ? { movel: t.movel } : { sala: salaDoPonto(t.x, t.y)?.id }; if (s.movel || s.sala) setSel(s); });
        c.onEditar(e => setEdicao(e));
        c.onTrena(cm => setTrenaCm(cm));
        if (inicial) { const r = inicial.movel ? salaDoMovel(inicial.movel)?.id : inicial.sala; if (r) setTimeout(() => c.focar(r), 50); }
      } catch (e) { setErro('Este aparelho não conseguiu abrir o 3D.'); }
    }).catch(() => setErro('Não consegui carregar o 3D. Confira a internet e tente de novo.'));
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onFechar();
    addEventListener('keydown', esc);
    return () => { vivo = false; removeEventListener('keydown', esc); cena.current?.destruir(); cena.current = null; };
  }, []);

  useEffect(() => { cena.current?.selecionar(sel?.movel || null); }, [sel, pronto]);
  useEffect(() => { cena.current?.aplicarLayout(versao); }, [pronto, versao]);
  // Ao soltar um móvel, a posição entra na versão de layout aberta
  useEffect(() => {
    if (!edicao?.fim || edicao.fixo) return;
    setLay(L => ({ ...L, versoes: L.versoes.map(v => v.id !== L.ativa ? v : edicao.tipo === 'movel'
      ? { ...v, moveis: { ...v.moveis, [edicao.id]: { dx: edicao.dx, dz: edicao.dz, rot: edicao.rot } } }
      : { ...v, extras: v.extras.map(x => x.id === edicao.id ? { ...x, x: edicao.x, z: edicao.z, rot: edicao.rot } : x) }) }));
    setMudouLayout(true);
  }, [edicao]);

  useEffect(() => {
    const c = cena.current; if (!c) return;
    const posAviso = grupos.map(([k]) => {
      if (k.startsWith('m:')) return c.topo(k.slice(2));
      const r = COMODOS_PLANTA.find(x => x.id === k.slice(2)); return r ? { x: mx(r.x + r.w / 2), y: 1.2, z: mz(r.y + r.h / 2) } : null;
    });
    const coloca = (e: HTMLElement | undefined, s: { x: number; y: number; ok: boolean } | null, centro = false) => {
      if (!e || !s) return false; e.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, ${centro ? '-50%' : '-100%'})`; e.style.visibility = s.ok ? '' : 'hidden'; return s.ok;
    };
    c.onMudou(() => {
      // Marcadores muito próximos viram um só ("+2"), para a tela não virar um amontoado
      const ocupados: { x: number; y: number; el: HTMLElement }[] = [];
      const agrupar = (el: HTMLElement, s: { x: number; y: number; ok: boolean } | null) => {
        el.dataset.mais = '0'; if (!s || !s.ok) return;
        const perto = ocupados.find(o => Math.abs(o.x - s.x) < 46 && Math.abs(o.y - s.y) < 26);
        if (perto) { el.style.visibility = 'hidden'; perto.el.dataset.mais = String(+(perto.el.dataset.mais || 0) + 1); } else ocupados.push({ x: s.x, y: s.y, el });
      };
      palco.current?.classList.toggle('longe', c.longe());
      const av = avisosEl.current?.children;
      if (av) posAviso.forEach((p, k) => { if (!p) return; const s = c.projetar(p.x, p.y + .15, p.z); coloca(av[k] as HTMLElement, s); agrupar(av[k] as HTMLElement, s); });
      const els = pinosEl.current?.children;
      if (els) pinos.forEach((p, k) => { const s = c.projetar(p.x, 0.9 + 0.25 + (k % 2) * 0.45, p.z); coloca(els[k] as HTMLElement, s); agrupar(els[k] as HTMLElement, s); });
      const rs = rotulosEl.current?.children;
      if (rs) COMODOS_PLANTA.forEach((r, k) => coloca(rs[k] as HTMLElement, c.projetar(mx(r.x + r.w / 2), 0.05, mz(r.y + r.h - 8)), true));
      const t = c.trenaMeio(); if (trenaEl.current) { if (t) coloca(trenaEl.current, c.projetar(t.x, t.y, t.z), true); else trenaEl.current.style.visibility = 'hidden'; }
    });
  }, [pronto, pinos, grupos]);

  function usar(f: Ferramenta) {
    const c = cena.current; if (!c) return; const nova = ferr === f ? null : f;
    c.editar(nova === 'mover'); c.trena(nova === 'trena'); c.passeio(nova === 'passeio', sala || salaDoMovel(sel?.movel || '')?.id || 'sala');
    if (nova === 'passeio' || nova === 'mover') setSel(null);
    if (nova === 'passeio') { setPlanta(false); }
    if (ferr === 'mover' && nova !== 'mover' && mudouLayout) salvarLayout();
    setFerr(nova); setEdicao(null); setTrenaCm(null);
  }
  async function salvarLayout(l = lay, msg = 'Layout salvo') { setSalvando(true); try { if (await onSalvar({ layout3d: l }, msg)) setMudouLayout(false); } finally { setSalvando(false); } }
  function mudarVersao(patch: (L: Layouts) => Layouts, msg: string) { const n = patch(lay); setLay(n); setEdicao(null); salvarLayout(n, msg); }
  function colocarExtra(e: Omit<Extra, 'id' | 'x' | 'z' | 'rot'>) {
    const r = COMODOS_PLANTA.find(c => c.id === (sala || 'escritorio'))!;
    const x: Extra = { ...e, id: nid('x-'), x: +mx(r.x + r.w / 2).toFixed(2), z: +mz(r.y + r.h / 2).toFixed(2), rot: 0 };
    setLay(L => ({ ...L, versoes: L.versoes.map(v => v.id === L.ativa ? { ...v, extras: [...v.extras, x] } : v) })); setMudouLayout(true); setCatalogo(false);
    if (ferr !== 'mover') { cena.current?.editar(true); cena.current?.trena(false); setFerr('mover'); }
    setSel(null);
  }

  const focar = (id: string | null) => { setSala(id); cena.current?.focar(id); };
  const alvoNome = sel?.movel ? nomeMovel(sel.movel) : COMODOS_PLANTA.find(r => r.id === sel?.sala)?.nome;
  const salaSel = sel?.movel ? salaDoMovel(sel.movel)?.id : sel?.sala;
  const lista = sel ? avisosDe(avisos, sel).sort((a, b) => (vencido(a) ? 0 : 1) - (vencido(b) ? 0 : 1) || ordemUrgencia(a) - ordemUrgencia(b)) : [];
  const itensAqui = sel ? itens.filter(i => comodoDoItem(i.comodo)?.id === salaSel) : [];
  const vinculado = sel?.movel ? itens.find(i => i.movel === sel.movel) : undefined;
  const garantia = vinculado?.garantiaAte ? Math.ceil((Date.parse(vinculado.garantiaAte + 'T12:00') - Date.now()) / 864e5) : null;
  const propsSel: [string, string][] = !sel ? [] : sel.movel ? (() => {
    const p = PROPS[sel.movel], md = vinculado?.medidas || medidasMovel(sel.movel); const n = medidasMovel(sel.movel)?.n || 1;
    return ([
      ['Categoria', p?.categoria || '—'], ['Família', p?.familia || nomeMovel(sel.movel) || '—'], ['Material', p?.material || '—'],
      ['Dimensões (L × P × A)', md ? `${md.l} × ${md.p} × ${md.a} cm${vinculado?.medidas ? '' : ' (aprox.)'}` : '—'], ['Cômodo', COMODOS_PLANTA.find(r => r.id === salaSel)?.nome || '—'],
      ...(n > 1 && sel.movel !== 'armario-cozinha' ? [['Quantidade', String(n)]] : []),
      ...(vinculado ? [['Situação', vinculado.status === 'temos' ? 'Já temos' : 'Queremos'], ['Marca', vinculado.marca || '—'], ['Modelo', vinculado.modelo || '—'], ['Valor', vinculado.preco ? money(vinculado.preco) : '—'], ['Compra', [dataBR(vinculado.dataCompra), vinculado.loja].filter(Boolean).join(' · ') || '—'],
        ['Garantia', vinculado.garantiaAte ? dataBR(vinculado.garantiaAte) + (garantia! < 0 ? ' · vencida' : garantia! <= 60 ? ` · faltam ${garantia} dias` : ' · em dia') : 'não informada']] : []),
      ['Avisos abertos', String(avisosDe(avisos, sel).filter(a => vencido(a)).length)], ['Código', sel.movel],
    ] as [string, string][]).filter(([, v]) => v !== '');
  })() : (() => {
    const r = COMODOS_PLANTA.find(c => c.id === sel.sala); const objs = new Set(MOVEIS.filter(f => salaDoPonto(f.x + f.w / 2, f.y + f.d / 2)?.id === sel.sala).map(f => f.id)).size;
    return [['Área aproximada', areaComodo(sel.sala || '').toLocaleString('pt-BR') + ' m²'], ['Dimensões', r ? `${(r.w / 40).toFixed(2).replace('.', ',')} × ${(r.h / 40).toFixed(2).replace('.', ',')} m` : '—'], ['Objetos na maquete', String(objs)], ['Itens cadastrados', String(itensAqui.length)], ['Avisos abertos', String(pendentes.filter(a => salaDoAviso(a) === sel.sala).length)], ['Piso', sel.sala === 'varanda' ? 'Cerâmica 45 × 45' : 'Porcelanato 60 × 60 bege'], ['Paredes', 'Pintura branca']] as [string, string][];
  })();

  async function salvar(l: Aviso[], msg: string, patch: any = {}) { setSalvando(true); try { return Object.keys(patch).length ? await onSalvar({ avisos: l, ...patch }, msg) : await onSalvarAvisos(l, msg); } finally { setSalvando(false); } }
  async function salvarItem(it: ItemCasa, msg: string) { setSalvando(true); try { return await onSalvar({ casa: itens.map(x => x.id === it.id ? it : x) }, msg); } finally { setSalvando(false); } }
  async function adicionar(e: React.FormEvent) {
    e.preventDefault(); if (!texto.trim() || !sel) return;
    const a = novoAviso(texto, tipo, sel.movel ? { movel: sel.movel } : { sala: sel.sala }, quem() || undefined, { ...(urg !== 'quando' ? { urgencia: urg } : {}), ...(resp ? { resp } : {}), ...(repetir ? { repetirDias: repetir } : {}) });
    const patch: any = {};
    if (tipo === 'comprar' && naLista) {
      const nome = texto.trim().replace(/^comprar\s*(uma|um|o|a)?\s*/i, '').slice(0, 80) || texto.trim().slice(0, 80);
      if (!listaCompras.some(i => i.name?.toLowerCase() === nome.toLowerCase() && !i.checked)) patch.items = [...listaCompras, { id: nid('i-'), name: nome[0].toUpperCase() + nome.slice(1), qty: 1, unit: 'un', cat: 'Utilidades', price: null, date: null, checked: false, lugar: 'Outros', ...(quem() ? { by: quem() } : {}) }];
    }
    await salvar([...avisos, a], patch.items ? 'Aviso anotado e posto na lista de compras' : 'Aviso anotado', patch); setTexto(''); setRepetir(0); setUrg('quando');
  }
  async function concluir(a: Aviso) {
    const novo = a.feito ? { ...a, feito: undefined } : resolver(a);
    const l = avisos.map(x => x.id === a.id ? novo : x);
    // Conserto resolvido entra no histórico de manutenções do objeto cadastrado
    const it = !a.feito && a.movel && (a.tipo === 'manutencao' || a.tipo === 'ajuste') ? itens.find(i => i.movel === a.movel) : undefined;
    const patch = it ? { casa: itens.map(x => x.id === it.id ? { ...x, manutencoes: [...(x.manutencoes || []), { data: new Date().toISOString(), texto: a.texto }].slice(-100) } : x) } : {};
    await salvar(l, a.feito ? 'Aviso reaberto' : a.repetirDias ? 'Feito ✓ · volto a lembrar em ' + (REPETIR.find(r => r[0] === a.repetirDias)?.[1].toLowerCase() || a.repetirDias + ' dias') : 'Resolvido ✓', patch);
  }
  async function anexarNota(f?: File) { if (!f || !vinculado) return; setSalvando(true); try { const id = await enviarFoto(f); await onSalvar({ casa: itens.map(x => x.id === vinculado.id ? { ...x, notaFoto: id } : x) }, 'Nota fiscal anexada'); } catch { alert('Não consegui salvar a foto da nota. Tente de novo.'); } finally { setSalvando(false); } }
  async function addManut(e: React.FormEvent) {
    e.preventDefault(); if (!vinculado || !manut.texto.trim()) return; const v = Number(manut.valor.replace(/\./g, '').replace(',', '.'));
    if (await salvarItem({ ...vinculado, manutencoes: [...(vinculado.manutencoes || []), { data: new Date().toISOString(), texto: manut.texto.trim().slice(0, 200), ...(v > 0 ? { valor: v } : {}) }].slice(-100) }, 'Manutenção registrada')) setManut({ texto: '', valor: '' });
  }

  const extraSel = edicao?.tipo === 'extra' ? versao.extras.find(x => x.id === edicao.id) : undefined;
  const queremosComMedida = itens.filter(i => i.status !== 'temos' && i.medidas && !versao.extras.some(x => x.itemId === i.id));
  const sug = sel?.movel ? (SUGESTOES[sel.movel] || []).filter(([t]) => !avisos.some(a => a.movel === sel.movel && a.texto === t && !a.feito)) : [];
  const legenda = ferr === 'mover' ? 'Arraste um móvel para mover · toque para girar ou remover' : ferr === 'trena' ? 'Toque em dois pontos para medir' : ferr === 'passeio' ? 'Arraste para olhar · toque no chão para andar' : planta ? 'Arraste para mover · pinça para zoom' : 'Arraste para girar · dois dedos movem';

  return <div className="c3d" role="dialog" aria-label="Casa em 3D">
    <div className="c3d-topo">
      <div><b>Nossa casa</b><small>{legenda}</small></div>
      <div className="c3d-modo">
        <button className={!planta ? 'on' : ''} aria-pressed={!planta} onClick={() => { setPlanta(false); cena.current?.modo(false); }}><Box size={15} /> 3D</button>
        <button className={planta ? 'on' : ''} aria-pressed={planta} onClick={() => { if (ferr === 'passeio') usar('passeio'); setPlanta(true); cena.current?.modo(true); }}><Mapa size={15} /> Planta</button>
      </div>
      <button className="icon" aria-label="Fechar 3D" onClick={() => { if (mudouLayout) salvarLayout(); onFechar(); }}><X size={20} /></button>
    </div>
    <div className={'c3d-palco' + (planta ? ' planta' : '') + (!sala && !sel ? ' compacto' : '') + (foto ? ' foto' : '') + (ferr ? ' ferr-' + ferr : '')} ref={palco}>
      {!pronto && !erro && <div className="c3d-carregando"><Loader2 className="spin" size={26} /> Montando a maquete…</div>}
      {erro && <div className="c3d-carregando">{erro}</div>}
      <div className={'c3d-rotulos' + (planta ? ' planta' : '') + (ver.comodos ? '' : ' oculto')} ref={rotulosEl} aria-hidden>{COMODOS_PLANTA.map(r => <span key={r.id} className={sala === r.id ? 'on' : ''}>{r.nome}</span>)}</div>
      <div className="c3d-pinos" ref={pinosEl}>{pinos.map(p => <button key={p.item.id} className={'c3d-pino ' + (p.item.status === 'temos' ? 'temos' : 'quero')} onClick={() => onAbrir(p.item)} title={p.item.name}><span>{p.item.name}</span></button>)}</div>
      <div className={'c3d-pinos' + (ver.avisos ? '' : ' oculto')} ref={avisosEl}>{grupos.map(([k, l]) => { const I = ICONE[l[0].tipo]; return <button key={k} className={'c3d-aviso urg-' + pior(l)} onClick={() => setSel(k.startsWith('m:') ? { movel: k.slice(2) } : { sala: k.slice(2) })} title={l.map(a => a.texto).join(' · ')}>
        <span><I size={13} /> <em>{l.length > 1 ? l.length + ' avisos' : l[0].texto}</em></span></button>; })}</div>
      <span className="c3d-trena-rotulo" ref={trenaEl} style={{ visibility: 'hidden' }}>{trenaCm != null ? (trenaCm >= 100 ? (trenaCm / 100).toFixed(2).replace('.', ',') + ' m' : trenaCm + ' cm') : ''}</span>
      {ferr === 'passeio' && <div className="c3d-passos"><button aria-label="Andar para frente" onClick={() => cena.current?.andar(.7)}><ChevronUp size={22} /></button><button aria-label="Andar para trás" onClick={() => cena.current?.andar(-.7)}><ChevronDown size={22} /></button></div>}
      {ferr === 'trena' && <div className="c3d-dica">{trenaCm == null ? 'Toque no primeiro e no segundo ponto' : <><Ruler size={15} /> <b>{trenaCm} cm</b> · toque de novo para medir outra coisa</>}</div>}
    </div>
    {ferr === 'mover' ? <div className="c3d-base c3d-ficha c3d-editar">
      <div className="c3d-ficha-topo"><div><span className="eyebrow">MOVER MÓVEIS · VERSÃO</span>
        <select aria-label="Versão do layout" value={lay.ativa} onChange={e => { setLay(L => ({ ...L, ativa: e.target.value })); setEdicao(null); setMudouLayout(true); }}>{lay.versoes.map(v => <option key={v.id} value={v.id}>{v.nome}</option>)}</select></div>
        <button className="icon-btn" aria-label="Terminar de mover" onClick={() => usar('mover')}><Check size={18} /></button></div>
      <div className="c3d-versoes">
        <button className="mini" disabled={salvando || lay.versoes.length >= 10} onClick={() => { const nome = (prompt('Nome da nova versão', lay.versoes.length === 1 ? 'Com escritório da Yasmin' : 'Versão ' + (lay.versoes.length + 1)) || '').trim().slice(0, 40); if (!nome) return; const id = nid('v-'); mudarVersao(L => ({ ativa: id, versoes: [...L.versoes, { ...JSON.parse(JSON.stringify(versao)), id, nome }] }), 'Versão “' + nome + '” criada'); }}><Copy size={13} /> Duplicar</button>
        <button className="mini" disabled={salvando} onClick={() => { const nome = (prompt('Novo nome', versao.nome) || '').trim().slice(0, 40); if (nome) mudarVersao(L => ({ ...L, versoes: L.versoes.map(v => v.id === versao.id ? { ...v, nome } : v) }), 'Versão renomeada'); }}>Renomear</button>
        {lay.versoes.length > 1 && <button className="mini perigo" disabled={salvando} onClick={() => { if (confirm('Apagar a versão “' + versao.nome + '”?')) mudarVersao(L => { const vs = L.versoes.filter(v => v.id !== versao.id); return { ativa: vs[0].id, versoes: vs }; }, 'Versão apagada'); }}>Apagar versão</button>}
        <button className="mini" onClick={() => setCatalogo(true)}><Sofa size={13} /> + Móvel</button>
      </div>
      {edicao ? edicao.fixo ? <p className="c3d-colisao">{nomeMovel(edicao.id)} é embutido (fica fixo na obra).</p> : <>
        <p className={'c3d-colisao ' + (edicao.colisao ? 'ruim' : 'ok')}><b>{extraSel?.nome || nomeMovel(edicao.id)}</b> · {edicao.colisao ? '⚠ ' + edicao.colisao : (extraSel?.tipo === 'fantasma' ? '✓ Cabe aqui' : '✓ Posição livre')}</p>
        <div className="c3d-versoes">
          <button className="mini" onClick={() => cena.current?.girar(edicao.id, edicao.tipo)}><RotateCw size={13} /> Girar 90°</button>
          {edicao.tipo === 'movel' && versao.moveis[edicao.id] && <button className="mini" onClick={() => { setLay(L => ({ ...L, versoes: L.versoes.map(v => { if (v.id !== L.ativa) return v; const m = { ...v.moveis }; delete m[edicao.id]; return { ...v, moveis: m }; }) })); setMudouLayout(true); setEdicao(null); }}><RotateCcw size={13} /> Voltar ao lugar</button>}
          {extraSel && <button className="mini perigo" onClick={() => { setLay(L => ({ ...L, versoes: L.versoes.map(v => v.id === L.ativa ? { ...v, extras: v.extras.filter(x => x.id !== extraSel.id) } : v) })); setMudouLayout(true); setEdicao(null); }}><Trash2 size={13} /> Tirar da maquete</button>}
        </div></> : <p className="muted c3d-vazio">Toque e arraste um móvel. Armários embutidos, pias e box ficam fixos.</p>}
      <button className="primary full" disabled={!mudouLayout || salvando} onClick={() => salvarLayout()}>{salvando ? <Loader2 className="spin" size={16} /> : <Check size={16} />} {mudouLayout ? 'Salvar “' + versao.nome + '”' : 'Tudo salvo'}</button>
    </div>
    : sel ? <div className="c3d-base c3d-ficha">
      <div className="c3d-ficha-topo"><div><span className="eyebrow">{sel.movel ? (COMODOS_PLANTA.find(r => r.id === salaSel)?.nome || '').toUpperCase() : 'CÔMODO'}</span><h3>{alvoNome}</h3></div>
        <button className="icon-btn" aria-label="Fechar ficha" onClick={() => setSel(null)}><X size={18} /></button></div>
      <div className="c3d-abas"><button className={aba === 'props' ? 'on' : ''} onClick={() => setAba('props')}>Propriedades</button><button className={aba === 'avisos' ? 'on' : ''} onClick={() => setAba('avisos')}>Avisos{lista.filter(a => vencido(a)).length ? ` (${lista.filter(a => vencido(a)).length})` : ''}</button></div>
      {aba === 'props' ? <>
        {vinculado?.fotos?.length ? <div className="c3d-fotos">{vinculado.fotos.slice(0, 4).map(f => <FotoMini key={f} id={f} />)}</div> : null}
        <dl className="c3d-props">{propsSel.map(([k, v]) => <div key={k} className={k === 'Garantia' && garantia != null && garantia <= 60 ? 'alerta' : ''}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        {vinculado && <div className="c3d-doc">
          <div className="c3d-doc-linha"><FileText size={15} /> <b>Nota fiscal</b>{vinculado.notaFoto ? <span className="c3d-nota"><FotoMini id={vinculado.notaFoto} /> anexada</span> : <span className="muted">não anexada</span>}
            <label className="mini">{vinculado.notaFoto ? 'Trocar' : 'Anexar foto'}<input type="file" accept="image/*" hidden disabled={salvando} onChange={e => anexarNota(e.target.files?.[0])} /></label></div>
          <div className="c3d-doc-linha"><Wrench size={15} /> <b>Histórico de manutenções</b></div>
          {vinculado.manutencoes?.length ? <ul className="c3d-hist">{[...vinculado.manutencoes].reverse().slice(0, 6).map((m, k) => <li key={k}><small>{dataBR(m.data)}</small> {m.texto}{m.valor ? <em> · {money(m.valor)}</em> : null}</li>)}</ul> : <p className="muted c3d-vazio">Nada registrado ainda. Consertos resolvidos nos avisos entram aqui sozinhos.</p>}
          <form className="c3d-novo-linha" onSubmit={addManut}><input aria-label="Manutenção feita" placeholder="Ex.: trocou a borracha" maxLength={200} value={manut.texto} onChange={e => setManut({ ...manut, texto: e.target.value })} /><input aria-label="Valor" className="valor" inputMode="decimal" placeholder="R$" value={manut.valor} onChange={e => setManut({ ...manut, valor: e.target.value })} /><button className="secondary" disabled={!manut.texto.trim() || salvando}><Plus size={15} /></button></form>
        </div>}
        <div className="c3d-ficha-acoes">{vinculado ? <button className="secondary" onClick={() => onAbrir(vinculado)}>Abrir ficha do item (fotos, garantia, cotações)</button>
          : <button className="secondary" onClick={() => onNovoItem(COMODO_TEXTO[salaSel || ''] || 'Outro', sel.movel ? nomeMovel(sel.movel) : undefined, undefined, sel.movel)}><Plus size={15} /> {sel.movel ? 'Cadastrar este objeto (marca, valor, fotos, garantia)' : 'Cadastrar item neste cômodo'}</button>}</div></>
      : <>{lista.length ? <ul className="c3d-avisos">{lista.map(a => { const dorme = !a.feito && !vencido(a); return <li key={a.id} className={(a.feito ? 'feito' : '') + (dorme ? ' dorme' : '')}>
        <button className="check" aria-label={a.feito ? 'Reabrir aviso' : 'Marcar como resolvido'} disabled={salvando || dorme} onClick={() => concluir(a)}>{a.feito ? <RotateCcw size={14} /> : <Check size={15} />}</button>
        <span><b>{a.texto}</b><small className={'tag ' + a.tipo}>{rotuloTipo(a.tipo)}</small>{a.urgencia && a.urgencia !== 'quando' && !a.feito ? <small className={'tag urg-' + a.urgencia}>{rotuloUrgencia(a.urgencia)}</small> : null}
          <small className="muted"> {[a.resp ? 'com ' + a.resp : a.por, a.repetirDias ? '↻ ' + (REPETIR.find(r => r[0] === a.repetirDias)?.[1].toLowerCase() || a.repetirDias + ' dias') : '', dorme ? 'próximo em ' + diasPara(a) + ' dias' : '', a.feito ? 'resolvido' : ''].filter(Boolean).join(' · ')}</small></span>
        {a.tipo === 'comprar' && !a.feito && <button className="mini" onClick={() => onNovoItem(COMODO_TEXTO[salaDoAviso(a) || ''] || 'Outro', a.texto.replace(/^comprar\s*(uma|um)?\s*/i, ''), a)}>Cotar</button>}
        <button className="icon-btn" aria-label="Apagar aviso" disabled={salvando} onClick={() => salvar(avisos.filter(x => x.id !== a.id), 'Aviso apagado')}><Trash2 size={15} /></button></li>; })}</ul>
        : <p className="muted c3d-vazio">Nenhum aviso aqui. Anote o que precisa de conserto, ajuste ou compra.</p>}
      {sug.length > 0 && <div className="c3d-sug"><small>Sugestões de lembrete:</small>{sug.map(([t, d]) => <button key={t} type="button" className="mini" onClick={() => { setTexto(t); setTipo('manutencao'); setRepetir(d); }}>↻ {t}</button>)}</div>}
      <form className="c3d-novo" onSubmit={adicionar}>
        <div className="chips">{TIPOS_AVISO.map(([k, t]) => <button type="button" key={k} className={tipo === k ? 'selected' : ''} onClick={() => setTipo(k)}>{t}</button>)}</div>
        <div className="chips c3d-urg">{URGENCIAS.map(([k, t]) => <button type="button" key={k} className={'urg-' + k + (urg === k ? ' selected' : '')} onClick={() => setUrg(k)}>{t}</button>)}
          <span className="sep" />{(['', 'Ale', 'Yas'] as const).map(r => <button type="button" key={r || 'n'} className={resp === r ? 'selected' : ''} onClick={() => setResp(r)}>{r || 'Qualquer um'}</button>)}</div>
        <div className="c3d-novo-linha"><select aria-label="Repetir" value={repetir} onChange={e => setRepetir(+e.target.value)}>{REPETIR.map(([d, t]) => <option key={d} value={d}>{t}</option>)}</select>
          {tipo === 'comprar' && <label className="c3d-check"><input type="checkbox" checked={naLista} onChange={e => setNaLista(e.target.checked)} /> Pôr na lista de compras</label>}</div>
        <div className="c3d-novo-linha"><input aria-label="Novo aviso" maxLength={200} placeholder={tipo === 'comprar' ? 'Ex.: comprar vela do filtro' : 'Ex.: precisa de manutenção'} value={texto} onChange={e => setTexto(e.target.value)} />
          <button className="primary" disabled={!texto.trim() || salvando}><Plus size={16} /> Aviso</button></div>
      </form></>}
    </div> : <div className="c3d-base">
      {ferr !== 'passeio' && <div className="chips c3d-salas">
        <button className={!sala ? 'selected' : ''} onClick={() => focar(null)}><Home size={14} /> Tudo</button>
        {COMODOS_PLANTA.map(r => <button key={r.id} className={sala === r.id ? 'selected' : ''} onClick={() => focar(r.id)}>{r.nome}</button>)}
      </div>}
      <div className="c3d-ferramentas" role="group" aria-label="Ferramentas">
        <button aria-pressed={false} onClick={() => usar('mover')}><Move size={16} /> Mover</button>
        <button className={ferr === 'trena' ? 'on' : ''} aria-pressed={ferr === 'trena'} onClick={() => usar('trena')}><Ruler size={16} /> Trena</button>
        <button className={ferr === 'passeio' ? 'on' : ''} aria-pressed={ferr === 'passeio'} onClick={() => usar('passeio')}><Footprints size={16} /> Passear</button>
        <button className={foto ? 'on' : ''} aria-pressed={foto} onClick={() => { setFoto(!foto); cena.current?.foto(!foto); }}><Camera size={16} /> Foto</button>
        <button onClick={() => setCatalogo(true)}><Sofa size={16} /> + Móvel</button>
      </div>
      <details className="c3d-mais"><summary>Hora do dia, filtros e vista</summary>
      <label className="c3d-hora">{hora >= 19 || hora < 6.5 ? <Moon size={15} /> : <Sun size={15} />}<input type="range" min={6} max={23} step={.5} value={hora} aria-label="Hora do dia" onChange={e => { const h = +e.target.value; setHora(h); cena.current?.hora(h); }} /><b>{String(Math.floor(hora)).padStart(2, '0')}:{hora % 1 ? '30' : '00'}</b></label>
      {!foto && ferr !== 'passeio' && <div className="c3d-acoes">
        <div className="chips c3d-filtros" role="group" aria-label="Mostrar no 3D">{([['comodos', 'Nomes dos cômodos'], ['avisos', 'Consertos e avisos'], ['temos', 'Itens que temos'], ['quero', 'Itens para comprar']] as const).map(([k, t]) => <button key={k} aria-pressed={ver[k]} className={ver[k] ? 'selected' : ''} onClick={() => alterna(k)}>{ver[k] ? '✓ ' : ''}{t}</button>)}
          {ver.avisos && (['todos', 'Ale', 'Yas'] as const).map(q => <button key={q} className={'quem' + (deQuem === q ? ' selected' : '')} aria-pressed={deQuem === q} onClick={() => setDeQuem(q)}>{q === 'todos' ? 'De todos' : 'Só ' + q}</button>)}</div>
        <div className="c3d-botoes">
        {!planta && <button className="secondary" onClick={() => { setAltas(!altas); cena.current?.paredes(!altas); }}><Layers size={16} /> {altas ? 'Paredes baixas' : 'Paredes altas'}</button>}
        {!planta && <button className={'secondary' + (paisagem ? ' ativo' : '')} aria-pressed={paisagem} onClick={() => { const v = !paisagem; setPaisagem(v); cena.current?.paisagem(v); try { localStorage.setItem('aleyas-3d-paisagem', v ? '1' : '0'); } catch {} }}><Mountain size={16} /> Paisagem {paisagem ? 'ligada' : 'desligada'}</button>}
        {!planta && <button className="secondary" onClick={() => { setPaisagem(true); try { localStorage.setItem('aleyas-3d-paisagem', '1'); } catch {} cena.current?.vistaVaranda(); }}><Eye size={16} /> Vista da varanda</button>}
        </div>
      </div>}
      </details>
      {!foto && ferr !== 'passeio' && <p className="c3d-legenda"><i className="urg-urgente" /> urgente <i className="urg-semana" /> esta semana <i className="urg-quando" /> quando der · {pendentes.length} {pendentes.length === 1 ? 'aviso' : 'avisos'}{semComodo ? ` · ${semComodo} itens sem cômodo` : ''}. Versão: {versao.nome}.</p>}
    </div>}
    {catalogo && <div className="c3d-catalogo" role="dialog" aria-label="Colocar móvel">
      <div className="c3d-ficha-topo"><div><span className="eyebrow">CABE AQUI?</span><h3>Colocar um móvel na maquete</h3></div><button className="icon-btn" aria-label="Fechar" onClick={() => setCatalogo(false)}><X size={18} /></button></div>
      <p className="muted c3d-vazio">Vai para {COMODOS_PLANTA.find(c => c.id === (sala || 'escritorio'))?.nome} (escolha o cômodo antes, se quiser). Depois é só arrastar: a maquete avisa se bater em parede, porta ou outro móvel.</p>
      {queremosComMedida.length > 0 && <><b className="c3d-cat-tit">Do que vocês querem comprar</b><div className="c3d-cat-grid">{queremosComMedida.map(i => <button key={i.id} onClick={() => colocarExtra({ tipo: 'fantasma', nome: i.name.slice(0, 60), l: i.medidas!.l, p: i.medidas!.p, a: i.medidas!.a, itemId: i.id })}><b>{i.name}</b><small>{i.medidas!.l} × {i.medidas!.p} × {i.medidas!.a} cm</small></button>)}</div></>}
      <b className="c3d-cat-tit">Móveis genéricos (medidas editáveis)</b>
      <form className="c3d-cat-form" onSubmit={e => { e.preventDefault(); const f = new FormData(e.currentTarget); const c = CATALOGO.find(x => x.tipo === f.get('tipo'))!; const n = (k: string, d: number) => { const v = Math.round(Number(f.get(k))); return v >= 1 && v <= 1000 ? v : d; }; colocarExtra({ tipo: c.tipo, nome: String(f.get('nome') || c.nome).trim().slice(0, 60) || c.nome, l: n('l', c.l), p: n('p', c.p), a: n('a', c.a) }); }}>
        <Escolha />
        <button className="primary full"><Plus size={16} /> Colocar na maquete</button>
      </form>
    </div>}
  </div>;
}

function Escolha() {
  const [t, setT] = useState(CATALOGO[0]);
  return <>
    <div className="chips">{CATALOGO.map(c => <button type="button" key={c.tipo} className={t.tipo === c.tipo ? 'selected' : ''} onClick={() => setT(c)}>{c.nome}</button>)}</div>
    <input type="hidden" name="tipo" value={t.tipo} />
    <label>Nome<input key={'n' + t.tipo} name="nome" maxLength={60} defaultValue={t.tipo === 'mesa' ? 'Mesa da Yasmin' : t.nome} /></label>
    <div className="c3d-cat-medidas" key={t.tipo}><label>Largura (cm)<input name="l" inputMode="numeric" defaultValue={t.l} /></label><label>Profund. (cm)<input name="p" inputMode="numeric" defaultValue={t.p} /></label><label>Altura (cm)<input name="a" inputMode="numeric" defaultValue={t.a} /></label></div>
  </>;
}
