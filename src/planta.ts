// Planta do apartamento (espelho da planta tipo do Terra Nova Aspen, 47 m²), com os móveis reais.
// Coordenadas no mesmo sistema da planta baixa aprovada: 40 unidades = 1 m, origem no canto da cozinha.
export const ESCALA = 40, OX = 50, OY = 20;
export const m = (px: number) => px / ESCALA;
export const mx = (x: number) => (x - OX) / ESCALA, mz = (y: number) => (y - OY) / ESCALA;

export type Comodo = { id: string; nome: string; comodos: string[]; x: number; y: number; w: number; h: number };
export const COMODOS_PLANTA: Comodo[] = [
  { id: 'cozinha', nome: 'Cozinha', comodos: ['Cozinha'], x: 50, y: 20, w: 118, h: 70 },
  { id: 'servico', nome: 'Serviço', comodos: ['Área de serviço'], x: 168, y: 20, w: 30, h: 80 },
  { id: 'jantar', nome: 'Jantar', comodos: [], x: 50, y: 100, w: 118, h: 68 },
  { id: 'sala', nome: 'Sala', comodos: ['Sala', 'Outro'], x: 50, y: 168, w: 134, h: 136 },
  { id: 'banho', nome: 'Banheiro', comodos: ['Banheiro'], x: 168, y: 100, w: 53, h: 99 },
  { id: 'escritorio', nome: 'Escritório', comodos: ['Escritório'], x: 221, y: 110, w: 107, h: 122 },
  { id: 'casal', nome: 'Quarto do casal', comodos: ['Quarto'], x: 196, y: 232, w: 132, h: 114 },
  { id: 'varanda', nome: 'Varanda', comodos: ['Varanda'], x: 50, y: 304, w: 134, h: 42 },
];
export const comodoDoItem = (c?: string) => COMODOS_PLANTA.find(r => c && r.comodos.includes(c));

// Contorno do piso interno e da varanda
export const PISO: [number, number][] = [[50, 20], [198, 20], [198, 110], [328, 110], [328, 346], [184, 346], [184, 304], [50, 304]];
export const PISO_VARANDA: [number, number][] = [[50, 304], [184, 304], [184, 346], [50, 346]];

// Paredes (polilinhas). Os vãos de porta ficam entre elas.
export const PAREDES: [number, number][][] = [
  [[50, 126], [50, 20], [198, 20], [198, 30]], [[198, 70], [198, 110], [255, 110]], [[300, 110], [328, 110], [328, 346], [300, 346]],
  [[240, 346], [196, 346]], [[50, 160], [50, 304]], [[168, 100], [198, 100]], [[168, 100], [168, 199], [194, 199]],
  [[216, 199], [221, 199]], [[221, 110], [221, 202]], [[228, 232], [258, 232]], [[200, 232], [184, 232], [184, 304], [150, 304]],
  [[60, 304], [50, 304]], [[328, 232], [258, 232]], [[50, 304], [50, 346]],
];
export const BLOCO: [number, number, number, number] = [184, 232, 12, 114]; // parede grossa da TV
export const JANELAS: [number, number][][] = [[[198, 30], [198, 70]], [[255, 110], [300, 110]], [[240, 346], [300, 346]]];
export const PORTA_VIDRO: [number, number][] = [[60, 304], [150, 304]];
export const GUARDA_CORPO: [number, number][] = [[50, 346], [184, 346]];

