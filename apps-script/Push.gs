// ---------- Notificações no celular (Web Push com VAPID, sem serviço de terceiros) ----------
// As chaves VAPID são geradas aqui mesmo e ficam nas propriedades do script (nunca no repositório).
const EC_P = BigInt('0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff');
const EC_N = BigInt('0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551');
const EC_A = EC_P - BigInt(3);
const EC_G = [BigInt('0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296'), BigInt('0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5')];
const ZERO = BigInt(0), ONE = BigInt(1), TWO = BigInt(2);
function ecMod(a, m) { const r = a % m; return r >= ZERO ? r : r + m; }
function ecInv(a, m) { let t = ZERO, nt = ONE, r = m, nr = ecMod(a, m); while (nr !== ZERO) { const q = r / nr; [t, nt] = [nt, t - q * nt]; [r, nr] = [nr, r - q * nr]; } return ecMod(t, m); }
function ecAdd(P, Q) {
  if (!P) return Q; if (!Q) return P;
  if (P[0] === Q[0]) { if (ecMod(P[1] + Q[1], EC_P) === ZERO) return null; const l = ecMod((BigInt(3) * P[0] * P[0] + EC_A) * ecInv(TWO * P[1], EC_P), EC_P); const x = ecMod(l * l - TWO * P[0], EC_P); return [x, ecMod(l * (P[0] - x) - P[1], EC_P)]; }
  const l = ecMod((Q[1] - P[1]) * ecInv(Q[0] - P[0], EC_P), EC_P); const x = ecMod(l * l - P[0] - Q[0], EC_P); return [x, ecMod(l * (P[0] - x) - P[1], EC_P)];
}
function ecMul(k, P) { let R = null, A = P; while (k > ZERO) { if (k & ONE) R = ecAdd(R, A); A = ecAdd(A, A); k >>= ONE; } return R; }
function bytesU(b) { return b.map(function (x) { return x < 0 ? x + 256 : x; }); }
function bytesParaBig(b) { return BigInt('0x' + (bytesU(b).map(function (x) { return ('0' + x.toString(16)).slice(-2); }).join('') || '0')); }
function bigParaBytes(n, len) { let h = n.toString(16); while (h.length < len * 2) h = '0' + h; const out = []; for (let i = 0; i < len; i++) out.push(parseInt(h.substr(i * 2, 2), 16)); return out; }
function b64u(bytes) { return Utilities.base64EncodeWebSafe(bytes.map(function (x) { return x > 127 ? x - 256 : x; })).replace(/=+$/, ''); }
function sha256(bytesOuTexto) { return bytesU(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, bytesOuTexto)); }

