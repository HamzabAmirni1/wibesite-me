/**
 * PWA Service Worker for Hamza Amirni Portfolio
 * Includes original ad script and PWA caching/update logic.
 */

// Original Monetag Script (Keep it to avoid breaking ads)
try {
    self.options = {
        "domain": "5gvci.com",
        "zoneId": 10662917
    }
    self.lary = ""
    importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw')
} catch (e) {
    console.log("Monetag script failed to load, continuing with PWA logic.");
}

// PWA Logic: Caching and Auto-Update
const CACHE_NAME = 'hamza-amirni-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/hamza-logo.svg',
];

// Install Event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        }).catch(err => console.log("Cache failed to open", err))
    );
    self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Fetch Event (Caching Strategy: Stale-While-Revalidate)
self.addEventListener('fetch', (event) => {
    // Check if it's a GET request from our origin
    if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                const fetchPromise = fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                }).catch(() => cachedResponse); // fallback to cache on network failure

                return cachedResponse || fetchPromise;
            });
        })
    );
});

// Listen for messages from the main script
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

