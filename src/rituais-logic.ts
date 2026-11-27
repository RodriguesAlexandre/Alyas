// Rituais domésticos: tarefas que se repetem (lavar roupa toda sexta, trocar a roupa de cama a cada 15 dias…)
export type Repete = 'unica' | 'diario' | 'semanal' | 'quinzenal' | 'mensal' | 'dias';
export type Ritual = {
  id: string; nome: string; cat: string; resp: 'Ale' | 'Yas' | 'Ambos'; repete: Repete; cada?: number; dias?: number[];
  hora?: string; dur?: number; lembretes?: number[]; ordinal?: number; inicio: string; feitos: { d: string; em: string; por?: string }[]; pausado?: boolean; nota?: string; criado?: string;
};
export const CATS_RITUAL = ['Casa', 'Limpeza', 'Roupas', 'Cozinha', 'Plantas', 'Compras', 'Contas', 'Cuidado pessoal', 'Outros'] as const;
export const EMOJI_CAT: Record<string, string> = { Casa: '🏠', Limpeza: '🧽', Roupas: '🧺', Cozinha: '🍳', Plantas: '🪴', Compras: '🛒', Contas: '🧾', 'Cuidado pessoal': '🫧', Outros: '✨' };
export const DIAS_SEMANA = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const DIAS_LONGOS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
const RRULE_DIA = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

/** Data local no formato AAAA-MM-DD. */
export const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const deIso = (s: string) => { const [a, m, d] = s.split('-').map(Number); return new Date(a, m - 1, d, 12); };
const somaDias = (s: string, n: number) => { const d = deIso(s); d.setDate(d.getDate() + n); return iso(d); };
const difDias = (a: string, b: string) => Math.round((deIso(b).getTime() - deIso(a).getTime()) / 864e5);

/** O ritual acontece nesse dia? */
export function ocorre(r: Ritual, dia: string): boolean {
  if (r.pausado || dia < r.inicio) return false;
  const d = deIso(dia), dif = difDias(r.inicio, dia), dias = r.dias?.length ? r.dias : [deIso(r.inicio).getDay()];
  switch (r.repete) {
    case 'unica': return dia === r.inicio;
    case 'diario': return true;
    case 'dias': return dif % Math.max(1, r.cada || 1) === 0;
    case 'semanal': return dias.includes(d.getDay());
    case 'quinzenal': { if (!dias.includes(d.getDay())) return false; const ini = deIso(r.inicio); ini.setDate(ini.getDate() - ini.getDay()); return Math.floor(Math.round((d.getTime() - ini.getTime()) / 864e5) / 7) % 2 === 0; }
    case 'mensal': {
      const ultimo = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
      // "1ª sexta do mês", "última sábado do mês"…
      if (r.ordinal) return d.getDay() === dias[0] && (r.ordinal > 0 ? Math.ceil(d.getDate() / 7) === r.ordinal : d.getDate() + 7 > ultimo);
      const alvo = deIso(r.inicio).getDate(); return d.getDate() === Math.min(alvo, ultimo);
    }
  }
}
export const feitoEm = (r: Ritual, dia: string) => r.feitos.some(f => f.d === dia);
/** Próximo dia (a partir de "de", inclusive) em que o ritual acontece. */
export function proxima(r: Ritual, de: string): string | null { for (let i = 0; i < 400; i++) { const d = somaDias(de, i); if (ocorre(r, d)) return d; } return null; }

