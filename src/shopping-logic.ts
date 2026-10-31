// Merge independent changes without replacing a newer household snapshot.
export function mergeChanges(base:any,local:any,remote:any):any{
 const same=(a:any,b:any)=>JSON.stringify(a)===JSON.stringify(b);
 if(same(local,base))return remote;
 if(same(remote,base)||same(remote,local))return local;
 if(Array.isArray(base)&&Array.isArray(local)&&Array.isArray(remote)){
  if([...base,...local,...remote].every(x=>x&&typeof x.id==='string')){
   const b=new Map(base.map(x=>[x.id,x])),l=new Map(local.map(x=>[x.id,x])),r=new Map(remote.map(x=>[x.id,x]));
   return [...new Set([...remote.map(x=>x.id),...local.map(x=>x.id)])].map(id=>mergeChanges(b.get(id),l.get(id),r.get(id))).filter(x=>x!==undefined);
  }
  if(base.length===local.length&&base.length===remote.length)return local.map((x,i)=>mergeChanges(base[i],x,remote[i]));
 }
 if(base&&local&&remote&&typeof base==='object'&&typeof local==='object'&&typeof remote==='object'&&!Array.isArray(base)){
  const out:any={};for(const k of new Set([...Object.keys(base),...Object.keys(local),...Object.keys(remote)])){const v=mergeChanges(base[k],local[k],remote[k]);if(v!==undefined)out[k]=v}return out;
 }
 throw Error('Vocês alteraram o mesmo campo. Sua alteração não foi salva. Feche a edição, atualize a casa e tente novamente.');
}
export function usablePrice(item:any,now=Date.now()){return item.price!==null&&item.price!==undefined&&(item.priceSource!=='offer'||!!item.priceValidUntil&&Date.parse(item.priceValidUntil)>=now)}
export function priceLabel(item:any){if(item.price===null||item.price===undefined)return 'Preço desconhecido';if(item.priceSource==='offer')return usablePrice(item)?'Oferta vigente BH':'Oferta vencida • atualizar preço';return item.priceSource==='history'?'Preço histórico • confirmar':item.priceSource==='shelf'?'Etiqueta conferida • ainda não pago':item.priceSource==='paid'?'Preço pago':'Preço informado por vocês'}
export function cartTotals(items:any[],budget:number,now=Date.now()){const sum=(list:any[])=>list.reduce((n,i)=>n+(usablePrice(i,now)?i.qty*i.price:0),0);const cart=items.filter(i=>i.checked);return{cart:sum(cart),remaining:budget-sum(cart),planned:sum(items),unknown:cart.filter(i=>!usablePrice(i,now)).length,allUnknown:items.filter(i=>!usablePrice(i,now)).length}}
