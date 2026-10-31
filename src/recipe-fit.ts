import {clean} from './label-logic.ts';
// Ingredientes que toda casa tem e que não precisam estar na lista.
const BASICOS=new Set(['sal','agua']);
const aliases:Record<string,string>={'arroz cru':'arroz','pao de forma':'pao','sardinha':'sardinha ao molho de tomate','molho de tomate':'massa de tomate','baconil':'bacon','salame':'salaminho','muçarela':'queijo','mucarela':'queijo','batata congelada':'batata frita'};
const name=(s:string)=>aliases[clean(s)]||clean(s);
/** usual: ingredientes que vocês costumam comprar · missing: os que não estão no catálogo · complete: todos estão */
export function recipeFit(recipe:any,data:any){let usual=0,home=0,low=0;const missing:string[]=[];for(const i of recipe.ingredients){if(BASICOS.has(name(i.name))){usual++;continue}const p=data.catalog?.find((p:any)=>name(p.name)===name(i.name)||(p.aliases||[]).some((a:string)=>name(a)===name(i.name)));if(p)usual++;else missing.push(i.name);if(p?.supply==='low')low++;if(p?.supply==='ok'||p?.supply==='low'||data.pantry.some((x:any)=>name(x.name)===name(i.name)&&x.qty>0))home++;}return{usual,home,low,missing,complete:missing.length===0}}
