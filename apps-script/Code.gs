/**
 * ALEYAS · servidor da planilha (Google Apps Script)
 * ------------------------------------------------------------
 * Este script transforma a planilha do Google no banco de dados do app.
 *
 * Como instalar (passo a passo completo no README do repositório):
 *  1. Crie uma planilha nova no Google Sheets chamada "AleYas".
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
// Endereço oficial do App da Web (Implantar → Gerenciar implantações → URL). Deixe vazio para detectar.
const EXEC_URL = '';

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
  const url = EXEC_URL || ScriptApp.getService().getUrl();
  if (!url) throw new Error('Implante primeiro: Implantar → Nova implantação → App da Web.');
  const chave = PropertiesService.getScriptProperties().getProperty('CHAVE');
  if (!chave) throw new Error('Rode a função configurar antes.');
  const token = Utilities.base64EncodeWebSafe(url + '|' + chave, Utilities.Charset.UTF_8).replace(/=+$/, '');
  const link = APP_URL + '#conectar=' + token;
  const para = [Session.getEffectiveUser().getEmail()].concat(EMAILS_EXTRAS).filter(String).join(',');
  const html = '<div style="font-family:Arial,sans-serif;max-width:520px;color:#1f3d30">' +
    '<h2 style="margin:0 0 8px">AleYas está pronto 🏡</h2>' +
    '<p>Abra este link <b>em cada aparelho</b> (celular e PC). Ele conecta o app à planilha de vocês e fica salvo no aparelho.</p>' +
    '<p><a href="' + link + '" style="display:inline-block;background:#1f3d30;color:#f6f3ea;padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:bold">Abrir o AleYas</a></p>' +
    '<p style="font-size:13px">No celular: depois de abrir, use “Adicionar à tela de início” para ter o ícone do app.</p>' +
    '<p style="font-size:12px;color:#777">Não encaminhe este e-mail: o link dá acesso à lista de vocês. Endereço do app: ' + APP_URL + '</p></div>';
  MailApp.sendEmail({ to: para, subject: 'Seu link do AleYas', htmlBody: html, body: 'Abra o AleYas: ' + link });
  Logger.log('Link enviado para ' + para + ':\n' + link);
}

// ---------------- E-mail de boas-vindas (link + como instalar no celular) ----------------
/** Envia o link do app e o passo a passo para colocá-lo na tela de início. */
function enviarInstrucoes() {
  const para = [Session.getEffectiveUser().getEmail()].concat(EMAILS_EXTRAS).filter(String).join(',');
  const verde = '#1f3d30', terra = '#d9714a', creme = '#f6f3ea';
  const passo = function (n, t) { return '<tr><td style="vertical-align:top;padding:4px 10px 4px 0"><span style="display:inline-block;width:22px;height:22px;border-radius:11px;background:' + terra + ';color:#fff;text-align:center;font:bold 12px/22px Arial">' + n + '</span></td><td style="padding:4px 0;font:14px/1.5 Arial;color:#333">' + t + '</td></tr>'; };
  const html =
    '<div style="background:' + creme + ';padding:24px 12px"><div style="max-width:520px;margin:auto;background:#fff;border-radius:18px;padding:28px;font-family:Arial,sans-serif;color:' + verde + '">' +
    '<table><tr><td><img src="' + APP_URL + 'icon-192.png" width="56" height="56" style="border-radius:14px;display:block" alt="AleYas"></td>' +
    '<td style="padding-left:14px"><div style="font:bold 28px Arial;letter-spacing:-1px">aleyas</div><div style="font:13px Arial;color:#7d8577">a casa do Ale e da Yas</div></td></tr></table>' +
    '<p style="font:15px/1.6 Arial;color:#333;margin:22px 0 8px">Nossa lista de compras, despensa, notas e cardápio, num lugar só. O que um marca aparece para o outro em poucos segundos.</p>' +
    '<p style="margin:22px 0"><a href="' + APP_URL + '" style="background:' + verde + ';color:' + creme + ';padding:14px 22px;border-radius:12px;text-decoration:none;font:bold 15px Arial">Abrir o AleYas</a></p>' +
    '<p style="font:12px Arial;color:#7d8577;margin:0 0 22px">' + APP_URL + '</p>' +
    '<h3 style="font:bold 16px Arial;margin:20px 0 8px">📱 iPhone (Safari)</h3><table>' +
    passo(1, 'Abra o link acima no <b>Safari</b>.') + passo(2, 'Toque em <b>Compartilhar</b> (o quadrado com a seta para cima).') +
    passo(3, 'Role e toque em <b>Adicionar à Tela de Início</b>.') + passo(4, 'Confirme o nome <b>AleYas</b> e toque em <b>Adicionar</b>.') + '</table>' +
    '<h3 style="font:bold 16px Arial;margin:20px 0 8px">🤖 Android (Chrome)</h3><table>' +
    passo(1, 'Abra o link acima no <b>Chrome</b>.') + passo(2, 'Toque nos <b>três pontinhos</b> no canto de cima.') +
    passo(3, 'Toque em <b>Instalar app</b> ou <b>Adicionar à tela inicial</b>.') + passo(4, 'Confirme. O ícone do AleYas aparece junto com os outros apps.') + '</table>' +
    '<h3 style="font:bold 16px Arial;margin:20px 0 8px">💻 No computador</h3>' +
    '<p style="font:14px/1.5 Arial;color:#333;margin:0">No Chrome, clique no ícone de instalar na barra de endereço (ou ⋮ → Transmitir, salvar e compartilhar → Instalar página como app). Também dá para só salvar nos favoritos.</p>' +
    '<h3 style="font:bold 16px Arial;margin:20px 0 8px">Bom saber</h3><ul style="font:14px/1.6 Arial;color:#333;padding-left:18px;margin:0">' +
    '<li>Não tem login: é só abrir.</li><li>Tudo fica salvo na planilha do Google “AleYas”.</li>' +
    '<li>Sem sinal no mercado? Pode marcar normalmente: sobe sozinho quando a internet voltar.</li>' +
    '<li>No mercado, use <b>Lista de compras → Modo mercado</b> e <b>Ler etiqueta</b> para pegar preços pela câmera.</li></ul>' +
    '<p style="font:12px Arial;color:#9aa;margin-top:26px">Feito com carinho para a casa de vocês. 🏡</p></div></div>';
  MailApp.sendEmail({ to: para, subject: 'AleYas · nosso app da casa (link e como instalar)', htmlBody: html, name: 'AleYas',
    body: 'Abra o AleYas: ' + APP_URL + '\n\niPhone (Safari): Compartilhar → Adicionar à Tela de Início.\nAndroid (Chrome): ⋮ → Instalar app / Adicionar à tela inicial.\n\nSem login. Tudo sincroniza entre vocês pela planilha do Google.' });
  Logger.log('Instruções enviadas para ' + para);
}

