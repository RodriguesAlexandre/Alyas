// Foto real como ícone: quando um produto do catálogo tem foto, ela aparece no lugar do desenho.
const n = (s: string) => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
let mapa = new Map<string, string>();
let assinatura = '';
export function definirFotosProdutos(catalog: any[] = []) {
  const com = catalog.filter(p => p.foto);
  const a = com.map(p => p.id + p.foto).join('|');
  if (a === assinatura) return;
  assinatura = a; mapa = new Map();
  for (const p of com) { mapa.set(n(p.name), p.foto); for (const al of p.aliases || []) if (!String(al).startsWith('ean:')) mapa.set(n(al), p.foto); }
}
export const fotoDoProduto = (nome: string) => mapa.get(n(nome));
