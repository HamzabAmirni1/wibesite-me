// Service Worker for Hamza Amirni Portfolio & Monetag Ads
const CACHE_NAME = 'hamza-portfolio-v1';

// Monetag Ads Configuration
self.options = {
    "domain": "5gvci.com",
    "zoneId": 10662967
};
self.lary = "";

// Import Monetag Service Worker
importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw');

// PWA: Caching and Auto-Update Logic
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Let Monetag handle its own requests if needed, 
    // otherwise handle normal fetch if you want to add caching.
    // For now, we just ensure it's a valid PWA worker.
});

