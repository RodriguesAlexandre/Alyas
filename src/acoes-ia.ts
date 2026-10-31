// Ações que o assistente pode executar no app, e um intérprete simples de comandos
// (usado quando a IA do Gemini ainda não está ligada).
import { identify, normalizeName } from './product-identity.ts';
import { allRecipes, slots, days, consolidate } from './data.ts';

export type Acao = { type: string; product?: string; qty?: number; unit?: string; status?: 'ok' | 'low' | 'out'; day?: number; meal?: string; recipe_id?: string; name?: string; value?: number; ingredients?: { name: string; qty?: number; unit?: string }[]; steps?: string[]; plan_day?: number; plan_meal?: string };

const UNIDADES = ['un', 'g', 'kg', 'ml', 'L', 'fatia', 'pacote'];
const CATS = ['Hortifruti', 'Proteínas', 'Laticínios', 'Mercearia', 'Bebidas', 'Limpeza', 'Higiene', 'Utilidades', 'Outros'];
const unidade = (u?: string) => (u && UNIDADES.includes(u) ? u : u === 'l' ? 'L' : 'un');
const refeicao = (m?: string) => slots.find(s => normalizeName(s) === normalizeName(m || '')) || slots.find(s => normalizeName(m || '').includes(normalizeName(s).split(' ')[0])) || '';
const uid = () => (globalThis.crypto?.randomUUID?.() || Math.random().toString(36).slice(2)) as string;

function produto(data: any, nome: string) {
  const id = identify(nome, data.catalog || []);
  const p = (data.catalog || []).find((c: any) => c.id === id.id || normalizeName(c.name) === normalizeName(id.name));
  return { p, nome: p?.name || id.name || nome, cat: p?.cat || (CATS.includes(id.cat) ? id.cat : 'Outros') };
}

