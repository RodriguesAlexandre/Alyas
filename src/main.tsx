import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import App from './App';
import Conectar from './conectar';
import { conexao, lerLinkDeConexao } from './api';
import './globals.css';
import { iniciarTema } from './tema';

iniciarTema();

lerLinkDeConexao();

function Raiz() {
  const [ligado, setLigado] = useState(!!conexao());
  return ligado ? <App /> : <Conectar onPronto={() => setLigado(true)} />;
}

createRoot(document.getElementById('root')!).render(<Raiz />);

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}

// Avisa quando sair versão nova do app (o celular às vezes segura a antiga).
function scriptAtual() { const s = [...document.scripts].find(x => /assets\/main-[^/]+\.js/.test(x.src)); return s ? s.src.split('/').pop() : ''; }
async function verificarVersao() {
  try {
    const html = await fetch('./?v=' + Date.now(), { cache: 'no-store' }).then(r => r.text());
    const nova = (html.match(/assets\/(main-[^"']+\.js)/) || [])[1];
    const atual = scriptAtual();
    if (nova && atual && nova !== atual && !document.getElementById('nova-versao')) {
      const b = document.createElement('button');
      b.id = 'nova-versao'; b.className = 'nova-versao'; b.textContent = '✨ Versão nova do AleYas · tocar para atualizar';
      b.onclick = async () => { try { const rs = await navigator.serviceWorker?.getRegistrations(); await Promise.all((rs || []).map(r => r.update())); const ks = await caches.keys(); await Promise.all(ks.map(k => caches.delete(k))); } catch { /* */ } location.reload(); };
      document.body.appendChild(b);
    }
  } catch { /* sem internet */ }
}
setTimeout(verificarVersao, 4000);
setInterval(verificarVersao, 5 * 60 * 1000);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') verificarVersao(); });
