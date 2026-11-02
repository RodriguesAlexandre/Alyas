// Ícone (emoji) parecido com o produto real, pelo nome; se não reconhecer, usa a categoria.
const n = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const MAPA: [RegExp, string][] = [
  [/papel higienico|papel toalha|guardanapo/, '🧻'], [/sabonete|shampoo|condicionador|creme dental|pasta de dente|desodorante/, '🧼'],
  [/detergente|desinfetante|sanitari|amaciante|sabao|limpador|veja/, '🧴'], [/esponja/, '🧽'], [/saco de lixo|lixo/, '🗑️'],
  [/camarao/, '🦐'], [/sardinha|atum|peixe|tilapia|salmao/, '🐟'], [/frango|coxa|sobrecoxa|asa/, '🍗'],
  [/bacon/, '🥓'], [/salam|presunto|mortadela|peito de peru|linguica|salsicha/, '🥓'],
  [/hamburguer|carne moida|moido/, '🍔'], [/picanha|contra|file|patinho|acem|cha de|alcatra|maminha|musculo|costela|carne|bife/, '🥩'],
  [/ovo/, '🥚'], [/queijo|mussarela|muçarela|parmesao|requeijao/, '🧀'], [/manteiga|margarina/, '🧈'],
  [/doce de leite/, '🍯'], [/leite|creme de leite|iogurte/, '🥛'], [/macarrao|espaguete|massa(?! de tomate)|lasanha|penne/, '🍝'],
  [/arroz/, '🍚'], [/feijao|lentilha|grao de bico/, '🫘'], [/torrada|biscoito|bolacha|cracker/, '🍘'],
  [/pao/, '🍞'], [/farofa|farinha|fuba|aveia/, '🌾'], [/batata palha|batata frita|salgadinho|chips/, '🍟'],
  [/pipoca/, '🍿'], [/batata/, '🥔'], [/cebola/, '🧅'], [/alho/, '🧄'], [/tomate|massa de tomate|molho de tomate|ketchup/, '🍅'],
  [/brocolis/, '🥦'], [/couve|alface|rucula|espinafre|salada|repolho|agriao/, '🥬'], [/salsa|cheiro|coentro|cebolinha|manjericao|louro|hortela|erva/, '🌿'],
  [/milho/, '🌽'], [/cenoura/, '🥕'], [/pepino|abobrinha/, '🥒'], [/pimentao|pimenta/, '🌶️'], [/azeitona|azeite/, '🫒'],
  [/limao/, '🍋'], [/banana/, '🍌'], [/morango/, '🍓'], [/mamao|papaya/, '🍈'], [/maca/, '🍎'], [/laranja|tangerina/, '🍊'],
  [/uva|vinho/, '🍇'], [/abacate/, '🥑'], [/abacaxi/, '🍍'], [/melancia/, '🍉'], [/manga/, '🥭'],
  [/mel/, '🍯'], [/acucar|adocante|sal\b|sal grosso|lemon pepper|tempero|chimichurri|oregano|paprica/, '🧂'],
  [/maionese|mostarda/, '🥫'], [/nutella|chocolate|doce|brigadeiro/, '🍫'], [/chiclete|bala/, '🍬'],
  [/cafe|coador/, '☕'], [/cha\b|mate/, '🍵'], [/cerveja|heineken|chopp/, '🍺'], [/agua/, '💧'],
  [/refri|coca|guarana|schweppes|suco|red bull|energetico/, '🥤'], [/oleo/, '🫗'],
];
const CAT: Record<string, string> = { Hortifruti: '🥬', Proteínas: '🥩', Laticínios: '🧀', Mercearia: '🥫', Bebidas: '🥤', Limpeza: '🧴', Higiene: '🧼', Utilidades: '🧰', Outros: '🛍️' };
export function icone(nome: string, cat = 'Outros'): string {
  const k = n(nome || '');
  for (const [re, e] of MAPA) if (re.test(k)) return e;
  return CAT[cat] || '🛍️';
}
