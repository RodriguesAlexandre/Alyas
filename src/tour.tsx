import { useState } from 'react';
import { ShoppingBasket, PackageOpen, Sofa, Sparkles, ArrowRight } from 'lucide-react';
import { quem, definirQuem } from './quem';

const CHAVE = 'aleyas-tour-v1';
export const tourVisto = () => { try { return !!localStorage.getItem(CHAVE); } catch { return true; } };

const PASSOS = [
  { Icon: ShoppingBasket, titulo: 'A lista é dos dois', texto: 'O que um anota aparece no celular do outro em segundos. No mercado, use o Modo mercado e marque o que pegou.' },
  { Icon: PackageOpen, titulo: 'A despensa se cuida sozinha', texto: 'Ao concluir a compra (ou ler a nota pela foto), tudo vai para a despensa. O app aprende o ritmo e avisa a hora de repor.' },
  { Icon: Sofa, titulo: 'A Casa guarda o resto', texto: 'Eletrônicos, utensílios, cama, mesa e banho: o que vocês têm, com foto, e o que querem comprar, com cotações.' },
  { Icon: Sparkles, titulo: 'Peça ao ✨', texto: '“Coloca café na lista”, “o que tá acabando?”, “monta o cardápio da semana”. Ele faz por você.' },
];

/** Primeira vez no aparelho: 4 telas rápidas e “quem é você”. */
export default function Tour({ onFim }: { onFim: () => void }) {
  const [k, setK] = useState(0);
  const [eu, setEu] = useState(quem());
  const fim = () => { try { localStorage.setItem(CHAVE, '1'); } catch { /* */ } onFim(); };
  const ultimo = k === PASSOS.length;
  const P = PASSOS[k];
  return <div className="overlay tour-overlay"><section className="tour" role="dialog" aria-modal="true" aria-label="Boas-vindas ao AleYas">
    <button className="text-btn tour-pular" onClick={fim}>Pular</button>
    {!ultimo ? <>
      <span className="tour-icone"><P.Icon size={30} /></span>
      <h2>{P.titulo}</h2><p>{P.texto}</p>
    </> : <>
      <span className="tour-icone">👋</span>
      <h2>Quem está com este aparelho?</h2><p>Assim o app mostra quem pegou cada item e guarda o seu modo claro ou escuro.</p>
      <div className="tour-quem">{['Ale', 'Yas'].map(n => <button key={n} className={eu === n ? 'primary' : 'secondary'} onClick={() => { definirQuem(n); setEu(n); }}>Sou {n}</button>)}</div>
    </>}
    <div className="tour-pontos">{[...PASSOS, 0].map((_, i) => <i key={i} className={i === k ? 'on' : ''} />)}</div>
    <button className="primary full" onClick={() => ultimo ? fim() : setK(k + 1)}>{ultimo ? (eu ? 'Começar' : 'Começar sem escolher') : <>Próximo <ArrowRight size={17} /></>}</button>
  </section></div>;
}
