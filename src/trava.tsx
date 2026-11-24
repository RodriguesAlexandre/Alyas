// Bloqueio do app neste aparelho: Face ID / digital (WebAuthn) com PIN de reserva.
// Protege quem pega o celular desbloqueado; os dados continuam na planilha do Ale, protegidos pela chave da casa.
import { useEffect, useState } from 'react';
import { ScanFace, Delete, Lock } from 'lucide-react';

const CHAVE = 'aleyas-trava', ULTIMO = 'aleyas-trava-ultimo', TEMPO = 5 * 60 * 1000;
type Config = { pin: string; sal: string; cred?: string };
const ler = (): Config | null => { try { return JSON.parse(localStorage.getItem(CHAVE) || 'null'); } catch { return null; } };
const b64 = (b: ArrayBuffer) => btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const deB64 = (s: string) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
async function hashPin(pin: string, sal: string) { const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(sal + ':' + pin)); return b64(h); }
export const travaAtiva = () => !!ler();
export async function biometriaDisponivel() { try { return !!window.PublicKeyCredential && await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(); } catch { return false; } }

export async function ativarTrava(pin: string, comBiometria: boolean, quem: string) {
  const sal = b64(crypto.getRandomValues(new Uint8Array(16)).buffer); const cfg: Config = { pin: await hashPin(pin, sal), sal };
  if (comBiometria) {
    const cred = await navigator.credentials.create({ publicKey: { challenge: crypto.getRandomValues(new Uint8Array(32)), rp: { name: 'AleYas' }, user: { id: crypto.getRandomValues(new Uint8Array(16)), name: (quem || 'casa') + '@aleyas', displayName: 'AleYas · ' + (quem || 'Casa') },
      pubKeyCredParams: [{ type: 'public-key', alg: -7 }, { type: 'public-key', alg: -257 }], authenticatorSelection: { authenticatorAttachment: 'platform', userVerification: 'required', residentKey: 'discouraged' }, timeout: 60000 } }) as PublicKeyCredential | null;
    if (cred) cfg.cred = b64(cred.rawId);
  }
  localStorage.setItem(CHAVE, JSON.stringify(cfg)); localStorage.setItem(ULTIMO, String(Date.now()));
  return !!cfg.cred;
}
export function desativarTrava() { localStorage.removeItem(CHAVE); localStorage.removeItem(ULTIMO); }

async function biometria(cfg: Config) {
  if (!cfg.cred) return false;
  try { const r = await navigator.credentials.get({ publicKey: { challenge: crypto.getRandomValues(new Uint8Array(32)), allowCredentials: [{ type: 'public-key', id: deB64(cfg.cred), transports: ['internal'] }], userVerification: 'required', timeout: 60000 } }); return !!r; } catch { return false; }
}

