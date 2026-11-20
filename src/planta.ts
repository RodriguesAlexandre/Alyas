// Planta do apartamento (espelho da planta tipo do Terra Nova Aspen, 47 m²), com os móveis reais.
// Coordenadas no mesmo sistema da planta baixa aprovada: 40 unidades = 1 m, origem no canto da cozinha.
export const ESCALA = 40, OX = 50, OY = 20;
export const m = (px: number) => px / ESCALA;
export const mx = (x: number) => (x - OX) / ESCALA, mz = (y: number) => (y - OY) / ESCALA;

export type Comodo = { id: string; nome: string; comodos: string[]; x: number; y: number; w: number; h: number };
export const COMODOS_PLANTA: Comodo[] = [
  { id: 'cozinha', nome: 'Cozinha', comodos: ['Cozinha'], x: 50, y: 20, w: 118, h: 70 },
  { id: 'servico', nome: 'Serviço', comodos: ['Área de serviço'], x: 168, y: 20, w: 30, h: 80 },
  { id: 'jantar', nome: 'Jantar', comodos: [], x: 50, y: 100, w: 118, h: 99 },
  { id: 'sala', nome: 'Sala', comodos: ['Sala', 'Outro'], x: 50, y: 199, w: 134, h: 105 },
  { id: 'banho', nome: 'Banheiro', comodos: ['Banheiro'], x: 168, y: 100, w: 53, h: 99 },
  { id: 'escritorio', nome: 'Escritório', comodos: ['Escritório'], x: 221, y: 110, w: 107, h: 89 },
  { id: 'casal', nome: 'Quarto do casal', comodos: ['Quarto'], x: 196, y: 232, w: 132, h: 114 },
  { id: 'varanda', nome: 'Varanda', comodos: ['Varanda'], x: 50, y: 304, w: 134, h: 42 },
];
export const comodoDoItem = (c?: string) => COMODOS_PLANTA.find(r => c && r.comodos.includes(c));

// Contorno do piso interno e da varanda
export const PISO: [number, number][] = [[50, 20], [198, 20], [198, 110], [328, 110], [328, 346], [184, 346], [184, 304], [50, 304]];
export const PISO_VARANDA: [number, number][] = [[50, 304], [184, 304], [184, 346], [50, 346]];

// Paredes (polilinhas). Os vãos de porta ficam entre elas.
export const PAREDES: [number, number][][] = [
  [[50, 184], [50, 20], [198, 20], [198, 30]], [[198, 70], [198, 110], [255, 110]], [[300, 110], [328, 110], [328, 346], [300, 346]],
  [[240, 346], [196, 346]], [[50, 216], [50, 304]], [[168, 100], [198, 100]], [[168, 100], [168, 199], [190, 199]],
  [[212, 199], [258, 199], [258, 204]], [[221, 110], [221, 199]], [[258, 228], [258, 232], [228, 232]], [[200, 232], [184, 232], [184, 304], [150, 304]],
  [[60, 304], [50, 304]], [[328, 232], [258, 232]], [[50, 304], [50, 346]],
];
export const BLOCO: [number, number, number, number] = [184, 232, 12, 114]; // parede grossa da TV
export const JANELAS: [number, number][][] = [[[198, 30], [198, 70]], [[255, 110], [300, 110]], [[240, 346], [300, 346]]];
export const PORTA_VIDRO: [number, number][] = [[60, 304], [150, 304]];
export const GUARDA_CORPO: [number, number][] = [[50, 346], [184, 346]];

