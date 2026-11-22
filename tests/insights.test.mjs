import test from 'node:test';import assert from 'node:assert/strict';
import { insights, resumoParaIA } from '../src/insights-logic.ts';
test('insights de custos', () => {
  const hoje = new Date('2026-11-22T12:00:00-03:00');
  const data = { budget: 150, catalog: [], items: [], casa: [], history: [
    { id: 'a', date: '2026-11-20T10:00:00-03:00', total: 300, items: [{ name: 'Picanha', qty: 1, unit: 'kg', cat: 'Proteínas', price: 80, lineTotal: 200 }, { name: 'Arroz', qty: 1, unit: 'un', cat: 'Mercearia', price: 30, lineTotal: 100 }] },
    { id: 'b', date: '2026-10-10T10:00:00-03:00', total: 100, items: [{ name: 'Picanha', qty: 1, unit: 'kg', cat: 'Proteínas', price: 60, lineTotal: 100 }] }] };
  const l = insights(data, hoje);
  assert.ok(l.some(i => /Proteínas/.test(i.titulo)));
  assert.ok(l.some(i => /subiram/.test(i.titulo)));
  assert.match(resumoParaIA(data, hoje), /Proteínas/);
});
