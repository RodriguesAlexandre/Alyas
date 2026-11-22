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
