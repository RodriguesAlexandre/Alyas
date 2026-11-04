import {sameProduct} from './product-identity.ts';
export const clean=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
export function readLabel(text:string){
 const lines=text.split(/\n/).map(x=>x.trim()).filter(Boolean);
 const semKg=lines.filter(l=>!/nesta\s*emb|\b1\s*k[g9]\b|por\s*k[g9]|\/\s*k[g9]|p\.?\s*k[g9]/i.test(l)).join('\n');
 const achar=(t:string)=>[...new Set([...t.matchAll(/(?:R\s*\$\s*)?(\d{1,4})\s?[,.]\s?(\d{2})(?!\d)/gi)].map(m=>Number(m[1]+'.'+m[2])))].filter(p=>p>0&&p<10000);
 const principais=achar(semKg),todos=achar(text);
 const prices=principais.length?[...principais,...todos.filter(p=>!principais.includes(p))]:todos;
 const name=lines.filter(l=>/[a-zÀ-ÿ]{3}/i.test(l)&&!/(?:r\s*\$|clube|oferta|validade|a partir|atacado|varejo|por\s*kg|pre[cç]o|economize|desconto|c[oó]digo|cart[aã]o|leve\s+\d|pague\s+\d)/i.test(l)).slice(0,2).map(l=>l.replace(/["'|_*~«»]+/g,' ').replace(/\s*[-–]?\s*(?:R\s*\$\s*)?\d{1,4}[,.]\d{2}.*$/,'').replace(/\s+[a-z]{1,2}$/i,'').trim()).filter(Boolean).join(' ').replace(/\s+/g,' ').slice(0,80);
 const pack=text.match(/\b(\d+(?:[,.]\d+)?)\s*(kg|g|ml|litros?|l)\b/i);
 const unit=/\b(?:por|\/)\s*kg\b|\bkg\s*(?:R\$|$)/im.test(text)&&!pack?'kg':'un';
 return {name,prices,ean:lerEAN(text),price:principais.length===1?String(principais[0]):prices.length===1?String(prices[0]):'',unit,packageQty:pack?Number(pack[1].replace(',','.')):null,packageUnit:pack?(/litro/i.test(pack[2])?'L':pack[2].toLowerCase()==='l'?'L':pack[2].toLowerCase()):'g',conditional:/clube|cart[aã]o|a partir|atacado|leve\s+\d|pague\s+\d|meu bh/i.test(text)};
}
export function matchScore(a:string,b:string,catalog:any[]=[]){const aa=clean(a),bb=clean(b);if(aa===bb)return 1;if(sameProduct(a,b,catalog))return .92;const tokens=(s:string)=>s.split(' ').filter(t=>t.length>2&&!['pct','pcte','cong','com','sem','para'].includes(t));const x=tokens(aa),y=tokens(bb);if(!x.length||!y.length)return 0;const hits=y.filter(t=>x.includes(t)).length;return hits/y.length*.7+hits/x.length*.3;}
export function unitCost(price:number,unit:string,packageQty?:number|null,packageUnit?:string){if(unit==='kg'||unit==='L')return {value:price,unit};if(unit==='g'||unit==='ml')return {value:price*1000,unit:unit==='g'?'kg':'L'};if(!packageQty||!packageUnit)return null;return {value:price/(packageQty/(packageUnit==='g'||packageUnit==='ml'?1000:1)),unit:packageUnit==='g'||packageUnit==='kg'?'kg':'L'};}
export function previousPrice(history:any[],name:string,unit:string,packageQty?:number|null,packageUnit?:string){return history.filter(h=>!h.archived&&h.date).flatMap(h=>h.items.map((i:any)=>({...i,boughtDate:h.date,store:h.store||'Não informado'}))).filter(i=>clean(i.name)===clean(name)&&i.unit===unit&&i.price!=null&&(unit==='kg'||unit==='L'||(i.packageQty||null)===(packageQty||null)&&(i.packageUnit||'')===(packageUnit||''))).sort((a,b)=>Date.parse(b.boughtDate)-Date.parse(a.boughtDate))[0];}
export function repeatPurchase(items:any[],bought:any[]){const next=[...items];for(const old of bought){if(next.some(i=>clean(i.name)===clean(old.name)&&i.unit===old.unit))continue;const {priceValidUntil,priceSourceUrl,...rest}=old;next.push({...rest,id:crypto.randomUUID(),checked:false,priceSource:'history'})}return next;}

/** Código de barras (EAN-13) impresso embaixo das barras, ex.: "7 898226 340757". */
export function lerEAN(text:string){for(const m of text.matchAll(/(\d[\d ]{11,18}\d)/g)){const d=m[1].replace(/\s/g,'');for(let i=0;i+13<=d.length;i++){const e=d.slice(i,i+13);if(eanValido(e))return e}}return ''}
export function eanValido(e:string){if(!/^\d{13}$/.test(e))return false;const s=e.slice(0,12).split('').reduce((a,c,i)=>a+Number(c)*(i%2?3:1),0);return (10-s%10)%10===Number(e[12])}