function chavesVapid() {
  const pr = PropertiesService.getScriptProperties(); let d = pr.getProperty('VAPID_D');
  if (!d) { // gera uma vez
    let x = ZERO; while (x === ZERO || x >= EC_N) x = bytesParaBig(sha256(Utilities.getUuid() + Utilities.getUuid() + Date.now() + Math.random()));
    d = x.toString(16); pr.setProperty('VAPID_D', d);
  }
  const D = BigInt('0x' + d), Q = ecMul(D, EC_G);
  return { d: D, pub: b64u([4].concat(bigParaBytes(Q[0], 32), bigParaBytes(Q[1], 32))) };
}
function assinarES256(texto, d) {
  const z = bytesParaBig(sha256(texto)) % EC_N; let cont = 0;
  while (true) {
    const k = bytesParaBig(bytesU(Utilities.computeHmacSha256Signature(Utilities.newBlob(bigParaBytes(z, 32).concat([cont++])).getBytes(), Utilities.newBlob(bigParaBytes(d, 32)).getBytes()))) % EC_N;
    if (k === ZERO) continue; const R = ecMul(k, EC_G), r = R[0] % EC_N; if (r === ZERO) continue;
    const s = ecMod(ecInv(k, EC_N) * (z + r * d), EC_N); if (s === ZERO) continue;
    return b64u(bigParaBytes(r, 32).concat(bigParaBytes(s, 32)));
  }
}
function jwtVapid(endpoint, ch) {
  const aud = endpoint.match(/^https:\/\/[^/]+/)[0];
  const enc = function (o) { return Utilities.base64EncodeWebSafe(JSON.stringify(o), Utilities.Charset.UTF_8).replace(/=+$/, ''); };
  const corpo = enc({ typ: 'JWT', alg: 'ES256' }) + '.' + enc({ aud: aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: 'mailto:alexandrerodrigues.engcivil@gmail.com' });
  return corpo + '.' + assinarES256(corpo, ch.d);
}
function lerInscricoes() { return JSON.parse(PropertiesService.getScriptProperties().getProperty('PUSH_SUBS') || '[]'); }
function gravarInscricoes(l) { PropertiesService.getScriptProperties().setProperty('PUSH_SUBS', JSON.stringify(l.slice(-12))); }
function pushChave() { return { ok: true, chave: chavesVapid().pub }; }
function pushInscrever(p) {
  const ep = String(p.endpoint || ''); if (!/^https:\/\/[a-z0-9.-]+\//i.test(ep) || ep.length > 800) return falha('Inscrição inválida.', 400);
  const quem = p.quem === 'Yas' || p.quem === 'Ale' ? p.quem : '';
  const lock = LockService.getScriptLock(); lock.waitLock(15000);
  try { const l = lerInscricoes().filter(function (s) { return s.ep !== ep; }); if (!p.sair) l.push({ ep: ep, quem: quem, visto: Date.now(), desde: new Date().toISOString() }); gravarInscricoes(l); return { ok: true, total: l.length }; }
  finally { lock.releaseLock(); }
}
/** Guarda o recado e acorda os outros aparelhos (o aviso em si é buscado pelo aparelho em pushUlt). */
function pushNotificar(p) {
  const texto = String(p.texto || '').replace(/\s+/g, ' ').trim().slice(0, 300); if (!texto) return { ok: true, enviados: 0 };
  const por = p.quem === 'Yas' || p.quem === 'Ale' ? p.quem : '', origem = String(p.endpoint || '');
  const pr = PropertiesService.getScriptProperties(), lock = LockService.getScriptLock(); lock.waitLock(15000);
  let alvos;
  try {
    const msgs = JSON.parse(pr.getProperty('PUSH_MSGS') || '[]'); msgs.push({ ts: Date.now(), por: por, texto: texto, ep: origem.slice(-40), aba: String(p.aba || '').slice(0, 20) });
    pr.setProperty('PUSH_MSGS', JSON.stringify(msgs.slice(-25)));
    alvos = lerInscricoes().filter(function (s) { return s.ep !== origem && (!por || !s.quem || s.quem !== por); });
  } finally { lock.releaseLock(); }
  return { ok: true, enviados: enviarPush(alvos) };
}
function enviarPush(alvos) {
  if (!alvos.length) return 0; const ch = chavesVapid();
  const reqs = alvos.map(function (s) { return { url: s.ep, method: 'post', payload: '', muteHttpExceptions: true, headers: { TTL: '86400', Urgency: 'normal', Authorization: 'vapid t=' + jwtVapid(s.ep, ch) + ', k=' + ch.pub } }; });
  const res = UrlFetchApp.fetchAll(reqs), mortos = [];
  res.forEach(function (r, i) { const c = r.getResponseCode(); if (c === 404 || c === 410) mortos.push(alvos[i].ep); });
  if (mortos.length) gravarInscricoes(lerInscricoes().filter(function (s) { return mortos.indexOf(s.ep) < 0; }));
  return res.filter(function (r) { return r.getResponseCode() < 300; }).length;
}
/** O aparelho que foi acordado busca aqui o que mudou desde a última notificação dele. */
function pushUlt(p) {
  const ep = String(p.endpoint || ''), pr = PropertiesService.getScriptProperties();
  const l = lerInscricoes(), s = l.find(function (x) { return x.ep === ep; }); const desde = s ? s.visto : Date.now() - 3600000;
  const msgs = JSON.parse(pr.getProperty('PUSH_MSGS') || '[]').filter(function (m) { return m.ts > desde && (!s || !s.quem || m.por !== s.quem) && (!ep || m.ep !== ep.slice(-40)); });
  if (s) { s.visto = Date.now(); gravarInscricoes(l); }
  return { ok: true, msgs: msgs.map(function (m) { return { por: m.por, texto: m.texto, aba: m.aba, ts: m.ts }; }) };
}
/** Teste manual no editor: manda uma notificação para todos os aparelhos inscritos. */
function testarPush() { const r = pushNotificar({ texto: 'Teste de notificação do AleYas ✓' }); Logger.log(r); }
