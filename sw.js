const C='horas-extra-v5';
const A=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url);
 const ext=u.origin==='https://www.gstatic.com'&&u.pathname.indexOf('/firebasejs/')===0;
 if(u.origin!==location.origin&&!ext)return;
 e.respondWith(caches.open(C).then(async c=>{
  const hit=await c.match(e.request,{ignoreSearch:!ext});
  if(ext&&hit)return hit;
  const net=fetch(e.request).then(r=>{if(r&&r.ok)c.put(e.request,r.clone());return r}).catch(()=>hit||(ext?Response.error():c.match('./index.html')));
  return hit||net;
 }));
});