export type Movel = { nome: string; x: number; y: number; w: number; d: number; h: number; base?: number; cor: string; forma?: 'caixa' | 'cil' | 'vidro' | 'planta' | 'espelho'; aereo?: boolean };
const B = '#f3f2ee', P = '#26272b', INOX = '#b9bcc1', GRANITO = '#1d1e21', CARAMELO = '#b37a46', AZUL = '#33506f';
export const MOVEIS: Movel[] = [
  // cozinha e serviço
  { nome: 'Geladeira', x: 52, y: 22, w: 26, d: 26, h: 1.8, cor: INOX },
  { nome: 'Airfryer', x: 58, y: 26, w: 12, d: 12, h: 0.32, base: 1.8, cor: P },
  { nome: 'Bancada', x: 78, y: 22, w: 20, d: 18, h: 0.9, cor: B },
  { nome: 'Fogão', x: 98, y: 22, w: 24, d: 20, h: 0.9, cor: '#9a9da3' },
  { nome: 'Armário', x: 122, y: 22, w: 46, d: 16, h: 0.9, cor: B },
  { nome: 'Coifa', x: 98, y: 21, w: 24, d: 14, h: 0.12, base: 1.6, cor: INOX },
  { nome: 'Armários aéreos', x: 52, y: 21, w: 116, d: 12, h: 0.7, base: 1.75, cor: B, aereo: true },
  { nome: 'Micro-ondas', x: 80, y: 21, w: 18, d: 13, h: 0.3, base: 1.42, cor: P },
  { nome: 'Máquina de lavar', x: 170, y: 24, w: 24, d: 24, h: 0.95, cor: B, forma: 'cil' },
  { nome: 'Tanque', x: 178, y: 76, w: 18, d: 18, h: 0.85, cor: B },
  { nome: 'Balcão', x: 80, y: 90, w: 88, d: 10, h: 1.0, cor: GRANITO },
  { nome: 'Filtro de barro', x: 140, y: 91, w: 8, d: 8, h: 0.45, base: 1.0, cor: '#8a5a3c', forma: 'cil' },
  // jantar
  { nome: 'Mesa de vidro', x: 128, y: 126, w: 34, d: 40, h: 0.75, cor: '#bfd8e6', forma: 'vidro' },
  ...[[117, 132], [117, 151], [140, 115], [140, 168]].map(([x, y]) => ({ nome: 'Cadeira', x, y, w: 9, d: 9, h: 0.46, cor: P })),
  { nome: 'Espada-de-são-jorge', x: 154, y: 182, w: 12, d: 12, h: 1.1, cor: '#4f7a3a', forma: 'planta' as const },
  // sala
  { nome: 'Sofá', x: 52, y: 220, w: 24, d: 80, h: 0.42, cor: CARAMELO },
  { nome: 'Sofá', x: 76, y: 220, w: 44, d: 24, h: 0.42, cor: CARAMELO },
  { nome: 'Encosto', x: 52, y: 220, w: 7, d: 80, h: 0.82, cor: '#a06a3a' },
  { nome: 'Encosto', x: 59, y: 220, w: 61, d: 7, h: 0.82, cor: '#a06a3a' },
  { nome: 'Mesa de centro', x: 97, y: 260, w: 36, d: 24, h: 0.42, cor: P, forma: 'cil' },
  { nome: 'Rack azul', x: 170, y: 240, w: 14, d: 60, h: 0.5, cor: AZUL },
  { nome: 'Painel azul', x: 181, y: 240, w: 3, d: 60, h: 2.1, cor: AZUL },
  { nome: 'Nicho de livros', x: 172, y: 240, w: 12, d: 60, h: 0.3, base: 1.85, cor: AZUL },
  { nome: 'TV', x: 179, y: 255, w: 2, d: 30, h: 0.5, base: 1.05, cor: '#111' },
  { nome: 'Zamioculca', x: 158, y: 226, w: 12, d: 12, h: 0.9, cor: '#3f7d34', forma: 'planta' },
  // banheiro
  { nome: 'Box de vidro', x: 171, y: 102, w: 48, d: 34, h: 1.9, cor: '#cfe3ee', forma: 'vidro' },
  { nome: 'Vaso', x: 200, y: 146, w: 16, d: 20, h: 0.42, cor: '#fbfbf9', forma: 'cil' },
  { nome: 'Gabinete e pia', x: 171, y: 158, w: 14, d: 20, h: 0.85, cor: '#fbfbf9' },
  // escritório
  { nome: 'Mesa do PC', x: 223, y: 118, w: 22, d: 70, h: 0.75, cor: P },
  { nome: 'Monitor', x: 225, y: 132, w: 2, d: 40, h: 0.4, base: 0.8, cor: '#111' },
  { nome: 'Cadeira ergonômica', x: 248, y: 144, w: 16, d: 16, h: 1.15, cor: '#d9d9d6', forma: 'cil' },
  { nome: 'Puff', x: 293, y: 175, w: 18, d: 18, h: 0.4, cor: P, forma: 'cil' },
  { nome: 'Quadro branco', x: 324, y: 128, w: 2, d: 50, h: 0.9, base: 0.6, cor: '#ffffff' },
  { nome: 'Guarda-roupa', x: 262, y: 204, w: 64, d: 26, h: 2.3, cor: B },
  // quarto do casal
  { nome: 'Cama', x: 251, y: 258, w: 75, d: 60, h: 0.55, cor: '#2c2c31' },
  { nome: 'Travesseiro', x: 312, y: 262, w: 12, d: 25, h: 0.12, base: 0.55, cor: '#43434a' },
  { nome: 'Travesseiro', x: 312, y: 289, w: 12, d: 25, h: 0.12, base: 0.55, cor: '#43434a' },
  { nome: 'Criado-mudo', x: 314, y: 246, w: 12, d: 10, h: 0.5, cor: B },
  { nome: 'Criado-mudo', x: 314, y: 320, w: 12, d: 10, h: 0.5, cor: B },
  { nome: 'Guarda-roupa espelhado', x: 198, y: 250, w: 22, d: 92, h: 2.3, cor: '#dfe7ec', forma: 'espelho' },
  // varanda
  { nome: 'Varal de chão', x: 110, y: 310, w: 40, d: 30, h: 1.0, cor: '#f0f0ee', forma: 'vidro' },
  { nome: 'Bicicleta', x: 156, y: 312, w: 24, d: 4, h: 0.75, cor: '#2d3b48' },
];