/** Aplica uma lista de ações e devolve os dados novos e um resumo legível de cada ação. */
export function aplicarAcoes(data: any, acoes: Acao[]): { data: any; feitos: string[]; ignorados: string[] } {
  let d = { ...data, items: [...data.items], catalog: [...(data.catalog || [])], plan: { ...data.plan }, customRecipes: [...(data.customRecipes || [])] };
  const feitos: string[] = [], ignorados: string[] = [];
  const naLista = (nome: string) => d.items.find((i: any) => !i.checked && normalizeName(i.name) === normalizeName(nome));
  const addLista = (nome: string, cat: string, qty = 1, unit = 'un', catalogId?: string) => {
    const old = naLista(nome);
    if (old) { d.items = d.items.map((i: any) => i.id === old.id ? { ...i, qty: Math.max(i.qty, qty) } : i); return false; }
    d.items.push({ id: uid(), name: nome, qty, unit, cat, checked: false, price: null, date: null, ...(catalogId ? { catalogId } : {}) });
    return true;
  };
  for (const a of acoes || []) {
    try {
      switch (a.type) {
        case 'add_to_list': {
          if (!a.product) throw 0;
          const { p, nome, cat } = produto(d, a.product);
          const novo = addLista(nome, cat, Math.max(0.01, Number(a.qty) || 1), unidade(a.unit || p?.unit), p?.id);
          if (p) d.catalog = d.catalog.map((c: any) => c.id === p.id ? { ...c, supply: 'out' } : c);
          feitos.push(novo ? `🛒 ${nome} na lista` : `🛒 ${nome} já estava na lista`); break;
        }
        case 'remove_from_list': {
          const it = a.product && naLista(produto(d, a.product).nome);
          if (!it) { ignorados.push(`${a.product} não estava na lista`); break; }
          d.items = d.items.filter((i: any) => i.id !== it.id); feitos.push(`🗑️ ${it.name} saiu da lista`); break;
        }
        case 'mark_in_cart': {
          const it = a.product && naLista(produto(d, a.product).nome);
          if (!it) { ignorados.push(`${a.product} não está na lista`); break; }
          d.items = d.items.map((i: any) => i.id === it.id ? { ...i, checked: true } : i); feitos.push(`✅ ${it.name} no carrinho`); break;
        }
        case 'set_supply': {
          if (!a.product || !a.status) throw 0;
          const { p, nome, cat } = produto(d, a.product);
          if (p) d.catalog = d.catalog.map((c: any) => c.id === p.id ? { ...c, supply: a.status } : c);
          else if (a.status !== 'out') { ignorados.push(`${a.product} não está em Nossos produtos`); break; }
          if (a.status === 'out') addLista(nome, cat, 1, p?.unit || 'un', p?.id);
          feitos.push(a.status === 'ok' ? `🏠 ${nome}: tem em casa` : a.status === 'low' ? `⏳ ${nome}: acabando` : `🛒 ${nome}: acabou, foi para a lista`); break;
        }
        case 'plan_meal': {
          const meal = refeicao(a.meal), dia = Number(a.day);
          const r = allRecipes(d).find(x => x.id === a.recipe_id) || allRecipes(d).find(x => a.name && normalizeName(x.name) === normalizeName(a.name));
          if (!meal || !(dia >= 0 && dia <= 6) || !r) { ignorados.push('não achei a receita ou o dia para planejar'); break; }
          d.plan[dia + '-' + meal] = { recipe: r.id }; feitos.push(`📅 ${days[dia]} · ${meal}: ${r.name}`); break;
        }
        case 'clear_meal': {
          const meal = refeicao(a.meal), dia = Number(a.day);
          if (!meal || !(dia >= 0 && dia <= 6)) throw 0;
          delete d.plan[dia + '-' + meal]; feitos.push(`📅 ${days[dia]} · ${meal}: liberado`); break;
        }
        case 'create_recipe': {
          const ings = (a.ingredients || []).filter(i => i?.name).slice(0, 40).map(i => { const { nome, cat } = produto(d, i.name); return { name: nome, qty: Math.max(0, Number(i.qty) || 1), unit: unidade(i.unit), cat }; });
          if (!a.name || !ings.length) throw 0;
          if (ings.some(i => /camar/i.test(i.name))) { ignorados.push('receita com camarão bloqueada'); break; }
          const meal = refeicao(a.plan_meal || a.meal) || 'Almoço';
          const r = { id: 'c-' + uid().slice(0, 12), name: String(a.name).slice(0, 80), emoji: '✨', color: '#e8dcc6', time: 20, meal: meal as any, kcal: 0, p: 0, c: 0, f: 0, fiber: 0, sodium: 0, custom: true as const, ingredients: ings, steps: (a.steps || []).map(String).slice(0, 30) };
          d.customRecipes.push(r); feitos.push(`✨ Receita criada: ${r.name}`);
          const dia = Number(a.plan_day);
          if (dia >= 0 && dia <= 6) { d.plan[dia + '-' + meal] = { recipe: r.id }; feitos.push(`📅 ${days[dia]} · ${meal}: ${r.name}`); }
          break;
        }
        case 'plan_to_list': {
          const n = Object.keys(d.plan).length; if (!n) { ignorados.push('o cardápio está vazio'); break; }
          const needs = consolidate(d.plan, d.pantry, d.profiles, allRecipes(d)); let n2 = 0;
          for (const ing of needs) { const k = d.items.findIndex((i: any) => !i.checked && normalizeName(i.name) === normalizeName(ing.name) && i.unit === ing.unit); if (k >= 0) d.items[k] = { ...d.items[k], qty: Math.max(d.items[k].qty, ing.qty) }; else { d.items.push({ ...ing, id: uid(), price: null, date: null, checked: false }); n2++; } }
          feitos.push(`🛒 Ingredientes do cardápio na lista (${n2} novos)`); break;
        }
        case 'set_budget': {
          const v = Number(a.value); if (!(v > 0 && v < 1e6)) throw 0;
          d.budget = Math.round(v * 100) / 100; feitos.push(`💰 Orçamento: R$ ${d.budget.toFixed(2).replace('.', ',')}`); break;
        }
        default: ignorados.push('ação desconhecida: ' + a.type);
      }
    } catch { ignorados.push('não consegui fazer: ' + a.type); }
  }
  return { data: d, feitos, ignorados };
}

/** Resumo enxuto da casa para o assistente (só o que ajuda a decidir). */
export function contexto(data: any) {
  const hoje = new Date();
  return {
    hoje: hoje.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit' }), dia_semana_hoje: (hoje.getDay() + 6) % 7,
    pessoas: data.profiles.map((p: any) => ({ nome: p.name, porcoes: p.portions, meta_kcal: p.kcal || null })),
    alergias: ['camarão'], orcamento_semanal: data.budget,
    catalogo: (data.catalog || []).map((p: any) => p.name + (p.supply && p.supply !== 'unknown' ? ` [${p.supply}]` : '')),
    lista_de_compras: data.items.map((i: any) => `${i.name} ${i.qty} ${i.unit}${i.checked ? ' (no carrinho)' : ''}`),
    despensa: data.pantry.map((i: any) => `${i.name} ${i.qty} ${i.unit}`),
    receitas: allRecipes(data).map(r => ({ id: r.id, nome: r.name, refeicao: r.meal, ingredientes: r.ingredients.map(i => i.name) })),
    cardapio: Object.fromEntries(Object.entries(data.plan).map(([k, v]: any) => [k, allRecipes(data).find(r => r.id === v.recipe)?.name || v.recipe])),
  };
}

