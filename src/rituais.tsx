import { useEffect, useMemo, useState } from 'react';
import { Check, Plus, X, CalendarPlus, Pause, Play, Pencil, Trash2, Loader2, CalendarCheck, RefreshCw, Clock } from 'lucide-react';
import { LEMBRETES_HORA, LEMBRETES_DIA, descreverLembretes, CATS_RITUAL, EMOJI_CAT, DIAS_SEMANA, agenda, marcar, descreverRepeticao, linkGoogleAgenda, constancia, iso, deIso, proxima, type Ritual, type Repete } from './rituais-logic';
import { quem } from './quem';
import RituaisCalendario, { useVistaRituais } from './rituais-cal';
import { api } from './api';

const MODELOS: Partial<Ritual>[] = [
  { nome: 'Lavar roupas', cat: 'Roupas', repete: 'semanal', dias: [5], hora: '07:00', dur: 60 },
  { nome: 'Trocar roupa de cama', cat: 'Roupas', repete: 'quinzenal', dias: [6] },
  { nome: 'Limpar o banheiro', cat: 'Limpeza', repete: 'semanal', dias: [6] },
  { nome: 'Tirar o lixo', cat: 'Casa', repete: 'dias', cada: 2, hora: '20:00', dur: 15 },
  { nome: 'Regar as plantas', cat: 'Plantas', repete: 'semanal', dias: [1, 4] },
  { nome: 'Faxina geral', cat: 'Limpeza', repete: 'quinzenal', dias: [6], hora: '09:00', dur: 180 },
  { nome: 'Limpar a geladeira', cat: 'Cozinha', repete: 'mensal' },
  { nome: 'Pagar as contas da casa', cat: 'Contas', repete: 'mensal' },
];
const REPETE: [Repete, string][] = [['unica', 'Só uma vez'], ['diario', 'Todo dia'], ['semanal', 'Toda semana'], ['quinzenal', 'A cada 15 dias'], ['mensal', 'Todo mês'], ['dias', 'A cada X dias']];
const DURS = [15, 30, 45, 60, 90, 120, 180];
const nomeDia = (d: string, hoje: string) => { const dif = Math.round((deIso(d).getTime() - deIso(hoje).getTime()) / 864e5); return dif === 0 ? 'Hoje' : dif === 1 ? 'Amanhã' : dif === -1 ? 'Ontem' : deIso(d).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric' }).replace(/^./, c => c.toUpperCase()); };

export default function Rituais({ data, save, busy, ready }: { data: any; save: (d: any, m?: string) => Promise<any>; busy: boolean; ready: boolean }) {
  const rituais: Ritual[] = data.rituais || [];
  const [vista, setVista] = useVistaRituais();
  const [hoje, setHoje] = useState(iso(new Date())), [editando, setEditando] = useState<Partial<Ritual> | null>(null), [deQuem, setDeQuem] = useState<'todos' | 'Ale' | 'Yas'>('todos');
  useEffect(() => { const t = setInterval(() => setHoje(iso(new Date())), 60000); return () => clearInterval(t); }, []);
  const filtrados = rituais.filter(r => deQuem === 'todos' || r.resp === deQuem || r.resp === 'Ambos');
  const ag = useMemo(() => agenda(filtrados, hoje), [rituais, hoje, deQuem]);
  const gravar = (lst: Ritual[], msg: string) => save({ ...data, rituais: lst }, msg);
  const check = (r: Ritual, dia: string) => { const feito = r.feitos.some(f => f.d === dia); gravar(rituais.map(x => x.id === r.id ? marcar(x, dia, quem() || undefined) : x), feito ? 'Desmarcado' : r.nome + ' feito ✓'); };
  const feitosHoje = ag.hoje.filter(o => o.feito).length;

  const Linha = ({ o }: { o: { r: Ritual; dia: string; feito: boolean; atrasado: boolean } }) => <li className={'rit-linha' + (o.feito ? ' feito' : '') + (o.atrasado ? ' atrasado' : '')}>
    <button className="rit-check" aria-label={o.feito ? 'Desmarcar ' + o.r.nome : 'Marcar ' + o.r.nome + ' como feito'} aria-pressed={o.feito} disabled={!ready || busy} onClick={() => check(o.r, o.dia)}>{o.feito ? <Check size={18} /> : null}</button>
    <span className="rit-emoji" aria-hidden>{EMOJI_CAT[o.r.cat] || '✨'}</span>
    <span className="rit-texto"><b>{o.r.nome}</b><small>{[o.atrasado ? 'era ' + nomeDia(o.dia, hoje).toLowerCase() : '', o.r.hora ? o.r.hora : '', o.r.resp === 'Ambos' ? 'Ale e Yas' : o.r.resp, o.feito ? 'feito' + (o.r.feitos.find(f => f.d === o.dia)?.por ? ' por ' + o.r.feitos.find(f => f.d === o.dia)!.por : '') : ''].filter(Boolean).join(' · ')}</small></span>
  </li>;

  return <>
    <section className="card rit-hoje">
      <div className="section-title"><div><span className="eyebrow">RITUAIS DE HOJE · {deIso(hoje).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }).toUpperCase()}</span>
        <h2>{!ag.hoje.length && !ag.atrasados.length ? (rituais.length ? 'Nada para hoje. Aproveitem!' : 'Comecem pelos rituais da casa') : ag.hoje.length && feitosHoje === ag.hoje.length && !ag.atrasados.length ? 'Tudo feito hoje ✨' : `${ag.hoje.length - feitosHoje + ag.atrasados.length} para fazer`}</h2></div>
        <button className="primary" disabled={!ready || busy} onClick={() => setEditando({})}><Plus size={18} /> Novo ritual</button></div>
      {rituais.length > 0 && <div className="chips rit-quem" role="group" aria-label="De quem">{(['todos', 'Ale', 'Yas'] as const).map(q => <button key={q} className={deQuem === q ? 'selected' : ''} aria-pressed={deQuem === q} onClick={() => setDeQuem(q)}>{q === 'todos' ? 'De todos' : q === 'Yas' ? 'Da Yas' : 'Do Ale'}</button>)}</div>}
      {rituais.length > 0 && <div className="rit-vistas" role="tablist" aria-label="Visualização">{([['lista', 'Lista'], ['semana', 'Semana'], ['mes', 'Mês']] as const).map(([k, t]) => <button key={k} role="tab" aria-selected={vista === k} className={vista === k ? 'on' : ''} onClick={() => setVista(k)}>{t}</button>)}</div>}
      {vista !== 'lista' && rituais.length > 0 ? <RituaisCalendario rituais={filtrados} modo={vista} busy={busy || !ready} onCheck={check} onEditar={r => setEditando(r)} onNovo={(dia, hora) => setEditando({ inicio: dia, repete: 'unica', ...(hora ? { hora, dur: 60, lembretes: [30] } : { lembretes: [900] }) })} /> : <>
      {ag.hoje.length > 0 && <div className="rit-barra" aria-label={`${feitosHoje} de ${ag.hoje.length} feitos hoje`}><i style={{ width: (feitosHoje / ag.hoje.length) * 100 + '%' }} /></div>}
      {ag.atrasados.length > 0 && <><h3 className="rit-h3 atraso">Ficou para trás</h3><ul className="rit-lista">{ag.atrasados.map(o => <Linha key={o.r.id + o.dia} o={o} />)}</ul></>}
      {ag.hoje.length > 0 && <ul className="rit-lista">{ag.hoje.map(o => <Linha key={o.r.id + o.dia} o={o} />)}</ul>}
      </>}
      {!rituais.length && <><p className="muted">Tarefas que se repetem, com check e lembrete na agenda de vocês dois. Toque num modelo para começar:</p>
        <div className="chips rit-modelos">{MODELOS.map(m => <button key={m.nome} onClick={() => setEditando(m)}>{EMOJI_CAT[m.cat!]} {m.nome}</button>)}</div></>}
    </section>
    {vista === 'lista' && ag.proximos.length > 0 && <section className="card"><span className="eyebrow">PRÓXIMOS 7 DIAS</span>
      {[...new Set(ag.proximos.map(o => o.dia))].map(d => <div key={d} className="rit-dia"><h3 className="rit-h3">{nomeDia(d, hoje)}</h3><ul className="rit-lista">{ag.proximos.filter(o => o.dia === d).map(o => <Linha key={o.r.id + o.dia} o={o} />)}</ul></div>)}
    </section>}
    {rituais.length > 0 && <AgendaCard data={data} rituais={rituais} />}
    {rituais.length > 0 && <section className="card"><span className="eyebrow">TODOS OS RITUAIS</span><ul className="rit-todos">
      {[...rituais].sort((a, b) => (a.pausado ? 1 : 0) - (b.pausado ? 1 : 0) || a.nome.localeCompare(b.nome)).map(r => { const c = constancia(r, hoje), px = proxima(r, hoje); return <li key={r.id} className={r.pausado ? 'pausado' : ''}>
        <span className="rit-emoji" aria-hidden>{EMOJI_CAT[r.cat] || '✨'}</span>
        <span className="rit-texto"><b>{r.nome}</b><small>{descreverRepeticao(r)} · {r.resp === 'Ambos' ? 'Ale e Yas' : r.resp}{r.lembretes?.length ? ' · 🔔 ' + descreverLembretes(r) : ''}</small>
          <small>{r.pausado ? 'Pausado' : [px ? 'Próximo: ' + nomeDia(px, hoje).toLowerCase() : '', c.devia ? `${c.fez} de ${c.devia} nas últimas 4 semanas` : ''].filter(Boolean).join(' · ')}</small></span>
        <span className="rit-acoes">
          <a className="icon-btn" href={linkGoogleAgenda(r)} target="_blank" rel="noopener" aria-label={'Pôr ' + r.nome + ' na minha agenda'} title="Pôr na minha agenda"><CalendarPlus size={16} /></a>
          <button className="icon-btn" aria-label={(r.pausado ? 'Retomar ' : 'Pausar ') + r.nome} disabled={busy} onClick={() => gravar(rituais.map(x => x.id === r.id ? { ...x, pausado: !x.pausado || undefined } : x), r.pausado ? 'Ritual retomado' : 'Ritual pausado')}>{r.pausado ? <Play size={16} /> : <Pause size={16} />}</button>
          <button className="icon-btn" aria-label={'Editar ' + r.nome} onClick={() => setEditando(r)}><Pencil size={16} /></button>
        </span></li>; })}
    </ul></section>}
    {editando && <Form inicial={editando} busy={busy} onClose={() => setEditando(null)}
      onApagar={editando.id ? () => { if (confirm('Apagar o ritual “' + editando.nome + '”?')) gravar(rituais.filter(x => x.id !== editando.id), 'Ritual apagado').then(ok => ok && setEditando(null)); } : undefined}
      onSave={r => gravar(rituais.some(x => x.id === r.id) ? rituais.map(x => x.id === r.id ? r : x) : [...rituais, r], editando.id ? 'Ritual atualizado' : r.nome + ' criado').then(ok => { if (ok) setEditando(null); })} />}
  </>;
}

