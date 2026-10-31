import {clean} from './label-logic.ts';
const aliases:Record<string,string>={'arroz cru':'arroz','pao integral':'pao','sardinha':'sardinha ao molho de tomate'};
const name=(s:string)=>aliases[clean(s)]||clean(s);
export function recipeFit(recipe:any,data:any){let usual=0,home=0,low=0;for(const i of recipe.ingredients){const p=data.catalog?.find((p:any)=>name(p.name)===name(i.name));if(p)usual++;if(p?.supply==='low')low++;if(p?.supply==='ok'||p?.supply==='low'||data.pantry.some((x:any)=>name(x.name)===name(i.name)&&x.qty>0))home++;}return{usual,home,low}}
