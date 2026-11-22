// Avisos da casa: manutenção, ajustes e compras ligados a um objeto ou cômodo da maquete 3D
import { nomeMovel, salaDoMovel, COMODOS_PLANTA } from './planta';
export type TipoAviso = 'manutencao' | 'ajuste' | 'comprar' | 'outro';
export type Urgencia = 'urgente' | 'semana' | 'quando';
export type Aviso = { id: string; texto: string; tipo: TipoAviso; movel?: string; sala?: string; feito?: string; criado: string; por?: string; urgencia?: Urgencia; resp?: 'Ale' | 'Yas'; repetirDias?: number; proxima?: string };
export const TIPOS_AVISO: [TipoAviso, string][] = [['manutencao', 'Manutenção'], ['ajuste', 'Ajuste'], ['comprar', 'Comprar'], ['outro', 'Outro']];
export const URGENCIAS: [Urgencia, string][] = [['urgente', 'Urgente'], ['semana', 'Esta semana'], ['quando', 'Quando der']];
export const REPETIR: [number, string][] = [[0, 'Não repete'], [30, 'Todo mês'], [90, 'A cada 3 meses'], [180, 'A cada 6 meses'], [365, 'Todo ano']];
export const rotuloTipo = (t: TipoAviso) => TIPOS_AVISO.find(x => x[0] === t)?.[1] || t;
export const rotuloUrgencia = (u?: Urgencia) => URGENCIAS.find(x => x[0] === (u || 'quando'))?.[1] || '';
export const salaDoAviso = (a: Aviso) => a.sala || (a.movel ? salaDoMovel(a.movel)?.id : undefined);
export const ondeAviso = (a: Aviso) => [a.movel ? nomeMovel(a.movel) : '', COMODOS_PLANTA.find(r => r.id === salaDoAviso(a))?.nome].filter(Boolean).join(' · ');
/** Um aviso recorrente fica "dormindo" até a próxima data; os outros valem até serem resolvidos. */
export const vencido = (a: Aviso, hoje = new Date()) => !a.feito && (!a.proxima || Date.parse(a.proxima) <= hoje.getTime());
export const pendentes = (l: Aviso[] = [], hoje = new Date()) => l.filter(a => vencido(a, hoje));
export const diasPara = (a: Aviso, hoje = new Date()) => a.proxima ? Math.ceil((Date.parse(a.proxima) - hoje.getTime()) / 864e5) : 0;
/** Resolver: recorrente agenda a próxima vez; o resto fica marcado como feito. */
export function resolver(a: Aviso, hoje = new Date()): Aviso {
  if (a.repetirDias) { const p = new Date(hoje.getTime() + a.repetirDias * 864e5); p.setHours(8, 0, 0, 0); return { ...a, proxima: p.toISOString(), feito: undefined }; }
  return { ...a, feito: hoje.toISOString() };
}
export const ordemUrgencia = (a: Aviso) => ({ urgente: 0, semana: 1, quando: 2 })[a.urgencia || 'quando'];
export const avisosDe = (l: Aviso[] = [], alvo: { movel?: string; sala?: string }) =>
  l.filter(a => alvo.movel ? a.movel === alvo.movel : (a.sala === alvo.sala && !a.movel));
export function novoAviso(texto: string, tipo: TipoAviso, alvo: { movel?: string; sala?: string }, por?: string, extra: Partial<Aviso> = {}): Aviso {
  return { id: 'av-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), texto: texto.trim().slice(0, 200), tipo, ...(alvo.movel ? { movel: alvo.movel } : { sala: alvo.sala }), criado: new Date().toISOString(), ...(por ? { por } : {}), ...extra };
}
/** Sugestões de lembretes recorrentes para cada objeto da maquete. */
export const SUGESTOES: Record<string, [string, number][]> = {
  filtro: [['Trocar a vela do filtro de barro', 180], ['Lavar o filtro de barro', 30]],
  geladeira: [['Limpar e degelar a geladeira', 90]],
  maquina: [['Limpar o filtro da máquina de lavar', 30]],
  box: [['Limpar o ralo do box', 30]],
  'pia-cozinha': [['Limpar o sifão da pia', 90]],
  'pia-banheiro': [['Limpar o sifão da pia do banheiro', 90]],
  fogao: [['Limpar queimadores do fogão', 30]],
  microondas: [['Limpar o micro-ondas por dentro', 30]],
  'mesa-pc': [['Limpar poeira do PC e dos cabos', 90]],
  cama: [['Virar o colchão', 90], ['Trocar a roupa de cama', 7]],
  sofa: [['Aspirar o sofá', 30]],
  'varal-teto': [['Revisar as cordas do varal', 180]],
  tanque: [['Limpar o tanque e o ralo', 30]],
};
