import { useMemo, useState } from 'react';
import { Plus, Search, Trash2, X } from 'lucide-react';
import { slots } from './data';

const ALIMENTOS = ['Hortifruti', 'Proteínas', 'Laticínios', 'Mercearia', 'Bebidas', 'Outros'];
const EMOJIS = ['🍽️', '🍝', '🍲', '🥩', '🍗', '🥗', '🥪', '🍳', '🍔', '🥘', '🍞', '🍓', '☕', '🌮'];
const CORES = ['#e8dcc6', '#d8dfc9', '#efd9c4', '#e3ebc8', '#eed4c9', '#f1e2b3'];
const UNIDADES = ['un', 'g', 'kg', 'ml', 'L', 'fatia', 'pacote'];
const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

type Ing = { name: string; qty: number; unit: string; cat: string };

/** Montar (ou editar) uma refeição da casa usando os produtos que vocês compram. */
export default function ReceitaPropria({ data, save, inicial, refeicao, planKey, onClose }: { data: any; save: (d: any, msg?: string) => Promise<boolean>; inicial?: any; refeicao?: string; planKey?: string; onClose: () => void }) {
  const [nome, setNome] = useState(inicial?.name || '');
  const [meal, setMeal] = useState(inicial?.meal || refeicao || 'Almoço');
  const [emoji, setEmoji] = useState(inicial?.emoji || '🍽️');
  const [tempo, setTempo] = useState(inicial?.time ?? 20);
  const [ings, setIngs] = useState<Ing[]>(inicial?.ingredients || []);
  const [passos, setPassos] = useState((inicial?.steps || []).join('\n'));
  const [busca, setBusca] = useState('');
  const [erro, setErro] = useState('');

  const produtos = useMemo(() => (data.catalog || []).filter((p: any) => ALIMENTOS.includes(p.cat))
    .filter((p: any) => !ings.some(i => norm(i.name) === norm(p.name)))
    .filter((p: any) => !busca || norm(p.name + ' ' + (p.aliases || []).join(' ')).includes(norm(busca)))
    .sort((a: any, b: any) => Number(!!b.favorite) - Number(!!a.favorite) || a.name.localeCompare(b.name)), [data.catalog, ings, busca]);

  const add = (p: any) => { setIngs([...ings, { name: p.name, qty: p.unit === 'kg' ? 0.2 : 1, unit: p.unit === 'kg' ? 'kg' : 'un', cat: p.cat }]); setBusca(''); };
  const upd = (k: number, patch: Partial<Ing>) => setIngs(ings.map((x, i) => i === k ? { ...x, ...patch } : x));

  async function salvar(e: any) {
    e.preventDefault();
    if (!nome.trim()) { setErro('Dê um nome para a refeição.'); return; }
    if (!ings.length) { setErro('Escolha pelo menos um produto.'); return; }
    const id = inicial?.id || 'c-' + crypto.randomUUID().slice(0, 12);
    const receita = { id, name: nome.trim().slice(0, 80), emoji, color: inicial?.color || CORES[(data.customRecipes?.length || 0) % CORES.length], time: Number(tempo) || 0, meal,
      kcal: 0, p: 0, c: 0, f: 0, fiber: 0, sodium: 0, custom: true as const,
      ingredients: ings.map(i => ({ ...i, qty: Math.max(0, Number(i.qty) || 0) })), steps: passos.split('\n').map((s: string) => s.trim()).filter(Boolean).slice(0, 30) };
    const lista = data.customRecipes || [];
    const plan = planKey ? { ...data.plan, [planKey]: { recipe: id } } : data.plan;
    const ok = await save({ ...data, plan, customRecipes: inicial ? lista.map((r: any) => r.id === id ? receita : r) : [...lista, receita] }, planKey ? 'Refeição criada e colocada no cardápio' : inicial ? 'Refeição atualizada' : 'Refeição criada');
    if (ok) onClose();
  }

  return <div className="overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <section className="modal receita-modal" role="dialog" aria-modal="true" aria-label="Montar refeição">
      <button className="modal-close icon-btn" title="Fechar" onClick={onClose}><X /></button>
      <span className="eyebrow">COM O QUE VOCÊS COMPRAM</span>
      <h2>{inicial ? 'Editar refeição' : 'Montar uma refeição'}</h2>
      <form onSubmit={salvar}>
        <label>Nome<input value={nome} onChange={e => setNome(e.target.value)} maxLength={80} placeholder="Ex.: Pão com queijo e café" required /></label>
        <div className="form-grid">
          <label>Refeição<select value={meal} onChange={e => setMeal(e.target.value)}>{slots.map(s => <option key={s}>{s}</option>)}</select></label>
          <label>Tempo (min)<input type="number" min="0" max="1000" value={tempo} onChange={e => setTempo(e.target.value)} /></label>
        </div>
        <div className="emoji-row" role="group" aria-label="Ícone">{EMOJIS.map(x => <button type="button" key={x} className={x === emoji ? 'selected' : ''} onClick={() => setEmoji(x)}>{x}</button>)}</div>
        <h3>Ingredientes <small>({ings.length})</small></h3>
        {ings.map((i, k) => <div className="ing-row" key={i.name}>
          <span>{i.name}</span>
          <input aria-label={'Quantidade de ' + i.name} type="number" min="0" step="0.01" value={i.qty} onChange={e => upd(k, { qty: Number(e.target.value) })} />
          <select aria-label={'Unidade de ' + i.name} value={i.unit} onChange={e => upd(k, { unit: e.target.value })}>{UNIDADES.map(u => <option key={u}>{u}</option>)}</select>
          <button type="button" className="icon-btn" title={'Tirar ' + i.name} onClick={() => setIngs(ings.filter((_, x) => x !== k))}><Trash2 size={15} /></button>
        </div>)}
        <div className="search ing-search"><Search size={16} /><input value={busca} onChange={e => setBusca(e.target.value)} placeholder="Buscar nos nossos produtos…" /></div>
        <div className="ing-pick">{produtos.slice(0, busca ? 30 : 18).map((p: any) => <button type="button" key={p.id} onClick={() => add(p)}><Plus size={13} />{p.name}</button>)}
          {!produtos.length && <small className="muted">Nenhum produto com esse nome. Cadastre em Lista de compras → Nossos produtos.</small>}</div>
        <label>Modo de preparo (opcional, um passo por linha)<textarea rows={3} value={passos} onChange={e => setPassos(e.target.value)} maxLength={3000} /></label>
        {erro && <div className="alert" role="alert">{erro}</div>}
        <button className="primary full">{inicial ? 'Salvar alterações' : 'Criar refeição'}</button>
      </form>
    </section>
  </div>;
}
