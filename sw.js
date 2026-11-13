// Service worker de la app de horas.
// Estrategia: primero la red (así siempre ves la última versión) y, si no hay internet, la copia guardada.
const V = 'horas-v12';

self.addEventListener('install', () => { self.skipWaiting(); });

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const ks = await caches.keys();
    await Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', e => { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== self.location.origin) return;   // Firebase, Google y el Worker pasan directo
  e.respondWith((async () => {
    try {
      const res = await fetch(r.url, { cache: 'no-store', credentials: 'same-origin' });
      if (res && res.status === 200) {
        const c = await caches.open(V);
        c.put(r, res.clone());
      }
      return res;
    } catch (err) {
      const m = await caches.match(r, { ignoreSearch: true });
      if (m) return m;
      if (r.mode === 'navigate') {
        const i = (await caches.match('./index.html')) || (await caches.match('./'));
        if (i) return i;
      }
      throw err;
    }
  })());
});