export type Ocorrencia = { r: Ritual; dia: string; feito: boolean; atrasado: boolean };
/** Hoje, atrasados (até 14 dias) e os próximos dias, para a tela e para os lembretes. */
export function agenda(rs: Ritual[], hoje: string, diasFrente = 7) {
  const hojeL: Ocorrencia[] = [], atrasados: Ocorrencia[] = [], proximos: Ocorrencia[] = [];
  for (const r of rs) {
    if (r.pausado) continue;
    if (ocorre(r, hoje)) hojeL.push({ r, dia: hoje, feito: feitoEm(r, hoje), atrasado: false });
    // Só o atraso mais recente de cada ritual (ninguém quer ver "lavar roupa" 3 vezes)
    for (let i = 1; i <= 14; i++) { const d = somaDias(hoje, -i); if (d < r.inicio) break; if (ocorre(r, d)) { if (!feitoEm(r, d) && !(ocorre(r, hoje) && r.repete === 'diario')) atrasados.push({ r, dia: d, feito: false, atrasado: true }); break; } }
    // Os diários já aparecem em "hoje"; repetir todos os dias na semana só polui a lista
    if (r.repete !== 'diario') for (let i = 1; i <= diasFrente; i++) { const d = somaDias(hoje, i); if (ocorre(r, d)) proximos.push({ r, dia: d, feito: feitoEm(r, d), atrasado: false }); }
  }
  const porHora = (a: Ocorrencia, b: Ocorrencia) => a.dia.localeCompare(b.dia) || (a.r.hora || '99').localeCompare(b.r.hora || '99') || a.r.nome.localeCompare(b.r.nome);
  return { hoje: hojeL.sort(porHora), atrasados: atrasados.sort(porHora), proximos: proximos.sort(porHora) };
}
export function marcar(r: Ritual, dia: string, por?: string): Ritual {
  return feitoEm(r, dia) ? { ...r, feitos: r.feitos.filter(f => f.d !== dia) } : { ...r, feitos: [...r.feitos, { d: dia, em: new Date().toISOString(), ...(por ? { por } : {}) }].slice(-200) };
}
export const ORDINAIS: [number, string][] = [[1, '1ª'], [2, '2ª'], [3, '3ª'], [4, '4ª'], [-1, 'Última']];
const ORD_M: Record<number, string> = { 1: '1º', 2: '2º', 3: '3º', 4: '4º', [-1]: 'último' }, ORD_F: Record<number, string> = { 1: '1ª', 2: '2ª', 3: '3ª', 4: '4ª', [-1]: 'última' };
export const nomeOrdinal = (o: number, dia: number) => (dia === 0 || dia === 6 ? ORD_M[o] : ORD_F[o]) + ' ' + DIAS_LONGOS[dia] + (dia > 0 && dia < 6 ? '-feira' : '');
export function descreverRepeticao(r: Pick<Ritual, 'repete' | 'cada' | 'dias' | 'inicio' | 'hora' | 'dur' | 'ordinal'>) {
  const dias = (r.dias?.length ? r.dias : [deIso(r.inicio).getDay()]).slice().sort();
  const lista = (ds: number[]) => ds.length === 7 ? 'todo dia' : ds.map(d => DIAS_LONGOS[d]).join(', ').replace(/, ([^,]*)$/, ' e $1');
  const base = r.repete === 'unica' ? 'Só em ' + deIso(r.inicio).toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' }) : r.repete === 'diario' ? 'Todo dia' : r.repete === 'dias' ? `A cada ${r.cada || 1} dias` : r.repete === 'semanal' ? (dias.length === 1 ? `Toda ${DIAS_LONGOS[dias[0]]}` : `Toda semana: ${lista(dias)}`) : r.repete === 'quinzenal' ? `A cada 15 dias (${lista(dias)})` : r.ordinal ? `Todo mês, ${nomeOrdinal(r.ordinal, dias[0])}` : `Todo dia ${deIso(r.inicio).getDate()} do mês`;
  const fim = r.hora ? fimHora(r.hora, r.dur || 60) : '';
  return base + (r.hora ? ` · ${r.hora}–${fim}` : '');
}
export function fimHora(h: string, dur: number) { const [a, b] = h.split(':').map(Number); const t = a * 60 + b + dur; return `${String(Math.floor(t / 60) % 24).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`; }
/** Regra de repetição no padrão das agendas (RFC 5545), usada no link do Google Agenda. */
export function rrule(r: Ritual) {
  const dias = (r.dias?.length ? r.dias : [deIso(r.inicio).getDay()]).map(d => RRULE_DIA[d]).join(',');
  return r.repete === 'diario' ? 'RRULE:FREQ=DAILY' : r.repete === 'dias' ? `RRULE:FREQ=DAILY;INTERVAL=${Math.max(1, r.cada || 1)}` : r.repete === 'semanal' ? `RRULE:FREQ=WEEKLY;BYDAY=${dias}` : r.repete === 'quinzenal' ? `RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=${dias}` : r.ordinal ? `RRULE:FREQ=MONTHLY;BYDAY=${r.ordinal}${RRULE_DIA[(r.dias?.length ? r.dias : [deIso(r.inicio).getDay()])[0]]}` : `RRULE:FREQ=MONTHLY;BYMONTHDAY=${deIso(r.inicio).getDate()}`;
}
/** Link "adicionar ao Google Agenda" já com nome, horário e repetição (não precisa de permissão nenhuma). */
export function linkGoogleAgenda(r: Ritual) {
  const primeiro = proxima(r, r.inicio) || r.inicio, d = primeiro.replace(/-/g, '');
  const datas = r.hora ? `${d}T${r.hora.replace(':', '')}00/${d}T${fimHora(r.hora, r.dur || 60).replace(':', '')}00` : `${d}/${somaDias(primeiro, 1).replace(/-/g, '')}`;
  const q = new URLSearchParams({ action: 'TEMPLATE', text: (EMOJI_CAT[r.cat] || '') + ' ' + r.nome, dates: datas, ctz: 'America/Sao_Paulo', ...(r.repete !== 'unica' ? { recur: rrule(r) } : {}), details: 'Ritual do AleYas' + (r.resp !== 'Ambos' ? ' · ' + r.resp : '') + (r.nota ? '\n' + r.nota : '') });
  return 'https://calendar.google.com/calendar/render?' + q.toString();
}
/** Quantas vezes foi feito nas últimas 4 semanas, contra quantas deveria. */
export function constancia(r: Ritual, hoje: string) {
  let devia = 0, fez = 0; for (let i = 0; i < 28; i++) { const d = somaDias(hoje, -i); if (d < r.inicio) break; if (ocorre(r, d)) { devia++; if (feitoEm(r, d)) fez++; } }
  return { devia, fez };
}

/** Opções de lembrete (minutos antes do início). Em evento de dia inteiro, o início é 0h do dia. */
export const LEMBRETES_HORA: [number, string][] = [[0, 'Na hora'], [15, '15 min antes'], [30, '30 min antes'], [60, '1 h antes'], [1440, '1 dia antes']];
export const LEMBRETES_DIA: [number, string][] = [[900, 'Véspera às 9h'], [240, 'Véspera às 20h'], [2340, '2 dias antes, 9h']];
export function descreverLembretes(r: Pick<Ritual, 'lembretes' | 'hora'>) {
  const ops = r.hora ? LEMBRETES_HORA : LEMBRETES_DIA; return (r.lembretes || []).map(m => ops.find(o => o[0] === m)?.[1] || m + ' min antes').join(', ');
}
