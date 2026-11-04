// Ícones de produtos: embalagens desenhadas (lata, vidro, pacote, garrafa…) para o que se compra embalado
// e ilustrações 3D (Fluent Emoji, licença MIT) para frutas, verduras, carnes etc.
const n = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// ---------- desenhos de embalagens (viewBox 48x48) ----------
const sombra = '<ellipse cx="24" cy="44" rx="15" ry="2.6" fill="#1f3d30" opacity=".13"/>';
const brilho = (x: number, y: number, h: number) => `<rect x="${x}" y="${y}" width="2.4" height="${h}" rx="1.2" fill="#fff" opacity=".45"/>`;

function lata(rotulo: string, rotulo2: string, desenho: string) {
  return `${sombra}<defs><linearGradient id="lt" x1="0" x2="1"><stop offset="0" stop-color="#9aa3a8"/><stop offset=".45" stop-color="#eef2f4"/><stop offset="1" stop-color="#8b949a"/></linearGradient></defs>
  <rect x="11" y="9" width="26" height="33" rx="3" fill="url(#lt)"/><ellipse cx="24" cy="9.5" rx="13" ry="3.2" fill="#d5dade" stroke="#9aa3a8" stroke-width=".8"/><ellipse cx="24" cy="9.5" rx="10" ry="2.2" fill="#c3c9cd"/>
  <rect x="11" y="15" width="26" height="21" fill="${rotulo}"/><rect x="11" y="32" width="26" height="4" fill="${rotulo2}"/>${desenho}${brilho(14, 16, 18)}`;
}
function sardinha() {
  return `${sombra}<defs><linearGradient id="sd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef2f4"/><stop offset="1" stop-color="#9aa3a8"/></linearGradient></defs>
  <rect x="5" y="15" width="38" height="23" rx="8" fill="#8b949a"/><rect x="5" y="13" width="38" height="23" rx="8" fill="url(#sd)"/>
  <rect x="9" y="16.5" width="30" height="16" rx="5" fill="#1d5fa8"/><rect x="9" y="27.5" width="30" height="5" rx="2" fill="#d23b2f"/>
  <path d="M15 23.5c3-3.6 8.5-4.4 12.6-1.4l3.6-2.5-.9 4 .9 4-3.6-2.5c-4.1 3-9.6 2.2-12.6-1.6z" fill="#e8eef2"/><circle cx="17.6" cy="23.2" r=".9" fill="#1d5fa8"/>
  <circle cx="11" cy="15.6" r="3.4" fill="none" stroke="#c3c9cd" stroke-width="1.6"/>`;
}
function vidro(tampa: string, conteudo: string, rotulo: string) {
  return `${sombra}<rect x="13" y="6" width="22" height="7" rx="2" fill="${tampa}"/><rect x="13" y="6" width="22" height="2.4" rx="1.2" fill="#fff" opacity=".25"/>
  <path d="M12 14c0-1.2 1-2 2.2-2h19.6c1.2 0 2.2.8 2.2 2v25c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4z" fill="#dcefe9" opacity=".9"/>${conteudo}
  <rect x="12" y="22" width="24" height="11" fill="${rotulo}"/>${brilho(15, 15, 24)}`;
}
const azeitonas = '<g fill="#6f8a2a">' + [[17, 17], [24, 16.5], [31, 17], [18, 37], [25, 38], [31, 36.5], [21, 18.5], [28, 19]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="3.4" ry="2.6"/>`).join('') + '</g><g fill="#b8cc6a">' + [[16.4, 16.2], [23.4, 15.7], [30.4, 16.2], [17.4, 36.2], [24.4, 37.2]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9"/>`).join('') + '</g>';
function pacote(cor: string, cor2: string, janela: string) {
  return `${sombra}<path d="M10 9h28l-1.5 4 1.5 1v26c0 1.7-1.3 3-3 3H13c-1.7 0-3-1.3-3-3V14l1.5-1z" fill="${cor}"/>
  <path d="M10 9h28v3H10z" fill="${cor2}"/><path d="M11 9.6h2m3 0h2m3 0h2m3 0h2m3 0h2m3 0h2" stroke="#fff" stroke-width=".8" opacity=".5"/>
  <rect x="14" y="17" width="20" height="15" rx="3" fill="#fffbe9"/>${janela}<rect x="10" y="35" width="28" height="4" fill="${cor2}"/>${brilho(12.5, 15, 22)}`;
}
const espaguete = '<g stroke="#e9b64a" stroke-width="1.3" stroke-linecap="round">' + [17, 19.5, 22, 24.5, 27, 29.5].map(y => `<path d="M15.5 ${y}h17"/>`).join('') + '</g>';
const graos = (cor: string, rx = 1.6, ry = 1) => `<g fill="${cor}">` + Array.from({ length: 16 }, (_, i) => `<ellipse cx="${16.5 + (i % 5) * 3.8 + (i % 2)}" cy="${19.5 + Math.floor(i / 5) * 3.6}" rx="${rx}" ry="${ry}" transform="rotate(${(i * 37) % 60 - 30} ${16.5 + (i % 5) * 3.8 + (i % 2)} ${19.5 + Math.floor(i / 5) * 3.6})"/>`).join('') + '</g>';
function garrafa(vidro: string, tampa: string, rotulo: string, extra = '', alta = true) {
  const y0 = alta ? 5 : 11;
  return `${sombra}<rect x="20" y="${y0}" width="8" height="5" rx="1.4" fill="${tampa}"/><path d="M21 ${y0 + 4}h6v4c0 1.5 6 3 6 7v${alta ? 20 : 14}c0 2.2-1.8 4-4 4H19c-2.2 0-4-1.8-4-4V${y0 + 15}c0-4 6-5.5 6-7z" fill="${vidro}"/>
  <rect x="15" y="${y0 + 18}" width="18" height="${alta ? 12 : 10}" fill="${rotulo}"/>${extra}${brilho(17.5, y0 + 15, 20 - (alta ? 0 : 4))}`;
}
function caixinha(cor: string, faixa: string, alta: boolean, desenho = '') {
  const y = alta ? 6 : 16;
  return `${sombra}<path d="M14 ${y + 4}l10-4 10 4v${42 - y - 6}H14z" fill="${cor}"/><path d="M14 ${y + 4}l10-4 10 4-10 3z" fill="#fff" opacity=".35"/>
  <rect x="14" y="${alta ? 22 : 26}" width="20" height="${alta ? 10 : 8}" fill="${faixa}"/>${desenho}<path d="M24 ${y + 7}V42" stroke="#000" opacity=".08"/>`;
}
function salame() {
  return `${sombra}<g transform="rotate(-28 24 24)"><rect x="5" y="16" width="34" height="15" rx="7.5" fill="#8e2a22"/><rect x="5" y="16" width="34" height="5" rx="2.5" fill="#fff" opacity=".12"/>
  <path d="M13 16v15M21 16v15M29 16v15" stroke="#f4ead6" stroke-width="1.2" opacity=".85"/></g>
  <ellipse cx="35" cy="34" rx="8.5" ry="7.5" fill="#f1d9c9"/><ellipse cx="35" cy="34" rx="7.4" ry="6.5" fill="#c4473b"/>
  <g fill="#f6e6dc">${[[32, 31], [37, 32], [34, 36], [39, 36], [31.5, 35.5], [36, 29.8]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.05"/>`).join('')}</g>`;
}
function torradas() {
  return `${sombra}<rect x="7" y="13" width="34" height="26" rx="4" fill="#c9302c"/><rect x="7" y="13" width="34" height="5" rx="2" fill="#f2c94c"/>
  <g fill="#d99a4e" stroke="#a8692e" stroke-width=".8">${[11, 18, 25, 32].map(x => `<rect x="${x}" y="20.5" width="6" height="15" rx="2.5"/>`).join('')}</g>${brilho(9, 19, 17)}`;
}
function cafe() {
  return `${sombra}<path d="M13 8h22l1 34H12z" fill="#5b2d16"/><path d="M13 8h22l.2 4H12.8z" fill="#3e1e0e"/><rect x="12.6" y="20" width="22.8" height="12" fill="#c8322a"/>
  <ellipse cx="24" cy="26" rx="4" ry="3" fill="#5b2d16"/><path d="M24 23.2c-1 1.6-1 4 0 5.6" stroke="#c8322a" stroke-width=".9" fill="none"/>${brilho(14.5, 10, 28)}`;
}
function potinho(tampa: string, corpo: string, rotulo: string) {
  return `${sombra}<rect x="14" y="10" width="20" height="6" rx="2" fill="${tampa}"/><rect x="13" y="15" width="22" height="27" rx="4" fill="${corpo}"/>
  <rect x="13" y="22" width="22" height="12" fill="${rotulo}"/>${brilho(15.5, 17, 22)}`;
}
function bisnaga(cor: string, tampa: string, rotulo: string) {
  return `${sombra}<path d="M21 5h6l1 6h-8z" fill="${tampa}"/><path d="M18 11h12c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H18c-2.2 0-4-1.8-4-4V15c0-2.2 1.8-4 4-4z" fill="${cor}"/>
  <rect x="14" y="22" width="20" height="10" fill="${rotulo}"/>${brilho(16.5, 14, 24)}`;
}
const tomatinho = (x: number, y: number, r = 3.6) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#e2463a"/><path d="M${x - 1.8} ${y - r + .4}l1.8 1.2 1.8-1.2-1.8-.8z" fill="#3f8a3a"/>`;
const milhoGraos = '<g fill="#f6cf3d">' + Array.from({ length: 12 }, (_, i) => `<circle cx="${16 + (i % 4) * 5.3}" cy="${19 + Math.floor(i / 4) * 4.2}" r="1.7"/>`).join('') + '</g>';
const peixeRotulo = '<path d="M16 25c2.7-3 7.5-3.6 11-1.1l3.2-2.1-.8 3.4.8 3.4-3.2-2.2c-3.5 2.5-8.3 1.8-11-1.4z" fill="#fff"/>';

