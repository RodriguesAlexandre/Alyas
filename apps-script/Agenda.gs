// ---------- Agenda dos rituais (Google Agenda do Ale, com a Yas convidada) ----------
const AGENDA_NOME = 'AleYas · Rituais';
const AGENDA_EMOJI = { Casa: '🏠', Limpeza: '🧽', Roupas: '🧺', Cozinha: '🍳', Plantas: '🪴', Compras: '🛒', Contas: '🧾', 'Cuidado pessoal': '🫧', Outros: '✨' };
function agendaCal(criar) {
  const pr = PropertiesService.getScriptProperties(); const id = pr.getProperty('AGENDA_ID');
  let cal = null; if (id) { try { cal = CalendarApp.getCalendarById(id); } catch (e) { cal = null; } }
  if (!cal && criar) { cal = CalendarApp.createCalendar(AGENDA_NOME, { color: CalendarApp.Color.GREEN, timeZone: 'America/Sao_Paulo' }); pr.setProperty('AGENDA_ID', cal.getId()); }
  return cal;
}
function statusAgenda() {
  const pr = PropertiesService.getScriptProperties(); const cal = agendaCal(false);
  return { ok: true, ligada: !!cal, convidada: cal ? (pr.getProperty('AGENDA_YAS') || '') : '', agenda: cal ? cal.getName() : '' };
}
function apagarSerie(cal, id) { try { const s = cal.getEventSeriesById(id); if (s) { s.deleteEventSeries(); return; } } catch (e) { /* tenta como evento único */ } try { const ev = cal.getEventById(id); if (ev) ev.deleteEvent(); } catch (e) { /* já não existe */ } }
/** Compartilha a agenda (pode editar) com um e-mail. Usa o serviço avançado "Google Calendar API". */
function compartilharAgenda(cal, email) {
  try { Calendar.Acl.insert({ role: 'writer', scope: { type: 'user', value: email } }, cal.getId(), { sendNotifications: true }); return true; }
  catch (e) { if (/already|duplicate|exist/i.test(String(e))) return true; throw new Error('Não consegui compartilhar a agenda: ' + e.message); }
}
function criarSerie(cal, r, yas) {
  const DIAS = [CalendarApp.Weekday.SUNDAY, CalendarApp.Weekday.MONDAY, CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.WEDNESDAY, CalendarApp.Weekday.THURSDAY, CalendarApp.Weekday.FRIDAY, CalendarApp.Weekday.SATURDAY];
  const rec = CalendarApp.newRecurrence();
  if (r.repete === 'diario') rec.addDailyRule();
  else if (r.repete === 'dias') rec.addDailyRule().interval(Math.max(1, Math.min(365, Number(r.cada) || 1)));
  else if (r.repete === 'semanal' || r.repete === 'quinzenal') { const regra = rec.addWeeklyRule().onlyOnWeekdays((r.dias || []).filter(d => d >= 0 && d <= 6).map(d => DIAS[d])); if (r.repete === 'quinzenal') regra.interval(2); }
  else if (r.repete === 'mensal') rec.addMonthlyRule().onlyOnMonthDay(Number(String(r.inicio).slice(8, 10)));
  const p = String(r.primeira || r.inicio).split('-').map(Number);
  const titulo = ((AGENDA_EMOJI[r.cat] || '') + ' ' + String(r.nome).slice(0, 80) + (r.resp && r.resp !== 'Ambos' ? ' (' + r.resp + ')' : '')).trim();
  const opts = { description: 'Ritual do AleYas: marque como feito no app.' + (r.nota ? '\n' + String(r.nota).slice(0, 300) : '') };
  let ev;
  if (r.hora && /^\d\d:\d\d$/.test(r.hora)) {
    const hm = r.hora.split(':').map(Number); const ini = new Date(p[0], p[1] - 1, p[2], hm[0], hm[1]); const fim = new Date(ini.getTime() + Math.max(5, Math.min(720, Number(r.dur) || 60)) * 60000);
    ev = r.repete === 'unica' ? cal.createEvent(titulo, ini, fim, opts) : cal.createEventSeries(titulo, ini, fim, rec, opts);
  } else ev = r.repete === 'unica' ? cal.createAllDayEvent(titulo, new Date(p[0], p[1] - 1, p[2]), opts) : cal.createAllDayEventSeries(titulo, new Date(p[0], p[1] - 1, p[2]), rec, opts);
  // Lembretes no celular pelo próprio Google Agenda (minutos antes; nos eventos de dia inteiro, 900 = véspera às 9h)
  try { ev.removeAllReminders(); (Array.isArray(r.lembretes) ? r.lembretes : r.lembrete != null ? [r.lembrete] : []).slice(0, 3).forEach(function (m) { if (m >= 0 && m <= 40320) ev.addPopupReminder(Number(m)); }); } catch (e) { /* sem lembrete */ }
  return ev;
}
function sincronizarAgenda(p) {
  const lock = LockService.getScriptLock(); lock.waitLock(25000);
  try {
    const pr = PropertiesService.getScriptProperties();
    const cal = agendaCal(true);
    if (p.yas) { const email = String(p.yas).trim().toLowerCase(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) return falha('E-mail inválido.', 400); compartilharAgenda(cal, email); pr.setProperty('AGENDA_YAS', email); }
    const yas = pr.getProperty('AGENDA_YAS') || '';
    const mapa = JSON.parse(pr.getProperty('AGENDA_MAPA') || '{}'), vivos = {};
    const rs = Array.isArray(p.rituais) ? p.rituais.slice(0, 200) : [];
    rs.forEach(function (r) {
      if (!r || !r.id || !r.nome || r.pausado) return;
      const h = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, JSON.stringify([r.nome, r.cat, r.resp, r.repete, r.cada, r.dias, r.hora, r.dur, r.inicio, r.nota, r.lembretes]), Utilities.Charset.UTF_8));
      const id = String(r.id).slice(0, 60); vivos[id] = 1; const atual = mapa[id];
      if (atual && atual.h === h) { try { if (cal.getEventSeriesById(atual.ev) || cal.getEventById(atual.ev)) return; } catch (e) { /* recria */ } }
      if (atual) apagarSerie(cal, atual.ev);
      const ev = criarSerie(cal, r, yas); mapa[id] = { ev: ev.getId(), h: h };
    });
    Object.keys(mapa).forEach(function (id) { if (!vivos[id]) { apagarSerie(cal, mapa[id].ev); delete mapa[id]; } });
    pr.setProperty('AGENDA_MAPA', JSON.stringify(mapa));
    return { ok: true, agenda: cal.getName(), convidada: yas, eventos: Object.keys(mapa).length };
  } finally { lock.releaseLock(); }
}
/** Rode esta função uma vez no editor para autorizar o acesso à Agenda. */
function autorizarAgenda() { const cal = agendaCal(true); Calendar.CalendarList.list({ maxResults: 1 }); UrlFetchApp.fetch('https://www.google.com', { muteHttpExceptions: true }); Logger.log('Agenda pronta: ' + cal.getName()); }

