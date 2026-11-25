// Alyas: abre mesmo com sinal fraco. Página: rede primeiro. Arquivos estáticos: cache primeiro.
const CACHE = 'alyas-vmwvfvi3v';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', 'favicon.svg', 'icon-192.png', 'manifest.webmanifest']).then(() => c.addAll(["assets/chunk-6adaswkp.js","assets/chunk-yqeyy668.js","assets/chunk-3sd00xpk.js","assets/chunk-bv12h964.js","assets/chunk-0xhh75r0.js","assets/chunk-b53q3qf0.js","assets/chunk-tw45y6h5.js","assets/chunk-dwvm0ayh.js","assets/chunk-be00tvc7.js","assets/chunk-wnatf5bc.js","assets/chunk-87x6t25q.js","assets/chunk-1893v2y3.js","assets/chunk-100bkpdv.js","assets/chunk-2z0r7sk3.js","assets/chunk-4dcaf1b9.js","assets/chunk-t1h1v9br.js","assets/main-3a6wz6hv.js","assets/chunk-ra794mx9.js","assets/chunk-a9jrajws.js","assets/chunk-k8rgr9rv.js","assets/chunk-8pbx3qcj.js","assets/chunk-vk3tgdyf.js","assets/chunk-14kz87pp.js","assets/chunk-zs51hqge.js","assets/main-wqh38ttr.css","assets/chunk-sgtdfh99.js","assets/chunk-pvxzwfe5.js","assets/chunk-feabgga0.js"])).catch(() => {}))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== 'aleyas-cfg').map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return; // planilha e ofertas sempre online
  const isPage = e.request.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('.html');
  if (isPage) {
    e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; })));
});

// Notificações: o push chega vazio; aqui buscamos na planilha o que mudou e mostramos o aviso.
self.addEventListener('push', e => {
  e.waitUntil((async () => {
    try { (await self.clients.matchAll({ type: 'window', includeUncontrolled: true })).forEach(c => c.postMessage({ tipo: 'sync' })); } catch (err) { /* */ }
    let titulo = 'AleYas', corpo = 'Tem novidade no app', aba = '';
    try {
      const cfg = await (await (await caches.open('aleyas-cfg')).match('cfg')).json();
      const sub = await self.registration.pushManager.getSubscription();
      const r = await fetch(cfg.url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: 'pushUlt', key: cfg.key, endpoint: sub ? sub.endpoint : '' }) });
      const j = await r.json(); const msgs = (j && j.msgs) || [];
      if (msgs.length) { const por = [...new Set(msgs.map(m => m.por).filter(Boolean))]; titulo = por.length ? 'AleYas · ' + por.join(' e ') : 'AleYas'; corpo = msgs.map(m => m.texto).slice(-4).join('\n'); aba = msgs[msgs.length - 1].aba || ''; }
    } catch (err) { /* mostra o aviso genérico */ }
    await self.registration.showNotification(titulo, { body: corpo, icon: 'icon-192.png', badge: 'icon-192.png', tag: 'aleyas', renotify: true, data: { aba } });
  })());
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => { const c = cs.find(x => x.url.includes(self.registration.scope)); if (c) return c.focus(); return self.clients.openWindow('./'); }));
});
