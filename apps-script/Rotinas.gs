// ---------- Rotinas automáticas: ✓ na agenda, avisos diários e relatório do mês ----------
/** Põe ✓ no título do evento do dia em que o ritual foi marcado como feito no app (e tira se desmarcar). */
function marcarFeitosNaAgenda(dados) {
  const pr = PropertiesService.getScriptProperties(), cal = agendaCal(false); if (!cal) return;
  const mapa = JSON.parse(pr.getProperty('AGENDA_MAPA') || '{}'), antes = JSON.parse(pr.getProperty('AGENDA_CHECKS') || '{}'), agora = {};
  const limite = Utilities.formatDate(new Date(Date.now() - 14 * 864e5), 'America/Sao_Paulo', 'yyyy-MM-dd');
  (dados.rituais || []).forEach(function (r) { (r.feitos || []).forEach(function (f) { if (f.d >= limite && mapa[r.id]) agora[r.id + '|' + f.d] = 1; }); });
  const mudar = Object.keys(agora).filter(function (k) { return !antes[k]; }).map(function (k) { return [k, true]; })
    .concat(Object.keys(antes).filter(function (k) { return !agora[k] && k.split('|')[1] >= limite; }).map(function (k) { return [k, false]; }));
  mudar.slice(0, 20).forEach(function (m) {
    const partes = m[0].split('|'), info = mapa[partes[0]]; if (!info) return;
    try {
      const id = String(info.ev).split('@')[0], ini = new Date(partes[1] + 'T00:00:00-03:00'), fim = new Date(ini.getTime() + 864e5);
      const inst = Calendar.Events.instances(cal.getId(), id, { timeMin: ini.toISOString(), timeMax: fim.toISOString() }).items || [];
      const alvo = inst.length ? inst : [Calendar.Events.get(cal.getId(), id)].filter(function (e) { return e && String((e.start && (e.start.date || e.start.dateTime)) || '').slice(0, 10) === partes[1]; });
      alvo.forEach(function (e) { const t = String(e.summary || '').replace(/^✓\s*/, ''); Calendar.Events.patch({ summary: (m[1] ? '✓ ' : '') + t }, cal.getId(), e.id); });
    } catch (e) { /* evento ainda não existe */ }
  });
  const salvo = {}; Object.keys(agora).forEach(function (k) { salvo[k] = 1; }); pr.setProperty('AGENDA_CHECKS', JSON.stringify(salvo));
}

/** Todo dia às 8h: rituais de hoje e atrasados, e garantias vencendo, como notificação nos celulares. */
function avisosDoDia() {
  const c = lerCasa(); if (!c.ok || !c.data) return; const d = c.data, pr = PropertiesService.getScriptProperties();
  const hoje = Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyyy-MM-dd'), msgs = [];
  const rs = (d.rituais || []).filter(function (r) { return !r.pausado; });
  const deHoje = rs.filter(function (r) { return ocorreRitual(r, hoje) && !(r.feitos || []).some(function (f) { return f.d === hoje; }); });
  const atrasados = rs.filter(function (r) { for (let i = 1; i <= 7; i++) { const dia = Utilities.formatDate(new Date(Date.now() - i * 864e5), 'America/Sao_Paulo', 'yyyy-MM-dd'); if (dia < r.inicio) return false; if (ocorreRitual(r, dia)) return r.repete !== 'diario' && !(r.feitos || []).some(function (f) { return f.d === dia; }); } return false; });
  if (deHoje.length) msgs.push('Hoje: ' + deHoje.map(function (r) { return r.nome + (r.hora ? ' ' + r.hora : '') + (r.resp !== 'Ambos' ? ' (' + r.resp + ')' : ''); }).join(', '));
  if (atrasados.length) msgs.push('Ficou para trás: ' + atrasados.map(function (r) { return r.nome; }).join(', '));
  const avisadas = JSON.parse(pr.getProperty('GARANTIAS_AVISADAS') || '{}');
  (d.casa || []).forEach(function (i) {
    if (!i.garantiaAte || i.saida || i.status !== 'temos') return; const dias = Math.round((new Date(i.garantiaAte + 'T12:00:00') - new Date(hoje + 'T12:00:00')) / 864e5);
    if (dias >= 0 && dias <= 30 && !avisadas[i.id + i.garantiaAte]) { msgs.push('Garantia de ' + i.name + ' acaba em ' + dias + ' dias'); avisadas[i.id + i.garantiaAte] = 1; }
  });
  pr.setProperty('GARANTIAS_AVISADAS', JSON.stringify(avisadas));
  if (msgs.length) pushNotificar({ texto: msgs.join(' · '), aba: 'Rituais' });
}

