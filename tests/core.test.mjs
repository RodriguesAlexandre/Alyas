import {test} from 'node:test';
import assert from 'node:assert/strict';
import {consolidate,recipes} from '../src/data.ts';
import {stateSchema} from '../src/validation.ts';
test('soma porções individuais e desconta kg de ingredientes em g',()=>{const result=consolidate({'0-Almoço':{recipe:'frango-brocolis'}},[{name:'Peito de frango',qty:.2,unit:'kg'}],[{portions:1},{portions:1.5}]);assert.equal(result.find(x=>x.name==='Peito de frango').qty,175);assert.equal(result.find(x=>x.name==='Arroz').qty,150)});
test('despensa suficiente remove necessidade e respeita unidades incompatíveis',()=>{const result=consolidate({'0-Lanche':{recipe:'banana-morango'}},[{name:'Banana',qty:5,unit:'un'},{name:'Morango',qty:1,unit:'kg'},{name:'Nutella',qty:1,unit:'pacote'}],[{portions:1},{portions:1}]);assert.deepEqual(result.map(x=>[x.name,x.qty]),[['Nutella',30]])});
test('agrega ingredientes repetidos na semana',()=>{const result=consolidate({'0-Lanche':{recipe:'banana-morango'},'1-Lanche':{recipe:'banana-morango'}},[],[{portions:1},{portions:1}]);assert.equal(result.find(x=>x.name==='Morango').qty,320)});
test('receitas iniciais não incluem camarão',()=>{assert.ok(recipes.every(r=>r.ingredients.every(i=>!i.name.toLowerCase().includes('camar'))))});
test('validação rejeita quantidades negativas e perfil ausente',()=>{assert.equal(stateSchema.safeParse({items:[{qty:-1}],profiles:[]}).success,false)});
