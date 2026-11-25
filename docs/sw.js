// Alyas: abre mesmo com sinal fraco. Página: rede primeiro. Arquivos estáticos: cache primeiro.
const CACHE = 'alyas-vmwvev1wj';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', 'favicon.svg', 'icon-192.png', 'manifest.webmanifest']).then(() => c.addAll(["assets/chunk-parvced0.js","assets/chunk-scx5039g.js","assets/chunk-3j5z8mn9.js","assets/chunk-0e4772bd.js","assets/chunk-93sg96mm.js","assets/chunk-xz6akm8e.js","assets/chunk-bhg4jyng.js","assets/chunk-shcmqr5b.js","assets/chunk-twr60nh4.js","assets/chunk-ap5agdjb.js","assets/chunk-dxcs45pk.js","assets/main-n88y65vz.js","assets/chunk-v6m9fssy.js","assets/chunk-4yg4zpan.js","assets/chunk-631v5ejf.js","assets/chunk-ch57t00q.js","assets/chunk-sdb0e0ws.js","assets/chunk-thnxvcxt.js","assets/chunk-bc93vkpk.js","assets/chunk-9jpcgrrr.js","assets/chunk-mmaxyses.js","assets/chunk-vkr7sngb.js","assets/chunk-p1pwwsd8.js","assets/chunk-bc9rwyqe.js","assets/main-bmxz1s4g.css","assets/chunk-s2nw1hfw.js","assets/chunk-ydtsr1yk.js","assets/chunk-272xqhwe.js","assets/chunk-k3p342h8.js","assets/chunk-9ghpvsmh.js"])).catch(() => {}))); });
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
