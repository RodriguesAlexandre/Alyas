import {clean} from './label-logic.ts';
// Ingredientes que toda casa tem e que não precisam estar na lista.
const BASICOS=new Set(['sal','agua']);
const aliases:Record<string,string>={'arroz cru':'arroz','pao de forma':'pao','sardinha':'sardinha ao molho de tomate','molho de tomate':'massa de tomate','baconil':'bacon','salame':'salaminho','muçarela':'queijo','mucarela':'queijo','batata congelada':'batata frita'};
const name=(s:string)=>aliases[clean(s)]||clean(s);
/** usual: ingredientes que vocês costumam comprar · missing: os que não estão no catálogo · complete: todos estão */
// Índices em cache (refeitos só quando o catálogo ou a despensa mudam): deixa o Cardápio leve.
let cacheCat:any=null,idxCat=new Map<string,any>(),cachePan:any=null,idxPan=new Set<string>();
const nomeCache=new Map<string,string>();
const nm=(s:string)=>{let v=nomeCache.get(s);if(v===undefined){v=name(s);if(nomeCache.size>5000)nomeCache.clear();nomeCache.set(s,v)}return v};
function indices(data:any){
  if(data.catalog!==cacheCat){cacheCat=data.catalog;idxCat=new Map();for(const p of data.catalog||[]){for(const a of [p.name,...(p.aliases||[])]){const k=nm(a);if(!idxCat.has(k))idxCat.set(k,p)}}}
  if(data.pantry!==cachePan){cachePan=data.pantry;idxPan=new Set((data.pantry||[]).filter((x:any)=>x.qty>0).map((x:any)=>nm(x.name)))}
}
const fitCache=new WeakMap<any,{cat:any,pan:any,r:any}>();
/** usual: ingredientes que vocês costumam comprar · missing: os que não estão no catálogo · complete: todos estão */
export function recipeFit(recipe:any,data:any){
  indices(data);
  const c=fitCache.get(recipe);if(c&&c.cat===data.catalog&&c.pan===data.pantry)return c.r;
  let usual=0,home=0,low=0;const missing:string[]=[];
  for(const i of recipe.ingredients){const k=nm(i.name);if(BASICOS.has(k)){usual++;continue}const p=idxCat.get(k);if(p)usual++;else missing.push(i.name);if(p?.supply==='low')low++;if(p?.supply==='ok'||p?.supply==='low'||idxPan.has(k))home++;}
  const r={usual,home,low,missing,complete:missing.length===0};fitCache.set(recipe,{cat:data.catalog,pan:data.pantry,r});return r}
