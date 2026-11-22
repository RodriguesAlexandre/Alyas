// Itens da casa (utensílios, eletrônicos…): categorias, status, cotações e totais.
export const CATS_CASA = ['Cama, mesa e banho', 'Utensílios', 'Organização e limpeza', 'Eletrônicos', 'Móveis e decoração', 'Outros'] as const;
export const STATUS_CASA = [
  { v: 'temos', l: 'Temos' },
  { v: 'cotando', l: 'Cotando' },
  { v: 'queremos', l: 'Queremos' },
] as const;
export const COMODOS = ['Cozinha', 'Sala', 'Quarto', 'Banheiro', 'Área de serviço', 'Escritório', 'Varanda', 'Outro'];
export type Cotacao = { id: string; loja: string; preco: number; link?: string; data: string; obs?: string };
export type ItemCasa = {
  id: string; name: string; cat: typeof CATS_CASA[number] | 'Eletroeletrônicos'; status: 'temos' | 'cotando' | 'queremos';
  comodo?: string; marca?: string; modelo?: string; preco?: number | null; dataCompra?: string; loja?: string;
  note?: string; fotos: string[]; cotacoes: Cotacao[]; criado: string; por?: string;
  radar?: { data: string; decisao: string; titulo?: string; link?: string };
  medidas?: { l: number; p: number; a: number };
  movel?: string;
  prioridade?: 'alta' | 'media' | 'baixa'; meta?: number | null;
};
const n = (s: string) => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export function melhorCotacao(i: ItemCasa): Cotacao | null {
  return [...(i.cotacoes || [])].filter(c => c.preco > 0).sort((a, b) => a.preco - b.preco)[0] || null;
}
export function resumoCasa(itens: ItemCasa[]) {
  const temos = itens.filter(i => i.status === 'temos');
  const planos = itens.filter(i => i.status !== 'temos');
  return {
    quero: planos.length, temos: temos.length, cotando: itens.filter(i => i.status === 'cotando').length, queremos: itens.filter(i => i.status === 'queremos').length,
    valorTemos: temos.reduce((a, i) => a + (i.preco || 0), 0),
    previsto: planos.reduce((a, i) => a + (melhorCotacao(i)?.preco || i.preco || 0), 0),
  };
}
const PRI: Record<string, number> = { alta: 0, media: 1, baixa: 2 };
/** Quanto falta (ou sobra) entre a melhor cotação e a meta de preço. */
export function frenteMeta(i: ItemCasa) { const m = melhorCotacao(i); if (!m || !i.meta) return null; return { melhor: m.preco, meta: i.meta, diferenca: Math.round((m.preco - i.meta) * 100) / 100 }; }
export function filtrarCasa(itens: ItemCasa[], status: string, cat: string, busca: string) {
  const b = n(busca.trim());
  return itens.filter(i => (status === 'todos' || i.status === status || (status === 'quero' && i.status !== 'temos')) && (cat === 'Todas' || i.cat === cat) &&
    (!b || [i.name, i.marca, i.modelo, i.comodo, i.note, i.loja].some(x => n(x || '').includes(b))))
    .sort((a, b2) => (PRI[a.prioridade || 'media'] - PRI[b2.prioridade || 'media']) || a.name.localeCompare(b2.name, 'pt-BR'));
}
/** Marca como comprado usando uma cotação (ou o preço informado). */
export function comprei(i: ItemCasa, c?: Cotacao | null, hoje = new Date()): ItemCasa {
  return { ...i, status: 'temos', preco: c?.preco ?? i.preco ?? null, loja: c?.loja || i.loja, dataCompra: hoje.toISOString().slice(0, 10) };
}
/** Desfaz um "comprei": volta o item para a lista do que queremos comprar. */
export function desfazerCompra(i: ItemCasa): ItemCasa {
  const daCotacao = i.cotacoes.some(c => c.loja === i.loja && c.preco === i.preco);
  const { dataCompra, ...resto } = i;
  return { ...resto, status: i.cotacoes.length ? 'cotando' : 'queremos', ...(daCotacao ? { preco: null, loja: undefined } : {}) };
}
/** Ícone 3D que mais se parece com o item. */
export function iconeCasa(i: { name: string; cat: string }): string {
  const k = n(i.name);
  const M: [RegExp, string][] = [
    [/robo|aspirador/, 'robot'], [/tv|televis|smart tv/, 'television'], [/notebook|laptop/, 'laptop'], [/computador|monitor|desktop/, 'desktop-computer'],
    [/celular|iphone|smartphone|tablet|ipad/, 'mobile-phone'], [/fone|headset|airpods/, 'headphone'], [/caixa de som|alexa|echo|soundbar/, 'speaker-high-volume'],
    [/videogame|video game|playstation|ps5|xbox|switch|controle/, 'video-game'], [/camera|câmera/, 'camera'], [/lampada|luminaria|abajur|led/, 'light-bulb'],
    [/carregador|tomada|extensao|filtro de linha|cabo|adaptador/, 'electric-plug'], [/pilha|bateria/, 'battery'], [/relogio|smartwatch/, 'watch'],
    [/chaleira|bule|cafeteira|garrafa termica/, 'teapot'], [/panela|frigideira|airfryer|air fryer|fritadeira/, 'cooking'], [/geladeira|freezer|gelo/, 'ice'],
    [/prato|talher|faca|garfo|jogo de jantar|travessa/, 'fork-and-knife-with-plate'], [/colher|concha/, 'spoon'], [/tigela|bowl|pote|cumbuca/, 'bowl-with-spoon'],
    [/xicara|caneca|copo|taca/, 'hot-beverage'], [/vassoura|rodo|mop/, 'broom'], [/balde/, 'bucket'], [/cesto|organizador|caixa organizadora|cesta/, 'basket'],
    [/desentupidor/, 'plunger'], [/esponja/, 'sponge'], [/sofa|poltrona/, 'couch-and-lamp'], [/cama|colchao|travesseiro|lencol|edredom|cobertor|toalha|fronha|tapete de banho|roupao/, 'bed'], [/cadeira|banqueta|mesa/, 'chair'],
  ];
  for (const [re, s] of M) if (re.test(k)) return s;
  return ({ 'Utensílios': 'fork-and-knife-with-plate', 'Organização e limpeza': 'broom', 'Eletrônicos': 'laptop', 'Eletroeletrônicos': 'electric-plug', 'Cama, mesa e banho': 'bed', 'Móveis e decoração': 'couch-and-lamp' } as any)[i.cat] || 'package';
}

