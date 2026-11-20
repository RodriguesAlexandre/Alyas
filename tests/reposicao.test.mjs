import test from 'node:test';import assert from 'node:assert/strict';
import {sugerirReposicao} from '../src/reposicao.ts';
const h=(date,items)=>({id:date,date,total:1,unknown:0,items:items.map(n=>({name:n,qty:1,unit:'un',cat:'Mercearia',price:1}))});
test('sugere repor pelo intervalo de costume',()=>{
 const d={catalog:[],items:[{name:'Azeite',checked:false}],history:[h('2026-10-01T12:00:00-03:00',['Café','Azeite','Vinho']),h('2026-10-15T12:00:00-03:00',['Café','Azeite']),h('2026-10-29T12:00:00-03:00',['Café','Azeite'])]};
 const s=sugerirReposicao(d,new Date('2026-11-11T12:00:00-03:00'));
 assert.deepEqual(s.map(x=>x.nome),['Café']);assert.equal(s[0].mediaDias,14);assert.equal(s[0].diasDesde,13);
 assert.equal(sugerirReposicao(d,new Date('2026-11-02T12:00:00-03:00')).length,0);
});
