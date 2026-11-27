// Alyas: abre mesmo com sinal fraco. Página: rede primeiro. Arquivos estáticos: cache primeiro.
const CACHE = 'alyas-vmwyxgrnw';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', 'favicon.svg', 'icon-192.png', 'manifest.webmanifest']).then(() => c.addAll(["assets/chunk-536qcw37.js","assets/chunk-p9yqat0h.js","assets/chunk-4b6xyzfc.js","assets/main-4x92b442.js","assets/chunk-f7qmhx5k.js","assets/chunk-8ptt90hz.js","assets/chunk-btmkvcz7.js","assets/chunk-x8p72d8p.js","assets/chunk-jr9tadqs.js","assets/chunk-9br0efmm.js","assets/chunk-a0nd3t97.js","assets/chunk-kx9ckbew.js","assets/chunk-q52ej4aw.js","assets/chunk-vhw04rd1.js","assets/chunk-ckfae99b.js","assets/chunk-99yx61k2.js","assets/chunk-a2rp4ay3.js","assets/chunk-enghykr5.js","assets/chunk-ht8b23dw.js","assets/chunk-x685aj6q.js","assets/chunk-262z1bg4.js","assets/chunk-anpnf2b3.js","assets/main-10cdrxw9.css","assets/chunk-57atndp2.js","assets/chunk-7367bkbr.js","assets/chunk-rvp282r2.js","assets/chunk-54qpw3fn.js","assets/chunk-afyg9348.js","assets/chunk-ypntwr3h.js"])).catch(() => {}))); });
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
