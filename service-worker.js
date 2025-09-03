
const CACHE='poliane-cache-v5_1';
const ASSETS=['./','./index.html','./styles.css','./app.js','./content.js','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k===CACHE?null:caches.delete(k))))); self.clients.claim();});
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return; e.respondWith(caches.match(req).then(c=>c||fetch(req).then(r=>{const cp=r.clone(); caches.open(CACHE).then(cache=>cache.put(req,cp)); return r;}).catch(()=>c)));});