export type Face = '+z' | '-z' | '+x' | '-x';
export type Movel = { id: string; nome: string; x: number; y: number; w: number; d: number; h: number; base?: number; face?: Face };
// Pegada de cada objeto na planta (o desenho 3D detalhado de cada um fica em casa3d-cena.ts)
export const MOVEIS: Movel[] = [
  { id: 'geladeira', nome: 'Geladeira', x: 52, y: 22, w: 26, d: 26, h: 1.8 },
  { id: 'armario-cozinha', nome: 'Armário da cozinha', x: 78, y: 22, w: 20, d: 18, h: 0.9 },
  { id: 'armario-cozinha', nome: 'Armário da cozinha', x: 122, y: 22, w: 46, d: 18, h: 0.9 },
  { id: 'fogao', nome: 'Fogão', x: 98, y: 22, w: 24, d: 20, h: 0.9 },
  { id: 'microondas', nome: 'Micro-ondas', x: 128, y: 23, w: 18, d: 13, h: 0.3, base: 0.92 },
  { id: 'maquina', nome: 'Máquina de lavar', x: 170, y: 24, w: 24, d: 24, h: 0.95 },
  { id: 'tanque', nome: 'Tanque', x: 178, y: 74, w: 18, d: 20, h: 0.85, face: '-x' },
  { id: 'varal-teto', nome: 'Varal de teto', x: 171, y: 46, w: 25, d: 26, h: 0.05, base: 2.2 },
  { id: 'balcao', nome: 'Bancada da pia e balcão', x: 74, y: 74, w: 94, d: 26, h: 1.0 },
  { id: 'pia-cozinha', nome: 'Pia da cozinha', x: 104, y: 76, w: 34, d: 16, h: 0.35, base: 0.92 },
  { id: 'escorredor', nome: 'Escorredor de louça', x: 144, y: 76, w: 22, d: 14, h: 0.35, base: 0.92 },
  { id: 'filtro', nome: 'Filtro de barro', x: 140, y: 94, w: 10, d: 10, h: 0.48, base: 1.46 },
  { id: 'mesa-jantar', nome: 'Mesa de vidro', x: 128, y: 126, w: 34, d: 40, h: 0.75 },
  { id: 'cadeiras', nome: 'Cadeiras', x: 116, y: 132, w: 10, d: 10, h: 0.9, face: '+x' },
  { id: 'cadeiras', nome: 'Cadeiras', x: 116, y: 151, w: 10, d: 10, h: 0.9, face: '+x' },
  { id: 'cadeiras', nome: 'Cadeiras', x: 140, y: 114, w: 10, d: 10, h: 0.9, face: '+z' },
  { id: 'cadeiras', nome: 'Cadeiras', x: 140, y: 168, w: 10, d: 10, h: 0.9, face: '-z' },
  { id: 'espada', nome: 'Espada-de-são-jorge', x: 154, y: 182, w: 12, d: 12, h: 1.1 },
  { id: 'sofa', nome: 'Sofá', x: 52, y: 166, w: 68, d: 134, h: 0.85 },
  { id: 'tapete-sala', nome: 'Tapete da sala', x: 82, y: 206, w: 78, d: 62, h: 0.02 },
  { id: 'mesa-centro', nome: 'Mesa de centro', x: 100, y: 226, w: 34, d: 22, h: 0.42 },
  { id: 'estante', nome: 'Estante azul e TV', x: 170, y: 238, w: 14, d: 64, h: 2.2, face: '-x' },
  { id: 'zamioculca', nome: 'Zamioculca', x: 171, y: 246, w: 12, d: 14, h: 0.95, base: 0.5 },
  { id: 'cortina-sala', nome: 'Cortina da sala', x: 132, y: 299, w: 22, d: 4, h: 2.3 },
  { id: 'quadro-sala', nome: 'Quadro da sala', x: 51, y: 220, w: 2, d: 30, h: 1.0, base: 1.15, face: '+x' },
  { id: 'box', nome: 'Box do banheiro', x: 170, y: 101, w: 50, d: 36, h: 1.95 },
  { id: 'vaso', nome: 'Vaso sanitário', x: 169, y: 140, w: 18, d: 17, h: 0.75, face: '+x' },
  { id: 'pia-banheiro', nome: 'Pia do banheiro', x: 169, y: 166, w: 16, d: 24, h: 0.85, face: '+x' },
  { id: 'mesa-pc', nome: 'Mesa do PC', x: 223, y: 118, w: 24, d: 72, h: 0.75, face: '+x' },
  { id: 'cadeira-pc', nome: 'Cadeira ergonômica', x: 248, y: 143, w: 18, d: 18, h: 1.25, face: '-x' },
  { id: 'puff', nome: 'Puff', x: 300, y: 172, w: 20, d: 20, h: 0.42 },
  { id: 'quadro-branco', nome: 'Quadro branco', x: 324, y: 126, w: 3, d: 54, h: 0.9, base: 0.6, face: '-x' },
  { id: 'guarda-roupa-escritorio', nome: 'Guarda-roupa do escritório', x: 258, y: 207, w: 68, d: 24, h: 2.3, face: '-z' },
  { id: 'cama', nome: 'Cama', x: 251, y: 258, w: 75, d: 60, h: 0.6, face: '-x' },
  { id: 'tapete-quarto', nome: 'Tapete do quarto', x: 236, y: 268, w: 18, d: 40, h: 0.02 },
  { id: 'criado', nome: 'Criado-mudo', x: 314, y: 245, w: 13, d: 11, h: 0.5, face: '-x' },
  { id: 'criado', nome: 'Criado-mudo', x: 314, y: 320, w: 13, d: 11, h: 0.5, face: '-x' },
  { id: 'guarda-roupa-casal', nome: 'Guarda-roupa espelhado', x: 198, y: 250, w: 22, d: 92, h: 2.3, face: '+x' },
  { id: 'quadro-quarto', nome: 'Quadro do quarto', x: 326, y: 272, w: 2, d: 30, h: 0.8, base: 1.15, face: '-x' },
  { id: 'varal-chao', nome: 'Varal de chão', x: 58, y: 309, w: 44, d: 28, h: 1.0 },
  { id: 'bike', nome: 'Bicicleta', x: 106, y: 336, w: 68, d: 6, h: 0.95 },
];

