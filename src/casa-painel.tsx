import { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { corCat } from './cores';
import type { painelCasa } from './casa-logic';

const money = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

/** Painel da aba Casa: valor do que já temos, quanto falta comprar e os gráficos por categoria e por cômodo. */
export function PainelCasa({ p }: { p: ReturnType<typeof painelCasa> }) {
  const [vista, setVista] = useState<'categoria' | 'comodo'>('categoria');
  const linhas = vista === 'categoria' ? p.porCategoria : p.porComodo;
  const max = Math.max(1, ...linhas.map(l => l.temos + l.comprar));
  const pct = p.total ? Math.round(p.temos / p.total * 100) : 0;
  return <div className="painel-casa">
    <div className="painel-titulo"><BarChart3 size={17} /> <b>Painel da casa</b></div>
    <div className="painel-totais">
      <div><small>Já temos</small><b>{money(p.temos)}</b></div>
      <div><small>Falta comprar</small><b>{money(p.comprar)}</b></div>
      <div className="total"><small>Total da casa</small><b>{money(p.total)}</b></div>
    </div>
    <div className="painel-progresso" aria-label={`${pct}% do valor já comprado`}><i style={{ width: pct + '%' }} /></div>
    <small className="muted painel-nota">{pct}% do valor total já está em casa{p.semPreco ? ` · ${p.semPreco} ${p.semPreco > 1 ? 'itens' : 'item'} sem preço não entram na soma` : ''}</small>
    <div className="chips painel-vista">
      <button className={vista === 'categoria' ? 'selected' : ''} onClick={() => setVista('categoria')}>Por categoria</button>
      <button className={vista === 'comodo' ? 'selected' : ''} onClick={() => setVista('comodo')}>Por cômodo</button>
    </div>
    <ul className="painel-barras">{linhas.map(l => <li key={l.nome} style={{ '--cat': vista === 'categoria' ? corCat(l.nome) : '#6b8f71' } as any}>
      <div className="painel-rotulo"><span>{l.nome}</span><b>{money(l.temos + l.comprar)}</b></div>
      <div className="painel-barra"><i className="temos" style={{ width: l.temos / max * 100 + '%' }} /><i className="comprar" style={{ width: l.comprar / max * 100 + '%' }} /></div>
      <small className="muted">{l.nTemos} {l.nTemos === 1 ? 'temos' : 'temos'}{l.temos ? ' (' + money(l.temos) + ')' : ''} · {l.nComprar} para comprar{l.comprar ? ' (' + money(l.comprar) + ')' : ''}</small>
    </li>)}</ul>
    <div className="painel-legenda"><span><i className="temos" /> já temos</span><span><i className="comprar" /> falta comprar (melhor cotação)</span></div>
  </div>;
}
