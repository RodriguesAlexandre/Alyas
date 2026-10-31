// Conexão do AleYas com a planilha do Google (via Apps Script publicado como app da web).
// O endereço do script e a chave da casa ficam salvos só neste aparelho (localStorage).

import { PLANILHA_URL, PLANILHA_CHAVE } from './config';

const CONFIG_KEY = 'alyas-conexao';
const CACHE_KEY = 'aleyas-cache';

export type Conexao = { url: string; key: string };

function safeGet(k: string) { try { return localStorage.getItem(k); } catch { return null; } }
function safeSet(k: string, v: string) { try { localStorage.setItem(k, v); } catch { /* armazenamento indisponível */ } }
function safeDel(k: string) { try { localStorage.removeItem(k); } catch { /* ignore */ } }

/** Lê o link mágico (#conectar=...) enviado por e-mail e guarda a conexão neste aparelho. */
export function lerLinkDeConexao(): boolean {
  const m = location.hash.match(/conectar=([^&]+)/);
  if (!m) return false;
  try {
    const raw = decodeURIComponent(escape(atob(decodeURIComponent(m[1]).replace(/-/g, '+').replace(/_/g, '/'))));
    const [url, key] = raw.split('|');
    if (!/^https:\/\/script\.google(usercontent)?\.com\//.test(url) || !key) return false;
    salvarConexao({ url, key });
    history.replaceState(null, '', location.pathname + location.search);
    return true;
  } catch { return false; }
}

export function conexao(): Conexao | null {
  const raw = safeGet(CONFIG_KEY);
  if (raw) { try { const c = JSON.parse(raw); if (c.url && c.key) return c; } catch { /* usa a padrão */ } }
  return PLANILHA_URL && PLANILHA_CHAVE ? { url: PLANILHA_URL, key: PLANILHA_CHAVE } : null;
}
export function salvarConexao(c: Conexao) { safeSet(CONFIG_KEY, JSON.stringify({ url: c.url.trim(), key: c.key.trim() })); }
export function esquecerConexao() { safeDel(CONFIG_KEY); safeDel(CACHE_KEY); }

/** Link para conectar outro aparelho (celular, PC da Yasmin…). */
export function linkParaOutroAparelho(): string {
  const c = conexao(); if (!c) return '';
  const token = btoa(unescape(encodeURIComponent(c.url + '|' + c.key))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return location.origin + location.pathname + '#conectar=' + token;
}

export class ApiError extends Error { constructor(msg: string, public code = 0) { super(msg); } }

async function chamar(action: string, body?: any, timeout = 25000): Promise<any> {
  const c = conexao();
  if (!c) throw new ApiError('Casa não conectada.', 401);
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    let r: Response;
    if (body === undefined) {
      r = await fetch(c.url + '?action=' + action + '&key=' + encodeURIComponent(c.key) + '&t=' + Date.now(), { signal: ctrl.signal, redirect: 'follow' });
    } else {
      // text/plain evita a verificação CORS prévia (o Apps Script não responde a OPTIONS)
      r = await fetch(c.url, { method: 'POST', body: JSON.stringify({ action, key: c.key, ...body }), headers: { 'Content-Type': 'text/plain;charset=utf-8' }, signal: ctrl.signal, redirect: 'follow' });
    }
    const text = await r.text();
    let json: any;
    try { json = JSON.parse(text); } catch { throw new ApiError('A planilha respondeu de um jeito inesperado. Confira se o script foi publicado como “Qualquer pessoa”.', 502); }
    if (!json.ok) throw new ApiError(json.error || 'Erro na planilha.', json.code || 500);
    return json;
  } catch (e: any) {
    if (e instanceof ApiError) throw e;
    throw new ApiError(e?.name === 'AbortError' ? 'A planilha demorou para responder.' : 'Sem conexão com a planilha.', 0);
  } finally { clearTimeout(t); }
}

export const api = {
  carregar: () => chamar('house') as Promise<{ data: any; revision: number }>,
  revisao: () => chamar('rev').then(r => r.revision as number),
  salvar: (data: any, revision: number) => chamar('save', { data, revision }) as Promise<{ revision: number }>,
  ofertas: () => ofertasBH(),
  notas: () => chamar('receipts').then(r => r.notes as any[]),
};

// Cópia local para abrir rápido e funcionar com sinal fraco no mercado.
export function lerCache(): { data: any; revision: number; dirty: boolean } | null {
  const raw = safeGet(CACHE_KEY); if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}
export function gravarCache(v: { data: any; revision: number; dirty: boolean }) { safeSet(CACHE_KEY, JSON.stringify(v)); }

// Ofertas do Supermercados BH: buscadas direto pelo aparelho (o site do BH não responde aos servidores do Google).
const OFERTAS_URL = 'https://superbh.app/site-api/api/mov-oferta/vigente?value=BELO+HORIZONTE%40MG&text=Belo+Horizonte+-+%28MG%29';
const FONTE = 'https://www.supermercadosbh.com.br/';
async function ofertasBH(): Promise<any> {
  const agora = new Date().toISOString();
  const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 15000);
  try {
    const r = await fetch(OFERTAS_URL, { headers: { Accept: 'application/json' }, signal: ctrl.signal });
    if (!r.ok) throw Error('fonte');
    const json: any = await r.json(); const d = json.data;
    if (!json.isValid) throw Error('inválida');
    if (!d) return { offers: [], checkedAt: agora, source: FONTE, message: 'O BH não retornou ofertas vigentes para Belo Horizonte.' };
    if (d.municipioNome !== 'BELO HORIZONTE' || !Array.isArray(d.produtoOfertas)) throw Error('região');
    const ini = Date.parse(d.dataVigenciaInicio), fim = Date.parse(d.dataVigenciaFim), ativo = Date.now() >= ini && Date.now() <= fim;
    return {
      source: FONTE, checkedAt: agora, validFrom: d.dataVigenciaInicio, validUntil: d.dataVigenciaFim, region: 'Belo Horizonte · Minas Gerais', title: d.titulo,
      message: ativo ? 'Ofertas regionais publicadas pelo BH. Confira as condições e o estoque na loja.' : 'A fonte não retornou ofertas dentro da validade.',
      offers: ativo ? d.produtoOfertas.filter((p: any) => typeof p.titulo === 'string' && Number.isFinite(p.precoPor) && p.precoPor > 0).map((p: any, i: number) => ({
        id: d.id + '-' + i, name: p.titulo, price: p.precoPor, conditions: p.textoAlternativo || '',
        unit: /\bkg\b(?!.*\d)/i.test(p.titulo) && !/\d\s*kg/i.test(p.titulo) ? 'kg' : 'un', validUntil: d.dataVigenciaFim })) : [],
    };
  } catch {
    return { offers: [], source: FONTE, checkedAt: agora, error: 'Não conseguimos atualizar as ofertas do BH agora. Tente novamente ou consulte a fonte oficial.' };
  } finally { clearTimeout(t); }
}