export const nomeMovel = (id?: string) => MOVEIS.find(f => f.id === id)?.nome;
export const salaDoPonto = (x: number, y: number) => COMODOS_PLANTA.find(r => x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h)
;
export const salaDoMovel = (id: string) => { const f = MOVEIS.find(m => m.id === id); return f ? salaDoPonto(f.x + f.w / 2, f.y + f.d / 2) : undefined; };

// Propriedades no estilo BIM (categoria, família e material) de cada objeto da maquete
export type PropsBIM = { categoria: string; familia: string; material: string };
export const PROPS: Record<string, PropsBIM> = {
  geladeira: { categoria: 'Equipamento especializado', familia: 'Geladeira duplex frost free', material: 'Inox escovado' },
  'armario-cozinha': { categoria: 'Mobiliário de cozinha', familia: 'Armário inferior com tampo', material: 'MDF branco · tampo claro' },
  fogao: { categoria: 'Equipamento especializado', familia: 'Fogão de piso 5 bocas', material: 'Inox · mesa de vidro' },
  microondas: { categoria: 'Equipamento especializado', familia: 'Micro-ondas de bancada', material: 'Preto · vidro espelhado' },
  maquina: { categoria: 'Equipamento especializado', familia: 'Lavadora de abertura superior', material: 'Plástico branco' },
  tanque: { categoria: 'Louça e metais', familia: 'Tanque com torneira', material: 'Louça branca · metal cromado' },
  'varal-teto': { categoria: 'Acessório', familia: 'Varal de teto com cordas', material: 'Alumínio pintado branco' },
  balcao: { categoria: 'Mobiliário de cozinha', familia: 'Bancada com balcão americano', material: 'Granito preto · MDF branco' },
  'pia-cozinha': { categoria: 'Louça e metais', familia: 'Cuba de embutir com torneira', material: 'Aço inox · torneira cromada' },
  filtro: { categoria: 'Acessório', familia: 'Filtro de barro', material: 'Cerâmica' },
  escorredor: { categoria: 'Acessório', familia: 'Escorredor de louça de bancada', material: 'Aço cromado' },
  'mesa-jantar': { categoria: 'Mobiliário', familia: 'Mesa de jantar retangular', material: 'Tampo de vidro · pés cromados' },
  cadeiras: { categoria: 'Mobiliário', familia: 'Cadeira de jantar', material: 'Courino preto · aço cromado' },
  espada: { categoria: 'Paisagismo', familia: 'Espada-de-são-jorge em vaso', material: 'Vaso preto' },
  zamioculca: { categoria: 'Paisagismo', familia: 'Zamioculca em vaso', material: 'Vaso preto' },
  sofa: { categoria: 'Mobiliário', familia: 'Sofá de canto em L', material: 'Suede caramelo' },
  'tapete-sala': { categoria: 'Revestimento têxtil', familia: 'Tapete retangular', material: 'Tecido bege' },
  'mesa-centro': { categoria: 'Mobiliário', familia: 'Mesa de centro orgânica', material: 'MDF laqueado preto' },
  estante: { categoria: 'Mobiliário', familia: 'Painel com rack e nicho', material: 'MDF azul-marinho' },
  'cortina-sala': { categoria: 'Revestimento têxtil', familia: 'Cortina blackout', material: 'Tecido marrom' },
  'quadro-sala': { categoria: 'Decoração', familia: 'Quadro em tela', material: 'Tinta acrílica' },
  box: { categoria: 'Esquadria', familia: 'Box de correr', material: 'Vidro temperado · alumínio' },
  vaso: { categoria: 'Louça e metais', familia: 'Bacia com caixa acoplada', material: 'Louça branca' },
  'pia-banheiro': { categoria: 'Louça e metais', familia: 'Gabinete com cuba e espelheira', material: 'MDF branco · louça · puxador madeira' },
  'mesa-pc': { categoria: 'Mobiliário', familia: 'Mesa de escritório com monitor LG UltraGear 34" curvo', material: 'MDF preto · aço' },
  'cadeira-pc': { categoria: 'Mobiliário', familia: 'Cadeira ergonômica com encosto de cabeça', material: 'Tela cinza · base branca' },
  puff: { categoria: 'Mobiliário', familia: 'Puff', material: 'Courino preto' },
  'quadro-branco': { categoria: 'Acessório', familia: 'Quadro branco', material: 'Melamínico · alumínio' },
  'guarda-roupa-escritorio': { categoria: 'Marcenaria', familia: 'Guarda-roupa de correr', material: 'MDF branco · perfil alumínio' },
  cama: { categoria: 'Mobiliário', familia: 'Cama box casal', material: 'Tecido preto · edredom cetim' },
  'tapete-quarto': { categoria: 'Revestimento têxtil', familia: 'Tapete passadeira', material: 'Tecido estampado' },
  criado: { categoria: 'Mobiliário', familia: 'Criado-mudo com nicho', material: 'MDF branco · pés de madeira' },
  'guarda-roupa-casal': { categoria: 'Marcenaria', familia: 'Guarda-roupa de correr com espelho', material: 'MDF branco · espelho' },
  'quadro-quarto': { categoria: 'Decoração', familia: 'Quadro em tela', material: 'Tinta acrílica' },
  'varal-chao': { categoria: 'Acessório', familia: 'Varal de chão sanfonado', material: 'Aço pintado branco' },
  bike: { categoria: 'Equipamento', familia: 'Bicicleta MTB', material: 'Quadro de alumínio' },
};
export const medidasMovel = (id: string) => { const fs = MOVEIS.filter(f => f.id === id); if (!fs.length) return null; const f = fs[0]; return { l: Math.round(f.w * 2.5), p: Math.round(f.d * 2.5), a: Math.round(f.h * 100), n: fs.length }; };
export const areaComodo = (id: string) => { const r = COMODOS_PLANTA.find(c => c.id === id); if (!r) return 0; const extra = 0; return Math.round((r.w * r.h + extra) / 1600 * 10) / 10; };
