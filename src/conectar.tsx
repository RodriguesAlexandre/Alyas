import { useState } from 'react';
import { LogoMark } from './logo';
import { salvarConexao, lerLinkDeConexao } from './api';

export default function Conectar({ onPronto }: { onPronto: () => void }) {
  const [link, setLink] = useState('');
  const [url, setUrl] = useState('');
  const [key, setKey] = useState('');
  const [erro, setErro] = useState('');
  const [testando, setTestando] = useState(false);
  const [manual, setManual] = useState(false);

  async function testar(u: string, k: string) {
    setTestando(true); setErro('');
    try {
      const r = await fetch(u.trim() + '?action=rev&key=' + encodeURIComponent(k.trim()));
      const j = await r.json();
      if (!j.ok) throw Error(j.error || 'Chave recusada pela planilha.');
      salvarConexao({ url: u, key: k });
      onPronto();
    } catch (e: any) {
      setErro(e?.message?.includes('fetch') || e instanceof SyntaxError ? 'Não consegui falar com a planilha. Confira o endereço do script.' : e.message);
    } finally { setTestando(false); }
  }

  function usarLink(e: any) {
    e.preventDefault();
    const m = link.match(/#conectar=[^\s]+/);
    if (!m) { setErro('Cole o link completo que chegou no seu e-mail.'); return; }
    location.hash = m[0].slice(1);
    if (lerLinkDeConexao()) onPronto(); else setErro('Esse link não parece válido.');
  }

  return <div className="connect-screen">
    <div className="connect-card">
      <div className="connect-brand"><LogoMark size={64} /><div><h1>aleyas</h1><p>a casa do Ale e da Yas</p></div></div>
      <h2>Vamos conectar este aparelho</h2>
      <p className="muted">O AleYas guarda tudo numa planilha do Google de vocês. Abra o link que chegou no e-mail neste aparelho, ou cole ele aqui.</p>
      {!manual ? <form onSubmit={usarLink}>
        <label>Link de conexão<input value={link} onChange={e => setLink(e.target.value)} placeholder="https://…github.io/Alyas/#conectar=…" required /></label>
        <button className="primary full" disabled={testando}>Conectar</button>
        <button type="button" className="text-btn" onClick={() => setManual(true)}>Prefiro colar o endereço e a chave</button>
      </form> : <form onSubmit={e => { e.preventDefault(); testar(url, key); }}>
        <label>Endereço do app da web (Apps Script)<input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://script.google.com/macros/s/…/exec" required pattern="https://script\.google\.com/.+" /></label>
        <label>Chave da casa<input value={key} onChange={e => setKey(e.target.value)} required /></label>
        <button className="primary full" disabled={testando}>{testando ? 'Testando…' : 'Conectar'}</button>
        <button type="button" className="text-btn" onClick={() => setManual(false)}>Usar o link do e-mail</button>
      </form>}
      {erro && <div role="alert" className="alert">{erro}</div>}
      <small className="muted">A chave fica salva só neste aparelho. Quem não tiver o link não vê os dados de vocês.</small>
    </div>
  </div>;
}
