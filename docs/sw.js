// Alyas: abre mesmo com sinal fraco. Página: rede primeiro. Arquivos estáticos: cache primeiro.
const CACHE = 'alyas-vmwvi6ezk';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', 'favicon.svg', 'icon-192.png', 'manifest.webmanifest']).then(() => c.addAll(["assets/chunk-adzm32sf.js","assets/chunk-egbyy2yw.js","assets/chunk-6f3a3200.js","assets/chunk-0yjjm08y.js","assets/chunk-1mgahrx4.js","assets/chunk-zyh8bn00.js","assets/chunk-acyfefe0.js","assets/chunk-xxatsexs.js","assets/chunk-ckraetjn.js","assets/chunk-rg7vcr14.js","assets/chunk-grshvh60.js","assets/main-39eb7myq.js","assets/chunk-vg2n11rm.js","assets/chunk-ydd9d28z.js","assets/chunk-5hr8raze.js","assets/chunk-ttz4bwsj.js","assets/chunk-sppg5akn.js","assets/chunk-3k61bh4z.js","assets/chunk-qvgyypd3.js","assets/chunk-06pk2mfk.js","assets/main-85wr8x05.css","assets/chunk-0y1yvzp4.js","assets/chunk-34r4at16.js","assets/chunk-gyz4818m.js","assets/chunk-0dvk0kmw.js","assets/chunk-e3hsnqxg.js","assets/chunk-q2ckzypd.js","assets/chunk-tw5mttmn.js","assets/chunk-vmg0phrv.js"])).catch(() => {}))); });
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
