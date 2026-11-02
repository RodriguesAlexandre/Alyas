// Quem está usando este aparelho (Ale ou Yas) e texto da lista para o WhatsApp.
const CHAVE = 'aleyas-quem';
export function quem(): string { try { return localStorage.getItem(CHAVE) || ''; } catch { return ''; } }
export function definirQuem(nome: string) { try { localStorage.setItem(CHAVE, nome); window.dispatchEvent(new Event('aleyas-quem')); } catch { /* sem armazenamento */ } }

const ORDEM = ['Hortifruti', 'Proteínas', 'Laticínios', 'Mercearia', 'Bebidas', 'Limpeza', 'Higiene', 'Utilidades', 'Outros'];
const fmt = (n: number) => String(Math.round(n * 1000) / 1000).replace('.', ',');
export function textoWhats(items: any[]): string {
  const falta = items.filter(i => !i.checked);
  const linhas = ['🛒 *Lista de compras — AleYas*', ''];
  for (const cat of ORDEM) {
    const l = falta.filter(i => (i.cat || 'Outros') === cat).sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    if (!l.length) continue;
    linhas.push('*' + cat + '*');
    for (const i of l) linhas.push('▫️ ' + i.name + ' — ' + fmt(i.qty) + ' ' + i.unit);
    linhas.push('');
  }
  linhas.push(falta.length + ' itens · abra o app para marcar: ' + (typeof location !== 'undefined' ? location.origin + location.pathname : 'https://rodriguesalexandre.github.io/Alyas/'));
  return linhas.join('\n');
}
