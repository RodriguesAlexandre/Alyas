import { useMemo, useState } from 'react';
import { Lightbulb, Sparkles, Loader2, TrendingUp, TrendingDown, Info } from 'lucide-react';
import { insights, resumoParaIA } from './insights-logic';
import { api } from './api';

/** Principais insights de custos (regras do app + análise da IA sob demanda). */
export default function Insights({ data }: { data: any }) {
  const lista = useMemo(() => insights(data), [data]);
  const [ia, setIa] = useState(''), [carregando, setCarregando] = useState(false), [erro, setErro] = useState('');
  async function pedirIA() {
    setCarregando(true); setErro('');
    try {
      const r = await api.assistente([{ role: 'user', text: 'Analise os custos da casa abaixo e me dê de 4 a 6 dicas práticas e específicas para gastar menos sem perder qualidade, citando os itens e valores. Responda só com texto curto em tópicos (use "• "), sem criar ações.\n\n' + resumoParaIA(data) }], { insights: true });
      setIa(r.reply || 'A IA não respondeu.');
    } catch (e: any) { setErro(e?.message || 'Não consegui falar com a IA agora.'); }
    finally { setCarregando(false); }
  }
  return <section className="card insights">
    <div className="section-title"><div><span className="eyebrow">PRINCIPAIS INSIGHTS</span><h2><Lightbulb size={19} /> Onde dá para economizar</h2><p className="muted">Análise dos gastos, preços e compras registrados no app.</p></div></div>
    {lista.length ? <ul className="insights-lista">{lista.map((i, k) => { const I = i.tom === 'bom' ? TrendingDown : i.tom === 'alerta' ? TrendingUp : Info; return <li key={k} className={i.tom}><I size={17} /><span><b>{i.titulo}</b><small>{i.texto}</small></span></li>; })}</ul>
      : <p className="muted">Registre algumas compras (notas ou lista concluída) para aparecerem os insights.</p>}
    <div className="insights-ia">
      {ia ? <div className="insights-ia-txt"><span className="eyebrow"><Sparkles size={13} /> ANÁLISE DA IA</span><p>{ia}</p></div> : null}
      {erro && <p className="notice">{erro}</p>}
      <button className="secondary" disabled={carregando} onClick={pedirIA}>{carregando ? <Loader2 size={16} className="spin" /> : <Sparkles size={16} />} {carregando ? 'Analisando…' : ia ? 'Analisar de novo' : 'Pedir análise da IA'}</button>
    </div>
  </section>;
}