/** Tira o redirecionamento do Gmail (google.com/url?q=...) dos links que vêm do radar. */
export function limparLink(l?: string): string | undefined {
  if (!l) return l;
  try { const u = new URL(l); if (/(^|\.)google\.[a-z.]+$/.test(u.hostname) && u.pathname === '/url' && u.searchParams.get('q')) return u.searchParams.get('q')!; } catch {}
  return l;
}

/** Junta a antiga categoria "Eletroeletrônicos" em "Eletrônicos". */
export const normalizarCasa = (l: ItemCasa[] = []): ItemCasa[] => l.map(i => i.cat === 'Eletroeletrônicos' ? { ...i, cat: 'Eletrônicos' } : i);

/** Números do painel: por categoria e por cômodo, quanto já temos e quanto falta comprar. */
export function painelCasa(itens: ItemCasa[]) {
  const valor = (i: ItemCasa) => i.status === 'temos' ? (i.preco || 0) : (melhorCotacao(i)?.preco || i.preco || 0);
  const grupo = (chave: (i: ItemCasa) => string) => {
    const m = new Map<string, { nome: string; temos: number; comprar: number; nTemos: number; nComprar: number; semPreco: number }>();
    itens.forEach(i => {
      const k = chave(i); const g = m.get(k) || { nome: k, temos: 0, comprar: 0, nTemos: 0, nComprar: 0, semPreco: 0 };
      const v = valor(i); if (!v) g.semPreco++;
      if (i.status === 'temos') { g.temos += v; g.nTemos++; } else { g.comprar += v; g.nComprar++; }
      m.set(k, g);
    });
    return [...m.values()].sort((a, b) => (b.temos + b.comprar) - (a.temos + a.comprar) || (b.nTemos + b.nComprar) - (a.nTemos + a.nComprar));
  };
  const temos = itens.filter(i => i.status === 'temos').reduce((a, i) => a + valor(i), 0);
  const comprar = itens.filter(i => i.status !== 'temos').reduce((a, i) => a + valor(i), 0);
  return { temos, comprar, total: temos + comprar, porCategoria: grupo(i => i.cat === 'Eletroeletrônicos' ? 'Eletrônicos' : i.cat), porComodo: grupo(i => i.comodo || 'Sem cômodo'), semPreco: itens.filter(i => !valor(i)).length };
}
