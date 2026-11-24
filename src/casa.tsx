import { useEffect, useRef, useState } from 'react';
import { Plus, Search, Camera, ImagePlus, X, Trash2, Check, ExternalLink, Tag, Store } from 'lucide-react';
import { CATS_CASA, COMODOS, melhorCotacao, resumoCasa, filtrarCasa, comprei, desfazerCompra, limparLink, normalizarCasa, painelCasa, iconeCasa, frenteMeta, type ItemCasa, type Cotacao } from './casa-logic';
import { enviarFoto, carregarFoto, apagarFoto } from './fotos';
import { quem } from './quem';
import { corCat } from './cores';
import { api } from './api';
import { Radar, RefreshCw, Box, RotateCcw } from 'lucide-react';
import Casa3D from './casa3d';
import { PainelCasa } from './casa-painel';
import { ondeAviso, rotuloTipo, rotuloUrgencia, pendentes, resolver, ordemUrgencia, novoAviso, URGENCIAS, type Aviso, type Urgencia } from './avisos';
import { comodoDoItem } from './planta';
import { AlertTriangle } from 'lucide-react';
import { catCasa } from './adicionar';
import { Wrench, Check as Ok, Link2, Loader2 } from 'lucide-react';

const money = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const num = (s: string) => { const v = Number(String(s).replace(/\./g, '').replace(',', '.')); return Number.isFinite(v) && v >= 0 ? v : NaN; };
const LABEL: Record<string, string> = { temos: 'Já temos', cotando: 'Cotando', queremos: 'Queremos' };
const PRIOR: Record<string, string> = { alta: 'Prioridade alta', media: 'Prioridade média', baixa: 'Sem pressa' };

/** Carrossel de fotos no estilo do Instagram: arrasta para o lado, com bolinhas e contador. */
function Carrossel({ fotos, enviando, inicio = 0, cheio, onAbrir, onMudou }: { fotos: string[]; enviando: number; inicio?: number; cheio?: boolean; onAbrir?: (id: string) => void; onMudou?: (id: string) => void }) {
  const ref = useRef<HTMLDivElement>(null); const [i, setI] = useState(Math.max(0, inicio)); const total = fotos.length + enviando;
  useEffect(() => { const el = ref.current; if (el && inicio > 0) el.scrollLeft = inicio * el.clientWidth; }, []);
  const ir = (k: number) => { const el = ref.current; if (el) el.scrollTo({ left: Math.max(0, Math.min(total - 1, k)) * el.clientWidth, behavior: 'smooth' }); };
  return <div className={'carrossel' + (cheio ? ' cheio' : '')}>
    <div className="carrossel-trilho" ref={ref} onScroll={e => { const el = e.currentTarget; const k = Math.round(el.scrollLeft / Math.max(1, el.clientWidth)); if (k !== i) { setI(k); if (fotos[k]) onMudou?.(fotos[k]); } }}>
      {fotos.map(id => <div key={id} className="carrossel-slide"><Foto id={id} className={cheio ? 'cheia' : ''} onClick={onAbrir ? () => onAbrir(id) : undefined} /></div>)}
      {Array.from({ length: enviando }, (_, k) => <div key={'e' + k} className="carrossel-slide"><span className="casa-foto carregando"><i /></span></div>)}
    </div>
    {total > 1 && <><span className="carrossel-cont">{i + 1}/{total}</span>
      {i > 0 && <button type="button" className="carrossel-seta esq" aria-label="Foto anterior" onClick={() => ir(i - 1)}>‹</button>}
      {i < total - 1 && <button type="button" className="carrossel-seta dir" aria-label="Próxima foto" onClick={() => ir(i + 1)}>›</button>}
      <div className="carrossel-pontos">{Array.from({ length: total }, (_, k) => <i key={k} className={k === i ? 'on' : ''} />)}</div></>}
  </div>;
}
function Foto({ id, className, onClick }: { id: string; className?: string; onClick?: () => void }) {
  const [src, setSrc] = useState(''), [erro, setErro] = useState(false);
  useEffect(() => { let vivo = true; carregarFoto(id).then(s => vivo && setSrc(s)).catch(() => vivo && setErro(true)); return () => { vivo = false; }; }, [id]);
  return <span className={'casa-foto ' + (className || '')} onClick={onClick}>{src ? <img src={src} alt="" /> : <i>{erro ? '!' : ''}</i>}</span>;
}

function Capa({ item }: { item: ItemCasa }) {
  return item.fotos?.length ? <Foto id={item.fotos[0]} className="capa" /> : <span className="casa-foto capa vazia"><img src={'produtos/' + iconeCasa(item) + '.webp'} alt="" /></span>;
}

async function puxarRadar(manual: boolean, onReload?: () => void) {
  const hoje = new Date().toLocaleDateString('sv-SE');
  try {
    if (!manual && (localStorage.getItem('aleyas-radar-dia') === hoje || new Date().getHours() < 9)) return null;
    const r = await api.radar();
    localStorage.setItem('aleyas-radar-dia', hoje);
    if (r.novo) onReload?.();
    return r;
  } catch (e: any) { if (manual) throw e; return null; }
}

