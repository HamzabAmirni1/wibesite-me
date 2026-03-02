/**
 * Service Worker - Hamza Amirni Portfolio
 * Monetag Ads + stable PWA caching (no auto-reload)
 */

// ─── Monetag Ads ───────────────────────────────────────────
try {
    self.options = {
        "domain": "5gvci.com",
        "zoneId": 10662917
    };
    self.lary = "";
    importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw');
} catch (e) {
    // Monetag failed silently - PWA still works
}

// ─── PWA Cache ─────────────────────────────────────────────
const CACHE_NAME = 'hamza-v2';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            cache.addAll(['/', '/index.html', '/manifest.json', '/hamza-logo.svg'])
                .catch(() => { })
        )
    );
    // NO skipWaiting → prevents refresh loop
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    // NO clients.claim() → prevents refresh loop
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request).then(cached => {
            const network = fetch(event.request).then(res => {
                if (res && res.status === 200) {
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, res.clone()));
                }
                return res;
            }).catch(() => cached);
            return cached || network;
        })
    );
});