/** Tela de bloqueio: aparece ao abrir o app e depois de 5 minutos fora dele. */
export function Trava({ children }: { children: React.ReactNode }) {
  const [travado, setTravado] = useState(() => { const c = ler(); if (!c) return false; const u = Number(localStorage.getItem(ULTIMO) || 0); return !u || Date.now() - u > TEMPO || !sessionStorage.getItem('aleyas-aberto'); });
  const [pin, setPin] = useState(''), [erro, setErro] = useState(''), [tentando, setTentando] = useState(false);
  const cfg = ler();
  const liberar = () => { localStorage.setItem(ULTIMO, String(Date.now())); sessionStorage.setItem('aleyas-aberto', '1'); setTravado(false); setPin(''); setErro(''); };
  async function rosto() { if (!cfg || tentando) return; setTentando(true); try { if (await biometria(cfg)) liberar(); } finally { setTentando(false); } }
  useEffect(() => { if (travado && cfg?.cred) rosto(); }, [travado]);
  useEffect(() => {
    const vis = () => { if (!ler()) return; if (document.visibilityState === 'hidden') localStorage.setItem(ULTIMO, String(Date.now())); else if (Date.now() - Number(localStorage.getItem(ULTIMO) || 0) > TEMPO) setTravado(true); };
    const mexeu = () => { if (!travado && ler()) localStorage.setItem(ULTIMO, String(Date.now())); };
    document.addEventListener('visibilitychange', vis); addEventListener('pointerdown', mexeu, { passive: true });
    return () => { document.removeEventListener('visibilitychange', vis); removeEventListener('pointerdown', mexeu); };
  }, [travado]);
  async function digito(d: string) {
    if (!cfg) return; const n = (pin + d).slice(0, 6); setPin(n); setErro('');
    if (n.length >= 4 && await hashPin(n, cfg.sal) === cfg.pin) liberar();
    else if (n.length === 6) { setErro('PIN errado'); setPin(''); try { navigator.vibrate?.([30, 40, 30]); } catch {} }
  }
  if (!travado || !cfg) return <>{children}</>;
  return <div className="trava" role="dialog" aria-modal="true" aria-label="App bloqueado">
    <Lock size={30} /><h2>AleYas bloqueado</h2><p className="muted">{cfg.cred ? 'Use o Face ID ou o PIN.' : 'Digite o PIN.'}</p>
    <div className="trava-pontos" aria-live="polite">{[0, 1, 2, 3, 4, 5].map(i => <i key={i} className={i < pin.length ? 'on' : ''} />)}</div>
    {erro && <p className="trava-erro" role="alert">{erro}</p>}
    <div className="trava-teclado">{['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(d => <button key={d} onClick={() => digito(d)}>{d}</button>)}
      {cfg.cred ? <button aria-label="Usar Face ID" onClick={rosto} disabled={tentando}><ScanFace size={26} /></button> : <span />}
      <button onClick={() => digito('0')}>0</button><button aria-label="Apagar" onClick={() => setPin(p => p.slice(0, -1))}><Delete size={22} /></button></div>
  </div>;
}

/** Cartão nos Ajustes para ligar/desligar o bloqueio. */
export function CartaoTrava({ quem }: { quem: string }) {
  const [ativa, setAtiva] = useState(travaAtiva()), [bio, setBio] = useState(false), [passo, setPasso] = useState<'' | 'pin' | 'conf'>(''), [p1, setP1] = useState(''), [p2, setP2] = useState(''), [msg, setMsg] = useState('');
  useEffect(() => { biometriaDisponivel().then(setBio); }, []);
  async function concluir() {
    if (p1 !== p2) { setMsg('Os PINs não batem. Tente de novo.'); setP1(''); setP2(''); setPasso('pin'); return; }
    try { const comFace = await ativarTrava(p1, bio, quem); setAtiva(true); setPasso(''); setMsg(comFace ? 'Bloqueio ligado com Face ID e PIN.' : 'Bloqueio ligado com PIN.'); }
    catch { try { await ativarTrava(p1, false, quem); setAtiva(true); setPasso(''); setMsg('Face ID não foi liberado; bloqueio ligado só com PIN.'); } catch { setMsg('Não consegui ligar o bloqueio neste aparelho.'); } }
  }
  return <section className="card trava-card"><span className="eyebrow">SEGURANÇA</span><h2>Bloqueio do app</h2>
    <p className="muted">{ativa ? 'Ligado neste aparelho. O app pede ' + (ler()?.cred ? 'Face ID (ou PIN)' : 'o PIN') + ' ao abrir e depois de 5 minutos fora dele.' : 'Peça Face ID ou PIN para abrir o AleYas neste aparelho (fotos, valores e notas ficam protegidos se alguém pegar o celular).'}</p>
    {passo ? <form className="trava-form" onSubmit={e => { e.preventDefault(); if (passo === 'pin') { if (/^\d{4,6}$/.test(p1)) setPasso('conf'); else setMsg('Use de 4 a 6 números.'); } else concluir(); }}>
      <label>{passo === 'pin' ? 'Crie um PIN de 4 a 6 números (reserva do Face ID)' : 'Repita o PIN'}<input autoFocus inputMode="numeric" type="password" pattern="\d*" maxLength={6} value={passo === 'pin' ? p1 : p2} onChange={e => (passo === 'pin' ? setP1 : setP2)(e.target.value.replace(/\D/g, ''))} /></label>
      <button className="primary">{passo === 'pin' ? 'Continuar' : bio ? 'Ligar com Face ID' : 'Ligar bloqueio'}</button></form>
      : ativa ? <button className="secondary" onClick={() => { desativarTrava(); setAtiva(false); setMsg('Bloqueio desligado neste aparelho.'); }}>Desligar bloqueio</button>
        : <button className="primary" onClick={() => { setMsg(''); setP1(''); setP2(''); setPasso('pin'); }}><Lock size={16} /> Ligar bloqueio{bio ? ' com Face ID' : ''}</button>}
    {msg && <p className="muted" role="status">{msg}</p>}
    <p className="muted"><small>Vale para este aparelho. A Yas liga no celular dela também.</small></p>
  </section>;
}
