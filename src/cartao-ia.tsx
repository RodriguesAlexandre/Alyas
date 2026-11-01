import { useEffect, useState } from 'react';
import { Sparkles, ExternalLink, Check } from 'lucide-react';
import { api } from './api';

/** Cartão em "Nossa casa" para ligar a IA do assistente colando a chave do Gemini (funciona no celular). */
export default function CartaoIA() {
  const [ligada, setLigada] = useState<boolean | null>(null);
  const [chave, setChave] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => { api.statusIA().then(setLigada).catch(() => setLigada(null)); }, []);
  async function ligar(e: any) {
    e.preventDefault(); setBusy(true); setMsg('');
    try { const ok = await api.ligarIA(chave.trim()); setLigada(ok); setChave(''); setMsg(ok ? 'IA ligada! Abra o ✨ e peça o que quiser.' : ''); try { window.dispatchEvent(new Event('aleyas-ia')); } catch { /* */ } }
    catch (e: any) { setMsg(e.message || 'Não deu certo. Tente de novo.'); }
    finally { setBusy(false); }
  }
  return <section className="card ia-card">
    <Sparkles className="terracotta" />
    <h2>Assistente com IA</h2>
    {ligada ? <p className="ia-on"><Check size={16} /> Ligado com o Gemini. O ✨ conversa, monta cardápios e faz ações no app.</p>
      : <>
        <p className="muted">Hoje o assistente está no modo simples. Para ele conversar de verdade, cole uma chave grátis do Gemini (dá para fazer pelo celular):</p>
        <ol className="ia-steps">
          <li>Abra <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer">aistudio.google.com/apikey <ExternalLink size={12} /></a> e toque em <b>Criar chave de API</b>.</li>
          <li>Copie a chave e cole aqui embaixo.</li>
        </ol>
        <form onSubmit={ligar} className="ia-form">
          <input type="password" autoComplete="off" value={chave} onChange={e => setChave(e.target.value)} placeholder="Cole a chave do Gemini" aria-label="Chave do Gemini" required minLength={30} />
          <button className="primary" disabled={busy || chave.trim().length < 30}>{busy ? 'Testando…' : 'Ligar IA'}</button>
        </form>
        <small className="muted">A chave é testada e guardada só na planilha de vocês no Google. Ela não fica no código nem aparece no app.</small>
      </>}
    {msg && <p className={ligada ? 'ia-ok' : 'alert'}>{msg}</p>}
  </section>;
}
