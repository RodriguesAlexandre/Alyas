// Cardápio da semana montado pela IA: usa o que tem em casa, pensa nas marmitas e na meta de proteína de cada um.
import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { api } from './api';
import { aplicarAcoes, contexto, type Acao } from './acoes-ia';
import { allRecipes, slots } from './data';

const DIAS = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'];

export default function CardapioIA({ data, save, busy }: { data: any; save: (d: any, m?: string) => Promise<any>; busy: boolean }) {
  const [refeicoes, setRefeicoes] = useState<string[]>(['Almoço', 'Jantar']), [marmita, setMarmita] = useState(true), [vazios, setVazios] = useState(true);
  const [rodando, setRodando] = useState(false), [msg, setMsg] = useState(''), [aberto, setAberto] = useState(false);
  async function montar() {
    setRodando(true); setMsg('');
    try {
      const metas = data.profiles.filter((p: any) => p.protein).map((p: any) => `${p.name}: ${p.protein} g de proteína/dia (${p.portions} porção)`).join('; ');
      const ocupados = Object.keys(data.plan).filter(k => refeicoes.some(r => k.endsWith('-' + r)));
      const pedido = [
        `Monte o cardápio da semana (segunda a domingo) para: ${refeicoes.join(', ')}.`,
        'Use só receitas da lista "receitas" do contexto (pelo id) e responda com ações plan_meal (day 0=segunda … 6=domingo).',
        'Priorize receitas com ingredientes que já temos (despensa e itens [ok]/[low] do catálogo) e varie: no máximo 2 vezes a mesma receita na semana.',
        marmita && refeicoes.includes('Almoço') ? 'O almoço de segunda a sexta é marmita levada para o trabalho: escolha pratos que aguentam bem a marmita, e de preferência repita no almoço o jantar da noite anterior (cozinhar uma vez, render duas).' : '',
        metas ? `Metas de proteína: ${metas}. Prefira as receitas com mais proteína (campo proteina_g) para chegar perto da meta.` : 'Prefira refeições com boa quantidade de proteína.',
        vazios && ocupados.length ? `Não mexa nos horários já preenchidos: ${ocupados.join(', ')}.` : 'Pode substituir o que já estiver no cardápio.',
        'Depois das ações, explique em 2 frases curtas a lógica da semana.',
      ].filter(Boolean).join(' ');
      const ctx = { ...contexto(data), receitas: allRecipes(data).filter(r => refeicoes.includes(r.meal)).map(r => ({ id: r.id, nome: r.name, refeicao: r.meal, proteina_g: r.p, kcal: r.kcal, tempo_min: r.time, ingredientes: r.ingredients.map(i => i.name) })) };
      const r = await api.assistente([{ role: 'user', text: pedido }], ctx);
      const ids = new Set(allRecipes(data).map(x => x.id));
      const acoes = (r.actions || []).filter((a: Acao) => a.type === 'plan_meal' && a.recipe_id && ids.has(a.recipe_id) && a.day! >= 0 && a.day! <= 6 && refeicoes.includes(a.meal || '') && !(vazios && data.plan[a.day + '-' + a.meal]));
      if (!acoes.length) { setMsg(r.reply || 'A IA não conseguiu montar agora. Tente de novo.'); return; }
      const res = aplicarAcoes(data, acoes);
      if (await save(res.data, `Cardápio montado pela IA · ${acoes.length} refeições`)) setMsg((r.reply || '').trim() || `${acoes.length} refeições planejadas.`);
    } catch (e: any) { setMsg(/ligad|chave|gemini/i.test(e?.message || '') ? 'A IA não está ligada (Ajustes → Assistente).' : 'Não consegui falar com a IA agora: ' + (e?.message || 'erro')); }
    finally { setRodando(false); }
  }
  return <section className="card cardapio-ia">
    <div className="cardapio-ia-topo"><Sparkles size={20} /><div><b>Montar a semana com a IA</b><small>Usa o que tem em casa, as marmitas e a meta de proteína de vocês.</small></div>
      {!aberto && <button className="primary" disabled={busy || rodando} onClick={() => setAberto(true)}>Montar</button>}</div>
    {aberto && <>
      <div className="chips">{slots.map((s: string) => <button key={s} className={refeicoes.includes(s) ? 'selected' : ''} aria-pressed={refeicoes.includes(s)} onClick={() => setRefeicoes(r => r.includes(s) ? r.filter(x => x !== s) : [...r, s])}>{s}</button>)}</div>
      <label className="cardapio-ia-op"><input type="checkbox" checked={marmita} onChange={e => setMarmita(e.target.checked)} /> Almoço de segunda a sexta é marmita</label>
      <label className="cardapio-ia-op"><input type="checkbox" checked={vazios} onChange={e => setVazios(e.target.checked)} /> Manter o que já está planejado</label>
      <button className="primary full" disabled={busy || rodando || !refeicoes.length} onClick={montar}>{rodando ? <><Loader2 className="spin" size={16} /> Montando {DIAS.length} dias…</> : <><Sparkles size={16} /> Montar cardápio</>}</button>
    </>}
    {msg && <p className="muted cardapio-ia-msg" role="status">{msg}</p>}
  </section>;
}
