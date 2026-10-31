import {test} from 'node:test';
import assert from 'node:assert/strict';
import {consolidate,recipes} from '../src/data.ts';
import {stateSchema} from '../src/validation.ts';
test('soma porções individuais e desconta kg de ingredientes em g',()=>{const result=consolidate({'0-Almoço':{recipe:'chicken'}},[{name:'Peito de frango',qty:.2,unit:'kg'}],[{portions:1},{portions:1.5}]);assert.equal(result.find(x=>x.name==='Peito de frango').qty,175);assert.equal(result.find(x=>x.name==='Arroz cru').qty,150)});
test('despensa suficiente remove necessidade e respeita unidades incompatíveis',()=>{const result=consolidate({'0-Café da manhã':{recipe:'oats'}},[{name:'Leite',qty:1,unit:'L'},{name:'Banana',qty:5,unit:'un'},{name:'Aveia',qty:1,unit:'pacote'}],[{portions:1},{portions:1}]);assert.deepEqual(result.map(x=>[x.name,x.qty]),[['Aveia',80]])});
test('agrega ingredientes repetidos na semana',()=>{const result=consolidate({'0-Café da manhã':{recipe:'oats'},'1-Café da manhã':{recipe:'oats'}},[],[{portions:1},{portions:1}]);assert.equal(result.find(x=>x.name==='Aveia').qty,160)});
test('receitas iniciais não incluem camarão',()=>{assert.ok(recipes.every(r=>r.ingredients.every(i=>!i.name.toLowerCase().includes('camar'))))});
test('validação rejeita quantidades negativas e perfil ausente',()=>{assert.equal(stateSchema.safeParse({items:[{qty:-1}],profiles:[]}).success,false)});
