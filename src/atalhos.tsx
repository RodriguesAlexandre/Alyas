// Ajustes: Siri e Atalhos do iPhone para pôr itens na lista sem abrir o app.
import { useState } from 'react';
import { Mic, Copy, Check } from 'lucide-react';
import { conexao } from './api';
import { quem } from './quem';

export default function CartaoAtalhos() {
  const [copiado, setCopiado] = useState(''), c = conexao();
  if (!c) return null;
  const url = `${c.url}?action=adicionar&key=${c.key}&quem=${encodeURIComponent(quem() || '')}&itens=`;
  const app = location.origin + location.pathname + '?adicionar=';
  const copiar = async (t: string, k: string) => { try { await navigator.clipboard.writeText(t); setCopiado(k); setTimeout(() => setCopiado(''), 2500); } catch { prompt('Copie o endereço:', t); } };
  return <section className="card atalhos-card"><span className="eyebrow">SIRI E ATALHOS</span><h2>“E aí Siri, adicionar na lista”</h2>
    <p className="muted">Coloca itens na lista na hora, sem abrir o app: a Siri pergunta o que é e já salva (a Yas recebe a notificação).</p>
    <details><summary>Como criar o atalho (1 minuto)</summary><ol className="atalhos-passos">
      <li>Copie o seu endereço pessoal: <button className="secondary mini-btn" onClick={() => copiar(url, 'siri')}>{copiado === 'siri' ? <><Check size={14} /> Copiado</> : <><Copy size={14} /> Copiar endereço</>}</button></li>
      <li>Abra o app <b>Atalhos</b> → <b>+</b> → adicione <b>Pedir Entrada</b> (texto, pergunta “O que vai na lista?”).</li>
      <li>Adicione <b>Texto</b> e cole o endereço; no final dele, toque em <b>Entrada Fornecida</b> para encaixar a resposta.</li>
      <li>Adicione <b>Obter Conteúdo do URL</b> (usa o texto acima), depois <b>Obter Valor do Dicionário</b> com a chave <code>resposta</code> e <b>Mostrar Resultado</b>.</li>
      <li>Renomeie o atalho para <b>Adicionar na lista</b>. Pronto: fale com a Siri ou ponha o atalho na tela de início (Compartilhar → Adicionar à Tela de Início).</li>
    </ol></details>
    <p className="muted"><small>Dá para falar vários de uma vez: “café, 2 leite e detergente”. O endereço tem a chave da casa: use só nos celulares de vocês.</small></p>
    <p className="muted atalhos-alt"><Mic size={14} /> Prefere abrir o app já adicionando? Use <button className="text-btn" onClick={() => copiar(app, 'app')}>{copiado === 'app' ? 'copiado ✓' : 'este endereço'}</button> + o item no final.</p>
  </section>;
}
