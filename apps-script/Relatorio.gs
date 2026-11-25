// ---------- Relatório do mês (e-mail em formato de painel, com a identidade do AleYas) ----------
// Tudo em tabelas e estilos inline: é o que funciona no Gmail, no Apple Mail e no Outlook.
const REL_CORES = { Hortifruti: '#7d9c5a', 'Proteínas': '#d9714a', 'Laticínios': '#e8b84f', Mercearia: '#1f3d30', Bebidas: '#5b8fa8', Limpeza: '#9b7bb5', Higiene: '#c97a9a', Utilidades: '#8a8f80', 'Casa e bem-estar': '#b0789b', 'Comida pronta': '#e0662e', 'Farmácia': '#3fa7a0', Outros: '#b9b29f' };
const REL_LUGAR = { Supermercado: '#1f3d30', 'Sacolão': '#7d9c5a', 'Açougue': '#d9714a', Outros: '#b9b29f', 'iFood/delivery': '#e0662e', Padaria: '#e8b84f', Restaurante: '#c97a9a', 'Farmácia': '#3fa7a0', 'Outros fora': '#8a8f80' };
const REL_MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

function montarRelatorio(d, ini, fim, op) {
  op = op || {}; const fmtDia = op.fmtDia, appUrl = op.appUrl || 'https://rodriguesalexandre.github.io/Alyas/';
  const F = "font-family:Manrope,'DM Sans',-apple-system,'Segoe UI',Roboto,Arial,sans-serif;";
  const brl = function (v, cent) { const n = Math.round(v * 100) / 100, s = (cent === false ? Math.round(n).toString() : n.toFixed(2)).split('.'); return 'R$ ' + s[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (s[1] ? ',' + s[1] : ''); };
  const pct = function (v) { return Math.round(v * 100) + '%'; };
  const esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  const linha = function (i) { return i.lineTotal != null ? Number(i.lineTotal) : (Number(i.price) || 0) * (Number(i.qty) || 1); };
  const LUG_AUTO = function (h) { const s = String(h.store || '').toLowerCase(); return h.lugar || (/a[çc]ougue|carnes|frigor/.test(s) ? 'Açougue' : /sacol|hortifr|feira/.test(s) ? 'Sacolão' : 'Supermercado'); };
  const compras = (d.history || []).filter(function (h) { return !h.archived && h.date; }).map(function (h) { return { date: h.date, lugar: LUG_AUTO(h), fora: false, items: h.items || [] }; })
    .concat((d.gastosFora || []).map(function (g) { return { date: g.data, lugar: g.tipo, fora: true, items: [{ name: g.desc || g.tipo, cat: g.tipo === 'Farmácia' ? 'Farmácia' : g.tipo === 'Outros fora' ? 'Outros' : 'Comida pronta', price: g.valor, qty: 1 }] }; }));
  const entre = function (a, b) { return compras.filter(function (h) { const t = new Date(h.date); return t >= a && t < b; }); };
  const antIni = new Date(ini.getFullYear(), ini.getMonth() - 1, 1);
  const mes = entre(ini, fim), ant = entre(antIni, ini);
  const soma = function (l) { return l.reduce(function (s, h) { return s + h.items.reduce(function (x, i) { return x + linha(i); }, 0); }, 0); };
  const total = soma(mes), totalAnt = soma(ant), idas = mes.filter(function (h) { return !h.fora; }).length;
  const cats = {}, catsAnt = {}, lugares = {}, prods = {}, semanas = [0, 0, 0, 0, 0];
  const NAO_COMIDA = { Limpeza: 1, Higiene: 1, Utilidades: 1, 'Casa e bem-estar': 1, 'Farmácia': 1, Outros: 1 }; let comidaMerc = 0, comidaFora = 0;
  mes.forEach(function (h) { const sem = Math.min(4, Math.floor((new Date(h.date).getDate() - 1) / 7)); h.items.forEach(function (i) { const v = linha(i), c = i.cat || 'Outros'; cats[c] = (cats[c] || 0) + v; lugares[h.lugar] = (lugares[h.lugar] || 0) + v; prods[i.name] = (prods[i.name] || 0) + v; semanas[sem] += v; if (!NAO_COMIDA[c]) { if (h.fora) comidaFora += v; else comidaMerc += v; } }); });
  ant.forEach(function (h) { h.items.forEach(function (i) { const c = i.cat || 'Outros'; catsAnt[c] = (catsAnt[c] || 0) + linha(i); }); });
  const ordena = function (o) { return Object.keys(o).map(function (k) { return [k, o[k]]; }).filter(function (x) { return x[1] > 0.004; }).sort(function (a, b) { return b[1] - a[1]; }); };
  const orc = d.orcCat || {}, nomeMes = REL_MESES[ini.getMonth()], ano = ini.getFullYear();
  const variacao = totalAnt > 0 ? total / totalAnt - 1 : null;
  // rituais e consertos do mês
  const rituais = (d.rituais || []).map(function (r) { let devia = 0, fez = 0; for (let t = new Date(ini); t < fim; t = new Date(t.getTime() + 864e5)) { const s = fmtDia(t); if (ocorreRitual(r, s)) { devia++; if ((r.feitos || []).some(function (f) { return f.d === s; })) fez++; } } return { nome: r.nome, cat: r.cat, fez: fez, devia: devia }; }).filter(function (x) { return x.devia > 0; });
  const ritFez = rituais.reduce(function (a, r) { return a + r.fez; }, 0), ritDevia = rituais.reduce(function (a, r) { return a + r.devia; }, 0);
  const consertos = []; (d.casa || []).forEach(function (i) { (i.manutencoes || []).forEach(function (m) { const t = new Date(m.data); if (t >= ini && t < fim) consertos.push({ item: i.name, texto: m.texto, valor: m.valor || 0 }); }); });
  const comprasCasa = (d.casa || []).filter(function (i) { return i.status === 'temos' && i.dataCompra && new Date(i.dataCompra + 'T12:00:00') >= ini && new Date(i.dataCompra + 'T12:00:00') < fim; });
  // insights automáticos
  const insights = [];
  if (variacao != null) insights.push(variacao > 0.05 ? ['▲', '#b91c1c', 'Gastaram ' + pct(variacao) + ' a mais que em ' + REL_MESES[antIni.getMonth()] + ' (' + brl(total - totalAnt) + ').'] : variacao < -0.05 ? ['▼', '#2f6b2f', 'Economizaram ' + pct(-variacao) + ' em relação a ' + REL_MESES[antIni.getMonth()] + ' (' + brl(totalAnt - total) + ' a menos).'] : ['=', '#1f3d30', 'Gasto estável em relação a ' + REL_MESES[antIni.getMonth()] + '.']);
  const subiu = ordena(cats).map(function (x) { return [x[0], x[1] - (catsAnt[x[0]] || 0)]; }).filter(function (x) { return catsAnt[x[0]] && x[1] > 20; }).sort(function (a, b) { return b[1] - a[1]; })[0];
  if (subiu) insights.push(['●', REL_CORES[subiu[0]] || '#1f3d30', subiu[0] + ' foi o que mais subiu: +' + brl(subiu[1]) + ' no mês.']);
  Object.keys(orc).forEach(function (k) { if (orc[k] > 0 && (cats[k] || 0) > orc[k]) insights.push(['!', '#b91c1c', k + ' passou do limite: ' + brl(cats[k]) + ' de ' + brl(orc[k]) + '.']); });
  if (comidaFora > 0 && comidaMerc + comidaFora > 0) insights.push(['●', '#e0662e', pct(comidaFora / (comidaMerc + comidaFora)) + ' da comida veio de fora de casa (' + brl(comidaFora) + ').']);
  if (ritDevia) insights.push(['✓', '#2f6b2f', 'Rituais da casa: ' + ritFez + ' de ' + ritDevia + ' feitos (' + pct(ritFez / ritDevia) + ').']);

  // ---------- blocos visuais ----------
  const card = function (inner, pad) { return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e6e0d0;border-radius:18px;margin:0 0 14px"><tr><td style="padding:' + (pad || '20px 22px') + ';' + F + '">' + inner + '</td></tr></table>'; };
  const titulo = function (eyebrow, t) { return '<div style="' + F + 'font-size:11px;font-weight:800;letter-spacing:1.4px;color:#8a9a7a;text-transform:uppercase;margin:0 0 4px">' + eyebrow + '</div><div style="' + F + 'font-size:19px;font-weight:800;color:#1f3d30;margin:0 0 14px">' + t + '</div>'; };
  const kpi = function (rot, valor, sub, cor, fundo) { return '<td width="33%" valign="top" style="padding:4px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' + (fundo || '#f3f6ee') + ';border-radius:14px"><tr><td style="padding:14px 14px 12px;' + F + '"><div style="font-size:11px;color:#6c7a62;font-weight:700">' + rot + '</div><div style="font-size:21px;font-weight:800;color:' + (cor || '#1f3d30') + ';margin:4px 0 2px;white-space:nowrap">' + valor + '</div><div style="font-size:11px;color:#7d8577">' + (sub || '&nbsp;') + '</div></td></tr></table></td>'; };
  const barra = function (rot, v, max, cor, extra, limite) {
    const w = max > 0 ? Math.max(2, Math.round(v / max * 100)) : 0;
    return '<tr><td style="padding:6px 0;' + F + '"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="font-size:13px;color:#1f3d30;font-weight:700"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:' + cor + ';margin-right:6px"></span>' + esc(rot) + (extra ? ' <span style="color:#8a8f80;font-weight:500;font-size:11px">' + extra + '</span>' : '') + '</td><td align="right" style="font-size:13px;font-weight:800;color:#1f3d30;white-space:nowrap">' + brl(v) + '</td></tr>' +
      '<tr><td colspan="2" style="padding-top:5px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef0e8;border-radius:6px"><tr><td width="' + w + '%" style="background:' + (limite && v > limite ? '#dc2626' : cor) + ';height:8px;border-radius:6px;font-size:0;line-height:0">&nbsp;</td><td style="font-size:0;line-height:0">&nbsp;</td></tr></table></td></tr></table></td></tr>';
  };
  const catsOrd = ordena(cats), maxCat = catsOrd.length ? catsOrd[0][1] : 0;
  const lugOrd = ordena(lugares);
  const semMax = Math.max.apply(null, semanas.concat([1])), nSem = Math.ceil(new Date(fim.getTime() - 864e5).getDate() / 7);
  const colunas = semanas.slice(0, nSem).map(function (v, k) { const h = Math.max(4, Math.round(v / semMax * 110)); return '<td valign="bottom" align="center" style="padding:0 6px;' + F + '"><div style="font-size:11px;font-weight:800;color:#1f3d30;margin-bottom:4px;white-space:nowrap">' + (v ? brl(v, false) : '–') + '</div><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="height:' + h + 'px;background:' + (v === semMax ? '#d9714a' : '#7d9c5a') + ';border-radius:8px 8px 3px 3px;font-size:0;line-height:0">&nbsp;</td></tr></table><div style="font-size:11px;color:#7d8577;margin-top:6px">' + (k * 7 + 1) + '–' + Math.min((k + 1) * 7, new Date(fim.getTime() - 864e5).getDate()) + '</div></td>'; }).join('');
  const pilha = lugOrd.map(function (x) { return '<td width="' + Math.max(1, Math.round(x[1] / total * 100)) + '%" style="background:' + (REL_LUGAR[x[0]] || '#b9b29f') + ';height:14px;font-size:0;line-height:0">&nbsp;</td>'; }).join('');
  const legLug = lugOrd.map(function (x) { return '<tr><td style="padding:4px 0;font-size:13px;' + F + 'color:#1f3d30"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:' + (REL_LUGAR[x[0]] || '#b9b29f') + ';margin-right:7px"></span>' + esc(x[0]) + '</td><td align="right" style="font-size:13px;' + F + 'color:#7d8577">' + pct(x[1] / total) + '</td><td align="right" width="90" style="font-size:13px;font-weight:800;' + F + 'color:#1f3d30">' + brl(x[1]) + '</td></tr>'; }).join('');
  const topProd = ordena(prods).slice(0, 5).map(function (x, k) { return '<tr><td width="26" style="padding:7px 0;' + F + 'font-size:12px;font-weight:800;color:#ffffff"><div style="width:20px;height:20px;line-height:20px;border-radius:50%;background:' + (k === 0 ? '#d9714a' : '#1f3d30') + ';text-align:center">' + (k + 1) + '</div></td><td style="padding:7px 0;' + F + 'font-size:14px;color:#1f3d30">' + esc(x[0]) + '</td><td align="right" style="padding:7px 0;' + F + 'font-size:14px;font-weight:800;color:#1f3d30">' + brl(x[1]) + '</td></tr>'; }).join('');
  const ritHtml = rituais.map(function (r) { const p = r.devia ? r.fez / r.devia : 0; return '<tr><td style="padding:6px 0;' + F + 'font-size:13px;color:#1f3d30;font-weight:700">' + esc(r.nome) + '</td><td align="right" style="' + F + 'font-size:12px;color:#7d8577;white-space:nowrap">' + r.fez + ' de ' + r.devia + '</td></tr><tr><td colspan="2"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef0e8;border-radius:6px"><tr><td width="' + Math.max(2, Math.round(p * 100)) + '%" style="background:' + (p >= .8 ? '#5d7f3f' : p >= .5 ? '#e8b84f' : '#d9714a') + ';height:7px;border-radius:6px;font-size:0;line-height:0">&nbsp;</td><td style="font-size:0">&nbsp;</td></tr></table></td></tr>'; }).join('');
  const consHtml = consertos.map(function (c) { return '<tr><td style="padding:7px 0;border-bottom:1px solid #f0ece2;' + F + 'font-size:13px;color:#1f3d30"><b>' + esc(c.item) + '</b><br><span style="color:#7d8577">' + esc(c.texto) + '</span></td><td align="right" style="border-bottom:1px solid #f0ece2;' + F + 'font-size:13px;font-weight:800;color:#1f3d30">' + (c.valor ? brl(c.valor) : '—') + '</td></tr>'; }).join('');

  const corpo =
    // cabeçalho
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1f3d30;border-radius:22px;margin:0 0 14px"><tr><td style="padding:26px 24px 24px;' + F + '">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td><img src="' + appUrl + 'icon-192.png" width="40" height="40" alt="AleYas" style="display:block;border-radius:11px;border:0"></td><td align="right" style="' + F + 'font-size:11px;font-weight:800;letter-spacing:1.6px;color:#c9d8b0;text-transform:uppercase">Relatório do mês' + (op.teste ? ' · teste' : '') + '</td></tr></table>' +
    '<div style="' + F + 'font-size:13px;color:#c9d8b0;margin:20px 0 2px">A casa do Ale e da Yas</div>' +
    '<div style="' + F + 'font-size:30px;line-height:1.15;font-weight:800;color:#f6f3ea">' + nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1) + ' de ' + ano + '</div>' +
    '<div style="' + F + 'font-size:15px;color:#e6ecd9;margin-top:16px">Gasto total</div><div style="' + F + 'font-size:40px;font-weight:800;color:#ffffff;letter-spacing:-1px">' + brl(total) + '</div>' +
    (variacao != null ? '<div style="' + F + 'display:inline-block;margin-top:6px;padding:5px 11px;border-radius:999px;font-size:12px;font-weight:800;background:' + (variacao > 0 ? '#5c2a1e' : '#2f5a2a') + ';color:' + (variacao > 0 ? '#ffb59c' : '#c7f0b0') + '">' + (variacao > 0 ? '▲ ' : '▼ ') + pct(Math.abs(variacao)) + ' vs ' + REL_MESES[antIni.getMonth()] + ' (' + brl(totalAnt) + ')</div>' : '') +
    (op.parcial ? '<div style="' + F + 'font-size:12px;color:#c9d8b0;margin-top:10px">Parcial: dados até hoje, ' + op.parcial + '.</div>' : '') +
    '</td></tr></table>' +
    // KPIs
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 10px"><tr>' +
    kpi('Idas às compras', String(idas), idas ? 'média ' + brl(soma(mes.filter(function (h) { return !h.fora; })) / idas) : '') +
    kpi('Comida', brl(comidaMerc + comidaFora, false), comidaFora ? 'fora de casa: ' + brl(comidaFora, false) : 'tudo do mercado', '#1f3d30', '#fdf3e8') +
    kpi('Rituais', ritDevia ? pct(ritFez / ritDevia) : '—', ritDevia ? ritFez + ' de ' + ritDevia + ' feitos' : 'nenhum no mês', ritDevia && ritFez / ritDevia >= .8 ? '#2f6b2f' : '#1f3d30', '#eef4f7') +
    '</tr></table>' +
    // insights
    (insights.length ? card(titulo('Em resumo', 'O que chamou atenção') + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' + insights.map(function (x) { return '<tr><td width="28" valign="top" style="padding:6px 0"><div style="width:22px;height:22px;line-height:22px;border-radius:50%;background:' + x[1] + ';color:#fff;text-align:center;font-size:11px;font-weight:800;' + F + '">' + x[0] + '</div></td><td style="padding:6px 0 6px 6px;' + F + 'font-size:14px;line-height:1.45;color:#1f3d30">' + esc(x[2]) + '</td></tr>'; }).join('') + '</table>') : '') +
    // semanas
    (total ? card(titulo('Ritmo', 'Gasto por semana') + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="height:150px"><tr>' + colunas + '</tr></table>') : '') +
    // categorias
    (catsOrd.length ? card(titulo('Para onde foi', 'Gastos por categoria') + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' + catsOrd.slice(0, 9).map(function (x) { return barra(x[0], x[1], maxCat, REL_CORES[x[0]] || '#b9b29f', orc[x[0]] ? 'limite ' + brl(orc[x[0]], false) : (catsAnt[x[0]] ? (x[1] >= catsAnt[x[0]] ? '▲ ' : '▼ ') + brl(Math.abs(x[1] - catsAnt[x[0]]), false) : ''), orc[x[0]]); }).join('') + '</table>') : '') +
    // lugares
    (lugOrd.length ? card(titulo('Onde', 'Onde vocês compraram') + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;margin-bottom:12px"><tr>' + pilha + '</tr></table><table role="presentation" width="100%" cellpadding="0" cellspacing="0">' + legLug + '</table>') : '') +
    // top produtos
    (topProd ? card(titulo('Top 5', 'O que mais pesou no bolso') + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' + topProd + '</table>') : '') +
    // rituais
    (ritHtml ? card(titulo('Rituais da casa', ritFez + ' de ' + ritDevia + ' feitos no mês') + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' + ritHtml + '</table>') : '') +
    // casa
    (consHtml || comprasCasa.length ? card(titulo('Casa', 'Consertos e novidades') + (consHtml ? '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' + consHtml + '</table>' : '') + (comprasCasa.length ? '<div style="' + F + 'font-size:13px;color:#1f3d30;margin-top:10px"><b>Chegou em casa:</b> ' + comprasCasa.map(function (i) { return esc(i.name) + (i.preco ? ' (' + brl(i.preco) + ')' : ''); }).join(', ') + '</div>' : '')) : '') +
    // botão
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:18px 0 8px"><tr><td align="center"><a href="' + appUrl + '" style="' + F + 'display:inline-block;background:#1f3d30;color:#f6f3ea;padding:14px 26px;border-radius:14px;text-decoration:none;font-weight:800;font-size:15px">Abrir o AleYas →</a></td></tr></table>' +
    '<div style="' + F + 'text-align:center;font-size:11px;color:#9aa38f;margin:14px 0 4px">Pequenos hábitos, uma casa mais leve. 🌿<br>Enviado pelo AleYas todo dia 1º.</div>';
  return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head><body style="margin:0;padding:0;background:#f6f3ea">' +
    '<div style="display:none;max-height:0;overflow:hidden">' + nomeMes + ': ' + brl(total) + (variacao != null ? ' (' + (variacao > 0 ? '+' : '−') + pct(Math.abs(variacao)) + ')' : '') + ' · ' + (insights[1] ? insights[1][2] : '') + '</div>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f3ea"><tr><td align="center" style="padding:18px 10px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px"><tr><td>' + corpo + '</td></tr></table></td></tr></table></body></html>';
}

/** Dia 1º às 8h (gatilho): resumo do mês anterior. relatorioTeste() manda o mês atual, parcial. */
function relatorioMensal(e, teste) {
  const c = lerCasa(); if (!c.ok || !c.data) return;
  const agora = new Date(), ini = teste ? new Date(agora.getFullYear(), agora.getMonth(), 1) : new Date(agora.getFullYear(), agora.getMonth() - 1, 1);
  const fim = teste ? new Date(agora.getFullYear(), agora.getMonth() + 1, 1) : new Date(agora.getFullYear(), agora.getMonth(), 1);
  const html = montarRelatorio(c.data, ini, fim, { fmtDia: function (t) { return Utilities.formatDate(t, 'America/Sao_Paulo', 'yyyy-MM-dd'); }, appUrl: APP_URL, teste: !!teste, parcial: teste ? Utilities.formatDate(agora, 'America/Sao_Paulo', 'dd/MM') : '' });
  const para = [Session.getEffectiveUser().getEmail(), PropertiesService.getScriptProperties().getProperty('AGENDA_YAS')].filter(Boolean).join(',');
  MailApp.sendEmail({ to: para, subject: (teste ? '[Teste] ' : '') + 'AleYas · ' + REL_MESES[ini.getMonth()] + ' de ' + ini.getFullYear() + ' em números', htmlBody: html, name: 'AleYas' });
  return para;
}
function relatorioTeste() { Logger.log('Enviado para ' + relatorioMensal(null, true)); }
