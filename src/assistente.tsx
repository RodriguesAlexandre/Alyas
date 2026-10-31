import { useEffect, useRef, useState } from 'react';
import { Sparkles, Send, X, Undo2, Mic } from 'lucide-react';
import { api } from './api';
import { aplicarAcoes, contexto, interpretar, type Acao } from './acoes-ia';

type Msg = { role: 'user' | 'assistant'; text: string; feitos?: string[]; undo?: any; aviso?: boolean };
const CHAVE = 'aleyas-chat';
const SUGESTOES = ['Ideias de jantar com o que temos', 'Coloca café e arroz na lista', 'Monta o cardápio da semana', 'Ingredientes do cardápio para a lista', 'O que está acabando?'];

function carregar(): Msg[] { try { return JSON.parse(sessionStorage.getItem(CHAVE) || '[]').map((m: Msg) => ({ ...m, undo: undefined })); } catch { return []; } }

/** Assistente flutuante: conversa, dá ideias e faz ações no app (com desfazer). */
export default function Assistente({ data, save }: { data: any; save: (d: any, msg?: string) => Promise<boolean> }) {
  const [aberto, setAberto] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(carregar);
  const [texto, setTexto] = useState('');
  const [pensando, setPensando] = useState(false);
  const [semIA, setSemIA] = useState(false);
  const fim = useRef<HTMLDivElement>(null);
  const dataRef = useRef(data); dataRef.current = data;

  useEffect(() => { try { sessionStorage.setItem(CHAVE, JSON.stringify(msgs.slice(-30))); } catch { /* */ } fim.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, aberto]);

  async function executar(acoes: Acao[]) {
    if (!acoes.length) return { feitos: [] as string[], ignorados: [] as string[], undo: undefined };
    const antes = dataRef.current;
    const r = aplicarAcoes(antes, acoes);
    if (r.feitos.length) await save(r.data, 'Assistente: ' + r.feitos.length + (r.feitos.length > 1 ? ' alterações' : ' alteração'));
    return { ...r, undo: r.feitos.length ? antes : undefined };
  }

  async function enviar(t?: string) {
    const pergunta = (t ?? texto).trim(); if (!pergunta || pensando) return;
    setTexto(''); const historico: Msg[] = [...msgs, { role: 'user', text: pergunta }]; setMsgs(historico); setPensando(true);
    try {
      let resposta = '', acoes: Acao[] = [];
      try {
        const r = await api.assistente(historico.slice(-12).map(m => ({ role: m.role, text: m.text })), contexto(dataRef.current));
        resposta = r.reply; acoes = r.actions || []; setSemIA(false);
      } catch (e: any) {
        if (e?.code !== 412 && e?.code !== 502 && e?.code !== 400) throw e;
        setSemIA(e.code === 412);
        const local = interpretar(pergunta, dataRef.current);
        acoes = local.acoes;
        resposta = local.resposta || (acoes.length ? 'Feito!' : e.code === 412
          ? 'Ainda estou no modo simples (a IA do Gemini não foi ligada). Entendo pedidos como “coloca café na lista”, “arroz acabou”, “segunda no jantar frango ao creme” ou “ideias de jantar”.'
          : 'A IA não respondeu agora. ' + (e.message || ''));
      }
      const { feitos, ignorados, undo } = await executar(acoes);
      setMsgs(m => [...(undo ? m.map(x => ({ ...x, undo: undefined })) : m), { role: 'assistant', text: resposta + (ignorados.length ? '\n\n(Não consegui: ' + ignorados.join('; ') + ')' : ''), feitos, undo }]);
    } catch (e: any) {
      setMsgs(m => [...m, { role: 'assistant', text: 'Sem conexão com a planilha agora. Tente de novo em instantes.', aviso: true }]);
    } finally { setPensando(false); }
  }

  async function desfazer(k: number) {
    const m = msgs[k]; if (!m.undo) return;
    const ok = await save({ ...m.undo }, 'Desfeito');
    if (ok) setMsgs(ms => ms.map((x, i) => i === k ? { ...x, undo: undefined, feitos: (x.feitos || []).map(f => '↩︎ ' + f) } : x));
  }

  function ditar() {
    const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition; if (!SR) return;
    const r = new SR(); r.lang = 'pt-BR'; r.interimResults = false;
    r.onresult = (e: any) => { const t = e.results[0][0].transcript; setTexto(t); };
    r.start();
  }
  const temVoz = typeof window !== 'undefined' && !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

  return <>
    {!aberto && <button className="ai-fab" aria-label="Abrir assistente" onClick={() => setAberto(true)}><Sparkles size={22} /></button>}
    {aberto && <section className="ai-panel" role="complementary" aria-label="Assistente AleYas">
      <div className="ai-head"><span className="ai-avatar"><Sparkles size={16} /></span><div><b>Assistente</b><small>{semIA ? 'modo simples' : 'ideias e ações na casa'}</small></div>
        <button className="icon-btn" title="Fechar" onClick={() => setAberto(false)}><X size={18} /></button></div>
      <div className="ai-msgs">
        {!msgs.length && <div className="ai-hello"><p>Oi! Posso dar ideias de refeições com o que vocês compram, montar o cardápio, colocar coisas na lista e marcar o que está acabando.</p></div>}
        {msgs.map((m, k) => <div key={k} className={'ai-msg ' + m.role + (m.aviso ? ' aviso' : '')}>
          <p>{m.text}</p>
          {!!m.feitos?.length && <ul className="ai-feitos">{m.feitos.map((f, i) => <li key={i}>{f}</li>)}</ul>}
          {m.undo && <button className="ai-undo" onClick={() => desfazer(k)}><Undo2 size={13} /> Desfazer</button>}
        </div>)}
        {pensando && <div className="ai-msg assistant"><p className="ai-dots"><i /><i /><i /></p></div>}
        <div ref={fim} />
      </div>
      {!msgs.length && <div className="ai-sugs">{SUGESTOES.map(s => <button key={s} onClick={() => enviar(s)}>{s}</button>)}</div>}
      <form className="ai-input" onSubmit={e => { e.preventDefault(); enviar(); }}>
        {temVoz && <button type="button" className="icon-btn" title="Falar" onClick={ditar}><Mic size={18} /></button>}
        <input value={texto} onChange={e => setTexto(e.target.value)} placeholder="Peça algo para a casa…" maxLength={1000} aria-label="Mensagem para o assistente" />
        <button className="primary" disabled={!texto.trim() || pensando} aria-label="Enviar"><Send size={16} /></button>
      </form>
    </section>}
  </>;
}