function Cartao({ i, onClick }: { i: ItemCasa; onClick: () => void }) {
  const m = melhorCotacao(i), f = frenteMeta(i);
  return <button className={'casa-card' + (i.status === 'temos' ? ' temos' : '')} style={{ '--cat': corCat(i.cat) } as any} onClick={onClick}>
    <Capa item={i} />
    <span className="casa-info"><b>{i.name}</b><small className="casa-cat">{i.cat}{i.comodo ? ' · ' + i.comodo : ''}</small>
      <span className="casa-linha"><span className={'casa-status ' + i.status}>{LABEL[i.status]}</span>
        {i.status !== 'temos' && i.prioridade === 'alta' && <span className="casa-prio" title="Prioridade alta">★</span>}
        {i.status === 'temos' ? (i.preco ? <em>{money(i.preco)}</em> : null) : m ? <em>a partir de {money(m.preco)}</em> : i.preco ? <em>≈ {money(i.preco)}</em> : null}
        {i.fotos?.length > 1 && <small>{i.fotos.length} fotos</small>}</span>
      {f && i.status !== 'temos' && <small className={'casa-meta ' + (f.diferenca <= 0 ? 'ok' : '')}>{f.diferenca <= 0 ? 'Dentro da meta de ' + money(f.meta) : 'Faltam ' + money(f.diferenca) + ' p/ meta de ' + money(f.meta)}</small>}
      {i.radar && i.status !== 'temos' && <small className="casa-radar-mini"><Radar size={11} /> Radar: {i.radar.decisao} · {new Date(i.radar.data + 'T12:00').toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}</small>}</span>
  </button>;
}

