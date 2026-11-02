import {useState} from 'react';
import {quem,definirQuem} from './quem';
import {RefreshCw,Smartphone,Copy,Share2} from 'lucide-react';

export default function Aparelhos({onRefresh}:{onRefresh:()=>void}){
 const [copiado,setCopiado]=useState(false);const [eu,setEu]=useState(quem());const link=location.origin+location.pathname;
 async function compartilhar(){try{if(navigator.share){await navigator.share({title:'AleYas',text:'Nossa casa no AleYas',url:link});return}}catch{return}copiar()}
 async function copiar(){try{await navigator.clipboard.writeText(link);setCopiado(true);setTimeout(()=>setCopiado(false),2500)}catch{prompt('Copie o link:',link)}}
 return <section className="card"><Smartphone/><h2>Celular, PC, Ale e Yas</h2><p className="muted">Tudo fica salvo na planilha de vocês no Google e sincroniza sozinho entre os aparelhos. Para abrir em outro aparelho, basta mandar o endereço do app.</p><div className="device-actions"><button className="primary" onClick={compartilhar}><Share2 size={16}/> Enviar o endereço do app</button><button className="secondary" onClick={copiar}><Copy size={16}/> {copiado?'Link copiado!':'Copiar link'}</button><button className="secondary" onClick={onRefresh}><RefreshCw size={16}/> Atualizar agora</button></div><p className="muted quem-txt">Quem usa este aparelho? Assim o app mostra quem pegou cada item no mercado.</p><div className="chips quem-chips">{['Ale','Yas'].map(n=><button key={n} className={eu===n?'selected':''} aria-pressed={eu===n} onClick={()=>{definirQuem(n);setEu(n)}}>{n}</button>)}</div></section>}

/** Pergunta uma vez, no próprio aparelho, quem está usando (para mostrar quem pegou cada item). */
export function QuemBanner(){
 const [eu,setEu]=useState(quem());
 if(eu)return null;
 return <div className="quem-banner"><span>Quem está com este aparelho?</span>{['Ale','Yas'].map(n=><button key={n} className="secondary" onClick={()=>{definirQuem(n);setEu(n)}}>Sou {n}</button>)}</div>}
