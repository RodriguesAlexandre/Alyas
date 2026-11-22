// Onde cada compra é feita: supermercado, sacolão, açougue ou outros (essência, incenso…).
export const LUGARES = ['Supermercado', 'Sacolão', 'Açougue', 'Outros'] as const;
export type Lugar = typeof LUGARES[number];
export const CAT_CASA_CONSUMO = 'Casa e bem-estar';
/** Lugar de um item: o que foi escolhido, senão "Outros" para itens da casa e "Supermercado" para o resto. */
export function lugarDe(i: { lugar?: string; cat?: string }, compra?: { lugar?: string }): Lugar {
  const l = i.lugar || compra?.lugar;
  if (l && (LUGARES as readonly string[]).includes(l)) return l as Lugar;
  return i.cat === CAT_CASA_CONSUMO ? 'Outros' : 'Supermercado';
}

const sem = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
/** Adivinha o lugar pela loja da nota e pelos itens: açougue, sacolão ou supermercado. */
export function lugarDaNota(loja = '', itens: { cat?: string }[] = []): Lugar {
  const l = sem(loja);
  if (/acougue|casa de carne|carnes|frigorifico|boutique de carne|churrasc/.test(l)) return 'Açougue';
  if (/sacolao|hortifruti|horti|verdurao|feira|quitanda|frutas|ceasa/.test(l)) return 'Sacolão';
  if (/supermerc|mercado|atacad|hiper|\bbh\b|epa|abc|verdemar|carrefour|assai|super nosso|mart|bahamas|dia\b/.test(l)) return 'Supermercado';
  if (itens.length) {
    const c = (k: string) => itens.filter(i => i.cat === k).length / itens.length;
    if (c('Proteínas') >= .7) return 'Açougue';
    if (c('Hortifruti') >= .7) return 'Sacolão';
    if (c(CAT_CASA_CONSUMO) >= .7) return 'Outros';
  }
  return 'Supermercado';
}
export const ehCasaConsumo = (nome: string) => /essencia|incenso|vela aromat|aromatizador|difusor|home spray|agua perfumada|sache perfum/.test(sem(nome));