export default function Casa({ data, save, busy, ready, onReload, pedido }: { data: any; save: (d: any, m?: string) => Promise<any>; busy: boolean; ready: boolean; onReload?: () => void; pedido?: { status: 'temos' | 'queremos'; nome: string; det: boolean; n: number } | null }) {
  useEffect(() => { if (ready) puxarRadar(false, onReload); }, [ready]);
  const itens: ItemCasa[] = normalizarCasa(data.casa || []);
  const [status, setStatus] = useState('todos'), [cat, setCat] = useState('Todas'), [busca, setBusca] = useState('');
  const [aberto, setAberto] = useState<ItemCasa | null>(null), [novo, setNovo] = useState<'' | 'temos' | 'queremos'>(''), [tresD, setTresD] = useState<false | { movel?: string; sala?: string } | null>(false), [preset, setPreset] = useState<{ item: Partial<ItemCasa>; aviso?: Aviso } | null>(null);
  // Pedido vindo do botão único "Adicionar": cadastra direto ou abre a ficha completa já preenchida
  useEffect(() => {
    if (!pedido) return; const item = { name: pedido.nome, status: pedido.status, cat: catCasa(pedido.nome) } as Partial<ItemCasa>;
    if (pedido.det) { setNovo(pedido.status); setPreset({ item }); return; }
    const novoItem = { id: 'casa-' + Date.now().toString(36), fotos: [], cotacoes: [], criado: new Date().toISOString(), por: quem() || undefined, ...(pedido.status === 'queremos' ? { prioridade: 'media' } : {}), ...item } as ItemCasa;
    gravar([...itens, novoItem], pedido.nome + (pedido.status === 'temos' ? ' em Já temos' : ' em Queremos comprar')).then(ok => ok && setAberto(novoItem));
  }, [pedido?.n]);
  const r = resumoCasa(itens);
  const lista = filtrarCasa(itens, status, cat, busca);
  const avisos: Aviso[] = data.avisos || [];
  const gravar = async (lst: ItemCasa[], msg: string) => save({ ...data, casa: lst, ...(preset?.aviso ? { avisos: avisos.map(a => a.id === preset.aviso!.id ? { ...a, feito: new Date().toISOString() } : a) } : {}) }, msg);
  const salvarAvisos = (l: Aviso[], msg: string) => save({ ...data, avisos: l }, msg);
  const abertos = pendentes(avisos).sort((a, b) => ordemUrgencia(a) - ordemUrgencia(b));
  const salvarParcial = (patch: any, msg: string) => save({ ...data, ...patch }, msg);

  return <>
    <section className="card casa-topo">
      <div className="section-title"><div><span className="eyebrow">ITENS DA CASA</span><h2>Nossa casa, item por item</h2><p className="muted">O que já temos, o que estamos cotando e o que queremos comprar, com fotos.</p></div>
</div>
      <button className="casa-3d-btn" onClick={() => setTresD(null)}><span><Box size={20} /></span><span><b>Ver a casa em 3D</b><small>Maquete e planta do apê: toque nos objetos para ver propriedades e anotar avisos</small></span></button>
      <div className="casa-kpis duas">
        <button className={status === 'quero' ? 'on' : ''} onClick={() => setStatus(status === 'quero' ? 'todos' : 'quero')}><b>{r.quero}</b><small>queremos comprar{r.cotando ? ' · ' + r.cotando + ' em cotação' : ''}</small>{r.previsto > 0 && <em>≈ {money(r.previsto)} pelas melhores cotações</em>}</button>
        <button className={status === 'temos' ? 'on' : ''} onClick={() => setStatus(status === 'temos' ? 'todos' : 'temos')}><b>{r.temos}</b><small>já temos</small>{r.valorTemos > 0 && <em>{money(r.valorTemos)} em itens</em>}</button>
      </div>
      {itens.length > 0 && <PainelCasa p={painelCasa(itens)} />}
      <label className="search casa-busca"><Search size={17} /><input aria-label="Buscar item da casa" placeholder="Buscar: aspirador, pratos, cozinha…" value={busca} onChange={e => setBusca(e.target.value)} /></label>
      <div className="chips casa-cats">{['Todas', ...CATS_CASA].map(c => <button key={c} className={cat === c ? 'selected' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
    </section>
    {abertos.length > 0 && <section className="card casa-avisos"><div className="section-title"><div><span className="eyebrow">AVISOS DA CASA</span><h2>{abertos.length} {abertos.length > 1 ? 'coisas para resolver' : 'coisa para resolver'}</h2></div></div>
      <ul>{abertos.map(a => <li key={a.id}><button className="check" aria-label="Marcar como resolvido" disabled={busy} onClick={() => salvarAvisos(avisos.map(x => x.id === a.id ? resolver(x) : x), a.repetirDias ? 'Feito ✓ · próximo lembrete agendado' : 'Resolvido ✓')}><Ok size={15} /></button>
        <button className="casa-aviso-txt" onClick={() => setTresD(a.movel ? { movel: a.movel } : { sala: a.sala })}><b>{a.texto}</b><small><span className={'tag ' + a.tipo}>{rotuloTipo(a.tipo)}</span>{a.urgencia && a.urgencia !== 'quando' ? <span className={'tag urg-' + a.urgencia}>{rotuloUrgencia(a.urgencia)}</span> : null} {ondeAviso(a)}{a.resp ? ' · ' + a.resp : ''} · ver no 3D</small></button></li>)}</ul></section>}
    {lista.length ? (status === 'todos' ? [['Queremos comprar', lista.filter(i => i.status !== 'temos')], ['Já temos', lista.filter(i => i.status === 'temos')]] as [string, ItemCasa[]][] : [['', lista]] as [string, ItemCasa[]][]).filter(([, l]) => l.length).map(([titulo, l]) => <section key={titulo || 'lista'} className="casa-secao">
      {titulo && <h3 className="casa-secao-titulo">{titulo}<span>{l.length}</span></h3>}
      <div className="casa-grid">{l.map(i => <Cartao key={i.id} i={i} onClick={() => setAberto(i)} />)}</div></section>)
      : <section className="card empty"><img src="produtos/couch-and-lamp.webp" alt="" width={64} /><h3>{itens.length ? 'Nada com esse filtro' : 'Comece pelos itens da casa'}</h3><p className="muted">{itens.length ? 'Troque o filtro ou a busca.' : 'Comece pelo que mais importa: algo que vocês querem comprar (como o robô aspirador) ou os eletrônicos que já têm, com foto e garantia.'}</p>{!itens.length && <div className="casa-novos centro"><button className="primary" disabled={!ready || busy} onClick={() => setNovo('queremos')}><Plus size={17} /> Algo que queremos</button><button className="secondary" disabled={!ready || busy} onClick={() => setNovo('temos')}><Camera size={17} /> Algo que já temos</button></div>}</section>}
    {tresD !== false && <Casa3D itens={itens} avisos={avisos} layout={data.layout3d} lista={data.items || []} onSalvar={salvarParcial} inicial={tresD} onFechar={() => setTresD(false)} onAbrir={i => setAberto(i)} onSalvarAvisos={salvarAvisos}
      onNovoItem={(comodo, nome, aviso, movel) => setPreset({ item: { comodo, name: nome || '', movel, status: aviso || !movel ? 'queremos' : 'temos', cat: aviso?.texto.match(/planta|jiboia/i) || /planta|quadro|tapete|cortina|sofá|mesa|cadeira|cama|guarda|estante|criado|puff/i.test(nome || '') ? 'Móveis e decoração' : /geladeira|fogão|micro|máquina|tv/i.test(nome || '') ? 'Eletrônicos' : 'Utensílios' }, aviso })} />}
    {(novo || aberto || preset) && <Detalhe key={aberto?.id || (preset ? 'preset' : 'novo')} inicial={aberto}
      avisosAbertos={aberto ? abertos.filter(a => a.movel && a.movel === aberto.movel || a.texto.startsWith(aberto.name + ':')) : []}
      onEstragou={async (it, texto, urgencia) => { const sala = comodoDoItem(it.comodo)?.id; const a = novoAviso(it.name + ': ' + (texto.trim() || 'estragou'), 'manutencao', it.movel ? { movel: it.movel } : { sala }, quem() || undefined, { urgencia }); return save({ ...data, avisos: [...avisos, a] }, 'Aviso de conserto criado'); }}
      onVer3D={it => { setAberto(null); setTresD(it.movel ? { movel: it.movel } : { sala: comodoDoItem(it.comodo)?.id }); }} preset={preset?.item} statusNovo={novo || 'queremos'} busy={busy} onReload={onReload} onClose={() => { setNovo(''); setAberto(null); setPreset(null); }}
      onSave={async (it, msg) => { const ok = await gravar(itens.some(x => x.id === it.id) ? itens.map(x => x.id === it.id ? it : x) : [...itens, it], msg); if (ok) { setNovo(''); setPreset(null); setAberto(it); } return ok; }}
      onDelete={async it => { if (await gravar(itens.filter(x => x.id !== it.id), it.name + ' apagado')) { it.fotos.forEach(apagarFoto); setAberto(null); } }} />}
  </>;
}

function Detalhe({ inicial, preset, statusNovo, busy, onClose, onSave, onDelete, onReload, onEstragou, onVer3D, avisosAbertos = [] }: { onEstragou?: (i: ItemCasa, texto: string, u: Urgencia) => Promise<any>; onVer3D?: (i: ItemCasa) => void; avisosAbertos?: Aviso[]; inicial: ItemCasa | null; preset?: Partial<ItemCasa>; statusNovo: 'temos' | 'queremos'; busy: boolean; onReload?: () => void; onClose: () => void; onSave: (i: ItemCasa, m: string) => Promise<any>; onDelete: (i: ItemCasa) => void }) {
  const base: ItemCasa = inicial || { id: 'casa-' + Date.now().toString(36), name: '', cat: 'Utensílios', status: statusNovo, prioridade: statusNovo === 'queremos' ? 'media' : undefined, fotos: [], cotacoes: [], criado: new Date().toISOString(), por: quem() || undefined, ...(inicial ? {} : preset || {}) } as ItemCasa;
  const [it, setIt] = useState<ItemCasa>(base);
  const [editando, setEditando] = useState(!inicial);
  const [enviando, setEnviando] = useState(0), [erro, setErro] = useState(''), [ver, setVer] = useState(''), [apagar, setApagar] = useState(false);
  const [cot, setCot] = useState({ loja: '', preco: '', link: '' });
  const [puxando, setPuxando] = useState(false);
  const [link, setLink] = useState(''), [lendoLink, setLendoLink] = useState(false), [prog, setProg] = useState(0), [formKey, setFormKey] = useState(0), [achou, setAchou] = useState('');
  async function buscarLink() {
    const u = link.trim(); if (!/^https?:\/\//.test(u)) { setErro('Cole o link completo do produto (começando com https://).'); return; }
    setLendoLink(true); setErro(''); setAchou(''); setProg(3);
    const t0 = Date.now(); const tick = setInterval(() => { const seg = (Date.now() - t0) / 1000; setProg(p => Math.max(p, Math.min(92, Math.round(92 * (1 - Math.exp(-seg / 9)))))); }, 300);
    try {
      const p = await api.lerProduto(u);
      let fotos = it.fotos;
      if (p.foto && fotos.length < 12) {
        try { const bin = Uint8Array.from(atob(p.foto), c => c.charCodeAt(0)); const f = new File([bin], 'produto.' + (p.mime.split('/')[1] || 'jpg'), { type: p.mime || 'image/jpeg' }); setEnviando(1); fotos = [...fotos, await enviarFoto(f)]; } catch {} finally { setEnviando(0); }
      }
      const temos = it.status === 'temos';
      const cotacoes = !temos && p.preco ? [...it.cotacoes.filter(c => c.link !== u), { id: 'c-' + Date.now().toString(36), loja: p.loja, preco: p.preco, link: u, data: new Date().toISOString(), obs: 'lido do link' }] : it.cotacoes;
      setIt({ ...it, name: p.name || it.name, cat: (CATS_CASA as readonly string[]).includes(p.cat) ? p.cat as any : it.cat, comodo: p.comodo || it.comodo, marca: p.marca || it.marca, modelo: p.modelo || it.modelo,
        ...(temos ? { preco: p.preco ?? it.preco, loja: p.loja || it.loja, note: [it.note, u].filter(Boolean).join('\n').slice(0, 1000) } : { status: it.status === 'queremos' && p.preco ? 'cotando' : it.status }), fotos, cotacoes });
      setFormKey(k => k + 1); setLink('');
      setAchou([p.preco ? 'Preço ' + p.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + (temos ? '' : ' (virou cotação)') : 'Preço não encontrado', p.foto ? 'foto adicionada' : 'sem foto', 'categoria ' + p.cat].join(' · ') + '. Confira e salve.');
    } catch (e: any) { setErro(e?.message || 'Não consegui ler esse link.'); }
    finally { clearInterval(tick); setProg(100); setTimeout(() => { setLendoLink(false); setProg(0); }, 400); }
  }
  const cam = useRef<HTMLInputElement>(null), gal = useRef<HTMLInputElement>(null);
  const salvoNoApp = !!inicial;
  const m = melhorCotacao(it);

  async function fotos(files: FileList | null) {
    if (!files?.length) return;
    setErro(''); const novas: string[] = [];
    for (const f of [...files].slice(0, 12 - it.fotos.length)) {
      setEnviando(x => x + 1);
      try { novas.push(await enviarFoto(f)); } catch (e: any) { setErro(e?.message?.includes('conex') ? 'Sem internet agora: a foto não foi salva. Tente de novo.' : 'Não consegui salvar a foto. Tente de novo.'); }
      finally { setEnviando(x => x - 1); }
    }
    if (!novas.length) return;
    const prox = { ...it, fotos: [...it.fotos, ...novas] };
    setIt(prox);
    if (salvoNoApp && !editando) await onSave(prox, novas.length > 1 ? novas.length + ' fotos salvas' : 'Foto salva');
  }
  async function tirarFoto(id: string) {
    const prox = { ...it, fotos: it.fotos.filter(f => f !== id) }; setIt(prox); setVer('');
    if (salvoNoApp && !editando) { if (await onSave(prox, 'Foto removida')) apagarFoto(id); } else apagarFoto(id);
  }
  async function addCotacao(e: React.FormEvent) {
    e.preventDefault(); const preco = num(cot.preco);
    if (!cot.loja.trim() || !(preco > 0)) { setErro('Informe a loja e um preço válido.'); return; }
    const c: Cotacao = { id: 'c-' + Date.now().toString(36), loja: cot.loja.trim().slice(0, 80), preco, data: new Date().toISOString(), ...(cot.link.trim() ? { link: cot.link.trim().slice(0, 500) } : {}) };
    const prox: ItemCasa = { ...it, status: it.status === 'temos' ? 'cotando' : it.status, cotacoes: [...it.cotacoes, c] };
    setIt(prox); setCot({ loja: '', preco: '', link: '' }); setErro('');
    if (salvoNoApp && !editando) await onSave(prox, 'Cotação anotada');
  }
  async function salvarForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const f = new FormData(e.currentTarget);
    const preco = String(f.get('preco') || '').trim();
    const prox: ItemCasa = { ...it, name: String(f.get('name')).trim().slice(0, 80), cat: String(f.get('cat')) as any, status: String(f.get('status')) as any,
      comodo: String(f.get('comodo') || '') || undefined, marca: String(f.get('marca') || '').trim() || undefined, modelo: String(f.get('modelo') || '').trim() || undefined,
      preco: preco ? (num(preco) >= 0 ? num(preco) : null) : null, prioridade: (String(f.get('prioridade') || 'media') as any), meta: String(f.get('meta') || '').trim() ? (num(String(f.get('meta'))) > 0 ? num(String(f.get('meta'))) : null) : null, loja: String(f.get('loja') || '').trim() || undefined, dataCompra: String(f.get('dataCompra') || '') || undefined, garantiaAte: String(f.get('garantiaAte') || '') || undefined, note: String(f.get('note') || '').trim().slice(0, 1000) || undefined };
    const md = ['ml', 'mp', 'ma'].map(k => Math.round(num(String(f.get(k) || '').trim() || 'x')));
    prox.medidas = md.every(v => v >= 1 && v <= 1000) ? { l: md[0], p: md[1], a: md[2] } : undefined;
    if (!prox.name) return;
    if (await onSave(prox, salvoNoApp ? 'Item atualizado' : prox.name + ' cadastrado')) { setIt(prox); setEditando(false); }
  }

  return <div className="overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}><section className="modal casa-modal" role="dialog" aria-modal="true" aria-label={it.name || 'Novo item da casa'}>
    <button className="modal-close icon-btn" aria-label="Fechar" onClick={onClose}><X /></button>
    <span className="eyebrow">{salvoNoApp ? it.cat.toUpperCase() : 'NOVO ITEM DA CASA'}</span>
    {!editando && <><h2>{it.name}</h2><p className="muted">{[LABEL[it.status], it.status !== 'temos' && it.prioridade ? PRIOR[it.prioridade] : '', it.comodo, it.marca, it.modelo].filter(Boolean).join(' · ')}</p></>}

    {it.fotos.length || enviando ? <Carrossel fotos={it.fotos} enviando={enviando} onAbrir={setVer} />
      : <div className="casa-galeria"><span className="casa-foto vazia grande"><img src={'produtos/' + iconeCasa(it) + '.webp'} alt="" /></span></div>}
    <div className="casa-acoes-foto">
      <button type="button" className="primary" disabled={busy || it.fotos.length >= 12} onClick={() => cam.current?.click()}><Camera size={17} /> Tirar foto</button>
      <button type="button" className="secondary" disabled={busy || it.fotos.length >= 12} onClick={() => gal.current?.click()}><ImagePlus size={17} /> Da galeria</button>
      <input ref={cam} type="file" accept="image/*" capture="environment" hidden onChange={e => { fotos(e.target.files); e.target.value = ''; }} />
      <input ref={gal} type="file" accept="image/*" multiple hidden onChange={e => { fotos(e.target.files); e.target.value = ''; }} />
    </div>
    {erro && <p className="alert" role="alert">{erro}</p>}

    {editando && <div className="casa-link">
      <label><Link2 size={15} /> Tem o link do produto? <small>Shopee, Mercado Livre, Amazon, Magalu…</small></label>
      <div><input aria-label="Link do produto" inputMode="url" placeholder="Cole o link aqui" value={link} onChange={e => setLink(e.target.value)} onPaste={e => { const t = e.clipboardData.getData('text'); if (/^https?:\/\//.test(t.trim())) setTimeout(() => setLink(t.trim()), 0); }} />
        <button type="button" className="primary" disabled={lendoLink || !link.trim()} onClick={buscarLink}>{lendoLink ? <Loader2 size={16} className="spin" /> : null} {lendoLink ? prog + '%' : 'Buscar'}</button></div>
      {lendoLink && <div className="link-prog" role="progressbar" aria-valuenow={prog} aria-valuemin={0} aria-valuemax={100}>
        <div className="link-prog-barra"><i style={{ width: prog + '%' }} /></div>
        <small>{prog < 20 ? 'Abrindo a página da loja…' : prog < 45 ? 'Lendo nome, preço e foto…' : prog < 75 ? 'Organizando com a IA (categoria, cômodo, marca)…' : prog < 100 ? 'Baixando a foto do produto…' : 'Pronto!'} <b>{prog}%</b></small>
      </div>}
      {achou && <p className="casa-link-ok"><Check size={14} /> {achou}</p>}
    </div>}
    {editando ? <form key={formKey} onSubmit={salvarForm} className="casa-form">
      <label>Nome<input name="name" required maxLength={80} defaultValue={it.name} placeholder="Ex.: Robô aspirador, jogo de pratos" autoFocus={!salvoNoApp} /></label>
      <div className="form-grid">
        <label>Categoria<select name="cat" defaultValue={it.cat}>{CATS_CASA.map(c => <option key={c}>{c}</option>)}</select></label>
        <label>Situação<select name="status" defaultValue={it.status}><option value="temos">Já temos</option><option value="queremos">Queremos comprar</option><option value="cotando">Queremos · cotando preços</option></select></label>
        <label>Prioridade<select name="prioridade" defaultValue={it.prioridade || 'media'}><option value="alta">Alta</option><option value="media">Média</option><option value="baixa">Sem pressa</option></select></label>
        <label>Meta de preço (se for comprar)<input name="meta" inputMode="decimal" defaultValue={it.meta != null ? String(it.meta).replace('.', ',') : ''} placeholder="Ex.: 3.500" /></label>
        <label>Cômodo<select name="comodo" defaultValue={it.comodo || ''}><option value="">—</option>{COMODOS.map(c => <option key={c}>{c}</option>)}</select></label>
        <label>Marca<input name="marca" maxLength={60} defaultValue={it.marca || ''} /></label>
        <label>Modelo<input name="modelo" maxLength={60} defaultValue={it.modelo || ''} /></label>
        <label className="casa-medidas">Medidas em cm (largura × profundidade × altura)<span><input name="ml" inputMode="numeric" placeholder="L" defaultValue={it.medidas?.l || ''} /><input name="mp" inputMode="numeric" placeholder="P" defaultValue={it.medidas?.p || ''} /><input name="ma" inputMode="numeric" placeholder="A" defaultValue={it.medidas?.a || ''} /></span><small>Com as medidas, o item aparece no tamanho real na casa em 3D.</small></label>
        <label>Valor (pago ou estimado)<input name="preco" inputMode="decimal" defaultValue={it.preco != null ? String(it.preco).replace('.', ',') : ''} placeholder="0,00" /></label>
        <label>Loja<input name="loja" maxLength={80} defaultValue={it.loja || ''} /></label>
        <label>Data da compra<input name="dataCompra" type="date" defaultValue={it.dataCompra || ''} /></label>
        <label>Garantia até<input name="garantiaAte" type="date" defaultValue={it.garantiaAte || ''} /></label>
      </div>
      <label>Observações<textarea name="note" rows={2} maxLength={1000} defaultValue={it.note || ''} placeholder="Garantia, voltagem, cor, onde fica guardado…" /></label>
      <button className="primary full" disabled={busy || enviando > 0}><Check size={17} /> {salvoNoApp ? 'Salvar alterações' : 'Cadastrar item'}</button>
      {salvoNoApp && <button type="button" className="text-btn" onClick={() => { setIt(inicial!); setEditando(false); }}>Cancelar edição</button>}
    </form> : <>
      <dl className="casa-dados">
        {it.preco != null && <><dt>{it.status === 'temos' ? 'Pago' : 'Estimado'}</dt><dd>{money(it.preco)}{it.loja ? ' · ' + it.loja : ''}</dd></>}
        {it.dataCompra && <><dt>Comprado em</dt><dd>{new Date(it.dataCompra + 'T12:00').toLocaleDateString('pt-BR')}</dd></>}
        {it.garantiaAte && <><dt>Garantia</dt><dd>{(() => { const d = Math.ceil((Date.parse(it.garantiaAte + 'T12:00') - Date.now()) / 864e5); return 'até ' + new Date(it.garantiaAte + 'T12:00').toLocaleDateString('pt-BR') + (d < 0 ? ' · vencida' : d <= 60 ? ` · faltam ${d} dias` : ''); })()}</dd></>}
        {it.manutencoes?.length ? <><dt>Manutenções</dt><dd>{it.manutencoes.slice(-3).reverse().map(m => new Date(m.data).toLocaleDateString('pt-BR') + ' · ' + m.texto + (m.valor ? ' (' + money(m.valor) + ')' : '')).join(' — ')}</dd></> : null}
        {it.note && <><dt>Observações</dt><dd>{it.note}</dd></>}
        {it.status !== 'temos' && it.meta ? <><dt>Meta</dt><dd>{money(it.meta)}{(() => { const f = frenteMeta(it); return f ? (f.diferenca <= 0 ? ' · a melhor cotação já está dentro!' : ' · faltam ' + money(f.diferenca)) : ''; })()}</dd></> : null}
      </dl>
      {it.radar && it.status !== 'temos' && <div className={'casa-radar ' + (/comprar/i.test(it.radar.decisao) ? 'ok' : /validar/i.test(it.radar.decisao) ? 'warn' : '')}>
        <span><Radar size={16} /> <b>Radar diário · {it.radar.decisao}</b><small>atualizado em {new Date(it.radar.data + 'T12:00').toLocaleDateString('pt-BR')}</small></span>
        {it.radar.titulo && <p>{it.radar.titulo}</p>}
        <div>{it.radar.link && <a className="secondary" href={limparLink(it.radar.link)} target="_blank" rel="noopener noreferrer">Abrir dashboard <ExternalLink size={13} /></a>}
          <button className="secondary" disabled={puxando} onClick={async () => { setPuxando(true); setErro(''); try { const r = await puxarRadar(true, onReload); if (r && !r.novo) setErro('O radar ainda não mandou nada mais novo que ' + new Date(it.radar!.data + 'T12:00').toLocaleDateString('pt-BR') + '.'); } catch (e: any) { setErro(e?.message || 'Não consegui ler o e-mail do radar.'); } finally { setPuxando(false); } }}><RefreshCw size={13} /> {puxando ? 'Buscando…' : 'Buscar do e-mail'}</button></div>
      </div>}
      {it.status !== 'temos' && <div className="casa-cotacoes">
        <h3><Tag size={16} /> Cotações {m && <small>melhor: {money(m.preco)} na {m.loja}</small>}</h3>
        {[...it.cotacoes].sort((a, b) => a.preco - b.preco).map(c => <div key={c.id} className={'cotacao' + (m?.id === c.id ? ' melhor' : '')}>
          <span><b>{c.loja}</b><small>{new Date(c.data).toLocaleDateString('pt-BR')}{c.obs ? ' · ' + c.obs : ''}{c.link && <> · <a href={limparLink(c.link)} target="_blank" rel="noopener noreferrer">abrir <ExternalLink size={11} /></a></>}</small></span>
          <strong>{money(c.preco)}</strong>
          <button className="secondary" disabled={busy} onClick={() => onSave(comprei(it, c), 'Comprado! ' + it.name + ' agora está em Temos').then(ok => ok && setIt(comprei(it, c)))}>Comprei aqui</button>
          <button className="icon-btn" aria-label={'Apagar cotação ' + c.loja} disabled={busy} onClick={() => { const prox = { ...it, cotacoes: it.cotacoes.filter(x => x.id !== c.id) }; setIt(prox); onSave(prox, 'Cotação apagada'); }}><Trash2 size={14} /></button>
        </div>)}
        <form className="cotacao-nova" onSubmit={addCotacao}>
          <label><Store size={14} /><input aria-label="Loja" placeholder="Loja (ex.: Amazon, Magalu)" maxLength={80} value={cot.loja} onChange={e => setCot({ ...cot, loja: e.target.value })} /></label>
          <label>R$<input aria-label="Preço" inputMode="decimal" placeholder="0,00" value={cot.preco} onChange={e => setCot({ ...cot, preco: e.target.value })} /></label>
          <input aria-label="Link (opcional)" placeholder="Link (opcional)" value={cot.link} onChange={e => setCot({ ...cot, link: e.target.value })} />
          <button className="primary" disabled={busy}><Plus size={16} /> Anotar cotação</button>
        </form>
      </div>}
      {it.status === 'temos' && onEstragou && <Estragou it={it} busy={busy} abertos={avisosAbertos} onEstragou={onEstragou} onVer3D={onVer3D} />}
      <div className="casa-rodape">
        <button className="secondary" onClick={() => setEditando(true)}>Editar dados</button>
        {it.status !== 'temos' && !it.cotacoes.length && <button className="secondary" disabled={busy} onClick={() => onSave(comprei(it), 'Comprado! ' + it.name + ' agora está em Temos').then(ok => ok && setIt(comprei(it)))}>Já compramos</button>}
        {it.status === 'temos' && <button className="secondary" disabled={busy} onClick={() => { const v = desfazerCompra(it); onSave(v, it.name + ' voltou para Queremos comprar').then(ok => ok && setIt(v)); }}><RotateCcw size={15} /> Não compramos ainda</button>}
        <button className="text-btn perigo-txt" onClick={() => setApagar(true)}><Trash2 size={14} /> Apagar item</button>
      </div>
      {apagar && <div className="apagar-confirma"><span>Apagar <b>{it.name}</b> e as fotos dele?</span><div><button className="perigo" disabled={busy} onClick={() => onDelete(it)}>Apagar</button><button className="secondary" onClick={() => setApagar(false)}>Cancelar</button></div></div>}
    </>}
    {ver && <div className="casa-visor" onClick={() => setVer('')}><div onClick={e => e.stopPropagation()} className="casa-visor-car"><Carrossel fotos={it.fotos} enviando={0} inicio={it.fotos.indexOf(ver)} cheio onMudou={setVer} /></div><div className="casa-visor-acoes" onClick={e => e.stopPropagation()}><button className="perigo" disabled={busy} onClick={() => tirarFoto(ver)}><Trash2 size={15} /> Apagar foto</button><button className="secondary" onClick={() => setVer('')}>Fechar</button></div></div>}
  </section></div>;
}

/** Botão "Estragou": abre um aviso de conserto ligado ao objeto (e aparece no 3D). */
function Estragou({ it, busy, abertos, onEstragou, onVer3D }: { it: ItemCasa; busy: boolean; abertos: Aviso[]; onEstragou: (i: ItemCasa, t: string, u: Urgencia) => Promise<any>; onVer3D?: (i: ItemCasa) => void }) {
  const [aberto, setAberto] = useState(false), [texto, setTexto] = useState(''), [u, setU] = useState<Urgencia>('semana'), [feito, setFeito] = useState(false);
  if (abertos.length && !aberto) return <div className="estragou-aviso"><AlertTriangle size={16} /><span><b>Em conserto</b><small>{abertos.map(a => a.texto).join(' · ')}</small></span><div className="estragou-mini">{onVer3D && <button className="mini" onClick={() => onVer3D(it)}>Ver no 3D</button>}<button className="mini" onClick={() => setAberto(true)}>Outro problema</button></div></div>;
  if (feito) return <div className="estragou-aviso ok"><Check size={16} /><span><b>Aviso criado</b><small>Aparece em Avisos da casa{it.movel ? ' e no objeto da maquete 3D' : ' e no cômodo do 3D'}.</small></span>{onVer3D && <button className="mini" onClick={() => onVer3D(it)}>Ver no 3D</button>}</div>;
  return aberto ? <form className="estragou-form" onSubmit={async e => { e.preventDefault(); if (await onEstragou(it, texto, u)) { setFeito(true); setAberto(false); } }}>
    <b><AlertTriangle size={15} /> O que aconteceu com {it.name}?</b>
    <input autoFocus maxLength={150} placeholder="Ex.: parou de ligar, botão quebrado, vazando" value={texto} onChange={e => setTexto(e.target.value)} />
    <div className="chips">{URGENCIAS.map(([k, t]) => <button type="button" key={k} className={'urg-' + k + (u === k ? ' selected' : '')} onClick={() => setU(k)}>{t}</button>)}</div>
    {it.garantiaAte && Date.parse(it.garantiaAte + 'T23:59') >= Date.now() && <p className="notice">Ainda está na garantia (até {new Date(it.garantiaAte + 'T12:00').toLocaleDateString('pt-BR')}){it.loja ? ' · comprado na ' + it.loja : ''}. Vale acionar antes de pagar conserto.</p>}
    <div className="estragou-botoes"><button className="perigo" disabled={busy}>Abrir aviso de conserto</button><button type="button" className="secondary" onClick={() => setAberto(false)}>Cancelar</button></div>
  </form> : <button className="estragou-btn" onClick={() => setAberto(true)}><AlertTriangle size={16} /> Estragou</button>;
}