/** Agenda compartilhada: o Apps Script cria e atualiza os eventos numa agenda do Ale e convida a Yas. */
function AgendaCard({ data, rituais }: { data: any; rituais: Ritual[] }) {
  const [st, setSt] = useState<{ ligada: boolean; convidada: string } | null>(null), [rodando, setRodando] = useState(false), [msg, setMsg] = useState(''), [email, setEmail] = useState('');
  useEffect(() => { api.statusAgenda().then(r => setSt({ ligada: r.ligada, convidada: r.convidada })).catch(e => setMsg(/agenda|calendar|autoriz|permiss/i.test(e.message) ? 'A agenda ainda não foi autorizada no Google.' : '')); }, []);
  // Sincroniza sozinho quando os rituais mudam (com uma pausa, para juntar várias edições)
  const assinatura = JSON.stringify(rituais.map(r => [r.id, r.nome, r.cat, r.resp, r.repete, r.cada, r.dias, r.hora, r.dur, r.inicio, r.pausado, r.nota, r.lembretes]));
  useEffect(() => { if (!st?.ligada) return; const t = setTimeout(() => sincronizar(), 2500); return () => clearTimeout(t); }, [assinatura, st?.ligada]);
  async function sincronizar(yas?: string) {
    setRodando(true); setMsg('');
    try { const hj = iso(new Date()); const r = await api.agenda(rituais.map(x => ({ ...x, feitos: undefined, primeira: proxima(x, x.inicio > hj ? x.inicio : hj) || x.inicio })), yas); setSt({ ligada: true, convidada: r.convidada }); setMsg(`${r.eventos} ${r.eventos === 1 ? 'ritual' : 'rituais'} na agenda “${r.agenda}”` + (r.convidada ? ' · Yas convidada' : '')); }
    catch (e: any) { setMsg(/action|desconhecid/i.test(e.message) ? 'A planilha ainda não tem a parte da agenda. Ale precisa atualizar o script.' : e.message); }
    finally { setRodando(false); }
  }
  return <section className="card rit-agenda">
    <div className="rit-agenda-topo"><CalendarCheck size={22} /><div><b>Agenda de vocês dois</b><small>{st?.ligada ? 'Ligada: agenda “AleYas · Rituais”, compartilhada com ' + (st.convidada ? 'a Yas (' + st.convidada + ')' : 'o Ale') + '. Os eventos se atualizam sozinhos quando vocês mudam algo aqui.' : 'Os rituais viram eventos numa agenda compartilhada do Ale e da Yas, com lembretes no celular.'}</small></div></div>
    {st?.ligada && !st.convidada && <form className="rit-email" onSubmit={e => { e.preventDefault(); if (/^\S+@\S+\.\S+$/.test(email)) sincronizar(email.trim()); }}><input type="email" placeholder="E-mail Google para compartilhar" aria-label="E-mail Google da Yas" value={email} onChange={e => setEmail(e.target.value)} /><button className="secondary" disabled={rodando}>Compartilhar</button></form>}
    <div className="rit-agenda-acoes"><button className="secondary" disabled={rodando} onClick={() => sincronizar()}>{rodando ? <Loader2 className="spin" size={16} /> : <RefreshCw size={16} />} {st?.ligada ? 'Sincronizar agora' : 'Ligar a agenda'}</button></div>
    {msg && <p className="muted rit-msg" role="status">{msg}</p>}
    <p className="muted rit-msg"><small>Sem a agenda ligada, use o botão <CalendarPlus size={12} /> de cada ritual para pôr na sua agenda.</small></p>
  </section>;
}

