// Botão único de adicionar: um só lugar para mandar algo para a lista, a despensa ou a casa.
// O destino começa pelo que faz sentido na aba aberta, e dá para trocar ali mesmo.
import { useEffect, useMemo, useRef, useState } from 'react';
import { X, Plus, Minus, ShoppingCart, Archive, Home, ChevronRight } from 'lucide-react';
import { identify, normalizeName } from './product-identity';
import { catalogCategories } from './catalog-data';
import { ehCasaConsumo, CAT_CASA_CONSUMO } from './lugar';
import { quem } from './quem';

export type Contexto = 'inicio' | 'lista' | 'despensa' | 'cardapio' | 'casa';
export type Destino = 'Supermercado' | 'Açougue' | 'Sacolão' | 'Outros' | 'despensa' | 'queremos' | 'temos';
type Grupo = { id: 'lista' | 'despensa' | 'casa'; titulo: string; icone: typeof Home; ops: [Destino, string][] };
const GRUPOS: Grupo[] = [
  { id: 'lista', titulo: 'Lista de compras', icone: ShoppingCart, ops: [['Supermercado', 'Supermercado'], ['Açougue', 'Açougue'], ['Sacolão', 'Sacolão'], ['Outros', 'Outros']] },
  { id: 'despensa', titulo: 'Despensa', icone: Archive, ops: [['despensa', 'Já está em casa']] },
  { id: 'casa', titulo: 'Casa', icone: Home, ops: [['queremos', 'Queremos comprar'], ['temos', 'Já temos']] },
];
const ORDEM: Record<Contexto, Grupo['id'][]> = { inicio: ['lista', 'casa', 'despensa'], lista: ['lista', 'despensa', 'casa'], cardapio: ['lista', 'despensa', 'casa'], despensa: ['despensa', 'lista', 'casa'], casa: ['casa', 'lista', 'despensa'] };
const PADRAO: Record<Contexto, Destino> = { inicio: 'Supermercado', lista: 'Supermercado', cardapio: 'Supermercado', despensa: 'despensa', casa: 'queremos' };
const grupoDe = (d: Destino): Grupo['id'] => d === 'despensa' ? 'despensa' : d === 'queremos' || d === 'temos' ? 'casa' : 'lista';

/** Categoria provável de um item da aba Casa, pelo nome. */
export function catCasa(nome: string) {
  const n = normalizeName(nome);
  if (/planta|jiboia|quadro|tapete|cortina|sofa|mesa|cadeira|cama\b|guarda|estante|criado|puff|rack|espelho|luminaria|abajur|vaso/.test(n)) return 'Móveis e decoração';
  if (/geladeira|fogao|micro|maquina|tv|televis|aspirador|robo|air ?fryer|liquidific|batedeira|cafeteira|ventilador|ar condicionado|monitor|notebook|celular|caixa de som|fone/.test(n)) return 'Eletrônicos';
  if (/lencol|toalha|edredom|travesseiro|fronha|cobertor|manta|colcha|jogo de cama/.test(n)) return 'Cama, mesa e banho';
  if (/vassoura|rodo|balde|organizador|cesto|cabide|pano|esfreg|caixa organiz/.test(n)) return 'Organização e limpeza';
  if (/panela|frigideira|prato|copo|talher|faca|tabua|pote|forma|assadeira|xicara|garrafa|escorredor/.test(n)) return 'Utensílios';
  return 'Outros';
}
/** Na lista, onde comprar: o que é "casa e bem-estar" vai para Outros; proteína sugere Açougue só quando o contexto já é esse. */
export function lugarSugerido(nome: string, atual: Destino): Destino {
  if (grupoDe(atual) !== 'lista') return atual;
  return ehCasaConsumo(normalizeName(nome)) ? 'Outros' : atual;
}