// ---------- Sincronia automática (gatilho a cada 1 minuto) ----------
function ocorreRitual(r, dia) {
  if (r.pausado || dia < r.inicio) return false;
  const d = new Date(dia + 'T12:00:00'), ini = new Date(r.inicio + 'T12:00:00'), dif = Math.round((d - ini) / 864e5);
  const dias = r.dias && r.dias.length ? r.dias : [ini.getDay()];
  switch (r.repete) {
    case 'unica': return dia === r.inicio;
    case 'diario': return true;
    case 'dias': return dif % Math.max(1, r.cada || 1) === 0;
    case 'semanal': return dias.indexOf(d.getDay()) >= 0;
    case 'quinzenal': { if (dias.indexOf(d.getDay()) < 0) return false; const dom = new Date(ini.getTime() - ini.getDay() * 864e5); return Math.floor(Math.round((d - dom) / 864e5) / 7) % 2 === 0; }
    case 'mensal': { const ult = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(); return d.getDate() === Math.min(ini.getDate(), ult); }
  }
  return false;
}
function proximaRitual(r, hoje) {
  const base = new Date((r.inicio > hoje ? r.inicio : hoje) + 'T12:00:00');
  for (let i = 0; i < 400; i++) { const s = Utilities.formatDate(new Date(base.getTime() + i * 864e5), 'America/Sao_Paulo', 'yyyy-MM-dd'); if (ocorreRitual(r, s)) return s; }
  return r.inicio;
}
/** Roda sozinho a cada minuto: se algo mudou na planilha, leva os rituais para a agenda. A cada 30 min confere tudo (refaz eventos apagados). */
function sincronizarAgendaAuto() {
  const pr = PropertiesService.getScriptProperties(); if (!pr.getProperty('AGENDA_ID')) return;
  const rev = String(revisao()), conferir = new Date().getMinutes() % 30 === 0;
  if (pr.getProperty('AGENDA_REV') === rev && !conferir) return;
  const c = lerCasa(); if (!c.ok || !c.data) return;
  const hoje = Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyyy-MM-dd');
  const rs = (c.data.rituais || []).map(function (r) { const x = JSON.parse(JSON.stringify(r)); delete x.feitos; x.primeira = proximaRitual(r, hoje); return x; });
  sincronizarAgenda({ rituais: rs }); try { marcarFeitosNaAgenda(c.data); } catch (e) { /* segue */ } pr.setProperty('AGENDA_REV', rev);
}
/** Rode uma vez no editor: liga o gatilho de 1 em 1 minuto. */
function ligarSincroniaAgenda() {
  ScriptApp.getProjectTriggers().filter(function (t) { return t.getHandlerFunction() === 'sincronizarAgendaAuto'; }).forEach(function (t) { ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('sincronizarAgendaAuto').timeBased().everyMinutes(1).create(); sincronizarAgendaAuto(); Logger.log('Sincronia automática ligada');
}
