/**
 * ALYAS · servidor da planilha (Google Apps Script)
 * ------------------------------------------------------------
 * Este script transforma a planilha do Google no banco de dados do app.
 *
 * Como instalar (passo a passo completo no README do repositório):
 *  1. Crie uma planilha nova no Google Sheets chamada "Alyas".
 *  2. Extensões → Apps Script. Apague o conteúdo e cole este arquivo inteiro.
 *  3. Selecione a função "configurar" e clique em Executar (autorize com sua conta).
 *  4. Implantar → Nova implantação → tipo "App da Web":
 *       Executar como: Eu  ·  Quem pode acessar: Qualquer pessoa  → Implantar.
 *  5. Selecione a função "enviarLink" e clique em Executar.
 *     Você recebe por e-mail o link do app já conectado à planilha.
 *
 * As abas "Lista de compras", "Nossos produtos", "Despensa", "Compras",
 * "Itens comprados", "Cardápio" e "Perfis" são espelhos para consulta:
 * são reescritas pelo app. Para editar, use o app.
 */

const APP_URL = 'https://rodriguesalexandre.github.io/Alyas/';
// E-mails extras que também recebem o link ao rodar enviarLink (ex.: 'fulana@gmail.com').
const EMAILS_EXTRAS = [];

const ABA_ESTADO = '_estado';
const PEDACO = 45000; // limite seguro por célula (máx. do Sheets: 50.000 caracteres)
const LIMITE_JSON = 2000000;
const OFERTAS_URL = 'https://superbh.app/site-api/api/mov-oferta/vigente?value=BELO+HORIZONTE%40MG&text=Belo+Horizonte+-+%28MG%29';

// Notas antigas (preenchido apenas na sua cópia privada; o repositório público fica vazio).
var NOTAS_SEED = typeof NOTAS_SEED !== 'undefined' ? NOTAS_SEED : [];

// ---------------- Instalação ----------------

function configurar() {
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty('CHAVE')) props.setProperty('CHAVE', Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().slice(0, 8));
  if (!props.getProperty('REV')) props.setProperty('REV', '0');
  const ss = SpreadsheetApp.getActive();
  let est = ss.getSheetByName(ABA_ESTADO);
  if (!est) { est = ss.insertSheet(ABA_ESTADO); est.getRange('A1:C1').setValues([['revisao', 'pedacos', 'Não edite esta aba: é o banco de dados do app.']]); est.getRange('A2').setValue(0); est.hideSheet(); }
  ESPELHOS.forEach(function (m) { garantirAba(m.aba, m.cab); });
  const padrao = ss.getSheetByName('Página1') || ss.getSheetByName('Sheet1');
  if (padrao && ss.getSheets().length > 1 && padrao.getLastRow() === 0) ss.deleteSheet(padrao);
  Logger.log('Pronto! Agora implante como App da Web e depois rode enviarLink.');
}

function enviarLink() {
  const url = ScriptApp.getService().getUrl();
  if (!url) throw new Error('Implante primeiro: Implantar → Nova implantação → App da Web.');
  const chave = PropertiesService.getScriptProperties().getProperty('CHAVE');
  if (!chave) throw new Error('Rode a função configurar antes.');
  const token = Utilities.base64EncodeWebSafe(url + '|' + chave, Utilities.Charset.UTF_8).replace(/=+$/, '');
  const link = APP_URL + '#conectar=' + token;
  const para = [Session.getEffectiveUser().getEmail()].concat(EMAILS_EXTRAS).filter(String).join(',');
  const html = '<div style="font-family:Arial,sans-serif;max-width:520px;color:#1f3d30">' +
    '<h2 style="margin:0 0 8px">Alyas está pronto 🏡</h2>' +
    '<p>Abra este link <b>em cada aparelho</b> (celular e PC). Ele conecta o app à planilha de vocês e fica salvo no aparelho.</p>' +
    '<p><a href="' + link + '" style="display:inline-block;background:#1f3d30;color:#f6f3ea;padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:bold">Abrir o Alyas</a></p>' +
    '<p style="font-size:13px">No celular: depois de abrir, use “Adicionar à tela de início” para ter o ícone do app.</p>' +
    '<p style="font-size:12px;color:#777">Não encaminhe este e-mail: o link dá acesso à lista de vocês. Endereço do app: ' + APP_URL + '</p></div>';
  MailApp.sendEmail({ to: para, subject: 'Seu link do Alyas', htmlBody: html, body: 'Abra o Alyas: ' + link });
  Logger.log('Link enviado para ' + para + ':\n' + link);
}

/** Gera uma chave nova (o link antigo deixa de funcionar). Depois rode enviarLink. */
function trocarChave() {
  PropertiesService.getScriptProperties().deleteProperty('CHAVE');
  configurar();
}

// ---------------- API ----------------

function doGet(e) { return responder(function () { return tratar(e.parameter || {}); }); }
function doPost(e) {
  return responder(function () {
    let body;
    try { body = JSON.parse(e.postData.contents); } catch (err) { return falha('Dados inválidos.', 400); }
    return tratar(body);
  });
}

