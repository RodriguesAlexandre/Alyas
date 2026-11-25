// Início: o mês em números (versão curta do relatório por e-mail) e as últimas novidades da casa.
import { useMemo, useState } from 'react';
import { TrendingUp, TrendingDown, Sparkles, ShoppingBasket, Sofa, CalendarCheck, Receipt, Wrench, ChevronDown } from 'lucide-react';
import { gastos } from './gastos-logic';
import { agenda, constancia, iso } from './rituais-logic';

const CORES: Record<string, string> = { Hortifruti: '#7d9c5a', Proteínas: '#d9714a', Laticínios: '#e8b84f', Mercearia: '#1f3d30', Bebidas: '#5b8fa8', Limpeza: '#9b7bb5', Higiene: '#c97a9a', Utilidades: '#8a8f80', 'Casa e bem-estar': '#b0789b', 'Comida pronta': '#e0662e', Farmácia: '#3fa7a0', Outros: '#b9b29f' };
const money = (v: number, c = true) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: c ? 2 : 0 });
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

/** Cartão curto com o mês até hoje: total, comparação, categorias, comida e rituais. */
export function MesEmNumeros({ data, irPara }: { data: any; irPara: (t: number) => void }) {
  const hoje = new Date();
  const g = useMemo(() => gastos(data, '1m', hoje), [data]);
  const rit = useMemo(() => { let fez = 0, devia = 0; (data.rituais || []).forEach((r: any) => { const c = constancia(r, iso(hoje)); fez += c.fez; devia += c.devia; }); return { fez, devia }; }, [data]);
  const consertos = (data.casa || []).flatMap((i: any) => (i.manutencoes || []).filter((m: any) => new Date(m.data).getMonth() === hoje.getMonth() && new Date(m.data).getFullYear() === hoje.getFullYear()));
  if (!g.compras) return null;
  // compara com o mesmo pedaço do mês passado (até o mesmo dia), para não parecer que sempre gastou menos
  const ant = g.mesAnterior, varia = ant > 0 ? g.mesAtual / ant - 1 : null;
  const cats = g.categorias.slice(0, 4), max = cats[0]?.total || 1, cor = (c: string) => c === 'Mercearia' ? '#b9d39a' : CORES[c] || '#b9b29f';
  const sub = varia == null ? null : varia > 0;
  return <section className="card mes-numeros">
    <div className="mes-topo">
      <div><span className="eyebrow">{MESES[hoje.getMonth()].toUpperCase()} ATÉ AGORA</span><strong>{money(g.mesAtual)}</strong>
        {varia != null && <span className={'mes-var ' + (sub ? 'sobe' : 'desce')}>{sub ? <TrendingUp size={13} /> : <TrendingDown size={13} />} {Math.round(Math.abs(varia) * 100)}% vs {MESES[(hoje.getMonth() + 11) % 12]} inteiro ({money(ant, false)})</span>}</div>
      <button className="text-btn" onClick={() => irPara(1)}>Detalhes</button>
    </div>
    <div className="mes-barras">{cats.map(c => <div key={c.cat}><span><i style={{ background: cor(c.cat) }} />{c.cat}</span><b>{money(c.total, false)}</b><em><i style={{ width: Math.max(3, c.total / max * 100) + '%', background: cor(c.cat) }} /></em></div>)}</div>
    <div className="mes-mini">
      <span><small>Comida</small><b>{money(g.comidaMes.total, false)}</b>{g.comidaMes.fora > 0 && <em>{money(g.comidaMes.fora, false)} fora</em>}</span>
      <span><small>Idas ao mercado</small><b>{g.comprasPeriodo}</b><em>média {money(g.ticketMedio, false)}</em></span>
      <span><small>Rituais (4 sem.)</small><b>{rit.devia ? Math.round(rit.fez / rit.devia * 100) + '%' : '—'}</b><em>{rit.devia ? `${rit.fez} de ${rit.devia}` : 'sem rituais'}</em></span>
      {consertos.length > 0 && <span><small>Consertos</small><b>{consertos.length}</b><em>{money(consertos.reduce((a: number, m: any) => a + (m.valor || 0), 0), false)}</em></span>}
    </div>
  </section>;
}

