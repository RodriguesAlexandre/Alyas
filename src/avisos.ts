// Avisos da casa: manutenção, ajustes e compras ligados a um objeto ou cômodo da maquete 3D
import { nomeMovel, salaDoMovel, COMODOS_PLANTA } from './planta';
export type TipoAviso = 'manutencao' | 'ajuste' | 'comprar' | 'outro';
export type Aviso = { id: string; texto: string; tipo: TipoAviso; movel?: string; sala?: string; feito?: string; criado: string; por?: string };
export const TIPOS_AVISO: [TipoAviso, string][] = [['manutencao', 'Manutenção'], ['ajuste', 'Ajuste'], ['comprar', 'Comprar'], ['outro', 'Outro']];
export const rotuloTipo = (t: TipoAviso) => TIPOS_AVISO.find(x => x[0] === t)?.[1] || t;
export const salaDoAviso = (a: Aviso) => a.sala || (a.movel ? salaDoMovel(a.movel)?.id : undefined);
export const ondeAviso = (a: Aviso) => [a.movel ? nomeMovel(a.movel) : '', COMODOS_PLANTA.find(r => r.id === salaDoAviso(a))?.nome].filter(Boolean).join(' · ');
export const pendentes = (l: Aviso[] = []) => l.filter(a => !a.feito);
export const avisosDe = (l: Aviso[] = [], alvo: { movel?: string; sala?: string }) =>
  l.filter(a => alvo.movel ? a.movel === alvo.movel : (a.sala === alvo.sala && !a.movel));
export function novoAviso(texto: string, tipo: TipoAviso, alvo: { movel?: string; sala?: string }, por?: string): Aviso {
  return { id: 'av-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), texto: texto.trim().slice(0, 200), tipo, ...(alvo.movel ? { movel: alvo.movel } : { sala: alvo.sala }), criado: new Date().toISOString(), ...(por ? { por } : {}) };
}
