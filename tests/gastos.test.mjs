import test from 'node:test';import assert from 'node:assert/strict';
import {gastos} from '../src/gastos-logic.ts';import {textoWhats} from '../src/quem.ts';
const h=(date,total,items)=>({id:date,date,total,unknown:0,items});
const it=(name,cat,price,qty=1)=>({id:name+price,name,cat,price,qty,unit:'un',checked:true,date:null});
test('gastos por mês, categoria e variação de preço',()=>{
 const d={catalog:[],budget:500,history:[h('2026-09-10T12:00:00-03:00',30,[it('Café','Mercearia',20),it('Banana','Hortifruti',10)]),h('2026-10-20T12:00:00-03:00',25,[it('Café','Mercearia',25)])]};
 const g=gastos(d,'tudo',new Date('2026-10-31T12:00:00-03:00'));
 assert.equal(g.mesAtual,25);assert.equal(g.mesAnterior,30);
 assert.equal(g.categorias[0].cat,'Mercearia');assert.equal(g.categorias[0].total,45);
 assert.equal(g.variacoes[0].nome,'Café');assert.equal(g.variacoes[0].agora,25);
 assert.equal(gastos({...d,history:[]},'3m').compras,0);
});
test('texto do WhatsApp agrupa o que falta por categoria',()=>{
 const t=textoWhats([{name:'Pão',cat:'Mercearia',qty:1,unit:'pacote',checked:false},{name:'Alface',cat:'Hortifruti',qty:1,unit:'un',checked:false},{name:'Leite',cat:'Laticínios',qty:2,unit:'L',checked:true}]);
 assert.ok(t.indexOf('*Hortifruti*')<t.indexOf('*Mercearia*'));assert.ok(!t.includes('Leite'));assert.ok(t.includes('2 itens'));
});