export default function Adicionar({ data, save, busy, contexto, onClose, onCasa, onDetalhes }: {
  data: any; save: (d: any, m?: string) => Promise<any>; busy: boolean; contexto: Contexto; onClose: () => void;
  onCasa: (status: 'queremos' | 'temos', nome: string, detalhes: boolean) => void;
  onDetalhes: (tipo: 'item' | 'pantry', pre: any) => void;
}) {
  const [nome, setNome] = useState(''), [qtd, setQtd] = useState(1), [dest, setDest] = useState<Destino>(PADRAO[contexto]), [tocouDest, setTocouDest] = useState(false), [cat, setCat] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { setTimeout(() => ref.current?.focus(), 60); const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); addEventListener('keydown', esc); return () => removeEventListener('keydown', esc); }, []);
  const id = useMemo(() => nome.trim() ? identify(nome.trim(), data.catalog || []) : null, [nome, data.catalog]);
  const casaConsumo = !!nome.trim() && ehCasaConsumo(normalizeName(nome));
  const catLista = cat || (casaConsumo ? CAT_CASA_CONSUMO : id?.cat || 'Outros');
  // Ao digitar algo de "casa e bem-estar" (essência, incenso), o lugar muda sozinho para Outros, se a pessoa não escolheu outro
  useEffect(() => { if (!tocouDest && nome.trim()) setDest(d => lugarSugerido(nome, d === 'Outros' && !casaConsumo ? PADRAO[contexto] : d)); }, [nome]);
  const sugestoes = useMemo(() => {
    const n = normalizeName(nome); if (n.length < 2 || grupoDe(dest) === 'casa') return [];
    return (data.catalog || []).filter((p: any) => normalizeName(p.name).includes(n) && normalizeName(p.name) !== n).slice(0, 5);
  }, [nome, dest, data.catalog]);
  const g = grupoDe(dest);
  const jaNaLista = g === 'lista' && nome.trim() && data.items.some((i: any) => !i.checked && normalizeName(i.name) === normalizeName(id?.name || nome));

  async function adicionar(detalhes = false) {
    const n = nome.trim().slice(0, 80); if (!n) { ref.current?.focus(); return; }
    if (g === 'casa') { onCasa(dest as 'queremos' | 'temos', n, detalhes); return; }
    const p = (data.catalog || []).find((c: any) => c.id === id?.id);
    const nomeFinal = (p?.name || n).slice(0, 80);
    const item: any = { id: crypto.randomUUID(), name: nomeFinal, qty: qtd, unit: p?.unit || 'un', cat: catLista, checked: false, price: null, date: null, ...(p ? { catalogId: p.id } : {}),
      ...(g === 'lista' && dest !== (catLista === CAT_CASA_CONSUMO ? 'Outros' : 'Supermercado') ? { lugar: dest } : {}), ...(g === 'lista' && quem() ? { by: undefined } : {}) };
    if (detalhes) { onDetalhes(g === 'despensa' ? 'pantry' : 'item', item); return; }
    if (jaNaLista) { const ex = data.items.find((i: any) => !i.checked && normalizeName(i.name) === normalizeName(nomeFinal)); await save({ ...data, items: data.items.map((i: any) => i.id === ex.id ? { ...i, qty: i.qty + qtd } : i) }, nomeFinal + ' já estava na lista · quantidade somada'); onClose(); return; }
    const campo = g === 'despensa' ? 'pantry' : 'items';
    if (await save({ ...data, [campo]: [...data[campo], item] }, nomeFinal + (g === 'despensa' ? ' na despensa' : ' na lista' + (item.lugar ? ' · ' + item.lugar : '')))) onClose();
  }

  const grupos = ORDEM[contexto].map(k => GRUPOS.find(x => x.id === k)!);
  return <div className="overlay add-overlay" onClick={onClose}><section className="modal add-sheet" role="dialog" aria-modal="true" aria-label="Adicionar" onClick={e => e.stopPropagation()}>
    <button className="modal-close icon-btn" aria-label="Fechar" onClick={onClose}><X /></button>
    <span className="eyebrow">ADICIONAR</span><h2>O que vamos anotar?</h2>
    <form onSubmit={e => { e.preventDefault(); adicionar(); }}>
      <div className="add-nome"><input ref={ref} aria-label="Nome" maxLength={80} placeholder={g === 'casa' ? 'Ex.: robô aspirador, jogo de toalhas' : 'Ex.: café, frango, detergente'} value={nome} onChange={e => setNome(e.target.value)} />
        {g !== 'casa' && <div className="add-qtd" aria-label="Quantidade"><button type="button" aria-label="Menos" onClick={() => setQtd(q => Math.max(1, q - 1))}><Minus size={15} /></button><b>{qtd}</b><button type="button" aria-label="Mais" onClick={() => setQtd(q => Math.min(99, q + 1))}><Plus size={15} /></button></div>}</div>
      {sugestoes.length > 0 && <div className="chips add-sug">{sugestoes.map((p: any) => <button type="button" key={p.id} onClick={() => setNome(p.name)}>{p.name}</button>)}</div>}
      <div className="add-destinos">{grupos.map(gr => { const I = gr.icone; return <div key={gr.id} className={'add-grupo' + (g === gr.id ? ' on' : '')}>
        <small><I size={14} /> {gr.titulo}</small>
        <div className="chips">{gr.ops.map(([d, t]) => <button type="button" key={d} className={dest === d ? 'selected' : ''} aria-pressed={dest === d} onClick={() => { setDest(d); setTocouDest(true); }}>{t}</button>)}</div></div>; })}</div>
      {g !== 'casa' && nome.trim() && <label className="add-cat">Categoria<select value={catLista} onChange={e => setCat(e.target.value)}>{catalogCategories.map(c => <option key={c}>{c}</option>)}</select></label>}
      {jaNaLista && <p className="notice">Já está na lista. Vou somar a quantidade.</p>}
      <button className="primary full" disabled={busy || !nome.trim()}><Plus size={17} /> {g === 'casa' ? (dest === 'temos' ? 'Cadastrar em Já temos' : 'Cadastrar em Queremos comprar') : g === 'despensa' ? 'Pôr na despensa' : 'Pôr na lista' + (dest !== 'Supermercado' ? ' · ' + dest : '')}</button>
      <button type="button" className="text-btn add-mais" disabled={!nome.trim()} onClick={() => adicionar(true)}>{g === 'casa' ? 'Abrir ficha completa (fotos, valor, cômodo)' : 'Mais detalhes (unidade, preço)'} <ChevronRight size={15} /></button>
    </form>
  </section></div>;
}
