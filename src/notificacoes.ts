// Notificações no celular: cada alteração feita num aparelho acorda o(s) outro(s).
// O aviso é montado pelo service worker, que busca na planilha o que mudou (a notificação não carrega dados).
import { api, conexao } from './api';
import { quem } from './quem';

const ATIVO = 'aleyas-push';
const b64ParaBytes = (s: string) => { const b = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - s.length % 4) % 4)); return Uint8Array.from(b, c => c.charCodeAt(0)); };
export const suportaPush = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
/** No iPhone, notificação só funciona com o app instalado na tela de início. */
export const instalado = () => matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true;
export const pushLigado = () => { try { return localStorage.getItem(ATIVO) === '1' && Notification.permission === 'granted'; } catch { return false; } };

async function guardarConfigParaSW() {
  const c = conexao(); if (!c) return;
  const cache = await caches.open('aleyas-cfg'); await cache.put('cfg', new Response(JSON.stringify({ url: c.url, key: c.key, quem: quem() })));
}
async function inscricao() { const reg = await navigator.serviceWorker.ready; return reg.pushManager.getSubscription(); }

export async function ligarPush(): Promise<string> {
  if (!suportaPush()) return 'Este navegador não recebe notificações.';
  if (/iPhone|iPad/.test(navigator.userAgent) && !instalado()) return 'No iPhone, abra o AleYas pelo ícone da tela de início (Compartilhar → Adicionar à Tela de Início) e ligue por lá.';
  const perm = await Notification.requestPermission(); if (perm !== 'granted') return 'As notificações foram bloqueadas. Libere nos ajustes do celular para o AleYas.';
  const { chave } = await api.pushChave();
  const reg = await navigator.serviceWorker.ready;
  let sub = await reg.pushManager.getSubscription();
  if (sub && (sub.options?.applicationServerKey && btoa(String.fromCharCode(...new Uint8Array(sub.options.applicationServerKey))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '') !== chave)) { await sub.unsubscribe(); sub = null; }
  if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ParaBytes(chave) });
  await guardarConfigParaSW();
  await api.pushInscrever(sub.endpoint, quem());
  localStorage.setItem(ATIVO, '1');
  return '';
}
export async function desligarPush() {
  localStorage.removeItem(ATIVO);
  try { const sub = await inscricao(); if (sub) { await api.pushInscrever(sub.endpoint, quem(), true).catch(() => {}); await sub.unsubscribe(); } } catch { /* */ }
}

// Junta as alterações de alguns segundos numa notificação só (ex.: marcar 6 itens no mercado)
let fila: string[] = [], timer: any = null, aba = '';
const IGNORAR = /^(Salvo|Desfeito|Tema|Sincroniz)/i;
export function avisarOutros(msg: string, abaAtual = '') {
  if (!msg || IGNORAR.test(msg)) return;
  fila.push(msg.replace(/\s*[✓✔]+\s*$/, '').trim()); aba = abaAtual;
  clearTimeout(timer); timer = setTimeout(enviar, 12000);
}
async function enviar() {
  const msgs = [...new Set(fila)]; fila = []; if (!msgs.length) return;
  const texto = msgs.length === 1 ? msgs[0] : `${msgs.length} alterações: ${msgs.slice(0, 4).join(' · ')}${msgs.length > 4 ? '…' : ''}`;
  let endpoint = ''; try { if (suportaPush()) endpoint = (await inscricao())?.endpoint || ''; } catch { /* */ }
  api.pushNotificar(texto, quem(), endpoint, aba).catch(() => {});
}
addEventListener('pagehide', () => { if (fila.length) { clearTimeout(timer); enviar(); } });
/** Atualiza quem é o dono do aparelho no service worker (muda o título das notificações). */
export function sincronizarConfigSW() { if (pushLigado()) guardarConfigParaSW().catch(() => {}); }