/** E-mail com as novidades da versão e como ligar a IA do assistente. */
function enviarNovidades() {
  const para = [Session.getEffectiveUser().getEmail()].concat(EMAILS_EXTRAS).filter(String).join(',');
  const verde = '#1f3d30', terra = '#d9714a', creme = '#f6f3ea';
  const li = function (t) { return '<li style="margin:6px 0">' + t + '</li>'; };
  const passo = function (n, t) { return '<tr><td style="vertical-align:top;padding:4px 10px 4px 0"><span style="display:inline-block;width:22px;height:22px;border-radius:11px;background:' + terra + ';color:#fff;text-align:center;font:bold 12px/22px Arial">' + n + '</span></td><td style="padding:4px 0;font:14px/1.5 Arial;color:#333">' + t + '</td></tr>'; };
  const iaLigada = !!PropertiesService.getScriptProperties().getProperty('GEMINI_KEY');
  const html =
    '<div style="background:' + creme + ';padding:24px 12px"><div style="max-width:560px;margin:auto;background:#fff;border-radius:18px;padding:28px;font-family:Arial,sans-serif;color:' + verde + '">' +
    '<table><tr><td><img src="' + APP_URL + 'icon-192.png" width="52" height="52" style="border-radius:13px;display:block" alt="AleYas"></td>' +
    '<td style="padding-left:14px"><div style="font:bold 26px Arial;letter-spacing:-1px">aleyas · novidades</div><div style="font:13px Arial;color:#7d8577">a casa do Ale e da Yas</div></td></tr></table>' +
    '<p style="margin:22px 0"><a href="' + APP_URL + '" style="background:' + verde + ';color:' + creme + ';padding:13px 20px;border-radius:12px;text-decoration:none;font:bold 15px Arial">Abrir o AleYas</a></p>' +
    '<p style="font:13px Arial;color:#7d8577;margin:-8px 0 18px">Se o ícone na tela de início já estiver instalado, é só abrir: a versão nova carrega sozinha (se não aparecer, feche e abra o app de novo).</p>' +
    '<h3 style="font:bold 16px Arial;margin:18px 0 6px">O que mudou</h3><ul style="font:14px/1.5 Arial;color:#333;padding-left:18px;margin:0">' +
    li('<b>Abre direto, sem login</b>, no celular e no PC, sincronizando pela planilha.') +
    li('<b>✨ Assistente</b> (botão flutuante): dá ideias e <b>faz ações</b> — “coloca café na lista”, “arroz acabou”, “quarta no almoço macarrão à bolonhesa”, “ingredientes do cardápio para a lista”. Toda ação tem <b>Desfazer</b>.') +
    li('<b>Cardápio com o que vocês compram</b>: as receitas só usam produtos da lista/notas (nada de ovo!).') +
    li('<b>Montar refeição</b>: no Cardápio, crie refeições suas escolhendo os produtos (ex.: pão com manteiga e café).') +
    li('<b>Lista ↔ despensa</b>: concluiu a compra, os itens vão para a despensa e viram “Tem em casa”; marcou “Acabou”, volta para a lista.') +
    li('<b>Celular caprichado</b>: filtros numa linha só, botões maiores, quadros mais enxutos.') +
    li('<b>Ofertas do BH</b> buscadas direto do aparelho e as <b>8 notas</b> (R$ 2.993,34) já importadas com preços.') + '</ul>' +
    '<h3 style="font:bold 16px Arial;margin:22px 0 6px">' + (iaLigada ? '✅ A IA do assistente já está ligada' : '🔌 Ligar a IA do assistente (5 min, grátis)') + '</h3>' +
    (iaLigada ? '' : '<p style="font:14px/1.5 Arial;color:#333;margin:0 0 6px">Hoje o assistente funciona no <b>modo simples</b> (entende comandos diretos). Para ele conversar, montar cardápios e entender pedidos livres, ligue o Gemini:</p><table>' +
      passo(1, 'Abra <a href="https://aistudio.google.com/apikey">aistudio.google.com/apikey</a> com sua conta Google e clique em <b>Criar chave de API</b>. Copie a chave.') +
      passo(2, 'Abra a planilha <b>Alyas</b> → <b>Extensões → Apps Script</b>.') +
      passo(3, 'No menu da esquerda, clique na engrenagem <b>Configurações do projeto</b> e role até <b>Propriedades do script</b>.') +
      passo(4, 'Clique em <b>Adicionar propriedade do script</b>: nome <b>GEMINI_KEY</b>, valor = a chave copiada. <b>Salvar</b>.') +
      passo(5, 'Pronto! Não precisa reimplantar. Abra o ✨ no app e peça, por exemplo: “monta um cardápio de jantares para a semana com o que a gente compra”.') + '</table>' +
      '<p style="font:12px Arial;color:#7d8577">A chave fica guardada só no seu Google (não vai para o código público).</p>') +
    '<p style="font:12px Arial;color:#9aa;margin-top:24px">Pode encaminhar este e-mail para a Yas. 🏡</p></div></div>';
  MailApp.sendEmail({ to: para, subject: 'AleYas · novidades (assistente, cardápio e mais)', htmlBody: html, name: 'AleYas',
    body: 'Novidades do AleYas: ' + APP_URL + '\nAssistente com ações, receitas com o que vocês compram, montar refeição, lista ↔ despensa e layout do celular.\nPara ligar a IA: crie uma chave em aistudio.google.com/apikey e salve como GEMINI_KEY em Apps Script → Configurações do projeto → Propriedades do script.' });
  Logger.log('Novidades enviadas para ' + para);
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
    case 'ai': return assistente(p);
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

// ---------------- Assistente de IA (Gemini) ----------------
// A chave fica só nas Propriedades do script (Configurações do projeto → Propriedades do script → GEMINI_KEY).
const IA_MODELOS = ['gemini-flash-latest', 'gemini-2.5-flash', 'gemini-2.0-flash'];
const IA_ACOES = ['add_to_list', 'remove_from_list', 'mark_in_cart', 'set_supply', 'plan_meal', 'clear_meal', 'create_recipe', 'plan_to_list', 'set_budget'];

function assistente(p) {
  const props = PropertiesService.getScriptProperties();
  const chave = props.getProperty('GEMINI_KEY');
  if (!chave) return falha('IA ainda não ligada: falta a chave do Gemini.', 412);
  const msgs = Array.isArray(p.messages) ? p.messages.slice(-12) : [];
  if (!msgs.length) return falha('Mensagem vazia.', 400);
  const ctx = JSON.stringify(p.context || {}).slice(0, 60000);
  const sistema =
    'Você é o assistente do AleYas, app da casa do Ale e da Yas (Belo Horizonte, compram no Supermercados BH). ' +
    'Responda em português do Brasil, curto, caloroso e prático. ' +
    'Você pode AGIR no app devolvendo ações. Use só ações quando o pedido for claro; para ideias, responda em texto e sugira. ' +
    'Regras: nunca use camarão (alergia). Prefira receitas e ingredientes que estão em "catalogo" (o que a casa compra). ' +
    'Para planejar uma refeição use plan_meal com recipe_id existente em "receitas"; se não existir, use create_recipe com ingredientes do catálogo e plan_day/plan_meal. ' +
    'Dias: 0=segunda … 6=domingo. Refeições: "Café da manhã", "Almoço", "Lanche", "Jantar". ' +
    'set_supply status: ok (tem em casa), low (acabando), out (acabou → também entra na lista). ' +
    'Unidades válidas: un, g, kg, ml, L, fatia, pacote. Use nomes de produto exatamente como no catálogo quando existirem. ' +
    'Contexto atual da casa (JSON): ' + ctx;
  const schema = {
    type: 'OBJECT',
    properties: {
      reply: { type: 'STRING' },
      actions: { type: 'ARRAY', items: { type: 'OBJECT', properties: {
        type: { type: 'STRING', enum: IA_ACOES },
        product: { type: 'STRING' }, qty: { type: 'NUMBER' }, unit: { type: 'STRING' },
        status: { type: 'STRING', enum: ['ok', 'low', 'out'] },
        day: { type: 'INTEGER' }, meal: { type: 'STRING' }, recipe_id: { type: 'STRING' },
        name: { type: 'STRING' }, value: { type: 'NUMBER' },
        ingredients: { type: 'ARRAY', items: { type: 'OBJECT', properties: { name: { type: 'STRING' }, qty: { type: 'NUMBER' }, unit: { type: 'STRING' } }, required: ['name'] } },
        steps: { type: 'ARRAY', items: { type: 'STRING' } },
        plan_day: { type: 'INTEGER' }, plan_meal: { type: 'STRING' }
      }, required: ['type'] } }
    },
    required: ['reply', 'actions']
  };
  const corpo = {
    systemInstruction: { parts: [{ text: sistema }] },
    contents: msgs.map(function (m) { return { role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: String(m.text || '').slice(0, 4000) }] }; }),
    generationConfig: { responseMimeType: 'application/json', responseSchema: schema, temperature: 0.6 }
  };
  const modelos = props.getProperty('GEMINI_MODEL') ? [props.getProperty('GEMINI_MODEL')] : IA_MODELOS;
  let ultimoErro = '';
  for (let i = 0; i < modelos.length; i++) {
    const r = UrlFetchApp.fetch('https://generativelanguage.googleapis.com/v1beta/models/' + modelos[i] + ':generateContent', {
      method: 'post', contentType: 'application/json', payload: JSON.stringify(corpo), muteHttpExceptions: true, headers: { 'x-goog-api-key': chave } });
    const code = r.getResponseCode();
    if (code === 404) { ultimoErro = 'modelo ' + modelos[i] + ' indisponível'; continue; }
    if (code !== 200) { ultimoErro = 'Gemini respondeu ' + code + ': ' + r.getContentText().slice(0, 200); if (code === 400 || code === 403) break; continue; }
    const j = JSON.parse(r.getContentText());
    const txt = j.candidates && j.candidates[0] && j.candidates[0].content && j.candidates[0].content.parts.map(function (x) { return x.text || ''; }).join('');
    try { const out = JSON.parse(txt); return { ok: true, reply: String(out.reply || ''), actions: Array.isArray(out.actions) ? out.actions.slice(0, 40) : [], model: modelos[i] }; }
    catch (e) { return { ok: true, reply: String(txt || 'Não entendi, pode repetir?'), actions: [], model: modelos[i] }; }
  }
  return falha('Não consegui falar com a IA agora (' + ultimoErro + ').', 502);
}

/** Teste rápido da IA pelo editor: selecione e clique em Executar. */
function testarIA() {
  Logger.log(JSON.stringify(assistente({ messages: [{ role: 'user', text: 'Me dá uma ideia de jantar com o que a gente compra.' }], context: { catalogo: ['Peito de frango', 'Arroz', 'Brócolis', 'Creme de leite', 'Milho'] } })));
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
