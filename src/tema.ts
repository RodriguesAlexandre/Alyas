// Modo claro/escuro: guardado no aparelho e no perfil da pessoa (Ale ou Yas) para valer em todos os aparelhos dela.
export type Tema = 'auto' | 'claro' | 'escuro';
const CHAVE = 'aleyas-tema';
export function temaSalvo(): Tema { try { const t = localStorage.getItem(CHAVE); return t === 'claro' || t === 'escuro' ? t : 'auto'; } catch { return 'auto'; } }
const mq = () => (typeof matchMedia !== 'undefined' ? matchMedia('(prefers-color-scheme: dark)') : null);
export function aplicarTema(t: Tema = temaSalvo()) {
  const escuro = t === 'escuro' || (t === 'auto' && !!mq()?.matches);
  document.documentElement.classList.toggle('escuro', escuro);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', escuro ? '#121a16' : '#1f3d30');
  return escuro;
}
export function guardarTema(t: Tema) { try { localStorage.setItem(CHAVE, t); } catch { /* */ } aplicarTema(t); }
export function iniciarTema() { aplicarTema(); mq()?.addEventListener?.('change', () => { if (temaSalvo() === 'auto') aplicarTema('auto'); }); }
/** Índice do perfil de quem usa o aparelho (pelo nome; Ale = 0, Yas = 1 como reserva). */
export function perfilDe(profiles: any[], quem: string) {
  if (!quem) return -1;
  const k = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  const i = (profiles || []).findIndex(p => k(p.name).startsWith(k(quem)) || k(quem).startsWith(k(p.name)));
  return i >= 0 ? i : quem === 'Ale' ? 0 : quem === 'Yas' ? 1 : -1;
}