function Form({ inicial, busy, onClose, onSave, onApagar }: { inicial: Partial<Ritual>; busy: boolean; onClose: () => void; onSave: (r: Ritual) => void; onApagar?: () => void }) {
  const [r, setR] = useState<Partial<Ritual>>(() => ({ cat: 'Casa', resp: 'Ambos', repete: 'semanal', inicio: iso(new Date()), feitos: [], lembretes: inicial.hora ? [30] : [900], ...inicial, dias: inicial.dias || (inicial.repete === 'semanal' || inicial.repete === 'quinzenal' || !inicial.repete ? [new Date().getDay()] : undefined) }));
  const set = (p: Partial<Ritual>) => setR(v => ({ ...v, ...p }));
  const comDias = r.repete === 'semanal' || r.repete === 'quinzenal';
  useEffect(() => { const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); addEventListener('keydown', esc); return () => removeEventListener('keydown', esc); }, []);
  function enviar(e: React.FormEvent) {
    e.preventDefault(); if (!r.nome?.trim()) return;
    const dias = comDias ? (r.dias?.length ? [...r.dias].sort() : [deIso(r.inicio!).getDay()]) : undefined;
    // Para "toda semana", o início vira o primeiro dia marcado, para a agenda começar no dia certo
    const out: Ritual = { id: r.id || 'rit-' + Date.now().toString(36), nome: r.nome.trim().slice(0, 80), cat: r.cat || 'Casa', resp: r.resp || 'Ambos', repete: r.repete || 'semanal', inicio: r.inicio || iso(new Date()), feitos: r.feitos || [],
      ...(r.repete === 'dias' ? { cada: Math.max(1, Math.min(365, r.cada || 2)) } : {}), ...(dias ? { dias } : {}), ...(r.hora ? { hora: r.hora, dur: r.dur || 60 } : {}), ...(r.lembretes?.length ? { lembretes: r.lembretes.filter(m => (r.hora ? LEMBRETES_HORA : LEMBRETES_DIA).some(o => o[0] === m)).slice(0, 3) } : {}), ...(r.pausado ? { pausado: true } : {}), ...(r.nota?.trim() ? { nota: r.nota.trim().slice(0, 300) } : {}), criado: r.criado || new Date().toISOString() };
    onSave(out);
  }
  return <div className="overlay" onClick={onClose}><section className="modal rit-form" role="dialog" aria-modal="true" aria-label="Ritual" onClick={e => e.stopPropagation()}>
    <button className="modal-close icon-btn" aria-label="Fechar" onClick={onClose}><X /></button>
    <span className="eyebrow">RITUAL</span><h2>{inicial.id ? 'Editar ritual' : 'Novo ritual'}</h2>
    <form onSubmit={enviar}>
      <label>O que é<input autoFocus maxLength={80} required placeholder="Ex.: lavar roupas" value={r.nome || ''} onChange={e => set({ nome: e.target.value })} /></label>
      <span className="rit-rot">Categoria</span><div className="chips">{CATS_RITUAL.map(c => <button type="button" key={c} className={r.cat === c ? 'selected' : ''} onClick={() => set({ cat: c })}>{EMOJI_CAT[c]} {c}</button>)}</div>
      <span className="rit-rot">Quem faz</span><div className="chips">{(['Ambos', 'Ale', 'Yas'] as const).map(p => <button type="button" key={p} className={r.resp === p ? 'selected' : ''} onClick={() => set({ resp: p })}>{p === 'Ambos' ? 'Os dois' : p}</button>)}</div>
      <span className="rit-rot">Repete</span><div className="chips">{REPETE.map(([k, t]) => <button type="button" key={k} className={r.repete === k ? 'selected' : ''} onClick={() => set({ repete: k, ...(k === 'semanal' || k === 'quinzenal' ? { dias: r.dias?.length ? r.dias : [deIso(r.inicio!).getDay()] } : {}) })}>{t}</button>)}</div>
      {comDias && <div className="rit-semana" role="group" aria-label="Dias da semana">{DIAS_SEMANA.map((d, i) => <button type="button" key={d} aria-pressed={!!r.dias?.includes(i)} className={r.dias?.includes(i) ? 'on' : ''} onClick={() => set({ dias: r.dias?.includes(i) ? r.dias.filter(x => x !== i) : [...(r.dias || []), i] })}>{d}</button>)}</div>}
      {r.repete === 'dias' && <label>A cada quantos dias<input type="number" min={1} max={365} value={r.cada || 2} onChange={e => set({ cada: +e.target.value })} /></label>}
      <div className="form-grid">
        <label>{r.repete === 'unica' ? 'Dia' : r.repete === 'mensal' ? 'Começa em (dia do mês)' : 'Começa em'}<input type="date" value={r.inicio} onChange={e => set({ inicio: e.target.value || iso(new Date()) })} /></label>
        <label>Horário (opcional)<input type="time" value={r.hora || ''} onChange={e => set({ hora: e.target.value || undefined, lembretes: e.target.value ? (r.hora ? r.lembretes : [30]) : (r.hora ? [900] : r.lembretes) })} /></label>
      </div>
      {r.hora && <label>Duração<select value={r.dur || 60} onChange={e => set({ dur: +e.target.value })}>{DURS.map(d => <option key={d} value={d}>{d < 60 ? d + ' min' : d / 60 + (d === 60 ? ' hora' : ' horas').replace('.5', ',5')}</option>)}</select></label>}
      <span className="rit-rot">Lembrete no celular (pela agenda)</span><div className="chips">{(r.hora ? LEMBRETES_HORA : LEMBRETES_DIA).map(([m, t]) => <button type="button" key={m} aria-pressed={!!r.lembretes?.includes(m)} className={r.lembretes?.includes(m) ? 'selected' : ''} onClick={() => set({ lembretes: r.lembretes?.includes(m) ? r.lembretes.filter(x => x !== m) : [...(r.lembretes || []), m].slice(-3) })}>{t}</button>)}</div>
      <label>Observação (opcional)<input maxLength={300} placeholder="Ex.: separar roupa branca" value={r.nota || ''} onChange={e => set({ nota: e.target.value })} /></label>
      {r.repete && <p className="rit-resumo"><Clock size={15} /> {descreverRepeticao(r as Ritual)}</p>}
      <button className="primary full" disabled={busy || !r.nome?.trim()}><Check size={17} /> Salvar ritual</button>
      {onApagar && <button type="button" className="text-btn perigo" onClick={onApagar}><Trash2 size={15} /> Apagar ritual</button>}
    </form>
  </section></div>;
}
