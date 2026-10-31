export type Product={id:string,name:string,cat:string,unit:string,brand:string,note:string,favorite:boolean,aliases?:string[],supply?:'unknown'|'ok'|'low'|'out'};
export const catalogCategories=['Hortifruti','Proteínas','Laticínios','Mercearia','Bebidas','Limpeza','Higiene','Utilidades','Outros'];
const groups:Record<string,string[]>={
Hortifruti:['Tomate-cereja','Tomate','Cebola','Cebolinha','Cebola roxa','Pimentão','Salsa','Brócolis','Couve','Alface','Alho','Mamão','Fruta','Salada','Batata'],
Proteínas:['Salaminho','Carne','Bacon','Sardinha ao molho de tomate','Peito de frango'],
Laticínios:['Queijo','Creme de leite','Manteiga','Cheddar'],
Mercearia:['Azeite','Milho','Massa de tomate','Macarrão','Pimenta-do-reino','Bolo','Torradas','Nutella','Farofa','Tempero','Bicarbonato','Batata frita','Batata palha','Café','Ketchup','Mostarda','Arroz','Pão','Pipoca de micro-ondas com tempero','Caldo Knorr','Louro'],
Bebidas:['Água com gás','Cerveja','Refri'],
Limpeza:['Pinho Sol','Pastilha Pato para vaso','Detergente','Amaciante','Sabão em pó'],
Higiene:['Papel higiênico','Sabonete'],
Utilidades:['Coador de café','Pano de pia','Pilha maior 4','Luva','Máscara','Super Bonder']};
export const defaultCatalog:Product[]=Object.entries(groups).flatMap(([cat,names])=>names.map(name=>({id:'notion-'+name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-'),name,cat,unit:'un',brand:'',note:name==='Pilha maior 4'?'Confirmar tamanho da pilha e quantidade da embalagem.':name==='Coador de café'?'Confirmar modelo ou tipo de filtro.':'',favorite:false})));
export const normalize=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().toLowerCase();
export function ensureCatalog(data:any){return {...data,catalog:data.catalog??defaultCatalog}}
export function requestProduct(items:any[],p:Product,id:string){const old=items.find(i=>i.catalogId===p.id||normalize(i.name)===normalize(p.name));if(old)return items.map(i=>i.id===old.id?{...i,checked:false,purchaseRecordId:undefined}:i);return [...items,{id,catalogId:p.id,name:p.name,qty:1,unit:p.unit,cat:p.cat,checked:false,price:null,date:null}]}
