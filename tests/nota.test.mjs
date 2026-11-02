import test from 'node:test';import assert from 'node:assert/strict';
import {montarNota,registrarNota,notaDuplicada} from '../src/nota-logic.ts';
import {defaultCatalog} from '../src/catalog-data.ts';
test('nota lida pela IA vira compra, marca tem em casa e tira da lista',()=>{
 const n=montarNota({store:'Supermercados BH',date:'2026-10-30',total:30,ref:'99',items:[{name:'Café',qty:1,unit:'un',price:20,lineTotal:20,cat:'Mercearia'},{name:'Banana prata',qty:1.2,unit:'kg',lineTotal:10,cat:'xx'}]},new Date('2026-10-31T12:00:00Z'));
 assert.equal(n.items[1].cat,'Outros');assert.equal(n.items[1].price,8.33);assert.equal(n.total,30);assert.ok(!n.reviewNote);
 const data={catalog:defaultCatalog,items:[{id:'a',name:'Café',qty:1,unit:'un',cat:'Mercearia',price:null,date:null,checked:false},{id:'b',name:'Detergente',qty:1,unit:'un',cat:'Limpeza',price:null,date:null,checked:false}],pantry:[],history:[],plan:{},budget:500,profiles:[]};
 const r=registrarNota(data,n);
 assert.equal(r.tirados,1);assert.deepEqual(r.data.items.map(i=>i.id),['b']);assert.equal(r.data.history.length,1);
 const cafe=r.data.catalog.find(p=>p.id===r.data.history[0].items[0].catalogId);assert.equal(cafe.supply,'ok');
 assert.ok(notaDuplicada(r.data,montarNota({total:30,date:'2026-10-30',items:[{name:'x',qty:1,unit:'un',lineTotal:30}]})));
 assert.ok(montarNota({total:50,items:[{name:'x',qty:1,unit:'un',lineTotal:30}]}).reviewNote);
});
