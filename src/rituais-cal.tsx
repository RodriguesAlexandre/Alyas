// Rituais em calendário: semana com horários (como o Google Agenda) e mês com os dias marcados.
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Pencil, X, Plus } from 'lucide-react';
import { ocorre, feitoEm, iso, deIso, EMOJI_CAT, fimHora, type Ritual } from './rituais-logic';

const H0 = 6, H1 = 24, PX = 46; // horas exibidas e altura de cada hora
const DIAS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const COR: Record<string, string> = { Casa: '#7d9c5a', Limpeza: '#9b7bb5', Roupas: '#5b8fa8', Cozinha: '#d9714a', Plantas: '#4f8a4f', Compras: '#e8b84f', Contas: '#8a6d47', 'Cuidado pessoal': '#c97a9a', Outros: '#8a8f80' };
const cor = (r: Ritual) => COR[r.cat] || '#7d9c5a';
const somar = (d: Date, n: number) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const segunda = (d: Date) => somar(d, -((d.getDay() + 6) % 7));
const minutos = (h: string) => { const [a, b] = h.split(':').map(Number); return a * 60 + b; };

type Sel = { r: Ritual; dia: string } | null;
export default function RituaisCalendario({ rituais, modo, onCheck, onEditar, onNovo, busy }: {
  rituais: Ritual[]; modo: 'semana' | 'mes'; busy: boolean;
  onCheck: (r: Ritual, dia: string) => void; onEditar: (r: Ritual) => void; onNovo: (dia: string, hora?: string) => void;
}) {
  const hoje = iso(new Date());
  const [ref, setRef] = useState(() => new Date()), [sel, setSel] = useState<Sel>(null), [diaMes, setDiaMes] = useState(hoje);
  const corpo = useRef<HTMLDivElement>(null);
  useEffect(() => { if (modo === 'semana' && corpo.current) corpo.current.scrollTop = (7 - H0) * PX; }, [modo]);
  const ativos = rituais.filter(r => !r.pausado);

  if (modo === 'mes') {
    const ini = new Date(ref.getFullYear(), ref.getMonth(), 1), comeco = segunda(ini), dias = Array.from({ length: 42 }, (_, k) => somar(comeco, k));
    const doDia = (d: string) => ativos.filter(r => ocorre(r, d)).sort((a, b) => (a.hora || '99').localeCompare(b.hora || '99'));
    const lista = doDia(diaMes);
    return <div className="rcal">
      <div className="rcal-nav"><button className="icon-btn" aria-label="Mês anterior" onClick={() => setRef(new Date(ref.getFullYear(), ref.getMonth() - 1, 1))}><ChevronLeft size={18} /></button>
        <b>{MESES[ref.getMonth()]} {ref.getFullYear()}</b>
        <button className="text-btn" onClick={() => { setRef(new Date()); setDiaMes(hoje); }}>Hoje</button>
        <button className="icon-btn" aria-label="Próximo mês" onClick={() => setRef(new Date(ref.getFullYear(), ref.getMonth() + 1, 1))}><ChevronRight size={18} /></button></div>
      <div className="rcal-mes">{DIAS.map(d => <span key={d} className="rcal-sem">{d}</span>)}
        {dias.map(d => { const s = iso(d), rs = doDia(s), fora = d.getMonth() !== ref.getMonth(); return <button key={s} className={'rcal-dia' + (fora ? ' fora' : '') + (s === hoje ? ' hoje' : '') + (s === diaMes ? ' sel' : '')} onClick={() => setDiaMes(s)}>
          <span className="rcal-num">{d.getDate()}</span>
          <span className="rcal-pontos">{rs.slice(0, 4).map(r => <i key={r.id} style={{ background: cor(r), opacity: feitoEm(r, s) ? .35 : 1 }} />)}{rs.length > 4 && <em>+</em>}</span>
        </button>; })}</div>
      <div className="rcal-diadet"><div className="rcal-diadet-topo"><b>{deIso(diaMes).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }).replace(/^./, c => c.toUpperCase())}</b><button className="text-btn" onClick={() => onNovo(diaMes)}><Plus size={14} /> Ritual neste dia</button></div>
        {lista.length ? lista.map(r => { const f = feitoEm(r, diaMes); return <div key={r.id} className={'rcal-item' + (f ? ' feito' : '')} style={{ borderLeftColor: cor(r) }}>
          <button className="rit-check" aria-pressed={f} aria-label={(f ? 'Desmarcar ' : 'Marcar ') + r.nome} disabled={busy || diaMes > hoje} onClick={() => onCheck(r, diaMes)}>{f ? <Check size={16} /> : null}</button>
          <span>{EMOJI_CAT[r.cat] || '✨'} <b>{r.nome}</b><small>{r.hora ? r.hora + '–' + fimHora(r.hora, r.dur || 60) : 'dia todo'} · {r.resp === 'Ambos' ? 'Ale e Yas' : r.resp}</small></span>
          <button className="icon-btn" aria-label={'Editar ' + r.nome} onClick={() => onEditar(r)}><Pencil size={15} /></button></div>; })
          : <p className="muted" style={{ margin: '6px 0', fontSize: 13 }}>Nada neste dia.</p>}</div>
    </div>;
  }

  // ---------- semana com horários ----------
  const seg = segunda(ref), dias = Array.from({ length: 7 }, (_, k) => somar(seg, k)), sd = dias.map(iso);
  const semHora = sd.map(d => ativos.filter(r => !r.hora && ocorre(r, d)));
  const comHora = sd.map(d => ativos.filter(r => r.hora && ocorre(r, d)));
  const agora = new Date(), minAgora = agora.getHours() * 60 + agora.getMinutes();
  const rotulo = `${dias[0].getDate()} ${MESES[dias[0].getMonth()].slice(0, 3)} – ${dias[6].getDate()} ${MESES[dias[6].getMonth()].slice(0, 3)}`;
  return <div className="rcal">
    <div className="rcal-nav"><button className="icon-btn" aria-label="Semana anterior" onClick={() => setRef(somar(ref, -7))}><ChevronLeft size={18} /></button>
      <b>{rotulo}</b><button className="text-btn" onClick={() => setRef(new Date())}>Hoje</button>
      <button className="icon-btn" aria-label="Próxima semana" onClick={() => setRef(somar(ref, 7))}><ChevronRight size={18} /></button></div>
    <div className="rcal-cab"><span />{dias.map((d, k) => <span key={k} className={sd[k] === hoje ? 'hoje' : ''}><small>{DIAS[k]}</small><b>{d.getDate()}</b></span>)}</div>
    {semHora.some(l => l.length) && <div className="rcal-todo"><span className="rcal-hr">dia</span>{semHora.map((l, k) => <div key={k}>{l.map(r => <button key={r.id} className={'rcal-ev mini' + (feitoEm(r, sd[k]) ? ' feito' : '')} style={{ background: cor(r) }} onClick={() => setSel({ r, dia: sd[k] })}>{EMOJI_CAT[r.cat]} {r.nome}</button>)}</div>)}</div>}
    <div className="rcal-corpo" ref={corpo}>
      <div className="rcal-grade" style={{ height: (H1 - H0) * PX }}>
        <div className="rcal-horas">{Array.from({ length: H1 - H0 }, (_, k) => <span key={k} style={{ top: k * PX }}>{String(H0 + k).padStart(2, '0')}h</span>)}</div>
        {sd.map((d, k) => <div key={d} className={'rcal-col' + (d === hoje ? ' hoje' : '')}
          onClick={e => { if ((e.target as HTMLElement).closest('.rcal-ev')) return; const y = e.clientY - (e.currentTarget as HTMLElement).getBoundingClientRect().top, h = Math.min(H1 - 1, H0 + Math.floor(y / PX)); onNovo(d, String(h).padStart(2, '0') + ':00'); }}>
          {Array.from({ length: H1 - H0 }, (_, h) => <i key={h} className="rcal-linha" style={{ top: h * PX }} />)}
          {d === hoje && minAgora >= H0 * 60 && <i className="rcal-agora" style={{ top: (minAgora - H0 * 60) / 60 * PX }} />}
          {comHora[k].map((r, j, arr) => { const ini = Math.max(H0 * 60, minutos(r.hora!)), dur = Math.max(25, r.dur || 60), irmaos = arr.filter(x => Math.abs(minutos(x.hora!) - minutos(r.hora!)) < dur), pos = irmaos.indexOf(r);
            return <button key={r.id} className={'rcal-ev' + (feitoEm(r, d) ? ' feito' : '')} title={r.nome}
              style={{ top: (ini - H0 * 60) / 60 * PX, height: Math.max(22, dur / 60 * PX - 2), background: cor(r), left: `${pos * 100 / irmaos.length}%`, width: `${100 / irmaos.length}%` }}
              onClick={() => setSel({ r, dia: d })}><b>{feitoEm(r, d) ? '✓ ' : ''}{r.nome}</b><small>{r.hora}</small></button>; })}
        </div>)}
      </div>
    </div>
    <p className="muted rcal-dica">Toque num horário vazio para criar um ritual ali; toque num ritual para marcar como feito.</p>
    {sel && <div className="overlay" onClick={() => setSel(null)}><section className="modal rcal-pop" onClick={e => e.stopPropagation()}>
      <button className="modal-close icon-btn" aria-label="Fechar" onClick={() => setSel(null)}><X /></button>
      <span className="eyebrow" style={{ color: cor(sel.r) }}>{sel.r.cat.toUpperCase()}</span><h2>{EMOJI_CAT[sel.r.cat]} {sel.r.nome}</h2>
      <p className="muted">{deIso(sel.dia).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })} · {sel.r.hora ? sel.r.hora + '–' + fimHora(sel.r.hora, sel.r.dur || 60) : 'dia todo'} · {sel.r.resp === 'Ambos' ? 'Ale e Yas' : sel.r.resp}</p>
      {sel.r.nota && <p>{sel.r.nota}</p>}
      <div className="rcal-pop-acoes">
        <button className="primary" disabled={busy || sel.dia > hoje} onClick={() => { onCheck(sel.r, sel.dia); setSel(null); }}><Check size={16} /> {feitoEm(sel.r, sel.dia) ? 'Desmarcar' : sel.dia > hoje ? 'Ainda não chegou' : 'Marcar como feito'}</button>
        <button className="secondary" onClick={() => { onEditar(sel.r); setSel(null); }}><Pencil size={15} /> Editar</button>
      </div>
    </section></div>}
  </div>;
}

export function useVistaRituais() {
  const [v, setV] = useState<'lista' | 'semana' | 'mes'>(() => { try { return (localStorage.getItem('aleyas-rituais-vista') as any) || 'lista'; } catch { return 'lista'; } });
  return [v, (x: 'lista' | 'semana' | 'mes') => { setV(x); try { localStorage.setItem('aleyas-rituais-vista', x); } catch { /* */ } }] as const;
}
