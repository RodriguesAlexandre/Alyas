// Alyas: abre mesmo com sinal fraco. Página: rede primeiro. Arquivos estáticos: cache primeiro.
const CACHE = 'alyas-vmwvg0nm3';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', 'favicon.svg', 'icon-192.png', 'manifest.webmanifest']).then(() => c.addAll(["assets/chunk-w2fm2gv4.js","assets/chunk-md00hr7a.js","assets/chunk-6kk7yr5q.js","assets/chunk-7eb9kvd7.js","assets/chunk-pc395t5x.js","assets/chunk-0ar42avj.js","assets/main-rr9eznhy.js","assets/chunk-c9mvv0ff.js","assets/chunk-c4w2g5sh.js","assets/chunk-kxfn4ex1.js","assets/chunk-xjk0pqq0.js","assets/chunk-kmjddf4d.js","assets/chunk-359r3j1s.js","assets/chunk-mcwkggs8.js","assets/chunk-yz38tjwx.js","assets/chunk-m0cajpqa.js","assets/chunk-6j3v4gpv.js","assets/chunk-m0rgbfx7.js","assets/main-yzp6vqjf.css","assets/chunk-g8h99eac.js","assets/chunk-fy78fqys.js","assets/chunk-4qfx0a0r.js","assets/chunk-m04pbrww.js","assets/chunk-8zaqpb59.js","assets/chunk-qe5wfn27.js","assets/chunk-pvxzwfe5.js","assets/chunk-fgb5he7h.js","assets/chunk-1da6ad3p.js"])).catch(() => {}))); });
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
