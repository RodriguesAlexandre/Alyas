import test from 'node:test';import assert from 'node:assert/strict';
import {melhorCotacao,resumoCasa,filtrarCasa,comprei, desfazerCompra,iconeCasa,frenteMeta} from '../src/casa-logic.ts';
const it=(o)=>({id:o.name,cat:'Eletroeletrônicos',status:'temos',fotos:[],cotacoes:[],criado:'2026-11-20',...o});
test('cotações, resumo, filtro e compra',()=>{
 const robo=it({name:'Robô aspirador H50 Pro',status:'cotando',cotacoes:[{id:'a',loja:'Amazon',preco:1899,data:''},{id:'b',loja:'Magalu',preco:1749.9,data:''}]});
 const pratos=it({name:'Jogo de pratos',cat:'Utensílios',preco:180,comodo:'Cozinha'});
 assert.equal(melhorCotacao(robo).loja,'Magalu');
 const r=resumoCasa([robo,pratos]);assert.equal(r.temos,1);assert.equal(r.cotando,1);assert.equal(r.valorTemos,180);assert.equal(r.previsto,1749.9);
 assert.deepEqual(filtrarCasa([robo,pratos],'todos','Todas','cozinha').map(i=>i.name),['Jogo de pratos']);
 assert.deepEqual(filtrarCasa([robo,pratos],'cotando','Todas','').map(i=>i.name),['Robô aspirador H50 Pro']);
 const c=comprei(robo,melhorCotacao(robo),new Date('2026-11-20T12:00:00Z'));assert.equal(c.status,'temos');assert.equal(c.preco,1749.9);assert.equal(c.loja,'Magalu');assert.equal(c.dataCompra,'2026-11-20');
 assert.deepEqual(filtrarCasa([robo,pratos],'quero','Todas','').map(i=>i.name),['Robô aspirador H50 Pro']);
 assert.equal(frenteMeta({...robo,meta:1500}).diferenca,249.9);assert.equal(frenteMeta(pratos),null);
 assert.equal(iconeCasa(robo),'robot');assert.equal(iconeCasa({name:'Cesto organizador',cat:'Organização e limpeza'}),'basket');
});

test('desfazerCompra volta o item para cotando e limpa a compra feita pela cotação', () => {
  const c = { id: 'c1', loja: 'Xiaomi', preco: 1899, data: '2026-11-20' };
  const item = { id: 'r', name: 'Robô H50 Pro', cat: 'Eletroeletrônicos', status: 'cotando', fotos: [], cotacoes: [c], criado: '2026-11-20' };
  const v = desfazerCompra(comprei(item, c));
  assert.equal(v.status, 'cotando'); assert.equal(v.dataCompra, undefined); assert.equal(v.preco, null); assert.equal(v.loja, undefined);
  assert.equal(desfazerCompra(comprei({ ...item, cotacoes: [] })).status, 'queremos');
});
