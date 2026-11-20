// Uma cor por categoria (listas, despensa, gastos e casa).
export const CORES_CAT: Record<string, string> = {
  Hortifruti: '#7d9c5a', Proteínas: '#d9714a', Laticínios: '#e8b84f', Mercearia: '#8a6d47', Bebidas: '#5b8fa8', Limpeza: '#9b7bb5', Higiene: '#c97a9a', Utilidades: '#8a8f80', Outros: '#b9b29f',
  'Cama, mesa e banho': '#7b9ac9', Utensílios: '#c99a5b', 'Organização e limpeza': '#9b7bb5', Eletrônicos: '#5b8fa8', Eletroeletrônicos: '#4f8f86', 'Móveis e decoração': '#b07a5a',
};
export const corCat = (cat: string) => CORES_CAT[cat] || '#b9b29f';