// ---------- Intérprete simples (sem IA) ----------
const DIAS: Record<string, number> = { segunda: 0, terca: 1, quarta: 2, quinta: 3, sexta: 4, sabado: 5, domingo: 6, seg: 0, ter: 1, qua: 2, qui: 3, sex: 4, sab: 5, dom: 6 };
const REF: Record<string, string> = { cafe: 'Café da manhã', 'cafe da manha': 'Café da manhã', almoco: 'Almoço', lanche: 'Lanche', jantar: 'Jantar', janta: 'Jantar' };

export function interpretar(texto: string, data: any): { acoes: Acao[]; resposta?: string } {
  const t = normalizeName(texto).replace(/[!?.]/g, ' ').replace(/\s+/g, ' ').trim();
  const lista = (s: string) => s.split(/,| e /).map(x => x.trim()).filter(x => x && x.length < 40);
  let m: RegExpMatchArray | null;
  if ((m = t.match(/^(?:coloca|coloque|adiciona|adicione|poe|bota|anota|inclui|inclua)\s+(.+?)\s+na lista/)) || (m = t.match(/^(?:compra|comprar|falta|faltando|precisa comprar)\s+(.+)$/)))
    return { acoes: lista(m[1]).map(product => ({ type: 'add_to_list', product })) };
  if ((m = t.match(/^(?:tira|tire|remove|remova)\s+(.+?)\s+da lista/))) return { acoes: lista(m[1]).map(product => ({ type: 'remove_from_list', product })) };
  if ((m = t.match(/^(.+?)\s+(?:acabou|ta faltando|esta faltando)$/))) return { acoes: lista(m[1]).map(product => ({ type: 'set_supply', product, status: 'out' as const })) };
  if ((m = t.match(/^(.+?)\s+(?:ta|esta)\s+acabando$/))) return { acoes: lista(m[1]).map(product => ({ type: 'set_supply', product, status: 'low' as const })) };
  if ((m = t.match(/^(?:tem|temos)\s+(.+?)\s+em casa$/)) || (m = t.match(/^(.+?)\s+tem em casa$/))) return { acoes: lista(m[1]).map(product => ({ type: 'set_supply', product, status: 'ok' as const })) };
  if (/ingredientes? .*lista|cardapio .*lista/.test(t)) return { acoes: [{ type: 'plan_to_list' }] };
  if ((m = t.match(/orcamento (?:de |para |pra )?r?\$?\s*(\d+(?:[.,]\d+)?)/))) return { acoes: [{ type: 'set_budget', value: Number(m[1].replace(',', '.')) }] };
  const dia = Object.keys(DIAS).sort((a, b) => b.length - a.length).find(k => new RegExp('\\b' + k + '\\b').test(t));
  const ref = Object.keys(REF).sort((a, b) => b.length - a.length).find(k => t.includes(k));
  if (dia && ref) {
    const r = allRecipes(data).map(r => ({ r, score: normalizeName(r.name).split(' ').filter(w => w.length > 2 && t.includes(w)).length })).sort((a, b) => b.score - a.score)[0];
    if (r && r.score > 0) return { acoes: [{ type: 'plan_meal', day: DIAS[dia], meal: REF[ref], recipe_id: r.r.id }] };
  }
  if (/ideia|sugest|sugere|o que (eu )?(faco|fazer|cozinh)|cardapio/.test(t)) {
    const op = allRecipes(data).filter(r => r.ingredients.every(i => (data.catalog || []).some((p: any) => normalizeName(p.name) === normalizeName(i.name)) || /^(sal|agua)$/i.test(i.name)));
    const pick = op.sort(() => Math.random() - 0.5).slice(0, 3).map(r => `• ${r.emoji} ${r.name} (${r.meal.toLowerCase()})`).join('\n');
    return { acoes: [], resposta: pick ? 'Algumas ideias com o que vocês compram:\n' + pick + '\n\nQuer que eu coloque alguma no cardápio? Ex.: “segunda no jantar ' + op[0]?.name.toLowerCase() + '”.' : 'Ainda não achei receitas completas com os produtos de vocês.' };
  }
  return { acoes: [] };
}
