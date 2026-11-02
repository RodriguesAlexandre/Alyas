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