const SVG: [RegExp, () => string][] = [
  [/sardinha/, sardinha],
  [/atum/, () => lata('#f0b429', '#1d5fa8', peixeRotulo)],
  [/milho|ervilha|seleta/, () => lata('#2f8f46', '#f2c94c', milhoGraos)],
  [/massa de tomate|extrato|molho de tomate|polpa/, () => caixinha('#d23b2f', '#fff3e6', false, tomatinho(24, 30))],
  [/creme de leite/, () => caixinha('#e9f1fb', '#2a62b8', false, '<path d="M18 30c2-2 4 0 6-1.5s4-.5 6 0" stroke="#fff" stroke-width="1.4" fill="none"/>')],
  [/leite condensado/, () => lata('#2a62b8', '#e9f1fb', '<rect x="15" y="20" width="18" height="7" rx="3" fill="#fff"/>')],
  [/^leite|leite integral|leite desnatado/, () => caixinha('#f4f8fd', '#2a62b8', true, '<path d="M18 27c2-1.6 4 0 6-1.2s4-.4 6 0" stroke="#fff" stroke-width="1.4" fill="none"/>')],
  [/azeitona|alcaparra|picles|palmito/, () => vidro('#3b6b2c', azeitonas, '#f7f3e3')],
  [/maionese/, () => potinho('#1d5fa8', '#fbf8ef', '#1d5fa8') + '<rect x="13" y="26" width="22" height="3" fill="#f2c94c"/>'],
  [/requeijao/, () => potinho('#2a62b8', '#fbf8ef', '#e9f1fb') + '<text x="24" y="30.5" font-size="6" text-anchor="middle" font-family="Arial" font-weight="700" fill="#2a62b8">R</text>'],
  [/doce de leite/, () => vidro('#8a4b22', '<rect x="12.6" y="16" width="22.8" height="26" rx="3" fill="#b9733a" opacity=".85"/>', '#f7e7cf')],
  [/ketchup/, () => bisnaga('#c9302c', '#f4f4f4', '#fff3e6') + tomatinho(24, 27, 3)],
  [/mostarda/, () => bisnaga('#e7b416', '#f4f4f4', '#fff3e6')],
  [/molho de pimenta|tabasco/, () => garrafa('#b5221a', '#2d2d2d', '#f6efe1', '<path d="M22 24c3-1 5 1 5 3s-2 3-5 1" fill="#c9302c"/>', false)],
  [/molho shoyu|shoyu|molho ingles/, () => garrafa('#3b1c10', '#c9302c', '#f6efe1', '', false)],
  [/azeite/, () => garrafa('#355e1e', '#c9a227', '#f2e6b8', '<ellipse cx="24" cy="29" rx="2.4" ry="3.2" fill="#6f8a2a"/>')],
  [/oleo/, () => garrafa('#f2c94c', '#e0a10b', '#fff7d6')],
  [/vinagre/, () => garrafa('#c96f6f', '#f4f4f4', '#fff3e6')],
  [/salam|salaminho|linguica|calabresa/, salame],
  [/macarrao|espaguete|penne|parafuso|lasanha|massa(?! de tomate)/, () => pacote('#1d5fa8', '#f2c94c', espaguete)],
  [/arroz/, () => pacote('#f4f1e8', '#d23b2f', graos('#fffef7', 1.7, .9) + '<rect x="14" y="17" width="20" height="15" rx="3" fill="none" stroke="#e6dfc8"/>')],
  [/feijao/, () => pacote('#f4f1e8', '#7a3b1d', graos('#6b2f1c', 1.7, 1.1))],
  [/acucar/, () => pacote('#ffffff', '#2a62b8', graos('#f2efe6', 1, 1))],
  [/farofa|farinha|fuba/, () => pacote('#f2c94c', '#c9302c', graos('#e3b36a', 1.1, 1.1))],
  [/torrada|biscoito|bolacha/, torradas],
  [/cafe(?!.*coador)/, cafe],
  [/lemon pepper|tempero|oregano|paprica|chimichurri|cominho|colorau|louro/, () => potinho('#c9302c', '#e7dcc4', '#fbf8ef') + '<g fill="#7d8a3a">' + [[19, 38], [23, 37], [28, 38.5], [31, 37]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9"/>`).join('') + '</g>'],
  [/pasta de dente|creme dental/, () => `${sombra}<g transform="rotate(-18 24 26)"><path d="M6 18h4l1 2v12l-1 2H6z" fill="#cfd6de"/><path d="M10 19c0-1 1-1.6 2-1.6h20l3 3.6v9.8l-3 3.6H12c-1 0-2-.6-2-1.6z" fill="#f4f7fb"/><path d="M10 19c0-1 1-1.6 2-1.6h20l3 3.6H10z" fill="#2a62b8"/><path d="M10 31h25l-3 3.6H12c-1 0-2-.6-2-1.6z" fill="#2a62b8"/><path d="M14 26h16" stroke="#e2463a" stroke-width="2.2" stroke-linecap="round"/><rect x="35" y="21.5" width="6" height="9" rx="1.6" fill="#e2463a"/></g>`],
  [/pasta de amendoim|amendoim/, () => potinho('#c9302c', '#c68a4a', '#fbf3df') + '<g fill="#a8692e">' + [[20, 28], [24, 27.4], [28, 28]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="1.9" ry="1.3"/>`).join('') + '</g>'],
  [/aveia/, () => pacote('#f4e9cf', '#7a9a3a', graos('#e7d3a2', 1.8, 1.2))],
  [/granola/, () => pacote('#f2c94c', '#8a4b22', graos('#b9733a', 1.5, 1.2) + '<g fill="#c4473b">' + [[18, 22], [27, 26], [22, 29]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.1"/>`).join('') + '</g>')],
  [/castanha|nozes|mix de/, () => pacote('#5b2d16', '#c9a227', graos('#c68a4a', 2, 1.4))],
  [/iogurte/, () => potinho('#f4f4f4', '#fbfdff', '#e9f1fb') + '<path d="M18 28c2-1.6 4 0 6-1.2s4-.4 6 0" stroke="#2a62b8" stroke-width="1.4" fill="none"/>'],
  [/peito de peru|presunto/, () => `${sombra}<ellipse cx="22" cy="30" rx="15" ry="8" fill="#e9a99a"/><ellipse cx="22" cy="28" rx="15" ry="8" fill="#f3c2b5"/><ellipse cx="27" cy="24" rx="13" ry="7" fill="#e9a99a"/><ellipse cx="27" cy="22.5" rx="13" ry="7" fill="#f6d0c5"/><path d="M18 22c4-2 10-2 15 0" stroke="#fff" stroke-width="1" opacity=".6" fill="none"/>`],
  [/detergente/, () => bisnaga('#f2c94c', '#2f8f46', '#fff8d9')],
  [/amaciante/, () => garrafa('#7ab8e8', '#1d5fa8', '#e9f4fd')],
  [/agua sanitaria|desinfetante|sanitari|limpador/, () => garrafa('#f4f4f4', '#2f8f46', '#2f8f46')],
];

// ---------- ilustrações 3D (Fluent Emoji) ----------
const FOTO: [RegExp, string][] = [
  [/camarao/, 'shrimp'], [/peixe|tilapia|salmao/, 'fish'], [/frango|coxa|sobrecoxa|asa de/, 'poultry-leg'], [/bacon/, 'bacon'],
  [/salsicha|presunto|mortadela|peito de peru/, 'hot-dog'], [/costela|cupim|pernil/, 'meat-on-bone'],
  [/picanha|contra|file|patinho|acem|cha de|alcatra|maminha|musculo|carne|bife|moido|hamburguer/, 'cut-of-meat'], [/ovo/, 'egg'],
  [/queijo|mussarela|parmesao/, 'cheese-wedge'], [/manteiga|margarina/, 'butter'], [/iogurte|leite/, 'glass-of-milk'],
  [/pao|baguete|bisnaguinha/, 'baguette-bread'], [/batata palha|batata frita|salgadinho|chips/, 'french-fries'], [/pipoca/, 'popcorn'],
  [/batata/, 'potato'], [/cebola/, 'onion'], [/alho/, 'garlic'], [/tomate/, 'tomato'], [/brocolis/, 'broccoli'],
  [/couve|alface|rucula|espinafre|salada|repolho|agriao/, 'leafy-green'], [/salsa|cheiro|coentro|cebolinha|manjericao|hortela|erva/, 'herb'],
  [/cenoura/, 'carrot'], [/pepino|abobrinha/, 'cucumber'], [/pimentao/, 'bell-pepper'], [/pimenta/, 'hot-pepper'],
  [/limao/, 'lemon'], [/banana/, 'banana'], [/morango/, 'strawberry'], [/mamao|melao/, 'melon'], [/maca/, 'red-apple'],
  [/laranja|tangerina|mexerica/, 'tangerine'], [/uva/, 'grapes'], [/abacate/, 'avocado'], [/abacaxi/, 'pineapple'], [/melancia/, 'watermelon'], [/manga/, 'mango'],
  [/mel/, 'honey-pot'], [/sal\b|sal grosso/, 'salt'], [/nutella|chocolate|bombom/, 'chocolate-bar'], [/chiclete|bala|pirulito/, 'candy'],
  [/cha\b|mate/, 'teacup-without-handle'], [/coador/, 'hot-beverage'], [/cerveja|heineken|chopp/, 'beer-mug'], [/vinho|espumante/, 'bottle-with-popping-cork'],
  [/agua/, 'droplet'], [/suco/, 'beverage-box'], [/refri|coca|guarana|schweppes|red bull|energetico|tonica/, 'cup-with-straw'],
  [/papel higienico|papel toalha|guardanapo/, 'roll-of-paper'], [/sabonete/, 'soap'], [/shampoo|condicionador|creme dental|desodorante|hidratante/, 'lotion-bottle'],
  [/sabao/, 'bubbles'], [/esponja/, 'sponge'], [/saco de lixo|lixo/, 'wastebasket'],
];
const CAT: Record<string, string> = { Hortifruti: 'leafy-green', Proteínas: 'cut-of-meat', Laticínios: 'cheese-wedge', Mercearia: 'canned-food', Bebidas: 'cup-with-straw', Limpeza: 'lotion-bottle', Higiene: 'soap', Utilidades: 'toolbox', Outros: 'shopping-bags' };

export function iconeDe(nome: string, cat = 'Outros'): { svg?: string; img?: string } {
  const k = n(nome || '');
  for (const [re, f] of SVG) if (re.test(k)) return { svg: f() };
  for (const [re, s] of FOTO) if (re.test(k)) return { img: s };
  return { img: CAT[cat] || 'shopping-bags' };
}

export default function ProdutoIcone({ nome, cat }: { nome: string; cat?: string }) {
  const i = iconeDe(nome, cat);
  return <span className="product-icon" aria-hidden="true">{i.svg ? <svg viewBox="0 0 48 48" dangerouslySetInnerHTML={{ __html: i.svg }} /> : <img src={'produtos/' + i.img + '.webp'} alt="" loading="lazy" />}</span>;
}