/** Dia 1º às 8h: resumo do mês anterior por e-mail para o Ale e a Yas. */
function relatorioMensal(forcarMes) {
  const c = lerCasa(); if (!c.ok || !c.data) return; const d = c.data;
  const agora = new Date(), ini = forcarMes instanceof Date ? forcarMes : new Date(agora.getFullYear(), agora.getMonth() - 1, 1), fim = new Date(ini.getFullYear(), ini.getMonth() + 1, 1), antIni = new Date(ini.getFullYear(), ini.getMonth() - 1, 1);
  const nomeMes = Utilities.formatDate(ini, 'America/Sao_Paulo', 'MMMM yyyy');
  const brl = function (v) { return 'R$ ' + (Math.round(v * 100) / 100).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.'); };
  const linha = function (i) { return i.lineTotal != null ? i.lineTotal : (i.price || 0) * (i.qty || 1); };
  const compras = (d.history || []).filter(function (h) { return !h.archived; }).concat((d.gastosFora || []).map(function (g) { return { date: g.data, store: g.desc || g.tipo, lugar: g.tipo, fora: true, items: [{ name: g.desc || g.tipo, cat: g.tipo === 'Farmácia' ? 'Farmácia' : 'Comida pronta', price: g.valor, qty: 1 }] }; }));
  const noPeriodo = function (a, b) { return compras.filter(function (h) { const t = new Date(h.date); return t >= a && t < b; }); };
  const mes = noPeriodo(ini, fim), ant = noPeriodo(antIni, ini);
  const soma = function (l) { return l.reduce(function (s, h) { return s + (h.items || []).reduce(function (x, i) { return x + linha(i); }, 0); }, 0); };
  const total = soma(mes), totalAnt = soma(ant), cats = {}, lugares = {}, prods = {};
  mes.forEach(function (h) { (h.items || []).forEach(function (i) { const v = linha(i); cats[i.cat || 'Outros'] = (cats[i.cat || 'Outros'] || 0) + v; const l = h.lugar || (h.fora ? 'Fora' : 'Mercado'); lugares[l] = (lugares[l] || 0) + v; prods[i.name] = (prods[i.name] || 0) + v; }); });
  const top = function (o, n) { return Object.keys(o).map(function (k) { return [k, o[k]]; }).sort(function (a, b) { return b[1] - a[1]; }).slice(0, n); };
  const orc = d.orcCat || {}; const estouros = Object.keys(orc).filter(function (k) { return orc[k] > 0 && (cats[k] || 0) > orc[k]; });
  const rituais = (d.rituais || []).map(function (r) { let devia = 0, fez = 0; for (let t = new Date(ini); t < fim; t = new Date(t.getTime() + 864e5)) { const s = Utilities.formatDate(t, 'America/Sao_Paulo', 'yyyy-MM-dd'); if (ocorreRitual(r, s)) { devia++; if ((r.feitos || []).some(function (f) { return f.d === s; })) fez++; } } return [r.nome, fez, devia]; }).filter(function (x) { return x[2] > 0; });
  const consertos = []; (d.casa || []).forEach(function (i) { (i.manutencoes || []).forEach(function (m) { const t = new Date(m.data); if (t >= ini && t < fim) consertos.push([i.name, m.texto, m.valor || 0]); }); });
  const var_ = totalAnt ? Math.round((total / totalAnt - 1) * 100) : null;
  const tab = function (linhas) { return '<table style="width:100%;border-collapse:collapse;font-size:14px">' + linhas.map(function (l) { return '<tr><td style="padding:6px 0;border-bottom:1px solid #eee">' + l[0] + '</td><td style="padding:6px 0;border-bottom:1px solid #eee;text-align:right;font-weight:bold">' + l[1] + '</td></tr>'; }).join('') + '</table>'; };
  const html = '<div style="font-family:Arial,sans-serif;max-width:560px;color:#1f3d30">' +
    '<h2 style="margin:0 0 4px">Resumo de ' + nomeMes + ' 🏡</h2><p style="color:#777;margin:0 0 16px">AleYas · a casa do Ale e da Yas</p>' +
    '<div style="background:#f3f7ee;border-radius:14px;padding:16px;margin-bottom:16px"><div style="font-size:13px;color:#555">Gasto total do mês</div><div style="font-size:28px;font-weight:bold">' + brl(total) + '</div>' +
    (var_ != null ? '<div style="font-size:13px;color:' + (var_ > 0 ? '#b91c1c' : '#2f5a1f') + '">' + (var_ > 0 ? '▲ ' : '▼ ') + Math.abs(var_) + '% em relação ao mês anterior (' + brl(totalAnt) + ')</div>' : '') + '</div>' +
    '<h3>Por categoria</h3>' + tab(top(cats, 8).map(function (x) { return [x[0] + (orc[x[0]] ? ' <span style="color:#999">(limite ' + brl(orc[x[0]]) + ')</span>' : ''), brl(x[1])]; })) +
    '<h3>Onde compraram</h3>' + tab(top(lugares, 6).map(function (x) { return [x[0], brl(x[1])]; })) +
    '<h3>O que mais pesou</h3>' + tab(top(prods, 5).map(function (x) { return [x[0], brl(x[1])]; })) +
    (estouros.length ? '<p style="background:#fde2e2;color:#991b1b;padding:10px;border-radius:10px">Passou do limite em: ' + estouros.join(', ') + '</p>' : '') +
    (rituais.length ? '<h3>Rituais da casa</h3>' + tab(rituais.map(function (x) { return [x[0], x[1] + ' de ' + x[2]]; })) : '') +
    (consertos.length ? '<h3>Consertos</h3>' + tab(consertos.map(function (x) { return [x[0] + ' · ' + x[1], x[2] ? brl(x[2]) : '—']; })) : '') +
    '<p style="margin-top:20px"><a href="' + APP_URL + '" style="background:#1f3d30;color:#f6f3ea;padding:10px 16px;border-radius:10px;text-decoration:none;font-weight:bold">Abrir o AleYas</a></p></div>';
  const para = [Session.getEffectiveUser().getEmail(), PropertiesService.getScriptProperties().getProperty('AGENDA_YAS')].filter(Boolean).join(',');
  MailApp.sendEmail({ to: para, subject: 'AleYas · resumo de ' + nomeMes, htmlBody: html, name: 'AleYas' });
}
/** Rode uma vez no editor: liga o aviso diário (8h) e o relatório do dia 1º (8h). */
function ligarRotinas() {
  ScriptApp.getProjectTriggers().filter(function (t) { return ['avisosDoDia', 'relatorioMensal'].indexOf(t.getHandlerFunction()) >= 0; }).forEach(function (t) { ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('avisosDoDia').timeBased().everyDays(1).atHour(8).inTimezone('America/Sao_Paulo').create();
  ScriptApp.newTrigger('relatorioMensal').timeBased().onMonthDay(1).atHour(8).inTimezone('America/Sao_Paulo').create();
  Logger.log('Rotinas ligadas');
}

/** Siri / Atalhos: adiciona itens na lista direto na planilha, sem abrir o app. ?action=adicionar&itens=café, 2 leite */
function adicionarRapido(p) {
  const texto = String(p.itens || p.texto || '').slice(0, 500); if (!texto.trim()) return falha('Diga o que adicionar.', 400);
  const norm = function (s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim(); };
  const nomes = texto.split(/,|;|\n| e (?=[a-zà-ú])/i).map(function (x) { return x.trim(); }).filter(Boolean).slice(0, 15);
  for (let tentativa = 0; tentativa < 3; tentativa++) {
    const c = lerCasa(); if (!c.ok || !c.data) return falha('Casa ainda vazia.', 503); const d = c.data, feitos = [];
    nomes.forEach(function (bruto) {
      const m = bruto.match(/^(\d+(?:[.,]\d+)?)\s*(kg|g|l|ml|un|pacotes?|pct)?\s*(?:de\s+)?(.+)$/i), qty = m ? Number(m[1].replace(',', '.')) : 1;
      let nome = (m ? m[3] : bruto).trim(); nome = nome.charAt(0).toUpperCase() + nome.slice(1);
      const prod = (d.catalog || []).find(function (x) { return norm(x.name) === norm(nome); }) || (d.catalog || []).find(function (x) { return norm(x.name).indexOf(norm(nome)) === 0; });
      const ja = d.items.find(function (i) { return !i.checked && norm(i.name) === norm(prod ? prod.name : nome); });
      if (ja) { ja.qty = Math.round((ja.qty + qty) * 1000) / 1000; feitos.push((prod ? prod.name : nome) + ' (+' + qty + ')'); return; }
      const unid = m && m[2] ? ({ kg: 'kg', g: 'g', l: 'L', ml: 'ml', un: 'un', pacote: 'pacote', pacotes: 'pacote', pct: 'pacote' })[m[2].toLowerCase()] : (prod ? prod.unit : 'un');
      d.items.push(Object.assign({ id: Utilities.getUuid(), name: prod ? prod.name : nome.slice(0, 80), qty: qty, unit: unid || 'un', cat: prod ? prod.cat : 'Outros', checked: false, price: null, date: null }, prod ? { catalogId: prod.id } : {}, p.quem ? { by: String(p.quem).slice(0, 20) } : {}));
      feitos.push(prod ? prod.name : nome);
    });
    const r = salvarCasa(d, c.revision);
    if (r.ok) { try { pushNotificar({ texto: feitos.join(', ') + ' na lista (Siri)', quem: p.quem || '', aba: 'Lista' }); } catch (e) { /* sem notificação */ } return { ok: true, adicionados: feitos, resposta: 'Pronto: ' + feitos.join(', ') + ' na lista do AleYas.' }; }
    if (r.code !== 409 && r.code !== 503) return r; Utilities.sleep(800);
  }
  return falha('A planilha está ocupada, tente de novo.', 503);
}