function tratar(p) {
  const chave = PropertiesService.getScriptProperties().getProperty('CHAVE');
  if (!chave) return falha('Planilha ainda não configurada. Rode a função configurar.', 503);
  if (!p.key || String(p.key) !== chave) return falha('Chave da casa inválida. Abra de novo o link do e-mail.', 403);
  switch (p.action) {
    case 'rev': return { ok: true, revision: revisao() };
    case 'house': return lerCasa();
    case 'save': return salvarCasa(p.data, p.revision);
    case 'offers': return ofertas();
    case 'receipts': return { ok: true, notes: NOTAS_SEED };
    default: return falha('Ação desconhecida.', 400);
  }
}

function responder(fn) {
  let out;
  try { out = fn(); } catch (err) { out = falha('Erro na planilha: ' + (err && err.message ? err.message : err), 500); }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}
function falha(msg, code) { return { ok: false, error: msg, code: code }; }
function revisao() { return Number(PropertiesService.getScriptProperties().getProperty('REV') || 0); }

function lerCasa() {
  const sh = SpreadsheetApp.getActive().getSheetByName(ABA_ESTADO);
  if (!sh) return falha('Rode a função configurar.', 503);
  const n = Number(sh.getRange('B2').getValue() || 0);
  if (!n) return { ok: true, data: null, revision: revisao() };
  const partes = sh.getRange(3, 1, n, 1).getValues().map(function (r) { return r[0]; }).join('');
  return { ok: true, data: JSON.parse(partes), revision: revisao() };
}

function salvarCasa(data, rev) {
  if (!data || typeof data !== 'object' || !Array.isArray(data.items) || !Array.isArray(data.pantry) || !Array.isArray(data.history)) return falha('Dados da casa inválidos.', 400);
  if (typeof rev !== 'number' || rev < 0) return falha('Revisão inválida.', 400);
  const json = JSON.stringify(data);
  if (json.length > LIMITE_JSON) return falha('Limite de dados excedido.', 413);
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(15000)) return falha('A planilha está ocupada. Tentando de novo…', 503);
  try {
    const atual = revisao();
    if (rev !== atual) return falha('A casa foi atualizada em outro aparelho.', 409);
    const sh = SpreadsheetApp.getActive().getSheetByName(ABA_ESTADO);
    const partes = [];
    for (let i = 0; i < json.length; i += PEDACO) partes.push([json.slice(i, i + PEDACO)]);
    const antigo = Number(sh.getRange('B2').getValue() || 0);
    sh.getRange(3, 1, partes.length, 1).setNumberFormat('@').setValues(partes);
    if (antigo > partes.length) sh.getRange(3 + partes.length, 1, antigo - partes.length, 1).clearContent();
    const nova = atual + 1;
    sh.getRange('A2:B2').setValues([[nova, partes.length]]);
    SpreadsheetApp.flush();
    PropertiesService.getScriptProperties().setProperty('REV', String(nova));
    try { espelhar(data); } catch (err) { console.warn('Espelho não atualizado: ' + err); }
    return { ok: true, revision: nova };
  } finally { lock.releaseLock(); }
}

function ofertas() {
  const cache = CacheService.getScriptCache();
  const salvo = cache.get('ofertas');
  if (salvo) return JSON.parse(salvo);
  const source = 'https://www.supermercadosbh.com.br/';
  try {
    const resp = UrlFetchApp.fetch(OFERTAS_URL, { muteHttpExceptions: true, headers: { Accept: 'application/json' } });
    if (resp.getResponseCode() !== 200) throw new Error('Fonte indisponível');
    const json = JSON.parse(resp.getContentText()), d = json.data;
    if (!json.isValid) throw new Error('Resposta inválida');
    if (!d) return { ok: true, offers: [], checkedAt: new Date().toISOString(), source: source, message: 'O BH não retornou ofertas vigentes para Belo Horizonte.' };
    if (d.municipioNome !== 'BELO HORIZONTE' || d.estadoNome !== 'MINAS GERAIS' || !Array.isArray(d.produtoOfertas)) throw new Error('Região não confirmada');
    const ini = Date.parse(d.dataVigenciaInicio), fim = Date.parse(d.dataVigenciaFim), agora = Date.now();
    const ativo = agora >= ini && agora <= fim;
    const value = {
      ok: true, source: source, checkedAt: new Date().toISOString(), validFrom: d.dataVigenciaInicio, validUntil: d.dataVigenciaFim,
      region: 'Belo Horizonte · Minas Gerais', title: d.titulo,
      message: ativo ? 'Ofertas regionais publicadas pelo BH. Confira as condições e o estoque na loja.' : 'A fonte não retornou ofertas dentro da validade.',
      offers: ativo ? d.produtoOfertas.filter(function (p) { return typeof p.titulo === 'string' && isFinite(p.precoPor) && p.precoPor > 0; }).map(function (p, i) {
        return { id: d.id + '-' + i, name: p.titulo, price: p.precoPor, conditions: p.textoAlternativo || '', unit: (/\bkg\b(?!.*\d)/i.test(p.titulo) && !/\d\s*kg/i.test(p.titulo)) ? 'kg' : 'un', validUntil: d.dataVigenciaFim };
      }) : []
    };
    const txt = JSON.stringify(value);
    if (txt.length < 90000) cache.put('ofertas', txt, 900);
    return value;
  } catch (err) {
    return { ok: true, offers: [], source: source, checkedAt: new Date().toISOString(), error: 'Não conseguimos atualizar as ofertas do BH agora. Tente novamente ou consulte a fonte oficial.' };
  }
}