type Novidade = { ts: number; por?: string; texto: string; tipo: 'lista' | 'casa' | 'ritual' | 'compra' | 'conserto' | 'outro'; aba?: number };
const ICONE = { lista: ShoppingBasket, casa: Sofa, ritual: CalendarCheck, compra: Receipt, conserto: Wrench, outro: Sparkles };
const ABA: Record<string, number> = { 'Início': 0, Lista: 1, Despensa: 2, 'Cardápio': 3, Casa: 4, Ajustes: 5, Rituais: 6 };
const tipoDe = (t: string, aba?: string): Novidade['tipo'] => /conserto/i.test(t) ? 'conserto' : aba === 'Casa' || /Queremos|Já temos|comprar|cômodo/i.test(t) ? 'casa' : aba === 'Rituais' || /ritual|feito/i.test(t) ? 'ritual' : /nota|compra conclu|lançad/i.test(t) ? 'compra' : aba === 'Lista' || /lista/i.test(t) ? 'lista' : 'outro';
function quando(ts: number) { const m = Math.round((Date.now() - ts) / 60000); if (m < 1) return 'agora'; if (m < 60) return `há ${m} min`; const h = Math.round(m / 60); if (h < 24) return `há ${h} h`; const d = Math.round(h / 24); return d === 1 ? 'ontem' : d < 7 ? `há ${d} dias` : new Date(ts).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' }); }

/** Últimas novidades: o registro de atividades do app + o que foi criado recentemente (itens da casa, rituais, compras). */
export function UltimasNovidades({ data, irPara }: { data: any; irPara: (t: number) => void }) {
  const [todas, setTodas] = useState(false), [quem, setQuem] = useState<string[]>(['Ale', 'Yas']);
  const lista = useMemo(() => {
    const out: Novidade[] = (data.atividade || []).map((a: any) => ({ ts: Date.parse(a.ts), por: a.por, texto: a.texto, tipo: tipoDe(a.texto, a.aba), aba: ABA[a.aba || ''] }));
    const ja = (t: number, txt: string) => out.some(o => Math.abs(o.ts - t) < 120000 && o.texto.includes(txt));
    (data.casa || []).forEach((i: any) => { const t = Date.parse(i.criado); if (t && !ja(t, i.name)) out.push({ ts: t, por: i.por, texto: `${i.name} em ${i.status === 'temos' ? 'Já temos' : 'Queremos comprar'}`, tipo: 'casa', aba: 4 }); });
    (data.rituais || []).forEach((r: any) => { const t = Date.parse(r.criado || ''); if (t && !ja(t, r.nome)) out.push({ ts: t, texto: `Novo ritual: ${r.nome}`, tipo: 'ritual', aba: 6 }); });
    (data.history || []).filter((h: any) => !h.archived && h.date).forEach((h: any) => { const t = Date.parse(h.date); if (t && !ja(t, 'ompra')) out.push({ ts: t, texto: `Compra registrada${h.store ? ' · ' + h.store : ''}${h.total ? ' · ' + money(h.total) : ''}`, tipo: 'compra', aba: 1 }); });
    return out.filter(o => o.ts && o.ts <= Date.now() + 60000).sort((a, b) => b.ts - a.ts);
  }, [data]);
  if (!lista.length) return null;
  const filtrada = quem.length === 2 ? lista : lista.filter(n => n.por && quem.includes(n.por));
  const mostrar = todas ? filtrada.slice(0, 25) : filtrada.slice(0, 3);
  return <section className="card novidades">
    <div className="nov-topo"><span className="eyebrow">ÚLTIMAS NOVIDADES</span>
      <div className="nov-quem" role="group" aria-label="De quem">{['Ale', 'Yas'].map(q => <button key={q} aria-pressed={quem.includes(q)} className={quem.includes(q) ? 'on' : ''} onClick={() => setQuem(l => l.includes(q) ? (l.length > 1 ? l.filter(x => x !== q) : l) : [...l, q])}>{quem.includes(q) ? '✓ ' : ''}{q}</button>)}</div></div>
    {!filtrada.length && <p className="muted" style={{ fontSize: 13, margin: '6px 0' }}>Nada de {quem[0]} por aqui ainda.</p>}
    <ul>{mostrar.map((n, k) => { const I = ICONE[n.tipo]; return <li key={k}><button onClick={() => n.aba != null && irPara(n.aba)} disabled={n.aba == null}>
      <span className={'nov-ic ' + n.tipo}><I size={13} /></span><b className="nov-txt">{n.texto}</b><small className="nov-quando">{[n.por, quando(n.ts)].filter(Boolean).join(' · ')}</small></button></li>; })}</ul>
    {filtrada.length > 3 && <button className="text-btn nov-mais" onClick={() => setTodas(!todas)}>{todas ? 'Mostrar menos' : `Ver mais (${Math.min(25, filtrada.length) - 3})`} <ChevronDown size={15} style={{ transform: todas ? 'rotate(180deg)' : '' }} /></button>}
  </section>;
}
