import test from 'node:test';import assert from 'node:assert/strict';
import {ocorre,agenda,marcar,proxima,rrule,descreverRepeticao,linkGoogleAgenda} from '../src/rituais-logic.ts';
const base={id:'r',nome:'Lavar roupas',cat:'Roupas',resp:'Ambos',feitos:[]};
test('semanal na sexta',()=>{const r={...base,repete:'semanal',dias:[5],inicio:'2026-11-01',hora:'07:00',dur:60};
 assert.equal(ocorre(r,'2026-11-27'),true);assert.equal(ocorre(r,'2026-11-26'),false);assert.equal(proxima(r,'2026-11-24'),'2026-11-27');
 assert.equal(rrule(r),'RRULE:FREQ=WEEKLY;BYDAY=FR');assert.equal(descreverRepeticao(r),'Toda sexta · 07:00–08:00');
 assert.match(linkGoogleAgenda(r),/dates=20261106T070000%2F20261106T080000/);});
test('quinzenal, a cada x dias e mensal',()=>{
 const q={...base,repete:'quinzenal',dias:[6],inicio:'2026-11-07'};assert.equal(ocorre(q,'2026-11-07'),true);assert.equal(ocorre(q,'2026-11-14'),false);assert.equal(ocorre(q,'2026-11-21'),true);
 const d={...base,repete:'dias',cada:2,inicio:'2026-11-20'};assert.equal(ocorre(d,'2026-11-22'),true);assert.equal(ocorre(d,'2026-11-23'),false);
 const m={...base,repete:'mensal',inicio:'2026-01-31'};assert.equal(ocorre(m,'2026-02-28'),true);assert.equal(ocorre(m,'2026-03-31'),true);});
test('agenda: hoje, atraso e check',()=>{const r={...base,repete:'semanal',dias:[5],inicio:'2026-11-01'};
 let a=agenda([r],'2026-11-24');assert.equal(a.hoje.length,0);assert.equal(a.atrasados[0].dia,'2026-11-20');assert.equal(a.proximos[0].dia,'2026-11-27');
 const feito=marcar(r,'2026-11-20','Yas');a=agenda([feito],'2026-11-24');assert.equal(a.atrasados.length,0);assert.equal(feito.feitos[0].por,'Yas');
 assert.equal(marcar(feito,'2026-11-20').feitos.length,0);});