// ---------------- Abas legíveis (espelhos) ----------------

const SITUACAO = { ok: 'Tem em casa', low: 'Acabando', out: 'Comprar', unknown: '' };
const DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const dataBR = function (s) { return s ? Utilities.formatDate(new Date(s), 'America/Sao_Paulo', 'dd/MM/yyyy') : ''; };
const ESPELHOS = [
  { aba: 'Lista de compras', chave: 'items', cab: ['Item', 'Qtd', 'Unid.', 'Categoria', 'Preço (R$)', 'Origem do preço', 'No carrinho', 'Data do preço'],
    linhas: function (d) { return d.items.map(function (i) { return [i.name, i.qty, i.unit, i.cat, i.price == null ? '' : i.price, i.priceSource || '', i.checked ? 'Sim' : '', dataBR(i.date)]; }); } },
  { aba: 'Nossos produtos', chave: 'catalog', cab: ['Produto', 'Categoria', 'Situação', 'Favorito', 'Marca', 'Observação', 'Também chamado de'],
    linhas: function (d) { return (d.catalog || []).map(function (p) { return [p.name, p.cat, SITUACAO[p.supply || 'unknown'] || '', p.favorite ? '★' : '', p.brand || '', p.note || '', (p.aliases || []).join(', ')]; }); } },
  { aba: 'Despensa', chave: 'pantry', cab: ['Item', 'Qtd', 'Unid.', 'Categoria'],
    linhas: function (d) { return d.pantry.map(function (i) { return [i.name, i.qty, i.unit, i.cat]; }); } },
  { aba: 'Compras', chave: 'history', cab: ['Data', 'Mercado', 'Total (R$)', 'Itens', 'Sem preço', 'Cupom', 'Arquivada'],
    linhas: function (d) { return d.history.map(function (h) { return [dataBR(h.date), h.store || '', h.total, h.items.length, h.unknown, h.receiptRef || '', h.archived ? 'Sim' : '']; }); } },
  { aba: 'Itens comprados', chave: 'history', cab: ['Data', 'Produto', 'Qtd', 'Unid.', 'Preço (R$)', 'Total da linha (R$)', 'Como veio na nota', 'Mercado'],
    linhas: function (d) { const out = []; d.history.forEach(function (h) { if (h.archived) return; h.items.forEach(function (i) { out.push([dataBR(h.date), i.name, i.qty, i.unit, i.price == null ? '' : i.price, i.lineTotal != null ? i.lineTotal : (i.price == null ? '' : Math.round(i.price * i.qty * 100) / 100), i.originalText || '', h.store || '']); }); }); return out; } },
  { aba: 'Cardápio', chave: 'plan', cab: ['Dia', 'Refeição', 'Receita'],
    linhas: function (d) { return Object.keys(d.plan || {}).sort().map(function (k) { const p = k.split('-'); return [DIAS[Number(p[0])] || p[0], p.slice(1).join('-'), d.plan[k].recipe]; }); } },
  { aba: 'Perfis', chave: 'profiles', cab: ['Nome', 'Porções por refeição', 'Meta kcal', 'Meta proteína (g)', 'Orçamento semanal (R$)'],
    linhas: function (d) { return d.profiles.map(function (p, i) { return [p.name, p.portions, p.kcal, p.protein, i === 0 ? d.budget : '']; }); }, extra: 'budget' },
];

function garantirAba(nome, cab) {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName(nome);
  if (!sh) {
    sh = ss.insertSheet(nome);
    sh.getRange(1, 1, 1, cab.length).setValues([cab]).setFontWeight('bold').setBackground('#1f3d30').setFontColor('#f6f3ea');
    sh.setFrozenRows(1);
  }
  return sh;
}

function espelhar(d) {
  const props = PropertiesService.getScriptProperties();
  ESPELHOS.forEach(function (m) {
    const assinatura = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, JSON.stringify([d[m.chave], m.extra ? d[m.extra] : null])));
    if (props.getProperty('ESP_' + m.aba) === assinatura) return; // nada mudou nesta aba
    const sh = garantirAba(m.aba, m.cab);
    const linhas = m.linhas(d);
    const ultima = sh.getLastRow();
    if (ultima > 1) sh.getRange(2, 1, ultima - 1, sh.getLastColumn() || m.cab.length).clearContent();
    if (linhas.length) sh.getRange(2, 1, linhas.length, m.cab.length).setValues(linhas);
    props.setProperty('ESP_' + m.aba, assinatura);
  });
}
